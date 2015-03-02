(defproject om-async "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :jvm-opts ^:replace ["-Xmx1g" "-server"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [figwheel "0.2.3-SNAPSHOT"]
                 [org.clojure/clojurescript "0.0-2850"]
                 [org.clojure/tools.nrepl "0.2.7"]
                 [ring/ring "1.3.2"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [om "0.8.0-rc1"]
                 [om-sync "0.1.1"]
                 [compojure "1.3.2"]
                 [fogus/ring-edn "0.2.0"]
                 [com.datomic/datomic-free "0.9.4699"]
                 [com.taoensso/timbre "3.4.0"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-ring "0.9.1"]
            [lein-figwheel "0.2.3-SNAPSHOT"]]

  ;:figwheel {:ring-handler om-async.core/app}
  :ring {:handler om-async.core/app}


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
