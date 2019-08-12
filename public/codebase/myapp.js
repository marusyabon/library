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

	var commentsYear = new Date(dbDate).getFullYear();
	var commentsMonth = new Date(dbDate).getMonth();
	var commentsDay = new Date(dbDate).getDate();
	var commentsHours = new Date(dbDate).getHours();

	var formatDate = webix.Date.strToDate("%i:%s");

	if (currentYear > commentsYear) {
		formatDate = webix.Date.dateToStr("%d-%m-%y");
	} else if (currentMonth > commentsMonth) {
		formatDate = webix.Date.dateToStr("%m-%d");
	} else if (currentDay > commentsDay) {
		formatDate = webix.Date.dateToStr("%D, %H:%i");
	} else if (currentHours > commentsHours) {
		formatDate = webix.Date.dateToStr("%H:%i");
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
			body: {
				rows: [bookCover, bookCard, availableTextFiles, availableAudioFiles, {
					paddingY: 10,
					paddingX: 15,
					margin: 10,
					cols: [orderBook, downloadBook, {}, likeBook]
				}, comments]
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

	BookCard.prototype.addChildComments = function addChildComments(arr, item) {
		var _this5 = this;

		var arrCopy = [].concat(arr);

		arr.forEach(function (el, i) {
			if (el.comment_id === item.id) {
				var commentItem = _this5.composeComment(el);
				$$('comment_' + item.id).addView(commentItem, 1);
				arrCopy = arrCopy.splice(i, 1);

				_this5.addChildComments(arrCopy, item);
			}
		});
	};

	BookCard.prototype.getComments = function getComments() {
		var _this6 = this;

		this.commentsGot = true;
		_models_comments__WEBPACK_IMPORTED_MODULE_5__["default"].getItems(this.bookId).then(function (dbData) {
			var commentsArr = dbData.json();

			commentsArr.forEach(function (comment, i) {
				var commentItem = _this6.composeComment(comment);

				if (!comment.comment_id) {
					_this6.commentLayout.addView(commentItem, i);
					_this6.addChildComments(commentsArr, comment);
				}
			});
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
		var commentDate = Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(comment.comment_date);
		var commentAuthor = comment.user_name + ' ' + comment.user_surname;

		return {
			id: 'comment_' + comment.id,
			css: 'comment_item',
			rows: [{
				autoheight: true,
				template: '<div class="comment_info">\t\t\t\t\t\t\t\t\t<div class = "comment_author">' + commentAuthor + '</div>\t\t\t\t\t\t\t\t\t<div class = "comment_date">' + commentDate + '</div>\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>' + comment.content + '</div>'
			}]

		};
	};

	BookCard.prototype.clearForm = function clearForm() {
		var _this7 = this;

		this.form.clear();
		this.filesList.clearAll();
		this.$$('availableTextFiles').clearAll();
		this.$$('availableAudioFiles').clearAll();

		var comments = this.commentLayout.getChildViews();

		if (comments) {
			var commentsCopy = [].concat(comments);

			commentsCopy.forEach(function (comment) {
				_this7.commentLayout.removeView(comment);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViaXgtamV0L2Rpc3QvZXM2L2pldC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvYXV0aG9yaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2NvbnN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2xvY2FsZXMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2Jvb2tzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2ZpbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2xpa2VzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL3VzZXJzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbXlhcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2FkbWluL3VzZXJGb3JtLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvY29tbW9uL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vYm9va0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2Jvb2tDYXJkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci90b3BzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJnIiwiRnVuY3Rpb24iLCJoYWRSdW50aW1lIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImluZGV4T2YiLCJvbGRSdW50aW1lIiwidW5kZWZpbmVkIiwiZSIsImdsb2JhbCIsIk9wIiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImluTW9kdWxlIiwicnVudGltZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJvYmoiLCJhcmciLCJ0eXBlIiwiY2FsbCIsImVyciIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImNvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJ2YWx1ZSIsIlByb21pc2UiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJpdGVyIiwibmV4dCIsImRvbmUiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsImtleSIsInJldmVyc2UiLCJsZW5ndGgiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsIkpldEJhc2UiLCJ3ZWJpeCIsIndlYml4SmV0IiwiX2V2ZW50cyIsIl9zdWJzIiwiX2RhdGEiLCJnZXRSb290IiwiX3Jvb3QiLCJkZXN0cnVjdG9yIiwiX2RldGFjaEV2ZW50cyIsIl9kZXN0cm95U3VicyIsIl9jb250YWluZXIiLCJhcHAiLCJfcGFyZW50Iiwic2V0UGFyYW0iLCJpZCIsInVybCIsIl9zZWdtZW50IiwidXBkYXRlIiwic2hvdyIsImdldFBhcmFtIiwicGFyZW50IiwidmlldyIsImdldFBhcmVudFZpZXciLCJnZXRVcmwiLCJzdWJ1cmwiLCJnZXRVcmxTdHJpbmciLCIkJCIsInJvb3QiLCJxdWVyeVZpZXciLCJjb25maWciLCJsb2NhbElkIiwiJHNjb3BlIiwib24iLCJjb2RlIiwiYXR0YWNoRXZlbnQiLCJjb250YWlucyIsImtpZCIsImdldFN1YlZpZXciLCJzdWIiLCJnZXRTdWJWaWV3SW5mbyIsInN1YnZpZXciLCJwb3B1cCIsImV2ZW50cyIsImRldGFjaEV2ZW50Iiwic3ViVmlldyIsIl9pbml0X3VybF9kYXRhIiwiY3VycmVudCIsImV4dGVuZCIsInBhcmFtcyIsIl9nZXREZWZhdWx0U3ViIiwiZGVmYXVsdCIsImJyYW5jaCIsImNoaWxkIiwiX3JvdXRlZF92aWV3IiwicGFyc2UiLCJzdWJzdHIiLCJwYXJ0cyIsInNwbGl0IiwiY2h1bmtzIiwidGVzdCIsInBvcyIsInBhcmFtIiwiZGNodW5rIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFnZSIsImlzTmV3IiwidXJsMnN0ciIsInN0YWNrIiwiY2h1bmsiLCJvYmoyc3RyIiwiam9pbiIsInN0ciIsImVuY29kZVVSSUNvbXBvbmVudCIsIlJvdXRlIiwicm91dGUiLCJpbmRleCIsIl9uZXh0IiwicGF0aCIsInNoaWZ0IiwicmVmcmVzaCIsIl9qb2luIiwia2lkcyIsIm9sZCIsImNvbmNhdCIsImFwcGVuZCIsInJlcyIsInJlaiIsInJlZGlyZWN0IiwiY29uZmlybSIsImNhbGxFdmVudCIsImNhdGNoIiwic2l6ZSIsIm4iLCJKZXRWaWV3IiwiX2NoaWxkcmVuIiwidWkiLCJjb250YWluZXIiLCJqZXR2aWV3IiwiY3JlYXRlVmlldyIsInJlbmRlciIsInRhcmdldCIsIl9yZW5kZXJGcmFtZUxvY2siLCJfc2hvdyIsInNlZ21lbnQiLCJfdXJsQ2hhbmdlIiwibGlua1JvdXRlciIsImdldFJvdXRlciIsInNldCIsInNpbGVudCIsImluaXQiLCJfJHZpZXciLCJfJCIsInJlYWR5IiwiXyR1cmwiLCJtZXNzYWdlIiwidXJsQ2hhbmdlIiwiZGVzdHJveSIsIl9kZXN0cm95S2lkcyIsInVzZSIsInBsdWdpbiIsInRhZ05hbWUiLCJfcmVuZGVyIiwiZG9jdW1lbnQiLCJib2R5IiwidG9Ob2RlIiwiX3JlbmRlcl9maW5hbCIsImNmZyIsInNsb3QiLCJyZXNwb25zZSIsImNvcHlDb25maWciLCJvbGR1aSIsImFzV2luIiwic2V0UG9zaXRpb24iLCJpc1Zpc2libGUiLCJfaW5pdCIsIl9pbml0VXJsIiwiX2luaXRFcnJvciIsIndhaXRzIiwiZnJhbWUiLCJ3YWl0IiwiYWxsIiwibG9jayIsIl9yZW5kZXJGcmFtZSIsIl9jcmVhdGVTdWJWaWV3IiwiZXJyb3IiLCJjcmVhdGVGcm9tVVJMIiwidWlzIiwiSmV0Vmlld1JhdyIsIl91aSIsIlN1YlJvdXRlciIsImNiIiwiYSIsImdldCIsIl9vbmNlIiwiSmV0QXBwQmFzZSIsIndpbmRvdyIsInZlcnNpb24iLCJzdGFydCIsIl9zZXJ2aWNlcyIsIkV2ZW50U3lzdGVtIiwiX3N1YlNlZ21lbnQiLCJnZXRTZXJ2aWNlIiwic2V0U2VydmljZSIsImhhbmRsZXIiLCIkc3VidmlldyIsImFkZFN1YlZpZXciLCJBcnJheSIsInBvaW50IiwiRGF0YUNvbGxlY3Rpb24iLCJSZWdFeHAiLCJEYXRlIiwiY29weSIsIiRyb3V0ZXIiLCJjbGlja0hhbmRsZXIiLCJzcmNFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwidHJpZ2dlciIsIl9mb3JWaWV3IiwibG9hZFZpZXciLCJ2aWV3cyIsIl9sb2FkRXJyb3IiLCJfbG9hZFZpZXdEeW5hbWljIiwiX19lc01vZHVsZSIsIm5vdyIsInJvdXRlciIsInJlc3QiLCJhcHBseSIsImRhdGEiLCJhY3Rpb24iLCJiaW5kIiwiZXIiLCJkZWJ1ZyIsImNvbnNvbGUiLCJ0ZXh0IiwicmVwbGFjZSIsImlubmVySFRNTCIsImV4cGlyZSIsImZpcnN0SW5pdCIsIl9maXJzdF9zdGFydCIsInRvcCIsImJhc2UiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uIiwibm9kZSIsImh0bWwiLCJhZGRDc3MiLCJyZW1vdmVDc3MiLCJ1cmxTdHJpbmciLCJ0ZW1wbGF0ZSIsInVpZCIsIkhhc2hSb3V0ZXIiLCJfZGV0ZWN0UHJlZml4Iiwib25wb3BzdGF0ZSIsInJvdXRlcyIsImNvbXBhcmUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicHJlZml4Iiwic3VmaXgiLCJfZ2V0UmF3Iiwicm91dGVyUHJlZml4IiwibG9jYXRpb24iLCJocmVmIiwiaXNQYXRjaGVkIiwicGF0Y2giLCJ3Iiwid2luIiwicHJvbWlzZSIsImZyZWV6ZSIsInNvbWUiLCIkZnJlZXplIiwicmVzaXplIiwiYmFzZUFkZCIsImJhc2VsYXlvdXQiLCJhZGRWaWV3IiwiYmFzZVJlbW92ZSIsInJlbW92ZVZpZXciLCJqdmlldyIsInN1YnMiLCJhcmd1bWVudHMiLCJsYXlvdXQiLCJwcm90b1VJIiwiJGluaXQiLCIkYXBwIiwiJHJlYWR5Iiwib3JpZ2luIiwicHJveHkiLCJKZXRBcHAiLCJTdG9yZVJvdXRlciIsInN0b3JhZ2UiLCJzZXNzaW9uIiwic3RvcmVOYW1lIiwicHV0IiwiVXJsUm91dGVyIiwicGF0aG5hbWUiLCJFbXB0eVJvdXRlciIsIl8kY29uZmlnIiwiVW5sb2FkR3VhcmQiLCJoYXMiLCJzdG9yZSIsInRyaW0iLCJ3YXJuIiwieCIsIlN0cmluZyIsImRlbGltaXRlciIsInJ1c3NpYW5QbHVyYWxHcm91cHMiLCJlbmQiLCJwbHVyYWxUeXBlcyIsImFyYWJpYyIsImxhc3RUd28iLCJib3NuaWFuX3NlcmJpYW4iLCJjaGluZXNlIiwiY3JvYXRpYW4iLCJmcmVuY2giLCJnZXJtYW4iLCJydXNzaWFuIiwibGl0aHVhbmlhbiIsImN6ZWNoIiwicG9saXNoIiwiaWNlbGFuZGljIiwic2xvdmVuaWFuIiwicGx1cmFsVHlwZVRvTGFuZ3VhZ2VzIiwibGFuZ1RvVHlwZU1hcCIsIm1hcHBpbmciLCJyZXQiLCJsYW5ncyIsImxhbmciLCJwbHVyYWxUeXBlTmFtZSIsImxvY2FsZSIsImxhbmdUb1BsdXJhbFR5cGUiLCJlbiIsInBsdXJhbFR5cGVJbmRleCIsImNvdW50IiwiZXNjYXBlIiwidG9rZW4iLCJjb25zdHJ1Y3RUb2tlblJlZ2V4Iiwib3B0cyIsInN1ZmZpeCIsIlJhbmdlRXJyb3IiLCJkb2xsYXJSZWdleCIsImRvbGxhckJpbGxzWWFsbCIsImRlZmF1bHRUb2tlblJlZ2V4IiwidHJhbnNmb3JtUGhyYXNlIiwicGhyYXNlIiwic3Vic3RpdHV0aW9ucyIsInRva2VuUmVnZXgiLCJpbnRlcnBvbGF0aW9uUmVnZXgiLCJvcHRpb25zIiwic21hcnRfY291bnQiLCJ0ZXh0cyIsImV4cHJlc3Npb24iLCJhcmd1bWVudCIsIlBvbHlnbG90IiwicGhyYXNlcyIsImN1cnJlbnRMb2NhbGUiLCJhbGxvd01pc3NpbmciLCJvbk1pc3NpbmdLZXkiLCJpbnRlcnBvbGF0aW9uIiwibmV3TG9jYWxlIiwibW9yZVBocmFzZXMiLCJwcmVmaXhlZEtleSIsInVuc2V0IiwiY2xlYXIiLCJuZXdQaHJhc2VzIiwidCIsIl8iLCJ0cmFuc2Zvcm0iLCJ3ZWJpeFBvbHlnbG90IiwiTG9jYWxlIiwiX3ZpZXciLCJzZXRMYW5nRGF0YSIsInBjb25maWciLCJwb2x5Z2xvdCIsInBvbHkiLCJzZXJ2aWNlIiwibG9jTmFtZSIsImkxOG4iLCJzZXRMb2NhbGUiLCJnZXRMYW5nIiwic2V0TGFuZyIsInVybHMiLCJNZW51IiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsImdldFNlbGVjdGVkSWQiLCJzZWxlY3QiLCJleGlzdHMiLCJiYXNlaWNvbnMiLCJnb29kIiwic2F2aW5nIiwiYmFzZXRleHQiLCJTdGF0dXMiLCJzdGF0dXMiLCJpc2Vycm9yIiwiZXhwaXJlRGVsYXkiLCJpY29ucyIsImNvbnRlbnQiLCJhcmVhIiwic2V0SFRNTCIsInN1Y2Nlc3MiLCJzZXRTdGF0dXMiLCJmYWlsIiwiZ2V0U3RhdHVzIiwiaGlkZVN0YXR1cyIsIm1vZGUiLCJyZXNwb25zZVRleHQiLCJ0cmFjayIsImRwIiwiX2lkIiwiX29iaiIsInJlbW90ZSIsImFqYXgiLCJfbW9kZSIsIl91cmwiLCJfcmVxdWVzdCIsIl9oZWFkZXJzIiwiX2ZpbGVzIiwiVGhlbWUiLCJ0aGVtZSIsImdldFRoZW1lIiwic2V0VGhlbWUiLCJsaW5rcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibG5hbWUiLCJkaXNhYmxlZCIsInNraW4iLCJjb3B5UGFyYW1zIiwiVXJsUGFyYW0iLCJvcyIsIm9nIiwidmFsIiwiVXNlciIsImxvZ2luIiwibG9nb3V0IiwiYWZ0ZXJMb2dpbiIsImFmdGVyTG9nb3V0IiwicGluZyIsIm1vZGVsIiwidXNlciIsImdldFVzZXIiLCJzZXJ2ZXIiLCJwYXNzIiwiY2FuTmF2aWdhdGUiLCJfJHJvb3QiLCJwdWJsaWMiLCJzZXRJbnRlcnZhbCIsInBsdWdpbnMiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwibCIsImxvZ291dFVybCIsImxvZ2luVXJsIiwicmVnaXN0ZXJVcmwiLCJBdXRob3JpemF0aW9uIiwicmVnaXN0ZXIiLCJwb3N0IiwiZGF0ZSIsIkRVTU1ZQ09WRVIiLCJTVUNDRVNTIiwiVVJMIiwiQm9va3NNb2RlbCIsImdldERhdGFGcm9tU2VydmVyIiwidXNlcl9pZCIsImFkZEl0ZW0iLCJ1cGRhdGVJdGVtIiwicmVtb3ZlSXRlbSIsImRlbCIsIkNvbW1lbnRzTW9kZWwiLCJnZXRJdGVtcyIsIkZpbGVzTW9kZWwiLCJkb3dubG9hZEl0ZW0iLCJMaWtlc01vZGVsIiwiYWRkTGlrZSIsInVzZXJJZCIsImJvb2tJZCIsInJlbW92ZUxpa2UiLCJVc2Vyc01vZGVsIiwiZ2V0SXRlbSIsIk15QXBwIiwiZGVmYXVsdHMiLCJBUFBOQU1FIiwiVkVSU0lPTiIsIkJVSUxEX0FTX01PRFVMRSIsIlBST0RVQ1RJT04iLCJuYXYiLCJ1cmxQYXJ0cyIsInRhcmdldFBhcnQiLCJlbCIsInJvbGUiLCJqc29uIiwidG9nZ2xlRWxlbWVudCIsImNvbmRpdGlvbiIsImVsZW1lbnQiLCJoaWRlIiwiTW9kZWwiLCJzdWNjZXNzQWN0aW9uIiwic2VydmVyU3RhdHVzIiwiZm9ybWF0RGF0ZSIsImRiRGF0ZSIsImN1cnJlbnRZZWFyIiwiZ2V0RnVsbFllYXIiLCJjdXJyZW50TW9udGgiLCJnZXRNb250aCIsImN1cnJlbnREYXkiLCJnZXREYXRlIiwiY3VycmVudEhvdXJzIiwiZ2V0SG91cnMiLCJjb21tZW50c1llYXIiLCJjb21tZW50c01vbnRoIiwiY29tbWVudHNEYXkiLCJjb21tZW50c0hvdXJzIiwic3RyVG9EYXRlIiwiZGF0ZVRvU3RyIiwiYXV0b2hlaWdodCIsImJvcmRlcmxlc3MiLCJoZWlnaHQiLCJsaXN0IiwiVG9wVmlldyIsImhlYWRlciIsIndpZHRoIiwiZHRhYmxlIiwiY29sdW1ucyIsImhpZGRlbiIsIm1pbldpZHRoIiwiZmlsbHNwYWNlIiwib25DbGljayIsImVkaXRVc2VyIiwiYWRkVXNlckJ0biIsImNsaWNrIiwiYWRkVXNlciIsInJvd3MiLCJjb2xzIiwidXNlcnNNb2RlbCIsImRiRGF0YSIsInVzZXJzQXJyIiwibWFwIiwiZnVsbF9uYW1lIiwidXNlcl9uYW1lIiwidXNlcl9zdXJuYW1lIiwiZm9ybWF0IiwiYmlydGhfZGF0ZSIsInVzZXJzRGF0YSIsImF1dGhvcml6YXRpb24iLCJjdXJyZW50RGF0ZSIsIl91c2VyRm9ybSIsIlVzZXJGb3JtIiwiZmluZCIsInNob3dXaW5kb3ciLCJoZWFkIiwicG9zaXRpb24iLCJlbGVtZW50cyIsImxhYmVsIiwibGFiZWxXaWR0aCIsImxhYmVsQWxpZ24iLCJydWxlcyIsImlzTm90RW1wdHkiLCJtYXJnaW4iLCJwYWRkaW5nWSIsInNhdmVGb3JtIiwiaGlkZVdpbmRvdyIsImZvcm0iLCJnZXRIZWFkIiwic2V0VmFsdWVzIiwiaW5pdGlhbF9wYXNzd29yZCIsImdldFZhbHVlcyIsInZhbGlkYXRlIiwiY2xlYXJWYWxpZGF0aW9uIiwiTGlicmFyeSIsImxpYnJhcnlDb25maWciLCJib29rQ2FyZCIsImNzcyIsInNvcnQiLCJlYm9vayIsInNob3dCb29rQ2FyZCIsInJlbW92ZUJvb2siLCJncmlkIiwiZ2V0Q29sdW1uQ29uZmlnIiwicmVmcmVzaENvbHVtbnMiLCJnZXREYXRhIiwiZ2V0RmlsZXMiLCJjaGVja0ZpbGVzIiwiYm9va3NBcnIiLCJfYm9va0NhcmQiLCJib29rc01vZGVsIiwieWVhcl9vZl9wdWJsaWNhdGlvbiIsImZpbGVzTW9kZWwiLCJmaWxlc0FyciIsImJvb2siLCJpc0ZpbGVzIiwiYm9va19pZCIsInNob3dQb3B1cCIsInJlbW92ZSIsImFkZEJvb2siLCJCb29rQ2FyZCIsImJvb2tDb3ZlciIsImFkZFRleHRGaWxlIiwiYXV0b3NlbmQiLCJmb3JtRGF0YSIsImFjY2VwdCIsInVwbG9hZCIsImxpbmsiLCJmaWxlc0xpc3QiLCJhZGRBdWRpb0ZpbGUiLCJhdWRpb0xpc3QiLCJhdmFpbGFibGVUZXh0RmlsZXMiLCJvbkl0ZW1DbGljayIsImF2YWlsYWJsZUF1ZGlvRmlsZXMiLCJzYXZlQnRuIiwibWF4SGVpZ2h0IiwicGFkZGluZ1giLCJjbGVhckZvcm0iLCJ0ZXh0RmlsZXMiLCJhdWRpb0ZpbGVzIiwiZmlsZSIsImRhdGFfdHlwZSIsImNvdmVyX3Bob3RvIiwic2VuZCIsImZpbGVzIiwiY2xlYXJBbGwiLCJtZW51IiwiaWNvbiIsIm9uTWVudUl0ZW1DbGljayIsImxpYkxpYnJhcnkiLCJhZGRCb29rQnRuIiwibGlicmFyeSIsIkxvZ2luUGFnZSIsImxvZ2luRm9ybSIsInVzZXJEYXRhIiwicm9sZV9uYW1lIiwicmVhZG9ubHkiLCJib29rTmFtZSIsImRvd25sb2FkIiwib3JkZXJCb29rIiwiZG93bmxvYWRCb29rIiwibGlrZUJvb2siLCJ0b2dnbGVDb21tZW50c0J0biIsInRvZ2dsZUNvbW1lbnRzIiwiY29tbWVudHMiLCJsaWtlQnV0dG9uIiwiY29tbWVudExheW91dCIsImRlZmluZSIsImNvdW50X2xpa2VzIiwiZ2V0Q29tbWVudHMiLCJib29rX2ZpbGUiLCJhdmFpbGFibGVfY29waWVzIiwidG9nZ2xlTGlrZSIsImxpa2VzTW9kZWwiLCJ1bnNldExpa2UiLCJzZXRMaWtlIiwiYWRkQ2hpbGRDb21tZW50cyIsImFyciIsIml0ZW0iLCJhcnJDb3B5IiwiY29tbWVudF9pZCIsImNvbW1lbnRJdGVtIiwiY29tcG9zZUNvbW1lbnQiLCJzcGxpY2UiLCJjb21tZW50c0dvdCIsImNvbW1lbnRzTW9kZWwiLCJjb21tZW50c0FyciIsImNvbW1lbnQiLCJjb21tZW50RGF0ZSIsImNvbW1lbnRfZGF0ZSIsImNvbW1lbnRBdXRob3IiLCJnZXRDaGlsZFZpZXdzIiwiY29tbWVudHNDb3B5IiwicmVhZGVyTGlicmFyeSIsIk1haW5WaWV3IiwidGVzdFJlc3VsdHMiLCJidXR0b24iLCJpbnB1dFdpZHRoIiwiU2V0dGluZ3MiLCJib29rVG9wcyIsInNob3dPbGRlc3RCb29rcyIsInNob3dOZXdlc3RCb29rcyIsInNob3dNb3N0UGFnZXNCb29rcyIsInNob3dCb29rc1dpdGhMb25nTmFtZXMiLCJzaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MiLCJkZWZhdWx0Q29uZmlnIiwiYiIsInNob3dSZXN1bHRzIiwibnVtYmVyX29mX3BhZ2VzIiwiYm9va190aXRsZSIsImF1dGhvcnMiLCJmaW5kSW5kZXgiLCJhdXRob3IiLCJhdXRob3JfbmFtZSIsImJvb2tzQ291bnQiLCJSZWdpc3RlclBhZ2UiLCJyZWdpc3RlckZvcm0iLCJyZWFzb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7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USxjQUFSLEVBQXdCc2YsU0FBeEIsRUFBZjtBQUNBLE9BQU10QixnQkFBZ0IsSUFBSXpGLHNEQUFKLEVBQXRCOztBQUVBeUYsaUJBQWN4RixRQUFkLENBQXVCN2YsTUFBdkIsRUFBK0J3QixJQUEvQixDQUFvQyxVQUFDbU0sUUFBRCxFQUFjO0FBQ2pELFFBQU1nTyxTQUFTaE8sU0FBU3FVLElBQVQsR0FBZ0JyRyxNQUEvQjtBQUNBLFFBQU1sVixLQUFLa0gsU0FBU3FVLElBQVQsR0FBZ0J2YixFQUEzQjtBQUNBLFFBQUlrVixXQUFXLENBQWYsRUFBa0I7QUFDakIsWUFBSzlVLElBQUwsc0JBQTZCSixFQUE3QjtBQUNBLEtBRkQsTUFHSztBQUNKLFNBQUdrSCxTQUFTcVUsSUFBVCxHQUFnQnlNLE1BQWhCLEtBQTJCLFdBQTlCLEVBQTJDO0FBQzFDLGFBQUs1bkIsSUFBTCxDQUFVLFFBQVY7QUFDQTtBQUNEbEIsV0FBTWtILE9BQU4sQ0FBY2MsU0FBU3FVLElBQVQsR0FBZ0IxUSxJQUE5QjtBQUNBO0FBQ0QsSUFaRDtBQWFBLEdBakJEO0FBa0JBLEU7OztFQXREd0M5RixpRDs7QUFBckIraUIsMkUiLCJmaWxlIjoibXlhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zb3VyY2VzL215YXBwLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJjbGFzcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHdlYml4KSB7XHJcbiAgICAgICAgdGhpcy53ZWJpeEpldCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53ZWJpeCA9IHdlYml4O1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3N1YnMgPSB7fTtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICB9XHJcbiAgICBnZXRSb290KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb290O1xyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95U3VicygpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuYXBwID0gdGhpcy5fcGFyZW50ID0gdGhpcy5fcm9vdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbShpZCwgdmFsdWUsIHVybCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kYXRhW2lkXSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVtpZF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2VnbWVudC51cGRhdGUoaWQsIHZhbHVlLCAwKTtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UGFyYW0oaWQsIHBhcmVudCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZGF0YVtpZF07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiB8fCAhcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LmdldFBhcmFtKGlkLCBwYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudC5zdWJ1cmwoKTtcclxuICAgIH1cclxuICAgIGdldFVybFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZ2V0UGFyZW50VmlldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gICAgfVxyXG4gICAgJCQoaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3QucXVlcnlWaWV3KChvYmogPT4gKG9iai5jb25maWcuaWQgPT09IGlkIHx8IG9iai5jb25maWcubG9jYWxJZCA9PT0gaWQpICYmXHJcbiAgICAgICAgICAgICAgICAob2JqLiRzY29wZSA9PT0gcm9vdC4kc2NvcGUpKSwgXCJzZWxmXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uKG9iaiwgbmFtZSwgY29kZSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gb2JqLmF0dGFjaEV2ZW50KG5hbWUsIGNvZGUpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cy5wdXNoKHsgb2JqLCBpZCB9KTtcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcbiAgICBjb250YWlucyh2aWV3KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBraWQgPSB0aGlzLl9zdWJzW2tleV0udmlldztcclxuICAgICAgICAgICAgaWYgKGtpZCA9PT0gdmlldyB8fCBraWQuY29udGFpbnModmlldykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldFN1YlZpZXcobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3ViLnN1YnZpZXcudmlldztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3SW5mbyhuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5fc3Vic1tuYW1lIHx8IFwiZGVmYXVsdFwiXTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1YnZpZXc6IHN1YiwgcGFyZW50OiB0aGlzIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcIl90b3BcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzW25hbWVdID0geyB1cmw6IFwiXCIsIGlkOiBudWxsLCBwb3B1cDogdHJ1ZSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBhIGNoaWxkIHZpZXcsIHNlYXJjaGVzIGZvciBuZWFyZXN0IHBhcmVudCB3aXRoIHN1YnZpZXdcclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgX2RldGFjaEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGV2ZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBldmVudHNbaV0ub2JqLmRldGFjaEV2ZW50KGV2ZW50c1tpXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2Rlc3Ryb3lTdWJzKCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgc3ViIHZpZXdzXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBzdWJWaWV3ID0gdGhpcy5fc3Vic1trZXldLnZpZXc7XHJcbiAgICAgICAgICAgIC8vIGl0IHBvc3NpYmxlIHRoYXQgc3VidmlldyB3YXMgbm90IGxvYWRlZCB3aXRoIGFueSBjb250ZW50IHlldFxyXG4gICAgICAgICAgICAvLyBzbyBjaGVjayBvbiBudWxsXHJcbiAgICAgICAgICAgIGlmIChzdWJWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBzdWJWaWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xyXG4gICAgICAgIHRoaXMuX3N1YnMgPSB7fTtcclxuICAgIH1cclxuICAgIF9pbml0X3VybF9kYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX3NlZ21lbnQuY3VycmVudCgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLndlYml4LmV4dGVuZCh0aGlzLl9kYXRhLCB1cmwucGFyYW1zLCB0cnVlKTtcclxuICAgIH1cclxuICAgIF9nZXREZWZhdWx0U3ViKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJzLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnMuZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9zdWJzW2tleV07XHJcbiAgICAgICAgICAgIGlmICghc3ViLmJyYW5jaCAmJiBzdWIudmlldyAmJiBrZXkgIT09IFwiX3RvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHN1Yi52aWV3Ll9nZXREZWZhdWx0U3ViKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcm91dGVkX3ZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YiA9IHBhcmVudC5fZ2V0RGVmYXVsdFN1YigpO1xyXG4gICAgICAgIGlmICghc3ViICYmIHN1YiAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJlbnQuX3JvdXRlZF92aWV3KCk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gcGFyc2UodXJsKSB7XHJcbiAgICAvLyByZW1vdmUgc3RhcnRpbmcgL1xyXG4gICAgaWYgKHVybFswXSA9PT0gXCIvXCIpIHtcclxuICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDEpO1xyXG4gICAgfVxyXG4gICAgLy8gc3BsaXQgdXJsIGJ5IFwiL1wiXHJcbiAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBjaHVua3MgPSBbXTtcclxuICAgIC8vIGZvciBlYWNoIHBhZ2UgaW4gdXJsXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGVzdCA9IHBhcnRzW2ldO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIC8vIGRldGVjdCBwYXJhbXNcclxuICAgICAgICAvLyBzdXBwb3J0IG9sZCBcdFx0XHRzb21lOmE9YjpjPWRcclxuICAgICAgICAvLyBhbmQgbmV3IG5vdGF0aW9uXHRcdHNvbWU/YT1iJmM9ZFxyXG4gICAgICAgIGxldCBwb3MgPSB0ZXN0LmluZGV4T2YoXCI6XCIpO1xyXG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRlc3QuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHRlc3Quc3Vic3RyKHBvcyArIDEpLnNwbGl0KC9bXFw6XFw/XFwmXS9nKTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGhhc2ggb2YgbmFtZWQgcGFyYW1zXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW0gb2YgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkY2h1bmsgPSBwYXJhbS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbZGNodW5rWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChkY2h1bmtbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN0b3JlIHBhcnNlZCB2YWx1ZXNcclxuICAgICAgICBjaHVua3NbaV0gPSB7XHJcbiAgICAgICAgICAgIHBhZ2U6IChwb3MgPiAtMSA/IHRlc3Quc3Vic3RyKDAsIHBvcykgOiB0ZXN0KSxcclxuICAgICAgICAgICAgcGFyYW1zOiByZXN1bHQsXHJcbiAgICAgICAgICAgIGlzTmV3OiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBwYWdlIG9iamVjdHNcclxuICAgIHJldHVybiBjaHVua3M7XHJcbn1cclxuZnVuY3Rpb24gdXJsMnN0cihzdGFjaykge1xyXG4gICAgY29uc3QgdXJsID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGNodW5rIG9mIHN0YWNrKSB7XHJcbiAgICAgICAgdXJsLnB1c2goXCIvXCIgKyBjaHVuay5wYWdlKTtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBvYmoyc3RyKGNodW5rLnBhcmFtcyk7XHJcbiAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICB1cmwucHVzaChcIj9cIiArIHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybC5qb2luKFwiXCIpO1xyXG59XHJcbmZ1bmN0aW9uIG9iajJzdHIob2JqKSB7XHJcbiAgICBjb25zdCBzdHIgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHN0ci5wdXNoKFwiJlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyLnB1c2goa2V5ICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuam9pbihcIlwiKTtcclxufVxuXG5jbGFzcyBSb3V0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZSwgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9uZXh0ID0gMTtcclxuICAgICAgICBpZiAodHlwZW9mIHJvdXRlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHBhcnNlKHJvdXRlKSxcclxuICAgICAgICAgICAgICAgIHBhdGg6IHJvdXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuICAgIGN1cnJlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleCArIHRoaXMuX25leHRdO1xyXG4gICAgfVxyXG4gICAgc3VidXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybC5zbGljZSh0aGlzLmluZGV4KTtcclxuICAgIH1cclxuICAgIHNoaWZ0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUm91dGUodGhpcy5yb3V0ZSwgdGhpcy5pbmRleCArIHRoaXMuX25leHQpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleCArIDE7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdXJsW2ldLmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBjb25zdCBzdHIgPSB1cmwyc3RyKHRoaXMuc3VidXJsKCkpO1xyXG4gICAgICAgIHJldHVybiBzdHIgPyBzdHIuc3Vic3RyKDEpIDogXCJcIjtcclxuICAgIH1cclxuICAgIF9qb2luKHBhdGgsIGtpZHMpIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgaWYgKHBhdGggPT09IG51bGwpIHsgLy8gY2hhbmdlIG9mIHBhcmFtZXRlcnMsIHJvdXRlIGVsZW1lbnRzIGFyZSBub3QgYWZmZWN0ZWRcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgdXJsID0gb2xkLnNsaWNlKDAsIHRoaXMuaW5kZXggKyAoa2lkcyA/IHRoaXMuX25leHQgOiAwKSk7XHJcbiAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLmNvbmNhdChwYXJzZShwYXRoKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsW2ldLnZpZXcgPSBvbGRbaV0udmlldztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvbGRbaV0gJiYgdXJsW2ldLnBhZ2UgPT09IG9sZFtpXS5wYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsW2ldLmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIGFwcGVuZChwYXRoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fam9pbihwYXRoLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSB1cmwyc3RyKHVybCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUucGF0aDtcclxuICAgIH1cclxuICAgIHNob3cocGF0aCwgdmlldywga2lkcykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2pvaW4ocGF0aCwga2lkcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IHVybDJzdHIodXJsKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3QsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtOiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBhcHAgPSB2aWV3ID8gdmlldy5hcHAgOiBudWxsO1xyXG4gICAgICAgICAgICAvLyB3aGVuIGNyZWF0aW5nIGEgbmV3IHJvdXRlLCBpdCBwb3NzaWJsZSB0aGF0IGl0IHdpbGwgbm90IGhhdmUgYW55IGNvbnRlbnRcclxuICAgICAgICAgICAgLy8gZ3VhcmQgaXMgbm90IG5lY2Vzc2FyeSBpbiBzdWNoIGNhc2VcclxuICAgICAgICAgICAgaWYgKGFwcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXBwLmNhbGxFdmVudChcImFwcDpndWFyZFwiLCBbb2JqLnJlZGlyZWN0LCB2aWV3LCBvYmpdKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iai5jb25maXJtLmNhdGNoKCgpID0+IG9iai5yZWRpcmVjdCA9IG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5yZWRpcmVjdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYmoucmVkaXJlY3QgIT09IHJlZGlyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnNob3cob2JqLnJlZGlyZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSByZWRpcmVjdDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGUudXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgcmVzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2l6ZShuKSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dCA9IG47XHJcbiAgICB9XHJcbiAgICBzcGxpdCgpIHtcclxuICAgICAgICBjb25zdCByb3V0ZSA9IHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnJvdXRlLnVybC5zbGljZSh0aGlzLmluZGV4ICsgMSksXHJcbiAgICAgICAgICAgIHBhdGg6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyb3V0ZS51cmwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJvdXRlLnBhdGggPSB1cmwyc3RyKHJvdXRlLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUm91dGUocm91dGUsIDApO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKG5hbWUsIHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleCArIChpbmRleCB8fCAwKV07XHJcbiAgICAgICAgaWYgKCFjaHVuaykge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlLnVybC5wdXNoKHsgcGFnZTogXCJcIiwgcGFyYW1zOiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKG5hbWUsIHZhbHVlLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNodW5rLnBhZ2UgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNodW5rLnBhcmFtc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSB1cmwyc3RyKHRoaXMucm91dGUudXJsKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBKZXRWaWV3IGV4dGVuZHMgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGFwcC53ZWJpeCk7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgLy90aGlzLiRjb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxuICAgIHVpKHVpLCBjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciB8fCB1aS5jb250YWluZXI7XHJcbiAgICAgICAgY29uc3QgamV0dmlldyA9IHRoaXMuYXBwLmNyZWF0ZVZpZXcodWkpO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goamV0dmlldyk7XHJcbiAgICAgICAgamV0dmlldy5yZW5kZXIoY29udGFpbmVyLCB0aGlzLl9zZWdtZW50LCB0aGlzKTtcclxuICAgICAgICBpZiAodHlwZW9mIHVpICE9PSBcIm9iamVjdFwiIHx8ICh1aSBpbnN0YW5jZW9mIEpldEJhc2UpKSB7XHJcbiAgICAgICAgICAgIC8vIHJhdyB3ZWJpeCBVSVxyXG4gICAgICAgICAgICByZXR1cm4gamV0dmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBqZXR2aWV3LmdldFJvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICAvLyBjb252ZXJ0IHBhcmFtZXRlcnMgb2JqZWN0IHRvIHVybFxyXG4gICAgICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtKGtleSwgcGF0aFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXRoID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGlnYXRlIHRvIGFwcCBpbiBjYXNlIG9mIHJvb3QgcHJlZml4XHJcbiAgICAgICAgICAgIGlmIChwYXRoLnN1YnN0cigwLCAxKSA9PT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KHBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxvY2FsIHBhdGgsIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihcIi4vXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcGFyZW50IHBhdGgsIGNhbGwgcGFyZW50IHZpZXdcclxuICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihcIi4uL1wiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5zaG93KHBhdGguc3Vic3RyKDMpLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3coXCIvXCIgKyBwYXRoLnN1YnN0cigzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5nZXRTdWJWaWV3SW5mbyhjb25maWcudGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1Yi5wYXJlbnQgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ViLnBhcmVudC5zaG93KHBhdGgsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb25maWcudGFyZ2V0ICYmIGNvbmZpZy50YXJnZXQgIT09IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckZyYW1lTG9jayhjb25maWcudGFyZ2V0LCBzdWIuc3VidmlldywgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KFwiL1wiICsgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3codGhpcy5fc2VnbWVudCwgcGF0aCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBfc2hvdyhzZWdtZW50LCBwYXRoLCB2aWV3KSB7XHJcbiAgICAgICAgcmV0dXJuIHNlZ21lbnQuc2hvdyhwYXRoLCB2aWV3LCB0cnVlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdF91cmxfZGF0YSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWdtZW50LnJvdXRlLmxpbmtSb3V0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmdldFJvdXRlcigpLnNldChzZWdtZW50LnJvdXRlLnBhdGgsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFtzZWdtZW50LnJvdXRlLnBhdGhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5pdChfJHZpZXcsIF8kKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgcmVhZHkoXyR2aWV3LCBfJHVybCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGNvbmZpZygpIHtcclxuICAgICAgICB0aGlzLmFwcC53ZWJpeC5tZXNzYWdlKFwiVmlldzpDb25maWcgaXMgbm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgfVxyXG4gICAgdXJsQ2hhbmdlKF8kdmlldywgXyR1cmwpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveUtpZHMoKTtcclxuICAgICAgICAvLyBkZXN0cm95IGFjdHVhbCBVSVxyXG4gICAgICAgIHRoaXMuX3Jvb3QuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIHN1cGVyLmRlc3RydWN0b3IoKTtcclxuICAgIH1cclxuICAgIHVzZShwbHVnaW4sIGNvbmZpZykge1xyXG4gICAgICAgIHBsdWdpbih0aGlzLmFwcCwgdGhpcywgY29uZmlnKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95S2lkcygpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzKCk7XHJcbiAgICAgICAgdGhpcy5fZGV0YWNoRXZlbnRzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZWdtZW50LnJlZnJlc2goKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKHRoaXMuX3NlZ21lbnQpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKHJvb3QsIHVybCwgcGFyZW50KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdXJsID0gbmV3IFJvdXRlKHVybCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMuX2luaXRfdXJsX2RhdGEoKTtcclxuICAgICAgICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIGNvbnN0IF9jb250YWluZXIgPSAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpID8gdGhpcy53ZWJpeC50b05vZGUocm9vdCkgOiByb290O1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgIT09IF9jb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcih1cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpLnRoZW4oKCkgPT4gdGhpcy5nZXRSb290KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZW5kZXIodXJsKSB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcoKTtcclxuICAgICAgICBpZiAoY29uZmlnLnRoZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy50aGVuKGNmZyA9PiB0aGlzLl9yZW5kZXJfZmluYWwoY2ZnLCB1cmwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJfZmluYWwoY29uZmlnLCB1cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZW5kZXJfZmluYWwoY29uZmlnLCB1cmwpIHtcclxuICAgICAgICAvLyBnZXQgcHJldmlvdXMgdmlldyBpbiB0aGUgc2FtZSBzbG90XHJcbiAgICAgICAgbGV0IHNsb3QgPSBudWxsO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBzaG93ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb250YWluZXIudGFnTmFtZSkge1xyXG4gICAgICAgICAgICBzbG90ID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgICAgICBpZiAoc2xvdC5wb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy53ZWJpeC4kJChzbG90LmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB2aWV3IGFscmVhZHkgZGVzdHJveWVkXHJcbiAgICAgICAgaWYgKCF0aGlzLmFwcCB8fCAhY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLl9zZWdtZW50LmN1cnJlbnQoKTtcclxuICAgICAgICAvLyB1c2luZyB3cmFwcGVyIG9iamVjdCwgc28gdWkgY2FuIGJlIGNoYW5nZWQgZnJvbSBhcHA6cmVuZGVyIGV2ZW50XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geyB1aToge30gfTtcclxuICAgICAgICB0aGlzLmFwcC5jb3B5Q29uZmlnKGNvbmZpZywgcmVzdWx0LnVpLCB0aGlzLl9zdWJzKTtcclxuICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6cmVuZGVyXCIsIFt0aGlzLCB1cmwsIHJlc3VsdF0pO1xyXG4gICAgICAgIHJlc3VsdC51aS4kc2NvcGUgPSB0aGlzO1xyXG4gICAgICAgIC8qIGRlc3Ryb3kgb2xkIEhUTUwgYXR0YWNoZWQgdmlld3MgYmVmb3JlIGNyZWF0aW5nIG5ldyBvbmUgKi9cclxuICAgICAgICBpZiAoIXNsb3QgJiYgY3VycmVudC5pc05ldyAmJiBjdXJyZW50LnZpZXcpIHtcclxuICAgICAgICAgICAgY3VycmVudC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyBmb3IgYWRkaW5nIGluc2lkZSBvZiBtdWx0aXZpZXcgLSBwcmVzZXJ2ZSBvbGQgaWRcclxuICAgICAgICAgICAgaWYgKHNsb3QgJiYgIXNob3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZHVpID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gb2xkdWkuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubmFtZSA9PT0gXCJtdWx0aXZpZXdcIiAmJiAhcmVzdWx0LnVpLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnVpLmlkID0gb2xkdWkuY29uZmlnLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLmFwcC53ZWJpeC51aShyZXN1bHQudWksIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzV2luID0gdGhpcy5fcm9vdDtcclxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHVybCBhZGRlZCB0byBpZ25vcmUgdGhpcy51aSBjYWxsc1xyXG4gICAgICAgICAgICBpZiAoc2hvdyAmJiBhc1dpbi5zZXRQb3NpdGlvbiAmJiAhYXNXaW4uaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgIGFzV2luLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjaGVjaywgaWYgd2UgYXJlIHJlcGxhY2luZyBzb21lIG9sZGVyIHZpZXdcclxuICAgICAgICAgICAgaWYgKHNsb3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbG90LnZpZXcgJiYgc2xvdC52aWV3ICE9PSB0aGlzICYmIHNsb3QudmlldyAhPT0gdGhpcy5hcHApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2xvdC5pZCA9IHRoaXMuX3Jvb3QuY29uZmlnLmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGFyZW50VmlldygpIHx8ICF0aGlzLmFwcC5hcHApXHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gd2UgaGF2ZSBzdWJhcHAsIHNldCB3aG9sZSBhcHAgYXMgYSB2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gb24gZGVzdHJ1Y3Rpb24sIHRoZSB3aG9sZSBhcHAgd2lsbCBiZSBkZXN0cm95ZWRcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcgPSB0aGlzLmFwcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5pc05ldykge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNwb25zZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLl9pbml0KHRoaXMuX3Jvb3QsIHVybCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRVcmwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KHRoaXMuX3Jvb3QsIHVybC5zdWJ1cmwoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5jYXRjaChlcnIgPT4gdGhpcy5faW5pdEVycm9yKHRoaXMsIGVycikpO1xyXG4gICAgfVxyXG4gICAgX2luaXQodmlldywgdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5pdCh2aWV3LCB1cmwuc3VidXJsKCkpO1xyXG4gICAgfVxyXG4gICAgX3VybENoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6dXJsY2hhbmdlXCIsIFt0aGlzLCB0aGlzLl9zZWdtZW50XSk7XHJcbiAgICAgICAgY29uc3Qgd2FpdHMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5fc3Vic1trZXldO1xyXG4gICAgICAgICAgICBjb25zdCB3YWl0ID0gdGhpcy5fcmVuZGVyRnJhbWVMb2NrKGtleSwgZnJhbWUsIG51bGwpO1xyXG4gICAgICAgICAgICBpZiAod2FpdCkge1xyXG4gICAgICAgICAgICAgICAgd2FpdHMucHVzaCh3YWl0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwod2FpdHMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cmxDaGFuZ2UodGhpcy5fcm9vdCwgdGhpcy5fc2VnbWVudC5zdWJ1cmwoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyRnJhbWVMb2NrKGtleSwgZnJhbWUsIHBhdGgpIHtcclxuICAgICAgICAvLyBpZiBzdWJ2aWV3IGlzIG5vdCBvY2N1cGllZCBieSBzb21lIHJlbmRlcmluZyB5ZXRcclxuICAgICAgICBpZiAoIWZyYW1lLmxvY2spIHtcclxuICAgICAgICAgICAgLy8gcmV0cmVpdmUgYW5kIHN0b3JlIHJlbmRlcmluZyBlbmQgcHJvbWlzZVxyXG4gICAgICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5fcmVuZGVyRnJhbWUoa2V5LCBmcmFtZSwgcGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBsb2NrIGFmdGVyIGZyYW1lIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgLy8gYXMgcHJvbWlzZS5maW5hbGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgIFdlYml4IGxlc3NlciB0aGFuIDYuMlxyXG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgYSBtb3JlIHZlcmJvc2Ugbm90YXRpb25cclxuICAgICAgICAgICAgICAgIGZyYW1lLmxvY2sgPSBsb2NrLnRoZW4oKCkgPT4gZnJhbWUubG9jayA9IG51bGwsICgpID0+IGZyYW1lLmxvY2sgPSBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXR1cm4gcmVuZGVyaW5nIGVuZCBwcm9taXNlXHJcbiAgICAgICAgcmV0dXJuIGZyYW1lLmxvY2s7XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyRnJhbWUoa2V5LCBmcmFtZSwgcGF0aCkge1xyXG4gICAgICAgIC8vZGVmYXVsdCByb3V0ZVxyXG4gICAgICAgIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWdtZW50Lm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIG5leHQgc2VnbWVudCBpbiB1cmwsIHJlbmRlciBpdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIHRoaXMuX3NlZ21lbnQuc2hpZnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZnJhbWUudmlldyAmJiBmcmFtZS5wb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgbm8gbmV4dCBzZWdtZW50LCBkZWxldGUgdGhlIGV4aXN0aW5nIHN1Yi12aWV3XHJcbiAgICAgICAgICAgICAgICBmcmFtZS52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lLnZpZXcgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgbmV3IHBhdGggcHJvdmlkZWQsIHNldCBpdCB0byB0aGUgZnJhbWVcclxuICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmcmFtZS51cmwgPSBwYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbiBjYXNlIG9mIHJvdXRlZCBzdWItdmlld1xyXG4gICAgICAgIGlmIChmcmFtZS5yb3V0ZSkge1xyXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIGEgbmV3IHBhdGggZm9yIHN1Yi12aWV3XHJcbiAgICAgICAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhbWUucm91dGUuc2hvdyhwYXRoLCBmcmFtZS52aWV3KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgZnJhbWUucm91dGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZG8gbm90IHRyaWdnZXIgb25DaGFuZ2UgZm9yIGlzb2xhdGVkIHN1Yi12aWV3c1xyXG4gICAgICAgICAgICBpZiAoZnJhbWUuYnJhbmNoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZpZXcgPSBmcmFtZS52aWV3O1xyXG4gICAgICAgIC8vIGlmIHZpZXcgZG9lc24ndCBleGlzdHMgeWV0LCBpbml0IGl0XHJcbiAgICAgICAgaWYgKCF2aWV3ICYmIGZyYW1lLnVybCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZyYW1lLnVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nLCBzbyB3ZSBoYXZlIGlzb2xhdGVkIHN1YnZpZXcgdXJsXHJcbiAgICAgICAgICAgICAgICBmcmFtZS5yb3V0ZSA9IG5ldyBSb3V0ZShmcmFtZS51cmwsIDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIGZyYW1lLnJvdXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG9iamVjdCwgc28gd2UgaGF2ZSBhbiBlbWJlZGVkIHN1YnZpZXdcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhbWUudXJsID09PSBcImZ1bmN0aW9uXCIgJiYgISh2aWV3IGluc3RhbmNlb2YgZnJhbWUudXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcgPSBuZXcgZnJhbWUudXJsKHRoaXMuYXBwLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcgPSBmcmFtZS51cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdHJpZ2dlciBvbkNoYW5nZSBmb3IgYWxyZWFkeSBleGlzdGVkIHZpZXdcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5yZW5kZXIoZnJhbWUsIChmcmFtZS5yb3V0ZSB8fCB0aGlzLl9zZWdtZW50KSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2luaXRFcnJvcih2aWV3LCBlcnIpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICBpZiB2aWV3IGlzIGRlc3Ryb3llZCwgaWdub3JlIGFueSB2aWV3IHJlbGF0ZWQgZXJyb3JzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAuZXJyb3IoXCJhcHA6ZXJyb3I6aW5pdHZpZXdcIiwgW2Vyciwgdmlld10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIF9jcmVhdGVTdWJWaWV3KHN1Yiwgc3VidXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwLmNyZWF0ZUZyb21VUkwoc3VidXJsLmN1cnJlbnQoKSwgc3ViLnZpZXcpLnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihzdWIsIHN1YnVybCwgdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveUtpZHMoKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSBjaGlsZCB2aWV3c1xyXG4gICAgICAgIGNvbnN0IHVpcyA9IHRoaXMuX2NoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB1aXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHVpc1tpXSAmJiB1aXNbaV0uZGVzdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAgICAgdWlzW2ldLmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCB2YXJzIGZvciBiZXR0ZXIgR0MgcHJvY2Vzc2luZ1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbn1cblxuLy8gd3JhcHBlciBmb3IgcmF3IG9iamVjdHMgYW5kIEpldCAxLnggc3RydWN0c1xyXG5jbGFzcyBKZXRWaWV3UmF3IGV4dGVuZHMgSmV0VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGFwcCwgY29uZmlnKTtcclxuICAgICAgICB0aGlzLl91aSA9IGNvbmZpZy51aTtcclxuICAgIH1cclxuICAgIGNvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdWk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgU3ViUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcsIGFwcCkge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICBjb25zdCBhID0gdGhpcy5hcHA7XHJcbiAgICAgICAgYS5hcHAuZ2V0Um91dGVyKCkuc2V0KGEuX3NlZ21lbnQuYXBwZW5kKHRoaXMucGF0aCksIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XHJcbiAgICB9XHJcbn1cblxubGV0IF9vbmNlID0gdHJ1ZTtcclxuY2xhc3MgSmV0QXBwQmFzZSBleHRlbmRzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3Qgd2ViaXggPSAoY29uZmlnIHx8IHt9KS53ZWJpeCB8fCB3aW5kb3cud2ViaXg7XHJcbiAgICAgICAgc3VwZXIod2ViaXgpO1xyXG4gICAgICAgIC8vIGluaXQgY29uZmlnXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLndlYml4LmV4dGVuZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXBwXCIsXHJcbiAgICAgICAgICAgIHZlcnNpb246IFwiMS4wXCIsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBcIi9ob21lXCJcclxuICAgICAgICB9LCBjb25maWcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gdGhpcy5jb25maWcuYXBwO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMud2ViaXguZXh0ZW5kKHRoaXMsIHRoaXMud2ViaXguRXZlbnRTeXN0ZW0pO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJTZWdtZW50LnN1YnVybCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJTZWdtZW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTZXJ2aWNlKG5hbWUpIHtcclxuICAgICAgICBsZXQgb2JqID0gdGhpcy5fc2VydmljZXNbbmFtZV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvYmogPSB0aGlzLl9zZXJ2aWNlc1tuYW1lXSA9IG9iaih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIHNldFNlcnZpY2UobmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2VzW25hbWVdID0gaGFuZGxlcjtcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRTdWJWaWV3KCkuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIHN1cGVyLmRlc3RydWN0b3IoKTtcclxuICAgIH1cclxuICAgIC8vIGNvcHkgb2JqZWN0IGFuZCBjb2xsZWN0IGV4dHJhIGhhbmRsZXJzXHJcbiAgICBjb3B5Q29uZmlnKG9iaiwgdGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICAvLyByYXcgdWkgY29uZmlnXHJcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEpldEJhc2UgfHxcclxuICAgICAgICAgICAgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiAmJiBvYmoucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkpIHtcclxuICAgICAgICAgICAgb2JqID0geyAkc3Vidmlldzogb2JqIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN1YnZpZXcgcGxhY2Vob2xkZXJcclxuICAgICAgICBpZiAodHlwZW9mIG9iai4kc3VidmlldyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZFN1YlZpZXcob2JqLCB0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHByb2Nlc3Mgc3ViLXByb3BlcnRpZXNcclxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgKG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBtZXRob2QgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGxldCBwb2ludCA9IG9ialttZXRob2RdO1xyXG4gICAgICAgICAgICAvLyB2aWV3IGNsYXNzXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcG9pbnQgPT09IFwiZnVuY3Rpb25cIiAmJiBwb2ludC5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICBwb2ludCA9IHsgJHN1YnZpZXc6IHBvaW50IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvaW50ICYmIHR5cGVvZiBwb2ludCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICAgICAgIShwb2ludCBpbnN0YW5jZW9mIHRoaXMud2ViaXguRGF0YUNvbGxlY3Rpb24pICYmICEocG9pbnQgaW5zdGFuY2VvZiBSZWdFeHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBuZXcgRGF0ZShwb2ludCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3B5ID0gdGhpcy5jb3B5Q29uZmlnKHBvaW50LCAocG9pbnQgaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge30pLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IHBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBnZXRSb3V0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlcjtcclxuICAgIH1cclxuICAgIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gKGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmlnZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyaWdnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JWaWV3KHRhcmdldCwgdmlldyA9PiB2aWV3LmFwcC50cmlnZ2VyKHRyaWdnZXIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInJvdXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yVmlldyh0YXJnZXQsIHZpZXcgPT4gdmlldy5zaG93KHJvdXRlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRSb290KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXcoKS5nZXRSb290KCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fc3ViU2VnbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3KCkucmVmcmVzaCgpLnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFt0aGlzLmdldFVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9hZFZpZXcodXJsKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3MgPSB0aGlzLmNvbmZpZy52aWV3cztcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBpZiAodXJsID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fbG9hZEVycm9yKFwiXCIsIG5ldyBFcnJvcihcIldlYml4IEpldDogRW1wdHkgdXJsIHNlZ21lbnRcIikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHZpZXdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpZXdzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b20gbG9hZGluZyBzdHJhdGVneVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdzKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcmVkZWZpbmVkIGhhc2hcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2aWV3c1t1cmxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PT0gXCJfYmxhbmtcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbG9hZFZpZXdEeW5hbWljKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbG9hZEVycm9yKHVybCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGN1c3RvbSBoYW5kbGVyIGNhbiByZXR1cm4gdmlldyBvciBpdHMgcHJvbWlzZVxyXG4gICAgICAgIGlmICghcmVzdWx0LnRoZW4pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBlcnJvciBoYW5kbGVyXHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0XHJcbiAgICAgICAgICAgIC50aGVuKG1vZHVsZSA9PiBtb2R1bGUuX19lc01vZHVsZSA/IG1vZHVsZS5kZWZhdWx0IDogbW9kdWxlKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuX2xvYWRFcnJvcih1cmwsIGVycikpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBfZm9yVmlldyh0YXJnZXQsIGhhbmRsZXIpIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy53ZWJpeC4kJCh0YXJnZXQpO1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIodmlldy4kc2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9sb2FkVmlld0R5bmFtaWModXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVGcm9tVVJMKGNodW5rLCBub3cpIHtcclxuICAgICAgICBsZXQgdmlldztcclxuICAgICAgICBpZiAoY2h1bmsuaXNOZXcgfHwgIWNodW5rLnZpZXcpIHtcclxuICAgICAgICAgICAgdmlldyA9IHRoaXMubG9hZFZpZXcoY2h1bmsucGFnZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHVpID0+IHRoaXMuY3JlYXRlVmlldyh1aSwgbmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmlldyA9IFByb21pc2UucmVzb2x2ZShjaHVuay52aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVWaWV3KHVpLCBuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9iajtcclxuICAgICAgICBpZiAodHlwZW9mIHVpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgaWYgKHVpLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEFwcEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGNsYXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHVpKHsgYXBwOiB0aGlzLCBuYW1lLCByb3V0ZXI6IFN1YlJvdXRlciB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB1aSh0aGlzLCB7IG5hbWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBmYWN0b3J5IGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICAgICAgdWkgPSB1aSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodWkgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHVpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVUkgb2JqZWN0XHJcbiAgICAgICAgICAgIG9iaiA9IG5ldyBKZXRWaWV3UmF3KHRoaXMsIHsgbmFtZSwgdWkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICAvLyBzaG93IHZpZXcgcGF0aFxyXG4gICAgc2hvdyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5fY29udGFpbmVyLCAodXJsIHx8IHRoaXMuY29uZmlnLnN0YXJ0KSk7XHJcbiAgICB9XHJcbiAgICAvLyBldmVudCBoZWxwZXJzXHJcbiAgICB0cmlnZ2VyKG5hbWUsIC4uLnJlc3QpIHtcclxuICAgICAgICB0aGlzLmFwcGx5KG5hbWUsIHJlc3QpO1xyXG4gICAgfVxyXG4gICAgYXBwbHkobmFtZSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KG5hbWUsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgYWN0aW9uKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWJpeC5iaW5kKGZ1bmN0aW9uICguLi5yZXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHkobmFtZSwgcmVzdCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvbihuYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudChuYW1lLCBoYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHVzZShwbHVnaW4sIGNvbmZpZykge1xyXG4gICAgICAgIHBsdWdpbih0aGlzLCBudWxsLCBjb25maWcpO1xyXG4gICAgfVxyXG4gICAgZXJyb3IobmFtZSwgZXIpIHtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChuYW1lLCBlcik7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6ZXJyb3JcIiwgZXIpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlICovXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJbaV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVyW2ldIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGVyW2ldLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihcIk1vZHVsZSBidWlsZCBmYWlsZWRcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFx4MWJcXFtbMC05O10qbS9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgPHByZSBzdHlsZT0nZm9udC1zaXplOjE2cHg7IGJhY2tncm91bmQtY29sb3I6ICNlYzY4NzM7IGNvbG9yOiAjMDAwOyBwYWRkaW5nOjEwcHg7Jz4ke3RleHR9PC9wcmU+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCI8YnI+PGJyPkNoZWNrIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlsc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndlYml4Lm1lc3NhZ2UoeyB0eXBlOiBcImVycm9yXCIsIHRleHQ6IHRleHQsIGV4cGlyZTogLTEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcbiAgICB9XHJcbiAgICAvLyByZW5kZXJzIHRvcCB2aWV3XHJcbiAgICByZW5kZXIocm9vdCwgdXJsLCBwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpID9cclxuICAgICAgICAgICAgdGhpcy53ZWJpeC50b05vZGUocm9vdCkgOlxyXG4gICAgICAgICAgICAocm9vdCB8fCBkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICBjb25zdCBmaXJzdEluaXQgPSAhdGhpcy4kcm91dGVyO1xyXG4gICAgICAgIGxldCBwYXRoID0gbnVsbDtcclxuICAgICAgICBpZiAoZmlyc3RJbml0KSB7XHJcbiAgICAgICAgICAgIGlmIChfb25jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5hdHRhY2hFdmVudChcIm9uQ2xpY2tcIiwgZSA9PiB0aGlzLmNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICAgICAgICAgICAgICBfb25jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBuZXcgUm91dGUodXJsLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zdWJTZWdtZW50ID0gdGhpcy5fZmlyc3Rfc3RhcnQodXJsKTtcclxuICAgICAgICAgICAgdGhpcy5fc3ViU2VnbWVudC5yb3V0ZS5saW5rUm91dGVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHVybC5zcGxpdCgpLnJvdXRlLnBhdGggfHwgdGhpcy5jb25maWcuc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdXJsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRTdWJWaWV3KCk7XHJcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMuX3N1YlNlZ21lbnQ7XHJcbiAgICAgICAgY29uc3QgcmVhZHkgPSBzZWdtZW50LnNob3cocGF0aCwgdG9wKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmNyZWF0ZUZyb21VUkwoc2VnbWVudC5jdXJyZW50KCksIHRvcCkpXHJcbiAgICAgICAgICAgIC50aGVuKHZpZXcgPT4gdmlldy5yZW5kZXIocm9vdCwgc2VnbWVudCkpXHJcbiAgICAgICAgICAgIC50aGVuKGJhc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIuc2V0KHNlZ21lbnQucm91dGUucGF0aCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFt0aGlzLmdldFVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBiYXNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSB0aGlzLnJlYWR5LnRoZW4oKCkgPT4gcmVhZHkpO1xyXG4gICAgICAgIHJldHVybiByZWFkeTtcclxuICAgIH1cclxuICAgIGdldFN1YlZpZXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YlNlZ21lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuX3N1YlNlZ21lbnQuY3VycmVudCgpLnZpZXc7XHJcbiAgICAgICAgICAgIGlmICh2aWV3KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSmV0Vmlldyh0aGlzLCB7fSk7XHJcbiAgICB9XHJcbiAgICBfZmlyc3Rfc3RhcnQocm91dGUpIHtcclxuICAgICAgICB0aGlzLl9zZWdtZW50ID0gcm91dGU7XHJcbiAgICAgICAgY29uc3QgY2IgPSAoYSkgPT4gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyhhKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIgPSBuZXcgKHRoaXMuY29uZmlnLnJvdXRlcikoY2IsIHRoaXMuY29uZmlnLCB0aGlzKTtcclxuICAgICAgICAvLyBzdGFydCBhbmltYXRpb24gZm9yIHRvcC1sZXZlbCBhcHBcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5ICYmIHRoaXMuY29uZmlnLmFuaW1hdGlvbiAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLmFkZENzcyhub2RlLCBcIndlYml4YXBwc3RhcnRcIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLnJlbW92ZUNzcyhub2RlLCBcIndlYml4YXBwc3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwuYWRkQ3NzKG5vZGUsIFwid2ViaXhhcHBcIik7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyb3V0ZSkge1xyXG4gICAgICAgICAgICAvLyBpZiBubyB1cmwgZGVmaW5lZCwgY2hlY2sgcm91dGVyIGZpcnN0XHJcbiAgICAgICAgICAgIGxldCB1cmxTdHJpbmcgPSB0aGlzLiRyb3V0ZXIuZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmICghdXJsU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxTdHJpbmcgPSB0aGlzLmNvbmZpZy5zdGFydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5zZXQodXJsU3RyaW5nLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZSh1cmxTdHJpbmcsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICByb3V0ZS5jdXJyZW50KCkudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlID0gcm91dGUuc3BsaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKHRoaXMuY29uZmlnLnN0YXJ0LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICB9XHJcbiAgICAvLyBlcnJvciBkdXJpbmcgdmlldyByZXNvbHZpbmdcclxuICAgIF9sb2FkRXJyb3IodXJsLCBlcnIpIHtcclxuICAgICAgICB0aGlzLmVycm9yKFwiYXBwOmVycm9yOnJlc29sdmVcIiwgW2VyciwgdXJsXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdGVtcGxhdGU6IFwiIFwiIH07XHJcbiAgICB9XHJcbiAgICBhZGRTdWJWaWV3KG9iaiwgdGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBvYmouJHN1YnZpZXcgIT09IHRydWUgPyBvYmouJHN1YnZpZXcgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBvYmoubmFtZSB8fCAodXJsID8gdGhpcy53ZWJpeC51aWQoKSA6IFwiZGVmYXVsdFwiKTtcclxuICAgICAgICB0YXJnZXQuaWQgPSBvYmouaWQgfHwgXCJzXCIgKyB0aGlzLndlYml4LnVpZCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBjb25maWdbbmFtZV0gPSB7XHJcbiAgICAgICAgICAgIGlkOiB0YXJnZXQuaWQsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgYnJhbmNoOiBvYmouYnJhbmNoLFxyXG4gICAgICAgICAgICBwb3B1cDogb2JqLnBvcHVwXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdmlldy5wb3B1cCA/IG51bGwgOiB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgSGFzaFJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgdGhpcy5fZGV0ZWN0UHJlZml4KCk7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4gdGhpcy5jYih0aGlzLmdldCgpKTtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmUgPSBwYXRoLnNwbGl0KFwiP1wiLCAyKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzW2tleV0gPT09IGNvbXBhcmVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0ga2V5ICsgKGNvbXBhcmUubGVuZ3RoID4gMSA/IFwiP1wiICsgY29tcGFyZVsxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdldCgpICE9PSBwYXRoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB0aGlzLnByZWZpeCArIHRoaXMuc3VmaXggKyBwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLl9nZXRSYXcoKS5yZXBsYWNlKHRoaXMucHJlZml4LCBcIlwiKS5yZXBsYWNlKHRoaXMuc3VmaXgsIFwiXCIpO1xyXG4gICAgICAgIHBhdGggPSBwYXRoICE9PSBcIi9cIiA/IHBhdGggOiBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZSA9IHBhdGguc3BsaXQoXCI/XCIsIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZy5yb3V0ZXNbY29tcGFyZVswXV07XHJcbiAgICAgICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBrZXkgKyAoY29tcGFyZS5sZW5ndGggPiAxID8gXCI/XCIgKyBjb21wYXJlWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcbiAgICBfZGV0ZWN0UHJlZml4KCkge1xyXG4gICAgICAgIC8vIHVzZSBcIiMhXCIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgICAgICBjb25zdCBzdWZpeCA9IHRoaXMuY29uZmlnLnJvdXRlclByZWZpeDtcclxuICAgICAgICB0aGlzLnN1Zml4ID0gXCIjXCIgKyAoKHR5cGVvZiBzdWZpeCA9PT0gXCJ1bmRlZmluZWRcIikgPyBcIiFcIiA6IHN1Zml4KTtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIsIDIpWzBdO1xyXG4gICAgfVxyXG4gICAgX2dldFJhdygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxufVxuXG5sZXQgaXNQYXRjaGVkID0gZmFsc2U7XHJcbmZ1bmN0aW9uIHBhdGNoKHcpIHtcclxuICAgIGlmIChpc1BhdGNoZWQgfHwgIXcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpc1BhdGNoZWQgPSB0cnVlO1xyXG4gICAgLy8gY3VzdG9tIHByb21pc2UgZm9yIElFOFxyXG4gICAgY29uc3Qgd2luID0gd2luZG93O1xyXG4gICAgaWYgKCF3aW4uUHJvbWlzZSkge1xyXG4gICAgICAgIHdpbi5Qcm9taXNlID0gdy5wcm9taXNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmVyc2lvbiA9IHcudmVyc2lvbi5zcGxpdChcIi5cIik7XHJcbiAgICAvLyB3aWxsIGJlIGZpeGVkIGluIHdlYml4IDUuM1xyXG4gICAgaWYgKHZlcnNpb25bMF0gKiAxMCArIHZlcnNpb25bMV0gKiAxIDwgNTMpIHtcclxuICAgICAgICB3LnVpLmZyZWV6ZSA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIC8vIGRpc2FibGVkIGJlY2F1c2Ugd2ViaXggamV0IDUuMCBjYW4ndCBoYW5kbGUgcmVzaXplIG9mIHNjcm9sbHZpZXcgY29ycmVjdGx5XHJcbiAgICAgICAgICAgIC8vIHcudWkuJGZyZWV6ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGhhbmRsZXIoKTtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMudGhlbikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnRoZW4oZnVuY3Rpb24gKHNvbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3LnVpLiRmcmVlemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB3LnVpLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb21lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3LnVpLiRmcmVlemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHcudWkucmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gYWRkaW5nIHZpZXdzIGFzIGNsYXNzZXNcclxuICAgIGNvbnN0IGJhc2VBZGQgPSB3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLmFkZFZpZXc7XHJcbiAgICBjb25zdCBiYXNlUmVtb3ZlID0gdy51aS5iYXNlbGF5b3V0LnByb3RvdHlwZS5yZW1vdmVWaWV3O1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIGFkZFZpZXcodmlldywgaW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBsb2dpYyBvbmx5IGZvciB3aWRnZXRzIGluc2lkZSBvZiBqZXQtdmlld1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgY2FzZSB3aGVuIGFkZFZpZXcgdXNlZCB3aXRoIGFscmVhZHkgaW5pdGlhbGl6ZWQgd2lkZ2V0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS53ZWJpeEpldCAmJiAhdmlldy5xdWVyeVZpZXcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGp2aWV3ID0gdGhpcy4kc2NvcGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0ge307XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0ganZpZXcuYXBwLmNvcHlDb25maWcodmlldywge30sIHN1YnMpO1xyXG4gICAgICAgICAgICAgICAgYmFzZUFkZC5hcHBseSh0aGlzLCBbdmlldywgaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN1YnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBqdmlldy5fcmVuZGVyRnJhbWUoa2V5LCBzdWJzW2tleV0sIG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdmlldy5fc3Vic1trZXldID0gc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZUFkZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVWaWV3KCkge1xyXG4gICAgICAgICAgICBiYXNlUmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS53ZWJpeEpldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IHRoaXMuJHNjb3BlLl9zdWJzO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWxsIHN1Yi12aWV3cywgZGVzdHJveSBhbmQgY2xlYW4gdGhlIHJlbW92ZWQgb25lXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdWJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9IHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXcuJCQodGVzdC5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVzdC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdy5leHRlbmQody51aS5sYXlvdXQucHJvdG90eXBlLCBjb25maWcsIHRydWUpO1xyXG4gICAgdy5leHRlbmQody51aS5iYXNlbGF5b3V0LnByb3RvdHlwZSwgY29uZmlnLCB0cnVlKTtcclxuICAgIC8vIHdyYXBwZXIgZm9yIHVzaW5nIEpldCBBcHBzIGFzIHZpZXdzXHJcbiAgICB3LnByb3RvVUkoe1xyXG4gICAgICAgIG5hbWU6IFwiamV0YXBwXCIsXHJcbiAgICAgICAgJGluaXQoY2ZnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcCA9IG5ldyB0aGlzLmFwcChjZmcpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHcudWlkKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2ZnLmJvZHkgPSB7IGlkIH07XHJcbiAgICAgICAgICAgIHRoaXMuJHJlYWR5LnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwLnJlbmRlcih7IGlkIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuJGFwcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbiA9IHRoaXMuJGFwcFtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW4gPT09IFwiZnVuY3Rpb25cIiAmJiAhdGhpc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gb3JpZ2luLmJpbmQodGhpcy4kYXBwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIHcudWkucHJveHkpO1xyXG59XG5cbmNsYXNzIEpldEFwcCBleHRlbmRzIEpldEFwcEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnLnJvdXRlciA9IGNvbmZpZy5yb3V0ZXIgfHwgSGFzaFJvdXRlcjtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHBhdGNoKHRoaXMud2ViaXgpO1xyXG4gICAgfVxyXG4gICAgX2xvYWRWaWV3RHluYW1pYyh1cmwpIHtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwuL2csIFwiL1wiKTtcclxuICAgICAgICByZXR1cm4gcmVxdWlyZShcImpldC12aWV3cy9cIiArIHVybCk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgU3RvcmVSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZywgYXBwKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gY29uZmlnLnN0b3JhZ2UgfHwgYXBwLndlYml4LnN0b3JhZ2Uuc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLm5hbWUgPSAoY29uZmlnLnN0b3JlTmFtZSB8fCBjb25maWcuaWQgKyBcIjpyb3V0ZVwiKTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnB1dCh0aGlzLm5hbWUsIHBhdGgpO1xyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMubmFtZSk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgVXJsUm91dGVyIGV4dGVuZHMgSGFzaFJvdXRlciB7XHJcbiAgICBfZGV0ZWN0UHJlZml4KCkge1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gXCJcIjtcclxuICAgICAgICB0aGlzLnN1Zml4ID0gdGhpcy5jb25maWcucm91dGVyUHJlZml4IHx8IFwiXCI7XHJcbiAgICB9XHJcbiAgICBfZ2V0UmF3KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBFbXB0eVJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgXyRjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gVW5sb2FkR3VhcmQoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIHZpZXcub24oYXBwLCBgYXBwOmd1YXJkYCwgZnVuY3Rpb24gKF8kdXJsLCBwb2ludCwgcHJvbWlzZSkge1xyXG4gICAgICAgIGlmIChwb2ludCA9PT0gdmlldyB8fCBwb2ludC5jb250YWlucyh2aWV3KSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBjb25maWcoKTtcclxuICAgICAgICAgICAgaWYgKHJlcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UuY29uZmlybSA9IFByb21pc2UucmVqZWN0KHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLmNvbmZpcm0gPSBwcm9taXNlLmNvbmZpcm0udGhlbigoKSA9PiByZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuLy8gICAgIChjKSAyMDEyLTIwMTggQWlyYm5iLCBJbmMuXG5cbi8vIHZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbmZ1bmN0aW9uIGhhcyhzdG9yZSwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3RvcmUsIGtleSk7XG59XG4vLyB2YXIgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJyk7XG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgaGFuZGxlciwgY29udGV4dCkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcyhvYmosIGtleSkpIHtcbiAgICAgIGhhbmRsZXIuY2FsbCgoY29udGV4dCB8fCBvYmopLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxufVxuLy8gdmFyIHRyaW0gPSByZXF1aXJlKCdzdHJpbmcucHJvdG90eXBlLnRyaW0nKTtcbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcbn1cbi8vIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIG1lc3NhZ2U7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG5cbiAgdHJ5IHsgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOyB9IGNhdGNoICh4KSB7fVxufVxuXG52YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbnZhciBzcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQ7XG5cbi8vICMjIyMgUGx1cmFsaXphdGlvbiBtZXRob2RzXG4vLyBUaGUgc3RyaW5nIHRoYXQgc2VwYXJhdGVzIHRoZSBkaWZmZXJlbnQgcGhyYXNlIHBvc3NpYmlsaXRpZXMuXG52YXIgZGVsaW1pdGVyID0gJ3x8fHwnO1xuXG52YXIgcnVzc2lhblBsdXJhbEdyb3VwcyA9IGZ1bmN0aW9uIChuKSB7XG4gIHZhciBlbmQgPSBuICUgMTA7XG4gIGlmIChuICE9PSAxMSAmJiBlbmQgPT09IDEpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAoMiA8PSBlbmQgJiYgZW5kIDw9IDQgJiYgIShuID49IDEyICYmIG4gPD0gMTQpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDI7XG59O1xuXG4vLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCBwbHVyYWwgbG9naWMuXG52YXIgcGx1cmFsVHlwZXMgPSB7XG4gIGFyYWJpYzogZnVuY3Rpb24gKG4pIHtcbiAgICAvLyBodHRwOi8vd3d3LmFyYWJleWVzLm9yZy9QbHVyYWxfRm9ybXNcbiAgICBpZiAobiA8IDMpIHsgcmV0dXJuIG47IH1cbiAgICB2YXIgbGFzdFR3byA9IG4gJSAxMDA7XG4gICAgaWYgKGxhc3RUd28gPj0gMyAmJiBsYXN0VHdvIDw9IDEwKSByZXR1cm4gMztcbiAgICByZXR1cm4gbGFzdFR3byA+PSAxMSA/IDQgOiA1O1xuICB9LFxuICBib3NuaWFuX3NlcmJpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGNoaW5lc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gIGNyb2F0aWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBmcmVuY2g6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuID4gMSA/IDEgOiAwOyB9LFxuICBnZXJtYW46IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuICE9PSAxID8gMSA6IDA7IH0sXG4gIHJ1c3NpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGxpdGh1YW5pYW46IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gJSAxMCA9PT0gMSAmJiBuICUgMTAwICE9PSAxMSkgeyByZXR1cm4gMDsgfVxuICAgIHJldHVybiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gOSAmJiAobiAlIDEwMCA8IDExIHx8IG4gJSAxMDAgPiAxOSkgPyAxIDogMjtcbiAgfSxcbiAgY3plY2g6IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gPT09IDEpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gKG4gPj0gMiAmJiBuIDw9IDQpID8gMSA6IDI7XG4gIH0sXG4gIHBvbGlzaDogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiA9PT0gMSkgeyByZXR1cm4gMDsgfVxuICAgIHZhciBlbmQgPSBuICUgMTA7XG4gICAgcmV0dXJuIDIgPD0gZW5kICYmIGVuZCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMjtcbiAgfSxcbiAgaWNlbGFuZGljOiBmdW5jdGlvbiAobikgeyByZXR1cm4gKG4gJSAxMCAhPT0gMSB8fCBuICUgMTAwID09PSAxMSkgPyAxIDogMDsgfSxcbiAgc2xvdmVuaWFuOiBmdW5jdGlvbiAobikge1xuICAgIHZhciBsYXN0VHdvID0gbiAlIDEwMDtcbiAgICBpZiAobGFzdFR3byA9PT0gMSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChsYXN0VHdvID09PSAyKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGxhc3RUd28gPT09IDMgfHwgbGFzdFR3byA9PT0gNCkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIHJldHVybiAzO1xuICB9XG59O1xuXG5cbi8vIE1hcHBpbmcgZnJvbSBwbHVyYWxpemF0aW9uIGdyb3VwIHRvIGluZGl2aWR1YWwgbGFuZ3VhZ2UgY29kZXMvbG9jYWxlcy5cbi8vIFdpbGwgbG9vayB1cCBiYXNlZCBvbiBleGFjdCBtYXRjaCwgaWYgbm90IGZvdW5kIGFuZCBpdCdzIGEgbG9jYWxlIHdpbGwgcGFyc2UgdGhlIGxvY2FsZVxuLy8gZm9yIGxhbmd1YWdlIGNvZGUsIGFuZCBpZiB0aGF0IGRvZXMgbm90IGV4aXN0IHdpbGwgZGVmYXVsdCB0byAnZW4nXG52YXIgcGx1cmFsVHlwZVRvTGFuZ3VhZ2VzID0ge1xuICBhcmFiaWM6IFsnYXInXSxcbiAgYm9zbmlhbl9zZXJiaWFuOiBbJ2JzLUxhdG4tQkEnLCAnYnMtQ3lybC1CQScsICdzcmwtUlMnLCAnc3ItUlMnXSxcbiAgY2hpbmVzZTogWydpZCcsICdpZC1JRCcsICdqYScsICdrbycsICdrby1LUicsICdsbycsICdtcycsICd0aCcsICd0aC1USCcsICd6aCddLFxuICBjcm9hdGlhbjogWydocicsICdoci1IUiddLFxuICBnZXJtYW46IFsnZmEnLCAnZGEnLCAnZGUnLCAnZW4nLCAnZXMnLCAnZmknLCAnZWwnLCAnaGUnLCAnaGktSU4nLCAnaHUnLCAnaHUtSFUnLCAnaXQnLCAnbmwnLCAnbm8nLCAncHQnLCAnc3YnLCAndHInXSxcbiAgZnJlbmNoOiBbJ2ZyJywgJ3RsJywgJ3B0LWJyJ10sXG4gIHJ1c3NpYW46IFsncnUnLCAncnUtUlUnXSxcbiAgbGl0aHVhbmlhbjogWydsdCddLFxuICBjemVjaDogWydjcycsICdjcy1DWicsICdzayddLFxuICBwb2xpc2g6IFsncGwnXSxcbiAgaWNlbGFuZGljOiBbJ2lzJ10sXG4gIHNsb3ZlbmlhbjogWydzbC1TTCddXG59O1xuXG5mdW5jdGlvbiBsYW5nVG9UeXBlTWFwKG1hcHBpbmcpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3JFYWNoKG1hcHBpbmcsIGZ1bmN0aW9uIChsYW5ncywgdHlwZSkge1xuICAgIGZvckVhY2gobGFuZ3MsIGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICByZXRbbGFuZ10gPSB0eXBlO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVHlwZU5hbWUobG9jYWxlKSB7XG4gIHZhciBsYW5nVG9QbHVyYWxUeXBlID0gbGFuZ1RvVHlwZU1hcChwbHVyYWxUeXBlVG9MYW5ndWFnZXMpO1xuICByZXR1cm4gbGFuZ1RvUGx1cmFsVHlwZVtsb2NhbGVdXG4gICAgfHwgbGFuZ1RvUGx1cmFsVHlwZVtzcGxpdC5jYWxsKGxvY2FsZSwgLy0vLCAxKVswXV1cbiAgICB8fCBsYW5nVG9QbHVyYWxUeXBlLmVuO1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUeXBlSW5kZXgobG9jYWxlLCBjb3VudCkge1xuICByZXR1cm4gcGx1cmFsVHlwZXNbcGx1cmFsVHlwZU5hbWUobG9jYWxlKV0oY291bnQpO1xufVxuXG5mdW5jdGlvbiBlc2NhcGUodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFRva2VuUmVnZXgob3B0cykge1xuICB2YXIgcHJlZml4ID0gKG9wdHMgJiYgb3B0cy5wcmVmaXgpIHx8ICcleyc7XG4gIHZhciBzdWZmaXggPSAob3B0cyAmJiBvcHRzLnN1ZmZpeCkgfHwgJ30nO1xuXG4gIGlmIChwcmVmaXggPT09IGRlbGltaXRlciB8fCBzdWZmaXggPT09IGRlbGltaXRlcikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcIicgKyBkZWxpbWl0ZXIgKyAnXCIgdG9rZW4gaXMgcmVzZXJ2ZWQgZm9yIHBsdXJhbGl6YXRpb24nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKGVzY2FwZShwcmVmaXgpICsgJyguKj8pJyArIGVzY2FwZShzdWZmaXgpLCAnZycpO1xufVxuXG52YXIgZG9sbGFyUmVnZXggPSAvXFwkL2c7XG52YXIgZG9sbGFyQmlsbHNZYWxsID0gJyQkJztcbnZhciBkZWZhdWx0VG9rZW5SZWdleCA9IC8lXFx7KC4qPylcXH0vZztcblxuLy8gIyMjIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSlcbi8vXG4vLyBUYWtlcyBhIHBocmFzZSBzdHJpbmcgYW5kIHRyYW5zZm9ybXMgaXQgYnkgY2hvb3NpbmcgdGhlIGNvcnJlY3Rcbi8vIHBsdXJhbCBmb3JtIGFuZCBpbnRlcnBvbGF0aW5nIGl0LlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJ0hlbGxvLCAle25hbWV9IScsIHtuYW1lOiAnU3Bpa2UnfSk7XG4vLyAgICAgLy8gXCJIZWxsbywgU3Bpa2UhXCJcbi8vXG4vLyBUaGUgY29ycmVjdCBwbHVyYWwgZm9ybSBpcyBzZWxlY3RlZCBpZiBzdWJzdGl0dXRpb25zLnNtYXJ0X2NvdW50XG4vLyBpcyBzZXQuIFlvdSBjYW4gcGFzcyBpbiBhIG51bWJlciBpbnN0ZWFkIG9mIGFuIE9iamVjdCBhcyBgc3Vic3RpdHV0aW9uc2Bcbi8vIGFzIGEgc2hvcnRjdXQgZm9yIGBzbWFydF9jb3VudGAuXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIHtzbWFydF9jb3VudDogMX0sICdlbicpO1xuLy8gICAgIC8vIFwiMSBuZXcgbWVzc2FnZVwiXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIHtzbWFydF9jb3VudDogMn0sICdlbicpO1xuLy8gICAgIC8vIFwiMiBuZXcgbWVzc2FnZXNcIlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCA1LCAnZW4nKTtcbi8vICAgICAvLyBcIjUgbmV3IG1lc3NhZ2VzXCJcbi8vXG4vLyBZb3Ugc2hvdWxkIHBhc3MgaW4gYSB0aGlyZCBhcmd1bWVudCwgdGhlIGxvY2FsZSwgdG8gc3BlY2lmeSB0aGUgY29ycmVjdCBwbHVyYWwgdHlwZS5cbi8vIEl0IGRlZmF1bHRzIHRvIGAnZW4nYCB3aXRoIDIgcGx1cmFsIGZvcm1zLlxuZnVuY3Rpb24gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlLCB0b2tlblJlZ2V4KSB7XG4gIGlmICh0eXBlb2YgcGhyYXNlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BvbHlnbG90LnRyYW5zZm9ybVBocmFzZSBleHBlY3RzIGFyZ3VtZW50ICMxIHRvIGJlIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKHN1YnN0aXR1dGlvbnMgPT0gbnVsbCkge1xuICAgIHJldHVybiBwaHJhc2U7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gcGhyYXNlO1xuICB2YXIgaW50ZXJwb2xhdGlvblJlZ2V4ID0gdG9rZW5SZWdleCB8fCBkZWZhdWx0VG9rZW5SZWdleDtcblxuICAvLyBhbGxvdyBudW1iZXIgYXMgYSBwbHVyYWxpemF0aW9uIHNob3J0Y3V0XG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHN1YnN0aXR1dGlvbnMgPT09ICdudW1iZXInID8geyBzbWFydF9jb3VudDogc3Vic3RpdHV0aW9ucyB9IDogc3Vic3RpdHV0aW9ucztcblxuICAvLyBTZWxlY3QgcGx1cmFsIGZvcm06IGJhc2VkIG9uIGEgcGhyYXNlIHRleHQgdGhhdCBjb250YWlucyBgbmBcbiAgLy8gcGx1cmFsIGZvcm1zIHNlcGFyYXRlZCBieSBgZGVsaW1pdGVyYCwgYSBgbG9jYWxlYCwgYW5kIGEgYHN1YnN0aXR1dGlvbnMuc21hcnRfY291bnRgLFxuICAvLyBjaG9vc2UgdGhlIGNvcnJlY3QgcGx1cmFsIGZvcm0uIFRoaXMgaXMgb25seSBkb25lIGlmIGBjb3VudGAgaXMgc2V0LlxuICBpZiAob3B0aW9ucy5zbWFydF9jb3VudCAhPSBudWxsICYmIHJlc3VsdCkge1xuICAgIHZhciB0ZXh0cyA9IHNwbGl0LmNhbGwocmVzdWx0LCBkZWxpbWl0ZXIpO1xuICAgIHJlc3VsdCA9IHRyaW0odGV4dHNbcGx1cmFsVHlwZUluZGV4KGxvY2FsZSB8fCAnZW4nLCBvcHRpb25zLnNtYXJ0X2NvdW50KV0gfHwgdGV4dHNbMF0pO1xuICB9XG5cbiAgLy8gSW50ZXJwb2xhdGU6IENyZWF0ZXMgYSBgUmVnRXhwYCBvYmplY3QgZm9yIGVhY2ggaW50ZXJwb2xhdGlvbiBwbGFjZWhvbGRlci5cbiAgcmVzdWx0ID0gcmVwbGFjZS5jYWxsKHJlc3VsdCwgaW50ZXJwb2xhdGlvblJlZ2V4LCBmdW5jdGlvbiAoZXhwcmVzc2lvbiwgYXJndW1lbnQpIHtcbiAgICBpZiAoIWhhcyhvcHRpb25zLCBhcmd1bWVudCkgfHwgb3B0aW9uc1thcmd1bWVudF0gPT0gbnVsbCkgeyByZXR1cm4gZXhwcmVzc2lvbjsgfVxuICAgIC8vIEVuc3VyZSByZXBsYWNlbWVudCB2YWx1ZSBpcyBlc2NhcGVkIHRvIHByZXZlbnQgc3BlY2lhbCAkLXByZWZpeGVkIHJlZ2V4IHJlcGxhY2UgdG9rZW5zLlxuICAgIHJldHVybiByZXBsYWNlLmNhbGwob3B0aW9uc1thcmd1bWVudF0sIGRvbGxhclJlZ2V4LCBkb2xsYXJCaWxsc1lhbGwpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAjIyMgUG9seWdsb3QgY2xhc3MgY29uc3RydWN0b3JcbmZ1bmN0aW9uIFBvbHlnbG90KG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnBocmFzZXMgPSB7fTtcbiAgdGhpcy5leHRlbmQob3B0cy5waHJhc2VzIHx8IHt9KTtcbiAgdGhpcy5jdXJyZW50TG9jYWxlID0gb3B0cy5sb2NhbGUgfHwgJ2VuJztcbiAgdmFyIGFsbG93TWlzc2luZyA9IG9wdHMuYWxsb3dNaXNzaW5nID8gdHJhbnNmb3JtUGhyYXNlIDogbnVsbDtcbiAgdGhpcy5vbk1pc3NpbmdLZXkgPSB0eXBlb2Ygb3B0cy5vbk1pc3NpbmdLZXkgPT09ICdmdW5jdGlvbicgPyBvcHRzLm9uTWlzc2luZ0tleSA6IGFsbG93TWlzc2luZztcbiAgdGhpcy53YXJuID0gb3B0cy53YXJuIHx8IHdhcm47XG4gIHRoaXMudG9rZW5SZWdleCA9IGNvbnN0cnVjdFRva2VuUmVnZXgob3B0cy5pbnRlcnBvbGF0aW9uKTtcbn1cblxuLy8gIyMjIHBvbHlnbG90LmxvY2FsZShbbG9jYWxlXSlcbi8vXG4vLyBHZXQgb3Igc2V0IGxvY2FsZS4gSW50ZXJuYWxseSwgUG9seWdsb3Qgb25seSB1c2VzIGxvY2FsZSBmb3IgcGx1cmFsaXphdGlvbi5cblBvbHlnbG90LnByb3RvdHlwZS5sb2NhbGUgPSBmdW5jdGlvbiAobmV3TG9jYWxlKSB7XG4gIGlmIChuZXdMb2NhbGUpIHRoaXMuY3VycmVudExvY2FsZSA9IG5ld0xvY2FsZTtcbiAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5leHRlbmQocGhyYXNlcylcbi8vXG4vLyBVc2UgYGV4dGVuZGAgdG8gdGVsbCBQb2x5Z2xvdCBob3cgdG8gdHJhbnNsYXRlIGEgZ2l2ZW4ga2V5LlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSk7XG4vL1xuLy8gVGhlIGtleSBjYW4gYmUgYW55IHN0cmluZy4gIEZlZWwgZnJlZSB0byBjYWxsIGBleHRlbmRgIG11bHRpcGxlIHRpbWVzO1xuLy8gaXQgd2lsbCBvdmVycmlkZSBhbnkgcGhyYXNlcyB3aXRoIHRoZSBzYW1lIGtleSwgYnV0IGxlYXZlIGV4aXN0aW5nIHBocmFzZXNcbi8vIHVudG91Y2hlZC5cbi8vXG4vLyBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHBhc3MgbmVzdGVkIHBocmFzZSBvYmplY3RzLCB3aGljaCBnZXQgZmxhdHRlbmVkXG4vLyBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZSBuZXN0ZWQga2V5cyBjb25jYXRlbmF0ZWQgdXNpbmcgZG90IG5vdGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJuYXZcIjoge1xuLy8gICAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIixcbi8vICAgICAgICAgXCJzaWRlYmFyXCI6IHtcbi8vICAgICAgICAgICBcIndlbGNvbWVcIjogXCJXZWxjb21lXCJcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbi8vICAgICAvLyB7XG4vLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbi8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfScsXG4vLyAgICAgLy8gICAnbmF2LnNpZGViYXIud2VsY29tZSc6ICdXZWxjb21lJ1xuLy8gICAgIC8vIH1cbi8vXG4vLyBgZXh0ZW5kYCBhY2NlcHRzIGFuIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCwgYHByZWZpeGAsIHdoaWNoIGNhbiBiZSB1c2VkXG4vLyB0byBwcmVmaXggZXZlcnkga2V5IGluIHRoZSBwaHJhc2VzIG9iamVjdCB3aXRoIHNvbWUgc3RyaW5nLCB1c2luZyBkb3Rcbi8vIG5vdGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSwgXCJuYXZcIik7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuLy8gICAgIC8vIHtcbi8vICAgICAvLyAgICduYXYuaGVsbG8nOiAnSGVsbG8nLFxuLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9J1xuLy8gICAgIC8vIH1cbi8vXG4vLyBUaGlzIGZlYXR1cmUgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIHN1cHBvcnQgbmVzdGVkIHBocmFzZSBvYmplY3RzLlxuUG9seWdsb3QucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIChtb3JlUGhyYXNlcywgcHJlZml4KSB7XG4gIGZvckVhY2gobW9yZVBocmFzZXMsIGZ1bmN0aW9uIChwaHJhc2UsIGtleSkge1xuICAgIHZhciBwcmVmaXhlZEtleSA9IHByZWZpeCA/IHByZWZpeCArICcuJyArIGtleSA6IGtleTtcbiAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuZXh0ZW5kKHBocmFzZSwgcHJlZml4ZWRLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBocmFzZXNbcHJlZml4ZWRLZXldID0gcGhyYXNlO1xuICAgIH1cbiAgfSwgdGhpcyk7XG59O1xuXG4vLyAjIyMgcG9seWdsb3QudW5zZXQocGhyYXNlcylcbi8vIFVzZSBgdW5zZXRgIHRvIHNlbGVjdGl2ZWx5IHJlbW92ZSBrZXlzIGZyb20gYSBwb2x5Z2xvdCBpbnN0YW5jZS5cbi8vXG4vLyAgICAgcG9seWdsb3QudW5zZXQoXCJzb21lX2tleVwiKTtcbi8vICAgICBwb2x5Z2xvdC51bnNldCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9KTtcbi8vXG4vLyBUaGUgdW5zZXQgbWV0aG9kIGNhbiB0YWtlIGVpdGhlciBhIHN0cmluZyAoZm9yIHRoZSBrZXkpLCBvciBhbiBvYmplY3QgaGFzaCB3aXRoXG4vLyB0aGUga2V5cyB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIHVuc2V0LlxuUG9seWdsb3QucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24gKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBtb3JlUGhyYXNlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBkZWxldGUgdGhpcy5waHJhc2VzW21vcmVQaHJhc2VzXTtcbiAgfSBlbHNlIHtcbiAgICBmb3JFYWNoKG1vcmVQaHJhc2VzLCBmdW5jdGlvbiAocGhyYXNlLCBrZXkpIHtcbiAgICAgIHZhciBwcmVmaXhlZEtleSA9IHByZWZpeCA/IHByZWZpeCArICcuJyArIGtleSA6IGtleTtcbiAgICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLnVuc2V0KHBocmFzZSwgcHJlZml4ZWRLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucGhyYXNlc1twcmVmaXhlZEtleV07XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5jbGVhcigpXG4vL1xuLy8gQ2xlYXJzIGFsbCBwaHJhc2VzLiBVc2VmdWwgZm9yIHNwZWNpYWwgY2FzZXMsIHN1Y2ggYXMgZnJlZWluZ1xuLy8gdXAgbWVtb3J5IGlmIHlvdSBoYXZlIGxvdHMgb2YgcGhyYXNlcyBidXQgbm8gbG9uZ2VyIG5lZWQgdG9cbi8vIHBlcmZvcm0gYW55IHRyYW5zbGF0aW9uLiBBbHNvIHVzZWQgaW50ZXJuYWxseSBieSBgcmVwbGFjZWAuXG5Qb2x5Z2xvdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGhyYXNlcyA9IHt9O1xufTtcblxuLy8gIyMjIHBvbHlnbG90LnJlcGxhY2UocGhyYXNlcylcbi8vXG4vLyBDb21wbGV0ZWx5IHJlcGxhY2UgdGhlIGV4aXN0aW5nIHBocmFzZXMgd2l0aCBhIG5ldyBzZXQgb2YgcGhyYXNlcy5cbi8vIE5vcm1hbGx5LCBqdXN0IHVzZSBgZXh0ZW5kYCB0byBhZGQgbW9yZSBwaHJhc2VzLCBidXQgdW5kZXIgY2VydGFpblxuLy8gY2lyY3Vtc3RhbmNlcywgeW91IG1heSB3YW50IHRvIG1ha2Ugc3VyZSBubyBvbGQgcGhyYXNlcyBhcmUgbHlpbmcgYXJvdW5kLlxuUG9seWdsb3QucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAobmV3UGhyYXNlcykge1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMuZXh0ZW5kKG5ld1BocmFzZXMpO1xufTtcblxuXG4vLyAjIyMgcG9seWdsb3QudChrZXksIG9wdGlvbnMpXG4vL1xuLy8gVGhlIG1vc3QtdXNlZCBtZXRob2QuIFByb3ZpZGUgYSBrZXksIGFuZCBgdGAgd2lsbCByZXR1cm4gdGhlXG4vLyBwaHJhc2UuXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb1wiKTtcbi8vICAgICA9PiBcIkhlbGxvXCJcbi8vXG4vLyBUaGUgcGhyYXNlIHZhbHVlIGlzIHByb3ZpZGVkIGZpcnN0IGJ5IGEgY2FsbCB0byBgcG9seWdsb3QuZXh0ZW5kKClgIG9yXG4vLyBgcG9seWdsb3QucmVwbGFjZSgpYC5cbi8vXG4vLyBQYXNzIGluIGFuIG9iamVjdCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIHBlcmZvcm0gaW50ZXJwb2xhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImhlbGxvX25hbWVcIiwge25hbWU6IFwiU3Bpa2VcIn0pO1xuLy8gICAgID0+IFwiSGVsbG8sIFNwaWtlXCJcbi8vXG4vLyBJZiB5b3UgbGlrZSwgeW91IGNhbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZSBpbiBjYXNlIHRoZSBwaHJhc2UgaXMgbWlzc2luZy5cbi8vIFVzZSB0aGUgc3BlY2lhbCBvcHRpb24ga2V5IFwiX1wiIHRvIHNwZWNpZnkgYSBkZWZhdWx0LlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaV9saWtlX3RvX3dyaXRlX2luX2xhbmd1YWdlXCIsIHtcbi8vICAgICAgIF86IFwiSSBsaWtlIHRvIHdyaXRlIGluICV7bGFuZ3VhZ2V9LlwiLFxuLy8gICAgICAgbGFuZ3VhZ2U6IFwiSmF2YVNjcmlwdFwiXG4vLyAgICAgfSk7XG4vLyAgICAgPT4gXCJJIGxpa2UgdG8gd3JpdGUgaW4gSmF2YVNjcmlwdC5cIlxuLy9cblBvbHlnbG90LnByb3RvdHlwZS50ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICB2YXIgcGhyYXNlLCByZXN1bHQ7XG4gIHZhciBvcHRzID0gb3B0aW9ucyA9PSBudWxsID8ge30gOiBvcHRpb25zO1xuICBpZiAodHlwZW9mIHRoaXMucGhyYXNlc1trZXldID09PSAnc3RyaW5nJykge1xuICAgIHBocmFzZSA9IHRoaXMucGhyYXNlc1trZXldO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzLl8gPT09ICdzdHJpbmcnKSB7XG4gICAgcGhyYXNlID0gb3B0cy5fO1xuICB9IGVsc2UgaWYgKHRoaXMub25NaXNzaW5nS2V5KSB7XG4gICAgdmFyIG9uTWlzc2luZ0tleSA9IHRoaXMub25NaXNzaW5nS2V5O1xuICAgIHJlc3VsdCA9IG9uTWlzc2luZ0tleShrZXksIG9wdHMsIHRoaXMuY3VycmVudExvY2FsZSwgdGhpcy50b2tlblJlZ2V4KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhcm4oJ01pc3NpbmcgdHJhbnNsYXRpb24gZm9yIGtleTogXCInICsga2V5ICsgJ1wiJyk7XG4gICAgcmVzdWx0ID0ga2V5O1xuICB9XG4gIGlmICh0eXBlb2YgcGhyYXNlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIG9wdHMsIHRoaXMuY3VycmVudExvY2FsZSwgdGhpcy50b2tlblJlZ2V4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLyAjIyMgcG9seWdsb3QuaGFzKGtleSlcbi8vXG4vLyBDaGVjayBpZiBwb2x5Z2xvdCBoYXMgYSB0cmFuc2xhdGlvbiBmb3IgZ2l2ZW4ga2V5XG5Qb2x5Z2xvdC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gaGFzKHRoaXMucGhyYXNlcywga2V5KTtcbn07XG5cbi8vIGV4cG9ydCB0cmFuc2Zvcm1QaHJhc2VcblBvbHlnbG90LnRyYW5zZm9ybVBocmFzZSA9IGZ1bmN0aW9uIHRyYW5zZm9ybShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSkge1xuICByZXR1cm4gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKTtcbn07XG5cbnZhciB3ZWJpeFBvbHlnbG90ID0gUG9seWdsb3Q7XG5cbmZ1bmN0aW9uIExvY2FsZShhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcclxuICAgIGxldCBsYW5nID0gc3RvcmFnZSA/IChzdG9yYWdlLmdldChcImxhbmdcIikgfHwgXCJlblwiKSA6IChjb25maWcubGFuZyB8fCBcImVuXCIpO1xyXG4gICAgZnVuY3Rpb24gc2V0TGFuZ0RhdGEobmFtZSwgZGF0YSwgc2lsZW50KSB7XHJcbiAgICAgICAgaWYgKGRhdGEuX19lc01vZHVsZSkge1xyXG4gICAgICAgICAgICBkYXRhID0gZGF0YS5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwY29uZmlnID0geyBwaHJhc2VzOiBkYXRhIH07XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wb2x5Z2xvdCkge1xyXG4gICAgICAgICAgICBhcHAud2ViaXguZXh0ZW5kKHBjb25maWcsIGNvbmZpZy5wb2x5Z2xvdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbHkgPSBzZXJ2aWNlLnBvbHlnbG90ID0gbmV3IHdlYml4UG9seWdsb3QocGNvbmZpZyk7XHJcbiAgICAgICAgcG9seS5sb2NhbGUobmFtZSk7XHJcbiAgICAgICAgc2VydmljZS5fID0gYXBwLndlYml4LmJpbmQocG9seS50LCBwb2x5KTtcclxuICAgICAgICBsYW5nID0gbmFtZTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzdG9yYWdlLnB1dChcImxhbmdcIiwgbGFuZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcud2ViaXgpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jTmFtZSA9IGNvbmZpZy53ZWJpeFtuYW1lXTtcclxuICAgICAgICAgICAgaWYgKGxvY05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGFwcC53ZWJpeC5pMThuLnNldExvY2FsZShsb2NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXBwLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TGFuZygpIHsgcmV0dXJuIGxhbmc7IH1cclxuICAgIGZ1bmN0aW9uIHNldExhbmcobmFtZSwgc2lsZW50KSB7XHJcbiAgICAgICAgLy8gaWdub3JlIHNldExhbmcgaWYgbG9hZGluZyBieSBwYXRoIGlzIGRpc2FibGVkXHJcbiAgICAgICAgaWYgKGNvbmZpZy5wYXRoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhdGggPSAoY29uZmlnLnBhdGggPyBjb25maWcucGF0aCArIFwiL1wiIDogXCJcIikgKyBuYW1lO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKFwiamV0LWxvY2FsZXMvXCIgKyBwYXRoKTtcclxuICAgICAgICBzZXRMYW5nRGF0YShuYW1lLCBkYXRhLCBzaWxlbnQpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRMYW5nLCBzZXRMYW5nLCBzZXRMYW5nRGF0YSwgXzogbnVsbCwgcG9seWdsb3Q6IG51bGxcclxuICAgIH07XHJcbiAgICBhcHAuc2V0U2VydmljZShcImxvY2FsZVwiLCBzZXJ2aWNlKTtcclxuICAgIHNldExhbmcobGFuZywgdHJ1ZSk7XHJcbn1cblxuZnVuY3Rpb24gc2hvdyh2aWV3LCBjb25maWcsIHZhbHVlKSB7XHJcbiAgICBpZiAoY29uZmlnLnVybHMpIHtcclxuICAgICAgICB2YWx1ZSA9IGNvbmZpZy51cmxzW3ZhbHVlXSB8fCB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNvbmZpZy5wYXJhbSkge1xyXG4gICAgICAgIHZhbHVlID0geyBbY29uZmlnLnBhcmFtXTogdmFsdWUgfTtcclxuICAgIH1cclxuICAgIHZpZXcuc2hvdyh2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gTWVudShhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uc3QgZnJhbWUgPSB2aWV3LmdldFN1YlZpZXdJbmZvKCkucGFyZW50O1xyXG4gICAgY29uc3QgdWkgPSB2aWV3LiQkKGNvbmZpZy5pZCB8fCBjb25maWcpO1xyXG4gICAgbGV0IHNpbGVudCA9IGZhbHNlO1xyXG4gICAgdWkuYXR0YWNoRXZlbnQoXCJvbmNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgc2hvdyhmcmFtZSwgY29uZmlnLCB0aGlzLmdldFZhbHVlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdWkuYXR0YWNoRXZlbnQoXCJvbmFmdGVyc2VsZWN0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodWkuc2V0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLmdldFNlbGVjdGVkSWQpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gdWkuZ2V0U2VsZWN0ZWRJZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNob3coZnJhbWUsIGNvbmZpZywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmlldy5vbihhcHAsIGBhcHA6cm91dGVgLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGlmIChjb25maWcucGFyYW0pIHtcclxuICAgICAgICAgICAgbmFtZSA9IHZpZXcuZ2V0UGFyYW0oY29uZmlnLnBhcmFtLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSBmcmFtZS5nZXRVcmwoKVsxXTtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBzZWdtZW50LnBhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgc2lsZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHVpLnNldFZhbHVlICYmIHVpLmdldFZhbHVlKCkgIT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNldFZhbHVlKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLnNlbGVjdCAmJiB1aS5leGlzdHMobmFtZSkgJiYgdWkuZ2V0U2VsZWN0ZWRJZCgpICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZWxlY3QobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2lsZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuY29uc3QgYmFzZWljb25zID0ge1xyXG4gICAgZ29vZDogXCJjaGVja1wiLFxyXG4gICAgZXJyb3I6IFwid2FybmluZ1wiLFxyXG4gICAgc2F2aW5nOiBcInJlZnJlc2ggZmEtc3BpblwiXHJcbn07XHJcbmNvbnN0IGJhc2V0ZXh0ID0ge1xyXG4gICAgZ29vZDogXCJPa1wiLFxyXG4gICAgZXJyb3I6IFwiRXJyb3JcIixcclxuICAgIHNhdmluZzogXCJDb25uZWN0aW5nLi4uXCJcclxufTtcclxuZnVuY3Rpb24gU3RhdHVzKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gXCJnb29kXCI7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgbGV0IGlzZXJyb3IgPSBmYWxzZTtcclxuICAgIGxldCBleHBpcmVEZWxheSA9IGNvbmZpZy5leHBpcmU7XHJcbiAgICBpZiAoIWV4cGlyZURlbGF5ICYmIGV4cGlyZURlbGF5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGV4cGlyZURlbGF5ID0gMjAwMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHRleHRzID0gY29uZmlnLnRleHRzIHx8IGJhc2V0ZXh0O1xyXG4gICAgY29uc3QgaWNvbnMgPSBjb25maWcuaWNvbnMgfHwgYmFzZWljb25zO1xyXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBjb25maWcgPSB7IHRhcmdldDogY29uZmlnIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoKGNvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBhcmVhID0gdmlldy4kJChjb25maWcudGFyZ2V0KTtcclxuICAgICAgICBpZiAoYXJlYSkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBcIjxkaXYgY2xhc3M9J3N0YXR1c19cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzICtcclxuICAgICAgICAgICAgICAgICAgICBcIic+PHNwYW4gY2xhc3M9J3dlYml4X2ljb24gZmEtXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zW3N0YXR1c10gKyBcIic+PC9zcGFuPiBcIiArIHRleHRzW3N0YXR1c10gKyBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZWEuc2V0SFRNTChjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdWNjZXNzKCkge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgc2V0U3RhdHVzKFwiZ29vZFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBzZXRTdGF0dXMoXCJlcnJvclwiLCBlcnIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RhcnQocHJvbWlzZSkge1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgc2V0U3RhdHVzKFwic2F2aW5nXCIpO1xyXG4gICAgICAgIGlmIChwcm9taXNlICYmIHByb21pc2UudGhlbikge1xyXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oc3VjY2VzcywgZmFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoaWRlU3RhdHVzKCkge1xyXG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZWZyZXNoKFwiIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobW9kZSwgZXJyKSB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkge1xyXG4gICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2RlID09PSBcInNhdmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFwic2F2aW5nXCI7XHJcbiAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlzZXJyb3IgPSAobW9kZSA9PT0gXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBpc2Vycm9yID8gXCJlcnJvclwiIDogXCJnb29kXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5lcnJvcihcImFwcDplcnJvcjpzZXJ2ZXJcIiwgW2Vyci5yZXNwb25zZVRleHQgfHwgZXJyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwaXJlRGVsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoaWRlU3RhdHVzLCBleHBpcmVEZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJhY2soZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGRwID0gYXBwLndlYml4LmRwKGRhdGEpO1xyXG4gICAgICAgIGlmIChkcCkge1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJEYXRhU2VuZFwiLCBzdGFydCk7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlclNhdmVFcnJvclwiLCAoX2lkLCBfb2JqLCByZXNwb25zZSkgPT4gZmFpbChyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJTYXZlXCIsIHN1Y2Nlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwic3RhdHVzXCIsIHtcclxuICAgICAgICBnZXRTdGF0dXMsXHJcbiAgICAgICAgc2V0U3RhdHVzLFxyXG4gICAgICAgIHRyYWNrXHJcbiAgICB9KTtcclxuICAgIGlmIChjb25maWcucmVtb3RlKSB7XHJcbiAgICAgICAgdmlldy5vbihhcHAud2ViaXgsIFwib25SZW1vdGVDYWxsXCIsIHN0YXJ0KTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuYWpheCkge1xyXG4gICAgICAgIHZpZXcub24oYXBwLndlYml4LCBcIm9uQmVmb3JlQWpheFwiLCAoX21vZGUsIF91cmwsIF9kYXRhLCBfcmVxdWVzdCwgX2hlYWRlcnMsIF9maWxlcywgcHJvbWlzZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydChwcm9taXNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuZGF0YSkge1xyXG4gICAgICAgIHRyYWNrKGNvbmZpZy5kYXRhKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBUaGVtZShhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcclxuICAgIGxldCB0aGVtZSA9IHN0b3JhZ2UgP1xyXG4gICAgICAgIChzdG9yYWdlLmdldChcInRoZW1lXCIpIHx8IFwiZmxhdC1kZWZhdWx0XCIpXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICAoY29uZmlnLnRoZW1lIHx8IFwiZmxhdC1kZWZhdWx0XCIpO1xyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRUaGVtZSgpIHsgcmV0dXJuIHRoZW1lOyB9LFxyXG4gICAgICAgIHNldFRoZW1lKG5hbWUsIHNpbGVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IG5hbWUuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG5hbWUgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChsbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsbmFtZSA9PT0gbmFtZSB8fCBsbmFtZSA9PT0gcGFydHNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXBwLndlYml4LnNraW4uc2V0KHBhcnRzWzBdKTtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBjc3NcclxuICAgICAgICAgICAgYXBwLndlYml4Lmh0bWwucmVtb3ZlQ3NzKGRvY3VtZW50LmJvZHksIFwidGhlbWUtXCIgKyB0aGVtZSk7XHJcbiAgICAgICAgICAgIC8vIGFkZCBuZXcgY3NzXHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5odG1sLmFkZENzcyhkb2N1bWVudC5ib2R5LCBcInRoZW1lLVwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgIHRoZW1lID0gbmFtZTtcclxuICAgICAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UucHV0KFwidGhlbWVcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgICAgIGFwcC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJ0aGVtZVwiLCBzZXJ2aWNlKTtcclxuICAgIHNlcnZpY2Uuc2V0VGhlbWUodGhlbWUsIHRydWUpO1xyXG59XG5cbmZ1bmN0aW9uIGNvcHlQYXJhbXMoZGF0YSwgdXJsLCByb3V0ZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRhdGFbcm91dGVbaV1dID0gdXJsW2kgKyAxXSA/IHVybFtpICsgMV0ucGFnZSA6IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gVXJsUGFyYW0oYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gY29uZmlnLnJvdXRlIHx8IGNvbmZpZztcclxuICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgIHZpZXcub24oYXBwLCBcImFwcDp1cmxjaGFuZ2VcIiwgZnVuY3Rpb24gKHN1YnZpZXcsIHNlZ21lbnQpIHtcclxuICAgICAgICBpZiAodmlldyA9PT0gc3Vidmlldykge1xyXG4gICAgICAgICAgICBjb3B5UGFyYW1zKGRhdGEsIHNlZ21lbnQuc3VidXJsKCksIHJvdXRlKTtcclxuICAgICAgICAgICAgc2VnbWVudC5zaXplKHJvdXRlLmxlbmd0aCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb3MgPSB2aWV3LnNldFBhcmFtO1xyXG4gICAgY29uc3Qgb2cgPSB2aWV3LmdldFBhcmFtO1xyXG4gICAgdmlldy5zZXRQYXJhbSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgc2hvdykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcm91dGUuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZ21lbnQudXBkYXRlKFwiXCIsIHZhbHVlLCBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuc2hvdyhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9zLmNhbGwodGhpcywgbmFtZSwgdmFsdWUsIHNob3cpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2aWV3LmdldFBhcmFtID0gZnVuY3Rpb24gKGtleSwgbW9kZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFba2V5XTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2cuY2FsbCh0aGlzLCBrZXksIG1vZGUpO1xyXG4gICAgfTtcclxuICAgIGNvcHlQYXJhbXMoZGF0YSwgdmlldy5nZXRVcmwoKSwgcm91dGUpO1xyXG59XG5cbmZ1bmN0aW9uIFVzZXIoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBsb2dpbiA9IGNvbmZpZy5sb2dpbiB8fCBcIi9sb2dpblwiO1xyXG4gICAgY29uc3QgbG9nb3V0ID0gY29uZmlnLmxvZ291dCB8fCBcIi9sb2dvdXRcIjtcclxuICAgIGNvbnN0IGFmdGVyTG9naW4gPSBjb25maWcuYWZ0ZXJMb2dpbiB8fCBhcHAuY29uZmlnLnN0YXJ0O1xyXG4gICAgY29uc3QgYWZ0ZXJMb2dvdXQgPSBjb25maWcuYWZ0ZXJMb2dvdXQgfHwgXCIvbG9naW5cIjtcclxuICAgIGNvbnN0IHBpbmcgPSBjb25maWcucGluZyB8fCA1ICogNjAgKiAxMDAwO1xyXG4gICAgY29uc3QgbW9kZWwgPSBjb25maWcubW9kZWw7XHJcbiAgICBsZXQgdXNlciA9IGNvbmZpZy51c2VyO1xyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRVc2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN0YXR1cyhzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyICE9PSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5zdGF0dXMoKS5jYXRjaCgoKSA9PiBudWxsKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW4obmFtZSwgcGFzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwubG9naW4obmFtZSwgcGFzcykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsRXZlbnQoXCJhcHA6dXNlcjpsb2dpblwiLCBbdXNlcl0pO1xyXG4gICAgICAgICAgICAgICAgYXBwLnNob3coYWZ0ZXJMb2dpbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nb3V0KCkge1xyXG4gICAgICAgICAgICB1c2VyID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLmxvZ291dCgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsRXZlbnQoXCJhcHA6dXNlcjpsb2dvdXRcIiwgW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGNhbk5hdmlnYXRlKHVybCwgb2JqKSB7XHJcbiAgICAgICAgaWYgKHVybCA9PT0gbG9nb3V0KSB7XHJcbiAgICAgICAgICAgIHNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgICAgIG9iai5yZWRpcmVjdCA9IGFmdGVyTG9nb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh1cmwgIT09IGxvZ2luICYmICFzZXJ2aWNlLmdldFN0YXR1cygpKSB7XHJcbiAgICAgICAgICAgIG9iai5yZWRpcmVjdCA9IGxvZ2luO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwidXNlclwiLCBzZXJ2aWNlKTtcclxuICAgIGFwcC5hdHRhY2hFdmVudChgYXBwOmd1YXJkYCwgZnVuY3Rpb24gKHVybCwgXyRyb290LCBvYmopIHtcclxuICAgICAgICBpZiAoY29uZmlnLnB1YmxpYyAmJiBjb25maWcucHVibGljKHVybCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdXNlciA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBvYmouY29uZmlybSA9IHNlcnZpY2UuZ2V0U3RhdHVzKHRydWUpLnRoZW4oKCkgPT4gY2FuTmF2aWdhdGUodXJsLCBvYmopKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbk5hdmlnYXRlKHVybCwgb2JqKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHBpbmcpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiBzZXJ2aWNlLmdldFN0YXR1cyh0cnVlKSwgcGluZyk7XHJcbiAgICB9XHJcbn1cblxuLypcclxuTUlUIExpY2Vuc2VcclxuQ29weXJpZ2h0IChjKSAyMDE5IFhCIFNvZnR3YXJlXHJcbiovXHJcbmxldCB3ZWJpeCA9IHdpbmRvdy53ZWJpeDtcclxuaWYgKHdlYml4KSB7XHJcbiAgICBwYXRjaCh3ZWJpeCk7XHJcbn1cclxuY29uc3QgcGx1Z2lucyA9IHtcclxuICAgIFVubG9hZEd1YXJkLCBMb2NhbGUsIE1lbnUsIFRoZW1lLCBVc2VyLCBTdGF0dXMsIFVybFBhcmFtXHJcbn07XHJcbmNvbnN0IHcgPSB3aW5kb3c7XHJcbmlmICghdy5Qcm9taXNlKSB7XHJcbiAgICB3LlByb21pc2UgPSB3LndlYml4LnByb21pc2U7XHJcbn1cblxuZXhwb3J0IHsgcGx1Z2lucywgSmV0QXBwLCBKZXRWaWV3LCBIYXNoUm91dGVyLCBTdG9yZVJvdXRlciwgVXJsUm91dGVyLCBFbXB0eVJvdXRlciwgU3ViUm91dGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qZXQuanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJjb25zdCBsb2dvdXRVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ291dCc7XHJcbmNvbnN0IGxvZ2luVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbic7XHJcbmNvbnN0IHJlZ2lzdGVyVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRob3JpemF0aW9uIHtcclxuXHRyZWdpc3RlcihvYmopIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdChyZWdpc3RlclVybCwgb2JqKTtcclxuXHR9XHJcblxyXG5cdGxvZ2luKG9iaikge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KGxvZ2luVXJsLCBvYmopO1xyXG5cdH1cclxuXHJcblx0bG9nb3V0KGRhdGUpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdChsb2dvdXRVcmwsIGRhdGUpO1xyXG5cdH1cclxufSIsImNvbnN0IERVTU1ZQ09WRVIgPSAnaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2FkL2ZkLzU4L2FkZmQ1ODczYmUzODQxZjA2NjBlNmFhYTAwY2RlMThlLmpwZyc7XHJcbmNvbnN0IFNVQ0NFU1MgPSAyO1xyXG5jb25zdCBVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcclxuXHJcbmV4cG9ydCB7RFVNTVlDT1ZFUiwgU1VDQ0VTUywgVVJMfTsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zb3VyY2VzL2xvY2FsZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgQm9va3NNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gW107XHJcblx0XHR0aGlzLl91cmwgPSBgJHtVUkx9L2Jvb2tzL2A7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhRnJvbVNlcnZlcihpZCkge1xyXG5cdFx0Y29uc3QgdXNlcl9pZCA9IHt1c2VyX2lkOiBpZH07XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwsIHVzZXJfaWQpO1xyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZGVsKHRoaXMuX3VybCwgaWQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEJvb2tzTW9kZWwoKTsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgQ29tbWVudHNNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl91cmwgPSBgJHtVUkx9L2NvbW1lbnRzL2A7XHJcblx0fVxyXG5cdFxyXG5cdGdldEl0ZW1zKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtpZH1gKTtcdFxyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb21tZW50c01vZGVsKCk7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIEZpbGVzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9maWxlcy9gO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwpO1xyXG5cdH1cclxuXHRcclxuXHRnZXRJdGVtcyhpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHRcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucHV0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRkb3dubG9hZEl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucmVzcG9uc2UoJ2Jsb2InKS5nZXQoYCR7dGhpcy5fdXJsfWRvd25sb2FkLyR7aWR9YCk7XHRcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGaWxlc01vZGVsKCk7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIExpa2VzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IFtdO1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9saWtlcy9gO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwpO1xyXG5cdH1cclxuXHJcblx0YWRkTGlrZSh1c2VySWQsIGJvb2tJZCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcklkOiB1c2VySWQsXHJcblx0XHRcdGJvb2tJZDogYm9va0lkXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlTGlrZSh1c2VySWQsIGJvb2tJZCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcklkOiB1c2VySWQsXHJcblx0XHRcdGJvb2tJZDogYm9va0lkXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZGVsKHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTGlrZXNNb2RlbCgpOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBVc2Vyc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vdXNlcnMvYDtcclxuXHR9XHJcblxyXG5cdGdldERhdGFGcm9tU2VydmVyKCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQodGhpcy5fdXJsKTtcclxuXHR9XHJcblx0XHJcblx0Z2V0SXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHRcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucHV0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlcnNNb2RlbCgpOyIsImltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcbmltcG9ydCB7SmV0QXBwLCBFbXB0eVJvdXRlciwgSGFzaFJvdXRlciB9IGZyb20gJ3dlYml4LWpldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEpldEFwcHtcclxuXHRjb25zdHJ1Y3Rvcihjb25maWcpe1xyXG5cdFx0Y29uc3QgZGVmYXVsdHMgPSB7XHJcblx0XHRcdGlkIFx0XHQ6IEFQUE5BTUUsXHJcblx0XHRcdHZlcnNpb24gOiBWRVJTSU9OLFxyXG5cdFx0XHRyb3V0ZXIgXHQ6IEJVSUxEX0FTX01PRFVMRSA/IEVtcHR5Um91dGVyIDogSGFzaFJvdXRlcixcclxuXHRcdFx0ZGVidWcgXHQ6ICFQUk9EVUNUSU9OLFxyXG5cdFx0XHRzdGFydCBcdDogJy9sb2dpbidcclxuXHRcdH07XHJcblxyXG5cdFx0c3VwZXIoeyAuLi5kZWZhdWx0cywgLi4uY29uZmlnIH0pO1xyXG5cdH1cclxufVxyXG5cclxuaWYgKCFCVUlMRF9BU19NT0RVTEUpe1xyXG5cdHdlYml4LnJlYWR5KCgpID0+IHtcclxuXHRcdGNvbnN0IGFwcCA9IG5ldyBNeUFwcCgpO1xyXG5cdFx0YXBwLmF0dGFjaEV2ZW50KCdhcHA6Z3VhcmQnLCAodXJsLCB2aWV3LCBuYXYpID0+IHtcclxuXHRcdFx0aWYodXJsLmluZGV4T2YoJ2lkJykgIT09IC0xKSB7XHJcblx0XHRcdFx0Y29uc3QgdXJsUGFydHMgPSB1cmwuc3BsaXQoJy8nKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0UGFydDtcclxuXHJcblx0XHRcdFx0dXJsUGFydHMuZm9yRWFjaCgoZWwpID0+IHtcclxuXHRcdFx0XHRcdGlmKGVsLmluZGV4T2YoJ2lkJykgIT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0dGFyZ2V0UGFydCA9IGVsO1xyXG5cdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Y29uc3QgaSA9IHRhcmdldFBhcnQuaW5kZXhPZignaWQnKTtcclxuXHRcdFx0XHRjb25zdCByb2xlID0gdGFyZ2V0UGFydC5zcGxpdCgnLicpWzBdO1xyXG5cdFx0XHRcdGNvbnN0IGlkID0gdGFyZ2V0UGFydC5zbGljZShpKzMpO1xyXG4gXHJcblx0XHRcdFx0d2ViaXguYWpheCgpLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NoZWNrJykudGhlbihcclxuXHRcdFx0XHRcdChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSByZXMuanNvbigpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5yb2xlICE9IHJvbGUgfHwgcmVzcG9uc2UuaWQgIT0gaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYoZXJyb3Iuc3RhdHVzID09IDQwMSkge1xyXG5cdFx0XHRcdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGFwcC5yZW5kZXIoKTtcclxuXHR9KTtcclxufSIsImltcG9ydCB7U1VDQ0VTU30gZnJvbSAnLi9jb25zdHMnO1xyXG5cclxuY29uc3QgdG9nZ2xlRWxlbWVudCA9IChjb25kaXRpb24sIGVsZW1lbnQpID0+IHtcclxuXHRpZiAoY29uZGl0aW9uKSB7XHJcblx0XHRlbGVtZW50LnNob3coKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRlbGVtZW50LmhpZGUoKTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBhZGRJdGVtID0gKE1vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKSA9PiB7XHJcblx0TW9kZWwuYWRkSXRlbShkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zZXJ2ZXJTdGF0dXM7XHJcblx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHN1Y2Nlc3NBY3Rpb24oKTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVJdGVtID0gKE1vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKSA9PiB7XHJcblx0TW9kZWwudXBkYXRlSXRlbShkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zZXJ2ZXJTdGF0dXM7XHJcblx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRzdWNjZXNzQWN0aW9uKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXREYXRlID0gKGRiRGF0ZSkgPT4ge1xyXG5cdGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cdGNvbnN0IGN1cnJlbnRNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcclxuXHRjb25zdCBjdXJyZW50RGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XHJcblx0Y29uc3QgY3VycmVudEhvdXJzID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xyXG5cclxuXHRjb25zdCBjb21tZW50c1llYXIgPSBuZXcgRGF0ZShkYkRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcblx0Y29uc3QgY29tbWVudHNNb250aCA9IG5ldyBEYXRlKGRiRGF0ZSkuZ2V0TW9udGgoKTtcclxuXHRjb25zdCBjb21tZW50c0RheSA9IG5ldyBEYXRlKGRiRGF0ZSkuZ2V0RGF0ZSgpO1xyXG5cdGNvbnN0IGNvbW1lbnRzSG91cnMgPSBuZXcgRGF0ZShkYkRhdGUpLmdldEhvdXJzKCk7XHJcblxyXG5cdGxldCBmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5zdHJUb0RhdGUoXCIlaTolc1wiKTtcclxuXHJcblx0aWYgKGN1cnJlbnRZZWFyID4gY29tbWVudHNZZWFyKSB7XHJcblx0XHRmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlZC0lbS0leVwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZihjdXJyZW50TW9udGggPiBjb21tZW50c01vbnRoKSB7XHJcblx0XHRmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlbS0lZFwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZihjdXJyZW50RGF5ID4gY29tbWVudHNEYXkpIHtcclxuXHRcdGZvcm1hdERhdGUgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVELCAlSDolaVwiKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoY3VycmVudEhvdXJzID4gY29tbWVudHNIb3Vycyl7XHJcblx0XHRmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlSDolaVwiKTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIGZvcm1hdERhdGUobmV3IERhdGUoZGJEYXRlKSk7XHJcblxyXG59O1xyXG5cclxud2ViaXgucHJvdG9VSSh7XHJcblx0bmFtZTogXCJhY3RpdmVMaXN0XCIsXHJcblx0ZGVmYXVsdHM6IHtcclxuXHRcdGF1dG9oZWlnaHQ6IHRydWUsXHJcblx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0dHlwZToge1xyXG5cdFx0XHRoZWlnaHQ6IDMwXHJcblx0XHR9XHJcblx0fVxyXG59LCB3ZWJpeC51aS5saXN0KTtcclxuXHJcbmV4cG9ydCB7dG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbSwgZm9ybWF0RGF0ZX07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2FkbWluXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi9cIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL2luZGV4XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qc1wiLFxuXHRcIi4vYWRtaW4vdXNlckZvcm1cIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vdXNlckZvcm0uanNcIixcblx0XCIuL2FkbWluL3VzZXJGb3JtLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL3VzZXJGb3JtLmpzXCIsXG5cdFwiLi9jb21tb24vbGlicmFyeVwiOiBcIi4vc291cmNlcy92aWV3cy9jb21tb24vbGlicmFyeS5qc1wiLFxuXHRcIi4vY29tbW9uL2xpYnJhcnkuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvY29tbW9uL2xpYnJhcnkuanNcIixcblx0XCIuL2xpYnJhcmlhblwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9cIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vYm9va0NhcmRcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2Jvb2tDYXJkLmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vYm9va0NhcmQuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2Jvb2tDYXJkLmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vaW5kZXhcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vaW5kZXguanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vbGlicmFyeVwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vbGlicmFyeS5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2xpYnJhcnkuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2xpYnJhcnkuanNcIixcblx0XCIuL2xvZ2luXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzXCIsXG5cdFwiLi9sb2dpbi5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9sb2dpbi5qc1wiLFxuXHRcIi4vcmVhZGVyXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9ib29rQ2FyZFwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvYm9va0NhcmQuanNcIixcblx0XCIuL3JlYWRlci9ib29rQ2FyZC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvYm9va0NhcmQuanNcIixcblx0XCIuL3JlYWRlci9pbmRleFwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9saWJyYXJ5XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9saWJyYXJ5LmpzXCIsXG5cdFwiLi9yZWFkZXIvbGlicmFyeS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbGlicmFyeS5qc1wiLFxuXHRcIi4vcmVhZGVyL21haW5cIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL21haW4uanNcIixcblx0XCIuL3JlYWRlci9tYWluLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzXCIsXG5cdFwiLi9yZWFkZXIvc2V0dGluZ3NcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3NldHRpbmdzLmpzXCIsXG5cdFwiLi9yZWFkZXIvc2V0dGluZ3MuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3NldHRpbmdzLmpzXCIsXG5cdFwiLi9yZWFkZXIvdG9wc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvdG9wcy5qc1wiLFxuXHRcIi4vcmVhZGVyL3RvcHMuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3RvcHMuanNcIixcblx0XCIuL3JlZ2lzdGVyXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlZ2lzdGVyLmpzXCIsXG5cdFwiLi9yZWdpc3Rlci5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZXMvdmlld3Mgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uLy4uL2F1dGhvcml6YXRpb24nO1xyXG5pbXBvcnQgdXNlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcnMnO1xyXG5pbXBvcnQgVXNlckZvcm0gZnJvbSAnLi91c2VyRm9ybSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6J2hlYWRlcicsIFxyXG5cdFx0XHR0ZW1wbGF0ZTogJ1VzZXJzIGxpc3QnXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGR0YWJsZSA9IHtcclxuXHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdGlkOiAndXNlcnNMaXN0JyxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnaWQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiAxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Z1bGxfbmFtZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdOYW1lJyxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiAxODAsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEuNVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdyb2xlX25hbWUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUm9sZScsXHJcblx0XHRcdFx0XHR3aWR0aDogOTBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncGFzc3BvcnRfSUQnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUGFzc3BvcnQgSUQnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDEzMFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdiaXJ0aF9kYXRlJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0JpcnRoIGRhdGUnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDEzMFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhZGRyZXNzJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0FkZHJlc3MnLFxyXG5cdFx0XHRcdFx0bWluV2lkdGg6IDE4MCxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMS41XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3Bob25lX251bWJlcnMnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUGhvbmUgbnVtYmVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAxOTBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZW1haWwnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRW1haWwnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDE4MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdlZGl0JywgXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdFZGl0JywgXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJ3tjb21tb24uZWRpdEljb24oKX0nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J3d4aS1wZW5jaWwnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZWRpdFVzZXIoaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhZGRVc2VyQnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQgdXNlcicsXHJcblx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmFkZFVzZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1aSA9IHtcclxuXHRcdFx0cm93czpbXHJcblx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdHR5cGU6ICdjbGVhbicsXHJcblx0XHRcdFx0XHRjb2xzOiBbaGVhZGVyLCBsb2dvdXRdIFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZHRhYmxlLFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0e30sIGFkZFVzZXJCdG4sIHt9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiB1aTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR1c2Vyc01vZGVsLmdldERhdGFGcm9tU2VydmVyKCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGxldCB1c2Vyc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblx0XHRcdHVzZXJzQXJyID0gdXNlcnNBcnIubWFwKChlbCkgPT4ge1xyXG5cdFx0XHRcdGVsLmZ1bGxfbmFtZSA9IGVsLnVzZXJfbmFtZSArICcgJyArIGVsLnVzZXJfc3VybmFtZTtcclxuXHRcdFx0XHRjb25zdCBmb3JtYXQgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZLSVtLSVkXCIpO1xyXG5cdFx0XHRcdGVsLmJpcnRoX2RhdGUgPSBmb3JtYXQobmV3IERhdGUoZWwuYmlydGhfZGF0ZSkpO1xyXG5cdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMudXNlcnNEYXRhID0gdXNlcnNBcnI7XHJcblx0XHRcdCQkKCd1c2Vyc0xpc3QnKS5wYXJzZSh1c2Vyc0Fycik7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cclxuXHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdHRoaXMuJCQoJ2xvZ291dEJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYXBwID0gdGhpcy5hcHA7XHJcblx0XHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVktJW0tJWRcIik7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dvdXQoe2N1cnJlbnREYXRlfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLl91c2VyRm9ybSA9IHRoaXMudWkoVXNlckZvcm0pO1xyXG5cdH1cclxuXHJcblx0ZWRpdFVzZXIoaWQpIHtcclxuXHRcdGNvbnN0IHVzZXIgPSB0aGlzLnVzZXJzRGF0YS5maW5kKGVsID0+IGVsLmlkID09IGlkKTtcclxuXHRcdHRoaXMuX3VzZXJGb3JtLnNob3dXaW5kb3codXNlcik7XHJcblx0fVxyXG5cclxuXHRhZGRVc2VyKCkge1xyXG5cdFx0dGhpcy5fdXNlckZvcm0uc2hvd1dpbmRvdygpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgdXNlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcnMnO1xyXG5pbXBvcnQge3RvZ2dsZUVsZW1lbnQsIGFkZEl0ZW0sIHVwZGF0ZUl0ZW19IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJGb3JtIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3dpbmRvdycsXHJcblx0XHRcdGxvY2FsSWQ6ICd1c2VyV2luZG93JyxcclxuXHRcdFx0aGVhZDogJ0VkaXQgdXNlcicsXHJcblx0XHRcdHdpZHRoOiA2MDAsXHJcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcclxuXHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRcdFx0XHRsb2NhbElkOiAndXNlckZvcm0nLFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBuYW1lOiAnaWQnLCBsb2NhbElkOiAnaWQnLCBoaWRkZW46IHRydWUgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdGaXJzdCBuYW1lJywgbmFtZTogJ3VzZXJfbmFtZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnTGFzdCBuYW1lJywgbmFtZTogJ3VzZXJfc3VybmFtZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAnY29tYm8nLCBsYWJlbDogJ1JvbGUnLCBuYW1lOiAnY2FwYWJpbGl0aWVzX2lkJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG9wdGlvbnM6IFtcclxuXHRcdFx0XHRcdFx0XHRcdHtpZDogMSwgdmFsdWU6ICdyZWFkZXInfSxcclxuXHRcdFx0XHRcdFx0XHRcdHtpZDogMiwgdmFsdWU6ICdsYWJyYXJpYW4nfSxcclxuXHRcdFx0XHRcdFx0XHRcdHtpZDogMywgdmFsdWU6ICdhZG1pbid9XHJcblx0XHRcdFx0XHRcdFx0XSB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bhc3Nwb3J0IElEJywgbmFtZTogJ3Bhc3Nwb3J0X0lEJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICdkYXRlcGlja2VyJywgbGFiZWw6ICdCaXJ0aCBkYXRlJywgbmFtZTogJ2JpcnRoX2RhdGUnLCBsb2NhbElkOiAnYmlydGhfZGF0ZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQWRkcmVzcycsIG5hbWU6ICdhZGRyZXNzJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQaG9uZScsIG5hbWU6ICdwaG9uZV9udW1iZXJzJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdFbWFpbCcsIG5hbWU6ICdlbWFpbCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAnYWNjb3VudF9wYXNzd29yZCcsIGxvY2FsSWQ6ICdpbml0aWFsX3Bhc3N3b3JkJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRcdFx0XHQnY2FwYWJpbGl0aWVzX2lkJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eSxcclxuXHRcdFx0XHRcdFx0XHQnZW1haWwnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5LFxyXG5cdFx0XHRcdFx0XHRcdCdhY2NvdW50X3Bhc3N3b3JkJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eSxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMjAsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLCB2YWx1ZTogJ1NhdmUnLCB0eXBlOiAnZm9ybScsIGxvY2FsSWQ6ICdzYXZlQnRuJywgd2lkdGg6IDEwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZUZvcm0oKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLCB2YWx1ZTogJ0NhbmNlbCcsIHdpZHRoOiAxMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmhpZGVXaW5kb3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHt9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtID0gdGhpcy4kJCgndXNlckZvcm0nKTtcclxuXHRcdHRoaXMud2luZG93ID0gdGhpcy4kJCgndXNlcldpbmRvdycpO1xyXG5cdH1cclxuXHJcblx0c3VjY2Vzc0FjdGlvbigpIHtcclxuXHRcdHRoaXMud2ViaXgubWVzc2FnZSgnU3VjY2VzcycpO1xyXG5cdFx0dGhpcy5oaWRlV2luZG93KCk7XHJcblx0fVxyXG5cclxuXHRzaG93V2luZG93KHVzZXIpIHtcdFxyXG5cdFx0dGhpcy5pc05ldyA9IHVzZXIgPyBmYWxzZSA6IHRydWU7XHRcclxuXHJcblx0XHRpZih0aGlzLmlzTmV3KSB7XHJcblx0XHRcdHRoaXMud2luZG93LmdldEhlYWQoKS5zZXRIVE1MKCdBZGQgdXNlcicpO1xyXG5cdFx0XHR0aGlzLndpbmRvdy5nZXRIZWFkKCkucmVmcmVzaCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMuZm9ybS5zZXRWYWx1ZXModXNlcik7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaW5pdGlhbF9wYXNzd29yZCA9IHRoaXMuJCQoJ2luaXRpYWxfcGFzc3dvcmQnKTtcclxuXHRcdHRvZ2dsZUVsZW1lbnQodGhpcy5pc05ldywgaW5pdGlhbF9wYXNzd29yZCk7XHJcblx0XHRcclxuXHJcblx0XHR0aGlzLmdldFJvb3QoKS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHRzYXZlRm9ybSgpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLmZvcm0uZ2V0VmFsdWVzKCk7XHRcclxuXHRcdFxyXG5cdFx0aWYodGhpcy5mb3JtLnZhbGlkYXRlKCkpIHtcclxuXHRcdFx0aWYodGhpcy5pc05ldykge1xyXG5cdFx0XHRcdGFkZEl0ZW0odXNlcnNNb2RlbCwgZGF0YSwgdGhpcy5zdWNjZXNzQWN0aW9uLmJpbmQodGhpcykpO1x0XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dXBkYXRlSXRlbSh1c2Vyc01vZGVsLCBkYXRhLCB0aGlzLnN1Y2Nlc3NBY3Rpb24uYmluZCh0aGlzKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cclxuXHRoaWRlV2luZG93KCkge1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyVmFsaWRhdGlvbigpO1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyKCk7XHJcblx0XHR0aGlzLmdldFJvb3QoKS5oaWRlKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBib29rc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9ib29rcyc7XHJcbmltcG9ydCBmaWxlc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9maWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWJyYXJ5IGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uc3RydWN0b3IoYXBwLCBsaWJyYXJ5Q29uZmlnLCBib29rQ2FyZCkge1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHRcdHRoaXMubGlicmFyeUNvbmZpZyA9IGxpYnJhcnlDb25maWc7XHJcblx0XHR0aGlzLmJvb2tDYXJkID0gYm9va0NhcmQ7XHJcblx0fVxyXG5cclxuXHRjb25maWcoKSB7XHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6ICdoZWFkZXInLFxyXG5cdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLWJvb2tcIj48L2k+IExpc3Qgb2YgYm9va3MnLFxyXG5cdFx0XHRjc3M6ICdjZW50ZXIgcGFnZV9oZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGR0YWJsZSA9IHtcclxuXHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdGlkOiAnZHRfbGlicmFyeScsXHJcblx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnaWQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdib29rX3RpdGxlJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydUaXRsZScsIHtjb250ZW50OiAndGV4dEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdXRob3JfbmFtZScsXHJcblx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnQXV0aG9yJywge2NvbnRlbnQ6ICd0ZXh0RmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2dlbnJlcycsXHJcblx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ0dlbnJlcycsIHtjb250ZW50OiAnc2VsZWN0RmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2NvdW50cnlfb2ZfcHVibGljYXRpb24nLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydDb3VudHJ5Jywge2NvbnRlbnQ6ICdzZWxlY3RGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAneWVhcl9vZl9wdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0XHRzb3J0OiAnZGF0ZScsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0Zm9ybWF0OiB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZXCIpLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ1llYXInLCB7Y29udGVudDogJ2RhdGVSYW5nZUZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdmFpbGFibGVfY29waWVzJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdBdmFpbGFibGUnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Vib29rJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydlQm9vaycsIHtjb250ZW50Olwic2VsZWN0RmlsdGVyXCJ9XSxcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAob2JqKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBvYmouZWJvb2s9PT0neWVzJyA/ICc8aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT4nIDogJydcclxuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3ZpZXdDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnVmlldycsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1leWVcIj48L2k+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdlZGl0Q29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0VkaXQnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3JlbW92ZUNvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSZW1vdmUnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCdmYS1leWUnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd0Jvb2tDYXJkKGlkKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdmYS1lZGl0JzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dCb29rQ2FyZChpZCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnZmEtdHJhc2gnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQm9vayhpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFtoZWFkZXIsIGR0YWJsZV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRhc3luYyBpbml0KCkge1xyXG5cdFx0dGhpcy5ncmlkID0gJCQoJ2R0X2xpYnJhcnknKTtcclxuXHJcblx0XHRzd2l0Y2ggKHRoaXMubGlicmFyeUNvbmZpZy5yb2xlKSB7XHJcblx0XHRcdGNhc2UgJ3JlYWRlcic6IFxyXG5cdFx0XHRcdHRoaXMuZ3JpZC5nZXRDb2x1bW5Db25maWcoJ2VkaXRDb2wnKS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZ3JpZC5nZXRDb2x1bW5Db25maWcoJ3JlbW92ZUNvbCcpLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xpYnJhcmlhbic6XHJcblx0XHRcdFx0dGhpcy5ncmlkLmdldENvbHVtbkNvbmZpZygndmlld0NvbCcpLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHR0aGlzLmdyaWQucmVmcmVzaENvbHVtbnMoKTtcclxuXHRcdGF3YWl0IHRoaXMuZ2V0RGF0YSgpO1xyXG5cdFx0YXdhaXQgdGhpcy5nZXRGaWxlcygpO1xyXG5cdFx0dGhpcy5jaGVja0ZpbGVzKCk7XHRcdFxyXG5cclxuXHRcdHRoaXMuZ3JpZC5wYXJzZSh0aGlzLmJvb2tzQXJyKTtcclxuXHRcdHRoaXMuX2Jvb2tDYXJkID0gdGhpcy51aSh0aGlzLmJvb2tDYXJkKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldERhdGEoKSB7XHRcdFxyXG5cdFx0Y29uc3QgdXNlcl9pZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdGNvbnN0IGRiRGF0YSA9IGF3YWl0IGJvb2tzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIodXNlcl9pZCk7XHJcblx0XHRsZXQgYm9va3NBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cclxuXHRcdGJvb2tzQXJyID0gYm9va3NBcnIubWFwKChlbCkgPT4ge1xyXG5cdFx0XHRlbC55ZWFyX29mX3B1YmxpY2F0aW9uID0gbmV3IERhdGUoZWwueWVhcl9vZl9wdWJsaWNhdGlvbik7XHJcblx0XHRcdHJldHVybiBlbDtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ib29rc0FyciA9IGJvb2tzQXJyO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZ2V0RmlsZXMoKSB7XHJcblx0XHRjb25zdCBkYkRhdGEgPSBhd2FpdCBmaWxlc01vZGVsLmdldERhdGFGcm9tU2VydmVyKCk7XHJcblx0XHR0aGlzLmZpbGVzQXJyID0gZGJEYXRhLmpzb24oKTtcdFx0XHRcdFx0XHRcclxuXHR9XHJcblxyXG5cdGNoZWNrRmlsZXMoKSB7XHJcblx0XHR0aGlzLmJvb2tzQXJyLmZvckVhY2goKGJvb2ssIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgaXNGaWxlcyA9IHRoaXMuZmlsZXNBcnIuZmluZCgoZWwpID0+IGVsLmJvb2tfaWQgPT09IGJvb2suaWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoaXNGaWxlcykge1xyXG5cdFx0XHRcdHRoaXMuYm9va3NBcnJbaV0uZWJvb2sgPSAneWVzJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmJvb2tzQXJyW2ldLmVib29rID0gJ25vJztcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzaG93Qm9va0NhcmQoaWQpIHtcclxuXHRcdGNvbnN0IGJvb2sgPSB0aGlzLmJvb2tzQXJyLmZpbmQoZWwgPT4gZWwuaWQgPT0gaWQpO1xyXG5cdFx0dGhpcy5fYm9va0NhcmQuc2hvd1BvcHVwKGJvb2spO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlQm9vayhpZCkge1xyXG5cdFx0Ym9va3NNb2RlbC5yZW1vdmVJdGVtKGlkKTtcclxuXHRcdHJldHVybiB0aGlzLmdyaWQucmVtb3ZlKGlkKTtcclxuXHR9XHJcblxyXG5cdGFkZEJvb2soKSB7XHJcblx0XHR0aGlzLl9ib29rQ2FyZC5zaG93UG9wdXAoKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IGJvb2tzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2tzJztcclxuaW1wb3J0IHsgRFVNTVlDT1ZFUiB9IGZyb20gJy4uLy4uL2NvbnN0cyc7XHJcbmltcG9ydCB7IHRvZ2dsZUVsZW1lbnQsIGFkZEl0ZW0sIHVwZGF0ZUl0ZW0gfSBmcm9tICcuLi8uLi9zY3JpcHRzJzsgXHJcbmltcG9ydCBmaWxlc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9maWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rQ2FyZCBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRjb25zdCBib29rQ292ZXIgPSB7XHJcblx0XHRcdGxvY2FsSWQ6ICdib29rQ292ZXInLFxyXG5cdFx0XHR3aWR0aDogMTIwLFxyXG5cdFx0XHRoZWlnaHQ6IDE4MCxcclxuXHRcdFx0Y3NzOiAnYm9va19jb3ZlcicsXHJcblx0XHRcdHRlbXBsYXRlOiAodXJsKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dXJsfSlcIiA+PC9kaXY+YDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBib29rQ2FyZCA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDYXJkTGlicmFyaWFuJyxcclxuXHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1RpdGxlJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYm9va190aXRsZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdXRob3InLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdXRob3JfbmFtZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdjb21ibycsIGxhYmVsOiAnR2VucmVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnZ2VucmVzJywgb3B0aW9uczogW1xyXG5cdFx0XHRcdFx0JycsICdGaWN0aW9uJywgJ0ZhbnRhc3knLCAnVGhyaWxsZXInLCAnSG9ycm9yJywgJ015c3RlcnknLCAnSGlzdG9yaWNhbCcsICdXZXN0ZXJucycsICdGYW1pbHknLCAnRGFyayBjb21lZHknXHJcblx0XHRcdFx0XX0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQ291bnRyeScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2NvdW50cnlfb2ZfcHVibGljYXRpb24nIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUHVibGlzaGluZyBob3VzZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ3B1Ymxpc2hpbmdfaG91c2UnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQXZhaWxhYmxlIGNvcGllcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2F2YWlsYWJsZV9jb3BpZXMnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFnZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdudW1iZXJfb2ZfcGFnZXMnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQ292ZXIgcGhvdG8nLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdjb3Zlcl9waG90bycgfVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZFRleHRGaWxlID0ge1xyXG5cdFx0XHR2aWV3OiAndXBsb2FkZXInLFxyXG5cdFx0XHRsYWJlbDogJzxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtdXBsb2FkXCI+PC9pPiBVcGxvYWQgdGV4dCBmaWxlJyxcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tGaWxlcycsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0YXV0b3NlbmQ6IGZhbHNlLFxyXG5cdFx0XHR3aWR0aDogMTUwLFxyXG5cdFx0XHRmb3JtRGF0YTogKCkgPT4gKHtcclxuXHRcdFx0XHR1c2VyX2lkOiB0aGlzLnVzZXJJZCxcclxuXHRcdFx0XHRib29rX2lkOiB0aGlzLmJvb2tJZFxyXG5cdFx0XHR9KSxcclxuXHRcdFx0YWNjZXB0OiAndGV4dC9wbGFpbiwgYXBwbGljYXRpb24vcGRmLCAuZG9jLCAuZG9jeCcsXHJcblx0XHRcdHVwbG9hZDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9maWxlcy91cGxvYWQvdGV4dCcsXHJcblx0XHRcdGxpbms6ICdmaWxlc0xpc3QnXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGZpbGVzTGlzdCA9IHtcclxuXHRcdFx0dmlldzogJ2xpc3QnLFxyXG5cdFx0XHR0eXBlOiAndXBsb2FkZXInLFxyXG5cdFx0XHRpZDogJ2ZpbGVzTGlzdCcsXHJcblx0XHRcdGF1dG9oZWlnaHQ6dHJ1ZSwgXHJcblx0XHRcdGJvcmRlcmxlc3M6dHJ1ZVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhZGRBdWRpb0ZpbGUgPSB7XHJcblx0XHRcdHZpZXc6ICd1cGxvYWRlcicsXHJcblx0XHRcdGxhYmVsOiAnPGkgY2xhc3M9XCJmYXMgZmEtbXVzaWNcIj48L2k+IFVwbG9hZCBhdWRpbycsXHJcblx0XHRcdGxvY2FsSWQ6ICdhdWRpb0ZpbGVzJyxcclxuXHRcdFx0dHlwZTogJ2h0bWxidXR0b24nLFxyXG5cdFx0XHRhdXRvc2VuZDogZmFsc2UsXHJcblx0XHRcdHdpZHRoOiAxNTAsXHJcblx0XHRcdGZvcm1EYXRhOiAoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdHVzZXJfaWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0XHRcdFx0Ym9va19pZDogdGhpcy5ib29rSWRcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhY2NlcHQ6ICcubXAzJyxcclxuXHRcdFx0dXBsb2FkOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2ZpbGVzL3VwbG9hZC9hdWRpbycsXHJcblx0XHRcdGxpbms6ICdhdWRpb0xpc3QnXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGF1ZGlvTGlzdCA9IHtcclxuXHRcdFx0dmlldzogJ2xpc3QnLFxyXG5cdFx0XHR0eXBlOiAndXBsb2FkZXInLFxyXG5cdFx0XHRpZDogJ2F1ZGlvTGlzdCcsXHJcblx0XHRcdGF1dG9oZWlnaHQ6dHJ1ZSwgXHJcblx0XHRcdGJvcmRlcmxlc3M6dHJ1ZVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVUZXh0RmlsZXMgPSB7XHJcblx0XHRcdHZpZXc6ICdhY3RpdmVMaXN0JyxcclxuXHRcdFx0bG9jYWxJZDogJ2F2YWlsYWJsZVRleHRGaWxlcycsXHJcblx0XHRcdHRlbXBsYXRlOiBgI25hbWUjIDxzcGFuIGNsYXNzPSdsaXN0X2J1dHRvbic+PGkgY2xhc3MgPSAnZmFzIGZhLXRpbWVzJz48L2k+PC9zcGFuPmAsXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly9yZW1vdmUgZmlsZSBhbmQgcmVjb3JkIGluIERCXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGF2YWlsYWJsZUF1ZGlvRmlsZXMgPSB7XHJcblx0XHRcdHZpZXc6IFwiYWN0aXZlTGlzdFwiLFxyXG5cdFx0XHRsb2NhbElkOiBcImF2YWlsYWJsZUF1ZGlvRmlsZXNcIixcclxuXHRcdFx0dGVtcGxhdGU6IFwiI25hbWUjXCIgK1xyXG5cdFx0XHRcdFx0XCI8c3BhbiBjbGFzcz0nbGlzdF9idXR0b24nPjxpIGNsYXNzID0gJ2ZhcyBmYS10aW1lcyc+PC9pPjwvc3Bhbj5cIixcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc2F2ZUJ0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0bGFiZWw6ICdTYXZlJyxcclxuXHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2F2ZUZvcm0oKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAncG9wdXAnLFxyXG5cdFx0XHRwb3NpdGlvbjogJ2NlbnRlcicsXHJcblx0XHRcdG1heEhlaWdodDogNTUwLFxyXG5cdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0dmlldzogJ3Njcm9sbHZpZXcnLFxyXG5cdFx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0Ym9va0NvdmVyLCBcclxuXHRcdFx0XHRcdFx0Ym9va0NhcmQsXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR2aWV3OiAndGVtcGxhdGUnLFxyXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlOiAnRmlsZXMnLFxyXG5cdFx0XHRcdFx0XHRcdGF1dG9oZWlnaHQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0Y3NzOiAnY2VudGVyJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7aGVpZ2h0OiAyfSxcclxuXHRcdFx0XHRcdFx0YXZhaWxhYmxlVGV4dEZpbGVzLFxyXG5cdFx0XHRcdFx0XHRhdmFpbGFibGVBdWRpb0ZpbGVzLFxyXG5cdFx0XHRcdFx0XHRmaWxlc0xpc3QsXHJcblx0XHRcdFx0XHRcdGF1ZGlvTGlzdCxcclxuXHRcdFx0XHRcdFx0e2hlaWdodDogMTV9LFxyXG5cdFx0XHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0XHRcdGxvY2FsSWQ6ICdhZGRpbmdGaWxlc0J1dHRvbnMnLFxyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTAsXHJcblx0XHRcdFx0XHRcdFx0Y29sczogWyB7fSwgYWRkVGV4dEZpbGUsIGFkZEF1ZGlvRmlsZSwge30gXSBcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e2hlaWdodDogMX0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZ1g6IDE1LFxyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTAsXHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVybGVzczogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRjb2xzOiBbe30sIHNhdmVCdG4sIHt9XVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtID0gdGhpcy4kJCgnYm9va0NhcmRMaWJyYXJpYW4nKTtcclxuXHR9XHJcblxyXG5cdHNob3dQb3B1cChib29rKSB7XHJcblx0XHR0aGlzLmNsZWFyRm9ybSgpO1xyXG5cdFx0dGhpcy5pc05ldyA9IGJvb2sgPyBmYWxzZSA6IHRydWU7XHJcblx0XHR0aGlzLmJvb2sgPSBib29rIHx8ICcnO1xyXG5cdFx0dGhpcy5ib29rSWQgPSBib29rID8gYm9vay5pZCA6ICcnO1xyXG5cdFx0dGhpcy51c2VySWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblxyXG5cdFx0ZmlsZXNNb2RlbC5nZXRJdGVtcyh0aGlzLmJvb2tJZCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZpbGVzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHJcblx0XHRcdGNvbnN0IHRleHRGaWxlcyA9IFtdO1xyXG5cdFx0XHRjb25zdCBhdWRpb0ZpbGVzID0gW107XHJcblxyXG5cdFx0XHRmaWxlc0Fyci5mb3JFYWNoKChmaWxlKSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoKGZpbGUuZGF0YV90eXBlKSB7XHJcblx0XHRcdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRcdFx0dGV4dEZpbGVzLnB1c2goZmlsZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnYXVkaW8nOlxyXG5cdFx0XHRcdFx0XHRhdWRpb0ZpbGVzLnB1c2goZmlsZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLnBhcnNlKHRleHRGaWxlcyk7XHJcblx0XHRcdHRoaXMuJCQoJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnKS5wYXJzZShhdWRpb0ZpbGVzKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRvZ2dsZUVsZW1lbnQoIXRoaXMuaXNOZXcsIHRoaXMuJCQoJ2Jvb2tDb3ZlcicpKTtcclxuXHRcdHRvZ2dsZUVsZW1lbnQoIXRoaXMuaXNOZXcsIHRoaXMuJCQoJ2FkZGluZ0ZpbGVzQnV0dG9ucycpKTtcclxuXHJcblx0XHRpZighdGhpcy5pc05ldykge1xyXG5cdFx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKGJvb2spO1xyXG5cdFx0XHR0aGlzLiQkKCdib29rQ292ZXInKS5zZXRWYWx1ZXMoYm9vay5jb3Zlcl9waG90byB8fCBEVU1NWUNPVkVSKTtcdFx0XHRcclxuXHRcdH1cdFx0XHJcblxyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1x0XHJcblx0fVxyXG5cclxuXHRzYXZlRm9ybSgpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLmZvcm0uZ2V0VmFsdWVzKCk7XHJcblxyXG5cdFx0Y29uc3Qgc3VjY2Vzc0FjdGlvbiA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy53ZWJpeC5tZXNzYWdlKCdTdWNjZXNzJyk7XHJcblx0XHRcdHRoaXMuaGlkZVdpbmRvdygpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZih0aGlzLmZvcm0udmFsaWRhdGUoKSkge1xyXG5cdFx0XHRpZih0aGlzLmlzTmV3KSB7XHJcblx0XHRcdFx0YWRkSXRlbShib29rc01vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKTtcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR1cGRhdGVJdGVtKGJvb2tzTW9kZWwsIGRhdGEsIHN1Y2Nlc3NBY3Rpb24pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiQkKCdib29rRmlsZXMnKS5zZW5kKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKXtcclxuXHRcdFx0XHRcdHRoaXMud2ViaXgubWVzc2FnZShyZXNwb25zZS5tZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy4kJCgnYXVkaW9GaWxlcycpLnNlbmQoKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Upe1xyXG5cdFx0XHRcdFx0dGhpcy53ZWJpeC5tZXNzYWdlKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHJcblx0aGlkZVdpbmRvdygpIHtcclxuXHRcdHRoaXMuY2xlYXJGb3JtKCk7XHJcblx0XHR0aGlzLmdldFJvb3QoKS5oaWRlKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhckZvcm0gKCl7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXJWYWxpZGF0aW9uKCk7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXIoKTtcclxuXHRcdHRoaXMuJCQoJ2Jvb2tGaWxlcycpLmZpbGVzLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdWRpb0ZpbGVzJykuZmlsZXMuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uLy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0ge1xyXG5cdFx0XHR0eXBlOidoZWFkZXInLCB0ZW1wbGF0ZTp0aGlzLmFwcC5jb25maWcubmFtZSwgY3NzOid3ZWJpeF9oZWFkZXIgYXBwX2hlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbWVudSA9IHtcclxuXHRcdFx0dmlldzonbWVudScsIFxyXG5cdFx0XHRjc3M6J2FwcF9tZW51JyxcclxuXHRcdFx0d2lkdGg6MTgwLCBcclxuXHRcdFx0bGF5b3V0Oid5JywgXHJcblx0XHRcdHNlbGVjdDp0cnVlLFxyXG5cdFx0XHR0ZW1wbGF0ZTonPHNwYW4gY2xhc3M9XCJ3ZWJpeF9pY29uICNpY29uI1wiPjwvc3Bhbj4gI3ZhbHVlIyAnLFxyXG5cdFx0XHR2YWx1ZTogJ21haW4nLFxyXG5cdFx0XHRkYXRhOltcclxuXHRcdFx0XHR7IHZhbHVlOidMaWJyYXJ5JywgaWQ6J2xpYnJhcnknLCAgaWNvbjonZmFzIGZhLWJvb2stcmVhZGVyJyB9LFxyXG5cdFx0XHRcdHsgdmFsdWU6J1VzZXJzJywgaWQ6J3VzZXJzJywgIGljb246J2ZhcyBmYS1jb2cnIH1cclxuXHRcdFx0XSxcclxuXHRcdFx0b246e1xyXG5cdFx0XHRcdG9uTWVudUl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB1c2VyX2lkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5hcHAuc2hvdyhgbGlicmFyaWFuLmluZGV4P2lkPSR7dXNlcl9pZH0vbGlicmFyaWFuLiR7aWR9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHR0eXBlOidjbGVhbicsIHBhZGRpbmdYOjUsIGNzczonYXBwX2xheW91dCcsIFxyXG5cdFx0XHRjb2xzOltcclxuXHRcdFx0XHR7IHBhZGRpbmdYOjUsIHBhZGRpbmdZOjEwLCByb3dzOiBbIHtjc3M6J3dlYml4X3NoYWRvd19tZWRpdW0nLCByb3dzOltoZWFkZXIsIG1lbnUsIGxvZ291dF19IF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3Jlc2l6ZXInLCB3aWR0aDogNSB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICd3aWRlJywgcGFkZGluZ1k6IDEwLCBwYWRkaW5nWDogNSwgcm93czogW1xyXG5cdFx0XHRcdFx0XHR7ICRzdWJ2aWV3OiB0cnVlIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCh7Y3VycmVudERhdGV9KS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tIFwid2ViaXgtamV0XCI7XHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4uL2NvbW1vbi9saWJyYXJ5JztcclxuaW1wb3J0IEJvb2tDYXJkIGZyb20gJy4vYm9va0NhcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGliTGlicmFyeSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcdFxyXG5cclxuXHRcdGNvbnN0IGxpYnJhcnlDb25maWcgPSB7XHJcblx0XHRcdHJvbGU6ICdsaWJyYXJpYW4nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZEJvb2tCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0FkZCBib29rJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdGxpYnJhcnkuYWRkQm9vaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxpYnJhcnkgPSBuZXcgTGlicmFyeSh0aGlzLmFwcCwgbGlicmFyeUNvbmZpZywgQm9va0NhcmQpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0bGlicmFyeSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb2xzOiBbe30sYWRkQm9va0J0bix7fV1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5QYWdlIGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBsb2dpbkZvcm0gPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ2xvZ2luRm9ybScsXHJcblx0XHRcdHdpZHRoOiAzMDAsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVXNlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIHR5cGU6ICdwYXNzd29yZCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA1LCBjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHsgdmlldzogJ2J1dHRvbicsIGxvY2FsSWQ6ICdsb2dpbkJ0bicsIHZhbHVlOiAnTG9naW4nLCB0eXBlOiAnZm9ybScgfSxcclxuXHRcdFx0XHRcdFx0eyB2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdDYW5jZWwnIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbGluayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnQ3JlYXRlIGFuIGFjY291bnQnLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2hvdygnL3JlZ2lzdGVyJyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHR7fSxcclxuXHRcdFx0XHR7XHRcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdGxvZ2luRm9ybSxcclxuXHRcdFx0XHRcdFx0bGluayxcclxuXHRcdFx0XHRcdFx0e31cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHt9XHJcblx0XHRcdF1cdFx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy4kJCgnbG9naW5CdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuJCQoJ2xvZ2luRm9ybScpLmdldFZhbHVlcygpO1xyXG5cdFx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9naW4odmFsdWVzKS50aGVuKChyZXNwb25zZSkgPT4ge1x0XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRjb25zdCB1c2VyRGF0YSA9IHJlc3BvbnNlLmpzb24oKS51c2VyO1xyXG5cdFx0XHRcdFx0Y29uc3QgaWQgPSB1c2VyRGF0YS5pZDtcclxuXHJcblx0XHRcdFx0XHRzd2l0Y2ggKHVzZXJEYXRhLnJvbGVfbmFtZSkge1xyXG5cdFx0XHRcdFx0XHRjYXNlICdhZG1pbic6IFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvdyhgYWRtaW4uaW5kZXg/aWQ9JHtpZH1gKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnbGlicmFyaWFuJzogXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zaG93KGBsaWJyYXJpYW4uaW5kZXg/aWQ9JHtpZH0vbGlicmFyaWFuLmxpYnJhcnlgKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAncmVhZGVyJzogXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zaG93KGByZWFkZXIuaW5kZXg/aWQ9JHtpZH0vcmVhZGVyLm1haW5gKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR3ZWJpeC5tZXNzYWdlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHRcdFx0XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IGxpa2VzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2xpa2VzJztcclxuaW1wb3J0IHt0b2dnbGVFbGVtZW50LCBmb3JtYXREYXRlfSBmcm9tICcuLi8uLi9zY3JpcHRzJzsgXHJcbmltcG9ydCB7RFVNTVlDT1ZFUiwgU1VDQ0VTU30gZnJvbSAnLi4vLi4vY29uc3RzJzsgXHJcbmltcG9ydCBmaWxlc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9maWxlcyc7XHJcbmltcG9ydCBjb21tZW50c01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9jb21tZW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rQ2FyZCBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRjb25zdCBib29rQ292ZXIgPSB7XHJcblx0XHRcdGxvY2FsSWQ6ICdib29rQ292ZXInLFxyXG5cdFx0XHR3aWR0aDogMTIwLFxyXG5cdFx0XHRoZWlnaHQ6IDE4MCxcclxuXHRcdFx0Y3NzOiAnYm9va19jb3ZlcicsXHJcblx0XHRcdHRlbXBsYXRlOiAodXJsKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dXJsfSlcIiA+PC9kaXY+YDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBib29rQ2FyZCA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDYXJkUmVhZGVyJyxcdFx0XHRcclxuXHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1RpdGxlJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYm9va190aXRsZScsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQXV0aG9yJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYXV0aG9yX25hbWUnLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0dlbnJlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2dlbnJlcycsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQ291bnRyeScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2NvdW50cnlfb2ZfcHVibGljYXRpb24nLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1B1Ymxpc2hpbmcgaG91c2UnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdwdWJsaXNoaW5nX2hvdXNlJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdmFpbGFibGUgY29waWVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYXZhaWxhYmxlX2NvcGllcycsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFnZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdudW1iZXJfb2ZfcGFnZXMnLCByZWFkb25seTogdHJ1ZSB9XHJcblx0XHRcdF1cdFx0XHRcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXZhaWxhYmxlVGV4dEZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiAnYWN0aXZlTGlzdCcsXHJcblx0XHRcdGxvY2FsSWQ6ICdhdmFpbGFibGVUZXh0RmlsZXMnLFxyXG5cdFx0XHR0ZW1wbGF0ZTogXCIjbmFtZSNcIiArXHJcblx0XHRcdFx0XHRcIjxzcGFuIGNsYXNzPSdsaXN0X2J1dHRvbic+PGkgY2xhc3MgPSAnZmFzIGZhLWRvd25sb2FkJz48L2k+PC9zcGFuPlwiLFxyXG5cdFx0XHRvbjoge1xyXG5cdFx0XHRcdG9uSXRlbUNsaWNrOiAoaWQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGJvb2tOYW1lID0gdGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykuZ2V0SXRlbShpZCkubmFtZTtcclxuXHJcblx0XHRcdFx0XHRmaWxlc01vZGVsLmRvd25sb2FkSXRlbShpZCkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHdlYml4Lmh0bWwuZG93bmxvYWQocmVzLCBib29rTmFtZSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXZhaWxhYmxlQXVkaW9GaWxlcyA9IHtcclxuXHRcdFx0dmlldzogXCJhY3RpdmVMaXN0XCIsXHJcblx0XHRcdGxvY2FsSWQ6IFwiYXZhaWxhYmxlQXVkaW9GaWxlc1wiLFxyXG5cdFx0XHR0eXBlOntcclxuXHRcdFx0XHRoZWlnaHQ6MTAwXHJcblx0XHRcdH0sXHJcblx0XHRcdHRlbXBsYXRlOiBcIiNuYW1lIzxhdWRpbyBjb250cm9scyBzcmM9J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdWRpby8jaWQjJz48L2F1ZGlvPlwiXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG9yZGVyQm9vayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGxvY2FsSWQ6ICdvcmRlckJvb2snLFxyXG5cdFx0XHR0eXBlOiAnaHRtbGJ1dHRvbicsXHJcblx0XHRcdGxhYmVsOiAnPGkgY2xhc3M9XCJmYXIgZmEtaGFuZC1wYXBlclwiPjwvaT4gT3JkZXInLFxyXG5cdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLm9yZGVyQm9vaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGRvd25sb2FkQm9vayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGxvY2FsSWQ6ICdkb3dubG9hZEJvb2snLFxyXG5cdFx0XHR0eXBlOiAnaWNvbicsXHJcblx0XHRcdGljb246ICdmYXMgZmEtZG93bmxvYWQnLFxyXG5cdFx0XHR3aWR0aDogNjAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMub3JkZXJCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbGlrZUJvb2sgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRsb2NhbElkOiAnbGlrZUJ1dHRvbicsXHJcblx0XHRcdGNzczogJ2xpa2VfYnV0dG9uJyxcclxuXHRcdFx0dHlwZTogJ2ljb24nLCBcclxuXHRcdFx0aWNvbjogJ2ZhciBmYS1oZWFydCcsXHJcblx0XHRcdHdpZHRoOiA0NSxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5saWtlQm9vaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHRvZ2dsZUNvbW1lbnRzQnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ2NvbW1lbnRCdXR0b24nLFxyXG5cdFx0XHR0eXBlOiAnaHRtbGJ1dHRvbicsXHJcblx0XHRcdGxhYmVsOiAnQ29tbWVudHMgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiPicsXHJcblx0XHRcdHdpZHRoOiAxMjAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMudG9nZ2xlQ29tbWVudHMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBjb21tZW50cyA9IHtcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0e30sIHRvZ2dsZUNvbW1lbnRzQnRuLCB7fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bG9jYWxJZDogJ2NvbW1lbnRMYXlvdXQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlLFxyXG5cdFx0XHRcdFx0cm93czogW11cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3BvcHVwJyxcclxuXHRcdFx0cG9zaXRpb246J2NlbnRlcicsXHJcblx0XHRcdGJvZHk6e1xyXG5cdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdGJvb2tDb3ZlciwgYm9va0NhcmQsIGF2YWlsYWJsZVRleHRGaWxlcywgYXZhaWxhYmxlQXVkaW9GaWxlcyxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nWDogMTUsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMTAsXHJcblx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHRvcmRlckJvb2ssIGRvd25sb2FkQm9vaywge30sIGxpa2VCb29rXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21tZW50c1xyXG5cdFx0XHRcdF0gXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cdFxyXG5cdHNob3dQb3B1cChib29rKSB7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24gPSB0aGlzLiQkKCdsaWtlQnV0dG9uJyk7XHJcblx0XHR0aGlzLmZvcm0gPSB0aGlzLiQkKCdib29rQ2FyZFJlYWRlcicpO1xyXG5cdFx0dGhpcy5maWxlc0xpc3QgPSB0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKTtcclxuXHRcdHRoaXMudG9nZ2xlQ29tbWVudHNCdG4gPSB0aGlzLiQkKCdjb21tZW50QnV0dG9uJyk7XHJcblx0XHR0aGlzLmNvbW1lbnRMYXlvdXQgPSB0aGlzLiQkKCdjb21tZW50TGF5b3V0Jyk7XHJcblx0XHR0aGlzLmJvb2sgPSBib29rO1xyXG5cdFx0dGhpcy5ib29rSWQgPSBib29rLmlkO1xyXG5cdFx0dGhpcy51c2VySWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2xlYXJGb3JtKCk7XHJcblx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKGJvb2spO1xyXG5cdFx0dGhpcy4kJCgnYm9va0NvdmVyJykuc2V0VmFsdWVzKGJvb2suY292ZXJfcGhvdG8gfHwgRFVNTVlDT1ZFUik7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24uZGVmaW5lKCdiYWRnZScsIGJvb2suY291bnRfbGlrZXMgfHwgJzAnKTtcclxuXHRcdHRoaXMuZ2V0RmlsZXMoKTtcclxuXHRcdHRoaXMuZ2V0Q29tbWVudHMoKTtcdFx0XHJcblx0XHRcclxuXHRcdHRvZ2dsZUVsZW1lbnQoYm9vay5ib29rX2ZpbGUsIHRoaXMuJCQoJ2Rvd25sb2FkQm9vaycpKTtcclxuXHRcdHRvZ2dsZUVsZW1lbnQoYm9vay5hdmFpbGFibGVfY29waWVzLCB0aGlzLiQkKCdvcmRlckJvb2snKSk7XHJcblx0XHR0aGlzLnRvZ2dsZUxpa2UoYm9vay51c2VyX2lkID09IHRoaXMudXNlcklkKTtcclxuXHJcblx0XHR0aGlzLmdldFJvb3QoKS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHRnZXRGaWxlcygpIHtcclxuXHRcdGZpbGVzTW9kZWwuZ2V0SXRlbXModGhpcy5ib29rSWQpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCBmaWxlc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0XHRjb25zdCB0ZXh0RmlsZXMgPSBbXTtcclxuXHRcdFx0Y29uc3QgYXVkaW9GaWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0ZmlsZXNBcnIuZm9yRWFjaCgoZmlsZSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaChmaWxlLmRhdGFfdHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAndGV4dCc6IFxyXG5cdFx0XHRcdFx0XHR0ZXh0RmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdhdWRpbyc6IFxyXG5cdFx0XHRcdFx0XHRhdWRpb0ZpbGVzLnB1c2goZmlsZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLnBhcnNlKHRleHRGaWxlcyk7XHJcblx0XHRcdHRoaXMuJCQoJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnKS5wYXJzZShhdWRpb0ZpbGVzKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b3JkZXJCb29rKCkge1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRsaWtlQm9vaygpIHtcclxuXHRcdGlmKHRoaXMuYm9vay51c2VyX2lkID09IHRoaXMudXNlcklkKSB7XHJcblx0XHRcdGxpa2VzTW9kZWwucmVtb3ZlTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdHVzID0gcmVzcG9uc2UuanNvbigpLnNlcnZlclN0YXR1cztcclxuXHRcdFx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRcdFx0dGhpcy51bnNldExpa2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0bGlrZXNNb2RlbC5hZGRMaWtlKHRoaXMudXNlcklkLCB0aGlzLmJvb2tJZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0XHRcdGlmKHN0YXR1cyA9PSBTVUNDRVNTKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldExpa2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVx0XHRcclxuXHR9XHRcclxuXHJcblx0dG9nZ2xlTGlrZShjb25kaXRpb24pIHtcclxuXHRcdGlmKGNvbmRpdGlvbikge1xyXG5cdFx0XHR0aGlzLnNldExpa2UoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVuc2V0TGlrZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0TGlrZSgpIHtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5kZWZpbmUoJ2ljb24nLCAnZmFzIGZhLWhlYXJ0Jyk7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24ucmVmcmVzaCgpO1xyXG5cdH1cclxuXHJcblx0dW5zZXRMaWtlKCkge1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnaWNvbicsICdmYXIgZmEtaGVhcnQnKTtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5yZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHJcblx0YWRkQ2hpbGRDb21tZW50cyhhcnIsIGl0ZW0pIHtcclxuXHRcdGxldCBhcnJDb3B5ID0gWy4uLmFycl07XHJcblxyXG5cdFx0YXJyLmZvckVhY2goKGVsLCBpKSA9PiB7XHJcblx0XHRcdGlmIChlbC5jb21tZW50X2lkID09PSBpdGVtLmlkKSB7XHJcblx0XHRcdFx0Y29uc3QgY29tbWVudEl0ZW0gPSB0aGlzLmNvbXBvc2VDb21tZW50KGVsKTtcclxuXHRcdFx0XHQkJChgY29tbWVudF8ke2l0ZW0uaWR9YCkuYWRkVmlldyhjb21tZW50SXRlbSwgMSk7XHJcblx0XHRcdFx0YXJyQ29weSA9IGFyckNvcHkuc3BsaWNlKGksIDEpO1xyXG5cclxuXHRcdFx0XHR0aGlzLmFkZENoaWxkQ29tbWVudHMoYXJyQ29weSwgaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29tbWVudHMoKSB7XHJcblx0XHR0aGlzLmNvbW1lbnRzR290ID0gdHJ1ZTtcclxuXHRcdGNvbW1lbnRzTW9kZWwuZ2V0SXRlbXModGhpcy5ib29rSWQpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCBjb21tZW50c0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0XHRjb21tZW50c0Fyci5mb3JFYWNoKChjb21tZW50LCBpKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgY29tbWVudEl0ZW0gPSB0aGlzLmNvbXBvc2VDb21tZW50KGNvbW1lbnQpO1xyXG5cclxuXHRcdFx0XHRpZighY29tbWVudC5jb21tZW50X2lkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbW1lbnRMYXlvdXQuYWRkVmlldyhjb21tZW50SXRlbSwgaSk7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENoaWxkQ29tbWVudHMoY29tbWVudHNBcnIsIGNvbW1lbnQpO1xyXG5cdFx0XHRcdH1cdFx0XHRcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUNvbW1lbnRzKCkge1xyXG5cdFx0Y29uc3QgaXNWaXNpYmxlID0gdGhpcy5jb21tZW50TGF5b3V0LmlzVmlzaWJsZSgpO1xyXG5cdFx0aWYoaXNWaXNpYmxlKSB7XHJcblx0XHRcdHRoaXMudG9nZ2xlQ29tbWVudHNCdG4uc2V0VmFsdWUoJ0NvbW1lbnRzIDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+Jyk7XHJcblx0XHRcdHRoaXMuY29tbWVudExheW91dC5oaWRlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy50b2dnbGVDb21tZW50c0J0bi5zZXRWYWx1ZSgnQ29tbWVudHMgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtdXBcIj48L2k+Jyk7XHJcblx0XHRcdGlmKCF0aGlzLmNvbW1lbnRzR290KSB7XHJcblx0XHRcdFx0dGhpcy5nZXRDb21tZW50cygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY29tbWVudExheW91dC5zaG93KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb21wb3NlQ29tbWVudChjb21tZW50KSB7XHJcblx0XHRjb25zdCBjb21tZW50RGF0ZSA9IGZvcm1hdERhdGUoY29tbWVudC5jb21tZW50X2RhdGUpO1xyXG5cdFx0Y29uc3QgY29tbWVudEF1dGhvciA9IGAke2NvbW1lbnQudXNlcl9uYW1lfSAke2NvbW1lbnQudXNlcl9zdXJuYW1lfWA7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aWQ6IGBjb21tZW50XyR7Y29tbWVudC5pZH1gLFxyXG5cdFx0XHRjc3M6ICdjb21tZW50X2l0ZW0nLFxyXG5cdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAgYDxkaXYgY2xhc3M9XCJjb21tZW50X2luZm9cIj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzID0gXCJjb21tZW50X2F1dGhvclwiPiR7Y29tbWVudEF1dGhvcn08L2Rpdj5cXFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzID0gXCJjb21tZW50X2RhdGVcIj4ke2NvbW1lbnREYXRlfTwvZGl2PlxcXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+JHtjb21tZW50LmNvbnRlbnR9PC9kaXY+YFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHJcblx0Y2xlYXJGb3JtICgpe1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyKCk7XHJcblx0XHR0aGlzLmZpbGVzTGlzdC5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnKS5jbGVhckFsbCgpO1xyXG5cclxuXHRcdGNvbnN0IGNvbW1lbnRzID0gdGhpcy5jb21tZW50TGF5b3V0LmdldENoaWxkVmlld3MoKTtcclxuXHJcblx0XHRpZihjb21tZW50cykge1xyXG5cdFx0XHRjb25zdCBjb21tZW50c0NvcHkgPSBbLi4uY29tbWVudHNdO1xyXG5cclxuXHRcdFx0Y29tbWVudHNDb3B5LmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNvbW1lbnRMYXlvdXQucmVtb3ZlVmlldyhjb21tZW50KTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi8uLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgdGVtcGxhdGU6dGhpcy5hcHAuY29uZmlnLm5hbWUsIGNzczond2ViaXhfaGVhZGVyIGFwcF9oZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG1lbnUgPSB7XHJcblx0XHRcdHZpZXc6J21lbnUnLCBcclxuXHRcdFx0Y3NzOidhcHBfbWVudScsXHJcblx0XHRcdHdpZHRoOjE4MCwgbGF5b3V0Oid5Jywgc2VsZWN0OnRydWUsXHJcblx0XHRcdHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cIndlYml4X2ljb24gI2ljb24jXCI+PC9zcGFuPiAjdmFsdWUjICcsXHJcblx0XHRcdHZhbHVlOiAnbWFpbicsXHJcblx0XHRcdGRhdGE6W1xyXG5cdFx0XHRcdHsgdmFsdWU6J015IGJvb2tzJywgaWQ6J21haW4nLCBpY29uOidmYXMgZmEtYm9va21hcmsnIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonTGlicmFyeScsIGlkOidsaWJyYXJ5JywgIGljb246J2ZhcyBmYS1ib29rLXJlYWRlcicgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidUb3BzJywgaWQ6J3RvcHMnLCAgaWNvbjonZmFzIGZhLWxpc3QnIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonU2V0dGluZ3MnLCBpZDonc2V0dGluZ3MnLCAgaWNvbjonZmFzIGZhLWNvZycgfSxcclxuXHRcdFx0XSxcclxuXHRcdFx0b246e1xyXG5cdFx0XHRcdG9uTWVudUl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB1c2VyX2lkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5hcHAuc2hvdyhgcmVhZGVyLmluZGV4P2lkPSR7dXNlcl9pZH0vcmVhZGVyLiR7aWR9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHR0eXBlOidjbGVhbicsIHBhZGRpbmdYOjUsIGNzczonYXBwX2xheW91dCcsIFxyXG5cdFx0XHRjb2xzOltcclxuXHRcdFx0XHR7IHBhZGRpbmdYOjUsIHBhZGRpbmdZOjEwLCByb3dzOiBbIHtjc3M6J3dlYml4X3NoYWRvd19tZWRpdW0nLCByb3dzOltoZWFkZXIsIG1lbnUsIGxvZ291dF19IF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3Jlc2l6ZXInLCB3aWR0aDogNSB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICd3aWRlJywgcGFkZGluZ1k6IDEwLCBwYWRkaW5nWDogNSwgcm93czogW1xyXG5cdFx0XHRcdFx0XHR7ICRzdWJ2aWV3OiB0cnVlIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCh7Y3VycmVudERhdGV9KS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tIFwid2ViaXgtamV0XCI7XHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4uL2NvbW1vbi9saWJyYXJ5JztcclxuaW1wb3J0IEJvb2tDYXJkIGZyb20gJy4vYm9va0NhcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVhZGVyTGlicmFyeSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGxpYnJhcnlDb25maWcgPSB7XHJcblx0XHRcdHJvbGU6ICdyZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRuZXcgTGlicmFyeSh0aGlzLmFwcCwgbGlicmFyeUNvbmZpZywgQm9va0NhcmQpXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgdGVzdFJlc3VsdHMgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRpZDogJ2dyb3VwTGlzdCcsXHJcblx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0FkZCcsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICd7Y29tbW9uLnRyYXNoSWNvbigpfSdcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBidXR0b24gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRpZDogJ2FkZEdyb3VwJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQnLFxyXG5cdFx0XHR0eXBlOidmb3JtJyxcclxuXHRcdFx0aW5wdXRXaWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge31cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdHJvd3M6IFt0ZXN0UmVzdWx0cywgYnV0dG9uXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHQvLyAkJCgnZ3JvdXBMaXN0JykucGFyc2UoZ3JvdXBzKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHVzZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzJztcclxuaW1wb3J0IHt1cGRhdGVJdGVtfSBmcm9tICcuLi8uLi9zY3JpcHRzJzsgXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRjb25zdCBidXR0b24gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRpZDogJ3NhdmVDaGFuZ2VzJyxcclxuXHRcdFx0dmFsdWU6ICdTYXZlJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRpbnB1dFdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVzZXJEYXRhID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICd1c2VyRGF0YUZvcm0nLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBuYW1lOiAnaWQnLCBsb2NhbElkOiAndXNlcl9pZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0ZpcnN0IG5hbWUnLG5hbWU6ICd1c2VyX25hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnTGFzdCBuYW1lJyxuYW1lOiAndXNlcl9zdXJuYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bhc3Nwb3J0IElEJyxuYW1lOiAncGFzc3BvcnRfSUQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAnZGF0ZXBpY2tlcicsIGxhYmVsOiAnQmlydGggZGF0ZScsbmFtZTogJ2JpcnRoX2RhdGUnLCBsb2NhbElkOiAnYmlydGhfZGF0ZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBZGRyZXNzJyxuYW1lOiAnYWRkcmVzcycsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQaG9uZScsbmFtZTogJ3Bob25lX251bWJlcnMnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRW1haWwnLG5hbWU6ICdlbWFpbCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHRidXR0b25cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbdXNlckRhdGFdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IGlkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cclxuXHRcdHVzZXJzTW9kZWwuZ2V0SXRlbShpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCB1c2VyRGF0YSA9IGRhdGEuanNvbigpWzBdO1xyXG5cdFx0XHR1c2VyRGF0YS5iaXJ0aF9kYXRlID0gbmV3IERhdGUgKHVzZXJEYXRhLmJpcnRoX2RhdGUpO1xyXG5cdFx0XHR0aGlzLiQkKCd1c2VyRGF0YUZvcm0nKS5zZXRWYWx1ZXModXNlckRhdGEpO1xyXG5cdFx0fSk7XHRcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtICgpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLiQkKCd1c2VyRGF0YUZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdGNvbnN0IHN1Y2Nlc3NBY3Rpb24gPSB0aGlzLndlYml4Lm1lc3NhZ2UoJ05ldyBkYXRhIHNhdmVkJyk7XHJcblx0XHR1cGRhdGVJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHN1Y2Nlc3NBY3Rpb24pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tIFwid2ViaXgtamV0XCI7XHJcbmltcG9ydCBib29rc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9ib29rcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib29rVG9wcyBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmlldzogJ2xpc3QnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDI1MCxcclxuXHRcdFx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0XHRcdGRhdGE6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd09sZGVzdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ09sZGVzdCBib29rcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd05ld2VzdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ05ld2VzdCBib29rcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd01vc3RQYWdlc0Jvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ01vc3QgcGFnZXMgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dCb29rc1dpdGhMb25nTmFtZXMnLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAnQm9va3Mgd2l0aCBsb25nZXN0IG5hbWVzJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdzaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MnLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAnQXV0aG9ycyB3aXRoIG1vc3QgYm9va3MnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRvbjoge1xyXG5cdFx0XHRcdFx0XHRvbkl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoKGlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93T2xkZXN0Qm9va3MnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dPbGRlc3RCb29rcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dOZXdlc3RCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd05ld2VzdEJvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd01vc3RQYWdlc0Jvb2tzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93TW9zdFBhZ2VzQm9va3MoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93Qm9va3NXaXRoTG9uZ05hbWVzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93Qm9va3NXaXRoTG9uZ05hbWVzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Jvb2tzVG9wJyxcclxuXHRcdFx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZ3JpZCA9ICQkKCdib29rc1RvcCcpO1xyXG5cdFx0Ym9va3NNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRsZXQgYm9va3NBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cdFx0XHRib29rc0FyciA9IGJvb2tzQXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0XHRlbC55ZWFyX29mX3B1YmxpY2F0aW9uID0gbmV3IERhdGUoZWwueWVhcl9vZl9wdWJsaWNhdGlvbik7XHJcblx0XHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5ib29rc0FyciA9IGJvb2tzQXJyO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5kZWZhdWx0Q29uZmlnID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdib29rX3RpdGxlJyxcclxuXHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdGhlYWRlcjogJ1RpdGxlJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdhdXRob3JfbmFtZScsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRoZWFkZXI6ICdBdXRob3InXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2dlbnJlcycsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdGhlYWRlcjogJ0dlbnJlcydcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdGhlYWRlcjogJ0NvdW50cnknXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ3llYXJfb2ZfcHVibGljYXRpb24nLFxyXG5cdFx0XHRcdHNvcnQ6ICdkYXRlJyxcclxuXHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRmb3JtYXQ6IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVlcIiksXHJcblx0XHRcdFx0aGVhZGVyOiAnWWVhcidcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnbnVtYmVyX29mX3BhZ2VzJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdQYWdlcycsXHJcblx0XHRcdFx0d2lkdGg6IDYwXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRzaG93T2xkZXN0Qm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gYS55ZWFyX29mX3B1YmxpY2F0aW9uIC0gYi55ZWFyX29mX3B1YmxpY2F0aW9uO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93TmV3ZXN0Qm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4gYi55ZWFyX29mX3B1YmxpY2F0aW9uIC0gYS55ZWFyX29mX3B1YmxpY2F0aW9uKTtcclxuXHRcdHRoaXMuc2hvd1Jlc3VsdHMoZGF0YSwgdGhpcy5kZWZhdWx0Q29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHNob3dNb3N0UGFnZXNCb29rcygpIHtcclxuXHRcdGxldCBkYXRhID0gWy4uLnRoaXMuYm9va3NBcnJdO1xyXG5cdFx0ZGF0YS5zb3J0KChhLCBiKSA9PiAgYi5udW1iZXJfb2ZfcGFnZXMgLSBhLm51bWJlcl9vZl9wYWdlcyk7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93Qm9va3NXaXRoTG9uZ05hbWVzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+IGIuYm9va190aXRsZS5sZW5ndGggLSBhLmJvb2tfdGl0bGUubGVuZ3RoKTtcclxuXHRcdHRoaXMuc2hvd1Jlc3VsdHMoZGF0YSwgdGhpcy5kZWZhdWx0Q29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHNob3dBdXRob3JzV2l0aE1vc3RCb29rcygpIHtcclxuXHRcdGxldCBhdXRob3JzID0gW107XHJcblx0XHR0aGlzLmJvb2tzQXJyLmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdGNvbnN0IGluZGV4ID0gYXV0aG9ycy5maW5kSW5kZXgoYXV0aG9yID0+IGF1dGhvci5uYW1lID09IGVsLmF1dGhvcl9uYW1lKTtcclxuXHRcdFx0aWYgKGluZGV4ID09PSAtMSkge1xyXG5cdFx0XHRcdGF1dGhvcnMucHVzaCh7bmFtZTogZWwuYXV0aG9yX25hbWUsIGJvb2tzQ291bnQ6IDF9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRhdXRob3JzW2luZGV4XS5ib29rc0NvdW50Kys7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGF1dGhvcnMgPSBhdXRob3JzLnNvcnQoKGEsIGIpID0+IGIuYm9va3NDb3VudCAtIGEuYm9va3NDb3VudCk7XHJcblxyXG5cdFx0Y29uc3QgY29sdW1ucyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnbmFtZScsXHJcblx0XHRcdFx0aGVhZGVyOiAnTmFtZScsXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2Jvb2tzQ291bnQnLFxyXG5cdFx0XHRcdGhlYWRlcjogJ0Jvb2tzIGNvdW50JyxcclxuXHRcdFx0XHRmaWxsc3BhY2U6IDFcclxuXHRcdFx0fVxyXG5cdFx0XTtcclxuXHRcdHRoaXMuc2hvd1Jlc3VsdHMoYXV0aG9ycywgY29sdW1ucyk7XHJcblx0fVxyXG5cclxuXHRzaG93UmVzdWx0cyhkYXRhLCBjb2x1bW5zKSB7XHJcblx0XHR0aGlzLmdyaWQuZGVmaW5lKCdjb2x1bW5zJywgY29sdW1ucyk7XHJcblx0XHR0aGlzLmdyaWQucmVmcmVzaENvbHVtbnMoKTtcclxuXHRcdGRhdGEgPSBkYXRhLnNsaWNlKDAsIDEwKTtcclxuXHRcdHRoaXMuZ3JpZC5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy5ncmlkLnBhcnNlKGRhdGEpO1xyXG5cdFx0dGhpcy5ncmlkLnNob3coKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJQYWdlIGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCByZWdpc3RlckZvcm0gPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ3JlZ2lzdGVyRm9ybScsXHJcblx0XHRcdHdpZHRoOiAzMDAsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVWVybmFtZScsIG5hbWU6ICd1c2VybmFtZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgdHlwZTogJ3Bhc3N3b3JkJywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdwYXNzd29yZCcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW46IDUsIGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgbG9jYWxJZDogJ3JlZ2lzdGVyQnRuJywgdmFsdWU6ICdSZWdpc3RlcicsIHR5cGU6ICdmb3JtJ1x0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0cmVnaXN0ZXJGb3JtLFxyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHt9XHJcblx0XHRcdF1cdFx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy4kJCgncmVnaXN0ZXJCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuJCQoJ3JlZ2lzdGVyRm9ybScpLmdldFZhbHVlcygpO1xyXG5cdFx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHRcdGF1dGhvcml6YXRpb24ucmVnaXN0ZXIodmFsdWVzKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zdGF0dXM7XHJcblx0XHRcdFx0Y29uc3QgaWQgPSByZXNwb25zZS5qc29uKCkuaWQ7XHJcblx0XHRcdFx0aWYgKHN0YXR1cyA9PT0gMikge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93KGByZWFkZXIuaW5kZXg/aWQ9JHtpZH0vcmVhZGVyLm1haW5gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRpZihyZXNwb25zZS5qc29uKCkucmVhc29uID09PSAndXNlckV4aXN0Jykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0d2ViaXgubWVzc2FnZShyZXNwb25zZS5qc29uKCkuZGF0YSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=