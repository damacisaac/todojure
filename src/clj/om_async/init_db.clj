(ns om-async.init-db
  (:require [datomic.api :as d]
            [clojure.java.io :as io]
            [clojure.edn :as edn])
  (:import datomic.Util))

(def uri "datomic:free://localhost:4334/om_async")

(def conn (d/connect uri))

(defn get-conn []
  (d/connect uri))

(defn get-schema []
  (sort (vec (d/q '[:find ?ident
               :where [_ :db/ident ?ident]]
             (d/db (get-conn))))))

(defn read-all [f]
  (Util/readAll (io/reader f)))

(defn transact-all [conn f]
  (doseq [txd (read-all f)]
    (d/transact conn txd))
  :done)

(defn create-db []
  (d/create-database uri))

(defn load-schema []
  (println (transact-all (get-conn) (io/resource "data/schema.edn"))))

(defn load-data []
  (println (transact-all (get-conn) (io/resource "data/initial.edn"))))

(defn init-db []
  (create-db)
  (load-schema)
  (load-data))

