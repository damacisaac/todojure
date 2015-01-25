(ns om-async.core
  (:require [om-async.util :as util]
            [cljs.reader :as reader]
            [cljs.core.async :refer [put! chan <!]]
            [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def app-state
  (atom {:classes []}))

(defn classes []
  (om/ref-cursor (:classes (om/root-cursor app-state))))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn handle-change [e data edit-key owner]
  (om/transact! data edit-key (fn [_] (.. e -target -value))))

(defn end-edit [text owner cb]
  (om/set-state! owner :editing false)
  (cb text))

(defn on-edit [id title]
  (util/edn-xhr
    {:method :put
     :url "classes"
     :data {:class/id id :class/title title}
     :on-complete #()}))

(defn on-delete [data delete]
  (om/transact! (classes) (fn [xs] (vec (remove #(= data %) xs))))
  (util/edn-xhr
    {:method :delete
     :url "classes"
     :data data
     :on-complete #()}))

(defn editable [data owner {:keys [edit-key on-edit delete] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false})
    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (let [text (get data edit-key)]
        (dom/li #js {:className "margin-vertical clearfix"}
          (dom/span #js {:style (display (not editing))
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
          (dom/button
            #js {:className "btn btn-warning margin-horizontal pull-right"
                 :style (display (not editing))
                 :onClick #(on-delete @data delete)} "Remove")
          (dom/button
            #js {:className "btn btn-primary margin-horizontal pull-right"
                 :style (display (not editing))
                 :onClick #(om/set-state! owner :editing true)} "Edit"))))))

(defn create-class [app owner]
  (let [class-id-el   (om/get-node owner "class-id")
        class-id      (.-value class-id-el)
        class-name-el (om/get-node owner "class-name")
        class-name    (.-value class-name-el)
        new-class     {:class/id class-id :class/title class-name}]
    (om/transact! app :classes #(conj % new-class) :create)
    (util/edn-xhr
      {:method :post
       :url "classes"
       :data new-class
       :on-complete #()})
    (set! (.-value class-id-el) "")
    (set! (.-value class-name-el) "")))

(defn classes-view [app owner]
  (reify
    om/IRender
    (render [_]
      (let [xs (om/observe owner (classes))]
        (dom/div #js {:id "classes"}
          (dom/h2 nil "Classes")
          (apply dom/ul nil
            (map
              (fn [class]
                (let [id (:class/id class)]
                  (om/build editable class
                    {:opts {:edit-key :class/title
                            :on-edit #(on-edit id %)}})))
              xs))
          (dom/div #js {:className "form-group"}
            (dom/label #js {:className "control-label"} "ID:")
            (dom/input #js {:className "form-control" :ref "class-id"})
            (dom/label #js {:className "control-label"} "Name:")
            (dom/input #js {:className "form-control" :ref "class-name"}))
          (dom/button #js {:className "btn btn-primary" :onClick #(create-class app owner)} "Add"))))))

(defn count-view [app owner]
  (reify
    om/IRender
    (render [_]
            (let [xs (om/observe owner (classes))]
              (dom/div nil
                       (dom/h2 nil (count xs)))))))

(defn main-view [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (util/edn-xhr
        {:method :get
         :url "classes"
         :on-complete #(om/transact! app :classes (fn [_] %))}))
    om/IRender
    (render [_]
      (dom/div nil
               (om/build classes-view app)
               (om/build count-view app)))))

(om/root main-view app-state
  {:target (gdom/getElement "app")})

