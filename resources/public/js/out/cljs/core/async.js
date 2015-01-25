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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t58178 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58178 = (function (f,fn_handler,meta58179){
this.f = f;
this.fn_handler = fn_handler;
this.meta58179 = meta58179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58178.cljs$lang$type = true;
cljs.core.async.t58178.cljs$lang$ctorStr = "cljs.core.async/t58178";
cljs.core.async.t58178.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t58178");
});
cljs.core.async.t58178.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t58178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t58178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t58178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58180){var self__ = this;
var _58180__$1 = this;return self__.meta58179;
});
cljs.core.async.t58178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58180,meta58179__$1){var self__ = this;
var _58180__$1 = this;return (new cljs.core.async.t58178(self__.f,self__.fn_handler,meta58179__$1));
});
cljs.core.async.__GT_t58178 = (function __GT_t58178(f__$1,fn_handler__$1,meta58179){return (new cljs.core.async.t58178(f__$1,fn_handler__$1,meta58179));
});
}
return (new cljs.core.async.t58178(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__58182 = buff;if(G__58182)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__58182.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__58182.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__58182);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__58182);
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
{var val_58183 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_58183);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_58183);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___58184 = n;var x_58185 = 0;while(true){
if((x_58185 < n__4291__auto___58184))
{(a[x_58185] = 0);
{
var G__58186 = (x_58185 + 1);
x_58185 = G__58186;
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
var G__58187 = (i + 1);
i = G__58187;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t58191 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58191 = (function (flag,alt_flag,meta58192){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta58192 = meta58192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58191.cljs$lang$type = true;
cljs.core.async.t58191.cljs$lang$ctorStr = "cljs.core.async/t58191";
cljs.core.async.t58191.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t58191");
});
cljs.core.async.t58191.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t58191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t58191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t58191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58193){var self__ = this;
var _58193__$1 = this;return self__.meta58192;
});
cljs.core.async.t58191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58193,meta58192__$1){var self__ = this;
var _58193__$1 = this;return (new cljs.core.async.t58191(self__.flag,self__.alt_flag,meta58192__$1));
});
cljs.core.async.__GT_t58191 = (function __GT_t58191(flag__$1,alt_flag__$1,meta58192){return (new cljs.core.async.t58191(flag__$1,alt_flag__$1,meta58192));
});
}
return (new cljs.core.async.t58191(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t58197 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58197 = (function (cb,flag,alt_handler,meta58198){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta58198 = meta58198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58197.cljs$lang$type = true;
cljs.core.async.t58197.cljs$lang$ctorStr = "cljs.core.async/t58197";
cljs.core.async.t58197.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t58197");
});
cljs.core.async.t58197.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t58197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t58197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t58197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58199){var self__ = this;
var _58199__$1 = this;return self__.meta58198;
});
cljs.core.async.t58197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58199,meta58198__$1){var self__ = this;
var _58199__$1 = this;return (new cljs.core.async.t58197(self__.cb,self__.flag,self__.alt_handler,meta58198__$1));
});
cljs.core.async.__GT_t58197 = (function __GT_t58197(cb__$1,flag__$1,alt_handler__$1,meta58198){return (new cljs.core.async.t58197(cb__$1,flag__$1,alt_handler__$1,meta58198));
});
}
return (new cljs.core.async.t58197(cb,flag,alt_handler,null));
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
return (function (p1__58200_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58200_SHARP_,port], null));
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
var G__58201 = (i + 1);
i = G__58201;
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
var alts_BANG___delegate = function (ports,p__58202){var map__58204 = p__58202;var map__58204__$1 = ((cljs.core.seq_QMARK_.call(null,map__58204))?cljs.core.apply.call(null,cljs.core.hash_map,map__58204):map__58204);var opts = map__58204__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__58202 = null;if (arguments.length > 1) {
  p__58202 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__58202);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__58205){
var ports = cljs.core.first(arglist__58205);
var p__58202 = cljs.core.rest(arglist__58205);
return alts_BANG___delegate(ports,p__58202);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t58213 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58213 = (function (ch,f,map_LT_,meta58214){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta58214 = meta58214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58213.cljs$lang$type = true;
cljs.core.async.t58213.cljs$lang$ctorStr = "cljs.core.async/t58213";
cljs.core.async.t58213.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t58213");
});
cljs.core.async.t58213.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t58213.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t58213.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t58213.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t58216 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58216 = (function (fn1,_,meta58214,ch,f,map_LT_,meta58217){
this.fn1 = fn1;
this._ = _;
this.meta58214 = meta58214;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta58217 = meta58217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58216.cljs$lang$type = true;
cljs.core.async.t58216.cljs$lang$ctorStr = "cljs.core.async/t58216";
cljs.core.async.t58216.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t58216");
});
cljs.core.async.t58216.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t58216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t58216.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t58216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__58206_SHARP_){return f1.call(null,(((p1__58206_SHARP_ == null))?null:self__.f.call(null,p1__58206_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t58216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58218){var self__ = this;
var _58218__$1 = this;return self__.meta58217;
});
cljs.core.async.t58216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58218,meta58217__$1){var self__ = this;
var _58218__$1 = this;return (new cljs.core.async.t58216(self__.fn1,self__._,self__.meta58214,self__.ch,self__.f,self__.map_LT_,meta58217__$1));
});
cljs.core.async.__GT_t58216 = (function __GT_t58216(fn1__$1,___$2,meta58214__$1,ch__$2,f__$2,map_LT___$2,meta58217){return (new cljs.core.async.t58216(fn1__$1,___$2,meta58214__$1,ch__$2,f__$2,map_LT___$2,meta58217));
});
}
return (new cljs.core.async.t58216(fn1,___$1,self__.meta58214,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t58213.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t58213.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t58213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58215){var self__ = this;
var _58215__$1 = this;return self__.meta58214;
});
cljs.core.async.t58213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58215,meta58214__$1){var self__ = this;
var _58215__$1 = this;return (new cljs.core.async.t58213(self__.ch,self__.f,self__.map_LT_,meta58214__$1));
});
cljs.core.async.__GT_t58213 = (function __GT_t58213(ch__$1,f__$1,map_LT___$1,meta58214){return (new cljs.core.async.t58213(ch__$1,f__$1,map_LT___$1,meta58214));
});
}
return (new cljs.core.async.t58213(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t58222 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58222 = (function (ch,f,map_GT_,meta58223){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta58223 = meta58223;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58222.cljs$lang$type = true;
cljs.core.async.t58222.cljs$lang$ctorStr = "cljs.core.async/t58222";
cljs.core.async.t58222.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t58222");
});
cljs.core.async.t58222.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t58222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t58222.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t58222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t58222.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t58222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t58222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58224){var self__ = this;
var _58224__$1 = this;return self__.meta58223;
});
cljs.core.async.t58222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58224,meta58223__$1){var self__ = this;
var _58224__$1 = this;return (new cljs.core.async.t58222(self__.ch,self__.f,self__.map_GT_,meta58223__$1));
});
cljs.core.async.__GT_t58222 = (function __GT_t58222(ch__$1,f__$1,map_GT___$1,meta58223){return (new cljs.core.async.t58222(ch__$1,f__$1,map_GT___$1,meta58223));
});
}
return (new cljs.core.async.t58222(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t58228 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58228 = (function (ch,p,filter_GT_,meta58229){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta58229 = meta58229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58228.cljs$lang$type = true;
cljs.core.async.t58228.cljs$lang$ctorStr = "cljs.core.async/t58228";
cljs.core.async.t58228.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t58228");
});
cljs.core.async.t58228.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t58228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t58228.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t58228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t58228.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t58228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t58228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58230){var self__ = this;
var _58230__$1 = this;return self__.meta58229;
});
cljs.core.async.t58228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58230,meta58229__$1){var self__ = this;
var _58230__$1 = this;return (new cljs.core.async.t58228(self__.ch,self__.p,self__.filter_GT_,meta58229__$1));
});
cljs.core.async.__GT_t58228 = (function __GT_t58228(ch__$1,p__$1,filter_GT___$1,meta58229){return (new cljs.core.async.t58228(ch__$1,p__$1,filter_GT___$1,meta58229));
});
}
return (new cljs.core.async.t58228(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6216__auto___58313 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_58292){var state_val_58293 = (state_58292[1]);if((state_val_58293 === 1))
{var state_58292__$1 = state_58292;var statearr_58294_58314 = state_58292__$1;(statearr_58294_58314[2] = null);
(statearr_58294_58314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58293 === 2))
{var state_58292__$1 = state_58292;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58292__$1,4,ch);
} else
{if((state_val_58293 === 3))
{var inst_58290 = (state_58292[2]);var state_58292__$1 = state_58292;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58292__$1,inst_58290);
} else
{if((state_val_58293 === 4))
{var inst_58274 = (state_58292[7]);var inst_58274__$1 = (state_58292[2]);var inst_58275 = (inst_58274__$1 == null);var state_58292__$1 = (function (){var statearr_58295 = state_58292;(statearr_58295[7] = inst_58274__$1);
return statearr_58295;
})();if(cljs.core.truth_(inst_58275))
{var statearr_58296_58315 = state_58292__$1;(statearr_58296_58315[1] = 5);
} else
{var statearr_58297_58316 = state_58292__$1;(statearr_58297_58316[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58293 === 5))
{var inst_58277 = cljs.core.async.close_BANG_.call(null,out);var state_58292__$1 = state_58292;var statearr_58298_58317 = state_58292__$1;(statearr_58298_58317[2] = inst_58277);
(statearr_58298_58317[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58293 === 6))
{var inst_58274 = (state_58292[7]);var inst_58279 = p.call(null,inst_58274);var state_58292__$1 = state_58292;if(cljs.core.truth_(inst_58279))
{var statearr_58299_58318 = state_58292__$1;(statearr_58299_58318[1] = 8);
} else
{var statearr_58300_58319 = state_58292__$1;(statearr_58300_58319[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58293 === 7))
{var inst_58288 = (state_58292[2]);var state_58292__$1 = state_58292;var statearr_58301_58320 = state_58292__$1;(statearr_58301_58320[2] = inst_58288);
(statearr_58301_58320[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58293 === 8))
{var inst_58274 = (state_58292[7]);var state_58292__$1 = state_58292;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58292__$1,11,out,inst_58274);
} else
{if((state_val_58293 === 9))
{var state_58292__$1 = state_58292;var statearr_58302_58321 = state_58292__$1;(statearr_58302_58321[2] = null);
(statearr_58302_58321[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58293 === 10))
{var inst_58285 = (state_58292[2]);var state_58292__$1 = (function (){var statearr_58303 = state_58292;(statearr_58303[8] = inst_58285);
return statearr_58303;
})();var statearr_58304_58322 = state_58292__$1;(statearr_58304_58322[2] = null);
(statearr_58304_58322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58293 === 11))
{var inst_58282 = (state_58292[2]);var state_58292__$1 = state_58292;var statearr_58305_58323 = state_58292__$1;(statearr_58305_58323[2] = inst_58282);
(statearr_58305_58323[1] = 10);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_58309 = [null,null,null,null,null,null,null,null,null];(statearr_58309[0] = state_machine__6202__auto__);
(statearr_58309[1] = 1);
return statearr_58309;
});
var state_machine__6202__auto____1 = (function (state_58292){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_58292);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e58310){if((e58310 instanceof Object))
{var ex__6205__auto__ = e58310;var statearr_58311_58324 = state_58292;(statearr_58311_58324[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58292);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58310;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58325 = state_58292;
state_58292 = G__58325;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_58292){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_58292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_58312 = f__6217__auto__.call(null);(statearr_58312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___58313);
return statearr_58312;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6216__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_58477){var state_val_58478 = (state_58477[1]);if((state_val_58478 === 1))
{var state_58477__$1 = state_58477;var statearr_58479_58516 = state_58477__$1;(statearr_58479_58516[2] = null);
(statearr_58479_58516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 2))
{var state_58477__$1 = state_58477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58477__$1,4,in$);
} else
{if((state_val_58478 === 3))
{var inst_58475 = (state_58477[2]);var state_58477__$1 = state_58477;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58477__$1,inst_58475);
} else
{if((state_val_58478 === 4))
{var inst_58423 = (state_58477[7]);var inst_58423__$1 = (state_58477[2]);var inst_58424 = (inst_58423__$1 == null);var state_58477__$1 = (function (){var statearr_58480 = state_58477;(statearr_58480[7] = inst_58423__$1);
return statearr_58480;
})();if(cljs.core.truth_(inst_58424))
{var statearr_58481_58517 = state_58477__$1;(statearr_58481_58517[1] = 5);
} else
{var statearr_58482_58518 = state_58477__$1;(statearr_58482_58518[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 5))
{var inst_58426 = cljs.core.async.close_BANG_.call(null,out);var state_58477__$1 = state_58477;var statearr_58483_58519 = state_58477__$1;(statearr_58483_58519[2] = inst_58426);
(statearr_58483_58519[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 6))
{var inst_58423 = (state_58477[7]);var inst_58428 = f.call(null,inst_58423);var inst_58433 = cljs.core.seq.call(null,inst_58428);var inst_58434 = inst_58433;var inst_58435 = null;var inst_58436 = 0;var inst_58437 = 0;var state_58477__$1 = (function (){var statearr_58484 = state_58477;(statearr_58484[8] = inst_58437);
(statearr_58484[9] = inst_58436);
(statearr_58484[10] = inst_58435);
(statearr_58484[11] = inst_58434);
return statearr_58484;
})();var statearr_58485_58520 = state_58477__$1;(statearr_58485_58520[2] = null);
(statearr_58485_58520[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 7))
{var inst_58473 = (state_58477[2]);var state_58477__$1 = state_58477;var statearr_58486_58521 = state_58477__$1;(statearr_58486_58521[2] = inst_58473);
(statearr_58486_58521[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 8))
{var inst_58437 = (state_58477[8]);var inst_58436 = (state_58477[9]);var inst_58439 = (inst_58437 < inst_58436);var inst_58440 = inst_58439;var state_58477__$1 = state_58477;if(cljs.core.truth_(inst_58440))
{var statearr_58487_58522 = state_58477__$1;(statearr_58487_58522[1] = 10);
} else
{var statearr_58488_58523 = state_58477__$1;(statearr_58488_58523[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 9))
{var inst_58470 = (state_58477[2]);var state_58477__$1 = (function (){var statearr_58489 = state_58477;(statearr_58489[12] = inst_58470);
return statearr_58489;
})();var statearr_58490_58524 = state_58477__$1;(statearr_58490_58524[2] = null);
(statearr_58490_58524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 10))
{var inst_58437 = (state_58477[8]);var inst_58435 = (state_58477[10]);var inst_58442 = cljs.core._nth.call(null,inst_58435,inst_58437);var state_58477__$1 = state_58477;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58477__$1,13,out,inst_58442);
} else
{if((state_val_58478 === 11))
{var inst_58448 = (state_58477[13]);var inst_58434 = (state_58477[11]);var inst_58448__$1 = cljs.core.seq.call(null,inst_58434);var state_58477__$1 = (function (){var statearr_58494 = state_58477;(statearr_58494[13] = inst_58448__$1);
return statearr_58494;
})();if(inst_58448__$1)
{var statearr_58495_58525 = state_58477__$1;(statearr_58495_58525[1] = 14);
} else
{var statearr_58496_58526 = state_58477__$1;(statearr_58496_58526[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 12))
{var inst_58468 = (state_58477[2]);var state_58477__$1 = state_58477;var statearr_58497_58527 = state_58477__$1;(statearr_58497_58527[2] = inst_58468);
(statearr_58497_58527[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 13))
{var inst_58437 = (state_58477[8]);var inst_58436 = (state_58477[9]);var inst_58435 = (state_58477[10]);var inst_58434 = (state_58477[11]);var inst_58444 = (state_58477[2]);var inst_58445 = (inst_58437 + 1);var tmp58491 = inst_58436;var tmp58492 = inst_58435;var tmp58493 = inst_58434;var inst_58434__$1 = tmp58493;var inst_58435__$1 = tmp58492;var inst_58436__$1 = tmp58491;var inst_58437__$1 = inst_58445;var state_58477__$1 = (function (){var statearr_58498 = state_58477;(statearr_58498[8] = inst_58437__$1);
(statearr_58498[14] = inst_58444);
(statearr_58498[9] = inst_58436__$1);
(statearr_58498[10] = inst_58435__$1);
(statearr_58498[11] = inst_58434__$1);
return statearr_58498;
})();var statearr_58499_58528 = state_58477__$1;(statearr_58499_58528[2] = null);
(statearr_58499_58528[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 14))
{var inst_58448 = (state_58477[13]);var inst_58450 = cljs.core.chunked_seq_QMARK_.call(null,inst_58448);var state_58477__$1 = state_58477;if(inst_58450)
{var statearr_58500_58529 = state_58477__$1;(statearr_58500_58529[1] = 17);
} else
{var statearr_58501_58530 = state_58477__$1;(statearr_58501_58530[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 15))
{var state_58477__$1 = state_58477;var statearr_58502_58531 = state_58477__$1;(statearr_58502_58531[2] = null);
(statearr_58502_58531[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 16))
{var inst_58466 = (state_58477[2]);var state_58477__$1 = state_58477;var statearr_58503_58532 = state_58477__$1;(statearr_58503_58532[2] = inst_58466);
(statearr_58503_58532[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 17))
{var inst_58448 = (state_58477[13]);var inst_58452 = cljs.core.chunk_first.call(null,inst_58448);var inst_58453 = cljs.core.chunk_rest.call(null,inst_58448);var inst_58454 = cljs.core.count.call(null,inst_58452);var inst_58434 = inst_58453;var inst_58435 = inst_58452;var inst_58436 = inst_58454;var inst_58437 = 0;var state_58477__$1 = (function (){var statearr_58504 = state_58477;(statearr_58504[8] = inst_58437);
(statearr_58504[9] = inst_58436);
(statearr_58504[10] = inst_58435);
(statearr_58504[11] = inst_58434);
return statearr_58504;
})();var statearr_58505_58533 = state_58477__$1;(statearr_58505_58533[2] = null);
(statearr_58505_58533[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 18))
{var inst_58448 = (state_58477[13]);var inst_58457 = cljs.core.first.call(null,inst_58448);var state_58477__$1 = state_58477;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58477__$1,20,out,inst_58457);
} else
{if((state_val_58478 === 19))
{var inst_58463 = (state_58477[2]);var state_58477__$1 = state_58477;var statearr_58506_58534 = state_58477__$1;(statearr_58506_58534[2] = inst_58463);
(statearr_58506_58534[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58478 === 20))
{var inst_58448 = (state_58477[13]);var inst_58459 = (state_58477[2]);var inst_58460 = cljs.core.next.call(null,inst_58448);var inst_58434 = inst_58460;var inst_58435 = null;var inst_58436 = 0;var inst_58437 = 0;var state_58477__$1 = (function (){var statearr_58507 = state_58477;(statearr_58507[8] = inst_58437);
(statearr_58507[9] = inst_58436);
(statearr_58507[10] = inst_58435);
(statearr_58507[11] = inst_58434);
(statearr_58507[15] = inst_58459);
return statearr_58507;
})();var statearr_58508_58535 = state_58477__$1;(statearr_58508_58535[2] = null);
(statearr_58508_58535[1] = 8);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_58512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_58512[0] = state_machine__6202__auto__);
(statearr_58512[1] = 1);
return statearr_58512;
});
var state_machine__6202__auto____1 = (function (state_58477){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_58477);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e58513){if((e58513 instanceof Object))
{var ex__6205__auto__ = e58513;var statearr_58514_58536 = state_58477;(statearr_58514_58536[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58477);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58537 = state_58477;
state_58477 = G__58537;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_58477){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_58477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_58515 = f__6217__auto__.call(null);(statearr_58515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_58515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
}));
return c__6216__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6216__auto___58618 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_58597){var state_val_58598 = (state_58597[1]);if((state_val_58598 === 1))
{var state_58597__$1 = state_58597;var statearr_58599_58619 = state_58597__$1;(statearr_58599_58619[2] = null);
(statearr_58599_58619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58598 === 2))
{var state_58597__$1 = state_58597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58597__$1,4,from);
} else
{if((state_val_58598 === 3))
{var inst_58595 = (state_58597[2]);var state_58597__$1 = state_58597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58597__$1,inst_58595);
} else
{if((state_val_58598 === 4))
{var inst_58580 = (state_58597[7]);var inst_58580__$1 = (state_58597[2]);var inst_58581 = (inst_58580__$1 == null);var state_58597__$1 = (function (){var statearr_58600 = state_58597;(statearr_58600[7] = inst_58580__$1);
return statearr_58600;
})();if(cljs.core.truth_(inst_58581))
{var statearr_58601_58620 = state_58597__$1;(statearr_58601_58620[1] = 5);
} else
{var statearr_58602_58621 = state_58597__$1;(statearr_58602_58621[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58598 === 5))
{var state_58597__$1 = state_58597;if(cljs.core.truth_(close_QMARK_))
{var statearr_58603_58622 = state_58597__$1;(statearr_58603_58622[1] = 8);
} else
{var statearr_58604_58623 = state_58597__$1;(statearr_58604_58623[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58598 === 6))
{var inst_58580 = (state_58597[7]);var state_58597__$1 = state_58597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58597__$1,11,to,inst_58580);
} else
{if((state_val_58598 === 7))
{var inst_58593 = (state_58597[2]);var state_58597__$1 = state_58597;var statearr_58605_58624 = state_58597__$1;(statearr_58605_58624[2] = inst_58593);
(statearr_58605_58624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58598 === 8))
{var inst_58584 = cljs.core.async.close_BANG_.call(null,to);var state_58597__$1 = state_58597;var statearr_58606_58625 = state_58597__$1;(statearr_58606_58625[2] = inst_58584);
(statearr_58606_58625[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58598 === 9))
{var state_58597__$1 = state_58597;var statearr_58607_58626 = state_58597__$1;(statearr_58607_58626[2] = null);
(statearr_58607_58626[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58598 === 10))
{var inst_58587 = (state_58597[2]);var state_58597__$1 = state_58597;var statearr_58608_58627 = state_58597__$1;(statearr_58608_58627[2] = inst_58587);
(statearr_58608_58627[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58598 === 11))
{var inst_58590 = (state_58597[2]);var state_58597__$1 = (function (){var statearr_58609 = state_58597;(statearr_58609[8] = inst_58590);
return statearr_58609;
})();var statearr_58610_58628 = state_58597__$1;(statearr_58610_58628[2] = null);
(statearr_58610_58628[1] = 2);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_58614 = [null,null,null,null,null,null,null,null,null];(statearr_58614[0] = state_machine__6202__auto__);
(statearr_58614[1] = 1);
return statearr_58614;
});
var state_machine__6202__auto____1 = (function (state_58597){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_58597);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e58615){if((e58615 instanceof Object))
{var ex__6205__auto__ = e58615;var statearr_58616_58629 = state_58597;(statearr_58616_58629[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58597);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58630 = state_58597;
state_58597 = G__58630;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_58597){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_58597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_58617 = f__6217__auto__.call(null);(statearr_58617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___58618);
return statearr_58617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6216__auto___58717 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_58695){var state_val_58696 = (state_58695[1]);if((state_val_58696 === 1))
{var state_58695__$1 = state_58695;var statearr_58697_58718 = state_58695__$1;(statearr_58697_58718[2] = null);
(statearr_58697_58718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58696 === 2))
{var state_58695__$1 = state_58695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58695__$1,4,ch);
} else
{if((state_val_58696 === 3))
{var inst_58693 = (state_58695[2]);var state_58695__$1 = state_58695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58695__$1,inst_58693);
} else
{if((state_val_58696 === 4))
{var inst_58676 = (state_58695[7]);var inst_58676__$1 = (state_58695[2]);var inst_58677 = (inst_58676__$1 == null);var state_58695__$1 = (function (){var statearr_58698 = state_58695;(statearr_58698[7] = inst_58676__$1);
return statearr_58698;
})();if(cljs.core.truth_(inst_58677))
{var statearr_58699_58719 = state_58695__$1;(statearr_58699_58719[1] = 5);
} else
{var statearr_58700_58720 = state_58695__$1;(statearr_58700_58720[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58696 === 5))
{var inst_58679 = cljs.core.async.close_BANG_.call(null,tc);var inst_58680 = cljs.core.async.close_BANG_.call(null,fc);var state_58695__$1 = (function (){var statearr_58701 = state_58695;(statearr_58701[8] = inst_58679);
return statearr_58701;
})();var statearr_58702_58721 = state_58695__$1;(statearr_58702_58721[2] = inst_58680);
(statearr_58702_58721[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58696 === 6))
{var inst_58676 = (state_58695[7]);var inst_58682 = p.call(null,inst_58676);var state_58695__$1 = state_58695;if(cljs.core.truth_(inst_58682))
{var statearr_58703_58722 = state_58695__$1;(statearr_58703_58722[1] = 9);
} else
{var statearr_58704_58723 = state_58695__$1;(statearr_58704_58723[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58696 === 7))
{var inst_58691 = (state_58695[2]);var state_58695__$1 = state_58695;var statearr_58705_58724 = state_58695__$1;(statearr_58705_58724[2] = inst_58691);
(statearr_58705_58724[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58696 === 8))
{var inst_58688 = (state_58695[2]);var state_58695__$1 = (function (){var statearr_58706 = state_58695;(statearr_58706[9] = inst_58688);
return statearr_58706;
})();var statearr_58707_58725 = state_58695__$1;(statearr_58707_58725[2] = null);
(statearr_58707_58725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58696 === 9))
{var state_58695__$1 = state_58695;var statearr_58708_58726 = state_58695__$1;(statearr_58708_58726[2] = tc);
(statearr_58708_58726[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58696 === 10))
{var state_58695__$1 = state_58695;var statearr_58709_58727 = state_58695__$1;(statearr_58709_58727[2] = fc);
(statearr_58709_58727[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58696 === 11))
{var inst_58676 = (state_58695[7]);var inst_58686 = (state_58695[2]);var state_58695__$1 = state_58695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58695__$1,8,inst_58686,inst_58676);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_58713 = [null,null,null,null,null,null,null,null,null,null];(statearr_58713[0] = state_machine__6202__auto__);
(statearr_58713[1] = 1);
return statearr_58713;
});
var state_machine__6202__auto____1 = (function (state_58695){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_58695);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e58714){if((e58714 instanceof Object))
{var ex__6205__auto__ = e58714;var statearr_58715_58728 = state_58695;(statearr_58715_58728[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58729 = state_58695;
state_58695 = G__58729;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_58695){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_58695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_58716 = f__6217__auto__.call(null);(statearr_58716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___58717);
return statearr_58716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6216__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_58776){var state_val_58777 = (state_58776[1]);if((state_val_58777 === 7))
{var inst_58772 = (state_58776[2]);var state_58776__$1 = state_58776;var statearr_58778_58794 = state_58776__$1;(statearr_58778_58794[2] = inst_58772);
(statearr_58778_58794[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58777 === 6))
{var inst_58762 = (state_58776[7]);var inst_58765 = (state_58776[8]);var inst_58769 = f.call(null,inst_58762,inst_58765);var inst_58762__$1 = inst_58769;var state_58776__$1 = (function (){var statearr_58779 = state_58776;(statearr_58779[7] = inst_58762__$1);
return statearr_58779;
})();var statearr_58780_58795 = state_58776__$1;(statearr_58780_58795[2] = null);
(statearr_58780_58795[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58777 === 5))
{var inst_58762 = (state_58776[7]);var state_58776__$1 = state_58776;var statearr_58781_58796 = state_58776__$1;(statearr_58781_58796[2] = inst_58762);
(statearr_58781_58796[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58777 === 4))
{var inst_58765 = (state_58776[8]);var inst_58765__$1 = (state_58776[2]);var inst_58766 = (inst_58765__$1 == null);var state_58776__$1 = (function (){var statearr_58782 = state_58776;(statearr_58782[8] = inst_58765__$1);
return statearr_58782;
})();if(cljs.core.truth_(inst_58766))
{var statearr_58783_58797 = state_58776__$1;(statearr_58783_58797[1] = 5);
} else
{var statearr_58784_58798 = state_58776__$1;(statearr_58784_58798[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58777 === 3))
{var inst_58774 = (state_58776[2]);var state_58776__$1 = state_58776;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58776__$1,inst_58774);
} else
{if((state_val_58777 === 2))
{var state_58776__$1 = state_58776;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58776__$1,4,ch);
} else
{if((state_val_58777 === 1))
{var inst_58762 = init;var state_58776__$1 = (function (){var statearr_58785 = state_58776;(statearr_58785[7] = inst_58762);
return statearr_58785;
})();var statearr_58786_58799 = state_58776__$1;(statearr_58786_58799[2] = null);
(statearr_58786_58799[1] = 2);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_58790 = [null,null,null,null,null,null,null,null,null];(statearr_58790[0] = state_machine__6202__auto__);
(statearr_58790[1] = 1);
return statearr_58790;
});
var state_machine__6202__auto____1 = (function (state_58776){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_58776);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e58791){if((e58791 instanceof Object))
{var ex__6205__auto__ = e58791;var statearr_58792_58800 = state_58776;(statearr_58792_58800[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58776);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58801 = state_58776;
state_58776 = G__58801;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_58776){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_58776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_58793 = f__6217__auto__.call(null);(statearr_58793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_58793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
}));
return c__6216__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6216__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_58863){var state_val_58864 = (state_58863[1]);if((state_val_58864 === 1))
{var inst_58843 = cljs.core.seq.call(null,coll);var inst_58844 = inst_58843;var state_58863__$1 = (function (){var statearr_58865 = state_58863;(statearr_58865[7] = inst_58844);
return statearr_58865;
})();var statearr_58866_58884 = state_58863__$1;(statearr_58866_58884[2] = null);
(statearr_58866_58884[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58864 === 2))
{var inst_58844 = (state_58863[7]);var state_58863__$1 = state_58863;if(cljs.core.truth_(inst_58844))
{var statearr_58867_58885 = state_58863__$1;(statearr_58867_58885[1] = 4);
} else
{var statearr_58868_58886 = state_58863__$1;(statearr_58868_58886[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58864 === 3))
{var inst_58861 = (state_58863[2]);var state_58863__$1 = state_58863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58863__$1,inst_58861);
} else
{if((state_val_58864 === 4))
{var inst_58844 = (state_58863[7]);var inst_58847 = cljs.core.first.call(null,inst_58844);var state_58863__$1 = state_58863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58863__$1,7,ch,inst_58847);
} else
{if((state_val_58864 === 5))
{var state_58863__$1 = state_58863;if(cljs.core.truth_(close_QMARK_))
{var statearr_58869_58887 = state_58863__$1;(statearr_58869_58887[1] = 8);
} else
{var statearr_58870_58888 = state_58863__$1;(statearr_58870_58888[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58864 === 6))
{var inst_58859 = (state_58863[2]);var state_58863__$1 = state_58863;var statearr_58871_58889 = state_58863__$1;(statearr_58871_58889[2] = inst_58859);
(statearr_58871_58889[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58864 === 7))
{var inst_58844 = (state_58863[7]);var inst_58849 = (state_58863[2]);var inst_58850 = cljs.core.next.call(null,inst_58844);var inst_58844__$1 = inst_58850;var state_58863__$1 = (function (){var statearr_58872 = state_58863;(statearr_58872[7] = inst_58844__$1);
(statearr_58872[8] = inst_58849);
return statearr_58872;
})();var statearr_58873_58890 = state_58863__$1;(statearr_58873_58890[2] = null);
(statearr_58873_58890[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58864 === 8))
{var inst_58854 = cljs.core.async.close_BANG_.call(null,ch);var state_58863__$1 = state_58863;var statearr_58874_58891 = state_58863__$1;(statearr_58874_58891[2] = inst_58854);
(statearr_58874_58891[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58864 === 9))
{var state_58863__$1 = state_58863;var statearr_58875_58892 = state_58863__$1;(statearr_58875_58892[2] = null);
(statearr_58875_58892[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58864 === 10))
{var inst_58857 = (state_58863[2]);var state_58863__$1 = state_58863;var statearr_58876_58893 = state_58863__$1;(statearr_58876_58893[2] = inst_58857);
(statearr_58876_58893[1] = 6);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_58880 = [null,null,null,null,null,null,null,null,null];(statearr_58880[0] = state_machine__6202__auto__);
(statearr_58880[1] = 1);
return statearr_58880;
});
var state_machine__6202__auto____1 = (function (state_58863){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_58863);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e58881){if((e58881 instanceof Object))
{var ex__6205__auto__ = e58881;var statearr_58882_58894 = state_58863;(statearr_58882_58894[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58895 = state_58863;
state_58863 = G__58895;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_58863){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_58863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_58883 = f__6217__auto__.call(null);(statearr_58883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto__);
return statearr_58883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
}));
return c__6216__auto__;
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
cljs.core.async.Mux = (function (){var obj58897 = {};return obj58897;
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
cljs.core.async.Mult = (function (){var obj58899 = {};return obj58899;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t59123 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t59123 = (function (cs,ch,mult,meta59124){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta59124 = meta59124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59123.cljs$lang$type = true;
cljs.core.async.t59123.cljs$lang$ctorStr = "cljs.core.async/t59123";
cljs.core.async.t59123.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t59123");
});})(cs))
;
cljs.core.async.t59123.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t59123.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t59123.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t59123.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t59123.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t59123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t59123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_59125){var self__ = this;
var _59125__$1 = this;return self__.meta59124;
});})(cs))
;
cljs.core.async.t59123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_59125,meta59124__$1){var self__ = this;
var _59125__$1 = this;return (new cljs.core.async.t59123(self__.cs,self__.ch,self__.mult,meta59124__$1));
});})(cs))
;
cljs.core.async.__GT_t59123 = ((function (cs){
return (function __GT_t59123(cs__$1,ch__$1,mult__$1,meta59124){return (new cljs.core.async.t59123(cs__$1,ch__$1,mult__$1,meta59124));
});})(cs))
;
}
return (new cljs.core.async.t59123(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6216__auto___59346 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_59260){var state_val_59261 = (state_59260[1]);if((state_val_59261 === 32))
{var inst_59128 = (state_59260[7]);var inst_59204 = (state_59260[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59260,31,Object,null,30);var inst_59211 = cljs.core.async.put_BANG_.call(null,inst_59204,inst_59128,done);var state_59260__$1 = state_59260;var statearr_59262_59347 = state_59260__$1;(statearr_59262_59347[2] = inst_59211);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59260__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 1))
{var state_59260__$1 = state_59260;var statearr_59263_59348 = state_59260__$1;(statearr_59263_59348[2] = null);
(statearr_59263_59348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 33))
{var inst_59217 = (state_59260[9]);var inst_59219 = cljs.core.chunked_seq_QMARK_.call(null,inst_59217);var state_59260__$1 = state_59260;if(inst_59219)
{var statearr_59264_59349 = state_59260__$1;(statearr_59264_59349[1] = 36);
} else
{var statearr_59265_59350 = state_59260__$1;(statearr_59265_59350[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 2))
{var state_59260__$1 = state_59260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59260__$1,4,ch);
} else
{if((state_val_59261 === 34))
{var state_59260__$1 = state_59260;var statearr_59266_59351 = state_59260__$1;(statearr_59266_59351[2] = null);
(statearr_59266_59351[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 3))
{var inst_59258 = (state_59260[2]);var state_59260__$1 = state_59260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59260__$1,inst_59258);
} else
{if((state_val_59261 === 35))
{var inst_59242 = (state_59260[2]);var state_59260__$1 = state_59260;var statearr_59267_59352 = state_59260__$1;(statearr_59267_59352[2] = inst_59242);
(statearr_59267_59352[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 4))
{var inst_59128 = (state_59260[7]);var inst_59128__$1 = (state_59260[2]);var inst_59129 = (inst_59128__$1 == null);var state_59260__$1 = (function (){var statearr_59268 = state_59260;(statearr_59268[7] = inst_59128__$1);
return statearr_59268;
})();if(cljs.core.truth_(inst_59129))
{var statearr_59269_59353 = state_59260__$1;(statearr_59269_59353[1] = 5);
} else
{var statearr_59270_59354 = state_59260__$1;(statearr_59270_59354[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 36))
{var inst_59217 = (state_59260[9]);var inst_59221 = cljs.core.chunk_first.call(null,inst_59217);var inst_59222 = cljs.core.chunk_rest.call(null,inst_59217);var inst_59223 = cljs.core.count.call(null,inst_59221);var inst_59196 = inst_59222;var inst_59197 = inst_59221;var inst_59198 = inst_59223;var inst_59199 = 0;var state_59260__$1 = (function (){var statearr_59271 = state_59260;(statearr_59271[10] = inst_59199);
(statearr_59271[11] = inst_59196);
(statearr_59271[12] = inst_59198);
(statearr_59271[13] = inst_59197);
return statearr_59271;
})();var statearr_59272_59355 = state_59260__$1;(statearr_59272_59355[2] = null);
(statearr_59272_59355[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 5))
{var inst_59135 = cljs.core.deref.call(null,cs);var inst_59136 = cljs.core.seq.call(null,inst_59135);var inst_59137 = inst_59136;var inst_59138 = null;var inst_59139 = 0;var inst_59140 = 0;var state_59260__$1 = (function (){var statearr_59273 = state_59260;(statearr_59273[14] = inst_59140);
(statearr_59273[15] = inst_59139);
(statearr_59273[16] = inst_59138);
(statearr_59273[17] = inst_59137);
return statearr_59273;
})();var statearr_59274_59356 = state_59260__$1;(statearr_59274_59356[2] = null);
(statearr_59274_59356[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 37))
{var inst_59217 = (state_59260[9]);var inst_59226 = cljs.core.first.call(null,inst_59217);var state_59260__$1 = (function (){var statearr_59275 = state_59260;(statearr_59275[18] = inst_59226);
return statearr_59275;
})();var statearr_59276_59357 = state_59260__$1;(statearr_59276_59357[2] = null);
(statearr_59276_59357[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 6))
{var inst_59188 = (state_59260[19]);var inst_59187 = cljs.core.deref.call(null,cs);var inst_59188__$1 = cljs.core.keys.call(null,inst_59187);var inst_59189 = cljs.core.count.call(null,inst_59188__$1);var inst_59190 = cljs.core.reset_BANG_.call(null,dctr,inst_59189);var inst_59195 = cljs.core.seq.call(null,inst_59188__$1);var inst_59196 = inst_59195;var inst_59197 = null;var inst_59198 = 0;var inst_59199 = 0;var state_59260__$1 = (function (){var statearr_59277 = state_59260;(statearr_59277[20] = inst_59190);
(statearr_59277[19] = inst_59188__$1);
(statearr_59277[10] = inst_59199);
(statearr_59277[11] = inst_59196);
(statearr_59277[12] = inst_59198);
(statearr_59277[13] = inst_59197);
return statearr_59277;
})();var statearr_59278_59358 = state_59260__$1;(statearr_59278_59358[2] = null);
(statearr_59278_59358[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 38))
{var inst_59239 = (state_59260[2]);var state_59260__$1 = state_59260;var statearr_59279_59359 = state_59260__$1;(statearr_59279_59359[2] = inst_59239);
(statearr_59279_59359[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 7))
{var inst_59256 = (state_59260[2]);var state_59260__$1 = state_59260;var statearr_59280_59360 = state_59260__$1;(statearr_59280_59360[2] = inst_59256);
(statearr_59280_59360[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 39))
{var inst_59217 = (state_59260[9]);var inst_59235 = (state_59260[2]);var inst_59236 = cljs.core.next.call(null,inst_59217);var inst_59196 = inst_59236;var inst_59197 = null;var inst_59198 = 0;var inst_59199 = 0;var state_59260__$1 = (function (){var statearr_59281 = state_59260;(statearr_59281[21] = inst_59235);
(statearr_59281[10] = inst_59199);
(statearr_59281[11] = inst_59196);
(statearr_59281[12] = inst_59198);
(statearr_59281[13] = inst_59197);
return statearr_59281;
})();var statearr_59282_59361 = state_59260__$1;(statearr_59282_59361[2] = null);
(statearr_59282_59361[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 8))
{var inst_59140 = (state_59260[14]);var inst_59139 = (state_59260[15]);var inst_59142 = (inst_59140 < inst_59139);var inst_59143 = inst_59142;var state_59260__$1 = state_59260;if(cljs.core.truth_(inst_59143))
{var statearr_59283_59362 = state_59260__$1;(statearr_59283_59362[1] = 10);
} else
{var statearr_59284_59363 = state_59260__$1;(statearr_59284_59363[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 40))
{var inst_59226 = (state_59260[18]);var inst_59227 = (state_59260[2]);var inst_59228 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_59229 = cljs.core.async.untap_STAR_.call(null,m,inst_59226);var state_59260__$1 = (function (){var statearr_59285 = state_59260;(statearr_59285[22] = inst_59228);
(statearr_59285[23] = inst_59227);
return statearr_59285;
})();var statearr_59286_59364 = state_59260__$1;(statearr_59286_59364[2] = inst_59229);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59260__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 9))
{var inst_59185 = (state_59260[2]);var state_59260__$1 = state_59260;var statearr_59287_59365 = state_59260__$1;(statearr_59287_59365[2] = inst_59185);
(statearr_59287_59365[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 41))
{var inst_59226 = (state_59260[18]);var inst_59128 = (state_59260[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59260,40,Object,null,39);var inst_59233 = cljs.core.async.put_BANG_.call(null,inst_59226,inst_59128,done);var state_59260__$1 = state_59260;var statearr_59288_59366 = state_59260__$1;(statearr_59288_59366[2] = inst_59233);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59260__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 10))
{var inst_59140 = (state_59260[14]);var inst_59138 = (state_59260[16]);var inst_59146 = cljs.core._nth.call(null,inst_59138,inst_59140);var inst_59147 = cljs.core.nth.call(null,inst_59146,0,null);var inst_59148 = cljs.core.nth.call(null,inst_59146,1,null);var state_59260__$1 = (function (){var statearr_59289 = state_59260;(statearr_59289[24] = inst_59147);
return statearr_59289;
})();if(cljs.core.truth_(inst_59148))
{var statearr_59290_59367 = state_59260__$1;(statearr_59290_59367[1] = 13);
} else
{var statearr_59291_59368 = state_59260__$1;(statearr_59291_59368[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 42))
{var state_59260__$1 = state_59260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59260__$1,45,dchan);
} else
{if((state_val_59261 === 11))
{var inst_59137 = (state_59260[17]);var inst_59157 = (state_59260[25]);var inst_59157__$1 = cljs.core.seq.call(null,inst_59137);var state_59260__$1 = (function (){var statearr_59292 = state_59260;(statearr_59292[25] = inst_59157__$1);
return statearr_59292;
})();if(inst_59157__$1)
{var statearr_59293_59369 = state_59260__$1;(statearr_59293_59369[1] = 16);
} else
{var statearr_59294_59370 = state_59260__$1;(statearr_59294_59370[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 43))
{var state_59260__$1 = state_59260;var statearr_59295_59371 = state_59260__$1;(statearr_59295_59371[2] = null);
(statearr_59295_59371[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 12))
{var inst_59183 = (state_59260[2]);var state_59260__$1 = state_59260;var statearr_59296_59372 = state_59260__$1;(statearr_59296_59372[2] = inst_59183);
(statearr_59296_59372[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 44))
{var inst_59253 = (state_59260[2]);var state_59260__$1 = (function (){var statearr_59297 = state_59260;(statearr_59297[26] = inst_59253);
return statearr_59297;
})();var statearr_59298_59373 = state_59260__$1;(statearr_59298_59373[2] = null);
(statearr_59298_59373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 13))
{var inst_59147 = (state_59260[24]);var inst_59150 = cljs.core.async.close_BANG_.call(null,inst_59147);var state_59260__$1 = state_59260;var statearr_59299_59374 = state_59260__$1;(statearr_59299_59374[2] = inst_59150);
(statearr_59299_59374[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 45))
{var inst_59250 = (state_59260[2]);var state_59260__$1 = state_59260;var statearr_59303_59375 = state_59260__$1;(statearr_59303_59375[2] = inst_59250);
(statearr_59303_59375[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 14))
{var state_59260__$1 = state_59260;var statearr_59304_59376 = state_59260__$1;(statearr_59304_59376[2] = null);
(statearr_59304_59376[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 15))
{var inst_59140 = (state_59260[14]);var inst_59139 = (state_59260[15]);var inst_59138 = (state_59260[16]);var inst_59137 = (state_59260[17]);var inst_59153 = (state_59260[2]);var inst_59154 = (inst_59140 + 1);var tmp59300 = inst_59139;var tmp59301 = inst_59138;var tmp59302 = inst_59137;var inst_59137__$1 = tmp59302;var inst_59138__$1 = tmp59301;var inst_59139__$1 = tmp59300;var inst_59140__$1 = inst_59154;var state_59260__$1 = (function (){var statearr_59305 = state_59260;(statearr_59305[14] = inst_59140__$1);
(statearr_59305[15] = inst_59139__$1);
(statearr_59305[16] = inst_59138__$1);
(statearr_59305[17] = inst_59137__$1);
(statearr_59305[27] = inst_59153);
return statearr_59305;
})();var statearr_59306_59377 = state_59260__$1;(statearr_59306_59377[2] = null);
(statearr_59306_59377[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 16))
{var inst_59157 = (state_59260[25]);var inst_59159 = cljs.core.chunked_seq_QMARK_.call(null,inst_59157);var state_59260__$1 = state_59260;if(inst_59159)
{var statearr_59307_59378 = state_59260__$1;(statearr_59307_59378[1] = 19);
} else
{var statearr_59308_59379 = state_59260__$1;(statearr_59308_59379[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 17))
{var state_59260__$1 = state_59260;var statearr_59309_59380 = state_59260__$1;(statearr_59309_59380[2] = null);
(statearr_59309_59380[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 18))
{var inst_59181 = (state_59260[2]);var state_59260__$1 = state_59260;var statearr_59310_59381 = state_59260__$1;(statearr_59310_59381[2] = inst_59181);
(statearr_59310_59381[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 19))
{var inst_59157 = (state_59260[25]);var inst_59161 = cljs.core.chunk_first.call(null,inst_59157);var inst_59162 = cljs.core.chunk_rest.call(null,inst_59157);var inst_59163 = cljs.core.count.call(null,inst_59161);var inst_59137 = inst_59162;var inst_59138 = inst_59161;var inst_59139 = inst_59163;var inst_59140 = 0;var state_59260__$1 = (function (){var statearr_59311 = state_59260;(statearr_59311[14] = inst_59140);
(statearr_59311[15] = inst_59139);
(statearr_59311[16] = inst_59138);
(statearr_59311[17] = inst_59137);
return statearr_59311;
})();var statearr_59312_59382 = state_59260__$1;(statearr_59312_59382[2] = null);
(statearr_59312_59382[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 20))
{var inst_59157 = (state_59260[25]);var inst_59167 = cljs.core.first.call(null,inst_59157);var inst_59168 = cljs.core.nth.call(null,inst_59167,0,null);var inst_59169 = cljs.core.nth.call(null,inst_59167,1,null);var state_59260__$1 = (function (){var statearr_59313 = state_59260;(statearr_59313[28] = inst_59168);
return statearr_59313;
})();if(cljs.core.truth_(inst_59169))
{var statearr_59314_59383 = state_59260__$1;(statearr_59314_59383[1] = 22);
} else
{var statearr_59315_59384 = state_59260__$1;(statearr_59315_59384[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 21))
{var inst_59178 = (state_59260[2]);var state_59260__$1 = state_59260;var statearr_59316_59385 = state_59260__$1;(statearr_59316_59385[2] = inst_59178);
(statearr_59316_59385[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 22))
{var inst_59168 = (state_59260[28]);var inst_59171 = cljs.core.async.close_BANG_.call(null,inst_59168);var state_59260__$1 = state_59260;var statearr_59317_59386 = state_59260__$1;(statearr_59317_59386[2] = inst_59171);
(statearr_59317_59386[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 23))
{var state_59260__$1 = state_59260;var statearr_59318_59387 = state_59260__$1;(statearr_59318_59387[2] = null);
(statearr_59318_59387[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 24))
{var inst_59157 = (state_59260[25]);var inst_59174 = (state_59260[2]);var inst_59175 = cljs.core.next.call(null,inst_59157);var inst_59137 = inst_59175;var inst_59138 = null;var inst_59139 = 0;var inst_59140 = 0;var state_59260__$1 = (function (){var statearr_59319 = state_59260;(statearr_59319[29] = inst_59174);
(statearr_59319[14] = inst_59140);
(statearr_59319[15] = inst_59139);
(statearr_59319[16] = inst_59138);
(statearr_59319[17] = inst_59137);
return statearr_59319;
})();var statearr_59320_59388 = state_59260__$1;(statearr_59320_59388[2] = null);
(statearr_59320_59388[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 25))
{var inst_59199 = (state_59260[10]);var inst_59198 = (state_59260[12]);var inst_59201 = (inst_59199 < inst_59198);var inst_59202 = inst_59201;var state_59260__$1 = state_59260;if(cljs.core.truth_(inst_59202))
{var statearr_59321_59389 = state_59260__$1;(statearr_59321_59389[1] = 27);
} else
{var statearr_59322_59390 = state_59260__$1;(statearr_59322_59390[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 26))
{var inst_59188 = (state_59260[19]);var inst_59246 = (state_59260[2]);var inst_59247 = cljs.core.seq.call(null,inst_59188);var state_59260__$1 = (function (){var statearr_59323 = state_59260;(statearr_59323[30] = inst_59246);
return statearr_59323;
})();if(inst_59247)
{var statearr_59324_59391 = state_59260__$1;(statearr_59324_59391[1] = 42);
} else
{var statearr_59325_59392 = state_59260__$1;(statearr_59325_59392[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 27))
{var inst_59199 = (state_59260[10]);var inst_59197 = (state_59260[13]);var inst_59204 = cljs.core._nth.call(null,inst_59197,inst_59199);var state_59260__$1 = (function (){var statearr_59326 = state_59260;(statearr_59326[8] = inst_59204);
return statearr_59326;
})();var statearr_59327_59393 = state_59260__$1;(statearr_59327_59393[2] = null);
(statearr_59327_59393[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 28))
{var inst_59217 = (state_59260[9]);var inst_59196 = (state_59260[11]);var inst_59217__$1 = cljs.core.seq.call(null,inst_59196);var state_59260__$1 = (function (){var statearr_59331 = state_59260;(statearr_59331[9] = inst_59217__$1);
return statearr_59331;
})();if(inst_59217__$1)
{var statearr_59332_59394 = state_59260__$1;(statearr_59332_59394[1] = 33);
} else
{var statearr_59333_59395 = state_59260__$1;(statearr_59333_59395[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 29))
{var inst_59244 = (state_59260[2]);var state_59260__$1 = state_59260;var statearr_59334_59396 = state_59260__$1;(statearr_59334_59396[2] = inst_59244);
(statearr_59334_59396[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 30))
{var inst_59199 = (state_59260[10]);var inst_59196 = (state_59260[11]);var inst_59198 = (state_59260[12]);var inst_59197 = (state_59260[13]);var inst_59213 = (state_59260[2]);var inst_59214 = (inst_59199 + 1);var tmp59328 = inst_59196;var tmp59329 = inst_59198;var tmp59330 = inst_59197;var inst_59196__$1 = tmp59328;var inst_59197__$1 = tmp59330;var inst_59198__$1 = tmp59329;var inst_59199__$1 = inst_59214;var state_59260__$1 = (function (){var statearr_59335 = state_59260;(statearr_59335[31] = inst_59213);
(statearr_59335[10] = inst_59199__$1);
(statearr_59335[11] = inst_59196__$1);
(statearr_59335[12] = inst_59198__$1);
(statearr_59335[13] = inst_59197__$1);
return statearr_59335;
})();var statearr_59336_59397 = state_59260__$1;(statearr_59336_59397[2] = null);
(statearr_59336_59397[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59261 === 31))
{var inst_59204 = (state_59260[8]);var inst_59205 = (state_59260[2]);var inst_59206 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_59207 = cljs.core.async.untap_STAR_.call(null,m,inst_59204);var state_59260__$1 = (function (){var statearr_59337 = state_59260;(statearr_59337[32] = inst_59206);
(statearr_59337[33] = inst_59205);
return statearr_59337;
})();var statearr_59338_59398 = state_59260__$1;(statearr_59338_59398[2] = inst_59207);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59260__$1);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59342[0] = state_machine__6202__auto__);
(statearr_59342[1] = 1);
return statearr_59342;
});
var state_machine__6202__auto____1 = (function (state_59260){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59260);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59343){if((e59343 instanceof Object))
{var ex__6205__auto__ = e59343;var statearr_59344_59399 = state_59260;(statearr_59344_59399[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59400 = state_59260;
state_59260 = G__59400;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59260){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_59345 = f__6217__auto__.call(null);(statearr_59345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___59346);
return statearr_59345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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
cljs.core.async.Mix = (function (){var obj59402 = {};return obj59402;
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
;var m = (function (){if(typeof cljs.core.async.t59512 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t59512 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta59513){
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
this.meta59513 = meta59513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59512.cljs$lang$type = true;
cljs.core.async.t59512.cljs$lang$ctorStr = "cljs.core.async/t59512";
cljs.core.async.t59512.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t59512");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59512.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t59512.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59512.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59512.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59512.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59512.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59512.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t59512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59514){var self__ = this;
var _59514__$1 = this;return self__.meta59513;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59514,meta59513__$1){var self__ = this;
var _59514__$1 = this;return (new cljs.core.async.t59512(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta59513__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t59512 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t59512(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta59513){return (new cljs.core.async.t59512(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta59513));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t59512(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6216__auto___59621 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_59579){var state_val_59580 = (state_59579[1]);if((state_val_59580 === 1))
{var inst_59518 = (state_59579[7]);var inst_59518__$1 = calc_state.call(null);var inst_59519 = cljs.core.seq_QMARK_.call(null,inst_59518__$1);var state_59579__$1 = (function (){var statearr_59581 = state_59579;(statearr_59581[7] = inst_59518__$1);
return statearr_59581;
})();if(inst_59519)
{var statearr_59582_59622 = state_59579__$1;(statearr_59582_59622[1] = 2);
} else
{var statearr_59583_59623 = state_59579__$1;(statearr_59583_59623[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 2))
{var inst_59518 = (state_59579[7]);var inst_59521 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59518);var state_59579__$1 = state_59579;var statearr_59584_59624 = state_59579__$1;(statearr_59584_59624[2] = inst_59521);
(statearr_59584_59624[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 3))
{var inst_59518 = (state_59579[7]);var state_59579__$1 = state_59579;var statearr_59585_59625 = state_59579__$1;(statearr_59585_59625[2] = inst_59518);
(statearr_59585_59625[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 4))
{var inst_59518 = (state_59579[7]);var inst_59524 = (state_59579[2]);var inst_59525 = cljs.core.get.call(null,inst_59524,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_59526 = cljs.core.get.call(null,inst_59524,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_59527 = cljs.core.get.call(null,inst_59524,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_59528 = inst_59518;var state_59579__$1 = (function (){var statearr_59586 = state_59579;(statearr_59586[8] = inst_59526);
(statearr_59586[9] = inst_59527);
(statearr_59586[10] = inst_59528);
(statearr_59586[11] = inst_59525);
return statearr_59586;
})();var statearr_59587_59626 = state_59579__$1;(statearr_59587_59626[2] = null);
(statearr_59587_59626[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 5))
{var inst_59528 = (state_59579[10]);var inst_59531 = cljs.core.seq_QMARK_.call(null,inst_59528);var state_59579__$1 = state_59579;if(inst_59531)
{var statearr_59588_59627 = state_59579__$1;(statearr_59588_59627[1] = 7);
} else
{var statearr_59589_59628 = state_59579__$1;(statearr_59589_59628[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 6))
{var inst_59577 = (state_59579[2]);var state_59579__$1 = state_59579;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59579__$1,inst_59577);
} else
{if((state_val_59580 === 7))
{var inst_59528 = (state_59579[10]);var inst_59533 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59528);var state_59579__$1 = state_59579;var statearr_59590_59629 = state_59579__$1;(statearr_59590_59629[2] = inst_59533);
(statearr_59590_59629[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 8))
{var inst_59528 = (state_59579[10]);var state_59579__$1 = state_59579;var statearr_59591_59630 = state_59579__$1;(statearr_59591_59630[2] = inst_59528);
(statearr_59591_59630[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 9))
{var inst_59536 = (state_59579[12]);var inst_59536__$1 = (state_59579[2]);var inst_59537 = cljs.core.get.call(null,inst_59536__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_59538 = cljs.core.get.call(null,inst_59536__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_59539 = cljs.core.get.call(null,inst_59536__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_59579__$1 = (function (){var statearr_59592 = state_59579;(statearr_59592[13] = inst_59538);
(statearr_59592[14] = inst_59539);
(statearr_59592[12] = inst_59536__$1);
return statearr_59592;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_59579__$1,10,inst_59537);
} else
{if((state_val_59580 === 10))
{var inst_59544 = (state_59579[15]);var inst_59543 = (state_59579[16]);var inst_59542 = (state_59579[2]);var inst_59543__$1 = cljs.core.nth.call(null,inst_59542,0,null);var inst_59544__$1 = cljs.core.nth.call(null,inst_59542,1,null);var inst_59545 = (inst_59543__$1 == null);var inst_59546 = cljs.core._EQ_.call(null,inst_59544__$1,change);var inst_59547 = (inst_59545) || (inst_59546);var state_59579__$1 = (function (){var statearr_59593 = state_59579;(statearr_59593[15] = inst_59544__$1);
(statearr_59593[16] = inst_59543__$1);
return statearr_59593;
})();if(cljs.core.truth_(inst_59547))
{var statearr_59594_59631 = state_59579__$1;(statearr_59594_59631[1] = 11);
} else
{var statearr_59595_59632 = state_59579__$1;(statearr_59595_59632[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 11))
{var inst_59543 = (state_59579[16]);var inst_59549 = (inst_59543 == null);var state_59579__$1 = state_59579;if(cljs.core.truth_(inst_59549))
{var statearr_59596_59633 = state_59579__$1;(statearr_59596_59633[1] = 14);
} else
{var statearr_59597_59634 = state_59579__$1;(statearr_59597_59634[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 12))
{var inst_59539 = (state_59579[14]);var inst_59544 = (state_59579[15]);var inst_59558 = (state_59579[17]);var inst_59558__$1 = inst_59539.call(null,inst_59544);var state_59579__$1 = (function (){var statearr_59598 = state_59579;(statearr_59598[17] = inst_59558__$1);
return statearr_59598;
})();if(cljs.core.truth_(inst_59558__$1))
{var statearr_59599_59635 = state_59579__$1;(statearr_59599_59635[1] = 17);
} else
{var statearr_59600_59636 = state_59579__$1;(statearr_59600_59636[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 13))
{var inst_59575 = (state_59579[2]);var state_59579__$1 = state_59579;var statearr_59601_59637 = state_59579__$1;(statearr_59601_59637[2] = inst_59575);
(statearr_59601_59637[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 14))
{var inst_59544 = (state_59579[15]);var inst_59551 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_59544);var state_59579__$1 = state_59579;var statearr_59602_59638 = state_59579__$1;(statearr_59602_59638[2] = inst_59551);
(statearr_59602_59638[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 15))
{var state_59579__$1 = state_59579;var statearr_59603_59639 = state_59579__$1;(statearr_59603_59639[2] = null);
(statearr_59603_59639[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 16))
{var inst_59554 = (state_59579[2]);var inst_59555 = calc_state.call(null);var inst_59528 = inst_59555;var state_59579__$1 = (function (){var statearr_59604 = state_59579;(statearr_59604[10] = inst_59528);
(statearr_59604[18] = inst_59554);
return statearr_59604;
})();var statearr_59605_59640 = state_59579__$1;(statearr_59605_59640[2] = null);
(statearr_59605_59640[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 17))
{var inst_59558 = (state_59579[17]);var state_59579__$1 = state_59579;var statearr_59606_59641 = state_59579__$1;(statearr_59606_59641[2] = inst_59558);
(statearr_59606_59641[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 18))
{var inst_59538 = (state_59579[13]);var inst_59539 = (state_59579[14]);var inst_59544 = (state_59579[15]);var inst_59561 = cljs.core.empty_QMARK_.call(null,inst_59539);var inst_59562 = inst_59538.call(null,inst_59544);var inst_59563 = cljs.core.not.call(null,inst_59562);var inst_59564 = (inst_59561) && (inst_59563);var state_59579__$1 = state_59579;var statearr_59607_59642 = state_59579__$1;(statearr_59607_59642[2] = inst_59564);
(statearr_59607_59642[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 19))
{var inst_59566 = (state_59579[2]);var state_59579__$1 = state_59579;if(cljs.core.truth_(inst_59566))
{var statearr_59608_59643 = state_59579__$1;(statearr_59608_59643[1] = 20);
} else
{var statearr_59609_59644 = state_59579__$1;(statearr_59609_59644[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 20))
{var inst_59543 = (state_59579[16]);var state_59579__$1 = state_59579;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59579__$1,23,out,inst_59543);
} else
{if((state_val_59580 === 21))
{var state_59579__$1 = state_59579;var statearr_59610_59645 = state_59579__$1;(statearr_59610_59645[2] = null);
(statearr_59610_59645[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 22))
{var inst_59536 = (state_59579[12]);var inst_59572 = (state_59579[2]);var inst_59528 = inst_59536;var state_59579__$1 = (function (){var statearr_59611 = state_59579;(statearr_59611[19] = inst_59572);
(statearr_59611[10] = inst_59528);
return statearr_59611;
})();var statearr_59612_59646 = state_59579__$1;(statearr_59612_59646[2] = null);
(statearr_59612_59646[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59580 === 23))
{var inst_59569 = (state_59579[2]);var state_59579__$1 = state_59579;var statearr_59613_59647 = state_59579__$1;(statearr_59613_59647[2] = inst_59569);
(statearr_59613_59647[1] = 22);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59617[0] = state_machine__6202__auto__);
(statearr_59617[1] = 1);
return statearr_59617;
});
var state_machine__6202__auto____1 = (function (state_59579){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59579);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59618){if((e59618 instanceof Object))
{var ex__6205__auto__ = e59618;var statearr_59619_59648 = state_59579;(statearr_59619_59648[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59579);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59649 = state_59579;
state_59579 = G__59649;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59579){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_59620 = f__6217__auto__.call(null);(statearr_59620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___59621);
return statearr_59620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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
cljs.core.async.Pub = (function (){var obj59651 = {};return obj59651;
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
return (function (p1__59652_SHARP_){if(cljs.core.truth_(p1__59652_SHARP_.call(null,topic)))
{return p1__59652_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__59652_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t59777 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t59777 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta59778){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta59778 = meta59778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59777.cljs$lang$type = true;
cljs.core.async.t59777.cljs$lang$ctorStr = "cljs.core.async/t59777";
cljs.core.async.t59777.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t59777");
});})(mults,ensure_mult))
;
cljs.core.async.t59777.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t59777.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t59777.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t59777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t59777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t59777.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t59777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t59777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_59779){var self__ = this;
var _59779__$1 = this;return self__.meta59778;
});})(mults,ensure_mult))
;
cljs.core.async.t59777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_59779,meta59778__$1){var self__ = this;
var _59779__$1 = this;return (new cljs.core.async.t59777(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta59778__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t59777 = ((function (mults,ensure_mult){
return (function __GT_t59777(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta59778){return (new cljs.core.async.t59777(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta59778));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t59777(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6216__auto___59901 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_59853){var state_val_59854 = (state_59853[1]);if((state_val_59854 === 1))
{var state_59853__$1 = state_59853;var statearr_59855_59902 = state_59853__$1;(statearr_59855_59902[2] = null);
(statearr_59855_59902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 2))
{var state_59853__$1 = state_59853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59853__$1,4,ch);
} else
{if((state_val_59854 === 3))
{var inst_59851 = (state_59853[2]);var state_59853__$1 = state_59853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59853__$1,inst_59851);
} else
{if((state_val_59854 === 4))
{var inst_59782 = (state_59853[7]);var inst_59782__$1 = (state_59853[2]);var inst_59783 = (inst_59782__$1 == null);var state_59853__$1 = (function (){var statearr_59856 = state_59853;(statearr_59856[7] = inst_59782__$1);
return statearr_59856;
})();if(cljs.core.truth_(inst_59783))
{var statearr_59857_59903 = state_59853__$1;(statearr_59857_59903[1] = 5);
} else
{var statearr_59858_59904 = state_59853__$1;(statearr_59858_59904[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 5))
{var inst_59789 = cljs.core.deref.call(null,mults);var inst_59790 = cljs.core.vals.call(null,inst_59789);var inst_59791 = cljs.core.seq.call(null,inst_59790);var inst_59792 = inst_59791;var inst_59793 = null;var inst_59794 = 0;var inst_59795 = 0;var state_59853__$1 = (function (){var statearr_59859 = state_59853;(statearr_59859[8] = inst_59795);
(statearr_59859[9] = inst_59793);
(statearr_59859[10] = inst_59794);
(statearr_59859[11] = inst_59792);
return statearr_59859;
})();var statearr_59860_59905 = state_59853__$1;(statearr_59860_59905[2] = null);
(statearr_59860_59905[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 6))
{var inst_59782 = (state_59853[7]);var inst_59832 = (state_59853[12]);var inst_59830 = (state_59853[13]);var inst_59830__$1 = topic_fn.call(null,inst_59782);var inst_59831 = cljs.core.deref.call(null,mults);var inst_59832__$1 = cljs.core.get.call(null,inst_59831,inst_59830__$1);var state_59853__$1 = (function (){var statearr_59861 = state_59853;(statearr_59861[12] = inst_59832__$1);
(statearr_59861[13] = inst_59830__$1);
return statearr_59861;
})();if(cljs.core.truth_(inst_59832__$1))
{var statearr_59862_59906 = state_59853__$1;(statearr_59862_59906[1] = 19);
} else
{var statearr_59863_59907 = state_59853__$1;(statearr_59863_59907[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 7))
{var inst_59849 = (state_59853[2]);var state_59853__$1 = state_59853;var statearr_59864_59908 = state_59853__$1;(statearr_59864_59908[2] = inst_59849);
(statearr_59864_59908[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 8))
{var inst_59795 = (state_59853[8]);var inst_59794 = (state_59853[10]);var inst_59797 = (inst_59795 < inst_59794);var inst_59798 = inst_59797;var state_59853__$1 = state_59853;if(cljs.core.truth_(inst_59798))
{var statearr_59868_59909 = state_59853__$1;(statearr_59868_59909[1] = 10);
} else
{var statearr_59869_59910 = state_59853__$1;(statearr_59869_59910[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 9))
{var inst_59828 = (state_59853[2]);var state_59853__$1 = state_59853;var statearr_59870_59911 = state_59853__$1;(statearr_59870_59911[2] = inst_59828);
(statearr_59870_59911[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 10))
{var inst_59795 = (state_59853[8]);var inst_59793 = (state_59853[9]);var inst_59794 = (state_59853[10]);var inst_59792 = (state_59853[11]);var inst_59800 = cljs.core._nth.call(null,inst_59793,inst_59795);var inst_59801 = cljs.core.async.muxch_STAR_.call(null,inst_59800);var inst_59802 = cljs.core.async.close_BANG_.call(null,inst_59801);var inst_59803 = (inst_59795 + 1);var tmp59865 = inst_59793;var tmp59866 = inst_59794;var tmp59867 = inst_59792;var inst_59792__$1 = tmp59867;var inst_59793__$1 = tmp59865;var inst_59794__$1 = tmp59866;var inst_59795__$1 = inst_59803;var state_59853__$1 = (function (){var statearr_59871 = state_59853;(statearr_59871[14] = inst_59802);
(statearr_59871[8] = inst_59795__$1);
(statearr_59871[9] = inst_59793__$1);
(statearr_59871[10] = inst_59794__$1);
(statearr_59871[11] = inst_59792__$1);
return statearr_59871;
})();var statearr_59872_59912 = state_59853__$1;(statearr_59872_59912[2] = null);
(statearr_59872_59912[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 11))
{var inst_59806 = (state_59853[15]);var inst_59792 = (state_59853[11]);var inst_59806__$1 = cljs.core.seq.call(null,inst_59792);var state_59853__$1 = (function (){var statearr_59873 = state_59853;(statearr_59873[15] = inst_59806__$1);
return statearr_59873;
})();if(inst_59806__$1)
{var statearr_59874_59913 = state_59853__$1;(statearr_59874_59913[1] = 13);
} else
{var statearr_59875_59914 = state_59853__$1;(statearr_59875_59914[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 12))
{var inst_59826 = (state_59853[2]);var state_59853__$1 = state_59853;var statearr_59876_59915 = state_59853__$1;(statearr_59876_59915[2] = inst_59826);
(statearr_59876_59915[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 13))
{var inst_59806 = (state_59853[15]);var inst_59808 = cljs.core.chunked_seq_QMARK_.call(null,inst_59806);var state_59853__$1 = state_59853;if(inst_59808)
{var statearr_59877_59916 = state_59853__$1;(statearr_59877_59916[1] = 16);
} else
{var statearr_59878_59917 = state_59853__$1;(statearr_59878_59917[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 14))
{var state_59853__$1 = state_59853;var statearr_59879_59918 = state_59853__$1;(statearr_59879_59918[2] = null);
(statearr_59879_59918[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 15))
{var inst_59824 = (state_59853[2]);var state_59853__$1 = state_59853;var statearr_59880_59919 = state_59853__$1;(statearr_59880_59919[2] = inst_59824);
(statearr_59880_59919[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 16))
{var inst_59806 = (state_59853[15]);var inst_59810 = cljs.core.chunk_first.call(null,inst_59806);var inst_59811 = cljs.core.chunk_rest.call(null,inst_59806);var inst_59812 = cljs.core.count.call(null,inst_59810);var inst_59792 = inst_59811;var inst_59793 = inst_59810;var inst_59794 = inst_59812;var inst_59795 = 0;var state_59853__$1 = (function (){var statearr_59881 = state_59853;(statearr_59881[8] = inst_59795);
(statearr_59881[9] = inst_59793);
(statearr_59881[10] = inst_59794);
(statearr_59881[11] = inst_59792);
return statearr_59881;
})();var statearr_59882_59920 = state_59853__$1;(statearr_59882_59920[2] = null);
(statearr_59882_59920[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 17))
{var inst_59806 = (state_59853[15]);var inst_59815 = cljs.core.first.call(null,inst_59806);var inst_59816 = cljs.core.async.muxch_STAR_.call(null,inst_59815);var inst_59817 = cljs.core.async.close_BANG_.call(null,inst_59816);var inst_59818 = cljs.core.next.call(null,inst_59806);var inst_59792 = inst_59818;var inst_59793 = null;var inst_59794 = 0;var inst_59795 = 0;var state_59853__$1 = (function (){var statearr_59883 = state_59853;(statearr_59883[8] = inst_59795);
(statearr_59883[9] = inst_59793);
(statearr_59883[10] = inst_59794);
(statearr_59883[11] = inst_59792);
(statearr_59883[16] = inst_59817);
return statearr_59883;
})();var statearr_59884_59921 = state_59853__$1;(statearr_59884_59921[2] = null);
(statearr_59884_59921[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 18))
{var inst_59821 = (state_59853[2]);var state_59853__$1 = state_59853;var statearr_59885_59922 = state_59853__$1;(statearr_59885_59922[2] = inst_59821);
(statearr_59885_59922[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 19))
{var state_59853__$1 = state_59853;var statearr_59886_59923 = state_59853__$1;(statearr_59886_59923[2] = null);
(statearr_59886_59923[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 20))
{var state_59853__$1 = state_59853;var statearr_59887_59924 = state_59853__$1;(statearr_59887_59924[2] = null);
(statearr_59887_59924[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 21))
{var inst_59846 = (state_59853[2]);var state_59853__$1 = (function (){var statearr_59888 = state_59853;(statearr_59888[17] = inst_59846);
return statearr_59888;
})();var statearr_59889_59925 = state_59853__$1;(statearr_59889_59925[2] = null);
(statearr_59889_59925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 22))
{var inst_59843 = (state_59853[2]);var state_59853__$1 = state_59853;var statearr_59890_59926 = state_59853__$1;(statearr_59890_59926[2] = inst_59843);
(statearr_59890_59926[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 23))
{var inst_59830 = (state_59853[13]);var inst_59834 = (state_59853[2]);var inst_59835 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_59830);var state_59853__$1 = (function (){var statearr_59891 = state_59853;(statearr_59891[18] = inst_59834);
return statearr_59891;
})();var statearr_59892_59927 = state_59853__$1;(statearr_59892_59927[2] = inst_59835);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59853__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59854 === 24))
{var inst_59782 = (state_59853[7]);var inst_59832 = (state_59853[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59853,23,Object,null,22);var inst_59839 = cljs.core.async.muxch_STAR_.call(null,inst_59832);var state_59853__$1 = state_59853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59853__$1,25,inst_59839,inst_59782);
} else
{if((state_val_59854 === 25))
{var inst_59841 = (state_59853[2]);var state_59853__$1 = state_59853;var statearr_59893_59928 = state_59853__$1;(statearr_59893_59928[2] = inst_59841);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59853__$1);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_59897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59897[0] = state_machine__6202__auto__);
(statearr_59897[1] = 1);
return statearr_59897;
});
var state_machine__6202__auto____1 = (function (state_59853){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_59853);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e59898){if((e59898 instanceof Object))
{var ex__6205__auto__ = e59898;var statearr_59899_59929 = state_59853;(statearr_59899_59929[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59853);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59930 = state_59853;
state_59853 = G__59930;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_59853){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_59853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_59900 = f__6217__auto__.call(null);(statearr_59900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___59901);
return statearr_59900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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
,cljs.core.range.call(null,cnt));var c__6216__auto___60067 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_60037){var state_val_60038 = (state_60037[1]);if((state_val_60038 === 1))
{var state_60037__$1 = state_60037;var statearr_60039_60068 = state_60037__$1;(statearr_60039_60068[2] = null);
(statearr_60039_60068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 2))
{var inst_60000 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_60001 = 0;var state_60037__$1 = (function (){var statearr_60040 = state_60037;(statearr_60040[7] = inst_60000);
(statearr_60040[8] = inst_60001);
return statearr_60040;
})();var statearr_60041_60069 = state_60037__$1;(statearr_60041_60069[2] = null);
(statearr_60041_60069[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 3))
{var inst_60035 = (state_60037[2]);var state_60037__$1 = state_60037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60037__$1,inst_60035);
} else
{if((state_val_60038 === 4))
{var inst_60001 = (state_60037[8]);var inst_60003 = (inst_60001 < cnt);var state_60037__$1 = state_60037;if(cljs.core.truth_(inst_60003))
{var statearr_60042_60070 = state_60037__$1;(statearr_60042_60070[1] = 6);
} else
{var statearr_60043_60071 = state_60037__$1;(statearr_60043_60071[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 5))
{var inst_60021 = (state_60037[2]);var state_60037__$1 = (function (){var statearr_60044 = state_60037;(statearr_60044[9] = inst_60021);
return statearr_60044;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60037__$1,12,dchan);
} else
{if((state_val_60038 === 6))
{var state_60037__$1 = state_60037;var statearr_60045_60072 = state_60037__$1;(statearr_60045_60072[2] = null);
(statearr_60045_60072[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 7))
{var state_60037__$1 = state_60037;var statearr_60046_60073 = state_60037__$1;(statearr_60046_60073[2] = null);
(statearr_60046_60073[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 8))
{var inst_60019 = (state_60037[2]);var state_60037__$1 = state_60037;var statearr_60047_60074 = state_60037__$1;(statearr_60047_60074[2] = inst_60019);
(statearr_60047_60074[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 9))
{var inst_60001 = (state_60037[8]);var inst_60014 = (state_60037[2]);var inst_60015 = (inst_60001 + 1);var inst_60001__$1 = inst_60015;var state_60037__$1 = (function (){var statearr_60048 = state_60037;(statearr_60048[10] = inst_60014);
(statearr_60048[8] = inst_60001__$1);
return statearr_60048;
})();var statearr_60049_60075 = state_60037__$1;(statearr_60049_60075[2] = null);
(statearr_60049_60075[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 10))
{var inst_60005 = (state_60037[2]);var inst_60006 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_60037__$1 = (function (){var statearr_60050 = state_60037;(statearr_60050[11] = inst_60005);
return statearr_60050;
})();var statearr_60051_60076 = state_60037__$1;(statearr_60051_60076[2] = inst_60006);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60037__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 11))
{var inst_60001 = (state_60037[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_60037,10,Object,null,9);var inst_60010 = chs__$1.call(null,inst_60001);var inst_60011 = done.call(null,inst_60001);var inst_60012 = cljs.core.async.take_BANG_.call(null,inst_60010,inst_60011);var state_60037__$1 = state_60037;var statearr_60052_60077 = state_60037__$1;(statearr_60052_60077[2] = inst_60012);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60037__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 12))
{var inst_60023 = (state_60037[12]);var inst_60023__$1 = (state_60037[2]);var inst_60024 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_60023__$1);var state_60037__$1 = (function (){var statearr_60053 = state_60037;(statearr_60053[12] = inst_60023__$1);
return statearr_60053;
})();if(cljs.core.truth_(inst_60024))
{var statearr_60054_60078 = state_60037__$1;(statearr_60054_60078[1] = 13);
} else
{var statearr_60055_60079 = state_60037__$1;(statearr_60055_60079[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 13))
{var inst_60026 = cljs.core.async.close_BANG_.call(null,out);var state_60037__$1 = state_60037;var statearr_60056_60080 = state_60037__$1;(statearr_60056_60080[2] = inst_60026);
(statearr_60056_60080[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 14))
{var inst_60023 = (state_60037[12]);var inst_60028 = cljs.core.apply.call(null,f,inst_60023);var state_60037__$1 = state_60037;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60037__$1,16,out,inst_60028);
} else
{if((state_val_60038 === 15))
{var inst_60033 = (state_60037[2]);var state_60037__$1 = state_60037;var statearr_60057_60081 = state_60037__$1;(statearr_60057_60081[2] = inst_60033);
(statearr_60057_60081[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60038 === 16))
{var inst_60030 = (state_60037[2]);var state_60037__$1 = (function (){var statearr_60058 = state_60037;(statearr_60058[13] = inst_60030);
return statearr_60058;
})();var statearr_60059_60082 = state_60037__$1;(statearr_60059_60082[2] = null);
(statearr_60059_60082[1] = 2);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_60063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_60063[0] = state_machine__6202__auto__);
(statearr_60063[1] = 1);
return statearr_60063;
});
var state_machine__6202__auto____1 = (function (state_60037){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_60037);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e60064){if((e60064 instanceof Object))
{var ex__6205__auto__ = e60064;var statearr_60065_60083 = state_60037;(statearr_60065_60083[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60037);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60084 = state_60037;
state_60037 = G__60084;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_60037){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_60037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_60066 = f__6217__auto__.call(null);(statearr_60066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___60067);
return statearr_60066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6216__auto___60192 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_60168){var state_val_60169 = (state_60168[1]);if((state_val_60169 === 1))
{var inst_60139 = cljs.core.vec.call(null,chs);var inst_60140 = inst_60139;var state_60168__$1 = (function (){var statearr_60170 = state_60168;(statearr_60170[7] = inst_60140);
return statearr_60170;
})();var statearr_60171_60193 = state_60168__$1;(statearr_60171_60193[2] = null);
(statearr_60171_60193[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60169 === 2))
{var inst_60140 = (state_60168[7]);var inst_60142 = cljs.core.count.call(null,inst_60140);var inst_60143 = (inst_60142 > 0);var state_60168__$1 = state_60168;if(cljs.core.truth_(inst_60143))
{var statearr_60172_60194 = state_60168__$1;(statearr_60172_60194[1] = 4);
} else
{var statearr_60173_60195 = state_60168__$1;(statearr_60173_60195[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60169 === 3))
{var inst_60166 = (state_60168[2]);var state_60168__$1 = state_60168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60168__$1,inst_60166);
} else
{if((state_val_60169 === 4))
{var inst_60140 = (state_60168[7]);var state_60168__$1 = state_60168;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_60168__$1,7,inst_60140);
} else
{if((state_val_60169 === 5))
{var inst_60162 = cljs.core.async.close_BANG_.call(null,out);var state_60168__$1 = state_60168;var statearr_60174_60196 = state_60168__$1;(statearr_60174_60196[2] = inst_60162);
(statearr_60174_60196[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60169 === 6))
{var inst_60164 = (state_60168[2]);var state_60168__$1 = state_60168;var statearr_60175_60197 = state_60168__$1;(statearr_60175_60197[2] = inst_60164);
(statearr_60175_60197[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60169 === 7))
{var inst_60147 = (state_60168[8]);var inst_60148 = (state_60168[9]);var inst_60147__$1 = (state_60168[2]);var inst_60148__$1 = cljs.core.nth.call(null,inst_60147__$1,0,null);var inst_60149 = cljs.core.nth.call(null,inst_60147__$1,1,null);var inst_60150 = (inst_60148__$1 == null);var state_60168__$1 = (function (){var statearr_60176 = state_60168;(statearr_60176[8] = inst_60147__$1);
(statearr_60176[10] = inst_60149);
(statearr_60176[9] = inst_60148__$1);
return statearr_60176;
})();if(cljs.core.truth_(inst_60150))
{var statearr_60177_60198 = state_60168__$1;(statearr_60177_60198[1] = 8);
} else
{var statearr_60178_60199 = state_60168__$1;(statearr_60178_60199[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60169 === 8))
{var inst_60147 = (state_60168[8]);var inst_60149 = (state_60168[10]);var inst_60148 = (state_60168[9]);var inst_60140 = (state_60168[7]);var inst_60152 = (function (){var c = inst_60149;var v = inst_60148;var vec__60145 = inst_60147;var cs = inst_60140;return ((function (c,v,vec__60145,cs,inst_60147,inst_60149,inst_60148,inst_60140,state_val_60169){
return (function (p1__60085_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__60085_SHARP_);
});
;})(c,v,vec__60145,cs,inst_60147,inst_60149,inst_60148,inst_60140,state_val_60169))
})();var inst_60153 = cljs.core.filterv.call(null,inst_60152,inst_60140);var inst_60140__$1 = inst_60153;var state_60168__$1 = (function (){var statearr_60179 = state_60168;(statearr_60179[7] = inst_60140__$1);
return statearr_60179;
})();var statearr_60180_60200 = state_60168__$1;(statearr_60180_60200[2] = null);
(statearr_60180_60200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60169 === 9))
{var inst_60148 = (state_60168[9]);var state_60168__$1 = state_60168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60168__$1,11,out,inst_60148);
} else
{if((state_val_60169 === 10))
{var inst_60160 = (state_60168[2]);var state_60168__$1 = state_60168;var statearr_60182_60201 = state_60168__$1;(statearr_60182_60201[2] = inst_60160);
(statearr_60182_60201[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60169 === 11))
{var inst_60140 = (state_60168[7]);var inst_60157 = (state_60168[2]);var tmp60181 = inst_60140;var inst_60140__$1 = tmp60181;var state_60168__$1 = (function (){var statearr_60183 = state_60168;(statearr_60183[11] = inst_60157);
(statearr_60183[7] = inst_60140__$1);
return statearr_60183;
})();var statearr_60184_60202 = state_60168__$1;(statearr_60184_60202[2] = null);
(statearr_60184_60202[1] = 2);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_60188 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_60188[0] = state_machine__6202__auto__);
(statearr_60188[1] = 1);
return statearr_60188;
});
var state_machine__6202__auto____1 = (function (state_60168){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_60168);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e60189){if((e60189 instanceof Object))
{var ex__6205__auto__ = e60189;var statearr_60190_60203 = state_60168;(statearr_60190_60203[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60189;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60204 = state_60168;
state_60168 = G__60204;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_60168){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_60168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_60191 = f__6217__auto__.call(null);(statearr_60191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___60192);
return statearr_60191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6216__auto___60297 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_60274){var state_val_60275 = (state_60274[1]);if((state_val_60275 === 1))
{var inst_60251 = 0;var state_60274__$1 = (function (){var statearr_60276 = state_60274;(statearr_60276[7] = inst_60251);
return statearr_60276;
})();var statearr_60277_60298 = state_60274__$1;(statearr_60277_60298[2] = null);
(statearr_60277_60298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60275 === 2))
{var inst_60251 = (state_60274[7]);var inst_60253 = (inst_60251 < n);var state_60274__$1 = state_60274;if(cljs.core.truth_(inst_60253))
{var statearr_60278_60299 = state_60274__$1;(statearr_60278_60299[1] = 4);
} else
{var statearr_60279_60300 = state_60274__$1;(statearr_60279_60300[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60275 === 3))
{var inst_60271 = (state_60274[2]);var inst_60272 = cljs.core.async.close_BANG_.call(null,out);var state_60274__$1 = (function (){var statearr_60280 = state_60274;(statearr_60280[8] = inst_60271);
return statearr_60280;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60274__$1,inst_60272);
} else
{if((state_val_60275 === 4))
{var state_60274__$1 = state_60274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60274__$1,7,ch);
} else
{if((state_val_60275 === 5))
{var state_60274__$1 = state_60274;var statearr_60281_60301 = state_60274__$1;(statearr_60281_60301[2] = null);
(statearr_60281_60301[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60275 === 6))
{var inst_60269 = (state_60274[2]);var state_60274__$1 = state_60274;var statearr_60282_60302 = state_60274__$1;(statearr_60282_60302[2] = inst_60269);
(statearr_60282_60302[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60275 === 7))
{var inst_60256 = (state_60274[9]);var inst_60256__$1 = (state_60274[2]);var inst_60257 = (inst_60256__$1 == null);var inst_60258 = cljs.core.not.call(null,inst_60257);var state_60274__$1 = (function (){var statearr_60283 = state_60274;(statearr_60283[9] = inst_60256__$1);
return statearr_60283;
})();if(inst_60258)
{var statearr_60284_60303 = state_60274__$1;(statearr_60284_60303[1] = 8);
} else
{var statearr_60285_60304 = state_60274__$1;(statearr_60285_60304[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60275 === 8))
{var inst_60256 = (state_60274[9]);var state_60274__$1 = state_60274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60274__$1,11,out,inst_60256);
} else
{if((state_val_60275 === 9))
{var state_60274__$1 = state_60274;var statearr_60286_60305 = state_60274__$1;(statearr_60286_60305[2] = null);
(statearr_60286_60305[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60275 === 10))
{var inst_60266 = (state_60274[2]);var state_60274__$1 = state_60274;var statearr_60287_60306 = state_60274__$1;(statearr_60287_60306[2] = inst_60266);
(statearr_60287_60306[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60275 === 11))
{var inst_60251 = (state_60274[7]);var inst_60261 = (state_60274[2]);var inst_60262 = (inst_60251 + 1);var inst_60251__$1 = inst_60262;var state_60274__$1 = (function (){var statearr_60288 = state_60274;(statearr_60288[7] = inst_60251__$1);
(statearr_60288[10] = inst_60261);
return statearr_60288;
})();var statearr_60289_60307 = state_60274__$1;(statearr_60289_60307[2] = null);
(statearr_60289_60307[1] = 2);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_60293 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_60293[0] = state_machine__6202__auto__);
(statearr_60293[1] = 1);
return statearr_60293;
});
var state_machine__6202__auto____1 = (function (state_60274){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_60274);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e60294){if((e60294 instanceof Object))
{var ex__6205__auto__ = e60294;var statearr_60295_60308 = state_60274;(statearr_60295_60308[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60274);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60294;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60309 = state_60274;
state_60274 = G__60309;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_60274){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_60274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_60296 = f__6217__auto__.call(null);(statearr_60296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___60297);
return statearr_60296;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6216__auto___60406 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_60381){var state_val_60382 = (state_60381[1]);if((state_val_60382 === 1))
{var inst_60358 = null;var state_60381__$1 = (function (){var statearr_60383 = state_60381;(statearr_60383[7] = inst_60358);
return statearr_60383;
})();var statearr_60384_60407 = state_60381__$1;(statearr_60384_60407[2] = null);
(statearr_60384_60407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60382 === 2))
{var state_60381__$1 = state_60381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60381__$1,4,ch);
} else
{if((state_val_60382 === 3))
{var inst_60378 = (state_60381[2]);var inst_60379 = cljs.core.async.close_BANG_.call(null,out);var state_60381__$1 = (function (){var statearr_60385 = state_60381;(statearr_60385[8] = inst_60378);
return statearr_60385;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60381__$1,inst_60379);
} else
{if((state_val_60382 === 4))
{var inst_60361 = (state_60381[9]);var inst_60361__$1 = (state_60381[2]);var inst_60362 = (inst_60361__$1 == null);var inst_60363 = cljs.core.not.call(null,inst_60362);var state_60381__$1 = (function (){var statearr_60386 = state_60381;(statearr_60386[9] = inst_60361__$1);
return statearr_60386;
})();if(inst_60363)
{var statearr_60387_60408 = state_60381__$1;(statearr_60387_60408[1] = 5);
} else
{var statearr_60388_60409 = state_60381__$1;(statearr_60388_60409[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60382 === 5))
{var inst_60361 = (state_60381[9]);var inst_60358 = (state_60381[7]);var inst_60365 = cljs.core._EQ_.call(null,inst_60361,inst_60358);var state_60381__$1 = state_60381;if(inst_60365)
{var statearr_60389_60410 = state_60381__$1;(statearr_60389_60410[1] = 8);
} else
{var statearr_60390_60411 = state_60381__$1;(statearr_60390_60411[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60382 === 6))
{var state_60381__$1 = state_60381;var statearr_60392_60412 = state_60381__$1;(statearr_60392_60412[2] = null);
(statearr_60392_60412[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60382 === 7))
{var inst_60376 = (state_60381[2]);var state_60381__$1 = state_60381;var statearr_60393_60413 = state_60381__$1;(statearr_60393_60413[2] = inst_60376);
(statearr_60393_60413[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60382 === 8))
{var inst_60358 = (state_60381[7]);var tmp60391 = inst_60358;var inst_60358__$1 = tmp60391;var state_60381__$1 = (function (){var statearr_60394 = state_60381;(statearr_60394[7] = inst_60358__$1);
return statearr_60394;
})();var statearr_60395_60414 = state_60381__$1;(statearr_60395_60414[2] = null);
(statearr_60395_60414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60382 === 9))
{var inst_60361 = (state_60381[9]);var state_60381__$1 = state_60381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60381__$1,11,out,inst_60361);
} else
{if((state_val_60382 === 10))
{var inst_60373 = (state_60381[2]);var state_60381__$1 = state_60381;var statearr_60396_60415 = state_60381__$1;(statearr_60396_60415[2] = inst_60373);
(statearr_60396_60415[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60382 === 11))
{var inst_60361 = (state_60381[9]);var inst_60370 = (state_60381[2]);var inst_60358 = inst_60361;var state_60381__$1 = (function (){var statearr_60397 = state_60381;(statearr_60397[10] = inst_60370);
(statearr_60397[7] = inst_60358);
return statearr_60397;
})();var statearr_60398_60416 = state_60381__$1;(statearr_60398_60416[2] = null);
(statearr_60398_60416[1] = 2);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_60402 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_60402[0] = state_machine__6202__auto__);
(statearr_60402[1] = 1);
return statearr_60402;
});
var state_machine__6202__auto____1 = (function (state_60381){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_60381);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e60403){if((e60403 instanceof Object))
{var ex__6205__auto__ = e60403;var statearr_60404_60417 = state_60381;(statearr_60404_60417[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60381);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60418 = state_60381;
state_60381 = G__60418;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_60381){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_60381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_60405 = f__6217__auto__.call(null);(statearr_60405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___60406);
return statearr_60405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6216__auto___60553 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_60523){var state_val_60524 = (state_60523[1]);if((state_val_60524 === 1))
{var inst_60486 = (new Array(n));var inst_60487 = inst_60486;var inst_60488 = 0;var state_60523__$1 = (function (){var statearr_60525 = state_60523;(statearr_60525[7] = inst_60488);
(statearr_60525[8] = inst_60487);
return statearr_60525;
})();var statearr_60526_60554 = state_60523__$1;(statearr_60526_60554[2] = null);
(statearr_60526_60554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60524 === 2))
{var state_60523__$1 = state_60523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60523__$1,4,ch);
} else
{if((state_val_60524 === 3))
{var inst_60521 = (state_60523[2]);var state_60523__$1 = state_60523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60523__$1,inst_60521);
} else
{if((state_val_60524 === 4))
{var inst_60491 = (state_60523[9]);var inst_60491__$1 = (state_60523[2]);var inst_60492 = (inst_60491__$1 == null);var inst_60493 = cljs.core.not.call(null,inst_60492);var state_60523__$1 = (function (){var statearr_60527 = state_60523;(statearr_60527[9] = inst_60491__$1);
return statearr_60527;
})();if(inst_60493)
{var statearr_60528_60555 = state_60523__$1;(statearr_60528_60555[1] = 5);
} else
{var statearr_60529_60556 = state_60523__$1;(statearr_60529_60556[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60524 === 5))
{var inst_60491 = (state_60523[9]);var inst_60488 = (state_60523[7]);var inst_60487 = (state_60523[8]);var inst_60496 = (state_60523[10]);var inst_60495 = (inst_60487[inst_60488] = inst_60491);var inst_60496__$1 = (inst_60488 + 1);var inst_60497 = (inst_60496__$1 < n);var state_60523__$1 = (function (){var statearr_60530 = state_60523;(statearr_60530[11] = inst_60495);
(statearr_60530[10] = inst_60496__$1);
return statearr_60530;
})();if(cljs.core.truth_(inst_60497))
{var statearr_60531_60557 = state_60523__$1;(statearr_60531_60557[1] = 8);
} else
{var statearr_60532_60558 = state_60523__$1;(statearr_60532_60558[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60524 === 6))
{var inst_60488 = (state_60523[7]);var inst_60509 = (inst_60488 > 0);var state_60523__$1 = state_60523;if(cljs.core.truth_(inst_60509))
{var statearr_60534_60559 = state_60523__$1;(statearr_60534_60559[1] = 12);
} else
{var statearr_60535_60560 = state_60523__$1;(statearr_60535_60560[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60524 === 7))
{var inst_60519 = (state_60523[2]);var state_60523__$1 = state_60523;var statearr_60536_60561 = state_60523__$1;(statearr_60536_60561[2] = inst_60519);
(statearr_60536_60561[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60524 === 8))
{var inst_60487 = (state_60523[8]);var inst_60496 = (state_60523[10]);var tmp60533 = inst_60487;var inst_60487__$1 = tmp60533;var inst_60488 = inst_60496;var state_60523__$1 = (function (){var statearr_60537 = state_60523;(statearr_60537[7] = inst_60488);
(statearr_60537[8] = inst_60487__$1);
return statearr_60537;
})();var statearr_60538_60562 = state_60523__$1;(statearr_60538_60562[2] = null);
(statearr_60538_60562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60524 === 9))
{var inst_60487 = (state_60523[8]);var inst_60501 = cljs.core.vec.call(null,inst_60487);var state_60523__$1 = state_60523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60523__$1,11,out,inst_60501);
} else
{if((state_val_60524 === 10))
{var inst_60507 = (state_60523[2]);var state_60523__$1 = state_60523;var statearr_60539_60563 = state_60523__$1;(statearr_60539_60563[2] = inst_60507);
(statearr_60539_60563[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60524 === 11))
{var inst_60503 = (state_60523[2]);var inst_60504 = (new Array(n));var inst_60487 = inst_60504;var inst_60488 = 0;var state_60523__$1 = (function (){var statearr_60540 = state_60523;(statearr_60540[12] = inst_60503);
(statearr_60540[7] = inst_60488);
(statearr_60540[8] = inst_60487);
return statearr_60540;
})();var statearr_60541_60564 = state_60523__$1;(statearr_60541_60564[2] = null);
(statearr_60541_60564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60524 === 12))
{var inst_60487 = (state_60523[8]);var inst_60511 = cljs.core.vec.call(null,inst_60487);var state_60523__$1 = state_60523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60523__$1,15,out,inst_60511);
} else
{if((state_val_60524 === 13))
{var state_60523__$1 = state_60523;var statearr_60542_60565 = state_60523__$1;(statearr_60542_60565[2] = null);
(statearr_60542_60565[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60524 === 14))
{var inst_60516 = (state_60523[2]);var inst_60517 = cljs.core.async.close_BANG_.call(null,out);var state_60523__$1 = (function (){var statearr_60543 = state_60523;(statearr_60543[13] = inst_60516);
return statearr_60543;
})();var statearr_60544_60566 = state_60523__$1;(statearr_60544_60566[2] = inst_60517);
(statearr_60544_60566[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60524 === 15))
{var inst_60513 = (state_60523[2]);var state_60523__$1 = state_60523;var statearr_60545_60567 = state_60523__$1;(statearr_60545_60567[2] = inst_60513);
(statearr_60545_60567[1] = 14);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_60549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_60549[0] = state_machine__6202__auto__);
(statearr_60549[1] = 1);
return statearr_60549;
});
var state_machine__6202__auto____1 = (function (state_60523){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_60523);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e60550){if((e60550 instanceof Object))
{var ex__6205__auto__ = e60550;var statearr_60551_60568 = state_60523;(statearr_60551_60568[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60523);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60569 = state_60523;
state_60523 = G__60569;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_60523){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_60523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_60552 = f__6217__auto__.call(null);(statearr_60552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___60553);
return statearr_60552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6216__auto___60712 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6217__auto__ = (function (){var switch__6201__auto__ = (function (state_60682){var state_val_60683 = (state_60682[1]);if((state_val_60683 === 1))
{var inst_60641 = [];var inst_60642 = inst_60641;var inst_60643 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_60682__$1 = (function (){var statearr_60684 = state_60682;(statearr_60684[7] = inst_60642);
(statearr_60684[8] = inst_60643);
return statearr_60684;
})();var statearr_60685_60713 = state_60682__$1;(statearr_60685_60713[2] = null);
(statearr_60685_60713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60683 === 2))
{var state_60682__$1 = state_60682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60682__$1,4,ch);
} else
{if((state_val_60683 === 3))
{var inst_60680 = (state_60682[2]);var state_60682__$1 = state_60682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60682__$1,inst_60680);
} else
{if((state_val_60683 === 4))
{var inst_60646 = (state_60682[9]);var inst_60646__$1 = (state_60682[2]);var inst_60647 = (inst_60646__$1 == null);var inst_60648 = cljs.core.not.call(null,inst_60647);var state_60682__$1 = (function (){var statearr_60686 = state_60682;(statearr_60686[9] = inst_60646__$1);
return statearr_60686;
})();if(inst_60648)
{var statearr_60687_60714 = state_60682__$1;(statearr_60687_60714[1] = 5);
} else
{var statearr_60688_60715 = state_60682__$1;(statearr_60688_60715[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60683 === 5))
{var inst_60643 = (state_60682[8]);var inst_60650 = (state_60682[10]);var inst_60646 = (state_60682[9]);var inst_60650__$1 = f.call(null,inst_60646);var inst_60651 = cljs.core._EQ_.call(null,inst_60650__$1,inst_60643);var inst_60652 = cljs.core.keyword_identical_QMARK_.call(null,inst_60643,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_60653 = (inst_60651) || (inst_60652);var state_60682__$1 = (function (){var statearr_60689 = state_60682;(statearr_60689[10] = inst_60650__$1);
return statearr_60689;
})();if(cljs.core.truth_(inst_60653))
{var statearr_60690_60716 = state_60682__$1;(statearr_60690_60716[1] = 8);
} else
{var statearr_60691_60717 = state_60682__$1;(statearr_60691_60717[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60683 === 6))
{var inst_60642 = (state_60682[7]);var inst_60667 = inst_60642.length;var inst_60668 = (inst_60667 > 0);var state_60682__$1 = state_60682;if(cljs.core.truth_(inst_60668))
{var statearr_60693_60718 = state_60682__$1;(statearr_60693_60718[1] = 12);
} else
{var statearr_60694_60719 = state_60682__$1;(statearr_60694_60719[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60683 === 7))
{var inst_60678 = (state_60682[2]);var state_60682__$1 = state_60682;var statearr_60695_60720 = state_60682__$1;(statearr_60695_60720[2] = inst_60678);
(statearr_60695_60720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60683 === 8))
{var inst_60642 = (state_60682[7]);var inst_60650 = (state_60682[10]);var inst_60646 = (state_60682[9]);var inst_60655 = inst_60642.push(inst_60646);var tmp60692 = inst_60642;var inst_60642__$1 = tmp60692;var inst_60643 = inst_60650;var state_60682__$1 = (function (){var statearr_60696 = state_60682;(statearr_60696[11] = inst_60655);
(statearr_60696[7] = inst_60642__$1);
(statearr_60696[8] = inst_60643);
return statearr_60696;
})();var statearr_60697_60721 = state_60682__$1;(statearr_60697_60721[2] = null);
(statearr_60697_60721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60683 === 9))
{var inst_60642 = (state_60682[7]);var inst_60658 = cljs.core.vec.call(null,inst_60642);var state_60682__$1 = state_60682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60682__$1,11,out,inst_60658);
} else
{if((state_val_60683 === 10))
{var inst_60665 = (state_60682[2]);var state_60682__$1 = state_60682;var statearr_60698_60722 = state_60682__$1;(statearr_60698_60722[2] = inst_60665);
(statearr_60698_60722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60683 === 11))
{var inst_60650 = (state_60682[10]);var inst_60646 = (state_60682[9]);var inst_60660 = (state_60682[2]);var inst_60661 = [];var inst_60662 = inst_60661.push(inst_60646);var inst_60642 = inst_60661;var inst_60643 = inst_60650;var state_60682__$1 = (function (){var statearr_60699 = state_60682;(statearr_60699[12] = inst_60660);
(statearr_60699[13] = inst_60662);
(statearr_60699[7] = inst_60642);
(statearr_60699[8] = inst_60643);
return statearr_60699;
})();var statearr_60700_60723 = state_60682__$1;(statearr_60700_60723[2] = null);
(statearr_60700_60723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60683 === 12))
{var inst_60642 = (state_60682[7]);var inst_60670 = cljs.core.vec.call(null,inst_60642);var state_60682__$1 = state_60682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60682__$1,15,out,inst_60670);
} else
{if((state_val_60683 === 13))
{var state_60682__$1 = state_60682;var statearr_60701_60724 = state_60682__$1;(statearr_60701_60724[2] = null);
(statearr_60701_60724[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60683 === 14))
{var inst_60675 = (state_60682[2]);var inst_60676 = cljs.core.async.close_BANG_.call(null,out);var state_60682__$1 = (function (){var statearr_60702 = state_60682;(statearr_60702[14] = inst_60675);
return statearr_60702;
})();var statearr_60703_60725 = state_60682__$1;(statearr_60703_60725[2] = inst_60676);
(statearr_60703_60725[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60683 === 15))
{var inst_60672 = (state_60682[2]);var state_60682__$1 = state_60682;var statearr_60704_60726 = state_60682__$1;(statearr_60704_60726[2] = inst_60672);
(statearr_60704_60726[1] = 14);
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
});return ((function (switch__6201__auto__){
return (function() {
var state_machine__6202__auto__ = null;
var state_machine__6202__auto____0 = (function (){var statearr_60708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_60708[0] = state_machine__6202__auto__);
(statearr_60708[1] = 1);
return statearr_60708;
});
var state_machine__6202__auto____1 = (function (state_60682){while(true){
var ret_value__6203__auto__ = (function (){try{while(true){
var result__6204__auto__ = switch__6201__auto__.call(null,state_60682);if(cljs.core.keyword_identical_QMARK_.call(null,result__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6204__auto__;
}
break;
}
}catch (e60709){if((e60709 instanceof Object))
{var ex__6205__auto__ = e60709;var statearr_60710_60727 = state_60682;(statearr_60710_60727[5] = ex__6205__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60682);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6203__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60728 = state_60682;
state_60682 = G__60728;
continue;
}
} else
{return ret_value__6203__auto__;
}
break;
}
});
state_machine__6202__auto__ = function(state_60682){
switch(arguments.length){
case 0:
return state_machine__6202__auto____0.call(this);
case 1:
return state_machine__6202__auto____1.call(this,state_60682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6202__auto____0;
state_machine__6202__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6202__auto____1;
return state_machine__6202__auto__;
})()
;})(switch__6201__auto__))
})();var state__6218__auto__ = (function (){var statearr_60711 = f__6217__auto__.call(null);(statearr_60711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6216__auto___60712);
return statearr_60711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6218__auto__);
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