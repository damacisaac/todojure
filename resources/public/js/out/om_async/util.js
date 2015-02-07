// Compiled by ClojureScript 0.0-2173
goog.provide('om_async.util');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('cljs.reader');
om_async.util.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
om_async.util.edn_xhr = (function edn_xhr(p__70536){var map__70538 = p__70536;var map__70538__$1 = ((cljs.core.seq_QMARK_.call(null,map__70538))?cljs.core.apply.call(null,cljs.core.hash_map,map__70538):map__70538);var on_complete = cljs.core.get.call(null,map__70538__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__70538__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__70538__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__70538__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,(function (e){return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
}));
return xhr.send(url,om_async.util.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});

//# sourceMappingURL=util.js.map