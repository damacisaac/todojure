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
om_async.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",2310420878),cljs.core.PersistentVector.EMPTY], null));
om_async.core.categories = (function categories(){return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"categories","categories",2310420878).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,om_async.core.app_state)));
});
om_async.core.todos = (function todos(category){return om.core.ref_cursor.call(null,new cljs.core.Keyword("category","todos","category/todos",4352913236).cljs$core$IFn$_invoke$arity$1(category));
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
om_async.core.on_edit = (function on_edit(todo,name){return om_async.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),"todos",new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",1014111942),new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword("todo","name","todo/name",1247572300),name], null),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (){return cljs.core.List.EMPTY;
})], null));
});
om_async.core.on_delete = (function on_delete(todo,category){om.core.transact_BANG_.call(null,category,new cljs.core.Keyword("category","todos","category/todos",4352913236),(function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__9950_SHARP_){return cljs.core._EQ_.call(null,todo,p1__9950_SHARP_);
}),xs));
}));
return om_async.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),"todos",new cljs.core.Keyword(null,"data","data",1016980252),todo,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (){return cljs.core.List.EMPTY;
})], null));
});
om_async.core.editable = (function editable(data,owner,p__9953){var map__9960 = p__9953;var map__9960__$1 = ((cljs.core.seq_QMARK_.call(null,map__9960))?cljs.core.apply.call(null,cljs.core.hash_map,map__9960):map__9960);var opts = map__9960__$1;var on_delete = cljs.core.get.call(null,map__9960__$1,new cljs.core.Keyword(null,"on-delete","on-delete",633031883));var on_edit = cljs.core.get.call(null,map__9960__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));var edit_key = cljs.core.get.call(null,map__9960__$1,new cljs.core.Keyword(null,"edit-key","edit-key",2614779790));if(typeof om_async.core.t9961 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t9961 = (function (edit_key,on_edit,on_delete,opts,map__9960,p__9953,owner,data,editable,meta9962){
this.edit_key = edit_key;
this.on_edit = on_edit;
this.on_delete = on_delete;
this.opts = opts;
this.map__9960 = map__9960;
this.p__9953 = p__9953;
this.owner = owner;
this.data = data;
this.editable = editable;
this.meta9962 = meta9962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t9961.cljs$lang$type = true;
om_async.core.t9961.cljs$lang$ctorStr = "om-async.core/t9961";
om_async.core.t9961.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-async.core/t9961");
});
om_async.core.t9961.prototype.om$core$IRenderState$ = true;
om_async.core.t9961.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9964){var self__ = this;
var map__9965 = p__9964;var map__9965__$1 = ((cljs.core.seq_QMARK_.call(null,map__9965))?cljs.core.apply.call(null,cljs.core.hash_map,map__9965):map__9965);var editing = cljs.core.get.call(null,map__9965__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var ___$1 = this;var text = new cljs.core.Keyword("todo","name","todo/name",1247572300).cljs$core$IFn$_invoke$arity$1(self__.data);return React.DOM.li({"className": "margin-vertical clearfix"},React.DOM.span({"className": "margin-right-2x", "onClick": (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),true);
}), "style": om_async.core.display.call(null,cljs.core.not.call(null,editing))},text),om.dom.input.call(null,{"onBlur": (function (){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786))))
{return om_async.core.end_edit.call(null,text,self__.owner,self__.on_edit);
} else
{return null;
}
}), "onKeyPress": (function (p1__9952_SHARP_){if((p1__9952_SHARP_.keyCode === 13))
{return om_async.core.end_edit.call(null,text,self__.owner,self__.on_edit);
} else
{return null;
}
}), "onChange": (function (p1__9951_SHARP_){return om_async.core.handle_change.call(null,p1__9951_SHARP_,self__.data,self__.edit_key,self__.owner);
}), "className": "form-control", "value": text, "style": om_async.core.display.call(null,editing)}),React.DOM.a({"href": ""},React.DOM.i({"onClick": self__.on_delete, "style": om_async.core.display.call(null,cljs.core.not.call(null,editing)), "className": "fa fa-times pull-right"})));
});
om_async.core.t9961.prototype.om$core$IInitState$ = true;
om_async.core.t9961.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});
om_async.core.t9961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9963){var self__ = this;
var _9963__$1 = this;return self__.meta9962;
});
om_async.core.t9961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9963,meta9962__$1){var self__ = this;
var _9963__$1 = this;return (new om_async.core.t9961(self__.edit_key,self__.on_edit,self__.on_delete,self__.opts,self__.map__9960,self__.p__9953,self__.owner,self__.data,self__.editable,meta9962__$1));
});
om_async.core.__GT_t9961 = (function __GT_t9961(edit_key__$1,on_edit__$1,on_delete__$1,opts__$1,map__9960__$2,p__9953__$1,owner__$1,data__$1,editable__$1,meta9962){return (new om_async.core.t9961(edit_key__$1,on_edit__$1,on_delete__$1,opts__$1,map__9960__$2,p__9953__$1,owner__$1,data__$1,editable__$1,meta9962));
});
}
return (new om_async.core.t9961(edit_key,on_edit,on_delete,opts,map__9960__$1,p__9953,owner,data,editable,null));
});
om_async.core.create_todo = (function create_todo(category,owner){var todo_name_el = om.core.get_node.call(null,owner,"todo-name");var todo_name = todo_name_el.value;var todo = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","name","todo/name",1247572300),todo_name], null);om.core.transact_BANG_.call(null,category,new cljs.core.Keyword("category","todos","category/todos",4352913236),(function (p1__9966_SHARP_){return cljs.core.conj.call(null,p1__9966_SHARP_,todo);
}),new cljs.core.Keyword(null,"create","create",3956577390));
om_async.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),"categories",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.update_in.call(null,category,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("category","todos","category/todos",4352913236)], null),(function (p1__9967_SHARP_){return cljs.core.conj.call(null,p1__9967_SHARP_,todo);
})),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (){return cljs.core.List.EMPTY;
})], null));
return todo_name_el.value = "";
});
om_async.core.todos_view = (function todos_view(category,owner){if(typeof om_async.core.t9972 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t9972 = (function (owner,category,todos_view,meta9973){
this.owner = owner;
this.category = category;
this.todos_view = todos_view;
this.meta9973 = meta9973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t9972.cljs$lang$type = true;
om_async.core.t9972.cljs$lang$ctorStr = "om-async.core/t9972";
om_async.core.t9972.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-async.core/t9972");
});
om_async.core.t9972.prototype.om$core$IRender$ = true;
om_async.core.t9972.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "todos"},cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,(function (todo){return om.core.build.call(null,om_async.core.editable,todo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-key","edit-key",2614779790),new cljs.core.Keyword("todo","name","todo/name",1247572300),new cljs.core.Keyword(null,"on-edit","on-edit",3936438442),(function (p1__9968_SHARP_){return om_async.core.on_edit.call(null,todo,p1__9968_SHARP_);
}),new cljs.core.Keyword(null,"on-delete","on-delete",633031883),(function (){return om_async.core.on_delete.call(null,todo,self__.category);
})], null)], null));
}),new cljs.core.Keyword("category","todos","category/todos",4352913236).cljs$core$IFn$_invoke$arity$1(self__.category))),React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"className": "sr-only"},"Todo name:"),om.dom.input.call(null,{"placeholder": "Add todo", "ref": "todo-name", "className": "form-control"})),React.DOM.button({"onClick": (function (){return om_async.core.create_todo.call(null,self__.category,self__.owner);
}), "className": "btn btn-primary", "type": "button"},"Add todo")));
});
om_async.core.t9972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9974){var self__ = this;
var _9974__$1 = this;return self__.meta9973;
});
om_async.core.t9972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9974,meta9973__$1){var self__ = this;
var _9974__$1 = this;return (new om_async.core.t9972(self__.owner,self__.category,self__.todos_view,meta9973__$1));
});
om_async.core.__GT_t9972 = (function __GT_t9972(owner__$1,category__$1,todos_view__$1,meta9973){return (new om_async.core.t9972(owner__$1,category__$1,todos_view__$1,meta9973));
});
}
return (new om_async.core.t9972(owner,category,todos_view,null));
});
om_async.core.create_category = (function create_category(categories,owner){var category_name_el = om.core.get_node.call(null,owner,"category-name");var category_name = category_name_el.value;var category = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("category","name","category/name",4212119990),category_name], null);om.core.transact_BANG_.call(null,categories,(function (p1__9975_SHARP_){return cljs.core.conj.call(null,p1__9975_SHARP_,category);
}));
om_async.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),"categories",new cljs.core.Keyword(null,"data","data",1016980252),category,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (){return cljs.core.List.EMPTY;
})], null));
return category_name_el.value = "";
});
om_async.core.delete_category = (function delete_category(category){om.core.transact_BANG_.call(null,om_async.core.categories.call(null),(function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__9976_SHARP_){return cljs.core._EQ_.call(null,category,p1__9976_SHARP_);
}),xs));
}));
return om_async.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),"categories",new cljs.core.Keyword(null,"data","data",1016980252),category,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (){return cljs.core.List.EMPTY;
})], null));
});
om_async.core.categories_view = (function categories_view(app,owner){if(typeof om_async.core.t9980 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t9980 = (function (owner,app,categories_view,meta9981){
this.owner = owner;
this.app = app;
this.categories_view = categories_view;
this.meta9981 = meta9981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t9980.cljs$lang$type = true;
om_async.core.t9980.cljs$lang$ctorStr = "om-async.core/t9980";
om_async.core.t9980.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-async.core/t9980");
});
om_async.core.t9980.prototype.om$core$IRender$ = true;
om_async.core.t9980.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var xs = om.core.observe.call(null,self__.owner,om_async.core.categories.call(null));return React.DOM.div(null,React.DOM.div({"className": "form-group"},React.DOM.label({"className": "sr-only"},"Category name:"),om.dom.input.call(null,{"placeholder": "Category name", "ref": "category-name", "className": "form-control"}),React.DOM.button({"onClick": (function (){return om_async.core.create_category.call(null,new cljs.core.Keyword(null,"categories","categories",2310420878).cljs$core$IFn$_invoke$arity$1(self__.app),self__.owner);
}), "className": "btn btn-primary", "type": "button"},"Add category")),React.DOM.div({"className": "todos"},cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,(function (category){return React.DOM.li({"className": "todo-card padding"},React.DOM.h2(null,new cljs.core.Keyword("category","name","category/name",4212119990).cljs$core$IFn$_invoke$arity$1(category),React.DOM.a({"href": ""},React.DOM.i({"onClick": (function (){return om_async.core.delete_category.call(null,category);
}), "className": "fa fa-times pull-right"}))),om.core.build.call(null,om_async.core.todos_view,category));
}),xs))));
});
om_async.core.t9980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9982){var self__ = this;
var _9982__$1 = this;return self__.meta9981;
});
om_async.core.t9980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9982,meta9981__$1){var self__ = this;
var _9982__$1 = this;return (new om_async.core.t9980(self__.owner,self__.app,self__.categories_view,meta9981__$1));
});
om_async.core.__GT_t9980 = (function __GT_t9980(owner__$1,app__$1,categories_view__$1,meta9981){return (new om_async.core.t9980(owner__$1,app__$1,categories_view__$1,meta9981));
});
}
return (new om_async.core.t9980(owner,app,categories_view,null));
});
om_async.core.main_view = (function main_view(app,owner){if(typeof om_async.core.t9987 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_async.core.t9987 = (function (owner,app,main_view,meta9988){
this.owner = owner;
this.app = app;
this.main_view = main_view;
this.meta9988 = meta9988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_async.core.t9987.cljs$lang$type = true;
om_async.core.t9987.cljs$lang$ctorStr = "om-async.core/t9987";
om_async.core.t9987.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-async.core/t9987");
});
om_async.core.t9987.prototype.om$core$IRender$ = true;
om_async.core.t9987.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,om_async.core.categories_view,self__.app));
});
om_async.core.t9987.prototype.om$core$IWillMount$ = true;
om_async.core.t9987.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om_async.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"categories",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__9983_SHARP_){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"categories","categories",2310420878),(function (___$2){return p1__9983_SHARP_;
}));
})], null));
});
om_async.core.t9987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9989){var self__ = this;
var _9989__$1 = this;return self__.meta9988;
});
om_async.core.t9987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9989,meta9988__$1){var self__ = this;
var _9989__$1 = this;return (new om_async.core.t9987(self__.owner,self__.app,self__.main_view,meta9988__$1));
});
om_async.core.__GT_t9987 = (function __GT_t9987(owner__$1,app__$1,main_view__$1,meta9988){return (new om_async.core.t9987(owner__$1,app__$1,main_view__$1,meta9988));
});
}
return (new om_async.core.t9987(owner,app,main_view,null));
});
om.core.root.call(null,om_async.core.main_view,om_async.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("app")], null));

//# sourceMappingURL=core.js.map