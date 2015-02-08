(ns om-async.core
  (:require [om-async.util :as util]
            [ring.util.response :refer [file-response]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [compojure.core :refer [defroutes GET PUT POST DELETE]]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [clj-time.core :as t]
            [clj-time.format :as f]))

(use '[datomic.api :only [q db] :as d])

(def uri "datomic:free://localhost:4334/om_async")

(def conn (d/connect uri))

(defn index []
  (file-response "public/html/index.html" {:root "resources"}))

(defn merge-tempid [x]
  ;(update-in x [:todo/startDate] #(t/date-time %))
  (merge {:db/id (d/tempid :db.part/user)} x))

(defn create [data]
  (let [data (merge-tempid data)]
    (d/transact conn [data])
    (util/generate-response {:status :ok :data data})))

(defn delete [eid]
  (d/transact conn [[:db.fn/retractEntity eid]])
  (util/generate-response {:status :ok}))

(defn update [params]
  (println (d/transact conn [params]))
  (util/generate-response {:status :ok :data params}))

(defn update-category [category]
  (let [category (update-in category [:category/todos] #(map merge-tempid %))]
    (update category)))

(defn todo-to-edn [db id]
  (let [todo (d/touch (d/entity db id))]
    {:db/id (:db/id todo)
     :todo/name (:todo/name todo)}))

(defn category-to-edn [db id]
  (let [category (d/touch (d/entity db id))]
    {:db/id (:db/id category)
     :category/name (:category/name category)
     :category/todos (map #(todo-to-edn db (:db/id %)) (:category/todos category))}))

(defn get-todos [db]
  (->> (d/q '[:find ?todo
              :where
              [?todo :todo/name]]
          db)
       (map #(todo-to-edn db (first %)))
       vec))

(defn todos []
  (util/generate-response (get-todos (d/db conn))))

(defn get-categories [db]
  (->> (d/q '[:find ?category
              :where
              [?category :category/name]]
          db)
       (map #(category-to-edn db (first %)))
       vec))

(defn categories []
  (util/generate-response (get-categories (d/db conn))))

(defroutes routes
  (GET "/" [] (index))
  (GET "/todos" [] (todos))
  (POST "/todos" {params :edn-params} (create params))
  (PUT "/todos" {params :edn-params} (update params))
  (DELETE "/todos" {{id :db/id} :edn-params} (delete id))
  (GET "/categories" [] (categories))
  (POST "/categories" {params :edn-params} (create params))
  (PUT "/categories" {params :edn-params} (update-category params))
  (DELETE "/categories" {{id :db/id} :edn-params} (delete id))
  (route/files "/" {:root "resources/public"}))

(defn wrap-log-request [handler]
  (fn [req]
    (println req)
    (handler req)))

(def app
  (-> routes
      ; wrap-log-request
      wrap-edn-params))
