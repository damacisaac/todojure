// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t72307 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t72307 = (function (f,fn_handler,meta72308){
this.f = f;
this.fn_handler = fn_handler;
this.meta72308 = meta72308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t72307.cljs$lang$type = true;
cljs.core.async.t72307.cljs$lang$ctorStr = "cljs.core.async/t72307";
cljs.core.async.t72307.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t72307");
});
cljs.core.async.t72307.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t72307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t72307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t72307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72309){var self__ = this;
var _72309__$1 = this;return self__.meta72308;
});
cljs.core.async.t72307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72309,meta72308__$1){var self__ = this;
var _72309__$1 = this;return (new cljs.core.async.t72307(self__.f,self__.fn_handler,meta72308__$1));
});
cljs.core.async.__GT_t72307 = (function __GT_t72307(f__$1,fn_handler__$1,meta72308){return (new cljs.core.async.t72307(f__$1,fn_handler__$1,meta72308));
});
}
return (new cljs.core.async.t72307(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__72311 = buff;if(G__72311)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__72311.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__72311.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__72311);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__72311);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_72312 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_72312);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_72312);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___72313 = n;var x_72314 = 0;while(true){
if((x_72314 < n__4291__auto___72313))
{(a[x_72314] = 0);
{
var G__72315 = (x_72314 + 1);
x_72314 = G__72315;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__72316 = (i + 1);
i = G__72316;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t72320 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t72320 = (function (flag,alt_flag,meta72321){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta72321 = meta72321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t72320.cljs$lang$type = true;
cljs.core.async.t72320.cljs$lang$ctorStr = "cljs.core.async/t72320";
cljs.core.async.t72320.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t72320");
});
cljs.core.async.t72320.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t72320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t72320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t72320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72322){var self__ = this;
var _72322__$1 = this;return self__.meta72321;
});
cljs.core.async.t72320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72322,meta72321__$1){var self__ = this;
var _72322__$1 = this;return (new cljs.core.async.t72320(self__.flag,self__.alt_flag,meta72321__$1));
});
cljs.core.async.__GT_t72320 = (function __GT_t72320(flag__$1,alt_flag__$1,meta72321){return (new cljs.core.async.t72320(flag__$1,alt_flag__$1,meta72321));
});
}
return (new cljs.core.async.t72320(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t72326 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t72326 = (function (cb,flag,alt_handler,meta72327){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta72327 = meta72327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t72326.cljs$lang$type = true;
cljs.core.async.t72326.cljs$lang$ctorStr = "cljs.core.async/t72326";
cljs.core.async.t72326.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t72326");
});
cljs.core.async.t72326.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t72326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t72326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t72326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72328){var self__ = this;
var _72328__$1 = this;return self__.meta72327;
});
cljs.core.async.t72326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72328,meta72327__$1){var self__ = this;
var _72328__$1 = this;return (new cljs.core.async.t72326(self__.cb,self__.flag,self__.alt_handler,meta72327__$1));
});
cljs.core.async.__GT_t72326 = (function __GT_t72326(cb__$1,flag__$1,alt_handler__$1,meta72327){return (new cljs.core.async.t72326(cb__$1,flag__$1,alt_handler__$1,meta72327));
});
}
return (new cljs.core.async.t72326(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__72329_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__72329_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__72330 = (i + 1);
i = G__72330;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__72331){var map__72333 = p__72331;var map__72333__$1 = ((cljs.core.seq_QMARK_.call(null,map__72333))?cljs.core.apply.call(null,cljs.core.hash_map,map__72333):map__72333);var opts = map__72333__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__72331 = null;if (arguments.length > 1) {
  p__72331 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__72331);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__72334){
var ports = cljs.core.first(arglist__72334);
var p__72331 = cljs.core.rest(arglist__72334);
return alts_BANG___delegate(ports,p__72331);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t72342 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t72342 = (function (ch,f,map_LT_,meta72343){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta72343 = meta72343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t72342.cljs$lang$type = true;
cljs.core.async.t72342.cljs$lang$ctorStr = "cljs.core.async/t72342";
cljs.core.async.t72342.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t72342");
});
cljs.core.async.t72342.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t72342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t72342.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t72342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t72345 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t72345 = (function (fn1,_,meta72343,ch,f,map_LT_,meta72346){
this.fn1 = fn1;
this._ = _;
this.meta72343 = meta72343;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta72346 = meta72346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t72345.cljs$lang$type = true;
cljs.core.async.t72345.cljs$lang$ctorStr = "cljs.core.async/t72345";
cljs.core.async.t72345.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t72345");
});
cljs.core.async.t72345.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t72345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t72345.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t72345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__72335_SHARP_){return f1.call(null,(((p1__72335_SHARP_ == null))?null:self__.f.call(null,p1__72335_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t72345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72347){var self__ = this;
var _72347__$1 = this;return self__.meta72346;
});
cljs.core.async.t72345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72347,meta72346__$1){var self__ = this;
var _72347__$1 = this;return (new cljs.core.async.t72345(self__.fn1,self__._,self__.meta72343,self__.ch,self__.f,self__.map_LT_,meta72346__$1));
});
cljs.core.async.__GT_t72345 = (function __GT_t72345(fn1__$1,___$2,meta72343__$1,ch__$2,f__$2,map_LT___$2,meta72346){return (new cljs.core.async.t72345(fn1__$1,___$2,meta72343__$1,ch__$2,f__$2,map_LT___$2,meta72346));
});
}
return (new cljs.core.async.t72345(fn1,___$1,self__.meta72343,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t72342.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t72342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t72342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72344){var self__ = this;
var _72344__$1 = this;return self__.meta72343;
});
cljs.core.async.t72342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72344,meta72343__$1){var self__ = this;
var _72344__$1 = this;return (new cljs.core.async.t72342(self__.ch,self__.f,self__.map_LT_,meta72343__$1));
});
cljs.core.async.__GT_t72342 = (function __GT_t72342(ch__$1,f__$1,map_LT___$1,meta72343){return (new cljs.core.async.t72342(ch__$1,f__$1,map_LT___$1,meta72343));
});
}
return (new cljs.core.async.t72342(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t72351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t72351 = (function (ch,f,map_GT_,meta72352){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta72352 = meta72352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t72351.cljs$lang$type = true;
cljs.core.async.t72351.cljs$lang$ctorStr = "cljs.core.async/t72351";
cljs.core.async.t72351.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t72351");
});
cljs.core.async.t72351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t72351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t72351.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t72351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t72351.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t72351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t72351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72353){var self__ = this;
var _72353__$1 = this;return self__.meta72352;
});
cljs.core.async.t72351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72353,meta72352__$1){var self__ = this;
var _72353__$1 = this;return (new cljs.core.async.t72351(self__.ch,self__.f,self__.map_GT_,meta72352__$1));
});
cljs.core.async.__GT_t72351 = (function __GT_t72351(ch__$1,f__$1,map_GT___$1,meta72352){return (new cljs.core.async.t72351(ch__$1,f__$1,map_GT___$1,meta72352));
});
}
return (new cljs.core.async.t72351(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t72357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t72357 = (function (ch,p,filter_GT_,meta72358){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta72358 = meta72358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t72357.cljs$lang$type = true;
cljs.core.async.t72357.cljs$lang$ctorStr = "cljs.core.async/t72357";
cljs.core.async.t72357.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t72357");
});
cljs.core.async.t72357.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t72357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t72357.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t72357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t72357.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t72357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t72357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72359){var self__ = this;
var _72359__$1 = this;return self__.meta72358;
});
cljs.core.async.t72357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72359,meta72358__$1){var self__ = this;
var _72359__$1 = this;return (new cljs.core.async.t72357(self__.ch,self__.p,self__.filter_GT_,meta72358__$1));
});
cljs.core.async.__GT_t72357 = (function __GT_t72357(ch__$1,p__$1,filter_GT___$1,meta72358){return (new cljs.core.async.t72357(ch__$1,p__$1,filter_GT___$1,meta72358));
});
}
return (new cljs.core.async.t72357(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7038__auto___72442 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_72421){var state_val_72422 = (state_72421[1]);if((state_val_72422 === 1))
{var state_72421__$1 = state_72421;var statearr_72423_72443 = state_72421__$1;(statearr_72423_72443[2] = null);
(statearr_72423_72443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72422 === 2))
{var state_72421__$1 = state_72421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72421__$1,4,ch);
} else
{if((state_val_72422 === 3))
{var inst_72419 = (state_72421[2]);var state_72421__$1 = state_72421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72421__$1,inst_72419);
} else
{if((state_val_72422 === 4))
{var inst_72403 = (state_72421[7]);var inst_72403__$1 = (state_72421[2]);var inst_72404 = (inst_72403__$1 == null);var state_72421__$1 = (function (){var statearr_72424 = state_72421;(statearr_72424[7] = inst_72403__$1);
return statearr_72424;
})();if(cljs.core.truth_(inst_72404))
{var statearr_72425_72444 = state_72421__$1;(statearr_72425_72444[1] = 5);
} else
{var statearr_72426_72445 = state_72421__$1;(statearr_72426_72445[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72422 === 5))
{var inst_72406 = cljs.core.async.close_BANG_.call(null,out);var state_72421__$1 = state_72421;var statearr_72427_72446 = state_72421__$1;(statearr_72427_72446[2] = inst_72406);
(statearr_72427_72446[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72422 === 6))
{var inst_72403 = (state_72421[7]);var inst_72408 = p.call(null,inst_72403);var state_72421__$1 = state_72421;if(cljs.core.truth_(inst_72408))
{var statearr_72428_72447 = state_72421__$1;(statearr_72428_72447[1] = 8);
} else
{var statearr_72429_72448 = state_72421__$1;(statearr_72429_72448[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72422 === 7))
{var inst_72417 = (state_72421[2]);var state_72421__$1 = state_72421;var statearr_72430_72449 = state_72421__$1;(statearr_72430_72449[2] = inst_72417);
(statearr_72430_72449[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72422 === 8))
{var inst_72403 = (state_72421[7]);var state_72421__$1 = state_72421;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72421__$1,11,out,inst_72403);
} else
{if((state_val_72422 === 9))
{var state_72421__$1 = state_72421;var statearr_72431_72450 = state_72421__$1;(statearr_72431_72450[2] = null);
(statearr_72431_72450[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72422 === 10))
{var inst_72414 = (state_72421[2]);var state_72421__$1 = (function (){var statearr_72432 = state_72421;(statearr_72432[8] = inst_72414);
return statearr_72432;
})();var statearr_72433_72451 = state_72421__$1;(statearr_72433_72451[2] = null);
(statearr_72433_72451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72422 === 11))
{var inst_72411 = (state_72421[2]);var state_72421__$1 = state_72421;var statearr_72434_72452 = state_72421__$1;(statearr_72434_72452[2] = inst_72411);
(statearr_72434_72452[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_72438 = [null,null,null,null,null,null,null,null,null];(statearr_72438[0] = state_machine__6969__auto__);
(statearr_72438[1] = 1);
return statearr_72438;
});
var state_machine__6969__auto____1 = (function (state_72421){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_72421);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e72439){if((e72439 instanceof Object))
{var ex__6972__auto__ = e72439;var statearr_72440_72453 = state_72421;(statearr_72440_72453[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72421);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e72439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__72454 = state_72421;
state_72421 = G__72454;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_72421){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_72421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_72441 = f__7039__auto__.call(null);(statearr_72441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___72442);
return statearr_72441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7038__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_72606){var state_val_72607 = (state_72606[1]);if((state_val_72607 === 1))
{var state_72606__$1 = state_72606;var statearr_72608_72645 = state_72606__$1;(statearr_72608_72645[2] = null);
(statearr_72608_72645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 2))
{var state_72606__$1 = state_72606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72606__$1,4,in$);
} else
{if((state_val_72607 === 3))
{var inst_72604 = (state_72606[2]);var state_72606__$1 = state_72606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72606__$1,inst_72604);
} else
{if((state_val_72607 === 4))
{var inst_72552 = (state_72606[7]);var inst_72552__$1 = (state_72606[2]);var inst_72553 = (inst_72552__$1 == null);var state_72606__$1 = (function (){var statearr_72609 = state_72606;(statearr_72609[7] = inst_72552__$1);
return statearr_72609;
})();if(cljs.core.truth_(inst_72553))
{var statearr_72610_72646 = state_72606__$1;(statearr_72610_72646[1] = 5);
} else
{var statearr_72611_72647 = state_72606__$1;(statearr_72611_72647[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 5))
{var inst_72555 = cljs.core.async.close_BANG_.call(null,out);var state_72606__$1 = state_72606;var statearr_72612_72648 = state_72606__$1;(statearr_72612_72648[2] = inst_72555);
(statearr_72612_72648[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 6))
{var inst_72552 = (state_72606[7]);var inst_72557 = f.call(null,inst_72552);var inst_72562 = cljs.core.seq.call(null,inst_72557);var inst_72563 = inst_72562;var inst_72564 = null;var inst_72565 = 0;var inst_72566 = 0;var state_72606__$1 = (function (){var statearr_72613 = state_72606;(statearr_72613[8] = inst_72566);
(statearr_72613[9] = inst_72565);
(statearr_72613[10] = inst_72563);
(statearr_72613[11] = inst_72564);
return statearr_72613;
})();var statearr_72614_72649 = state_72606__$1;(statearr_72614_72649[2] = null);
(statearr_72614_72649[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 7))
{var inst_72602 = (state_72606[2]);var state_72606__$1 = state_72606;var statearr_72615_72650 = state_72606__$1;(statearr_72615_72650[2] = inst_72602);
(statearr_72615_72650[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 8))
{var inst_72566 = (state_72606[8]);var inst_72565 = (state_72606[9]);var inst_72568 = (inst_72566 < inst_72565);var inst_72569 = inst_72568;var state_72606__$1 = state_72606;if(cljs.core.truth_(inst_72569))
{var statearr_72616_72651 = state_72606__$1;(statearr_72616_72651[1] = 10);
} else
{var statearr_72617_72652 = state_72606__$1;(statearr_72617_72652[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 9))
{var inst_72599 = (state_72606[2]);var state_72606__$1 = (function (){var statearr_72618 = state_72606;(statearr_72618[12] = inst_72599);
return statearr_72618;
})();var statearr_72619_72653 = state_72606__$1;(statearr_72619_72653[2] = null);
(statearr_72619_72653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 10))
{var inst_72566 = (state_72606[8]);var inst_72564 = (state_72606[11]);var inst_72571 = cljs.core._nth.call(null,inst_72564,inst_72566);var state_72606__$1 = state_72606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72606__$1,13,out,inst_72571);
} else
{if((state_val_72607 === 11))
{var inst_72577 = (state_72606[13]);var inst_72563 = (state_72606[10]);var inst_72577__$1 = cljs.core.seq.call(null,inst_72563);var state_72606__$1 = (function (){var statearr_72623 = state_72606;(statearr_72623[13] = inst_72577__$1);
return statearr_72623;
})();if(inst_72577__$1)
{var statearr_72624_72654 = state_72606__$1;(statearr_72624_72654[1] = 14);
} else
{var statearr_72625_72655 = state_72606__$1;(statearr_72625_72655[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 12))
{var inst_72597 = (state_72606[2]);var state_72606__$1 = state_72606;var statearr_72626_72656 = state_72606__$1;(statearr_72626_72656[2] = inst_72597);
(statearr_72626_72656[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 13))
{var inst_72566 = (state_72606[8]);var inst_72565 = (state_72606[9]);var inst_72563 = (state_72606[10]);var inst_72564 = (state_72606[11]);var inst_72573 = (state_72606[2]);var inst_72574 = (inst_72566 + 1);var tmp72620 = inst_72565;var tmp72621 = inst_72563;var tmp72622 = inst_72564;var inst_72563__$1 = tmp72621;var inst_72564__$1 = tmp72622;var inst_72565__$1 = tmp72620;var inst_72566__$1 = inst_72574;var state_72606__$1 = (function (){var statearr_72627 = state_72606;(statearr_72627[8] = inst_72566__$1);
(statearr_72627[9] = inst_72565__$1);
(statearr_72627[14] = inst_72573);
(statearr_72627[10] = inst_72563__$1);
(statearr_72627[11] = inst_72564__$1);
return statearr_72627;
})();var statearr_72628_72657 = state_72606__$1;(statearr_72628_72657[2] = null);
(statearr_72628_72657[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 14))
{var inst_72577 = (state_72606[13]);var inst_72579 = cljs.core.chunked_seq_QMARK_.call(null,inst_72577);var state_72606__$1 = state_72606;if(inst_72579)
{var statearr_72629_72658 = state_72606__$1;(statearr_72629_72658[1] = 17);
} else
{var statearr_72630_72659 = state_72606__$1;(statearr_72630_72659[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 15))
{var state_72606__$1 = state_72606;var statearr_72631_72660 = state_72606__$1;(statearr_72631_72660[2] = null);
(statearr_72631_72660[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 16))
{var inst_72595 = (state_72606[2]);var state_72606__$1 = state_72606;var statearr_72632_72661 = state_72606__$1;(statearr_72632_72661[2] = inst_72595);
(statearr_72632_72661[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 17))
{var inst_72577 = (state_72606[13]);var inst_72581 = cljs.core.chunk_first.call(null,inst_72577);var inst_72582 = cljs.core.chunk_rest.call(null,inst_72577);var inst_72583 = cljs.core.count.call(null,inst_72581);var inst_72563 = inst_72582;var inst_72564 = inst_72581;var inst_72565 = inst_72583;var inst_72566 = 0;var state_72606__$1 = (function (){var statearr_72633 = state_72606;(statearr_72633[8] = inst_72566);
(statearr_72633[9] = inst_72565);
(statearr_72633[10] = inst_72563);
(statearr_72633[11] = inst_72564);
return statearr_72633;
})();var statearr_72634_72662 = state_72606__$1;(statearr_72634_72662[2] = null);
(statearr_72634_72662[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 18))
{var inst_72577 = (state_72606[13]);var inst_72586 = cljs.core.first.call(null,inst_72577);var state_72606__$1 = state_72606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72606__$1,20,out,inst_72586);
} else
{if((state_val_72607 === 19))
{var inst_72592 = (state_72606[2]);var state_72606__$1 = state_72606;var statearr_72635_72663 = state_72606__$1;(statearr_72635_72663[2] = inst_72592);
(statearr_72635_72663[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72607 === 20))
{var inst_72577 = (state_72606[13]);var inst_72588 = (state_72606[2]);var inst_72589 = cljs.core.next.call(null,inst_72577);var inst_72563 = inst_72589;var inst_72564 = null;var inst_72565 = 0;var inst_72566 = 0;var state_72606__$1 = (function (){var statearr_72636 = state_72606;(statearr_72636[8] = inst_72566);
(statearr_72636[9] = inst_72565);
(statearr_72636[10] = inst_72563);
(statearr_72636[11] = inst_72564);
(statearr_72636[15] = inst_72588);
return statearr_72636;
})();var statearr_72637_72664 = state_72606__$1;(statearr_72637_72664[2] = null);
(statearr_72637_72664[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_72641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_72641[0] = state_machine__6969__auto__);
(statearr_72641[1] = 1);
return statearr_72641;
});
var state_machine__6969__auto____1 = (function (state_72606){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_72606);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e72642){if((e72642 instanceof Object))
{var ex__6972__auto__ = e72642;var statearr_72643_72665 = state_72606;(statearr_72643_72665[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e72642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__72666 = state_72606;
state_72606 = G__72666;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_72606){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_72606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_72644 = f__7039__auto__.call(null);(statearr_72644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto__);
return statearr_72644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return c__7038__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7038__auto___72747 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_72726){var state_val_72727 = (state_72726[1]);if((state_val_72727 === 1))
{var state_72726__$1 = state_72726;var statearr_72728_72748 = state_72726__$1;(statearr_72728_72748[2] = null);
(statearr_72728_72748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72727 === 2))
{var state_72726__$1 = state_72726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72726__$1,4,from);
} else
{if((state_val_72727 === 3))
{var inst_72724 = (state_72726[2]);var state_72726__$1 = state_72726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72726__$1,inst_72724);
} else
{if((state_val_72727 === 4))
{var inst_72709 = (state_72726[7]);var inst_72709__$1 = (state_72726[2]);var inst_72710 = (inst_72709__$1 == null);var state_72726__$1 = (function (){var statearr_72729 = state_72726;(statearr_72729[7] = inst_72709__$1);
return statearr_72729;
})();if(cljs.core.truth_(inst_72710))
{var statearr_72730_72749 = state_72726__$1;(statearr_72730_72749[1] = 5);
} else
{var statearr_72731_72750 = state_72726__$1;(statearr_72731_72750[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72727 === 5))
{var state_72726__$1 = state_72726;if(cljs.core.truth_(close_QMARK_))
{var statearr_72732_72751 = state_72726__$1;(statearr_72732_72751[1] = 8);
} else
{var statearr_72733_72752 = state_72726__$1;(statearr_72733_72752[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72727 === 6))
{var inst_72709 = (state_72726[7]);var state_72726__$1 = state_72726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72726__$1,11,to,inst_72709);
} else
{if((state_val_72727 === 7))
{var inst_72722 = (state_72726[2]);var state_72726__$1 = state_72726;var statearr_72734_72753 = state_72726__$1;(statearr_72734_72753[2] = inst_72722);
(statearr_72734_72753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72727 === 8))
{var inst_72713 = cljs.core.async.close_BANG_.call(null,to);var state_72726__$1 = state_72726;var statearr_72735_72754 = state_72726__$1;(statearr_72735_72754[2] = inst_72713);
(statearr_72735_72754[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72727 === 9))
{var state_72726__$1 = state_72726;var statearr_72736_72755 = state_72726__$1;(statearr_72736_72755[2] = null);
(statearr_72736_72755[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72727 === 10))
{var inst_72716 = (state_72726[2]);var state_72726__$1 = state_72726;var statearr_72737_72756 = state_72726__$1;(statearr_72737_72756[2] = inst_72716);
(statearr_72737_72756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72727 === 11))
{var inst_72719 = (state_72726[2]);var state_72726__$1 = (function (){var statearr_72738 = state_72726;(statearr_72738[8] = inst_72719);
return statearr_72738;
})();var statearr_72739_72757 = state_72726__$1;(statearr_72739_72757[2] = null);
(statearr_72739_72757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_72743 = [null,null,null,null,null,null,null,null,null];(statearr_72743[0] = state_machine__6969__auto__);
(statearr_72743[1] = 1);
return statearr_72743;
});
var state_machine__6969__auto____1 = (function (state_72726){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_72726);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e72744){if((e72744 instanceof Object))
{var ex__6972__auto__ = e72744;var statearr_72745_72758 = state_72726;(statearr_72745_72758[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72726);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e72744;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__72759 = state_72726;
state_72726 = G__72759;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_72726){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_72726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_72746 = f__7039__auto__.call(null);(statearr_72746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___72747);
return statearr_72746;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7038__auto___72846 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_72824){var state_val_72825 = (state_72824[1]);if((state_val_72825 === 1))
{var state_72824__$1 = state_72824;var statearr_72826_72847 = state_72824__$1;(statearr_72826_72847[2] = null);
(statearr_72826_72847[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72825 === 2))
{var state_72824__$1 = state_72824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72824__$1,4,ch);
} else
{if((state_val_72825 === 3))
{var inst_72822 = (state_72824[2]);var state_72824__$1 = state_72824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72824__$1,inst_72822);
} else
{if((state_val_72825 === 4))
{var inst_72805 = (state_72824[7]);var inst_72805__$1 = (state_72824[2]);var inst_72806 = (inst_72805__$1 == null);var state_72824__$1 = (function (){var statearr_72827 = state_72824;(statearr_72827[7] = inst_72805__$1);
return statearr_72827;
})();if(cljs.core.truth_(inst_72806))
{var statearr_72828_72848 = state_72824__$1;(statearr_72828_72848[1] = 5);
} else
{var statearr_72829_72849 = state_72824__$1;(statearr_72829_72849[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72825 === 5))
{var inst_72808 = cljs.core.async.close_BANG_.call(null,tc);var inst_72809 = cljs.core.async.close_BANG_.call(null,fc);var state_72824__$1 = (function (){var statearr_72830 = state_72824;(statearr_72830[8] = inst_72808);
return statearr_72830;
})();var statearr_72831_72850 = state_72824__$1;(statearr_72831_72850[2] = inst_72809);
(statearr_72831_72850[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72825 === 6))
{var inst_72805 = (state_72824[7]);var inst_72811 = p.call(null,inst_72805);var state_72824__$1 = state_72824;if(cljs.core.truth_(inst_72811))
{var statearr_72832_72851 = state_72824__$1;(statearr_72832_72851[1] = 9);
} else
{var statearr_72833_72852 = state_72824__$1;(statearr_72833_72852[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72825 === 7))
{var inst_72820 = (state_72824[2]);var state_72824__$1 = state_72824;var statearr_72834_72853 = state_72824__$1;(statearr_72834_72853[2] = inst_72820);
(statearr_72834_72853[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72825 === 8))
{var inst_72817 = (state_72824[2]);var state_72824__$1 = (function (){var statearr_72835 = state_72824;(statearr_72835[9] = inst_72817);
return statearr_72835;
})();var statearr_72836_72854 = state_72824__$1;(statearr_72836_72854[2] = null);
(statearr_72836_72854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72825 === 9))
{var state_72824__$1 = state_72824;var statearr_72837_72855 = state_72824__$1;(statearr_72837_72855[2] = tc);
(statearr_72837_72855[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72825 === 10))
{var state_72824__$1 = state_72824;var statearr_72838_72856 = state_72824__$1;(statearr_72838_72856[2] = fc);
(statearr_72838_72856[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72825 === 11))
{var inst_72805 = (state_72824[7]);var inst_72815 = (state_72824[2]);var state_72824__$1 = state_72824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72824__$1,8,inst_72815,inst_72805);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_72842 = [null,null,null,null,null,null,null,null,null,null];(statearr_72842[0] = state_machine__6969__auto__);
(statearr_72842[1] = 1);
return statearr_72842;
});
var state_machine__6969__auto____1 = (function (state_72824){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_72824);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e72843){if((e72843 instanceof Object))
{var ex__6972__auto__ = e72843;var statearr_72844_72857 = state_72824;(statearr_72844_72857[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72824);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e72843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__72858 = state_72824;
state_72824 = G__72858;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_72824){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_72824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_72845 = f__7039__auto__.call(null);(statearr_72845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___72846);
return statearr_72845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7038__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_72905){var state_val_72906 = (state_72905[1]);if((state_val_72906 === 7))
{var inst_72901 = (state_72905[2]);var state_72905__$1 = state_72905;var statearr_72907_72923 = state_72905__$1;(statearr_72907_72923[2] = inst_72901);
(statearr_72907_72923[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72906 === 6))
{var inst_72891 = (state_72905[7]);var inst_72894 = (state_72905[8]);var inst_72898 = f.call(null,inst_72891,inst_72894);var inst_72891__$1 = inst_72898;var state_72905__$1 = (function (){var statearr_72908 = state_72905;(statearr_72908[7] = inst_72891__$1);
return statearr_72908;
})();var statearr_72909_72924 = state_72905__$1;(statearr_72909_72924[2] = null);
(statearr_72909_72924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72906 === 5))
{var inst_72891 = (state_72905[7]);var state_72905__$1 = state_72905;var statearr_72910_72925 = state_72905__$1;(statearr_72910_72925[2] = inst_72891);
(statearr_72910_72925[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72906 === 4))
{var inst_72894 = (state_72905[8]);var inst_72894__$1 = (state_72905[2]);var inst_72895 = (inst_72894__$1 == null);var state_72905__$1 = (function (){var statearr_72911 = state_72905;(statearr_72911[8] = inst_72894__$1);
return statearr_72911;
})();if(cljs.core.truth_(inst_72895))
{var statearr_72912_72926 = state_72905__$1;(statearr_72912_72926[1] = 5);
} else
{var statearr_72913_72927 = state_72905__$1;(statearr_72913_72927[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72906 === 3))
{var inst_72903 = (state_72905[2]);var state_72905__$1 = state_72905;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72905__$1,inst_72903);
} else
{if((state_val_72906 === 2))
{var state_72905__$1 = state_72905;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72905__$1,4,ch);
} else
{if((state_val_72906 === 1))
{var inst_72891 = init;var state_72905__$1 = (function (){var statearr_72914 = state_72905;(statearr_72914[7] = inst_72891);
return statearr_72914;
})();var statearr_72915_72928 = state_72905__$1;(statearr_72915_72928[2] = null);
(statearr_72915_72928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_72919 = [null,null,null,null,null,null,null,null,null];(statearr_72919[0] = state_machine__6969__auto__);
(statearr_72919[1] = 1);
return statearr_72919;
});
var state_machine__6969__auto____1 = (function (state_72905){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_72905);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e72920){if((e72920 instanceof Object))
{var ex__6972__auto__ = e72920;var statearr_72921_72929 = state_72905;(statearr_72921_72929[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72905);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e72920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__72930 = state_72905;
state_72905 = G__72930;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_72905){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_72905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_72922 = f__7039__auto__.call(null);(statearr_72922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto__);
return statearr_72922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return c__7038__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7038__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_72992){var state_val_72993 = (state_72992[1]);if((state_val_72993 === 1))
{var inst_72972 = cljs.core.seq.call(null,coll);var inst_72973 = inst_72972;var state_72992__$1 = (function (){var statearr_72994 = state_72992;(statearr_72994[7] = inst_72973);
return statearr_72994;
})();var statearr_72995_73013 = state_72992__$1;(statearr_72995_73013[2] = null);
(statearr_72995_73013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72993 === 2))
{var inst_72973 = (state_72992[7]);var state_72992__$1 = state_72992;if(cljs.core.truth_(inst_72973))
{var statearr_72996_73014 = state_72992__$1;(statearr_72996_73014[1] = 4);
} else
{var statearr_72997_73015 = state_72992__$1;(statearr_72997_73015[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72993 === 3))
{var inst_72990 = (state_72992[2]);var state_72992__$1 = state_72992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72992__$1,inst_72990);
} else
{if((state_val_72993 === 4))
{var inst_72973 = (state_72992[7]);var inst_72976 = cljs.core.first.call(null,inst_72973);var state_72992__$1 = state_72992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72992__$1,7,ch,inst_72976);
} else
{if((state_val_72993 === 5))
{var state_72992__$1 = state_72992;if(cljs.core.truth_(close_QMARK_))
{var statearr_72998_73016 = state_72992__$1;(statearr_72998_73016[1] = 8);
} else
{var statearr_72999_73017 = state_72992__$1;(statearr_72999_73017[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72993 === 6))
{var inst_72988 = (state_72992[2]);var state_72992__$1 = state_72992;var statearr_73000_73018 = state_72992__$1;(statearr_73000_73018[2] = inst_72988);
(statearr_73000_73018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72993 === 7))
{var inst_72973 = (state_72992[7]);var inst_72978 = (state_72992[2]);var inst_72979 = cljs.core.next.call(null,inst_72973);var inst_72973__$1 = inst_72979;var state_72992__$1 = (function (){var statearr_73001 = state_72992;(statearr_73001[7] = inst_72973__$1);
(statearr_73001[8] = inst_72978);
return statearr_73001;
})();var statearr_73002_73019 = state_72992__$1;(statearr_73002_73019[2] = null);
(statearr_73002_73019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72993 === 8))
{var inst_72983 = cljs.core.async.close_BANG_.call(null,ch);var state_72992__$1 = state_72992;var statearr_73003_73020 = state_72992__$1;(statearr_73003_73020[2] = inst_72983);
(statearr_73003_73020[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72993 === 9))
{var state_72992__$1 = state_72992;var statearr_73004_73021 = state_72992__$1;(statearr_73004_73021[2] = null);
(statearr_73004_73021[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_72993 === 10))
{var inst_72986 = (state_72992[2]);var state_72992__$1 = state_72992;var statearr_73005_73022 = state_72992__$1;(statearr_73005_73022[2] = inst_72986);
(statearr_73005_73022[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_73009 = [null,null,null,null,null,null,null,null,null];(statearr_73009[0] = state_machine__6969__auto__);
(statearr_73009[1] = 1);
return statearr_73009;
});
var state_machine__6969__auto____1 = (function (state_72992){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_72992);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e73010){if((e73010 instanceof Object))
{var ex__6972__auto__ = e73010;var statearr_73011_73023 = state_72992;(statearr_73011_73023[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e73010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__73024 = state_72992;
state_72992 = G__73024;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_72992){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_72992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_73012 = f__7039__auto__.call(null);(statearr_73012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto__);
return statearr_73012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return c__7038__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj73026 = {};return obj73026;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj73028 = {};return obj73028;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t73252 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t73252 = (function (cs,ch,mult,meta73253){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta73253 = meta73253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t73252.cljs$lang$type = true;
cljs.core.async.t73252.cljs$lang$ctorStr = "cljs.core.async/t73252";
cljs.core.async.t73252.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t73252");
});})(cs))
;
cljs.core.async.t73252.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t73252.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t73252.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t73252.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t73252.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t73252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t73252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_73254){var self__ = this;
var _73254__$1 = this;return self__.meta73253;
});})(cs))
;
cljs.core.async.t73252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_73254,meta73253__$1){var self__ = this;
var _73254__$1 = this;return (new cljs.core.async.t73252(self__.cs,self__.ch,self__.mult,meta73253__$1));
});})(cs))
;
cljs.core.async.__GT_t73252 = ((function (cs){
return (function __GT_t73252(cs__$1,ch__$1,mult__$1,meta73253){return (new cljs.core.async.t73252(cs__$1,ch__$1,mult__$1,meta73253));
});})(cs))
;
}
return (new cljs.core.async.t73252(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7038__auto___73475 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_73389){var state_val_73390 = (state_73389[1]);if((state_val_73390 === 32))
{var inst_73333 = (state_73389[7]);var inst_73257 = (state_73389[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_73389,31,Object,null,30);var inst_73340 = cljs.core.async.put_BANG_.call(null,inst_73333,inst_73257,done);var state_73389__$1 = state_73389;var statearr_73391_73476 = state_73389__$1;(statearr_73391_73476[2] = inst_73340);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 1))
{var state_73389__$1 = state_73389;var statearr_73392_73477 = state_73389__$1;(statearr_73392_73477[2] = null);
(statearr_73392_73477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 33))
{var inst_73346 = (state_73389[9]);var inst_73348 = cljs.core.chunked_seq_QMARK_.call(null,inst_73346);var state_73389__$1 = state_73389;if(inst_73348)
{var statearr_73393_73478 = state_73389__$1;(statearr_73393_73478[1] = 36);
} else
{var statearr_73394_73479 = state_73389__$1;(statearr_73394_73479[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 2))
{var state_73389__$1 = state_73389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73389__$1,4,ch);
} else
{if((state_val_73390 === 34))
{var state_73389__$1 = state_73389;var statearr_73395_73480 = state_73389__$1;(statearr_73395_73480[2] = null);
(statearr_73395_73480[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 3))
{var inst_73387 = (state_73389[2]);var state_73389__$1 = state_73389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73389__$1,inst_73387);
} else
{if((state_val_73390 === 35))
{var inst_73371 = (state_73389[2]);var state_73389__$1 = state_73389;var statearr_73396_73481 = state_73389__$1;(statearr_73396_73481[2] = inst_73371);
(statearr_73396_73481[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 4))
{var inst_73257 = (state_73389[8]);var inst_73257__$1 = (state_73389[2]);var inst_73258 = (inst_73257__$1 == null);var state_73389__$1 = (function (){var statearr_73397 = state_73389;(statearr_73397[8] = inst_73257__$1);
return statearr_73397;
})();if(cljs.core.truth_(inst_73258))
{var statearr_73398_73482 = state_73389__$1;(statearr_73398_73482[1] = 5);
} else
{var statearr_73399_73483 = state_73389__$1;(statearr_73399_73483[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 36))
{var inst_73346 = (state_73389[9]);var inst_73350 = cljs.core.chunk_first.call(null,inst_73346);var inst_73351 = cljs.core.chunk_rest.call(null,inst_73346);var inst_73352 = cljs.core.count.call(null,inst_73350);var inst_73325 = inst_73351;var inst_73326 = inst_73350;var inst_73327 = inst_73352;var inst_73328 = 0;var state_73389__$1 = (function (){var statearr_73400 = state_73389;(statearr_73400[10] = inst_73325);
(statearr_73400[11] = inst_73327);
(statearr_73400[12] = inst_73326);
(statearr_73400[13] = inst_73328);
return statearr_73400;
})();var statearr_73401_73484 = state_73389__$1;(statearr_73401_73484[2] = null);
(statearr_73401_73484[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 5))
{var inst_73264 = cljs.core.deref.call(null,cs);var inst_73265 = cljs.core.seq.call(null,inst_73264);var inst_73266 = inst_73265;var inst_73267 = null;var inst_73268 = 0;var inst_73269 = 0;var state_73389__$1 = (function (){var statearr_73402 = state_73389;(statearr_73402[14] = inst_73266);
(statearr_73402[15] = inst_73267);
(statearr_73402[16] = inst_73268);
(statearr_73402[17] = inst_73269);
return statearr_73402;
})();var statearr_73403_73485 = state_73389__$1;(statearr_73403_73485[2] = null);
(statearr_73403_73485[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 37))
{var inst_73346 = (state_73389[9]);var inst_73355 = cljs.core.first.call(null,inst_73346);var state_73389__$1 = (function (){var statearr_73404 = state_73389;(statearr_73404[18] = inst_73355);
return statearr_73404;
})();var statearr_73405_73486 = state_73389__$1;(statearr_73405_73486[2] = null);
(statearr_73405_73486[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 6))
{var inst_73317 = (state_73389[19]);var inst_73316 = cljs.core.deref.call(null,cs);var inst_73317__$1 = cljs.core.keys.call(null,inst_73316);var inst_73318 = cljs.core.count.call(null,inst_73317__$1);var inst_73319 = cljs.core.reset_BANG_.call(null,dctr,inst_73318);var inst_73324 = cljs.core.seq.call(null,inst_73317__$1);var inst_73325 = inst_73324;var inst_73326 = null;var inst_73327 = 0;var inst_73328 = 0;var state_73389__$1 = (function (){var statearr_73406 = state_73389;(statearr_73406[10] = inst_73325);
(statearr_73406[11] = inst_73327);
(statearr_73406[12] = inst_73326);
(statearr_73406[13] = inst_73328);
(statearr_73406[20] = inst_73319);
(statearr_73406[19] = inst_73317__$1);
return statearr_73406;
})();var statearr_73407_73487 = state_73389__$1;(statearr_73407_73487[2] = null);
(statearr_73407_73487[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 38))
{var inst_73368 = (state_73389[2]);var state_73389__$1 = state_73389;var statearr_73408_73488 = state_73389__$1;(statearr_73408_73488[2] = inst_73368);
(statearr_73408_73488[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 7))
{var inst_73385 = (state_73389[2]);var state_73389__$1 = state_73389;var statearr_73409_73489 = state_73389__$1;(statearr_73409_73489[2] = inst_73385);
(statearr_73409_73489[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 39))
{var inst_73346 = (state_73389[9]);var inst_73364 = (state_73389[2]);var inst_73365 = cljs.core.next.call(null,inst_73346);var inst_73325 = inst_73365;var inst_73326 = null;var inst_73327 = 0;var inst_73328 = 0;var state_73389__$1 = (function (){var statearr_73410 = state_73389;(statearr_73410[10] = inst_73325);
(statearr_73410[11] = inst_73327);
(statearr_73410[12] = inst_73326);
(statearr_73410[13] = inst_73328);
(statearr_73410[21] = inst_73364);
return statearr_73410;
})();var statearr_73411_73490 = state_73389__$1;(statearr_73411_73490[2] = null);
(statearr_73411_73490[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 8))
{var inst_73268 = (state_73389[16]);var inst_73269 = (state_73389[17]);var inst_73271 = (inst_73269 < inst_73268);var inst_73272 = inst_73271;var state_73389__$1 = state_73389;if(cljs.core.truth_(inst_73272))
{var statearr_73412_73491 = state_73389__$1;(statearr_73412_73491[1] = 10);
} else
{var statearr_73413_73492 = state_73389__$1;(statearr_73413_73492[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 40))
{var inst_73355 = (state_73389[18]);var inst_73356 = (state_73389[2]);var inst_73357 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_73358 = cljs.core.async.untap_STAR_.call(null,m,inst_73355);var state_73389__$1 = (function (){var statearr_73414 = state_73389;(statearr_73414[22] = inst_73356);
(statearr_73414[23] = inst_73357);
return statearr_73414;
})();var statearr_73415_73493 = state_73389__$1;(statearr_73415_73493[2] = inst_73358);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 9))
{var inst_73314 = (state_73389[2]);var state_73389__$1 = state_73389;var statearr_73416_73494 = state_73389__$1;(statearr_73416_73494[2] = inst_73314);
(statearr_73416_73494[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 41))
{var inst_73355 = (state_73389[18]);var inst_73257 = (state_73389[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_73389,40,Object,null,39);var inst_73362 = cljs.core.async.put_BANG_.call(null,inst_73355,inst_73257,done);var state_73389__$1 = state_73389;var statearr_73417_73495 = state_73389__$1;(statearr_73417_73495[2] = inst_73362);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 10))
{var inst_73267 = (state_73389[15]);var inst_73269 = (state_73389[17]);var inst_73275 = cljs.core._nth.call(null,inst_73267,inst_73269);var inst_73276 = cljs.core.nth.call(null,inst_73275,0,null);var inst_73277 = cljs.core.nth.call(null,inst_73275,1,null);var state_73389__$1 = (function (){var statearr_73418 = state_73389;(statearr_73418[24] = inst_73276);
return statearr_73418;
})();if(cljs.core.truth_(inst_73277))
{var statearr_73419_73496 = state_73389__$1;(statearr_73419_73496[1] = 13);
} else
{var statearr_73420_73497 = state_73389__$1;(statearr_73420_73497[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 42))
{var state_73389__$1 = state_73389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73389__$1,45,dchan);
} else
{if((state_val_73390 === 11))
{var inst_73286 = (state_73389[25]);var inst_73266 = (state_73389[14]);var inst_73286__$1 = cljs.core.seq.call(null,inst_73266);var state_73389__$1 = (function (){var statearr_73421 = state_73389;(statearr_73421[25] = inst_73286__$1);
return statearr_73421;
})();if(inst_73286__$1)
{var statearr_73422_73498 = state_73389__$1;(statearr_73422_73498[1] = 16);
} else
{var statearr_73423_73499 = state_73389__$1;(statearr_73423_73499[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 43))
{var state_73389__$1 = state_73389;var statearr_73424_73500 = state_73389__$1;(statearr_73424_73500[2] = null);
(statearr_73424_73500[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 12))
{var inst_73312 = (state_73389[2]);var state_73389__$1 = state_73389;var statearr_73425_73501 = state_73389__$1;(statearr_73425_73501[2] = inst_73312);
(statearr_73425_73501[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 44))
{var inst_73382 = (state_73389[2]);var state_73389__$1 = (function (){var statearr_73426 = state_73389;(statearr_73426[26] = inst_73382);
return statearr_73426;
})();var statearr_73427_73502 = state_73389__$1;(statearr_73427_73502[2] = null);
(statearr_73427_73502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 13))
{var inst_73276 = (state_73389[24]);var inst_73279 = cljs.core.async.close_BANG_.call(null,inst_73276);var state_73389__$1 = state_73389;var statearr_73428_73503 = state_73389__$1;(statearr_73428_73503[2] = inst_73279);
(statearr_73428_73503[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 45))
{var inst_73379 = (state_73389[2]);var state_73389__$1 = state_73389;var statearr_73432_73504 = state_73389__$1;(statearr_73432_73504[2] = inst_73379);
(statearr_73432_73504[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 14))
{var state_73389__$1 = state_73389;var statearr_73433_73505 = state_73389__$1;(statearr_73433_73505[2] = null);
(statearr_73433_73505[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 15))
{var inst_73266 = (state_73389[14]);var inst_73267 = (state_73389[15]);var inst_73268 = (state_73389[16]);var inst_73269 = (state_73389[17]);var inst_73282 = (state_73389[2]);var inst_73283 = (inst_73269 + 1);var tmp73429 = inst_73266;var tmp73430 = inst_73267;var tmp73431 = inst_73268;var inst_73266__$1 = tmp73429;var inst_73267__$1 = tmp73430;var inst_73268__$1 = tmp73431;var inst_73269__$1 = inst_73283;var state_73389__$1 = (function (){var statearr_73434 = state_73389;(statearr_73434[27] = inst_73282);
(statearr_73434[14] = inst_73266__$1);
(statearr_73434[15] = inst_73267__$1);
(statearr_73434[16] = inst_73268__$1);
(statearr_73434[17] = inst_73269__$1);
return statearr_73434;
})();var statearr_73435_73506 = state_73389__$1;(statearr_73435_73506[2] = null);
(statearr_73435_73506[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 16))
{var inst_73286 = (state_73389[25]);var inst_73288 = cljs.core.chunked_seq_QMARK_.call(null,inst_73286);var state_73389__$1 = state_73389;if(inst_73288)
{var statearr_73436_73507 = state_73389__$1;(statearr_73436_73507[1] = 19);
} else
{var statearr_73437_73508 = state_73389__$1;(statearr_73437_73508[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 17))
{var state_73389__$1 = state_73389;var statearr_73438_73509 = state_73389__$1;(statearr_73438_73509[2] = null);
(statearr_73438_73509[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 18))
{var inst_73310 = (state_73389[2]);var state_73389__$1 = state_73389;var statearr_73439_73510 = state_73389__$1;(statearr_73439_73510[2] = inst_73310);
(statearr_73439_73510[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 19))
{var inst_73286 = (state_73389[25]);var inst_73290 = cljs.core.chunk_first.call(null,inst_73286);var inst_73291 = cljs.core.chunk_rest.call(null,inst_73286);var inst_73292 = cljs.core.count.call(null,inst_73290);var inst_73266 = inst_73291;var inst_73267 = inst_73290;var inst_73268 = inst_73292;var inst_73269 = 0;var state_73389__$1 = (function (){var statearr_73440 = state_73389;(statearr_73440[14] = inst_73266);
(statearr_73440[15] = inst_73267);
(statearr_73440[16] = inst_73268);
(statearr_73440[17] = inst_73269);
return statearr_73440;
})();var statearr_73441_73511 = state_73389__$1;(statearr_73441_73511[2] = null);
(statearr_73441_73511[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 20))
{var inst_73286 = (state_73389[25]);var inst_73296 = cljs.core.first.call(null,inst_73286);var inst_73297 = cljs.core.nth.call(null,inst_73296,0,null);var inst_73298 = cljs.core.nth.call(null,inst_73296,1,null);var state_73389__$1 = (function (){var statearr_73442 = state_73389;(statearr_73442[28] = inst_73297);
return statearr_73442;
})();if(cljs.core.truth_(inst_73298))
{var statearr_73443_73512 = state_73389__$1;(statearr_73443_73512[1] = 22);
} else
{var statearr_73444_73513 = state_73389__$1;(statearr_73444_73513[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 21))
{var inst_73307 = (state_73389[2]);var state_73389__$1 = state_73389;var statearr_73445_73514 = state_73389__$1;(statearr_73445_73514[2] = inst_73307);
(statearr_73445_73514[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 22))
{var inst_73297 = (state_73389[28]);var inst_73300 = cljs.core.async.close_BANG_.call(null,inst_73297);var state_73389__$1 = state_73389;var statearr_73446_73515 = state_73389__$1;(statearr_73446_73515[2] = inst_73300);
(statearr_73446_73515[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 23))
{var state_73389__$1 = state_73389;var statearr_73447_73516 = state_73389__$1;(statearr_73447_73516[2] = null);
(statearr_73447_73516[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 24))
{var inst_73286 = (state_73389[25]);var inst_73303 = (state_73389[2]);var inst_73304 = cljs.core.next.call(null,inst_73286);var inst_73266 = inst_73304;var inst_73267 = null;var inst_73268 = 0;var inst_73269 = 0;var state_73389__$1 = (function (){var statearr_73448 = state_73389;(statearr_73448[14] = inst_73266);
(statearr_73448[15] = inst_73267);
(statearr_73448[16] = inst_73268);
(statearr_73448[29] = inst_73303);
(statearr_73448[17] = inst_73269);
return statearr_73448;
})();var statearr_73449_73517 = state_73389__$1;(statearr_73449_73517[2] = null);
(statearr_73449_73517[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 25))
{var inst_73327 = (state_73389[11]);var inst_73328 = (state_73389[13]);var inst_73330 = (inst_73328 < inst_73327);var inst_73331 = inst_73330;var state_73389__$1 = state_73389;if(cljs.core.truth_(inst_73331))
{var statearr_73450_73518 = state_73389__$1;(statearr_73450_73518[1] = 27);
} else
{var statearr_73451_73519 = state_73389__$1;(statearr_73451_73519[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 26))
{var inst_73317 = (state_73389[19]);var inst_73375 = (state_73389[2]);var inst_73376 = cljs.core.seq.call(null,inst_73317);var state_73389__$1 = (function (){var statearr_73452 = state_73389;(statearr_73452[30] = inst_73375);
return statearr_73452;
})();if(inst_73376)
{var statearr_73453_73520 = state_73389__$1;(statearr_73453_73520[1] = 42);
} else
{var statearr_73454_73521 = state_73389__$1;(statearr_73454_73521[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 27))
{var inst_73326 = (state_73389[12]);var inst_73328 = (state_73389[13]);var inst_73333 = cljs.core._nth.call(null,inst_73326,inst_73328);var state_73389__$1 = (function (){var statearr_73455 = state_73389;(statearr_73455[7] = inst_73333);
return statearr_73455;
})();var statearr_73456_73522 = state_73389__$1;(statearr_73456_73522[2] = null);
(statearr_73456_73522[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 28))
{var inst_73325 = (state_73389[10]);var inst_73346 = (state_73389[9]);var inst_73346__$1 = cljs.core.seq.call(null,inst_73325);var state_73389__$1 = (function (){var statearr_73460 = state_73389;(statearr_73460[9] = inst_73346__$1);
return statearr_73460;
})();if(inst_73346__$1)
{var statearr_73461_73523 = state_73389__$1;(statearr_73461_73523[1] = 33);
} else
{var statearr_73462_73524 = state_73389__$1;(statearr_73462_73524[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 29))
{var inst_73373 = (state_73389[2]);var state_73389__$1 = state_73389;var statearr_73463_73525 = state_73389__$1;(statearr_73463_73525[2] = inst_73373);
(statearr_73463_73525[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 30))
{var inst_73325 = (state_73389[10]);var inst_73327 = (state_73389[11]);var inst_73326 = (state_73389[12]);var inst_73328 = (state_73389[13]);var inst_73342 = (state_73389[2]);var inst_73343 = (inst_73328 + 1);var tmp73457 = inst_73325;var tmp73458 = inst_73327;var tmp73459 = inst_73326;var inst_73325__$1 = tmp73457;var inst_73326__$1 = tmp73459;var inst_73327__$1 = tmp73458;var inst_73328__$1 = inst_73343;var state_73389__$1 = (function (){var statearr_73464 = state_73389;(statearr_73464[10] = inst_73325__$1);
(statearr_73464[11] = inst_73327__$1);
(statearr_73464[12] = inst_73326__$1);
(statearr_73464[13] = inst_73328__$1);
(statearr_73464[31] = inst_73342);
return statearr_73464;
})();var statearr_73465_73526 = state_73389__$1;(statearr_73465_73526[2] = null);
(statearr_73465_73526[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73390 === 31))
{var inst_73333 = (state_73389[7]);var inst_73334 = (state_73389[2]);var inst_73335 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_73336 = cljs.core.async.untap_STAR_.call(null,m,inst_73333);var state_73389__$1 = (function (){var statearr_73466 = state_73389;(statearr_73466[32] = inst_73335);
(statearr_73466[33] = inst_73334);
return statearr_73466;
})();var statearr_73467_73527 = state_73389__$1;(statearr_73467_73527[2] = inst_73336);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_73471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_73471[0] = state_machine__6969__auto__);
(statearr_73471[1] = 1);
return statearr_73471;
});
var state_machine__6969__auto____1 = (function (state_73389){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_73389);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e73472){if((e73472 instanceof Object))
{var ex__6972__auto__ = e73472;var statearr_73473_73528 = state_73389;(statearr_73473_73528[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e73472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__73529 = state_73389;
state_73389 = G__73529;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_73389){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_73389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_73474 = f__7039__auto__.call(null);(statearr_73474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___73475);
return statearr_73474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj73531 = {};return obj73531;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t73641 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t73641 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta73642){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta73642 = meta73642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t73641.cljs$lang$type = true;
cljs.core.async.t73641.cljs$lang$ctorStr = "cljs.core.async/t73641";
cljs.core.async.t73641.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t73641");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t73641.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t73641.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t73641.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t73641.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t73641.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t73641.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t73641.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t73641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t73641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_73643){var self__ = this;
var _73643__$1 = this;return self__.meta73642;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t73641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_73643,meta73642__$1){var self__ = this;
var _73643__$1 = this;return (new cljs.core.async.t73641(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta73642__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t73641 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t73641(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta73642){return (new cljs.core.async.t73641(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta73642));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t73641(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7038__auto___73750 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_73708){var state_val_73709 = (state_73708[1]);if((state_val_73709 === 1))
{var inst_73647 = (state_73708[7]);var inst_73647__$1 = calc_state.call(null);var inst_73648 = cljs.core.seq_QMARK_.call(null,inst_73647__$1);var state_73708__$1 = (function (){var statearr_73710 = state_73708;(statearr_73710[7] = inst_73647__$1);
return statearr_73710;
})();if(inst_73648)
{var statearr_73711_73751 = state_73708__$1;(statearr_73711_73751[1] = 2);
} else
{var statearr_73712_73752 = state_73708__$1;(statearr_73712_73752[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 2))
{var inst_73647 = (state_73708[7]);var inst_73650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_73647);var state_73708__$1 = state_73708;var statearr_73713_73753 = state_73708__$1;(statearr_73713_73753[2] = inst_73650);
(statearr_73713_73753[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 3))
{var inst_73647 = (state_73708[7]);var state_73708__$1 = state_73708;var statearr_73714_73754 = state_73708__$1;(statearr_73714_73754[2] = inst_73647);
(statearr_73714_73754[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 4))
{var inst_73647 = (state_73708[7]);var inst_73653 = (state_73708[2]);var inst_73654 = cljs.core.get.call(null,inst_73653,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_73655 = cljs.core.get.call(null,inst_73653,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_73656 = cljs.core.get.call(null,inst_73653,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_73657 = inst_73647;var state_73708__$1 = (function (){var statearr_73715 = state_73708;(statearr_73715[8] = inst_73655);
(statearr_73715[9] = inst_73654);
(statearr_73715[10] = inst_73657);
(statearr_73715[11] = inst_73656);
return statearr_73715;
})();var statearr_73716_73755 = state_73708__$1;(statearr_73716_73755[2] = null);
(statearr_73716_73755[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 5))
{var inst_73657 = (state_73708[10]);var inst_73660 = cljs.core.seq_QMARK_.call(null,inst_73657);var state_73708__$1 = state_73708;if(inst_73660)
{var statearr_73717_73756 = state_73708__$1;(statearr_73717_73756[1] = 7);
} else
{var statearr_73718_73757 = state_73708__$1;(statearr_73718_73757[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 6))
{var inst_73706 = (state_73708[2]);var state_73708__$1 = state_73708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73708__$1,inst_73706);
} else
{if((state_val_73709 === 7))
{var inst_73657 = (state_73708[10]);var inst_73662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_73657);var state_73708__$1 = state_73708;var statearr_73719_73758 = state_73708__$1;(statearr_73719_73758[2] = inst_73662);
(statearr_73719_73758[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 8))
{var inst_73657 = (state_73708[10]);var state_73708__$1 = state_73708;var statearr_73720_73759 = state_73708__$1;(statearr_73720_73759[2] = inst_73657);
(statearr_73720_73759[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 9))
{var inst_73665 = (state_73708[12]);var inst_73665__$1 = (state_73708[2]);var inst_73666 = cljs.core.get.call(null,inst_73665__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_73667 = cljs.core.get.call(null,inst_73665__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_73668 = cljs.core.get.call(null,inst_73665__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_73708__$1 = (function (){var statearr_73721 = state_73708;(statearr_73721[12] = inst_73665__$1);
(statearr_73721[13] = inst_73668);
(statearr_73721[14] = inst_73667);
return statearr_73721;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_73708__$1,10,inst_73666);
} else
{if((state_val_73709 === 10))
{var inst_73672 = (state_73708[15]);var inst_73673 = (state_73708[16]);var inst_73671 = (state_73708[2]);var inst_73672__$1 = cljs.core.nth.call(null,inst_73671,0,null);var inst_73673__$1 = cljs.core.nth.call(null,inst_73671,1,null);var inst_73674 = (inst_73672__$1 == null);var inst_73675 = cljs.core._EQ_.call(null,inst_73673__$1,change);var inst_73676 = (inst_73674) || (inst_73675);var state_73708__$1 = (function (){var statearr_73722 = state_73708;(statearr_73722[15] = inst_73672__$1);
(statearr_73722[16] = inst_73673__$1);
return statearr_73722;
})();if(cljs.core.truth_(inst_73676))
{var statearr_73723_73760 = state_73708__$1;(statearr_73723_73760[1] = 11);
} else
{var statearr_73724_73761 = state_73708__$1;(statearr_73724_73761[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 11))
{var inst_73672 = (state_73708[15]);var inst_73678 = (inst_73672 == null);var state_73708__$1 = state_73708;if(cljs.core.truth_(inst_73678))
{var statearr_73725_73762 = state_73708__$1;(statearr_73725_73762[1] = 14);
} else
{var statearr_73726_73763 = state_73708__$1;(statearr_73726_73763[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 12))
{var inst_73687 = (state_73708[17]);var inst_73673 = (state_73708[16]);var inst_73668 = (state_73708[13]);var inst_73687__$1 = inst_73668.call(null,inst_73673);var state_73708__$1 = (function (){var statearr_73727 = state_73708;(statearr_73727[17] = inst_73687__$1);
return statearr_73727;
})();if(cljs.core.truth_(inst_73687__$1))
{var statearr_73728_73764 = state_73708__$1;(statearr_73728_73764[1] = 17);
} else
{var statearr_73729_73765 = state_73708__$1;(statearr_73729_73765[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 13))
{var inst_73704 = (state_73708[2]);var state_73708__$1 = state_73708;var statearr_73730_73766 = state_73708__$1;(statearr_73730_73766[2] = inst_73704);
(statearr_73730_73766[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 14))
{var inst_73673 = (state_73708[16]);var inst_73680 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_73673);var state_73708__$1 = state_73708;var statearr_73731_73767 = state_73708__$1;(statearr_73731_73767[2] = inst_73680);
(statearr_73731_73767[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 15))
{var state_73708__$1 = state_73708;var statearr_73732_73768 = state_73708__$1;(statearr_73732_73768[2] = null);
(statearr_73732_73768[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 16))
{var inst_73683 = (state_73708[2]);var inst_73684 = calc_state.call(null);var inst_73657 = inst_73684;var state_73708__$1 = (function (){var statearr_73733 = state_73708;(statearr_73733[10] = inst_73657);
(statearr_73733[18] = inst_73683);
return statearr_73733;
})();var statearr_73734_73769 = state_73708__$1;(statearr_73734_73769[2] = null);
(statearr_73734_73769[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 17))
{var inst_73687 = (state_73708[17]);var state_73708__$1 = state_73708;var statearr_73735_73770 = state_73708__$1;(statearr_73735_73770[2] = inst_73687);
(statearr_73735_73770[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 18))
{var inst_73673 = (state_73708[16]);var inst_73668 = (state_73708[13]);var inst_73667 = (state_73708[14]);var inst_73690 = cljs.core.empty_QMARK_.call(null,inst_73668);var inst_73691 = inst_73667.call(null,inst_73673);var inst_73692 = cljs.core.not.call(null,inst_73691);var inst_73693 = (inst_73690) && (inst_73692);var state_73708__$1 = state_73708;var statearr_73736_73771 = state_73708__$1;(statearr_73736_73771[2] = inst_73693);
(statearr_73736_73771[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 19))
{var inst_73695 = (state_73708[2]);var state_73708__$1 = state_73708;if(cljs.core.truth_(inst_73695))
{var statearr_73737_73772 = state_73708__$1;(statearr_73737_73772[1] = 20);
} else
{var statearr_73738_73773 = state_73708__$1;(statearr_73738_73773[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 20))
{var inst_73672 = (state_73708[15]);var state_73708__$1 = state_73708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73708__$1,23,out,inst_73672);
} else
{if((state_val_73709 === 21))
{var state_73708__$1 = state_73708;var statearr_73739_73774 = state_73708__$1;(statearr_73739_73774[2] = null);
(statearr_73739_73774[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 22))
{var inst_73665 = (state_73708[12]);var inst_73701 = (state_73708[2]);var inst_73657 = inst_73665;var state_73708__$1 = (function (){var statearr_73740 = state_73708;(statearr_73740[10] = inst_73657);
(statearr_73740[19] = inst_73701);
return statearr_73740;
})();var statearr_73741_73775 = state_73708__$1;(statearr_73741_73775[2] = null);
(statearr_73741_73775[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73709 === 23))
{var inst_73698 = (state_73708[2]);var state_73708__$1 = state_73708;var statearr_73742_73776 = state_73708__$1;(statearr_73742_73776[2] = inst_73698);
(statearr_73742_73776[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_73746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_73746[0] = state_machine__6969__auto__);
(statearr_73746[1] = 1);
return statearr_73746;
});
var state_machine__6969__auto____1 = (function (state_73708){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_73708);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e73747){if((e73747 instanceof Object))
{var ex__6972__auto__ = e73747;var statearr_73748_73777 = state_73708;(statearr_73748_73777[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e73747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__73778 = state_73708;
state_73708 = G__73778;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_73708){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_73708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_73749 = f__7039__auto__.call(null);(statearr_73749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___73750);
return statearr_73749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj73780 = {};return obj73780;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__73781_SHARP_){if(cljs.core.truth_(p1__73781_SHARP_.call(null,topic)))
{return p1__73781_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__73781_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t73906 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t73906 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta73907){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta73907 = meta73907;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t73906.cljs$lang$type = true;
cljs.core.async.t73906.cljs$lang$ctorStr = "cljs.core.async/t73906";
cljs.core.async.t73906.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t73906");
});})(mults,ensure_mult))
;
cljs.core.async.t73906.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t73906.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t73906.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t73906.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t73906.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t73906.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t73906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t73906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_73908){var self__ = this;
var _73908__$1 = this;return self__.meta73907;
});})(mults,ensure_mult))
;
cljs.core.async.t73906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_73908,meta73907__$1){var self__ = this;
var _73908__$1 = this;return (new cljs.core.async.t73906(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta73907__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t73906 = ((function (mults,ensure_mult){
return (function __GT_t73906(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta73907){return (new cljs.core.async.t73906(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta73907));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t73906(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7038__auto___74030 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_73982){var state_val_73983 = (state_73982[1]);if((state_val_73983 === 1))
{var state_73982__$1 = state_73982;var statearr_73984_74031 = state_73982__$1;(statearr_73984_74031[2] = null);
(statearr_73984_74031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 2))
{var state_73982__$1 = state_73982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73982__$1,4,ch);
} else
{if((state_val_73983 === 3))
{var inst_73980 = (state_73982[2]);var state_73982__$1 = state_73982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73982__$1,inst_73980);
} else
{if((state_val_73983 === 4))
{var inst_73911 = (state_73982[7]);var inst_73911__$1 = (state_73982[2]);var inst_73912 = (inst_73911__$1 == null);var state_73982__$1 = (function (){var statearr_73985 = state_73982;(statearr_73985[7] = inst_73911__$1);
return statearr_73985;
})();if(cljs.core.truth_(inst_73912))
{var statearr_73986_74032 = state_73982__$1;(statearr_73986_74032[1] = 5);
} else
{var statearr_73987_74033 = state_73982__$1;(statearr_73987_74033[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 5))
{var inst_73918 = cljs.core.deref.call(null,mults);var inst_73919 = cljs.core.vals.call(null,inst_73918);var inst_73920 = cljs.core.seq.call(null,inst_73919);var inst_73921 = inst_73920;var inst_73922 = null;var inst_73923 = 0;var inst_73924 = 0;var state_73982__$1 = (function (){var statearr_73988 = state_73982;(statearr_73988[8] = inst_73921);
(statearr_73988[9] = inst_73924);
(statearr_73988[10] = inst_73922);
(statearr_73988[11] = inst_73923);
return statearr_73988;
})();var statearr_73989_74034 = state_73982__$1;(statearr_73989_74034[2] = null);
(statearr_73989_74034[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 6))
{var inst_73959 = (state_73982[12]);var inst_73911 = (state_73982[7]);var inst_73961 = (state_73982[13]);var inst_73959__$1 = topic_fn.call(null,inst_73911);var inst_73960 = cljs.core.deref.call(null,mults);var inst_73961__$1 = cljs.core.get.call(null,inst_73960,inst_73959__$1);var state_73982__$1 = (function (){var statearr_73990 = state_73982;(statearr_73990[12] = inst_73959__$1);
(statearr_73990[13] = inst_73961__$1);
return statearr_73990;
})();if(cljs.core.truth_(inst_73961__$1))
{var statearr_73991_74035 = state_73982__$1;(statearr_73991_74035[1] = 19);
} else
{var statearr_73992_74036 = state_73982__$1;(statearr_73992_74036[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 7))
{var inst_73978 = (state_73982[2]);var state_73982__$1 = state_73982;var statearr_73993_74037 = state_73982__$1;(statearr_73993_74037[2] = inst_73978);
(statearr_73993_74037[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 8))
{var inst_73924 = (state_73982[9]);var inst_73923 = (state_73982[11]);var inst_73926 = (inst_73924 < inst_73923);var inst_73927 = inst_73926;var state_73982__$1 = state_73982;if(cljs.core.truth_(inst_73927))
{var statearr_73997_74038 = state_73982__$1;(statearr_73997_74038[1] = 10);
} else
{var statearr_73998_74039 = state_73982__$1;(statearr_73998_74039[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 9))
{var inst_73957 = (state_73982[2]);var state_73982__$1 = state_73982;var statearr_73999_74040 = state_73982__$1;(statearr_73999_74040[2] = inst_73957);
(statearr_73999_74040[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 10))
{var inst_73921 = (state_73982[8]);var inst_73924 = (state_73982[9]);var inst_73922 = (state_73982[10]);var inst_73923 = (state_73982[11]);var inst_73929 = cljs.core._nth.call(null,inst_73922,inst_73924);var inst_73930 = cljs.core.async.muxch_STAR_.call(null,inst_73929);var inst_73931 = cljs.core.async.close_BANG_.call(null,inst_73930);var inst_73932 = (inst_73924 + 1);var tmp73994 = inst_73921;var tmp73995 = inst_73922;var tmp73996 = inst_73923;var inst_73921__$1 = tmp73994;var inst_73922__$1 = tmp73995;var inst_73923__$1 = tmp73996;var inst_73924__$1 = inst_73932;var state_73982__$1 = (function (){var statearr_74000 = state_73982;(statearr_74000[8] = inst_73921__$1);
(statearr_74000[9] = inst_73924__$1);
(statearr_74000[10] = inst_73922__$1);
(statearr_74000[11] = inst_73923__$1);
(statearr_74000[14] = inst_73931);
return statearr_74000;
})();var statearr_74001_74041 = state_73982__$1;(statearr_74001_74041[2] = null);
(statearr_74001_74041[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 11))
{var inst_73921 = (state_73982[8]);var inst_73935 = (state_73982[15]);var inst_73935__$1 = cljs.core.seq.call(null,inst_73921);var state_73982__$1 = (function (){var statearr_74002 = state_73982;(statearr_74002[15] = inst_73935__$1);
return statearr_74002;
})();if(inst_73935__$1)
{var statearr_74003_74042 = state_73982__$1;(statearr_74003_74042[1] = 13);
} else
{var statearr_74004_74043 = state_73982__$1;(statearr_74004_74043[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 12))
{var inst_73955 = (state_73982[2]);var state_73982__$1 = state_73982;var statearr_74005_74044 = state_73982__$1;(statearr_74005_74044[2] = inst_73955);
(statearr_74005_74044[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 13))
{var inst_73935 = (state_73982[15]);var inst_73937 = cljs.core.chunked_seq_QMARK_.call(null,inst_73935);var state_73982__$1 = state_73982;if(inst_73937)
{var statearr_74006_74045 = state_73982__$1;(statearr_74006_74045[1] = 16);
} else
{var statearr_74007_74046 = state_73982__$1;(statearr_74007_74046[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 14))
{var state_73982__$1 = state_73982;var statearr_74008_74047 = state_73982__$1;(statearr_74008_74047[2] = null);
(statearr_74008_74047[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 15))
{var inst_73953 = (state_73982[2]);var state_73982__$1 = state_73982;var statearr_74009_74048 = state_73982__$1;(statearr_74009_74048[2] = inst_73953);
(statearr_74009_74048[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 16))
{var inst_73935 = (state_73982[15]);var inst_73939 = cljs.core.chunk_first.call(null,inst_73935);var inst_73940 = cljs.core.chunk_rest.call(null,inst_73935);var inst_73941 = cljs.core.count.call(null,inst_73939);var inst_73921 = inst_73940;var inst_73922 = inst_73939;var inst_73923 = inst_73941;var inst_73924 = 0;var state_73982__$1 = (function (){var statearr_74010 = state_73982;(statearr_74010[8] = inst_73921);
(statearr_74010[9] = inst_73924);
(statearr_74010[10] = inst_73922);
(statearr_74010[11] = inst_73923);
return statearr_74010;
})();var statearr_74011_74049 = state_73982__$1;(statearr_74011_74049[2] = null);
(statearr_74011_74049[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 17))
{var inst_73935 = (state_73982[15]);var inst_73944 = cljs.core.first.call(null,inst_73935);var inst_73945 = cljs.core.async.muxch_STAR_.call(null,inst_73944);var inst_73946 = cljs.core.async.close_BANG_.call(null,inst_73945);var inst_73947 = cljs.core.next.call(null,inst_73935);var inst_73921 = inst_73947;var inst_73922 = null;var inst_73923 = 0;var inst_73924 = 0;var state_73982__$1 = (function (){var statearr_74012 = state_73982;(statearr_74012[8] = inst_73921);
(statearr_74012[9] = inst_73924);
(statearr_74012[10] = inst_73922);
(statearr_74012[11] = inst_73923);
(statearr_74012[16] = inst_73946);
return statearr_74012;
})();var statearr_74013_74050 = state_73982__$1;(statearr_74013_74050[2] = null);
(statearr_74013_74050[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 18))
{var inst_73950 = (state_73982[2]);var state_73982__$1 = state_73982;var statearr_74014_74051 = state_73982__$1;(statearr_74014_74051[2] = inst_73950);
(statearr_74014_74051[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 19))
{var state_73982__$1 = state_73982;var statearr_74015_74052 = state_73982__$1;(statearr_74015_74052[2] = null);
(statearr_74015_74052[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 20))
{var state_73982__$1 = state_73982;var statearr_74016_74053 = state_73982__$1;(statearr_74016_74053[2] = null);
(statearr_74016_74053[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 21))
{var inst_73975 = (state_73982[2]);var state_73982__$1 = (function (){var statearr_74017 = state_73982;(statearr_74017[17] = inst_73975);
return statearr_74017;
})();var statearr_74018_74054 = state_73982__$1;(statearr_74018_74054[2] = null);
(statearr_74018_74054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 22))
{var inst_73972 = (state_73982[2]);var state_73982__$1 = state_73982;var statearr_74019_74055 = state_73982__$1;(statearr_74019_74055[2] = inst_73972);
(statearr_74019_74055[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 23))
{var inst_73959 = (state_73982[12]);var inst_73963 = (state_73982[2]);var inst_73964 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_73959);var state_73982__$1 = (function (){var statearr_74020 = state_73982;(statearr_74020[18] = inst_73963);
return statearr_74020;
})();var statearr_74021_74056 = state_73982__$1;(statearr_74021_74056[2] = inst_73964);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73982__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_73983 === 24))
{var inst_73911 = (state_73982[7]);var inst_73961 = (state_73982[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_73982,23,Object,null,22);var inst_73968 = cljs.core.async.muxch_STAR_.call(null,inst_73961);var state_73982__$1 = state_73982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73982__$1,25,inst_73968,inst_73911);
} else
{if((state_val_73983 === 25))
{var inst_73970 = (state_73982[2]);var state_73982__$1 = state_73982;var statearr_74022_74057 = state_73982__$1;(statearr_74022_74057[2] = inst_73970);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73982__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_74026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_74026[0] = state_machine__6969__auto__);
(statearr_74026[1] = 1);
return statearr_74026;
});
var state_machine__6969__auto____1 = (function (state_73982){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_73982);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e74027){if((e74027 instanceof Object))
{var ex__6972__auto__ = e74027;var statearr_74028_74058 = state_73982;(statearr_74028_74058[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73982);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e74027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__74059 = state_73982;
state_73982 = G__74059;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_73982){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_73982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_74029 = f__7039__auto__.call(null);(statearr_74029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___74030);
return statearr_74029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7038__auto___74196 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_74166){var state_val_74167 = (state_74166[1]);if((state_val_74167 === 1))
{var state_74166__$1 = state_74166;var statearr_74168_74197 = state_74166__$1;(statearr_74168_74197[2] = null);
(statearr_74168_74197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 2))
{var inst_74129 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_74130 = 0;var state_74166__$1 = (function (){var statearr_74169 = state_74166;(statearr_74169[7] = inst_74130);
(statearr_74169[8] = inst_74129);
return statearr_74169;
})();var statearr_74170_74198 = state_74166__$1;(statearr_74170_74198[2] = null);
(statearr_74170_74198[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 3))
{var inst_74164 = (state_74166[2]);var state_74166__$1 = state_74166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74166__$1,inst_74164);
} else
{if((state_val_74167 === 4))
{var inst_74130 = (state_74166[7]);var inst_74132 = (inst_74130 < cnt);var state_74166__$1 = state_74166;if(cljs.core.truth_(inst_74132))
{var statearr_74171_74199 = state_74166__$1;(statearr_74171_74199[1] = 6);
} else
{var statearr_74172_74200 = state_74166__$1;(statearr_74172_74200[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 5))
{var inst_74150 = (state_74166[2]);var state_74166__$1 = (function (){var statearr_74173 = state_74166;(statearr_74173[9] = inst_74150);
return statearr_74173;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74166__$1,12,dchan);
} else
{if((state_val_74167 === 6))
{var state_74166__$1 = state_74166;var statearr_74174_74201 = state_74166__$1;(statearr_74174_74201[2] = null);
(statearr_74174_74201[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 7))
{var state_74166__$1 = state_74166;var statearr_74175_74202 = state_74166__$1;(statearr_74175_74202[2] = null);
(statearr_74175_74202[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 8))
{var inst_74148 = (state_74166[2]);var state_74166__$1 = state_74166;var statearr_74176_74203 = state_74166__$1;(statearr_74176_74203[2] = inst_74148);
(statearr_74176_74203[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 9))
{var inst_74130 = (state_74166[7]);var inst_74143 = (state_74166[2]);var inst_74144 = (inst_74130 + 1);var inst_74130__$1 = inst_74144;var state_74166__$1 = (function (){var statearr_74177 = state_74166;(statearr_74177[7] = inst_74130__$1);
(statearr_74177[10] = inst_74143);
return statearr_74177;
})();var statearr_74178_74204 = state_74166__$1;(statearr_74178_74204[2] = null);
(statearr_74178_74204[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 10))
{var inst_74134 = (state_74166[2]);var inst_74135 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_74166__$1 = (function (){var statearr_74179 = state_74166;(statearr_74179[11] = inst_74134);
return statearr_74179;
})();var statearr_74180_74205 = state_74166__$1;(statearr_74180_74205[2] = inst_74135);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74166__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 11))
{var inst_74130 = (state_74166[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_74166,10,Object,null,9);var inst_74139 = chs__$1.call(null,inst_74130);var inst_74140 = done.call(null,inst_74130);var inst_74141 = cljs.core.async.take_BANG_.call(null,inst_74139,inst_74140);var state_74166__$1 = state_74166;var statearr_74181_74206 = state_74166__$1;(statearr_74181_74206[2] = inst_74141);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74166__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 12))
{var inst_74152 = (state_74166[12]);var inst_74152__$1 = (state_74166[2]);var inst_74153 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_74152__$1);var state_74166__$1 = (function (){var statearr_74182 = state_74166;(statearr_74182[12] = inst_74152__$1);
return statearr_74182;
})();if(cljs.core.truth_(inst_74153))
{var statearr_74183_74207 = state_74166__$1;(statearr_74183_74207[1] = 13);
} else
{var statearr_74184_74208 = state_74166__$1;(statearr_74184_74208[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 13))
{var inst_74155 = cljs.core.async.close_BANG_.call(null,out);var state_74166__$1 = state_74166;var statearr_74185_74209 = state_74166__$1;(statearr_74185_74209[2] = inst_74155);
(statearr_74185_74209[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 14))
{var inst_74152 = (state_74166[12]);var inst_74157 = cljs.core.apply.call(null,f,inst_74152);var state_74166__$1 = state_74166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74166__$1,16,out,inst_74157);
} else
{if((state_val_74167 === 15))
{var inst_74162 = (state_74166[2]);var state_74166__$1 = state_74166;var statearr_74186_74210 = state_74166__$1;(statearr_74186_74210[2] = inst_74162);
(statearr_74186_74210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74167 === 16))
{var inst_74159 = (state_74166[2]);var state_74166__$1 = (function (){var statearr_74187 = state_74166;(statearr_74187[13] = inst_74159);
return statearr_74187;
})();var statearr_74188_74211 = state_74166__$1;(statearr_74188_74211[2] = null);
(statearr_74188_74211[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_74192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_74192[0] = state_machine__6969__auto__);
(statearr_74192[1] = 1);
return statearr_74192;
});
var state_machine__6969__auto____1 = (function (state_74166){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_74166);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e74193){if((e74193 instanceof Object))
{var ex__6972__auto__ = e74193;var statearr_74194_74212 = state_74166;(statearr_74194_74212[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e74193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__74213 = state_74166;
state_74166 = G__74213;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_74166){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_74166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_74195 = f__7039__auto__.call(null);(statearr_74195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___74196);
return statearr_74195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7038__auto___74321 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_74297){var state_val_74298 = (state_74297[1]);if((state_val_74298 === 1))
{var inst_74268 = cljs.core.vec.call(null,chs);var inst_74269 = inst_74268;var state_74297__$1 = (function (){var statearr_74299 = state_74297;(statearr_74299[7] = inst_74269);
return statearr_74299;
})();var statearr_74300_74322 = state_74297__$1;(statearr_74300_74322[2] = null);
(statearr_74300_74322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74298 === 2))
{var inst_74269 = (state_74297[7]);var inst_74271 = cljs.core.count.call(null,inst_74269);var inst_74272 = (inst_74271 > 0);var state_74297__$1 = state_74297;if(cljs.core.truth_(inst_74272))
{var statearr_74301_74323 = state_74297__$1;(statearr_74301_74323[1] = 4);
} else
{var statearr_74302_74324 = state_74297__$1;(statearr_74302_74324[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74298 === 3))
{var inst_74295 = (state_74297[2]);var state_74297__$1 = state_74297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74297__$1,inst_74295);
} else
{if((state_val_74298 === 4))
{var inst_74269 = (state_74297[7]);var state_74297__$1 = state_74297;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_74297__$1,7,inst_74269);
} else
{if((state_val_74298 === 5))
{var inst_74291 = cljs.core.async.close_BANG_.call(null,out);var state_74297__$1 = state_74297;var statearr_74303_74325 = state_74297__$1;(statearr_74303_74325[2] = inst_74291);
(statearr_74303_74325[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74298 === 6))
{var inst_74293 = (state_74297[2]);var state_74297__$1 = state_74297;var statearr_74304_74326 = state_74297__$1;(statearr_74304_74326[2] = inst_74293);
(statearr_74304_74326[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74298 === 7))
{var inst_74277 = (state_74297[8]);var inst_74276 = (state_74297[9]);var inst_74276__$1 = (state_74297[2]);var inst_74277__$1 = cljs.core.nth.call(null,inst_74276__$1,0,null);var inst_74278 = cljs.core.nth.call(null,inst_74276__$1,1,null);var inst_74279 = (inst_74277__$1 == null);var state_74297__$1 = (function (){var statearr_74305 = state_74297;(statearr_74305[8] = inst_74277__$1);
(statearr_74305[10] = inst_74278);
(statearr_74305[9] = inst_74276__$1);
return statearr_74305;
})();if(cljs.core.truth_(inst_74279))
{var statearr_74306_74327 = state_74297__$1;(statearr_74306_74327[1] = 8);
} else
{var statearr_74307_74328 = state_74297__$1;(statearr_74307_74328[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74298 === 8))
{var inst_74277 = (state_74297[8]);var inst_74278 = (state_74297[10]);var inst_74276 = (state_74297[9]);var inst_74269 = (state_74297[7]);var inst_74281 = (function (){var c = inst_74278;var v = inst_74277;var vec__74274 = inst_74276;var cs = inst_74269;return ((function (c,v,vec__74274,cs,inst_74277,inst_74278,inst_74276,inst_74269,state_val_74298){
return (function (p1__74214_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__74214_SHARP_);
});
;})(c,v,vec__74274,cs,inst_74277,inst_74278,inst_74276,inst_74269,state_val_74298))
})();var inst_74282 = cljs.core.filterv.call(null,inst_74281,inst_74269);var inst_74269__$1 = inst_74282;var state_74297__$1 = (function (){var statearr_74308 = state_74297;(statearr_74308[7] = inst_74269__$1);
return statearr_74308;
})();var statearr_74309_74329 = state_74297__$1;(statearr_74309_74329[2] = null);
(statearr_74309_74329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74298 === 9))
{var inst_74277 = (state_74297[8]);var state_74297__$1 = state_74297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74297__$1,11,out,inst_74277);
} else
{if((state_val_74298 === 10))
{var inst_74289 = (state_74297[2]);var state_74297__$1 = state_74297;var statearr_74311_74330 = state_74297__$1;(statearr_74311_74330[2] = inst_74289);
(statearr_74311_74330[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74298 === 11))
{var inst_74269 = (state_74297[7]);var inst_74286 = (state_74297[2]);var tmp74310 = inst_74269;var inst_74269__$1 = tmp74310;var state_74297__$1 = (function (){var statearr_74312 = state_74297;(statearr_74312[11] = inst_74286);
(statearr_74312[7] = inst_74269__$1);
return statearr_74312;
})();var statearr_74313_74331 = state_74297__$1;(statearr_74313_74331[2] = null);
(statearr_74313_74331[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_74317 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_74317[0] = state_machine__6969__auto__);
(statearr_74317[1] = 1);
return statearr_74317;
});
var state_machine__6969__auto____1 = (function (state_74297){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_74297);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e74318){if((e74318 instanceof Object))
{var ex__6972__auto__ = e74318;var statearr_74319_74332 = state_74297;(statearr_74319_74332[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74297);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e74318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__74333 = state_74297;
state_74297 = G__74333;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_74297){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_74297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_74320 = f__7039__auto__.call(null);(statearr_74320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___74321);
return statearr_74320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7038__auto___74426 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_74403){var state_val_74404 = (state_74403[1]);if((state_val_74404 === 1))
{var inst_74380 = 0;var state_74403__$1 = (function (){var statearr_74405 = state_74403;(statearr_74405[7] = inst_74380);
return statearr_74405;
})();var statearr_74406_74427 = state_74403__$1;(statearr_74406_74427[2] = null);
(statearr_74406_74427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74404 === 2))
{var inst_74380 = (state_74403[7]);var inst_74382 = (inst_74380 < n);var state_74403__$1 = state_74403;if(cljs.core.truth_(inst_74382))
{var statearr_74407_74428 = state_74403__$1;(statearr_74407_74428[1] = 4);
} else
{var statearr_74408_74429 = state_74403__$1;(statearr_74408_74429[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74404 === 3))
{var inst_74400 = (state_74403[2]);var inst_74401 = cljs.core.async.close_BANG_.call(null,out);var state_74403__$1 = (function (){var statearr_74409 = state_74403;(statearr_74409[8] = inst_74400);
return statearr_74409;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74403__$1,inst_74401);
} else
{if((state_val_74404 === 4))
{var state_74403__$1 = state_74403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74403__$1,7,ch);
} else
{if((state_val_74404 === 5))
{var state_74403__$1 = state_74403;var statearr_74410_74430 = state_74403__$1;(statearr_74410_74430[2] = null);
(statearr_74410_74430[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74404 === 6))
{var inst_74398 = (state_74403[2]);var state_74403__$1 = state_74403;var statearr_74411_74431 = state_74403__$1;(statearr_74411_74431[2] = inst_74398);
(statearr_74411_74431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74404 === 7))
{var inst_74385 = (state_74403[9]);var inst_74385__$1 = (state_74403[2]);var inst_74386 = (inst_74385__$1 == null);var inst_74387 = cljs.core.not.call(null,inst_74386);var state_74403__$1 = (function (){var statearr_74412 = state_74403;(statearr_74412[9] = inst_74385__$1);
return statearr_74412;
})();if(inst_74387)
{var statearr_74413_74432 = state_74403__$1;(statearr_74413_74432[1] = 8);
} else
{var statearr_74414_74433 = state_74403__$1;(statearr_74414_74433[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74404 === 8))
{var inst_74385 = (state_74403[9]);var state_74403__$1 = state_74403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74403__$1,11,out,inst_74385);
} else
{if((state_val_74404 === 9))
{var state_74403__$1 = state_74403;var statearr_74415_74434 = state_74403__$1;(statearr_74415_74434[2] = null);
(statearr_74415_74434[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74404 === 10))
{var inst_74395 = (state_74403[2]);var state_74403__$1 = state_74403;var statearr_74416_74435 = state_74403__$1;(statearr_74416_74435[2] = inst_74395);
(statearr_74416_74435[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74404 === 11))
{var inst_74380 = (state_74403[7]);var inst_74390 = (state_74403[2]);var inst_74391 = (inst_74380 + 1);var inst_74380__$1 = inst_74391;var state_74403__$1 = (function (){var statearr_74417 = state_74403;(statearr_74417[7] = inst_74380__$1);
(statearr_74417[10] = inst_74390);
return statearr_74417;
})();var statearr_74418_74436 = state_74403__$1;(statearr_74418_74436[2] = null);
(statearr_74418_74436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_74422 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_74422[0] = state_machine__6969__auto__);
(statearr_74422[1] = 1);
return statearr_74422;
});
var state_machine__6969__auto____1 = (function (state_74403){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_74403);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e74423){if((e74423 instanceof Object))
{var ex__6972__auto__ = e74423;var statearr_74424_74437 = state_74403;(statearr_74424_74437[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e74423;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__74438 = state_74403;
state_74403 = G__74438;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_74403){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_74403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_74425 = f__7039__auto__.call(null);(statearr_74425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___74426);
return statearr_74425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7038__auto___74535 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_74510){var state_val_74511 = (state_74510[1]);if((state_val_74511 === 1))
{var inst_74487 = null;var state_74510__$1 = (function (){var statearr_74512 = state_74510;(statearr_74512[7] = inst_74487);
return statearr_74512;
})();var statearr_74513_74536 = state_74510__$1;(statearr_74513_74536[2] = null);
(statearr_74513_74536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74511 === 2))
{var state_74510__$1 = state_74510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74510__$1,4,ch);
} else
{if((state_val_74511 === 3))
{var inst_74507 = (state_74510[2]);var inst_74508 = cljs.core.async.close_BANG_.call(null,out);var state_74510__$1 = (function (){var statearr_74514 = state_74510;(statearr_74514[8] = inst_74507);
return statearr_74514;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74510__$1,inst_74508);
} else
{if((state_val_74511 === 4))
{var inst_74490 = (state_74510[9]);var inst_74490__$1 = (state_74510[2]);var inst_74491 = (inst_74490__$1 == null);var inst_74492 = cljs.core.not.call(null,inst_74491);var state_74510__$1 = (function (){var statearr_74515 = state_74510;(statearr_74515[9] = inst_74490__$1);
return statearr_74515;
})();if(inst_74492)
{var statearr_74516_74537 = state_74510__$1;(statearr_74516_74537[1] = 5);
} else
{var statearr_74517_74538 = state_74510__$1;(statearr_74517_74538[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74511 === 5))
{var inst_74487 = (state_74510[7]);var inst_74490 = (state_74510[9]);var inst_74494 = cljs.core._EQ_.call(null,inst_74490,inst_74487);var state_74510__$1 = state_74510;if(inst_74494)
{var statearr_74518_74539 = state_74510__$1;(statearr_74518_74539[1] = 8);
} else
{var statearr_74519_74540 = state_74510__$1;(statearr_74519_74540[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74511 === 6))
{var state_74510__$1 = state_74510;var statearr_74521_74541 = state_74510__$1;(statearr_74521_74541[2] = null);
(statearr_74521_74541[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74511 === 7))
{var inst_74505 = (state_74510[2]);var state_74510__$1 = state_74510;var statearr_74522_74542 = state_74510__$1;(statearr_74522_74542[2] = inst_74505);
(statearr_74522_74542[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74511 === 8))
{var inst_74487 = (state_74510[7]);var tmp74520 = inst_74487;var inst_74487__$1 = tmp74520;var state_74510__$1 = (function (){var statearr_74523 = state_74510;(statearr_74523[7] = inst_74487__$1);
return statearr_74523;
})();var statearr_74524_74543 = state_74510__$1;(statearr_74524_74543[2] = null);
(statearr_74524_74543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74511 === 9))
{var inst_74490 = (state_74510[9]);var state_74510__$1 = state_74510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74510__$1,11,out,inst_74490);
} else
{if((state_val_74511 === 10))
{var inst_74502 = (state_74510[2]);var state_74510__$1 = state_74510;var statearr_74525_74544 = state_74510__$1;(statearr_74525_74544[2] = inst_74502);
(statearr_74525_74544[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74511 === 11))
{var inst_74490 = (state_74510[9]);var inst_74499 = (state_74510[2]);var inst_74487 = inst_74490;var state_74510__$1 = (function (){var statearr_74526 = state_74510;(statearr_74526[7] = inst_74487);
(statearr_74526[10] = inst_74499);
return statearr_74526;
})();var statearr_74527_74545 = state_74510__$1;(statearr_74527_74545[2] = null);
(statearr_74527_74545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_74531 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_74531[0] = state_machine__6969__auto__);
(statearr_74531[1] = 1);
return statearr_74531;
});
var state_machine__6969__auto____1 = (function (state_74510){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_74510);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e74532){if((e74532 instanceof Object))
{var ex__6972__auto__ = e74532;var statearr_74533_74546 = state_74510;(statearr_74533_74546[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74510);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e74532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__74547 = state_74510;
state_74510 = G__74547;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_74510){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_74510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_74534 = f__7039__auto__.call(null);(statearr_74534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___74535);
return statearr_74534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7038__auto___74682 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_74652){var state_val_74653 = (state_74652[1]);if((state_val_74653 === 1))
{var inst_74615 = (new Array(n));var inst_74616 = inst_74615;var inst_74617 = 0;var state_74652__$1 = (function (){var statearr_74654 = state_74652;(statearr_74654[7] = inst_74617);
(statearr_74654[8] = inst_74616);
return statearr_74654;
})();var statearr_74655_74683 = state_74652__$1;(statearr_74655_74683[2] = null);
(statearr_74655_74683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74653 === 2))
{var state_74652__$1 = state_74652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74652__$1,4,ch);
} else
{if((state_val_74653 === 3))
{var inst_74650 = (state_74652[2]);var state_74652__$1 = state_74652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74652__$1,inst_74650);
} else
{if((state_val_74653 === 4))
{var inst_74620 = (state_74652[9]);var inst_74620__$1 = (state_74652[2]);var inst_74621 = (inst_74620__$1 == null);var inst_74622 = cljs.core.not.call(null,inst_74621);var state_74652__$1 = (function (){var statearr_74656 = state_74652;(statearr_74656[9] = inst_74620__$1);
return statearr_74656;
})();if(inst_74622)
{var statearr_74657_74684 = state_74652__$1;(statearr_74657_74684[1] = 5);
} else
{var statearr_74658_74685 = state_74652__$1;(statearr_74658_74685[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74653 === 5))
{var inst_74617 = (state_74652[7]);var inst_74616 = (state_74652[8]);var inst_74625 = (state_74652[10]);var inst_74620 = (state_74652[9]);var inst_74624 = (inst_74616[inst_74617] = inst_74620);var inst_74625__$1 = (inst_74617 + 1);var inst_74626 = (inst_74625__$1 < n);var state_74652__$1 = (function (){var statearr_74659 = state_74652;(statearr_74659[10] = inst_74625__$1);
(statearr_74659[11] = inst_74624);
return statearr_74659;
})();if(cljs.core.truth_(inst_74626))
{var statearr_74660_74686 = state_74652__$1;(statearr_74660_74686[1] = 8);
} else
{var statearr_74661_74687 = state_74652__$1;(statearr_74661_74687[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74653 === 6))
{var inst_74617 = (state_74652[7]);var inst_74638 = (inst_74617 > 0);var state_74652__$1 = state_74652;if(cljs.core.truth_(inst_74638))
{var statearr_74663_74688 = state_74652__$1;(statearr_74663_74688[1] = 12);
} else
{var statearr_74664_74689 = state_74652__$1;(statearr_74664_74689[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74653 === 7))
{var inst_74648 = (state_74652[2]);var state_74652__$1 = state_74652;var statearr_74665_74690 = state_74652__$1;(statearr_74665_74690[2] = inst_74648);
(statearr_74665_74690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74653 === 8))
{var inst_74616 = (state_74652[8]);var inst_74625 = (state_74652[10]);var tmp74662 = inst_74616;var inst_74616__$1 = tmp74662;var inst_74617 = inst_74625;var state_74652__$1 = (function (){var statearr_74666 = state_74652;(statearr_74666[7] = inst_74617);
(statearr_74666[8] = inst_74616__$1);
return statearr_74666;
})();var statearr_74667_74691 = state_74652__$1;(statearr_74667_74691[2] = null);
(statearr_74667_74691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74653 === 9))
{var inst_74616 = (state_74652[8]);var inst_74630 = cljs.core.vec.call(null,inst_74616);var state_74652__$1 = state_74652;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74652__$1,11,out,inst_74630);
} else
{if((state_val_74653 === 10))
{var inst_74636 = (state_74652[2]);var state_74652__$1 = state_74652;var statearr_74668_74692 = state_74652__$1;(statearr_74668_74692[2] = inst_74636);
(statearr_74668_74692[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74653 === 11))
{var inst_74632 = (state_74652[2]);var inst_74633 = (new Array(n));var inst_74616 = inst_74633;var inst_74617 = 0;var state_74652__$1 = (function (){var statearr_74669 = state_74652;(statearr_74669[7] = inst_74617);
(statearr_74669[8] = inst_74616);
(statearr_74669[12] = inst_74632);
return statearr_74669;
})();var statearr_74670_74693 = state_74652__$1;(statearr_74670_74693[2] = null);
(statearr_74670_74693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74653 === 12))
{var inst_74616 = (state_74652[8]);var inst_74640 = cljs.core.vec.call(null,inst_74616);var state_74652__$1 = state_74652;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74652__$1,15,out,inst_74640);
} else
{if((state_val_74653 === 13))
{var state_74652__$1 = state_74652;var statearr_74671_74694 = state_74652__$1;(statearr_74671_74694[2] = null);
(statearr_74671_74694[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74653 === 14))
{var inst_74645 = (state_74652[2]);var inst_74646 = cljs.core.async.close_BANG_.call(null,out);var state_74652__$1 = (function (){var statearr_74672 = state_74652;(statearr_74672[13] = inst_74645);
return statearr_74672;
})();var statearr_74673_74695 = state_74652__$1;(statearr_74673_74695[2] = inst_74646);
(statearr_74673_74695[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74653 === 15))
{var inst_74642 = (state_74652[2]);var state_74652__$1 = state_74652;var statearr_74674_74696 = state_74652__$1;(statearr_74674_74696[2] = inst_74642);
(statearr_74674_74696[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_74678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_74678[0] = state_machine__6969__auto__);
(statearr_74678[1] = 1);
return statearr_74678;
});
var state_machine__6969__auto____1 = (function (state_74652){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_74652);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e74679){if((e74679 instanceof Object))
{var ex__6972__auto__ = e74679;var statearr_74680_74697 = state_74652;(statearr_74680_74697[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e74679;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__74698 = state_74652;
state_74652 = G__74698;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_74652){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_74652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_74681 = f__7039__auto__.call(null);(statearr_74681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___74682);
return statearr_74681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7038__auto___74841 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7039__auto__ = (function (){var switch__6968__auto__ = (function (state_74811){var state_val_74812 = (state_74811[1]);if((state_val_74812 === 1))
{var inst_74770 = [];var inst_74771 = inst_74770;var inst_74772 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_74811__$1 = (function (){var statearr_74813 = state_74811;(statearr_74813[7] = inst_74771);
(statearr_74813[8] = inst_74772);
return statearr_74813;
})();var statearr_74814_74842 = state_74811__$1;(statearr_74814_74842[2] = null);
(statearr_74814_74842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74812 === 2))
{var state_74811__$1 = state_74811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74811__$1,4,ch);
} else
{if((state_val_74812 === 3))
{var inst_74809 = (state_74811[2]);var state_74811__$1 = state_74811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74811__$1,inst_74809);
} else
{if((state_val_74812 === 4))
{var inst_74775 = (state_74811[9]);var inst_74775__$1 = (state_74811[2]);var inst_74776 = (inst_74775__$1 == null);var inst_74777 = cljs.core.not.call(null,inst_74776);var state_74811__$1 = (function (){var statearr_74815 = state_74811;(statearr_74815[9] = inst_74775__$1);
return statearr_74815;
})();if(inst_74777)
{var statearr_74816_74843 = state_74811__$1;(statearr_74816_74843[1] = 5);
} else
{var statearr_74817_74844 = state_74811__$1;(statearr_74817_74844[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74812 === 5))
{var inst_74779 = (state_74811[10]);var inst_74772 = (state_74811[8]);var inst_74775 = (state_74811[9]);var inst_74779__$1 = f.call(null,inst_74775);var inst_74780 = cljs.core._EQ_.call(null,inst_74779__$1,inst_74772);var inst_74781 = cljs.core.keyword_identical_QMARK_.call(null,inst_74772,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_74782 = (inst_74780) || (inst_74781);var state_74811__$1 = (function (){var statearr_74818 = state_74811;(statearr_74818[10] = inst_74779__$1);
return statearr_74818;
})();if(cljs.core.truth_(inst_74782))
{var statearr_74819_74845 = state_74811__$1;(statearr_74819_74845[1] = 8);
} else
{var statearr_74820_74846 = state_74811__$1;(statearr_74820_74846[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74812 === 6))
{var inst_74771 = (state_74811[7]);var inst_74796 = inst_74771.length;var inst_74797 = (inst_74796 > 0);var state_74811__$1 = state_74811;if(cljs.core.truth_(inst_74797))
{var statearr_74822_74847 = state_74811__$1;(statearr_74822_74847[1] = 12);
} else
{var statearr_74823_74848 = state_74811__$1;(statearr_74823_74848[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74812 === 7))
{var inst_74807 = (state_74811[2]);var state_74811__$1 = state_74811;var statearr_74824_74849 = state_74811__$1;(statearr_74824_74849[2] = inst_74807);
(statearr_74824_74849[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74812 === 8))
{var inst_74779 = (state_74811[10]);var inst_74771 = (state_74811[7]);var inst_74775 = (state_74811[9]);var inst_74784 = inst_74771.push(inst_74775);var tmp74821 = inst_74771;var inst_74771__$1 = tmp74821;var inst_74772 = inst_74779;var state_74811__$1 = (function (){var statearr_74825 = state_74811;(statearr_74825[7] = inst_74771__$1);
(statearr_74825[11] = inst_74784);
(statearr_74825[8] = inst_74772);
return statearr_74825;
})();var statearr_74826_74850 = state_74811__$1;(statearr_74826_74850[2] = null);
(statearr_74826_74850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74812 === 9))
{var inst_74771 = (state_74811[7]);var inst_74787 = cljs.core.vec.call(null,inst_74771);var state_74811__$1 = state_74811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74811__$1,11,out,inst_74787);
} else
{if((state_val_74812 === 10))
{var inst_74794 = (state_74811[2]);var state_74811__$1 = state_74811;var statearr_74827_74851 = state_74811__$1;(statearr_74827_74851[2] = inst_74794);
(statearr_74827_74851[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74812 === 11))
{var inst_74779 = (state_74811[10]);var inst_74775 = (state_74811[9]);var inst_74789 = (state_74811[2]);var inst_74790 = [];var inst_74791 = inst_74790.push(inst_74775);var inst_74771 = inst_74790;var inst_74772 = inst_74779;var state_74811__$1 = (function (){var statearr_74828 = state_74811;(statearr_74828[7] = inst_74771);
(statearr_74828[12] = inst_74789);
(statearr_74828[13] = inst_74791);
(statearr_74828[8] = inst_74772);
return statearr_74828;
})();var statearr_74829_74852 = state_74811__$1;(statearr_74829_74852[2] = null);
(statearr_74829_74852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74812 === 12))
{var inst_74771 = (state_74811[7]);var inst_74799 = cljs.core.vec.call(null,inst_74771);var state_74811__$1 = state_74811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74811__$1,15,out,inst_74799);
} else
{if((state_val_74812 === 13))
{var state_74811__$1 = state_74811;var statearr_74830_74853 = state_74811__$1;(statearr_74830_74853[2] = null);
(statearr_74830_74853[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74812 === 14))
{var inst_74804 = (state_74811[2]);var inst_74805 = cljs.core.async.close_BANG_.call(null,out);var state_74811__$1 = (function (){var statearr_74831 = state_74811;(statearr_74831[14] = inst_74804);
return statearr_74831;
})();var statearr_74832_74854 = state_74811__$1;(statearr_74832_74854[2] = inst_74805);
(statearr_74832_74854[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_74812 === 15))
{var inst_74801 = (state_74811[2]);var state_74811__$1 = state_74811;var statearr_74833_74855 = state_74811__$1;(statearr_74833_74855[2] = inst_74801);
(statearr_74833_74855[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6968__auto__){
return (function() {
var state_machine__6969__auto__ = null;
var state_machine__6969__auto____0 = (function (){var statearr_74837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_74837[0] = state_machine__6969__auto__);
(statearr_74837[1] = 1);
return statearr_74837;
});
var state_machine__6969__auto____1 = (function (state_74811){while(true){
var ret_value__6970__auto__ = (function (){try{while(true){
var result__6971__auto__ = switch__6968__auto__.call(null,state_74811);if(cljs.core.keyword_identical_QMARK_.call(null,result__6971__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6971__auto__;
}
break;
}
}catch (e74838){if((e74838 instanceof Object))
{var ex__6972__auto__ = e74838;var statearr_74839_74856 = state_74811;(statearr_74839_74856[5] = ex__6972__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74811);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e74838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6970__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__74857 = state_74811;
state_74811 = G__74857;
continue;
}
} else
{return ret_value__6970__auto__;
}
break;
}
});
state_machine__6969__auto__ = function(state_74811){
switch(arguments.length){
case 0:
return state_machine__6969__auto____0.call(this);
case 1:
return state_machine__6969__auto____1.call(this,state_74811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6969__auto____0;
state_machine__6969__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6969__auto____1;
return state_machine__6969__auto__;
})()
;})(switch__6968__auto__))
})();var state__7040__auto__ = (function (){var statearr_74840 = f__7039__auto__.call(null);(statearr_74840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7038__auto___74841);
return statearr_74840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7040__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map