(defproject om-async "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :jvm-opts ^:replace ["-Xmx1g" "-server"]

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [ring/ring "1.2.1"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.8.0-rc1"]
                 [om-sync "0.1.1"]
                 [compojure "1.1.6"]
                 [fogus/ring-edn "0.2.0"]
                 [com.datomic/datomic-free "0.9.4699"]]

  :plugins [[lein-cljsbuild "1.0.2"]
            [lein-ring "0.8.10"]]

  :ring {:handler om-async.core/app
           :nrepl {:start? true
                   :port 8081}}

  :source-paths ["src/clj" "src/cljs"]
  :resource-paths ["resources"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/clj" "src/cljs"]
              :compiler {
                :output-to "resources/public/js/cljs.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true}}]})
