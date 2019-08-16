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

	LikesModel.prototype.getLikes = function getLikes(id) {
		return webix.ajax().get('' + this._url + id);
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

/***/ "./sources/models/orders.js":
/*!**********************************!*\
  !*** ./sources/models/orders.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var OrdersModel = function () {
	function OrdersModel() {
		_classCallCheck(this, OrdersModel);

		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/orders/';
	}

	OrdersModel.prototype.getItems = function getItems(id) {
		return webix.ajax().get('' + this._url + id);
	};

	OrdersModel.prototype.addOrder = function addOrder(order) {
		return webix.ajax().post(this._url, order);
	};

	OrdersModel.prototype.updateItem = function updateItem(data) {
		return webix.ajax().put(this._url, data);
	};

	OrdersModel.prototype.removeItem = function removeItem(id) {
		return webix.ajax().del(this._url, id);
	};

	return OrdersModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new OrdersModel());

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

	UsersModel.prototype.getReaders = function getReaders() {
		return webix.ajax().get(this._url + '/readers');
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
	"./librarian/ordersForm": "./sources/views/librarian/ordersForm.js",
	"./librarian/ordersForm.js": "./sources/views/librarian/ordersForm.js",
	"./librarian/users": "./sources/views/librarian/users.js",
	"./librarian/users.js": "./sources/views/librarian/users.js",
	"./login": "./sources/views/login.js",
	"./login.js": "./sources/views/login.js",
	"./reader": "./sources/views/reader/index.js",
	"./reader/": "./sources/views/reader/index.js",
	"./reader/bookCard": "./sources/views/reader/bookCard.js",
	"./reader/bookCard.js": "./sources/views/reader/bookCard.js",
	"./reader/commentObj": "./sources/views/reader/commentObj.js",
	"./reader/commentObj.js": "./sources/views/reader/commentObj.js",
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

/***/ "./sources/views/librarian/ordersForm.js":
/*!***********************************************!*\
  !*** ./sources/views/librarian/ordersForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/orders */ "./sources/models/orders.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var OrdersForm = function (_JetView) {
	_inherits(OrdersForm, _JetView);

	function OrdersForm() {
		_classCallCheck(this, OrdersForm);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	OrdersForm.prototype.config = function config() {
		return {
			view: 'window',
			localId: 'userOrdersWindow',
			width: 600,
			position: 'center',
			body: {
				rows: [{
					view: 'form',
					localId: 'userOrdersForm',
					elements: []
				}]
			}
		};
	};

	OrdersForm.prototype.init = function init() {};

	OrdersForm.prototype.showWindow = function showWindow(id) {
		this.getRoot().show();
	};

	return OrdersForm;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (OrdersForm);

/***/ }),

/***/ "./sources/views/librarian/users.js":
/*!******************************************!*\
  !*** ./sources/views/librarian/users.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/users */ "./sources/models/users.js");
/* harmony import */ var _ordersForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordersForm */ "./sources/views/librarian/ordersForm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var UsersView = function (_JetView) {
	_inherits(UsersView, _JetView);

	function UsersView() {
		_classCallCheck(this, UsersView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	UsersView.prototype.config = function config() {
		var _this2 = this;

		var dtable = {
			view: 'datatable',
			id: 'usersListLibrarian',
			columns: [{
				id: 'id',
				hidden: 1
			}, {
				id: 'full_name',
				header: 'Name',
				minWidth: 180,
				fillspace: 1.5
			}, {
				id: 'orders',
				header: 'Orders',
				width: 70,
				template: '<i class="fas fa-folder-open"></i>'
			}],
			onClick: {
				'fa-folder-open': function faFolderOpen(e, id) {
					_this2.showUserOrders(id);
				}
			}
		};

		var ui = {
			rows: [dtable]
		};
		return ui;
	};

	UsersView.prototype.init = function init() {
		var _this3 = this;

		_models_users__WEBPACK_IMPORTED_MODULE_1__["default"].getReaders().then(function (dbData) {
			var usersArr = dbData.json();
			usersArr = usersArr.map(function (el) {
				el.full_name = el.user_name + ' ' + el.user_surname;
				return el;
			});
			_this3.usersData = usersArr;
			$$('usersListLibrarian').parse(usersArr);
		});

		this.editOrders = this.ui(_ordersForm__WEBPACK_IMPORTED_MODULE_3__["default"]);
	};

	UsersView.prototype.showUserOrders = function showUserOrders(id) {
		this.editOrders.showWindow(id);
	};

	return UsersView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (UsersView);

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
/* harmony import */ var _models_orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/orders */ "./sources/models/orders.js");
/* harmony import */ var _commentObj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commentObj */ "./sources/views/reader/commentObj.js");
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
				_this2.Comment.toggleComments(_this2.commentsGot, _this2.$$('commentButton'));
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
						_this2.Comment.saveComment(_this2.$$('userComment'));
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
		this.orderBtn = this.$$('orderBook');
		this.commentLayout = this.$$('commentLayout');
		this.book = book;
		this.bookId = book.id;
		this.userId = this.getParam("id", true);
		this.Comment = new _commentObj__WEBPACK_IMPORTED_MODULE_6__["default"](this.userId, this.bookId, this.commentLayout);

		this.clearForm();
		this.form.setValues(book);
		this.$$('bookCover').setValues(book.cover_photo || _consts__WEBPACK_IMPORTED_MODULE_3__["DUMMYCOVER"]);
		this.likeButton.define('badge', book.count_likes || '0');
		this.getFiles();
		this.Comment.getComments();
		this.commentsGot = true;

		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(book.book_file, this.$$('downloadBook'));
		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(book.available_copies, this.$$('orderBook'));
		this.toggleLike(book.user_id == this.userId);
		this.toggleOrder(book.order_date);

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

	BookCard.prototype.orderBook = function orderBook() {
		var _this4 = this;

		var order = {
			user_id: this.userId,
			book_id: this.bookId,
			order_date: new Date()
		};

		_models_orders__WEBPACK_IMPORTED_MODULE_5__["default"].addOrder(order).then(function (response) {
			var status = response.json().serverStatus;
			if (status == _consts__WEBPACK_IMPORTED_MODULE_3__["SUCCESS"]) {
				_this4.setOrderedVal();
			}
		});
	};

	BookCard.prototype.setOrderedVal = function setOrderedVal() {
		this.orderBtn.define('label', 'Ordered');
		this.orderBtn.refresh();
		this.orderBtn.disable();
	};

	BookCard.prototype.unsetOrderedVal = function unsetOrderedVal() {
		this.orderBtn.define('label', '<i class="far fa-hand-paper"></i> Order');
		this.orderBtn.refresh();
		this.orderBtn.enable();
	};

	BookCard.prototype.toggleOrder = function toggleOrder(ordered) {
		if (ordered) {
			this.setOrderedVal();
		} else {
			this.unsetOrderedVal();
		}
	};

	BookCard.prototype.likeBook = function likeBook() {
		var _this5 = this;

		if (this.book.user_id == this.userId) {
			_models_likes__WEBPACK_IMPORTED_MODULE_1__["default"].removeLike(this.userId, this.bookId).then(function (response) {
				var status = response.json().serverStatus;
				if (status == _consts__WEBPACK_IMPORTED_MODULE_3__["SUCCESS"]) {
					_this5.unsetLike();
				}
			});
		} else {
			_models_likes__WEBPACK_IMPORTED_MODULE_1__["default"].addLike(this.userId, this.bookId).then(function (response) {
				var status = response.json().serverStatus;
				if (status == _consts__WEBPACK_IMPORTED_MODULE_3__["SUCCESS"]) {
					_this5.setLike();
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

	BookCard.prototype.clearForm = function clearForm() {
		this.form.clear();
		this.filesList.clearAll();
		this.$$('availableTextFiles').clearAll();
		this.$$('availableAudioFiles').clearAll();
		this.Comment.clearComments();
	};

	return BookCard;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (BookCard);

/***/ }),

/***/ "./sources/views/reader/commentObj.js":
/*!********************************************!*\
  !*** ./sources/views/reader/commentObj.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");
/* harmony import */ var _models_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/comments */ "./sources/models/comments.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Comment = function () {
	function Comment(userId, bookId, commentLayout) {
		_classCallCheck(this, Comment);

		this.userId = userId;
		this.bookId = bookId;
		this.commentLayout = commentLayout;
	}

	Comment.prototype.saveComment = function saveComment(commentInput, parentCommentId) {
		var _this = this;

		var commentText = commentInput.getValue();
		var comment = {
			'user_id': this.userId,
			'book_id': this.bookId,
			'content': commentText,
			'commentDate': new Date(),
			'comment_id': parentCommentId || 0
		};

		_models_comments__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(comment).then(function (response) {
			if (response) {
				_this.clearComments();
				if (!parentCommentId) {
					commentInput.setValue('');
				}
				_this.getComments();
				_this.commentLayout.show();
			}
		});
	};

	Comment.prototype.addChildComments = function addChildComments(arr, item) {
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

	Comment.prototype.getComments = function getComments() {
		var _this2 = this;

		_models_comments__WEBPACK_IMPORTED_MODULE_1__["default"].getItems(this.bookId).then(function (dbData) {
			var commentsArr = dbData.json();

			var i = 0;

			while (i < commentsArr.length) {
				var comment = commentsArr[i];
				if (!comment.comment_id) {
					var commentItem = _this2.composeComment(comment);
					_this2.commentLayout.addView(commentItem);
					commentsArr.splice(i, 1);

					if (commentsArr.length > 0) {
						_this2.addChildComments(commentsArr, comment);
					}
				} else {
					i++;
				}
			}
		});
	};

	Comment.prototype.toggleComments = function toggleComments(isCommentsGot, toggleCommentsBtn) {
		var isVisible = this.commentLayout.isVisible();
		if (isVisible) {
			toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-down"></i>');
			this.commentLayout.hide();
		} else {
			toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-up"></i>');
			if (!isCommentsGot) {
				this.getComments();
			}
			this.commentLayout.show();
		}
	};

	Comment.prototype.composeComment = function composeComment(comment) {
		var _this3 = this;

		var commentDate = Object(_scripts__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(comment.comment_date);
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
				template: '<div class="comment_info">                                    <div class = "comment_author">' + commentAuthor + '</div>                                    <div class = "comment_date">' + commentDate + '</div>                                </div>\n                                <div>' + comment.content + '</div>',
				onClick: {
					'template': function template() {
						return _this3.replyToComment(comment.id);
					}
				}
			}]
		};
	};

	Comment.prototype.replyToComment = function replyToComment(commentId) {
		var _this4 = this;

		var replyToCommentLayout = {
			padding: 10,
			rows: [{
				view: 'textarea',
				id: 'replyUserComment',
				height: 60
			}, {
				cols: [{}, {
					view: 'button',
					localId: 'saveCommentBtn',
					type: 'form',
					label: 'Send',
					width: 70,
					height: 30,
					click: function click() {
						_this4.saveComment($$('replyUserComment'), commentId);
					}
				}]
			}]
		};

		if (!$$('replyUserComment')) {
			$$('comment_' + commentId).addView(replyToCommentLayout);
		}
	};

	Comment.prototype.clearComments = function clearComments() {
		var _this5 = this;

		var comments = this.commentLayout.getChildViews();
		if (comments) {
			var commentsCopy = [].concat(comments);

			commentsCopy.forEach(function (comment) {
				_this5.commentLayout.removeView(comment);
			});
		}
	};

	return Comment;
}();

/* harmony default export */ __webpack_exports__["default"] = (Comment);

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
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/orders */ "./sources/models/orders.js");


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
		var _this2 = this;

		var testResults = {
			view: 'datatable',
			localId: 'ordersList',
			select: true,
			columns: [{
				id: 'id',
				hidden: true
			}, {
				id: 'book_title',
				header: 'Book',
				fillspace: 1
			}, {
				id: 'author_name',
				header: 'Author',
				fillspace: 1
			}, {
				id: 'removeCol',
				header: 'Remove',
				css: 'center',
				width: 70,
				template: '<i class="fas fa-trash"></i>'
			}],
			onClick: {
				'fa-trash': function faTrash(e, id) {
					_this2.removeBook(id);
				}
			}
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
		this.grid = this.$$('ordersList');
		this.userId = this.getParam("id", true);
		this.parseBooks();
	};

	MainView.prototype.parseBooks = function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
			var _this3 = this;

			return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return _models_orders__WEBPACK_IMPORTED_MODULE_2__["default"].getItems(this.userId).then(function (dbData) {
								var ordersArr = dbData.json();
								_this3.grid.clearAll();
								_this3.$$('ordersList').parse(ordersArr);
							});

						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function parseBooks() {
			return _ref.apply(this, arguments);
		}

		return parseBooks;
	}();

	MainView.prototype.removeBook = function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
			return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return _models_orders__WEBPACK_IMPORTED_MODULE_2__["default"].removeItem(id);

						case 2:
							_context2.next = 4;
							return this.parseBooks();

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		function removeBook(_x) {
			return _ref2.apply(this, arguments);
		}

		return removeBook;
	}();

	return MainView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_1__["JetView"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViaXgtamV0L2Rpc3QvZXM2L2pldC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvYXV0aG9yaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2NvbnN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2xvY2FsZXMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2Jvb2tzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2ZpbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2xpa2VzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL29yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL21vZGVscy91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL215YXBwLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3Mgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9hZG1pbi91c2VyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2NvbW1vbi9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2Jvb2tDYXJkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vb3JkZXJzRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2Jvb2tDYXJkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2NvbW1lbnRPYmouanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL3RvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImciLCJGdW5jdGlvbiIsImhhZFJ1bnRpbWUiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiaW5kZXhPZiIsIm9sZFJ1bnRpbWUiLCJ1bmRlZmluZWQiLCJlIiwiZ2xvYmFsIiwiT3AiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiaW5Nb2R1bGUiLCJydW50aW1lIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsInR5cGUiLCJjYWxsIiwiZXJyIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInZhbHVlIiwiUHJvbWlzZSIsInRoZW4iLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsInJldHVybiIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInRvU3RyaW5nIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwib2JqZWN0Iiwia2V5IiwicmV2ZXJzZSIsImxlbmd0aCIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiSmV0QmFzZSIsIndlYml4Iiwid2ViaXhKZXQiLCJfZXZlbnRzIiwiX3N1YnMiLCJfZGF0YSIsImdldFJvb3QiLCJfcm9vdCIsImRlc3RydWN0b3IiLCJfZGV0YWNoRXZlbnRzIiwiX2Rlc3Ryb3lTdWJzIiwiX2NvbnRhaW5lciIsImFwcCIsIl9wYXJlbnQiLCJzZXRQYXJhbSIsImlkIiwidXJsIiwiX3NlZ21lbnQiLCJ1cGRhdGUiLCJzaG93IiwiZ2V0UGFyYW0iLCJwYXJlbnQiLCJ2aWV3IiwiZ2V0UGFyZW50VmlldyIsImdldFVybCIsInN1YnVybCIsImdldFVybFN0cmluZyIsIiQkIiwicm9vdCIsInF1ZXJ5VmlldyIsImNvbmZpZyIsImxvY2FsSWQiLCIkc2NvcGUiLCJvbiIsImNvZGUiLCJhdHRhY2hFdmVudCIsImNvbnRhaW5zIiwia2lkIiwiZ2V0U3ViVmlldyIsInN1YiIsImdldFN1YlZpZXdJbmZvIiwic3VidmlldyIsInBvcHVwIiwiZXZlbnRzIiwiZGV0YWNoRXZlbnQiLCJzdWJWaWV3IiwiX2luaXRfdXJsX2RhdGEiLCJjdXJyZW50IiwiZXh0ZW5kIiwicGFyYW1zIiwiX2dldERlZmF1bHRTdWIiLCJkZWZhdWx0IiwiYnJhbmNoIiwiY2hpbGQiLCJfcm91dGVkX3ZpZXciLCJwYXJzZSIsInN1YnN0ciIsInBhcnRzIiwic3BsaXQiLCJjaHVua3MiLCJ0ZXN0IiwicG9zIiwicGFyYW0iLCJkY2h1bmsiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYWdlIiwiaXNOZXciLCJ1cmwyc3RyIiwic3RhY2siLCJjaHVuayIsIm9iajJzdHIiLCJqb2luIiwic3RyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiUm91dGUiLCJyb3V0ZSIsImluZGV4IiwiX25leHQiLCJwYXRoIiwic2hpZnQiLCJyZWZyZXNoIiwiX2pvaW4iLCJraWRzIiwib2xkIiwiY29uY2F0IiwiYXBwZW5kIiwicmVzIiwicmVqIiwicmVkaXJlY3QiLCJjb25maXJtIiwiY2FsbEV2ZW50IiwiY2F0Y2giLCJzaXplIiwibiIsIkpldFZpZXciLCJfY2hpbGRyZW4iLCJ1aSIsImNvbnRhaW5lciIsImpldHZpZXciLCJjcmVhdGVWaWV3IiwicmVuZGVyIiwidGFyZ2V0IiwiX3JlbmRlckZyYW1lTG9jayIsIl9zaG93Iiwic2VnbWVudCIsIl91cmxDaGFuZ2UiLCJsaW5rUm91dGVyIiwiZ2V0Um91dGVyIiwic2V0Iiwic2lsZW50IiwiaW5pdCIsIl8kdmlldyIsIl8kIiwicmVhZHkiLCJfJHVybCIsIm1lc3NhZ2UiLCJ1cmxDaGFuZ2UiLCJkZXN0cm95IiwiX2Rlc3Ryb3lLaWRzIiwidXNlIiwicGx1Z2luIiwidGFnTmFtZSIsIl9yZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiLCJ0b05vZGUiLCJfcmVuZGVyX2ZpbmFsIiwiY2ZnIiwic2xvdCIsInJlc3BvbnNlIiwiY29weUNvbmZpZyIsIm9sZHVpIiwiYXNXaW4iLCJzZXRQb3NpdGlvbiIsImlzVmlzaWJsZSIsIl9pbml0IiwiX2luaXRVcmwiLCJfaW5pdEVycm9yIiwid2FpdHMiLCJmcmFtZSIsIndhaXQiLCJhbGwiLCJsb2NrIiwiX3JlbmRlckZyYW1lIiwiX2NyZWF0ZVN1YlZpZXciLCJlcnJvciIsImNyZWF0ZUZyb21VUkwiLCJ1aXMiLCJKZXRWaWV3UmF3IiwiX3VpIiwiU3ViUm91dGVyIiwiY2IiLCJhIiwiZ2V0IiwiX29uY2UiLCJKZXRBcHBCYXNlIiwid2luZG93IiwidmVyc2lvbiIsInN0YXJ0IiwiX3NlcnZpY2VzIiwiRXZlbnRTeXN0ZW0iLCJfc3ViU2VnbWVudCIsImdldFNlcnZpY2UiLCJzZXRTZXJ2aWNlIiwiaGFuZGxlciIsIiRzdWJ2aWV3IiwiYWRkU3ViVmlldyIsIkFycmF5IiwicG9pbnQiLCJEYXRhQ29sbGVjdGlvbiIsIlJlZ0V4cCIsIkRhdGUiLCJjb3B5IiwiJHJvdXRlciIsImNsaWNrSGFuZGxlciIsInNyY0VsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJ0cmlnZ2VyIiwiX2ZvclZpZXciLCJsb2FkVmlldyIsInZpZXdzIiwiX2xvYWRFcnJvciIsIl9sb2FkVmlld0R5bmFtaWMiLCJfX2VzTW9kdWxlIiwibm93Iiwicm91dGVyIiwicmVzdCIsImFwcGx5IiwiZGF0YSIsImFjdGlvbiIsImJpbmQiLCJlciIsImRlYnVnIiwiY29uc29sZSIsInRleHQiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiZXhwaXJlIiwiZmlyc3RJbml0IiwiX2ZpcnN0X3N0YXJ0IiwidG9wIiwiYmFzZSIsInNldFRpbWVvdXQiLCJhbmltYXRpb24iLCJub2RlIiwiaHRtbCIsImFkZENzcyIsInJlbW92ZUNzcyIsInVybFN0cmluZyIsInRlbXBsYXRlIiwidWlkIiwiSGFzaFJvdXRlciIsIl9kZXRlY3RQcmVmaXgiLCJvbnBvcHN0YXRlIiwicm91dGVzIiwiY29tcGFyZSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJwcmVmaXgiLCJzdWZpeCIsIl9nZXRSYXciLCJyb3V0ZXJQcmVmaXgiLCJsb2NhdGlvbiIsImhyZWYiLCJpc1BhdGNoZWQiLCJwYXRjaCIsInciLCJ3aW4iLCJwcm9taXNlIiwiZnJlZXplIiwic29tZSIsIiRmcmVlemUiLCJyZXNpemUiLCJiYXNlQWRkIiwiYmFzZWxheW91dCIsImFkZFZpZXciLCJiYXNlUmVtb3ZlIiwicmVtb3ZlVmlldyIsImp2aWV3Iiwic3VicyIsImFyZ3VtZW50cyIsImxheW91dCIsInByb3RvVUkiLCIkaW5pdCIsIiRhcHAiLCIkcmVhZHkiLCJvcmlnaW4iLCJwcm94eSIsIkpldEFwcCIsIlN0b3JlUm91dGVyIiwic3RvcmFnZSIsInNlc3Npb24iLCJzdG9yZU5hbWUiLCJwdXQiLCJVcmxSb3V0ZXIiLCJwYXRobmFtZSIsIkVtcHR5Um91dGVyIiwiXyRjb25maWciLCJVbmxvYWRHdWFyZCIsImhhcyIsInN0b3JlIiwidHJpbSIsIndhcm4iLCJ4IiwiU3RyaW5nIiwiZGVsaW1pdGVyIiwicnVzc2lhblBsdXJhbEdyb3VwcyIsImVuZCIsInBsdXJhbFR5cGVzIiwiYXJhYmljIiwibGFzdFR3byIsImJvc25pYW5fc2VyYmlhbiIsImNoaW5lc2UiLCJjcm9hdGlhbiIsImZyZW5jaCIsImdlcm1hbiIsInJ1c3NpYW4iLCJsaXRodWFuaWFuIiwiY3plY2giLCJwb2xpc2giLCJpY2VsYW5kaWMiLCJzbG92ZW5pYW4iLCJwbHVyYWxUeXBlVG9MYW5ndWFnZXMiLCJsYW5nVG9UeXBlTWFwIiwibWFwcGluZyIsInJldCIsImxhbmdzIiwibGFuZyIsInBsdXJhbFR5cGVOYW1lIiwibG9jYWxlIiwibGFuZ1RvUGx1cmFsVHlwZSIsImVuIiwicGx1cmFsVHlwZUluZGV4IiwiY291bnQiLCJlc2NhcGUiLCJ0b2tlbiIsImNvbnN0cnVjdFRva2VuUmVnZXgiLCJvcHRzIiwic3VmZml4IiwiUmFuZ2VFcnJvciIsImRvbGxhclJlZ2V4IiwiZG9sbGFyQmlsbHNZYWxsIiwiZGVmYXVsdFRva2VuUmVnZXgiLCJ0cmFuc2Zvcm1QaHJhc2UiLCJwaHJhc2UiLCJzdWJzdGl0dXRpb25zIiwidG9rZW5SZWdleCIsImludGVycG9sYXRpb25SZWdleCIsIm9wdGlvbnMiLCJzbWFydF9jb3VudCIsInRleHRzIiwiZXhwcmVzc2lvbiIsImFyZ3VtZW50IiwiUG9seWdsb3QiLCJwaHJhc2VzIiwiY3VycmVudExvY2FsZSIsImFsbG93TWlzc2luZyIsIm9uTWlzc2luZ0tleSIsImludGVycG9sYXRpb24iLCJuZXdMb2NhbGUiLCJtb3JlUGhyYXNlcyIsInByZWZpeGVkS2V5IiwidW5zZXQiLCJjbGVhciIsIm5ld1BocmFzZXMiLCJ0IiwiXyIsInRyYW5zZm9ybSIsIndlYml4UG9seWdsb3QiLCJMb2NhbGUiLCJfdmlldyIsInNldExhbmdEYXRhIiwicGNvbmZpZyIsInBvbHlnbG90IiwicG9seSIsInNlcnZpY2UiLCJsb2NOYW1lIiwiaTE4biIsInNldExvY2FsZSIsImdldExhbmciLCJzZXRMYW5nIiwidXJscyIsIk1lbnUiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwiZ2V0U2VsZWN0ZWRJZCIsInNlbGVjdCIsImV4aXN0cyIsImJhc2VpY29ucyIsImdvb2QiLCJzYXZpbmciLCJiYXNldGV4dCIsIlN0YXR1cyIsInN0YXR1cyIsImlzZXJyb3IiLCJleHBpcmVEZWxheSIsImljb25zIiwiY29udGVudCIsImFyZWEiLCJzZXRIVE1MIiwic3VjY2VzcyIsInNldFN0YXR1cyIsImZhaWwiLCJnZXRTdGF0dXMiLCJoaWRlU3RhdHVzIiwibW9kZSIsInJlc3BvbnNlVGV4dCIsInRyYWNrIiwiZHAiLCJfaWQiLCJfb2JqIiwicmVtb3RlIiwiYWpheCIsIl9tb2RlIiwiX3VybCIsIl9yZXF1ZXN0IiwiX2hlYWRlcnMiLCJfZmlsZXMiLCJUaGVtZSIsInRoZW1lIiwiZ2V0VGhlbWUiLCJzZXRUaGVtZSIsImxpbmtzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsbmFtZSIsImRpc2FibGVkIiwic2tpbiIsImNvcHlQYXJhbXMiLCJVcmxQYXJhbSIsIm9zIiwib2ciLCJ2YWwiLCJVc2VyIiwibG9naW4iLCJsb2dvdXQiLCJhZnRlckxvZ2luIiwiYWZ0ZXJMb2dvdXQiLCJwaW5nIiwibW9kZWwiLCJ1c2VyIiwiZ2V0VXNlciIsInNlcnZlciIsInBhc3MiLCJjYW5OYXZpZ2F0ZSIsIl8kcm9vdCIsInB1YmxpYyIsInNldEludGVydmFsIiwicGx1Z2lucyIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJsIiwibG9nb3V0VXJsIiwibG9naW5VcmwiLCJyZWdpc3RlclVybCIsIkF1dGhvcml6YXRpb24iLCJyZWdpc3RlciIsInBvc3QiLCJkYXRlIiwiRFVNTVlDT1ZFUiIsIlNVQ0NFU1MiLCJVUkwiLCJCb29rc01vZGVsIiwiZ2V0RGF0YUZyb21TZXJ2ZXIiLCJ1c2VyX2lkIiwiYWRkSXRlbSIsInVwZGF0ZUl0ZW0iLCJyZW1vdmVJdGVtIiwiZGVsIiwiQ29tbWVudHNNb2RlbCIsImdldEl0ZW1zIiwiRmlsZXNNb2RlbCIsImRvd25sb2FkSXRlbSIsIkxpa2VzTW9kZWwiLCJnZXRMaWtlcyIsImFkZExpa2UiLCJ1c2VySWQiLCJib29rSWQiLCJyZW1vdmVMaWtlIiwiT3JkZXJzTW9kZWwiLCJhZGRPcmRlciIsIm9yZGVyIiwiVXNlcnNNb2RlbCIsImdldFJlYWRlcnMiLCJnZXRJdGVtIiwiTXlBcHAiLCJkZWZhdWx0cyIsIkFQUE5BTUUiLCJWRVJTSU9OIiwiQlVJTERfQVNfTU9EVUxFIiwiUFJPRFVDVElPTiIsIm5hdiIsInVybFBhcnRzIiwidGFyZ2V0UGFydCIsImVsIiwicm9sZSIsImpzb24iLCJ0b2dnbGVFbGVtZW50IiwiY29uZGl0aW9uIiwiZWxlbWVudCIsImhpZGUiLCJNb2RlbCIsInN1Y2Nlc3NBY3Rpb24iLCJzZXJ2ZXJTdGF0dXMiLCJmb3JtYXREYXRlIiwiZGJEYXRlIiwiY3VycmVudFllYXIiLCJnZXRGdWxsWWVhciIsImN1cnJlbnRNb250aCIsImdldE1vbnRoIiwiY3VycmVudERheSIsImdldERhdGUiLCJjdXJyZW50SG91cnMiLCJnZXRIb3VycyIsImN1cnJlbnREYXRlVGltZSIsImNvbW1lbnRzWWVhciIsImNvbW1lbnRzTW9udGgiLCJjb21tZW50c0RheSIsImNvbW1lbnRzSG91cnMiLCJjb21tZW50c0RhdGVUaW1lIiwic3RyVG9EYXRlIiwiZGF0ZVRvU3RyIiwidGltZSIsIk1hdGgiLCJyb3VuZCIsImF1dG9oZWlnaHQiLCJib3JkZXJsZXNzIiwiaGVpZ2h0IiwibGlzdCIsIlRvcFZpZXciLCJoZWFkZXIiLCJ3aWR0aCIsImR0YWJsZSIsImNvbHVtbnMiLCJoaWRkZW4iLCJtaW5XaWR0aCIsImZpbGxzcGFjZSIsIm9uQ2xpY2siLCJlZGl0VXNlciIsImFkZFVzZXJCdG4iLCJjbGljayIsImFkZFVzZXIiLCJyb3dzIiwiY29scyIsInVzZXJzTW9kZWwiLCJkYkRhdGEiLCJ1c2Vyc0FyciIsIm1hcCIsImZ1bGxfbmFtZSIsInVzZXJfbmFtZSIsInVzZXJfc3VybmFtZSIsImZvcm1hdCIsImJpcnRoX2RhdGUiLCJ1c2Vyc0RhdGEiLCJhdXRob3JpemF0aW9uIiwiY3VycmVudERhdGUiLCJfdXNlckZvcm0iLCJVc2VyRm9ybSIsImZpbmQiLCJzaG93V2luZG93IiwiaGVhZCIsInBvc2l0aW9uIiwiZWxlbWVudHMiLCJsYWJlbCIsImxhYmVsV2lkdGgiLCJsYWJlbEFsaWduIiwicnVsZXMiLCJpc05vdEVtcHR5IiwibWFyZ2luIiwicGFkZGluZ1kiLCJzYXZlRm9ybSIsImhpZGVXaW5kb3ciLCJmb3JtIiwiZ2V0SGVhZCIsInNldFZhbHVlcyIsImluaXRpYWxfcGFzc3dvcmQiLCJnZXRWYWx1ZXMiLCJ2YWxpZGF0ZSIsImNsZWFyVmFsaWRhdGlvbiIsIkxpYnJhcnkiLCJsaWJyYXJ5Q29uZmlnIiwiYm9va0NhcmQiLCJjc3MiLCJzb3J0IiwiZWJvb2siLCJzaG93Qm9va0NhcmQiLCJyZW1vdmVCb29rIiwiZ3JpZCIsImdldENvbHVtbkNvbmZpZyIsInJlZnJlc2hDb2x1bW5zIiwiZ2V0RGF0YSIsImdldEZpbGVzIiwiY2hlY2tGaWxlcyIsImJvb2tzQXJyIiwiX2Jvb2tDYXJkIiwiYm9va3NNb2RlbCIsInllYXJfb2ZfcHVibGljYXRpb24iLCJmaWxlc01vZGVsIiwiZmlsZXNBcnIiLCJib29rIiwiaXNGaWxlcyIsImJvb2tfaWQiLCJzaG93UG9wdXAiLCJyZW1vdmUiLCJhZGRCb29rIiwiQm9va0NhcmQiLCJib29rQ292ZXIiLCJhZGRUZXh0RmlsZSIsImF1dG9zZW5kIiwiZm9ybURhdGEiLCJhY2NlcHQiLCJ1cGxvYWQiLCJsaW5rIiwiZmlsZXNMaXN0IiwiYWRkQXVkaW9GaWxlIiwiYXVkaW9MaXN0IiwiYXZhaWxhYmxlVGV4dEZpbGVzIiwib25JdGVtQ2xpY2siLCJhdmFpbGFibGVBdWRpb0ZpbGVzIiwic2F2ZUJ0biIsIm1heEhlaWdodCIsInBhZGRpbmdYIiwiY2xlYXJGb3JtIiwidGV4dEZpbGVzIiwiYXVkaW9GaWxlcyIsImZpbGUiLCJkYXRhX3R5cGUiLCJjb3Zlcl9waG90byIsInNlbmQiLCJmaWxlcyIsImNsZWFyQWxsIiwibWVudSIsImljb24iLCJvbk1lbnVJdGVtQ2xpY2siLCJsaWJMaWJyYXJ5IiwiYWRkQm9va0J0biIsImxpYnJhcnkiLCJPcmRlcnNGb3JtIiwiVXNlcnNWaWV3Iiwic2hvd1VzZXJPcmRlcnMiLCJlZGl0T3JkZXJzIiwiTG9naW5QYWdlIiwibG9naW5Gb3JtIiwidXNlckRhdGEiLCJyb2xlX25hbWUiLCJyZWFkb25seSIsImJvb2tOYW1lIiwiZG93bmxvYWQiLCJvcmRlckJvb2siLCJkb3dubG9hZEJvb2siLCJsaWtlQm9vayIsInRvZ2dsZUNvbW1lbnRzQnRuIiwiQ29tbWVudCIsInRvZ2dsZUNvbW1lbnRzIiwiY29tbWVudHNHb3QiLCJhZGRDb21tZW50IiwibGFiZWxQb3NpdGlvbiIsInNhdmVDb21tZW50IiwiY29tbWVudHMiLCJsaWtlQnV0dG9uIiwib3JkZXJCdG4iLCJjb21tZW50TGF5b3V0IiwiQ29tbWVudENsYXNzIiwiZGVmaW5lIiwiY291bnRfbGlrZXMiLCJnZXRDb21tZW50cyIsImJvb2tfZmlsZSIsImF2YWlsYWJsZV9jb3BpZXMiLCJ0b2dnbGVMaWtlIiwidG9nZ2xlT3JkZXIiLCJvcmRlcl9kYXRlIiwib3JkZXJzTW9kZWwiLCJzZXRPcmRlcmVkVmFsIiwiZGlzYWJsZSIsInVuc2V0T3JkZXJlZFZhbCIsImVuYWJsZSIsIm9yZGVyZWQiLCJsaWtlc01vZGVsIiwidW5zZXRMaWtlIiwic2V0TGlrZSIsImNsZWFyQ29tbWVudHMiLCJjb21tZW50SW5wdXQiLCJwYXJlbnRDb21tZW50SWQiLCJjb21tZW50VGV4dCIsImNvbW1lbnQiLCJjb21tZW50c01vZGVsIiwiYWRkQ2hpbGRDb21tZW50cyIsImFyciIsIml0ZW0iLCJjb21tZW50X2lkIiwiY29tbWVudEl0ZW0iLCJjb21wb3NlQ29tbWVudCIsInNwbGljZSIsImNvbW1lbnRzQXJyIiwiaXNDb21tZW50c0dvdCIsImNvbW1lbnREYXRlIiwiY29tbWVudF9kYXRlIiwiY29tbWVudEF1dGhvciIsInBhZGRpbmciLCJsZWZ0IiwicmVwbHlUb0NvbW1lbnQiLCJjb21tZW50SWQiLCJyZXBseVRvQ29tbWVudExheW91dCIsImdldENoaWxkVmlld3MiLCJjb21tZW50c0NvcHkiLCJyZWFkZXJMaWJyYXJ5IiwiTWFpblZpZXciLCJ0ZXN0UmVzdWx0cyIsImJ1dHRvbiIsImlucHV0V2lkdGgiLCJwYXJzZUJvb2tzIiwib3JkZXJzQXJyIiwiU2V0dGluZ3MiLCJib29rVG9wcyIsInNob3dPbGRlc3RCb29rcyIsInNob3dOZXdlc3RCb29rcyIsInNob3dNb3N0UGFnZXNCb29rcyIsInNob3dCb29rc1dpdGhMb25nTmFtZXMiLCJzaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MiLCJkZWZhdWx0Q29uZmlnIiwiYiIsInNob3dSZXN1bHRzIiwibnVtYmVyX29mX3BhZ2VzIiwiYm9va190aXRsZSIsImF1dGhvcnMiLCJmaW5kSW5kZXgiLCJhdXRob3IiLCJhdXRob3JfbmFtZSIsImJvb2tzQ291bnQiLCJSZWdpc3RlclBhZ2UiLCJyZWdpc3RlckZvcm0iLCJyZWFzb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQUEsT0FBT0MsT0FBUCxHQUFpQkMsbUJBQU9BLENBQUMsaUZBQVIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQSxJQUFJQyxJQUFLLFlBQVc7QUFBRSxTQUFPLElBQVA7QUFBYSxDQUEzQixNQUFrQ0MsU0FBUyxhQUFULEdBQTFDOztBQUVBO0FBQ0E7QUFDQSxJQUFJQyxhQUFhRixF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aUQ7O0FBQXJCc2xCLDJFIiwiZmlsZSI6Im15YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY29kZWJhc2UvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlcy9teWFwcC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiY2xhc3MgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3ZWJpeCkge1xyXG4gICAgICAgIHRoaXMud2ViaXhKZXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2ViaXggPSB3ZWJpeDtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9zdWJzID0ge307XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgfVxyXG4gICAgZ2V0Um9vdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZGV0YWNoRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVN1YnMoKTtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSB0aGlzLl9jb250YWluZXIgPSB0aGlzLmFwcCA9IHRoaXMuX3BhcmVudCA9IHRoaXMuX3Jvb3QgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgc2V0UGFyYW0oaWQsIHZhbHVlLCB1cmwpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGF0YVtpZF0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFbaWRdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZ21lbnQudXBkYXRlKGlkLCB2YWx1ZSwgMCk7XHJcbiAgICAgICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFBhcmFtKGlkLCBwYXJlbnQpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2RhdGFbaWRdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgfHwgIXBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5nZXRQYXJhbShpZCwgcGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlZ21lbnQuc3VidXJsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmxTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlZ21lbnQudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGdldFBhcmVudFZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICAgIH1cclxuICAgICQkKGlkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCByb290ID0gdGhpcy5nZXRSb290KCk7XHJcbiAgICAgICAgICAgIHJldHVybiByb290LnF1ZXJ5Vmlldygob2JqID0+IChvYmouY29uZmlnLmlkID09PSBpZCB8fCBvYmouY29uZmlnLmxvY2FsSWQgPT09IGlkKSAmJlxyXG4gICAgICAgICAgICAgICAgKG9iai4kc2NvcGUgPT09IHJvb3QuJHNjb3BlKSksIFwic2VsZlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbihvYmosIG5hbWUsIGNvZGUpIHtcclxuICAgICAgICBjb25zdCBpZCA9IG9iai5hdHRhY2hFdmVudChuYW1lLCBjb2RlKTtcclxuICAgICAgICB0aGlzLl9ldmVudHMucHVzaCh7IG9iaiwgaWQgfSk7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG4gICAgY29udGFpbnModmlldykge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qga2lkID0gdGhpcy5fc3Vic1trZXldLnZpZXc7XHJcbiAgICAgICAgICAgIGlmIChraWQgPT09IHZpZXcgfHwga2lkLmNvbnRhaW5zKHZpZXcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3KG5hbWUpIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1Yi5zdWJ2aWV3LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlld0luZm8obmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuX3N1YnNbbmFtZSB8fCBcImRlZmF1bHRcIl07XHJcbiAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWJ2aWV3OiBzdWIsIHBhcmVudDogdGhpcyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJfdG9wXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3Vic1tuYW1lXSA9IHsgdXJsOiBcIlwiLCBpZDogbnVsbCwgcG9wdXA6IHRydWUgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gYSBjaGlsZCB2aWV3LCBzZWFyY2hlcyBmb3IgbmVhcmVzdCBwYXJlbnQgd2l0aCBzdWJ2aWV3XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIF9kZXRhY2hFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBldmVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgZXZlbnRzW2ldLm9iai5kZXRhY2hFdmVudChldmVudHNbaV0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9kZXN0cm95U3VicygpIHtcclxuICAgICAgICAvLyBkZXN0cm95IHN1YiB2aWV3c1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViVmlldyA9IHRoaXMuX3N1YnNba2V5XS52aWV3O1xyXG4gICAgICAgICAgICAvLyBpdCBwb3NzaWJsZSB0aGF0IHN1YnZpZXcgd2FzIG5vdCBsb2FkZWQgd2l0aCBhbnkgY29udGVudCB5ZXRcclxuICAgICAgICAgICAgLy8gc28gY2hlY2sgb24gbnVsbFxyXG4gICAgICAgICAgICBpZiAoc3ViVmlldykge1xyXG4gICAgICAgICAgICAgICAgc3ViVmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVzZXQgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcclxuICAgICAgICB0aGlzLl9zdWJzID0ge307XHJcbiAgICB9XHJcbiAgICBfaW5pdF91cmxfZGF0YSgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9zZWdtZW50LmN1cnJlbnQoKTtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICAgICAgdGhpcy53ZWJpeC5leHRlbmQodGhpcy5fZGF0YSwgdXJsLnBhcmFtcywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBfZ2V0RGVmYXVsdFN1YigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3Vicy5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzLmRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5fc3Vic1trZXldO1xyXG4gICAgICAgICAgICBpZiAoIXN1Yi5icmFuY2ggJiYgc3ViLnZpZXcgJiYga2V5ICE9PSBcIl90b3BcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBzdWIudmlldy5fZ2V0RGVmYXVsdFN1YigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JvdXRlZF92aWV3KCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWIgPSBwYXJlbnQuX2dldERlZmF1bHRTdWIoKTtcclxuICAgICAgICBpZiAoIXN1YiAmJiBzdWIgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyZW50Ll9yb3V0ZWRfdmlldygpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIHBhcnNlKHVybCkge1xyXG4gICAgLy8gcmVtb3ZlIHN0YXJ0aW5nIC9cclxuICAgIGlmICh1cmxbMF0gPT09IFwiL1wiKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cigxKTtcclxuICAgIH1cclxuICAgIC8vIHNwbGl0IHVybCBieSBcIi9cIlxyXG4gICAgY29uc3QgcGFydHMgPSB1cmwuc3BsaXQoXCIvXCIpO1xyXG4gICAgY29uc3QgY2h1bmtzID0gW107XHJcbiAgICAvLyBmb3IgZWFjaCBwYWdlIGluIHVybFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHRlc3QgPSBwYXJ0c1tpXTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgICAgICAvLyBkZXRlY3QgcGFyYW1zXHJcbiAgICAgICAgLy8gc3VwcG9ydCBvbGQgXHRcdFx0c29tZTphPWI6Yz1kXHJcbiAgICAgICAgLy8gYW5kIG5ldyBub3RhdGlvblx0XHRzb21lP2E9YiZjPWRcclxuICAgICAgICBsZXQgcG9zID0gdGVzdC5pbmRleE9mKFwiOlwiKTtcclxuICAgICAgICBpZiAocG9zID09PSAtMSkge1xyXG4gICAgICAgICAgICBwb3MgPSB0ZXN0LmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB0ZXN0LnN1YnN0cihwb3MgKyAxKS5zcGxpdCgvW1xcOlxcP1xcJl0vZyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBoYXNoIG9mIG5hbWVkIHBhcmFtc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtIG9mIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGNodW5rID0gcGFyYW0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2RjaHVua1swXV0gPSBkZWNvZGVVUklDb21wb25lbnQoZGNodW5rWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzdG9yZSBwYXJzZWQgdmFsdWVzXHJcbiAgICAgICAgY2h1bmtzW2ldID0ge1xyXG4gICAgICAgICAgICBwYWdlOiAocG9zID4gLTEgPyB0ZXN0LnN1YnN0cigwLCBwb3MpIDogdGVzdCksXHJcbiAgICAgICAgICAgIHBhcmFtczogcmVzdWx0LFxyXG4gICAgICAgICAgICBpc05ldzogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgcGFnZSBvYmplY3RzXHJcbiAgICByZXR1cm4gY2h1bmtzO1xyXG59XHJcbmZ1bmN0aW9uIHVybDJzdHIoc3RhY2spIHtcclxuICAgIGNvbnN0IHVybCA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBjaHVuayBvZiBzdGFjaykge1xyXG4gICAgICAgIHVybC5wdXNoKFwiL1wiICsgY2h1bmsucGFnZSk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gb2JqMnN0cihjaHVuay5wYXJhbXMpO1xyXG4gICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgdXJsLnB1c2goXCI/XCIgKyBwYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1cmwuam9pbihcIlwiKTtcclxufVxyXG5mdW5jdGlvbiBvYmoyc3RyKG9iaikge1xyXG4gICAgY29uc3Qgc3RyID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdHIucHVzaChcIiZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0ci5wdXNoKGtleSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLmpvaW4oXCJcIik7XHJcbn1cblxuY2xhc3MgUm91dGUge1xyXG4gICAgY29uc3RydWN0b3Iocm91dGUsIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dCA9IDE7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByb3V0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBwYXJzZShyb3V0ZSksXHJcbiAgICAgICAgICAgICAgICBwYXRoOiByb3V0ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4XTtcclxuICAgIH1cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXggKyB0aGlzLl9uZXh0XTtcclxuICAgIH1cclxuICAgIHN1YnVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmwuc2xpY2UodGhpcy5pbmRleCk7XHJcbiAgICB9XHJcbiAgICBzaGlmdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJvdXRlKHRoaXMucm91dGUsIHRoaXMuaW5kZXggKyB0aGlzLl9uZXh0KTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXggKyAxOyBpIDwgdXJsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHVybFtpXS5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gdXJsMnN0cih0aGlzLnN1YnVybCgpKTtcclxuICAgICAgICByZXR1cm4gc3RyID8gc3RyLnN1YnN0cigxKSA6IFwiXCI7XHJcbiAgICB9XHJcbiAgICBfam9pbihwYXRoLCBraWRzKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIGlmIChwYXRoID09PSBudWxsKSB7IC8vIGNoYW5nZSBvZiBwYXJhbWV0ZXJzLCByb3V0ZSBlbGVtZW50cyBhcmUgbm90IGFmZmVjdGVkXHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9sZCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIHVybCA9IG9sZC5zbGljZSgwLCB0aGlzLmluZGV4ICsgKGtpZHMgPyB0aGlzLl9uZXh0IDogMCkpO1xyXG4gICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5jb25jYXQocGFyc2UocGF0aCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVybC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFtpXS52aWV3ID0gb2xkW2ldLnZpZXc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkW2ldICYmIHVybFtpXS5wYWdlID09PSBvbGRbaV0ucGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFtpXS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQocGF0aCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2pvaW4ocGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gdXJsMnN0cih1cmwpO1xyXG4gICAgICAgIHRoaXMucm91dGUudXJsID0gdXJsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnBhdGg7XHJcbiAgICB9XHJcbiAgICBzaG93KHBhdGgsIHZpZXcsIGtpZHMpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9qb2luKHBhdGgsIGtpZHMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVkaXJlY3QgPSB1cmwyc3RyKHVybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0LFxyXG4gICAgICAgICAgICAgICAgY29uZmlybTogUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgYXBwID0gdmlldyA/IHZpZXcuYXBwIDogbnVsbDtcclxuICAgICAgICAgICAgLy8gd2hlbiBjcmVhdGluZyBhIG5ldyByb3V0ZSwgaXQgcG9zc2libGUgdGhhdCBpdCB3aWxsIG5vdCBoYXZlIGFueSBjb250ZW50XHJcbiAgICAgICAgICAgIC8vIGd1YXJkIGlzIG5vdCBuZWNlc3NhcnkgaW4gc3VjaCBjYXNlXHJcbiAgICAgICAgICAgIGlmIChhcHApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGFwcC5jYWxsRXZlbnQoXCJhcHA6Z3VhcmRcIiwgW29iai5yZWRpcmVjdCwgdmlldywgb2JqXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmouY29uZmlybS5jYXRjaCgoKSA9PiBvYmoucmVkaXJlY3QgPSBudWxsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmoucmVkaXJlY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnJlZGlyZWN0ICE9PSByZWRpcmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5zaG93KG9iai5yZWRpcmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gcmVkaXJlY3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlLnVybCA9IHVybDtcclxuICAgICAgICAgICAgICAgIHJlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpemUobikge1xyXG4gICAgICAgIHRoaXMuX25leHQgPSBuO1xyXG4gICAgfVxyXG4gICAgc3BsaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5yb3V0ZS51cmwuc2xpY2UodGhpcy5pbmRleCArIDEpLFxyXG4gICAgICAgICAgICBwYXRoOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocm91dGUudXJsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByb3V0ZS5wYXRoID0gdXJsMnN0cihyb3V0ZS51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJvdXRlKHJvdXRlLCAwKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShuYW1lLCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjaHVuayA9IHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXggKyAoaW5kZXggfHwgMCldO1xyXG4gICAgICAgIGlmICghY2h1bmspIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZS51cmwucHVzaCh7IHBhZ2U6IFwiXCIsIHBhcmFtczoge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShuYW1lLCB2YWx1ZSwgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBjaHVuay5wYWdlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjaHVuay5wYXJhbXNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gdXJsMnN0cih0aGlzLnJvdXRlLnVybCk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgSmV0VmlldyBleHRlbmRzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoYXBwLCBjb25maWcpIHtcclxuICAgICAgICBzdXBlcihhcHAud2ViaXgpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIC8vdGhpcy4kY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbiAgICB1aSh1aSwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgfHwgdWkuY29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGpldHZpZXcgPSB0aGlzLmFwcC5jcmVhdGVWaWV3KHVpKTtcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGpldHZpZXcpO1xyXG4gICAgICAgIGpldHZpZXcucmVuZGVyKGNvbnRhaW5lciwgdGhpcy5fc2VnbWVudCwgdGhpcyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1aSAhPT0gXCJvYmplY3RcIiB8fCAodWkgaW5zdGFuY2VvZiBKZXRCYXNlKSkge1xyXG4gICAgICAgICAgICAvLyByYXcgd2ViaXggVUlcclxuICAgICAgICAgICAgcmV0dXJuIGpldHZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gamV0dmlldy5nZXRSb290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvdyhwYXRoLCBjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgLy8gY29udmVydCBwYXJhbWV0ZXJzIG9iamVjdCB0byB1cmxcclxuICAgICAgICBpZiAodHlwZW9mIHBhdGggPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGF0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbShrZXksIHBhdGhba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF0aCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZWxpZ2F0ZSB0byBhcHAgaW4gY2FzZSBvZiByb290IHByZWZpeFxyXG4gICAgICAgICAgICBpZiAocGF0aC5zdWJzdHIoMCwgMSkgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsb2NhbCBwYXRoLCBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoXCIuL1wiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHBhcmVudCBwYXRoLCBjYWxsIHBhcmVudCB2aWV3XHJcbiAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoXCIuLi9cIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuc2hvdyhwYXRoLnN1YnN0cigzKSwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KFwiL1wiICsgcGF0aC5zdWJzdHIoMykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuZ2V0U3ViVmlld0luZm8oY29uZmlnLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWIucGFyZW50ICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1Yi5wYXJlbnQuc2hvdyhwYXRoLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29uZmlnLnRhcmdldCAmJiBjb25maWcudGFyZ2V0ICE9PSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJGcmFtZUxvY2soY29uZmlnLnRhcmdldCwgc3ViLnN1YnZpZXcsIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhcIi9cIiArIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93KHRoaXMuX3NlZ21lbnQsIHBhdGgsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgX3Nob3coc2VnbWVudCwgcGF0aCwgdmlldykge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50LnNob3cocGF0aCwgdmlldywgdHJ1ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRfdXJsX2RhdGEoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VnbWVudC5yb3V0ZS5saW5rUm91dGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5nZXRSb3V0ZXIoKS5zZXQoc2VnbWVudC5yb3V0ZS5wYXRoLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbc2VnbWVudC5yb3V0ZS5wYXRoXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXQoXyR2aWV3LCBfJCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIHJlYWR5KF8kdmlldywgXyR1cmwpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBjb25maWcoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAud2ViaXgubWVzc2FnZShcIlZpZXc6Q29uZmlnIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxuICAgIHVybENoYW5nZShfJHZpZXcsIF8kdXJsKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lLaWRzKCk7XHJcbiAgICAgICAgLy8gZGVzdHJveSBhY3R1YWwgVUlcclxuICAgICAgICB0aGlzLl9yb290LmRlc3RydWN0b3IoKTtcclxuICAgICAgICBzdXBlci5kZXN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbiAgICB1c2UocGx1Z2luLCBjb25maWcpIHtcclxuICAgICAgICBwbHVnaW4odGhpcy5hcHAsIHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveUtpZHMoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95U3VicygpO1xyXG4gICAgICAgIHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIudGFnTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb290LmRlc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudC5yZWZyZXNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcih0aGlzLl9zZWdtZW50KTtcclxuICAgIH1cclxuICAgIHJlbmRlcihyb290LCB1cmwsIHBhcmVudCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHVybCA9IG5ldyBSb3V0ZSh1cmwsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZWdtZW50ID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLl9pbml0X3VybF9kYXRhKCk7XHJcbiAgICAgICAgcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcclxuICAgICAgICBjb25zdCBfY29udGFpbmVyID0gKHR5cGVvZiByb290ID09PSBcInN0cmluZ1wiKSA/IHRoaXMud2ViaXgudG9Ob2RlKHJvb3QpIDogcm9vdDtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyICE9PSBfY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IF9jb250YWluZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIodXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKS50aGVuKCgpID0+IHRoaXMuZ2V0Um9vdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyKHVybCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnKCk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy50aGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWcudGhlbihjZmcgPT4gdGhpcy5fcmVuZGVyX2ZpbmFsKGNmZywgdXJsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyX2ZpbmFsKGNvbmZpZywgdXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyX2ZpbmFsKGNvbmZpZywgdXJsKSB7XHJcbiAgICAgICAgLy8gZ2V0IHByZXZpb3VzIHZpZXcgaW4gdGhlIHNhbWUgc2xvdFxyXG4gICAgICAgIGxldCBzbG90ID0gbnVsbDtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICBsZXQgc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5fY29udGFpbmVyLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgc2xvdCA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgaWYgKHNsb3QucG9wdXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMud2ViaXguJCQoc2xvdC5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdmlldyBhbHJlYWR5IGRlc3Ryb3llZFxyXG4gICAgICAgIGlmICghdGhpcy5hcHAgfHwgIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5fc2VnbWVudC5jdXJyZW50KCk7XHJcbiAgICAgICAgLy8gdXNpbmcgd3JhcHBlciBvYmplY3QsIHNvIHVpIGNhbiBiZSBjaGFuZ2VkIGZyb20gYXBwOnJlbmRlciBldmVudFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdWk6IHt9IH07XHJcbiAgICAgICAgdGhpcy5hcHAuY29weUNvbmZpZyhjb25maWcsIHJlc3VsdC51aSwgdGhpcy5fc3Vicyk7XHJcbiAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnJlbmRlclwiLCBbdGhpcywgdXJsLCByZXN1bHRdKTtcclxuICAgICAgICByZXN1bHQudWkuJHNjb3BlID0gdGhpcztcclxuICAgICAgICAvKiBkZXN0cm95IG9sZCBIVE1MIGF0dGFjaGVkIHZpZXdzIGJlZm9yZSBjcmVhdGluZyBuZXcgb25lICovXHJcbiAgICAgICAgaWYgKCFzbG90ICYmIGN1cnJlbnQuaXNOZXcgJiYgY3VycmVudC52aWV3KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFkZGluZyBpbnNpZGUgb2YgbXVsdGl2aWV3IC0gcHJlc2VydmUgb2xkIGlkXHJcbiAgICAgICAgICAgIGlmIChzbG90ICYmICFzaG93KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGR1aSA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG9sZHVpLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5hbWUgPT09IFwibXVsdGl2aWV3XCIgJiYgIXJlc3VsdC51aS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC51aS5pZCA9IG9sZHVpLmNvbmZpZy5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5hcHAud2ViaXgudWkocmVzdWx0LnVpLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBhc1dpbiA9IHRoaXMuX3Jvb3Q7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciB1cmwgYWRkZWQgdG8gaWdub3JlIHRoaXMudWkgY2FsbHNcclxuICAgICAgICAgICAgaWYgKHNob3cgJiYgYXNXaW4uc2V0UG9zaXRpb24gJiYgIWFzV2luLmlzVmlzaWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhc1dpbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2hlY2ssIGlmIHdlIGFyZSByZXBsYWNpbmcgc29tZSBvbGRlciB2aWV3XHJcbiAgICAgICAgICAgIGlmIChzbG90KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xvdC52aWV3ICYmIHNsb3QudmlldyAhPT0gdGhpcyAmJiBzbG90LnZpZXcgIT09IHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNsb3QuaWQgPSB0aGlzLl9yb290LmNvbmZpZy5pZDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldFBhcmVudFZpZXcoKSB8fCAhdGhpcy5hcHAuYXBwKVxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3QudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHdlIGhhdmUgc3ViYXBwLCBzZXQgd2hvbGUgYXBwIGFzIGEgdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIG9uIGRlc3RydWN0aW9uLCB0aGUgd2hvbGUgYXBwIHdpbGwgYmUgZGVzdHJveWVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3ID0gdGhpcy5hcHA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNOZXcpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBQcm9taXNlLnJlc29sdmUodGhpcy5faW5pdCh0aGlzLl9yb290LCB1cmwpKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0VXJsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkeSh0aGlzLl9yb290LCB1cmwuc3VidXJsKCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuY2F0Y2goZXJyID0+IHRoaXMuX2luaXRFcnJvcih0aGlzLCBlcnIpKTtcclxuICAgIH1cclxuICAgIF9pbml0KHZpZXcsIHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluaXQodmlldywgdXJsLnN1YnVybCgpKTtcclxuICAgIH1cclxuICAgIF91cmxDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnVybGNoYW5nZVwiLCBbdGhpcywgdGhpcy5fc2VnbWVudF0pO1xyXG4gICAgICAgIGNvbnN0IHdhaXRzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuX3N1YnNba2V5XTtcclxuICAgICAgICAgICAgY29uc3Qgd2FpdCA9IHRoaXMuX3JlbmRlckZyYW1lTG9jayhrZXksIGZyYW1lLCBudWxsKTtcclxuICAgICAgICAgICAgaWYgKHdhaXQpIHtcclxuICAgICAgICAgICAgICAgIHdhaXRzLnB1c2god2FpdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHdhaXRzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXJsQ2hhbmdlKHRoaXMuX3Jvb3QsIHRoaXMuX3NlZ21lbnQuc3VidXJsKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3JlbmRlckZyYW1lTG9jayhrZXksIGZyYW1lLCBwYXRoKSB7XHJcbiAgICAgICAgLy8gaWYgc3VidmlldyBpcyBub3Qgb2NjdXBpZWQgYnkgc29tZSByZW5kZXJpbmcgeWV0XHJcbiAgICAgICAgaWYgKCFmcmFtZS5sb2NrKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHJlaXZlIGFuZCBzdG9yZSByZW5kZXJpbmcgZW5kIHByb21pc2VcclxuICAgICAgICAgICAgY29uc3QgbG9jayA9IHRoaXMuX3JlbmRlckZyYW1lKGtleSwgZnJhbWUsIHBhdGgpO1xyXG4gICAgICAgICAgICBpZiAobG9jaykge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgbG9jayBhZnRlciBmcmFtZSByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgIC8vIGFzIHByb21pc2UuZmluYWxseSBpcyBub3Qgc3VwcG9ydGVkIGJ5ICBXZWJpeCBsZXNzZXIgdGhhbiA2LjJcclxuICAgICAgICAgICAgICAgIC8vIHVzaW5nIGEgbW9yZSB2ZXJib3NlIG5vdGF0aW9uXHJcbiAgICAgICAgICAgICAgICBmcmFtZS5sb2NrID0gbG9jay50aGVuKCgpID0+IGZyYW1lLmxvY2sgPSBudWxsLCAoKSA9PiBmcmFtZS5sb2NrID0gbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHJlbmRlcmluZyBlbmQgcHJvbWlzZVxyXG4gICAgICAgIHJldHVybiBmcmFtZS5sb2NrO1xyXG4gICAgfVxyXG4gICAgX3JlbmRlckZyYW1lKGtleSwgZnJhbWUsIHBhdGgpIHtcclxuICAgICAgICAvL2RlZmF1bHQgcm91dGVcclxuICAgICAgICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VnbWVudC5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBuZXh0IHNlZ21lbnQgaW4gdXJsLCByZW5kZXIgaXRcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCB0aGlzLl9zZWdtZW50LnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZyYW1lLnZpZXcgJiYgZnJhbWUucG9wdXApIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoZXJlIGlzIG5vIG5leHQgc2VnbWVudCwgZGVsZXRlIHRoZSBleGlzdGluZyBzdWItdmlld1xyXG4gICAgICAgICAgICAgICAgZnJhbWUudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS52aWV3ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIG5ldyBwYXRoIHByb3ZpZGVkLCBzZXQgaXQgdG8gdGhlIGZyYW1lXHJcbiAgICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZnJhbWUudXJsID0gcGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW4gY2FzZSBvZiByb3V0ZWQgc3ViLXZpZXdcclxuICAgICAgICBpZiAoZnJhbWUucm91dGUpIHtcclxuICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIG5ldyBwYXRoIGZvciBzdWItdmlld1xyXG4gICAgICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1lLnJvdXRlLnNob3cocGF0aCwgZnJhbWUudmlldykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIGZyYW1lLnJvdXRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRvIG5vdCB0cmlnZ2VyIG9uQ2hhbmdlIGZvciBpc29sYXRlZCBzdWItdmlld3NcclxuICAgICAgICAgICAgaWYgKGZyYW1lLmJyYW5jaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2aWV3ID0gZnJhbWUudmlldztcclxuICAgICAgICAvLyBpZiB2aWV3IGRvZXNuJ3QgZXhpc3RzIHlldCwgaW5pdCBpdFxyXG4gICAgICAgIGlmICghdmlldyAmJiBmcmFtZS51cmwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFtZS51cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZywgc28gd2UgaGF2ZSBpc29sYXRlZCBzdWJ2aWV3IHVybFxyXG4gICAgICAgICAgICAgICAgZnJhbWUucm91dGUgPSBuZXcgUm91dGUoZnJhbWUudXJsLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCBmcmFtZS5yb3V0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvYmplY3QsIHNvIHdlIGhhdmUgYW4gZW1iZWRlZCBzdWJ2aWV3XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyYW1lLnVybCA9PT0gXCJmdW5jdGlvblwiICYmICEodmlldyBpbnN0YW5jZW9mIGZyYW1lLnVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gbmV3IGZyYW1lLnVybCh0aGlzLmFwcCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gZnJhbWUudXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRyaWdnZXIgb25DaGFuZ2UgZm9yIGFscmVhZHkgZXhpc3RlZCB2aWV3XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKGZyYW1lLCAoZnJhbWUucm91dGUgfHwgdGhpcy5fc2VnbWVudCksIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9pbml0RXJyb3IodmlldywgZXJyKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgaWYgdmlldyBpcyBkZXN0cm95ZWQsIGlnbm9yZSBhbnkgdmlldyByZWxhdGVkIGVycm9yc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmVycm9yKFwiYXBwOmVycm9yOmluaXR2aWV3XCIsIFtlcnIsIHZpZXddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlU3ViVmlldyhzdWIsIHN1YnVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5jcmVhdGVGcm9tVVJMKHN1YnVybC5jdXJyZW50KCksIHN1Yi52aWV3KS50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5yZW5kZXIoc3ViLCBzdWJ1cmwsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2Rlc3Ryb3lLaWRzKCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgY2hpbGQgdmlld3NcclxuICAgICAgICBjb25zdCB1aXMgPSB0aGlzLl9jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gdWlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICh1aXNbaV0gJiYgdWlzW2ldLmRlc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHVpc1tpXS5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVzZXQgdmFycyBmb3IgYmV0dGVyIEdDIHByb2Nlc3NpbmdcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG59XG5cbi8vIHdyYXBwZXIgZm9yIHJhdyBvYmplY3RzIGFuZCBKZXQgMS54IHN0cnVjdHNcclxuY2xhc3MgSmV0Vmlld1JhdyBleHRlbmRzIEpldFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoYXBwLCBjb25maWcpIHtcclxuICAgICAgICBzdXBlcihhcHAsIGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5fdWkgPSBjb25maWcudWk7XHJcbiAgICB9XHJcbiAgICBjb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFN1YlJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnLCBhcHApIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuYXBwO1xyXG4gICAgICAgIGEuYXBwLmdldFJvdXRlcigpLnNldChhLl9zZWdtZW50LmFwcGVuZCh0aGlzLnBhdGgpLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG59XG5cbmxldCBfb25jZSA9IHRydWU7XHJcbmNsYXNzIEpldEFwcEJhc2UgZXh0ZW5kcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHdlYml4ID0gKGNvbmZpZyB8fCB7fSkud2ViaXggfHwgd2luZG93LndlYml4O1xyXG4gICAgICAgIHN1cGVyKHdlYml4KTtcclxuICAgICAgICAvLyBpbml0IGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy53ZWJpeC5leHRlbmQoe1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFwcFwiLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjEuMFwiLFxyXG4gICAgICAgICAgICBzdGFydDogXCIvaG9tZVwiXHJcbiAgICAgICAgfSwgY29uZmlnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmFwcCA9IHRoaXMuY29uZmlnLmFwcDtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZXMgPSB7fTtcclxuICAgICAgICB0aGlzLndlYml4LmV4dGVuZCh0aGlzLCB0aGlzLndlYml4LkV2ZW50U3lzdGVtKTtcclxuICAgIH1cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ViU2VnbWVudC5zdWJ1cmwoKTtcclxuICAgIH1cclxuICAgIGdldFVybFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ViU2VnbWVudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZ2V0U2VydmljZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHRoaXMuX3NlcnZpY2VzW25hbWVdO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb2JqID0gdGhpcy5fc2VydmljZXNbbmFtZV0gPSBvYmoodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICBzZXRTZXJ2aWNlKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlc1tuYW1lXSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0U3ViVmlldygpLmRlc3RydWN0b3IoKTtcclxuICAgICAgICBzdXBlci5kZXN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb3B5IG9iamVjdCBhbmQgY29sbGVjdCBleHRyYSBoYW5kbGVyc1xyXG4gICAgY29weUNvbmZpZyhvYmosIHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgLy8gcmF3IHVpIGNvbmZpZ1xyXG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBKZXRCYXNlIHx8XHJcbiAgICAgICAgICAgICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHsgJHN1YnZpZXc6IG9iaiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzdWJ2aWV3IHBsYWNlaG9sZGVyXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmouJHN1YnZpZXcgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRTdWJWaWV3KG9iaiwgdGFyZ2V0LCBjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwcm9jZXNzIHN1Yi1wcm9wZXJ0aWVzXHJcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IChvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge30pO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWV0aG9kIGluIG9iaikge1xyXG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBvYmpbbWV0aG9kXTtcclxuICAgICAgICAgICAgLy8gdmlldyBjbGFzc1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBvaW50ID09PSBcImZ1bmN0aW9uXCIgJiYgcG9pbnQucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7ICRzdWJ2aWV3OiBwb2ludCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb2ludCAmJiB0eXBlb2YgcG9pbnQgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICAgICEocG9pbnQgaW5zdGFuY2VvZiB0aGlzLndlYml4LkRhdGFDb2xsZWN0aW9uKSAmJiAhKHBvaW50IGluc3RhbmNlb2YgUmVnRXhwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gbmV3IERhdGUocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29weUNvbmZpZyhwb2ludCwgKHBvaW50IGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KSwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29weSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IGNvcHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBwb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgZ2V0Um91dGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRyb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBjbGlja0hhbmRsZXIoZSkge1xyXG4gICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IChlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJpZ2dlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yVmlldyh0YXJnZXQsIHZpZXcgPT4gdmlldy5hcHAudHJpZ2dlcih0cmlnZ2VyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyb3V0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3V0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvclZpZXcodGFyZ2V0LCB2aWV3ID0+IHZpZXcuc2hvdyhyb3V0ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Um9vdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3KCkuZ2V0Um9vdCgpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3N1YlNlZ21lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlldygpLnJlZnJlc2goKS50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbdGhpcy5nZXRVcmwoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvYWRWaWV3KHVybCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy5jb25maWcudmlld3M7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHVybCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2xvYWRFcnJvcihcIlwiLCBuZXcgRXJyb3IoXCJXZWJpeCBKZXQ6IEVtcHR5IHVybCBzZWdtZW50XCIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh2aWV3cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2aWV3cyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tIGxvYWRpbmcgc3RyYXRlZ3lcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2aWV3cyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJlZGVmaW5lZCBoYXNoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmlld3NbdXJsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT09IFwiX2JsYW5rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2xvYWRWaWV3RHluYW1pYyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2xvYWRFcnJvcih1cmwsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjdXN0b20gaGFuZGxlciBjYW4gcmV0dXJuIHZpZXcgb3IgaXRzIHByb21pc2VcclxuICAgICAgICBpZiAoIXJlc3VsdC50aGVuKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXQgZXJyb3IgaGFuZGxlclxyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFxyXG4gICAgICAgICAgICAudGhlbihtb2R1bGUgPT4gbW9kdWxlLl9fZXNNb2R1bGUgPyBtb2R1bGUuZGVmYXVsdCA6IG1vZHVsZSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLl9sb2FkRXJyb3IodXJsLCBlcnIpKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgX2ZvclZpZXcodGFyZ2V0LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMud2ViaXguJCQodGFyZ2V0KTtcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICBoYW5kbGVyKHZpZXcuJHNjb3BlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfbG9hZFZpZXdEeW5hbWljKHVybCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlRnJvbVVSTChjaHVuaywgbm93KSB7XHJcbiAgICAgICAgbGV0IHZpZXc7XHJcbiAgICAgICAgaWYgKGNodW5rLmlzTmV3IHx8ICFjaHVuay52aWV3KSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSB0aGlzLmxvYWRWaWV3KGNodW5rLnBhZ2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbih1aSA9PiB0aGlzLmNyZWF0ZVZpZXcodWksIG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSBQcm9taXNlLnJlc29sdmUoY2h1bmsudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVmlldyh1aSwgbmFtZSkge1xyXG4gICAgICAgIGxldCBvYmo7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1aSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmICh1aS5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRBcHBCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB1aSh7IGFwcDogdGhpcywgbmFtZSwgcm91dGVyOiBTdWJSb3V0ZXIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgY2xhc3NcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdWkodGhpcywgeyBuYW1lIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgZmFjdG9yeSBmdW5jdGlvbnNcclxuICAgICAgICAgICAgICAgIHVpID0gdWkodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVpIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICBvYmogPSB1aTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFVJIG9iamVjdFxyXG4gICAgICAgICAgICBvYmogPSBuZXcgSmV0Vmlld1Jhdyh0aGlzLCB7IG5hbWUsIHVpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgLy8gc2hvdyB2aWV3IHBhdGhcclxuICAgIHNob3codXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuX2NvbnRhaW5lciwgKHVybCB8fCB0aGlzLmNvbmZpZy5zdGFydCkpO1xyXG4gICAgfVxyXG4gICAgLy8gZXZlbnQgaGVscGVyc1xyXG4gICAgdHJpZ2dlcihuYW1lLCAuLi5yZXN0KSB7XHJcbiAgICAgICAgdGhpcy5hcHBseShuYW1lLCByZXN0KTtcclxuICAgIH1cclxuICAgIGFwcGx5KG5hbWUsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChuYW1lLCBkYXRhKTtcclxuICAgIH1cclxuICAgIGFjdGlvbihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViaXguYmluZChmdW5jdGlvbiAoLi4ucmVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5KG5hbWUsIHJlc3QpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb24obmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuYXR0YWNoRXZlbnQobmFtZSwgaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICB1c2UocGx1Z2luLCBjb25maWcpIHtcclxuICAgICAgICBwbHVnaW4odGhpcywgbnVsbCwgY29uZmlnKTtcclxuICAgIH1cclxuICAgIGVycm9yKG5hbWUsIGVyKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQobmFtZSwgZXIpO1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOmVycm9yXCIsIGVyKTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kZWJ1Zykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcltpXSBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlcltpXS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YoXCJNb2R1bGUgYnVpbGQgZmFpbGVkXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xceDFiXFxbWzAtOTtdKm0vZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDxwcmUgc3R5bGU9J2ZvbnQtc2l6ZToxNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM2ODczOyBjb2xvcjogIzAwMDsgcGFkZGluZzoxMHB4Oyc+JHt0ZXh0fTwvcHJlPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IFwiPGJyPjxicj5DaGVjayBjb25zb2xlIGZvciBtb3JlIGRldGFpbHNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5tZXNzYWdlKHsgdHlwZTogXCJlcnJvclwiLCB0ZXh0OiB0ZXh0LCBleHBpcmU6IC0xIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZSAqL1xyXG4gICAgfVxyXG4gICAgLy8gcmVuZGVycyB0b3Agdmlld1xyXG4gICAgcmVuZGVyKHJvb3QsIHVybCwgcGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gKHR5cGVvZiByb290ID09PSBcInN0cmluZ1wiKSA/XHJcbiAgICAgICAgICAgIHRoaXMud2ViaXgudG9Ob2RlKHJvb3QpIDpcclxuICAgICAgICAgICAgKHJvb3QgfHwgZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RJbml0ID0gIXRoaXMuJHJvdXRlcjtcclxuICAgICAgICBsZXQgcGF0aCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGZpcnN0SW5pdCkge1xyXG4gICAgICAgICAgICBpZiAoX29uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguYXR0YWNoRXZlbnQoXCJvbkNsaWNrXCIsIGUgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgICAgICAgICAgICAgX29uY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gbmV3IFJvdXRlKHVybCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc3ViU2VnbWVudCA9IHRoaXMuX2ZpcnN0X3N0YXJ0KHVybCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YlNlZ21lbnQucm91dGUubGlua1JvdXRlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB1cmwuc3BsaXQoKS5yb3V0ZS5wYXRoIHx8IHRoaXMuY29uZmlnLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHVybC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0U3ViVmlldygpO1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSB0aGlzLl9zdWJTZWdtZW50O1xyXG4gICAgICAgIGNvbnN0IHJlYWR5ID0gc2VnbWVudC5zaG93KHBhdGgsIHRvcClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGVGcm9tVVJMKHNlZ21lbnQuY3VycmVudCgpLCB0b3ApKVxyXG4gICAgICAgICAgICAudGhlbih2aWV3ID0+IHZpZXcucmVuZGVyKHJvb3QsIHNlZ21lbnQpKVxyXG4gICAgICAgICAgICAudGhlbihiYXNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnNldChzZWdtZW50LnJvdXRlLnBhdGgsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbdGhpcy5nZXRVcmwoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYmFzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gdGhpcy5yZWFkeS50aGVuKCgpID0+IHJlYWR5KTtcclxuICAgICAgICByZXR1cm4gcmVhZHk7XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLl9zdWJTZWdtZW50LmN1cnJlbnQoKS52aWV3O1xyXG4gICAgICAgICAgICBpZiAodmlldylcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEpldFZpZXcodGhpcywge30pO1xyXG4gICAgfVxyXG4gICAgX2ZpcnN0X3N0YXJ0KHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IHJvdXRlO1xyXG4gICAgICAgIGNvbnN0IGNiID0gKGEpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3coYSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyID0gbmV3ICh0aGlzLmNvbmZpZy5yb3V0ZXIpKGNiLCB0aGlzLmNvbmZpZywgdGhpcyk7XHJcbiAgICAgICAgLy8gc3RhcnQgYW5pbWF0aW9uIGZvciB0b3AtbGV2ZWwgYXBwXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gZG9jdW1lbnQuYm9keSAmJiB0aGlzLmNvbmZpZy5hbmltYXRpb24gIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5hZGRDc3Mobm9kZSwgXCJ3ZWJpeGFwcHN0YXJ0XCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5yZW1vdmVDc3Mobm9kZSwgXCJ3ZWJpeGFwcHN0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLmFkZENzcyhub2RlLCBcIndlYml4YXBwXCIpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm91dGUpIHtcclxuICAgICAgICAgICAgLy8gaWYgbm8gdXJsIGRlZmluZWQsIGNoZWNrIHJvdXRlciBmaXJzdFxyXG4gICAgICAgICAgICBsZXQgdXJsU3RyaW5nID0gdGhpcy4kcm91dGVyLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAoIXVybFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdXJsU3RyaW5nID0gdGhpcy5jb25maWcuc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIuc2V0KHVybFN0cmluZywgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm91dGUgPSBuZXcgUm91dGUodXJsU3RyaW5nLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgcm91dGUuY3VycmVudCgpLnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAocm91dGUubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZSA9IHJvdXRlLnNwbGl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZSh0aGlzLmNvbmZpZy5zdGFydCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgfVxyXG4gICAgLy8gZXJyb3IgZHVyaW5nIHZpZXcgcmVzb2x2aW5nXHJcbiAgICBfbG9hZEVycm9yKHVybCwgZXJyKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcihcImFwcDplcnJvcjpyZXNvbHZlXCIsIFtlcnIsIHVybF0pO1xyXG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlOiBcIiBcIiB9O1xyXG4gICAgfVxyXG4gICAgYWRkU3ViVmlldyhvYmosIHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gb2JqLiRzdWJ2aWV3ICE9PSB0cnVlID8gb2JqLiRzdWJ2aWV3IDogbnVsbDtcclxuICAgICAgICBjb25zdCBuYW1lID0gb2JqLm5hbWUgfHwgKHVybCA/IHRoaXMud2ViaXgudWlkKCkgOiBcImRlZmF1bHRcIik7XHJcbiAgICAgICAgdGFyZ2V0LmlkID0gb2JqLmlkIHx8IFwic1wiICsgdGhpcy53ZWJpeC51aWQoKTtcclxuICAgICAgICBjb25zdCB2aWV3ID0gY29uZmlnW25hbWVdID0ge1xyXG4gICAgICAgICAgICBpZDogdGFyZ2V0LmlkLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGJyYW5jaDogb2JqLmJyYW5jaCxcclxuICAgICAgICAgICAgcG9wdXA6IG9iai5wb3B1cFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHZpZXcucG9wdXAgPyBudWxsIDogdGFyZ2V0O1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEhhc2hSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX2RldGVjdFByZWZpeCgpO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHRoaXMuY2IodGhpcy5nZXQoKSk7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJlID0gcGF0aC5zcGxpdChcIj9cIiwgMik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlc1trZXldID09PSBjb21wYXJlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGtleSArIChjb21wYXJlLmxlbmd0aCA+IDEgPyBcIj9cIiArIGNvbXBhcmVbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZXQoKSAhPT0gcGF0aCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdGhpcy5wcmVmaXggKyB0aGlzLnN1Zml4ICsgcGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIGxldCBwYXRoID0gdGhpcy5fZ2V0UmF3KCkucmVwbGFjZSh0aGlzLnByZWZpeCwgXCJcIikucmVwbGFjZSh0aGlzLnN1Zml4LCBcIlwiKTtcclxuICAgICAgICBwYXRoID0gcGF0aCAhPT0gXCIvXCIgPyBwYXRoIDogXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmUgPSBwYXRoLnNwbGl0KFwiP1wiLCAyKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWcucm91dGVzW2NvbXBhcmVbMF1dO1xyXG4gICAgICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0ga2V5ICsgKGNvbXBhcmUubGVuZ3RoID4gMSA/IFwiP1wiICsgY29tcGFyZVsxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG4gICAgX2RldGVjdFByZWZpeCgpIHtcclxuICAgICAgICAvLyB1c2UgXCIjIVwiIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgY29uc3Qgc3VmaXggPSB0aGlzLmNvbmZpZy5yb3V0ZXJQcmVmaXg7XHJcbiAgICAgICAgdGhpcy5zdWZpeCA9IFwiI1wiICsgKCh0eXBlb2Ygc3VmaXggPT09IFwidW5kZWZpbmVkXCIpID8gXCIhXCIgOiBzdWZpeCk7XHJcbiAgICAgICAgdGhpcy5wcmVmaXggPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiLCAyKVswXTtcclxuICAgIH1cclxuICAgIF9nZXRSYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB9XHJcbn1cblxubGV0IGlzUGF0Y2hlZCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBwYXRjaCh3KSB7XHJcbiAgICBpZiAoaXNQYXRjaGVkIHx8ICF3KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaXNQYXRjaGVkID0gdHJ1ZTtcclxuICAgIC8vIGN1c3RvbSBwcm9taXNlIGZvciBJRThcclxuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcclxuICAgIGlmICghd2luLlByb21pc2UpIHtcclxuICAgICAgICB3aW4uUHJvbWlzZSA9IHcucHJvbWlzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZlcnNpb24gPSB3LnZlcnNpb24uc3BsaXQoXCIuXCIpO1xyXG4gICAgLy8gd2lsbCBiZSBmaXhlZCBpbiB3ZWJpeCA1LjNcclxuICAgIGlmICh2ZXJzaW9uWzBdICogMTAgKyB2ZXJzaW9uWzFdICogMSA8IDUzKSB7XHJcbiAgICAgICAgdy51aS5mcmVlemUgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICAvLyBkaXNhYmxlZCBiZWNhdXNlIHdlYml4IGpldCA1LjAgY2FuJ3QgaGFuZGxlIHJlc2l6ZSBvZiBzY3JvbGx2aWV3IGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyB3LnVpLiRmcmVlemUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBoYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnRoZW4pIHtcclxuICAgICAgICAgICAgICAgIHJlcy50aGVuKGZ1bmN0aW9uIChzb21lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdy51aS4kZnJlZXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdy51aS5yZXNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29tZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdy51aS4kZnJlZXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB3LnVpLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGFkZGluZyB2aWV3cyBhcyBjbGFzc2VzXHJcbiAgICBjb25zdCBiYXNlQWRkID0gdy51aS5iYXNlbGF5b3V0LnByb3RvdHlwZS5hZGRWaWV3O1xyXG4gICAgY29uc3QgYmFzZVJlbW92ZSA9IHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUucmVtb3ZlVmlldztcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBhZGRWaWV3KHZpZXcsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgbG9naWMgb25seSBmb3Igd2lkZ2V0cyBpbnNpZGUgb2YgamV0LXZpZXdcclxuICAgICAgICAgICAgLy8gaWdub3JlIGNhc2Ugd2hlbiBhZGRWaWV3IHVzZWQgd2l0aCBhbHJlYWR5IGluaXRpYWxpemVkIHdpZGdldFxyXG4gICAgICAgICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUud2ViaXhKZXQgJiYgIXZpZXcucXVlcnlWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqdmlldyA9IHRoaXMuJHNjb3BlO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmlldyA9IGp2aWV3LmFwcC5jb3B5Q29uZmlnKHZpZXcsIHt9LCBzdWJzKTtcclxuICAgICAgICAgICAgICAgIGJhc2VBZGQuYXBwbHkodGhpcywgW3ZpZXcsIGluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdWJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAganZpZXcuX3JlbmRlckZyYW1lKGtleSwgc3Vic1trZXldLCBudWxsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganZpZXcuX3N1YnNba2V5XSA9IHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc2VBZGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlVmlldygpIHtcclxuICAgICAgICAgICAgYmFzZVJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUud2ViaXhKZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSB0aGlzLiRzY29wZS5fc3VicztcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFsbCBzdWItdmlld3MsIGRlc3Ryb3kgYW5kIGNsZWFuIHRoZSByZW1vdmVkIG9uZVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3Vicykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3LiQkKHRlc3QuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3Qudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHcuZXh0ZW5kKHcudWkubGF5b3V0LnByb3RvdHlwZSwgY29uZmlnLCB0cnVlKTtcclxuICAgIHcuZXh0ZW5kKHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICAvLyB3cmFwcGVyIGZvciB1c2luZyBKZXQgQXBwcyBhcyB2aWV3c1xyXG4gICAgdy5wcm90b1VJKHtcclxuICAgICAgICBuYW1lOiBcImpldGFwcFwiLFxyXG4gICAgICAgICRpbml0KGNmZykge1xyXG4gICAgICAgICAgICB0aGlzLiRhcHAgPSBuZXcgdGhpcy5hcHAoY2ZnKTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSB3LnVpZCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNmZy5ib2R5ID0geyBpZCB9O1xyXG4gICAgICAgICAgICB0aGlzLiRyZWFkeS5wdXNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcC5yZW5kZXIoeyBpZCB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLiRhcHApIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW4gPSB0aGlzLiRhcHBba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luID09PSBcImZ1bmN0aW9uXCIgJiYgIXRoaXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IG9yaWdpbi5iaW5kKHRoaXMuJGFwcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB3LnVpLnByb3h5KTtcclxufVxuXG5jbGFzcyBKZXRBcHAgZXh0ZW5kcyBKZXRBcHBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZy5yb3V0ZXIgPSBjb25maWcucm91dGVyIHx8IEhhc2hSb3V0ZXI7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICBwYXRjaCh0aGlzLndlYml4KTtcclxuICAgIH1cclxuICAgIF9sb2FkVmlld0R5bmFtaWModXJsKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcLi9nLCBcIi9cIik7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJqZXQtdmlld3MvXCIgKyB1cmwpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFN0b3JlUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcsIGFwcCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlIHx8IGFwcC53ZWJpeC5zdG9yYWdlLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5uYW1lID0gKGNvbmZpZy5zdG9yZU5hbWUgfHwgY29uZmlnLmlkICsgXCI6cm91dGVcIik7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5wdXQodGhpcy5uYW1lLCBwYXRoKTtcclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFVybFJvdXRlciBleHRlbmRzIEhhc2hSb3V0ZXIge1xyXG4gICAgX2RldGVjdFByZWZpeCgpIHtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdWZpeCA9IHRoaXMuY29uZmlnLnJvdXRlclByZWZpeCB8fCBcIlwiO1xyXG4gICAgfVxyXG4gICAgX2dldFJhdygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgRW1wdHlSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIF8kY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIFVubG9hZEd1YXJkKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICB2aWV3Lm9uKGFwcCwgYGFwcDpndWFyZGAsIGZ1bmN0aW9uIChfJHVybCwgcG9pbnQsIHByb21pc2UpIHtcclxuICAgICAgICBpZiAocG9pbnQgPT09IHZpZXcgfHwgcG9pbnQuY29udGFpbnModmlldykpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gY29uZmlnKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLmNvbmZpcm0gPSBQcm9taXNlLnJlamVjdChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5jb25maXJtID0gcHJvbWlzZS5jb25maXJtLnRoZW4oKCkgPT4gcmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cbi8vICAgICAoYykgMjAxMi0yMDE4IEFpcmJuYiwgSW5jLlxuXG4vLyB2YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG5mdW5jdGlvbiBoYXMoc3RvcmUsIGtleSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0b3JlLCBrZXkpO1xufVxuLy8gdmFyIGZvckVhY2ggPSByZXF1aXJlKCdmb3ItZWFjaCcpO1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChoYXMob2JqLCBrZXkpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoKGNvbnRleHQgfHwgb2JqKSwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cbi8vIHZhciB0cmltID0gcmVxdWlyZSgnc3RyaW5nLnByb3RvdHlwZS50cmltJyk7XG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG59XG4vLyB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBtZXNzYWdlO1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuXG4gIHRyeSB7IHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsgfSBjYXRjaCAoeCkge31cbn1cblxudmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgc3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0O1xuXG4vLyAjIyMjIFBsdXJhbGl6YXRpb24gbWV0aG9kc1xuLy8gVGhlIHN0cmluZyB0aGF0IHNlcGFyYXRlcyB0aGUgZGlmZmVyZW50IHBocmFzZSBwb3NzaWJpbGl0aWVzLlxudmFyIGRlbGltaXRlciA9ICd8fHx8JztcblxudmFyIHJ1c3NpYW5QbHVyYWxHcm91cHMgPSBmdW5jdGlvbiAobikge1xuICB2YXIgZW5kID0gbiAlIDEwO1xuICBpZiAobiAhPT0gMTEgJiYgZW5kID09PSAxKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKDIgPD0gZW5kICYmIGVuZCA8PSA0ICYmICEobiA+PSAxMiAmJiBuIDw9IDE0KSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAyO1xufTtcblxuLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgcGx1cmFsIGxvZ2ljLlxudmFyIHBsdXJhbFR5cGVzID0ge1xuICBhcmFiaWM6IGZ1bmN0aW9uIChuKSB7XG4gICAgLy8gaHR0cDovL3d3dy5hcmFiZXllcy5vcmcvUGx1cmFsX0Zvcm1zXG4gICAgaWYgKG4gPCAzKSB7IHJldHVybiBuOyB9XG4gICAgdmFyIGxhc3RUd28gPSBuICUgMTAwO1xuICAgIGlmIChsYXN0VHdvID49IDMgJiYgbGFzdFR3byA8PSAxMCkgcmV0dXJuIDM7XG4gICAgcmV0dXJuIGxhc3RUd28gPj0gMTEgPyA0IDogNTtcbiAgfSxcbiAgYm9zbmlhbl9zZXJiaWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBjaGluZXNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICBjcm9hdGlhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgZnJlbmNoOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbiA+IDEgPyAxIDogMDsgfSxcbiAgZ2VybWFuOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbiAhPT0gMSA/IDEgOiAwOyB9LFxuICBydXNzaWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBsaXRodWFuaWFuOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuICUgMTAgPT09IDEgJiYgbiAlIDEwMCAhPT0gMTEpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gbiAlIDEwID49IDIgJiYgbiAlIDEwIDw9IDkgJiYgKG4gJSAxMDAgPCAxMSB8fCBuICUgMTAwID4gMTkpID8gMSA6IDI7XG4gIH0sXG4gIGN6ZWNoOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuID09PSAxKSB7IHJldHVybiAwOyB9XG4gICAgcmV0dXJuIChuID49IDIgJiYgbiA8PSA0KSA/IDEgOiAyO1xuICB9LFxuICBwb2xpc2g6IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gPT09IDEpIHsgcmV0dXJuIDA7IH1cbiAgICB2YXIgZW5kID0gbiAlIDEwO1xuICAgIHJldHVybiAyIDw9IGVuZCAmJiBlbmQgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDI7XG4gIH0sXG4gIGljZWxhbmRpYzogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIChuICUgMTAgIT09IDEgfHwgbiAlIDEwMCA9PT0gMTEpID8gMSA6IDA7IH0sXG4gIHNsb3ZlbmlhbjogZnVuY3Rpb24gKG4pIHtcbiAgICB2YXIgbGFzdFR3byA9IG4gJSAxMDA7XG4gICAgaWYgKGxhc3RUd28gPT09IDEpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAobGFzdFR3byA9PT0gMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChsYXN0VHdvID09PSAzIHx8IGxhc3RUd28gPT09IDQpIHtcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICByZXR1cm4gMztcbiAgfVxufTtcblxuXG4vLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCB0byBpbmRpdmlkdWFsIGxhbmd1YWdlIGNvZGVzL2xvY2FsZXMuXG4vLyBXaWxsIGxvb2sgdXAgYmFzZWQgb24gZXhhY3QgbWF0Y2gsIGlmIG5vdCBmb3VuZCBhbmQgaXQncyBhIGxvY2FsZSB3aWxsIHBhcnNlIHRoZSBsb2NhbGVcbi8vIGZvciBsYW5ndWFnZSBjb2RlLCBhbmQgaWYgdGhhdCBkb2VzIG5vdCBleGlzdCB3aWxsIGRlZmF1bHQgdG8gJ2VuJ1xudmFyIHBsdXJhbFR5cGVUb0xhbmd1YWdlcyA9IHtcbiAgYXJhYmljOiBbJ2FyJ10sXG4gIGJvc25pYW5fc2VyYmlhbjogWydicy1MYXRuLUJBJywgJ2JzLUN5cmwtQkEnLCAnc3JsLVJTJywgJ3NyLVJTJ10sXG4gIGNoaW5lc2U6IFsnaWQnLCAnaWQtSUQnLCAnamEnLCAna28nLCAna28tS1InLCAnbG8nLCAnbXMnLCAndGgnLCAndGgtVEgnLCAnemgnXSxcbiAgY3JvYXRpYW46IFsnaHInLCAnaHItSFInXSxcbiAgZ2VybWFuOiBbJ2ZhJywgJ2RhJywgJ2RlJywgJ2VuJywgJ2VzJywgJ2ZpJywgJ2VsJywgJ2hlJywgJ2hpLUlOJywgJ2h1JywgJ2h1LUhVJywgJ2l0JywgJ25sJywgJ25vJywgJ3B0JywgJ3N2JywgJ3RyJ10sXG4gIGZyZW5jaDogWydmcicsICd0bCcsICdwdC1iciddLFxuICBydXNzaWFuOiBbJ3J1JywgJ3J1LVJVJ10sXG4gIGxpdGh1YW5pYW46IFsnbHQnXSxcbiAgY3plY2g6IFsnY3MnLCAnY3MtQ1onLCAnc2snXSxcbiAgcG9saXNoOiBbJ3BsJ10sXG4gIGljZWxhbmRpYzogWydpcyddLFxuICBzbG92ZW5pYW46IFsnc2wtU0wnXVxufTtcblxuZnVuY3Rpb24gbGFuZ1RvVHlwZU1hcChtYXBwaW5nKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yRWFjaChtYXBwaW5nLCBmdW5jdGlvbiAobGFuZ3MsIHR5cGUpIHtcbiAgICBmb3JFYWNoKGxhbmdzLCBmdW5jdGlvbiAobGFuZykge1xuICAgICAgcmV0W2xhbmddID0gdHlwZTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFR5cGVOYW1lKGxvY2FsZSkge1xuICB2YXIgbGFuZ1RvUGx1cmFsVHlwZSA9IGxhbmdUb1R5cGVNYXAocGx1cmFsVHlwZVRvTGFuZ3VhZ2VzKTtcbiAgcmV0dXJuIGxhbmdUb1BsdXJhbFR5cGVbbG9jYWxlXVxuICAgIHx8IGxhbmdUb1BsdXJhbFR5cGVbc3BsaXQuY2FsbChsb2NhbGUsIC8tLywgMSlbMF1dXG4gICAgfHwgbGFuZ1RvUGx1cmFsVHlwZS5lbjtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVHlwZUluZGV4KGxvY2FsZSwgY291bnQpIHtcbiAgcmV0dXJuIHBsdXJhbFR5cGVzW3BsdXJhbFR5cGVOYW1lKGxvY2FsZSldKGNvdW50KTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbi5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RUb2tlblJlZ2V4KG9wdHMpIHtcbiAgdmFyIHByZWZpeCA9IChvcHRzICYmIG9wdHMucHJlZml4KSB8fCAnJXsnO1xuICB2YXIgc3VmZml4ID0gKG9wdHMgJiYgb3B0cy5zdWZmaXgpIHx8ICd9JztcblxuICBpZiAocHJlZml4ID09PSBkZWxpbWl0ZXIgfHwgc3VmZml4ID09PSBkZWxpbWl0ZXIpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCInICsgZGVsaW1pdGVyICsgJ1wiIHRva2VuIGlzIHJlc2VydmVkIGZvciBwbHVyYWxpemF0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChlc2NhcGUocHJlZml4KSArICcoLio/KScgKyBlc2NhcGUoc3VmZml4KSwgJ2cnKTtcbn1cblxudmFyIGRvbGxhclJlZ2V4ID0gL1xcJC9nO1xudmFyIGRvbGxhckJpbGxzWWFsbCA9ICckJCc7XG52YXIgZGVmYXVsdFRva2VuUmVnZXggPSAvJVxceyguKj8pXFx9L2c7XG5cbi8vICMjIyB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpXG4vL1xuLy8gVGFrZXMgYSBwaHJhc2Ugc3RyaW5nIGFuZCB0cmFuc2Zvcm1zIGl0IGJ5IGNob29zaW5nIHRoZSBjb3JyZWN0XG4vLyBwbHVyYWwgZm9ybSBhbmQgaW50ZXJwb2xhdGluZyBpdC5cbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCdIZWxsbywgJXtuYW1lfSEnLCB7bmFtZTogJ1NwaWtlJ30pO1xuLy8gICAgIC8vIFwiSGVsbG8sIFNwaWtlIVwiXG4vL1xuLy8gVGhlIGNvcnJlY3QgcGx1cmFsIGZvcm0gaXMgc2VsZWN0ZWQgaWYgc3Vic3RpdHV0aW9ucy5zbWFydF9jb3VudFxuLy8gaXMgc2V0LiBZb3UgY2FuIHBhc3MgaW4gYSBudW1iZXIgaW5zdGVhZCBvZiBhbiBPYmplY3QgYXMgYHN1YnN0aXR1dGlvbnNgXG4vLyBhcyBhIHNob3J0Y3V0IGZvciBgc21hcnRfY291bnRgLlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCB7c21hcnRfY291bnQ6IDF9LCAnZW4nKTtcbi8vICAgICAvLyBcIjEgbmV3IG1lc3NhZ2VcIlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCB7c21hcnRfY291bnQ6IDJ9LCAnZW4nKTtcbi8vICAgICAvLyBcIjIgbmV3IG1lc3NhZ2VzXCJcbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywgNSwgJ2VuJyk7XG4vLyAgICAgLy8gXCI1IG5ldyBtZXNzYWdlc1wiXG4vL1xuLy8gWW91IHNob3VsZCBwYXNzIGluIGEgdGhpcmQgYXJndW1lbnQsIHRoZSBsb2NhbGUsIHRvIHNwZWNpZnkgdGhlIGNvcnJlY3QgcGx1cmFsIHR5cGUuXG4vLyBJdCBkZWZhdWx0cyB0byBgJ2VuJ2Agd2l0aCAyIHBsdXJhbCBmb3Jtcy5cbmZ1bmN0aW9uIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSwgdG9rZW5SZWdleCkge1xuICBpZiAodHlwZW9mIHBocmFzZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQb2x5Z2xvdC50cmFuc2Zvcm1QaHJhc2UgZXhwZWN0cyBhcmd1bWVudCAjMSB0byBiZSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmIChzdWJzdGl0dXRpb25zID09IG51bGwpIHtcbiAgICByZXR1cm4gcGhyYXNlO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHBocmFzZTtcbiAgdmFyIGludGVycG9sYXRpb25SZWdleCA9IHRva2VuUmVnZXggfHwgZGVmYXVsdFRva2VuUmVnZXg7XG5cbiAgLy8gYWxsb3cgbnVtYmVyIGFzIGEgcGx1cmFsaXphdGlvbiBzaG9ydGN1dFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzdWJzdGl0dXRpb25zID09PSAnbnVtYmVyJyA/IHsgc21hcnRfY291bnQ6IHN1YnN0aXR1dGlvbnMgfSA6IHN1YnN0aXR1dGlvbnM7XG5cbiAgLy8gU2VsZWN0IHBsdXJhbCBmb3JtOiBiYXNlZCBvbiBhIHBocmFzZSB0ZXh0IHRoYXQgY29udGFpbnMgYG5gXG4gIC8vIHBsdXJhbCBmb3JtcyBzZXBhcmF0ZWQgYnkgYGRlbGltaXRlcmAsIGEgYGxvY2FsZWAsIGFuZCBhIGBzdWJzdGl0dXRpb25zLnNtYXJ0X2NvdW50YCxcbiAgLy8gY2hvb3NlIHRoZSBjb3JyZWN0IHBsdXJhbCBmb3JtLiBUaGlzIGlzIG9ubHkgZG9uZSBpZiBgY291bnRgIGlzIHNldC5cbiAgaWYgKG9wdGlvbnMuc21hcnRfY291bnQgIT0gbnVsbCAmJiByZXN1bHQpIHtcbiAgICB2YXIgdGV4dHMgPSBzcGxpdC5jYWxsKHJlc3VsdCwgZGVsaW1pdGVyKTtcbiAgICByZXN1bHQgPSB0cmltKHRleHRzW3BsdXJhbFR5cGVJbmRleChsb2NhbGUgfHwgJ2VuJywgb3B0aW9ucy5zbWFydF9jb3VudCldIHx8IHRleHRzWzBdKTtcbiAgfVxuXG4gIC8vIEludGVycG9sYXRlOiBDcmVhdGVzIGEgYFJlZ0V4cGAgb2JqZWN0IGZvciBlYWNoIGludGVycG9sYXRpb24gcGxhY2Vob2xkZXIuXG4gIHJlc3VsdCA9IHJlcGxhY2UuY2FsbChyZXN1bHQsIGludGVycG9sYXRpb25SZWdleCwgZnVuY3Rpb24gKGV4cHJlc3Npb24sIGFyZ3VtZW50KSB7XG4gICAgaWYgKCFoYXMob3B0aW9ucywgYXJndW1lbnQpIHx8IG9wdGlvbnNbYXJndW1lbnRdID09IG51bGwpIHsgcmV0dXJuIGV4cHJlc3Npb247IH1cbiAgICAvLyBFbnN1cmUgcmVwbGFjZW1lbnQgdmFsdWUgaXMgZXNjYXBlZCB0byBwcmV2ZW50IHNwZWNpYWwgJC1wcmVmaXhlZCByZWdleCByZXBsYWNlIHRva2Vucy5cbiAgICByZXR1cm4gcmVwbGFjZS5jYWxsKG9wdGlvbnNbYXJndW1lbnRdLCBkb2xsYXJSZWdleCwgZG9sbGFyQmlsbHNZYWxsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gIyMjIFBvbHlnbG90IGNsYXNzIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBQb2x5Z2xvdChvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5waHJhc2VzID0ge307XG4gIHRoaXMuZXh0ZW5kKG9wdHMucGhyYXNlcyB8fCB7fSk7XG4gIHRoaXMuY3VycmVudExvY2FsZSA9IG9wdHMubG9jYWxlIHx8ICdlbic7XG4gIHZhciBhbGxvd01pc3NpbmcgPSBvcHRzLmFsbG93TWlzc2luZyA/IHRyYW5zZm9ybVBocmFzZSA6IG51bGw7XG4gIHRoaXMub25NaXNzaW5nS2V5ID0gdHlwZW9mIG9wdHMub25NaXNzaW5nS2V5ID09PSAnZnVuY3Rpb24nID8gb3B0cy5vbk1pc3NpbmdLZXkgOiBhbGxvd01pc3Npbmc7XG4gIHRoaXMud2FybiA9IG9wdHMud2FybiB8fCB3YXJuO1xuICB0aGlzLnRva2VuUmVnZXggPSBjb25zdHJ1Y3RUb2tlblJlZ2V4KG9wdHMuaW50ZXJwb2xhdGlvbik7XG59XG5cbi8vICMjIyBwb2x5Z2xvdC5sb2NhbGUoW2xvY2FsZV0pXG4vL1xuLy8gR2V0IG9yIHNldCBsb2NhbGUuIEludGVybmFsbHksIFBvbHlnbG90IG9ubHkgdXNlcyBsb2NhbGUgZm9yIHBsdXJhbGl6YXRpb24uXG5Qb2x5Z2xvdC5wcm90b3R5cGUubG9jYWxlID0gZnVuY3Rpb24gKG5ld0xvY2FsZSkge1xuICBpZiAobmV3TG9jYWxlKSB0aGlzLmN1cnJlbnRMb2NhbGUgPSBuZXdMb2NhbGU7XG4gIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGU7XG59O1xuXG4vLyAjIyMgcG9seWdsb3QuZXh0ZW5kKHBocmFzZXMpXG4vL1xuLy8gVXNlIGBleHRlbmRgIHRvIHRlbGwgUG9seWdsb3QgaG93IHRvIHRyYW5zbGF0ZSBhIGdpdmVuIGtleS5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0pO1xuLy9cbi8vIFRoZSBrZXkgY2FuIGJlIGFueSBzdHJpbmcuICBGZWVsIGZyZWUgdG8gY2FsbCBgZXh0ZW5kYCBtdWx0aXBsZSB0aW1lcztcbi8vIGl0IHdpbGwgb3ZlcnJpZGUgYW55IHBocmFzZXMgd2l0aCB0aGUgc2FtZSBrZXksIGJ1dCBsZWF2ZSBleGlzdGluZyBwaHJhc2VzXG4vLyB1bnRvdWNoZWQuXG4vL1xuLy8gSXQgaXMgYWxzbyBwb3NzaWJsZSB0byBwYXNzIG5lc3RlZCBwaHJhc2Ugb2JqZWN0cywgd2hpY2ggZ2V0IGZsYXR0ZW5lZFxuLy8gaW50byBhbiBvYmplY3Qgd2l0aCB0aGUgbmVzdGVkIGtleXMgY29uY2F0ZW5hdGVkIHVzaW5nIGRvdCBub3RhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwibmF2XCI6IHtcbi8vICAgICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCIsXG4vLyAgICAgICAgIFwic2lkZWJhclwiOiB7XG4vLyAgICAgICAgICAgXCJ3ZWxjb21lXCI6IFwiV2VsY29tZVwiXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vXG4vLyAgICAgY29uc29sZS5sb2cocG9seWdsb3QucGhyYXNlcyk7XG4vLyAgICAgLy8ge1xuLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4vLyAgICAgLy8gICAnbmF2LmhlbGxvX25hbWUnOiAnSGVsbG8sICV7bmFtZX0nLFxuLy8gICAgIC8vICAgJ25hdi5zaWRlYmFyLndlbGNvbWUnOiAnV2VsY29tZSdcbi8vICAgICAvLyB9XG4vL1xuLy8gYGV4dGVuZGAgYWNjZXB0cyBhbiBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQsIGBwcmVmaXhgLCB3aGljaCBjYW4gYmUgdXNlZFxuLy8gdG8gcHJlZml4IGV2ZXJ5IGtleSBpbiB0aGUgcGhyYXNlcyBvYmplY3Qgd2l0aCBzb21lIHN0cmluZywgdXNpbmcgZG90XG4vLyBub3RhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0sIFwibmF2XCIpO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbi8vICAgICAvLyB7XG4vLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbi8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfSdcbi8vICAgICAvLyB9XG4vL1xuLy8gVGhpcyBmZWF0dXJlIGlzIHVzZWQgaW50ZXJuYWxseSB0byBzdXBwb3J0IG5lc3RlZCBwaHJhc2Ugb2JqZWN0cy5cblBvbHlnbG90LnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAobW9yZVBocmFzZXMsIHByZWZpeCkge1xuICBmb3JFYWNoKG1vcmVQaHJhc2VzLCBmdW5jdGlvbiAocGhyYXNlLCBrZXkpIHtcbiAgICB2YXIgcHJlZml4ZWRLZXkgPSBwcmVmaXggPyBwcmVmaXggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmV4dGVuZChwaHJhc2UsIHByZWZpeGVkS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waHJhc2VzW3ByZWZpeGVkS2V5XSA9IHBocmFzZTtcbiAgICB9XG4gIH0sIHRoaXMpO1xufTtcblxuLy8gIyMjIHBvbHlnbG90LnVuc2V0KHBocmFzZXMpXG4vLyBVc2UgYHVuc2V0YCB0byBzZWxlY3RpdmVseSByZW1vdmUga2V5cyBmcm9tIGEgcG9seWdsb3QgaW5zdGFuY2UuXG4vL1xuLy8gICAgIHBvbHlnbG90LnVuc2V0KFwic29tZV9rZXlcIik7XG4vLyAgICAgcG9seWdsb3QudW5zZXQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSk7XG4vL1xuLy8gVGhlIHVuc2V0IG1ldGhvZCBjYW4gdGFrZSBlaXRoZXIgYSBzdHJpbmcgKGZvciB0aGUga2V5KSwgb3IgYW4gb2JqZWN0IGhhc2ggd2l0aFxuLy8gdGhlIGtleXMgdGhhdCB5b3Ugd291bGQgbGlrZSB0byB1bnNldC5cblBvbHlnbG90LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uIChtb3JlUGhyYXNlcywgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbW9yZVBocmFzZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgZGVsZXRlIHRoaXMucGhyYXNlc1ttb3JlUGhyYXNlc107XG4gIH0gZWxzZSB7XG4gICAgZm9yRWFjaChtb3JlUGhyYXNlcywgZnVuY3Rpb24gKHBocmFzZSwga2V5KSB7XG4gICAgICB2YXIgcHJlZml4ZWRLZXkgPSBwcmVmaXggPyBwcmVmaXggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy51bnNldChwaHJhc2UsIHByZWZpeGVkS2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbcHJlZml4ZWRLZXldO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59O1xuXG4vLyAjIyMgcG9seWdsb3QuY2xlYXIoKVxuLy9cbi8vIENsZWFycyBhbGwgcGhyYXNlcy4gVXNlZnVsIGZvciBzcGVjaWFsIGNhc2VzLCBzdWNoIGFzIGZyZWVpbmdcbi8vIHVwIG1lbW9yeSBpZiB5b3UgaGF2ZSBsb3RzIG9mIHBocmFzZXMgYnV0IG5vIGxvbmdlciBuZWVkIHRvXG4vLyBwZXJmb3JtIGFueSB0cmFuc2xhdGlvbi4gQWxzbyB1c2VkIGludGVybmFsbHkgYnkgYHJlcGxhY2VgLlxuUG9seWdsb3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBocmFzZXMgPSB7fTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5yZXBsYWNlKHBocmFzZXMpXG4vL1xuLy8gQ29tcGxldGVseSByZXBsYWNlIHRoZSBleGlzdGluZyBwaHJhc2VzIHdpdGggYSBuZXcgc2V0IG9mIHBocmFzZXMuXG4vLyBOb3JtYWxseSwganVzdCB1c2UgYGV4dGVuZGAgdG8gYWRkIG1vcmUgcGhyYXNlcywgYnV0IHVuZGVyIGNlcnRhaW5cbi8vIGNpcmN1bXN0YW5jZXMsIHlvdSBtYXkgd2FudCB0byBtYWtlIHN1cmUgbm8gb2xkIHBocmFzZXMgYXJlIGx5aW5nIGFyb3VuZC5cblBvbHlnbG90LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG5ld1BocmFzZXMpIHtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmV4dGVuZChuZXdQaHJhc2VzKTtcbn07XG5cblxuLy8gIyMjIHBvbHlnbG90LnQoa2V5LCBvcHRpb25zKVxuLy9cbi8vIFRoZSBtb3N0LXVzZWQgbWV0aG9kLiBQcm92aWRlIGEga2V5LCBhbmQgYHRgIHdpbGwgcmV0dXJuIHRoZVxuLy8gcGhyYXNlLlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaGVsbG9cIik7XG4vLyAgICAgPT4gXCJIZWxsb1wiXG4vL1xuLy8gVGhlIHBocmFzZSB2YWx1ZSBpcyBwcm92aWRlZCBmaXJzdCBieSBhIGNhbGwgdG8gYHBvbHlnbG90LmV4dGVuZCgpYCBvclxuLy8gYHBvbHlnbG90LnJlcGxhY2UoKWAuXG4vL1xuLy8gUGFzcyBpbiBhbiBvYmplY3QgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byBwZXJmb3JtIGludGVycG9sYXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb19uYW1lXCIsIHtuYW1lOiBcIlNwaWtlXCJ9KTtcbi8vICAgICA9PiBcIkhlbGxvLCBTcGlrZVwiXG4vL1xuLy8gSWYgeW91IGxpa2UsIHlvdSBjYW4gcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgaW4gY2FzZSB0aGUgcGhyYXNlIGlzIG1pc3NpbmcuXG4vLyBVc2UgdGhlIHNwZWNpYWwgb3B0aW9uIGtleSBcIl9cIiB0byBzcGVjaWZ5IGEgZGVmYXVsdC5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImlfbGlrZV90b193cml0ZV9pbl9sYW5ndWFnZVwiLCB7XG4vLyAgICAgICBfOiBcIkkgbGlrZSB0byB3cml0ZSBpbiAle2xhbmd1YWdlfS5cIixcbi8vICAgICAgIGxhbmd1YWdlOiBcIkphdmFTY3JpcHRcIlxuLy8gICAgIH0pO1xuLy8gICAgID0+IFwiSSBsaWtlIHRvIHdyaXRlIGluIEphdmFTY3JpcHQuXCJcbi8vXG5Qb2x5Z2xvdC5wcm90b3R5cGUudCA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcbiAgdmFyIHBocmFzZSwgcmVzdWx0O1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgPT0gbnVsbCA/IHt9IDogb3B0aW9ucztcbiAgaWYgKHR5cGVvZiB0aGlzLnBocmFzZXNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICBwaHJhc2UgPSB0aGlzLnBocmFzZXNba2V5XTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cy5fID09PSAnc3RyaW5nJykge1xuICAgIHBocmFzZSA9IG9wdHMuXztcbiAgfSBlbHNlIGlmICh0aGlzLm9uTWlzc2luZ0tleSkge1xuICAgIHZhciBvbk1pc3NpbmdLZXkgPSB0aGlzLm9uTWlzc2luZ0tleTtcbiAgICByZXN1bHQgPSBvbk1pc3NpbmdLZXkoa2V5LCBvcHRzLCB0aGlzLmN1cnJlbnRMb2NhbGUsIHRoaXMudG9rZW5SZWdleCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YXJuKCdNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciBrZXk6IFwiJyArIGtleSArICdcIicpO1xuICAgIHJlc3VsdCA9IGtleTtcbiAgfVxuICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBvcHRzLCB0aGlzLmN1cnJlbnRMb2NhbGUsIHRoaXMudG9rZW5SZWdleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8gIyMjIHBvbHlnbG90LmhhcyhrZXkpXG4vL1xuLy8gQ2hlY2sgaWYgcG9seWdsb3QgaGFzIGEgdHJhbnNsYXRpb24gZm9yIGdpdmVuIGtleVxuUG9seWdsb3QucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGhhcyh0aGlzLnBocmFzZXMsIGtleSk7XG59O1xuXG4vLyBleHBvcnQgdHJhbnNmb3JtUGhyYXNlXG5Qb2x5Z2xvdC50cmFuc2Zvcm1QaHJhc2UgPSBmdW5jdGlvbiB0cmFuc2Zvcm0ocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSk7XG59O1xuXG52YXIgd2ViaXhQb2x5Z2xvdCA9IFBvbHlnbG90O1xuXG5mdW5jdGlvbiBMb2NhbGUoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XHJcbiAgICBsZXQgbGFuZyA9IHN0b3JhZ2UgPyAoc3RvcmFnZS5nZXQoXCJsYW5nXCIpIHx8IFwiZW5cIikgOiAoY29uZmlnLmxhbmcgfHwgXCJlblwiKTtcclxuICAgIGZ1bmN0aW9uIHNldExhbmdEYXRhKG5hbWUsIGRhdGEsIHNpbGVudCkge1xyXG4gICAgICAgIGlmIChkYXRhLl9fZXNNb2R1bGUpIHtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGEuZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGNvbmZpZyA9IHsgcGhyYXNlczogZGF0YSB9O1xyXG4gICAgICAgIGlmIChjb25maWcucG9seWdsb3QpIHtcclxuICAgICAgICAgICAgYXBwLndlYml4LmV4dGVuZChwY29uZmlnLCBjb25maWcucG9seWdsb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2x5ID0gc2VydmljZS5wb2x5Z2xvdCA9IG5ldyB3ZWJpeFBvbHlnbG90KHBjb25maWcpO1xyXG4gICAgICAgIHBvbHkubG9jYWxlKG5hbWUpO1xyXG4gICAgICAgIHNlcnZpY2UuXyA9IGFwcC53ZWJpeC5iaW5kKHBvbHkudCwgcG9seSk7XHJcbiAgICAgICAgbGFuZyA9IG5hbWU7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc3RvcmFnZS5wdXQoXCJsYW5nXCIsIGxhbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLndlYml4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY05hbWUgPSBjb25maWcud2ViaXhbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChsb2NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBhcHAud2ViaXguaTE4bi5zZXRMb2NhbGUobG9jTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFwcC5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldExhbmcoKSB7IHJldHVybiBsYW5nOyB9XHJcbiAgICBmdW5jdGlvbiBzZXRMYW5nKG5hbWUsIHNpbGVudCkge1xyXG4gICAgICAgIC8vIGlnbm9yZSBzZXRMYW5nIGlmIGxvYWRpbmcgYnkgcGF0aCBpcyBkaXNhYmxlZFxyXG4gICAgICAgIGlmIChjb25maWcucGF0aCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXRoID0gKGNvbmZpZy5wYXRoID8gY29uZmlnLnBhdGggKyBcIi9cIiA6IFwiXCIpICsgbmFtZTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcImpldC1sb2NhbGVzL1wiICsgcGF0aCk7XHJcbiAgICAgICAgc2V0TGFuZ0RhdGEobmFtZSwgZGF0YSwgc2lsZW50KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0TGFuZywgc2V0TGFuZywgc2V0TGFuZ0RhdGEsIF86IG51bGwsIHBvbHlnbG90OiBudWxsXHJcbiAgICB9O1xyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJsb2NhbGVcIiwgc2VydmljZSk7XHJcbiAgICBzZXRMYW5nKGxhbmcsIHRydWUpO1xyXG59XG5cbmZ1bmN0aW9uIHNob3codmlldywgY29uZmlnLCB2YWx1ZSkge1xyXG4gICAgaWYgKGNvbmZpZy51cmxzKSB7XHJcbiAgICAgICAgdmFsdWUgPSBjb25maWcudXJsc1t2YWx1ZV0gfHwgdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjb25maWcucGFyYW0pIHtcclxuICAgICAgICB2YWx1ZSA9IHsgW2NvbmZpZy5wYXJhbV06IHZhbHVlIH07XHJcbiAgICB9XHJcbiAgICB2aWV3LnNob3codmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIE1lbnUoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGNvbnN0IGZyYW1lID0gdmlldy5nZXRTdWJWaWV3SW5mbygpLnBhcmVudDtcclxuICAgIGNvbnN0IHVpID0gdmlldy4kJChjb25maWcuaWQgfHwgY29uZmlnKTtcclxuICAgIGxldCBzaWxlbnQgPSBmYWxzZTtcclxuICAgIHVpLmF0dGFjaEV2ZW50KFwib25jaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNob3coZnJhbWUsIGNvbmZpZywgdGhpcy5nZXRWYWx1ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHVpLmF0dGFjaEV2ZW50KFwib25hZnRlcnNlbGVjdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHVpLnNldFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZCA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5nZXRTZWxlY3RlZElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZCA9IHVpLmdldFNlbGVjdGVkSWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaG93KGZyYW1lLCBjb25maWcsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZpZXcub24oYXBwLCBgYXBwOnJvdXRlYCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gXCJcIjtcclxuICAgICAgICBpZiAoY29uZmlnLnBhcmFtKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSB2aWV3LmdldFBhcmFtKGNvbmZpZy5wYXJhbSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gZnJhbWUuZ2V0VXJsKClbMV07XHJcbiAgICAgICAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gc2VnbWVudC5wYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHNpbGVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh1aS5zZXRWYWx1ZSAmJiB1aS5nZXRWYWx1ZSgpICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRWYWx1ZShuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5zZWxlY3QgJiYgdWkuZXhpc3RzKG5hbWUpICYmIHVpLmdldFNlbGVjdGVkSWQoKSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdWkuc2VsZWN0KG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpbGVudCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cbmNvbnN0IGJhc2VpY29ucyA9IHtcclxuICAgIGdvb2Q6IFwiY2hlY2tcIixcclxuICAgIGVycm9yOiBcIndhcm5pbmdcIixcclxuICAgIHNhdmluZzogXCJyZWZyZXNoIGZhLXNwaW5cIlxyXG59O1xyXG5jb25zdCBiYXNldGV4dCA9IHtcclxuICAgIGdvb2Q6IFwiT2tcIixcclxuICAgIGVycm9yOiBcIkVycm9yXCIsXHJcbiAgICBzYXZpbmc6IFwiQ29ubmVjdGluZy4uLlwiXHJcbn07XHJcbmZ1bmN0aW9uIFN0YXR1cyhhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgbGV0IHN0YXR1cyA9IFwiZ29vZFwiO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGxldCBpc2Vycm9yID0gZmFsc2U7XHJcbiAgICBsZXQgZXhwaXJlRGVsYXkgPSBjb25maWcuZXhwaXJlO1xyXG4gICAgaWYgKCFleHBpcmVEZWxheSAmJiBleHBpcmVEZWxheSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBleHBpcmVEZWxheSA9IDIwMDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0cyA9IGNvbmZpZy50ZXh0cyB8fCBiYXNldGV4dDtcclxuICAgIGNvbnN0IGljb25zID0gY29uZmlnLmljb25zIHx8IGJhc2VpY29ucztcclxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgY29uZmlnID0geyB0YXJnZXQ6IGNvbmZpZyB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaChjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IHZpZXcuJCQoY29uZmlnLnRhcmdldCk7XHJcbiAgICAgICAgaWYgKGFyZWEpIHtcclxuICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCI8ZGl2IGNsYXNzPSdzdGF0dXNfXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyArXHJcbiAgICAgICAgICAgICAgICAgICAgXCInPjxzcGFuIGNsYXNzPSd3ZWJpeF9pY29uIGZhLVwiICtcclxuICAgICAgICAgICAgICAgICAgICBpY29uc1tzdGF0dXNdICsgXCInPjwvc3Bhbj4gXCIgKyB0ZXh0c1tzdGF0dXNdICsgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcmVhLnNldEhUTUwoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3VjY2VzcygpIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIHNldFN0YXR1cyhcImdvb2RcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmYWlsKGVycikge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgc2V0U3RhdHVzKFwiZXJyb3JcIiwgZXJyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0YXJ0KHByb21pc2UpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIHNldFN0YXR1cyhcInNhdmluZ1wiKTtcclxuICAgICAgICBpZiAocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHtcclxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3MsIGZhaWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGlkZVN0YXR1cygpIHtcclxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgcmVmcmVzaChcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdHVzKG1vZGUsIGVycikge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHtcclxuICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW9kZSA9PT0gXCJzYXZpbmdcIikge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBcInNhdmluZ1wiO1xyXG4gICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpc2Vycm9yID0gKG1vZGUgPT09IFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gaXNlcnJvciA/IFwiZXJyb3JcIiA6IFwiZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuZXJyb3IoXCJhcHA6ZXJyb3I6c2VydmVyXCIsIFtlcnIucmVzcG9uc2VUZXh0IHx8IGVycl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGlyZURlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZVN0YXR1cywgZXhwaXJlRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyYWNrKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBkcCA9IGFwcC53ZWJpeC5kcChkYXRhKTtcclxuICAgICAgICBpZiAoZHApIHtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyRGF0YVNlbmRcIiwgc3RhcnQpO1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJTYXZlRXJyb3JcIiwgKF9pZCwgX29iaiwgcmVzcG9uc2UpID0+IGZhaWwocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyU2F2ZVwiLCBzdWNjZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHAuc2V0U2VydmljZShcInN0YXR1c1wiLCB7XHJcbiAgICAgICAgZ2V0U3RhdHVzLFxyXG4gICAgICAgIHNldFN0YXR1cyxcclxuICAgICAgICB0cmFja1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY29uZmlnLnJlbW90ZSkge1xyXG4gICAgICAgIHZpZXcub24oYXBwLndlYml4LCBcIm9uUmVtb3RlQ2FsbFwiLCBzdGFydCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmFqYXgpIHtcclxuICAgICAgICB2aWV3Lm9uKGFwcC53ZWJpeCwgXCJvbkJlZm9yZUFqYXhcIiwgKF9tb2RlLCBfdXJsLCBfZGF0YSwgX3JlcXVlc3QsIF9oZWFkZXJzLCBfZmlsZXMsIHByb21pc2UpID0+IHtcclxuICAgICAgICAgICAgc3RhcnQocHJvbWlzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmRhdGEpIHtcclxuICAgICAgICB0cmFjayhjb25maWcuZGF0YSk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gVGhlbWUoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XHJcbiAgICBsZXQgdGhlbWUgPSBzdG9yYWdlID9cclxuICAgICAgICAoc3RvcmFnZS5nZXQoXCJ0aGVtZVwiKSB8fCBcImZsYXQtZGVmYXVsdFwiKVxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgKGNvbmZpZy50aGVtZSB8fCBcImZsYXQtZGVmYXVsdFwiKTtcclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0VGhlbWUoKSB7IHJldHVybiB0aGVtZTsgfSxcclxuICAgICAgICBzZXRUaGVtZShuYW1lLCBzaWxlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxuYW1lID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG5hbWUgPT09IG5hbWUgfHwgbG5hbWUgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5za2luLnNldChwYXJ0c1swXSk7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgY3NzXHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5odG1sLnJlbW92ZUNzcyhkb2N1bWVudC5ib2R5LCBcInRoZW1lLVwiICsgdGhlbWUpO1xyXG4gICAgICAgICAgICAvLyBhZGQgbmV3IGNzc1xyXG4gICAgICAgICAgICBhcHAud2ViaXguaHRtbC5hZGRDc3MoZG9jdW1lbnQuYm9keSwgXCJ0aGVtZS1cIiArIG5hbWUpO1xyXG4gICAgICAgICAgICB0aGVtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnB1dChcInRoZW1lXCIsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgICAgICBhcHAucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwidGhlbWVcIiwgc2VydmljZSk7XHJcbiAgICBzZXJ2aWNlLnNldFRoZW1lKHRoZW1lLCB0cnVlKTtcclxufVxuXG5mdW5jdGlvbiBjb3B5UGFyYW1zKGRhdGEsIHVybCwgcm91dGUpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkYXRhW3JvdXRlW2ldXSA9IHVybFtpICsgMV0gPyB1cmxbaSArIDFdLnBhZ2UgOiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIFVybFBhcmFtKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGNvbmZpZy5yb3V0ZSB8fCBjb25maWc7XHJcbiAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICB2aWV3Lm9uKGFwcCwgXCJhcHA6dXJsY2hhbmdlXCIsIGZ1bmN0aW9uIChzdWJ2aWV3LCBzZWdtZW50KSB7XHJcbiAgICAgICAgaWYgKHZpZXcgPT09IHN1YnZpZXcpIHtcclxuICAgICAgICAgICAgY29weVBhcmFtcyhkYXRhLCBzZWdtZW50LnN1YnVybCgpLCByb3V0ZSk7XHJcbiAgICAgICAgICAgIHNlZ21lbnQuc2l6ZShyb3V0ZS5sZW5ndGggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9zID0gdmlldy5zZXRQYXJhbTtcclxuICAgIGNvbnN0IG9nID0gdmlldy5nZXRQYXJhbTtcclxuICAgIHZpZXcuc2V0UGFyYW0gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIHNob3cpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHJvdXRlLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWdtZW50LnVwZGF0ZShcIlwiLCB2YWx1ZSwgaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LnNob3cobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcy5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlLCBzaG93KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmlldy5nZXRQYXJhbSA9IGZ1bmN0aW9uIChrZXksIG1vZGUpIHtcclxuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9nLmNhbGwodGhpcywga2V5LCBtb2RlKTtcclxuICAgIH07XHJcbiAgICBjb3B5UGFyYW1zKGRhdGEsIHZpZXcuZ2V0VXJsKCksIHJvdXRlKTtcclxufVxuXG5mdW5jdGlvbiBVc2VyKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3QgbG9naW4gPSBjb25maWcubG9naW4gfHwgXCIvbG9naW5cIjtcclxuICAgIGNvbnN0IGxvZ291dCA9IGNvbmZpZy5sb2dvdXQgfHwgXCIvbG9nb3V0XCI7XHJcbiAgICBjb25zdCBhZnRlckxvZ2luID0gY29uZmlnLmFmdGVyTG9naW4gfHwgYXBwLmNvbmZpZy5zdGFydDtcclxuICAgIGNvbnN0IGFmdGVyTG9nb3V0ID0gY29uZmlnLmFmdGVyTG9nb3V0IHx8IFwiL2xvZ2luXCI7XHJcbiAgICBjb25zdCBwaW5nID0gY29uZmlnLnBpbmcgfHwgNSAqIDYwICogMTAwMDtcclxuICAgIGNvbnN0IG1vZGVsID0gY29uZmlnLm1vZGVsO1xyXG4gICAgbGV0IHVzZXIgPSBjb25maWcudXNlcjtcclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0VXNlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTdGF0dXMoc2VydmVyKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwuc3RhdHVzKCkuY2F0Y2goKCkgPT4gbnVsbCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2luKG5hbWUsIHBhc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLmxvZ2luKG5hbWUsIHBhc3MpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcHAuY2FsbEV2ZW50KFwiYXBwOnVzZXI6bG9naW5cIiwgW3VzZXJdKTtcclxuICAgICAgICAgICAgICAgIGFwcC5zaG93KGFmdGVyTG9naW4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgdXNlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5sb2dvdXQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcHAuY2FsbEV2ZW50KFwiYXBwOnVzZXI6bG9nb3V0XCIsIFtdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaikge1xyXG4gICAgICAgIGlmICh1cmwgPT09IGxvZ291dCkge1xyXG4gICAgICAgICAgICBzZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgICAgICBvYmoucmVkaXJlY3QgPSBhZnRlckxvZ291dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodXJsICE9PSBsb2dpbiAmJiAhc2VydmljZS5nZXRTdGF0dXMoKSkge1xyXG4gICAgICAgICAgICBvYmoucmVkaXJlY3QgPSBsb2dpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHAuc2V0U2VydmljZShcInVzZXJcIiwgc2VydmljZSk7XHJcbiAgICBhcHAuYXR0YWNoRXZlbnQoYGFwcDpndWFyZGAsIGZ1bmN0aW9uICh1cmwsIF8kcm9vdCwgb2JqKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wdWJsaWMgJiYgY29uZmlnLnB1YmxpYyh1cmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHVzZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqLmNvbmZpcm0gPSBzZXJ2aWNlLmdldFN0YXR1cyh0cnVlKS50aGVuKCgpID0+IGNhbk5hdmlnYXRlKHVybCwgb2JqKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaik7XHJcbiAgICB9KTtcclxuICAgIGlmIChwaW5nKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gc2VydmljZS5nZXRTdGF0dXModHJ1ZSksIHBpbmcpO1xyXG4gICAgfVxyXG59XG5cbi8qXHJcbk1JVCBMaWNlbnNlXHJcbkNvcHlyaWdodCAoYykgMjAxOSBYQiBTb2Z0d2FyZVxyXG4qL1xyXG5sZXQgd2ViaXggPSB3aW5kb3cud2ViaXg7XHJcbmlmICh3ZWJpeCkge1xyXG4gICAgcGF0Y2god2ViaXgpO1xyXG59XHJcbmNvbnN0IHBsdWdpbnMgPSB7XHJcbiAgICBVbmxvYWRHdWFyZCwgTG9jYWxlLCBNZW51LCBUaGVtZSwgVXNlciwgU3RhdHVzLCBVcmxQYXJhbVxyXG59O1xyXG5jb25zdCB3ID0gd2luZG93O1xyXG5pZiAoIXcuUHJvbWlzZSkge1xyXG4gICAgdy5Qcm9taXNlID0gdy53ZWJpeC5wcm9taXNlO1xyXG59XG5cbmV4cG9ydCB7IHBsdWdpbnMsIEpldEFwcCwgSmV0VmlldywgSGFzaFJvdXRlciwgU3RvcmVSb3V0ZXIsIFVybFJvdXRlciwgRW1wdHlSb3V0ZXIsIFN1YlJvdXRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9amV0LmpzLm1hcFxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiY29uc3QgbG9nb3V0VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dvdXQnO1xyXG5jb25zdCBsb2dpblVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nO1xyXG5jb25zdCByZWdpc3RlclVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVnaXN0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXphdGlvbiB7XHJcblx0cmVnaXN0ZXIob2JqKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QocmVnaXN0ZXJVcmwsIG9iaik7XHJcblx0fVxyXG5cclxuXHRsb2dpbihvYmopIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdChsb2dpblVybCwgb2JqKTtcclxuXHR9XHJcblxyXG5cdGxvZ291dChkYXRlKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QobG9nb3V0VXJsLCBkYXRlKTtcclxuXHR9XHJcbn0iLCJjb25zdCBEVU1NWUNPVkVSID0gJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9hZC9mZC81OC9hZGZkNTg3M2JlMzg0MWYwNjYwZTZhYWEwMGNkZTE4ZS5qcGcnO1xyXG5jb25zdCBTVUNDRVNTID0gMjtcclxuY29uc3QgVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcblxyXG5leHBvcnQge0RVTU1ZQ09WRVIsIFNVQ0NFU1MsIFVSTH07IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc291cmNlcy9sb2NhbGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIEJvb2tzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IFtdO1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9ib29rcy9gO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoaWQpIHtcclxuXHRcdGNvbnN0IHVzZXJfaWQgPSB7dXNlcl9pZDogaWR9O1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQodGhpcy5fdXJsLCB1c2VyX2lkKTtcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucHV0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmRlbCh0aGlzLl91cmwsIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBCb29rc01vZGVsKCk7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIENvbW1lbnRzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9jb21tZW50cy9gO1xyXG5cdH1cclxuXHRcclxuXHRnZXRJdGVtcyhpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHRcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucHV0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29tbWVudHNNb2RlbCgpOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBGaWxlc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vZmlsZXMvYDtcclxuXHR9XHJcblxyXG5cdGdldERhdGFGcm9tU2VydmVyKCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQodGhpcy5fdXJsKTtcclxuXHR9XHJcblx0XHJcblx0Z2V0SXRlbXMoaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGAke3RoaXMuX3VybH0ke2lkfWApO1x0XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0ZG93bmxvYWRJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnJlc3BvbnNlKCdibG9iJykuZ2V0KGAke3RoaXMuX3VybH1kb3dubG9hZC8ke2lkfWApO1x0XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRmlsZXNNb2RlbCgpOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBMaWtlc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBbXTtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vbGlrZXMvYDtcclxuXHR9XHJcblxyXG5cdGdldExpa2VzKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtpZH1gKTtcclxuXHR9XHJcblxyXG5cdGFkZExpa2UodXNlcklkLCBib29rSWQpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJJZDogdXNlcklkLFxyXG5cdFx0XHRib29rSWQ6IGJvb2tJZFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUxpa2UodXNlcklkLCBib29rSWQpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJJZDogdXNlcklkLFxyXG5cdFx0XHRib29rSWQ6IGJvb2tJZFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmRlbCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExpa2VzTW9kZWwoKTsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgT3JkZXJzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9vcmRlcnMvYDtcclxuXHR9XHJcblx0XHJcblx0Z2V0SXRlbXMoaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGAke3RoaXMuX3VybH0ke2lkfWApO1x0XHJcblx0fVxyXG5cclxuXHRhZGRPcmRlcihvcmRlcikge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgb3JkZXIpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHRcclxuXHRyZW1vdmVJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmRlbCh0aGlzLl91cmwsIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBPcmRlcnNNb2RlbCgpOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBVc2Vyc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vdXNlcnMvYDtcclxuXHR9XHJcblxyXG5cdGdldERhdGFGcm9tU2VydmVyKCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQodGhpcy5fdXJsKTtcclxuXHR9XHJcblxyXG5cdGdldFJlYWRlcnMoKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9L3JlYWRlcnNgKTtcclxuXHR9XHJcblx0XHJcblx0Z2V0SXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHRcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucHV0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlcnNNb2RlbCgpOyIsImltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcbmltcG9ydCB7SmV0QXBwLCBFbXB0eVJvdXRlciwgSGFzaFJvdXRlciB9IGZyb20gJ3dlYml4LWpldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEpldEFwcHtcclxuXHRjb25zdHJ1Y3Rvcihjb25maWcpe1xyXG5cdFx0Y29uc3QgZGVmYXVsdHMgPSB7XHJcblx0XHRcdGlkIFx0XHQ6IEFQUE5BTUUsXHJcblx0XHRcdHZlcnNpb24gOiBWRVJTSU9OLFxyXG5cdFx0XHRyb3V0ZXIgXHQ6IEJVSUxEX0FTX01PRFVMRSA/IEVtcHR5Um91dGVyIDogSGFzaFJvdXRlcixcclxuXHRcdFx0ZGVidWcgXHQ6ICFQUk9EVUNUSU9OLFxyXG5cdFx0XHRzdGFydCBcdDogJy9sb2dpbidcclxuXHRcdH07XHJcblxyXG5cdFx0c3VwZXIoeyAuLi5kZWZhdWx0cywgLi4uY29uZmlnIH0pO1xyXG5cdH1cclxufVxyXG5cclxuaWYgKCFCVUlMRF9BU19NT0RVTEUpe1xyXG5cdHdlYml4LnJlYWR5KCgpID0+IHtcclxuXHRcdGNvbnN0IGFwcCA9IG5ldyBNeUFwcCgpO1xyXG5cdFx0YXBwLmF0dGFjaEV2ZW50KCdhcHA6Z3VhcmQnLCAodXJsLCB2aWV3LCBuYXYpID0+IHtcclxuXHRcdFx0aWYodXJsLmluZGV4T2YoJ2lkJykgIT09IC0xKSB7XHJcblx0XHRcdFx0Y29uc3QgdXJsUGFydHMgPSB1cmwuc3BsaXQoJy8nKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0UGFydDtcclxuXHJcblx0XHRcdFx0dXJsUGFydHMuZm9yRWFjaCgoZWwpID0+IHtcclxuXHRcdFx0XHRcdGlmKGVsLmluZGV4T2YoJ2lkJykgIT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0dGFyZ2V0UGFydCA9IGVsO1xyXG5cdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Y29uc3QgaSA9IHRhcmdldFBhcnQuaW5kZXhPZignaWQnKTtcclxuXHRcdFx0XHRjb25zdCByb2xlID0gdGFyZ2V0UGFydC5zcGxpdCgnLicpWzBdO1xyXG5cdFx0XHRcdGNvbnN0IGlkID0gdGFyZ2V0UGFydC5zbGljZShpKzMpO1xyXG4gXHJcblx0XHRcdFx0d2ViaXguYWpheCgpLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NoZWNrJykudGhlbihcclxuXHRcdFx0XHRcdChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSByZXMuanNvbigpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5yb2xlICE9IHJvbGUgfHwgcmVzcG9uc2UuaWQgIT0gaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYoZXJyb3Iuc3RhdHVzID09IDQwMSkge1xyXG5cdFx0XHRcdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGFwcC5yZW5kZXIoKTtcclxuXHR9KTtcclxufSIsImltcG9ydCB7U1VDQ0VTU30gZnJvbSAnLi9jb25zdHMnO1xyXG5cclxuY29uc3QgdG9nZ2xlRWxlbWVudCA9IChjb25kaXRpb24sIGVsZW1lbnQpID0+IHtcclxuXHRpZiAoY29uZGl0aW9uKSB7XHJcblx0XHRlbGVtZW50LnNob3coKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRlbGVtZW50LmhpZGUoKTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBhZGRJdGVtID0gKE1vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKSA9PiB7XHJcblx0TW9kZWwuYWRkSXRlbShkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zZXJ2ZXJTdGF0dXM7XHJcblx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHN1Y2Nlc3NBY3Rpb24oKTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVJdGVtID0gKE1vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKSA9PiB7XHJcblx0TW9kZWwudXBkYXRlSXRlbShkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zZXJ2ZXJTdGF0dXM7XHJcblx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRzdWNjZXNzQWN0aW9uKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXREYXRlID0gKGRiRGF0ZSkgPT4ge1xyXG5cdGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cdGNvbnN0IGN1cnJlbnRNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcclxuXHRjb25zdCBjdXJyZW50RGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XHJcblx0Y29uc3QgY3VycmVudEhvdXJzID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xyXG5cdGNvbnN0IGN1cnJlbnREYXRlVGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5cdGNvbnN0IGNvbW1lbnRzWWVhciA9IG5ldyBEYXRlKGRiRGF0ZSkuZ2V0RnVsbFllYXIoKTtcclxuXHRjb25zdCBjb21tZW50c01vbnRoID0gbmV3IERhdGUoZGJEYXRlKS5nZXRNb250aCgpO1xyXG5cdGNvbnN0IGNvbW1lbnRzRGF5ID0gbmV3IERhdGUoZGJEYXRlKS5nZXREYXRlKCk7XHJcblx0Y29uc3QgY29tbWVudHNIb3VycyA9IG5ldyBEYXRlKGRiRGF0ZSkuZ2V0SG91cnMoKTtcclxuXHRjb25zdCBjb21tZW50c0RhdGVUaW1lID0gbmV3IERhdGUoZGJEYXRlKTtcclxuXHJcblx0bGV0IGZvcm1hdERhdGUgPSB3ZWJpeC5EYXRlLnN0clRvRGF0ZShcIiVpOiVzXCIpO1xyXG5cclxuXHRpZiAoY3VycmVudFllYXIgPiBjb21tZW50c1llYXIpIHtcclxuXHRcdGZvcm1hdERhdGUgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVkLSVtLSV5XCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKGN1cnJlbnRNb250aCA+IGNvbW1lbnRzTW9udGgpIHtcclxuXHRcdGZvcm1hdERhdGUgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVtLSVkXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmKGN1cnJlbnREYXkgPiBjb21tZW50c0RheSkge1xyXG5cdFx0Zm9ybWF0RGF0ZSA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJUQsICVIOiVpXCIpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChjdXJyZW50SG91cnMgPiBjb21tZW50c0hvdXJzKXtcclxuXHRcdGZvcm1hdERhdGUgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVIOiVpXCIpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGNvbnN0IHRpbWUgPSAoY3VycmVudERhdGVUaW1lIC0gY29tbWVudHNEYXRlVGltZSkvNjAwMDA7XHJcblx0XHRyZXR1cm4gYCR7TWF0aC5yb3VuZCh0aW1lKX0gbWludXRlKHMpIGFnb2A7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBmb3JtYXREYXRlKG5ldyBEYXRlKGRiRGF0ZSkpO1xyXG5cclxufTtcclxuXHJcbndlYml4LnByb3RvVUkoe1xyXG5cdG5hbWU6IFwiYWN0aXZlTGlzdFwiLFxyXG5cdGRlZmF1bHRzOiB7XHJcblx0XHRhdXRvaGVpZ2h0OiB0cnVlLFxyXG5cdFx0Ym9yZGVybGVzczogdHJ1ZSxcclxuXHRcdHR5cGU6IHtcclxuXHRcdFx0aGVpZ2h0OiAzMFxyXG5cdFx0fVxyXG5cdH1cclxufSwgd2ViaXgudWkubGlzdCk7XHJcblxyXG5leHBvcnQge3RvZ2dsZUVsZW1lbnQsIGFkZEl0ZW0sIHVwZGF0ZUl0ZW0sIGZvcm1hdERhdGV9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZG1pblwiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qc1wiLFxuXHRcIi4vYWRtaW4vXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi9pbmRleFwiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qc1wiLFxuXHRcIi4vYWRtaW4vaW5kZXguanNcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL3VzZXJGb3JtXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL3VzZXJGb3JtLmpzXCIsXG5cdFwiLi9hZG1pbi91c2VyRm9ybS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi91c2VyRm9ybS5qc1wiLFxuXHRcIi4vY29tbW9uL2xpYnJhcnlcIjogXCIuL3NvdXJjZXMvdmlld3MvY29tbW9uL2xpYnJhcnkuanNcIixcblx0XCIuL2NvbW1vbi9saWJyYXJ5LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2NvbW1vbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9saWJyYXJpYW5cIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2Jvb2tDYXJkXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2Jvb2tDYXJkLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2luZGV4XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2luZGV4LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2xpYnJhcnlcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2xpYnJhcnkuanNcIixcblx0XCIuL2xpYnJhcmlhbi9saWJyYXJ5LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vb3JkZXJzRm9ybVwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vb3JkZXJzRm9ybS5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL29yZGVyc0Zvcm0uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL29yZGVyc0Zvcm0uanNcIixcblx0XCIuL2xpYnJhcmlhbi91c2Vyc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vdXNlcnMuanNcIixcblx0XCIuL2xpYnJhcmlhbi91c2Vycy5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vdXNlcnMuanNcIixcblx0XCIuL2xvZ2luXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzXCIsXG5cdFwiLi9sb2dpbi5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9sb2dpbi5qc1wiLFxuXHRcIi4vcmVhZGVyXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9ib29rQ2FyZFwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvYm9va0NhcmQuanNcIixcblx0XCIuL3JlYWRlci9ib29rQ2FyZC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvYm9va0NhcmQuanNcIixcblx0XCIuL3JlYWRlci9jb21tZW50T2JqXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9jb21tZW50T2JqLmpzXCIsXG5cdFwiLi9yZWFkZXIvY29tbWVudE9iai5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvY29tbWVudE9iai5qc1wiLFxuXHRcIi4vcmVhZGVyL2luZGV4XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL2luZGV4LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL2xpYnJhcnlcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2xpYnJhcnkuanNcIixcblx0XCIuL3JlYWRlci9saWJyYXJ5LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9saWJyYXJ5LmpzXCIsXG5cdFwiLi9yZWFkZXIvbWFpblwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbWFpbi5qc1wiLFxuXHRcIi4vcmVhZGVyL21haW4uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL21haW4uanNcIixcblx0XCIuL3JlYWRlci9zZXR0aW5nc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvc2V0dGluZ3MuanNcIixcblx0XCIuL3JlYWRlci9zZXR0aW5ncy5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvc2V0dGluZ3MuanNcIixcblx0XCIuL3JlYWRlci90b3BzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci90b3BzLmpzXCIsXG5cdFwiLi9yZWFkZXIvdG9wcy5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvdG9wcy5qc1wiLFxuXHRcIi4vcmVnaXN0ZXJcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanNcIixcblx0XCIuL3JlZ2lzdGVyLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlZ2lzdGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlcy92aWV3cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vLi4vYXV0aG9yaXphdGlvbic7XHJcbmltcG9ydCB1c2Vyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy91c2Vycyc7XHJcbmltcG9ydCBVc2VyRm9ybSBmcm9tICcuL3VzZXJGb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgXHJcblx0XHRcdHRlbXBsYXRlOiAnVXNlcnMgbGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbG9nb3V0ID0ge1xyXG5cdFx0XHR2aWV3OididXR0b24nLCBcclxuXHRcdFx0bG9jYWxJZDonbG9nb3V0QnRuJywgXHJcblx0XHRcdHZhbHVlOidMb2dvdXQnLCBcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0dHlwZTonZm9ybSdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZHRhYmxlID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICd1c2Vyc0xpc3QnLFxyXG5cdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdpZCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IDFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZnVsbF9uYW1lJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ05hbWUnLFxyXG5cdFx0XHRcdFx0bWluV2lkdGg6IDE4MCxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMS41XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3JvbGVfbmFtZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSb2xlJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA5MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdwYXNzcG9ydF9JRCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdQYXNzcG9ydCBJRCcsXHJcblx0XHRcdFx0XHR3aWR0aDogMTMwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2JpcnRoX2RhdGUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQmlydGggZGF0ZScsXHJcblx0XHRcdFx0XHR3aWR0aDogMTMwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2FkZHJlc3MnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQWRkcmVzcycsXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogMTgwLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLjVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncGhvbmVfbnVtYmVycycsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdQaG9uZSBudW1iZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDE5MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdlbWFpbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdFbWFpbCcsXHJcblx0XHRcdFx0XHR3aWR0aDogMTgwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2VkaXQnLCBcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0VkaXQnLCBcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAne2NvbW1vbi5lZGl0SWNvbigpfSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnd3hpLXBlbmNpbCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5lZGl0VXNlcihpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZFVzZXJCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0FkZCB1c2VyJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYWRkVXNlcigpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHRyb3dzOltcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0dHlwZTogJ2NsZWFuJyxcclxuXHRcdFx0XHRcdGNvbHM6IFtoZWFkZXIsIGxvZ291dF0gXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRkdGFibGUsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHR7fSwgYWRkVXNlckJ0biwge31cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHVzZXJzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0bGV0IHVzZXJzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHRcdFx0dXNlcnNBcnIgPSB1c2Vyc0Fyci5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwuZnVsbF9uYW1lID0gZWwudXNlcl9uYW1lICsgJyAnICsgZWwudXNlcl9zdXJuYW1lO1xyXG5cdFx0XHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVktJW0tJWRcIik7XHJcblx0XHRcdFx0ZWwuYmlydGhfZGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShlbC5iaXJ0aF9kYXRlKSk7XHJcblx0XHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy51c2Vyc0RhdGEgPSB1c2Vyc0FycjtcclxuXHRcdFx0JCQoJ3VzZXJzTGlzdCcpLnBhcnNlKHVzZXJzQXJyKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblxyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCh7Y3VycmVudERhdGV9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuX3VzZXJGb3JtID0gdGhpcy51aShVc2VyRm9ybSk7XHJcblx0fVxyXG5cclxuXHRlZGl0VXNlcihpZCkge1xyXG5cdFx0Y29uc3QgdXNlciA9IHRoaXMudXNlcnNEYXRhLmZpbmQoZWwgPT4gZWwuaWQgPT0gaWQpO1xyXG5cdFx0dGhpcy5fdXNlckZvcm0uc2hvd1dpbmRvdyh1c2VyKTtcclxuXHR9XHJcblxyXG5cdGFkZFVzZXIoKSB7XHJcblx0XHR0aGlzLl91c2VyRm9ybS5zaG93V2luZG93KCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB1c2Vyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy91c2Vycyc7XHJcbmltcG9ydCB7dG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbX0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAnd2luZG93JyxcclxuXHRcdFx0bG9jYWxJZDogJ3VzZXJXaW5kb3cnLFxyXG5cdFx0XHRoZWFkOiAnRWRpdCB1c2VyJyxcclxuXHRcdFx0d2lkdGg6IDYwMCxcclxuXHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdGxvY2FsSWQ6ICd1c2VyRm9ybScsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIG5hbWU6ICdpZCcsIGxvY2FsSWQ6ICdpZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0ZpcnN0IG5hbWUnLCBuYW1lOiAndXNlcl9uYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdMYXN0IG5hbWUnLCBuYW1lOiAndXNlcl9zdXJuYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICdjb21ibycsIGxhYmVsOiAnUm9sZScsIG5hbWU6ICdjYXBhYmlsaXRpZXNfaWQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0Jywgb3B0aW9uczogW1xyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAxLCB2YWx1ZTogJ3JlYWRlcid9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAyLCB2YWx1ZTogJ2xhYnJhcmlhbid9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAzLCB2YWx1ZTogJ2FkbWluJ31cclxuXHRcdFx0XHRcdFx0XHRdIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFzc3BvcnQgSUQnLCBuYW1lOiAncGFzc3BvcnRfSUQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ2RhdGVwaWNrZXInLCBsYWJlbDogJ0JpcnRoIGRhdGUnLCBuYW1lOiAnYmlydGhfZGF0ZScsIGxvY2FsSWQ6ICdiaXJ0aF9kYXRlJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBZGRyZXNzJywgbmFtZTogJ2FkZHJlc3MnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bob25lJywgbmFtZTogJ3Bob25lX251bWJlcnMnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0VtYWlsJywgbmFtZTogJ2VtYWlsJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdhY2NvdW50X3Bhc3N3b3JkJywgbG9jYWxJZDogJ2luaXRpYWxfcGFzc3dvcmQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdFx0XHRcdCdjYXBhYmlsaXRpZXNfaWQnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5LFxyXG5cdFx0XHRcdFx0XHRcdCdlbWFpbCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdFx0J2FjY291bnRfcGFzc3dvcmQnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5LFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAyMCxcclxuXHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIHZhbHVlOiAnU2F2ZScsIHR5cGU6ICdmb3JtJywgbG9jYWxJZDogJ3NhdmVCdG4nLCB3aWR0aDogMTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIHZhbHVlOiAnQ2FuY2VsJywgd2lkdGg6IDEwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuaGlkZVdpbmRvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e31cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmZvcm0gPSB0aGlzLiQkKCd1c2VyRm9ybScpO1xyXG5cdFx0dGhpcy53aW5kb3cgPSB0aGlzLiQkKCd1c2VyV2luZG93Jyk7XHJcblx0fVxyXG5cclxuXHRzdWNjZXNzQWN0aW9uKCkge1xyXG5cdFx0dGhpcy53ZWJpeC5tZXNzYWdlKCdTdWNjZXNzJyk7XHJcblx0XHR0aGlzLmhpZGVXaW5kb3coKTtcclxuXHR9XHJcblxyXG5cdHNob3dXaW5kb3codXNlcikge1x0XHJcblx0XHR0aGlzLmlzTmV3ID0gdXNlciA/IGZhbHNlIDogdHJ1ZTtcdFxyXG5cclxuXHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0dGhpcy53aW5kb3cuZ2V0SGVhZCgpLnNldEhUTUwoJ0FkZCB1c2VyJyk7XHJcblx0XHRcdHRoaXMud2luZG93LmdldEhlYWQoKS5yZWZyZXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5mb3JtLnNldFZhbHVlcyh1c2VyKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbml0aWFsX3Bhc3N3b3JkID0gdGhpcy4kJCgnaW5pdGlhbF9wYXNzd29yZCcpO1xyXG5cdFx0dG9nZ2xlRWxlbWVudCh0aGlzLmlzTmV3LCBpbml0aWFsX3Bhc3N3b3JkKTtcclxuXHRcdFxyXG5cclxuXHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuZm9ybS5nZXRWYWx1ZXMoKTtcdFxyXG5cdFx0XHJcblx0XHRpZih0aGlzLmZvcm0udmFsaWRhdGUoKSkge1xyXG5cdFx0XHRpZih0aGlzLmlzTmV3KSB7XHJcblx0XHRcdFx0YWRkSXRlbSh1c2Vyc01vZGVsLCBkYXRhLCB0aGlzLnN1Y2Nlc3NBY3Rpb24uYmluZCh0aGlzKSk7XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR1cGRhdGVJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHRoaXMuc3VjY2Vzc0FjdGlvbi5iaW5kKHRoaXMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcclxuXHR9XHJcblxyXG5cdGhpZGVXaW5kb3coKSB7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXJWYWxpZGF0aW9uKCk7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXIoKTtcclxuXHRcdHRoaXMuZ2V0Um9vdCgpLmhpZGUoKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IGJvb2tzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2tzJztcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnkgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25zdHJ1Y3RvcihhcHAsIGxpYnJhcnlDb25maWcsIGJvb2tDYXJkKSB7XHJcblx0XHRzdXBlcihhcHApO1xyXG5cdFx0dGhpcy5saWJyYXJ5Q29uZmlnID0gbGlicmFyeUNvbmZpZztcclxuXHRcdHRoaXMuYm9va0NhcmQgPSBib29rQ2FyZDtcclxuXHR9XHJcblxyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTogJ2hlYWRlcicsXHJcblx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtYm9va1wiPjwvaT4gTGlzdCBvZiBib29rcycsXHJcblx0XHRcdGNzczogJ2NlbnRlciBwYWdlX2hlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZHRhYmxlID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICdkdF9saWJyYXJ5JyxcclxuXHRcdFx0c2VsZWN0OiB0cnVlLFxyXG5cdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdpZCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Jvb2tfdGl0bGUnLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ1RpdGxlJywge2NvbnRlbnQ6ICd0ZXh0RmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2F1dGhvcl9uYW1lJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydBdXRob3InLCB7Y29udGVudDogJ3RleHRGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZ2VucmVzJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnR2VucmVzJywge2NvbnRlbnQ6ICdzZWxlY3RGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ0NvdW50cnknLCB7Y29udGVudDogJ3NlbGVjdEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICd5ZWFyX29mX3B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICdkYXRlJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRmb3JtYXQ6IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVlcIiksXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnWWVhcicsIHtjb250ZW50OiAnZGF0ZVJhbmdlRmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2F2YWlsYWJsZV9jb3BpZXMnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0F2YWlsYWJsZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZWJvb2snLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ2VCb29rJywge2NvbnRlbnQ6XCJzZWxlY3RGaWx0ZXJcIn1dLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IChvYmopID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG9iai5lYm9vaz09PSd5ZXMnID8gJzxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPicgOiAnJ1xyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAndmlld0NvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdWaWV3JyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2VkaXRDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRWRpdCcsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J2ZhLWV5ZSc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93Qm9va0NhcmQoaWQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2ZhLWVkaXQnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd0Jvb2tDYXJkKGlkKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdmYS10cmFzaCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVCb29rKGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm93czogW2hlYWRlciwgZHRhYmxlXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGluaXQoKSB7XHJcblx0XHR0aGlzLmdyaWQgPSAkJCgnZHRfbGlicmFyeScpO1xyXG5cclxuXHRcdHN3aXRjaCAodGhpcy5saWJyYXJ5Q29uZmlnLnJvbGUpIHtcclxuXHRcdFx0Y2FzZSAncmVhZGVyJzogXHJcblx0XHRcdFx0dGhpcy5ncmlkLmdldENvbHVtbkNvbmZpZygnZWRpdENvbCcpLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5ncmlkLmdldENvbHVtbkNvbmZpZygncmVtb3ZlQ29sJykuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbGlicmFyaWFuJzpcclxuXHRcdFx0XHR0aGlzLmdyaWQuZ2V0Q29sdW1uQ29uZmlnKCd2aWV3Q29sJykuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHRoaXMuZ3JpZC5yZWZyZXNoQ29sdW1ucygpO1xyXG5cdFx0YXdhaXQgdGhpcy5nZXREYXRhKCk7XHJcblx0XHRhd2FpdCB0aGlzLmdldEZpbGVzKCk7XHJcblx0XHR0aGlzLmNoZWNrRmlsZXMoKTtcdFx0XHJcblxyXG5cdFx0dGhpcy5ncmlkLnBhcnNlKHRoaXMuYm9va3NBcnIpO1xyXG5cdFx0dGhpcy5fYm9va0NhcmQgPSB0aGlzLnVpKHRoaXMuYm9va0NhcmQpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZ2V0RGF0YSgpIHtcdFx0XHJcblx0XHRjb25zdCB1c2VyX2lkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cdFx0Y29uc3QgZGJEYXRhID0gYXdhaXQgYm9va3NNb2RlbC5nZXREYXRhRnJvbVNlcnZlcih1c2VyX2lkKTtcclxuXHRcdGxldCBib29rc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0Ym9va3NBcnIgPSBib29rc0Fyci5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdGVsLnllYXJfb2ZfcHVibGljYXRpb24gPSBuZXcgRGF0ZShlbC55ZWFyX29mX3B1YmxpY2F0aW9uKTtcclxuXHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmJvb2tzQXJyID0gYm9va3NBcnI7XHJcblx0fVxyXG5cclxuXHRhc3luYyBnZXRGaWxlcygpIHtcclxuXHRcdGNvbnN0IGRiRGF0YSA9IGF3YWl0IGZpbGVzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKTtcclxuXHRcdHRoaXMuZmlsZXNBcnIgPSBkYkRhdGEuanNvbigpO1x0XHRcdFx0XHRcdFxyXG5cdH1cclxuXHJcblx0Y2hlY2tGaWxlcygpIHtcclxuXHRcdHRoaXMuYm9va3NBcnIuZm9yRWFjaCgoYm9vaywgaSkgPT4ge1xyXG5cdFx0XHRjb25zdCBpc0ZpbGVzID0gdGhpcy5maWxlc0Fyci5maW5kKChlbCkgPT4gZWwuYm9va19pZCA9PT0gYm9vay5pZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihpc0ZpbGVzKSB7XHJcblx0XHRcdFx0dGhpcy5ib29rc0FycltpXS5lYm9vayA9ICd5ZXMnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuYm9va3NBcnJbaV0uZWJvb2sgPSAnbm8nO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNob3dCb29rQ2FyZChpZCkge1xyXG5cdFx0Y29uc3QgYm9vayA9IHRoaXMuYm9va3NBcnIuZmluZChlbCA9PiBlbC5pZCA9PSBpZCk7XHJcblx0XHR0aGlzLl9ib29rQ2FyZC5zaG93UG9wdXAoYm9vayk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVCb29rKGlkKSB7XHJcblx0XHRib29rc01vZGVsLnJlbW92ZUl0ZW0oaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3JpZC5yZW1vdmUoaWQpO1xyXG5cdH1cclxuXHJcblx0YWRkQm9vaygpIHtcclxuXHRcdHRoaXMuX2Jvb2tDYXJkLnNob3dQb3B1cCgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5pbXBvcnQgeyBEVU1NWUNPVkVSIH0gZnJvbSAnLi4vLi4vY29uc3RzJztcclxuaW1wb3J0IHsgdG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbSB9IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDYXJkIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDb3ZlciA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDb3ZlcicsXHJcblx0XHRcdHdpZHRoOiAxMjAsXHJcblx0XHRcdGhlaWdodDogMTgwLFxyXG5cdFx0XHRjc3M6ICdib29rX2NvdmVyJyxcclxuXHRcdFx0dGVtcGxhdGU6ICh1cmwpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gYDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KVwiID48L2Rpdj5gO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDYXJkID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NhcmRMaWJyYXJpYW4nLFxyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVGl0bGUnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdib29rX3RpdGxlJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F1dGhvcicsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2F1dGhvcl9uYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdHZW5yZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdnZW5yZXMnLCBvcHRpb25zOiBbXHJcblx0XHRcdFx0XHQnJywgJ0ZpY3Rpb24nLCAnRmFudGFzeScsICdUaHJpbGxlcicsICdIb3Jyb3InLCAnTXlzdGVyeScsICdIaXN0b3JpY2FsJywgJ1dlc3Rlcm5zJywgJ0ZhbWlseScsICdEYXJrIGNvbWVkeSdcclxuXHRcdFx0XHRdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQdWJsaXNoaW5nIGhvdXNlJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAncHVibGlzaGluZ19ob3VzZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdmFpbGFibGUgY29waWVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYXZhaWxhYmxlX2NvcGllcycgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYWdlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ251bWJlcl9vZl9wYWdlcycgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3ZlciBwaG90bycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2NvdmVyX3Bob3RvJyB9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkVGV4dEZpbGUgPSB7XHJcblx0XHRcdHZpZXc6ICd1cGxvYWRlcicsXHJcblx0XHRcdGxhYmVsOiAnPGkgY2xhc3M9XCJmYXMgZmEtZmlsZS11cGxvYWRcIj48L2k+IFVwbG9hZCB0ZXh0IGZpbGUnLFxyXG5cdFx0XHRsb2NhbElkOiAnYm9va0ZpbGVzJyxcclxuXHRcdFx0dHlwZTogJ2h0bWxidXR0b24nLFxyXG5cdFx0XHRhdXRvc2VuZDogZmFsc2UsXHJcblx0XHRcdHdpZHRoOiAxNTAsXHJcblx0XHRcdGZvcm1EYXRhOiAoKSA9PiAoe1xyXG5cdFx0XHRcdHVzZXJfaWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0XHRcdGJvb2tfaWQ6IHRoaXMuYm9va0lkXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRhY2NlcHQ6ICd0ZXh0L3BsYWluLCBhcHBsaWNhdGlvbi9wZGYsIC5kb2MsIC5kb2N4JyxcclxuXHRcdFx0dXBsb2FkOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2ZpbGVzL3VwbG9hZC90ZXh0JyxcclxuXHRcdFx0bGluazogJ2ZpbGVzTGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZmlsZXNMaXN0ID0ge1xyXG5cdFx0XHR2aWV3OiAnbGlzdCcsXHJcblx0XHRcdHR5cGU6ICd1cGxvYWRlcicsXHJcblx0XHRcdGlkOiAnZmlsZXNMaXN0JyxcclxuXHRcdFx0YXV0b2hlaWdodDp0cnVlLCBcclxuXHRcdFx0Ym9yZGVybGVzczp0cnVlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZEF1ZGlvRmlsZSA9IHtcclxuXHRcdFx0dmlldzogJ3VwbG9hZGVyJyxcclxuXHRcdFx0bGFiZWw6ICc8aSBjbGFzcz1cImZhcyBmYS1tdXNpY1wiPjwvaT4gVXBsb2FkIGF1ZGlvJyxcclxuXHRcdFx0bG9jYWxJZDogJ2F1ZGlvRmlsZXMnLFxyXG5cdFx0XHR0eXBlOiAnaHRtbGJ1dHRvbicsXHJcblx0XHRcdGF1dG9zZW5kOiBmYWxzZSxcclxuXHRcdFx0d2lkdGg6IDE1MCxcclxuXHRcdFx0Zm9ybURhdGE6ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0dXNlcl9pZDogdGhpcy51c2VySWQsXHJcblx0XHRcdFx0XHRib29rX2lkOiB0aGlzLmJvb2tJZFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0sXHJcblx0XHRcdGFjY2VwdDogJy5tcDMnLFxyXG5cdFx0XHR1cGxvYWQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmlsZXMvdXBsb2FkL2F1ZGlvJyxcclxuXHRcdFx0bGluazogJ2F1ZGlvTGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXVkaW9MaXN0ID0ge1xyXG5cdFx0XHR2aWV3OiAnbGlzdCcsXHJcblx0XHRcdHR5cGU6ICd1cGxvYWRlcicsXHJcblx0XHRcdGlkOiAnYXVkaW9MaXN0JyxcclxuXHRcdFx0YXV0b2hlaWdodDp0cnVlLCBcclxuXHRcdFx0Ym9yZGVybGVzczp0cnVlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGF2YWlsYWJsZVRleHRGaWxlcyA9IHtcclxuXHRcdFx0dmlldzogJ2FjdGl2ZUxpc3QnLFxyXG5cdFx0XHRsb2NhbElkOiAnYXZhaWxhYmxlVGV4dEZpbGVzJyxcclxuXHRcdFx0dGVtcGxhdGU6IGAjbmFtZSMgPHNwYW4gY2xhc3M9J2xpc3RfYnV0dG9uJz48aSBjbGFzcyA9ICdmYXMgZmEtdGltZXMnPjwvaT48L3NwYW4+YCxcclxuXHRcdFx0b246IHtcclxuXHRcdFx0XHRvbkl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHQvL3JlbW92ZSBmaWxlIGFuZCByZWNvcmQgaW4gREJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXZhaWxhYmxlQXVkaW9GaWxlcyA9IHtcclxuXHRcdFx0dmlldzogXCJhY3RpdmVMaXN0XCIsXHJcblx0XHRcdGxvY2FsSWQ6IFwiYXZhaWxhYmxlQXVkaW9GaWxlc1wiLFxyXG5cdFx0XHR0ZW1wbGF0ZTogXCIjbmFtZSNcIiArXHJcblx0XHRcdFx0XHRcIjxzcGFuIGNsYXNzPSdsaXN0X2J1dHRvbic+PGkgY2xhc3MgPSAnZmFzIGZhLXRpbWVzJz48L2k+PC9zcGFuPlwiLFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzYXZlQnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRsYWJlbDogJ1NhdmUnLFxyXG5cdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICdwb3B1cCcsXHJcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcclxuXHRcdFx0bWF4SGVpZ2h0OiA1NTAsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHR2aWV3OiAnc2Nyb2xsdmlldycsXHJcblx0XHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHRib29rQ292ZXIsIFxyXG5cdFx0XHRcdFx0XHRib29rQ2FyZCxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHZpZXc6ICd0ZW1wbGF0ZScsXHJcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU6ICdGaWxlcycsXHJcblx0XHRcdFx0XHRcdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRjc3M6ICdjZW50ZXInXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtoZWlnaHQ6IDJ9LFxyXG5cdFx0XHRcdFx0XHRhdmFpbGFibGVUZXh0RmlsZXMsXHJcblx0XHRcdFx0XHRcdGF2YWlsYWJsZUF1ZGlvRmlsZXMsXHJcblx0XHRcdFx0XHRcdGZpbGVzTGlzdCxcclxuXHRcdFx0XHRcdFx0YXVkaW9MaXN0LFxyXG5cdFx0XHRcdFx0XHR7aGVpZ2h0OiAxNX0sXHJcblx0XHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdFx0bG9jYWxJZDogJ2FkZGluZ0ZpbGVzQnV0dG9ucycsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRjb2xzOiBbIHt9LCBhZGRUZXh0RmlsZSwgYWRkQXVkaW9GaWxlLCB7fSBdIFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7aGVpZ2h0OiAxfSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nWDogMTUsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGNvbHM6IFt7fSwgc2F2ZUJ0biwge31dXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmZvcm0gPSB0aGlzLiQkKCdib29rQ2FyZExpYnJhcmlhbicpO1xyXG5cdH1cclxuXHJcblx0c2hvd1BvcHVwKGJvb2spIHtcclxuXHRcdHRoaXMuY2xlYXJGb3JtKCk7XHJcblx0XHR0aGlzLmlzTmV3ID0gYm9vayA/IGZhbHNlIDogdHJ1ZTtcclxuXHRcdHRoaXMuYm9vayA9IGJvb2sgfHwgJyc7XHJcblx0XHR0aGlzLmJvb2tJZCA9IGJvb2sgPyBib29rLmlkIDogJyc7XHJcblx0XHR0aGlzLnVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHJcblx0XHRmaWxlc01vZGVsLmdldEl0ZW1zKHRoaXMuYm9va0lkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgZmlsZXNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cclxuXHRcdFx0Y29uc3QgdGV4dEZpbGVzID0gW107XHJcblx0XHRcdGNvbnN0IGF1ZGlvRmlsZXMgPSBbXTtcclxuXHJcblx0XHRcdGZpbGVzQXJyLmZvckVhY2goKGZpbGUpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2goZmlsZS5kYXRhX3R5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdFx0XHR0ZXh0RmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdhdWRpbyc6XHJcblx0XHRcdFx0XHRcdGF1ZGlvRmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykucGFyc2UodGV4dEZpbGVzKTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLnBhcnNlKGF1ZGlvRmlsZXMpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dG9nZ2xlRWxlbWVudCghdGhpcy5pc05ldywgdGhpcy4kJCgnYm9va0NvdmVyJykpO1xyXG5cdFx0dG9nZ2xlRWxlbWVudCghdGhpcy5pc05ldywgdGhpcy4kJCgnYWRkaW5nRmlsZXNCdXR0b25zJykpO1xyXG5cclxuXHRcdGlmKCF0aGlzLmlzTmV3KSB7XHJcblx0XHRcdHRoaXMuZm9ybS5zZXRWYWx1ZXMoYm9vayk7XHJcblx0XHRcdHRoaXMuJCQoJ2Jvb2tDb3ZlcicpLnNldFZhbHVlcyhib29rLmNvdmVyX3Bob3RvIHx8IERVTU1ZQ09WRVIpO1x0XHRcdFxyXG5cdFx0fVx0XHRcclxuXHJcblx0XHR0aGlzLmdldFJvb3QoKS5zaG93KCk7XHRcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuZm9ybS5nZXRWYWx1ZXMoKTtcclxuXHJcblx0XHRjb25zdCBzdWNjZXNzQWN0aW9uID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLndlYml4Lm1lc3NhZ2UoJ1N1Y2Nlc3MnKTtcclxuXHRcdFx0dGhpcy5oaWRlV2luZG93KCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmKHRoaXMuZm9ybS52YWxpZGF0ZSgpKSB7XHJcblx0XHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0XHRhZGRJdGVtKGJvb2tzTW9kZWwsIGRhdGEsIHN1Y2Nlc3NBY3Rpb24pO1x0XHRcdFx0XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHVwZGF0ZUl0ZW0oYm9va3NNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJCQoJ2Jvb2tGaWxlcycpLnNlbmQoKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Upe1xyXG5cdFx0XHRcdFx0dGhpcy53ZWJpeC5tZXNzYWdlKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLiQkKCdhdWRpb0ZpbGVzJykuc2VuZCgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZihyZXNwb25zZSl7XHJcblx0XHRcdFx0XHR0aGlzLndlYml4Lm1lc3NhZ2UocmVzcG9uc2UubWVzc2FnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cclxuXHRoaWRlV2luZG93KCkge1xyXG5cdFx0dGhpcy5jbGVhckZvcm0oKTtcclxuXHRcdHRoaXMuZ2V0Um9vdCgpLmhpZGUoKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyRm9ybSAoKXtcclxuXHRcdHRoaXMuZm9ybS5jbGVhclZhbGlkYXRpb24oKTtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy4kJCgnYm9va0ZpbGVzJykuZmlsZXMuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F1ZGlvRmlsZXMnKS5maWxlcy5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnKS5jbGVhckFsbCgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6J2hlYWRlcicsIHRlbXBsYXRlOnRoaXMuYXBwLmNvbmZpZy5uYW1lLCBjc3M6J3dlYml4X2hlYWRlciBhcHBfaGVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBtZW51ID0ge1xyXG5cdFx0XHR2aWV3OidtZW51JywgXHJcblx0XHRcdGNzczonYXBwX21lbnUnLFxyXG5cdFx0XHR3aWR0aDoxODAsIFxyXG5cdFx0XHRsYXlvdXQ6J3knLCBcclxuXHRcdFx0c2VsZWN0OnRydWUsXHJcblx0XHRcdHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cIndlYml4X2ljb24gI2ljb24jXCI+PC9zcGFuPiAjdmFsdWUjICcsXHJcblx0XHRcdHZhbHVlOiAnbWFpbicsXHJcblx0XHRcdGRhdGE6W1xyXG5cdFx0XHRcdHsgdmFsdWU6J0xpYnJhcnknLCBpZDonbGlicmFyeScsICBpY29uOidmYXMgZmEtYm9vay1yZWFkZXInIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonVXNlcnMnLCBpZDondXNlcnMnLCAgaWNvbjonZmFzIGZhLWNvZycgfVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbjp7XHJcblx0XHRcdFx0b25NZW51SXRlbUNsaWNrOiAoaWQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZXJfaWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLmFwcC5zaG93KGBsaWJyYXJpYW4uaW5kZXg/aWQ9JHt1c2VyX2lkfS9saWJyYXJpYW4uJHtpZH1gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbG9nb3V0ID0ge1xyXG5cdFx0XHR2aWV3OididXR0b24nLCBcclxuXHRcdFx0bG9jYWxJZDonbG9nb3V0QnRuJywgXHJcblx0XHRcdHZhbHVlOidMb2dvdXQnLCBcclxuXHRcdFx0dHlwZTonZm9ybSdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdWkgPSB7XHJcblx0XHRcdHR5cGU6J2NsZWFuJywgcGFkZGluZ1g6NSwgY3NzOidhcHBfbGF5b3V0JywgXHJcblx0XHRcdGNvbHM6W1xyXG5cdFx0XHRcdHsgcGFkZGluZ1g6NSwgcGFkZGluZ1k6MTAsIHJvd3M6IFsge2Nzczond2ViaXhfc2hhZG93X21lZGl1bScsIHJvd3M6W2hlYWRlciwgbWVudSwgbG9nb3V0XX0gXX0sXHJcblx0XHRcdFx0eyB2aWV3OiAncmVzaXplcicsIHdpZHRoOiA1IH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dHlwZTogJ3dpZGUnLCBwYWRkaW5nWTogMTAsIHBhZGRpbmdYOiA1LCByb3dzOiBbXHJcblx0XHRcdFx0XHRcdHsgJHN1YnZpZXc6IHRydWUgfVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB1aTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHR0aGlzLiQkKCdsb2dvdXRCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFwcCA9IHRoaXMuYXBwO1xyXG5cdFx0XHRjb25zdCBmb3JtYXQgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZLSVtLSVkXCIpO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpKTtcclxuXHRcdFx0XHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9nb3V0KHtjdXJyZW50RGF0ZX0pLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gXCJ3ZWJpeC1qZXRcIjtcclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vY29tbW9uL2xpYnJhcnknO1xyXG5pbXBvcnQgQm9va0NhcmQgZnJvbSAnLi9ib29rQ2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaWJMaWJyYXJ5IGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1x0XHJcblxyXG5cdFx0Y29uc3QgbGlicmFyeUNvbmZpZyA9IHtcclxuXHRcdFx0cm9sZTogJ2xpYnJhcmlhbidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkQm9va0J0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnQWRkIGJvb2snLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0bGlicmFyeS5hZGRCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KHRoaXMuYXBwLCBsaWJyYXJ5Q29uZmlnLCBCb29rQ2FyZCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRsaWJyYXJ5LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbHM6IFt7fSxhZGRCb29rQnRuLHt9XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgb3JkZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlcnNGb3JtIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3dpbmRvdycsXHJcblx0XHRcdGxvY2FsSWQ6ICd1c2VyT3JkZXJzV2luZG93JyxcclxuXHRcdFx0d2lkdGg6IDYwMCxcclxuXHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdGxvY2FsSWQ6ICd1c2VyT3JkZXJzRm9ybScsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdF1cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHR9XHJcblxyXG5cdHNob3dXaW5kb3coaWQpIHtcclxuXHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHVzZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzJztcclxuaW1wb3J0IE9yZGVyc0Zvcm0gZnJvbSAnLi9vcmRlcnNGb3JtJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1ZpZXcgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRjb25zdCBkdGFibGUgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRpZDogJ3VzZXJzTGlzdExpYnJhcmlhbicsXHJcblx0XHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2lkJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdmdWxsX25hbWUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnTmFtZScsXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogMTgwLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLjVcclxuXHRcdFx0XHR9LFx0XHRcdFx0XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdvcmRlcnMnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnT3JkZXJzJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtZm9sZGVyLW9wZW5cIj48L2k+J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCdmYS1mb2xkZXItb3Blbic6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93VXNlck9yZGVycyhpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0ZHRhYmxlXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dXNlcnNNb2RlbC5nZXRSZWFkZXJzKCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGxldCB1c2Vyc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblx0XHRcdHVzZXJzQXJyID0gdXNlcnNBcnIubWFwKChlbCkgPT4ge1xyXG5cdFx0XHRcdGVsLmZ1bGxfbmFtZSA9IGVsLnVzZXJfbmFtZSArICcgJyArIGVsLnVzZXJfc3VybmFtZTtcdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMudXNlcnNEYXRhID0gdXNlcnNBcnI7XHJcblx0XHRcdCQkKCd1c2Vyc0xpc3RMaWJyYXJpYW4nKS5wYXJzZSh1c2Vyc0Fycik7XHJcblx0XHR9KTtcdFx0XHJcblxyXG5cdFx0dGhpcy5lZGl0T3JkZXJzID0gdGhpcy51aShPcmRlcnNGb3JtKTtcclxuXHR9XHJcblxyXG5cdHNob3dVc2VyT3JkZXJzKGlkKSB7XHJcblx0XHR0aGlzLmVkaXRPcmRlcnMuc2hvd1dpbmRvdyhpZCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luUGFnZSBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgbG9naW5Gb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdsb2dpbkZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1VzZXJuYW1lJywgbmFtZTogJ3VzZXJuYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCB0eXBlOiAncGFzc3dvcmQnLCBsYWJlbDogJ1Bhc3N3b3JkJywgbmFtZTogJ3Bhc3N3b3JkJyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1hcmdpbjogNSwgY29sczogW1xyXG5cdFx0XHRcdFx0XHR7IHZpZXc6ICdidXR0b24nLCBsb2NhbElkOiAnbG9naW5CdG4nLCB2YWx1ZTogJ0xvZ2luJywgdHlwZTogJ2Zvcm0nIH0sXHJcblx0XHRcdFx0XHRcdHsgdmlldzogJ2J1dHRvbicsIHZhbHVlOiAnQ2FuY2VsJyB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxpbmsgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0NyZWF0ZSBhbiBhY2NvdW50JyxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNob3coJy9yZWdpc3RlcicpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1x0XHJcblx0XHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHRsb2dpbkZvcm0sXHJcblx0XHRcdFx0XHRcdGxpbmssXHJcblx0XHRcdFx0XHRcdHt9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuJCQoJ2xvZ2luQnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLiQkKCdsb2dpbkZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ2luKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcdFxyXG5cdFx0XHRcdGlmIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXNlckRhdGEgPSByZXNwb25zZS5qc29uKCkudXNlcjtcclxuXHRcdFx0XHRcdGNvbnN0IGlkID0gdXNlckRhdGEuaWQ7XHJcblxyXG5cdFx0XHRcdFx0c3dpdGNoICh1c2VyRGF0YS5yb2xlX25hbWUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnYWRtaW4nOiBcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3coYGFkbWluLmluZGV4P2lkPSR7aWR9YCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2xpYnJhcmlhbic6IFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvdyhgbGlicmFyaWFuLmluZGV4P2lkPSR7aWR9L2xpYnJhcmlhbi5saWJyYXJ5YCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3JlYWRlcic6IFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvdyhgcmVhZGVyLmluZGV4P2lkPSR7aWR9L3JlYWRlci5tYWluYCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0d2ViaXgubWVzc2FnZShyZXNwb25zZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcdFx0XHRcdFxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBsaWtlc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9saWtlcyc7XHJcbmltcG9ydCB7dG9nZ2xlRWxlbWVudH0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5pbXBvcnQge0RVTU1ZQ09WRVIsIFNVQ0NFU1N9IGZyb20gJy4uLy4uL2NvbnN0cyc7IFxyXG5pbXBvcnQgZmlsZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvZmlsZXMnO1xyXG5pbXBvcnQgb3JkZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVycyc7XHJcbmltcG9ydCBDb21tZW50Q2xhc3MgZnJvbSAnLi9jb21tZW50T2JqJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDYXJkIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDb3ZlciA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDb3ZlcicsXHJcblx0XHRcdHdpZHRoOiAxMjAsXHJcblx0XHRcdGhlaWdodDogMTgwLFxyXG5cdFx0XHRjc3M6ICdib29rX2NvdmVyJyxcclxuXHRcdFx0dGVtcGxhdGU6ICh1cmwpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gYDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KVwiID48L2Rpdj5gO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDYXJkID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NhcmRSZWFkZXInLFx0XHRcdFxyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVGl0bGUnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdib29rX3RpdGxlJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdXRob3InLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdXRob3JfbmFtZScsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnR2VucmVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnZ2VucmVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUHVibGlzaGluZyBob3VzZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ3B1Ymxpc2hpbmdfaG91c2UnLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F2YWlsYWJsZSBjb3BpZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdmFpbGFibGVfY29waWVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYWdlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ251bWJlcl9vZl9wYWdlcycsIHJlYWRvbmx5OiB0cnVlIH1cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVUZXh0RmlsZXMgPSB7XHJcblx0XHRcdHZpZXc6ICdhY3RpdmVMaXN0JyxcclxuXHRcdFx0bG9jYWxJZDogJ2F2YWlsYWJsZVRleHRGaWxlcycsXHJcblx0XHRcdHRlbXBsYXRlOiBcIiNuYW1lI1wiICtcclxuXHRcdFx0XHRcdFwiPHNwYW4gY2xhc3M9J2xpc3RfYnV0dG9uJz48aSBjbGFzcyA9ICdmYXMgZmEtZG93bmxvYWQnPjwvaT48L3NwYW4+XCIsXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgYm9va05hbWUgPSB0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5nZXRJdGVtKGlkKS5uYW1lO1xyXG5cclxuXHRcdFx0XHRcdGZpbGVzTW9kZWwuZG93bmxvYWRJdGVtKGlkKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0d2ViaXguaHRtbC5kb3dubG9hZChyZXMsIGJvb2tOYW1lKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVBdWRpb0ZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiBcImFjdGl2ZUxpc3RcIixcclxuXHRcdFx0bG9jYWxJZDogXCJhdmFpbGFibGVBdWRpb0ZpbGVzXCIsXHJcblx0XHRcdHR5cGU6e1xyXG5cdFx0XHRcdGhlaWdodDoxMDBcclxuXHRcdFx0fSxcclxuXHRcdFx0dGVtcGxhdGU6IFwiI25hbWUjPGF1ZGlvIGNvbnRyb2xzIHNyYz0naHR0cDovL2xvY2FsaG9zdDozMDAwL2F1ZGlvLyNpZCMnPjwvYXVkaW8+XCJcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb3JkZXJCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ29yZGVyQm9vaycsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0bGFiZWw6ICc8aSBjbGFzcz1cImZhciBmYS1oYW5kLXBhcGVyXCI+PC9pPiBPcmRlcicsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMub3JkZXJCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZG93bmxvYWRCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ2Rvd25sb2FkQm9vaycsXHJcblx0XHRcdHR5cGU6ICdpY29uJyxcclxuXHRcdFx0aWNvbjogJ2ZhcyBmYS1kb3dubG9hZCcsXHJcblx0XHRcdHdpZHRoOiA2MCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5vcmRlckJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsaWtlQm9vayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGxvY2FsSWQ6ICdsaWtlQnV0dG9uJyxcclxuXHRcdFx0Y3NzOiAnbGlrZV9idXR0b24nLFxyXG5cdFx0XHR0eXBlOiAnaWNvbicsIFxyXG5cdFx0XHRpY29uOiAnZmFyIGZhLWhlYXJ0JyxcclxuXHRcdFx0d2lkdGg6IDQ1LFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLmxpa2VCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdG9nZ2xlQ29tbWVudHNCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRsb2NhbElkOiAnY29tbWVudEJ1dHRvbicsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0bGFiZWw6ICdDb21tZW50cyA8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3duXCI+JyxcclxuXHRcdFx0d2lkdGg6IDEyMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5Db21tZW50LnRvZ2dsZUNvbW1lbnRzKHRoaXMuY29tbWVudHNHb3QsIHRoaXMuJCQoJ2NvbW1lbnRCdXR0b24nKSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkQ29tbWVudCA9IHtcclxuXHRcdFx0bWFyZ2luOiA1LFxyXG5cdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdHBhZGRpbmdYOiAxNyxcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZpZXc6J3RleHRhcmVhJyxcclxuXHRcdFx0XHRcdGxvY2FsSWQ6ICd1c2VyQ29tbWVudCcsXHJcblx0XHRcdFx0XHRsYWJlbDogJ0NvbW1lbnQnLFxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbjogJ3RvcCcsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IDgwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdFx0bG9jYWxJZDogJ3NhdmVDb21tZW50QnRuJyxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICdTZW5kJyxcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuQ29tbWVudC5zYXZlQ29tbWVudCh0aGlzLiQkKCd1c2VyQ29tbWVudCcpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgY29tbWVudHMgPSB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHt9LCB0b2dnbGVDb21tZW50c0J0biwge31cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxvY2FsSWQ6ICdjb21tZW50TGF5b3V0JyxcclxuXHRcdFx0XHRcdGhpZGRlbjogdHJ1ZSxcclxuXHRcdFx0XHRcdHJvd3M6IFtdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICdwb3B1cCcsXHJcblx0XHRcdHBvc2l0aW9uOidjZW50ZXInLFxyXG5cdFx0XHRtYXhIZWlnaHQ6IDU1MCxcclxuXHRcdFx0Ym9keTp7XHJcblx0XHRcdFx0dmlldzogJ3Njcm9sbHZpZXcnLFxyXG5cdFx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0Ym9va0NvdmVyLCBib29rQ2FyZCwgYXZhaWxhYmxlVGV4dEZpbGVzLCBhdmFpbGFibGVBdWRpb0ZpbGVzLFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdYOiAxNSxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHRcdG9yZGVyQm9vaywgZG93bmxvYWRCb29rLCB7fSwgbGlrZUJvb2tcclxuXHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGFkZENvbW1lbnQsXHJcblx0XHRcdFx0XHRcdGNvbW1lbnRzXHJcblx0XHRcdFx0XHRdIFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblx0XHJcblx0c2hvd1BvcHVwKGJvb2spIHtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbiA9IHRoaXMuJCQoJ2xpa2VCdXR0b24nKTtcclxuXHRcdHRoaXMuZm9ybSA9IHRoaXMuJCQoJ2Jvb2tDYXJkUmVhZGVyJyk7XHJcblx0XHR0aGlzLmZpbGVzTGlzdCA9IHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpO1xyXG5cdFx0dGhpcy50b2dnbGVDb21tZW50c0J0biA9IHRoaXMuJCQoJ2NvbW1lbnRCdXR0b24nKTtcclxuXHRcdHRoaXMub3JkZXJCdG4gPSB0aGlzLiQkKCdvcmRlckJvb2snKTtcclxuXHRcdHRoaXMuY29tbWVudExheW91dCA9IHRoaXMuJCQoJ2NvbW1lbnRMYXlvdXQnKTtcclxuXHRcdHRoaXMuYm9vayA9IGJvb2s7XHJcblx0XHR0aGlzLmJvb2tJZCA9IGJvb2suaWQ7XHJcblx0XHR0aGlzLnVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdHRoaXMuQ29tbWVudCA9IG5ldyBDb21tZW50Q2xhc3ModGhpcy51c2VySWQsIHRoaXMuYm9va0lkLCB0aGlzLmNvbW1lbnRMYXlvdXQpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmNsZWFyRm9ybSgpO1xyXG5cdFx0dGhpcy5mb3JtLnNldFZhbHVlcyhib29rKTtcclxuXHRcdHRoaXMuJCQoJ2Jvb2tDb3ZlcicpLnNldFZhbHVlcyhib29rLmNvdmVyX3Bob3RvIHx8IERVTU1ZQ09WRVIpO1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnYmFkZ2UnLCBib29rLmNvdW50X2xpa2VzIHx8ICcwJyk7XHJcblx0XHR0aGlzLmdldEZpbGVzKCk7XHJcblx0XHR0aGlzLkNvbW1lbnQuZ2V0Q29tbWVudHMoKTtcdFxyXG5cdFx0dGhpcy5jb21tZW50c0dvdCA9IHRydWU7XHRcclxuXHRcdFxyXG5cdFx0dG9nZ2xlRWxlbWVudChib29rLmJvb2tfZmlsZSwgdGhpcy4kJCgnZG93bmxvYWRCb29rJykpO1xyXG5cdFx0dG9nZ2xlRWxlbWVudChib29rLmF2YWlsYWJsZV9jb3BpZXMsIHRoaXMuJCQoJ29yZGVyQm9vaycpKTtcclxuXHRcdHRoaXMudG9nZ2xlTGlrZShib29rLnVzZXJfaWQgPT0gdGhpcy51c2VySWQpO1xyXG5cdFx0dGhpcy50b2dnbGVPcmRlcihib29rLm9yZGVyX2RhdGUpO1xyXG5cclxuXHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcclxuXHR9XHJcblxyXG5cdGdldEZpbGVzKCkge1xyXG5cdFx0ZmlsZXNNb2RlbC5nZXRJdGVtcyh0aGlzLmJvb2tJZCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZpbGVzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHJcblx0XHRcdGNvbnN0IHRleHRGaWxlcyA9IFtdO1xyXG5cdFx0XHRjb25zdCBhdWRpb0ZpbGVzID0gW107XHJcblxyXG5cdFx0XHRmaWxlc0Fyci5mb3JFYWNoKChmaWxlKSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoKGZpbGUuZGF0YV90eXBlKSB7XHJcblx0XHRcdFx0XHRjYXNlICd0ZXh0JzogXHJcblx0XHRcdFx0XHRcdHRleHRGaWxlcy5wdXNoKGZpbGUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2F1ZGlvJzogXHJcblx0XHRcdFx0XHRcdGF1ZGlvRmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykucGFyc2UodGV4dEZpbGVzKTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLnBhcnNlKGF1ZGlvRmlsZXMpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvcmRlckJvb2soKSB7XHJcblx0XHRjb25zdCBvcmRlciA9IHtcclxuXHRcdFx0dXNlcl9pZDogdGhpcy51c2VySWQsXHJcblx0XHRcdGJvb2tfaWQ6IHRoaXMuYm9va0lkLFxyXG5cdFx0XHRvcmRlcl9kYXRlOiBuZXcgRGF0ZSgpXHJcblx0XHR9O1xyXG5cclxuXHRcdG9yZGVyc01vZGVsLmFkZE9yZGVyKG9yZGVyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRcdHRoaXMuc2V0T3JkZXJlZFZhbCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNldE9yZGVyZWRWYWwoKSB7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmRlZmluZSgnbGFiZWwnLCAnT3JkZXJlZCcpOyBcclxuXHRcdHRoaXMub3JkZXJCdG4ucmVmcmVzaCgpO1xyXG5cdFx0dGhpcy5vcmRlckJ0bi5kaXNhYmxlKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldE9yZGVyZWRWYWwoKSB7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmRlZmluZSgnbGFiZWwnLCAnPGkgY2xhc3M9XCJmYXIgZmEtaGFuZC1wYXBlclwiPjwvaT4gT3JkZXInKTsgIFxyXG5cdFx0dGhpcy5vcmRlckJ0bi5yZWZyZXNoKCk7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmVuYWJsZSgpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlT3JkZXIob3JkZXJlZCkge1xyXG5cdFx0aWYob3JkZXJlZCkge1xyXG5cdFx0XHR0aGlzLnNldE9yZGVyZWRWYWwoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVuc2V0T3JkZXJlZFZhbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGlrZUJvb2soKSB7XHJcblx0XHRpZih0aGlzLmJvb2sudXNlcl9pZCA9PSB0aGlzLnVzZXJJZCkge1xyXG5cdFx0XHRsaWtlc01vZGVsLnJlbW92ZUxpa2UodGhpcy51c2VySWQsIHRoaXMuYm9va0lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zZXJ2ZXJTdGF0dXM7XHJcblx0XHRcdFx0aWYoc3RhdHVzID09IFNVQ0NFU1MpIHtcclxuXHRcdFx0XHRcdHRoaXMudW5zZXRMaWtlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdGxpa2VzTW9kZWwuYWRkTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdHVzID0gcmVzcG9uc2UuanNvbigpLnNlcnZlclN0YXR1cztcclxuXHRcdFx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRMaWtlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cdFxyXG5cdH1cdFxyXG5cclxuXHR0b2dnbGVMaWtlKGNvbmRpdGlvbikge1xyXG5cdFx0aWYoY29uZGl0aW9uKSB7XHJcblx0XHRcdHRoaXMuc2V0TGlrZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMudW5zZXRMaWtlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRMaWtlKCkge1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnaWNvbicsICdmYXMgZmEtaGVhcnQnKTtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5yZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldExpa2UoKSB7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24uZGVmaW5lKCdpY29uJywgJ2ZhciBmYS1oZWFydCcpO1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLnJlZnJlc2goKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyRm9ybSgpIHtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy5maWxlc0xpc3QuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuQ29tbWVudC5jbGVhckNvbW1lbnRzKCk7XHJcblx0fVxyXG59IiwiXHJcbmltcG9ydCB7Zm9ybWF0RGF0ZX0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5pbXBvcnQgY29tbWVudHNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvY29tbWVudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCB7XHJcblx0Y29uc3RydWN0b3IodXNlcklkLCBib29rSWQsIGNvbW1lbnRMYXlvdXQpIHtcclxuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xyXG5cdFx0dGhpcy5ib29rSWQgPSBib29rSWQ7XHJcblx0XHR0aGlzLmNvbW1lbnRMYXlvdXQgPSBjb21tZW50TGF5b3V0O1xyXG5cdH1cclxuXHJcblx0c2F2ZUNvbW1lbnQgKGNvbW1lbnRJbnB1dCwgcGFyZW50Q29tbWVudElkKSB7XHJcblx0XHRjb25zdCBjb21tZW50VGV4dCA9IGNvbW1lbnRJbnB1dC5nZXRWYWx1ZSgpO1xyXG5cdFx0Y29uc3QgY29tbWVudCA9IHtcclxuXHRcdFx0J3VzZXJfaWQnOiB0aGlzLnVzZXJJZCxcclxuXHRcdFx0J2Jvb2tfaWQnOiB0aGlzLmJvb2tJZCxcclxuXHRcdFx0J2NvbnRlbnQnOiBjb21tZW50VGV4dCxcclxuXHRcdFx0J2NvbW1lbnREYXRlJzogbmV3IERhdGUoKSxcclxuXHRcdFx0J2NvbW1lbnRfaWQnOiBwYXJlbnRDb21tZW50SWQgfHwgMFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb21tZW50c01vZGVsLmFkZEl0ZW0oY29tbWVudCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0aWYgKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0dGhpcy5jbGVhckNvbW1lbnRzKCk7XHJcblx0XHRcdFx0aWYoIXBhcmVudENvbW1lbnRJZCkge1xyXG5cdFx0XHRcdFx0Y29tbWVudElucHV0LnNldFZhbHVlKCcnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5nZXRDb21tZW50cygpO1xyXG5cdFx0XHRcdHRoaXMuY29tbWVudExheW91dC5zaG93KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YWRkQ2hpbGRDb21tZW50cyAoYXJyLCBpdGVtKSB7XHJcblx0XHRsZXQgaSA9IDA7XHJcblx0XHR3aGlsZSAoaSA8IGFyci5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgZWwgPSBhcnJbaV07XHJcblx0XHRcdGlmIChlbC5jb21tZW50X2lkID09PSBpdGVtLmlkKSB7XHJcblx0XHRcdFx0Y29uc3QgY29tbWVudEl0ZW0gPSB0aGlzLmNvbXBvc2VDb21tZW50KGVsKTtcclxuXHRcdFx0XHQkJChgY29tbWVudF8ke2l0ZW0uaWR9YCkuYWRkVmlldyhjb21tZW50SXRlbSk7XHJcblx0XHRcdFx0YXJyLnNwbGljZShpLCAxKTtcclxuXHJcblx0XHRcdFx0aWYgKGFyci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENoaWxkQ29tbWVudHMoYXJyLCBlbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q29tbWVudHMoKSB7XHJcblx0XHRjb21tZW50c01vZGVsLmdldEl0ZW1zKHRoaXMuYm9va0lkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgY29tbWVudHNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cclxuXHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0d2hpbGUgKGkgPCBjb21tZW50c0Fyci5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb25zdCBjb21tZW50ID0gY29tbWVudHNBcnJbaV07XHJcblx0XHRcdFx0aWYgKCFjb21tZW50LmNvbW1lbnRfaWQpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGNvbW1lbnRJdGVtID0gdGhpcy5jb21wb3NlQ29tbWVudChjb21tZW50KTtcclxuXHRcdFx0XHRcdHRoaXMuY29tbWVudExheW91dC5hZGRWaWV3KGNvbW1lbnRJdGVtKTtcclxuXHRcdFx0XHRcdGNvbW1lbnRzQXJyLnNwbGljZShpLCAxKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY29tbWVudHNBcnIubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFkZENoaWxkQ29tbWVudHMoY29tbWVudHNBcnIsIGNvbW1lbnQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUNvbW1lbnRzIChpc0NvbW1lbnRzR290LCB0b2dnbGVDb21tZW50c0J0bikge1xyXG5cdFx0Y29uc3QgaXNWaXNpYmxlID0gdGhpcy5jb21tZW50TGF5b3V0LmlzVmlzaWJsZSgpO1xyXG5cdFx0aWYgKGlzVmlzaWJsZSkge1xyXG5cdFx0XHR0b2dnbGVDb21tZW50c0J0bi5zZXRWYWx1ZSgnQ29tbWVudHMgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT4nKTtcclxuXHRcdFx0dGhpcy5jb21tZW50TGF5b3V0LmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0b2dnbGVDb21tZW50c0J0bi5zZXRWYWx1ZSgnQ29tbWVudHMgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtdXBcIj48L2k+Jyk7XHJcblx0XHRcdGlmICghaXNDb21tZW50c0dvdCkge1xyXG5cdFx0XHRcdHRoaXMuZ2V0Q29tbWVudHMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNvbW1lbnRMYXlvdXQuc2hvdygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29tcG9zZUNvbW1lbnQgKGNvbW1lbnQpIHtcclxuXHRcdGNvbnN0IGNvbW1lbnREYXRlID0gZm9ybWF0RGF0ZShjb21tZW50LmNvbW1lbnRfZGF0ZSk7XHJcblx0XHRjb25zdCBjb21tZW50QXV0aG9yID0gYCR7Y29tbWVudC51c2VyX25hbWV9ICR7Y29tbWVudC51c2VyX3N1cm5hbWV9YDtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpZDogYGNvbW1lbnRfJHtjb21tZW50LmlkfWAsXHJcblx0XHRcdGNzczogJ2NvbW1lbnRfaXRlbScsXHJcblx0XHRcdHBhZGRpbmc6IHsgbGVmdDogMTAgfSxcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZpZXc6IFwidGVtcGxhdGVcIixcclxuXHRcdFx0XHRcdGF1dG9oZWlnaHQ6IHRydWUsXHJcblx0XHRcdFx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Y3NzOiAndGVtcGxhdGUnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY29tbWVudF9pbmZvXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29tbWVudF9hdXRob3JcIj4ke2NvbW1lbnRBdXRob3J9PC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29tbWVudF9kYXRlXCI+JHtjb21tZW50RGF0ZX08L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtjb21tZW50LmNvbnRlbnR9PC9kaXY+YCxcclxuXHRcdFx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHRcdFx0J3RlbXBsYXRlJzogKCkgPT4gdGhpcy5yZXBseVRvQ29tbWVudChjb21tZW50LmlkKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJlcGx5VG9Db21tZW50IChjb21tZW50SWQpIHtcclxuXHRcdGNvbnN0IHJlcGx5VG9Db21tZW50TGF5b3V0ID0ge1xyXG5cdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZpZXc6ICd0ZXh0YXJlYScsXHJcblx0XHRcdFx0XHRpZDogJ3JlcGx5VXNlckNvbW1lbnQnLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiA2MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRcdGxvY2FsSWQ6ICdzYXZlQ29tbWVudEJ0bicsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnU2VuZCcsXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzAsXHJcblx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZUNvbW1lbnQoJCQoJ3JlcGx5VXNlckNvbW1lbnQnKSwgY29tbWVudElkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKCEkJCgncmVwbHlVc2VyQ29tbWVudCcpKSB7XHJcblx0XHRcdCQkKGBjb21tZW50XyR7Y29tbWVudElkfWApLmFkZFZpZXcocmVwbHlUb0NvbW1lbnRMYXlvdXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xlYXJDb21tZW50cyAoKSB7XHJcblx0XHRjb25zdCBjb21tZW50cyA9IHRoaXMuY29tbWVudExheW91dC5nZXRDaGlsZFZpZXdzKCk7XHJcblx0XHRpZiAoY29tbWVudHMpIHtcclxuXHRcdFx0Y29uc3QgY29tbWVudHNDb3B5ID0gWy4uLmNvbW1lbnRzXTtcclxuXHJcblx0XHRcdGNvbW1lbnRzQ29weS5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5jb21tZW50TGF5b3V0LnJlbW92ZVZpZXcoY29tbWVudCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6J2hlYWRlcicsIHRlbXBsYXRlOnRoaXMuYXBwLmNvbmZpZy5uYW1lLCBjc3M6J3dlYml4X2hlYWRlciBhcHBfaGVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBtZW51ID0ge1xyXG5cdFx0XHR2aWV3OidtZW51JywgXHJcblx0XHRcdGNzczonYXBwX21lbnUnLFxyXG5cdFx0XHR3aWR0aDoxODAsIGxheW91dDoneScsIHNlbGVjdDp0cnVlLFxyXG5cdFx0XHR0ZW1wbGF0ZTonPHNwYW4gY2xhc3M9XCJ3ZWJpeF9pY29uICNpY29uI1wiPjwvc3Bhbj4gI3ZhbHVlIyAnLFxyXG5cdFx0XHR2YWx1ZTogJ21haW4nLFxyXG5cdFx0XHRkYXRhOltcclxuXHRcdFx0XHR7IHZhbHVlOidNeSBib29rcycsIGlkOidtYWluJywgaWNvbjonZmFzIGZhLWJvb2ttYXJrJyB9LFxyXG5cdFx0XHRcdHsgdmFsdWU6J0xpYnJhcnknLCBpZDonbGlicmFyeScsICBpY29uOidmYXMgZmEtYm9vay1yZWFkZXInIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonVG9wcycsIGlkOid0b3BzJywgIGljb246J2ZhcyBmYS1saXN0JyB9LFxyXG5cdFx0XHRcdHsgdmFsdWU6J1NldHRpbmdzJywgaWQ6J3NldHRpbmdzJywgIGljb246J2ZhcyBmYS1jb2cnIH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdG9uOntcclxuXHRcdFx0XHRvbk1lbnVJdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXNlcl9pZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwLnNob3coYHJlYWRlci5pbmRleD9pZD0ke3VzZXJfaWR9L3JlYWRlci4ke2lkfWApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsb2dvdXQgPSB7XHJcblx0XHRcdHZpZXc6J2J1dHRvbicsIFxyXG5cdFx0XHRsb2NhbElkOidsb2dvdXRCdG4nLCBcclxuXHRcdFx0dmFsdWU6J0xvZ291dCcsIFxyXG5cdFx0XHR0eXBlOidmb3JtJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1aSA9IHtcclxuXHRcdFx0dHlwZTonY2xlYW4nLCBwYWRkaW5nWDo1LCBjc3M6J2FwcF9sYXlvdXQnLCBcclxuXHRcdFx0Y29sczpbXHJcblx0XHRcdFx0eyBwYWRkaW5nWDo1LCBwYWRkaW5nWToxMCwgcm93czogWyB7Y3NzOid3ZWJpeF9zaGFkb3dfbWVkaXVtJywgcm93czpbaGVhZGVyLCBtZW51LCBsb2dvdXRdfSBdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdyZXNpemVyJywgd2lkdGg6IDUgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0eXBlOiAnd2lkZScsIHBhZGRpbmdZOiAxMCwgcGFkZGluZ1g6IDUsIHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0eyAkc3VidmlldzogdHJ1ZSB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdHRoaXMuJCQoJ2xvZ291dEJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYXBwID0gdGhpcy5hcHA7XHJcblx0XHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVktJW0tJWRcIik7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dvdXQoe2N1cnJlbnREYXRlfSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSBcIndlYml4LWpldFwiO1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuLi9jb21tb24vbGlicmFyeSc7XHJcbmltcG9ydCBCb29rQ2FyZCBmcm9tICcuL2Jvb2tDYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlYWRlckxpYnJhcnkgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRjb25zdCBsaWJyYXJ5Q29uZmlnID0ge1xyXG5cdFx0XHRyb2xlOiAncmVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0bmV3IExpYnJhcnkodGhpcy5hcHAsIGxpYnJhcnlDb25maWcsIEJvb2tDYXJkKVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgb3JkZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgdGVzdFJlc3VsdHMgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRsb2NhbElkOiAnb3JkZXJzTGlzdCcsXHJcblx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0Y29sdW1uczogW1x0XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdpZCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IHRydWUsXHJcblx0XHRcdFx0fSxcdFx0XHRcdFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYm9va190aXRsZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdCb29rJyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdXRob3JfbmFtZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdBdXRob3InLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3JlbW92ZUNvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSZW1vdmUnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+J1xyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J2ZhLXRyYXNoJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUJvb2soaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBidXR0b24gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRpZDogJ2FkZEdyb3VwJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQnLFxyXG5cdFx0XHR0eXBlOidmb3JtJyxcclxuXHRcdFx0aW5wdXRXaWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge31cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdHJvd3M6IFt0ZXN0UmVzdWx0cywgYnV0dG9uXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmdyaWQgPSB0aGlzLiQkKCdvcmRlcnNMaXN0Jyk7XHJcblx0XHR0aGlzLnVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdHRoaXMucGFyc2VCb29rcygpO1x0XHRcclxuXHR9XHJcblxyXG5cdGFzeW5jIHBhcnNlQm9va3MoKSB7XHJcblx0XHRhd2FpdCBvcmRlcnNNb2RlbC5nZXRJdGVtcyh0aGlzLnVzZXJJZCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGxldCBvcmRlcnNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cdFx0XHR0aGlzLmdyaWQuY2xlYXJBbGwoKTtcclxuXHRcdFx0dGhpcy4kJCgnb3JkZXJzTGlzdCcpLnBhcnNlKG9yZGVyc0Fycik7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlbW92ZUJvb2soaWQpIHtcclxuXHRcdGF3YWl0IG9yZGVyc01vZGVsLnJlbW92ZUl0ZW0oaWQpO1xyXG5cdFx0YXdhaXQgdGhpcy5wYXJzZUJvb2tzKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB1c2Vyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy91c2Vycyc7XHJcbmltcG9ydCB7dXBkYXRlSXRlbX0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgYnV0dG9uID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0aWQ6ICdzYXZlQ2hhbmdlcycsXHJcblx0XHRcdHZhbHVlOiAnU2F2ZScsXHJcblx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0aW5wdXRXaWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2F2ZUZvcm0oKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1c2VyRGF0YSA9IHtcclxuXHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRsb2NhbElkOiAndXNlckRhdGFGb3JtJyxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbmFtZTogJ2lkJywgbG9jYWxJZDogJ3VzZXJfaWQnLCBoaWRkZW46IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdGaXJzdCBuYW1lJyxuYW1lOiAndXNlcl9uYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0xhc3QgbmFtZScsbmFtZTogJ3VzZXJfc3VybmFtZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYXNzcG9ydCBJRCcsbmFtZTogJ3Bhc3Nwb3J0X0lEJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ2RhdGVwaWNrZXInLCBsYWJlbDogJ0JpcnRoIGRhdGUnLG5hbWU6ICdiaXJ0aF9kYXRlJywgbG9jYWxJZDogJ2JpcnRoX2RhdGUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQWRkcmVzcycsbmFtZTogJ2FkZHJlc3MnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGhvbmUnLG5hbWU6ICdwaG9uZV9udW1iZXJzJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0VtYWlsJyxuYW1lOiAnZW1haWwnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm93czogW3VzZXJEYXRhXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRjb25zdCBpZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHJcblx0XHR1c2Vyc01vZGVsLmdldEl0ZW0oaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgdXNlckRhdGEgPSBkYXRhLmpzb24oKVswXTtcclxuXHRcdFx0dXNlckRhdGEuYmlydGhfZGF0ZSA9IG5ldyBEYXRlICh1c2VyRGF0YS5iaXJ0aF9kYXRlKTtcclxuXHRcdFx0dGhpcy4kJCgndXNlckRhdGFGb3JtJykuc2V0VmFsdWVzKHVzZXJEYXRhKTtcclxuXHRcdH0pO1x0XHJcblx0fVxyXG5cclxuXHRzYXZlRm9ybSAoKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy4kJCgndXNlckRhdGFGb3JtJykuZ2V0VmFsdWVzKCk7XHJcblx0XHRjb25zdCBzdWNjZXNzQWN0aW9uID0gdGhpcy53ZWJpeC5tZXNzYWdlKCdOZXcgZGF0YSBzYXZlZCcpO1xyXG5cdFx0dXBkYXRlSXRlbSh1c2Vyc01vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSBcIndlYml4LWpldFwiO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm9va1RvcHMgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZpZXc6ICdsaXN0JyxcclxuXHRcdFx0XHRcdHdpZHRoOiAyNTAsXHJcblx0XHRcdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdFx0XHRkYXRhOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dPbGRlc3RCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdPbGRlc3QgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dOZXdlc3RCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdOZXdlc3QgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dNb3N0UGFnZXNCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdNb3N0IHBhZ2VzIGJvb2tzJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdzaG93Qm9va3NXaXRoTG9uZ05hbWVzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2tzIHdpdGggbG9uZ2VzdCBuYW1lcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ0F1dGhvcnMgd2l0aCBtb3N0IGJvb2tzJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHN3aXRjaChpZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd09sZGVzdEJvb2tzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93T2xkZXN0Qm9va3MoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93TmV3ZXN0Qm9va3MnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dOZXdlc3RCb29rcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dNb3N0UGFnZXNCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd01vc3RQYWdlc0Jvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd0Jvb2tzV2l0aExvbmdOYW1lcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0Jvb2tzV2l0aExvbmdOYW1lcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dBdXRob3JzV2l0aE1vc3RCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdib29rc1RvcCcsXHJcblx0XHRcdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmdyaWQgPSAkJCgnYm9va3NUb3AnKTtcclxuXHRcdGJvb2tzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0bGV0IGJvb2tzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHRcdFx0Ym9va3NBcnIgPSBib29rc0Fyci5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwueWVhcl9vZl9wdWJsaWNhdGlvbiA9IG5ldyBEYXRlKGVsLnllYXJfb2ZfcHVibGljYXRpb24pO1xyXG5cdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuYm9va3NBcnIgPSBib29rc0FycjtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZGVmYXVsdENvbmZpZyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnYm9va190aXRsZScsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRoZWFkZXI6ICdUaXRsZSdcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnYXV0aG9yX25hbWUnLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0aGVhZGVyOiAnQXV0aG9yJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdnZW5yZXMnLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdHZW5yZXMnXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2NvdW50cnlfb2ZfcHVibGljYXRpb24nLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdDb3VudHJ5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICd5ZWFyX29mX3B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRzb3J0OiAnZGF0ZScsXHJcblx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0Zm9ybWF0OiB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZXCIpLFxyXG5cdFx0XHRcdGhlYWRlcjogJ1llYXInXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ251bWJlcl9vZl9wYWdlcycsXHJcblx0XHRcdFx0aGVhZGVyOiAnUGFnZXMnLFxyXG5cdFx0XHRcdHdpZHRoOiA2MFxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0c2hvd09sZGVzdEJvb2tzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdFx0cmV0dXJuIGEueWVhcl9vZl9wdWJsaWNhdGlvbiAtIGIueWVhcl9vZl9wdWJsaWNhdGlvbjtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zaG93UmVzdWx0cyhkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2hvd05ld2VzdEJvb2tzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+IGIueWVhcl9vZl9wdWJsaWNhdGlvbiAtIGEueWVhcl9vZl9wdWJsaWNhdGlvbik7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93TW9zdFBhZ2VzQm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4gIGIubnVtYmVyX29mX3BhZ2VzIC0gYS5udW1iZXJfb2ZfcGFnZXMpO1xyXG5cdFx0dGhpcy5zaG93UmVzdWx0cyhkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2hvd0Jvb2tzV2l0aExvbmdOYW1lcygpIHtcclxuXHRcdGxldCBkYXRhID0gWy4uLnRoaXMuYm9va3NBcnJdO1xyXG5cdFx0ZGF0YS5zb3J0KChhLCBiKSA9PiBiLmJvb2tfdGl0bGUubGVuZ3RoIC0gYS5ib29rX3RpdGxlLmxlbmd0aCk7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MoKSB7XHJcblx0XHRsZXQgYXV0aG9ycyA9IFtdO1xyXG5cdFx0dGhpcy5ib29rc0Fyci5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpbmRleCA9IGF1dGhvcnMuZmluZEluZGV4KGF1dGhvciA9PiBhdXRob3IubmFtZSA9PSBlbC5hdXRob3JfbmFtZSk7XHJcblx0XHRcdGlmIChpbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0XHRhdXRob3JzLnB1c2goe25hbWU6IGVsLmF1dGhvcl9uYW1lLCBib29rc0NvdW50OiAxfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0YXV0aG9yc1tpbmRleF0uYm9va3NDb3VudCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRhdXRob3JzID0gYXV0aG9ycy5zb3J0KChhLCBiKSA9PiBiLmJvb2tzQ291bnQgLSBhLmJvb2tzQ291bnQpO1xyXG5cclxuXHRcdGNvbnN0IGNvbHVtbnMgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ25hbWUnLFxyXG5cdFx0XHRcdGhlYWRlcjogJ05hbWUnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdib29rc0NvdW50JyxcclxuXHRcdFx0XHRoZWFkZXI6ICdCb29rcyBjb3VudCcsXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGF1dGhvcnMsIGNvbHVtbnMpO1xyXG5cdH1cclxuXHJcblx0c2hvd1Jlc3VsdHMoZGF0YSwgY29sdW1ucykge1xyXG5cdFx0dGhpcy5ncmlkLmRlZmluZSgnY29sdW1ucycsIGNvbHVtbnMpO1xyXG5cdFx0dGhpcy5ncmlkLnJlZnJlc2hDb2x1bW5zKCk7XHJcblx0XHRkYXRhID0gZGF0YS5zbGljZSgwLCAxMCk7XHJcblx0XHR0aGlzLmdyaWQuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuZ3JpZC5wYXJzZShkYXRhKTtcclxuXHRcdHRoaXMuZ3JpZC5zaG93KCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyUGFnZSBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0ZXJGb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdyZWdpc3RlckZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Vlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIHR5cGU6ICdwYXNzd29yZCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA1LCBjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIGxvY2FsSWQ6ICdyZWdpc3RlckJ0bicsIHZhbHVlOiAnUmVnaXN0ZXInLCB0eXBlOiAnZm9ybSdcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdHJlZ2lzdGVyRm9ybSxcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuJCQoJ3JlZ2lzdGVyQnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLiQkKCdyZWdpc3RlckZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0XHRhdXRob3JpemF0aW9uLnJlZ2lzdGVyKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc3RhdHVzO1xyXG5cdFx0XHRcdGNvbnN0IGlkID0gcmVzcG9uc2UuanNvbigpLmlkO1xyXG5cdFx0XHRcdGlmIChzdGF0dXMgPT09IDIpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvdyhgcmVhZGVyLmluZGV4P2lkPSR7aWR9L3JlYWRlci5tYWluYCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYocmVzcG9uc2UuanNvbigpLnJlYXNvbiA9PT0gJ3VzZXJFeGlzdCcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHdlYml4Lm1lc3NhZ2UocmVzcG9uc2UuanNvbigpLmRhdGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9