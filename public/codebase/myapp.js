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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BooksModel = function () {
	function BooksModel() {
		_classCallCheck(this, BooksModel);

		this._data = [];
		this._url = 'http://localhost:3000/books/';
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

/***/ "./sources/models/files.js":
/*!*********************************!*\
  !*** ./sources/models/files.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilesModel = function () {
	function FilesModel() {
		_classCallCheck(this, FilesModel);

		this._url = 'http://localhost:3000/files/';
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LikesModel = function () {
	function LikesModel() {
		_classCallCheck(this, LikesModel);

		this._data = [];
		this._url = 'http://localhost:3000/likes/';
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersModel = function () {
	function UsersModel() {
		_classCallCheck(this, UsersModel);

		this._url = 'http://localhost:3000/users/';
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
/*! exports provided: toggleElement, addItem, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleElement", function() { return toggleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
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
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/books */ "./sources/models/books.js");
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

	Library.prototype.init = function init() {
		this.grid = $$('dt_library');

		switch (this.libraryConfig.role) {
			case 'reader':
				this.grid.getColumnConfig('editCol').hidden = true;
				this.grid.getColumnConfig('removeCol').hidden = true;
				break;
			case 'librarian':
				this.grid.getColumnConfig('viewCol').hidden = true;
				break;
		}
		this.grid.refreshColumns();
		this.getData();
		this._bookCard = this.ui(this.bookCard);
	};

	Library.prototype.getData = function getData() {
		var _this3 = this;

		var user_id = this.getParam("id", true);
		_models_books__WEBPACK_IMPORTED_MODULE_1__["default"].getDataFromServer(user_id).then(function (dbData) {
			var booksArr = dbData.json();

			booksArr = booksArr.map(function (el) {
				el.year_of_publication = new Date(el.year_of_publication);
				return el;
			});

			_this3.grid.parse(booksArr);
			_this3.booksArr = booksArr;
		});
	};

	Library.prototype.showBookCard = function showBookCard(id) {
		var book = this.booksArr.find(function (el) {
			return el.id == id;
		});
		this._bookCard.showPopup(book);
	};

	Library.prototype.removeBook = function removeBook(id) {
		_models_books__WEBPACK_IMPORTED_MODULE_1__["default"].removeItem(id);
		return this.grid.remove(id);
	};

	Library.prototype.addBook = function addBook() {
		this._bookCard.showPopup();
	};

	return Library;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

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

		return {
			view: 'popup',
			position: 'center',
			body: {
				rows: [bookCover, bookCard, availableTextFiles, availableAudioFiles, {
					paddingY: 10,
					paddingX: 15,
					margin: 10,
					cols: [orderBook, downloadBook, {}, likeBook]
				}]
			}
		};
	};

	BookCard.prototype.showPopup = function showPopup(book) {
		var _this3 = this;

		this.likeButton = this.$$('likeButton');
		this.form = this.$$('bookCardReader');
		this.filesList = this.$$('availableTextFiles');
		this.book = book;
		this.bookId = book.id;
		this.userId = this.getParam("id", true);

		this.clearForm();
		this.form.setValues(book);
		this.$$('bookCover').setValues(book.cover_photo || _consts__WEBPACK_IMPORTED_MODULE_3__["DUMMYCOVER"]);
		this.likeButton.define('badge', book.count_likes || '0');

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
		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(book.book_file, this.$$('downloadBook'));
		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(book.available_copies, this.$$('orderBook'));
		this.toggleLike(book.user_id == this.userId);

		this.getRoot().show();
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

	BookCard.prototype.clearForm = function clearForm() {
		this.form.clear();
		this.filesList.clearAll();
		this.$$('availableTextFiles').clearAll();
		this.$$('availableAudioFiles').clearAll();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYml4LWpldC9kaXN0L2VzNi9qZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9hdXRob3JpemF0aW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvY29uc3RzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbG9jYWxlcyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvYm9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9teWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvYWRtaW4vdXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9jb21tb24vbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9ib29rQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvYm9va0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL3RvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJKZXRCYXNlIiwid2ViaXgiLCJ3ZWJpeEpldCIsIl9ldmVudHMiLCJfc3VicyIsIl9kYXRhIiwiZ2V0Um9vdCIsIl9yb290IiwiZGVzdHJ1Y3RvciIsIl9kZXRhY2hFdmVudHMiLCJfZGVzdHJveVN1YnMiLCJfY29udGFpbmVyIiwiYXBwIiwiX3BhcmVudCIsInNldFBhcmFtIiwiaWQiLCJ2YWx1ZSIsInVybCIsIl9zZWdtZW50IiwidXBkYXRlIiwic2hvdyIsImdldFBhcmFtIiwicGFyZW50IiwidmlldyIsImdldFBhcmVudFZpZXciLCJnZXRVcmwiLCJzdWJ1cmwiLCJnZXRVcmxTdHJpbmciLCJ0b1N0cmluZyIsIiQkIiwicm9vdCIsInF1ZXJ5VmlldyIsIm9iaiIsImNvbmZpZyIsImxvY2FsSWQiLCIkc2NvcGUiLCJvbiIsIm5hbWUiLCJjb2RlIiwiYXR0YWNoRXZlbnQiLCJwdXNoIiwiY29udGFpbnMiLCJrZXkiLCJraWQiLCJnZXRTdWJWaWV3Iiwic3ViIiwiZ2V0U3ViVmlld0luZm8iLCJzdWJ2aWV3IiwicG9wdXAiLCJldmVudHMiLCJpIiwibGVuZ3RoIiwiZGV0YWNoRXZlbnQiLCJzdWJWaWV3IiwiX2luaXRfdXJsX2RhdGEiLCJjdXJyZW50IiwiZXh0ZW5kIiwicGFyYW1zIiwiX2dldERlZmF1bHRTdWIiLCJkZWZhdWx0IiwiYnJhbmNoIiwiY2hpbGQiLCJfcm91dGVkX3ZpZXciLCJwYXJzZSIsInN1YnN0ciIsInBhcnRzIiwic3BsaXQiLCJjaHVua3MiLCJ0ZXN0IiwicmVzdWx0IiwicG9zIiwiaW5kZXhPZiIsInBhcmFtIiwiZGNodW5rIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFnZSIsImlzTmV3IiwidXJsMnN0ciIsInN0YWNrIiwiY2h1bmsiLCJvYmoyc3RyIiwiam9pbiIsInN0ciIsImVuY29kZVVSSUNvbXBvbmVudCIsIlJvdXRlIiwicm91dGUiLCJpbmRleCIsIl9uZXh0IiwicGF0aCIsIm5leHQiLCJzbGljZSIsInNoaWZ0IiwicmVmcmVzaCIsIl9qb2luIiwia2lkcyIsIm9sZCIsImNvbmNhdCIsImFwcGVuZCIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJyZWRpcmVjdCIsImNvbmZpcm0iLCJyZXNvbHZlIiwiY2FsbEV2ZW50IiwiY2F0Y2giLCJ0aGVuIiwic2l6ZSIsIm4iLCJKZXRWaWV3IiwiX2NoaWxkcmVuIiwidWkiLCJjb250YWluZXIiLCJqZXR2aWV3IiwiY3JlYXRlVmlldyIsInJlbmRlciIsInRhcmdldCIsIl9yZW5kZXJGcmFtZUxvY2siLCJfc2hvdyIsInNlZ21lbnQiLCJfdXJsQ2hhbmdlIiwibGlua1JvdXRlciIsImdldFJvdXRlciIsInNldCIsInNpbGVudCIsImluaXQiLCJfJHZpZXciLCJfJCIsInJlYWR5IiwiXyR1cmwiLCJtZXNzYWdlIiwidXJsQ2hhbmdlIiwiZGVzdHJveSIsIl9kZXN0cm95S2lkcyIsInVzZSIsInBsdWdpbiIsInRhZ05hbWUiLCJfcmVuZGVyIiwiZG9jdW1lbnQiLCJib2R5IiwidG9Ob2RlIiwiX3JlbmRlcl9maW5hbCIsImNmZyIsInNsb3QiLCJyZWplY3QiLCJyZXNwb25zZSIsImNvcHlDb25maWciLCJvbGR1aSIsImFzV2luIiwic2V0UG9zaXRpb24iLCJpc1Zpc2libGUiLCJfaW5pdCIsIl9pbml0VXJsIiwiZSIsIl9pbml0RXJyb3IiLCJlcnIiLCJ3YWl0cyIsImZyYW1lIiwid2FpdCIsImFsbCIsImxvY2siLCJfcmVuZGVyRnJhbWUiLCJfY3JlYXRlU3ViVmlldyIsImVycm9yIiwiY3JlYXRlRnJvbVVSTCIsInVpcyIsIkpldFZpZXdSYXciLCJfdWkiLCJTdWJSb3V0ZXIiLCJjYiIsImEiLCJnZXQiLCJfb25jZSIsIkpldEFwcEJhc2UiLCJ3aW5kb3ciLCJ2ZXJzaW9uIiwic3RhcnQiLCJfc2VydmljZXMiLCJFdmVudFN5c3RlbSIsIl9zdWJTZWdtZW50IiwiZ2V0U2VydmljZSIsInNldFNlcnZpY2UiLCJoYW5kbGVyIiwicHJvdG90eXBlIiwiJHN1YnZpZXciLCJhZGRTdWJWaWV3IiwiQXJyYXkiLCJtZXRob2QiLCJwb2ludCIsIkRhdGFDb2xsZWN0aW9uIiwiUmVnRXhwIiwiRGF0ZSIsImNvcHkiLCIkcm91dGVyIiwiY2xpY2tIYW5kbGVyIiwic3JjRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInRyaWdnZXIiLCJfZm9yVmlldyIsImxvYWRWaWV3Iiwidmlld3MiLCJfbG9hZEVycm9yIiwiRXJyb3IiLCJfbG9hZFZpZXdEeW5hbWljIiwibW9kdWxlIiwiX19lc01vZHVsZSIsIm5vdyIsInJvdXRlciIsInJlc3QiLCJhcHBseSIsImRhdGEiLCJhY3Rpb24iLCJiaW5kIiwiZXIiLCJkZWJ1ZyIsImNvbnNvbGUiLCJ0ZXh0IiwicmVwbGFjZSIsImlubmVySFRNTCIsInR5cGUiLCJleHBpcmUiLCJmaXJzdEluaXQiLCJfZmlyc3Rfc3RhcnQiLCJ0b3AiLCJiYXNlIiwic2V0VGltZW91dCIsImFuaW1hdGlvbiIsIm5vZGUiLCJodG1sIiwiYWRkQ3NzIiwicmVtb3ZlQ3NzIiwidXJsU3RyaW5nIiwidGVtcGxhdGUiLCJ1aWQiLCJIYXNoUm91dGVyIiwiX2RldGVjdFByZWZpeCIsIm9ucG9wc3RhdGUiLCJyb3V0ZXMiLCJjb21wYXJlIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInByZWZpeCIsInN1Zml4IiwiX2dldFJhdyIsInJvdXRlclByZWZpeCIsImxvY2F0aW9uIiwiaHJlZiIsImlzUGF0Y2hlZCIsInBhdGNoIiwidyIsIndpbiIsInByb21pc2UiLCJmcmVlemUiLCJzb21lIiwiJGZyZWV6ZSIsInJlc2l6ZSIsImJhc2VBZGQiLCJiYXNlbGF5b3V0IiwiYWRkVmlldyIsImJhc2VSZW1vdmUiLCJyZW1vdmVWaWV3IiwianZpZXciLCJzdWJzIiwiYXJndW1lbnRzIiwibGF5b3V0IiwicHJvdG9VSSIsIiRpbml0IiwiJGFwcCIsIiRyZWFkeSIsIm9yaWdpbiIsInByb3h5IiwiSmV0QXBwIiwicmVxdWlyZSIsIlN0b3JlUm91dGVyIiwic3RvcmFnZSIsInNlc3Npb24iLCJzdG9yZU5hbWUiLCJwdXQiLCJVcmxSb3V0ZXIiLCJwYXRobmFtZSIsIkVtcHR5Um91dGVyIiwiXyRjb25maWciLCJVbmxvYWRHdWFyZCIsImhhcyIsInN0b3JlIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZm9yRWFjaCIsImNvbnRleHQiLCJ0cmltIiwid2FybiIsIngiLCJTdHJpbmciLCJkZWxpbWl0ZXIiLCJydXNzaWFuUGx1cmFsR3JvdXBzIiwiZW5kIiwicGx1cmFsVHlwZXMiLCJhcmFiaWMiLCJsYXN0VHdvIiwiYm9zbmlhbl9zZXJiaWFuIiwiY2hpbmVzZSIsImNyb2F0aWFuIiwiZnJlbmNoIiwiZ2VybWFuIiwicnVzc2lhbiIsImxpdGh1YW5pYW4iLCJjemVjaCIsInBvbGlzaCIsImljZWxhbmRpYyIsInNsb3ZlbmlhbiIsInBsdXJhbFR5cGVUb0xhbmd1YWdlcyIsImxhbmdUb1R5cGVNYXAiLCJtYXBwaW5nIiwicmV0IiwibGFuZ3MiLCJsYW5nIiwicGx1cmFsVHlwZU5hbWUiLCJsb2NhbGUiLCJsYW5nVG9QbHVyYWxUeXBlIiwiZW4iLCJwbHVyYWxUeXBlSW5kZXgiLCJjb3VudCIsImVzY2FwZSIsInRva2VuIiwiY29uc3RydWN0VG9rZW5SZWdleCIsIm9wdHMiLCJzdWZmaXgiLCJSYW5nZUVycm9yIiwiZG9sbGFyUmVnZXgiLCJkb2xsYXJCaWxsc1lhbGwiLCJkZWZhdWx0VG9rZW5SZWdleCIsInRyYW5zZm9ybVBocmFzZSIsInBocmFzZSIsInN1YnN0aXR1dGlvbnMiLCJ0b2tlblJlZ2V4IiwiVHlwZUVycm9yIiwiaW50ZXJwb2xhdGlvblJlZ2V4Iiwib3B0aW9ucyIsInNtYXJ0X2NvdW50IiwidGV4dHMiLCJleHByZXNzaW9uIiwiYXJndW1lbnQiLCJQb2x5Z2xvdCIsInBocmFzZXMiLCJjdXJyZW50TG9jYWxlIiwiYWxsb3dNaXNzaW5nIiwib25NaXNzaW5nS2V5IiwiaW50ZXJwb2xhdGlvbiIsIm5ld0xvY2FsZSIsIm1vcmVQaHJhc2VzIiwicHJlZml4ZWRLZXkiLCJ1bnNldCIsImNsZWFyIiwibmV3UGhyYXNlcyIsInQiLCJfIiwidHJhbnNmb3JtIiwid2ViaXhQb2x5Z2xvdCIsIkxvY2FsZSIsIl92aWV3Iiwic2V0TGFuZ0RhdGEiLCJwY29uZmlnIiwicG9seWdsb3QiLCJwb2x5Iiwic2VydmljZSIsImxvY05hbWUiLCJpMThuIiwic2V0TG9jYWxlIiwiZ2V0TGFuZyIsInNldExhbmciLCJ1cmxzIiwiTWVudSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJnZXRTZWxlY3RlZElkIiwic2VsZWN0IiwiZXhpc3RzIiwiYmFzZWljb25zIiwiZ29vZCIsInNhdmluZyIsImJhc2V0ZXh0IiwiU3RhdHVzIiwic3RhdHVzIiwiaXNlcnJvciIsImV4cGlyZURlbGF5IiwiaWNvbnMiLCJjb250ZW50IiwiYXJlYSIsInNldEhUTUwiLCJzdWNjZXNzIiwic2V0U3RhdHVzIiwiZmFpbCIsImdldFN0YXR1cyIsImhpZGVTdGF0dXMiLCJtb2RlIiwicmVzcG9uc2VUZXh0IiwidHJhY2siLCJkcCIsIl9pZCIsIl9vYmoiLCJyZW1vdGUiLCJhamF4IiwiX21vZGUiLCJfdXJsIiwiX3JlcXVlc3QiLCJfaGVhZGVycyIsIl9maWxlcyIsIlRoZW1lIiwidGhlbWUiLCJnZXRUaGVtZSIsInNldFRoZW1lIiwibGlua3MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxuYW1lIiwiZGlzYWJsZWQiLCJza2luIiwiY29weVBhcmFtcyIsIlVybFBhcmFtIiwib3MiLCJvZyIsInZhbCIsIlVzZXIiLCJsb2dpbiIsImxvZ291dCIsImFmdGVyTG9naW4iLCJhZnRlckxvZ291dCIsInBpbmciLCJtb2RlbCIsInVzZXIiLCJnZXRVc2VyIiwic2VydmVyIiwicGFzcyIsImNhbk5hdmlnYXRlIiwiXyRyb290IiwicHVibGljIiwic2V0SW50ZXJ2YWwiLCJwbHVnaW5zIiwibG9nb3V0VXJsIiwibG9naW5VcmwiLCJyZWdpc3RlclVybCIsIkF1dGhvcml6YXRpb24iLCJyZWdpc3RlciIsInBvc3QiLCJkYXRlIiwiRFVNTVlDT1ZFUiIsIlNVQ0NFU1MiLCJVUkwiLCJCb29rc01vZGVsIiwiZ2V0RGF0YUZyb21TZXJ2ZXIiLCJ1c2VyX2lkIiwiYWRkSXRlbSIsInVwZGF0ZUl0ZW0iLCJyZW1vdmVJdGVtIiwiZGVsIiwiRmlsZXNNb2RlbCIsImdldEl0ZW1zIiwiZG93bmxvYWRJdGVtIiwiTGlrZXNNb2RlbCIsImFkZExpa2UiLCJ1c2VySWQiLCJib29rSWQiLCJyZW1vdmVMaWtlIiwiVXNlcnNNb2RlbCIsImdldEl0ZW0iLCJNeUFwcCIsImRlZmF1bHRzIiwiQVBQTkFNRSIsIlZFUlNJT04iLCJCVUlMRF9BU19NT0RVTEUiLCJQUk9EVUNUSU9OIiwibmF2IiwidXJsUGFydHMiLCJ0YXJnZXRQYXJ0IiwiZWwiLCJyb2xlIiwianNvbiIsInRvZ2dsZUVsZW1lbnQiLCJjb25kaXRpb24iLCJlbGVtZW50IiwiaGlkZSIsIk1vZGVsIiwic3VjY2Vzc0FjdGlvbiIsInNlcnZlclN0YXR1cyIsImF1dG9oZWlnaHQiLCJib3JkZXJsZXNzIiwiaGVpZ2h0IiwibGlzdCIsIlRvcFZpZXciLCJoZWFkZXIiLCJ3aWR0aCIsImR0YWJsZSIsImNvbHVtbnMiLCJoaWRkZW4iLCJtaW5XaWR0aCIsImZpbGxzcGFjZSIsIm9uQ2xpY2siLCJlZGl0VXNlciIsImFkZFVzZXJCdG4iLCJjbGljayIsImFkZFVzZXIiLCJyb3dzIiwiY29scyIsInVzZXJzTW9kZWwiLCJkYkRhdGEiLCJ1c2Vyc0FyciIsIm1hcCIsImZ1bGxfbmFtZSIsInVzZXJfbmFtZSIsInVzZXJfc3VybmFtZSIsImZvcm1hdCIsImRhdGVUb1N0ciIsImJpcnRoX2RhdGUiLCJ1c2Vyc0RhdGEiLCJhdXRob3JpemF0aW9uIiwiY3VycmVudERhdGUiLCJfdXNlckZvcm0iLCJVc2VyRm9ybSIsImZpbmQiLCJzaG93V2luZG93IiwiaGVhZCIsInBvc2l0aW9uIiwiZWxlbWVudHMiLCJsYWJlbCIsImxhYmVsV2lkdGgiLCJsYWJlbEFsaWduIiwicnVsZXMiLCJpc05vdEVtcHR5IiwibWFyZ2luIiwicGFkZGluZ1kiLCJzYXZlRm9ybSIsImhpZGVXaW5kb3ciLCJmb3JtIiwiZ2V0SGVhZCIsInNldFZhbHVlcyIsImluaXRpYWxfcGFzc3dvcmQiLCJnZXRWYWx1ZXMiLCJ2YWxpZGF0ZSIsImNsZWFyVmFsaWRhdGlvbiIsIkxpYnJhcnkiLCJsaWJyYXJ5Q29uZmlnIiwiYm9va0NhcmQiLCJjc3MiLCJzb3J0Iiwic2hvd0Jvb2tDYXJkIiwicmVtb3ZlQm9vayIsImdyaWQiLCJnZXRDb2x1bW5Db25maWciLCJyZWZyZXNoQ29sdW1ucyIsImdldERhdGEiLCJfYm9va0NhcmQiLCJib29rc01vZGVsIiwiYm9va3NBcnIiLCJ5ZWFyX29mX3B1YmxpY2F0aW9uIiwiYm9vayIsInNob3dQb3B1cCIsInJlbW92ZSIsImFkZEJvb2siLCJCb29rQ2FyZCIsImJvb2tDb3ZlciIsImFkZFRleHRGaWxlIiwiYXV0b3NlbmQiLCJmb3JtRGF0YSIsImJvb2tfaWQiLCJhY2NlcHQiLCJ1cGxvYWQiLCJsaW5rIiwiZmlsZXNMaXN0IiwiYWRkQXVkaW9GaWxlIiwiYXVkaW9MaXN0IiwiYXZhaWxhYmxlVGV4dEZpbGVzIiwib25JdGVtQ2xpY2siLCJhdmFpbGFibGVBdWRpb0ZpbGVzIiwic2F2ZUJ0biIsIm1heEhlaWdodCIsInBhZGRpbmdYIiwiY2xlYXJGb3JtIiwiZmlsZXNNb2RlbCIsImZpbGVzQXJyIiwidGV4dEZpbGVzIiwiYXVkaW9GaWxlcyIsImZpbGUiLCJkYXRhX3R5cGUiLCJjb3Zlcl9waG90byIsInNlbmQiLCJmaWxlcyIsImNsZWFyQWxsIiwibWVudSIsImljb24iLCJvbk1lbnVJdGVtQ2xpY2siLCJsaWJMaWJyYXJ5IiwiYWRkQm9va0J0biIsImxpYnJhcnkiLCJMb2dpblBhZ2UiLCJsb2dpbkZvcm0iLCJ2YWx1ZXMiLCJ1c2VyRGF0YSIsInJvbGVfbmFtZSIsInJlYWRvbmx5IiwiYm9va05hbWUiLCJkb3dubG9hZCIsIm9yZGVyQm9vayIsImRvd25sb2FkQm9vayIsImxpa2VCb29rIiwibGlrZUJ1dHRvbiIsImRlZmluZSIsImNvdW50X2xpa2VzIiwiYm9va19maWxlIiwiYXZhaWxhYmxlX2NvcGllcyIsInRvZ2dsZUxpa2UiLCJsaWtlc01vZGVsIiwidW5zZXRMaWtlIiwic2V0TGlrZSIsInJlYWRlckxpYnJhcnkiLCJNYWluVmlldyIsInRlc3RSZXN1bHRzIiwiYnV0dG9uIiwiaW5wdXRXaWR0aCIsIlNldHRpbmdzIiwiYm9va1RvcHMiLCJzaG93T2xkZXN0Qm9va3MiLCJzaG93TmV3ZXN0Qm9va3MiLCJzaG93TW9zdFBhZ2VzQm9va3MiLCJzaG93Qm9va3NXaXRoTG9uZ05hbWVzIiwic2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzIiwiZGVmYXVsdENvbmZpZyIsImIiLCJzaG93UmVzdWx0cyIsIm51bWJlcl9vZl9wYWdlcyIsImJvb2tfdGl0bGUiLCJhdXRob3JzIiwiZmluZEluZGV4IiwiYXV0aG9yIiwiYXV0aG9yX25hbWUiLCJib29rc0NvdW50IiwiUmVnaXN0ZXJQYWdlIiwicmVnaXN0ZXJGb3JtIiwicmVhc29uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMs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QUMxQyxhQUFLem1CLElBQUwsQ0FBVSxRQUFWO0FBQ0E7QUFDRG5CLFdBQU1pSSxPQUFOLENBQWNlLFNBQVMyVSxJQUFULEdBQWdCMVEsSUFBOUI7QUFDQTtBQUNELElBWkQ7QUFhQSxHQWpCRDtBQWtCQSxFOzs7RUF0RHdDckcsaUQ7O0FBQXJCOGdCLDJFIiwiZmlsZSI6Im15YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY29kZWJhc2UvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlcy9teWFwcC5qc1wiKTtcbiIsImNsYXNzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iod2ViaXgpIHtcclxuICAgICAgICB0aGlzLndlYml4SmV0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndlYml4ID0gd2ViaXg7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzKCk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gdGhpcy5fY29udGFpbmVyID0gdGhpcy5hcHAgPSB0aGlzLl9wYXJlbnQgPSB0aGlzLl9yb290ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHNldFBhcmFtKGlkLCB2YWx1ZSwgdXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFbaWRdICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhW2lkXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWdtZW50LnVwZGF0ZShpZCwgdmFsdWUsIDApO1xyXG4gICAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRQYXJhbShpZCwgcGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9kYXRhW2lkXTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8ICFwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcuZ2V0UGFyYW0oaWQsIHBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnN1YnVybCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRQYXJlbnRWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAkJChpZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuZ2V0Um9vdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcm9vdC5xdWVyeVZpZXcoKG9iaiA9PiAob2JqLmNvbmZpZy5pZCA9PT0gaWQgfHwgb2JqLmNvbmZpZy5sb2NhbElkID09PSBpZCkgJiZcclxuICAgICAgICAgICAgICAgIChvYmouJHNjb3BlID09PSByb290LiRzY29wZSkpLCBcInNlbGZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb24ob2JqLCBuYW1lLCBjb2RlKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBvYmouYXR0YWNoRXZlbnQobmFtZSwgY29kZSk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goeyBvYmosIGlkIH0pO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuICAgIGNvbnRhaW5zKHZpZXcpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtpZCA9IHRoaXMuX3N1YnNba2V5XS52aWV3O1xyXG4gICAgICAgICAgICBpZiAoa2lkID09PSB2aWV3IHx8IGtpZC5jb250YWlucyh2aWV3KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlldyhuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWIuc3Vidmlldy52aWV3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFN1YlZpZXdJbmZvKG5hbWUpIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9zdWJzW25hbWUgfHwgXCJkZWZhdWx0XCJdO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3Vidmlldzogc3ViLCBwYXJlbnQ6IHRoaXMgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiX3RvcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YnNbbmFtZV0gPSB7IHVybDogXCJcIiwgaWQ6IG51bGwsIHBvcHVwOiB0cnVlIH07XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIGEgY2hpbGQgdmlldywgc2VhcmNoZXMgZm9yIG5lYXJlc3QgcGFyZW50IHdpdGggc3Vidmlld1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBfZGV0YWNoRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcclxuICAgICAgICBmb3IgKGxldCBpID0gZXZlbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGV2ZW50c1tpXS5vYmouZGV0YWNoRXZlbnQoZXZlbnRzW2ldLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveVN1YnMoKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSBzdWIgdmlld3NcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlZpZXcgPSB0aGlzLl9zdWJzW2tleV0udmlldztcclxuICAgICAgICAgICAgLy8gaXQgcG9zc2libGUgdGhhdCBzdWJ2aWV3IHdhcyBub3QgbG9hZGVkIHdpdGggYW55IGNvbnRlbnQgeWV0XHJcbiAgICAgICAgICAgIC8vIHNvIGNoZWNrIG9uIG51bGxcclxuICAgICAgICAgICAgaWYgKHN1YlZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHN1YlZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgfVxyXG4gICAgX2luaXRfdXJsX2RhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fc2VnbWVudC5jdXJyZW50KCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMud2ViaXguZXh0ZW5kKHRoaXMuX2RhdGEsIHVybC5wYXJhbXMsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgX2dldERlZmF1bHRTdWIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YnMuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vicy5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuX3N1YnNba2V5XTtcclxuICAgICAgICAgICAgaWYgKCFzdWIuYnJhbmNoICYmIHN1Yi52aWV3ICYmIGtleSAhPT0gXCJfdG9wXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gc3ViLnZpZXcuX2dldERlZmF1bHRTdWIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yb3V0ZWRfdmlldygpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ViID0gcGFyZW50Ll9nZXREZWZhdWx0U3ViKCk7XHJcbiAgICAgICAgaWYgKCFzdWIgJiYgc3ViICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fcm91dGVkX3ZpZXcoKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBwYXJzZSh1cmwpIHtcclxuICAgIC8vIHJlbW92ZSBzdGFydGluZyAvXHJcbiAgICBpZiAodXJsWzBdID09PSBcIi9cIikge1xyXG4gICAgICAgIHVybCA9IHVybC5zdWJzdHIoMSk7XHJcbiAgICB9XHJcbiAgICAvLyBzcGxpdCB1cmwgYnkgXCIvXCJcclxuICAgIGNvbnN0IHBhcnRzID0gdXJsLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gICAgLy8gZm9yIGVhY2ggcGFnZSBpbiB1cmxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0ZXN0ID0gcGFydHNbaV07XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICAgICAgLy8gZGV0ZWN0IHBhcmFtc1xyXG4gICAgICAgIC8vIHN1cHBvcnQgb2xkIFx0XHRcdHNvbWU6YT1iOmM9ZFxyXG4gICAgICAgIC8vIGFuZCBuZXcgbm90YXRpb25cdFx0c29tZT9hPWImYz1kXHJcbiAgICAgICAgbGV0IHBvcyA9IHRlc3QuaW5kZXhPZihcIjpcIik7XHJcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcG9zID0gdGVzdC5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGVzdC5zdWJzdHIocG9zICsgMSkuc3BsaXQoL1tcXDpcXD9cXCZdL2cpO1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgaGFzaCBvZiBuYW1lZCBwYXJhbXNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRjaHVuayA9IHBhcmFtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtkY2h1bmtbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGRjaHVua1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3RvcmUgcGFyc2VkIHZhbHVlc1xyXG4gICAgICAgIGNodW5rc1tpXSA9IHtcclxuICAgICAgICAgICAgcGFnZTogKHBvcyA+IC0xID8gdGVzdC5zdWJzdHIoMCwgcG9zKSA6IHRlc3QpLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHJlc3VsdCxcclxuICAgICAgICAgICAgaXNOZXc6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFycmF5IG9mIHBhZ2Ugb2JqZWN0c1xyXG4gICAgcmV0dXJuIGNodW5rcztcclxufVxyXG5mdW5jdGlvbiB1cmwyc3RyKHN0YWNrKSB7XHJcbiAgICBjb25zdCB1cmwgPSBbXTtcclxuICAgIGZvciAoY29uc3QgY2h1bmsgb2Ygc3RhY2spIHtcclxuICAgICAgICB1cmwucHVzaChcIi9cIiArIGNodW5rLnBhZ2UpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG9iajJzdHIoY2h1bmsucGFyYW1zKTtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHVybC5wdXNoKFwiP1wiICsgcGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsLmpvaW4oXCJcIik7XHJcbn1cclxuZnVuY3Rpb24gb2JqMnN0cihvYmopIHtcclxuICAgIGNvbnN0IHN0ciA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RyLnB1c2goXCImXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHIucHVzaChrZXkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5qb2luKFwiXCIpO1xyXG59XG5cbmNsYXNzIFJvdXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuX25leHQgPSAxO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygcm91dGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogcGFyc2Uocm91dGUpLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogcm91dGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgY3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgdGhpcy5fbmV4dF07XHJcbiAgICB9XHJcbiAgICBzdWJ1cmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgc2hpZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZSh0aGlzLnJvdXRlLCB0aGlzLmluZGV4ICsgdGhpcy5fbmV4dCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4ICsgMTsgaSA8IHVybC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHVybDJzdHIodGhpcy5zdWJ1cmwoKSk7XHJcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0ci5zdWJzdHIoMSkgOiBcIlwiO1xyXG4gICAgfVxyXG4gICAgX2pvaW4ocGF0aCwga2lkcykge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICBpZiAocGF0aCA9PT0gbnVsbCkgeyAvLyBjaGFuZ2Ugb2YgcGFyYW1ldGVycywgcm91dGUgZWxlbWVudHMgYXJlIG5vdCBhZmZlY3RlZFxyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvbGQgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICB1cmwgPSBvbGQuc2xpY2UoMCwgdGhpcy5pbmRleCArIChraWRzID8gdGhpcy5fbmV4dCA6IDApKTtcclxuICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuY29uY2F0KHBhcnNlKHBhdGgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0udmlldyA9IG9sZFtpXS52aWV3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFtpXSAmJiB1cmxbaV0ucGFnZSA9PT0gb2xkW2ldLnBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKHBhdGgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9qb2luKHBhdGgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodXJsKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnVybCA9IHVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS5wYXRoO1xyXG4gICAgfVxyXG4gICAgc2hvdyhwYXRoLCB2aWV3LCBraWRzKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fam9pbihwYXRoLCBraWRzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gdXJsMnN0cih1cmwpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdCxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm06IFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IHZpZXcgPyB2aWV3LmFwcCA6IG51bGw7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gY3JlYXRpbmcgYSBuZXcgcm91dGUsIGl0IHBvc3NpYmxlIHRoYXQgaXQgd2lsbCBub3QgaGF2ZSBhbnkgY29udGVudFxyXG4gICAgICAgICAgICAvLyBndWFyZCBpcyBub3QgbmVjZXNzYXJ5IGluIHN1Y2ggY2FzZVxyXG4gICAgICAgICAgICBpZiAoYXBwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhcHAuY2FsbEV2ZW50KFwiYXBwOmd1YXJkXCIsIFtvYmoucmVkaXJlY3QsIHZpZXcsIG9ial0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqLmNvbmZpcm0uY2F0Y2goKCkgPT4gb2JqLnJlZGlyZWN0ID0gbnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnJlZGlyZWN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5yZWRpcmVjdCAhPT0gcmVkaXJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuc2hvdyhvYmoucmVkaXJlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGUucGF0aCA9IHJlZGlyZWN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICByZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaXplKG4pIHtcclxuICAgICAgICB0aGlzLl9uZXh0ID0gbjtcclxuICAgIH1cclxuICAgIHNwbGl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0ge1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXggKyAxKSxcclxuICAgICAgICAgICAgcGF0aDogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJvdXRlLnVybC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcm91dGUucGF0aCA9IHVybDJzdHIocm91dGUudXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZShyb3V0ZSwgMCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgKGluZGV4IHx8IDApXTtcclxuICAgICAgICBpZiAoIWNodW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUudXJsLnB1c2goeyBwYWdlOiBcIlwiLCBwYXJhbXM6IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgY2h1bmsucGFnZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2h1bmsucGFyYW1zW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodGhpcy5yb3V0ZS51cmwpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEpldFZpZXcgZXh0ZW5kcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLndlYml4KTtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICAvL3RoaXMuJGNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgdWkodWksIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjb25maWcuY29udGFpbmVyIHx8IHVpLmNvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCBqZXR2aWV3ID0gdGhpcy5hcHAuY3JlYXRlVmlldyh1aSk7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChqZXR2aWV3KTtcclxuICAgICAgICBqZXR2aWV3LnJlbmRlcihjb250YWluZXIsIHRoaXMuX3NlZ21lbnQsIHRoaXMpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWkgIT09IFwib2JqZWN0XCIgfHwgKHVpIGluc3RhbmNlb2YgSmV0QmFzZSkpIHtcclxuICAgICAgICAgICAgLy8gcmF3IHdlYml4IFVJXHJcbiAgICAgICAgICAgIHJldHVybiBqZXR2aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGpldHZpZXcuZ2V0Um9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3cocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIC8vIGNvbnZlcnQgcGFyYW1ldGVycyBvYmplY3QgdG8gdXJsXHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHBhdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyYW0oa2V5LCBwYXRoW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhdGggPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGVsaWdhdGUgdG8gYXBwIGluIGNhc2Ugb2Ygcm9vdCBwcmVmaXhcclxuICAgICAgICAgICAgaWYgKHBhdGguc3Vic3RyKDAsIDEpID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3cocGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbG9jYWwgcGF0aCwgZG8gbm90aGluZ1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi9cIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwYXJlbnQgcGF0aCwgY2FsbCBwYXJlbnQgdmlld1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi4vXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LnNob3cocGF0aC5zdWJzdHIoMyksIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhcIi9cIiArIHBhdGguc3Vic3RyKDMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdWIgPSB0aGlzLmdldFN1YlZpZXdJbmZvKGNvbmZpZy50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViLnBhcmVudCAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWIucGFyZW50LnNob3cocGF0aCwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZy50YXJnZXQgJiYgY29uZmlnLnRhcmdldCAhPT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyRnJhbWVMb2NrKGNvbmZpZy50YXJnZXQsIHN1Yi5zdWJ2aWV3LCBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3coXCIvXCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hvdyh0aGlzLl9zZWdtZW50LCBwYXRoLCB0aGlzKTtcclxuICAgIH1cclxuICAgIF9zaG93KHNlZ21lbnQsIHBhdGgsIHZpZXcpIHtcclxuICAgICAgICByZXR1cm4gc2VnbWVudC5zaG93KHBhdGgsIHZpZXcsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0X3VybF9kYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQucm91dGUubGlua1JvdXRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZ2V0Um91dGVyKCkuc2V0KHNlZ21lbnQucm91dGUucGF0aCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3NlZ21lbnQucm91dGUucGF0aF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KF8kdmlldywgXyQpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICByZWFkeShfJHZpZXcsIF8kdXJsKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgY29uZmlnKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLndlYml4Lm1lc3NhZ2UoXCJWaWV3OkNvbmZpZyBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICB9XHJcbiAgICB1cmxDaGFuZ2UoXyR2aWV3LCBfJHVybCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95S2lkcygpO1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgYWN0dWFsIFVJXHJcbiAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgdXNlKHBsdWdpbiwgY29uZmlnKSB7XHJcbiAgICAgICAgcGx1Z2luKHRoaXMuYXBwLCB0aGlzLCBjb25maWcpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybCgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lLaWRzKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVN1YnMoKTtcclxuICAgICAgICB0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQucmVmcmVzaCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIodGhpcy5fc2VnbWVudCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIocm9vdCwgdXJsLCBwYXJlbnQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB1cmwgPSBuZXcgUm91dGUodXJsLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IHVybDtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5faW5pdF91cmxfZGF0YSgpO1xyXG4gICAgICAgIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgY29uc3QgX2NvbnRhaW5lciA9ICh0eXBlb2Ygcm9vdCA9PT0gXCJzdHJpbmdcIikgPyB0aGlzLndlYml4LnRvTm9kZShyb290KSA6IHJvb3Q7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciAhPT0gX2NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSBfY29udGFpbmVyO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB0aGlzLmdldFJvb3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcih1cmwpIHtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZygpO1xyXG4gICAgICAgIGlmIChjb25maWcudGhlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLnRoZW4oY2ZnID0+IHRoaXMuX3JlbmRlcl9maW5hbChjZmcsIHVybCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcl9maW5hbChjb25maWcsIHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcl9maW5hbChjb25maWcsIHVybCkge1xyXG4gICAgICAgIC8vIGdldCBwcmV2aW91cyB2aWV3IGluIHRoZSBzYW1lIHNsb3RcclxuICAgICAgICBsZXQgc2xvdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHNob3cgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRhaW5lci50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHNsb3QgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgICAgIGlmIChzbG90LnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLndlYml4LiQkKHNsb3QuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHZpZXcgYWxyZWFkeSBkZXN0cm95ZWRcclxuICAgICAgICBpZiAoIXRoaXMuYXBwIHx8ICFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuX3NlZ21lbnQuY3VycmVudCgpO1xyXG4gICAgICAgIC8vIHVzaW5nIHdyYXBwZXIgb2JqZWN0LCBzbyB1aSBjYW4gYmUgY2hhbmdlZCBmcm9tIGFwcDpyZW5kZXIgZXZlbnRcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7IHVpOiB7fSB9O1xyXG4gICAgICAgIHRoaXMuYXBwLmNvcHlDb25maWcoY29uZmlnLCByZXN1bHQudWksIHRoaXMuX3N1YnMpO1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDpyZW5kZXJcIiwgW3RoaXMsIHVybCwgcmVzdWx0XSk7XHJcbiAgICAgICAgcmVzdWx0LnVpLiRzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgLyogZGVzdHJveSBvbGQgSFRNTCBhdHRhY2hlZCB2aWV3cyBiZWZvcmUgY3JlYXRpbmcgbmV3IG9uZSAqL1xyXG4gICAgICAgIGlmICghc2xvdCAmJiBjdXJyZW50LmlzTmV3ICYmIGN1cnJlbnQudmlldykge1xyXG4gICAgICAgICAgICBjdXJyZW50LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciBhZGRpbmcgaW5zaWRlIG9mIG11bHRpdmlldyAtIHByZXNlcnZlIG9sZCBpZFxyXG4gICAgICAgICAgICBpZiAoc2xvdCAmJiAhc2hvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkdWkgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBvbGR1aS5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5uYW1lID09PSBcIm11bHRpdmlld1wiICYmICFyZXN1bHQudWkuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudWkuaWQgPSBvbGR1aS5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuYXBwLndlYml4LnVpKHJlc3VsdC51aSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgY29uc3QgYXNXaW4gPSB0aGlzLl9yb290O1xyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgdXJsIGFkZGVkIHRvIGlnbm9yZSB0aGlzLnVpIGNhbGxzXHJcbiAgICAgICAgICAgIGlmIChzaG93ICYmIGFzV2luLnNldFBvc2l0aW9uICYmICFhc1dpbi5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgYXNXaW4uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNoZWNrLCBpZiB3ZSBhcmUgcmVwbGFjaW5nIHNvbWUgb2xkZXIgdmlld1xyXG4gICAgICAgICAgICBpZiAoc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsb3QudmlldyAmJiBzbG90LnZpZXcgIT09IHRoaXMgJiYgc2xvdC52aWV3ICE9PSB0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsb3Qudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbG90LmlkID0gdGhpcy5fcm9vdC5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQYXJlbnRWaWV3KCkgfHwgIXRoaXMuYXBwLmFwcClcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB3ZSBoYXZlIHN1YmFwcCwgc2V0IHdob2xlIGFwcCBhcyBhIHZpZXdcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyBvbiBkZXN0cnVjdGlvbiwgdGhlIHdob2xlIGFwcCB3aWxsIGJlIGRlc3Ryb3llZFxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3QudmlldyA9IHRoaXMuYXBwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzTmV3KSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2luaXQodGhpcy5fcm9vdCwgdXJsKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdFVybCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZHkodGhpcy5fcm9vdCwgdXJsLnN1YnVybCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBQcm9taXNlLnJlamVjdChlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNhdGNoKGVyciA9PiB0aGlzLl9pbml0RXJyb3IodGhpcywgZXJyKSk7XHJcbiAgICB9XHJcbiAgICBfaW5pdCh2aWV3LCB1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0KHZpZXcsIHVybC5zdWJ1cmwoKSk7XHJcbiAgICB9XHJcbiAgICBfdXJsQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDp1cmxjaGFuZ2VcIiwgW3RoaXMsIHRoaXMuX3NlZ21lbnRdKTtcclxuICAgICAgICBjb25zdCB3YWl0cyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLl9zdWJzW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IHdhaXQgPSB0aGlzLl9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIGlmICh3YWl0KSB7XHJcbiAgICAgICAgICAgICAgICB3YWl0cy5wdXNoKHdhaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh3YWl0cykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybENoYW5nZSh0aGlzLl9yb290LCB0aGlzLl9zZWdtZW50LnN1YnVybCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgcGF0aCkge1xyXG4gICAgICAgIC8vIGlmIHN1YnZpZXcgaXMgbm90IG9jY3VwaWVkIGJ5IHNvbWUgcmVuZGVyaW5nIHlldFxyXG4gICAgICAgIGlmICghZnJhbWUubG9jaykge1xyXG4gICAgICAgICAgICAvLyByZXRyZWl2ZSBhbmQgc3RvcmUgcmVuZGVyaW5nIGVuZCBwcm9taXNlXHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2sgPSB0aGlzLl9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKTtcclxuICAgICAgICAgICAgaWYgKGxvY2spIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGxvY2sgYWZ0ZXIgZnJhbWUgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICAvLyBhcyBwcm9taXNlLmZpbmFsbHkgaXMgbm90IHN1cHBvcnRlZCBieSAgV2ViaXggbGVzc2VyIHRoYW4gNi4yXHJcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBhIG1vcmUgdmVyYm9zZSBub3RhdGlvblxyXG4gICAgICAgICAgICAgICAgZnJhbWUubG9jayA9IGxvY2sudGhlbigoKSA9PiBmcmFtZS5sb2NrID0gbnVsbCwgKCkgPT4gZnJhbWUubG9jayA9IG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldHVybiByZW5kZXJpbmcgZW5kIHByb21pc2VcclxuICAgICAgICByZXR1cm4gZnJhbWUubG9jaztcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKSB7XHJcbiAgICAgICAgLy9kZWZhdWx0IHJvdXRlXHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlZ21lbnQubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGEgbmV4dCBzZWdtZW50IGluIHVybCwgcmVuZGVyIGl0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgdGhpcy5fc2VnbWVudC5zaGlmdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmcmFtZS52aWV3ICYmIGZyYW1lLnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBubyBuZXh0IHNlZ21lbnQsIGRlbGV0ZSB0aGUgZXhpc3Rpbmcgc3ViLXZpZXdcclxuICAgICAgICAgICAgICAgIGZyYW1lLnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUudmlldyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiBuZXcgcGF0aCBwcm92aWRlZCwgc2V0IGl0IHRvIHRoZSBmcmFtZVxyXG4gICAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZyYW1lLnVybCA9IHBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGluIGNhc2Ugb2Ygcm91dGVkIHN1Yi12aWV3XHJcbiAgICAgICAgaWYgKGZyYW1lLnJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBuZXcgcGF0aCBmb3Igc3ViLXZpZXdcclxuICAgICAgICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmcmFtZS5yb3V0ZS5zaG93KHBhdGgsIGZyYW1lLnZpZXcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCBmcmFtZS5yb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkbyBub3QgdHJpZ2dlciBvbkNoYW5nZSBmb3IgaXNvbGF0ZWQgc3ViLXZpZXdzXHJcbiAgICAgICAgICAgIGlmIChmcmFtZS5icmFuY2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlldyA9IGZyYW1lLnZpZXc7XHJcbiAgICAgICAgLy8gaWYgdmlldyBkb2Vzbid0IGV4aXN0cyB5ZXQsIGluaXQgaXRcclxuICAgICAgICBpZiAoIXZpZXcgJiYgZnJhbWUudXJsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhbWUudXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcsIHNvIHdlIGhhdmUgaXNvbGF0ZWQgc3VidmlldyB1cmxcclxuICAgICAgICAgICAgICAgIGZyYW1lLnJvdXRlID0gbmV3IFJvdXRlKGZyYW1lLnVybCwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgZnJhbWUucm91dGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0LCBzbyB3ZSBoYXZlIGFuIGVtYmVkZWQgc3Vidmlld1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFtZS51cmwgPT09IFwiZnVuY3Rpb25cIiAmJiAhKHZpZXcgaW5zdGFuY2VvZiBmcmFtZS51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IG5ldyBmcmFtZS51cmwodGhpcy5hcHAsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IGZyYW1lLnVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0cmlnZ2VyIG9uQ2hhbmdlIGZvciBhbHJlYWR5IGV4aXN0ZWQgdmlld1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihmcmFtZSwgKGZyYW1lLnJvdXRlIHx8IHRoaXMuX3NlZ21lbnQpLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaW5pdEVycm9yKHZpZXcsIGVycikge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIGlmIHZpZXcgaXMgZGVzdHJveWVkLCBpZ25vcmUgYW55IHZpZXcgcmVsYXRlZCBlcnJvcnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5lcnJvcihcImFwcDplcnJvcjppbml0dmlld1wiLCBbZXJyLCB2aWV3XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZVN1YlZpZXcoc3ViLCBzdWJ1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAuY3JlYXRlRnJvbVVSTChzdWJ1cmwuY3VycmVudCgpLCBzdWIudmlldykudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKHN1Yiwgc3VidXJsLCB0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9kZXN0cm95S2lkcygpIHtcclxuICAgICAgICAvLyBkZXN0cm95IGNoaWxkIHZpZXdzXHJcbiAgICAgICAgY29uc3QgdWlzID0gdGhpcy5fY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHVpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAodWlzW2ldICYmIHVpc1tpXS5kZXN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICB1aXNbaV0uZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHZhcnMgZm9yIGJldHRlciBHQyBwcm9jZXNzaW5nXHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxufVxuXG4vLyB3cmFwcGVyIGZvciByYXcgb2JqZWN0cyBhbmQgSmV0IDEueCBzdHJ1Y3RzXHJcbmNsYXNzIEpldFZpZXdSYXcgZXh0ZW5kcyBKZXRWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuX3VpID0gY29uZmlnLnVpO1xyXG4gICAgfVxyXG4gICAgY29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBTdWJSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZywgYXBwKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmFwcDtcclxuICAgICAgICBhLmFwcC5nZXRSb3V0ZXIoKS5zZXQoYS5fc2VnbWVudC5hcHBlbmQodGhpcy5wYXRoKSwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxufVxuXG5sZXQgX29uY2UgPSB0cnVlO1xyXG5jbGFzcyBKZXRBcHBCYXNlIGV4dGVuZHMgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25zdCB3ZWJpeCA9IChjb25maWcgfHwge30pLndlYml4IHx8IHdpbmRvdy53ZWJpeDtcclxuICAgICAgICBzdXBlcih3ZWJpeCk7XHJcbiAgICAgICAgLy8gaW5pdCBjb25maWdcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMud2ViaXguZXh0ZW5kKHtcclxuICAgICAgICAgICAgbmFtZTogXCJBcHBcIixcclxuICAgICAgICAgICAgdmVyc2lvbjogXCIxLjBcIixcclxuICAgICAgICAgICAgc3RhcnQ6IFwiL2hvbWVcIlxyXG4gICAgICAgIH0sIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLmNvbmZpZy5hcHA7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2VzID0ge307XHJcbiAgICAgICAgdGhpcy53ZWJpeC5leHRlbmQodGhpcywgdGhpcy53ZWJpeC5FdmVudFN5c3RlbSk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlNlZ21lbnQuc3VidXJsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmxTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlNlZ21lbnQudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGdldFNlcnZpY2UobmFtZSkge1xyXG4gICAgICAgIGxldCBvYmogPSB0aGlzLl9zZXJ2aWNlc1tuYW1lXTtcclxuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHRoaXMuX3NlcnZpY2VzW25hbWVdID0gb2JqKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgc2V0U2VydmljZShuYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZXNbbmFtZV0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdldFN1YlZpZXcoKS5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgLy8gY29weSBvYmplY3QgYW5kIGNvbGxlY3QgZXh0cmEgaGFuZGxlcnNcclxuICAgIGNvcHlDb25maWcob2JqLCB0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIC8vIHJhdyB1aSBjb25maWdcclxuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgSmV0QmFzZSB8fFxyXG4gICAgICAgICAgICAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSkge1xyXG4gICAgICAgICAgICBvYmogPSB7ICRzdWJ2aWV3OiBvYmogfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3VidmlldyBwbGFjZWhvbGRlclxyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqLiRzdWJ2aWV3ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkU3ViVmlldyhvYmosIHRhcmdldCwgY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcHJvY2VzcyBzdWItcHJvcGVydGllc1xyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCAob2JqIGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1ldGhvZCBpbiBvYmopIHtcclxuICAgICAgICAgICAgbGV0IHBvaW50ID0gb2JqW21ldGhvZF07XHJcbiAgICAgICAgICAgIC8vIHZpZXcgY2xhc3NcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2ludCA9PT0gXCJmdW5jdGlvblwiICYmIHBvaW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ID0geyAkc3VidmlldzogcG9pbnQgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9pbnQgJiYgdHlwZW9mIHBvaW50ID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgICAgICAhKHBvaW50IGluc3RhbmNlb2YgdGhpcy53ZWJpeC5EYXRhQ29sbGVjdGlvbikgJiYgIShwb2ludCBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwb2ludCBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IG5ldyBEYXRlKHBvaW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvcHlDb25maWcocG9pbnQsIChwb2ludCBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fSksIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gcG9pbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIGdldFJvdXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcm91dGVyO1xyXG4gICAgfVxyXG4gICAgY2xpY2tIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAoZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyaWdnZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJpZ2dlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvclZpZXcodGFyZ2V0LCB2aWV3ID0+IHZpZXcuYXBwLnRyaWdnZXIodHJpZ2dlcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwicm91dGVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocm91dGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JWaWV3KHRhcmdldCwgdmlldyA9PiB2aWV3LnNob3cocm91dGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlldygpLmdldFJvb3QoKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdWJTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXcoKS5yZWZyZXNoKCkudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3RoaXMuZ2V0VXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkVmlldyh1cmwpIHtcclxuICAgICAgICBjb25zdCB2aWV3cyA9IHRoaXMuY29uZmlnLnZpZXdzO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGlmICh1cmwgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9sb2FkRXJyb3IoXCJcIiwgbmV3IEVycm9yKFwiV2ViaXggSmV0OiBFbXB0eSB1cmwgc2VnbWVudFwiKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodmlld3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygdmlld3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBsb2FkaW5nIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmlld3ModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZWRlZmluZWQgaGFzaFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdzW3VybF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBcIl9ibGFua1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkVmlld0R5bmFtaWModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkRXJyb3IodXJsLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3VzdG9tIGhhbmRsZXIgY2FuIHJldHVybiB2aWV3IG9yIGl0cyBwcm9taXNlXHJcbiAgICAgICAgaWYgKCFyZXN1bHQudGhlbikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IGVycm9yIGhhbmRsZXJcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRcclxuICAgICAgICAgICAgLnRoZW4obW9kdWxlID0+IG1vZHVsZS5fX2VzTW9kdWxlID8gbW9kdWxlLmRlZmF1bHQgOiBtb2R1bGUpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5fbG9hZEVycm9yKHVybCwgZXJyKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIF9mb3JWaWV3KHRhcmdldCwgaGFuZGxlcikge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLndlYml4LiQkKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgaGFuZGxlcih2aWV3LiRzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2xvYWRWaWV3RHluYW1pYyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNyZWF0ZUZyb21VUkwoY2h1bmssIG5vdykge1xyXG4gICAgICAgIGxldCB2aWV3O1xyXG4gICAgICAgIGlmIChjaHVuay5pc05ldyB8fCAhY2h1bmsudmlldykge1xyXG4gICAgICAgICAgICB2aWV3ID0gdGhpcy5sb2FkVmlldyhjaHVuay5wYWdlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odWkgPT4gdGhpcy5jcmVhdGVWaWV3KHVpLCBuYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2aWV3ID0gUHJvbWlzZS5yZXNvbHZlKGNodW5rLnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmlldztcclxuICAgIH1cclxuICAgIGNyZWF0ZVZpZXcodWksIG5hbWUpIHtcclxuICAgICAgICBsZXQgb2JqO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBpZiAodWkucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QXBwQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgY2xhc3NcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdWkoeyBhcHA6IHRoaXMsIG5hbWUsIHJvdXRlcjogU3ViUm91dGVyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGNsYXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHVpKHRoaXMsIHsgbmFtZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGZhY3RvcnkgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgICAgICB1aSA9IHVpKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1aSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgb2JqID0gdWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBVSSBvYmplY3RcclxuICAgICAgICAgICAgb2JqID0gbmV3IEpldFZpZXdSYXcodGhpcywgeyBuYW1lLCB1aSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIC8vIHNob3cgdmlldyBwYXRoXHJcbiAgICBzaG93KHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLl9jb250YWluZXIsICh1cmwgfHwgdGhpcy5jb25maWcuc3RhcnQpKTtcclxuICAgIH1cclxuICAgIC8vIGV2ZW50IGhlbHBlcnNcclxuICAgIHRyaWdnZXIobmFtZSwgLi4ucmVzdCkge1xyXG4gICAgICAgIHRoaXMuYXBwbHkobmFtZSwgcmVzdCk7XHJcbiAgICB9XHJcbiAgICBhcHBseShuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQobmFtZSwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICBhY3Rpb24obmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlYml4LmJpbmQoZnVuY3Rpb24gKC4uLnJlc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHBseShuYW1lLCByZXN0KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50KG5hbWUsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgdXNlKHBsdWdpbiwgY29uZmlnKSB7XHJcbiAgICAgICAgcGx1Z2luKHRoaXMsIG51bGwsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBlcnJvcihuYW1lLCBlcikge1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KG5hbWUsIGVyKTtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDplcnJvclwiLCBlcik7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUgKi9cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGVidWcpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcltpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJbaV0gaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gZXJbaV0ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKFwiTW9kdWxlIGJ1aWxkIGZhaWxlZFwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHgxYlxcW1swLTk7XSptL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGA8cHJlIHN0eWxlPSdmb250LXNpemU6MTZweDsgYmFja2dyb3VuZC1jb2xvcjogI2VjNjg3MzsgY29sb3I6ICMwMDA7IHBhZGRpbmc6MTBweDsnPiR7dGV4dH08L3ByZT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIjxicj48YnI+Q2hlY2sgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2ViaXgubWVzc2FnZSh7IHR5cGU6IFwiZXJyb3JcIiwgdGV4dDogdGV4dCwgZXhwaXJlOiAtMSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIHRzbGludDplbmFibGUgKi9cclxuICAgIH1cclxuICAgIC8vIHJlbmRlcnMgdG9wIHZpZXdcclxuICAgIHJlbmRlcihyb290LCB1cmwsIHBhcmVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9ICh0eXBlb2Ygcm9vdCA9PT0gXCJzdHJpbmdcIikgP1xyXG4gICAgICAgICAgICB0aGlzLndlYml4LnRvTm9kZShyb290KSA6XHJcbiAgICAgICAgICAgIChyb290IHx8IGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0SW5pdCA9ICF0aGlzLiRyb3V0ZXI7XHJcbiAgICAgICAgbGV0IHBhdGggPSBudWxsO1xyXG4gICAgICAgIGlmIChmaXJzdEluaXQpIHtcclxuICAgICAgICAgICAgaWYgKF9vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4LmF0dGFjaEV2ZW50KFwib25DbGlja1wiLCBlID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpKTtcclxuICAgICAgICAgICAgICAgIF9vbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IG5ldyBSb3V0ZSh1cmwsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YlNlZ21lbnQgPSB0aGlzLl9maXJzdF9zdGFydCh1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJTZWdtZW50LnJvdXRlLmxpbmtSb3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdXJsLnNwbGl0KCkucm91dGUucGF0aCB8fCB0aGlzLmNvbmZpZy5zdGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB1cmwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldFN1YlZpZXcoKTtcclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gdGhpcy5fc3ViU2VnbWVudDtcclxuICAgICAgICBjb25zdCByZWFkeSA9IHNlZ21lbnQuc2hvdyhwYXRoLCB0b3ApXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuY3JlYXRlRnJvbVVSTChzZWdtZW50LmN1cnJlbnQoKSwgdG9wKSlcclxuICAgICAgICAgICAgLnRoZW4odmlldyA9PiB2aWV3LnJlbmRlcihyb290LCBzZWdtZW50KSlcclxuICAgICAgICAgICAgLnRoZW4oYmFzZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5zZXQoc2VnbWVudC5yb3V0ZS5wYXRoLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3RoaXMuZ2V0VXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJhc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRoaXMucmVhZHkudGhlbigoKSA9PiByZWFkeSk7XHJcbiAgICAgICAgcmV0dXJuIHJlYWR5O1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlldygpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3ViU2VnbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5fc3ViU2VnbWVudC5jdXJyZW50KCkudmlldztcclxuICAgICAgICAgICAgaWYgKHZpZXcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKZXRWaWV3KHRoaXMsIHt9KTtcclxuICAgIH1cclxuICAgIF9maXJzdF9zdGFydChyb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQgPSByb3V0ZTtcclxuICAgICAgICBjb25zdCBjYiA9IChhKSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93KGEpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHRoaXMuJHJvdXRlciA9IG5ldyAodGhpcy5jb25maWcucm91dGVyKShjYiwgdGhpcy5jb25maWcsIHRoaXMpO1xyXG4gICAgICAgIC8vIHN0YXJ0IGFuaW1hdGlvbiBmb3IgdG9wLWxldmVsIGFwcFxyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkgJiYgdGhpcy5jb25maWcuYW5pbWF0aW9uICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwuYWRkQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwucmVtb3ZlQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5hZGRDc3Mobm9kZSwgXCJ3ZWJpeGFwcFwiKTtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIG5vIHVybCBkZWZpbmVkLCBjaGVjayByb3V0ZXIgZmlyc3RcclxuICAgICAgICAgICAgbGV0IHVybFN0cmluZyA9IHRoaXMuJHJvdXRlci5nZXQoKTtcclxuICAgICAgICAgICAgaWYgKCF1cmxTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHVybFN0cmluZyA9IHRoaXMuY29uZmlnLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnNldCh1cmxTdHJpbmcsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKHVybFN0cmluZywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgIHJvdXRlLmN1cnJlbnQoKS52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHJvdXRlLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZS5zcGxpdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSBuZXcgUm91dGUodGhpcy5jb25maWcuc3RhcnQsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgIH1cclxuICAgIC8vIGVycm9yIGR1cmluZyB2aWV3IHJlc29sdmluZ1xyXG4gICAgX2xvYWRFcnJvcih1cmwsIGVycikge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoXCJhcHA6ZXJyb3I6cmVzb2x2ZVwiLCBbZXJyLCB1cmxdKTtcclxuICAgICAgICByZXR1cm4geyB0ZW1wbGF0ZTogXCIgXCIgfTtcclxuICAgIH1cclxuICAgIGFkZFN1YlZpZXcob2JqLCB0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IG9iai4kc3VidmlldyAhPT0gdHJ1ZSA/IG9iai4kc3VidmlldyA6IG51bGw7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG9iai5uYW1lIHx8ICh1cmwgPyB0aGlzLndlYml4LnVpZCgpIDogXCJkZWZhdWx0XCIpO1xyXG4gICAgICAgIHRhcmdldC5pZCA9IG9iai5pZCB8fCBcInNcIiArIHRoaXMud2ViaXgudWlkKCk7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IGNvbmZpZ1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgaWQ6IHRhcmdldC5pZCxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBicmFuY2g6IG9iai5icmFuY2gsXHJcbiAgICAgICAgICAgIHBvcHVwOiBvYmoucG9wdXBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB2aWV3LnBvcHVwID8gbnVsbCA6IHRhcmdldDtcclxuICAgIH1cclxufVxuXG5jbGFzcyBIYXNoUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICB0aGlzLl9kZXRlY3RQcmVmaXgoKTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB0aGlzLmNiKHRoaXMuZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZSA9IHBhdGguc3BsaXQoXCI/XCIsIDIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXNba2V5XSA9PT0gY29tcGFyZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBrZXkgKyAoY29tcGFyZS5sZW5ndGggPiAxID8gXCI/XCIgKyBjb21wYXJlWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCkgIT09IHBhdGgpIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHRoaXMucHJlZml4ICsgdGhpcy5zdWZpeCArIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX2dldFJhdygpLnJlcGxhY2UodGhpcy5wcmVmaXgsIFwiXCIpLnJlcGxhY2UodGhpcy5zdWZpeCwgXCJcIik7XHJcbiAgICAgICAgcGF0aCA9IHBhdGggIT09IFwiL1wiID8gcGF0aCA6IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJlID0gcGF0aC5zcGxpdChcIj9cIiwgMik7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnLnJvdXRlc1tjb21wYXJlWzBdXTtcclxuICAgICAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGtleSArIChjb21wYXJlLmxlbmd0aCA+IDEgPyBcIj9cIiArIGNvbXBhcmVbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuICAgIF9kZXRlY3RQcmVmaXgoKSB7XHJcbiAgICAgICAgLy8gdXNlIFwiIyFcIiBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgIGNvbnN0IHN1Zml4ID0gdGhpcy5jb25maWcucm91dGVyUHJlZml4O1xyXG4gICAgICAgIHRoaXMuc3VmaXggPSBcIiNcIiArICgodHlwZW9mIHN1Zml4ID09PSBcInVuZGVmaW5lZFwiKSA/IFwiIVwiIDogc3VmaXgpO1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIiwgMilbMF07XHJcbiAgICB9XHJcbiAgICBfZ2V0UmF3KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgfVxyXG59XG5cbmxldCBpc1BhdGNoZWQgPSBmYWxzZTtcclxuZnVuY3Rpb24gcGF0Y2godykge1xyXG4gICAgaWYgKGlzUGF0Y2hlZCB8fCAhdykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlzUGF0Y2hlZCA9IHRydWU7XHJcbiAgICAvLyBjdXN0b20gcHJvbWlzZSBmb3IgSUU4XHJcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XHJcbiAgICBpZiAoIXdpbi5Qcm9taXNlKSB7XHJcbiAgICAgICAgd2luLlByb21pc2UgPSB3LnByb21pc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2ZXJzaW9uID0gdy52ZXJzaW9uLnNwbGl0KFwiLlwiKTtcclxuICAgIC8vIHdpbGwgYmUgZml4ZWQgaW4gd2ViaXggNS4zXHJcbiAgICBpZiAodmVyc2lvblswXSAqIDEwICsgdmVyc2lvblsxXSAqIDEgPCA1Mykge1xyXG4gICAgICAgIHcudWkuZnJlZXplID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgLy8gZGlzYWJsZWQgYmVjYXVzZSB3ZWJpeCBqZXQgNS4wIGNhbid0IGhhbmRsZSByZXNpemUgb2Ygc2Nyb2xsdmlldyBjb3JyZWN0bHlcclxuICAgICAgICAgICAgLy8gdy51aS4kZnJlZXplID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gaGFuZGxlcigpO1xyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy50aGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXMudGhlbihmdW5jdGlvbiAoc29tZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHcudWkuJGZyZWV6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHcudWkucmVzaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHcudWkuJGZyZWV6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdy51aS5yZXNpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBhZGRpbmcgdmlld3MgYXMgY2xhc3Nlc1xyXG4gICAgY29uc3QgYmFzZUFkZCA9IHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUuYWRkVmlldztcclxuICAgIGNvbnN0IGJhc2VSZW1vdmUgPSB3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLnJlbW92ZVZpZXc7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgYWRkVmlldyh2aWV3LCBpbmRleCkge1xyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIGxvZ2ljIG9ubHkgZm9yIHdpZGdldHMgaW5zaWRlIG9mIGpldC12aWV3XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSBjYXNlIHdoZW4gYWRkVmlldyB1c2VkIHdpdGggYWxyZWFkeSBpbml0aWFsaXplZCB3aWRnZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLndlYml4SmV0ICYmICF2aWV3LnF1ZXJ5Vmlldykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganZpZXcgPSB0aGlzLiRzY29wZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHZpZXcgPSBqdmlldy5hcHAuY29weUNvbmZpZyh2aWV3LCB7fSwgc3Vicyk7XHJcbiAgICAgICAgICAgICAgICBiYXNlQWRkLmFwcGx5KHRoaXMsIFt2aWV3LCBpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3Vicykge1xyXG4gICAgICAgICAgICAgICAgICAgIGp2aWV3Ll9yZW5kZXJGcmFtZShrZXksIHN1YnNba2V5XSwgbnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp2aWV3Ll9zdWJzW2tleV0gPSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldy5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYXNlQWRkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVZpZXcoKSB7XHJcbiAgICAgICAgICAgIGJhc2VSZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLndlYml4SmV0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0gdGhpcy4kc2NvcGUuX3N1YnM7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhbGwgc3ViLXZpZXdzLCBkZXN0cm95IGFuZCBjbGVhbiB0aGUgcmVtb3ZlZCBvbmVcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN1YnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdy4kJCh0ZXN0LmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB3LmV4dGVuZCh3LnVpLmxheW91dC5wcm90b3R5cGUsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICB3LmV4dGVuZCh3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLCBjb25maWcsIHRydWUpO1xyXG4gICAgLy8gd3JhcHBlciBmb3IgdXNpbmcgSmV0IEFwcHMgYXMgdmlld3NcclxuICAgIHcucHJvdG9VSSh7XHJcbiAgICAgICAgbmFtZTogXCJqZXRhcHBcIixcclxuICAgICAgICAkaW5pdChjZmcpIHtcclxuICAgICAgICAgICAgdGhpcy4kYXBwID0gbmV3IHRoaXMuYXBwKGNmZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdy51aWQoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjZmcuYm9keSA9IHsgaWQgfTtcclxuICAgICAgICAgICAgdGhpcy4kcmVhZHkucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHAucmVuZGVyKHsgaWQgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy4kYXBwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luID0gdGhpcy4kYXBwW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbiA9PT0gXCJmdW5jdGlvblwiICYmICF0aGlzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBvcmlnaW4uYmluZCh0aGlzLiRhcHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgdy51aS5wcm94eSk7XHJcbn1cblxuY2xhc3MgSmV0QXBwIGV4dGVuZHMgSmV0QXBwQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25maWcucm91dGVyID0gY29uZmlnLnJvdXRlciB8fCBIYXNoUm91dGVyO1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgcGF0Y2godGhpcy53ZWJpeCk7XHJcbiAgICB9XHJcbiAgICBfbG9hZFZpZXdEeW5hbWljKHVybCkge1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC4vZywgXCIvXCIpO1xyXG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiamV0LXZpZXdzL1wiICsgdXJsKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBTdG9yZVJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnLCBhcHApIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZSB8fCBhcHAud2ViaXguc3RvcmFnZS5zZXNzaW9uO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IChjb25maWcuc3RvcmVOYW1lIHx8IGNvbmZpZy5pZCArIFwiOnJvdXRlXCIpO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UucHV0KHRoaXMubmFtZSwgcGF0aCk7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQodGhpcy5uYW1lKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBVcmxSb3V0ZXIgZXh0ZW5kcyBIYXNoUm91dGVyIHtcclxuICAgIF9kZXRlY3RQcmVmaXgoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVmaXggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3VmaXggPSB0aGlzLmNvbmZpZy5yb3V0ZXJQcmVmaXggfHwgXCJcIjtcclxuICAgIH1cclxuICAgIF9nZXRSYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEVtcHR5Um91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBfJGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBVbmxvYWRHdWFyZChhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgdmlldy5vbihhcHAsIGBhcHA6Z3VhcmRgLCBmdW5jdGlvbiAoXyR1cmwsIHBvaW50LCBwcm9taXNlKSB7XHJcbiAgICAgICAgaWYgKHBvaW50ID09PSB2aWV3IHx8IHBvaW50LmNvbnRhaW5zKHZpZXcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGNvbmZpZygpO1xyXG4gICAgICAgICAgICBpZiAocmVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5jb25maXJtID0gUHJvbWlzZS5yZWplY3QocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UuY29uZmlybSA9IHByb21pc2UuY29uZmlybS50aGVuKCgpID0+IHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxuXG4vLyAgICAgKGMpIDIwMTItMjAxOCBBaXJibmIsIEluYy5cblxuLy8gdmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xuZnVuY3Rpb24gaGFzKHN0b3JlLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdG9yZSwga2V5KTtcbn1cbi8vIHZhciBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKTtcbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzKG9iaiwga2V5KSkge1xuICAgICAgaGFuZGxlci5jYWxsKChjb250ZXh0IHx8IG9iaiksIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG4vLyB2YXIgdHJpbSA9IHJlcXVpcmUoJ3N0cmluZy5wcm90b3R5cGUudHJpbScpO1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xufVxuLy8gdmFyIHdhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgbWVzc2FnZTtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICB0cnkgeyB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7IH0gY2F0Y2ggKHgpIHt9XG59XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdDtcblxuLy8gIyMjIyBQbHVyYWxpemF0aW9uIG1ldGhvZHNcbi8vIFRoZSBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgdGhlIGRpZmZlcmVudCBwaHJhc2UgcG9zc2liaWxpdGllcy5cbnZhciBkZWxpbWl0ZXIgPSAnfHx8fCc7XG5cbnZhciBydXNzaWFuUGx1cmFsR3JvdXBzID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIGVuZCA9IG4gJSAxMDtcbiAgaWYgKG4gIT09IDExICYmIGVuZCA9PT0gMSkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmICgyIDw9IGVuZCAmJiBlbmQgPD0gNCAmJiAhKG4gPj0gMTIgJiYgbiA8PSAxNCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMjtcbn07XG5cbi8vIE1hcHBpbmcgZnJvbSBwbHVyYWxpemF0aW9uIGdyb3VwIHBsdXJhbCBsb2dpYy5cbnZhciBwbHVyYWxUeXBlcyA9IHtcbiAgYXJhYmljOiBmdW5jdGlvbiAobikge1xuICAgIC8vIGh0dHA6Ly93d3cuYXJhYmV5ZXMub3JnL1BsdXJhbF9Gb3Jtc1xuICAgIGlmIChuIDwgMykgeyByZXR1cm4gbjsgfVxuICAgIHZhciBsYXN0VHdvID0gbiAlIDEwMDtcbiAgICBpZiAobGFzdFR3byA+PSAzICYmIGxhc3RUd28gPD0gMTApIHJldHVybiAzO1xuICAgIHJldHVybiBsYXN0VHdvID49IDExID8gNCA6IDU7XG4gIH0sXG4gIGJvc25pYW5fc2VyYmlhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgY2hpbmVzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgY3JvYXRpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGZyZW5jaDogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gPiAxID8gMSA6IDA7IH0sXG4gIGdlcm1hbjogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gIT09IDEgPyAxIDogMDsgfSxcbiAgcnVzc2lhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgbGl0aHVhbmlhbjogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiAlIDEwID09PSAxICYmIG4gJSAxMDAgIT09IDExKSB7IHJldHVybiAwOyB9XG4gICAgcmV0dXJuIG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA5ICYmIChuICUgMTAwIDwgMTEgfHwgbiAlIDEwMCA+IDE5KSA/IDEgOiAyO1xuICB9LFxuICBjemVjaDogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiA9PT0gMSkgeyByZXR1cm4gMDsgfVxuICAgIHJldHVybiAobiA+PSAyICYmIG4gPD0gNCkgPyAxIDogMjtcbiAgfSxcbiAgcG9saXNoOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuID09PSAxKSB7IHJldHVybiAwOyB9XG4gICAgdmFyIGVuZCA9IG4gJSAxMDtcbiAgICByZXR1cm4gMiA8PSBlbmQgJiYgZW5kIDw9IDQgJiYgKG4gJSAxMDAgPCAxMCB8fCBuICUgMTAwID49IDIwKSA/IDEgOiAyO1xuICB9LFxuICBpY2VsYW5kaWM6IGZ1bmN0aW9uIChuKSB7IHJldHVybiAobiAlIDEwICE9PSAxIHx8IG4gJSAxMDAgPT09IDExKSA/IDEgOiAwOyB9LFxuICBzbG92ZW5pYW46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIGxhc3RUd28gPSBuICUgMTAwO1xuICAgIGlmIChsYXN0VHdvID09PSAxKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGxhc3RUd28gPT09IDIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAobGFzdFR3byA9PT0gMyB8fCBsYXN0VHdvID09PSA0KSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgcmV0dXJuIDM7XG4gIH1cbn07XG5cblxuLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgdG8gaW5kaXZpZHVhbCBsYW5ndWFnZSBjb2Rlcy9sb2NhbGVzLlxuLy8gV2lsbCBsb29rIHVwIGJhc2VkIG9uIGV4YWN0IG1hdGNoLCBpZiBub3QgZm91bmQgYW5kIGl0J3MgYSBsb2NhbGUgd2lsbCBwYXJzZSB0aGUgbG9jYWxlXG4vLyBmb3IgbGFuZ3VhZ2UgY29kZSwgYW5kIGlmIHRoYXQgZG9lcyBub3QgZXhpc3Qgd2lsbCBkZWZhdWx0IHRvICdlbidcbnZhciBwbHVyYWxUeXBlVG9MYW5ndWFnZXMgPSB7XG4gIGFyYWJpYzogWydhciddLFxuICBib3NuaWFuX3NlcmJpYW46IFsnYnMtTGF0bi1CQScsICdicy1DeXJsLUJBJywgJ3NybC1SUycsICdzci1SUyddLFxuICBjaGluZXNlOiBbJ2lkJywgJ2lkLUlEJywgJ2phJywgJ2tvJywgJ2tvLUtSJywgJ2xvJywgJ21zJywgJ3RoJywgJ3RoLVRIJywgJ3poJ10sXG4gIGNyb2F0aWFuOiBbJ2hyJywgJ2hyLUhSJ10sXG4gIGdlcm1hbjogWydmYScsICdkYScsICdkZScsICdlbicsICdlcycsICdmaScsICdlbCcsICdoZScsICdoaS1JTicsICdodScsICdodS1IVScsICdpdCcsICdubCcsICdubycsICdwdCcsICdzdicsICd0ciddLFxuICBmcmVuY2g6IFsnZnInLCAndGwnLCAncHQtYnInXSxcbiAgcnVzc2lhbjogWydydScsICdydS1SVSddLFxuICBsaXRodWFuaWFuOiBbJ2x0J10sXG4gIGN6ZWNoOiBbJ2NzJywgJ2NzLUNaJywgJ3NrJ10sXG4gIHBvbGlzaDogWydwbCddLFxuICBpY2VsYW5kaWM6IFsnaXMnXSxcbiAgc2xvdmVuaWFuOiBbJ3NsLVNMJ11cbn07XG5cbmZ1bmN0aW9uIGxhbmdUb1R5cGVNYXAobWFwcGluZykge1xuICB2YXIgcmV0ID0ge307XG4gIGZvckVhY2gobWFwcGluZywgZnVuY3Rpb24gKGxhbmdzLCB0eXBlKSB7XG4gICAgZm9yRWFjaChsYW5ncywgZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgIHJldFtsYW5nXSA9IHR5cGU7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUeXBlTmFtZShsb2NhbGUpIHtcbiAgdmFyIGxhbmdUb1BsdXJhbFR5cGUgPSBsYW5nVG9UeXBlTWFwKHBsdXJhbFR5cGVUb0xhbmd1YWdlcyk7XG4gIHJldHVybiBsYW5nVG9QbHVyYWxUeXBlW2xvY2FsZV1cbiAgICB8fCBsYW5nVG9QbHVyYWxUeXBlW3NwbGl0LmNhbGwobG9jYWxlLCAvLS8sIDEpWzBdXVxuICAgIHx8IGxhbmdUb1BsdXJhbFR5cGUuZW47XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFR5cGVJbmRleChsb2NhbGUsIGNvdW50KSB7XG4gIHJldHVybiBwbHVyYWxUeXBlc1twbHVyYWxUeXBlTmFtZShsb2NhbGUpXShjb3VudCk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZSh0b2tlbikge1xuICByZXR1cm4gdG9rZW4ucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0VG9rZW5SZWdleChvcHRzKSB7XG4gIHZhciBwcmVmaXggPSAob3B0cyAmJiBvcHRzLnByZWZpeCkgfHwgJyV7JztcbiAgdmFyIHN1ZmZpeCA9IChvcHRzICYmIG9wdHMuc3VmZml4KSB8fCAnfSc7XG5cbiAgaWYgKHByZWZpeCA9PT0gZGVsaW1pdGVyIHx8IHN1ZmZpeCA9PT0gZGVsaW1pdGVyKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wiJyArIGRlbGltaXRlciArICdcIiB0b2tlbiBpcyByZXNlcnZlZCBmb3IgcGx1cmFsaXphdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoZXNjYXBlKHByZWZpeCkgKyAnKC4qPyknICsgZXNjYXBlKHN1ZmZpeCksICdnJyk7XG59XG5cbnZhciBkb2xsYXJSZWdleCA9IC9cXCQvZztcbnZhciBkb2xsYXJCaWxsc1lhbGwgPSAnJCQnO1xudmFyIGRlZmF1bHRUb2tlblJlZ2V4ID0gLyVcXHsoLio/KVxcfS9nO1xuXG4vLyAjIyMgdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKVxuLy9cbi8vIFRha2VzIGEgcGhyYXNlIHN0cmluZyBhbmQgdHJhbnNmb3JtcyBpdCBieSBjaG9vc2luZyB0aGUgY29ycmVjdFxuLy8gcGx1cmFsIGZvcm0gYW5kIGludGVycG9sYXRpbmcgaXQuXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnSGVsbG8sICV7bmFtZX0hJywge25hbWU6ICdTcGlrZSd9KTtcbi8vICAgICAvLyBcIkhlbGxvLCBTcGlrZSFcIlxuLy9cbi8vIFRoZSBjb3JyZWN0IHBsdXJhbCBmb3JtIGlzIHNlbGVjdGVkIGlmIHN1YnN0aXR1dGlvbnMuc21hcnRfY291bnRcbi8vIGlzIHNldC4gWW91IGNhbiBwYXNzIGluIGEgbnVtYmVyIGluc3RlYWQgb2YgYW4gT2JqZWN0IGFzIGBzdWJzdGl0dXRpb25zYFxuLy8gYXMgYSBzaG9ydGN1dCBmb3IgYHNtYXJ0X2NvdW50YC5cbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywge3NtYXJ0X2NvdW50OiAxfSwgJ2VuJyk7XG4vLyAgICAgLy8gXCIxIG5ldyBtZXNzYWdlXCJcbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywge3NtYXJ0X2NvdW50OiAyfSwgJ2VuJyk7XG4vLyAgICAgLy8gXCIyIG5ldyBtZXNzYWdlc1wiXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIDUsICdlbicpO1xuLy8gICAgIC8vIFwiNSBuZXcgbWVzc2FnZXNcIlxuLy9cbi8vIFlvdSBzaG91bGQgcGFzcyBpbiBhIHRoaXJkIGFyZ3VtZW50LCB0aGUgbG9jYWxlLCB0byBzcGVjaWZ5IHRoZSBjb3JyZWN0IHBsdXJhbCB0eXBlLlxuLy8gSXQgZGVmYXVsdHMgdG8gYCdlbidgIHdpdGggMiBwbHVyYWwgZm9ybXMuXG5mdW5jdGlvbiB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUsIHRva2VuUmVnZXgpIHtcbiAgaWYgKHR5cGVvZiBwaHJhc2UgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUG9seWdsb3QudHJhbnNmb3JtUGhyYXNlIGV4cGVjdHMgYXJndW1lbnQgIzEgdG8gYmUgc3RyaW5nJyk7XG4gIH1cblxuICBpZiAoc3Vic3RpdHV0aW9ucyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHBocmFzZTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBwaHJhc2U7XG4gIHZhciBpbnRlcnBvbGF0aW9uUmVnZXggPSB0b2tlblJlZ2V4IHx8IGRlZmF1bHRUb2tlblJlZ2V4O1xuXG4gIC8vIGFsbG93IG51bWJlciBhcyBhIHBsdXJhbGl6YXRpb24gc2hvcnRjdXRcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc3Vic3RpdHV0aW9ucyA9PT0gJ251bWJlcicgPyB7IHNtYXJ0X2NvdW50OiBzdWJzdGl0dXRpb25zIH0gOiBzdWJzdGl0dXRpb25zO1xuXG4gIC8vIFNlbGVjdCBwbHVyYWwgZm9ybTogYmFzZWQgb24gYSBwaHJhc2UgdGV4dCB0aGF0IGNvbnRhaW5zIGBuYFxuICAvLyBwbHVyYWwgZm9ybXMgc2VwYXJhdGVkIGJ5IGBkZWxpbWl0ZXJgLCBhIGBsb2NhbGVgLCBhbmQgYSBgc3Vic3RpdHV0aW9ucy5zbWFydF9jb3VudGAsXG4gIC8vIGNob29zZSB0aGUgY29ycmVjdCBwbHVyYWwgZm9ybS4gVGhpcyBpcyBvbmx5IGRvbmUgaWYgYGNvdW50YCBpcyBzZXQuXG4gIGlmIChvcHRpb25zLnNtYXJ0X2NvdW50ICE9IG51bGwgJiYgcmVzdWx0KSB7XG4gICAgdmFyIHRleHRzID0gc3BsaXQuY2FsbChyZXN1bHQsIGRlbGltaXRlcik7XG4gICAgcmVzdWx0ID0gdHJpbSh0ZXh0c1twbHVyYWxUeXBlSW5kZXgobG9jYWxlIHx8ICdlbicsIG9wdGlvbnMuc21hcnRfY291bnQpXSB8fCB0ZXh0c1swXSk7XG4gIH1cblxuICAvLyBJbnRlcnBvbGF0ZTogQ3JlYXRlcyBhIGBSZWdFeHBgIG9iamVjdCBmb3IgZWFjaCBpbnRlcnBvbGF0aW9uIHBsYWNlaG9sZGVyLlxuICByZXN1bHQgPSByZXBsYWNlLmNhbGwocmVzdWx0LCBpbnRlcnBvbGF0aW9uUmVnZXgsIGZ1bmN0aW9uIChleHByZXNzaW9uLCBhcmd1bWVudCkge1xuICAgIGlmICghaGFzKG9wdGlvbnMsIGFyZ3VtZW50KSB8fCBvcHRpb25zW2FyZ3VtZW50XSA9PSBudWxsKSB7IHJldHVybiBleHByZXNzaW9uOyB9XG4gICAgLy8gRW5zdXJlIHJlcGxhY2VtZW50IHZhbHVlIGlzIGVzY2FwZWQgdG8gcHJldmVudCBzcGVjaWFsICQtcHJlZml4ZWQgcmVnZXggcmVwbGFjZSB0b2tlbnMuXG4gICAgcmV0dXJuIHJlcGxhY2UuY2FsbChvcHRpb25zW2FyZ3VtZW50XSwgZG9sbGFyUmVnZXgsIGRvbGxhckJpbGxzWWFsbCk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vICMjIyBQb2x5Z2xvdCBjbGFzcyBjb25zdHJ1Y3RvclxuZnVuY3Rpb24gUG9seWdsb3Qob3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMucGhyYXNlcyA9IHt9O1xuICB0aGlzLmV4dGVuZChvcHRzLnBocmFzZXMgfHwge30pO1xuICB0aGlzLmN1cnJlbnRMb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuICB2YXIgYWxsb3dNaXNzaW5nID0gb3B0cy5hbGxvd01pc3NpbmcgPyB0cmFuc2Zvcm1QaHJhc2UgOiBudWxsO1xuICB0aGlzLm9uTWlzc2luZ0tleSA9IHR5cGVvZiBvcHRzLm9uTWlzc2luZ0tleSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMub25NaXNzaW5nS2V5IDogYWxsb3dNaXNzaW5nO1xuICB0aGlzLndhcm4gPSBvcHRzLndhcm4gfHwgd2FybjtcbiAgdGhpcy50b2tlblJlZ2V4ID0gY29uc3RydWN0VG9rZW5SZWdleChvcHRzLmludGVycG9sYXRpb24pO1xufVxuXG4vLyAjIyMgcG9seWdsb3QubG9jYWxlKFtsb2NhbGVdKVxuLy9cbi8vIEdldCBvciBzZXQgbG9jYWxlLiBJbnRlcm5hbGx5LCBQb2x5Z2xvdCBvbmx5IHVzZXMgbG9jYWxlIGZvciBwbHVyYWxpemF0aW9uLlxuUG9seWdsb3QucHJvdG90eXBlLmxvY2FsZSA9IGZ1bmN0aW9uIChuZXdMb2NhbGUpIHtcbiAgaWYgKG5ld0xvY2FsZSkgdGhpcy5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlO1xufTtcblxuLy8gIyMjIHBvbHlnbG90LmV4dGVuZChwaHJhc2VzKVxuLy9cbi8vIFVzZSBgZXh0ZW5kYCB0byB0ZWxsIFBvbHlnbG90IGhvdyB0byB0cmFuc2xhdGUgYSBnaXZlbiBrZXkuXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9KTtcbi8vXG4vLyBUaGUga2V5IGNhbiBiZSBhbnkgc3RyaW5nLiAgRmVlbCBmcmVlIHRvIGNhbGwgYGV4dGVuZGAgbXVsdGlwbGUgdGltZXM7XG4vLyBpdCB3aWxsIG92ZXJyaWRlIGFueSBwaHJhc2VzIHdpdGggdGhlIHNhbWUga2V5LCBidXQgbGVhdmUgZXhpc3RpbmcgcGhyYXNlc1xuLy8gdW50b3VjaGVkLlxuLy9cbi8vIEl0IGlzIGFsc28gcG9zc2libGUgdG8gcGFzcyBuZXN0ZWQgcGhyYXNlIG9iamVjdHMsIHdoaWNoIGdldCBmbGF0dGVuZWRcbi8vIGludG8gYW4gb2JqZWN0IHdpdGggdGhlIG5lc3RlZCBrZXlzIGNvbmNhdGVuYXRlZCB1c2luZyBkb3Qgbm90YXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcIm5hdlwiOiB7XG4vLyAgICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiLFxuLy8gICAgICAgICBcInNpZGViYXJcIjoge1xuLy8gICAgICAgICAgIFwid2VsY29tZVwiOiBcIldlbGNvbWVcIlxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuLy8gICAgIC8vIHtcbi8vICAgICAvLyAgICduYXYuaGVsbG8nOiAnSGVsbG8nLFxuLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9Jyxcbi8vICAgICAvLyAgICduYXYuc2lkZWJhci53ZWxjb21lJzogJ1dlbGNvbWUnXG4vLyAgICAgLy8gfVxuLy9cbi8vIGBleHRlbmRgIGFjY2VwdHMgYW4gb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50LCBgcHJlZml4YCwgd2hpY2ggY2FuIGJlIHVzZWRcbi8vIHRvIHByZWZpeCBldmVyeSBrZXkgaW4gdGhlIHBocmFzZXMgb2JqZWN0IHdpdGggc29tZSBzdHJpbmcsIHVzaW5nIGRvdFxuLy8gbm90YXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9LCBcIm5hdlwiKTtcbi8vXG4vLyAgICAgY29uc29sZS5sb2cocG9seWdsb3QucGhyYXNlcyk7XG4vLyAgICAgLy8ge1xuLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4vLyAgICAgLy8gICAnbmF2LmhlbGxvX25hbWUnOiAnSGVsbG8sICV7bmFtZX0nXG4vLyAgICAgLy8gfVxuLy9cbi8vIFRoaXMgZmVhdHVyZSBpcyB1c2VkIGludGVybmFsbHkgdG8gc3VwcG9ydCBuZXN0ZWQgcGhyYXNlIG9iamVjdHMuXG5Qb2x5Z2xvdC5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgZm9yRWFjaChtb3JlUGhyYXNlcywgZnVuY3Rpb24gKHBocmFzZSwga2V5KSB7XG4gICAgdmFyIHByZWZpeGVkS2V5ID0gcHJlZml4ID8gcHJlZml4ICsgJy4nICsga2V5IDoga2V5O1xuICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5leHRlbmQocGhyYXNlLCBwcmVmaXhlZEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGhyYXNlc1twcmVmaXhlZEtleV0gPSBwaHJhc2U7XG4gICAgfVxuICB9LCB0aGlzKTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC51bnNldChwaHJhc2VzKVxuLy8gVXNlIGB1bnNldGAgdG8gc2VsZWN0aXZlbHkgcmVtb3ZlIGtleXMgZnJvbSBhIHBvbHlnbG90IGluc3RhbmNlLlxuLy9cbi8vICAgICBwb2x5Z2xvdC51bnNldChcInNvbWVfa2V5XCIpO1xuLy8gICAgIHBvbHlnbG90LnVuc2V0KHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0pO1xuLy9cbi8vIFRoZSB1bnNldCBtZXRob2QgY2FuIHRha2UgZWl0aGVyIGEgc3RyaW5nIChmb3IgdGhlIGtleSksIG9yIGFuIG9iamVjdCBoYXNoIHdpdGhcbi8vIHRoZSBrZXlzIHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gdW5zZXQuXG5Qb2x5Z2xvdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbiAobW9yZVBocmFzZXMsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG1vcmVQaHJhc2VzID09PSAnc3RyaW5nJykge1xuICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbbW9yZVBocmFzZXNdO1xuICB9IGVsc2Uge1xuICAgIGZvckVhY2gobW9yZVBocmFzZXMsIGZ1bmN0aW9uIChwaHJhc2UsIGtleSkge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gcHJlZml4ID8gcHJlZml4ICsgJy4nICsga2V5IDoga2V5O1xuICAgICAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMudW5zZXQocGhyYXNlLCBwcmVmaXhlZEtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5waHJhc2VzW3ByZWZpeGVkS2V5XTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufTtcblxuLy8gIyMjIHBvbHlnbG90LmNsZWFyKClcbi8vXG4vLyBDbGVhcnMgYWxsIHBocmFzZXMuIFVzZWZ1bCBmb3Igc3BlY2lhbCBjYXNlcywgc3VjaCBhcyBmcmVlaW5nXG4vLyB1cCBtZW1vcnkgaWYgeW91IGhhdmUgbG90cyBvZiBwaHJhc2VzIGJ1dCBubyBsb25nZXIgbmVlZCB0b1xuLy8gcGVyZm9ybSBhbnkgdHJhbnNsYXRpb24uIEFsc28gdXNlZCBpbnRlcm5hbGx5IGJ5IGByZXBsYWNlYC5cblBvbHlnbG90LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5waHJhc2VzID0ge307XG59O1xuXG4vLyAjIyMgcG9seWdsb3QucmVwbGFjZShwaHJhc2VzKVxuLy9cbi8vIENvbXBsZXRlbHkgcmVwbGFjZSB0aGUgZXhpc3RpbmcgcGhyYXNlcyB3aXRoIGEgbmV3IHNldCBvZiBwaHJhc2VzLlxuLy8gTm9ybWFsbHksIGp1c3QgdXNlIGBleHRlbmRgIHRvIGFkZCBtb3JlIHBocmFzZXMsIGJ1dCB1bmRlciBjZXJ0YWluXG4vLyBjaXJjdW1zdGFuY2VzLCB5b3UgbWF5IHdhbnQgdG8gbWFrZSBzdXJlIG5vIG9sZCBwaHJhc2VzIGFyZSBseWluZyBhcm91bmQuXG5Qb2x5Z2xvdC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChuZXdQaHJhc2VzKSB7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5leHRlbmQobmV3UGhyYXNlcyk7XG59O1xuXG5cbi8vICMjIyBwb2x5Z2xvdC50KGtleSwgb3B0aW9ucylcbi8vXG4vLyBUaGUgbW9zdC11c2VkIG1ldGhvZC4gUHJvdmlkZSBhIGtleSwgYW5kIGB0YCB3aWxsIHJldHVybiB0aGVcbi8vIHBocmFzZS5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImhlbGxvXCIpO1xuLy8gICAgID0+IFwiSGVsbG9cIlxuLy9cbi8vIFRoZSBwaHJhc2UgdmFsdWUgaXMgcHJvdmlkZWQgZmlyc3QgYnkgYSBjYWxsIHRvIGBwb2x5Z2xvdC5leHRlbmQoKWAgb3Jcbi8vIGBwb2x5Z2xvdC5yZXBsYWNlKClgLlxuLy9cbi8vIFBhc3MgaW4gYW4gb2JqZWN0IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gcGVyZm9ybSBpbnRlcnBvbGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaGVsbG9fbmFtZVwiLCB7bmFtZTogXCJTcGlrZVwifSk7XG4vLyAgICAgPT4gXCJIZWxsbywgU3Bpa2VcIlxuLy9cbi8vIElmIHlvdSBsaWtlLCB5b3UgY2FuIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIGluIGNhc2UgdGhlIHBocmFzZSBpcyBtaXNzaW5nLlxuLy8gVXNlIHRoZSBzcGVjaWFsIG9wdGlvbiBrZXkgXCJfXCIgdG8gc3BlY2lmeSBhIGRlZmF1bHQuXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJpX2xpa2VfdG9fd3JpdGVfaW5fbGFuZ3VhZ2VcIiwge1xuLy8gICAgICAgXzogXCJJIGxpa2UgdG8gd3JpdGUgaW4gJXtsYW5ndWFnZX0uXCIsXG4vLyAgICAgICBsYW5ndWFnZTogXCJKYXZhU2NyaXB0XCJcbi8vICAgICB9KTtcbi8vICAgICA9PiBcIkkgbGlrZSB0byB3cml0ZSBpbiBKYXZhU2NyaXB0LlwiXG4vL1xuUG9seWdsb3QucHJvdG90eXBlLnQgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zKSB7XG4gIHZhciBwaHJhc2UsIHJlc3VsdDtcbiAgdmFyIG9wdHMgPSBvcHRpb25zID09IG51bGwgPyB7fSA6IG9wdGlvbnM7XG4gIGlmICh0eXBlb2YgdGhpcy5waHJhc2VzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgcGhyYXNlID0gdGhpcy5waHJhc2VzW2tleV07XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMuXyA9PT0gJ3N0cmluZycpIHtcbiAgICBwaHJhc2UgPSBvcHRzLl87XG4gIH0gZWxzZSBpZiAodGhpcy5vbk1pc3NpbmdLZXkpIHtcbiAgICB2YXIgb25NaXNzaW5nS2V5ID0gdGhpcy5vbk1pc3NpbmdLZXk7XG4gICAgcmVzdWx0ID0gb25NaXNzaW5nS2V5KGtleSwgb3B0cywgdGhpcy5jdXJyZW50TG9jYWxlLCB0aGlzLnRva2VuUmVnZXgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2FybignTWlzc2luZyB0cmFuc2xhdGlvbiBmb3Iga2V5OiBcIicgKyBrZXkgKyAnXCInKTtcbiAgICByZXN1bHQgPSBrZXk7XG4gIH1cbiAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgb3B0cywgdGhpcy5jdXJyZW50TG9jYWxlLCB0aGlzLnRva2VuUmVnZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vICMjIyBwb2x5Z2xvdC5oYXMoa2V5KVxuLy9cbi8vIENoZWNrIGlmIHBvbHlnbG90IGhhcyBhIHRyYW5zbGF0aW9uIGZvciBnaXZlbiBrZXlcblBvbHlnbG90LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBoYXModGhpcy5waHJhc2VzLCBrZXkpO1xufTtcblxuLy8gZXhwb3J0IHRyYW5zZm9ybVBocmFzZVxuUG9seWdsb3QudHJhbnNmb3JtUGhyYXNlID0gZnVuY3Rpb24gdHJhbnNmb3JtKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpO1xufTtcblxudmFyIHdlYml4UG9seWdsb3QgPSBQb2x5Z2xvdDtcblxuZnVuY3Rpb24gTG9jYWxlKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xyXG4gICAgbGV0IGxhbmcgPSBzdG9yYWdlID8gKHN0b3JhZ2UuZ2V0KFwibGFuZ1wiKSB8fCBcImVuXCIpIDogKGNvbmZpZy5sYW5nIHx8IFwiZW5cIik7XHJcbiAgICBmdW5jdGlvbiBzZXRMYW5nRGF0YShuYW1lLCBkYXRhLCBzaWxlbnQpIHtcclxuICAgICAgICBpZiAoZGF0YS5fX2VzTW9kdWxlKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLmRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBjb25maWcgPSB7IHBocmFzZXM6IGRhdGEgfTtcclxuICAgICAgICBpZiAoY29uZmlnLnBvbHlnbG90KSB7XHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5leHRlbmQocGNvbmZpZywgY29uZmlnLnBvbHlnbG90KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9seSA9IHNlcnZpY2UucG9seWdsb3QgPSBuZXcgd2ViaXhQb2x5Z2xvdChwY29uZmlnKTtcclxuICAgICAgICBwb2x5LmxvY2FsZShuYW1lKTtcclxuICAgICAgICBzZXJ2aWNlLl8gPSBhcHAud2ViaXguYmluZChwb2x5LnQsIHBvbHkpO1xyXG4gICAgICAgIGxhbmcgPSBuYW1lO1xyXG4gICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2UucHV0KFwibGFuZ1wiLCBsYW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy53ZWJpeCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2NOYW1lID0gY29uZmlnLndlYml4W25hbWVdO1xyXG4gICAgICAgICAgICBpZiAobG9jTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYXBwLndlYml4LmkxOG4uc2V0TG9jYWxlKGxvY05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcHAucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRMYW5nKCkgeyByZXR1cm4gbGFuZzsgfVxyXG4gICAgZnVuY3Rpb24gc2V0TGFuZyhuYW1lLCBzaWxlbnQpIHtcclxuICAgICAgICAvLyBpZ25vcmUgc2V0TGFuZyBpZiBsb2FkaW5nIGJ5IHBhdGggaXMgZGlzYWJsZWRcclxuICAgICAgICBpZiAoY29uZmlnLnBhdGggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IChjb25maWcucGF0aCA/IGNvbmZpZy5wYXRoICsgXCIvXCIgOiBcIlwiKSArIG5hbWU7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoXCJqZXQtbG9jYWxlcy9cIiArIHBhdGgpO1xyXG4gICAgICAgIHNldExhbmdEYXRhKG5hbWUsIGRhdGEsIHNpbGVudCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldExhbmcsIHNldExhbmcsIHNldExhbmdEYXRhLCBfOiBudWxsLCBwb2x5Z2xvdDogbnVsbFxyXG4gICAgfTtcclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwibG9jYWxlXCIsIHNlcnZpY2UpO1xyXG4gICAgc2V0TGFuZyhsYW5nLCB0cnVlKTtcclxufVxuXG5mdW5jdGlvbiBzaG93KHZpZXcsIGNvbmZpZywgdmFsdWUpIHtcclxuICAgIGlmIChjb25maWcudXJscykge1xyXG4gICAgICAgIHZhbHVlID0gY29uZmlnLnVybHNbdmFsdWVdIHx8IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY29uZmlnLnBhcmFtKSB7XHJcbiAgICAgICAgdmFsdWUgPSB7IFtjb25maWcucGFyYW1dOiB2YWx1ZSB9O1xyXG4gICAgfVxyXG4gICAgdmlldy5zaG93KHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBNZW51KGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25zdCBmcmFtZSA9IHZpZXcuZ2V0U3ViVmlld0luZm8oKS5wYXJlbnQ7XHJcbiAgICBjb25zdCB1aSA9IHZpZXcuJCQoY29uZmlnLmlkIHx8IGNvbmZpZyk7XHJcbiAgICBsZXQgc2lsZW50ID0gZmFsc2U7XHJcbiAgICB1aS5hdHRhY2hFdmVudChcIm9uY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICBzaG93KGZyYW1lLCBjb25maWcsIHRoaXMuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB1aS5hdHRhY2hFdmVudChcIm9uYWZ0ZXJzZWxlY3RcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh1aS5zZXRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWQgPSB0aGlzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkuZ2V0U2VsZWN0ZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgaWQgPSB1aS5nZXRTZWxlY3RlZElkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2hvdyhmcmFtZSwgY29uZmlnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB2aWV3Lm9uKGFwcCwgYGFwcDpyb3V0ZWAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wYXJhbSkge1xyXG4gICAgICAgICAgICBuYW1lID0gdmlldy5nZXRQYXJhbShjb25maWcucGFyYW0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VnbWVudCA9IGZyYW1lLmdldFVybCgpWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHNlZ21lbnQucGFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICBzaWxlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodWkuc2V0VmFsdWUgJiYgdWkuZ2V0VmFsdWUoKSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0VmFsdWUobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkuc2VsZWN0ICYmIHVpLmV4aXN0cyhuYW1lKSAmJiB1aS5nZXRTZWxlY3RlZElkKCkgIT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNlbGVjdChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaWxlbnQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxuXG5jb25zdCBiYXNlaWNvbnMgPSB7XHJcbiAgICBnb29kOiBcImNoZWNrXCIsXHJcbiAgICBlcnJvcjogXCJ3YXJuaW5nXCIsXHJcbiAgICBzYXZpbmc6IFwicmVmcmVzaCBmYS1zcGluXCJcclxufTtcclxuY29uc3QgYmFzZXRleHQgPSB7XHJcbiAgICBnb29kOiBcIk9rXCIsXHJcbiAgICBlcnJvcjogXCJFcnJvclwiLFxyXG4gICAgc2F2aW5nOiBcIkNvbm5lY3RpbmcuLi5cIlxyXG59O1xyXG5mdW5jdGlvbiBTdGF0dXMoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGxldCBzdGF0dXMgPSBcImdvb2RcIjtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBsZXQgaXNlcnJvciA9IGZhbHNlO1xyXG4gICAgbGV0IGV4cGlyZURlbGF5ID0gY29uZmlnLmV4cGlyZTtcclxuICAgIGlmICghZXhwaXJlRGVsYXkgJiYgZXhwaXJlRGVsYXkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgZXhwaXJlRGVsYXkgPSAyMDAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGV4dHMgPSBjb25maWcudGV4dHMgfHwgYmFzZXRleHQ7XHJcbiAgICBjb25zdCBpY29ucyA9IGNvbmZpZy5pY29ucyB8fCBiYXNlaWNvbnM7XHJcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGNvbmZpZyA9IHsgdGFyZ2V0OiBjb25maWcgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZnJlc2goY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSB2aWV3LiQkKGNvbmZpZy50YXJnZXQpO1xyXG4gICAgICAgIGlmIChhcmVhKSB7XHJcbiAgICAgICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IFwiPGRpdiBjbGFzcz0nc3RhdHVzX1wiICtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJz48c3BhbiBjbGFzcz0nd2ViaXhfaWNvbiBmYS1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbc3RhdHVzXSArIFwiJz48L3NwYW4+IFwiICsgdGV4dHNbc3RhdHVzXSArIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJlYS5zZXRIVE1MKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBzZXRTdGF0dXMoXCJnb29kXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmFpbChlcnIpIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIHNldFN0YXR1cyhcImVycm9yXCIsIGVycik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdGFydChwcm9taXNlKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgICBzZXRTdGF0dXMoXCJzYXZpbmdcIik7XHJcbiAgICAgICAgaWYgKHByb21pc2UgJiYgcHJvbWlzZS50aGVuKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UudGhlbihzdWNjZXNzLCBmYWlsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpZGVTdGF0dXMoKSB7XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlZnJlc2goXCIgXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFN0YXR1cyhtb2RlLCBlcnIpIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZGUgPT09IFwic2F2aW5nXCIpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gXCJzYXZpbmdcIjtcclxuICAgICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXNlcnJvciA9IChtb2RlID09PSBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IGlzZXJyb3IgPyBcImVycm9yXCIgOiBcImdvb2RcIjtcclxuICAgICAgICAgICAgICAgIGlmIChpc2Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLmVycm9yKFwiYXBwOmVycm9yOnNlcnZlclwiLCBbZXJyLnJlc3BvbnNlVGV4dCB8fCBlcnJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBpcmVEZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVTdGF0dXMsIGV4cGlyZURlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmFjayhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZHAgPSBhcHAud2ViaXguZHAoZGF0YSk7XHJcbiAgICAgICAgaWYgKGRwKSB7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlckRhdGFTZW5kXCIsIHN0YXJ0KTtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyU2F2ZUVycm9yXCIsIChfaWQsIF9vYmosIHJlc3BvbnNlKSA9PiBmYWlsKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlclNhdmVcIiwgc3VjY2Vzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJzdGF0dXNcIiwge1xyXG4gICAgICAgIGdldFN0YXR1cyxcclxuICAgICAgICBzZXRTdGF0dXMsXHJcbiAgICAgICAgdHJhY2tcclxuICAgIH0pO1xyXG4gICAgaWYgKGNvbmZpZy5yZW1vdGUpIHtcclxuICAgICAgICB2aWV3Lm9uKGFwcC53ZWJpeCwgXCJvblJlbW90ZUNhbGxcIiwgc3RhcnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5hamF4KSB7XHJcbiAgICAgICAgdmlldy5vbihhcHAud2ViaXgsIFwib25CZWZvcmVBamF4XCIsIChfbW9kZSwgX3VybCwgX2RhdGEsIF9yZXF1ZXN0LCBfaGVhZGVycywgX2ZpbGVzLCBwcm9taXNlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXJ0KHByb21pc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5kYXRhKSB7XHJcbiAgICAgICAgdHJhY2soY29uZmlnLmRhdGEpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIFRoZW1lKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xyXG4gICAgbGV0IHRoZW1lID0gc3RvcmFnZSA/XHJcbiAgICAgICAgKHN0b3JhZ2UuZ2V0KFwidGhlbWVcIikgfHwgXCJmbGF0LWRlZmF1bHRcIilcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIChjb25maWcudGhlbWUgfHwgXCJmbGF0LWRlZmF1bHRcIik7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldFRoZW1lKCkgeyByZXR1cm4gdGhlbWU7IH0sXHJcbiAgICAgICAgc2V0VGhlbWUobmFtZSwgc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsbmFtZSA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxuYW1lID09PSBuYW1lIHx8IGxuYW1lID09PSBwYXJ0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcHAud2ViaXguc2tpbi5zZXQocGFydHNbMF0pO1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGNzc1xyXG4gICAgICAgICAgICBhcHAud2ViaXguaHRtbC5yZW1vdmVDc3MoZG9jdW1lbnQuYm9keSwgXCJ0aGVtZS1cIiArIHRoZW1lKTtcclxuICAgICAgICAgICAgLy8gYWRkIG5ldyBjc3NcclxuICAgICAgICAgICAgYXBwLndlYml4Lmh0bWwuYWRkQ3NzKGRvY3VtZW50LmJvZHksIFwidGhlbWUtXCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgdGhlbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5wdXQoXCJ0aGVtZVwiLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICAgICAgYXBwLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBhcHAuc2V0U2VydmljZShcInRoZW1lXCIsIHNlcnZpY2UpO1xyXG4gICAgc2VydmljZS5zZXRUaGVtZSh0aGVtZSwgdHJ1ZSk7XHJcbn1cblxuZnVuY3Rpb24gY29weVBhcmFtcyhkYXRhLCB1cmwsIHJvdXRlKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGF0YVtyb3V0ZVtpXV0gPSB1cmxbaSArIDFdID8gdXJsW2kgKyAxXS5wYWdlIDogXCJcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBVcmxQYXJhbShhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uc3Qgcm91dGUgPSBjb25maWcucm91dGUgfHwgY29uZmlnO1xyXG4gICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgdmlldy5vbihhcHAsIFwiYXBwOnVybGNoYW5nZVwiLCBmdW5jdGlvbiAoc3Vidmlldywgc2VnbWVudCkge1xyXG4gICAgICAgIGlmICh2aWV3ID09PSBzdWJ2aWV3KSB7XHJcbiAgICAgICAgICAgIGNvcHlQYXJhbXMoZGF0YSwgc2VnbWVudC5zdWJ1cmwoKSwgcm91dGUpO1xyXG4gICAgICAgICAgICBzZWdtZW50LnNpemUocm91dGUubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvcyA9IHZpZXcuc2V0UGFyYW07XHJcbiAgICBjb25zdCBvZyA9IHZpZXcuZ2V0UGFyYW07XHJcbiAgICB2aWV3LnNldFBhcmFtID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBzaG93KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSByb3V0ZS5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2VnbWVudC51cGRhdGUoXCJcIiwgdmFsdWUsIGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldy5zaG93KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gb3MuY2FsbCh0aGlzLCBuYW1lLCB2YWx1ZSwgc2hvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZpZXcuZ2V0UGFyYW0gPSBmdW5jdGlvbiAoa2V5LCBtb2RlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YVtrZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvZy5jYWxsKHRoaXMsIGtleSwgbW9kZSk7XHJcbiAgICB9O1xyXG4gICAgY29weVBhcmFtcyhkYXRhLCB2aWV3LmdldFVybCgpLCByb3V0ZSk7XHJcbn1cblxuZnVuY3Rpb24gVXNlcihhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IGxvZ2luID0gY29uZmlnLmxvZ2luIHx8IFwiL2xvZ2luXCI7XHJcbiAgICBjb25zdCBsb2dvdXQgPSBjb25maWcubG9nb3V0IHx8IFwiL2xvZ291dFwiO1xyXG4gICAgY29uc3QgYWZ0ZXJMb2dpbiA9IGNvbmZpZy5hZnRlckxvZ2luIHx8IGFwcC5jb25maWcuc3RhcnQ7XHJcbiAgICBjb25zdCBhZnRlckxvZ291dCA9IGNvbmZpZy5hZnRlckxvZ291dCB8fCBcIi9sb2dpblwiO1xyXG4gICAgY29uc3QgcGluZyA9IGNvbmZpZy5waW5nIHx8IDUgKiA2MCAqIDEwMDA7XHJcbiAgICBjb25zdCBtb2RlbCA9IGNvbmZpZy5tb2RlbDtcclxuICAgIGxldCB1c2VyID0gY29uZmlnLnVzZXI7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldFVzZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U3RhdHVzKHNlcnZlcikge1xyXG4gICAgICAgICAgICBpZiAoIXNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIgIT09IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLnN0YXR1cygpLmNhdGNoKCgpID0+IG51bGwpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dpbihuYW1lLCBwYXNzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5sb2dpbihuYW1lLCBwYXNzKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXBwLmNhbGxFdmVudChcImFwcDp1c2VyOmxvZ2luXCIsIFt1c2VyXSk7XHJcbiAgICAgICAgICAgICAgICBhcHAuc2hvdyhhZnRlckxvZ2luKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwubG9nb3V0KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBwLmNhbGxFdmVudChcImFwcDp1c2VyOmxvZ291dFwiLCBbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gY2FuTmF2aWdhdGUodXJsLCBvYmopIHtcclxuICAgICAgICBpZiAodXJsID09PSBsb2dvdXQpIHtcclxuICAgICAgICAgICAgc2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICAgICAgb2JqLnJlZGlyZWN0ID0gYWZ0ZXJMb2dvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHVybCAhPT0gbG9naW4gJiYgIXNlcnZpY2UuZ2V0U3RhdHVzKCkpIHtcclxuICAgICAgICAgICAgb2JqLnJlZGlyZWN0ID0gbG9naW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJ1c2VyXCIsIHNlcnZpY2UpO1xyXG4gICAgYXBwLmF0dGFjaEV2ZW50KGBhcHA6Z3VhcmRgLCBmdW5jdGlvbiAodXJsLCBfJHJvb3QsIG9iaikge1xyXG4gICAgICAgIGlmIChjb25maWcucHVibGljICYmIGNvbmZpZy5wdWJsaWModXJsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1c2VyID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIG9iai5jb25maXJtID0gc2VydmljZS5nZXRTdGF0dXModHJ1ZSkudGhlbigoKSA9PiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FuTmF2aWdhdGUodXJsLCBvYmopO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocGluZykge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHNlcnZpY2UuZ2V0U3RhdHVzKHRydWUpLCBwaW5nKTtcclxuICAgIH1cclxufVxuXG4vKlxyXG5NSVQgTGljZW5zZVxyXG5Db3B5cmlnaHQgKGMpIDIwMTkgWEIgU29mdHdhcmVcclxuKi9cclxubGV0IHdlYml4ID0gd2luZG93LndlYml4O1xyXG5pZiAod2ViaXgpIHtcclxuICAgIHBhdGNoKHdlYml4KTtcclxufVxyXG5jb25zdCBwbHVnaW5zID0ge1xyXG4gICAgVW5sb2FkR3VhcmQsIExvY2FsZSwgTWVudSwgVGhlbWUsIFVzZXIsIFN0YXR1cywgVXJsUGFyYW1cclxufTtcclxuY29uc3QgdyA9IHdpbmRvdztcclxuaWYgKCF3LlByb21pc2UpIHtcclxuICAgIHcuUHJvbWlzZSA9IHcud2ViaXgucHJvbWlzZTtcclxufVxuXG5leHBvcnQgeyBwbHVnaW5zLCBKZXRBcHAsIEpldFZpZXcsIEhhc2hSb3V0ZXIsIFN0b3JlUm91dGVyLCBVcmxSb3V0ZXIsIEVtcHR5Um91dGVyLCBTdWJSb3V0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpldC5qcy5tYXBcbiIsImNvbnN0IGxvZ291dFVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9nb3V0JztcclxuY29uc3QgbG9naW5VcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJztcclxuY29uc3QgcmVnaXN0ZXJVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6YXRpb24ge1xyXG5cdHJlZ2lzdGVyKG9iaikge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHJlZ2lzdGVyVXJsLCBvYmopO1xyXG5cdH1cclxuXHJcblx0bG9naW4ob2JqKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QobG9naW5VcmwsIG9iaik7XHJcblx0fVxyXG5cclxuXHRsb2dvdXQoZGF0ZSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KGxvZ291dFVybCwgZGF0ZSk7XHJcblx0fVxyXG59IiwiY29uc3QgRFVNTVlDT1ZFUiA9ICdodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYWQvZmQvNTgvYWRmZDU4NzNiZTM4NDFmMDY2MGU2YWFhMDBjZGUxOGUuanBnJztcclxuY29uc3QgU1VDQ0VTUyA9IDI7XHJcbmNvbnN0IFVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG5cclxuZXhwb3J0IHtEVU1NWUNPVkVSLCBTVUNDRVNTLCBVUkx9OyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NvdXJjZXMvbG9jYWxlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImNsYXNzIEJvb2tzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IFtdO1xyXG5cdFx0dGhpcy5fdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ib29rcy8nO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoaWQpIHtcclxuXHRcdGNvbnN0IHVzZXJfaWQgPSB7dXNlcl9pZDogaWR9O1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQodGhpcy5fdXJsLCB1c2VyX2lkKTtcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucHV0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmRlbCh0aGlzLl91cmwsIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBCb29rc01vZGVsKCk7IiwiY2xhc3MgRmlsZXNNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl91cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2ZpbGVzLyc7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhRnJvbVNlcnZlcigpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KHRoaXMuX3VybCk7XHJcblx0fVxyXG5cdFxyXG5cdGdldEl0ZW1zKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtpZH1gKTtcdFxyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdGRvd25sb2FkSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5yZXNwb25zZSgnYmxvYicpLmdldChgJHt0aGlzLl91cmx9ZG93bmxvYWQvJHtpZH1gKTtcdFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZpbGVzTW9kZWwoKTsiLCJjbGFzcyBMaWtlc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBbXTtcclxuXHRcdHRoaXMuX3VybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGlrZXMvJztcclxuXHR9XHJcblxyXG5cdGdldERhdGFGcm9tU2VydmVyKCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQodGhpcy5fdXJsKTtcclxuXHR9XHJcblxyXG5cdGFkZExpa2UodXNlcklkLCBib29rSWQpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJJZDogdXNlcklkLFxyXG5cdFx0XHRib29rSWQ6IGJvb2tJZFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUxpa2UodXNlcklkLCBib29rSWQpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJJZDogdXNlcklkLFxyXG5cdFx0XHRib29rSWQ6IGJvb2tJZFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmRlbCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExpa2VzTW9kZWwoKTsiLCJjbGFzcyBVc2Vyc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3VybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvJztcclxuXHR9XHJcblxyXG5cdGdldERhdGFGcm9tU2VydmVyKCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQodGhpcy5fdXJsKTtcclxuXHR9XHJcblx0XHJcblx0Z2V0SXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHRcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucHV0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlcnNNb2RlbCgpOyIsImltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcbmltcG9ydCB7SmV0QXBwLCBFbXB0eVJvdXRlciwgSGFzaFJvdXRlciB9IGZyb20gJ3dlYml4LWpldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEpldEFwcHtcclxuXHRjb25zdHJ1Y3Rvcihjb25maWcpe1xyXG5cdFx0Y29uc3QgZGVmYXVsdHMgPSB7XHJcblx0XHRcdGlkIFx0XHQ6IEFQUE5BTUUsXHJcblx0XHRcdHZlcnNpb24gOiBWRVJTSU9OLFxyXG5cdFx0XHRyb3V0ZXIgXHQ6IEJVSUxEX0FTX01PRFVMRSA/IEVtcHR5Um91dGVyIDogSGFzaFJvdXRlcixcclxuXHRcdFx0ZGVidWcgXHQ6ICFQUk9EVUNUSU9OLFxyXG5cdFx0XHRzdGFydCBcdDogJy9sb2dpbidcclxuXHRcdH07XHJcblxyXG5cdFx0c3VwZXIoeyAuLi5kZWZhdWx0cywgLi4uY29uZmlnIH0pO1xyXG5cdH1cclxufVxyXG5cclxuaWYgKCFCVUlMRF9BU19NT0RVTEUpe1xyXG5cdHdlYml4LnJlYWR5KCgpID0+IHtcclxuXHRcdGNvbnN0IGFwcCA9IG5ldyBNeUFwcCgpO1xyXG5cdFx0YXBwLmF0dGFjaEV2ZW50KCdhcHA6Z3VhcmQnLCAodXJsLCB2aWV3LCBuYXYpID0+IHtcclxuXHRcdFx0aWYodXJsLmluZGV4T2YoJ2lkJykgIT09IC0xKSB7XHJcblx0XHRcdFx0Y29uc3QgdXJsUGFydHMgPSB1cmwuc3BsaXQoJy8nKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0UGFydDtcclxuXHJcblx0XHRcdFx0dXJsUGFydHMuZm9yRWFjaCgoZWwpID0+IHtcclxuXHRcdFx0XHRcdGlmKGVsLmluZGV4T2YoJ2lkJykgIT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0dGFyZ2V0UGFydCA9IGVsO1xyXG5cdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Y29uc3QgaSA9IHRhcmdldFBhcnQuaW5kZXhPZignaWQnKTtcclxuXHRcdFx0XHRjb25zdCByb2xlID0gdGFyZ2V0UGFydC5zcGxpdCgnLicpWzBdO1xyXG5cdFx0XHRcdGNvbnN0IGlkID0gdGFyZ2V0UGFydC5zbGljZShpKzMpO1xyXG4gXHJcblx0XHRcdFx0d2ViaXguYWpheCgpLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NoZWNrJykudGhlbihcclxuXHRcdFx0XHRcdChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSByZXMuanNvbigpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5yb2xlICE9IHJvbGUgfHwgcmVzcG9uc2UuaWQgIT0gaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYoZXJyb3Iuc3RhdHVzID09IDQwMSkge1xyXG5cdFx0XHRcdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGFwcC5yZW5kZXIoKTtcclxuXHR9KTtcclxufSIsImltcG9ydCB7U1VDQ0VTU30gZnJvbSAnLi9jb25zdHMnO1xyXG5cclxuY29uc3QgdG9nZ2xlRWxlbWVudCA9IChjb25kaXRpb24sIGVsZW1lbnQpID0+IHtcclxuXHRpZiAoY29uZGl0aW9uKSB7XHJcblx0XHRlbGVtZW50LnNob3coKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRlbGVtZW50LmhpZGUoKTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBhZGRJdGVtID0gKE1vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKSA9PiB7XHJcblx0TW9kZWwuYWRkSXRlbShkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zZXJ2ZXJTdGF0dXM7XHJcblx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHN1Y2Nlc3NBY3Rpb24oKTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVJdGVtID0gKE1vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKSA9PiB7XHJcblx0TW9kZWwudXBkYXRlSXRlbShkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zZXJ2ZXJTdGF0dXM7XHJcblx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRzdWNjZXNzQWN0aW9uKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG53ZWJpeC5wcm90b1VJKHtcclxuXHRuYW1lOiBcImFjdGl2ZUxpc3RcIixcclxuXHRkZWZhdWx0czoge1xyXG5cdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHR0eXBlOiB7XHJcblx0XHRcdGhlaWdodDogMzBcclxuXHRcdH1cclxuXHR9XHJcbn0sIHdlYml4LnVpLmxpc3QpO1xyXG5cclxuZXhwb3J0IHt0b2dnbGVFbGVtZW50LCBhZGRJdGVtLCB1cGRhdGVJdGVtfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWRtaW5cIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL1wiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qc1wiLFxuXHRcIi4vYWRtaW4vaW5kZXhcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL2luZGV4LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi91c2VyRm9ybVwiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi91c2VyRm9ybS5qc1wiLFxuXHRcIi4vYWRtaW4vdXNlckZvcm0uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vdXNlckZvcm0uanNcIixcblx0XCIuL2NvbW1vbi9saWJyYXJ5XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2NvbW1vbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9jb21tb24vbGlicmFyeS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9jb21tb24vbGlicmFyeS5qc1wiLFxuXHRcIi4vbGlicmFyaWFuXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9ib29rQ2FyZFwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vYm9va0NhcmQuanNcIixcblx0XCIuL2xpYnJhcmlhbi9ib29rQ2FyZC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vYm9va0NhcmQuanNcIixcblx0XCIuL2xpYnJhcmlhbi9pbmRleFwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9saWJyYXJ5XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vbGlicmFyeS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vbGlicmFyeS5qc1wiLFxuXHRcIi4vbG9naW5cIjogXCIuL3NvdXJjZXMvdmlld3MvbG9naW4uanNcIixcblx0XCIuL2xvZ2luLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzXCIsXG5cdFwiLi9yZWFkZXJcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL2Jvb2tDYXJkXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vcmVhZGVyL2Jvb2tDYXJkLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vcmVhZGVyL2luZGV4XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL2luZGV4LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL2xpYnJhcnlcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2xpYnJhcnkuanNcIixcblx0XCIuL3JlYWRlci9saWJyYXJ5LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9saWJyYXJ5LmpzXCIsXG5cdFwiLi9yZWFkZXIvbWFpblwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbWFpbi5qc1wiLFxuXHRcIi4vcmVhZGVyL21haW4uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL21haW4uanNcIixcblx0XCIuL3JlYWRlci9zZXR0aW5nc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvc2V0dGluZ3MuanNcIixcblx0XCIuL3JlYWRlci9zZXR0aW5ncy5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvc2V0dGluZ3MuanNcIixcblx0XCIuL3JlYWRlci90b3BzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci90b3BzLmpzXCIsXG5cdFwiLi9yZWFkZXIvdG9wcy5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvdG9wcy5qc1wiLFxuXHRcIi4vcmVnaXN0ZXJcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanNcIixcblx0XCIuL3JlZ2lzdGVyLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlZ2lzdGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlcy92aWV3cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vLi4vYXV0aG9yaXphdGlvbic7XHJcbmltcG9ydCB1c2Vyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy91c2Vycyc7XHJcbmltcG9ydCBVc2VyRm9ybSBmcm9tICcuL3VzZXJGb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgXHJcblx0XHRcdHRlbXBsYXRlOiAnVXNlcnMgbGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbG9nb3V0ID0ge1xyXG5cdFx0XHR2aWV3OididXR0b24nLCBcclxuXHRcdFx0bG9jYWxJZDonbG9nb3V0QnRuJywgXHJcblx0XHRcdHZhbHVlOidMb2dvdXQnLCBcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0dHlwZTonZm9ybSdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZHRhYmxlID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICd1c2Vyc0xpc3QnLFxyXG5cdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdpZCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IDFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZnVsbF9uYW1lJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ05hbWUnLFxyXG5cdFx0XHRcdFx0bWluV2lkdGg6IDE4MCxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMS41XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3JvbGVfbmFtZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSb2xlJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA5MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdwYXNzcG9ydF9JRCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdQYXNzcG9ydCBJRCcsXHJcblx0XHRcdFx0XHR3aWR0aDogMTMwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2JpcnRoX2RhdGUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQmlydGggZGF0ZScsXHJcblx0XHRcdFx0XHR3aWR0aDogMTMwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2FkZHJlc3MnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQWRkcmVzcycsXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogMTgwLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLjVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncGhvbmVfbnVtYmVycycsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdQaG9uZSBudW1iZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDE5MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdlbWFpbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdFbWFpbCcsXHJcblx0XHRcdFx0XHR3aWR0aDogMTgwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2VkaXQnLCBcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0VkaXQnLCBcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAne2NvbW1vbi5lZGl0SWNvbigpfSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnd3hpLXBlbmNpbCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5lZGl0VXNlcihpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZFVzZXJCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0FkZCB1c2VyJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYWRkVXNlcigpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHRyb3dzOltcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0dHlwZTogJ2NsZWFuJyxcclxuXHRcdFx0XHRcdGNvbHM6IFtoZWFkZXIsIGxvZ291dF0gXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRkdGFibGUsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHR7fSwgYWRkVXNlckJ0biwge31cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHVzZXJzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0bGV0IHVzZXJzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHRcdFx0dXNlcnNBcnIgPSB1c2Vyc0Fyci5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwuZnVsbF9uYW1lID0gZWwudXNlcl9uYW1lICsgJyAnICsgZWwudXNlcl9zdXJuYW1lO1xyXG5cdFx0XHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVktJW0tJWRcIik7XHJcblx0XHRcdFx0ZWwuYmlydGhfZGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShlbC5iaXJ0aF9kYXRlKSk7XHJcblx0XHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy51c2Vyc0RhdGEgPSB1c2Vyc0FycjtcclxuXHRcdFx0JCQoJ3VzZXJzTGlzdCcpLnBhcnNlKHVzZXJzQXJyKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblxyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCh7Y3VycmVudERhdGV9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuX3VzZXJGb3JtID0gdGhpcy51aShVc2VyRm9ybSk7XHJcblx0fVxyXG5cclxuXHRlZGl0VXNlcihpZCkge1xyXG5cdFx0Y29uc3QgdXNlciA9IHRoaXMudXNlcnNEYXRhLmZpbmQoZWwgPT4gZWwuaWQgPT0gaWQpO1xyXG5cdFx0dGhpcy5fdXNlckZvcm0uc2hvd1dpbmRvdyh1c2VyKTtcclxuXHR9XHJcblxyXG5cdGFkZFVzZXIoKSB7XHJcblx0XHR0aGlzLl91c2VyRm9ybS5zaG93V2luZG93KCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB1c2Vyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy91c2Vycyc7XHJcbmltcG9ydCB7dG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbX0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAnd2luZG93JyxcclxuXHRcdFx0bG9jYWxJZDogJ3VzZXJXaW5kb3cnLFxyXG5cdFx0XHRoZWFkOiAnRWRpdCB1c2VyJyxcclxuXHRcdFx0d2lkdGg6IDYwMCxcclxuXHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdGxvY2FsSWQ6ICd1c2VyRm9ybScsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIG5hbWU6ICdpZCcsIGxvY2FsSWQ6ICdpZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0ZpcnN0IG5hbWUnLCBuYW1lOiAndXNlcl9uYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdMYXN0IG5hbWUnLCBuYW1lOiAndXNlcl9zdXJuYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICdjb21ibycsIGxhYmVsOiAnUm9sZScsIG5hbWU6ICdjYXBhYmlsaXRpZXNfaWQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0Jywgb3B0aW9uczogW1xyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAxLCB2YWx1ZTogJ3JlYWRlcid9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAyLCB2YWx1ZTogJ2xhYnJhcmlhbid9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAzLCB2YWx1ZTogJ2FkbWluJ31cclxuXHRcdFx0XHRcdFx0XHRdIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFzc3BvcnQgSUQnLCBuYW1lOiAncGFzc3BvcnRfSUQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ2RhdGVwaWNrZXInLCBsYWJlbDogJ0JpcnRoIGRhdGUnLCBuYW1lOiAnYmlydGhfZGF0ZScsIGxvY2FsSWQ6ICdiaXJ0aF9kYXRlJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBZGRyZXNzJywgbmFtZTogJ2FkZHJlc3MnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bob25lJywgbmFtZTogJ3Bob25lX251bWJlcnMnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0VtYWlsJywgbmFtZTogJ2VtYWlsJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdhY2NvdW50X3Bhc3N3b3JkJywgbG9jYWxJZDogJ2luaXRpYWxfcGFzc3dvcmQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdFx0XHRcdCdjYXBhYmlsaXRpZXNfaWQnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5LFxyXG5cdFx0XHRcdFx0XHRcdCdlbWFpbCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdFx0J2FjY291bnRfcGFzc3dvcmQnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5LFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAyMCxcclxuXHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIHZhbHVlOiAnU2F2ZScsIHR5cGU6ICdmb3JtJywgbG9jYWxJZDogJ3NhdmVCdG4nLCB3aWR0aDogMTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIHZhbHVlOiAnQ2FuY2VsJywgd2lkdGg6IDEwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuaGlkZVdpbmRvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e31cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmZvcm0gPSB0aGlzLiQkKCd1c2VyRm9ybScpO1xyXG5cdFx0dGhpcy53aW5kb3cgPSB0aGlzLiQkKCd1c2VyV2luZG93Jyk7XHJcblx0fVxyXG5cclxuXHRzdWNjZXNzQWN0aW9uKCkge1xyXG5cdFx0dGhpcy53ZWJpeC5tZXNzYWdlKCdTdWNjZXNzJyk7XHJcblx0XHR0aGlzLmhpZGVXaW5kb3coKTtcclxuXHR9XHJcblxyXG5cdHNob3dXaW5kb3codXNlcikge1x0XHJcblx0XHR0aGlzLmlzTmV3ID0gdXNlciA/IGZhbHNlIDogdHJ1ZTtcdFxyXG5cclxuXHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0dGhpcy53aW5kb3cuZ2V0SGVhZCgpLnNldEhUTUwoJ0FkZCB1c2VyJyk7XHJcblx0XHRcdHRoaXMud2luZG93LmdldEhlYWQoKS5yZWZyZXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5mb3JtLnNldFZhbHVlcyh1c2VyKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbml0aWFsX3Bhc3N3b3JkID0gdGhpcy4kJCgnaW5pdGlhbF9wYXNzd29yZCcpO1xyXG5cdFx0dG9nZ2xlRWxlbWVudCh0aGlzLmlzTmV3LCBpbml0aWFsX3Bhc3N3b3JkKTtcclxuXHRcdFxyXG5cclxuXHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuZm9ybS5nZXRWYWx1ZXMoKTtcdFxyXG5cdFx0XHJcblx0XHRpZih0aGlzLmZvcm0udmFsaWRhdGUoKSkge1xyXG5cdFx0XHRpZih0aGlzLmlzTmV3KSB7XHJcblx0XHRcdFx0YWRkSXRlbSh1c2Vyc01vZGVsLCBkYXRhLCB0aGlzLnN1Y2Nlc3NBY3Rpb24uYmluZCh0aGlzKSk7XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR1cGRhdGVJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHRoaXMuc3VjY2Vzc0FjdGlvbi5iaW5kKHRoaXMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcclxuXHR9XHJcblxyXG5cdGhpZGVXaW5kb3coKSB7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXJWYWxpZGF0aW9uKCk7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXIoKTtcclxuXHRcdHRoaXMuZ2V0Um9vdCgpLmhpZGUoKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IGJvb2tzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2tzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnkgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25zdHJ1Y3RvcihhcHAsIGxpYnJhcnlDb25maWcsIGJvb2tDYXJkKSB7XHJcblx0XHRzdXBlcihhcHApO1xyXG5cdFx0dGhpcy5saWJyYXJ5Q29uZmlnID0gbGlicmFyeUNvbmZpZztcclxuXHRcdHRoaXMuYm9va0NhcmQgPSBib29rQ2FyZDtcclxuXHR9XHJcblxyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTogJ2hlYWRlcicsXHJcblx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtYm9va1wiPjwvaT4gTGlzdCBvZiBib29rcycsXHJcblx0XHRcdGNzczogJ2NlbnRlciBwYWdlX2hlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZHRhYmxlID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICdkdF9saWJyYXJ5JyxcclxuXHRcdFx0c2VsZWN0OiB0cnVlLFxyXG5cdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdpZCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Jvb2tfdGl0bGUnLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ1RpdGxlJywge2NvbnRlbnQ6ICd0ZXh0RmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2F1dGhvcl9uYW1lJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydBdXRob3InLCB7Y29udGVudDogJ3RleHRGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZ2VucmVzJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnR2VucmVzJywge2NvbnRlbnQ6ICdzZWxlY3RGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ0NvdW50cnknLCB7Y29udGVudDogJ3NlbGVjdEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICd5ZWFyX29mX3B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICdkYXRlJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRmb3JtYXQ6IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVlcIiksXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnWWVhcicsIHtjb250ZW50OiAnZGF0ZVJhbmdlRmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2F2YWlsYWJsZV9jb3BpZXMnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0F2YWlsYWJsZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAndmlld0NvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdWaWV3JyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2VkaXRDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRWRpdCcsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J2ZhLWV5ZSc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93Qm9va0NhcmQoaWQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2ZhLWVkaXQnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd0Jvb2tDYXJkKGlkKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdmYS10cmFzaCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVCb29rKGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm93czogW2hlYWRlciwgZHRhYmxlXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmdyaWQgPSAkJCgnZHRfbGlicmFyeScpO1xyXG5cclxuXHRcdHN3aXRjaCAodGhpcy5saWJyYXJ5Q29uZmlnLnJvbGUpIHtcclxuXHRcdFx0Y2FzZSAncmVhZGVyJzogXHJcblx0XHRcdFx0dGhpcy5ncmlkLmdldENvbHVtbkNvbmZpZygnZWRpdENvbCcpLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5ncmlkLmdldENvbHVtbkNvbmZpZygncmVtb3ZlQ29sJykuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbGlicmFyaWFuJzpcclxuXHRcdFx0XHR0aGlzLmdyaWQuZ2V0Q29sdW1uQ29uZmlnKCd2aWV3Q29sJykuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHRoaXMuZ3JpZC5yZWZyZXNoQ29sdW1ucygpO1xyXG5cdFx0dGhpcy5nZXREYXRhKCk7XHJcblx0XHR0aGlzLl9ib29rQ2FyZCA9IHRoaXMudWkodGhpcy5ib29rQ2FyZCk7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKCkge1x0XHRcclxuXHRcdGNvbnN0IHVzZXJfaWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblx0XHRib29rc01vZGVsLmdldERhdGFGcm9tU2VydmVyKHVzZXJfaWQpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRsZXQgYm9va3NBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cclxuXHRcdFx0Ym9va3NBcnIgPSBib29rc0Fyci5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwueWVhcl9vZl9wdWJsaWNhdGlvbiA9IG5ldyBEYXRlKGVsLnllYXJfb2ZfcHVibGljYXRpb24pO1xyXG5cdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmdyaWQucGFyc2UoYm9va3NBcnIpO1xyXG5cdFx0XHR0aGlzLmJvb2tzQXJyID0gYm9va3NBcnI7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNob3dCb29rQ2FyZChpZCkge1xyXG5cdFx0Y29uc3QgYm9vayA9IHRoaXMuYm9va3NBcnIuZmluZChlbCA9PiBlbC5pZCA9PSBpZCk7XHJcblx0XHR0aGlzLl9ib29rQ2FyZC5zaG93UG9wdXAoYm9vayk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVCb29rKGlkKSB7XHJcblx0XHRib29rc01vZGVsLnJlbW92ZUl0ZW0oaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3JpZC5yZW1vdmUoaWQpO1xyXG5cdH1cclxuXHJcblx0YWRkQm9vaygpIHtcclxuXHRcdHRoaXMuX2Jvb2tDYXJkLnNob3dQb3B1cCgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5pbXBvcnQgeyBEVU1NWUNPVkVSIH0gZnJvbSAnLi4vLi4vY29uc3RzJztcclxuaW1wb3J0IHsgdG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbSB9IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDYXJkIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDb3ZlciA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDb3ZlcicsXHJcblx0XHRcdHdpZHRoOiAxMjAsXHJcblx0XHRcdGhlaWdodDogMTgwLFxyXG5cdFx0XHRjc3M6ICdib29rX2NvdmVyJyxcclxuXHRcdFx0dGVtcGxhdGU6ICh1cmwpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gYDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KVwiID48L2Rpdj5gO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDYXJkID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NhcmRMaWJyYXJpYW4nLFxyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVGl0bGUnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdib29rX3RpdGxlJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F1dGhvcicsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2F1dGhvcl9uYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdHZW5yZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdnZW5yZXMnLCBvcHRpb25zOiBbXHJcblx0XHRcdFx0XHQnJywgJ0ZpY3Rpb24nLCAnRmFudGFzeScsICdUaHJpbGxlcicsICdIb3Jyb3InLCAnTXlzdGVyeScsICdIaXN0b3JpY2FsJywgJ1dlc3Rlcm5zJywgJ0ZhbWlseScsICdEYXJrIGNvbWVkeSdcclxuXHRcdFx0XHRdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQdWJsaXNoaW5nIGhvdXNlJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAncHVibGlzaGluZ19ob3VzZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdmFpbGFibGUgY29waWVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYXZhaWxhYmxlX2NvcGllcycgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYWdlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ251bWJlcl9vZl9wYWdlcycgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3ZlciBwaG90bycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2NvdmVyX3Bob3RvJyB9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkVGV4dEZpbGUgPSB7XHJcblx0XHRcdHZpZXc6ICd1cGxvYWRlcicsXHJcblx0XHRcdGxhYmVsOiAnPGkgY2xhc3M9XCJmYXMgZmEtZmlsZS11cGxvYWRcIj48L2k+IFVwbG9hZCB0ZXh0IGZpbGUnLFxyXG5cdFx0XHRsb2NhbElkOiAnYm9va0ZpbGVzJyxcclxuXHRcdFx0dHlwZTogJ2h0bWxidXR0b24nLFxyXG5cdFx0XHRhdXRvc2VuZDogZmFsc2UsXHJcblx0XHRcdHdpZHRoOiAxNTAsXHJcblx0XHRcdGZvcm1EYXRhOiAoKSA9PiAoe1xyXG5cdFx0XHRcdHVzZXJfaWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0XHRcdGJvb2tfaWQ6IHRoaXMuYm9va0lkXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRhY2NlcHQ6ICd0ZXh0L3BsYWluLCBhcHBsaWNhdGlvbi9wZGYsIC5kb2MsIC5kb2N4JyxcclxuXHRcdFx0dXBsb2FkOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2ZpbGVzL3VwbG9hZC90ZXh0JyxcclxuXHRcdFx0bGluazogJ2ZpbGVzTGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZmlsZXNMaXN0ID0ge1xyXG5cdFx0XHR2aWV3OiAnbGlzdCcsXHJcblx0XHRcdHR5cGU6ICd1cGxvYWRlcicsXHJcblx0XHRcdGlkOiAnZmlsZXNMaXN0JyxcclxuXHRcdFx0YXV0b2hlaWdodDp0cnVlLCBcclxuXHRcdFx0Ym9yZGVybGVzczp0cnVlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZEF1ZGlvRmlsZSA9IHtcclxuXHRcdFx0dmlldzogJ3VwbG9hZGVyJyxcclxuXHRcdFx0bGFiZWw6ICc8aSBjbGFzcz1cImZhcyBmYS1tdXNpY1wiPjwvaT4gVXBsb2FkIGF1ZGlvJyxcclxuXHRcdFx0bG9jYWxJZDogJ2F1ZGlvRmlsZXMnLFxyXG5cdFx0XHR0eXBlOiAnaHRtbGJ1dHRvbicsXHJcblx0XHRcdGF1dG9zZW5kOiBmYWxzZSxcclxuXHRcdFx0d2lkdGg6IDE1MCxcclxuXHRcdFx0Zm9ybURhdGE6ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0dXNlcl9pZDogdGhpcy51c2VySWQsXHJcblx0XHRcdFx0XHRib29rX2lkOiB0aGlzLmJvb2tJZFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0sXHJcblx0XHRcdGFjY2VwdDogJy5tcDMnLFxyXG5cdFx0XHR1cGxvYWQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmlsZXMvdXBsb2FkL2F1ZGlvJyxcclxuXHRcdFx0bGluazogJ2F1ZGlvTGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXVkaW9MaXN0ID0ge1xyXG5cdFx0XHR2aWV3OiAnbGlzdCcsXHJcblx0XHRcdHR5cGU6ICd1cGxvYWRlcicsXHJcblx0XHRcdGlkOiAnYXVkaW9MaXN0JyxcclxuXHRcdFx0YXV0b2hlaWdodDp0cnVlLCBcclxuXHRcdFx0Ym9yZGVybGVzczp0cnVlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGF2YWlsYWJsZVRleHRGaWxlcyA9IHtcclxuXHRcdFx0dmlldzogJ2FjdGl2ZUxpc3QnLFxyXG5cdFx0XHRsb2NhbElkOiAnYXZhaWxhYmxlVGV4dEZpbGVzJyxcclxuXHRcdFx0dGVtcGxhdGU6IGAjbmFtZSMgPHNwYW4gY2xhc3M9J2xpc3RfYnV0dG9uJz48aSBjbGFzcyA9ICdmYXMgZmEtdGltZXMnPjwvaT48L3NwYW4+YCxcclxuXHRcdFx0b246IHtcclxuXHRcdFx0XHRvbkl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHQvL3JlbW92ZSBmaWxlIGFuZCByZWNvcmQgaW4gREJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXZhaWxhYmxlQXVkaW9GaWxlcyA9IHtcclxuXHRcdFx0dmlldzogXCJhY3RpdmVMaXN0XCIsXHJcblx0XHRcdGxvY2FsSWQ6IFwiYXZhaWxhYmxlQXVkaW9GaWxlc1wiLFxyXG5cdFx0XHR0ZW1wbGF0ZTogXCIjbmFtZSNcIiArXHJcblx0XHRcdFx0XHRcIjxzcGFuIGNsYXNzPSdsaXN0X2J1dHRvbic+PGkgY2xhc3MgPSAnZmFzIGZhLXRpbWVzJz48L2k+PC9zcGFuPlwiLFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzYXZlQnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRsYWJlbDogJ1NhdmUnLFxyXG5cdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICdwb3B1cCcsXHJcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcclxuXHRcdFx0bWF4SGVpZ2h0OiA1NTAsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHR2aWV3OiAnc2Nyb2xsdmlldycsXHJcblx0XHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHRib29rQ292ZXIsIFxyXG5cdFx0XHRcdFx0XHRib29rQ2FyZCxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHZpZXc6ICd0ZW1wbGF0ZScsXHJcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU6ICdGaWxlcycsXHJcblx0XHRcdFx0XHRcdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRjc3M6ICdjZW50ZXInXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtoZWlnaHQ6IDJ9LFxyXG5cdFx0XHRcdFx0XHRhdmFpbGFibGVUZXh0RmlsZXMsXHJcblx0XHRcdFx0XHRcdGF2YWlsYWJsZUF1ZGlvRmlsZXMsXHJcblx0XHRcdFx0XHRcdGZpbGVzTGlzdCxcclxuXHRcdFx0XHRcdFx0YXVkaW9MaXN0LFxyXG5cdFx0XHRcdFx0XHR7aGVpZ2h0OiAxNX0sXHJcblx0XHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdFx0bG9jYWxJZDogJ2FkZGluZ0ZpbGVzQnV0dG9ucycsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRjb2xzOiBbIHt9LCBhZGRUZXh0RmlsZSwgYWRkQXVkaW9GaWxlLCB7fSBdIFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7aGVpZ2h0OiAxfSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nWDogMTUsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGNvbHM6IFt7fSwgc2F2ZUJ0biwge31dXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmZvcm0gPSB0aGlzLiQkKCdib29rQ2FyZExpYnJhcmlhbicpO1xyXG5cdH1cclxuXHJcblx0c2hvd1BvcHVwKGJvb2spIHtcclxuXHRcdHRoaXMuY2xlYXJGb3JtKCk7XHJcblx0XHR0aGlzLmlzTmV3ID0gYm9vayA/IGZhbHNlIDogdHJ1ZTtcclxuXHRcdHRoaXMuYm9vayA9IGJvb2sgfHwgJyc7XHJcblx0XHR0aGlzLmJvb2tJZCA9IGJvb2sgPyBib29rLmlkIDogJyc7XHJcblx0XHR0aGlzLnVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHJcblx0XHRmaWxlc01vZGVsLmdldEl0ZW1zKHRoaXMuYm9va0lkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgZmlsZXNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cclxuXHRcdFx0Y29uc3QgdGV4dEZpbGVzID0gW107XHJcblx0XHRcdGNvbnN0IGF1ZGlvRmlsZXMgPSBbXTtcclxuXHJcblx0XHRcdGZpbGVzQXJyLmZvckVhY2goKGZpbGUpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2goZmlsZS5kYXRhX3R5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdFx0XHR0ZXh0RmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdhdWRpbyc6XHJcblx0XHRcdFx0XHRcdGF1ZGlvRmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykucGFyc2UodGV4dEZpbGVzKTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLnBhcnNlKGF1ZGlvRmlsZXMpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dG9nZ2xlRWxlbWVudCghdGhpcy5pc05ldywgdGhpcy4kJCgnYm9va0NvdmVyJykpO1xyXG5cdFx0dG9nZ2xlRWxlbWVudCghdGhpcy5pc05ldywgdGhpcy4kJCgnYWRkaW5nRmlsZXNCdXR0b25zJykpO1xyXG5cclxuXHRcdGlmKCF0aGlzLmlzTmV3KSB7XHJcblx0XHRcdHRoaXMuZm9ybS5zZXRWYWx1ZXMoYm9vayk7XHJcblx0XHRcdHRoaXMuJCQoJ2Jvb2tDb3ZlcicpLnNldFZhbHVlcyhib29rLmNvdmVyX3Bob3RvIHx8IERVTU1ZQ09WRVIpO1x0XHRcdFxyXG5cdFx0fVx0XHRcclxuXHJcblx0XHR0aGlzLmdldFJvb3QoKS5zaG93KCk7XHRcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuZm9ybS5nZXRWYWx1ZXMoKTtcclxuXHJcblx0XHRjb25zdCBzdWNjZXNzQWN0aW9uID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLndlYml4Lm1lc3NhZ2UoJ1N1Y2Nlc3MnKTtcclxuXHRcdFx0dGhpcy5oaWRlV2luZG93KCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmKHRoaXMuZm9ybS52YWxpZGF0ZSgpKSB7XHJcblx0XHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0XHRhZGRJdGVtKGJvb2tzTW9kZWwsIGRhdGEsIHN1Y2Nlc3NBY3Rpb24pO1x0XHRcdFx0XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHVwZGF0ZUl0ZW0oYm9va3NNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJCQoJ2Jvb2tGaWxlcycpLnNlbmQoKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Upe1xyXG5cdFx0XHRcdFx0dGhpcy53ZWJpeC5tZXNzYWdlKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLiQkKCdhdWRpb0ZpbGVzJykuc2VuZCgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZihyZXNwb25zZSl7XHJcblx0XHRcdFx0XHR0aGlzLndlYml4Lm1lc3NhZ2UocmVzcG9uc2UubWVzc2FnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cclxuXHRoaWRlV2luZG93KCkge1xyXG5cdFx0dGhpcy5jbGVhckZvcm0oKTtcclxuXHRcdHRoaXMuZ2V0Um9vdCgpLmhpZGUoKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyRm9ybSAoKXtcclxuXHRcdHRoaXMuZm9ybS5jbGVhclZhbGlkYXRpb24oKTtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy4kJCgnYm9va0ZpbGVzJykuZmlsZXMuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F1ZGlvRmlsZXMnKS5maWxlcy5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnKS5jbGVhckFsbCgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6J2hlYWRlcicsIHRlbXBsYXRlOnRoaXMuYXBwLmNvbmZpZy5uYW1lLCBjc3M6J3dlYml4X2hlYWRlciBhcHBfaGVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBtZW51ID0ge1xyXG5cdFx0XHR2aWV3OidtZW51JywgXHJcblx0XHRcdGNzczonYXBwX21lbnUnLFxyXG5cdFx0XHR3aWR0aDoxODAsIFxyXG5cdFx0XHRsYXlvdXQ6J3knLCBcclxuXHRcdFx0c2VsZWN0OnRydWUsXHJcblx0XHRcdHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cIndlYml4X2ljb24gI2ljb24jXCI+PC9zcGFuPiAjdmFsdWUjICcsXHJcblx0XHRcdHZhbHVlOiAnbWFpbicsXHJcblx0XHRcdGRhdGE6W1xyXG5cdFx0XHRcdHsgdmFsdWU6J0xpYnJhcnknLCBpZDonbGlicmFyeScsICBpY29uOidmYXMgZmEtYm9vay1yZWFkZXInIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonVXNlcnMnLCBpZDondXNlcnMnLCAgaWNvbjonZmFzIGZhLWNvZycgfVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbjp7XHJcblx0XHRcdFx0b25NZW51SXRlbUNsaWNrOiAoaWQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZXJfaWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLmFwcC5zaG93KGBsaWJyYXJpYW4uaW5kZXg/aWQ9JHt1c2VyX2lkfS9saWJyYXJpYW4uJHtpZH1gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbG9nb3V0ID0ge1xyXG5cdFx0XHR2aWV3OididXR0b24nLCBcclxuXHRcdFx0bG9jYWxJZDonbG9nb3V0QnRuJywgXHJcblx0XHRcdHZhbHVlOidMb2dvdXQnLCBcclxuXHRcdFx0dHlwZTonZm9ybSdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdWkgPSB7XHJcblx0XHRcdHR5cGU6J2NsZWFuJywgcGFkZGluZ1g6NSwgY3NzOidhcHBfbGF5b3V0JywgXHJcblx0XHRcdGNvbHM6W1xyXG5cdFx0XHRcdHsgcGFkZGluZ1g6NSwgcGFkZGluZ1k6MTAsIHJvd3M6IFsge2Nzczond2ViaXhfc2hhZG93X21lZGl1bScsIHJvd3M6W2hlYWRlciwgbWVudSwgbG9nb3V0XX0gXX0sXHJcblx0XHRcdFx0eyB2aWV3OiAncmVzaXplcicsIHdpZHRoOiA1IH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dHlwZTogJ3dpZGUnLCBwYWRkaW5nWTogMTAsIHBhZGRpbmdYOiA1LCByb3dzOiBbXHJcblx0XHRcdFx0XHRcdHsgJHN1YnZpZXc6IHRydWUgfVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB1aTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHR0aGlzLiQkKCdsb2dvdXRCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFwcCA9IHRoaXMuYXBwO1xyXG5cdFx0XHRjb25zdCBmb3JtYXQgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZLSVtLSVkXCIpO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpKTtcclxuXHRcdFx0XHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9nb3V0KHtjdXJyZW50RGF0ZX0pLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gXCJ3ZWJpeC1qZXRcIjtcclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vY29tbW9uL2xpYnJhcnknO1xyXG5pbXBvcnQgQm9va0NhcmQgZnJvbSAnLi9ib29rQ2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaWJMaWJyYXJ5IGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1x0XHJcblxyXG5cdFx0Y29uc3QgbGlicmFyeUNvbmZpZyA9IHtcclxuXHRcdFx0cm9sZTogJ2xpYnJhcmlhbidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkQm9va0J0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnQWRkIGJvb2snLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0bGlicmFyeS5hZGRCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KHRoaXMuYXBwLCBsaWJyYXJ5Q29uZmlnLCBCb29rQ2FyZCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRsaWJyYXJ5LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbHM6IFt7fSxhZGRCb29rQnRuLHt9XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblBhZ2UgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luRm9ybSA9IHtcclxuXHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRsb2NhbElkOiAnbG9naW5Gb3JtJyxcclxuXHRcdFx0d2lkdGg6IDMwMCxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdVc2VybmFtZScsIG5hbWU6ICd1c2VybmFtZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgdHlwZTogJ3Bhc3N3b3JkJywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdwYXNzd29yZCcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW46IDUsIGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0eyB2aWV3OiAnYnV0dG9uJywgbG9jYWxJZDogJ2xvZ2luQnRuJywgdmFsdWU6ICdMb2dpbicsIHR5cGU6ICdmb3JtJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHZpZXc6ICdidXR0b24nLCB2YWx1ZTogJ0NhbmNlbCcgfVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsaW5rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dmFsdWU6ICdDcmVhdGUgYW4gYWNjb3VudCcsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zaG93KCcvcmVnaXN0ZXInKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcdFxyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0bG9naW5Gb3JtLFxyXG5cdFx0XHRcdFx0XHRsaW5rLFxyXG5cdFx0XHRcdFx0XHR7fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e31cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLiQkKCdsb2dpbkJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy4kJCgnbG9naW5Gb3JtJykuZ2V0VmFsdWVzKCk7XHJcblx0XHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dpbih2YWx1ZXMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHRcclxuXHRcdFx0XHRpZiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZXJEYXRhID0gcmVzcG9uc2UuanNvbigpLnVzZXI7XHJcblx0XHRcdFx0XHRjb25zdCBpZCA9IHVzZXJEYXRhLmlkO1xyXG5cclxuXHRcdFx0XHRcdHN3aXRjaCAodXNlckRhdGEucm9sZV9uYW1lKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2FkbWluJzogXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zaG93KGBhZG1pbi5pbmRleD9pZD0ke2lkfWApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdsaWJyYXJpYW4nOiBcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3coYGxpYnJhcmlhbi5pbmRleD9pZD0ke2lkfS9saWJyYXJpYW4ubGlicmFyeWApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdyZWFkZXInOiBcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3coYHJlYWRlci5pbmRleD9pZD0ke2lkfS9yZWFkZXIubWFpbmApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHdlYml4Lm1lc3NhZ2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgbGlrZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvbGlrZXMnO1xyXG5pbXBvcnQge3RvZ2dsZUVsZW1lbnR9IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuaW1wb3J0IHtEVU1NWUNPVkVSLCBTVUNDRVNTfSBmcm9tICcuLi8uLi9jb25zdHMnOyBcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDYXJkIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDb3ZlciA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDb3ZlcicsXHJcblx0XHRcdHdpZHRoOiAxMjAsXHJcblx0XHRcdGhlaWdodDogMTgwLFxyXG5cdFx0XHRjc3M6ICdib29rX2NvdmVyJyxcclxuXHRcdFx0dGVtcGxhdGU6ICh1cmwpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gYDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KVwiID48L2Rpdj5gO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDYXJkID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NhcmRSZWFkZXInLFx0XHRcdFxyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVGl0bGUnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdib29rX3RpdGxlJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdXRob3InLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdXRob3JfbmFtZScsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnR2VucmVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnZ2VucmVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUHVibGlzaGluZyBob3VzZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ3B1Ymxpc2hpbmdfaG91c2UnLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F2YWlsYWJsZSBjb3BpZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdmFpbGFibGVfY29waWVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYWdlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ251bWJlcl9vZl9wYWdlcycsIHJlYWRvbmx5OiB0cnVlIH1cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVUZXh0RmlsZXMgPSB7XHJcblx0XHRcdHZpZXc6ICdhY3RpdmVMaXN0JyxcclxuXHRcdFx0bG9jYWxJZDogJ2F2YWlsYWJsZVRleHRGaWxlcycsXHJcblx0XHRcdHRlbXBsYXRlOiBcIiNuYW1lI1wiICtcclxuXHRcdFx0XHRcdFwiPHNwYW4gY2xhc3M9J2xpc3RfYnV0dG9uJz48aSBjbGFzcyA9ICdmYXMgZmEtZG93bmxvYWQnPjwvaT48L3NwYW4+XCIsXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgYm9va05hbWUgPSB0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5nZXRJdGVtKGlkKS5uYW1lO1xyXG5cclxuXHRcdFx0XHRcdGZpbGVzTW9kZWwuZG93bmxvYWRJdGVtKGlkKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0d2ViaXguaHRtbC5kb3dubG9hZChyZXMsIGJvb2tOYW1lKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVBdWRpb0ZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiBcImFjdGl2ZUxpc3RcIixcclxuXHRcdFx0bG9jYWxJZDogXCJhdmFpbGFibGVBdWRpb0ZpbGVzXCIsXHJcblx0XHRcdHR5cGU6e1xyXG5cdFx0XHRcdGhlaWdodDoxMDBcclxuXHRcdFx0fSxcclxuXHRcdFx0dGVtcGxhdGU6IFwiI25hbWUjPGF1ZGlvIGNvbnRyb2xzIHNyYz0naHR0cDovL2xvY2FsaG9zdDozMDAwL2F1ZGlvLyNpZCMnPjwvYXVkaW8+XCJcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb3JkZXJCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ29yZGVyQm9vaycsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0bGFiZWw6ICc8aSBjbGFzcz1cImZhciBmYS1oYW5kLXBhcGVyXCI+PC9pPiBPcmRlcicsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMub3JkZXJCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZG93bmxvYWRCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ2Rvd25sb2FkQm9vaycsXHJcblx0XHRcdHR5cGU6ICdpY29uJyxcclxuXHRcdFx0aWNvbjogJ2ZhcyBmYS1kb3dubG9hZCcsXHJcblx0XHRcdHdpZHRoOiA2MCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5vcmRlckJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsaWtlQm9vayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGxvY2FsSWQ6ICdsaWtlQnV0dG9uJyxcclxuXHRcdFx0Y3NzOiAnbGlrZV9idXR0b24nLFxyXG5cdFx0XHR0eXBlOiAnaWNvbicsIFxyXG5cdFx0XHRpY29uOiAnZmFyIGZhLWhlYXJ0JyxcclxuXHRcdFx0d2lkdGg6IDQ1LFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLmxpa2VCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3BvcHVwJyxcclxuXHRcdFx0cG9zaXRpb246J2NlbnRlcicsXHJcblx0XHRcdGJvZHk6e1xyXG5cdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdGJvb2tDb3ZlciwgYm9va0NhcmQsIGF2YWlsYWJsZVRleHRGaWxlcywgYXZhaWxhYmxlQXVkaW9GaWxlcyxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nWDogMTUsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMTAsXHJcblx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHRvcmRlckJvb2ssIGRvd25sb2FkQm9vaywge30sIGxpa2VCb29rXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdIFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHRcclxuXHRzaG93UG9wdXAoYm9vaykge1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uID0gdGhpcy4kJCgnbGlrZUJ1dHRvbicpO1xyXG5cdFx0dGhpcy5mb3JtID0gdGhpcy4kJCgnYm9va0NhcmRSZWFkZXInKTtcclxuXHRcdHRoaXMuZmlsZXNMaXN0ID0gdGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJyk7XHJcblx0XHR0aGlzLmJvb2sgPSBib29rO1xyXG5cdFx0dGhpcy5ib29rSWQgPSBib29rLmlkO1xyXG5cdFx0dGhpcy51c2VySWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2xlYXJGb3JtKCk7XHJcblx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKGJvb2spO1xyXG5cdFx0dGhpcy4kJCgnYm9va0NvdmVyJykuc2V0VmFsdWVzKGJvb2suY292ZXJfcGhvdG8gfHwgRFVNTVlDT1ZFUik7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24uZGVmaW5lKCdiYWRnZScsIGJvb2suY291bnRfbGlrZXMgfHwgJzAnKTtcclxuXHJcblx0XHRmaWxlc01vZGVsLmdldEl0ZW1zKHRoaXMuYm9va0lkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgZmlsZXNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cclxuXHRcdFx0Y29uc3QgdGV4dEZpbGVzID0gW107XHJcblx0XHRcdGNvbnN0IGF1ZGlvRmlsZXMgPSBbXTtcclxuXHJcblx0XHRcdGZpbGVzQXJyLmZvckVhY2goKGZpbGUpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2goZmlsZS5kYXRhX3R5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOiB0ZXh0RmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdhdWRpbyc6IGF1ZGlvRmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykucGFyc2UodGV4dEZpbGVzKTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLnBhcnNlKGF1ZGlvRmlsZXMpO1xyXG5cdFx0fSk7XHJcblx0XHR0b2dnbGVFbGVtZW50KGJvb2suYm9va19maWxlLCB0aGlzLiQkKCdkb3dubG9hZEJvb2snKSk7XHJcblx0XHR0b2dnbGVFbGVtZW50KGJvb2suYXZhaWxhYmxlX2NvcGllcywgdGhpcy4kJCgnb3JkZXJCb29rJykpO1xyXG5cdFx0dGhpcy50b2dnbGVMaWtlKGJvb2sudXNlcl9pZCA9PSB0aGlzLnVzZXJJZCk7XHJcblxyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1xyXG5cdH1cclxuXHJcblx0b3JkZXJCb29rKCkge1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRsaWtlQm9vaygpIHtcclxuXHRcdGlmKHRoaXMuYm9vay51c2VyX2lkID09IHRoaXMudXNlcklkKSB7XHJcblx0XHRcdGxpa2VzTW9kZWwucmVtb3ZlTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdHVzID0gcmVzcG9uc2UuanNvbigpLnNlcnZlclN0YXR1cztcclxuXHRcdFx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRcdFx0dGhpcy51bnNldExpa2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0bGlrZXNNb2RlbC5hZGRMaWtlKHRoaXMudXNlcklkLCB0aGlzLmJvb2tJZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0XHRcdGlmKHN0YXR1cyA9PSBTVUNDRVNTKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldExpa2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVx0XHRcclxuXHR9XHRcclxuXHJcblx0dG9nZ2xlTGlrZShjb25kaXRpb24pIHtcclxuXHRcdGlmKGNvbmRpdGlvbikge1xyXG5cdFx0XHR0aGlzLnNldExpa2UoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVuc2V0TGlrZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0TGlrZSgpIHtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5kZWZpbmUoJ2ljb24nLCAnZmFzIGZhLWhlYXJ0Jyk7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24ucmVmcmVzaCgpO1xyXG5cdH1cclxuXHJcblx0dW5zZXRMaWtlKCkge1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnaWNvbicsICdmYXIgZmEtaGVhcnQnKTtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5yZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhckZvcm0gKCl7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXIoKTtcclxuXHRcdHRoaXMuZmlsZXNMaXN0LmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi8uLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgdGVtcGxhdGU6dGhpcy5hcHAuY29uZmlnLm5hbWUsIGNzczond2ViaXhfaGVhZGVyIGFwcF9oZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG1lbnUgPSB7XHJcblx0XHRcdHZpZXc6J21lbnUnLCBcclxuXHRcdFx0Y3NzOidhcHBfbWVudScsXHJcblx0XHRcdHdpZHRoOjE4MCwgbGF5b3V0Oid5Jywgc2VsZWN0OnRydWUsXHJcblx0XHRcdHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cIndlYml4X2ljb24gI2ljb24jXCI+PC9zcGFuPiAjdmFsdWUjICcsXHJcblx0XHRcdHZhbHVlOiAnbWFpbicsXHJcblx0XHRcdGRhdGE6W1xyXG5cdFx0XHRcdHsgdmFsdWU6J015IGJvb2tzJywgaWQ6J21haW4nLCBpY29uOidmYXMgZmEtYm9va21hcmsnIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonTGlicmFyeScsIGlkOidsaWJyYXJ5JywgIGljb246J2ZhcyBmYS1ib29rLXJlYWRlcicgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidUb3BzJywgaWQ6J3RvcHMnLCAgaWNvbjonZmFzIGZhLWxpc3QnIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonU2V0dGluZ3MnLCBpZDonc2V0dGluZ3MnLCAgaWNvbjonZmFzIGZhLWNvZycgfSxcclxuXHRcdFx0XSxcclxuXHRcdFx0b246e1xyXG5cdFx0XHRcdG9uTWVudUl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB1c2VyX2lkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5hcHAuc2hvdyhgcmVhZGVyLmluZGV4P2lkPSR7dXNlcl9pZH0vcmVhZGVyLiR7aWR9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHR0eXBlOidjbGVhbicsIHBhZGRpbmdYOjUsIGNzczonYXBwX2xheW91dCcsIFxyXG5cdFx0XHRjb2xzOltcclxuXHRcdFx0XHR7IHBhZGRpbmdYOjUsIHBhZGRpbmdZOjEwLCByb3dzOiBbIHtjc3M6J3dlYml4X3NoYWRvd19tZWRpdW0nLCByb3dzOltoZWFkZXIsIG1lbnUsIGxvZ291dF19IF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3Jlc2l6ZXInLCB3aWR0aDogNSB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICd3aWRlJywgcGFkZGluZ1k6IDEwLCBwYWRkaW5nWDogNSwgcm93czogW1xyXG5cdFx0XHRcdFx0XHR7ICRzdWJ2aWV3OiB0cnVlIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCh7Y3VycmVudERhdGV9KS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tIFwid2ViaXgtamV0XCI7XHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4uL2NvbW1vbi9saWJyYXJ5JztcclxuaW1wb3J0IEJvb2tDYXJkIGZyb20gJy4vYm9va0NhcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVhZGVyTGlicmFyeSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGxpYnJhcnlDb25maWcgPSB7XHJcblx0XHRcdHJvbGU6ICdyZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRuZXcgTGlicmFyeSh0aGlzLmFwcCwgbGlicmFyeUNvbmZpZywgQm9va0NhcmQpXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgdGVzdFJlc3VsdHMgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRpZDogJ2dyb3VwTGlzdCcsXHJcblx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0FkZCcsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICd7Y29tbW9uLnRyYXNoSWNvbigpfSdcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBidXR0b24gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRpZDogJ2FkZEdyb3VwJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQnLFxyXG5cdFx0XHR0eXBlOidmb3JtJyxcclxuXHRcdFx0aW5wdXRXaWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge31cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdHJvd3M6IFt0ZXN0UmVzdWx0cywgYnV0dG9uXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHQvLyAkJCgnZ3JvdXBMaXN0JykucGFyc2UoZ3JvdXBzKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHVzZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzJztcclxuaW1wb3J0IHt1cGRhdGVJdGVtfSBmcm9tICcuLi8uLi9zY3JpcHRzJzsgXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRjb25zdCBidXR0b24gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRpZDogJ3NhdmVDaGFuZ2VzJyxcclxuXHRcdFx0dmFsdWU6ICdTYXZlJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRpbnB1dFdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVzZXJEYXRhID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICd1c2VyRGF0YUZvcm0nLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBuYW1lOiAnaWQnLCBsb2NhbElkOiAndXNlcl9pZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0ZpcnN0IG5hbWUnLG5hbWU6ICd1c2VyX25hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnTGFzdCBuYW1lJyxuYW1lOiAndXNlcl9zdXJuYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bhc3Nwb3J0IElEJyxuYW1lOiAncGFzc3BvcnRfSUQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAnZGF0ZXBpY2tlcicsIGxhYmVsOiAnQmlydGggZGF0ZScsbmFtZTogJ2JpcnRoX2RhdGUnLCBsb2NhbElkOiAnYmlydGhfZGF0ZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBZGRyZXNzJyxuYW1lOiAnYWRkcmVzcycsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQaG9uZScsbmFtZTogJ3Bob25lX251bWJlcnMnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRW1haWwnLG5hbWU6ICdlbWFpbCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHRidXR0b25cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbdXNlckRhdGFdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IGlkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cclxuXHRcdHVzZXJzTW9kZWwuZ2V0SXRlbShpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCB1c2VyRGF0YSA9IGRhdGEuanNvbigpWzBdO1xyXG5cdFx0XHR1c2VyRGF0YS5iaXJ0aF9kYXRlID0gbmV3IERhdGUgKHVzZXJEYXRhLmJpcnRoX2RhdGUpO1xyXG5cdFx0XHR0aGlzLiQkKCd1c2VyRGF0YUZvcm0nKS5zZXRWYWx1ZXModXNlckRhdGEpO1xyXG5cdFx0fSk7XHRcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtICgpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLiQkKCd1c2VyRGF0YUZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdGNvbnN0IHN1Y2Nlc3NBY3Rpb24gPSB0aGlzLndlYml4Lm1lc3NhZ2UoJ05ldyBkYXRhIHNhdmVkJyk7XHJcblx0XHR1cGRhdGVJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHN1Y2Nlc3NBY3Rpb24pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tIFwid2ViaXgtamV0XCI7XHJcbmltcG9ydCBib29rc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9ib29rcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib29rVG9wcyBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmlldzogJ2xpc3QnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDI1MCxcclxuXHRcdFx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0XHRcdGRhdGE6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd09sZGVzdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ09sZGVzdCBib29rcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd05ld2VzdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ05ld2VzdCBib29rcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd01vc3RQYWdlc0Jvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ01vc3QgcGFnZXMgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dCb29rc1dpdGhMb25nTmFtZXMnLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAnQm9va3Mgd2l0aCBsb25nZXN0IG5hbWVzJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdzaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MnLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAnQXV0aG9ycyB3aXRoIG1vc3QgYm9va3MnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRvbjoge1xyXG5cdFx0XHRcdFx0XHRvbkl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoKGlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93T2xkZXN0Qm9va3MnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dPbGRlc3RCb29rcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dOZXdlc3RCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd05ld2VzdEJvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd01vc3RQYWdlc0Jvb2tzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93TW9zdFBhZ2VzQm9va3MoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93Qm9va3NXaXRoTG9uZ05hbWVzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93Qm9va3NXaXRoTG9uZ05hbWVzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Jvb2tzVG9wJyxcclxuXHRcdFx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZ3JpZCA9ICQkKCdib29rc1RvcCcpO1xyXG5cdFx0Ym9va3NNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRsZXQgYm9va3NBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cdFx0XHRib29rc0FyciA9IGJvb2tzQXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0XHRlbC55ZWFyX29mX3B1YmxpY2F0aW9uID0gbmV3IERhdGUoZWwueWVhcl9vZl9wdWJsaWNhdGlvbik7XHJcblx0XHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5ib29rc0FyciA9IGJvb2tzQXJyO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5kZWZhdWx0Q29uZmlnID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdib29rX3RpdGxlJyxcclxuXHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdGhlYWRlcjogJ1RpdGxlJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdhdXRob3JfbmFtZScsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRoZWFkZXI6ICdBdXRob3InXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2dlbnJlcycsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdGhlYWRlcjogJ0dlbnJlcydcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdGhlYWRlcjogJ0NvdW50cnknXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ3llYXJfb2ZfcHVibGljYXRpb24nLFxyXG5cdFx0XHRcdHNvcnQ6ICdkYXRlJyxcclxuXHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRmb3JtYXQ6IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVlcIiksXHJcblx0XHRcdFx0aGVhZGVyOiAnWWVhcidcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnbnVtYmVyX29mX3BhZ2VzJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdQYWdlcycsXHJcblx0XHRcdFx0d2lkdGg6IDYwXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRzaG93T2xkZXN0Qm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gYS55ZWFyX29mX3B1YmxpY2F0aW9uIC0gYi55ZWFyX29mX3B1YmxpY2F0aW9uO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93TmV3ZXN0Qm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4gYi55ZWFyX29mX3B1YmxpY2F0aW9uIC0gYS55ZWFyX29mX3B1YmxpY2F0aW9uKTtcclxuXHRcdHRoaXMuc2hvd1Jlc3VsdHMoZGF0YSwgdGhpcy5kZWZhdWx0Q29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHNob3dNb3N0UGFnZXNCb29rcygpIHtcclxuXHRcdGxldCBkYXRhID0gWy4uLnRoaXMuYm9va3NBcnJdO1xyXG5cdFx0ZGF0YS5zb3J0KChhLCBiKSA9PiAgYi5udW1iZXJfb2ZfcGFnZXMgLSBhLm51bWJlcl9vZl9wYWdlcyk7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93Qm9va3NXaXRoTG9uZ05hbWVzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+IGIuYm9va190aXRsZS5sZW5ndGggLSBhLmJvb2tfdGl0bGUubGVuZ3RoKTtcclxuXHRcdHRoaXMuc2hvd1Jlc3VsdHMoZGF0YSwgdGhpcy5kZWZhdWx0Q29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHNob3dBdXRob3JzV2l0aE1vc3RCb29rcygpIHtcclxuXHRcdGxldCBhdXRob3JzID0gW107XHJcblx0XHR0aGlzLmJvb2tzQXJyLmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdGNvbnN0IGluZGV4ID0gYXV0aG9ycy5maW5kSW5kZXgoYXV0aG9yID0+IGF1dGhvci5uYW1lID09IGVsLmF1dGhvcl9uYW1lKTtcclxuXHRcdFx0aWYgKGluZGV4ID09PSAtMSkge1xyXG5cdFx0XHRcdGF1dGhvcnMucHVzaCh7bmFtZTogZWwuYXV0aG9yX25hbWUsIGJvb2tzQ291bnQ6IDF9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRhdXRob3JzW2luZGV4XS5ib29rc0NvdW50Kys7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGF1dGhvcnMgPSBhdXRob3JzLnNvcnQoKGEsIGIpID0+IGIuYm9va3NDb3VudCAtIGEuYm9va3NDb3VudCk7XHJcblxyXG5cdFx0Y29uc3QgY29sdW1ucyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnbmFtZScsXHJcblx0XHRcdFx0aGVhZGVyOiAnTmFtZScsXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2Jvb2tzQ291bnQnLFxyXG5cdFx0XHRcdGhlYWRlcjogJ0Jvb2tzIGNvdW50JyxcclxuXHRcdFx0XHRmaWxsc3BhY2U6IDFcclxuXHRcdFx0fVxyXG5cdFx0XTtcclxuXHRcdHRoaXMuc2hvd1Jlc3VsdHMoYXV0aG9ycywgY29sdW1ucyk7XHJcblx0fVxyXG5cclxuXHRzaG93UmVzdWx0cyhkYXRhLCBjb2x1bW5zKSB7XHJcblx0XHR0aGlzLmdyaWQuZGVmaW5lKCdjb2x1bW5zJywgY29sdW1ucyk7XHJcblx0XHR0aGlzLmdyaWQucmVmcmVzaENvbHVtbnMoKTtcclxuXHRcdGRhdGEgPSBkYXRhLnNsaWNlKDAsIDEwKTtcclxuXHRcdHRoaXMuZ3JpZC5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy5ncmlkLnBhcnNlKGRhdGEpO1xyXG5cdFx0dGhpcy5ncmlkLnNob3coKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJQYWdlIGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCByZWdpc3RlckZvcm0gPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ3JlZ2lzdGVyRm9ybScsXHJcblx0XHRcdHdpZHRoOiAzMDAsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVWVybmFtZScsIG5hbWU6ICd1c2VybmFtZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgdHlwZTogJ3Bhc3N3b3JkJywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdwYXNzd29yZCcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW46IDUsIGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgbG9jYWxJZDogJ3JlZ2lzdGVyQnRuJywgdmFsdWU6ICdSZWdpc3RlcicsIHR5cGU6ICdmb3JtJ1x0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0cmVnaXN0ZXJGb3JtLFxyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHt9XHJcblx0XHRcdF1cdFx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy4kJCgncmVnaXN0ZXJCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuJCQoJ3JlZ2lzdGVyRm9ybScpLmdldFZhbHVlcygpO1xyXG5cdFx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHRcdGF1dGhvcml6YXRpb24ucmVnaXN0ZXIodmFsdWVzKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zdGF0dXM7XHJcblx0XHRcdFx0Y29uc3QgaWQgPSByZXNwb25zZS5qc29uKCkuaWQ7XHJcblx0XHRcdFx0aWYgKHN0YXR1cyA9PT0gMikge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93KGByZWFkZXIuaW5kZXg/aWQ9JHtpZH0vcmVhZGVyLm1haW5gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRpZihyZXNwb25zZS5qc29uKCkucmVhc29uID09PSAndXNlckV4aXN0Jykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0d2ViaXgubWVzc2FnZShyZXNwb25zZS5qc29uKCkuZGF0YSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=