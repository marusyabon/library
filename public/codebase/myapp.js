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
/*! exports provided: dummyCover, SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyCover", function() { return dummyCover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
var dummyCover = 'https://i.pinimg.com/originals/ad/fd/58/adfd5873be3841f0660e6aaa00cde18e.jpg';
var SUCCESS = 2;



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
		var _this3 = this;

		var data = this.form.getValues();

		var successAction = function successAction() {
			_this3.webix.message('Success');
			_this3.hideWindow();
		};

		if (this.form.validate()) {
			if (this.isNew) {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["addItem"])(_models_users__WEBPACK_IMPORTED_MODULE_1__["default"], data, successAction);
			} else {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(_models_users__WEBPACK_IMPORTED_MODULE_1__["default"], data, successAction);
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
		var _this3 = this;

		this.grid = $$('dt_library');

		switch (this.libraryConfig.role) {
			case 'reader':
				{
					this.grid.getColumnConfig('editCol').hidden = true;
					this.grid.getColumnConfig('removeCol').hidden = true;
				}
				break;
			case 'librarian':
				{
					this.grid.getColumnConfig('viewCol').hidden = true;
				}
				break;
		}
		this.grid.refreshColumns();

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

		this._bookCard = this.ui(this.bookCard);
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
			template: "#name#" + "<span class='list_button'><i class = 'fas fa-times'></i></span>",
			on: {
				onItemClick: function onItemClick(id) {
					//remove file and record in DB
					console.log('remove: ', id);
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
		this.book = book ? book : '';
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
			this.$$('bookCover').setValues(book.cover_photo || _consts__WEBPACK_IMPORTED_MODULE_2__["dummyCover"]);
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
		this.$$('bookCover').setValues(book.cover_photo || _consts__WEBPACK_IMPORTED_MODULE_3__["dummyCover"]);
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
				}],
				on: {
					onItemClick: function onItemClick(id) {
						return _this2[id]();
					}
				}
			}, {
				id: 'booksTop',
				view: 'datatable',
				columns: [{
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
					width: 60
				}],
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
	};

	bookTops.prototype.showOldestBooks = function showOldestBooks() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return a.year_of_publication - b.year_of_publication;
		});
		this.showRsults(data);
	};

	bookTops.prototype.showNewestBooks = function showNewestBooks() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return b.year_of_publication - a.year_of_publication;
		});
		this.showRsults(data);
	};

	bookTops.prototype.showMostPagesBooks = function showMostPagesBooks() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return b.number_of_pages - a.number_of_pages;
		});
		this.showRsults(data);
	};

	bookTops.prototype.showBooksWithLongNames = function showBooksWithLongNames() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return b.book_title.length - a.book_title.length;
		});
		this.showRsults(data);
	};

	bookTops.prototype.showRsults = function showRsults(data) {
		data = data.slice(0, 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYml4LWpldC9kaXN0L2VzNi9qZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9hdXRob3JpemF0aW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvY29uc3RzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbG9jYWxlcyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvYm9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9teWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvYWRtaW4vdXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9jb21tb24vbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9ib29rQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvYm9va0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL3RvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJKZXRCYXNlIiwid2ViaXgiLCJ3ZWJpeEpldCIsIl9ldmVudHMiLCJfc3VicyIsIl9kYXRhIiwiZ2V0Um9vdCIsIl9yb290IiwiZGVzdHJ1Y3RvciIsIl9kZXRhY2hFdmVudHMiLCJfZGVzdHJveVN1YnMiLCJfY29udGFpbmVyIiwiYXBwIiwiX3BhcmVudCIsInNldFBhcmFtIiwiaWQiLCJ2YWx1ZSIsInVybCIsIl9zZWdtZW50IiwidXBkYXRlIiwic2hvdyIsImdldFBhcmFtIiwicGFyZW50IiwidmlldyIsImdldFBhcmVudFZpZXciLCJnZXRVcmwiLCJzdWJ1cmwiLCJnZXRVcmxTdHJpbmciLCJ0b1N0cmluZyIsIiQkIiwicm9vdCIsInF1ZXJ5VmlldyIsIm9iaiIsImNvbmZpZyIsImxvY2FsSWQiLCIkc2NvcGUiLCJvbiIsIm5hbWUiLCJjb2RlIiwiYXR0YWNoRXZlbnQiLCJwdXNoIiwiY29udGFpbnMiLCJrZXkiLCJraWQiLCJnZXRTdWJWaWV3Iiwic3ViIiwiZ2V0U3ViVmlld0luZm8iLCJzdWJ2aWV3IiwicG9wdXAiLCJldmVudHMiLCJpIiwibGVuZ3RoIiwiZGV0YWNoRXZlbnQiLCJzdWJWaWV3IiwiX2luaXRfdXJsX2RhdGEiLCJjdXJyZW50IiwiZXh0ZW5kIiwicGFyYW1zIiwiX2dldERlZmF1bHRTdWIiLCJkZWZhdWx0IiwiYnJhbmNoIiwiY2hpbGQiLCJfcm91dGVkX3ZpZXciLCJwYXJzZSIsInN1YnN0ciIsInBhcnRzIiwic3BsaXQiLCJjaHVua3MiLCJ0ZXN0IiwicmVzdWx0IiwicG9zIiwiaW5kZXhPZiIsInBhcmFtIiwiZGNodW5rIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFnZSIsImlzTmV3IiwidXJsMnN0ciIsInN0YWNrIiwiY2h1bmsiLCJvYmoyc3RyIiwiam9pbiIsInN0ciIsImVuY29kZVVSSUNvbXBvbmVudCIsIlJvdXRlIiwicm91dGUiLCJpbmRleCIsIl9uZXh0IiwicGF0aCIsIm5leHQiLCJzbGljZSIsInNoaWZ0IiwicmVmcmVzaCIsIl9qb2luIiwia2lkcyIsIm9sZCIsImNvbmNhdCIsImFwcGVuZCIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJyZWRpcmVjdCIsImNvbmZpcm0iLCJyZXNvbHZlIiwiY2FsbEV2ZW50IiwiY2F0Y2giLCJ0aGVuIiwic2l6ZSIsIm4iLCJKZXRWaWV3IiwiX2NoaWxkcmVuIiwidWkiLCJjb250YWluZXIiLCJqZXR2aWV3IiwiY3JlYXRlVmlldyIsInJlbmRlciIsInRhcmdldCIsIl9yZW5kZXJGcmFtZUxvY2siLCJfc2hvdyIsInNlZ21lbnQiLCJfdXJsQ2hhbmdlIiwibGlua1JvdXRlciIsImdldFJvdXRlciIsInNldCIsInNpbGVudCIsImluaXQiLCJfJHZpZXciLCJfJCIsInJlYWR5IiwiXyR1cmwiLCJtZXNzYWdlIiwidXJsQ2hhbmdlIiwiZGVzdHJveSIsIl9kZXN0cm95S2lkcyIsInVzZSIsInBsdWdpbiIsInRhZ05hbWUiLCJfcmVuZGVyIiwiZG9jdW1lbnQiLCJib2R5IiwidG9Ob2RlIiwiX3JlbmRlcl9maW5hbCIsImNmZyIsInNsb3QiLCJyZWplY3QiLCJyZXNwb25zZSIsImNvcHlDb25maWciLCJvbGR1aSIsImFzV2luIiwic2V0UG9zaXRpb24iLCJpc1Zpc2libGUiLCJfaW5pdCIsIl9pbml0VXJsIiwiZSIsIl9pbml0RXJyb3IiLCJlcnIiLCJ3YWl0cyIsImZyYW1lIiwid2FpdCIsImFsbCIsImxvY2siLCJfcmVuZGVyRnJhbWUiLCJfY3JlYXRlU3ViVmlldyIsImVycm9yIiwiY3JlYXRlRnJvbVVSTCIsInVpcyIsIkpldFZpZXdSYXciLCJfdWkiLCJTdWJSb3V0ZXIiLCJjYiIsImEiLCJnZXQiLCJfb25jZSIsIkpldEFwcEJhc2UiLCJ3aW5kb3ciLCJ2ZXJzaW9uIiwic3RhcnQiLCJfc2VydmljZXMiLCJFdmVudFN5c3RlbSIsIl9zdWJTZWdtZW50IiwiZ2V0U2VydmljZSIsInNldFNlcnZpY2UiLCJoYW5kbGVyIiwicHJvdG90eXBlIiwiJHN1YnZpZXciLCJhZGRTdWJWaWV3IiwiQXJyYXkiLCJtZXRob2QiLCJwb2ludCIsIkRhdGFDb2xsZWN0aW9uIiwiUmVnRXhwIiwiRGF0ZSIsImNvcHkiLCIkcm91dGVyIiwiY2xpY2tIYW5kbGVyIiwic3JjRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInRyaWdnZXIiLCJfZm9yVmlldyIsImxvYWRWaWV3Iiwidmlld3MiLCJfbG9hZEVycm9yIiwiRXJyb3IiLCJfbG9hZFZpZXdEeW5hbWljIiwibW9kdWxlIiwiX19lc01vZHVsZSIsIm5vdyIsInJvdXRlciIsInJlc3QiLCJhcHBseSIsImRhdGEiLCJhY3Rpb24iLCJiaW5kIiwiZXIiLCJkZWJ1ZyIsImNvbnNvbGUiLCJ0ZXh0IiwicmVwbGFjZSIsImlubmVySFRNTCIsInR5cGUiLCJleHBpcmUiLCJmaXJzdEluaXQiLCJfZmlyc3Rfc3RhcnQiLCJ0b3AiLCJiYXNlIiwic2V0VGltZW91dCIsImFuaW1hdGlvbiIsIm5vZGUiLCJodG1sIiwiYWRkQ3NzIiwicmVtb3ZlQ3NzIiwidXJsU3RyaW5nIiwidGVtcGxhdGUiLCJ1aWQiLCJIYXNoUm91dGVyIiwiX2RldGVjdFByZWZpeCIsIm9ucG9wc3RhdGUiLCJyb3V0ZXMiLCJjb21wYXJlIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInByZWZpeCIsInN1Zml4IiwiX2dldFJhdyIsInJvdXRlclByZWZpeCIsImxvY2F0aW9uIiwiaHJlZiIsImlzUGF0Y2hlZCIsInBhdGNoIiwidyIsIndpbiIsInByb21pc2UiLCJmcmVlemUiLCJzb21lIiwiJGZyZWV6ZSIsInJlc2l6ZSIsImJhc2VBZGQiLCJiYXNlbGF5b3V0IiwiYWRkVmlldyIsImJhc2VSZW1vdmUiLCJyZW1vdmVWaWV3IiwianZpZXciLCJzdWJzIiwiYXJndW1lbnRzIiwibGF5b3V0IiwicHJvdG9VSSIsIiRpbml0IiwiJGFwcCIsIiRyZWFkeSIsIm9yaWdpbiIsInByb3h5IiwiSmV0QXBwIiwicmVxdWlyZSIsIlN0b3JlUm91dGVyIiwic3RvcmFnZSIsInNlc3Npb24iLCJzdG9yZU5hbWUiLCJwdXQiLCJVcmxSb3V0ZXIiLCJwYXRobmFtZSIsIkVtcHR5Um91dGVyIiwiXyRjb25maWciLCJVbmxvYWRHdWFyZCIsImhhcyIsInN0b3JlIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZm9yRWFjaCIsImNvbnRleHQiLCJ0cmltIiwid2FybiIsIngiLCJTdHJpbmciLCJkZWxpbWl0ZXIiLCJydXNzaWFuUGx1cmFsR3JvdXBzIiwiZW5kIiwicGx1cmFsVHlwZXMiLCJhcmFiaWMiLCJsYXN0VHdvIiwiYm9zbmlhbl9zZXJiaWFuIiwiY2hpbmVzZSIsImNyb2F0aWFuIiwiZnJlbmNoIiwiZ2VybWFuIiwicnVzc2lhbiIsImxpdGh1YW5pYW4iLCJjemVjaCIsInBvbGlzaCIsImljZWxhbmRpYyIsInNsb3ZlbmlhbiIsInBsdXJhbFR5cGVUb0xhbmd1YWdlcyIsImxhbmdUb1R5cGVNYXAiLCJtYXBwaW5nIiwicmV0IiwibGFuZ3MiLCJsYW5nIiwicGx1cmFsVHlwZU5hbWUiLCJsb2NhbGUiLCJsYW5nVG9QbHVyYWxUeXBlIiwiZW4iLCJwbHVyYWxUeXBlSW5kZXgiLCJjb3VudCIsImVzY2FwZSIsInRva2VuIiwiY29uc3RydWN0VG9rZW5SZWdleCIsIm9wdHMiLCJzdWZmaXgiLCJSYW5nZUVycm9yIiwiZG9sbGFyUmVnZXgiLCJkb2xsYXJCaWxsc1lhbGwiLCJkZWZhdWx0VG9rZW5SZWdleCIsInRyYW5zZm9ybVBocmFzZSIsInBocmFzZSIsInN1YnN0aXR1dGlvbnMiLCJ0b2tlblJlZ2V4IiwiVHlwZUVycm9yIiwiaW50ZXJwb2xhdGlvblJlZ2V4Iiwib3B0aW9ucyIsInNtYXJ0X2NvdW50IiwidGV4dHMiLCJleHByZXNzaW9uIiwiYXJndW1lbnQiLCJQb2x5Z2xvdCIsInBocmFzZXMiLCJjdXJyZW50TG9jYWxlIiwiYWxsb3dNaXNzaW5nIiwib25NaXNzaW5nS2V5IiwiaW50ZXJwb2xhdGlvbiIsIm5ld0xvY2FsZSIsIm1vcmVQaHJhc2VzIiwicHJlZml4ZWRLZXkiLCJ1bnNldCIsImNsZWFyIiwibmV3UGhyYXNlcyIsInQiLCJfIiwidHJhbnNmb3JtIiwid2ViaXhQb2x5Z2xvdCIsIkxvY2FsZSIsIl92aWV3Iiwic2V0TGFuZ0RhdGEiLCJwY29uZmlnIiwicG9seWdsb3QiLCJwb2x5Iiwic2VydmljZSIsImxvY05hbWUiLCJpMThuIiwic2V0TG9jYWxlIiwiZ2V0TGFuZyIsInNldExhbmciLCJ1cmxzIiwiTWVudSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJnZXRTZWxlY3RlZElkIiwic2VsZWN0IiwiZXhpc3RzIiwiYmFzZWljb25zIiwiZ29vZCIsInNhdmluZyIsImJhc2V0ZXh0IiwiU3RhdHVzIiwic3RhdHVzIiwiaXNlcnJvciIsImV4cGlyZURlbGF5IiwiaWNvbnMiLCJjb250ZW50IiwiYXJlYSIsInNldEhUTUwiLCJzdWNjZXNzIiwic2V0U3RhdHVzIiwiZmFpbCIsImdldFN0YXR1cyIsImhpZGVTdGF0dXMiLCJtb2RlIiwicmVzcG9uc2VUZXh0IiwidHJhY2siLCJkcCIsIl9pZCIsIl9vYmoiLCJyZW1vdGUiLCJhamF4IiwiX21vZGUiLCJfdXJsIiwiX3JlcXVlc3QiLCJfaGVhZGVycyIsIl9maWxlcyIsIlRoZW1lIiwidGhlbWUiLCJnZXRUaGVtZSIsInNldFRoZW1lIiwibGlua3MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxuYW1lIiwiZGlzYWJsZWQiLCJza2luIiwiY29weVBhcmFtcyIsIlVybFBhcmFtIiwib3MiLCJvZyIsInZhbCIsIlVzZXIiLCJsb2dpbiIsImxvZ291dCIsImFmdGVyTG9naW4iLCJhZnRlckxvZ291dCIsInBpbmciLCJtb2RlbCIsInVzZXIiLCJnZXRVc2VyIiwic2VydmVyIiwicGFzcyIsImNhbk5hdmlnYXRlIiwiXyRyb290IiwicHVibGljIiwic2V0SW50ZXJ2YWwiLCJwbHVnaW5zIiwibG9nb3V0VXJsIiwibG9naW5VcmwiLCJyZWdpc3RlclVybCIsIkF1dGhvcml6YXRpb24iLCJyZWdpc3RlciIsInBvc3QiLCJkYXRlIiwiZHVtbXlDb3ZlciIsIlNVQ0NFU1MiLCJCb29rc01vZGVsIiwiZ2V0RGF0YUZyb21TZXJ2ZXIiLCJ1c2VyX2lkIiwiYWRkSXRlbSIsInVwZGF0ZUl0ZW0iLCJyZW1vdmVJdGVtIiwiZGVsIiwiRmlsZXNNb2RlbCIsImdldEl0ZW1zIiwiZG93bmxvYWRJdGVtIiwiTGlrZXNNb2RlbCIsImFkZExpa2UiLCJ1c2VySWQiLCJib29rSWQiLCJyZW1vdmVMaWtlIiwiVXNlcnNNb2RlbCIsImdldEl0ZW0iLCJNeUFwcCIsImRlZmF1bHRzIiwiQVBQTkFNRSIsIlZFUlNJT04iLCJCVUlMRF9BU19NT0RVTEUiLCJQUk9EVUNUSU9OIiwibmF2IiwidXJsUGFydHMiLCJ0YXJnZXRQYXJ0IiwiZWwiLCJyb2xlIiwianNvbiIsInRvZ2dsZUVsZW1lbnQiLCJjb25kaXRpb24iLCJlbGVtZW50IiwiaGlkZSIsIk1vZGVsIiwic3VjY2Vzc0FjdGlvbiIsInNlcnZlclN0YXR1cyIsImF1dG9oZWlnaHQiLCJib3JkZXJsZXNzIiwiaGVpZ2h0IiwibGlzdCIsIlRvcFZpZXciLCJoZWFkZXIiLCJ3aWR0aCIsImR0YWJsZSIsImNvbHVtbnMiLCJoaWRkZW4iLCJtaW5XaWR0aCIsImZpbGxzcGFjZSIsIm9uQ2xpY2siLCJlZGl0VXNlciIsImFkZFVzZXJCdG4iLCJjbGljayIsImFkZFVzZXIiLCJyb3dzIiwiY29scyIsInVzZXJzTW9kZWwiLCJkYkRhdGEiLCJ1c2Vyc0FyciIsIm1hcCIsImZ1bGxfbmFtZSIsInVzZXJfbmFtZSIsInVzZXJfc3VybmFtZSIsImZvcm1hdCIsImRhdGVUb1N0ciIsImJpcnRoX2RhdGUiLCJ1c2Vyc0RhdGEiLCJhdXRob3JpemF0aW9uIiwiY3VycmVudERhdGUiLCJfdXNlckZvcm0iLCJVc2VyRm9ybSIsImZpbmQiLCJzaG93V2luZG93IiwiaGVhZCIsInBvc2l0aW9uIiwiZWxlbWVudHMiLCJsYWJlbCIsImxhYmVsV2lkdGgiLCJsYWJlbEFsaWduIiwicnVsZXMiLCJpc05vdEVtcHR5IiwibWFyZ2luIiwicGFkZGluZ1kiLCJzYXZlRm9ybSIsImhpZGVXaW5kb3ciLCJmb3JtIiwiZ2V0SGVhZCIsInNldFZhbHVlcyIsImluaXRpYWxfcGFzc3dvcmQiLCJnZXRWYWx1ZXMiLCJ2YWxpZGF0ZSIsImNsZWFyVmFsaWRhdGlvbiIsIkxpYnJhcnkiLCJsaWJyYXJ5Q29uZmlnIiwiYm9va0NhcmQiLCJjc3MiLCJzb3J0Iiwic2hvd0Jvb2tDYXJkIiwicmVtb3ZlQm9vayIsImdyaWQiLCJnZXRDb2x1bW5Db25maWciLCJyZWZyZXNoQ29sdW1ucyIsImJvb2tzTW9kZWwiLCJib29rc0FyciIsInllYXJfb2ZfcHVibGljYXRpb24iLCJfYm9va0NhcmQiLCJib29rIiwic2hvd1BvcHVwIiwicmVtb3ZlIiwiYWRkQm9vayIsIkJvb2tDYXJkIiwiYm9va0NvdmVyIiwiYWRkVGV4dEZpbGUiLCJhdXRvc2VuZCIsImZvcm1EYXRhIiwiYm9va19pZCIsImFjY2VwdCIsInVwbG9hZCIsImxpbmsiLCJmaWxlc0xpc3QiLCJhZGRBdWRpb0ZpbGUiLCJhdWRpb0xpc3QiLCJhdmFpbGFibGVUZXh0RmlsZXMiLCJvbkl0ZW1DbGljayIsImxvZyIsImF2YWlsYWJsZUF1ZGlvRmlsZXMiLCJzYXZlQnRuIiwibWF4SGVpZ2h0IiwicGFkZGluZ1giLCJjbGVhckZvcm0iLCJmaWxlc01vZGVsIiwiZmlsZXNBcnIiLCJ0ZXh0RmlsZXMiLCJhdWRpb0ZpbGVzIiwiZmlsZSIsImRhdGFfdHlwZSIsImNvdmVyX3Bob3RvIiwic2VuZCIsImZpbGVzIiwiY2xlYXJBbGwiLCJtZW51IiwiaWNvbiIsIm9uTWVudUl0ZW1DbGljayIsImxpYkxpYnJhcnkiLCJhZGRCb29rQnRuIiwibGlicmFyeSIsIkxvZ2luUGFnZSIsImxvZ2luRm9ybSIsInZhbHVlcyIsInVzZXJEYXRhIiwicm9sZV9uYW1lIiwicmVhZG9ubHkiLCJib29rTmFtZSIsImRvd25sb2FkIiwib3JkZXJCb29rIiwiZG93bmxvYWRCb29rIiwibGlrZUJvb2siLCJsaWtlQnV0dG9uIiwiZGVmaW5lIiwiY291bnRfbGlrZXMiLCJib29rX2ZpbGUiLCJhdmFpbGFibGVfY29waWVzIiwidG9nZ2xlTGlrZSIsImxpa2VzTW9kZWwiLCJ1bnNldExpa2UiLCJzZXRMaWtlIiwicmVhZGVyTGlicmFyeSIsIk1haW5WaWV3IiwidGVzdFJlc3VsdHMiLCJidXR0b24iLCJpbnB1dFdpZHRoIiwiU2V0dGluZ3MiLCJib29rVG9wcyIsInNob3dPbGRlc3RCb29rcyIsImIiLCJzaG93UnN1bHRzIiwic2hvd05ld2VzdEJvb2tzIiwic2hvd01vc3RQYWdlc0Jvb2tzIiwibnVtYmVyX29mX3BhZ2VzIiwic2hvd0Jvb2tzV2l0aExvbmdOYW1lcyIsImJvb2tfdGl0bGUiLCJSZWdpc3RlclBhZ2UiLCJyZWdpc3RlckZvcm0iLCJyZWFzb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsTztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsYUFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLGFBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQUtFLE9BQUwsR0FBZSxFQUFmO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNIOztzQkFDREMsTyxzQkFBVTtBQUNOLGVBQU8sS0FBS0MsS0FBWjtBQUNILEs7O3NCQUNEQyxVLHlCQUFhO0FBQ1QsYUFBS0MsYUFBTDtBQUNBLGFBQUtDLFlBQUw7QUFDQSxhQUFLUCxPQUFMLEdBQWUsS0FBS1EsVUFBTCxHQUFrQixLQUFLQyxHQUFMLEdBQVcsS0FBS0MsT0FBTCxHQUFlLEtBQUtOLEtBQUwsR0FBYSxJQUF4RTtBQUNILEs7O3NCQUNETyxRLHFCQUFTQyxFLEVBQUlDLEssRUFBT0MsRyxFQUFLO0FBQ3JCLFlBQUksS0FBS1osS0FBTCxDQUFXVSxFQUFYLE1BQW1CQyxLQUF2QixFQUE4QjtBQUMxQixpQkFBS1gsS0FBTCxDQUFXVSxFQUFYLElBQWlCQyxLQUFqQjtBQUNBLGlCQUFLRSxRQUFMLENBQWNDLE1BQWQsQ0FBcUJKLEVBQXJCLEVBQXlCQyxLQUF6QixFQUFnQyxDQUFoQztBQUNBLGdCQUFJQyxHQUFKLEVBQVM7QUFDTCxxQkFBS0csSUFBTCxDQUFVLElBQVY7QUFDSDtBQUNKO0FBQ0osSzs7c0JBQ0RDLFEscUJBQVNOLEUsRUFBSU8sTSxFQUFRO0FBQ2pCLFlBQU1OLFFBQVEsS0FBS1gsS0FBTCxDQUFXVSxFQUFYLENBQWQ7QUFDQSxZQUFJLE9BQU9DLEtBQVAsS0FBaUIsV0FBakIsSUFBZ0MsQ0FBQ00sTUFBckMsRUFBNkM7QUFDekMsbUJBQU9OLEtBQVA7QUFDSDtBQUNELFlBQU1PLE9BQU8sS0FBS0MsYUFBTCxFQUFiO0FBQ0EsWUFBSUQsSUFBSixFQUFVO0FBQ04sbUJBQU9BLEtBQUtGLFFBQUwsQ0FBY04sRUFBZCxFQUFrQk8sTUFBbEIsQ0FBUDtBQUNIO0FBQ0osSzs7c0JBQ0RHLE0scUJBQVM7QUFDTCxlQUFPLEtBQUtQLFFBQUwsQ0FBY1EsTUFBZCxFQUFQO0FBQ0gsSzs7c0JBQ0RDLFksMkJBQWU7QUFDWCxlQUFPLEtBQUtULFFBQUwsQ0FBY1UsUUFBZCxFQUFQO0FBQ0gsSzs7c0JBQ0RKLGEsNEJBQWdCO0FBQ1osZUFBTyxLQUFLWCxPQUFaO0FBQ0gsSzs7c0JBQ0RnQixFLGVBQUdkLEUsRUFBSTtBQUNILFlBQUksT0FBT0EsRUFBUCxLQUFjLFFBQWxCLEVBQTRCO0FBQ3hCLGdCQUFNZSxPQUFPLEtBQUt4QixPQUFMLEVBQWI7QUFDQSxtQkFBT3dCLEtBQUtDLFNBQUwsQ0FBZ0I7QUFBQSx1QkFBTyxDQUFDQyxJQUFJQyxNQUFKLENBQVdsQixFQUFYLEtBQWtCQSxFQUFsQixJQUF3QmlCLElBQUlDLE1BQUosQ0FBV0MsT0FBWCxLQUF1Qm5CLEVBQWhELEtBQ3pCaUIsSUFBSUcsTUFBSixLQUFlTCxLQUFLSyxNQURGO0FBQUEsYUFBaEIsRUFDNEIsTUFENUIsQ0FBUDtBQUVILFNBSkQsTUFLSztBQUNELG1CQUFPcEIsRUFBUDtBQUNIO0FBQ0osSzs7c0JBQ0RxQixFLGVBQUdKLEcsRUFBS0ssSSxFQUFNQyxJLEVBQU07QUFDaEIsWUFBTXZCLEtBQUtpQixJQUFJTyxXQUFKLENBQWdCRixJQUFoQixFQUFzQkMsSUFBdEIsQ0FBWDtBQUNBLGFBQUtuQyxPQUFMLENBQWFxQyxJQUFiLENBQWtCLEVBQUVSLFFBQUYsRUFBT2pCLE1BQVAsRUFBbEI7QUFDQSxlQUFPQSxFQUFQO0FBQ0gsSzs7c0JBQ0QwQixRLHFCQUFTbEIsSSxFQUFNO0FBQ1gsYUFBSyxJQUFNbUIsR0FBWCxJQUFrQixLQUFLdEMsS0FBdkIsRUFBOEI7QUFDMUIsZ0JBQU11QyxNQUFNLEtBQUt2QyxLQUFMLENBQVdzQyxHQUFYLEVBQWdCbkIsSUFBNUI7QUFDQSxnQkFBSW9CLFFBQVFwQixJQUFSLElBQWdCb0IsSUFBSUYsUUFBSixDQUFhbEIsSUFBYixDQUFwQixFQUF3QztBQUNwQyx1QkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNELGVBQU8sS0FBUDtBQUNILEs7O3NCQUNEcUIsVSx1QkFBV1AsSSxFQUFNO0FBQ2IsWUFBTVEsTUFBTSxLQUFLQyxjQUFMLENBQW9CVCxJQUFwQixDQUFaO0FBQ0EsWUFBSVEsR0FBSixFQUFTO0FBQ0wsbUJBQU9BLElBQUlFLE9BQUosQ0FBWXhCLElBQW5CO0FBQ0g7QUFDSixLOztzQkFDRHVCLGMsMkJBQWVULEksRUFBTTtBQUNqQixZQUFNUSxNQUFNLEtBQUt6QyxLQUFMLENBQVdpQyxRQUFRLFNBQW5CLENBQVo7QUFDQSxZQUFJUSxHQUFKLEVBQVM7QUFDTCxtQkFBTyxFQUFFRSxTQUFTRixHQUFYLEVBQWdCdkIsUUFBUSxJQUF4QixFQUFQO0FBQ0g7QUFDRCxZQUFJZSxTQUFTLE1BQWIsRUFBcUI7QUFDakIsaUJBQUtqQyxLQUFMLENBQVdpQyxJQUFYLElBQW1CLEVBQUVwQixLQUFLLEVBQVAsRUFBV0YsSUFBSSxJQUFmLEVBQXFCaUMsT0FBTyxJQUE1QixFQUFuQjtBQUNBLG1CQUFPLEtBQUtGLGNBQUwsQ0FBb0JULElBQXBCLENBQVA7QUFDSDtBQUNEO0FBQ0EsWUFBSSxLQUFLeEIsT0FBVCxFQUFrQjtBQUNkLG1CQUFPLEtBQUtBLE9BQUwsQ0FBYWlDLGNBQWIsQ0FBNEJULElBQTVCLENBQVA7QUFDSDtBQUNELGVBQU8sSUFBUDtBQUNILEs7O3NCQUNENUIsYSw0QkFBZ0I7QUFDWixZQUFNd0MsU0FBUyxLQUFLOUMsT0FBcEI7QUFDQSxhQUFLLElBQUkrQyxJQUFJRCxPQUFPRSxNQUFQLEdBQWdCLENBQTdCLEVBQWdDRCxLQUFLLENBQXJDLEVBQXdDQSxHQUF4QyxFQUE2QztBQUN6Q0QsbUJBQU9DLENBQVAsRUFBVWxCLEdBQVYsQ0FBY29CLFdBQWQsQ0FBMEJILE9BQU9DLENBQVAsRUFBVW5DLEVBQXBDO0FBQ0g7QUFDSixLOztzQkFDREwsWSwyQkFBZTtBQUNYO0FBQ0EsYUFBSyxJQUFNZ0MsR0FBWCxJQUFrQixLQUFLdEMsS0FBdkIsRUFBOEI7QUFDMUIsZ0JBQU1pRCxVQUFVLEtBQUtqRCxLQUFMLENBQVdzQyxHQUFYLEVBQWdCbkIsSUFBaEM7QUFDQTtBQUNBO0FBQ0EsZ0JBQUk4QixPQUFKLEVBQWE7QUFDVEEsd0JBQVE3QyxVQUFSO0FBQ0g7QUFDSjtBQUNEO0FBQ0EsYUFBS0osS0FBTCxHQUFhLEVBQWI7QUFDSCxLOztzQkFDRGtELGMsNkJBQWlCO0FBQ2IsWUFBTXJDLE1BQU0sS0FBS0MsUUFBTCxDQUFjcUMsT0FBZCxFQUFaO0FBQ0EsYUFBS2xELEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBS0osS0FBTCxDQUFXdUQsTUFBWCxDQUFrQixLQUFLbkQsS0FBdkIsRUFBOEJZLElBQUl3QyxNQUFsQyxFQUEwQyxJQUExQztBQUNILEs7O3NCQUNEQyxjLDZCQUFpQjtBQUNiLFlBQUksS0FBS3RELEtBQUwsQ0FBV3VELE9BQWYsRUFBd0I7QUFDcEIsbUJBQU8sS0FBS3ZELEtBQUwsQ0FBV3VELE9BQWxCO0FBQ0g7QUFDRCxhQUFLLElBQU1qQixHQUFYLElBQWtCLEtBQUt0QyxLQUF2QixFQUE4QjtBQUMxQixnQkFBTXlDLE1BQU0sS0FBS3pDLEtBQUwsQ0FBV3NDLEdBQVgsQ0FBWjtBQUNBLGdCQUFJLENBQUNHLElBQUllLE1BQUwsSUFBZWYsSUFBSXRCLElBQW5CLElBQTJCbUIsUUFBUSxNQUF2QyxFQUErQztBQUMzQyxvQkFBTW1CLFFBQVFoQixJQUFJdEIsSUFBSixDQUFTbUMsY0FBVCxFQUFkO0FBQ0Esb0JBQUlHLEtBQUosRUFBVztBQUNQLDJCQUFPQSxLQUFQO0FBQ0g7QUFDSjtBQUNKO0FBQ0osSzs7c0JBQ0RDLFksMkJBQWU7QUFDWCxZQUFNeEMsU0FBUyxLQUFLRSxhQUFMLEVBQWY7QUFDQSxZQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNULG1CQUFPLElBQVA7QUFDSDtBQUNELFlBQU11QixNQUFNdkIsT0FBT29DLGNBQVAsRUFBWjtBQUNBLFlBQUksQ0FBQ2IsR0FBRCxJQUFRQSxRQUFRLElBQXBCLEVBQTBCO0FBQ3RCLG1CQUFPLEtBQVA7QUFDSDtBQUNELGVBQU92QixPQUFPd0MsWUFBUCxFQUFQO0FBQ0gsSzs7Ozs7QUFHTCxTQUFTQyxLQUFULENBQWU5QyxHQUFmLEVBQW9CO0FBQ2hCO0FBQ0EsUUFBSUEsSUFBSSxDQUFKLE1BQVcsR0FBZixFQUFvQjtBQUNoQkEsY0FBTUEsSUFBSStDLE1BQUosQ0FBVyxDQUFYLENBQU47QUFDSDtBQUNEO0FBQ0EsUUFBTUMsUUFBUWhELElBQUlpRCxLQUFKLENBQVUsR0FBVixDQUFkO0FBQ0EsUUFBTUMsU0FBUyxFQUFmO0FBQ0E7QUFDQSxTQUFLLElBQUlqQixJQUFJLENBQWIsRUFBZ0JBLElBQUllLE1BQU1kLE1BQTFCLEVBQWtDRCxHQUFsQyxFQUF1QztBQUNuQyxZQUFNa0IsT0FBT0gsTUFBTWYsQ0FBTixDQUFiO0FBQ0EsWUFBTW1CLFNBQVMsRUFBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUlDLE1BQU1GLEtBQUtHLE9BQUwsQ0FBYSxHQUFiLENBQVY7QUFDQSxZQUFJRCxRQUFRLENBQUMsQ0FBYixFQUFnQjtBQUNaQSxrQkFBTUYsS0FBS0csT0FBTCxDQUFhLEdBQWIsQ0FBTjtBQUNIO0FBQ0QsWUFBSUQsUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDWixnQkFBTWIsU0FBU1csS0FBS0osTUFBTCxDQUFZTSxNQUFNLENBQWxCLEVBQXFCSixLQUFyQixDQUEyQixXQUEzQixDQUFmO0FBQ0E7QUFDQSxpQ0FBb0JULE1BQXBCLGtIQUE0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBQWpCZSxLQUFpQjs7QUFDeEIsb0JBQU1DLFNBQVNELE1BQU1OLEtBQU4sQ0FBWSxHQUFaLENBQWY7QUFDQUcsdUJBQU9JLE9BQU8sQ0FBUCxDQUFQLElBQW9CQyxtQkFBbUJELE9BQU8sQ0FBUCxDQUFuQixDQUFwQjtBQUNIO0FBQ0o7QUFDRDtBQUNBTixlQUFPakIsQ0FBUCxJQUFZO0FBQ1J5QixrQkFBT0wsTUFBTSxDQUFDLENBQVAsR0FBV0YsS0FBS0osTUFBTCxDQUFZLENBQVosRUFBZU0sR0FBZixDQUFYLEdBQWlDRixJQURoQztBQUVSWCxvQkFBUVksTUFGQTtBQUdSTyxtQkFBTztBQUhDLFNBQVo7QUFLSDtBQUNEO0FBQ0EsV0FBT1QsTUFBUDtBQUNIO0FBQ0QsU0FBU1UsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDcEIsUUFBTTdELE1BQU0sRUFBWjtBQUNBLDBCQUFvQjZELEtBQXBCLHlIQUEyQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsWUFBaEJDLEtBQWdCOztBQUN2QjlELFlBQUl1QixJQUFKLENBQVMsTUFBTXVDLE1BQU1KLElBQXJCO0FBQ0EsWUFBTWxCLFNBQVN1QixRQUFRRCxNQUFNdEIsTUFBZCxDQUFmO0FBQ0EsWUFBSUEsTUFBSixFQUFZO0FBQ1J4QyxnQkFBSXVCLElBQUosQ0FBUyxNQUFNaUIsTUFBZjtBQUNIO0FBQ0o7QUFDRCxXQUFPeEMsSUFBSWdFLElBQUosQ0FBUyxFQUFULENBQVA7QUFDSDtBQUNELFNBQVNELE9BQVQsQ0FBaUJoRCxHQUFqQixFQUFzQjtBQUNsQixRQUFNa0QsTUFBTSxFQUFaO0FBQ0EsU0FBSyxJQUFNeEMsR0FBWCxJQUFrQlYsR0FBbEIsRUFBdUI7QUFDbkIsWUFBSWtELElBQUkvQixNQUFSLEVBQWdCO0FBQ1orQixnQkFBSTFDLElBQUosQ0FBUyxHQUFUO0FBQ0g7QUFDRDBDLFlBQUkxQyxJQUFKLENBQVNFLE1BQU0sR0FBTixHQUFZeUMsbUJBQW1CbkQsSUFBSVUsR0FBSixDQUFuQixDQUFyQjtBQUNIO0FBQ0QsV0FBT3dDLElBQUlELElBQUosQ0FBUyxFQUFULENBQVA7QUFDSDs7SUFFS0csSztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUN0QixhQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFlBQUksT0FBT0YsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUMzQixpQkFBS0EsS0FBTCxHQUFhO0FBQ1RwRSxxQkFBSzhDLE1BQU1zQixLQUFOLENBREk7QUFFVEcsc0JBQU1IO0FBRkcsYUFBYjtBQUlILFNBTEQsTUFNSztBQUNELGlCQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDSDtBQUNELGFBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNIOztvQkFDRC9CLE8sc0JBQVU7QUFDTixlQUFPLEtBQUs4QixLQUFMLENBQVdwRSxHQUFYLENBQWUsS0FBS3FFLEtBQXBCLENBQVA7QUFDSCxLOztvQkFDREcsSSxtQkFBTztBQUNILGVBQU8sS0FBS0osS0FBTCxDQUFXcEUsR0FBWCxDQUFlLEtBQUtxRSxLQUFMLEdBQWEsS0FBS0MsS0FBakMsQ0FBUDtBQUNILEs7O29CQUNEN0QsTSxxQkFBUztBQUNMLGVBQU8sS0FBSzJELEtBQUwsQ0FBV3BFLEdBQVgsQ0FBZXlFLEtBQWYsQ0FBcUIsS0FBS0osS0FBMUIsQ0FBUDtBQUNILEs7O29CQUNESyxLLG9CQUFRO0FBQ0osZUFBTyxJQUFJUCxLQUFKLENBQVUsS0FBS0MsS0FBZixFQUFzQixLQUFLQyxLQUFMLEdBQWEsS0FBS0MsS0FBeEMsQ0FBUDtBQUNILEs7O29CQUNESyxPLHNCQUFVO0FBQ04sWUFBTTNFLE1BQU0sS0FBS29FLEtBQUwsQ0FBV3BFLEdBQXZCO0FBQ0EsYUFBSyxJQUFJaUMsSUFBSSxLQUFLb0MsS0FBTCxHQUFhLENBQTFCLEVBQTZCcEMsSUFBSWpDLElBQUlrQyxNQUFyQyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDOUNqQyxnQkFBSWlDLENBQUosRUFBTzBCLEtBQVAsR0FBZSxJQUFmO0FBQ0g7QUFDSixLOztvQkFDRGhELFEsdUJBQVc7QUFDUCxZQUFNc0QsTUFBTUwsUUFBUSxLQUFLbkQsTUFBTCxFQUFSLENBQVo7QUFDQSxlQUFPd0QsTUFBTUEsSUFBSWxCLE1BQUosQ0FBVyxDQUFYLENBQU4sR0FBc0IsRUFBN0I7QUFDSCxLOztvQkFDRDZCLEssa0JBQU1MLEksRUFBTU0sSSxFQUFNO0FBQ2QsWUFBSTdFLE1BQU0sS0FBS29FLEtBQUwsQ0FBV3BFLEdBQXJCO0FBQ0EsWUFBSXVFLFNBQVMsSUFBYixFQUFtQjtBQUFFO0FBQ2pCLG1CQUFPdkUsR0FBUDtBQUNIO0FBQ0QsWUFBTThFLE1BQU0sS0FBS1YsS0FBTCxDQUFXcEUsR0FBdkI7QUFDQUEsY0FBTThFLElBQUlMLEtBQUosQ0FBVSxDQUFWLEVBQWEsS0FBS0osS0FBTCxJQUFjUSxPQUFPLEtBQUtQLEtBQVosR0FBb0IsQ0FBbEMsQ0FBYixDQUFOO0FBQ0EsWUFBSUMsSUFBSixFQUFVO0FBQ052RSxrQkFBTUEsSUFBSStFLE1BQUosQ0FBV2pDLE1BQU15QixJQUFOLENBQVgsQ0FBTjtBQUNBLGlCQUFLLElBQUl0QyxJQUFJLENBQWIsRUFBZ0JBLElBQUlqQyxJQUFJa0MsTUFBeEIsRUFBZ0NELEdBQWhDLEVBQXFDO0FBQ2pDLG9CQUFJNkMsSUFBSTdDLENBQUosQ0FBSixFQUFZO0FBQ1JqQyx3QkFBSWlDLENBQUosRUFBTzNCLElBQVAsR0FBY3dFLElBQUk3QyxDQUFKLEVBQU8zQixJQUFyQjtBQUNIO0FBQ0Qsb0JBQUl3RSxJQUFJN0MsQ0FBSixLQUFVakMsSUFBSWlDLENBQUosRUFBT3lCLElBQVAsS0FBZ0JvQixJQUFJN0MsQ0FBSixFQUFPeUIsSUFBckMsRUFBMkM7QUFDdkMxRCx3QkFBSWlDLENBQUosRUFBTzBCLEtBQVAsR0FBZSxLQUFmO0FBQ0g7QUFDSjtBQUNKO0FBQ0QsZUFBTzNELEdBQVA7QUFDSCxLOztvQkFDRGdGLE0sbUJBQU9ULEksRUFBTTtBQUNULFlBQU12RSxNQUFNLEtBQUs0RSxLQUFMLENBQVdMLElBQVgsRUFBaUIsSUFBakIsQ0FBWjtBQUNBLGFBQUtILEtBQUwsQ0FBV0csSUFBWCxHQUFrQlgsUUFBUTVELEdBQVIsQ0FBbEI7QUFDQSxhQUFLb0UsS0FBTCxDQUFXcEUsR0FBWCxHQUFpQkEsR0FBakI7QUFDQSxlQUFPLEtBQUtvRSxLQUFMLENBQVdHLElBQWxCO0FBQ0gsSzs7b0JBQ0RwRSxJLGlCQUFLb0UsSSxFQUFNakUsSSxFQUFNdUUsSSxFQUFNO0FBQUE7O0FBQ25CLFlBQU03RSxNQUFNLEtBQUs0RSxLQUFMLENBQVdMLElBQVgsRUFBaUJNLElBQWpCLENBQVo7QUFDQSxlQUFPLElBQUlJLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM3QixnQkFBTUMsV0FBV3hCLFFBQVE1RCxHQUFSLENBQWpCO0FBQ0EsZ0JBQU1lLE1BQU07QUFDUmYsd0JBRFE7QUFFUm9GLGtDQUZRO0FBR1JDLHlCQUFTSixRQUFRSyxPQUFSO0FBSEQsYUFBWjtBQUtBLGdCQUFNM0YsTUFBTVcsT0FBT0EsS0FBS1gsR0FBWixHQUFrQixJQUE5QjtBQUNBO0FBQ0E7QUFDQSxnQkFBSUEsR0FBSixFQUFTO0FBQ0wsb0JBQU15RCxTQUFTekQsSUFBSTRGLFNBQUosQ0FBYyxXQUFkLEVBQTJCLENBQUN4RSxJQUFJcUUsUUFBTCxFQUFlOUUsSUFBZixFQUFxQlMsR0FBckIsQ0FBM0IsQ0FBZjtBQUNBLG9CQUFJLENBQUNxQyxNQUFMLEVBQWE7QUFDVCtCO0FBQ0E7QUFDSDtBQUNKO0FBQ0RwRSxnQkFBSXNFLE9BQUosQ0FBWUcsS0FBWixDQUFrQjtBQUFBLHVCQUFNekUsSUFBSXFFLFFBQUosR0FBZSxJQUFyQjtBQUFBLGFBQWxCLEVBQTZDSyxJQUE3QyxDQUFrRCxZQUFNO0FBQ3BELG9CQUFJMUUsSUFBSXFFLFFBQUosS0FBaUIsSUFBckIsRUFBMkI7QUFDdkJEO0FBQ0E7QUFDSDtBQUNELG9CQUFJcEUsSUFBSXFFLFFBQUosS0FBaUJBLFFBQXJCLEVBQStCO0FBQzNCekYsd0JBQUlRLElBQUosQ0FBU1ksSUFBSXFFLFFBQWI7QUFDQUQ7QUFDQTtBQUNIO0FBQ0Qsc0JBQUtmLEtBQUwsQ0FBV0csSUFBWCxHQUFrQmEsUUFBbEI7QUFDQSxzQkFBS2hCLEtBQUwsQ0FBV3BFLEdBQVgsR0FBaUJBLEdBQWpCO0FBQ0FrRjtBQUNILGFBYkQ7QUFjSCxTQS9CTSxDQUFQO0FBZ0NILEs7O29CQUNEUSxJLGlCQUFLQyxDLEVBQUc7QUFDSixhQUFLckIsS0FBTCxHQUFhcUIsQ0FBYjtBQUNILEs7O29CQUNEMUMsSyxvQkFBUTtBQUNKLFlBQU1tQixRQUFRO0FBQ1ZwRSxpQkFBSyxLQUFLb0UsS0FBTCxDQUFXcEUsR0FBWCxDQUFleUUsS0FBZixDQUFxQixLQUFLSixLQUFMLEdBQWEsQ0FBbEMsQ0FESztBQUVWRSxrQkFBTTtBQUZJLFNBQWQ7QUFJQSxZQUFJSCxNQUFNcEUsR0FBTixDQUFVa0MsTUFBZCxFQUFzQjtBQUNsQmtDLGtCQUFNRyxJQUFOLEdBQWFYLFFBQVFRLE1BQU1wRSxHQUFkLENBQWI7QUFDSDtBQUNELGVBQU8sSUFBSW1FLEtBQUosQ0FBVUMsS0FBVixFQUFpQixDQUFqQixDQUFQO0FBQ0gsSzs7b0JBQ0RsRSxNLG1CQUFPa0IsSSxFQUFNckIsSyxFQUFPc0UsSyxFQUFPO0FBQ3ZCLFlBQU1QLFFBQVEsS0FBS00sS0FBTCxDQUFXcEUsR0FBWCxDQUFlLEtBQUtxRSxLQUFMLElBQWNBLFNBQVMsQ0FBdkIsQ0FBZixDQUFkO0FBQ0EsWUFBSSxDQUFDUCxLQUFMLEVBQVk7QUFDUixpQkFBS00sS0FBTCxDQUFXcEUsR0FBWCxDQUFldUIsSUFBZixDQUFvQixFQUFFbUMsTUFBTSxFQUFSLEVBQVlsQixRQUFRLEVBQXBCLEVBQXBCO0FBQ0EsbUJBQU8sS0FBS3RDLE1BQUwsQ0FBWWtCLElBQVosRUFBa0JyQixLQUFsQixFQUF5QnNFLEtBQXpCLENBQVA7QUFDSDtBQUNELFlBQUlqRCxTQUFTLEVBQWIsRUFBaUI7QUFDYjBDLGtCQUFNSixJQUFOLEdBQWEzRCxLQUFiO0FBQ0gsU0FGRCxNQUdLO0FBQ0QrRCxrQkFBTXRCLE1BQU4sQ0FBYXBCLElBQWIsSUFBcUJyQixLQUFyQjtBQUNIO0FBQ0QsYUFBS3FFLEtBQUwsQ0FBV0csSUFBWCxHQUFrQlgsUUFBUSxLQUFLUSxLQUFMLENBQVdwRSxHQUFuQixDQUFsQjtBQUNILEs7Ozs7O0lBR0M0RixPOzs7QUFDRixxQkFBWWpHLEdBQVosRUFBaUJxQixNQUFqQixFQUF5QjtBQUFBOztBQUFBLHNEQUNyQixvQkFBTXJCLElBQUlYLEtBQVYsQ0FEcUI7O0FBRXJCLGVBQUtXLEdBQUwsR0FBV0EsR0FBWDtBQUNBO0FBQ0EsZUFBS2tHLFNBQUwsR0FBaUIsRUFBakI7QUFKcUI7QUFLeEI7O3NCQUNEQyxFLGVBQUdBLEcsRUFBSTlFLE0sRUFBUTtBQUNYQSxpQkFBU0EsVUFBVSxFQUFuQjtBQUNBLFlBQU0rRSxZQUFZL0UsT0FBTytFLFNBQVAsSUFBb0JELElBQUdDLFNBQXpDO0FBQ0EsWUFBTUMsVUFBVSxLQUFLckcsR0FBTCxDQUFTc0csVUFBVCxDQUFvQkgsR0FBcEIsQ0FBaEI7QUFDQSxhQUFLRCxTQUFMLENBQWV0RSxJQUFmLENBQW9CeUUsT0FBcEI7QUFDQUEsZ0JBQVFFLE1BQVIsQ0FBZUgsU0FBZixFQUEwQixLQUFLOUYsUUFBL0IsRUFBeUMsSUFBekM7QUFDQSxZQUFJLFFBQU82RixHQUFQLHlDQUFPQSxHQUFQLE9BQWMsUUFBZCxJQUEyQkEsZUFBYy9HLE9BQTdDLEVBQXVEO0FBQ25EO0FBQ0EsbUJBQU9pSCxPQUFQO0FBQ0gsU0FIRCxNQUlLO0FBQ0QsbUJBQU9BLFFBQVEzRyxPQUFSLEVBQVA7QUFDSDtBQUNKLEs7O3NCQUNEYyxJLGlCQUFLb0UsSSxFQUFNdkQsTSxFQUFRO0FBQ2ZBLGlCQUFTQSxVQUFVLEVBQW5CO0FBQ0E7QUFDQSxZQUFJLFFBQU91RCxJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQXBCLEVBQThCO0FBQzFCLGlCQUFLLElBQU05QyxHQUFYLElBQWtCOEMsSUFBbEIsRUFBd0I7QUFDcEIscUJBQUsxRSxRQUFMLENBQWM0QixHQUFkLEVBQW1COEMsS0FBSzlDLEdBQUwsQ0FBbkI7QUFDSDtBQUNEOEMsbUJBQU8sSUFBUDtBQUNILFNBTEQsTUFNSztBQUNEO0FBQ0EsZ0JBQUlBLEtBQUt4QixNQUFMLENBQVksQ0FBWixFQUFlLENBQWYsTUFBc0IsR0FBMUIsRUFBK0I7QUFDM0IsdUJBQU8sS0FBS3BELEdBQUwsQ0FBU1EsSUFBVCxDQUFjb0UsSUFBZCxDQUFQO0FBQ0g7QUFDRDtBQUNBLGdCQUFJQSxLQUFLakIsT0FBTCxDQUFhLElBQWIsTUFBdUIsQ0FBM0IsRUFBOEI7QUFDMUJpQix1QkFBT0EsS0FBS3hCLE1BQUwsQ0FBWSxDQUFaLENBQVA7QUFDSDtBQUNEO0FBQ0EsZ0JBQUl3QixLQUFLakIsT0FBTCxDQUFhLEtBQWIsTUFBd0IsQ0FBNUIsRUFBK0I7QUFDM0Isb0JBQU1qRCxTQUFTLEtBQUtFLGFBQUwsRUFBZjtBQUNBLG9CQUFJRixNQUFKLEVBQVk7QUFDUiwyQkFBT0EsT0FBT0YsSUFBUCxDQUFZb0UsS0FBS3hCLE1BQUwsQ0FBWSxDQUFaLENBQVosRUFBNEIvQixNQUE1QixDQUFQO0FBQ0gsaUJBRkQsTUFHSztBQUNELDJCQUFPLEtBQUtyQixHQUFMLENBQVNRLElBQVQsQ0FBYyxNQUFNb0UsS0FBS3hCLE1BQUwsQ0FBWSxDQUFaLENBQXBCLENBQVA7QUFDSDtBQUNKO0FBQ0QsZ0JBQU1uQixNQUFNLEtBQUtDLGNBQUwsQ0FBb0JiLE9BQU9tRixNQUEzQixDQUFaO0FBQ0EsZ0JBQUl2RSxHQUFKLEVBQVM7QUFDTCxvQkFBSUEsSUFBSXZCLE1BQUosS0FBZSxJQUFuQixFQUF5QjtBQUNyQiwyQkFBT3VCLElBQUl2QixNQUFKLENBQVdGLElBQVgsQ0FBZ0JvRSxJQUFoQixFQUFzQnZELE1BQXRCLENBQVA7QUFDSCxpQkFGRCxNQUdLLElBQUlBLE9BQU9tRixNQUFQLElBQWlCbkYsT0FBT21GLE1BQVAsS0FBa0IsU0FBdkMsRUFBa0Q7QUFDbkQsMkJBQU8sS0FBS0MsZ0JBQUwsQ0FBc0JwRixPQUFPbUYsTUFBN0IsRUFBcUN2RSxJQUFJRSxPQUF6QyxFQUFrRHlDLElBQWxELENBQVA7QUFDSDtBQUNKLGFBUEQsTUFRSztBQUNELG9CQUFJQSxJQUFKLEVBQVU7QUFDTiwyQkFBTyxLQUFLNUUsR0FBTCxDQUFTUSxJQUFULENBQWMsTUFBTW9FLElBQXBCLENBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDRCxlQUFPLEtBQUs4QixLQUFMLENBQVcsS0FBS3BHLFFBQWhCLEVBQTBCc0UsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBUDtBQUNILEs7O3NCQUNEOEIsSyxrQkFBTUMsTyxFQUFTL0IsSSxFQUFNakUsSSxFQUFNO0FBQUE7O0FBQ3ZCLGVBQU9nRyxRQUFRbkcsSUFBUixDQUFhb0UsSUFBYixFQUFtQmpFLElBQW5CLEVBQXlCLElBQXpCLEVBQStCbUYsSUFBL0IsQ0FBb0MsWUFBTTtBQUM3QyxtQkFBS3BELGNBQUw7QUFDQSxtQkFBTyxPQUFLa0UsVUFBTCxFQUFQO0FBQ0gsU0FITSxFQUdKZCxJQUhJLENBR0MsWUFBTTtBQUNWLGdCQUFJYSxRQUFRbEMsS0FBUixDQUFjb0MsVUFBbEIsRUFBOEI7QUFDMUIsdUJBQUs3RyxHQUFMLENBQVM4RyxTQUFULEdBQXFCQyxHQUFyQixDQUF5QkosUUFBUWxDLEtBQVIsQ0FBY0csSUFBdkMsRUFBNkMsRUFBRW9DLFFBQVEsSUFBVixFQUE3QztBQUNBLHVCQUFLaEgsR0FBTCxDQUFTNEYsU0FBVCxDQUFtQixXQUFuQixFQUFnQyxDQUFDZSxRQUFRbEMsS0FBUixDQUFjRyxJQUFmLENBQWhDO0FBQ0g7QUFDSixTQVJNLENBQVA7QUFTSCxLOztzQkFDRHFDLEksaUJBQUtDLE0sRUFBUUMsRSxFQUFJO0FBQ2I7QUFDSCxLOztzQkFDREMsSyxrQkFBTUYsTSxFQUFRRyxLLEVBQU87QUFDakI7QUFDSCxLOztzQkFDRGhHLE0scUJBQVM7QUFDTCxhQUFLckIsR0FBTCxDQUFTWCxLQUFULENBQWVpSSxPQUFmLENBQXVCLGdDQUF2QjtBQUNILEs7O3NCQUNEQyxTLHNCQUFVTCxNLEVBQVFHLEssRUFBTztBQUNyQjtBQUNILEs7O3NCQUNERyxPLHNCQUFVO0FBQ047QUFDSCxLOztzQkFDRDVILFUseUJBQWE7QUFDVCxhQUFLNEgsT0FBTDtBQUNBLGFBQUtDLFlBQUw7QUFDQTtBQUNBLGFBQUs5SCxLQUFMLENBQVdDLFVBQVg7QUFDQSwyQkFBTUEsVUFBTjtBQUNILEs7O3NCQUNEOEgsRyxnQkFBSUMsTSxFQUFRdEcsTSxFQUFRO0FBQ2hCc0csZUFBTyxLQUFLM0gsR0FBWixFQUFpQixJQUFqQixFQUF1QnFCLE1BQXZCO0FBQ0gsSzs7c0JBQ0QyRCxPLHNCQUFVO0FBQ04sWUFBTTNFLE1BQU0sS0FBS1EsTUFBTCxFQUFaO0FBQ0EsYUFBSzJHLE9BQUw7QUFDQSxhQUFLQyxZQUFMO0FBQ0EsYUFBSzNILFlBQUw7QUFDQSxhQUFLRCxhQUFMO0FBQ0EsWUFBSSxLQUFLRSxVQUFMLENBQWdCNkgsT0FBcEIsRUFBNkI7QUFDekIsaUJBQUtqSSxLQUFMLENBQVdDLFVBQVg7QUFDSDtBQUNELGFBQUtVLFFBQUwsQ0FBYzBFLE9BQWQ7QUFDQSxlQUFPLEtBQUs2QyxPQUFMLENBQWEsS0FBS3ZILFFBQWxCLENBQVA7QUFDSCxLOztzQkFDRGlHLE0sbUJBQU9yRixJLEVBQU1iLEcsRUFBS0ssTSxFQUFRO0FBQUE7O0FBQ3RCLFlBQUksT0FBT0wsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCQSxrQkFBTSxJQUFJbUUsS0FBSixDQUFVbkUsR0FBVixFQUFlLENBQWYsQ0FBTjtBQUNIO0FBQ0QsYUFBS0MsUUFBTCxHQUFnQkQsR0FBaEI7QUFDQSxhQUFLSixPQUFMLEdBQWVTLE1BQWY7QUFDQSxhQUFLZ0MsY0FBTDtBQUNBeEIsZUFBT0EsUUFBUTRHLFNBQVNDLElBQXhCO0FBQ0EsWUFBTWhJLGFBQWMsT0FBT21CLElBQVAsS0FBZ0IsUUFBakIsR0FBNkIsS0FBSzdCLEtBQUwsQ0FBVzJJLE1BQVgsQ0FBa0I5RyxJQUFsQixDQUE3QixHQUF1REEsSUFBMUU7QUFDQSxZQUFJLEtBQUtuQixVQUFMLEtBQW9CQSxVQUF4QixFQUFvQztBQUNoQyxpQkFBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxtQkFBTyxLQUFLOEgsT0FBTCxDQUFheEgsR0FBYixDQUFQO0FBQ0gsU0FIRCxNQUlLO0FBQ0QsbUJBQU8sS0FBS3VHLFVBQUwsR0FBa0JkLElBQWxCLENBQXVCO0FBQUEsdUJBQU0sT0FBS3BHLE9BQUwsRUFBTjtBQUFBLGFBQXZCLENBQVA7QUFDSDtBQUNKLEs7O3NCQUNEbUksTyxvQkFBUXhILEcsRUFBSztBQUFBOztBQUNULFlBQU1nQixTQUFTLEtBQUtBLE1BQUwsRUFBZjtBQUNBLFlBQUlBLE9BQU95RSxJQUFYLEVBQWlCO0FBQ2IsbUJBQU96RSxPQUFPeUUsSUFBUCxDQUFZO0FBQUEsdUJBQU8sT0FBS21DLGFBQUwsQ0FBbUJDLEdBQW5CLEVBQXdCN0gsR0FBeEIsQ0FBUDtBQUFBLGFBQVosQ0FBUDtBQUNILFNBRkQsTUFHSztBQUNELG1CQUFPLEtBQUs0SCxhQUFMLENBQW1CNUcsTUFBbkIsRUFBMkJoQixHQUEzQixDQUFQO0FBQ0g7QUFDSixLOztzQkFDRDRILGEsMEJBQWM1RyxNLEVBQVFoQixHLEVBQUs7QUFBQTs7QUFDdkI7QUFDQSxZQUFJOEgsT0FBTyxJQUFYO0FBQ0EsWUFBSS9CLFlBQVksSUFBaEI7QUFDQSxZQUFJNUYsT0FBTyxLQUFYO0FBQ0EsWUFBSSxDQUFDLEtBQUtULFVBQUwsQ0FBZ0I2SCxPQUFyQixFQUE4QjtBQUMxQk8sbUJBQU8sS0FBS3BJLFVBQVo7QUFDQSxnQkFBSW9JLEtBQUsvRixLQUFULEVBQWdCO0FBQ1pnRSw0QkFBWTBCLFNBQVNDLElBQXJCO0FBQ0F2SCx1QkFBTyxJQUFQO0FBQ0gsYUFIRCxNQUlLO0FBQ0Q0Riw0QkFBWSxLQUFLL0csS0FBTCxDQUFXNEIsRUFBWCxDQUFja0gsS0FBS2hJLEVBQW5CLENBQVo7QUFDSDtBQUNKLFNBVEQsTUFVSztBQUNEaUcsd0JBQVksS0FBS3JHLFVBQWpCO0FBQ0g7QUFDRDtBQUNBLFlBQUksQ0FBQyxLQUFLQyxHQUFOLElBQWEsQ0FBQ29HLFNBQWxCLEVBQTZCO0FBQ3pCLG1CQUFPZCxRQUFROEMsTUFBUixDQUFlLElBQWYsQ0FBUDtBQUNIO0FBQ0QsWUFBSUMsaUJBQUo7QUFDQSxZQUFNMUYsVUFBVSxLQUFLckMsUUFBTCxDQUFjcUMsT0FBZCxFQUFoQjtBQUNBO0FBQ0EsWUFBTWMsU0FBUyxFQUFFMEMsSUFBSSxFQUFOLEVBQWY7QUFDQSxhQUFLbkcsR0FBTCxDQUFTc0ksVUFBVCxDQUFvQmpILE1BQXBCLEVBQTRCb0MsT0FBTzBDLEVBQW5DLEVBQXVDLEtBQUszRyxLQUE1QztBQUNBLGFBQUtRLEdBQUwsQ0FBUzRGLFNBQVQsQ0FBbUIsWUFBbkIsRUFBaUMsQ0FBQyxJQUFELEVBQU92RixHQUFQLEVBQVlvRCxNQUFaLENBQWpDO0FBQ0FBLGVBQU8wQyxFQUFQLENBQVU1RSxNQUFWLEdBQW1CLElBQW5CO0FBQ0E7QUFDQSxZQUFJLENBQUM0RyxJQUFELElBQVN4RixRQUFRcUIsS0FBakIsSUFBMEJyQixRQUFRaEMsSUFBdEMsRUFBNEM7QUFDeENnQyxvQkFBUWhDLElBQVIsQ0FBYWYsVUFBYjtBQUNIO0FBQ0QsWUFBSTtBQUNBO0FBQ0EsZ0JBQUl1SSxRQUFRLENBQUMzSCxJQUFiLEVBQW1CO0FBQ2Ysb0JBQU0rSCxRQUFRbkMsU0FBZDtBQUNBLG9CQUFNMUYsU0FBUzZILE1BQU0zSCxhQUFOLEVBQWY7QUFDQSxvQkFBSUYsVUFBVUEsT0FBT2UsSUFBUCxLQUFnQixXQUExQixJQUF5QyxDQUFDZ0MsT0FBTzBDLEVBQVAsQ0FBVWhHLEVBQXhELEVBQTREO0FBQ3hEc0QsMkJBQU8wQyxFQUFQLENBQVVoRyxFQUFWLEdBQWVvSSxNQUFNbEgsTUFBTixDQUFhbEIsRUFBNUI7QUFDSDtBQUNKO0FBQ0QsaUJBQUtSLEtBQUwsR0FBYSxLQUFLSyxHQUFMLENBQVNYLEtBQVQsQ0FBZThHLEVBQWYsQ0FBa0IxQyxPQUFPMEMsRUFBekIsRUFBNkJDLFNBQTdCLENBQWI7QUFDQSxnQkFBTW9DLFFBQVEsS0FBSzdJLEtBQW5CO0FBQ0E7QUFDQSxnQkFBSWEsUUFBUWdJLE1BQU1DLFdBQWQsSUFBNkIsQ0FBQ0QsTUFBTUUsU0FBTixFQUFsQyxFQUFxRDtBQUNqREYsc0JBQU1oSSxJQUFOO0FBQ0g7QUFDRDtBQUNBLGdCQUFJMkgsSUFBSixFQUFVO0FBQ04sb0JBQUlBLEtBQUt4SCxJQUFMLElBQWF3SCxLQUFLeEgsSUFBTCxLQUFjLElBQTNCLElBQW1Dd0gsS0FBS3hILElBQUwsS0FBYyxLQUFLWCxHQUExRCxFQUErRDtBQUMzRG1JLHlCQUFLeEgsSUFBTCxDQUFVZixVQUFWO0FBQ0g7QUFDRHVJLHFCQUFLaEksRUFBTCxHQUFVLEtBQUtSLEtBQUwsQ0FBVzBCLE1BQVgsQ0FBa0JsQixFQUE1QjtBQUNBLG9CQUFJLEtBQUtTLGFBQUwsTUFBd0IsQ0FBQyxLQUFLWixHQUFMLENBQVNBLEdBQXRDLEVBQ0ltSSxLQUFLeEgsSUFBTCxHQUFZLElBQVosQ0FESixLQUVLO0FBQ0Q7QUFDQTtBQUNBd0gseUJBQUt4SCxJQUFMLEdBQVksS0FBS1gsR0FBakI7QUFDSDtBQUNKO0FBQ0QsZ0JBQUkyQyxRQUFRcUIsS0FBWixFQUFtQjtBQUNmckIsd0JBQVFoQyxJQUFSLEdBQWUsSUFBZjtBQUNBZ0Msd0JBQVFxQixLQUFSLEdBQWdCLEtBQWhCO0FBQ0g7QUFDRHFFLHVCQUFXL0MsUUFBUUssT0FBUixDQUFnQixLQUFLZ0QsS0FBTCxDQUFXLEtBQUtoSixLQUFoQixFQUF1QlUsR0FBdkIsQ0FBaEIsRUFBNkN5RixJQUE3QyxDQUFrRCxZQUFNO0FBQy9ELHVCQUFPLE9BQUtjLFVBQUwsR0FBa0JkLElBQWxCLENBQXVCLFlBQU07QUFDaEMsMkJBQUs4QyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsMkJBQU8sT0FBS3hCLEtBQUwsQ0FBVyxPQUFLekgsS0FBaEIsRUFBdUJVLElBQUlTLE1BQUosRUFBdkIsQ0FBUDtBQUNILGlCQUhNLENBQVA7QUFJSCxhQUxVLENBQVg7QUFNSCxTQXZDRCxDQXdDQSxPQUFPK0gsQ0FBUCxFQUFVO0FBQ05SLHVCQUFXL0MsUUFBUThDLE1BQVIsQ0FBZVMsQ0FBZixDQUFYO0FBQ0g7QUFDRCxlQUFPUixTQUFTeEMsS0FBVCxDQUFlO0FBQUEsbUJBQU8sT0FBS2lELFVBQUwsQ0FBZ0IsTUFBaEIsRUFBc0JDLEdBQXRCLENBQVA7QUFBQSxTQUFmLENBQVA7QUFDSCxLOztzQkFDREosSyxrQkFBTWhJLEksRUFBTU4sRyxFQUFLO0FBQ2IsZUFBTyxLQUFLNEcsSUFBTCxDQUFVdEcsSUFBVixFQUFnQk4sSUFBSVMsTUFBSixFQUFoQixDQUFQO0FBQ0gsSzs7c0JBQ0Q4RixVLHlCQUFhO0FBQUE7O0FBQ1QsYUFBSzVHLEdBQUwsQ0FBUzRGLFNBQVQsQ0FBbUIsZUFBbkIsRUFBb0MsQ0FBQyxJQUFELEVBQU8sS0FBS3RGLFFBQVosQ0FBcEM7QUFDQSxZQUFNMEksUUFBUSxFQUFkO0FBQ0EsYUFBSyxJQUFNbEgsR0FBWCxJQUFrQixLQUFLdEMsS0FBdkIsRUFBOEI7QUFDMUIsZ0JBQU15SixRQUFRLEtBQUt6SixLQUFMLENBQVdzQyxHQUFYLENBQWQ7QUFDQSxnQkFBTW9ILE9BQU8sS0FBS3pDLGdCQUFMLENBQXNCM0UsR0FBdEIsRUFBMkJtSCxLQUEzQixFQUFrQyxJQUFsQyxDQUFiO0FBQ0EsZ0JBQUlDLElBQUosRUFBVTtBQUNORixzQkFBTXBILElBQU4sQ0FBV3NILElBQVg7QUFDSDtBQUNKO0FBQ0QsZUFBTzVELFFBQVE2RCxHQUFSLENBQVlILEtBQVosRUFBbUJsRCxJQUFuQixDQUF3QixZQUFNO0FBQ2pDLG1CQUFPLE9BQUt5QixTQUFMLENBQWUsT0FBSzVILEtBQXBCLEVBQTJCLE9BQUtXLFFBQUwsQ0FBY1EsTUFBZCxFQUEzQixDQUFQO0FBQ0gsU0FGTSxDQUFQO0FBR0gsSzs7c0JBQ0QyRixnQiw2QkFBaUIzRSxHLEVBQUttSCxLLEVBQU9yRSxJLEVBQU07QUFDL0I7QUFDQSxZQUFJLENBQUNxRSxNQUFNRyxJQUFYLEVBQWlCO0FBQ2I7QUFDQSxnQkFBTUEsT0FBTyxLQUFLQyxZQUFMLENBQWtCdkgsR0FBbEIsRUFBdUJtSCxLQUF2QixFQUE4QnJFLElBQTlCLENBQWI7QUFDQSxnQkFBSXdFLElBQUosRUFBVTtBQUNOO0FBQ0E7QUFDQTtBQUNBSCxzQkFBTUcsSUFBTixHQUFhQSxLQUFLdEQsSUFBTCxDQUFVO0FBQUEsMkJBQU1tRCxNQUFNRyxJQUFOLEdBQWEsSUFBbkI7QUFBQSxpQkFBVixFQUFtQztBQUFBLDJCQUFNSCxNQUFNRyxJQUFOLEdBQWEsSUFBbkI7QUFBQSxpQkFBbkMsQ0FBYjtBQUNIO0FBQ0o7QUFDRDtBQUNBLGVBQU9ILE1BQU1HLElBQWI7QUFDSCxLOztzQkFDREMsWSx5QkFBYXZILEcsRUFBS21ILEssRUFBT3JFLEksRUFBTTtBQUFBOztBQUMzQjtBQUNBLFlBQUk5QyxRQUFRLFNBQVosRUFBdUI7QUFDbkIsZ0JBQUksS0FBS3hCLFFBQUwsQ0FBY3VFLElBQWQsRUFBSixFQUEwQjtBQUN0QjtBQUNBLHVCQUFPLEtBQUt5RSxjQUFMLENBQW9CTCxLQUFwQixFQUEyQixLQUFLM0ksUUFBTCxDQUFjeUUsS0FBZCxFQUEzQixDQUFQO0FBQ0gsYUFIRCxNQUlLLElBQUlrRSxNQUFNdEksSUFBTixJQUFjc0ksTUFBTTdHLEtBQXhCLEVBQStCO0FBQ2hDO0FBQ0E2RyxzQkFBTXRJLElBQU4sQ0FBV2YsVUFBWDtBQUNBcUosc0JBQU10SSxJQUFOLEdBQWEsSUFBYjtBQUNIO0FBQ0o7QUFDRDtBQUNBLFlBQUlpRSxTQUFTLElBQWIsRUFBbUI7QUFDZnFFLGtCQUFNNUksR0FBTixHQUFZdUUsSUFBWjtBQUNIO0FBQ0Q7QUFDQSxZQUFJcUUsTUFBTXhFLEtBQVYsRUFBaUI7QUFDYjtBQUNBLGdCQUFJRyxTQUFTLElBQWIsRUFBbUI7QUFDZix1QkFBT3FFLE1BQU14RSxLQUFOLENBQVlqRSxJQUFaLENBQWlCb0UsSUFBakIsRUFBdUJxRSxNQUFNdEksSUFBN0IsRUFBbUNtRixJQUFuQyxDQUF3QyxZQUFNO0FBQ2pELDJCQUFPLE9BQUt3RCxjQUFMLENBQW9CTCxLQUFwQixFQUEyQkEsTUFBTXhFLEtBQWpDLENBQVA7QUFDSCxpQkFGTSxDQUFQO0FBR0g7QUFDRDtBQUNBLGdCQUFJd0UsTUFBTWpHLE1BQVYsRUFBa0I7QUFDZDtBQUNIO0FBQ0o7QUFDRCxZQUFJckMsT0FBT3NJLE1BQU10SSxJQUFqQjtBQUNBO0FBQ0EsWUFBSSxDQUFDQSxJQUFELElBQVNzSSxNQUFNNUksR0FBbkIsRUFBd0I7QUFDcEIsZ0JBQUksT0FBTzRJLE1BQU01SSxHQUFiLEtBQXFCLFFBQXpCLEVBQW1DO0FBQy9CO0FBQ0E0SSxzQkFBTXhFLEtBQU4sR0FBYyxJQUFJRCxLQUFKLENBQVV5RSxNQUFNNUksR0FBaEIsRUFBcUIsQ0FBckIsQ0FBZDtBQUNBLHVCQUFPLEtBQUtpSixjQUFMLENBQW9CTCxLQUFwQixFQUEyQkEsTUFBTXhFLEtBQWpDLENBQVA7QUFDSCxhQUpELE1BS0s7QUFDRDtBQUNBLG9CQUFJLE9BQU93RSxNQUFNNUksR0FBYixLQUFxQixVQUFyQixJQUFtQyxFQUFFTSxnQkFBZ0JzSSxNQUFNNUksR0FBeEIsQ0FBdkMsRUFBcUU7QUFDakVNLDJCQUFPLElBQUlzSSxNQUFNNUksR0FBVixDQUFjLEtBQUtMLEdBQW5CLEVBQXdCLEVBQXhCLENBQVA7QUFDSDtBQUNELG9CQUFJLENBQUNXLElBQUwsRUFBVztBQUNQQSwyQkFBT3NJLE1BQU01SSxHQUFiO0FBQ0g7QUFDSjtBQUNKO0FBQ0Q7QUFDQSxZQUFJTSxJQUFKLEVBQVU7QUFDTixtQkFBT0EsS0FBSzRGLE1BQUwsQ0FBWTBDLEtBQVosRUFBb0JBLE1BQU14RSxLQUFOLElBQWUsS0FBS25FLFFBQXhDLEVBQW1ELElBQW5ELENBQVA7QUFDSDtBQUNKLEs7O3NCQUNEd0ksVSx1QkFBV25JLEksRUFBTW9JLEcsRUFBSztBQUNsQjs7O0FBR0EsWUFBSSxLQUFLL0ksR0FBVCxFQUFjO0FBQ1YsaUJBQUtBLEdBQUwsQ0FBU3VKLEtBQVQsQ0FBZSxvQkFBZixFQUFxQyxDQUFDUixHQUFELEVBQU1wSSxJQUFOLENBQXJDO0FBQ0g7QUFDRCxlQUFPLElBQVA7QUFDSCxLOztzQkFDRDJJLGMsMkJBQWVySCxHLEVBQUtuQixNLEVBQVE7QUFBQTs7QUFDeEIsZUFBTyxLQUFLZCxHQUFMLENBQVN3SixhQUFULENBQXVCMUksT0FBTzZCLE9BQVAsRUFBdkIsRUFBeUNWLElBQUl0QixJQUE3QyxFQUFtRG1GLElBQW5ELENBQXdELGdCQUFRO0FBQ25FLG1CQUFPbkYsS0FBSzRGLE1BQUwsQ0FBWXRFLEdBQVosRUFBaUJuQixNQUFqQixFQUF5QixNQUF6QixDQUFQO0FBQ0gsU0FGTSxDQUFQO0FBR0gsSzs7c0JBQ0QyRyxZLDJCQUFlO0FBQ1g7QUFDQSxZQUFNZ0MsTUFBTSxLQUFLdkQsU0FBakI7QUFDQSxhQUFLLElBQUk1RCxJQUFJbUgsSUFBSWxILE1BQUosR0FBYSxDQUExQixFQUE2QkQsS0FBSyxDQUFsQyxFQUFxQ0EsR0FBckMsRUFBMEM7QUFDdEMsZ0JBQUltSCxJQUFJbkgsQ0FBSixLQUFVbUgsSUFBSW5ILENBQUosRUFBTzFDLFVBQXJCLEVBQWlDO0FBQzdCNkosb0JBQUluSCxDQUFKLEVBQU8xQyxVQUFQO0FBQ0g7QUFDSjtBQUNEO0FBQ0EsYUFBS3NHLFNBQUwsR0FBaUIsRUFBakI7QUFDSCxLOzs7RUF2VWlCOUcsTzs7QUEwVXRCOzs7SUFDTXNLLFU7OztBQUNGLHdCQUFZMUosR0FBWixFQUFpQnFCLE1BQWpCLEVBQXlCO0FBQUE7O0FBQUEsdURBQ3JCLG9CQUFNckIsR0FBTixFQUFXcUIsTUFBWCxDQURxQjs7QUFFckIsZ0JBQUtzSSxHQUFMLEdBQVd0SSxPQUFPOEUsRUFBbEI7QUFGcUI7QUFHeEI7O3lCQUNEOUUsTSxxQkFBUztBQUNMLGVBQU8sS0FBS3NJLEdBQVo7QUFDSCxLOzs7RUFQb0IxRCxPOztJQVVuQjJELFM7QUFDRix1QkFBWUMsRUFBWixFQUFnQnhJLE1BQWhCLEVBQXdCckIsR0FBeEIsRUFBNkI7QUFBQTs7QUFDekIsYUFBSzRFLElBQUwsR0FBWSxFQUFaO0FBQ0EsYUFBSzVFLEdBQUwsR0FBV0EsR0FBWDtBQUNIOzt3QkFDRCtHLEcsZ0JBQUluQyxJLEVBQU12RCxNLEVBQVE7QUFDZCxhQUFLdUQsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsWUFBTWtGLElBQUksS0FBSzlKLEdBQWY7QUFDQThKLFVBQUU5SixHQUFGLENBQU04RyxTQUFOLEdBQWtCQyxHQUFsQixDQUFzQitDLEVBQUV4SixRQUFGLENBQVcrRSxNQUFYLENBQWtCLEtBQUtULElBQXZCLENBQXRCLEVBQW9ELEVBQUVvQyxRQUFRLElBQVYsRUFBcEQ7QUFDSCxLOzt3QkFDRCtDLEcsa0JBQU07QUFDRixlQUFPLEtBQUtuRixJQUFaO0FBQ0gsSzs7Ozs7QUFHTCxJQUFJb0YsUUFBUSxJQUFaOztJQUNNQyxVOzs7QUFDRix3QkFBWTVJLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsWUFBTWhDLFFBQVEsQ0FBQ2dDLFVBQVUsRUFBWCxFQUFlaEMsS0FBZixJQUF3QjZLLE9BQU83SyxLQUE3Qzs7QUFFQTtBQUhnQix1REFFaEIscUJBQU1BLEtBQU4sQ0FGZ0I7O0FBSWhCLGdCQUFLZ0MsTUFBTCxHQUFjLFFBQUtoQyxLQUFMLENBQVd1RCxNQUFYLENBQWtCO0FBQzVCbkIsa0JBQU0sS0FEc0I7QUFFNUIwSSxxQkFBUyxLQUZtQjtBQUc1QkMsbUJBQU87QUFIcUIsU0FBbEIsRUFJWC9JLE1BSlcsRUFJSCxJQUpHLENBQWQ7QUFLQSxnQkFBS3JCLEdBQUwsR0FBVyxRQUFLcUIsTUFBTCxDQUFZckIsR0FBdkI7QUFDQSxnQkFBS29ILEtBQUwsR0FBYTlCLFFBQVFLLE9BQVIsRUFBYjtBQUNBLGdCQUFLMEUsU0FBTCxHQUFpQixFQUFqQjtBQUNBLGdCQUFLaEwsS0FBTCxDQUFXdUQsTUFBWCxVQUF3QixRQUFLdkQsS0FBTCxDQUFXaUwsV0FBbkM7QUFaZ0I7QUFhbkI7O3lCQUNEekosTSxxQkFBUztBQUNMLGVBQU8sS0FBSzBKLFdBQUwsQ0FBaUJ6SixNQUFqQixFQUFQO0FBQ0gsSzs7eUJBQ0RDLFksMkJBQWU7QUFDWCxlQUFPLEtBQUt3SixXQUFMLENBQWlCdkosUUFBakIsRUFBUDtBQUNILEs7O3lCQUNEd0osVSx1QkFBVy9JLEksRUFBTTtBQUNiLFlBQUlMLE1BQU0sS0FBS2lKLFNBQUwsQ0FBZTVJLElBQWYsQ0FBVjtBQUNBLFlBQUksT0FBT0wsR0FBUCxLQUFlLFVBQW5CLEVBQStCO0FBQzNCQSxrQkFBTSxLQUFLaUosU0FBTCxDQUFlNUksSUFBZixJQUF1QkwsSUFBSSxJQUFKLENBQTdCO0FBQ0g7QUFDRCxlQUFPQSxHQUFQO0FBQ0gsSzs7eUJBQ0RxSixVLHVCQUFXaEosSSxFQUFNaUosTyxFQUFTO0FBQ3RCLGFBQUtMLFNBQUwsQ0FBZTVJLElBQWYsSUFBdUJpSixPQUF2QjtBQUNILEs7O3lCQUNEOUssVSx5QkFBYTtBQUNULGFBQUtvQyxVQUFMLEdBQWtCcEMsVUFBbEI7QUFDQSw0QkFBTUEsVUFBTjtBQUNILEs7QUFDRDs7O3lCQUNBMEksVSx1QkFBV2xILEcsRUFBS29GLE0sRUFBUW5GLE0sRUFBUTtBQUM1QjtBQUNBLFlBQUlELGVBQWVoQyxPQUFmLElBQ0MsT0FBT2dDLEdBQVAsS0FBZSxVQUFmLElBQTZCQSxJQUFJdUosU0FBSixZQUF5QnZMLE9BRDNELEVBQ3FFO0FBQ2pFZ0Msa0JBQU0sRUFBRXdKLFVBQVV4SixHQUFaLEVBQU47QUFDSDtBQUNEO0FBQ0EsWUFBSSxPQUFPQSxJQUFJd0osUUFBWCxJQUF1QixXQUEzQixFQUF3QztBQUNwQyxtQkFBTyxLQUFLQyxVQUFMLENBQWdCekosR0FBaEIsRUFBcUJvRixNQUFyQixFQUE2Qm5GLE1BQTdCLENBQVA7QUFDSDtBQUNEO0FBQ0FtRixpQkFBU0EsV0FBV3BGLGVBQWUwSixLQUFmLEdBQXVCLEVBQXZCLEdBQTRCLEVBQXZDLENBQVQ7QUFDQSxhQUFLLElBQU1DLE1BQVgsSUFBcUIzSixHQUFyQixFQUEwQjtBQUN0QixnQkFBSTRKLFFBQVE1SixJQUFJMkosTUFBSixDQUFaO0FBQ0E7QUFDQSxnQkFBSSxPQUFPQyxLQUFQLEtBQWlCLFVBQWpCLElBQStCQSxNQUFNTCxTQUFOLFlBQTJCdkwsT0FBOUQsRUFBdUU7QUFDbkU0TCx3QkFBUSxFQUFFSixVQUFVSSxLQUFaLEVBQVI7QUFDSDtBQUNELGdCQUFJQSxTQUFTLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBMUIsSUFDQSxFQUFFQSxpQkFBaUIsS0FBSzNMLEtBQUwsQ0FBVzRMLGNBQTlCLENBREEsSUFDaUQsRUFBRUQsaUJBQWlCRSxNQUFuQixDQURyRCxFQUNpRjtBQUM3RSxvQkFBSUYsaUJBQWlCRyxJQUFyQixFQUEyQjtBQUN2QjNFLDJCQUFPdUUsTUFBUCxJQUFpQixJQUFJSSxJQUFKLENBQVNILEtBQVQsQ0FBakI7QUFDSCxpQkFGRCxNQUdLO0FBQ0Qsd0JBQU1JLE9BQU8sS0FBSzlDLFVBQUwsQ0FBZ0IwQyxLQUFoQixFQUF3QkEsaUJBQWlCRixLQUFqQixHQUF5QixFQUF6QixHQUE4QixFQUF0RCxFQUEyRHpKLE1BQTNELENBQWI7QUFDQSx3QkFBSStKLFNBQVMsSUFBYixFQUFtQjtBQUNmNUUsK0JBQU91RSxNQUFQLElBQWlCSyxJQUFqQjtBQUNIO0FBQ0o7QUFDSixhQVhELE1BWUs7QUFDRDVFLHVCQUFPdUUsTUFBUCxJQUFpQkMsS0FBakI7QUFDSDtBQUNKO0FBQ0QsZUFBT3hFLE1BQVA7QUFDSCxLOzt5QkFDRE0sUyx3QkFBWTtBQUNSLGVBQU8sS0FBS3VFLE9BQVo7QUFDSCxLOzt5QkFDREMsWSx5QkFBYXpDLEMsRUFBRztBQUNaLFlBQUlBLENBQUosRUFBTztBQUNILGdCQUFNckMsU0FBVXFDLEVBQUVyQyxNQUFGLElBQVlxQyxFQUFFMEMsVUFBOUI7QUFDQSxnQkFBSS9FLFVBQVVBLE9BQU9nRixZQUFyQixFQUFtQztBQUMvQixvQkFBTUMsVUFBVWpGLE9BQU9nRixZQUFQLENBQW9CLFNBQXBCLENBQWhCO0FBQ0Esb0JBQUlDLE9BQUosRUFBYTtBQUNULHlCQUFLQyxRQUFMLENBQWNsRixNQUFkLEVBQXNCO0FBQUEsK0JBQVE3RixLQUFLWCxHQUFMLENBQVN5TCxPQUFULENBQWlCQSxPQUFqQixDQUFSO0FBQUEscUJBQXRCO0FBQ0g7QUFDRCxvQkFBTWhILFFBQVErQixPQUFPZ0YsWUFBUCxDQUFvQixPQUFwQixDQUFkO0FBQ0Esb0JBQUkvRyxLQUFKLEVBQVc7QUFDUCx5QkFBS2lILFFBQUwsQ0FBY2xGLE1BQWQsRUFBc0I7QUFBQSwrQkFBUTdGLEtBQUtILElBQUwsQ0FBVWlFLEtBQVYsQ0FBUjtBQUFBLHFCQUF0QjtBQUNIO0FBQ0o7QUFDSjtBQUNKLEs7O3lCQUNEL0UsTyxzQkFBVTtBQUNOLGVBQU8sS0FBS3NDLFVBQUwsR0FBa0J0QyxPQUFsQixFQUFQO0FBQ0gsSzs7eUJBQ0RzRixPLHNCQUFVO0FBQUE7O0FBQ04sWUFBSSxDQUFDLEtBQUt1RixXQUFWLEVBQXVCO0FBQ25CLG1CQUFPakYsUUFBUUssT0FBUixDQUFnQixJQUFoQixDQUFQO0FBQ0g7QUFDRCxlQUFPLEtBQUszRCxVQUFMLEdBQWtCZ0QsT0FBbEIsR0FBNEJjLElBQTVCLENBQWlDLGdCQUFRO0FBQzVDLG9CQUFLRixTQUFMLENBQWUsV0FBZixFQUE0QixDQUFDLFFBQUsvRSxNQUFMLEVBQUQsQ0FBNUI7QUFDQSxtQkFBT0YsSUFBUDtBQUNILFNBSE0sQ0FBUDtBQUlILEs7O3lCQUNEZ0wsUSxxQkFBU3RMLEcsRUFBSztBQUFBOztBQUNWLFlBQU11TCxRQUFRLEtBQUt2SyxNQUFMLENBQVl1SyxLQUExQjtBQUNBLFlBQUluSSxTQUFTLElBQWI7QUFDQSxZQUFJcEQsUUFBUSxFQUFaLEVBQWdCO0FBQ1osbUJBQU9pRixRQUFRSyxPQUFSLENBQWdCLEtBQUtrRyxVQUFMLENBQWdCLEVBQWhCLEVBQW9CLElBQUlDLEtBQUosQ0FBVSw4QkFBVixDQUFwQixDQUFoQixDQUFQO0FBQ0g7QUFDRCxZQUFJO0FBQ0EsZ0JBQUlGLEtBQUosRUFBVztBQUNQLG9CQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDN0I7QUFDQW5JLDZCQUFTbUksTUFBTXZMLEdBQU4sQ0FBVDtBQUNILGlCQUhELE1BSUs7QUFDRDtBQUNBb0QsNkJBQVNtSSxNQUFNdkwsR0FBTixDQUFUO0FBQ0g7QUFDRCxvQkFBSSxPQUFPb0QsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM1QnBELDBCQUFNb0QsTUFBTjtBQUNBQSw2QkFBUyxJQUFUO0FBQ0g7QUFDSjtBQUNELGdCQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNULG9CQUFJcEQsUUFBUSxRQUFaLEVBQXNCO0FBQ2xCb0QsNkJBQVMsRUFBVDtBQUNILGlCQUZELE1BR0s7QUFDREEsNkJBQVMsS0FBS3NJLGdCQUFMLENBQXNCMUwsR0FBdEIsQ0FBVDtBQUNIO0FBQ0o7QUFDSixTQXZCRCxDQXdCQSxPQUFPd0ksQ0FBUCxFQUFVO0FBQ05wRixxQkFBUyxLQUFLb0ksVUFBTCxDQUFnQnhMLEdBQWhCLEVBQXFCd0ksQ0FBckIsQ0FBVDtBQUNIO0FBQ0Q7QUFDQSxZQUFJLENBQUNwRixPQUFPcUMsSUFBWixFQUFrQjtBQUNkckMscUJBQVM2QixRQUFRSyxPQUFSLENBQWdCbEMsTUFBaEIsQ0FBVDtBQUNIO0FBQ0Q7QUFDQUEsaUJBQVNBLE9BQ0pxQyxJQURJLENBQ0M7QUFBQSxtQkFBVWtHLE9BQU9DLFVBQVAsR0FBb0JELE9BQU9qSixPQUEzQixHQUFxQ2lKLE1BQS9DO0FBQUEsU0FERCxFQUVKbkcsS0FGSSxDQUVFO0FBQUEsbUJBQU8sUUFBS2dHLFVBQUwsQ0FBZ0J4TCxHQUFoQixFQUFxQjBJLEdBQXJCLENBQVA7QUFBQSxTQUZGLENBQVQ7QUFHQSxlQUFPdEYsTUFBUDtBQUNILEs7O3lCQUNEaUksUSxxQkFBU2xGLE0sRUFBUWtFLE8sRUFBUztBQUN0QixZQUFNL0osT0FBTyxLQUFLdEIsS0FBTCxDQUFXNEIsRUFBWCxDQUFjdUYsTUFBZCxDQUFiO0FBQ0EsWUFBSTdGLElBQUosRUFBVTtBQUNOK0osb0JBQVEvSixLQUFLWSxNQUFiO0FBQ0g7QUFDSixLOzt5QkFDRHdLLGdCLDZCQUFpQjFMLEcsRUFBSztBQUNsQixlQUFPLElBQVA7QUFDSCxLOzt5QkFDRG1KLGEsMEJBQWNyRixLLEVBQU8rSCxHLEVBQUs7QUFBQTs7QUFDdEIsWUFBSXZMLGFBQUo7QUFDQSxZQUFJd0QsTUFBTUgsS0FBTixJQUFlLENBQUNHLE1BQU14RCxJQUExQixFQUFnQztBQUM1QkEsbUJBQU8sS0FBS2dMLFFBQUwsQ0FBY3hILE1BQU1KLElBQXBCLEVBQ0YrQixJQURFLENBQ0c7QUFBQSx1QkFBTSxRQUFLUSxVQUFMLENBQWdCSCxFQUFoQixFQUFvQjFFLElBQXBCLENBQU47QUFBQSxhQURILENBQVA7QUFFSCxTQUhELE1BSUs7QUFDRGQsbUJBQU8yRSxRQUFRSyxPQUFSLENBQWdCeEIsTUFBTXhELElBQXRCLENBQVA7QUFDSDtBQUNELGVBQU9BLElBQVA7QUFDSCxLOzt5QkFDRDJGLFUsdUJBQVdILEUsRUFBSTFFLEksRUFBTTtBQUNqQixZQUFJTCxZQUFKO0FBQ0EsWUFBSSxPQUFPK0UsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzFCLGdCQUFJQSxHQUFHd0UsU0FBSCxZQUF3QlYsVUFBNUIsRUFBd0M7QUFDcEM7QUFDQSx1QkFBTyxJQUFJOUQsRUFBSixDQUFPLEVBQUVuRyxLQUFLLElBQVAsRUFBYXlCLFVBQWIsRUFBbUIwSyxRQUFRdkMsU0FBM0IsRUFBUCxDQUFQO0FBQ0gsYUFIRCxNQUlLLElBQUl6RCxHQUFHd0UsU0FBSCxZQUF3QnZMLE9BQTVCLEVBQXFDO0FBQ3RDO0FBQ0EsdUJBQU8sSUFBSStHLEVBQUosQ0FBTyxJQUFQLEVBQWEsRUFBRTFFLFVBQUYsRUFBYixDQUFQO0FBQ0gsYUFISSxNQUlBO0FBQ0Q7QUFDQTBFLHFCQUFLQSxHQUFHLElBQUgsQ0FBTDtBQUNIO0FBQ0o7QUFDRCxZQUFJQSxjQUFjL0csT0FBbEIsRUFBMkI7QUFDdkJnQyxrQkFBTStFLEVBQU47QUFDSCxTQUZELE1BR0s7QUFDRDtBQUNBL0Usa0JBQU0sSUFBSXNJLFVBQUosQ0FBZSxJQUFmLEVBQXFCLEVBQUVqSSxVQUFGLEVBQVEwRSxNQUFSLEVBQXJCLENBQU47QUFDSDtBQUNELGVBQU8vRSxHQUFQO0FBQ0gsSztBQUNEOzs7eUJBQ0FaLEksaUJBQUtILEcsRUFBSztBQUNOLGVBQU8sS0FBS2tHLE1BQUwsQ0FBWSxLQUFLeEcsVUFBakIsRUFBOEJNLE9BQU8sS0FBS2dCLE1BQUwsQ0FBWStJLEtBQWpELENBQVA7QUFDSCxLO0FBQ0Q7Ozt5QkFDQXFCLE8sb0JBQVFoSyxJLEVBQWU7QUFBQSwwQ0FBTjJLLElBQU07QUFBTkEsZ0JBQU07QUFBQTs7QUFDbkIsYUFBS0MsS0FBTCxDQUFXNUssSUFBWCxFQUFpQjJLLElBQWpCO0FBQ0gsSzs7eUJBQ0RDLEssa0JBQU01SyxJLEVBQU02SyxJLEVBQU07QUFDZCxhQUFLMUcsU0FBTCxDQUFlbkUsSUFBZixFQUFxQjZLLElBQXJCO0FBQ0gsSzs7eUJBQ0RDLE0sbUJBQU85SyxJLEVBQU07QUFDVCxlQUFPLEtBQUtwQyxLQUFMLENBQVdtTixJQUFYLENBQWdCLFlBQW1CO0FBQUEsK0NBQU5KLElBQU07QUFBTkEsb0JBQU07QUFBQTs7QUFDdEMsaUJBQUtDLEtBQUwsQ0FBVzVLLElBQVgsRUFBaUIySyxJQUFqQjtBQUNILFNBRk0sRUFFSixJQUZJLENBQVA7QUFHSCxLOzt5QkFDRDVLLEUsZUFBR0MsSSxFQUFNaUosTyxFQUFTO0FBQ2QsYUFBSy9JLFdBQUwsQ0FBaUJGLElBQWpCLEVBQXVCaUosT0FBdkI7QUFDSCxLOzt5QkFDRGhELEcsZ0JBQUlDLE0sRUFBUXRHLE0sRUFBUTtBQUNoQnNHLGVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUJ0RyxNQUFuQjtBQUNILEs7O3lCQUNEa0ksSyxrQkFBTTlILEksRUFBTWdMLEUsRUFBSTtBQUNaLGFBQUs3RyxTQUFMLENBQWVuRSxJQUFmLEVBQXFCZ0wsRUFBckI7QUFDQSxhQUFLN0csU0FBTCxDQUFlLFdBQWYsRUFBNEI2RyxFQUE1QjtBQUNBO0FBQ0EsWUFBSSxLQUFLcEwsTUFBTCxDQUFZcUwsS0FBaEIsRUFBdUI7QUFDbkIsaUJBQUssSUFBSXBLLElBQUksQ0FBYixFQUFnQkEsSUFBSW1LLEdBQUdsSyxNQUF2QixFQUErQkQsR0FBL0IsRUFBb0M7QUFDaENxSyx3QkFBUXBELEtBQVIsQ0FBY2tELEdBQUduSyxDQUFILENBQWQ7QUFDQSxvQkFBSW1LLEdBQUduSyxDQUFILGFBQWlCd0osS0FBckIsRUFBNEI7QUFDeEIsd0JBQUljLE9BQU9ILEdBQUduSyxDQUFILEVBQU1nRixPQUFqQjtBQUNBLHdCQUFJc0YsS0FBS2pKLE9BQUwsQ0FBYSxxQkFBYixNQUF3QyxDQUE1QyxFQUErQztBQUMzQ2lKLCtCQUFPQSxLQUFLQyxPQUFMLENBQWEsaUJBQWIsRUFBZ0MsRUFBaEMsQ0FBUDtBQUNBL0UsaUNBQVNDLElBQVQsQ0FBYytFLFNBQWQsMkZBQWdIRixJQUFoSDtBQUNILHFCQUhELE1BSUs7QUFDREEsZ0NBQVEsd0NBQVI7QUFDQSw2QkFBS3ZOLEtBQUwsQ0FBV2lJLE9BQVgsQ0FBbUIsRUFBRXlGLE1BQU0sT0FBUixFQUFpQkgsTUFBTUEsSUFBdkIsRUFBNkJJLFFBQVEsQ0FBQyxDQUF0QyxFQUFuQjtBQUNIO0FBQ0o7QUFDSjtBQUNEO0FBQ0g7QUFDRDtBQUNILEs7QUFDRDs7O3lCQUNBekcsTSxtQkFBT3JGLEksRUFBTWIsRyxFQUFLSyxNLEVBQVE7QUFBQTs7QUFDdEIsYUFBS1gsVUFBTCxHQUFtQixPQUFPbUIsSUFBUCxLQUFnQixRQUFqQixHQUNkLEtBQUs3QixLQUFMLENBQVcySSxNQUFYLENBQWtCOUcsSUFBbEIsQ0FEYyxHQUViQSxRQUFRNEcsU0FBU0MsSUFGdEI7QUFHQSxZQUFNa0YsWUFBWSxDQUFDLEtBQUs1QixPQUF4QjtBQUNBLFlBQUl6RyxPQUFPLElBQVg7QUFDQSxZQUFJcUksU0FBSixFQUFlO0FBQ1gsZ0JBQUlqRCxLQUFKLEVBQVc7QUFDUCxxQkFBSzNLLEtBQUwsQ0FBV3NDLFdBQVgsQ0FBdUIsU0FBdkIsRUFBa0M7QUFBQSwyQkFBSyxRQUFLMkosWUFBTCxDQUFrQnpDLENBQWxCLENBQUw7QUFBQSxpQkFBbEM7QUFDQW1CLHdCQUFRLEtBQVI7QUFDSDtBQUNELGdCQUFJLE9BQU8zSixHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDekJBLHNCQUFNLElBQUltRSxLQUFKLENBQVVuRSxHQUFWLEVBQWUsQ0FBZixDQUFOO0FBQ0g7QUFDRCxpQkFBS2tLLFdBQUwsR0FBbUIsS0FBSzJDLFlBQUwsQ0FBa0I3TSxHQUFsQixDQUFuQjtBQUNBLGlCQUFLa0ssV0FBTCxDQUFpQjlGLEtBQWpCLENBQXVCb0MsVUFBdkIsR0FBb0MsSUFBcEM7QUFDSCxTQVZELE1BV0s7QUFDRCxnQkFBSSxPQUFPeEcsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCdUUsdUJBQU92RSxHQUFQO0FBQ0gsYUFGRCxNQUdLO0FBQ0Qsb0JBQUksS0FBS0wsR0FBVCxFQUFjO0FBQ1Y0RSwyQkFBT3ZFLElBQUlpRCxLQUFKLEdBQVltQixLQUFaLENBQWtCRyxJQUFsQixJQUEwQixLQUFLdkQsTUFBTCxDQUFZK0ksS0FBN0M7QUFDSCxpQkFGRCxNQUdLO0FBQ0R4RiwyQkFBT3ZFLElBQUlXLFFBQUosRUFBUDtBQUNIO0FBQ0o7QUFDSjtBQUNELFlBQU1tTSxNQUFNLEtBQUtuTCxVQUFMLEVBQVo7QUFDQSxZQUFNMkUsVUFBVSxLQUFLNEQsV0FBckI7QUFDQSxZQUFNbkQsUUFBUVQsUUFBUW5HLElBQVIsQ0FBYW9FLElBQWIsRUFBbUJ1SSxHQUFuQixFQUNUckgsSUFEUyxDQUNKO0FBQUEsbUJBQU0sUUFBSzBELGFBQUwsQ0FBbUI3QyxRQUFRaEUsT0FBUixFQUFuQixFQUFzQ3dLLEdBQXRDLENBQU47QUFBQSxTQURJLEVBRVRySCxJQUZTLENBRUo7QUFBQSxtQkFBUW5GLEtBQUs0RixNQUFMLENBQVlyRixJQUFaLEVBQWtCeUYsT0FBbEIsQ0FBUjtBQUFBLFNBRkksRUFHVGIsSUFIUyxDQUdKLGdCQUFRO0FBQ2Qsb0JBQUt1RixPQUFMLENBQWF0RSxHQUFiLENBQWlCSixRQUFRbEMsS0FBUixDQUFjRyxJQUEvQixFQUFxQyxFQUFFb0MsUUFBUSxJQUFWLEVBQXJDO0FBQ0Esb0JBQUtwQixTQUFMLENBQWUsV0FBZixFQUE0QixDQUFDLFFBQUsvRSxNQUFMLEVBQUQsQ0FBNUI7QUFDQSxtQkFBT3VNLElBQVA7QUFDSCxTQVBhLENBQWQ7QUFRQSxhQUFLaEcsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV3RCLElBQVgsQ0FBZ0I7QUFBQSxtQkFBTXNCLEtBQU47QUFBQSxTQUFoQixDQUFiO0FBQ0EsZUFBT0EsS0FBUDtBQUNILEs7O3lCQUNEcEYsVSx5QkFBYTtBQUNULFlBQUksS0FBS3VJLFdBQVQsRUFBc0I7QUFDbEIsZ0JBQU01SixPQUFPLEtBQUs0SixXQUFMLENBQWlCNUgsT0FBakIsR0FBMkJoQyxJQUF4QztBQUNBLGdCQUFJQSxJQUFKLEVBQ0ksT0FBT0EsSUFBUDtBQUNQO0FBQ0QsZUFBTyxJQUFJc0YsT0FBSixDQUFZLElBQVosRUFBa0IsRUFBbEIsQ0FBUDtBQUNILEs7O3lCQUNEaUgsWSx5QkFBYXpJLEssRUFBTztBQUFBOztBQUNoQixhQUFLbkUsUUFBTCxHQUFnQm1FLEtBQWhCO0FBQ0EsWUFBTW9GLEtBQUssU0FBTEEsRUFBSyxDQUFDQyxDQUFEO0FBQUEsbUJBQU91RCxXQUFXLFlBQU07QUFDL0Isd0JBQUs3TSxJQUFMLENBQVVzSixDQUFWO0FBQ0gsYUFGaUIsRUFFZixDQUZlLENBQVA7QUFBQSxTQUFYO0FBR0EsYUFBS3VCLE9BQUwsR0FBZSxJQUFLLEtBQUtoSyxNQUFMLENBQVk4SyxNQUFqQixDQUF5QnRDLEVBQXpCLEVBQTZCLEtBQUt4SSxNQUFsQyxFQUEwQyxJQUExQyxDQUFmO0FBQ0E7QUFDQSxZQUFJLEtBQUt0QixVQUFMLEtBQW9CK0gsU0FBU0MsSUFBN0IsSUFBcUMsS0FBSzFHLE1BQUwsQ0FBWWlNLFNBQVosS0FBMEIsS0FBbkUsRUFBMEU7QUFDdEUsZ0JBQU1DLE9BQU8sS0FBS3hOLFVBQWxCO0FBQ0EsaUJBQUtWLEtBQUwsQ0FBV21PLElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCRixJQUF2QixFQUE2QixlQUE3QjtBQUNBRix1QkFBVyxZQUFNO0FBQ2Isd0JBQUtoTyxLQUFMLENBQVdtTyxJQUFYLENBQWdCRSxTQUFoQixDQUEwQkgsSUFBMUIsRUFBZ0MsZUFBaEM7QUFDQSx3QkFBS2xPLEtBQUwsQ0FBV21PLElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCRixJQUF2QixFQUE2QixVQUE3QjtBQUNILGFBSEQsRUFHRyxFQUhIO0FBSUg7QUFDRCxZQUFJLENBQUM5SSxLQUFMLEVBQVk7QUFDUjtBQUNBLGdCQUFJa0osWUFBWSxLQUFLdEMsT0FBTCxDQUFhdEIsR0FBYixFQUFoQjtBQUNBLGdCQUFJLENBQUM0RCxTQUFMLEVBQWdCO0FBQ1pBLDRCQUFZLEtBQUt0TSxNQUFMLENBQVkrSSxLQUF4QjtBQUNBLHFCQUFLaUIsT0FBTCxDQUFhdEUsR0FBYixDQUFpQjRHLFNBQWpCLEVBQTRCLEVBQUUzRyxRQUFRLElBQVYsRUFBNUI7QUFDSDtBQUNEdkMsb0JBQVEsSUFBSUQsS0FBSixDQUFVbUosU0FBVixFQUFxQixDQUFyQixDQUFSO0FBQ0gsU0FSRCxNQVNLLElBQUksS0FBSzNOLEdBQVQsRUFBYztBQUNmeUUsa0JBQU05QixPQUFOLEdBQWdCaEMsSUFBaEIsR0FBdUIsSUFBdkI7QUFDQSxnQkFBSThELE1BQU1JLElBQU4sRUFBSixFQUFrQjtBQUNkSix3QkFBUUEsTUFBTW5CLEtBQU4sRUFBUjtBQUNILGFBRkQsTUFHSztBQUNEbUIsd0JBQVEsSUFBSUQsS0FBSixDQUFVLEtBQUtuRCxNQUFMLENBQVkrSSxLQUF0QixFQUE2QixDQUE3QixDQUFSO0FBQ0g7QUFDSjtBQUNELGVBQU8zRixLQUFQO0FBQ0gsSztBQUNEOzs7eUJBQ0FvSCxVLHVCQUFXeEwsRyxFQUFLMEksRyxFQUFLO0FBQ2pCLGFBQUtRLEtBQUwsQ0FBVyxtQkFBWCxFQUFnQyxDQUFDUixHQUFELEVBQU0xSSxHQUFOLENBQWhDO0FBQ0EsZUFBTyxFQUFFdU4sVUFBVSxHQUFaLEVBQVA7QUFDSCxLOzt5QkFDRC9DLFUsdUJBQVd6SixHLEVBQUtvRixNLEVBQVFuRixNLEVBQVE7QUFDNUIsWUFBTWhCLE1BQU1lLElBQUl3SixRQUFKLEtBQWlCLElBQWpCLEdBQXdCeEosSUFBSXdKLFFBQTVCLEdBQXVDLElBQW5EO0FBQ0EsWUFBTW5KLE9BQU9MLElBQUlLLElBQUosS0FBYXBCLE1BQU0sS0FBS2hCLEtBQUwsQ0FBV3dPLEdBQVgsRUFBTixHQUF5QixTQUF0QyxDQUFiO0FBQ0FySCxlQUFPckcsRUFBUCxHQUFZaUIsSUFBSWpCLEVBQUosSUFBVSxNQUFNLEtBQUtkLEtBQUwsQ0FBV3dPLEdBQVgsRUFBNUI7QUFDQSxZQUFNbE4sT0FBT1UsT0FBT0ksSUFBUCxJQUFlO0FBQ3hCdEIsZ0JBQUlxRyxPQUFPckcsRUFEYTtBQUV4QkUsb0JBRndCO0FBR3hCMkMsb0JBQVE1QixJQUFJNEIsTUFIWTtBQUl4QlosbUJBQU9oQixJQUFJZ0I7QUFKYSxTQUE1QjtBQU1BLGVBQU96QixLQUFLeUIsS0FBTCxHQUFhLElBQWIsR0FBb0JvRSxNQUEzQjtBQUNILEs7OztFQWxWb0JwSCxPOztJQXFWbkIwTyxVO0FBQ0Ysd0JBQVlqRSxFQUFaLEVBQWdCeEksTUFBaEIsRUFBd0I7QUFBQTs7QUFBQTs7QUFDcEIsYUFBS0EsTUFBTCxHQUFjQSxVQUFVLEVBQXhCO0FBQ0EsYUFBSzBNLGFBQUw7QUFDQSxhQUFLbEUsRUFBTCxHQUFVQSxFQUFWO0FBQ0FLLGVBQU84RCxVQUFQLEdBQW9CO0FBQUEsbUJBQU0sUUFBS25FLEVBQUwsQ0FBUSxRQUFLRSxHQUFMLEVBQVIsQ0FBTjtBQUFBLFNBQXBCO0FBQ0g7O3lCQUNEaEQsRyxnQkFBSW5DLEksRUFBTXZELE0sRUFBUTtBQUFBOztBQUNkLFlBQUksS0FBS0EsTUFBTCxDQUFZNE0sTUFBaEIsRUFBd0I7QUFDcEIsZ0JBQU1DLFVBQVV0SixLQUFLdEIsS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBaEI7QUFDQSxpQkFBSyxJQUFNeEIsR0FBWCxJQUFrQixLQUFLVCxNQUFMLENBQVk0TSxNQUE5QixFQUFzQztBQUNsQyxvQkFBSSxLQUFLNU0sTUFBTCxDQUFZNE0sTUFBWixDQUFtQm5NLEdBQW5CLE1BQTRCb00sUUFBUSxDQUFSLENBQWhDLEVBQTRDO0FBQ3hDdEosMkJBQU85QyxPQUFPb00sUUFBUTNMLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUIsTUFBTTJMLFFBQVEsQ0FBUixDQUEzQixHQUF3QyxFQUEvQyxDQUFQO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFDRCxZQUFJLEtBQUtuRSxHQUFMLE9BQWVuRixJQUFuQixFQUF5QjtBQUNyQnNGLG1CQUFPaUUsT0FBUCxDQUFlQyxTQUFmLENBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLEtBQUtDLE1BQUwsR0FBYyxLQUFLQyxLQUFuQixHQUEyQjFKLElBQWhFO0FBQ0g7QUFDRCxZQUFJLENBQUN2RCxNQUFELElBQVcsQ0FBQ0EsT0FBTzJGLE1BQXZCLEVBQStCO0FBQzNCcUcsdUJBQVc7QUFBQSx1QkFBTSxRQUFLeEQsRUFBTCxDQUFRakYsSUFBUixDQUFOO0FBQUEsYUFBWCxFQUFnQyxDQUFoQztBQUNIO0FBQ0osSzs7eUJBQ0RtRixHLGtCQUFNO0FBQ0YsWUFBSW5GLE9BQU8sS0FBSzJKLE9BQUwsR0FBZTFCLE9BQWYsQ0FBdUIsS0FBS3dCLE1BQTVCLEVBQW9DLEVBQXBDLEVBQXdDeEIsT0FBeEMsQ0FBZ0QsS0FBS3lCLEtBQXJELEVBQTRELEVBQTVELENBQVg7QUFDQTFKLGVBQU9BLFNBQVMsR0FBVCxHQUFlQSxJQUFmLEdBQXNCLEVBQTdCO0FBQ0EsWUFBSSxLQUFLdkQsTUFBTCxDQUFZNE0sTUFBaEIsRUFBd0I7QUFDcEIsZ0JBQU1DLFVBQVV0SixLQUFLdEIsS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBaEI7QUFDQSxnQkFBTXhCLE1BQU0sS0FBS1QsTUFBTCxDQUFZNE0sTUFBWixDQUFtQkMsUUFBUSxDQUFSLENBQW5CLENBQVo7QUFDQSxnQkFBSXBNLEdBQUosRUFBUztBQUNMOEMsdUJBQU85QyxPQUFPb00sUUFBUTNMLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUIsTUFBTTJMLFFBQVEsQ0FBUixDQUEzQixHQUF3QyxFQUEvQyxDQUFQO0FBQ0g7QUFDSjtBQUNELGVBQU90SixJQUFQO0FBQ0gsSzs7eUJBQ0RtSixhLDRCQUFnQjtBQUNaO0FBQ0EsWUFBTU8sUUFBUSxLQUFLak4sTUFBTCxDQUFZbU4sWUFBMUI7QUFDQSxhQUFLRixLQUFMLEdBQWEsT0FBUSxPQUFPQSxLQUFQLEtBQWlCLFdBQWxCLEdBQWlDLEdBQWpDLEdBQXVDQSxLQUE5QyxDQUFiO0FBQ0EsYUFBS0QsTUFBTCxHQUFjdkcsU0FBUzJHLFFBQVQsQ0FBa0JDLElBQWxCLENBQXVCcEwsS0FBdkIsQ0FBNkIsR0FBN0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZDtBQUNILEs7O3lCQUNEaUwsTyxzQkFBVTtBQUNOLGVBQU96RyxTQUFTMkcsUUFBVCxDQUFrQkMsSUFBekI7QUFDSCxLOzs7OztBQUdMLElBQUlDLFlBQVksS0FBaEI7QUFDQSxTQUFTQyxLQUFULENBQWVDLENBQWYsRUFBa0I7QUFDZCxRQUFJRixhQUFhLENBQUNFLENBQWxCLEVBQXFCO0FBQ2pCO0FBQ0g7QUFDREYsZ0JBQVksSUFBWjtBQUNBO0FBQ0EsUUFBTUcsTUFBTTVFLE1BQVo7QUFDQSxRQUFJLENBQUM0RSxJQUFJeEosT0FBVCxFQUFrQjtBQUNkd0osWUFBSXhKLE9BQUosR0FBY3VKLEVBQUVFLE9BQWhCO0FBQ0g7QUFDRCxRQUFNNUUsVUFBVTBFLEVBQUUxRSxPQUFGLENBQVU3RyxLQUFWLENBQWdCLEdBQWhCLENBQWhCO0FBQ0E7QUFDQSxRQUFJNkcsUUFBUSxDQUFSLElBQWEsRUFBYixHQUFrQkEsUUFBUSxDQUFSLElBQWEsQ0FBL0IsR0FBbUMsRUFBdkMsRUFBMkM7QUFDdkMwRSxVQUFFMUksRUFBRixDQUFLNkksTUFBTCxHQUFjLFVBQVV0RSxPQUFWLEVBQW1CO0FBQzdCO0FBQ0E7QUFDQSxnQkFBTW5GLE1BQU1tRixTQUFaO0FBQ0EsZ0JBQUluRixPQUFPQSxJQUFJTyxJQUFmLEVBQXFCO0FBQ2pCUCxvQkFBSU8sSUFBSixDQUFTLFVBQVVtSixJQUFWLEVBQWdCO0FBQ3JCSixzQkFBRTFJLEVBQUYsQ0FBSytJLE9BQUwsR0FBZSxLQUFmO0FBQ0FMLHNCQUFFMUksRUFBRixDQUFLZ0osTUFBTDtBQUNBLDJCQUFPRixJQUFQO0FBQ0gsaUJBSkQ7QUFLSCxhQU5ELE1BT0s7QUFDREosa0JBQUUxSSxFQUFGLENBQUsrSSxPQUFMLEdBQWUsS0FBZjtBQUNBTCxrQkFBRTFJLEVBQUYsQ0FBS2dKLE1BQUw7QUFDSDtBQUNELG1CQUFPNUosR0FBUDtBQUNILFNBaEJEO0FBaUJIO0FBQ0Q7QUFDQSxRQUFNNkosVUFBVVAsRUFBRTFJLEVBQUYsQ0FBS2tKLFVBQUwsQ0FBZ0IxRSxTQUFoQixDQUEwQjJFLE9BQTFDO0FBQ0EsUUFBTUMsYUFBYVYsRUFBRTFJLEVBQUYsQ0FBS2tKLFVBQUwsQ0FBZ0IxRSxTQUFoQixDQUEwQjZFLFVBQTdDO0FBQ0EsUUFBTW5PLFNBQVM7QUFDWGlPLGVBRFcsbUJBQ0gzTyxJQURHLEVBQ0crRCxLQURILEVBQ1U7QUFBQTs7QUFDakI7QUFDQTtBQUNBLGdCQUFJLEtBQUtuRCxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZakMsUUFBM0IsSUFBdUMsQ0FBQ3FCLEtBQUtRLFNBQWpELEVBQTREO0FBQUE7QUFDeEQsd0JBQU1zTyxRQUFRLFFBQUtsTyxNQUFuQjtBQUNBLHdCQUFNbU8sT0FBTyxFQUFiO0FBQ0EvTywyQkFBTzhPLE1BQU16UCxHQUFOLENBQVVzSSxVQUFWLENBQXFCM0gsSUFBckIsRUFBMkIsRUFBM0IsRUFBK0IrTyxJQUEvQixDQUFQO0FBQ0FOLDRCQUFRL0MsS0FBUixDQUFjLE9BQWQsRUFBb0IsQ0FBQzFMLElBQUQsRUFBTytELEtBQVAsQ0FBcEI7O0FBSndELCtDQUs3QzVDLEdBTDZDO0FBTXBEMk4sOEJBQU1wRyxZQUFOLENBQW1CdkgsR0FBbkIsRUFBd0I0TixLQUFLNU4sR0FBTCxDQUF4QixFQUFtQyxJQUFuQyxFQUF5Q2dFLElBQXpDLENBQThDLFlBQU07QUFDaEQySixrQ0FBTWpRLEtBQU4sQ0FBWXNDLEdBQVosSUFBbUI0TixLQUFLNU4sR0FBTCxDQUFuQjtBQUNILHlCQUZEO0FBTm9EOztBQUt4RCx5QkFBSyxJQUFNQSxHQUFYLElBQWtCNE4sSUFBbEIsRUFBd0I7QUFBQSw4QkFBYjVOLEdBQWE7QUFJdkI7QUFDRDtBQUFBLDJCQUFPbkIsS0FBS1I7QUFBWjtBQVZ3RDs7QUFBQTtBQVczRCxhQVhELE1BWUs7QUFDRCx1QkFBT2lQLFFBQVEvQyxLQUFSLENBQWMsSUFBZCxFQUFvQnNELFNBQXBCLENBQVA7QUFDSDtBQUNKLFNBbkJVO0FBb0JYSCxrQkFwQlcsd0JBb0JFO0FBQ1RELHVCQUFXbEQsS0FBWCxDQUFpQixJQUFqQixFQUF1QnNELFNBQXZCO0FBQ0EsZ0JBQUksS0FBS3BPLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlqQyxRQUEvQixFQUF5QztBQUNyQyxvQkFBTW9RLE9BQU8sS0FBS25PLE1BQUwsQ0FBWS9CLEtBQXpCO0FBQ0E7QUFDQSxxQkFBSyxJQUFNc0MsR0FBWCxJQUFrQjROLElBQWxCLEVBQXdCO0FBQ3BCLHdCQUFNbE0sT0FBT2tNLEtBQUs1TixHQUFMLENBQWI7QUFDQSx3QkFBSSxDQUFDK00sRUFBRTVOLEVBQUYsQ0FBS3VDLEtBQUtyRCxFQUFWLENBQUwsRUFBb0I7QUFDaEJxRCw2QkFBSzdDLElBQUwsQ0FBVWYsVUFBVjtBQUNBLCtCQUFPOFAsS0FBSzVOLEdBQUwsQ0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBakNVLEtBQWY7QUFtQ0ErTSxNQUFFak0sTUFBRixDQUFTaU0sRUFBRTFJLEVBQUYsQ0FBS3lKLE1BQUwsQ0FBWWpGLFNBQXJCLEVBQWdDdEosTUFBaEMsRUFBd0MsSUFBeEM7QUFDQXdOLE1BQUVqTSxNQUFGLENBQVNpTSxFQUFFMUksRUFBRixDQUFLa0osVUFBTCxDQUFnQjFFLFNBQXpCLEVBQW9DdEosTUFBcEMsRUFBNEMsSUFBNUM7QUFDQTtBQUNBd04sTUFBRWdCLE9BQUYsQ0FBVTtBQUNOcE8sY0FBTSxRQURBO0FBRU5xTyxhQUZNLGlCQUVBNUgsR0FGQSxFQUVLO0FBQ1AsaUJBQUs2SCxJQUFMLEdBQVksSUFBSSxLQUFLL1AsR0FBVCxDQUFha0ksR0FBYixDQUFaO0FBQ0EsZ0JBQU0vSCxLQUFLME8sRUFBRWhCLEdBQUYsR0FBUTdNLFFBQVIsRUFBWDtBQUNBa0gsZ0JBQUlILElBQUosR0FBVyxFQUFFNUgsTUFBRixFQUFYO0FBQ0EsaUJBQUs2UCxNQUFMLENBQVlwTyxJQUFaLENBQWlCLFlBQVk7QUFDekIscUJBQUttTyxJQUFMLENBQVV4SixNQUFWLENBQWlCLEVBQUVwRyxNQUFGLEVBQWpCO0FBQ0gsYUFGRDtBQUdBLGlCQUFLLElBQUkyQixHQUFULElBQWdCLEtBQUtpTyxJQUFyQixFQUEyQjtBQUN2QixvQkFBSUUsU0FBUyxLQUFLRixJQUFMLENBQVVqTyxHQUFWLENBQWI7QUFDQSxvQkFBSSxPQUFPbU8sTUFBUCxLQUFrQixVQUFsQixJQUFnQyxDQUFDLEtBQUtuTyxHQUFMLENBQXJDLEVBQWdEO0FBQzVDLHlCQUFLQSxHQUFMLElBQVltTyxPQUFPekQsSUFBUCxDQUFZLEtBQUt1RCxJQUFqQixDQUFaO0FBQ0g7QUFDSjtBQUNKO0FBZkssS0FBVixFQWdCR2xCLEVBQUUxSSxFQUFGLENBQUsrSixLQWhCUjtBQWlCSDs7SUFFS0MsTTs7O0FBQ0Ysb0JBQVk5TyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCQSxlQUFPOEssTUFBUCxHQUFnQjlLLE9BQU84SyxNQUFQLElBQWlCMkIsVUFBakM7O0FBRGdCLHVEQUVoQix1QkFBTXpNLE1BQU4sQ0FGZ0I7O0FBR2hCdU4sY0FBTSxRQUFLdlAsS0FBWDtBQUhnQjtBQUluQjs7cUJBQ0QwTSxnQiw2QkFBaUIxTCxHLEVBQUs7QUFDbEJBLGNBQU1BLElBQUl3TSxPQUFKLENBQVksS0FBWixFQUFtQixHQUFuQixDQUFOO0FBQ0EsZUFBT3VELGlFQUFRLElBQVksR0FBRy9QLEdBQXZCLENBQVA7QUFDSCxLOzs7RUFUZ0I0SixVOztJQVlmb0csVztBQUNGLHlCQUFZeEcsRUFBWixFQUFnQnhJLE1BQWhCLEVBQXdCckIsR0FBeEIsRUFBNkI7QUFBQTs7QUFDekIsYUFBS3NRLE9BQUwsR0FBZWpQLE9BQU9pUCxPQUFQLElBQWtCdFEsSUFBSVgsS0FBSixDQUFVaVIsT0FBVixDQUFrQkMsT0FBbkQ7QUFDQSxhQUFLOU8sSUFBTCxHQUFhSixPQUFPbVAsU0FBUCxJQUFvQm5QLE9BQU9sQixFQUFQLEdBQVksUUFBN0M7QUFDQSxhQUFLMEosRUFBTCxHQUFVQSxFQUFWO0FBQ0g7OzBCQUNEOUMsRyxnQkFBSW5DLEksRUFBTXZELE0sRUFBUTtBQUFBOztBQUNkLGFBQUtpUCxPQUFMLENBQWFHLEdBQWIsQ0FBaUIsS0FBS2hQLElBQXRCLEVBQTRCbUQsSUFBNUI7QUFDQSxZQUFJLENBQUN2RCxNQUFELElBQVcsQ0FBQ0EsT0FBTzJGLE1BQXZCLEVBQStCO0FBQzNCcUcsdUJBQVc7QUFBQSx1QkFBTSxRQUFLeEQsRUFBTCxDQUFRakYsSUFBUixDQUFOO0FBQUEsYUFBWCxFQUFnQyxDQUFoQztBQUNIO0FBQ0osSzs7MEJBQ0RtRixHLGtCQUFNO0FBQ0YsZUFBTyxLQUFLdUcsT0FBTCxDQUFhdkcsR0FBYixDQUFpQixLQUFLdEksSUFBdEIsQ0FBUDtBQUNILEs7Ozs7O0lBR0NpUCxTOzs7Ozs7Ozs7d0JBQ0YzQyxhLDRCQUFnQjtBQUNaLGFBQUtNLE1BQUwsR0FBYyxFQUFkO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLEtBQUtqTixNQUFMLENBQVltTixZQUFaLElBQTRCLEVBQXpDO0FBQ0gsSzs7d0JBQ0RELE8sc0JBQVU7QUFDTixlQUFPekcsU0FBUzJHLFFBQVQsQ0FBa0JrQyxRQUF6QjtBQUNILEs7OztFQVBtQjdDLFU7O0lBVWxCOEMsVztBQUNGLHlCQUFZL0csRUFBWixFQUFnQmdILFFBQWhCLEVBQTBCO0FBQUE7O0FBQ3RCLGFBQUtqTSxJQUFMLEdBQVksRUFBWjtBQUNBLGFBQUtpRixFQUFMLEdBQVVBLEVBQVY7QUFDSDs7MEJBQ0Q5QyxHLGdCQUFJbkMsSSxFQUFNdkQsTSxFQUFRO0FBQUE7O0FBQ2QsYUFBS3VELElBQUwsR0FBWUEsSUFBWjtBQUNBLFlBQUksQ0FBQ3ZELE1BQUQsSUFBVyxDQUFDQSxPQUFPMkYsTUFBdkIsRUFBK0I7QUFDM0JxRyx1QkFBVztBQUFBLHVCQUFNLFFBQUt4RCxFQUFMLENBQVFqRixJQUFSLENBQU47QUFBQSxhQUFYLEVBQWdDLENBQWhDO0FBQ0g7QUFDSixLOzswQkFDRG1GLEcsa0JBQU07QUFDRixlQUFPLEtBQUtuRixJQUFaO0FBQ0gsSzs7Ozs7QUFHTCxTQUFTa00sV0FBVCxDQUFxQjlRLEdBQXJCLEVBQTBCVyxJQUExQixFQUFnQ1UsTUFBaEMsRUFBd0M7QUFDcENWLFNBQUthLEVBQUwsQ0FBUXhCLEdBQVIsZUFBMEIsVUFBVXFILEtBQVYsRUFBaUIyRCxLQUFqQixFQUF3QitELE9BQXhCLEVBQWlDO0FBQ3ZELFlBQUkvRCxVQUFVckssSUFBVixJQUFrQnFLLE1BQU1uSixRQUFOLENBQWVsQixJQUFmLENBQXRCLEVBQTRDO0FBQ3hDLGdCQUFNNEUsTUFBTWxFLFFBQVo7QUFDQSxnQkFBSWtFLFFBQVEsS0FBWixFQUFtQjtBQUNmd0osd0JBQVFySixPQUFSLEdBQWtCSixRQUFROEMsTUFBUixDQUFlN0MsR0FBZixDQUFsQjtBQUNILGFBRkQsTUFHSztBQUNEd0osd0JBQVFySixPQUFSLEdBQWtCcUosUUFBUXJKLE9BQVIsQ0FBZ0JJLElBQWhCLENBQXFCO0FBQUEsMkJBQU1QLEdBQU47QUFBQSxpQkFBckIsQ0FBbEI7QUFDSDtBQUNKO0FBQ0osS0FWRDtBQVdIOztBQUVEOztBQUVBO0FBQ0EsU0FBU3dMLEdBQVQsQ0FBYUMsS0FBYixFQUFvQmxQLEdBQXBCLEVBQXlCO0FBQ3ZCLFdBQU9tUCxPQUFPdEcsU0FBUCxDQUFpQnVHLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0gsS0FBckMsRUFBNENsUCxHQUE1QyxDQUFQO0FBQ0Q7QUFDRDtBQUNBLFNBQVNzUCxPQUFULENBQWlCaFEsR0FBakIsRUFBc0JzSixPQUF0QixFQUErQjJHLE9BQS9CLEVBQXdDO0FBQ3RDLFNBQUssSUFBSXZQLEdBQVQsSUFBZ0JWLEdBQWhCLEVBQXFCO0FBQ25CLFlBQUkyUCxJQUFJM1AsR0FBSixFQUFTVSxHQUFULENBQUosRUFBbUI7QUFDakI0SSxvQkFBUXlHLElBQVIsQ0FBY0UsV0FBV2pRLEdBQXpCLEVBQStCQSxJQUFJVSxHQUFKLENBQS9CLEVBQXlDQSxHQUF6QyxFQUE4Q1YsR0FBOUM7QUFDRDtBQUNGO0FBQ0Y7QUFDRDtBQUNBLFNBQVNrUSxJQUFULENBQWNoTixHQUFkLEVBQW1CO0FBQ2pCLFdBQU9BLElBQUl1SSxPQUFKLENBQVksb0NBQVosRUFBa0QsRUFBbEQsQ0FBUDtBQUNEO0FBQ0Q7QUFDQSxTQUFTMEUsSUFBVCxDQUFjakssT0FBZCxFQUF1QjtBQUNyQkEsY0FBVSxjQUFjQSxPQUF4QjtBQUNBLFFBQUksT0FBT3FGLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDbENBLGdCQUFRcEQsS0FBUixDQUFjakMsT0FBZDtBQUNEOztBQUVELFFBQUk7QUFBRSxjQUFNLElBQUl3RSxLQUFKLENBQVV4RSxPQUFWLENBQU47QUFBMkIsS0FBakMsQ0FBa0MsT0FBT2tLLENBQVAsRUFBVSxDQUFFO0FBQy9DOztBQUVELElBQUkzRSxVQUFVNEUsT0FBTzlHLFNBQVAsQ0FBaUJrQyxPQUEvQjtBQUNBLElBQUl2SixRQUFRbU8sT0FBTzlHLFNBQVAsQ0FBaUJySCxLQUE3Qjs7QUFFQTtBQUNBO0FBQ0EsSUFBSW9PLFlBQVksTUFBaEI7O0FBRUEsSUFBSUMsc0JBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBVTNMLENBQVYsRUFBYTtBQUNyQyxRQUFJNEwsTUFBTTVMLElBQUksRUFBZDtBQUNBLFFBQUlBLE1BQU0sRUFBTixJQUFZNEwsUUFBUSxDQUF4QixFQUEyQjtBQUN6QixlQUFPLENBQVA7QUFDRDtBQUNELFFBQUksS0FBS0EsR0FBTCxJQUFZQSxPQUFPLENBQW5CLElBQXdCLEVBQUU1TCxLQUFLLEVBQUwsSUFBV0EsS0FBSyxFQUFsQixDQUE1QixFQUFtRDtBQUNqRCxlQUFPLENBQVA7QUFDRDtBQUNELFdBQU8sQ0FBUDtBQUNELENBVEQ7O0FBV0E7QUFDQSxJQUFJNkwsY0FBYztBQUNoQkMsWUFBUSxnQkFBVTlMLENBQVYsRUFBYTtBQUNuQjtBQUNBLFlBQUlBLElBQUksQ0FBUixFQUFXO0FBQUUsbUJBQU9BLENBQVA7QUFBVztBQUN4QixZQUFJK0wsVUFBVS9MLElBQUksR0FBbEI7QUFDQSxZQUFJK0wsV0FBVyxDQUFYLElBQWdCQSxXQUFXLEVBQS9CLEVBQW1DLE9BQU8sQ0FBUDtBQUNuQyxlQUFPQSxXQUFXLEVBQVgsR0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBM0I7QUFDRCxLQVBlO0FBUWhCQyxxQkFBaUJMLG1CQVJEO0FBU2hCTSxhQUFTLG1CQUFZO0FBQUUsZUFBTyxDQUFQO0FBQVcsS0FUbEI7QUFVaEJDLGNBQVVQLG1CQVZNO0FBV2hCUSxZQUFRLGdCQUFVbk0sQ0FBVixFQUFhO0FBQUUsZUFBT0EsSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQW5CO0FBQXVCLEtBWDlCO0FBWWhCb00sWUFBUSxnQkFBVXBNLENBQVYsRUFBYTtBQUFFLGVBQU9BLE1BQU0sQ0FBTixHQUFVLENBQVYsR0FBYyxDQUFyQjtBQUF5QixLQVpoQztBQWFoQnFNLGFBQVNWLG1CQWJPO0FBY2hCVyxnQkFBWSxvQkFBVXRNLENBQVYsRUFBYTtBQUN2QixZQUFJQSxJQUFJLEVBQUosS0FBVyxDQUFYLElBQWdCQSxJQUFJLEdBQUosS0FBWSxFQUFoQyxFQUFvQztBQUFFLG1CQUFPLENBQVA7QUFBVztBQUNqRCxlQUFPQSxJQUFJLEVBQUosSUFBVSxDQUFWLElBQWVBLElBQUksRUFBSixJQUFVLENBQXpCLEtBQStCQSxJQUFJLEdBQUosR0FBVSxFQUFWLElBQWdCQSxJQUFJLEdBQUosR0FBVSxFQUF6RCxJQUErRCxDQUEvRCxHQUFtRSxDQUExRTtBQUNELEtBakJlO0FBa0JoQnVNLFdBQU8sZUFBVXZNLENBQVYsRUFBYTtBQUNsQixZQUFJQSxNQUFNLENBQVYsRUFBYTtBQUFFLG1CQUFPLENBQVA7QUFBVztBQUMxQixlQUFRQSxLQUFLLENBQUwsSUFBVUEsS0FBSyxDQUFoQixHQUFxQixDQUFyQixHQUF5QixDQUFoQztBQUNELEtBckJlO0FBc0JoQndNLFlBQVEsZ0JBQVV4TSxDQUFWLEVBQWE7QUFDbkIsWUFBSUEsTUFBTSxDQUFWLEVBQWE7QUFBRSxtQkFBTyxDQUFQO0FBQVc7QUFDMUIsWUFBSTRMLE1BQU01TCxJQUFJLEVBQWQ7QUFDQSxlQUFPLEtBQUs0TCxHQUFMLElBQVlBLE9BQU8sQ0FBbkIsS0FBeUI1TCxJQUFJLEdBQUosR0FBVSxFQUFWLElBQWdCQSxJQUFJLEdBQUosSUFBVyxFQUFwRCxJQUEwRCxDQUExRCxHQUE4RCxDQUFyRTtBQUNELEtBMUJlO0FBMkJoQnlNLGVBQVcsbUJBQVV6TSxDQUFWLEVBQWE7QUFBRSxlQUFRQSxJQUFJLEVBQUosS0FBVyxDQUFYLElBQWdCQSxJQUFJLEdBQUosS0FBWSxFQUE3QixHQUFtQyxDQUFuQyxHQUF1QyxDQUE5QztBQUFrRCxLQTNCNUQ7QUE0QmhCME0sZUFBVyxtQkFBVTFNLENBQVYsRUFBYTtBQUN0QixZQUFJK0wsVUFBVS9MLElBQUksR0FBbEI7QUFDQSxZQUFJK0wsWUFBWSxDQUFoQixFQUFtQjtBQUNqQixtQkFBTyxDQUFQO0FBQ0Q7QUFDRCxZQUFJQSxZQUFZLENBQWhCLEVBQW1CO0FBQ2pCLG1CQUFPLENBQVA7QUFDRDtBQUNELFlBQUlBLFlBQVksQ0FBWixJQUFpQkEsWUFBWSxDQUFqQyxFQUFvQztBQUNsQyxtQkFBTyxDQUFQO0FBQ0Q7QUFDRCxlQUFPLENBQVA7QUFDRDtBQXhDZSxDQUFsQjs7QUE0Q0E7QUFDQTtBQUNBO0FBQ0EsSUFBSVksd0JBQXdCO0FBQzFCYixZQUFRLENBQUMsSUFBRCxDQURrQjtBQUUxQkUscUJBQWlCLENBQUMsWUFBRCxFQUFlLFlBQWYsRUFBNkIsUUFBN0IsRUFBdUMsT0FBdkMsQ0FGUztBQUcxQkMsYUFBUyxDQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLE9BQTVCLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELElBQWpELEVBQXVELE9BQXZELEVBQWdFLElBQWhFLENBSGlCO0FBSTFCQyxjQUFVLENBQUMsSUFBRCxFQUFPLE9BQVAsQ0FKZ0I7QUFLMUJFLFlBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsRUFBMkMsSUFBM0MsRUFBaUQsT0FBakQsRUFBMEQsSUFBMUQsRUFBZ0UsT0FBaEUsRUFBeUUsSUFBekUsRUFBK0UsSUFBL0UsRUFBcUYsSUFBckYsRUFBMkYsSUFBM0YsRUFBaUcsSUFBakcsRUFBdUcsSUFBdkcsQ0FMa0I7QUFNMUJELFlBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLE9BQWIsQ0FOa0I7QUFPMUJFLGFBQVMsQ0FBQyxJQUFELEVBQU8sT0FBUCxDQVBpQjtBQVExQkMsZ0JBQVksQ0FBQyxJQUFELENBUmM7QUFTMUJDLFdBQU8sQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixJQUFoQixDQVRtQjtBQVUxQkMsWUFBUSxDQUFDLElBQUQsQ0FWa0I7QUFXMUJDLGVBQVcsQ0FBQyxJQUFELENBWGU7QUFZMUJDLGVBQVcsQ0FBQyxPQUFEO0FBWmUsQ0FBNUI7O0FBZUEsU0FBU0UsYUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0M7QUFDOUIsUUFBSUMsTUFBTSxFQUFWO0FBQ0ExQixZQUFReUIsT0FBUixFQUFpQixVQUFVRSxLQUFWLEVBQWlCaEcsSUFBakIsRUFBdUI7QUFDdENxRSxnQkFBUTJCLEtBQVIsRUFBZSxVQUFVQyxJQUFWLEVBQWdCO0FBQzdCRixnQkFBSUUsSUFBSixJQUFZakcsSUFBWjtBQUNELFNBRkQ7QUFHRCxLQUpEO0FBS0EsV0FBTytGLEdBQVA7QUFDRDs7QUFFRCxTQUFTRyxjQUFULENBQXdCQyxNQUF4QixFQUFnQztBQUM5QixRQUFJQyxtQkFBbUJQLGNBQWNELHFCQUFkLENBQXZCO0FBQ0EsV0FBT1EsaUJBQWlCRCxNQUFqQixLQUNGQyxpQkFBaUI3UCxNQUFNNk4sSUFBTixDQUFXK0IsTUFBWCxFQUFtQixHQUFuQixFQUF3QixDQUF4QixFQUEyQixDQUEzQixDQUFqQixDQURFLElBRUZDLGlCQUFpQkMsRUFGdEI7QUFHRDs7QUFFRCxTQUFTQyxlQUFULENBQXlCSCxNQUF6QixFQUFpQ0ksS0FBakMsRUFBd0M7QUFDdEMsV0FBT3pCLFlBQVlvQixlQUFlQyxNQUFmLENBQVosRUFBb0NJLEtBQXBDLENBQVA7QUFDRDs7QUFFRCxTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNyQixXQUFPQSxNQUFNM0csT0FBTixDQUFjLHFCQUFkLEVBQXFDLE1BQXJDLENBQVA7QUFDRDs7QUFFRCxTQUFTNEcsbUJBQVQsQ0FBNkJDLElBQTdCLEVBQW1DO0FBQ2pDLFFBQUlyRixTQUFVcUYsUUFBUUEsS0FBS3JGLE1BQWQsSUFBeUIsSUFBdEM7QUFDQSxRQUFJc0YsU0FBVUQsUUFBUUEsS0FBS0MsTUFBZCxJQUF5QixHQUF0Qzs7QUFFQSxRQUFJdEYsV0FBV3FELFNBQVgsSUFBd0JpQyxXQUFXakMsU0FBdkMsRUFBa0Q7QUFDaEQsY0FBTSxJQUFJa0MsVUFBSixDQUFlLE1BQU1sQyxTQUFOLEdBQWtCLHVDQUFqQyxDQUFOO0FBQ0Q7O0FBRUQsV0FBTyxJQUFJeEcsTUFBSixDQUFXcUksT0FBT2xGLE1BQVAsSUFBaUIsT0FBakIsR0FBMkJrRixPQUFPSSxNQUFQLENBQXRDLEVBQXNELEdBQXRELENBQVA7QUFDRDs7QUFFRCxJQUFJRSxjQUFjLEtBQWxCO0FBQ0EsSUFBSUMsa0JBQWtCLElBQXRCO0FBQ0EsSUFBSUMsb0JBQW9CLGFBQXhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxlQUFULENBQXlCQyxNQUF6QixFQUFpQ0MsYUFBakMsRUFBZ0RoQixNQUFoRCxFQUF3RGlCLFVBQXhELEVBQW9FO0FBQ2xFLFFBQUksT0FBT0YsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QixjQUFNLElBQUlHLFNBQUosQ0FBYywyREFBZCxDQUFOO0FBQ0Q7O0FBRUQsUUFBSUYsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLGVBQU9ELE1BQVA7QUFDRDs7QUFFRCxRQUFJeFEsU0FBU3dRLE1BQWI7QUFDQSxRQUFJSSxxQkFBcUJGLGNBQWNKLGlCQUF2Qzs7QUFFQTtBQUNBLFFBQUlPLFVBQVUsT0FBT0osYUFBUCxLQUF5QixRQUF6QixHQUFvQyxFQUFFSyxhQUFhTCxhQUFmLEVBQXBDLEdBQXFFQSxhQUFuRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFJSSxRQUFRQyxXQUFSLElBQXVCLElBQXZCLElBQStCOVEsTUFBbkMsRUFBMkM7QUFDekMsWUFBSStRLFFBQVFsUixNQUFNNk4sSUFBTixDQUFXMU4sTUFBWCxFQUFtQmlPLFNBQW5CLENBQVo7QUFDQWpPLGlCQUFTNk4sS0FBS2tELE1BQU1uQixnQkFBZ0JILFVBQVUsSUFBMUIsRUFBZ0NvQixRQUFRQyxXQUF4QyxDQUFOLEtBQStEQyxNQUFNLENBQU4sQ0FBcEUsQ0FBVDtBQUNEOztBQUVEO0FBQ0EvUSxhQUFTb0osUUFBUXNFLElBQVIsQ0FBYTFOLE1BQWIsRUFBcUI0USxrQkFBckIsRUFBeUMsVUFBVUksVUFBVixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFDaEYsWUFBSSxDQUFDM0QsSUFBSXVELE9BQUosRUFBYUksUUFBYixDQUFELElBQTJCSixRQUFRSSxRQUFSLEtBQXFCLElBQXBELEVBQTBEO0FBQUUsbUJBQU9ELFVBQVA7QUFBb0I7QUFDaEY7QUFDQSxlQUFPNUgsUUFBUXNFLElBQVIsQ0FBYW1ELFFBQVFJLFFBQVIsQ0FBYixFQUFnQ2IsV0FBaEMsRUFBNkNDLGVBQTdDLENBQVA7QUFDRCxLQUpRLENBQVQ7O0FBTUEsV0FBT3JRLE1BQVA7QUFDRDs7QUFFRDtBQUNBLFNBQVNrUixRQUFULENBQWtCTCxPQUFsQixFQUEyQjtBQUN6QixRQUFJWixPQUFPWSxXQUFXLEVBQXRCO0FBQ0EsU0FBS00sT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLaFMsTUFBTCxDQUFZOFEsS0FBS2tCLE9BQUwsSUFBZ0IsRUFBNUI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCbkIsS0FBS1IsTUFBTCxJQUFlLElBQXBDO0FBQ0EsUUFBSTRCLGVBQWVwQixLQUFLb0IsWUFBTCxHQUFvQmQsZUFBcEIsR0FBc0MsSUFBekQ7QUFDQSxTQUFLZSxZQUFMLEdBQW9CLE9BQU9yQixLQUFLcUIsWUFBWixLQUE2QixVQUE3QixHQUEwQ3JCLEtBQUtxQixZQUEvQyxHQUE4REQsWUFBbEY7QUFDQSxTQUFLdkQsSUFBTCxHQUFZbUMsS0FBS25DLElBQUwsSUFBYUEsSUFBekI7QUFDQSxTQUFLNEMsVUFBTCxHQUFrQlYsb0JBQW9CQyxLQUFLc0IsYUFBekIsQ0FBbEI7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQUwsU0FBU2hLLFNBQVQsQ0FBbUJ1SSxNQUFuQixHQUE0QixVQUFVK0IsU0FBVixFQUFxQjtBQUMvQyxRQUFJQSxTQUFKLEVBQWUsS0FBS0osYUFBTCxHQUFxQkksU0FBckI7QUFDZixXQUFPLEtBQUtKLGFBQVo7QUFDRCxDQUhEOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FGLFNBQVNoSyxTQUFULENBQW1CL0gsTUFBbkIsR0FBNEIsVUFBVXNTLFdBQVYsRUFBdUI3RyxNQUF2QixFQUErQjtBQUN6RCtDLFlBQVE4RCxXQUFSLEVBQXFCLFVBQVVqQixNQUFWLEVBQWtCblMsR0FBbEIsRUFBdUI7QUFDMUMsWUFBSXFULGNBQWM5RyxTQUFTQSxTQUFTLEdBQVQsR0FBZXZNLEdBQXhCLEdBQThCQSxHQUFoRDtBQUNBLFlBQUksUUFBT21TLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBdEIsRUFBZ0M7QUFDOUIsaUJBQUtyUixNQUFMLENBQVlxUixNQUFaLEVBQW9Ca0IsV0FBcEI7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBS1AsT0FBTCxDQUFhTyxXQUFiLElBQTRCbEIsTUFBNUI7QUFDRDtBQUNGLEtBUEQsRUFPRyxJQVBIO0FBUUQsQ0FURDs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FVLFNBQVNoSyxTQUFULENBQW1CeUssS0FBbkIsR0FBMkIsVUFBVUYsV0FBVixFQUF1QjdHLE1BQXZCLEVBQStCO0FBQ3hELFFBQUksT0FBTzZHLFdBQVAsS0FBdUIsUUFBM0IsRUFBcUM7QUFDbkMsZUFBTyxLQUFLTixPQUFMLENBQWFNLFdBQWIsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMOUQsZ0JBQVE4RCxXQUFSLEVBQXFCLFVBQVVqQixNQUFWLEVBQWtCblMsR0FBbEIsRUFBdUI7QUFDMUMsZ0JBQUlxVCxjQUFjOUcsU0FBU0EsU0FBUyxHQUFULEdBQWV2TSxHQUF4QixHQUE4QkEsR0FBaEQ7QUFDQSxnQkFBSSxRQUFPbVMsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUF0QixFQUFnQztBQUM5QixxQkFBS21CLEtBQUwsQ0FBV25CLE1BQVgsRUFBbUJrQixXQUFuQjtBQUNELGFBRkQsTUFFTztBQUNMLHVCQUFPLEtBQUtQLE9BQUwsQ0FBYU8sV0FBYixDQUFQO0FBQ0Q7QUFDRixTQVBELEVBT0csSUFQSDtBQVFEO0FBQ0YsQ0FiRDs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FSLFNBQVNoSyxTQUFULENBQW1CMEssS0FBbkIsR0FBMkIsWUFBWTtBQUNyQyxTQUFLVCxPQUFMLEdBQWUsRUFBZjtBQUNELENBRkQ7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBRCxTQUFTaEssU0FBVCxDQUFtQmtDLE9BQW5CLEdBQTZCLFVBQVV5SSxVQUFWLEVBQXNCO0FBQ2pELFNBQUtELEtBQUw7QUFDQSxTQUFLelMsTUFBTCxDQUFZMFMsVUFBWjtBQUNELENBSEQ7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVgsU0FBU2hLLFNBQVQsQ0FBbUI0SyxDQUFuQixHQUF1QixVQUFVelQsR0FBVixFQUFld1MsT0FBZixFQUF3QjtBQUM3QyxRQUFJTCxNQUFKLEVBQVl4USxNQUFaO0FBQ0EsUUFBSWlRLE9BQU9ZLFdBQVcsSUFBWCxHQUFrQixFQUFsQixHQUF1QkEsT0FBbEM7QUFDQSxRQUFJLE9BQU8sS0FBS00sT0FBTCxDQUFhOVMsR0FBYixDQUFQLEtBQTZCLFFBQWpDLEVBQTJDO0FBQ3pDbVMsaUJBQVMsS0FBS1csT0FBTCxDQUFhOVMsR0FBYixDQUFUO0FBQ0QsS0FGRCxNQUVPLElBQUksT0FBTzRSLEtBQUs4QixDQUFaLEtBQWtCLFFBQXRCLEVBQWdDO0FBQ3JDdkIsaUJBQVNQLEtBQUs4QixDQUFkO0FBQ0QsS0FGTSxNQUVBLElBQUksS0FBS1QsWUFBVCxFQUF1QjtBQUM1QixZQUFJQSxlQUFlLEtBQUtBLFlBQXhCO0FBQ0F0UixpQkFBU3NSLGFBQWFqVCxHQUFiLEVBQWtCNFIsSUFBbEIsRUFBd0IsS0FBS21CLGFBQTdCLEVBQTRDLEtBQUtWLFVBQWpELENBQVQ7QUFDRCxLQUhNLE1BR0E7QUFDTCxhQUFLNUMsSUFBTCxDQUFVLG1DQUFtQ3pQLEdBQW5DLEdBQXlDLEdBQW5EO0FBQ0EyQixpQkFBUzNCLEdBQVQ7QUFDRDtBQUNELFFBQUksT0FBT21TLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDOUJ4USxpQkFBU3VRLGdCQUFnQkMsTUFBaEIsRUFBd0JQLElBQXhCLEVBQThCLEtBQUttQixhQUFuQyxFQUFrRCxLQUFLVixVQUF2RCxDQUFUO0FBQ0Q7QUFDRCxXQUFPMVEsTUFBUDtBQUNELENBbEJEOztBQXFCQTtBQUNBO0FBQ0E7QUFDQWtSLFNBQVNoSyxTQUFULENBQW1Cb0csR0FBbkIsR0FBeUIsVUFBVWpQLEdBQVYsRUFBZTtBQUN0QyxXQUFPaVAsSUFBSSxLQUFLNkQsT0FBVCxFQUFrQjlTLEdBQWxCLENBQVA7QUFDRCxDQUZEOztBQUlBO0FBQ0E2UyxTQUFTWCxlQUFULEdBQTJCLFNBQVN5QixTQUFULENBQW1CeEIsTUFBbkIsRUFBMkJDLGFBQTNCLEVBQTBDaEIsTUFBMUMsRUFBa0Q7QUFDM0UsV0FBT2MsZ0JBQWdCQyxNQUFoQixFQUF3QkMsYUFBeEIsRUFBdUNoQixNQUF2QyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJd0MsZ0JBQWdCZixRQUFwQjs7QUFFQSxTQUFTZ0IsTUFBVCxDQUFnQjNWLEdBQWhCLEVBQXFCNFYsS0FBckIsRUFBNEJ2VSxNQUE1QixFQUFvQztBQUNoQ0EsYUFBU0EsVUFBVSxFQUFuQjtBQUNBLFFBQU1pUCxVQUFValAsT0FBT2lQLE9BQXZCO0FBQ0EsUUFBSTBDLE9BQU8xQyxVQUFXQSxRQUFRdkcsR0FBUixDQUFZLE1BQVosS0FBdUIsSUFBbEMsR0FBMkMxSSxPQUFPMlIsSUFBUCxJQUFlLElBQXJFO0FBQ0EsYUFBUzZDLFdBQVQsQ0FBcUJwVSxJQUFyQixFQUEyQjZLLElBQTNCLEVBQWlDdEYsTUFBakMsRUFBeUM7QUFDckMsWUFBSXNGLEtBQUtMLFVBQVQsRUFBcUI7QUFDakJLLG1CQUFPQSxLQUFLdkosT0FBWjtBQUNIO0FBQ0QsWUFBTStTLFVBQVUsRUFBRWxCLFNBQVN0SSxJQUFYLEVBQWhCO0FBQ0EsWUFBSWpMLE9BQU8wVSxRQUFYLEVBQXFCO0FBQ2pCL1YsZ0JBQUlYLEtBQUosQ0FBVXVELE1BQVYsQ0FBaUJrVCxPQUFqQixFQUEwQnpVLE9BQU8wVSxRQUFqQztBQUNIO0FBQ0QsWUFBTUMsT0FBT0MsUUFBUUYsUUFBUixHQUFtQixJQUFJTCxhQUFKLENBQWtCSSxPQUFsQixDQUFoQztBQUNBRSxhQUFLOUMsTUFBTCxDQUFZelIsSUFBWjtBQUNBd1UsZ0JBQVFULENBQVIsR0FBWXhWLElBQUlYLEtBQUosQ0FBVW1OLElBQVYsQ0FBZXdKLEtBQUtULENBQXBCLEVBQXVCUyxJQUF2QixDQUFaO0FBQ0FoRCxlQUFPdlIsSUFBUDtBQUNBLFlBQUk2TyxPQUFKLEVBQWE7QUFDVEEsb0JBQVFHLEdBQVIsQ0FBWSxNQUFaLEVBQW9CdUMsSUFBcEI7QUFDSDtBQUNELFlBQUkzUixPQUFPaEMsS0FBWCxFQUFrQjtBQUNkLGdCQUFNNlcsVUFBVTdVLE9BQU9oQyxLQUFQLENBQWFvQyxJQUFiLENBQWhCO0FBQ0EsZ0JBQUl5VSxPQUFKLEVBQWE7QUFDVGxXLG9CQUFJWCxLQUFKLENBQVU4VyxJQUFWLENBQWVDLFNBQWYsQ0FBeUJGLE9BQXpCO0FBQ0g7QUFDSjtBQUNELFlBQUksQ0FBQ2xQLE1BQUwsRUFBYTtBQUNULG1CQUFPaEgsSUFBSWdGLE9BQUosRUFBUDtBQUNIO0FBQ0QsZUFBT00sUUFBUUssT0FBUixFQUFQO0FBQ0g7QUFDRCxhQUFTMFEsT0FBVCxHQUFtQjtBQUFFLGVBQU9yRCxJQUFQO0FBQWM7QUFDbkMsYUFBU3NELE9BQVQsQ0FBaUI3VSxJQUFqQixFQUF1QnVGLE1BQXZCLEVBQStCO0FBQzNCO0FBQ0EsWUFBSTNGLE9BQU91RCxJQUFQLEtBQWdCLEtBQXBCLEVBQTJCO0FBQ3ZCO0FBQ0g7QUFDRCxZQUFNQSxPQUFPLENBQUN2RCxPQUFPdUQsSUFBUCxHQUFjdkQsT0FBT3VELElBQVAsR0FBYyxHQUE1QixHQUFrQyxFQUFuQyxJQUF5Q25ELElBQXREO0FBQ0EsWUFBTTZLLE9BQU84RCxtRUFBUSxJQUFjLEdBQUd4TCxJQUF6QixDQUFiO0FBQ0FpUixvQkFBWXBVLElBQVosRUFBa0I2SyxJQUFsQixFQUF3QnRGLE1BQXhCO0FBQ0g7QUFDRCxRQUFNaVAsVUFBVTtBQUNaSSx3QkFEWSxFQUNIQyxnQkFERyxFQUNNVCx3QkFETixFQUNtQkwsR0FBRyxJQUR0QixFQUM0Qk8sVUFBVTtBQUR0QyxLQUFoQjtBQUdBL1YsUUFBSXlLLFVBQUosQ0FBZSxRQUFmLEVBQXlCd0wsT0FBekI7QUFDQUssWUFBUXRELElBQVIsRUFBYyxJQUFkO0FBQ0g7O0FBRUQsU0FBU3hTLElBQVQsQ0FBY0csSUFBZCxFQUFvQlUsTUFBcEIsRUFBNEJqQixLQUE1QixFQUFtQztBQUMvQixRQUFJaUIsT0FBT2tWLElBQVgsRUFBaUI7QUFDYm5XLGdCQUFRaUIsT0FBT2tWLElBQVAsQ0FBWW5XLEtBQVosS0FBc0JBLEtBQTlCO0FBQ0gsS0FGRCxNQUdLLElBQUlpQixPQUFPdUMsS0FBWCxFQUFrQjtBQUFBOztBQUNuQnhELHFDQUFXaUIsT0FBT3VDLEtBQWxCLElBQTBCeEQsS0FBMUI7QUFDSDtBQUNETyxTQUFLSCxJQUFMLENBQVVKLEtBQVY7QUFDSDtBQUNELFNBQVNvVyxJQUFULENBQWN4VyxHQUFkLEVBQW1CVyxJQUFuQixFQUF5QlUsTUFBekIsRUFBaUM7QUFDN0IsUUFBTTRILFFBQVF0SSxLQUFLdUIsY0FBTCxHQUFzQnhCLE1BQXBDO0FBQ0EsUUFBTXlGLEtBQUt4RixLQUFLTSxFQUFMLENBQVFJLE9BQU9sQixFQUFQLElBQWFrQixNQUFyQixDQUFYO0FBQ0EsUUFBSTJGLFNBQVMsS0FBYjtBQUNBYixPQUFHeEUsV0FBSCxDQUFlLFVBQWYsRUFBMkIsWUFBWTtBQUNuQyxZQUFJLENBQUNxRixNQUFMLEVBQWE7QUFDVHhHLGlCQUFLeUksS0FBTCxFQUFZNUgsTUFBWixFQUFvQixLQUFLb1YsUUFBTCxFQUFwQjtBQUNIO0FBQ0osS0FKRDtBQUtBdFEsT0FBR3hFLFdBQUgsQ0FBZSxlQUFmLEVBQWdDLFlBQVk7QUFDeEMsWUFBSSxDQUFDcUYsTUFBTCxFQUFhO0FBQ1QsZ0JBQUk3RyxLQUFLLElBQVQ7QUFDQSxnQkFBSWdHLEdBQUd1USxRQUFQLEVBQWlCO0FBQ2J2VyxxQkFBSyxLQUFLc1csUUFBTCxFQUFMO0FBQ0gsYUFGRCxNQUdLLElBQUl0USxHQUFHd1EsYUFBUCxFQUFzQjtBQUN2QnhXLHFCQUFLZ0csR0FBR3dRLGFBQUgsRUFBTDtBQUNIO0FBQ0RuVyxpQkFBS3lJLEtBQUwsRUFBWTVILE1BQVosRUFBb0JsQixFQUFwQjtBQUNIO0FBQ0osS0FYRDtBQVlBUSxTQUFLYSxFQUFMLENBQVF4QixHQUFSLGVBQTBCLFlBQVk7QUFDbEMsWUFBSXlCLE9BQU8sRUFBWDtBQUNBLFlBQUlKLE9BQU91QyxLQUFYLEVBQWtCO0FBQ2RuQyxtQkFBT2QsS0FBS0YsUUFBTCxDQUFjWSxPQUFPdUMsS0FBckIsRUFBNEIsSUFBNUIsQ0FBUDtBQUNILFNBRkQsTUFHSztBQUNELGdCQUFNK0MsVUFBVXNDLE1BQU1wSSxNQUFOLEdBQWUsQ0FBZixDQUFoQjtBQUNBLGdCQUFJOEYsT0FBSixFQUFhO0FBQ1RsRix1QkFBT2tGLFFBQVE1QyxJQUFmO0FBQ0g7QUFDSjtBQUNELFlBQUl0QyxJQUFKLEVBQVU7QUFDTnVGLHFCQUFTLElBQVQ7QUFDQSxnQkFBSWIsR0FBR3VRLFFBQUgsSUFBZXZRLEdBQUdzUSxRQUFILE9BQWtCaFYsSUFBckMsRUFBMkM7QUFDdkMwRSxtQkFBR3VRLFFBQUgsQ0FBWWpWLElBQVo7QUFDSCxhQUZELE1BR0ssSUFBSTBFLEdBQUd5USxNQUFILElBQWF6USxHQUFHMFEsTUFBSCxDQUFVcFYsSUFBVixDQUFiLElBQWdDMEUsR0FBR3dRLGFBQUgsT0FBdUJsVixJQUEzRCxFQUFpRTtBQUNsRTBFLG1CQUFHeVEsTUFBSCxDQUFVblYsSUFBVjtBQUNIO0FBQ0R1RixxQkFBUyxLQUFUO0FBQ0g7QUFDSixLQXJCRDtBQXNCSDs7QUFFRCxJQUFNOFAsWUFBWTtBQUNkQyxVQUFNLE9BRFE7QUFFZHhOLFdBQU8sU0FGTztBQUdkeU4sWUFBUTtBQUhNLENBQWxCO0FBS0EsSUFBTUMsV0FBVztBQUNiRixVQUFNLElBRE87QUFFYnhOLFdBQU8sT0FGTTtBQUdieU4sWUFBUTtBQUhLLENBQWpCO0FBS0EsU0FBU0UsTUFBVCxDQUFnQmxYLEdBQWhCLEVBQXFCVyxJQUFyQixFQUEyQlUsTUFBM0IsRUFBbUM7QUFDL0IsUUFBSThWLFNBQVMsTUFBYjtBQUNBLFFBQUk3RCxRQUFRLENBQVo7QUFDQSxRQUFJOEQsVUFBVSxLQUFkO0FBQ0EsUUFBSUMsY0FBY2hXLE9BQU8yTCxNQUF6QjtBQUNBLFFBQUksQ0FBQ3FLLFdBQUQsSUFBZ0JBLGdCQUFnQixLQUFwQyxFQUEyQztBQUN2Q0Esc0JBQWMsSUFBZDtBQUNIO0FBQ0QsUUFBTTdDLFFBQVFuVCxPQUFPbVQsS0FBUCxJQUFnQnlDLFFBQTlCO0FBQ0EsUUFBTUssUUFBUWpXLE9BQU9pVyxLQUFQLElBQWdCUixTQUE5QjtBQUNBLFFBQUksT0FBT3pWLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDNUJBLGlCQUFTLEVBQUVtRixRQUFRbkYsTUFBVixFQUFUO0FBQ0g7QUFDRCxhQUFTMkQsT0FBVCxDQUFpQnVTLE9BQWpCLEVBQTBCO0FBQ3RCLFlBQU1DLE9BQU83VyxLQUFLTSxFQUFMLENBQVFJLE9BQU9tRixNQUFmLENBQWI7QUFDQSxZQUFJZ1IsSUFBSixFQUFVO0FBQ04sZ0JBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1ZBLDBCQUFVLHdCQUNOSixNQURNLEdBRU4sK0JBRk0sR0FHTkcsTUFBTUgsTUFBTixDQUhNLEdBR1UsWUFIVixHQUd5QjNDLE1BQU0yQyxNQUFOLENBSHpCLEdBR3lDLFFBSG5EO0FBSUg7QUFDREssaUJBQUtDLE9BQUwsQ0FBYUYsT0FBYjtBQUNIO0FBQ0o7QUFDRCxhQUFTRyxPQUFULEdBQW1CO0FBQ2ZwRTtBQUNBcUUsa0JBQVUsTUFBVjtBQUNIO0FBQ0QsYUFBU0MsSUFBVCxDQUFjN08sR0FBZCxFQUFtQjtBQUNmdUs7QUFDQXFFLGtCQUFVLE9BQVYsRUFBbUI1TyxHQUFuQjtBQUNIO0FBQ0QsYUFBU3FCLEtBQVQsQ0FBZTJFLE9BQWYsRUFBd0I7QUFDcEJ1RTtBQUNBcUUsa0JBQVUsUUFBVjtBQUNBLFlBQUk1SSxXQUFXQSxRQUFRakosSUFBdkIsRUFBNkI7QUFDekJpSixvQkFBUWpKLElBQVIsQ0FBYTRSLE9BQWIsRUFBc0JFLElBQXRCO0FBQ0g7QUFDSjtBQUNELGFBQVNDLFNBQVQsR0FBcUI7QUFDakIsZUFBT1YsTUFBUDtBQUNIO0FBQ0QsYUFBU1csVUFBVCxHQUFzQjtBQUNsQixZQUFJeEUsVUFBVSxDQUFkLEVBQWlCO0FBQ2J0TyxvQkFBUSxHQUFSO0FBQ0g7QUFDSjtBQUNELGFBQVMyUyxTQUFULENBQW1CSSxJQUFuQixFQUF5QmhQLEdBQXpCLEVBQThCO0FBQzFCLFlBQUl1SyxRQUFRLENBQVosRUFBZTtBQUNYQSxvQkFBUSxDQUFSO0FBQ0g7QUFDRCxZQUFJeUUsU0FBUyxRQUFiLEVBQXVCO0FBQ25CWixxQkFBUyxRQUFUO0FBQ0FuUztBQUNILFNBSEQsTUFJSztBQUNEb1Msc0JBQVdXLFNBQVMsT0FBcEI7QUFDQSxnQkFBSXpFLFVBQVUsQ0FBZCxFQUFpQjtBQUNiNkQseUJBQVNDLFVBQVUsT0FBVixHQUFvQixNQUE3QjtBQUNBLG9CQUFJQSxPQUFKLEVBQWE7QUFDVHBYLHdCQUFJdUosS0FBSixDQUFVLGtCQUFWLEVBQThCLENBQUNSLElBQUlpUCxZQUFKLElBQW9CalAsR0FBckIsQ0FBOUI7QUFDSCxpQkFGRCxNQUdLO0FBQ0Qsd0JBQUlzTyxXQUFKLEVBQWlCO0FBQ2JoSyxtQ0FBV3lLLFVBQVgsRUFBdUJULFdBQXZCO0FBQ0g7QUFDSjtBQUNEclM7QUFDSDtBQUNKO0FBQ0o7QUFDRCxhQUFTaVQsS0FBVCxDQUFlM0wsSUFBZixFQUFxQjtBQUNqQixZQUFNNEwsS0FBS2xZLElBQUlYLEtBQUosQ0FBVTZZLEVBQVYsQ0FBYTVMLElBQWIsQ0FBWDtBQUNBLFlBQUk0TCxFQUFKLEVBQVE7QUFDSnZYLGlCQUFLYSxFQUFMLENBQVEwVyxFQUFSLEVBQVksaUJBQVosRUFBK0I5TixLQUEvQjtBQUNBekosaUJBQUthLEVBQUwsQ0FBUTBXLEVBQVIsRUFBWSxrQkFBWixFQUFnQyxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBWS9QLFFBQVo7QUFBQSx1QkFBeUJ1UCxLQUFLdlAsUUFBTCxDQUF6QjtBQUFBLGFBQWhDO0FBQ0ExSCxpQkFBS2EsRUFBTCxDQUFRMFcsRUFBUixFQUFZLGFBQVosRUFBMkJSLE9BQTNCO0FBQ0g7QUFDSjtBQUNEMVgsUUFBSXlLLFVBQUosQ0FBZSxRQUFmLEVBQXlCO0FBQ3JCb04sNEJBRHFCO0FBRXJCRiw0QkFGcUI7QUFHckJNO0FBSHFCLEtBQXpCO0FBS0EsUUFBSTVXLE9BQU9nWCxNQUFYLEVBQW1CO0FBQ2YxWCxhQUFLYSxFQUFMLENBQVF4QixJQUFJWCxLQUFaLEVBQW1CLGNBQW5CLEVBQW1DK0ssS0FBbkM7QUFDSDtBQUNELFFBQUkvSSxPQUFPaVgsSUFBWCxFQUFpQjtBQUNiM1gsYUFBS2EsRUFBTCxDQUFReEIsSUFBSVgsS0FBWixFQUFtQixjQUFuQixFQUFtQyxVQUFDa1osS0FBRCxFQUFRQyxJQUFSLEVBQWMvWSxLQUFkLEVBQXFCZ1osUUFBckIsRUFBK0JDLFFBQS9CLEVBQXlDQyxNQUF6QyxFQUFpRDVKLE9BQWpELEVBQTZEO0FBQzVGM0Usa0JBQU0yRSxPQUFOO0FBQ0gsU0FGRDtBQUdIO0FBQ0QsUUFBSTFOLE9BQU9pTCxJQUFYLEVBQWlCO0FBQ2IyTCxjQUFNNVcsT0FBT2lMLElBQWI7QUFDSDtBQUNKOztBQUVELFNBQVNzTSxLQUFULENBQWU1WSxHQUFmLEVBQW9CNFYsS0FBcEIsRUFBMkJ2VSxNQUEzQixFQUFtQztBQUMvQkEsYUFBU0EsVUFBVSxFQUFuQjtBQUNBLFFBQU1pUCxVQUFValAsT0FBT2lQLE9BQXZCO0FBQ0EsUUFBSXVJLFFBQVF2SSxVQUNQQSxRQUFRdkcsR0FBUixDQUFZLE9BQVosS0FBd0IsY0FEakIsR0FHSDFJLE9BQU93WCxLQUFQLElBQWdCLGNBSHpCO0FBSUEsUUFBTTVDLFVBQVU7QUFDWjZDLGdCQURZLHNCQUNEO0FBQUUsbUJBQU9ELEtBQVA7QUFBZSxTQURoQjtBQUVaRSxnQkFGWSxvQkFFSHRYLElBRkcsRUFFR3VGLE1BRkgsRUFFVztBQUNuQixnQkFBTTNELFFBQVE1QixLQUFLNkIsS0FBTCxDQUFXLEdBQVgsQ0FBZDtBQUNBLGdCQUFNMFYsUUFBUWxSLFNBQVNtUixvQkFBVCxDQUE4QixNQUE5QixDQUFkO0FBQ0EsaUJBQUssSUFBSTNXLElBQUksQ0FBYixFQUFnQkEsSUFBSTBXLE1BQU16VyxNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDbkMsb0JBQU00VyxRQUFRRixNQUFNMVcsQ0FBTixFQUFTa0osWUFBVCxDQUFzQixPQUF0QixDQUFkO0FBQ0Esb0JBQUkwTixLQUFKLEVBQVc7QUFDUCx3QkFBSUEsVUFBVXpYLElBQVYsSUFBa0J5WCxVQUFVN1YsTUFBTSxDQUFOLENBQWhDLEVBQTBDO0FBQ3RDMlYsOEJBQU0xVyxDQUFOLEVBQVM2VyxRQUFULEdBQW9CLEtBQXBCO0FBQ0gscUJBRkQsTUFHSztBQUNESCw4QkFBTTFXLENBQU4sRUFBUzZXLFFBQVQsR0FBb0IsSUFBcEI7QUFDSDtBQUNKO0FBQ0o7QUFDRG5aLGdCQUFJWCxLQUFKLENBQVUrWixJQUFWLENBQWVyUyxHQUFmLENBQW1CMUQsTUFBTSxDQUFOLENBQW5CO0FBQ0E7QUFDQXJELGdCQUFJWCxLQUFKLENBQVVtTyxJQUFWLENBQWVFLFNBQWYsQ0FBeUI1RixTQUFTQyxJQUFsQyxFQUF3QyxXQUFXOFEsS0FBbkQ7QUFDQTtBQUNBN1ksZ0JBQUlYLEtBQUosQ0FBVW1PLElBQVYsQ0FBZUMsTUFBZixDQUFzQjNGLFNBQVNDLElBQS9CLEVBQXFDLFdBQVd0RyxJQUFoRDtBQUNBb1gsb0JBQVFwWCxJQUFSO0FBQ0EsZ0JBQUk2TyxPQUFKLEVBQWE7QUFDVEEsd0JBQVFHLEdBQVIsQ0FBWSxPQUFaLEVBQXFCaFAsSUFBckI7QUFDSDtBQUNELGdCQUFJLENBQUN1RixNQUFMLEVBQWE7QUFDVGhILG9CQUFJZ0YsT0FBSjtBQUNIO0FBQ0o7QUE1QlcsS0FBaEI7QUE4QkFoRixRQUFJeUssVUFBSixDQUFlLE9BQWYsRUFBd0J3TCxPQUF4QjtBQUNBQSxZQUFROEMsUUFBUixDQUFpQkYsS0FBakIsRUFBd0IsSUFBeEI7QUFDSDs7QUFFRCxTQUFTUSxVQUFULENBQW9CL00sSUFBcEIsRUFBMEJqTSxHQUExQixFQUErQm9FLEtBQS9CLEVBQXNDO0FBQ2xDLFNBQUssSUFBSW5DLElBQUksQ0FBYixFQUFnQkEsSUFBSW1DLE1BQU1sQyxNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDbkNnSyxhQUFLN0gsTUFBTW5DLENBQU4sQ0FBTCxJQUFpQmpDLElBQUlpQyxJQUFJLENBQVIsSUFBYWpDLElBQUlpQyxJQUFJLENBQVIsRUFBV3lCLElBQXhCLEdBQStCLEVBQWhEO0FBQ0g7QUFDSjtBQUNELFNBQVN1VixRQUFULENBQWtCdFosR0FBbEIsRUFBdUJXLElBQXZCLEVBQTZCVSxNQUE3QixFQUFxQztBQUNqQyxRQUFNb0QsUUFBUXBELE9BQU9vRCxLQUFQLElBQWdCcEQsTUFBOUI7QUFDQSxRQUFNaUwsT0FBTyxFQUFiO0FBQ0EzTCxTQUFLYSxFQUFMLENBQVF4QixHQUFSLEVBQWEsZUFBYixFQUE4QixVQUFVbUMsT0FBVixFQUFtQndFLE9BQW5CLEVBQTRCO0FBQ3RELFlBQUloRyxTQUFTd0IsT0FBYixFQUFzQjtBQUNsQmtYLHVCQUFXL00sSUFBWCxFQUFpQjNGLFFBQVE3RixNQUFSLEVBQWpCLEVBQW1DMkQsS0FBbkM7QUFDQWtDLG9CQUFRWixJQUFSLENBQWF0QixNQUFNbEMsTUFBTixHQUFlLENBQTVCO0FBQ0g7QUFDSixLQUxEO0FBTUEsUUFBTWdYLEtBQUs1WSxLQUFLVCxRQUFoQjtBQUNBLFFBQU1zWixLQUFLN1ksS0FBS0YsUUFBaEI7QUFDQUUsU0FBS1QsUUFBTCxHQUFnQixVQUFVdUIsSUFBVixFQUFnQnJCLEtBQWhCLEVBQXVCSSxJQUF2QixFQUE2QjtBQUN6QyxZQUFNa0UsUUFBUUQsTUFBTWQsT0FBTixDQUFjbEMsSUFBZCxDQUFkO0FBQ0EsWUFBSWlELFNBQVMsQ0FBYixFQUFnQjtBQUNaNEgsaUJBQUs3SyxJQUFMLElBQWFyQixLQUFiO0FBQ0EsaUJBQUtFLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQixFQUFyQixFQUF5QkgsS0FBekIsRUFBZ0NzRSxRQUFRLENBQXhDO0FBQ0EsZ0JBQUlsRSxJQUFKLEVBQVU7QUFDTix1QkFBT0csS0FBS0gsSUFBTCxDQUFVLElBQVYsQ0FBUDtBQUNIO0FBQ0osU0FORCxNQU9LO0FBQ0QsbUJBQU8rWSxHQUFHcEksSUFBSCxDQUFRLElBQVIsRUFBYzFQLElBQWQsRUFBb0JyQixLQUFwQixFQUEyQkksSUFBM0IsQ0FBUDtBQUNIO0FBQ0osS0FaRDtBQWFBRyxTQUFLRixRQUFMLEdBQWdCLFVBQVVxQixHQUFWLEVBQWVpVyxJQUFmLEVBQXFCO0FBQ2pDLFlBQU0wQixNQUFNbk4sS0FBS3hLLEdBQUwsQ0FBWjtBQUNBLFlBQUksT0FBTzJYLEdBQVAsS0FBZSxXQUFuQixFQUFnQztBQUM1QixtQkFBT0EsR0FBUDtBQUNIO0FBQ0QsZUFBT0QsR0FBR3JJLElBQUgsQ0FBUSxJQUFSLEVBQWNyUCxHQUFkLEVBQW1CaVcsSUFBbkIsQ0FBUDtBQUNILEtBTkQ7QUFPQXNCLGVBQVcvTSxJQUFYLEVBQWlCM0wsS0FBS0UsTUFBTCxFQUFqQixFQUFnQzRELEtBQWhDO0FBQ0g7O0FBRUQsU0FBU2lWLElBQVQsQ0FBYzFaLEdBQWQsRUFBbUI0VixLQUFuQixFQUEwQnZVLE1BQTFCLEVBQWtDO0FBQzlCQSxhQUFTQSxVQUFVLEVBQW5CO0FBQ0EsUUFBTXNZLFFBQVF0WSxPQUFPc1ksS0FBUCxJQUFnQixRQUE5QjtBQUNBLFFBQU1DLFNBQVN2WSxPQUFPdVksTUFBUCxJQUFpQixTQUFoQztBQUNBLFFBQU1DLGFBQWF4WSxPQUFPd1ksVUFBUCxJQUFxQjdaLElBQUlxQixNQUFKLENBQVcrSSxLQUFuRDtBQUNBLFFBQU0wUCxjQUFjelksT0FBT3lZLFdBQVAsSUFBc0IsUUFBMUM7QUFDQSxRQUFNQyxPQUFPMVksT0FBTzBZLElBQVAsSUFBZSxJQUFJLEVBQUosR0FBUyxJQUFyQztBQUNBLFFBQU1DLFFBQVEzWSxPQUFPMlksS0FBckI7QUFDQSxRQUFJQyxPQUFPNVksT0FBTzRZLElBQWxCO0FBQ0EsUUFBTWhFLFVBQVU7QUFDWmlFLGVBRFkscUJBQ0Y7QUFDTixtQkFBT0QsSUFBUDtBQUNILFNBSFc7QUFJWnBDLGlCQUpZLHFCQUlGc0MsTUFKRSxFQUlNO0FBQ2QsZ0JBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1QsdUJBQU9GLFNBQVMsSUFBaEI7QUFDSDtBQUNELG1CQUFPRCxNQUFNN0MsTUFBTixHQUFldFIsS0FBZixDQUFxQjtBQUFBLHVCQUFNLElBQU47QUFBQSxhQUFyQixFQUFpQ0MsSUFBakMsQ0FBc0MsZ0JBQVE7QUFDakRtVSx1QkFBTzNOLElBQVA7QUFDSCxhQUZNLENBQVA7QUFHSCxTQVhXO0FBWVpxTixhQVpZLGlCQVlObFksSUFaTSxFQVlBMlksSUFaQSxFQVlNO0FBQ2QsbUJBQU9KLE1BQU1MLEtBQU4sQ0FBWWxZLElBQVosRUFBa0IyWSxJQUFsQixFQUF3QnRVLElBQXhCLENBQTZCLGdCQUFRO0FBQ3hDbVUsdUJBQU8zTixJQUFQO0FBQ0Esb0JBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsMEJBQU0sSUFBSVIsS0FBSixDQUFVLGVBQVYsQ0FBTjtBQUNIO0FBQ0Q5TCxvQkFBSTRGLFNBQUosQ0FBYyxnQkFBZCxFQUFnQyxDQUFDcVUsSUFBRCxDQUFoQztBQUNBamEsb0JBQUlRLElBQUosQ0FBU3FaLFVBQVQ7QUFDSCxhQVBNLENBQVA7QUFRSCxTQXJCVztBQXNCWkQsY0F0Qlksb0JBc0JIO0FBQ0xLLG1CQUFPLElBQVA7QUFDQSxtQkFBT0QsTUFBTUosTUFBTixHQUFlOVQsSUFBZixDQUFvQixlQUFPO0FBQzlCOUYsb0JBQUk0RixTQUFKLENBQWMsaUJBQWQsRUFBaUMsRUFBakM7QUFDQSx1QkFBT0wsR0FBUDtBQUNILGFBSE0sQ0FBUDtBQUlIO0FBNUJXLEtBQWhCO0FBOEJBLGFBQVM4VSxXQUFULENBQXFCaGEsR0FBckIsRUFBMEJlLEdBQTFCLEVBQStCO0FBQzNCLFlBQUlmLFFBQVF1WixNQUFaLEVBQW9CO0FBQ2hCM0Qsb0JBQVEyRCxNQUFSO0FBQ0F4WSxnQkFBSXFFLFFBQUosR0FBZXFVLFdBQWY7QUFDSCxTQUhELE1BSUssSUFBSXpaLFFBQVFzWixLQUFSLElBQWlCLENBQUMxRCxRQUFRNEIsU0FBUixFQUF0QixFQUEyQztBQUM1Q3pXLGdCQUFJcUUsUUFBSixHQUFla1UsS0FBZjtBQUNIO0FBQ0o7QUFDRDNaLFFBQUl5SyxVQUFKLENBQWUsTUFBZixFQUF1QndMLE9BQXZCO0FBQ0FqVyxRQUFJMkIsV0FBSixjQUE2QixVQUFVdEIsR0FBVixFQUFlaWEsTUFBZixFQUF1QmxaLEdBQXZCLEVBQTRCO0FBQ3JELFlBQUlDLE9BQU9rWixNQUFQLElBQWlCbFosT0FBT2taLE1BQVAsQ0FBY2xhLEdBQWQsQ0FBckIsRUFBeUM7QUFDckMsbUJBQU8sSUFBUDtBQUNIO0FBQ0QsWUFBSSxPQUFPNFosSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUM3QjdZLGdCQUFJc0UsT0FBSixHQUFjdVEsUUFBUTRCLFNBQVIsQ0FBa0IsSUFBbEIsRUFBd0IvUixJQUF4QixDQUE2QjtBQUFBLHVCQUFNdVUsWUFBWWhhLEdBQVosRUFBaUJlLEdBQWpCLENBQU47QUFBQSxhQUE3QixDQUFkO0FBQ0g7QUFDRCxlQUFPaVosWUFBWWhhLEdBQVosRUFBaUJlLEdBQWpCLENBQVA7QUFDSCxLQVJEO0FBU0EsUUFBSTJZLElBQUosRUFBVTtBQUNOUyxvQkFBWTtBQUFBLG1CQUFNdkUsUUFBUTRCLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBTjtBQUFBLFNBQVosRUFBMkNrQyxJQUEzQztBQUNIO0FBQ0o7O0FBRUQ7Ozs7QUFJQSxJQUFJMWEsUUFBUTZLLE9BQU83SyxLQUFuQjtBQUNBLElBQUlBLEtBQUosRUFBVztBQUNQdVAsVUFBTXZQLEtBQU47QUFDSDtBQUNELElBQU1vYixVQUFVO0FBQ1ozSiw0QkFEWSxFQUNDNkUsY0FERCxFQUNTYSxVQURULEVBQ2VvQyxZQURmLEVBQ3NCYyxVQUR0QixFQUM0QnhDLGNBRDVCLEVBQ29Db0M7QUFEcEMsQ0FBaEI7QUFHQSxJQUFNekssSUFBSTNFLE1BQVY7QUFDQSxJQUFJLENBQUMyRSxFQUFFdkosT0FBUCxFQUFnQjtBQUNadUosTUFBRXZKLE9BQUYsR0FBWXVKLEVBQUV4UCxLQUFGLENBQVEwUCxPQUFwQjtBQUNIOztBQUVEO0FBQ0EsK0I7Ozs7Ozs7Ozs7Ozs7OztBQ3Y4REEsSUFBTTJMLFlBQVksOEJBQWxCO0FBQ0EsSUFBTUMsV0FBVyw2QkFBakI7QUFDQSxJQUFNQyxjQUFjLGdDQUFwQjs7SUFFcUJDLGE7Ozs7O3lCQUNwQkMsUSxxQkFBUzFaLEcsRUFBSztBQUNiLFNBQU8vQixNQUFNaVosSUFBTixHQUFheUMsSUFBYixDQUFrQkgsV0FBbEIsRUFBK0J4WixHQUEvQixDQUFQO0FBQ0EsRTs7eUJBRUR1WSxLLGtCQUFNdlksRyxFQUFLO0FBQ1YsU0FBTy9CLE1BQU1pWixJQUFOLEdBQWF5QyxJQUFiLENBQWtCSixRQUFsQixFQUE0QnZaLEdBQTVCLENBQVA7QUFDQSxFOzt5QkFFRHdZLE0sbUJBQU9vQixJLEVBQU07QUFDWixTQUFPM2IsTUFBTWlaLElBQU4sR0FBYXlDLElBQWIsQ0FBa0JMLFNBQWxCLEVBQTZCTSxJQUE3QixDQUFQO0FBQ0EsRTs7Ozs7QUFYbUJILDRFOzs7Ozs7Ozs7Ozs7QUNKckI7QUFBQTtBQUFBO0FBQUEsSUFBTUksYUFBYSw4RUFBbkI7QUFDQSxJQUFNQyxVQUFVLENBQWhCOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSx1RTs7Ozs7Ozs7Ozs7Ozs7O0lDUk1DLFU7QUFDTCx1QkFBYztBQUFBOztBQUNiLE9BQUsxYixLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUsrWSxJQUFMLEdBQVksOEJBQVo7QUFDQTs7c0JBRUQ0QyxpQiw4QkFBa0JqYixFLEVBQUk7QUFDckIsTUFBTWtiLFVBQVUsRUFBQ0EsU0FBU2xiLEVBQVYsRUFBaEI7QUFDQSxTQUFPZCxNQUFNaVosSUFBTixHQUFhdk8sR0FBYixDQUFpQixLQUFLeU8sSUFBdEIsRUFBNEI2QyxPQUE1QixDQUFQO0FBQ0EsRTs7c0JBRURDLE8sb0JBQVFoUCxJLEVBQU07QUFDYixTQUFPak4sTUFBTWlaLElBQU4sR0FBYXlDLElBQWIsQ0FBa0IsS0FBS3ZDLElBQXZCLEVBQTZCbE0sSUFBN0IsQ0FBUDtBQUNBLEU7O3NCQUVEaVAsVSx1QkFBV2pQLEksRUFBTTtBQUNoQixTQUFPak4sTUFBTWlaLElBQU4sR0FBYTdILEdBQWIsQ0FBaUIsS0FBSytILElBQXRCLEVBQTRCbE0sSUFBNUIsQ0FBUDtBQUNBLEU7O3NCQUVEa1AsVSx1QkFBV3JiLEUsRUFBSTtBQUNkLFNBQU9kLE1BQU1pWixJQUFOLEdBQWFtRCxHQUFiLENBQWlCLEtBQUtqRCxJQUF0QixFQUE0QnJZLEVBQTVCLENBQVA7QUFDQSxFOzs7OztBQUdhLG1FQUFJZ2IsVUFBSixFQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztJQ3hCTU8sVTtBQUNMLHVCQUFjO0FBQUE7O0FBQ2IsT0FBS2xELElBQUwsR0FBWSw4QkFBWjtBQUNBOztzQkFFRDRDLGlCLGdDQUFvQjtBQUNuQixTQUFPL2IsTUFBTWlaLElBQU4sR0FBYXZPLEdBQWIsQ0FBaUIsS0FBS3lPLElBQXRCLENBQVA7QUFDQSxFOztzQkFFRG1ELFEscUJBQVN4YixFLEVBQUk7QUFDWixTQUFPZCxNQUFNaVosSUFBTixHQUFhdk8sR0FBYixNQUFvQixLQUFLeU8sSUFBekIsR0FBZ0NyWSxFQUFoQyxDQUFQO0FBQ0EsRTs7c0JBRURtYixPLG9CQUFRaFAsSSxFQUFNO0FBQ2IsU0FBT2pOLE1BQU1pWixJQUFOLEdBQWF5QyxJQUFiLENBQWtCLEtBQUt2QyxJQUF2QixFQUE2QmxNLElBQTdCLENBQVA7QUFDQSxFOztzQkFFRGlQLFUsdUJBQVdqUCxJLEVBQU07QUFDaEIsU0FBT2pOLE1BQU1pWixJQUFOLEdBQWE3SCxHQUFiLENBQWlCLEtBQUsrSCxJQUF0QixFQUE0QmxNLElBQTVCLENBQVA7QUFDQSxFOztzQkFFRHNQLFkseUJBQWF6YixFLEVBQUk7QUFDaEIsU0FBT2QsTUFBTWlaLElBQU4sR0FBYWpRLFFBQWIsQ0FBc0IsTUFBdEIsRUFBOEIwQixHQUE5QixDQUFxQyxLQUFLeU8sSUFBMUMsaUJBQTBEclksRUFBMUQsQ0FBUDtBQUNBLEU7Ozs7O0FBR2EsbUVBQUl1YixVQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0lDMUJNRyxVO0FBQ0wsdUJBQWM7QUFBQTs7QUFDYixPQUFLcGMsS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLK1ksSUFBTCxHQUFZLDhCQUFaO0FBQ0E7O3NCQUVENEMsaUIsZ0NBQW9CO0FBQ25CLFNBQU8vYixNQUFNaVosSUFBTixHQUFhdk8sR0FBYixDQUFpQixLQUFLeU8sSUFBdEIsQ0FBUDtBQUNBLEU7O3NCQUVEc0QsTyxvQkFBUUMsTSxFQUFRQyxNLEVBQVE7QUFDdkIsTUFBTTFQLE9BQU87QUFDWnlQLFdBQVFBLE1BREk7QUFFWkMsV0FBUUE7QUFGSSxHQUFiOztBQUtBLFNBQU8zYyxNQUFNaVosSUFBTixHQUFheUMsSUFBYixDQUFrQixLQUFLdkMsSUFBdkIsRUFBNkJsTSxJQUE3QixDQUFQO0FBQ0EsRTs7c0JBRUQyUCxVLHVCQUFXRixNLEVBQVFDLE0sRUFBUTtBQUMxQixNQUFNMVAsT0FBTztBQUNaeVAsV0FBUUEsTUFESTtBQUVaQyxXQUFRQTtBQUZJLEdBQWI7O0FBS0EsU0FBTzNjLE1BQU1pWixJQUFOLEdBQWFtRCxHQUFiLENBQWlCLEtBQUtqRCxJQUF0QixFQUE0QmxNLElBQTVCLENBQVA7QUFDQSxFOzs7OztBQUdhLG1FQUFJdVAsVUFBSixFQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztJQzdCTUssVTtBQUNMLHVCQUFjO0FBQUE7O0FBQ2IsT0FBSzFELElBQUwsR0FBWSw4QkFBWjtBQUNBOztzQkFFRDRDLGlCLGdDQUFvQjtBQUNuQixTQUFPL2IsTUFBTWlaLElBQU4sR0FBYXZPLEdBQWIsQ0FBaUIsS0FBS3lPLElBQXRCLENBQVA7QUFDQSxFOztzQkFFRDJELE8sb0JBQVFoYyxFLEVBQUk7QUFDWCxTQUFPZCxNQUFNaVosSUFBTixHQUFhdk8sR0FBYixNQUFvQixLQUFLeU8sSUFBekIsR0FBZ0NyWSxFQUFoQyxDQUFQO0FBQ0EsRTs7c0JBRURtYixPLG9CQUFRaFAsSSxFQUFNO0FBQ2IsU0FBT2pOLE1BQU1pWixJQUFOLEdBQWF5QyxJQUFiLENBQWtCLEtBQUt2QyxJQUF2QixFQUE2QmxNLElBQTdCLENBQVA7QUFDQSxFOztzQkFFRGlQLFUsdUJBQVdqUCxJLEVBQU07QUFDaEIsU0FBT2pOLE1BQU1pWixJQUFOLEdBQWE3SCxHQUFiLENBQWlCLEtBQUsrSCxJQUF0QixFQUE0QmxNLElBQTVCLENBQVA7QUFDQSxFOzs7OztBQUdhLG1FQUFJNFAsVUFBSixFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOztJQUVxQkUsSzs7O0FBQ3BCLGdCQUFZL2EsTUFBWixFQUFtQjtBQUFBOztBQUNsQixNQUFNZ2IsV0FBVztBQUNoQmxjLE9BQU9tYyxlQURTO0FBRWhCblMsWUFBVW9TLE9BRk07QUFHaEJwUSxXQUFVcVEsTUFBZUEsR0FBRzVMLFNBQWxCLEdBQWdDOUMsb0RBSDFCO0FBSWhCcEIsVUFBUyxDQUFDK1AsS0FKTTtBQUtoQnJTLFVBQVM7QUFMTyxHQUFqQjs7QUFEa0IsMENBU2xCLGdDQUFXaVMsUUFBWCxFQUF3QmhiLE1BQXhCLEVBVGtCO0FBVWxCOzs7RUFYaUM4TyxnRDs7QUFBZGlNLG9FOzs7QUFjckIsSUFBSSxJQUFKLEVBQXFCO0FBQ3BCL2MsT0FBTStILEtBQU4sQ0FBWSxZQUFNO0FBQ2pCLE1BQU1wSCxNQUFNLElBQUlvYyxLQUFKLEVBQVo7QUFDQXBjLE1BQUkyQixXQUFKLENBQWdCLFdBQWhCLEVBQTZCLFVBQUN0QixHQUFELEVBQU1NLElBQU4sRUFBWStiLEdBQVosRUFBb0I7QUFDaEQsT0FBR3JjLElBQUlzRCxPQUFKLENBQVksSUFBWixNQUFzQixDQUFDLENBQTFCLEVBQTZCO0FBQzVCLFFBQU1nWixXQUFXdGMsSUFBSWlELEtBQUosQ0FBVSxHQUFWLENBQWpCO0FBQ0EsUUFBSXNaLG1CQUFKOztBQUVBRCxhQUFTdkwsT0FBVCxDQUFpQixVQUFDeUwsRUFBRCxFQUFRO0FBQ3hCLFNBQUdBLEdBQUdsWixPQUFILENBQVcsSUFBWCxLQUFvQixDQUFDLENBQXhCLEVBQTJCO0FBQzFCaVosbUJBQWFDLEVBQWI7QUFFQTtBQUNELEtBTEQ7O0FBT0EsUUFBTXZhLElBQUlzYSxXQUFXalosT0FBWCxDQUFtQixJQUFuQixDQUFWO0FBQ0EsUUFBTW1aLE9BQU9GLFdBQVd0WixLQUFYLENBQWlCLEdBQWpCLEVBQXNCLENBQXRCLENBQWI7QUFDQSxRQUFNbkQsS0FBS3ljLFdBQVc5WCxLQUFYLENBQWlCeEMsSUFBRSxDQUFuQixDQUFYOztBQUVBakQsVUFBTWlaLElBQU4sR0FBYXZPLEdBQWIsQ0FBaUIsNkJBQWpCLEVBQWdEakUsSUFBaEQsQ0FDQyxVQUFDUCxHQUFELEVBQVM7QUFDUixTQUFNOEMsV0FBVzlDLElBQUl3WCxJQUFKLEVBQWpCOztBQUVBLFNBQUksQ0FBQzFVLFFBQUQsSUFBYUEsU0FBU3lVLElBQVQsSUFBaUJBLElBQTlCLElBQXNDelUsU0FBU2xJLEVBQVQsSUFBZUEsRUFBekQsRUFBNkQ7QUFDNURILFVBQUlRLElBQUosQ0FBUyxRQUFUO0FBQ0E7QUFDRCxLQVBGLEVBUUMsVUFBQytJLEtBQUQsRUFBVztBQUNWLFNBQUdBLE1BQU00TixNQUFOLElBQWdCLEdBQW5CLEVBQXdCO0FBQ3ZCblgsVUFBSVEsSUFBSixDQUFTLFFBQVQ7QUFDQTtBQUNELEtBWkY7QUFjQTtBQUNELEdBL0JEOztBQWlDQVIsTUFBSXVHLE1BQUo7QUFDQSxFQXBDRDtBQXFDQSxDOzs7Ozs7Ozs7Ozs7QUN2REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU15VyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUM3QyxLQUFJRCxTQUFKLEVBQWU7QUFDZEMsVUFBUTFjLElBQVI7QUFDQSxFQUZELE1BR0s7QUFDSjBjLFVBQVFDLElBQVI7QUFDQTtBQUNELENBUEQ7O0FBU0EsSUFBTTdCLFVBQVUsU0FBVkEsT0FBVSxDQUFDOEIsS0FBRCxFQUFROVEsSUFBUixFQUFjK1EsYUFBZCxFQUFnQztBQUMvQ0QsT0FBTTlCLE9BQU4sQ0FBY2hQLElBQWQsRUFBb0J4RyxJQUFwQixDQUF5QixVQUFDdUMsUUFBRCxFQUFjOztBQUV0QyxNQUFNOE8sU0FBUzlPLFNBQVMwVSxJQUFULEdBQWdCTyxZQUEvQjtBQUNBLE1BQUduRyxVQUFVK0QsK0NBQWIsRUFBc0I7QUFDckJrQyxTQUFNaEMsaUJBQU4sR0FBMEJ0VixJQUExQixDQUErQixZQUFNO0FBQ3BDdVg7QUFDQSxJQUZEO0FBR0E7QUFDRCxFQVJEO0FBU0EsQ0FWRDs7QUFZQSxJQUFNOUIsYUFBYSxTQUFiQSxVQUFhLENBQUM2QixLQUFELEVBQVE5USxJQUFSLEVBQWMrUSxhQUFkLEVBQWdDO0FBQ2xERCxPQUFNN0IsVUFBTixDQUFpQmpQLElBQWpCLEVBQXVCeEcsSUFBdkIsQ0FBNEIsVUFBQ3VDLFFBQUQsRUFBYzs7QUFFekMsTUFBTThPLFNBQVM5TyxTQUFTMFUsSUFBVCxHQUFnQk8sWUFBL0I7QUFDQSxNQUFHbkcsVUFBVStELCtDQUFiLEVBQXNCO0FBQ3JCbUM7QUFDQTtBQUNELEVBTkQ7QUFPQSxDQVJEOztBQVVBaGUsTUFBTXdRLE9BQU4sQ0FBYztBQUNicE8sT0FBTSxZQURPO0FBRWI0YSxXQUFVO0FBQ1RrQixjQUFZLElBREg7QUFFVEMsY0FBWSxJQUZIO0FBR1R6USxRQUFNO0FBQ0wwUSxXQUFRO0FBREg7QUFIRztBQUZHLENBQWQsRUFTR3BlLE1BQU04RyxFQUFOLENBQVN1WCxJQVRaOzs7Ozs7Ozs7Ozs7O0FDakNBLHVDOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJDLE87Ozs7Ozs7OzttQkFDcEJ0YyxNLHFCQUFRO0FBQUE7O0FBRVAsTUFBTXVjLFNBQVM7QUFDZDdRLFNBQUssUUFEUztBQUVkYSxhQUFVO0FBRkksR0FBZjs7QUFLQSxNQUFNZ00sU0FBUztBQUNkalosU0FBSyxRQURTO0FBRWRXLFlBQVEsV0FGTTtBQUdkbEIsVUFBTSxRQUhRO0FBSWR5ZCxVQUFPLEdBSk87QUFLZDlRLFNBQUs7QUFMUyxHQUFmOztBQVFBLE1BQU0rUSxTQUFTO0FBQ2RuZCxTQUFNLFdBRFE7QUFFZFIsT0FBSSxXQUZVO0FBR2Q0ZCxZQUFTLENBQ1I7QUFDQzVkLFFBQUksSUFETDtBQUVDNmQsWUFBUTtBQUZULElBRFEsRUFLUjtBQUNDN2QsUUFBSSxXQURMO0FBRUN5ZCxZQUFRLE1BRlQ7QUFHQ0ssY0FBVSxHQUhYO0FBSUNDLGVBQVc7QUFKWixJQUxRLEVBV1I7QUFDQy9kLFFBQUksV0FETDtBQUVDeWQsWUFBUSxNQUZUO0FBR0NDLFdBQU87QUFIUixJQVhRLEVBZ0JSO0FBQ0MxZCxRQUFJLGFBREw7QUFFQ3lkLFlBQVEsYUFGVDtBQUdDQyxXQUFPO0FBSFIsSUFoQlEsRUFxQlI7QUFDQzFkLFFBQUksWUFETDtBQUVDeWQsWUFBUSxZQUZUO0FBR0NDLFdBQU87QUFIUixJQXJCUSxFQTBCUjtBQUNDMWQsUUFBSSxTQURMO0FBRUN5ZCxZQUFRLFNBRlQ7QUFHQ0ssY0FBVSxHQUhYO0FBSUNDLGVBQVc7QUFKWixJQTFCUSxFQWdDUjtBQUNDL2QsUUFBSSxlQURMO0FBRUN5ZCxZQUFRLGNBRlQ7QUFHQ0MsV0FBTztBQUhSLElBaENRLEVBcUNSO0FBQ0MxZCxRQUFJLE9BREw7QUFFQ3lkLFlBQVEsT0FGVDtBQUdDQyxXQUFPO0FBSFIsSUFyQ1EsRUEwQ1I7QUFDQzFkLFFBQUksTUFETDtBQUVDeWQsWUFBUSxNQUZUO0FBR0NDLFdBQU8sRUFIUjtBQUlDalEsY0FBVTtBQUpYLElBMUNRLENBSEs7QUFvRGR1USxZQUFTO0FBQ1Isa0JBQWMsbUJBQUN0VixDQUFELEVBQUkxSSxFQUFKLEVBQVc7QUFDeEIsWUFBS2llLFFBQUwsQ0FBY2plLEVBQWQ7QUFDQTtBQUhPO0FBcERLLEdBQWY7O0FBMkRBLE1BQU1rZSxhQUFhO0FBQ2xCMWQsU0FBTSxRQURZO0FBRWxCUCxVQUFPLFVBRlc7QUFHbEIyTSxTQUFNLE1BSFk7QUFJbEI4USxVQUFPLEdBSlc7QUFLbEJTLFVBQU8saUJBQU07QUFDWixXQUFLQyxPQUFMO0FBQ0E7QUFQaUIsR0FBbkI7O0FBVUEsTUFBTXBZLEtBQUs7QUFDVnFZLFNBQUssQ0FDSjtBQUNDelIsVUFBTSxPQURQO0FBRUMwUixVQUFNLENBQUNiLE1BQUQsRUFBU2hFLE1BQVQ7QUFGUCxJQURJLEVBS0prRSxNQUxJLEVBTUo7QUFDQ1csVUFBTSxDQUNMLEVBREssRUFDREosVUFEQyxFQUNXLEVBRFg7QUFEUCxJQU5JO0FBREssR0FBWDtBQWNBLFNBQU9sWSxFQUFQO0FBQ0EsRTs7bUJBRURjLEksbUJBQU87QUFBQTs7QUFDTnlYLHVEQUFVQSxDQUFDdEQsaUJBQVgsR0FBK0J0VixJQUEvQixDQUFvQyxVQUFDNlksTUFBRCxFQUFZO0FBQy9DLE9BQUlDLFdBQVdELE9BQU81QixJQUFQLEVBQWY7QUFDQTZCLGNBQVdBLFNBQVNDLEdBQVQsQ0FBYSxVQUFDaEMsRUFBRCxFQUFRO0FBQy9CQSxPQUFHaUMsU0FBSCxHQUFlakMsR0FBR2tDLFNBQUgsR0FBZSxHQUFmLEdBQXFCbEMsR0FBR21DLFlBQXZDO0FBQ0EsUUFBTUMsU0FBUzVmLE1BQU04TCxJQUFOLENBQVcrVCxTQUFYLENBQXFCLFVBQXJCLENBQWY7QUFDQXJDLE9BQUdzQyxVQUFILEdBQWdCRixPQUFPLElBQUk5VCxJQUFKLENBQVMwUixHQUFHc0MsVUFBWixDQUFQLENBQWhCO0FBQ0EsV0FBT3RDLEVBQVA7QUFDQSxJQUxVLENBQVg7QUFNQSxVQUFLdUMsU0FBTCxHQUFpQlIsUUFBakI7QUFDQTNkLE1BQUcsV0FBSCxFQUFnQmtDLEtBQWhCLENBQXNCeWIsUUFBdEI7QUFDQSxHQVZEOztBQWFBLE1BQU1TLGdCQUFnQixJQUFJeEUsc0RBQUosRUFBdEI7O0FBRUEsT0FBSzVaLEVBQUwsQ0FBUSxXQUFSLEVBQXFCVSxXQUFyQixDQUFpQyxhQUFqQyxFQUFnRCxZQUFNO0FBQ3JELE9BQU0zQixNQUFNLE9BQUtBLEdBQWpCO0FBQ0EsT0FBTWlmLFNBQVM1ZixNQUFNOEwsSUFBTixDQUFXK1QsU0FBWCxDQUFxQixVQUFyQixDQUFmO0FBQ0EsT0FBTUksY0FBY0wsT0FBTyxJQUFJOVQsSUFBSixFQUFQLENBQXBCOztBQUVBa1UsaUJBQWN6RixNQUFkLENBQXFCLEVBQUMwRix3QkFBRCxFQUFyQixFQUFvQ3haLElBQXBDLENBQXlDLFVBQUN1QyxRQUFELEVBQWM7QUFDdEQsUUFBR0EsUUFBSCxFQUFhO0FBQ1pySSxTQUFJUSxJQUFKLENBQVMsUUFBVDtBQUNBO0FBQ0QsSUFKRDtBQUtBLEdBVkQ7O0FBWUEsT0FBSytlLFNBQUwsR0FBaUIsS0FBS3BaLEVBQUwsQ0FBUXFaLGlEQUFSLENBQWpCO0FBQ0EsRTs7bUJBRURwQixRLHFCQUFTamUsRSxFQUFJO0FBQ1osTUFBTThaLE9BQU8sS0FBS21GLFNBQUwsQ0FBZUssSUFBZixDQUFvQjtBQUFBLFVBQU01QyxHQUFHMWMsRUFBSCxJQUFTQSxFQUFmO0FBQUEsR0FBcEIsQ0FBYjtBQUNBLE9BQUtvZixTQUFMLENBQWVHLFVBQWYsQ0FBMEJ6RixJQUExQjtBQUNBLEU7O21CQUVEc0UsTyxzQkFBVTtBQUNULE9BQUtnQixTQUFMLENBQWVHLFVBQWY7QUFDQSxFOzs7RUE1SW1DelosaUQ7O0FBQWhCMFgsc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7QUFDQTtBQUNBOztJQUVxQjZCLFE7Ozs7Ozs7OztvQkFDcEJuZSxNLHFCQUFTO0FBQUE7O0FBQ1IsU0FBTztBQUNOVixTQUFNLFFBREE7QUFFTlcsWUFBUyxZQUZIO0FBR05xZSxTQUFNLFdBSEE7QUFJTjlCLFVBQU8sR0FKRDtBQUtOK0IsYUFBVSxRQUxKO0FBTU43WCxTQUFNO0FBQ0x5VyxVQUFNLENBQ0w7QUFDQzdkLFdBQU0sTUFEUDtBQUVDVyxjQUFTLFVBRlY7QUFHQ3VlLGVBQVUsQ0FDVCxFQUFFbGYsTUFBTSxNQUFSLEVBQWdCYyxNQUFNLElBQXRCLEVBQTRCSCxTQUFTLElBQXJDLEVBQTJDMGMsUUFBUSxJQUFuRCxFQURTLEVBRVQsRUFBRXJkLE1BQU0sTUFBUixFQUFnQm1mLE9BQU8sWUFBdkIsRUFBcUNyZSxNQUFNLFdBQTNDLEVBQXdEc2UsWUFBWSxFQUFwRSxFQUF3RUMsWUFBWSxPQUFwRixFQUZTLEVBR1QsRUFBRXJmLE1BQU0sTUFBUixFQUFnQm1mLE9BQU8sV0FBdkIsRUFBb0NyZSxNQUFNLGNBQTFDLEVBQTBEc2UsWUFBWSxFQUF0RSxFQUEwRUMsWUFBWSxPQUF0RixFQUhTLEVBSVQsRUFBRXJmLE1BQU0sT0FBUixFQUFpQm1mLE9BQU8sTUFBeEIsRUFBZ0NyZSxNQUFNLGlCQUF0QyxFQUF5RHNlLFlBQVksRUFBckUsRUFBeUVDLFlBQVksT0FBckYsRUFBOEYxTCxTQUFTLENBQ3RHLEVBQUNuVSxJQUFJLENBQUwsRUFBUUMsT0FBTyxRQUFmLEVBRHNHLEVBRXRHLEVBQUNELElBQUksQ0FBTCxFQUFRQyxPQUFPLFdBQWYsRUFGc0csRUFHdEcsRUFBQ0QsSUFBSSxDQUFMLEVBQVFDLE9BQU8sT0FBZixFQUhzRyxDQUF2RyxFQUpTLEVBU1QsRUFBRU8sTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxhQUF2QixFQUFzQ3JlLE1BQU0sYUFBNUMsRUFBMkRzZSxZQUFZLEVBQXZFLEVBQTJFQyxZQUFZLE9BQXZGLEVBVFMsRUFVVCxFQUFFcmYsTUFBTSxZQUFSLEVBQXNCbWYsT0FBTyxZQUE3QixFQUEyQ3JlLE1BQU0sWUFBakQsRUFBK0RILFNBQVMsWUFBeEUsRUFBc0Z5ZSxZQUFZLEVBQWxHLEVBQXNHQyxZQUFZLE9BQWxILEVBVlMsRUFXVCxFQUFFcmYsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxTQUF2QixFQUFrQ3JlLE1BQU0sU0FBeEMsRUFBbURzZSxZQUFZLEVBQS9ELEVBQW1FQyxZQUFZLE9BQS9FLEVBWFMsRUFZVCxFQUFFcmYsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxPQUF2QixFQUFnQ3JlLE1BQU0sZUFBdEMsRUFBdURzZSxZQUFZLEVBQW5FLEVBQXVFQyxZQUFZLE9BQW5GLEVBWlMsRUFhVCxFQUFFcmYsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxPQUF2QixFQUFnQ3JlLE1BQU0sT0FBdEMsRUFBK0NzZSxZQUFZLEVBQTNELEVBQStEQyxZQUFZLE9BQTNFLEVBYlMsRUFjVCxFQUFFcmYsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxVQUF2QixFQUFtQ3JlLE1BQU0sa0JBQXpDLEVBQTZESCxTQUFTLGtCQUF0RSxFQUEwRnllLFlBQVksRUFBdEcsRUFBMEdDLFlBQVksT0FBdEgsRUFkUyxDQUhYO0FBbUJDQyxZQUFPO0FBQ04seUJBQW1CNWdCLE1BQU00Z0IsS0FBTixDQUFZQyxVQUR6QjtBQUVOLGVBQVM3Z0IsTUFBTTRnQixLQUFOLENBQVlDLFVBRmY7QUFHTiwwQkFBb0I3Z0IsTUFBTTRnQixLQUFOLENBQVlDO0FBSDFCO0FBbkJSLEtBREssRUEwQkw7QUFDQ0MsYUFBUSxFQURUO0FBRUNDLGVBQVUsRUFGWDtBQUdDM0IsV0FBTSxDQUNMLEVBREssRUFFTDtBQUNDOWQsWUFBTSxRQURQLEVBQ2lCUCxPQUFPLE1BRHhCLEVBQ2dDMk0sTUFBTSxNQUR0QyxFQUM4Q3pMLFNBQVMsU0FEdkQsRUFDa0V1YyxPQUFPLEdBRHpFO0FBRUNTLGFBQU8saUJBQU07QUFDWixjQUFLK0IsUUFBTDtBQUNBO0FBSkYsTUFGSyxFQVFMO0FBQ0MxZixZQUFNLFFBRFAsRUFDaUJQLE9BQU8sUUFEeEIsRUFDa0N5ZCxPQUFPLEdBRHpDO0FBRUNTLGFBQU8saUJBQU07QUFDWixjQUFLZ0MsVUFBTDtBQUNBO0FBSkYsTUFSSyxFQWNMLEVBZEs7QUFIUCxLQTFCSztBQUREO0FBTkEsR0FBUDtBQXdEQSxFOztvQkFFRHJaLEksbUJBQU87QUFDTixPQUFLc1osSUFBTCxHQUFZLEtBQUt0ZixFQUFMLENBQVEsVUFBUixDQUFaO0FBQ0EsT0FBS2lKLE1BQUwsR0FBYyxLQUFLakosRUFBTCxDQUFRLFlBQVIsQ0FBZDtBQUNBLEU7O29CQUVEeWUsVSx1QkFBV3pGLEksRUFBTTtBQUNoQixPQUFLalcsS0FBTCxHQUFhaVcsT0FBTyxLQUFQLEdBQWUsSUFBNUI7O0FBRUEsTUFBRyxLQUFLalcsS0FBUixFQUFlO0FBQ2QsUUFBS2tHLE1BQUwsQ0FBWXNXLE9BQVosR0FBc0IvSSxPQUF0QixDQUE4QixVQUE5QjtBQUNBLFFBQUt2TixNQUFMLENBQVlzVyxPQUFaLEdBQXNCeGIsT0FBdEI7QUFDQSxHQUhELE1BSUs7QUFDSixRQUFLdWIsSUFBTCxDQUFVRSxTQUFWLENBQW9CeEcsSUFBcEI7QUFDQTs7QUFFRCxNQUFNeUcsbUJBQW1CLEtBQUt6ZixFQUFMLENBQVEsa0JBQVIsQ0FBekI7QUFDQStiLGdFQUFhQSxDQUFDLEtBQUtoWixLQUFuQixFQUEwQjBjLGdCQUExQjs7QUFHQSxPQUFLaGhCLE9BQUwsR0FBZWMsSUFBZjtBQUNBLEU7O29CQUVENmYsUSx1QkFBVztBQUFBOztBQUNWLE1BQU0vVCxPQUFPLEtBQUtpVSxJQUFMLENBQVVJLFNBQVYsRUFBYjs7QUFFQSxNQUFNdEQsZ0JBQWdCLFNBQWhCQSxhQUFnQixHQUFNO0FBQzNCLFVBQUtoZSxLQUFMLENBQVdpSSxPQUFYLENBQW1CLFNBQW5CO0FBQ0EsVUFBS2daLFVBQUw7QUFDQSxHQUhEOztBQUtBLE1BQUcsS0FBS0MsSUFBTCxDQUFVSyxRQUFWLEVBQUgsRUFBeUI7QUFDeEIsT0FBRyxLQUFLNWMsS0FBUixFQUFlO0FBQ2RzWCw0REFBT0EsQ0FBQ29ELHFEQUFSLEVBQW9CcFMsSUFBcEIsRUFBMEIrUSxhQUExQjtBQUNBLElBRkQsTUFJSztBQUNKOUIsK0RBQVVBLENBQUNtRCxxREFBWCxFQUF1QnBTLElBQXZCLEVBQTZCK1EsYUFBN0I7QUFDQTtBQUNEO0FBQ0QsRTs7b0JBRURpRCxVLHlCQUFhO0FBQ1osT0FBS0MsSUFBTCxDQUFVTSxlQUFWO0FBQ0EsT0FBS04sSUFBTCxDQUFVbEwsS0FBVjtBQUNBLE9BQUszVixPQUFMLEdBQWV5ZCxJQUFmO0FBQ0EsRTs7O0VBMUdvQ2xYLGlEOztBQUFqQnVaLHVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKckI7QUFDQTs7SUFFcUJzQixPOzs7QUFDcEIsa0JBQVk5Z0IsR0FBWixFQUFpQitnQixhQUFqQixFQUFnQ0MsUUFBaEMsRUFBMEM7QUFBQTs7QUFBQSwrQ0FDekMsb0JBQU1oaEIsR0FBTixDQUR5Qzs7QUFFekMsUUFBSytnQixhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFFBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBSHlDO0FBSXpDOzttQkFFRDNmLE0scUJBQVM7QUFBQTs7QUFDUixNQUFNdWMsU0FBUztBQUNkN1EsU0FBTSxRQURRO0FBRWRhLGFBQVUsMkNBRkk7QUFHZHFULFFBQUs7QUFIUyxHQUFmOztBQU1BLE1BQU1uRCxTQUFTO0FBQ2RuZCxTQUFNLFdBRFE7QUFFZFIsT0FBSSxZQUZVO0FBR2R5VyxXQUFRLElBSE07QUFJZG1ILFlBQVMsQ0FDUjtBQUNDNWQsUUFBSSxJQURMO0FBRUM2ZCxZQUFRO0FBRlQsSUFEUSxFQUtSO0FBQ0M3ZCxRQUFJLFlBREw7QUFFQytnQixVQUFNLE1BRlA7QUFHQ2hELGVBQVcsQ0FIWjtBQUlDTixZQUFRLENBQUMsT0FBRCxFQUFVLEVBQUNyRyxTQUFTLFlBQVYsRUFBVjtBQUpULElBTFEsRUFXUjtBQUNDcFgsUUFBSSxhQURMO0FBRUMrZ0IsVUFBTSxNQUZQO0FBR0NoRCxlQUFXLENBSFo7QUFJQ04sWUFBUSxDQUFDLFFBQUQsRUFBVyxFQUFDckcsU0FBUyxZQUFWLEVBQVg7QUFKVCxJQVhRLEVBaUJSO0FBQ0NwWCxRQUFJLFFBREw7QUFFQytnQixVQUFNLE1BRlA7QUFHQ3JELFdBQU8sRUFIUjtBQUlDb0QsU0FBSyxRQUpOO0FBS0NyRCxZQUFRLENBQUMsUUFBRCxFQUFXLEVBQUNyRyxTQUFTLGNBQVYsRUFBWDtBQUxULElBakJRLEVBd0JSO0FBQ0NwWCxRQUFJLHdCQURMO0FBRUMrZ0IsVUFBTSxNQUZQO0FBR0NyRCxXQUFPLEVBSFI7QUFJQ29ELFNBQUssUUFKTjtBQUtDckQsWUFBUSxDQUFDLFNBQUQsRUFBWSxFQUFDckcsU0FBUyxjQUFWLEVBQVo7QUFMVCxJQXhCUSxFQStCUjtBQUNDcFgsUUFBSSxxQkFETDtBQUVDK2dCLFVBQU0sTUFGUDtBQUdDckQsV0FBTyxFQUhSO0FBSUNvRCxTQUFLLFFBSk47QUFLQ2hDLFlBQVE1ZixNQUFNOEwsSUFBTixDQUFXK1QsU0FBWCxDQUFxQixJQUFyQixDQUxUO0FBTUN0QixZQUFRLENBQUMsTUFBRCxFQUFTLEVBQUNyRyxTQUFTLGlCQUFWLEVBQVQ7QUFOVCxJQS9CUSxFQXVDUjtBQUNDcFgsUUFBSSxrQkFETDtBQUVDMGQsV0FBTyxFQUZSO0FBR0NvRCxTQUFLLFFBSE47QUFJQ3JELFlBQVE7QUFKVCxJQXZDUSxFQTZDUjtBQUNDemQsUUFBSSxTQURMO0FBRUN5ZCxZQUFRLE1BRlQ7QUFHQ3FELFNBQUssUUFITjtBQUlDcEQsV0FBTyxFQUpSO0FBS0NqUSxjQUFVO0FBTFgsSUE3Q1EsRUFvRFI7QUFDQ3pOLFFBQUksU0FETDtBQUVDeWQsWUFBUSxNQUZUO0FBR0NxRCxTQUFLLFFBSE47QUFJQ3BELFdBQU8sRUFKUjtBQUtDalEsY0FBVTtBQUxYLElBcERRLEVBMkRSO0FBQ0N6TixRQUFJLFdBREw7QUFFQ3lkLFlBQVEsUUFGVDtBQUdDcUQsU0FBSyxRQUhOO0FBSUNwRCxXQUFPLEVBSlI7QUFLQ2pRLGNBQVU7QUFMWCxJQTNEUSxDQUpLO0FBdUVkdVEsWUFBUztBQUNSLGNBQVUsZUFBQ3RWLENBQUQsRUFBSTFJLEVBQUosRUFBVztBQUNwQixZQUFLZ2hCLFlBQUwsQ0FBa0JoaEIsRUFBbEI7QUFDQSxLQUhPO0FBSVIsZUFBVyxnQkFBQzBJLENBQUQsRUFBSTFJLEVBQUosRUFBVztBQUNyQixZQUFLZ2hCLFlBQUwsQ0FBa0JoaEIsRUFBbEI7QUFDQSxLQU5PO0FBT1IsZ0JBQVksaUJBQUMwSSxDQUFELEVBQUkxSSxFQUFKLEVBQVc7QUFDdEIsWUFBS2loQixVQUFMLENBQWdCamhCLEVBQWhCO0FBQ0E7QUFUTztBQXZFSyxHQUFmOztBQW9GQSxTQUFPO0FBQ05xZSxTQUFNLENBQUNaLE1BQUQsRUFBU0UsTUFBVDtBQURBLEdBQVA7QUFHQSxFOzttQkFFRDdXLEksbUJBQU87QUFBQTs7QUFDTixPQUFLb2EsSUFBTCxHQUFZcGdCLEdBQUcsWUFBSCxDQUFaOztBQUVBLFVBQVEsS0FBSzhmLGFBQUwsQ0FBbUJqRSxJQUEzQjtBQUNDLFFBQUssUUFBTDtBQUFlO0FBQ2QsVUFBS3VFLElBQUwsQ0FBVUMsZUFBVixDQUEwQixTQUExQixFQUFxQ3RELE1BQXJDLEdBQThDLElBQTlDO0FBQ0EsVUFBS3FELElBQUwsQ0FBVUMsZUFBVixDQUEwQixXQUExQixFQUF1Q3RELE1BQXZDLEdBQWdELElBQWhEO0FBQ0E7QUFDQTtBQUNELFFBQUssV0FBTDtBQUFrQjtBQUNqQixVQUFLcUQsSUFBTCxDQUFVQyxlQUFWLENBQTBCLFNBQTFCLEVBQXFDdEQsTUFBckMsR0FBOEMsSUFBOUM7QUFDQTtBQUNBO0FBVEY7QUFXQSxPQUFLcUQsSUFBTCxDQUFVRSxjQUFWOztBQUVBLE1BQU1sRyxVQUFVLEtBQUs1YSxRQUFMLENBQWMsSUFBZCxFQUFvQixJQUFwQixDQUFoQjtBQUNBK2dCLHVEQUFVQSxDQUFDcEcsaUJBQVgsQ0FBNkJDLE9BQTdCLEVBQXNDdlYsSUFBdEMsQ0FBMkMsVUFBQzZZLE1BQUQsRUFBWTtBQUN0RCxPQUFJOEMsV0FBVzlDLE9BQU81QixJQUFQLEVBQWY7O0FBRUEwRSxjQUFXQSxTQUFTNUMsR0FBVCxDQUFhLFVBQUNoQyxFQUFELEVBQVE7QUFDL0JBLE9BQUc2RSxtQkFBSCxHQUF5QixJQUFJdlcsSUFBSixDQUFTMFIsR0FBRzZFLG1CQUFaLENBQXpCO0FBQ0EsV0FBTzdFLEVBQVA7QUFDQSxJQUhVLENBQVg7O0FBS0EsVUFBS3dFLElBQUwsQ0FBVWxlLEtBQVYsQ0FBZ0JzZSxRQUFoQjtBQUNBLFVBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsR0FWRDs7QUFZQSxPQUFLRSxTQUFMLEdBQWlCLEtBQUt4YixFQUFMLENBQVEsS0FBSzZhLFFBQWIsQ0FBakI7QUFDQSxFOzttQkFFREcsWSx5QkFBYWhoQixFLEVBQUk7QUFDaEIsTUFBTXloQixPQUFPLEtBQUtILFFBQUwsQ0FBY2hDLElBQWQsQ0FBbUI7QUFBQSxVQUFNNUMsR0FBRzFjLEVBQUgsSUFBU0EsRUFBZjtBQUFBLEdBQW5CLENBQWI7QUFDQSxPQUFLd2hCLFNBQUwsQ0FBZUUsU0FBZixDQUF5QkQsSUFBekI7QUFDQSxFOzttQkFFRFIsVSx1QkFBV2poQixFLEVBQUk7QUFDZHFoQix1REFBVUEsQ0FBQ2hHLFVBQVgsQ0FBc0JyYixFQUF0QjtBQUNBLFNBQU8sS0FBS2toQixJQUFMLENBQVVTLE1BQVYsQ0FBaUIzaEIsRUFBakIsQ0FBUDtBQUNBLEU7O21CQUVENGhCLE8sc0JBQVU7QUFDVCxPQUFLSixTQUFMLENBQWVFLFNBQWY7QUFDQSxFOzs7RUFuSm1DNWIsaUQ7O0FBQWhCNmEsc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQmtCLFE7Ozs7Ozs7OztvQkFDcEIzZ0IsTSxxQkFBUztBQUFBOztBQUVSLE1BQU00Z0IsWUFBWTtBQUNqQjNnQixZQUFTLFdBRFE7QUFFakJ1YyxVQUFPLEdBRlU7QUFHakJKLFdBQVEsR0FIUztBQUlqQndELFFBQUssWUFKWTtBQUtqQnJULGFBQVUsa0JBQUN2TixHQUFELEVBQVM7QUFDbEIsa0RBQTRDQSxHQUE1QztBQUNBO0FBUGdCLEdBQWxCOztBQVVBLE1BQU0yZ0IsV0FBVztBQUNoQjFmLFlBQVMsbUJBRE87QUFFaEJYLFNBQU0sTUFGVTtBQUdoQjZjLGVBQVksSUFISTtBQUloQnFDLGFBQVUsQ0FDVCxFQUFFbGYsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxPQUF2QixFQUFnQ0MsWUFBWSxHQUE1QyxFQUFpRGxDLE9BQU8sR0FBeEQsRUFBNkRtQyxZQUFZLE9BQXpFLEVBQWtGdmUsTUFBTSxZQUF4RixFQURTLEVBRVQsRUFBRWQsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxRQUF2QixFQUFpQ0MsWUFBWSxHQUE3QyxFQUFrRGxDLE9BQU8sR0FBekQsRUFBOERtQyxZQUFZLE9BQTFFLEVBQW1GdmUsTUFBTSxhQUF6RixFQUZTLEVBR1QsRUFBRWQsTUFBTSxPQUFSLEVBQWlCbWYsT0FBTyxRQUF4QixFQUFrQ0MsWUFBWSxHQUE5QyxFQUFtRGxDLE9BQU8sR0FBMUQsRUFBK0RtQyxZQUFZLE9BQTNFLEVBQW9GdmUsTUFBTSxRQUExRixFQUFvRzZTLFNBQVMsQ0FDNUcsRUFENEcsRUFDeEcsU0FEd0csRUFDN0YsU0FENkYsRUFDbEYsVUFEa0YsRUFDdEUsUUFEc0UsRUFDNUQsU0FENEQsRUFDakQsWUFEaUQsRUFDbkMsVUFEbUMsRUFDdkIsUUFEdUIsRUFDYixhQURhLENBQTdHLEVBSFMsRUFNVCxFQUFFM1QsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxTQUF2QixFQUFrQ0MsWUFBWSxHQUE5QyxFQUFtRGxDLE9BQU8sR0FBMUQsRUFBK0RtQyxZQUFZLE9BQTNFLEVBQW9GdmUsTUFBTSx3QkFBMUYsRUFOUyxFQU9ULEVBQUVkLE1BQU0sTUFBUixFQUFnQm1mLE9BQU8sa0JBQXZCLEVBQTJDQyxZQUFZLEdBQXZELEVBQTREbEMsT0FBTyxHQUFuRSxFQUF3RW1DLFlBQVksT0FBcEYsRUFBNkZ2ZSxNQUFNLGtCQUFuRyxFQVBTLEVBUVQsRUFBRWQsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxrQkFBdkIsRUFBMkNDLFlBQVksR0FBdkQsRUFBNERsQyxPQUFPLEdBQW5FLEVBQXdFbUMsWUFBWSxPQUFwRixFQUE2RnZlLE1BQU0sa0JBQW5HLEVBUlMsRUFTVCxFQUFFZCxNQUFNLE1BQVIsRUFBZ0JtZixPQUFPLE9BQXZCLEVBQWdDQyxZQUFZLEdBQTVDLEVBQWlEbEMsT0FBTyxHQUF4RCxFQUE2RG1DLFlBQVksT0FBekUsRUFBa0Z2ZSxNQUFNLGlCQUF4RixFQVRTLEVBVVQsRUFBRWQsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxhQUF2QixFQUFzQ0MsWUFBWSxHQUFsRCxFQUF1RGxDLE9BQU8sR0FBOUQsRUFBbUVtQyxZQUFZLE9BQS9FLEVBQXdGdmUsTUFBTSxhQUE5RixFQVZTO0FBSk0sR0FBakI7O0FBa0JBLE1BQU15Z0IsY0FBYztBQUNuQnZoQixTQUFNLFVBRGE7QUFFbkJtZixVQUFPLHFEQUZZO0FBR25CeGUsWUFBUyxXQUhVO0FBSW5CeUwsU0FBTSxZQUphO0FBS25Cb1YsYUFBVSxLQUxTO0FBTW5CdEUsVUFBTyxHQU5ZO0FBT25CdUUsYUFBVSxvQkFBTTtBQUNmLFdBQU87QUFDTi9HLGNBQVMsT0FBS1UsTUFEUjtBQUVOc0csY0FBUyxPQUFLckc7QUFGUixLQUFQO0FBSUEsSUFaa0I7QUFhbkJzRyxXQUFRLDBDQWJXO0FBY25CQyxXQUFRLHlDQWRXO0FBZW5CQyxTQUFNO0FBZmEsR0FBcEI7O0FBa0JBLE1BQU1DLFlBQVk7QUFDakI5aEIsU0FBTSxNQURXO0FBRWpCb00sU0FBTSxVQUZXO0FBR2pCNU0sT0FBSSxXQUhhO0FBSWpCb2QsZUFBVyxJQUpNO0FBS2pCQyxlQUFXO0FBTE0sR0FBbEI7O0FBUUEsTUFBTWtGLGVBQWU7QUFDcEIvaEIsU0FBTSxVQURjO0FBRXBCbWYsVUFBTywyQ0FGYTtBQUdwQnhlLFlBQVMsWUFIVztBQUlwQnlMLFNBQU0sWUFKYztBQUtwQm9WLGFBQVUsS0FMVTtBQU1wQnRFLFVBQU8sR0FOYTtBQU9wQnVFLGFBQVUsb0JBQU07QUFDZixXQUFPO0FBQ04vRyxjQUFTLE9BQUtVLE1BRFI7QUFFTnNHLGNBQVMsT0FBS3JHO0FBRlIsS0FBUDtBQUlBLElBWm1CO0FBYXBCc0csV0FBUSxNQWJZO0FBY3BCQyxXQUFRLDBDQWRZO0FBZXBCQyxTQUFNO0FBZmMsR0FBckI7O0FBa0JBLE1BQU1HLFlBQVk7QUFDakJoaUIsU0FBTSxNQURXO0FBRWpCb00sU0FBTSxVQUZXO0FBR2pCNU0sT0FBSSxXQUhhO0FBSWpCb2QsZUFBVyxJQUpNO0FBS2pCQyxlQUFXO0FBTE0sR0FBbEI7O0FBUUEsTUFBTW9GLHFCQUFxQjtBQUMxQmppQixTQUFNLFlBRG9CO0FBRTFCVyxZQUFTLG9CQUZpQjtBQUcxQnNNLGFBQVUsV0FDUixpRUFKd0I7QUFLMUJwTSxPQUFJO0FBQ0hxaEIsaUJBQWEscUJBQUMxaUIsRUFBRCxFQUFRO0FBQ3BCO0FBQ0F3TSxhQUFRbVcsR0FBUixDQUFZLFVBQVosRUFBd0IzaUIsRUFBeEI7QUFDQTtBQUpFO0FBTHNCLEdBQTNCOztBQWFBLE1BQU00aUIsc0JBQXNCO0FBQzNCcGlCLFNBQU0sWUFEcUI7QUFFM0JXLFlBQVMscUJBRmtCO0FBRzNCc00sYUFBVSxXQUNSO0FBSnlCLEdBQTVCOztBQU9BLE1BQU1vVixVQUFVO0FBQ2ZyaUIsU0FBTSxRQURTO0FBRWZvTSxTQUFNLE1BRlM7QUFHZitTLFVBQU8sTUFIUTtBQUlmakMsVUFBTyxFQUpRO0FBS2ZTLFVBQU8saUJBQU07QUFDWixXQUFLK0IsUUFBTDtBQUNBO0FBUGMsR0FBaEI7O0FBVUEsU0FBTztBQUNOMWYsU0FBTSxPQURBO0FBRU5pZixhQUFVLFFBRko7QUFHTnFELGNBQVcsR0FITDtBQUlObGIsU0FBTTtBQUNMcEgsVUFBTSxZQUREO0FBRUxvSCxVQUFNO0FBQ0x5VyxXQUFNLENBQ0x5RCxTQURLLEVBRUxqQixRQUZLLEVBR0w7QUFDQ3JnQixZQUFNLFVBRFA7QUFFQ2lOLGdCQUFVLE9BRlg7QUFHQzJQLGtCQUFZLElBSGI7QUFJQzBELFdBQUs7QUFKTixNQUhLLEVBU0wsRUFBQ3hELFFBQVEsQ0FBVCxFQVRLLEVBVUxtRixrQkFWSyxFQVdMRyxtQkFYSyxFQVlMTixTQVpLLEVBYUxFLFNBYkssRUFjTCxFQUFDbEYsUUFBUSxFQUFULEVBZEssRUFlTDtBQUNDbmMsZUFBUyxvQkFEVjtBQUVDNmUsY0FBUSxFQUZUO0FBR0MxQixZQUFNLENBQUUsRUFBRixFQUFNeUQsV0FBTixFQUFtQlEsWUFBbkIsRUFBaUMsRUFBakM7QUFIUCxNQWZLLEVBb0JMLEVBQUNqRixRQUFRLENBQVQsRUFwQkssRUFxQkw7QUFDQzJDLGdCQUFVLEVBRFg7QUFFQzhDLGdCQUFVLEVBRlg7QUFHQy9DLGNBQVEsRUFIVDtBQUlDM0Msa0JBQVksSUFKYjtBQUtDaUIsWUFBTSxDQUFDLEVBQUQsRUFBS3VFLE9BQUwsRUFBYyxFQUFkO0FBTFAsTUFyQks7QUFERDtBQUZEO0FBSkEsR0FBUDtBQXVDQSxFOztvQkFFRC9iLEksbUJBQU87QUFDTixPQUFLc1osSUFBTCxHQUFZLEtBQUt0ZixFQUFMLENBQVEsbUJBQVIsQ0FBWjtBQUNBLEU7O29CQUVENGdCLFMsc0JBQVVELEksRUFBTTtBQUFBOztBQUNmLE9BQUt1QixTQUFMO0FBQ0EsT0FBS25mLEtBQUwsR0FBYTRkLE9BQU8sS0FBUCxHQUFlLElBQTVCO0FBQ0EsT0FBS0EsSUFBTCxHQUFZQSxPQUFPQSxJQUFQLEdBQWMsRUFBMUI7QUFDQSxPQUFLNUYsTUFBTCxHQUFjNEYsT0FBT0EsS0FBS3poQixFQUFaLEdBQWlCLEVBQS9CO0FBQ0EsT0FBSzRiLE1BQUwsR0FBYyxLQUFLdGIsUUFBTCxDQUFjLElBQWQsRUFBb0IsSUFBcEIsQ0FBZDs7QUFFQTJpQix1REFBVUEsQ0FBQ3pILFFBQVgsQ0FBb0IsS0FBS0ssTUFBekIsRUFBaUNsVyxJQUFqQyxDQUFzQyxVQUFDNlksTUFBRCxFQUFZO0FBQ2pELE9BQU0wRSxXQUFXMUUsT0FBTzVCLElBQVAsRUFBakI7O0FBRUEsT0FBTXVHLFlBQVksRUFBbEI7QUFDQSxPQUFNQyxhQUFhLEVBQW5COztBQUVBRixZQUFTalMsT0FBVCxDQUFpQixVQUFDb1MsSUFBRCxFQUFVO0FBQzFCLFlBQU9BLEtBQUtDLFNBQVo7QUFDQyxVQUFLLE1BQUw7QUFBYUgsZ0JBQVUxaEIsSUFBVixDQUFlNGhCLElBQWY7QUFDWjtBQUNELFVBQUssT0FBTDtBQUFjRCxpQkFBVzNoQixJQUFYLENBQWdCNGhCLElBQWhCO0FBQ2I7QUFKRjtBQU1BLElBUEQ7QUFRQSxVQUFLdmlCLEVBQUwsQ0FBUSxvQkFBUixFQUE4QmtDLEtBQTlCLENBQW9DbWdCLFNBQXBDO0FBQ0EsVUFBS3JpQixFQUFMLENBQVEscUJBQVIsRUFBK0JrQyxLQUEvQixDQUFxQ29nQixVQUFyQztBQUNBLEdBaEJEOztBQWtCQXZHLGdFQUFhQSxDQUFDLENBQUMsS0FBS2haLEtBQXBCLEVBQTJCLEtBQUsvQyxFQUFMLENBQVEsV0FBUixDQUEzQjtBQUNBK2IsZ0VBQWFBLENBQUMsQ0FBQyxLQUFLaFosS0FBcEIsRUFBMkIsS0FBSy9DLEVBQUwsQ0FBUSxvQkFBUixDQUEzQjs7QUFFQSxNQUFHLENBQUMsS0FBSytDLEtBQVQsRUFBZ0I7QUFDZixRQUFLdWMsSUFBTCxDQUFVRSxTQUFWLENBQW9CbUIsSUFBcEI7QUFDQSxRQUFLM2dCLEVBQUwsQ0FBUSxXQUFSLEVBQXFCd2YsU0FBckIsQ0FBK0JtQixLQUFLOEIsV0FBTCxJQUFvQnpJLGtEQUFuRDtBQUNBOztBQUVELE9BQUt2YixPQUFMLEdBQWVjLElBQWY7QUFDQSxFOztvQkFFRDZmLFEsdUJBQVc7QUFBQTs7QUFDVixNQUFNL1QsT0FBTyxLQUFLaVUsSUFBTCxDQUFVSSxTQUFWLEVBQWI7O0FBRUEsTUFBTXRELGdCQUFnQixTQUFoQkEsYUFBZ0IsR0FBTTtBQUMzQixVQUFLaGUsS0FBTCxDQUFXaUksT0FBWCxDQUFtQixTQUFuQjtBQUNBLFVBQUtnWixVQUFMO0FBQ0EsR0FIRDs7QUFLQSxNQUFHLEtBQUtDLElBQUwsQ0FBVUssUUFBVixFQUFILEVBQXlCO0FBQ3hCLE9BQUcsS0FBSzVjLEtBQVIsRUFBZTtBQUNkc1gsNERBQU9BLENBQUNrRyxxREFBUixFQUFvQmxWLElBQXBCLEVBQTBCK1EsYUFBMUI7QUFDQSxJQUZELE1BSUs7QUFDSjlCLCtEQUFVQSxDQUFDaUcscURBQVgsRUFBdUJsVixJQUF2QixFQUE2QitRLGFBQTdCO0FBQ0E7O0FBRUQsUUFBS3BjLEVBQUwsQ0FBUSxXQUFSLEVBQXFCMGlCLElBQXJCLENBQTBCLFVBQUN0YixRQUFELEVBQWM7QUFDdkMsUUFBR0EsUUFBSCxFQUFZO0FBQ1gsWUFBS2hKLEtBQUwsQ0FBV2lJLE9BQVgsQ0FBbUJlLFNBQVNmLE9BQTVCO0FBQ0E7QUFDRCxJQUpEOztBQU1BLFFBQUtyRyxFQUFMLENBQVEsWUFBUixFQUFzQjBpQixJQUF0QixDQUEyQixVQUFDdGIsUUFBRCxFQUFjO0FBQ3hDLFFBQUdBLFFBQUgsRUFBWTtBQUNYLFlBQUtoSixLQUFMLENBQVdpSSxPQUFYLENBQW1CZSxTQUFTZixPQUE1QjtBQUNBO0FBQ0QsSUFKRDtBQUtBO0FBQ0QsRTs7b0JBRURnWixVLHlCQUFhO0FBQ1osT0FBSzZDLFNBQUw7QUFDQSxPQUFLempCLE9BQUwsR0FBZXlkLElBQWY7QUFDQSxFOztvQkFFRGdHLFMsd0JBQVk7QUFDWCxPQUFLNUMsSUFBTCxDQUFVTSxlQUFWO0FBQ0EsT0FBS04sSUFBTCxDQUFVbEwsS0FBVjtBQUNBLE9BQUtwVSxFQUFMLENBQVEsV0FBUixFQUFxQjJpQixLQUFyQixDQUEyQkMsUUFBM0I7QUFDQSxPQUFLNWlCLEVBQUwsQ0FBUSxZQUFSLEVBQXNCMmlCLEtBQXRCLENBQTRCQyxRQUE1QjtBQUNBLE9BQUs1aUIsRUFBTCxDQUFRLG9CQUFSLEVBQThCNGlCLFFBQTlCO0FBQ0EsT0FBSzVpQixFQUFMLENBQVEscUJBQVIsRUFBK0I0aUIsUUFBL0I7QUFDQSxFOzs7RUE3T29DNWQsaUQ7O0FBQWpCK2IsdUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjtBQUNBOztJQUVxQnJFLE87Ozs7Ozs7OzttQkFDcEJ0YyxNLHFCQUFRO0FBQUE7O0FBRVAsTUFBTXVjLFNBQVM7QUFDZDdRLFNBQUssUUFEUyxFQUNDYSxVQUFTLEtBQUs1TixHQUFMLENBQVNxQixNQUFULENBQWdCSSxJQUQxQixFQUNnQ3dmLEtBQUk7QUFEcEMsR0FBZjs7QUFJQSxNQUFNNkMsT0FBTztBQUNabmpCLFNBQUssTUFETztBQUVac2dCLFFBQUksVUFGUTtBQUdacEQsVUFBTSxHQUhNO0FBSVpqTyxXQUFPLEdBSks7QUFLWmdILFdBQU8sSUFMSztBQU1aaEosYUFBUyxrREFORztBQU9aeE4sVUFBTyxNQVBLO0FBUVprTSxTQUFLLENBQ0osRUFBRWxNLE9BQU0sU0FBUixFQUFtQkQsSUFBRyxTQUF0QixFQUFrQzRqQixNQUFLLG9CQUF2QyxFQURJLEVBRUosRUFBRTNqQixPQUFNLE9BQVIsRUFBaUJELElBQUcsT0FBcEIsRUFBOEI0akIsTUFBSyxZQUFuQyxFQUZJLENBUk87QUFZWnZpQixPQUFHO0FBQ0Z3aUIscUJBQWlCLHlCQUFDN2pCLEVBQUQsRUFBUTtBQUN4QixTQUFNa2IsVUFBVSxPQUFLNWEsUUFBTCxDQUFjLElBQWQsRUFBb0IsSUFBcEIsQ0FBaEI7QUFDQSxZQUFLVCxHQUFMLENBQVNRLElBQVQseUJBQW9DNmEsT0FBcEMsbUJBQXlEbGIsRUFBekQ7QUFDQTtBQUpDO0FBWlMsR0FBYjs7QUFvQkEsTUFBTXlaLFNBQVM7QUFDZGpaLFNBQUssUUFEUztBQUVkVyxZQUFRLFdBRk07QUFHZGxCLFVBQU0sUUFIUTtBQUlkMk0sU0FBSztBQUpTLEdBQWY7O0FBT0EsTUFBTTVHLEtBQUs7QUFDVjRHLFNBQUssT0FESyxFQUNJbVcsVUFBUyxDQURiLEVBQ2dCakMsS0FBSSxZQURwQjtBQUVWeEMsU0FBSyxDQUNKLEVBQUV5RSxVQUFTLENBQVgsRUFBYzlDLFVBQVMsRUFBdkIsRUFBMkI1QixNQUFNLENBQUUsRUFBQ3lDLEtBQUkscUJBQUwsRUFBNEJ6QyxNQUFLLENBQUNaLE1BQUQsRUFBU2tHLElBQVQsRUFBZWxLLE1BQWYsQ0FBakMsRUFBRixDQUFqQyxFQURJLEVBRUosRUFBRWpaLE1BQU0sU0FBUixFQUFtQmtkLE9BQU8sQ0FBMUIsRUFGSSxFQUdKO0FBQ0M5USxVQUFNLE1BRFAsRUFDZXFULFVBQVUsRUFEekIsRUFDNkI4QyxVQUFVLENBRHZDLEVBQzBDMUUsTUFBTSxDQUM5QyxFQUFFNVQsVUFBVSxJQUFaLEVBRDhDO0FBRGhELElBSEk7QUFGSyxHQUFYOztBQWFBLFNBQU96RSxFQUFQO0FBQ0EsRTs7bUJBRURjLEksbUJBQU87QUFBQTs7QUFDTixNQUFNb1ksZ0JBQWdCLElBQUl4RSxzREFBSixFQUF0Qjs7QUFFQSxPQUFLNVosRUFBTCxDQUFRLFdBQVIsRUFBcUJVLFdBQXJCLENBQWlDLGFBQWpDLEVBQWdELFlBQU07QUFDckQsT0FBTTNCLE1BQU0sT0FBS0EsR0FBakI7QUFDQSxPQUFNaWYsU0FBUzVmLE1BQU04TCxJQUFOLENBQVcrVCxTQUFYLENBQXFCLFVBQXJCLENBQWY7QUFDQSxPQUFNSSxjQUFjTCxPQUFPLElBQUk5VCxJQUFKLEVBQVAsQ0FBcEI7O0FBRUFrVSxpQkFBY3pGLE1BQWQsQ0FBcUIsRUFBQzBGLHdCQUFELEVBQXJCLEVBQW9DeFosSUFBcEMsQ0FBeUMsWUFBTTtBQUM5QzlGLFFBQUlRLElBQUosQ0FBUyxRQUFUO0FBQ0EsSUFGRDtBQUdBLEdBUkQ7QUFTQSxFOzs7RUE5RG1DeUYsaUQ7O0FBQWhCMFgsc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7QUFDQTtBQUNBOztJQUVxQnNHLFU7Ozs7Ozs7OztzQkFDcEI1aUIsTSxxQkFBUzs7QUFHUixNQUFNMGYsZ0JBQWdCO0FBQ3JCakUsU0FBTTtBQURlLEdBQXRCOztBQUlBLE1BQU1vSCxhQUFhO0FBQ2xCdmpCLFNBQU0sUUFEWTtBQUVsQlAsVUFBTyxVQUZXO0FBR2xCMk0sU0FBTSxNQUhZO0FBSWxCOFEsVUFBTyxHQUpXO0FBS2xCUyxVQUFPLGlCQUFNO0FBQ1o2RixZQUFRcEMsT0FBUjtBQUNBO0FBUGlCLEdBQW5CO0FBU0EsTUFBTW9DLFVBQVUsSUFBSXJELHVEQUFKLENBQVksS0FBSzlnQixHQUFqQixFQUFzQitnQixhQUF0QixFQUFxQ2lCLGlEQUFyQyxDQUFoQjtBQUNBLFNBQU87QUFDTnhELFNBQU0sQ0FDTDJGLE9BREssRUFFTDtBQUNDMUYsVUFBTSxDQUFDLEVBQUQsRUFBSXlGLFVBQUosRUFBZSxFQUFmO0FBRFAsSUFGSztBQURBLEdBQVA7QUFRQSxFOzs7RUExQnNDamUsaUQ7O0FBQW5CZ2UseUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjtBQUNBOztJQUVxQkcsUzs7Ozs7Ozs7O3FCQUNwQi9pQixNLHFCQUFRO0FBQUE7O0FBRVAsTUFBTWdqQixZQUFZO0FBQ2pCMWpCLFNBQU0sTUFEVztBQUVqQlcsWUFBUyxXQUZRO0FBR2pCdWMsVUFBTyxHQUhVO0FBSWpCZ0MsYUFBVSxDQUNULEVBQUVsZixNQUFNLE1BQVIsRUFBZ0JtZixPQUFPLFVBQXZCLEVBQW1DcmUsTUFBTSxVQUF6QyxFQURTLEVBRVQsRUFBRWQsTUFBTSxNQUFSLEVBQWdCb00sTUFBTSxVQUF0QixFQUFrQytTLE9BQU8sVUFBekMsRUFBcURyZSxNQUFNLFVBQTNELEVBRlMsRUFHVDtBQUNDMGUsWUFBUSxDQURULEVBQ1kxQixNQUFNLENBQ2hCLEVBQUU5ZCxNQUFNLFFBQVIsRUFBa0JXLFNBQVMsVUFBM0IsRUFBdUNsQixPQUFPLE9BQTlDLEVBQXVEMk0sTUFBTSxNQUE3RCxFQURnQixFQUVoQixFQUFFcE0sTUFBTSxRQUFSLEVBQWtCUCxPQUFPLFFBQXpCLEVBRmdCO0FBRGxCLElBSFM7QUFKTyxHQUFsQjs7QUFnQkEsTUFBTW9pQixPQUFPO0FBQ1o3aEIsU0FBTSxRQURNO0FBRVpQLFVBQU8sbUJBRks7QUFHWmtlLFVBQU8saUJBQU07QUFDWixXQUFLOWQsSUFBTCxDQUFVLFdBQVY7QUFDQTtBQUxXLEdBQWI7O0FBUUEsU0FBTztBQUNOaWUsU0FBTSxDQUNMLEVBREssRUFFTDtBQUNDRCxVQUFNLENBQ0wsRUFESyxFQUVMNkYsU0FGSyxFQUdMN0IsSUFISyxFQUlMLEVBSks7QUFEUCxJQUZLLEVBVUwsRUFWSztBQURBLEdBQVA7QUFjQSxFOztxQkFFRHZiLEksbUJBQU87QUFBQTs7QUFDTixPQUFLaEcsRUFBTCxDQUFRLFVBQVIsRUFBb0JVLFdBQXBCLENBQWdDLGFBQWhDLEVBQStDLFlBQU07QUFDcEQsT0FBTTJpQixTQUFTLE9BQUtyakIsRUFBTCxDQUFRLFdBQVIsRUFBcUIwZixTQUFyQixFQUFmO0FBQ0EsT0FBTXRCLGdCQUFnQixJQUFJeEUsc0RBQUosRUFBdEI7O0FBRUF3RSxpQkFBYzFGLEtBQWQsQ0FBb0IySyxNQUFwQixFQUE0QnhlLElBQTVCLENBQWlDLFVBQUN1QyxRQUFELEVBQWM7O0FBRTlDLFFBQUlBLFFBQUosRUFBYztBQUNiLFNBQU1rYyxXQUFXbGMsU0FBUzBVLElBQVQsR0FBZ0I5QyxJQUFqQztBQUNBLFNBQU05WixLQUFLb2tCLFNBQVNwa0IsRUFBcEI7O0FBRUEsYUFBUW9rQixTQUFTQyxTQUFqQjtBQUNDLFdBQUssT0FBTDtBQUFjLGNBQUtoa0IsSUFBTCxxQkFBNEJMLEVBQTVCO0FBQ2I7QUFDRCxXQUFLLFdBQUw7QUFBa0IsY0FBS0ssSUFBTCx5QkFBZ0NMLEVBQWhDO0FBQ2pCO0FBQ0QsV0FBSyxRQUFMO0FBQWUsY0FBS0ssSUFBTCxzQkFBNkJMLEVBQTdCO0FBQ2Q7QUFORjtBQVFBLEtBWkQsTUFhSztBQUNKZCxXQUFNaUksT0FBTixDQUFjZSxRQUFkO0FBQ0E7QUFDRCxJQWxCRDtBQW1CQSxHQXZCRDtBQXdCQSxFOzs7RUFwRXFDcEMsaUQ7O0FBQWxCbWUsd0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQnBDLFE7Ozs7Ozs7OztvQkFDcEIzZ0IsTSxxQkFBUztBQUFBOztBQUVSLE1BQU00Z0IsWUFBWTtBQUNqQjNnQixZQUFTLFdBRFE7QUFFakJ1YyxVQUFPLEdBRlU7QUFHakJKLFdBQVEsR0FIUztBQUlqQndELFFBQUssWUFKWTtBQUtqQnJULGFBQVUsa0JBQUN2TixHQUFELEVBQVM7QUFDbEIsa0RBQTRDQSxHQUE1QztBQUNBO0FBUGdCLEdBQWxCOztBQVVBLE1BQU0yZ0IsV0FBVztBQUNoQjFmLFlBQVMsZ0JBRE87QUFFaEJYLFNBQU0sTUFGVTtBQUdoQmtmLGFBQVUsQ0FDVCxFQUFFbGYsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxPQUF2QixFQUFnQ0MsWUFBWSxHQUE1QyxFQUFpRGxDLE9BQU8sR0FBeEQsRUFBNkRtQyxZQUFZLE9BQXpFLEVBQWtGdmUsTUFBTSxZQUF4RixFQUFzR2dqQixVQUFVLElBQWhILEVBRFMsRUFFVCxFQUFFOWpCLE1BQU0sTUFBUixFQUFnQm1mLE9BQU8sUUFBdkIsRUFBaUNDLFlBQVksR0FBN0MsRUFBa0RsQyxPQUFPLEdBQXpELEVBQThEbUMsWUFBWSxPQUExRSxFQUFtRnZlLE1BQU0sYUFBekYsRUFBd0dnakIsVUFBVSxJQUFsSCxFQUZTLEVBR1QsRUFBRTlqQixNQUFNLE1BQVIsRUFBZ0JtZixPQUFPLFFBQXZCLEVBQWlDQyxZQUFZLEdBQTdDLEVBQWtEbEMsT0FBTyxHQUF6RCxFQUE4RG1DLFlBQVksT0FBMUUsRUFBbUZ2ZSxNQUFNLFFBQXpGLEVBQW1HZ2pCLFVBQVUsSUFBN0csRUFIUyxFQUlULEVBQUU5akIsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxTQUF2QixFQUFrQ0MsWUFBWSxHQUE5QyxFQUFtRGxDLE9BQU8sR0FBMUQsRUFBK0RtQyxZQUFZLE9BQTNFLEVBQW9GdmUsTUFBTSx3QkFBMUYsRUFBb0hnakIsVUFBVSxJQUE5SCxFQUpTLEVBS1QsRUFBRTlqQixNQUFNLE1BQVIsRUFBZ0JtZixPQUFPLGtCQUF2QixFQUEyQ0MsWUFBWSxHQUF2RCxFQUE0RGxDLE9BQU8sR0FBbkUsRUFBd0VtQyxZQUFZLE9BQXBGLEVBQTZGdmUsTUFBTSxrQkFBbkcsRUFBdUhnakIsVUFBVSxJQUFqSSxFQUxTLEVBTVQsRUFBRTlqQixNQUFNLE1BQVIsRUFBZ0JtZixPQUFPLGtCQUF2QixFQUEyQ0MsWUFBWSxHQUF2RCxFQUE0RGxDLE9BQU8sR0FBbkUsRUFBd0VtQyxZQUFZLE9BQXBGLEVBQTZGdmUsTUFBTSxrQkFBbkcsRUFBdUhnakIsVUFBVSxJQUFqSSxFQU5TLEVBT1QsRUFBRTlqQixNQUFNLE1BQVIsRUFBZ0JtZixPQUFPLE9BQXZCLEVBQWdDQyxZQUFZLEdBQTVDLEVBQWlEbEMsT0FBTyxHQUF4RCxFQUE2RG1DLFlBQVksT0FBekUsRUFBa0Z2ZSxNQUFNLGlCQUF4RixFQUEyR2dqQixVQUFVLElBQXJILEVBUFM7QUFITSxHQUFqQjs7QUFjQSxNQUFNN0IscUJBQXFCO0FBQzFCamlCLFNBQU0sWUFEb0I7QUFFMUJXLFlBQVMsb0JBRmlCO0FBRzFCc00sYUFBVSxXQUNSLG9FQUp3QjtBQUsxQnBNLE9BQUk7QUFDSHFoQixpQkFBYSxxQkFBQzFpQixFQUFELEVBQVE7QUFDcEIsU0FBTXVrQixXQUFXLE9BQUt6akIsRUFBTCxDQUFRLG9CQUFSLEVBQThCa2IsT0FBOUIsQ0FBc0NoYyxFQUF0QyxFQUEwQ3NCLElBQTNEOztBQUVBMmhCLDBEQUFVQSxDQUFDeEgsWUFBWCxDQUF3QnpiLEVBQXhCLEVBQTRCMkYsSUFBNUIsQ0FBaUMsVUFBQ1AsR0FBRCxFQUFTO0FBQ3pDbEcsWUFBTW1PLElBQU4sQ0FBV21YLFFBQVgsQ0FBb0JwZixHQUFwQixFQUF5Qm1mLFFBQXpCO0FBQ0EsTUFGRDtBQUdBO0FBUEU7QUFMc0IsR0FBM0I7O0FBZ0JBLE1BQU0zQixzQkFBc0I7QUFDM0JwaUIsU0FBTSxZQURxQjtBQUUzQlcsWUFBUyxxQkFGa0I7QUFHM0J5TCxTQUFLO0FBQ0owUSxZQUFPO0FBREgsSUFIc0I7QUFNM0I3UCxhQUFVO0FBTmlCLEdBQTVCOztBQVNBLE1BQU1nWCxZQUFZO0FBQ2pCamtCLFNBQU0sUUFEVztBQUVqQlcsWUFBUyxXQUZRO0FBR2pCeUwsU0FBTSxZQUhXO0FBSWpCK1MsVUFBTyx5Q0FKVTtBQUtqQmpDLFVBQU8sR0FMVTtBQU1qQlMsVUFBTyxpQkFBTTtBQUNaLFdBQUtzRyxTQUFMO0FBQ0E7QUFSZ0IsR0FBbEI7O0FBV0EsTUFBTUMsZUFBZTtBQUNwQmxrQixTQUFNLFFBRGM7QUFFcEJXLFlBQVMsY0FGVztBQUdwQnlMLFNBQU0sTUFIYztBQUlwQmdYLFNBQU0saUJBSmM7QUFLcEJsRyxVQUFPLEVBTGE7QUFNcEJTLFVBQU8saUJBQU07QUFDWixXQUFLc0csU0FBTDtBQUNBO0FBUm1CLEdBQXJCOztBQVdBLE1BQU1FLFdBQVc7QUFDaEJua0IsU0FBTSxRQURVO0FBRWhCVyxZQUFTLFlBRk87QUFHaEIyZixRQUFLLGFBSFc7QUFJaEJsVSxTQUFNLE1BSlU7QUFLaEJnWCxTQUFNLGNBTFU7QUFNaEJsRyxVQUFPLEVBTlM7QUFPaEJTLFVBQU8saUJBQU07QUFDWixXQUFLd0csUUFBTDtBQUNBO0FBVGUsR0FBakI7O0FBWUEsU0FBTztBQUNObmtCLFNBQU0sT0FEQTtBQUVOaWYsYUFBUyxRQUZIO0FBR043WCxTQUFLO0FBQ0p5VyxVQUFNLENBQ0x5RCxTQURLLEVBQ01qQixRQUROLEVBQ2dCNEIsa0JBRGhCLEVBQ29DRyxtQkFEcEMsRUFFTDtBQUNDM0MsZUFBVSxFQURYO0FBRUM4QyxlQUFVLEVBRlg7QUFHQy9DLGFBQVEsRUFIVDtBQUlDMUIsV0FBTSxDQUNMbUcsU0FESyxFQUNNQyxZQUROLEVBQ29CLEVBRHBCLEVBQ3dCQyxRQUR4QjtBQUpQLEtBRks7QUFERjtBQUhDLEdBQVA7QUFpQkEsRTs7b0JBRURqRCxTLHNCQUFVRCxJLEVBQU07QUFBQTs7QUFDZixPQUFLbUQsVUFBTCxHQUFrQixLQUFLOWpCLEVBQUwsQ0FBUSxZQUFSLENBQWxCO0FBQ0EsT0FBS3NmLElBQUwsR0FBWSxLQUFLdGYsRUFBTCxDQUFRLGdCQUFSLENBQVo7QUFDQSxPQUFLd2hCLFNBQUwsR0FBaUIsS0FBS3hoQixFQUFMLENBQVEsb0JBQVIsQ0FBakI7QUFDQSxPQUFLMmdCLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUs1RixNQUFMLEdBQWM0RixLQUFLemhCLEVBQW5CO0FBQ0EsT0FBSzRiLE1BQUwsR0FBYyxLQUFLdGIsUUFBTCxDQUFjLElBQWQsRUFBb0IsSUFBcEIsQ0FBZDs7QUFFQSxPQUFLMGlCLFNBQUw7QUFDQSxPQUFLNUMsSUFBTCxDQUFVRSxTQUFWLENBQW9CbUIsSUFBcEI7QUFDQSxPQUFLM2dCLEVBQUwsQ0FBUSxXQUFSLEVBQXFCd2YsU0FBckIsQ0FBK0JtQixLQUFLOEIsV0FBTCxJQUFvQnpJLGtEQUFuRDtBQUNBLE9BQUs4SixVQUFMLENBQWdCQyxNQUFoQixDQUF1QixPQUF2QixFQUFnQ3BELEtBQUtxRCxXQUFMLElBQW9CLEdBQXBEOztBQUVBN0IsdURBQVVBLENBQUN6SCxRQUFYLENBQW9CLEtBQUtLLE1BQXpCLEVBQWlDbFcsSUFBakMsQ0FBc0MsVUFBQzZZLE1BQUQsRUFBWTtBQUNqRCxPQUFNMEUsV0FBVzFFLE9BQU81QixJQUFQLEVBQWpCOztBQUVBLE9BQU11RyxZQUFZLEVBQWxCO0FBQ0EsT0FBTUMsYUFBYSxFQUFuQjs7QUFFQUYsWUFBU2pTLE9BQVQsQ0FBaUIsVUFBQ29TLElBQUQsRUFBVTtBQUMxQixZQUFPQSxLQUFLQyxTQUFaO0FBQ0MsVUFBSyxNQUFMO0FBQWFILGdCQUFVMWhCLElBQVYsQ0FBZTRoQixJQUFmO0FBQ1o7QUFDRCxVQUFLLE9BQUw7QUFBY0QsaUJBQVczaEIsSUFBWCxDQUFnQjRoQixJQUFoQjtBQUNiO0FBSkY7QUFNQSxJQVBEO0FBUUEsVUFBS3ZpQixFQUFMLENBQVEsb0JBQVIsRUFBOEJrQyxLQUE5QixDQUFvQ21nQixTQUFwQztBQUNBLFVBQUtyaUIsRUFBTCxDQUFRLHFCQUFSLEVBQStCa0MsS0FBL0IsQ0FBcUNvZ0IsVUFBckM7QUFDQSxHQWhCRDtBQWlCQXZHLGdFQUFhQSxDQUFDNEUsS0FBS3NELFNBQW5CLEVBQThCLEtBQUtqa0IsRUFBTCxDQUFRLGNBQVIsQ0FBOUI7QUFDQStiLGdFQUFhQSxDQUFDNEUsS0FBS3VELGdCQUFuQixFQUFxQyxLQUFLbGtCLEVBQUwsQ0FBUSxXQUFSLENBQXJDO0FBQ0EsT0FBS21rQixVQUFMLENBQWdCeEQsS0FBS3ZHLE9BQUwsSUFBZ0IsS0FBS1UsTUFBckM7O0FBRUEsT0FBS3JjLE9BQUwsR0FBZWMsSUFBZjtBQUNBLEU7O29CQUVEb2tCLFMsd0JBQVksQ0FFWCxDOztvQkFFREUsUSx1QkFBVztBQUFBOztBQUNWLE1BQUcsS0FBS2xELElBQUwsQ0FBVXZHLE9BQVYsSUFBcUIsS0FBS1UsTUFBN0IsRUFBcUM7QUFDcENzSix3REFBVUEsQ0FBQ3BKLFVBQVgsQ0FBc0IsS0FBS0YsTUFBM0IsRUFBbUMsS0FBS0MsTUFBeEMsRUFBZ0RsVyxJQUFoRCxDQUFxRCxVQUFDdUMsUUFBRCxFQUFjO0FBQ2xFLFFBQU04TyxTQUFTOU8sU0FBUzBVLElBQVQsR0FBZ0JPLFlBQS9CO0FBQ0EsUUFBR25HLFVBQVUrRCwrQ0FBYixFQUFzQjtBQUNyQixZQUFLb0ssU0FBTDtBQUNBO0FBQ0QsSUFMRDtBQU1BLEdBUEQsTUFRSTtBQUNIRCx3REFBVUEsQ0FBQ3ZKLE9BQVgsQ0FBbUIsS0FBS0MsTUFBeEIsRUFBZ0MsS0FBS0MsTUFBckMsRUFBNkNsVyxJQUE3QyxDQUFrRCxVQUFDdUMsUUFBRCxFQUFjO0FBQy9ELFFBQU04TyxTQUFTOU8sU0FBUzBVLElBQVQsR0FBZ0JPLFlBQS9CO0FBQ0EsUUFBR25HLFVBQVUrRCwrQ0FBYixFQUFzQjtBQUNyQixZQUFLcUssT0FBTDtBQUNBO0FBQ0QsSUFMRDtBQU1BO0FBQ0QsRTs7b0JBRURILFUsdUJBQVduSSxTLEVBQVc7QUFDckIsTUFBR0EsU0FBSCxFQUFjO0FBQ2IsUUFBS3NJLE9BQUw7QUFDQSxHQUZELE1BR0s7QUFDSixRQUFLRCxTQUFMO0FBQ0E7QUFDRCxFOztvQkFFREMsTyxzQkFBVTtBQUNULE9BQUtSLFVBQUwsQ0FBZ0JDLE1BQWhCLENBQXVCLE1BQXZCLEVBQStCLGNBQS9CO0FBQ0EsT0FBS0QsVUFBTCxDQUFnQi9mLE9BQWhCO0FBQ0EsRTs7b0JBRURzZ0IsUyx3QkFBWTtBQUNYLE9BQUtQLFVBQUwsQ0FBZ0JDLE1BQWhCLENBQXVCLE1BQXZCLEVBQStCLGNBQS9CO0FBQ0EsT0FBS0QsVUFBTCxDQUFnQi9mLE9BQWhCO0FBQ0EsRTs7b0JBRURtZSxTLHdCQUFZO0FBQ1gsT0FBSzVDLElBQUwsQ0FBVWxMLEtBQVY7QUFDQSxPQUFLb04sU0FBTCxDQUFlb0IsUUFBZjtBQUNBLE9BQUs1aUIsRUFBTCxDQUFRLG9CQUFSLEVBQThCNGlCLFFBQTlCO0FBQ0EsT0FBSzVpQixFQUFMLENBQVEscUJBQVIsRUFBK0I0aUIsUUFBL0I7QUFDQSxFOzs7RUE3TG9DNWQsaUQ7O0FBQWpCK2IsdUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjtBQUNBOztJQUVxQnJFLE87Ozs7Ozs7OzttQkFDcEJ0YyxNLHFCQUFRO0FBQUE7O0FBRVAsTUFBTXVjLFNBQVM7QUFDZDdRLFNBQUssUUFEUyxFQUNDYSxVQUFTLEtBQUs1TixHQUFMLENBQVNxQixNQUFULENBQWdCSSxJQUQxQixFQUNnQ3dmLEtBQUk7QUFEcEMsR0FBZjs7QUFJQSxNQUFNNkMsT0FBTztBQUNabmpCLFNBQUssTUFETztBQUVac2dCLFFBQUksVUFGUTtBQUdacEQsVUFBTSxHQUhNLEVBR0RqTyxRQUFPLEdBSE4sRUFHV2dILFFBQU8sSUFIbEI7QUFJWmhKLGFBQVMsa0RBSkc7QUFLWnhOLFVBQU8sTUFMSztBQU1aa00sU0FBSyxDQUNKLEVBQUVsTSxPQUFNLFVBQVIsRUFBb0JELElBQUcsTUFBdkIsRUFBK0I0akIsTUFBSyxpQkFBcEMsRUFESSxFQUVKLEVBQUUzakIsT0FBTSxTQUFSLEVBQW1CRCxJQUFHLFNBQXRCLEVBQWtDNGpCLE1BQUssb0JBQXZDLEVBRkksRUFHSixFQUFFM2pCLE9BQU0sTUFBUixFQUFnQkQsSUFBRyxNQUFuQixFQUE0QjRqQixNQUFLLGFBQWpDLEVBSEksRUFJSixFQUFFM2pCLE9BQU0sVUFBUixFQUFvQkQsSUFBRyxVQUF2QixFQUFvQzRqQixNQUFLLFlBQXpDLEVBSkksQ0FOTztBQVladmlCLE9BQUc7QUFDRndpQixxQkFBaUIseUJBQUM3akIsRUFBRCxFQUFRO0FBQ3hCLFNBQU1rYixVQUFVLE9BQUs1YSxRQUFMLENBQWMsSUFBZCxFQUFvQixJQUFwQixDQUFoQjtBQUNBLFlBQUtULEdBQUwsQ0FBU1EsSUFBVCxzQkFBaUM2YSxPQUFqQyxnQkFBbURsYixFQUFuRDtBQUNBO0FBSkM7QUFaUyxHQUFiOztBQW9CQSxNQUFNeVosU0FBUztBQUNkalosU0FBSyxRQURTO0FBRWRXLFlBQVEsV0FGTTtBQUdkbEIsVUFBTSxRQUhRO0FBSWQyTSxTQUFLO0FBSlMsR0FBZjs7QUFPQSxNQUFNNUcsS0FBSztBQUNWNEcsU0FBSyxPQURLLEVBQ0ltVyxVQUFTLENBRGIsRUFDZ0JqQyxLQUFJLFlBRHBCO0FBRVZ4QyxTQUFLLENBQ0osRUFBRXlFLFVBQVMsQ0FBWCxFQUFjOUMsVUFBUyxFQUF2QixFQUEyQjVCLE1BQU0sQ0FBRSxFQUFDeUMsS0FBSSxxQkFBTCxFQUE0QnpDLE1BQUssQ0FBQ1osTUFBRCxFQUFTa0csSUFBVCxFQUFlbEssTUFBZixDQUFqQyxFQUFGLENBQWpDLEVBREksRUFFSixFQUFFalosTUFBTSxTQUFSLEVBQW1Ca2QsT0FBTyxDQUExQixFQUZJLEVBR0o7QUFDQzlRLFVBQU0sTUFEUCxFQUNlcVQsVUFBVSxFQUR6QixFQUM2QjhDLFVBQVUsQ0FEdkMsRUFDMEMxRSxNQUFNLENBQzlDLEVBQUU1VCxVQUFVLElBQVosRUFEOEM7QUFEaEQsSUFISTtBQUZLLEdBQVg7O0FBYUEsU0FBT3pFLEVBQVA7QUFDQSxFOzttQkFFRGMsSSxtQkFBTztBQUFBOztBQUNOLE1BQU1vWSxnQkFBZ0IsSUFBSXhFLHNEQUFKLEVBQXRCOztBQUVBLE9BQUs1WixFQUFMLENBQVEsV0FBUixFQUFxQlUsV0FBckIsQ0FBaUMsYUFBakMsRUFBZ0QsWUFBTTtBQUNyRCxPQUFNM0IsTUFBTSxPQUFLQSxHQUFqQjtBQUNBLE9BQU1pZixTQUFTNWYsTUFBTThMLElBQU4sQ0FBVytULFNBQVgsQ0FBcUIsVUFBckIsQ0FBZjtBQUNBLE9BQU1JLGNBQWNMLE9BQU8sSUFBSTlULElBQUosRUFBUCxDQUFwQjs7QUFFQWtVLGlCQUFjekYsTUFBZCxDQUFxQixFQUFDMEYsd0JBQUQsRUFBckIsRUFBb0N4WixJQUFwQyxDQUF5QyxZQUFNO0FBQzlDOUYsUUFBSVEsSUFBSixDQUFTLFFBQVQ7QUFDQSxJQUZEO0FBR0EsR0FSRDtBQVNBLEU7OztFQTlEbUN5RixpRDs7QUFBaEIwWCxzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjtBQUNBO0FBQ0E7O0lBRXFCNkgsYTs7Ozs7Ozs7O3lCQUNwQm5rQixNLHFCQUFTO0FBQ1IsTUFBTTBmLGdCQUFnQjtBQUNyQmpFLFNBQU07QUFEZSxHQUF0Qjs7QUFJQSxTQUFPO0FBQ04wQixTQUFNLENBQ0wsSUFBSXNDLHVEQUFKLENBQVksS0FBSzlnQixHQUFqQixFQUFzQitnQixhQUF0QixFQUFxQ2lCLGlEQUFyQyxDQURLO0FBREEsR0FBUDtBQUtBLEU7OztFQVh5Qy9iLGlEOztBQUF0QnVmLDRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7SUFFcUJDLFE7Ozs7Ozs7OztvQkFDcEJwa0IsTSxxQkFBUztBQUNSLE1BQU1xa0IsY0FBYztBQUNuQi9rQixTQUFNLFdBRGE7QUFFbkJSLE9BQUksV0FGZTtBQUduQnlXLFdBQVEsSUFIVztBQUluQm1ILFlBQVMsQ0FFUjtBQUNDSCxZQUFRLEtBRFQ7QUFFQ3FELFNBQUssUUFGTjtBQUdDcEQsV0FBTyxFQUhSO0FBSUNqUSxjQUFVO0FBSlgsSUFGUSxFQVFSO0FBQ0N6TixRQUFJLFdBREw7QUFFQ3lkLFlBQVEsUUFGVDtBQUdDcUQsU0FBSyxRQUhOO0FBSUNwRCxXQUFPLEVBSlI7QUFLQ2pRLGNBQVU7QUFMWCxJQVJRO0FBSlUsR0FBcEI7O0FBc0JBLE1BQU0rWCxTQUFTO0FBQ2RobEIsU0FBTSxRQURRO0FBRWRSLE9BQUksVUFGVTtBQUdkQyxVQUFPLEtBSE87QUFJZDJNLFNBQUssTUFKUztBQUtkNlksZUFBWSxHQUxFO0FBTWR0SCxVQUFPLGlCQUFNLENBQUU7QUFORCxHQUFmOztBQVNBLFNBQU87QUFDTkUsU0FBTSxDQUFDa0gsV0FBRCxFQUFjQyxNQUFkO0FBREEsR0FBUDtBQUdBLEU7O29CQUVEMWUsSSxtQkFBTztBQUNOO0FBQ0EsRTs7O0VBeENvQ2hCLGlEOztBQUFqQndmLHVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCO0FBQ0E7QUFDQTs7SUFHcUJJLFE7Ozs7Ozs7OztvQkFDcEJ4a0IsTSxxQkFBUztBQUFBOztBQUNSLE1BQU1za0IsU0FBUztBQUNkaGxCLFNBQU0sUUFEUTtBQUVkUixPQUFJLGFBRlU7QUFHZEMsVUFBTyxNQUhPO0FBSWQyTSxTQUFNLE1BSlE7QUFLZDZZLGVBQVksR0FMRTtBQU1kdEgsVUFBTyxpQkFBTTtBQUNaLFdBQUsrQixRQUFMO0FBQ0E7QUFSYSxHQUFmOztBQVdBLE1BQU1rRSxXQUFXO0FBQ2hCNWpCLFNBQU0sTUFEVTtBQUVoQlcsWUFBUyxjQUZPO0FBR2hCdWUsYUFBVSxDQUNULEVBQUVsZixNQUFNLE1BQVIsRUFBZ0JjLE1BQU0sSUFBdEIsRUFBNEJILFNBQVMsU0FBckMsRUFBZ0QwYyxRQUFRLElBQXhELEVBRFMsRUFFVCxFQUFFcmQsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxZQUF2QixFQUFvQ3JlLE1BQU0sV0FBMUMsRUFBdURzZSxZQUFZLEVBQW5FLEVBQXVFQyxZQUFZLE9BQW5GLEVBRlMsRUFHVCxFQUFFcmYsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxXQUF2QixFQUFtQ3JlLE1BQU0sY0FBekMsRUFBeURzZSxZQUFZLEVBQXJFLEVBQXlFQyxZQUFZLE9BQXJGLEVBSFMsRUFJVCxFQUFFcmYsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxhQUF2QixFQUFxQ3JlLE1BQU0sYUFBM0MsRUFBMERzZSxZQUFZLEVBQXRFLEVBQTBFQyxZQUFZLE9BQXRGLEVBSlMsRUFLVCxFQUFFcmYsTUFBTSxZQUFSLEVBQXNCbWYsT0FBTyxZQUE3QixFQUEwQ3JlLE1BQU0sWUFBaEQsRUFBOERILFNBQVMsWUFBdkUsRUFBcUZ5ZSxZQUFZLEVBQWpHLEVBQXFHQyxZQUFZLE9BQWpILEVBTFMsRUFNVCxFQUFFcmYsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxTQUF2QixFQUFpQ3JlLE1BQU0sU0FBdkMsRUFBa0RzZSxZQUFZLEVBQTlELEVBQWtFQyxZQUFZLE9BQTlFLEVBTlMsRUFPVCxFQUFFcmYsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxPQUF2QixFQUErQnJlLE1BQU0sZUFBckMsRUFBc0RzZSxZQUFZLEVBQWxFLEVBQXNFQyxZQUFZLE9BQWxGLEVBUFMsRUFRVCxFQUFFcmYsTUFBTSxNQUFSLEVBQWdCbWYsT0FBTyxPQUF2QixFQUErQnJlLE1BQU0sT0FBckMsRUFBOENzZSxZQUFZLEVBQTFELEVBQThEQyxZQUFZLE9BQTFFLEVBUlMsRUFTVDJGLE1BVFM7QUFITSxHQUFqQjs7QUFnQkEsU0FBTztBQUNObkgsU0FBTSxDQUFDK0YsUUFBRDtBQURBLEdBQVA7QUFHQSxFOztvQkFFRHRkLEksbUJBQU87QUFBQTs7QUFDTixNQUFNOUcsS0FBSyxLQUFLTSxRQUFMLENBQWMsSUFBZCxFQUFvQixJQUFwQixDQUFYOztBQUVBaWUsdURBQVVBLENBQUN2QyxPQUFYLENBQW1CaGMsRUFBbkIsRUFBdUIyRixJQUF2QixDQUE0QixVQUFDd0csSUFBRCxFQUFVO0FBQ3JDLE9BQU1pWSxXQUFXalksS0FBS3lRLElBQUwsR0FBWSxDQUFaLENBQWpCO0FBQ0F3SCxZQUFTcEYsVUFBVCxHQUFzQixJQUFJaFUsSUFBSixDQUFVb1osU0FBU3BGLFVBQW5CLENBQXRCO0FBQ0EsVUFBS2xlLEVBQUwsQ0FBUSxjQUFSLEVBQXdCd2YsU0FBeEIsQ0FBa0M4RCxRQUFsQztBQUNBLEdBSkQ7QUFLQSxFOztvQkFFRGxFLFEsdUJBQVk7QUFDWCxNQUFNL1QsT0FBTyxLQUFLckwsRUFBTCxDQUFRLGNBQVIsRUFBd0IwZixTQUF4QixFQUFiO0FBQ0EsTUFBTXRELGdCQUFnQixLQUFLaGUsS0FBTCxDQUFXaUksT0FBWCxDQUFtQixnQkFBbkIsQ0FBdEI7QUFDQWlVLDZEQUFVQSxDQUFDbUQscURBQVgsRUFBdUJwUyxJQUF2QixFQUE2QitRLGFBQTdCO0FBQ0EsRTs7O0VBaERvQ3BYLGlEOztBQUFqQjRmLHVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7QUFDQTs7SUFFcUJDLFE7Ozs7Ozs7OztvQkFDcEJ6a0IsTSxxQkFBUztBQUFBOztBQUVSLFNBQU87QUFDTm9kLFNBQU0sQ0FDTDtBQUNDOWQsVUFBTSxNQURQO0FBRUNrZCxXQUFPLEdBRlI7QUFHQ2pILFlBQVEsSUFIVDtBQUlDdEssVUFBTSxDQUNMO0FBQ0NuTSxTQUFJLGlCQURMO0FBRUNDLFlBQU87QUFGUixLQURLLEVBS0w7QUFDQ0QsU0FBSSxpQkFETDtBQUVDQyxZQUFPO0FBRlIsS0FMSyxFQVNMO0FBQ0NELFNBQUksb0JBREw7QUFFQ0MsWUFBTztBQUZSLEtBVEssRUFhTDtBQUNDRCxTQUFJLHdCQURMO0FBRUNDLFlBQU87QUFGUixLQWJLLENBSlA7QUFzQkNvQixRQUFJO0FBQ0hxaEIsa0JBQWE7QUFBQSxhQUFNLE9BQUsxaUIsRUFBTCxHQUFOO0FBQUE7QUFEVjtBQXRCTCxJQURLLEVBMkJMO0FBQ0NBLFFBQUksVUFETDtBQUVDUSxVQUFNLFdBRlA7QUFHQ29kLGFBQVMsQ0FDUjtBQUNDNWQsU0FBSSxZQURMO0FBRUMrZ0IsV0FBTSxNQUZQO0FBR0NoRCxnQkFBVyxDQUhaO0FBSUNOLGFBQVE7QUFKVCxLQURRLEVBT1I7QUFDQ3pkLFNBQUksYUFETDtBQUVDK2dCLFdBQU0sTUFGUDtBQUdDaEQsZ0JBQVcsQ0FIWjtBQUlDTixhQUFRO0FBSlQsS0FQUSxFQWFSO0FBQ0N6ZCxTQUFJLFFBREw7QUFFQytnQixXQUFNLE1BRlA7QUFHQ3JELFlBQU8sRUFIUjtBQUlDb0QsVUFBSyxRQUpOO0FBS0NyRCxhQUFRO0FBTFQsS0FiUSxFQW9CUjtBQUNDemQsU0FBSSx3QkFETDtBQUVDK2dCLFdBQU0sTUFGUDtBQUdDckQsWUFBTyxFQUhSO0FBSUNvRCxVQUFLLFFBSk47QUFLQ3JELGFBQVE7QUFMVCxLQXBCUSxFQTJCUjtBQUNDemQsU0FBSSxxQkFETDtBQUVDK2dCLFdBQU0sTUFGUDtBQUdDckQsWUFBTyxFQUhSO0FBSUNvRCxVQUFLLFFBSk47QUFLQ2hDLGFBQVE1ZixNQUFNOEwsSUFBTixDQUFXK1QsU0FBWCxDQUFxQixJQUFyQixDQUxUO0FBTUN0QixhQUFRO0FBTlQsS0EzQlEsRUFtQ1I7QUFDQ3pkLFNBQUksaUJBREw7QUFFQzBkLFlBQU87QUFGUixLQW5DUSxDQUhWO0FBMkNDRyxZQUFRO0FBM0NULElBM0JLO0FBREEsR0FBUDtBQTJFQSxFOztvQkFFRC9XLEksbUJBQU87QUFBQTs7QUFDTixPQUFLb2EsSUFBTCxHQUFZcGdCLEdBQUcsVUFBSCxDQUFaO0FBQ0F1Z0IsdURBQVVBLENBQUNwRyxpQkFBWCxHQUErQnRWLElBQS9CLENBQW9DLFVBQUM2WSxNQUFELEVBQVk7QUFDL0MsT0FBSThDLFdBQVc5QyxPQUFPNUIsSUFBUCxFQUFmO0FBQ0EwRSxjQUFXQSxTQUFTNUMsR0FBVCxDQUFhLFVBQUNoQyxFQUFELEVBQVE7QUFDL0JBLE9BQUc2RSxtQkFBSCxHQUF5QixJQUFJdlcsSUFBSixDQUFTMFIsR0FBRzZFLG1CQUFaLENBQXpCO0FBQ0EsV0FBTzdFLEVBQVA7QUFDQSxJQUhVLENBQVg7QUFJQSxVQUFLNEUsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxHQVBEO0FBUUEsRTs7b0JBRURzRSxlLDhCQUFrQjtBQUNqQixNQUFJelosaUJBQVcsS0FBS21WLFFBQWhCLENBQUo7QUFDQW5WLE9BQUs0VSxJQUFMLENBQVUsVUFBQ3BYLENBQUQsRUFBSWtjLENBQUosRUFBVTtBQUNuQixVQUFPbGMsRUFBRTRYLG1CQUFGLEdBQXdCc0UsRUFBRXRFLG1CQUFqQztBQUNBLEdBRkQ7QUFHQSxPQUFLdUUsVUFBTCxDQUFnQjNaLElBQWhCO0FBQ0EsRTs7b0JBRUQ0WixlLDhCQUFrQjtBQUNqQixNQUFJNVosaUJBQVcsS0FBS21WLFFBQWhCLENBQUo7QUFDQW5WLE9BQUs0VSxJQUFMLENBQVUsVUFBQ3BYLENBQUQsRUFBSWtjLENBQUosRUFBVTtBQUNuQixVQUFPQSxFQUFFdEUsbUJBQUYsR0FBd0I1WCxFQUFFNFgsbUJBQWpDO0FBQ0EsR0FGRDtBQUdBLE9BQUt1RSxVQUFMLENBQWdCM1osSUFBaEI7QUFDQSxFOztvQkFFRDZaLGtCLGlDQUFxQjtBQUNwQixNQUFJN1osaUJBQVcsS0FBS21WLFFBQWhCLENBQUo7QUFDQW5WLE9BQUs0VSxJQUFMLENBQVUsVUFBQ3BYLENBQUQsRUFBSWtjLENBQUosRUFBVTtBQUNuQixVQUFPQSxFQUFFSSxlQUFGLEdBQW9CdGMsRUFBRXNjLGVBQTdCO0FBQ0EsR0FGRDtBQUdBLE9BQUtILFVBQUwsQ0FBZ0IzWixJQUFoQjtBQUNBLEU7O29CQUVEK1osc0IscUNBQXlCO0FBQ3hCLE1BQUkvWixpQkFBVyxLQUFLbVYsUUFBaEIsQ0FBSjtBQUNBblYsT0FBSzRVLElBQUwsQ0FBVSxVQUFDcFgsQ0FBRCxFQUFJa2MsQ0FBSixFQUFVO0FBQ25CLFVBQU9BLEVBQUVNLFVBQUYsQ0FBYS9qQixNQUFiLEdBQXNCdUgsRUFBRXdjLFVBQUYsQ0FBYS9qQixNQUExQztBQUNBLEdBRkQ7QUFHQSxPQUFLMGpCLFVBQUwsQ0FBZ0IzWixJQUFoQjtBQUNBLEU7O29CQUVEMlosVSx1QkFBVzNaLEksRUFBTTtBQUNoQkEsU0FBT0EsS0FBS3hILEtBQUwsQ0FBVyxDQUFYLEVBQWMsRUFBZCxDQUFQO0FBQ0EsT0FBS3VjLElBQUwsQ0FBVWxlLEtBQVYsQ0FBZ0JtSixJQUFoQjtBQUNBLE9BQUsrVSxJQUFMLENBQVU3Z0IsSUFBVjtBQUNBLEU7OztFQWhJb0N5RixpRDs7QUFBakI2Zix1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCO0FBQ0E7O0lBRXFCUyxZOzs7Ozs7Ozs7d0JBQ3BCbGxCLE0scUJBQVE7O0FBRVAsTUFBTW1sQixlQUFlO0FBQ3BCN2xCLFNBQU0sTUFEYztBQUVwQlcsWUFBUyxjQUZXO0FBR3BCdWMsVUFBTyxHQUhhO0FBSXBCZ0MsYUFBVSxDQUNULEVBQUVsZixNQUFNLE1BQVIsRUFBZ0JtZixPQUFPLFNBQXZCLEVBQWtDcmUsTUFBTSxVQUF4QyxFQURTLEVBRVQsRUFBRWQsTUFBTSxNQUFSLEVBQWdCb00sTUFBTSxVQUF0QixFQUFrQytTLE9BQU8sVUFBekMsRUFBcURyZSxNQUFNLFVBQTNELEVBRlMsRUFHVDtBQUNDMGUsWUFBUSxDQURULEVBQ1kxQixNQUFNLENBQ2hCO0FBQ0M5ZCxXQUFNLFFBRFAsRUFDaUJXLFNBQVMsYUFEMUIsRUFDeUNsQixPQUFPLFVBRGhELEVBQzREMk0sTUFBTTtBQURsRSxLQURnQjtBQURsQixJQUhTO0FBSlUsR0FBckI7O0FBaUJBLFNBQU87QUFDTjBSLFNBQU0sQ0FDTCxFQURLLEVBRUw7QUFDQ0QsVUFBTSxDQUNMLEVBREssRUFFTGdJLFlBRkssRUFHTCxFQUhLO0FBRFAsSUFGSyxFQVNMLEVBVEs7QUFEQSxHQUFQO0FBYUEsRTs7d0JBRUR2ZixJLG1CQUFPO0FBQUE7O0FBQ04sT0FBS2hHLEVBQUwsQ0FBUSxhQUFSLEVBQXVCVSxXQUF2QixDQUFtQyxhQUFuQyxFQUFrRCxZQUFNO0FBQ3ZELE9BQU0yaUIsU0FBUyxPQUFLcmpCLEVBQUwsQ0FBUSxjQUFSLEVBQXdCMGYsU0FBeEIsRUFBZjtBQUNBLE9BQU10QixnQkFBZ0IsSUFBSXhFLHNEQUFKLEVBQXRCOztBQUVBd0UsaUJBQWN2RSxRQUFkLENBQXVCd0osTUFBdkIsRUFBK0J4ZSxJQUEvQixDQUFvQyxVQUFDdUMsUUFBRCxFQUFjO0FBQ2pELFFBQU04TyxTQUFTOU8sU0FBUzBVLElBQVQsR0FBZ0I1RixNQUEvQjtBQUNBLFFBQU1oWCxLQUFLa0ksU0FBUzBVLElBQVQsR0FBZ0I1YyxFQUEzQjtBQUNBLFFBQUlnWCxXQUFXLENBQWYsRUFBa0I7QUFDakIsWUFBSzNXLElBQUwsc0JBQTZCTCxFQUE3QjtBQUNBLEtBRkQsTUFHSztBQUNKLFNBQUdrSSxTQUFTMFUsSUFBVCxHQUFnQjBKLE1BQWhCLEtBQTJCLFdBQTlCLEVBQTJDO0FBQzFDLGFBQUtqbUIsSUFBTCxDQUFVLFFBQVY7QUFDQTtBQUNEbkIsV0FBTWlJLE9BQU4sQ0FBY2UsU0FBUzBVLElBQVQsR0FBZ0J6USxJQUE5QjtBQUNBO0FBQ0QsSUFaRDtBQWFBLEdBakJEO0FBa0JBLEU7OztFQXREd0NyRyxpRDs7QUFBckJzZ0IsMkUiLCJmaWxlIjoibXlhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zb3VyY2VzL215YXBwLmpzXCIpO1xuIiwiY2xhc3MgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3ZWJpeCkge1xyXG4gICAgICAgIHRoaXMud2ViaXhKZXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2ViaXggPSB3ZWJpeDtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9zdWJzID0ge307XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgfVxyXG4gICAgZ2V0Um9vdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZGV0YWNoRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVN1YnMoKTtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSB0aGlzLl9jb250YWluZXIgPSB0aGlzLmFwcCA9IHRoaXMuX3BhcmVudCA9IHRoaXMuX3Jvb3QgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgc2V0UGFyYW0oaWQsIHZhbHVlLCB1cmwpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGF0YVtpZF0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFbaWRdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZ21lbnQudXBkYXRlKGlkLCB2YWx1ZSwgMCk7XHJcbiAgICAgICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFBhcmFtKGlkLCBwYXJlbnQpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2RhdGFbaWRdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgfHwgIXBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5nZXRQYXJhbShpZCwgcGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlZ21lbnQuc3VidXJsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmxTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlZ21lbnQudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGdldFBhcmVudFZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICAgIH1cclxuICAgICQkKGlkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCByb290ID0gdGhpcy5nZXRSb290KCk7XHJcbiAgICAgICAgICAgIHJldHVybiByb290LnF1ZXJ5Vmlldygob2JqID0+IChvYmouY29uZmlnLmlkID09PSBpZCB8fCBvYmouY29uZmlnLmxvY2FsSWQgPT09IGlkKSAmJlxyXG4gICAgICAgICAgICAgICAgKG9iai4kc2NvcGUgPT09IHJvb3QuJHNjb3BlKSksIFwic2VsZlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbihvYmosIG5hbWUsIGNvZGUpIHtcclxuICAgICAgICBjb25zdCBpZCA9IG9iai5hdHRhY2hFdmVudChuYW1lLCBjb2RlKTtcclxuICAgICAgICB0aGlzLl9ldmVudHMucHVzaCh7IG9iaiwgaWQgfSk7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG4gICAgY29udGFpbnModmlldykge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qga2lkID0gdGhpcy5fc3Vic1trZXldLnZpZXc7XHJcbiAgICAgICAgICAgIGlmIChraWQgPT09IHZpZXcgfHwga2lkLmNvbnRhaW5zKHZpZXcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3KG5hbWUpIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1Yi5zdWJ2aWV3LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlld0luZm8obmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuX3N1YnNbbmFtZSB8fCBcImRlZmF1bHRcIl07XHJcbiAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWJ2aWV3OiBzdWIsIHBhcmVudDogdGhpcyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJfdG9wXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3Vic1tuYW1lXSA9IHsgdXJsOiBcIlwiLCBpZDogbnVsbCwgcG9wdXA6IHRydWUgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gYSBjaGlsZCB2aWV3LCBzZWFyY2hlcyBmb3IgbmVhcmVzdCBwYXJlbnQgd2l0aCBzdWJ2aWV3XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIF9kZXRhY2hFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBldmVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgZXZlbnRzW2ldLm9iai5kZXRhY2hFdmVudChldmVudHNbaV0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9kZXN0cm95U3VicygpIHtcclxuICAgICAgICAvLyBkZXN0cm95IHN1YiB2aWV3c1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViVmlldyA9IHRoaXMuX3N1YnNba2V5XS52aWV3O1xyXG4gICAgICAgICAgICAvLyBpdCBwb3NzaWJsZSB0aGF0IHN1YnZpZXcgd2FzIG5vdCBsb2FkZWQgd2l0aCBhbnkgY29udGVudCB5ZXRcclxuICAgICAgICAgICAgLy8gc28gY2hlY2sgb24gbnVsbFxyXG4gICAgICAgICAgICBpZiAoc3ViVmlldykge1xyXG4gICAgICAgICAgICAgICAgc3ViVmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVzZXQgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcclxuICAgICAgICB0aGlzLl9zdWJzID0ge307XHJcbiAgICB9XHJcbiAgICBfaW5pdF91cmxfZGF0YSgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9zZWdtZW50LmN1cnJlbnQoKTtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICAgICAgdGhpcy53ZWJpeC5leHRlbmQodGhpcy5fZGF0YSwgdXJsLnBhcmFtcywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBfZ2V0RGVmYXVsdFN1YigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3Vicy5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzLmRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5fc3Vic1trZXldO1xyXG4gICAgICAgICAgICBpZiAoIXN1Yi5icmFuY2ggJiYgc3ViLnZpZXcgJiYga2V5ICE9PSBcIl90b3BcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBzdWIudmlldy5fZ2V0RGVmYXVsdFN1YigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JvdXRlZF92aWV3KCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWIgPSBwYXJlbnQuX2dldERlZmF1bHRTdWIoKTtcclxuICAgICAgICBpZiAoIXN1YiAmJiBzdWIgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyZW50Ll9yb3V0ZWRfdmlldygpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIHBhcnNlKHVybCkge1xyXG4gICAgLy8gcmVtb3ZlIHN0YXJ0aW5nIC9cclxuICAgIGlmICh1cmxbMF0gPT09IFwiL1wiKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cigxKTtcclxuICAgIH1cclxuICAgIC8vIHNwbGl0IHVybCBieSBcIi9cIlxyXG4gICAgY29uc3QgcGFydHMgPSB1cmwuc3BsaXQoXCIvXCIpO1xyXG4gICAgY29uc3QgY2h1bmtzID0gW107XHJcbiAgICAvLyBmb3IgZWFjaCBwYWdlIGluIHVybFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHRlc3QgPSBwYXJ0c1tpXTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgICAgICAvLyBkZXRlY3QgcGFyYW1zXHJcbiAgICAgICAgLy8gc3VwcG9ydCBvbGQgXHRcdFx0c29tZTphPWI6Yz1kXHJcbiAgICAgICAgLy8gYW5kIG5ldyBub3RhdGlvblx0XHRzb21lP2E9YiZjPWRcclxuICAgICAgICBsZXQgcG9zID0gdGVzdC5pbmRleE9mKFwiOlwiKTtcclxuICAgICAgICBpZiAocG9zID09PSAtMSkge1xyXG4gICAgICAgICAgICBwb3MgPSB0ZXN0LmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB0ZXN0LnN1YnN0cihwb3MgKyAxKS5zcGxpdCgvW1xcOlxcP1xcJl0vZyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBoYXNoIG9mIG5hbWVkIHBhcmFtc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtIG9mIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGNodW5rID0gcGFyYW0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2RjaHVua1swXV0gPSBkZWNvZGVVUklDb21wb25lbnQoZGNodW5rWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzdG9yZSBwYXJzZWQgdmFsdWVzXHJcbiAgICAgICAgY2h1bmtzW2ldID0ge1xyXG4gICAgICAgICAgICBwYWdlOiAocG9zID4gLTEgPyB0ZXN0LnN1YnN0cigwLCBwb3MpIDogdGVzdCksXHJcbiAgICAgICAgICAgIHBhcmFtczogcmVzdWx0LFxyXG4gICAgICAgICAgICBpc05ldzogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgcGFnZSBvYmplY3RzXHJcbiAgICByZXR1cm4gY2h1bmtzO1xyXG59XHJcbmZ1bmN0aW9uIHVybDJzdHIoc3RhY2spIHtcclxuICAgIGNvbnN0IHVybCA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBjaHVuayBvZiBzdGFjaykge1xyXG4gICAgICAgIHVybC5wdXNoKFwiL1wiICsgY2h1bmsucGFnZSk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gb2JqMnN0cihjaHVuay5wYXJhbXMpO1xyXG4gICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgdXJsLnB1c2goXCI/XCIgKyBwYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1cmwuam9pbihcIlwiKTtcclxufVxyXG5mdW5jdGlvbiBvYmoyc3RyKG9iaikge1xyXG4gICAgY29uc3Qgc3RyID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdHIucHVzaChcIiZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0ci5wdXNoKGtleSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLmpvaW4oXCJcIik7XHJcbn1cblxuY2xhc3MgUm91dGUge1xyXG4gICAgY29uc3RydWN0b3Iocm91dGUsIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dCA9IDE7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByb3V0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBwYXJzZShyb3V0ZSksXHJcbiAgICAgICAgICAgICAgICBwYXRoOiByb3V0ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4XTtcclxuICAgIH1cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXggKyB0aGlzLl9uZXh0XTtcclxuICAgIH1cclxuICAgIHN1YnVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmwuc2xpY2UodGhpcy5pbmRleCk7XHJcbiAgICB9XHJcbiAgICBzaGlmdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJvdXRlKHRoaXMucm91dGUsIHRoaXMuaW5kZXggKyB0aGlzLl9uZXh0KTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXggKyAxOyBpIDwgdXJsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHVybFtpXS5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gdXJsMnN0cih0aGlzLnN1YnVybCgpKTtcclxuICAgICAgICByZXR1cm4gc3RyID8gc3RyLnN1YnN0cigxKSA6IFwiXCI7XHJcbiAgICB9XHJcbiAgICBfam9pbihwYXRoLCBraWRzKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIGlmIChwYXRoID09PSBudWxsKSB7IC8vIGNoYW5nZSBvZiBwYXJhbWV0ZXJzLCByb3V0ZSBlbGVtZW50cyBhcmUgbm90IGFmZmVjdGVkXHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9sZCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIHVybCA9IG9sZC5zbGljZSgwLCB0aGlzLmluZGV4ICsgKGtpZHMgPyB0aGlzLl9uZXh0IDogMCkpO1xyXG4gICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5jb25jYXQocGFyc2UocGF0aCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVybC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFtpXS52aWV3ID0gb2xkW2ldLnZpZXc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkW2ldICYmIHVybFtpXS5wYWdlID09PSBvbGRbaV0ucGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFtpXS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQocGF0aCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2pvaW4ocGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gdXJsMnN0cih1cmwpO1xyXG4gICAgICAgIHRoaXMucm91dGUudXJsID0gdXJsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnBhdGg7XHJcbiAgICB9XHJcbiAgICBzaG93KHBhdGgsIHZpZXcsIGtpZHMpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9qb2luKHBhdGgsIGtpZHMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVkaXJlY3QgPSB1cmwyc3RyKHVybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0LFxyXG4gICAgICAgICAgICAgICAgY29uZmlybTogUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgYXBwID0gdmlldyA/IHZpZXcuYXBwIDogbnVsbDtcclxuICAgICAgICAgICAgLy8gd2hlbiBjcmVhdGluZyBhIG5ldyByb3V0ZSwgaXQgcG9zc2libGUgdGhhdCBpdCB3aWxsIG5vdCBoYXZlIGFueSBjb250ZW50XHJcbiAgICAgICAgICAgIC8vIGd1YXJkIGlzIG5vdCBuZWNlc3NhcnkgaW4gc3VjaCBjYXNlXHJcbiAgICAgICAgICAgIGlmIChhcHApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGFwcC5jYWxsRXZlbnQoXCJhcHA6Z3VhcmRcIiwgW29iai5yZWRpcmVjdCwgdmlldywgb2JqXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmouY29uZmlybS5jYXRjaCgoKSA9PiBvYmoucmVkaXJlY3QgPSBudWxsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmoucmVkaXJlY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnJlZGlyZWN0ICE9PSByZWRpcmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5zaG93KG9iai5yZWRpcmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gcmVkaXJlY3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlLnVybCA9IHVybDtcclxuICAgICAgICAgICAgICAgIHJlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpemUobikge1xyXG4gICAgICAgIHRoaXMuX25leHQgPSBuO1xyXG4gICAgfVxyXG4gICAgc3BsaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5yb3V0ZS51cmwuc2xpY2UodGhpcy5pbmRleCArIDEpLFxyXG4gICAgICAgICAgICBwYXRoOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocm91dGUudXJsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByb3V0ZS5wYXRoID0gdXJsMnN0cihyb3V0ZS51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJvdXRlKHJvdXRlLCAwKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShuYW1lLCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjaHVuayA9IHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXggKyAoaW5kZXggfHwgMCldO1xyXG4gICAgICAgIGlmICghY2h1bmspIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZS51cmwucHVzaCh7IHBhZ2U6IFwiXCIsIHBhcmFtczoge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShuYW1lLCB2YWx1ZSwgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBjaHVuay5wYWdlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjaHVuay5wYXJhbXNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gdXJsMnN0cih0aGlzLnJvdXRlLnVybCk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgSmV0VmlldyBleHRlbmRzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoYXBwLCBjb25maWcpIHtcclxuICAgICAgICBzdXBlcihhcHAud2ViaXgpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIC8vdGhpcy4kY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbiAgICB1aSh1aSwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgfHwgdWkuY29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGpldHZpZXcgPSB0aGlzLmFwcC5jcmVhdGVWaWV3KHVpKTtcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGpldHZpZXcpO1xyXG4gICAgICAgIGpldHZpZXcucmVuZGVyKGNvbnRhaW5lciwgdGhpcy5fc2VnbWVudCwgdGhpcyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1aSAhPT0gXCJvYmplY3RcIiB8fCAodWkgaW5zdGFuY2VvZiBKZXRCYXNlKSkge1xyXG4gICAgICAgICAgICAvLyByYXcgd2ViaXggVUlcclxuICAgICAgICAgICAgcmV0dXJuIGpldHZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gamV0dmlldy5nZXRSb290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvdyhwYXRoLCBjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgLy8gY29udmVydCBwYXJhbWV0ZXJzIG9iamVjdCB0byB1cmxcclxuICAgICAgICBpZiAodHlwZW9mIHBhdGggPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGF0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbShrZXksIHBhdGhba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF0aCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZWxpZ2F0ZSB0byBhcHAgaW4gY2FzZSBvZiByb290IHByZWZpeFxyXG4gICAgICAgICAgICBpZiAocGF0aC5zdWJzdHIoMCwgMSkgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsb2NhbCBwYXRoLCBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoXCIuL1wiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHBhcmVudCBwYXRoLCBjYWxsIHBhcmVudCB2aWV3XHJcbiAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoXCIuLi9cIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuc2hvdyhwYXRoLnN1YnN0cigzKSwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KFwiL1wiICsgcGF0aC5zdWJzdHIoMykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuZ2V0U3ViVmlld0luZm8oY29uZmlnLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWIucGFyZW50ICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1Yi5wYXJlbnQuc2hvdyhwYXRoLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29uZmlnLnRhcmdldCAmJiBjb25maWcudGFyZ2V0ICE9PSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJGcmFtZUxvY2soY29uZmlnLnRhcmdldCwgc3ViLnN1YnZpZXcsIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhcIi9cIiArIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93KHRoaXMuX3NlZ21lbnQsIHBhdGgsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgX3Nob3coc2VnbWVudCwgcGF0aCwgdmlldykge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50LnNob3cocGF0aCwgdmlldywgdHJ1ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRfdXJsX2RhdGEoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VnbWVudC5yb3V0ZS5saW5rUm91dGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5nZXRSb3V0ZXIoKS5zZXQoc2VnbWVudC5yb3V0ZS5wYXRoLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbc2VnbWVudC5yb3V0ZS5wYXRoXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXQoXyR2aWV3LCBfJCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIHJlYWR5KF8kdmlldywgXyR1cmwpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBjb25maWcoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAud2ViaXgubWVzc2FnZShcIlZpZXc6Q29uZmlnIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxuICAgIHVybENoYW5nZShfJHZpZXcsIF8kdXJsKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lLaWRzKCk7XHJcbiAgICAgICAgLy8gZGVzdHJveSBhY3R1YWwgVUlcclxuICAgICAgICB0aGlzLl9yb290LmRlc3RydWN0b3IoKTtcclxuICAgICAgICBzdXBlci5kZXN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbiAgICB1c2UocGx1Z2luLCBjb25maWcpIHtcclxuICAgICAgICBwbHVnaW4odGhpcy5hcHAsIHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveUtpZHMoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95U3VicygpO1xyXG4gICAgICAgIHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIudGFnTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb290LmRlc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudC5yZWZyZXNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcih0aGlzLl9zZWdtZW50KTtcclxuICAgIH1cclxuICAgIHJlbmRlcihyb290LCB1cmwsIHBhcmVudCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHVybCA9IG5ldyBSb3V0ZSh1cmwsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZWdtZW50ID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLl9pbml0X3VybF9kYXRhKCk7XHJcbiAgICAgICAgcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcclxuICAgICAgICBjb25zdCBfY29udGFpbmVyID0gKHR5cGVvZiByb290ID09PSBcInN0cmluZ1wiKSA/IHRoaXMud2ViaXgudG9Ob2RlKHJvb3QpIDogcm9vdDtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyICE9PSBfY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IF9jb250YWluZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIodXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKS50aGVuKCgpID0+IHRoaXMuZ2V0Um9vdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyKHVybCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnKCk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy50aGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWcudGhlbihjZmcgPT4gdGhpcy5fcmVuZGVyX2ZpbmFsKGNmZywgdXJsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyX2ZpbmFsKGNvbmZpZywgdXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyX2ZpbmFsKGNvbmZpZywgdXJsKSB7XHJcbiAgICAgICAgLy8gZ2V0IHByZXZpb3VzIHZpZXcgaW4gdGhlIHNhbWUgc2xvdFxyXG4gICAgICAgIGxldCBzbG90ID0gbnVsbDtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICBsZXQgc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5fY29udGFpbmVyLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgc2xvdCA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgaWYgKHNsb3QucG9wdXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMud2ViaXguJCQoc2xvdC5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdmlldyBhbHJlYWR5IGRlc3Ryb3llZFxyXG4gICAgICAgIGlmICghdGhpcy5hcHAgfHwgIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5fc2VnbWVudC5jdXJyZW50KCk7XHJcbiAgICAgICAgLy8gdXNpbmcgd3JhcHBlciBvYmplY3QsIHNvIHVpIGNhbiBiZSBjaGFuZ2VkIGZyb20gYXBwOnJlbmRlciBldmVudFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdWk6IHt9IH07XHJcbiAgICAgICAgdGhpcy5hcHAuY29weUNvbmZpZyhjb25maWcsIHJlc3VsdC51aSwgdGhpcy5fc3Vicyk7XHJcbiAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnJlbmRlclwiLCBbdGhpcywgdXJsLCByZXN1bHRdKTtcclxuICAgICAgICByZXN1bHQudWkuJHNjb3BlID0gdGhpcztcclxuICAgICAgICAvKiBkZXN0cm95IG9sZCBIVE1MIGF0dGFjaGVkIHZpZXdzIGJlZm9yZSBjcmVhdGluZyBuZXcgb25lICovXHJcbiAgICAgICAgaWYgKCFzbG90ICYmIGN1cnJlbnQuaXNOZXcgJiYgY3VycmVudC52aWV3KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFkZGluZyBpbnNpZGUgb2YgbXVsdGl2aWV3IC0gcHJlc2VydmUgb2xkIGlkXHJcbiAgICAgICAgICAgIGlmIChzbG90ICYmICFzaG93KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGR1aSA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG9sZHVpLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5hbWUgPT09IFwibXVsdGl2aWV3XCIgJiYgIXJlc3VsdC51aS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC51aS5pZCA9IG9sZHVpLmNvbmZpZy5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5hcHAud2ViaXgudWkocmVzdWx0LnVpLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBhc1dpbiA9IHRoaXMuX3Jvb3Q7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciB1cmwgYWRkZWQgdG8gaWdub3JlIHRoaXMudWkgY2FsbHNcclxuICAgICAgICAgICAgaWYgKHNob3cgJiYgYXNXaW4uc2V0UG9zaXRpb24gJiYgIWFzV2luLmlzVmlzaWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhc1dpbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2hlY2ssIGlmIHdlIGFyZSByZXBsYWNpbmcgc29tZSBvbGRlciB2aWV3XHJcbiAgICAgICAgICAgIGlmIChzbG90KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xvdC52aWV3ICYmIHNsb3QudmlldyAhPT0gdGhpcyAmJiBzbG90LnZpZXcgIT09IHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNsb3QuaWQgPSB0aGlzLl9yb290LmNvbmZpZy5pZDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldFBhcmVudFZpZXcoKSB8fCAhdGhpcy5hcHAuYXBwKVxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3QudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHdlIGhhdmUgc3ViYXBwLCBzZXQgd2hvbGUgYXBwIGFzIGEgdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIG9uIGRlc3RydWN0aW9uLCB0aGUgd2hvbGUgYXBwIHdpbGwgYmUgZGVzdHJveWVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3ID0gdGhpcy5hcHA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNOZXcpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBQcm9taXNlLnJlc29sdmUodGhpcy5faW5pdCh0aGlzLl9yb290LCB1cmwpKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0VXJsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkeSh0aGlzLl9yb290LCB1cmwuc3VidXJsKCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuY2F0Y2goZXJyID0+IHRoaXMuX2luaXRFcnJvcih0aGlzLCBlcnIpKTtcclxuICAgIH1cclxuICAgIF9pbml0KHZpZXcsIHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluaXQodmlldywgdXJsLnN1YnVybCgpKTtcclxuICAgIH1cclxuICAgIF91cmxDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnVybGNoYW5nZVwiLCBbdGhpcywgdGhpcy5fc2VnbWVudF0pO1xyXG4gICAgICAgIGNvbnN0IHdhaXRzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuX3N1YnNba2V5XTtcclxuICAgICAgICAgICAgY29uc3Qgd2FpdCA9IHRoaXMuX3JlbmRlckZyYW1lTG9jayhrZXksIGZyYW1lLCBudWxsKTtcclxuICAgICAgICAgICAgaWYgKHdhaXQpIHtcclxuICAgICAgICAgICAgICAgIHdhaXRzLnB1c2god2FpdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHdhaXRzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXJsQ2hhbmdlKHRoaXMuX3Jvb3QsIHRoaXMuX3NlZ21lbnQuc3VidXJsKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3JlbmRlckZyYW1lTG9jayhrZXksIGZyYW1lLCBwYXRoKSB7XHJcbiAgICAgICAgLy8gaWYgc3VidmlldyBpcyBub3Qgb2NjdXBpZWQgYnkgc29tZSByZW5kZXJpbmcgeWV0XHJcbiAgICAgICAgaWYgKCFmcmFtZS5sb2NrKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHJlaXZlIGFuZCBzdG9yZSByZW5kZXJpbmcgZW5kIHByb21pc2VcclxuICAgICAgICAgICAgY29uc3QgbG9jayA9IHRoaXMuX3JlbmRlckZyYW1lKGtleSwgZnJhbWUsIHBhdGgpO1xyXG4gICAgICAgICAgICBpZiAobG9jaykge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgbG9jayBhZnRlciBmcmFtZSByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgIC8vIGFzIHByb21pc2UuZmluYWxseSBpcyBub3Qgc3VwcG9ydGVkIGJ5ICBXZWJpeCBsZXNzZXIgdGhhbiA2LjJcclxuICAgICAgICAgICAgICAgIC8vIHVzaW5nIGEgbW9yZSB2ZXJib3NlIG5vdGF0aW9uXHJcbiAgICAgICAgICAgICAgICBmcmFtZS5sb2NrID0gbG9jay50aGVuKCgpID0+IGZyYW1lLmxvY2sgPSBudWxsLCAoKSA9PiBmcmFtZS5sb2NrID0gbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHJlbmRlcmluZyBlbmQgcHJvbWlzZVxyXG4gICAgICAgIHJldHVybiBmcmFtZS5sb2NrO1xyXG4gICAgfVxyXG4gICAgX3JlbmRlckZyYW1lKGtleSwgZnJhbWUsIHBhdGgpIHtcclxuICAgICAgICAvL2RlZmF1bHQgcm91dGVcclxuICAgICAgICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VnbWVudC5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBuZXh0IHNlZ21lbnQgaW4gdXJsLCByZW5kZXIgaXRcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCB0aGlzLl9zZWdtZW50LnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZyYW1lLnZpZXcgJiYgZnJhbWUucG9wdXApIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoZXJlIGlzIG5vIG5leHQgc2VnbWVudCwgZGVsZXRlIHRoZSBleGlzdGluZyBzdWItdmlld1xyXG4gICAgICAgICAgICAgICAgZnJhbWUudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS52aWV3ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIG5ldyBwYXRoIHByb3ZpZGVkLCBzZXQgaXQgdG8gdGhlIGZyYW1lXHJcbiAgICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZnJhbWUudXJsID0gcGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW4gY2FzZSBvZiByb3V0ZWQgc3ViLXZpZXdcclxuICAgICAgICBpZiAoZnJhbWUucm91dGUpIHtcclxuICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIG5ldyBwYXRoIGZvciBzdWItdmlld1xyXG4gICAgICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1lLnJvdXRlLnNob3cocGF0aCwgZnJhbWUudmlldykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIGZyYW1lLnJvdXRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRvIG5vdCB0cmlnZ2VyIG9uQ2hhbmdlIGZvciBpc29sYXRlZCBzdWItdmlld3NcclxuICAgICAgICAgICAgaWYgKGZyYW1lLmJyYW5jaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2aWV3ID0gZnJhbWUudmlldztcclxuICAgICAgICAvLyBpZiB2aWV3IGRvZXNuJ3QgZXhpc3RzIHlldCwgaW5pdCBpdFxyXG4gICAgICAgIGlmICghdmlldyAmJiBmcmFtZS51cmwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFtZS51cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZywgc28gd2UgaGF2ZSBpc29sYXRlZCBzdWJ2aWV3IHVybFxyXG4gICAgICAgICAgICAgICAgZnJhbWUucm91dGUgPSBuZXcgUm91dGUoZnJhbWUudXJsLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCBmcmFtZS5yb3V0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvYmplY3QsIHNvIHdlIGhhdmUgYW4gZW1iZWRlZCBzdWJ2aWV3XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyYW1lLnVybCA9PT0gXCJmdW5jdGlvblwiICYmICEodmlldyBpbnN0YW5jZW9mIGZyYW1lLnVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gbmV3IGZyYW1lLnVybCh0aGlzLmFwcCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gZnJhbWUudXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRyaWdnZXIgb25DaGFuZ2UgZm9yIGFscmVhZHkgZXhpc3RlZCB2aWV3XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKGZyYW1lLCAoZnJhbWUucm91dGUgfHwgdGhpcy5fc2VnbWVudCksIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9pbml0RXJyb3IodmlldywgZXJyKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgaWYgdmlldyBpcyBkZXN0cm95ZWQsIGlnbm9yZSBhbnkgdmlldyByZWxhdGVkIGVycm9yc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmVycm9yKFwiYXBwOmVycm9yOmluaXR2aWV3XCIsIFtlcnIsIHZpZXddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlU3ViVmlldyhzdWIsIHN1YnVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5jcmVhdGVGcm9tVVJMKHN1YnVybC5jdXJyZW50KCksIHN1Yi52aWV3KS50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5yZW5kZXIoc3ViLCBzdWJ1cmwsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2Rlc3Ryb3lLaWRzKCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgY2hpbGQgdmlld3NcclxuICAgICAgICBjb25zdCB1aXMgPSB0aGlzLl9jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gdWlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICh1aXNbaV0gJiYgdWlzW2ldLmRlc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHVpc1tpXS5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVzZXQgdmFycyBmb3IgYmV0dGVyIEdDIHByb2Nlc3NpbmdcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG59XG5cbi8vIHdyYXBwZXIgZm9yIHJhdyBvYmplY3RzIGFuZCBKZXQgMS54IHN0cnVjdHNcclxuY2xhc3MgSmV0Vmlld1JhdyBleHRlbmRzIEpldFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoYXBwLCBjb25maWcpIHtcclxuICAgICAgICBzdXBlcihhcHAsIGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5fdWkgPSBjb25maWcudWk7XHJcbiAgICB9XHJcbiAgICBjb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFN1YlJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnLCBhcHApIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuYXBwO1xyXG4gICAgICAgIGEuYXBwLmdldFJvdXRlcigpLnNldChhLl9zZWdtZW50LmFwcGVuZCh0aGlzLnBhdGgpLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG59XG5cbmxldCBfb25jZSA9IHRydWU7XHJcbmNsYXNzIEpldEFwcEJhc2UgZXh0ZW5kcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHdlYml4ID0gKGNvbmZpZyB8fCB7fSkud2ViaXggfHwgd2luZG93LndlYml4O1xyXG4gICAgICAgIHN1cGVyKHdlYml4KTtcclxuICAgICAgICAvLyBpbml0IGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy53ZWJpeC5leHRlbmQoe1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFwcFwiLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjEuMFwiLFxyXG4gICAgICAgICAgICBzdGFydDogXCIvaG9tZVwiXHJcbiAgICAgICAgfSwgY29uZmlnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmFwcCA9IHRoaXMuY29uZmlnLmFwcDtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZXMgPSB7fTtcclxuICAgICAgICB0aGlzLndlYml4LmV4dGVuZCh0aGlzLCB0aGlzLndlYml4LkV2ZW50U3lzdGVtKTtcclxuICAgIH1cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ViU2VnbWVudC5zdWJ1cmwoKTtcclxuICAgIH1cclxuICAgIGdldFVybFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ViU2VnbWVudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZ2V0U2VydmljZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHRoaXMuX3NlcnZpY2VzW25hbWVdO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb2JqID0gdGhpcy5fc2VydmljZXNbbmFtZV0gPSBvYmoodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICBzZXRTZXJ2aWNlKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlc1tuYW1lXSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0U3ViVmlldygpLmRlc3RydWN0b3IoKTtcclxuICAgICAgICBzdXBlci5kZXN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb3B5IG9iamVjdCBhbmQgY29sbGVjdCBleHRyYSBoYW5kbGVyc1xyXG4gICAgY29weUNvbmZpZyhvYmosIHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgLy8gcmF3IHVpIGNvbmZpZ1xyXG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBKZXRCYXNlIHx8XHJcbiAgICAgICAgICAgICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHsgJHN1YnZpZXc6IG9iaiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzdWJ2aWV3IHBsYWNlaG9sZGVyXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmouJHN1YnZpZXcgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRTdWJWaWV3KG9iaiwgdGFyZ2V0LCBjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwcm9jZXNzIHN1Yi1wcm9wZXJ0aWVzXHJcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IChvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge30pO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWV0aG9kIGluIG9iaikge1xyXG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBvYmpbbWV0aG9kXTtcclxuICAgICAgICAgICAgLy8gdmlldyBjbGFzc1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBvaW50ID09PSBcImZ1bmN0aW9uXCIgJiYgcG9pbnQucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7ICRzdWJ2aWV3OiBwb2ludCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb2ludCAmJiB0eXBlb2YgcG9pbnQgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICAgICEocG9pbnQgaW5zdGFuY2VvZiB0aGlzLndlYml4LkRhdGFDb2xsZWN0aW9uKSAmJiAhKHBvaW50IGluc3RhbmNlb2YgUmVnRXhwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gbmV3IERhdGUocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29weUNvbmZpZyhwb2ludCwgKHBvaW50IGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KSwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29weSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IGNvcHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBwb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgZ2V0Um91dGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRyb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBjbGlja0hhbmRsZXIoZSkge1xyXG4gICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IChlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJpZ2dlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yVmlldyh0YXJnZXQsIHZpZXcgPT4gdmlldy5hcHAudHJpZ2dlcih0cmlnZ2VyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyb3V0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3V0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvclZpZXcodGFyZ2V0LCB2aWV3ID0+IHZpZXcuc2hvdyhyb3V0ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Um9vdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3KCkuZ2V0Um9vdCgpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3N1YlNlZ21lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlldygpLnJlZnJlc2goKS50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbdGhpcy5nZXRVcmwoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvYWRWaWV3KHVybCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy5jb25maWcudmlld3M7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHVybCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2xvYWRFcnJvcihcIlwiLCBuZXcgRXJyb3IoXCJXZWJpeCBKZXQ6IEVtcHR5IHVybCBzZWdtZW50XCIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh2aWV3cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2aWV3cyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tIGxvYWRpbmcgc3RyYXRlZ3lcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2aWV3cyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJlZGVmaW5lZCBoYXNoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmlld3NbdXJsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT09IFwiX2JsYW5rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2xvYWRWaWV3RHluYW1pYyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2xvYWRFcnJvcih1cmwsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjdXN0b20gaGFuZGxlciBjYW4gcmV0dXJuIHZpZXcgb3IgaXRzIHByb21pc2VcclxuICAgICAgICBpZiAoIXJlc3VsdC50aGVuKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXQgZXJyb3IgaGFuZGxlclxyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFxyXG4gICAgICAgICAgICAudGhlbihtb2R1bGUgPT4gbW9kdWxlLl9fZXNNb2R1bGUgPyBtb2R1bGUuZGVmYXVsdCA6IG1vZHVsZSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLl9sb2FkRXJyb3IodXJsLCBlcnIpKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgX2ZvclZpZXcodGFyZ2V0LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMud2ViaXguJCQodGFyZ2V0KTtcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICBoYW5kbGVyKHZpZXcuJHNjb3BlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfbG9hZFZpZXdEeW5hbWljKHVybCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlRnJvbVVSTChjaHVuaywgbm93KSB7XHJcbiAgICAgICAgbGV0IHZpZXc7XHJcbiAgICAgICAgaWYgKGNodW5rLmlzTmV3IHx8ICFjaHVuay52aWV3KSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSB0aGlzLmxvYWRWaWV3KGNodW5rLnBhZ2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbih1aSA9PiB0aGlzLmNyZWF0ZVZpZXcodWksIG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSBQcm9taXNlLnJlc29sdmUoY2h1bmsudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVmlldyh1aSwgbmFtZSkge1xyXG4gICAgICAgIGxldCBvYmo7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1aSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmICh1aS5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRBcHBCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB1aSh7IGFwcDogdGhpcywgbmFtZSwgcm91dGVyOiBTdWJSb3V0ZXIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgY2xhc3NcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdWkodGhpcywgeyBuYW1lIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgZmFjdG9yeSBmdW5jdGlvbnNcclxuICAgICAgICAgICAgICAgIHVpID0gdWkodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVpIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICBvYmogPSB1aTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFVJIG9iamVjdFxyXG4gICAgICAgICAgICBvYmogPSBuZXcgSmV0Vmlld1Jhdyh0aGlzLCB7IG5hbWUsIHVpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgLy8gc2hvdyB2aWV3IHBhdGhcclxuICAgIHNob3codXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuX2NvbnRhaW5lciwgKHVybCB8fCB0aGlzLmNvbmZpZy5zdGFydCkpO1xyXG4gICAgfVxyXG4gICAgLy8gZXZlbnQgaGVscGVyc1xyXG4gICAgdHJpZ2dlcihuYW1lLCAuLi5yZXN0KSB7XHJcbiAgICAgICAgdGhpcy5hcHBseShuYW1lLCByZXN0KTtcclxuICAgIH1cclxuICAgIGFwcGx5KG5hbWUsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChuYW1lLCBkYXRhKTtcclxuICAgIH1cclxuICAgIGFjdGlvbihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViaXguYmluZChmdW5jdGlvbiAoLi4ucmVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5KG5hbWUsIHJlc3QpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb24obmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuYXR0YWNoRXZlbnQobmFtZSwgaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICB1c2UocGx1Z2luLCBjb25maWcpIHtcclxuICAgICAgICBwbHVnaW4odGhpcywgbnVsbCwgY29uZmlnKTtcclxuICAgIH1cclxuICAgIGVycm9yKG5hbWUsIGVyKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQobmFtZSwgZXIpO1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOmVycm9yXCIsIGVyKTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kZWJ1Zykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcltpXSBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlcltpXS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YoXCJNb2R1bGUgYnVpbGQgZmFpbGVkXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xceDFiXFxbWzAtOTtdKm0vZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDxwcmUgc3R5bGU9J2ZvbnQtc2l6ZToxNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM2ODczOyBjb2xvcjogIzAwMDsgcGFkZGluZzoxMHB4Oyc+JHt0ZXh0fTwvcHJlPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IFwiPGJyPjxicj5DaGVjayBjb25zb2xlIGZvciBtb3JlIGRldGFpbHNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5tZXNzYWdlKHsgdHlwZTogXCJlcnJvclwiLCB0ZXh0OiB0ZXh0LCBleHBpcmU6IC0xIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZSAqL1xyXG4gICAgfVxyXG4gICAgLy8gcmVuZGVycyB0b3Agdmlld1xyXG4gICAgcmVuZGVyKHJvb3QsIHVybCwgcGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gKHR5cGVvZiByb290ID09PSBcInN0cmluZ1wiKSA/XHJcbiAgICAgICAgICAgIHRoaXMud2ViaXgudG9Ob2RlKHJvb3QpIDpcclxuICAgICAgICAgICAgKHJvb3QgfHwgZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RJbml0ID0gIXRoaXMuJHJvdXRlcjtcclxuICAgICAgICBsZXQgcGF0aCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGZpcnN0SW5pdCkge1xyXG4gICAgICAgICAgICBpZiAoX29uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguYXR0YWNoRXZlbnQoXCJvbkNsaWNrXCIsIGUgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgICAgICAgICAgICAgX29uY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gbmV3IFJvdXRlKHVybCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc3ViU2VnbWVudCA9IHRoaXMuX2ZpcnN0X3N0YXJ0KHVybCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YlNlZ21lbnQucm91dGUubGlua1JvdXRlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB1cmwuc3BsaXQoKS5yb3V0ZS5wYXRoIHx8IHRoaXMuY29uZmlnLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHVybC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0U3ViVmlldygpO1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSB0aGlzLl9zdWJTZWdtZW50O1xyXG4gICAgICAgIGNvbnN0IHJlYWR5ID0gc2VnbWVudC5zaG93KHBhdGgsIHRvcClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGVGcm9tVVJMKHNlZ21lbnQuY3VycmVudCgpLCB0b3ApKVxyXG4gICAgICAgICAgICAudGhlbih2aWV3ID0+IHZpZXcucmVuZGVyKHJvb3QsIHNlZ21lbnQpKVxyXG4gICAgICAgICAgICAudGhlbihiYXNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnNldChzZWdtZW50LnJvdXRlLnBhdGgsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbdGhpcy5nZXRVcmwoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYmFzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gdGhpcy5yZWFkeS50aGVuKCgpID0+IHJlYWR5KTtcclxuICAgICAgICByZXR1cm4gcmVhZHk7XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLl9zdWJTZWdtZW50LmN1cnJlbnQoKS52aWV3O1xyXG4gICAgICAgICAgICBpZiAodmlldylcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEpldFZpZXcodGhpcywge30pO1xyXG4gICAgfVxyXG4gICAgX2ZpcnN0X3N0YXJ0KHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IHJvdXRlO1xyXG4gICAgICAgIGNvbnN0IGNiID0gKGEpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3coYSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyID0gbmV3ICh0aGlzLmNvbmZpZy5yb3V0ZXIpKGNiLCB0aGlzLmNvbmZpZywgdGhpcyk7XHJcbiAgICAgICAgLy8gc3RhcnQgYW5pbWF0aW9uIGZvciB0b3AtbGV2ZWwgYXBwXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gZG9jdW1lbnQuYm9keSAmJiB0aGlzLmNvbmZpZy5hbmltYXRpb24gIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5hZGRDc3Mobm9kZSwgXCJ3ZWJpeGFwcHN0YXJ0XCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5yZW1vdmVDc3Mobm9kZSwgXCJ3ZWJpeGFwcHN0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLmFkZENzcyhub2RlLCBcIndlYml4YXBwXCIpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm91dGUpIHtcclxuICAgICAgICAgICAgLy8gaWYgbm8gdXJsIGRlZmluZWQsIGNoZWNrIHJvdXRlciBmaXJzdFxyXG4gICAgICAgICAgICBsZXQgdXJsU3RyaW5nID0gdGhpcy4kcm91dGVyLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAoIXVybFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdXJsU3RyaW5nID0gdGhpcy5jb25maWcuc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIuc2V0KHVybFN0cmluZywgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm91dGUgPSBuZXcgUm91dGUodXJsU3RyaW5nLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgcm91dGUuY3VycmVudCgpLnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAocm91dGUubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZSA9IHJvdXRlLnNwbGl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZSh0aGlzLmNvbmZpZy5zdGFydCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgfVxyXG4gICAgLy8gZXJyb3IgZHVyaW5nIHZpZXcgcmVzb2x2aW5nXHJcbiAgICBfbG9hZEVycm9yKHVybCwgZXJyKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcihcImFwcDplcnJvcjpyZXNvbHZlXCIsIFtlcnIsIHVybF0pO1xyXG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlOiBcIiBcIiB9O1xyXG4gICAgfVxyXG4gICAgYWRkU3ViVmlldyhvYmosIHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gb2JqLiRzdWJ2aWV3ICE9PSB0cnVlID8gb2JqLiRzdWJ2aWV3IDogbnVsbDtcclxuICAgICAgICBjb25zdCBuYW1lID0gb2JqLm5hbWUgfHwgKHVybCA/IHRoaXMud2ViaXgudWlkKCkgOiBcImRlZmF1bHRcIik7XHJcbiAgICAgICAgdGFyZ2V0LmlkID0gb2JqLmlkIHx8IFwic1wiICsgdGhpcy53ZWJpeC51aWQoKTtcclxuICAgICAgICBjb25zdCB2aWV3ID0gY29uZmlnW25hbWVdID0ge1xyXG4gICAgICAgICAgICBpZDogdGFyZ2V0LmlkLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGJyYW5jaDogb2JqLmJyYW5jaCxcclxuICAgICAgICAgICAgcG9wdXA6IG9iai5wb3B1cFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHZpZXcucG9wdXAgPyBudWxsIDogdGFyZ2V0O1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEhhc2hSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX2RldGVjdFByZWZpeCgpO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHRoaXMuY2IodGhpcy5nZXQoKSk7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJlID0gcGF0aC5zcGxpdChcIj9cIiwgMik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlc1trZXldID09PSBjb21wYXJlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGtleSArIChjb21wYXJlLmxlbmd0aCA+IDEgPyBcIj9cIiArIGNvbXBhcmVbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZXQoKSAhPT0gcGF0aCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdGhpcy5wcmVmaXggKyB0aGlzLnN1Zml4ICsgcGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIGxldCBwYXRoID0gdGhpcy5fZ2V0UmF3KCkucmVwbGFjZSh0aGlzLnByZWZpeCwgXCJcIikucmVwbGFjZSh0aGlzLnN1Zml4LCBcIlwiKTtcclxuICAgICAgICBwYXRoID0gcGF0aCAhPT0gXCIvXCIgPyBwYXRoIDogXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmUgPSBwYXRoLnNwbGl0KFwiP1wiLCAyKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWcucm91dGVzW2NvbXBhcmVbMF1dO1xyXG4gICAgICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0ga2V5ICsgKGNvbXBhcmUubGVuZ3RoID4gMSA/IFwiP1wiICsgY29tcGFyZVsxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG4gICAgX2RldGVjdFByZWZpeCgpIHtcclxuICAgICAgICAvLyB1c2UgXCIjIVwiIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgY29uc3Qgc3VmaXggPSB0aGlzLmNvbmZpZy5yb3V0ZXJQcmVmaXg7XHJcbiAgICAgICAgdGhpcy5zdWZpeCA9IFwiI1wiICsgKCh0eXBlb2Ygc3VmaXggPT09IFwidW5kZWZpbmVkXCIpID8gXCIhXCIgOiBzdWZpeCk7XHJcbiAgICAgICAgdGhpcy5wcmVmaXggPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiLCAyKVswXTtcclxuICAgIH1cclxuICAgIF9nZXRSYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB9XHJcbn1cblxubGV0IGlzUGF0Y2hlZCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBwYXRjaCh3KSB7XHJcbiAgICBpZiAoaXNQYXRjaGVkIHx8ICF3KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaXNQYXRjaGVkID0gdHJ1ZTtcclxuICAgIC8vIGN1c3RvbSBwcm9taXNlIGZvciBJRThcclxuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcclxuICAgIGlmICghd2luLlByb21pc2UpIHtcclxuICAgICAgICB3aW4uUHJvbWlzZSA9IHcucHJvbWlzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZlcnNpb24gPSB3LnZlcnNpb24uc3BsaXQoXCIuXCIpO1xyXG4gICAgLy8gd2lsbCBiZSBmaXhlZCBpbiB3ZWJpeCA1LjNcclxuICAgIGlmICh2ZXJzaW9uWzBdICogMTAgKyB2ZXJzaW9uWzFdICogMSA8IDUzKSB7XHJcbiAgICAgICAgdy51aS5mcmVlemUgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICAvLyBkaXNhYmxlZCBiZWNhdXNlIHdlYml4IGpldCA1LjAgY2FuJ3QgaGFuZGxlIHJlc2l6ZSBvZiBzY3JvbGx2aWV3IGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyB3LnVpLiRmcmVlemUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBoYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnRoZW4pIHtcclxuICAgICAgICAgICAgICAgIHJlcy50aGVuKGZ1bmN0aW9uIChzb21lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdy51aS4kZnJlZXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdy51aS5yZXNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29tZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdy51aS4kZnJlZXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB3LnVpLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGFkZGluZyB2aWV3cyBhcyBjbGFzc2VzXHJcbiAgICBjb25zdCBiYXNlQWRkID0gdy51aS5iYXNlbGF5b3V0LnByb3RvdHlwZS5hZGRWaWV3O1xyXG4gICAgY29uc3QgYmFzZVJlbW92ZSA9IHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUucmVtb3ZlVmlldztcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBhZGRWaWV3KHZpZXcsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgbG9naWMgb25seSBmb3Igd2lkZ2V0cyBpbnNpZGUgb2YgamV0LXZpZXdcclxuICAgICAgICAgICAgLy8gaWdub3JlIGNhc2Ugd2hlbiBhZGRWaWV3IHVzZWQgd2l0aCBhbHJlYWR5IGluaXRpYWxpemVkIHdpZGdldFxyXG4gICAgICAgICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUud2ViaXhKZXQgJiYgIXZpZXcucXVlcnlWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqdmlldyA9IHRoaXMuJHNjb3BlO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmlldyA9IGp2aWV3LmFwcC5jb3B5Q29uZmlnKHZpZXcsIHt9LCBzdWJzKTtcclxuICAgICAgICAgICAgICAgIGJhc2VBZGQuYXBwbHkodGhpcywgW3ZpZXcsIGluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdWJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAganZpZXcuX3JlbmRlckZyYW1lKGtleSwgc3Vic1trZXldLCBudWxsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganZpZXcuX3N1YnNba2V5XSA9IHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc2VBZGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlVmlldygpIHtcclxuICAgICAgICAgICAgYmFzZVJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUud2ViaXhKZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSB0aGlzLiRzY29wZS5fc3VicztcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFsbCBzdWItdmlld3MsIGRlc3Ryb3kgYW5kIGNsZWFuIHRoZSByZW1vdmVkIG9uZVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3Vicykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3LiQkKHRlc3QuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3Qudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHcuZXh0ZW5kKHcudWkubGF5b3V0LnByb3RvdHlwZSwgY29uZmlnLCB0cnVlKTtcclxuICAgIHcuZXh0ZW5kKHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICAvLyB3cmFwcGVyIGZvciB1c2luZyBKZXQgQXBwcyBhcyB2aWV3c1xyXG4gICAgdy5wcm90b1VJKHtcclxuICAgICAgICBuYW1lOiBcImpldGFwcFwiLFxyXG4gICAgICAgICRpbml0KGNmZykge1xyXG4gICAgICAgICAgICB0aGlzLiRhcHAgPSBuZXcgdGhpcy5hcHAoY2ZnKTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSB3LnVpZCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNmZy5ib2R5ID0geyBpZCB9O1xyXG4gICAgICAgICAgICB0aGlzLiRyZWFkeS5wdXNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcC5yZW5kZXIoeyBpZCB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLiRhcHApIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW4gPSB0aGlzLiRhcHBba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luID09PSBcImZ1bmN0aW9uXCIgJiYgIXRoaXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IG9yaWdpbi5iaW5kKHRoaXMuJGFwcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB3LnVpLnByb3h5KTtcclxufVxuXG5jbGFzcyBKZXRBcHAgZXh0ZW5kcyBKZXRBcHBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZy5yb3V0ZXIgPSBjb25maWcucm91dGVyIHx8IEhhc2hSb3V0ZXI7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICBwYXRjaCh0aGlzLndlYml4KTtcclxuICAgIH1cclxuICAgIF9sb2FkVmlld0R5bmFtaWModXJsKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcLi9nLCBcIi9cIik7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJqZXQtdmlld3MvXCIgKyB1cmwpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFN0b3JlUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcsIGFwcCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlIHx8IGFwcC53ZWJpeC5zdG9yYWdlLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5uYW1lID0gKGNvbmZpZy5zdG9yZU5hbWUgfHwgY29uZmlnLmlkICsgXCI6cm91dGVcIik7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5wdXQodGhpcy5uYW1lLCBwYXRoKTtcclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFVybFJvdXRlciBleHRlbmRzIEhhc2hSb3V0ZXIge1xyXG4gICAgX2RldGVjdFByZWZpeCgpIHtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdWZpeCA9IHRoaXMuY29uZmlnLnJvdXRlclByZWZpeCB8fCBcIlwiO1xyXG4gICAgfVxyXG4gICAgX2dldFJhdygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgRW1wdHlSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIF8kY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIFVubG9hZEd1YXJkKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICB2aWV3Lm9uKGFwcCwgYGFwcDpndWFyZGAsIGZ1bmN0aW9uIChfJHVybCwgcG9pbnQsIHByb21pc2UpIHtcclxuICAgICAgICBpZiAocG9pbnQgPT09IHZpZXcgfHwgcG9pbnQuY29udGFpbnModmlldykpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gY29uZmlnKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLmNvbmZpcm0gPSBQcm9taXNlLnJlamVjdChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5jb25maXJtID0gcHJvbWlzZS5jb25maXJtLnRoZW4oKCkgPT4gcmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cbi8vICAgICAoYykgMjAxMi0yMDE4IEFpcmJuYiwgSW5jLlxuXG4vLyB2YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG5mdW5jdGlvbiBoYXMoc3RvcmUsIGtleSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0b3JlLCBrZXkpO1xufVxuLy8gdmFyIGZvckVhY2ggPSByZXF1aXJlKCdmb3ItZWFjaCcpO1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChoYXMob2JqLCBrZXkpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoKGNvbnRleHQgfHwgb2JqKSwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cbi8vIHZhciB0cmltID0gcmVxdWlyZSgnc3RyaW5nLnByb3RvdHlwZS50cmltJyk7XG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG59XG4vLyB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBtZXNzYWdlO1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuXG4gIHRyeSB7IHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsgfSBjYXRjaCAoeCkge31cbn1cblxudmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgc3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0O1xuXG4vLyAjIyMjIFBsdXJhbGl6YXRpb24gbWV0aG9kc1xuLy8gVGhlIHN0cmluZyB0aGF0IHNlcGFyYXRlcyB0aGUgZGlmZmVyZW50IHBocmFzZSBwb3NzaWJpbGl0aWVzLlxudmFyIGRlbGltaXRlciA9ICd8fHx8JztcblxudmFyIHJ1c3NpYW5QbHVyYWxHcm91cHMgPSBmdW5jdGlvbiAobikge1xuICB2YXIgZW5kID0gbiAlIDEwO1xuICBpZiAobiAhPT0gMTEgJiYgZW5kID09PSAxKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKDIgPD0gZW5kICYmIGVuZCA8PSA0ICYmICEobiA+PSAxMiAmJiBuIDw9IDE0KSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAyO1xufTtcblxuLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgcGx1cmFsIGxvZ2ljLlxudmFyIHBsdXJhbFR5cGVzID0ge1xuICBhcmFiaWM6IGZ1bmN0aW9uIChuKSB7XG4gICAgLy8gaHR0cDovL3d3dy5hcmFiZXllcy5vcmcvUGx1cmFsX0Zvcm1zXG4gICAgaWYgKG4gPCAzKSB7IHJldHVybiBuOyB9XG4gICAgdmFyIGxhc3RUd28gPSBuICUgMTAwO1xuICAgIGlmIChsYXN0VHdvID49IDMgJiYgbGFzdFR3byA8PSAxMCkgcmV0dXJuIDM7XG4gICAgcmV0dXJuIGxhc3RUd28gPj0gMTEgPyA0IDogNTtcbiAgfSxcbiAgYm9zbmlhbl9zZXJiaWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBjaGluZXNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICBjcm9hdGlhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgZnJlbmNoOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbiA+IDEgPyAxIDogMDsgfSxcbiAgZ2VybWFuOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbiAhPT0gMSA/IDEgOiAwOyB9LFxuICBydXNzaWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBsaXRodWFuaWFuOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuICUgMTAgPT09IDEgJiYgbiAlIDEwMCAhPT0gMTEpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gbiAlIDEwID49IDIgJiYgbiAlIDEwIDw9IDkgJiYgKG4gJSAxMDAgPCAxMSB8fCBuICUgMTAwID4gMTkpID8gMSA6IDI7XG4gIH0sXG4gIGN6ZWNoOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuID09PSAxKSB7IHJldHVybiAwOyB9XG4gICAgcmV0dXJuIChuID49IDIgJiYgbiA8PSA0KSA/IDEgOiAyO1xuICB9LFxuICBwb2xpc2g6IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gPT09IDEpIHsgcmV0dXJuIDA7IH1cbiAgICB2YXIgZW5kID0gbiAlIDEwO1xuICAgIHJldHVybiAyIDw9IGVuZCAmJiBlbmQgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDI7XG4gIH0sXG4gIGljZWxhbmRpYzogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIChuICUgMTAgIT09IDEgfHwgbiAlIDEwMCA9PT0gMTEpID8gMSA6IDA7IH0sXG4gIHNsb3ZlbmlhbjogZnVuY3Rpb24gKG4pIHtcbiAgICB2YXIgbGFzdFR3byA9IG4gJSAxMDA7XG4gICAgaWYgKGxhc3RUd28gPT09IDEpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAobGFzdFR3byA9PT0gMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChsYXN0VHdvID09PSAzIHx8IGxhc3RUd28gPT09IDQpIHtcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICByZXR1cm4gMztcbiAgfVxufTtcblxuXG4vLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCB0byBpbmRpdmlkdWFsIGxhbmd1YWdlIGNvZGVzL2xvY2FsZXMuXG4vLyBXaWxsIGxvb2sgdXAgYmFzZWQgb24gZXhhY3QgbWF0Y2gsIGlmIG5vdCBmb3VuZCBhbmQgaXQncyBhIGxvY2FsZSB3aWxsIHBhcnNlIHRoZSBsb2NhbGVcbi8vIGZvciBsYW5ndWFnZSBjb2RlLCBhbmQgaWYgdGhhdCBkb2VzIG5vdCBleGlzdCB3aWxsIGRlZmF1bHQgdG8gJ2VuJ1xudmFyIHBsdXJhbFR5cGVUb0xhbmd1YWdlcyA9IHtcbiAgYXJhYmljOiBbJ2FyJ10sXG4gIGJvc25pYW5fc2VyYmlhbjogWydicy1MYXRuLUJBJywgJ2JzLUN5cmwtQkEnLCAnc3JsLVJTJywgJ3NyLVJTJ10sXG4gIGNoaW5lc2U6IFsnaWQnLCAnaWQtSUQnLCAnamEnLCAna28nLCAna28tS1InLCAnbG8nLCAnbXMnLCAndGgnLCAndGgtVEgnLCAnemgnXSxcbiAgY3JvYXRpYW46IFsnaHInLCAnaHItSFInXSxcbiAgZ2VybWFuOiBbJ2ZhJywgJ2RhJywgJ2RlJywgJ2VuJywgJ2VzJywgJ2ZpJywgJ2VsJywgJ2hlJywgJ2hpLUlOJywgJ2h1JywgJ2h1LUhVJywgJ2l0JywgJ25sJywgJ25vJywgJ3B0JywgJ3N2JywgJ3RyJ10sXG4gIGZyZW5jaDogWydmcicsICd0bCcsICdwdC1iciddLFxuICBydXNzaWFuOiBbJ3J1JywgJ3J1LVJVJ10sXG4gIGxpdGh1YW5pYW46IFsnbHQnXSxcbiAgY3plY2g6IFsnY3MnLCAnY3MtQ1onLCAnc2snXSxcbiAgcG9saXNoOiBbJ3BsJ10sXG4gIGljZWxhbmRpYzogWydpcyddLFxuICBzbG92ZW5pYW46IFsnc2wtU0wnXVxufTtcblxuZnVuY3Rpb24gbGFuZ1RvVHlwZU1hcChtYXBwaW5nKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yRWFjaChtYXBwaW5nLCBmdW5jdGlvbiAobGFuZ3MsIHR5cGUpIHtcbiAgICBmb3JFYWNoKGxhbmdzLCBmdW5jdGlvbiAobGFuZykge1xuICAgICAgcmV0W2xhbmddID0gdHlwZTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFR5cGVOYW1lKGxvY2FsZSkge1xuICB2YXIgbGFuZ1RvUGx1cmFsVHlwZSA9IGxhbmdUb1R5cGVNYXAocGx1cmFsVHlwZVRvTGFuZ3VhZ2VzKTtcbiAgcmV0dXJuIGxhbmdUb1BsdXJhbFR5cGVbbG9jYWxlXVxuICAgIHx8IGxhbmdUb1BsdXJhbFR5cGVbc3BsaXQuY2FsbChsb2NhbGUsIC8tLywgMSlbMF1dXG4gICAgfHwgbGFuZ1RvUGx1cmFsVHlwZS5lbjtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVHlwZUluZGV4KGxvY2FsZSwgY291bnQpIHtcbiAgcmV0dXJuIHBsdXJhbFR5cGVzW3BsdXJhbFR5cGVOYW1lKGxvY2FsZSldKGNvdW50KTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbi5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RUb2tlblJlZ2V4KG9wdHMpIHtcbiAgdmFyIHByZWZpeCA9IChvcHRzICYmIG9wdHMucHJlZml4KSB8fCAnJXsnO1xuICB2YXIgc3VmZml4ID0gKG9wdHMgJiYgb3B0cy5zdWZmaXgpIHx8ICd9JztcblxuICBpZiAocHJlZml4ID09PSBkZWxpbWl0ZXIgfHwgc3VmZml4ID09PSBkZWxpbWl0ZXIpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCInICsgZGVsaW1pdGVyICsgJ1wiIHRva2VuIGlzIHJlc2VydmVkIGZvciBwbHVyYWxpemF0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChlc2NhcGUocHJlZml4KSArICcoLio/KScgKyBlc2NhcGUoc3VmZml4KSwgJ2cnKTtcbn1cblxudmFyIGRvbGxhclJlZ2V4ID0gL1xcJC9nO1xudmFyIGRvbGxhckJpbGxzWWFsbCA9ICckJCc7XG52YXIgZGVmYXVsdFRva2VuUmVnZXggPSAvJVxceyguKj8pXFx9L2c7XG5cbi8vICMjIyB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpXG4vL1xuLy8gVGFrZXMgYSBwaHJhc2Ugc3RyaW5nIGFuZCB0cmFuc2Zvcm1zIGl0IGJ5IGNob29zaW5nIHRoZSBjb3JyZWN0XG4vLyBwbHVyYWwgZm9ybSBhbmQgaW50ZXJwb2xhdGluZyBpdC5cbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCdIZWxsbywgJXtuYW1lfSEnLCB7bmFtZTogJ1NwaWtlJ30pO1xuLy8gICAgIC8vIFwiSGVsbG8sIFNwaWtlIVwiXG4vL1xuLy8gVGhlIGNvcnJlY3QgcGx1cmFsIGZvcm0gaXMgc2VsZWN0ZWQgaWYgc3Vic3RpdHV0aW9ucy5zbWFydF9jb3VudFxuLy8gaXMgc2V0LiBZb3UgY2FuIHBhc3MgaW4gYSBudW1iZXIgaW5zdGVhZCBvZiBhbiBPYmplY3QgYXMgYHN1YnN0aXR1dGlvbnNgXG4vLyBhcyBhIHNob3J0Y3V0IGZvciBgc21hcnRfY291bnRgLlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCB7c21hcnRfY291bnQ6IDF9LCAnZW4nKTtcbi8vICAgICAvLyBcIjEgbmV3IG1lc3NhZ2VcIlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCB7c21hcnRfY291bnQ6IDJ9LCAnZW4nKTtcbi8vICAgICAvLyBcIjIgbmV3IG1lc3NhZ2VzXCJcbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywgNSwgJ2VuJyk7XG4vLyAgICAgLy8gXCI1IG5ldyBtZXNzYWdlc1wiXG4vL1xuLy8gWW91IHNob3VsZCBwYXNzIGluIGEgdGhpcmQgYXJndW1lbnQsIHRoZSBsb2NhbGUsIHRvIHNwZWNpZnkgdGhlIGNvcnJlY3QgcGx1cmFsIHR5cGUuXG4vLyBJdCBkZWZhdWx0cyB0byBgJ2VuJ2Agd2l0aCAyIHBsdXJhbCBmb3Jtcy5cbmZ1bmN0aW9uIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSwgdG9rZW5SZWdleCkge1xuICBpZiAodHlwZW9mIHBocmFzZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQb2x5Z2xvdC50cmFuc2Zvcm1QaHJhc2UgZXhwZWN0cyBhcmd1bWVudCAjMSB0byBiZSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmIChzdWJzdGl0dXRpb25zID09IG51bGwpIHtcbiAgICByZXR1cm4gcGhyYXNlO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHBocmFzZTtcbiAgdmFyIGludGVycG9sYXRpb25SZWdleCA9IHRva2VuUmVnZXggfHwgZGVmYXVsdFRva2VuUmVnZXg7XG5cbiAgLy8gYWxsb3cgbnVtYmVyIGFzIGEgcGx1cmFsaXphdGlvbiBzaG9ydGN1dFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzdWJzdGl0dXRpb25zID09PSAnbnVtYmVyJyA/IHsgc21hcnRfY291bnQ6IHN1YnN0aXR1dGlvbnMgfSA6IHN1YnN0aXR1dGlvbnM7XG5cbiAgLy8gU2VsZWN0IHBsdXJhbCBmb3JtOiBiYXNlZCBvbiBhIHBocmFzZSB0ZXh0IHRoYXQgY29udGFpbnMgYG5gXG4gIC8vIHBsdXJhbCBmb3JtcyBzZXBhcmF0ZWQgYnkgYGRlbGltaXRlcmAsIGEgYGxvY2FsZWAsIGFuZCBhIGBzdWJzdGl0dXRpb25zLnNtYXJ0X2NvdW50YCxcbiAgLy8gY2hvb3NlIHRoZSBjb3JyZWN0IHBsdXJhbCBmb3JtLiBUaGlzIGlzIG9ubHkgZG9uZSBpZiBgY291bnRgIGlzIHNldC5cbiAgaWYgKG9wdGlvbnMuc21hcnRfY291bnQgIT0gbnVsbCAmJiByZXN1bHQpIHtcbiAgICB2YXIgdGV4dHMgPSBzcGxpdC5jYWxsKHJlc3VsdCwgZGVsaW1pdGVyKTtcbiAgICByZXN1bHQgPSB0cmltKHRleHRzW3BsdXJhbFR5cGVJbmRleChsb2NhbGUgfHwgJ2VuJywgb3B0aW9ucy5zbWFydF9jb3VudCldIHx8IHRleHRzWzBdKTtcbiAgfVxuXG4gIC8vIEludGVycG9sYXRlOiBDcmVhdGVzIGEgYFJlZ0V4cGAgb2JqZWN0IGZvciBlYWNoIGludGVycG9sYXRpb24gcGxhY2Vob2xkZXIuXG4gIHJlc3VsdCA9IHJlcGxhY2UuY2FsbChyZXN1bHQsIGludGVycG9sYXRpb25SZWdleCwgZnVuY3Rpb24gKGV4cHJlc3Npb24sIGFyZ3VtZW50KSB7XG4gICAgaWYgKCFoYXMob3B0aW9ucywgYXJndW1lbnQpIHx8IG9wdGlvbnNbYXJndW1lbnRdID09IG51bGwpIHsgcmV0dXJuIGV4cHJlc3Npb247IH1cbiAgICAvLyBFbnN1cmUgcmVwbGFjZW1lbnQgdmFsdWUgaXMgZXNjYXBlZCB0byBwcmV2ZW50IHNwZWNpYWwgJC1wcmVmaXhlZCByZWdleCByZXBsYWNlIHRva2Vucy5cbiAgICByZXR1cm4gcmVwbGFjZS5jYWxsKG9wdGlvbnNbYXJndW1lbnRdLCBkb2xsYXJSZWdleCwgZG9sbGFyQmlsbHNZYWxsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gIyMjIFBvbHlnbG90IGNsYXNzIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBQb2x5Z2xvdChvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5waHJhc2VzID0ge307XG4gIHRoaXMuZXh0ZW5kKG9wdHMucGhyYXNlcyB8fCB7fSk7XG4gIHRoaXMuY3VycmVudExvY2FsZSA9IG9wdHMubG9jYWxlIHx8ICdlbic7XG4gIHZhciBhbGxvd01pc3NpbmcgPSBvcHRzLmFsbG93TWlzc2luZyA/IHRyYW5zZm9ybVBocmFzZSA6IG51bGw7XG4gIHRoaXMub25NaXNzaW5nS2V5ID0gdHlwZW9mIG9wdHMub25NaXNzaW5nS2V5ID09PSAnZnVuY3Rpb24nID8gb3B0cy5vbk1pc3NpbmdLZXkgOiBhbGxvd01pc3Npbmc7XG4gIHRoaXMud2FybiA9IG9wdHMud2FybiB8fCB3YXJuO1xuICB0aGlzLnRva2VuUmVnZXggPSBjb25zdHJ1Y3RUb2tlblJlZ2V4KG9wdHMuaW50ZXJwb2xhdGlvbik7XG59XG5cbi8vICMjIyBwb2x5Z2xvdC5sb2NhbGUoW2xvY2FsZV0pXG4vL1xuLy8gR2V0IG9yIHNldCBsb2NhbGUuIEludGVybmFsbHksIFBvbHlnbG90IG9ubHkgdXNlcyBsb2NhbGUgZm9yIHBsdXJhbGl6YXRpb24uXG5Qb2x5Z2xvdC5wcm90b3R5cGUubG9jYWxlID0gZnVuY3Rpb24gKG5ld0xvY2FsZSkge1xuICBpZiAobmV3TG9jYWxlKSB0aGlzLmN1cnJlbnRMb2NhbGUgPSBuZXdMb2NhbGU7XG4gIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGU7XG59O1xuXG4vLyAjIyMgcG9seWdsb3QuZXh0ZW5kKHBocmFzZXMpXG4vL1xuLy8gVXNlIGBleHRlbmRgIHRvIHRlbGwgUG9seWdsb3QgaG93IHRvIHRyYW5zbGF0ZSBhIGdpdmVuIGtleS5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0pO1xuLy9cbi8vIFRoZSBrZXkgY2FuIGJlIGFueSBzdHJpbmcuICBGZWVsIGZyZWUgdG8gY2FsbCBgZXh0ZW5kYCBtdWx0aXBsZSB0aW1lcztcbi8vIGl0IHdpbGwgb3ZlcnJpZGUgYW55IHBocmFzZXMgd2l0aCB0aGUgc2FtZSBrZXksIGJ1dCBsZWF2ZSBleGlzdGluZyBwaHJhc2VzXG4vLyB1bnRvdWNoZWQuXG4vL1xuLy8gSXQgaXMgYWxzbyBwb3NzaWJsZSB0byBwYXNzIG5lc3RlZCBwaHJhc2Ugb2JqZWN0cywgd2hpY2ggZ2V0IGZsYXR0ZW5lZFxuLy8gaW50byBhbiBvYmplY3Qgd2l0aCB0aGUgbmVzdGVkIGtleXMgY29uY2F0ZW5hdGVkIHVzaW5nIGRvdCBub3RhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwibmF2XCI6IHtcbi8vICAgICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCIsXG4vLyAgICAgICAgIFwic2lkZWJhclwiOiB7XG4vLyAgICAgICAgICAgXCJ3ZWxjb21lXCI6IFwiV2VsY29tZVwiXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vXG4vLyAgICAgY29uc29sZS5sb2cocG9seWdsb3QucGhyYXNlcyk7XG4vLyAgICAgLy8ge1xuLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4vLyAgICAgLy8gICAnbmF2LmhlbGxvX25hbWUnOiAnSGVsbG8sICV7bmFtZX0nLFxuLy8gICAgIC8vICAgJ25hdi5zaWRlYmFyLndlbGNvbWUnOiAnV2VsY29tZSdcbi8vICAgICAvLyB9XG4vL1xuLy8gYGV4dGVuZGAgYWNjZXB0cyBhbiBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQsIGBwcmVmaXhgLCB3aGljaCBjYW4gYmUgdXNlZFxuLy8gdG8gcHJlZml4IGV2ZXJ5IGtleSBpbiB0aGUgcGhyYXNlcyBvYmplY3Qgd2l0aCBzb21lIHN0cmluZywgdXNpbmcgZG90XG4vLyBub3RhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0sIFwibmF2XCIpO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbi8vICAgICAvLyB7XG4vLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbi8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfSdcbi8vICAgICAvLyB9XG4vL1xuLy8gVGhpcyBmZWF0dXJlIGlzIHVzZWQgaW50ZXJuYWxseSB0byBzdXBwb3J0IG5lc3RlZCBwaHJhc2Ugb2JqZWN0cy5cblBvbHlnbG90LnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAobW9yZVBocmFzZXMsIHByZWZpeCkge1xuICBmb3JFYWNoKG1vcmVQaHJhc2VzLCBmdW5jdGlvbiAocGhyYXNlLCBrZXkpIHtcbiAgICB2YXIgcHJlZml4ZWRLZXkgPSBwcmVmaXggPyBwcmVmaXggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmV4dGVuZChwaHJhc2UsIHByZWZpeGVkS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waHJhc2VzW3ByZWZpeGVkS2V5XSA9IHBocmFzZTtcbiAgICB9XG4gIH0sIHRoaXMpO1xufTtcblxuLy8gIyMjIHBvbHlnbG90LnVuc2V0KHBocmFzZXMpXG4vLyBVc2UgYHVuc2V0YCB0byBzZWxlY3RpdmVseSByZW1vdmUga2V5cyBmcm9tIGEgcG9seWdsb3QgaW5zdGFuY2UuXG4vL1xuLy8gICAgIHBvbHlnbG90LnVuc2V0KFwic29tZV9rZXlcIik7XG4vLyAgICAgcG9seWdsb3QudW5zZXQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSk7XG4vL1xuLy8gVGhlIHVuc2V0IG1ldGhvZCBjYW4gdGFrZSBlaXRoZXIgYSBzdHJpbmcgKGZvciB0aGUga2V5KSwgb3IgYW4gb2JqZWN0IGhhc2ggd2l0aFxuLy8gdGhlIGtleXMgdGhhdCB5b3Ugd291bGQgbGlrZSB0byB1bnNldC5cblBvbHlnbG90LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uIChtb3JlUGhyYXNlcywgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbW9yZVBocmFzZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgZGVsZXRlIHRoaXMucGhyYXNlc1ttb3JlUGhyYXNlc107XG4gIH0gZWxzZSB7XG4gICAgZm9yRWFjaChtb3JlUGhyYXNlcywgZnVuY3Rpb24gKHBocmFzZSwga2V5KSB7XG4gICAgICB2YXIgcHJlZml4ZWRLZXkgPSBwcmVmaXggPyBwcmVmaXggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy51bnNldChwaHJhc2UsIHByZWZpeGVkS2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbcHJlZml4ZWRLZXldO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59O1xuXG4vLyAjIyMgcG9seWdsb3QuY2xlYXIoKVxuLy9cbi8vIENsZWFycyBhbGwgcGhyYXNlcy4gVXNlZnVsIGZvciBzcGVjaWFsIGNhc2VzLCBzdWNoIGFzIGZyZWVpbmdcbi8vIHVwIG1lbW9yeSBpZiB5b3UgaGF2ZSBsb3RzIG9mIHBocmFzZXMgYnV0IG5vIGxvbmdlciBuZWVkIHRvXG4vLyBwZXJmb3JtIGFueSB0cmFuc2xhdGlvbi4gQWxzbyB1c2VkIGludGVybmFsbHkgYnkgYHJlcGxhY2VgLlxuUG9seWdsb3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBocmFzZXMgPSB7fTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5yZXBsYWNlKHBocmFzZXMpXG4vL1xuLy8gQ29tcGxldGVseSByZXBsYWNlIHRoZSBleGlzdGluZyBwaHJhc2VzIHdpdGggYSBuZXcgc2V0IG9mIHBocmFzZXMuXG4vLyBOb3JtYWxseSwganVzdCB1c2UgYGV4dGVuZGAgdG8gYWRkIG1vcmUgcGhyYXNlcywgYnV0IHVuZGVyIGNlcnRhaW5cbi8vIGNpcmN1bXN0YW5jZXMsIHlvdSBtYXkgd2FudCB0byBtYWtlIHN1cmUgbm8gb2xkIHBocmFzZXMgYXJlIGx5aW5nIGFyb3VuZC5cblBvbHlnbG90LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG5ld1BocmFzZXMpIHtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmV4dGVuZChuZXdQaHJhc2VzKTtcbn07XG5cblxuLy8gIyMjIHBvbHlnbG90LnQoa2V5LCBvcHRpb25zKVxuLy9cbi8vIFRoZSBtb3N0LXVzZWQgbWV0aG9kLiBQcm92aWRlIGEga2V5LCBhbmQgYHRgIHdpbGwgcmV0dXJuIHRoZVxuLy8gcGhyYXNlLlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaGVsbG9cIik7XG4vLyAgICAgPT4gXCJIZWxsb1wiXG4vL1xuLy8gVGhlIHBocmFzZSB2YWx1ZSBpcyBwcm92aWRlZCBmaXJzdCBieSBhIGNhbGwgdG8gYHBvbHlnbG90LmV4dGVuZCgpYCBvclxuLy8gYHBvbHlnbG90LnJlcGxhY2UoKWAuXG4vL1xuLy8gUGFzcyBpbiBhbiBvYmplY3QgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byBwZXJmb3JtIGludGVycG9sYXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb19uYW1lXCIsIHtuYW1lOiBcIlNwaWtlXCJ9KTtcbi8vICAgICA9PiBcIkhlbGxvLCBTcGlrZVwiXG4vL1xuLy8gSWYgeW91IGxpa2UsIHlvdSBjYW4gcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgaW4gY2FzZSB0aGUgcGhyYXNlIGlzIG1pc3NpbmcuXG4vLyBVc2UgdGhlIHNwZWNpYWwgb3B0aW9uIGtleSBcIl9cIiB0byBzcGVjaWZ5IGEgZGVmYXVsdC5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImlfbGlrZV90b193cml0ZV9pbl9sYW5ndWFnZVwiLCB7XG4vLyAgICAgICBfOiBcIkkgbGlrZSB0byB3cml0ZSBpbiAle2xhbmd1YWdlfS5cIixcbi8vICAgICAgIGxhbmd1YWdlOiBcIkphdmFTY3JpcHRcIlxuLy8gICAgIH0pO1xuLy8gICAgID0+IFwiSSBsaWtlIHRvIHdyaXRlIGluIEphdmFTY3JpcHQuXCJcbi8vXG5Qb2x5Z2xvdC5wcm90b3R5cGUudCA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcbiAgdmFyIHBocmFzZSwgcmVzdWx0O1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgPT0gbnVsbCA/IHt9IDogb3B0aW9ucztcbiAgaWYgKHR5cGVvZiB0aGlzLnBocmFzZXNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICBwaHJhc2UgPSB0aGlzLnBocmFzZXNba2V5XTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cy5fID09PSAnc3RyaW5nJykge1xuICAgIHBocmFzZSA9IG9wdHMuXztcbiAgfSBlbHNlIGlmICh0aGlzLm9uTWlzc2luZ0tleSkge1xuICAgIHZhciBvbk1pc3NpbmdLZXkgPSB0aGlzLm9uTWlzc2luZ0tleTtcbiAgICByZXN1bHQgPSBvbk1pc3NpbmdLZXkoa2V5LCBvcHRzLCB0aGlzLmN1cnJlbnRMb2NhbGUsIHRoaXMudG9rZW5SZWdleCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YXJuKCdNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciBrZXk6IFwiJyArIGtleSArICdcIicpO1xuICAgIHJlc3VsdCA9IGtleTtcbiAgfVxuICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBvcHRzLCB0aGlzLmN1cnJlbnRMb2NhbGUsIHRoaXMudG9rZW5SZWdleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8gIyMjIHBvbHlnbG90LmhhcyhrZXkpXG4vL1xuLy8gQ2hlY2sgaWYgcG9seWdsb3QgaGFzIGEgdHJhbnNsYXRpb24gZm9yIGdpdmVuIGtleVxuUG9seWdsb3QucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGhhcyh0aGlzLnBocmFzZXMsIGtleSk7XG59O1xuXG4vLyBleHBvcnQgdHJhbnNmb3JtUGhyYXNlXG5Qb2x5Z2xvdC50cmFuc2Zvcm1QaHJhc2UgPSBmdW5jdGlvbiB0cmFuc2Zvcm0ocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSk7XG59O1xuXG52YXIgd2ViaXhQb2x5Z2xvdCA9IFBvbHlnbG90O1xuXG5mdW5jdGlvbiBMb2NhbGUoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XHJcbiAgICBsZXQgbGFuZyA9IHN0b3JhZ2UgPyAoc3RvcmFnZS5nZXQoXCJsYW5nXCIpIHx8IFwiZW5cIikgOiAoY29uZmlnLmxhbmcgfHwgXCJlblwiKTtcclxuICAgIGZ1bmN0aW9uIHNldExhbmdEYXRhKG5hbWUsIGRhdGEsIHNpbGVudCkge1xyXG4gICAgICAgIGlmIChkYXRhLl9fZXNNb2R1bGUpIHtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGEuZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGNvbmZpZyA9IHsgcGhyYXNlczogZGF0YSB9O1xyXG4gICAgICAgIGlmIChjb25maWcucG9seWdsb3QpIHtcclxuICAgICAgICAgICAgYXBwLndlYml4LmV4dGVuZChwY29uZmlnLCBjb25maWcucG9seWdsb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2x5ID0gc2VydmljZS5wb2x5Z2xvdCA9IG5ldyB3ZWJpeFBvbHlnbG90KHBjb25maWcpO1xyXG4gICAgICAgIHBvbHkubG9jYWxlKG5hbWUpO1xyXG4gICAgICAgIHNlcnZpY2UuXyA9IGFwcC53ZWJpeC5iaW5kKHBvbHkudCwgcG9seSk7XHJcbiAgICAgICAgbGFuZyA9IG5hbWU7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc3RvcmFnZS5wdXQoXCJsYW5nXCIsIGxhbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLndlYml4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY05hbWUgPSBjb25maWcud2ViaXhbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChsb2NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBhcHAud2ViaXguaTE4bi5zZXRMb2NhbGUobG9jTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFwcC5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldExhbmcoKSB7IHJldHVybiBsYW5nOyB9XHJcbiAgICBmdW5jdGlvbiBzZXRMYW5nKG5hbWUsIHNpbGVudCkge1xyXG4gICAgICAgIC8vIGlnbm9yZSBzZXRMYW5nIGlmIGxvYWRpbmcgYnkgcGF0aCBpcyBkaXNhYmxlZFxyXG4gICAgICAgIGlmIChjb25maWcucGF0aCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXRoID0gKGNvbmZpZy5wYXRoID8gY29uZmlnLnBhdGggKyBcIi9cIiA6IFwiXCIpICsgbmFtZTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcImpldC1sb2NhbGVzL1wiICsgcGF0aCk7XHJcbiAgICAgICAgc2V0TGFuZ0RhdGEobmFtZSwgZGF0YSwgc2lsZW50KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0TGFuZywgc2V0TGFuZywgc2V0TGFuZ0RhdGEsIF86IG51bGwsIHBvbHlnbG90OiBudWxsXHJcbiAgICB9O1xyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJsb2NhbGVcIiwgc2VydmljZSk7XHJcbiAgICBzZXRMYW5nKGxhbmcsIHRydWUpO1xyXG59XG5cbmZ1bmN0aW9uIHNob3codmlldywgY29uZmlnLCB2YWx1ZSkge1xyXG4gICAgaWYgKGNvbmZpZy51cmxzKSB7XHJcbiAgICAgICAgdmFsdWUgPSBjb25maWcudXJsc1t2YWx1ZV0gfHwgdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjb25maWcucGFyYW0pIHtcclxuICAgICAgICB2YWx1ZSA9IHsgW2NvbmZpZy5wYXJhbV06IHZhbHVlIH07XHJcbiAgICB9XHJcbiAgICB2aWV3LnNob3codmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIE1lbnUoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGNvbnN0IGZyYW1lID0gdmlldy5nZXRTdWJWaWV3SW5mbygpLnBhcmVudDtcclxuICAgIGNvbnN0IHVpID0gdmlldy4kJChjb25maWcuaWQgfHwgY29uZmlnKTtcclxuICAgIGxldCBzaWxlbnQgPSBmYWxzZTtcclxuICAgIHVpLmF0dGFjaEV2ZW50KFwib25jaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNob3coZnJhbWUsIGNvbmZpZywgdGhpcy5nZXRWYWx1ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHVpLmF0dGFjaEV2ZW50KFwib25hZnRlcnNlbGVjdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHVpLnNldFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZCA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5nZXRTZWxlY3RlZElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZCA9IHVpLmdldFNlbGVjdGVkSWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaG93KGZyYW1lLCBjb25maWcsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZpZXcub24oYXBwLCBgYXBwOnJvdXRlYCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gXCJcIjtcclxuICAgICAgICBpZiAoY29uZmlnLnBhcmFtKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSB2aWV3LmdldFBhcmFtKGNvbmZpZy5wYXJhbSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gZnJhbWUuZ2V0VXJsKClbMV07XHJcbiAgICAgICAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gc2VnbWVudC5wYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHNpbGVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh1aS5zZXRWYWx1ZSAmJiB1aS5nZXRWYWx1ZSgpICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRWYWx1ZShuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5zZWxlY3QgJiYgdWkuZXhpc3RzKG5hbWUpICYmIHVpLmdldFNlbGVjdGVkSWQoKSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdWkuc2VsZWN0KG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpbGVudCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cbmNvbnN0IGJhc2VpY29ucyA9IHtcclxuICAgIGdvb2Q6IFwiY2hlY2tcIixcclxuICAgIGVycm9yOiBcIndhcm5pbmdcIixcclxuICAgIHNhdmluZzogXCJyZWZyZXNoIGZhLXNwaW5cIlxyXG59O1xyXG5jb25zdCBiYXNldGV4dCA9IHtcclxuICAgIGdvb2Q6IFwiT2tcIixcclxuICAgIGVycm9yOiBcIkVycm9yXCIsXHJcbiAgICBzYXZpbmc6IFwiQ29ubmVjdGluZy4uLlwiXHJcbn07XHJcbmZ1bmN0aW9uIFN0YXR1cyhhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgbGV0IHN0YXR1cyA9IFwiZ29vZFwiO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGxldCBpc2Vycm9yID0gZmFsc2U7XHJcbiAgICBsZXQgZXhwaXJlRGVsYXkgPSBjb25maWcuZXhwaXJlO1xyXG4gICAgaWYgKCFleHBpcmVEZWxheSAmJiBleHBpcmVEZWxheSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBleHBpcmVEZWxheSA9IDIwMDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0cyA9IGNvbmZpZy50ZXh0cyB8fCBiYXNldGV4dDtcclxuICAgIGNvbnN0IGljb25zID0gY29uZmlnLmljb25zIHx8IGJhc2VpY29ucztcclxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgY29uZmlnID0geyB0YXJnZXQ6IGNvbmZpZyB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaChjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IHZpZXcuJCQoY29uZmlnLnRhcmdldCk7XHJcbiAgICAgICAgaWYgKGFyZWEpIHtcclxuICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCI8ZGl2IGNsYXNzPSdzdGF0dXNfXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyArXHJcbiAgICAgICAgICAgICAgICAgICAgXCInPjxzcGFuIGNsYXNzPSd3ZWJpeF9pY29uIGZhLVwiICtcclxuICAgICAgICAgICAgICAgICAgICBpY29uc1tzdGF0dXNdICsgXCInPjwvc3Bhbj4gXCIgKyB0ZXh0c1tzdGF0dXNdICsgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcmVhLnNldEhUTUwoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3VjY2VzcygpIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIHNldFN0YXR1cyhcImdvb2RcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmYWlsKGVycikge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgc2V0U3RhdHVzKFwiZXJyb3JcIiwgZXJyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0YXJ0KHByb21pc2UpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIHNldFN0YXR1cyhcInNhdmluZ1wiKTtcclxuICAgICAgICBpZiAocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHtcclxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3MsIGZhaWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGlkZVN0YXR1cygpIHtcclxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgcmVmcmVzaChcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdHVzKG1vZGUsIGVycikge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHtcclxuICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW9kZSA9PT0gXCJzYXZpbmdcIikge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBcInNhdmluZ1wiO1xyXG4gICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpc2Vycm9yID0gKG1vZGUgPT09IFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gaXNlcnJvciA/IFwiZXJyb3JcIiA6IFwiZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuZXJyb3IoXCJhcHA6ZXJyb3I6c2VydmVyXCIsIFtlcnIucmVzcG9uc2VUZXh0IHx8IGVycl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGlyZURlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZVN0YXR1cywgZXhwaXJlRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyYWNrKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBkcCA9IGFwcC53ZWJpeC5kcChkYXRhKTtcclxuICAgICAgICBpZiAoZHApIHtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyRGF0YVNlbmRcIiwgc3RhcnQpO1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJTYXZlRXJyb3JcIiwgKF9pZCwgX29iaiwgcmVzcG9uc2UpID0+IGZhaWwocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyU2F2ZVwiLCBzdWNjZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHAuc2V0U2VydmljZShcInN0YXR1c1wiLCB7XHJcbiAgICAgICAgZ2V0U3RhdHVzLFxyXG4gICAgICAgIHNldFN0YXR1cyxcclxuICAgICAgICB0cmFja1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY29uZmlnLnJlbW90ZSkge1xyXG4gICAgICAgIHZpZXcub24oYXBwLndlYml4LCBcIm9uUmVtb3RlQ2FsbFwiLCBzdGFydCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmFqYXgpIHtcclxuICAgICAgICB2aWV3Lm9uKGFwcC53ZWJpeCwgXCJvbkJlZm9yZUFqYXhcIiwgKF9tb2RlLCBfdXJsLCBfZGF0YSwgX3JlcXVlc3QsIF9oZWFkZXJzLCBfZmlsZXMsIHByb21pc2UpID0+IHtcclxuICAgICAgICAgICAgc3RhcnQocHJvbWlzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmRhdGEpIHtcclxuICAgICAgICB0cmFjayhjb25maWcuZGF0YSk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gVGhlbWUoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XHJcbiAgICBsZXQgdGhlbWUgPSBzdG9yYWdlID9cclxuICAgICAgICAoc3RvcmFnZS5nZXQoXCJ0aGVtZVwiKSB8fCBcImZsYXQtZGVmYXVsdFwiKVxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgKGNvbmZpZy50aGVtZSB8fCBcImZsYXQtZGVmYXVsdFwiKTtcclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0VGhlbWUoKSB7IHJldHVybiB0aGVtZTsgfSxcclxuICAgICAgICBzZXRUaGVtZShuYW1lLCBzaWxlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxuYW1lID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG5hbWUgPT09IG5hbWUgfHwgbG5hbWUgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5za2luLnNldChwYXJ0c1swXSk7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgY3NzXHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5odG1sLnJlbW92ZUNzcyhkb2N1bWVudC5ib2R5LCBcInRoZW1lLVwiICsgdGhlbWUpO1xyXG4gICAgICAgICAgICAvLyBhZGQgbmV3IGNzc1xyXG4gICAgICAgICAgICBhcHAud2ViaXguaHRtbC5hZGRDc3MoZG9jdW1lbnQuYm9keSwgXCJ0aGVtZS1cIiArIG5hbWUpO1xyXG4gICAgICAgICAgICB0aGVtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnB1dChcInRoZW1lXCIsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgICAgICBhcHAucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwidGhlbWVcIiwgc2VydmljZSk7XHJcbiAgICBzZXJ2aWNlLnNldFRoZW1lKHRoZW1lLCB0cnVlKTtcclxufVxuXG5mdW5jdGlvbiBjb3B5UGFyYW1zKGRhdGEsIHVybCwgcm91dGUpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkYXRhW3JvdXRlW2ldXSA9IHVybFtpICsgMV0gPyB1cmxbaSArIDFdLnBhZ2UgOiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIFVybFBhcmFtKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGNvbmZpZy5yb3V0ZSB8fCBjb25maWc7XHJcbiAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICB2aWV3Lm9uKGFwcCwgXCJhcHA6dXJsY2hhbmdlXCIsIGZ1bmN0aW9uIChzdWJ2aWV3LCBzZWdtZW50KSB7XHJcbiAgICAgICAgaWYgKHZpZXcgPT09IHN1YnZpZXcpIHtcclxuICAgICAgICAgICAgY29weVBhcmFtcyhkYXRhLCBzZWdtZW50LnN1YnVybCgpLCByb3V0ZSk7XHJcbiAgICAgICAgICAgIHNlZ21lbnQuc2l6ZShyb3V0ZS5sZW5ndGggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9zID0gdmlldy5zZXRQYXJhbTtcclxuICAgIGNvbnN0IG9nID0gdmlldy5nZXRQYXJhbTtcclxuICAgIHZpZXcuc2V0UGFyYW0gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIHNob3cpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHJvdXRlLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWdtZW50LnVwZGF0ZShcIlwiLCB2YWx1ZSwgaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LnNob3cobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcy5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlLCBzaG93KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmlldy5nZXRQYXJhbSA9IGZ1bmN0aW9uIChrZXksIG1vZGUpIHtcclxuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9nLmNhbGwodGhpcywga2V5LCBtb2RlKTtcclxuICAgIH07XHJcbiAgICBjb3B5UGFyYW1zKGRhdGEsIHZpZXcuZ2V0VXJsKCksIHJvdXRlKTtcclxufVxuXG5mdW5jdGlvbiBVc2VyKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3QgbG9naW4gPSBjb25maWcubG9naW4gfHwgXCIvbG9naW5cIjtcclxuICAgIGNvbnN0IGxvZ291dCA9IGNvbmZpZy5sb2dvdXQgfHwgXCIvbG9nb3V0XCI7XHJcbiAgICBjb25zdCBhZnRlckxvZ2luID0gY29uZmlnLmFmdGVyTG9naW4gfHwgYXBwLmNvbmZpZy5zdGFydDtcclxuICAgIGNvbnN0IGFmdGVyTG9nb3V0ID0gY29uZmlnLmFmdGVyTG9nb3V0IHx8IFwiL2xvZ2luXCI7XHJcbiAgICBjb25zdCBwaW5nID0gY29uZmlnLnBpbmcgfHwgNSAqIDYwICogMTAwMDtcclxuICAgIGNvbnN0IG1vZGVsID0gY29uZmlnLm1vZGVsO1xyXG4gICAgbGV0IHVzZXIgPSBjb25maWcudXNlcjtcclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0VXNlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTdGF0dXMoc2VydmVyKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwuc3RhdHVzKCkuY2F0Y2goKCkgPT4gbnVsbCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2luKG5hbWUsIHBhc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLmxvZ2luKG5hbWUsIHBhc3MpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcHAuY2FsbEV2ZW50KFwiYXBwOnVzZXI6bG9naW5cIiwgW3VzZXJdKTtcclxuICAgICAgICAgICAgICAgIGFwcC5zaG93KGFmdGVyTG9naW4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgdXNlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5sb2dvdXQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcHAuY2FsbEV2ZW50KFwiYXBwOnVzZXI6bG9nb3V0XCIsIFtdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaikge1xyXG4gICAgICAgIGlmICh1cmwgPT09IGxvZ291dCkge1xyXG4gICAgICAgICAgICBzZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgICAgICBvYmoucmVkaXJlY3QgPSBhZnRlckxvZ291dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodXJsICE9PSBsb2dpbiAmJiAhc2VydmljZS5nZXRTdGF0dXMoKSkge1xyXG4gICAgICAgICAgICBvYmoucmVkaXJlY3QgPSBsb2dpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHAuc2V0U2VydmljZShcInVzZXJcIiwgc2VydmljZSk7XHJcbiAgICBhcHAuYXR0YWNoRXZlbnQoYGFwcDpndWFyZGAsIGZ1bmN0aW9uICh1cmwsIF8kcm9vdCwgb2JqKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wdWJsaWMgJiYgY29uZmlnLnB1YmxpYyh1cmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHVzZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqLmNvbmZpcm0gPSBzZXJ2aWNlLmdldFN0YXR1cyh0cnVlKS50aGVuKCgpID0+IGNhbk5hdmlnYXRlKHVybCwgb2JqKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaik7XHJcbiAgICB9KTtcclxuICAgIGlmIChwaW5nKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gc2VydmljZS5nZXRTdGF0dXModHJ1ZSksIHBpbmcpO1xyXG4gICAgfVxyXG59XG5cbi8qXHJcbk1JVCBMaWNlbnNlXHJcbkNvcHlyaWdodCAoYykgMjAxOSBYQiBTb2Z0d2FyZVxyXG4qL1xyXG5sZXQgd2ViaXggPSB3aW5kb3cud2ViaXg7XHJcbmlmICh3ZWJpeCkge1xyXG4gICAgcGF0Y2god2ViaXgpO1xyXG59XHJcbmNvbnN0IHBsdWdpbnMgPSB7XHJcbiAgICBVbmxvYWRHdWFyZCwgTG9jYWxlLCBNZW51LCBUaGVtZSwgVXNlciwgU3RhdHVzLCBVcmxQYXJhbVxyXG59O1xyXG5jb25zdCB3ID0gd2luZG93O1xyXG5pZiAoIXcuUHJvbWlzZSkge1xyXG4gICAgdy5Qcm9taXNlID0gdy53ZWJpeC5wcm9taXNlO1xyXG59XG5cbmV4cG9ydCB7IHBsdWdpbnMsIEpldEFwcCwgSmV0VmlldywgSGFzaFJvdXRlciwgU3RvcmVSb3V0ZXIsIFVybFJvdXRlciwgRW1wdHlSb3V0ZXIsIFN1YlJvdXRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9amV0LmpzLm1hcFxuIiwiY29uc3QgbG9nb3V0VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dvdXQnO1xyXG5jb25zdCBsb2dpblVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nO1xyXG5jb25zdCByZWdpc3RlclVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVnaXN0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXphdGlvbiB7XHJcblx0cmVnaXN0ZXIob2JqKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QocmVnaXN0ZXJVcmwsIG9iaik7XHJcblx0fVxyXG5cclxuXHRsb2dpbihvYmopIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdChsb2dpblVybCwgb2JqKTtcclxuXHR9XHJcblxyXG5cdGxvZ291dChkYXRlKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QobG9nb3V0VXJsLCBkYXRlKTtcclxuXHR9XHJcbn0iLCJjb25zdCBkdW1teUNvdmVyID0gJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9hZC9mZC81OC9hZGZkNTg3M2JlMzg0MWYwNjYwZTZhYWEwMGNkZTE4ZS5qcGcnO1xyXG5jb25zdCBTVUNDRVNTID0gMjtcclxuXHJcbmV4cG9ydCB7ZHVtbXlDb3ZlciwgU1VDQ0VTU307IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc291cmNlcy9sb2NhbGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiY2xhc3MgQm9va3NNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gW107XHJcblx0XHR0aGlzLl91cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2Jvb2tzLyc7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhRnJvbVNlcnZlcihpZCkge1xyXG5cdFx0Y29uc3QgdXNlcl9pZCA9IHt1c2VyX2lkOiBpZH07XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwsIHVzZXJfaWQpO1xyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZGVsKHRoaXMuX3VybCwgaWQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEJvb2tzTW9kZWwoKTsiLCJjbGFzcyBGaWxlc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3VybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmlsZXMvJztcclxuXHR9XHJcblxyXG5cdGdldERhdGFGcm9tU2VydmVyKCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQodGhpcy5fdXJsKTtcclxuXHR9XHJcblx0XHJcblx0Z2V0SXRlbXMoaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGAke3RoaXMuX3VybH0ke2lkfWApO1x0XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0ZG93bmxvYWRJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnJlc3BvbnNlKCdibG9iJykuZ2V0KGAke3RoaXMuX3VybH1kb3dubG9hZC8ke2lkfWApO1x0XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRmlsZXNNb2RlbCgpOyIsImNsYXNzIExpa2VzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IFtdO1xyXG5cdFx0dGhpcy5fdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9saWtlcy8nO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwpO1xyXG5cdH1cclxuXHJcblx0YWRkTGlrZSh1c2VySWQsIGJvb2tJZCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcklkOiB1c2VySWQsXHJcblx0XHRcdGJvb2tJZDogYm9va0lkXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlTGlrZSh1c2VySWQsIGJvb2tJZCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcklkOiB1c2VySWQsXHJcblx0XHRcdGJvb2tJZDogYm9va0lkXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZGVsKHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTGlrZXNNb2RlbCgpOyIsImNsYXNzIFVzZXJzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2Vycy8nO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwpO1xyXG5cdH1cclxuXHRcclxuXHRnZXRJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtpZH1gKTtcdFxyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2Vyc01vZGVsKCk7IiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuaW1wb3J0IHtKZXRBcHAsIEVtcHR5Um91dGVyLCBIYXNoUm91dGVyIH0gZnJvbSAnd2ViaXgtamV0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgSmV0QXBwe1xyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZyl7XHJcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcclxuXHRcdFx0aWQgXHRcdDogQVBQTkFNRSxcclxuXHRcdFx0dmVyc2lvbiA6IFZFUlNJT04sXHJcblx0XHRcdHJvdXRlciBcdDogQlVJTERfQVNfTU9EVUxFID8gRW1wdHlSb3V0ZXIgOiBIYXNoUm91dGVyLFxyXG5cdFx0XHRkZWJ1ZyBcdDogIVBST0RVQ1RJT04sXHJcblx0XHRcdHN0YXJ0IFx0OiAnL2xvZ2luJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRzdXBlcih7IC4uLmRlZmF1bHRzLCAuLi5jb25maWcgfSk7XHJcblx0fVxyXG59XHJcblxyXG5pZiAoIUJVSUxEX0FTX01PRFVMRSl7XHJcblx0d2ViaXgucmVhZHkoKCkgPT4ge1xyXG5cdFx0Y29uc3QgYXBwID0gbmV3IE15QXBwKCk7XHJcblx0XHRhcHAuYXR0YWNoRXZlbnQoJ2FwcDpndWFyZCcsICh1cmwsIHZpZXcsIG5hdikgPT4ge1xyXG5cdFx0XHRpZih1cmwuaW5kZXhPZignaWQnKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRjb25zdCB1cmxQYXJ0cyA9IHVybC5zcGxpdCgnLycpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXRQYXJ0O1xyXG5cclxuXHRcdFx0XHR1cmxQYXJ0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYoZWwuaW5kZXhPZignaWQnKSAhPSAtMSkge1xyXG5cdFx0XHRcdFx0XHR0YXJnZXRQYXJ0ID0gZWw7XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRjb25zdCBpID0gdGFyZ2V0UGFydC5pbmRleE9mKCdpZCcpO1xyXG5cdFx0XHRcdGNvbnN0IHJvbGUgPSB0YXJnZXRQYXJ0LnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0Y29uc3QgaWQgPSB0YXJnZXRQYXJ0LnNsaWNlKGkrMyk7XHJcblxyXG5cdFx0XHRcdHdlYml4LmFqYXgoKS5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jaGVjaycpLnRoZW4oXHJcblx0XHRcdFx0XHQocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcmVzLmpzb24oKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2Uucm9sZSAhPSByb2xlIHx8IHJlc3BvbnNlLmlkICE9IGlkKSB7XHJcblx0XHRcdFx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcclxuXHRcdFx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRhcHAucmVuZGVyKCk7XHJcblx0fSk7XHJcbn0iLCJpbXBvcnQge1NVQ0NFU1N9IGZyb20gJy4vY29uc3RzJztcclxuXHJcbmNvbnN0IHRvZ2dsZUVsZW1lbnQgPSAoY29uZGl0aW9uLCBlbGVtZW50KSA9PiB7XHJcblx0aWYgKGNvbmRpdGlvbikge1xyXG5cdFx0ZWxlbWVudC5zaG93KCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0ZWxlbWVudC5oaWRlKCk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgYWRkSXRlbSA9IChNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbikgPT4ge1xyXG5cdE1vZGVsLmFkZEl0ZW0oZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcblx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzID09IFNVQ0NFU1MpIHtcclxuXHRcdFx0TW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRzdWNjZXNzQWN0aW9uKCk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlSXRlbSA9IChNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbikgPT4ge1xyXG5cdE1vZGVsLnVwZGF0ZUl0ZW0oZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcblx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzID09IFNVQ0NFU1MpIHtcclxuXHRcdFx0c3VjY2Vzc0FjdGlvbigpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxud2ViaXgucHJvdG9VSSh7XHJcblx0bmFtZTogXCJhY3RpdmVMaXN0XCIsXHJcblx0ZGVmYXVsdHM6IHtcclxuXHRcdGF1dG9oZWlnaHQ6IHRydWUsXHJcblx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0dHlwZToge1xyXG5cdFx0XHRoZWlnaHQ6IDMwXHJcblx0XHR9XHJcblx0fVxyXG59LCB3ZWJpeC51aS5saXN0KTtcclxuXHJcbmV4cG9ydCB7dG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbX07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2FkbWluXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi9cIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL2luZGV4XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qc1wiLFxuXHRcIi4vYWRtaW4vdXNlckZvcm1cIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vdXNlckZvcm0uanNcIixcblx0XCIuL2FkbWluL3VzZXJGb3JtLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL3VzZXJGb3JtLmpzXCIsXG5cdFwiLi9jb21tb24vbGlicmFyeVwiOiBcIi4vc291cmNlcy92aWV3cy9jb21tb24vbGlicmFyeS5qc1wiLFxuXHRcIi4vY29tbW9uL2xpYnJhcnkuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvY29tbW9uL2xpYnJhcnkuanNcIixcblx0XCIuL2xpYnJhcmlhblwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9cIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vYm9va0NhcmRcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2Jvb2tDYXJkLmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vYm9va0NhcmQuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2Jvb2tDYXJkLmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vaW5kZXhcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vaW5kZXguanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vbGlicmFyeVwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vbGlicmFyeS5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2xpYnJhcnkuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2xpYnJhcnkuanNcIixcblx0XCIuL2xvZ2luXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzXCIsXG5cdFwiLi9sb2dpbi5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9sb2dpbi5qc1wiLFxuXHRcIi4vcmVhZGVyXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9ib29rQ2FyZFwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvYm9va0NhcmQuanNcIixcblx0XCIuL3JlYWRlci9ib29rQ2FyZC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvYm9va0NhcmQuanNcIixcblx0XCIuL3JlYWRlci9pbmRleFwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9saWJyYXJ5XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9saWJyYXJ5LmpzXCIsXG5cdFwiLi9yZWFkZXIvbGlicmFyeS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbGlicmFyeS5qc1wiLFxuXHRcIi4vcmVhZGVyL21haW5cIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL21haW4uanNcIixcblx0XCIuL3JlYWRlci9tYWluLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzXCIsXG5cdFwiLi9yZWFkZXIvc2V0dGluZ3NcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3NldHRpbmdzLmpzXCIsXG5cdFwiLi9yZWFkZXIvc2V0dGluZ3MuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3NldHRpbmdzLmpzXCIsXG5cdFwiLi9yZWFkZXIvdG9wc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvdG9wcy5qc1wiLFxuXHRcIi4vcmVhZGVyL3RvcHMuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3RvcHMuanNcIixcblx0XCIuL3JlZ2lzdGVyXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlZ2lzdGVyLmpzXCIsXG5cdFwiLi9yZWdpc3Rlci5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZXMvdmlld3Mgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uLy4uL2F1dGhvcml6YXRpb24nO1xyXG5pbXBvcnQgdXNlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcnMnO1xyXG5pbXBvcnQgVXNlckZvcm0gZnJvbSAnLi91c2VyRm9ybSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6J2hlYWRlcicsIFxyXG5cdFx0XHR0ZW1wbGF0ZTogJ1VzZXJzIGxpc3QnXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGR0YWJsZSA9IHtcclxuXHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdGlkOiAndXNlcnNMaXN0JyxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnaWQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiAxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Z1bGxfbmFtZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdOYW1lJyxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiAxODAsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEuNVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdyb2xlX25hbWUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUm9sZScsXHJcblx0XHRcdFx0XHR3aWR0aDogOTBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncGFzc3BvcnRfSUQnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUGFzc3BvcnQgSUQnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDEzMFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdiaXJ0aF9kYXRlJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0JpcnRoIGRhdGUnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDEzMFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhZGRyZXNzJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0FkZHJlc3MnLFxyXG5cdFx0XHRcdFx0bWluV2lkdGg6IDE4MCxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMS41XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3Bob25lX251bWJlcnMnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUGhvbmUgbnVtYmVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAxOTBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZW1haWwnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRW1haWwnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDE4MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdlZGl0JywgXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdFZGl0JywgXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJ3tjb21tb24uZWRpdEljb24oKX0nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J3d4aS1wZW5jaWwnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZWRpdFVzZXIoaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhZGRVc2VyQnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQgdXNlcicsXHJcblx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmFkZFVzZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1aSA9IHtcclxuXHRcdFx0cm93czpbXHJcblx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdHR5cGU6ICdjbGVhbicsXHJcblx0XHRcdFx0XHRjb2xzOiBbaGVhZGVyLCBsb2dvdXRdIFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZHRhYmxlLFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0e30sIGFkZFVzZXJCdG4sIHt9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiB1aTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR1c2Vyc01vZGVsLmdldERhdGFGcm9tU2VydmVyKCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGxldCB1c2Vyc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblx0XHRcdHVzZXJzQXJyID0gdXNlcnNBcnIubWFwKChlbCkgPT4ge1xyXG5cdFx0XHRcdGVsLmZ1bGxfbmFtZSA9IGVsLnVzZXJfbmFtZSArICcgJyArIGVsLnVzZXJfc3VybmFtZTtcclxuXHRcdFx0XHRjb25zdCBmb3JtYXQgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZLSVtLSVkXCIpO1xyXG5cdFx0XHRcdGVsLmJpcnRoX2RhdGUgPSBmb3JtYXQobmV3IERhdGUoZWwuYmlydGhfZGF0ZSkpO1xyXG5cdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMudXNlcnNEYXRhID0gdXNlcnNBcnI7XHJcblx0XHRcdCQkKCd1c2Vyc0xpc3QnKS5wYXJzZSh1c2Vyc0Fycik7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cclxuXHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdHRoaXMuJCQoJ2xvZ291dEJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYXBwID0gdGhpcy5hcHA7XHJcblx0XHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVktJW0tJWRcIik7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dvdXQoe2N1cnJlbnREYXRlfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLl91c2VyRm9ybSA9IHRoaXMudWkoVXNlckZvcm0pO1xyXG5cdH1cclxuXHJcblx0ZWRpdFVzZXIoaWQpIHtcclxuXHRcdGNvbnN0IHVzZXIgPSB0aGlzLnVzZXJzRGF0YS5maW5kKGVsID0+IGVsLmlkID09IGlkKTtcclxuXHRcdHRoaXMuX3VzZXJGb3JtLnNob3dXaW5kb3codXNlcik7XHJcblx0fVxyXG5cclxuXHRhZGRVc2VyKCkge1xyXG5cdFx0dGhpcy5fdXNlckZvcm0uc2hvd1dpbmRvdygpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgdXNlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcnMnO1xyXG5pbXBvcnQge3RvZ2dsZUVsZW1lbnQsIGFkZEl0ZW0sIHVwZGF0ZUl0ZW19IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJGb3JtIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3dpbmRvdycsXHJcblx0XHRcdGxvY2FsSWQ6ICd1c2VyV2luZG93JyxcclxuXHRcdFx0aGVhZDogJ0VkaXQgdXNlcicsXHJcblx0XHRcdHdpZHRoOiA2MDAsXHJcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcclxuXHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRcdFx0XHRsb2NhbElkOiAndXNlckZvcm0nLFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBuYW1lOiAnaWQnLCBsb2NhbElkOiAnaWQnLCBoaWRkZW46IHRydWUgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdGaXJzdCBuYW1lJywgbmFtZTogJ3VzZXJfbmFtZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnTGFzdCBuYW1lJywgbmFtZTogJ3VzZXJfc3VybmFtZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAnY29tYm8nLCBsYWJlbDogJ1JvbGUnLCBuYW1lOiAnY2FwYWJpbGl0aWVzX2lkJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG9wdGlvbnM6IFtcclxuXHRcdFx0XHRcdFx0XHRcdHtpZDogMSwgdmFsdWU6ICdyZWFkZXInfSxcclxuXHRcdFx0XHRcdFx0XHRcdHtpZDogMiwgdmFsdWU6ICdsYWJyYXJpYW4nfSxcclxuXHRcdFx0XHRcdFx0XHRcdHtpZDogMywgdmFsdWU6ICdhZG1pbid9XHJcblx0XHRcdFx0XHRcdFx0XSB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bhc3Nwb3J0IElEJywgbmFtZTogJ3Bhc3Nwb3J0X0lEJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICdkYXRlcGlja2VyJywgbGFiZWw6ICdCaXJ0aCBkYXRlJywgbmFtZTogJ2JpcnRoX2RhdGUnLCBsb2NhbElkOiAnYmlydGhfZGF0ZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQWRkcmVzcycsIG5hbWU6ICdhZGRyZXNzJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQaG9uZScsIG5hbWU6ICdwaG9uZV9udW1iZXJzJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdFbWFpbCcsIG5hbWU6ICdlbWFpbCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAnYWNjb3VudF9wYXNzd29yZCcsIGxvY2FsSWQ6ICdpbml0aWFsX3Bhc3N3b3JkJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRcdFx0XHQnY2FwYWJpbGl0aWVzX2lkJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eSxcclxuXHRcdFx0XHRcdFx0XHQnZW1haWwnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5LFxyXG5cdFx0XHRcdFx0XHRcdCdhY2NvdW50X3Bhc3N3b3JkJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eSxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMjAsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLCB2YWx1ZTogJ1NhdmUnLCB0eXBlOiAnZm9ybScsIGxvY2FsSWQ6ICdzYXZlQnRuJywgd2lkdGg6IDEwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZUZvcm0oKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLCB2YWx1ZTogJ0NhbmNlbCcsIHdpZHRoOiAxMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmhpZGVXaW5kb3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHt9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtID0gdGhpcy4kJCgndXNlckZvcm0nKTtcclxuXHRcdHRoaXMud2luZG93ID0gdGhpcy4kJCgndXNlcldpbmRvdycpO1xyXG5cdH1cclxuXHJcblx0c2hvd1dpbmRvdyh1c2VyKSB7XHRcclxuXHRcdHRoaXMuaXNOZXcgPSB1c2VyID8gZmFsc2UgOiB0cnVlO1x0XHJcblxyXG5cdFx0aWYodGhpcy5pc05ldykge1xyXG5cdFx0XHR0aGlzLndpbmRvdy5nZXRIZWFkKCkuc2V0SFRNTCgnQWRkIHVzZXInKTtcclxuXHRcdFx0dGhpcy53aW5kb3cuZ2V0SGVhZCgpLnJlZnJlc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKHVzZXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGluaXRpYWxfcGFzc3dvcmQgPSB0aGlzLiQkKCdpbml0aWFsX3Bhc3N3b3JkJyk7XHJcblx0XHR0b2dnbGVFbGVtZW50KHRoaXMuaXNOZXcsIGluaXRpYWxfcGFzc3dvcmQpO1xyXG5cdFx0XHJcblxyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1xyXG5cdH1cclxuXHJcblx0c2F2ZUZvcm0oKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5mb3JtLmdldFZhbHVlcygpO1xyXG5cclxuXHRcdGNvbnN0IHN1Y2Nlc3NBY3Rpb24gPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMud2ViaXgubWVzc2FnZSgnU3VjY2VzcycpO1xyXG5cdFx0XHR0aGlzLmhpZGVXaW5kb3coKTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdGlmKHRoaXMuZm9ybS52YWxpZGF0ZSgpKSB7XHJcblx0XHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0XHRhZGRJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHN1Y2Nlc3NBY3Rpb24pO1x0XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHVwZGF0ZUl0ZW0odXNlcnNNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbik7XHJcblx0XHRcdH1cclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cclxuXHRoaWRlV2luZG93KCkge1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyVmFsaWRhdGlvbigpO1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyKCk7XHJcblx0XHR0aGlzLmdldFJvb3QoKS5oaWRlKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBib29rc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9ib29rcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWJyYXJ5IGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uc3RydWN0b3IoYXBwLCBsaWJyYXJ5Q29uZmlnLCBib29rQ2FyZCkge1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHRcdHRoaXMubGlicmFyeUNvbmZpZyA9IGxpYnJhcnlDb25maWc7XHJcblx0XHR0aGlzLmJvb2tDYXJkID0gYm9va0NhcmQ7XHJcblx0fVxyXG5cclxuXHRjb25maWcoKSB7XHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6ICdoZWFkZXInLFxyXG5cdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLWJvb2tcIj48L2k+IExpc3Qgb2YgYm9va3MnLFxyXG5cdFx0XHRjc3M6ICdjZW50ZXIgcGFnZV9oZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGR0YWJsZSA9IHtcclxuXHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdGlkOiAnZHRfbGlicmFyeScsXHJcblx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnaWQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdib29rX3RpdGxlJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydUaXRsZScsIHtjb250ZW50OiAndGV4dEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdXRob3JfbmFtZScsXHJcblx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnQXV0aG9yJywge2NvbnRlbnQ6ICd0ZXh0RmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2dlbnJlcycsXHJcblx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ0dlbnJlcycsIHtjb250ZW50OiAnc2VsZWN0RmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2NvdW50cnlfb2ZfcHVibGljYXRpb24nLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydDb3VudHJ5Jywge2NvbnRlbnQ6ICdzZWxlY3RGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAneWVhcl9vZl9wdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0XHRzb3J0OiAnZGF0ZScsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0Zm9ybWF0OiB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZXCIpLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ1llYXInLCB7Y29udGVudDogJ2RhdGVSYW5nZUZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdmFpbGFibGVfY29waWVzJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdBdmFpbGFibGUnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3ZpZXdDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnVmlldycsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1leWVcIj48L2k+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdlZGl0Q29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0VkaXQnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3JlbW92ZUNvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSZW1vdmUnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCdmYS1leWUnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd0Jvb2tDYXJkKGlkKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdmYS1lZGl0JzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dCb29rQ2FyZChpZCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnZmEtdHJhc2gnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQm9vayhpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFtoZWFkZXIsIGR0YWJsZV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5ncmlkID0gJCQoJ2R0X2xpYnJhcnknKTtcclxuXHJcblx0XHRzd2l0Y2ggKHRoaXMubGlicmFyeUNvbmZpZy5yb2xlKSB7XHJcblx0XHRcdGNhc2UgJ3JlYWRlcic6IHtcclxuXHRcdFx0XHR0aGlzLmdyaWQuZ2V0Q29sdW1uQ29uZmlnKCdlZGl0Q29sJykuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmdyaWQuZ2V0Q29sdW1uQ29uZmlnKCdyZW1vdmVDb2wnKS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xpYnJhcmlhbic6IHtcclxuXHRcdFx0XHR0aGlzLmdyaWQuZ2V0Q29sdW1uQ29uZmlnKCd2aWV3Q29sJykuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ncmlkLnJlZnJlc2hDb2x1bW5zKCk7XHJcblxyXG5cdFx0Y29uc3QgdXNlcl9pZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdGJvb2tzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIodXNlcl9pZCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGxldCBib29rc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0XHRib29rc0FyciA9IGJvb2tzQXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0XHRlbC55ZWFyX29mX3B1YmxpY2F0aW9uID0gbmV3IERhdGUoZWwueWVhcl9vZl9wdWJsaWNhdGlvbik7XHJcblx0XHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuZ3JpZC5wYXJzZShib29rc0Fycik7XHJcblx0XHRcdHRoaXMuYm9va3NBcnIgPSBib29rc0FycjtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuX2Jvb2tDYXJkID0gdGhpcy51aSh0aGlzLmJvb2tDYXJkKTtcclxuXHR9XHJcblxyXG5cdHNob3dCb29rQ2FyZChpZCkge1xyXG5cdFx0Y29uc3QgYm9vayA9IHRoaXMuYm9va3NBcnIuZmluZChlbCA9PiBlbC5pZCA9PSBpZCk7XHJcblx0XHR0aGlzLl9ib29rQ2FyZC5zaG93UG9wdXAoYm9vayk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVCb29rKGlkKSB7XHJcblx0XHRib29rc01vZGVsLnJlbW92ZUl0ZW0oaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3JpZC5yZW1vdmUoaWQpO1xyXG5cdH1cclxuXHJcblx0YWRkQm9vaygpIHtcclxuXHRcdHRoaXMuX2Jvb2tDYXJkLnNob3dQb3B1cCgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5pbXBvcnQgeyBkdW1teUNvdmVyIH0gZnJvbSAnLi4vLi4vY29uc3RzJztcclxuaW1wb3J0IHsgdG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbSB9IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDYXJkIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDb3ZlciA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDb3ZlcicsXHJcblx0XHRcdHdpZHRoOiAxMjAsXHJcblx0XHRcdGhlaWdodDogMTgwLFxyXG5cdFx0XHRjc3M6ICdib29rX2NvdmVyJyxcclxuXHRcdFx0dGVtcGxhdGU6ICh1cmwpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gYDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KVwiID48L2Rpdj5gO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDYXJkID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NhcmRMaWJyYXJpYW4nLFxyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVGl0bGUnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdib29rX3RpdGxlJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F1dGhvcicsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2F1dGhvcl9uYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdHZW5yZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdnZW5yZXMnLCBvcHRpb25zOiBbXHJcblx0XHRcdFx0XHQnJywgJ0ZpY3Rpb24nLCAnRmFudGFzeScsICdUaHJpbGxlcicsICdIb3Jyb3InLCAnTXlzdGVyeScsICdIaXN0b3JpY2FsJywgJ1dlc3Rlcm5zJywgJ0ZhbWlseScsICdEYXJrIGNvbWVkeSdcclxuXHRcdFx0XHRdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQdWJsaXNoaW5nIGhvdXNlJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAncHVibGlzaGluZ19ob3VzZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdmFpbGFibGUgY29waWVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYXZhaWxhYmxlX2NvcGllcycgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYWdlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ251bWJlcl9vZl9wYWdlcycgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3ZlciBwaG90bycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2NvdmVyX3Bob3RvJyB9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkVGV4dEZpbGUgPSB7XHJcblx0XHRcdHZpZXc6ICd1cGxvYWRlcicsXHJcblx0XHRcdGxhYmVsOiAnPGkgY2xhc3M9XCJmYXMgZmEtZmlsZS11cGxvYWRcIj48L2k+IFVwbG9hZCB0ZXh0IGZpbGUnLFxyXG5cdFx0XHRsb2NhbElkOiAnYm9va0ZpbGVzJyxcclxuXHRcdFx0dHlwZTogJ2h0bWxidXR0b24nLFxyXG5cdFx0XHRhdXRvc2VuZDogZmFsc2UsXHJcblx0XHRcdHdpZHRoOiAxNTAsXHJcblx0XHRcdGZvcm1EYXRhOiAoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdHVzZXJfaWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0XHRcdFx0Ym9va19pZDogdGhpcy5ib29rSWRcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhY2NlcHQ6ICd0ZXh0L3BsYWluLCBhcHBsaWNhdGlvbi9wZGYsIC5kb2MsIC5kb2N4JyxcclxuXHRcdFx0dXBsb2FkOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2ZpbGVzL3VwbG9hZC90ZXh0JyxcclxuXHRcdFx0bGluazogJ2ZpbGVzTGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZmlsZXNMaXN0ID0ge1xyXG5cdFx0XHR2aWV3OiAnbGlzdCcsXHJcblx0XHRcdHR5cGU6ICd1cGxvYWRlcicsXHJcblx0XHRcdGlkOiAnZmlsZXNMaXN0JyxcclxuXHRcdFx0YXV0b2hlaWdodDp0cnVlLCBcclxuXHRcdFx0Ym9yZGVybGVzczp0cnVlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZEF1ZGlvRmlsZSA9IHtcclxuXHRcdFx0dmlldzogJ3VwbG9hZGVyJyxcclxuXHRcdFx0bGFiZWw6ICc8aSBjbGFzcz1cImZhcyBmYS1tdXNpY1wiPjwvaT4gVXBsb2FkIGF1ZGlvJyxcclxuXHRcdFx0bG9jYWxJZDogJ2F1ZGlvRmlsZXMnLFxyXG5cdFx0XHR0eXBlOiAnaHRtbGJ1dHRvbicsXHJcblx0XHRcdGF1dG9zZW5kOiBmYWxzZSxcclxuXHRcdFx0d2lkdGg6IDE1MCxcclxuXHRcdFx0Zm9ybURhdGE6ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0dXNlcl9pZDogdGhpcy51c2VySWQsXHJcblx0XHRcdFx0XHRib29rX2lkOiB0aGlzLmJvb2tJZFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0sXHJcblx0XHRcdGFjY2VwdDogJy5tcDMnLFxyXG5cdFx0XHR1cGxvYWQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmlsZXMvdXBsb2FkL2F1ZGlvJyxcclxuXHRcdFx0bGluazogJ2F1ZGlvTGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXVkaW9MaXN0ID0ge1xyXG5cdFx0XHR2aWV3OiAnbGlzdCcsXHJcblx0XHRcdHR5cGU6ICd1cGxvYWRlcicsXHJcblx0XHRcdGlkOiAnYXVkaW9MaXN0JyxcclxuXHRcdFx0YXV0b2hlaWdodDp0cnVlLCBcclxuXHRcdFx0Ym9yZGVybGVzczp0cnVlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGF2YWlsYWJsZVRleHRGaWxlcyA9IHtcclxuXHRcdFx0dmlldzogJ2FjdGl2ZUxpc3QnLFxyXG5cdFx0XHRsb2NhbElkOiAnYXZhaWxhYmxlVGV4dEZpbGVzJyxcclxuXHRcdFx0dGVtcGxhdGU6IFwiI25hbWUjXCIgK1xyXG5cdFx0XHRcdFx0XCI8c3BhbiBjbGFzcz0nbGlzdF9idXR0b24nPjxpIGNsYXNzID0gJ2ZhcyBmYS10aW1lcyc+PC9pPjwvc3Bhbj5cIixcclxuXHRcdFx0b246IHtcclxuXHRcdFx0XHRvbkl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHQvL3JlbW92ZSBmaWxlIGFuZCByZWNvcmQgaW4gREJcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdyZW1vdmU6ICcsIGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXZhaWxhYmxlQXVkaW9GaWxlcyA9IHtcclxuXHRcdFx0dmlldzogXCJhY3RpdmVMaXN0XCIsXHJcblx0XHRcdGxvY2FsSWQ6IFwiYXZhaWxhYmxlQXVkaW9GaWxlc1wiLFxyXG5cdFx0XHR0ZW1wbGF0ZTogXCIjbmFtZSNcIiArXHJcblx0XHRcdFx0XHRcIjxzcGFuIGNsYXNzPSdsaXN0X2J1dHRvbic+PGkgY2xhc3MgPSAnZmFzIGZhLXRpbWVzJz48L2k+PC9zcGFuPlwiLFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzYXZlQnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRsYWJlbDogJ1NhdmUnLFxyXG5cdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICdwb3B1cCcsXHJcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcclxuXHRcdFx0bWF4SGVpZ2h0OiA1NTAsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHR2aWV3OiAnc2Nyb2xsdmlldycsXHJcblx0XHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHRib29rQ292ZXIsIFxyXG5cdFx0XHRcdFx0XHRib29rQ2FyZCxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHZpZXc6ICd0ZW1wbGF0ZScsXHJcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU6ICdGaWxlcycsXHJcblx0XHRcdFx0XHRcdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRjc3M6ICdjZW50ZXInXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtoZWlnaHQ6IDJcdH0sXHJcblx0XHRcdFx0XHRcdGF2YWlsYWJsZVRleHRGaWxlcyxcclxuXHRcdFx0XHRcdFx0YXZhaWxhYmxlQXVkaW9GaWxlcyxcclxuXHRcdFx0XHRcdFx0ZmlsZXNMaXN0LFxyXG5cdFx0XHRcdFx0XHRhdWRpb0xpc3QsXHJcblx0XHRcdFx0XHRcdHtoZWlnaHQ6IDE1fSxcclxuXHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHRsb2NhbElkOiAnYWRkaW5nRmlsZXNCdXR0b25zJyxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdFx0XHRcdGNvbHM6IFsge30sIGFkZFRleHRGaWxlLCBhZGRBdWRpb0ZpbGUsIHt9IF0gXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtoZWlnaHQ6IDF9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdYOiAxNSxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0Y29sczogW3t9LCBzYXZlQnRuLCB7fV1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybSA9IHRoaXMuJCQoJ2Jvb2tDYXJkTGlicmFyaWFuJyk7XHJcblx0fVxyXG5cclxuXHRzaG93UG9wdXAoYm9vaykge1xyXG5cdFx0dGhpcy5jbGVhckZvcm0oKTtcclxuXHRcdHRoaXMuaXNOZXcgPSBib29rID8gZmFsc2UgOiB0cnVlO1xyXG5cdFx0dGhpcy5ib29rID0gYm9vayA/IGJvb2sgOiAnJztcclxuXHRcdHRoaXMuYm9va0lkID0gYm9vayA/IGJvb2suaWQgOiAnJztcclxuXHRcdHRoaXMudXNlcklkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cclxuXHRcdGZpbGVzTW9kZWwuZ2V0SXRlbXModGhpcy5ib29rSWQpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCBmaWxlc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0XHRjb25zdCB0ZXh0RmlsZXMgPSBbXTtcclxuXHRcdFx0Y29uc3QgYXVkaW9GaWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0ZmlsZXNBcnIuZm9yRWFjaCgoZmlsZSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaChmaWxlLmRhdGFfdHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAndGV4dCc6IHRleHRGaWxlcy5wdXNoKGZpbGUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2F1ZGlvJzogYXVkaW9GaWxlcy5wdXNoKGZpbGUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5wYXJzZSh0ZXh0RmlsZXMpO1xyXG5cdFx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykucGFyc2UoYXVkaW9GaWxlcyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0b2dnbGVFbGVtZW50KCF0aGlzLmlzTmV3LCB0aGlzLiQkKCdib29rQ292ZXInKSk7XHJcblx0XHR0b2dnbGVFbGVtZW50KCF0aGlzLmlzTmV3LCB0aGlzLiQkKCdhZGRpbmdGaWxlc0J1dHRvbnMnKSk7XHJcblxyXG5cdFx0aWYoIXRoaXMuaXNOZXcpIHtcclxuXHRcdFx0dGhpcy5mb3JtLnNldFZhbHVlcyhib29rKTtcclxuXHRcdFx0dGhpcy4kJCgnYm9va0NvdmVyJykuc2V0VmFsdWVzKGJvb2suY292ZXJfcGhvdG8gfHwgZHVtbXlDb3Zlcik7XHRcdFx0XHJcblx0XHR9XHRcdFxyXG5cclxuXHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcdFxyXG5cdH1cclxuXHJcblx0c2F2ZUZvcm0oKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5mb3JtLmdldFZhbHVlcygpO1xyXG5cclxuXHRcdGNvbnN0IHN1Y2Nlc3NBY3Rpb24gPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMud2ViaXgubWVzc2FnZSgnU3VjY2VzcycpO1xyXG5cdFx0XHR0aGlzLmhpZGVXaW5kb3coKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYodGhpcy5mb3JtLnZhbGlkYXRlKCkpIHtcclxuXHRcdFx0aWYodGhpcy5pc05ldykge1xyXG5cdFx0XHRcdGFkZEl0ZW0oYm9va3NNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbik7XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dXBkYXRlSXRlbShib29rc01vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kJCgnYm9va0ZpbGVzJykuc2VuZCgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZihyZXNwb25zZSl7XHJcblx0XHRcdFx0XHR0aGlzLndlYml4Lm1lc3NhZ2UocmVzcG9uc2UubWVzc2FnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJCQoJ2F1ZGlvRmlsZXMnKS5zZW5kKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKXtcclxuXHRcdFx0XHRcdHRoaXMud2ViaXgubWVzc2FnZShyZXNwb25zZS5tZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVx0XHRcclxuXHR9XHJcblxyXG5cdGhpZGVXaW5kb3coKSB7XHJcblx0XHR0aGlzLmNsZWFyRm9ybSgpO1xyXG5cdFx0dGhpcy5nZXRSb290KCkuaGlkZSgpO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJGb3JtICgpe1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyVmFsaWRhdGlvbigpO1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyKCk7XHJcblx0XHR0aGlzLiQkKCdib29rRmlsZXMnKS5maWxlcy5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXVkaW9GaWxlcycpLmZpbGVzLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi8uLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgdGVtcGxhdGU6dGhpcy5hcHAuY29uZmlnLm5hbWUsIGNzczond2ViaXhfaGVhZGVyIGFwcF9oZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG1lbnUgPSB7XHJcblx0XHRcdHZpZXc6J21lbnUnLCBcclxuXHRcdFx0Y3NzOidhcHBfbWVudScsXHJcblx0XHRcdHdpZHRoOjE4MCwgXHJcblx0XHRcdGxheW91dDoneScsIFxyXG5cdFx0XHRzZWxlY3Q6dHJ1ZSxcclxuXHRcdFx0dGVtcGxhdGU6JzxzcGFuIGNsYXNzPVwid2ViaXhfaWNvbiAjaWNvbiNcIj48L3NwYW4+ICN2YWx1ZSMgJyxcclxuXHRcdFx0dmFsdWU6ICdtYWluJyxcclxuXHRcdFx0ZGF0YTpbXHJcblx0XHRcdFx0eyB2YWx1ZTonTGlicmFyeScsIGlkOidsaWJyYXJ5JywgIGljb246J2ZhcyBmYS1ib29rLXJlYWRlcicgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidVc2VycycsIGlkOid1c2VycycsICBpY29uOidmYXMgZmEtY29nJyB9XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uOntcclxuXHRcdFx0XHRvbk1lbnVJdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXNlcl9pZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwLnNob3coYGxpYnJhcmlhbi5pbmRleD9pZD0ke3VzZXJfaWR9L2xpYnJhcmlhbi4ke2lkfWApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsb2dvdXQgPSB7XHJcblx0XHRcdHZpZXc6J2J1dHRvbicsIFxyXG5cdFx0XHRsb2NhbElkOidsb2dvdXRCdG4nLCBcclxuXHRcdFx0dmFsdWU6J0xvZ291dCcsIFxyXG5cdFx0XHR0eXBlOidmb3JtJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1aSA9IHtcclxuXHRcdFx0dHlwZTonY2xlYW4nLCBwYWRkaW5nWDo1LCBjc3M6J2FwcF9sYXlvdXQnLCBcclxuXHRcdFx0Y29sczpbXHJcblx0XHRcdFx0eyBwYWRkaW5nWDo1LCBwYWRkaW5nWToxMCwgcm93czogWyB7Y3NzOid3ZWJpeF9zaGFkb3dfbWVkaXVtJywgcm93czpbaGVhZGVyLCBtZW51LCBsb2dvdXRdfSBdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdyZXNpemVyJywgd2lkdGg6IDUgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0eXBlOiAnd2lkZScsIHBhZGRpbmdZOiAxMCwgcGFkZGluZ1g6IDUsIHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0eyAkc3VidmlldzogdHJ1ZSB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdHRoaXMuJCQoJ2xvZ291dEJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYXBwID0gdGhpcy5hcHA7XHJcblx0XHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVktJW0tJWRcIik7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dvdXQoe2N1cnJlbnREYXRlfSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSBcIndlYml4LWpldFwiO1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuLi9jb21tb24vbGlicmFyeSc7XHJcbmltcG9ydCBCb29rQ2FyZCBmcm9tICcuL2Jvb2tDYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxpYkxpYnJhcnkgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRcclxuXHJcblx0XHRjb25zdCBsaWJyYXJ5Q29uZmlnID0ge1xyXG5cdFx0XHRyb2xlOiAnbGlicmFyaWFuJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhZGRCb29rQnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQgYm9vaycsXHJcblx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRsaWJyYXJ5LmFkZEJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IGxpYnJhcnkgPSBuZXcgTGlicmFyeSh0aGlzLmFwcCwgbGlicmFyeUNvbmZpZywgQm9va0NhcmQpO1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdGxpYnJhcnksXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sczogW3t9LGFkZEJvb2tCdG4se31dXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luUGFnZSBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgbG9naW5Gb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdsb2dpbkZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1VzZXJuYW1lJywgbmFtZTogJ3VzZXJuYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCB0eXBlOiAncGFzc3dvcmQnLCBsYWJlbDogJ1Bhc3N3b3JkJywgbmFtZTogJ3Bhc3N3b3JkJyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1hcmdpbjogNSwgY29sczogW1xyXG5cdFx0XHRcdFx0XHR7IHZpZXc6ICdidXR0b24nLCBsb2NhbElkOiAnbG9naW5CdG4nLCB2YWx1ZTogJ0xvZ2luJywgdHlwZTogJ2Zvcm0nIH0sXHJcblx0XHRcdFx0XHRcdHsgdmlldzogJ2J1dHRvbicsIHZhbHVlOiAnQ2FuY2VsJyB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxpbmsgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0NyZWF0ZSBhbiBhY2NvdW50JyxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNob3coJy9yZWdpc3RlcicpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1x0XHJcblx0XHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHRsb2dpbkZvcm0sXHJcblx0XHRcdFx0XHRcdGxpbmssXHJcblx0XHRcdFx0XHRcdHt9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuJCQoJ2xvZ2luQnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLiQkKCdsb2dpbkZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ2luKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcdFxyXG5cclxuXHRcdFx0XHRpZiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZXJEYXRhID0gcmVzcG9uc2UuanNvbigpLnVzZXI7XHJcblx0XHRcdFx0XHRjb25zdCBpZCA9IHVzZXJEYXRhLmlkO1xyXG5cclxuXHRcdFx0XHRcdHN3aXRjaCAodXNlckRhdGEucm9sZV9uYW1lKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2FkbWluJzogdGhpcy5zaG93KGBhZG1pbi5pbmRleD9pZD0ke2lkfWApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdsaWJyYXJpYW4nOiB0aGlzLnNob3coYGxpYnJhcmlhbi5pbmRleD9pZD0ke2lkfS9saWJyYXJpYW4ubGlicmFyeWApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdyZWFkZXInOiB0aGlzLnNob3coYHJlYWRlci5pbmRleD9pZD0ke2lkfS9yZWFkZXIubWFpbmApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHdlYml4Lm1lc3NhZ2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgbGlrZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvbGlrZXMnO1xyXG5pbXBvcnQge3RvZ2dsZUVsZW1lbnR9IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuaW1wb3J0IHtkdW1teUNvdmVyLCBTVUNDRVNTfSBmcm9tICcuLi8uLi9jb25zdHMnOyBcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDYXJkIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDb3ZlciA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDb3ZlcicsXHJcblx0XHRcdHdpZHRoOiAxMjAsXHJcblx0XHRcdGhlaWdodDogMTgwLFxyXG5cdFx0XHRjc3M6ICdib29rX2NvdmVyJyxcclxuXHRcdFx0dGVtcGxhdGU6ICh1cmwpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gYDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KVwiID48L2Rpdj5gO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJvb2tDYXJkID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NhcmRSZWFkZXInLFx0XHRcdFxyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVGl0bGUnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdib29rX3RpdGxlJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdXRob3InLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdXRob3JfbmFtZScsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnR2VucmVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnZ2VucmVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeV9vZl9wdWJsaWNhdGlvbicsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUHVibGlzaGluZyBob3VzZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ3B1Ymxpc2hpbmdfaG91c2UnLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F2YWlsYWJsZSBjb3BpZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdmFpbGFibGVfY29waWVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYWdlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ251bWJlcl9vZl9wYWdlcycsIHJlYWRvbmx5OiB0cnVlIH1cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVUZXh0RmlsZXMgPSB7XHJcblx0XHRcdHZpZXc6ICdhY3RpdmVMaXN0JyxcclxuXHRcdFx0bG9jYWxJZDogJ2F2YWlsYWJsZVRleHRGaWxlcycsXHJcblx0XHRcdHRlbXBsYXRlOiBcIiNuYW1lI1wiICtcclxuXHRcdFx0XHRcdFwiPHNwYW4gY2xhc3M9J2xpc3RfYnV0dG9uJz48aSBjbGFzcyA9ICdmYXMgZmEtZG93bmxvYWQnPjwvaT48L3NwYW4+XCIsXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgYm9va05hbWUgPSB0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5nZXRJdGVtKGlkKS5uYW1lO1xyXG5cclxuXHRcdFx0XHRcdGZpbGVzTW9kZWwuZG93bmxvYWRJdGVtKGlkKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0d2ViaXguaHRtbC5kb3dubG9hZChyZXMsIGJvb2tOYW1lKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVBdWRpb0ZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiBcImFjdGl2ZUxpc3RcIixcclxuXHRcdFx0bG9jYWxJZDogXCJhdmFpbGFibGVBdWRpb0ZpbGVzXCIsXHJcblx0XHRcdHR5cGU6e1xyXG5cdFx0XHRcdGhlaWdodDoxMDBcclxuXHRcdFx0fSxcclxuXHRcdFx0dGVtcGxhdGU6IFwiI25hbWUjPGF1ZGlvIGNvbnRyb2xzIHNyYz0naHR0cDovL2xvY2FsaG9zdDozMDAwL2F1ZGlvLyNpZCMnPjwvYXVkaW8+XCJcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb3JkZXJCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ29yZGVyQm9vaycsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0bGFiZWw6ICc8aSBjbGFzcz1cImZhciBmYS1oYW5kLXBhcGVyXCI+PC9pPiBPcmRlcicsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMub3JkZXJCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZG93bmxvYWRCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ2Rvd25sb2FkQm9vaycsXHJcblx0XHRcdHR5cGU6ICdpY29uJyxcclxuXHRcdFx0aWNvbjogJ2ZhcyBmYS1kb3dubG9hZCcsXHJcblx0XHRcdHdpZHRoOiA2MCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5vcmRlckJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsaWtlQm9vayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGxvY2FsSWQ6ICdsaWtlQnV0dG9uJyxcclxuXHRcdFx0Y3NzOiAnbGlrZV9idXR0b24nLFxyXG5cdFx0XHR0eXBlOiAnaWNvbicsIFxyXG5cdFx0XHRpY29uOiAnZmFyIGZhLWhlYXJ0JyxcclxuXHRcdFx0d2lkdGg6IDQ1LFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLmxpa2VCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3BvcHVwJyxcclxuXHRcdFx0cG9zaXRpb246J2NlbnRlcicsXHJcblx0XHRcdGJvZHk6e1xyXG5cdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdGJvb2tDb3ZlciwgYm9va0NhcmQsIGF2YWlsYWJsZVRleHRGaWxlcywgYXZhaWxhYmxlQXVkaW9GaWxlcyxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nWDogMTUsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMTAsXHJcblx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHRvcmRlckJvb2ssIGRvd25sb2FkQm9vaywge30sIGxpa2VCb29rXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdIFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHRcclxuXHRzaG93UG9wdXAoYm9vaykge1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uID0gdGhpcy4kJCgnbGlrZUJ1dHRvbicpO1xyXG5cdFx0dGhpcy5mb3JtID0gdGhpcy4kJCgnYm9va0NhcmRSZWFkZXInKTtcclxuXHRcdHRoaXMuZmlsZXNMaXN0ID0gdGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJyk7XHJcblx0XHR0aGlzLmJvb2sgPSBib29rO1xyXG5cdFx0dGhpcy5ib29rSWQgPSBib29rLmlkO1xyXG5cdFx0dGhpcy51c2VySWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2xlYXJGb3JtKCk7XHJcblx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKGJvb2spO1xyXG5cdFx0dGhpcy4kJCgnYm9va0NvdmVyJykuc2V0VmFsdWVzKGJvb2suY292ZXJfcGhvdG8gfHwgZHVtbXlDb3Zlcik7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24uZGVmaW5lKCdiYWRnZScsIGJvb2suY291bnRfbGlrZXMgfHwgJzAnKTtcclxuXHJcblx0XHRmaWxlc01vZGVsLmdldEl0ZW1zKHRoaXMuYm9va0lkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgZmlsZXNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cclxuXHRcdFx0Y29uc3QgdGV4dEZpbGVzID0gW107XHJcblx0XHRcdGNvbnN0IGF1ZGlvRmlsZXMgPSBbXTtcclxuXHJcblx0XHRcdGZpbGVzQXJyLmZvckVhY2goKGZpbGUpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2goZmlsZS5kYXRhX3R5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOiB0ZXh0RmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdhdWRpbyc6IGF1ZGlvRmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykucGFyc2UodGV4dEZpbGVzKTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLnBhcnNlKGF1ZGlvRmlsZXMpO1xyXG5cdFx0fSk7XHJcblx0XHR0b2dnbGVFbGVtZW50KGJvb2suYm9va19maWxlLCB0aGlzLiQkKCdkb3dubG9hZEJvb2snKSk7XHJcblx0XHR0b2dnbGVFbGVtZW50KGJvb2suYXZhaWxhYmxlX2NvcGllcywgdGhpcy4kJCgnb3JkZXJCb29rJykpO1xyXG5cdFx0dGhpcy50b2dnbGVMaWtlKGJvb2sudXNlcl9pZCA9PSB0aGlzLnVzZXJJZCk7XHJcblxyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1xyXG5cdH1cclxuXHJcblx0b3JkZXJCb29rKCkge1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRsaWtlQm9vaygpIHtcclxuXHRcdGlmKHRoaXMuYm9vay51c2VyX2lkID09IHRoaXMudXNlcklkKSB7XHJcblx0XHRcdGxpa2VzTW9kZWwucmVtb3ZlTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdHVzID0gcmVzcG9uc2UuanNvbigpLnNlcnZlclN0YXR1cztcclxuXHRcdFx0XHRpZihzdGF0dXMgPT0gU1VDQ0VTUykge1xyXG5cdFx0XHRcdFx0dGhpcy51bnNldExpa2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0bGlrZXNNb2RlbC5hZGRMaWtlKHRoaXMudXNlcklkLCB0aGlzLmJvb2tJZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc2VydmVyU3RhdHVzO1xyXG5cdFx0XHRcdGlmKHN0YXR1cyA9PSBTVUNDRVNTKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldExpa2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVx0XHRcclxuXHR9XHRcclxuXHJcblx0dG9nZ2xlTGlrZShjb25kaXRpb24pIHtcclxuXHRcdGlmKGNvbmRpdGlvbikge1xyXG5cdFx0XHR0aGlzLnNldExpa2UoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVuc2V0TGlrZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0TGlrZSgpIHtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5kZWZpbmUoJ2ljb24nLCAnZmFzIGZhLWhlYXJ0Jyk7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24ucmVmcmVzaCgpO1xyXG5cdH1cclxuXHJcblx0dW5zZXRMaWtlKCkge1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnaWNvbicsICdmYXIgZmEtaGVhcnQnKTtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5yZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhckZvcm0gKCl7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXIoKTtcclxuXHRcdHRoaXMuZmlsZXNMaXN0LmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi8uLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgdGVtcGxhdGU6dGhpcy5hcHAuY29uZmlnLm5hbWUsIGNzczond2ViaXhfaGVhZGVyIGFwcF9oZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG1lbnUgPSB7XHJcblx0XHRcdHZpZXc6J21lbnUnLCBcclxuXHRcdFx0Y3NzOidhcHBfbWVudScsXHJcblx0XHRcdHdpZHRoOjE4MCwgbGF5b3V0Oid5Jywgc2VsZWN0OnRydWUsXHJcblx0XHRcdHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cIndlYml4X2ljb24gI2ljb24jXCI+PC9zcGFuPiAjdmFsdWUjICcsXHJcblx0XHRcdHZhbHVlOiAnbWFpbicsXHJcblx0XHRcdGRhdGE6W1xyXG5cdFx0XHRcdHsgdmFsdWU6J015IGJvb2tzJywgaWQ6J21haW4nLCBpY29uOidmYXMgZmEtYm9va21hcmsnIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonTGlicmFyeScsIGlkOidsaWJyYXJ5JywgIGljb246J2ZhcyBmYS1ib29rLXJlYWRlcicgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidUb3BzJywgaWQ6J3RvcHMnLCAgaWNvbjonZmFzIGZhLWxpc3QnIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonU2V0dGluZ3MnLCBpZDonc2V0dGluZ3MnLCAgaWNvbjonZmFzIGZhLWNvZycgfSxcclxuXHRcdFx0XSxcclxuXHRcdFx0b246e1xyXG5cdFx0XHRcdG9uTWVudUl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB1c2VyX2lkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5hcHAuc2hvdyhgcmVhZGVyLmluZGV4P2lkPSR7dXNlcl9pZH0vcmVhZGVyLiR7aWR9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHR0eXBlOidjbGVhbicsIHBhZGRpbmdYOjUsIGNzczonYXBwX2xheW91dCcsIFxyXG5cdFx0XHRjb2xzOltcclxuXHRcdFx0XHR7IHBhZGRpbmdYOjUsIHBhZGRpbmdZOjEwLCByb3dzOiBbIHtjc3M6J3dlYml4X3NoYWRvd19tZWRpdW0nLCByb3dzOltoZWFkZXIsIG1lbnUsIGxvZ291dF19IF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3Jlc2l6ZXInLCB3aWR0aDogNSB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICd3aWRlJywgcGFkZGluZ1k6IDEwLCBwYWRkaW5nWDogNSwgcm93czogW1xyXG5cdFx0XHRcdFx0XHR7ICRzdWJ2aWV3OiB0cnVlIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCh7Y3VycmVudERhdGV9KS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tIFwid2ViaXgtamV0XCI7XHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4uL2NvbW1vbi9saWJyYXJ5JztcclxuaW1wb3J0IEJvb2tDYXJkIGZyb20gJy4vYm9va0NhcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVhZGVyTGlicmFyeSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGxpYnJhcnlDb25maWcgPSB7XHJcblx0XHRcdHJvbGU6ICdyZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRuZXcgTGlicmFyeSh0aGlzLmFwcCwgbGlicmFyeUNvbmZpZywgQm9va0NhcmQpXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgdGVzdFJlc3VsdHMgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRpZDogJ2dyb3VwTGlzdCcsXHJcblx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0FkZCcsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICd7Y29tbW9uLnRyYXNoSWNvbigpfSdcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBidXR0b24gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRpZDogJ2FkZEdyb3VwJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQnLFxyXG5cdFx0XHR0eXBlOidmb3JtJyxcclxuXHRcdFx0aW5wdXRXaWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge31cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdHJvd3M6IFt0ZXN0UmVzdWx0cywgYnV0dG9uXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHQvLyAkJCgnZ3JvdXBMaXN0JykucGFyc2UoZ3JvdXBzKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHVzZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzJztcclxuaW1wb3J0IHt1cGRhdGVJdGVtfSBmcm9tICcuLi8uLi9zY3JpcHRzJzsgXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRjb25zdCBidXR0b24gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRpZDogJ3NhdmVDaGFuZ2VzJyxcclxuXHRcdFx0dmFsdWU6ICdTYXZlJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRpbnB1dFdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVzZXJEYXRhID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICd1c2VyRGF0YUZvcm0nLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBuYW1lOiAnaWQnLCBsb2NhbElkOiAndXNlcl9pZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0ZpcnN0IG5hbWUnLG5hbWU6ICd1c2VyX25hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnTGFzdCBuYW1lJyxuYW1lOiAndXNlcl9zdXJuYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bhc3Nwb3J0IElEJyxuYW1lOiAncGFzc3BvcnRfSUQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAnZGF0ZXBpY2tlcicsIGxhYmVsOiAnQmlydGggZGF0ZScsbmFtZTogJ2JpcnRoX2RhdGUnLCBsb2NhbElkOiAnYmlydGhfZGF0ZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBZGRyZXNzJyxuYW1lOiAnYWRkcmVzcycsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQaG9uZScsbmFtZTogJ3Bob25lX251bWJlcnMnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRW1haWwnLG5hbWU6ICdlbWFpbCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHRidXR0b25cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbdXNlckRhdGFdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IGlkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cclxuXHRcdHVzZXJzTW9kZWwuZ2V0SXRlbShpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCB1c2VyRGF0YSA9IGRhdGEuanNvbigpWzBdO1xyXG5cdFx0XHR1c2VyRGF0YS5iaXJ0aF9kYXRlID0gbmV3IERhdGUgKHVzZXJEYXRhLmJpcnRoX2RhdGUpO1xyXG5cdFx0XHR0aGlzLiQkKCd1c2VyRGF0YUZvcm0nKS5zZXRWYWx1ZXModXNlckRhdGEpO1xyXG5cdFx0fSk7XHRcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtICgpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLiQkKCd1c2VyRGF0YUZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdGNvbnN0IHN1Y2Nlc3NBY3Rpb24gPSB0aGlzLndlYml4Lm1lc3NhZ2UoJ05ldyBkYXRhIHNhdmVkJyk7XHJcblx0XHR1cGRhdGVJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHN1Y2Nlc3NBY3Rpb24pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tIFwid2ViaXgtamV0XCI7XHJcbmltcG9ydCBib29rc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9ib29rcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib29rVG9wcyBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmlldzogJ2xpc3QnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDI1MCxcclxuXHRcdFx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0XHRcdGRhdGE6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd09sZGVzdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ09sZGVzdCBib29rcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd05ld2VzdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ05ld2VzdCBib29rcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd01vc3RQYWdlc0Jvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ01vc3QgcGFnZXMgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dCb29rc1dpdGhMb25nTmFtZXMnLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAnQm9va3Mgd2l0aCBsb25nZXN0IG5hbWVzJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdG9uOiB7XHJcblx0XHRcdFx0XHRcdG9uSXRlbUNsaWNrOiBpZCA9PiB0aGlzW2lkXSgpXHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYm9va3NUb3AnLFxyXG5cdFx0XHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ2Jvb2tfdGl0bGUnLFxyXG5cdFx0XHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyOiAnVGl0bGUnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ2F1dGhvcl9uYW1lJyxcclxuXHRcdFx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdFx0XHRcdGhlYWRlcjogJ0F1dGhvcidcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnZ2VucmVzJyxcclxuXHRcdFx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyOiAnR2VucmVzJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdjb3VudHJ5X29mX3B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyOiAnQ291bnRyeSdcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAneWVhcl9vZl9wdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0XHRcdFx0c29ydDogJ2RhdGUnLFxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdGZvcm1hdDogd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWVwiKSxcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXI6ICdZZWFyJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdudW1iZXJfb2ZfcGFnZXMnLFxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA2MFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZ3JpZCA9ICQkKCdib29rc1RvcCcpO1xyXG5cdFx0Ym9va3NNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRsZXQgYm9va3NBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cdFx0XHRib29rc0FyciA9IGJvb2tzQXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0XHRlbC55ZWFyX29mX3B1YmxpY2F0aW9uID0gbmV3IERhdGUoZWwueWVhcl9vZl9wdWJsaWNhdGlvbik7XHJcblx0XHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5ib29rc0FyciA9IGJvb2tzQXJyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzaG93T2xkZXN0Qm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gYS55ZWFyX29mX3B1YmxpY2F0aW9uIC0gYi55ZWFyX29mX3B1YmxpY2F0aW9uO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnNob3dSc3VsdHMoZGF0YSk7XHJcblx0fVxyXG5cclxuXHRzaG93TmV3ZXN0Qm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gYi55ZWFyX29mX3B1YmxpY2F0aW9uIC0gYS55ZWFyX29mX3B1YmxpY2F0aW9uO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnNob3dSc3VsdHMoZGF0YSk7XHJcblx0fVxyXG5cclxuXHRzaG93TW9zdFBhZ2VzQm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gYi5udW1iZXJfb2ZfcGFnZXMgLSBhLm51bWJlcl9vZl9wYWdlcztcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zaG93UnN1bHRzKGRhdGEpO1xyXG5cdH1cclxuXHJcblx0c2hvd0Jvb2tzV2l0aExvbmdOYW1lcygpIHtcclxuXHRcdGxldCBkYXRhID0gWy4uLnRoaXMuYm9va3NBcnJdO1xyXG5cdFx0ZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRcdHJldHVybiBiLmJvb2tfdGl0bGUubGVuZ3RoIC0gYS5ib29rX3RpdGxlLmxlbmd0aDtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zaG93UnN1bHRzKGRhdGEpO1xyXG5cdH1cclxuXHJcblx0c2hvd1JzdWx0cyhkYXRhKSB7XHJcblx0XHRkYXRhID0gZGF0YS5zbGljZSgwLCAxMCk7XHJcblx0XHR0aGlzLmdyaWQucGFyc2UoZGF0YSk7XHJcblx0XHR0aGlzLmdyaWQuc2hvdygpO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlclBhZ2UgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IHJlZ2lzdGVyRm9ybSA9IHtcclxuXHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRsb2NhbElkOiAncmVnaXN0ZXJGb3JtJyxcclxuXHRcdFx0d2lkdGg6IDMwMCxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdVZXJuYW1lJywgbmFtZTogJ3VzZXJuYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCB0eXBlOiAncGFzc3dvcmQnLCBsYWJlbDogJ1Bhc3N3b3JkJywgbmFtZTogJ3Bhc3N3b3JkJyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1hcmdpbjogNSwgY29sczogW1xyXG5cdFx0XHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLCBsb2NhbElkOiAncmVnaXN0ZXJCdG4nLCB2YWx1ZTogJ1JlZ2lzdGVyJywgdHlwZTogJ2Zvcm0nXHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHR7fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHRyZWdpc3RlckZvcm0sXHJcblx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e31cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLiQkKCdyZWdpc3RlckJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy4kJCgncmVnaXN0ZXJGb3JtJykuZ2V0VmFsdWVzKCk7XHJcblx0XHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdFx0YXV0aG9yaXphdGlvbi5yZWdpc3Rlcih2YWx1ZXMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc3RhdHVzID0gcmVzcG9uc2UuanNvbigpLnN0YXR1cztcclxuXHRcdFx0XHRjb25zdCBpZCA9IHJlc3BvbnNlLmpzb24oKS5pZDtcclxuXHRcdFx0XHRpZiAoc3RhdHVzID09PSAyKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3coYHJlYWRlci5pbmRleD9pZD0ke2lkfS9yZWFkZXIubWFpbmApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGlmKHJlc3BvbnNlLmpzb24oKS5yZWFzb24gPT09ICd1c2VyRXhpc3QnKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR3ZWJpeC5tZXNzYWdlKHJlc3BvbnNlLmpzb24oKS5kYXRhKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==