/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

exports.__esModule = true;
exports.SyncHook = require("./SyncHook");                                      //同步串行   不关心监听函数的返回值
exports.SyncBailHook = require("./SyncBailHook");                              //同步串行   只要监听函数中有一个函数的返回值不为 undefined，则跳过剩下所有的逻辑
exports.SyncWaterfallHook = require("./SyncWaterfallHook");                    //同步串行   上一个监听函数的返回值可以传给下一个监听函数
exports.SyncLoopHook = require("./SyncLoopHook");                              //同步循环   当监听函数被触发的时候，如果该监听函数返回true时则这个监听函数会反复执行，
																				//         如果返回 undefined 则表示退出循环
exports.AsyncParallelHook = require("./AsyncParallelHook");                    //异步并发   不关心监听函数的返回值
exports.AsyncParallelBailHook = require("./AsyncParallelBailHook");            //异步并发   只要监听函数的返回值不为 null，就会忽略后面的监听函数执行，
																				//			直接跳跃到callAsync等触发函数绑定的回调函数，然后执行这个被绑定的回调函数
exports.AsyncSeriesHook = require("./AsyncSeriesHook");							//异步串行  不关心callback()的参数
exports.AsyncSeriesBailHook = require("./AsyncSeriesBailHook");					//异步串行   callback()的参数不为null，就会直接执行callAsync等触发函数绑定的回调函数
exports.AsyncSeriesLoopHook = require("./AsyncSeriesLoopHook");					//异步串行   上一个监听函数的中的callback(err, data)的第二个参数,可以作为下一个监听函数的参数。
exports.AsyncSeriesWaterfallHook = require("./AsyncSeriesWaterfallHook");       //异步串行   可以触发handler循环调用。
exports.HookMap = require("./HookMap");
exports.MultiHook = require("./MultiHook");
