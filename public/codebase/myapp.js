/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/codebase/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/myapp.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this;
}() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webix-jet/dist/es6/jet.js":
/*!************************************************!*\
  !*** ./node_modules/webix-jet/dist/es6/jet.js ***!
  \************************************************/
/*! exports provided: plugins, JetApp, JetView, HashRouter, StoreRouter, UrlRouter, EmptyRouter, SubRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetApp", function() { return JetApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetView", function() { return JetView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRouter", function() { return StoreRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRouter", function() { return UrlRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyRouter", function() { return EmptyRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubRouter", function() { return SubRouter; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JetBase = function () {
    function JetBase(webix) {
        _classCallCheck(this, JetBase);

        this.webixJet = true;
        this.webix = webix;
        this._events = [];
        this._subs = {};
        this._data = {};
    }

    JetBase.prototype.getRoot = function getRoot() {
        return this._root;
    };

    JetBase.prototype.destructor = function destructor() {
        this._detachEvents();
        this._destroySubs();
        this._events = this._container = this.app = this._parent = this._root = null;
    };

    JetBase.prototype.setParam = function setParam(id, value, url) {
        if (this._data[id] !== value) {
            this._data[id] = value;
            this._segment.update(id, value, 0);
            if (url) {
                this.show(null);
            }
        }
    };

    JetBase.prototype.getParam = function getParam(id, parent) {
        var value = this._data[id];
        if (typeof value !== "undefined" || !parent) {
            return value;
        }
        var view = this.getParentView();
        if (view) {
            return view.getParam(id, parent);
        }
    };

    JetBase.prototype.getUrl = function getUrl() {
        return this._segment.suburl();
    };

    JetBase.prototype.getUrlString = function getUrlString() {
        return this._segment.toString();
    };

    JetBase.prototype.getParentView = function getParentView() {
        return this._parent;
    };

    JetBase.prototype.$$ = function $$(id) {
        if (typeof id === "string") {
            var root = this.getRoot();
            return root.queryView(function (obj) {
                return (obj.config.id === id || obj.config.localId === id) && obj.$scope === root.$scope;
            }, "self");
        } else {
            return id;
        }
    };

    JetBase.prototype.on = function on(obj, name, code) {
        var id = obj.attachEvent(name, code);
        this._events.push({ obj: obj, id: id });
        return id;
    };

    JetBase.prototype.contains = function contains(view) {
        for (var key in this._subs) {
            var kid = this._subs[key].view;
            if (kid === view || kid.contains(view)) {
                return true;
            }
        }
        return false;
    };

    JetBase.prototype.getSubView = function getSubView(name) {
        var sub = this.getSubViewInfo(name);
        if (sub) {
            return sub.subview.view;
        }
    };

    JetBase.prototype.getSubViewInfo = function getSubViewInfo(name) {
        var sub = this._subs[name || "default"];
        if (sub) {
            return { subview: sub, parent: this };
        }
        if (name === "_top") {
            this._subs[name] = { url: "", id: null, popup: true };
            return this.getSubViewInfo(name);
        }
        // when called from a child view, searches for nearest parent with subview
        if (this._parent) {
            return this._parent.getSubViewInfo(name);
        }
        return null;
    };

    JetBase.prototype._detachEvents = function _detachEvents() {
        var events = this._events;
        for (var i = events.length - 1; i >= 0; i--) {
            events[i].obj.detachEvent(events[i].id);
        }
    };

    JetBase.prototype._destroySubs = function _destroySubs() {
        // destroy sub views
        for (var key in this._subs) {
            var subView = this._subs[key].view;
            // it possible that subview was not loaded with any content yet
            // so check on null
            if (subView) {
                subView.destructor();
            }
        }
        // reset to prevent memory leaks
        this._subs = {};
    };

    JetBase.prototype._init_url_data = function _init_url_data() {
        var url = this._segment.current();
        this._data = {};
        this.webix.extend(this._data, url.params, true);
    };

    JetBase.prototype._getDefaultSub = function _getDefaultSub() {
        if (this._subs.default) {
            return this._subs.default;
        }
        for (var key in this._subs) {
            var sub = this._subs[key];
            if (!sub.branch && sub.view && key !== "_top") {
                var child = sub.view._getDefaultSub();
                if (child) {
                    return child;
                }
            }
        }
    };

    JetBase.prototype._routed_view = function _routed_view() {
        var parent = this.getParentView();
        if (!parent) {
            return true;
        }
        var sub = parent._getDefaultSub();
        if (!sub && sub !== this) {
            return false;
        }
        return parent._routed_view();
    };

    return JetBase;
}();

function parse(url) {
    // remove starting /
    if (url[0] === "/") {
        url = url.substr(1);
    }
    // split url by "/"
    var parts = url.split("/");
    var chunks = [];
    // for each page in url
    for (var i = 0; i < parts.length; i++) {
        var test = parts[i];
        var result = {};
        // detect params
        // support old 			some:a=b:c=d
        // and new notation		some?a=b&c=d
        var pos = test.indexOf(":");
        if (pos === -1) {
            pos = test.indexOf("?");
        }
        if (pos !== -1) {
            var params = test.substr(pos + 1).split(/[\:\?\&]/g);
            // create hash of named params
            for (var _iterator = params, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var param = _ref;

                var dchunk = param.split("=");
                result[dchunk[0]] = decodeURIComponent(dchunk[1]);
            }
        }
        // store parsed values
        chunks[i] = {
            page: pos > -1 ? test.substr(0, pos) : test,
            params: result,
            isNew: true
        };
    }
    // return array of page objects
    return chunks;
}
function url2str(stack) {
    var url = [];
    for (var _iterator2 = stack, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var chunk = _ref2;

        url.push("/" + chunk.page);
        var params = obj2str(chunk.params);
        if (params) {
            url.push("?" + params);
        }
    }
    return url.join("");
}
function obj2str(obj) {
    var str = [];
    for (var key in obj) {
        if (str.length) {
            str.push("&");
        }
        str.push(key + "=" + encodeURIComponent(obj[key]));
    }
    return str.join("");
}

var Route = function () {
    function Route(route, index) {
        _classCallCheck(this, Route);

        this._next = 1;
        if (typeof route === "string") {
            this.route = {
                url: parse(route),
                path: route
            };
        } else {
            this.route = route;
        }
        this.index = index;
    }

    Route.prototype.current = function current() {
        return this.route.url[this.index];
    };

    Route.prototype.next = function next() {
        return this.route.url[this.index + this._next];
    };

    Route.prototype.suburl = function suburl() {
        return this.route.url.slice(this.index);
    };

    Route.prototype.shift = function shift() {
        return new Route(this.route, this.index + this._next);
    };

    Route.prototype.refresh = function refresh() {
        var url = this.route.url;
        for (var i = this.index + 1; i < url.length; i++) {
            url[i].isNew = true;
        }
    };

    Route.prototype.toString = function toString() {
        var str = url2str(this.suburl());
        return str ? str.substr(1) : "";
    };

    Route.prototype._join = function _join(path, kids) {
        var url = this.route.url;
        if (path === null) {
            // change of parameters, route elements are not affected
            return url;
        }
        var old = this.route.url;
        url = old.slice(0, this.index + (kids ? this._next : 0));
        if (path) {
            url = url.concat(parse(path));
            for (var i = 0; i < url.length; i++) {
                if (old[i]) {
                    url[i].view = old[i].view;
                }
                if (old[i] && url[i].page === old[i].page) {
                    url[i].isNew = false;
                }
            }
        }
        return url;
    };

    Route.prototype.append = function append(path) {
        var url = this._join(path, true);
        this.route.path = url2str(url);
        this.route.url = url;
        return this.route.path;
    };

    Route.prototype.show = function show(path, view, kids) {
        var _this = this;

        var url = this._join(path, kids);
        return new Promise(function (res, rej) {
            var redirect = url2str(url);
            var obj = {
                url: url,
                redirect: redirect,
                confirm: Promise.resolve()
            };
            var app = view ? view.app : null;
            // when creating a new route, it possible that it will not have any content
            // guard is not necessary in such case
            if (app) {
                var result = app.callEvent("app:guard", [obj.redirect, view, obj]);
                if (!result) {
                    rej();
                    return;
                }
            }
            obj.confirm.catch(function () {
                return obj.redirect = null;
            }).then(function () {
                if (obj.redirect === null) {
                    rej();
                    return;
                }
                if (obj.redirect !== redirect) {
                    app.show(obj.redirect);
                    rej();
                    return;
                }
                _this.route.path = redirect;
                _this.route.url = url;
                res();
            });
        });
    };

    Route.prototype.size = function size(n) {
        this._next = n;
    };

    Route.prototype.split = function split() {
        var route = {
            url: this.route.url.slice(this.index + 1),
            path: ""
        };
        if (route.url.length) {
            route.path = url2str(route.url);
        }
        return new Route(route, 0);
    };

    Route.prototype.update = function update(name, value, index) {
        var chunk = this.route.url[this.index + (index || 0)];
        if (!chunk) {
            this.route.url.push({ page: "", params: {} });
            return this.update(name, value, index);
        }
        if (name === "") {
            chunk.page = value;
        } else {
            chunk.params[name] = value;
        }
        this.route.path = url2str(this.route.url);
    };

    return Route;
}();

var JetView = function (_JetBase) {
    _inherits(JetView, _JetBase);

    function JetView(app, config) {
        _classCallCheck(this, JetView);

        var _this2 = _possibleConstructorReturn(this, _JetBase.call(this, app.webix));

        _this2.app = app;
        //this.$config = config;
        _this2._children = [];
        return _this2;
    }

    JetView.prototype.ui = function ui(_ui, config) {
        config = config || {};
        var container = config.container || _ui.container;
        var jetview = this.app.createView(_ui);
        this._children.push(jetview);
        jetview.render(container, this._segment, this);
        if ((typeof _ui === "undefined" ? "undefined" : _typeof(_ui)) !== "object" || _ui instanceof JetBase) {
            // raw webix UI
            return jetview;
        } else {
            return jetview.getRoot();
        }
    };

    JetView.prototype.show = function show(path, config) {
        config = config || {};
        // convert parameters object to url
        if ((typeof path === "undefined" ? "undefined" : _typeof(path)) === "object") {
            for (var key in path) {
                this.setParam(key, path[key]);
            }
            path = null;
        } else {
            // deligate to app in case of root prefix
            if (path.substr(0, 1) === "/") {
                return this.app.show(path);
            }
            // local path, do nothing
            if (path.indexOf("./") === 0) {
                path = path.substr(2);
            }
            // parent path, call parent view
            if (path.indexOf("../") === 0) {
                var parent = this.getParentView();
                if (parent) {
                    return parent.show(path.substr(3), config);
                } else {
                    return this.app.show("/" + path.substr(3));
                }
            }
            var sub = this.getSubViewInfo(config.target);
            if (sub) {
                if (sub.parent !== this) {
                    return sub.parent.show(path, config);
                } else if (config.target && config.target !== "default") {
                    return this._renderFrameLock(config.target, sub.subview, path);
                }
            } else {
                if (path) {
                    return this.app.show("/" + path);
                }
            }
        }
        return this._show(this._segment, path, this);
    };

    JetView.prototype._show = function _show(segment, path, view) {
        var _this3 = this;

        return segment.show(path, view, true).then(function () {
            _this3._init_url_data();
            return _this3._urlChange();
        }).then(function () {
            if (segment.route.linkRouter) {
                _this3.app.getRouter().set(segment.route.path, { silent: true });
                _this3.app.callEvent("app:route", [segment.route.path]);
            }
        });
    };

    JetView.prototype.init = function init(_$view, _$) {
        // stub
    };

    JetView.prototype.ready = function ready(_$view, _$url) {
        // stub
    };

    JetView.prototype.config = function config() {
        this.app.webix.message("View:Config is not implemented");
    };

    JetView.prototype.urlChange = function urlChange(_$view, _$url) {
        // stub
    };

    JetView.prototype.destroy = function destroy() {
        // stub
    };

    JetView.prototype.destructor = function destructor() {
        this.destroy();
        this._destroyKids();
        // destroy actual UI
        this._root.destructor();
        _JetBase.prototype.destructor.call(this);
    };

    JetView.prototype.use = function use(plugin, config) {
        plugin(this.app, this, config);
    };

    JetView.prototype.refresh = function refresh() {
        var url = this.getUrl();
        this.destroy();
        this._destroyKids();
        this._destroySubs();
        this._detachEvents();
        if (this._container.tagName) {
            this._root.destructor();
        }
        this._segment.refresh();
        return this._render(this._segment);
    };

    JetView.prototype.render = function render(root, url, parent) {
        var _this4 = this;

        if (typeof url === "string") {
            url = new Route(url, 0);
        }
        this._segment = url;
        this._parent = parent;
        this._init_url_data();
        root = root || document.body;
        var _container = typeof root === "string" ? this.webix.toNode(root) : root;
        if (this._container !== _container) {
            this._container = _container;
            return this._render(url);
        } else {
            return this._urlChange().then(function () {
                return _this4.getRoot();
            });
        }
    };

    JetView.prototype._render = function _render(url) {
        var _this5 = this;

        var config = this.config();
        if (config.then) {
            return config.then(function (cfg) {
                return _this5._render_final(cfg, url);
            });
        } else {
            return this._render_final(config, url);
        }
    };

    JetView.prototype._render_final = function _render_final(config, url) {
        var _this6 = this;

        // get previous view in the same slot
        var slot = null;
        var container = null;
        var show = false;
        if (!this._container.tagName) {
            slot = this._container;
            if (slot.popup) {
                container = document.body;
                show = true;
            } else {
                container = this.webix.$$(slot.id);
            }
        } else {
            container = this._container;
        }
        // view already destroyed
        if (!this.app || !container) {
            return Promise.reject(null);
        }
        var response = void 0;
        var current = this._segment.current();
        // using wrapper object, so ui can be changed from app:render event
        var result = { ui: {} };
        this.app.copyConfig(config, result.ui, this._subs);
        this.app.callEvent("app:render", [this, url, result]);
        result.ui.$scope = this;
        /* destroy old HTML attached views before creating new one */
        if (!slot && current.isNew && current.view) {
            current.view.destructor();
        }
        try {
            // special handling for adding inside of multiview - preserve old id
            if (slot && !show) {
                var oldui = container;
                var parent = oldui.getParentView();
                if (parent && parent.name === "multiview" && !result.ui.id) {
                    result.ui.id = oldui.config.id;
                }
            }
            this._root = this.app.webix.ui(result.ui, container);
            var asWin = this._root;
            // check for url added to ignore this.ui calls
            if (show && asWin.setPosition && !asWin.isVisible()) {
                asWin.show();
            }
            // check, if we are replacing some older view
            if (slot) {
                if (slot.view && slot.view !== this && slot.view !== this.app) {
                    slot.view.destructor();
                }
                slot.id = this._root.config.id;
                if (this.getParentView() || !this.app.app) slot.view = this;else {
                    // when we have subapp, set whole app as a view
                    // so on destruction, the whole app will be destroyed
                    slot.view = this.app;
                }
            }
            if (current.isNew) {
                current.view = this;
                current.isNew = false;
            }
            response = Promise.resolve(this._init(this._root, url)).then(function () {
                return _this6._urlChange().then(function () {
                    _this6._initUrl = null;
                    return _this6.ready(_this6._root, url.suburl());
                });
            });
        } catch (e) {
            response = Promise.reject(e);
        }
        return response.catch(function (err) {
            return _this6._initError(_this6, err);
        });
    };

    JetView.prototype._init = function _init(view, url) {
        return this.init(view, url.suburl());
    };

    JetView.prototype._urlChange = function _urlChange() {
        var _this7 = this;

        this.app.callEvent("app:urlchange", [this, this._segment]);
        var waits = [];
        for (var key in this._subs) {
            var frame = this._subs[key];
            var wait = this._renderFrameLock(key, frame, null);
            if (wait) {
                waits.push(wait);
            }
        }
        return Promise.all(waits).then(function () {
            return _this7.urlChange(_this7._root, _this7._segment.suburl());
        });
    };

    JetView.prototype._renderFrameLock = function _renderFrameLock(key, frame, path) {
        // if subview is not occupied by some rendering yet
        if (!frame.lock) {
            // retreive and store rendering end promise
            var lock = this._renderFrame(key, frame, path);
            if (lock) {
                // clear lock after frame rendering
                // as promise.finally is not supported by  Webix lesser than 6.2
                // using a more verbose notation
                frame.lock = lock.then(function () {
                    return frame.lock = null;
                }, function () {
                    return frame.lock = null;
                });
            }
        }
        // return rendering end promise
        return frame.lock;
    };

    JetView.prototype._renderFrame = function _renderFrame(key, frame, path) {
        var _this8 = this;

        //default route
        if (key === "default") {
            if (this._segment.next()) {
                // we have a next segment in url, render it
                return this._createSubView(frame, this._segment.shift());
            } else if (frame.view && frame.popup) {
                // there is no next segment, delete the existing sub-view
                frame.view.destructor();
                frame.view = null;
            }
        }
        //if new path provided, set it to the frame
        if (path !== null) {
            frame.url = path;
        }
        // in case of routed sub-view
        if (frame.route) {
            // we have a new path for sub-view
            if (path !== null) {
                return frame.route.show(path, frame.view).then(function () {
                    return _this8._createSubView(frame, frame.route);
                });
            }
            // do not trigger onChange for isolated sub-views
            if (frame.branch) {
                return;
            }
        }
        var view = frame.view;
        // if view doesn't exists yet, init it
        if (!view && frame.url) {
            if (typeof frame.url === "string") {
                // string, so we have isolated subview url
                frame.route = new Route(frame.url, 0);
                return this._createSubView(frame, frame.route);
            } else {
                // object, so we have an embeded subview
                if (typeof frame.url === "function" && !(view instanceof frame.url)) {
                    view = new frame.url(this.app, "");
                }
                if (!view) {
                    view = frame.url;
                }
            }
        }
        // trigger onChange for already existed view
        if (view) {
            return view.render(frame, frame.route || this._segment, this);
        }
    };

    JetView.prototype._initError = function _initError(view, err) {
        /*
            if view is destroyed, ignore any view related errors
        */
        if (this.app) {
            this.app.error("app:error:initview", [err, view]);
        }
        return true;
    };

    JetView.prototype._createSubView = function _createSubView(sub, suburl) {
        var _this9 = this;

        return this.app.createFromURL(suburl.current(), sub.view).then(function (view) {
            return view.render(sub, suburl, _this9);
        });
    };

    JetView.prototype._destroyKids = function _destroyKids() {
        // destroy child views
        var uis = this._children;
        for (var i = uis.length - 1; i >= 0; i--) {
            if (uis[i] && uis[i].destructor) {
                uis[i].destructor();
            }
        }
        // reset vars for better GC processing
        this._children = [];
    };

    return JetView;
}(JetBase);

// wrapper for raw objects and Jet 1.x structs


var JetViewRaw = function (_JetView) {
    _inherits(JetViewRaw, _JetView);

    function JetViewRaw(app, config) {
        _classCallCheck(this, JetViewRaw);

        var _this10 = _possibleConstructorReturn(this, _JetView.call(this, app, config));

        _this10._ui = config.ui;
        return _this10;
    }

    JetViewRaw.prototype.config = function config() {
        return this._ui;
    };

    return JetViewRaw;
}(JetView);

var SubRouter = function () {
    function SubRouter(cb, config, app) {
        _classCallCheck(this, SubRouter);

        this.path = "";
        this.app = app;
    }

    SubRouter.prototype.set = function set(path, config) {
        this.path = path;
        var a = this.app;
        a.app.getRouter().set(a._segment.append(this.path), { silent: true });
    };

    SubRouter.prototype.get = function get() {
        return this.path;
    };

    return SubRouter;
}();

var _once = true;

var JetAppBase = function (_JetBase2) {
    _inherits(JetAppBase, _JetBase2);

    function JetAppBase(config) {
        _classCallCheck(this, JetAppBase);

        var webix = (config || {}).webix || window.webix;

        // init config
        var _this11 = _possibleConstructorReturn(this, _JetBase2.call(this, webix));

        _this11.config = _this11.webix.extend({
            name: "App",
            version: "1.0",
            start: "/home"
        }, config, true);
        _this11.app = _this11.config.app;
        _this11.ready = Promise.resolve();
        _this11._services = {};
        _this11.webix.extend(_this11, _this11.webix.EventSystem);
        return _this11;
    }

    JetAppBase.prototype.getUrl = function getUrl() {
        return this._subSegment.suburl();
    };

    JetAppBase.prototype.getUrlString = function getUrlString() {
        return this._subSegment.toString();
    };

    JetAppBase.prototype.getService = function getService(name) {
        var obj = this._services[name];
        if (typeof obj === "function") {
            obj = this._services[name] = obj(this);
        }
        return obj;
    };

    JetAppBase.prototype.setService = function setService(name, handler) {
        this._services[name] = handler;
    };

    JetAppBase.prototype.destructor = function destructor() {
        this.getSubView().destructor();
        _JetBase2.prototype.destructor.call(this);
    };
    // copy object and collect extra handlers


    JetAppBase.prototype.copyConfig = function copyConfig(obj, target, config) {
        // raw ui config
        if (obj instanceof JetBase || typeof obj === "function" && obj.prototype instanceof JetBase) {
            obj = { $subview: obj };
        }
        // subview placeholder
        if (typeof obj.$subview != "undefined") {
            return this.addSubView(obj, target, config);
        }
        // process sub-properties
        target = target || (obj instanceof Array ? [] : {});
        for (var method in obj) {
            var point = obj[method];
            // view class
            if (typeof point === "function" && point.prototype instanceof JetBase) {
                point = { $subview: point };
            }
            if (point && (typeof point === "undefined" ? "undefined" : _typeof(point)) === "object" && !(point instanceof this.webix.DataCollection) && !(point instanceof RegExp)) {
                if (point instanceof Date) {
                    target[method] = new Date(point);
                } else {
                    var copy = this.copyConfig(point, point instanceof Array ? [] : {}, config);
                    if (copy !== null) {
                        target[method] = copy;
                    }
                }
            } else {
                target[method] = point;
            }
        }
        return target;
    };

    JetAppBase.prototype.getRouter = function getRouter() {
        return this.$router;
    };

    JetAppBase.prototype.clickHandler = function clickHandler(e) {
        if (e) {
            var target = e.target || e.srcElement;
            if (target && target.getAttribute) {
                var trigger = target.getAttribute("trigger");
                if (trigger) {
                    this._forView(target, function (view) {
                        return view.app.trigger(trigger);
                    });
                }
                var route = target.getAttribute("route");
                if (route) {
                    this._forView(target, function (view) {
                        return view.show(route);
                    });
                }
            }
        }
    };

    JetAppBase.prototype.getRoot = function getRoot() {
        return this.getSubView().getRoot();
    };

    JetAppBase.prototype.refresh = function refresh() {
        var _this12 = this;

        if (!this._subSegment) {
            return Promise.resolve(null);
        }
        return this.getSubView().refresh().then(function (view) {
            _this12.callEvent("app:route", [_this12.getUrl()]);
            return view;
        });
    };

    JetAppBase.prototype.loadView = function loadView(url) {
        var _this13 = this;

        var views = this.config.views;
        var result = null;
        if (url === "") {
            return Promise.resolve(this._loadError("", new Error("Webix Jet: Empty url segment")));
        }
        try {
            if (views) {
                if (typeof views === "function") {
                    // custom loading strategy
                    result = views(url);
                } else {
                    // predefined hash
                    result = views[url];
                }
                if (typeof result === "string") {
                    url = result;
                    result = null;
                }
            }
            if (!result) {
                if (url === "_blank") {
                    result = {};
                } else {
                    result = this._loadViewDynamic(url);
                }
            }
        } catch (e) {
            result = this._loadError(url, e);
        }
        // custom handler can return view or its promise
        if (!result.then) {
            result = Promise.resolve(result);
        }
        // set error handler
        result = result.then(function (module) {
            return module.__esModule ? module.default : module;
        }).catch(function (err) {
            return _this13._loadError(url, err);
        });
        return result;
    };

    JetAppBase.prototype._forView = function _forView(target, handler) {
        var view = this.webix.$$(target);
        if (view) {
            handler(view.$scope);
        }
    };

    JetAppBase.prototype._loadViewDynamic = function _loadViewDynamic(url) {
        return null;
    };

    JetAppBase.prototype.createFromURL = function createFromURL(chunk, now) {
        var _this14 = this;

        var view = void 0;
        if (chunk.isNew || !chunk.view) {
            view = this.loadView(chunk.page).then(function (ui) {
                return _this14.createView(ui, name);
            });
        } else {
            view = Promise.resolve(chunk.view);
        }
        return view;
    };

    JetAppBase.prototype.createView = function createView(ui, name) {
        var obj = void 0;
        if (typeof ui === "function") {
            if (ui.prototype instanceof JetAppBase) {
                // UI class
                return new ui({ app: this, name: name, router: SubRouter });
            } else if (ui.prototype instanceof JetBase) {
                // UI class
                return new ui(this, { name: name });
            } else {
                // UI factory functions
                ui = ui(this);
            }
        }
        if (ui instanceof JetBase) {
            obj = ui;
        } else {
            // UI object
            obj = new JetViewRaw(this, { name: name, ui: ui });
        }
        return obj;
    };
    // show view path


    JetAppBase.prototype.show = function show(url) {
        return this.render(this._container, url || this.config.start);
    };
    // event helpers


    JetAppBase.prototype.trigger = function trigger(name) {
        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        this.apply(name, rest);
    };

    JetAppBase.prototype.apply = function apply(name, data) {
        this.callEvent(name, data);
    };

    JetAppBase.prototype.action = function action(name) {
        return this.webix.bind(function () {
            for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = arguments[_key2];
            }

            this.apply(name, rest);
        }, this);
    };

    JetAppBase.prototype.on = function on(name, handler) {
        this.attachEvent(name, handler);
    };

    JetAppBase.prototype.use = function use(plugin, config) {
        plugin(this, null, config);
    };

    JetAppBase.prototype.error = function error(name, er) {
        this.callEvent(name, er);
        this.callEvent("app:error", er);
        /* tslint:disable */
        if (this.config.debug) {
            for (var i = 0; i < er.length; i++) {
                console.error(er[i]);
                if (er[i] instanceof Error) {
                    var text = er[i].message;
                    if (text.indexOf("Module build failed") === 0) {
                        text = text.replace(/\x1b\[[0-9;]*m/g, "");
                        document.body.innerHTML = "<pre style='font-size:16px; background-color: #ec6873; color: #000; padding:10px;'>" + text + "</pre>";
                    } else {
                        text += "<br><br>Check console for more details";
                        this.webix.message({ type: "error", text: text, expire: -1 });
                    }
                }
            }
            debugger;
        }
        /* tslint:enable */
    };
    // renders top view


    JetAppBase.prototype.render = function render(root, url, parent) {
        var _this15 = this;

        this._container = typeof root === "string" ? this.webix.toNode(root) : root || document.body;
        var firstInit = !this.$router;
        var path = null;
        if (firstInit) {
            if (_once) {
                this.webix.attachEvent("onClick", function (e) {
                    return _this15.clickHandler(e);
                });
                _once = false;
            }
            if (typeof url === "string") {
                url = new Route(url, 0);
            }
            this._subSegment = this._first_start(url);
            this._subSegment.route.linkRouter = true;
        } else {
            if (typeof url === "string") {
                path = url;
            } else {
                if (this.app) {
                    path = url.split().route.path || this.config.start;
                } else {
                    path = url.toString();
                }
            }
        }
        var top = this.getSubView();
        var segment = this._subSegment;
        var ready = segment.show(path, top).then(function () {
            return _this15.createFromURL(segment.current(), top);
        }).then(function (view) {
            return view.render(root, segment);
        }).then(function (base) {
            _this15.$router.set(segment.route.path, { silent: true });
            _this15.callEvent("app:route", [_this15.getUrl()]);
            return base;
        });
        this.ready = this.ready.then(function () {
            return ready;
        });
        return ready;
    };

    JetAppBase.prototype.getSubView = function getSubView() {
        if (this._subSegment) {
            var view = this._subSegment.current().view;
            if (view) return view;
        }
        return new JetView(this, {});
    };

    JetAppBase.prototype._first_start = function _first_start(route) {
        var _this16 = this;

        this._segment = route;
        var cb = function cb(a) {
            return setTimeout(function () {
                _this16.show(a);
            }, 1);
        };
        this.$router = new this.config.router(cb, this.config, this);
        // start animation for top-level app
        if (this._container === document.body && this.config.animation !== false) {
            var node = this._container;
            this.webix.html.addCss(node, "webixappstart");
            setTimeout(function () {
                _this16.webix.html.removeCss(node, "webixappstart");
                _this16.webix.html.addCss(node, "webixapp");
            }, 10);
        }
        if (!route) {
            // if no url defined, check router first
            var urlString = this.$router.get();
            if (!urlString) {
                urlString = this.config.start;
                this.$router.set(urlString, { silent: true });
            }
            route = new Route(urlString, 0);
        } else if (this.app) {
            route.current().view = this;
            if (route.next()) {
                route = route.split();
            } else {
                route = new Route(this.config.start, 0);
            }
        }
        return route;
    };
    // error during view resolving


    JetAppBase.prototype._loadError = function _loadError(url, err) {
        this.error("app:error:resolve", [err, url]);
        return { template: " " };
    };

    JetAppBase.prototype.addSubView = function addSubView(obj, target, config) {
        var url = obj.$subview !== true ? obj.$subview : null;
        var name = obj.name || (url ? this.webix.uid() : "default");
        target.id = obj.id || "s" + this.webix.uid();
        var view = config[name] = {
            id: target.id,
            url: url,
            branch: obj.branch,
            popup: obj.popup
        };
        return view.popup ? null : target;
    };

    return JetAppBase;
}(JetBase);

var HashRouter = function () {
    function HashRouter(cb, config) {
        var _this17 = this;

        _classCallCheck(this, HashRouter);

        this.config = config || {};
        this._detectPrefix();
        this.cb = cb;
        window.onpopstate = function () {
            return _this17.cb(_this17.get());
        };
    }

    HashRouter.prototype.set = function set(path, config) {
        var _this18 = this;

        if (this.config.routes) {
            var compare = path.split("?", 2);
            for (var key in this.config.routes) {
                if (this.config.routes[key] === compare[0]) {
                    path = key + (compare.length > 1 ? "?" + compare[1] : "");
                    break;
                }
            }
        }
        if (this.get() !== path) {
            window.history.pushState(null, null, this.prefix + this.sufix + path);
        }
        if (!config || !config.silent) {
            setTimeout(function () {
                return _this18.cb(path);
            }, 1);
        }
    };

    HashRouter.prototype.get = function get() {
        var path = this._getRaw().replace(this.prefix, "").replace(this.sufix, "");
        path = path !== "/" ? path : "";
        if (this.config.routes) {
            var compare = path.split("?", 2);
            var key = this.config.routes[compare[0]];
            if (key) {
                path = key + (compare.length > 1 ? "?" + compare[1] : "");
            }
        }
        return path;
    };

    HashRouter.prototype._detectPrefix = function _detectPrefix() {
        // use "#!" for backward compatibility
        var sufix = this.config.routerPrefix;
        this.sufix = "#" + (typeof sufix === "undefined" ? "!" : sufix);
        this.prefix = document.location.href.split("#", 2)[0];
    };

    HashRouter.prototype._getRaw = function _getRaw() {
        return document.location.href;
    };

    return HashRouter;
}();

var isPatched = false;
function patch(w) {
    if (isPatched || !w) {
        return;
    }
    isPatched = true;
    // custom promise for IE8
    var win = window;
    if (!win.Promise) {
        win.Promise = w.promise;
    }
    var version = w.version.split(".");
    // will be fixed in webix 5.3
    if (version[0] * 10 + version[1] * 1 < 53) {
        w.ui.freeze = function (handler) {
            // disabled because webix jet 5.0 can't handle resize of scrollview correctly
            // w.ui.$freeze = true;
            var res = handler();
            if (res && res.then) {
                res.then(function (some) {
                    w.ui.$freeze = false;
                    w.ui.resize();
                    return some;
                });
            } else {
                w.ui.$freeze = false;
                w.ui.resize();
            }
            return res;
        };
    }
    // adding views as classes
    var baseAdd = w.ui.baselayout.prototype.addView;
    var baseRemove = w.ui.baselayout.prototype.removeView;
    var config = {
        addView: function addView(view, index) {
            var _this19 = this;

            // trigger logic only for widgets inside of jet-view
            // ignore case when addView used with already initialized widget
            if (this.$scope && this.$scope.webixJet && !view.queryView) {
                var _ret = function () {
                    var jview = _this19.$scope;
                    var subs = {};
                    view = jview.app.copyConfig(view, {}, subs);
                    baseAdd.apply(_this19, [view, index]);

                    var _loop = function _loop(key) {
                        jview._renderFrame(key, subs[key], null).then(function () {
                            jview._subs[key] = subs[key];
                        });
                    };

                    for (var key in subs) {
                        _loop(key);
                    }
                    return {
                        v: view.id
                    };
                }();

                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
            } else {
                return baseAdd.apply(this, arguments);
            }
        },
        removeView: function removeView() {
            baseRemove.apply(this, arguments);
            if (this.$scope && this.$scope.webixJet) {
                var subs = this.$scope._subs;
                // check all sub-views, destroy and clean the removed one
                for (var key in subs) {
                    var test = subs[key];
                    if (!w.$$(test.id)) {
                        test.view.destructor();
                        delete subs[key];
                    }
                }
            }
        }
    };
    w.extend(w.ui.layout.prototype, config, true);
    w.extend(w.ui.baselayout.prototype, config, true);
    // wrapper for using Jet Apps as views
    w.protoUI({
        name: "jetapp",
        $init: function $init(cfg) {
            this.$app = new this.app(cfg);
            var id = w.uid().toString();
            cfg.body = { id: id };
            this.$ready.push(function () {
                this.$app.render({ id: id });
            });
            for (var key in this.$app) {
                var origin = this.$app[key];
                if (typeof origin === "function" && !this[key]) {
                    this[key] = origin.bind(this.$app);
                }
            }
        }
    }, w.ui.proxy);
}

var JetApp = function (_JetAppBase) {
    _inherits(JetApp, _JetAppBase);

    function JetApp(config) {
        _classCallCheck(this, JetApp);

        config.router = config.router || HashRouter;

        var _this20 = _possibleConstructorReturn(this, _JetAppBase.call(this, config));

        patch(_this20.webix);
        return _this20;
    }

    JetApp.prototype._loadViewDynamic = function _loadViewDynamic(url) {
        url = url.replace(/\./g, "/");
        return __webpack_require__("./sources/views sync recursive ^\\.\\/.*$")("./" + url);
    };

    return JetApp;
}(JetAppBase);

var StoreRouter = function () {
    function StoreRouter(cb, config, app) {
        _classCallCheck(this, StoreRouter);

        this.storage = config.storage || app.webix.storage.session;
        this.name = config.storeName || config.id + ":route";
        this.cb = cb;
    }

    StoreRouter.prototype.set = function set(path, config) {
        var _this21 = this;

        this.storage.put(this.name, path);
        if (!config || !config.silent) {
            setTimeout(function () {
                return _this21.cb(path);
            }, 1);
        }
    };

    StoreRouter.prototype.get = function get() {
        return this.storage.get(this.name);
    };

    return StoreRouter;
}();

var UrlRouter = function (_HashRouter) {
    _inherits(UrlRouter, _HashRouter);

    function UrlRouter() {
        _classCallCheck(this, UrlRouter);

        return _possibleConstructorReturn(this, _HashRouter.apply(this, arguments));
    }

    UrlRouter.prototype._detectPrefix = function _detectPrefix() {
        this.prefix = "";
        this.sufix = this.config.routerPrefix || "";
    };

    UrlRouter.prototype._getRaw = function _getRaw() {
        return document.location.pathname;
    };

    return UrlRouter;
}(HashRouter);

var EmptyRouter = function () {
    function EmptyRouter(cb, _$config) {
        _classCallCheck(this, EmptyRouter);

        this.path = "";
        this.cb = cb;
    }

    EmptyRouter.prototype.set = function set(path, config) {
        var _this23 = this;

        this.path = path;
        if (!config || !config.silent) {
            setTimeout(function () {
                return _this23.cb(path);
            }, 1);
        }
    };

    EmptyRouter.prototype.get = function get() {
        return this.path;
    };

    return EmptyRouter;
}();

function UnloadGuard(app, view, config) {
    view.on(app, "app:guard", function (_$url, point, promise) {
        if (point === view || point.contains(view)) {
            var res = config();
            if (res === false) {
                promise.confirm = Promise.reject(res);
            } else {
                promise.confirm = promise.confirm.then(function () {
                    return res;
                });
            }
        }
    });
}

//     (c) 2012-2018 Airbnb, Inc.

// var has = require('has');
function has(store, key) {
    return Object.prototype.hasOwnProperty.call(store, key);
}
// var forEach = require('for-each');
function forEach(obj, handler, context) {
    for (var key in obj) {
        if (has(obj, key)) {
            handler.call(context || obj, obj[key], key, obj);
        }
    }
}
// var trim = require('string.prototype.trim');
function trim(str) {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
// var warning = require('warning');
function warn(message) {
    message = 'Warning: ' + message;
    if (typeof console !== 'undefined') {
        console.error(message);
    }

    try {
        throw new Error(message);
    } catch (x) {}
}

var replace = String.prototype.replace;
var split = String.prototype.split;

// #### Pluralization methods
// The string that separates the different phrase possibilities.
var delimiter = '||||';

var russianPluralGroups = function russianPluralGroups(n) {
    var end = n % 10;
    if (n !== 11 && end === 1) {
        return 0;
    }
    if (2 <= end && end <= 4 && !(n >= 12 && n <= 14)) {
        return 1;
    }
    return 2;
};

// Mapping from pluralization group plural logic.
var pluralTypes = {
    arabic: function arabic(n) {
        // http://www.arabeyes.org/Plural_Forms
        if (n < 3) {
            return n;
        }
        var lastTwo = n % 100;
        if (lastTwo >= 3 && lastTwo <= 10) return 3;
        return lastTwo >= 11 ? 4 : 5;
    },
    bosnian_serbian: russianPluralGroups,
    chinese: function chinese() {
        return 0;
    },
    croatian: russianPluralGroups,
    french: function french(n) {
        return n > 1 ? 1 : 0;
    },
    german: function german(n) {
        return n !== 1 ? 1 : 0;
    },
    russian: russianPluralGroups,
    lithuanian: function lithuanian(n) {
        if (n % 10 === 1 && n % 100 !== 11) {
            return 0;
        }
        return n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19) ? 1 : 2;
    },
    czech: function czech(n) {
        if (n === 1) {
            return 0;
        }
        return n >= 2 && n <= 4 ? 1 : 2;
    },
    polish: function polish(n) {
        if (n === 1) {
            return 0;
        }
        var end = n % 10;
        return 2 <= end && end <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    },
    icelandic: function icelandic(n) {
        return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
    },
    slovenian: function slovenian(n) {
        var lastTwo = n % 100;
        if (lastTwo === 1) {
            return 0;
        }
        if (lastTwo === 2) {
            return 1;
        }
        if (lastTwo === 3 || lastTwo === 4) {
            return 2;
        }
        return 3;
    }
};

// Mapping from pluralization group to individual language codes/locales.
// Will look up based on exact match, if not found and it's a locale will parse the locale
// for language code, and if that does not exist will default to 'en'
var pluralTypeToLanguages = {
    arabic: ['ar'],
    bosnian_serbian: ['bs-Latn-BA', 'bs-Cyrl-BA', 'srl-RS', 'sr-RS'],
    chinese: ['id', 'id-ID', 'ja', 'ko', 'ko-KR', 'lo', 'ms', 'th', 'th-TH', 'zh'],
    croatian: ['hr', 'hr-HR'],
    german: ['fa', 'da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hi-IN', 'hu', 'hu-HU', 'it', 'nl', 'no', 'pt', 'sv', 'tr'],
    french: ['fr', 'tl', 'pt-br'],
    russian: ['ru', 'ru-RU'],
    lithuanian: ['lt'],
    czech: ['cs', 'cs-CZ', 'sk'],
    polish: ['pl'],
    icelandic: ['is'],
    slovenian: ['sl-SL']
};

function langToTypeMap(mapping) {
    var ret = {};
    forEach(mapping, function (langs, type) {
        forEach(langs, function (lang) {
            ret[lang] = type;
        });
    });
    return ret;
}

function pluralTypeName(locale) {
    var langToPluralType = langToTypeMap(pluralTypeToLanguages);
    return langToPluralType[locale] || langToPluralType[split.call(locale, /-/, 1)[0]] || langToPluralType.en;
}

function pluralTypeIndex(locale, count) {
    return pluralTypes[pluralTypeName(locale)](count);
}

function escape(token) {
    return token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function constructTokenRegex(opts) {
    var prefix = opts && opts.prefix || '%{';
    var suffix = opts && opts.suffix || '}';

    if (prefix === delimiter || suffix === delimiter) {
        throw new RangeError('"' + delimiter + '" token is reserved for pluralization');
    }

    return new RegExp(escape(prefix) + '(.*?)' + escape(suffix), 'g');
}

var dollarRegex = /\$/g;
var dollarBillsYall = '$$';
var defaultTokenRegex = /%\{(.*?)\}/g;

// ### transformPhrase(phrase, substitutions, locale)
//
// Takes a phrase string and transforms it by choosing the correct
// plural form and interpolating it.
//
//     transformPhrase('Hello, %{name}!', {name: 'Spike'});
//     // "Hello, Spike!"
//
// The correct plural form is selected if substitutions.smart_count
// is set. You can pass in a number instead of an Object as `substitutions`
// as a shortcut for `smart_count`.
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 1}, 'en');
//     // "1 new message"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 2}, 'en');
//     // "2 new messages"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', 5, 'en');
//     // "5 new messages"
//
// You should pass in a third argument, the locale, to specify the correct plural type.
// It defaults to `'en'` with 2 plural forms.
function transformPhrase(phrase, substitutions, locale, tokenRegex) {
    if (typeof phrase !== 'string') {
        throw new TypeError('Polyglot.transformPhrase expects argument #1 to be string');
    }

    if (substitutions == null) {
        return phrase;
    }

    var result = phrase;
    var interpolationRegex = tokenRegex || defaultTokenRegex;

    // allow number as a pluralization shortcut
    var options = typeof substitutions === 'number' ? { smart_count: substitutions } : substitutions;

    // Select plural form: based on a phrase text that contains `n`
    // plural forms separated by `delimiter`, a `locale`, and a `substitutions.smart_count`,
    // choose the correct plural form. This is only done if `count` is set.
    if (options.smart_count != null && result) {
        var texts = split.call(result, delimiter);
        result = trim(texts[pluralTypeIndex(locale || 'en', options.smart_count)] || texts[0]);
    }

    // Interpolate: Creates a `RegExp` object for each interpolation placeholder.
    result = replace.call(result, interpolationRegex, function (expression, argument) {
        if (!has(options, argument) || options[argument] == null) {
            return expression;
        }
        // Ensure replacement value is escaped to prevent special $-prefixed regex replace tokens.
        return replace.call(options[argument], dollarRegex, dollarBillsYall);
    });

    return result;
}

// ### Polyglot class constructor
function Polyglot(options) {
    var opts = options || {};
    this.phrases = {};
    this.extend(opts.phrases || {});
    this.currentLocale = opts.locale || 'en';
    var allowMissing = opts.allowMissing ? transformPhrase : null;
    this.onMissingKey = typeof opts.onMissingKey === 'function' ? opts.onMissingKey : allowMissing;
    this.warn = opts.warn || warn;
    this.tokenRegex = constructTokenRegex(opts.interpolation);
}

// ### polyglot.locale([locale])
//
// Get or set locale. Internally, Polyglot only uses locale for pluralization.
Polyglot.prototype.locale = function (newLocale) {
    if (newLocale) this.currentLocale = newLocale;
    return this.currentLocale;
};

// ### polyglot.extend(phrases)
//
// Use `extend` to tell Polyglot how to translate a given key.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The key can be any string.  Feel free to call `extend` multiple times;
// it will override any phrases with the same key, but leave existing phrases
// untouched.
//
// It is also possible to pass nested phrase objects, which get flattened
// into an object with the nested keys concatenated using dot notation.
//
//     polyglot.extend({
//       "nav": {
//         "hello": "Hello",
//         "hello_name": "Hello, %{name}",
//         "sidebar": {
//           "welcome": "Welcome"
//         }
//       }
//     });
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}',
//     //   'nav.sidebar.welcome': 'Welcome'
//     // }
//
// `extend` accepts an optional second argument, `prefix`, which can be used
// to prefix every key in the phrases object with some string, using dot
// notation.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     }, "nav");
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}'
//     // }
//
// This feature is used internally to support nested phrase objects.
Polyglot.prototype.extend = function (morePhrases, prefix) {
    forEach(morePhrases, function (phrase, key) {
        var prefixedKey = prefix ? prefix + '.' + key : key;
        if ((typeof phrase === "undefined" ? "undefined" : _typeof(phrase)) === 'object') {
            this.extend(phrase, prefixedKey);
        } else {
            this.phrases[prefixedKey] = phrase;
        }
    }, this);
};

// ### polyglot.unset(phrases)
// Use `unset` to selectively remove keys from a polyglot instance.
//
//     polyglot.unset("some_key");
//     polyglot.unset({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The unset method can take either a string (for the key), or an object hash with
// the keys that you would like to unset.
Polyglot.prototype.unset = function (morePhrases, prefix) {
    if (typeof morePhrases === 'string') {
        delete this.phrases[morePhrases];
    } else {
        forEach(morePhrases, function (phrase, key) {
            var prefixedKey = prefix ? prefix + '.' + key : key;
            if ((typeof phrase === "undefined" ? "undefined" : _typeof(phrase)) === 'object') {
                this.unset(phrase, prefixedKey);
            } else {
                delete this.phrases[prefixedKey];
            }
        }, this);
    }
};

// ### polyglot.clear()
//
// Clears all phrases. Useful for special cases, such as freeing
// up memory if you have lots of phrases but no longer need to
// perform any translation. Also used internally by `replace`.
Polyglot.prototype.clear = function () {
    this.phrases = {};
};

// ### polyglot.replace(phrases)
//
// Completely replace the existing phrases with a new set of phrases.
// Normally, just use `extend` to add more phrases, but under certain
// circumstances, you may want to make sure no old phrases are lying around.
Polyglot.prototype.replace = function (newPhrases) {
    this.clear();
    this.extend(newPhrases);
};

// ### polyglot.t(key, options)
//
// The most-used method. Provide a key, and `t` will return the
// phrase.
//
//     polyglot.t("hello");
//     => "Hello"
//
// The phrase value is provided first by a call to `polyglot.extend()` or
// `polyglot.replace()`.
//
// Pass in an object as the second argument to perform interpolation.
//
//     polyglot.t("hello_name", {name: "Spike"});
//     => "Hello, Spike"
//
// If you like, you can provide a default value in case the phrase is missing.
// Use the special option key "_" to specify a default.
//
//     polyglot.t("i_like_to_write_in_language", {
//       _: "I like to write in %{language}.",
//       language: "JavaScript"
//     });
//     => "I like to write in JavaScript."
//
Polyglot.prototype.t = function (key, options) {
    var phrase, result;
    var opts = options == null ? {} : options;
    if (typeof this.phrases[key] === 'string') {
        phrase = this.phrases[key];
    } else if (typeof opts._ === 'string') {
        phrase = opts._;
    } else if (this.onMissingKey) {
        var onMissingKey = this.onMissingKey;
        result = onMissingKey(key, opts, this.currentLocale, this.tokenRegex);
    } else {
        this.warn('Missing translation for key: "' + key + '"');
        result = key;
    }
    if (typeof phrase === 'string') {
        result = transformPhrase(phrase, opts, this.currentLocale, this.tokenRegex);
    }
    return result;
};

// ### polyglot.has(key)
//
// Check if polyglot has a translation for given key
Polyglot.prototype.has = function (key) {
    return has(this.phrases, key);
};

// export transformPhrase
Polyglot.transformPhrase = function transform(phrase, substitutions, locale) {
    return transformPhrase(phrase, substitutions, locale);
};

var webixPolyglot = Polyglot;

function Locale(app, _view, config) {
    config = config || {};
    var storage = config.storage;
    var lang = storage ? storage.get("lang") || "en" : config.lang || "en";
    function setLangData(name, data, silent) {
        if (data.__esModule) {
            data = data.default;
        }
        var pconfig = { phrases: data };
        if (config.polyglot) {
            app.webix.extend(pconfig, config.polyglot);
        }
        var poly = service.polyglot = new webixPolyglot(pconfig);
        poly.locale(name);
        service._ = app.webix.bind(poly.t, poly);
        lang = name;
        if (storage) {
            storage.put("lang", lang);
        }
        if (config.webix) {
            var locName = config.webix[name];
            if (locName) {
                app.webix.i18n.setLocale(locName);
            }
        }
        if (!silent) {
            return app.refresh();
        }
        return Promise.resolve();
    }
    function getLang() {
        return lang;
    }
    function setLang(name, silent) {
        // ignore setLang if loading by path is disabled
        if (config.path === false) {
            return;
        }
        var path = (config.path ? config.path + "/" : "") + name;
        var data = __webpack_require__("./sources/locales sync recursive ^\\.\\/.*$")("./" + path);
        setLangData(name, data, silent);
    }
    var service = {
        getLang: getLang, setLang: setLang, setLangData: setLangData, _: null, polyglot: null
    };
    app.setService("locale", service);
    setLang(lang, true);
}

function show(view, config, value) {
    if (config.urls) {
        value = config.urls[value] || value;
    } else if (config.param) {
        var _value;

        value = (_value = {}, _value[config.param] = value, _value);
    }
    view.show(value);
}
function Menu(app, view, config) {
    var frame = view.getSubViewInfo().parent;
    var ui = view.$$(config.id || config);
    var silent = false;
    ui.attachEvent("onchange", function () {
        if (!silent) {
            show(frame, config, this.getValue());
        }
    });
    ui.attachEvent("onafterselect", function () {
        if (!silent) {
            var id = null;
            if (ui.setValue) {
                id = this.getValue();
            } else if (ui.getSelectedId) {
                id = ui.getSelectedId();
            }
            show(frame, config, id);
        }
    });
    view.on(app, "app:route", function () {
        var name = "";
        if (config.param) {
            name = view.getParam(config.param, true);
        } else {
            var segment = frame.getUrl()[1];
            if (segment) {
                name = segment.page;
            }
        }
        if (name) {
            silent = true;
            if (ui.setValue && ui.getValue() !== name) {
                ui.setValue(name);
            } else if (ui.select && ui.exists(name) && ui.getSelectedId() !== name) {
                ui.select(name);
            }
            silent = false;
        }
    });
}

var baseicons = {
    good: "check",
    error: "warning",
    saving: "refresh fa-spin"
};
var basetext = {
    good: "Ok",
    error: "Error",
    saving: "Connecting..."
};
function Status(app, view, config) {
    var status = "good";
    var count = 0;
    var iserror = false;
    var expireDelay = config.expire;
    if (!expireDelay && expireDelay !== false) {
        expireDelay = 2000;
    }
    var texts = config.texts || basetext;
    var icons = config.icons || baseicons;
    if (typeof config === "string") {
        config = { target: config };
    }
    function refresh(content) {
        var area = view.$$(config.target);
        if (area) {
            if (!content) {
                content = "<div class='status_" + status + "'><span class='webix_icon fa-" + icons[status] + "'></span> " + texts[status] + "</div>";
            }
            area.setHTML(content);
        }
    }
    function success() {
        count--;
        setStatus("good");
    }
    function fail(err) {
        count--;
        setStatus("error", err);
    }
    function start(promise) {
        count++;
        setStatus("saving");
        if (promise && promise.then) {
            promise.then(success, fail);
        }
    }
    function getStatus() {
        return status;
    }
    function hideStatus() {
        if (count === 0) {
            refresh(" ");
        }
    }
    function setStatus(mode, err) {
        if (count < 0) {
            count = 0;
        }
        if (mode === "saving") {
            status = "saving";
            refresh();
        } else {
            iserror = mode === "error";
            if (count === 0) {
                status = iserror ? "error" : "good";
                if (iserror) {
                    app.error("app:error:server", [err.responseText || err]);
                } else {
                    if (expireDelay) {
                        setTimeout(hideStatus, expireDelay);
                    }
                }
                refresh();
            }
        }
    }
    function track(data) {
        var dp = app.webix.dp(data);
        if (dp) {
            view.on(dp, "onAfterDataSend", start);
            view.on(dp, "onAfterSaveError", function (_id, _obj, response) {
                return fail(response);
            });
            view.on(dp, "onAfterSave", success);
        }
    }
    app.setService("status", {
        getStatus: getStatus,
        setStatus: setStatus,
        track: track
    });
    if (config.remote) {
        view.on(app.webix, "onRemoteCall", start);
    }
    if (config.ajax) {
        view.on(app.webix, "onBeforeAjax", function (_mode, _url, _data, _request, _headers, _files, promise) {
            start(promise);
        });
    }
    if (config.data) {
        track(config.data);
    }
}

function Theme(app, _view, config) {
    config = config || {};
    var storage = config.storage;
    var theme = storage ? storage.get("theme") || "flat-default" : config.theme || "flat-default";
    var service = {
        getTheme: function getTheme() {
            return theme;
        },
        setTheme: function setTheme(name, silent) {
            var parts = name.split("-");
            var links = document.getElementsByTagName("link");
            for (var i = 0; i < links.length; i++) {
                var lname = links[i].getAttribute("title");
                if (lname) {
                    if (lname === name || lname === parts[0]) {
                        links[i].disabled = false;
                    } else {
                        links[i].disabled = true;
                    }
                }
            }
            app.webix.skin.set(parts[0]);
            // remove old css
            app.webix.html.removeCss(document.body, "theme-" + theme);
            // add new css
            app.webix.html.addCss(document.body, "theme-" + name);
            theme = name;
            if (storage) {
                storage.put("theme", name);
            }
            if (!silent) {
                app.refresh();
            }
        }
    };
    app.setService("theme", service);
    service.setTheme(theme, true);
}

function copyParams(data, url, route) {
    for (var i = 0; i < route.length; i++) {
        data[route[i]] = url[i + 1] ? url[i + 1].page : "";
    }
}
function UrlParam(app, view, config) {
    var route = config.route || config;
    var data = {};
    view.on(app, "app:urlchange", function (subview, segment) {
        if (view === subview) {
            copyParams(data, segment.suburl(), route);
            segment.size(route.length + 1);
        }
    });
    var os = view.setParam;
    var og = view.getParam;
    view.setParam = function (name, value, show) {
        var index = route.indexOf(name);
        if (index >= 0) {
            data[name] = value;
            this._segment.update("", value, index + 1);
            if (show) {
                return view.show(null);
            }
        } else {
            return os.call(this, name, value, show);
        }
    };
    view.getParam = function (key, mode) {
        var val = data[key];
        if (typeof val !== "undefined") {
            return val;
        }
        return og.call(this, key, mode);
    };
    copyParams(data, view.getUrl(), route);
}

function User(app, _view, config) {
    config = config || {};
    var login = config.login || "/login";
    var logout = config.logout || "/logout";
    var afterLogin = config.afterLogin || app.config.start;
    var afterLogout = config.afterLogout || "/login";
    var ping = config.ping || 5 * 60 * 1000;
    var model = config.model;
    var user = config.user;
    var service = {
        getUser: function getUser() {
            return user;
        },
        getStatus: function getStatus(server) {
            if (!server) {
                return user !== null;
            }
            return model.status().catch(function () {
                return null;
            }).then(function (data) {
                user = data;
            });
        },
        login: function login(name, pass) {
            return model.login(name, pass).then(function (data) {
                user = data;
                if (!data) {
                    throw new Error("Access denied");
                }
                app.callEvent("app:user:login", [user]);
                app.show(afterLogin);
            });
        },
        logout: function logout() {
            user = null;
            return model.logout().then(function (res) {
                app.callEvent("app:user:logout", []);
                return res;
            });
        }
    };
    function canNavigate(url, obj) {
        if (url === logout) {
            service.logout();
            obj.redirect = afterLogout;
        } else if (url !== login && !service.getStatus()) {
            obj.redirect = login;
        }
    }
    app.setService("user", service);
    app.attachEvent("app:guard", function (url, _$root, obj) {
        if (config.public && config.public(url)) {
            return true;
        }
        if (typeof user === "undefined") {
            obj.confirm = service.getStatus(true).then(function () {
                return canNavigate(url, obj);
            });
        }
        return canNavigate(url, obj);
    });
    if (ping) {
        setInterval(function () {
            return service.getStatus(true);
        }, ping);
    }
}

/*
MIT License
Copyright (c) 2019 XB Software
*/
var webix = window.webix;
if (webix) {
    patch(webix);
}
var plugins = {
    UnloadGuard: UnloadGuard, Locale: Locale, Menu: Menu, Theme: Theme, User: User, Status: Status, UrlParam: UrlParam
};
var w = window;
if (!w.Promise) {
    w.Promise = w.webix.promise;
}


//# sourceMappingURL=jet.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./sources/authorization.js":
/*!**********************************!*\
  !*** ./sources/authorization.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logoutUrl = 'http://localhost:3000/logout';
var loginUrl = 'http://localhost:3000/login';
var registerUrl = 'http://localhost:3000/register';

var Authorization = function () {
	function Authorization() {
		_classCallCheck(this, Authorization);
	}

	Authorization.prototype.register = function register(obj) {
		return webix.ajax().post(registerUrl, obj);
	};

	Authorization.prototype.login = function login(obj) {
		return webix.ajax().post(loginUrl, obj);
	};

	Authorization.prototype.logout = function logout(date) {
		return webix.ajax().post(logoutUrl, date);
	};

	return Authorization;
}();

/* harmony default export */ __webpack_exports__["default"] = (Authorization);

/***/ }),

/***/ "./sources/consts.js":
/*!***************************!*\
  !*** ./sources/consts.js ***!
  \***************************/
/*! exports provided: DUMMYCOVER, SUCCESS, URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUMMYCOVER", function() { return DUMMYCOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
var DUMMYCOVER = 'https://i.pinimg.com/originals/ad/fd/58/adfd5873be3841f0660e6aaa00cde18e.jpg';
var SUCCESS = 2;
var URL = 'http://localhost:3000';



/***/ }),

/***/ "./sources/locales sync recursive ^\\.\\/.*$":
/*!***************************************!*\
  !*** ./sources/locales sync ^\.\/.*$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./sources/locales sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./sources/models/books.js":
/*!*********************************!*\
  !*** ./sources/models/books.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BooksModel = function () {
	function BooksModel() {
		_classCallCheck(this, BooksModel);

		this._data = [];
		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/books/';
	}

	BooksModel.prototype.getDataFromServer = function getDataFromServer(id) {
		var user_id = { user_id: id };
		return webix.ajax().get(this._url, user_id);
	};

	BooksModel.prototype.addItem = function addItem(data) {
		return webix.ajax().post(this._url, data);
	};

	BooksModel.prototype.updateItem = function updateItem(data) {
		return webix.ajax().put(this._url, data);
	};

	BooksModel.prototype.removeItem = function removeItem(id) {
		return webix.ajax().del(this._url, id);
	};

	return BooksModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new BooksModel());

/***/ }),

/***/ "./sources/models/comments.js":
/*!************************************!*\
  !*** ./sources/models/comments.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var CommentsModel = function () {
	function CommentsModel() {
		_classCallCheck(this, CommentsModel);

		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/comments/';
	}

	CommentsModel.prototype.getItems = function getItems(id) {
		return webix.ajax().get('' + this._url + id);
	};

	CommentsModel.prototype.addItem = function addItem(data) {
		return webix.ajax().post(this._url, data);
	};

	CommentsModel.prototype.updateItem = function updateItem(data) {
		return webix.ajax().put(this._url, data);
	};

	return CommentsModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new CommentsModel());

/***/ }),

/***/ "./sources/models/files.js":
/*!*********************************!*\
  !*** ./sources/models/files.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var FilesModel = function () {
	function FilesModel() {
		_classCallCheck(this, FilesModel);

		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/files/';
	}

	FilesModel.prototype.getDataFromServer = function getDataFromServer() {
		return webix.ajax().get(this._url);
	};

	FilesModel.prototype.getItems = function getItems(id) {
		return webix.ajax().get('' + this._url + id);
	};

	FilesModel.prototype.addItem = function addItem(data) {
		return webix.ajax().post(this._url, data);
	};

	FilesModel.prototype.updateItem = function updateItem(data) {
		return webix.ajax().put(this._url, data);
	};

	FilesModel.prototype.downloadItem = function downloadItem(id) {
		return webix.ajax().response('blob').get(this._url + 'download/' + id);
	};

	return FilesModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new FilesModel());

/***/ }),

/***/ "./sources/models/likes.js":
/*!*********************************!*\
  !*** ./sources/models/likes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LikesModel = function () {
	function LikesModel() {
		_classCallCheck(this, LikesModel);

		this._data = [];
		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/likes/';
	}

	LikesModel.prototype.getDataFromServer = function getDataFromServer() {
		return webix.ajax().get(this._url);
	};

	LikesModel.prototype.addLike = function addLike(userId, bookId) {
		var data = {
			userId: userId,
			bookId: bookId
		};

		return webix.ajax().post(this._url, data);
	};

	LikesModel.prototype.removeLike = function removeLike(userId, bookId) {
		var data = {
			userId: userId,
			bookId: bookId
		};

		return webix.ajax().del(this._url, data);
	};

	return LikesModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new LikesModel());

/***/ }),

/***/ "./sources/models/users.js":
/*!*********************************!*\
  !*** ./sources/models/users.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var UsersModel = function () {
	function UsersModel() {
		_classCallCheck(this, UsersModel);

		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/users/';
	}

	UsersModel.prototype.getDataFromServer = function getDataFromServer() {
		return webix.ajax().get(this._url);
	};

	UsersModel.prototype.getItem = function getItem(id) {
		return webix.ajax().get('' + this._url + id);
	};

	UsersModel.prototype.addItem = function addItem(data) {
		return webix.ajax().post(this._url, data);
	};

	UsersModel.prototype.updateItem = function updateItem(data) {
		return webix.ajax().put(this._url, data);
	};

	return UsersModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UsersModel());

/***/ }),

/***/ "./sources/myapp.js":
/*!**************************!*\
  !*** ./sources/myapp.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./sources/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MyApp = function (_JetApp) {
	_inherits(MyApp, _JetApp);

	function MyApp(config) {
		_classCallCheck(this, MyApp);

		var defaults = {
			id: "webix-jet-app",
			version: "1.1.0",
			router:  false ? undefined : webix_jet__WEBPACK_IMPORTED_MODULE_1__["HashRouter"],
			debug: !false,
			start: '/login'
		};

		return _possibleConstructorReturn(this, _JetApp.call(this, _extends({}, defaults, config)));
	}

	return MyApp;
}(webix_jet__WEBPACK_IMPORTED_MODULE_1__["JetApp"]);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);


if (true) {
	webix.ready(function () {
		var app = new MyApp();
		app.attachEvent('app:guard', function (url, view, nav) {
			if (url.indexOf('id') !== -1) {
				var urlParts = url.split('/');
				var targetPart = void 0;

				urlParts.forEach(function (el) {
					if (el.indexOf('id') != -1) {
						targetPart = el;
					}
				});

				var i = targetPart.indexOf('id');
				var role = targetPart.split('.')[0];
				var id = targetPart.slice(i + 3);

				webix.ajax().get('http://localhost:3000/check').then(function (res) {
					var response = res.json();

					if (!response || response.role != role || response.id != id) {
						app.show('/login');
					}
				}, function (error) {
					if (error.status == 401) {
						app.show('/login');
					}
				});
			}
		});

		app.render();
	});
}

/***/ }),

/***/ "./sources/scripts.js":
/*!****************************!*\
  !*** ./sources/scripts.js ***!
  \****************************/
/*! exports provided: toggleElement, addItem, updateItem, formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleElement", function() { return toggleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./sources/consts.js");


var toggleElement = function toggleElement(condition, element) {
	if (condition) {
		element.show();
	} else {
		element.hide();
	}
};

var addItem = function addItem(Model, data, successAction) {
	Model.addItem(data).then(function (response) {

		var status = response.json().serverStatus;
		if (status == _consts__WEBPACK_IMPORTED_MODULE_0__["SUCCESS"]) {
			Model.getDataFromServer().then(function () {
				successAction();
			});
		}
	});
};

var updateItem = function updateItem(Model, data, successAction) {
	Model.updateItem(data).then(function (response) {

		var status = response.json().serverStatus;
		if (status == _consts__WEBPACK_IMPORTED_MODULE_0__["SUCCESS"]) {
			successAction();
		}
	});
};

var formatDate = function formatDate(dbDate) {
	var currentYear = new Date().getFullYear();
	var currentMonth = new Date().getMonth();
	var currentDay = new Date().getDate();
	var currentHours = new Date().getHours();
	var currentDateTime = new Date();

	var commentsYear = new Date(dbDate).getFullYear();
	var commentsMonth = new Date(dbDate).getMonth();
	var commentsDay = new Date(dbDate).getDate();
	var commentsHours = new Date(dbDate).getHours();
	var commentsDateTime = new Date(dbDate);

	var formatDate = webix.Date.strToDate("%i:%s");

	if (currentYear > commentsYear) {
		formatDate = webix.Date.dateToStr("%d-%m-%y");
	} else if (currentMonth > commentsMonth) {
		formatDate = webix.Date.dateToStr("%m-%d");
	} else if (currentDay > commentsDay) {
		formatDate = webix.Date.dateToStr("%D, %H:%i");
	} else if (currentHours > commentsHours) {
		formatDate = webix.Date.dateToStr("%H:%i");
	} else {
		var time = (currentDateTime - commentsDateTime) / 60000;
		return Math.round(time) + " minute(s) ago";
	}

	return formatDate(new Date(dbDate));
};

webix.protoUI({
	name: "activeList",
	defaults: {
		autoheight: true,
		borderless: true,
		type: {
			height: 30
		}
	}
}, webix.ui.list);



/***/ }),

/***/ "./sources/styles/app.css":
/*!********************************!*\
  !*** ./sources/styles/app.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./sources/views sync recursive ^\\.\\/.*$":
/*!*************************************!*\
  !*** ./sources/views sync ^\.\/.*$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin": "./sources/views/admin/index.js",
	"./admin/": "./sources/views/admin/index.js",
	"./admin/index": "./sources/views/admin/index.js",
	"./admin/index.js": "./sources/views/admin/index.js",
	"./admin/userForm": "./sources/views/admin/userForm.js",
	"./admin/userForm.js": "./sources/views/admin/userForm.js",
	"./common/library": "./sources/views/common/library.js",
	"./common/library.js": "./sources/views/common/library.js",
	"./librarian": "./sources/views/librarian/index.js",
	"./librarian/": "./sources/views/librarian/index.js",
	"./librarian/bookCard": "./sources/views/librarian/bookCard.js",
	"./librarian/bookCard.js": "./sources/views/librarian/bookCard.js",
	"./librarian/index": "./sources/views/librarian/index.js",
	"./librarian/index.js": "./sources/views/librarian/index.js",
	"./librarian/library": "./sources/views/librarian/library.js",
	"./librarian/library.js": "./sources/views/librarian/library.js",
	"./login": "./sources/views/login.js",
	"./login.js": "./sources/views/login.js",
	"./reader": "./sources/views/reader/index.js",
	"./reader/": "./sources/views/reader/index.js",
	"./reader/bookCard": "./sources/views/reader/bookCard.js",
	"./reader/bookCard.js": "./sources/views/reader/bookCard.js",
	"./reader/index": "./sources/views/reader/index.js",
	"./reader/index.js": "./sources/views/reader/index.js",
	"./reader/library": "./sources/views/reader/library.js",
	"./reader/library.js": "./sources/views/reader/library.js",
	"./reader/main": "./sources/views/reader/main.js",
	"./reader/main.js": "./sources/views/reader/main.js",
	"./reader/settings": "./sources/views/reader/settings.js",
	"./reader/settings.js": "./sources/views/reader/settings.js",
	"./reader/tops": "./sources/views/reader/tops.js",
	"./reader/tops.js": "./sources/views/reader/tops.js",
	"./register": "./sources/views/register.js",
	"./register.js": "./sources/views/register.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./sources/views sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./sources/views/admin/index.js":
/*!**************************************!*\
  !*** ./sources/views/admin/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authorization */ "./sources/authorization.js");
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/users */ "./sources/models/users.js");
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userForm */ "./sources/views/admin/userForm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var TopView = function (_JetView) {
	_inherits(TopView, _JetView);

	function TopView() {
		_classCallCheck(this, TopView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	TopView.prototype.config = function config() {
		var _this2 = this;

		var header = {
			type: 'header',
			template: 'Users list'
		};

		var logout = {
			view: 'button',
			localId: 'logoutBtn',
			value: 'Logout',
			width: 100,
			type: 'form'
		};

		var dtable = {
			view: 'datatable',
			id: 'usersList',
			columns: [{
				id: 'id',
				hidden: 1
			}, {
				id: 'full_name',
				header: 'Name',
				minWidth: 180,
				fillspace: 1.5
			}, {
				id: 'role_name',
				header: 'Role',
				width: 90
			}, {
				id: 'passport_ID',
				header: 'Passport ID',
				width: 130
			}, {
				id: 'birth_date',
				header: 'Birth date',
				width: 130
			}, {
				id: 'address',
				header: 'Address',
				minWidth: 180,
				fillspace: 1.5
			}, {
				id: 'phone_numbers',
				header: 'Phone number',
				width: 190
			}, {
				id: 'email',
				header: 'Email',
				width: 180
			}, {
				id: 'edit',
				header: 'Edit',
				width: 50,
				template: '{common.editIcon()}'
			}],
			onClick: {
				'wxi-pencil': function wxiPencil(e, id) {
					_this2.editUser(id);
				}
			}
		};

		var addUserBtn = {
			view: 'button',
			value: 'Add user',
			type: 'form',
			width: 100,
			click: function click() {
				_this2.addUser();
			}
		};

		var ui = {
			rows: [{
				type: 'clean',
				cols: [header, logout]
			}, dtable, {
				cols: [{}, addUserBtn, {}]
			}]
		};
		return ui;
	};

	TopView.prototype.init = function init() {
		var _this3 = this;

		_models_users__WEBPACK_IMPORTED_MODULE_2__["default"].getDataFromServer().then(function (dbData) {
			var usersArr = dbData.json();
			usersArr = usersArr.map(function (el) {
				el.full_name = el.user_name + ' ' + el.user_surname;
				var format = webix.Date.dateToStr("%Y-%m-%d");
				el.birth_date = format(new Date(el.birth_date));
				return el;
			});
			_this3.usersData = usersArr;
			$$('usersList').parse(usersArr);
		});

		var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

		this.$$('logoutBtn').attachEvent('onItemClick', function () {
			var app = _this3.app;
			var format = webix.Date.dateToStr("%Y-%m-%d");
			var currentDate = format(new Date());

			authorization.logout({ currentDate: currentDate }).then(function (response) {
				if (response) {
					app.show('/login');
				}
			});
		});

		this._userForm = this.ui(_userForm__WEBPACK_IMPORTED_MODULE_3__["default"]);
	};

	TopView.prototype.editUser = function editUser(id) {
		var user = this.usersData.find(function (el) {
			return el.id == id;
		});
		this._userForm.showWindow(user);
	};

	TopView.prototype.addUser = function addUser() {
		this._userForm.showWindow();
	};

	return TopView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (TopView);

/***/ }),

/***/ "./sources/views/admin/userForm.js":
/*!*****************************************!*\
  !*** ./sources/views/admin/userForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/users */ "./sources/models/users.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var UserForm = function (_JetView) {
	_inherits(UserForm, _JetView);

	function UserForm() {
		_classCallCheck(this, UserForm);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	UserForm.prototype.config = function config() {
		var _this2 = this;

		return {
			view: 'window',
			localId: 'userWindow',
			head: 'Edit user',
			width: 600,
			position: 'center',
			body: {
				rows: [{
					view: 'form',
					localId: 'userForm',
					elements: [{ view: 'text', name: 'id', localId: 'id', hidden: true }, { view: 'text', label: 'First name', name: 'user_name', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Last name', name: 'user_surname', labelWidth: 90, labelAlign: 'right' }, { view: 'combo', label: 'Role', name: 'capabilities_id', labelWidth: 90, labelAlign: 'right', options: [{ id: 1, value: 'reader' }, { id: 2, value: 'labrarian' }, { id: 3, value: 'admin' }] }, { view: 'text', label: 'Passport ID', name: 'passport_ID', labelWidth: 90, labelAlign: 'right' }, { view: 'datepicker', label: 'Birth date', name: 'birth_date', localId: 'birth_date', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Address', name: 'address', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Phone', name: 'phone_numbers', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Email', name: 'email', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Password', name: 'account_password', localId: 'initial_password', labelWidth: 90, labelAlign: 'right' }],
					rules: {
						'capabilities_id': webix.rules.isNotEmpty,
						'email': webix.rules.isNotEmpty,
						'account_password': webix.rules.isNotEmpty
					}
				}, {
					margin: 20,
					paddingY: 10,
					cols: [{}, {
						view: 'button', value: 'Save', type: 'form', localId: 'saveBtn', width: 100,
						click: function click() {
							_this2.saveForm();
						}
					}, {
						view: 'button', value: 'Cancel', width: 100,
						click: function click() {
							_this2.hideWindow();
						}
					}, {}]
				}]
			}
		};
	};

	UserForm.prototype.init = function init() {
		this.form = this.$$('userForm');
		this.window = this.$$('userWindow');
	};

	UserForm.prototype.successAction = function successAction() {
		this.webix.message('Success');
		this.hideWindow();
	};

	UserForm.prototype.showWindow = function showWindow(user) {
		this.isNew = user ? false : true;

		if (this.isNew) {
			this.window.getHead().setHTML('Add user');
			this.window.getHead().refresh();
		} else {
			this.form.setValues(user);
		}

		var initial_password = this.$$('initial_password');
		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(this.isNew, initial_password);

		this.getRoot().show();
	};

	UserForm.prototype.saveForm = function saveForm() {
		var data = this.form.getValues();

		if (this.form.validate()) {
			if (this.isNew) {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["addItem"])(_models_users__WEBPACK_IMPORTED_MODULE_1__["default"], data, this.successAction.bind(this));
			} else {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(_models_users__WEBPACK_IMPORTED_MODULE_1__["default"], data, this.successAction.bind(this));
			}
		}
	};

	UserForm.prototype.hideWindow = function hideWindow() {
		this.form.clearValidation();
		this.form.clear();
		this.getRoot().hide();
	};

	return UserForm;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (UserForm);

/***/ }),

/***/ "./sources/views/common/library.js":
/*!*****************************************!*\
  !*** ./sources/views/common/library.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_books__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/books */ "./sources/models/books.js");
/* harmony import */ var _models_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/files */ "./sources/models/files.js");


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Library = function (_JetView) {
	_inherits(Library, _JetView);

	function Library(app, libraryConfig, bookCard) {
		_classCallCheck(this, Library);

		var _this = _possibleConstructorReturn(this, _JetView.call(this, app));

		_this.libraryConfig = libraryConfig;
		_this.bookCard = bookCard;
		return _this;
	}

	Library.prototype.config = function config() {
		var _this2 = this;

		var header = {
			type: 'header',
			template: '<i class="fas fa-book"></i> List of books',
			css: 'center page_header'
		};

		var dtable = {
			view: 'datatable',
			id: 'dt_library',
			select: true,
			columns: [{
				id: 'id',
				hidden: true
			}, {
				id: 'book_title',
				sort: 'text',
				fillspace: 1,
				header: ['Title', { content: 'textFilter' }]
			}, {
				id: 'author_name',
				sort: 'text',
				fillspace: 1,
				header: ['Author', { content: 'textFilter' }]
			}, {
				id: 'genres',
				sort: 'text',
				width: 80,
				css: 'center',
				header: ['Genres', { content: 'selectFilter' }]
			}, {
				id: 'country_of_publication',
				sort: 'text',
				width: 80,
				css: 'center',
				header: ['Country', { content: 'selectFilter' }]
			}, {
				id: 'year_of_publication',
				sort: 'date',
				width: 80,
				css: 'center',
				format: webix.Date.dateToStr("%Y"),
				header: ['Year', { content: 'dateRangeFilter' }]
			}, {
				id: 'available_copies',
				width: 80,
				css: 'center',
				header: 'Available'
			}, {
				id: 'ebook',
				header: ['eBook', { content: "selectFilter" }],
				width: 70,
				template: function template(obj) {
					return obj.ebook === 'yes' ? '<i class="fas fa-check"></i>' : '';
				}
			}, {
				id: 'viewCol',
				header: 'View',
				css: 'center',
				width: 50,
				template: '<i class="fas fa-eye"></i>'
			}, {
				id: 'editCol',
				header: 'Edit',
				css: 'center',
				width: 50,
				template: '<i class="fas fa-edit"></i>'
			}, {
				id: 'removeCol',
				header: 'Remove',
				css: 'center',
				width: 70,
				template: '<i class="fas fa-trash"></i>'
			}],
			onClick: {
				'fa-eye': function faEye(e, id) {
					_this2.showBookCard(id);
				},
				'fa-edit': function faEdit(e, id) {
					_this2.showBookCard(id);
				},
				'fa-trash': function faTrash(e, id) {
					_this2.removeBook(id);
				}
			}
		};

		return {
			rows: [header, dtable]
		};
	};

	Library.prototype.init = function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
			return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							this.grid = $$('dt_library');

							_context.t0 = this.libraryConfig.role;
							_context.next = _context.t0 === 'reader' ? 4 : _context.t0 === 'librarian' ? 7 : 9;
							break;

						case 4:
							this.grid.getColumnConfig('editCol').hidden = true;
							this.grid.getColumnConfig('removeCol').hidden = true;
							return _context.abrupt('break', 9);

						case 7:
							this.grid.getColumnConfig('viewCol').hidden = true;
							return _context.abrupt('break', 9);

						case 9:
							this.grid.refreshColumns();
							_context.next = 12;
							return this.getData();

						case 12:
							_context.next = 14;
							return this.getFiles();

						case 14:
							this.checkFiles();

							this.grid.parse(this.booksArr);
							this._bookCard = this.ui(this.bookCard);

						case 17:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function init() {
			return _ref.apply(this, arguments);
		}

		return init;
	}();

	Library.prototype.getData = function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
			var user_id, dbData, booksArr;
			return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							user_id = this.getParam("id", true);
							_context2.next = 3;
							return _models_books__WEBPACK_IMPORTED_MODULE_2__["default"].getDataFromServer(user_id);

						case 3:
							dbData = _context2.sent;
							booksArr = dbData.json();


							booksArr = booksArr.map(function (el) {
								el.year_of_publication = new Date(el.year_of_publication);
								return el;
							});
							this.booksArr = booksArr;

						case 7:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		function getData() {
			return _ref2.apply(this, arguments);
		}

		return getData;
	}();

	Library.prototype.getFiles = function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
			var dbData;
			return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return _models_files__WEBPACK_IMPORTED_MODULE_3__["default"].getDataFromServer();

						case 2:
							dbData = _context3.sent;

							this.filesArr = dbData.json();

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		function getFiles() {
			return _ref3.apply(this, arguments);
		}

		return getFiles;
	}();

	Library.prototype.checkFiles = function checkFiles() {
		var _this3 = this;

		this.booksArr.forEach(function (book, i) {
			var isFiles = _this3.filesArr.find(function (el) {
				return el.book_id === book.id;
			});

			if (isFiles) {
				_this3.booksArr[i].ebook = 'yes';
			} else {
				_this3.booksArr[i].ebook = 'no';
			}
		});
	};

	Library.prototype.showBookCard = function showBookCard(id) {
		var book = this.booksArr.find(function (el) {
			return el.id == id;
		});
		this._bookCard.showPopup(book);
	};

	Library.prototype.removeBook = function removeBook(id) {
		_models_books__WEBPACK_IMPORTED_MODULE_2__["default"].removeItem(id);
		return this.grid.remove(id);
	};

	Library.prototype.addBook = function addBook() {
		this._bookCard.showPopup();
	};

	return Library;
}(webix_jet__WEBPACK_IMPORTED_MODULE_1__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (Library);

/***/ }),

/***/ "./sources/views/librarian/bookCard.js":
/*!*********************************************!*\
  !*** ./sources/views/librarian/bookCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/books */ "./sources/models/books.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../consts */ "./sources/consts.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");
/* harmony import */ var _models_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/files */ "./sources/models/files.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BookCard = function (_JetView) {
	_inherits(BookCard, _JetView);

	function BookCard() {
		_classCallCheck(this, BookCard);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	BookCard.prototype.config = function config() {
		var _this2 = this;

		var bookCover = {
			localId: 'bookCover',
			width: 120,
			height: 180,
			css: 'book_cover',
			template: function template(url) {
				return '<div style="background-image: url(' + url + ')" ></div>';
			}
		};

		var bookCard = {
			localId: 'bookCardLibrarian',
			view: 'form',
			borderless: true,
			elements: [{ view: 'text', label: 'Title', labelWidth: 130, width: 310, labelAlign: 'right', name: 'book_title' }, { view: 'text', label: 'Author', labelWidth: 130, width: 310, labelAlign: 'right', name: 'author_name' }, { view: 'combo', label: 'Genres', labelWidth: 130, width: 310, labelAlign: 'right', name: 'genres', options: ['', 'Fiction', 'Fantasy', 'Thriller', 'Horror', 'Mystery', 'Historical', 'Westerns', 'Family', 'Dark comedy'] }, { view: 'text', label: 'Country', labelWidth: 130, width: 310, labelAlign: 'right', name: 'country_of_publication' }, { view: 'text', label: 'Publishing house', labelWidth: 130, width: 310, labelAlign: 'right', name: 'publishing_house' }, { view: 'text', label: 'Available copies', labelWidth: 130, width: 310, labelAlign: 'right', name: 'available_copies' }, { view: 'text', label: 'Pages', labelWidth: 130, width: 310, labelAlign: 'right', name: 'number_of_pages' }, { view: 'text', label: 'Cover photo', labelWidth: 130, width: 310, labelAlign: 'right', name: 'cover_photo' }]
		};

		var addTextFile = {
			view: 'uploader',
			label: '<i class="fas fa-file-upload"></i> Upload text file',
			localId: 'bookFiles',
			type: 'htmlbutton',
			autosend: false,
			width: 150,
			formData: function formData() {
				return {
					user_id: _this2.userId,
					book_id: _this2.bookId
				};
			},
			accept: 'text/plain, application/pdf, .doc, .docx',
			upload: 'http://localhost:3000/files/upload/text',
			link: 'filesList'
		};

		var filesList = {
			view: 'list',
			type: 'uploader',
			id: 'filesList',
			autoheight: true,
			borderless: true
		};

		var addAudioFile = {
			view: 'uploader',
			label: '<i class="fas fa-music"></i> Upload audio',
			localId: 'audioFiles',
			type: 'htmlbutton',
			autosend: false,
			width: 150,
			formData: function formData() {
				return {
					user_id: _this2.userId,
					book_id: _this2.bookId
				};
			},
			accept: '.mp3',
			upload: 'http://localhost:3000/files/upload/audio',
			link: 'audioList'
		};

		var audioList = {
			view: 'list',
			type: 'uploader',
			id: 'audioList',
			autoheight: true,
			borderless: true
		};

		var availableTextFiles = {
			view: 'activeList',
			localId: 'availableTextFiles',
			template: '#name# <span class=\'list_button\'><i class = \'fas fa-times\'></i></span>',
			on: {
				onItemClick: function onItemClick(id) {
					//remove file and record in DB
				}
			}
		};

		var availableAudioFiles = {
			view: "activeList",
			localId: "availableAudioFiles",
			template: "#name#" + "<span class='list_button'><i class = 'fas fa-times'></i></span>"
		};

		var saveBtn = {
			view: 'button',
			type: 'form',
			label: 'Save',
			width: 80,
			click: function click() {
				_this2.saveForm();
			}
		};

		return {
			view: 'popup',
			position: 'center',
			maxHeight: 550,
			body: {
				view: 'scrollview',
				body: {
					rows: [bookCover, bookCard, {
						view: 'template',
						template: 'Files',
						autoheight: true,
						css: 'center'
					}, { height: 2 }, availableTextFiles, availableAudioFiles, filesList, audioList, { height: 15 }, {
						localId: 'addingFilesButtons',
						margin: 10,
						cols: [{}, addTextFile, addAudioFile, {}]
					}, { height: 1 }, {
						paddingY: 10,
						paddingX: 15,
						margin: 10,
						borderless: true,
						cols: [{}, saveBtn, {}]
					}]
				}
			}
		};
	};

	BookCard.prototype.init = function init() {
		this.form = this.$$('bookCardLibrarian');
	};

	BookCard.prototype.showPopup = function showPopup(book) {
		var _this3 = this;

		this.clearForm();
		this.isNew = book ? false : true;
		this.book = book || '';
		this.bookId = book ? book.id : '';
		this.userId = this.getParam("id", true);

		_models_files__WEBPACK_IMPORTED_MODULE_4__["default"].getItems(this.bookId).then(function (dbData) {
			var filesArr = dbData.json();

			var textFiles = [];
			var audioFiles = [];

			filesArr.forEach(function (file) {
				switch (file.data_type) {
					case 'text':
						textFiles.push(file);
						break;
					case 'audio':
						audioFiles.push(file);
						break;
				}
			});
			_this3.$$('availableTextFiles').parse(textFiles);
			_this3.$$('availableAudioFiles').parse(audioFiles);
		});

		Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["toggleElement"])(!this.isNew, this.$$('bookCover'));
		Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["toggleElement"])(!this.isNew, this.$$('addingFilesButtons'));

		if (!this.isNew) {
			this.form.setValues(book);
			this.$$('bookCover').setValues(book.cover_photo || _consts__WEBPACK_IMPORTED_MODULE_2__["DUMMYCOVER"]);
		}

		this.getRoot().show();
	};

	BookCard.prototype.saveForm = function saveForm() {
		var _this4 = this;

		var data = this.form.getValues();

		var successAction = function successAction() {
			_this4.webix.message('Success');
			_this4.hideWindow();
		};

		if (this.form.validate()) {
			if (this.isNew) {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["addItem"])(_models_books__WEBPACK_IMPORTED_MODULE_1__["default"], data, successAction);
			} else {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["updateItem"])(_models_books__WEBPACK_IMPORTED_MODULE_1__["default"], data, successAction);
			}

			this.$$('bookFiles').send(function (response) {
				if (response) {
					_this4.webix.message(response.message);
				}
			});

			this.$$('audioFiles').send(function (response) {
				if (response) {
					_this4.webix.message(response.message);
				}
			});
		}
	};

	BookCard.prototype.hideWindow = function hideWindow() {
		this.clearForm();
		this.getRoot().hide();
	};

	BookCard.prototype.clearForm = function clearForm() {
		this.form.clearValidation();
		this.form.clear();
		this.$$('bookFiles').files.clearAll();
		this.$$('audioFiles').files.clearAll();
		this.$$('availableTextFiles').clearAll();
		this.$$('availableAudioFiles').clearAll();
	};

	return BookCard;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (BookCard);

/***/ }),

/***/ "./sources/views/librarian/index.js":
/*!******************************************!*\
  !*** ./sources/views/librarian/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authorization */ "./sources/authorization.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TopView = function (_JetView) {
	_inherits(TopView, _JetView);

	function TopView() {
		_classCallCheck(this, TopView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	TopView.prototype.config = function config() {
		var _this2 = this;

		var header = {
			type: 'header', template: this.app.config.name, css: 'webix_header app_header'
		};

		var menu = {
			view: 'menu',
			css: 'app_menu',
			width: 180,
			layout: 'y',
			select: true,
			template: '<span class="webix_icon #icon#"></span> #value# ',
			value: 'main',
			data: [{ value: 'Library', id: 'library', icon: 'fas fa-book-reader' }, { value: 'Users', id: 'users', icon: 'fas fa-cog' }],
			on: {
				onMenuItemClick: function onMenuItemClick(id) {
					var user_id = _this2.getParam("id", true);
					_this2.app.show('librarian.index?id=' + user_id + '/librarian.' + id);
				}
			}
		};

		var logout = {
			view: 'button',
			localId: 'logoutBtn',
			value: 'Logout',
			type: 'form'
		};

		var ui = {
			type: 'clean', paddingX: 5, css: 'app_layout',
			cols: [{ paddingX: 5, paddingY: 10, rows: [{ css: 'webix_shadow_medium', rows: [header, menu, logout] }] }, { view: 'resizer', width: 5 }, {
				type: 'wide', paddingY: 10, paddingX: 5, rows: [{ $subview: true }]
			}]
		};

		return ui;
	};

	TopView.prototype.init = function init() {
		var _this3 = this;

		var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

		this.$$('logoutBtn').attachEvent('onItemClick', function () {
			var app = _this3.app;
			var format = webix.Date.dateToStr("%Y-%m-%d");
			var currentDate = format(new Date());

			authorization.logout({ currentDate: currentDate }).then(function () {
				app.show('/login');
			});
		});
	};

	return TopView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (TopView);

/***/ }),

/***/ "./sources/views/librarian/library.js":
/*!********************************************!*\
  !*** ./sources/views/librarian/library.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _common_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/library */ "./sources/views/common/library.js");
/* harmony import */ var _bookCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookCard */ "./sources/views/librarian/bookCard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var libLibrary = function (_JetView) {
	_inherits(libLibrary, _JetView);

	function libLibrary() {
		_classCallCheck(this, libLibrary);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	libLibrary.prototype.config = function config() {

		var libraryConfig = {
			role: 'librarian'
		};

		var addBookBtn = {
			view: 'button',
			value: 'Add book',
			type: 'form',
			width: 100,
			click: function click() {
				library.addBook();
			}
		};

		var library = new _common_library__WEBPACK_IMPORTED_MODULE_1__["default"](this.app, libraryConfig, _bookCard__WEBPACK_IMPORTED_MODULE_2__["default"]);

		return {
			rows: [library, {
				cols: [{}, addBookBtn, {}]
			}]
		};
	};

	return libLibrary;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (libLibrary);

/***/ }),

/***/ "./sources/views/login.js":
/*!********************************!*\
  !*** ./sources/views/login.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorization */ "./sources/authorization.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var LoginPage = function (_JetView) {
	_inherits(LoginPage, _JetView);

	function LoginPage() {
		_classCallCheck(this, LoginPage);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	LoginPage.prototype.config = function config() {
		var _this2 = this;

		var loginForm = {
			view: 'form',
			localId: 'loginForm',
			width: 300,
			elements: [{ view: 'text', label: 'Username', name: 'username' }, { view: 'text', type: 'password', label: 'Password', name: 'password' }, {
				margin: 5, cols: [{ view: 'button', localId: 'loginBtn', value: 'Login', type: 'form' }, { view: 'button', value: 'Cancel' }]
			}]
		};

		var link = {
			view: 'button',
			value: 'Create an account',
			click: function click() {
				_this2.show('/register');
			}
		};

		return {
			cols: [{}, {
				rows: [{}, loginForm, link, {}]
			}, {}]
		};
	};

	LoginPage.prototype.init = function init() {
		var _this3 = this;

		this.$$('loginBtn').attachEvent('onItemClick', function () {
			var values = _this3.$$('loginForm').getValues();
			var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

			authorization.login(values).then(function (response) {
				if (response) {
					var userData = response.json().user;
					var id = userData.id;

					switch (userData.role_name) {
						case 'admin':
							_this3.show('admin.index?id=' + id);
							break;
						case 'librarian':
							_this3.show('librarian.index?id=' + id + '/librarian.library');
							break;
						case 'reader':
							_this3.show('reader.index?id=' + id + '/reader.main');
							break;
					}
				} else {
					webix.message(response);
				}
			});
		});
	};

	return LoginPage;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ "./sources/views/reader/bookCard.js":
/*!******************************************!*\
  !*** ./sources/views/reader/bookCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_likes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/likes */ "./sources/models/likes.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../consts */ "./sources/consts.js");
/* harmony import */ var _models_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/files */ "./sources/models/files.js");
/* harmony import */ var _models_comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/comments */ "./sources/models/comments.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var BookCard = function (_JetView) {
	_inherits(BookCard, _JetView);

	function BookCard() {
		_classCallCheck(this, BookCard);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	BookCard.prototype.config = function config() {
		var _this2 = this;

		var bookCover = {
			localId: 'bookCover',
			width: 120,
			height: 180,
			css: 'book_cover',
			template: function template(url) {
				return '<div style="background-image: url(' + url + ')" ></div>';
			}
		};

		var bookCard = {
			localId: 'bookCardReader',
			view: 'form',
			elements: [{ view: 'text', label: 'Title', labelWidth: 130, width: 310, labelAlign: 'right', name: 'book_title', readonly: true }, { view: 'text', label: 'Author', labelWidth: 130, width: 310, labelAlign: 'right', name: 'author_name', readonly: true }, { view: 'text', label: 'Genres', labelWidth: 130, width: 310, labelAlign: 'right', name: 'genres', readonly: true }, { view: 'text', label: 'Country', labelWidth: 130, width: 310, labelAlign: 'right', name: 'country_of_publication', readonly: true }, { view: 'text', label: 'Publishing house', labelWidth: 130, width: 310, labelAlign: 'right', name: 'publishing_house', readonly: true }, { view: 'text', label: 'Available copies', labelWidth: 130, width: 310, labelAlign: 'right', name: 'available_copies', readonly: true }, { view: 'text', label: 'Pages', labelWidth: 130, width: 310, labelAlign: 'right', name: 'number_of_pages', readonly: true }]
		};

		var availableTextFiles = {
			view: 'activeList',
			localId: 'availableTextFiles',
			template: "#name#" + "<span class='list_button'><i class = 'fas fa-download'></i></span>",
			on: {
				onItemClick: function onItemClick(id) {
					var bookName = _this2.$$('availableTextFiles').getItem(id).name;

					_models_files__WEBPACK_IMPORTED_MODULE_4__["default"].downloadItem(id).then(function (res) {
						webix.html.download(res, bookName);
					});
				}
			}
		};

		var availableAudioFiles = {
			view: "activeList",
			localId: "availableAudioFiles",
			type: {
				height: 100
			},
			template: "#name#<audio controls src='http://localhost:3000/audio/#id#'></audio>"
		};

		var orderBook = {
			view: 'button',
			localId: 'orderBook',
			type: 'htmlbutton',
			label: '<i class="far fa-hand-paper"></i> Order',
			width: 100,
			click: function click() {
				_this2.orderBook();
			}
		};

		var downloadBook = {
			view: 'button',
			localId: 'downloadBook',
			type: 'icon',
			icon: 'fas fa-download',
			width: 60,
			click: function click() {
				_this2.orderBook();
			}
		};

		var likeBook = {
			view: 'button',
			localId: 'likeButton',
			css: 'like_button',
			type: 'icon',
			icon: 'far fa-heart',
			width: 45,
			click: function click() {
				_this2.likeBook();
			}
		};

		var toggleCommentsBtn = {
			view: 'button',
			localId: 'commentButton',
			type: 'htmlbutton',
			label: 'Comments <i class="fas fa-angle-down">',
			width: 120,
			click: function click() {
				_this2.toggleComments();
			}
		};

		var addComment = {
			margin: 5,
			paddingY: 10,
			paddingX: 17,
			rows: [{
				view: 'textarea',
				localId: 'userComment',
				label: 'Comment',
				labelPosition: 'top',
				height: 80
			}, {
				cols: [{}, {
					view: 'button',
					localId: 'saveCommentBtn',
					type: 'form',
					label: 'Send',
					width: 80,
					click: function click() {
						_this2.saveComment();
					}
				}]
			}]
		};

		var comments = {
			rows: [{
				paddingY: 10,
				cols: [{}, toggleCommentsBtn, {}]
			}, {
				localId: 'commentLayout',
				hidden: true,
				rows: []
			}]
		};

		return {
			view: 'popup',
			position: 'center',
			maxHeight: 550,
			body: {
				view: 'scrollview',
				body: {
					rows: [bookCover, bookCard, availableTextFiles, availableAudioFiles, {
						paddingY: 10,
						paddingX: 15,
						margin: 10,
						cols: [orderBook, downloadBook, {}, likeBook]
					}, addComment, comments]
				}
			}
		};
	};

	BookCard.prototype.showPopup = function showPopup(book) {
		this.likeButton = this.$$('likeButton');
		this.form = this.$$('bookCardReader');
		this.filesList = this.$$('availableTextFiles');
		this.toggleCommentsBtn = this.$$('commentButton');
		this.commentLayout = this.$$('commentLayout');
		this.book = book;
		this.bookId = book.id;
		this.userId = this.getParam("id", true);

		this.clearForm();
		this.form.setValues(book);
		this.$$('bookCover').setValues(book.cover_photo || _consts__WEBPACK_IMPORTED_MODULE_3__["DUMMYCOVER"]);
		this.likeButton.define('badge', book.count_likes || '0');
		this.getFiles();
		this.getComments();

		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(book.book_file, this.$$('downloadBook'));
		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(book.available_copies, this.$$('orderBook'));
		this.toggleLike(book.user_id == this.userId);

		this.getRoot().show();
	};

	BookCard.prototype.getFiles = function getFiles() {
		var _this3 = this;

		_models_files__WEBPACK_IMPORTED_MODULE_4__["default"].getItems(this.bookId).then(function (dbData) {
			var filesArr = dbData.json();

			var textFiles = [];
			var audioFiles = [];

			filesArr.forEach(function (file) {
				switch (file.data_type) {
					case 'text':
						textFiles.push(file);
						break;
					case 'audio':
						audioFiles.push(file);
						break;
				}
			});
			_this3.$$('availableTextFiles').parse(textFiles);
			_this3.$$('availableAudioFiles').parse(audioFiles);
		});
	};

	BookCard.prototype.orderBook = function orderBook() {};

	BookCard.prototype.likeBook = function likeBook() {
		var _this4 = this;

		if (this.book.user_id == this.userId) {
			_models_likes__WEBPACK_IMPORTED_MODULE_1__["default"].removeLike(this.userId, this.bookId).then(function (response) {
				var status = response.json().serverStatus;
				if (status == _consts__WEBPACK_IMPORTED_MODULE_3__["SUCCESS"]) {
					_this4.unsetLike();
				}
			});
		} else {
			_models_likes__WEBPACK_IMPORTED_MODULE_1__["default"].addLike(this.userId, this.bookId).then(function (response) {
				var status = response.json().serverStatus;
				if (status == _consts__WEBPACK_IMPORTED_MODULE_3__["SUCCESS"]) {
					_this4.setLike();
				}
			});
		}
	};

	BookCard.prototype.toggleLike = function toggleLike(condition) {
		if (condition) {
			this.setLike();
		} else {
			this.unsetLike();
		}
	};

	BookCard.prototype.setLike = function setLike() {
		this.likeButton.define('icon', 'fas fa-heart');
		this.likeButton.refresh();
	};

	BookCard.prototype.unsetLike = function unsetLike() {
		this.likeButton.define('icon', 'far fa-heart');
		this.likeButton.refresh();
	};

	BookCard.prototype.saveComment = function saveComment() {
		var _this5 = this;

		var commentInput = this.$$('userComment');
		var commentText = commentInput.getValue();
		var comment = {
			'user_id': this.userId,
			'book_id': this.bookId,
			'content': commentText,
			'commentDate': new Date()
		};

		_models_comments__WEBPACK_IMPORTED_MODULE_5__["default"].addItem(comment).then(function (response) {
			if (response) {
				_this5.clearForm();
				_this5.getComments();
				_this5.commentLayout.refresh();
				_this5.commentLayout.show();
			}
		});
	};

	BookCard.prototype.addChildComments = function addChildComments(arr, item) {
		var i = 0;
		while (i < arr.length) {
			var el = arr[i];
			if (el.comment_id === item.id) {
				var commentItem = this.composeComment(el);
				$$('comment_' + item.id).addView(commentItem);
				arr.splice(i, 1);

				if (arr.length > 0) {
					this.addChildComments(arr, el);
				}
			} else {
				i++;
			}
		}
	};

	BookCard.prototype.getComments = function getComments() {
		var _this6 = this;

		this.commentsGot = true;
		_models_comments__WEBPACK_IMPORTED_MODULE_5__["default"].getItems(this.bookId).then(function (dbData) {
			var commentsArr = dbData.json();

			var i = 0;
			while (i < commentsArr.length) {
				var comment = commentsArr[i];
				if (!comment.comment_id) {
					var commentItem = _this6.composeComment(comment);
					_this6.commentLayout.addView(commentItem);
					commentsArr.splice(i, 1);

					if (commentsArr.length > 0) {
						_this6.addChildComments(commentsArr, comment);
					}
				} else {
					i++;
				}
			}
		});
	};

	BookCard.prototype.toggleComments = function toggleComments() {
		var isVisible = this.commentLayout.isVisible();
		if (isVisible) {
			this.toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-down"></i>');
			this.commentLayout.hide();
		} else {
			this.toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-up"></i>');
			if (!this.commentsGot) {
				this.getComments();
			}
			this.commentLayout.show();
		}
	};

	BookCard.prototype.composeComment = function composeComment(comment) {
		var _this7 = this;

		var commentDate = Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(comment.comment_date);
		var commentAuthor = comment.user_name + ' ' + comment.user_surname;

		return {
			id: 'comment_' + comment.id,
			css: 'comment_item',
			padding: { left: 10 },
			rows: [{
				view: "template",
				autoheight: true,
				borderless: true,
				css: 'template',
				template: '<div class="comment_info">\t\t\t\t\t\t\t\t\t<div class = "comment_author">' + commentAuthor + '</div>\t\t\t\t\t\t\t\t\t<div class = "comment_date">' + commentDate + '</div>\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>' + comment.content + '</div>',
				onClick: {
					'template': function template() {
						return _this7.replyToComment(comment.id);
					}
				}
			}]

		};
	};

	BookCard.prototype.replyToComment = function replyToComment(commentId) {

		console.log(commentId);
	};

	BookCard.prototype.clearForm = function clearForm() {
		var _this8 = this;

		this.form.clear();
		this.filesList.clearAll();
		this.$$('availableTextFiles').clearAll();
		this.$$('availableAudioFiles').clearAll();
		this.$$('userComment').setValue('');

		var comments = this.commentLayout.getChildViews();

		if (comments) {
			var commentsCopy = [].concat(comments);

			commentsCopy.forEach(function (comment) {
				_this8.commentLayout.removeView(comment);
			});
		}
	};

	return BookCard;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (BookCard);

/***/ }),

/***/ "./sources/views/reader/index.js":
/*!***************************************!*\
  !*** ./sources/views/reader/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authorization */ "./sources/authorization.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TopView = function (_JetView) {
	_inherits(TopView, _JetView);

	function TopView() {
		_classCallCheck(this, TopView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	TopView.prototype.config = function config() {
		var _this2 = this;

		var header = {
			type: 'header', template: this.app.config.name, css: 'webix_header app_header'
		};

		var menu = {
			view: 'menu',
			css: 'app_menu',
			width: 180, layout: 'y', select: true,
			template: '<span class="webix_icon #icon#"></span> #value# ',
			value: 'main',
			data: [{ value: 'My books', id: 'main', icon: 'fas fa-bookmark' }, { value: 'Library', id: 'library', icon: 'fas fa-book-reader' }, { value: 'Tops', id: 'tops', icon: 'fas fa-list' }, { value: 'Settings', id: 'settings', icon: 'fas fa-cog' }],
			on: {
				onMenuItemClick: function onMenuItemClick(id) {
					var user_id = _this2.getParam("id", true);
					_this2.app.show('reader.index?id=' + user_id + '/reader.' + id);
				}
			}
		};

		var logout = {
			view: 'button',
			localId: 'logoutBtn',
			value: 'Logout',
			type: 'form'
		};

		var ui = {
			type: 'clean', paddingX: 5, css: 'app_layout',
			cols: [{ paddingX: 5, paddingY: 10, rows: [{ css: 'webix_shadow_medium', rows: [header, menu, logout] }] }, { view: 'resizer', width: 5 }, {
				type: 'wide', paddingY: 10, paddingX: 5, rows: [{ $subview: true }]
			}]
		};

		return ui;
	};

	TopView.prototype.init = function init() {
		var _this3 = this;

		var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

		this.$$('logoutBtn').attachEvent('onItemClick', function () {
			var app = _this3.app;
			var format = webix.Date.dateToStr("%Y-%m-%d");
			var currentDate = format(new Date());

			authorization.logout({ currentDate: currentDate }).then(function () {
				app.show('/login');
			});
		});
	};

	return TopView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (TopView);

/***/ }),

/***/ "./sources/views/reader/library.js":
/*!*****************************************!*\
  !*** ./sources/views/reader/library.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _common_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/library */ "./sources/views/common/library.js");
/* harmony import */ var _bookCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookCard */ "./sources/views/reader/bookCard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var readerLibrary = function (_JetView) {
	_inherits(readerLibrary, _JetView);

	function readerLibrary() {
		_classCallCheck(this, readerLibrary);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	readerLibrary.prototype.config = function config() {
		var libraryConfig = {
			role: 'reader'
		};

		return {
			rows: [new _common_library__WEBPACK_IMPORTED_MODULE_1__["default"](this.app, libraryConfig, _bookCard__WEBPACK_IMPORTED_MODULE_2__["default"])]
		};
	};

	return readerLibrary;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (readerLibrary);

/***/ }),

/***/ "./sources/views/reader/main.js":
/*!**************************************!*\
  !*** ./sources/views/reader/main.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MainView = function (_JetView) {
	_inherits(MainView, _JetView);

	function MainView() {
		_classCallCheck(this, MainView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	MainView.prototype.config = function config() {
		var testResults = {
			view: 'datatable',
			id: 'groupList',
			select: true,
			columns: [{
				header: 'Add',
				css: 'center',
				width: 50,
				template: '<i class="fas fa-plus"></i>'
			}, {
				id: 'removeCol',
				header: 'Remove',
				css: 'center',
				width: 70,
				template: '{common.trashIcon()}'
			}]
		};

		var button = {
			view: 'button',
			id: 'addGroup',
			value: 'Add',
			type: 'form',
			inputWidth: 100,
			click: function click() {}
		};

		return {
			rows: [testResults, button]
		};
	};

	MainView.prototype.init = function init() {
		// $$('groupList').parse(groups);
	};

	return MainView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (MainView);

/***/ }),

/***/ "./sources/views/reader/settings.js":
/*!******************************************!*\
  !*** ./sources/views/reader/settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/users */ "./sources/models/users.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Settings = function (_JetView) {
	_inherits(Settings, _JetView);

	function Settings() {
		_classCallCheck(this, Settings);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	Settings.prototype.config = function config() {
		var _this2 = this;

		var button = {
			view: 'button',
			id: 'saveChanges',
			value: 'Save',
			type: 'form',
			inputWidth: 100,
			click: function click() {
				_this2.saveForm();
			}
		};

		var userData = {
			view: 'form',
			localId: 'userDataForm',
			elements: [{ view: 'text', name: 'id', localId: 'user_id', hidden: true }, { view: 'text', label: 'First name', name: 'user_name', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Last name', name: 'user_surname', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Passport ID', name: 'passport_ID', labelWidth: 90, labelAlign: 'right' }, { view: 'datepicker', label: 'Birth date', name: 'birth_date', localId: 'birth_date', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Address', name: 'address', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Phone', name: 'phone_numbers', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Email', name: 'email', labelWidth: 90, labelAlign: 'right' }, button]
		};

		return {
			rows: [userData]
		};
	};

	Settings.prototype.init = function init() {
		var _this3 = this;

		var id = this.getParam("id", true);

		_models_users__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(id).then(function (data) {
			var userData = data.json()[0];
			userData.birth_date = new Date(userData.birth_date);
			_this3.$$('userDataForm').setValues(userData);
		});
	};

	Settings.prototype.saveForm = function saveForm() {
		var data = this.$$('userDataForm').getValues();
		var successAction = this.webix.message('New data saved');
		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(_models_users__WEBPACK_IMPORTED_MODULE_1__["default"], data, successAction);
	};

	return Settings;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./sources/views/reader/tops.js":
/*!**************************************!*\
  !*** ./sources/views/reader/tops.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/books */ "./sources/models/books.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var bookTops = function (_JetView) {
	_inherits(bookTops, _JetView);

	function bookTops() {
		_classCallCheck(this, bookTops);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	bookTops.prototype.config = function config() {
		var _this2 = this;

		return {
			cols: [{
				view: 'list',
				width: 250,
				select: true,
				data: [{
					id: 'showOldestBooks',
					value: 'Oldest books'
				}, {
					id: 'showNewestBooks',
					value: 'Newest books'
				}, {
					id: 'showMostPagesBooks',
					value: 'Most pages books'
				}, {
					id: 'showBooksWithLongNames',
					value: 'Books with longest names'
				}, {
					id: 'showAuthorsWithMostBooks',
					value: 'Authors with most books'
				}],
				on: {
					onItemClick: function onItemClick(id) {
						switch (id) {
							case 'showOldestBooks':
								_this2.showOldestBooks();
								break;
							case 'showNewestBooks':
								_this2.showNewestBooks();
								break;
							case 'showMostPagesBooks':
								_this2.showMostPagesBooks();
								break;
							case 'showBooksWithLongNames':
								_this2.showBooksWithLongNames();
								break;
							case 'showAuthorsWithMostBooks':
								_this2.showAuthorsWithMostBooks();
								break;
						}
					}
				}
			}, {
				id: 'booksTop',
				view: 'datatable',
				hidden: true
			}]
		};
	};

	bookTops.prototype.init = function init() {
		var _this3 = this;

		this.grid = $$('booksTop');
		_models_books__WEBPACK_IMPORTED_MODULE_1__["default"].getDataFromServer().then(function (dbData) {
			var booksArr = dbData.json();
			booksArr = booksArr.map(function (el) {
				el.year_of_publication = new Date(el.year_of_publication);
				return el;
			});
			_this3.booksArr = booksArr;
		});

		this.defaultConfig = [{
			id: 'book_title',
			sort: 'text',
			fillspace: 1,
			header: 'Title'
		}, {
			id: 'author_name',
			sort: 'text',
			fillspace: 1,
			header: 'Author'
		}, {
			id: 'genres',
			sort: 'text',
			width: 80,
			css: 'center',
			header: 'Genres'
		}, {
			id: 'country_of_publication',
			sort: 'text',
			width: 80,
			css: 'center',
			header: 'Country'
		}, {
			id: 'year_of_publication',
			sort: 'date',
			width: 80,
			css: 'center',
			format: webix.Date.dateToStr("%Y"),
			header: 'Year'
		}, {
			id: 'number_of_pages',
			header: 'Pages',
			width: 60
		}];
	};

	bookTops.prototype.showOldestBooks = function showOldestBooks() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return a.year_of_publication - b.year_of_publication;
		});
		this.showResults(data, this.defaultConfig);
	};

	bookTops.prototype.showNewestBooks = function showNewestBooks() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return b.year_of_publication - a.year_of_publication;
		});
		this.showResults(data, this.defaultConfig);
	};

	bookTops.prototype.showMostPagesBooks = function showMostPagesBooks() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return b.number_of_pages - a.number_of_pages;
		});
		this.showResults(data, this.defaultConfig);
	};

	bookTops.prototype.showBooksWithLongNames = function showBooksWithLongNames() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return b.book_title.length - a.book_title.length;
		});
		this.showResults(data, this.defaultConfig);
	};

	bookTops.prototype.showAuthorsWithMostBooks = function showAuthorsWithMostBooks() {
		var authors = [];
		this.booksArr.forEach(function (el) {
			var index = authors.findIndex(function (author) {
				return author.name == el.author_name;
			});
			if (index === -1) {
				authors.push({ name: el.author_name, booksCount: 1 });
			} else {
				authors[index].booksCount++;
			}
		});

		authors = authors.sort(function (a, b) {
			return b.booksCount - a.booksCount;
		});

		var columns = [{
			id: 'name',
			header: 'Name',
			fillspace: 1
		}, {
			id: 'booksCount',
			header: 'Books count',
			fillspace: 1
		}];
		this.showResults(authors, columns);
	};

	bookTops.prototype.showResults = function showResults(data, columns) {
		this.grid.define('columns', columns);
		this.grid.refreshColumns();
		data = data.slice(0, 10);
		this.grid.clearAll();
		this.grid.parse(data);
		this.grid.show();
	};

	return bookTops;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (bookTops);

/***/ }),

/***/ "./sources/views/register.js":
/*!***********************************!*\
  !*** ./sources/views/register.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorization */ "./sources/authorization.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RegisterPage = function (_JetView) {
	_inherits(RegisterPage, _JetView);

	function RegisterPage() {
		_classCallCheck(this, RegisterPage);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	RegisterPage.prototype.config = function config() {

		var registerForm = {
			view: 'form',
			localId: 'registerForm',
			width: 300,
			elements: [{ view: 'text', label: 'Uername', name: 'username' }, { view: 'text', type: 'password', label: 'Password', name: 'password' }, {
				margin: 5, cols: [{
					view: 'button', localId: 'registerBtn', value: 'Register', type: 'form'
				}]
			}]
		};

		return {
			cols: [{}, {
				rows: [{}, registerForm, {}]
			}, {}]
		};
	};

	RegisterPage.prototype.init = function init() {
		var _this2 = this;

		this.$$('registerBtn').attachEvent('onItemClick', function () {
			var values = _this2.$$('registerForm').getValues();
			var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

			authorization.register(values).then(function (response) {
				var status = response.json().status;
				var id = response.json().id;
				if (status === 2) {
					_this2.show('reader.index?id=' + id + '/reader.main');
				} else {
					if (response.json().reason === 'userExist') {
						_this2.show('/login');
					}
					webix.message(response.json().data);
				}
			});
		});
	};

	return RegisterPage;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (RegisterPage);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViaXgtamV0L2Rpc3QvZXM2L2pldC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvYXV0aG9yaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2NvbnN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2xvY2FsZXMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2Jvb2tzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2ZpbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2xpa2VzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL3VzZXJzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbXlhcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2FkbWluL3VzZXJGb3JtLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvY29tbW9uL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vYm9va0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2Jvb2tDYXJkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci90b3BzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJnIiwiRnVuY3Rpb24iLCJoYWRSdW50aW1lIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImluZGV4T2YiLCJvbGRSdW50aW1lIiwidW5kZWZpbmVkIiwiZSIsImdsb2JhbCIsIk9wIiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImluTW9kdWxlIiwicnVudGltZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJvYmoiLCJhcmciLCJ0eXBlIiwiY2FsbCIsImVyciIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImNvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJ2YWx1ZSIsIlByb21pc2UiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJpdGVyIiwibmV4dCIsImRvbmUiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsImtleSIsInJldmVyc2UiLCJsZW5ndGgiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsIkpldEJhc2UiLCJ3ZWJpeCIsIndlYml4SmV0IiwiX2V2ZW50cyIsIl9zdWJzIiwiX2RhdGEiLCJnZXRSb290IiwiX3Jvb3QiLCJkZXN0cnVjdG9yIiwiX2RldGFjaEV2ZW50cyIsIl9kZXN0cm95U3VicyIsIl9jb250YWluZXIiLCJhcHAiLCJfcGFyZW50Iiwic2V0UGFyYW0iLCJpZCIsInVybCIsIl9zZWdtZW50IiwidXBkYXRlIiwic2hvdyIsImdldFBhcmFtIiwicGFyZW50IiwidmlldyIsImdldFBhcmVudFZpZXciLCJnZXRVcmwiLCJzdWJ1cmwiLCJnZXRVcmxTdHJpbmciLCIkJCIsInJvb3QiLCJxdWVyeVZpZXciLCJjb25maWciLCJsb2NhbElkIiwiJHNjb3BlIiwib24iLCJjb2RlIiwiYXR0YWNoRXZlbnQiLCJjb250YWlucyIsImtpZCIsImdldFN1YlZpZXciLCJzdWIiLCJnZXRTdWJWaWV3SW5mbyIsInN1YnZpZXciLCJwb3B1cCIsImV2ZW50cyIsImRldGFjaEV2ZW50Iiwic3ViVmlldyIsIl9pbml0X3VybF9kYXRhIiwiY3VycmVudCIsImV4dGVuZCIsInBhcmFtcyIsIl9nZXREZWZhdWx0U3ViIiwiZGVmYXVsdCIsImJyYW5jaCIsImNoaWxkIiwiX3JvdXRlZF92aWV3IiwicGFyc2UiLCJzdWJzdHIiLCJwYXJ0cyIsInNwbGl0IiwiY2h1bmtzIiwidGVzdCIsInBvcyIsInBhcmFtIiwiZGNodW5rIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFnZSIsImlzTmV3IiwidXJsMnN0ciIsInN0YWNrIiwiY2h1bmsiLCJvYmoyc3RyIiwiam9pbiIsInN0ciIsImVuY29kZVVSSUNvbXBvbmVudCIsIlJvdXRlIiwicm91dGUiLCJpbmRleCIsIl9uZXh0IiwicGF0aCIsInNoaWZ0IiwicmVmcmVzaCIsIl9qb2luIiwia2lkcyIsIm9sZCIsImNvbmNhdCIsImFwcGVuZCIsInJlcyIsInJlaiIsInJlZGlyZWN0IiwiY29uZmlybSIsImNhbGxFdmVudCIsImNhdGNoIiwic2l6ZSIsIm4iLCJKZXRWaWV3IiwiX2NoaWxkcmVuIiwidWkiLCJjb250YWluZXIiLCJqZXR2aWV3IiwiY3JlYXRlVmlldyIsInJlbmRlciIsInRhcmdldCIsIl9yZW5kZXJGcmFtZUxvY2siLCJfc2hvdyIsInNlZ21lbnQiLCJfdXJsQ2hhbmdlIiwibGlua1JvdXRlciIsImdldFJvdXRlciIsInNldCIsInNpbGVudCIsImluaXQiLCJfJHZpZXciLCJfJCIsInJlYWR5IiwiXyR1cmwiLCJtZXNzYWdlIiwidXJsQ2hhbmdlIiwiZGVzdHJveSIsIl9kZXN0cm95S2lkcyIsInVzZSIsInBsdWdpbiIsInRhZ05hbWUiLCJfcmVuZGVyIiwiZG9jdW1lbnQiLCJib2R5IiwidG9Ob2RlIiwiX3JlbmRlcl9maW5hbCIsImNmZyIsInNsb3QiLCJyZXNwb25zZSIsImNvcHlDb25maWciLCJvbGR1aSIsImFzV2luIiwic2V0UG9zaXRpb24iLCJpc1Zpc2libGUiLCJfaW5pdCIsIl9pbml0VXJsIiwiX2luaXRFcnJvciIsIndhaXRzIiwiZnJhbWUiLCJ3YWl0IiwiYWxsIiwibG9jayIsIl9yZW5kZXJGcmFtZSIsIl9jcmVhdGVTdWJWaWV3IiwiZXJyb3IiLCJjcmVhdGVGcm9tVVJMIiwidWlzIiwiSmV0Vmlld1JhdyIsIl91aSIsIlN1YlJvdXRlciIsImNiIiwiYSIsImdldCIsIl9vbmNlIiwiSmV0QXBwQmFzZSIsIndpbmRvdyIsInZlcnNpb24iLCJzdGFydCIsIl9zZXJ2aWNlcyIsIkV2ZW50U3lzdGVtIiwiX3N1YlNlZ21lbnQiLCJnZXRTZXJ2aWNlIiwic2V0U2VydmljZSIsImhhbmRsZXIiLCIkc3VidmlldyIsImFkZFN1YlZpZXciLCJBcnJheSIsInBvaW50IiwiRGF0YUNvbGxlY3Rpb24iLCJSZWdFeHAiLCJEYXRlIiwiY29weSIsIiRyb3V0ZXIiLCJjbGlja0hhbmRsZXIiLCJzcmNFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwidHJpZ2dlciIsIl9mb3JWaWV3IiwibG9hZFZpZXciLCJ2aWV3cyIsIl9sb2FkRXJyb3IiLCJfbG9hZFZpZXdEeW5hbWljIiwiX19lc01vZHVsZSIsIm5vdyIsInJvdXRlciIsInJlc3QiLCJhcHBseSIsImRhdGEiLCJhY3Rpb24iLCJiaW5kIiwiZXIiLCJkZWJ1ZyIsImNvbnNvbGUiLCJ0ZXh0IiwicmVwbGFjZSIsImlubmVySFRNTCIsImV4cGlyZSIsImZpcnN0SW5pdCIsIl9maXJzdF9zdGFydCIsInRvcCIsImJhc2UiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uIiwibm9kZSIsImh0bWwiLCJhZGRDc3MiLCJyZW1vdmVDc3MiLCJ1cmxTdHJpbmciLCJ0ZW1wbGF0ZSIsInVpZCIsIkhhc2hSb3V0ZXIiLCJfZGV0ZWN0UHJlZml4Iiwib25wb3BzdGF0ZSIsInJvdXRlcyIsImNvbXBhcmUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicHJlZml4Iiwic3VmaXgiLCJfZ2V0UmF3Iiwicm91dGVyUHJlZml4IiwibG9jYXRpb24iLCJocmVmIiwiaXNQYXRjaGVkIiwicGF0Y2giLCJ3Iiwid2luIiwicHJvbWlzZSIsImZyZWV6ZSIsInNvbWUiLCIkZnJlZXplIiwicmVzaXplIiwiYmFzZUFkZCIsImJhc2VsYXlvdXQiLCJhZGRWaWV3IiwiYmFzZVJlbW92ZSIsInJlbW92ZVZpZXciLCJqdmlldyIsInN1YnMiLCJhcmd1bWVudHMiLCJsYXlvdXQiLCJwcm90b1VJIiwiJGluaXQiLCIkYXBwIiwiJHJlYWR5Iiwib3JpZ2luIiwicHJveHkiLCJKZXRBcHAiLCJTdG9yZVJvdXRlciIsInN0b3JhZ2UiLCJzZXNzaW9uIiwic3RvcmVOYW1lIiwicHV0IiwiVXJsUm91dGVyIiwicGF0aG5hbWUiLCJFbXB0eVJvdXRlciIsIl8kY29uZmlnIiwiVW5sb2FkR3VhcmQiLCJoYXMiLCJzdG9yZSIsInRyaW0iLCJ3YXJuIiwieCIsIlN0cmluZyIsImRlbGltaXRlciIsInJ1c3NpYW5QbHVyYWxHcm91cHMiLCJlbmQiLCJwbHVyYWxUeXBlcyIsImFyYWJpYyIsImxhc3RUd28iLCJib3NuaWFuX3NlcmJpYW4iLCJjaGluZXNlIiwiY3JvYXRpYW4iLCJmcmVuY2giLCJnZXJtYW4iLCJydXNzaWFuIiwibGl0aHVhbmlhbiIsImN6ZWNoIiwicG9saXNoIiwiaWNlbGFuZGljIiwic2xvdmVuaWFuIiwicGx1cmFsVHlwZVRvTGFuZ3VhZ2VzIiwibGFuZ1RvVHlwZU1hcCIsIm1hcHBpbmciLCJyZXQiLCJsYW5ncyIsImxhbmciLCJwbHVyYWxUeXBlTmFtZSIsImxvY2FsZSIsImxhbmdUb1BsdXJhbFR5cGUiLCJlbiIsInBsdXJhbFR5cGVJbmRleCIsImNvdW50IiwiZXNjYXBlIiwidG9rZW4iLCJjb25zdHJ1Y3RUb2tlblJlZ2V4Iiwib3B0cyIsInN1ZmZpeCIsIlJhbmdlRXJyb3IiLCJkb2xsYXJSZWdleCIsImRvbGxhckJpbGxzWWFsbCIsImRlZmF1bHRUb2tlblJlZ2V4IiwidHJhbnNmb3JtUGhyYXNlIiwicGhyYXNlIiwic3Vic3RpdHV0aW9ucyIsInRva2VuUmVnZXgiLCJpbnRlcnBvbGF0aW9uUmVnZXgiLCJvcHRpb25zIiwic21hcnRfY291bnQiLCJ0ZXh0cyIsImV4cHJlc3Npb24iLCJhcmd1bWVudCIsIlBvbHlnbG90IiwicGhyYXNlcyIsImN1cnJlbnRMb2NhbGUiLCJhbGxvd01pc3NpbmciLCJvbk1pc3NpbmdLZXkiLCJpbnRlcnBvbGF0aW9uIiwibmV3TG9jYWxlIiwibW9yZVBocmFzZXMiLCJwcmVmaXhlZEtleSIsInVuc2V0IiwiY2xlYXIiLCJuZXdQaHJhc2VzIiwidCIsIl8iLCJ0cmFuc2Zvcm0iLCJ3ZWJpeFBvbHlnbG90IiwiTG9jYWxlIiwiX3ZpZXciLCJzZXRMYW5nRGF0YSIsInBjb25maWciLCJwb2x5Z2xvdCIsInBvbHkiLCJzZXJ2aWNlIiwibG9jTmFtZSIsImkxOG4iLCJzZXRMb2NhbGUiLCJnZXRMYW5nIiwic2V0TGFuZyIsInVybHMiLCJNZW51IiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsImdldFNlbGVjdGVkSWQiLCJzZWxlY3QiLCJleGlzdHMiLCJiYXNlaWNvbnMiLCJnb29kIiwic2F2aW5nIiwiYmFzZXRleHQiLCJTdGF0dXMiLCJzdGF0dXMiLCJpc2Vycm9yIiwiZXhwaXJlRGVsYXkiLCJpY29ucyIsImNvbnRlbnQiLCJhcmVhIiwic2V0SFRNTCIsInN1Y2Nlc3MiLCJzZXRTdGF0dXMiLCJmYWlsIiwiZ2V0U3RhdHVzIiwiaGlkZVN0YXR1cyIsIm1vZGUiLCJyZXNwb25zZVRleHQiLCJ0cmFjayIsImRwIiwiX2lkIiwiX29iaiIsInJlbW90ZSIsImFqYXgiLCJfbW9kZSIsIl91cmwiLCJfcmVxdWVzdCIsIl9oZWFkZXJzIiwiX2ZpbGVzIiwiVGhlbWUiLCJ0aGVtZSIsImdldFRoZW1lIiwic2V0VGhlbWUiLCJsaW5rcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibG5hbWUiLCJkaXNhYmxlZCIsInNraW4iLCJjb3B5UGFyYW1zIiwiVXJsUGFyYW0iLCJvcyIsIm9nIiwidmFsIiwiVXNlciIsImxvZ2luIiwibG9nb3V0IiwiYWZ0ZXJMb2dpbiIsImFmdGVyTG9nb3V0IiwicGluZyIsIm1vZGVsIiwidXNlciIsImdldFVzZXIiLCJzZXJ2ZXIiLCJwYXNzIiwiY2FuTmF2aWdhdGUiLCJfJHJvb3QiLCJwdWJsaWMiLCJzZXRJbnRlcnZhbCIsInBsdWdpbnMiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwibCIsImxvZ291dFVybCIsImxvZ2luVXJsIiwicmVnaXN0ZXJVcmwiLCJBdXRob3JpemF0aW9uIiwicmVnaXN0ZXIiLCJwb3N0IiwiZGF0ZSIsIkRVTU1ZQ09WRVIiLCJTVUNDRVNTIiwiVVJMIiwiQm9va3NNb2RlbCIsImdldERhdGFGcm9tU2VydmVyIiwidXNlcl9pZCIsImFkZEl0ZW0iLCJ1cGRhdGVJdGVtIiwicmVtb3ZlSXRlbSIsImRlbCIsIkNvbW1lbnRzTW9kZWwiLCJnZXRJdGVtcyIsIkZpbGVzTW9kZWwiLCJkb3dubG9hZEl0ZW0iLCJMaWtlc01vZGVsIiwiYWRkTGlrZSIsInVzZXJJZCIsImJvb2tJZCIsInJlbW92ZUxpa2UiLCJVc2Vyc01vZGVsIiwiZ2V0SXRlbSIsIk15QXBwIiwiZGVmYXVsdHMiLCJBUFBOQU1FIiwiVkVSU0lPTiIsIkJVSUxEX0FTX01PRFVMRSIsIlBST0RVQ1RJT04iLCJuYXYiLCJ1cmxQYXJ0cyIsInRhcmdldFBhcnQiLCJlbCIsInJvbGUiLCJqc29uIiwidG9nZ2xlRWxlbWVudCIsImNvbmRpdGlvbiIsImVsZW1lbnQiLCJoaWRlIiwiTW9kZWwiLCJzdWNjZXNzQWN0aW9uIiwic2VydmVyU3RhdHVzIiwiZm9ybWF0RGF0ZSIsImRiRGF0ZSIsImN1cnJlbnRZZWFyIiwiZ2V0RnVsbFllYXIiLCJjdXJyZW50TW9udGgiLCJnZXRNb250aCIsImN1cnJlbnREYXkiLCJnZXREYXRlIiwiY3VycmVudEhvdXJzIiwiZ2V0SG91cnMiLCJjdXJyZW50RGF0ZVRpbWUiLCJjb21tZW50c1llYXIiLCJjb21tZW50c01vbnRoIiwiY29tbWVudHNEYXkiLCJjb21tZW50c0hvdXJzIiwiY29tbWVudHNEYXRlVGltZSIsInN0clRvRGF0ZSIsImRhdGVUb1N0ciIsInRpbWUiLCJNYXRoIiwicm91bmQiLCJhdXRvaGVpZ2h0IiwiYm9yZGVybGVzcyIsImhlaWdodCIsImxpc3QiLCJUb3BWaWV3IiwiaGVhZGVyIiwid2lkdGgiLCJkdGFibGUiLCJjb2x1bW5zIiwiaGlkZGVuIiwibWluV2lkdGgiLCJmaWxsc3BhY2UiLCJvbkNsaWNrIiwiZWRpdFVzZXIiLCJhZGRVc2VyQnRuIiwiY2xpY2siLCJhZGRVc2VyIiwicm93cyIsImNvbHMiLCJ1c2Vyc01vZGVsIiwiZGJEYXRhIiwidXNlcnNBcnIiLCJtYXAiLCJmdWxsX25hbWUiLCJ1c2VyX25hbWUiLCJ1c2VyX3N1cm5hbWUiLCJmb3JtYXQiLCJiaXJ0aF9kYXRlIiwidXNlcnNEYXRhIiwiYXV0aG9yaXphdGlvbiIsImN1cnJlbnREYXRlIiwiX3VzZXJGb3JtIiwiVXNlckZvcm0iLCJmaW5kIiwic2hvd1dpbmRvdyIsImhlYWQiLCJwb3NpdGlvbiIsImVsZW1lbnRzIiwibGFiZWwiLCJsYWJlbFdpZHRoIiwibGFiZWxBbGlnbiIsInJ1bGVzIiwiaXNOb3RFbXB0eSIsIm1hcmdpbiIsInBhZGRpbmdZIiwic2F2ZUZvcm0iLCJoaWRlV2luZG93IiwiZm9ybSIsImdldEhlYWQiLCJzZXRWYWx1ZXMiLCJpbml0aWFsX3Bhc3N3b3JkIiwiZ2V0VmFsdWVzIiwidmFsaWRhdGUiLCJjbGVhclZhbGlkYXRpb24iLCJMaWJyYXJ5IiwibGlicmFyeUNvbmZpZyIsImJvb2tDYXJkIiwiY3NzIiwic29ydCIsImVib29rIiwic2hvd0Jvb2tDYXJkIiwicmVtb3ZlQm9vayIsImdyaWQiLCJnZXRDb2x1bW5Db25maWciLCJyZWZyZXNoQ29sdW1ucyIsImdldERhdGEiLCJnZXRGaWxlcyIsImNoZWNrRmlsZXMiLCJib29rc0FyciIsIl9ib29rQ2FyZCIsImJvb2tzTW9kZWwiLCJ5ZWFyX29mX3B1YmxpY2F0aW9uIiwiZmlsZXNNb2RlbCIsImZpbGVzQXJyIiwiYm9vayIsImlzRmlsZXMiLCJib29rX2lkIiwic2hvd1BvcHVwIiwicmVtb3ZlIiwiYWRkQm9vayIsIkJvb2tDYXJkIiwiYm9va0NvdmVyIiwiYWRkVGV4dEZpbGUiLCJhdXRvc2VuZCIsImZvcm1EYXRhIiwiYWNjZXB0IiwidXBsb2FkIiwibGluayIsImZpbGVzTGlzdCIsImFkZEF1ZGlvRmlsZSIsImF1ZGlvTGlzdCIsImF2YWlsYWJsZVRleHRGaWxlcyIsIm9uSXRlbUNsaWNrIiwiYXZhaWxhYmxlQXVkaW9GaWxlcyIsInNhdmVCdG4iLCJtYXhIZWlnaHQiLCJwYWRkaW5nWCIsImNsZWFyRm9ybSIsInRleHRGaWxlcyIsImF1ZGlvRmlsZXMiLCJmaWxlIiwiZGF0YV90eXBlIiwiY292ZXJfcGhvdG8iLCJzZW5kIiwiZmlsZXMiLCJjbGVhckFsbCIsIm1lbnUiLCJpY29uIiwib25NZW51SXRlbUNsaWNrIiwibGliTGlicmFyeSIsImFkZEJvb2tCdG4iLCJsaWJyYXJ5IiwiTG9naW5QYWdlIiwibG9naW5Gb3JtIiwidXNlckRhdGEiLCJyb2xlX25hbWUiLCJyZWFkb25seSIsImJvb2tOYW1lIiwiZG93bmxvYWQiLCJvcmRlckJvb2siLCJkb3dubG9hZEJvb2siLCJsaWtlQm9vayIsInRvZ2dsZUNvbW1lbnRzQnRuIiwidG9nZ2xlQ29tbWVudHMiLCJhZGRDb21tZW50IiwibGFiZWxQb3NpdGlvbiIsInNhdmVDb21tZW50IiwiY29tbWVudHMiLCJsaWtlQnV0dG9uIiwiY29tbWVudExheW91dCIsImRlZmluZSIsImNvdW50X2xpa2VzIiwiZ2V0Q29tbWVudHMiLCJib29rX2ZpbGUiLCJhdmFpbGFibGVfY29waWVzIiwidG9nZ2xlTGlrZSIsImxpa2VzTW9kZWwiLCJ1bnNldExpa2UiLCJzZXRMaWtlIiwiY29tbWVudElucHV0IiwiY29tbWVudFRleHQiLCJjb21tZW50IiwiY29tbWVudHNNb2RlbCIsImFkZENoaWxkQ29tbWVudHMiLCJhcnIiLCJpdGVtIiwiY29tbWVudF9pZCIsImNvbW1lbnRJdGVtIiwiY29tcG9zZUNvbW1lbnQiLCJzcGxpY2UiLCJjb21tZW50c0dvdCIsImNvbW1lbnRzQXJyIiwiY29tbWVudERhdGUiLCJjb21tZW50X2RhdGUiLCJjb21tZW50QXV0aG9yIiwicGFkZGluZyIsImxlZnQiLCJyZXBseVRvQ29tbWVudCIsImNvbW1lbnRJZCIsImxvZyIsImdldENoaWxkVmlld3MiLCJjb21tZW50c0NvcHkiLCJyZWFkZXJMaWJyYXJ5IiwiTWFpblZpZXciLCJ0ZXN0UmVzdWx0cyIsImJ1dHRvbiIsImlucHV0V2lkdGgiLCJTZXR0aW5ncyIsImJvb2tUb3BzIiwic2hvd09sZGVzdEJvb2tzIiwic2hvd05ld2VzdEJvb2tzIiwic2hvd01vc3RQYWdlc0Jvb2tzIiwic2hvd0Jvb2tzV2l0aExvbmdOYW1lcyIsInNob3dBdXRob3JzV2l0aE1vc3RCb29rcyIsImRlZmF1bHRDb25maWciLCJiIiwic2hvd1Jlc3VsdHMiLCJudW1iZXJfb2ZfcGFnZXMiLCJib29rX3RpdGxlIiwiYXV0aG9ycyIsImZpbmRJbmRleCIsImF1dGhvciIsImF1dGhvcl9uYW1lIiwiYm9va3NDb3VudCIsIlJlZ2lzdGVyUGFnZSIsInJlZ2lzdGVyRm9ybSIsInJlYXNvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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LGlCQUFjN0YsUUFBZCxDQUF1QjdmLE1BQXZCLEVBQStCd0IsSUFBL0IsQ0FBb0MsVUFBQ21NLFFBQUQsRUFBYztBQUNqRCxRQUFNZ08sU0FBU2hPLFNBQVNxVSxJQUFULEdBQWdCckcsTUFBL0I7QUFDQSxRQUFNbFYsS0FBS2tILFNBQVNxVSxJQUFULEdBQWdCdmIsRUFBM0I7QUFDQSxRQUFJa1YsV0FBVyxDQUFmLEVBQWtCO0FBQ2pCLFlBQUs5VSxJQUFMLHNCQUE2QkosRUFBN0I7QUFDQSxLQUZELE1BR0s7QUFDSixTQUFHa0gsU0FBU3FVLElBQVQsR0FBZ0J1TixNQUFoQixLQUEyQixXQUE5QixFQUEyQztBQUMxQyxhQUFLMW9CLElBQUwsQ0FBVSxRQUFWO0FBQ0E7QUFDRGxCLFdBQU1rSCxPQUFOLENBQWNjLFNBQVNxVSxJQUFULEdBQWdCMVEsSUFBOUI7QUFDQTtBQUNELElBWkQ7QUFhQSxHQWpCRDtBQWtCQSxFOzs7RUF0RHdDOUYsaUQ7O0FBQXJCNmpCLDJFIiwiZmlsZSI6Im15YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY29kZWJhc2UvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlcy9teWFwcC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiY2xhc3MgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3ZWJpeCkge1xyXG4gICAgICAgIHRoaXMud2ViaXhKZXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2ViaXggPSB3ZWJpeDtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9zdWJzID0ge307XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgfVxyXG4gICAgZ2V0Um9vdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZGV0YWNoRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVN1YnMoKTtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSB0aGlzLl9jb250YWluZXIgPSB0aGlzLmFwcCA9IHRoaXMuX3BhcmVudCA9IHRoaXMuX3Jvb3QgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgc2V0UGFyYW0oaWQsIHZhbHVlLCB1cmwpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGF0YVtpZF0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFbaWRdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZ21lbnQudXBkYXRlKGlkLCB2YWx1ZSwgMCk7XHJcbiAgICAgICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFBhcmFtKGlkLCBwYXJlbnQpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2RhdGFbaWRdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgfHwgIXBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5nZXRQYXJhbShpZCwgcGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlZ21lbnQuc3VidXJsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmxTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlZ21lbnQudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGdldFBhcmVudFZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICAgIH1cclxuICAgICQkKGlkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCByb290ID0gdGhpcy5nZXRSb290KCk7XHJcbiAgICAgICAgICAgIHJldHVybiByb290LnF1ZXJ5Vmlldygob2JqID0+IChvYmouY29uZmlnLmlkID09PSBpZCB8fCBvYmouY29uZmlnLmxvY2FsSWQgPT09IGlkKSAmJlxyXG4gICAgICAgICAgICAgICAgKG9iai4kc2NvcGUgPT09IHJvb3QuJHNjb3BlKSksIFwic2VsZlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbihvYmosIG5hbWUsIGNvZGUpIHtcclxuICAgICAgICBjb25zdCBpZCA9IG9iai5hdHRhY2hFdmVudChuYW1lLCBjb2RlKTtcclxuICAgICAgICB0aGlzLl9ldmVudHMucHVzaCh7IG9iaiwgaWQgfSk7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG4gICAgY29udGFpbnModmlldykge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qga2lkID0gdGhpcy5fc3Vic1trZXldLnZpZXc7XHJcbiAgICAgICAgICAgIGlmIChraWQgPT09IHZpZXcgfHwga2lkLmNvbnRhaW5zKHZpZXcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3KG5hbWUpIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1Yi5zdWJ2aWV3LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlld0luZm8obmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuX3N1YnNbbmFtZSB8fCBcImRlZmF1bHRcIl07XHJcbiAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWJ2aWV3OiBzdWIsIHBhcmVudDogdGhpcyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJfdG9wXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3Vic1tuYW1lXSA9IHsgdXJsOiBcIlwiLCBpZDogbnVsbCwgcG9wdXA6IHRydWUgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gYSBjaGlsZCB2aWV3LCBzZWFyY2hlcyBmb3IgbmVhcmVzdCBwYXJlbnQgd2l0aCBzdWJ2aWV3XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIF9kZXRhY2hFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBldmVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgZXZlbnRzW2ldLm9iai5kZXRhY2hFdmVudChldmVudHNbaV0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9kZXN0cm95U3VicygpIHtcclxuICAgICAgICAvLyBkZXN0cm95IHN1YiB2aWV3c1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViVmlldyA9IHRoaXMuX3N1YnNba2V5XS52aWV3O1xyXG4gICAgICAgICAgICAvLyBpdCBwb3NzaWJsZSB0aGF0IHN1YnZpZXcgd2FzIG5vdCBsb2FkZWQgd2l0aCBhbnkgY29udGVudCB5ZXRcclxuICAgICAgICAgICAgLy8gc28gY2hlY2sgb24gbnVsbFxyXG4gICAgICAgICAgICBpZiAoc3ViVmlldykge1xyXG4gICAgICAgICAgICAgICAgc3ViVmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVzZXQgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcclxuICAgICAgICB0aGlzLl9zdWJzID0ge307XHJcbiAgICB9XHJcbiAgICBfaW5pdF91cmxfZGF0YSgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9zZWdtZW50LmN1cnJlbnQoKTtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICAgICAgdGhpcy53ZWJpeC5leHRlbmQodGhpcy5fZGF0YSwgdXJsLnBhcmFtcywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBfZ2V0RGVmYXVsdFN1YigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3Vicy5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzLmRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5fc3Vic1trZXldO1xyXG4gICAgICAgICAgICBpZiAoIXN1Yi5icmFuY2ggJiYgc3ViLnZpZXcgJiYga2V5ICE9PSBcIl90b3BcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBzdWIudmlldy5fZ2V0RGVmYXVsdFN1YigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JvdXRlZF92aWV3KCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWIgPSBwYXJlbnQuX2dldERlZmF1bHRTdWIoKTtcclxuICAgICAgICBpZiAoIXN1YiAmJiBzdWIgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyZW50Ll9yb3V0ZWRfdmlldygpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIHBhcnNlKHVybCkge1xyXG4gICAgLy8gcmVtb3ZlIHN0YXJ0aW5nIC9cclxuICAgIGlmICh1cmxbMF0gPT09IFwiL1wiKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cigxKTtcclxuICAgIH1cclxuICAgIC8vIHNwbGl0IHVybCBieSBcIi9cIlxyXG4gICAgY29uc3QgcGFydHMgPSB1cmwuc3BsaXQoXCIvXCIpO1xyXG4gICAgY29uc3QgY2h1bmtzID0gW107XHJcbiAgICAvLyBmb3IgZWFjaCBwYWdlIGluIHVybFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHRlc3QgPSBwYXJ0c1tpXTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgICAgICAvLyBkZXRlY3QgcGFyYW1zXHJcbiAgICAgICAgLy8gc3VwcG9ydCBvbGQgXHRcdFx0c29tZTphPWI6Yz1kXHJcbiAgICAgICAgLy8gYW5kIG5ldyBub3RhdGlvblx0XHRzb21lP2E9YiZjPWRcclxuICAgICAgICBsZXQgcG9zID0gdGVzdC5pbmRleE9mKFwiOlwiKTtcclxuICAgICAgICBpZiAocG9zID09PSAtMSkge1xyXG4gICAgICAgICAgICBwb3MgPSB0ZXN0LmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB0ZXN0LnN1YnN0cihwb3MgKyAxKS5zcGxpdCgvW1xcOlxcP1xcJl0vZyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBoYXNoIG9mIG5hbWVkIHBhcmFtc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtIG9mIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGNodW5rID0gcGFyYW0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2RjaHVua1swXV0gPSBkZWNvZGVVUklDb21wb25lbnQoZGNodW5rWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzdG9yZSBwYXJzZWQgdmFsdWVzXHJcbiAgICAgICAgY2h1bmtzW2ldID0ge1xyXG4gICAgICAgICAgICBwYWdlOiAocG9zID4gLTEgPyB0ZXN0LnN1YnN0cigwLCBwb3MpIDogdGVzdCksXHJcbiAgICAgICAgICAgIHBhcmFtczogcmVzdWx0LFxyXG4gICAgICAgICAgICBpc05ldzogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgcGFnZSBvYmplY3RzXHJcbiAgICByZXR1cm4gY2h1bmtzO1xyXG59XHJcbmZ1bmN0aW9uIHVybDJzdHIoc3RhY2spIHtcclxuICAgIGNvbnN0IHVybCA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBjaHVuayBvZiBzdGFjaykge1xyXG4gICAgICAgIHVybC5wdXNoKFwiL1wiICsgY2h1bmsucGFnZSk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gb2JqMnN0cihjaHVuay5wYXJhbXMpO1xyXG4gICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgdXJsLnB1c2goXCI/XCIgKyBwYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1cmwuam9pbihcIlwiKTtcclxufVxyXG5mdW5jdGlvbiBvYmoyc3RyKG9iaikge1xyXG4gICAgY29uc3Qgc3RyID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdHIucHVzaChcIiZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0ci5wdXNoKGtleSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLmpvaW4oXCJcIik7XHJcbn1cblxuY2xhc3MgUm91dGUge1xyXG4gICAgY29uc3RydWN0b3Iocm91dGUsIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dCA9IDE7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByb3V0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBwYXJzZShyb3V0ZSksXHJcbiAgICAgICAgICAgICAgICBwYXRoOiByb3V0ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4XTtcclxuICAgIH1cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXggKyB0aGlzLl9uZXh0XTtcclxuICAgIH1cclxuICAgIHN1YnVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmwuc2xpY2UodGhpcy5pbmRleCk7XHJcbiAgICB9XHJcbiAgICBzaGlmdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJvdXRlKHRoaXMucm91dGUsIHRoaXMuaW5kZXggKyB0aGlzLl9uZXh0KTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXggKyAxOyBpIDwgdXJsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHVybFtpXS5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gdXJsMnN0cih0aGlzLnN1YnVybCgpKTtcclxuICAgICAgICByZXR1cm4gc3RyID8gc3RyLnN1YnN0cigxKSA6IFwiXCI7XHJcbiAgICB9XHJcbiAgICBfam9pbihwYXRoLCBraWRzKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIGlmIChwYXRoID09PSBudWxsKSB7IC8vIGNoYW5nZSBvZiBwYXJhbWV0ZXJzLCByb3V0ZSBlbGVtZW50cyBhcmUgbm90IGFmZmVjdGVkXHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9sZCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIHVybCA9IG9sZC5zbGljZSgwLCB0aGlzLmluZGV4ICsgKGtpZHMgPyB0aGlzLl9uZXh0IDogMCkpO1xyXG4gICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5jb25jYXQocGFyc2UocGF0aCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVybC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFtpXS52aWV3ID0gb2xkW2ldLnZpZXc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkW2ldICYmIHVybFtpXS5wYWdlID09PSBvbGRbaV0ucGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFtpXS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQocGF0aCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2pvaW4ocGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gdXJsMnN0cih1cmwpO1xyXG4gICAgICAgIHRoaXMucm91dGUudXJsID0gdXJsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnBhdGg7XHJcbiAgICB9XHJcbiAgICBzaG93KHBhdGgsIHZpZXcsIGtpZHMpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9qb2luKHBhdGgsIGtpZHMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVkaXJlY3QgPSB1cmwyc3RyKHVybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0LFxyXG4gICAgICAgICAgICAgICAgY29uZmlybTogUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgYXBwID0gdmlldyA/IHZpZXcuYXBwIDogbnVsbDtcclxuICAgICAgICAgICAgLy8gd2hlbiBjcmVhdGluZyBhIG5ldyByb3V0ZSwgaXQgcG9zc2libGUgdGhhdCBpdCB3aWxsIG5vdCBoYXZlIGFueSBjb250ZW50XHJcbiAgICAgICAgICAgIC8vIGd1YXJkIGlzIG5vdCBuZWNlc3NhcnkgaW4gc3VjaCBjYXNlXHJcbiAgICAgICAgICAgIGlmIChhcHApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGFwcC5jYWxsRXZlbnQoXCJhcHA6Z3VhcmRcIiwgW29iai5yZWRpcmVjdCwgdmlldywgb2JqXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmouY29uZmlybS5jYXRjaCgoKSA9PiBvYmoucmVkaXJlY3QgPSBudWxsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmoucmVkaXJlY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnJlZGlyZWN0ICE9PSByZWRpcmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5zaG93KG9iai5yZWRpcmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gcmVkaXJlY3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlLnVybCA9IHVybDtcclxuICAgICAgICAgICAgICAgIHJlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpemUobikge1xyXG4gICAgICAgIHRoaXMuX25leHQgPSBuO1xyXG4gICAgfVxyXG4gICAgc3BsaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5yb3V0ZS51cmwuc2xpY2UodGhpcy5pbmRleCArIDEpLFxyXG4gICAgICAgICAgICBwYXRoOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocm91dGUudXJsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByb3V0ZS5wYXRoID0gdXJsMnN0cihyb3V0ZS51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJvdXRlKHJvdXRlLCAwKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShuYW1lLCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjaHVuayA9IHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXggKyAoaW5kZXggfHwgMCldO1xyXG4gICAgICAgIGlmICghY2h1bmspIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZS51cmwucHVzaCh7IHBhZ2U6IFwiXCIsIHBhcmFtczoge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShuYW1lLCB2YWx1ZSwgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBjaHVuay5wYWdlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjaHVuay5wYXJhbXNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gdXJsMnN0cih0aGlzLnJvdXRlLnVybCk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgSmV0VmlldyBleHRlbmRzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoYXBwLCBjb25maWcpIHtcclxuICAgICAgICBzdXBlcihhcHAud2ViaXgpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIC8vdGhpcy4kY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbiAgICB1aSh1aSwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgfHwgdWkuY29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGpldHZpZXcgPSB0aGlzLmFwcC5jcmVhdGVWaWV3KHVpKTtcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGpldHZpZXcpO1xyXG4gICAgICAgIGpldHZpZXcucmVuZGVyKGNvbnRhaW5lciwgdGhpcy5fc2VnbWVudCwgdGhpcyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1aSAhPT0gXCJvYmplY3RcIiB8fCAodWkgaW5zdGFuY2VvZiBKZXRCYXNlKSkge1xyXG4gICAgICAgICAgICAvLyByYXcgd2ViaXggVUlcclxuICAgICAgICAgICAgcmV0dXJuIGpldHZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gamV0dmlldy5nZXRSb290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvdyhwYXRoLCBjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgLy8gY29udmVydCBwYXJhbWV0ZXJzIG9iamVjdCB0byB1cmxcclxuICAgICAgICBpZiAodHlwZW9mIHBhdGggPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGF0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbShrZXksIHBhdGhba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF0aCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZWxpZ2F0ZSB0byBhcHAgaW4gY2FzZSBvZiByb290IHByZWZpeFxyXG4gICAgICAgICAgICBpZiAocGF0aC5zdWJzdHIoMCwgMSkgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsb2NhbCBwYXRoLCBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoXCIuL1wiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHBhcmVudCBwYXRoLCBjYWxsIHBhcmVudCB2aWV3XHJcbiAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoXCIuLi9cIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuc2hvdyhwYXRoLnN1YnN0cigzKSwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KFwiL1wiICsgcGF0aC5zdWJzdHIoMykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuZ2V0U3ViVmlld0luZm8oY29uZmlnLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWIucGFyZW50ICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1Yi5wYXJlbnQuc2hvdyhwYXRoLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29uZmlnLnRhcmdldCAmJiBjb25maWcudGFyZ2V0ICE9PSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJGcmFtZUxvY2soY29uZmlnLnRhcmdldCwgc3ViLnN1YnZpZXcsIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhcIi9cIiArIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93KHRoaXMuX3NlZ21lbnQsIHBhdGgsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgX3Nob3coc2VnbWVudCwgcGF0aCwgdmlldykge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50LnNob3cocGF0aCwgdmlldywgdHJ1ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRfdXJsX2RhdGEoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VnbWVudC5yb3V0ZS5saW5rUm91dGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5nZXRSb3V0ZXIoKS5zZXQoc2VnbWVudC5yb3V0ZS5wYXRoLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbc2VnbWVudC5yb3V0ZS5wYXRoXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXQoXyR2aWV3LCBfJCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIHJlYWR5KF8kdmlldywgXyR1cmwpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBjb25maWcoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAud2ViaXgubWVzc2FnZShcIlZpZXc6Q29uZmlnIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxuICAgIHVybENoYW5nZShfJHZpZXcsIF8kdXJsKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lLaWRzKCk7XHJcbiAgICAgICAgLy8gZGVzdHJveSBhY3R1YWwgVUlcclxuICAgICAgICB0aGlzLl9yb290LmRlc3RydWN0b3IoKTtcclxuICAgICAgICBzdXBlci5kZXN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbiAgICB1c2UocGx1Z2luLCBjb25maWcpIHtcclxuICAgICAgICBwbHVnaW4odGhpcy5hcHAsIHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveUtpZHMoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95U3VicygpO1xyXG4gICAgICAgIHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIudGFnTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb290LmRlc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudC5yZWZyZXNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcih0aGlzLl9zZWdtZW50KTtcclxuICAgIH1cclxuICAgIHJlbmRlcihyb290LCB1cmwsIHBhcmVudCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHVybCA9IG5ldyBSb3V0ZSh1cmwsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZWdtZW50ID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLl9pbml0X3VybF9kYXRhKCk7XHJcbiAgICAgICAgcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcclxuICAgICAgICBjb25zdCBfY29udGFpbmVyID0gKHR5cGVvZiByb290ID09PSBcInN0cmluZ1wiKSA/IHRoaXMud2ViaXgudG9Ob2RlKHJvb3QpIDogcm9vdDtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyICE9PSBfY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IF9jb250YWluZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIodXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKS50aGVuKCgpID0+IHRoaXMuZ2V0Um9vdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyKHVybCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnKCk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy50aGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWcudGhlbihjZmcgPT4gdGhpcy5fcmVuZGVyX2ZpbmFsKGNmZywgdXJsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyX2ZpbmFsKGNvbmZpZywgdXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyX2ZpbmFsKGNvbmZpZywgdXJsKSB7XHJcbiAgICAgICAgLy8gZ2V0IHByZXZpb3VzIHZpZXcgaW4gdGhlIHNhbWUgc2xvdFxyXG4gICAgICAgIGxldCBzbG90ID0gbnVsbDtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICBsZXQgc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5fY29udGFpbmVyLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgc2xvdCA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgaWYgKHNsb3QucG9wdXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMud2ViaXguJCQoc2xvdC5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdmlldyBhbHJlYWR5IGRlc3Ryb3llZFxyXG4gICAgICAgIGlmICghdGhpcy5hcHAgfHwgIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5fc2VnbWVudC5jdXJyZW50KCk7XHJcbiAgICAgICAgLy8gdXNpbmcgd3JhcHBlciBvYmplY3QsIHNvIHVpIGNhbiBiZSBjaGFuZ2VkIGZyb20gYXBwOnJlbmRlciBldmVudFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdWk6IHt9IH07XHJcbiAgICAgICAgdGhpcy5hcHAuY29weUNvbmZpZyhjb25maWcsIHJlc3VsdC51aSwgdGhpcy5fc3Vicyk7XHJcbiAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnJlbmRlclwiLCBbdGhpcywgdXJsLCByZXN1bHRdKTtcclxuICAgICAgICByZXN1bHQudWkuJHNjb3BlID0gdGhpcztcclxuICAgICAgICAvKiBkZXN0cm95IG9sZCBIVE1MIGF0dGFjaGVkIHZpZXdzIGJlZm9yZSBjcmVhdGluZyBuZXcgb25lICovXHJcbiAgICAgICAgaWYgKCFzbG90ICYmIGN1cnJlbnQuaXNOZXcgJiYgY3VycmVudC52aWV3KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFkZGluZyBpbnNpZGUgb2YgbXVsdGl2aWV3IC0gcHJlc2VydmUgb2xkIGlkXHJcbiAgICAgICAgICAgIGlmIChzbG90ICYmICFzaG93KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGR1aSA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG9sZHVpLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5hbWUgPT09IFwibXVsdGl2aWV3XCIgJiYgIXJlc3VsdC51aS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC51aS5pZCA9IG9sZHVpLmNvbmZpZy5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5hcHAud2ViaXgudWkocmVzdWx0LnVpLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBhc1dpbiA9IHRoaXMuX3Jvb3Q7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciB1cmwgYWRkZWQgdG8gaWdub3JlIHRoaXMudWkgY2FsbHNcclxuICAgICAgICAgICAgaWYgKHNob3cgJiYgYXNXaW4uc2V0UG9zaXRpb24gJiYgIWFzV2luLmlzVmlzaWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhc1dpbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2hlY2ssIGlmIHdlIGFyZSByZXBsYWNpbmcgc29tZSBvbGRlciB2aWV3XHJcbiAgICAgICAgICAgIGlmIChzbG90KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xvdC52aWV3ICYmIHNsb3QudmlldyAhPT0gdGhpcyAmJiBzbG90LnZpZXcgIT09IHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNsb3QuaWQgPSB0aGlzLl9yb290LmNvbmZpZy5pZDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldFBhcmVudFZpZXcoKSB8fCAhdGhpcy5hcHAuYXBwKVxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3QudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHdlIGhhdmUgc3ViYXBwLCBzZXQgd2hvbGUgYXBwIGFzIGEgdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIG9uIGRlc3RydWN0aW9uLCB0aGUgd2hvbGUgYXBwIHdpbGwgYmUgZGVzdHJveWVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3ID0gdGhpcy5hcHA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNOZXcpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBQcm9taXNlLnJlc29sdmUodGhpcy5faW5pdCh0aGlzLl9yb290LCB1cmwpKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0VXJsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkeSh0aGlzLl9yb290LCB1cmwuc3VidXJsKCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuY2F0Y2goZXJyID0+IHRoaXMuX2luaXRFcnJvcih0aGlzLCBlcnIpKTtcclxuICAgIH1cclxuICAgIF9pbml0KHZpZXcsIHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluaXQodmlldywgdXJsLnN1YnVybCgpKTtcclxuICAgIH1cclxuICAgIF91cmxDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnVybGNoYW5nZVwiLCBbdGhpcywgdGhpcy5fc2VnbWVudF0pO1xyXG4gICAgICAgIGNvbnN0IHdhaXRzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuX3N1YnNba2V5XTtcclxuICAgICAgICAgICAgY29uc3Qgd2FpdCA9IHRoaXMuX3JlbmRlckZyYW1lTG9jayhrZXksIGZyYW1lLCBudWxsKTtcclxuICAgICAgICAgICAgaWYgKHdhaXQpIHtcclxuICAgICAgICAgICAgICAgIHdhaXRzLnB1c2god2FpdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHdhaXRzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXJsQ2hhbmdlKHRoaXMuX3Jvb3QsIHRoaXMuX3NlZ21lbnQuc3VidXJsKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3JlbmRlckZyYW1lTG9jayhrZXksIGZyYW1lLCBwYXRoKSB7XHJcbiAgICAgICAgLy8gaWYgc3VidmlldyBpcyBub3Qgb2NjdXBpZWQgYnkgc29tZSByZW5kZXJpbmcgeWV0XHJcbiAgICAgICAgaWYgKCFmcmFtZS5sb2NrKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHJlaXZlIGFuZCBzdG9yZSByZW5kZXJpbmcgZW5kIHByb21pc2VcclxuICAgICAgICAgICAgY29uc3QgbG9jayA9IHRoaXMuX3JlbmRlckZyYW1lKGtleSwgZnJhbWUsIHBhdGgpO1xyXG4gICAgICAgICAgICBpZiAobG9jaykge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgbG9jayBhZnRlciBmcmFtZSByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgIC8vIGFzIHByb21pc2UuZmluYWxseSBpcyBub3Qgc3VwcG9ydGVkIGJ5ICBXZWJpeCBsZXNzZXIgdGhhbiA2LjJcclxuICAgICAgICAgICAgICAgIC8vIHVzaW5nIGEgbW9yZSB2ZXJib3NlIG5vdGF0aW9uXHJcbiAgICAgICAgICAgICAgICBmcmFtZS5sb2NrID0gbG9jay50aGVuKCgpID0+IGZyYW1lLmxvY2sgPSBudWxsLCAoKSA9PiBmcmFtZS5sb2NrID0gbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHJlbmRlcmluZyBlbmQgcHJvbWlzZVxyXG4gICAgICAgIHJldHVybiBmcmFtZS5sb2NrO1xyXG4gICAgfVxyXG4gICAgX3JlbmRlckZyYW1lKGtleSwgZnJhbWUsIHBhdGgpIHtcclxuICAgICAgICAvL2RlZmF1bHQgcm91dGVcclxuICAgICAgICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VnbWVudC5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBuZXh0IHNlZ21lbnQgaW4gdXJsLCByZW5kZXIgaXRcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCB0aGlzLl9zZWdtZW50LnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZyYW1lLnZpZXcgJiYgZnJhbWUucG9wdXApIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoZXJlIGlzIG5vIG5leHQgc2VnbWVudCwgZGVsZXRlIHRoZSBleGlzdGluZyBzdWItdmlld1xyXG4gICAgICAgICAgICAgICAgZnJhbWUudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS52aWV3ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIG5ldyBwYXRoIHByb3ZpZGVkLCBzZXQgaXQgdG8gdGhlIGZyYW1lXHJcbiAgICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZnJhbWUudXJsID0gcGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW4gY2FzZSBvZiByb3V0ZWQgc3ViLXZpZXdcclxuICAgICAgICBpZiAoZnJhbWUucm91dGUpIHtcclxuICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIG5ldyBwYXRoIGZvciBzdWItdmlld1xyXG4gICAgICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1lLnJvdXRlLnNob3cocGF0aCwgZnJhbWUudmlldykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIGZyYW1lLnJvdXRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRvIG5vdCB0cmlnZ2VyIG9uQ2hhbmdlIGZvciBpc29sYXRlZCBzdWItdmlld3NcclxuICAgICAgICAgICAgaWYgKGZyYW1lLmJyYW5jaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2aWV3ID0gZnJhbWUudmlldztcclxuICAgICAgICAvLyBpZiB2aWV3IGRvZXNuJ3QgZXhpc3RzIHlldCwgaW5pdCBpdFxyXG4gICAgICAgIGlmICghdmlldyAmJiBmcmFtZS51cmwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFtZS51cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZywgc28gd2UgaGF2ZSBpc29sYXRlZCBzdWJ2aWV3IHVybFxyXG4gICAgICAgICAgICAgICAgZnJhbWUucm91dGUgPSBuZXcgUm91dGUoZnJhbWUudXJsLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCBmcmFtZS5yb3V0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvYmplY3QsIHNvIHdlIGhhdmUgYW4gZW1iZWRlZCBzdWJ2aWV3XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyYW1lLnVybCA9PT0gXCJmdW5jdGlvblwiICYmICEodmlldyBpbnN0YW5jZW9mIGZyYW1lLnVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gbmV3IGZyYW1lLnVybCh0aGlzLmFwcCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gZnJhbWUudXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRyaWdnZXIgb25DaGFuZ2UgZm9yIGFscmVhZHkgZXhpc3RlZCB2aWV3XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKGZyYW1lLCAoZnJhbWUucm91dGUgfHwgdGhpcy5fc2VnbWVudCksIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9pbml0RXJyb3IodmlldywgZXJyKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgaWYgdmlldyBpcyBkZXN0cm95ZWQsIGlnbm9yZSBhbnkgdmlldyByZWxhdGVkIGVycm9yc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmVycm9yKFwiYXBwOmVycm9yOmluaXR2aWV3XCIsIFtlcnIsIHZpZXddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlU3ViVmlldyhzdWIsIHN1YnVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5jcmVhdGVGcm9tVVJMKHN1YnVybC5jdXJyZW50KCksIHN1Yi52aWV3KS50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5yZW5kZXIoc3ViLCBzdWJ1cmwsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2Rlc3Ryb3lLaWRzKCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgY2hpbGQgdmlld3NcclxuICAgICAgICBjb25zdCB1aXMgPSB0aGlzLl9jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gdWlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICh1aXNbaV0gJiYgdWlzW2ldLmRlc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHVpc1tpXS5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVzZXQgdmFycyBmb3IgYmV0dGVyIEdDIHByb2Nlc3NpbmdcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG59XG5cbi8vIHdyYXBwZXIgZm9yIHJhdyBvYmplY3RzIGFuZCBKZXQgMS54IHN0cnVjdHNcclxuY2xhc3MgSmV0Vmlld1JhdyBleHRlbmRzIEpldFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoYXBwLCBjb25maWcpIHtcclxuICAgICAgICBzdXBlcihhcHAsIGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5fdWkgPSBjb25maWcudWk7XHJcbiAgICB9XHJcbiAgICBjb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFN1YlJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnLCBhcHApIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuYXBwO1xyXG4gICAgICAgIGEuYXBwLmdldFJvdXRlcigpLnNldChhLl9zZWdtZW50LmFwcGVuZCh0aGlzLnBhdGgpLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG59XG5cbmxldCBfb25jZSA9IHRydWU7XHJcbmNsYXNzIEpldEFwcEJhc2UgZXh0ZW5kcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHdlYml4ID0gKGNvbmZpZyB8fCB7fSkud2ViaXggfHwgd2luZG93LndlYml4O1xyXG4gICAgICAgIHN1cGVyKHdlYml4KTtcclxuICAgICAgICAvLyBpbml0IGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy53ZWJpeC5leHRlbmQoe1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFwcFwiLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjEuMFwiLFxyXG4gICAgICAgICAgICBzdGFydDogXCIvaG9tZVwiXHJcbiAgICAgICAgfSwgY29uZmlnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmFwcCA9IHRoaXMuY29uZmlnLmFwcDtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZXMgPSB7fTtcclxuICAgICAgICB0aGlzLndlYml4LmV4dGVuZCh0aGlzLCB0aGlzLndlYml4LkV2ZW50U3lzdGVtKTtcclxuICAgIH1cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ViU2VnbWVudC5zdWJ1cmwoKTtcclxuICAgIH1cclxuICAgIGdldFVybFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ViU2VnbWVudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZ2V0U2VydmljZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHRoaXMuX3NlcnZpY2VzW25hbWVdO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb2JqID0gdGhpcy5fc2VydmljZXNbbmFtZV0gPSBvYmoodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICBzZXRTZXJ2aWNlKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlc1tuYW1lXSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0U3ViVmlldygpLmRlc3RydWN0b3IoKTtcclxuICAgICAgICBzdXBlci5kZXN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb3B5IG9iamVjdCBhbmQgY29sbGVjdCBleHRyYSBoYW5kbGVyc1xyXG4gICAgY29weUNvbmZpZyhvYmosIHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgLy8gcmF3IHVpIGNvbmZpZ1xyXG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBKZXRCYXNlIHx8XHJcbiAgICAgICAgICAgICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHsgJHN1YnZpZXc6IG9iaiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzdWJ2aWV3IHBsYWNlaG9sZGVyXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmouJHN1YnZpZXcgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRTdWJWaWV3KG9iaiwgdGFyZ2V0LCBjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwcm9jZXNzIHN1Yi1wcm9wZXJ0aWVzXHJcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IChvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge30pO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWV0aG9kIGluIG9iaikge1xyXG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBvYmpbbWV0aG9kXTtcclxuICAgICAgICAgICAgLy8gdmlldyBjbGFzc1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBvaW50ID09PSBcImZ1bmN0aW9uXCIgJiYgcG9pbnQucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7ICRzdWJ2aWV3OiBwb2ludCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb2ludCAmJiB0eXBlb2YgcG9pbnQgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICAgICEocG9pbnQgaW5zdGFuY2VvZiB0aGlzLndlYml4LkRhdGFDb2xsZWN0aW9uKSAmJiAhKHBvaW50IGluc3RhbmNlb2YgUmVnRXhwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gbmV3IERhdGUocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29weUNvbmZpZyhwb2ludCwgKHBvaW50IGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KSwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29weSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IGNvcHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBwb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgZ2V0Um91dGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRyb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBjbGlja0hhbmRsZXIoZSkge1xyXG4gICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IChlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJpZ2dlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yVmlldyh0YXJnZXQsIHZpZXcgPT4gdmlldy5hcHAudHJpZ2dlcih0cmlnZ2VyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyb3V0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3V0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvclZpZXcodGFyZ2V0LCB2aWV3ID0+IHZpZXcuc2hvdyhyb3V0ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Um9vdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3KCkuZ2V0Um9vdCgpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3N1YlNlZ21lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlldygpLnJlZnJlc2goKS50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbdGhpcy5nZXRVcmwoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvYWRWaWV3KHVybCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy5jb25maWcudmlld3M7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHVybCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2xvYWRFcnJvcihcIlwiLCBuZXcgRXJyb3IoXCJXZWJpeCBKZXQ6IEVtcHR5IHVybCBzZWdtZW50XCIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh2aWV3cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2aWV3cyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tIGxvYWRpbmcgc3RyYXRlZ3lcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2aWV3cyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJlZGVmaW5lZCBoYXNoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmlld3NbdXJsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT09IFwiX2JsYW5rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2xvYWRWaWV3RHluYW1pYyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2xvYWRFcnJvcih1cmwsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjdXN0b20gaGFuZGxlciBjYW4gcmV0dXJuIHZpZXcgb3IgaXRzIHByb21pc2VcclxuICAgICAgICBpZiAoIXJlc3VsdC50aGVuKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXQgZXJyb3IgaGFuZGxlclxyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFxyXG4gICAgICAgICAgICAudGhlbihtb2R1bGUgPT4gbW9kdWxlLl9fZXNNb2R1bGUgPyBtb2R1bGUuZGVmYXVsdCA6IG1vZHVsZSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLl9sb2FkRXJyb3IodXJsLCBlcnIpKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgX2ZvclZpZXcodGFyZ2V0LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMud2ViaXguJCQodGFyZ2V0KTtcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICBoYW5kbGVyKHZpZXcuJHNjb3BlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfbG9hZFZpZXdEeW5hbWljKHVybCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlRnJvbVVSTChjaHVuaywgbm93KSB7XHJcbiAgICAgICAgbGV0IHZpZXc7XHJcbiAgICAgICAgaWYgKGNodW5rLmlzTmV3IHx8ICFjaHVuay52aWV3KSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSB0aGlzLmxvYWRWaWV3KGNodW5rLnBhZ2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbih1aSA9PiB0aGlzLmNyZWF0ZVZpZXcodWksIG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSBQcm9taXNlLnJlc29sdmUoY2h1bmsudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVmlldyh1aSwgbmFtZSkge1xyXG4gICAgICAgIGxldCBvYmo7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1aSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmICh1aS5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRBcHBCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB1aSh7IGFwcDogdGhpcywgbmFtZSwgcm91dGVyOiBTdWJSb3V0ZXIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgY2xhc3NcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdWkodGhpcywgeyBuYW1lIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgZmFjdG9yeSBmdW5jdGlvbnNcclxuICAgICAgICAgICAgICAgIHVpID0gdWkodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVpIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICBvYmogPSB1aTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFVJIG9iamVjdFxyXG4gICAgICAgICAgICBvYmogPSBuZXcgSmV0Vmlld1Jhdyh0aGlzLCB7IG5hbWUsIHVpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgLy8gc2hvdyB2aWV3IHBhdGhcclxuICAgIHNob3codXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuX2NvbnRhaW5lciwgKHVybCB8fCB0aGlzLmNvbmZpZy5zdGFydCkpO1xyXG4gICAgfVxyXG4gICAgLy8gZXZlbnQgaGVscGVyc1xyXG4gICAgdHJpZ2dlcihuYW1lLCAuLi5yZXN0KSB7XHJcbiAgICAgICAgdGhpcy5hcHBseShuYW1lLCByZXN0KTtcclxuICAgIH1cclxuICAgIGFwcGx5KG5hbWUsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChuYW1lLCBkYXRhKTtcclxuICAgIH1cclxuICAgIGFjdGlvbihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViaXguYmluZChmdW5jdGlvbiAoLi4ucmVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5KG5hbWUsIHJlc3QpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb24obmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuYXR0YWNoRXZlbnQobmFtZSwgaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICB1c2UocGx1Z2luLCBjb25maWcpIHtcclxuICAgICAgICBwbHVnaW4odGhpcywgbnVsbCwgY29uZmlnKTtcclxuICAgIH1cclxuICAgIGVycm9yKG5hbWUsIGVyKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQobmFtZSwgZXIpO1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOmVycm9yXCIsIGVyKTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kZWJ1Zykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcltpXSBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlcltpXS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YoXCJNb2R1bGUgYnVpbGQgZmFpbGVkXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xceDFiXFxbWzAtOTtdKm0vZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDxwcmUgc3R5bGU9J2ZvbnQtc2l6ZToxNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM2ODczOyBjb2xvcjogIzAwMDsgcGFkZGluZzoxMHB4Oyc+JHt0ZXh0fTwvcHJlPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IFwiPGJyPjxicj5DaGVjayBjb25zb2xlIGZvciBtb3JlIGRldGFpbHNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5tZXNzYWdlKHsgdHlwZTogXCJlcnJvclwiLCB0ZXh0OiB0ZXh0LCBleHBpcmU6IC0xIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZSAqL1xyXG4gICAgfVxyXG4gICAgLy8gcmVuZGVycyB0b3Agdmlld1xyXG4gICAgcmVuZGVyKHJvb3QsIHVybCwgcGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gKHR5cGVvZiByb290ID09PSBcInN0cmluZ1wiKSA/XHJcbiAgICAgICAgICAgIHRoaXMud2ViaXgudG9Ob2RlKHJvb3QpIDpcclxuICAgICAgICAgICAgKHJvb3QgfHwgZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RJbml0ID0gIXRoaXMuJHJvdXRlcjtcclxuICAgICAgICBsZXQgcGF0aCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGZpcnN0SW5pdCkge1xyXG4gICAgICAgICAgICBpZiAoX29uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguYXR0YWNoRXZlbnQoXCJvbkNsaWNrXCIsIGUgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgICAgICAgICAgICAgX29uY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gbmV3IFJvdXRlKHVybCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc3ViU2VnbWVudCA9IHRoaXMuX2ZpcnN0X3N0YXJ0KHVybCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YlNlZ21lbnQucm91dGUubGlua1JvdXRlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB1cmwuc3BsaXQoKS5yb3V0ZS5wYXRoIHx8IHRoaXMuY29uZmlnLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHVybC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0U3ViVmlldygpO1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSB0aGlzLl9zdWJTZWdtZW50O1xyXG4gICAgICAgIGNvbnN0IHJlYWR5ID0gc2VnbWVudC5zaG93KHBhdGgsIHRvcClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGVGcm9tVVJMKHNlZ21lbnQuY3VycmVudCgpLCB0b3ApKVxyXG4gICAgICAgICAgICAudGhlbih2aWV3ID0+IHZpZXcucmVuZGVyKHJvb3QsIHNlZ21lbnQpKVxyXG4gICAgICAgICAgICAudGhlbihiYXNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnNldChzZWdtZW50LnJvdXRlLnBhdGgsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbdGhpcy5nZXRVcmwoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYmFzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gdGhpcy5yZWFkeS50aGVuKCgpID0+IHJlYWR5KTtcclxuICAgICAgICByZXR1cm4gcmVhZHk7XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLl9zdWJTZWdtZW50LmN1cnJlbnQoKS52aWV3O1xyXG4gICAgICAgICAgICBpZiAodmlldylcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEpldFZpZXcodGhpcywge30pO1xyXG4gICAgfVxyXG4gICAgX2ZpcnN0X3N0YXJ0KHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IHJvdXRlO1xyXG4gICAgICAgIGNvbnN0IGNiID0gKGEpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3coYSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyID0gbmV3ICh0aGlzLmNvbmZpZy5yb3V0ZXIpKGNiLCB0aGlzLmNvbmZpZywgdGhpcyk7XHJcbiAgICAgICAgLy8gc3RhcnQgYW5pbWF0aW9uIGZvciB0b3AtbGV2ZWwgYXBwXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gZG9jdW1lbnQuYm9keSAmJiB0aGlzLmNvbmZpZy5hbmltYXRpb24gIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5hZGRDc3Mobm9kZSwgXCJ3ZWJpeGFwcHN0YXJ0XCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5yZW1vdmVDc3Mobm9kZSwgXCJ3ZWJpeGFwcHN0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLmFkZENzcyhub2RlLCBcIndlYml4YXBwXCIpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm91dGUpIHtcclxuICAgICAgICAgICAgLy8gaWYgbm8gdXJsIGRlZmluZWQsIGNoZWNrIHJvdXRlciBmaXJzdFxyXG4gICAgICAgICAgICBsZXQgdXJsU3RyaW5nID0gdGhpcy4kcm91dGVyLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAoIXVybFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdXJsU3RyaW5nID0gdGhpcy5jb25maWcuc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIuc2V0KHVybFN0cmluZywgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm91dGUgPSBuZXcgUm91dGUodXJsU3RyaW5nLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgcm91dGUuY3VycmVudCgpLnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAocm91dGUubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZSA9IHJvdXRlLnNwbGl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZSh0aGlzLmNvbmZpZy5zdGFydCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgfVxyXG4gICAgLy8gZXJyb3IgZHVyaW5nIHZpZXcgcmVzb2x2aW5nXHJcbiAgICBfbG9hZEVycm9yKHVybCwgZXJyKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcihcImFwcDplcnJvcjpyZXNvbHZlXCIsIFtlcnIsIHVybF0pO1xyXG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlOiBcIiBcIiB9O1xyXG4gICAgfVxyXG4gICAgYWRkU3ViVmlldyhvYmosIHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gb2JqLiRzdWJ2aWV3ICE9PSB0cnVlID8gb2JqLiRzdWJ2aWV3IDogbnVsbDtcclxuICAgICAgICBjb25zdCBuYW1lID0gb2JqLm5hbWUgfHwgKHVybCA/IHRoaXMud2ViaXgudWlkKCkgOiBcImRlZmF1bHRcIik7XHJcbiAgICAgICAgdGFyZ2V0LmlkID0gb2JqLmlkIHx8IFwic1wiICsgdGhpcy53ZWJpeC51aWQoKTtcclxuICAgICAgICBjb25zdCB2aWV3ID0gY29uZmlnW25hbWVdID0ge1xyXG4gICAgICAgICAgICBpZDogdGFyZ2V0LmlkLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGJyYW5jaDogb2JqLmJyYW5jaCxcclxuICAgICAgICAgICAgcG9wdXA6IG9iai5wb3B1cFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHZpZXcucG9wdXAgPyBudWxsIDogdGFyZ2V0O1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEhhc2hSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX2RldGVjdFByZWZpeCgpO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHRoaXMuY2IodGhpcy5nZXQoKSk7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJlID0gcGF0aC5zcGxpdChcIj9cIiwgMik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlc1trZXldID09PSBjb21wYXJlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGtleSArIChjb21wYXJlLmxlbmd0aCA+IDEgPyBcIj9cIiArIGNvbXBhcmVbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZXQoKSAhPT0gcGF0aCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdGhpcy5wcmVmaXggKyB0aGlzLnN1Zml4ICsgcGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIGxldCBwYXRoID0gdGhpcy5fZ2V0UmF3KCkucmVwbGFjZSh0aGlzLnByZWZpeCwgXCJcIikucmVwbGFjZSh0aGlzLnN1Zml4LCBcIlwiKTtcclxuICAgICAgICBwYXRoID0gcGF0aCAhPT0gXCIvXCIgPyBwYXRoIDogXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmUgPSBwYXRoLnNwbGl0KFwiP1wiLCAyKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWcucm91dGVzW2NvbXBhcmVbMF1dO1xyXG4gICAgICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0ga2V5ICsgKGNvbXBhcmUubGVuZ3RoID4gMSA/IFwiP1wiICsgY29tcGFyZVsxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG4gICAgX2RldGVjdFByZWZpeCgpIHtcclxuICAgICAgICAvLyB1c2UgXCIjIVwiIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgY29uc3Qgc3VmaXggPSB0aGlzLmNvbmZpZy5yb3V0ZXJQcmVmaXg7XHJcbiAgICAgICAgdGhpcy5zdWZpeCA9IFwiI1wiICsgKCh0eXBlb2Ygc3VmaXggPT09IFwidW5kZWZpbmVkXCIpID8gXCIhXCIgOiBzdWZpeCk7XHJcbiAgICAgICAgdGhpcy5wcmVmaXggPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiLCAyKVswXTtcclxuICAgIH1cclxuICAgIF9nZXRSYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB9XHJcbn1cblxubGV0IGlzUGF0Y2hlZCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBwYXRjaCh3KSB7XHJcbiAgICBpZiAoaXNQYXRjaGVkIHx8ICF3KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaXNQYXRjaGVkID0gdHJ1ZTtcclxuICAgIC8vIGN1c3RvbSBwcm9taXNlIGZvciBJRThcclxuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcclxuICAgIGlmICghd2luLlByb21pc2UpIHtcclxuICAgICAgICB3aW4uUHJvbWlzZSA9IHcucHJvbWlzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZlcnNpb24gPSB3LnZlcnNpb24uc3BsaXQoXCIuXCIpO1xyXG4gICAgLy8gd2lsbCBiZSBmaXhlZCBpbiB3ZWJpeCA1LjNcclxuICAgIGlmICh2ZXJzaW9uWzBdICogMTAgKyB2ZXJzaW9uWzFdICogMSA8IDUzKSB7XHJcbiAgICAgICAgdy51aS5mcmVlemUgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICAvLyBkaXNhYmxlZCBiZWNhdXNlIHdlYml4IGpldCA1LjAgY2FuJ3QgaGFuZGxlIHJlc2l6ZSBvZiBzY3JvbGx2aWV3IGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyB3LnVpLiRmcmVlemUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBoYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnRoZW4pIHtcclxuICAgICAgICAgICAgICAgIHJlcy50aGVuKGZ1bmN0aW9uIChzb21lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdy51aS4kZnJlZXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdy51aS5yZXNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29tZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdy51aS4kZnJlZXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB3LnVpLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGFkZGluZyB2aWV3cyBhcyBjbGFzc2VzXHJcbiAgICBjb25zdCBiYXNlQWRkID0gdy51aS5iYXNlbGF5b3V0LnByb3RvdHlwZS5hZGRWaWV3O1xyXG4gICAgY29uc3QgYmFzZVJlbW92ZSA9IHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUucmVtb3ZlVmlldztcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBhZGRWaWV3KHZpZXcsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgbG9naWMgb25seSBmb3Igd2lkZ2V0cyBpbnNpZGUgb2YgamV0LXZpZXdcclxuICAgICAgICAgICAgLy8gaWdub3JlIGNhc2Ugd2hlbiBhZGRWaWV3IHVzZWQgd2l0aCBhbHJlYWR5IGluaXRpYWxpemVkIHdpZGdldFxyXG4gICAgICAgICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUud2ViaXhKZXQgJiYgIXZpZXcucXVlcnlWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqdmlldyA9IHRoaXMuJHNjb3BlO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmlldyA9IGp2aWV3LmFwcC5jb3B5Q29uZmlnKHZpZXcsIHt9LCBzdWJzKTtcclxuICAgICAgICAgICAgICAgIGJhc2VBZGQuYXBwbHkodGhpcywgW3ZpZXcsIGluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdWJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAganZpZXcuX3JlbmRlckZyYW1lKGtleSwgc3Vic1trZXldLCBudWxsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganZpZXcuX3N1YnNba2V5XSA9IHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc2VBZGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlVmlldygpIHtcclxuICAgICAgICAgICAgYmFzZVJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUud2ViaXhKZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSB0aGlzLiRzY29wZS5fc3VicztcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFsbCBzdWItdmlld3MsIGRlc3Ryb3kgYW5kIGNsZWFuIHRoZSByZW1vdmVkIG9uZVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3Vicykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3LiQkKHRlc3QuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3Qudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHcuZXh0ZW5kKHcudWkubGF5b3V0LnByb3RvdHlwZSwgY29uZmlnLCB0cnVlKTtcclxuICAgIHcuZXh0ZW5kKHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICAvLyB3cmFwcGVyIGZvciB1c2luZyBKZXQgQXBwcyBhcyB2aWV3c1xyXG4gICAgdy5wcm90b1VJKHtcclxuICAgICAgICBuYW1lOiBcImpldGFwcFwiLFxyXG4gICAgICAgICRpbml0KGNmZykge1xyXG4gICAgICAgICAgICB0aGlzLiRhcHAgPSBuZXcgdGhpcy5hcHAoY2ZnKTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSB3LnVpZCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNmZy5ib2R5ID0geyBpZCB9O1xyXG4gICAgICAgICAgICB0aGlzLiRyZWFkeS5wdXNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcC5yZW5kZXIoeyBpZCB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLiRhcHApIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW4gPSB0aGlzLiRhcHBba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luID09PSBcImZ1bmN0aW9uXCIgJiYgIXRoaXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IG9yaWdpbi5iaW5kKHRoaXMuJGFwcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB3LnVpLnByb3h5KTtcclxufVxuXG5jbGFzcyBKZXRBcHAgZXh0ZW5kcyBKZXRBcHBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZy5yb3V0ZXIgPSBjb25maWcucm91dGVyIHx8IEhhc2hSb3V0ZXI7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICBwYXRjaCh0aGlzLndlYml4KTtcclxuICAgIH1cclxuICAgIF9sb2FkVmlld0R5bmFtaWModXJsKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcLi9nLCBcIi9cIik7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJqZXQtdmlld3MvXCIgKyB1cmwpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFN0b3JlUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcsIGFwcCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlIHx8IGFwcC53ZWJpeC5zdG9yYWdlLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5uYW1lID0gKGNvbmZpZy5zdG9yZU5hbWUgfHwgY29uZmlnLmlkICsgXCI6cm91dGVcIik7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5wdXQodGhpcy5uYW1lLCBwYXRoKTtcclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFVybFJvdXRlciBleHRlbmRzIEhhc2hSb3V0ZXIge1xyXG4gICAgX2RldGVjdFByZWZpeCgpIHtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdWZpeCA9IHRoaXMuY29uZmlnLnJvdXRlclByZWZpeCB8fCBcIlwiO1xyXG4gICAgfVxyXG4gICAgX2dldFJhdygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgRW1wdHlSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIF8kY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIFVubG9hZEd1YXJkKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICB2aWV3Lm9uKGFwcCwgYGFwcDpndWFyZGAsIGZ1bmN0aW9uIChfJHVybCwgcG9pbnQsIHByb21pc2UpIHtcclxuICAgICAgICBpZiAocG9pbnQgPT09IHZpZXcgfHwgcG9pbnQuY29udGFpbnModmlldykpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gY29uZmlnKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLmNvbmZpcm0gPSBQcm9taXNlLnJlamVjdChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5jb25maXJtID0gcHJvbWlzZS5jb25maXJtLnRoZW4oKCkgPT4gcmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cbi8vICAgICAoYykgMjAxMi0yMDE4IEFpcmJuYiwgSW5jLlxuXG4vLyB2YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG5mdW5jdGlvbiBoYXMoc3RvcmUsIGtleSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0b3JlLCBrZXkpO1xufVxuLy8gdmFyIGZvckVhY2ggPSByZXF1aXJlKCdmb3ItZWFjaCcpO1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChoYXMob2JqLCBrZXkpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoKGNvbnRleHQgfHwgb2JqKSwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cbi8vIHZhciB0cmltID0gcmVxdWlyZSgnc3RyaW5nLnByb3RvdHlwZS50cmltJyk7XG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG59XG4vLyB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBtZXNzYWdlO1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuXG4gIHRyeSB7IHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsgfSBjYXRjaCAoeCkge31cbn1cblxudmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgc3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0O1xuXG4vLyAjIyMjIFBsdXJhbGl6YXRpb24gbWV0aG9kc1xuLy8gVGhlIHN0cmluZyB0aGF0IHNlcGFyYXRlcyB0aGUgZGlmZmVyZW50IHBocmFzZSBwb3NzaWJpbGl0aWVzLlxudmFyIGRlbGltaXRlciA9ICd8fHx8JztcblxudmFyIHJ1c3NpYW5QbHVyYWxHcm91cHMgPSBmdW5jdGlvbiAobikge1xuICB2YXIgZW5kID0gbiAlIDEwO1xuICBpZiAobiAhPT0gMTEgJiYgZW5kID09PSAxKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKDIgPD0gZW5kICYmIGVuZCA8PSA0ICYmICEobiA+PSAxMiAmJiBuIDw9IDE0KSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAyO1xufTtcblxuLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgcGx1cmFsIGxvZ2ljLlxudmFyIHBsdXJhbFR5cGVzID0ge1xuICBhcmFiaWM6IGZ1bmN0aW9uIChuKSB7XG4gICAgLy8gaHR0cDovL3d3dy5hcmFiZXllcy5vcmcvUGx1cmFsX0Zvcm1zXG4gICAgaWYgKG4gPCAzKSB7IHJldHVybiBuOyB9XG4gICAgdmFyIGxhc3RUd28gPSBuICUgMTAwO1xuICAgIGlmIChsYXN0VHdvID49IDMgJiYgbGFzdFR3byA8PSAxMCkgcmV0dXJuIDM7XG4gICAgcmV0dXJuIGxhc3RUd28gPj0gMTEgPyA0IDogNTtcbiAgfSxcbiAgYm9zbmlhbl9zZXJiaWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBjaGluZXNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICBjcm9hdGlhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgZnJlbmNoOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbiA+IDEgPyAxIDogMDsgfSxcbiAgZ2VybWFuOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbiAhPT0gMSA/IDEgOiAwOyB9LFxuICBydXNzaWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBsaXRodWFuaWFuOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuICUgMTAgPT09IDEgJiYgbiAlIDEwMCAhPT0gMTEpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gbiAlIDEwID49IDIgJiYgbiAlIDEwIDw9IDkgJiYgKG4gJSAxMDAgPCAxMSB8fCBuICUgMTAwID4gMTkpID8gMSA6IDI7XG4gIH0sXG4gIGN6ZWNoOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuID09PSAxKSB7IHJldHVybiAwOyB9XG4gICAgcmV0dXJuIChuID49IDIgJiYgbiA8PSA0KSA/IDEgOiAyO1xuICB9LFxuICBwb2xpc2g6IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gPT09IDEpIHsgcmV0dXJuIDA7IH1cbiAgICB2YXIgZW5kID0gbiAlIDEwO1xuICAgIHJldHVybiAyIDw9IGVuZCAmJiBlbmQgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDI7XG4gIH0sXG4gIGljZWxhbmRpYzogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIChuICUgMTAgIT09IDEgfHwgbiAlIDEwMCA9PT0gMTEpID8gMSA6IDA7IH0sXG4gIHNsb3ZlbmlhbjogZnVuY3Rpb24gKG4pIHtcbiAgICB2YXIgbGFzdFR3byA9IG4gJSAxMDA7XG4gICAgaWYgKGxhc3RUd28gPT09IDEpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAobGFzdFR3byA9PT0gMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChsYXN0VHdvID09PSAzIHx8IGxhc3RUd28gPT09IDQpIHtcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICByZXR1cm4gMztcbiAgfVxufTtcblxuXG4vLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCB0byBpbmRpdmlkdWFsIGxhbmd1YWdlIGNvZGVzL2xvY2FsZXMuXG4vLyBXaWxsIGxvb2sgdXAgYmFzZWQgb24gZXhhY3QgbWF0Y2gsIGlmIG5vdCBmb3VuZCBhbmQgaXQncyBhIGxvY2FsZSB3aWxsIHBhcnNlIHRoZSBsb2NhbGVcbi8vIGZvciBsYW5ndWFnZSBjb2RlLCBhbmQgaWYgdGhhdCBkb2VzIG5vdCBleGlzdCB3aWxsIGRlZmF1bHQgdG8gJ2VuJ1xudmFyIHBsdXJhbFR5cGVUb0xhbmd1YWdlcyA9IHtcbiAgYXJhYmljOiBbJ2FyJ10sXG4gIGJvc25pYW5fc2VyYmlhbjogWydicy1MYXRuLUJBJywgJ2JzLUN5cmwtQkEnLCAnc3JsLVJTJywgJ3NyLVJTJ10sXG4gIGNoaW5lc2U6IFsnaWQnLCAnaWQtSUQnLCAnamEnLCAna28nLCAna28tS1InLCAnbG8nLCAnbXMnLCAndGgnLCAndGgtVEgnLCAnemgnXSxcbiAgY3JvYXRpYW46IFsnaHInLCAnaHItSFInXSxcbiAgZ2VybWFuOiBbJ2ZhJywgJ2RhJywgJ2RlJywgJ2VuJywgJ2VzJywgJ2ZpJywgJ2VsJywgJ2hlJywgJ2hpLUlOJywgJ2h1JywgJ2h1LUhVJywgJ2l0JywgJ25sJywgJ25vJywgJ3B0JywgJ3N2JywgJ3RyJ10sXG4gIGZyZW5jaDogWydmcicsICd0bCcsICdwdC1iciddLFxuICBydXNzaWFuOiBbJ3J1JywgJ3J1LVJVJ10sXG4gIGxpdGh1YW5pYW46IFsnbHQnXSxcbiAgY3plY2g6IFsnY3MnLCAnY3MtQ1onLCAnc2snXSxcbiAgcG9saXNoOiBbJ3BsJ10sXG4gIGljZWxhbmRpYzogWydpcyddLFxuICBzbG92ZW5pYW46IFsnc2wtU0wnXVxufTtcblxuZnVuY3Rpb24gbGFuZ1RvVHlwZU1hcChtYXBwaW5nKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yRWFjaChtYXBwaW5nLCBmdW5jdGlvbiAobGFuZ3MsIHR5cGUpIHtcbiAgICBmb3JFYWNoKGxhbmdzLCBmdW5jdGlvbiAobGFuZykge1xuICAgICAgcmV0W2xhbmddID0gdHlwZTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFR5cGVOYW1lKGxvY2FsZSkge1xuICB2YXIgbGFuZ1RvUGx1cmFsVHlwZSA9IGxhbmdUb1R5cGVNYXAocGx1cmFsVHlwZVRvTGFuZ3VhZ2VzKTtcbiAgcmV0dXJuIGxhbmdUb1BsdXJhbFR5cGVbbG9jYWxlXVxuICAgIHx8IGxhbmdUb1BsdXJhbFR5cGVbc3BsaXQuY2FsbChsb2NhbGUsIC8tLywgMSlbMF1dXG4gICAgfHwgbGFuZ1RvUGx1cmFsVHlwZS5lbjtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVHlwZUluZGV4KGxvY2FsZSwgY291bnQpIHtcbiAgcmV0dXJuIHBsdXJhbFR5cGVzW3BsdXJhbFR5cGVOYW1lKGxvY2FsZSldKGNvdW50KTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbi5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RUb2tlblJlZ2V4KG9wdHMpIHtcbiAgdmFyIHByZWZpeCA9IChvcHRzICYmIG9wdHMucHJlZml4KSB8fCAnJXsnO1xuICB2YXIgc3VmZml4ID0gKG9wdHMgJiYgb3B0cy5zdWZmaXgpIHx8ICd9JztcblxuICBpZiAocHJlZml4ID09PSBkZWxpbWl0ZXIgfHwgc3VmZml4ID09PSBkZWxpbWl0ZXIpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCInICsgZGVsaW1pdGVyICsgJ1wiIHRva2VuIGlzIHJlc2VydmVkIGZvciBwbHVyYWxpemF0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChlc2NhcGUocHJlZml4KSArICcoLio/KScgKyBlc2NhcGUoc3VmZml4KSwgJ2cnKTtcbn1cblxudmFyIGRvbGxhclJlZ2V4ID0gL1xcJC9nO1xudmFyIGRvbGxhckJpbGxzWWFsbCA9ICckJCc7XG52YXIgZGVmYXVsdFRva2VuUmVnZXggPSAvJVxceyguKj8pXFx9L2c7XG5cbi8vICMjIyB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpXG4vL1xuLy8gVGFrZXMgYSBwaHJhc2Ugc3RyaW5nIGFuZCB0cmFuc2Zvcm1zIGl0IGJ5IGNob29zaW5nIHRoZSBjb3JyZWN0XG4vLyBwbHVyYWwgZm9ybSBhbmQgaW50ZXJwb2xhdGluZyBpdC5cbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCdIZWxsbywgJXtuYW1lfSEnLCB7bmFtZTogJ1NwaWtlJ30pO1xuLy8gICAgIC8vIFwiSGVsbG8sIFNwaWtlIVwiXG4vL1xuLy8gVGhlIGNvcnJlY3QgcGx1cmFsIGZvcm0gaXMgc2VsZWN0ZWQgaWYgc3Vic3RpdHV0aW9ucy5zbWFydF9jb3VudFxuLy8gaXMgc2V0LiBZb3UgY2FuIHBhc3MgaW4gYSBudW1iZXIgaW5zdGVhZCBvZiBhbiBPYmplY3QgYXMgYHN1YnN0aXR1dGlvbnNgXG4vLyBhcyBhIHNob3J0Y3V0IGZvciBgc21hcnRfY291bnRgLlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCB7c21hcnRfY291bnQ6IDF9LCAnZW4nKTtcbi8vICAgICAvLyBcIjEgbmV3IG1lc3NhZ2VcIlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCB7c21hcnRfY291bnQ6IDJ9LCAnZW4nKTtcbi8vICAgICAvLyBcIjIgbmV3IG1lc3NhZ2VzXCJcbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywgNSwgJ2VuJyk7XG4vLyAgICAgLy8gXCI1IG5ldyBtZXNzYWdlc1wiXG4vL1xuLy8gWW91IHNob3VsZCBwYXNzIGluIGEgdGhpcmQgYXJndW1lbnQsIHRoZSBsb2NhbGUsIHRvIHNwZWNpZnkgdGhlIGNvcnJlY3QgcGx1cmFsIHR5cGUuXG4vLyBJdCBkZWZhdWx0cyB0byBgJ2VuJ2Agd2l0aCAyIHBsdXJhbCBmb3Jtcy5cbmZ1bmN0aW9uIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSwgdG9rZW5SZWdleCkge1xuICBpZiAodHlwZW9mIHBocmFzZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQb2x5Z2xvdC50cmFuc2Zvcm1QaHJhc2UgZXhwZWN0cyBhcmd1bWVudCAjMSB0byBiZSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmIChzdWJzdGl0dXRpb25zID09IG51bGwpIHtcbiAgICByZXR1cm4gcGhyYXNlO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHBocmFzZTtcbiAgdmFyIGludGVycG9sYXRpb25SZWdleCA9IHRva2VuUmVnZXggfHwgZGVmYXVsdFRva2VuUmVnZXg7XG5cbiAgLy8gYWxsb3cgbnVtYmVyIGFzIGEgcGx1cmFsaXphdGlvbiBzaG9ydGN1dFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzdWJzdGl0dXRpb25zID09PSAnbnVtYmVyJyA/IHsgc21hcnRfY291bnQ6IHN1YnN0aXR1dGlvbnMgfSA6IHN1YnN0aXR1dGlvbnM7XG5cbiAgLy8gU2VsZWN0IHBsdXJhbCBmb3JtOiBiYXNlZCBvbiBhIHBocmFzZSB0ZXh0IHRoYXQgY29udGFpbnMgYG5gXG4gIC8vIHBsdXJhbCBmb3JtcyBzZXBhcmF0ZWQgYnkgYGRlbGltaXRlcmAsIGEgYGxvY2FsZWAsIGFuZCBhIGBzdWJzdGl0dXRpb25zLnNtYXJ0X2NvdW50YCxcbiAgLy8gY2hvb3NlIHRoZSBjb3JyZWN0IHBsdXJhbCBmb3JtLiBUaGlzIGlzIG9ubHkgZG9uZSBpZiBgY291bnRgIGlzIHNldC5cbiAgaWYgKG9wdGlvbnMuc21hcnRfY291bnQgIT0gbnVsbCAmJiByZXN1bHQpIHtcbiAgICB2YXIgdGV4dHMgPSBzcGxpdC5jYWxsKHJlc3VsdCwgZGVsaW1pdGVyKTtcbiAgICByZXN1bHQgPSB0cmltKHRleHRzW3BsdXJhbFR5cGVJbmRleChsb2NhbGUgfHwgJ2VuJywgb3B0aW9ucy5zbWFydF9jb3VudCldIHx8IHRleHRzWzBdKTtcbiAgfVxuXG4gIC8vIEludGVycG9sYXRlOiBDcmVhdGVzIGEgYFJlZ0V4cGAgb2JqZWN0IGZvciBlYWNoIGludGVycG9sYXRpb24gcGxhY2Vob2xkZXIuXG4gIHJlc3VsdCA9IHJlcGxhY2UuY2FsbChyZXN1bHQsIGludGVycG9sYXRpb25SZWdleCwgZnVuY3Rpb24gKGV4cHJlc3Npb24sIGFyZ3VtZW50KSB7XG4gICAgaWYgKCFoYXMob3B0aW9ucywgYXJndW1lbnQpIHx8IG9wdGlvbnNbYXJndW1lbnRdID09IG51bGwpIHsgcmV0dXJuIGV4cHJlc3Npb247IH1cbiAgICAvLyBFbnN1cmUgcmVwbGFjZW1lbnQgdmFsdWUgaXMgZXNjYXBlZCB0byBwcmV2ZW50IHNwZWNpYWwgJC1wcmVmaXhlZCByZWdleCByZXBsYWNlIHRva2Vucy5cbiAgICByZXR1cm4gcmVwbGFjZS5jYWxsKG9wdGlvbnNbYXJndW1lbnRdLCBkb2xsYXJSZWdleCwgZG9sbGFyQmlsbHNZYWxsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gIyMjIFBvbHlnbG90IGNsYXNzIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBQb2x5Z2xvdChvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5waHJhc2VzID0ge307XG4gIHRoaXMuZXh0ZW5kKG9wdHMucGhyYXNlcyB8fCB7fSk7XG4gIHRoaXMuY3VycmVudExvY2FsZSA9IG9wdHMubG9jYWxlIHx8ICdlbic7XG4gIHZhciBhbGxvd01pc3NpbmcgPSBvcHRzLmFsbG93TWlzc2luZyA/IHRyYW5zZm9ybVBocmFzZSA6IG51bGw7XG4gIHRoaXMub25NaXNzaW5nS2V5ID0gdHlwZW9mIG9wdHMub25NaXNzaW5nS2V5ID09PSAnZnVuY3Rpb24nID8gb3B0cy5vbk1pc3NpbmdLZXkgOiBhbGxvd01pc3Npbmc7XG4gIHRoaXMud2FybiA9IG9wdHMud2FybiB8fCB3YXJuO1xuICB0aGlzLnRva2VuUmVnZXggPSBjb25zdHJ1Y3RUb2tlblJlZ2V4KG9wdHMuaW50ZXJwb2xhdGlvbik7XG59XG5cbi8vICMjIyBwb2x5Z2xvdC5sb2NhbGUoW2xvY2FsZV0pXG4vL1xuLy8gR2V0IG9yIHNldCBsb2NhbGUuIEludGVybmFsbHksIFBvbHlnbG90IG9ubHkgdXNlcyBsb2NhbGUgZm9yIHBsdXJhbGl6YXRpb24uXG5Qb2x5Z2xvdC5wcm90b3R5cGUubG9jYWxlID0gZnVuY3Rpb24gKG5ld0xvY2FsZSkge1xuICBpZiAobmV3TG9jYWxlKSB0aGlzLmN1cnJlbnRMb2NhbGUgPSBuZXdMb2NhbGU7XG4gIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGU7XG59O1xuXG4vLyAjIyMgcG9seWdsb3QuZXh0ZW5kKHBocmFzZXMpXG4vL1xuLy8gVXNlIGBleHRlbmRgIHRvIHRlbGwgUG9seWdsb3QgaG93IHRvIHRyYW5zbGF0ZSBhIGdpdmVuIGtleS5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0pO1xuLy9cbi8vIFRoZSBrZXkgY2FuIGJlIGFueSBzdHJpbmcuICBGZWVsIGZyZWUgdG8gY2FsbCBgZXh0ZW5kYCBtdWx0aXBsZSB0aW1lcztcbi8vIGl0IHdpbGwgb3ZlcnJpZGUgYW55IHBocmFzZXMgd2l0aCB0aGUgc2FtZSBrZXksIGJ1dCBsZWF2ZSBleGlzdGluZyBwaHJhc2VzXG4vLyB1bnRvdWNoZWQuXG4vL1xuLy8gSXQgaXMgYWxzbyBwb3NzaWJsZSB0byBwYXNzIG5lc3RlZCBwaHJhc2Ugb2JqZWN0cywgd2hpY2ggZ2V0IGZsYXR0ZW5lZFxuLy8gaW50byBhbiBvYmplY3Qgd2l0aCB0aGUgbmVzdGVkIGtleXMgY29uY2F0ZW5hdGVkIHVzaW5nIGRvdCBub3RhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwibmF2XCI6IHtcbi8vICAgICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCIsXG4vLyAgICAgICAgIFwic2lkZWJhclwiOiB7XG4vLyAgICAgICAgICAgXCJ3ZWxjb21lXCI6IFwiV2VsY29tZVwiXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vXG4vLyAgICAgY29uc29sZS5sb2cocG9seWdsb3QucGhyYXNlcyk7XG4vLyAgICAgLy8ge1xuLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4vLyAgICAgLy8gICAnbmF2LmhlbGxvX25hbWUnOiAnSGVsbG8sICV7bmFtZX0nLFxuLy8gICAgIC8vICAgJ25hdi5zaWRlYmFyLndlbGNvbWUnOiAnV2VsY29tZSdcbi8vICAgICAvLyB9XG4vL1xuLy8gYGV4dGVuZGAgYWNjZXB0cyBhbiBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQsIGBwcmVmaXhgLCB3aGljaCBjYW4gYmUgdXNlZFxuLy8gdG8gcHJlZml4IGV2ZXJ5IGtleSBpbiB0aGUgcGhyYXNlcyBvYmplY3Qgd2l0aCBzb21lIHN0cmluZywgdXNpbmcgZG90XG4vLyBub3RhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0sIFwibmF2XCIpO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbi8vICAgICAvLyB7XG4vLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbi8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfSdcbi8vICAgICAvLyB9XG4vL1xuLy8gVGhpcyBmZWF0dXJlIGlzIHVzZWQgaW50ZXJuYWxseSB0byBzdXBwb3J0IG5lc3RlZCBwaHJhc2Ugb2JqZWN0cy5cblBvbHlnbG90LnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAobW9yZVBocmFzZXMsIHByZWZpeCkge1xuICBmb3JFYWNoKG1vcmVQaHJhc2VzLCBmdW5jdGlvbiAocGhyYXNlLCBrZXkpIHtcbiAgICB2YXIgcHJlZml4ZWRLZXkgPSBwcmVmaXggPyBwcmVmaXggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmV4dGVuZChwaHJhc2UsIHByZWZpeGVkS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waHJhc2VzW3ByZWZpeGVkS2V5XSA9IHBocmFzZTtcbiAgICB9XG4gIH0sIHRoaXMpO1xufTtcblxuLy8gIyMjIHBvbHlnbG90LnVuc2V0KHBocmFzZXMpXG4vLyBVc2UgYHVuc2V0YCB0byBzZWxlY3RpdmVseSByZW1vdmUga2V5cyBmcm9tIGEgcG9seWdsb3QgaW5zdGFuY2UuXG4vL1xuLy8gICAgIHBvbHlnbG90LnVuc2V0KFwic29tZV9rZXlcIik7XG4vLyAgICAgcG9seWdsb3QudW5zZXQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSk7XG4vL1xuLy8gVGhlIHVuc2V0IG1ldGhvZCBjYW4gdGFrZSBlaXRoZXIgYSBzdHJpbmcgKGZvciB0aGUga2V5KSwgb3IgYW4gb2JqZWN0IGhhc2ggd2l0aFxuLy8gdGhlIGtleXMgdGhhdCB5b3Ugd291bGQgbGlrZSB0byB1bnNldC5cblBvbHlnbG90LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uIChtb3JlUGhyYXNlcywgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbW9yZVBocmFzZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgZGVsZXRlIHRoaXMucGhyYXNlc1ttb3JlUGhyYXNlc107XG4gIH0gZWxzZSB7XG4gICAgZm9yRWFjaChtb3JlUGhyYXNlcywgZnVuY3Rpb24gKHBocmFzZSwga2V5KSB7XG4gICAgICB2YXIgcHJlZml4ZWRLZXkgPSBwcmVmaXggPyBwcmVmaXggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy51bnNldChwaHJhc2UsIHByZWZpeGVkS2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbcHJlZml4ZWRLZXldO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59O1xuXG4vLyAjIyMgcG9seWdsb3QuY2xlYXIoKVxuLy9cbi8vIENsZWFycyBhbGwgcGhyYXNlcy4gVXNlZnVsIGZvciBzcGVjaWFsIGNhc2VzLCBzdWNoIGFzIGZyZWVpbmdcbi8vIHVwIG1lbW9yeSBpZiB5b3UgaGF2ZSBsb3RzIG9mIHBocmFzZXMgYnV0IG5vIGxvbmdlciBuZWVkIHRvXG4vLyBwZXJmb3JtIGFueSB0cmFuc2xhdGlvbi4gQWxzbyB1c2VkIGludGVybmFsbHkgYnkgYHJlcGxhY2VgLlxuUG9seWdsb3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBocmFzZXMgPSB7fTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5yZXBsYWNlKHBocmFzZXMpXG4vL1xuLy8gQ29tcGxldGVseSByZXBsYWNlIHRoZSBleGlzdGluZyBwaHJhc2VzIHdpdGggYSBuZXcgc2V0IG9mIHBocmFzZXMuXG4vLyBOb3JtYWxseSwganVzdCB1c2UgYGV4dGVuZGAgdG8gYWRkIG1vcmUgcGhyYXNlcywgYnV0IHVuZGVyIGNlcnRhaW5cbi8vIGNpcmN1bXN0YW5jZXMsIHlvdSBtYXkgd2FudCB0byBtYWtlIHN1cmUgbm8gb2xkIHBocmFzZXMgYXJlIGx5aW5nIGFyb3VuZC5cblBvbHlnbG90LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG5ld1BocmFzZXMpIHtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmV4dGVuZChuZXdQaHJhc2VzKTtcbn07XG5cblxuLy8gIyMjIHBvbHlnbG90LnQoa2V5LCBvcHRpb25zKVxuLy9cbi8vIFRoZSBtb3N0LXVzZWQgbWV0aG9kLiBQcm92aWRlIGEga2V5LCBhbmQgYHRgIHdpbGwgcmV0dXJuIHRoZVxuLy8gcGhyYXNlLlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaGVsbG9cIik7XG4vLyAgICAgPT4gXCJIZWxsb1wiXG4vL1xuLy8gVGhlIHBocmFzZSB2YWx1ZSBpcyBwcm92aWRlZCBmaXJzdCBieSBhIGNhbGwgdG8gYHBvbHlnbG90LmV4dGVuZCgpYCBvclxuLy8gYHBvbHlnbG90LnJlcGxhY2UoKWAuXG4vL1xuLy8gUGFzcyBpbiBhbiBvYmplY3QgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byBwZXJmb3JtIGludGVycG9sYXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb19uYW1lXCIsIHtuYW1lOiBcIlNwaWtlXCJ9KTtcbi8vICAgICA9PiBcIkhlbGxvLCBTcGlrZVwiXG4vL1xuLy8gSWYgeW91IGxpa2UsIHlvdSBjYW4gcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgaW4gY2FzZSB0aGUgcGhyYXNlIGlzIG1pc3NpbmcuXG4vLyBVc2UgdGhlIHNwZWNpYWwgb3B0aW9uIGtleSBcIl9cIiB0byBzcGVjaWZ5IGEgZGVmYXVsdC5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImlfbGlrZV90b193cml0ZV9pbl9sYW5ndWFnZVwiLCB7XG4vLyAgICAgICBfOiBcIkkgbGlrZSB0byB3cml0ZSBpbiAle2xhbmd1YWdlfS5cIixcbi8vICAgICAgIGxhbmd1YWdlOiBcIkphdmFTY3JpcHRcIlxuLy8gICAgIH0pO1xuLy8gICAgID0+IFwiSSBsaWtlIHRvIHdyaXRlIGluIEphdmFTY3JpcHQuXCJcbi8vXG5Qb2x5Z2xvdC5wcm90b3R5cGUudCA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcbiAgdmFyIHBocmFzZSwgcmVzdWx0O1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgPT0gbnVsbCA/IHt9IDogb3B0aW9ucztcbiAgaWYgKHR5cGVvZiB0aGlzLnBocmFzZXNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICBwaHJhc2UgPSB0aGlzLnBocmFzZXNba2V5XTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cy5fID09PSAnc3RyaW5nJykge1xuICAgIHBocmFzZSA9IG9wdHMuXztcbiAgfSBlbHNlIGlmICh0aGlzLm9uTWlzc2luZ0tleSkge1xuICAgIHZhciBvbk1pc3NpbmdLZXkgPSB0aGlzLm9uTWlzc2luZ0tleTtcbiAgICByZXN1bHQgPSBvbk1pc3NpbmdLZXkoa2V5LCBvcHRzLCB0aGlzLmN1cnJlbnRMb2NhbGUsIHRoaXMudG9rZW5SZWdleCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YXJuKCdNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciBrZXk6IFwiJyArIGtleSArICdcIicpO1xuICAgIHJlc3VsdCA9IGtleTtcbiAgfVxuICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBvcHRzLCB0aGlzLmN1cnJlbnRMb2NhbGUsIHRoaXMudG9rZW5SZWdleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8gIyMjIHBvbHlnbG90LmhhcyhrZXkpXG4vL1xuLy8gQ2hlY2sgaWYgcG9seWdsb3QgaGFzIGEgdHJhbnNsYXRpb24gZm9yIGdpdmVuIGtleVxuUG9seWdsb3QucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGhhcyh0aGlzLnBocmFzZXMsIGtleSk7XG59O1xuXG4vLyBleHBvcnQgdHJhbnNmb3JtUGhyYXNlXG5Qb2x5Z2xvdC50cmFuc2Zvcm1QaHJhc2UgPSBmdW5jdGlvbiB0cmFuc2Zvcm0ocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSk7XG59O1xuXG52YXIgd2ViaXhQb2x5Z2xvdCA9IFBvbHlnbG90O1xuXG5mdW5jdGlvbiBMb2NhbGUoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XHJcbiAgICBsZXQgbGFuZyA9IHN0b3JhZ2UgPyAoc3RvcmFnZS5nZXQoXCJsYW5nXCIpIHx8IFwiZW5cIikgOiAoY29uZmlnLmxhbmcgfHwgXCJlblwiKTtcclxuICAgIGZ1bmN0aW9uIHNldExhbmdEYXRhKG5hbWUsIGRhdGEsIHNpbGVudCkge1xyXG4gICAgICAgIGlmIChkYXRhLl9fZXNNb2R1bGUpIHtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGEuZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGNvbmZpZyA9IHsgcGhyYXNlczogZGF0YSB9O1xyXG4gICAgICAgIGlmIChjb25maWcucG9seWdsb3QpIHtcclxuICAgICAgICAgICAgYXBwLndlYml4LmV4dGVuZChwY29uZmlnLCBjb25maWcucG9seWdsb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2x5ID0gc2VydmljZS5wb2x5Z2xvdCA9IG5ldyB3ZWJpeFBvbHlnbG90KHBjb25maWcpO1xyXG4gICAgICAgIHBvbHkubG9jYWxlKG5hbWUpO1xyXG4gICAgICAgIHNlcnZpY2UuXyA9IGFwcC53ZWJpeC5iaW5kKHBvbHkudCwgcG9seSk7XHJcbiAgICAgICAgbGFuZyA9IG5hbWU7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc3RvcmFnZS5wdXQoXCJsYW5nXCIsIGxhbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLndlYml4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY05hbWUgPSBjb25maWcud2ViaXhbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChsb2NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBhcHAud2ViaXguaTE4bi5zZXRMb2NhbGUobG9jTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFwcC5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldExhbmcoKSB7IHJldHVybiBsYW5nOyB9XHJcbiAgICBmdW5jdGlvbiBzZXRMYW5nKG5hbWUsIHNpbGVudCkge1xyXG4gICAgICAgIC8vIGlnbm9yZSBzZXRMYW5nIGlmIGxvYWRpbmcgYnkgcGF0aCBpcyBkaXNhYmxlZFxyXG4gICAgICAgIGlmIChjb25maWcucGF0aCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXRoID0gKGNvbmZpZy5wYXRoID8gY29uZmlnLnBhdGggKyBcIi9cIiA6IFwiXCIpICsgbmFtZTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcImpldC1sb2NhbGVzL1wiICsgcGF0aCk7XHJcbiAgICAgICAgc2V0TGFuZ0RhdGEobmFtZSwgZGF0YSwgc2lsZW50KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0TGFuZywgc2V0TGFuZywgc2V0TGFuZ0RhdGEsIF86IG51bGwsIHBvbHlnbG90OiBudWxsXHJcbiAgICB9O1xyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJsb2NhbGVcIiwgc2VydmljZSk7XHJcbiAgICBzZXRMYW5nKGxhbmcsIHRydWUpO1xyXG59XG5cbmZ1bmN0aW9uIHNob3codmlldywgY29uZmlnLCB2YWx1ZSkge1xyXG4gICAgaWYgKGNvbmZpZy51cmxzKSB7XHJcbiAgICAgICAgdmFsdWUgPSBjb25maWcudXJsc1t2YWx1ZV0gfHwgdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjb25maWcucGFyYW0pIHtcclxuICAgICAgICB2YWx1ZSA9IHsgW2NvbmZpZy5wYXJhbV06IHZhbHVlIH07XHJcbiAgICB9XHJcbiAgICB2aWV3LnNob3codmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIE1lbnUoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGNvbnN0IGZyYW1lID0gdmlldy5nZXRTdWJWaWV3SW5mbygpLnBhcmVudDtcclxuICAgIGNvbnN0IHVpID0gdmlldy4kJChjb25maWcuaWQgfHwgY29uZmlnKTtcclxuICAgIGxldCBzaWxlbnQgPSBmYWxzZTtcclxuICAgIHVpLmF0dGFjaEV2ZW50KFwib25jaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNob3coZnJhbWUsIGNvbmZpZywgdGhpcy5nZXRWYWx1ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHVpLmF0dGFjaEV2ZW50KFwib25hZnRlcnNlbGVjdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHVpLnNldFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZCA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5nZXRTZWxlY3RlZElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZCA9IHVpLmdldFNlbGVjdGVkSWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaG93KGZyYW1lLCBjb25maWcsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZpZXcub24oYXBwLCBgYXBwOnJvdXRlYCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gXCJcIjtcclxuICAgICAgICBpZiAoY29uZmlnLnBhcmFtKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSB2aWV3LmdldFBhcmFtKGNvbmZpZy5wYXJhbSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gZnJhbWUuZ2V0VXJsKClbMV07XHJcbiAgICAgICAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gc2VnbWVudC5wYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHNpbGVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh1aS5zZXRWYWx1ZSAmJiB1aS5nZXRWYWx1ZSgpICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRWYWx1ZShuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5zZWxlY3QgJiYgdWkuZXhpc3RzKG5hbWUpICYmIHVpLmdldFNlbGVjdGVkSWQoKSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdWkuc2VsZWN0KG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpbGVudCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cbmNvbnN0IGJhc2VpY29ucyA9IHtcclxuICAgIGdvb2Q6IFwiY2hlY2tcIixcclxuICAgIGVycm9yOiBcIndhcm5pbmdcIixcclxuICAgIHNhdmluZzogXCJyZWZyZXNoIGZhLXNwaW5cIlxyXG59O1xyXG5jb25zdCBiYXNldGV4dCA9IHtcclxuICAgIGdvb2Q6IFwiT2tcIixcclxuICAgIGVycm9yOiBcIkVycm9yXCIsXHJcbiAgICBzYXZpbmc6IFwiQ29ubmVjdGluZy4uLlwiXHJcbn07XHJcbmZ1bmN0aW9uIFN0YXR1cyhhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgbGV0IHN0YXR1cyA9IFwiZ29vZFwiO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGxldCBpc2Vycm9yID0gZmFsc2U7XHJcbiAgICBsZXQgZXhwaXJlRGVsYXkgPSBjb25maWcuZXhwaXJlO1xyXG4gICAgaWYgKCFleHBpcmVEZWxheSAmJiBleHBpcmVEZWxheSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBleHBpcmVEZWxheSA9IDIwMDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0cyA9IGNvbmZpZy50ZXh0cyB8fCBiYXNldGV4dDtcclxuICAgIGNvbnN0IGljb25zID0gY29uZmlnLmljb25zIHx8IGJhc2VpY29ucztcclxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgY29uZmlnID0geyB0YXJnZXQ6IGNvbmZpZyB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaChjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IHZpZXcuJCQoY29uZmlnLnRhcmdldCk7XHJcbiAgICAgICAgaWYgKGFyZWEpIHtcclxuICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCI8ZGl2IGNsYXNzPSdzdGF0dXNfXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyArXHJcbiAgICAgICAgICAgICAgICAgICAgXCInPjxzcGFuIGNsYXNzPSd3ZWJpeF9pY29uIGZhLVwiICtcclxuICAgICAgICAgICAgICAgICAgICBpY29uc1tzdGF0dXNdICsgXCInPjwvc3Bhbj4gXCIgKyB0ZXh0c1tzdGF0dXNdICsgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcmVhLnNldEhUTUwoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3VjY2VzcygpIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIHNldFN0YXR1cyhcImdvb2RcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmYWlsKGVycikge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgc2V0U3RhdHVzKFwiZXJyb3JcIiwgZXJyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0YXJ0KHByb21pc2UpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIHNldFN0YXR1cyhcInNhdmluZ1wiKTtcclxuICAgICAgICBpZiAocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHtcclxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3MsIGZhaWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGlkZVN0YXR1cygpIHtcclxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgcmVmcmVzaChcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdHVzKG1vZGUsIGVycikge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHtcclxuICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW9kZSA9PT0gXCJzYXZpbmdcIikge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBcInNhdmluZ1wiO1xyXG4gICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpc2Vycm9yID0gKG1vZGUgPT09IFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gaXNlcnJvciA/IFwiZXJyb3JcIiA6IFwiZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuZXJyb3IoXCJhcHA6ZXJyb3I6c2VydmVyXCIsIFtlcnIucmVzcG9uc2VUZXh0IHx8IGVycl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGlyZURlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZVN0YXR1cywgZXhwaXJlRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyYWNrKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBkcCA9IGFwcC53ZWJpeC5kcChkYXRhKTtcclxuICAgICAgICBpZiAoZHApIHtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyRGF0YVNlbmRcIiwgc3RhcnQpO1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJTYXZlRXJyb3JcIiwgKF9pZCwgX29iaiwgcmVzcG9uc2UpID0+IGZhaWwocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyU2F2ZVwiLCBzdWNjZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHAuc2V0U2VydmljZShcInN0YXR1c1wiLCB7XHJcbiAgICAgICAgZ2V0U3RhdHVzLFxyXG4gICAgICAgIHNldFN0YXR1cyxcclxuICAgICAgICB0cmFja1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY29uZmlnLnJlbW90ZSkge1xyXG4gICAgICAgIHZpZXcub24oYXBwLndlYml4LCBcIm9uUmVtb3RlQ2FsbFwiLCBzdGFydCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmFqYXgpIHtcclxuICAgICAgICB2aWV3Lm9uKGFwcC53ZWJpeCwgXCJvbkJlZm9yZUFqYXhcIiwgKF9tb2RlLCBfdXJsLCBfZGF0YSwgX3JlcXVlc3QsIF9oZWFkZXJzLCBfZmlsZXMsIHByb21pc2UpID0+IHtcclxuICAgICAgICAgICAgc3RhcnQocHJvbWlzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmRhdGEpIHtcclxuICAgICAgICB0cmFjayhjb25maWcuZGF0YSk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gVGhlbWUoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XHJcbiAgICBsZXQgdGhlbWUgPSBzdG9yYWdlID9cclxuICAgICAgICAoc3RvcmFnZS5nZXQoXCJ0aGVtZVwiKSB8fCBcImZsYXQtZGVmYXVsdFwiKVxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgKGNvbmZpZy50aGVtZSB8fCBcImZsYXQtZGVmYXVsdFwiKTtcclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0VGhlbWUoKSB7IHJldHVybiB0aGVtZTsgfSxcclxuICAgICAgICBzZXRUaGVtZShuYW1lLCBzaWxlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxuYW1lID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG5hbWUgPT09IG5hbWUgfHwgbG5hbWUgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5za2luLnNldChwYXJ0c1swXSk7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgY3NzXHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5odG1sLnJlbW92ZUNzcyhkb2N1bWVudC5ib2R5LCBcInRoZW1lLVwiICsgdGhlbWUpO1xyXG4gICAgICAgICAgICAvLyBhZGQgbmV3IGNzc1xyXG4gICAgICAgICAgICBhcHAud2ViaXguaHRtbC5hZGRDc3MoZG9jdW1lbnQuYm9keSwgXCJ0aGVtZS1cIiArIG5hbWUpO1xyXG4gICAgICAgICAgICB0aGVtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnB1dChcInRoZW1lXCIsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgICAgICBhcHAucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwidGhlbWVcIiwgc2VydmljZSk7XHJcbiAgICBzZXJ2aWNlLnNldFRoZW1lKHRoZW1lLCB0cnVlKTtcclxufVxuXG5mdW5jdGlvbiBjb3B5UGFyYW1zKGRhdGEsIHVybCwgcm91dGUpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkYXRhW3JvdXRlW2ldXSA9IHVybFtpICsgMV0gPyB1cmxbaSArIDFdLnBhZ2UgOiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIFVybFBhcmFtKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGNvbmZpZy5yb3V0ZSB8fCBjb25maWc7XHJcbiAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICB2aWV3Lm9uKGFwcCwgXCJhcHA6dXJsY2hhbmdlXCIsIGZ1bmN0aW9uIChzdWJ2aWV3LCBzZWdtZW50KSB7XHJcbiAgICAgICAgaWYgKHZpZXcgPT09IHN1YnZpZXcpIHtcclxuICAgICAgICAgICAgY29weVBhcmFtcyhkYXRhLCBzZWdtZW50LnN1YnVybCgpLCByb3V0ZSk7XHJcbiAgICAgICAgICAgIHNlZ21lbnQuc2l6ZShyb3V0ZS5sZW5ndGggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9zID0gdmlldy5zZXRQYXJhbTtcclxuICAgIGNvbnN0IG9nID0gdmlldy5nZXRQYXJhbTtcclxuICAgIHZpZXcuc2V0UGFyYW0gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIHNob3cpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHJvdXRlLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWdtZW50LnVwZGF0ZShcIlwiLCB2YWx1ZSwgaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LnNob3cobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcy5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlLCBzaG93KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmlldy5nZXRQYXJhbSA9IGZ1bmN0aW9uIChrZXksIG1vZGUpIHtcclxuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9nLmNhbGwodGhpcywga2V5LCBtb2RlKTtcclxuICAgIH07XHJcbiAgICBjb3B5UGFyYW1zKGRhdGEsIHZpZXcuZ2V0VXJsKCksIHJvdXRlKTtcclxufVxuXG5mdW5jdGlvbiBVc2VyKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3QgbG9naW4gPSBjb25maWcubG9naW4gfHwgXCIvbG9naW5cIjtcclxuICAgIGNvbnN0IGxvZ291dCA9IGNvbmZpZy5sb2dvdXQgfHwgXCIvbG9nb3V0XCI7XHJcbiAgICBjb25zdCBhZnRlckxvZ2luID0gY29uZmlnLmFmdGVyTG9naW4gfHwgYXBwLmNvbmZpZy5zdGFydDtcclxuICAgIGNvbnN0IGFmdGVyTG9nb3V0ID0gY29uZmlnLmFmdGVyTG9nb3V0IHx8IFwiL2xvZ2luXCI7XHJcbiAgICBjb25zdCBwaW5nID0gY29uZmlnLnBpbmcgfHwgNSAqIDYwICogMTAwMDtcclxuICAgIGNvbnN0IG1vZGVsID0gY29uZmlnLm1vZGVsO1xyXG4gICAgbGV0IHVzZXIgPSBjb25maWcudXNlcjtcclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0VXNlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTdGF0dXMoc2VydmVyKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwuc3RhdHVzKCkuY2F0Y2goKCkgPT4gbnVsbCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2luKG5hbWUsIHBhc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLmxvZ2luKG5hbWUsIHBhc3MpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcHAuY2FsbEV2ZW50KFwiYXBwOnVzZXI6bG9naW5cIiwgW3VzZXJdKTtcclxuICAgICAgICAgICAgICAgIGFwcC5zaG93KGFmdGVyTG9naW4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgdXNlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5sb2dvdXQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcHAuY2FsbEV2ZW50KFwiYXBwOnVzZXI6bG9nb3V0XCIsIFtdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaikge1xyXG4gICAgICAgIGlmICh1cmwgPT09IGxvZ291dCkge1xyXG4gICAgICAgICAgICBzZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgICAgICBvYmoucmVkaXJlY3QgPSBhZnRlckxvZ291dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodXJsICE9PSBsb2dpbiAmJiAhc2VydmljZS5nZXRTdGF0dXMoKSkge1xyXG4gICAgICAgICAgICBvYmoucmVkaXJlY3QgPSBsb2dpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHAuc2V0U2VydmljZShcInVzZXJcIiwgc2VydmljZSk7XHJcbiAgICBhcHAuYXR0YWNoRXZlbnQoYGFwcDpndWFyZGAsIGZ1bmN0aW9uICh1cmwsIF8kcm9vdCwgb2JqKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wdWJsaWMgJiYgY29uZmlnLnB1YmxpYyh1cmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHVzZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqLmNvbmZpcm0gPSBzZXJ2aWNlLmdldFN0YXR1cyh0cnVlKS50aGVuKCgpID0+IGNhbk5hdmlnYXRlKHVybCwgb2JqKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaik7XHJcbiAgICB9KTtcclxuICAgIGlmIChwaW5nKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gc2VydmljZS5nZXRTdGF0dXModHJ1ZSksIHBpbmcpO1xyXG4gICAgfVxyXG59XG5cbi8qXHJcbk1JVCBMaWNlbnNlXHJcbkNvcHlyaWdodCAoYykgMjAxOSBYQiBTb2Z0d2FyZVxyXG4qL1xyXG5sZXQgd2ViaXggPSB3aW5kb3cud2ViaXg7XHJcbmlmICh3ZWJpeCkge1xyXG4gICAgcGF0Y2god2ViaXgpO1xyXG59XHJcbmNvbnN0IHBsdWdpbnMgPSB7XHJcbiAgICBVbmxvYWRHdWFyZCwgTG9jYWxlLCBNZW51LCBUaGVtZSwgVXNlciwgU3RhdHVzLCBVcmxQYXJhbVxyXG59O1xyXG5jb25zdCB3ID0gd2luZG93O1xyXG5pZiAoIXcuUHJvbWlzZSkge1xyXG4gICAgdy5Qcm9taXNlID0gdy53ZWJpeC5wcm9taXNlO1xyXG59XG5cbmV4cG9ydCB7IHBsdWdpbnMsIEpldEFwcCwgSmV0VmlldywgSGFzaFJvdXRlciwgU3RvcmVSb3V0ZXIsIFVybFJvdXRlciwgRW1wdHlSb3V0ZXIsIFN1YlJvdXRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9amV0LmpzLm1hcFxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiY29uc3QgbG9nb3V0VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dvdXQnO1xyXG5jb25zdCBsb2dpblVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nO1xyXG5jb25zdCByZWdpc3RlclVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVnaXN0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXphdGlvbiB7XHJcblx0cmVnaXN0ZXIob2JqKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QocmVnaXN0ZXJVcmwsIG9iaik7XHJcblx0fVxyXG5cclxuXHRsb2dpbihvYmopIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdChsb2dpblVybCwgb2JqKTtcclxuXHR9XHJcblxyXG5cdGxvZ291dChkYXRlKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QobG9nb3V0VXJsLCBkYXRlKTtcclxuXHR9XHJcbn0iLCJjb25zdCBEVU1NWUNPVkVSID0gJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9hZC9mZC81OC9hZGZkNTg3M2JlMzg0MWYwNjYwZTZhYWEwMGNkZTE4ZS5qcGcnO1xyXG5jb25zdCBTVUNDRVNTID0gMjtcclxuY29uc3QgVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcblxyXG5leHBvcnQge0RVTU1ZQ09WRVIsIFNVQ0NFU1MsIFVSTH07IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc291cmNlcy9sb2NhbGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIEJvb2tzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IFtdO1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9ib29rcy9gO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoaWQpIHtcclxuXHRcdGNvbnN0IHVzZXJfaWQgPSB7dXNlcl9pZDogaWR9O1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQodGhpcy5fdXJsLCB1c2VyX2lkKTtcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucHV0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmRlbCh0aGlzLl91cmwsIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBCb29rc01vZGVsKCk7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIENvbW1lbnRzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9jb21tZW50cy9gO1xyXG5cdH1cclxuXHRcclxuXHRnZXRJdGVtcyhpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHRcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucHV0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29tbWVudHNNb2RlbCgpOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBGaWxlc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vZmlsZXMvYDtcclxuXHR9XHJcblxyXG5cdGdldERhdGFGcm9tU2VydmVyKCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQodGhpcy5fdXJsKTtcclxuXHR9XHJcblx0XHJcblx0Z2V0SXRlbXMoaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGAke3RoaXMuX3VybH0ke2lkfWApO1x0XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0ZG93bmxvYWRJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnJlc3BvbnNlKCdibG9iJykuZ2V0KGAke3RoaXMuX3VybH1kb3dubG9hZC8ke2lkfWApO1x0XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRmlsZXNNb2RlbCgpOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBMaWtlc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBbXTtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vbGlrZXMvYDtcclxuXHR9XHJcblxyXG5cdGdldERhdGFGcm9tU2VydmVyKCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQodGhpcy5fdXJsKTtcclxuXHR9XHJcblxyXG5cdGFkZExpa2UodXNlcklkLCBib29rSWQpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJJZDogdXNlcklkLFxyXG5cdFx0XHRib29rSWQ6IGJvb2tJZFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUxpa2UodXNlcklkLCBib29rSWQpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJJZDogdXNlcklkLFxyXG5cdFx0XHRib29rSWQ6IGJvb2tJZFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmRlbCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExpa2VzTW9kZWwoKTsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgVXNlcnNNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl91cmwgPSBgJHtVUkx9L3VzZXJzL2A7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhRnJvbVNlcnZlcigpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KHRoaXMuX3VybCk7XHJcblx0fVxyXG5cdFxyXG5cdGdldEl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGAke3RoaXMuX3VybH0ke2lkfWApO1x0XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJzTW9kZWwoKTsiLCJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQge0pldEFwcCwgRW1wdHlSb3V0ZXIsIEhhc2hSb3V0ZXIgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBKZXRBcHB7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnKXtcclxuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xyXG5cdFx0XHRpZCBcdFx0OiBBUFBOQU1FLFxyXG5cdFx0XHR2ZXJzaW9uIDogVkVSU0lPTixcclxuXHRcdFx0cm91dGVyIFx0OiBCVUlMRF9BU19NT0RVTEUgPyBFbXB0eVJvdXRlciA6IEhhc2hSb3V0ZXIsXHJcblx0XHRcdGRlYnVnIFx0OiAhUFJPRFVDVElPTixcclxuXHRcdFx0c3RhcnQgXHQ6ICcvbG9naW4nXHJcblx0XHR9O1xyXG5cclxuXHRcdHN1cGVyKHsgLi4uZGVmYXVsdHMsIC4uLmNvbmZpZyB9KTtcclxuXHR9XHJcbn1cclxuXHJcbmlmICghQlVJTERfQVNfTU9EVUxFKXtcclxuXHR3ZWJpeC5yZWFkeSgoKSA9PiB7XHJcblx0XHRjb25zdCBhcHAgPSBuZXcgTXlBcHAoKTtcclxuXHRcdGFwcC5hdHRhY2hFdmVudCgnYXBwOmd1YXJkJywgKHVybCwgdmlldywgbmF2KSA9PiB7XHJcblx0XHRcdGlmKHVybC5pbmRleE9mKCdpZCcpICE9PSAtMSkge1xyXG5cdFx0XHRcdGNvbnN0IHVybFBhcnRzID0gdXJsLnNwbGl0KCcvJyk7XHJcblx0XHRcdFx0bGV0IHRhcmdldFBhcnQ7XHJcblxyXG5cdFx0XHRcdHVybFBhcnRzLmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdFx0XHRpZihlbC5pbmRleE9mKCdpZCcpICE9IC0xKSB7XHJcblx0XHRcdFx0XHRcdHRhcmdldFBhcnQgPSBlbDtcclxuXHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGkgPSB0YXJnZXRQYXJ0LmluZGV4T2YoJ2lkJyk7XHJcblx0XHRcdFx0Y29uc3Qgcm9sZSA9IHRhcmdldFBhcnQuc3BsaXQoJy4nKVswXTtcclxuXHRcdFx0XHRjb25zdCBpZCA9IHRhcmdldFBhcnQuc2xpY2UoaSszKTtcclxuIFxyXG5cdFx0XHRcdHdlYml4LmFqYXgoKS5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jaGVjaycpLnRoZW4oXHJcblx0XHRcdFx0XHQocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcmVzLmpzb24oKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2Uucm9sZSAhPSByb2xlIHx8IHJlc3BvbnNlLmlkICE9IGlkKSB7XHJcblx0XHRcdFx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcclxuXHRcdFx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRhcHAucmVuZGVyKCk7XHJcblx0fSk7XHJcbn0iLCJpbXBvcnQge1NVQ0NFU1N9IGZyb20gJy4vY29uc3RzJztcclxuXHJcbmNvbnN0IHRvZ2dsZUVsZW1lbnQgPSAoY29uZGl0aW9uLCBlbGVtZW50KSA9PiB7XHJcblx0aWYgKGNvbmRpdGlvbikge1xyXG5cdFx0ZWxlbWVudC5zaG93KCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0ZWxlbWVudC5oaWRlKCk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgYWRkSXRlbSA9IChNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbikgPT4ge1xyXG5cdE1vZGVsLmFkZEl0ZW0oZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcblx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzID09IFNVQ0NFU1MpIHtcclxuXHRcdFx0TW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRzdWNjZXNzQWN0aW9uKCk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlSXRlbSA9IChNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbikgPT4ge1xyXG5cdE1vZGVsLnVwZGF0ZUl0ZW0oZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcblx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzID09IFNVQ0NFU1MpIHtcclxuXHRcdFx0c3VjY2Vzc0FjdGlvbigpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYkRhdGUpID0+IHtcclxuXHRjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHRjb25zdCBjdXJyZW50TW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XHJcblx0Y29uc3QgY3VycmVudERheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xyXG5cdGNvbnN0IGN1cnJlbnRIb3VycyA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuXHRjb25zdCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHRjb25zdCBjb21tZW50c1llYXIgPSBuZXcgRGF0ZShkYkRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcblx0Y29uc3QgY29tbWVudHNNb250aCA9IG5ldyBEYXRlKGRiRGF0ZSkuZ2V0TW9udGgoKTtcclxuXHRjb25zdCBjb21tZW50c0RheSA9IG5ldyBEYXRlKGRiRGF0ZSkuZ2V0RGF0ZSgpO1xyXG5cdGNvbnN0IGNvbW1lbnRzSG91cnMgPSBuZXcgRGF0ZShkYkRhdGUpLmdldEhvdXJzKCk7XHJcblx0Y29uc3QgY29tbWVudHNEYXRlVGltZSA9IG5ldyBEYXRlKGRiRGF0ZSk7XHJcblxyXG5cdGxldCBmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5zdHJUb0RhdGUoXCIlaTolc1wiKTtcclxuXHJcblx0aWYgKGN1cnJlbnRZZWFyID4gY29tbWVudHNZZWFyKSB7XHJcblx0XHRmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlZC0lbS0leVwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZihjdXJyZW50TW9udGggPiBjb21tZW50c01vbnRoKSB7XHJcblx0XHRmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlbS0lZFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZihjdXJyZW50RGF5ID4gY29tbWVudHNEYXkpIHtcclxuXHRcdGZvcm1hdERhdGUgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVELCAlSDolaVwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoY3VycmVudEhvdXJzID4gY29tbWVudHNIb3Vycyl7XHJcblx0XHRmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlSDolaVwiKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRjb25zdCB0aW1lID0gKGN1cnJlbnREYXRlVGltZSAtIGNvbW1lbnRzRGF0ZVRpbWUpLzYwMDAwO1xyXG5cdFx0cmV0dXJuIGAke01hdGgucm91bmQodGltZSl9IG1pbnV0ZShzKSBhZ29gO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gZm9ybWF0RGF0ZShuZXcgRGF0ZShkYkRhdGUpKTtcclxuXHJcbn07XHJcblxyXG53ZWJpeC5wcm90b1VJKHtcclxuXHRuYW1lOiBcImFjdGl2ZUxpc3RcIixcclxuXHRkZWZhdWx0czoge1xyXG5cdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHR0eXBlOiB7XHJcblx0XHRcdGhlaWdodDogMzBcclxuXHRcdH1cclxuXHR9XHJcbn0sIHdlYml4LnVpLmxpc3QpO1xyXG5cclxuZXhwb3J0IHt0b2dnbGVFbGVtZW50LCBhZGRJdGVtLCB1cGRhdGVJdGVtLCBmb3JtYXREYXRlfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWRtaW5cIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL1wiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qc1wiLFxuXHRcIi4vYWRtaW4vaW5kZXhcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL2luZGV4LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi91c2VyRm9ybVwiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi91c2VyRm9ybS5qc1wiLFxuXHRcIi4vYWRtaW4vdXNlckZvcm0uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vdXNlckZvcm0uanNcIixcblx0XCIuL2NvbW1vbi9saWJyYXJ5XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2NvbW1vbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9jb21tb24vbGlicmFyeS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9jb21tb24vbGlicmFyeS5qc1wiLFxuXHRcIi4vbGlicmFyaWFuXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9ib29rQ2FyZFwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vYm9va0NhcmQuanNcIixcblx0XCIuL2xpYnJhcmlhbi9ib29rQ2FyZC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vYm9va0NhcmQuanNcIixcblx0XCIuL2xpYnJhcmlhbi9pbmRleFwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9saWJyYXJ5XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vbGlicmFyeS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vbGlicmFyeS5qc1wiLFxuXHRcIi4vbG9naW5cIjogXCIuL3NvdXJjZXMvdmlld3MvbG9naW4uanNcIixcblx0XCIuL2xvZ2luLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzXCIsXG5cdFwiLi9yZWFkZXJcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL2Jvb2tDYXJkXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vcmVhZGVyL2Jvb2tDYXJkLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vcmVhZGVyL2luZGV4XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL2luZGV4LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL2xpYnJhcnlcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2xpYnJhcnkuanNcIixcblx0XCIuL3JlYWRlci9saWJyYXJ5LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9saWJyYXJ5LmpzXCIsXG5cdFwiLi9yZWFkZXIvbWFpblwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbWFpbi5qc1wiLFxuXHRcIi4vcmVhZGVyL21haW4uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL21haW4uanNcIixcblx0XCIuL3JlYWRlci9zZXR0aW5nc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvc2V0dGluZ3MuanNcIixcblx0XCIuL3JlYWRlci9zZXR0aW5ncy5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvc2V0dGluZ3MuanNcIixcblx0XCIuL3JlYWRlci90b3BzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci90b3BzLmpzXCIsXG5cdFwiLi9yZWFkZXIvdG9wcy5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvdG9wcy5qc1wiLFxuXHRcIi4vcmVnaXN0ZXJcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanNcIixcblx0XCIuL3JlZ2lzdGVyLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlZ2lzdGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlcy92aWV3cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vLi4vYXV0aG9yaXphdGlvbic7XHJcbmltcG9ydCB1c2Vyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy91c2Vycyc7XHJcbmltcG9ydCBVc2VyRm9ybSBmcm9tICcuL3VzZXJGb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgXHJcblx0XHRcdHRlbXBsYXRlOiAnVXNlcnMgbGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbG9nb3V0ID0ge1xyXG5cdFx0XHR2aWV3OididXR0b24nLCBcclxuXHRcdFx0bG9jYWxJZDonbG9nb3V0QnRuJywgXHJcblx0XHRcdHZhbHVlOidMb2dvdXQnLCBcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0dHlwZTonZm9ybSdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZHRhYmxlID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICd1c2Vyc0xpc3QnLFxyXG5cdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdpZCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IDFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZnVsbF9uYW1lJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ05hbWUnLFxyXG5cdFx0XHRcdFx0bWluV2lkdGg6IDE4MCxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMS41XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3JvbGVfbmFtZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSb2xlJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA5MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdwYXNzcG9ydF9JRCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdQYXNzcG9ydCBJRCcsXHJcblx0XHRcdFx0XHR3aWR0aDogMTMwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2JpcnRoX2RhdGUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQmlydGggZGF0ZScsXHJcblx0XHRcdFx0XHR3aWR0aDogMTMwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2FkZHJlc3MnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQWRkcmVzcycsXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogMTgwLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLjVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncGhvbmVfbnVtYmVycycsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdQaG9uZSBudW1iZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDE5MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdlbWFpbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdFbWFpbCcsXHJcblx0XHRcdFx0XHR3aWR0aDogMTgwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2VkaXQnLCBcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0VkaXQnLCBcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAne2NvbW1vbi5lZGl0SWNvbigpfSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnd3hpLXBlbmNpbCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5lZGl0VXNlcihpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZFVzZXJCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0FkZCB1c2VyJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYWRkVXNlcigpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHRyb3dzOltcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0dHlwZTogJ2NsZWFuJyxcclxuXHRcdFx0XHRcdGNvbHM6IFtoZWFkZXIsIGxvZ291dF0gXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRkdGFibGUsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHR7fSwgYWRkVXNlckJ0biwge31cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHVzZXJzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0bGV0IHVzZXJzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHRcdFx0dXNlcnNBcnIgPSB1c2Vyc0Fyci5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwuZnVsbF9uYW1lID0gZWwudXNlcl9uYW1lICsgJyAnICsgZWwudXNlcl9zdXJuYW1lO1xyXG5cdFx0XHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVktJW0tJWRcIik7XHJcblx0XHRcdFx0ZWwuYmlydGhfZGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShlbC5iaXJ0aF9kYXRlKSk7XHJcblx0XHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy51c2Vyc0RhdGEgPSB1c2Vyc0FycjtcclxuXHRcdFx0JCQoJ3VzZXJzTGlzdCcpLnBhcnNlKHVzZXJzQXJyKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblxyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCh7Y3VycmVudERhdGV9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuX3VzZXJGb3JtID0gdGhpcy51aShVc2VyRm9ybSk7XHJcblx0fVxyXG5cclxuXHRlZGl0VXNlcihpZCkge1xyXG5cdFx0Y29uc3QgdXNlciA9IHRoaXMudXNlcnNEYXRhLmZpbmQoZWwgPT4gZWwuaWQgPT0gaWQpO1xyXG5cdFx0dGhpcy5fdXNlckZvcm0uc2hvd1dpbmRvdyh1c2VyKTtcclxuXHR9XHJcblxyXG5cdGFkZFVzZXIoKSB7XHJcblx0XHR0aGlzLl91c2VyRm9ybS5zaG93V2luZG93KCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB1c2Vyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy91c2Vycyc7XHJcbmltcG9ydCB7dG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbX0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAnd2luZG93JyxcclxuXHRcdFx0bG9jYWxJZDogJ3VzZXJXaW5kb3cnLFxyXG5cdFx0XHRoZWFkOiAnRWRpdCB1c2VyJyxcclxuXHRcdFx0d2lkdGg6IDYwMCxcclxuXHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdGxvY2FsSWQ6ICd1c2VyRm9ybScsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIG5hbWU6ICdpZCcsIGxvY2FsSWQ6ICdpZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0ZpcnN0IG5hbWUnLCBuYW1lOiAndXNlcl9uYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdMYXN0IG5hbWUnLCBuYW1lOiAndXNlcl9zdXJuYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICdjb21ibycsIGxhYmVsOiAnUm9sZScsIG5hbWU6ICdjYXBhYmlsaXRpZXNfaWQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0Jywgb3B0aW9uczogW1xyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAxLCB2YWx1ZTogJ3JlYWRlcid9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAyLCB2YWx1ZTogJ2xhYnJhcmlhbid9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAzLCB2YWx1ZTogJ2FkbWluJ31cclxuXHRcdFx0XHRcdFx0XHRdIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFzc3BvcnQgSUQnLCBuYW1lOiAncGFzc3BvcnRfSUQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ2RhdGVwaWNrZXInLCBsYWJlbDogJ0JpcnRoIGRhdGUnLCBuYW1lOiAnYmlydGhfZGF0ZScsIGxvY2FsSWQ6ICdiaXJ0aF9kYXRlJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBZGRyZXNzJywgbmFtZTogJ2FkZHJlc3MnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bob25lJywgbmFtZTogJ3Bob25lX251bWJlcnMnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0VtYWlsJywgbmFtZTogJ2VtYWlsJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdhY2NvdW50X3Bhc3N3b3JkJywgbG9jYWxJZDogJ2luaXRpYWxfcGFzc3dvcmQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdFx0XHRcdCdjYXBhYmlsaXRpZXNfaWQnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5LFxyXG5cdFx0XHRcdFx0XHRcdCdlbWFpbCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdFx0J2FjY291bnRfcGFzc3dvcmQnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5LFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAyMCxcclxuXHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIHZhbHVlOiAnU2F2ZScsIHR5cGU6ICdmb3JtJywgbG9jYWxJZDogJ3NhdmVCdG4nLCB3aWR0aDogMTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIHZhbHVlOiAnQ2FuY2VsJywgd2lkdGg6IDEwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuaGlkZVdpbmRvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e31cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmZvcm0gPSB0aGlzLiQkKCd1c2VyRm9ybScpO1xyXG5cdFx0dGhpcy53aW5kb3cgPSB0aGlzLiQkKCd1c2VyV2luZG93Jyk7XHJcblx0fVxyXG5cclxuXHRzdWNjZXNzQWN0aW9uKCkge1xyXG5cdFx0dGhpcy53ZWJpeC5tZXNzYWdlKCdTdWNjZXNzJyk7XHJcblx0XHR0aGlzLmhpZGVXaW5kb3coKTtcclxuXHR9XHJcblxyXG5cdHNob3dXaW5kb3codXNlcikge1x0XHJcblx0XHR0aGlzLmlzTmV3ID0gdXNlciA/IGZhbHNlIDogdHJ1ZTtcdFxyXG5cclxuXHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0dGhpcy53aW5kb3cuZ2V0SGVhZCgpLnNldEhUTUwoJ0FkZCB1c2VyJyk7XHJcblx0XHRcdHRoaXMud2luZG93LmdldEhlYWQoKS5yZWZyZXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5mb3JtLnNldFZhbHVlcyh1c2VyKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbml0aWFsX3Bhc3N3b3JkID0gdGhpcy4kJCgnaW5pdGlhbF9wYXNzd29yZCcpO1xyXG5cdFx0dG9nZ2xlRWxlbWVudCh0aGlzLmlzTmV3LCBpbml0aWFsX3Bhc3N3b3JkKTtcclxuXHRcdFxyXG5cclxuXHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuZm9ybS5nZXRWYWx1ZXMoKTtcdFxyXG5cdFx0XHJcblx0XHRpZih0aGlzLmZvcm0udmFsaWRhdGUoKSkge1xyXG5cdFx0XHRpZih0aGlzLmlzTmV3KSB7XHJcblx0XHRcdFx0YWRkSXRlbSh1c2Vyc01vZGVsLCBkYXRhLCB0aGlzLnN1Y2Nlc3NBY3Rpb24uYmluZCh0aGlzKSk7XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR1cGRhdGVJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHRoaXMuc3VjY2Vzc0FjdGlvbi5iaW5kKHRoaXMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcclxuXHR9XHJcblxyXG5cdGhpZGVXaW5kb3coKSB7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXJWYWxpZGF0aW9uKCk7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXIoKTtcclxuXHRcdHRoaXMuZ2V0Um9vdCgpLmhpZGUoKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IGJvb2tzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2tzJztcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnkgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25zdHJ1Y3RvcihhcHAsIGxpYnJhcnlDb25maWcsIGJvb2tDYXJkKSB7XHJcblx0XHRzdXBlcihhcHApO1xyXG5cdFx0dGhpcy5saWJyYXJ5Q29uZmlnID0gbGlicmFyeUNvbmZpZztcclxuXHRcdHRoaXMuYm9va0NhcmQgPSBib29rQ2FyZDtcclxuXHR9XHJcblxyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTogJ2hlYWRlcicsXHJcblx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtYm9va1wiPjwvaT4gTGlzdCBvZiBib29rcycsXHJcblx0XHRcdGNzczogJ2NlbnRlciBwYWdlX2hlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZHRhYmxlID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICdkdF9saWJyYXJ5JyxcclxuXHRcdFx0c2VsZWN0OiB0cnVlLFxyXG5cdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdpZCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Jvb2tfdGl0bGUnLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ1RpdGxlJywge2NvbnRlbnQ6ICd0ZXh0RmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2F1dGhvcl9uYW1lJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydBdXRob3InLCB7Y29udGVudDogJ3RleHRGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZ2VucmVzJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnR2VucmVzJywge2NvbnRlbnQ6ICdzZWxlY3RGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ0NvdW50cnknLCB7Y29udGVudDogJ3NlbGVjdEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICd5ZWFyX29mX3B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICdkYXRlJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRmb3JtYXQ6IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVlcIiksXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnWWVhcicsIHtjb250ZW50OiAnZGF0ZVJhbmdlRmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2F2YWlsYWJsZV9jb3BpZXMnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0F2YWlsYWJsZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZWJvb2snLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ2VCb29rJywge2NvbnRlbnQ6XCJzZWxlY3RGaWx0ZXJcIn1dLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IChvYmopID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG9iai5lYm9vaz09PSd5ZXMnID8gJzxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPicgOiAnJ1xyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAndmlld0NvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdWaWV3JyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2VkaXRDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRWRpdCcsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J2ZhLWV5ZSc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93Qm9va0NhcmQoaWQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2ZhLWVkaXQnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd0Jvb2tDYXJkKGlkKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdmYS10cmFzaCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVCb29rKGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm93czogW2hlYWRlciwgZHRhYmxlXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGluaXQoKSB7XHJcblx0XHR0aGlzLmdyaWQgPSAkJCgnZHRfbGlicmFyeScpO1xyXG5cclxuXHRcdHN3aXRjaCAodGhpcy5saWJyYXJ5Q29uZmlnLnJvbGUpIHtcclxuXHRcdFx0Y2FzZSAncmVhZGVyJzogXHJcblx0XHRcdFx0dGhpcy5ncmlkLmdldENvbHVtbkNvbmZpZygnZWRpdENvbCcpLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5ncmlkLmdldENvbHVtbkNvbmZpZygncmVtb3ZlQ29sJykuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbGlicmFyaWFuJzpcclxuXHRcdFx0XHR0aGlzLmdyaWQuZ2V0Q29sdW1uQ29uZmlnKCd2aWV3Q29sJykuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHRoaXMuZ3JpZC5yZWZyZXNoQ29sdW1ucygpO1xyXG5cdFx0YXdhaXQgdGhpcy5nZXREYXRhKCk7XHJcblx0XHRhd2FpdCB0aGlzLmdldEZpbGVzKCk7XHJcblx0XHR0aGlzLmNoZWNrRmlsZXMoKTtcdFx0XHJcblxyXG5cdFx0dGhpcy5ncmlkLnBhcnNlKHRoaXMuYm9va3NBcnIpO1xyXG5cdFx0dGhpcy5fYm9va0NhcmQgPSB0aGlzLnVpKHRoaXMuYm9va0NhcmQpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZ2V0RGF0YSgpIHtcdFx0XHJcblx0XHRjb25zdCB1c2VyX2lkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cdFx0Y29uc3QgZGJEYXRhID0gYXdhaXQgYm9va3NNb2RlbC5nZXREYXRhRnJvbVNlcnZlcih1c2VyX2lkKTtcclxuXHRcdGxldCBib29rc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0Ym9va3NBcnIgPSBib29rc0Fyci5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdGVsLnllYXJfb2ZfcHVibGljYXRpb24gPSBuZXcgRGF0ZShlbC55ZWFyX29mX3B1YmxpY2F0aW9uKTtcclxuXHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmJvb2tzQXJyID0gYm9va3NBcnI7XHJcblx0fVxyXG5cclxuXHRhc3luYyBnZXRGaWxlcygpIHtcclxuXHRcdGNvbnN0IGRiRGF0YSA9IGF3YWl0IGZpbGVzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKTtcclxuXHRcdHRoaXMuZmlsZXNBcnIgPSBkYkRhdGEuanNvbigpO1x0XHRcdFx0XHRcdFxyXG5cdH1cclxuXHJcblx0Y2hlY2tGaWxlcygpIHtcclxuXHRcdHRoaXMuYm9va3NBcnIuZm9yRWFjaCgoYm9vaywgaSkgPT4ge1xyXG5cdFx0XHRjb25zdCBpc0ZpbGVzID0gdGhpcy5maWxlc0Fyci5maW5kKChlbCkgPT4gZWwuYm9va19pZCA9PT0gYm9vay5pZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihpc0ZpbGVzKSB7XHJcblx0XHRcdFx0dGhpcy5ib29rc0FycltpXS5lYm9vayA9ICd5ZXMnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuYm9va3NBcnJbaV0uZWJvb2sgPSAnbm8nO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNob3dCb29rQ2FyZChpZCkge1xyXG5cdFx0Y29uc3QgYm9vayA9IHRoaXMuYm9va3NBcnIuZmluZChlbCA9PiBlbC5pZCA9PSBpZCk7XHJcblx0XHR0aGlzLl9ib29rQ2FyZC5zaG93UG9wdXAoYm9vayk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVCb29rKGlkKSB7XHJcblx0XHRib29rc01vZGVsLnJlbW92ZUl0ZW0oaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3JpZC5yZW1vdmUoaWQpO1xyXG5cdH1cclxuXHJcblx0YWRkQm9vaygpIHtcclxuXHRcdHRoaXMuX2Jvb2tDYXJkLnNob3dQb3B1cCgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5pbXBvcnQgeyBEVU1NWUNPVkVSIH0gZnJvbSAnLi4vLi4vY29uc3RzJztcclxuaW1wb3J0IHsgdG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbSB9IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDYXJkIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDb3ZlciA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDb3ZlcicsXHJcblx0XHRcdHdpZHRoOiAxMjAsXHJcblx0XHRcdGhlaWdodDogMTgwLFxyXG5cdFx0XHRjc3M6ICdib29rX2NvdmVyJyxcclxuXHRcdFx0dGVtcGxhdGU6ICh1cmwpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gYDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KVwiID48L2Rpdj5gO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDYXJkID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NhcmRMaWJyYXJpYW4nLFxyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVGl0bGUnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdib29rX3RpdGxlJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F1dGhvcicsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2F1dGhvcl9uYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdHZW5yZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdnZW5yZXMnLCBvcHRpb25zOiBbXHJcblx0XHRcdFx0XHQnJywgJ0ZpY3Rpb24nLCAnRmFudGFzeScsICdUaHJpbGxlcicsICdIb3Jyb3InLCAnTXlzdGVyeScsICdIaXN0b3JpY2FsJywgJ1dlc3Rlcm5zJywgJ0ZhbWlseScsICdEYXJrIGNvbWVkeSdcclxuXHRcdFx0XHRdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQdWJsaXNoaW5nIGhvdXNlJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAncHVibGlzaGluZ19ob3VzZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdmFpbGFibGUgY29waWVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYXZhaWxhYmxlX2NvcGllcycgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYWdlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ251bWJlcl9vZl9wYWdlcycgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3ZlciBwaG90bycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2NvdmVyX3Bob3RvJyB9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkVGV4dEZpbGUgPSB7XHJcblx0XHRcdHZpZXc6ICd1cGxvYWRlcicsXHJcblx0XHRcdGxhYmVsOiAnPGkgY2xhc3M9XCJmYXMgZmEtZmlsZS11cGxvYWRcIj48L2k+IFVwbG9hZCB0ZXh0IGZpbGUnLFxyXG5cdFx0XHRsb2NhbElkOiAnYm9va0ZpbGVzJyxcclxuXHRcdFx0dHlwZTogJ2h0bWxidXR0b24nLFxyXG5cdFx0XHRhdXRvc2VuZDogZmFsc2UsXHJcblx0XHRcdHdpZHRoOiAxNTAsXHJcblx0XHRcdGZvcm1EYXRhOiAoKSA9PiAoe1xyXG5cdFx0XHRcdHVzZXJfaWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0XHRcdGJvb2tfaWQ6IHRoaXMuYm9va0lkXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRhY2NlcHQ6ICd0ZXh0L3BsYWluLCBhcHBsaWNhdGlvbi9wZGYsIC5kb2MsIC5kb2N4JyxcclxuXHRcdFx0dXBsb2FkOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2ZpbGVzL3VwbG9hZC90ZXh0JyxcclxuXHRcdFx0bGluazogJ2ZpbGVzTGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZmlsZXNMaXN0ID0ge1xyXG5cdFx0XHR2aWV3OiAnbGlzdCcsXHJcblx0XHRcdHR5cGU6ICd1cGxvYWRlcicsXHJcblx0XHRcdGlkOiAnZmlsZXNMaXN0JyxcclxuXHRcdFx0YXV0b2hlaWdodDp0cnVlLCBcclxuXHRcdFx0Ym9yZGVybGVzczp0cnVlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZEF1ZGlvRmlsZSA9IHtcclxuXHRcdFx0dmlldzogJ3VwbG9hZGVyJyxcclxuXHRcdFx0bGFiZWw6ICc8aSBjbGFzcz1cImZhcyBmYS1tdXNpY1wiPjwvaT4gVXBsb2FkIGF1ZGlvJyxcclxuXHRcdFx0bG9jYWxJZDogJ2F1ZGlvRmlsZXMnLFxyXG5cdFx0XHR0eXBlOiAnaHRtbGJ1dHRvbicsXHJcblx0XHRcdGF1dG9zZW5kOiBmYWxzZSxcclxuXHRcdFx0d2lkdGg6IDE1MCxcclxuXHRcdFx0Zm9ybURhdGE6ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0dXNlcl9pZDogdGhpcy51c2VySWQsXHJcblx0XHRcdFx0XHRib29rX2lkOiB0aGlzLmJvb2tJZFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0sXHJcblx0XHRcdGFjY2VwdDogJy5tcDMnLFxyXG5cdFx0XHR1cGxvYWQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmlsZXMvdXBsb2FkL2F1ZGlvJyxcclxuXHRcdFx0bGluazogJ2F1ZGlvTGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXVkaW9MaXN0ID0ge1xyXG5cdFx0XHR2aWV3OiAnbGlzdCcsXHJcblx0XHRcdHR5cGU6ICd1cGxvYWRlcicsXHJcblx0XHRcdGlkOiAnYXVkaW9MaXN0JyxcclxuXHRcdFx0YXV0b2hlaWdodDp0cnVlLCBcclxuXHRcdFx0Ym9yZGVybGVzczp0cnVlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGF2YWlsYWJsZVRleHRGaWxlcyA9IHtcclxuXHRcdFx0dmlldzogJ2FjdGl2ZUxpc3QnLFxyXG5cdFx0XHRsb2NhbElkOiAnYXZhaWxhYmxlVGV4dEZpbGVzJyxcclxuXHRcdFx0dGVtcGxhdGU6IGAjbmFtZSMgPHNwYW4gY2xhc3M9J2xpc3RfYnV0dG9uJz48aSBjbGFzcyA9ICdmYXMgZmEtdGltZXMnPjwvaT48L3NwYW4+YCxcclxuXHRcdFx0b246IHtcclxuXHRcdFx0XHRvbkl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHQvL3JlbW92ZSBmaWxlIGFuZCByZWNvcmQgaW4gREJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXZhaWxhYmxlQXVkaW9GaWxlcyA9IHtcclxuXHRcdFx0dmlldzogXCJhY3RpdmVMaXN0XCIsXHJcblx0XHRcdGxvY2FsSWQ6IFwiYXZhaWxhYmxlQXVkaW9GaWxlc1wiLFxyXG5cdFx0XHR0ZW1wbGF0ZTogXCIjbmFtZSNcIiArXHJcblx0XHRcdFx0XHRcIjxzcGFuIGNsYXNzPSdsaXN0X2J1dHRvbic+PGkgY2xhc3MgPSAnZmFzIGZhLXRpbWVzJz48L2k+PC9zcGFuPlwiLFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzYXZlQnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRsYWJlbDogJ1NhdmUnLFxyXG5cdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICdwb3B1cCcsXHJcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcclxuXHRcdFx0bWF4SGVpZ2h0OiA1NTAsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHR2aWV3OiAnc2Nyb2xsdmlldycsXHJcblx0XHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHRib29rQ292ZXIsIFxyXG5cdFx0XHRcdFx0XHRib29rQ2FyZCxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHZpZXc6ICd0ZW1wbGF0ZScsXHJcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU6ICdGaWxlcycsXHJcblx0XHRcdFx0XHRcdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRjc3M6ICdjZW50ZXInXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtoZWlnaHQ6IDJ9LFxyXG5cdFx0XHRcdFx0XHRhdmFpbGFibGVUZXh0RmlsZXMsXHJcblx0XHRcdFx0XHRcdGF2YWlsYWJsZUF1ZGlvRmlsZXMsXHJcblx0XHRcdFx0XHRcdGZpbGVzTGlzdCxcclxuXHRcdFx0XHRcdFx0YXVkaW9MaXN0LFxyXG5cdFx0XHRcdFx0XHR7aGVpZ2h0OiAxNX0sXHJcblx0XHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdFx0bG9jYWxJZDogJ2FkZGluZ0ZpbGVzQnV0dG9ucycsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRjb2xzOiBbIHt9LCBhZGRUZXh0RmlsZSwgYWRkQXVkaW9GaWxlLCB7fSBdIFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7aGVpZ2h0OiAxfSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nWDogMTUsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGNvbHM6IFt7fSwgc2F2ZUJ0biwge31dXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmZvcm0gPSB0aGlzLiQkKCdib29rQ2FyZExpYnJhcmlhbicpO1xyXG5cdH1cclxuXHJcblx0c2hvd1BvcHVwKGJvb2spIHtcclxuXHRcdHRoaXMuY2xlYXJGb3JtKCk7XHJcblx0XHR0aGlzLmlzTmV3ID0gYm9vayA/IGZhbHNlIDogdHJ1ZTtcclxuXHRcdHRoaXMuYm9vayA9IGJvb2sgfHwgJyc7XHJcblx0XHR0aGlzLmJvb2tJZCA9IGJvb2sgPyBib29rLmlkIDogJyc7XHJcblx0XHR0aGlzLnVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHJcblx0XHRmaWxlc01vZGVsLmdldEl0ZW1zKHRoaXMuYm9va0lkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgZmlsZXNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cclxuXHRcdFx0Y29uc3QgdGV4dEZpbGVzID0gW107XHJcblx0XHRcdGNvbnN0IGF1ZGlvRmlsZXMgPSBbXTtcclxuXHJcblx0XHRcdGZpbGVzQXJyLmZvckVhY2goKGZpbGUpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2goZmlsZS5kYXRhX3R5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdFx0XHR0ZXh0RmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdhdWRpbyc6XHJcblx0XHRcdFx0XHRcdGF1ZGlvRmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykucGFyc2UodGV4dEZpbGVzKTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLnBhcnNlKGF1ZGlvRmlsZXMpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dG9nZ2xlRWxlbWVudCghdGhpcy5pc05ldywgdGhpcy4kJCgnYm9va0NvdmVyJykpO1xyXG5cdFx0dG9nZ2xlRWxlbWVudCghdGhpcy5pc05ldywgdGhpcy4kJCgnYWRkaW5nRmlsZXNCdXR0b25zJykpO1xyXG5cclxuXHRcdGlmKCF0aGlzLmlzTmV3KSB7XHJcblx0XHRcdHRoaXMuZm9ybS5zZXRWYWx1ZXMoYm9vayk7XHJcblx0XHRcdHRoaXMuJCQoJ2Jvb2tDb3ZlcicpLnNldFZhbHVlcyhib29rLmNvdmVyX3Bob3RvIHx8IERVTU1ZQ09WRVIpO1x0XHRcdFxyXG5cdFx0fVx0XHRcclxuXHJcblx0XHR0aGlzLmdldFJvb3QoKS5zaG93KCk7XHRcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuZm9ybS5nZXRWYWx1ZXMoKTtcclxuXHJcblx0XHRjb25zdCBzdWNjZXNzQWN0aW9uID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLndlYml4Lm1lc3NhZ2UoJ1N1Y2Nlc3MnKTtcclxuXHRcdFx0dGhpcy5oaWRlV2luZG93KCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmKHRoaXMuZm9ybS52YWxpZGF0ZSgpKSB7XHJcblx0XHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0XHRhZGRJdGVtKGJvb2tzTW9kZWwsIGRhdGEsIHN1Y2Nlc3NBY3Rpb24pO1x0XHRcdFx0XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHVwZGF0ZUl0ZW0oYm9va3NNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJCQoJ2Jvb2tGaWxlcycpLnNlbmQoKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Upe1xyXG5cdFx0XHRcdFx0dGhpcy53ZWJpeC5tZXNzYWdlKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLiQkKCdhdWRpb0ZpbGVzJykuc2VuZCgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZihyZXNwb25zZSl7XHJcblx0XHRcdFx0XHR0aGlzLndlYml4Lm1lc3NhZ2UocmVzcG9uc2UubWVzc2FnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cclxuXHRoaWRlV2luZG93KCkge1xyXG5cdFx0dGhpcy5jbGVhckZvcm0oKTtcclxuXHRcdHRoaXMuZ2V0Um9vdCgpLmhpZGUoKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyRm9ybSAoKXtcclxuXHRcdHRoaXMuZm9ybS5jbGVhclZhbGlkYXRpb24oKTtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy4kJCgnYm9va0ZpbGVzJykuZmlsZXMuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F1ZGlvRmlsZXMnKS5maWxlcy5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnKS5jbGVhckFsbCgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6J2hlYWRlcicsIHRlbXBsYXRlOnRoaXMuYXBwLmNvbmZpZy5uYW1lLCBjc3M6J3dlYml4X2hlYWRlciBhcHBfaGVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBtZW51ID0ge1xyXG5cdFx0XHR2aWV3OidtZW51JywgXHJcblx0XHRcdGNzczonYXBwX21lbnUnLFxyXG5cdFx0XHR3aWR0aDoxODAsIFxyXG5cdFx0XHRsYXlvdXQ6J3knLCBcclxuXHRcdFx0c2VsZWN0OnRydWUsXHJcblx0XHRcdHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cIndlYml4X2ljb24gI2ljb24jXCI+PC9zcGFuPiAjdmFsdWUjICcsXHJcblx0XHRcdHZhbHVlOiAnbWFpbicsXHJcblx0XHRcdGRhdGE6W1xyXG5cdFx0XHRcdHsgdmFsdWU6J0xpYnJhcnknLCBpZDonbGlicmFyeScsICBpY29uOidmYXMgZmEtYm9vay1yZWFkZXInIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonVXNlcnMnLCBpZDondXNlcnMnLCAgaWNvbjonZmFzIGZhLWNvZycgfVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbjp7XHJcblx0XHRcdFx0b25NZW51SXRlbUNsaWNrOiAoaWQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZXJfaWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLmFwcC5zaG93KGBsaWJyYXJpYW4uaW5kZXg/aWQ9JHt1c2VyX2lkfS9saWJyYXJpYW4uJHtpZH1gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbG9nb3V0ID0ge1xyXG5cdFx0XHR2aWV3OididXR0b24nLCBcclxuXHRcdFx0bG9jYWxJZDonbG9nb3V0QnRuJywgXHJcblx0XHRcdHZhbHVlOidMb2dvdXQnLCBcclxuXHRcdFx0dHlwZTonZm9ybSdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdWkgPSB7XHJcblx0XHRcdHR5cGU6J2NsZWFuJywgcGFkZGluZ1g6NSwgY3NzOidhcHBfbGF5b3V0JywgXHJcblx0XHRcdGNvbHM6W1xyXG5cdFx0XHRcdHsgcGFkZGluZ1g6NSwgcGFkZGluZ1k6MTAsIHJvd3M6IFsge2Nzczond2ViaXhfc2hhZG93X21lZGl1bScsIHJvd3M6W2hlYWRlciwgbWVudSwgbG9nb3V0XX0gXX0sXHJcblx0XHRcdFx0eyB2aWV3OiAncmVzaXplcicsIHdpZHRoOiA1IH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dHlwZTogJ3dpZGUnLCBwYWRkaW5nWTogMTAsIHBhZGRpbmdYOiA1LCByb3dzOiBbXHJcblx0XHRcdFx0XHRcdHsgJHN1YnZpZXc6IHRydWUgfVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB1aTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHR0aGlzLiQkKCdsb2dvdXRCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFwcCA9IHRoaXMuYXBwO1xyXG5cdFx0XHRjb25zdCBmb3JtYXQgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZLSVtLSVkXCIpO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpKTtcclxuXHRcdFx0XHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9nb3V0KHtjdXJyZW50RGF0ZX0pLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gXCJ3ZWJpeC1qZXRcIjtcclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vY29tbW9uL2xpYnJhcnknO1xyXG5pbXBvcnQgQm9va0NhcmQgZnJvbSAnLi9ib29rQ2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaWJMaWJyYXJ5IGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1x0XHJcblxyXG5cdFx0Y29uc3QgbGlicmFyeUNvbmZpZyA9IHtcclxuXHRcdFx0cm9sZTogJ2xpYnJhcmlhbidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkQm9va0J0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnQWRkIGJvb2snLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0bGlicmFyeS5hZGRCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KHRoaXMuYXBwLCBsaWJyYXJ5Q29uZmlnLCBCb29rQ2FyZCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRsaWJyYXJ5LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbHM6IFt7fSxhZGRCb29rQnRuLHt9XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblBhZ2UgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luRm9ybSA9IHtcclxuXHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRsb2NhbElkOiAnbG9naW5Gb3JtJyxcclxuXHRcdFx0d2lkdGg6IDMwMCxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdVc2VybmFtZScsIG5hbWU6ICd1c2VybmFtZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgdHlwZTogJ3Bhc3N3b3JkJywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdwYXNzd29yZCcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW46IDUsIGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0eyB2aWV3OiAnYnV0dG9uJywgbG9jYWxJZDogJ2xvZ2luQnRuJywgdmFsdWU6ICdMb2dpbicsIHR5cGU6ICdmb3JtJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHZpZXc6ICdidXR0b24nLCB2YWx1ZTogJ0NhbmNlbCcgfVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsaW5rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dmFsdWU6ICdDcmVhdGUgYW4gYWNjb3VudCcsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zaG93KCcvcmVnaXN0ZXInKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcdFxyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0bG9naW5Gb3JtLFxyXG5cdFx0XHRcdFx0XHRsaW5rLFxyXG5cdFx0XHRcdFx0XHR7fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e31cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLiQkKCdsb2dpbkJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy4kJCgnbG9naW5Gb3JtJykuZ2V0VmFsdWVzKCk7XHJcblx0XHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dpbih2YWx1ZXMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHRcclxuXHRcdFx0XHRpZiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZXJEYXRhID0gcmVzcG9uc2UuanNvbigpLnVzZXI7XHJcblx0XHRcdFx0XHRjb25zdCBpZCA9IHVzZXJEYXRhLmlkO1xyXG5cclxuXHRcdFx0XHRcdHN3aXRjaCAodXNlckRhdGEucm9sZV9uYW1lKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2FkbWluJzogXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zaG93KGBhZG1pbi5pbmRleD9pZD0ke2lkfWApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdsaWJyYXJpYW4nOiBcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3coYGxpYnJhcmlhbi5pbmRleD9pZD0ke2lkfS9saWJyYXJpYW4ubGlicmFyeWApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdyZWFkZXInOiBcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3coYHJlYWRlci5pbmRleD9pZD0ke2lkfS9yZWFkZXIubWFpbmApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHdlYml4Lm1lc3NhZ2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgbGlrZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvbGlrZXMnO1xyXG5pbXBvcnQge3RvZ2dsZUVsZW1lbnQsIGZvcm1hdERhdGV9IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuaW1wb3J0IHtEVU1NWUNPVkVSLCBTVUNDRVNTfSBmcm9tICcuLi8uLi9jb25zdHMnOyBcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuaW1wb3J0IGNvbW1lbnRzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDYXJkIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDb3ZlciA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDb3ZlcicsXHJcblx0XHRcdHdpZHRoOiAxMjAsXHJcblx0XHRcdGhlaWdodDogMTgwLFxyXG5cdFx0XHRjc3M6ICdib29rX2NvdmVyJyxcclxuXHRcdFx0dGVtcGxhdGU6ICh1cmwpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gYDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KVwiID48L2Rpdj5gO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDYXJkID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NhcmRSZWFkZXInLFx0XHRcdFxyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVGl0bGUnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdib29rX3RpdGxlJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdXRob3InLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdXRob3JfbmFtZScsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnR2VucmVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnZ2VucmVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUHVibGlzaGluZyBob3VzZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ3B1Ymxpc2hpbmdfaG91c2UnLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F2YWlsYWJsZSBjb3BpZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdmFpbGFibGVfY29waWVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYWdlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ251bWJlcl9vZl9wYWdlcycsIHJlYWRvbmx5OiB0cnVlIH1cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVUZXh0RmlsZXMgPSB7XHJcblx0XHRcdHZpZXc6ICdhY3RpdmVMaXN0JyxcclxuXHRcdFx0bG9jYWxJZDogJ2F2YWlsYWJsZVRleHRGaWxlcycsXHJcblx0XHRcdHRlbXBsYXRlOiBcIiNuYW1lI1wiICtcclxuXHRcdFx0XHRcdFwiPHNwYW4gY2xhc3M9J2xpc3RfYnV0dG9uJz48aSBjbGFzcyA9ICdmYXMgZmEtZG93bmxvYWQnPjwvaT48L3NwYW4+XCIsXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgYm9va05hbWUgPSB0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5nZXRJdGVtKGlkKS5uYW1lO1xyXG5cclxuXHRcdFx0XHRcdGZpbGVzTW9kZWwuZG93bmxvYWRJdGVtKGlkKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0d2ViaXguaHRtbC5kb3dubG9hZChyZXMsIGJvb2tOYW1lKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVBdWRpb0ZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiBcImFjdGl2ZUxpc3RcIixcclxuXHRcdFx0bG9jYWxJZDogXCJhdmFpbGFibGVBdWRpb0ZpbGVzXCIsXHJcblx0XHRcdHR5cGU6e1xyXG5cdFx0XHRcdGhlaWdodDoxMDBcclxuXHRcdFx0fSxcclxuXHRcdFx0dGVtcGxhdGU6IFwiI25hbWUjPGF1ZGlvIGNvbnRyb2xzIHNyYz0naHR0cDovL2xvY2FsaG9zdDozMDAwL2F1ZGlvLyNpZCMnPjwvYXVkaW8+XCJcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb3JkZXJCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ29yZGVyQm9vaycsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0bGFiZWw6ICc8aSBjbGFzcz1cImZhciBmYS1oYW5kLXBhcGVyXCI+PC9pPiBPcmRlcicsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMub3JkZXJCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZG93bmxvYWRCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ2Rvd25sb2FkQm9vaycsXHJcblx0XHRcdHR5cGU6ICdpY29uJyxcclxuXHRcdFx0aWNvbjogJ2ZhcyBmYS1kb3dubG9hZCcsXHJcblx0XHRcdHdpZHRoOiA2MCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5vcmRlckJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsaWtlQm9vayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGxvY2FsSWQ6ICdsaWtlQnV0dG9uJyxcclxuXHRcdFx0Y3NzOiAnbGlrZV9idXR0b24nLFxyXG5cdFx0XHR0eXBlOiAnaWNvbicsIFxyXG5cdFx0XHRpY29uOiAnZmFyIGZhLWhlYXJ0JyxcclxuXHRcdFx0d2lkdGg6IDQ1LFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLmxpa2VCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdG9nZ2xlQ29tbWVudHNCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRsb2NhbElkOiAnY29tbWVudEJ1dHRvbicsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0bGFiZWw6ICdDb21tZW50cyA8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3duXCI+JyxcclxuXHRcdFx0d2lkdGg6IDEyMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy50b2dnbGVDb21tZW50cygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZENvbW1lbnQgPSB7XHJcblx0XHRcdG1hcmdpbjogNSxcclxuXHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRwYWRkaW5nWDogMTcsXHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2aWV3Oid0ZXh0YXJlYScsXHJcblx0XHRcdFx0XHRsb2NhbElkOiAndXNlckNvbW1lbnQnLFxyXG5cdFx0XHRcdFx0bGFiZWw6ICdDb21tZW50JyxcclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb246ICd0b3AnLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiA4MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRcdGxvY2FsSWQ6ICdzYXZlQ29tbWVudEJ0bicsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnU2VuZCcsXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVDb21tZW50KCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGNvbW1lbnRzID0ge1xyXG5cdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHR7fSwgdG9nZ2xlQ29tbWVudHNCdG4sIHt9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsb2NhbElkOiAnY29tbWVudExheW91dCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IHRydWUsXHJcblx0XHRcdFx0XHRyb3dzOiBbXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAncG9wdXAnLFxyXG5cdFx0XHRwb3NpdGlvbjonY2VudGVyJyxcclxuXHRcdFx0bWF4SGVpZ2h0OiA1NTAsXHJcblx0XHRcdGJvZHk6e1xyXG5cdFx0XHRcdHZpZXc6ICdzY3JvbGx2aWV3JyxcclxuXHRcdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHRcdGJvb2tDb3ZlciwgYm9va0NhcmQsIGF2YWlsYWJsZVRleHRGaWxlcywgYXZhaWxhYmxlQXVkaW9GaWxlcyxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nWDogMTUsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRvcmRlckJvb2ssIGRvd25sb2FkQm9vaywge30sIGxpa2VCb29rXHJcblx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRhZGRDb21tZW50LFxyXG5cdFx0XHRcdFx0XHRjb21tZW50c1xyXG5cdFx0XHRcdFx0XSBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cdFxyXG5cdHNob3dQb3B1cChib29rKSB7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24gPSB0aGlzLiQkKCdsaWtlQnV0dG9uJyk7XHJcblx0XHR0aGlzLmZvcm0gPSB0aGlzLiQkKCdib29rQ2FyZFJlYWRlcicpO1xyXG5cdFx0dGhpcy5maWxlc0xpc3QgPSB0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKTtcclxuXHRcdHRoaXMudG9nZ2xlQ29tbWVudHNCdG4gPSB0aGlzLiQkKCdjb21tZW50QnV0dG9uJyk7XHJcblx0XHR0aGlzLmNvbW1lbnRMYXlvdXQgPSB0aGlzLiQkKCdjb21tZW50TGF5b3V0Jyk7XHJcblx0XHR0aGlzLmJvb2sgPSBib29rO1xyXG5cdFx0dGhpcy5ib29rSWQgPSBib29rLmlkO1xyXG5cdFx0dGhpcy51c2VySWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2xlYXJGb3JtKCk7XHJcblx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKGJvb2spO1xyXG5cdFx0dGhpcy4kJCgnYm9va0NvdmVyJykuc2V0VmFsdWVzKGJvb2suY292ZXJfcGhvdG8gfHwgRFVNTVlDT1ZFUik7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24uZGVmaW5lKCdiYWRnZScsIGJvb2suY291bnRfbGlrZXMgfHwgJzAnKTtcclxuXHRcdHRoaXMuZ2V0RmlsZXMoKTtcclxuXHRcdHRoaXMuZ2V0Q29tbWVudHMoKTtcdFx0XHJcblx0XHRcclxuXHRcdHRvZ2dsZUVsZW1lbnQoYm9vay5ib29rX2ZpbGUsIHRoaXMuJCQoJ2Rvd25sb2FkQm9vaycpKTtcclxuXHRcdHRvZ2dsZUVsZW1lbnQoYm9vay5hdmFpbGFibGVfY29waWVzLCB0aGlzLiQkKCdvcmRlckJvb2snKSk7XHJcblx0XHR0aGlzLnRvZ2dsZUxpa2UoYm9vay51c2VyX2lkID09IHRoaXMudXNlcklkKTtcclxuXHJcblx0XHR0aGlzLmdldFJvb3QoKS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHRnZXRGaWxlcygpIHtcclxuXHRcdGZpbGVzTW9kZWwuZ2V0SXRlbXModGhpcy5ib29rSWQpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCBmaWxlc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0XHRjb25zdCB0ZXh0RmlsZXMgPSBbXTtcclxuXHRcdFx0Y29uc3QgYXVkaW9GaWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0ZmlsZXNBcnIuZm9yRWFjaCgoZmlsZSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaChmaWxlLmRhdGFfdHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAndGV4dCc6IFxyXG5cdFx0XHRcdFx0XHR0ZXh0RmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdhdWRpbyc6IFxyXG5cdFx0XHRcdFx0XHRhdWRpb0ZpbGVzLnB1c2goZmlsZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLnBhcnNlKHRleHRGaWxlcyk7XHJcblx0XHRcdHRoaXMuJCQoJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnKS5wYXJzZShhdWRpb0ZpbGVzKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b3JkZXJCb29rKCkge1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRsaWtlQm9vaygpIHtcclxuXHRcdGlmKHRoaXMuYm9vay51c2VyX2lkID09IHRoaXMudXNlcklkKSB7XHJcblx0XHRcdGxpa2VzTW9kZWwucmVtb3ZlTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdHVzID0gcmVzcG9uc2UuanNvbigpLnNlcnZlclN0YXR1cztcclxuXHRcdFx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRcdFx0dGhpcy51bnNldExpa2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0bGlrZXNNb2RlbC5hZGRMaWtlKHRoaXMudXNlcklkLCB0aGlzLmJvb2tJZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0XHRcdGlmKHN0YXR1cyA9PSBTVUNDRVNTKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldExpa2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVx0XHRcclxuXHR9XHRcclxuXHJcblx0dG9nZ2xlTGlrZShjb25kaXRpb24pIHtcclxuXHRcdGlmKGNvbmRpdGlvbikge1xyXG5cdFx0XHR0aGlzLnNldExpa2UoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVuc2V0TGlrZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0TGlrZSgpIHtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5kZWZpbmUoJ2ljb24nLCAnZmFzIGZhLWhlYXJ0Jyk7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24ucmVmcmVzaCgpO1xyXG5cdH1cclxuXHJcblx0dW5zZXRMaWtlKCkge1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnaWNvbicsICdmYXIgZmEtaGVhcnQnKTtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5yZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHRzYXZlQ29tbWVudCgpIHtcclxuXHRcdGNvbnN0IGNvbW1lbnRJbnB1dCA9IHRoaXMuJCQoJ3VzZXJDb21tZW50Jyk7XHJcblx0XHRjb25zdCBjb21tZW50VGV4dCA9IGNvbW1lbnRJbnB1dC5nZXRWYWx1ZSgpO1xyXG5cdFx0Y29uc3QgY29tbWVudCA9IHtcclxuXHRcdFx0J3VzZXJfaWQnOiB0aGlzLnVzZXJJZCxcclxuXHRcdFx0J2Jvb2tfaWQnOiB0aGlzLmJvb2tJZCxcclxuXHRcdFx0J2NvbnRlbnQnOiBjb21tZW50VGV4dCxcclxuXHRcdFx0J2NvbW1lbnREYXRlJzogbmV3IERhdGUoKVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb21tZW50c01vZGVsLmFkZEl0ZW0oY29tbWVudCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0aWYocmVzcG9uc2UpIHtcclxuXHRcdFx0XHR0aGlzLmNsZWFyRm9ybSgpO1xyXG5cdFx0XHRcdHRoaXMuZ2V0Q29tbWVudHMoKTtcclxuXHRcdFx0XHR0aGlzLmNvbW1lbnRMYXlvdXQucmVmcmVzaCgpO1xyXG5cdFx0XHRcdHRoaXMuY29tbWVudExheW91dC5zaG93KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YWRkQ2hpbGRDb21tZW50cyhhcnIsIGl0ZW0pIHtcclxuXHRcdGxldCBpID0gMDtcclxuXHRcdHdoaWxlKGkgPCBhcnIubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IGVsID0gYXJyW2ldO1xyXG5cdFx0XHRpZiAoZWwuY29tbWVudF9pZCA9PT0gaXRlbS5pZCkge1xyXG5cdFx0XHRcdGNvbnN0IGNvbW1lbnRJdGVtID0gdGhpcy5jb21wb3NlQ29tbWVudChlbCk7XHJcblx0XHRcdFx0JCQoYGNvbW1lbnRfJHtpdGVtLmlkfWApLmFkZFZpZXcoY29tbWVudEl0ZW0pO1xyXG5cdFx0XHRcdGFyci5zcGxpY2UoaSwgMSk7XHJcblxyXG5cdFx0XHRcdGlmKGFyci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENoaWxkQ29tbWVudHMoYXJyLCBlbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q29tbWVudHMoKSB7XHJcblx0XHR0aGlzLmNvbW1lbnRzR290ID0gdHJ1ZTtcclxuXHRcdGNvbW1lbnRzTW9kZWwuZ2V0SXRlbXModGhpcy5ib29rSWQpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCBjb21tZW50c0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdHdoaWxlKGkgPCBjb21tZW50c0Fyci5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb25zdCBjb21tZW50ID0gY29tbWVudHNBcnJbaV07XHJcblx0XHRcdFx0aWYgKCFjb21tZW50LmNvbW1lbnRfaWQpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGNvbW1lbnRJdGVtID0gdGhpcy5jb21wb3NlQ29tbWVudChjb21tZW50KTtcclxuXHRcdFx0XHRcdHRoaXMuY29tbWVudExheW91dC5hZGRWaWV3KGNvbW1lbnRJdGVtKTtcclxuXHRcdFx0XHRcdGNvbW1lbnRzQXJyLnNwbGljZShpLCAxKTtcclxuXHJcblx0XHRcdFx0XHRpZihjb21tZW50c0Fyci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYWRkQ2hpbGRDb21tZW50cyhjb21tZW50c0FyciwgY29tbWVudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGkrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlQ29tbWVudHMoKSB7XHJcblx0XHRjb25zdCBpc1Zpc2libGUgPSB0aGlzLmNvbW1lbnRMYXlvdXQuaXNWaXNpYmxlKCk7XHJcblx0XHRpZihpc1Zpc2libGUpIHtcclxuXHRcdFx0dGhpcy50b2dnbGVDb21tZW50c0J0bi5zZXRWYWx1ZSgnQ29tbWVudHMgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT4nKTtcclxuXHRcdFx0dGhpcy5jb21tZW50TGF5b3V0LmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnRvZ2dsZUNvbW1lbnRzQnRuLnNldFZhbHVlKCdDb21tZW50cyA8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS11cFwiPjwvaT4nKTtcclxuXHRcdFx0aWYoIXRoaXMuY29tbWVudHNHb3QpIHtcclxuXHRcdFx0XHR0aGlzLmdldENvbW1lbnRzKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jb21tZW50TGF5b3V0LnNob3coKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbXBvc2VDb21tZW50KGNvbW1lbnQpIHtcclxuXHRcdGNvbnN0IGNvbW1lbnREYXRlID0gZm9ybWF0RGF0ZShjb21tZW50LmNvbW1lbnRfZGF0ZSk7XHJcblx0XHRjb25zdCBjb21tZW50QXV0aG9yID0gYCR7Y29tbWVudC51c2VyX25hbWV9ICR7Y29tbWVudC51c2VyX3N1cm5hbWV9YDtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpZDogYGNvbW1lbnRfJHtjb21tZW50LmlkfWAsXHJcblx0XHRcdGNzczogJ2NvbW1lbnRfaXRlbScsXHJcblx0XHRcdHBhZGRpbmc6IHtsZWZ0OiAxMH0sXHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2aWV3OiBcInRlbXBsYXRlXCIsXHJcblx0XHRcdFx0XHRhdXRvaGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHRcdFx0Ym9yZGVybGVzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGNzczogJ3RlbXBsYXRlJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAgYDxkaXYgY2xhc3M9XCJjb21tZW50X2luZm9cIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzID0gXCJjb21tZW50X2F1dGhvclwiPiR7Y29tbWVudEF1dGhvcn08L2Rpdj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzID0gXCJjb21tZW50X2RhdGVcIj4ke2NvbW1lbnREYXRlfTwvZGl2PlxcXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+JHtjb21tZW50LmNvbnRlbnR9PC9kaXY+YCxcclxuXHRcdFx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHRcdFx0J3RlbXBsYXRlJzogKCkgPT4gdGhpcy5yZXBseVRvQ29tbWVudChjb21tZW50LmlkKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRyZXBseVRvQ29tbWVudChjb21tZW50SWQpIHtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coY29tbWVudElkKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyRm9ybSAoKXtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy5maWxlc0xpc3QuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ3VzZXJDb21tZW50Jykuc2V0VmFsdWUoJycpO1xyXG5cclxuXHRcdGNvbnN0IGNvbW1lbnRzID0gdGhpcy5jb21tZW50TGF5b3V0LmdldENoaWxkVmlld3MoKTtcclxuXHJcblx0XHRpZihjb21tZW50cykge1xyXG5cdFx0XHRjb25zdCBjb21tZW50c0NvcHkgPSBbLi4uY29tbWVudHNdO1xyXG5cclxuXHRcdFx0Y29tbWVudHNDb3B5LmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNvbW1lbnRMYXlvdXQucmVtb3ZlVmlldyhjb21tZW50KTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi8uLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgdGVtcGxhdGU6dGhpcy5hcHAuY29uZmlnLm5hbWUsIGNzczond2ViaXhfaGVhZGVyIGFwcF9oZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG1lbnUgPSB7XHJcblx0XHRcdHZpZXc6J21lbnUnLCBcclxuXHRcdFx0Y3NzOidhcHBfbWVudScsXHJcblx0XHRcdHdpZHRoOjE4MCwgbGF5b3V0Oid5Jywgc2VsZWN0OnRydWUsXHJcblx0XHRcdHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cIndlYml4X2ljb24gI2ljb24jXCI+PC9zcGFuPiAjdmFsdWUjICcsXHJcblx0XHRcdHZhbHVlOiAnbWFpbicsXHJcblx0XHRcdGRhdGE6W1xyXG5cdFx0XHRcdHsgdmFsdWU6J015IGJvb2tzJywgaWQ6J21haW4nLCBpY29uOidmYXMgZmEtYm9va21hcmsnIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonTGlicmFyeScsIGlkOidsaWJyYXJ5JywgIGljb246J2ZhcyBmYS1ib29rLXJlYWRlcicgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidUb3BzJywgaWQ6J3RvcHMnLCAgaWNvbjonZmFzIGZhLWxpc3QnIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonU2V0dGluZ3MnLCBpZDonc2V0dGluZ3MnLCAgaWNvbjonZmFzIGZhLWNvZycgfSxcclxuXHRcdFx0XSxcclxuXHRcdFx0b246e1xyXG5cdFx0XHRcdG9uTWVudUl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB1c2VyX2lkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5hcHAuc2hvdyhgcmVhZGVyLmluZGV4P2lkPSR7dXNlcl9pZH0vcmVhZGVyLiR7aWR9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHR0eXBlOidjbGVhbicsIHBhZGRpbmdYOjUsIGNzczonYXBwX2xheW91dCcsIFxyXG5cdFx0XHRjb2xzOltcclxuXHRcdFx0XHR7IHBhZGRpbmdYOjUsIHBhZGRpbmdZOjEwLCByb3dzOiBbIHtjc3M6J3dlYml4X3NoYWRvd19tZWRpdW0nLCByb3dzOltoZWFkZXIsIG1lbnUsIGxvZ291dF19IF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3Jlc2l6ZXInLCB3aWR0aDogNSB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICd3aWRlJywgcGFkZGluZ1k6IDEwLCBwYWRkaW5nWDogNSwgcm93czogW1xyXG5cdFx0XHRcdFx0XHR7ICRzdWJ2aWV3OiB0cnVlIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCh7Y3VycmVudERhdGV9KS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tIFwid2ViaXgtamV0XCI7XHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4uL2NvbW1vbi9saWJyYXJ5JztcclxuaW1wb3J0IEJvb2tDYXJkIGZyb20gJy4vYm9va0NhcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVhZGVyTGlicmFyeSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGxpYnJhcnlDb25maWcgPSB7XHJcblx0XHRcdHJvbGU6ICdyZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRuZXcgTGlicmFyeSh0aGlzLmFwcCwgbGlicmFyeUNvbmZpZywgQm9va0NhcmQpXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgdGVzdFJlc3VsdHMgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRpZDogJ2dyb3VwTGlzdCcsXHJcblx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0FkZCcsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICd7Y29tbW9uLnRyYXNoSWNvbigpfSdcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBidXR0b24gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRpZDogJ2FkZEdyb3VwJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQnLFxyXG5cdFx0XHR0eXBlOidmb3JtJyxcclxuXHRcdFx0aW5wdXRXaWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge31cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdHJvd3M6IFt0ZXN0UmVzdWx0cywgYnV0dG9uXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHQvLyAkJCgnZ3JvdXBMaXN0JykucGFyc2UoZ3JvdXBzKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHVzZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzJztcclxuaW1wb3J0IHt1cGRhdGVJdGVtfSBmcm9tICcuLi8uLi9zY3JpcHRzJzsgXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRjb25zdCBidXR0b24gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRpZDogJ3NhdmVDaGFuZ2VzJyxcclxuXHRcdFx0dmFsdWU6ICdTYXZlJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRpbnB1dFdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVzZXJEYXRhID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICd1c2VyRGF0YUZvcm0nLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBuYW1lOiAnaWQnLCBsb2NhbElkOiAndXNlcl9pZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0ZpcnN0IG5hbWUnLG5hbWU6ICd1c2VyX25hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnTGFzdCBuYW1lJyxuYW1lOiAndXNlcl9zdXJuYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bhc3Nwb3J0IElEJyxuYW1lOiAncGFzc3BvcnRfSUQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAnZGF0ZXBpY2tlcicsIGxhYmVsOiAnQmlydGggZGF0ZScsbmFtZTogJ2JpcnRoX2RhdGUnLCBsb2NhbElkOiAnYmlydGhfZGF0ZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBZGRyZXNzJyxuYW1lOiAnYWRkcmVzcycsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQaG9uZScsbmFtZTogJ3Bob25lX251bWJlcnMnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRW1haWwnLG5hbWU6ICdlbWFpbCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHRidXR0b25cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbdXNlckRhdGFdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IGlkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cclxuXHRcdHVzZXJzTW9kZWwuZ2V0SXRlbShpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCB1c2VyRGF0YSA9IGRhdGEuanNvbigpWzBdO1xyXG5cdFx0XHR1c2VyRGF0YS5iaXJ0aF9kYXRlID0gbmV3IERhdGUgKHVzZXJEYXRhLmJpcnRoX2RhdGUpO1xyXG5cdFx0XHR0aGlzLiQkKCd1c2VyRGF0YUZvcm0nKS5zZXRWYWx1ZXModXNlckRhdGEpO1xyXG5cdFx0fSk7XHRcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtICgpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLiQkKCd1c2VyRGF0YUZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdGNvbnN0IHN1Y2Nlc3NBY3Rpb24gPSB0aGlzLndlYml4Lm1lc3NhZ2UoJ05ldyBkYXRhIHNhdmVkJyk7XHJcblx0XHR1cGRhdGVJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHN1Y2Nlc3NBY3Rpb24pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tIFwid2ViaXgtamV0XCI7XHJcbmltcG9ydCBib29rc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9ib29rcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib29rVG9wcyBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmlldzogJ2xpc3QnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDI1MCxcclxuXHRcdFx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0XHRcdGRhdGE6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd09sZGVzdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ09sZGVzdCBib29rcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd05ld2VzdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ05ld2VzdCBib29rcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd01vc3RQYWdlc0Jvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ01vc3QgcGFnZXMgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dCb29rc1dpdGhMb25nTmFtZXMnLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAnQm9va3Mgd2l0aCBsb25nZXN0IG5hbWVzJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdzaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MnLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAnQXV0aG9ycyB3aXRoIG1vc3QgYm9va3MnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRvbjoge1xyXG5cdFx0XHRcdFx0XHRvbkl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoKGlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93T2xkZXN0Qm9va3MnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dPbGRlc3RCb29rcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dOZXdlc3RCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd05ld2VzdEJvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd01vc3RQYWdlc0Jvb2tzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93TW9zdFBhZ2VzQm9va3MoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93Qm9va3NXaXRoTG9uZ05hbWVzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93Qm9va3NXaXRoTG9uZ05hbWVzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Jvb2tzVG9wJyxcclxuXHRcdFx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZ3JpZCA9ICQkKCdib29rc1RvcCcpO1xyXG5cdFx0Ym9va3NNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRsZXQgYm9va3NBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cdFx0XHRib29rc0FyciA9IGJvb2tzQXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0XHRlbC55ZWFyX29mX3B1YmxpY2F0aW9uID0gbmV3IERhdGUoZWwueWVhcl9vZl9wdWJsaWNhdGlvbik7XHJcblx0XHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5ib29rc0FyciA9IGJvb2tzQXJyO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5kZWZhdWx0Q29uZmlnID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdib29rX3RpdGxlJyxcclxuXHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdGhlYWRlcjogJ1RpdGxlJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdhdXRob3JfbmFtZScsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRoZWFkZXI6ICdBdXRob3InXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2dlbnJlcycsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdGhlYWRlcjogJ0dlbnJlcydcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdGhlYWRlcjogJ0NvdW50cnknXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ3llYXJfb2ZfcHVibGljYXRpb24nLFxyXG5cdFx0XHRcdHNvcnQ6ICdkYXRlJyxcclxuXHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRmb3JtYXQ6IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVlcIiksXHJcblx0XHRcdFx0aGVhZGVyOiAnWWVhcidcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnbnVtYmVyX29mX3BhZ2VzJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdQYWdlcycsXHJcblx0XHRcdFx0d2lkdGg6IDYwXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRzaG93T2xkZXN0Qm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gYS55ZWFyX29mX3B1YmxpY2F0aW9uIC0gYi55ZWFyX29mX3B1YmxpY2F0aW9uO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93TmV3ZXN0Qm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4gYi55ZWFyX29mX3B1YmxpY2F0aW9uIC0gYS55ZWFyX29mX3B1YmxpY2F0aW9uKTtcclxuXHRcdHRoaXMuc2hvd1Jlc3VsdHMoZGF0YSwgdGhpcy5kZWZhdWx0Q29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHNob3dNb3N0UGFnZXNCb29rcygpIHtcclxuXHRcdGxldCBkYXRhID0gWy4uLnRoaXMuYm9va3NBcnJdO1xyXG5cdFx0ZGF0YS5zb3J0KChhLCBiKSA9PiAgYi5udW1iZXJfb2ZfcGFnZXMgLSBhLm51bWJlcl9vZl9wYWdlcyk7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93Qm9va3NXaXRoTG9uZ05hbWVzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+IGIuYm9va190aXRsZS5sZW5ndGggLSBhLmJvb2tfdGl0bGUubGVuZ3RoKTtcclxuXHRcdHRoaXMuc2hvd1Jlc3VsdHMoZGF0YSwgdGhpcy5kZWZhdWx0Q29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHNob3dBdXRob3JzV2l0aE1vc3RCb29rcygpIHtcclxuXHRcdGxldCBhdXRob3JzID0gW107XHJcblx0XHR0aGlzLmJvb2tzQXJyLmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdGNvbnN0IGluZGV4ID0gYXV0aG9ycy5maW5kSW5kZXgoYXV0aG9yID0+IGF1dGhvci5uYW1lID09IGVsLmF1dGhvcl9uYW1lKTtcclxuXHRcdFx0aWYgKGluZGV4ID09PSAtMSkge1xyXG5cdFx0XHRcdGF1dGhvcnMucHVzaCh7bmFtZTogZWwuYXV0aG9yX25hbWUsIGJvb2tzQ291bnQ6IDF9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRhdXRob3JzW2luZGV4XS5ib29rc0NvdW50Kys7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGF1dGhvcnMgPSBhdXRob3JzLnNvcnQoKGEsIGIpID0+IGIuYm9va3NDb3VudCAtIGEuYm9va3NDb3VudCk7XHJcblxyXG5cdFx0Y29uc3QgY29sdW1ucyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnbmFtZScsXHJcblx0XHRcdFx0aGVhZGVyOiAnTmFtZScsXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2Jvb2tzQ291bnQnLFxyXG5cdFx0XHRcdGhlYWRlcjogJ0Jvb2tzIGNvdW50JyxcclxuXHRcdFx0XHRmaWxsc3BhY2U6IDFcclxuXHRcdFx0fVxyXG5cdFx0XTtcclxuXHRcdHRoaXMuc2hvd1Jlc3VsdHMoYXV0aG9ycywgY29sdW1ucyk7XHJcblx0fVxyXG5cclxuXHRzaG93UmVzdWx0cyhkYXRhLCBjb2x1bW5zKSB7XHJcblx0XHR0aGlzLmdyaWQuZGVmaW5lKCdjb2x1bW5zJywgY29sdW1ucyk7XHJcblx0XHR0aGlzLmdyaWQucmVmcmVzaENvbHVtbnMoKTtcclxuXHRcdGRhdGEgPSBkYXRhLnNsaWNlKDAsIDEwKTtcclxuXHRcdHRoaXMuZ3JpZC5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy5ncmlkLnBhcnNlKGRhdGEpO1xyXG5cdFx0dGhpcy5ncmlkLnNob3coKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJQYWdlIGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCByZWdpc3RlckZvcm0gPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ3JlZ2lzdGVyRm9ybScsXHJcblx0XHRcdHdpZHRoOiAzMDAsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVWVybmFtZScsIG5hbWU6ICd1c2VybmFtZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgdHlwZTogJ3Bhc3N3b3JkJywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdwYXNzd29yZCcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW46IDUsIGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgbG9jYWxJZDogJ3JlZ2lzdGVyQnRuJywgdmFsdWU6ICdSZWdpc3RlcicsIHR5cGU6ICdmb3JtJ1x0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0cmVnaXN0ZXJGb3JtLFxyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHt9XHJcblx0XHRcdF1cdFx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy4kJCgncmVnaXN0ZXJCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuJCQoJ3JlZ2lzdGVyRm9ybScpLmdldFZhbHVlcygpO1xyXG5cdFx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHRcdGF1dGhvcml6YXRpb24ucmVnaXN0ZXIodmFsdWVzKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zdGF0dXM7XHJcblx0XHRcdFx0Y29uc3QgaWQgPSByZXNwb25zZS5qc29uKCkuaWQ7XHJcblx0XHRcdFx0aWYgKHN0YXR1cyA9PT0gMikge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93KGByZWFkZXIuaW5kZXg/aWQ9JHtpZH0vcmVhZGVyLm1haW5gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRpZihyZXNwb25zZS5qc29uKCkucmVhc29uID09PSAndXNlckV4aXN0Jykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0d2ViaXgubWVzc2FnZShyZXNwb25zZS5qc29uKCkuZGF0YSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=