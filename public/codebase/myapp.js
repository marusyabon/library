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
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/orders */ "./sources/models/orders.js");
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
		var _this3 = this;

		var userId = this.getParam("id", true);
		this.grid = this.$$('ordersList');

		_models_orders__WEBPACK_IMPORTED_MODULE_1__["default"].getItems(userId).then(function (dbData) {
			var ordersArr = dbData.json();
			_this3.$$('ordersList').parse(ordersArr);
		});
	};

	MainView.prototype.removeBook = function removeBook(id) {
		_models_orders__WEBPACK_IMPORTED_MODULE_1__["default"].removeItem(id);
		return this.grid.remove(id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViaXgtamV0L2Rpc3QvZXM2L2pldC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvYXV0aG9yaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2NvbnN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2xvY2FsZXMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2Jvb2tzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2ZpbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2xpa2VzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL29yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL21vZGVscy91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL215YXBwLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3Mgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9hZG1pbi91c2VyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2NvbW1vbi9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2Jvb2tDYXJkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9ib29rQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9jb21tZW50T2JqLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci90b3BzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJnIiwiRnVuY3Rpb24iLCJoYWRSdW50aW1lIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImluZGV4T2YiLCJvbGRSdW50aW1lIiwidW5kZWZpbmVkIiwiZSIsImdsb2JhbCIsIk9wIiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImluTW9kdWxlIiwicnVudGltZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJvYmoiLCJhcmciLCJ0eXBlIiwiY2FsbCIsImVyciIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImNvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJ2YWx1ZSIsIlByb21pc2UiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJpdGVyIiwibmV4dCIsImRvbmUiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsImtleSIsInJldmVyc2UiLCJsZW5ndGgiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsIkpldEJhc2UiLCJ3ZWJpeCIsIndlYml4SmV0IiwiX2V2ZW50cyIsIl9zdWJzIiwiX2RhdGEiLCJnZXRSb290IiwiX3Jvb3QiLCJkZXN0cnVjdG9yIiwiX2RldGFjaEV2ZW50cyIsIl9kZXN0cm95U3VicyIsIl9jb250YWluZXIiLCJhcHAiLCJfcGFyZW50Iiwic2V0UGFyYW0iLCJpZCIsInVybCIsIl9zZWdtZW50IiwidXBkYXRlIiwic2hvdyIsImdldFBhcmFtIiwicGFyZW50IiwidmlldyIsImdldFBhcmVudFZpZXciLCJnZXRVcmwiLCJzdWJ1cmwiLCJnZXRVcmxTdHJpbmciLCIkJCIsInJvb3QiLCJxdWVyeVZpZXciLCJjb25maWciLCJsb2NhbElkIiwiJHNjb3BlIiwib24iLCJjb2RlIiwiYXR0YWNoRXZlbnQiLCJjb250YWlucyIsImtpZCIsImdldFN1YlZpZXciLCJzdWIiLCJnZXRTdWJWaWV3SW5mbyIsInN1YnZpZXciLCJwb3B1cCIsImV2ZW50cyIsImRldGFjaEV2ZW50Iiwic3ViVmlldyIsIl9pbml0X3VybF9kYXRhIiwiY3VycmVudCIsImV4dGVuZCIsInBhcmFtcyIsIl9nZXREZWZhdWx0U3ViIiwiZGVmYXVsdCIsImJyYW5jaCIsImNoaWxkIiwiX3JvdXRlZF92aWV3IiwicGFyc2UiLCJzdWJzdHIiLCJwYXJ0cyIsInNwbGl0IiwiY2h1bmtzIiwidGVzdCIsInBvcyIsInBhcmFtIiwiZGNodW5rIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFnZSIsImlzTmV3IiwidXJsMnN0ciIsInN0YWNrIiwiY2h1bmsiLCJvYmoyc3RyIiwiam9pbiIsInN0ciIsImVuY29kZVVSSUNvbXBvbmVudCIsIlJvdXRlIiwicm91dGUiLCJpbmRleCIsIl9uZXh0IiwicGF0aCIsInNoaWZ0IiwicmVmcmVzaCIsIl9qb2luIiwia2lkcyIsIm9sZCIsImNvbmNhdCIsImFwcGVuZCIsInJlcyIsInJlaiIsInJlZGlyZWN0IiwiY29uZmlybSIsImNhbGxFdmVudCIsImNhdGNoIiwic2l6ZSIsIm4iLCJKZXRWaWV3IiwiX2NoaWxkcmVuIiwidWkiLCJjb250YWluZXIiLCJqZXR2aWV3IiwiY3JlYXRlVmlldyIsInJlbmRlciIsInRhcmdldCIsIl9yZW5kZXJGcmFtZUxvY2siLCJfc2hvdyIsInNlZ21lbnQiLCJfdXJsQ2hhbmdlIiwibGlua1JvdXRlciIsImdldFJvdXRlciIsInNldCIsInNpbGVudCIsImluaXQiLCJfJHZpZXciLCJfJCIsInJlYWR5IiwiXyR1cmwiLCJtZXNzYWdlIiwidXJsQ2hhbmdlIiwiZGVzdHJveSIsIl9kZXN0cm95S2lkcyIsInVzZSIsInBsdWdpbiIsInRhZ05hbWUiLCJfcmVuZGVyIiwiZG9jdW1lbnQiLCJib2R5IiwidG9Ob2RlIiwiX3JlbmRlcl9maW5hbCIsImNmZyIsInNsb3QiLCJyZXNwb25zZSIsImNvcHlDb25maWciLCJvbGR1aSIsImFzV2luIiwic2V0UG9zaXRpb24iLCJpc1Zpc2libGUiLCJfaW5pdCIsIl9pbml0VXJsIiwiX2luaXRFcnJvciIsIndhaXRzIiwiZnJhbWUiLCJ3YWl0IiwiYWxsIiwibG9jayIsIl9yZW5kZXJGcmFtZSIsIl9jcmVhdGVTdWJWaWV3IiwiZXJyb3IiLCJjcmVhdGVGcm9tVVJMIiwidWlzIiwiSmV0Vmlld1JhdyIsIl91aSIsIlN1YlJvdXRlciIsImNiIiwiYSIsImdldCIsIl9vbmNlIiwiSmV0QXBwQmFzZSIsIndpbmRvdyIsInZlcnNpb24iLCJzdGFydCIsIl9zZXJ2aWNlcyIsIkV2ZW50U3lzdGVtIiwiX3N1YlNlZ21lbnQiLCJnZXRTZXJ2aWNlIiwic2V0U2VydmljZSIsImhhbmRsZXIiLCIkc3VidmlldyIsImFkZFN1YlZpZXciLCJBcnJheSIsInBvaW50IiwiRGF0YUNvbGxlY3Rpb24iLCJSZWdFeHAiLCJEYXRlIiwiY29weSIsIiRyb3V0ZXIiLCJjbGlja0hhbmRsZXIiLCJzcmNFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwidHJpZ2dlciIsIl9mb3JWaWV3IiwibG9hZFZpZXciLCJ2aWV3cyIsIl9sb2FkRXJyb3IiLCJfbG9hZFZpZXdEeW5hbWljIiwiX19lc01vZHVsZSIsIm5vdyIsInJvdXRlciIsInJlc3QiLCJhcHBseSIsImRhdGEiLCJhY3Rpb24iLCJiaW5kIiwiZXIiLCJkZWJ1ZyIsImNvbnNvbGUiLCJ0ZXh0IiwicmVwbGFjZSIsImlubmVySFRNTCIsImV4cGlyZSIsImZpcnN0SW5pdCIsIl9maXJzdF9zdGFydCIsInRvcCIsImJhc2UiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uIiwibm9kZSIsImh0bWwiLCJhZGRDc3MiLCJyZW1vdmVDc3MiLCJ1cmxTdHJpbmciLCJ0ZW1wbGF0ZSIsInVpZCIsIkhhc2hSb3V0ZXIiLCJfZGV0ZWN0UHJlZml4Iiwib25wb3BzdGF0ZSIsInJvdXRlcyIsImNvbXBhcmUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicHJlZml4Iiwic3VmaXgiLCJfZ2V0UmF3Iiwicm91dGVyUHJlZml4IiwibG9jYXRpb24iLCJocmVmIiwiaXNQYXRjaGVkIiwicGF0Y2giLCJ3Iiwid2luIiwicHJvbWlzZSIsImZyZWV6ZSIsInNvbWUiLCIkZnJlZXplIiwicmVzaXplIiwiYmFzZUFkZCIsImJhc2VsYXlvdXQiLCJhZGRWaWV3IiwiYmFzZVJlbW92ZSIsInJlbW92ZVZpZXciLCJqdmlldyIsInN1YnMiLCJhcmd1bWVudHMiLCJsYXlvdXQiLCJwcm90b1VJIiwiJGluaXQiLCIkYXBwIiwiJHJlYWR5Iiwib3JpZ2luIiwicHJveHkiLCJKZXRBcHAiLCJTdG9yZVJvdXRlciIsInN0b3JhZ2UiLCJzZXNzaW9uIiwic3RvcmVOYW1lIiwicHV0IiwiVXJsUm91dGVyIiwicGF0aG5hbWUiLCJFbXB0eVJvdXRlciIsIl8kY29uZmlnIiwiVW5sb2FkR3VhcmQiLCJoYXMiLCJzdG9yZSIsInRyaW0iLCJ3YXJuIiwieCIsIlN0cmluZyIsImRlbGltaXRlciIsInJ1c3NpYW5QbHVyYWxHcm91cHMiLCJlbmQiLCJwbHVyYWxUeXBlcyIsImFyYWJpYyIsImxhc3RUd28iLCJib3NuaWFuX3NlcmJpYW4iLCJjaGluZXNlIiwiY3JvYXRpYW4iLCJmcmVuY2giLCJnZXJtYW4iLCJydXNzaWFuIiwibGl0aHVhbmlhbiIsImN6ZWNoIiwicG9saXNoIiwiaWNlbGFuZGljIiwic2xvdmVuaWFuIiwicGx1cmFsVHlwZVRvTGFuZ3VhZ2VzIiwibGFuZ1RvVHlwZU1hcCIsIm1hcHBpbmciLCJyZXQiLCJsYW5ncyIsImxhbmciLCJwbHVyYWxUeXBlTmFtZSIsImxvY2FsZSIsImxhbmdUb1BsdXJhbFR5cGUiLCJlbiIsInBsdXJhbFR5cGVJbmRleCIsImNvdW50IiwiZXNjYXBlIiwidG9rZW4iLCJjb25zdHJ1Y3RUb2tlblJlZ2V4Iiwib3B0cyIsInN1ZmZpeCIsIlJhbmdlRXJyb3IiLCJkb2xsYXJSZWdleCIsImRvbGxhckJpbGxzWWFsbCIsImRlZmF1bHRUb2tlblJlZ2V4IiwidHJhbnNmb3JtUGhyYXNlIiwicGhyYXNlIiwic3Vic3RpdHV0aW9ucyIsInRva2VuUmVnZXgiLCJpbnRlcnBvbGF0aW9uUmVnZXgiLCJvcHRpb25zIiwic21hcnRfY291bnQiLCJ0ZXh0cyIsImV4cHJlc3Npb24iLCJhcmd1bWVudCIsIlBvbHlnbG90IiwicGhyYXNlcyIsImN1cnJlbnRMb2NhbGUiLCJhbGxvd01pc3NpbmciLCJvbk1pc3NpbmdLZXkiLCJpbnRlcnBvbGF0aW9uIiwibmV3TG9jYWxlIiwibW9yZVBocmFzZXMiLCJwcmVmaXhlZEtleSIsInVuc2V0IiwiY2xlYXIiLCJuZXdQaHJhc2VzIiwidCIsIl8iLCJ0cmFuc2Zvcm0iLCJ3ZWJpeFBvbHlnbG90IiwiTG9jYWxlIiwiX3ZpZXciLCJzZXRMYW5nRGF0YSIsInBjb25maWciLCJwb2x5Z2xvdCIsInBvbHkiLCJzZXJ2aWNlIiwibG9jTmFtZSIsImkxOG4iLCJzZXRMb2NhbGUiLCJnZXRMYW5nIiwic2V0TGFuZyIsInVybHMiLCJNZW51IiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsImdldFNlbGVjdGVkSWQiLCJzZWxlY3QiLCJleGlzdHMiLCJiYXNlaWNvbnMiLCJnb29kIiwic2F2aW5nIiwiYmFzZXRleHQiLCJTdGF0dXMiLCJzdGF0dXMiLCJpc2Vycm9yIiwiZXhwaXJlRGVsYXkiLCJpY29ucyIsImNvbnRlbnQiLCJhcmVhIiwic2V0SFRNTCIsInN1Y2Nlc3MiLCJzZXRTdGF0dXMiLCJmYWlsIiwiZ2V0U3RhdHVzIiwiaGlkZVN0YXR1cyIsIm1vZGUiLCJyZXNwb25zZVRleHQiLCJ0cmFjayIsImRwIiwiX2lkIiwiX29iaiIsInJlbW90ZSIsImFqYXgiLCJfbW9kZSIsIl91cmwiLCJfcmVxdWVzdCIsIl9oZWFkZXJzIiwiX2ZpbGVzIiwiVGhlbWUiLCJ0aGVtZSIsImdldFRoZW1lIiwic2V0VGhlbWUiLCJsaW5rcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibG5hbWUiLCJkaXNhYmxlZCIsInNraW4iLCJjb3B5UGFyYW1zIiwiVXJsUGFyYW0iLCJvcyIsIm9nIiwidmFsIiwiVXNlciIsImxvZ2luIiwibG9nb3V0IiwiYWZ0ZXJMb2dpbiIsImFmdGVyTG9nb3V0IiwicGluZyIsIm1vZGVsIiwidXNlciIsImdldFVzZXIiLCJzZXJ2ZXIiLCJwYXNzIiwiY2FuTmF2aWdhdGUiLCJfJHJvb3QiLCJwdWJsaWMiLCJzZXRJbnRlcnZhbCIsInBsdWdpbnMiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwibCIsImxvZ291dFVybCIsImxvZ2luVXJsIiwicmVnaXN0ZXJVcmwiLCJBdXRob3JpemF0aW9uIiwicmVnaXN0ZXIiLCJwb3N0IiwiZGF0ZSIsIkRVTU1ZQ09WRVIiLCJTVUNDRVNTIiwiVVJMIiwiQm9va3NNb2RlbCIsImdldERhdGFGcm9tU2VydmVyIiwidXNlcl9pZCIsImFkZEl0ZW0iLCJ1cGRhdGVJdGVtIiwicmVtb3ZlSXRlbSIsImRlbCIsIkNvbW1lbnRzTW9kZWwiLCJnZXRJdGVtcyIsIkZpbGVzTW9kZWwiLCJkb3dubG9hZEl0ZW0iLCJMaWtlc01vZGVsIiwiZ2V0TGlrZXMiLCJhZGRMaWtlIiwidXNlcklkIiwiYm9va0lkIiwicmVtb3ZlTGlrZSIsIk9yZGVyc01vZGVsIiwiYWRkT3JkZXIiLCJvcmRlciIsIlVzZXJzTW9kZWwiLCJnZXRJdGVtIiwiTXlBcHAiLCJkZWZhdWx0cyIsIkFQUE5BTUUiLCJWRVJTSU9OIiwiQlVJTERfQVNfTU9EVUxFIiwiUFJPRFVDVElPTiIsIm5hdiIsInVybFBhcnRzIiwidGFyZ2V0UGFydCIsImVsIiwicm9sZSIsImpzb24iLCJ0b2dnbGVFbGVtZW50IiwiY29uZGl0aW9uIiwiZWxlbWVudCIsImhpZGUiLCJNb2RlbCIsInN1Y2Nlc3NBY3Rpb24iLCJzZXJ2ZXJTdGF0dXMiLCJmb3JtYXREYXRlIiwiZGJEYXRlIiwiY3VycmVudFllYXIiLCJnZXRGdWxsWWVhciIsImN1cnJlbnRNb250aCIsImdldE1vbnRoIiwiY3VycmVudERheSIsImdldERhdGUiLCJjdXJyZW50SG91cnMiLCJnZXRIb3VycyIsImN1cnJlbnREYXRlVGltZSIsImNvbW1lbnRzWWVhciIsImNvbW1lbnRzTW9udGgiLCJjb21tZW50c0RheSIsImNvbW1lbnRzSG91cnMiLCJjb21tZW50c0RhdGVUaW1lIiwic3RyVG9EYXRlIiwiZGF0ZVRvU3RyIiwidGltZSIsIk1hdGgiLCJyb3VuZCIsImF1dG9oZWlnaHQiLCJib3JkZXJsZXNzIiwiaGVpZ2h0IiwibGlzdCIsIlRvcFZpZXciLCJoZWFkZXIiLCJ3aWR0aCIsImR0YWJsZSIsImNvbHVtbnMiLCJoaWRkZW4iLCJtaW5XaWR0aCIsImZpbGxzcGFjZSIsIm9uQ2xpY2siLCJlZGl0VXNlciIsImFkZFVzZXJCdG4iLCJjbGljayIsImFkZFVzZXIiLCJyb3dzIiwiY29scyIsInVzZXJzTW9kZWwiLCJkYkRhdGEiLCJ1c2Vyc0FyciIsIm1hcCIsImZ1bGxfbmFtZSIsInVzZXJfbmFtZSIsInVzZXJfc3VybmFtZSIsImZvcm1hdCIsImJpcnRoX2RhdGUiLCJ1c2Vyc0RhdGEiLCJhdXRob3JpemF0aW9uIiwiY3VycmVudERhdGUiLCJfdXNlckZvcm0iLCJVc2VyRm9ybSIsImZpbmQiLCJzaG93V2luZG93IiwiaGVhZCIsInBvc2l0aW9uIiwiZWxlbWVudHMiLCJsYWJlbCIsImxhYmVsV2lkdGgiLCJsYWJlbEFsaWduIiwicnVsZXMiLCJpc05vdEVtcHR5IiwibWFyZ2luIiwicGFkZGluZ1kiLCJzYXZlRm9ybSIsImhpZGVXaW5kb3ciLCJmb3JtIiwiZ2V0SGVhZCIsInNldFZhbHVlcyIsImluaXRpYWxfcGFzc3dvcmQiLCJnZXRWYWx1ZXMiLCJ2YWxpZGF0ZSIsImNsZWFyVmFsaWRhdGlvbiIsIkxpYnJhcnkiLCJsaWJyYXJ5Q29uZmlnIiwiYm9va0NhcmQiLCJjc3MiLCJzb3J0IiwiZWJvb2siLCJzaG93Qm9va0NhcmQiLCJyZW1vdmVCb29rIiwiZ3JpZCIsImdldENvbHVtbkNvbmZpZyIsInJlZnJlc2hDb2x1bW5zIiwiZ2V0RGF0YSIsImdldEZpbGVzIiwiY2hlY2tGaWxlcyIsImJvb2tzQXJyIiwiX2Jvb2tDYXJkIiwiYm9va3NNb2RlbCIsInllYXJfb2ZfcHVibGljYXRpb24iLCJmaWxlc01vZGVsIiwiZmlsZXNBcnIiLCJib29rIiwiaXNGaWxlcyIsImJvb2tfaWQiLCJzaG93UG9wdXAiLCJyZW1vdmUiLCJhZGRCb29rIiwiQm9va0NhcmQiLCJib29rQ292ZXIiLCJhZGRUZXh0RmlsZSIsImF1dG9zZW5kIiwiZm9ybURhdGEiLCJhY2NlcHQiLCJ1cGxvYWQiLCJsaW5rIiwiZmlsZXNMaXN0IiwiYWRkQXVkaW9GaWxlIiwiYXVkaW9MaXN0IiwiYXZhaWxhYmxlVGV4dEZpbGVzIiwib25JdGVtQ2xpY2siLCJhdmFpbGFibGVBdWRpb0ZpbGVzIiwic2F2ZUJ0biIsIm1heEhlaWdodCIsInBhZGRpbmdYIiwiY2xlYXJGb3JtIiwidGV4dEZpbGVzIiwiYXVkaW9GaWxlcyIsImZpbGUiLCJkYXRhX3R5cGUiLCJjb3Zlcl9waG90byIsInNlbmQiLCJmaWxlcyIsImNsZWFyQWxsIiwibWVudSIsImljb24iLCJvbk1lbnVJdGVtQ2xpY2siLCJsaWJMaWJyYXJ5IiwiYWRkQm9va0J0biIsImxpYnJhcnkiLCJMb2dpblBhZ2UiLCJsb2dpbkZvcm0iLCJ1c2VyRGF0YSIsInJvbGVfbmFtZSIsInJlYWRvbmx5IiwiYm9va05hbWUiLCJkb3dubG9hZCIsIm9yZGVyQm9vayIsImRvd25sb2FkQm9vayIsImxpa2VCb29rIiwidG9nZ2xlQ29tbWVudHNCdG4iLCJDb21tZW50IiwidG9nZ2xlQ29tbWVudHMiLCJjb21tZW50c0dvdCIsImFkZENvbW1lbnQiLCJsYWJlbFBvc2l0aW9uIiwic2F2ZUNvbW1lbnQiLCJjb21tZW50cyIsImxpa2VCdXR0b24iLCJvcmRlckJ0biIsImNvbW1lbnRMYXlvdXQiLCJDb21tZW50Q2xhc3MiLCJkZWZpbmUiLCJjb3VudF9saWtlcyIsImdldENvbW1lbnRzIiwiYm9va19maWxlIiwiYXZhaWxhYmxlX2NvcGllcyIsInRvZ2dsZUxpa2UiLCJ0b2dnbGVPcmRlciIsIm9yZGVyX2RhdGUiLCJvcmRlcnNNb2RlbCIsInNldE9yZGVyZWRWYWwiLCJkaXNhYmxlIiwidW5zZXRPcmRlcmVkVmFsIiwiZW5hYmxlIiwib3JkZXJlZCIsImxpa2VzTW9kZWwiLCJ1bnNldExpa2UiLCJzZXRMaWtlIiwiY2xlYXJDb21tZW50cyIsImNvbW1lbnRJbnB1dCIsInBhcmVudENvbW1lbnRJZCIsImNvbW1lbnRUZXh0IiwiY29tbWVudCIsImNvbW1lbnRzTW9kZWwiLCJhZGRDaGlsZENvbW1lbnRzIiwiYXJyIiwiaXRlbSIsImNvbW1lbnRfaWQiLCJjb21tZW50SXRlbSIsImNvbXBvc2VDb21tZW50Iiwic3BsaWNlIiwiY29tbWVudHNBcnIiLCJpc0NvbW1lbnRzR290IiwiY29tbWVudERhdGUiLCJjb21tZW50X2RhdGUiLCJjb21tZW50QXV0aG9yIiwicGFkZGluZyIsImxlZnQiLCJyZXBseVRvQ29tbWVudCIsImNvbW1lbnRJZCIsInJlcGx5VG9Db21tZW50TGF5b3V0IiwiZ2V0Q2hpbGRWaWV3cyIsImNvbW1lbnRzQ29weSIsInJlYWRlckxpYnJhcnkiLCJNYWluVmlldyIsInRlc3RSZXN1bHRzIiwiYnV0dG9uIiwiaW5wdXRXaWR0aCIsIm9yZGVyc0FyciIsIlNldHRpbmdzIiwiYm9va1RvcHMiLCJzaG93T2xkZXN0Qm9va3MiLCJzaG93TmV3ZXN0Qm9va3MiLCJzaG93TW9zdFBhZ2VzQm9va3MiLCJzaG93Qm9va3NXaXRoTG9uZ05hbWVzIiwic2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzIiwiZGVmYXVsdENvbmZpZyIsImIiLCJzaG93UmVzdWx0cyIsIm51bWJlcl9vZl9wYWdlcyIsImJvb2tfdGl0bGUiLCJhdXRob3JzIiwiZmluZEluZGV4IiwiYXV0aG9yIiwiYXV0aG9yX25hbWUiLCJib29rc0NvdW50IiwiUmVn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R0FqQkQ7QUFrQkEsRTs7O0VBdER3QzlGLGlEOztBQUFyQmdsQiwyRSIsImZpbGUiOiJteWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NvZGViYXNlL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NvdXJjZXMvbXlhcHAuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsImNsYXNzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iod2ViaXgpIHtcclxuICAgICAgICB0aGlzLndlYml4SmV0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndlYml4ID0gd2ViaXg7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzKCk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gdGhpcy5fY29udGFpbmVyID0gdGhpcy5hcHAgPSB0aGlzLl9wYXJlbnQgPSB0aGlzLl9yb290ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHNldFBhcmFtKGlkLCB2YWx1ZSwgdXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFbaWRdICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhW2lkXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWdtZW50LnVwZGF0ZShpZCwgdmFsdWUsIDApO1xyXG4gICAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRQYXJhbShpZCwgcGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9kYXRhW2lkXTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8ICFwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcuZ2V0UGFyYW0oaWQsIHBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnN1YnVybCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRQYXJlbnRWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAkJChpZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuZ2V0Um9vdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcm9vdC5xdWVyeVZpZXcoKG9iaiA9PiAob2JqLmNvbmZpZy5pZCA9PT0gaWQgfHwgb2JqLmNvbmZpZy5sb2NhbElkID09PSBpZCkgJiZcclxuICAgICAgICAgICAgICAgIChvYmouJHNjb3BlID09PSByb290LiRzY29wZSkpLCBcInNlbGZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb24ob2JqLCBuYW1lLCBjb2RlKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBvYmouYXR0YWNoRXZlbnQobmFtZSwgY29kZSk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goeyBvYmosIGlkIH0pO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuICAgIGNvbnRhaW5zKHZpZXcpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtpZCA9IHRoaXMuX3N1YnNba2V5XS52aWV3O1xyXG4gICAgICAgICAgICBpZiAoa2lkID09PSB2aWV3IHx8IGtpZC5jb250YWlucyh2aWV3KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlldyhuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWIuc3Vidmlldy52aWV3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFN1YlZpZXdJbmZvKG5hbWUpIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9zdWJzW25hbWUgfHwgXCJkZWZhdWx0XCJdO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3Vidmlldzogc3ViLCBwYXJlbnQ6IHRoaXMgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiX3RvcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YnNbbmFtZV0gPSB7IHVybDogXCJcIiwgaWQ6IG51bGwsIHBvcHVwOiB0cnVlIH07XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIGEgY2hpbGQgdmlldywgc2VhcmNoZXMgZm9yIG5lYXJlc3QgcGFyZW50IHdpdGggc3Vidmlld1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBfZGV0YWNoRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcclxuICAgICAgICBmb3IgKGxldCBpID0gZXZlbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGV2ZW50c1tpXS5vYmouZGV0YWNoRXZlbnQoZXZlbnRzW2ldLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveVN1YnMoKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSBzdWIgdmlld3NcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlZpZXcgPSB0aGlzLl9zdWJzW2tleV0udmlldztcclxuICAgICAgICAgICAgLy8gaXQgcG9zc2libGUgdGhhdCBzdWJ2aWV3IHdhcyBub3QgbG9hZGVkIHdpdGggYW55IGNvbnRlbnQgeWV0XHJcbiAgICAgICAgICAgIC8vIHNvIGNoZWNrIG9uIG51bGxcclxuICAgICAgICAgICAgaWYgKHN1YlZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHN1YlZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgfVxyXG4gICAgX2luaXRfdXJsX2RhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fc2VnbWVudC5jdXJyZW50KCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMud2ViaXguZXh0ZW5kKHRoaXMuX2RhdGEsIHVybC5wYXJhbXMsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgX2dldERlZmF1bHRTdWIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YnMuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vicy5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuX3N1YnNba2V5XTtcclxuICAgICAgICAgICAgaWYgKCFzdWIuYnJhbmNoICYmIHN1Yi52aWV3ICYmIGtleSAhPT0gXCJfdG9wXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gc3ViLnZpZXcuX2dldERlZmF1bHRTdWIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yb3V0ZWRfdmlldygpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ViID0gcGFyZW50Ll9nZXREZWZhdWx0U3ViKCk7XHJcbiAgICAgICAgaWYgKCFzdWIgJiYgc3ViICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fcm91dGVkX3ZpZXcoKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBwYXJzZSh1cmwpIHtcclxuICAgIC8vIHJlbW92ZSBzdGFydGluZyAvXHJcbiAgICBpZiAodXJsWzBdID09PSBcIi9cIikge1xyXG4gICAgICAgIHVybCA9IHVybC5zdWJzdHIoMSk7XHJcbiAgICB9XHJcbiAgICAvLyBzcGxpdCB1cmwgYnkgXCIvXCJcclxuICAgIGNvbnN0IHBhcnRzID0gdXJsLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gICAgLy8gZm9yIGVhY2ggcGFnZSBpbiB1cmxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0ZXN0ID0gcGFydHNbaV07XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICAgICAgLy8gZGV0ZWN0IHBhcmFtc1xyXG4gICAgICAgIC8vIHN1cHBvcnQgb2xkIFx0XHRcdHNvbWU6YT1iOmM9ZFxyXG4gICAgICAgIC8vIGFuZCBuZXcgbm90YXRpb25cdFx0c29tZT9hPWImYz1kXHJcbiAgICAgICAgbGV0IHBvcyA9IHRlc3QuaW5kZXhPZihcIjpcIik7XHJcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcG9zID0gdGVzdC5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGVzdC5zdWJzdHIocG9zICsgMSkuc3BsaXQoL1tcXDpcXD9cXCZdL2cpO1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgaGFzaCBvZiBuYW1lZCBwYXJhbXNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRjaHVuayA9IHBhcmFtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtkY2h1bmtbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGRjaHVua1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3RvcmUgcGFyc2VkIHZhbHVlc1xyXG4gICAgICAgIGNodW5rc1tpXSA9IHtcclxuICAgICAgICAgICAgcGFnZTogKHBvcyA+IC0xID8gdGVzdC5zdWJzdHIoMCwgcG9zKSA6IHRlc3QpLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHJlc3VsdCxcclxuICAgICAgICAgICAgaXNOZXc6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFycmF5IG9mIHBhZ2Ugb2JqZWN0c1xyXG4gICAgcmV0dXJuIGNodW5rcztcclxufVxyXG5mdW5jdGlvbiB1cmwyc3RyKHN0YWNrKSB7XHJcbiAgICBjb25zdCB1cmwgPSBbXTtcclxuICAgIGZvciAoY29uc3QgY2h1bmsgb2Ygc3RhY2spIHtcclxuICAgICAgICB1cmwucHVzaChcIi9cIiArIGNodW5rLnBhZ2UpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG9iajJzdHIoY2h1bmsucGFyYW1zKTtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHVybC5wdXNoKFwiP1wiICsgcGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsLmpvaW4oXCJcIik7XHJcbn1cclxuZnVuY3Rpb24gb2JqMnN0cihvYmopIHtcclxuICAgIGNvbnN0IHN0ciA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RyLnB1c2goXCImXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHIucHVzaChrZXkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5qb2luKFwiXCIpO1xyXG59XG5cbmNsYXNzIFJvdXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuX25leHQgPSAxO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygcm91dGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogcGFyc2Uocm91dGUpLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogcm91dGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgY3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgdGhpcy5fbmV4dF07XHJcbiAgICB9XHJcbiAgICBzdWJ1cmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgc2hpZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZSh0aGlzLnJvdXRlLCB0aGlzLmluZGV4ICsgdGhpcy5fbmV4dCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4ICsgMTsgaSA8IHVybC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHVybDJzdHIodGhpcy5zdWJ1cmwoKSk7XHJcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0ci5zdWJzdHIoMSkgOiBcIlwiO1xyXG4gICAgfVxyXG4gICAgX2pvaW4ocGF0aCwga2lkcykge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICBpZiAocGF0aCA9PT0gbnVsbCkgeyAvLyBjaGFuZ2Ugb2YgcGFyYW1ldGVycywgcm91dGUgZWxlbWVudHMgYXJlIG5vdCBhZmZlY3RlZFxyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvbGQgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICB1cmwgPSBvbGQuc2xpY2UoMCwgdGhpcy5pbmRleCArIChraWRzID8gdGhpcy5fbmV4dCA6IDApKTtcclxuICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuY29uY2F0KHBhcnNlKHBhdGgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0udmlldyA9IG9sZFtpXS52aWV3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFtpXSAmJiB1cmxbaV0ucGFnZSA9PT0gb2xkW2ldLnBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKHBhdGgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9qb2luKHBhdGgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodXJsKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnVybCA9IHVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS5wYXRoO1xyXG4gICAgfVxyXG4gICAgc2hvdyhwYXRoLCB2aWV3LCBraWRzKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fam9pbihwYXRoLCBraWRzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gdXJsMnN0cih1cmwpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdCxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm06IFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IHZpZXcgPyB2aWV3LmFwcCA6IG51bGw7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gY3JlYXRpbmcgYSBuZXcgcm91dGUsIGl0IHBvc3NpYmxlIHRoYXQgaXQgd2lsbCBub3QgaGF2ZSBhbnkgY29udGVudFxyXG4gICAgICAgICAgICAvLyBndWFyZCBpcyBub3QgbmVjZXNzYXJ5IGluIHN1Y2ggY2FzZVxyXG4gICAgICAgICAgICBpZiAoYXBwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhcHAuY2FsbEV2ZW50KFwiYXBwOmd1YXJkXCIsIFtvYmoucmVkaXJlY3QsIHZpZXcsIG9ial0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqLmNvbmZpcm0uY2F0Y2goKCkgPT4gb2JqLnJlZGlyZWN0ID0gbnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnJlZGlyZWN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5yZWRpcmVjdCAhPT0gcmVkaXJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuc2hvdyhvYmoucmVkaXJlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGUucGF0aCA9IHJlZGlyZWN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICByZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaXplKG4pIHtcclxuICAgICAgICB0aGlzLl9uZXh0ID0gbjtcclxuICAgIH1cclxuICAgIHNwbGl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0ge1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXggKyAxKSxcclxuICAgICAgICAgICAgcGF0aDogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJvdXRlLnVybC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcm91dGUucGF0aCA9IHVybDJzdHIocm91dGUudXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZShyb3V0ZSwgMCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgKGluZGV4IHx8IDApXTtcclxuICAgICAgICBpZiAoIWNodW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUudXJsLnB1c2goeyBwYWdlOiBcIlwiLCBwYXJhbXM6IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgY2h1bmsucGFnZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2h1bmsucGFyYW1zW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodGhpcy5yb3V0ZS51cmwpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEpldFZpZXcgZXh0ZW5kcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLndlYml4KTtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICAvL3RoaXMuJGNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgdWkodWksIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjb25maWcuY29udGFpbmVyIHx8IHVpLmNvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCBqZXR2aWV3ID0gdGhpcy5hcHAuY3JlYXRlVmlldyh1aSk7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChqZXR2aWV3KTtcclxuICAgICAgICBqZXR2aWV3LnJlbmRlcihjb250YWluZXIsIHRoaXMuX3NlZ21lbnQsIHRoaXMpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWkgIT09IFwib2JqZWN0XCIgfHwgKHVpIGluc3RhbmNlb2YgSmV0QmFzZSkpIHtcclxuICAgICAgICAgICAgLy8gcmF3IHdlYml4IFVJXHJcbiAgICAgICAgICAgIHJldHVybiBqZXR2aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGpldHZpZXcuZ2V0Um9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3cocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIC8vIGNvbnZlcnQgcGFyYW1ldGVycyBvYmplY3QgdG8gdXJsXHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHBhdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyYW0oa2V5LCBwYXRoW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhdGggPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGVsaWdhdGUgdG8gYXBwIGluIGNhc2Ugb2Ygcm9vdCBwcmVmaXhcclxuICAgICAgICAgICAgaWYgKHBhdGguc3Vic3RyKDAsIDEpID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3cocGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbG9jYWwgcGF0aCwgZG8gbm90aGluZ1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi9cIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwYXJlbnQgcGF0aCwgY2FsbCBwYXJlbnQgdmlld1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi4vXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LnNob3cocGF0aC5zdWJzdHIoMyksIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhcIi9cIiArIHBhdGguc3Vic3RyKDMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdWIgPSB0aGlzLmdldFN1YlZpZXdJbmZvKGNvbmZpZy50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViLnBhcmVudCAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWIucGFyZW50LnNob3cocGF0aCwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZy50YXJnZXQgJiYgY29uZmlnLnRhcmdldCAhPT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyRnJhbWVMb2NrKGNvbmZpZy50YXJnZXQsIHN1Yi5zdWJ2aWV3LCBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3coXCIvXCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hvdyh0aGlzLl9zZWdtZW50LCBwYXRoLCB0aGlzKTtcclxuICAgIH1cclxuICAgIF9zaG93KHNlZ21lbnQsIHBhdGgsIHZpZXcpIHtcclxuICAgICAgICByZXR1cm4gc2VnbWVudC5zaG93KHBhdGgsIHZpZXcsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0X3VybF9kYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQucm91dGUubGlua1JvdXRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZ2V0Um91dGVyKCkuc2V0KHNlZ21lbnQucm91dGUucGF0aCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3NlZ21lbnQucm91dGUucGF0aF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KF8kdmlldywgXyQpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICByZWFkeShfJHZpZXcsIF8kdXJsKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgY29uZmlnKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLndlYml4Lm1lc3NhZ2UoXCJWaWV3OkNvbmZpZyBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICB9XHJcbiAgICB1cmxDaGFuZ2UoXyR2aWV3LCBfJHVybCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95S2lkcygpO1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgYWN0dWFsIFVJXHJcbiAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgdXNlKHBsdWdpbiwgY29uZmlnKSB7XHJcbiAgICAgICAgcGx1Z2luKHRoaXMuYXBwLCB0aGlzLCBjb25maWcpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybCgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lLaWRzKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVN1YnMoKTtcclxuICAgICAgICB0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQucmVmcmVzaCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIodGhpcy5fc2VnbWVudCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIocm9vdCwgdXJsLCBwYXJlbnQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB1cmwgPSBuZXcgUm91dGUodXJsLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IHVybDtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5faW5pdF91cmxfZGF0YSgpO1xyXG4gICAgICAgIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgY29uc3QgX2NvbnRhaW5lciA9ICh0eXBlb2Ygcm9vdCA9PT0gXCJzdHJpbmdcIikgPyB0aGlzLndlYml4LnRvTm9kZShyb290KSA6IHJvb3Q7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciAhPT0gX2NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSBfY29udGFpbmVyO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB0aGlzLmdldFJvb3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcih1cmwpIHtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZygpO1xyXG4gICAgICAgIGlmIChjb25maWcudGhlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLnRoZW4oY2ZnID0+IHRoaXMuX3JlbmRlcl9maW5hbChjZmcsIHVybCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcl9maW5hbChjb25maWcsIHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcl9maW5hbChjb25maWcsIHVybCkge1xyXG4gICAgICAgIC8vIGdldCBwcmV2aW91cyB2aWV3IGluIHRoZSBzYW1lIHNsb3RcclxuICAgICAgICBsZXQgc2xvdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHNob3cgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRhaW5lci50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHNsb3QgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgICAgIGlmIChzbG90LnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLndlYml4LiQkKHNsb3QuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHZpZXcgYWxyZWFkeSBkZXN0cm95ZWRcclxuICAgICAgICBpZiAoIXRoaXMuYXBwIHx8ICFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuX3NlZ21lbnQuY3VycmVudCgpO1xyXG4gICAgICAgIC8vIHVzaW5nIHdyYXBwZXIgb2JqZWN0LCBzbyB1aSBjYW4gYmUgY2hhbmdlZCBmcm9tIGFwcDpyZW5kZXIgZXZlbnRcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7IHVpOiB7fSB9O1xyXG4gICAgICAgIHRoaXMuYXBwLmNvcHlDb25maWcoY29uZmlnLCByZXN1bHQudWksIHRoaXMuX3N1YnMpO1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDpyZW5kZXJcIiwgW3RoaXMsIHVybCwgcmVzdWx0XSk7XHJcbiAgICAgICAgcmVzdWx0LnVpLiRzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgLyogZGVzdHJveSBvbGQgSFRNTCBhdHRhY2hlZCB2aWV3cyBiZWZvcmUgY3JlYXRpbmcgbmV3IG9uZSAqL1xyXG4gICAgICAgIGlmICghc2xvdCAmJiBjdXJyZW50LmlzTmV3ICYmIGN1cnJlbnQudmlldykge1xyXG4gICAgICAgICAgICBjdXJyZW50LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciBhZGRpbmcgaW5zaWRlIG9mIG11bHRpdmlldyAtIHByZXNlcnZlIG9sZCBpZFxyXG4gICAgICAgICAgICBpZiAoc2xvdCAmJiAhc2hvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkdWkgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBvbGR1aS5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5uYW1lID09PSBcIm11bHRpdmlld1wiICYmICFyZXN1bHQudWkuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudWkuaWQgPSBvbGR1aS5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuYXBwLndlYml4LnVpKHJlc3VsdC51aSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgY29uc3QgYXNXaW4gPSB0aGlzLl9yb290O1xyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgdXJsIGFkZGVkIHRvIGlnbm9yZSB0aGlzLnVpIGNhbGxzXHJcbiAgICAgICAgICAgIGlmIChzaG93ICYmIGFzV2luLnNldFBvc2l0aW9uICYmICFhc1dpbi5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgYXNXaW4uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNoZWNrLCBpZiB3ZSBhcmUgcmVwbGFjaW5nIHNvbWUgb2xkZXIgdmlld1xyXG4gICAgICAgICAgICBpZiAoc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsb3QudmlldyAmJiBzbG90LnZpZXcgIT09IHRoaXMgJiYgc2xvdC52aWV3ICE9PSB0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsb3Qudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbG90LmlkID0gdGhpcy5fcm9vdC5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQYXJlbnRWaWV3KCkgfHwgIXRoaXMuYXBwLmFwcClcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB3ZSBoYXZlIHN1YmFwcCwgc2V0IHdob2xlIGFwcCBhcyBhIHZpZXdcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyBvbiBkZXN0cnVjdGlvbiwgdGhlIHdob2xlIGFwcCB3aWxsIGJlIGRlc3Ryb3llZFxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3QudmlldyA9IHRoaXMuYXBwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzTmV3KSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2luaXQodGhpcy5fcm9vdCwgdXJsKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdFVybCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZHkodGhpcy5fcm9vdCwgdXJsLnN1YnVybCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBQcm9taXNlLnJlamVjdChlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNhdGNoKGVyciA9PiB0aGlzLl9pbml0RXJyb3IodGhpcywgZXJyKSk7XHJcbiAgICB9XHJcbiAgICBfaW5pdCh2aWV3LCB1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0KHZpZXcsIHVybC5zdWJ1cmwoKSk7XHJcbiAgICB9XHJcbiAgICBfdXJsQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDp1cmxjaGFuZ2VcIiwgW3RoaXMsIHRoaXMuX3NlZ21lbnRdKTtcclxuICAgICAgICBjb25zdCB3YWl0cyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLl9zdWJzW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IHdhaXQgPSB0aGlzLl9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIGlmICh3YWl0KSB7XHJcbiAgICAgICAgICAgICAgICB3YWl0cy5wdXNoKHdhaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh3YWl0cykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybENoYW5nZSh0aGlzLl9yb290LCB0aGlzLl9zZWdtZW50LnN1YnVybCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgcGF0aCkge1xyXG4gICAgICAgIC8vIGlmIHN1YnZpZXcgaXMgbm90IG9jY3VwaWVkIGJ5IHNvbWUgcmVuZGVyaW5nIHlldFxyXG4gICAgICAgIGlmICghZnJhbWUubG9jaykge1xyXG4gICAgICAgICAgICAvLyByZXRyZWl2ZSBhbmQgc3RvcmUgcmVuZGVyaW5nIGVuZCBwcm9taXNlXHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2sgPSB0aGlzLl9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKTtcclxuICAgICAgICAgICAgaWYgKGxvY2spIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGxvY2sgYWZ0ZXIgZnJhbWUgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICAvLyBhcyBwcm9taXNlLmZpbmFsbHkgaXMgbm90IHN1cHBvcnRlZCBieSAgV2ViaXggbGVzc2VyIHRoYW4gNi4yXHJcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBhIG1vcmUgdmVyYm9zZSBub3RhdGlvblxyXG4gICAgICAgICAgICAgICAgZnJhbWUubG9jayA9IGxvY2sudGhlbigoKSA9PiBmcmFtZS5sb2NrID0gbnVsbCwgKCkgPT4gZnJhbWUubG9jayA9IG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldHVybiByZW5kZXJpbmcgZW5kIHByb21pc2VcclxuICAgICAgICByZXR1cm4gZnJhbWUubG9jaztcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKSB7XHJcbiAgICAgICAgLy9kZWZhdWx0IHJvdXRlXHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlZ21lbnQubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGEgbmV4dCBzZWdtZW50IGluIHVybCwgcmVuZGVyIGl0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgdGhpcy5fc2VnbWVudC5zaGlmdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmcmFtZS52aWV3ICYmIGZyYW1lLnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBubyBuZXh0IHNlZ21lbnQsIGRlbGV0ZSB0aGUgZXhpc3Rpbmcgc3ViLXZpZXdcclxuICAgICAgICAgICAgICAgIGZyYW1lLnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUudmlldyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiBuZXcgcGF0aCBwcm92aWRlZCwgc2V0IGl0IHRvIHRoZSBmcmFtZVxyXG4gICAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZyYW1lLnVybCA9IHBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGluIGNhc2Ugb2Ygcm91dGVkIHN1Yi12aWV3XHJcbiAgICAgICAgaWYgKGZyYW1lLnJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBuZXcgcGF0aCBmb3Igc3ViLXZpZXdcclxuICAgICAgICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmcmFtZS5yb3V0ZS5zaG93KHBhdGgsIGZyYW1lLnZpZXcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCBmcmFtZS5yb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkbyBub3QgdHJpZ2dlciBvbkNoYW5nZSBmb3IgaXNvbGF0ZWQgc3ViLXZpZXdzXHJcbiAgICAgICAgICAgIGlmIChmcmFtZS5icmFuY2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlldyA9IGZyYW1lLnZpZXc7XHJcbiAgICAgICAgLy8gaWYgdmlldyBkb2Vzbid0IGV4aXN0cyB5ZXQsIGluaXQgaXRcclxuICAgICAgICBpZiAoIXZpZXcgJiYgZnJhbWUudXJsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhbWUudXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcsIHNvIHdlIGhhdmUgaXNvbGF0ZWQgc3VidmlldyB1cmxcclxuICAgICAgICAgICAgICAgIGZyYW1lLnJvdXRlID0gbmV3IFJvdXRlKGZyYW1lLnVybCwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgZnJhbWUucm91dGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0LCBzbyB3ZSBoYXZlIGFuIGVtYmVkZWQgc3Vidmlld1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFtZS51cmwgPT09IFwiZnVuY3Rpb25cIiAmJiAhKHZpZXcgaW5zdGFuY2VvZiBmcmFtZS51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IG5ldyBmcmFtZS51cmwodGhpcy5hcHAsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IGZyYW1lLnVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0cmlnZ2VyIG9uQ2hhbmdlIGZvciBhbHJlYWR5IGV4aXN0ZWQgdmlld1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihmcmFtZSwgKGZyYW1lLnJvdXRlIHx8IHRoaXMuX3NlZ21lbnQpLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaW5pdEVycm9yKHZpZXcsIGVycikge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIGlmIHZpZXcgaXMgZGVzdHJveWVkLCBpZ25vcmUgYW55IHZpZXcgcmVsYXRlZCBlcnJvcnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5lcnJvcihcImFwcDplcnJvcjppbml0dmlld1wiLCBbZXJyLCB2aWV3XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZVN1YlZpZXcoc3ViLCBzdWJ1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAuY3JlYXRlRnJvbVVSTChzdWJ1cmwuY3VycmVudCgpLCBzdWIudmlldykudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKHN1Yiwgc3VidXJsLCB0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9kZXN0cm95S2lkcygpIHtcclxuICAgICAgICAvLyBkZXN0cm95IGNoaWxkIHZpZXdzXHJcbiAgICAgICAgY29uc3QgdWlzID0gdGhpcy5fY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHVpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAodWlzW2ldICYmIHVpc1tpXS5kZXN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICB1aXNbaV0uZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHZhcnMgZm9yIGJldHRlciBHQyBwcm9jZXNzaW5nXHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxufVxuXG4vLyB3cmFwcGVyIGZvciByYXcgb2JqZWN0cyBhbmQgSmV0IDEueCBzdHJ1Y3RzXHJcbmNsYXNzIEpldFZpZXdSYXcgZXh0ZW5kcyBKZXRWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuX3VpID0gY29uZmlnLnVpO1xyXG4gICAgfVxyXG4gICAgY29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBTdWJSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZywgYXBwKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmFwcDtcclxuICAgICAgICBhLmFwcC5nZXRSb3V0ZXIoKS5zZXQoYS5fc2VnbWVudC5hcHBlbmQodGhpcy5wYXRoKSwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxufVxuXG5sZXQgX29uY2UgPSB0cnVlO1xyXG5jbGFzcyBKZXRBcHBCYXNlIGV4dGVuZHMgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25zdCB3ZWJpeCA9IChjb25maWcgfHwge30pLndlYml4IHx8IHdpbmRvdy53ZWJpeDtcclxuICAgICAgICBzdXBlcih3ZWJpeCk7XHJcbiAgICAgICAgLy8gaW5pdCBjb25maWdcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMud2ViaXguZXh0ZW5kKHtcclxuICAgICAgICAgICAgbmFtZTogXCJBcHBcIixcclxuICAgICAgICAgICAgdmVyc2lvbjogXCIxLjBcIixcclxuICAgICAgICAgICAgc3RhcnQ6IFwiL2hvbWVcIlxyXG4gICAgICAgIH0sIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLmNvbmZpZy5hcHA7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2VzID0ge307XHJcbiAgICAgICAgdGhpcy53ZWJpeC5leHRlbmQodGhpcywgdGhpcy53ZWJpeC5FdmVudFN5c3RlbSk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlNlZ21lbnQuc3VidXJsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmxTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlNlZ21lbnQudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGdldFNlcnZpY2UobmFtZSkge1xyXG4gICAgICAgIGxldCBvYmogPSB0aGlzLl9zZXJ2aWNlc1tuYW1lXTtcclxuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHRoaXMuX3NlcnZpY2VzW25hbWVdID0gb2JqKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgc2V0U2VydmljZShuYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZXNbbmFtZV0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdldFN1YlZpZXcoKS5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgLy8gY29weSBvYmplY3QgYW5kIGNvbGxlY3QgZXh0cmEgaGFuZGxlcnNcclxuICAgIGNvcHlDb25maWcob2JqLCB0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIC8vIHJhdyB1aSBjb25maWdcclxuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgSmV0QmFzZSB8fFxyXG4gICAgICAgICAgICAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSkge1xyXG4gICAgICAgICAgICBvYmogPSB7ICRzdWJ2aWV3OiBvYmogfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3VidmlldyBwbGFjZWhvbGRlclxyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqLiRzdWJ2aWV3ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkU3ViVmlldyhvYmosIHRhcmdldCwgY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcHJvY2VzcyBzdWItcHJvcGVydGllc1xyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCAob2JqIGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1ldGhvZCBpbiBvYmopIHtcclxuICAgICAgICAgICAgbGV0IHBvaW50ID0gb2JqW21ldGhvZF07XHJcbiAgICAgICAgICAgIC8vIHZpZXcgY2xhc3NcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2ludCA9PT0gXCJmdW5jdGlvblwiICYmIHBvaW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ID0geyAkc3VidmlldzogcG9pbnQgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9pbnQgJiYgdHlwZW9mIHBvaW50ID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgICAgICAhKHBvaW50IGluc3RhbmNlb2YgdGhpcy53ZWJpeC5EYXRhQ29sbGVjdGlvbikgJiYgIShwb2ludCBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwb2ludCBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IG5ldyBEYXRlKHBvaW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvcHlDb25maWcocG9pbnQsIChwb2ludCBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fSksIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gcG9pbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIGdldFJvdXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcm91dGVyO1xyXG4gICAgfVxyXG4gICAgY2xpY2tIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAoZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyaWdnZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJpZ2dlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvclZpZXcodGFyZ2V0LCB2aWV3ID0+IHZpZXcuYXBwLnRyaWdnZXIodHJpZ2dlcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwicm91dGVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocm91dGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JWaWV3KHRhcmdldCwgdmlldyA9PiB2aWV3LnNob3cocm91dGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlldygpLmdldFJvb3QoKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdWJTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXcoKS5yZWZyZXNoKCkudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3RoaXMuZ2V0VXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkVmlldyh1cmwpIHtcclxuICAgICAgICBjb25zdCB2aWV3cyA9IHRoaXMuY29uZmlnLnZpZXdzO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGlmICh1cmwgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9sb2FkRXJyb3IoXCJcIiwgbmV3IEVycm9yKFwiV2ViaXggSmV0OiBFbXB0eSB1cmwgc2VnbWVudFwiKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodmlld3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygdmlld3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBsb2FkaW5nIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmlld3ModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZWRlZmluZWQgaGFzaFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdzW3VybF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBcIl9ibGFua1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkVmlld0R5bmFtaWModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkRXJyb3IodXJsLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3VzdG9tIGhhbmRsZXIgY2FuIHJldHVybiB2aWV3IG9yIGl0cyBwcm9taXNlXHJcbiAgICAgICAgaWYgKCFyZXN1bHQudGhlbikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IGVycm9yIGhhbmRsZXJcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRcclxuICAgICAgICAgICAgLnRoZW4obW9kdWxlID0+IG1vZHVsZS5fX2VzTW9kdWxlID8gbW9kdWxlLmRlZmF1bHQgOiBtb2R1bGUpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5fbG9hZEVycm9yKHVybCwgZXJyKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIF9mb3JWaWV3KHRhcmdldCwgaGFuZGxlcikge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLndlYml4LiQkKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgaGFuZGxlcih2aWV3LiRzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2xvYWRWaWV3RHluYW1pYyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNyZWF0ZUZyb21VUkwoY2h1bmssIG5vdykge1xyXG4gICAgICAgIGxldCB2aWV3O1xyXG4gICAgICAgIGlmIChjaHVuay5pc05ldyB8fCAhY2h1bmsudmlldykge1xyXG4gICAgICAgICAgICB2aWV3ID0gdGhpcy5sb2FkVmlldyhjaHVuay5wYWdlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odWkgPT4gdGhpcy5jcmVhdGVWaWV3KHVpLCBuYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2aWV3ID0gUHJvbWlzZS5yZXNvbHZlKGNodW5rLnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmlldztcclxuICAgIH1cclxuICAgIGNyZWF0ZVZpZXcodWksIG5hbWUpIHtcclxuICAgICAgICBsZXQgb2JqO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBpZiAodWkucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QXBwQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgY2xhc3NcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdWkoeyBhcHA6IHRoaXMsIG5hbWUsIHJvdXRlcjogU3ViUm91dGVyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGNsYXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHVpKHRoaXMsIHsgbmFtZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGZhY3RvcnkgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgICAgICB1aSA9IHVpKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1aSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgb2JqID0gdWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBVSSBvYmplY3RcclxuICAgICAgICAgICAgb2JqID0gbmV3IEpldFZpZXdSYXcodGhpcywgeyBuYW1lLCB1aSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIC8vIHNob3cgdmlldyBwYXRoXHJcbiAgICBzaG93KHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLl9jb250YWluZXIsICh1cmwgfHwgdGhpcy5jb25maWcuc3RhcnQpKTtcclxuICAgIH1cclxuICAgIC8vIGV2ZW50IGhlbHBlcnNcclxuICAgIHRyaWdnZXIobmFtZSwgLi4ucmVzdCkge1xyXG4gICAgICAgIHRoaXMuYXBwbHkobmFtZSwgcmVzdCk7XHJcbiAgICB9XHJcbiAgICBhcHBseShuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQobmFtZSwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICBhY3Rpb24obmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlYml4LmJpbmQoZnVuY3Rpb24gKC4uLnJlc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHBseShuYW1lLCByZXN0KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50KG5hbWUsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgdXNlKHBsdWdpbiwgY29uZmlnKSB7XHJcbiAgICAgICAgcGx1Z2luKHRoaXMsIG51bGwsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBlcnJvcihuYW1lLCBlcikge1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KG5hbWUsIGVyKTtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDplcnJvclwiLCBlcik7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUgKi9cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGVidWcpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcltpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJbaV0gaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gZXJbaV0ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKFwiTW9kdWxlIGJ1aWxkIGZhaWxlZFwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHgxYlxcW1swLTk7XSptL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGA8cHJlIHN0eWxlPSdmb250LXNpemU6MTZweDsgYmFja2dyb3VuZC1jb2xvcjogI2VjNjg3MzsgY29sb3I6ICMwMDA7IHBhZGRpbmc6MTBweDsnPiR7dGV4dH08L3ByZT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIjxicj48YnI+Q2hlY2sgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2ViaXgubWVzc2FnZSh7IHR5cGU6IFwiZXJyb3JcIiwgdGV4dDogdGV4dCwgZXhwaXJlOiAtMSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIHRzbGludDplbmFibGUgKi9cclxuICAgIH1cclxuICAgIC8vIHJlbmRlcnMgdG9wIHZpZXdcclxuICAgIHJlbmRlcihyb290LCB1cmwsIHBhcmVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9ICh0eXBlb2Ygcm9vdCA9PT0gXCJzdHJpbmdcIikgP1xyXG4gICAgICAgICAgICB0aGlzLndlYml4LnRvTm9kZShyb290KSA6XHJcbiAgICAgICAgICAgIChyb290IHx8IGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0SW5pdCA9ICF0aGlzLiRyb3V0ZXI7XHJcbiAgICAgICAgbGV0IHBhdGggPSBudWxsO1xyXG4gICAgICAgIGlmIChmaXJzdEluaXQpIHtcclxuICAgICAgICAgICAgaWYgKF9vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4LmF0dGFjaEV2ZW50KFwib25DbGlja1wiLCBlID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpKTtcclxuICAgICAgICAgICAgICAgIF9vbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IG5ldyBSb3V0ZSh1cmwsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YlNlZ21lbnQgPSB0aGlzLl9maXJzdF9zdGFydCh1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJTZWdtZW50LnJvdXRlLmxpbmtSb3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdXJsLnNwbGl0KCkucm91dGUucGF0aCB8fCB0aGlzLmNvbmZpZy5zdGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB1cmwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldFN1YlZpZXcoKTtcclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gdGhpcy5fc3ViU2VnbWVudDtcclxuICAgICAgICBjb25zdCByZWFkeSA9IHNlZ21lbnQuc2hvdyhwYXRoLCB0b3ApXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuY3JlYXRlRnJvbVVSTChzZWdtZW50LmN1cnJlbnQoKSwgdG9wKSlcclxuICAgICAgICAgICAgLnRoZW4odmlldyA9PiB2aWV3LnJlbmRlcihyb290LCBzZWdtZW50KSlcclxuICAgICAgICAgICAgLnRoZW4oYmFzZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5zZXQoc2VnbWVudC5yb3V0ZS5wYXRoLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3RoaXMuZ2V0VXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJhc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRoaXMucmVhZHkudGhlbigoKSA9PiByZWFkeSk7XHJcbiAgICAgICAgcmV0dXJuIHJlYWR5O1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlldygpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3ViU2VnbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5fc3ViU2VnbWVudC5jdXJyZW50KCkudmlldztcclxuICAgICAgICAgICAgaWYgKHZpZXcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKZXRWaWV3KHRoaXMsIHt9KTtcclxuICAgIH1cclxuICAgIF9maXJzdF9zdGFydChyb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQgPSByb3V0ZTtcclxuICAgICAgICBjb25zdCBjYiA9IChhKSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93KGEpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHRoaXMuJHJvdXRlciA9IG5ldyAodGhpcy5jb25maWcucm91dGVyKShjYiwgdGhpcy5jb25maWcsIHRoaXMpO1xyXG4gICAgICAgIC8vIHN0YXJ0IGFuaW1hdGlvbiBmb3IgdG9wLWxldmVsIGFwcFxyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkgJiYgdGhpcy5jb25maWcuYW5pbWF0aW9uICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwuYWRkQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwucmVtb3ZlQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5hZGRDc3Mobm9kZSwgXCJ3ZWJpeGFwcFwiKTtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIG5vIHVybCBkZWZpbmVkLCBjaGVjayByb3V0ZXIgZmlyc3RcclxuICAgICAgICAgICAgbGV0IHVybFN0cmluZyA9IHRoaXMuJHJvdXRlci5nZXQoKTtcclxuICAgICAgICAgICAgaWYgKCF1cmxTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHVybFN0cmluZyA9IHRoaXMuY29uZmlnLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnNldCh1cmxTdHJpbmcsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKHVybFN0cmluZywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgIHJvdXRlLmN1cnJlbnQoKS52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHJvdXRlLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZS5zcGxpdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSBuZXcgUm91dGUodGhpcy5jb25maWcuc3RhcnQsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgIH1cclxuICAgIC8vIGVycm9yIGR1cmluZyB2aWV3IHJlc29sdmluZ1xyXG4gICAgX2xvYWRFcnJvcih1cmwsIGVycikge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoXCJhcHA6ZXJyb3I6cmVzb2x2ZVwiLCBbZXJyLCB1cmxdKTtcclxuICAgICAgICByZXR1cm4geyB0ZW1wbGF0ZTogXCIgXCIgfTtcclxuICAgIH1cclxuICAgIGFkZFN1YlZpZXcob2JqLCB0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IG9iai4kc3VidmlldyAhPT0gdHJ1ZSA/IG9iai4kc3VidmlldyA6IG51bGw7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG9iai5uYW1lIHx8ICh1cmwgPyB0aGlzLndlYml4LnVpZCgpIDogXCJkZWZhdWx0XCIpO1xyXG4gICAgICAgIHRhcmdldC5pZCA9IG9iai5pZCB8fCBcInNcIiArIHRoaXMud2ViaXgudWlkKCk7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IGNvbmZpZ1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgaWQ6IHRhcmdldC5pZCxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBicmFuY2g6IG9iai5icmFuY2gsXHJcbiAgICAgICAgICAgIHBvcHVwOiBvYmoucG9wdXBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB2aWV3LnBvcHVwID8gbnVsbCA6IHRhcmdldDtcclxuICAgIH1cclxufVxuXG5jbGFzcyBIYXNoUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICB0aGlzLl9kZXRlY3RQcmVmaXgoKTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB0aGlzLmNiKHRoaXMuZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZSA9IHBhdGguc3BsaXQoXCI/XCIsIDIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXNba2V5XSA9PT0gY29tcGFyZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBrZXkgKyAoY29tcGFyZS5sZW5ndGggPiAxID8gXCI/XCIgKyBjb21wYXJlWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCkgIT09IHBhdGgpIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHRoaXMucHJlZml4ICsgdGhpcy5zdWZpeCArIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX2dldFJhdygpLnJlcGxhY2UodGhpcy5wcmVmaXgsIFwiXCIpLnJlcGxhY2UodGhpcy5zdWZpeCwgXCJcIik7XHJcbiAgICAgICAgcGF0aCA9IHBhdGggIT09IFwiL1wiID8gcGF0aCA6IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJlID0gcGF0aC5zcGxpdChcIj9cIiwgMik7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnLnJvdXRlc1tjb21wYXJlWzBdXTtcclxuICAgICAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGtleSArIChjb21wYXJlLmxlbmd0aCA+IDEgPyBcIj9cIiArIGNvbXBhcmVbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuICAgIF9kZXRlY3RQcmVmaXgoKSB7XHJcbiAgICAgICAgLy8gdXNlIFwiIyFcIiBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgIGNvbnN0IHN1Zml4ID0gdGhpcy5jb25maWcucm91dGVyUHJlZml4O1xyXG4gICAgICAgIHRoaXMuc3VmaXggPSBcIiNcIiArICgodHlwZW9mIHN1Zml4ID09PSBcInVuZGVmaW5lZFwiKSA/IFwiIVwiIDogc3VmaXgpO1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIiwgMilbMF07XHJcbiAgICB9XHJcbiAgICBfZ2V0UmF3KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgfVxyXG59XG5cbmxldCBpc1BhdGNoZWQgPSBmYWxzZTtcclxuZnVuY3Rpb24gcGF0Y2godykge1xyXG4gICAgaWYgKGlzUGF0Y2hlZCB8fCAhdykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlzUGF0Y2hlZCA9IHRydWU7XHJcbiAgICAvLyBjdXN0b20gcHJvbWlzZSBmb3IgSUU4XHJcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XHJcbiAgICBpZiAoIXdpbi5Qcm9taXNlKSB7XHJcbiAgICAgICAgd2luLlByb21pc2UgPSB3LnByb21pc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2ZXJzaW9uID0gdy52ZXJzaW9uLnNwbGl0KFwiLlwiKTtcclxuICAgIC8vIHdpbGwgYmUgZml4ZWQgaW4gd2ViaXggNS4zXHJcbiAgICBpZiAodmVyc2lvblswXSAqIDEwICsgdmVyc2lvblsxXSAqIDEgPCA1Mykge1xyXG4gICAgICAgIHcudWkuZnJlZXplID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgLy8gZGlzYWJsZWQgYmVjYXVzZSB3ZWJpeCBqZXQgNS4wIGNhbid0IGhhbmRsZSByZXNpemUgb2Ygc2Nyb2xsdmlldyBjb3JyZWN0bHlcclxuICAgICAgICAgICAgLy8gdy51aS4kZnJlZXplID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gaGFuZGxlcigpO1xyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy50aGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXMudGhlbihmdW5jdGlvbiAoc29tZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHcudWkuJGZyZWV6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHcudWkucmVzaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHcudWkuJGZyZWV6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdy51aS5yZXNpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBhZGRpbmcgdmlld3MgYXMgY2xhc3Nlc1xyXG4gICAgY29uc3QgYmFzZUFkZCA9IHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUuYWRkVmlldztcclxuICAgIGNvbnN0IGJhc2VSZW1vdmUgPSB3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLnJlbW92ZVZpZXc7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgYWRkVmlldyh2aWV3LCBpbmRleCkge1xyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIGxvZ2ljIG9ubHkgZm9yIHdpZGdldHMgaW5zaWRlIG9mIGpldC12aWV3XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSBjYXNlIHdoZW4gYWRkVmlldyB1c2VkIHdpdGggYWxyZWFkeSBpbml0aWFsaXplZCB3aWRnZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLndlYml4SmV0ICYmICF2aWV3LnF1ZXJ5Vmlldykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganZpZXcgPSB0aGlzLiRzY29wZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHZpZXcgPSBqdmlldy5hcHAuY29weUNvbmZpZyh2aWV3LCB7fSwgc3Vicyk7XHJcbiAgICAgICAgICAgICAgICBiYXNlQWRkLmFwcGx5KHRoaXMsIFt2aWV3LCBpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3Vicykge1xyXG4gICAgICAgICAgICAgICAgICAgIGp2aWV3Ll9yZW5kZXJGcmFtZShrZXksIHN1YnNba2V5XSwgbnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp2aWV3Ll9zdWJzW2tleV0gPSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldy5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYXNlQWRkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVZpZXcoKSB7XHJcbiAgICAgICAgICAgIGJhc2VSZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLndlYml4SmV0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0gdGhpcy4kc2NvcGUuX3N1YnM7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhbGwgc3ViLXZpZXdzLCBkZXN0cm95IGFuZCBjbGVhbiB0aGUgcmVtb3ZlZCBvbmVcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN1YnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdy4kJCh0ZXN0LmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB3LmV4dGVuZCh3LnVpLmxheW91dC5wcm90b3R5cGUsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICB3LmV4dGVuZCh3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLCBjb25maWcsIHRydWUpO1xyXG4gICAgLy8gd3JhcHBlciBmb3IgdXNpbmcgSmV0IEFwcHMgYXMgdmlld3NcclxuICAgIHcucHJvdG9VSSh7XHJcbiAgICAgICAgbmFtZTogXCJqZXRhcHBcIixcclxuICAgICAgICAkaW5pdChjZmcpIHtcclxuICAgICAgICAgICAgdGhpcy4kYXBwID0gbmV3IHRoaXMuYXBwKGNmZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdy51aWQoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjZmcuYm9keSA9IHsgaWQgfTtcclxuICAgICAgICAgICAgdGhpcy4kcmVhZHkucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHAucmVuZGVyKHsgaWQgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy4kYXBwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luID0gdGhpcy4kYXBwW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbiA9PT0gXCJmdW5jdGlvblwiICYmICF0aGlzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBvcmlnaW4uYmluZCh0aGlzLiRhcHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgdy51aS5wcm94eSk7XHJcbn1cblxuY2xhc3MgSmV0QXBwIGV4dGVuZHMgSmV0QXBwQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25maWcucm91dGVyID0gY29uZmlnLnJvdXRlciB8fCBIYXNoUm91dGVyO1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgcGF0Y2godGhpcy53ZWJpeCk7XHJcbiAgICB9XHJcbiAgICBfbG9hZFZpZXdEeW5hbWljKHVybCkge1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC4vZywgXCIvXCIpO1xyXG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiamV0LXZpZXdzL1wiICsgdXJsKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBTdG9yZVJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnLCBhcHApIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZSB8fCBhcHAud2ViaXguc3RvcmFnZS5zZXNzaW9uO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IChjb25maWcuc3RvcmVOYW1lIHx8IGNvbmZpZy5pZCArIFwiOnJvdXRlXCIpO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UucHV0KHRoaXMubmFtZSwgcGF0aCk7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQodGhpcy5uYW1lKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBVcmxSb3V0ZXIgZXh0ZW5kcyBIYXNoUm91dGVyIHtcclxuICAgIF9kZXRlY3RQcmVmaXgoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVmaXggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3VmaXggPSB0aGlzLmNvbmZpZy5yb3V0ZXJQcmVmaXggfHwgXCJcIjtcclxuICAgIH1cclxuICAgIF9nZXRSYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEVtcHR5Um91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBfJGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBVbmxvYWRHdWFyZChhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgdmlldy5vbihhcHAsIGBhcHA6Z3VhcmRgLCBmdW5jdGlvbiAoXyR1cmwsIHBvaW50LCBwcm9taXNlKSB7XHJcbiAgICAgICAgaWYgKHBvaW50ID09PSB2aWV3IHx8IHBvaW50LmNvbnRhaW5zKHZpZXcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGNvbmZpZygpO1xyXG4gICAgICAgICAgICBpZiAocmVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5jb25maXJtID0gUHJvbWlzZS5yZWplY3QocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UuY29uZmlybSA9IHByb21pc2UuY29uZmlybS50aGVuKCgpID0+IHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxuXG4vLyAgICAgKGMpIDIwMTItMjAxOCBBaXJibmIsIEluYy5cblxuLy8gdmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xuZnVuY3Rpb24gaGFzKHN0b3JlLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdG9yZSwga2V5KTtcbn1cbi8vIHZhciBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKTtcbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzKG9iaiwga2V5KSkge1xuICAgICAgaGFuZGxlci5jYWxsKChjb250ZXh0IHx8IG9iaiksIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG4vLyB2YXIgdHJpbSA9IHJlcXVpcmUoJ3N0cmluZy5wcm90b3R5cGUudHJpbScpO1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xufVxuLy8gdmFyIHdhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgbWVzc2FnZTtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICB0cnkgeyB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7IH0gY2F0Y2ggKHgpIHt9XG59XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdDtcblxuLy8gIyMjIyBQbHVyYWxpemF0aW9uIG1ldGhvZHNcbi8vIFRoZSBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgdGhlIGRpZmZlcmVudCBwaHJhc2UgcG9zc2liaWxpdGllcy5cbnZhciBkZWxpbWl0ZXIgPSAnfHx8fCc7XG5cbnZhciBydXNzaWFuUGx1cmFsR3JvdXBzID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIGVuZCA9IG4gJSAxMDtcbiAgaWYgKG4gIT09IDExICYmIGVuZCA9PT0gMSkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmICgyIDw9IGVuZCAmJiBlbmQgPD0gNCAmJiAhKG4gPj0gMTIgJiYgbiA8PSAxNCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMjtcbn07XG5cbi8vIE1hcHBpbmcgZnJvbSBwbHVyYWxpemF0aW9uIGdyb3VwIHBsdXJhbCBsb2dpYy5cbnZhciBwbHVyYWxUeXBlcyA9IHtcbiAgYXJhYmljOiBmdW5jdGlvbiAobikge1xuICAgIC8vIGh0dHA6Ly93d3cuYXJhYmV5ZXMub3JnL1BsdXJhbF9Gb3Jtc1xuICAgIGlmIChuIDwgMykgeyByZXR1cm4gbjsgfVxuICAgIHZhciBsYXN0VHdvID0gbiAlIDEwMDtcbiAgICBpZiAobGFzdFR3byA+PSAzICYmIGxhc3RUd28gPD0gMTApIHJldHVybiAzO1xuICAgIHJldHVybiBsYXN0VHdvID49IDExID8gNCA6IDU7XG4gIH0sXG4gIGJvc25pYW5fc2VyYmlhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgY2hpbmVzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgY3JvYXRpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGZyZW5jaDogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gPiAxID8gMSA6IDA7IH0sXG4gIGdlcm1hbjogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gIT09IDEgPyAxIDogMDsgfSxcbiAgcnVzc2lhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgbGl0aHVhbmlhbjogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiAlIDEwID09PSAxICYmIG4gJSAxMDAgIT09IDExKSB7IHJldHVybiAwOyB9XG4gICAgcmV0dXJuIG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA5ICYmIChuICUgMTAwIDwgMTEgfHwgbiAlIDEwMCA+IDE5KSA/IDEgOiAyO1xuICB9LFxuICBjemVjaDogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiA9PT0gMSkgeyByZXR1cm4gMDsgfVxuICAgIHJldHVybiAobiA+PSAyICYmIG4gPD0gNCkgPyAxIDogMjtcbiAgfSxcbiAgcG9saXNoOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuID09PSAxKSB7IHJldHVybiAwOyB9XG4gICAgdmFyIGVuZCA9IG4gJSAxMDtcbiAgICByZXR1cm4gMiA8PSBlbmQgJiYgZW5kIDw9IDQgJiYgKG4gJSAxMDAgPCAxMCB8fCBuICUgMTAwID49IDIwKSA/IDEgOiAyO1xuICB9LFxuICBpY2VsYW5kaWM6IGZ1bmN0aW9uIChuKSB7IHJldHVybiAobiAlIDEwICE9PSAxIHx8IG4gJSAxMDAgPT09IDExKSA/IDEgOiAwOyB9LFxuICBzbG92ZW5pYW46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIGxhc3RUd28gPSBuICUgMTAwO1xuICAgIGlmIChsYXN0VHdvID09PSAxKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGxhc3RUd28gPT09IDIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAobGFzdFR3byA9PT0gMyB8fCBsYXN0VHdvID09PSA0KSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgcmV0dXJuIDM7XG4gIH1cbn07XG5cblxuLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgdG8gaW5kaXZpZHVhbCBsYW5ndWFnZSBjb2Rlcy9sb2NhbGVzLlxuLy8gV2lsbCBsb29rIHVwIGJhc2VkIG9uIGV4YWN0IG1hdGNoLCBpZiBub3QgZm91bmQgYW5kIGl0J3MgYSBsb2NhbGUgd2lsbCBwYXJzZSB0aGUgbG9jYWxlXG4vLyBmb3IgbGFuZ3VhZ2UgY29kZSwgYW5kIGlmIHRoYXQgZG9lcyBub3QgZXhpc3Qgd2lsbCBkZWZhdWx0IHRvICdlbidcbnZhciBwbHVyYWxUeXBlVG9MYW5ndWFnZXMgPSB7XG4gIGFyYWJpYzogWydhciddLFxuICBib3NuaWFuX3NlcmJpYW46IFsnYnMtTGF0bi1CQScsICdicy1DeXJsLUJBJywgJ3NybC1SUycsICdzci1SUyddLFxuICBjaGluZXNlOiBbJ2lkJywgJ2lkLUlEJywgJ2phJywgJ2tvJywgJ2tvLUtSJywgJ2xvJywgJ21zJywgJ3RoJywgJ3RoLVRIJywgJ3poJ10sXG4gIGNyb2F0aWFuOiBbJ2hyJywgJ2hyLUhSJ10sXG4gIGdlcm1hbjogWydmYScsICdkYScsICdkZScsICdlbicsICdlcycsICdmaScsICdlbCcsICdoZScsICdoaS1JTicsICdodScsICdodS1IVScsICdpdCcsICdubCcsICdubycsICdwdCcsICdzdicsICd0ciddLFxuICBmcmVuY2g6IFsnZnInLCAndGwnLCAncHQtYnInXSxcbiAgcnVzc2lhbjogWydydScsICdydS1SVSddLFxuICBsaXRodWFuaWFuOiBbJ2x0J10sXG4gIGN6ZWNoOiBbJ2NzJywgJ2NzLUNaJywgJ3NrJ10sXG4gIHBvbGlzaDogWydwbCddLFxuICBpY2VsYW5kaWM6IFsnaXMnXSxcbiAgc2xvdmVuaWFuOiBbJ3NsLVNMJ11cbn07XG5cbmZ1bmN0aW9uIGxhbmdUb1R5cGVNYXAobWFwcGluZykge1xuICB2YXIgcmV0ID0ge307XG4gIGZvckVhY2gobWFwcGluZywgZnVuY3Rpb24gKGxhbmdzLCB0eXBlKSB7XG4gICAgZm9yRWFjaChsYW5ncywgZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgIHJldFtsYW5nXSA9IHR5cGU7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUeXBlTmFtZShsb2NhbGUpIHtcbiAgdmFyIGxhbmdUb1BsdXJhbFR5cGUgPSBsYW5nVG9UeXBlTWFwKHBsdXJhbFR5cGVUb0xhbmd1YWdlcyk7XG4gIHJldHVybiBsYW5nVG9QbHVyYWxUeXBlW2xvY2FsZV1cbiAgICB8fCBsYW5nVG9QbHVyYWxUeXBlW3NwbGl0LmNhbGwobG9jYWxlLCAvLS8sIDEpWzBdXVxuICAgIHx8IGxhbmdUb1BsdXJhbFR5cGUuZW47XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFR5cGVJbmRleChsb2NhbGUsIGNvdW50KSB7XG4gIHJldHVybiBwbHVyYWxUeXBlc1twbHVyYWxUeXBlTmFtZShsb2NhbGUpXShjb3VudCk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZSh0b2tlbikge1xuICByZXR1cm4gdG9rZW4ucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0VG9rZW5SZWdleChvcHRzKSB7XG4gIHZhciBwcmVmaXggPSAob3B0cyAmJiBvcHRzLnByZWZpeCkgfHwgJyV7JztcbiAgdmFyIHN1ZmZpeCA9IChvcHRzICYmIG9wdHMuc3VmZml4KSB8fCAnfSc7XG5cbiAgaWYgKHByZWZpeCA9PT0gZGVsaW1pdGVyIHx8IHN1ZmZpeCA9PT0gZGVsaW1pdGVyKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wiJyArIGRlbGltaXRlciArICdcIiB0b2tlbiBpcyByZXNlcnZlZCBmb3IgcGx1cmFsaXphdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoZXNjYXBlKHByZWZpeCkgKyAnKC4qPyknICsgZXNjYXBlKHN1ZmZpeCksICdnJyk7XG59XG5cbnZhciBkb2xsYXJSZWdleCA9IC9cXCQvZztcbnZhciBkb2xsYXJCaWxsc1lhbGwgPSAnJCQnO1xudmFyIGRlZmF1bHRUb2tlblJlZ2V4ID0gLyVcXHsoLio/KVxcfS9nO1xuXG4vLyAjIyMgdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKVxuLy9cbi8vIFRha2VzIGEgcGhyYXNlIHN0cmluZyBhbmQgdHJhbnNmb3JtcyBpdCBieSBjaG9vc2luZyB0aGUgY29ycmVjdFxuLy8gcGx1cmFsIGZvcm0gYW5kIGludGVycG9sYXRpbmcgaXQuXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnSGVsbG8sICV7bmFtZX0hJywge25hbWU6ICdTcGlrZSd9KTtcbi8vICAgICAvLyBcIkhlbGxvLCBTcGlrZSFcIlxuLy9cbi8vIFRoZSBjb3JyZWN0IHBsdXJhbCBmb3JtIGlzIHNlbGVjdGVkIGlmIHN1YnN0aXR1dGlvbnMuc21hcnRfY291bnRcbi8vIGlzIHNldC4gWW91IGNhbiBwYXNzIGluIGEgbnVtYmVyIGluc3RlYWQgb2YgYW4gT2JqZWN0IGFzIGBzdWJzdGl0dXRpb25zYFxuLy8gYXMgYSBzaG9ydGN1dCBmb3IgYHNtYXJ0X2NvdW50YC5cbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywge3NtYXJ0X2NvdW50OiAxfSwgJ2VuJyk7XG4vLyAgICAgLy8gXCIxIG5ldyBtZXNzYWdlXCJcbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywge3NtYXJ0X2NvdW50OiAyfSwgJ2VuJyk7XG4vLyAgICAgLy8gXCIyIG5ldyBtZXNzYWdlc1wiXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIDUsICdlbicpO1xuLy8gICAgIC8vIFwiNSBuZXcgbWVzc2FnZXNcIlxuLy9cbi8vIFlvdSBzaG91bGQgcGFzcyBpbiBhIHRoaXJkIGFyZ3VtZW50LCB0aGUgbG9jYWxlLCB0byBzcGVjaWZ5IHRoZSBjb3JyZWN0IHBsdXJhbCB0eXBlLlxuLy8gSXQgZGVmYXVsdHMgdG8gYCdlbidgIHdpdGggMiBwbHVyYWwgZm9ybXMuXG5mdW5jdGlvbiB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUsIHRva2VuUmVnZXgpIHtcbiAgaWYgKHR5cGVvZiBwaHJhc2UgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUG9seWdsb3QudHJhbnNmb3JtUGhyYXNlIGV4cGVjdHMgYXJndW1lbnQgIzEgdG8gYmUgc3RyaW5nJyk7XG4gIH1cblxuICBpZiAoc3Vic3RpdHV0aW9ucyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHBocmFzZTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBwaHJhc2U7XG4gIHZhciBpbnRlcnBvbGF0aW9uUmVnZXggPSB0b2tlblJlZ2V4IHx8IGRlZmF1bHRUb2tlblJlZ2V4O1xuXG4gIC8vIGFsbG93IG51bWJlciBhcyBhIHBsdXJhbGl6YXRpb24gc2hvcnRjdXRcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc3Vic3RpdHV0aW9ucyA9PT0gJ251bWJlcicgPyB7IHNtYXJ0X2NvdW50OiBzdWJzdGl0dXRpb25zIH0gOiBzdWJzdGl0dXRpb25zO1xuXG4gIC8vIFNlbGVjdCBwbHVyYWwgZm9ybTogYmFzZWQgb24gYSBwaHJhc2UgdGV4dCB0aGF0IGNvbnRhaW5zIGBuYFxuICAvLyBwbHVyYWwgZm9ybXMgc2VwYXJhdGVkIGJ5IGBkZWxpbWl0ZXJgLCBhIGBsb2NhbGVgLCBhbmQgYSBgc3Vic3RpdHV0aW9ucy5zbWFydF9jb3VudGAsXG4gIC8vIGNob29zZSB0aGUgY29ycmVjdCBwbHVyYWwgZm9ybS4gVGhpcyBpcyBvbmx5IGRvbmUgaWYgYGNvdW50YCBpcyBzZXQuXG4gIGlmIChvcHRpb25zLnNtYXJ0X2NvdW50ICE9IG51bGwgJiYgcmVzdWx0KSB7XG4gICAgdmFyIHRleHRzID0gc3BsaXQuY2FsbChyZXN1bHQsIGRlbGltaXRlcik7XG4gICAgcmVzdWx0ID0gdHJpbSh0ZXh0c1twbHVyYWxUeXBlSW5kZXgobG9jYWxlIHx8ICdlbicsIG9wdGlvbnMuc21hcnRfY291bnQpXSB8fCB0ZXh0c1swXSk7XG4gIH1cblxuICAvLyBJbnRlcnBvbGF0ZTogQ3JlYXRlcyBhIGBSZWdFeHBgIG9iamVjdCBmb3IgZWFjaCBpbnRlcnBvbGF0aW9uIHBsYWNlaG9sZGVyLlxuICByZXN1bHQgPSByZXBsYWNlLmNhbGwocmVzdWx0LCBpbnRlcnBvbGF0aW9uUmVnZXgsIGZ1bmN0aW9uIChleHByZXNzaW9uLCBhcmd1bWVudCkge1xuICAgIGlmICghaGFzKG9wdGlvbnMsIGFyZ3VtZW50KSB8fCBvcHRpb25zW2FyZ3VtZW50XSA9PSBudWxsKSB7IHJldHVybiBleHByZXNzaW9uOyB9XG4gICAgLy8gRW5zdXJlIHJlcGxhY2VtZW50IHZhbHVlIGlzIGVzY2FwZWQgdG8gcHJldmVudCBzcGVjaWFsICQtcHJlZml4ZWQgcmVnZXggcmVwbGFjZSB0b2tlbnMuXG4gICAgcmV0dXJuIHJlcGxhY2UuY2FsbChvcHRpb25zW2FyZ3VtZW50XSwgZG9sbGFyUmVnZXgsIGRvbGxhckJpbGxzWWFsbCk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vICMjIyBQb2x5Z2xvdCBjbGFzcyBjb25zdHJ1Y3RvclxuZnVuY3Rpb24gUG9seWdsb3Qob3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMucGhyYXNlcyA9IHt9O1xuICB0aGlzLmV4dGVuZChvcHRzLnBocmFzZXMgfHwge30pO1xuICB0aGlzLmN1cnJlbnRMb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuICB2YXIgYWxsb3dNaXNzaW5nID0gb3B0cy5hbGxvd01pc3NpbmcgPyB0cmFuc2Zvcm1QaHJhc2UgOiBudWxsO1xuICB0aGlzLm9uTWlzc2luZ0tleSA9IHR5cGVvZiBvcHRzLm9uTWlzc2luZ0tleSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMub25NaXNzaW5nS2V5IDogYWxsb3dNaXNzaW5nO1xuICB0aGlzLndhcm4gPSBvcHRzLndhcm4gfHwgd2FybjtcbiAgdGhpcy50b2tlblJlZ2V4ID0gY29uc3RydWN0VG9rZW5SZWdleChvcHRzLmludGVycG9sYXRpb24pO1xufVxuXG4vLyAjIyMgcG9seWdsb3QubG9jYWxlKFtsb2NhbGVdKVxuLy9cbi8vIEdldCBvciBzZXQgbG9jYWxlLiBJbnRlcm5hbGx5LCBQb2x5Z2xvdCBvbmx5IHVzZXMgbG9jYWxlIGZvciBwbHVyYWxpemF0aW9uLlxuUG9seWdsb3QucHJvdG90eXBlLmxvY2FsZSA9IGZ1bmN0aW9uIChuZXdMb2NhbGUpIHtcbiAgaWYgKG5ld0xvY2FsZSkgdGhpcy5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlO1xufTtcblxuLy8gIyMjIHBvbHlnbG90LmV4dGVuZChwaHJhc2VzKVxuLy9cbi8vIFVzZSBgZXh0ZW5kYCB0byB0ZWxsIFBvbHlnbG90IGhvdyB0byB0cmFuc2xhdGUgYSBnaXZlbiBrZXkuXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9KTtcbi8vXG4vLyBUaGUga2V5IGNhbiBiZSBhbnkgc3RyaW5nLiAgRmVlbCBmcmVlIHRvIGNhbGwgYGV4dGVuZGAgbXVsdGlwbGUgdGltZXM7XG4vLyBpdCB3aWxsIG92ZXJyaWRlIGFueSBwaHJhc2VzIHdpdGggdGhlIHNhbWUga2V5LCBidXQgbGVhdmUgZXhpc3RpbmcgcGhyYXNlc1xuLy8gdW50b3VjaGVkLlxuLy9cbi8vIEl0IGlzIGFsc28gcG9zc2libGUgdG8gcGFzcyBuZXN0ZWQgcGhyYXNlIG9iamVjdHMsIHdoaWNoIGdldCBmbGF0dGVuZWRcbi8vIGludG8gYW4gb2JqZWN0IHdpdGggdGhlIG5lc3RlZCBrZXlzIGNvbmNhdGVuYXRlZCB1c2luZyBkb3Qgbm90YXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcIm5hdlwiOiB7XG4vLyAgICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiLFxuLy8gICAgICAgICBcInNpZGViYXJcIjoge1xuLy8gICAgICAgICAgIFwid2VsY29tZVwiOiBcIldlbGNvbWVcIlxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuLy8gICAgIC8vIHtcbi8vICAgICAvLyAgICduYXYuaGVsbG8nOiAnSGVsbG8nLFxuLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9Jyxcbi8vICAgICAvLyAgICduYXYuc2lkZWJhci53ZWxjb21lJzogJ1dlbGNvbWUnXG4vLyAgICAgLy8gfVxuLy9cbi8vIGBleHRlbmRgIGFjY2VwdHMgYW4gb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50LCBgcHJlZml4YCwgd2hpY2ggY2FuIGJlIHVzZWRcbi8vIHRvIHByZWZpeCBldmVyeSBrZXkgaW4gdGhlIHBocmFzZXMgb2JqZWN0IHdpdGggc29tZSBzdHJpbmcsIHVzaW5nIGRvdFxuLy8gbm90YXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9LCBcIm5hdlwiKTtcbi8vXG4vLyAgICAgY29uc29sZS5sb2cocG9seWdsb3QucGhyYXNlcyk7XG4vLyAgICAgLy8ge1xuLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4vLyAgICAgLy8gICAnbmF2LmhlbGxvX25hbWUnOiAnSGVsbG8sICV7bmFtZX0nXG4vLyAgICAgLy8gfVxuLy9cbi8vIFRoaXMgZmVhdHVyZSBpcyB1c2VkIGludGVybmFsbHkgdG8gc3VwcG9ydCBuZXN0ZWQgcGhyYXNlIG9iamVjdHMuXG5Qb2x5Z2xvdC5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgZm9yRWFjaChtb3JlUGhyYXNlcywgZnVuY3Rpb24gKHBocmFzZSwga2V5KSB7XG4gICAgdmFyIHByZWZpeGVkS2V5ID0gcHJlZml4ID8gcHJlZml4ICsgJy4nICsga2V5IDoga2V5O1xuICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5leHRlbmQocGhyYXNlLCBwcmVmaXhlZEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGhyYXNlc1twcmVmaXhlZEtleV0gPSBwaHJhc2U7XG4gICAgfVxuICB9LCB0aGlzKTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC51bnNldChwaHJhc2VzKVxuLy8gVXNlIGB1bnNldGAgdG8gc2VsZWN0aXZlbHkgcmVtb3ZlIGtleXMgZnJvbSBhIHBvbHlnbG90IGluc3RhbmNlLlxuLy9cbi8vICAgICBwb2x5Z2xvdC51bnNldChcInNvbWVfa2V5XCIpO1xuLy8gICAgIHBvbHlnbG90LnVuc2V0KHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0pO1xuLy9cbi8vIFRoZSB1bnNldCBtZXRob2QgY2FuIHRha2UgZWl0aGVyIGEgc3RyaW5nIChmb3IgdGhlIGtleSksIG9yIGFuIG9iamVjdCBoYXNoIHdpdGhcbi8vIHRoZSBrZXlzIHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gdW5zZXQuXG5Qb2x5Z2xvdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbiAobW9yZVBocmFzZXMsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG1vcmVQaHJhc2VzID09PSAnc3RyaW5nJykge1xuICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbbW9yZVBocmFzZXNdO1xuICB9IGVsc2Uge1xuICAgIGZvckVhY2gobW9yZVBocmFzZXMsIGZ1bmN0aW9uIChwaHJhc2UsIGtleSkge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gcHJlZml4ID8gcHJlZml4ICsgJy4nICsga2V5IDoga2V5O1xuICAgICAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMudW5zZXQocGhyYXNlLCBwcmVmaXhlZEtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5waHJhc2VzW3ByZWZpeGVkS2V5XTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufTtcblxuLy8gIyMjIHBvbHlnbG90LmNsZWFyKClcbi8vXG4vLyBDbGVhcnMgYWxsIHBocmFzZXMuIFVzZWZ1bCBmb3Igc3BlY2lhbCBjYXNlcywgc3VjaCBhcyBmcmVlaW5nXG4vLyB1cCBtZW1vcnkgaWYgeW91IGhhdmUgbG90cyBvZiBwaHJhc2VzIGJ1dCBubyBsb25nZXIgbmVlZCB0b1xuLy8gcGVyZm9ybSBhbnkgdHJhbnNsYXRpb24uIEFsc28gdXNlZCBpbnRlcm5hbGx5IGJ5IGByZXBsYWNlYC5cblBvbHlnbG90LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5waHJhc2VzID0ge307XG59O1xuXG4vLyAjIyMgcG9seWdsb3QucmVwbGFjZShwaHJhc2VzKVxuLy9cbi8vIENvbXBsZXRlbHkgcmVwbGFjZSB0aGUgZXhpc3RpbmcgcGhyYXNlcyB3aXRoIGEgbmV3IHNldCBvZiBwaHJhc2VzLlxuLy8gTm9ybWFsbHksIGp1c3QgdXNlIGBleHRlbmRgIHRvIGFkZCBtb3JlIHBocmFzZXMsIGJ1dCB1bmRlciBjZXJ0YWluXG4vLyBjaXJjdW1zdGFuY2VzLCB5b3UgbWF5IHdhbnQgdG8gbWFrZSBzdXJlIG5vIG9sZCBwaHJhc2VzIGFyZSBseWluZyBhcm91bmQuXG5Qb2x5Z2xvdC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChuZXdQaHJhc2VzKSB7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5leHRlbmQobmV3UGhyYXNlcyk7XG59O1xuXG5cbi8vICMjIyBwb2x5Z2xvdC50KGtleSwgb3B0aW9ucylcbi8vXG4vLyBUaGUgbW9zdC11c2VkIG1ldGhvZC4gUHJvdmlkZSBhIGtleSwgYW5kIGB0YCB3aWxsIHJldHVybiB0aGVcbi8vIHBocmFzZS5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImhlbGxvXCIpO1xuLy8gICAgID0+IFwiSGVsbG9cIlxuLy9cbi8vIFRoZSBwaHJhc2UgdmFsdWUgaXMgcHJvdmlkZWQgZmlyc3QgYnkgYSBjYWxsIHRvIGBwb2x5Z2xvdC5leHRlbmQoKWAgb3Jcbi8vIGBwb2x5Z2xvdC5yZXBsYWNlKClgLlxuLy9cbi8vIFBhc3MgaW4gYW4gb2JqZWN0IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gcGVyZm9ybSBpbnRlcnBvbGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaGVsbG9fbmFtZVwiLCB7bmFtZTogXCJTcGlrZVwifSk7XG4vLyAgICAgPT4gXCJIZWxsbywgU3Bpa2VcIlxuLy9cbi8vIElmIHlvdSBsaWtlLCB5b3UgY2FuIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIGluIGNhc2UgdGhlIHBocmFzZSBpcyBtaXNzaW5nLlxuLy8gVXNlIHRoZSBzcGVjaWFsIG9wdGlvbiBrZXkgXCJfXCIgdG8gc3BlY2lmeSBhIGRlZmF1bHQuXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJpX2xpa2VfdG9fd3JpdGVfaW5fbGFuZ3VhZ2VcIiwge1xuLy8gICAgICAgXzogXCJJIGxpa2UgdG8gd3JpdGUgaW4gJXtsYW5ndWFnZX0uXCIsXG4vLyAgICAgICBsYW5ndWFnZTogXCJKYXZhU2NyaXB0XCJcbi8vICAgICB9KTtcbi8vICAgICA9PiBcIkkgbGlrZSB0byB3cml0ZSBpbiBKYXZhU2NyaXB0LlwiXG4vL1xuUG9seWdsb3QucHJvdG90eXBlLnQgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zKSB7XG4gIHZhciBwaHJhc2UsIHJlc3VsdDtcbiAgdmFyIG9wdHMgPSBvcHRpb25zID09IG51bGwgPyB7fSA6IG9wdGlvbnM7XG4gIGlmICh0eXBlb2YgdGhpcy5waHJhc2VzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgcGhyYXNlID0gdGhpcy5waHJhc2VzW2tleV07XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMuXyA9PT0gJ3N0cmluZycpIHtcbiAgICBwaHJhc2UgPSBvcHRzLl87XG4gIH0gZWxzZSBpZiAodGhpcy5vbk1pc3NpbmdLZXkpIHtcbiAgICB2YXIgb25NaXNzaW5nS2V5ID0gdGhpcy5vbk1pc3NpbmdLZXk7XG4gICAgcmVzdWx0ID0gb25NaXNzaW5nS2V5KGtleSwgb3B0cywgdGhpcy5jdXJyZW50TG9jYWxlLCB0aGlzLnRva2VuUmVnZXgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2FybignTWlzc2luZyB0cmFuc2xhdGlvbiBmb3Iga2V5OiBcIicgKyBrZXkgKyAnXCInKTtcbiAgICByZXN1bHQgPSBrZXk7XG4gIH1cbiAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgb3B0cywgdGhpcy5jdXJyZW50TG9jYWxlLCB0aGlzLnRva2VuUmVnZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vICMjIyBwb2x5Z2xvdC5oYXMoa2V5KVxuLy9cbi8vIENoZWNrIGlmIHBvbHlnbG90IGhhcyBhIHRyYW5zbGF0aW9uIGZvciBnaXZlbiBrZXlcblBvbHlnbG90LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBoYXModGhpcy5waHJhc2VzLCBrZXkpO1xufTtcblxuLy8gZXhwb3J0IHRyYW5zZm9ybVBocmFzZVxuUG9seWdsb3QudHJhbnNmb3JtUGhyYXNlID0gZnVuY3Rpb24gdHJhbnNmb3JtKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpO1xufTtcblxudmFyIHdlYml4UG9seWdsb3QgPSBQb2x5Z2xvdDtcblxuZnVuY3Rpb24gTG9jYWxlKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xyXG4gICAgbGV0IGxhbmcgPSBzdG9yYWdlID8gKHN0b3JhZ2UuZ2V0KFwibGFuZ1wiKSB8fCBcImVuXCIpIDogKGNvbmZpZy5sYW5nIHx8IFwiZW5cIik7XHJcbiAgICBmdW5jdGlvbiBzZXRMYW5nRGF0YShuYW1lLCBkYXRhLCBzaWxlbnQpIHtcclxuICAgICAgICBpZiAoZGF0YS5fX2VzTW9kdWxlKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLmRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBjb25maWcgPSB7IHBocmFzZXM6IGRhdGEgfTtcclxuICAgICAgICBpZiAoY29uZmlnLnBvbHlnbG90KSB7XHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5leHRlbmQocGNvbmZpZywgY29uZmlnLnBvbHlnbG90KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9seSA9IHNlcnZpY2UucG9seWdsb3QgPSBuZXcgd2ViaXhQb2x5Z2xvdChwY29uZmlnKTtcclxuICAgICAgICBwb2x5LmxvY2FsZShuYW1lKTtcclxuICAgICAgICBzZXJ2aWNlLl8gPSBhcHAud2ViaXguYmluZChwb2x5LnQsIHBvbHkpO1xyXG4gICAgICAgIGxhbmcgPSBuYW1lO1xyXG4gICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2UucHV0KFwibGFuZ1wiLCBsYW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy53ZWJpeCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2NOYW1lID0gY29uZmlnLndlYml4W25hbWVdO1xyXG4gICAgICAgICAgICBpZiAobG9jTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYXBwLndlYml4LmkxOG4uc2V0TG9jYWxlKGxvY05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcHAucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRMYW5nKCkgeyByZXR1cm4gbGFuZzsgfVxyXG4gICAgZnVuY3Rpb24gc2V0TGFuZyhuYW1lLCBzaWxlbnQpIHtcclxuICAgICAgICAvLyBpZ25vcmUgc2V0TGFuZyBpZiBsb2FkaW5nIGJ5IHBhdGggaXMgZGlzYWJsZWRcclxuICAgICAgICBpZiAoY29uZmlnLnBhdGggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IChjb25maWcucGF0aCA/IGNvbmZpZy5wYXRoICsgXCIvXCIgOiBcIlwiKSArIG5hbWU7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoXCJqZXQtbG9jYWxlcy9cIiArIHBhdGgpO1xyXG4gICAgICAgIHNldExhbmdEYXRhKG5hbWUsIGRhdGEsIHNpbGVudCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldExhbmcsIHNldExhbmcsIHNldExhbmdEYXRhLCBfOiBudWxsLCBwb2x5Z2xvdDogbnVsbFxyXG4gICAgfTtcclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwibG9jYWxlXCIsIHNlcnZpY2UpO1xyXG4gICAgc2V0TGFuZyhsYW5nLCB0cnVlKTtcclxufVxuXG5mdW5jdGlvbiBzaG93KHZpZXcsIGNvbmZpZywgdmFsdWUpIHtcclxuICAgIGlmIChjb25maWcudXJscykge1xyXG4gICAgICAgIHZhbHVlID0gY29uZmlnLnVybHNbdmFsdWVdIHx8IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY29uZmlnLnBhcmFtKSB7XHJcbiAgICAgICAgdmFsdWUgPSB7IFtjb25maWcucGFyYW1dOiB2YWx1ZSB9O1xyXG4gICAgfVxyXG4gICAgdmlldy5zaG93KHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBNZW51KGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25zdCBmcmFtZSA9IHZpZXcuZ2V0U3ViVmlld0luZm8oKS5wYXJlbnQ7XHJcbiAgICBjb25zdCB1aSA9IHZpZXcuJCQoY29uZmlnLmlkIHx8IGNvbmZpZyk7XHJcbiAgICBsZXQgc2lsZW50ID0gZmFsc2U7XHJcbiAgICB1aS5hdHRhY2hFdmVudChcIm9uY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICBzaG93KGZyYW1lLCBjb25maWcsIHRoaXMuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB1aS5hdHRhY2hFdmVudChcIm9uYWZ0ZXJzZWxlY3RcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh1aS5zZXRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWQgPSB0aGlzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkuZ2V0U2VsZWN0ZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgaWQgPSB1aS5nZXRTZWxlY3RlZElkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2hvdyhmcmFtZSwgY29uZmlnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB2aWV3Lm9uKGFwcCwgYGFwcDpyb3V0ZWAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wYXJhbSkge1xyXG4gICAgICAgICAgICBuYW1lID0gdmlldy5nZXRQYXJhbShjb25maWcucGFyYW0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VnbWVudCA9IGZyYW1lLmdldFVybCgpWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHNlZ21lbnQucGFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICBzaWxlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodWkuc2V0VmFsdWUgJiYgdWkuZ2V0VmFsdWUoKSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0VmFsdWUobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkuc2VsZWN0ICYmIHVpLmV4aXN0cyhuYW1lKSAmJiB1aS5nZXRTZWxlY3RlZElkKCkgIT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNlbGVjdChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaWxlbnQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxuXG5jb25zdCBiYXNlaWNvbnMgPSB7XHJcbiAgICBnb29kOiBcImNoZWNrXCIsXHJcbiAgICBlcnJvcjogXCJ3YXJuaW5nXCIsXHJcbiAgICBzYXZpbmc6IFwicmVmcmVzaCBmYS1zcGluXCJcclxufTtcclxuY29uc3QgYmFzZXRleHQgPSB7XHJcbiAgICBnb29kOiBcIk9rXCIsXHJcbiAgICBlcnJvcjogXCJFcnJvclwiLFxyXG4gICAgc2F2aW5nOiBcIkNvbm5lY3RpbmcuLi5cIlxyXG59O1xyXG5mdW5jdGlvbiBTdGF0dXMoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGxldCBzdGF0dXMgPSBcImdvb2RcIjtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBsZXQgaXNlcnJvciA9IGZhbHNlO1xyXG4gICAgbGV0IGV4cGlyZURlbGF5ID0gY29uZmlnLmV4cGlyZTtcclxuICAgIGlmICghZXhwaXJlRGVsYXkgJiYgZXhwaXJlRGVsYXkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgZXhwaXJlRGVsYXkgPSAyMDAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGV4dHMgPSBjb25maWcudGV4dHMgfHwgYmFzZXRleHQ7XHJcbiAgICBjb25zdCBpY29ucyA9IGNvbmZpZy5pY29ucyB8fCBiYXNlaWNvbnM7XHJcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGNvbmZpZyA9IHsgdGFyZ2V0OiBjb25maWcgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZnJlc2goY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSB2aWV3LiQkKGNvbmZpZy50YXJnZXQpO1xyXG4gICAgICAgIGlmIChhcmVhKSB7XHJcbiAgICAgICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IFwiPGRpdiBjbGFzcz0nc3RhdHVzX1wiICtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJz48c3BhbiBjbGFzcz0nd2ViaXhfaWNvbiBmYS1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbc3RhdHVzXSArIFwiJz48L3NwYW4+IFwiICsgdGV4dHNbc3RhdHVzXSArIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJlYS5zZXRIVE1MKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBzZXRTdGF0dXMoXCJnb29kXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmFpbChlcnIpIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIHNldFN0YXR1cyhcImVycm9yXCIsIGVycik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdGFydChwcm9taXNlKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgICBzZXRTdGF0dXMoXCJzYXZpbmdcIik7XHJcbiAgICAgICAgaWYgKHByb21pc2UgJiYgcHJvbWlzZS50aGVuKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UudGhlbihzdWNjZXNzLCBmYWlsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpZGVTdGF0dXMoKSB7XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlZnJlc2goXCIgXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFN0YXR1cyhtb2RlLCBlcnIpIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZGUgPT09IFwic2F2aW5nXCIpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gXCJzYXZpbmdcIjtcclxuICAgICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXNlcnJvciA9IChtb2RlID09PSBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IGlzZXJyb3IgPyBcImVycm9yXCIgOiBcImdvb2RcIjtcclxuICAgICAgICAgICAgICAgIGlmIChpc2Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLmVycm9yKFwiYXBwOmVycm9yOnNlcnZlclwiLCBbZXJyLnJlc3BvbnNlVGV4dCB8fCBlcnJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBpcmVEZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVTdGF0dXMsIGV4cGlyZURlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmFjayhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZHAgPSBhcHAud2ViaXguZHAoZGF0YSk7XHJcbiAgICAgICAgaWYgKGRwKSB7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlckRhdGFTZW5kXCIsIHN0YXJ0KTtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyU2F2ZUVycm9yXCIsIChfaWQsIF9vYmosIHJlc3BvbnNlKSA9PiBmYWlsKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlclNhdmVcIiwgc3VjY2Vzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJzdGF0dXNcIiwge1xyXG4gICAgICAgIGdldFN0YXR1cyxcclxuICAgICAgICBzZXRTdGF0dXMsXHJcbiAgICAgICAgdHJhY2tcclxuICAgIH0pO1xyXG4gICAgaWYgKGNvbmZpZy5yZW1vdGUpIHtcclxuICAgICAgICB2aWV3Lm9uKGFwcC53ZWJpeCwgXCJvblJlbW90ZUNhbGxcIiwgc3RhcnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5hamF4KSB7XHJcbiAgICAgICAgdmlldy5vbihhcHAud2ViaXgsIFwib25CZWZvcmVBamF4XCIsIChfbW9kZSwgX3VybCwgX2RhdGEsIF9yZXF1ZXN0LCBfaGVhZGVycywgX2ZpbGVzLCBwcm9taXNlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXJ0KHByb21pc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5kYXRhKSB7XHJcbiAgICAgICAgdHJhY2soY29uZmlnLmRhdGEpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIFRoZW1lKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xyXG4gICAgbGV0IHRoZW1lID0gc3RvcmFnZSA/XHJcbiAgICAgICAgKHN0b3JhZ2UuZ2V0KFwidGhlbWVcIikgfHwgXCJmbGF0LWRlZmF1bHRcIilcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIChjb25maWcudGhlbWUgfHwgXCJmbGF0LWRlZmF1bHRcIik7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldFRoZW1lKCkgeyByZXR1cm4gdGhlbWU7IH0sXHJcbiAgICAgICAgc2V0VGhlbWUobmFtZSwgc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsbmFtZSA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxuYW1lID09PSBuYW1lIHx8IGxuYW1lID09PSBwYXJ0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcHAud2ViaXguc2tpbi5zZXQocGFydHNbMF0pO1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGNzc1xyXG4gICAgICAgICAgICBhcHAud2ViaXguaHRtbC5yZW1vdmVDc3MoZG9jdW1lbnQuYm9keSwgXCJ0aGVtZS1cIiArIHRoZW1lKTtcclxuICAgICAgICAgICAgLy8gYWRkIG5ldyBjc3NcclxuICAgICAgICAgICAgYXBwLndlYml4Lmh0bWwuYWRkQ3NzKGRvY3VtZW50LmJvZHksIFwidGhlbWUtXCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgdGhlbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5wdXQoXCJ0aGVtZVwiLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICAgICAgYXBwLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBhcHAuc2V0U2VydmljZShcInRoZW1lXCIsIHNlcnZpY2UpO1xyXG4gICAgc2VydmljZS5zZXRUaGVtZSh0aGVtZSwgdHJ1ZSk7XHJcbn1cblxuZnVuY3Rpb24gY29weVBhcmFtcyhkYXRhLCB1cmwsIHJvdXRlKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGF0YVtyb3V0ZVtpXV0gPSB1cmxbaSArIDFdID8gdXJsW2kgKyAxXS5wYWdlIDogXCJcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBVcmxQYXJhbShhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uc3Qgcm91dGUgPSBjb25maWcucm91dGUgfHwgY29uZmlnO1xyXG4gICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgdmlldy5vbihhcHAsIFwiYXBwOnVybGNoYW5nZVwiLCBmdW5jdGlvbiAoc3Vidmlldywgc2VnbWVudCkge1xyXG4gICAgICAgIGlmICh2aWV3ID09PSBzdWJ2aWV3KSB7XHJcbiAgICAgICAgICAgIGNvcHlQYXJhbXMoZGF0YSwgc2VnbWVudC5zdWJ1cmwoKSwgcm91dGUpO1xyXG4gICAgICAgICAgICBzZWdtZW50LnNpemUocm91dGUubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvcyA9IHZpZXcuc2V0UGFyYW07XHJcbiAgICBjb25zdCBvZyA9IHZpZXcuZ2V0UGFyYW07XHJcbiAgICB2aWV3LnNldFBhcmFtID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBzaG93KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSByb3V0ZS5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2VnbWVudC51cGRhdGUoXCJcIiwgdmFsdWUsIGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldy5zaG93KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gb3MuY2FsbCh0aGlzLCBuYW1lLCB2YWx1ZSwgc2hvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZpZXcuZ2V0UGFyYW0gPSBmdW5jdGlvbiAoa2V5LCBtb2RlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YVtrZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvZy5jYWxsKHRoaXMsIGtleSwgbW9kZSk7XHJcbiAgICB9O1xyXG4gICAgY29weVBhcmFtcyhkYXRhLCB2aWV3LmdldFVybCgpLCByb3V0ZSk7XHJcbn1cblxuZnVuY3Rpb24gVXNlcihhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IGxvZ2luID0gY29uZmlnLmxvZ2luIHx8IFwiL2xvZ2luXCI7XHJcbiAgICBjb25zdCBsb2dvdXQgPSBjb25maWcubG9nb3V0IHx8IFwiL2xvZ291dFwiO1xyXG4gICAgY29uc3QgYWZ0ZXJMb2dpbiA9IGNvbmZpZy5hZnRlckxvZ2luIHx8IGFwcC5jb25maWcuc3RhcnQ7XHJcbiAgICBjb25zdCBhZnRlckxvZ291dCA9IGNvbmZpZy5hZnRlckxvZ291dCB8fCBcIi9sb2dpblwiO1xyXG4gICAgY29uc3QgcGluZyA9IGNvbmZpZy5waW5nIHx8IDUgKiA2MCAqIDEwMDA7XHJcbiAgICBjb25zdCBtb2RlbCA9IGNvbmZpZy5tb2RlbDtcclxuICAgIGxldCB1c2VyID0gY29uZmlnLnVzZXI7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldFVzZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U3RhdHVzKHNlcnZlcikge1xyXG4gICAgICAgICAgICBpZiAoIXNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIgIT09IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLnN0YXR1cygpLmNhdGNoKCgpID0+IG51bGwpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dpbihuYW1lLCBwYXNzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5sb2dpbihuYW1lLCBwYXNzKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXBwLmNhbGxFdmVudChcImFwcDp1c2VyOmxvZ2luXCIsIFt1c2VyXSk7XHJcbiAgICAgICAgICAgICAgICBhcHAuc2hvdyhhZnRlckxvZ2luKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwubG9nb3V0KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBwLmNhbGxFdmVudChcImFwcDp1c2VyOmxvZ291dFwiLCBbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gY2FuTmF2aWdhdGUodXJsLCBvYmopIHtcclxuICAgICAgICBpZiAodXJsID09PSBsb2dvdXQpIHtcclxuICAgICAgICAgICAgc2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICAgICAgb2JqLnJlZGlyZWN0ID0gYWZ0ZXJMb2dvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHVybCAhPT0gbG9naW4gJiYgIXNlcnZpY2UuZ2V0U3RhdHVzKCkpIHtcclxuICAgICAgICAgICAgb2JqLnJlZGlyZWN0ID0gbG9naW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJ1c2VyXCIsIHNlcnZpY2UpO1xyXG4gICAgYXBwLmF0dGFjaEV2ZW50KGBhcHA6Z3VhcmRgLCBmdW5jdGlvbiAodXJsLCBfJHJvb3QsIG9iaikge1xyXG4gICAgICAgIGlmIChjb25maWcucHVibGljICYmIGNvbmZpZy5wdWJsaWModXJsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1c2VyID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIG9iai5jb25maXJtID0gc2VydmljZS5nZXRTdGF0dXModHJ1ZSkudGhlbigoKSA9PiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FuTmF2aWdhdGUodXJsLCBvYmopO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocGluZykge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHNlcnZpY2UuZ2V0U3RhdHVzKHRydWUpLCBwaW5nKTtcclxuICAgIH1cclxufVxuXG4vKlxyXG5NSVQgTGljZW5zZVxyXG5Db3B5cmlnaHQgKGMpIDIwMTkgWEIgU29mdHdhcmVcclxuKi9cclxubGV0IHdlYml4ID0gd2luZG93LndlYml4O1xyXG5pZiAod2ViaXgpIHtcclxuICAgIHBhdGNoKHdlYml4KTtcclxufVxyXG5jb25zdCBwbHVnaW5zID0ge1xyXG4gICAgVW5sb2FkR3VhcmQsIExvY2FsZSwgTWVudSwgVGhlbWUsIFVzZXIsIFN0YXR1cywgVXJsUGFyYW1cclxufTtcclxuY29uc3QgdyA9IHdpbmRvdztcclxuaWYgKCF3LlByb21pc2UpIHtcclxuICAgIHcuUHJvbWlzZSA9IHcud2ViaXgucHJvbWlzZTtcclxufVxuXG5leHBvcnQgeyBwbHVnaW5zLCBKZXRBcHAsIEpldFZpZXcsIEhhc2hSb3V0ZXIsIFN0b3JlUm91dGVyLCBVcmxSb3V0ZXIsIEVtcHR5Um91dGVyLCBTdWJSb3V0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpldC5qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImNvbnN0IGxvZ291dFVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9nb3V0JztcclxuY29uc3QgbG9naW5VcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJztcclxuY29uc3QgcmVnaXN0ZXJVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6YXRpb24ge1xyXG5cdHJlZ2lzdGVyKG9iaikge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHJlZ2lzdGVyVXJsLCBvYmopO1xyXG5cdH1cclxuXHJcblx0bG9naW4ob2JqKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QobG9naW5VcmwsIG9iaik7XHJcblx0fVxyXG5cclxuXHRsb2dvdXQoZGF0ZSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KGxvZ291dFVybCwgZGF0ZSk7XHJcblx0fVxyXG59IiwiY29uc3QgRFVNTVlDT1ZFUiA9ICdodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYWQvZmQvNTgvYWRmZDU4NzNiZTM4NDFmMDY2MGU2YWFhMDBjZGUxOGUuanBnJztcclxuY29uc3QgU1VDQ0VTUyA9IDI7XHJcbmNvbnN0IFVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG5cclxuZXhwb3J0IHtEVU1NWUNPVkVSLCBTVUNDRVNTLCBVUkx9OyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NvdXJjZXMvbG9jYWxlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBCb29rc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBbXTtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vYm9va3MvYDtcclxuXHR9XHJcblxyXG5cdGdldERhdGFGcm9tU2VydmVyKGlkKSB7XHJcblx0XHRjb25zdCB1c2VyX2lkID0ge3VzZXJfaWQ6IGlkfTtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KHRoaXMuX3VybCwgdXNlcl9pZCk7XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5kZWwodGhpcy5fdXJsLCBpZCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQm9va3NNb2RlbCgpOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBDb21tZW50c01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vY29tbWVudHMvYDtcclxuXHR9XHJcblx0XHJcblx0Z2V0SXRlbXMoaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGAke3RoaXMuX3VybH0ke2lkfWApO1x0XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbW1lbnRzTW9kZWwoKTsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgRmlsZXNNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl91cmwgPSBgJHtVUkx9L2ZpbGVzL2A7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhRnJvbVNlcnZlcigpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KHRoaXMuX3VybCk7XHJcblx0fVxyXG5cdFxyXG5cdGdldEl0ZW1zKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtpZH1gKTtcdFxyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdGRvd25sb2FkSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5yZXNwb25zZSgnYmxvYicpLmdldChgJHt0aGlzLl91cmx9ZG93bmxvYWQvJHtpZH1gKTtcdFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZpbGVzTW9kZWwoKTsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgTGlrZXNNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gW107XHJcblx0XHR0aGlzLl91cmwgPSBgJHtVUkx9L2xpa2VzL2A7XHJcblx0fVxyXG5cclxuXHRnZXRMaWtlcyhpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHJcblx0fVxyXG5cclxuXHRhZGRMaWtlKHVzZXJJZCwgYm9va0lkKSB7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHR1c2VySWQ6IHVzZXJJZCxcclxuXHRcdFx0Ym9va0lkOiBib29rSWRcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVMaWtlKHVzZXJJZCwgYm9va0lkKSB7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHR1c2VySWQ6IHVzZXJJZCxcclxuXHRcdFx0Ym9va0lkOiBib29rSWRcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5kZWwodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMaWtlc01vZGVsKCk7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIE9yZGVyc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vb3JkZXJzL2A7XHJcblx0fVxyXG5cdFxyXG5cdGdldEl0ZW1zKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtpZH1gKTtcdFxyXG5cdH1cclxuXHJcblx0YWRkT3JkZXIob3JkZXIpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIG9yZGVyKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblx0XHJcblx0cmVtb3ZlSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5kZWwodGhpcy5fdXJsLCBpZCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgT3JkZXJzTW9kZWwoKTsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgVXNlcnNNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl91cmwgPSBgJHtVUkx9L3VzZXJzL2A7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhRnJvbVNlcnZlcigpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KHRoaXMuX3VybCk7XHJcblx0fVxyXG5cdFxyXG5cdGdldEl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGAke3RoaXMuX3VybH0ke2lkfWApO1x0XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJzTW9kZWwoKTsiLCJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQge0pldEFwcCwgRW1wdHlSb3V0ZXIsIEhhc2hSb3V0ZXIgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBKZXRBcHB7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnKXtcclxuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xyXG5cdFx0XHRpZCBcdFx0OiBBUFBOQU1FLFxyXG5cdFx0XHR2ZXJzaW9uIDogVkVSU0lPTixcclxuXHRcdFx0cm91dGVyIFx0OiBCVUlMRF9BU19NT0RVTEUgPyBFbXB0eVJvdXRlciA6IEhhc2hSb3V0ZXIsXHJcblx0XHRcdGRlYnVnIFx0OiAhUFJPRFVDVElPTixcclxuXHRcdFx0c3RhcnQgXHQ6ICcvbG9naW4nXHJcblx0XHR9O1xyXG5cclxuXHRcdHN1cGVyKHsgLi4uZGVmYXVsdHMsIC4uLmNvbmZpZyB9KTtcclxuXHR9XHJcbn1cclxuXHJcbmlmICghQlVJTERfQVNfTU9EVUxFKXtcclxuXHR3ZWJpeC5yZWFkeSgoKSA9PiB7XHJcblx0XHRjb25zdCBhcHAgPSBuZXcgTXlBcHAoKTtcclxuXHRcdGFwcC5hdHRhY2hFdmVudCgnYXBwOmd1YXJkJywgKHVybCwgdmlldywgbmF2KSA9PiB7XHJcblx0XHRcdGlmKHVybC5pbmRleE9mKCdpZCcpICE9PSAtMSkge1xyXG5cdFx0XHRcdGNvbnN0IHVybFBhcnRzID0gdXJsLnNwbGl0KCcvJyk7XHJcblx0XHRcdFx0bGV0IHRhcmdldFBhcnQ7XHJcblxyXG5cdFx0XHRcdHVybFBhcnRzLmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdFx0XHRpZihlbC5pbmRleE9mKCdpZCcpICE9IC0xKSB7XHJcblx0XHRcdFx0XHRcdHRhcmdldFBhcnQgPSBlbDtcclxuXHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGkgPSB0YXJnZXRQYXJ0LmluZGV4T2YoJ2lkJyk7XHJcblx0XHRcdFx0Y29uc3Qgcm9sZSA9IHRhcmdldFBhcnQuc3BsaXQoJy4nKVswXTtcclxuXHRcdFx0XHRjb25zdCBpZCA9IHRhcmdldFBhcnQuc2xpY2UoaSszKTtcclxuIFxyXG5cdFx0XHRcdHdlYml4LmFqYXgoKS5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jaGVjaycpLnRoZW4oXHJcblx0XHRcdFx0XHQocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcmVzLmpzb24oKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2Uucm9sZSAhPSByb2xlIHx8IHJlc3BvbnNlLmlkICE9IGlkKSB7XHJcblx0XHRcdFx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcclxuXHRcdFx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRhcHAucmVuZGVyKCk7XHJcblx0fSk7XHJcbn0iLCJpbXBvcnQge1NVQ0NFU1N9IGZyb20gJy4vY29uc3RzJztcclxuXHJcbmNvbnN0IHRvZ2dsZUVsZW1lbnQgPSAoY29uZGl0aW9uLCBlbGVtZW50KSA9PiB7XHJcblx0aWYgKGNvbmRpdGlvbikge1xyXG5cdFx0ZWxlbWVudC5zaG93KCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0ZWxlbWVudC5oaWRlKCk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgYWRkSXRlbSA9IChNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbikgPT4ge1xyXG5cdE1vZGVsLmFkZEl0ZW0oZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcblx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzID09IFNVQ0NFU1MpIHtcclxuXHRcdFx0TW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRzdWNjZXNzQWN0aW9uKCk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlSXRlbSA9IChNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbikgPT4ge1xyXG5cdE1vZGVsLnVwZGF0ZUl0ZW0oZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcblx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzID09IFNVQ0NFU1MpIHtcclxuXHRcdFx0c3VjY2Vzc0FjdGlvbigpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYkRhdGUpID0+IHtcclxuXHRjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHRjb25zdCBjdXJyZW50TW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XHJcblx0Y29uc3QgY3VycmVudERheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xyXG5cdGNvbnN0IGN1cnJlbnRIb3VycyA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuXHRjb25zdCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHRjb25zdCBjb21tZW50c1llYXIgPSBuZXcgRGF0ZShkYkRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcblx0Y29uc3QgY29tbWVudHNNb250aCA9IG5ldyBEYXRlKGRiRGF0ZSkuZ2V0TW9udGgoKTtcclxuXHRjb25zdCBjb21tZW50c0RheSA9IG5ldyBEYXRlKGRiRGF0ZSkuZ2V0RGF0ZSgpO1xyXG5cdGNvbnN0IGNvbW1lbnRzSG91cnMgPSBuZXcgRGF0ZShkYkRhdGUpLmdldEhvdXJzKCk7XHJcblx0Y29uc3QgY29tbWVudHNEYXRlVGltZSA9IG5ldyBEYXRlKGRiRGF0ZSk7XHJcblxyXG5cdGxldCBmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5zdHJUb0RhdGUoXCIlaTolc1wiKTtcclxuXHJcblx0aWYgKGN1cnJlbnRZZWFyID4gY29tbWVudHNZZWFyKSB7XHJcblx0XHRmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlZC0lbS0leVwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZihjdXJyZW50TW9udGggPiBjb21tZW50c01vbnRoKSB7XHJcblx0XHRmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlbS0lZFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZihjdXJyZW50RGF5ID4gY29tbWVudHNEYXkpIHtcclxuXHRcdGZvcm1hdERhdGUgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVELCAlSDolaVwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoY3VycmVudEhvdXJzID4gY29tbWVudHNIb3Vycyl7XHJcblx0XHRmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlSDolaVwiKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRjb25zdCB0aW1lID0gKGN1cnJlbnREYXRlVGltZSAtIGNvbW1lbnRzRGF0ZVRpbWUpLzYwMDAwO1xyXG5cdFx0cmV0dXJuIGAke01hdGgucm91bmQodGltZSl9IG1pbnV0ZShzKSBhZ29gO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gZm9ybWF0RGF0ZShuZXcgRGF0ZShkYkRhdGUpKTtcclxuXHJcbn07XHJcblxyXG53ZWJpeC5wcm90b1VJKHtcclxuXHRuYW1lOiBcImFjdGl2ZUxpc3RcIixcclxuXHRkZWZhdWx0czoge1xyXG5cdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHR0eXBlOiB7XHJcblx0XHRcdGhlaWdodDogMzBcclxuXHRcdH1cclxuXHR9XHJcbn0sIHdlYml4LnVpLmxpc3QpO1xyXG5cclxuZXhwb3J0IHt0b2dnbGVFbGVtZW50LCBhZGRJdGVtLCB1cGRhdGVJdGVtLCBmb3JtYXREYXRlfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWRtaW5cIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL1wiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qc1wiLFxuXHRcIi4vYWRtaW4vaW5kZXhcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL2luZGV4LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi91c2VyRm9ybVwiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi91c2VyRm9ybS5qc1wiLFxuXHRcIi4vYWRtaW4vdXNlckZvcm0uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vdXNlckZvcm0uanNcIixcblx0XCIuL2NvbW1vbi9saWJyYXJ5XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2NvbW1vbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9jb21tb24vbGlicmFyeS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9jb21tb24vbGlicmFyeS5qc1wiLFxuXHRcIi4vbGlicmFyaWFuXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9ib29rQ2FyZFwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vYm9va0NhcmQuanNcIixcblx0XCIuL2xpYnJhcmlhbi9ib29rQ2FyZC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vYm9va0NhcmQuanNcIixcblx0XCIuL2xpYnJhcmlhbi9pbmRleFwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9saWJyYXJ5XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vbGlicmFyeS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vbGlicmFyeS5qc1wiLFxuXHRcIi4vbG9naW5cIjogXCIuL3NvdXJjZXMvdmlld3MvbG9naW4uanNcIixcblx0XCIuL2xvZ2luLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzXCIsXG5cdFwiLi9yZWFkZXJcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL2Jvb2tDYXJkXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vcmVhZGVyL2Jvb2tDYXJkLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vcmVhZGVyL2NvbW1lbnRPYmpcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2NvbW1lbnRPYmouanNcIixcblx0XCIuL3JlYWRlci9jb21tZW50T2JqLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9jb21tZW50T2JqLmpzXCIsXG5cdFwiLi9yZWFkZXIvaW5kZXhcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvaW5kZXguanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvbGlicmFyeVwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbGlicmFyeS5qc1wiLFxuXHRcIi4vcmVhZGVyL2xpYnJhcnkuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2xpYnJhcnkuanNcIixcblx0XCIuL3JlYWRlci9tYWluXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzXCIsXG5cdFwiLi9yZWFkZXIvbWFpbi5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbWFpbi5qc1wiLFxuXHRcIi4vcmVhZGVyL3NldHRpbmdzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9zZXR0aW5ncy5qc1wiLFxuXHRcIi4vcmVhZGVyL3NldHRpbmdzLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9zZXR0aW5ncy5qc1wiLFxuXHRcIi4vcmVhZGVyL3RvcHNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3RvcHMuanNcIixcblx0XCIuL3JlYWRlci90b3BzLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci90b3BzLmpzXCIsXG5cdFwiLi9yZWdpc3RlclwiOiBcIi4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qc1wiLFxuXHRcIi4vcmVnaXN0ZXIuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2VzL3ZpZXdzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi8uLi9hdXRob3JpemF0aW9uJztcclxuaW1wb3J0IHVzZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzJztcclxuaW1wb3J0IFVzZXJGb3JtIGZyb20gJy4vdXNlckZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0ge1xyXG5cdFx0XHR0eXBlOidoZWFkZXInLCBcclxuXHRcdFx0dGVtcGxhdGU6ICdVc2VycyBsaXN0J1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsb2dvdXQgPSB7XHJcblx0XHRcdHZpZXc6J2J1dHRvbicsIFxyXG5cdFx0XHRsb2NhbElkOidsb2dvdXRCdG4nLCBcclxuXHRcdFx0dmFsdWU6J0xvZ291dCcsIFxyXG5cdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHR0eXBlOidmb3JtJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBkdGFibGUgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRpZDogJ3VzZXJzTGlzdCcsXHJcblx0XHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2lkJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdmdWxsX25hbWUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnTmFtZScsXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogMTgwLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLjVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncm9sZV9uYW1lJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JvbGUnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDkwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3Bhc3Nwb3J0X0lEJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1Bhc3Nwb3J0IElEJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAxMzBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYmlydGhfZGF0ZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdCaXJ0aCBkYXRlJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAxMzBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYWRkcmVzcycsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdBZGRyZXNzJyxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiAxODAsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEuNVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdwaG9uZV9udW1iZXJzJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1Bob25lIG51bWJlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogMTkwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2VtYWlsJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0VtYWlsJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAxODBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZWRpdCcsIFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRWRpdCcsIFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICd7Y29tbW9uLmVkaXRJY29uKCl9J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCd3eGktcGVuY2lsJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmVkaXRVc2VyKGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkVXNlckJ0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnQWRkIHVzZXInLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5hZGRVc2VyKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdWkgPSB7XHJcblx0XHRcdHJvd3M6W1xyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHR0eXBlOiAnY2xlYW4nLFxyXG5cdFx0XHRcdFx0Y29sczogW2hlYWRlciwgbG9nb3V0XSBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGR0YWJsZSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHt9LCBhZGRVc2VyQnRuLCB7fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dXNlcnNNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRsZXQgdXNlcnNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cdFx0XHR1c2Vyc0FyciA9IHVzZXJzQXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0XHRlbC5mdWxsX25hbWUgPSBlbC51c2VyX25hbWUgKyAnICcgKyBlbC51c2VyX3N1cm5hbWU7XHJcblx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0XHRlbC5iaXJ0aF9kYXRlID0gZm9ybWF0KG5ldyBEYXRlKGVsLmJpcnRoX2RhdGUpKTtcclxuXHRcdFx0XHRyZXR1cm4gZWw7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnVzZXJzRGF0YSA9IHVzZXJzQXJyO1xyXG5cdFx0XHQkJCgndXNlcnNMaXN0JykucGFyc2UodXNlcnNBcnIpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHJcblx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHR0aGlzLiQkKCdsb2dvdXRCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFwcCA9IHRoaXMuYXBwO1xyXG5cdFx0XHRjb25zdCBmb3JtYXQgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZLSVtLSVkXCIpO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpKTtcclxuXHRcdFx0XHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9nb3V0KHtjdXJyZW50RGF0ZX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5fdXNlckZvcm0gPSB0aGlzLnVpKFVzZXJGb3JtKTtcclxuXHR9XHJcblxyXG5cdGVkaXRVc2VyKGlkKSB7XHJcblx0XHRjb25zdCB1c2VyID0gdGhpcy51c2Vyc0RhdGEuZmluZChlbCA9PiBlbC5pZCA9PSBpZCk7XHJcblx0XHR0aGlzLl91c2VyRm9ybS5zaG93V2luZG93KHVzZXIpO1xyXG5cdH1cclxuXHJcblx0YWRkVXNlcigpIHtcclxuXHRcdHRoaXMuX3VzZXJGb3JtLnNob3dXaW5kb3coKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHVzZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzJztcclxuaW1wb3J0IHt0b2dnbGVFbGVtZW50LCBhZGRJdGVtLCB1cGRhdGVJdGVtfSBmcm9tICcuLi8uLi9zY3JpcHRzJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyRm9ybSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICd3aW5kb3cnLFxyXG5cdFx0XHRsb2NhbElkOiAndXNlcldpbmRvdycsXHJcblx0XHRcdGhlYWQ6ICdFZGl0IHVzZXInLFxyXG5cdFx0XHR3aWR0aDogNjAwLFxyXG5cdFx0XHRwb3NpdGlvbjogJ2NlbnRlcicsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0bG9jYWxJZDogJ3VzZXJGb3JtJyxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbmFtZTogJ2lkJywgbG9jYWxJZDogJ2lkJywgaGlkZGVuOiB0cnVlIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRmlyc3QgbmFtZScsIG5hbWU6ICd1c2VyX25hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0xhc3QgbmFtZScsIG5hbWU6ICd1c2VyX3N1cm5hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdSb2xlJywgbmFtZTogJ2NhcGFiaWxpdGllc19pZCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBvcHRpb25zOiBbXHJcblx0XHRcdFx0XHRcdFx0XHR7aWQ6IDEsIHZhbHVlOiAncmVhZGVyJ30sXHJcblx0XHRcdFx0XHRcdFx0XHR7aWQ6IDIsIHZhbHVlOiAnbGFicmFyaWFuJ30sXHJcblx0XHRcdFx0XHRcdFx0XHR7aWQ6IDMsIHZhbHVlOiAnYWRtaW4nfVxyXG5cdFx0XHRcdFx0XHRcdF0gfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYXNzcG9ydCBJRCcsIG5hbWU6ICdwYXNzcG9ydF9JRCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAnZGF0ZXBpY2tlcicsIGxhYmVsOiAnQmlydGggZGF0ZScsIG5hbWU6ICdiaXJ0aF9kYXRlJywgbG9jYWxJZDogJ2JpcnRoX2RhdGUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0FkZHJlc3MnLCBuYW1lOiAnYWRkcmVzcycsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGhvbmUnLCBuYW1lOiAncGhvbmVfbnVtYmVycycsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRW1haWwnLCBuYW1lOiAnZW1haWwnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bhc3N3b3JkJywgbmFtZTogJ2FjY291bnRfcGFzc3dvcmQnLCBsb2NhbElkOiAnaW5pdGlhbF9wYXNzd29yZCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdHJ1bGVzOiB7XHJcblx0XHRcdFx0XHRcdFx0J2NhcGFiaWxpdGllc19pZCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdFx0J2VtYWlsJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eSxcclxuXHRcdFx0XHRcdFx0XHQnYWNjb3VudF9wYXNzd29yZCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDIwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdTYXZlJywgdHlwZTogJ2Zvcm0nLCBsb2NhbElkOiAnc2F2ZUJ0bicsIHdpZHRoOiAxMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVGb3JtKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdDYW5jZWwnLCB3aWR0aDogMTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlV2luZG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7fVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybSA9IHRoaXMuJCQoJ3VzZXJGb3JtJyk7XHJcblx0XHR0aGlzLndpbmRvdyA9IHRoaXMuJCQoJ3VzZXJXaW5kb3cnKTtcclxuXHR9XHJcblxyXG5cdHN1Y2Nlc3NBY3Rpb24oKSB7XHJcblx0XHR0aGlzLndlYml4Lm1lc3NhZ2UoJ1N1Y2Nlc3MnKTtcclxuXHRcdHRoaXMuaGlkZVdpbmRvdygpO1xyXG5cdH1cclxuXHJcblx0c2hvd1dpbmRvdyh1c2VyKSB7XHRcclxuXHRcdHRoaXMuaXNOZXcgPSB1c2VyID8gZmFsc2UgOiB0cnVlO1x0XHJcblxyXG5cdFx0aWYodGhpcy5pc05ldykge1xyXG5cdFx0XHR0aGlzLndpbmRvdy5nZXRIZWFkKCkuc2V0SFRNTCgnQWRkIHVzZXInKTtcclxuXHRcdFx0dGhpcy53aW5kb3cuZ2V0SGVhZCgpLnJlZnJlc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKHVzZXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGluaXRpYWxfcGFzc3dvcmQgPSB0aGlzLiQkKCdpbml0aWFsX3Bhc3N3b3JkJyk7XHJcblx0XHR0b2dnbGVFbGVtZW50KHRoaXMuaXNOZXcsIGluaXRpYWxfcGFzc3dvcmQpO1xyXG5cdFx0XHJcblxyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1xyXG5cdH1cclxuXHJcblx0c2F2ZUZvcm0oKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5mb3JtLmdldFZhbHVlcygpO1x0XHJcblx0XHRcclxuXHRcdGlmKHRoaXMuZm9ybS52YWxpZGF0ZSgpKSB7XHJcblx0XHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0XHRhZGRJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHRoaXMuc3VjY2Vzc0FjdGlvbi5iaW5kKHRoaXMpKTtcdFxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHVwZGF0ZUl0ZW0odXNlcnNNb2RlbCwgZGF0YSwgdGhpcy5zdWNjZXNzQWN0aW9uLmJpbmQodGhpcykpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHJcblx0aGlkZVdpbmRvdygpIHtcclxuXHRcdHRoaXMuZm9ybS5jbGVhclZhbGlkYXRpb24oKTtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy5nZXRSb290KCkuaGlkZSgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5pbXBvcnQgZmlsZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvZmlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlicmFyeSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbnN0cnVjdG9yKGFwcCwgbGlicmFyeUNvbmZpZywgYm9va0NhcmQpIHtcclxuXHRcdHN1cGVyKGFwcCk7XHJcblx0XHR0aGlzLmxpYnJhcnlDb25maWcgPSBsaWJyYXJ5Q29uZmlnO1xyXG5cdFx0dGhpcy5ib29rQ2FyZCA9IGJvb2tDYXJkO1xyXG5cdH1cclxuXHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgaGVhZGVyID0ge1xyXG5cdFx0XHR0eXBlOiAnaGVhZGVyJyxcclxuXHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1ib29rXCI+PC9pPiBMaXN0IG9mIGJvb2tzJyxcclxuXHRcdFx0Y3NzOiAnY2VudGVyIHBhZ2VfaGVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBkdGFibGUgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRpZDogJ2R0X2xpYnJhcnknLFxyXG5cdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2lkJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYm9va190aXRsZScsXHJcblx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnVGl0bGUnLCB7Y29udGVudDogJ3RleHRGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYXV0aG9yX25hbWUnLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ0F1dGhvcicsIHtjb250ZW50OiAndGV4dEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdnZW5yZXMnLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydHZW5yZXMnLCB7Y29udGVudDogJ3NlbGVjdEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdjb3VudHJ5X29mX3B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnQ291bnRyeScsIHtjb250ZW50OiAnc2VsZWN0RmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3llYXJfb2ZfcHVibGljYXRpb24nLFxyXG5cdFx0XHRcdFx0c29ydDogJ2RhdGUnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGZvcm1hdDogd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWVwiKSxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydZZWFyJywge2NvbnRlbnQ6ICdkYXRlUmFuZ2VGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYXZhaWxhYmxlX2NvcGllcycsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQXZhaWxhYmxlJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdlYm9vaycsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnZUJvb2snLCB7Y29udGVudDpcInNlbGVjdEZpbHRlclwifV0sXHJcblx0XHRcdFx0XHR3aWR0aDogNzAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogKG9iaikgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqLmVib29rPT09J3llcycgPyAnPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+JyA6ICcnXHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICd2aWV3Q29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1ZpZXcnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtZXllXCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZWRpdENvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdFZGl0JyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdyZW1vdmVDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUmVtb3ZlJyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNzAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPidcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnZmEtZXllJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dCb29rQ2FyZChpZCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnZmEtZWRpdCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93Qm9va0NhcmQoaWQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2ZhLXRyYXNoJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUJvb2soaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbaGVhZGVyLCBkdGFibGVdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0YXN5bmMgaW5pdCgpIHtcclxuXHRcdHRoaXMuZ3JpZCA9ICQkKCdkdF9saWJyYXJ5Jyk7XHJcblxyXG5cdFx0c3dpdGNoICh0aGlzLmxpYnJhcnlDb25maWcucm9sZSkge1xyXG5cdFx0XHRjYXNlICdyZWFkZXInOiBcclxuXHRcdFx0XHR0aGlzLmdyaWQuZ2V0Q29sdW1uQ29uZmlnKCdlZGl0Q29sJykuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmdyaWQuZ2V0Q29sdW1uQ29uZmlnKCdyZW1vdmVDb2wnKS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsaWJyYXJpYW4nOlxyXG5cdFx0XHRcdHRoaXMuZ3JpZC5nZXRDb2x1bW5Db25maWcoJ3ZpZXdDb2wnKS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ncmlkLnJlZnJlc2hDb2x1bW5zKCk7XHJcblx0XHRhd2FpdCB0aGlzLmdldERhdGEoKTtcclxuXHRcdGF3YWl0IHRoaXMuZ2V0RmlsZXMoKTtcclxuXHRcdHRoaXMuY2hlY2tGaWxlcygpO1x0XHRcclxuXHJcblx0XHR0aGlzLmdyaWQucGFyc2UodGhpcy5ib29rc0Fycik7XHJcblx0XHR0aGlzLl9ib29rQ2FyZCA9IHRoaXMudWkodGhpcy5ib29rQ2FyZCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBnZXREYXRhKCkge1x0XHRcclxuXHRcdGNvbnN0IHVzZXJfaWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblx0XHRjb25zdCBkYkRhdGEgPSBhd2FpdCBib29rc01vZGVsLmdldERhdGFGcm9tU2VydmVyKHVzZXJfaWQpO1xyXG5cdFx0bGV0IGJvb2tzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHJcblx0XHRib29rc0FyciA9IGJvb2tzQXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0ZWwueWVhcl9vZl9wdWJsaWNhdGlvbiA9IG5ldyBEYXRlKGVsLnllYXJfb2ZfcHVibGljYXRpb24pO1xyXG5cdFx0XHRyZXR1cm4gZWw7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuYm9va3NBcnIgPSBib29rc0FycjtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldEZpbGVzKCkge1xyXG5cdFx0Y29uc3QgZGJEYXRhID0gYXdhaXQgZmlsZXNNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpO1xyXG5cdFx0dGhpcy5maWxlc0FyciA9IGRiRGF0YS5qc29uKCk7XHRcdFx0XHRcdFx0XHJcblx0fVxyXG5cclxuXHRjaGVja0ZpbGVzKCkge1xyXG5cdFx0dGhpcy5ib29rc0Fyci5mb3JFYWNoKChib29rLCBpKSA9PiB7XHJcblx0XHRcdGNvbnN0IGlzRmlsZXMgPSB0aGlzLmZpbGVzQXJyLmZpbmQoKGVsKSA9PiBlbC5ib29rX2lkID09PSBib29rLmlkKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKGlzRmlsZXMpIHtcclxuXHRcdFx0XHR0aGlzLmJvb2tzQXJyW2ldLmVib29rID0gJ3llcyc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5ib29rc0FycltpXS5lYm9vayA9ICdubyc7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2hvd0Jvb2tDYXJkKGlkKSB7XHJcblx0XHRjb25zdCBib29rID0gdGhpcy5ib29rc0Fyci5maW5kKGVsID0+IGVsLmlkID09IGlkKTtcclxuXHRcdHRoaXMuX2Jvb2tDYXJkLnNob3dQb3B1cChib29rKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUJvb2soaWQpIHtcclxuXHRcdGJvb2tzTW9kZWwucmVtb3ZlSXRlbShpZCk7XHJcblx0XHRyZXR1cm4gdGhpcy5ncmlkLnJlbW92ZShpZCk7XHJcblx0fVxyXG5cclxuXHRhZGRCb29rKCkge1xyXG5cdFx0dGhpcy5fYm9va0NhcmQuc2hvd1BvcHVwKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBib29rc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9ib29rcyc7XHJcbmltcG9ydCB7IERVTU1ZQ09WRVIgfSBmcm9tICcuLi8uLi9jb25zdHMnO1xyXG5pbXBvcnQgeyB0b2dnbGVFbGVtZW50LCBhZGRJdGVtLCB1cGRhdGVJdGVtIH0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5pbXBvcnQgZmlsZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvZmlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0NhcmQgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0Y29uc3QgYm9va0NvdmVyID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NvdmVyJyxcclxuXHRcdFx0d2lkdGg6IDEyMCxcclxuXHRcdFx0aGVpZ2h0OiAxODAsXHJcblx0XHRcdGNzczogJ2Jvb2tfY292ZXInLFxyXG5cdFx0XHR0ZW1wbGF0ZTogKHVybCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3VybH0pXCIgPjwvZGl2PmA7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYm9va0NhcmQgPSB7XHJcblx0XHRcdGxvY2FsSWQ6ICdib29rQ2FyZExpYnJhcmlhbicsXHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0Ym9yZGVybGVzczogdHJ1ZSxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdUaXRsZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2Jvb2tfdGl0bGUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQXV0aG9yJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYXV0aG9yX25hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAnY29tYm8nLCBsYWJlbDogJ0dlbnJlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2dlbnJlcycsIG9wdGlvbnM6IFtcclxuXHRcdFx0XHRcdCcnLCAnRmljdGlvbicsICdGYW50YXN5JywgJ1RocmlsbGVyJywgJ0hvcnJvcicsICdNeXN0ZXJ5JywgJ0hpc3RvcmljYWwnLCAnV2VzdGVybnMnLCAnRmFtaWx5JywgJ0RhcmsgY29tZWR5J1xyXG5cdFx0XHRcdF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0NvdW50cnknLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdjb3VudHJ5X29mX3B1YmxpY2F0aW9uJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1B1Ymxpc2hpbmcgaG91c2UnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdwdWJsaXNoaW5nX2hvdXNlJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F2YWlsYWJsZSBjb3BpZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdmFpbGFibGVfY29waWVzJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1BhZ2VzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnbnVtYmVyX29mX3BhZ2VzJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0NvdmVyIHBob3RvJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY292ZXJfcGhvdG8nIH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhZGRUZXh0RmlsZSA9IHtcclxuXHRcdFx0dmlldzogJ3VwbG9hZGVyJyxcclxuXHRcdFx0bGFiZWw6ICc8aSBjbGFzcz1cImZhcyBmYS1maWxlLXVwbG9hZFwiPjwvaT4gVXBsb2FkIHRleHQgZmlsZScsXHJcblx0XHRcdGxvY2FsSWQ6ICdib29rRmlsZXMnLFxyXG5cdFx0XHR0eXBlOiAnaHRtbGJ1dHRvbicsXHJcblx0XHRcdGF1dG9zZW5kOiBmYWxzZSxcclxuXHRcdFx0d2lkdGg6IDE1MCxcclxuXHRcdFx0Zm9ybURhdGE6ICgpID0+ICh7XHJcblx0XHRcdFx0dXNlcl9pZDogdGhpcy51c2VySWQsXHJcblx0XHRcdFx0Ym9va19pZDogdGhpcy5ib29rSWRcclxuXHRcdFx0fSksXHJcblx0XHRcdGFjY2VwdDogJ3RleHQvcGxhaW4sIGFwcGxpY2F0aW9uL3BkZiwgLmRvYywgLmRvY3gnLFxyXG5cdFx0XHR1cGxvYWQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmlsZXMvdXBsb2FkL3RleHQnLFxyXG5cdFx0XHRsaW5rOiAnZmlsZXNMaXN0J1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBmaWxlc0xpc3QgPSB7XHJcblx0XHRcdHZpZXc6ICdsaXN0JyxcclxuXHRcdFx0dHlwZTogJ3VwbG9hZGVyJyxcclxuXHRcdFx0aWQ6ICdmaWxlc0xpc3QnLFxyXG5cdFx0XHRhdXRvaGVpZ2h0OnRydWUsIFxyXG5cdFx0XHRib3JkZXJsZXNzOnRydWVcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkQXVkaW9GaWxlID0ge1xyXG5cdFx0XHR2aWV3OiAndXBsb2FkZXInLFxyXG5cdFx0XHRsYWJlbDogJzxpIGNsYXNzPVwiZmFzIGZhLW11c2ljXCI+PC9pPiBVcGxvYWQgYXVkaW8nLFxyXG5cdFx0XHRsb2NhbElkOiAnYXVkaW9GaWxlcycsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0YXV0b3NlbmQ6IGZhbHNlLFxyXG5cdFx0XHR3aWR0aDogMTUwLFxyXG5cdFx0XHRmb3JtRGF0YTogKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHR1c2VyX2lkOiB0aGlzLnVzZXJJZCxcclxuXHRcdFx0XHRcdGJvb2tfaWQ6IHRoaXMuYm9va0lkXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YWNjZXB0OiAnLm1wMycsXHJcblx0XHRcdHVwbG9hZDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9maWxlcy91cGxvYWQvYXVkaW8nLFxyXG5cdFx0XHRsaW5rOiAnYXVkaW9MaXN0J1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdWRpb0xpc3QgPSB7XHJcblx0XHRcdHZpZXc6ICdsaXN0JyxcclxuXHRcdFx0dHlwZTogJ3VwbG9hZGVyJyxcclxuXHRcdFx0aWQ6ICdhdWRpb0xpc3QnLFxyXG5cdFx0XHRhdXRvaGVpZ2h0OnRydWUsIFxyXG5cdFx0XHRib3JkZXJsZXNzOnRydWVcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXZhaWxhYmxlVGV4dEZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiAnYWN0aXZlTGlzdCcsXHJcblx0XHRcdGxvY2FsSWQ6ICdhdmFpbGFibGVUZXh0RmlsZXMnLFxyXG5cdFx0XHR0ZW1wbGF0ZTogYCNuYW1lIyA8c3BhbiBjbGFzcz0nbGlzdF9idXR0b24nPjxpIGNsYXNzID0gJ2ZhcyBmYS10aW1lcyc+PC9pPjwvc3Bhbj5gLFxyXG5cdFx0XHRvbjoge1xyXG5cdFx0XHRcdG9uSXRlbUNsaWNrOiAoaWQpID0+IHtcclxuXHRcdFx0XHRcdC8vcmVtb3ZlIGZpbGUgYW5kIHJlY29yZCBpbiBEQlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVBdWRpb0ZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiBcImFjdGl2ZUxpc3RcIixcclxuXHRcdFx0bG9jYWxJZDogXCJhdmFpbGFibGVBdWRpb0ZpbGVzXCIsXHJcblx0XHRcdHRlbXBsYXRlOiBcIiNuYW1lI1wiICtcclxuXHRcdFx0XHRcdFwiPHNwYW4gY2xhc3M9J2xpc3RfYnV0dG9uJz48aSBjbGFzcyA9ICdmYXMgZmEtdGltZXMnPjwvaT48L3NwYW4+XCIsXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNhdmVCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdGxhYmVsOiAnU2F2ZScsXHJcblx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNhdmVGb3JtKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3BvcHVwJyxcclxuXHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRtYXhIZWlnaHQ6IDU1MCxcclxuXHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdHZpZXc6ICdzY3JvbGx2aWV3JyxcclxuXHRcdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHRcdGJvb2tDb3ZlciwgXHJcblx0XHRcdFx0XHRcdGJvb2tDYXJkLFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dmlldzogJ3RlbXBsYXRlJyxcclxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZTogJ0ZpbGVzJyxcclxuXHRcdFx0XHRcdFx0XHRhdXRvaGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGNzczogJ2NlbnRlcidcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e2hlaWdodDogMn0sXHJcblx0XHRcdFx0XHRcdGF2YWlsYWJsZVRleHRGaWxlcyxcclxuXHRcdFx0XHRcdFx0YXZhaWxhYmxlQXVkaW9GaWxlcyxcclxuXHRcdFx0XHRcdFx0ZmlsZXNMaXN0LFxyXG5cdFx0XHRcdFx0XHRhdWRpb0xpc3QsXHJcblx0XHRcdFx0XHRcdHtoZWlnaHQ6IDE1fSxcclxuXHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHRsb2NhbElkOiAnYWRkaW5nRmlsZXNCdXR0b25zJyxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdFx0XHRcdGNvbHM6IFsge30sIGFkZFRleHRGaWxlLCBhZGRBdWRpb0ZpbGUsIHt9IF0gXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtoZWlnaHQ6IDF9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdYOiAxNSxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0Y29sczogW3t9LCBzYXZlQnRuLCB7fV1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybSA9IHRoaXMuJCQoJ2Jvb2tDYXJkTGlicmFyaWFuJyk7XHJcblx0fVxyXG5cclxuXHRzaG93UG9wdXAoYm9vaykge1xyXG5cdFx0dGhpcy5jbGVhckZvcm0oKTtcclxuXHRcdHRoaXMuaXNOZXcgPSBib29rID8gZmFsc2UgOiB0cnVlO1xyXG5cdFx0dGhpcy5ib29rID0gYm9vayB8fCAnJztcclxuXHRcdHRoaXMuYm9va0lkID0gYm9vayA/IGJvb2suaWQgOiAnJztcclxuXHRcdHRoaXMudXNlcklkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cclxuXHRcdGZpbGVzTW9kZWwuZ2V0SXRlbXModGhpcy5ib29rSWQpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCBmaWxlc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0XHRjb25zdCB0ZXh0RmlsZXMgPSBbXTtcclxuXHRcdFx0Y29uc3QgYXVkaW9GaWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0ZmlsZXNBcnIuZm9yRWFjaCgoZmlsZSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaChmaWxlLmRhdGFfdHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0XHRcdHRleHRGaWxlcy5wdXNoKGZpbGUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2F1ZGlvJzpcclxuXHRcdFx0XHRcdFx0YXVkaW9GaWxlcy5wdXNoKGZpbGUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5wYXJzZSh0ZXh0RmlsZXMpO1xyXG5cdFx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykucGFyc2UoYXVkaW9GaWxlcyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0b2dnbGVFbGVtZW50KCF0aGlzLmlzTmV3LCB0aGlzLiQkKCdib29rQ292ZXInKSk7XHJcblx0XHR0b2dnbGVFbGVtZW50KCF0aGlzLmlzTmV3LCB0aGlzLiQkKCdhZGRpbmdGaWxlc0J1dHRvbnMnKSk7XHJcblxyXG5cdFx0aWYoIXRoaXMuaXNOZXcpIHtcclxuXHRcdFx0dGhpcy5mb3JtLnNldFZhbHVlcyhib29rKTtcclxuXHRcdFx0dGhpcy4kJCgnYm9va0NvdmVyJykuc2V0VmFsdWVzKGJvb2suY292ZXJfcGhvdG8gfHwgRFVNTVlDT1ZFUik7XHRcdFx0XHJcblx0XHR9XHRcdFxyXG5cclxuXHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcdFxyXG5cdH1cclxuXHJcblx0c2F2ZUZvcm0oKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5mb3JtLmdldFZhbHVlcygpO1xyXG5cclxuXHRcdGNvbnN0IHN1Y2Nlc3NBY3Rpb24gPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMud2ViaXgubWVzc2FnZSgnU3VjY2VzcycpO1xyXG5cdFx0XHR0aGlzLmhpZGVXaW5kb3coKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYodGhpcy5mb3JtLnZhbGlkYXRlKCkpIHtcclxuXHRcdFx0aWYodGhpcy5pc05ldykge1xyXG5cdFx0XHRcdGFkZEl0ZW0oYm9va3NNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbik7XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dXBkYXRlSXRlbShib29rc01vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kJCgnYm9va0ZpbGVzJykuc2VuZCgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZihyZXNwb25zZSl7XHJcblx0XHRcdFx0XHR0aGlzLndlYml4Lm1lc3NhZ2UocmVzcG9uc2UubWVzc2FnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJCQoJ2F1ZGlvRmlsZXMnKS5zZW5kKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKXtcclxuXHRcdFx0XHRcdHRoaXMud2ViaXgubWVzc2FnZShyZXNwb25zZS5tZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVx0XHRcclxuXHR9XHJcblxyXG5cdGhpZGVXaW5kb3coKSB7XHJcblx0XHR0aGlzLmNsZWFyRm9ybSgpO1xyXG5cdFx0dGhpcy5nZXRSb290KCkuaGlkZSgpO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJGb3JtICgpe1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyVmFsaWRhdGlvbigpO1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyKCk7XHJcblx0XHR0aGlzLiQkKCdib29rRmlsZXMnKS5maWxlcy5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXVkaW9GaWxlcycpLmZpbGVzLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi8uLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgdGVtcGxhdGU6dGhpcy5hcHAuY29uZmlnLm5hbWUsIGNzczond2ViaXhfaGVhZGVyIGFwcF9oZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG1lbnUgPSB7XHJcblx0XHRcdHZpZXc6J21lbnUnLCBcclxuXHRcdFx0Y3NzOidhcHBfbWVudScsXHJcblx0XHRcdHdpZHRoOjE4MCwgXHJcblx0XHRcdGxheW91dDoneScsIFxyXG5cdFx0XHRzZWxlY3Q6dHJ1ZSxcclxuXHRcdFx0dGVtcGxhdGU6JzxzcGFuIGNsYXNzPVwid2ViaXhfaWNvbiAjaWNvbiNcIj48L3NwYW4+ICN2YWx1ZSMgJyxcclxuXHRcdFx0dmFsdWU6ICdtYWluJyxcclxuXHRcdFx0ZGF0YTpbXHJcblx0XHRcdFx0eyB2YWx1ZTonTGlicmFyeScsIGlkOidsaWJyYXJ5JywgIGljb246J2ZhcyBmYS1ib29rLXJlYWRlcicgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidVc2VycycsIGlkOid1c2VycycsICBpY29uOidmYXMgZmEtY29nJyB9XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uOntcclxuXHRcdFx0XHRvbk1lbnVJdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXNlcl9pZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwLnNob3coYGxpYnJhcmlhbi5pbmRleD9pZD0ke3VzZXJfaWR9L2xpYnJhcmlhbi4ke2lkfWApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsb2dvdXQgPSB7XHJcblx0XHRcdHZpZXc6J2J1dHRvbicsIFxyXG5cdFx0XHRsb2NhbElkOidsb2dvdXRCdG4nLCBcclxuXHRcdFx0dmFsdWU6J0xvZ291dCcsIFxyXG5cdFx0XHR0eXBlOidmb3JtJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1aSA9IHtcclxuXHRcdFx0dHlwZTonY2xlYW4nLCBwYWRkaW5nWDo1LCBjc3M6J2FwcF9sYXlvdXQnLCBcclxuXHRcdFx0Y29sczpbXHJcblx0XHRcdFx0eyBwYWRkaW5nWDo1LCBwYWRkaW5nWToxMCwgcm93czogWyB7Y3NzOid3ZWJpeF9zaGFkb3dfbWVkaXVtJywgcm93czpbaGVhZGVyLCBtZW51LCBsb2dvdXRdfSBdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdyZXNpemVyJywgd2lkdGg6IDUgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0eXBlOiAnd2lkZScsIHBhZGRpbmdZOiAxMCwgcGFkZGluZ1g6IDUsIHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0eyAkc3VidmlldzogdHJ1ZSB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdHRoaXMuJCQoJ2xvZ291dEJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYXBwID0gdGhpcy5hcHA7XHJcblx0XHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVktJW0tJWRcIik7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dvdXQoe2N1cnJlbnREYXRlfSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSBcIndlYml4LWpldFwiO1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuLi9jb21tb24vbGlicmFyeSc7XHJcbmltcG9ydCBCb29rQ2FyZCBmcm9tICcuL2Jvb2tDYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxpYkxpYnJhcnkgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHRcclxuXHJcblx0XHRjb25zdCBsaWJyYXJ5Q29uZmlnID0ge1xyXG5cdFx0XHRyb2xlOiAnbGlicmFyaWFuJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhZGRCb29rQnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQgYm9vaycsXHJcblx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRsaWJyYXJ5LmFkZEJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsaWJyYXJ5ID0gbmV3IExpYnJhcnkodGhpcy5hcHAsIGxpYnJhcnlDb25maWcsIEJvb2tDYXJkKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdGxpYnJhcnksXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sczogW3t9LGFkZEJvb2tCdG4se31dXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luUGFnZSBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgbG9naW5Gb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdsb2dpbkZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1VzZXJuYW1lJywgbmFtZTogJ3VzZXJuYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCB0eXBlOiAncGFzc3dvcmQnLCBsYWJlbDogJ1Bhc3N3b3JkJywgbmFtZTogJ3Bhc3N3b3JkJyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1hcmdpbjogNSwgY29sczogW1xyXG5cdFx0XHRcdFx0XHR7IHZpZXc6ICdidXR0b24nLCBsb2NhbElkOiAnbG9naW5CdG4nLCB2YWx1ZTogJ0xvZ2luJywgdHlwZTogJ2Zvcm0nIH0sXHJcblx0XHRcdFx0XHRcdHsgdmlldzogJ2J1dHRvbicsIHZhbHVlOiAnQ2FuY2VsJyB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxpbmsgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0NyZWF0ZSBhbiBhY2NvdW50JyxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNob3coJy9yZWdpc3RlcicpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1x0XHJcblx0XHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHRsb2dpbkZvcm0sXHJcblx0XHRcdFx0XHRcdGxpbmssXHJcblx0XHRcdFx0XHRcdHt9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuJCQoJ2xvZ2luQnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLiQkKCdsb2dpbkZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ2luKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcdFxyXG5cdFx0XHRcdGlmIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXNlckRhdGEgPSByZXNwb25zZS5qc29uKCkudXNlcjtcclxuXHRcdFx0XHRcdGNvbnN0IGlkID0gdXNlckRhdGEuaWQ7XHJcblxyXG5cdFx0XHRcdFx0c3dpdGNoICh1c2VyRGF0YS5yb2xlX25hbWUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnYWRtaW4nOiBcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3coYGFkbWluLmluZGV4P2lkPSR7aWR9YCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2xpYnJhcmlhbic6IFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvdyhgbGlicmFyaWFuLmluZGV4P2lkPSR7aWR9L2xpYnJhcmlhbi5saWJyYXJ5YCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3JlYWRlcic6IFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvdyhgcmVhZGVyLmluZGV4P2lkPSR7aWR9L3JlYWRlci5tYWluYCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0d2ViaXgubWVzc2FnZShyZXNwb25zZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcdFx0XHRcdFxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBsaWtlc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9saWtlcyc7XHJcbmltcG9ydCB7dG9nZ2xlRWxlbWVudH0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5pbXBvcnQge0RVTU1ZQ09WRVIsIFNVQ0NFU1N9IGZyb20gJy4uLy4uL2NvbnN0cyc7IFxyXG5pbXBvcnQgZmlsZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvZmlsZXMnO1xyXG5pbXBvcnQgb3JkZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVycyc7XHJcbmltcG9ydCBDb21tZW50Q2xhc3MgZnJvbSAnLi9jb21tZW50T2JqJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDYXJkIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDb3ZlciA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDb3ZlcicsXHJcblx0XHRcdHdpZHRoOiAxMjAsXHJcblx0XHRcdGhlaWdodDogMTgwLFxyXG5cdFx0XHRjc3M6ICdib29rX2NvdmVyJyxcclxuXHRcdFx0dGVtcGxhdGU6ICh1cmwpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gYDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KVwiID48L2Rpdj5gO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDYXJkID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NhcmRSZWFkZXInLFx0XHRcdFxyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVGl0bGUnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdib29rX3RpdGxlJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdXRob3InLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdXRob3JfbmFtZScsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnR2VucmVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnZ2VucmVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUHVibGlzaGluZyBob3VzZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ3B1Ymxpc2hpbmdfaG91c2UnLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F2YWlsYWJsZSBjb3BpZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdmFpbGFibGVfY29waWVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYWdlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ251bWJlcl9vZl9wYWdlcycsIHJlYWRvbmx5OiB0cnVlIH1cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVUZXh0RmlsZXMgPSB7XHJcblx0XHRcdHZpZXc6ICdhY3RpdmVMaXN0JyxcclxuXHRcdFx0bG9jYWxJZDogJ2F2YWlsYWJsZVRleHRGaWxlcycsXHJcblx0XHRcdHRlbXBsYXRlOiBcIiNuYW1lI1wiICtcclxuXHRcdFx0XHRcdFwiPHNwYW4gY2xhc3M9J2xpc3RfYnV0dG9uJz48aSBjbGFzcyA9ICdmYXMgZmEtZG93bmxvYWQnPjwvaT48L3NwYW4+XCIsXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgYm9va05hbWUgPSB0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5nZXRJdGVtKGlkKS5uYW1lO1xyXG5cclxuXHRcdFx0XHRcdGZpbGVzTW9kZWwuZG93bmxvYWRJdGVtKGlkKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0d2ViaXguaHRtbC5kb3dubG9hZChyZXMsIGJvb2tOYW1lKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVBdWRpb0ZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiBcImFjdGl2ZUxpc3RcIixcclxuXHRcdFx0bG9jYWxJZDogXCJhdmFpbGFibGVBdWRpb0ZpbGVzXCIsXHJcblx0XHRcdHR5cGU6e1xyXG5cdFx0XHRcdGhlaWdodDoxMDBcclxuXHRcdFx0fSxcclxuXHRcdFx0dGVtcGxhdGU6IFwiI25hbWUjPGF1ZGlvIGNvbnRyb2xzIHNyYz0naHR0cDovL2xvY2FsaG9zdDozMDAwL2F1ZGlvLyNpZCMnPjwvYXVkaW8+XCJcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb3JkZXJCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ29yZGVyQm9vaycsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0bGFiZWw6ICc8aSBjbGFzcz1cImZhciBmYS1oYW5kLXBhcGVyXCI+PC9pPiBPcmRlcicsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMub3JkZXJCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZG93bmxvYWRCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ2Rvd25sb2FkQm9vaycsXHJcblx0XHRcdHR5cGU6ICdpY29uJyxcclxuXHRcdFx0aWNvbjogJ2ZhcyBmYS1kb3dubG9hZCcsXHJcblx0XHRcdHdpZHRoOiA2MCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5vcmRlckJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsaWtlQm9vayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGxvY2FsSWQ6ICdsaWtlQnV0dG9uJyxcclxuXHRcdFx0Y3NzOiAnbGlrZV9idXR0b24nLFxyXG5cdFx0XHR0eXBlOiAnaWNvbicsIFxyXG5cdFx0XHRpY29uOiAnZmFyIGZhLWhlYXJ0JyxcclxuXHRcdFx0d2lkdGg6IDQ1LFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLmxpa2VCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdG9nZ2xlQ29tbWVudHNCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRsb2NhbElkOiAnY29tbWVudEJ1dHRvbicsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0bGFiZWw6ICdDb21tZW50cyA8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3duXCI+JyxcclxuXHRcdFx0d2lkdGg6IDEyMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5Db21tZW50LnRvZ2dsZUNvbW1lbnRzKHRoaXMuY29tbWVudHNHb3QsIHRoaXMuJCQoJ2NvbW1lbnRCdXR0b24nKSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkQ29tbWVudCA9IHtcclxuXHRcdFx0bWFyZ2luOiA1LFxyXG5cdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdHBhZGRpbmdYOiAxNyxcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZpZXc6J3RleHRhcmVhJyxcclxuXHRcdFx0XHRcdGxvY2FsSWQ6ICd1c2VyQ29tbWVudCcsXHJcblx0XHRcdFx0XHRsYWJlbDogJ0NvbW1lbnQnLFxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbjogJ3RvcCcsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IDgwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdFx0bG9jYWxJZDogJ3NhdmVDb21tZW50QnRuJyxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICdTZW5kJyxcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuQ29tbWVudC5zYXZlQ29tbWVudCh0aGlzLiQkKCd1c2VyQ29tbWVudCcpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgY29tbWVudHMgPSB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHt9LCB0b2dnbGVDb21tZW50c0J0biwge31cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxvY2FsSWQ6ICdjb21tZW50TGF5b3V0JyxcclxuXHRcdFx0XHRcdGhpZGRlbjogdHJ1ZSxcclxuXHRcdFx0XHRcdHJvd3M6IFtdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICdwb3B1cCcsXHJcblx0XHRcdHBvc2l0aW9uOidjZW50ZXInLFxyXG5cdFx0XHRtYXhIZWlnaHQ6IDU1MCxcclxuXHRcdFx0Ym9keTp7XHJcblx0XHRcdFx0dmlldzogJ3Njcm9sbHZpZXcnLFxyXG5cdFx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0Ym9va0NvdmVyLCBib29rQ2FyZCwgYXZhaWxhYmxlVGV4dEZpbGVzLCBhdmFpbGFibGVBdWRpb0ZpbGVzLFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdYOiAxNSxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHRcdG9yZGVyQm9vaywgZG93bmxvYWRCb29rLCB7fSwgbGlrZUJvb2tcclxuXHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGFkZENvbW1lbnQsXHJcblx0XHRcdFx0XHRcdGNvbW1lbnRzXHJcblx0XHRcdFx0XHRdIFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblx0XHJcblx0c2hvd1BvcHVwKGJvb2spIHtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbiA9IHRoaXMuJCQoJ2xpa2VCdXR0b24nKTtcclxuXHRcdHRoaXMuZm9ybSA9IHRoaXMuJCQoJ2Jvb2tDYXJkUmVhZGVyJyk7XHJcblx0XHR0aGlzLmZpbGVzTGlzdCA9IHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpO1xyXG5cdFx0dGhpcy50b2dnbGVDb21tZW50c0J0biA9IHRoaXMuJCQoJ2NvbW1lbnRCdXR0b24nKTtcclxuXHRcdHRoaXMub3JkZXJCdG4gPSB0aGlzLiQkKCdvcmRlckJvb2snKTtcclxuXHRcdHRoaXMuY29tbWVudExheW91dCA9IHRoaXMuJCQoJ2NvbW1lbnRMYXlvdXQnKTtcclxuXHRcdHRoaXMuYm9vayA9IGJvb2s7XHJcblx0XHR0aGlzLmJvb2tJZCA9IGJvb2suaWQ7XHJcblx0XHR0aGlzLnVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdHRoaXMuQ29tbWVudCA9IG5ldyBDb21tZW50Q2xhc3ModGhpcy51c2VySWQsIHRoaXMuYm9va0lkLCB0aGlzLmNvbW1lbnRMYXlvdXQpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmNsZWFyRm9ybSgpO1xyXG5cdFx0dGhpcy5mb3JtLnNldFZhbHVlcyhib29rKTtcclxuXHRcdHRoaXMuJCQoJ2Jvb2tDb3ZlcicpLnNldFZhbHVlcyhib29rLmNvdmVyX3Bob3RvIHx8IERVTU1ZQ09WRVIpO1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnYmFkZ2UnLCBib29rLmNvdW50X2xpa2VzIHx8ICcwJyk7XHJcblx0XHR0aGlzLmdldEZpbGVzKCk7XHJcblx0XHR0aGlzLkNvbW1lbnQuZ2V0Q29tbWVudHMoKTtcdFxyXG5cdFx0dGhpcy5jb21tZW50c0dvdCA9IHRydWU7XHRcclxuXHRcdFxyXG5cdFx0dG9nZ2xlRWxlbWVudChib29rLmJvb2tfZmlsZSwgdGhpcy4kJCgnZG93bmxvYWRCb29rJykpO1xyXG5cdFx0dG9nZ2xlRWxlbWVudChib29rLmF2YWlsYWJsZV9jb3BpZXMsIHRoaXMuJCQoJ29yZGVyQm9vaycpKTtcclxuXHRcdHRoaXMudG9nZ2xlTGlrZShib29rLnVzZXJfaWQgPT0gdGhpcy51c2VySWQpO1xyXG5cdFx0dGhpcy50b2dnbGVPcmRlcihib29rLm9yZGVyX2RhdGUpO1xyXG5cclxuXHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcclxuXHR9XHJcblxyXG5cdGdldEZpbGVzKCkge1xyXG5cdFx0ZmlsZXNNb2RlbC5nZXRJdGVtcyh0aGlzLmJvb2tJZCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZpbGVzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHJcblx0XHRcdGNvbnN0IHRleHRGaWxlcyA9IFtdO1xyXG5cdFx0XHRjb25zdCBhdWRpb0ZpbGVzID0gW107XHJcblxyXG5cdFx0XHRmaWxlc0Fyci5mb3JFYWNoKChmaWxlKSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoKGZpbGUuZGF0YV90eXBlKSB7XHJcblx0XHRcdFx0XHRjYXNlICd0ZXh0JzogXHJcblx0XHRcdFx0XHRcdHRleHRGaWxlcy5wdXNoKGZpbGUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2F1ZGlvJzogXHJcblx0XHRcdFx0XHRcdGF1ZGlvRmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykucGFyc2UodGV4dEZpbGVzKTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLnBhcnNlKGF1ZGlvRmlsZXMpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvcmRlckJvb2soKSB7XHJcblx0XHRjb25zdCBvcmRlciA9IHtcclxuXHRcdFx0dXNlcl9pZDogdGhpcy51c2VySWQsXHJcblx0XHRcdGJvb2tfaWQ6IHRoaXMuYm9va0lkLFxyXG5cdFx0XHRvcmRlcl9kYXRlOiBuZXcgRGF0ZSgpXHJcblx0XHR9O1xyXG5cclxuXHRcdG9yZGVyc01vZGVsLmFkZE9yZGVyKG9yZGVyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRcdHRoaXMuc2V0T3JkZXJlZFZhbCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNldE9yZGVyZWRWYWwoKSB7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmRlZmluZSgnbGFiZWwnLCAnT3JkZXJlZCcpOyBcclxuXHRcdHRoaXMub3JkZXJCdG4ucmVmcmVzaCgpO1xyXG5cdFx0dGhpcy5vcmRlckJ0bi5kaXNhYmxlKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldE9yZGVyZWRWYWwoKSB7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmRlZmluZSgnbGFiZWwnLCAnPGkgY2xhc3M9XCJmYXIgZmEtaGFuZC1wYXBlclwiPjwvaT4gT3JkZXInKTsgIFxyXG5cdFx0dGhpcy5vcmRlckJ0bi5yZWZyZXNoKCk7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmVuYWJsZSgpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlT3JkZXIob3JkZXJlZCkge1xyXG5cdFx0aWYob3JkZXJlZCkge1xyXG5cdFx0XHR0aGlzLnNldE9yZGVyZWRWYWwoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVuc2V0T3JkZXJlZFZhbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGlrZUJvb2soKSB7XHJcblx0XHRpZih0aGlzLmJvb2sudXNlcl9pZCA9PSB0aGlzLnVzZXJJZCkge1xyXG5cdFx0XHRsaWtlc01vZGVsLnJlbW92ZUxpa2UodGhpcy51c2VySWQsIHRoaXMuYm9va0lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zZXJ2ZXJTdGF0dXM7XHJcblx0XHRcdFx0aWYoc3RhdHVzID09IFNVQ0NFU1MpIHtcclxuXHRcdFx0XHRcdHRoaXMudW5zZXRMaWtlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdGxpa2VzTW9kZWwuYWRkTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdHVzID0gcmVzcG9uc2UuanNvbigpLnNlcnZlclN0YXR1cztcclxuXHRcdFx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRMaWtlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cdFxyXG5cdH1cdFxyXG5cclxuXHR0b2dnbGVMaWtlKGNvbmRpdGlvbikge1xyXG5cdFx0aWYoY29uZGl0aW9uKSB7XHJcblx0XHRcdHRoaXMuc2V0TGlrZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMudW5zZXRMaWtlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRMaWtlKCkge1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnaWNvbicsICdmYXMgZmEtaGVhcnQnKTtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5yZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldExpa2UoKSB7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24uZGVmaW5lKCdpY29uJywgJ2ZhciBmYS1oZWFydCcpO1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLnJlZnJlc2goKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyRm9ybSgpIHtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy5maWxlc0xpc3QuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuQ29tbWVudC5jbGVhckNvbW1lbnRzKCk7XHJcblx0fVxyXG59IiwiXHJcbmltcG9ydCB7Zm9ybWF0RGF0ZX0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5pbXBvcnQgY29tbWVudHNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvY29tbWVudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCB7XHJcblx0Y29uc3RydWN0b3IodXNlcklkLCBib29rSWQsIGNvbW1lbnRMYXlvdXQpIHtcclxuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xyXG5cdFx0dGhpcy5ib29rSWQgPSBib29rSWQ7XHJcblx0XHR0aGlzLmNvbW1lbnRMYXlvdXQgPSBjb21tZW50TGF5b3V0O1xyXG5cdH1cclxuXHJcblx0c2F2ZUNvbW1lbnQgKGNvbW1lbnRJbnB1dCwgcGFyZW50Q29tbWVudElkKSB7XHJcblx0XHRjb25zdCBjb21tZW50VGV4dCA9IGNvbW1lbnRJbnB1dC5nZXRWYWx1ZSgpO1xyXG5cdFx0Y29uc3QgY29tbWVudCA9IHtcclxuXHRcdFx0J3VzZXJfaWQnOiB0aGlzLnVzZXJJZCxcclxuXHRcdFx0J2Jvb2tfaWQnOiB0aGlzLmJvb2tJZCxcclxuXHRcdFx0J2NvbnRlbnQnOiBjb21tZW50VGV4dCxcclxuXHRcdFx0J2NvbW1lbnREYXRlJzogbmV3IERhdGUoKSxcclxuXHRcdFx0J2NvbW1lbnRfaWQnOiBwYXJlbnRDb21tZW50SWQgfHwgMFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb21tZW50c01vZGVsLmFkZEl0ZW0oY29tbWVudCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0aWYgKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0dGhpcy5jbGVhckNvbW1lbnRzKCk7XHJcblx0XHRcdFx0aWYoIXBhcmVudENvbW1lbnRJZCkge1xyXG5cdFx0XHRcdFx0Y29tbWVudElucHV0LnNldFZhbHVlKCcnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5nZXRDb21tZW50cygpO1xyXG5cdFx0XHRcdHRoaXMuY29tbWVudExheW91dC5zaG93KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YWRkQ2hpbGRDb21tZW50cyAoYXJyLCBpdGVtKSB7XHJcblx0XHRsZXQgaSA9IDA7XHJcblx0XHR3aGlsZSAoaSA8IGFyci5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgZWwgPSBhcnJbaV07XHJcblx0XHRcdGlmIChlbC5jb21tZW50X2lkID09PSBpdGVtLmlkKSB7XHJcblx0XHRcdFx0Y29uc3QgY29tbWVudEl0ZW0gPSB0aGlzLmNvbXBvc2VDb21tZW50KGVsKTtcclxuXHRcdFx0XHQkJChgY29tbWVudF8ke2l0ZW0uaWR9YCkuYWRkVmlldyhjb21tZW50SXRlbSk7XHJcblx0XHRcdFx0YXJyLnNwbGljZShpLCAxKTtcclxuXHJcblx0XHRcdFx0aWYgKGFyci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENoaWxkQ29tbWVudHMoYXJyLCBlbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q29tbWVudHMoKSB7XHJcblx0XHRjb21tZW50c01vZGVsLmdldEl0ZW1zKHRoaXMuYm9va0lkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgY29tbWVudHNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cclxuXHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0d2hpbGUgKGkgPCBjb21tZW50c0Fyci5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb25zdCBjb21tZW50ID0gY29tbWVudHNBcnJbaV07XHJcblx0XHRcdFx0aWYgKCFjb21tZW50LmNvbW1lbnRfaWQpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGNvbW1lbnRJdGVtID0gdGhpcy5jb21wb3NlQ29tbWVudChjb21tZW50KTtcclxuXHRcdFx0XHRcdHRoaXMuY29tbWVudExheW91dC5hZGRWaWV3KGNvbW1lbnRJdGVtKTtcclxuXHRcdFx0XHRcdGNvbW1lbnRzQXJyLnNwbGljZShpLCAxKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY29tbWVudHNBcnIubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFkZENoaWxkQ29tbWVudHMoY29tbWVudHNBcnIsIGNvbW1lbnQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUNvbW1lbnRzIChpc0NvbW1lbnRzR290LCB0b2dnbGVDb21tZW50c0J0bikge1xyXG5cdFx0Y29uc3QgaXNWaXNpYmxlID0gdGhpcy5jb21tZW50TGF5b3V0LmlzVmlzaWJsZSgpO1xyXG5cdFx0aWYgKGlzVmlzaWJsZSkge1xyXG5cdFx0XHR0b2dnbGVDb21tZW50c0J0bi5zZXRWYWx1ZSgnQ29tbWVudHMgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT4nKTtcclxuXHRcdFx0dGhpcy5jb21tZW50TGF5b3V0LmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0b2dnbGVDb21tZW50c0J0bi5zZXRWYWx1ZSgnQ29tbWVudHMgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtdXBcIj48L2k+Jyk7XHJcblx0XHRcdGlmICghaXNDb21tZW50c0dvdCkge1xyXG5cdFx0XHRcdHRoaXMuZ2V0Q29tbWVudHMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNvbW1lbnRMYXlvdXQuc2hvdygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29tcG9zZUNvbW1lbnQgKGNvbW1lbnQpIHtcclxuXHRcdGNvbnN0IGNvbW1lbnREYXRlID0gZm9ybWF0RGF0ZShjb21tZW50LmNvbW1lbnRfZGF0ZSk7XHJcblx0XHRjb25zdCBjb21tZW50QXV0aG9yID0gYCR7Y29tbWVudC51c2VyX25hbWV9ICR7Y29tbWVudC51c2VyX3N1cm5hbWV9YDtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpZDogYGNvbW1lbnRfJHtjb21tZW50LmlkfWAsXHJcblx0XHRcdGNzczogJ2NvbW1lbnRfaXRlbScsXHJcblx0XHRcdHBhZGRpbmc6IHsgbGVmdDogMTAgfSxcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZpZXc6IFwidGVtcGxhdGVcIixcclxuXHRcdFx0XHRcdGF1dG9oZWlnaHQ6IHRydWUsXHJcblx0XHRcdFx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Y3NzOiAndGVtcGxhdGUnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY29tbWVudF9pbmZvXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29tbWVudF9hdXRob3JcIj4ke2NvbW1lbnRBdXRob3J9PC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29tbWVudF9kYXRlXCI+JHtjb21tZW50RGF0ZX08L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtjb21tZW50LmNvbnRlbnR9PC9kaXY+YCxcclxuXHRcdFx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHRcdFx0J3RlbXBsYXRlJzogKCkgPT4gdGhpcy5yZXBseVRvQ29tbWVudChjb21tZW50LmlkKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJlcGx5VG9Db21tZW50IChjb21tZW50SWQpIHtcclxuXHRcdGNvbnN0IHJlcGx5VG9Db21tZW50TGF5b3V0ID0ge1xyXG5cdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZpZXc6ICd0ZXh0YXJlYScsXHJcblx0XHRcdFx0XHRpZDogJ3JlcGx5VXNlckNvbW1lbnQnLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiA2MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRcdGxvY2FsSWQ6ICdzYXZlQ29tbWVudEJ0bicsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnU2VuZCcsXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzAsXHJcblx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZUNvbW1lbnQoJCQoJ3JlcGx5VXNlckNvbW1lbnQnKSwgY29tbWVudElkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKCEkJCgncmVwbHlVc2VyQ29tbWVudCcpKSB7XHJcblx0XHRcdCQkKGBjb21tZW50XyR7Y29tbWVudElkfWApLmFkZFZpZXcocmVwbHlUb0NvbW1lbnRMYXlvdXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xlYXJDb21tZW50cyAoKSB7XHJcblx0XHRjb25zdCBjb21tZW50cyA9IHRoaXMuY29tbWVudExheW91dC5nZXRDaGlsZFZpZXdzKCk7XHJcblx0XHRpZiAoY29tbWVudHMpIHtcclxuXHRcdFx0Y29uc3QgY29tbWVudHNDb3B5ID0gWy4uLmNvbW1lbnRzXTtcclxuXHJcblx0XHRcdGNvbW1lbnRzQ29weS5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5jb21tZW50TGF5b3V0LnJlbW92ZVZpZXcoY29tbWVudCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6J2hlYWRlcicsIHRlbXBsYXRlOnRoaXMuYXBwLmNvbmZpZy5uYW1lLCBjc3M6J3dlYml4X2hlYWRlciBhcHBfaGVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBtZW51ID0ge1xyXG5cdFx0XHR2aWV3OidtZW51JywgXHJcblx0XHRcdGNzczonYXBwX21lbnUnLFxyXG5cdFx0XHR3aWR0aDoxODAsIGxheW91dDoneScsIHNlbGVjdDp0cnVlLFxyXG5cdFx0XHR0ZW1wbGF0ZTonPHNwYW4gY2xhc3M9XCJ3ZWJpeF9pY29uICNpY29uI1wiPjwvc3Bhbj4gI3ZhbHVlIyAnLFxyXG5cdFx0XHR2YWx1ZTogJ21haW4nLFxyXG5cdFx0XHRkYXRhOltcclxuXHRcdFx0XHR7IHZhbHVlOidNeSBib29rcycsIGlkOidtYWluJywgaWNvbjonZmFzIGZhLWJvb2ttYXJrJyB9LFxyXG5cdFx0XHRcdHsgdmFsdWU6J0xpYnJhcnknLCBpZDonbGlicmFyeScsICBpY29uOidmYXMgZmEtYm9vay1yZWFkZXInIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonVG9wcycsIGlkOid0b3BzJywgIGljb246J2ZhcyBmYS1saXN0JyB9LFxyXG5cdFx0XHRcdHsgdmFsdWU6J1NldHRpbmdzJywgaWQ6J3NldHRpbmdzJywgIGljb246J2ZhcyBmYS1jb2cnIH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdG9uOntcclxuXHRcdFx0XHRvbk1lbnVJdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXNlcl9pZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwLnNob3coYHJlYWRlci5pbmRleD9pZD0ke3VzZXJfaWR9L3JlYWRlci4ke2lkfWApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsb2dvdXQgPSB7XHJcblx0XHRcdHZpZXc6J2J1dHRvbicsIFxyXG5cdFx0XHRsb2NhbElkOidsb2dvdXRCdG4nLCBcclxuXHRcdFx0dmFsdWU6J0xvZ291dCcsIFxyXG5cdFx0XHR0eXBlOidmb3JtJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1aSA9IHtcclxuXHRcdFx0dHlwZTonY2xlYW4nLCBwYWRkaW5nWDo1LCBjc3M6J2FwcF9sYXlvdXQnLCBcclxuXHRcdFx0Y29sczpbXHJcblx0XHRcdFx0eyBwYWRkaW5nWDo1LCBwYWRkaW5nWToxMCwgcm93czogWyB7Y3NzOid3ZWJpeF9zaGFkb3dfbWVkaXVtJywgcm93czpbaGVhZGVyLCBtZW51LCBsb2dvdXRdfSBdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdyZXNpemVyJywgd2lkdGg6IDUgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0eXBlOiAnd2lkZScsIHBhZGRpbmdZOiAxMCwgcGFkZGluZ1g6IDUsIHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0eyAkc3VidmlldzogdHJ1ZSB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdHRoaXMuJCQoJ2xvZ291dEJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYXBwID0gdGhpcy5hcHA7XHJcblx0XHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVktJW0tJWRcIik7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dvdXQoe2N1cnJlbnREYXRlfSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSBcIndlYml4LWpldFwiO1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuLi9jb21tb24vbGlicmFyeSc7XHJcbmltcG9ydCBCb29rQ2FyZCBmcm9tICcuL2Jvb2tDYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlYWRlckxpYnJhcnkgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRjb25zdCBsaWJyYXJ5Q29uZmlnID0ge1xyXG5cdFx0XHRyb2xlOiAncmVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0bmV3IExpYnJhcnkodGhpcy5hcHAsIGxpYnJhcnlDb25maWcsIEJvb2tDYXJkKVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgb3JkZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgdGVzdFJlc3VsdHMgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRsb2NhbElkOiAnb3JkZXJzTGlzdCcsXHJcblx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0Y29sdW1uczogW1x0XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdpZCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IHRydWUsXHJcblx0XHRcdFx0fSxcdFx0XHRcdFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYm9va190aXRsZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdCb29rJyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdXRob3JfbmFtZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdBdXRob3InLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3JlbW92ZUNvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSZW1vdmUnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+J1xyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J2ZhLXRyYXNoJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUJvb2soaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBidXR0b24gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRpZDogJ2FkZEdyb3VwJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQnLFxyXG5cdFx0XHR0eXBlOidmb3JtJyxcclxuXHRcdFx0aW5wdXRXaWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge31cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdHJvd3M6IFt0ZXN0UmVzdWx0cywgYnV0dG9uXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRjb25zdCB1c2VySWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblx0XHR0aGlzLmdyaWQgPSB0aGlzLiQkKCdvcmRlcnNMaXN0Jyk7XHJcblxyXG5cdFx0b3JkZXJzTW9kZWwuZ2V0SXRlbXModXNlcklkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0bGV0IG9yZGVyc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblx0XHRcdHRoaXMuJCQoJ29yZGVyc0xpc3QnKS5wYXJzZShvcmRlcnNBcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVCb29rKGlkKSB7XHJcblx0XHRvcmRlcnNNb2RlbC5yZW1vdmVJdGVtKGlkKTtcclxuXHRcdHJldHVybiB0aGlzLmdyaWQucmVtb3ZlKGlkKTtcclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB1c2Vyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy91c2Vycyc7XHJcbmltcG9ydCB7dXBkYXRlSXRlbX0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgYnV0dG9uID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0aWQ6ICdzYXZlQ2hhbmdlcycsXHJcblx0XHRcdHZhbHVlOiAnU2F2ZScsXHJcblx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0aW5wdXRXaWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2F2ZUZvcm0oKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1c2VyRGF0YSA9IHtcclxuXHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRsb2NhbElkOiAndXNlckRhdGFGb3JtJyxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbmFtZTogJ2lkJywgbG9jYWxJZDogJ3VzZXJfaWQnLCBoaWRkZW46IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdGaXJzdCBuYW1lJyxuYW1lOiAndXNlcl9uYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0xhc3QgbmFtZScsbmFtZTogJ3VzZXJfc3VybmFtZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYXNzcG9ydCBJRCcsbmFtZTogJ3Bhc3Nwb3J0X0lEJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ2RhdGVwaWNrZXInLCBsYWJlbDogJ0JpcnRoIGRhdGUnLG5hbWU6ICdiaXJ0aF9kYXRlJywgbG9jYWxJZDogJ2JpcnRoX2RhdGUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQWRkcmVzcycsbmFtZTogJ2FkZHJlc3MnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGhvbmUnLG5hbWU6ICdwaG9uZV9udW1iZXJzJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0VtYWlsJyxuYW1lOiAnZW1haWwnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm93czogW3VzZXJEYXRhXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRjb25zdCBpZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHJcblx0XHR1c2Vyc01vZGVsLmdldEl0ZW0oaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgdXNlckRhdGEgPSBkYXRhLmpzb24oKVswXTtcclxuXHRcdFx0dXNlckRhdGEuYmlydGhfZGF0ZSA9IG5ldyBEYXRlICh1c2VyRGF0YS5iaXJ0aF9kYXRlKTtcclxuXHRcdFx0dGhpcy4kJCgndXNlckRhdGFGb3JtJykuc2V0VmFsdWVzKHVzZXJEYXRhKTtcclxuXHRcdH0pO1x0XHJcblx0fVxyXG5cclxuXHRzYXZlRm9ybSAoKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy4kJCgndXNlckRhdGFGb3JtJykuZ2V0VmFsdWVzKCk7XHJcblx0XHRjb25zdCBzdWNjZXNzQWN0aW9uID0gdGhpcy53ZWJpeC5tZXNzYWdlKCdOZXcgZGF0YSBzYXZlZCcpO1xyXG5cdFx0dXBkYXRlSXRlbSh1c2Vyc01vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSBcIndlYml4LWpldFwiO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm9va1RvcHMgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZpZXc6ICdsaXN0JyxcclxuXHRcdFx0XHRcdHdpZHRoOiAyNTAsXHJcblx0XHRcdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdFx0XHRkYXRhOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dPbGRlc3RCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdPbGRlc3QgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dOZXdlc3RCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdOZXdlc3QgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dNb3N0UGFnZXNCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdNb3N0IHBhZ2VzIGJvb2tzJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdzaG93Qm9va3NXaXRoTG9uZ05hbWVzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2tzIHdpdGggbG9uZ2VzdCBuYW1lcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ0F1dGhvcnMgd2l0aCBtb3N0IGJvb2tzJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHN3aXRjaChpZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd09sZGVzdEJvb2tzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93T2xkZXN0Qm9va3MoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93TmV3ZXN0Qm9va3MnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dOZXdlc3RCb29rcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dNb3N0UGFnZXNCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd01vc3RQYWdlc0Jvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd0Jvb2tzV2l0aExvbmdOYW1lcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0Jvb2tzV2l0aExvbmdOYW1lcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dBdXRob3JzV2l0aE1vc3RCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdib29rc1RvcCcsXHJcblx0XHRcdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmdyaWQgPSAkJCgnYm9va3NUb3AnKTtcclxuXHRcdGJvb2tzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0bGV0IGJvb2tzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHRcdFx0Ym9va3NBcnIgPSBib29rc0Fyci5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwueWVhcl9vZl9wdWJsaWNhdGlvbiA9IG5ldyBEYXRlKGVsLnllYXJfb2ZfcHVibGljYXRpb24pO1xyXG5cdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuYm9va3NBcnIgPSBib29rc0FycjtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZGVmYXVsdENvbmZpZyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnYm9va190aXRsZScsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRoZWFkZXI6ICdUaXRsZSdcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnYXV0aG9yX25hbWUnLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0aGVhZGVyOiAnQXV0aG9yJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdnZW5yZXMnLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdHZW5yZXMnXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2NvdW50cnlfb2ZfcHVibGljYXRpb24nLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdDb3VudHJ5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICd5ZWFyX29mX3B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRzb3J0OiAnZGF0ZScsXHJcblx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0Zm9ybWF0OiB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZXCIpLFxyXG5cdFx0XHRcdGhlYWRlcjogJ1llYXInXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ251bWJlcl9vZl9wYWdlcycsXHJcblx0XHRcdFx0aGVhZGVyOiAnUGFnZXMnLFxyXG5cdFx0XHRcdHdpZHRoOiA2MFxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0c2hvd09sZGVzdEJvb2tzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdFx0cmV0dXJuIGEueWVhcl9vZl9wdWJsaWNhdGlvbiAtIGIueWVhcl9vZl9wdWJsaWNhdGlvbjtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zaG93UmVzdWx0cyhkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2hvd05ld2VzdEJvb2tzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+IGIueWVhcl9vZl9wdWJsaWNhdGlvbiAtIGEueWVhcl9vZl9wdWJsaWNhdGlvbik7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93TW9zdFBhZ2VzQm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4gIGIubnVtYmVyX29mX3BhZ2VzIC0gYS5udW1iZXJfb2ZfcGFnZXMpO1xyXG5cdFx0dGhpcy5zaG93UmVzdWx0cyhkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2hvd0Jvb2tzV2l0aExvbmdOYW1lcygpIHtcclxuXHRcdGxldCBkYXRhID0gWy4uLnRoaXMuYm9va3NBcnJdO1xyXG5cdFx0ZGF0YS5zb3J0KChhLCBiKSA9PiBiLmJvb2tfdGl0bGUubGVuZ3RoIC0gYS5ib29rX3RpdGxlLmxlbmd0aCk7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MoKSB7XHJcblx0XHRsZXQgYXV0aG9ycyA9IFtdO1xyXG5cdFx0dGhpcy5ib29rc0Fyci5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpbmRleCA9IGF1dGhvcnMuZmluZEluZGV4KGF1dGhvciA9PiBhdXRob3IubmFtZSA9PSBlbC5hdXRob3JfbmFtZSk7XHJcblx0XHRcdGlmIChpbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0XHRhdXRob3JzLnB1c2goe25hbWU6IGVsLmF1dGhvcl9uYW1lLCBib29rc0NvdW50OiAxfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0YXV0aG9yc1tpbmRleF0uYm9va3NDb3VudCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRhdXRob3JzID0gYXV0aG9ycy5zb3J0KChhLCBiKSA9PiBiLmJvb2tzQ291bnQgLSBhLmJvb2tzQ291bnQpO1xyXG5cclxuXHRcdGNvbnN0IGNvbHVtbnMgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ25hbWUnLFxyXG5cdFx0XHRcdGhlYWRlcjogJ05hbWUnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdib29rc0NvdW50JyxcclxuXHRcdFx0XHRoZWFkZXI6ICdCb29rcyBjb3VudCcsXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGF1dGhvcnMsIGNvbHVtbnMpO1xyXG5cdH1cclxuXHJcblx0c2hvd1Jlc3VsdHMoZGF0YSwgY29sdW1ucykge1xyXG5cdFx0dGhpcy5ncmlkLmRlZmluZSgnY29sdW1ucycsIGNvbHVtbnMpO1xyXG5cdFx0dGhpcy5ncmlkLnJlZnJlc2hDb2x1bW5zKCk7XHJcblx0XHRkYXRhID0gZGF0YS5zbGljZSgwLCAxMCk7XHJcblx0XHR0aGlzLmdyaWQuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuZ3JpZC5wYXJzZShkYXRhKTtcclxuXHRcdHRoaXMuZ3JpZC5zaG93KCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyUGFnZSBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0ZXJGb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdyZWdpc3RlckZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Vlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIHR5cGU6ICdwYXNzd29yZCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA1LCBjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIGxvY2FsSWQ6ICdyZWdpc3RlckJ0bicsIHZhbHVlOiAnUmVnaXN0ZXInLCB0eXBlOiAnZm9ybSdcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdHJlZ2lzdGVyRm9ybSxcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuJCQoJ3JlZ2lzdGVyQnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLiQkKCdyZWdpc3RlckZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0XHRhdXRob3JpemF0aW9uLnJlZ2lzdGVyKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc3RhdHVzO1xyXG5cdFx0XHRcdGNvbnN0IGlkID0gcmVzcG9uc2UuanNvbigpLmlkO1xyXG5cdFx0XHRcdGlmIChzdGF0dXMgPT09IDIpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvdyhgcmVhZGVyLmluZGV4P2lkPSR7aWR9L3JlYWRlci5tYWluYCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYocmVzcG9uc2UuanNvbigpLnJlYXNvbiA9PT0gJ3VzZXJFeGlzdCcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHdlYml4Lm1lc3NhZ2UocmVzcG9uc2UuanNvbigpLmRhdGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9