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

/***/ "./sources/locales sync recursive ^\\.\\/.*$":
/*!***************************************!*\
  !*** ./sources/locales sync ^\.\/.*$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en": "./sources/locales/en.js",
	"./en.js": "./sources/locales/en.js",
	"./ru": "./sources/locales/ru.js",
	"./ru.js": "./sources/locales/ru.js"
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
webpackContext.id = "./sources/locales sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./sources/locales/en.js":
/*!*******************************!*\
  !*** ./sources/locales/en.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
	"Home": "Home",
	"Profile": "Profile",
	"Logout": "Logout",
	"Add_group": "Add group",
	"Test": "Test",
	"Export_words": "Export words"
});

/***/ }),

/***/ "./sources/locales/ru.js":
/*!*******************************!*\
  !*** ./sources/locales/ru.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
	"Home": "Домой",
	"Profile": "Профиль",
	"Logout": "Выйти",
	"Add_group": "Добавить",
	"Test": "Тест",
	"Export_words": "Экспорт"
});

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
		app.use(webix_jet__WEBPACK_IMPORTED_MODULE_1__["plugins"].Locale);
		/*app.attachEvent('app:guard', (url, view, nav) => {
  	if(url.indexOf('/home') !== -1) {
  		webix.ajax().get('http://localhost:3000/check').then(
  			(res) => {
  				const response = res.json();
  				if (!response.allowAccess) {
  					app.show('/login');
  				}
  			},
  			(error) => {
  				if(error.status == 401) {
  					app.show('/login');
  				}						
  			}
  		);
  	}
  });*/

		app.render();
	});
}

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
	"./login": "./sources/views/login.js",
	"./login.js": "./sources/views/login.js",
	"./reader": "./sources/views/reader/index.js",
	"./reader/": "./sources/views/reader/index.js",
	"./reader/index": "./sources/views/reader/index.js",
	"./reader/index.js": "./sources/views/reader/index.js",
	"./reader/main": "./sources/views/reader/main.js",
	"./reader/main.js": "./sources/views/reader/main.js",
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




var IndexPage = function (_JetView) {
	_inherits(IndexPage, _JetView);

	function IndexPage() {
		_classCallCheck(this, IndexPage);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	IndexPage.prototype.config = function config() {
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

	IndexPage.prototype.init = function init() {
		var _this3 = this;

		this.$$('loginBtn').attachEvent('onItemClick', function () {
			var values = _this3.$$('loginForm').getValues();
			var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

			authorization.login(values).then(function (response) {
				if (response) {
					_this3.show('reader.index/reader.main');
				} else {
					webix.message(response);
				}
			});
		});
	};

	return IndexPage;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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

		var header = {
			type: 'header', template: this.app.config.name, css: 'webix_header app_header'
		};

		var menu = {
			view: 'menu', id: 'top:menu',
			css: 'app_menu',
			width: 180, layout: 'y', select: true,
			template: '<span class="webix_icon #icon#"></span> #value# ',
			value: 'Home',
			data: [{ value: 'Home', id: 'main', icon: 'fas fa-home' }]
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
		var _this2 = this;

		this.use(webix_jet__WEBPACK_IMPORTED_MODULE_0__["plugins"].Menu, 'top:menu');

		var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

		this.$$('logoutBtn').attachEvent('onItemClick', function () {
			var app = _this2.app;
			var format = webix.Date.dateToStr("%Y-%m-%d");
			var currentDate = format(new Date());

			authorization.logout({ currentDate: currentDate }).then(function (response) {
				if (response) {
					app.show('/login');
				}
			});
		});
	};

	return TopView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (TopView);

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
				if (response) {
					_this2.show('/reader/index/main');
				}
			});
		});
	};

	return RegisterPage;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (RegisterPage);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYml4LWpldC9kaXN0L2VzNi9qZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9hdXRob3JpemF0aW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbG9jYWxlcyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzL2VuLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbG9jYWxlcy9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL215YXBwLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiSmV0QmFzZSIsIndlYml4Iiwid2ViaXhKZXQiLCJfZXZlbnRzIiwiX3N1YnMiLCJfZGF0YSIsImdldFJvb3QiLCJfcm9vdCIsImRlc3RydWN0b3IiLCJfZGV0YWNoRXZlbnRzIiwiX2Rlc3Ryb3lTdWJzIiwiX2NvbnRhaW5lciIsImFwcCIsIl9wYXJlbnQiLCJzZXRQYXJhbSIsImlkIiwidmFsdWUiLCJ1cmwiLCJfc2VnbWVudCIsInVwZGF0ZSIsInNob3ciLCJnZXRQYXJhbSIsInBhcmVudCIsInZpZXciLCJnZXRQYXJlbnRWaWV3IiwiZ2V0VXJsIiwic3VidXJsIiwiZ2V0VXJsU3RyaW5nIiwidG9TdHJpbmciLCIkJCIsInJvb3QiLCJxdWVyeVZpZXciLCJvYmoiLCJjb25maWciLCJsb2NhbElkIiwiJHNjb3BlIiwib24iLCJuYW1lIiwiY29kZSIsImF0dGFjaEV2ZW50IiwicHVzaCIsImNvbnRhaW5zIiwia2V5Iiwia2lkIiwiZ2V0U3ViVmlldyIsInN1YiIsImdldFN1YlZpZXdJbmZvIiwic3VidmlldyIsInBvcHVwIiwiZXZlbnRzIiwiaSIsImxlbmd0aCIsImRldGFjaEV2ZW50Iiwic3ViVmlldyIsIl9pbml0X3VybF9kYXRhIiwiY3VycmVudCIsImV4dGVuZCIsInBhcmFtcyIsIl9nZXREZWZhdWx0U3ViIiwiZGVmYXVsdCIsImJyYW5jaCIsImNoaWxkIiwiX3JvdXRlZF92aWV3IiwicGFyc2UiLCJzdWJzdHIiLCJwYXJ0cyIsInNwbGl0IiwiY2h1bmtzIiwidGVzdCIsInJlc3VsdCIsInBvcyIsImluZGV4T2YiLCJwYXJhbSIsImRjaHVuayIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhZ2UiLCJpc05ldyIsInVybDJzdHIiLCJzdGFjayIsImNodW5rIiwib2JqMnN0ciIsImpvaW4iLCJzdHIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJSb3V0ZSIsInJvdXRlIiwiaW5kZXgiLCJfbmV4dCIsInBhdGgiLCJuZXh0Iiwic2xpY2UiLCJzaGlmdCIsInJlZnJlc2giLCJfam9pbiIsImtpZHMiLCJvbGQiLCJjb25jYXQiLCJhcHBlbmQiLCJQcm9taXNlIiwicmVzIiwicmVqIiwicmVkaXJlY3QiLCJjb25maXJtIiwicmVzb2x2ZSIsImNhbGxFdmVudCIsImNhdGNoIiwidGhlbiIsInNpemUiLCJuIiwiSmV0VmlldyIsIl9jaGlsZHJlbiIsInVpIiwiY29udGFpbmVyIiwiamV0dmlldyIsImNyZWF0ZVZpZXciLCJyZW5kZXIiLCJ0YXJnZXQiLCJfcmVuZGVyRnJhbWVMb2NrIiwiX3Nob3ciLCJzZWdtZW50IiwiX3VybENoYW5nZSIsImxpbmtSb3V0ZXIiLCJnZXRSb3V0ZXIiLCJzZXQiLCJzaWxlbnQiLCJpbml0IiwiXyR2aWV3IiwiXyQiLCJyZWFkeSIsIl8kdXJsIiwibWVzc2FnZSIsInVybENoYW5nZSIsImRlc3Ryb3kiLCJfZGVzdHJveUtpZHMiLCJ1c2UiLCJwbHVnaW4iLCJ0YWdOYW1lIiwiX3JlbmRlciIsImRvY3VtZW50IiwiYm9keSIsInRvTm9kZSIsIl9yZW5kZXJfZmluYWwiLCJjZmciLCJzbG90IiwicmVqZWN0IiwicmVzcG9uc2UiLCJjb3B5Q29uZmlnIiwib2xkdWkiLCJhc1dpbiIsInNldFBvc2l0aW9uIiwiaXNWaXNpYmxlIiwiX2luaXQiLCJfaW5pdFVybCIsImUiLCJfaW5pdEVycm9yIiwiZXJyIiwid2FpdHMiLCJmcmFtZSIsIndhaXQiLCJhbGwiLCJsb2NrIiwiX3JlbmRlckZyYW1lIiwiX2NyZWF0ZVN1YlZpZXciLCJlcnJvciIsImNyZWF0ZUZyb21VUkwiLCJ1aXMiLCJKZXRWaWV3UmF3IiwiX3VpIiwiU3ViUm91dGVyIiwiY2IiLCJhIiwiZ2V0IiwiX29uY2UiLCJKZXRBcHBCYXNlIiwid2luZG93IiwidmVyc2lvbiIsInN0YXJ0IiwiX3NlcnZpY2VzIiwiRXZlbnRTeXN0ZW0iLCJfc3ViU2VnbWVudCIsImdldFNlcnZpY2UiLCJzZXRTZXJ2aWNlIiwiaGFuZGxlciIsInByb3RvdHlwZSIsIiRzdWJ2aWV3IiwiYWRkU3ViVmlldyIsIkFycmF5IiwibWV0aG9kIiwicG9pbnQiLCJEYXRhQ29sbGVjdGlvbiIsIlJlZ0V4cCIsIkRhdGUiLCJjb3B5IiwiJHJvdXRlciIsImNsaWNrSGFuZGxlciIsInNyY0VsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJ0cmlnZ2VyIiwiX2ZvclZpZXciLCJsb2FkVmlldyIsInZpZXdzIiwiX2xvYWRFcnJvciIsIkVycm9yIiwiX2xvYWRWaWV3RHluYW1pYyIsIm1vZHVsZSIsIl9fZXNNb2R1bGUiLCJub3ciLCJyb3V0ZXIiLCJyZXN0IiwiYXBwbHkiLCJkYXRhIiwiYWN0aW9uIiwiYmluZCIsImVyIiwiZGVidWciLCJjb25zb2xlIiwidGV4dCIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJ0eXBlIiwiZXhwaXJlIiwiZmlyc3RJbml0IiwiX2ZpcnN0X3N0YXJ0IiwidG9wIiwiYmFzZSIsInNldFRpbWVvdXQiLCJhbmltYXRpb24iLCJub2RlIiwiaHRtbCIsImFkZENzcyIsInJlbW92ZUNzcyIsInVybFN0cmluZyIsInRlbXBsYXRlIiwidWlkIiwiSGFzaFJvdXRlciIsIl9kZXRlY3RQcmVmaXgiLCJvbnBvcHN0YXRlIiwicm91dGVzIiwiY29tcGFyZSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJwcmVmaXgiLCJzdWZpeCIsIl9nZXRSYXciLCJyb3V0ZXJQcmVmaXgiLCJsb2NhdGlvbiIsImhyZWYiLCJpc1BhdGNoZWQiLCJwYXRjaCIsInciLCJ3aW4iLCJwcm9taXNlIiwiZnJlZXplIiwic29tZSIsIiRmcmVlemUiLCJyZXNpemUiLCJiYXNlQWRkIiwiYmFzZWxheW91dCIsImFkZFZpZXciLCJiYXNlUmVtb3ZlIiwicmVtb3ZlVmlldyIsImp2aWV3Iiwic3VicyIsImFyZ3VtZW50cyIsImxheW91dCIsInByb3RvVUkiLCIkaW5pdCIsIiRhcHAiLCIkcmVhZHkiLCJvcmlnaW4iLCJwcm94eSIsIkpldEFwcCIsInJlcXVpcmUiLCJTdG9yZVJvdXRlciIsInN0b3JhZ2UiLCJzZXNzaW9uIiwic3RvcmVOYW1lIiwicHV0IiwiVXJsUm91dGVyIiwicGF0aG5hbWUiLCJFbXB0eVJvdXRlciIsIl8kY29uZmlnIiwiVW5sb2FkR3VhcmQiLCJoYXMiLCJzdG9yZSIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImZvckVhY2giLCJjb250ZXh0IiwidHJpbSIsIndhcm4iLCJ4IiwiU3RyaW5nIiwiZGVsaW1pdGVyIiwicnVzc2lhblBsdXJhbEdyb3VwcyIsImVuZCIsInBsdXJhbFR5cGVzIiwiYXJhYmljIiwibGFzdFR3byIsImJvc25pYW5fc2VyYmlhbiIsImNoaW5lc2UiLCJjcm9hdGlhbiIsImZyZW5jaCIsImdlcm1hbiIsInJ1c3NpYW4iLCJsaXRodWFuaWFuIiwiY3plY2giLCJwb2xpc2giLCJpY2VsYW5kaWMiLCJzbG92ZW5pYW4iLCJwbHVyYWxUeXBlVG9MYW5ndWFnZXMiLCJsYW5nVG9UeXBlTWFwIiwibWFwcGluZyIsInJldCIsImxhbmdzIiwibGFuZyIsInBsdXJhbFR5cGVOYW1lIiwibG9jYWxlIiwibGFuZ1RvUGx1cmFsVHlwZSIsImVuIiwicGx1cmFsVHlwZUluZGV4IiwiY291bnQiLCJlc2NhcGUiLCJ0b2tlbiIsImNvbnN0cnVjdFRva2VuUmVnZXgiLCJvcHRzIiwic3VmZml4IiwiUmFuZ2VFcnJvciIsImRvbGxhclJlZ2V4IiwiZG9sbGFyQmlsbHNZYWxsIiwiZGVmYXVsdFRva2VuUmVnZXgiLCJ0cmFuc2Zvcm1QaHJhc2UiLCJwaHJhc2UiLCJzdWJzdGl0dXRpb25zIiwidG9rZW5SZWdleCIsIlR5cGVFcnJvciIsImludGVycG9sYXRpb25SZWdleCIsIm9wdGlvbnMiLCJzbWFydF9jb3VudCIsInRleHRzIiwiZXhwcmVzc2lvbiIsImFyZ3VtZW50IiwiUG9seWdsb3QiLCJwaHJhc2VzIiwiY3VycmVudExvY2FsZSIsImFsbG93TWlzc2luZyIsIm9uTWlzc2luZ0tleSIsImludGVycG9sYXRpb24iLCJuZXdMb2NhbGUiLCJtb3JlUGhyYXNlcyIsInByZWZpeGVkS2V5IiwidW5zZXQiLCJjbGVhciIsIm5ld1BocmFzZXMiLCJ0IiwiXyIsInRyYW5zZm9ybSIsIndlYml4UG9seWdsb3QiLCJMb2NhbGUiLCJfdmlldyIsInNldExhbmdEYXRhIiwicGNvbmZpZyIsInBvbHlnbG90IiwicG9seSIsInNlcnZpY2UiLCJsb2NOYW1lIiwiaTE4biIsInNldExvY2FsZSIsImdldExhbmciLCJzZXRMYW5nIiwidXJscyIsIk1lbnUiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwiZ2V0U2VsZWN0ZWRJZCIsInNlbGVjdCIsImV4aXN0cyIsImJhc2VpY29ucyIsImdvb2QiLCJzYXZpbmciLCJiYXNldGV4dCIsIlN0YXR1cyIsInN0YXR1cyIsImlzZXJyb3IiLCJleHBpcmVEZWxheSIsImljb25zIiwiY29udGVudCIsImFyZWEiLCJzZXRIVE1MIiwic3VjY2VzcyIsInNldFN0YXR1cyIsImZhaWwiLCJnZXRTdGF0dXMiLCJoaWRlU3RhdHVzIiwibW9kZSIsInJlc3BvbnNlVGV4dCIsInRyYWNrIiwiZHAiLCJfaWQiLCJfb2JqIiwicmVtb3RlIiwiYWpheCIsIl9tb2RlIiwiX3VybCIsIl9yZXF1ZXN0IiwiX2hlYWRlcnMiLCJfZmlsZXMiLCJUaGVtZSIsInRoZW1lIiwiZ2V0VGhlbWUiLCJzZXRUaGVtZSIsImxpbmtzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsbmFtZSIsImRpc2FibGVkIiwic2tpbiIsImNvcHlQYXJhbXMiLCJVcmxQYXJhbSIsIm9zIiwib2ciLCJ2YWwiLCJVc2VyIiwibG9naW4iLCJsb2dvdXQiLCJhZnRlckxvZ2luIiwiYWZ0ZXJMb2dvdXQiLCJwaW5nIiwibW9kZWwiLCJ1c2VyIiwiZ2V0VXNlciIsInNlcnZlciIsInBhc3MiLCJjYW5OYXZpZ2F0ZSIsIl8kcm9vdCIsInB1YmxpYyIsInNldEludGVydmFsIiwicGx1Z2lucyIsImxvZ291dFVybCIsImxvZ2luVXJsIiwicmVnaXN0ZXJVcmwiLCJBdXRob3JpemF0aW9uIiwicmVnaXN0ZXIiLCJwb3N0IiwiZGF0ZSIsIk15QXBwIiwiZGVmYXVsdHMiLCJBUFBOQU1FIiwiVkVSU0lPTiIsIkJVSUxEX0FTX01PRFVMRSIsIlBST0RVQ1RJT04iLCJJbmRleFBhZ2UiLCJsb2dpbkZvcm0iLCJ3aWR0aCIsImVsZW1lbnRzIiwibGFiZWwiLCJtYXJnaW4iLCJjb2xzIiwibGluayIsImNsaWNrIiwicm93cyIsInZhbHVlcyIsImdldFZhbHVlcyIsImF1dGhvcml6YXRpb24iLCJUb3BWaWV3IiwiaGVhZGVyIiwiY3NzIiwibWVudSIsImljb24iLCJwYWRkaW5nWCIsInBhZGRpbmdZIiwiZm9ybWF0IiwiZGF0ZVRvU3RyIiwiY3VycmVudERhdGUiLCJNYWluVmlldyIsInRlc3RSZXN1bHRzIiwiY29sdW1ucyIsImJ1dHRvbiIsImlucHV0V2lkdGgiLCJSZWdpc3RlclBhZ2UiLCJy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VUFBTSxDQUNMLEVBREssRUFFTG9CLFlBRkssRUFHTCxFQUhLO0FBRFAsSUFGSyxFQVNMLEVBVEs7QUFEQSxHQUFQO0FBYUEsRTs7d0JBRURuVyxJLG1CQUFPO0FBQUE7O0FBQ04sT0FBS2hHLEVBQUwsQ0FBUSxhQUFSLEVBQXVCVSxXQUF2QixDQUFtQyxhQUFuQyxFQUFrRCxZQUFNO0FBQ3ZELE9BQU1zYSxTQUFTLE9BQUtoYixFQUFMLENBQVEsY0FBUixFQUF3QmliLFNBQXhCLEVBQWY7QUFDQSxPQUFNQyxnQkFBZ0IsSUFBSXRCLHNEQUFKLEVBQXRCOztBQUVBc0IsaUJBQWNyQixRQUFkLENBQXVCbUIsTUFBdkIsRUFBK0JuVyxJQUEvQixDQUFvQyxVQUFDdUMsUUFBRCxFQUFjO0FBQ2pELFFBQUlBLFFBQUosRUFBYztBQUNiLFlBQUs3SCxJQUFMLENBQVUsb0JBQVY7QUFDQTtBQUNELElBSkQ7QUFLQSxHQVREO0FBVUEsRTs7O0VBOUN3Q3lGLGlEOztBQUFyQmtYLDJFIiwiZmlsZSI6Im15YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY29kZWJhc2UvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlcy9teWFwcC5qc1wiKTtcbiIsImNsYXNzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iod2ViaXgpIHtcclxuICAgICAgICB0aGlzLndlYml4SmV0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndlYml4ID0gd2ViaXg7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzKCk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gdGhpcy5fY29udGFpbmVyID0gdGhpcy5hcHAgPSB0aGlzLl9wYXJlbnQgPSB0aGlzLl9yb290ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHNldFBhcmFtKGlkLCB2YWx1ZSwgdXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFbaWRdICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhW2lkXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWdtZW50LnVwZGF0ZShpZCwgdmFsdWUsIDApO1xyXG4gICAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRQYXJhbShpZCwgcGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9kYXRhW2lkXTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8ICFwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcuZ2V0UGFyYW0oaWQsIHBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnN1YnVybCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRQYXJlbnRWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAkJChpZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuZ2V0Um9vdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcm9vdC5xdWVyeVZpZXcoKG9iaiA9PiAob2JqLmNvbmZpZy5pZCA9PT0gaWQgfHwgb2JqLmNvbmZpZy5sb2NhbElkID09PSBpZCkgJiZcclxuICAgICAgICAgICAgICAgIChvYmouJHNjb3BlID09PSByb290LiRzY29wZSkpLCBcInNlbGZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb24ob2JqLCBuYW1lLCBjb2RlKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBvYmouYXR0YWNoRXZlbnQobmFtZSwgY29kZSk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goeyBvYmosIGlkIH0pO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuICAgIGNvbnRhaW5zKHZpZXcpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtpZCA9IHRoaXMuX3N1YnNba2V5XS52aWV3O1xyXG4gICAgICAgICAgICBpZiAoa2lkID09PSB2aWV3IHx8IGtpZC5jb250YWlucyh2aWV3KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlldyhuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWIuc3Vidmlldy52aWV3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFN1YlZpZXdJbmZvKG5hbWUpIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9zdWJzW25hbWUgfHwgXCJkZWZhdWx0XCJdO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3Vidmlldzogc3ViLCBwYXJlbnQ6IHRoaXMgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiX3RvcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YnNbbmFtZV0gPSB7IHVybDogXCJcIiwgaWQ6IG51bGwsIHBvcHVwOiB0cnVlIH07XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIGEgY2hpbGQgdmlldywgc2VhcmNoZXMgZm9yIG5lYXJlc3QgcGFyZW50IHdpdGggc3Vidmlld1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBfZGV0YWNoRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcclxuICAgICAgICBmb3IgKGxldCBpID0gZXZlbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGV2ZW50c1tpXS5vYmouZGV0YWNoRXZlbnQoZXZlbnRzW2ldLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveVN1YnMoKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSBzdWIgdmlld3NcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlZpZXcgPSB0aGlzLl9zdWJzW2tleV0udmlldztcclxuICAgICAgICAgICAgLy8gaXQgcG9zc2libGUgdGhhdCBzdWJ2aWV3IHdhcyBub3QgbG9hZGVkIHdpdGggYW55IGNvbnRlbnQgeWV0XHJcbiAgICAgICAgICAgIC8vIHNvIGNoZWNrIG9uIG51bGxcclxuICAgICAgICAgICAgaWYgKHN1YlZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHN1YlZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgfVxyXG4gICAgX2luaXRfdXJsX2RhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fc2VnbWVudC5jdXJyZW50KCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMud2ViaXguZXh0ZW5kKHRoaXMuX2RhdGEsIHVybC5wYXJhbXMsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgX2dldERlZmF1bHRTdWIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YnMuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vicy5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuX3N1YnNba2V5XTtcclxuICAgICAgICAgICAgaWYgKCFzdWIuYnJhbmNoICYmIHN1Yi52aWV3ICYmIGtleSAhPT0gXCJfdG9wXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gc3ViLnZpZXcuX2dldERlZmF1bHRTdWIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yb3V0ZWRfdmlldygpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ViID0gcGFyZW50Ll9nZXREZWZhdWx0U3ViKCk7XHJcbiAgICAgICAgaWYgKCFzdWIgJiYgc3ViICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fcm91dGVkX3ZpZXcoKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBwYXJzZSh1cmwpIHtcclxuICAgIC8vIHJlbW92ZSBzdGFydGluZyAvXHJcbiAgICBpZiAodXJsWzBdID09PSBcIi9cIikge1xyXG4gICAgICAgIHVybCA9IHVybC5zdWJzdHIoMSk7XHJcbiAgICB9XHJcbiAgICAvLyBzcGxpdCB1cmwgYnkgXCIvXCJcclxuICAgIGNvbnN0IHBhcnRzID0gdXJsLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gICAgLy8gZm9yIGVhY2ggcGFnZSBpbiB1cmxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0ZXN0ID0gcGFydHNbaV07XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICAgICAgLy8gZGV0ZWN0IHBhcmFtc1xyXG4gICAgICAgIC8vIHN1cHBvcnQgb2xkIFx0XHRcdHNvbWU6YT1iOmM9ZFxyXG4gICAgICAgIC8vIGFuZCBuZXcgbm90YXRpb25cdFx0c29tZT9hPWImYz1kXHJcbiAgICAgICAgbGV0IHBvcyA9IHRlc3QuaW5kZXhPZihcIjpcIik7XHJcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcG9zID0gdGVzdC5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGVzdC5zdWJzdHIocG9zICsgMSkuc3BsaXQoL1tcXDpcXD9cXCZdL2cpO1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgaGFzaCBvZiBuYW1lZCBwYXJhbXNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRjaHVuayA9IHBhcmFtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtkY2h1bmtbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGRjaHVua1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3RvcmUgcGFyc2VkIHZhbHVlc1xyXG4gICAgICAgIGNodW5rc1tpXSA9IHtcclxuICAgICAgICAgICAgcGFnZTogKHBvcyA+IC0xID8gdGVzdC5zdWJzdHIoMCwgcG9zKSA6IHRlc3QpLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHJlc3VsdCxcclxuICAgICAgICAgICAgaXNOZXc6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFycmF5IG9mIHBhZ2Ugb2JqZWN0c1xyXG4gICAgcmV0dXJuIGNodW5rcztcclxufVxyXG5mdW5jdGlvbiB1cmwyc3RyKHN0YWNrKSB7XHJcbiAgICBjb25zdCB1cmwgPSBbXTtcclxuICAgIGZvciAoY29uc3QgY2h1bmsgb2Ygc3RhY2spIHtcclxuICAgICAgICB1cmwucHVzaChcIi9cIiArIGNodW5rLnBhZ2UpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG9iajJzdHIoY2h1bmsucGFyYW1zKTtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHVybC5wdXNoKFwiP1wiICsgcGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsLmpvaW4oXCJcIik7XHJcbn1cclxuZnVuY3Rpb24gb2JqMnN0cihvYmopIHtcclxuICAgIGNvbnN0IHN0ciA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RyLnB1c2goXCImXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHIucHVzaChrZXkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5qb2luKFwiXCIpO1xyXG59XG5cbmNsYXNzIFJvdXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuX25leHQgPSAxO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygcm91dGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogcGFyc2Uocm91dGUpLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogcm91dGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgY3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgdGhpcy5fbmV4dF07XHJcbiAgICB9XHJcbiAgICBzdWJ1cmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgc2hpZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZSh0aGlzLnJvdXRlLCB0aGlzLmluZGV4ICsgdGhpcy5fbmV4dCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4ICsgMTsgaSA8IHVybC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHVybDJzdHIodGhpcy5zdWJ1cmwoKSk7XHJcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0ci5zdWJzdHIoMSkgOiBcIlwiO1xyXG4gICAgfVxyXG4gICAgX2pvaW4ocGF0aCwga2lkcykge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICBpZiAocGF0aCA9PT0gbnVsbCkgeyAvLyBjaGFuZ2Ugb2YgcGFyYW1ldGVycywgcm91dGUgZWxlbWVudHMgYXJlIG5vdCBhZmZlY3RlZFxyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvbGQgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICB1cmwgPSBvbGQuc2xpY2UoMCwgdGhpcy5pbmRleCArIChraWRzID8gdGhpcy5fbmV4dCA6IDApKTtcclxuICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuY29uY2F0KHBhcnNlKHBhdGgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0udmlldyA9IG9sZFtpXS52aWV3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFtpXSAmJiB1cmxbaV0ucGFnZSA9PT0gb2xkW2ldLnBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKHBhdGgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9qb2luKHBhdGgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodXJsKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnVybCA9IHVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS5wYXRoO1xyXG4gICAgfVxyXG4gICAgc2hvdyhwYXRoLCB2aWV3LCBraWRzKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fam9pbihwYXRoLCBraWRzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gdXJsMnN0cih1cmwpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdCxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm06IFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IHZpZXcgPyB2aWV3LmFwcCA6IG51bGw7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gY3JlYXRpbmcgYSBuZXcgcm91dGUsIGl0IHBvc3NpYmxlIHRoYXQgaXQgd2lsbCBub3QgaGF2ZSBhbnkgY29udGVudFxyXG4gICAgICAgICAgICAvLyBndWFyZCBpcyBub3QgbmVjZXNzYXJ5IGluIHN1Y2ggY2FzZVxyXG4gICAgICAgICAgICBpZiAoYXBwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhcHAuY2FsbEV2ZW50KFwiYXBwOmd1YXJkXCIsIFtvYmoucmVkaXJlY3QsIHZpZXcsIG9ial0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqLmNvbmZpcm0uY2F0Y2goKCkgPT4gb2JqLnJlZGlyZWN0ID0gbnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnJlZGlyZWN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5yZWRpcmVjdCAhPT0gcmVkaXJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuc2hvdyhvYmoucmVkaXJlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGUucGF0aCA9IHJlZGlyZWN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICByZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaXplKG4pIHtcclxuICAgICAgICB0aGlzLl9uZXh0ID0gbjtcclxuICAgIH1cclxuICAgIHNwbGl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0ge1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXggKyAxKSxcclxuICAgICAgICAgICAgcGF0aDogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJvdXRlLnVybC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcm91dGUucGF0aCA9IHVybDJzdHIocm91dGUudXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZShyb3V0ZSwgMCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgKGluZGV4IHx8IDApXTtcclxuICAgICAgICBpZiAoIWNodW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUudXJsLnB1c2goeyBwYWdlOiBcIlwiLCBwYXJhbXM6IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgY2h1bmsucGFnZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2h1bmsucGFyYW1zW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodGhpcy5yb3V0ZS51cmwpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEpldFZpZXcgZXh0ZW5kcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLndlYml4KTtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICAvL3RoaXMuJGNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgdWkodWksIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjb25maWcuY29udGFpbmVyIHx8IHVpLmNvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCBqZXR2aWV3ID0gdGhpcy5hcHAuY3JlYXRlVmlldyh1aSk7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChqZXR2aWV3KTtcclxuICAgICAgICBqZXR2aWV3LnJlbmRlcihjb250YWluZXIsIHRoaXMuX3NlZ21lbnQsIHRoaXMpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWkgIT09IFwib2JqZWN0XCIgfHwgKHVpIGluc3RhbmNlb2YgSmV0QmFzZSkpIHtcclxuICAgICAgICAgICAgLy8gcmF3IHdlYml4IFVJXHJcbiAgICAgICAgICAgIHJldHVybiBqZXR2aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGpldHZpZXcuZ2V0Um9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3cocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIC8vIGNvbnZlcnQgcGFyYW1ldGVycyBvYmplY3QgdG8gdXJsXHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHBhdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyYW0oa2V5LCBwYXRoW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhdGggPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGVsaWdhdGUgdG8gYXBwIGluIGNhc2Ugb2Ygcm9vdCBwcmVmaXhcclxuICAgICAgICAgICAgaWYgKHBhdGguc3Vic3RyKDAsIDEpID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3cocGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbG9jYWwgcGF0aCwgZG8gbm90aGluZ1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi9cIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwYXJlbnQgcGF0aCwgY2FsbCBwYXJlbnQgdmlld1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi4vXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LnNob3cocGF0aC5zdWJzdHIoMyksIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhcIi9cIiArIHBhdGguc3Vic3RyKDMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdWIgPSB0aGlzLmdldFN1YlZpZXdJbmZvKGNvbmZpZy50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViLnBhcmVudCAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWIucGFyZW50LnNob3cocGF0aCwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZy50YXJnZXQgJiYgY29uZmlnLnRhcmdldCAhPT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyRnJhbWVMb2NrKGNvbmZpZy50YXJnZXQsIHN1Yi5zdWJ2aWV3LCBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3coXCIvXCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hvdyh0aGlzLl9zZWdtZW50LCBwYXRoLCB0aGlzKTtcclxuICAgIH1cclxuICAgIF9zaG93KHNlZ21lbnQsIHBhdGgsIHZpZXcpIHtcclxuICAgICAgICByZXR1cm4gc2VnbWVudC5zaG93KHBhdGgsIHZpZXcsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0X3VybF9kYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQucm91dGUubGlua1JvdXRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZ2V0Um91dGVyKCkuc2V0KHNlZ21lbnQucm91dGUucGF0aCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3NlZ21lbnQucm91dGUucGF0aF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KF8kdmlldywgXyQpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICByZWFkeShfJHZpZXcsIF8kdXJsKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgY29uZmlnKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLndlYml4Lm1lc3NhZ2UoXCJWaWV3OkNvbmZpZyBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICB9XHJcbiAgICB1cmxDaGFuZ2UoXyR2aWV3LCBfJHVybCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95S2lkcygpO1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgYWN0dWFsIFVJXHJcbiAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgdXNlKHBsdWdpbiwgY29uZmlnKSB7XHJcbiAgICAgICAgcGx1Z2luKHRoaXMuYXBwLCB0aGlzLCBjb25maWcpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybCgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lLaWRzKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVN1YnMoKTtcclxuICAgICAgICB0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQucmVmcmVzaCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIodGhpcy5fc2VnbWVudCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIocm9vdCwgdXJsLCBwYXJlbnQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB1cmwgPSBuZXcgUm91dGUodXJsLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IHVybDtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5faW5pdF91cmxfZGF0YSgpO1xyXG4gICAgICAgIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgY29uc3QgX2NvbnRhaW5lciA9ICh0eXBlb2Ygcm9vdCA9PT0gXCJzdHJpbmdcIikgPyB0aGlzLndlYml4LnRvTm9kZShyb290KSA6IHJvb3Q7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciAhPT0gX2NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSBfY29udGFpbmVyO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB0aGlzLmdldFJvb3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcih1cmwpIHtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZygpO1xyXG4gICAgICAgIGlmIChjb25maWcudGhlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLnRoZW4oY2ZnID0+IHRoaXMuX3JlbmRlcl9maW5hbChjZmcsIHVybCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcl9maW5hbChjb25maWcsIHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcl9maW5hbChjb25maWcsIHVybCkge1xyXG4gICAgICAgIC8vIGdldCBwcmV2aW91cyB2aWV3IGluIHRoZSBzYW1lIHNsb3RcclxuICAgICAgICBsZXQgc2xvdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHNob3cgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRhaW5lci50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHNsb3QgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgICAgIGlmIChzbG90LnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLndlYml4LiQkKHNsb3QuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHZpZXcgYWxyZWFkeSBkZXN0cm95ZWRcclxuICAgICAgICBpZiAoIXRoaXMuYXBwIHx8ICFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuX3NlZ21lbnQuY3VycmVudCgpO1xyXG4gICAgICAgIC8vIHVzaW5nIHdyYXBwZXIgb2JqZWN0LCBzbyB1aSBjYW4gYmUgY2hhbmdlZCBmcm9tIGFwcDpyZW5kZXIgZXZlbnRcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7IHVpOiB7fSB9O1xyXG4gICAgICAgIHRoaXMuYXBwLmNvcHlDb25maWcoY29uZmlnLCByZXN1bHQudWksIHRoaXMuX3N1YnMpO1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDpyZW5kZXJcIiwgW3RoaXMsIHVybCwgcmVzdWx0XSk7XHJcbiAgICAgICAgcmVzdWx0LnVpLiRzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgLyogZGVzdHJveSBvbGQgSFRNTCBhdHRhY2hlZCB2aWV3cyBiZWZvcmUgY3JlYXRpbmcgbmV3IG9uZSAqL1xyXG4gICAgICAgIGlmICghc2xvdCAmJiBjdXJyZW50LmlzTmV3ICYmIGN1cnJlbnQudmlldykge1xyXG4gICAgICAgICAgICBjdXJyZW50LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciBhZGRpbmcgaW5zaWRlIG9mIG11bHRpdmlldyAtIHByZXNlcnZlIG9sZCBpZFxyXG4gICAgICAgICAgICBpZiAoc2xvdCAmJiAhc2hvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkdWkgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBvbGR1aS5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5uYW1lID09PSBcIm11bHRpdmlld1wiICYmICFyZXN1bHQudWkuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudWkuaWQgPSBvbGR1aS5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuYXBwLndlYml4LnVpKHJlc3VsdC51aSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgY29uc3QgYXNXaW4gPSB0aGlzLl9yb290O1xyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgdXJsIGFkZGVkIHRvIGlnbm9yZSB0aGlzLnVpIGNhbGxzXHJcbiAgICAgICAgICAgIGlmIChzaG93ICYmIGFzV2luLnNldFBvc2l0aW9uICYmICFhc1dpbi5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgYXNXaW4uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNoZWNrLCBpZiB3ZSBhcmUgcmVwbGFjaW5nIHNvbWUgb2xkZXIgdmlld1xyXG4gICAgICAgICAgICBpZiAoc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsb3QudmlldyAmJiBzbG90LnZpZXcgIT09IHRoaXMgJiYgc2xvdC52aWV3ICE9PSB0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsb3Qudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbG90LmlkID0gdGhpcy5fcm9vdC5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQYXJlbnRWaWV3KCkgfHwgIXRoaXMuYXBwLmFwcClcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB3ZSBoYXZlIHN1YmFwcCwgc2V0IHdob2xlIGFwcCBhcyBhIHZpZXdcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyBvbiBkZXN0cnVjdGlvbiwgdGhlIHdob2xlIGFwcCB3aWxsIGJlIGRlc3Ryb3llZFxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3QudmlldyA9IHRoaXMuYXBwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzTmV3KSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2luaXQodGhpcy5fcm9vdCwgdXJsKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdFVybCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZHkodGhpcy5fcm9vdCwgdXJsLnN1YnVybCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBQcm9taXNlLnJlamVjdChlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNhdGNoKGVyciA9PiB0aGlzLl9pbml0RXJyb3IodGhpcywgZXJyKSk7XHJcbiAgICB9XHJcbiAgICBfaW5pdCh2aWV3LCB1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0KHZpZXcsIHVybC5zdWJ1cmwoKSk7XHJcbiAgICB9XHJcbiAgICBfdXJsQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDp1cmxjaGFuZ2VcIiwgW3RoaXMsIHRoaXMuX3NlZ21lbnRdKTtcclxuICAgICAgICBjb25zdCB3YWl0cyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLl9zdWJzW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IHdhaXQgPSB0aGlzLl9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIGlmICh3YWl0KSB7XHJcbiAgICAgICAgICAgICAgICB3YWl0cy5wdXNoKHdhaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh3YWl0cykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybENoYW5nZSh0aGlzLl9yb290LCB0aGlzLl9zZWdtZW50LnN1YnVybCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgcGF0aCkge1xyXG4gICAgICAgIC8vIGlmIHN1YnZpZXcgaXMgbm90IG9jY3VwaWVkIGJ5IHNvbWUgcmVuZGVyaW5nIHlldFxyXG4gICAgICAgIGlmICghZnJhbWUubG9jaykge1xyXG4gICAgICAgICAgICAvLyByZXRyZWl2ZSBhbmQgc3RvcmUgcmVuZGVyaW5nIGVuZCBwcm9taXNlXHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2sgPSB0aGlzLl9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKTtcclxuICAgICAgICAgICAgaWYgKGxvY2spIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGxvY2sgYWZ0ZXIgZnJhbWUgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICAvLyBhcyBwcm9taXNlLmZpbmFsbHkgaXMgbm90IHN1cHBvcnRlZCBieSAgV2ViaXggbGVzc2VyIHRoYW4gNi4yXHJcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBhIG1vcmUgdmVyYm9zZSBub3RhdGlvblxyXG4gICAgICAgICAgICAgICAgZnJhbWUubG9jayA9IGxvY2sudGhlbigoKSA9PiBmcmFtZS5sb2NrID0gbnVsbCwgKCkgPT4gZnJhbWUubG9jayA9IG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldHVybiByZW5kZXJpbmcgZW5kIHByb21pc2VcclxuICAgICAgICByZXR1cm4gZnJhbWUubG9jaztcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKSB7XHJcbiAgICAgICAgLy9kZWZhdWx0IHJvdXRlXHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlZ21lbnQubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGEgbmV4dCBzZWdtZW50IGluIHVybCwgcmVuZGVyIGl0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgdGhpcy5fc2VnbWVudC5zaGlmdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmcmFtZS52aWV3ICYmIGZyYW1lLnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBubyBuZXh0IHNlZ21lbnQsIGRlbGV0ZSB0aGUgZXhpc3Rpbmcgc3ViLXZpZXdcclxuICAgICAgICAgICAgICAgIGZyYW1lLnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUudmlldyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiBuZXcgcGF0aCBwcm92aWRlZCwgc2V0IGl0IHRvIHRoZSBmcmFtZVxyXG4gICAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZyYW1lLnVybCA9IHBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGluIGNhc2Ugb2Ygcm91dGVkIHN1Yi12aWV3XHJcbiAgICAgICAgaWYgKGZyYW1lLnJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBuZXcgcGF0aCBmb3Igc3ViLXZpZXdcclxuICAgICAgICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmcmFtZS5yb3V0ZS5zaG93KHBhdGgsIGZyYW1lLnZpZXcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCBmcmFtZS5yb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkbyBub3QgdHJpZ2dlciBvbkNoYW5nZSBmb3IgaXNvbGF0ZWQgc3ViLXZpZXdzXHJcbiAgICAgICAgICAgIGlmIChmcmFtZS5icmFuY2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlldyA9IGZyYW1lLnZpZXc7XHJcbiAgICAgICAgLy8gaWYgdmlldyBkb2Vzbid0IGV4aXN0cyB5ZXQsIGluaXQgaXRcclxuICAgICAgICBpZiAoIXZpZXcgJiYgZnJhbWUudXJsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhbWUudXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcsIHNvIHdlIGhhdmUgaXNvbGF0ZWQgc3VidmlldyB1cmxcclxuICAgICAgICAgICAgICAgIGZyYW1lLnJvdXRlID0gbmV3IFJvdXRlKGZyYW1lLnVybCwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgZnJhbWUucm91dGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0LCBzbyB3ZSBoYXZlIGFuIGVtYmVkZWQgc3Vidmlld1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFtZS51cmwgPT09IFwiZnVuY3Rpb25cIiAmJiAhKHZpZXcgaW5zdGFuY2VvZiBmcmFtZS51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IG5ldyBmcmFtZS51cmwodGhpcy5hcHAsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IGZyYW1lLnVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0cmlnZ2VyIG9uQ2hhbmdlIGZvciBhbHJlYWR5IGV4aXN0ZWQgdmlld1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihmcmFtZSwgKGZyYW1lLnJvdXRlIHx8IHRoaXMuX3NlZ21lbnQpLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaW5pdEVycm9yKHZpZXcsIGVycikge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIGlmIHZpZXcgaXMgZGVzdHJveWVkLCBpZ25vcmUgYW55IHZpZXcgcmVsYXRlZCBlcnJvcnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5lcnJvcihcImFwcDplcnJvcjppbml0dmlld1wiLCBbZXJyLCB2aWV3XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZVN1YlZpZXcoc3ViLCBzdWJ1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAuY3JlYXRlRnJvbVVSTChzdWJ1cmwuY3VycmVudCgpLCBzdWIudmlldykudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKHN1Yiwgc3VidXJsLCB0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9kZXN0cm95S2lkcygpIHtcclxuICAgICAgICAvLyBkZXN0cm95IGNoaWxkIHZpZXdzXHJcbiAgICAgICAgY29uc3QgdWlzID0gdGhpcy5fY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHVpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAodWlzW2ldICYmIHVpc1tpXS5kZXN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICB1aXNbaV0uZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHZhcnMgZm9yIGJldHRlciBHQyBwcm9jZXNzaW5nXHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxufVxuXG4vLyB3cmFwcGVyIGZvciByYXcgb2JqZWN0cyBhbmQgSmV0IDEueCBzdHJ1Y3RzXHJcbmNsYXNzIEpldFZpZXdSYXcgZXh0ZW5kcyBKZXRWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuX3VpID0gY29uZmlnLnVpO1xyXG4gICAgfVxyXG4gICAgY29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBTdWJSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZywgYXBwKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmFwcDtcclxuICAgICAgICBhLmFwcC5nZXRSb3V0ZXIoKS5zZXQoYS5fc2VnbWVudC5hcHBlbmQodGhpcy5wYXRoKSwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxufVxuXG5sZXQgX29uY2UgPSB0cnVlO1xyXG5jbGFzcyBKZXRBcHBCYXNlIGV4dGVuZHMgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25zdCB3ZWJpeCA9IChjb25maWcgfHwge30pLndlYml4IHx8IHdpbmRvdy53ZWJpeDtcclxuICAgICAgICBzdXBlcih3ZWJpeCk7XHJcbiAgICAgICAgLy8gaW5pdCBjb25maWdcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMud2ViaXguZXh0ZW5kKHtcclxuICAgICAgICAgICAgbmFtZTogXCJBcHBcIixcclxuICAgICAgICAgICAgdmVyc2lvbjogXCIxLjBcIixcclxuICAgICAgICAgICAgc3RhcnQ6IFwiL2hvbWVcIlxyXG4gICAgICAgIH0sIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLmNvbmZpZy5hcHA7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2VzID0ge307XHJcbiAgICAgICAgdGhpcy53ZWJpeC5leHRlbmQodGhpcywgdGhpcy53ZWJpeC5FdmVudFN5c3RlbSk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlNlZ21lbnQuc3VidXJsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmxTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlNlZ21lbnQudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGdldFNlcnZpY2UobmFtZSkge1xyXG4gICAgICAgIGxldCBvYmogPSB0aGlzLl9zZXJ2aWNlc1tuYW1lXTtcclxuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHRoaXMuX3NlcnZpY2VzW25hbWVdID0gb2JqKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgc2V0U2VydmljZShuYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZXNbbmFtZV0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdldFN1YlZpZXcoKS5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgLy8gY29weSBvYmplY3QgYW5kIGNvbGxlY3QgZXh0cmEgaGFuZGxlcnNcclxuICAgIGNvcHlDb25maWcob2JqLCB0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIC8vIHJhdyB1aSBjb25maWdcclxuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgSmV0QmFzZSB8fFxyXG4gICAgICAgICAgICAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSkge1xyXG4gICAgICAgICAgICBvYmogPSB7ICRzdWJ2aWV3OiBvYmogfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3VidmlldyBwbGFjZWhvbGRlclxyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqLiRzdWJ2aWV3ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkU3ViVmlldyhvYmosIHRhcmdldCwgY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcHJvY2VzcyBzdWItcHJvcGVydGllc1xyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCAob2JqIGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1ldGhvZCBpbiBvYmopIHtcclxuICAgICAgICAgICAgbGV0IHBvaW50ID0gb2JqW21ldGhvZF07XHJcbiAgICAgICAgICAgIC8vIHZpZXcgY2xhc3NcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2ludCA9PT0gXCJmdW5jdGlvblwiICYmIHBvaW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ID0geyAkc3VidmlldzogcG9pbnQgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9pbnQgJiYgdHlwZW9mIHBvaW50ID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgICAgICAhKHBvaW50IGluc3RhbmNlb2YgdGhpcy53ZWJpeC5EYXRhQ29sbGVjdGlvbikgJiYgIShwb2ludCBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwb2ludCBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IG5ldyBEYXRlKHBvaW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvcHlDb25maWcocG9pbnQsIChwb2ludCBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fSksIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gcG9pbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIGdldFJvdXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcm91dGVyO1xyXG4gICAgfVxyXG4gICAgY2xpY2tIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAoZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyaWdnZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJpZ2dlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvclZpZXcodGFyZ2V0LCB2aWV3ID0+IHZpZXcuYXBwLnRyaWdnZXIodHJpZ2dlcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwicm91dGVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocm91dGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JWaWV3KHRhcmdldCwgdmlldyA9PiB2aWV3LnNob3cocm91dGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlldygpLmdldFJvb3QoKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdWJTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXcoKS5yZWZyZXNoKCkudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3RoaXMuZ2V0VXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkVmlldyh1cmwpIHtcclxuICAgICAgICBjb25zdCB2aWV3cyA9IHRoaXMuY29uZmlnLnZpZXdzO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGlmICh1cmwgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9sb2FkRXJyb3IoXCJcIiwgbmV3IEVycm9yKFwiV2ViaXggSmV0OiBFbXB0eSB1cmwgc2VnbWVudFwiKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodmlld3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygdmlld3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBsb2FkaW5nIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmlld3ModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZWRlZmluZWQgaGFzaFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdzW3VybF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBcIl9ibGFua1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkVmlld0R5bmFtaWModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkRXJyb3IodXJsLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3VzdG9tIGhhbmRsZXIgY2FuIHJldHVybiB2aWV3IG9yIGl0cyBwcm9taXNlXHJcbiAgICAgICAgaWYgKCFyZXN1bHQudGhlbikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IGVycm9yIGhhbmRsZXJcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRcclxuICAgICAgICAgICAgLnRoZW4obW9kdWxlID0+IG1vZHVsZS5fX2VzTW9kdWxlID8gbW9kdWxlLmRlZmF1bHQgOiBtb2R1bGUpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5fbG9hZEVycm9yKHVybCwgZXJyKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIF9mb3JWaWV3KHRhcmdldCwgaGFuZGxlcikge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLndlYml4LiQkKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgaGFuZGxlcih2aWV3LiRzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2xvYWRWaWV3RHluYW1pYyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNyZWF0ZUZyb21VUkwoY2h1bmssIG5vdykge1xyXG4gICAgICAgIGxldCB2aWV3O1xyXG4gICAgICAgIGlmIChjaHVuay5pc05ldyB8fCAhY2h1bmsudmlldykge1xyXG4gICAgICAgICAgICB2aWV3ID0gdGhpcy5sb2FkVmlldyhjaHVuay5wYWdlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odWkgPT4gdGhpcy5jcmVhdGVWaWV3KHVpLCBuYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2aWV3ID0gUHJvbWlzZS5yZXNvbHZlKGNodW5rLnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmlldztcclxuICAgIH1cclxuICAgIGNyZWF0ZVZpZXcodWksIG5hbWUpIHtcclxuICAgICAgICBsZXQgb2JqO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBpZiAodWkucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QXBwQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgY2xhc3NcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdWkoeyBhcHA6IHRoaXMsIG5hbWUsIHJvdXRlcjogU3ViUm91dGVyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGNsYXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHVpKHRoaXMsIHsgbmFtZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGZhY3RvcnkgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgICAgICB1aSA9IHVpKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1aSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgb2JqID0gdWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBVSSBvYmplY3RcclxuICAgICAgICAgICAgb2JqID0gbmV3IEpldFZpZXdSYXcodGhpcywgeyBuYW1lLCB1aSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIC8vIHNob3cgdmlldyBwYXRoXHJcbiAgICBzaG93KHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLl9jb250YWluZXIsICh1cmwgfHwgdGhpcy5jb25maWcuc3RhcnQpKTtcclxuICAgIH1cclxuICAgIC8vIGV2ZW50IGhlbHBlcnNcclxuICAgIHRyaWdnZXIobmFtZSwgLi4ucmVzdCkge1xyXG4gICAgICAgIHRoaXMuYXBwbHkobmFtZSwgcmVzdCk7XHJcbiAgICB9XHJcbiAgICBhcHBseShuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQobmFtZSwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICBhY3Rpb24obmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlYml4LmJpbmQoZnVuY3Rpb24gKC4uLnJlc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHBseShuYW1lLCByZXN0KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50KG5hbWUsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgdXNlKHBsdWdpbiwgY29uZmlnKSB7XHJcbiAgICAgICAgcGx1Z2luKHRoaXMsIG51bGwsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBlcnJvcihuYW1lLCBlcikge1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KG5hbWUsIGVyKTtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDplcnJvclwiLCBlcik7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUgKi9cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGVidWcpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcltpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJbaV0gaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gZXJbaV0ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKFwiTW9kdWxlIGJ1aWxkIGZhaWxlZFwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHgxYlxcW1swLTk7XSptL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGA8cHJlIHN0eWxlPSdmb250LXNpemU6MTZweDsgYmFja2dyb3VuZC1jb2xvcjogI2VjNjg3MzsgY29sb3I6ICMwMDA7IHBhZGRpbmc6MTBweDsnPiR7dGV4dH08L3ByZT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIjxicj48YnI+Q2hlY2sgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2ViaXgubWVzc2FnZSh7IHR5cGU6IFwiZXJyb3JcIiwgdGV4dDogdGV4dCwgZXhwaXJlOiAtMSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIHRzbGludDplbmFibGUgKi9cclxuICAgIH1cclxuICAgIC8vIHJlbmRlcnMgdG9wIHZpZXdcclxuICAgIHJlbmRlcihyb290LCB1cmwsIHBhcmVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9ICh0eXBlb2Ygcm9vdCA9PT0gXCJzdHJpbmdcIikgP1xyXG4gICAgICAgICAgICB0aGlzLndlYml4LnRvTm9kZShyb290KSA6XHJcbiAgICAgICAgICAgIChyb290IHx8IGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0SW5pdCA9ICF0aGlzLiRyb3V0ZXI7XHJcbiAgICAgICAgbGV0IHBhdGggPSBudWxsO1xyXG4gICAgICAgIGlmIChmaXJzdEluaXQpIHtcclxuICAgICAgICAgICAgaWYgKF9vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4LmF0dGFjaEV2ZW50KFwib25DbGlja1wiLCBlID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpKTtcclxuICAgICAgICAgICAgICAgIF9vbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IG5ldyBSb3V0ZSh1cmwsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YlNlZ21lbnQgPSB0aGlzLl9maXJzdF9zdGFydCh1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJTZWdtZW50LnJvdXRlLmxpbmtSb3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdXJsLnNwbGl0KCkucm91dGUucGF0aCB8fCB0aGlzLmNvbmZpZy5zdGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB1cmwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldFN1YlZpZXcoKTtcclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gdGhpcy5fc3ViU2VnbWVudDtcclxuICAgICAgICBjb25zdCByZWFkeSA9IHNlZ21lbnQuc2hvdyhwYXRoLCB0b3ApXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuY3JlYXRlRnJvbVVSTChzZWdtZW50LmN1cnJlbnQoKSwgdG9wKSlcclxuICAgICAgICAgICAgLnRoZW4odmlldyA9PiB2aWV3LnJlbmRlcihyb290LCBzZWdtZW50KSlcclxuICAgICAgICAgICAgLnRoZW4oYmFzZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5zZXQoc2VnbWVudC5yb3V0ZS5wYXRoLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3RoaXMuZ2V0VXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJhc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRoaXMucmVhZHkudGhlbigoKSA9PiByZWFkeSk7XHJcbiAgICAgICAgcmV0dXJuIHJlYWR5O1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlldygpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3ViU2VnbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5fc3ViU2VnbWVudC5jdXJyZW50KCkudmlldztcclxuICAgICAgICAgICAgaWYgKHZpZXcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKZXRWaWV3KHRoaXMsIHt9KTtcclxuICAgIH1cclxuICAgIF9maXJzdF9zdGFydChyb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQgPSByb3V0ZTtcclxuICAgICAgICBjb25zdCBjYiA9IChhKSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93KGEpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHRoaXMuJHJvdXRlciA9IG5ldyAodGhpcy5jb25maWcucm91dGVyKShjYiwgdGhpcy5jb25maWcsIHRoaXMpO1xyXG4gICAgICAgIC8vIHN0YXJ0IGFuaW1hdGlvbiBmb3IgdG9wLWxldmVsIGFwcFxyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkgJiYgdGhpcy5jb25maWcuYW5pbWF0aW9uICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwuYWRkQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwucmVtb3ZlQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5hZGRDc3Mobm9kZSwgXCJ3ZWJpeGFwcFwiKTtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIG5vIHVybCBkZWZpbmVkLCBjaGVjayByb3V0ZXIgZmlyc3RcclxuICAgICAgICAgICAgbGV0IHVybFN0cmluZyA9IHRoaXMuJHJvdXRlci5nZXQoKTtcclxuICAgICAgICAgICAgaWYgKCF1cmxTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHVybFN0cmluZyA9IHRoaXMuY29uZmlnLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnNldCh1cmxTdHJpbmcsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKHVybFN0cmluZywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgIHJvdXRlLmN1cnJlbnQoKS52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHJvdXRlLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZS5zcGxpdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSBuZXcgUm91dGUodGhpcy5jb25maWcuc3RhcnQsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgIH1cclxuICAgIC8vIGVycm9yIGR1cmluZyB2aWV3IHJlc29sdmluZ1xyXG4gICAgX2xvYWRFcnJvcih1cmwsIGVycikge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoXCJhcHA6ZXJyb3I6cmVzb2x2ZVwiLCBbZXJyLCB1cmxdKTtcclxuICAgICAgICByZXR1cm4geyB0ZW1wbGF0ZTogXCIgXCIgfTtcclxuICAgIH1cclxuICAgIGFkZFN1YlZpZXcob2JqLCB0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IG9iai4kc3VidmlldyAhPT0gdHJ1ZSA/IG9iai4kc3VidmlldyA6IG51bGw7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG9iai5uYW1lIHx8ICh1cmwgPyB0aGlzLndlYml4LnVpZCgpIDogXCJkZWZhdWx0XCIpO1xyXG4gICAgICAgIHRhcmdldC5pZCA9IG9iai5pZCB8fCBcInNcIiArIHRoaXMud2ViaXgudWlkKCk7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IGNvbmZpZ1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgaWQ6IHRhcmdldC5pZCxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBicmFuY2g6IG9iai5icmFuY2gsXHJcbiAgICAgICAgICAgIHBvcHVwOiBvYmoucG9wdXBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB2aWV3LnBvcHVwID8gbnVsbCA6IHRhcmdldDtcclxuICAgIH1cclxufVxuXG5jbGFzcyBIYXNoUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICB0aGlzLl9kZXRlY3RQcmVmaXgoKTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB0aGlzLmNiKHRoaXMuZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZSA9IHBhdGguc3BsaXQoXCI/XCIsIDIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXNba2V5XSA9PT0gY29tcGFyZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBrZXkgKyAoY29tcGFyZS5sZW5ndGggPiAxID8gXCI/XCIgKyBjb21wYXJlWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCkgIT09IHBhdGgpIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHRoaXMucHJlZml4ICsgdGhpcy5zdWZpeCArIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX2dldFJhdygpLnJlcGxhY2UodGhpcy5wcmVmaXgsIFwiXCIpLnJlcGxhY2UodGhpcy5zdWZpeCwgXCJcIik7XHJcbiAgICAgICAgcGF0aCA9IHBhdGggIT09IFwiL1wiID8gcGF0aCA6IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJlID0gcGF0aC5zcGxpdChcIj9cIiwgMik7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnLnJvdXRlc1tjb21wYXJlWzBdXTtcclxuICAgICAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGtleSArIChjb21wYXJlLmxlbmd0aCA+IDEgPyBcIj9cIiArIGNvbXBhcmVbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuICAgIF9kZXRlY3RQcmVmaXgoKSB7XHJcbiAgICAgICAgLy8gdXNlIFwiIyFcIiBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgIGNvbnN0IHN1Zml4ID0gdGhpcy5jb25maWcucm91dGVyUHJlZml4O1xyXG4gICAgICAgIHRoaXMuc3VmaXggPSBcIiNcIiArICgodHlwZW9mIHN1Zml4ID09PSBcInVuZGVmaW5lZFwiKSA/IFwiIVwiIDogc3VmaXgpO1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIiwgMilbMF07XHJcbiAgICB9XHJcbiAgICBfZ2V0UmF3KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgfVxyXG59XG5cbmxldCBpc1BhdGNoZWQgPSBmYWxzZTtcclxuZnVuY3Rpb24gcGF0Y2godykge1xyXG4gICAgaWYgKGlzUGF0Y2hlZCB8fCAhdykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlzUGF0Y2hlZCA9IHRydWU7XHJcbiAgICAvLyBjdXN0b20gcHJvbWlzZSBmb3IgSUU4XHJcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XHJcbiAgICBpZiAoIXdpbi5Qcm9taXNlKSB7XHJcbiAgICAgICAgd2luLlByb21pc2UgPSB3LnByb21pc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2ZXJzaW9uID0gdy52ZXJzaW9uLnNwbGl0KFwiLlwiKTtcclxuICAgIC8vIHdpbGwgYmUgZml4ZWQgaW4gd2ViaXggNS4zXHJcbiAgICBpZiAodmVyc2lvblswXSAqIDEwICsgdmVyc2lvblsxXSAqIDEgPCA1Mykge1xyXG4gICAgICAgIHcudWkuZnJlZXplID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgLy8gZGlzYWJsZWQgYmVjYXVzZSB3ZWJpeCBqZXQgNS4wIGNhbid0IGhhbmRsZSByZXNpemUgb2Ygc2Nyb2xsdmlldyBjb3JyZWN0bHlcclxuICAgICAgICAgICAgLy8gdy51aS4kZnJlZXplID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gaGFuZGxlcigpO1xyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy50aGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXMudGhlbihmdW5jdGlvbiAoc29tZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHcudWkuJGZyZWV6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHcudWkucmVzaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHcudWkuJGZyZWV6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdy51aS5yZXNpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBhZGRpbmcgdmlld3MgYXMgY2xhc3Nlc1xyXG4gICAgY29uc3QgYmFzZUFkZCA9IHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUuYWRkVmlldztcclxuICAgIGNvbnN0IGJhc2VSZW1vdmUgPSB3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLnJlbW92ZVZpZXc7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgYWRkVmlldyh2aWV3LCBpbmRleCkge1xyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIGxvZ2ljIG9ubHkgZm9yIHdpZGdldHMgaW5zaWRlIG9mIGpldC12aWV3XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSBjYXNlIHdoZW4gYWRkVmlldyB1c2VkIHdpdGggYWxyZWFkeSBpbml0aWFsaXplZCB3aWRnZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLndlYml4SmV0ICYmICF2aWV3LnF1ZXJ5Vmlldykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganZpZXcgPSB0aGlzLiRzY29wZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHZpZXcgPSBqdmlldy5hcHAuY29weUNvbmZpZyh2aWV3LCB7fSwgc3Vicyk7XHJcbiAgICAgICAgICAgICAgICBiYXNlQWRkLmFwcGx5KHRoaXMsIFt2aWV3LCBpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3Vicykge1xyXG4gICAgICAgICAgICAgICAgICAgIGp2aWV3Ll9yZW5kZXJGcmFtZShrZXksIHN1YnNba2V5XSwgbnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp2aWV3Ll9zdWJzW2tleV0gPSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldy5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYXNlQWRkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVZpZXcoKSB7XHJcbiAgICAgICAgICAgIGJhc2VSZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLndlYml4SmV0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0gdGhpcy4kc2NvcGUuX3N1YnM7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhbGwgc3ViLXZpZXdzLCBkZXN0cm95IGFuZCBjbGVhbiB0aGUgcmVtb3ZlZCBvbmVcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN1YnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdy4kJCh0ZXN0LmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB3LmV4dGVuZCh3LnVpLmxheW91dC5wcm90b3R5cGUsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICB3LmV4dGVuZCh3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLCBjb25maWcsIHRydWUpO1xyXG4gICAgLy8gd3JhcHBlciBmb3IgdXNpbmcgSmV0IEFwcHMgYXMgdmlld3NcclxuICAgIHcucHJvdG9VSSh7XHJcbiAgICAgICAgbmFtZTogXCJqZXRhcHBcIixcclxuICAgICAgICAkaW5pdChjZmcpIHtcclxuICAgICAgICAgICAgdGhpcy4kYXBwID0gbmV3IHRoaXMuYXBwKGNmZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdy51aWQoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjZmcuYm9keSA9IHsgaWQgfTtcclxuICAgICAgICAgICAgdGhpcy4kcmVhZHkucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHAucmVuZGVyKHsgaWQgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy4kYXBwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luID0gdGhpcy4kYXBwW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbiA9PT0gXCJmdW5jdGlvblwiICYmICF0aGlzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBvcmlnaW4uYmluZCh0aGlzLiRhcHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgdy51aS5wcm94eSk7XHJcbn1cblxuY2xhc3MgSmV0QXBwIGV4dGVuZHMgSmV0QXBwQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25maWcucm91dGVyID0gY29uZmlnLnJvdXRlciB8fCBIYXNoUm91dGVyO1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgcGF0Y2godGhpcy53ZWJpeCk7XHJcbiAgICB9XHJcbiAgICBfbG9hZFZpZXdEeW5hbWljKHVybCkge1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC4vZywgXCIvXCIpO1xyXG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiamV0LXZpZXdzL1wiICsgdXJsKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBTdG9yZVJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnLCBhcHApIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZSB8fCBhcHAud2ViaXguc3RvcmFnZS5zZXNzaW9uO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IChjb25maWcuc3RvcmVOYW1lIHx8IGNvbmZpZy5pZCArIFwiOnJvdXRlXCIpO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UucHV0KHRoaXMubmFtZSwgcGF0aCk7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQodGhpcy5uYW1lKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBVcmxSb3V0ZXIgZXh0ZW5kcyBIYXNoUm91dGVyIHtcclxuICAgIF9kZXRlY3RQcmVmaXgoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVmaXggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3VmaXggPSB0aGlzLmNvbmZpZy5yb3V0ZXJQcmVmaXggfHwgXCJcIjtcclxuICAgIH1cclxuICAgIF9nZXRSYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEVtcHR5Um91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBfJGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBVbmxvYWRHdWFyZChhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgdmlldy5vbihhcHAsIGBhcHA6Z3VhcmRgLCBmdW5jdGlvbiAoXyR1cmwsIHBvaW50LCBwcm9taXNlKSB7XHJcbiAgICAgICAgaWYgKHBvaW50ID09PSB2aWV3IHx8IHBvaW50LmNvbnRhaW5zKHZpZXcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGNvbmZpZygpO1xyXG4gICAgICAgICAgICBpZiAocmVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5jb25maXJtID0gUHJvbWlzZS5yZWplY3QocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UuY29uZmlybSA9IHByb21pc2UuY29uZmlybS50aGVuKCgpID0+IHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxuXG4vLyAgICAgKGMpIDIwMTItMjAxOCBBaXJibmIsIEluYy5cblxuLy8gdmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xuZnVuY3Rpb24gaGFzKHN0b3JlLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdG9yZSwga2V5KTtcbn1cbi8vIHZhciBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKTtcbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzKG9iaiwga2V5KSkge1xuICAgICAgaGFuZGxlci5jYWxsKChjb250ZXh0IHx8IG9iaiksIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG4vLyB2YXIgdHJpbSA9IHJlcXVpcmUoJ3N0cmluZy5wcm90b3R5cGUudHJpbScpO1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xufVxuLy8gdmFyIHdhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgbWVzc2FnZTtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICB0cnkgeyB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7IH0gY2F0Y2ggKHgpIHt9XG59XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdDtcblxuLy8gIyMjIyBQbHVyYWxpemF0aW9uIG1ldGhvZHNcbi8vIFRoZSBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgdGhlIGRpZmZlcmVudCBwaHJhc2UgcG9zc2liaWxpdGllcy5cbnZhciBkZWxpbWl0ZXIgPSAnfHx8fCc7XG5cbnZhciBydXNzaWFuUGx1cmFsR3JvdXBzID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIGVuZCA9IG4gJSAxMDtcbiAgaWYgKG4gIT09IDExICYmIGVuZCA9PT0gMSkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmICgyIDw9IGVuZCAmJiBlbmQgPD0gNCAmJiAhKG4gPj0gMTIgJiYgbiA8PSAxNCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMjtcbn07XG5cbi8vIE1hcHBpbmcgZnJvbSBwbHVyYWxpemF0aW9uIGdyb3VwIHBsdXJhbCBsb2dpYy5cbnZhciBwbHVyYWxUeXBlcyA9IHtcbiAgYXJhYmljOiBmdW5jdGlvbiAobikge1xuICAgIC8vIGh0dHA6Ly93d3cuYXJhYmV5ZXMub3JnL1BsdXJhbF9Gb3Jtc1xuICAgIGlmIChuIDwgMykgeyByZXR1cm4gbjsgfVxuICAgIHZhciBsYXN0VHdvID0gbiAlIDEwMDtcbiAgICBpZiAobGFzdFR3byA+PSAzICYmIGxhc3RUd28gPD0gMTApIHJldHVybiAzO1xuICAgIHJldHVybiBsYXN0VHdvID49IDExID8gNCA6IDU7XG4gIH0sXG4gIGJvc25pYW5fc2VyYmlhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgY2hpbmVzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgY3JvYXRpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGZyZW5jaDogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gPiAxID8gMSA6IDA7IH0sXG4gIGdlcm1hbjogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gIT09IDEgPyAxIDogMDsgfSxcbiAgcnVzc2lhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgbGl0aHVhbmlhbjogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiAlIDEwID09PSAxICYmIG4gJSAxMDAgIT09IDExKSB7IHJldHVybiAwOyB9XG4gICAgcmV0dXJuIG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA5ICYmIChuICUgMTAwIDwgMTEgfHwgbiAlIDEwMCA+IDE5KSA/IDEgOiAyO1xuICB9LFxuICBjemVjaDogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiA9PT0gMSkgeyByZXR1cm4gMDsgfVxuICAgIHJldHVybiAobiA+PSAyICYmIG4gPD0gNCkgPyAxIDogMjtcbiAgfSxcbiAgcG9saXNoOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuID09PSAxKSB7IHJldHVybiAwOyB9XG4gICAgdmFyIGVuZCA9IG4gJSAxMDtcbiAgICByZXR1cm4gMiA8PSBlbmQgJiYgZW5kIDw9IDQgJiYgKG4gJSAxMDAgPCAxMCB8fCBuICUgMTAwID49IDIwKSA/IDEgOiAyO1xuICB9LFxuICBpY2VsYW5kaWM6IGZ1bmN0aW9uIChuKSB7IHJldHVybiAobiAlIDEwICE9PSAxIHx8IG4gJSAxMDAgPT09IDExKSA/IDEgOiAwOyB9LFxuICBzbG92ZW5pYW46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIGxhc3RUd28gPSBuICUgMTAwO1xuICAgIGlmIChsYXN0VHdvID09PSAxKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGxhc3RUd28gPT09IDIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAobGFzdFR3byA9PT0gMyB8fCBsYXN0VHdvID09PSA0KSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgcmV0dXJuIDM7XG4gIH1cbn07XG5cblxuLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgdG8gaW5kaXZpZHVhbCBsYW5ndWFnZSBjb2Rlcy9sb2NhbGVzLlxuLy8gV2lsbCBsb29rIHVwIGJhc2VkIG9uIGV4YWN0IG1hdGNoLCBpZiBub3QgZm91bmQgYW5kIGl0J3MgYSBsb2NhbGUgd2lsbCBwYXJzZSB0aGUgbG9jYWxlXG4vLyBmb3IgbGFuZ3VhZ2UgY29kZSwgYW5kIGlmIHRoYXQgZG9lcyBub3QgZXhpc3Qgd2lsbCBkZWZhdWx0IHRvICdlbidcbnZhciBwbHVyYWxUeXBlVG9MYW5ndWFnZXMgPSB7XG4gIGFyYWJpYzogWydhciddLFxuICBib3NuaWFuX3NlcmJpYW46IFsnYnMtTGF0bi1CQScsICdicy1DeXJsLUJBJywgJ3NybC1SUycsICdzci1SUyddLFxuICBjaGluZXNlOiBbJ2lkJywgJ2lkLUlEJywgJ2phJywgJ2tvJywgJ2tvLUtSJywgJ2xvJywgJ21zJywgJ3RoJywgJ3RoLVRIJywgJ3poJ10sXG4gIGNyb2F0aWFuOiBbJ2hyJywgJ2hyLUhSJ10sXG4gIGdlcm1hbjogWydmYScsICdkYScsICdkZScsICdlbicsICdlcycsICdmaScsICdlbCcsICdoZScsICdoaS1JTicsICdodScsICdodS1IVScsICdpdCcsICdubCcsICdubycsICdwdCcsICdzdicsICd0ciddLFxuICBmcmVuY2g6IFsnZnInLCAndGwnLCAncHQtYnInXSxcbiAgcnVzc2lhbjogWydydScsICdydS1SVSddLFxuICBsaXRodWFuaWFuOiBbJ2x0J10sXG4gIGN6ZWNoOiBbJ2NzJywgJ2NzLUNaJywgJ3NrJ10sXG4gIHBvbGlzaDogWydwbCddLFxuICBpY2VsYW5kaWM6IFsnaXMnXSxcbiAgc2xvdmVuaWFuOiBbJ3NsLVNMJ11cbn07XG5cbmZ1bmN0aW9uIGxhbmdUb1R5cGVNYXAobWFwcGluZykge1xuICB2YXIgcmV0ID0ge307XG4gIGZvckVhY2gobWFwcGluZywgZnVuY3Rpb24gKGxhbmdzLCB0eXBlKSB7XG4gICAgZm9yRWFjaChsYW5ncywgZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgIHJldFtsYW5nXSA9IHR5cGU7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUeXBlTmFtZShsb2NhbGUpIHtcbiAgdmFyIGxhbmdUb1BsdXJhbFR5cGUgPSBsYW5nVG9UeXBlTWFwKHBsdXJhbFR5cGVUb0xhbmd1YWdlcyk7XG4gIHJldHVybiBsYW5nVG9QbHVyYWxUeXBlW2xvY2FsZV1cbiAgICB8fCBsYW5nVG9QbHVyYWxUeXBlW3NwbGl0LmNhbGwobG9jYWxlLCAvLS8sIDEpWzBdXVxuICAgIHx8IGxhbmdUb1BsdXJhbFR5cGUuZW47XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFR5cGVJbmRleChsb2NhbGUsIGNvdW50KSB7XG4gIHJldHVybiBwbHVyYWxUeXBlc1twbHVyYWxUeXBlTmFtZShsb2NhbGUpXShjb3VudCk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZSh0b2tlbikge1xuICByZXR1cm4gdG9rZW4ucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0VG9rZW5SZWdleChvcHRzKSB7XG4gIHZhciBwcmVmaXggPSAob3B0cyAmJiBvcHRzLnByZWZpeCkgfHwgJyV7JztcbiAgdmFyIHN1ZmZpeCA9IChvcHRzICYmIG9wdHMuc3VmZml4KSB8fCAnfSc7XG5cbiAgaWYgKHByZWZpeCA9PT0gZGVsaW1pdGVyIHx8IHN1ZmZpeCA9PT0gZGVsaW1pdGVyKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wiJyArIGRlbGltaXRlciArICdcIiB0b2tlbiBpcyByZXNlcnZlZCBmb3IgcGx1cmFsaXphdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoZXNjYXBlKHByZWZpeCkgKyAnKC4qPyknICsgZXNjYXBlKHN1ZmZpeCksICdnJyk7XG59XG5cbnZhciBkb2xsYXJSZWdleCA9IC9cXCQvZztcbnZhciBkb2xsYXJCaWxsc1lhbGwgPSAnJCQnO1xudmFyIGRlZmF1bHRUb2tlblJlZ2V4ID0gLyVcXHsoLio/KVxcfS9nO1xuXG4vLyAjIyMgdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKVxuLy9cbi8vIFRha2VzIGEgcGhyYXNlIHN0cmluZyBhbmQgdHJhbnNmb3JtcyBpdCBieSBjaG9vc2luZyB0aGUgY29ycmVjdFxuLy8gcGx1cmFsIGZvcm0gYW5kIGludGVycG9sYXRpbmcgaXQuXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnSGVsbG8sICV7bmFtZX0hJywge25hbWU6ICdTcGlrZSd9KTtcbi8vICAgICAvLyBcIkhlbGxvLCBTcGlrZSFcIlxuLy9cbi8vIFRoZSBjb3JyZWN0IHBsdXJhbCBmb3JtIGlzIHNlbGVjdGVkIGlmIHN1YnN0aXR1dGlvbnMuc21hcnRfY291bnRcbi8vIGlzIHNldC4gWW91IGNhbiBwYXNzIGluIGEgbnVtYmVyIGluc3RlYWQgb2YgYW4gT2JqZWN0IGFzIGBzdWJzdGl0dXRpb25zYFxuLy8gYXMgYSBzaG9ydGN1dCBmb3IgYHNtYXJ0X2NvdW50YC5cbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywge3NtYXJ0X2NvdW50OiAxfSwgJ2VuJyk7XG4vLyAgICAgLy8gXCIxIG5ldyBtZXNzYWdlXCJcbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywge3NtYXJ0X2NvdW50OiAyfSwgJ2VuJyk7XG4vLyAgICAgLy8gXCIyIG5ldyBtZXNzYWdlc1wiXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIDUsICdlbicpO1xuLy8gICAgIC8vIFwiNSBuZXcgbWVzc2FnZXNcIlxuLy9cbi8vIFlvdSBzaG91bGQgcGFzcyBpbiBhIHRoaXJkIGFyZ3VtZW50LCB0aGUgbG9jYWxlLCB0byBzcGVjaWZ5IHRoZSBjb3JyZWN0IHBsdXJhbCB0eXBlLlxuLy8gSXQgZGVmYXVsdHMgdG8gYCdlbidgIHdpdGggMiBwbHVyYWwgZm9ybXMuXG5mdW5jdGlvbiB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUsIHRva2VuUmVnZXgpIHtcbiAgaWYgKHR5cGVvZiBwaHJhc2UgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUG9seWdsb3QudHJhbnNmb3JtUGhyYXNlIGV4cGVjdHMgYXJndW1lbnQgIzEgdG8gYmUgc3RyaW5nJyk7XG4gIH1cblxuICBpZiAoc3Vic3RpdHV0aW9ucyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHBocmFzZTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBwaHJhc2U7XG4gIHZhciBpbnRlcnBvbGF0aW9uUmVnZXggPSB0b2tlblJlZ2V4IHx8IGRlZmF1bHRUb2tlblJlZ2V4O1xuXG4gIC8vIGFsbG93IG51bWJlciBhcyBhIHBsdXJhbGl6YXRpb24gc2hvcnRjdXRcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc3Vic3RpdHV0aW9ucyA9PT0gJ251bWJlcicgPyB7IHNtYXJ0X2NvdW50OiBzdWJzdGl0dXRpb25zIH0gOiBzdWJzdGl0dXRpb25zO1xuXG4gIC8vIFNlbGVjdCBwbHVyYWwgZm9ybTogYmFzZWQgb24gYSBwaHJhc2UgdGV4dCB0aGF0IGNvbnRhaW5zIGBuYFxuICAvLyBwbHVyYWwgZm9ybXMgc2VwYXJhdGVkIGJ5IGBkZWxpbWl0ZXJgLCBhIGBsb2NhbGVgLCBhbmQgYSBgc3Vic3RpdHV0aW9ucy5zbWFydF9jb3VudGAsXG4gIC8vIGNob29zZSB0aGUgY29ycmVjdCBwbHVyYWwgZm9ybS4gVGhpcyBpcyBvbmx5IGRvbmUgaWYgYGNvdW50YCBpcyBzZXQuXG4gIGlmIChvcHRpb25zLnNtYXJ0X2NvdW50ICE9IG51bGwgJiYgcmVzdWx0KSB7XG4gICAgdmFyIHRleHRzID0gc3BsaXQuY2FsbChyZXN1bHQsIGRlbGltaXRlcik7XG4gICAgcmVzdWx0ID0gdHJpbSh0ZXh0c1twbHVyYWxUeXBlSW5kZXgobG9jYWxlIHx8ICdlbicsIG9wdGlvbnMuc21hcnRfY291bnQpXSB8fCB0ZXh0c1swXSk7XG4gIH1cblxuICAvLyBJbnRlcnBvbGF0ZTogQ3JlYXRlcyBhIGBSZWdFeHBgIG9iamVjdCBmb3IgZWFjaCBpbnRlcnBvbGF0aW9uIHBsYWNlaG9sZGVyLlxuICByZXN1bHQgPSByZXBsYWNlLmNhbGwocmVzdWx0LCBpbnRlcnBvbGF0aW9uUmVnZXgsIGZ1bmN0aW9uIChleHByZXNzaW9uLCBhcmd1bWVudCkge1xuICAgIGlmICghaGFzKG9wdGlvbnMsIGFyZ3VtZW50KSB8fCBvcHRpb25zW2FyZ3VtZW50XSA9PSBudWxsKSB7IHJldHVybiBleHByZXNzaW9uOyB9XG4gICAgLy8gRW5zdXJlIHJlcGxhY2VtZW50IHZhbHVlIGlzIGVzY2FwZWQgdG8gcHJldmVudCBzcGVjaWFsICQtcHJlZml4ZWQgcmVnZXggcmVwbGFjZSB0b2tlbnMuXG4gICAgcmV0dXJuIHJlcGxhY2UuY2FsbChvcHRpb25zW2FyZ3VtZW50XSwgZG9sbGFyUmVnZXgsIGRvbGxhckJpbGxzWWFsbCk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vICMjIyBQb2x5Z2xvdCBjbGFzcyBjb25zdHJ1Y3RvclxuZnVuY3Rpb24gUG9seWdsb3Qob3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMucGhyYXNlcyA9IHt9O1xuICB0aGlzLmV4dGVuZChvcHRzLnBocmFzZXMgfHwge30pO1xuICB0aGlzLmN1cnJlbnRMb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuICB2YXIgYWxsb3dNaXNzaW5nID0gb3B0cy5hbGxvd01pc3NpbmcgPyB0cmFuc2Zvcm1QaHJhc2UgOiBudWxsO1xuICB0aGlzLm9uTWlzc2luZ0tleSA9IHR5cGVvZiBvcHRzLm9uTWlzc2luZ0tleSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMub25NaXNzaW5nS2V5IDogYWxsb3dNaXNzaW5nO1xuICB0aGlzLndhcm4gPSBvcHRzLndhcm4gfHwgd2FybjtcbiAgdGhpcy50b2tlblJlZ2V4ID0gY29uc3RydWN0VG9rZW5SZWdleChvcHRzLmludGVycG9sYXRpb24pO1xufVxuXG4vLyAjIyMgcG9seWdsb3QubG9jYWxlKFtsb2NhbGVdKVxuLy9cbi8vIEdldCBvciBzZXQgbG9jYWxlLiBJbnRlcm5hbGx5LCBQb2x5Z2xvdCBvbmx5IHVzZXMgbG9jYWxlIGZvciBwbHVyYWxpemF0aW9uLlxuUG9seWdsb3QucHJvdG90eXBlLmxvY2FsZSA9IGZ1bmN0aW9uIChuZXdMb2NhbGUpIHtcbiAgaWYgKG5ld0xvY2FsZSkgdGhpcy5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlO1xufTtcblxuLy8gIyMjIHBvbHlnbG90LmV4dGVuZChwaHJhc2VzKVxuLy9cbi8vIFVzZSBgZXh0ZW5kYCB0byB0ZWxsIFBvbHlnbG90IGhvdyB0byB0cmFuc2xhdGUgYSBnaXZlbiBrZXkuXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9KTtcbi8vXG4vLyBUaGUga2V5IGNhbiBiZSBhbnkgc3RyaW5nLiAgRmVlbCBmcmVlIHRvIGNhbGwgYGV4dGVuZGAgbXVsdGlwbGUgdGltZXM7XG4vLyBpdCB3aWxsIG92ZXJyaWRlIGFueSBwaHJhc2VzIHdpdGggdGhlIHNhbWUga2V5LCBidXQgbGVhdmUgZXhpc3RpbmcgcGhyYXNlc1xuLy8gdW50b3VjaGVkLlxuLy9cbi8vIEl0IGlzIGFsc28gcG9zc2libGUgdG8gcGFzcyBuZXN0ZWQgcGhyYXNlIG9iamVjdHMsIHdoaWNoIGdldCBmbGF0dGVuZWRcbi8vIGludG8gYW4gb2JqZWN0IHdpdGggdGhlIG5lc3RlZCBrZXlzIGNvbmNhdGVuYXRlZCB1c2luZyBkb3Qgbm90YXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcIm5hdlwiOiB7XG4vLyAgICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiLFxuLy8gICAgICAgICBcInNpZGViYXJcIjoge1xuLy8gICAgICAgICAgIFwid2VsY29tZVwiOiBcIldlbGNvbWVcIlxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuLy8gICAgIC8vIHtcbi8vICAgICAvLyAgICduYXYuaGVsbG8nOiAnSGVsbG8nLFxuLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9Jyxcbi8vICAgICAvLyAgICduYXYuc2lkZWJhci53ZWxjb21lJzogJ1dlbGNvbWUnXG4vLyAgICAgLy8gfVxuLy9cbi8vIGBleHRlbmRgIGFjY2VwdHMgYW4gb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50LCBgcHJlZml4YCwgd2hpY2ggY2FuIGJlIHVzZWRcbi8vIHRvIHByZWZpeCBldmVyeSBrZXkgaW4gdGhlIHBocmFzZXMgb2JqZWN0IHdpdGggc29tZSBzdHJpbmcsIHVzaW5nIGRvdFxuLy8gbm90YXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9LCBcIm5hdlwiKTtcbi8vXG4vLyAgICAgY29uc29sZS5sb2cocG9seWdsb3QucGhyYXNlcyk7XG4vLyAgICAgLy8ge1xuLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4vLyAgICAgLy8gICAnbmF2LmhlbGxvX25hbWUnOiAnSGVsbG8sICV7bmFtZX0nXG4vLyAgICAgLy8gfVxuLy9cbi8vIFRoaXMgZmVhdHVyZSBpcyB1c2VkIGludGVybmFsbHkgdG8gc3VwcG9ydCBuZXN0ZWQgcGhyYXNlIG9iamVjdHMuXG5Qb2x5Z2xvdC5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgZm9yRWFjaChtb3JlUGhyYXNlcywgZnVuY3Rpb24gKHBocmFzZSwga2V5KSB7XG4gICAgdmFyIHByZWZpeGVkS2V5ID0gcHJlZml4ID8gcHJlZml4ICsgJy4nICsga2V5IDoga2V5O1xuICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5leHRlbmQocGhyYXNlLCBwcmVmaXhlZEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGhyYXNlc1twcmVmaXhlZEtleV0gPSBwaHJhc2U7XG4gICAgfVxuICB9LCB0aGlzKTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC51bnNldChwaHJhc2VzKVxuLy8gVXNlIGB1bnNldGAgdG8gc2VsZWN0aXZlbHkgcmVtb3ZlIGtleXMgZnJvbSBhIHBvbHlnbG90IGluc3RhbmNlLlxuLy9cbi8vICAgICBwb2x5Z2xvdC51bnNldChcInNvbWVfa2V5XCIpO1xuLy8gICAgIHBvbHlnbG90LnVuc2V0KHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0pO1xuLy9cbi8vIFRoZSB1bnNldCBtZXRob2QgY2FuIHRha2UgZWl0aGVyIGEgc3RyaW5nIChmb3IgdGhlIGtleSksIG9yIGFuIG9iamVjdCBoYXNoIHdpdGhcbi8vIHRoZSBrZXlzIHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gdW5zZXQuXG5Qb2x5Z2xvdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbiAobW9yZVBocmFzZXMsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG1vcmVQaHJhc2VzID09PSAnc3RyaW5nJykge1xuICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbbW9yZVBocmFzZXNdO1xuICB9IGVsc2Uge1xuICAgIGZvckVhY2gobW9yZVBocmFzZXMsIGZ1bmN0aW9uIChwaHJhc2UsIGtleSkge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gcHJlZml4ID8gcHJlZml4ICsgJy4nICsga2V5IDoga2V5O1xuICAgICAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMudW5zZXQocGhyYXNlLCBwcmVmaXhlZEtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5waHJhc2VzW3ByZWZpeGVkS2V5XTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufTtcblxuLy8gIyMjIHBvbHlnbG90LmNsZWFyKClcbi8vXG4vLyBDbGVhcnMgYWxsIHBocmFzZXMuIFVzZWZ1bCBmb3Igc3BlY2lhbCBjYXNlcywgc3VjaCBhcyBmcmVlaW5nXG4vLyB1cCBtZW1vcnkgaWYgeW91IGhhdmUgbG90cyBvZiBwaHJhc2VzIGJ1dCBubyBsb25nZXIgbmVlZCB0b1xuLy8gcGVyZm9ybSBhbnkgdHJhbnNsYXRpb24uIEFsc28gdXNlZCBpbnRlcm5hbGx5IGJ5IGByZXBsYWNlYC5cblBvbHlnbG90LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5waHJhc2VzID0ge307XG59O1xuXG4vLyAjIyMgcG9seWdsb3QucmVwbGFjZShwaHJhc2VzKVxuLy9cbi8vIENvbXBsZXRlbHkgcmVwbGFjZSB0aGUgZXhpc3RpbmcgcGhyYXNlcyB3aXRoIGEgbmV3IHNldCBvZiBwaHJhc2VzLlxuLy8gTm9ybWFsbHksIGp1c3QgdXNlIGBleHRlbmRgIHRvIGFkZCBtb3JlIHBocmFzZXMsIGJ1dCB1bmRlciBjZXJ0YWluXG4vLyBjaXJjdW1zdGFuY2VzLCB5b3UgbWF5IHdhbnQgdG8gbWFrZSBzdXJlIG5vIG9sZCBwaHJhc2VzIGFyZSBseWluZyBhcm91bmQuXG5Qb2x5Z2xvdC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChuZXdQaHJhc2VzKSB7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5leHRlbmQobmV3UGhyYXNlcyk7XG59O1xuXG5cbi8vICMjIyBwb2x5Z2xvdC50KGtleSwgb3B0aW9ucylcbi8vXG4vLyBUaGUgbW9zdC11c2VkIG1ldGhvZC4gUHJvdmlkZSBhIGtleSwgYW5kIGB0YCB3aWxsIHJldHVybiB0aGVcbi8vIHBocmFzZS5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImhlbGxvXCIpO1xuLy8gICAgID0+IFwiSGVsbG9cIlxuLy9cbi8vIFRoZSBwaHJhc2UgdmFsdWUgaXMgcHJvdmlkZWQgZmlyc3QgYnkgYSBjYWxsIHRvIGBwb2x5Z2xvdC5leHRlbmQoKWAgb3Jcbi8vIGBwb2x5Z2xvdC5yZXBsYWNlKClgLlxuLy9cbi8vIFBhc3MgaW4gYW4gb2JqZWN0IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gcGVyZm9ybSBpbnRlcnBvbGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaGVsbG9fbmFtZVwiLCB7bmFtZTogXCJTcGlrZVwifSk7XG4vLyAgICAgPT4gXCJIZWxsbywgU3Bpa2VcIlxuLy9cbi8vIElmIHlvdSBsaWtlLCB5b3UgY2FuIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIGluIGNhc2UgdGhlIHBocmFzZSBpcyBtaXNzaW5nLlxuLy8gVXNlIHRoZSBzcGVjaWFsIG9wdGlvbiBrZXkgXCJfXCIgdG8gc3BlY2lmeSBhIGRlZmF1bHQuXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJpX2xpa2VfdG9fd3JpdGVfaW5fbGFuZ3VhZ2VcIiwge1xuLy8gICAgICAgXzogXCJJIGxpa2UgdG8gd3JpdGUgaW4gJXtsYW5ndWFnZX0uXCIsXG4vLyAgICAgICBsYW5ndWFnZTogXCJKYXZhU2NyaXB0XCJcbi8vICAgICB9KTtcbi8vICAgICA9PiBcIkkgbGlrZSB0byB3cml0ZSBpbiBKYXZhU2NyaXB0LlwiXG4vL1xuUG9seWdsb3QucHJvdG90eXBlLnQgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zKSB7XG4gIHZhciBwaHJhc2UsIHJlc3VsdDtcbiAgdmFyIG9wdHMgPSBvcHRpb25zID09IG51bGwgPyB7fSA6IG9wdGlvbnM7XG4gIGlmICh0eXBlb2YgdGhpcy5waHJhc2VzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgcGhyYXNlID0gdGhpcy5waHJhc2VzW2tleV07XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMuXyA9PT0gJ3N0cmluZycpIHtcbiAgICBwaHJhc2UgPSBvcHRzLl87XG4gIH0gZWxzZSBpZiAodGhpcy5vbk1pc3NpbmdLZXkpIHtcbiAgICB2YXIgb25NaXNzaW5nS2V5ID0gdGhpcy5vbk1pc3NpbmdLZXk7XG4gICAgcmVzdWx0ID0gb25NaXNzaW5nS2V5KGtleSwgb3B0cywgdGhpcy5jdXJyZW50TG9jYWxlLCB0aGlzLnRva2VuUmVnZXgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2FybignTWlzc2luZyB0cmFuc2xhdGlvbiBmb3Iga2V5OiBcIicgKyBrZXkgKyAnXCInKTtcbiAgICByZXN1bHQgPSBrZXk7XG4gIH1cbiAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgb3B0cywgdGhpcy5jdXJyZW50TG9jYWxlLCB0aGlzLnRva2VuUmVnZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vICMjIyBwb2x5Z2xvdC5oYXMoa2V5KVxuLy9cbi8vIENoZWNrIGlmIHBvbHlnbG90IGhhcyBhIHRyYW5zbGF0aW9uIGZvciBnaXZlbiBrZXlcblBvbHlnbG90LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBoYXModGhpcy5waHJhc2VzLCBrZXkpO1xufTtcblxuLy8gZXhwb3J0IHRyYW5zZm9ybVBocmFzZVxuUG9seWdsb3QudHJhbnNmb3JtUGhyYXNlID0gZnVuY3Rpb24gdHJhbnNmb3JtKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpO1xufTtcblxudmFyIHdlYml4UG9seWdsb3QgPSBQb2x5Z2xvdDtcblxuZnVuY3Rpb24gTG9jYWxlKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xyXG4gICAgbGV0IGxhbmcgPSBzdG9yYWdlID8gKHN0b3JhZ2UuZ2V0KFwibGFuZ1wiKSB8fCBcImVuXCIpIDogKGNvbmZpZy5sYW5nIHx8IFwiZW5cIik7XHJcbiAgICBmdW5jdGlvbiBzZXRMYW5nRGF0YShuYW1lLCBkYXRhLCBzaWxlbnQpIHtcclxuICAgICAgICBpZiAoZGF0YS5fX2VzTW9kdWxlKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLmRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBjb25maWcgPSB7IHBocmFzZXM6IGRhdGEgfTtcclxuICAgICAgICBpZiAoY29uZmlnLnBvbHlnbG90KSB7XHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5leHRlbmQocGNvbmZpZywgY29uZmlnLnBvbHlnbG90KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9seSA9IHNlcnZpY2UucG9seWdsb3QgPSBuZXcgd2ViaXhQb2x5Z2xvdChwY29uZmlnKTtcclxuICAgICAgICBwb2x5LmxvY2FsZShuYW1lKTtcclxuICAgICAgICBzZXJ2aWNlLl8gPSBhcHAud2ViaXguYmluZChwb2x5LnQsIHBvbHkpO1xyXG4gICAgICAgIGxhbmcgPSBuYW1lO1xyXG4gICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2UucHV0KFwibGFuZ1wiLCBsYW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy53ZWJpeCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2NOYW1lID0gY29uZmlnLndlYml4W25hbWVdO1xyXG4gICAgICAgICAgICBpZiAobG9jTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYXBwLndlYml4LmkxOG4uc2V0TG9jYWxlKGxvY05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcHAucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRMYW5nKCkgeyByZXR1cm4gbGFuZzsgfVxyXG4gICAgZnVuY3Rpb24gc2V0TGFuZyhuYW1lLCBzaWxlbnQpIHtcclxuICAgICAgICAvLyBpZ25vcmUgc2V0TGFuZyBpZiBsb2FkaW5nIGJ5IHBhdGggaXMgZGlzYWJsZWRcclxuICAgICAgICBpZiAoY29uZmlnLnBhdGggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IChjb25maWcucGF0aCA/IGNvbmZpZy5wYXRoICsgXCIvXCIgOiBcIlwiKSArIG5hbWU7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoXCJqZXQtbG9jYWxlcy9cIiArIHBhdGgpO1xyXG4gICAgICAgIHNldExhbmdEYXRhKG5hbWUsIGRhdGEsIHNpbGVudCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldExhbmcsIHNldExhbmcsIHNldExhbmdEYXRhLCBfOiBudWxsLCBwb2x5Z2xvdDogbnVsbFxyXG4gICAgfTtcclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwibG9jYWxlXCIsIHNlcnZpY2UpO1xyXG4gICAgc2V0TGFuZyhsYW5nLCB0cnVlKTtcclxufVxuXG5mdW5jdGlvbiBzaG93KHZpZXcsIGNvbmZpZywgdmFsdWUpIHtcclxuICAgIGlmIChjb25maWcudXJscykge1xyXG4gICAgICAgIHZhbHVlID0gY29uZmlnLnVybHNbdmFsdWVdIHx8IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY29uZmlnLnBhcmFtKSB7XHJcbiAgICAgICAgdmFsdWUgPSB7IFtjb25maWcucGFyYW1dOiB2YWx1ZSB9O1xyXG4gICAgfVxyXG4gICAgdmlldy5zaG93KHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBNZW51KGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25zdCBmcmFtZSA9IHZpZXcuZ2V0U3ViVmlld0luZm8oKS5wYXJlbnQ7XHJcbiAgICBjb25zdCB1aSA9IHZpZXcuJCQoY29uZmlnLmlkIHx8IGNvbmZpZyk7XHJcbiAgICBsZXQgc2lsZW50ID0gZmFsc2U7XHJcbiAgICB1aS5hdHRhY2hFdmVudChcIm9uY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICBzaG93KGZyYW1lLCBjb25maWcsIHRoaXMuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB1aS5hdHRhY2hFdmVudChcIm9uYWZ0ZXJzZWxlY3RcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh1aS5zZXRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWQgPSB0aGlzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkuZ2V0U2VsZWN0ZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgaWQgPSB1aS5nZXRTZWxlY3RlZElkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2hvdyhmcmFtZSwgY29uZmlnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB2aWV3Lm9uKGFwcCwgYGFwcDpyb3V0ZWAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wYXJhbSkge1xyXG4gICAgICAgICAgICBuYW1lID0gdmlldy5nZXRQYXJhbShjb25maWcucGFyYW0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VnbWVudCA9IGZyYW1lLmdldFVybCgpWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHNlZ21lbnQucGFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICBzaWxlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodWkuc2V0VmFsdWUgJiYgdWkuZ2V0VmFsdWUoKSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0VmFsdWUobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkuc2VsZWN0ICYmIHVpLmV4aXN0cyhuYW1lKSAmJiB1aS5nZXRTZWxlY3RlZElkKCkgIT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNlbGVjdChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaWxlbnQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxuXG5jb25zdCBiYXNlaWNvbnMgPSB7XHJcbiAgICBnb29kOiBcImNoZWNrXCIsXHJcbiAgICBlcnJvcjogXCJ3YXJuaW5nXCIsXHJcbiAgICBzYXZpbmc6IFwicmVmcmVzaCBmYS1zcGluXCJcclxufTtcclxuY29uc3QgYmFzZXRleHQgPSB7XHJcbiAgICBnb29kOiBcIk9rXCIsXHJcbiAgICBlcnJvcjogXCJFcnJvclwiLFxyXG4gICAgc2F2aW5nOiBcIkNvbm5lY3RpbmcuLi5cIlxyXG59O1xyXG5mdW5jdGlvbiBTdGF0dXMoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGxldCBzdGF0dXMgPSBcImdvb2RcIjtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBsZXQgaXNlcnJvciA9IGZhbHNlO1xyXG4gICAgbGV0IGV4cGlyZURlbGF5ID0gY29uZmlnLmV4cGlyZTtcclxuICAgIGlmICghZXhwaXJlRGVsYXkgJiYgZXhwaXJlRGVsYXkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgZXhwaXJlRGVsYXkgPSAyMDAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGV4dHMgPSBjb25maWcudGV4dHMgfHwgYmFzZXRleHQ7XHJcbiAgICBjb25zdCBpY29ucyA9IGNvbmZpZy5pY29ucyB8fCBiYXNlaWNvbnM7XHJcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGNvbmZpZyA9IHsgdGFyZ2V0OiBjb25maWcgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZnJlc2goY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSB2aWV3LiQkKGNvbmZpZy50YXJnZXQpO1xyXG4gICAgICAgIGlmIChhcmVhKSB7XHJcbiAgICAgICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IFwiPGRpdiBjbGFzcz0nc3RhdHVzX1wiICtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJz48c3BhbiBjbGFzcz0nd2ViaXhfaWNvbiBmYS1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbc3RhdHVzXSArIFwiJz48L3NwYW4+IFwiICsgdGV4dHNbc3RhdHVzXSArIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJlYS5zZXRIVE1MKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBzZXRTdGF0dXMoXCJnb29kXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmFpbChlcnIpIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIHNldFN0YXR1cyhcImVycm9yXCIsIGVycik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdGFydChwcm9taXNlKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgICBzZXRTdGF0dXMoXCJzYXZpbmdcIik7XHJcbiAgICAgICAgaWYgKHByb21pc2UgJiYgcHJvbWlzZS50aGVuKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UudGhlbihzdWNjZXNzLCBmYWlsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpZGVTdGF0dXMoKSB7XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlZnJlc2goXCIgXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFN0YXR1cyhtb2RlLCBlcnIpIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZGUgPT09IFwic2F2aW5nXCIpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gXCJzYXZpbmdcIjtcclxuICAgICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXNlcnJvciA9IChtb2RlID09PSBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IGlzZXJyb3IgPyBcImVycm9yXCIgOiBcImdvb2RcIjtcclxuICAgICAgICAgICAgICAgIGlmIChpc2Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLmVycm9yKFwiYXBwOmVycm9yOnNlcnZlclwiLCBbZXJyLnJlc3BvbnNlVGV4dCB8fCBlcnJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBpcmVEZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVTdGF0dXMsIGV4cGlyZURlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmFjayhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZHAgPSBhcHAud2ViaXguZHAoZGF0YSk7XHJcbiAgICAgICAgaWYgKGRwKSB7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlckRhdGFTZW5kXCIsIHN0YXJ0KTtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyU2F2ZUVycm9yXCIsIChfaWQsIF9vYmosIHJlc3BvbnNlKSA9PiBmYWlsKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlclNhdmVcIiwgc3VjY2Vzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJzdGF0dXNcIiwge1xyXG4gICAgICAgIGdldFN0YXR1cyxcclxuICAgICAgICBzZXRTdGF0dXMsXHJcbiAgICAgICAgdHJhY2tcclxuICAgIH0pO1xyXG4gICAgaWYgKGNvbmZpZy5yZW1vdGUpIHtcclxuICAgICAgICB2aWV3Lm9uKGFwcC53ZWJpeCwgXCJvblJlbW90ZUNhbGxcIiwgc3RhcnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5hamF4KSB7XHJcbiAgICAgICAgdmlldy5vbihhcHAud2ViaXgsIFwib25CZWZvcmVBamF4XCIsIChfbW9kZSwgX3VybCwgX2RhdGEsIF9yZXF1ZXN0LCBfaGVhZGVycywgX2ZpbGVzLCBwcm9taXNlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXJ0KHByb21pc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5kYXRhKSB7XHJcbiAgICAgICAgdHJhY2soY29uZmlnLmRhdGEpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIFRoZW1lKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xyXG4gICAgbGV0IHRoZW1lID0gc3RvcmFnZSA/XHJcbiAgICAgICAgKHN0b3JhZ2UuZ2V0KFwidGhlbWVcIikgfHwgXCJmbGF0LWRlZmF1bHRcIilcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIChjb25maWcudGhlbWUgfHwgXCJmbGF0LWRlZmF1bHRcIik7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldFRoZW1lKCkgeyByZXR1cm4gdGhlbWU7IH0sXHJcbiAgICAgICAgc2V0VGhlbWUobmFtZSwgc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsbmFtZSA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxuYW1lID09PSBuYW1lIHx8IGxuYW1lID09PSBwYXJ0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcHAud2ViaXguc2tpbi5zZXQocGFydHNbMF0pO1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGNzc1xyXG4gICAgICAgICAgICBhcHAud2ViaXguaHRtbC5yZW1vdmVDc3MoZG9jdW1lbnQuYm9keSwgXCJ0aGVtZS1cIiArIHRoZW1lKTtcclxuICAgICAgICAgICAgLy8gYWRkIG5ldyBjc3NcclxuICAgICAgICAgICAgYXBwLndlYml4Lmh0bWwuYWRkQ3NzKGRvY3VtZW50LmJvZHksIFwidGhlbWUtXCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgdGhlbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5wdXQoXCJ0aGVtZVwiLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICAgICAgYXBwLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBhcHAuc2V0U2VydmljZShcInRoZW1lXCIsIHNlcnZpY2UpO1xyXG4gICAgc2VydmljZS5zZXRUaGVtZSh0aGVtZSwgdHJ1ZSk7XHJcbn1cblxuZnVuY3Rpb24gY29weVBhcmFtcyhkYXRhLCB1cmwsIHJvdXRlKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGF0YVtyb3V0ZVtpXV0gPSB1cmxbaSArIDFdID8gdXJsW2kgKyAxXS5wYWdlIDogXCJcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBVcmxQYXJhbShhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uc3Qgcm91dGUgPSBjb25maWcucm91dGUgfHwgY29uZmlnO1xyXG4gICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgdmlldy5vbihhcHAsIFwiYXBwOnVybGNoYW5nZVwiLCBmdW5jdGlvbiAoc3Vidmlldywgc2VnbWVudCkge1xyXG4gICAgICAgIGlmICh2aWV3ID09PSBzdWJ2aWV3KSB7XHJcbiAgICAgICAgICAgIGNvcHlQYXJhbXMoZGF0YSwgc2VnbWVudC5zdWJ1cmwoKSwgcm91dGUpO1xyXG4gICAgICAgICAgICBzZWdtZW50LnNpemUocm91dGUubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvcyA9IHZpZXcuc2V0UGFyYW07XHJcbiAgICBjb25zdCBvZyA9IHZpZXcuZ2V0UGFyYW07XHJcbiAgICB2aWV3LnNldFBhcmFtID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBzaG93KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSByb3V0ZS5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2VnbWVudC51cGRhdGUoXCJcIiwgdmFsdWUsIGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldy5zaG93KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gb3MuY2FsbCh0aGlzLCBuYW1lLCB2YWx1ZSwgc2hvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZpZXcuZ2V0UGFyYW0gPSBmdW5jdGlvbiAoa2V5LCBtb2RlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YVtrZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvZy5jYWxsKHRoaXMsIGtleSwgbW9kZSk7XHJcbiAgICB9O1xyXG4gICAgY29weVBhcmFtcyhkYXRhLCB2aWV3LmdldFVybCgpLCByb3V0ZSk7XHJcbn1cblxuZnVuY3Rpb24gVXNlcihhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IGxvZ2luID0gY29uZmlnLmxvZ2luIHx8IFwiL2xvZ2luXCI7XHJcbiAgICBjb25zdCBsb2dvdXQgPSBjb25maWcubG9nb3V0IHx8IFwiL2xvZ291dFwiO1xyXG4gICAgY29uc3QgYWZ0ZXJMb2dpbiA9IGNvbmZpZy5hZnRlckxvZ2luIHx8IGFwcC5jb25maWcuc3RhcnQ7XHJcbiAgICBjb25zdCBhZnRlckxvZ291dCA9IGNvbmZpZy5hZnRlckxvZ291dCB8fCBcIi9sb2dpblwiO1xyXG4gICAgY29uc3QgcGluZyA9IGNvbmZpZy5waW5nIHx8IDUgKiA2MCAqIDEwMDA7XHJcbiAgICBjb25zdCBtb2RlbCA9IGNvbmZpZy5tb2RlbDtcclxuICAgIGxldCB1c2VyID0gY29uZmlnLnVzZXI7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldFVzZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U3RhdHVzKHNlcnZlcikge1xyXG4gICAgICAgICAgICBpZiAoIXNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIgIT09IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLnN0YXR1cygpLmNhdGNoKCgpID0+IG51bGwpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dpbihuYW1lLCBwYXNzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5sb2dpbihuYW1lLCBwYXNzKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXBwLmNhbGxFdmVudChcImFwcDp1c2VyOmxvZ2luXCIsIFt1c2VyXSk7XHJcbiAgICAgICAgICAgICAgICBhcHAuc2hvdyhhZnRlckxvZ2luKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwubG9nb3V0KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBwLmNhbGxFdmVudChcImFwcDp1c2VyOmxvZ291dFwiLCBbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gY2FuTmF2aWdhdGUodXJsLCBvYmopIHtcclxuICAgICAgICBpZiAodXJsID09PSBsb2dvdXQpIHtcclxuICAgICAgICAgICAgc2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICAgICAgb2JqLnJlZGlyZWN0ID0gYWZ0ZXJMb2dvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHVybCAhPT0gbG9naW4gJiYgIXNlcnZpY2UuZ2V0U3RhdHVzKCkpIHtcclxuICAgICAgICAgICAgb2JqLnJlZGlyZWN0ID0gbG9naW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJ1c2VyXCIsIHNlcnZpY2UpO1xyXG4gICAgYXBwLmF0dGFjaEV2ZW50KGBhcHA6Z3VhcmRgLCBmdW5jdGlvbiAodXJsLCBfJHJvb3QsIG9iaikge1xyXG4gICAgICAgIGlmIChjb25maWcucHVibGljICYmIGNvbmZpZy5wdWJsaWModXJsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1c2VyID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIG9iai5jb25maXJtID0gc2VydmljZS5nZXRTdGF0dXModHJ1ZSkudGhlbigoKSA9PiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FuTmF2aWdhdGUodXJsLCBvYmopO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocGluZykge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHNlcnZpY2UuZ2V0U3RhdHVzKHRydWUpLCBwaW5nKTtcclxuICAgIH1cclxufVxuXG4vKlxyXG5NSVQgTGljZW5zZVxyXG5Db3B5cmlnaHQgKGMpIDIwMTkgWEIgU29mdHdhcmVcclxuKi9cclxubGV0IHdlYml4ID0gd2luZG93LndlYml4O1xyXG5pZiAod2ViaXgpIHtcclxuICAgIHBhdGNoKHdlYml4KTtcclxufVxyXG5jb25zdCBwbHVnaW5zID0ge1xyXG4gICAgVW5sb2FkR3VhcmQsIExvY2FsZSwgTWVudSwgVGhlbWUsIFVzZXIsIFN0YXR1cywgVXJsUGFyYW1cclxufTtcclxuY29uc3QgdyA9IHdpbmRvdztcclxuaWYgKCF3LlByb21pc2UpIHtcclxuICAgIHcuUHJvbWlzZSA9IHcud2ViaXgucHJvbWlzZTtcclxufVxuXG5leHBvcnQgeyBwbHVnaW5zLCBKZXRBcHAsIEpldFZpZXcsIEhhc2hSb3V0ZXIsIFN0b3JlUm91dGVyLCBVcmxSb3V0ZXIsIEVtcHR5Um91dGVyLCBTdWJSb3V0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpldC5qcy5tYXBcbiIsImNvbnN0IGxvZ291dFVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9nb3V0JztcclxuY29uc3QgbG9naW5VcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJztcclxuY29uc3QgcmVnaXN0ZXJVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6YXRpb24ge1xyXG5cdHJlZ2lzdGVyKG9iaikge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHJlZ2lzdGVyVXJsLCBvYmopO1xyXG5cdH1cclxuXHJcblx0bG9naW4ob2JqKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QobG9naW5VcmwsIG9iaik7XHJcblx0fVxyXG5cclxuXHRsb2dvdXQoZGF0ZSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KGxvZ291dFVybCwgZGF0ZSk7XHJcblx0fVxyXG59IiwidmFyIG1hcCA9IHtcblx0XCIuL2VuXCI6IFwiLi9zb3VyY2VzL2xvY2FsZXMvZW4uanNcIixcblx0XCIuL2VuLmpzXCI6IFwiLi9zb3VyY2VzL2xvY2FsZXMvZW4uanNcIixcblx0XCIuL3J1XCI6IFwiLi9zb3VyY2VzL2xvY2FsZXMvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9zb3VyY2VzL2xvY2FsZXMvcnUuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2VzL2xvY2FsZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0XCJIb21lXCI6IFwiSG9tZVwiLFxyXG5cdFwiUHJvZmlsZVwiOiBcIlByb2ZpbGVcIixcclxuXHRcIkxvZ291dFwiOiBcIkxvZ291dFwiLFxyXG5cdFwiQWRkX2dyb3VwXCI6IFwiQWRkIGdyb3VwXCIsXHJcblx0XCJUZXN0XCI6IFwiVGVzdFwiLFxyXG5cdFwiRXhwb3J0X3dvcmRzXCI6IFwiRXhwb3J0IHdvcmRzXCJcclxufTsiLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0XCJIb21lXCI6IFwi0JTQvtC80L7QuVwiLFxyXG5cdFwiUHJvZmlsZVwiOiBcItCf0YDQvtGE0LjQu9GMXCIsXHJcblx0XCJMb2dvdXRcIjogXCLQktGL0LnRgtC4XCIsXHJcblx0XCJBZGRfZ3JvdXBcIjogXCLQlNC+0LHQsNCy0LjRgtGMXCIsXHJcblx0XCJUZXN0XCI6IFwi0KLQtdGB0YJcIixcclxuXHRcIkV4cG9ydF93b3Jkc1wiOiBcItCt0LrRgdC/0L7RgNGCXCJcclxufTtcclxuIiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuaW1wb3J0IHtKZXRBcHAsIEVtcHR5Um91dGVyLCBIYXNoUm91dGVyLCBwbHVnaW5zIH0gZnJvbSAnd2ViaXgtamV0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgSmV0QXBwe1xyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZyl7XHJcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcclxuXHRcdFx0aWQgXHRcdDogQVBQTkFNRSxcclxuXHRcdFx0dmVyc2lvbiA6IFZFUlNJT04sXHJcblx0XHRcdHJvdXRlciBcdDogQlVJTERfQVNfTU9EVUxFID8gRW1wdHlSb3V0ZXIgOiBIYXNoUm91dGVyLFxyXG5cdFx0XHRkZWJ1ZyBcdDogIVBST0RVQ1RJT04sXHJcblx0XHRcdHN0YXJ0IFx0OiAnL2xvZ2luJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRzdXBlcih7IC4uLmRlZmF1bHRzLCAuLi5jb25maWcgfSk7XHJcblx0fVxyXG59XHJcblxyXG5pZiAoIUJVSUxEX0FTX01PRFVMRSl7XHJcblx0d2ViaXgucmVhZHkoKCkgPT4ge1xyXG5cdFx0Y29uc3QgYXBwID0gbmV3IE15QXBwKCk7XHJcblx0XHRhcHAudXNlKHBsdWdpbnMuTG9jYWxlKTtcclxuXHRcdC8qYXBwLmF0dGFjaEV2ZW50KCdhcHA6Z3VhcmQnLCAodXJsLCB2aWV3LCBuYXYpID0+IHtcclxuXHRcdFx0aWYodXJsLmluZGV4T2YoJy9ob21lJykgIT09IC0xKSB7XHJcblx0XHRcdFx0d2ViaXguYWpheCgpLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NoZWNrJykudGhlbihcclxuXHRcdFx0XHRcdChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSByZXMuanNvbigpO1xyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmFsbG93QWNjZXNzKSB7XHJcblx0XHRcdFx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcclxuXHRcdFx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTsqL1xyXG5cclxuXHRcdGFwcC5yZW5kZXIoKTtcclxuXHR9KTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dpblwiOiBcIi4vc291cmNlcy92aWV3cy9sb2dpbi5qc1wiLFxuXHRcIi4vbG9naW4uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbG9naW4uanNcIixcblx0XCIuL3JlYWRlclwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9cIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvaW5kZXhcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvaW5kZXguanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvbWFpblwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbWFpbi5qc1wiLFxuXHRcIi4vcmVhZGVyL21haW4uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL21haW4uanNcIixcblx0XCIuL3JlZ2lzdGVyXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlZ2lzdGVyLmpzXCIsXG5cdFwiLi9yZWdpc3Rlci5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZXMvdmlld3Mgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBsb2dpbkZvcm0gPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ2xvZ2luRm9ybScsXHJcblx0XHRcdHdpZHRoOiAzMDAsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVXNlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIHR5cGU6ICdwYXNzd29yZCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA1LCBjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHsgdmlldzogJ2J1dHRvbicsIGxvY2FsSWQ6ICdsb2dpbkJ0bicsIHZhbHVlOiAnTG9naW4nLCB0eXBlOiAnZm9ybScgfSxcclxuXHRcdFx0XHRcdFx0eyB2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdDYW5jZWwnIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbGluayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnQ3JlYXRlIGFuIGFjY291bnQnLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2hvdygnL3JlZ2lzdGVyJyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHR7fSxcclxuXHRcdFx0XHR7XHRcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdGxvZ2luRm9ybSxcclxuXHRcdFx0XHRcdFx0bGluayxcclxuXHRcdFx0XHRcdFx0e31cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHt9XHJcblx0XHRcdF1cdFx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy4kJCgnbG9naW5CdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuJCQoJ2xvZ2luRm9ybScpLmdldFZhbHVlcygpO1xyXG5cdFx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9naW4odmFsdWVzKS50aGVuKChyZXNwb25zZSkgPT4ge1x0XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3coJ3JlYWRlci5pbmRleC9yZWFkZXIubWFpbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHdlYml4Lm1lc3NhZ2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0VmlldywgcGx1Z2luc30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6J2hlYWRlcicsIHRlbXBsYXRlOnRoaXMuYXBwLmNvbmZpZy5uYW1lLCBjc3M6J3dlYml4X2hlYWRlciBhcHBfaGVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBtZW51ID0ge1xyXG5cdFx0XHR2aWV3OidtZW51JywgaWQ6J3RvcDptZW51JywgXHJcblx0XHRcdGNzczonYXBwX21lbnUnLFxyXG5cdFx0XHR3aWR0aDoxODAsIGxheW91dDoneScsIHNlbGVjdDp0cnVlLFxyXG5cdFx0XHR0ZW1wbGF0ZTonPHNwYW4gY2xhc3M9XCJ3ZWJpeF9pY29uICNpY29uI1wiPjwvc3Bhbj4gI3ZhbHVlIyAnLFxyXG5cdFx0XHR2YWx1ZTogJ0hvbWUnLFxyXG5cdFx0XHRkYXRhOltcclxuXHRcdFx0XHR7IHZhbHVlOidIb21lJywgaWQ6J21haW4nLCBpY29uOidmYXMgZmEtaG9tZScgfSxcclxuXHRcdFx0XHQvLyB7IHZhbHVlOidQcm9maWxlJywgaWQ6J3Byb2ZpbGUnLCAgaWNvbjonZmFzIGZhLXVzZXInIH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsb2dvdXQgPSB7XHJcblx0XHRcdHZpZXc6J2J1dHRvbicsIFxyXG5cdFx0XHRsb2NhbElkOidsb2dvdXRCdG4nLCBcclxuXHRcdFx0dmFsdWU6J0xvZ291dCcsIFxyXG5cdFx0XHR0eXBlOidmb3JtJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1aSA9IHtcclxuXHRcdFx0dHlwZTonY2xlYW4nLCBwYWRkaW5nWDo1LCBjc3M6J2FwcF9sYXlvdXQnLCBcclxuXHRcdFx0Y29sczpbXHJcblx0XHRcdFx0eyBwYWRkaW5nWDo1LCBwYWRkaW5nWToxMCwgcm93czogWyB7Y3NzOid3ZWJpeF9zaGFkb3dfbWVkaXVtJywgcm93czpbaGVhZGVyLCBtZW51LCBsb2dvdXRdfSBdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdyZXNpemVyJywgd2lkdGg6IDUgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0eXBlOiAnd2lkZScsIHBhZGRpbmdZOiAxMCwgcGFkZGluZ1g6IDUsIHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0eyAkc3VidmlldzogdHJ1ZSB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMudXNlKHBsdWdpbnMuTWVudSwgJ3RvcDptZW51Jyk7XHJcblxyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCh7Y3VycmVudERhdGV9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IHRlc3RSZXN1bHRzID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICdncm91cExpc3QnLFxyXG5cdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkZXI6ICdBZGQnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3JlbW92ZUNvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSZW1vdmUnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAne2NvbW1vbi50cmFzaEljb24oKX0nXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYnV0dG9uID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0aWQ6ICdhZGRHcm91cCcsXHJcblx0XHRcdHZhbHVlOiAnQWRkJyxcclxuXHRcdFx0dHlwZTonZm9ybScsXHJcblx0XHRcdGlucHV0V2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHt9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRyb3dzOiBbdGVzdFJlc3VsdHMsIGJ1dHRvbl1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Ly8gJCQoJ2dyb3VwTGlzdCcpLnBhcnNlKGdyb3Vwcyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyUGFnZSBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0ZXJGb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdyZWdpc3RlckZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Vlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIHR5cGU6ICdwYXNzd29yZCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA1LCBjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIGxvY2FsSWQ6ICdyZWdpc3RlckJ0bicsIHZhbHVlOiAnUmVnaXN0ZXInLCB0eXBlOiAnZm9ybSdcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdHJlZ2lzdGVyRm9ybSxcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuJCQoJ3JlZ2lzdGVyQnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLiQkKCdyZWdpc3RlckZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0XHRhdXRob3JpemF0aW9uLnJlZ2lzdGVyKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvdygnL3JlYWRlci9pbmRleC9tYWluJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=