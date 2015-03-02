(ns om-async.core
  (:require [om-async.xhr-util :as util]
            [cljs.core.async :refer [put! chan <!]]
            [figwheel.client :as fw]
            [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
   (:import [goog.net XhrIo]
             goog.net.EventType
             [goog.events EventType]))

(enable-console-print!)

(def hours-of-day (range 1 25))

(def app-state
  (atom {:categories []}))

(defn categories []
  (om/ref-cursor (:categories (om/root-cursor app-state))))

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
     :data (assoc todo :todo/name name)
     :on-complete #()}))

(defn on-delete [todo category]
    (om/transact! category :category/todos (fn [xs] (vec (remove #(= todo %) xs))))
    (util/edn-xhr
      {:method :delete
       :url "todos"
       :data todo
       :on-complete #()}))

(defn format-date [d]
  (.format (js/moment d) "MMM Do [at] HH:mm:ss"))

(defn editable [data owner {:keys [edit-key on-edit on-delete] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false})
    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (let [text (:todo/name data) start-date (format-date (:todo/startDate data))]
        (dom/li #js {:className "margin-vertical"}
          (dom/span #js {:style (display (not editing))
                         :onClick #(om/set-state! owner :editing true)
                         :className "margin-right-2x"} text)
          (dom/br nil)
          (dom/span #js {:style (display (not editing))
                         :className "todo-date"} start-date)
          (dom/input
            #js {:style (display editing)
                 :value text
                 :className "form-control"
                 :onChange #(handle-change % data edit-key owner)})
          (dom/i
            #js {:className "fa fa-times pull-right"
                 :style (display (not editing))
                 :onClick on-delete}))))))

(defn create-todo [category owner]
  (let [
        todo-name-el (om/get-node owner "todo-name")
        todo-name    (.-value todo-name-el)
        todo-start-date-el (om/get-node owner "todo-start-date")
        todo-start-date (js/Date. (.-value todo-start-date-el))
        todo     {:todo/name todo-name
                  :todo/startDate todo-start-date}
        category (dissoc category :active)]
    (om/transact! category :category/todos #(vec (conj % todo)) :create)
    (util/edn-xhr
      {:method :put
       :url "categories"
       :data (update-in category [:category/todos] #(vec (conj % todo)))
       :on-complete #()})
    (set! (.-value todo-name-el) "")))

(defn set-active-category [owner categories category]
  (om/set-state! owner :creating-category false)
  (om/transact! categories (fn [xs]
    (vec (map #(if (= category %)
       (assoc % :active true)
       (dissoc % :active)) xs)))))

(defn delete-category [category]
  (om/transact! (categories) (fn [xs] (vec (remove #(= category %) xs))))
  (util/edn-xhr
    {:method :delete
     :url "categories"
     :data category
     :on-complete #()}))

(defn category-tabs-view [owner categories]
    (conj (map (fn [category]
        (dom/li #js {:className "tab btn btn-primary"
                     :onClick #(set-active-category owner categories category)}
          (dom/span nil (:category/name category)
            (dom/i #js {:className "fa fa-times pull-right"
                        :onClick #(delete-category category)}))))
       categories)
      (dom/li #js {:className "tab btn btn-success"
                   :onClick #(om/set-state! owner :creating-category true)}
          (dom/i #js {:className "fa fa-plus"}))))

(defn create-category [owner]
  (println owner)
  (let [category-name-el (om/get-node owner "category-name")
        category-name (.-value category-name-el)
        category {:category/name category-name}]
    (om/transact! (categories) #(conj % category))
    (om/set-state! owner :creating-category false)
    (util/edn-xhr
      {:method :post
       :url "categories"
       :data category
       :on-complete #()})
    (set! (.-value category-name-el) "")))

(defn todos-view [categories owner]
  (reify
    om/IInitState
    (init-state [_]
      {:creating-category false})
    om/IRenderState
    (render-state [_ {:keys [creating-category]}]
      (let [category (first (filter #(contains? % :active) categories))]
        (dom/div #js {:className "todos-wrap"}
          (dom/div #js {:className "tabs"}
           (apply dom/ul nil (category-tabs-view owner categories)))
          (dom/div #js {:style (display creating-category)}
            (dom/div #js {:className "form"}
              (dom/div #js {:className "form-group has-feedback"}
                (dom/label #js {:className "sr-only"} "Category name:")
                (dom/input #js {:className "form-control"
                                :ref "category-name"
                                :onKeyPress #(if (== (.-key %) "Enter")
                                               (create-category owner))
                                :placeholder "Add category"}))))
          (dom/div #js {:id "todos"
                        :className "todos"
                        :style (display (not creating-category))}
          (dom/div #js {:className "form-inline"}
            (dom/div #js {:className "form-group has-feedback"}
              (dom/label #js {:className "sr-only"} "Todo name:")
              (dom/input #js {:className "form-control margin-right-2x"
                              :ref "todo-name"
                              :onKeyPress #(if (== (.-key %) "Enter")
                                             (create-todo category owner))
                              :placeholder "Todo"})
              (dom/input #js {:className "form-control margin-right-2x"
                              :ref "todo-start-date"
                              :placeholder "Date"})
             (dom/button #js {:className "btn btn-flat"
                              :onClick #(create-todo category owner)} "Add")))
            (apply dom/ul nil
              (map (fn [todo]
                  (om/build editable todo
                    {:opts {:edit-key :todo/name
                            :on-edit #(on-edit todo %)
                            :on-delete #(on-delete todo category)}}))
                (:category/todos category)))))))))

(defn set-calendar-start-time [owner hour]
  (om/set-state! owner :startTime hour)
  (om/set-state! owner :hoverTime nil)
  (om/set-state! owner :endTime nil))

(defn is-active-time? [state hour]
  (and (:startTime state)
    (if (:endTime state)
      (and (<= (:startTime state) hour)
           (>= (:endTime state) hour))
      (and (<= (:startTime state) hour)
           (>= (:hoverTime state) hour)))))

(defn calendar-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
                {:startTime nil :hoverTime nil :endTime nil})
    om/IRenderState
    (render-state [_ state]
                  (println state)
        (dom/div #js {:className "calendar"}
          (dom/div #js {:className "tab bg-primary"}
            (dom/span nil "Daily Todos"))
          (dom/div #js {:className "table-wrap"}
            (dom/table nil
             (dom/tr nil
              (apply dom/td #js {:className "table-times"}
                     (map #(dom/div #js {:className "table-cell time"} (str % ":00")) hours-of-day))
              (apply dom/td #js
                     {:className "table-todos"}
                     (map (fn [hour]
                            (dom/div #js {:className (str "table-cell noselect" (if (is-active-time? state hour) " active" ""))
                                          :onMouseDown #(set-calendar-start-time owner hour)
                                          :onMouseOver #(om/set-state! owner :hoverTime hour)
                                          :onMouseUp #(om/set-state! owner :endTime hour)}
                                     "hi")) hours-of-day)))))))))

(defn main-view [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (util/edn-xhr
        {:method :get
         :url "categories"
         :on-complete (fn [categories]
                        (let [categories (assoc categories 0 (assoc (first categories) :active true))]
                          (om/transact! app :categories (fn [_] categories))))}))
    om/IRender
    (render [_]
      (dom/div nil
        (dom/div #js {:className "categories"}
         (om/build todos-view (:categories app)))
       (om/build calendar-view app)))))

(om/root main-view app-state
  {:target (gdom/getElement "app")})

;(fw/start {})
