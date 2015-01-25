// Compiled by ClojureScript 0.0-2173
goog.provide('om_async.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.dom');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('om_async.util');
goog.require('om_async.util');
cljs.core.enable_console_print_BANG_.call(null);
om_async.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",1867525016),cljs.core.PersistentVector.EMPTY], null));
om_async.core.classes = (function classes(){return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,om_async.core.app_state)));
});
om_async.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
om_async.core.handle_change = (function handle_change(e,data,edit_key,owner){return om.core.transact_BANG_.call(null,data,edit_key,(function (_){return e.target.value;
}));
});
om_async.core.end_edit = (function end_edit(text,owner,cb){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",3420907786),false);
return cb.call(null,text);
});
om_async.core.on_edit = (function on_edit(id,title){return om_async.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),"classes",new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("class","id","class/id",2867224579),id,new cljs.core.Keyword("class","title","class/title",2826061520),title], null),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (){return cljs.core.List.EMPTY;
})], null));
});
om_async.core.on_delete = (function on_delete(data,delete$){om.core.transact_BANG_.call(null,om_async.core.classes.call(null),(function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__61072_SHARP_){return cljs.core._EQ_.call(null,data,p1__61072_SHARP_);
}),xs));
}));
return om_async.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),"classes",new cljs.core.Keyword(null,"data","data",1016980252),data,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (){return cljs.core.List.EMPTY;
})], null));
});
om_async.core.editable = (function editable(data,owner,p__61075){var map__61082 = p__61075;var map__61082__$1 = ((cljs.core.seq_QMARK_.call(null,map__61082))?cljs.core.apply.call(null,cljs.core.hash_map,map__61082):map__61082);var opts = map__61082__$1;var delete$ = cljs.core.get.call(null,map__61082__$1,new cljs.core.Keyword(null,"delete","delete",3973413149));var on_edit = cljs.core.get.call(null,map__61082__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));var edit_key = cljs.core.get.call(null,map__61082__$1,new cljs.core.Keyword(null,"edit-key","edit-key",2614779790));if(typeof om_async.core.t61083 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t61083 = (function (edit_key,on_edit,delete$,opts,map__61082,p__61075,owner,data,editable,meta61084){
this.edit_key = edit_key;
this.on_edit = on_edit;
this.delete$ = delete$;
this.opts = opts;
this.map__61082 = map__61082;
this.p__61075 = p__61075;
this.owner = owner;
this.data = data;
this.editable = editable;
this.meta61084 = meta61084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t61083.cljs$lang$type = true;
om_async.core.t61083.cljs$lang$ctorStr = "om-async.core/t61083";
om_async.core.t61083.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-async.core/t61083");
});
om_async.core.t61083.prototype.om$core$IRenderState$ = true;
om_async.core.t61083.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__61086){var self__ = this;
var map__61087 = p__61086;var map__61087__$1 = ((cljs.core.seq_QMARK_.call(null,map__61087))?cljs.core.apply.call(null,cljs.core.hash_map,map__61087):map__61087);var editing = cljs.core.get.call(null,map__61087__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var ___$1 = this;var text = cljs.core.get.call(null,self__.data,self__.edit_key);return React.DOM.li({"className": "margin-vertical clearfix"},React.DOM.span({"className": "margin-right-2x", "style": om_async.core.display.call(null,cljs.core.not.call(null,editing))},text),om.dom.input.call(null,{"onBlur": (function (){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786))))
{return om_async.core.end_edit.call(null,text,self__.owner,self__.on_edit);
} else
{return null;
}
}), "onKeyPress": (function (p1__61074_SHARP_){if((p1__61074_SHARP_.keyCode === 13))
{return om_async.core.end_edit.call(null,text,self__.owner,self__.on_edit);
} else
{return null;
}
}), "onChange": (function (p1__61073_SHARP_){return om_async.core.handle_change.call(null,p1__61073_SHARP_,self__.data,self__.edit_key,self__.owner);
}), "className": "form-control", "value": text, "style": om_async.core.display.call(null,editing)}),React.DOM.button({"onClick": (function (){return om_async.core.on_delete.call(null,cljs.core.deref.call(null,self__.data),self__.delete$);
}), "style": om_async.core.display.call(null,cljs.core.not.call(null,editing)), "className": "btn btn-warning margin-horizontal pull-right"},"Remove"),React.DOM.button({"onClick": (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),true);
}), "style": om_async.core.display.call(null,cljs.core.not.call(null,editing)), "className": "btn btn-primary margin-horizontal pull-right"},"Edit"));
});
om_async.core.t61083.prototype.om$core$IInitState$ = true;
om_async.core.t61083.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});
om_async.core.t61083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61085){var self__ = this;
var _61085__$1 = this;return self__.meta61084;
});
om_async.core.t61083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61085,meta61084__$1){var self__ = this;
var _61085__$1 = this;return (new om_async.core.t61083(self__.edit_key,self__.on_edit,self__.delete$,self__.opts,self__.map__61082,self__.p__61075,self__.owner,self__.data,self__.editable,meta61084__$1));
});
om_async.core.__GT_t61083 = (function __GT_t61083(edit_key__$1,on_edit__$1,delete$__$1,opts__$1,map__61082__$2,p__61075__$1,owner__$1,data__$1,editable__$1,meta61084){return (new om_async.core.t61083(edit_key__$1,on_edit__$1,delete$__$1,opts__$1,map__61082__$2,p__61075__$1,owner__$1,data__$1,editable__$1,meta61084));
});
}
return (new om_async.core.t61083(edit_key,on_edit,delete$,opts,map__61082__$1,p__61075,owner,data,editable,null));
});
om_async.core.create_class = (function create_class(app,owner){var class_id_el = om.core.get_node.call(null,owner,"class-id");var class_id = class_id_el.value;var class_name_el = om.core.get_node.call(null,owner,"class-name");var class_name = class_name_el.value;var new_class = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("class","id","class/id",2867224579),class_id,new cljs.core.Keyword("class","title","class/title",2826061520),class_name], null);om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"classes","classes",1867525016),(function (p1__61088_SHARP_){return cljs.core.conj.call(null,p1__61088_SHARP_,new_class);
}),new cljs.core.Keyword(null,"create","create",3956577390));
om_async.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),"classes",new cljs.core.Keyword(null,"data","data",1016980252),new_class,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (){return cljs.core.List.EMPTY;
})], null));
class_id_el.value = "";
return class_name_el.value = "";
});
om_async.core.classes_view = (function classes_view(app,owner){if(typeof om_async.core.t61093 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t61093 = (function (owner,app,classes_view,meta61094){
this.owner = owner;
this.app = app;
this.classes_view = classes_view;
this.meta61094 = meta61094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t61093.cljs$lang$type = true;
om_async.core.t61093.cljs$lang$ctorStr = "om-async.core/t61093";
om_async.core.t61093.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-async.core/t61093");
});
om_async.core.t61093.prototype.om$core$IRender$ = true;
om_async.core.t61093.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var xs = om.core.observe.call(null,self__.owner,om_async.core.classes.call(null));return React.DOM.div({"id": "classes"},React.DOM.h2(null,"Classes"),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,(function (class$){var id = new cljs.core.Keyword("class","id","class/id",2867224579).cljs$core$IFn$_invoke$arity$1(class$);return om.core.build.call(null,om_async.core.editable,class$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit-key","edit-key",2614779790),new cljs.core.Keyword("class","title","class/title",2826061520),new cljs.core.Keyword(null,"on-edit","on-edit",3936438442),(function (p1__61089_SHARP_){return om_async.core.on_edit.call(null,id,p1__61089_SHARP_);
})], null)], null));
}),xs)),React.DOM.div({"className": "form-group"},React.DOM.label({"className": "control-label"},"ID:"),om.dom.input.call(null,{"ref": "class-id", "className": "form-control"}),React.DOM.label({"className": "control-label"},"Name:"),om.dom.input.call(null,{"ref": "class-name", "className": "form-control"})),React.DOM.button({"onClick": (function (){return om_async.core.create_class.call(null,self__.app,self__.owner);
}), "className": "btn btn-primary"},"Add"));
});
om_async.core.t61093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61095){var self__ = this;
var _61095__$1 = this;return self__.meta61094;
});
om_async.core.t61093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61095,meta61094__$1){var self__ = this;
var _61095__$1 = this;return (new om_async.core.t61093(self__.owner,self__.app,self__.classes_view,meta61094__$1));
});
om_async.core.__GT_t61093 = (function __GT_t61093(owner__$1,app__$1,classes_view__$1,meta61094){return (new om_async.core.t61093(owner__$1,app__$1,classes_view__$1,meta61094));
});
}
return (new om_async.core.t61093(owner,app,classes_view,null));
});
om_async.core.count_view = (function count_view(app,owner){if(typeof om_async.core.t61099 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t61099 = (function (owner,app,count_view,meta61100){
this.owner = owner;
this.app = app;
this.count_view = count_view;
this.meta61100 = meta61100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t61099.cljs$lang$type = true;
om_async.core.t61099.cljs$lang$ctorStr = "om-async.core/t61099";
om_async.core.t61099.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-async.core/t61099");
});
om_async.core.t61099.prototype.om$core$IRender$ = true;
om_async.core.t61099.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var xs = om.core.observe.call(null,self__.owner,om_async.core.classes.call(null));return React.DOM.div(null,React.DOM.h2(null,cljs.core.count.call(null,xs)));
});
om_async.core.t61099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61101){var self__ = this;
var _61101__$1 = this;return self__.meta61100;
});
om_async.core.t61099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61101,meta61100__$1){var self__ = this;
var _61101__$1 = this;return (new om_async.core.t61099(self__.owner,self__.app,self__.count_view,meta61100__$1));
});
om_async.core.__GT_t61099 = (function __GT_t61099(owner__$1,app__$1,count_view__$1,meta61100){return (new om_async.core.t61099(owner__$1,app__$1,count_view__$1,meta61100));
});
}
return (new om_async.core.t61099(owner,app,count_view,null));
});
om_async.core.main_view = (function main_view(app,owner){if(typeof om_async.core.t61106 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t61106 = (function (owner,app,main_view,meta61107){
this.owner = owner;
this.app = app;
this.main_view = main_view;
this.meta61107 = meta61107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t61106.cljs$lang$type = true;
om_async.core.t61106.cljs$lang$ctorStr = "om-async.core/t61106";
om_async.core.t61106.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-async.core/t61106");
});
om_async.core.t61106.prototype.om$core$IRender$ = true;
om_async.core.t61106.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,om_async.core.classes_view,self__.app),om.core.build.call(null,om_async.core.count_view,self__.app));
});
om_async.core.t61106.prototype.om$core$IWillMount$ = true;
om_async.core.t61106.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om_async.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"classes",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__61102_SHARP_){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"classes","classes",1867525016),(function (___$2){return p1__61102_SHARP_;
}));
})], null));
});
om_async.core.t61106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61108){var self__ = this;
var _61108__$1 = this;return self__.meta61107;
});
om_async.core.t61106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61108,meta61107__$1){var self__ = this;
var _61108__$1 = this;return (new om_async.core.t61106(self__.owner,self__.app,self__.main_view,meta61107__$1));
});
om_async.core.__GT_t61106 = (function __GT_t61106(owner__$1,app__$1,main_view__$1,meta61107){return (new om_async.core.t61106(owner__$1,app__$1,main_view__$1,meta61107));
});
}
return (new om_async.core.t61106(owner,app,main_view,null));
});
om.core.root.call(null,om_async.core.main_view,om_async.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("app")], null));

//# sourceMappingURL=core.js.map