// Compiled by ClojureScript 0.0-2173
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;
om.core.IDisplayName = (function (){var obj71585 = {};return obj71585;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.display_name[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.display_name["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj71587 = {};return obj71587;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.init_state[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.init_state["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj71589 = {};return obj71589;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.should_update[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.should_update["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj71591 = {};return obj71591;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.will_mount[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.will_mount["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj71593 = {};return obj71593;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.did_mount[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.did_mount["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj71595 = {};return obj71595;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.will_unmount[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.will_unmount["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj71597 = {};return obj71597;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.will_update[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.will_update["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj71599 = {};return obj71599;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.did_update[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.did_update["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj71601 = {};return obj71601;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.will_receive_props[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.will_receive_props["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj71603 = {};return obj71603;
})();
om.core.render = (function render(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.render[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.render["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderProps = (function (){var obj71605 = {};return obj71605;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.render_props[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.render_props["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});
om.core.IRenderState = (function (){var obj71607 = {};return obj71607;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core.render_state[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core.render_state["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.ICheckState = (function (){var obj71609 = {};return obj71609;
})();
om.core.IOmSwap = (function (){var obj71611 = {};return obj71611;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj71613 = {};return obj71613;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._get_state[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._get_state["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._get_state[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._get_state["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj71615 = {};return obj71615;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._get_render_state[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._get_render_state["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._get_render_state[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._get_render_state["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj71617 = {};return obj71617;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj71619 = {};return obj71619;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._get_queue[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._get_queue["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj71621 = {};return obj71621;
})();
om.core._value = (function _value(x){if((function (){var and__3431__auto__ = x;if(and__3431__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3431__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4070__auto__ = (((x == null))?null:x);return (function (){var or__3443__auto__ = (om.core._value[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._value["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj71623 = {};return obj71623;
})();
om.core._path = (function _path(cursor){if((function (){var and__3431__auto__ = cursor;if(and__3431__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3431__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4070__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3443__auto__ = (om.core._path[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._path["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3431__auto__ = cursor;if(and__3431__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3431__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4070__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3443__auto__ = (om.core._state[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._state["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj71625 = {};return obj71625;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3431__auto__ = value;if(and__3431__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3431__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4070__auto__ = (((value == null))?null:value);return (function (){var or__3443__auto__ = (om.core._to_cursor[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._to_cursor["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3431__auto__ = value;if(and__3431__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3431__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4070__auto__ = (((value == null))?null:value);return (function (){var or__3443__auto__ = (om.core._to_cursor[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._to_cursor["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj71627 = {};return obj71627;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3431__auto__ = cursor;if(and__3431__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3431__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4070__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3443__auto__ = (om.core._derive[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._derive["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){return om.core._state.call(null,cursor);
});
om.core.ITransact = (function (){var obj71629 = {};return obj71629;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3431__auto__ = cursor;if(and__3431__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4070__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3443__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj71631 = {};return obj71631;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3431__auto__ = x;if(and__3431__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4070__auto__ = (((x == null))?null:x);return (function (){var or__3443__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._listen_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__3431__auto__ = x;if(and__3431__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__4070__auto__ = (((x == null))?null:x);return (function (){var or__3443__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__3431__auto__ = x;if(and__3431__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__4070__auto__ = (((x == null))?null:x);return (function (){var or__3443__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._notify_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.IRootProperties = (function (){var obj71633 = {};return obj71633;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._set_property_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});
om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._remove_property_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._remove_properties_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});
om.core._get_property = (function _get_property(this$,id,p){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IRootProperties$_get_property$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._get_property[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._get_property["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core.IRootKey = (function (){var obj71635 = {};return obj71635;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__3431__auto__ = cursor;if(and__3431__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__3431__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__4070__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3443__auto__ = (om.core._root_key[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._root_key["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IAdapt = (function (){var obj71637 = {};return obj71637;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._adapt[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._adapt["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});
(om.core.IAdapt["_"] = true);
(om.core._adapt["_"] = (function (_,other){return other;
}));
om.core.adapt = (function adapt(x,other){return om.core._adapt.call(null,x,other);
});
om.core.IOmRef = (function (){var obj71639 = {};return obj71639;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._add_dep_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._remove_dep_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._refresh_deps_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});
om.core._get_deps = (function _get_deps(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.om$core$IOmRef$_get_deps$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (om.core._get_deps[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (om.core._get_deps["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref.call(null,state);var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);var ret = (((function (){var G__71641 = state;if(G__71641)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71641.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__71641.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__71641);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__71641);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f):null)));if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",3145885106)))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"old-value","old-value",1451216317),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",3626601078),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1449001181),old_state,new cljs.core.Keyword(null,"new-state","new-state",3624385942),cljs.core.deref.call(null,state)], null);if(!((tag == null)))
{return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",1014018828),tag));
} else
{return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__71643 = x;if(G__71643)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71643.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__71643.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__71643);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__71643);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){return (x["isOmComponent"]);
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.ifn_QMARK_.call(null,c))
{return node.props.children = c.call(null,node);
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){if(cljs.core.truth_(om.core.component_QMARK_.call(null,x)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"x","x",-1640531407,null))))].join('')));
}
return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4092__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var pending_state = temp__4092__auto__;var G__71645 = state;(G__71645["__om_prev_state"] = (state["__om_state"]));
(G__71645["__om_state"] = pending_state);
(G__71645["__om_pending_state"] = null);
return G__71645;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3443__auto__ = props;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return owner.props;
}
})();var temp__4092__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var props_state = temp__4092__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__3443__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value.call(null,ref);var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",3115977980));return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count.call(null,refs) === 0))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (ref){var ref_val = om.core.value.call(null,ref);var ref_state = om.core.state.call(null,ref);var ref_path = om.core.path.call(null,ref);var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",3115977980));if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",3115977980)))
{if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else
{return ref;
}
} else
{return null;
}
}),refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",2086388618),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",4103164189),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",2122862542),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",2087784617),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",2664659111),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",3257856604),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",3877103209),new cljs.core.Keyword(null,"getInitialState","getInitialState",2219830677),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",3193956709)],[(function (next_props,next_state){var this$ = this;var c_71668 = om.core.children.call(null,this$);if((function (){var G__71647 = c_71668;if(G__71647)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71647.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__71647.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__71647);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__71647);
}
})())
{var state_71669 = this$.state;om.core.will_update.call(null,c_71668,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__71648 = c;if(G__71648)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71648.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__71648.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__71648);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__71648);
}
})())
{var state_71670 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3443__auto__ = (state_71670["__om_prev_state"]);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return (state_71670["__om_state"]);
}
})());
} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var _STAR_parent_STAR_71649 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_71650 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_71651 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_71652 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_71653 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
if((function (){var G__71654 = c;if(G__71654)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71654.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__71654.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__71654);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__71654);
}
})())
{return om.core.render.call(null,c);
} else
{if((function (){var G__71655 = c;if(G__71655)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71655.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__71655.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__71655);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__71655);
}
})())
{return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else
{if((function (){var G__71656 = c;if(G__71656)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71656.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__71656.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__71656);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__71656);
}
})())
{return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return c;
} else
{return null;
}
}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_71653;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_71652;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_71651;
om.core._STAR_state_STAR_ = _STAR_state_STAR_71650;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_71649;
}}),(function (next_props){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__71657 = c;if(G__71657)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71657.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__71657.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__71657);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__71657);
}
})())
{return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__71658 = c;if(G__71658)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71658.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__71658.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__71658);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__71658);
}
})())
{return om.core.display_name.call(null,c);
} else
{return null;
}
}),true,(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__71659 = c;if(G__71659)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71659.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__71659.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__71659);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__71659);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
var temp__4092__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4092__auto__)
{var refs = temp__4092__auto__;var seq__71660 = cljs.core.seq.call(null,refs);var chunk__71661 = null;var count__71662 = 0;var i__71663 = 0;while(true){
if((i__71663 < count__71662))
{var ref = cljs.core._nth.call(null,chunk__71661,i__71663);om.core.unobserve.call(null,this$,ref);
{
var G__71671 = seq__71660;
var G__71672 = chunk__71661;
var G__71673 = count__71662;
var G__71674 = (i__71663 + 1);
seq__71660 = G__71671;
chunk__71661 = G__71672;
count__71662 = G__71673;
i__71663 = G__71674;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__71660);if(temp__4092__auto____$1)
{var seq__71660__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__71660__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__71660__$1);{
var G__71675 = cljs.core.chunk_rest.call(null,seq__71660__$1);
var G__71676 = c__4191__auto__;
var G__71677 = cljs.core.count.call(null,c__4191__auto__);
var G__71678 = 0;
seq__71660 = G__71675;
chunk__71661 = G__71676;
count__71662 = G__71677;
i__71663 = G__71678;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__71660__$1);om.core.unobserve.call(null,this$,ref);
{
var G__71679 = cljs.core.next.call(null,seq__71660__$1);
var G__71680 = null;
var G__71681 = 0;
var G__71682 = 0;
seq__71660 = G__71679;
chunk__71661 = G__71680;
count__71662 = G__71681;
i__71663 = G__71682;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_71683 = om.core.children.call(null,this$);if((function (){var G__71664 = c_71683;if(G__71664)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71664.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__71664.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__71664);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__71664);
}
})())
{om.core.will_mount.call(null,c_71683);
} else
{}
return om.core.merge_pending_state.call(null,this$);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__71665 = c;if(G__71665)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71665.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__71665.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__71665);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__71665);
}
})())
{return om.core.did_mount.call(null,c);
} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__3443__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = new cljs.core.Keyword("om.core","id","om.core/id",2663181321).cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__71666 = c;if(G__71666)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71666.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__71666.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__71666);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__71666);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",2663181321))), "__om_id": (function (){var or__3443__auto__ = id;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (next_props,next_state){var this$ = this;var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__71667 = c;if(G__71667)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71667.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__71667.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__71667);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__71667);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else
{var cursor = (props["__om_cursor"]);var next_cursor = (next_props["__om_cursor"]);if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor)))
{return true;
} else
{if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor))))
{return true;
} else
{if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$)))
{return true;
} else
{if(cljs.core.truth_((function (){var and__3431__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === 0));if(and__3431__auto__)
{return cljs.core.some.call(null,(function (p1__71646_SHARP_){return om.core.ref_changed_QMARK_.call(null,p1__71646_SHARP_);
}),(state["__om_refs"]));
} else
{return and__3431__auto__;
}
})()))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
}
}
}
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x71685 = obj;x71685.om$core$IGetState$ = true;
x71685.om$core$IGetState$_get_state$arity$1 = (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3443__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return (state["__om_state"]);
}
});
x71685.om$core$IGetState$_get_state$arity$2 = (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});
x71685.om$core$IGetRenderState$ = true;
x71685.om$core$IGetRenderState$_get_render_state$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});
x71685.om$core$IGetRenderState$_get_render_state$arity$2 = (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});
x71685.om$core$ISetState$ = true;
x71685.om$core$ISetState$_set_state_BANG_$arity$3 = (function (this$,val,render){var this$__$1 = this;var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if(cljs.core.truth_((function (){var and__3431__auto__ = !((app_state == null));if(and__3431__auto__)
{return render;
} else
{return and__3431__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});
x71685.om$core$ISetState$_set_state_BANG_$arity$4 = (function (this$,ks,val,render){var this$__$1 = this;var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.call(null,this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));
if(cljs.core.truth_((function (){var and__3431__auto__ = !((app_state == null));if(and__3431__auto__)
{return render;
} else
{return and__3431__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});
return x71685;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){var id = (x["_rootNodeID"]);if(cljs.core.truth_(id))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",-1640528172,null)))].join('')));
}
return id;
});
om.core.get_gstate = (function get_gstate(owner){return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate.call(null,owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.react_id.call(null,owner)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",4640376909).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,(function (states__$1){return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",4207358381),new cljs.core.Keyword(null,"render-state","render-state",666961164).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",666961164),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",666961164).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",4640376909).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",4640376909));
}));
} else
{return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",2219830677),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__3443__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var om_id = (function (){var or__3443__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",2663181321).cljs$core$IFn$_invoke$arity$1(istate);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",2663181321)),(((function (){var G__71686 = c;if(G__71686)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71686.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__71686.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__71686);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__71686);
}
})())?om.core.init_state.call(null,c):null));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",666961164)], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",3257856604),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_71695 = om.core.children.call(null,this$);if((function (){var G__71687 = c_71695;if(G__71687)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71687.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__71687.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__71687);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__71687);
}
})())
{om.core.will_mount.call(null,c_71695);
} else
{}
return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__71688 = c;if(G__71688)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71688.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__71688.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__71688);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__71688);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.dissoc,new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.react_id.call(null,this$));
var temp__4092__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4092__auto__)
{var refs = temp__4092__auto__;var seq__71689 = cljs.core.seq.call(null,refs);var chunk__71690 = null;var count__71691 = 0;var i__71692 = 0;while(true){
if((i__71692 < count__71691))
{var ref = cljs.core._nth.call(null,chunk__71690,i__71692);om.core.unobserve.call(null,this$,ref);
{
var G__71696 = seq__71689;
var G__71697 = chunk__71690;
var G__71698 = count__71691;
var G__71699 = (i__71692 + 1);
seq__71689 = G__71696;
chunk__71690 = G__71697;
count__71691 = G__71698;
i__71692 = G__71699;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__71689);if(temp__4092__auto____$1)
{var seq__71689__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__71689__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__71689__$1);{
var G__71700 = cljs.core.chunk_rest.call(null,seq__71689__$1);
var G__71701 = c__4191__auto__;
var G__71702 = cljs.core.count.call(null,c__4191__auto__);
var G__71703 = 0;
seq__71689 = G__71700;
chunk__71690 = G__71701;
count__71691 = G__71702;
i__71692 = G__71703;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__71689__$1);om.core.unobserve.call(null,this$,ref);
{
var G__71704 = cljs.core.next.call(null,seq__71689__$1);
var G__71705 = null;
var G__71706 = 0;
var G__71707 = 0;
seq__71689 = G__71704;
chunk__71690 = G__71705;
count__71691 = G__71706;
i__71692 = G__71707;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",2086388618),(function (next_props,next_state){var this$ = this;var props_71708 = this$.props;var c_71709 = om.core.children.call(null,this$);if((function (){var G__71693 = c_71709;if(G__71693)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71693.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__71693.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__71693);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__71693);
}
})())
{var state_71710 = this$.state;om.core.will_update.call(null,c_71709,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.no_local_merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",4103164189),(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);var gstate = om.core.get_gstate.call(null,this$);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.react_id.call(null,this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.react_id.call(null,this$)], null);if((function (){var G__71694 = c;if(G__71694)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71694.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__71694.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__71694);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__71694);
}
})())
{var state_71711 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3443__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",4207358381).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",666961164).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",4207358381).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",4207358381));
} else
{return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x71713 = cljs.core.clj__GT_js.call(null,methods$);x71713.om$core$IGetState$ = true;
x71713.om$core$IGetState$_get_state$arity$1 = (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.react_id.call(null,this$__$1)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);var or__3443__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",4640376909).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",666961164).cljs$core$IFn$_invoke$arity$1(states);
}
});
x71713.om$core$IGetState$_get_state$arity$2 = (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});
x71713.om$core$IGetRenderState$ = true;
x71713.om$core$IGetRenderState$_get_render_state$arity$1 = (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",666961164)], null);return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});
x71713.om$core$IGetRenderState$_get_render_state$arity$2 = (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});
x71713.om$core$ISetState$ = true;
x71713.om$core$ISetState$_set_state_BANG_$arity$3 = (function (this$,val,render){var this$__$1 = this;var gstate = om.core.get_gstate.call(null,this$__$1);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",4640376909)], null);cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);
if(cljs.core.truth_((function (){var and__3431__auto__ = !((gstate == null));if(and__3431__auto__)
{return render;
} else
{return and__3431__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else
{return null;
}
});
x71713.om$core$ISetState$_set_state_BANG_$arity$4 = (function (this$,ks,val,render){var this$__$1 = this;return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});
return x71713;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){if((function (){var G__71715 = x;if(G__71715)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71715.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__71715.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__71715);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__71715);
}
})())
{return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",713872173)));
} else
{return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",3115977980));if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",3115977980))))
{return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else
{return not_found;
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});
om.core.MapCursor.prototype.call = (function() {
var G__71719 = null;
var G__71719__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__71719__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__71719 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__71719__2.call(this,self__,k);
case 3:
return G__71719__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__71719;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args71716){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args71716)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",713872173));
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){var self__ = this;
var ___$1 = this;return cljs.core._kv_reduce.call(null,self__.value,f,init);
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,(function (p__71717){var vec__71718 = p__71717;var k = cljs.core.nth.call(null,vec__71718,0,null);var v = cljs.core.nth.call(null,vec__71718,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
}),self__.value);
} else
{return null;
}
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,null);
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.call = (function() {
var G__71721 = null;
var G__71721__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__71721__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__71721 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__71721__2.call(this,self__,k);
case 3:
return G__71721__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__71721;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args71720){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args71720)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",713872173));
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){var self__ = this;
var ___$1 = this;return cljs.core._kv_reduce.call(null,self__.value,f,init);
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,(function (v,i){return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
}),self__.value,cljs.core.range.call(null));
} else
{return null;
}
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if((n < cljs.core._count.call(null,self__.value)))
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{return not_found;
}
});
om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x71723 = cljs.core.clone.call(null,val);x71723.cljs$core$IEquiv$ = true;
x71723.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
});
x71723.om$core$ITransact$ = true;
x71723.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});
x71723.om$core$ICursor$ = true;
x71723.om$core$ICursor$_path$arity$1 = (function (_){var ___$1 = this;return path;
});
x71723.om$core$ICursor$_state$arity$1 = (function (_){var ___$1 = this;return state;
});
x71723.cljs$core$IDeref$ = true;
x71723.cljs$core$IDeref$_deref$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",713872173));
});
return x71723;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__71726 = val;if(G__71726)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71726.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__71726.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__71726);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__71726);
}
})())
{return om.core._to_cursor.call(null,val,state,path);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__71727 = val;if(G__71727)
{var bit__4093__auto__ = (G__71727.cljs$lang$protocol_mask$partition1$ & 8192);if((bit__4093__auto__) || (G__71727.cljs$core$ICloneable$))
{return true;
} else
{if((!G__71727.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__71727);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__71727);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return val;
} else
{return null;
}
}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state.call(null,cursor);return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){if((function (){var G__71729 = atom;if(G__71729)
{var bit__4093__auto__ = (G__71729.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__4093__auto__) || (G__71729.cljs$core$IDeref$))
{return true;
} else
{if((!G__71729.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__71729);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__71729);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null),new cljs.core.Symbol(null,"IDeref","IDeref",515317602,null),new cljs.core.Symbol(null,"atom","atom",-1637526774,null))))].join('')));
}
return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x71731 = cljs.core.clone.call(null,x);x71731.om$core$ITransact$ = true;
x71731.om$core$ITransact$_transact_BANG_$arity$4 = (function (cursor,korks,f,tag){var cursor__$1 = this;om.core.commit_BANG_.call(null,cursor__$1,korks,f);
return om.core._refresh_deps_BANG_.call(null,parent);
});
x71731.om$core$ICursorDerive$ = true;
x71731.om$core$ICursorDerive$_derive$arity$4 = (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});
x71731.om$core$IAdapt$ = true;
x71731.om$core$IAdapt$_adapt$arity$2 = (function (this$,other){var this$__$1 = this;return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});
x71731.cljs$core$ICloneable$ = true;
x71731.cljs$core$ICloneable$_clone$arity$1 = (function (this$){var this$__$1 = this;return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});
return x71731;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-513552030,null),new cljs.core.Symbol(null,"cursor","cursor",1305316623,null))))].join('')));
}
if((function (){var G__71738 = cursor;if(G__71738)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71738.om$core$IOmRef$;
}
})()))
{return true;
} else
{if((!G__71738.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__71738);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__71738);
}
})())
{return cursor;
} else
{var path = om.core.path.call(null,cursor);var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);var x71739 = cljs.core.clone.call(null,cursor);x71739.om$core$ITransact$ = true;
x71739.om$core$ITransact$_transact_BANG_$arity$4 = (function (cursor__$1,korks,f,tag){var cursor__$2 = this;om.core.commit_BANG_.call(null,cursor__$2,korks,f);
return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});
x71739.om$core$IOmRef$ = true;
x71739.om$core$IOmRef$_add_dep_BANG_$arity$2 = (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});
x71739.om$core$IOmRef$_remove_dep_BANG_$arity$2 = (function (_,c){var ___$1 = this;var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));if((cljs.core.count.call(null,m) === 0))
{return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else
{return null;
}
});
x71739.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = (function (_){var ___$1 = this;var seq__71740 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));var chunk__71741 = null;var count__71742 = 0;var i__71743 = 0;while(true){
if((i__71743 < count__71742))
{var c = cljs.core._nth.call(null,chunk__71741,i__71743);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__71744 = seq__71740;
var G__71745 = chunk__71741;
var G__71746 = count__71742;
var G__71747 = (i__71743 + 1);
seq__71740 = G__71744;
chunk__71741 = G__71745;
count__71742 = G__71746;
i__71743 = G__71747;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__71740);if(temp__4092__auto__)
{var seq__71740__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__71740__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__71740__$1);{
var G__71748 = cljs.core.chunk_rest.call(null,seq__71740__$1);
var G__71749 = c__4191__auto__;
var G__71750 = cljs.core.count.call(null,c__4191__auto__);
var G__71751 = 0;
seq__71740 = G__71748;
chunk__71741 = G__71749;
count__71742 = G__71750;
i__71743 = G__71751;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__71740__$1);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__71752 = cljs.core.next.call(null,seq__71740__$1);
var G__71753 = null;
var G__71754 = 0;
var G__71755 = 0;
seq__71740 = G__71752;
chunk__71741 = G__71753;
count__71742 = G__71754;
i__71743 = G__71755;
continue;
}
}
} else
{return null;
}
}
break;
}
});
x71739.om$core$IOmRef$_get_deps$arity$1 = (function (_){var ___$1 = this;return cljs.core.deref.call(null,storage);
});
x71739.om$core$ICursorDerive$ = true;
x71739.om$core$ICursorDerive$_derive$arity$4 = (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});
return x71739;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){var state = c.state;var refs = (function (){var or__3443__auto__ = (state["__om_refs"]);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})();if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return null;
} else
{return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){var state = c.state;var refs = (state["__om_refs"]);if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else
{return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){if(cljs.core.truth_(om.core.component_QMARK_.call(null,c)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"c","c",-1640531428,null))))].join('')));
}
if(om.core.cursor_QMARK_.call(null,ref))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-513552030,null),new cljs.core.Symbol(null,"ref","ref",-1640418740,null))))].join('')));
}
om.core.add_ref_to_component_BANG_.call(null,c,ref);
om.core._add_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.unobserve = (function unobserve(c,ref){om.core.remove_ref_from_component_BANG_.call(null,c,ref);
om.core._remove_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){var or__3443__auto__ = state.om$render$T;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return 0;
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){return render_all.call(null,null);
});
var render_all__1 = (function (state){om.core.refresh_queued = false;
var seq__71760_71764 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__71761_71765 = null;var count__71762_71766 = 0;var i__71763_71767 = 0;while(true){
if((i__71763_71767 < count__71762_71766))
{var f_71768 = cljs.core._nth.call(null,chunk__71761_71765,i__71763_71767);f_71768.call(null);
{
var G__71769 = seq__71760_71764;
var G__71770 = chunk__71761_71765;
var G__71771 = count__71762_71766;
var G__71772 = (i__71763_71767 + 1);
seq__71760_71764 = G__71769;
chunk__71761_71765 = G__71770;
count__71762_71766 = G__71771;
i__71763_71767 = G__71772;
continue;
}
} else
{var temp__4092__auto___71773 = cljs.core.seq.call(null,seq__71760_71764);if(temp__4092__auto___71773)
{var seq__71760_71774__$1 = temp__4092__auto___71773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__71760_71774__$1))
{var c__4191__auto___71775 = cljs.core.chunk_first.call(null,seq__71760_71774__$1);{
var G__71776 = cljs.core.chunk_rest.call(null,seq__71760_71774__$1);
var G__71777 = c__4191__auto___71775;
var G__71778 = cljs.core.count.call(null,c__4191__auto___71775);
var G__71779 = 0;
seq__71760_71764 = G__71776;
chunk__71761_71765 = G__71777;
count__71762_71766 = G__71778;
i__71763_71767 = G__71779;
continue;
}
} else
{var f_71780 = cljs.core.first.call(null,seq__71760_71774__$1);f_71780.call(null);
{
var G__71781 = cljs.core.next.call(null,seq__71760_71774__$1);
var G__71782 = null;
var G__71783 = 0;
var G__71784 = 0;
seq__71760_71764 = G__71781;
chunk__71761_71765 = G__71782;
count__71762_71766 = G__71783;
i__71763_71767 = G__71784;
continue;
}
}
} else
{}
}
break;
}
if((state == null))
{return null;
} else
{return state.om$render$T = (om.core.get_renderT.call(null,state) + 1);
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__3443__auto__ = (function (){var G__71791 = x;if(G__71791)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71791.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__71791.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__71791);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__71791);
}
})();if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (function (){var G__71793 = x;if(G__71793)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto____$1 = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto____$1))
{return or__3443__auto____$1;
} else
{return G__71793.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__71793.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__71793);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__71793);
}
})();if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{var G__71794 = x;if(G__71794)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto____$2 = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto____$2))
{return or__3443__auto____$2;
} else
{return G__71794.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__71794.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__71794);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__71794);
}
}
}
})())
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null),new cljs.core.Symbol(null,"IRender","IRender",1166970104,null),new cljs.core.Symbol(null,"x","x",-1640531407,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",-781029590,null),new cljs.core.Symbol(null,"x","x",-1640531407,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-778212789,null),new cljs.core.Symbol(null,"x","x",-1640531407,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),null,new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"react-key","react-key",4184082563),null,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),null,new cljs.core.Keyword(null,"key","key",1014010321),null,new cljs.core.Keyword(null,"instrument","instrument",2409387865),null,new cljs.core.Keyword(null,"shared","shared",4405305303),null,new cljs.core.Keyword(null,"descriptor","descriptor",4560504545),null,new cljs.core.Keyword(null,"key-fn","key-fn",4174150248),null,new cljs.core.Keyword(null,"opts","opts",1017322386),null,new cljs.core.Keyword(null,"fn","fn",1013907514),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__3443__auto__ = descriptor;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__3443__auto____$1))
{return or__3443__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})())));
} else
{}
return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){if((f instanceof cljs.core.MultiFn))
{var dv = f.dispatch_fn.call(null,cursor,null);return cljs.core.get_method.call(null,f,dv);
} else
{return f;
}
});
var getf__3 = (function (f,cursor,opts){if((f instanceof cljs.core.MultiFn))
{var dv = f.dispatch_fn.call(null,cursor,null,opts);return cljs.core.get_method.call(null,f,dv);
} else
{return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
if(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)))))].join('')));
}
if(om.core.valid_opts_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",-189133625,null),new cljs.core.Symbol(null,"m","m",-1640531418,null))))].join('')));
}
if((m == null))
{var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));return ctor.call(null,{"children": (function (this$){var ret = f.call(null,cursor,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
}), "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var map__71796 = m;var map__71796__$1 = ((cljs.core.seq_QMARK_.call(null,map__71796))?cljs.core.apply.call(null,cljs.core.hash_map,map__71796):map__71796);var opts = cljs.core.get.call(null,map__71796__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var init_state = cljs.core.get.call(null,map__71796__$1,new cljs.core.Keyword(null,"init-state","init-state",4479067398));var state = cljs.core.get.call(null,map__71796__$1,new cljs.core.Keyword(null,"state","state",1123661827));var key_fn = cljs.core.get.call(null,map__71796__$1,new cljs.core.Keyword(null,"key-fn","key-fn",4174150248));var key = cljs.core.get.call(null,map__71796__$1,new cljs.core.Keyword(null,"key","key",1014010321));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",1013907514));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4090__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",3166146514).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;return dataf.call(null,cursor,i);
} else
{return dataf.call(null,cursor);
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",4184082563)):null)));var shared = (function (){var or__3443__auto__ = new cljs.core.Keyword(null,"shared","shared",4405305303).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",4560504545).cljs$core$IFn$_invoke$arity$1(m));return ctor.call(null,{"children": (((opts == null))?(function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
}):(function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
})), "__om_init_state": init_state, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",3166146514).cljs$core$IFn$_invoke$arity$1(m), "__om_descriptor": om.core._STAR_descriptor_STAR_, "key": (function (){var or__3443__auto__ = rkey;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return undefined;
}
})(), "__om_root_key": om.core._STAR_root_key_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_shared": shared, "__om_state": state, "__om_cursor": cursor_SINGLEQUOTE_});
} else
{return null;
}
}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
if(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)))))].join('')));
}
if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",2667619603)))
{return om.core.build_STAR_.call(null,f,x,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
if(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)))))].join('')));
}
return cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__71805 = state;if(G__71805)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71805.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__71805.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__71805);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__71805);
}
})())
{} else
{var properties_71813 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var listeners_71814 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var render_queue_71815 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var x71806_71816 = state;x71806_71816.om$core$IRenderQueue$ = true;
x71806_71816.om$core$IRenderQueue$_get_queue$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.deref.call(null,render_queue_71815);
});
x71806_71816.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_71815),c))
{return null;
} else
{cljs.core.swap_BANG_.call(null,render_queue_71815,cljs.core.conj,c);
return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});
x71806_71816.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.call(null,render_queue_71815,cljs.core.empty);
});
x71806_71816.om$core$INotify$ = true;
x71806_71816.om$core$INotify$_listen_BANG_$arity$3 = (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.call(null,listeners_71814,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});
x71806_71816.om$core$INotify$_unlisten_BANG_$arity$2 = (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.call(null,listeners_71814,cljs.core.dissoc,key__$1);
return this$__$1;
});
x71806_71816.om$core$INotify$_notify_BANG_$arity$3 = (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__71807_71817 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_71814));var chunk__71808_71818 = null;var count__71809_71819 = 0;var i__71810_71820 = 0;while(true){
if((i__71810_71820 < count__71809_71819))
{var vec__71811_71821 = cljs.core._nth.call(null,chunk__71808_71818,i__71810_71820);var __71822 = cljs.core.nth.call(null,vec__71811_71821,0,null);var f_71823 = cljs.core.nth.call(null,vec__71811_71821,1,null);f_71823.call(null,tx_data,root_cursor);
{
var G__71824 = seq__71807_71817;
var G__71825 = chunk__71808_71818;
var G__71826 = count__71809_71819;
var G__71827 = (i__71810_71820 + 1);
seq__71807_71817 = G__71824;
chunk__71808_71818 = G__71825;
count__71809_71819 = G__71826;
i__71810_71820 = G__71827;
continue;
}
} else
{var temp__4092__auto___71828 = cljs.core.seq.call(null,seq__71807_71817);if(temp__4092__auto___71828)
{var seq__71807_71829__$1 = temp__4092__auto___71828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__71807_71829__$1))
{var c__4191__auto___71830 = cljs.core.chunk_first.call(null,seq__71807_71829__$1);{
var G__71831 = cljs.core.chunk_rest.call(null,seq__71807_71829__$1);
var G__71832 = c__4191__auto___71830;
var G__71833 = cljs.core.count.call(null,c__4191__auto___71830);
var G__71834 = 0;
seq__71807_71817 = G__71831;
chunk__71808_71818 = G__71832;
count__71809_71819 = G__71833;
i__71810_71820 = G__71834;
continue;
}
} else
{var vec__71812_71835 = cljs.core.first.call(null,seq__71807_71829__$1);var __71836 = cljs.core.nth.call(null,vec__71812_71835,0,null);var f_71837 = cljs.core.nth.call(null,vec__71812_71835,1,null);f_71837.call(null,tx_data,root_cursor);
{
var G__71838 = cljs.core.next.call(null,seq__71807_71829__$1);
var G__71839 = null;
var G__71840 = 0;
var G__71841 = 0;
seq__71807_71817 = G__71838;
chunk__71808_71818 = G__71839;
count__71809_71819 = G__71840;
i__71810_71820 = G__71841;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});
x71806_71816.om$core$IRootProperties$ = true;
x71806_71816.om$core$IRootProperties$_set_property_BANG_$arity$4 = (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_71813,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});
x71806_71816.om$core$IRootProperties$_remove_property_BANG_$arity$3 = (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_71813,cljs.core.dissoc,id,k);
});
x71806_71816.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_71813,cljs.core.dissoc,id);
});
x71806_71816.om$core$IRootProperties$_get_property$arity$3 = (function (_,id,k){var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_71813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});
}
return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_.call(null,cursor))
{var x71843 = cljs.core.clone.call(null,cursor);x71843.om$core$IRootKey$ = true;
x71843.om$core$IRootKey$_root_key$arity$1 = (function (this$){var this$__$1 = this;return root_key;
});
x71843.om$core$IAdapt$ = true;
x71843.om$core$IAdapt$_adapt$arity$2 = (function (this$,other){var this$__$1 = this;return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});
x71843.cljs$core$ICloneable$ = true;
x71843.cljs$core$ICloneable$_clone$arity$1 = (function (this$){var this$__$1 = this;return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});
return x71843;
} else
{return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__71844){var map__71907 = p__71844;var map__71907__$1 = ((cljs.core.seq_QMARK_.call(null,map__71907))?cljs.core.apply.call(null,cljs.core.hash_map,map__71907):map__71907);var options = map__71907__$1;var raf = cljs.core.get.call(null,map__71907__$1,new cljs.core.Keyword(null,"raf","raf",1014016905));var adapt = cljs.core.get.call(null,map__71907__$1,new cljs.core.Keyword(null,"adapt","adapt",1106561684));var descriptor = cljs.core.get.call(null,map__71907__$1,new cljs.core.Keyword(null,"descriptor","descriptor",4560504545));var instrument = cljs.core.get.call(null,map__71907__$1,new cljs.core.Keyword(null,"instrument","instrument",2409387865));var path = cljs.core.get.call(null,map__71907__$1,new cljs.core.Keyword(null,"path","path",1017337751));var tx_listen = cljs.core.get.call(null,map__71907__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114));var target = cljs.core.get.call(null,map__71907__$1,new cljs.core.Keyword(null,"target","target",4427965699));if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
if(!((target == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"target","target",1773529930,null)))))].join('')));
}
var roots_SINGLEQUOTE__71969 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__71969,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__71969,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.call(null);var state = (((function (){var G__71908 = value;if(G__71908)
{var bit__4093__auto__ = (G__71908.cljs$lang$protocol_mask$partition1$ & 16384);if((bit__4093__auto__) || (G__71908.cljs$core$IAtom$))
{return true;
} else
{if((!G__71908.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__71908);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__71908);
}
})())?value:cljs.core.atom.call(null,value));var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);var adapt__$1 = (function (){var or__3443__auto__ = adapt;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",4427965699),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"adapt","adapt",1106561684));var ret = cljs.core.atom.call(null,null);var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state__$1);var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",4620784349))))
{} else
{var c_71970 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_71939 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_71940 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_71941 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_71942 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_71942;
om.core._STAR_state_STAR_ = _STAR_state_STAR_71941;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_71940;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_71939;
}})(),target);if((cljs.core.deref.call(null,ret) == null))
{cljs.core.reset_BANG_.call(null,ret,c_71970);
} else
{}
}
var queue_71971 = om.core._get_queue.call(null,state__$1);if(cljs.core.empty_QMARK_.call(null,queue_71971))
{} else
{var seq__71943_71972 = cljs.core.seq.call(null,queue_71971);var chunk__71944_71973 = null;var count__71945_71974 = 0;var i__71946_71975 = 0;while(true){
if((i__71946_71975 < count__71945_71974))
{var c_71976 = cljs.core._nth.call(null,chunk__71944_71973,i__71946_71975);if(cljs.core.truth_(c_71976.isMounted()))
{var temp__4092__auto___71977 = (c_71976.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4092__auto___71977))
{var next_props_71978 = temp__4092__auto___71977;(c_71976.props["__om_cursor"] = next_props_71978);
(c_71976.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__3443__auto__ = !((function (){var G__71948 = om.core.children.call(null,c_71976);if(G__71948)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71948.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__71948.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__71948);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__71948);
}
})());if(or__3443__auto__)
{return or__3443__auto__;
} else
{return c_71976.shouldComponentUpdate(c_71976.props,c_71976.state);
}
})()))
{c_71976.forceUpdate();
} else
{}
} else
{}
{
var G__71979 = seq__71943_71972;
var G__71980 = chunk__71944_71973;
var G__71981 = count__71945_71974;
var G__71982 = (i__71946_71975 + 1);
seq__71943_71972 = G__71979;
chunk__71944_71973 = G__71980;
count__71945_71974 = G__71981;
i__71946_71975 = G__71982;
continue;
}
} else
{var temp__4092__auto___71983 = cljs.core.seq.call(null,seq__71943_71972);if(temp__4092__auto___71983)
{var seq__71943_71984__$1 = temp__4092__auto___71983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__71943_71984__$1))
{var c__4191__auto___71985 = cljs.core.chunk_first.call(null,seq__71943_71984__$1);{
var G__71986 = cljs.core.chunk_rest.call(null,seq__71943_71984__$1);
var G__71987 = c__4191__auto___71985;
var G__71988 = cljs.core.count.call(null,c__4191__auto___71985);
var G__71989 = 0;
seq__71943_71972 = G__71986;
chunk__71944_71973 = G__71987;
count__71945_71974 = G__71988;
i__71946_71975 = G__71989;
continue;
}
} else
{var c_71990 = cljs.core.first.call(null,seq__71943_71984__$1);if(cljs.core.truth_(c_71990.isMounted()))
{var temp__4092__auto___71991__$1 = (c_71990.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4092__auto___71991__$1))
{var next_props_71992 = temp__4092__auto___71991__$1;(c_71990.props["__om_cursor"] = next_props_71992);
(c_71990.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__3443__auto__ = !((function (){var G__71950 = om.core.children.call(null,c_71990);if(G__71950)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__71950.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__71950.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__71950);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__71950);
}
})());if(or__3443__auto__)
{return or__3443__auto__;
} else
{return c_71990.shouldComponentUpdate(c_71990.props,c_71990.state);
}
})()))
{c_71990.forceUpdate();
} else
{}
} else
{}
{
var G__71993 = cljs.core.next.call(null,seq__71943_71984__$1);
var G__71994 = null;
var G__71995 = 0;
var G__71996 = 0;
seq__71943_71972 = G__71993;
chunk__71944_71973 = G__71994;
count__71945_71974 = G__71995;
i__71946_71975 = G__71996;
continue;
}
}
} else
{}
}
break;
}
om.core._empty_queue_BANG_.call(null,state__$1);
}
var _refs_71997 = cljs.core.deref.call(null,om.core._refs);if(cljs.core.empty_QMARK_.call(null,_refs_71997))
{} else
{var seq__71951_71998 = cljs.core.seq.call(null,_refs_71997);var chunk__71952_71999 = null;var count__71953_72000 = 0;var i__71954_72001 = 0;while(true){
if((i__71954_72001 < count__71953_72000))
{var vec__71955_72002 = cljs.core._nth.call(null,chunk__71952_71999,i__71954_72001);var path_72003__$1 = cljs.core.nth.call(null,vec__71955_72002,0,null);var cs_72004 = cljs.core.nth.call(null,vec__71955_72002,1,null);var cs_72005__$1 = cljs.core.deref.call(null,cs_72004);var seq__71956_72006 = cljs.core.seq.call(null,cs_72005__$1);var chunk__71957_72007 = null;var count__71958_72008 = 0;var i__71959_72009 = 0;while(true){
if((i__71959_72009 < count__71958_72008))
{var vec__71960_72010 = cljs.core._nth.call(null,chunk__71957_72007,i__71959_72009);var id_72011 = cljs.core.nth.call(null,vec__71960_72010,0,null);var c_72012 = cljs.core.nth.call(null,vec__71960_72010,1,null);if(cljs.core.truth_(c_72012.shouldComponentUpdate(c_72012.props,c_72012.state)))
{c_72012.forceUpdate();
} else
{}
{
var G__72013 = seq__71956_72006;
var G__72014 = chunk__71957_72007;
var G__72015 = count__71958_72008;
var G__72016 = (i__71959_72009 + 1);
seq__71956_72006 = G__72013;
chunk__71957_72007 = G__72014;
count__71958_72008 = G__72015;
i__71959_72009 = G__72016;
continue;
}
} else
{var temp__4092__auto___72017 = cljs.core.seq.call(null,seq__71956_72006);if(temp__4092__auto___72017)
{var seq__71956_72018__$1 = temp__4092__auto___72017;if(cljs.core.chunked_seq_QMARK_.call(null,seq__71956_72018__$1))
{var c__4191__auto___72019 = cljs.core.chunk_first.call(null,seq__71956_72018__$1);{
var G__72020 = cljs.core.chunk_rest.call(null,seq__71956_72018__$1);
var G__72021 = c__4191__auto___72019;
var G__72022 = cljs.core.count.call(null,c__4191__auto___72019);
var G__72023 = 0;
seq__71956_72006 = G__72020;
chunk__71957_72007 = G__72021;
count__71958_72008 = G__72022;
i__71959_72009 = G__72023;
continue;
}
} else
{var vec__71961_72024 = cljs.core.first.call(null,seq__71956_72018__$1);var id_72025 = cljs.core.nth.call(null,vec__71961_72024,0,null);var c_72026 = cljs.core.nth.call(null,vec__71961_72024,1,null);if(cljs.core.truth_(c_72026.shouldComponentUpdate(c_72026.props,c_72026.state)))
{c_72026.forceUpdate();
} else
{}
{
var G__72027 = cljs.core.next.call(null,seq__71956_72018__$1);
var G__72028 = null;
var G__72029 = 0;
var G__72030 = 0;
seq__71956_72006 = G__72027;
chunk__71957_72007 = G__72028;
count__71958_72008 = G__72029;
i__71959_72009 = G__72030;
continue;
}
}
} else
{}
}
break;
}
{
var G__72031 = seq__71951_71998;
var G__72032 = chunk__71952_71999;
var G__72033 = count__71953_72000;
var G__72034 = (i__71954_72001 + 1);
seq__71951_71998 = G__72031;
chunk__71952_71999 = G__72032;
count__71953_72000 = G__72033;
i__71954_72001 = G__72034;
continue;
}
} else
{var temp__4092__auto___72035 = cljs.core.seq.call(null,seq__71951_71998);if(temp__4092__auto___72035)
{var seq__71951_72036__$1 = temp__4092__auto___72035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__71951_72036__$1))
{var c__4191__auto___72037 = cljs.core.chunk_first.call(null,seq__71951_72036__$1);{
var G__72038 = cljs.core.chunk_rest.call(null,seq__71951_72036__$1);
var G__72039 = c__4191__auto___72037;
var G__72040 = cljs.core.count.call(null,c__4191__auto___72037);
var G__72041 = 0;
seq__71951_71998 = G__72038;
chunk__71952_71999 = G__72039;
count__71953_72000 = G__72040;
i__71954_72001 = G__72041;
continue;
}
} else
{var vec__71962_72042 = cljs.core.first.call(null,seq__71951_72036__$1);var path_72043__$1 = cljs.core.nth.call(null,vec__71962_72042,0,null);var cs_72044 = cljs.core.nth.call(null,vec__71962_72042,1,null);var cs_72045__$1 = cljs.core.deref.call(null,cs_72044);var seq__71963_72046 = cljs.core.seq.call(null,cs_72045__$1);var chunk__71964_72047 = null;var count__71965_72048 = 0;var i__71966_72049 = 0;while(true){
if((i__71966_72049 < count__71965_72048))
{var vec__71967_72050 = cljs.core._nth.call(null,chunk__71964_72047,i__71966_72049);var id_72051 = cljs.core.nth.call(null,vec__71967_72050,0,null);var c_72052 = cljs.core.nth.call(null,vec__71967_72050,1,null);if(cljs.core.truth_(c_72052.shouldComponentUpdate(c_72052.props,c_72052.state)))
{c_72052.forceUpdate();
} else
{}
{
var G__72053 = seq__71963_72046;
var G__72054 = chunk__71964_72047;
var G__72055 = count__71965_72048;
var G__72056 = (i__71966_72049 + 1);
seq__71963_72046 = G__72053;
chunk__71964_72047 = G__72054;
count__71965_72048 = G__72055;
i__71966_72049 = G__72056;
continue;
}
} else
{var temp__4092__auto___72057__$1 = cljs.core.seq.call(null,seq__71963_72046);if(temp__4092__auto___72057__$1)
{var seq__71963_72058__$1 = temp__4092__auto___72057__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__71963_72058__$1))
{var c__4191__auto___72059 = cljs.core.chunk_first.call(null,seq__71963_72058__$1);{
var G__72060 = cljs.core.chunk_rest.call(null,seq__71963_72058__$1);
var G__72061 = c__4191__auto___72059;
var G__72062 = cljs.core.count.call(null,c__4191__auto___72059);
var G__72063 = 0;
seq__71963_72046 = G__72060;
chunk__71964_72047 = G__72061;
count__71965_72048 = G__72062;
i__71966_72049 = G__72063;
continue;
}
} else
{var vec__71968_72064 = cljs.core.first.call(null,seq__71963_72058__$1);var id_72065 = cljs.core.nth.call(null,vec__71968_72064,0,null);var c_72066 = cljs.core.nth.call(null,vec__71968_72064,1,null);if(cljs.core.truth_(c_72066.shouldComponentUpdate(c_72066.props,c_72066.state)))
{c_72066.forceUpdate();
} else
{}
{
var G__72067 = cljs.core.next.call(null,seq__71963_72058__$1);
var G__72068 = null;
var G__72069 = 0;
var G__72070 = 0;
seq__71963_72046 = G__72067;
chunk__71964_72047 = G__72068;
count__71965_72048 = G__72069;
i__71966_72049 = G__72070;
continue;
}
}
} else
{}
}
break;
}
{
var G__72071 = cljs.core.next.call(null,seq__71951_72036__$1);
var G__72072 = null;
var G__72073 = 0;
var G__72074 = 0;
seq__71951_71998 = G__72071;
chunk__71952_71999 = G__72072;
count__71953_72000 = G__72073;
i__71954_72001 = G__72074;
continue;
}
}
} else
{}
}
break;
}
}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",4620784349),true);
return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret))
;cljs.core.add_watch.call(null,state__$1,watch_key,(function (_,___$1,o,n){if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",4118475076)))) && (!((o === n))))
{om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",4620784349),false);
} else
{}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",4118475076),false);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined')))
{return setTimeout((function (){return om.core.render_all.call(null,state__$1);
}),16);
} else
{if(cljs.core.fn_QMARK_.call(null,raf))
{return raf.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return requestAnimationFrame((function (){return om.core.render_all.call(null,state__$1);
}));
} else
{return null;
}
}
}
}
}));
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,(function (){om.core._remove_properties_BANG_.call(null,state__$1,watch_key);
cljs.core.remove_watch.call(null,state__$1,watch_key);
om.core.tear_down.call(null,state__$1,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
}));
return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){if(cljs.core.truth_(goog.dom.isElement(target)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",614302642,null),new cljs.core.Symbol(null,"target","target",1773529930,null))))].join('')));
}
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;return f.call(null);
} else
{return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){var G__72076 = x;if(G__72076)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__72076.om$core$ITransact$;
}
})()))
{return true;
} else
{if((!G__72076.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__72076);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__72076);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){if(om.core.transactable_QMARK_.call(null,cursor))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",-1200067276,null),new cljs.core.Symbol(null,"cursor","cursor",1305316623,null))))].join('')));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null):null)));return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-513552030,null),new cljs.core.Symbol(null,"cursor","cursor",1305316623,null))))].join('')));
}
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-513552030,null),new cljs.core.Symbol(null,"cursor","cursor",1305316623,null))))].join('')));
}
return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-513552030,null),new cljs.core.Symbol(null,"cursor","cursor",1305316623,null))))].join('')));
}
return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-513552030,null),new cljs.core.Symbol(null,"cursor","cursor",1305316623,null))))].join('')));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
var key = (((function (){var G__72078 = cursor;if(G__72078)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__72078.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__72078.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__72078);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__72078);
}
})())?om.core._root_key.call(null,cursor):null);var app_state = om.core.state.call(null,cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null):null)));var cpath = om.core.path.call(null,cursor);var rpath = cljs.core.into.call(null,cpath,korks__$1);if(cljs.core.truth_(key))
{om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",4118475076),true);
} else
{}
if(cljs.core.empty_QMARK_.call(null,rpath))
{return cljs.core.swap_BANG_.call(null,app_state,f);
} else
{return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
var temp__4092__auto__ = owner.refs;if(cljs.core.truth_(temp__4092__auto__))
{var refs = temp__4092__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",-2087977829,null),new cljs.core.Symbol(null,"owner","owner",-1534366612,null))))].join('')));
}
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;

//# sourceMappingURL=core.js.map