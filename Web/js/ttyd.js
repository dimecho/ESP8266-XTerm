! function(e) {
    var t = {};

    function r(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(i, n, function(t) {
                return e[t]
            }.bind(null, n));
        return i
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 96)
}([function(e, t, r) {
    ! function(e) {
        "use strict";
        var t = function() {},
            r = {},
            i = [],
            n = [];

        function o(e, o) {
            var s = n,
                a = void 0,
                l = void 0,
                h = void 0,
                c = void 0;
            for (c = arguments.length; c-- > 2;) i.push(arguments[c]);
            for (o && null != o.children && (i.length || i.push(o.children), delete o.children); i.length;)
                if ((l = i.pop()) && void 0 !== l.pop)
                    for (c = l.length; c--;) i.push(l[c]);
                else "boolean" == typeof l && (l = null), (h = "function" != typeof e) && (null == l ? l = "" : "number" == typeof l ? l = String(l) : "string" != typeof l && (h = !1)), h && a ? s[s.length - 1] += l : s === n ? s = [l] : s.push(l), a = h;
            var u = new t;
            return u.nodeName = e, u.children = s, u.attributes = null == o ? void 0 : o, u.key = null == o ? void 0 : o.key, void 0 !== r.vnode && r.vnode(u), u
        }

        function s(e, t) {
            for (var r in t) e[r] = t[r];
            return e
        }

        function a(e, t) {
            e && ("function" == typeof e ? e(t) : e.current = t)
        }
        var l = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

        function h(e, t) {
            return o(e.nodeName, s(s({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
        }
        var c = 0,
            u = 1,
            f = 2,
            _ = 3,
            d = "__preactattr_",
            p = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
            m = [];

        function y(e) {
            !e._dirty && (e._dirty = !0) && 1 == m.push(e) && (r.debounceRendering || l)(g)
        }

        function g() {
            for (var e = void 0; e = m.pop();) e._dirty && P(e)
        }

        function v(e, t, r) {
            return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && b(e, t.nodeName) : r || e._componentConstructor === t.nodeName
        }

        function b(e, t) {
            return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function C(e) {
            var t = s({}, e.attributes);
            t.children = e.children;
            var r = e.nodeName.defaultProps;
            if (void 0 !== r)
                for (var i in r) void 0 === t[i] && (t[i] = r[i]);
            return t
        }

        function w(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function S(e, t, r, i, n) {
            if ("className" === t && (t = "class"), "key" === t);
            else if ("ref" === t) a(r, null), a(i, e);
            else if ("class" !== t || n)
                if ("style" === t) {
                    if (i && "string" != typeof i && "string" != typeof r || (e.style.cssText = i || ""), i && "object" == typeof i) {
                        if ("string" != typeof r)
                            for (var o in r) o in i || (e.style[o] = "");
                        for (var s in i) e.style[s] = "number" == typeof i[s] && !1 === p.test(s) ? i[s] + "px" : i[s]
                    }
                } else if ("dangerouslySetInnerHTML" === t) i && (e.innerHTML = i.__html || "");
            else if ("o" == t[0] && "n" == t[1]) {
                var l = t !== (t = t.replace(/Capture$/, ""));
                t = t.toLowerCase().substring(2), i ? r || e.addEventListener(t, E, l) : e.removeEventListener(t, E, l), (e._listeners || (e._listeners = {}))[t] = i
            } else if ("list" !== t && "type" !== t && !n && t in e) {
                try {
                    e[t] = null == i ? "" : i
                } catch (e) {}
                null != i && !1 !== i || "spellcheck" == t || e.removeAttribute(t)
            } else {
                var h = n && t !== (t = t.replace(/^xlink:?/, ""));
                null == i || !1 === i ? h ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof i && (h ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), i) : e.setAttribute(t, i))
            } else e.className = i || ""
        }

        function E(e) {
            return this._listeners[e.type](r.event && r.event(e) || e)
        }
        var x = [],
            A = 0,
            L = !1,
            k = !1;

        function T() {
            for (var e = void 0; e = x.shift();) r.afterMount && r.afterMount(e), e.componentDidMount && e.componentDidMount()
        }

        function R(e, t, r, i, n, o) {
            A++ || (L = null != n && void 0 !== n.ownerSVGElement, k = null != e && !(d in e));
            var s = function e(t, r, i, n, o) {
                var s = t,
                    a = L;
                if (null != r && "boolean" != typeof r || (r = ""), "string" == typeof r || "number" == typeof r) return t && void 0 !== t.splitText && t.parentNode && (!t._component || o) ? t.nodeValue != r && (t.nodeValue = r) : (s = document.createTextNode(r), t && (t.parentNode && t.parentNode.replaceChild(s, t), M(t, !0))), s[d] = !0, s;
                var l, h, c = r.nodeName;
                if ("function" == typeof c) return function(e, t, r, i) {
                    for (var n = e && e._component, o = n, s = e, a = n && e._componentConstructor === t.nodeName, l = a, h = C(t); n && !l && (n = n._parentComponent);) l = n.constructor === t.nodeName;
                    return n && l && (!i || n._component) ? (B(n, h, _, r, i), e = n.base) : (o && !a && (F(o), e = s = null), n = H(t.nodeName, h, r), e && !n.nextBase && (n.nextBase = e, s = null), B(n, h, u, r, i), e = n.base, s && e !== s && (s._component = null, M(s, !1))), e
                }(t, r, i, n);
                if (L = "svg" === c || "foreignObject" !== c && L, c = String(c), (!t || !b(t, c)) && (l = c, (h = L ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l)).normalizedNodeName = l, s = h, t)) {
                    for (; t.firstChild;) s.appendChild(t.firstChild);
                    t.parentNode && t.parentNode.replaceChild(s, t), M(t, !0)
                }
                var f = s.firstChild,
                    p = s[d],
                    m = r.children;
                if (null == p) {
                    p = s[d] = {};
                    for (var y = s.attributes, g = y.length; g--;) p[y[g].name] = y[g].value
                }
                return !k && m && 1 === m.length && "string" == typeof m[0] && null != f && void 0 !== f.splitText && null == f.nextSibling ? f.nodeValue != m[0] && (f.nodeValue = m[0]) : (m && m.length || null != f) && function(t, r, i, n, o) {
                        var s = t.childNodes,
                            a = [],
                            l = {},
                            h = 0,
                            c = 0,
                            u = s.length,
                            f = 0,
                            _ = r ? r.length : 0,
                            p = void 0,
                            m = void 0,
                            y = void 0,
                            g = void 0,
                            b = void 0;
                        if (0 !== u)
                            for (var C = 0; C < u; C++) {
                                var S = s[C],
                                    E = S[d],
                                    x = _ && E ? S._component ? S._component.__key : E.key : null;
                                null != x ? (h++, l[x] = S) : (E || (void 0 !== S.splitText ? !o || S.nodeValue.trim() : o)) && (a[f++] = S)
                            }
                        if (0 !== _)
                            for (var A = 0; A < _; A++) {
                                g = r[A], b = null;
                                var L = g.key;
                                if (null != L) h && void 0 !== l[L] && (b = l[L], l[L] = void 0, h--);
                                else if (c < f)
                                    for (p = c; p < f; p++)
                                        if (void 0 !== a[p] && v(m = a[p], g, o)) {
                                            b = m, a[p] = void 0, p === f - 1 && f--, p === c && c++;
                                            break
                                        } b = e(b, g, i, n), y = s[A], b && b !== t && b !== y && (null == y ? t.appendChild(b) : b === y.nextSibling ? w(y) : t.insertBefore(b, y))
                            }
                        if (h)
                            for (var k in l) void 0 !== l[k] && M(l[k], !1);
                        for (; c <= f;) void 0 !== (b = a[f--]) && M(b, !1)
                    }(s, m, i, n, k || null != p.dangerouslySetInnerHTML),
                    function(e, t, r) {
                        var i = void 0;
                        for (i in r) t && null != t[i] || null == r[i] || S(e, i, r[i], r[i] = void 0, L);
                        for (i in t) "children" === i || "innerHTML" === i || i in r && t[i] === ("value" === i || "checked" === i ? e[i] : r[i]) || S(e, i, r[i], r[i] = t[i], L)
                    }(s, r.attributes, p), L = a, s
            }(e, t, r, i, o);
            return n && s.parentNode !== n && n.appendChild(s), --A || (k = !1, o || T()), s
        }

        function M(e, t) {
            var r = e._component;
            r ? F(r) : (null != e[d] && a(e[d].ref, null), !1 !== t && null != e[d] || w(e), D(e))
        }

        function D(e) {
            for (e = e.lastChild; e;) {
                var t = e.previousSibling;
                M(e, !0), e = t
            }
        }
        var O = [];

        function H(e, t, r) {
            var i = void 0,
                n = O.length;
            for (e.prototype && e.prototype.render ? (i = new e(t, r), N.call(i, t, r)) : ((i = new N(t, r)).constructor = e, i.render = I); n--;)
                if (O[n].constructor === e) return i.nextBase = O[n].nextBase, O.splice(n, 1), i;
            return i
        }

        function I(e, t, r) {
            return this.constructor(e, r)
        }

        function B(e, t, i, n, o) {
            e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || o ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, n)), n && n !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = n), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, i !== c && (i !== u && !1 === r.syncComponentUpdates && e.base ? y(e) : P(e, u, o)), a(e.__ref, e))
        }

        function P(e, t, i, n) {
            if (!e._disable) {
                var o = e.props,
                    a = e.state,
                    l = e.context,
                    h = e.prevProps || o,
                    _ = e.prevState || a,
                    d = e.prevContext || l,
                    p = e.base,
                    m = e.nextBase,
                    y = p || m,
                    g = e._component,
                    v = !1,
                    b = d,
                    w = void 0,
                    S = void 0,
                    E = void 0;
                if (e.constructor.getDerivedStateFromProps && (a = s(s({}, a), e.constructor.getDerivedStateFromProps(o, a)), e.state = a), p && (e.props = h, e.state = _, e.context = d, t !== f && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(o, a, l) ? v = !0 : e.componentWillUpdate && e.componentWillUpdate(o, a, l), e.props = o, e.state = a, e.context = l), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !v) {
                    w = e.render(o, a, l), e.getChildContext && (l = s(s({}, l), e.getChildContext())), p && e.getSnapshotBeforeUpdate && (b = e.getSnapshotBeforeUpdate(h, _));
                    var L = w && w.nodeName,
                        k = void 0,
                        D = void 0;
                    if ("function" == typeof L) {
                        var O = C(w);
                        (S = g) && S.constructor === L && O.key == S.__key ? B(S, O, u, l, !1) : (k = S, e._component = S = H(L, O, l), S.nextBase = S.nextBase || m, S._parentComponent = e, B(S, O, c, l, !1), P(S, u, i, !0)), D = S.base
                    } else E = y, (k = g) && (E = e._component = null), (y || t === u) && (E && (E._component = null), D = R(E, w, l, i || !p, y && y.parentNode, !0));
                    if (y && D !== y && S !== g) {
                        var I = y.parentNode;
                        I && D !== I && (I.replaceChild(D, y), k || (y._component = null, M(y, !1)))
                    }
                    if (k && F(k), e.base = D, D && !n) {
                        for (var N = e, j = e; j = j._parentComponent;)(N = j).base = D;
                        D._component = N, D._componentConstructor = N.constructor
                    }
                }
                for (!p || i ? x.push(e) : v || (e.componentDidUpdate && e.componentDidUpdate(h, _, b), r.afterUpdate && r.afterUpdate(e)); e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
                A || n || T()
            }
        }

        function F(e) {
            r.beforeUnmount && r.beforeUnmount(e);
            var t = e.base;
            e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
            var i = e._component;
            i ? F(i) : t && (null != t[d] && a(t[d].ref, null), e.nextBase = t, w(t), O.push(e), D(t)), a(e.__ref, null)
        }

        function N(e, t) {
            this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, this._renderCallbacks = []
        }

        function j(e, t, r) {
            return R(r, e, {}, !1, t, !1)
        }

        function W() {
            return {}
        }
        s(N.prototype, {
            setState: function(e, t) {
                this.prevState || (this.prevState = this.state), this.state = s(s({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), t && this._renderCallbacks.push(t), y(this)
            },
            forceUpdate: function(e) {
                e && this._renderCallbacks.push(e), P(this, f)
            },
            render: function() {}
        });
        var U = {
            h: o,
            createElement: o,
            cloneElement: h,
            createRef: W,
            Component: N,
            render: j,
            rerender: g,
            options: r
        };
        e.default = U, e.h = o, e.createElement = o, e.cloneElement = h, e.createRef = W, e.Component = N, e.render = j, e.rerender = g, e.options = r, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }(t)
}, function(e, t, r) {
    var i, n;
    void 0 === (n = "function" == typeof(i = function(e) {
        "use strict";
        e.__esModule = !0;
        var t = {},
            r = Object.prototype.hasOwnProperty,
            i = function(e) {
                var i = arguments.length <= 1 || void 0 === arguments[1] ? t : arguments[1],
                    n = i.cache || {};
                return function() {
                    for (var t = arguments.length, o = Array(t), s = 0; s < t; s++) o[s] = arguments[s];
                    var a = String(o[0]);
                    return !1 === i.caseSensitive && (a = a.toLowerCase()), r.call(n, a) ? n[a] : n[a] = e.apply(this, o)
                }
            },
            n = function(e, t) {
                if ("function" == typeof t) {
                    var r = e;
                    e = t, t = r
                }
                var i = t && t.delay || t || 0,
                    n = void 0,
                    o = void 0,
                    s = void 0;
                return function() {
                    for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                    n = r, o = this, s || (s = setTimeout(function() {
                        e.apply(o, n), n = o = s = null
                    }, i))
                }
            },
            o = function(e, t, r) {
                var i = r.value;
                return {
                    configurable: !0,
                    get: function() {
                        var e = i.bind(this);
                        return Object.defineProperty(this, t, {
                            value: e,
                            configurable: !0,
                            writable: !0
                        }), e
                    }
                }
            },
            s = h(i),
            a = h(n),
            l = h(function(e, t) {
                return e.bind(t)
            }, function() {
                return o
            });

        function h(e, t) {
            var r, i = (t = t || e.decorate || (r = e, function(e) {
                return "function" == typeof e ? r(e) : function(t, i, n) {
                    n.value = r(n.value, e, t, i, n)
                }
            }))();
            return function() {
                for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                var s = n.length;
                return (s < 2 ? t : s > 2 ? i : e).apply(void 0, n)
            }
        }
        e.memoize = s, e.debounce = a, e.bind = l, e.default = {
            memoize: s,
            debounce: a,
            bind: l
        }
    }) ? i.apply(t, [t]) : i) || (e.exports = n)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            this._disposables = [], this._isDisposed = !1
        }
        return e.prototype.dispose = function() {
            this._isDisposed = !0, this._disposables.forEach(function(e) {
                return e.dispose()
            }), this._disposables.length = 0
        }, e.prototype.register = function(e) {
            this._disposables.push(e)
        }, e.prototype.unregister = function(e) {
            var t = this._disposables.indexOf(e); - 1 !== t && this._disposables.splice(t, 1)
        }, e
    }();
    t.Disposable = i
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(17),
        s = r(11);
    t.DEFAULT_ATTR = 256 | s.DEFAULT_COLOR << 9, t.CHAR_DATA_ATTR_INDEX = 0, t.CHAR_DATA_CHAR_INDEX = 1, t.CHAR_DATA_WIDTH_INDEX = 2, t.CHAR_DATA_CODE_INDEX = 3, t.NULL_CELL_CHAR = "", t.NULL_CELL_WIDTH = 1, t.NULL_CELL_CODE = 0, t.WHITESPACE_CELL_CHAR = " ", t.WHITESPACE_CELL_WIDTH = 1, t.WHITESPACE_CELL_CODE = 32;
    var a = 3,
        l = function() {
            function e() {
                this.fg = 0, this.bg = 0
            }
            return e.toColorRGB = function(e) {
                return [e >>> 16 & 255, e >>> 8 & 255, 255 & e]
            }, e.fromColorRGB = function(e) {
                return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2]
            }, e.prototype.clone = function() {
                var t = new e;
                return t.fg = this.fg, t.bg = this.bg, t
            }, e.prototype.isInverse = function() {
                return 67108864 & this.fg
            }, e.prototype.isBold = function() {
                return 134217728 & this.fg
            }, e.prototype.isUnderline = function() {
                return 268435456 & this.fg
            }, e.prototype.isBlink = function() {
                return 536870912 & this.fg
            }, e.prototype.isInvisible = function() {
                return 1073741824 & this.fg
            }, e.prototype.isItalic = function() {
                return 67108864 & this.bg
            }, e.prototype.isDim = function() {
                return 134217728 & this.bg
            }, e.prototype.getFgColorMode = function() {
                return 50331648 & this.fg
            }, e.prototype.getBgColorMode = function() {
                return 50331648 & this.bg
            }, e.prototype.isFgRGB = function() {
                return 50331648 == (50331648 & this.fg)
            }, e.prototype.isBgRGB = function() {
                return 50331648 == (50331648 & this.bg)
            }, e.prototype.isFgPalette = function() {
                return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg)
            }, e.prototype.isBgPalette = function() {
                return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg)
            }, e.prototype.isFgDefault = function() {
                return 0 == (50331648 & this.fg)
            }, e.prototype.isBgDefault = function() {
                return 0 == (50331648 & this.bg)
            }, e.prototype.getFgColor = function() {
                switch (50331648 & this.fg) {
                    case 16777216:
                    case 33554432:
                        return 255 & this.fg;
                    case 50331648:
                        return 16777215 & this.fg;
                    default:
                        return -1
                }
            }, e.prototype.getBgColor = function() {
                switch (50331648 & this.bg) {
                    case 16777216:
                    case 33554432:
                        return 255 & this.bg;
                    case 50331648:
                        return 16777215 & this.bg;
                    default:
                        return -1
                }
            }, e
        }();
    t.AttributeData = l, t.DEFAULT_ATTR_DATA = Object.freeze(new l);
    var h = function(e) {
        function r() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.content = 0, t.fg = 0, t.bg = 0, t.combinedData = "", t
        }
        return n(r, e), r.fromCharData = function(e) {
            var t = new r;
            return t.setFromCharData(e), t
        }, r.prototype.isCombined = function() {
            return 2097152 & this.content
        }, r.prototype.getWidth = function() {
            return this.content >> 22
        }, r.prototype.getChars = function() {
            return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? o.stringFromCodePoint(2097151 & this.content) : ""
        }, r.prototype.getCode = function() {
            return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content
        }, r.prototype.setFromCharData = function(e) {
            this.fg = e[t.CHAR_DATA_ATTR_INDEX], this.bg = 0;
            var r = !1;
            if (e[t.CHAR_DATA_CHAR_INDEX].length > 2) r = !0;
            else if (2 === e[t.CHAR_DATA_CHAR_INDEX].length) {
                var i = e[t.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                if (55296 <= i && i <= 56319) {
                    var n = e[t.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                    56320 <= n && n <= 57343 ? this.content = 1024 * (i - 55296) + n - 56320 + 65536 | e[t.CHAR_DATA_WIDTH_INDEX] << 22 : r = !0
                } else r = !0
            } else this.content = e[t.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e[t.CHAR_DATA_WIDTH_INDEX] << 22;
            r && (this.combinedData = e[t.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e[t.CHAR_DATA_WIDTH_INDEX] << 22)
        }, r.prototype.getAsCharData = function() {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()]
        }, r
    }(l);
    t.CellData = h;
    var c = function() {
        function e(e, r, i) {
            void 0 === i && (i = !1), this.isWrapped = i, this._combined = {}, this._data = new Uint32Array(e * a);
            for (var n = r || h.fromCharData([0, t.NULL_CELL_CHAR, t.NULL_CELL_WIDTH, t.NULL_CELL_CODE]), o = 0; o < e; ++o) this.setCell(o, n);
            this.length = e
        }
        return e.prototype.get = function(e) {
            var t = this._data[e * a + 0],
                r = 2097151 & t;
            return [this._data[e * a + 1], 2097152 & t ? this._combined[e] : r ? o.stringFromCodePoint(r) : "", t >> 22, 2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : r]
        }, e.prototype.set = function(e, r) {
            this._data[e * a + 1] = r[t.CHAR_DATA_ATTR_INDEX], r[t.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e] = r[1], this._data[e * a + 0] = 2097152 | e | r[t.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[e * a + 0] = r[t.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | r[t.CHAR_DATA_WIDTH_INDEX] << 22
        }, e.prototype.getWidth = function(e) {
            return this._data[e * a + 0] >> 22
        }, e.prototype.hasWidth = function(e) {
            return 12582912 & this._data[e * a + 0]
        }, e.prototype.getFg = function(e) {
            return this._data[e * a + 1]
        }, e.prototype.getBg = function(e) {
            return this._data[e * a + 2]
        }, e.prototype.hasContent = function(e) {
            return 4194303 & this._data[e * a + 0]
        }, e.prototype.getCodePoint = function(e) {
            var t = this._data[e * a + 0];
            return 2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : 2097151 & t
        }, e.prototype.isCombined = function(e) {
            return 2097152 & this._data[e * a + 0]
        }, e.prototype.getString = function(e) {
            var t = this._data[e * a + 0];
            return 2097152 & t ? this._combined[e] : 2097151 & t ? o.stringFromCodePoint(2097151 & t) : ""
        }, e.prototype.loadCell = function(e, t) {
            var r = e * a;
            return t.content = this._data[r + 0], t.fg = this._data[r + 1], t.bg = this._data[r + 2], 2097152 & t.content && (t.combinedData = this._combined[e]), t
        }, e.prototype.setCell = function(e, t) {
            2097152 & t.content && (this._combined[e] = t.combinedData), this._data[e * a + 0] = t.content, this._data[e * a + 1] = t.fg, this._data[e * a + 2] = t.bg
        }, e.prototype.setCellFromCodePoint = function(e, t, r, i, n) {
            this._data[e * a + 0] = t | r << 22, this._data[e * a + 1] = i, this._data[e * a + 2] = n
        }, e.prototype.addCodepointToCell = function(e, t) {
            var r = this._data[e * a + 0];
            2097152 & r ? this._combined[e] += o.stringFromCodePoint(t) : (2097151 & r ? (this._combined[e] = o.stringFromCodePoint(2097151 & r) + o.stringFromCodePoint(t), r &= -2097152, r |= 2097152) : r = t | 1 << 22, this._data[e * a + 0] = r)
        }, e.prototype.insertCells = function(e, t, r) {
            if (e %= this.length, t < this.length - e) {
                for (var i = new h, n = this.length - e - t - 1; n >= 0; --n) this.setCell(e + t + n, this.loadCell(e + n, i));
                for (n = 0; n < t; ++n) this.setCell(e + n, r)
            } else
                for (n = e; n < this.length; ++n) this.setCell(n, r)
        }, e.prototype.deleteCells = function(e, t, r) {
            if (e %= this.length, t < this.length - e) {
                for (var i = new h, n = 0; n < this.length - e - t; ++n) this.setCell(e + n, this.loadCell(e + t + n, i));
                for (n = this.length - t; n < this.length; ++n) this.setCell(n, r)
            } else
                for (n = e; n < this.length; ++n) this.setCell(n, r)
        }, e.prototype.replaceCells = function(e, t, r) {
            for (; e < t && e < this.length;) this.setCell(e++, r)
        }, e.prototype.resize = function(e, t) {
            if (e !== this.length) {
                if (e > this.length) {
                    var r = new Uint32Array(e * a);
                    this.length && (e * a < this._data.length ? r.set(this._data.subarray(0, e * a)) : r.set(this._data)), this._data = r;
                    for (var i = this.length; i < e; ++i) this.setCell(i, t)
                } else if (e) {
                    (r = new Uint32Array(e * a)).set(this._data.subarray(0, e * a)), this._data = r;
                    var n = Object.keys(this._combined);
                    for (i = 0; i < n.length; i++) {
                        var o = parseInt(n[i], 10);
                        o >= e && delete this._combined[o]
                    }
                } else this._data = new Uint32Array(0), this._combined = {};
                this.length = e
            }
        }, e.prototype.fill = function(e) {
            this._combined = {};
            for (var t = 0; t < this.length; ++t) this.setCell(t, e)
        }, e.prototype.copyFrom = function(e) {
            for (var t in this.length !== e.length ? this._data = new Uint32Array(e._data) : this._data.set(e._data), this.length = e.length, this._combined = {}, e._combined) this._combined[t] = e._combined[t];
            this.isWrapped = e.isWrapped
        }, e.prototype.clone = function() {
            var t = new e(0);
            for (var r in t._data = new Uint32Array(this._data), t.length = this.length, this._combined) t._combined[r] = this._combined[r];
            return t.isWrapped = this.isWrapped, t
        }, e.prototype.getTrimmedLength = function() {
            for (var e = this.length - 1; e >= 0; --e)
                if (4194303 & this._data[e * a + 0]) return e + (this._data[e * a + 0] >> 22);
            return 0
        }, e.prototype.copyCellsFrom = function(e, t, r, i, n) {
            var o = e._data;
            if (n)
                for (var s = i - 1; s >= 0; s--)
                    for (var l = 0; l < a; l++) this._data[(r + s) * a + l] = o[(t + s) * a + l];
            else
                for (s = 0; s < i; s++)
                    for (l = 0; l < a; l++) this._data[(r + s) * a + l] = o[(t + s) * a + l];
            var h = Object.keys(e._combined);
            for (l = 0; l < h.length; l++) {
                var c = parseInt(h[l], 10);
                c >= t && (this._combined[c - t + r] = e._combined[c])
            }
        }, e.prototype.translateToString = function(e, r, i) {
            void 0 === e && (e = !1), void 0 === r && (r = 0), void 0 === i && (i = this.length), e && (i = Math.min(i, this.getTrimmedLength()));
            for (var n = ""; r < i;) {
                var s = this._data[r * a + 0],
                    l = 2097151 & s;
                n += 2097152 & s ? this._combined[r] : l ? o.stringFromCodePoint(l) : t.WHITESPACE_CELL_CHAR, r += s >> 22 || 1
            }
            return n
        }, e
    }();
    t.BufferLine = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            this._listeners = []
        }
        return Object.defineProperty(e.prototype, "event", {
            get: function() {
                var e = this;
                return this._event || (this._event = function(t) {
                    return e._listeners.push(t), {
                        dispose: function() {
                            for (var r = 0; r < e._listeners.length; r++)
                                if (e._listeners[r] === t) return void e._listeners.splice(r, 1)
                        }
                    }
                }), this._event
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.fire = function(e) {
            for (var t = [], r = 0; r < this._listeners.length; r++) t.push(this._listeners[r]);
            for (r = 0; r < t.length; r++) t[r].call(void 0, e)
        }, e
    }();
    t.EventEmitter2 = i
}, function(e, t, r) {
    (function(e) {
        var i = Object.getOwnPropertyDescriptors || function(e) {
                for (var t = Object.keys(e), r = {}, i = 0; i < t.length; i++) r[t[i]] = Object.getOwnPropertyDescriptor(e, t[i]);
                return r
            },
            n = /%[sdj%]/g;
        t.format = function(e) {
            if (!y(e)) {
                for (var t = [], r = 0; r < arguments.length; r++) t.push(a(arguments[r]));
                return t.join(" ")
            }
            r = 1;
            for (var i = arguments, o = i.length, s = String(e).replace(n, function(e) {
                    if ("%%" === e) return "%";
                    if (r >= o) return e;
                    switch (e) {
                        case "%s":
                            return String(i[r++]);
                        case "%d":
                            return Number(i[r++]);
                        case "%j":
                            try {
                                return JSON.stringify(i[r++])
                            } catch (e) {
                                return "[Circular]"
                            }
                            default:
                                return e
                    }
                }), l = i[r]; r < o; l = i[++r]) p(l) || !b(l) ? s += " " + l : s += " " + a(l);
            return s
        }, t.deprecate = function(r, i) {
            if (void 0 !== e && !0 === e.noDeprecation) return r;
            if (void 0 === e) return function() {
                return t.deprecate(r, i).apply(this, arguments)
            };
            var n = !1;
            return function() {
                if (!n) {
                    if (e.throwDeprecation) throw new Error(i);
                    e.traceDeprecation ? console.trace(i) : console.error(i), n = !0
                }
                return r.apply(this, arguments)
            }
        };
        var o, s = {};

        function a(e, r) {
            var i = {
                seen: [],
                stylize: h
            };
            return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), d(r) ? i.showHidden = r : r && t._extend(i, r), g(i.showHidden) && (i.showHidden = !1), g(i.depth) && (i.depth = 2), g(i.colors) && (i.colors = !1), g(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = l), c(i, e, i.depth)
        }

        function l(e, t) {
            var r = a.styles[t];
            return r ? "[" + a.colors[r][0] + "m" + e + "[" + a.colors[r][1] + "m" : e
        }

        function h(e, t) {
            return e
        }

        function c(e, r, i) {
            if (e.customInspect && r && S(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                var n = r.inspect(i, e);
                return y(n) || (n = c(e, n, i)), n
            }
            var o = function(e, t) {
                if (g(t)) return e.stylize("undefined", "undefined");
                if (y(t)) {
                    var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(r, "string")
                }
                return m(t) ? e.stylize("" + t, "number") : d(t) ? e.stylize("" + t, "boolean") : p(t) ? e.stylize("null", "null") : void 0
            }(e, r);
            if (o) return o;
            var s = Object.keys(r),
                a = function(e) {
                    var t = {};
                    return s.forEach(function(e, r) {
                        t[e] = !0
                    }), t
                }();
            if (e.showHidden && (s = Object.getOwnPropertyNames(r)), w(r) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return u(r);
            if (0 === s.length) {
                if (S(r)) {
                    var l = r.name ? ": " + r.name : "";
                    return e.stylize("[Function" + l + "]", "special")
                }
                if (v(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                if (C(r)) return e.stylize(Date.prototype.toString.call(r), "date");
                if (w(r)) return u(r)
            }
            var h, b = "",
                E = !1,
                x = ["{", "}"];
            return _(r) && (E = !0, x = ["[", "]"]), S(r) && (b = " [Function" + (r.name ? ": " + r.name : "") + "]"), v(r) && (b = " " + RegExp.prototype.toString.call(r)), C(r) && (b = " " + Date.prototype.toUTCString.call(r)), w(r) && (b = " " + u(r)), 0 !== s.length || E && 0 != r.length ? i < 0 ? v(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r), h = E ? function(e, t, r, i, n) {
                for (var o = [], s = 0, a = t.length; s < a; ++s) L(t, String(s)) ? o.push(f(e, t, r, i, String(s), !0)) : o.push("");
                return n.forEach(function(n) {
                    n.match(/^\d+$/) || o.push(f(e, t, r, i, n, !0))
                }), o
            }(e, r, i, a, s) : s.map(function(t) {
                return f(e, r, i, a, t, E)
            }), e.seen.pop(), function(e, t, r) {
                return e.reduce(function(e, t) {
                    return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1] : r[0] + t + " " + e.join(", ") + " " + r[1]
            }(h, b, x)) : x[0] + b + x[1]
        }

        function u(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }

        function f(e, t, r, i, n, o) {
            var s, a, l;
            if ((l = Object.getOwnPropertyDescriptor(t, n) || {
                    value: t[n]
                }).get ? a = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : l.set && (a = e.stylize("[Setter]", "special")), L(i, n) || (s = "[" + n + "]"), a || (e.seen.indexOf(l.value) < 0 ? (a = p(r) ? c(e, l.value, null) : c(e, l.value, r - 1)).indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(e) {
                    return "  " + e
                }).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) {
                    return "   " + e
                }).join("\n")) : a = e.stylize("[Circular]", "special")), g(s)) {
                if (o && n.match(/^\d+$/)) return a;
                (s = JSON.stringify("" + n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
            }
            return s + ": " + a
        }

        function _(e) {
            return Array.isArray(e)
        }

        function d(e) {
            return "boolean" == typeof e
        }

        function p(e) {
            return null === e
        }

        function m(e) {
            return "number" == typeof e
        }

        function y(e) {
            return "string" == typeof e
        }

        function g(e) {
            return void 0 === e
        }

        function v(e) {
            return b(e) && "[object RegExp]" === E(e)
        }

        function b(e) {
            return "object" == typeof e && null !== e
        }

        function C(e) {
            return b(e) && "[object Date]" === E(e)
        }

        function w(e) {
            return b(e) && ("[object Error]" === E(e) || e instanceof Error)
        }

        function S(e) {
            return "function" == typeof e
        }

        function E(e) {
            return Object.prototype.toString.call(e)
        }

        function x(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }
        t.debuglog = function(r) {
            if (g(o) && (o = e.env.NODE_DEBUG || ""), r = r.toUpperCase(), !s[r])
                if (new RegExp("\\b" + r + "\\b", "i").test(o)) {
                    var i = e.pid;
                    s[r] = function() {
                        var e = t.format.apply(t, arguments);
                        console.error("%s %d: %s", r, i, e)
                    }
                } else s[r] = function() {};
            return s[r]
        }, t.inspect = a, a.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, a.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, t.isArray = _, t.isBoolean = d, t.isNull = p, t.isNullOrUndefined = function(e) {
            return null == e
        }, t.isNumber = m, t.isString = y, t.isSymbol = function(e) {
            return "symbol" == typeof e
        }, t.isUndefined = g, t.isRegExp = v, t.isObject = b, t.isDate = C, t.isError = w, t.isFunction = S, t.isPrimitive = function(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }, t.isBuffer = r(44);
        var A = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function L(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.log = function() {
            var e, r;
            console.log("%s - %s", (r = [x((e = new Date).getHours()), x(e.getMinutes()), x(e.getSeconds())].join(":"), [e.getDate(), A[e.getMonth()], r].join(" ")), t.format.apply(t, arguments))
        }, t.inherits = r(45), t._extend = function(e, t) {
            if (!t || !b(t)) return e;
            for (var r = Object.keys(t), i = r.length; i--;) e[r[i]] = t[r[i]];
            return e
        };
        var k = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

        function T(e, t) {
            if (!e) {
                var r = new Error("Promise was rejected with a falsy value");
                r.reason = e, e = r
            }
            return t(e)
        }
        t.promisify = function(e) {
            if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
            if (k && e[k]) {
                var t;
                if ("function" != typeof(t = e[k])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(t, k, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), t
            }

            function t() {
                for (var t, r, i = new Promise(function(e, i) {
                        t = e, r = i
                    }), n = [], o = 0; o < arguments.length; o++) n.push(arguments[o]);
                n.push(function(e, i) {
                    e ? r(e) : t(i)
                });
                try {
                    e.apply(this, n)
                } catch (e) {
                    r(e)
                }
                return i
            }
            return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), k && Object.defineProperty(t, k, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), Object.defineProperties(t, i(e))
        }, t.promisify.custom = k, t.callbackify = function(t) {
            if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

            function r() {
                for (var r = [], i = 0; i < arguments.length; i++) r.push(arguments[i]);
                var n = r.pop();
                if ("function" != typeof n) throw new TypeError("The last argument must be of type Function");
                var o = this,
                    s = function() {
                        return n.apply(o, arguments)
                    };
                t.apply(this, r).then(function(t) {
                    e.nextTick(s, null, t)
                }, function(t) {
                    e.nextTick(T, t, s)
                })
            }
            return Object.setPrototypeOf(r, Object.getPrototypeOf(t)), Object.defineProperties(r, i(t)), r
        }
    }).call(this, r(43))
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.INVERTED_DEFAULT_COLOR = 257, t.DIM_OPACITY = .5, t.CHAR_ATLAS_CELL_SPACING = 1
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.addDisposableDomListener = function(e, t, r, i) {
        return e.addEventListener(t, r, i), {
            dispose: function() {
                r && e.removeEventListener(t, r, i)
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = "undefined" == typeof navigator,
        n = i ? "node" : navigator.userAgent,
        o = i ? "node" : navigator.platform;

    function s(e, t) {
        return e.indexOf(t) >= 0
    }
    t.isFirefox = !!~n.indexOf("Firefox"), t.isSafari = /^((?!chrome|android).)*safari/i.test(n), t.isMSIE = !!~n.indexOf("MSIE") || !!~n.indexOf("Trident"), t.isMac = s(["Macintosh", "MacIntel", "MacPPC", "Mac68K"], o), t.isIpad = "iPad" === o, t.isIphone = "iPhone" === o, t.isMSWindows = s(["Windows", "Win16", "Win32", "WinCE"], o), t.isLinux = o.indexOf("Linux") >= 0
}, function(e, t, r) {
    "use strict";
    e.exports.ZMLIB = {
        ZDLE: 24,
        XON: 17,
        XOFF: 19,
        ABORT_SEQUENCE: [24, 24, 24, 24, 24],
        strip_ignored_bytes: function(e) {
            for (var t = e.length - 1; t >= 0; t--) switch (e[t]) {
                case 17:
                case 145:
                case 19:
                case 147:
                    e.splice(t, 1);
                    continue
            }
            return e
        },
        find_subarray: function(e, t) {
            var r, i = 0;
            Date.now();
            e: for (; - 1 !== i && -1 !== (i = e.indexOf(t[0], i));) {
                for (r = 1; r < t.length; r++)
                    if (e[i + r] !== t[r]) {
                        i++;
                        continue e
                    } return i
            }
            return -1
        }
    }
}, function(e, t, r) {
    "use strict";
    var i = e.exports;
    const n = {
        aborted: "Session aborted",
        peer_aborted: "Peer aborted session",
        already_aborted: "Session already aborted",
        crc: function(e, t) {
            return this.got = e.slice(0), this.expected = t.slice(0), "CRC check failed! (got: " + e.join() + "; expected: " + t.join() + ")"
        },
        validation: function(e) {
            return e
        }
    };
    i.Error = class extends Error {
        constructor(e) {
            super();
            var t = function(e) {
                const t = n[e];
                switch (typeof t) {
                    case "string":
                        return t;
                    case "function":
                        var r = [].slice.call(arguments).slice(1);
                        return t.apply(this, r)
                }
                return null
            }.apply(this, arguments);
            t ? (this.type = e, this.message = t) : this.message = e
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DEFAULT_COLOR = 256
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e.NUL = "\0", e.SOH = "", e.STX = "", e.ETX = "", e.EOT = "", e.ENQ = "", e.ACK = "", e.BEL = "", e.BS = "\b", e.HT = "\t", e.LF = "\n", e.VT = "\v", e.FF = "\f", e.CR = "\r", e.SO = "", e.SI = "", e.DLE = "", e.DC1 = "", e.DC2 = "", e.DC3 = "", e.DC4 = "", e.NAK = "", e.SYN = "", e.ETB = "", e.CAN = "", e.EM = "", e.SUB = "", e.ESC = "", e.FS = "", e.GS = "", e.RS = "", e.US = "", e.SP = " ", e.DEL = ""
        }(t.C0 || (t.C0 = {})),
        function(e) {
            e.PAD = "", e.HOP = "", e.BPH = "", e.NBH = "", e.IND = "", e.NEL = "", e.SSA = "", e.ESA = "", e.HTS = "", e.HTJ = "", e.VTS = "", e.PLD = "", e.PLU = "", e.RI = "", e.SS2 = "", e.SS3 = "", e.DCS = "", e.PU1 = "", e.PU2 = "", e.STS = "", e.CCH = "", e.MW = "", e.SPA = "", e.EPA = "", e.SOS = "", e.SGCI = "", e.SCI = "", e.CSI = "", e.ST = "", e.OSC = "", e.PM = "", e.APC = ""
        }(t.C1 || (t.C1 = {}))
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(11),
        n = r(6),
        o = r(29),
        s = r(3),
        a = function() {
            function e(e, t, r, i, n) {
                this._container = e, this._alpha = i, this._colors = n, this._scaledCharWidth = 0, this._scaledCharHeight = 0, this._scaledCellWidth = 0, this._scaledCellHeight = 0, this._scaledCharLeft = 0, this._scaledCharTop = 0, this._currentGlyphIdentifier = {
                    chars: "",
                    code: 0,
                    bg: 0,
                    fg: 0,
                    bold: !1,
                    dim: !1,
                    italic: !1
                }, this._canvas = document.createElement("canvas"), this._canvas.classList.add("xterm-" + t + "-layer"), this._canvas.style.zIndex = r.toString(), this._initCanvas(), this._container.appendChild(this._canvas)
            }
            return e.prototype.dispose = function() {
                this._container.removeChild(this._canvas), this._charAtlas && this._charAtlas.dispose()
            }, e.prototype._initCanvas = function() {
                this._ctx = this._canvas.getContext("2d", {
                    alpha: this._alpha
                }), this._alpha || this.clearAll()
            }, e.prototype.onOptionsChanged = function(e) {}, e.prototype.onBlur = function(e) {}, e.prototype.onFocus = function(e) {}, e.prototype.onCursorMove = function(e) {}, e.prototype.onGridChanged = function(e, t, r) {}, e.prototype.onSelectionChanged = function(e, t, r, i) {
                void 0 === i && (i = !1)
            }, e.prototype.setColors = function(e, t) {
                this._refreshCharAtlas(e, t)
            }, e.prototype.setTransparency = function(e, t) {
                if (t !== this._alpha) {
                    var r = this._canvas;
                    this._alpha = t, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, r), this._refreshCharAtlas(e, this._colors), this.onGridChanged(e, 0, e.rows - 1)
                }
            }, e.prototype._refreshCharAtlas = function(e, t) {
                this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0 || (this._charAtlas = o.acquireCharAtlas(e, t, this._scaledCharWidth, this._scaledCharHeight), this._charAtlas.warmUp())
            }, e.prototype.resize = function(e, t) {
                this._scaledCellWidth = t.scaledCellWidth, this._scaledCellHeight = t.scaledCellHeight, this._scaledCharWidth = t.scaledCharWidth, this._scaledCharHeight = t.scaledCharHeight, this._scaledCharLeft = t.scaledCharLeft, this._scaledCharTop = t.scaledCharTop, this._canvas.width = t.scaledCanvasWidth, this._canvas.height = t.scaledCanvasHeight, this._canvas.style.width = t.canvasWidth + "px", this._canvas.style.height = t.canvasHeight + "px", this._alpha || this.clearAll(), this._refreshCharAtlas(e, this._colors)
            }, e.prototype.fillCells = function(e, t, r, i) {
                this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight)
            }, e.prototype.fillBottomLineAtCells = function(e, t, r) {
                void 0 === r && (r = 1), this._ctx.fillRect(e * this._scaledCellWidth, (t + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, r * this._scaledCellWidth, window.devicePixelRatio)
            }, e.prototype.fillLeftLineAtCell = function(e, t) {
                this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, window.devicePixelRatio, this._scaledCellHeight)
            }, e.prototype.strokeRectAtCell = function(e, t, r, i) {
                this._ctx.lineWidth = window.devicePixelRatio, this._ctx.strokeRect(e * this._scaledCellWidth + window.devicePixelRatio / 2, t * this._scaledCellHeight + window.devicePixelRatio / 2, r * this._scaledCellWidth - window.devicePixelRatio, i * this._scaledCellHeight - window.devicePixelRatio)
            }, e.prototype.clearAll = function() {
                this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height))
            }, e.prototype.clearCells = function(e, t, r, i) {
                this._alpha ? this._ctx.clearRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight))
            }, e.prototype.fillCharTrueColor = function(e, t, r, i) {
                this._ctx.font = this._getFont(e, !1, !1), this._ctx.textBaseline = "middle", this._clipRow(e, i), this._ctx.fillText(t.getChars(), r * this._scaledCellWidth + this._scaledCharLeft, i * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2)
            }, e.prototype.drawChars = function(e, t, r, o) {
                var a, l;
                t.isFgRGB() || t.isBgRGB() ? this._drawUncachedChars(e, t, r, o) : (t.isInverse() ? (a = t.isBgDefault() ? n.INVERTED_DEFAULT_COLOR : t.getBgColor(), l = t.isFgDefault() ? n.INVERTED_DEFAULT_COLOR : t.getFgColor()) : (l = t.isBgDefault() ? i.DEFAULT_COLOR : t.getBgColor(), a = t.isFgDefault() ? i.DEFAULT_COLOR : t.getFgColor()), a += e.options.drawBoldTextInBrightColors && t.isBold() && a < 8 && a !== n.INVERTED_DEFAULT_COLOR ? 8 : 0, this._currentGlyphIdentifier.chars = t.getChars() || s.WHITESPACE_CELL_CHAR, this._currentGlyphIdentifier.code = t.getCode() || s.WHITESPACE_CELL_CODE, this._currentGlyphIdentifier.bg = l, this._currentGlyphIdentifier.fg = a, this._currentGlyphIdentifier.bold = t.isBold() && e.options.enableBold, this._currentGlyphIdentifier.dim = !!t.isDim(), this._currentGlyphIdentifier.italic = !!t.isItalic(), this._charAtlas && this._charAtlas.draw(this._ctx, this._currentGlyphIdentifier, r * this._scaledCellWidth + this._scaledCharLeft, o * this._scaledCellHeight + this._scaledCharTop) || this._drawUncachedChars(e, t, r, o))
            }, e.prototype._drawUncachedChars = function(e, t, r, i) {
                if (this._ctx.save(), this._ctx.font = this._getFont(e, t.isBold() && e.options.enableBold, !!t.isItalic()), this._ctx.textBaseline = "middle", t.isInverse()) t.isBgDefault() ? this._ctx.fillStyle = this._colors.background.css : t.isBgRGB() ? this._ctx.fillStyle = "rgb(" + s.AttributeData.toColorRGB(t.getBgColor()).join(",") + ")" : this._ctx.fillStyle = this._colors.ansi[t.getBgColor()].css;
                else if (t.isFgDefault()) this._ctx.fillStyle = this._colors.foreground.css;
                else if (t.isFgRGB()) this._ctx.fillStyle = "rgb(" + s.AttributeData.toColorRGB(t.getFgColor()).join(",") + ")";
                else {
                    var o = t.getFgColor();
                    e.options.drawBoldTextInBrightColors && t.isBold() && o < 8 && (o += 8), this._ctx.fillStyle = this._colors.ansi[o].css
                }
                this._clipRow(e, i), t.isDim() && (this._ctx.globalAlpha = n.DIM_OPACITY), this._ctx.fillText(t.getChars(), r * this._scaledCellWidth + this._scaledCharLeft, i * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2), this._ctx.restore()
            }, e.prototype._clipRow = function(e, t) {
                this._ctx.beginPath(), this._ctx.rect(0, t * this._scaledCellHeight, e.cols * this._scaledCellWidth, this._scaledCellHeight), this._ctx.clip()
            }, e.prototype._getFont = function(e, t, r) {
                return (r ? "italic" : "") + " " + (t ? e.options.fontWeightBold : e.options.fontWeight) + " " + e.options.fontSize * window.devicePixelRatio + "px " + e.options.fontFamily
            }, e
        }();
    t.BaseRenderLayer = a
}, function(e, t, r) {
    "use strict";
    var i = e.exports;

    function n(e) {
        if (e.aborted()) throw new i.Error("aborted")
    }
    window.Zmodem = i, Object.assign(i, r(85)), i.Browser = {
        send_files: function(e, t, r) {
            r || (r = {});
            for (var i = [], o = 0, s = t.length - 1; s >= 0; s--) {
                var a = t[s];
                o += a.size, i[s] = {
                    obj: a,
                    name: a.name,
                    size: a.size,
                    mtime: new Date(a.lastModified),
                    files_remaining: t.length - s,
                    bytes_remaining: o
                }
            }
            var l = 0;
            return function t() {
                var o = i[l];
                return o ? (l++, e.send_offer(o).then(function(i) {
                    return r.on_offer_response && r.on_offer_response(o.obj, i), void 0 === i ? t() : new Promise(function(s) {
                        var a, l = new FileReader;
                        l.onerror = function(e) {
                            throw console.error("file read error", e), "File read error: " + e
                        }, l.onprogress = function(t) {
                            t.target.result && (a = new Uint8Array(t.target.result, i.get_offset()), n(e), i.send(a), r.on_progress && r.on_progress(o.obj, i, a))
                        }, l.onload = function(l) {
                            a = new Uint8Array(l.target.result, i, a), n(e), i.end(a).then(function() {
                                r.on_progress && a.length && r.on_progress(o.obj, i, a), r.on_file_complete && r.on_file_complete(o.obj, i), s(t())
                            })
                        }, l.readAsArrayBuffer(o.obj)
                    })
                })) : Promise.resolve()
            }()
        },
        save_to_disk: function(e, t) {
            var r = new Blob(e),
                i = URL.createObjectURL(r),
                n = document.createElement("a");
            n.style.display = "none", n.href = i, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
        }
    }
}, function(e, t, r) {
    "use strict";
    var i, n = "object" == typeof Reflect ? Reflect : null,
        o = n && "function" == typeof n.apply ? n.apply : function(e, t, r) {
            return Function.prototype.apply.call(e, t, r)
        };
    i = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : function(e) {
        return Object.getOwnPropertyNames(e)
    };
    var s = Number.isNaN || function(e) {
        return e != e
    };

    function a() {
        a.init.call(this)
    }
    e.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var l = 10;

    function h(e) {
        return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
    }

    function c(e, t, r, i) {
        var n, o, s, a;
        if ("function" != typeof r) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
        if (void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), s = o[t]), void 0 === s) s = o[t] = r, ++e._eventsCount;
        else if ("function" == typeof s ? s = o[t] = i ? [r, s] : [s, r] : i ? s.unshift(r) : s.push(r), (n = h(e)) > 0 && s.length > n && !s.warned) {
            s.warned = !0;
            var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = s.length, a = l, console && console.warn && console.warn(a)
        }
        return e
    }

    function u(e, t, r) {
        var i = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            n = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, o(this.listener, this.target, e))
            }.bind(i);
        return n.listener = r, i.wrapFn = n, n
    }

    function f(e, t, r) {
        var i = e._events;
        if (void 0 === i) return [];
        var n = i[t];
        return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? function(e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
            return t
        }(n) : d(n, n.length)
    }

    function _(e) {
        var t = this._events;
        if (void 0 !== t) {
            var r = t[e];
            if ("function" == typeof r) return 1;
            if (void 0 !== r) return r.length
        }
        return 0
    }

    function d(e, t) {
        for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i];
        return r
    }
    Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return l
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            l = e
        }
    }), a.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, a.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    }, a.prototype.getMaxListeners = function() {
        return h(this)
    }, a.prototype.emit = function(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
        var i = "error" === e,
            n = this._events;
        if (void 0 !== n) i = i && void 0 === n.error;
        else if (!i) return !1;
        if (i) {
            var s;
            if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
            var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw a.context = s, a
        }
        var l = n[e];
        if (void 0 === l) return !1;
        if ("function" == typeof l) o(l, this, t);
        else {
            var h = l.length,
                c = d(l, h);
            for (r = 0; r < h; ++r) o(c[r], this, t)
        }
        return !0
    }, a.prototype.addListener = function(e, t) {
        return c(this, e, t, !1)
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(e, t) {
        return c(this, e, t, !0)
    }, a.prototype.once = function(e, t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.on(e, u(this, e, t)), this
    }, a.prototype.prependOnceListener = function(e, t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.prependListener(e, u(this, e, t)), this
    }, a.prototype.removeListener = function(e, t) {
        var r, i, n, o, s;
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        if (void 0 === (i = this._events)) return this;
        if (void 0 === (r = i[e])) return this;
        if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
        else if ("function" != typeof r) {
            for (n = -1, o = r.length - 1; o >= 0; o--)
                if (r[o] === t || r[o].listener === t) {
                    s = r[o].listener, n = o;
                    break
                } if (n < 0) return this;
            0 === n ? r.shift() : function(e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop()
            }(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, s || t)
        }
        return this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(e) {
        var t, r, i;
        if (void 0 === (r = this._events)) return this;
        if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
        if (0 === arguments.length) {
            var n, o = Object.keys(r);
            for (i = 0; i < o.length; ++i) "removeListener" !== (n = o[i]) && this.removeAllListeners(n);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof(t = r[e])) this.removeListener(e, t);
        else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
        return this
    }, a.prototype.listeners = function(e) {
        return f(this, e, !0)
    }, a.prototype.rawListeners = function(e) {
        return f(this, e, !1)
    }, a.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : _.call(e, t)
    }, a.prototype.listenerCount = _, a.prototype.eventNames = function() {
        return this._eventsCount > 0 ? i(this._events) : []
    }
}, function(e, t, r) {
    e.exports = r(42)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.stringFromCodePoint = function(e) {
        return e > 65535 ? (e -= 65536, String.fromCharCode(55296 + (e >> 10)) + String.fromCharCode(e % 1024 + 56320)) : String.fromCharCode(e)
    }, t.utf32ToString = function(e, t, r) {
        void 0 === t && (t = 0), void 0 === r && (r = e.length);
        for (var i = "", n = t; n < r; ++n) {
            var o = e[n];
            o > 65535 ? (o -= 65536, i += String.fromCharCode(55296 + (o >> 10)) + String.fromCharCode(o % 1024 + 56320)) : i += String.fromCharCode(o)
        }
        return i
    };
    var i = function() {
        function e() {
            this._interim = 0
        }
        return e.prototype.clear = function() {
            this._interim = 0
        }, e.prototype.decode = function(e, t) {
            var r = e.length;
            if (!r) return 0;
            var i = 0,
                n = 0;
            this._interim && (56320 <= (a = e.charCodeAt(n++)) && a <= 57343 ? t[i++] = 1024 * (this._interim - 55296) + a - 56320 + 65536 : (t[i++] = this._interim, t[i++] = a), this._interim = 0);
            for (var o = n; o < r; ++o) {
                var s = e.charCodeAt(o);
                if (55296 <= s && s <= 56319) {
                    if (++o >= r) return this._interim = s, i;
                    var a;
                    56320 <= (a = e.charCodeAt(o)) && a <= 57343 ? t[i++] = 1024 * (s - 55296) + a - 56320 + 65536 : (t[i++] = s, t[i++] = a)
                } else t[i++] = s
            }
            return i
        }, e
    }();
    t.StringToUtf32 = i;
    var n = function() {
        function e() {
            this.interim = new Uint8Array(3)
        }
        return e.prototype.clear = function() {
            this.interim.fill(0)
        }, e.prototype.decode = function(e, t) {
            var r = e.length;
            if (!r) return 0;
            var i, n, o, s, a = 0,
                l = 0,
                h = 0;
            if (this.interim[0]) {
                var c = !1,
                    u = this.interim[0];
                u &= 192 == (224 & u) ? 31 : 224 == (240 & u) ? 15 : 7;
                for (var f = 0, _ = void 0;
                    (_ = 63 & this.interim[++f]) && f < 4;) u <<= 6, u |= _;
                for (var d = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, p = d - f; h < p;) {
                    if (h >= r) return 0;
                    if (128 != (192 & (_ = e[h++]))) {
                        h--, c = !0;
                        break
                    }
                    this.interim[f++] = _, u <<= 6, u |= 63 & _
                }
                c || (2 === d ? u < 128 ? h-- : t[a++] = u : 3 === d ? u < 2048 || u >= 55296 && u <= 57343 || (t[a++] = u) : l < 65536 || l > 1114111 || (t[a++] = u)), this.interim.fill(0)
            }
            for (var m = r - 4, y = h; y < r;) {
                for (; !(!(y < m) || 128 & (i = e[y]) || 128 & (n = e[y + 1]) || 128 & (o = e[y + 2]) || 128 & (s = e[y + 3]));) t[a++] = i, t[a++] = n, t[a++] = o, t[a++] = s, y += 4;
                if ((i = e[y++]) < 128) t[a++] = i;
                else if (192 == (224 & i)) {
                    if (y >= r) return this.interim[0] = i, a;
                    if (128 != (192 & (n = e[y++]))) {
                        y--;
                        continue
                    }
                    if ((l = (31 & i) << 6 | 63 & n) < 128) {
                        y--;
                        continue
                    }
                    t[a++] = l
                } else if (224 == (240 & i)) {
                    if (y >= r) return this.interim[0] = i, a;
                    if (128 != (192 & (n = e[y++]))) {
                        y--;
                        continue
                    }
                    if (y >= r) return this.interim[0] = i, this.interim[1] = n, a;
                    if (128 != (192 & (o = e[y++]))) {
                        y--;
                        continue
                    }
                    if ((l = (15 & i) << 12 | (63 & n) << 6 | 63 & o) < 2048 || l >= 55296 && l <= 57343) continue;
                    t[a++] = l
                } else if (240 == (248 & i)) {
                    if (y >= r) return this.interim[0] = i, a;
                    if (128 != (192 & (n = e[y++]))) {
                        y--;
                        continue
                    }
                    if (y >= r) return this.interim[0] = i, this.interim[1] = n, a;
                    if (128 != (192 & (o = e[y++]))) {
                        y--;
                        continue
                    }
                    if (y >= r) return this.interim[0] = i, this.interim[1] = n, this.interim[2] = o, a;
                    if (128 != (192 & (s = e[y++]))) {
                        y--;
                        continue
                    }
                    if ((l = (7 & i) << 18 | (63 & n) << 12 | (63 & o) << 6 | 63 & s) < 65536 || l > 1114111) continue;
                    t[a++] = l
                }
            }
            return a
        }, e
    }();
    t.Utf8ToUtf32 = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(11);
    t.generateConfig = function(e, t, r, i) {
        var n = {
            foreground: i.foreground,
            background: i.background,
            cursor: null,
            cursorAccent: null,
            selection: null,
            ansi: i.ansi.slice(0, 16)
        };
        return {
            type: r.options.experimentalCharAtlas,
            devicePixelRatio: window.devicePixelRatio,
            scaledCharWidth: e,
            scaledCharHeight: t,
            fontFamily: r.options.fontFamily,
            fontSize: r.options.fontSize,
            fontWeight: r.options.fontWeight,
            fontWeightBold: r.options.fontWeightBold,
            allowTransparency: r.options.allowTransparency,
            colors: n
        }
    }, t.configEquals = function(e, t) {
        for (var r = 0; r < e.colors.ansi.length; r++)
            if (e.colors.ansi[r].rgba !== t.colors.ansi[r].rgba) return !1;
        return e.type === t.type && e.devicePixelRatio === t.devicePixelRatio && e.fontFamily === t.fontFamily && e.fontSize === t.fontSize && e.fontWeight === t.fontWeight && e.fontWeightBold === t.fontWeightBold && e.allowTransparency === t.allowTransparency && e.scaledCharWidth === t.scaledCharWidth && e.scaledCharHeight === t.scaledCharHeight && e.colors.foreground === t.colors.foreground && e.colors.background === t.colors.background
    }, t.is256Color = function(e) {
        return e < i.DEFAULT_COLOR
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            this._didWarmUp = !1
        }
        return e.prototype.dispose = function() {}, e.prototype.warmUp = function() {
            this._didWarmUp || (this._doWarmUp(), this._didWarmUp = !0)
        }, e.prototype._doWarmUp = function() {}, e.prototype.beginFrame = function() {}, e
    }();
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.blankLine = "Blank line", t.promptLabel = "Terminal input", t.tooMuchOutput = "Too much output to announce, navigate to rows manually to read"
}, function(e, t, r) {
    "use strict";
    var i = e.exports;
    const n = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102],
        o = {};
    for (var s = 0; s < n.length; s++) o[n[s]] = s;
    i.ENCODELIB = {
        pack_u16_be: function(e) {
            if (e > 65535) throw "Number cannot exceed 16 bits: " + e;
            return [e >> 8, 255 & e]
        },
        pack_u32_le: function(e) {
            var t = e / 65536;
            return [255 & e, (65535 & e) >> 8, 255 & t, t >> 8]
        },
        unpack_u16_be: function(e) {
            return (e[0] << 8) + e[1]
        },
        unpack_u32_le: function(e) {
            return e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3]
        },
        octets_to_hex: function(e) {
            for (var t = [], r = 0; r < e.length; r++) t.push(n[e[r] >> 4], n[15 & e[r]]);
            return t
        },
        parse_hex_octets: function(e) {
            for (var t = new Array(e.length / 2), r = 0; r < t.length; r++) t[r] = (o[e[2 * r]] << 4) + o[e[1 + 2 * r]];
            return t
        }
    }
}, function(e, t, r) {
    "use strict";
    var i, n, o = e.exports;
    Object.assign(o, r(9));
    const s = o.ZMLIB.ZDLE;
    o.ZDLE = class e {
        constructor(e) {
            this._config = {}, e && this.set_escape_ctrl_chars(!!e.escape_ctrl_chars)
        }
        set_escape_ctrl_chars(e) {
            if ("boolean" != typeof e) throw "need boolean!";
            e !== this._config.escape_ctrl_chars && (this._config.escape_ctrl_chars = e, this._setup_zdle_table())
        }
        escapes_ctrl_chars() {
            return !!this._config.escape_ctrl_chars
        }
        encode(e) {
            if (!this._zdle_table) throw "No ZDLE encode table configured!";
            var t = this._zdle_table,
                r = this._lastcode,
                o = new ArrayBuffer(2 * e.length),
                a = new Uint8Array(o),
                l = this._config.escape_ctrl_chars,
                h = 0;
            for (i = 0; i < e.length; i++) {
                if (!(n = t[e[i]])) throw console.trace(), console.error("bad encode() call:", JSON.stringify(e)), this._lastcode = r, "Invalid octet: " + e[i];
                r = e[i], 1 === n || (l || 2 === n || 64 == (127 & r)) && (a[h] = s, h++, r ^= 64), a[h] = r, h++
            }
            return this._lastcode = r, e.splice(0), e.push.apply(e, new Uint8Array(o, 0, h)), e
        }
        static decode(e) {
            for (var t = e.length - 1; t >= 0; t--) e[t] === s && e.splice(t, 2, e[t + 1] - 64);
            return e
        }
        static splice(t, r, i) {
            var n = 0;
            r || (r = 0);
            for (var o = r; o < t.length && n < i; o++) n++, t[o] === s && o++;
            if (n === i) {
                if (t.length === o - 1) return;
                return t.splice(0, r), e.decode(t.splice(0, o - r))
            }
        }
        _setup_zdle_table() {
            for (var e = new Array(256), t = 0; t < e.length; t++)
                if (96 & t) e[t] = 1;
                else switch (t) {
                    case s:
                    case o.ZMLIB.XOFF:
                    case o.ZMLIB.XON:
                    case 128 | o.ZMLIB.XOFF:
                    case 128 | o.ZMLIB.XON:
                        e[t] = 2;
                        break;
                    case 16:
                    case 144:
                        e[t] = this._config.turbo_escape ? 1 : 2;
                        break;
                    case 13:
                    case 141:
                        e[t] = this._config.escape_ctrl_chars ? 2 : this._config.turbo_escape ? 1 : 3;
                        break;
                    default:
                        e[t] = this._config.escape_ctrl_chars ? 2 : 1
                }
            this._zdle_table = e
        }
    }
}, function(e, t, r) {
    var i = r(15),
        n = r(16);

    function o(e) {
        i.EventEmitter.call(this), this.backoffStrategy_ = e, this.maxNumberOfRetry_ = -1, this.backoffNumber_ = 0, this.backoffDelay_ = 0, this.timeoutID_ = -1, this.handlers = {
            backoff: this.onBackoff_.bind(this)
        }
    }
    r(5).inherits(o, i.EventEmitter), o.prototype.failAfter = function(e) {
        n.checkArgument(e > 0, "Expected a maximum number of retry greater than 0 but got %s.", e), this.maxNumberOfRetry_ = e
    }, o.prototype.backoff = function(e) {
        n.checkState(-1 === this.timeoutID_, "Backoff in progress."), this.backoffNumber_ === this.maxNumberOfRetry_ ? (this.emit("fail", e), this.reset()) : (this.backoffDelay_ = this.backoffStrategy_.next(), this.timeoutID_ = setTimeout(this.handlers.backoff, this.backoffDelay_), this.emit("backoff", this.backoffNumber_, this.backoffDelay_, e))
    }, o.prototype.onBackoff_ = function() {
        this.timeoutID_ = -1, this.emit("ready", this.backoffNumber_, this.backoffDelay_), this.backoffNumber_++
    }, o.prototype.reset = function() {
        this.backoffNumber_ = 0, this.backoffStrategy_.reset(), clearTimeout(this.timeoutID_), this.timeoutID_ = -1
    }, e.exports = o
}, function(e, t, r) {
    function i(e) {
        return null != e
    }

    function n(e) {
        if (i((e = e || {}).initialDelay) && e.initialDelay < 1) throw new Error("The initial timeout must be greater than 0.");
        if (i(e.maxDelay) && e.maxDelay < 1) throw new Error("The maximal timeout must be greater than 0.");
        if (this.initialDelay_ = e.initialDelay || 100, this.maxDelay_ = e.maxDelay || 1e4, this.maxDelay_ <= this.initialDelay_) throw new Error("The maximal backoff delay must be greater than the initial backoff delay.");
        if (i(e.randomisationFactor) && (e.randomisationFactor < 0 || e.randomisationFactor > 1)) throw new Error("The randomisation factor must be between 0 and 1.");
        this.randomisationFactor_ = e.randomisationFactor || 0
    }
    r(15), r(5), n.prototype.getMaxDelay = function() {
        return this.maxDelay_
    }, n.prototype.getInitialDelay = function() {
        return this.initialDelay_
    }, n.prototype.next = function() {
        var e = this.next_(),
            t = 1 + Math.random() * this.randomisationFactor_;
        return Math.round(e * t)
    }, n.prototype.next_ = function() {
        throw new Error("BackoffStrategy.next_() unimplemented.")
    }, n.prototype.reset = function() {
        this.reset_()
    }, n.prototype.reset_ = function() {
        throw new Error("BackoffStrategy.reset_() unimplemented.")
    }, e.exports = n
}, function(e, t, r) {
    var i = r(5),
        n = r(24);

    function o(e) {
        n.call(this, e), this.backoffDelay_ = 0, this.nextBackoffDelay_ = this.getInitialDelay()
    }
    i.inherits(o, n), o.prototype.next_ = function() {
        var e = Math.min(this.nextBackoffDelay_, this.getMaxDelay());
        return this.nextBackoffDelay_ += this.backoffDelay_, this.backoffDelay_ = e, e
    }, o.prototype.reset_ = function() {
        this.nextBackoffDelay_ = this.getInitialDelay(), this.backoffDelay_ = 0
    }, e.exports = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(51),
        n = r(3),
        o = r(52),
        s = r(53);
    t.MAX_BUFFER_SIZE = 4294967295;
    var a = function() {
        function e(e, t) {
            this._terminal = e, this._hasScrollback = t, this.savedCurAttrData = n.DEFAULT_ATTR_DATA.clone(), this.markers = [], this._nullCell = n.CellData.fromCharData([0, n.NULL_CELL_CHAR, n.NULL_CELL_WIDTH, n.NULL_CELL_CODE]), this._whitespaceCell = n.CellData.fromCharData([0, n.WHITESPACE_CELL_CHAR, n.WHITESPACE_CELL_WIDTH, n.WHITESPACE_CELL_CODE]), this._cols = this._terminal.cols, this._rows = this._terminal.rows, this.clear()
        }
        return e.prototype.getNullCell = function(e) {
            return e ? (this._nullCell.fg = e.fg, this._nullCell.bg = e.bg) : (this._nullCell.fg = 0, this._nullCell.bg = 0), this._nullCell
        }, e.prototype.getWhitespaceCell = function(e) {
            return e ? (this._whitespaceCell.fg = e.fg, this._whitespaceCell.bg = e.bg) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0), this._whitespaceCell
        }, e.prototype.getBlankLine = function(e, t) {
            return new n.BufferLine(this._terminal.cols, this.getNullCell(e), t)
        }, Object.defineProperty(e.prototype, "hasScrollback", {
            get: function() {
                return this._hasScrollback && this.lines.maxLength > this._rows
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isCursorInViewport", {
            get: function() {
                var e = this.ybase + this.y - this.ydisp;
                return e >= 0 && e < this._rows
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._getCorrectBufferLength = function(e) {
            if (!this._hasScrollback) return e;
            var r = e + this._terminal.options.scrollback;
            return r > t.MAX_BUFFER_SIZE ? t.MAX_BUFFER_SIZE : r
        }, e.prototype.fillViewportRows = function(e) {
            if (0 === this.lines.length) {
                void 0 === e && (e = n.DEFAULT_ATTR_DATA);
                for (var t = this._rows; t--;) this.lines.push(this.getBlankLine(e))
            }
        }, e.prototype.clear = function() {
            this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new i.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops()
        }, e.prototype.resize = function(e, t) {
            var r = this.getNullCell(n.DEFAULT_ATTR_DATA),
                i = this._getCorrectBufferLength(t);
            if (i > this.lines.maxLength && (this.lines.maxLength = i), this.lines.length > 0) {
                if (this._cols < e)
                    for (var o = 0; o < this.lines.length; o++) this.lines.get(o).resize(e, r);
                var s = 0;
                if (this._rows < t)
                    for (var a = this._rows; a < t; a++) this.lines.length < t + this.ybase && (this.ybase > 0 && this.lines.length <= this.ybase + this.y + s + 1 ? (this.ybase--, s++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new n.BufferLine(e, r)));
                else
                    for (a = this._rows; a > t; a--) this.lines.length > t + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
                if (i < this.lines.maxLength) {
                    var l = this.lines.length - i;
                    l > 0 && (this.lines.trimStart(l), this.ybase = Math.max(this.ybase - l, 0), this.ydisp = Math.max(this.ydisp - l, 0)), this.lines.maxLength = i
                }
                this.x = Math.min(this.x, e - 1), this.y = Math.min(this.y, t - 1), s && (this.y += s), this.savedY = Math.min(this.savedY, t - 1), this.savedX = Math.min(this.savedX, e - 1), this.scrollTop = 0
            }
            if (this.scrollBottom = t - 1, this._isReflowEnabled && (this._reflow(e, t), this._cols > e))
                for (o = 0; o < this.lines.length; o++) this.lines.get(o).resize(e, r);
            this._cols = e, this._rows = t
        }, Object.defineProperty(e.prototype, "_isReflowEnabled", {
            get: function() {
                return this._hasScrollback && !this._terminal.options.windowsMode
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._reflow = function(e, t) {
            this._cols !== e && (e > this._cols ? this._reflowLarger(e, t) : this._reflowSmaller(e, t))
        }, e.prototype._reflowLarger = function(e, t) {
            var r = o.reflowLargerGetLinesToRemove(this.lines, this._cols, e, this.ybase + this.y, this.getNullCell(n.DEFAULT_ATTR_DATA));
            if (r.length > 0) {
                var i = o.reflowLargerCreateNewLayout(this.lines, r);
                o.reflowLargerApplyNewLayout(this.lines, i.layout), this._reflowLargerAdjustViewport(e, t, i.countRemoved)
            }
        }, e.prototype._reflowLargerAdjustViewport = function(e, t, r) {
            for (var i = this.getNullCell(n.DEFAULT_ATTR_DATA), o = r; o-- > 0;) 0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t && this.lines.push(new n.BufferLine(e, i))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--)
        }, e.prototype._reflowSmaller = function(e, t) {
            for (var r = this.getNullCell(n.DEFAULT_ATTR_DATA), i = [], s = 0, a = this.lines.length - 1; a >= 0; a--) {
                var l = this.lines.get(a);
                if (!(!l || !l.isWrapped && l.getTrimmedLength() <= e)) {
                    for (var h = [l]; l.isWrapped && a > 0;) l = this.lines.get(--a), h.unshift(l);
                    var c = this.ybase + this.y;
                    if (!(c >= a && c < a + h.length)) {
                        var u, f = h[h.length - 1].getTrimmedLength(),
                            _ = o.reflowSmallerGetNewLineLengths(h, this._cols, e),
                            d = _.length - h.length;
                        u = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + d) : Math.max(0, this.lines.length - this.lines.maxLength + d);
                        for (var p = [], m = 0; m < d; m++) {
                            var y = this.getBlankLine(n.DEFAULT_ATTR_DATA, !0);
                            p.push(y)
                        }
                        p.length > 0 && (i.push({
                            start: a + h.length + s,
                            newLines: p
                        }), s += p.length), h.push.apply(h, p);
                        var g = _.length - 1,
                            v = _[g];
                        0 === v && (v = _[--g]);
                        for (var b = h.length - d - 1, C = f; b >= 0;) {
                            var w = Math.min(C, v);
                            if (h[g].copyCellsFrom(h[b], C - w, v - w, w, !0), 0 == (v -= w) && (v = _[--g]), 0 == (C -= w)) {
                                b--;
                                var S = Math.max(b, 0);
                                C = o.getWrappedLineTrimmedLength(h, S, this._cols)
                            }
                        }
                        for (m = 0; m < h.length; m++) _[m] < e && h[m].setCell(_[m], r);
                        for (var E = d - u; E-- > 0;) 0 === this.ybase ? this.y < t - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + s) - t && (this.ybase === this.ydisp && this.ydisp++, this.ybase++)
                    }
                }
            }
            if (i.length > 0) {
                var x = [],
                    A = [];
                for (m = 0; m < this.lines.length; m++) A.push(this.lines.get(m));
                var L = this.lines.length,
                    k = L - 1,
                    T = 0,
                    R = i[T];
                this.lines.length = Math.min(this.lines.maxLength, this.lines.length + s);
                var M = 0;
                for (m = Math.min(this.lines.maxLength - 1, L + s - 1); m >= 0; m--)
                    if (R && R.start > k + M) {
                        for (var D = R.newLines.length - 1; D >= 0; D--) this.lines.set(m--, R.newLines[D]);
                        m++, x.push({
                            index: k + 1,
                            amount: R.newLines.length
                        }), M += R.newLines.length, R = i[++T]
                    } else this.lines.set(m, A[k--]);
                var O = 0;
                for (m = x.length - 1; m >= 0; m--) x[m].index += O, this.lines.onInsertEmitter.fire(x[m]), O += x[m].amount;
                var H = Math.max(0, L + s - this.lines.maxLength);
                H > 0 && this.lines.onTrimEmitter.fire(H)
            }
        }, e.prototype.stringIndexToBufferIndex = function(e, t, r) {
            for (void 0 === r && (r = !1); t;) {
                var i = this.lines.get(e);
                if (!i) return [-1, -1];
                for (var o = r ? i.getTrimmedLength() : i.length, s = 0; s < o; ++s)
                    if (i.get(s)[n.CHAR_DATA_WIDTH_INDEX] && (t -= i.get(s)[n.CHAR_DATA_CHAR_INDEX].length || 1), t < 0) return [e, s];
                e++
            }
            return [e, 0]
        }, e.prototype.translateBufferLineToString = function(e, t, r, i) {
            void 0 === r && (r = 0);
            var n = this.lines.get(e);
            return n ? n.translateToString(t, r, i) : ""
        }, e.prototype.getWrappedRangeForLine = function(e) {
            for (var t = e, r = e; t > 0 && this.lines.get(t).isWrapped;) t--;
            for (; r + 1 < this.lines.length && this.lines.get(r + 1).isWrapped;) r++;
            return {
                first: t,
                last: r
            }
        }, e.prototype.setupTabStops = function(e) {
            for (null != e ? this.tabs[e] || (e = this.prevStop(e)) : (this.tabs = {}, e = 0); e < this._cols; e += this._terminal.options.tabStopWidth) this.tabs[e] = !0
        }, e.prototype.prevStop = function(e) {
            for (null == e && (e = this.x); !this.tabs[--e] && e > 0;);
            return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e
        }, e.prototype.nextStop = function(e) {
            for (null == e && (e = this.x); !this.tabs[++e] && e < this._cols;);
            return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e
        }, e.prototype.addMarker = function(e) {
            var t = this,
                r = new s.Marker(e);
            return this.markers.push(r), r.register(this.lines.onTrim(function(e) {
                r.line -= e, r.line < 0 && r.dispose()
            })), r.register(this.lines.onInsert(function(e) {
                r.line >= e.index && (r.line += e.amount)
            })), r.register(this.lines.onDelete(function(e) {
                r.line >= e.index && r.line < e.index + e.amount && r.dispose(), r.line > e.index && (r.line -= e.amount)
            })), r.register(r.onDispose(function() {
                return t._removeMarker(r)
            })), r
        }, e.prototype._removeMarker = function(e) {
            this.markers.splice(this.markers.indexOf(e), 1)
        }, e.prototype.iterator = function(e, t, r, i, n) {
            return new l(this, e, t, r, i, n)
        }, e
    }();
    t.Buffer = a;
    var l = function() {
        function e(e, t, r, i, n, o) {
            void 0 === r && (r = 0), void 0 === i && (i = e.lines.length), void 0 === n && (n = 0), void 0 === o && (o = 0), this._buffer = e, this._trimRight = t, this._startIndex = r, this._endIndex = i, this._startOverscan = n, this._endOverscan = o, this._startIndex < 0 && (this._startIndex = 0), this._endIndex > this._buffer.lines.length && (this._endIndex = this._buffer.lines.length), this._current = this._startIndex
        }
        return e.prototype.hasNext = function() {
            return this._current < this._endIndex
        }, e.prototype.next = function() {
            var e = this._buffer.getWrappedRangeForLine(this._current);
            e.first < this._startIndex - this._startOverscan && (e.first = this._startIndex - this._startOverscan), e.last > this._endIndex + this._endOverscan && (e.last = this._endIndex + this._endOverscan), e.first = Math.max(e.first, 0), e.last = Math.min(e.last, this._buffer.lines.length);
            for (var t = "", r = e.first; r <= e.last; ++r) t += this._buffer.translateBufferLineToString(r, this._trimRight);
            return this._current = e.last + 1, {
                range: e,
                content: t
            }
        }, e
    }();
    t.BufferStringIterator = l
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(28);
    t.wcwidth = function(e) {
        var t = [
                [768, 879],
                [1155, 1158],
                [1160, 1161],
                [1425, 1469],
                [1471, 1471],
                [1473, 1474],
                [1476, 1477],
                [1479, 1479],
                [1536, 1539],
                [1552, 1557],
                [1611, 1630],
                [1648, 1648],
                [1750, 1764],
                [1767, 1768],
                [1770, 1773],
                [1807, 1807],
                [1809, 1809],
                [1840, 1866],
                [1958, 1968],
                [2027, 2035],
                [2305, 2306],
                [2364, 2364],
                [2369, 2376],
                [2381, 2381],
                [2385, 2388],
                [2402, 2403],
                [2433, 2433],
                [2492, 2492],
                [2497, 2500],
                [2509, 2509],
                [2530, 2531],
                [2561, 2562],
                [2620, 2620],
                [2625, 2626],
                [2631, 2632],
                [2635, 2637],
                [2672, 2673],
                [2689, 2690],
                [2748, 2748],
                [2753, 2757],
                [2759, 2760],
                [2765, 2765],
                [2786, 2787],
                [2817, 2817],
                [2876, 2876],
                [2879, 2879],
                [2881, 2883],
                [2893, 2893],
                [2902, 2902],
                [2946, 2946],
                [3008, 3008],
                [3021, 3021],
                [3134, 3136],
                [3142, 3144],
                [3146, 3149],
                [3157, 3158],
                [3260, 3260],
                [3263, 3263],
                [3270, 3270],
                [3276, 3277],
                [3298, 3299],
                [3393, 3395],
                [3405, 3405],
                [3530, 3530],
                [3538, 3540],
                [3542, 3542],
                [3633, 3633],
                [3636, 3642],
                [3655, 3662],
                [3761, 3761],
                [3764, 3769],
                [3771, 3772],
                [3784, 3789],
                [3864, 3865],
                [3893, 3893],
                [3895, 3895],
                [3897, 3897],
                [3953, 3966],
                [3968, 3972],
                [3974, 3975],
                [3984, 3991],
                [3993, 4028],
                [4038, 4038],
                [4141, 4144],
                [4146, 4146],
                [4150, 4151],
                [4153, 4153],
                [4184, 4185],
                [4448, 4607],
                [4959, 4959],
                [5906, 5908],
                [5938, 5940],
                [5970, 5971],
                [6002, 6003],
                [6068, 6069],
                [6071, 6077],
                [6086, 6086],
                [6089, 6099],
                [6109, 6109],
                [6155, 6157],
                [6313, 6313],
                [6432, 6434],
                [6439, 6440],
                [6450, 6450],
                [6457, 6459],
                [6679, 6680],
                [6912, 6915],
                [6964, 6964],
                [6966, 6970],
                [6972, 6972],
                [6978, 6978],
                [7019, 7027],
                [7616, 7626],
                [7678, 7679],
                [8203, 8207],
                [8234, 8238],
                [8288, 8291],
                [8298, 8303],
                [8400, 8431],
                [12330, 12335],
                [12441, 12442],
                [43014, 43014],
                [43019, 43019],
                [43045, 43046],
                [64286, 64286],
                [65024, 65039],
                [65056, 65059],
                [65279, 65279],
                [65529, 65531]
            ],
            r = [
                [68097, 68099],
                [68101, 68102],
                [68108, 68111],
                [68152, 68154],
                [68159, 68159],
                [119143, 119145],
                [119155, 119170],
                [119173, 119179],
                [119210, 119213],
                [119362, 119364],
                [917505, 917505],
                [917536, 917631],
                [917760, 917999]
            ],
            n = 0 | e.control,
            o = new Uint8Array(65536);
        i.fill(o, 1), o[0] = e.nul, i.fill(o, e.control, 1, 32), i.fill(o, e.control, 127, 160), i.fill(o, 2, 4352, 4448), o[9001] = 2, o[9002] = 2, i.fill(o, 2, 11904, 42192), o[12351] = 1, i.fill(o, 2, 44032, 55204), i.fill(o, 2, 63744, 64256), i.fill(o, 2, 65040, 65050), i.fill(o, 2, 65072, 65136), i.fill(o, 2, 65280, 65377), i.fill(o, 2, 65504, 65511);
        for (var s = 0; s < t.length; ++s) i.fill(o, 0, t[s][0], t[s][1] + 1);
        return function(e) {
            return e < 32 ? 0 | n : e < 127 ? 1 : e < 65536 ? o[e] : function(e, t) {
                var r, i = 0,
                    n = t.length - 1;
                if (e < t[0][0] || e > t[n][1]) return !1;
                for (; n >= i;)
                    if (e > t[r = i + n >> 1][1]) i = r + 1;
                    else {
                        if (!(e < t[r][0])) return !0;
                        n = r - 1
                    } return !1
            }(t = e, r) ? 0 : t >= 131072 && t <= 196605 || t >= 196608 && t <= 262141 ? 2 : 1;
            var t
        }
    }({
        nul: 0,
        control: 0
    }), t.getStringCellWidth = function(e) {
        for (var r = 0, i = e.length, n = 0; n < i; ++n) {
            var o = e.charCodeAt(n);
            if (55296 <= o && o <= 56319) {
                if (++n >= i) return r + t.wcwidth(o);
                var s = e.charCodeAt(n);
                56320 <= s && s <= 57343 ? o = 1024 * (o - 55296) + s - 56320 + 65536 : r += t.wcwidth(s)
            }
            r += t.wcwidth(o)
        }
        return r
    }
}, function(e, t, r) {
    "use strict";

    function i(e, t, r, i) {
        if (void 0 === r && (r = 0), void 0 === i && (i = e.length), r >= e.length) return e;
        r = (e.length + r) % e.length, i = i >= e.length ? e.length : (e.length + i) % e.length;
        for (var n = r; n < i; ++n) e[n] = t;
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.fill = function(e, t, r, n) {
        return e.fill ? e.fill(t, r, n) : i(e, t, r, n)
    }, t.fillFallback = i, t.concat = function(e, t) {
        var r = new e.constructor(e.length + t.length);
        return r.set(e), r.set(t, e.length), r
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(18),
        n = r(64),
        o = r(66),
        s = r(67),
        a = {
            none: o.default,
            static: s.default,
            dynamic: n.default
        },
        l = [];
    t.acquireCharAtlas = function(e, t, r, n) {
        for (var o = i.generateConfig(r, n, e, t), s = 0; s < l.length; s++) {
            var h = (c = l[s]).ownedBy.indexOf(e);
            if (h >= 0) {
                if (i.configEquals(c.config, o)) return c.atlas;
                1 === c.ownedBy.length ? (c.atlas.dispose(), l.splice(s, 1)) : c.ownedBy.splice(h, 1);
                break
            }
        }
        for (s = 0; s < l.length; s++) {
            var c = l[s];
            if (i.configEquals(c.config, o)) return c.ownedBy.push(e), c.atlas
        }
        var u = {
            atlas: new a[e.options.experimentalCharAtlas](document, o),
            config: o,
            ownedBy: [e]
        };
        return l.push(u), u.atlas
    }, t.removeTerminalFromCache = function(e) {
        for (var t = 0; t < l.length; t++) {
            var r = l[t].ownedBy.indexOf(e);
            if (-1 !== r) {
                1 === l[t].ownedBy.length ? (l[t].atlas.dispose(), l.splice(t, 1)) : l[t].ownedBy.splice(r, 1);
                break
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = l("#ffffff"),
        n = l("#000000"),
        o = l("#ffffff"),
        s = l("#000000"),
        a = {
            css: "rgba(255, 255, 255, 0.3)",
            rgba: 4294967159
        };

    function l(e) {
        return {
            css: e,
            rgba: parseInt(e.slice(1), 16) << 8 | 255
        }
    }

    function h(e) {
        var t = e.toString(16);
        return t.length < 2 ? "0" + t : t
    }
    t.DEFAULT_ANSI_COLORS = function() {
        for (var e = [l("#2e3436"), l("#cc0000"), l("#4e9a06"), l("#c4a000"), l("#3465a4"), l("#75507b"), l("#06989a"), l("#d3d7cf"), l("#555753"), l("#ef2929"), l("#8ae234"), l("#fce94f"), l("#729fcf"), l("#ad7fa8"), l("#34e2e2"), l("#eeeeec")], t = [0, 95, 135, 175, 215, 255], r = 0; r < 216; r++) {
            var i = t[r / 36 % 6 | 0],
                n = t[r / 6 % 6 | 0],
                o = t[r % 6];
            e.push({
                css: "#" + h(i) + h(n) + h(o),
                rgba: (i << 24 | n << 16 | o << 8 | 255) >>> 0
            })
        }
        for (r = 0; r < 24; r++) {
            var s = 8 + 10 * r,
                a = h(s);
            e.push({
                css: "#" + a + a + a,
                rgba: (s << 24 | s << 16 | s << 8 | 255) >>> 0
            })
        }
        return e
    }();
    var c = function() {
        function e(e, r) {
            this.allowTransparency = r;
            var l = e.createElement("canvas");
            l.width = 1, l.height = 1;
            var h = l.getContext("2d");
            if (!h) throw new Error("Could not get rendering context");
            this._ctx = h, this._ctx.globalCompositeOperation = "copy", this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1), this.colors = {
                foreground: i,
                background: n,
                cursor: o,
                cursorAccent: s,
                selection: a,
                ansi: t.DEFAULT_ANSI_COLORS.slice()
            }
        }
        return e.prototype.setTheme = function(e) {
            void 0 === e && (e = {}), this.colors.foreground = this._parseColor(e.foreground, i), this.colors.background = this._parseColor(e.background, n), this.colors.cursor = this._parseColor(e.cursor, o, !0), this.colors.cursorAccent = this._parseColor(e.cursorAccent, s, !0), this.colors.selection = this._parseColor(e.selection, a, !0), this.colors.ansi[0] = this._parseColor(e.black, t.DEFAULT_ANSI_COLORS[0]), this.colors.ansi[1] = this._parseColor(e.red, t.DEFAULT_ANSI_COLORS[1]), this.colors.ansi[2] = this._parseColor(e.green, t.DEFAULT_ANSI_COLORS[2]), this.colors.ansi[3] = this._parseColor(e.yellow, t.DEFAULT_ANSI_COLORS[3]), this.colors.ansi[4] = this._parseColor(e.blue, t.DEFAULT_ANSI_COLORS[4]), this.colors.ansi[5] = this._parseColor(e.magenta, t.DEFAULT_ANSI_COLORS[5]), this.colors.ansi[6] = this._parseColor(e.cyan, t.DEFAULT_ANSI_COLORS[6]), this.colors.ansi[7] = this._parseColor(e.white, t.DEFAULT_ANSI_COLORS[7]), this.colors.ansi[8] = this._parseColor(e.brightBlack, t.DEFAULT_ANSI_COLORS[8]), this.colors.ansi[9] = this._parseColor(e.brightRed, t.DEFAULT_ANSI_COLORS[9]), this.colors.ansi[10] = this._parseColor(e.brightGreen, t.DEFAULT_ANSI_COLORS[10]), this.colors.ansi[11] = this._parseColor(e.brightYellow, t.DEFAULT_ANSI_COLORS[11]), this.colors.ansi[12] = this._parseColor(e.brightBlue, t.DEFAULT_ANSI_COLORS[12]), this.colors.ansi[13] = this._parseColor(e.brightMagenta, t.DEFAULT_ANSI_COLORS[13]), this.colors.ansi[14] = this._parseColor(e.brightCyan, t.DEFAULT_ANSI_COLORS[14]), this.colors.ansi[15] = this._parseColor(e.brightWhite, t.DEFAULT_ANSI_COLORS[15])
        }, e.prototype._parseColor = function(e, t, r) {
            if (void 0 === r && (r = this.allowTransparency), void 0 === e) return t;
            if (this._ctx.fillStyle = this._litmusColor, this._ctx.fillStyle = e, "string" != typeof this._ctx.fillStyle) return console.warn("Color: " + e + " is invalid using fallback " + t.css), t;
            this._ctx.fillRect(0, 0, 1, 1);
            var i = this._ctx.getImageData(0, 0, 1, 1).data;
            return r || 255 === i[3] ? {
                css: e,
                rgba: (i[0] << 24 | i[1] << 16 | i[2] << 8 | i[3]) >>> 0
            } : (console.warn("Color: " + e + " is using transparency, but allowTransparency is false. Using fallback " + t.css + "."), t)
        }, e
    }();
    t.ColorManager = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(8),
        n = r(6);

    function o(e, t) {
        for (var r = !0, i = t.rgba >>> 24, n = t.rgba >>> 16 & 255, o = t.rgba >>> 8 & 255, s = 0; s < e.data.length; s += 4) e.data[s] === i && e.data[s + 1] === n && e.data[s + 2] === o ? e.data[s + 3] = 0 : r = !1;
        return r
    }

    function s(e, t) {
        return e + " " + t.fontSize * t.devicePixelRatio + "px " + t.fontFamily
    }
    t.generateStaticCharAtlasTexture = function(e, t, r) {
        var a = r.scaledCharWidth + n.CHAR_ATLAS_CELL_SPACING,
            l = r.scaledCharHeight + n.CHAR_ATLAS_CELL_SPACING,
            h = t(255 * a, 34 * l),
            c = h.getContext("2d", {
                alpha: r.allowTransparency
            });
        c.fillStyle = r.colors.background.css, c.fillRect(0, 0, h.width, h.height), c.save(), c.fillStyle = r.colors.foreground.css, c.font = s(r.fontWeight, r), c.textBaseline = "middle";
        for (var u = 0; u < 256; u++) c.save(), c.beginPath(), c.rect(u * a, 0, a, l), c.clip(), c.fillText(String.fromCharCode(u), u * a, l / 2), c.restore();
        for (c.save(), c.font = s(r.fontWeightBold, r), u = 0; u < 256; u++) c.save(), c.beginPath(), c.rect(u * a, l, a, l), c.clip(), c.fillText(String.fromCharCode(u), u * a, 1.5 * l), c.restore();
        c.restore(), c.font = s(r.fontWeight, r);
        for (var f = 0; f < 16; f++) {
            var _ = (f + 2) * l;
            for (u = 0; u < 256; u++) c.save(), c.beginPath(), c.rect(u * a, _, a, l), c.clip(), c.fillStyle = r.colors.ansi[f].css, c.fillText(String.fromCharCode(u), u * a, _ + l / 2), c.restore()
        }
        for (c.font = s(r.fontWeightBold, r), f = 0; f < 16; f++)
            for (_ = (f + 2 + 16) * l, u = 0; u < 256; u++) c.save(), c.beginPath(), c.rect(u * a, _, a, l), c.clip(), c.fillStyle = r.colors.ansi[f].css, c.fillText(String.fromCharCode(u), u * a, _ + l / 2), c.restore();
        if (c.restore(), !("createImageBitmap" in e) || i.isFirefox || i.isSafari) return h;
        var d = c.getImageData(0, 0, h.width, h.height);
        return o(d, r.colors.background), e.createImageBitmap(d)
    }, t.clearColor = o
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(3),
        s = function(e) {
            function t(t, r, i) {
                var n = e.call(this) || this;
                return n.content = 0, n.combinedData = "", n.fg = t.fg, n.bg = t.bg, n.combinedData = r, n._width = i, n
            }
            return n(t, e), t.prototype.isCombined = function() {
                return 2097152
            }, t.prototype.getWidth = function() {
                return this._width
            }, t.prototype.getChars = function() {
                return this.combinedData
            }, t.prototype.getCode = function() {
                return 2097151
            }, t.prototype.setFromCharData = function(e) {
                throw new Error("not implemented")
            }, t.prototype.getAsCharData = function() {
                return [this.fg, this.getChars(), this.getWidth(), this.getCode()]
            }, t
        }(o.AttributeData);
    t.JoinedCellData = s;
    var a = function() {
        function e(e) {
            this._terminal = e, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new o.CellData
        }
        return e.prototype.registerCharacterJoiner = function(e) {
            var t = {
                id: this._nextCharacterJoinerId++,
                handler: e
            };
            return this._characterJoiners.push(t), t.id
        }, e.prototype.deregisterCharacterJoiner = function(e) {
            for (var t = 0; t < this._characterJoiners.length; t++)
                if (this._characterJoiners[t].id === e) return this._characterJoiners.splice(t, 1), !0;
            return !1
        }, e.prototype.getJoinedCharacters = function(e) {
            if (0 === this._characterJoiners.length) return [];
            var t = this._terminal.buffer.lines.get(e);
            if (0 === t.length) return [];
            for (var r = [], i = t.translateToString(!0), n = 0, s = 0, a = 0, l = t.getFg(0), h = t.getBg(0), c = 0; c < t.getTrimmedLength(); c++)
                if (t.loadCell(c, this._workCell), 0 !== this._workCell.getWidth()) {
                    if (this._workCell.fg !== l || this._workCell.bg !== h) {
                        if (c - n > 1)
                            for (var u = this._getJoinedRanges(i, a, s, t, n), f = 0; f < u.length; f++) r.push(u[f]);
                        n = c, a = s, l = this._workCell.fg, h = this._workCell.bg
                    }
                    s += this._workCell.getChars().length || o.WHITESPACE_CELL_CHAR.length
                } if (this._terminal.cols - n > 1)
                for (u = this._getJoinedRanges(i, a, s, t, n), f = 0; f < u.length; f++) r.push(u[f]);
            return r
        }, e.prototype._getJoinedRanges = function(t, r, i, n, o) {
            for (var s = t.substring(r, i), a = this._characterJoiners[0].handler(s), l = 1; l < this._characterJoiners.length; l++)
                for (var h = this._characterJoiners[l].handler(s), c = 0; c < h.length; c++) e._mergeRanges(a, h[c]);
            return this._stringRangesToCellRanges(a, n, o), a
        }, e.prototype._stringRangesToCellRanges = function(e, t, r) {
            var i = 0,
                n = !1,
                s = 0,
                a = e[i];
            if (a) {
                for (var l = r; l < this._terminal.cols; l++) {
                    var h = t.getWidth(l),
                        c = t.getString(l).length || o.WHITESPACE_CELL_CHAR.length;
                    if (0 !== h) {
                        if (!n && a[0] <= s && (a[0] = l, n = !0), a[1] <= s) {
                            if (a[1] = l, !(a = e[++i])) break;
                            a[0] <= s ? (a[0] = l, n = !0) : n = !1
                        }
                        s += c
                    }
                }
                a && (a[1] = this._terminal.cols)
            }
        }, e._mergeRanges = function(e, t) {
            for (var r = !1, i = 0; i < e.length; i++) {
                var n = e[i];
                if (r) {
                    if (t[1] <= n[0]) return e[i - 1][1] = t[1], e;
                    if (t[1] <= n[1]) return e[i - 1][1] = Math.max(t[1], n[1]), e.splice(i, 1), r = !1, e;
                    e.splice(i, 1), i--
                } else {
                    if (t[1] <= n[0]) return e.splice(i, 0, t), e;
                    if (t[1] <= n[1]) return n[0] = Math.min(t[0], n[0]), e;
                    t[0] < n[1] && (n[0] = Math.min(t[0], n[0]), r = !0)
                }
            }
            return r ? e[e.length - 1][1] = t[1] : e.push(t), e
        }, e
    }();
    t.CharacterJoinerRegistry = a
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(2),
        s = r(7),
        a = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r._terminal = t, r._zones = [], r._areZonesActive = !1, r._tooltipTimeout = null, r._currentZone = null, r._lastHoverCoords = [null, null], r.register(s.addDisposableDomListener(r._terminal.element, "mousedown", function(e) {
                    return r._onMouseDown(e)
                })), r._mouseMoveListener = function(e) {
                    return r._onMouseMove(e)
                }, r._mouseLeaveListener = function(e) {
                    return r._onMouseLeave(e)
                }, r._clickListener = function(e) {
                    return r._onClick(e)
                }, r
            }
            return n(t, e), t.prototype.dispose = function() {
                e.prototype.dispose.call(this), this._deactivate()
            }, t.prototype.add = function(e) {
                this._zones.push(e), 1 === this._zones.length && this._activate()
            }, t.prototype.clearAll = function(e, t) {
                if (0 !== this._zones.length) {
                    t || (e = 0, t = this._terminal.rows - 1);
                    for (var r = 0; r < this._zones.length; r++) {
                        var i = this._zones[r];
                        (i.y1 > e && i.y1 <= t + 1 || i.y2 > e && i.y2 <= t + 1 || i.y1 < e && i.y2 > t + 1) && (this._currentZone && this._currentZone === i && (this._currentZone.leaveCallback(), this._currentZone = null), this._zones.splice(r--, 1))
                    }
                    0 === this._zones.length && this._deactivate()
                }
            }, t.prototype._activate = function() {
                this._areZonesActive || (this._areZonesActive = !0, this._terminal.element.addEventListener("mousemove", this._mouseMoveListener), this._terminal.element.addEventListener("mouseleave", this._mouseLeaveListener), this._terminal.element.addEventListener("click", this._clickListener))
            }, t.prototype._deactivate = function() {
                this._areZonesActive && (this._areZonesActive = !1, this._terminal.element.removeEventListener("mousemove", this._mouseMoveListener), this._terminal.element.removeEventListener("mouseleave", this._mouseLeaveListener), this._terminal.element.removeEventListener("click", this._clickListener))
            }, t.prototype._onMouseMove = function(e) {
                this._lastHoverCoords[0] === e.pageX && this._lastHoverCoords[1] === e.pageY || (this._onHover(e), this._lastHoverCoords = [e.pageX, e.pageY])
            }, t.prototype._onHover = function(e) {
                var t = this,
                    r = this._findZoneEventAt(e);
                r !== this._currentZone && (this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = null, this._tooltipTimeout && clearTimeout(this._tooltipTimeout)), r && (this._currentZone = r, r.hoverCallback && r.hoverCallback(e), this._tooltipTimeout = setTimeout(function() {
                    return t._onTooltip(e)
                }, 500)))
            }, t.prototype._onTooltip = function(e) {
                this._tooltipTimeout = null;
                var t = this._findZoneEventAt(e);
                t && t.tooltipCallback && t.tooltipCallback(e)
            }, t.prototype._onMouseDown = function(e) {
                if (this._initialSelectionLength = this._terminal.getSelection().length, this._areZonesActive) {
                    var t = this._findZoneEventAt(e);
                    t && t.willLinkActivate(e) && (e.preventDefault(), e.stopImmediatePropagation())
                }
            }, t.prototype._onMouseLeave = function(e) {
                this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = null, this._tooltipTimeout && clearTimeout(this._tooltipTimeout))
            }, t.prototype._onClick = function(e) {
                var t = this._findZoneEventAt(e),
                    r = this._terminal.getSelection().length;
                t && r === this._initialSelectionLength && (t.clickCallback(e), e.preventDefault(), e.stopImmediatePropagation())
            }, t.prototype._findZoneEventAt = function(e) {
                var t = this._terminal.mouseHelper.getCoords(e, this._terminal.screenElement, this._terminal.charMeasure, this._terminal.cols, this._terminal.rows);
                if (!t) return null;
                for (var r = t[0], i = t[1], n = 0; n < this._zones.length; n++) {
                    var o = this._zones[n];
                    if (o.y1 === o.y2) {
                        if (i === o.y1 && r >= o.x1 && r < o.x2) return o
                    } else if (i === o.y1 && r >= o.x1 || i === o.y2 && r < o.x2 || i > o.y1 && i < o.y2) return o
                }
                return null
            }, t
        }(o.Disposable);
    t.MouseZoneManager = a;
    var l = function(e, t, r, i, n, o, s, a, l) {
        this.x1 = e, this.y1 = t, this.x2 = r, this.y2 = i, this.clickCallback = n, this.hoverCallback = o, this.tooltipCallback = s, this.leaveCallback = a, this.willLinkActivate = l
    };
    t.MouseZone = l
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e) {
            this._renderCoordinator = e
        }
        return e.getCoordsRelativeToElement = function(e, t) {
            var r = t.getBoundingClientRect();
            return [e.clientX - r.left, e.clientY - r.top]
        }, e.prototype.getCoords = function(t, r, i, n, o, s) {
            if (!i.width || !i.height) return null;
            var a = e.getCoordsRelativeToElement(t, r);
            return a ? (a[0] = Math.ceil((a[0] + (s ? this._renderCoordinator.dimensions.actualCellWidth / 2 : 0)) / this._renderCoordinator.dimensions.actualCellWidth), a[1] = Math.ceil(a[1] / this._renderCoordinator.dimensions.actualCellHeight), a[0] = Math.min(Math.max(a[0], 1), n + (s ? 1 : 0)), a[1] = Math.min(Math.max(a[1], 1), o), a) : null
        }, e.prototype.getRawByteCoords = function(e, t, r, i, n) {
            var o = this.getCoords(e, t, r, i, n),
                s = o[0],
                a = o[1];
            return {
                x: s += 32,
                y: a += 32
            }
        }, e
    }();
    t.MouseHelper = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e) {
            this._renderCallback = e
        }
        return e.prototype.dispose = function() {
            this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
        }, e.prototype.refresh = function(e, t, r) {
            var i = this;
            this._rowCount = r, e = void 0 !== e ? e : 0, t = void 0 !== t ? t : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e) : e, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t) : t, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                return i._innerRefresh()
            }))
        }, e.prototype._innerRefresh = function() {
            void 0 !== this._rowStart && void 0 !== this._rowEnd && void 0 !== this._rowCount && (this._rowStart = Math.max(this._rowStart, 0), this._rowEnd = Math.min(this._rowEnd, this._rowCount - 1), this._renderCallback(this._rowStart, this._rowEnd), this._rowStart = void 0, this._rowEnd = void 0, this._animationFrame = void 0)
        }, e
    }();
    t.RenderDebouncer = i
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._currentDevicePixelRatio = window.devicePixelRatio, t
        }
        return n(t, e), t.prototype.setListener = function(e) {
            var t = this;
            this._listener && this.clearListener(), this._listener = e, this._outerListener = function() {
                t._listener && (t._listener(window.devicePixelRatio, t._currentDevicePixelRatio), t._updateDpr())
            }, this._updateDpr()
        }, t.prototype.dispose = function() {
            e.prototype.dispose.call(this), this.clearListener()
        }, t.prototype._updateDpr = function() {
            this._resolutionMediaMatchList && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._currentDevicePixelRatio = window.devicePixelRatio, this._resolutionMediaMatchList = window.matchMedia("screen and (resolution: " + window.devicePixelRatio + "dppx)"), this._resolutionMediaMatchList.addListener(this._outerListener))
        }, t.prototype.clearListener = function() {
            this._resolutionMediaMatchList && this._listener && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._listener = void 0, this._outerListener = void 0)
        }, t
    }(r(2).Disposable);
    t.ScreenDprMonitor = o
}, function(e, t, r) {
    "use strict";
    const i = r(90);
    var n, o = e.exports;
    Object.assign(o, r(10), r(21));
    const s = 16,
        a = 4129,
        l = 65535,
        h = 1 << s - 1;

    function c(e, t) {
        return n || function() {
            n = new Array(256);
            for (var e = s - 8, t = 0; t < 256; t++) {
                for (var r = t << e & l, i = 0; i < 8; i++) 0 != (r & h) ? (r <<= 1, r ^= a) : r <<= 1;
                n[t] = r & l
            }
        }(), n[t >> 8 & 255] ^ (255 & t) << 8 ^ e
    }

    function u(e, t) {
        if (e.join() !== t.join()) throw new o.Error("crc", t, e)
    }
    o.CRC = {
        crc16: function(e) {
            for (var t = e[0], r = 1; r < e.length; r++) t = c(e[r], t);
            return t = c(0, c(0, t)), o.ENCODELIB.pack_u16_be(t)
        },
        crc32: function(e) {
            return o.ENCODELIB.pack_u32_le(i.buf(e) >>> 0)
        },
        verify16: function(e, t) {
            return u(this.crc16(e), t)
        },
        verify32: function(e, t) {
            try {
                u(this.crc32(e), t)
            } catch (t) {
                throw t.input = e.slice(0), t
            }
        }
    }
}, function(e, t, r) {
    var i = r(23),
        n = r(47),
        o = r(25),
        s = r(48);
    e.exports.Backoff = i, e.exports.FunctionCall = s, e.exports.FibonacciStrategy = o, e.exports.ExponentialStrategy = n, e.exports.fibonacci = function(e) {
        return new i(new o(e))
    }, e.exports.exponential = function(e) {
        return new i(new n(e))
    }, e.exports.call = function(e, t, r) {
        var i = Array.prototype.slice.call(arguments);
        return e = i[0], t = i.slice(1, i.length - 1), r = i[i.length - 1], new s(e, t, r)
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(49),
        n = r(20),
        o = r(84),
        s = function() {
            function e(e) {
                this._core = new i.Terminal(e), this._addonManager = new o.AddonManager
            }
            return Object.defineProperty(e.prototype, "onCursorMove", {
                get: function() {
                    return this._core.onCursorMove
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onLineFeed", {
                get: function() {
                    return this._core.onLineFeed
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onSelectionChange", {
                get: function() {
                    return this._core.onSelectionChange
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onData", {
                get: function() {
                    return this._core.onData
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onTitleChange", {
                get: function() {
                    return this._core.onTitleChange
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onScroll", {
                get: function() {
                    return this._core.onScroll
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onKey", {
                get: function() {
                    return this._core.onKey
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onRender", {
                get: function() {
                    return this._core.onRender
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onResize", {
                get: function() {
                    return this._core.onResize
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "element", {
                get: function() {
                    return this._core.element
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "textarea", {
                get: function() {
                    return this._core.textarea
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "rows", {
                get: function() {
                    return this._core.rows
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cols", {
                get: function() {
                    return this._core.cols
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "buffer", {
                get: function() {
                    return new a(this._core.buffer)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "markers", {
                get: function() {
                    return this._core.markers
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.blur = function() {
                this._core.blur()
            }, e.prototype.focus = function() {
                this._core.focus()
            }, e.prototype.on = function(e, t) {
                this._core.on(e, t)
            }, e.prototype.off = function(e, t) {
                this._core.off(e, t)
            }, e.prototype.emit = function(e, t) {
                this._core.emit(e, t)
            }, e.prototype.addDisposableListener = function(e, t) {
                return this._core.addDisposableListener(e, t)
            }, e.prototype.resize = function(e, t) {
                this._core.resize(e, t)
            }, e.prototype.writeln = function(e) {
                this._core.writeln(e)
            }, e.prototype.open = function(e) {
                this._core.open(e)
            }, e.prototype.attachCustomKeyEventHandler = function(e) {
                this._core.attachCustomKeyEventHandler(e)
            }, e.prototype.addCsiHandler = function(e, t) {
                return this._core.addCsiHandler(e, t)
            }, e.prototype.addOscHandler = function(e, t) {
                return this._core.addOscHandler(e, t)
            }, e.prototype.registerLinkMatcher = function(e, t, r) {
                return this._core.registerLinkMatcher(e, t, r)
            }, e.prototype.deregisterLinkMatcher = function(e) {
                this._core.deregisterLinkMatcher(e)
            }, e.prototype.registerCharacterJoiner = function(e) {
                return this._core.registerCharacterJoiner(e)
            }, e.prototype.deregisterCharacterJoiner = function(e) {
                this._core.deregisterCharacterJoiner(e)
            }, e.prototype.addMarker = function(e) {
                return this._core.addMarker(e)
            }, e.prototype.hasSelection = function() {
                return this._core.hasSelection()
            }, e.prototype.select = function(e, t, r) {
                this._core.select(e, t, r)
            }, e.prototype.getSelection = function() {
                return this._core.getSelection()
            }, e.prototype.getSelectionPosition = function() {
                return this._core.getSelectionPosition()
            }, e.prototype.clearSelection = function() {
                this._core.clearSelection()
            }, e.prototype.selectAll = function() {
                this._core.selectAll()
            }, e.prototype.selectLines = function(e, t) {
                this._core.selectLines(e, t)
            }, e.prototype.dispose = function() {
                this._addonManager.dispose(), this._core.dispose()
            }, e.prototype.destroy = function() {
                this._core.destroy()
            }, e.prototype.scrollLines = function(e) {
                this._core.scrollLines(e)
            }, e.prototype.scrollPages = function(e) {
                this._core.scrollPages(e)
            }, e.prototype.scrollToTop = function() {
                this._core.scrollToTop()
            }, e.prototype.scrollToBottom = function() {
                this._core.scrollToBottom()
            }, e.prototype.scrollToLine = function(e) {
                this._core.scrollToLine(e)
            }, e.prototype.clear = function() {
                this._core.clear()
            }, e.prototype.write = function(e) {
                this._core.write(e)
            }, e.prototype.writeUtf8 = function(e) {
                this._core.writeUtf8(e)
            }, e.prototype.getOption = function(e) {
                return this._core.getOption(e)
            }, e.prototype.setOption = function(e, t) {
                this._core.setOption(e, t)
            }, e.prototype.refresh = function(e, t) {
                this._core.refresh(e, t)
            }, e.prototype.reset = function() {
                this._core.reset()
            }, e.applyAddon = function(t) {
                t.apply(e)
            }, e.prototype.loadAddon = function(e) {
                return this._addonManager.loadAddon(this, e)
            }, Object.defineProperty(e, "strings", {
                get: function() {
                    return n
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.Terminal = s;
    var a = function() {
            function e(e) {
                this._buffer = e
            }
            return Object.defineProperty(e.prototype, "cursorY", {
                get: function() {
                    return this._buffer.y
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cursorX", {
                get: function() {
                    return this._buffer.x
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "viewportY", {
                get: function() {
                    return this._buffer.ydisp
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "baseY", {
                get: function() {
                    return this._buffer.ybase
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "length", {
                get: function() {
                    return this._buffer.lines.length
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getLine = function(e) {
                var t = this._buffer.lines.get(e);
                if (t) return new l(t)
            }, e
        }(),
        l = function() {
            function e(e) {
                this._line = e
            }
            return Object.defineProperty(e.prototype, "isWrapped", {
                get: function() {
                    return this._line.isWrapped
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getCell = function(e) {
                if (!(e < 0 || e >= this._line.length)) return new h(this._line, e)
            }, e.prototype.translateToString = function(e, t, r) {
                return this._line.translateToString(e, t, r)
            }, e
        }(),
        h = function() {
            function e(e, t) {
                this._line = e, this._x = t
            }
            return Object.defineProperty(e.prototype, "char", {
                get: function() {
                    return this._line.getString(this._x)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this._line.getWidth(this._x)
                },
                enumerable: !0,
                configurable: !0
            }), e
        }()
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.prototype.activate = function(e) {
            this._terminal = e
        }, e.prototype.dispose = function() {}, e.prototype.fit = function() {
            var e = this.proposeDimensions();
            if (e && this._terminal) {
                var t = this._terminal._core;
                this._terminal.rows === e.rows && this._terminal.cols === e.cols || (t._renderCoordinator.clear(), this._terminal.resize(e.cols, e.rows))
            }
        }, e.prototype.proposeDimensions = function() {
            if (this._terminal && this._terminal.element.parentElement) {
                var e = this._terminal._core,
                    t = window.getComputedStyle(this._terminal.element.parentElement),
                    r = parseInt(t.getPropertyValue("height")),
                    i = Math.max(0, parseInt(t.getPropertyValue("width"))),
                    n = window.getComputedStyle(this._terminal.element),
                    o = r - (parseInt(n.getPropertyValue("padding-top")) + parseInt(n.getPropertyValue("padding-bottom"))),
                    s = i - (parseInt(n.getPropertyValue("padding-right")) + parseInt(n.getPropertyValue("padding-left"))) - e.viewport.scrollBarWidth;
                return {
                    cols: Math.floor(s / e._renderCoordinator.dimensions.actualCellWidth),
                    rows: Math.floor(o / e._renderCoordinator.dimensions.actualCellHeight)
                }
            }
        }, e
    }();
    t.FitAddon = i
}, function(e, t, r) {
    window,
    e.exports = function(e) {
        var t = {};

        function r(i) {
            if (t[i]) return t[i].exports;
            var n = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, i) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) r.d(i, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return i
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 0)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = new RegExp("(?:^|[^\\da-z\\.-]+)((https?:\\/\\/)((([\\da-z\\.-]+)\\.([a-z\\.]{2,6}))|((\\d{1,3}\\.){3}\\d{1,3})|(localhost))(:\\d{1,5})?((\\/[\\/\\w\\.\\-%~:+]*)*([^:\"'\\s]))?(\\?[0-9\\w\\[\\]\\(\\)\\/\\?\\!#@$%&'*+,:;~\\=\\.\\-]*)?(#[0-9\\w\\[\\]\\(\\)\\/\\?\\!#@$%&'*+,:;~\\=\\.\\-]*)?)($|[^\\/\\w\\.\\-%]+)");

        function n(e, t) {
            window.open(t, "_blank")
        }
        var o = function() {
            function e(e, t) {
                void 0 === e && (e = n), void 0 === t && (t = {}), this._handler = e, this._options = t, this._options.matchIndex = 1
            }
            return e.prototype.activate = function(e) {
                this._terminal = e, this._linkMatcherId = this._terminal.registerLinkMatcher(i, this._handler, this._options)
            }, e.prototype.dispose = function() {
                void 0 !== this._linkMatcherId && void 0 !== this._terminal && this._terminal.deregisterLinkMatcher(this._linkMatcherId)
            }, e
        }();
        t.WebLinksAddon = o
    }])
}, function(e, t, r) {
    var i = r(5),
        n = e.exports = r(46);

    function o(e, t, r, n) {
        r = r || "";
        var o = new e(i.format.apply(this, [r].concat(n)));
        throw Error.captureStackTrace(o, t), o
    }

    function s(e, t, r) {
        o(n.IllegalArgumentError, e, t, r)
    }

    function a(e) {
        var t = typeof e;
        if ("object" == t) {
            if (!e) return "null";
            if (e instanceof Array) return "array"
        }
        return t
    }

    function l(e) {
        return function(t, r) {
            var i = a(t);
            if (i == e) return t;
            s(arguments.callee, r || 'Expected "' + e + '" but got "' + i + '".', Array.prototype.slice.call(arguments, 2))
        }
    }
    e.exports.checkArgument = function(e, t) {
        e || s(arguments.callee, t, Array.prototype.slice.call(arguments, 2))
    }, e.exports.checkState = function(e, t) {
        e || function(e, t, r) {
            o(n.IllegalStateError, e, t, r)
        }(arguments.callee, t, Array.prototype.slice.call(arguments, 2))
    }, e.exports.checkIsDef = function(e, t) {
        if (void 0 !== e) return e;
        s(arguments.callee, t || "Expected value to be defined but was undefined.", Array.prototype.slice.call(arguments, 2))
    }, e.exports.checkIsDefAndNotNull = function(e, t) {
        if (null != e) return e;
        s(arguments.callee, t || 'Expected value to be defined and not null but got "' + a(e) + '".', Array.prototype.slice.call(arguments, 2))
    }, e.exports.checkIsString = l("string"), e.exports.checkIsArray = l("array"), e.exports.checkIsNumber = l("number"), e.exports.checkIsBoolean = l("boolean"), e.exports.checkIsFunction = l("function"), e.exports.checkIsObject = l("object")
}, function(e, t) {
    var r, i, n = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    }! function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            r = o
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            i = s
        }
    }();
    var l, h = [],
        c = !1,
        u = -1;

    function f() {
        c && l && (c = !1, l.length ? h = l.concat(h) : u = -1, h.length && _())
    }

    function _() {
        if (!c) {
            var e = a(f);
            c = !0;
            for (var t = h.length; t;) {
                for (l = h, h = []; ++u < t;) l && l[u].run();
                u = -1, t = h.length
            }
            l = null, c = !1,
                function(e) {
                    if (i === clearTimeout) return clearTimeout(e);
                    if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                    try {
                        i(e)
                    } catch (t) {
                        try {
                            return i.call(null, e)
                        } catch (t) {
                            return i.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function d(e, t) {
        this.fun = e, this.array = t
    }

    function p() {}
    n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        h.push(new d(e, t)), 1 !== h.length || c || a(_)
    }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(e) {
        return []
    }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, n.cwd = function() {
        return "/"
    }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, n.umask = function() {
        return 0
    }
}, function(e, t) {
    e.exports = function(e) {
        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
    }
}, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : e.exports = function(e, t) {
        e.super_ = t;
        var r = function() {};
        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
    }
}, function(e, t, r) {
    var i = r(5);

    function n(e) {
        Error.call(this, e), this.message = e
    }

    function o(e) {
        Error.call(this, e), this.message = e
    }
    i.inherits(n, Error), n.prototype.name = "IllegalArgumentError", i.inherits(o, Error), o.prototype.name = "IllegalStateError", e.exports.IllegalStateError = o, e.exports.IllegalArgumentError = n
}, function(e, t, r) {
    var i = r(5),
        n = r(16),
        o = r(24);

    function s(e) {
        o.call(this, e), this.backoffDelay_ = 0, this.nextBackoffDelay_ = this.getInitialDelay(), this.factor_ = s.DEFAULT_FACTOR, e && void 0 !== e.factor && (n.checkArgument(e.factor > 1, "Exponential factor should be greater than 1 but got %s.", e.factor), this.factor_ = e.factor)
    }
    i.inherits(s, o), s.DEFAULT_FACTOR = 2, s.prototype.next_ = function() {
        return this.backoffDelay_ = Math.min(this.nextBackoffDelay_, this.getMaxDelay()), this.nextBackoffDelay_ = this.backoffDelay_ * this.factor_, this.backoffDelay_
    }, s.prototype.reset_ = function() {
        this.backoffDelay_ = 0, this.nextBackoffDelay_ = this.getInitialDelay()
    }, e.exports = s
}, function(e, t, r) {
    var i = r(15),
        n = r(16),
        o = r(5),
        s = r(23),
        a = r(25);

    function l(e, t, r) {
        i.EventEmitter.call(this), n.checkIsFunction(e, "Expected fn to be a function."), n.checkIsArray(t, "Expected args to be an array."), n.checkIsFunction(r, "Expected callback to be a function."), this.function_ = e, this.arguments_ = t, this.callback_ = r, this.lastResult_ = [], this.numRetries_ = 0, this.backoff_ = null, this.strategy_ = null, this.failAfter_ = -1, this.retryPredicate_ = l.DEFAULT_RETRY_PREDICATE_, this.state_ = l.State_.PENDING
    }
    o.inherits(l, i.EventEmitter), l.State_ = {
        PENDING: 0,
        RUNNING: 1,
        COMPLETED: 2,
        ABORTED: 3
    }, l.DEFAULT_RETRY_PREDICATE_ = function(e) {
        return !0
    }, l.prototype.isPending = function() {
        return this.state_ == l.State_.PENDING
    }, l.prototype.isRunning = function() {
        return this.state_ == l.State_.RUNNING
    }, l.prototype.isCompleted = function() {
        return this.state_ == l.State_.COMPLETED
    }, l.prototype.isAborted = function() {
        return this.state_ == l.State_.ABORTED
    }, l.prototype.setStrategy = function(e) {
        return n.checkState(this.isPending(), "FunctionCall in progress."), this.strategy_ = e, this
    }, l.prototype.retryIf = function(e) {
        return n.checkState(this.isPending(), "FunctionCall in progress."), this.retryPredicate_ = e, this
    }, l.prototype.getLastResult = function() {
        return this.lastResult_.concat()
    }, l.prototype.getNumRetries = function() {
        return this.numRetries_
    }, l.prototype.failAfter = function(e) {
        return n.checkState(this.isPending(), "FunctionCall in progress."), this.failAfter_ = e, this
    }, l.prototype.abort = function() {
        this.isCompleted() || this.isAborted() || (this.isRunning() && this.backoff_.reset(), this.state_ = l.State_.ABORTED, this.lastResult_ = [new Error("Backoff aborted.")], this.emit("abort"), this.doCallback_())
    }, l.prototype.start = function(e) {
        n.checkState(!this.isAborted(), "FunctionCall is aborted."), n.checkState(this.isPending(), "FunctionCall already started.");
        var t = this.strategy_ || new a;
        this.backoff_ = e ? e(t) : new s(t), this.backoff_.on("ready", this.doCall_.bind(this, !0)), this.backoff_.on("fail", this.doCallback_.bind(this)), this.backoff_.on("backoff", this.handleBackoff_.bind(this)), this.failAfter_ > 0 && this.backoff_.failAfter(this.failAfter_), this.state_ = l.State_.RUNNING, this.doCall_(!1)
    }, l.prototype.doCall_ = function(e) {
        e && this.numRetries_++;
        var t = ["call"].concat(this.arguments_);
        i.EventEmitter.prototype.emit.apply(this, t);
        var r = this.handleFunctionCallback_.bind(this);
        this.function_.apply(null, this.arguments_.concat(r))
    }, l.prototype.doCallback_ = function() {
        this.callback_.apply(null, this.lastResult_)
    }, l.prototype.handleFunctionCallback_ = function() {
        if (!this.isAborted()) {
            var e = Array.prototype.slice.call(arguments);
            this.lastResult_ = e, i.EventEmitter.prototype.emit.apply(this, ["callback"].concat(e));
            var t = e[0];
            t && this.retryPredicate_(t) ? this.backoff_.backoff(t) : (this.state_ = l.State_.COMPLETED, this.doCallback_())
        }
    }, l.prototype.handleBackoff_ = function(e, t, r) {
        this.emit("backoff", e, t, r)
    }, e.exports = l
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(50),
        s = r(26),
        a = r(54),
        l = r(55),
        h = r(56),
        c = r(57),
        u = r(12),
        f = r(58),
        _ = r(61),
        d = r(71),
        p = r(72),
        m = r(75),
        y = r(8),
        g = r(7),
        v = r(20),
        b = r(34),
        C = r(76),
        w = r(33),
        S = r(77),
        E = r(29),
        x = r(78),
        A = r(80),
        L = r(81),
        k = r(4),
        T = r(3),
        R = r(82),
        M = r(30),
        D = r(83),
        O = "undefined" != typeof window ? window.document : null,
        H = ["cols", "rows"],
        I = {
            cols: 80,
            rows: 24,
            convertEol: !1,
            termName: "xterm",
            cursorBlink: !1,
            cursorStyle: "block",
            bellSound: C.DEFAULT_BELL_SOUND,
            bellStyle: "none",
            drawBoldTextInBrightColors: !0,
            enableBold: !0,
            experimentalCharAtlas: "static",
            fontFamily: "courier-new, courier, monospace",
            fontSize: 15,
            fontWeight: "normal",
            fontWeightBold: "bold",
            lineHeight: 1,
            letterSpacing: 0,
            scrollback: 1e3,
            screenKeys: !1,
            screenReaderMode: !1,
            debug: !1,
            macOptionIsMeta: !1,
            macOptionClickForcesSelection: !1,
            cancelEvents: !1,
            disableStdin: !1,
            useFlowControl: !1,
            allowTransparency: !1,
            tabStopWidth: 8,
            theme: void 0,
            rightClickSelectsWord: y.isMac,
            rendererType: "canvas",
            windowsMode: !1
        },
        B = function(e) {
            function t(t) {
                void 0 === t && (t = {});
                var r = e.call(this) || this;
                return r.browser = y, r._blankLine = null, r._onCursorMove = new k.EventEmitter2, r._onData = new k.EventEmitter2, r._onKey = new k.EventEmitter2, r._onLineFeed = new k.EventEmitter2, r._onRender = new k.EventEmitter2, r._onResize = new k.EventEmitter2, r._onScroll = new k.EventEmitter2, r._onSelectionChange = new k.EventEmitter2, r._onTitleChange = new k.EventEmitter2, r.options = L.clone(t), r._setup(), r.onCursorMove(function() {
                    return r.emit("cursormove")
                }), r.onData(function(e) {
                    return r.emit("data", e)
                }), r.onKey(function(e) {
                    return r.emit("key", e.key, e.domEvent)
                }), r.onLineFeed(function() {
                    return r.emit("linefeed")
                }), r.onRender(function(e) {
                    return r.emit("refresh", e)
                }), r.onResize(function(e) {
                    return r.emit("resize", e)
                }), r.onSelectionChange(function() {
                    return r.emit("selection")
                }), r.onScroll(function(e) {
                    return r.emit("scroll", e)
                }), r.onTitleChange(function(e) {
                    return r.emit("title", e)
                }), r
            }
            return n(t, e), Object.defineProperty(t.prototype, "onCursorMove", {
                get: function() {
                    return this._onCursorMove.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onData", {
                get: function() {
                    return this._onData.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onKey", {
                get: function() {
                    return this._onKey.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onLineFeed", {
                get: function() {
                    return this._onLineFeed.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onRender", {
                get: function() {
                    return this._onRender.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onResize", {
                get: function() {
                    return this._onResize.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onScroll", {
                get: function() {
                    return this._onScroll.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onSelectionChange", {
                get: function() {
                    return this._onSelectionChange.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onTitleChange", {
                get: function() {
                    return this._onTitleChange.event
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.dispose = function() {
                e.prototype.dispose.call(this), this._windowsMode && (this._windowsMode.dispose(), this._windowsMode = void 0), this._customKeyEventHandler = null, E.removeTerminalFromCache(this), this.handler = function() {}, this.write = function() {}, this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element)
            }, t.prototype.destroy = function() {
                this.dispose()
            }, t.prototype._setup = function() {
                var e = this;
                Object.keys(I).forEach(function(t) {
                    null !== e.options[t] && void 0 !== e.options[t] || (e.options[t] = I[t])
                }), this._parent = O ? O.body : null, this.cols = Math.max(this.options.cols, 2), this.rows = Math.max(this.options.rows, 1), this.options.handler && this.onData(this.options.handler), this.cursorState = 0, this.cursorHidden = !1, this._customKeyEventHandler = null, this.applicationKeypad = !1, this.applicationCursor = !1, this.originMode = !1, this.insertMode = !1, this.wraparoundMode = !0, this.bracketedPasteMode = !1, this.charset = null, this.gcharset = null, this.glevel = 0, this.charsets = [null], this.curAttrData = T.DEFAULT_ATTR_DATA.clone(), this._eraseAttrData = T.DEFAULT_ATTR_DATA.clone(), this.params = [], this.currentParam = 0, this.writeBuffer = [], this.writeBufferUtf8 = [], this._writeInProgress = !1, this._xoffSentToCatchUp = !1, this._userScrolling = !1, this._inputHandler = new f.InputHandler(this), this._inputHandler.onCursorMove(function() {
                    return e._onCursorMove.fire()
                }), this._inputHandler.onLineFeed(function() {
                    return e._onLineFeed.fire()
                }), this._inputHandler.onData(function(t) {
                    return e._onData.fire(t)
                }), this.register(this._inputHandler), this.selectionManager = this.selectionManager || null, this.linkifier = this.linkifier || new d.Linkifier(this), this._mouseZoneManager = this._mouseZoneManager || null, this.soundManager = this.soundManager || new C.SoundManager(this), this.buffers = new o.BufferSet(this), this.selectionManager && (this.selectionManager.clearSelection(), this.selectionManager.initBuffersListeners()), this.options.windowsMode && (this._windowsMode = R.applyWindowsMode(this))
            }, Object.defineProperty(t.prototype, "buffer", {
                get: function() {
                    return this.buffers.active
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.eraseAttrData = function() {
                return this._eraseAttrData.bg &= -67108864, this._eraseAttrData.bg |= 67108863 & this.curAttrData.bg, this._eraseAttrData
            }, t.prototype.focus = function() {
                this.textarea && this.textarea.focus({
                    preventScroll: !0
                })
            }, Object.defineProperty(t.prototype, "isFocused", {
                get: function() {
                    return O.activeElement === this.textarea && O.hasFocus()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getOption = function(e) {
                if (!(e in I)) throw new Error('No option with key "' + e + '"');
                return this.options[e]
            }, t.prototype.setOption = function(e, t) {
                if (!(e in I)) throw new Error('No option with key "' + e + '"');
                if (-1 !== H.indexOf(e) && console.error('Option "' + e + '" can only be set in the constructor'), this.options[e] !== t) {
                    switch (e) {
                        case "bellStyle":
                            t || (t = "none");
                            break;
                        case "cursorStyle":
                            t || (t = "block");
                            break;
                        case "fontWeight":
                            t || (t = "normal");
                            break;
                        case "fontWeightBold":
                            t || (t = "bold");
                            break;
                        case "lineHeight":
                            if (t < 1) return void console.warn(e + " cannot be less than 1, value: " + t);
                        case "rendererType":
                            t || (t = "canvas");
                            break;
                        case "tabStopWidth":
                            if (t < 1) return void console.warn(e + " cannot be less than 1, value: " + t);
                            break;
                        case "theme":
                            this._setTheme(t);
                            break;
                        case "scrollback":
                            if ((t = Math.min(t, s.MAX_BUFFER_SIZE)) < 0) return void console.warn(e + " cannot be less than 0, value: " + t);
                            if (this.options[e] !== t) {
                                var r = this.rows + t;
                                if (this.buffer.lines.length > r) {
                                    var i = this.buffer.lines.length - r,
                                        n = this.buffer.ydisp - i < 0;
                                    this.buffer.lines.trimStart(i), this.buffer.ybase = Math.max(this.buffer.ybase - i, 0), this.buffer.ydisp = Math.max(this.buffer.ydisp - i, 0), n && this.refresh(0, this.rows - 1)
                                }
                            }
                    }
                    switch (this.options[e] = t, e) {
                        case "fontFamily":
                        case "fontSize":
                            this._renderCoordinator && (this._renderCoordinator.clear(), this.charMeasure.measure(this.options));
                            break;
                        case "drawBoldTextInBrightColors":
                        case "experimentalCharAtlas":
                        case "enableBold":
                        case "letterSpacing":
                        case "lineHeight":
                        case "fontWeight":
                        case "fontWeightBold":
                            this._renderCoordinator && (this._renderCoordinator.clear(), this._renderCoordinator.onResize(this.cols, this.rows), this.refresh(0, this.rows - 1));
                            break;
                        case "rendererType":
                            this._renderCoordinator && this._renderCoordinator.setRenderer(this._createRenderer());
                            break;
                        case "scrollback":
                            this.buffers.resize(this.cols, this.rows), this.viewport && this.viewport.syncScrollArea();
                            break;
                        case "screenReaderMode":
                            t ? !this._accessibilityManager && this._renderCoordinator && (this._accessibilityManager = new S.AccessibilityManager(this, this._renderCoordinator.dimensions)) : this._accessibilityManager && (this._accessibilityManager.dispose(), this._accessibilityManager = null);
                            break;
                        case "tabStopWidth":
                            this.buffers.setupTabStops();
                            break;
                        case "windowsMode":
                            t ? this._windowsMode || (this._windowsMode = R.applyWindowsMode(this)) : this._windowsMode && (this._windowsMode.dispose(), this._windowsMode = void 0)
                    }
                    this._renderCoordinator && this._renderCoordinator.onOptionsChanged()
                }
            }, t.prototype._onTextAreaFocus = function(e) {
                this.sendFocus && this.handler(u.C0.ESC + "[I"), this.updateCursorStyle(e), this.element.classList.add("focus"), this.showCursor(), this.emit("focus")
            }, t.prototype.blur = function() {
                return this.textarea.blur()
            }, t.prototype._onTextAreaBlur = function() {
                this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.sendFocus && this.handler(u.C0.ESC + "[O"), this.element.classList.remove("focus"), this.emit("blur")
            }, t.prototype._initGlobal = function() {
                var e = this;
                this._bindKeys(), this.register(g.addDisposableDomListener(this.element, "copy", function(t) {
                    e.hasSelection() && c.copyHandler(t, e, e.selectionManager)
                }));
                var t = function(t) {
                    return c.pasteHandler(t, e)
                };
                this.register(g.addDisposableDomListener(this.textarea, "paste", t)), this.register(g.addDisposableDomListener(this.element, "paste", t)), y.isFirefox ? this.register(g.addDisposableDomListener(this.element, "mousedown", function(t) {
                    2 === t.button && c.rightClickHandler(t, e, e.selectionManager, e.options.rightClickSelectsWord)
                })) : this.register(g.addDisposableDomListener(this.element, "contextmenu", function(t) {
                    c.rightClickHandler(t, e, e.selectionManager, e.options.rightClickSelectsWord)
                })), y.isLinux && this.register(g.addDisposableDomListener(this.element, "auxclick", function(t) {
                    1 === t.button && c.moveTextAreaUnderMouseCursor(t, e)
                }))
            }, t.prototype._bindKeys = function() {
                var e = this,
                    t = this;
                this.register(g.addDisposableDomListener(this.element, "keydown", function(e) {
                    O.activeElement === this && t._keyDown(e)
                }, !0)), this.register(g.addDisposableDomListener(this.element, "keypress", function(e) {
                    O.activeElement === this && t._keyPress(e)
                }, !0)), this.register(g.addDisposableDomListener(this.element, "keyup", function(r) {
                    (function(e) {
                        return 16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode
                    })(r) || e.focus(), t._keyUp(r)
                }, !0)), this.register(g.addDisposableDomListener(this.textarea, "keydown", function(t) {
                    return e._keyDown(t)
                }, !0)), this.register(g.addDisposableDomListener(this.textarea, "keypress", function(t) {
                    return e._keyPress(t)
                }, !0)), this.register(g.addDisposableDomListener(this.textarea, "compositionstart", function() {
                    return e._compositionHelper.compositionstart()
                })), this.register(g.addDisposableDomListener(this.textarea, "compositionupdate", function(t) {
                    return e._compositionHelper.compositionupdate(t)
                })), this.register(g.addDisposableDomListener(this.textarea, "compositionend", function() {
                    return e._compositionHelper.compositionend()
                })), this.register(this.onRender(function() {
                    return e._compositionHelper.updateCompositionElements()
                })), this.register(this.onRender(function(t) {
                    return e._queueLinkification(t.start, t.end)
                }))
            }, t.prototype.open = function(e) {
                var t = this;
                if (this._parent = e || this._parent, !this._parent) throw new Error("Terminal requires a parent element.");
                this._context = this._parent.ownerDocument.defaultView, this._document = this._parent.ownerDocument, this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), this.element.setAttribute("tabindex", "0"), this._parent.appendChild(this.element);
                var r = O.createDocumentFragment();
                this._viewportElement = O.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), r.appendChild(this._viewportElement), this._viewportScrollArea = O.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = O.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._helperContainer = O.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), r.appendChild(this.screenElement), this._mouseZoneManager = new w.MouseZoneManager(this), this.register(this._mouseZoneManager), this.register(this.onScroll(function() {
                    return t._mouseZoneManager.clearAll()
                })), this.linkifier.attachToDom(this._mouseZoneManager), this.textarea = O.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", v.promptLabel), this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this.register(g.addDisposableDomListener(this.textarea, "focus", function(e) {
                    return t._onTextAreaFocus(e)
                })), this.register(g.addDisposableDomListener(this.textarea, "blur", function() {
                    return t._onTextAreaBlur()
                })), this._helperContainer.appendChild(this.textarea), this._compositionView = O.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = new a.CompositionHelper(this.textarea, this._compositionView, this), this._helperContainer.appendChild(this._compositionView), this.charMeasure = new m.CharMeasure(O, this._helperContainer), this.element.appendChild(r), this._theme = this.options.theme, this._colorManager = new M.ColorManager(O, this.options.allowTransparency), this._colorManager.setTheme(this._theme);
                var i = this._createRenderer();
                this._renderCoordinator = new D.RenderCoordinator(i, this.rows, this.screenElement), this._renderCoordinator.onRender(function(e) {
                    return t._onRender.fire(e)
                }), this.onResize(function(e) {
                    return t._renderCoordinator.resize(e.cols, e.rows)
                }), this.viewport = new h.Viewport(this, this._viewportElement, this._viewportScrollArea, this.charMeasure, this._renderCoordinator.dimensions), this.viewport.onThemeChange(this._colorManager.colors), this.register(this.viewport), this.register(this.onCursorMove(function() {
                    return t._renderCoordinator.onCursorMove()
                })), this.register(this.onResize(function() {
                    return t._renderCoordinator.onResize(t.cols, t.rows)
                })), this.register(this.addDisposableListener("blur", function() {
                    return t._renderCoordinator.onBlur()
                })), this.register(this.addDisposableListener("focus", function() {
                    return t._renderCoordinator.onFocus()
                })), this.register(this.charMeasure.onCharSizeChanged(function() {
                    return t._renderCoordinator.onCharSizeChanged()
                })), this.register(this._renderCoordinator.onDimensionsChange(function() {
                    return t.viewport.syncScrollArea()
                })), this.selectionManager = new p.SelectionManager(this, this.charMeasure), this.register(this.selectionManager.onSelectionChange(function() {
                    return t._onSelectionChange.fire()
                })), this.register(g.addDisposableDomListener(this.element, "mousedown", function(e) {
                    return t.selectionManager.onMouseDown(e)
                })), this.register(this.selectionManager.onRedrawRequest(function(e) {
                    return t._renderCoordinator.onSelectionChanged(e.start, e.end, e.columnSelectMode)
                })), this.register(this.selectionManager.onLinuxMouseSelection(function(e) {
                    t.textarea.value = e, t.textarea.focus(), t.textarea.select()
                })), this.register(this.onScroll(function() {
                    t.viewport.syncScrollArea(), t.selectionManager.refresh()
                })), this.register(g.addDisposableDomListener(this._viewportElement, "scroll", function() {
                    return t.selectionManager.refresh()
                })), this.mouseHelper = new b.MouseHelper(this._renderCoordinator), this.element.classList.toggle("enable-mouse-events", this.mouseEvents), this.mouseEvents ? this.selectionManager.disable() : this.selectionManager.enable(), this.options.screenReaderMode && (this._accessibilityManager = new S.AccessibilityManager(this, this._renderCoordinator.dimensions), this._accessibilityManager.register(this._renderCoordinator.onDimensionsChange(function(e) {
                    return t._accessibilityManager.setDimensions(e)
                }))), this.charMeasure.measure(this.options), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse()
            }, t.prototype._createRenderer = function() {
                switch (this.options.rendererType) {
                    case "canvas":
                        return new _.Renderer(this, this._colorManager.colors);
                    case "dom":
                        return new x.DomRenderer(this, this._colorManager.colors);
                    default:
                        throw new Error('Unrecognized rendererType "' + this.options.rendererType + '"')
                }
            }, t.prototype._setTheme = function(e) {
                this._theme = e, this._colorManager && this._colorManager.setTheme(e), this._renderCoordinator && this._renderCoordinator.setColors(this._colorManager.colors), this.viewport && this.viewport.onThemeChange(this._colorManager.colors)
            }, t.prototype.bindMouse = function() {
                var e = this,
                    t = this.element,
                    r = this,
                    i = 32;

                function n(e) {
                    var t, n;
                    if (t = function(e) {
                            var t, i, n;
                            switch (e.overrideType || e.type) {
                                case "mousedown":
                                    t = null !== e.button && void 0 !== e.button ? +e.button : null !== e.which && void 0 !== e.which ? e.which - 1 : null, y.isMSIE && (t = 1 === t ? 0 : 4 === t ? 1 : t);
                                    break;
                                case "mouseup":
                                    t = 3;
                                    break;
                                case "DOMMouseScroll":
                                    t = e.detail < 0 ? 64 : 65;
                                    break;
                                case "wheel":
                                    t = e.deltaY < 0 ? 64 : 65
                            }
                            return n = (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0) | (i = e.ctrlKey ? 16 : 0), r.vt200Mouse ? n &= i : r.normalMouse || (n = 0), 32 + (n << 2) + t
                        }(e), n = r.mouseHelper.getRawByteCoords(e, r.screenElement, r.charMeasure, r.cols, r.rows)) switch (s(t, n), e.overrideType || e.type) {
                        case "mousedown":
                            i = t;
                            break;
                        case "mouseup":
                            i = 32
                    }
                }

                function o(e, t) {
                    if (r.utfMouse) {
                        if (t > 2047) return void e.push(2047);
                        e.push(t)
                    } else {
                        if (255 === t) return void e.push(0);
                        t > 127 && (t = 127), e.push(t)
                    }
                }

                function s(e, t) {
                    if (r._vt300Mouse) {
                        e &= 3, t.x -= 32, t.y -= 32;
                        var i = u.C0.ESC + "[24";
                        if (0 === e) i += "1";
                        else if (1 === e) i += "3";
                        else if (2 === e) i += "5";
                        else {
                            if (3 === e) return;
                            i += "0"
                        }
                        return i += "~[" + t.x + "," + t.y + "]\r", void r.handler(i)
                    }
                    if (r._decLocator) return e &= 3, t.x -= 32, t.y -= 32, 0 === e ? e = 2 : 1 === e ? e = 4 : 2 === e ? e = 6 : 3 === e && (e = 3), void r.handler(u.C0.ESC + "[" + e + ";" + (3 === e ? 4 : 0) + ";" + t.y + ";" + t.x + ";" + t.page || "0&w");
                    if (r.urxvtMouse) return t.x -= 32, t.y -= 32, t.x++, t.y++, void r.handler(u.C0.ESC + "[" + e + ";" + t.x + ";" + t.y + "M");
                    if (r.sgrMouse) return t.x -= 32, t.y -= 32, void r.handler(u.C0.ESC + "[<" + ((3 == (3 & e) ? -4 & e : e) - 32) + ";" + t.x + ";" + t.y + (3 == (3 & e) ? "m" : "M"));
                    var n = [];
                    o(n, e), o(n, t.x), o(n, t.y), r.handler(u.C0.ESC + "[M" + String.fromCharCode.apply(String, n))
                }
                this.register(g.addDisposableDomListener(t, "mousedown", function(t) {
                    if (t.preventDefault(), e.focus(), e.mouseEvents && !e.selectionManager.shouldForceSelection(t)) {
                        if (n(t), e.vt200Mouse) return t.overrideType = "mouseup", n(t), e.cancel(t);
                        var o;
                        e.normalMouse && (o = function(t) {
                            e.normalMouse && function(e) {
                                var t = i,
                                    n = r.mouseHelper.getRawByteCoords(e, r.screenElement, r.charMeasure, r.cols, r.rows);
                                n && s(t += 32, n)
                            }(t)
                        }, e._document.addEventListener("mousemove", o));
                        var a = function(t) {
                            return e.normalMouse && !e.x10Mouse && n(t), o && (e._document.removeEventListener("mousemove", o), o = null), e._document.removeEventListener("mouseup", a), e.cancel(t)
                        };
                        return e._document.addEventListener("mouseup", a), e.cancel(t)
                    }
                })), this.register(g.addDisposableDomListener(t, "wheel", function(t) {
                    if (e.mouseEvents) e.x10Mouse || e._vt300Mouse || e._decLocator || (n(t), t.preventDefault());
                    else if (!e.buffer.hasScrollback) {
                        var r = e.viewport.getLinesScrolled(t);
                        if (0 === r) return;
                        for (var i = u.C0.ESC + (e.applicationCursor ? "O" : "[") + (t.deltaY < 0 ? "A" : "B"), o = "", s = 0; s < Math.abs(r); s++) o += i;
                        e.handler(o)
                    }
                })), this.register(g.addDisposableDomListener(t, "wheel", function(t) {
                    if (!e.mouseEvents) return e.viewport.onWheel(t), e.cancel(t)
                })), this.register(g.addDisposableDomListener(t, "touchstart", function(t) {
                    if (!e.mouseEvents) return e.viewport.onTouchStart(t), e.cancel(t)
                })), this.register(g.addDisposableDomListener(t, "touchmove", function(t) {
                    if (!e.mouseEvents) return e.viewport.onTouchMove(t), e.cancel(t)
                }))
            }, t.prototype.refresh = function(e, t) {
                this._renderCoordinator && this._renderCoordinator.refreshRows(e, t)
            }, t.prototype._queueLinkification = function(e, t) {
                this.linkifier && this.linkifier.linkifyRows(e, t)
            }, t.prototype.updateCursorStyle = function(e) {
                this.selectionManager && this.selectionManager.shouldColumnSelect(e) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select")
            }, t.prototype.showCursor = function() {
                this.cursorState || (this.cursorState = 1, this.refresh(this.buffer.y, this.buffer.y))
            }, t.prototype.scroll = function(e) {
                var t;
                void 0 === e && (e = !1), t = this._blankLine;
                var r = this.eraseAttrData();
                t && t.length === this.cols && t.getFg(0) === r.fg && t.getBg(0) === r.bg || (t = this.buffer.getBlankLine(r, e), this._blankLine = t), t.isWrapped = e;
                var i = this.buffer.ybase + this.buffer.scrollTop,
                    n = this.buffer.ybase + this.buffer.scrollBottom;
                if (0 === this.buffer.scrollTop) {
                    var o = this.buffer.lines.isFull;
                    n === this.buffer.lines.length - 1 ? o ? this.buffer.lines.recycle().copyFrom(t) : this.buffer.lines.push(t.clone()) : this.buffer.lines.splice(n + 1, 0, t.clone()), o ? this._userScrolling && (this.buffer.ydisp = Math.max(this.buffer.ydisp - 1, 0)) : (this.buffer.ybase++, this._userScrolling || this.buffer.ydisp++)
                } else {
                    var s = n - i + 1;
                    this.buffer.lines.shiftElements(i + 1, s - 1, -1), this.buffer.lines.set(n, t.clone())
                }
                this._userScrolling || (this.buffer.ydisp = this.buffer.ybase), this.updateRange(this.buffer.scrollTop), this.updateRange(this.buffer.scrollBottom), this._onScroll.fire(this.buffer.ydisp)
            }, t.prototype.scrollLines = function(e, t) {
                if (e < 0) {
                    if (0 === this.buffer.ydisp) return;
                    this._userScrolling = !0
                } else e + this.buffer.ydisp >= this.buffer.ybase && (this._userScrolling = !1);
                var r = this.buffer.ydisp;
                this.buffer.ydisp = Math.max(Math.min(this.buffer.ydisp + e, this.buffer.ybase), 0), r !== this.buffer.ydisp && (t || this._onScroll.fire(this.buffer.ydisp), this.refresh(0, this.rows - 1))
            }, t.prototype.scrollPages = function(e) {
                this.scrollLines(e * (this.rows - 1))
            }, t.prototype.scrollToTop = function() {
                this.scrollLines(-this.buffer.ydisp)
            }, t.prototype.scrollToBottom = function() {
                this.scrollLines(this.buffer.ybase - this.buffer.ydisp)
            }, t.prototype.scrollToLine = function(e) {
                var t = e - this.buffer.ydisp;
                0 !== t && this.scrollLines(t)
            }, t.prototype.writeUtf8 = function(e) {
                var t = this;
                this._isDisposed || e && (this.writeBufferUtf8.push(e), this.options.useFlowControl && !this._xoffSentToCatchUp && this.writeBufferUtf8.length >= 5 && (this.handler(u.C0.DC3), this._xoffSentToCatchUp = !0), !this._writeInProgress && this.writeBufferUtf8.length > 0 && (this._writeInProgress = !0, setTimeout(function() {
                    t._innerWriteUtf8()
                })))
            }, t.prototype._innerWriteUtf8 = function(e) {
                var t = this;
                void 0 === e && (e = 0), this._isDisposed && (this.writeBufferUtf8 = []);
                for (var r = Date.now(); this.writeBufferUtf8.length > e;) {
                    var i = this.writeBufferUtf8[e];
                    if (e++, this._xoffSentToCatchUp && this.writeBufferUtf8.length === e && (this.handler(u.C0.DC1), this._xoffSentToCatchUp = !1), this._refreshStart = this.buffer.y, this._refreshEnd = this.buffer.y, this._inputHandler.parseUtf8(i), this.updateRange(this.buffer.y), this.refresh(this._refreshStart, this._refreshEnd), Date.now() - r >= 12) break
                }
                this.writeBufferUtf8.length > e ? (e > 50 && (this.writeBufferUtf8 = this.writeBufferUtf8.slice(e), e = 0), setTimeout(function() {
                    return t._innerWriteUtf8(e)
                }, 0)) : (this._writeInProgress = !1, this.writeBufferUtf8 = [])
            }, t.prototype.write = function(e) {
                var t = this;
                this._isDisposed || e && (this.writeBuffer.push(e), this.options.useFlowControl && !this._xoffSentToCatchUp && this.writeBuffer.length >= 5 && (this.handler(u.C0.DC3), this._xoffSentToCatchUp = !0), !this._writeInProgress && this.writeBuffer.length > 0 && (this._writeInProgress = !0, setTimeout(function() {
                    t._innerWrite()
                })))
            }, t.prototype._innerWrite = function(e) {
                var t = this;
                void 0 === e && (e = 0), this._isDisposed && (this.writeBuffer = []);
                for (var r = Date.now(); this.writeBuffer.length > e;) {
                    var i = this.writeBuffer[e];
                    if (e++, this._xoffSentToCatchUp && this.writeBuffer.length === e && (this.handler(u.C0.DC1), this._xoffSentToCatchUp = !1), this._refreshStart = this.buffer.y, this._refreshEnd = this.buffer.y, this._inputHandler.parse(i), this.updateRange(this.buffer.y), this.refresh(this._refreshStart, this._refreshEnd), Date.now() - r >= 12) break
                }
                this.writeBuffer.length > e ? (e > 50 && (this.writeBuffer = this.writeBuffer.slice(e), e = 0), setTimeout(function() {
                    return t._innerWrite(e)
                }, 0)) : (this._writeInProgress = !1, this.writeBuffer = [])
            }, t.prototype.writeln = function(e) {
                this.write(e + "\r\n")
            }, t.prototype.attachCustomKeyEventHandler = function(e) {
                this._customKeyEventHandler = e
            }, t.prototype.addCsiHandler = function(e, t) {
                return this._inputHandler.addCsiHandler(e, t)
            }, t.prototype.addOscHandler = function(e, t) {
                return this._inputHandler.addOscHandler(e, t)
            }, t.prototype.registerLinkMatcher = function(e, t, r) {
                var i = this.linkifier.registerLinkMatcher(e, t, r);
                return this.refresh(0, this.rows - 1), i
            }, t.prototype.deregisterLinkMatcher = function(e) {
                this.linkifier.deregisterLinkMatcher(e) && this.refresh(0, this.rows - 1)
            }, t.prototype.registerCharacterJoiner = function(e) {
                var t = this._renderCoordinator.registerCharacterJoiner(e);
                return this.refresh(0, this.rows - 1), t
            }, t.prototype.deregisterCharacterJoiner = function(e) {
                this._renderCoordinator.deregisterCharacterJoiner(e) && this.refresh(0, this.rows - 1)
            }, Object.defineProperty(t.prototype, "markers", {
                get: function() {
                    return this.buffer.markers
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.addMarker = function(e) {
                if (this.buffer === this.buffers.normal) return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e)
            }, t.prototype.hasSelection = function() {
                return !!this.selectionManager && this.selectionManager.hasSelection
            }, t.prototype.select = function(e, t, r) {
                this.selectionManager.setSelection(e, t, r)
            }, t.prototype.getSelection = function() {
                return this.selectionManager ? this.selectionManager.selectionText : ""
            }, t.prototype.getSelectionPosition = function() {
                if (this.selectionManager.hasSelection) return {
                    startColumn: this.selectionManager.selectionStart[0],
                    startRow: this.selectionManager.selectionStart[1],
                    endColumn: this.selectionManager.selectionEnd[0],
                    endRow: this.selectionManager.selectionEnd[1]
                }
            }, t.prototype.clearSelection = function() {
                this.selectionManager && this.selectionManager.clearSelection()
            }, t.prototype.selectAll = function() {
                this.selectionManager && this.selectionManager.selectAll()
            }, t.prototype.selectLines = function(e, t) {
                this.selectionManager && this.selectionManager.selectLines(e, t)
            }, t.prototype._keyDown = function(e) {
                if (this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                if (!this._compositionHelper.keydown(e)) return this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), !1;
                var t = A.evaluateKeyboardEvent(e, this.applicationCursor, this.browser.isMac, this.options.macOptionIsMeta);
                if (this.updateCursorStyle(e), 3 === t.type || 2 === t.type) {
                    var r = this.rows - 1;
                    return this.scrollLines(2 === t.type ? -r : r), this.cancel(e, !0)
                }
                return 1 === t.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e) || (t.cancel && this.cancel(e, !0), !t.key || (this.emit("keydown", e), this._onKey.fire({
                    key: t.key,
                    domEvent: e
                }), this.showCursor(), this.handler(t.key), this.cancel(e, !0)))
            }, t.prototype._isThirdLevelShift = function(e, t) {
                var r = e.isMac && !this.options.macOptionIsMeta && t.altKey && !t.ctrlKey && !t.metaKey || e.isMSWindows && t.altKey && t.ctrlKey && !t.metaKey;
                return "keypress" === t.type ? r : r && (!t.keyCode || t.keyCode > 47)
            }, t.prototype.setgLevel = function(e) {
                this.glevel = e, this.charset = this.charsets[e]
            }, t.prototype.setgCharset = function(e, t) {
                this.charsets[e] = t, this.glevel === e && (this.charset = t)
            }, t.prototype._keyUp = function(e) {
                this.updateCursorStyle(e)
            }, t.prototype._keyPress = function(e) {
                var t;
                if (this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                if (this.cancel(e), e.charCode) t = e.charCode;
                else if (null === e.which || void 0 === e.which) t = e.keyCode;
                else {
                    if (0 === e.which || 0 === e.charCode) return !1;
                    t = e.which
                }
                return !(!t || (e.altKey || e.ctrlKey || e.metaKey) && !this._isThirdLevelShift(this.browser, e) || (t = String.fromCharCode(t), this.emit("keypress", t, e), this._onKey.fire({
                    key: t,
                    domEvent: e
                }), this.showCursor(), this.handler(t), 0))
            }, t.prototype.bell = function() {
                var e = this;
                this.emit("bell"), this._soundBell() && this.soundManager.playBellSound(), this._visualBell() && (this.element.classList.add("visual-bell-active"), clearTimeout(this._visualBellTimer), this._visualBellTimer = window.setTimeout(function() {
                    e.element.classList.remove("visual-bell-active")
                }, 200))
            }, t.prototype.log = function(e, t) {
                this.options.debug && this._context.console && this._context.console.log && this._context.console.log(e, t)
            }, t.prototype.error = function(e, t) {
                this.options.debug && this._context.console && this._context.console.error && this._context.console.error(e, t)
            }, t.prototype.resize = function(e, t) {
                isNaN(e) || isNaN(t) || (e !== this.cols || t !== this.rows ? (e < 2 && (e = 2), t < 1 && (t = 1), this.buffers.resize(e, t), this.cols = e, this.rows = t, this.buffers.setupTabStops(this.cols), this.charMeasure && this.charMeasure.measure(this.options), this.refresh(0, this.rows - 1), this._onResize.fire({
                    cols: e,
                    rows: t
                })) : !this.charMeasure || this.charMeasure.width && this.charMeasure.height || this.charMeasure.measure(this.options))
            }, t.prototype.updateRange = function(e) {
                e < this._refreshStart && (this._refreshStart = e), e > this._refreshEnd && (this._refreshEnd = e)
            }, t.prototype.maxRange = function() {
                this._refreshStart = 0, this._refreshEnd = this.rows - 1
            }, t.prototype.clear = function() {
                if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
                    this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
                    for (var e = 1; e < this.rows; e++) this.buffer.lines.push(this.buffer.getBlankLine(T.DEFAULT_ATTR_DATA));
                    this.refresh(0, this.rows - 1), this._onScroll.fire(this.buffer.ydisp)
                }
            }, t.prototype.is = function(e) {
                return 0 === (this.options.termName + "").indexOf(e)
            }, t.prototype.handler = function(e) {
                this.options.disableStdin || (this.selectionManager && this.selectionManager.hasSelection && this.selectionManager.clearSelection(), this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), this._onData.fire(e))
            }, t.prototype.handleTitle = function(e) {
                this._onTitleChange.fire(e)
            }, t.prototype.index = function() {
                this.buffer.y++, this.buffer.y > this.buffer.scrollBottom && (this.buffer.y--, this.scroll()), this.buffer.x >= this.cols && this.buffer.x--
            }, t.prototype.reverseIndex = function() {
                if (this.buffer.y === this.buffer.scrollTop) {
                    var e = this.buffer.scrollBottom - this.buffer.scrollTop;
                    this.buffer.lines.shiftElements(this.buffer.y + this.buffer.ybase, e, 1), this.buffer.lines.set(this.buffer.y + this.buffer.ybase, this.buffer.getBlankLine(this.eraseAttrData())), this.updateRange(this.buffer.scrollTop), this.updateRange(this.buffer.scrollBottom)
                } else this.buffer.y--
            }, t.prototype.reset = function() {
                this.options.rows = this.rows, this.options.cols = this.cols;
                var e = this._customKeyEventHandler,
                    t = this._inputHandler,
                    r = this.cursorState,
                    i = this.writeBuffer,
                    n = this.writeBufferUtf8,
                    o = this._writeInProgress,
                    s = this._xoffSentToCatchUp,
                    a = this._userScrolling;
                this._setup(), this._customKeyEventHandler = e, this._inputHandler = t, this.cursorState = r, this.writeBuffer = i, this.writeBufferUtf8 = n, this._writeInProgress = o, this._xoffSentToCatchUp = s, this._userScrolling = a, this.refresh(0, this.rows - 1), this.viewport && this.viewport.syncScrollArea()
            }, t.prototype.tabSet = function() {
                this.buffer.tabs[this.buffer.x] = !0
            }, t.prototype.cancel = function(e, t) {
                if (this.options.cancelEvents || t) return e.preventDefault(), e.stopPropagation(), !1
            }, t.prototype._visualBell = function() {
                return !1
            }, t.prototype._soundBell = function() {
                return "sound" === this.options.bellStyle
            }, t
        }(l.EventEmitter);
    t.Terminal = B
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(26),
        n = r(4),
        o = function() {
            function e(e) {
                this._terminal = e, this._onBufferActivate = new n.EventEmitter2, this._normal = new i.Buffer(this._terminal, !0), this._normal.fillViewportRows(), this._alt = new i.Buffer(this._terminal, !1), this._activeBuffer = this._normal, this.setupTabStops()
            }
            return Object.defineProperty(e.prototype, "onBufferActivate", {
                get: function() {
                    return this._onBufferActivate.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "alt", {
                get: function() {
                    return this._alt
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "active", {
                get: function() {
                    return this._activeBuffer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "normal", {
                get: function() {
                    return this._normal
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.activateNormalBuffer = function() {
                this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({
                    activeBuffer: this._normal,
                    inactiveBuffer: this._alt
                }))
            }, e.prototype.activateAltBuffer = function(e) {
                this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({
                    activeBuffer: this._alt,
                    inactiveBuffer: this._normal
                }))
            }, e.prototype.resize = function(e, t) {
                this._normal.resize(e, t), this._alt.resize(e, t)
            }, e.prototype.setupTabStops = function(e) {
                this._normal.setupTabStops(e), this._alt.setupTabStops(e)
            }, e
        }();
    t.BufferSet = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(4),
        n = function() {
            function e(e) {
                this._maxLength = e, this.onDeleteEmitter = new i.EventEmitter2, this.onInsertEmitter = new i.EventEmitter2, this.onTrimEmitter = new i.EventEmitter2, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0
            }
            return Object.defineProperty(e.prototype, "onDelete", {
                get: function() {
                    return this.onDeleteEmitter.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onInsert", {
                get: function() {
                    return this.onInsertEmitter.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onTrim", {
                get: function() {
                    return this.onTrimEmitter.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "maxLength", {
                get: function() {
                    return this._maxLength
                },
                set: function(e) {
                    if (this._maxLength !== e) {
                        for (var t = new Array(e), r = 0; r < Math.min(e, this.length); r++) t[r] = this._array[this._getCyclicIndex(r)];
                        this._array = t, this._maxLength = e, this._startIndex = 0
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function(e) {
                    if (e > this._length)
                        for (var t = this._length; t < e; t++) this._array[t] = void 0;
                    this._length = e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.get = function(e) {
                return this._array[this._getCyclicIndex(e)]
            }, e.prototype.set = function(e, t) {
                this._array[this._getCyclicIndex(e)] = t
            }, e.prototype.push = function(e) {
                this._array[this._getCyclicIndex(this._length)] = e, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++
            }, e.prototype.recycle = function() {
                if (this._length !== this._maxLength) throw new Error("Can only recycle when the buffer is full");
                return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)]
            }, Object.defineProperty(e.prototype, "isFull", {
                get: function() {
                    return this._length === this._maxLength
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.pop = function() {
                return this._array[this._getCyclicIndex(this._length-- - 1)]
            }, e.prototype.splice = function(e, t) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                if (t) {
                    for (var n = e; n < this._length - t; n++) this._array[this._getCyclicIndex(n)] = this._array[this._getCyclicIndex(n + t)];
                    this._length -= t
                }
                for (n = this._length - 1; n >= e; n--) this._array[this._getCyclicIndex(n + r.length)] = this._array[this._getCyclicIndex(n)];
                for (n = 0; n < r.length; n++) this._array[this._getCyclicIndex(e + n)] = r[n];
                if (this._length + r.length > this._maxLength) {
                    var o = this._length + r.length - this._maxLength;
                    this._startIndex += o, this._length = this._maxLength, this.onTrimEmitter.fire(o)
                } else this._length += r.length
            }, e.prototype.trimStart = function(e) {
                e > this._length && (e = this._length), this._startIndex += e, this._length -= e, this.onTrimEmitter.fire(e)
            }, e.prototype.shiftElements = function(e, t, r) {
                if (!(t <= 0)) {
                    if (e < 0 || e >= this._length) throw new Error("start argument out of range");
                    if (e + r < 0) throw new Error("Cannot shift elements in list beyond index 0");
                    if (r > 0) {
                        for (var i = t - 1; i >= 0; i--) this.set(e + i + r, this.get(e + i));
                        var n = e + t + r - this._length;
                        if (n > 0)
                            for (this._length += n; this._length > this._maxLength;) this._length--, this._startIndex++, this.onTrimEmitter.fire(1)
                    } else
                        for (i = 0; i < t; i++) this.set(e + i + r, this.get(e + i))
                }
            }, e.prototype._getCyclicIndex = function(e) {
                return (this._startIndex + e) % this._maxLength
            }, e
        }();
    t.CircularList = n
}, function(e, t, r) {
    "use strict";

    function i(e, t, r) {
        if (t === e.length - 1) return e[t].getTrimmedLength();
        var i = !e[t].hasContent(r - 1) && 1 === e[t].getWidth(r - 1),
            n = 2 === e[t + 1].getWidth(0);
        return i && n ? r - 1 : r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.reflowLargerGetLinesToRemove = function(e, t, r, n, o) {
        for (var s = [], a = 0; a < e.length - 1; a++) {
            var l = a,
                h = e.get(++l);
            if (h.isWrapped) {
                for (var c = [e.get(a)]; l < e.length && h.isWrapped;) c.push(h), h = e.get(++l);
                if (n >= a && n < l) a += c.length - 1;
                else {
                    for (var u = 0, f = i(c, u, t), _ = 1, d = 0; _ < c.length;) {
                        var p = i(c, _, t),
                            m = p - d,
                            y = r - f,
                            g = Math.min(m, y);
                        c[u].copyCellsFrom(c[_], d, f, g, !1), (f += g) === r && (u++, f = 0), (d += g) === p && (_++, d = 0), 0 === f && 0 !== u && 2 === c[u - 1].getWidth(r - 1) && (c[u].copyCellsFrom(c[u - 1], r - 1, f++, 1, !1), c[u - 1].setCell(r - 1, o))
                    }
                    c[u].replaceCells(f, r, o);
                    for (var v = 0, b = c.length - 1; b > 0 && (b > u || 0 === c[b].getTrimmedLength()); b--) v++;
                    v > 0 && (s.push(a + c.length - v), s.push(v)), a += c.length - 1
                }
            }
        }
        return s
    }, t.reflowLargerCreateNewLayout = function(e, t) {
        for (var r = [], i = 0, n = t[i], o = 0, s = 0; s < e.length; s++)
            if (n === s) {
                var a = t[++i];
                e.onDeleteEmitter.fire({
                    index: s - o,
                    amount: a
                }), s += a - 1, o += a, n = t[++i]
            } else r.push(s);
        return {
            layout: r,
            countRemoved: o
        }
    }, t.reflowLargerApplyNewLayout = function(e, t) {
        for (var r = [], i = 0; i < t.length; i++) r.push(e.get(t[i]));
        for (i = 0; i < r.length; i++) e.set(i, r[i]);
        e.length = t.length
    }, t.reflowSmallerGetNewLineLengths = function(e, t, r) {
        for (var n = [], o = e.map(function(r, n) {
                return i(e, n, t)
            }).reduce(function(e, t) {
                return e + t
            }), s = 0, a = 0, l = 0; l < o;) {
            if (o - l < r) {
                n.push(o - l);
                break
            }
            s += r;
            var h = i(e, a, t);
            s > h && (s -= h, a++);
            var c = 2 === e[a].getWidth(s - 1);
            c && s--;
            var u = c ? r - 1 : r;
            n.push(u), l += u
        }
        return n
    }, t.getWrappedLineTrimmedLength = i
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(4),
        s = function(e) {
            function t(r) {
                var i = e.call(this) || this;
                return i.line = r, i._id = t._nextId++, i.isDisposed = !1, i._onDispose = new o.EventEmitter2, i
            }
            return n(t, e), Object.defineProperty(t.prototype, "id", {
                get: function() {
                    return this._id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onDispose", {
                get: function() {
                    return this._onDispose.event
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.dispose = function() {
                this.isDisposed || (this.isDisposed = !0, this._onDispose.fire())
            }, t._nextId = 1, t
        }(r(2).Disposable);
    t.Marker = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e, t, r) {
            this._textarea = e, this._compositionView = t, this._terminal = r, this._isComposing = !1, this._isSendingComposition = !1, this._compositionPosition = {
                start: null,
                end: null
            }
        }
        return e.prototype.compositionstart = function() {
            this._isComposing = !0, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._compositionView.classList.add("active")
        }, e.prototype.compositionupdate = function(e) {
            var t = this;
            this._compositionView.textContent = e.data, this.updateCompositionElements(), setTimeout(function() {
                t._compositionPosition.end = t._textarea.value.length
            }, 0)
        }, e.prototype.compositionend = function() {
            this._finalizeComposition(!0)
        }, e.prototype.keydown = function(e) {
            if (this._isComposing || this._isSendingComposition) {
                if (229 === e.keyCode) return !1;
                if (16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode) return !1;
                this._finalizeComposition(!1)
            }
            return 229 !== e.keyCode || (this._handleAnyTextareaChanges(), !1)
        }, e.prototype._finalizeComposition = function(e) {
            var t = this;
            if (this._compositionView.classList.remove("active"), this._isComposing = !1, this._clearTextareaPosition(), e) {
                var r = {
                    start: this._compositionPosition.start,
                    end: this._compositionPosition.end
                };
                this._isSendingComposition = !0, setTimeout(function() {
                    if (t._isSendingComposition) {
                        t._isSendingComposition = !1;
                        var e;
                        e = t._isComposing ? t._textarea.value.substring(r.start, r.end) : t._textarea.value.substring(r.start), t._terminal.handler(e)
                    }
                }, 0)
            } else {
                this._isSendingComposition = !1;
                var i = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                this._terminal.handler(i)
            }
        }, e.prototype._handleAnyTextareaChanges = function() {
            var e = this,
                t = this._textarea.value;
            setTimeout(function() {
                if (!e._isComposing) {
                    var r = e._textarea.value.replace(t, "");
                    r.length > 0 && e._terminal.handler(r)
                }
            }, 0)
        }, e.prototype.updateCompositionElements = function(e) {
            var t = this;
            if (this._isComposing) {
                if (this._terminal.buffer.isCursorInViewport) {
                    var r = Math.ceil(this._terminal.charMeasure.height * this._terminal.options.lineHeight),
                        i = this._terminal.buffer.y * r,
                        n = this._terminal.buffer.x * this._terminal.charMeasure.width;
                    this._compositionView.style.left = n + "px", this._compositionView.style.top = i + "px", this._compositionView.style.height = r + "px", this._compositionView.style.lineHeight = r + "px", this._compositionView.style.fontFamily = this._terminal.options.fontFamily, this._compositionView.style.fontSize = this._terminal.options.fontSize + "px";
                    var o = this._compositionView.getBoundingClientRect();
                    this._textarea.style.left = n + "px", this._textarea.style.top = i + "px", this._textarea.style.width = o.width + "px", this._textarea.style.height = o.height + "px", this._textarea.style.lineHeight = o.height + "px"
                }
                e || setTimeout(function() {
                    return t.updateCompositionElements(!0)
                }, 0)
            }
        }, e.prototype._clearTextareaPosition = function() {
            this._textarea.style.left = "", this._textarea.style.top = ""
        }, e
    }();
    t.CompositionHelper = i
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._events = t._events || {}, t
        }
        return n(t, e), t.prototype.on = function(e, t) {
            this._events[e] = this._events[e] || [], this._events[e].push(t)
        }, t.prototype.addDisposableListener = function(e, t) {
            var r = this;
            this.on(e, t);
            var i = !1;
            return {
                dispose: function() {
                    i || (r.off(e, t), i = !0)
                }
            }
        }, t.prototype.off = function(e, t) {
            if (this._events[e])
                for (var r = this._events[e], i = r.length; i--;)
                    if (r[i] === t) return void r.splice(i, 1)
        }, t.prototype.removeAllListeners = function(e) {
            this._events[e] && delete this._events[e]
        }, t.prototype.emit = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            if (this._events[e])
                for (var i = this._events[e], n = 0; n < i.length; n++) i[n].apply(this, t)
        }, t.prototype.emitMayRemoveListeners = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            if (this._events[e])
                for (var i = this._events[e], n = i.length, o = 0; o < i.length; o++) i[o].apply(this, t), o -= n - i.length, n = i.length
        }, t.prototype.listeners = function(e) {
            return this._events[e] || []
        }, t.prototype.dispose = function() {
            e.prototype.dispose.call(this), this._events = {}
        }, t
    }(r(2).Disposable);
    t.EventEmitter = o
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(2),
        s = r(7),
        a = 15,
        l = function(e) {
            function t(t, r, i, n, o) {
                var l = e.call(this) || this;
                return l._terminal = t, l._viewportElement = r, l._scrollArea = i, l._charMeasure = n, l._dimensions = o, l.scrollBarWidth = 0, l._currentRowHeight = 0, l._lastRecordedBufferLength = 0, l._lastRecordedViewportHeight = 0, l._lastRecordedBufferHeight = 0, l._lastScrollTop = 0, l._wheelPartialScroll = 0, l._refreshAnimationFrame = null, l._ignoreNextScrollEvent = !1, l.scrollBarWidth = l._viewportElement.offsetWidth - l._scrollArea.offsetWidth || a, l.register(s.addDisposableDomListener(l._viewportElement, "scroll", l._onScroll.bind(l))), setTimeout(function() {
                    return l.syncScrollArea()
                }, 0), l
            }
            return n(t, e), t.prototype.onDimensionsChance = function(e) {
                this._dimensions = e
            }, t.prototype.onThemeChange = function(e) {
                this._viewportElement.style.backgroundColor = e.background.css
            }, t.prototype._refresh = function() {
                var e = this;
                null === this._refreshAnimationFrame && (this._refreshAnimationFrame = requestAnimationFrame(function() {
                    return e._innerRefresh()
                }))
            }, t.prototype._innerRefresh = function() {
                if (this._charMeasure.height > 0) {
                    this._currentRowHeight = this._dimensions.scaledCellHeight / window.devicePixelRatio, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                    var e = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._dimensions.canvasHeight);
                    this._lastRecordedBufferHeight !== e && (this._lastRecordedBufferHeight = e, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px")
                }
                var t = this._terminal.buffer.ydisp * this._currentRowHeight;
                this._viewportElement.scrollTop !== t && (this._ignoreNextScrollEvent = !0, this._viewportElement.scrollTop = t), this._refreshAnimationFrame = null
            }, t.prototype.syncScrollArea = function() {
                if (this._lastRecordedBufferLength !== this._terminal.buffer.lines.length) return this._lastRecordedBufferLength = this._terminal.buffer.lines.length, void this._refresh();
                if (this._lastRecordedViewportHeight === this._dimensions.canvasHeight) {
                    var e = this._terminal.buffer.ydisp * this._currentRowHeight;
                    this._lastScrollTop === e && this._lastScrollTop === this._viewportElement.scrollTop && this._dimensions.scaledCellHeight / window.devicePixelRatio === this._currentRowHeight || this._refresh()
                } else this._refresh()
            }, t.prototype._onScroll = function(e) {
                if (this._lastScrollTop = this._viewportElement.scrollTop, this._viewportElement.offsetParent)
                    if (this._ignoreNextScrollEvent) this._ignoreNextScrollEvent = !1;
                    else {
                        var t = Math.round(this._lastScrollTop / this._currentRowHeight) - this._terminal.buffer.ydisp;
                        this._terminal.scrollLines(t, !0)
                    }
            }, t.prototype.onWheel = function(e) {
                var t = this._getPixelsScrolled(e);
                0 !== t && (this._viewportElement.scrollTop += t, e.preventDefault())
            }, t.prototype._getPixelsScrolled = function(e) {
                if (0 === e.deltaY) return 0;
                var t = e.deltaY;
                return e.deltaMode === WheelEvent.DOM_DELTA_LINE ? t *= this._currentRowHeight : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._currentRowHeight * this._terminal.rows), t
            }, t.prototype.getLinesScrolled = function(e) {
                if (0 === e.deltaY) return 0;
                var t = e.deltaY;
                return e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t /= this._currentRowHeight + 0, this._wheelPartialScroll += t, t = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._terminal.rows), t
            }, t.prototype.onTouchStart = function(e) {
                this._lastTouchY = e.touches[0].pageY
            }, t.prototype.onTouchMove = function(e) {
                var t = this._lastTouchY - e.touches[0].pageY;
                this._lastTouchY = e.touches[0].pageY, 0 !== t && (this._viewportElement.scrollTop += t, e.preventDefault())
            }, t
        }(o.Disposable);
    t.Viewport = l
}, function(e, t, r) {
    "use strict";

    function i(e) {
        return e.replace(/\r?\n/g, "\r")
    }

    function n(e, t) {
        return t ? "[200~" + e + "[201~" : e
    }

    function o(e, t) {
        var r = t.screenElement.getBoundingClientRect(),
            i = e.clientX - r.left - 10,
            n = e.clientY - r.top - 10;
        t.textarea.style.position = "absolute", t.textarea.style.width = "20px", t.textarea.style.height = "20px", t.textarea.style.left = i + "px", t.textarea.style.top = n + "px", t.textarea.style.zIndex = "1000", t.textarea.focus(), setTimeout(function() {
            t.textarea.style.position = null, t.textarea.style.width = null, t.textarea.style.height = null, t.textarea.style.left = null, t.textarea.style.top = null, t.textarea.style.zIndex = null
        }, 200)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.prepareTextForTerminal = i, t.bracketTextForPaste = n, t.copyHandler = function(e, t, r) {
        t.browser.isMSIE ? window.clipboardData.setData("Text", r.selectionText) : e.clipboardData.setData("text/plain", r.selectionText), e.preventDefault()
    }, t.pasteHandler = function(e, t) {
        e.stopPropagation();
        var r = function(r) {
            r = n(r = i(r), t.bracketedPasteMode), t.handler(r), t.textarea.value = "", t.emit("paste", r), t.cancel(e)
        };
        t.browser.isMSIE ? window.clipboardData && r(window.clipboardData.getData("Text")) : e.clipboardData && r(e.clipboardData.getData("text/plain"))
    }, t.moveTextAreaUnderMouseCursor = o, t.rightClickHandler = function(e, t, r, i) {
        o(e, t), i && !r.isClickInSelection(e) && r.selectWordAtCursor(e), t.textarea.value = r.selectionText, t.textarea.select()
    }
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(12),
        s = r(59),
        a = r(27),
        l = r(60),
        h = r(2),
        c = r(28),
        u = r(17),
        f = r(3),
        _ = r(4),
        d = {
            "(": 0,
            ")": 1,
            "*": 2,
            "+": 3,
            "-": 1,
            ".": 2
        },
        p = function() {
            function e(e) {
                this._terminal = e, this._data = new Uint32Array(0)
            }
            return e.prototype.hook = function(e, t, r) {
                this._data = new Uint32Array(0)
            }, e.prototype.put = function(e, t, r) {
                this._data = c.concat(this._data, e.subarray(t, r))
            }, e.prototype.unhook = function() {
                var e = u.utf32ToString(this._data);
                switch (this._data = new Uint32Array(0), e) {
                    case '"q':
                        return this._terminal.handler(o.C0.ESC + 'P1$r0"q' + o.C0.ESC + "\\");
                    case '"p':
                        return this._terminal.handler(o.C0.ESC + 'P1$r61"p' + o.C0.ESC + "\\");
                    case "r":
                        var t = this._terminal.buffer.scrollTop + 1 + ";" + (this._terminal.buffer.scrollBottom + 1) + "r";
                        return this._terminal.handler(o.C0.ESC + "P1$r" + t + o.C0.ESC + "\\");
                    case "m":
                        return this._terminal.handler(o.C0.ESC + "P1$r0m" + o.C0.ESC + "\\");
                    case " q":
                        var r = {
                            block: 2,
                            underline: 4,
                            bar: 6
                        } [this._terminal.getOption("cursorStyle")];
                        return r -= this._terminal.getOption("cursorBlink"), this._terminal.handler(o.C0.ESC + "P1$r" + r + " q" + o.C0.ESC + "\\");
                    default:
                        this._terminal.error("Unknown DCS $q %s", e), this._terminal.handler(o.C0.ESC + "P0$r" + o.C0.ESC + "\\")
                }
            }, e
        }(),
        m = function(e) {
            function t(t, r) {
                void 0 === r && (r = new l.EscapeSequenceParser);
                var i = e.call(this) || this;
                i._terminal = t, i._parser = r, i._parseBuffer = new Uint32Array(4096), i._stringDecoder = new u.StringToUtf32, i._utf8Decoder = new u.Utf8ToUtf32, i._workCell = new f.CellData, i._onCursorMove = new _.EventEmitter2, i._onData = new _.EventEmitter2, i._onLineFeed = new _.EventEmitter2, i._onScroll = new _.EventEmitter2, i.register(i._parser), i._parser.setCsiHandlerFallback(function(e, t, r) {
                    i._terminal.error("Unknown CSI code: ", {
                        collect: e,
                        params: t,
                        flag: String.fromCharCode(r)
                    })
                }), i._parser.setEscHandlerFallback(function(e, t) {
                    i._terminal.error("Unknown ESC code: ", {
                        collect: e,
                        flag: String.fromCharCode(t)
                    })
                }), i._parser.setExecuteHandlerFallback(function(e) {
                    i._terminal.error("Unknown EXECUTE code: ", {
                        code: e
                    })
                }), i._parser.setOscHandlerFallback(function(e, t) {
                    i._terminal.error("Unknown OSC code: ", {
                        identifier: e,
                        data: t
                    })
                }), i._parser.setPrintHandler(function(e, t, r) {
                    return i.print(e, t, r)
                }), i._parser.setCsiHandler("@", function(e, t) {
                    return i.insertChars(e)
                }), i._parser.setCsiHandler("A", function(e, t) {
                    return i.cursorUp(e)
                }), i._parser.setCsiHandler("B", function(e, t) {
                    return i.cursorDown(e)
                }), i._parser.setCsiHandler("C", function(e, t) {
                    return i.cursorForward(e)
                }), i._parser.setCsiHandler("D", function(e, t) {
                    return i.cursorBackward(e)
                }), i._parser.setCsiHandler("E", function(e, t) {
                    return i.cursorNextLine(e)
                }), i._parser.setCsiHandler("F", function(e, t) {
                    return i.cursorPrecedingLine(e)
                }), i._parser.setCsiHandler("G", function(e, t) {
                    return i.cursorCharAbsolute(e)
                }), i._parser.setCsiHandler("H", function(e, t) {
                    return i.cursorPosition(e)
                }), i._parser.setCsiHandler("I", function(e, t) {
                    return i.cursorForwardTab(e)
                }), i._parser.setCsiHandler("J", function(e, t) {
                    return i.eraseInDisplay(e)
                }), i._parser.setCsiHandler("K", function(e, t) {
                    return i.eraseInLine(e)
                }), i._parser.setCsiHandler("L", function(e, t) {
                    return i.insertLines(e)
                }), i._parser.setCsiHandler("M", function(e, t) {
                    return i.deleteLines(e)
                }), i._parser.setCsiHandler("P", function(e, t) {
                    return i.deleteChars(e)
                }), i._parser.setCsiHandler("S", function(e, t) {
                    return i.scrollUp(e)
                }), i._parser.setCsiHandler("T", function(e, t) {
                    return i.scrollDown(e, t)
                }), i._parser.setCsiHandler("X", function(e, t) {
                    return i.eraseChars(e)
                }), i._parser.setCsiHandler("Z", function(e, t) {
                    return i.cursorBackwardTab(e)
                }), i._parser.setCsiHandler("`", function(e, t) {
                    return i.charPosAbsolute(e)
                }), i._parser.setCsiHandler("a", function(e, t) {
                    return i.hPositionRelative(e)
                }), i._parser.setCsiHandler("b", function(e, t) {
                    return i.repeatPrecedingCharacter(e)
                }), i._parser.setCsiHandler("c", function(e, t) {
                    return i.sendDeviceAttributes(e, t)
                }), i._parser.setCsiHandler("d", function(e, t) {
                    return i.linePosAbsolute(e)
                }), i._parser.setCsiHandler("e", function(e, t) {
                    return i.vPositionRelative(e)
                }), i._parser.setCsiHandler("f", function(e, t) {
                    return i.hVPosition(e)
                }), i._parser.setCsiHandler("g", function(e, t) {
                    return i.tabClear(e)
                }), i._parser.setCsiHandler("h", function(e, t) {
                    return i.setMode(e, t)
                }), i._parser.setCsiHandler("l", function(e, t) {
                    return i.resetMode(e, t)
                }), i._parser.setCsiHandler("m", function(e, t) {
                    return i.charAttributes(e)
                }), i._parser.setCsiHandler("n", function(e, t) {
                    return i.deviceStatus(e, t)
                }), i._parser.setCsiHandler("p", function(e, t) {
                    return i.softReset(e, t)
                }), i._parser.setCsiHandler("q", function(e, t) {
                    return i.setCursorStyle(e, t)
                }), i._parser.setCsiHandler("r", function(e, t) {
                    return i.setScrollRegion(e, t)
                }), i._parser.setCsiHandler("s", function(e, t) {
                    return i.saveCursor(e)
                }), i._parser.setCsiHandler("u", function(e, t) {
                    return i.restoreCursor(e)
                }), i._parser.setExecuteHandler(o.C0.BEL, function() {
                    return i.bell()
                }), i._parser.setExecuteHandler(o.C0.LF, function() {
                    return i.lineFeed()
                }), i._parser.setExecuteHandler(o.C0.VT, function() {
                    return i.lineFeed()
                }), i._parser.setExecuteHandler(o.C0.FF, function() {
                    return i.lineFeed()
                }), i._parser.setExecuteHandler(o.C0.CR, function() {
                    return i.carriageReturn()
                }), i._parser.setExecuteHandler(o.C0.BS, function() {
                    return i.backspace()
                }), i._parser.setExecuteHandler(o.C0.HT, function() {
                    return i.tab()
                }), i._parser.setExecuteHandler(o.C0.SO, function() {
                    return i.shiftOut()
                }), i._parser.setExecuteHandler(o.C0.SI, function() {
                    return i.shiftIn()
                }), i._parser.setExecuteHandler(o.C1.IND, function() {
                    return i.index()
                }), i._parser.setExecuteHandler(o.C1.NEL, function() {
                    return i.nextLine()
                }), i._parser.setExecuteHandler(o.C1.HTS, function() {
                    return i.tabSet()
                }), i._parser.setOscHandler(0, function(e) {
                    return i.setTitle(e)
                }), i._parser.setOscHandler(2, function(e) {
                    return i.setTitle(e)
                }), i._parser.setEscHandler("7", function() {
                    return i.saveCursor([])
                }), i._parser.setEscHandler("8", function() {
                    return i.restoreCursor([])
                }), i._parser.setEscHandler("D", function() {
                    return i.index()
                }), i._parser.setEscHandler("E", function() {
                    return i.nextLine()
                }), i._parser.setEscHandler("H", function() {
                    return i.tabSet()
                }), i._parser.setEscHandler("M", function() {
                    return i.reverseIndex()
                }), i._parser.setEscHandler("=", function() {
                    return i.keypadApplicationMode()
                }), i._parser.setEscHandler(">", function() {
                    return i.keypadNumericMode()
                }), i._parser.setEscHandler("c", function() {
                    return i.reset()
                }), i._parser.setEscHandler("n", function() {
                    return i.setgLevel(2)
                }), i._parser.setEscHandler("o", function() {
                    return i.setgLevel(3)
                }), i._parser.setEscHandler("|", function() {
                    return i.setgLevel(3)
                }), i._parser.setEscHandler("}", function() {
                    return i.setgLevel(2)
                }), i._parser.setEscHandler("~", function() {
                    return i.setgLevel(1)
                }), i._parser.setEscHandler("%@", function() {
                    return i.selectDefaultCharset()
                }), i._parser.setEscHandler("%G", function() {
                    return i.selectDefaultCharset()
                });
                var n = function(e) {
                        a._parser.setEscHandler("(" + e, function() {
                            return i.selectCharset("(" + e)
                        }), a._parser.setEscHandler(")" + e, function() {
                            return i.selectCharset(")" + e)
                        }), a._parser.setEscHandler("*" + e, function() {
                            return i.selectCharset("*" + e)
                        }), a._parser.setEscHandler("+" + e, function() {
                            return i.selectCharset("+" + e)
                        }), a._parser.setEscHandler("-" + e, function() {
                            return i.selectCharset("-" + e)
                        }), a._parser.setEscHandler("." + e, function() {
                            return i.selectCharset("." + e)
                        }), a._parser.setEscHandler("/" + e, function() {
                            return i.selectCharset("/" + e)
                        })
                    },
                    a = this;
                for (var h in s.CHARSETS) n(h);
                return i._parser.setErrorHandler(function(e) {
                    return i._terminal.error("Parsing error: ", e), e
                }), i._parser.setDcsHandler("$q", new p(i._terminal)), i
            }
            return n(t, e), Object.defineProperty(t.prototype, "onCursorMove", {
                get: function() {
                    return this._onCursorMove.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onData", {
                get: function() {
                    return this._onData.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onLineFeed", {
                get: function() {
                    return this._onLineFeed.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onScroll", {
                get: function() {
                    return this._onScroll.event
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.dispose = function() {
                e.prototype.dispose.call(this), this._terminal = null
            }, t.prototype.parse = function(e) {
                if (this._terminal) {
                    var t = this._terminal.buffer,
                        r = t.x,
                        i = t.y;
                    this._terminal.debug && this._terminal.log("data: " + e), this._parseBuffer.length < e.length && (this._parseBuffer = new Uint32Array(e.length)), this._parser.parse(this._parseBuffer, this._stringDecoder.decode(e, this._parseBuffer)), (t = this._terminal.buffer).x === r && t.y === i || this._onCursorMove.fire()
                }
            }, t.prototype.parseUtf8 = function(e) {
                if (this._terminal) {
                    var t = this._terminal.buffer,
                        r = t.x,
                        i = t.y;
                    this._terminal.debug && this._terminal.log("data: " + e), this._parseBuffer.length < e.length && (this._parseBuffer = new Uint32Array(e.length)), this._parser.parse(this._parseBuffer, this._utf8Decoder.decode(e, this._parseBuffer)), (t = this._terminal.buffer).x === r && t.y === i || this._terminal.emit("cursormove")
                }
            }, t.prototype.print = function(e, t, r) {
                var i, n, o = this._terminal.buffer,
                    s = this._terminal.charset,
                    l = this._terminal.options.screenReaderMode,
                    h = this._terminal.cols,
                    c = this._terminal.wraparoundMode,
                    _ = this._terminal.insertMode,
                    d = this._terminal.curAttrData,
                    p = o.lines.get(o.y + o.ybase);
                this._terminal.updateRange(o.y);
                for (var m = t; m < r; ++m) {
                    if (i = e[m], n = a.wcwidth(i), i < 127 && s) {
                        var y = s[String.fromCharCode(i)];
                        y && (i = y.charCodeAt(0))
                    }
                    if (l && this._terminal.emit("a11y.char", u.stringFromCodePoint(i)), n || !o.x) {
                        if (o.x + n - 1 >= h)
                            if (c) o.x = 0, o.y++, o.y > o.scrollBottom ? (o.y--, this._terminal.scroll(!0)) : o.lines.get(o.y).isWrapped = !0, p = o.lines.get(o.y + o.ybase);
                            else if (2 === n) continue;
                        if (_ && (p.insertCells(o.x, n, o.getNullCell(d)), 2 === p.getWidth(h - 1) && p.setCellFromCodePoint(h - 1, f.NULL_CELL_CODE, f.NULL_CELL_WIDTH, d.fg, d.bg)), p.setCellFromCodePoint(o.x++, i, n, d.fg, d.bg), n > 0)
                            for (; --n;) p.setCellFromCodePoint(o.x++, 0, 0, d.fg, d.bg)
                    } else p.getWidth(o.x - 1) ? p.addCodepointToCell(o.x - 1, i) : p.addCodepointToCell(o.x - 2, i)
                }
                this._terminal.updateRange(o.y)
            }, t.prototype.addCsiHandler = function(e, t) {
                return this._parser.addCsiHandler(e, t)
            }, t.prototype.addOscHandler = function(e, t) {
                return this._parser.addOscHandler(e, t)
            }, t.prototype.bell = function() {
                this._terminal.bell()
            }, t.prototype.lineFeed = function() {
                var e = this._terminal.buffer;
                this._terminal.options.convertEol && (e.x = 0), e.y++, e.y > e.scrollBottom && (e.y--, this._terminal.scroll()), e.x >= this._terminal.cols && e.x--, this._onLineFeed.fire()
            }, t.prototype.carriageReturn = function() {
                this._terminal.buffer.x = 0
            }, t.prototype.backspace = function() {
                this._terminal.buffer.x > 0 && this._terminal.buffer.x--
            }, t.prototype.tab = function() {
                var e = this._terminal.buffer.x;
                this._terminal.buffer.x = this._terminal.buffer.nextStop(), this._terminal.options.screenReaderMode && this._terminal.emit("a11y.tab", this._terminal.buffer.x - e)
            }, t.prototype.shiftOut = function() {
                this._terminal.setgLevel(1)
            }, t.prototype.shiftIn = function() {
                this._terminal.setgLevel(0)
            }, t.prototype.insertChars = function(e) {
                this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).insertCells(this._terminal.buffer.x, e[0] || 1, this._terminal.buffer.getNullCell(this._terminal.eraseAttrData())), this._terminal.updateRange(this._terminal.buffer.y)
            }, t.prototype.cursorUp = function(e) {
                var t = e[0];
                t < 1 && (t = 1), this._terminal.buffer.y -= t, this._terminal.buffer.y < 0 && (this._terminal.buffer.y = 0)
            }, t.prototype.cursorDown = function(e) {
                var t = e[0];
                t < 1 && (t = 1), this._terminal.buffer.y += t, this._terminal.buffer.y >= this._terminal.rows && (this._terminal.buffer.y = this._terminal.rows - 1), this._terminal.buffer.x >= this._terminal.cols && this._terminal.buffer.x--
            }, t.prototype.cursorForward = function(e) {
                var t = e[0];
                t < 1 && (t = 1), this._terminal.buffer.x += t, this._terminal.buffer.x >= this._terminal.cols && (this._terminal.buffer.x = this._terminal.cols - 1)
            }, t.prototype.cursorBackward = function(e) {
                var t = e[0];
                t < 1 && (t = 1), this._terminal.buffer.x >= this._terminal.cols && this._terminal.buffer.x--, this._terminal.buffer.x -= t, this._terminal.buffer.x < 0 && (this._terminal.buffer.x = 0)
            }, t.prototype.cursorNextLine = function(e) {
                var t = e[0];
                t < 1 && (t = 1), this._terminal.buffer.y += t, this._terminal.buffer.y >= this._terminal.rows && (this._terminal.buffer.y = this._terminal.rows - 1), this._terminal.buffer.x = 0
            }, t.prototype.cursorPrecedingLine = function(e) {
                var t = e[0];
                t < 1 && (t = 1), this._terminal.buffer.y -= t, this._terminal.buffer.y < 0 && (this._terminal.buffer.y = 0), this._terminal.buffer.x = 0
            }, t.prototype.cursorCharAbsolute = function(e) {
                var t = e[0];
                t < 1 && (t = 1), this._terminal.buffer.x = t - 1
            }, t.prototype.cursorPosition = function(e) {
                var t, r = e[0] - 1;
                t = e.length >= 2 ? e[1] - 1 : 0, r < 0 ? r = 0 : r >= this._terminal.rows && (r = this._terminal.rows - 1), t < 0 ? t = 0 : t >= this._terminal.cols && (t = this._terminal.cols - 1), this._terminal.buffer.x = t, this._terminal.buffer.y = r
            }, t.prototype.cursorForwardTab = function(e) {
                for (var t = e[0] || 1; t--;) this._terminal.buffer.x = this._terminal.buffer.nextStop()
            }, t.prototype._eraseInBufferLine = function(e, t, r, i) {
                void 0 === i && (i = !1);
                var n = this._terminal.buffer.lines.get(this._terminal.buffer.ybase + e);
                n.replaceCells(t, r, this._terminal.buffer.getNullCell(this._terminal.eraseAttrData())), i && (n.isWrapped = !1)
            }, t.prototype._resetBufferLine = function(e) {
                this._eraseInBufferLine(e, 0, this._terminal.cols, !0)
            }, t.prototype.eraseInDisplay = function(e) {
                var t;
                switch (e[0]) {
                    case 0:
                        for (t = this._terminal.buffer.y, this._terminal.updateRange(t), this._eraseInBufferLine(t++, this._terminal.buffer.x, this._terminal.cols, 0 === this._terminal.buffer.x); t < this._terminal.rows; t++) this._resetBufferLine(t);
                        this._terminal.updateRange(t);
                        break;
                    case 1:
                        for (t = this._terminal.buffer.y, this._terminal.updateRange(t), this._eraseInBufferLine(t, 0, this._terminal.buffer.x + 1, !0), this._terminal.buffer.x + 1 >= this._terminal.cols && (this._terminal.buffer.lines.get(t + 1).isWrapped = !1); t--;) this._resetBufferLine(t);
                        this._terminal.updateRange(0);
                        break;
                    case 2:
                        for (t = this._terminal.rows, this._terminal.updateRange(t - 1); t--;) this._resetBufferLine(t);
                        this._terminal.updateRange(0);
                        break;
                    case 3:
                        var r = this._terminal.buffer.lines.length - this._terminal.rows;
                        r > 0 && (this._terminal.buffer.lines.trimStart(r), this._terminal.buffer.ybase = Math.max(this._terminal.buffer.ybase - r, 0), this._terminal.buffer.ydisp = Math.max(this._terminal.buffer.ydisp - r, 0), this._onScroll.fire(0))
                }
            }, t.prototype.eraseInLine = function(e) {
                switch (e[0]) {
                    case 0:
                        this._eraseInBufferLine(this._terminal.buffer.y, this._terminal.buffer.x, this._terminal.cols);
                        break;
                    case 1:
                        this._eraseInBufferLine(this._terminal.buffer.y, 0, this._terminal.buffer.x + 1);
                        break;
                    case 2:
                        this._eraseInBufferLine(this._terminal.buffer.y, 0, this._terminal.cols)
                }
                this._terminal.updateRange(this._terminal.buffer.y)
            }, t.prototype.insertLines = function(e) {
                var t = e[0];
                t < 1 && (t = 1);
                for (var r = this._terminal.buffer, i = r.y + r.ybase, n = this._terminal.rows - 1 - r.scrollBottom, o = this._terminal.rows - 1 + r.ybase - n + 1; t--;) r.lines.splice(o - 1, 1), r.lines.splice(i, 0, r.getBlankLine(this._terminal.eraseAttrData()));
                this._terminal.updateRange(r.y), this._terminal.updateRange(r.scrollBottom)
            }, t.prototype.deleteLines = function(e) {
                var t = e[0];
                t < 1 && (t = 1);
                var r, i = this._terminal.buffer,
                    n = i.y + i.ybase;
                for (r = this._terminal.rows - 1 - i.scrollBottom, r = this._terminal.rows - 1 + i.ybase - r; t--;) i.lines.splice(n, 1), i.lines.splice(r, 0, i.getBlankLine(this._terminal.eraseAttrData()));
                this._terminal.updateRange(i.y), this._terminal.updateRange(i.scrollBottom)
            }, t.prototype.deleteChars = function(e) {
                this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).deleteCells(this._terminal.buffer.x, e[0] || 1, this._terminal.buffer.getNullCell(this._terminal.eraseAttrData())), this._terminal.updateRange(this._terminal.buffer.y)
            }, t.prototype.scrollUp = function(e) {
                for (var t = e[0] || 1, r = this._terminal.buffer; t--;) r.lines.splice(r.ybase + r.scrollTop, 1), r.lines.splice(r.ybase + r.scrollBottom, 0, r.getBlankLine(f.DEFAULT_ATTR_DATA));
                this._terminal.updateRange(r.scrollTop), this._terminal.updateRange(r.scrollBottom)
            }, t.prototype.scrollDown = function(e, t) {
                if (e.length < 2 && !t) {
                    for (var r = e[0] || 1, i = this._terminal.buffer; r--;) i.lines.splice(i.ybase + i.scrollBottom, 1), i.lines.splice(i.ybase + i.scrollTop, 0, i.getBlankLine(f.DEFAULT_ATTR_DATA));
                    this._terminal.updateRange(i.scrollTop), this._terminal.updateRange(i.scrollBottom)
                }
            }, t.prototype.eraseChars = function(e) {
                this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).replaceCells(this._terminal.buffer.x, this._terminal.buffer.x + (e[0] || 1), this._terminal.buffer.getNullCell(this._terminal.eraseAttrData()))
            }, t.prototype.cursorBackwardTab = function(e) {
                for (var t = e[0] || 1, r = this._terminal.buffer; t--;) r.x = r.prevStop()
            }, t.prototype.charPosAbsolute = function(e) {
                var t = e[0];
                t < 1 && (t = 1), this._terminal.buffer.x = t - 1, this._terminal.buffer.x >= this._terminal.cols && (this._terminal.buffer.x = this._terminal.cols - 1)
            }, t.prototype.hPositionRelative = function(e) {
                var t = e[0];
                t < 1 && (t = 1), this._terminal.buffer.x += t, this._terminal.buffer.x >= this._terminal.cols && (this._terminal.buffer.x = this._terminal.cols - 1)
            }, t.prototype.repeatPrecedingCharacter = function(e) {
                var t = this._terminal.buffer,
                    r = t.lines.get(t.ybase + t.y);
                r.loadCell(t.x - 1, this._workCell), r.replaceCells(t.x, t.x + (e[0] || 1), void 0 !== this._workCell.content ? this._workCell : t.getNullCell(f.DEFAULT_ATTR_DATA))
            }, t.prototype.sendDeviceAttributes = function(e, t) {
                e[0] > 0 || (t ? ">" === t && (this._terminal.is("xterm") ? this._terminal.handler(o.C0.ESC + "[>0;276;0c") : this._terminal.is("rxvt-unicode") ? this._terminal.handler(o.C0.ESC + "[>85;95;0c") : this._terminal.is("linux") ? this._terminal.handler(e[0] + "c") : this._terminal.is("screen") && this._terminal.handler(o.C0.ESC + "[>83;40003;0c")) : this._terminal.is("xterm") || this._terminal.is("rxvt-unicode") || this._terminal.is("screen") ? this._terminal.handler(o.C0.ESC + "[?1;2c") : this._terminal.is("linux") && this._terminal.handler(o.C0.ESC + "[?6c"))
            }, t.prototype.linePosAbsolute = function(e) {
                var t = e[0];
                t < 1 && (t = 1), this._terminal.buffer.y = t - 1, this._terminal.buffer.y >= this._terminal.rows && (this._terminal.buffer.y = this._terminal.rows - 1)
            }, t.prototype.vPositionRelative = function(e) {
                var t = e[0];
                t < 1 && (t = 1), this._terminal.buffer.y += t, this._terminal.buffer.y >= this._terminal.rows && (this._terminal.buffer.y = this._terminal.rows - 1), this._terminal.buffer.x >= this._terminal.cols && this._terminal.buffer.x--
            }, t.prototype.hVPosition = function(e) {
                e[0] < 1 && (e[0] = 1), e[1] < 1 && (e[1] = 1), this._terminal.buffer.y = e[0] - 1, this._terminal.buffer.y >= this._terminal.rows && (this._terminal.buffer.y = this._terminal.rows - 1), this._terminal.buffer.x = e[1] - 1, this._terminal.buffer.x >= this._terminal.cols && (this._terminal.buffer.x = this._terminal.cols - 1)
            }, t.prototype.tabClear = function(e) {
                var t = e[0];
                t <= 0 ? delete this._terminal.buffer.tabs[this._terminal.buffer.x] : 3 === t && (this._terminal.buffer.tabs = {})
            }, t.prototype.setMode = function(e, t) {
                if (e.length > 1)
                    for (var r = 0; r < e.length; r++) this.setMode([e[r]]);
                else if (t) {
                    if ("?" === t) switch (e[0]) {
                        case 1:
                            this._terminal.applicationCursor = !0;
                            break;
                        case 2:
                            this._terminal.setgCharset(0, s.DEFAULT_CHARSET), this._terminal.setgCharset(1, s.DEFAULT_CHARSET), this._terminal.setgCharset(2, s.DEFAULT_CHARSET), this._terminal.setgCharset(3, s.DEFAULT_CHARSET);
                            break;
                        case 3:
                            this._terminal.savedCols = this._terminal.cols, this._terminal.resize(132, this._terminal.rows);
                            break;
                        case 6:
                            this._terminal.originMode = !0;
                            break;
                        case 7:
                            this._terminal.wraparoundMode = !0;
                            break;
                        case 12:
                            break;
                        case 66:
                            this._terminal.log("Serial port requested application keypad."), this._terminal.applicationKeypad = !0, this._terminal.viewport && this._terminal.viewport.syncScrollArea();
                            break;
                        case 9:
                        case 1e3:
                        case 1002:
                        case 1003:
                            this._terminal.x10Mouse = 9 === e[0], this._terminal.vt200Mouse = 1e3 === e[0], this._terminal.normalMouse = e[0] > 1e3, this._terminal.mouseEvents = !0, this._terminal.element && this._terminal.element.classList.add("enable-mouse-events"), this._terminal.selectionManager && this._terminal.selectionManager.disable(), this._terminal.log("Binding to mouse events.");
                            break;
                        case 1004:
                            this._terminal.sendFocus = !0;
                            break;
                        case 1005:
                            this._terminal.utfMouse = !0;
                            break;
                        case 1006:
                            this._terminal.sgrMouse = !0;
                            break;
                        case 1015:
                            this._terminal.urxvtMouse = !0;
                            break;
                        case 25:
                            this._terminal.cursorHidden = !1;
                            break;
                        case 1048:
                            this.saveCursor(e);
                            break;
                        case 1049:
                            this.saveCursor(e);
                        case 47:
                        case 1047:
                            this._terminal.buffers.activateAltBuffer(this._terminal.eraseAttrData()), this._terminal.refresh(0, this._terminal.rows - 1), this._terminal.viewport && this._terminal.viewport.syncScrollArea(), this._terminal.showCursor();
                            break;
                        case 2004:
                            this._terminal.bracketedPasteMode = !0
                    }
                } else switch (e[0]) {
                    case 4:
                        this._terminal.insertMode = !0
                }
            }, t.prototype.resetMode = function(e, t) {
                if (e.length > 1)
                    for (var r = 0; r < e.length; r++) this.resetMode([e[r]]);
                else if (t) {
                    if ("?" === t) switch (e[0]) {
                        case 1:
                            this._terminal.applicationCursor = !1;
                            break;
                        case 3:
                            132 === this._terminal.cols && this._terminal.savedCols && this._terminal.resize(this._terminal.savedCols, this._terminal.rows), delete this._terminal.savedCols;
                            break;
                        case 6:
                            this._terminal.originMode = !1;
                            break;
                        case 7:
                            this._terminal.wraparoundMode = !1;
                            break;
                        case 12:
                            break;
                        case 66:
                            this._terminal.log("Switching back to normal keypad."), this._terminal.applicationKeypad = !1, this._terminal.viewport && this._terminal.viewport.syncScrollArea();
                            break;
                        case 9:
                        case 1e3:
                        case 1002:
                        case 1003:
                            this._terminal.x10Mouse = !1, this._terminal.vt200Mouse = !1, this._terminal.normalMouse = !1, this._terminal.mouseEvents = !1, this._terminal.element && this._terminal.element.classList.remove("enable-mouse-events"), this._terminal.selectionManager && this._terminal.selectionManager.enable();
                            break;
                        case 1004:
                            this._terminal.sendFocus = !1;
                            break;
                        case 1005:
                            this._terminal.utfMouse = !1;
                            break;
                        case 1006:
                            this._terminal.sgrMouse = !1;
                            break;
                        case 1015:
                            this._terminal.urxvtMouse = !1;
                            break;
                        case 25:
                            this._terminal.cursorHidden = !0;
                            break;
                        case 1048:
                            this.restoreCursor(e);
                            break;
                        case 1049:
                        case 47:
                        case 1047:
                            this._terminal.buffers.activateNormalBuffer(), 1049 === e[0] && this.restoreCursor(e), this._terminal.refresh(0, this._terminal.rows - 1), this._terminal.viewport && this._terminal.viewport.syncScrollArea(), this._terminal.showCursor();
                            break;
                        case 2004:
                            this._terminal.bracketedPasteMode = !1
                    }
                } else switch (e[0]) {
                    case 4:
                        this._terminal.insertMode = !1
                }
            }, t.prototype.charAttributes = function(e) {
                if (1 === e.length && 0 === e[0]) return this._terminal.curAttrData.fg = f.DEFAULT_ATTR_DATA.fg, void(this._terminal.curAttrData.bg = f.DEFAULT_ATTR_DATA.bg);
                for (var t, r = e.length, i = this._terminal.curAttrData, n = 0; n < r; n++)(t = e[n]) >= 30 && t <= 37 ? (i.fg &= -50331904, i.fg |= 16777216 | t - 30) : t >= 40 && t <= 47 ? (i.bg &= -50331904, i.bg |= 16777216 | t - 40) : t >= 90 && t <= 97 ? (i.fg &= -50331904, i.fg |= 16777224 | t - 90) : t >= 100 && t <= 107 ? (i.bg &= -50331904, i.bg |= 16777224 | t - 100) : 0 === t ? (i.fg = f.DEFAULT_ATTR_DATA.fg, i.bg = f.DEFAULT_ATTR_DATA.bg) : 1 === t ? i.fg |= 134217728 : 3 === t ? i.bg |= 67108864 : 4 === t ? i.fg |= 268435456 : 5 === t ? i.fg |= 536870912 : 7 === t ? i.fg |= 67108864 : 8 === t ? i.fg |= 1073741824 : 2 === t ? i.bg |= 134217728 : 22 === t ? (i.fg &= -134217729, i.bg &= -134217729) : 23 === t ? i.bg &= -67108865 : 24 === t ? i.fg &= -268435457 : 25 === t ? i.fg &= -536870913 : 27 === t ? i.fg &= -67108865 : 28 === t ? i.fg &= -1073741825 : 39 === t ? (i.fg &= -67108864, i.fg |= 16777215 & f.DEFAULT_ATTR_DATA.fg) : 49 === t ? (i.bg &= -67108864, i.bg |= 16777215 & f.DEFAULT_ATTR_DATA.bg) : 38 === t ? 2 === e[n + 1] ? (n += 2, i.fg |= 50331648, i.fg &= -16777216, i.fg |= f.AttributeData.fromColorRGB([e[n], e[n + 1], e[n + 2]]), n += 2) : 5 === e[n + 1] && (t = 255 & e[n += 2], i.fg &= -50331904, i.fg |= 33554432 | t) : 48 === t ? 2 === e[n + 1] ? (n += 2, i.bg |= 50331648, i.bg &= -16777216, i.bg |= f.AttributeData.fromColorRGB([e[n], e[n + 1], e[n + 2]]), n += 2) : 5 === e[n + 1] && (t = 255 & e[n += 2], i.bg &= -50331904, i.bg |= 33554432 | t) : 100 === t ? (i.fg &= -67108864, i.fg |= 16777215 & f.DEFAULT_ATTR_DATA.fg, i.bg &= -67108864, i.bg |= 16777215 & f.DEFAULT_ATTR_DATA.bg) : this._terminal.error("Unknown SGR attribute: %d.", t)
            }, t.prototype.deviceStatus = function(e, t) {
                if (t) {
                    if ("?" === t) switch (e[0]) {
                        case 6:
                            r = this._terminal.buffer.y + 1, i = this._terminal.buffer.x + 1, this._onData.fire(o.C0.ESC + "[?" + r + ";" + i + "R")
                    }
                } else switch (e[0]) {
                    case 5:
                        this._onData.fire(o.C0.ESC + "[0n");
                        break;
                    case 6:
                        var r = this._terminal.buffer.y + 1,
                            i = this._terminal.buffer.x + 1;
                        this._onData.fire(o.C0.ESC + "[" + r + ";" + i + "R")
                }
            }, t.prototype.softReset = function(e, t) {
                "!" === t && (this._terminal.cursorHidden = !1, this._terminal.insertMode = !1, this._terminal.originMode = !1, this._terminal.wraparoundMode = !0, this._terminal.applicationKeypad = !1, this._terminal.viewport && this._terminal.viewport.syncScrollArea(), this._terminal.applicationCursor = !1, this._terminal.buffer.scrollTop = 0, this._terminal.buffer.scrollBottom = this._terminal.rows - 1, this._terminal.curAttrData = f.DEFAULT_ATTR_DATA.clone(), this._terminal.buffer.x = this._terminal.buffer.y = 0, this._terminal.charset = null, this._terminal.glevel = 0, this._terminal.charsets = [null])
            }, t.prototype.setCursorStyle = function(e, t) {
                if (" " === t) {
                    var r = e[0] < 1 ? 1 : e[0];
                    switch (r) {
                        case 1:
                        case 2:
                            this._terminal.setOption("cursorStyle", "block");
                            break;
                        case 3:
                        case 4:
                            this._terminal.setOption("cursorStyle", "underline");
                            break;
                        case 5:
                        case 6:
                            this._terminal.setOption("cursorStyle", "bar")
                    }
                    var i = r % 2 == 1;
                    this._terminal.setOption("cursorBlink", i)
                }
            }, t.prototype.setScrollRegion = function(e, t) {
                t || (this._terminal.buffer.scrollTop = (e[0] || 1) - 1, this._terminal.buffer.scrollBottom = (e[1] && e[1] <= this._terminal.rows ? e[1] : this._terminal.rows) - 1, this._terminal.buffer.x = 0, this._terminal.buffer.y = 0)
            }, t.prototype.saveCursor = function(e) {
                this._terminal.buffer.savedX = this._terminal.buffer.x, this._terminal.buffer.savedY = this._terminal.buffer.y, this._terminal.buffer.savedCurAttrData.fg = this._terminal.curAttrData.fg, this._terminal.buffer.savedCurAttrData.bg = this._terminal.curAttrData.bg
            }, t.prototype.restoreCursor = function(e) {
                this._terminal.buffer.x = this._terminal.buffer.savedX || 0, this._terminal.buffer.y = this._terminal.buffer.savedY || 0, this._terminal.curAttrData.fg = this._terminal.buffer.savedCurAttrData.fg, this._terminal.curAttrData.bg = this._terminal.buffer.savedCurAttrData.bg
            }, t.prototype.setTitle = function(e) {
                this._terminal.handleTitle(e)
            }, t.prototype.nextLine = function() {
                this._terminal.buffer.x = 0, this.index()
            }, t.prototype.keypadApplicationMode = function() {
                this._terminal.log("Serial port requested application keypad."), this._terminal.applicationKeypad = !0, this._terminal.viewport && this._terminal.viewport.syncScrollArea()
            }, t.prototype.keypadNumericMode = function() {
                this._terminal.log("Switching back to normal keypad."), this._terminal.applicationKeypad = !1, this._terminal.viewport && this._terminal.viewport.syncScrollArea()
            }, t.prototype.selectDefaultCharset = function() {
                this._terminal.setgLevel(0), this._terminal.setgCharset(0, s.DEFAULT_CHARSET)
            }, t.prototype.selectCharset = function(e) {
                2 === e.length ? "/" !== e[0] && this._terminal.setgCharset(d[e[0]], s.CHARSETS[e[1]] || s.DEFAULT_CHARSET) : this.selectDefaultCharset()
            }, t.prototype.index = function() {
                this._terminal.index()
            }, t.prototype.tabSet = function() {
                this._terminal.tabSet()
            }, t.prototype.reverseIndex = function() {
                this._terminal.reverseIndex()
            }, t.prototype.reset = function() {
                this._parser.reset(), this._terminal.reset()
            }, t.prototype.setgLevel = function(e) {
                this._terminal.setgLevel(e)
            }, t
        }(h.Disposable);
    t.InputHandler = m
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CHARSETS = {}, t.DEFAULT_CHARSET = t.CHARSETS.B, t.CHARSETS[0] = {
        "`": "◆",
        a: "▒",
        b: "\t",
        c: "\f",
        d: "\r",
        e: "\n",
        f: "°",
        g: "±",
        h: "␤",
        i: "\v",
        j: "┘",
        k: "┐",
        l: "┌",
        m: "└",
        n: "┼",
        o: "⎺",
        p: "⎻",
        q: "─",
        r: "⎼",
        s: "⎽",
        t: "├",
        u: "┤",
        v: "┴",
        w: "┬",
        x: "│",
        y: "≤",
        z: "≥",
        "{": "π",
        "|": "≠",
        "}": "£",
        "~": "·"
    }, t.CHARSETS.A = {
        "#": "£"
    }, t.CHARSETS.B = null, t.CHARSETS[4] = {
        "#": "£",
        "@": "¾",
        "[": "ij",
        "\\": "½",
        "]": "|",
        "{": "¨",
        "|": "f",
        "}": "¼",
        "~": "´"
    }, t.CHARSETS.C = t.CHARSETS[5] = {
        "[": "Ä",
        "\\": "Ö",
        "]": "Å",
        "^": "Ü",
        "`": "é",
        "{": "ä",
        "|": "ö",
        "}": "å",
        "~": "ü"
    }, t.CHARSETS.R = {
        "#": "£",
        "@": "à",
        "[": "°",
        "\\": "ç",
        "]": "§",
        "{": "é",
        "|": "ù",
        "}": "è",
        "~": "¨"
    }, t.CHARSETS.Q = {
        "@": "à",
        "[": "â",
        "\\": "ç",
        "]": "ê",
        "^": "î",
        "`": "ô",
        "{": "é",
        "|": "ù",
        "}": "è",
        "~": "û"
    }, t.CHARSETS.K = {
        "@": "§",
        "[": "Ä",
        "\\": "Ö",
        "]": "Ü",
        "{": "ä",
        "|": "ö",
        "}": "ü",
        "~": "ß"
    }, t.CHARSETS.Y = {
        "#": "£",
        "@": "§",
        "[": "°",
        "\\": "ç",
        "]": "é",
        "`": "ù",
        "{": "à",
        "|": "ò",
        "}": "è",
        "~": "ì"
    }, t.CHARSETS.E = t.CHARSETS[6] = {
        "@": "Ä",
        "[": "Æ",
        "\\": "Ø",
        "]": "Å",
        "^": "Ü",
        "`": "ä",
        "{": "æ",
        "|": "ø",
        "}": "å",
        "~": "ü"
    }, t.CHARSETS.Z = {
        "#": "£",
        "@": "§",
        "[": "¡",
        "\\": "Ñ",
        "]": "¿",
        "{": "°",
        "|": "ñ",
        "}": "ç"
    }, t.CHARSETS.H = t.CHARSETS[7] = {
        "@": "É",
        "[": "Ä",
        "\\": "Ö",
        "]": "Å",
        "^": "Ü",
        "`": "é",
        "{": "ä",
        "|": "ö",
        "}": "å",
        "~": "ü"
    }, t.CHARSETS["="] = {
        "#": "ù",
        "@": "à",
        "[": "é",
        "\\": "ç",
        "]": "ê",
        "^": "î",
        _: "è",
        "`": "ô",
        "{": "ä",
        "|": "ö",
        "}": "ü",
        "~": "û"
    }
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(2),
        s = r(17);

    function a(e, t) {
        for (var r = t - e, i = new Array(r); r--;) i[r] = --t;
        return i
    }
    var l = function() {
        function e(e) {
            this.table = "undefined" == typeof Uint8Array ? new Array(e) : new Uint8Array(e)
        }
        return e.prototype.add = function(e, t, r, i) {
            this.table[t << 8 | e] = (0 | r) << 4 | (void 0 === i ? t : i)
        }, e.prototype.addMany = function(e, t, r, i) {
            for (var n = 0; n < e.length; n++) this.add(e[n], t, r, i)
        }, e
    }();
    t.TransitionTable = l;
    var h = a(32, 127),
        c = a(0, 24);
    c.push(25), c.push.apply(c, a(28, 32)), t.VT500_TRANSITION_TABLE = function() {
        var e, t = new l(4095),
            r = a(0, 14);
        for (e in r)
            for (var i = 0; i <= 160; ++i) t.add(i, e, 1, 0);
        for (e in t.addMany(h, 0, 2, 0), r) t.addMany([24, 26, 153, 154], e, 3, 0), t.addMany(a(128, 144), e, 3, 0), t.addMany(a(144, 152), e, 3, 0), t.add(156, e, 0, 0), t.add(27, e, 11, 1), t.add(157, e, 4, 8), t.addMany([152, 158, 159], e, 0, 7), t.add(155, e, 11, 3), t.add(144, e, 11, 9);
        return t.addMany(c, 0, 3, 0), t.addMany(c, 1, 3, 1), t.add(127, 1, 0, 1), t.addMany(c, 8, 0, 8), t.addMany(c, 3, 3, 3), t.add(127, 3, 0, 3), t.addMany(c, 4, 3, 4), t.add(127, 4, 0, 4), t.addMany(c, 6, 3, 6), t.addMany(c, 5, 3, 5), t.add(127, 5, 0, 5), t.addMany(c, 2, 3, 2), t.add(127, 2, 0, 2), t.add(93, 1, 4, 8), t.addMany(h, 8, 5, 8), t.add(127, 8, 5, 8), t.addMany([156, 27, 24, 26, 7], 8, 6, 0), t.addMany(a(28, 32), 8, 0, 8), t.addMany([88, 94, 95], 1, 0, 7), t.addMany(h, 7, 0, 7), t.addMany(c, 7, 0, 7), t.add(156, 7, 0, 0), t.add(127, 7, 0, 7), t.add(91, 1, 11, 3), t.addMany(a(64, 127), 3, 7, 0), t.addMany(a(48, 58), 3, 8, 4), t.add(59, 3, 8, 4), t.addMany([60, 61, 62, 63], 3, 9, 4), t.addMany(a(48, 58), 4, 8, 4), t.add(59, 4, 8, 4), t.addMany(a(64, 127), 4, 7, 0), t.addMany([58, 60, 61, 62, 63], 4, 0, 6), t.addMany(a(32, 64), 6, 0, 6), t.add(127, 6, 0, 6), t.addMany(a(64, 127), 6, 0, 0), t.add(58, 3, 0, 6), t.addMany(a(32, 48), 3, 9, 5), t.addMany(a(32, 48), 5, 9, 5), t.addMany(a(48, 64), 5, 0, 6), t.addMany(a(64, 127), 5, 7, 0), t.addMany(a(32, 48), 4, 9, 5), t.addMany(a(32, 48), 1, 9, 2), t.addMany(a(32, 48), 2, 9, 2), t.addMany(a(48, 127), 2, 10, 0), t.addMany(a(48, 80), 1, 10, 0), t.addMany(a(81, 88), 1, 10, 0), t.addMany([89, 90, 92], 1, 10, 0), t.addMany(a(96, 127), 1, 10, 0), t.add(80, 1, 11, 9), t.addMany(c, 9, 0, 9), t.add(127, 9, 0, 9), t.addMany(a(28, 32), 9, 0, 9), t.addMany(a(32, 48), 9, 9, 12), t.add(58, 9, 0, 11), t.addMany(a(48, 58), 9, 8, 10), t.add(59, 9, 8, 10), t.addMany([60, 61, 62, 63], 9, 9, 10), t.addMany(c, 11, 0, 11), t.addMany(a(32, 128), 11, 0, 11), t.addMany(a(28, 32), 11, 0, 11), t.addMany(c, 10, 0, 10), t.add(127, 10, 0, 10), t.addMany(a(28, 32), 10, 0, 10), t.addMany(a(48, 58), 10, 8, 10), t.add(59, 10, 8, 10), t.addMany([58, 60, 61, 62, 63], 10, 0, 11), t.addMany(a(32, 48), 10, 9, 12), t.addMany(c, 12, 0, 12), t.add(127, 12, 0, 12), t.addMany(a(28, 32), 12, 0, 12), t.addMany(a(32, 48), 12, 9, 12), t.addMany(a(48, 64), 12, 0, 11), t.addMany(a(64, 127), 12, 12, 13), t.addMany(a(64, 127), 10, 12, 13), t.addMany(a(64, 127), 9, 12, 13), t.addMany(c, 13, 13, 13), t.addMany(h, 13, 13, 13), t.add(127, 13, 0, 13), t.addMany([27, 156], 13, 14, 0), t.add(160, 8, 5, 8), t
    }();
    var u = function() {
            function e() {}
            return e.prototype.hook = function(e, t, r) {}, e.prototype.put = function(e, t, r) {}, e.prototype.unhook = function() {}, e
        }(),
        f = function(e) {
            function r(r) {
                void 0 === r && (r = t.VT500_TRANSITION_TABLE);
                var i = e.call(this) || this;
                return i.TRANSITIONS = r, i.initialState = 0, i.currentState = i.initialState, i._osc = "", i._params = [0], i._collect = "", i._printHandlerFb = function(e, t, r) {}, i._executeHandlerFb = function(e) {}, i._csiHandlerFb = function(e, t, r) {}, i._escHandlerFb = function(e, t) {}, i._oscHandlerFb = function(e, t) {}, i._dcsHandlerFb = new u, i._errorHandlerFb = function(e) {
                    return e
                }, i._printHandler = i._printHandlerFb, i._executeHandlers = Object.create(null), i._csiHandlers = Object.create(null), i._escHandlers = Object.create(null), i._oscHandlers = Object.create(null), i._dcsHandlers = Object.create(null), i._activeDcsHandler = null, i._errorHandler = i._errorHandlerFb, i.setEscHandler("\\", function() {}), i
            }
            return n(r, e), r.prototype.dispose = function() {
                this._printHandlerFb = null, this._executeHandlerFb = null, this._csiHandlerFb = null, this._escHandlerFb = null, this._oscHandlerFb = null, this._dcsHandlerFb = null, this._errorHandlerFb = null, this._printHandler = null, this._executeHandlers = null, this._escHandlers = null, this._csiHandlers = null, this._oscHandlers = null, this._dcsHandlers = null, this._activeDcsHandler = null, this._errorHandler = null
            }, r.prototype.setPrintHandler = function(e) {
                this._printHandler = e
            }, r.prototype.clearPrintHandler = function() {
                this._printHandler = this._printHandlerFb
            }, r.prototype.setExecuteHandler = function(e, t) {
                this._executeHandlers[e.charCodeAt(0)] = t
            }, r.prototype.clearExecuteHandler = function(e) {
                this._executeHandlers[e.charCodeAt(0)] && delete this._executeHandlers[e.charCodeAt(0)]
            }, r.prototype.setExecuteHandlerFallback = function(e) {
                this._executeHandlerFb = e
            }, r.prototype.addCsiHandler = function(e, t) {
                var r = e.charCodeAt(0);
                void 0 === this._csiHandlers[r] && (this._csiHandlers[r] = []);
                var i = this._csiHandlers[r];
                return i.push(t), {
                    dispose: function() {
                        var e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
                    }
                }
            }, r.prototype.setCsiHandler = function(e, t) {
                this._csiHandlers[e.charCodeAt(0)] = [t]
            }, r.prototype.clearCsiHandler = function(e) {
                this._csiHandlers[e.charCodeAt(0)] && delete this._csiHandlers[e.charCodeAt(0)]
            }, r.prototype.setCsiHandlerFallback = function(e) {
                this._csiHandlerFb = e
            }, r.prototype.setEscHandler = function(e, t) {
                this._escHandlers[e] = t
            }, r.prototype.clearEscHandler = function(e) {
                this._escHandlers[e] && delete this._escHandlers[e]
            }, r.prototype.setEscHandlerFallback = function(e) {
                this._escHandlerFb = e
            }, r.prototype.addOscHandler = function(e, t) {
                void 0 === this._oscHandlers[e] && (this._oscHandlers[e] = []);
                var r = this._oscHandlers[e];
                return r.push(t), {
                    dispose: function() {
                        var e = r.indexOf(t); - 1 !== e && r.splice(e, 1)
                    }
                }
            }, r.prototype.setOscHandler = function(e, t) {
                this._oscHandlers[e] = [t]
            }, r.prototype.clearOscHandler = function(e) {
                this._oscHandlers[e] && delete this._oscHandlers[e]
            }, r.prototype.setOscHandlerFallback = function(e) {
                this._oscHandlerFb = e
            }, r.prototype.setDcsHandler = function(e, t) {
                this._dcsHandlers[e] = t
            }, r.prototype.clearDcsHandler = function(e) {
                this._dcsHandlers[e] && delete this._dcsHandlers[e]
            }, r.prototype.setDcsHandlerFallback = function(e) {
                this._dcsHandlerFb = e
            }, r.prototype.setErrorHandler = function(e) {
                this._errorHandler = e
            }, r.prototype.clearErrorHandler = function() {
                this._errorHandler = this._errorHandlerFb
            }, r.prototype.reset = function() {
                this.currentState = this.initialState, this._osc = "", this._params = [0], this._collect = "", this._activeDcsHandler = null
            }, r.prototype.parse = function(e, t) {
                for (var r = 0, i = 0, n = !1, o = this.currentState, a = -1, l = -1, h = this._osc, c = this._collect, u = this._params, f = this.TRANSITIONS.table, _ = this._activeDcsHandler, d = null, p = 0; p < t; ++p)
                    if (r = e[p], 0 === o && r > 31 && r < 128) {
                        a = ~a ? a : p;
                        do {
                            p++
                        } while (p < t && e[p] > 31 && e[p] < 128);
                        p--
                    } else if (4 === o && r > 47 && r < 57) u[u.length - 1] = 10 * u[u.length - 1] + r - 48;
                else {
                    switch ((i = f[o << 8 | (r < 160 ? r : 160)]) >> 4) {
                        case 2:
                            a = ~a ? a : p;
                            break;
                        case 3:
                            ~a && (this._printHandler(e, a, p), a = -1), (d = this._executeHandlers[r]) ? d() : this._executeHandlerFb(r);
                            break;
                        case 0:
                            ~a ? (this._printHandler(e, a, p), a = -1) : ~l && (_.put(e, l, p), l = -1);
                            break;
                        case 1:
                            if (r > 159) switch (o) {
                                case 0:
                                    a = ~a ? a : p;
                                    break;
                                case 6:
                                    i |= 6;
                                    break;
                                case 11:
                                    i |= 11;
                                    break;
                                case 13:
                                    l = ~l ? l : p, i |= 13;
                                    break;
                                default:
                                    n = !0
                            } else n = !0;
                            if (n) {
                                if (this._errorHandler({
                                        position: p,
                                        code: r,
                                        currentState: o,
                                        print: a,
                                        dcs: l,
                                        osc: h,
                                        collect: c,
                                        params: u,
                                        abort: !1
                                    }).abort) return;
                                n = !1
                            }
                            break;
                        case 7:
                            for (var m = this._csiHandlers[r], y = m ? m.length - 1 : -1; y >= 0 && !1 === m[y](u, c); y--);
                            y < 0 && this._csiHandlerFb(c, u, r);
                            break;
                        case 8:
                            59 === r ? u.push(0) : u[u.length - 1] = 10 * u[u.length - 1] + r - 48;
                            break;
                        case 9:
                            c += String.fromCharCode(r);
                            break;
                        case 10:
                            (d = this._escHandlers[c + String.fromCharCode(r)]) ? d(c, r): this._escHandlerFb(c, r);
                            break;
                        case 11:
                            ~a && (this._printHandler(e, a, p), a = -1), h = "", u = [0], c = "", l = -1;
                            break;
                        case 12:
                            (_ = this._dcsHandlers[c + String.fromCharCode(r)]) || (_ = this._dcsHandlerFb), _.hook(c, u, r);
                            break;
                        case 13:
                            l = ~l ? l : p;
                            break;
                        case 14:
                            _ && (~l && _.put(e, l, p), _.unhook(), _ = null), 27 === r && (i |= 1), h = "", u = [0], c = "", l = -1;
                            break;
                        case 4:
                            ~a && (this._printHandler(e, a, p), a = -1), h = "";
                            break;
                        case 5:
                            for (var g = p + 1;; g++)
                                if (g >= t || (r = e[g]) < 32 || r > 127 && r <= 159) {
                                    h += s.utf32ToString(e, p, g), p = g - 1;
                                    break
                                } break;
                        case 6:
                            if (h && 24 !== r && 26 !== r) {
                                var v = h.indexOf(";");
                                if (-1 === v) this._oscHandlerFb(-1, h);
                                else {
                                    for (var b = parseInt(h.substring(0, v)), C = h.substring(v + 1), w = this._oscHandlers[b], S = w ? w.length - 1 : -1; S >= 0 && !1 === w[S](C); S--);
                                    S < 0 && this._oscHandlerFb(b, C)
                                }
                            }
                            27 === r && (i |= 1), h = "", u = [0], c = "", l = -1
                    }
                    o = 15 & i
                }
                0 === o && ~a ? this._printHandler(e, a, t) : 13 === o && ~l && _ && _.put(e, l, t), this._osc = h, this._collect = c, this._params = u, this._activeDcsHandler = _, this.currentState = o
            }, r
        }(o.Disposable);
    t.EscapeSequenceParser = f
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(62),
        s = r(68),
        a = r(69),
        l = r(70),
        h = r(32),
        c = function(e) {
            function t(t, r) {
                var i = e.call(this) || this;
                i._terminal = t, i._colors = r;
                var n = i._terminal.options.allowTransparency;
                return i._characterJoinerRegistry = new h.CharacterJoinerRegistry(t), i._renderLayers = [new o.TextRenderLayer(i._terminal.screenElement, 0, i._colors, i._characterJoinerRegistry, n), new s.SelectionRenderLayer(i._terminal.screenElement, 1, i._colors), new l.LinkRenderLayer(i._terminal.screenElement, 2, i._colors, i._terminal), new a.CursorRenderLayer(i._terminal.screenElement, 3, i._colors)], i.dimensions = {
                    scaledCharWidth: null,
                    scaledCharHeight: null,
                    scaledCellWidth: null,
                    scaledCellHeight: null,
                    scaledCharLeft: null,
                    scaledCharTop: null,
                    scaledCanvasWidth: null,
                    scaledCanvasHeight: null,
                    canvasWidth: null,
                    canvasHeight: null,
                    actualCellWidth: null,
                    actualCellHeight: null
                }, i._devicePixelRatio = window.devicePixelRatio, i._updateDimensions(), i.onOptionsChanged(), i
            }
            return n(t, e), t.prototype.dispose = function() {
                e.prototype.dispose.call(this), this._renderLayers.forEach(function(e) {
                    return e.dispose()
                })
            }, t.prototype.onDevicePixelRatioChange = function() {
                this._devicePixelRatio !== window.devicePixelRatio && (this._devicePixelRatio = window.devicePixelRatio, this.onResize(this._terminal.cols, this._terminal.rows))
            }, t.prototype.setColors = function(e) {
                var t = this;
                this._colors = e, this._renderLayers.forEach(function(e) {
                    e.setColors(t._terminal, t._colors), e.reset(t._terminal)
                })
            }, t.prototype.onResize = function(e, t) {
                var r = this;
                this._updateDimensions(), this._renderLayers.forEach(function(e) {
                    return e.resize(r._terminal, r.dimensions)
                }), this._terminal.screenElement.style.width = this.dimensions.canvasWidth + "px", this._terminal.screenElement.style.height = this.dimensions.canvasHeight + "px"
            }, t.prototype.onCharSizeChanged = function() {
                this.onResize(this._terminal.cols, this._terminal.rows)
            }, t.prototype.onBlur = function() {
                var e = this;
                this._runOperation(function(t) {
                    return t.onBlur(e._terminal)
                })
            }, t.prototype.onFocus = function() {
                var e = this;
                this._runOperation(function(t) {
                    return t.onFocus(e._terminal)
                })
            }, t.prototype.onSelectionChanged = function(e, t, r) {
                var i = this;
                void 0 === r && (r = !1), this._runOperation(function(n) {
                    return n.onSelectionChanged(i._terminal, e, t, r)
                })
            }, t.prototype.onCursorMove = function() {
                var e = this;
                this._runOperation(function(t) {
                    return t.onCursorMove(e._terminal)
                })
            }, t.prototype.onOptionsChanged = function() {
                var e = this;
                this._runOperation(function(t) {
                    return t.onOptionsChanged(e._terminal)
                })
            }, t.prototype.clear = function() {
                var e = this;
                this._runOperation(function(t) {
                    return t.reset(e._terminal)
                })
            }, t.prototype._runOperation = function(e) {
                this._renderLayers.forEach(function(t) {
                    return e(t)
                })
            }, t.prototype.renderRows = function(e, t) {
                var r = this;
                this._renderLayers.forEach(function(i) {
                    return i.onGridChanged(r._terminal, e, t)
                })
            }, t.prototype._updateDimensions = function() {
                this._terminal.charMeasure.width && this._terminal.charMeasure.height && (this.dimensions.scaledCharWidth = Math.floor(this._terminal.charMeasure.width * window.devicePixelRatio), this.dimensions.scaledCharHeight = Math.ceil(this._terminal.charMeasure.height * window.devicePixelRatio), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._terminal.options.lineHeight), this.dimensions.scaledCharTop = 1 === this._terminal.options.lineHeight ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._terminal.options.letterSpacing), this.dimensions.scaledCharLeft = Math.floor(this._terminal.options.letterSpacing / 2), this.dimensions.scaledCanvasHeight = this._terminal.rows * this.dimensions.scaledCellHeight, this.dimensions.scaledCanvasWidth = this._terminal.cols * this.dimensions.scaledCellWidth, this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._terminal.rows, this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._terminal.cols)
            }, t.prototype.registerCharacterJoiner = function(e) {
                return this._characterJoinerRegistry.registerCharacterJoiner(e)
            }, t.prototype.deregisterCharacterJoiner = function(e) {
                return this._characterJoinerRegistry.deregisterCharacterJoiner(e)
            }, t
        }(r(2).Disposable);
    t.Renderer = c
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(63),
        s = r(13),
        a = r(3),
        l = r(32),
        h = function(e) {
            function t(t, r, i, n, s) {
                var l = e.call(this, t, "text", r, s, i) || this;
                return l._characterOverlapCache = {}, l._workCell = new a.CellData, l._state = new o.GridCache, l._characterJoinerRegistry = n, l
            }
            return n(t, e), t.prototype.resize = function(t, r) {
                e.prototype.resize.call(this, t, r);
                var i = this._getFont(t, !1, !1);
                this._characterWidth === r.scaledCharWidth && this._characterFont === i || (this._characterWidth = r.scaledCharWidth, this._characterFont = i, this._characterOverlapCache = {}), this._state.clear(), this._state.resize(t.cols, t.rows)
            }, t.prototype.reset = function(e) {
                this._state.clear(), this.clearAll()
            }, t.prototype._forEachCell = function(e, t, r, i, n) {
                for (var o = t; o <= r; o++)
                    for (var s = o + e.buffer.ydisp, h = e.buffer.lines.get(s), c = i ? i.getJoinedCharacters(s) : [], u = 0; u < e.cols; u++) {
                        h.loadCell(u, this._workCell);
                        var f = this._workCell,
                            _ = !1,
                            d = u;
                        if (0 !== f.getWidth()) {
                            if (c.length > 0 && u === c[0][0]) {
                                _ = !0;
                                var p = c.shift();
                                f = new l.JoinedCellData(this._workCell, h.translateToString(!0, p[0], p[1]), p[1] - p[0]), d = p[1] - 1
                            }!_ && this._isOverlapping(f) && d < h.length - 1 && h.getCodePoint(d + 1) === a.NULL_CELL_CODE && (f.content &= -12582913, f.content |= 2 << 22), n(f, u, o), u = d
                        }
                    }
            }, t.prototype._drawBackground = function(e, t, r) {
                var i = this,
                    n = this._ctx,
                    o = e.cols,
                    s = 0,
                    l = 0,
                    h = null;
                n.save(), this._forEachCell(e, t, r, null, function(e, t, r) {
                    var c = null;
                    e.isInverse() ? c = e.isFgDefault() ? i._colors.foreground.css : e.isFgRGB() ? "rgb(" + a.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")" : i._colors.ansi[e.getFgColor()].css : e.isBgRGB() ? c = "rgb(" + a.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")" : e.isBgPalette() && (c = i._colors.ansi[e.getBgColor()].css), null === h && (s = t, l = r), r !== l ? (n.fillStyle = h, i.fillCells(s, l, o - s, 1), s = t, l = r) : h !== c && (n.fillStyle = h, i.fillCells(s, l, t - s, 1), s = t, l = r), h = c
                }), null !== h && (n.fillStyle = h, this.fillCells(s, l, o - s, 1)), n.restore()
            }, t.prototype._drawForeground = function(e, t, r) {
                var i = this;
                this._forEachCell(e, t, r, this._characterJoinerRegistry, function(t, r, n) {
                    if (!t.isInvisible() && (i.drawChars(e, t, r, n), t.isUnderline())) {
                        if (i._ctx.save(), t.isInverse()) t.isBgDefault() ? i._ctx.fillStyle = i._colors.background.css : t.isBgRGB() ? i._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(t.getBgColor()).join(",") + ")" : i._ctx.fillStyle = i._colors.ansi[t.getBgColor()].css;
                        else if (t.isFgDefault()) i._ctx.fillStyle = i._colors.foreground.css;
                        else if (t.isFgRGB()) i._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(t.getFgColor()).join(",") + ")";
                        else {
                            var o = t.getFgColor();
                            e.options.drawBoldTextInBrightColors && t.isBold() && o < 8 && (o += 8), i._ctx.fillStyle = i._colors.ansi[o].css
                        }
                        i.fillBottomLineAtCells(r, n, t.getWidth()), i._ctx.restore()
                    }
                })
            }, t.prototype.onGridChanged = function(e, t, r) {
                0 !== this._state.cache.length && (this._charAtlas && this._charAtlas.beginFrame(), this.clearCells(0, t, e.cols, r - t + 1), this._drawBackground(e, t, r), this._drawForeground(e, t, r))
            }, t.prototype.onOptionsChanged = function(e) {
                this.setTransparency(e, e.options.allowTransparency)
            }, t.prototype._isOverlapping = function(e) {
                if (1 !== e.getWidth()) return !1;
                if (e.getCode() < 256) return !1;
                var t = e.getChars();
                if (this._characterOverlapCache.hasOwnProperty(t)) return this._characterOverlapCache[t];
                this._ctx.save(), this._ctx.font = this._characterFont;
                var r = Math.floor(this._ctx.measureText(t).width) > this._characterWidth;
                return this._ctx.restore(), this._characterOverlapCache[t] = r, r
            }, t
        }(s.BaseRenderLayer);
    t.TextRenderLayer = h
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            this.cache = []
        }
        return e.prototype.resize = function(e, t) {
            for (var r = 0; r < e; r++) {
                this.cache.length <= r && this.cache.push([]);
                for (var i = this.cache[r].length; i < t; i++) this.cache[r].push(null);
                this.cache[r].length = t
            }
            this.cache.length = e
        }, e.prototype.clear = function() {
            for (var e = 0; e < this.cache.length; e++)
                for (var t = 0; t < this.cache[e].length; t++) this.cache[e][t] = null
        }, e
    }();
    t.GridCache = i
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(6),
        s = r(19),
        a = r(30),
        l = r(31),
        h = r(65),
        c = r(8),
        u = 1024,
        f = 1024,
        _ = {
            css: "rgba(0, 0, 0, 0)",
            rgba: 0
        };

    function d(e) {
        return e.code << 21 | e.bg << 12 | e.fg << 3 | (e.bold ? 0 : 4) + (e.dim ? 0 : 2) + (e.italic ? 0 : 1)
    }
    t.getGlyphCacheKey = d;
    var p = function(e) {
        function t(t, r) {
            var i = e.call(this) || this;
            i._config = r, i._drawToCacheCount = 0, i._glyphsWaitingOnBitmap = [], i._bitmapCommitTimeout = null, i._bitmap = null, i._cacheCanvas = t.createElement("canvas"), i._cacheCanvas.width = u, i._cacheCanvas.height = f, i._cacheCtx = i._cacheCanvas.getContext("2d", {
                alpha: !0
            });
            var n = t.createElement("canvas");
            n.width = i._config.scaledCharWidth, n.height = i._config.scaledCharHeight, i._tmpCtx = n.getContext("2d", {
                alpha: i._config.allowTransparency
            }), i._width = Math.floor(u / i._config.scaledCharWidth), i._height = Math.floor(f / i._config.scaledCharHeight);
            var o = i._width * i._height;
            return i._cacheMap = new h.default(o), i._cacheMap.prealloc(o), i
        }
        return n(t, e), t.prototype.dispose = function() {
            null !== this._bitmapCommitTimeout && (window.clearTimeout(this._bitmapCommitTimeout), this._bitmapCommitTimeout = null)
        }, t.prototype.beginFrame = function() {
            this._drawToCacheCount = 0
        }, t.prototype.draw = function(e, t, r, i) {
            if (32 === t.code) return !0;
            if (!this._canCache(t)) return !1;
            var n = d(t),
                o = this._cacheMap.get(n);
            if (null != o) return this._drawFromCache(e, o, r, i), !0;
            if (this._drawToCacheCount < 100) {
                var s;
                s = this._cacheMap.size < this._cacheMap.capacity ? this._cacheMap.size : this._cacheMap.peek().index;
                var a = this._drawToCache(t, s);
                return this._cacheMap.set(n, a), this._drawFromCache(e, a, r, i), !0
            }
            return !1
        }, t.prototype._canCache = function(e) {
            return e.code < 256
        }, t.prototype._toCoordinateX = function(e) {
            return e % this._width * this._config.scaledCharWidth
        }, t.prototype._toCoordinateY = function(e) {
            return Math.floor(e / this._width) * this._config.scaledCharHeight
        }, t.prototype._drawFromCache = function(e, t, r, i) {
            if (!t.isEmpty) {
                var n = this._toCoordinateX(t.index),
                    o = this._toCoordinateY(t.index);
                e.drawImage(t.inBitmap ? this._bitmap : this._cacheCanvas, n, o, this._config.scaledCharWidth, this._config.scaledCharHeight, r, i, this._config.scaledCharWidth, this._config.scaledCharHeight)
            }
        }, t.prototype._getColorFromAnsiIndex = function(e) {
            return e < this._config.colors.ansi.length ? this._config.colors.ansi[e] : a.DEFAULT_ANSI_COLORS[e]
        }, t.prototype._getBackgroundColor = function(e) {
            return this._config.allowTransparency ? _ : e.bg === o.INVERTED_DEFAULT_COLOR ? this._config.colors.foreground : e.bg < 256 ? this._getColorFromAnsiIndex(e.bg) : this._config.colors.background
        }, t.prototype._getForegroundColor = function(e) {
            return e.fg === o.INVERTED_DEFAULT_COLOR ? this._config.colors.background : e.fg < 256 ? this._getColorFromAnsiIndex(e.fg) : this._config.colors.foreground
        }, t.prototype._drawToCache = function(e, t) {
            this._drawToCacheCount++, this._tmpCtx.save();
            var r = this._getBackgroundColor(e);
            this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = r.css, this._tmpCtx.fillRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), this._tmpCtx.globalCompositeOperation = "source-over";
            var i = e.bold ? this._config.fontWeightBold : this._config.fontWeight,
                n = e.italic ? "italic" : "";
            this._tmpCtx.font = n + " " + i + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily, this._tmpCtx.textBaseline = "middle", this._tmpCtx.fillStyle = this._getForegroundColor(e).css, e.dim && (this._tmpCtx.globalAlpha = o.DIM_OPACITY), this._tmpCtx.fillText(e.chars, 0, this._config.scaledCharHeight / 2), this._tmpCtx.restore();
            var s = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight),
                a = !1;
            this._config.allowTransparency || (a = l.clearColor(s, r));
            var h = this._toCoordinateX(t),
                c = this._toCoordinateY(t);
            this._cacheCtx.putImageData(s, h, c);
            var u = {
                index: t,
                isEmpty: a,
                inBitmap: !1
            };
            return this._addGlyphToBitmap(u), u
        }, t.prototype._addGlyphToBitmap = function(e) {
            var t = this;
            "createImageBitmap" in window && !c.isFirefox && !c.isSafari && (this._glyphsWaitingOnBitmap.push(e), null === this._bitmapCommitTimeout && (this._bitmapCommitTimeout = window.setTimeout(function() {
                return t._generateBitmap()
            }, 100)))
        }, t.prototype._generateBitmap = function() {
            var e = this,
                t = this._glyphsWaitingOnBitmap;
            this._glyphsWaitingOnBitmap = [], window.createImageBitmap(this._cacheCanvas).then(function(r) {
                e._bitmap = r;
                for (var i = 0; i < t.length; i++) t[i].inBitmap = !0
            }), this._bitmapCommitTimeout = null
        }, t
    }(s.default);
    t.default = p
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e) {
            this.capacity = e, this._map = {}, this._head = null, this._tail = null, this._nodePool = [], this.size = 0
        }
        return e.prototype._unlinkNode = function(e) {
            var t = e.prev,
                r = e.next;
            e === this._head && (this._head = r), e === this._tail && (this._tail = t), null !== t && (t.next = r), null !== r && (r.prev = t)
        }, e.prototype._appendNode = function(e) {
            var t = this._tail;
            null !== t && (t.next = e), e.prev = t, e.next = null, this._tail = e, null === this._head && (this._head = e)
        }, e.prototype.prealloc = function(e) {
            for (var t = this._nodePool, r = 0; r < e; r++) t.push({
                prev: null,
                next: null,
                key: null,
                value: null
            })
        }, e.prototype.get = function(e) {
            var t = this._map[e];
            return void 0 !== t ? (this._unlinkNode(t), this._appendNode(t), t.value) : null
        }, e.prototype.peekValue = function(e) {
            var t = this._map[e];
            return void 0 !== t ? t.value : null
        }, e.prototype.peek = function() {
            var e = this._head;
            return null === e ? null : e.value
        }, e.prototype.set = function(e, t) {
            var r = this._map[e];
            if (void 0 !== r) r = this._map[e], this._unlinkNode(r), r.value = t;
            else if (this.size >= this.capacity) r = this._head, this._unlinkNode(r), delete this._map[r.key], r.key = e, r.value = t, this._map[e] = r;
            else {
                var i = this._nodePool;
                i.length > 0 ? ((r = i.pop()).key = e, r.value = t) : r = {
                    prev: null,
                    next: null,
                    key: e,
                    value: t
                }, this._map[e] = r, this.size++
            }
            this._appendNode(r)
        }, e
    }();
    t.default = i
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        function t(t, r) {
            return e.call(this) || this
        }
        return n(t, e), t.prototype.draw = function(e, t, r, i) {
            return !1
        }, t
    }(r(19).default);
    t.default = o
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(6),
        s = r(31),
        a = r(19),
        l = r(18),
        h = r(11),
        c = function(e) {
            function t(t, r) {
                var i = e.call(this) || this;
                return i._document = t, i._config = r, i._canvasFactory = function(e, t) {
                    var r = i._document.createElement("canvas");
                    return r.width = e, r.height = t, r
                }, i
            }
            return n(t, e), t.prototype._doWarmUp = function() {
                var e = this,
                    t = s.generateStaticCharAtlasTexture(window, this._canvasFactory, this._config);
                t instanceof HTMLCanvasElement ? this._texture = t : t.then(function(t) {
                    e._texture = t
                })
            }, t.prototype._isCached = function(e, t) {
                var r = e.code < 256,
                    i = e.fg < 16,
                    n = e.fg === h.DEFAULT_COLOR,
                    o = e.bg === h.DEFAULT_COLOR;
                return r && (i || n) && o && !e.italic
            }, t.prototype.draw = function(e, t, r, i) {
                if (null === this._texture || void 0 === this._texture) return !1;
                var n = 0;
                if (l.is256Color(t.fg) ? n = 2 + t.fg + (t.bold ? 16 : 0) : t.fg === h.DEFAULT_COLOR && t.bold && (n = 1), !this._isCached(t, n)) return !1;
                e.save();
                var s = this._config.scaledCharWidth + o.CHAR_ATLAS_CELL_SPACING,
                    a = this._config.scaledCharHeight + o.CHAR_ATLAS_CELL_SPACING;
                return t.dim && (e.globalAlpha = o.DIM_OPACITY), e.drawImage(this._texture, t.code * s, n * a, s, this._config.scaledCharHeight, r, i, s, this._config.scaledCharHeight), e.restore(), !0
            }, t
        }(a.default);
    t.default = c
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        function t(t, r, i) {
            var n = e.call(this, t, "selection", r, !0, i) || this;
            return n._clearState(), n
        }
        return n(t, e), t.prototype._clearState = function() {
            this._state = {
                start: null,
                end: null,
                columnSelectMode: null,
                ydisp: null
            }
        }, t.prototype.resize = function(t, r) {
            e.prototype.resize.call(this, t, r), this._clearState()
        }, t.prototype.reset = function(e) {
            this._state.start && this._state.end && (this._clearState(), this.clearAll())
        }, t.prototype.onSelectionChanged = function(e, t, r, i) {
            if (this._didStateChange(t, r, i, e.buffer.ydisp))
                if (this.clearAll(), t && r) {
                    var n = t[1] - e.buffer.ydisp,
                        o = r[1] - e.buffer.ydisp,
                        s = Math.max(n, 0),
                        a = Math.min(o, e.rows - 1);
                    if (!(s >= e.rows || a < 0)) {
                        if (this._ctx.fillStyle = this._colors.selection.css, i) {
                            var l = t[0],
                                h = r[0] - l,
                                c = a - s + 1;
                            this.fillCells(l, s, h, c)
                        } else {
                            l = n === s ? t[0] : 0;
                            var u = s === a ? r[0] : e.cols;
                            this.fillCells(l, s, u - l, 1);
                            var f = Math.max(a - s - 1, 0);
                            if (this.fillCells(0, s + 1, e.cols, f), s !== a) {
                                var _ = o === a ? r[0] : e.cols;
                                this.fillCells(0, a, _, 1)
                            }
                        }
                        this._state.start = [t[0], t[1]], this._state.end = [r[0], r[1]], this._state.columnSelectMode = i, this._state.ydisp = e.buffer.ydisp
                    }
                } else this._clearState()
        }, t.prototype._didStateChange = function(e, t, r, i) {
            return !this._areCoordinatesEqual(e, this._state.start) || !this._areCoordinatesEqual(t, this._state.end) || r !== this._state.columnSelectMode || i !== this._state.ydisp
        }, t.prototype._areCoordinatesEqual = function(e, t) {
            return !(!e || !t) && e[0] === t[0] && e[1] === t[1]
        }, t
    }(r(13).BaseRenderLayer);
    t.SelectionRenderLayer = o
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(13),
        s = r(3),
        a = function(e) {
            function t(t, r, i) {
                var n = e.call(this, t, "cursor", r, !0, i) || this;
                return n._cell = new s.CellData, n._state = {
                    x: null,
                    y: null,
                    isFocused: null,
                    style: null,
                    width: null
                }, n._cursorRenderers = {
                    bar: n._renderBarCursor.bind(n),
                    block: n._renderBlockCursor.bind(n),
                    underline: n._renderUnderlineCursor.bind(n)
                }, n
            }
            return n(t, e), t.prototype.resize = function(t, r) {
                e.prototype.resize.call(this, t, r), this._state = {
                    x: null,
                    y: null,
                    isFocused: null,
                    style: null,
                    width: null
                }
            }, t.prototype.reset = function(e) {
                this._clearCursor(), this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), this._cursorBlinkStateManager = null, this.onOptionsChanged(e))
            }, t.prototype.onBlur = function(e) {
                this._cursorBlinkStateManager && this._cursorBlinkStateManager.pause(), e.refresh(e.buffer.y, e.buffer.y)
            }, t.prototype.onFocus = function(e) {
                this._cursorBlinkStateManager ? this._cursorBlinkStateManager.resume(e) : e.refresh(e.buffer.y, e.buffer.y)
            }, t.prototype.onOptionsChanged = function(e) {
                var t = this;
                e.options.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new l(e, function() {
                    t._render(e, !0)
                })) : (this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), this._cursorBlinkStateManager = null), e.refresh(e.buffer.y, e.buffer.y))
            }, t.prototype.onCursorMove = function(e) {
                this._cursorBlinkStateManager && this._cursorBlinkStateManager.restartBlinkAnimation(e)
            }, t.prototype.onGridChanged = function(e, t, r) {
                !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(e, !1) : this._cursorBlinkStateManager.restartBlinkAnimation(e)
            }, t.prototype._render = function(e, t) {
                if (e.cursorState && !e.cursorHidden) {
                    var r = e.buffer.ybase + e.buffer.y,
                        i = r - e.buffer.ydisp;
                    if (i < 0 || i >= e.rows) this._clearCursor();
                    else if (e.buffer.lines.get(r).loadCell(e.buffer.x, this._cell), void 0 !== this._cell.content) {
                        if (!e.isFocused) return this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._renderBlurCursor(e, e.buffer.x, i, this._cell), this._ctx.restore(), this._state.x = e.buffer.x, this._state.y = i, this._state.isFocused = !1, this._state.style = e.options.cursorStyle, void(this._state.width = this._cell.getWidth());
                        if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                            if (this._state) {
                                if (this._state.x === e.buffer.x && this._state.y === i && this._state.isFocused === e.isFocused && this._state.style === e.options.cursorStyle && this._state.width === this._cell.getWidth()) return;
                                this._clearCursor()
                            }
                            this._ctx.save(), this._cursorRenderers[e.options.cursorStyle || "block"](e, e.buffer.x, i, this._cell), this._ctx.restore(), this._state.x = e.buffer.x, this._state.y = i, this._state.isFocused = !1, this._state.style = e.options.cursorStyle, this._state.width = this._cell.getWidth()
                        } else this._clearCursor()
                    }
                } else this._clearCursor()
            }, t.prototype._clearCursor = function() {
                this._state && (this.clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = {
                    x: null,
                    y: null,
                    isFocused: null,
                    style: null,
                    width: null
                })
            }, t.prototype._renderBarCursor = function(e, t, r, i) {
                this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this.fillLeftLineAtCell(t, r), this._ctx.restore()
            }, t.prototype._renderBlockCursor = function(e, t, r, i) {
                this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this.fillCells(t, r, i.getWidth(), 1), this._ctx.fillStyle = this._colors.cursorAccent.css, this.fillCharTrueColor(e, i, t, r), this._ctx.restore()
            }, t.prototype._renderUnderlineCursor = function(e, t, r, i) {
                this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this.fillBottomLineAtCells(t, r), this._ctx.restore()
            }, t.prototype._renderBlurCursor = function(e, t, r, i) {
                this._ctx.save(), this._ctx.strokeStyle = this._colors.cursor.css, this.strokeRectAtCell(t, r, i.getWidth(), 1), this._ctx.restore()
            }, t
        }(o.BaseRenderLayer);
    t.CursorRenderLayer = a;
    var l = function() {
        function e(e, t) {
            this._renderCallback = t, this.isCursorVisible = !0, e.isFocused && this._restartInterval()
        }
        return Object.defineProperty(e.prototype, "isPaused", {
            get: function() {
                return !(this._blinkStartTimeout || this._blinkInterval)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.dispose = function() {
            this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = null), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = null), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = null)
        }, e.prototype.restartBlinkAnimation = function(e) {
            var t = this;
            this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = !0, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                t._renderCallback(), t._animationFrame = null
            })))
        }, e.prototype._restartInterval = function(e) {
            var t = this;
            void 0 === e && (e = 600), this._blinkInterval && window.clearInterval(this._blinkInterval), this._blinkStartTimeout = setTimeout(function() {
                if (t._animationTimeRestarted) {
                    var e = 600 - (Date.now() - t._animationTimeRestarted);
                    if (t._animationTimeRestarted = null, e > 0) return void t._restartInterval(e)
                }
                t.isCursorVisible = !1, t._animationFrame = window.requestAnimationFrame(function() {
                    t._renderCallback(), t._animationFrame = null
                }), t._blinkInterval = setInterval(function() {
                    if (t._animationTimeRestarted) {
                        var e = 600 - (Date.now() - t._animationTimeRestarted);
                        return t._animationTimeRestarted = null, void t._restartInterval(e)
                    }
                    t.isCursorVisible = !t.isCursorVisible, t._animationFrame = window.requestAnimationFrame(function() {
                        t._renderCallback(), t._animationFrame = null
                    })
                }, 600)
            }, e)
        }, e.prototype.pause = function() {
            this.isCursorVisible = !0, this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = null), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = null), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = null)
        }, e.prototype.resume = function(e) {
            this._animationTimeRestarted = null, this._restartInterval(), this.restartBlinkAnimation(e)
        }, e
    }()
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(13),
        s = r(6),
        a = r(18),
        l = function(e) {
            function t(t, r, i, n) {
                var o = e.call(this, t, "link", r, !0, i) || this;
                return o._state = null, n.linkifier.onLinkHover(function(e) {
                    return o._onLinkHover(e)
                }), n.linkifier.onLinkLeave(function(e) {
                    return o._onLinkLeave(e)
                }), o
            }
            return n(t, e), t.prototype.resize = function(t, r) {
                e.prototype.resize.call(this, t, r), this._state = null
            }, t.prototype.reset = function(e) {
                this._clearCurrentLink()
            }, t.prototype._clearCurrentLink = function() {
                if (this._state) {
                    this.clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                    var e = this._state.y2 - this._state.y1 - 1;
                    e > 0 && this.clearCells(0, this._state.y1 + 1, this._state.cols, e), this.clearCells(0, this._state.y2, this._state.x2, 1), this._state = null
                }
            }, t.prototype._onLinkHover = function(e) {
                if (e.fg === s.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._colors.background.css : a.is256Color(e.fg) ? this._ctx.fillStyle = this._colors.ansi[e.fg].css : this._ctx.fillStyle = this._colors.foreground.css, e.y1 === e.y2) this.fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1);
                else {
                    this.fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
                    for (var t = e.y1 + 1; t < e.y2; t++) this.fillBottomLineAtCells(0, t, e.cols);
                    this.fillBottomLineAtCells(0, e.y2, e.x2)
                }
                this._state = e
            }, t.prototype._onLinkLeave = function(e) {
                this._clearCurrentLink()
            }, t
        }(o.BaseRenderLayer);
    t.LinkRenderLayer = l
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(33),
        n = r(27),
        o = r(4),
        s = function() {
            function e(e) {
                this._terminal = e, this._linkMatchers = [], this._nextLinkMatcherId = 0, this._onLinkHover = new o.EventEmitter2, this._onLinkLeave = new o.EventEmitter2, this._onLinkTooltip = new o.EventEmitter2, this._rowsToLinkify = {
                    start: null,
                    end: null
                }
            }
            return Object.defineProperty(e.prototype, "onLinkHover", {
                get: function() {
                    return this._onLinkHover.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onLinkLeave", {
                get: function() {
                    return this._onLinkLeave.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onLinkTooltip", {
                get: function() {
                    return this._onLinkTooltip.event
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.attachToDom = function(e) {
                this._mouseZoneManager = e
            }, e.prototype.linkifyRows = function(t, r) {
                var i = this;
                this._mouseZoneManager && (null === this._rowsToLinkify.start ? (this._rowsToLinkify.start = t, this._rowsToLinkify.end = r) : (this._rowsToLinkify.start = Math.min(this._rowsToLinkify.start, t), this._rowsToLinkify.end = Math.max(this._rowsToLinkify.end, r)), this._mouseZoneManager.clearAll(t, r), this._rowsTimeoutId && clearTimeout(this._rowsTimeoutId), this._rowsTimeoutId = setTimeout(function() {
                    return i._linkifyRows()
                }, e.TIME_BEFORE_LINKIFY))
            }, e.prototype._linkifyRows = function() {
                this._rowsTimeoutId = null;
                var t = this._terminal.buffer,
                    r = t.ydisp + this._rowsToLinkify.start;
                if (!(r >= t.lines.length)) {
                    for (var i = t.ydisp + Math.min(this._rowsToLinkify.end, this._terminal.rows) + 1, n = Math.ceil(e.OVERSCAN_CHAR_LIMIT / this._terminal.cols), o = this._terminal.buffer.iterator(!1, r, i, n, n); o.hasNext();)
                        for (var s = o.next(), a = 0; a < this._linkMatchers.length; a++) this._doLinkifyRow(s.range.first, s.content, this._linkMatchers[a]);
                    this._rowsToLinkify.start = null, this._rowsToLinkify.end = null
                }
            }, e.prototype.registerLinkMatcher = function(e, t, r) {
                if (void 0 === r && (r = {}), !t) throw new Error("handler must be defined");
                var i = {
                    id: this._nextLinkMatcherId++,
                    regex: e,
                    handler: t,
                    matchIndex: r.matchIndex,
                    validationCallback: r.validationCallback,
                    hoverTooltipCallback: r.tooltipCallback,
                    hoverLeaveCallback: r.leaveCallback,
                    willLinkActivate: r.willLinkActivate,
                    priority: r.priority || 0
                };
                return this._addLinkMatcherToList(i), i.id
            }, e.prototype._addLinkMatcherToList = function(e) {
                if (0 !== this._linkMatchers.length) {
                    for (var t = this._linkMatchers.length - 1; t >= 0; t--)
                        if (e.priority <= this._linkMatchers[t].priority) return void this._linkMatchers.splice(t + 1, 0, e);
                    this._linkMatchers.splice(0, 0, e)
                } else this._linkMatchers.push(e)
            }, e.prototype.deregisterLinkMatcher = function(e) {
                for (var t = 0; t < this._linkMatchers.length; t++)
                    if (this._linkMatchers[t].id === e) return this._linkMatchers.splice(t, 1), !0;
                return !1
            }, e.prototype._doLinkifyRow = function(e, t, r) {
                for (var i, n = this, o = new RegExp(r.regex.source, r.regex.flags + "g"), s = -1, a = function() {
                        var a = i["number" != typeof r.matchIndex ? 0 : r.matchIndex];
                        if (!a) {
                            if (l._terminal.debug) throw console.log({
                                match: i,
                                matcher: r
                            }), new Error("match found without corresponding matchIndex");
                            return "break"
                        }
                        if (s = t.indexOf(a, s + 1), o.lastIndex = s + a.length, s < 0) return "break";
                        var h = l._terminal.buffer.stringIndexToBufferIndex(e, s);
                        if (h[0] < 0) return "break";
                        var c, u = l._terminal.buffer.lines.get(h[0]).getFg(h[1]);
                        u && (c = u >> 9 & 511), r.validationCallback ? r.validationCallback(a, function(e) {
                            n._rowsTimeoutId || e && n._addLink(h[1], h[0] - n._terminal.buffer.ydisp, a, r, c)
                        }) : l._addLink(h[1], h[0] - l._terminal.buffer.ydisp, a, r, c)
                    }, l = this; null !== (i = o.exec(t)) && "break" !== a(););
            }, e.prototype._addLink = function(e, t, r, o, s) {
                var a = this,
                    l = n.getStringCellWidth(r),
                    h = e % this._terminal.cols,
                    c = t + Math.floor(e / this._terminal.cols),
                    u = (h + l) % this._terminal.cols,
                    f = c + Math.floor((h + l) / this._terminal.cols);
                0 === u && (u = this._terminal.cols, f--), this._mouseZoneManager.add(new i.MouseZone(h + 1, c + 1, u + 1, f + 1, function(e) {
                    if (o.handler) return o.handler(e, r);
                    window.open(r, "_blank")
                }, function() {
                    a._onLinkHover.fire(a._createLinkHoverEvent(h, c, u, f, s)), a._terminal.element.classList.add("xterm-cursor-pointer")
                }, function(e) {
                    a._onLinkTooltip.fire(a._createLinkHoverEvent(h, c, u, f, s)), o.hoverTooltipCallback && o.hoverTooltipCallback(e, r)
                }, function() {
                    a._onLinkLeave.fire(a._createLinkHoverEvent(h, c, u, f, s)), a._terminal.element.classList.remove("xterm-cursor-pointer"), o.hoverLeaveCallback && o.hoverLeaveCallback()
                }, function(e) {
                    return !o.willLinkActivate || o.willLinkActivate(e, r)
                }))
            }, e.prototype._createLinkHoverEvent = function(e, t, r, i, n) {
                return {
                    x1: e,
                    y1: t,
                    x2: r,
                    y2: i,
                    cols: this._terminal.cols,
                    fg: n
                }
            }, e.TIME_BEFORE_LINKIFY = 200, e.OVERSCAN_CHAR_LIMIT = 2e3, e
        }();
    t.Linkifier = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(34),
        n = r(8),
        o = r(73),
        s = r(74),
        a = r(3),
        l = r(4),
        h = String.fromCharCode(160),
        c = new RegExp(h, "g"),
        u = function() {
            function e(e, t) {
                this._terminal = e, this._charMeasure = t, this._enabled = !0, this._workCell = new a.CellData, this._onLinuxMouseSelection = new l.EventEmitter2, this._onRedrawRequest = new l.EventEmitter2, this._onSelectionChange = new l.EventEmitter2, this._initListeners(), this.enable(), this._model = new o.SelectionModel(e), this._activeSelectionMode = 0
            }
            return Object.defineProperty(e.prototype, "onLinuxMouseSelection", {
                get: function() {
                    return this._onLinuxMouseSelection.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onRedrawRequest", {
                get: function() {
                    return this._onRedrawRequest.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "onSelectionChange", {
                get: function() {
                    return this._onSelectionChange.event
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function() {
                this._removeMouseDownListeners()
            }, Object.defineProperty(e.prototype, "_buffer", {
                get: function() {
                    return this._terminal.buffers.active
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._initListeners = function() {
                var e = this;
                this._mouseMoveListener = function(t) {
                    return e._onMouseMove(t)
                }, this._mouseUpListener = function(t) {
                    return e._onMouseUp(t)
                }, this.initBuffersListeners()
            }, e.prototype.initBuffersListeners = function() {
                var e = this;
                this._trimListener = this._terminal.buffer.lines.onTrim(function(t) {
                    return e._onTrim(t)
                }), this._terminal.buffers.onBufferActivate(function(t) {
                    return e._onBufferActivate(t)
                })
            }, e.prototype.disable = function() {
                this.clearSelection(), this._enabled = !1
            }, e.prototype.enable = function() {
                this._enabled = !0
            }, Object.defineProperty(e.prototype, "selectionStart", {
                get: function() {
                    return this._model.finalSelectionStart
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "selectionEnd", {
                get: function() {
                    return this._model.finalSelectionEnd
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "hasSelection", {
                get: function() {
                    var e = this._model.finalSelectionStart,
                        t = this._model.finalSelectionEnd;
                    return !(!e || !t || e[0] === t[0] && e[1] === t[1])
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "selectionText", {
                get: function() {
                    var e = this._model.finalSelectionStart,
                        t = this._model.finalSelectionEnd;
                    if (!e || !t) return "";
                    var r = [];
                    if (3 === this._activeSelectionMode) {
                        if (e[0] === t[0]) return "";
                        for (var i = e[1]; i <= t[1]; i++) {
                            var o = this._buffer.translateBufferLineToString(i, !0, e[0], t[0]);
                            r.push(o)
                        }
                    } else {
                        var s = e[1] === t[1] ? t[0] : void 0;
                        for (r.push(this._buffer.translateBufferLineToString(e[1], !0, e[0], s)), i = e[1] + 1; i <= t[1] - 1; i++) {
                            var a = this._buffer.lines.get(i);
                            o = this._buffer.translateBufferLineToString(i, !0), a.isWrapped ? r[r.length - 1] += o : r.push(o)
                        }
                        e[1] !== t[1] && (a = this._buffer.lines.get(t[1]), o = this._buffer.translateBufferLineToString(t[1], !0, 0, t[0]), a.isWrapped ? r[r.length - 1] += o : r.push(o))
                    }
                    return r.map(function(e) {
                        return e.replace(c, " ")
                    }).join(n.isMSWindows ? "\r\n" : "\n")
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.clearSelection = function() {
                this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire()
            }, e.prototype.refresh = function(e) {
                var t = this;
                this._refreshAnimationFrame || (this._refreshAnimationFrame = window.requestAnimationFrame(function() {
                    return t._refresh()
                })), n.isLinux && e && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText)
            }, e.prototype._refresh = function() {
                this._refreshAnimationFrame = null, this._onRedrawRequest.fire({
                    start: this._model.finalSelectionStart,
                    end: this._model.finalSelectionEnd,
                    columnSelectMode: 3 === this._activeSelectionMode
                })
            }, e.prototype.isClickInSelection = function(e) {
                var t = this._getMouseBufferCoords(e),
                    r = this._model.finalSelectionStart,
                    i = this._model.finalSelectionEnd;
                return !(!r || !i) && this._areCoordsInSelection(t, r, i)
            }, e.prototype._areCoordsInSelection = function(e, t, r) {
                return e[1] > t[1] && e[1] < r[1] || t[1] === r[1] && e[1] === t[1] && e[0] >= t[0] && e[0] < r[0] || t[1] < r[1] && e[1] === r[1] && e[0] < r[0] || t[1] < r[1] && e[1] === t[1] && e[0] >= t[0]
            }, e.prototype.selectWordAtCursor = function(e) {
                var t = this._getMouseBufferCoords(e);
                t && (this._selectWordAt(t, !1), this._model.selectionEnd = null, this.refresh(!0))
            }, e.prototype.selectAll = function() {
                this._model.isSelectAllActive = !0, this.refresh(), this._onSelectionChange.fire()
            }, e.prototype.selectLines = function(e, t) {
                this._model.clearSelection(), e = Math.max(e, 0), t = Math.min(t, this._terminal.buffer.lines.length - 1), this._model.selectionStart = [0, e], this._model.selectionEnd = [this._terminal.cols, t], this.refresh(), this._onSelectionChange.fire()
            }, e.prototype._onTrim = function(e) {
                this._model.onTrim(e) && this.refresh()
            }, e.prototype._getMouseBufferCoords = function(e) {
                var t = this._terminal.mouseHelper.getCoords(e, this._terminal.screenElement, this._charMeasure, this._terminal.cols, this._terminal.rows, !0);
                return t ? (t[0]--, t[1]--, t[1] += this._terminal.buffer.ydisp, t) : null
            }, e.prototype._getMouseEventScrollAmount = function(e) {
                var t = i.MouseHelper.getCoordsRelativeToElement(e, this._terminal.screenElement)[1],
                    r = this._terminal.rows * Math.ceil(this._charMeasure.height * this._terminal.options.lineHeight);
                return t >= 0 && t <= r ? 0 : (t > r && (t -= r), t = Math.min(Math.max(t, -50), 50), (t /= 50) / Math.abs(t) + Math.round(14 * t))
            }, e.prototype.shouldForceSelection = function(e) {
                return n.isMac ? e.altKey && this._terminal.options.macOptionClickForcesSelection : e.shiftKey
            }, e.prototype.onMouseDown = function(e) {
                if (this._mouseDownTimeStamp = e.timeStamp, (2 !== e.button || !this.hasSelection) && 0 === e.button) {
                    if (!this._enabled) {
                        if (!this.shouldForceSelection(e)) return;
                        e.stopPropagation()
                    }
                    e.preventDefault(), this._dragScrollAmount = 0, this._enabled && e.shiftKey ? this._onIncrementalClick(e) : 1 === e.detail ? this._onSingleClick(e) : 2 === e.detail ? this._onDoubleClick(e) : 3 === e.detail && this._onTripleClick(e), this._addMouseDownListeners(), this.refresh(!0)
                }
            }, e.prototype._addMouseDownListeners = function() {
                var e = this;
                this._terminal.element.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._terminal.element.ownerDocument.addEventListener("mouseup", this._mouseUpListener), this._dragScrollIntervalTimer = setInterval(function() {
                    return e._dragScroll()
                }, 50)
            }, e.prototype._removeMouseDownListeners = function() {
                this._terminal.element.ownerDocument && (this._terminal.element.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._terminal.element.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = null
            }, e.prototype._onIncrementalClick = function(e) {
                this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e))
            }, e.prototype._onSingleClick = function(e) {
                if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = !1, this._activeSelectionMode = this.shouldColumnSelect(e) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e), this._model.selectionStart) {
                    this._model.selectionEnd = null;
                    var t = this._buffer.lines.get(this._model.selectionStart[1]);
                    t && (t.length >= this._model.selectionStart[0] || 0 === t.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++)
                }
            }, e.prototype._onDoubleClick = function(e) {
                var t = this._getMouseBufferCoords(e);
                t && (this._activeSelectionMode = 1, this._selectWordAt(t, !0))
            }, e.prototype._onTripleClick = function(e) {
                var t = this._getMouseBufferCoords(e);
                t && (this._activeSelectionMode = 2, this._selectLineAt(t[1]))
            }, e.prototype.shouldColumnSelect = function(e) {
                return e.altKey && !(n.isMac && this._terminal.options.macOptionClickForcesSelection)
            }, e.prototype._onMouseMove = function(e) {
                e.stopImmediatePropagation();
                var t = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
                this._model.selectionEnd = this._getMouseBufferCoords(e), this._model.selectionEnd ? (2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._terminal.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._terminal.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0)), this._model.selectionEnd[1] < this._buffer.lines.length && 0 === this._buffer.lines.get(this._model.selectionEnd[1]).hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0]++, t && t[0] === this._model.selectionEnd[0] && t[1] === this._model.selectionEnd[1] || this.refresh(!0)) : this.refresh(!0)
            }, e.prototype._dragScroll = function() {
                this._dragScrollAmount && (this._terminal.scrollLines(this._dragScrollAmount, !1), this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._terminal.cols), this._model.selectionEnd[1] = Math.min(this._terminal.buffer.ydisp + this._terminal.rows, this._terminal.buffer.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = this._terminal.buffer.ydisp), this.refresh())
            }, e.prototype._onMouseUp = function(e) {
                var t = e.timeStamp - this._mouseDownTimeStamp;
                this._removeMouseDownListeners(), this.selectionText.length <= 1 && t < 500 ? new s.AltClickHandler(e, this._terminal).move() : this.hasSelection && this._onSelectionChange.fire()
            }, e.prototype._onBufferActivate = function(e) {
                var t = this;
                this.clearSelection(), this._trimListener && this._trimListener.dispose(), this._trimListener = e.activeBuffer.lines.onTrim(function(e) {
                    return t._onTrim(e)
                })
            }, e.prototype._convertViewportColToCharacterIndex = function(e, t) {
                for (var r = t[0], i = 0; t[0] >= i; i++) {
                    var n = e.loadCell(i, this._workCell).getChars().length;
                    0 === this._workCell.getWidth() ? r-- : n > 1 && t[0] !== i && (r += n - 1)
                }
                return r
            }, e.prototype.setSelection = function(e, t, r) {
                this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e, t], this._model.selectionStartLength = r, this.refresh()
            }, e.prototype._getWordAt = function(e, t, r, i) {
                if (void 0 === r && (r = !0), void 0 === i && (i = !0), e[0] >= this._terminal.cols) return null;
                var n = this._buffer.lines.get(e[1]);
                if (!n) return null;
                var o = this._buffer.translateBufferLineToString(e[1], !1),
                    s = this._convertViewportColToCharacterIndex(n, e),
                    a = s,
                    l = e[0] - s,
                    h = 0,
                    c = 0,
                    u = 0,
                    f = 0;
                if (" " === o.charAt(s)) {
                    for (; s > 0 && " " === o.charAt(s - 1);) s--;
                    for (; a < o.length && " " === o.charAt(a + 1);) a++
                } else {
                    var _ = e[0],
                        d = e[0];
                    0 === n.getWidth(_) && (h++, _--), 2 === n.getWidth(d) && (c++, d++);
                    var p = n.getString(d).length;
                    for (p > 1 && (f += p - 1, a += p - 1); _ > 0 && s > 0 && !this._isCharWordSeparator(n.loadCell(_ - 1, this._workCell));) {
                        n.loadCell(_ - 1, this._workCell);
                        var m = this._workCell.getChars().length;
                        0 === this._workCell.getWidth() ? (h++, _--) : m > 1 && (u += m - 1, s -= m - 1), s--, _--
                    }
                    for (; d < n.length && a + 1 < o.length && !this._isCharWordSeparator(n.loadCell(d + 1, this._workCell));) {
                        n.loadCell(d + 1, this._workCell);
                        var y = this._workCell.getChars().length;
                        2 === this._workCell.getWidth() ? (c++, d++) : y > 1 && (f += y - 1, a += y - 1), a++, d++
                    }
                }
                a++;
                var g = s + l - h + u,
                    v = Math.min(this._terminal.cols, a - s + h + c - u - f);
                if (!t && "" === o.slice(s, a).trim()) return null;
                if (r && 0 === g && 32 !== n.getCodePoint(0)) {
                    var b = this._buffer.lines.get(e[1] - 1);
                    if (b && n.isWrapped && 32 !== b.getCodePoint(this._terminal.cols - 1)) {
                        var C = this._getWordAt([this._terminal.cols - 1, e[1] - 1], !1, !0, !1);
                        if (C) {
                            var w = this._terminal.cols - C.start;
                            g -= w, v += w
                        }
                    }
                }
                if (i && g + v === this._terminal.cols && 32 !== n.getCodePoint(this._terminal.cols - 1)) {
                    var S = this._buffer.lines.get(e[1] + 1);
                    if (S && S.isWrapped && 32 !== S.getCodePoint(0)) {
                        var E = this._getWordAt([0, e[1] + 1], !1, !1, !0);
                        E && (v += E.length)
                    }
                }
                return {
                    start: g,
                    length: v
                }
            }, e.prototype._selectWordAt = function(e, t) {
                var r = this._getWordAt(e, t);
                if (r) {
                    for (; r.start < 0;) r.start += this._terminal.cols, e[1]--;
                    this._model.selectionStart = [r.start, e[1]], this._model.selectionStartLength = r.length
                }
            }, e.prototype._selectToWordAt = function(e) {
                var t = this._getWordAt(e, !0);
                if (t) {
                    for (var r = e[1]; t.start < 0;) t.start += this._terminal.cols, r--;
                    if (!this._model.areSelectionValuesReversed())
                        for (; t.start + t.length > this._terminal.cols;) t.length -= this._terminal.cols, r++;
                    this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t.start : t.start + t.length, r]
                }
            }, e.prototype._isCharWordSeparator = function(e) {
                return 0 !== e.getWidth() && " ()[]{}'\"".indexOf(e.getChars()) >= 0
            }, e.prototype._selectLineAt = function(e) {
                var t = this._buffer.getWrappedRangeForLine(e);
                this._model.selectionStart = [0, t.first], this._model.selectionEnd = [this._terminal.cols, t.last], this._model.selectionStartLength = 0
            }, e
        }();
    t.SelectionManager = u
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e) {
            this._terminal = e, this.clearSelection()
        }
        return e.prototype.clearSelection = function() {
            this.selectionStart = null, this.selectionEnd = null, this.isSelectAllActive = !1, this.selectionStartLength = 0
        }, Object.defineProperty(e.prototype, "finalSelectionStart", {
            get: function() {
                return this.isSelectAllActive ? [0, 0] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "finalSelectionEnd", {
            get: function() {
                if (this.isSelectAllActive) return [this._terminal.cols, this._terminal.buffer.ybase + this._terminal.rows - 1];
                if (!this.selectionStart) return null;
                if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                    var e = this.selectionStart[0] + this.selectionStartLength;
                    return e > this._terminal.cols ? [e % this._terminal.cols, this.selectionStart[1] + Math.floor(e / this._terminal.cols)] : [e, this.selectionStart[1]]
                }
                return this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1] ? [Math.max(this.selectionStart[0] + this.selectionStartLength, this.selectionEnd[0]), this.selectionEnd[1]] : this.selectionEnd
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.areSelectionValuesReversed = function() {
            var e = this.selectionStart,
                t = this.selectionEnd;
            return !(!e || !t) && (e[1] > t[1] || e[1] === t[1] && e[0] > t[0])
        }, e.prototype.onTrim = function(e) {
            return this.selectionStart && (this.selectionStart[1] -= e), this.selectionEnd && (this.selectionEnd[1] -= e), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), !0) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), !1)
        }, e
    }();
    t.SelectionModel = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(12),
        n = function() {
            function e(e, t) {
                var r;
                this._mouseEvent = e, this._terminal = t, this._lines = this._terminal.buffer.lines, this._startCol = this._terminal.buffer.x, this._startRow = this._terminal.buffer.y;
                var i = this._terminal.mouseHelper.getCoords(this._mouseEvent, this._terminal.element, this._terminal.charMeasure, this._terminal.cols, this._terminal.rows, !1);
                i && (r = i.map(function(e) {
                    return e - 1
                }), this._endCol = r[0], this._endRow = r[1])
            }
            return e.prototype.move = function() {
                this._mouseEvent.altKey && void 0 !== this._endCol && void 0 !== this._endRow && this._terminal.handler(this._arrowSequences())
            }, e.prototype._arrowSequences = function() {
                return this._terminal.buffer.hasScrollback ? this._moveHorizontallyOnly() : this._resetStartingRow() + this._moveToRequestedRow() + this._moveToRequestedCol()
            }, e.prototype._resetStartingRow = function() {
                return 0 === this._moveToRequestedRow().length ? "" : o(this._bufferLine(this._startCol, this._startRow, this._startCol, this._startRow - this._wrappedRowsForRow(this._startRow), !1).length, this._sequence("D"))
            }, e.prototype._moveToRequestedRow = function() {
                var e = this._startRow - this._wrappedRowsForRow(this._startRow),
                    t = this._endRow - this._wrappedRowsForRow(this._endRow);
                return o(Math.abs(e - t) - this._wrappedRowsCount(), this._sequence(this._verticalDirection()))
            }, e.prototype._moveToRequestedCol = function() {
                var e;
                e = this._moveToRequestedRow().length > 0 ? this._endRow - this._wrappedRowsForRow(this._endRow) : this._startRow;
                var t = this._endRow,
                    r = this._horizontalDirection();
                return o(this._bufferLine(this._startCol, e, this._endCol, t, "C" === r).length, this._sequence(r))
            }, e.prototype._moveHorizontallyOnly = function() {
                var e = this._horizontalDirection();
                return o(Math.abs(this._startCol - this._endCol), this._sequence(e))
            }, e.prototype._wrappedRowsCount = function() {
                for (var e = 0, t = this._startRow - this._wrappedRowsForRow(this._startRow), r = this._endRow - this._wrappedRowsForRow(this._endRow), i = 0; i < Math.abs(t - r); i++) {
                    var n = "A" === this._verticalDirection() ? -1 : 1;
                    this._lines.get(t + n * i).isWrapped && e++
                }
                return e
            }, e.prototype._wrappedRowsForRow = function(e) {
                for (var t = 0, r = this._lines.get(e).isWrapped; r && e >= 0 && e < this._terminal.rows;) t++, e--, r = this._lines.get(e).isWrapped;
                return t
            }, e.prototype._horizontalDirection = function() {
                var e;
                return e = this._moveToRequestedRow().length > 0 ? this._endRow - this._wrappedRowsForRow(this._endRow) : this._startRow, this._startCol < this._endCol && e <= this._endRow || this._startCol >= this._endCol && e < this._endRow ? "C" : "D"
            }, e.prototype._verticalDirection = function() {
                return this._startRow > this._endRow ? "A" : "B"
            }, e.prototype._bufferLine = function(e, t, r, i, n) {
                for (var o = e, s = t, a = ""; o !== r || s !== i;) o += n ? 1 : -1, n && o > this._terminal.cols - 1 ? (a += this._terminal.buffer.translateBufferLineToString(s, !1, e, o), o = 0, e = 0, s++) : !n && o < 0 && (a += this._terminal.buffer.translateBufferLineToString(s, !1, 0, e + 1), e = o = this._terminal.cols - 1, s--);
                return a + this._terminal.buffer.translateBufferLineToString(s, !1, e, o)
            }, e.prototype._sequence = function(e) {
                var t = this._terminal.applicationCursor ? "O" : "[";
                return i.C0.ESC + t + e
            }, e
        }();

    function o(e, t) {
        e = Math.floor(e);
        for (var r = "", i = 0; i < e; i++) r += t;
        return r
    }
    t.AltClickHandler = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(4),
        n = function() {
            function e(e, t) {
                this._onCharSizeChanged = new i.EventEmitter2, this._document = e, this._parentElement = t, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W", this._measureElement.setAttribute("aria-hidden", "true"), this._parentElement.appendChild(this._measureElement)
            }
            return Object.defineProperty(e.prototype, "onCharSizeChanged", {
                get: function() {
                    return this._onCharSizeChanged.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this._width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this._height
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.measure = function(e) {
                this._measureElement.style.fontFamily = e.fontFamily, this._measureElement.style.fontSize = e.fontSize + "px";
                var t = this._measureElement.getBoundingClientRect();
                if (0 !== t.width && 0 !== t.height) {
                    var r = Math.ceil(t.height);
                    this._width === t.width && this._height === r || (this._width = t.width, this._height = r, this._onCharSizeChanged.fire())
                }
            }, e
        }();
    t.CharMeasure = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DEFAULT_BELL_SOUND = "data:audio/wav;base64,UklGRigBAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQBAADpAFgCwAMlBZoG/wdmCcoKRAypDQ8PbRDBEQQTOxRtFYcWlBePGIUZXhoiG88bcBz7HHIdzh0WHlMeZx51HmkeUx4WHs8dah0AHXwc3hs9G4saxRnyGBIYGBcQFv8U4RPAEoYRQBACD70NWwwHC6gJOwjWBloF7gOBAhABkf8b/qv8R/ve+Xf4Ife79W/0JfPZ8Z/wde9N7ijtE+wU6xvqM+lb6H7nw+YX5mrlxuQz5Mzje+Ma49fioeKD4nXiYeJy4pHitOL04j/jn+MN5IPkFOWs5U3mDefM55/ogOl36m7rdOyE7abuyu8D8Unyj/Pg9D/2qfcb+Yn6/vuK/Qj/lAAlAg==";
    var i = function() {
        function e(e) {
            this._terminal = e
        }
        return Object.defineProperty(e, "audioContext", {
            get: function() {
                if (!e._audioContext) {
                    var t = window.AudioContext || window.webkitAudioContext;
                    if (!t) return console.warn("Web Audio API is not supported by this browser. Consider upgrading to the latest version"), null;
                    e._audioContext = new t
                }
                return e._audioContext
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.playBellSound = function() {
            var t = e.audioContext;
            if (t) {
                var r = t.createBufferSource();
                t.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._terminal.options.bellSound)), function(e) {
                    r.buffer = e, r.connect(t.destination), r.start(0)
                })
            }
        }, e.prototype._base64ToArrayBuffer = function(e) {
            for (var t = window.atob(e), r = t.length, i = new Uint8Array(r), n = 0; n < r; n++) i[n] = t.charCodeAt(n);
            return i.buffer
        }, e.prototype._removeMimeType = function(e) {
            return e.split(",")[1]
        }, e
    }();
    t.SoundManager = i
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(20),
        s = r(8),
        a = r(35),
        l = r(7),
        h = r(2),
        c = r(36),
        u = function(e) {
            function t(t, r) {
                var i = e.call(this) || this;
                i._terminal = t, i._dimensions = r, i._liveRegionLineCount = 0, i._charsToConsume = [], i._charsToAnnounce = "", i._accessibilityTreeRoot = document.createElement("div"), i._accessibilityTreeRoot.classList.add("xterm-accessibility"), i._rowContainer = document.createElement("div"), i._rowContainer.classList.add("xterm-accessibility-tree"), i._rowElements = [];
                for (var n = 0; n < i._terminal.rows; n++) i._rowElements[n] = i._createAccessibilityTreeNode(), i._rowContainer.appendChild(i._rowElements[n]);
                return i._topBoundaryFocusListener = function(e) {
                    return i._onBoundaryFocus(e, 0)
                }, i._bottomBoundaryFocusListener = function(e) {
                    return i._onBoundaryFocus(e, 1)
                }, i._rowElements[0].addEventListener("focus", i._topBoundaryFocusListener), i._rowElements[i._rowElements.length - 1].addEventListener("focus", i._bottomBoundaryFocusListener), i._refreshRowsDimensions(), i._accessibilityTreeRoot.appendChild(i._rowContainer), i._renderRowsDebouncer = new a.RenderDebouncer(i._renderRows.bind(i)), i._refreshRows(), i._liveRegion = document.createElement("div"), i._liveRegion.classList.add("live-region"), i._liveRegion.setAttribute("aria-live", "assertive"), i._accessibilityTreeRoot.appendChild(i._liveRegion), i._terminal.element.insertAdjacentElement("afterbegin", i._accessibilityTreeRoot), i.register(i._renderRowsDebouncer), i.register(i._terminal.onResize(function(e) {
                    return i._onResize(e.rows)
                })), i.register(i._terminal.onRender(function(e) {
                    return i._refreshRows(e.start, e.end)
                })), i.register(i._terminal.onScroll(function() {
                    return i._refreshRows()
                })), i.register(i._terminal.addDisposableListener("a11y.char", function(e) {
                    return i._onChar(e)
                })), i.register(i._terminal.onLineFeed(function() {
                    return i._onChar("\n")
                })), i.register(i._terminal.addDisposableListener("a11y.tab", function(e) {
                    return i._onTab(e)
                })), i.register(i._terminal.onKey(function(e) {
                    return i._onKey(e.key)
                })), i.register(i._terminal.addDisposableListener("blur", function() {
                    return i._clearLiveRegion()
                })), i._screenDprMonitor = new c.ScreenDprMonitor, i.register(i._screenDprMonitor), i._screenDprMonitor.setListener(function() {
                    return i._refreshRowsDimensions()
                }), i.register(l.addDisposableDomListener(window, "resize", function() {
                    return i._refreshRowsDimensions()
                })), i
            }
            return n(t, e), t.prototype.dispose = function() {
                e.prototype.dispose.call(this), this._terminal.element.removeChild(this._accessibilityTreeRoot), this._rowElements.length = 0
            }, t.prototype._onBoundaryFocus = function(e, t) {
                var r = e.target,
                    i = this._rowElements[0 === t ? 1 : this._rowElements.length - 2];
                if (r.getAttribute("aria-posinset") !== (0 === t ? "1" : "" + this._terminal.buffer.lines.length) && e.relatedTarget === i) {
                    var n, o;
                    if (0 === t ? (n = r, o = this._rowElements.pop(), this._rowContainer.removeChild(o)) : (n = this._rowElements.shift(), o = r, this._rowContainer.removeChild(n)), n.removeEventListener("focus", this._topBoundaryFocusListener), o.removeEventListener("focus", this._bottomBoundaryFocusListener), 0 === t) {
                        var s = this._createAccessibilityTreeNode();
                        this._rowElements.unshift(s), this._rowContainer.insertAdjacentElement("afterbegin", s)
                    } else s = this._createAccessibilityTreeNode(), this._rowElements.push(s), this._rowContainer.appendChild(s);
                    this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(0 === t ? -1 : 1), this._rowElements[0 === t ? 1 : this._rowElements.length - 2].focus(), e.preventDefault(), e.stopImmediatePropagation()
                }
            }, t.prototype._onResize = function(e) {
                this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
                for (var t = this._rowContainer.children.length; t < this._terminal.rows; t++) this._rowElements[t] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[t]);
                for (; this._rowElements.length > e;) this._rowContainer.removeChild(this._rowElements.pop());
                this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions()
            }, t.prototype._createAccessibilityTreeNode = function() {
                var e = document.createElement("div");
                return e.setAttribute("role", "listitem"), e.tabIndex = -1, this._refreshRowDimensions(e), e
            }, t.prototype._onTab = function(e) {
                for (var t = 0; t < e; t++) this._onChar(" ")
            }, t.prototype._onChar = function(e) {
                var t = this;
                this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e && (this._charsToAnnounce += e) : this._charsToAnnounce += e, "\n" === e && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += o.tooMuchOutput)), s.isMac && this._liveRegion.textContent && this._liveRegion.textContent.length > 0 && !this._liveRegion.parentNode && setTimeout(function() {
                    t._accessibilityTreeRoot.appendChild(t._liveRegion)
                }, 0))
            }, t.prototype._clearLiveRegion = function() {
                this._liveRegion.textContent = "", this._liveRegionLineCount = 0, s.isMac && this._liveRegion.parentNode && this._accessibilityTreeRoot.removeChild(this._liveRegion)
            }, t.prototype._onKey = function(e) {
                this._clearLiveRegion(), this._charsToConsume.push(e)
            }, t.prototype._refreshRows = function(e, t) {
                this._renderRowsDebouncer.refresh(e, t, this._terminal.rows)
            }, t.prototype._renderRows = function(e, t) {
                for (var r = this._terminal.buffer, i = r.lines.length.toString(), n = e; n <= t; n++) {
                    var s = r.translateBufferLineToString(r.ydisp + n, !0),
                        a = (r.ydisp + n + 1).toString(),
                        l = this._rowElements[n];
                    l && (l.textContent = 0 === s.length ? o.blankLine : s, l.setAttribute("aria-posinset", a), l.setAttribute("aria-setsize", i))
                }
                this._announceCharacters()
            }, t.prototype._refreshRowsDimensions = function() {
                if (this._dimensions.actualCellHeight) {
                    this._rowElements.length !== this._terminal.rows && this._onResize(this._terminal.rows);
                    for (var e = 0; e < this._terminal.rows; e++) this._refreshRowDimensions(this._rowElements[e])
                }
            }, t.prototype.setDimensions = function(e) {
                this._dimensions = e, this._refreshRowsDimensions()
            }, t.prototype._refreshRowDimensions = function(e) {
                e.style.height = this._dimensions.actualCellHeight + "px"
            }, t.prototype._announceCharacters = function() {
                0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "")
            }, t
        }(h.Disposable);
    t.AccessibilityManager = u
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(79),
        s = r(6),
        a = r(2),
        l = "xterm-dom-renderer-owner-",
        h = "xterm-rows",
        c = "xterm-selection",
        u = 1,
        f = function(e) {
            function t(t, r) {
                var i = e.call(this) || this;
                return i._terminal = t, i._colors = r, i._terminalClass = u++, i._rowElements = [], i._rowContainer = document.createElement("div"), i._rowContainer.classList.add(h), i._rowContainer.style.lineHeight = "normal", i._rowContainer.setAttribute("aria-hidden", "true"), i._refreshRowElements(i._terminal.cols, i._terminal.rows), i._selectionContainer = document.createElement("div"), i._selectionContainer.classList.add(c), i._selectionContainer.setAttribute("aria-hidden", "true"), i.dimensions = {
                    scaledCharWidth: null,
                    scaledCharHeight: null,
                    scaledCellWidth: null,
                    scaledCellHeight: null,
                    scaledCharLeft: null,
                    scaledCharTop: null,
                    scaledCanvasWidth: null,
                    scaledCanvasHeight: null,
                    canvasWidth: null,
                    canvasHeight: null,
                    actualCellWidth: null,
                    actualCellHeight: null
                }, i._updateDimensions(), i._injectCss(), i._rowFactory = new o.DomRendererRowFactory(t.options, document), i._terminal.element.classList.add(l + i._terminalClass), i._terminal.screenElement.appendChild(i._rowContainer), i._terminal.screenElement.appendChild(i._selectionContainer), i._terminal.linkifier.onLinkHover(function(e) {
                    return i._onLinkHover(e)
                }), i._terminal.linkifier.onLinkLeave(function(e) {
                    return i._onLinkLeave(e)
                }), i
            }
            return n(t, e), t.prototype.dispose = function() {
                this._terminal.element.classList.remove(l + this._terminalClass), this._terminal.screenElement.removeChild(this._rowContainer), this._terminal.screenElement.removeChild(this._selectionContainer), this._terminal.screenElement.removeChild(this._themeStyleElement), this._terminal.screenElement.removeChild(this._dimensionsStyleElement), e.prototype.dispose.call(this)
            }, t.prototype._updateDimensions = function() {
                var e = this;
                this.dimensions.scaledCharWidth = this._terminal.charMeasure.width * window.devicePixelRatio, this.dimensions.scaledCharHeight = Math.ceil(this._terminal.charMeasure.height * window.devicePixelRatio), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._terminal.options.letterSpacing), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._terminal.options.lineHeight), this.dimensions.scaledCharLeft = 0, this.dimensions.scaledCharTop = 0, this.dimensions.scaledCanvasWidth = this.dimensions.scaledCellWidth * this._terminal.cols, this.dimensions.scaledCanvasHeight = this.dimensions.scaledCellHeight * this._terminal.rows, this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._terminal.cols, this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._terminal.rows, this._rowElements.forEach(function(t) {
                    t.style.width = e.dimensions.canvasWidth + "px", t.style.height = e.dimensions.actualCellHeight + "px", t.style.lineHeight = e.dimensions.actualCellHeight + "px", t.style.overflow = "hidden"
                }), this._dimensionsStyleElement || (this._dimensionsStyleElement = document.createElement("style"), this._terminal.screenElement.appendChild(this._dimensionsStyleElement));
                var t = this._terminalSelector + " ." + h + " span { display: inline-block; height: 100%; vertical-align: top; width: " + this.dimensions.actualCellWidth + "px}";
                this._dimensionsStyleElement.innerHTML = t, this._selectionContainer.style.height = this._terminal._viewportElement.style.height, this._terminal.screenElement.style.width = this.dimensions.canvasWidth + "px", this._terminal.screenElement.style.height = this.dimensions.canvasHeight + "px"
            }, t.prototype.setColors = function(e) {
                this._colors = e, this._injectCss()
            }, t.prototype._injectCss = function() {
                var e = this;
                this._themeStyleElement || (this._themeStyleElement = document.createElement("style"), this._terminal.screenElement.appendChild(this._themeStyleElement));
                var t = this._terminalSelector + " ." + h + " { color: " + this._colors.foreground.css + "; background-color: " + this._colors.background.css + "; font-family: " + this._terminal.options.fontFamily + "; font-size: " + this._terminal.options.fontSize + "px;}";
                t += this._terminalSelector + " span:not(." + o.BOLD_CLASS + ") { font-weight: " + this._terminal.options.fontWeight + ";}" + this._terminalSelector + " span." + o.BOLD_CLASS + " { font-weight: " + this._terminal.options.fontWeightBold + ";}" + this._terminalSelector + " span." + o.ITALIC_CLASS + " { font-style: italic;}", t += "@keyframes blink { 0% { opacity: 1.0; } 50% { opacity: 0.0; } 100% { opacity: 1.0; }}", t += this._terminalSelector + " ." + h + ":not(.xterm-focus) ." + o.CURSOR_CLASS + " { outline: 1px solid " + this._colors.cursor.css + "; outline-offset: -1px;}" + this._terminalSelector + " ." + h + ".xterm-focus ." + o.CURSOR_CLASS + "." + o.CURSOR_BLINK_CLASS + " { animation: blink 1s step-end infinite;}" + this._terminalSelector + " ." + h + ".xterm-focus ." + o.CURSOR_CLASS + "." + o.CURSOR_STYLE_BLOCK_CLASS + " { background-color: " + this._colors.cursor.css + "; color: " + this._colors.cursorAccent.css + ";}" + this._terminalSelector + " ." + h + ".xterm-focus ." + o.CURSOR_CLASS + "." + o.CURSOR_STYLE_BAR_CLASS + " { box-shadow: 1px 0 0 " + this._colors.cursor.css + " inset;}" + this._terminalSelector + " ." + h + ".xterm-focus ." + o.CURSOR_CLASS + "." + o.CURSOR_STYLE_UNDERLINE_CLASS + " { box-shadow: 0 -1px 0 " + this._colors.cursor.css + " inset;}", t += this._terminalSelector + " ." + c + " { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}" + this._terminalSelector + " ." + c + " div { position: absolute; background-color: " + this._colors.selection.css + ";}", this._colors.ansi.forEach(function(r, i) {
                    t += e._terminalSelector + " .xterm-fg-" + i + " { color: " + r.css + "; }" + e._terminalSelector + " .xterm-bg-" + i + " { background-color: " + r.css + "; }"
                }), t += this._terminalSelector + " .xterm-fg-" + s.INVERTED_DEFAULT_COLOR + " { color: " + this._colors.background.css + "; }" + this._terminalSelector + " .xterm-bg-" + s.INVERTED_DEFAULT_COLOR + " { background-color: " + this._colors.foreground.css + "; }", this._themeStyleElement.innerHTML = t
            }, t.prototype.onDevicePixelRatioChange = function() {
                this._updateDimensions()
            }, t.prototype._refreshRowElements = function(e, t) {
                for (var r = this._rowElements.length; r <= t; r++) {
                    var i = document.createElement("div");
                    this._rowContainer.appendChild(i), this._rowElements.push(i)
                }
                for (; this._rowElements.length > t;) this._rowContainer.removeChild(this._rowElements.pop())
            }, t.prototype.onResize = function(e, t) {
                this._refreshRowElements(e, t), this._updateDimensions()
            }, t.prototype.onCharSizeChanged = function() {
                this._updateDimensions()
            }, t.prototype.onBlur = function() {
                this._rowContainer.classList.remove("xterm-focus")
            }, t.prototype.onFocus = function() {
                this._rowContainer.classList.add("xterm-focus")
            }, t.prototype.onSelectionChanged = function(e, t, r) {
                for (; this._selectionContainer.children.length;) this._selectionContainer.removeChild(this._selectionContainer.children[0]);
                if (e && t) {
                    var i = e[1] - this._terminal.buffer.ydisp,
                        n = t[1] - this._terminal.buffer.ydisp,
                        o = Math.max(i, 0),
                        s = Math.min(n, this._terminal.rows - 1);
                    if (!(o >= this._terminal.rows || s < 0)) {
                        var a = document.createDocumentFragment();
                        if (r) a.appendChild(this._createSelectionElement(o, e[0], t[0], s - o + 1));
                        else {
                            var l = i === o ? e[0] : 0,
                                h = o === s ? t[0] : this._terminal.cols;
                            a.appendChild(this._createSelectionElement(o, l, h));
                            var c = s - o - 1;
                            if (a.appendChild(this._createSelectionElement(o + 1, 0, this._terminal.cols, c)), o !== s) {
                                var u = n === s ? t[0] : this._terminal.cols;
                                a.appendChild(this._createSelectionElement(s, 0, u))
                            }
                        }
                        this._selectionContainer.appendChild(a)
                    }
                }
            }, t.prototype._createSelectionElement = function(e, t, r, i) {
                void 0 === i && (i = 1);
                var n = document.createElement("div");
                return n.style.height = i * this.dimensions.actualCellHeight + "px", n.style.top = e * this.dimensions.actualCellHeight + "px", n.style.left = t * this.dimensions.actualCellWidth + "px", n.style.width = this.dimensions.actualCellWidth * (r - t) + "px", n
            }, t.prototype.onCursorMove = function() {}, t.prototype.onOptionsChanged = function() {
                this._updateDimensions(), this._injectCss(), this._terminal.refresh(0, this._terminal.rows - 1)
            }, t.prototype.clear = function() {
                this._rowElements.forEach(function(e) {
                    return e.innerHTML = ""
                })
            }, t.prototype.renderRows = function(e, t) {
                for (var r = this._terminal, i = r.buffer.ybase + r.buffer.y, n = this._terminal.buffer.x, o = this._terminal.options.cursorBlink, s = e; s <= t; s++) {
                    var a = this._rowElements[s];
                    a.innerHTML = "";
                    var l = s + r.buffer.ydisp,
                        h = r.buffer.lines.get(l),
                        c = r.options.cursorStyle;
                    a.appendChild(this._rowFactory.createRow(h, l === i, c, n, o, this.dimensions.actualCellWidth, r.cols))
                }
            }, Object.defineProperty(t.prototype, "_terminalSelector", {
                get: function() {
                    return "." + l + this._terminalClass
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.registerCharacterJoiner = function(e) {
                return -1
            }, t.prototype.deregisterCharacterJoiner = function(e) {
                return !1
            }, t.prototype._onLinkHover = function(e) {
                this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !0)
            }, t.prototype._onLinkLeave = function(e) {
                this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !1)
            }, t.prototype._setCellUnderline = function(e, t, r, i, n, o) {
                for (; e !== t || r !== i;) {
                    var s = this._rowElements[r];
                    if (!s) return;
                    var a = s.children[e];
                    a && (a.style.textDecoration = o ? "underline" : "none"), ++e >= n && (e = 0, r++)
                }
            }, t
        }(a.Disposable);
    t.DomRenderer = f
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(6),
        n = r(3);
    t.BOLD_CLASS = "xterm-bold", t.DIM_CLASS = "xterm-dim", t.ITALIC_CLASS = "xterm-italic", t.UNDERLINE_CLASS = "xterm-underline", t.CURSOR_CLASS = "xterm-cursor", t.CURSOR_BLINK_CLASS = "xterm-cursor-blink", t.CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block", t.CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar", t.CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline";
    var o = function() {
        function e(e, t) {
            this._terminalOptions = e, this._document = t, this._workCell = new n.CellData
        }
        return e.prototype.createRow = function(e, r, o, s, a, l, h) {
            for (var c = this._document.createDocumentFragment(), u = 0, f = Math.min(e.length, h) - 1; f >= 0; f--)
                if (e.loadCell(f, this._workCell).getCode() !== n.NULL_CELL_CODE || r && f === s) {
                    u = f + 1;
                    break
                } for (f = 0; f < u; f++) {
                e.loadCell(f, this._workCell);
                var _ = this._workCell.getWidth();
                if (0 !== _) {
                    var d = this._document.createElement("span");
                    if (_ > 1 && (d.style.width = l * _ + "px"), r && f === s) switch (d.classList.add(t.CURSOR_CLASS), a && d.classList.add(t.CURSOR_BLINK_CLASS), o) {
                        case "bar":
                            d.classList.add(t.CURSOR_STYLE_BAR_CLASS);
                            break;
                        case "underline":
                            d.classList.add(t.CURSOR_STYLE_UNDERLINE_CLASS);
                            break;
                        default:
                            d.classList.add(t.CURSOR_STYLE_BLOCK_CLASS)
                    }
                    this._workCell.isBold() && this._terminalOptions.enableBold && d.classList.add(t.BOLD_CLASS), this._workCell.isItalic() && d.classList.add(t.ITALIC_CLASS), this._workCell.isDim() && d.classList.add(t.DIM_CLASS), this._workCell.isUnderline() && d.classList.add(t.UNDERLINE_CLASS), d.textContent = this._workCell.getChars() || n.WHITESPACE_CELL_CHAR;
                    var p = this._workCell.isInverse();
                    if (this._workCell.isFgRGB()) {
                        var m = d.getAttribute("style") || "";
                        m += (p ? "background-" : "") + "color:rgb(" + n.AttributeData.toColorRGB(this._workCell.getFgColor()).join(",") + ");", d.setAttribute("style", m)
                    } else if (this._workCell.isFgPalette()) {
                        var y = this._workCell.getFgColor();
                        this._workCell.isBold() && y < 8 && !p && this._terminalOptions.enableBold && this._terminalOptions.drawBoldTextInBrightColors && (y += 8), d.classList.add("xterm-" + (p ? "b" : "f") + "g-" + y)
                    } else p && d.classList.add("xterm-bg-" + i.INVERTED_DEFAULT_COLOR);
                    this._workCell.isBgRGB() ? (m = d.getAttribute("style") || "", m += (p ? "" : "background-") + "color:rgb(" + n.AttributeData.toColorRGB(this._workCell.getBgColor()).join(",") + ");", d.setAttribute("style", m)) : this._workCell.isBgPalette() ? d.classList.add("xterm-" + (p ? "f" : "b") + "g-" + this._workCell.getBgColor()) : p && d.classList.add("xterm-fg-" + i.INVERTED_DEFAULT_COLOR), c.appendChild(d)
                }
            }
            return c
        }, e
    }();
    t.DomRendererRowFactory = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(12),
        n = {
            48: ["0", ")"],
            49: ["1", "!"],
            50: ["2", "@"],
            51: ["3", "#"],
            52: ["4", "$"],
            53: ["5", "%"],
            54: ["6", "^"],
            55: ["7", "&"],
            56: ["8", "*"],
            57: ["9", "("],
            186: [";", ":"],
            187: ["=", "+"],
            188: [",", "<"],
            189: ["-", "_"],
            190: [".", ">"],
            191: ["/", "?"],
            192: ["`", "~"],
            219: ["[", "{"],
            220: ["\\", "|"],
            221: ["]", "}"],
            222: ["'", '"']
        };
    t.evaluateKeyboardEvent = function(e, t, r, o) {
        var s = {
                type: 0,
                cancel: !1,
                key: void 0
            },
            a = (e.shiftKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.ctrlKey ? 4 : 0) | (e.metaKey ? 8 : 0);
        switch (e.keyCode) {
            case 0:
                "UIKeyInputUpArrow" === e.key ? s.key = t ? i.C0.ESC + "OA" : i.C0.ESC + "[A" : "UIKeyInputLeftArrow" === e.key ? s.key = t ? i.C0.ESC + "OD" : i.C0.ESC + "[D" : "UIKeyInputRightArrow" === e.key ? s.key = t ? i.C0.ESC + "OC" : i.C0.ESC + "[C" : "UIKeyInputDownArrow" === e.key && (s.key = t ? i.C0.ESC + "OB" : i.C0.ESC + "[B");
                break;
            case 8:
                if (e.shiftKey) {
                    s.key = i.C0.BS;
                    break
                }
                if (e.altKey) {
                    s.key = i.C0.ESC + i.C0.DEL;
                    break
                }
                s.key = i.C0.DEL;
                break;
            case 9:
                if (e.shiftKey) {
                    s.key = i.C0.ESC + "[Z";
                    break
                }
                s.key = i.C0.HT, s.cancel = !0;
                break;
            case 13:
                s.key = i.C0.CR, s.cancel = !0;
                break;
            case 27:
                s.key = i.C0.ESC, s.cancel = !0;
                break;
            case 37:
                a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "D", s.key === i.C0.ESC + "[1;3D" && (s.key = r ? i.C0.ESC + "b" : i.C0.ESC + "[1;5D")) : s.key = t ? i.C0.ESC + "OD" : i.C0.ESC + "[D";
                break;
            case 39:
                a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "C", s.key === i.C0.ESC + "[1;3C" && (s.key = r ? i.C0.ESC + "f" : i.C0.ESC + "[1;5C")) : s.key = t ? i.C0.ESC + "OC" : i.C0.ESC + "[C";
                break;
            case 38:
                a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "A", s.key === i.C0.ESC + "[1;3A" && (s.key = i.C0.ESC + "[1;5A")) : s.key = t ? i.C0.ESC + "OA" : i.C0.ESC + "[A";
                break;
            case 40:
                a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "B", s.key === i.C0.ESC + "[1;3B" && (s.key = i.C0.ESC + "[1;5B")) : s.key = t ? i.C0.ESC + "OB" : i.C0.ESC + "[B";
                break;
            case 45:
                e.shiftKey || e.ctrlKey || (s.key = i.C0.ESC + "[2~");
                break;
            case 46:
                s.key = a ? i.C0.ESC + "[3;" + (a + 1) + "~" : i.C0.ESC + "[3~";
                break;
            case 36:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "H" : t ? i.C0.ESC + "OH" : i.C0.ESC + "[H";
                break;
            case 35:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "F" : t ? i.C0.ESC + "OF" : i.C0.ESC + "[F";
                break;
            case 33:
                e.shiftKey ? s.type = 2 : s.key = i.C0.ESC + "[5~";
                break;
            case 34:
                e.shiftKey ? s.type = 3 : s.key = i.C0.ESC + "[6~";
                break;
            case 112:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "P" : i.C0.ESC + "OP";
                break;
            case 113:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "Q" : i.C0.ESC + "OQ";
                break;
            case 114:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "R" : i.C0.ESC + "OR";
                break;
            case 115:
                s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "S" : i.C0.ESC + "OS";
                break;
            case 116:
                s.key = a ? i.C0.ESC + "[15;" + (a + 1) + "~" : i.C0.ESC + "[15~";
                break;
            case 117:
                s.key = a ? i.C0.ESC + "[17;" + (a + 1) + "~" : i.C0.ESC + "[17~";
                break;
            case 118:
                s.key = a ? i.C0.ESC + "[18;" + (a + 1) + "~" : i.C0.ESC + "[18~";
                break;
            case 119:
                s.key = a ? i.C0.ESC + "[19;" + (a + 1) + "~" : i.C0.ESC + "[19~";
                break;
            case 120:
                s.key = a ? i.C0.ESC + "[20;" + (a + 1) + "~" : i.C0.ESC + "[20~";
                break;
            case 121:
                s.key = a ? i.C0.ESC + "[21;" + (a + 1) + "~" : i.C0.ESC + "[21~";
                break;
            case 122:
                s.key = a ? i.C0.ESC + "[23;" + (a + 1) + "~" : i.C0.ESC + "[23~";
                break;
            case 123:
                s.key = a ? i.C0.ESC + "[24;" + (a + 1) + "~" : i.C0.ESC + "[24~";
                break;
            default:
                if (!e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
                    if (r && !o || !e.altKey || e.metaKey) r && !e.altKey && !e.ctrlKey && e.metaKey ? 65 === e.keyCode && (s.type = 1) : e.key && !e.ctrlKey && !e.altKey && !e.metaKey && e.keyCode >= 48 && 1 === e.key.length ? s.key = e.key : e.key && e.ctrlKey && "_" === e.key && (s.key = i.C0.US);
                    else {
                        var l = n[e.keyCode],
                            h = l && l[e.shiftKey ? 1 : 0];
                        if (h) s.key = i.C0.ESC + h;
                        else if (e.keyCode >= 65 && e.keyCode <= 90) {
                            var c = e.ctrlKey ? e.keyCode - 64 : e.keyCode + 32;
                            s.key = i.C0.ESC + String.fromCharCode(c)
                        }
                    }
                else e.keyCode >= 65 && e.keyCode <= 90 ? s.key = String.fromCharCode(e.keyCode - 64) : 32 === e.keyCode ? s.key = String.fromCharCode(0) : e.keyCode >= 51 && e.keyCode <= 55 ? s.key = String.fromCharCode(e.keyCode - 51 + 27) : 56 === e.keyCode ? s.key = String.fromCharCode(127) : 219 === e.keyCode ? s.key = String.fromCharCode(27) : 220 === e.keyCode ? s.key = String.fromCharCode(28) : 221 === e.keyCode && (s.key = String.fromCharCode(29))
        }
        return s
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.clone = function e(t, r) {
        if (void 0 === r && (r = 5), "object" != typeof t) return t;
        if (null === t) return null;
        var i = Array.isArray(t) ? [] : {};
        for (var n in t) i[n] = r <= 1 ? t[n] : e(t[n], r - 1);
        return i
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(3);
    t.applyWindowsMode = function(e) {
        return e.onLineFeed(function() {
            var t = e.buffer.lines.get(e.buffer.ybase + e.buffer.y - 1).get(e.cols - 1);
            e.buffer.lines.get(e.buffer.ybase + e.buffer.y).isWrapped = t[i.CHAR_DATA_CODE_INDEX] !== i.NULL_CELL_CODE && t[i.CHAR_DATA_CODE_INDEX] !== i.WHITESPACE_CELL_CODE
        })
    }
}, function(e, t, r) {
    "use strict";
    var i, n = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function(e, t) {
        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(35),
        s = r(4),
        a = r(2),
        l = r(36),
        h = r(7),
        c = function(e) {
            function t(t, r, i) {
                var n = e.call(this) || this;
                if (n._renderer = t, n._rowCount = r, n._isPaused = !1, n._needsFullRefresh = !1, n._canvasWidth = 0, n._canvasHeight = 0, n._onDimensionsChange = new s.EventEmitter2, n._onRender = new s.EventEmitter2, n._onRefreshRequest = new s.EventEmitter2, n._renderDebouncer = new o.RenderDebouncer(function(e, t) {
                        return n._renderRows(e, t)
                    }), n.register(n._renderDebouncer), n._screenDprMonitor = new l.ScreenDprMonitor, n._screenDprMonitor.setListener(function() {
                        return n._renderer.onDevicePixelRatioChange()
                    }), n.register(n._screenDprMonitor), n.register(h.addDisposableDomListener(window, "resize", function() {
                        return n._renderer.onDevicePixelRatioChange()
                    })), "IntersectionObserver" in window) {
                    var a = new IntersectionObserver(function(e) {
                        return n._onIntersectionChange(e[e.length - 1])
                    }, {
                        threshold: 0
                    });
                    a.observe(i), n.register({
                        dispose: function() {
                            return a.disconnect()
                        }
                    })
                }
                return n
            }
            return n(t, e), Object.defineProperty(t.prototype, "onDimensionsChange", {
                get: function() {
                    return this._onDimensionsChange.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onRender", {
                get: function() {
                    return this._onRender.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onRefreshRequest", {
                get: function() {
                    return this._onRefreshRequest.event
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "dimensions", {
                get: function() {
                    return this._renderer.dimensions
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._onIntersectionChange = function(e) {
                this._isPaused = 0 === e.intersectionRatio, !this._isPaused && this._needsFullRefresh && (this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = !1)
            }, t.prototype.refreshRows = function(e, t) {
                this._isPaused ? this._needsFullRefresh = !0 : this._renderDebouncer.refresh(e, t, this._rowCount)
            }, t.prototype._renderRows = function(e, t) {
                this._renderer.renderRows(e, t), this._onRender.fire({
                    start: e,
                    end: t
                })
            }, t.prototype.resize = function(e, t) {
                this._rowCount = t, this._fireOnCanvasResize()
            }, t.prototype.changeOptions = function() {
                this._renderer.onOptionsChanged(), this._fireOnCanvasResize()
            }, t.prototype._fireOnCanvasResize = function() {
                this._renderer.dimensions.canvasWidth === this._canvasWidth && this._renderer.dimensions.canvasHeight === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.dimensions)
            }, t.prototype.setRenderer = function(e) {
                this._renderer.dispose(), this._renderer = e
            }, t.prototype._fullRefresh = function() {
                this._isPaused ? this._needsFullRefresh = !0 : this.refreshRows(0, this._rowCount)
            }, t.prototype.setColors = function(e) {
                this._renderer.setColors(e), this._fullRefresh()
            }, t.prototype.onDevicePixelRatioChange = function() {
                this._renderer.onDevicePixelRatioChange()
            }, t.prototype.onResize = function(e, t) {
                this._renderer.onResize(e, t), this._fullRefresh()
            }, t.prototype.onCharSizeChanged = function() {
                this._renderer.onCharSizeChanged()
            }, t.prototype.onBlur = function() {
                this._renderer.onBlur()
            }, t.prototype.onFocus = function() {
                this._renderer.onFocus()
            }, t.prototype.onSelectionChanged = function(e, t, r) {
                this._renderer.onSelectionChanged(e, t, r)
            }, t.prototype.onCursorMove = function() {
                this._renderer.onCursorMove()
            }, t.prototype.onOptionsChanged = function() {
                this._renderer.onOptionsChanged()
            }, t.prototype.clear = function() {
                this._renderer.clear()
            }, t.prototype.registerCharacterJoiner = function(e) {
                return this._renderer.registerCharacterJoiner(e)
            }, t.prototype.deregisterCharacterJoiner = function(e) {
                return this._renderer.deregisterCharacterJoiner(e)
            }, t
        }(a.Disposable);
    t.RenderCoordinator = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            this._addons = []
        }
        return e.prototype.dispose = function() {
            for (var e = this._addons.length - 1; e >= 0; e--) this._addons[e].instance.dispose()
        }, e.prototype.loadAddon = function(e, t) {
            var r = this,
                i = {
                    instance: t,
                    dispose: t.dispose,
                    isDisposed: !1
                };
            this._addons.push(i), t.dispose = function() {
                return r._wrappedAddonDispose(i)
            }, t.activate(e)
        }, e.prototype._wrappedAddonDispose = function(e) {
            if (!e.isDisposed) {
                for (var t = -1, r = 0; r < this._addons.length; r++)
                    if (this._addons[r] === e) {
                        t = r;
                        break
                    } if (-1 === t) throw new Error("Could not dispose an addon that has not been loaded");
                e.isDisposed = !0, e.dispose.apply(e.instance), this._addons.splice(t, 1)
            }
        }, e
    }();
    t.AddonManager = i
}, function(e, t, r) {
    Object.assign(e.exports, r(86))
}, function(e, t, r) {
    "use strict";
    var i = e.exports;
    Object.assign(i, r(9), r(87));
    const n = [42, 42, 24, 66, 48],
        o = ["to_terminal", "on_detect", "on_retract", "sender"];
    class s {
        constructor(e, t, r, i) {
            this._confirmer = t, this._denier = r, this._is_valid = i, this._session_type = e
        }
        confirm() {
            return this._confirmer.apply(this, arguments)
        }
        deny() {
            return this._denier.apply(this, arguments)
        }
        is_valid() {
            return this._is_valid.apply(this, arguments)
        }
        get_session_role() {
            return this._session_type
        }
    }
    i.Sentry = class {
        constructor(e) {
            if (!e) throw "Need options!";
            var t = this;
            o.forEach(function(r) {
                if (!e[r]) throw "Need “" + r + "”!";
                t["_" + r] = e[r]
            }), this._cache = []
        }
        _after_session_end() {
            this._zsession = null
        }
        consume(e) {
            if (e instanceof Array || (e = Array.prototype.slice.call(new Uint8Array(e))), this._zsession) {
                var t = this._zsession;
                if (t.consume(e), !t.has_ended()) return;
                e = "receive" === t.type ? t.get_trailing_bytes() : []
            }
            var r = this._parse(e),
                i = e;
            if (r) {
                !!this._parsed_session && (this._parsed_session.type === r.type && (i = []), this._on_retract()), this._parsed_session = r;
                var n = this;
                this._on_detect(new s(r.type, function() {
                    if (!this.is_valid()) throw "Stale ZMODEM session!";
                    return r.on("garbage", n._to_terminal), r.on("session_end", n._after_session_end.bind(n)), r.set_sender(n._sender), delete n._parsed_session, n._zsession = r
                }, this._send_abort.bind(this), function() {
                    return n._parsed_session === r
                }))
            } else {
                var o = this._parsed_session;
                this._parsed_session = null, o && (1 === i.length && 67 === i[0] && this._send_abort(), this._on_retract())
            }
            this._to_terminal(i)
        }
        get_confirmed_session() {
            return this._zsession || null
        }
        _send_abort() {
            this._sender(i.ZMLIB.ABORT_SEQUENCE)
        }
        _parse(e) {
            var t = this._cache;
            for (t.push.apply(t, e);;) {
                let r, o = i.ZMLIB.find_subarray(t, n);
                if (-1 === o) break;
                t.splice(0, o);
                try {
                    r = i.Session.parse(t)
                } catch (e) {}
                if (!r) break;
                return 1 === t.length && t[0] === i.ZMLIB.XON && t.shift(), t.length ? null : r
            }
            return t.splice(21), null
        }
    }
}, function(e, t, r) {
    "use strict";
    var i = e.exports;
    Object.assign(i, r(21), r(88), r(22), r(9), r(89), r(91), r(92), r(10));
    const n = ["CANFDX", "CANOVIO", "CANFC32"],
        o = "spool_uint8array",
        s = [79, 79],
        a = i.ZMLIB.ABORT_SEQUENCE;
    class l {
        constructor() {
            this._on_evt = {}, this._evt_once_index = {}
        }
        _Add_event(e) {
            this._on_evt[e] = [], this._evt_once_index[e] = []
        }
        _get_evt_queue(e) {
            if (!this._on_evt[e]) throw "Bad event: " + e;
            return this._on_evt[e]
        }
        on(e, t) {
            return this._get_evt_queue(e).push(t), this
        }
        off(e, t) {
            var r = this._get_evt_queue(e);
            if (t) {
                var i = r.indexOf(t);
                if (-1 === i) throw "“" + t + "” is not in the “" + e + "” queue.";
                r.splice(i, 1)
            } else r.pop();
            return this
        }
        _Happen(e) {
            var t = this._get_evt_queue(e),
                r = Array.apply(null, arguments);
            r.shift();
            var i = this;
            return t.forEach(function(e) {
                e.apply(i, r)
            }), t.length
        }
    }
    i.Session = class extends l {
        static parse(e) {
            var t;
            try {
                t = i.Header.parse_hex(e)
            } catch (e) {
                return
            }
            if (t) switch (t.NAME) {
                case "ZRQINIT":
                    return new i.Session.Receive;
                case "ZRINIT":
                    return new i.Session.Send(t)
            }
        }
        set_sender(e) {
            return this._sender = e, this
        }
        has_ended() {
            return this._has_ended()
        }
        consume(e) {
            if (this._before_consume(e), this._aborted) throw new i.Error("already_aborted");
            e.length && (this._strip_and_enqueue_input(e), this._check_for_abort_sequence(e) || this._consume_first())
        }
        aborted() {
            return !!this._aborted
        }
        constructor() {
            super(), this._config = {}, this._input_buffer = [], this._Add_event("receive"), this._Add_event("garbage"), this._Add_event("session_end")
        }
        get_role() {
            return this.type
        }
        _trim_leading_garbage_until_header() {
            var e = i.Header.trim_leading_garbage(this._input_buffer);
            e.length && 0 === this._Happen("garbage", e) && console.debug("Garbage: ", String.fromCharCode.apply(String, e), e)
        }
        _parse_and_consume_header() {
            this._trim_leading_garbage_until_header();
            var e = i.Header.parse(this._input_buffer);
            if (e) return this._consume_header(e[0]), this._last_header_name = e[0].NAME, this._last_header_crc = e[1], e[0]
        }
        _consume_header(e) {
            this._on_receive(e);
            var t = this._next_header_handler[e.NAME];
            if (!t) throw console.error("Unhandled header!", e, this._next_header_handler), new i.Error("Unhandled header: " + e.NAME);
            this._next_header_handler = null, t.call(this, e)
        }
        _check_for_abort_sequence() {
            var e = i.ZMLIB.find_subarray(this._input_buffer, a);
            if (-1 !== e) throw this._input_buffer.splice(0, e + a.length), this._aborted = !0, this._on_session_end(), new i.Error("peer_aborted")
        }
        _send_header(e) {
            if (!this._sender) throw "Need sender!";
            var t = Array.apply(null, arguments),
                r = this._create_header_bytes(t);
            this._sender(r[0]), this._last_sent_header = r[1]
        }
        _create_header_bytes(e) {
            var t = i.Header.build.apply(i.Header, e);
            return [t[this._get_header_formatter(e[0])](this._zencoder), t]
        }
        _strip_and_enqueue_input(e) {
            i.ZMLIB.strip_ignored_bytes(e), this._input_buffer.push.apply(this._input_buffer, e)
        }
        abort() {
            this._sender(a.concat([8, 8, 8, 8, 8])), this._aborted = !0, this._sender = function() {
                throw new i.Error("already_aborted")
            }, this._on_session_end()
        }
        _on_session_end() {
            this._Happen("session_end")
        }
        _on_receive(e) {
            this._Happen("receive", e)
        }
        _before_consume() {}
    }, i.Session.Receive = class extends i.Session {
        constructor() {
            super(), this._Add_event("offer"), this._Add_event("data_in"), this._Add_event("file_end")
        }
        _before_consume(e) {
            if (this._bytes_after_OO) throw "PROTOCOL: Session is completed!";
            this._bytes_being_consumed = e
        }
        get_trailing_bytes() {
            if (this._aborted) return [];
            if (!this._bytes_after_OO) throw "PROTOCOL: Session is not completed!";
            return this._bytes_after_OO.slice(0)
        }
        _has_ended() {
            return this.aborted() || !!this._bytes_after_OO
        }
        _get_header_formatter() {
            return "to_hex"
        }
        _parse_and_consume_subpacket() {
            var e;
            e = 16 === this._last_header_crc ? "parse16" : "parse32";
            var t = i.Subpacket[e](this._input_buffer);
            return t && (this._consume_data(t), t.frame_end() && (this._next_subpacket_handler = null)), t
        }
        _consume_first() {
            if (this._got_ZFIN) {
                if (this._input_buffer.length < 2) return;
                if (0 === i.ZMLIB.find_subarray(this._input_buffer, s)) return this._bytes_after_OO = (e = this._bytes_being_consumed.slice(0), 0 === i.ZMLIB.find_subarray(e, s) ? e.splice(0, s.length) : e[0] === s[s.length - 1] && e.splice(0, 1), e), void this._on_session_end();
                throw "PROTOCOL: Only thing after ZFIN should be “OO” (79,79), not: " + this._input_buffer.join()
            }
            var e, t;
            do {
                t = this._next_subpacket_handler ? this._parse_and_consume_subpacket() : this._parse_and_consume_header()
            } while (t && this._input_buffer.length)
        }
        _consume_data(e) {
            if (this._on_receive(e), !this._next_subpacket_handler) throw "PROTOCOL: Received unexpected data packet after " + this._last_header_name + " header: " + e.get_payload().join();
            this._next_subpacket_handler.call(this, e)
        }
        _octets_to_string(e) {
            return this._textdecoder || (this._textdecoder = new i.Text.Decoder), this._textdecoder.decode(new Uint8Array(e))
        }
        _consume_ZFILE_data(e, t) {
            if (this._file_info) throw "PROTOCOL: second ZFILE data subpacket received";
            var r = t.get_payload(),
                i = r.indexOf(0),
                n = this._octets_to_string(r.slice(0, i)),
                o = this._octets_to_string(r.slice(1 + i)).split(" "),
                s = o[1] && parseInt(o[1], 8) || void 0;
            s && (s = new Date(1e3 * s)), this._file_info = {
                name: n,
                size: o[0] ? parseInt(o[0], 10) : null,
                mtime: s || null,
                mode: o[2] && parseInt(o[2], 8) || null,
                serial: o[3] && parseInt(o[3], 10) || null,
                files_remaining: o[4] ? parseInt(o[4], 10) : null,
                bytes_remaining: o[5] ? parseInt(o[5], 10) : null
            };
            var a = new u(e.get_options(), this._file_info, this._accept.bind(this), this._skip.bind(this));
            this._current_transfer = a
        }
        _consume_ZDATA_data(e) {
            if (!this._accepted_offer) throw "PROTOCOL: Received data without accepting!";
            if (!this._offset_ok) return console.warn("offset not ok!"), void _send_ZRPOS();
            this._file_offset += e.get_payload().length, this._on_data_in(e), e.ack_expected() && !e.frame_end() && this._send_header("ZACK", i.ENCODELIB.pack_u32_le(this._file_offset))
        }
        _make_promise_for_between_files() {
            var e = this;
            return new Promise(function(t) {
                var r = {
                    ZFILE: function(e) {
                        this._next_subpacket_handler = function(r) {
                            this._next_subpacket_handler = null, this._consume_ZFILE_data(e, r), this._Happen("offer", this._current_transfer), t(this._current_transfer)
                        }
                    },
                    ZSINIT: function(t) {
                        e._next_subpacket_handler = function(t) {
                            e._next_subpacket_handler = null, e._consume_ZSINIT_data(t), e._send_header("ZACK"), e._next_header_handler = r
                        }
                    },
                    ZFIN: function() {
                        this._consume_ZFIN(), t()
                    }
                };
                e._next_header_handler = r
            })
        }
        _consume_ZSINIT_data(e) {
            this._attn = e.get_payload()
        }
        start() {
            if (this._started) throw "Already started!";
            this._started = !0;
            var e = this._make_promise_for_between_files();
            return this._send_ZRINIT(), e
        }
        _accept(e) {
            this._accepted_offer = !0, this._file_offset = e || 0;
            var t = this,
                r = new Promise(function(e) {
                    t._next_header_handler = {
                        ZDATA: function(t) {
                            this._consume_ZDATA(t), this._next_subpacket_handler = this._consume_ZDATA_data, this._next_header_handler = {
                                ZEOF: function(t) {
                                    this._consume_ZEOF(t), this._next_subpacket_handler = null, this._make_promise_for_between_files(), e(), this._send_ZRINIT()
                                }
                            }
                        }
                    }
                });
            return this._send_ZRPOS(), r
        }
        _skip() {
            var e = this._make_promise_for_between_files();
            if (this._accepted_offer) {
                if (!this._current_transfer) return;
                var t = function() {
                    this._accepted_offer = !1, this._next_subpacket_handler = null, this._make_promise_for_between_files()
                }.bind(this);
                Object.assign(this._next_header_handler, {
                    ZEOF: t,
                    ZDATA: function() {
                        t(), this._next_header_handler.ZEOF = t
                    }.bind(this)
                })
            }
            return this._file_info = null, this._send_header("ZSKIP"), e
        }
        _send_ZRINIT() {
            this._send_header("ZRINIT", n)
        }
        _consume_ZFIN() {
            this._got_ZFIN = !0, this._send_header("ZFIN")
        }
        _consume_ZEOF(e) {
            if (this._file_offset !== e.get_offset()) throw "ZEOF offset mismatch; unimplemented (local: " + this._file_offset + "; ZEOF: " + e.get_offset() + ")";
            this._on_file_end(), this._file_info = null, this._current_transfer = null
        }
        _consume_ZDATA(e) {
            if (this._file_offset !== e.get_offset()) throw "Error correction is unimplemented.";
            this._offset_ok = !0
        }
        _send_ZRPOS() {
            this._send_header("ZRPOS", this._file_offset)
        }
        _on_file_end() {
            this._Happen("file_end"), this._current_transfer && (this._current_transfer._Happen("complete"), this._current_transfer = null)
        }
        _on_data_in(e) {
            this._Happen("data_in", e), this._current_transfer && this._current_transfer._Happen("input", e.get_payload())
        }
    }, Object.assign(i.Session.Receive.prototype, {
        type: "receive"
    });
    var h = {
        get_details: function() {
            return Object.assign({}, this._file_info)
        },
        get_options: function() {
            return Object.assign({}, this._zfile_opts)
        },
        get_offset: function() {
            return this._file_offset
        }
    };
    class c {
        constructor(e, t, r, i) {
            this._file_info = e, this._file_offset = t || 0, this._send = r, this._end = i
        }
        send(e) {
            this._send(e), this._file_offset += e.length
        }
        end(e) {
            var t = this._end(e || []);
            return e && (this._file_offset += e.length), t
        }
    }
    Object.assign(c.prototype, h);
    class u extends l {
        constructor(e, t, r, i) {
            super(), this._zfile_opts = e, this._file_info = t, this._accept_func = r, this._skip_func = i, this._Add_event("input"), this._Add_event("complete"), this.on("input", this._input_handler)
        }
        _verify_not_skipped() {
            if (this._skipped) throw new i.Error("Already skipped!")
        }
        skip() {
            return this._verify_not_skipped(), this._skipped = !0, this._skip_func.apply(this, arguments)
        }
        accept(e) {
            if (this._verify_not_skipped(), this._accepted) throw new i.Error("Already accepted!");
            switch (this._accepted = !0, e || (e = {}), this._file_offset = e.offset || 0, e.on_input) {
                case null:
                case void 0:
                case "spool_array":
                case o:
                    this._spool = [];
                    break;
                default:
                    if ("function" != typeof e.on_input) throw "Invalid “on_input”: " + e.on_input
            }
            return this._input_handler_mode = e.on_input || o, this._accept_func(this._file_offset).then(this._get_spool.bind(this))
        }
        _input_handler(e) {
            if (this._file_offset += e.length, "function" == typeof this._input_handler_mode) this._input_handler_mode(e);
            else {
                if (this._input_handler_mode === o) e = new Uint8Array(e);
                else if ("spool_array" !== this._input_handler_mode) throw new i.Error("WTF?? _input_handler_mode = " + this._input_handler_mode);
                this._spool.push(e)
            }
        }
        _get_spool() {
            return this._spool
        }
    }
    Object.assign(u.prototype, h);
    const f = {
        ZFILE: !0,
        ZDATA: !0
    };
    i.Session.Send = class extends i.Session {
        constructor(e) {
            if (super(), !e) throw "Need first header!";
            if ("ZRINIT" !== e.NAME) throw "First header should be ZRINIT, not " + e.NAME;
            this._last_header_name = "ZRINIT", this._subpacket_encode_func = "encode16", this._zencoder = new i.ZDLE, this._consume_ZRINIT(e), this._file_offset = 0, this._start_keepalive_on_set_sender = !0
        }
        set_sender(e) {
            return super.set_sender(e), this._start_keepalive_on_set_sender && (this._start_keepalive_on_set_sender = !1, this._start_keepalive()), this
        }
        _get_header_formatter(e) {
            return f[e] ? "to_binary16" : "to_hex"
        }
        _start_keepalive() {
            if (!this._keepalive_promise) {
                var e = this;
                this._keepalive_promise = new Promise(function(t) {
                    e._keepalive_timeout = setTimeout(t, 5e3)
                }).then(function() {
                    e._next_header_handler = {
                        ZACK: function() {
                            e._got_ZSINIT_ZACK = !0
                        }
                    }, e._send_ZSINIT(), e._keepalive_promise = null, e._start_keepalive()
                })
            }
        }
        _stop_keepalive() {
            this._keepalive_promise && (clearTimeout(this._keepalive_timeout), this._keep_alive_promise = null)
        }
        _send_ZSINIT() {
            var e = [];
            this._zencoder.escapes_ctrl_chars() && e.push("ESCCTL"), this._send_header_and_data(["ZSINIT", e], [0], "end_ack")
        }
        _consume_ZRINIT(e) {
            if (this._last_ZRINIT = e, e.get_buffer_size()) throw "Buffer size (" + e.get_buffer_size() + ") is unsupported!";
            if (!e.can_full_duplex()) throw "Half-duplex I/O is unsupported!";
            if (!e.can_overlap_io()) throw "Non-overlap I/O is unsupported!";
            if (e.escape_8th_bit()) throw "8-bit escaping is unsupported!";
            this._zencoder.set_escape_ctrl_chars(!0), e.escape_ctrl_chars() || console.debug("Peer didn’t request escape of all control characters. Will send ZSINIT to force recognition of escaped control characters.")
        }
        _ensure_receiver_escapes_ctrl_chars() {
            var e;
            if (this._last_ZRINIT.escape_ctrl_chars() || this._got_ZSINIT_ZACK) e = Promise.resolve();
            else {
                var t = this;
                e = new Promise(function(e) {
                    t._next_header_handler = {
                        ZACK: t => {
                            e()
                        }
                    }, t._send_ZSINIT()
                })
            }
            return e
        }
        _convert_params_to_offer_payload_array(e) {
            var t = (e = i.Validation.offer_parameters(e)).name + "\0",
                r = [(e.size || 0).toString(10), e.mtime ? e.mtime.toString(8) : "0", e.mode ? (32768 | e.mode).toString(8) : "0", "0"];
            return e.files_remaining && (r.push(e.files_remaining), e.bytes_remaining && r.push(e.bytes_remaining)), t += r.join(" "), this._string_to_octets(t)
        }
        send_offer(e) {
            if (!e) throw "need file params!";
            if (this._sending_file) throw "Already sending file!";
            var t = this._convert_params_to_offer_payload_array(e);
            this._stop_keepalive();
            var r = this;
            return this._ensure_receiver_escapes_ctrl_chars().then(function() {
                var i = new Promise(function(t) {
                    r._next_header_handler = {
                        ZSKIP: function() {
                            r._start_keepalive(), t()
                        },
                        ZRPOS: function(i) {
                            r._sending_file = !0, t(new c(e, i.get_offset(), r._send_interim_file_piece.bind(r), r._end_file.bind(r)))
                        }
                    }
                });
                return r._send_header_and_data(["ZFILE"], t, "end_ack"), delete r._sent_ZDATA, i
            })
        }
        _send_header_and_data(e, t, r) {
            var i = this._create_header_bytes(e),
                n = this._build_subpacket_bytes(t, r);
            i[0].push.apply(i[0], n), this._sender(i[0]), this._last_sent_header = i[1]
        }
        _build_subpacket_bytes(e, t) {
            return i.Subpacket.build(e, t)[this._subpacket_encode_func](this._zencoder)
        }
        _build_and_send_subpacket(e, t) {
            this._sender(this._build_subpacket_bytes(e, t))
        }
        _string_to_octets(e) {
            this._textencoder || (this._textencoder = new i.Text.Encoder);
            var t = this._textencoder.encode(e);
            return Array.prototype.slice.call(t)
        }
        _send_interim_file_piece(e) {
            return this._send_file_part(e, "no_end_no_ack"), Promise.resolve()
        }
        _ensure_we_are_sending() {
            if (!this._sending_file) throw "Not sending a file currently!"
        }
        _end_file(e) {
            this._ensure_we_are_sending(), this._send_file_part(e, "end_no_ack");
            var t = this,
                r = new Promise(function(e) {
                    t._sending_file = !1, t._prepare_to_receive_ZRINIT(e)
                });
            return this._send_header("ZEOF", this._file_offset), this._file_offset = 0, r
        }
        _prepare_to_receive_ZRINIT(e) {
            this._next_header_handler = {
                ZRINIT: function(t) {
                    this._consume_ZRINIT(t), e && e()
                }
            }
        }
        close() {
            var e = "ZRINIT" === this._last_header_name;
            if (e || (e = "ZSKIP" === this._last_header_name), e || (e = "ZSINIT" === this._last_sent_header.name && "ZACK" === this._last_header_name), !e) throw "Can’t close; last received header was “" + this._last_header_name + "”";
            var t = this,
                r = new Promise(function(e, r) {
                    t._next_header_handler = {
                        ZFIN: function() {
                            t._sender(s), t._sent_OO = !0, t._on_session_end(), e()
                        }
                    }
                });
            return this._send_header("ZFIN"), r
        }
        _has_ended() {
            return this.aborted() || !!this._sent_OO
        }
        _send_file_part(e, t) {
            this._sent_ZDATA || (this._send_header("ZDATA", this._file_offset), this._sent_ZDATA = !0);
            for (var r = 0, i = e.length;;) {
                var n = Math.min(r + 8192, i) - r,
                    o = n + r >= i,
                    s = e.slice(r, r + n);
                if (s instanceof Array || (s = Array.prototype.slice.call(s)), this._build_and_send_subpacket(s, o ? t : "no_end_no_ack"), this._file_offset += n, (r += n) >= i) break
            }
        }
        _consume_first() {
            if (!this._parse_and_consume_header() && "67" === this._input_buffer.join()) throw "Receiver has fallen back to YMODEM."
        }
        _on_session_end() {
            this._stop_keepalive(), super._on_session_end()
        }
    }, Object.assign(i.Session.Send.prototype, {
        type: "send"
    })
}, function(e, t) {
    e.exports.Text = {
        Encoder: "undefined" != typeof TextEncoder ? TextEncoder : class {
            encode(e) {
                e = unescape(encodeURIComponent(e));
                for (var t = new Array(e.length), r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                return new Uint8Array(t)
            }
        },
        Decoder: "undefined" != typeof TextDecoder ? TextDecoder : class {
            decode(e) {
                return decodeURIComponent(escape(String.fromCharCode.apply(String, e)))
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    var i = e.exports;
    Object.assign(i, r(21), r(22), r(9), r(37), r(10));
    const n = "*".charCodeAt(0),
        o = "A".charCodeAt(0),
        s = "B".charCodeAt(0),
        a = "C".charCodeAt(0),
        l = [13, 10],
        h = l.slice(0).concat([i.ZMLIB.XON]),
        c = [n, n, i.ZMLIB.ZDLE, s],
        u = [n, i.ZMLIB.ZDLE, o],
        f = [n, i.ZMLIB.ZDLE, a];
    i.Header = class {
        static trim_leading_garbage(e) {
            var t, r, o = [];
            e: for (; e.length && !r;) {
                var s = e.indexOf(n);
                if (-1 === s) {
                    t = !0;
                    break e
                }
                if (o.push.apply(o, e.splice(0, s)), e.length < 2) break e;
                if (e[1] === n)
                    if (e.length < c.length) {
                        if (e.join() === c.slice(0, e.length).join()) break e
                    } else e[2] === c[2] && e[3] === c[3] && (r = W);
                else if (e[1] === i.ZMLIB.ZDLE) {
                    if (e.length < u.length) break e;
                    e[2] === u[2] ? r = F : e[2] === f[2] && (r = j)
                }
                r || o.push(e.shift())
            }
            return t && o.push.apply(o, e.splice(0)), o
        }
        static parse(e) {
            var t;
            if (e[1] === n) return (t = W(e)) && [t, 16];
            if (e[2] === o) return (t = F(e)) && [t, 16];
            if (e[2] === a) return (t = j(e)) && [t, 32];
            if (!(e.length < 3)) throw "Unrecognized/unsupported octets: " + e.join()
        }
        static build(e) {
            var t = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments),
                r = H[e];
            if (!r) throw "No frame class “" + e + "” is defined!";
            return t.shift(), new(r.bind.apply(r, [null].concat(t)))
        }
        to_hex() {
            var e = this._crc_bytes();
            return c.concat(i.ENCODELIB.octets_to_hex(e.concat(i.CRC.crc16(e))), this._hex_header_ending)
        }
        to_binary16(e) {
            return this._to_binary(e, u, i.CRC.crc16)
        }
        to_binary32(e) {
            return this._to_binary(e, f, i.CRC.crc32)
        }
        constructor() {
            this._bytes4 || (this._bytes4 = [0, 0, 0, 0])
        }
        _to_binary(e, t, r) {
            var i = this._crc_bytes();
            return t.concat(e.encode(i.concat(r(i))))
        }
        _crc_bytes() {
            return [this.TYPENUM].concat(this._bytes4)
        }
    }, i.Header.prototype._hex_header_ending = h;
    class _ extends i.Header {}
    const d = {
        CANFDX: 1,
        CANOVIO: 2,
        CANBRK: 4,
        CANCRY: 8,
        CANLZW: 16,
        CANFC32: 32,
        ESCCTL: 64,
        ESC8: 128
    };
    class p extends i.Header {
        constructor(e, t) {
            super();
            var r = 0;
            t || (t = 0), e.forEach(function(e) {
                r |= function(e) {
                    if (!d[e]) throw new i.Error("Invalid ZRINIT flag: " + e);
                    return d[e]
                }(e)
            }), this._bytes4 = [255 & t, t >> 8, 0, r]
        }
        get_buffer_size() {
            return i.ENCODELIB.unpack_u16_be(this._bytes4.slice(0, 2)) || void 0
        }
        can_full_duplex() {
            return !!(this._bytes4[3] & d.CANFDX)
        }
        can_overlap_io() {
            return !!(this._bytes4[3] & d.CANOVIO)
        }
        can_break() {
            return !!(this._bytes4[3] & d.CANBRK)
        }
        can_fcs_32() {
            return !!(this._bytes4[3] & d.CANFC32)
        }
        escape_ctrl_chars() {
            return !!(this._bytes4[3] & d.ESCCTL)
        }
        escape_8th_bit() {
            return !!(this._bytes4[3] & d.ESC8)
        }
    }
    const m = {
        ESCCTL: 64,
        ESC8: 128
    };
    class y extends i.Header {
        constructor(e, t) {
            super();
            var r = 0;
            if (e.forEach(function(e) {
                    r |= function(e) {
                        if (!m[e]) throw "Invalid ZSINIT flag: " + e;
                        return m[e]
                    }(e)
                }), this._bytes4 = [0, 0, 0, r], t) {
                if (t.length > 31) throw "Attn sequence must be <= 31 bytes";
                if (t.some(function(e) {
                        return e > 255
                    })) throw "Attn sequence (" + t + ") must be <256";
                this._data = t.concat([0])
            }
        }
        escape_ctrl_chars() {
            return !!(this._bytes4[3] & m.ESCCTL)
        }
        escape_8th_bit() {
            return !!(this._bytes4[3] & m.ESC8)
        }
    }
    class g extends i.Header {
        constructor(e) {
            super(), e && (this._bytes4 = e.slice())
        }
    }
    g.prototype._hex_header_ending = l;
    const v = {
            extended: {
                sparse: 64
            },
            transport: [void 0, "compress", "encrypt", "rle"],
            management: [void 0, "newer_or_longer", "crc", "append", "clobber", "newer", "mtime_or_length", "protect", "rename"],
            conversion: [void 0, "binary", "text", "resume"]
        },
        b = ["extended", "transport", "management", "conversion"],
        C = 128,
        w = 31,
        S = 64;
    class E extends i.Header {
        get_options() {
            var e = {
                    sparse: !!(this._bytes4[0] & S)
                },
                t = this._bytes4.slice(0);
            return b.forEach(function(r, i) {
                if (v[r] instanceof Array) "management" === r && (e.skip_if_absent = !!(t[i] & C), t[i] &= w), e[r] = v[r][t[i]];
                else
                    for (var n in v[r]) e[n] = !!(t[i] & v[r][n]), e[n] && (t[i] ^= v[r][n]);
                !e[r] && t[i] && (e[r] = "unknown:" + t[i])
            }), e
        }
    }
    class x extends i.Header {}
    class A extends i.Header {}
    class L extends i.Header {}
    class k extends i.Header {}
    L.prototype._hex_header_ending = l;
    class T extends i.Header {
        constructor(e) {
            super(), this._bytes4 = i.ENCODELIB.pack_u32_le(e)
        }
        get_offset() {
            return i.ENCODELIB.unpack_u32_le(this._bytes4)
        }
    }
    class R extends T {}
    class M extends T {}
    class D extends T {}
    const O = [
        [_, "ZRQINIT"],
        [p, "ZRINIT"],
        [y, "ZSINIT"],
        [g, "ZACK"],
        [E, "ZFILE"],
        [x, "ZSKIP"], void 0, [A, "ZABORT"],
        [L, "ZFIN"],
        [R, "ZRPOS"],
        [M, "ZDATA"],
        [D, "ZEOF"],
        [k, "ZFERR"], void 0, void 0, void 0, void 0, void 0, void 0, void 0
    ];
    for (var H = {}, I = 0; I < O.length; I++) O[I] && (H[O[I][1]] = O[I][0], Object.assign(O[I][0].prototype, {
        TYPENUM: I,
        NAME: O[I][1]
    }));
    const B = [_, p, y, g, E, x, "ZNAK", A, L, R, M, D, k, "ZCRC", "ZCHALLENGE", "ZCOMPL", "ZCAN", "ZFREECNT", "ZCOMMAND", "ZSTDERR"];

    function P(e) {
        var t = B[e];
        if ("string" == typeof t) throw "Received unsupported header: " + t;
        return function(e) {
            return e.prototype instanceof T ? new e(0) : new e([])
        }(t)
    }

    function F(e) {
        var t = i.ZDLE.splice(e, u.length, 7);
        return t && N(t)
    }

    function N(e) {
        i.CRC.verify16(e.slice(0, 5), e.slice(5));
        var t = P(e[0]);
        return t._bytes4 = e.slice(1, 5), t
    }

    function j(e) {
        var t = i.ZDLE.splice(e, f.length, 9);
        if (t) {
            i.CRC.verify32(t.slice(0, 5), t.slice(5));
            var r = P(t[0]);
            return r._bytes4 = t.slice(1, 5), r
        }
    }

    function W(e) {
        var t, r, n = e.indexOf(138);
        if (-1 === n && (n = e.indexOf(10)), -1 !== n) {
            if (r = e.splice(0, n), e.shift(), 19 === r.length) {
                var o = r.pop();
                13 !== o && 141 !== o && (t = "Invalid hex header: (CR/)LF doesn’t have CR!")
            } else 18 !== r.length && (t = "Invalid hex header: invalid number of bytes before LF!");
            if (t) throw t + " (" + r.length + " bytes: " + r.join() + ")";
            return r.splice(0, 4), N(i.ENCODELIB.parse_hex_octets(r))
        }
        e.length > 11 && (t = "Invalid hex header - no LF detected within 12 bytes!")
    }
    i.Header.parse_hex = W
}, function(e, t, r) {
    var i;
    i = function(e) {
        e.version = "1.2.0";
        var t = function() {
            for (var e = 0, t = new Array(256), r = 0; 256 != r; ++r) e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = r) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1, t[r] = e;
            return "undefined" != typeof Int32Array ? new Int32Array(t) : t
        }();
        e.table = t, e.bstr = function(e, r) {
            for (var i = -1 ^ r, n = e.length - 1, o = 0; o < n;) i = (i = i >>> 8 ^ t[255 & (i ^ e.charCodeAt(o++))]) >>> 8 ^ t[255 & (i ^ e.charCodeAt(o++))];
            return o === n && (i = i >>> 8 ^ t[255 & (i ^ e.charCodeAt(o))]), -1 ^ i
        }, e.buf = function(e, r) {
            if (e.length > 1e4) return function(e, r) {
                for (var i = -1 ^ r, n = e.length - 7, o = 0; o < n;) i = (i = (i = (i = (i = (i = (i = (i = i >>> 8 ^ t[255 & (i ^ e[o++])]) >>> 8 ^ t[255 & (i ^ e[o++])]) >>> 8 ^ t[255 & (i ^ e[o++])]) >>> 8 ^ t[255 & (i ^ e[o++])]) >>> 8 ^ t[255 & (i ^ e[o++])]) >>> 8 ^ t[255 & (i ^ e[o++])]) >>> 8 ^ t[255 & (i ^ e[o++])]) >>> 8 ^ t[255 & (i ^ e[o++])];
                for (; o < n + 7;) i = i >>> 8 ^ t[255 & (i ^ e[o++])];
                return -1 ^ i
            }(e, r);
            for (var i = -1 ^ r, n = e.length - 3, o = 0; o < n;) i = (i = (i = (i = i >>> 8 ^ t[255 & (i ^ e[o++])]) >>> 8 ^ t[255 & (i ^ e[o++])]) >>> 8 ^ t[255 & (i ^ e[o++])]) >>> 8 ^ t[255 & (i ^ e[o++])];
            for (; o < n + 3;) i = i >>> 8 ^ t[255 & (i ^ e[o++])];
            return -1 ^ i
        }, e.str = function(e, r) {
            for (var i, n, o = -1 ^ r, s = 0, a = e.length; s < a;)(i = e.charCodeAt(s++)) < 128 ? o = o >>> 8 ^ t[255 & (o ^ i)] : i < 2048 ? o = (o = o >>> 8 ^ t[255 & (o ^ (192 | i >> 6 & 31))]) >>> 8 ^ t[255 & (o ^ (128 | 63 & i))] : i >= 55296 && i < 57344 ? (i = 64 + (1023 & i), n = 1023 & e.charCodeAt(s++), o = (o = (o = (o = o >>> 8 ^ t[255 & (o ^ (240 | i >> 8 & 7))]) >>> 8 ^ t[255 & (o ^ (128 | i >> 2 & 63))]) >>> 8 ^ t[255 & (o ^ (128 | n >> 6 & 15 | (3 & i) << 4))]) >>> 8 ^ t[255 & (o ^ (128 | 63 & n))]) : o = (o = (o = o >>> 8 ^ t[255 & (o ^ (224 | i >> 12 & 15))]) >>> 8 ^ t[255 & (o ^ (128 | i >> 6 & 63))]) >>> 8 ^ t[255 & (o ^ (128 | 63 & i))];
            return -1 ^ o
        }
    }, "undefined" == typeof DO_NOT_EXPORT_CRC ? i(t) : i({})
}, function(e, t, r) {
    "use strict";
    var i, n = e.exports;
    Object.assign(n, r(37), r(22), r(9), r(10)), n.Subpacket = class e {
        static build(e, t) {
            var r = i[t];
            if (!r) throw "No subpacket type “" + t + "” is defined! Try one of: " + Object.keys(i).join(", ");
            return new r(e)
        }
        encode16(e) {
            return this._encode(e, n.CRC.crc16)
        }
        encode32(e) {
            return this._encode(e, n.CRC.crc32)
        }
        get_payload() {
            return this._payload
        }
        static parse16(t) {
            return e._parse(t, 2)
        }
        static parse32(t) {
            return e._parse(t, 4)
        }
        constructor(e) {
            this._payload = e
        }
        _encode(e, t) {
            return e.encode(this._payload.slice(0)).concat([n.ZMLIB.ZDLE, this._frameend_num], e.encode(t(this._payload.concat(this._frameend_num))))
        }
        static _parse(e, t) {
            for (var r, i, o = {
                    104: a,
                    105: h,
                    106: c,
                    107: l
                }, s = 0; s < e.length;) {
                if (-1 === (s = e.indexOf(n.ZMLIB.ZDLE, s))) return;
                if (i = o[e[s + 1]]) {
                    r = s + 1;
                    break
                }
                s++
            }
            if (i) {
                var u = e[r];
                if (e[r - 1] !== n.ZMLIB.ZDLE) throw "Byte before frame end should be ZDLE, not " + e[r - 1];
                var f = e.splice(0, r - 1),
                    _ = n.ZDLE.splice(e, 2, t);
                if (_) {
                    var d = n.ZDLE.decode(f);
                    return n.CRC[2 === t ? "verify16" : "verify32"](d.concat([u]), _), new i(d, _)
                }
                e.unshift.apply(e, f)
            }
        }
    };
    class o extends n.Subpacket {
        frame_end() {
            return !0
        }
    }
    class s extends n.Subpacket {
        frame_end() {
            return !1
        }
    }
    class a extends o {
        ack_expected() {
            return !1
        }
    }
    a.prototype._frameend_num = 104;
    class l extends o {
        ack_expected() {
            return !0
        }
    }
    l.prototype._frameend_num = 107;
    class h extends s {
        ack_expected() {
            return !1
        }
    }
    h.prototype._frameend_num = 105;
    class c extends s {
        ack_expected() {
            return !0
        }
    }
    c.prototype._frameend_num = 106, i = {
        end_no_ack: a,
        end_ack: l,
        no_end_no_ack: h,
        no_end_ack: c
    }
}, function(e, t, r) {
    "use strict";
    var i = e.exports;
    Object.assign(i, r(10));
    const n = /\*\x18[AC]|\*\*\x18B/;

    function o(e, t) {
        if (t < 0) throw new i.Error("validation", "“" + e + "” (" + t + ") must be nonnegative.");
        if (t !== Math.floor(t)) throw new i.Error("validation", "“" + e + "” (" + t + ") must be an integer.")
    }
    i.Validation = {
        offer_parameters: function(e) {
            if (!e.name) throw new i.Error("validation", "Need “name”!");
            if ("string" != typeof e.name) throw new i.Error("validation", "“name” (" + e.name + ") must be a string!");
            if (e = Object.assign({}, e), n.test(e.name) && console.warn("The filename " + JSON.stringify(name) + " contains characters that look like a ZMODEM header. This could corrupt the ZMODEM session; consider renaming it so that the filename doesn’t contain control characters."), null !== e.serial && void 0 !== e.serial) throw new i.Error("validation", "“serial” is meaningless.");
            if (e.serial = null, ["size", "mode", "files_remaining", "bytes_remaining"].forEach(function(t) {
                    var r;
                    switch (typeof e[t]) {
                        case "object":
                            r = null === e[t];
                            break;
                        case "undefined":
                            e[t] = null, r = !0;
                            break;
                        case "number":
                            o(t, e[t]), r = !0
                    }
                    if (!r) throw new i.Error("validation", "“" + t + "” (" + e[t] + ") must be null, undefined, or a number.")
                }), "number" == typeof e.mode && (e.mode |= 32768), 0 === e.files_remaining) throw new i.Error("validation", "“files_remaining”, if given, must be positive.");
            var t;
            switch (typeof e.mtime) {
                case "object":
                    if (t = !0, e.mtime instanceof Date) {
                        var r = e.mtime;
                        if (e.mtime = Math.floor(r.getTime() / 1e3), e.mtime < 0) throw new i.Error("validation", "“mtime” (" + r + ") must not be earlier than 1970.")
                    } else null !== e.mtime && (t = !1);
                    break;
                case "undefined":
                    e.mtime = null, t = !0;
                    break;
                case "number":
                    o("mtime", e.mtime), t = !0
            }
            if (!t) throw new i.Error("validation", "“mtime” (" + e.mtime + ") must be null, undefined, a Date, or a number.");
            return e
        }
    }
}, function(e, t, r) {}, function(e, t, r) {}, function(e, t, r) {}, function(e, t, r) {
    "use strict";
    r.r(t);
    var i = r(0),
        n = r(1),
        o = r(38),
        s = r(39),
        a = r(40),
        l = r(41);
    class h {
        constructor() {
            this.overlayNode = document.createElement("div"), this.overlayNode.style.cssText = "border-radius: 15px;\nfont-size: xx-large;\nopacity: 0.75;\npadding: 0.2em 0.5em 0.2em 0.5em;\nposition: absolute;\n-webkit-user-select: none;\n-webkit-transition: opacity 180ms ease-in;\n-moz-user-select: none;\n-moz-transition: opacity 180ms ease-in;", this.overlayNode.addEventListener("mousedown", e => {
                e.preventDefault(), e.stopPropagation()
            }, !0)
        }
        activate(e) {
            this.terminal = e
        }
        dispose() {}
        showOverlay(e, t) {
            const {
                terminal: r,
                overlayNode: i
            } = this;
            i.style.color = "#101010", i.style.backgroundColor = "#f0f0f0", i.textContent = e, i.style.opacity = "0.75", i.parentNode || r.element.appendChild(i);
            const n = r.element.getBoundingClientRect(),
                o = i.getBoundingClientRect();
            if (i.style.top = (n.height - o.height) / 2 + "px", i.style.left = (n.width - o.width) / 2 + "px", this.overlayTimeout && clearTimeout(this.overlayTimeout), null === t) return;
            const s = this;
            s.overlayTimeout = setTimeout(() => {
                i.style.opacity = "0", s.overlayTimeout = setTimeout(() => {
                    i.parentNode && i.parentNode.removeChild(i), s.overlayTimeout = null, i.style.opacity = "0.75"
                }, 200)
            }, t || 1500)
        }
    }
    var c = r(14);
    r(93);
    class u extends i.Component {
        constructor(e) {
            super(e)
        }
        render({
            show: e,
            children: t
        }) {
            return e && Object(i.h)("div", {
                className: "modal"
            }, Object(i.h)("div", {
                className: "modal-background"
            }), Object(i.h)("div", {
                className: "modal-content"
            }, Object(i.h)("div", {
                className: "box"
            }, t)))
        }
    }
    var f = function(e, t, r, i) {
        var n, o = arguments.length,
            s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
        else
            for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s
    };
    class _ extends i.Component {
        constructor(e) {
            super(e), this.sentry = new c.Sentry({
                to_terminal: e => this.zmodemWrite(e),
                sender: e => this.zmodemSend(e),
                on_retract: () => this.zmodemReset(),
                on_detect: e => this.zmodemDetect(e)
            })
        }
        render(e, {
            modal: t
        }) {
            return Object(i.h)(u, {
                show: t
            }, Object(i.h)("label", {
                class: "file-label"
            }, Object(i.h)("input", {
                onChange: this.sendFile,
                class: "file-input",
                type: "file",
                multiple: !0
            }), Object(i.h)("span", {
                class: "file-cta"
            }, "Choose files…")))
        }
        activate(e) {
            this.terminal = e
        }
        dispose() {}
        consume(e) {
            const {
                sentry: t,
                handleError: r
            } = this;
            try {
                t.consume(e)
            } catch (e) {
                r(e, "consume")
            }
        }
        handleError(e, t) {
            console.error(`[ttyd] zmodem ${t}: `, e), this.zmodemReset()
        }
        zmodemReset() {
            this.terminal.setOption("disableStdin", !1), this.keyDispose && (this.keyDispose.dispose(), this.keyDispose = null)
        }
        zmodemWrite(e) {
            this.terminal.writeUtf8(new Uint8Array(e))
        }
        zmodemSend(e) {
            this.props.sender(e)
        }
        zmodemDetect(e) {
            const {
                terminal: t,
                receiveFile: r,
                zmodemReset: i
            } = this;
            t.setOption("disableStdin", !0), this.keyDispose = t.onKey(t => {
                const r = t.domEvent;
                r.ctrlKey && "c" === r.key && e.deny()
            }), this.session = e.confirm(), this.session.on("session_end", i), "send" === this.session.type ? this.setState({
                modal: !0
            }) : r()
        }
        sendFile(e) {
            this.setState({
                modal: !1
            });
            const {
                session: t,
                writeProgress: r,
                handleError: i
            } = this, n = e.target.files;
            c.Browser.send_files(t, n, {
                on_progress: (e, t) => r(t)
            }).then(() => t.close()).catch(e => i(e, "send"))
        }
        receiveFile() {
            const {
                session: e,
                writeProgress: t,
                handleError: r
            } = this;
            e.on("offer", e => {
                const i = [];
                e.on("input", r => {
                    t(e), i.push(new Uint8Array(r))
                }), e.accept().then(() => c.Browser.save_to_disk(i, e.get_details().name)).catch(e => r(e, "receive"))
            }), e.start()
        }
        writeProgress(e) {
            const {
                terminal: t,
                bytesHuman: r
            } = this, i = e.get_details(), n = i.name, o = i.size, s = e.get_offset(), a = (100 * s / o).toFixed(2);
            t.write(`${n} ${a}% ${r(s,2)}/${r(o,2)}\r`)
        }
        bytesHuman(e, t) {
            if (!/^([-+])?|(\.\d+)(\d+(\.\d+)?|(\d+\.)|Infinity)$/.test(e)) return "-";
            if (0 === e) return "0";
            void 0 === t && (t = 1);
            const r = Math.floor(Math.log(e) / Math.log(1024));
            return `${(e/Math.pow(1024,Math.floor(r))).toFixed(t)} ${["bytes","KB","MB","GB","TB","PB"][r]}`
        }
    }
    f([n.bind], _.prototype, "handleError", null), f([n.bind], _.prototype, "zmodemReset", null), f([n.bind], _.prototype, "zmodemWrite", null), f([n.bind], _.prototype, "zmodemSend", null), f([n.bind], _.prototype, "zmodemDetect", null), f([n.bind], _.prototype, "sendFile", null), f([n.bind], _.prototype, "receiveFile", null), f([n.bind], _.prototype, "writeProgress", null), r(94);
    var d = function(e, t, r, i) {
        var n, o = arguments.length,
            s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
        else
            for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s
    };
    class p extends i.Component {
        constructor(e) {
            super(e), this.backoffLock = !1, this.textEncoder = new TextEncoder, this.textDecoder = new TextDecoder, this.fitAddon = new a.FitAddon, this.overlayAddon = new h, this.backoff = o.exponential({
                initialDelay: 100,
                maxDelay: 1e4
            }), this.backoff.on("ready", () => {
                this.backoffLock = !1, this.openTerminal()
            }), this.backoff.on("backoff", (e, t) => {
                console.log(`[ttyd] will attempt to reconnect websocket in ${t}ms`), this.backoffLock = !0
            })
        }
        componentDidMount() {
            this.openTerminal()
        }
        componentWillUnmount() {
            this.socket.close(), this.terminal.dispose(), window.removeEventListener("resize", this.onWindowResize), window.removeEventListener("beforeunload", this.onWindowUnload)
        }
        render({
            id: e
        }) {
            return Object(i.h)("div", {
                id: e,
                ref: e => this.container = e
            }, Object(i.h)(_, {
                ref: e => this.zmodemAddon = e,
                sender: this.sendData
            }))
        }
        sendData(e) {
            const {
                socket: t
            } = this, r = new Uint8Array(e.length + 1);
            r[0] = "0".charCodeAt(0), r.set(e, 1), t.send(r)
        }
        onWindowResize() {
            const {
                fitAddon: e
            } = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(() => e.fit(), 250)
        }
        onWindowUnload(e) {
            const t = "Close terminal? this will also terminate the command.";
            return e.returnValue = t, t
        }
        openTerminal() {
        	console.log(this.props.url);
        	this.terminal && this.terminal.dispose();
        	this.socket = new WebSocket(this.props.url);
        	this.terminal = new s.Terminal(this.props.options);
            //this.terminal && this.terminal.dispose(), this.socket = new WebSocket(this.props.url, ["tty"]), this.terminal = new s.Terminal(this.props.options);
            const {
                socket: e,
                terminal: t,
                container: r,
                fitAddon: i,
                overlayAddon: n
            } = this;
            window.term = t, window.term.fit = (() => {
                this.fitAddon.fit()
            }), e.binaryType = "arraybuffer", e.onopen = this.onSocketOpen, e.onmessage = this.onSocketData, e.onclose = this.onSocketClose, e.onerror = this.onSocketError, t.loadAddon(i), t.loadAddon(n), t.loadAddon(new l.WebLinksAddon), t.loadAddon(this.zmodemAddon), t.onTitleChange(e => {
                e && "" !== e && (document.title = e + " | " + this.title)
            }), t.onData(this.onTerminalData), t.onResize(this.onTerminalResize), document.queryCommandSupported && document.queryCommandSupported("copy") && t.onSelectionChange(() => {
                "" !== t.getSelection() && (n.showOverlay("✂", 200), document.execCommand("copy"))
            }), t.open(r), t.focus(), window.addEventListener("resize", this.onWindowResize), window.addEventListener("beforeunload", this.onWindowUnload)
        }
        reconnect() {
            this.backoffLock || this.backoff.backoff()
        }
        onSocketOpen() {
            console.log("[ttyd] Websocket connection opened"), this.backoff.reset();
            const {
                socket: e,
                textEncoder: t,
                fitAddon: r
            } = this, i = window.tty_auth_token;
            e.send(t.encode(JSON.stringify({
                AuthToken: i
            }))), r.fit()
        }
        onSocketClose(e) {
            console.log(`[ttyd] websocket connection closed with code: ${e.code}`);
            const {
                overlayAddon: t
            } = this;
            t.showOverlay("Connection Closed", null), window.removeEventListener("beforeunload", this.onWindowUnload), 1008 === e.code && window.location.reload(), 1e3 !== e.code && this.reconnect()
        }
        onSocketError() {
            this.reconnect()
        }
        onSocketData(e) {
            //console.log(e);
            const {
                terminal: t,
                textDecoder: r,
                zmodemAddon: i
            } = this, n = e.data, o = String.fromCharCode(new Uint8Array(n)[0]), s = n.slice(1);
            //console.log(o);
            var mS = "";
            for (var x=0; x<n.byteLength; x++)
                mS += String.fromCharCode(new Uint8Array(n)[x]);
            console.log(mS);
            switch (o) {
                case "0":
                    i.consume(s);
                    break;
                case "1":
                    this.title = r.decode(s), document.title = this.title;
                    break;
                case "2":
                    const e = JSON.parse(r.decode(s));
                    Object.keys(e).forEach(r => {
                        console.log(`[ttyd] setting ${r}: ${e[r]}`), t.setOption(r, e[r])
                    });
                    break;
                default:
                    console.warn(`[ttyd] unknown command: ${o}`)
            }
        }
        onTerminalResize(e) {
            const {
                overlayAddon: t,
                socket: r,
                textEncoder: i
            } = this;
            if (r.readyState === WebSocket.OPEN) {
                const t = JSON.stringify({
                    columns: e.cols,
                    rows: e.rows
                });
                r.send(i.encode("1" + t))
            }
            setTimeout(() => {
                t.showOverlay(`${e.cols}x${e.rows}`)
            }, 500)
        }
        onTerminalData(e) {
            const {
                socket: t,
                textEncoder: r
            } = this;
            t.readyState === WebSocket.OPEN && t.send(r.encode("0" + e))
        }
    }
    d([n.bind], p.prototype, "sendData", null), d([n.bind], p.prototype, "onWindowResize", null), d([n.bind], p.prototype, "openTerminal", null), d([n.bind], p.prototype, "reconnect", null), d([n.bind], p.prototype, "onSocketOpen", null), d([n.bind], p.prototype, "onSocketClose", null), d([n.bind], p.prototype, "onSocketError", null), d([n.bind], p.prototype, "onSocketData", null), d([n.bind], p.prototype, "onTerminalResize", null), d([n.bind], p.prototype, "onTerminalData", null);
    const m = "https:" === window.location.protocol ? "wss://" : "ws://",
        y = window.location.pathname.endsWith("/") ? "ws" : "/ws",
        g = [m, '192.168.4.1:5999', '', y, window.location.search].join(""),
        //g = [m, '127.0.0.1:8080', '', y, window.location.search].join(""),
        v = {
            fontSize: 13,
            fontFamily: "Menlo For Powerline,Consolas,Liberation Mono,Menlo,Courier,monospace",
            theme: {
                foreground: "#d2d2d2",
                background: "#2b2b2b",
                cursor: "#adadad",
                black: "#000000",
                red: "#d81e00",
                green: "#5ea702",
                yellow: "#cfae00",
                blue: "#427ab3",
                magenta: "#89658e",
                cyan: "#00a7aa",
                white: "#dbded8",
                brightBlack: "#686a66",
                brightRed: "#f54235",
                brightGreen: "#99e343",
                brightYellow: "#fdeb61",
                brightBlue: "#84b0d8",
                brightMagenta: "#bc94b7",
                brightCyan: "#37e6e8",
                brightWhite: "#f1f1f0"
            }
        };
    r(95), Object(i.render)(Object(i.h)(class extends i.Component {
        render() {
            return Object(i.h)(p, {
                id: "terminal-container",
                url: g,
                options: v
            })
        }
    }, null), document.body)
}]);