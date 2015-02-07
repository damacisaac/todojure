(ns om-async.core
  (:require [om-async.util :as util]
            [cljs.reader :as reader]
            [cljs.core.async :refer [put! chan <!]]
            [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def app-state
  (atom {:categories []}))

(defn categories []
  (om/ref-cursor (:categories (om/root-cursor app-state))))

(defn todos [category]
  (om/ref-cursor (:category/todos category)))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn handle-change [e data edit-key owner]
  (om/transact! data edit-key (fn [_] (.. e -target -value))))

(defn end-edit [text owner cb]
  (om/set-state! owner :editing false)
  (cb text))

(defn on-edit [todo name]
  (util/edn-xhr
    {:method :put
     :url "todos"
     :data {:db/id (:db/id todo) :todo/name name}
     :on-complete #()}))

(defn on-delete [todo category]
    (om/transact! category :category/todos (fn [xs] (vec (remove #(= todo %) xs))))
    (util/edn-xhr
      {:method :delete
       :url "todos"
       :data todo
       :on-complete #()}))

(defn editable [data owner {:keys [edit-key on-edit on-delete] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false})
    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (let [text (:todo/name data)]
        (dom/li #js {:className "margin-vertical clearfix"}
          (dom/span #js {:style (display (not editing))
                         :onClick #(om/set-state! owner :editing true)
                         :className "margin-right-2x"} text)
          (dom/input
            #js {:style (display editing)
                 :value text
                 :className "form-control"
                 :onChange #(handle-change % data edit-key owner)
                 :onKeyPress #(when (== (.-keyCode %) 13)
                                (end-edit text owner on-edit))
                 :onBlur #(when (om/get-state owner :editing)
                             (end-edit text owner on-edit))})
          (dom/a #js {:href ""}
          (dom/i
            #js {:className "fa fa-times pull-right"
                 :style (display (not editing))
                 :onClick on-delete})))))))

(defn create-todo [category owner]
  (let [todo-name-el (om/get-node owner "todo-name")
        todo-name    (.-value todo-name-el)
        todo     {:todo/name todo-name}]
    (om/transact! category :category/todos #(conj % todo) :create)
    (util/edn-xhr
      {:method :put
       :url "categories"
       :data (update-in category [:category/todos] #(conj % todo))
       :on-complete #()})
    (set! (.-value todo-name-el) "")))

(defn todos-view [category owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "todos"}
        (apply dom/ul nil
          (map
            (fn [todo]
              (om/build editable todo
                {:opts {:edit-key :todo/name
                        :on-edit #(on-edit todo %)
                        :on-delete #(on-delete todo category)}}))
            (:category/todos category)))
        (dom/form nil
          (dom/div #js {:className "form-group"}
            (dom/label #js {:className "sr-only"} "Todo name:")
            (dom/input #js {:className "form-control"
                            :ref "todo-name"
                            :placeholder "Add todo"}))
          (dom/button #js {:type "button"
                           :className "btn btn-primary"
                           :onClick #(create-todo category owner)}
                      "Add todo"))))))

(defn create-category [categories owner]
  (let [category-name-el (om/get-node owner "category-name")
        category-name (.-value category-name-el)
        category {:category/name category-name}]
    (om/transact! categories #(conj % category))
    (util/edn-xhr
      {:method :post
       :url "categories"
       :data category
       :on-complete #()})
    (set! (.-value category-name-el) "")))

(defn delete-category [category]
  (om/transact! (categories) (fn [xs] (vec (remove #(= category %) xs))))
  (util/edn-xhr
    {:method :delete
     :url "categories"
     :data category
     :on-complete #()}))

(defn categories-view [app owner]
  (reify
    om/IRender
    (render [_]
      (let [xs (om/observe owner (categories))]
        (dom/div nil
          (dom/div #js {:className "form-group"}
            (dom/label #js {:className "sr-only"} "Category name:")
            (dom/input #js {:className "form-control"
                            :ref "category-name"
                            :placeholder "Category name"})
          (dom/button #js {:type "button"
                           :className "btn btn-primary"
                           :onClick #(create-category (:categories app) owner)}
                      "Add category"))
            (dom/div #js {:className "todos"}
             (apply dom/ul nil
              (map (fn [category]
                  (dom/li #js {:className "todo-card padding"}
                    (dom/h2 nil (:category/name category)
                      (dom/a #js {:href ""}
                        (dom/i #js {:className "fa fa-times pull-right" :onClick #(delete-category category)})))
                    (om/build todos-view category)))
                xs))))))))

(defn main-view [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (util/edn-xhr
        {:method :get
         :url "categories"
         :on-complete #(om/transact! app :categories (fn [_] %))}))
    om/IRender
    (render [_]
      (dom/div nil
         (om/build categories-view app)))))

(om/root main-view app-state
  {:target (gdom/getElement "app")})

