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
    }, r.p = "", r(r.s = 38)
}([function(e, t, r) {
    var i, n;
    void 0 === (n = "function" == typeof(i = function(e) {
        "use strict";
        e.__esModule = !0;
        var t = {},
            r = Object.prototype.hasOwnProperty,
            i = function(e, t, r) {
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
            n = a(function(e) {
                var i = arguments.length <= 1 || void 0 === arguments[1] ? t : arguments[1],
                    n = i.cache || {};
                return function() {
                    for (var t = arguments.length, o = Array(t), s = 0; s < t; s++) o[s] = arguments[s];
                    var a = String(o[0]);
                    return !1 === i.caseSensitive && (a = a.toLowerCase()), r.call(n, a) ? n[a] : n[a] = e.apply(this, o)
                }
            }),
            o = a(function(e, t) {
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
            }),
            s = a(function(e, t) {
                return e.bind(t)
            }, function() {
                return i
            });

        function a(e, t) {
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
        e.memoize = n, e.debounce = o, e.bind = s, e.default = {
            memoize: n,
            debounce: o,
            bind: s
        }
    }) ? i.apply(t, [t]) : i) || (e.exports = n)
}, function(e, t, r) {
    (function(e) {
        var i = Object.getOwnPropertyDescriptors || function(e) {
                for (var t = Object.keys(e), r = {}, i = 0; i < t.length; i++) r[t[i]] = Object.getOwnPropertyDescriptor(e, t[i]);
                return r
            },
            n = /%[sdj%]/g;
        t.format = function(e) {
            if (!g(e)) {
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
                }), c = i[r]; r < o; c = i[++r]) p(c) || !m(c) ? s += " " + c : s += " " + a(c);
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
                stylize: l
            };
            return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), d(r) ? i.showHidden = r : r && t._extend(i, r), y(i.showHidden) && (i.showHidden = !1), y(i.depth) && (i.depth = 2), y(i.colors) && (i.colors = !1), y(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = c), h(i, e, i.depth)
        }

        function c(e, t) {
            var r = a.styles[t];
            return r ? "[" + a.colors[r][0] + "m" + e + "[" + a.colors[r][1] + "m" : e
        }

        function l(e, t) {
            return e
        }

        function h(e, r, i) {
            if (e.customInspect && r && w(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                var n = r.inspect(i, e);
                return g(n) || (n = h(e, n, i)), n
            }
            var o = function(e, t) {
                if (y(t)) return e.stylize("undefined", "undefined");
                if (g(t)) {
                    var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(r, "string")
                }
                return v(t) ? e.stylize("" + t, "number") : d(t) ? e.stylize("" + t, "boolean") : p(t) ? e.stylize("null", "null") : void 0
            }(e, r);
            if (o) return o;
            var s = Object.keys(r),
                a = function(e) {
                    var t = {};
                    return s.forEach(function(e, r) {
                        t[e] = !0
                    }), t
                }();
            if (e.showHidden && (s = Object.getOwnPropertyNames(r)), S(r) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return u(r);
            if (0 === s.length) {
                if (w(r)) {
                    var c = r.name ? ": " + r.name : "";
                    return e.stylize("[Function" + c + "]", "special")
                }
                if (b(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                if (C(r)) return e.stylize(Date.prototype.toString.call(r), "date");
                if (S(r)) return u(r)
            }
            var l, m = "",
                E = !1,
                A = ["{", "}"];
            return _(r) && (E = !0, A = ["[", "]"]), w(r) && (m = " [Function" + (r.name ? ": " + r.name : "") + "]"), b(r) && (m = " " + RegExp.prototype.toString.call(r)), C(r) && (m = " " + Date.prototype.toUTCString.call(r)), S(r) && (m = " " + u(r)), 0 !== s.length || E && 0 != r.length ? i < 0 ? b(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r), l = E ? function(e, t, r, i, n) {
                for (var o = [], s = 0, a = t.length; s < a; ++s) x(t, String(s)) ? o.push(f(e, t, r, i, String(s), !0)) : o.push("");
                return n.forEach(function(n) {
                    n.match(/^\d+$/) || o.push(f(e, t, r, i, n, !0))
                }), o
            }(e, r, i, a, s) : s.map(function(t) {
                return f(e, r, i, a, t, E)
            }), e.seen.pop(), function(e, t, r) {
                return e.reduce(function(e, t) {
                    return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1] : r[0] + t + " " + e.join(", ") + " " + r[1]
            }(l, m, A)) : A[0] + m + A[1]
        }

        function u(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }

        function f(e, t, r, i, n, o) {
            var s, a, c;
            if ((c = Object.getOwnPropertyDescriptor(t, n) || {
                    value: t[n]
                }).get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")), x(i, n) || (s = "[" + n + "]"), a || (e.seen.indexOf(c.value) < 0 ? (a = p(r) ? h(e, c.value, null) : h(e, c.value, r - 1)).indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(e) {
                    return "  " + e
                }).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) {
                    return "   " + e
                }).join("\n")) : a = e.stylize("[Circular]", "special")), y(s)) {
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

        function v(e) {
            return "number" == typeof e
        }

        function g(e) {
            return "string" == typeof e
        }

        function y(e) {
            return void 0 === e
        }

        function b(e) {
            return m(e) && "[object RegExp]" === E(e)
        }

        function m(e) {
            return "object" == typeof e && null !== e
        }

        function C(e) {
            return m(e) && "[object Date]" === E(e)
        }

        function S(e) {
            return m(e) && ("[object Error]" === E(e) || e instanceof Error)
        }

        function w(e) {
            return "function" == typeof e
        }

        function E(e) {
            return Object.prototype.toString.call(e)
        }

        function A(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }
        t.debuglog = function(r) {
            if (y(o) && (o = e.env.NODE_DEBUG || ""), r = r.toUpperCase(), !s[r])
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
        }, t.isNumber = v, t.isString = g, t.isSymbol = function(e) {
            return "symbol" == typeof e
        }, t.isUndefined = y, t.isRegExp = b, t.isObject = m, t.isDate = C, t.isError = S, t.isFunction = w, t.isPrimitive = function(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }, t.isBuffer = r(21);
        var R = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function x(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.log = function() {
            console.log("%s - %s", function() {
                var e = new Date,
                    t = [A(e.getHours()), A(e.getMinutes()), A(e.getSeconds())].join(":");
                return [e.getDate(), R[e.getMonth()], t].join(" ")
            }(), t.format.apply(t, arguments))
        }, t.inherits = r(22), t._extend = function(e, t) {
            if (!t || !m(t)) return e;
            for (var r = Object.keys(t), i = r.length; i--;) e[r[i]] = t[r[i]];
            return e
        };
        var L = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

        function k(e, t) {
            if (!e) {
                var r = new Error("Promise was rejected with a falsy value");
                r.reason = e, e = r
            }
            return t(e)
        }
        t.promisify = function(e) {
            if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
            if (L && e[L]) {
                var t;
                if ("function" != typeof(t = e[L])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(t, L, {
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
            return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), L && Object.defineProperty(t, L, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), Object.defineProperties(t, i(e))
        }, t.promisify.custom = L, t.callbackify = function(t) {
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
                    e.nextTick(k, t, s)
                })
            }
            return Object.setPrototypeOf(r, Object.getPrototypeOf(t)), Object.defineProperties(r, i(t)), r
        }
    }).call(this, r(20))
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
    var c = 10;

    function l(e) {
        return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
    }

    function h(e, t, r, i) {
        var n, o, s, a;
        if ("function" != typeof r) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
        if (void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), s = o[t]), void 0 === s) s = o[t] = r, ++e._eventsCount;
        else if ("function" == typeof s ? s = o[t] = i ? [r, s] : [s, r] : i ? s.unshift(r) : s.push(r), (n = l(e)) > 0 && s.length > n && !s.warned) {
            s.warned = !0;
            var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = s.length, a = c, console && console.warn && console.warn(a)
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
            return c
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            c = e
        }
    }), a.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, a.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    }, a.prototype.getMaxListeners = function() {
        return l(this)
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
        var c = n[e];
        if (void 0 === c) return !1;
        if ("function" == typeof c) o(c, this, t);
        else {
            var l = c.length,
                h = d(c, l);
            for (r = 0; r < l; ++r) o(h[r], this, t)
        }
        return !0
    }, a.prototype.addListener = function(e, t) {
        return h(this, e, t, !1)
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(e, t) {
        return h(this, e, t, !0)
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
    e.exports = r(19)
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
    Object.assign(o, r(2));
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
                c = this._config.escape_ctrl_chars,
                l = 0;
            for (i = 0; i < e.length; i++) {
                if (!(n = t[e[i]])) throw console.trace(), console.error("bad encode() call:", JSON.stringify(e)), this._lastcode = r, "Invalid octet: " + e[i];
                r = e[i], 1 === n || (c || 2 === n || 64 == (127 & r)) && (a[l] = s, l++, r ^= 64), a[l] = r, l++
            }
            return this._lastcode = r, e.splice(0), e.push.apply(e, new Uint8Array(o, 0, l)), e
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
    "use strict";
    var i = e.exports;

    function n(e) {
        if (e.aborted()) throw new i.Error("aborted")
    }
    window.Zmodem = i, Object.assign(i, r(27)), i.Browser = {
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
            var c = 0;
            return function t() {
                var o = i[c];
                return o ? (c++, e.send_offer(o).then(function(i) {
                    return r.on_offer_response && r.on_offer_response(o.obj, i), void 0 === i ? t() : new Promise(function(s) {
                        var a, c = new FileReader;
                        c.onerror = function(e) {
                            throw console.error("file read error", e), "File read error: " + e
                        }, c.onprogress = function(t) {
                            t.target.result && (a = new Uint8Array(t.target.result, i.get_offset()), n(e), i.send(a), r.on_progress && r.on_progress(o.obj, i, a))
                        }, c.onload = function(c) {
                            a = new Uint8Array(c.target.result, i, a), n(e), i.end(a).then(function() {
                                r.on_progress && a.length && r.on_progress(o.obj, i, a), r.on_file_complete && r.on_file_complete(o.obj, i), s(t())
                            })
                        }, c.readAsArrayBuffer(o.obj)
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
    var i = r(4),
        n = r(5);

    function o(e) {
        i.EventEmitter.call(this), this.backoffStrategy_ = e, this.maxNumberOfRetry_ = -1, this.backoffNumber_ = 0, this.backoffDelay_ = 0, this.timeoutID_ = -1, this.handlers = {
            backoff: this.onBackoff_.bind(this)
        }
    }
    r(1).inherits(o, i.EventEmitter), o.prototype.failAfter = function(e) {
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
    r(4), r(1), n.prototype.getMaxDelay = function() {
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
    var i = r(1),
        n = r(10);

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
    const i = r(32);
    var n, o = e.exports;
    Object.assign(o, r(3), r(6));
    const s = 16,
        a = 4129,
        c = 65535,
        l = 1 << s - 1;

    function h(e, t) {
        return n || function() {
            n = new Array(256);
            for (var e = s - 8, t = 0; t < 256; t++) {
                for (var r = t << e & c, i = 0; i < 8; i++) 0 != (r & l) ? (r <<= 1, r ^= a) : r <<= 1;
                n[t] = r & c
            }
        }(), n[t >> 8 & 255] ^ (255 & t) << 8 ^ e
    }

    function u(e, t) {
        if (e.join() !== t.join()) throw new o.Error("crc", t, e)
    }
    o.CRC = {
        crc16: function(e) {
            for (var t = e[0], r = 1; r < e.length; r++) t = h(e[r], t);
            return t = h(0, h(0, t)), o.ENCODELIB.pack_u16_be(t)
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
    var i = r(9),
        n = r(24),
        o = r(11),
        s = r(25);
    e.exports.Backoff = i, e.exports.FunctionCall = s, e.exports.FibonacciStrategy = o, e.exports.ExponentialStrategy = n, e.exports.fibonacci = function(e) {
        return new i(new o(e))
    }, e.exports.exponential = function(e) {
        return new i(new n(e))
    }, e.exports.call = function(e, t, r) {
        var i = Array.prototype.slice.call(arguments);
        return e = i[0], t = i.slice(1, i.length - 1), r = i[i.length - 1], new s(e, t, r)
    }
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
        }, r.p = "", r(r.s = 32)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(14);
        t.IBufferService = i.createDecorator("BufferService"), t.ICoreMouseService = i.createDecorator("CoreMouseService"), t.ICoreService = i.createDecorator("CoreService"), t.ICharsetService = i.createDecorator("CharsetService"), t.IDirtyRowService = i.createDecorator("DirtyRowService"), t.IInstantiationService = i.createDecorator("InstantiationService"), t.ILogService = i.createDecorator("LogService"), t.IOptionsService = i.createDecorator("OptionsService"), t.IUnicodeService = i.createDecorator("UnicodeService")
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                this._listeners = [], this._disposed = !1
            }
            return Object.defineProperty(e.prototype, "event", {
                get: function() {
                    var e = this;
                    return this._event || (this._event = function(t) {
                        return e._listeners.push(t), {
                            dispose: function() {
                                if (!e._disposed)
                                    for (var r = 0; r < e._listeners.length; r++)
                                        if (e._listeners[r] === t) return void e._listeners.splice(r, 1)
                            }
                        }
                    }), this._event
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.fire = function(e, t) {
                for (var r = [], i = 0; i < this._listeners.length; i++) r.push(this._listeners[i]);
                for (i = 0; i < r.length; i++) r[i].call(void 0, e, t)
            }, e.prototype.dispose = function() {
                this._listeners && (this._listeners.length = 0), this._disposed = !0
            }, e
        }();
        t.EventEmitter = i
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_COLOR = 256, t.DEFAULT_ATTR = 256 | t.DEFAULT_COLOR << 9, t.CHAR_DATA_ATTR_INDEX = 0, t.CHAR_DATA_CHAR_INDEX = 1, t.CHAR_DATA_WIDTH_INDEX = 2, t.CHAR_DATA_CODE_INDEX = 3, t.NULL_CELL_CHAR = "", t.NULL_CELL_WIDTH = 1, t.NULL_CELL_CODE = 0, t.WHITESPACE_CELL_CHAR = " ", t.WHITESPACE_CELL_WIDTH = 1, t.WHITESPACE_CELL_CODE = 32
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(14);
        t.ICharSizeService = i.createDecorator("CharSizeService"), t.ICoreBrowserService = i.createDecorator("CoreBrowserService"), t.IMouseService = i.createDecorator("MouseService"), t.IRenderService = i.createDecorator("RenderService"), t.ISelectionService = i.createDecorator("SelectionService"), t.ISoundService = i.createDecorator("SoundService")
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
        var o = r(7),
            s = r(3),
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.content = 0, t.fg = 0, t.bg = 0, t.combinedData = "", t
                }
                return n(t, e), t.fromCharData = function(e) {
                    var r = new t;
                    return r.setFromCharData(e), r
                }, t.prototype.isCombined = function() {
                    return 2097152 & this.content
                }, t.prototype.getWidth = function() {
                    return this.content >> 22
                }, t.prototype.getChars = function() {
                    return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? o.stringFromCodePoint(2097151 & this.content) : ""
                }, t.prototype.getCode = function() {
                    return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content
                }, t.prototype.setFromCharData = function(e) {
                    this.fg = e[s.CHAR_DATA_ATTR_INDEX], this.bg = 0;
                    var t = !1;
                    if (e[s.CHAR_DATA_CHAR_INDEX].length > 2) t = !0;
                    else if (2 === e[s.CHAR_DATA_CHAR_INDEX].length) {
                        var r = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                        if (55296 <= r && r <= 56319) {
                            var i = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                            56320 <= i && i <= 57343 ? this.content = 1024 * (r - 55296) + i - 56320 + 65536 | e[s.CHAR_DATA_WIDTH_INDEX] << 22 : t = !0
                        } else t = !0
                    } else this.content = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e[s.CHAR_DATA_WIDTH_INDEX] << 22;
                    t && (this.combinedData = e[s.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e[s.CHAR_DATA_WIDTH_INDEX] << 22)
                }, t.prototype.getAsCharData = function() {
                    return [this.fg, this.getChars(), this.getWidth(), this.getCode()]
                }, t
            }(r(6).AttributeData);
        t.CellData = a
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
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
            }, e.prototype.isAttributeDefault = function() {
                return 0 === this.fg && 0 === this.bg
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
        t.AttributeData = i
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
                    c = 0,
                    l = 0;
                if (this.interim[0]) {
                    var h = !1,
                        u = this.interim[0];
                    u &= 192 == (224 & u) ? 31 : 224 == (240 & u) ? 15 : 7;
                    for (var f = 0, _ = void 0;
                        (_ = 63 & this.interim[++f]) && f < 4;) u <<= 6, u |= _;
                    for (var d = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, p = d - f; l < p;) {
                        if (l >= r) return 0;
                        if (128 != (192 & (_ = e[l++]))) {
                            l--, h = !0;
                            break
                        }
                        this.interim[f++] = _, u <<= 6, u |= 63 & _
                    }
                    h || (2 === d ? u < 128 ? l-- : t[a++] = u : 3 === d ? u < 2048 || u >= 55296 && u <= 57343 || (t[a++] = u) : u < 65536 || u > 1114111 || (t[a++] = u)), this.interim.fill(0)
                }
                for (var v = r - 4, g = l; g < r;) {
                    for (; !(!(g < v) || 128 & (i = e[g]) || 128 & (n = e[g + 1]) || 128 & (o = e[g + 2]) || 128 & (s = e[g + 3]));) t[a++] = i, t[a++] = n, t[a++] = o, t[a++] = s, g += 4;
                    if ((i = e[g++]) < 128) t[a++] = i;
                    else if (192 == (224 & i)) {
                        if (g >= r) return this.interim[0] = i, a;
                        if (128 != (192 & (n = e[g++]))) {
                            g--;
                            continue
                        }
                        if ((c = (31 & i) << 6 | 63 & n) < 128) {
                            g--;
                            continue
                        }
                        t[a++] = c
                    } else if (224 == (240 & i)) {
                        if (g >= r) return this.interim[0] = i, a;
                        if (128 != (192 & (n = e[g++]))) {
                            g--;
                            continue
                        }
                        if (g >= r) return this.interim[0] = i, this.interim[1] = n, a;
                        if (128 != (192 & (o = e[g++]))) {
                            g--;
                            continue
                        }
                        if ((c = (15 & i) << 12 | (63 & n) << 6 | 63 & o) < 2048 || c >= 55296 && c <= 57343) continue;
                        t[a++] = c
                    } else if (240 == (248 & i)) {
                        if (g >= r) return this.interim[0] = i, a;
                        if (128 != (192 & (n = e[g++]))) {
                            g--;
                            continue
                        }
                        if (g >= r) return this.interim[0] = i, this.interim[1] = n, a;
                        if (128 != (192 & (o = e[g++]))) {
                            g--;
                            continue
                        }
                        if (g >= r) return this.interim[0] = i, this.interim[1] = n, this.interim[2] = o, a;
                        if (128 != (192 & (s = e[g++]))) {
                            g--;
                            continue
                        }
                        if ((c = (7 & i) << 18 | (63 & n) << 12 | (63 & o) << 6 | 63 & s) < 65536 || c > 1114111) continue;
                        t[a++] = c
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
        }), t.addDisposableDomListener = function(e, t, r, i) {
            e.addEventListener(t, r, i);
            var n = !1;
            return {
                dispose: function() {
                    n && (n = !0, e.removeEventListener(t, r, i))
                }
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.INVERTED_DEFAULT_COLOR = 257, t.DIM_OPACITY = .5, t.CHAR_ATLAS_CELL_SPACING = 1
    }, function(e, t, r) {
        "use strict";
        var i, n, o, s;

        function a(e) {
            var t = e.toString(16);
            return t.length < 2 ? "0" + t : t
        }

        function c(e, t) {
            return e < t ? (t + .05) / (e + .05) : (e + .05) / (t + .05)
        }
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e.toCss = function(e, t, r, i) {
                    return void 0 !== i ? "#" + a(e) + a(t) + a(r) + a(i) : "#" + a(e) + a(t) + a(r)
                }, e.toRgba = function(e, t, r, i) {
                    return void 0 === i && (i = 255), (e << 24 | t << 16 | r << 8 | i) >>> 0
                }
            }(i = t.channels || (t.channels = {})), (n = t.color || (t.color = {})).blend = function(e, t) {
                var r = (255 & t.rgba) / 255;
                if (1 === r) return {
                    css: t.css,
                    rgba: t.rgba
                };
                var n = t.rgba >> 24 & 255,
                    o = t.rgba >> 16 & 255,
                    s = t.rgba >> 8 & 255,
                    a = e.rgba >> 24 & 255,
                    c = e.rgba >> 16 & 255,
                    l = e.rgba >> 8 & 255,
                    h = a + Math.round((n - a) * r),
                    u = c + Math.round((o - c) * r),
                    f = l + Math.round((s - l) * r);
                return {
                    css: i.toCss(h, u, f),
                    rgba: i.toRgba(h, u, f)
                }
            }, n.ensureContrastRatio = function(e, t, r) {
                var i = s.ensureContrastRatio(e.rgba, t.rgba, r);
                if (i) return s.toColor(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255)
            }, n.opaque = function(e) {
                var t = (255 | e.rgba) >>> 0,
                    r = s.toChannels(t),
                    n = r[0],
                    o = r[1],
                    a = r[2];
                return {
                    css: i.toCss(n, o, a),
                    rgba: t
                }
            }, (t.css || (t.css = {})).toColor = function(e) {
                return {
                    css: e,
                    rgba: (parseInt(e.slice(1), 16) << 8 | 255) >>> 0
                }
            },
            function(e) {
                function t(e, t, r) {
                    var i = e / 255,
                        n = t / 255,
                        o = r / 255;
                    return .2126 * (i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .0722 * (o <= .03928 ? o / 12.92 : Math.pow((o + .055) / 1.055, 2.4))
                }
                e.relativeLuminance = function(e) {
                    return t(e >> 16 & 255, e >> 8 & 255, 255 & e)
                }, e.relativeLuminance2 = t
            }(o = t.rgb || (t.rgb = {})),
            function(e) {
                function t(e, t, r) {
                    for (var i = e >> 24 & 255, n = e >> 16 & 255, s = e >> 8 & 255, a = t >> 24 & 255, l = t >> 16 & 255, h = t >> 8 & 255, u = c(o.relativeLuminance2(a, h, l), o.relativeLuminance2(i, n, s)); u < r && (a > 0 || l > 0 || h > 0);) a -= Math.max(0, Math.ceil(.1 * a)), l -= Math.max(0, Math.ceil(.1 * l)), h -= Math.max(0, Math.ceil(.1 * h)), u = c(o.relativeLuminance2(a, h, l), o.relativeLuminance2(i, n, s));
                    return (a << 24 | l << 16 | h << 8 | 255) >>> 0
                }

                function r(e, t, r) {
                    for (var i = e >> 24 & 255, n = e >> 16 & 255, s = e >> 8 & 255, a = t >> 24 & 255, l = t >> 16 & 255, h = t >> 8 & 255, u = c(o.relativeLuminance2(a, h, l), o.relativeLuminance2(i, n, s)); u < r && (a < 255 || l < 255 || h < 255);) a = Math.min(255, a + Math.ceil(.1 * (255 - a))), l = Math.min(255, l + Math.ceil(.1 * (255 - l))), h = Math.min(255, h + Math.ceil(.1 * (255 - h))), u = c(o.relativeLuminance2(a, h, l), o.relativeLuminance2(i, n, s));
                    return (a << 24 | l << 16 | h << 8 | 255) >>> 0
                }
                e.ensureContrastRatio = function(e, i, n) {
                    var s = o.relativeLuminance(e >> 8),
                        a = o.relativeLuminance(i >> 8);
                    if (c(s, a) < n) return a < s ? t(e, i, n) : r(e, i, n)
                }, e.reduceLuminance = t, e.increaseLuminance = r, e.toChannels = function(e) {
                    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
                }, e.toColor = function(e, t, r) {
                    return {
                        css: i.toCss(e, t, r),
                        rgba: i.toRgba(e, t, r)
                    }
                }
            }(s = t.rgba || (t.rgba = {})), t.toPaddedHex = a, t.contrastRatio = c
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
        t.isFirefox = !!~n.indexOf("Firefox"), t.isSafari = /^((?!chrome|android).)*safari/i.test(n), t.isMac = s(["Macintosh", "MacIntel", "MacPPC", "Mac68K"], o), t.isIpad = "iPad" === o, t.isIphone = "iPhone" === o, t.isWindows = s(["Windows", "Win16", "Win32", "WinCE"], o), t.isLinux = o.indexOf("Linux") >= 0
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
        var i = r(3),
            n = r(9),
            o = r(23),
            s = r(6),
            a = r(26),
            c = r(10),
            l = function() {
                function e(e, t, r, i, n, o, s, a) {
                    this._container = e, this._alpha = i, this._colors = n, this._rendererId = o, this._bufferService = s, this._optionsService = a, this._scaledCharWidth = 0, this._scaledCharHeight = 0, this._scaledCellWidth = 0, this._scaledCellHeight = 0, this._scaledCharLeft = 0, this._scaledCharTop = 0, this._currentGlyphIdentifier = {
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
                    var e;
                    this._container.removeChild(this._canvas), null === (e = this._charAtlas) || void 0 === e || e.dispose()
                }, e.prototype._initCanvas = function() {
                    this._ctx = a.throwIfFalsy(this._canvas.getContext("2d", {
                        alpha: this._alpha
                    })), this._alpha || this._clearAll()
                }, e.prototype.onOptionsChanged = function() {}, e.prototype.onBlur = function() {}, e.prototype.onFocus = function() {}, e.prototype.onCursorMove = function() {}, e.prototype.onGridChanged = function(e, t) {}, e.prototype.onSelectionChanged = function(e, t, r) {
                    void 0 === r && (r = !1)
                }, e.prototype.setColors = function(e) {
                    this._refreshCharAtlas(e)
                }, e.prototype._setTransparency = function(e) {
                    if (e !== this._alpha) {
                        var t = this._canvas;
                        this._alpha = e, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, t), this._refreshCharAtlas(this._colors), this.onGridChanged(0, this._bufferService.rows - 1)
                    }
                }, e.prototype._refreshCharAtlas = function(e) {
                    this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0 || (this._charAtlas = o.acquireCharAtlas(this._optionsService.options, this._rendererId, e, this._scaledCharWidth, this._scaledCharHeight), this._charAtlas.warmUp())
                }, e.prototype.resize = function(e) {
                    this._scaledCellWidth = e.scaledCellWidth, this._scaledCellHeight = e.scaledCellHeight, this._scaledCharWidth = e.scaledCharWidth, this._scaledCharHeight = e.scaledCharHeight, this._scaledCharLeft = e.scaledCharLeft, this._scaledCharTop = e.scaledCharTop, this._canvas.width = e.scaledCanvasWidth, this._canvas.height = e.scaledCanvasHeight, this._canvas.style.width = e.canvasWidth + "px", this._canvas.style.height = e.canvasHeight + "px", this._alpha || this._clearAll(), this._refreshCharAtlas(this._colors)
                }, e.prototype._fillCells = function(e, t, r, i) {
                    this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight)
                }, e.prototype._fillBottomLineAtCells = function(e, t, r) {
                    void 0 === r && (r = 1), this._ctx.fillRect(e * this._scaledCellWidth, (t + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, r * this._scaledCellWidth, window.devicePixelRatio)
                }, e.prototype._fillLeftLineAtCell = function(e, t, r) {
                    this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, window.devicePixelRatio * r, this._scaledCellHeight)
                }, e.prototype._strokeRectAtCell = function(e, t, r, i) {
                    this._ctx.lineWidth = window.devicePixelRatio, this._ctx.strokeRect(e * this._scaledCellWidth + window.devicePixelRatio / 2, t * this._scaledCellHeight + window.devicePixelRatio / 2, r * this._scaledCellWidth - window.devicePixelRatio, i * this._scaledCellHeight - window.devicePixelRatio)
                }, e.prototype._clearAll = function() {
                    this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height))
                }, e.prototype._clearCells = function(e, t, r, i) {
                    this._alpha ? this._ctx.clearRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight))
                }, e.prototype._fillCharTrueColor = function(e, t, r) {
                    this._ctx.font = this._getFont(!1, !1), this._ctx.textBaseline = "middle", this._clipRow(r), this._ctx.fillText(e.getChars(), t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2)
                }, e.prototype._drawChars = function(e, t, r) {
                    var o, s, a = this._getContrastColor(e);
                    a || e.isFgRGB() || e.isBgRGB() ? this._drawUncachedChars(e, t, r, a) : (e.isInverse() ? (o = e.isBgDefault() ? n.INVERTED_DEFAULT_COLOR : e.getBgColor(), s = e.isFgDefault() ? n.INVERTED_DEFAULT_COLOR : e.getFgColor()) : (s = e.isBgDefault() ? i.DEFAULT_COLOR : e.getBgColor(), o = e.isFgDefault() ? i.DEFAULT_COLOR : e.getFgColor()), o += this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && o < 8 ? 8 : 0, this._currentGlyphIdentifier.chars = e.getChars() || i.WHITESPACE_CELL_CHAR, this._currentGlyphIdentifier.code = e.getCode() || i.WHITESPACE_CELL_CODE, this._currentGlyphIdentifier.bg = s, this._currentGlyphIdentifier.fg = o, this._currentGlyphIdentifier.bold = !!e.isBold(), this._currentGlyphIdentifier.dim = !!e.isDim(), this._currentGlyphIdentifier.italic = !!e.isItalic(), this._charAtlas && this._charAtlas.draw(this._ctx, this._currentGlyphIdentifier, t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop) || this._drawUncachedChars(e, t, r))
                }, e.prototype._drawUncachedChars = function(e, t, r, i) {
                    if (this._ctx.save(), this._ctx.font = this._getFont(!!e.isBold(), !!e.isItalic()), this._ctx.textBaseline = "middle", e.isInverse())
                        if (i) this._ctx.fillStyle = i.css;
                        else if (e.isBgDefault()) this._ctx.fillStyle = c.color.opaque(this._colors.background).css;
                    else if (e.isBgRGB()) this._ctx.fillStyle = "rgb(" + s.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")";
                    else {
                        var o = e.getBgColor();
                        this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && o < 8 && (o += 8), this._ctx.fillStyle = this._colors.ansi[o].css
                    } else if (i) this._ctx.fillStyle = i.css;
                    else if (e.isFgDefault()) this._ctx.fillStyle = this._colors.foreground.css;
                    else if (e.isFgRGB()) this._ctx.fillStyle = "rgb(" + s.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")";
                    else {
                        var a = e.getFgColor();
                        this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && a < 8 && (a += 8), this._ctx.fillStyle = this._colors.ansi[a].css
                    }
                    this._clipRow(r), e.isDim() && (this._ctx.globalAlpha = n.DIM_OPACITY), this._ctx.fillText(e.getChars(), t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2), this._ctx.restore()
                }, e.prototype._clipRow = function(e) {
                    this._ctx.beginPath(), this._ctx.rect(0, e * this._scaledCellHeight, this._bufferService.cols * this._scaledCellWidth, this._scaledCellHeight), this._ctx.clip()
                }, e.prototype._getFont = function(e, t) {
                    return (t ? "italic" : "") + " " + (e ? this._optionsService.options.fontWeightBold : this._optionsService.options.fontWeight) + " " + this._optionsService.options.fontSize * window.devicePixelRatio + "px " + this._optionsService.options.fontFamily
                }, e.prototype._getContrastColor = function(e) {
                    if (1 !== this._optionsService.options.minimumContrastRatio) {
                        var t = this._colors.contrastCache.getColor(e.bg, e.fg);
                        if (void 0 !== t) return t || void 0;
                        var r = e.getFgColor(),
                            i = e.getFgColorMode(),
                            n = e.getBgColor(),
                            o = e.getBgColorMode(),
                            s = !!e.isInverse(),
                            a = !!e.isInverse();
                        if (s) {
                            var l = r;
                            r = n, n = l;
                            var h = i;
                            i = o, o = h
                        }
                        var u = this._resolveBackgroundRgba(o, n, s),
                            f = this._resolveForegroundRgba(i, r, s, a),
                            _ = c.rgba.ensureContrastRatio(u, f, this._optionsService.options.minimumContrastRatio);
                        if (_) {
                            var d = {
                                css: c.channels.toCss(_ >> 24 & 255, _ >> 16 & 255, _ >> 8 & 255),
                                rgba: _
                            };
                            return this._colors.contrastCache.setColor(e.bg, e.fg, d), d
                        }
                        this._colors.contrastCache.setColor(e.bg, e.fg, null)
                    }
                }, e.prototype._resolveBackgroundRgba = function(e, t, r) {
                    switch (e) {
                        case 16777216:
                        case 33554432:
                            return this._colors.ansi[t].rgba;
                        case 50331648:
                            return t << 8;
                        case 0:
                        default:
                            return r ? this._colors.foreground.rgba : this._colors.background.rgba
                    }
                }, e.prototype._resolveForegroundRgba = function(e, t, r, i) {
                    switch (e) {
                        case 16777216:
                        case 33554432:
                            return this._optionsService.options.drawBoldTextInBrightColors && i && t < 8 && (t += 8), this._colors.ansi[t].rgba;
                        case 50331648:
                            return t << 8;
                        case 0:
                        default:
                            return r ? this._colors.background.rgba : this._colors.foreground.rgba
                    }
                }, e
            }();
        t.BaseRenderLayer = l
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "di$target",
            n = "di$dependencies";

        function o(e, t, r) {
            t[i] === t ? t[n].push({
                id: e,
                index: r
            }) : (t[n] = [{
                id: e,
                index: r
            }], t[i] = t)
        }
        t.serviceRegistry = new Map, t.getServiceDependencies = function(e) {
            return e[n] || []
        }, t.createDecorator = function(e) {
            if (t.serviceRegistry.has(e)) return t.serviceRegistry.get(e);
            var r = function(e, t, i) {
                if (3 !== arguments.length) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
                o(r, e, i)
            };
            return r.toString = function() {
                return e
            }, t.serviceRegistry.set(e, r), r
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
        var i = r(7),
            n = r(3),
            o = r(5),
            s = r(6),
            a = 3;
        t.DEFAULT_ATTR_DATA = Object.freeze(new s.AttributeData);
        var c = function() {
            function e(e, t, r) {
                void 0 === r && (r = !1), this.isWrapped = r, this._combined = {}, this._data = new Uint32Array(e * a);
                for (var i = t || o.CellData.fromCharData([0, n.NULL_CELL_CHAR, n.NULL_CELL_WIDTH, n.NULL_CELL_CODE]), s = 0; s < e; ++s) this.setCell(s, i);
                this.length = e
            }
            return e.prototype.get = function(e) {
                var t = this._data[e * a + 0],
                    r = 2097151 & t;
                return [this._data[e * a + 1], 2097152 & t ? this._combined[e] : r ? i.stringFromCodePoint(r) : "", t >> 22, 2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : r]
            }, e.prototype.set = function(e, t) {
                this._data[e * a + 1] = t[n.CHAR_DATA_ATTR_INDEX], t[n.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e] = t[1], this._data[e * a + 0] = 2097152 | e | t[n.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[e * a + 0] = t[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t[n.CHAR_DATA_WIDTH_INDEX] << 22
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
                return 2097152 & t ? this._combined[e] : 2097151 & t ? i.stringFromCodePoint(2097151 & t) : ""
            }, e.prototype.loadCell = function(e, t) {
                var r = e * a;
                return t.content = this._data[r + 0], t.fg = this._data[r + 1], t.bg = this._data[r + 2], 2097152 & t.content && (t.combinedData = this._combined[e]), t
            }, e.prototype.setCell = function(e, t) {
                2097152 & t.content && (this._combined[e] = t.combinedData), this._data[e * a + 0] = t.content, this._data[e * a + 1] = t.fg, this._data[e * a + 2] = t.bg
            }, e.prototype.setCellFromCodePoint = function(e, t, r, i, n) {
                this._data[e * a + 0] = t | r << 22, this._data[e * a + 1] = i, this._data[e * a + 2] = n
            }, e.prototype.addCodepointToCell = function(e, t) {
                var r = this._data[e * a + 0];
                2097152 & r ? this._combined[e] += i.stringFromCodePoint(t) : (2097151 & r ? (this._combined[e] = i.stringFromCodePoint(2097151 & r) + i.stringFromCodePoint(t), r &= -2097152, r |= 2097152) : r = t | 1 << 22, this._data[e * a + 0] = r)
            }, e.prototype.insertCells = function(e, t, r, i) {
                var n, s, a, c;
                if ((e %= this.length) && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null === (n = i) || void 0 === n ? void 0 : n.fg) || 0, (null === (s = i) || void 0 === s ? void 0 : s.bg) || 0), t < this.length - e) {
                    for (var l = new o.CellData, h = this.length - e - t - 1; h >= 0; --h) this.setCell(e + t + h, this.loadCell(e + h, l));
                    for (h = 0; h < t; ++h) this.setCell(e + h, r)
                } else
                    for (h = e; h < this.length; ++h) this.setCell(h, r);
                2 === this.getWidth(this.length - 1) && this.setCellFromCodePoint(this.length - 1, 0, 1, (null === (a = i) || void 0 === a ? void 0 : a.fg) || 0, (null === (c = i) || void 0 === c ? void 0 : c.bg) || 0)
            }, e.prototype.deleteCells = function(e, t, r, i) {
                var n, s, a, c;
                if (e %= this.length, t < this.length - e) {
                    for (var l = new o.CellData, h = 0; h < this.length - e - t; ++h) this.setCell(e + h, this.loadCell(e + t + h, l));
                    for (h = this.length - t; h < this.length; ++h) this.setCell(h, r)
                } else
                    for (h = e; h < this.length; ++h) this.setCell(h, r);
                e && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null === (n = i) || void 0 === n ? void 0 : n.fg) || 0, (null === (s = i) || void 0 === s ? void 0 : s.bg) || 0), 0 !== this.getWidth(e) || this.hasContent(e) || this.setCellFromCodePoint(e, 0, 1, (null === (a = i) || void 0 === a ? void 0 : a.fg) || 0, (null === (c = i) || void 0 === c ? void 0 : c.bg) || 0)
            }, e.prototype.replaceCells = function(e, t, r, i) {
                var n, o, s, a;
                for (e && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null === (n = i) || void 0 === n ? void 0 : n.fg) || 0, (null === (o = i) || void 0 === o ? void 0 : o.bg) || 0), t < this.length && 2 === this.getWidth(t - 1) && this.setCellFromCodePoint(t, 0, 1, (null === (s = i) || void 0 === s ? void 0 : s.fg) || 0, (null === (a = i) || void 0 === a ? void 0 : a.bg) || 0); e < t && e < this.length;) this.setCell(e++, r)
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
                        for (var c = 0; c < a; c++) this._data[(r + s) * a + c] = o[(t + s) * a + c];
                else
                    for (s = 0; s < i; s++)
                        for (c = 0; c < a; c++) this._data[(r + s) * a + c] = o[(t + s) * a + c];
                var l = Object.keys(e._combined);
                for (c = 0; c < l.length; c++) {
                    var h = parseInt(l[c], 10);
                    h >= t && (this._combined[h - t + r] = e._combined[h])
                }
            }, e.prototype.translateToString = function(e, t, r) {
                void 0 === e && (e = !1), void 0 === t && (t = 0), void 0 === r && (r = this.length), e && (r = Math.min(r, this.getTrimmedLength()));
                for (var o = ""; t < r;) {
                    var s = this._data[t * a + 0],
                        c = 2097151 & s;
                    o += 2097152 & s ? this._combined[t] : c ? i.stringFromCodePoint(c) : n.WHITESPACE_CELL_CHAR, t += s >> 22 || 1
                }
                return o
            }, e
        }();
        t.BufferLine = c
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.promptLabel = "Terminal input", t.tooMuchOutput = "Too much output to announce, navigate to rows manually to read"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CHARSETS = {}, t.DEFAULT_CHARSET = t.CHARSETS.B, t.CHARSETS[0] = {
            "`": "◆",
            a: "▒",
            b: "␉",
            c: "␌",
            d: "␍",
            e: "␊",
            f: "°",
            g: "±",
            h: "␤",
            i: "␋",
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = 256,
            n = function() {
                function e(e, t) {
                    if (void 0 === e && (e = 32), void 0 === t && (t = 32), this.maxLength = e, this.maxSubParamsLength = t, t > i) throw new Error("maxSubParamsLength must not be greater than 256");
                    this.params = new Int32Array(e), this.length = 0, this._subParams = new Int32Array(t), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e), this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1
                }
                return e.fromArray = function(t) {
                    var r = new e;
                    if (!t.length) return r;
                    for (var i = t[0] instanceof Array ? 1 : 0; i < t.length; ++i) {
                        var n = t[i];
                        if (n instanceof Array)
                            for (var o = 0; o < n.length; ++o) r.addSubParam(n[o]);
                        else r.addParam(n)
                    }
                    return r
                }, e.prototype.clone = function() {
                    var t = new e(this.maxLength, this.maxSubParamsLength);
                    return t.params.set(this.params), t.length = this.length, t._subParams.set(this._subParams), t._subParamsLength = this._subParamsLength, t._subParamsIdx.set(this._subParamsIdx), t._rejectDigits = this._rejectDigits, t._rejectSubDigits = this._rejectSubDigits, t._digitIsSub = this._digitIsSub, t
                }, e.prototype.toArray = function() {
                    for (var e = [], t = 0; t < this.length; ++t) {
                        e.push(this.params[t]);
                        var r = this._subParamsIdx[t] >> 8,
                            i = 255 & this._subParamsIdx[t];
                        i - r > 0 && e.push(Array.prototype.slice.call(this._subParams, r, i))
                    }
                    return e
                }, e.prototype.reset = function() {
                    this.length = 0, this._subParamsLength = 0, this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1
                }, e.prototype.addParam = function(e) {
                    if (this._digitIsSub = !1, this.length >= this.maxLength) this._rejectDigits = !0;
                    else {
                        if (e < -1) throw new Error("values lesser than -1 are not allowed");
                        this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e > 2147483647 ? 2147483647 : e
                    }
                }, e.prototype.addSubParam = function(e) {
                    if (this._digitIsSub = !0, this.length)
                        if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) this._rejectSubDigits = !0;
                        else {
                            if (e < -1) throw new Error("values lesser than -1 are not allowed");
                            this._subParams[this._subParamsLength++] = e > 2147483647 ? 2147483647 : e, this._subParamsIdx[this.length - 1]++
                        }
                }, e.prototype.hasSubParams = function(e) {
                    return (255 & this._subParamsIdx[e]) - (this._subParamsIdx[e] >> 8) > 0
                }, e.prototype.getSubParams = function(e) {
                    var t = this._subParamsIdx[e] >> 8,
                        r = 255 & this._subParamsIdx[e];
                    return r - t > 0 ? this._subParams.subarray(t, r) : null
                }, e.prototype.getSubParamsAll = function() {
                    for (var e = {}, t = 0; t < this.length; ++t) {
                        var r = this._subParamsIdx[t] >> 8,
                            i = 255 & this._subParamsIdx[t];
                        i - r > 0 && (e[t] = this._subParams.slice(r, i))
                    }
                    return e
                }, e.prototype.addDigit = function(e) {
                    var t;
                    if (!(this._rejectDigits || !(t = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)) {
                        var r = this._digitIsSub ? this._subParams : this.params,
                            i = r[t - 1];
                        r[t - 1] = ~i ? Math.min(10 * i + e, 2147483647) : e
                    }
                }, e
            }();
        t.Params = n
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(21),
            n = r(7),
            o = function() {
                function e() {
                    this._state = 0, this._id = -1, this._handlers = Object.create(null), this._handlerFb = function() {}
                }
                return e.prototype.addHandler = function(e, t) {
                    void 0 === this._handlers[e] && (this._handlers[e] = []);
                    var r = this._handlers[e];
                    return r.push(t), {
                        dispose: function() {
                            var e = r.indexOf(t); - 1 !== e && r.splice(e, 1)
                        }
                    }
                }, e.prototype.setHandler = function(e, t) {
                    this._handlers[e] = [t]
                }, e.prototype.clearHandler = function(e) {
                    this._handlers[e] && delete this._handlers[e]
                }, e.prototype.setHandlerFallback = function(e) {
                    this._handlerFb = e
                }, e.prototype.dispose = function() {
                    this._handlers = Object.create(null), this._handlerFb = function() {}
                }, e.prototype.reset = function() {
                    2 === this._state && this.end(!1), this._id = -1, this._state = 0
                }, e.prototype._start = function() {
                    var e = this._handlers[this._id];
                    if (e)
                        for (var t = e.length - 1; t >= 0; t--) e[t].start();
                    else this._handlerFb(this._id, "START")
                }, e.prototype._put = function(e, t, r) {
                    var i = this._handlers[this._id];
                    if (i)
                        for (var o = i.length - 1; o >= 0; o--) i[o].put(e, t, r);
                    else this._handlerFb(this._id, "PUT", n.utf32ToString(e, t, r))
                }, e.prototype._end = function(e) {
                    var t = this._handlers[this._id];
                    if (t) {
                        for (var r = t.length - 1; r >= 0 && !1 === t[r].end(e); r--);
                        for (r--; r >= 0; r--) t[r].end(!1)
                    } else this._handlerFb(this._id, "END", e)
                }, e.prototype.start = function() {
                    this.reset(), this._id = -1, this._state = 1
                }, e.prototype.put = function(e, t, r) {
                    if (3 !== this._state) {
                        if (1 === this._state)
                            for (; t < r;) {
                                var i = e[t++];
                                if (59 === i) {
                                    this._state = 2, this._start();
                                    break
                                }
                                if (i < 48 || 57 < i) return void(this._state = 3); - 1 === this._id && (this._id = 0), this._id = 10 * this._id + i - 48
                            }
                        2 === this._state && r - t > 0 && this._put(e, t, r)
                    }
                }, e.prototype.end = function(e) {
                    0 !== this._state && (3 !== this._state && (1 === this._state && this._start(), this._end(e)), this._id = -1, this._state = 0)
                }, e
            }();
        t.OscParser = o;
        var s = function() {
            function e(e) {
                this._handler = e, this._data = "", this._hitLimit = !1
            }
            return e.prototype.start = function() {
                this._data = "", this._hitLimit = !1
            }, e.prototype.put = function(e, t, r) {
                this._hitLimit || (this._data += n.utf32ToString(e, t, r), this._data.length > i.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0))
            }, e.prototype.end = function(e) {
                var t;
                return this._hitLimit ? t = !1 : e && (t = this._handler(this._data)), this._data = "", this._hitLimit = !1, t
            }, e
        }();
        t.OscHandler = s
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PAYLOAD_LIMIT = 1e7
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(7),
            n = r(19),
            o = r(21),
            s = [],
            a = function() {
                function e() {
                    this._handlers = Object.create(null), this._active = s, this._ident = 0, this._handlerFb = function() {}
                }
                return e.prototype.dispose = function() {
                    this._handlers = Object.create(null), this._handlerFb = function() {}
                }, e.prototype.addHandler = function(e, t) {
                    void 0 === this._handlers[e] && (this._handlers[e] = []);
                    var r = this._handlers[e];
                    return r.push(t), {
                        dispose: function() {
                            var e = r.indexOf(t); - 1 !== e && r.splice(e, 1)
                        }
                    }
                }, e.prototype.setHandler = function(e, t) {
                    this._handlers[e] = [t]
                }, e.prototype.clearHandler = function(e) {
                    this._handlers[e] && delete this._handlers[e]
                }, e.prototype.setHandlerFallback = function(e) {
                    this._handlerFb = e
                }, e.prototype.reset = function() {
                    this._active.length && this.unhook(!1), this._active = s, this._ident = 0
                }, e.prototype.hook = function(e, t) {
                    if (this.reset(), this._ident = e, this._active = this._handlers[e] || s, this._active.length)
                        for (var r = this._active.length - 1; r >= 0; r--) this._active[r].hook(t);
                    else this._handlerFb(this._ident, "HOOK", t)
                }, e.prototype.put = function(e, t, r) {
                    if (this._active.length)
                        for (var n = this._active.length - 1; n >= 0; n--) this._active[n].put(e, t, r);
                    else this._handlerFb(this._ident, "PUT", i.utf32ToString(e, t, r))
                }, e.prototype.unhook = function(e) {
                    if (this._active.length) {
                        for (var t = this._active.length - 1; t >= 0 && !1 === this._active[t].unhook(e); t--);
                        for (t--; t >= 0; t--) this._active[t].unhook(!1)
                    } else this._handlerFb(this._ident, "UNHOOK", e);
                    this._active = s, this._ident = 0
                }, e
            }();
        t.DcsParser = a;
        var c = function() {
            function e(e) {
                this._handler = e, this._data = "", this._hitLimit = !1
            }
            return e.prototype.hook = function(e) {
                this._params = e.clone(), this._data = "", this._hitLimit = !1
            }, e.prototype.put = function(e, t, r) {
                this._hitLimit || (this._data += i.utf32ToString(e, t, r), this._data.length > o.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0))
            }, e.prototype.unhook = function(e) {
                var t;
                return this._hitLimit ? t = !1 : e && (t = this._handler(this._data, this._params ? this._params : new n.Params)), this._params = void 0, this._data = "", this._hitLimit = !1, t
            }, e
        }();
        t.DcsHandler = c
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(24),
            n = r(42),
            o = [];
        t.acquireCharAtlas = function(e, t, r, s, a) {
            for (var c = i.generateConfig(s, a, e, r), l = 0; l < o.length; l++) {
                var h = (u = o[l]).ownedBy.indexOf(t);
                if (h >= 0) {
                    if (i.configEquals(u.config, c)) return u.atlas;
                    1 === u.ownedBy.length ? (u.atlas.dispose(), o.splice(l, 1)) : u.ownedBy.splice(h, 1);
                    break
                }
            }
            for (l = 0; l < o.length; l++) {
                var u = o[l];
                if (i.configEquals(u.config, c)) return u.ownedBy.push(t), u.atlas
            }
            var f = {
                atlas: new n.DynamicCharAtlas(document, c),
                config: c,
                ownedBy: [t]
            };
            return o.push(f), f.atlas
        }, t.removeTerminalFromCache = function(e) {
            for (var t = 0; t < o.length; t++) {
                var r = o[t].ownedBy.indexOf(e);
                if (-1 !== r) {
                    1 === o[t].ownedBy.length ? (o[t].atlas.dispose(), o.splice(t, 1)) : o[t].ownedBy.splice(r, 1);
                    break
                }
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(3);
        t.generateConfig = function(e, t, r, i) {
            var n = {
                foreground: i.foreground,
                background: i.background,
                cursor: void 0,
                cursorAccent: void 0,
                selection: void 0,
                ansi: i.ansi.slice(0, 16)
            };
            return {
                devicePixelRatio: window.devicePixelRatio,
                scaledCharWidth: e,
                scaledCharHeight: t,
                fontFamily: r.fontFamily,
                fontSize: r.fontSize,
                fontWeight: r.fontWeight,
                fontWeightBold: r.fontWeightBold,
                allowTransparency: r.allowTransparency,
                colors: n
            }
        }, t.configEquals = function(e, t) {
            for (var r = 0; r < e.colors.ansi.length; r++)
                if (e.colors.ansi[r].rgba !== t.colors.ansi[r].rgba) return !1;
            return e.devicePixelRatio === t.devicePixelRatio && e.fontFamily === t.fontFamily && e.fontSize === t.fontSize && e.fontWeight === t.fontWeight && e.fontWeightBold === t.fontWeightBold && e.allowTransparency === t.allowTransparency && e.scaledCharWidth === t.scaledCharWidth && e.scaledCharHeight === t.scaledCharHeight && e.colors.foreground === t.colors.foreground && e.colors.background === t.colors.background
        }, t.is256Color = function(e) {
            return e < i.DEFAULT_COLOR
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(10),
            n = r(44),
            o = i.css.toColor("#ffffff"),
            s = i.css.toColor("#000000"),
            a = i.css.toColor("#ffffff"),
            c = i.css.toColor("#000000"),
            l = {
                css: "rgba(255, 255, 255, 0.3)",
                rgba: 4294967117
            };
        t.DEFAULT_ANSI_COLORS = function() {
            for (var e = [i.css.toColor("#2e3436"), i.css.toColor("#cc0000"), i.css.toColor("#4e9a06"), i.css.toColor("#c4a000"), i.css.toColor("#3465a4"), i.css.toColor("#75507b"), i.css.toColor("#06989a"), i.css.toColor("#d3d7cf"), i.css.toColor("#555753"), i.css.toColor("#ef2929"), i.css.toColor("#8ae234"), i.css.toColor("#fce94f"), i.css.toColor("#729fcf"), i.css.toColor("#ad7fa8"), i.css.toColor("#34e2e2"), i.css.toColor("#eeeeec")], t = [0, 95, 135, 175, 215, 255], r = 0; r < 216; r++) {
                var n = t[r / 36 % 6 | 0],
                    o = t[r / 6 % 6 | 0],
                    s = t[r % 6];
                e.push({
                    css: i.channels.toCss(n, o, s),
                    rgba: i.channels.toRgba(n, o, s)
                })
            }
            for (r = 0; r < 24; r++) {
                var a = 8 + 10 * r;
                e.push({
                    css: i.channels.toCss(a, a, a),
                    rgba: i.channels.toRgba(a, a, a)
                })
            }
            return e
        }();
        var h = function() {
            function e(e, r) {
                this.allowTransparency = r;
                var h = e.createElement("canvas");
                h.width = 1, h.height = 1;
                var u = h.getContext("2d");
                if (!u) throw new Error("Could not get rendering context");
                this._ctx = u, this._ctx.globalCompositeOperation = "copy", this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1), this._contrastCache = new n.ColorContrastCache, this.colors = {
                    foreground: o,
                    background: s,
                    cursor: a,
                    cursorAccent: c,
                    selection: l,
                    selectionOpaque: i.color.blend(s, l),
                    ansi: t.DEFAULT_ANSI_COLORS.slice(),
                    contrastCache: this._contrastCache
                }
            }
            return e.prototype.onOptionsChange = function(e) {
                "minimumContrastRatio" === e && this._contrastCache.clear()
            }, e.prototype.setTheme = function(e) {
                void 0 === e && (e = {}), this.colors.foreground = this._parseColor(e.foreground, o), this.colors.background = this._parseColor(e.background, s), this.colors.cursor = this._parseColor(e.cursor, a, !0), this.colors.cursorAccent = this._parseColor(e.cursorAccent, c, !0), this.colors.selection = this._parseColor(e.selection, l, !0), this.colors.selectionOpaque = i.color.blend(this.colors.background, this.colors.selection), this.colors.ansi[0] = this._parseColor(e.black, t.DEFAULT_ANSI_COLORS[0]), this.colors.ansi[1] = this._parseColor(e.red, t.DEFAULT_ANSI_COLORS[1]), this.colors.ansi[2] = this._parseColor(e.green, t.DEFAULT_ANSI_COLORS[2]), this.colors.ansi[3] = this._parseColor(e.yellow, t.DEFAULT_ANSI_COLORS[3]), this.colors.ansi[4] = this._parseColor(e.blue, t.DEFAULT_ANSI_COLORS[4]), this.colors.ansi[5] = this._parseColor(e.magenta, t.DEFAULT_ANSI_COLORS[5]), this.colors.ansi[6] = this._parseColor(e.cyan, t.DEFAULT_ANSI_COLORS[6]), this.colors.ansi[7] = this._parseColor(e.white, t.DEFAULT_ANSI_COLORS[7]), this.colors.ansi[8] = this._parseColor(e.brightBlack, t.DEFAULT_ANSI_COLORS[8]), this.colors.ansi[9] = this._parseColor(e.brightRed, t.DEFAULT_ANSI_COLORS[9]), this.colors.ansi[10] = this._parseColor(e.brightGreen, t.DEFAULT_ANSI_COLORS[10]), this.colors.ansi[11] = this._parseColor(e.brightYellow, t.DEFAULT_ANSI_COLORS[11]), this.colors.ansi[12] = this._parseColor(e.brightBlue, t.DEFAULT_ANSI_COLORS[12]), this.colors.ansi[13] = this._parseColor(e.brightMagenta, t.DEFAULT_ANSI_COLORS[13]), this.colors.ansi[14] = this._parseColor(e.brightCyan, t.DEFAULT_ANSI_COLORS[14]), this.colors.ansi[15] = this._parseColor(e.brightWhite, t.DEFAULT_ANSI_COLORS[15]), this._contrastCache.clear()
            }, e.prototype._parseColor = function(e, t, r) {
                if (void 0 === r && (r = this.allowTransparency), void 0 === e) return t;
                if (this._ctx.fillStyle = this._litmusColor, this._ctx.fillStyle = e, "string" != typeof this._ctx.fillStyle) return console.warn("Color: " + e + " is invalid using fallback " + t.css), t;
                this._ctx.fillRect(0, 0, 1, 1);
                var n = this._ctx.getImageData(0, 0, 1, 1).data;
                if (255 !== n[3]) {
                    if (!r) return console.warn("Color: " + e + " is using transparency, but allowTransparency is false. Using fallback " + t.css + "."), t;
                    var o = this._ctx.fillStyle.substring(5, this._ctx.fillStyle.length - 1).split(",").map(function(e) {
                            return Number(e)
                        }),
                        s = o[0],
                        a = o[1],
                        c = o[2],
                        l = o[3],
                        h = Math.round(255 * l);
                    return {
                        rgba: i.channels.toRgba(s, a, c, h),
                        css: i.channels.toCss(s, a, c, h)
                    }
                }
                return {
                    css: this._ctx.fillStyle,
                    rgba: i.channels.toRgba(n[0], n[1], n[2], n[3])
                }
            }, e
        }();
        t.ColorManager = h
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.throwIfFalsy = function(e) {
            if (!e) throw new Error("value must not be falsy");
            return e
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
        var o = r(6),
            s = r(3),
            a = r(5),
            c = function(e) {
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
        t.JoinedCellData = c;
        var l = function() {
            function e(e) {
                this._bufferService = e, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new a.CellData
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
                var t = this._bufferService.buffer.lines.get(e);
                if (!t || 0 === t.length) return [];
                for (var r = [], i = t.translateToString(!0), n = 0, o = 0, a = 0, c = t.getFg(0), l = t.getBg(0), h = 0; h < t.getTrimmedLength(); h++)
                    if (t.loadCell(h, this._workCell), 0 !== this._workCell.getWidth()) {
                        if (this._workCell.fg !== c || this._workCell.bg !== l) {
                            if (h - n > 1)
                                for (var u = this._getJoinedRanges(i, a, o, t, n), f = 0; f < u.length; f++) r.push(u[f]);
                            n = h, a = o, c = this._workCell.fg, l = this._workCell.bg
                        }
                        o += this._workCell.getChars().length || s.WHITESPACE_CELL_CHAR.length
                    } if (this._bufferService.cols - n > 1)
                    for (u = this._getJoinedRanges(i, a, o, t, n), f = 0; f < u.length; f++) r.push(u[f]);
                return r
            }, e.prototype._getJoinedRanges = function(t, r, i, n, o) {
                for (var s = t.substring(r, i), a = this._characterJoiners[0].handler(s), c = 1; c < this._characterJoiners.length; c++)
                    for (var l = this._characterJoiners[c].handler(s), h = 0; h < l.length; h++) e._mergeRanges(a, l[h]);
                return this._stringRangesToCellRanges(a, n, o), a
            }, e.prototype._stringRangesToCellRanges = function(e, t, r) {
                var i = 0,
                    n = !1,
                    o = 0,
                    a = e[i];
                if (a) {
                    for (var c = r; c < this._bufferService.cols; c++) {
                        var l = t.getWidth(c),
                            h = t.getString(c).length || s.WHITESPACE_CELL_CHAR.length;
                        if (0 !== l) {
                            if (!n && a[0] <= o && (a[0] = c, n = !0), a[1] <= o) {
                                if (a[1] = c, !(a = e[++i])) break;
                                a[0] <= o ? (a[0] = c, n = !0) : n = !1
                            }
                            o += h
                        }
                    }
                    a && (a[1] = this._bufferService.cols)
                }
            }, e._mergeRanges = function(e, t) {
                for (var r = !1, i = 0; i < e.length; i++) {
                    var n = e[i];
                    if (r) {
                        if (t[1] <= n[0]) return e[i - 1][1] = t[1], e;
                        if (t[1] <= n[1]) return e[i - 1][1] = Math.max(t[1], n[1]), e.splice(i, 1), e;
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
        t.CharacterJoinerRegistry = l
    }, function(e, t, r) {
        "use strict";

        function i(e, t) {
            var r = t.getBoundingClientRect();
            return [e.clientX - r.left, e.clientY - r.top]
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getCoordsRelativeToElement = i, t.getCoords = function(e, t, r, n, o, s, a, c) {
            if (o) {
                var l = i(e, t);
                if (l) return l[0] = Math.ceil((l[0] + (c ? s / 2 : 0)) / s), l[1] = Math.ceil(l[1] / a), l[0] = Math.min(Math.max(l[0], 1), r + (c ? 1 : 0)), l[1] = Math.min(Math.max(l[1], 1), n), l
            }
        }, t.getRawByteCoords = function(e) {
            if (e) return {
                x: e[0] + 32,
                y: e[1] + 32
            }
        }
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.clone = function e(t, r) {
            if (void 0 === r && (r = 5), "object" != typeof t) return t;
            var i = Array.isArray(t) ? [] : {};
            for (var n in t) i[n] = r <= 1 ? t[n] : t[n] ? e(t[n], r - 1) : t[n];
            return i
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(5),
            n = r(33),
            o = r(17),
            s = r(80),
            a = function() {
                function e(e) {
                    this._core = new n.Terminal(e), this._addonManager = new s.AddonManager
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
                }), Object.defineProperty(e.prototype, "onBinary", {
                    get: function() {
                        return this._core.onBinary
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
                }), Object.defineProperty(e.prototype, "parser", {
                    get: function() {
                        return this._parser || (this._parser = new h(this._core)), this._parser
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "unicode", {
                    get: function() {
                        return new u(this._core)
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
                        return new c(this._core.buffer)
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
                }, e.prototype.resize = function(e, t) {
                    this._verifyIntegers(e, t), this._core.resize(e, t)
                }, e.prototype.open = function(e) {
                    this._core.open(e)
                }, e.prototype.attachCustomKeyEventHandler = function(e) {
                    this._core.attachCustomKeyEventHandler(e)
                }, e.prototype.registerLinkMatcher = function(e, t, r) {
                    return this._core.registerLinkMatcher(e, t, r)
                }, e.prototype.deregisterLinkMatcher = function(e) {
                    this._core.deregisterLinkMatcher(e)
                }, e.prototype.registerCharacterJoiner = function(e) {
                    return this._core.registerCharacterJoiner(e)
                }, e.prototype.deregisterCharacterJoiner = function(e) {
                    this._core.deregisterCharacterJoiner(e)
                }, e.prototype.registerMarker = function(e) {
                    return this._verifyIntegers(e), this._core.addMarker(e)
                }, e.prototype.addMarker = function(e) {
                    return this.registerMarker(e)
                }, e.prototype.hasSelection = function() {
                    return this._core.hasSelection()
                }, e.prototype.select = function(e, t, r) {
                    this._verifyIntegers(e, t, r), this._core.select(e, t, r)
                }, e.prototype.getSelection = function() {
                    return this._core.getSelection()
                }, e.prototype.getSelectionPosition = function() {
                    return this._core.getSelectionPosition()
                }, e.prototype.clearSelection = function() {
                    this._core.clearSelection()
                }, e.prototype.selectAll = function() {
                    this._core.selectAll()
                }, e.prototype.selectLines = function(e, t) {
                    this._verifyIntegers(e, t), this._core.selectLines(e, t)
                }, e.prototype.dispose = function() {
                    this._addonManager.dispose(), this._core.dispose()
                }, e.prototype.scrollLines = function(e) {
                    this._verifyIntegers(e), this._core.scrollLines(e)
                }, e.prototype.scrollPages = function(e) {
                    this._verifyIntegers(e), this._core.scrollPages(e)
                }, e.prototype.scrollToTop = function() {
                    this._core.scrollToTop()
                }, e.prototype.scrollToBottom = function() {
                    this._core.scrollToBottom()
                }, e.prototype.scrollToLine = function(e) {
                    this._verifyIntegers(e), this._core.scrollToLine(e)
                }, e.prototype.clear = function() {
                    this._core.clear()
                }, e.prototype.write = function(e, t) {
                    this._core.write(e, t)
                }, e.prototype.writeUtf8 = function(e, t) {
                    this._core.write(e, t)
                }, e.prototype.writeln = function(e, t) {
                    this._core.write(e), this._core.write("\r\n", t)
                }, e.prototype.paste = function(e) {
                    this._core.paste(e)
                }, e.prototype.getOption = function(e) {
                    return this._core.optionsService.getOption(e)
                }, e.prototype.setOption = function(e, t) {
                    this._core.optionsService.setOption(e, t)
                }, e.prototype.refresh = function(e, t) {
                    this._verifyIntegers(e, t), this._core.refresh(e, t)
                }, e.prototype.reset = function() {
                    this._core.reset()
                }, e.prototype.loadAddon = function(e) {
                    return this._addonManager.loadAddon(this, e)
                }, Object.defineProperty(e, "strings", {
                    get: function() {
                        return o
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._verifyIntegers = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    e.forEach(function(e) {
                        if (e === 1 / 0 || isNaN(e) || e % 1 != 0) throw new Error("This API only accepts integers")
                    })
                }, e
            }();
        t.Terminal = a;
        var c = function() {
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
                }, e.prototype.getNullCell = function() {
                    return new i.CellData
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
                }), Object.defineProperty(e.prototype, "length", {
                    get: function() {
                        return this._line.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getCell = function(e, t) {
                    if (!(e < 0 || e >= this._line.length)) return t ? (this._line.loadCell(e, t), t) : this._line.loadCell(e, new i.CellData)
                }, e.prototype.translateToString = function(e, t, r) {
                    return this._line.translateToString(e, t, r)
                }, e
            }(),
            h = function() {
                function e(e) {
                    this._core = e
                }
                return e.prototype.registerCsiHandler = function(e, t) {
                    return this._core.addCsiHandler(e, function(e) {
                        return t(e.toArray())
                    })
                }, e.prototype.addCsiHandler = function(e, t) {
                    return this.registerCsiHandler(e, t)
                }, e.prototype.registerDcsHandler = function(e, t) {
                    return this._core.addDcsHandler(e, function(e, r) {
                        return t(e, r.toArray())
                    })
                }, e.prototype.addDcsHandler = function(e, t) {
                    return this.registerDcsHandler(e, t)
                }, e.prototype.registerEscHandler = function(e, t) {
                    return this._core.addEscHandler(e, t)
                }, e.prototype.addEscHandler = function(e, t) {
                    return this.registerEscHandler(e, t)
                }, e.prototype.registerOscHandler = function(e, t) {
                    return this._core.addOscHandler(e, t)
                }, e.prototype.addOscHandler = function(e, t) {
                    return this.registerOscHandler(e, t)
                }, e
            }(),
            u = function() {
                function e(e) {
                    this._core = e
                }
                return e.prototype.register = function(e) {
                    this._core.unicodeService.register(e)
                }, Object.defineProperty(e.prototype, "versions", {
                    get: function() {
                        return this._core.unicodeService.versions
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "activeVersion", {
                    get: function() {
                        return this._core.unicodeService.activeVersion
                    },
                    set: function(e) {
                        this._core.unicodeService.activeVersion = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
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
        var o = r(34),
            s = r(35),
            a = r(36),
            c = r(12),
            l = r(37),
            h = r(39),
            u = r(49),
            f = r(50),
            _ = r(11),
            d = r(8),
            p = r(17),
            v = r(53),
            g = r(54),
            y = r(55),
            b = r(56),
            m = r(58),
            C = r(1),
            S = r(16),
            w = r(59),
            E = r(25),
            A = r(60),
            R = r(0),
            x = r(61),
            L = r(4),
            k = r(62),
            T = r(63),
            D = r(2),
            O = r(69),
            M = r(70),
            P = r(71),
            I = r(72),
            B = r(73),
            H = r(74),
            F = r(75),
            j = r(76),
            N = r(77),
            W = r(79),
            U = "undefined" != typeof window ? window.document : null,
            q = function(e) {
                function t(t) {
                    void 0 === t && (t = {});
                    var r = e.call(this) || this;
                    return r.browser = _, r.mouseEvents = 0, r._keyDownHandled = !1, r._blankLine = null, r._onCursorMove = new C.EventEmitter, r._onData = new C.EventEmitter, r._onBinary = new C.EventEmitter, r._onKey = new C.EventEmitter, r._onLineFeed = new C.EventEmitter, r._onRender = new C.EventEmitter, r._onResize = new C.EventEmitter, r._onScroll = new C.EventEmitter, r._onSelectionChange = new C.EventEmitter, r._onTitleChange = new C.EventEmitter, r._onFocus = new C.EventEmitter, r._onBlur = new C.EventEmitter, r.onA11yCharEmitter = new C.EventEmitter, r.onA11yTabEmitter = new C.EventEmitter, r._instantiationService = new B.InstantiationService, r.optionsService = new x.OptionsService(t), r._instantiationService.setService(R.IOptionsService, r.optionsService), r._bufferService = r._instantiationService.createInstance(T.BufferService), r._instantiationService.setService(R.IBufferService, r._bufferService), r._logService = r._instantiationService.createInstance(P.LogService), r._instantiationService.setService(R.ILogService, r._logService), r._coreService = r._instantiationService.createInstance(M.CoreService, function() {
                        return r.scrollToBottom()
                    }), r._instantiationService.setService(R.ICoreService, r._coreService), r._coreService.onData(function(e) {
                        return r._onData.fire(e)
                    }), r._coreService.onBinary(function(e) {
                        return r._onBinary.fire(e)
                    }), r._coreMouseService = r._instantiationService.createInstance(H.CoreMouseService), r._instantiationService.setService(R.ICoreMouseService, r._coreMouseService), r._dirtyRowService = r._instantiationService.createInstance(I.DirtyRowService), r._instantiationService.setService(R.IDirtyRowService, r._dirtyRowService), r.unicodeService = r._instantiationService.createInstance(N.UnicodeService), r._instantiationService.setService(R.IUnicodeService, r.unicodeService), r._charsetService = r._instantiationService.createInstance(W.CharsetService), r._instantiationService.setService(R.ICharsetService, r._charsetService), r._setupOptionsListeners(), r._setup(), r._writeBuffer = new F.WriteBuffer(function(e) {
                        return r._inputHandler.parse(e)
                    }), r
                }
                return n(t, e), Object.defineProperty(t.prototype, "options", {
                    get: function() {
                        return this.optionsService.options
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "cols", {
                    get: function() {
                        return this._bufferService.cols
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "rows", {
                    get: function() {
                        return this._bufferService.rows
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onCursorMove", {
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
                }), Object.defineProperty(t.prototype, "onBinary", {
                    get: function() {
                        return this._onBinary.event
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
                }), Object.defineProperty(t.prototype, "onFocus", {
                    get: function() {
                        return this._onFocus.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onBlur", {
                    get: function() {
                        return this._onBlur.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onA11yChar", {
                    get: function() {
                        return this.onA11yCharEmitter.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onA11yTab", {
                    get: function() {
                        return this.onA11yTabEmitter.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.dispose = function() {
                    var t, r, i, n;
                    this._isDisposed || (e.prototype.dispose.call(this), null === (t = this._windowsMode) || void 0 === t || t.dispose(), this._windowsMode = void 0, null === (r = this._renderService) || void 0 === r || r.dispose(), this._customKeyEventHandler = null, this.write = function() {}, null === (n = null === (i = this.element) || void 0 === i ? void 0 : i.parentNode) || void 0 === n || n.removeChild(this.element))
                }, t.prototype._setup = function() {
                    var e = this;
                    this._customKeyEventHandler = null, this.insertMode = !1, this.bracketedPasteMode = !1, this._userScrolling = !1, this._inputHandler ? this._inputHandler.reset() : (this._inputHandler = new l.InputHandler(this, this._bufferService, this._charsetService, this._coreService, this._dirtyRowService, this._logService, this.optionsService, this._coreMouseService, this.unicodeService, this._instantiationService), this._inputHandler.onRequestBell(function() {
                        return e.bell()
                    }), this._inputHandler.onRequestRefreshRows(function(t, r) {
                        return e.refresh(t, r)
                    }), this._inputHandler.onRequestReset(function() {
                        return e.reset()
                    }), this._inputHandler.onCursorMove(function() {
                        return e._onCursorMove.fire()
                    }), this._inputHandler.onLineFeed(function() {
                        return e._onLineFeed.fire()
                    }), this.register(this._inputHandler)), this.linkifier || (this.linkifier = new u.Linkifier(this._bufferService, this._logService, this.optionsService, this.unicodeService)), this.options.windowsMode && this._enableWindowsMode()
                }, t.prototype._enableWindowsMode = function() {
                    var e = this;
                    if (!this._windowsMode) {
                        var t = [];
                        t.push(this.onLineFeed(w.updateWindowsModeWrappedState.bind(null, this._bufferService))), t.push(this.addCsiHandler({
                            final: "H"
                        }, function() {
                            return w.updateWindowsModeWrappedState(e._bufferService), !1
                        })), this._windowsMode = {
                            dispose: function() {
                                t.forEach(function(e) {
                                    return e.dispose()
                                })
                            }
                        }
                    }
                }, Object.defineProperty(t.prototype, "buffer", {
                    get: function() {
                        return this.buffers.active
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "buffers", {
                    get: function() {
                        return this._bufferService.buffers
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.focus = function() {
                    this.textarea && this.textarea.focus({
                        preventScroll: !0
                    })
                }, t.prototype._setupOptionsListeners = function() {
                    var e = this;
                    this.optionsService.onOptionChange(function(t) {
                        var r, i, n, o, s;
                        switch (t) {
                            case "fontFamily":
                            case "fontSize":
                                null === (r = e._renderService) || void 0 === r || r.clear(), null === (i = e._charSizeService) || void 0 === i || i.measure();
                                break;
                            case "cursorBlink":
                            case "cursorStyle":
                                e.refresh(e.buffer.y, e.buffer.y);
                                break;
                            case "drawBoldTextInBrightColors":
                            case "letterSpacing":
                            case "lineHeight":
                            case "fontWeight":
                            case "fontWeightBold":
                            case "minimumContrastRatio":
                                e._renderService && (e._renderService.clear(), e._renderService.onResize(e.cols, e.rows), e.refresh(0, e.rows - 1));
                                break;
                            case "rendererType":
                                e._renderService && (e._renderService.setRenderer(e._createRenderer()), e._renderService.onResize(e.cols, e.rows));
                                break;
                            case "scrollback":
                                e.buffers.resize(e.cols, e.rows), null === (n = e.viewport) || void 0 === n || n.syncScrollArea();
                                break;
                            case "screenReaderMode":
                                e.optionsService.options.screenReaderMode ? !e._accessibilityManager && e._renderService && (e._accessibilityManager = new y.AccessibilityManager(e, e._renderService)) : (null === (o = e._accessibilityManager) || void 0 === o || o.dispose(), e._accessibilityManager = null);
                                break;
                            case "tabStopWidth":
                                e.buffers.setupTabStops();
                                break;
                            case "theme":
                                e._setTheme(e.optionsService.options.theme);
                                break;
                            case "windowsMode":
                                e.optionsService.options.windowsMode ? e._enableWindowsMode() : (null === (s = e._windowsMode) || void 0 === s || s.dispose(), e._windowsMode = void 0)
                        }
                    })
                }, t.prototype._onTextAreaFocus = function(e) {
                    this.sendFocus && this._coreService.triggerDataEvent(c.C0.ESC + "[I"), this.updateCursorStyle(e), this.element.classList.add("focus"), this.showCursor(), this._onFocus.fire()
                }, t.prototype.blur = function() {
                    return this.textarea.blur()
                }, t.prototype._onTextAreaBlur = function() {
                    this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.sendFocus && this._coreService.triggerDataEvent(c.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire()
                }, t.prototype._initGlobal = function() {
                    var e = this;
                    this._bindKeys(), this.register(d.addDisposableDomListener(this.element, "copy", function(t) {
                        e.hasSelection() && a.copyHandler(t, e._selectionService)
                    }));
                    var t = function(t) {
                        return a.handlePasteEvent(t, e.textarea, e.bracketedPasteMode, e._coreService)
                    };
                    this.register(d.addDisposableDomListener(this.textarea, "paste", t)), this.register(d.addDisposableDomListener(this.element, "paste", t)), _.isFirefox ? this.register(d.addDisposableDomListener(this.element, "mousedown", function(t) {
                        2 === t.button && a.rightClickHandler(t, e.textarea, e.screenElement, e._selectionService, e.options.rightClickSelectsWord)
                    })) : this.register(d.addDisposableDomListener(this.element, "contextmenu", function(t) {
                        a.rightClickHandler(t, e.textarea, e.screenElement, e._selectionService, e.options.rightClickSelectsWord)
                    })), _.isLinux && this.register(d.addDisposableDomListener(this.element, "auxclick", function(t) {
                        1 === t.button && a.moveTextAreaUnderMouseCursor(t, e.textarea, e.screenElement)
                    }))
                }, t.prototype._bindKeys = function() {
                    var e = this;
                    this.register(d.addDisposableDomListener(this.textarea, "keyup", function(t) {
                        return e._keyUp(t)
                    }, !0)), this.register(d.addDisposableDomListener(this.textarea, "keydown", function(t) {
                        return e._keyDown(t)
                    }, !0)), this.register(d.addDisposableDomListener(this.textarea, "keypress", function(t) {
                        return e._keyPress(t)
                    }, !0)), this.register(d.addDisposableDomListener(this.textarea, "compositionstart", function() {
                        return e._compositionHelper.compositionstart()
                    })), this.register(d.addDisposableDomListener(this.textarea, "compositionupdate", function(t) {
                        return e._compositionHelper.compositionupdate(t)
                    })), this.register(d.addDisposableDomListener(this.textarea, "compositionend", function() {
                        return e._compositionHelper.compositionend()
                    })), this.register(this.onRender(function() {
                        return e._compositionHelper.updateCompositionElements()
                    })), this.register(this.onRender(function(t) {
                        return e._queueLinkification(t.start, t.end)
                    }))
                }, t.prototype.open = function(e) {
                    var t = this;
                    if (!e) throw new Error("Terminal requires a parent element.");
                    U.body.contains(e) || this._logService.warn("Terminal.open was called on an element that was not attached to the DOM"), this._document = e.ownerDocument, this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), this.element.setAttribute("tabindex", "0"), e.appendChild(this.element);
                    var r = U.createDocumentFragment();
                    this._viewportElement = U.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), r.appendChild(this._viewportElement), this._viewportScrollArea = U.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = U.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._helperContainer = U.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), r.appendChild(this.screenElement), this.textarea = U.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", p.promptLabel), this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this.register(d.addDisposableDomListener(this.textarea, "focus", function(e) {
                        return t._onTextAreaFocus(e)
                    })), this.register(d.addDisposableDomListener(this.textarea, "blur", function() {
                        return t._onTextAreaBlur()
                    })), this._helperContainer.appendChild(this.textarea);
                    var i = this._instantiationService.createInstance(j.CoreBrowserService, this.textarea);
                    this._instantiationService.setService(L.ICoreBrowserService, i), this._charSizeService = this._instantiationService.createInstance(k.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(L.ICharSizeService, this._charSizeService), this._compositionView = U.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(o.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this.element.appendChild(r), this._theme = this.options.theme || this._theme, this.options.theme = void 0, this._colorManager = new E.ColorManager(U, this.options.allowTransparency), this.optionsService.onOptionChange(function(e) {
                        return t._colorManager.onOptionsChange(e)
                    }), this._colorManager.setTheme(this._theme);
                    var n = this._createRenderer();
                    this._renderService = this._instantiationService.createInstance(A.RenderService, n, this.rows, this.screenElement), this._instantiationService.setService(L.IRenderService, this._renderService), this._renderService.onRender(function(e) {
                        return t._onRender.fire(e)
                    }), this.onResize(function(e) {
                        return t._renderService.resize(e.cols, e.rows)
                    }), this._soundService = this._instantiationService.createInstance(v.SoundService), this._instantiationService.setService(L.ISoundService, this._soundService), this._mouseService = this._instantiationService.createInstance(O.MouseService), this._instantiationService.setService(L.IMouseService, this._mouseService), this.viewport = this._instantiationService.createInstance(s.Viewport, function(e, r) {
                        return t.scrollLines(e, r)
                    }, this._viewportElement, this._viewportScrollArea), this.viewport.onThemeChange(this._colorManager.colors), this.register(this.viewport), this.register(this.onCursorMove(function() {
                        return t._renderService.onCursorMove()
                    })), this.register(this.onResize(function() {
                        return t._renderService.onResize(t.cols, t.rows)
                    })), this.register(this.onBlur(function() {
                        return t._renderService.onBlur()
                    })), this.register(this.onFocus(function() {
                        return t._renderService.onFocus()
                    })), this.register(this._renderService.onDimensionsChange(function() {
                        return t.viewport.syncScrollArea()
                    })), this._selectionService = this._instantiationService.createInstance(f.SelectionService, function(e, r) {
                        return t.scrollLines(e, r)
                    }, this.element, this.screenElement), this._instantiationService.setService(L.ISelectionService, this._selectionService), this.register(this._selectionService.onSelectionChange(function() {
                        return t._onSelectionChange.fire()
                    })), this.register(this._selectionService.onRedrawRequest(function(e) {
                        return t._renderService.onSelectionChanged(e.start, e.end, e.columnSelectMode)
                    })), this.register(this._selectionService.onLinuxMouseSelection(function(e) {
                        t.textarea.value = e, t.textarea.focus(), t.textarea.select()
                    })), this.register(this.onScroll(function() {
                        t.viewport.syncScrollArea(), t._selectionService.refresh()
                    })), this.register(d.addDisposableDomListener(this._viewportElement, "scroll", function() {
                        return t._selectionService.refresh()
                    })), this._mouseZoneManager = this._instantiationService.createInstance(g.MouseZoneManager, this.element, this.screenElement), this.register(this._mouseZoneManager), this.register(this.onScroll(function() {
                        return t._mouseZoneManager.clearAll()
                    })), this.linkifier.attachToDom(this.element, this._mouseZoneManager), this.register(d.addDisposableDomListener(this.element, "mousedown", function(e) {
                        return t._selectionService.onMouseDown(e)
                    })), this.mouseEvents ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager = new y.AccessibilityManager(this, this._renderService)), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse()
                }, t.prototype._createRenderer = function() {
                    switch (this.options.rendererType) {
                        case "canvas":
                            return this._instantiationService.createInstance(h.Renderer, this._colorManager.colors, this.screenElement, this.linkifier);
                        case "dom":
                            return this._instantiationService.createInstance(b.DomRenderer, this._colorManager.colors, this.element, this.screenElement, this._viewportElement, this.linkifier);
                        default:
                            throw new Error('Unrecognized rendererType "' + this.options.rendererType + '"')
                    }
                }, t.prototype._setTheme = function(e) {
                    var t, r, i;
                    this._theme = e, null === (t = this._colorManager) || void 0 === t || t.setTheme(e), null === (r = this._renderService) || void 0 === r || r.setColors(this._colorManager.colors), null === (i = this.viewport) || void 0 === i || i.onThemeChange(this._colorManager.colors)
                }, t.prototype.bindMouse = function() {
                    var e = this,
                        t = this,
                        r = this.element;

                    function i(e) {
                        var r, i, n;
                        if (!(r = t._mouseService.getRawByteCoords(e, t.screenElement, t.cols, t.rows))) return !1;
                        switch (e.overrideType || e.type) {
                            case "mousemove":
                                n = 32, void 0 === e.buttons ? (i = 3, void 0 !== e.button && (i = e.button < 3 ? e.button : 3)) : i = 1 & e.buttons ? 0 : 4 & e.buttons ? 1 : 2 & e.buttons ? 2 : 3;
                                break;
                            case "mouseup":
                                n = 0, i = e.button < 3 ? e.button : 3;
                                break;
                            case "mousedown":
                                n = 1, i = e.button < 3 ? e.button : 3;
                                break;
                            case "wheel":
                                0 !== e.deltaY && (n = e.deltaY < 0 ? 0 : 1), i = 4;
                                break;
                            default:
                                return !1
                        }
                        return !(void 0 === n || void 0 === i || i > 4) && t._coreMouseService.triggerMouseEvent({
                            col: r.x - 33,
                            row: r.y - 33,
                            button: i,
                            action: n,
                            ctrl: e.ctrlKey,
                            alt: e.altKey,
                            shift: e.shiftKey
                        })
                    }
                    var n = {
                            mouseup: null,
                            wheel: null,
                            mousedrag: null,
                            mousemove: null
                        },
                        o = function(t) {
                            return i(t), t.buttons || (e._document.removeEventListener("mouseup", n.mouseup), n.mousedrag && e._document.removeEventListener("mousemove", n.mousedrag)), e.cancel(t)
                        },
                        s = function(t) {
                            return i(t), t.preventDefault(), e.cancel(t)
                        },
                        a = function(e) {
                            e.buttons && i(e)
                        },
                        l = function(e) {
                            e.buttons || i(e)
                        };
                    this._coreMouseService.onProtocolChange(function(t) {
                        e.mouseEvents = t, t ? ("debug" === e.optionsService.options.logLevel && e._logService.debug("Binding to mouse events:", e._coreMouseService.explainEvents(t)), e.element.classList.add("enable-mouse-events"), e._selectionService.disable()) : (e._logService.debug("Unbinding from mouse events."), e.element.classList.remove("enable-mouse-events"), e._selectionService.enable()), 8 & t ? n.mousemove || (r.addEventListener("mousemove", l), n.mousemove = l) : (r.removeEventListener("mousemove", n.mousemove), n.mousemove = null), 16 & t ? n.wheel || (r.addEventListener("wheel", s), n.wheel = s) : (r.removeEventListener("wheel", n.wheel), n.wheel = null), 2 & t ? n.mouseup || (n.mouseup = o) : (e._document.removeEventListener("mouseup", n.mouseup), n.mouseup = null), 4 & t ? n.mousedrag || (n.mousedrag = a) : (e._document.removeEventListener("mousemove", n.mousedrag), n.mousedrag = null)
                    }), this._coreMouseService.activeProtocol = this._coreMouseService.activeProtocol, this.register(d.addDisposableDomListener(r, "mousedown", function(t) {
                        if (t.preventDefault(), e.focus(), e.mouseEvents && !e._selectionService.shouldForceSelection(t)) return i(t), n.mouseup && e._document.addEventListener("mouseup", n.mouseup), n.mousedrag && e._document.addEventListener("mousemove", n.mousedrag), e.cancel(t)
                    })), this.register(d.addDisposableDomListener(r, "wheel", function(t) {
                        if (n.wheel);
                        else if (!e.buffer.hasScrollback) {
                            var r = e.viewport.getLinesScrolled(t);
                            if (0 === r) return;
                            for (var i = c.C0.ESC + (e._coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (t.deltaY < 0 ? "A" : "B"), o = "", s = 0; s < Math.abs(r); s++) o += i;
                            e._coreService.triggerDataEvent(o, !0)
                        }
                    })), this.register(d.addDisposableDomListener(r, "wheel", function(t) {
                        if (!n.wheel) return e.viewport.onWheel(t) ? void 0 : e.cancel(t)
                    })), this.register(d.addDisposableDomListener(r, "touchstart", function(t) {
                        if (!e.mouseEvents) return e.viewport.onTouchStart(t), e.cancel(t)
                    })), this.register(d.addDisposableDomListener(r, "touchmove", function(t) {
                        if (!e.mouseEvents) return e.viewport.onTouchMove(t) ? void 0 : e.cancel(t)
                    }))
                }, t.prototype.refresh = function(e, t) {
                    var r;
                    null === (r = this._renderService) || void 0 === r || r.refreshRows(e, t)
                }, t.prototype._queueLinkification = function(e, t) {
                    var r;
                    null === (r = this.linkifier) || void 0 === r || r.linkifyRows(e, t)
                }, t.prototype.updateCursorStyle = function(e) {
                    this._selectionService && this._selectionService.shouldColumnSelect(e) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select")
                }, t.prototype.showCursor = function() {
                    this._coreService.isCursorInitialized || (this._coreService.isCursorInitialized = !0, this.refresh(this.buffer.y, this.buffer.y))
                }, t.prototype.scroll = function(e, t) {
                    var r;
                    void 0 === t && (t = !1), (r = this._blankLine) && r.length === this.cols && r.getFg(0) === e.fg && r.getBg(0) === e.bg || (r = this.buffer.getBlankLine(e, t), this._blankLine = r), r.isWrapped = t;
                    var i = this.buffer.ybase + this.buffer.scrollTop,
                        n = this.buffer.ybase + this.buffer.scrollBottom;
                    if (0 === this.buffer.scrollTop) {
                        var o = this.buffer.lines.isFull;
                        n === this.buffer.lines.length - 1 ? o ? this.buffer.lines.recycle().copyFrom(r) : this.buffer.lines.push(r.clone()) : this.buffer.lines.splice(n + 1, 0, r.clone()), o ? this._userScrolling && (this.buffer.ydisp = Math.max(this.buffer.ydisp - 1, 0)) : (this.buffer.ybase++, this._userScrolling || this.buffer.ydisp++)
                    } else {
                        var s = n - i + 1;
                        this.buffer.lines.shiftElements(i + 1, s - 1, -1), this.buffer.lines.set(n, r.clone())
                    }
                    this._userScrolling || (this.buffer.ydisp = this.buffer.ybase), this._dirtyRowService.markRangeDirty(this.buffer.scrollTop, this.buffer.scrollBottom), this._onScroll.fire(this.buffer.ydisp)
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
                }, t.prototype.paste = function(e) {
                    a.paste(e, this.textarea, this.bracketedPasteMode, this._coreService)
                }, t.prototype.attachCustomKeyEventHandler = function(e) {
                    this._customKeyEventHandler = e
                }, t.prototype.addEscHandler = function(e, t) {
                    return this._inputHandler.addEscHandler(e, t)
                }, t.prototype.addDcsHandler = function(e, t) {
                    return this._inputHandler.addDcsHandler(e, t)
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
                    var t = this._renderService.registerCharacterJoiner(e);
                    return this.refresh(0, this.rows - 1), t
                }, t.prototype.deregisterCharacterJoiner = function(e) {
                    this._renderService.deregisterCharacterJoiner(e) && this.refresh(0, this.rows - 1)
                }, Object.defineProperty(t.prototype, "markers", {
                    get: function() {
                        return this.buffer.markers
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.addMarker = function(e) {
                    if (this.buffer === this.buffers.normal) return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e)
                }, t.prototype.hasSelection = function() {
                    return !!this._selectionService && this._selectionService.hasSelection
                }, t.prototype.select = function(e, t, r) {
                    this._selectionService.setSelection(e, t, r)
                }, t.prototype.getSelection = function() {
                    return this._selectionService ? this._selectionService.selectionText : ""
                }, t.prototype.getSelectionPosition = function() {
                    if (this._selectionService.hasSelection) return {
                        startColumn: this._selectionService.selectionStart[0],
                        startRow: this._selectionService.selectionStart[1],
                        endColumn: this._selectionService.selectionEnd[0],
                        endRow: this._selectionService.selectionEnd[1]
                    }
                }, t.prototype.clearSelection = function() {
                    var e;
                    null === (e = this._selectionService) || void 0 === e || e.clearSelection()
                }, t.prototype.selectAll = function() {
                    var e;
                    null === (e = this._selectionService) || void 0 === e || e.selectAll()
                }, t.prototype.selectLines = function(e, t) {
                    var r;
                    null === (r = this._selectionService) || void 0 === r || r.selectLines(e, t)
                }, t.prototype._keyDown = function(e) {
                    if (this._keyDownHandled = !1, this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                    if (!this._compositionHelper.keydown(e)) return this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), !1;
                    var t = m.evaluateKeyboardEvent(e, this._coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
                    if (this.updateCursorStyle(e), 3 === t.type || 2 === t.type) {
                        var r = this.rows - 1;
                        return this.scrollLines(2 === t.type ? -r : r), this.cancel(e, !0)
                    }
                    return 1 === t.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e) || (t.cancel && this.cancel(e, !0), !t.key || (t.key !== c.C0.ETX && t.key !== c.C0.CR || (this.textarea.value = ""), this._onKey.fire({
                        key: t.key,
                        domEvent: e
                    }), this.showCursor(), this._coreService.triggerDataEvent(t.key, !0), this.optionsService.options.screenReaderMode ? void(this._keyDownHandled = !0) : this.cancel(e, !0)))
                }, t.prototype._isThirdLevelShift = function(e, t) {
                    var r = e.isMac && !this.options.macOptionIsMeta && t.altKey && !t.ctrlKey && !t.metaKey || e.isWindows && t.altKey && t.ctrlKey && !t.metaKey;
                    return "keypress" === t.type ? r : r && (!t.keyCode || t.keyCode > 47)
                }, t.prototype._keyUp = function(e) {
                    this._customKeyEventHandler && !1 === this._customKeyEventHandler(e) || (function(e) {
                        return 16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode
                    }(e) || this.focus(), this.updateCursorStyle(e))
                }, t.prototype._keyPress = function(e) {
                    var t;
                    if (this._keyDownHandled) return !1;
                    if (this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                    if (this.cancel(e), e.charCode) t = e.charCode;
                    else if (null === e.which || void 0 === e.which) t = e.keyCode;
                    else {
                        if (0 === e.which || 0 === e.charCode) return !1;
                        t = e.which
                    }
                    return !(!t || (e.altKey || e.ctrlKey || e.metaKey) && !this._isThirdLevelShift(this.browser, e) || (t = String.fromCharCode(t), this._onKey.fire({
                        key: t,
                        domEvent: e
                    }), this.showCursor(), this._coreService.triggerDataEvent(t, !0), 0))
                }, t.prototype.bell = function() {
                    var e = this;
                    this._soundBell() && this._soundService.playBellSound(), this._visualBell() && (this.element.classList.add("visual-bell-active"), clearTimeout(this._visualBellTimer), this._visualBellTimer = window.setTimeout(function() {
                        e.element.classList.remove("visual-bell-active")
                    }, 200))
                }, t.prototype.resize = function(e, t) {
                    var r, i;
                    isNaN(e) || isNaN(t) || (e !== this.cols || t !== this.rows ? (e < T.MINIMUM_COLS && (e = T.MINIMUM_COLS), t < T.MINIMUM_ROWS && (t = T.MINIMUM_ROWS), this.buffers.resize(e, t), this._bufferService.resize(e, t), this.buffers.setupTabStops(this.cols), null === (r = this._charSizeService) || void 0 === r || r.measure(), null === (i = this.viewport) || void 0 === i || i.syncScrollArea(!0), this.refresh(0, this.rows - 1), this._onResize.fire({
                        cols: e,
                        rows: t
                    })) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure())
                }, t.prototype.clear = function() {
                    if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
                        this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
                        for (var e = 1; e < this.rows; e++) this.buffer.lines.push(this.buffer.getBlankLine(S.DEFAULT_ATTR_DATA));
                        this.refresh(0, this.rows - 1), this._onScroll.fire(this.buffer.ydisp)
                    }
                }, t.prototype.is = function(e) {
                    return 0 === (this.options.termName + "").indexOf(e)
                }, t.prototype.handleTitle = function(e) {
                    this._onTitleChange.fire(e)
                }, t.prototype.reset = function() {
                    var e, t;
                    this.options.rows = this.rows, this.options.cols = this.cols;
                    var r = this._customKeyEventHandler,
                        i = this._userScrolling;
                    this._setup(), this._bufferService.reset(), this._charsetService.reset(), this._coreService.reset(), this._coreMouseService.reset(), null === (e = this._selectionService) || void 0 === e || e.reset(), this._customKeyEventHandler = r, this._userScrolling = i, this.refresh(0, this.rows - 1), null === (t = this.viewport) || void 0 === t || t.syncScrollArea()
                }, t.prototype.cancel = function(e, t) {
                    if (this.options.cancelEvents || t) return e.preventDefault(), e.stopPropagation(), !1
                }, t.prototype._visualBell = function() {
                    return !1
                }, t.prototype._soundBell = function() {
                    return "sound" === this.options.bellStyle
                }, t.prototype.write = function(e, t) {
                    this._writeBuffer.write(e, t)
                }, t.prototype.writeSync = function(e) {
                    this._writeBuffer.writeSync(e)
                }, t
            }(D.Disposable);
        t.Terminal = q
    }, function(e, t, r) {
        "use strict";
        var i = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            n = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(4),
            s = r(0),
            a = function() {
                function e(e, t, r, i, n, o) {
                    this._textarea = e, this._compositionView = t, this._bufferService = r, this._optionsService = i, this._charSizeService = n, this._coreService = o, this._isComposing = !1, this._isSendingComposition = !1, this._compositionPosition = {
                        start: 0,
                        end: 0
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
                            var e;
                            t._isSendingComposition && (t._isSendingComposition = !1, e = t._isComposing ? t._textarea.value.substring(r.start, r.end) : t._textarea.value.substring(r.start), t._coreService.triggerDataEvent(e, !0))
                        }, 0)
                    } else {
                        this._isSendingComposition = !1;
                        var i = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                        this._coreService.triggerDataEvent(i, !0)
                    }
                }, e.prototype._handleAnyTextareaChanges = function() {
                    var e = this,
                        t = this._textarea.value;
                    setTimeout(function() {
                        if (!e._isComposing) {
                            var r = e._textarea.value.replace(t, "");
                            r.length > 0 && e._coreService.triggerDataEvent(r, !0)
                        }
                    }, 0)
                }, e.prototype.updateCompositionElements = function(e) {
                    var t = this;
                    if (this._isComposing) {
                        if (this._bufferService.buffer.isCursorInViewport) {
                            var r = Math.ceil(this._charSizeService.height * this._optionsService.options.lineHeight),
                                i = this._bufferService.buffer.y * r,
                                n = this._bufferService.buffer.x * this._charSizeService.width;
                            this._compositionView.style.left = n + "px", this._compositionView.style.top = i + "px", this._compositionView.style.height = r + "px", this._compositionView.style.lineHeight = r + "px", this._compositionView.style.fontFamily = this._optionsService.options.fontFamily, this._compositionView.style.fontSize = this._optionsService.options.fontSize + "px";
                            var o = this._compositionView.getBoundingClientRect();
                            this._textarea.style.left = n + "px", this._textarea.style.top = i + "px", this._textarea.style.width = o.width + "px", this._textarea.style.height = o.height + "px", this._textarea.style.lineHeight = o.height + "px"
                        }
                        e || setTimeout(function() {
                            return t.updateCompositionElements(!0)
                        }, 0)
                    }
                }, e.prototype._clearTextareaPosition = function() {
                    this._textarea.style.left = "", this._textarea.style.top = ""
                }, i([n(2, s.IBufferService), n(3, s.IOptionsService), n(4, o.ICharSizeService), n(5, s.ICoreService)], e)
            }();
        t.CompositionHelper = a
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
            }),
            o = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            s = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(2),
            c = r(8),
            l = r(4),
            h = r(0),
            u = 15,
            f = function(e) {
                function t(t, r, i, n, o, s, a) {
                    var l = e.call(this) || this;
                    return l._scrollLines = t, l._viewportElement = r, l._scrollArea = i, l._bufferService = n, l._optionsService = o, l._charSizeService = s, l._renderService = a, l.scrollBarWidth = 0, l._currentRowHeight = 0, l._lastRecordedBufferLength = 0, l._lastRecordedViewportHeight = 0, l._lastRecordedBufferHeight = 0, l._lastTouchY = 0, l._lastScrollTop = 0, l._wheelPartialScroll = 0, l._refreshAnimationFrame = null, l._ignoreNextScrollEvent = !1, l.scrollBarWidth = l._viewportElement.offsetWidth - l._scrollArea.offsetWidth || u, l.register(c.addDisposableDomListener(l._viewportElement, "scroll", l._onScroll.bind(l))), setTimeout(function() {
                        return l.syncScrollArea()
                    }, 0), l
                }
                return n(t, e), t.prototype.onThemeChange = function(e) {
                    this._viewportElement.style.backgroundColor = e.background.css
                }, t.prototype._refresh = function(e) {
                    var t = this;
                    if (e) return this._innerRefresh(), void(null !== this._refreshAnimationFrame && cancelAnimationFrame(this._refreshAnimationFrame));
                    null === this._refreshAnimationFrame && (this._refreshAnimationFrame = requestAnimationFrame(function() {
                        return t._innerRefresh()
                    }))
                }, t.prototype._innerRefresh = function() {
                    if (this._charSizeService.height > 0) {
                        this._currentRowHeight = this._renderService.dimensions.scaledCellHeight / window.devicePixelRatio, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                        var e = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderService.dimensions.canvasHeight);
                        this._lastRecordedBufferHeight !== e && (this._lastRecordedBufferHeight = e, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px")
                    }
                    var t = this._bufferService.buffer.ydisp * this._currentRowHeight;
                    this._viewportElement.scrollTop !== t && (this._ignoreNextScrollEvent = !0, this._viewportElement.scrollTop = t), this._refreshAnimationFrame = null
                }, t.prototype.syncScrollArea = function(e) {
                    if (void 0 === e && (e = !1), this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length) return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e);
                    if (this._lastRecordedViewportHeight === this._renderService.dimensions.canvasHeight) {
                        var t = this._bufferService.buffer.ydisp * this._currentRowHeight;
                        this._lastScrollTop === t && this._lastScrollTop === this._viewportElement.scrollTop && this._renderService.dimensions.scaledCellHeight / window.devicePixelRatio === this._currentRowHeight || this._refresh(e)
                    } else this._refresh(e)
                }, t.prototype._onScroll = function(e) {
                    if (this._lastScrollTop = this._viewportElement.scrollTop, this._viewportElement.offsetParent)
                        if (this._ignoreNextScrollEvent) this._ignoreNextScrollEvent = !1;
                        else {
                            var t = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
                            this._scrollLines(t, !0)
                        }
                }, t.prototype._bubbleScroll = function(e, t) {
                    var r = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
                    return !(t < 0 && 0 !== this._viewportElement.scrollTop || t > 0 && r < this._lastRecordedBufferHeight) || (e.cancelable && e.preventDefault(), !1)
                }, t.prototype.onWheel = function(e) {
                    var t = this._getPixelsScrolled(e);
                    return 0 !== t && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t))
                }, t.prototype._getPixelsScrolled = function(e) {
                    if (0 === e.deltaY) return 0;
                    var t = this._applyScrollModifier(e.deltaY, e);
                    return e.deltaMode === WheelEvent.DOM_DELTA_LINE ? t *= this._currentRowHeight : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._currentRowHeight * this._bufferService.rows), t
                }, t.prototype.getLinesScrolled = function(e) {
                    if (0 === e.deltaY) return 0;
                    var t = this._applyScrollModifier(e.deltaY, e);
                    return e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t /= this._currentRowHeight + 0, this._wheelPartialScroll += t, t = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._bufferService.rows), t
                }, t.prototype._applyScrollModifier = function(e, t) {
                    var r = this._optionsService.options.fastScrollModifier;
                    return "alt" === r && t.altKey || "ctrl" === r && t.ctrlKey || "shift" === r && t.shiftKey ? e * this._optionsService.options.fastScrollSensitivity * this._optionsService.options.scrollSensitivity : e * this._optionsService.options.scrollSensitivity
                }, t.prototype.onTouchStart = function(e) {
                    this._lastTouchY = e.touches[0].pageY
                }, t.prototype.onTouchMove = function(e) {
                    var t = this._lastTouchY - e.touches[0].pageY;
                    return this._lastTouchY = e.touches[0].pageY, 0 !== t && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t))
                }, o([s(3, h.IBufferService), s(4, h.IOptionsService), s(5, l.ICharSizeService), s(6, l.IRenderService)], t)
            }(a.Disposable);
        t.Viewport = f
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return e.replace(/\r?\n/g, "\r")
        }

        function n(e, t) {
            return t ? "[200~" + e + "[201~" : e
        }

        function o(e, t, r, o) {
            e = n(e = i(e), r), o.triggerDataEvent(e, !0), t.value = ""
        }

        function s(e, t, r) {
            var i = r.getBoundingClientRect(),
                n = e.clientX - i.left - 10,
                o = e.clientY - i.top - 10;
            t.style.position = "absolute", t.style.width = "20px", t.style.height = "20px", t.style.left = n + "px", t.style.top = o + "px", t.style.zIndex = "1000", t.focus(), setTimeout(function() {
                t.style.position = "", t.style.width = "", t.style.height = "", t.style.left = "", t.style.top = "", t.style.zIndex = ""
            }, 200)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.prepareTextForTerminal = i, t.bracketTextForPaste = n, t.copyHandler = function(e, t) {
            e.clipboardData && e.clipboardData.setData("text/plain", t.selectionText), e.preventDefault()
        }, t.handlePasteEvent = function(e, t, r, i) {
            e.stopPropagation(), e.clipboardData && o(e.clipboardData.getData("text/plain"), t, r, i)
        }, t.paste = o, t.moveTextAreaUnderMouseCursor = s, t.rightClickHandler = function(e, t, r, i, n) {
            s(e, t, r), n && !i.isClickInSelection(e) && i.selectWordAtCursor(e), t.value = i.selectionText, t.select()
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
            s = r(18),
            a = r(38),
            c = r(2),
            l = r(15),
            h = r(7),
            u = r(16),
            f = r(1),
            _ = r(3),
            d = r(5),
            p = r(6),
            v = r(20),
            g = r(22),
            y = r(4),
            b = {
                "(": 0,
                ")": 1,
                "*": 2,
                "+": 3,
                "-": 1,
                ".": 2
            };

        function m(e, t) {
            if (e > 24) return t.setWinLines || !1;
            switch (e) {
                case 1:
                    return !!t.restoreWin;
                case 2:
                    return !!t.minimizeWin;
                case 3:
                    return !!t.setWinPosition;
                case 4:
                    return !!t.setWinSizePixels;
                case 5:
                    return !!t.raiseWin;
                case 6:
                    return !!t.lowerWin;
                case 7:
                    return !!t.refreshWin;
                case 8:
                    return !!t.setWinSizeChars;
                case 9:
                    return !!t.maximizeWin;
                case 10:
                    return !!t.fullscreenWin;
                case 11:
                    return !!t.getWinState;
                case 13:
                    return !!t.getWinPosition;
                case 14:
                    return !!t.getWinSizePixels;
                case 15:
                    return !!t.getScreenSizePixels;
                case 16:
                    return !!t.getCellSizePixels;
                case 18:
                    return !!t.getWinSizeChars;
                case 19:
                    return !!t.getScreenSizeChars;
                case 20:
                    return !!t.getIconTitle;
                case 21:
                    return !!t.getWinTitle;
                case 22:
                    return !!t.pushTitle;
                case 23:
                    return !!t.popTitle;
                case 24:
                    return !!t.setWinLines
            }
            return !1
        }
        var C = function() {
                function e(e, t, r, i) {
                    this._bufferService = e, this._coreService = t, this._logService = r, this._optionsService = i, this._data = new Uint32Array(0)
                }
                return e.prototype.hook = function(e) {
                    this._data = new Uint32Array(0)
                }, e.prototype.put = function(e, t, r) {
                    this._data = l.concat(this._data, e.subarray(t, r))
                }, e.prototype.unhook = function(e) {
                    if (e) {
                        var t = h.utf32ToString(this._data);
                        switch (this._data = new Uint32Array(0), t) {
                            case '"q':
                                return this._coreService.triggerDataEvent(o.C0.ESC + 'P1$r0"q' + o.C0.ESC + "\\");
                            case '"p':
                                return this._coreService.triggerDataEvent(o.C0.ESC + 'P1$r61;1"p' + o.C0.ESC + "\\");
                            case "r":
                                var r = this._bufferService.buffer.scrollTop + 1 + ";" + (this._bufferService.buffer.scrollBottom + 1) + "r";
                                return this._coreService.triggerDataEvent(o.C0.ESC + "P1$r" + r + o.C0.ESC + "\\");
                            case "m":
                                return this._coreService.triggerDataEvent(o.C0.ESC + "P1$r0m" + o.C0.ESC + "\\");
                            case " q":
                                var i = {
                                    block: 2,
                                    underline: 4,
                                    bar: 6
                                } [this._optionsService.options.cursorStyle];
                                return i -= this._optionsService.options.cursorBlink ? 1 : 0, this._coreService.triggerDataEvent(o.C0.ESC + "P1$r" + i + " q" + o.C0.ESC + "\\");
                            default:
                                this._logService.debug("Unknown DCS $q %s", t), this._coreService.triggerDataEvent(o.C0.ESC + "P0$r" + o.C0.ESC + "\\")
                        }
                    } else this._data = new Uint32Array(0)
                }, e
            }(),
            S = function(e) {
                function t(t, r, i, n, c, l, _, p, g, y, b) {
                    void 0 === b && (b = new a.EscapeSequenceParser);
                    var m = e.call(this) || this;
                    m._terminal = t, m._bufferService = r, m._charsetService = i, m._coreService = n, m._dirtyRowService = c, m._logService = l, m._optionsService = _, m._coreMouseService = p, m._unicodeService = g, m._instantiationService = y, m._parser = b, m._parseBuffer = new Uint32Array(4096), m._stringDecoder = new h.StringToUtf32, m._utf8Decoder = new h.Utf8ToUtf32, m._workCell = new d.CellData, m._windowTitle = "", m._iconName = "", m._windowTitleStack = [], m._iconNameStack = [], m._curAttrData = u.DEFAULT_ATTR_DATA.clone(), m._eraseAttrDataInternal = u.DEFAULT_ATTR_DATA.clone(), m._onRequestRefreshRows = new f.EventEmitter, m._onRequestReset = new f.EventEmitter, m._onRequestBell = new f.EventEmitter, m._onCursorMove = new f.EventEmitter, m._onLineFeed = new f.EventEmitter, m._onScroll = new f.EventEmitter, m.register(m._parser), m._parser.setCsiHandlerFallback(function(e, t) {
                        m._logService.debug("Unknown CSI code: ", {
                            identifier: m._parser.identToString(e),
                            params: t.toArray()
                        })
                    }), m._parser.setEscHandlerFallback(function(e) {
                        m._logService.debug("Unknown ESC code: ", {
                            identifier: m._parser.identToString(e)
                        })
                    }), m._parser.setExecuteHandlerFallback(function(e) {
                        m._logService.debug("Unknown EXECUTE code: ", {
                            code: e
                        })
                    }), m._parser.setOscHandlerFallback(function(e, t, r) {
                        m._logService.debug("Unknown OSC code: ", {
                            identifier: e,
                            action: t,
                            data: r
                        })
                    }), m._parser.setDcsHandlerFallback(function(e, t, r) {
                        "HOOK" === t && (r = r.toArray()), m._logService.debug("Unknown DCS code: ", {
                            identifier: m._parser.identToString(e),
                            action: t,
                            payload: r
                        })
                    }), m._parser.setPrintHandler(function(e, t, r) {
                        return m.print(e, t, r)
                    }), m._parser.setCsiHandler({
                        final: "@"
                    }, function(e) {
                        return m.insertChars(e)
                    }), m._parser.setCsiHandler({
                        intermediates: " ",
                        final: "@"
                    }, function(e) {
                        return m.scrollLeft(e)
                    }), m._parser.setCsiHandler({
                        final: "A"
                    }, function(e) {
                        return m.cursorUp(e)
                    }), m._parser.setCsiHandler({
                        intermediates: " ",
                        final: "A"
                    }, function(e) {
                        return m.scrollRight(e)
                    }), m._parser.setCsiHandler({
                        final: "B"
                    }, function(e) {
                        return m.cursorDown(e)
                    }), m._parser.setCsiHandler({
                        final: "C"
                    }, function(e) {
                        return m.cursorForward(e)
                    }), m._parser.setCsiHandler({
                        final: "D"
                    }, function(e) {
                        return m.cursorBackward(e)
                    }), m._parser.setCsiHandler({
                        final: "E"
                    }, function(e) {
                        return m.cursorNextLine(e)
                    }), m._parser.setCsiHandler({
                        final: "F"
                    }, function(e) {
                        return m.cursorPrecedingLine(e)
                    }), m._parser.setCsiHandler({
                        final: "G"
                    }, function(e) {
                        return m.cursorCharAbsolute(e)
                    }), m._parser.setCsiHandler({
                        final: "H"
                    }, function(e) {
                        return m.cursorPosition(e)
                    }), m._parser.setCsiHandler({
                        final: "I"
                    }, function(e) {
                        return m.cursorForwardTab(e)
                    }), m._parser.setCsiHandler({
                        final: "J"
                    }, function(e) {
                        return m.eraseInDisplay(e)
                    }), m._parser.setCsiHandler({
                        prefix: "?",
                        final: "J"
                    }, function(e) {
                        return m.eraseInDisplay(e)
                    }), m._parser.setCsiHandler({
                        final: "K"
                    }, function(e) {
                        return m.eraseInLine(e)
                    }), m._parser.setCsiHandler({
                        prefix: "?",
                        final: "K"
                    }, function(e) {
                        return m.eraseInLine(e)
                    }), m._parser.setCsiHandler({
                        final: "L"
                    }, function(e) {
                        return m.insertLines(e)
                    }), m._parser.setCsiHandler({
                        final: "M"
                    }, function(e) {
                        return m.deleteLines(e)
                    }), m._parser.setCsiHandler({
                        final: "P"
                    }, function(e) {
                        return m.deleteChars(e)
                    }), m._parser.setCsiHandler({
                        final: "S"
                    }, function(e) {
                        return m.scrollUp(e)
                    }), m._parser.setCsiHandler({
                        final: "T"
                    }, function(e) {
                        return m.scrollDown(e)
                    }), m._parser.setCsiHandler({
                        final: "X"
                    }, function(e) {
                        return m.eraseChars(e)
                    }), m._parser.setCsiHandler({
                        final: "Z"
                    }, function(e) {
                        return m.cursorBackwardTab(e)
                    }), m._parser.setCsiHandler({
                        final: "`"
                    }, function(e) {
                        return m.charPosAbsolute(e)
                    }), m._parser.setCsiHandler({
                        final: "a"
                    }, function(e) {
                        return m.hPositionRelative(e)
                    }), m._parser.setCsiHandler({
                        final: "b"
                    }, function(e) {
                        return m.repeatPrecedingCharacter(e)
                    }), m._parser.setCsiHandler({
                        final: "c"
                    }, function(e) {
                        return m.sendDeviceAttributesPrimary(e)
                    }), m._parser.setCsiHandler({
                        prefix: ">",
                        final: "c"
                    }, function(e) {
                        return m.sendDeviceAttributesSecondary(e)
                    }), m._parser.setCsiHandler({
                        final: "d"
                    }, function(e) {
                        return m.linePosAbsolute(e)
                    }), m._parser.setCsiHandler({
                        final: "e"
                    }, function(e) {
                        return m.vPositionRelative(e)
                    }), m._parser.setCsiHandler({
                        final: "f"
                    }, function(e) {
                        return m.hVPosition(e)
                    }), m._parser.setCsiHandler({
                        final: "g"
                    }, function(e) {
                        return m.tabClear(e)
                    }), m._parser.setCsiHandler({
                        final: "h"
                    }, function(e) {
                        return m.setMode(e)
                    }), m._parser.setCsiHandler({
                        prefix: "?",
                        final: "h"
                    }, function(e) {
                        return m.setModePrivate(e)
                    }), m._parser.setCsiHandler({
                        final: "l"
                    }, function(e) {
                        return m.resetMode(e)
                    }), m._parser.setCsiHandler({
                        prefix: "?",
                        final: "l"
                    }, function(e) {
                        return m.resetModePrivate(e)
                    }), m._parser.setCsiHandler({
                        final: "m"
                    }, function(e) {
                        return m.charAttributes(e)
                    }), m._parser.setCsiHandler({
                        final: "n"
                    }, function(e) {
                        return m.deviceStatus(e)
                    }), m._parser.setCsiHandler({
                        prefix: "?",
                        final: "n"
                    }, function(e) {
                        return m.deviceStatusPrivate(e)
                    }), m._parser.setCsiHandler({
                        intermediates: "!",
                        final: "p"
                    }, function(e) {
                        return m.softReset(e)
                    }), m._parser.setCsiHandler({
                        intermediates: " ",
                        final: "q"
                    }, function(e) {
                        return m.setCursorStyle(e)
                    }), m._parser.setCsiHandler({
                        final: "r"
                    }, function(e) {
                        return m.setScrollRegion(e)
                    }), m._parser.setCsiHandler({
                        final: "s"
                    }, function(e) {
                        return m.saveCursor(e)
                    }), m._parser.setCsiHandler({
                        final: "t"
                    }, function(e) {
                        return m.windowOptions(e)
                    }), m._parser.setCsiHandler({
                        final: "u"
                    }, function(e) {
                        return m.restoreCursor(e)
                    }), m._parser.setCsiHandler({
                        intermediates: "'",
                        final: "}"
                    }, function(e) {
                        return m.insertColumns(e)
                    }), m._parser.setCsiHandler({
                        intermediates: "'",
                        final: "~"
                    }, function(e) {
                        return m.deleteColumns(e)
                    }), m._parser.setExecuteHandler(o.C0.BEL, function() {
                        return m.bell()
                    }), m._parser.setExecuteHandler(o.C0.LF, function() {
                        return m.lineFeed()
                    }), m._parser.setExecuteHandler(o.C0.VT, function() {
                        return m.lineFeed()
                    }), m._parser.setExecuteHandler(o.C0.FF, function() {
                        return m.lineFeed()
                    }), m._parser.setExecuteHandler(o.C0.CR, function() {
                        return m.carriageReturn()
                    }), m._parser.setExecuteHandler(o.C0.BS, function() {
                        return m.backspace()
                    }), m._parser.setExecuteHandler(o.C0.HT, function() {
                        return m.tab()
                    }), m._parser.setExecuteHandler(o.C0.SO, function() {
                        return m.shiftOut()
                    }), m._parser.setExecuteHandler(o.C0.SI, function() {
                        return m.shiftIn()
                    }), m._parser.setExecuteHandler(o.C1.IND, function() {
                        return m.index()
                    }), m._parser.setExecuteHandler(o.C1.NEL, function() {
                        return m.nextLine()
                    }), m._parser.setExecuteHandler(o.C1.HTS, function() {
                        return m.tabSet()
                    }), m._parser.setOscHandler(0, new v.OscHandler(function(e) {
                        m.setTitle(e), m.setIconName(e)
                    })), m._parser.setOscHandler(1, new v.OscHandler(function(e) {
                        return m.setIconName(e)
                    })), m._parser.setOscHandler(2, new v.OscHandler(function(e) {
                        return m.setTitle(e)
                    })), m._parser.setEscHandler({
                        final: "7"
                    }, function() {
                        return m.saveCursor()
                    }), m._parser.setEscHandler({
                        final: "8"
                    }, function() {
                        return m.restoreCursor()
                    }), m._parser.setEscHandler({
                        final: "D"
                    }, function() {
                        return m.index()
                    }), m._parser.setEscHandler({
                        final: "E"
                    }, function() {
                        return m.nextLine()
                    }), m._parser.setEscHandler({
                        final: "H"
                    }, function() {
                        return m.tabSet()
                    }), m._parser.setEscHandler({
                        final: "M"
                    }, function() {
                        return m.reverseIndex()
                    }), m._parser.setEscHandler({
                        final: "="
                    }, function() {
                        return m.keypadApplicationMode()
                    }), m._parser.setEscHandler({
                        final: ">"
                    }, function() {
                        return m.keypadNumericMode()
                    }), m._parser.setEscHandler({
                        final: "c"
                    }, function() {
                        return m.fullReset()
                    }), m._parser.setEscHandler({
                        final: "n"
                    }, function() {
                        return m.setgLevel(2)
                    }), m._parser.setEscHandler({
                        final: "o"
                    }, function() {
                        return m.setgLevel(3)
                    }), m._parser.setEscHandler({
                        final: "|"
                    }, function() {
                        return m.setgLevel(3)
                    }), m._parser.setEscHandler({
                        final: "}"
                    }, function() {
                        return m.setgLevel(2)
                    }), m._parser.setEscHandler({
                        final: "~"
                    }, function() {
                        return m.setgLevel(1)
                    }), m._parser.setEscHandler({
                        intermediates: "%",
                        final: "@"
                    }, function() {
                        return m.selectDefaultCharset()
                    }), m._parser.setEscHandler({
                        intermediates: "%",
                        final: "G"
                    }, function() {
                        return m.selectDefaultCharset()
                    });
                    var S = function(e) {
                            w._parser.setEscHandler({
                                intermediates: "(",
                                final: e
                            }, function() {
                                return m.selectCharset("(" + e)
                            }), w._parser.setEscHandler({
                                intermediates: ")",
                                final: e
                            }, function() {
                                return m.selectCharset(")" + e)
                            }), w._parser.setEscHandler({
                                intermediates: "*",
                                final: e
                            }, function() {
                                return m.selectCharset("*" + e)
                            }), w._parser.setEscHandler({
                                intermediates: "+",
                                final: e
                            }, function() {
                                return m.selectCharset("+" + e)
                            }), w._parser.setEscHandler({
                                intermediates: "-",
                                final: e
                            }, function() {
                                return m.selectCharset("-" + e)
                            }), w._parser.setEscHandler({
                                intermediates: ".",
                                final: e
                            }, function() {
                                return m.selectCharset("." + e)
                            }), w._parser.setEscHandler({
                                intermediates: "/",
                                final: e
                            }, function() {
                                return m.selectCharset("/" + e)
                            })
                        },
                        w = this;
                    for (var E in s.CHARSETS) S(E);
                    return m._parser.setEscHandler({
                        intermediates: "#",
                        final: "8"
                    }, function() {
                        return m.screenAlignmentPattern()
                    }), m._parser.setErrorHandler(function(e) {
                        return m._logService.error("Parsing error: ", e), e
                    }), m._parser.setDcsHandler({
                        intermediates: "$",
                        final: "q"
                    }, new C(m._bufferService, m._coreService, m._logService, m._optionsService)), m
                }
                return n(t, e), Object.defineProperty(t.prototype, "onRequestRefreshRows", {
                    get: function() {
                        return this._onRequestRefreshRows.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onRequestReset", {
                    get: function() {
                        return this._onRequestReset.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onRequestBell", {
                    get: function() {
                        return this._onRequestBell.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onCursorMove", {
                    get: function() {
                        return this._onCursorMove.event
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
                    e.prototype.dispose.call(this)
                }, t.prototype.parse = function(e) {
                    var t = this._bufferService.buffer,
                        r = t.x,
                        i = t.y;
                    if (this._logService.debug("parsing data", e), this._parseBuffer.length < e.length && this._parseBuffer.length < 131072 && (this._parseBuffer = new Uint32Array(Math.min(e.length, 131072))), this._dirtyRowService.clearRange(), e.length > 131072)
                        for (var n = 0; n < e.length; n += 131072) {
                            var o = n + 131072 < e.length ? n + 131072 : e.length,
                                s = "string" == typeof e ? this._stringDecoder.decode(e.substring(n, o), this._parseBuffer) : this._utf8Decoder.decode(e.subarray(n, o), this._parseBuffer);
                            this._parser.parse(this._parseBuffer, s)
                        } else s = "string" == typeof e ? this._stringDecoder.decode(e, this._parseBuffer) : this._utf8Decoder.decode(e, this._parseBuffer), this._parser.parse(this._parseBuffer, s);
                    (t = this._bufferService.buffer).x === r && t.y === i || this._onCursorMove.fire(), this._onRequestRefreshRows.fire(this._dirtyRowService.start, this._dirtyRowService.end)
                }, t.prototype.print = function(e, t, r) {
                    var i, n, o = this._bufferService.buffer,
                        s = this._charsetService.charset,
                        a = this._optionsService.options.screenReaderMode,
                        c = this._bufferService.cols,
                        l = this._coreService.decPrivateModes.wraparound,
                        u = this._terminal.insertMode,
                        f = this._curAttrData,
                        d = o.lines.get(o.y + o.ybase);
                    this._dirtyRowService.markDirty(o.y), o.x && r - t > 0 && 2 === d.getWidth(o.x - 1) && d.setCellFromCodePoint(o.x - 1, 0, 1, f.fg, f.bg);
                    for (var p = t; p < r; ++p) {
                        if (i = e[p], n = this._unicodeService.wcwidth(i), i < 127 && s) {
                            var v = s[String.fromCharCode(i)];
                            v && (i = v.charCodeAt(0))
                        }
                        if (a && this._terminal.onA11yCharEmitter.fire(h.stringFromCodePoint(i)), n || !o.x) {
                            if (o.x + n - 1 >= c)
                                if (l) o.x = 0, o.y++, o.y === o.scrollBottom + 1 ? (o.y--, this._terminal.scroll(this._eraseAttrData(), !0)) : (o.y >= this._bufferService.rows && (o.y = this._bufferService.rows - 1), o.lines.get(o.y).isWrapped = !0), d = o.lines.get(o.y + o.ybase);
                                else if (o.x = c - 1, 2 === n) continue;
                            if (u && (d.insertCells(o.x, n, o.getNullCell(f), f), 2 === d.getWidth(c - 1) && d.setCellFromCodePoint(c - 1, _.NULL_CELL_CODE, _.NULL_CELL_WIDTH, f.fg, f.bg)), d.setCellFromCodePoint(o.x++, i, n, f.fg, f.bg), n > 0)
                                for (; --n;) d.setCellFromCodePoint(o.x++, 0, 0, f.fg, f.bg)
                        } else d.getWidth(o.x - 1) ? d.addCodepointToCell(o.x - 1, i) : d.addCodepointToCell(o.x - 2, i)
                    }
                    r - t > 0 && (d.loadCell(o.x - 1, this._workCell), 2 === this._workCell.getWidth() || this._workCell.getCode() > 65535 ? this._parser.precedingCodepoint = 0 : this._workCell.isCombined() ? this._parser.precedingCodepoint = this._workCell.getChars().charCodeAt(0) : this._parser.precedingCodepoint = this._workCell.content), o.x < c && r - t > 0 && 0 === d.getWidth(o.x) && !d.hasContent(o.x) && d.setCellFromCodePoint(o.x, 0, 1, f.fg, f.bg), this._dirtyRowService.markDirty(o.y)
                }, t.prototype.addCsiHandler = function(e, t) {
                    var r = this;
                    return "t" !== e.final || e.prefix || e.intermediates ? this._parser.addCsiHandler(e, t) : this._parser.addCsiHandler(e, function(e) {
                        return !m(e.params[0], r._optionsService.options.windowOptions) || t(e)
                    })
                }, t.prototype.addDcsHandler = function(e, t) {
                    return this._parser.addDcsHandler(e, new g.DcsHandler(t))
                }, t.prototype.addEscHandler = function(e, t) {
                    return this._parser.addEscHandler(e, t)
                }, t.prototype.addOscHandler = function(e, t) {
                    return this._parser.addOscHandler(e, new v.OscHandler(t))
                }, t.prototype.bell = function() {
                    this._onRequestBell.fire()
                }, t.prototype.lineFeed = function() {
                    var e = this._bufferService.buffer;
                    this._dirtyRowService.markDirty(e.y), this._optionsService.options.convertEol && (e.x = 0), e.y++, e.y === e.scrollBottom + 1 ? (e.y--, this._terminal.scroll(this._eraseAttrData())) : e.y >= this._bufferService.rows && (e.y = this._bufferService.rows - 1), e.x >= this._bufferService.cols && e.x--, this._dirtyRowService.markDirty(e.y), this._onLineFeed.fire()
                }, t.prototype.carriageReturn = function() {
                    this._bufferService.buffer.x = 0
                }, t.prototype.backspace = function() {
                    this._restrictCursor(), this._bufferService.buffer.x > 0 && this._bufferService.buffer.x--
                }, t.prototype.tab = function() {
                    if (!(this._bufferService.buffer.x >= this._bufferService.cols)) {
                        var e = this._bufferService.buffer.x;
                        this._bufferService.buffer.x = this._bufferService.buffer.nextStop(), this._optionsService.options.screenReaderMode && this._terminal.onA11yTabEmitter.fire(this._bufferService.buffer.x - e)
                    }
                }, t.prototype.shiftOut = function() {
                    this._charsetService.setgLevel(1)
                }, t.prototype.shiftIn = function() {
                    this._charsetService.setgLevel(0)
                }, t.prototype._restrictCursor = function() {
                    this._bufferService.buffer.x = Math.min(this._bufferService.cols - 1, Math.max(0, this._bufferService.buffer.x)), this._bufferService.buffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._bufferService.buffer.scrollBottom, Math.max(this._bufferService.buffer.scrollTop, this._bufferService.buffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._bufferService.buffer.y)), this._dirtyRowService.markDirty(this._bufferService.buffer.y)
                }, t.prototype._setCursor = function(e, t) {
                    this._dirtyRowService.markDirty(this._bufferService.buffer.y), this._coreService.decPrivateModes.origin ? (this._bufferService.buffer.x = e, this._bufferService.buffer.y = this._bufferService.buffer.scrollTop + t) : (this._bufferService.buffer.x = e, this._bufferService.buffer.y = t), this._restrictCursor(), this._dirtyRowService.markDirty(this._bufferService.buffer.y)
                }, t.prototype._moveCursor = function(e, t) {
                    this._restrictCursor(), this._setCursor(this._bufferService.buffer.x + e, this._bufferService.buffer.y + t)
                }, t.prototype.cursorUp = function(e) {
                    var t = this._bufferService.buffer.y - this._bufferService.buffer.scrollTop;
                    t >= 0 ? this._moveCursor(0, -Math.min(t, e.params[0] || 1)) : this._moveCursor(0, -(e.params[0] || 1))
                }, t.prototype.cursorDown = function(e) {
                    var t = this._bufferService.buffer.scrollBottom - this._bufferService.buffer.y;
                    t >= 0 ? this._moveCursor(0, Math.min(t, e.params[0] || 1)) : this._moveCursor(0, e.params[0] || 1)
                }, t.prototype.cursorForward = function(e) {
                    this._moveCursor(e.params[0] || 1, 0)
                }, t.prototype.cursorBackward = function(e) {
                    this._moveCursor(-(e.params[0] || 1), 0)
                }, t.prototype.cursorNextLine = function(e) {
                    this.cursorDown(e), this._bufferService.buffer.x = 0
                }, t.prototype.cursorPrecedingLine = function(e) {
                    this.cursorUp(e), this._bufferService.buffer.x = 0
                }, t.prototype.cursorCharAbsolute = function(e) {
                    this._setCursor((e.params[0] || 1) - 1, this._bufferService.buffer.y)
                }, t.prototype.cursorPosition = function(e) {
                    this._setCursor(e.length >= 2 ? (e.params[1] || 1) - 1 : 0, (e.params[0] || 1) - 1)
                }, t.prototype.charPosAbsolute = function(e) {
                    this._setCursor((e.params[0] || 1) - 1, this._bufferService.buffer.y)
                }, t.prototype.hPositionRelative = function(e) {
                    this._moveCursor(e.params[0] || 1, 0)
                }, t.prototype.linePosAbsolute = function(e) {
                    this._setCursor(this._bufferService.buffer.x, (e.params[0] || 1) - 1)
                }, t.prototype.vPositionRelative = function(e) {
                    this._moveCursor(0, e.params[0] || 1)
                }, t.prototype.hVPosition = function(e) {
                    this.cursorPosition(e)
                }, t.prototype.tabClear = function(e) {
                    var t = e.params[0];
                    0 === t ? delete this._bufferService.buffer.tabs[this._bufferService.buffer.x] : 3 === t && (this._bufferService.buffer.tabs = {})
                }, t.prototype.cursorForwardTab = function(e) {
                    if (!(this._bufferService.buffer.x >= this._bufferService.cols))
                        for (var t = e.params[0] || 1; t--;) this._bufferService.buffer.x = this._bufferService.buffer.nextStop()
                }, t.prototype.cursorBackwardTab = function(e) {
                    if (!(this._bufferService.buffer.x >= this._bufferService.cols))
                        for (var t = e.params[0] || 1, r = this._bufferService.buffer; t--;) r.x = r.prevStop()
                }, t.prototype._eraseInBufferLine = function(e, t, r, i) {
                    void 0 === i && (i = !1);
                    var n = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + e);
                    n.replaceCells(t, r, this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i && (n.isWrapped = !1)
                }, t.prototype._resetBufferLine = function(e) {
                    var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + e);
                    t.fill(this._bufferService.buffer.getNullCell(this._eraseAttrData())), t.isWrapped = !1
                }, t.prototype.eraseInDisplay = function(e) {
                    var t;
                    switch (this._restrictCursor(), e.params[0]) {
                        case 0:
                            for (t = this._bufferService.buffer.y, this._dirtyRowService.markDirty(t), this._eraseInBufferLine(t++, this._bufferService.buffer.x, this._bufferService.cols, 0 === this._bufferService.buffer.x); t < this._bufferService.rows; t++) this._resetBufferLine(t);
                            this._dirtyRowService.markDirty(t);
                            break;
                        case 1:
                            for (t = this._bufferService.buffer.y, this._dirtyRowService.markDirty(t), this._eraseInBufferLine(t, 0, this._bufferService.buffer.x + 1, !0), this._bufferService.buffer.x + 1 >= this._bufferService.cols && (this._bufferService.buffer.lines.get(t + 1).isWrapped = !1); t--;) this._resetBufferLine(t);
                            this._dirtyRowService.markDirty(0);
                            break;
                        case 2:
                            for (t = this._bufferService.rows, this._dirtyRowService.markDirty(t - 1); t--;) this._resetBufferLine(t);
                            this._dirtyRowService.markDirty(0);
                            break;
                        case 3:
                            var r = this._bufferService.buffer.lines.length - this._bufferService.rows;
                            r > 0 && (this._bufferService.buffer.lines.trimStart(r), this._bufferService.buffer.ybase = Math.max(this._bufferService.buffer.ybase - r, 0), this._bufferService.buffer.ydisp = Math.max(this._bufferService.buffer.ydisp - r, 0), this._onScroll.fire(0))
                    }
                }, t.prototype.eraseInLine = function(e) {
                    switch (this._restrictCursor(), e.params[0]) {
                        case 0:
                            this._eraseInBufferLine(this._bufferService.buffer.y, this._bufferService.buffer.x, this._bufferService.cols);
                            break;
                        case 1:
                            this._eraseInBufferLine(this._bufferService.buffer.y, 0, this._bufferService.buffer.x + 1);
                            break;
                        case 2:
                            this._eraseInBufferLine(this._bufferService.buffer.y, 0, this._bufferService.cols)
                    }
                    this._dirtyRowService.markDirty(this._bufferService.buffer.y)
                }, t.prototype.insertLines = function(e) {
                    this._restrictCursor();
                    var t = e.params[0] || 1,
                        r = this._bufferService.buffer;
                    if (!(r.y > r.scrollBottom || r.y < r.scrollTop)) {
                        for (var i = r.y + r.ybase, n = this._bufferService.rows - 1 - r.scrollBottom, o = this._bufferService.rows - 1 + r.ybase - n + 1; t--;) r.lines.splice(o - 1, 1), r.lines.splice(i, 0, r.getBlankLine(this._eraseAttrData()));
                        this._dirtyRowService.markRangeDirty(r.y, r.scrollBottom), r.x = 0
                    }
                }, t.prototype.deleteLines = function(e) {
                    this._restrictCursor();
                    var t = e.params[0] || 1,
                        r = this._bufferService.buffer;
                    if (!(r.y > r.scrollBottom || r.y < r.scrollTop)) {
                        var i, n = r.y + r.ybase;
                        for (i = this._bufferService.rows - 1 - r.scrollBottom, i = this._bufferService.rows - 1 + r.ybase - i; t--;) r.lines.splice(n, 1), r.lines.splice(i, 0, r.getBlankLine(this._eraseAttrData()));
                        this._dirtyRowService.markRangeDirty(r.y, r.scrollBottom), r.x = 0
                    }
                }, t.prototype.insertChars = function(e) {
                    this._restrictCursor();
                    var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.y + this._bufferService.buffer.ybase);
                    t && (t.insertCells(this._bufferService.buffer.x, e.params[0] || 1, this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._bufferService.buffer.y))
                }, t.prototype.deleteChars = function(e) {
                    this._restrictCursor();
                    var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.y + this._bufferService.buffer.ybase);
                    t && (t.deleteCells(this._bufferService.buffer.x, e.params[0] || 1, this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._bufferService.buffer.y))
                }, t.prototype.scrollUp = function(e) {
                    for (var t = e.params[0] || 1, r = this._bufferService.buffer; t--;) r.lines.splice(r.ybase + r.scrollTop, 1), r.lines.splice(r.ybase + r.scrollBottom, 0, r.getBlankLine(this._eraseAttrData()));
                    this._dirtyRowService.markRangeDirty(r.scrollTop, r.scrollBottom)
                }, t.prototype.scrollDown = function(e) {
                    for (var t = e.params[0] || 1, r = this._bufferService.buffer; t--;) r.lines.splice(r.ybase + r.scrollBottom, 1), r.lines.splice(r.ybase + r.scrollTop, 0, r.getBlankLine(u.DEFAULT_ATTR_DATA));
                    this._dirtyRowService.markRangeDirty(r.scrollTop, r.scrollBottom)
                }, t.prototype.scrollLeft = function(e) {
                    var t = this._bufferService.buffer;
                    if (!(t.y > t.scrollBottom || t.y < t.scrollTop)) {
                        for (var r = e.params[0] || 1, i = t.scrollTop; i <= t.scrollBottom; ++i) {
                            var n = t.lines.get(t.ybase + i);
                            n.deleteCells(0, r, t.getNullCell(this._eraseAttrData()), this._eraseAttrData()), n.isWrapped = !1
                        }
                        this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom)
                    }
                }, t.prototype.scrollRight = function(e) {
                    var t = this._bufferService.buffer;
                    if (!(t.y > t.scrollBottom || t.y < t.scrollTop)) {
                        for (var r = e.params[0] || 1, i = t.scrollTop; i <= t.scrollBottom; ++i) {
                            var n = t.lines.get(t.ybase + i);
                            n.insertCells(0, r, t.getNullCell(this._eraseAttrData()), this._eraseAttrData()), n.isWrapped = !1
                        }
                        this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom)
                    }
                }, t.prototype.insertColumns = function(e) {
                    var t = this._bufferService.buffer;
                    if (!(t.y > t.scrollBottom || t.y < t.scrollTop)) {
                        for (var r = e.params[0] || 1, i = t.scrollTop; i <= t.scrollBottom; ++i) {
                            var n = this._bufferService.buffer.lines.get(t.ybase + i);
                            n.insertCells(t.x, r, t.getNullCell(this._eraseAttrData()), this._eraseAttrData()), n.isWrapped = !1
                        }
                        this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom)
                    }
                }, t.prototype.deleteColumns = function(e) {
                    var t = this._bufferService.buffer;
                    if (!(t.y > t.scrollBottom || t.y < t.scrollTop)) {
                        for (var r = e.params[0] || 1, i = t.scrollTop; i <= t.scrollBottom; ++i) {
                            var n = t.lines.get(t.ybase + i);
                            n.deleteCells(t.x, r, t.getNullCell(this._eraseAttrData()), this._eraseAttrData()), n.isWrapped = !1
                        }
                        this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom)
                    }
                }, t.prototype.eraseChars = function(e) {
                    this._restrictCursor();
                    var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.y + this._bufferService.buffer.ybase);
                    t && (t.replaceCells(this._bufferService.buffer.x, this._bufferService.buffer.x + (e.params[0] || 1), this._bufferService.buffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._bufferService.buffer.y))
                }, t.prototype.repeatPrecedingCharacter = function(e) {
                    if (this._parser.precedingCodepoint) {
                        for (var t = e.params[0] || 1, r = new Uint32Array(t), i = 0; i < t; ++i) r[i] = this._parser.precedingCodepoint;
                        this.print(r, 0, r.length)
                    }
                }, t.prototype.sendDeviceAttributesPrimary = function(e) {
                    e.params[0] > 0 || (this._terminal.is("xterm") || this._terminal.is("rxvt-unicode") || this._terminal.is("screen") ? this._coreService.triggerDataEvent(o.C0.ESC + "[?1;2c") : this._terminal.is("linux") && this._coreService.triggerDataEvent(o.C0.ESC + "[?6c"))
                }, t.prototype.sendDeviceAttributesSecondary = function(e) {
                    e.params[0] > 0 || (this._terminal.is("xterm") ? this._coreService.triggerDataEvent(o.C0.ESC + "[>0;276;0c") : this._terminal.is("rxvt-unicode") ? this._coreService.triggerDataEvent(o.C0.ESC + "[>85;95;0c") : this._terminal.is("linux") ? this._coreService.triggerDataEvent(e.params[0] + "c") : this._terminal.is("screen") && this._coreService.triggerDataEvent(o.C0.ESC + "[>83;40003;0c"))
                }, t.prototype.setMode = function(e) {
                    for (var t = 0; t < e.length; t++) switch (e.params[t]) {
                        case 4:
                            this._terminal.insertMode = !0
                    }
                }, t.prototype.setModePrivate = function(e) {
                    for (var t, r, i = 0; i < e.length; i++) switch (e.params[i]) {
                        case 1:
                            this._coreService.decPrivateModes.applicationCursorKeys = !0;
                            break;
                        case 2:
                            this._charsetService.setgCharset(0, s.DEFAULT_CHARSET), this._charsetService.setgCharset(1, s.DEFAULT_CHARSET), this._charsetService.setgCharset(2, s.DEFAULT_CHARSET), this._charsetService.setgCharset(3, s.DEFAULT_CHARSET);
                            break;
                        case 3:
                            this._optionsService.options.windowOptions.setWinLines && (this._terminal.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                            break;
                        case 6:
                            this._coreService.decPrivateModes.origin = !0, this._setCursor(0, 0);
                            break;
                        case 7:
                            this._coreService.decPrivateModes.wraparound = !0;
                            break;
                        case 12:
                            break;
                        case 66:
                            this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, null === (t = this._terminal.viewport) || void 0 === t || t.syncScrollArea();
                            break;
                        case 9:
                            this._coreMouseService.activeProtocol = "X10";
                            break;
                        case 1e3:
                            this._coreMouseService.activeProtocol = "VT200";
                            break;
                        case 1002:
                            this._coreMouseService.activeProtocol = "DRAG";
                            break;
                        case 1003:
                            this._coreMouseService.activeProtocol = "ANY";
                            break;
                        case 1004:
                            this._terminal.sendFocus = !0;
                            break;
                        case 1005:
                            this._logService.debug("DECSET 1005 not supported (see #2507)");
                            break;
                        case 1006:
                            this._coreMouseService.activeEncoding = "SGR";
                            break;
                        case 1015:
                            this._logService.debug("DECSET 1015 not supported (see #2507)");
                            break;
                        case 25:
                            this._coreService.isCursorHidden = !1;
                            break;
                        case 1048:
                            this.saveCursor();
                            break;
                        case 1049:
                            this.saveCursor();
                        case 47:
                        case 1047:
                            this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), null === (r = this._terminal.viewport) || void 0 === r || r.syncScrollArea(), this._terminal.showCursor();
                            break;
                        case 2004:
                            this._terminal.bracketedPasteMode = !0
                    }
                }, t.prototype.resetMode = function(e) {
                    for (var t = 0; t < e.length; t++) switch (e.params[t]) {
                        case 4:
                            this._terminal.insertMode = !1
                    }
                }, t.prototype.resetModePrivate = function(e) {
                    for (var t, r, i = 0; i < e.length; i++) switch (e.params[i]) {
                        case 1:
                            this._coreService.decPrivateModes.applicationCursorKeys = !1;
                            break;
                        case 3:
                            this._optionsService.options.windowOptions.setWinLines && (this._terminal.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                            break;
                        case 6:
                            this._coreService.decPrivateModes.origin = !1, this._setCursor(0, 0);
                            break;
                        case 7:
                            this._coreService.decPrivateModes.wraparound = !1;
                            break;
                        case 12:
                            break;
                        case 66:
                            this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, null === (t = this._terminal.viewport) || void 0 === t || t.syncScrollArea();
                            break;
                        case 9:
                        case 1e3:
                        case 1002:
                        case 1003:
                            this._coreMouseService.activeProtocol = "NONE";
                            break;
                        case 1004:
                            this._terminal.sendFocus = !1;
                            break;
                        case 1005:
                            this._logService.debug("DECRST 1005 not supported (see #2507)");
                            break;
                        case 1006:
                            this._coreMouseService.activeEncoding = "DEFAULT";
                            break;
                        case 1015:
                            this._logService.debug("DECRST 1015 not supported (see #2507)");
                            break;
                        case 25:
                            this._coreService.isCursorHidden = !0;
                            break;
                        case 1048:
                            this.restoreCursor();
                            break;
                        case 1049:
                        case 47:
                        case 1047:
                            this._bufferService.buffers.activateNormalBuffer(), 1049 === e.params[i] && this.restoreCursor(), this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), null === (r = this._terminal.viewport) || void 0 === r || r.syncScrollArea(), this._terminal.showCursor();
                            break;
                        case 2004:
                            this._terminal.bracketedPasteMode = !1
                    }
                }, t.prototype._extractColor = function(e, t, r) {
                    var i = [0, 0, -1, 0, 0, 0],
                        n = 0,
                        o = 0;
                    do {
                        if (i[o + n] = e.params[t + o], e.hasSubParams(t + o)) {
                            var s = e.getSubParams(t + o),
                                a = 0;
                            do {
                                5 === i[1] && (n = 1), i[o + a + 1 + n] = s[a]
                            } while (++a < s.length && a + o + 1 + n < i.length);
                            break
                        }
                        if (5 === i[1] && o + n >= 2 || 2 === i[1] && o + n >= 5) break;
                        i[1] && (n = 1)
                    } while (++o + t < e.length && o + n < i.length);
                    for (a = 2; a < i.length; ++a) - 1 === i[a] && (i[a] = 0);
                    return 38 === i[0] ? 2 === i[1] ? (r.fg |= 50331648, r.fg &= -16777216, r.fg |= p.AttributeData.fromColorRGB([i[3], i[4], i[5]])) : 5 === i[1] && (r.fg &= -50331904, r.fg |= 33554432 | 255 & i[3]) : 48 === i[0] && (2 === i[1] ? (r.bg |= 50331648, r.bg &= -16777216, r.bg |= p.AttributeData.fromColorRGB([i[3], i[4], i[5]])) : 5 === i[1] && (r.bg &= -50331904, r.bg |= 33554432 | 255 & i[3])), o
                }, t.prototype.charAttributes = function(e) {
                    if (1 === e.length && 0 === e.params[0]) return this._curAttrData.fg = u.DEFAULT_ATTR_DATA.fg, void(this._curAttrData.bg = u.DEFAULT_ATTR_DATA.bg);
                    for (var t, r = e.length, i = this._curAttrData, n = 0; n < r; n++)(t = e.params[n]) >= 30 && t <= 37 ? (i.fg &= -50331904, i.fg |= 16777216 | t - 30) : t >= 40 && t <= 47 ? (i.bg &= -50331904, i.bg |= 16777216 | t - 40) : t >= 90 && t <= 97 ? (i.fg &= -50331904, i.fg |= 16777224 | t - 90) : t >= 100 && t <= 107 ? (i.bg &= -50331904, i.bg |= 16777224 | t - 100) : 0 === t ? (i.fg = u.DEFAULT_ATTR_DATA.fg, i.bg = u.DEFAULT_ATTR_DATA.bg) : 1 === t ? i.fg |= 134217728 : 3 === t ? i.bg |= 67108864 : 4 === t ? i.fg |= 268435456 : 5 === t ? i.fg |= 536870912 : 7 === t ? i.fg |= 67108864 : 8 === t ? i.fg |= 1073741824 : 2 === t ? i.bg |= 134217728 : 22 === t ? (i.fg &= -134217729, i.bg &= -134217729) : 23 === t ? i.bg &= -67108865 : 24 === t ? i.fg &= -268435457 : 25 === t ? i.fg &= -536870913 : 27 === t ? i.fg &= -67108865 : 28 === t ? i.fg &= -1073741825 : 39 === t ? (i.fg &= -67108864, i.fg |= 16777215 & u.DEFAULT_ATTR_DATA.fg) : 49 === t ? (i.bg &= -67108864, i.bg |= 16777215 & u.DEFAULT_ATTR_DATA.bg) : 38 === t || 48 === t ? n += this._extractColor(e, n, i) : 100 === t ? (i.fg &= -67108864, i.fg |= 16777215 & u.DEFAULT_ATTR_DATA.fg, i.bg &= -67108864, i.bg |= 16777215 & u.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", t)
                }, t.prototype.deviceStatus = function(e) {
                    switch (e.params[0]) {
                        case 5:
                            this._coreService.triggerDataEvent(o.C0.ESC + "[0n");
                            break;
                        case 6:
                            var t = this._bufferService.buffer.y + 1,
                                r = this._bufferService.buffer.x + 1;
                            this._coreService.triggerDataEvent(o.C0.ESC + "[" + t + ";" + r + "R")
                    }
                }, t.prototype.deviceStatusPrivate = function(e) {
                    switch (e.params[0]) {
                        case 6:
                            var t = this._bufferService.buffer.y + 1,
                                r = this._bufferService.buffer.x + 1;
                            this._coreService.triggerDataEvent(o.C0.ESC + "[?" + t + ";" + r + "R")
                    }
                }, t.prototype.softReset = function(e) {
                    var t;
                    this._coreService.isCursorHidden = !1, this._terminal.insertMode = !1, null === (t = this._terminal.viewport) || void 0 === t || t.syncScrollArea(), this._bufferService.buffer.scrollTop = 0, this._bufferService.buffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = u.DEFAULT_ATTR_DATA.clone(), this._bufferService.buffer.x = this._bufferService.buffer.y = 0, this._coreService.reset(), this._charsetService.reset()
                }, t.prototype.setCursorStyle = function(e) {
                    var t = e.params[0] || 1;
                    switch (t) {
                        case 1:
                        case 2:
                            this._optionsService.options.cursorStyle = "block";
                            break;
                        case 3:
                        case 4:
                            this._optionsService.options.cursorStyle = "underline";
                            break;
                        case 5:
                        case 6:
                            this._optionsService.options.cursorStyle = "bar"
                    }
                    var r = t % 2 == 1;
                    this._optionsService.options.cursorBlink = r
                }, t.prototype.setScrollRegion = function(e) {
                    var t, r = e.params[0] || 1;
                    (e.length < 2 || (t = e.params[1]) > this._bufferService.rows || 0 === t) && (t = this._bufferService.rows), t > r && (this._bufferService.buffer.scrollTop = r - 1, this._bufferService.buffer.scrollBottom = t - 1, this._setCursor(0, 0))
                }, t.prototype.windowOptions = function(e) {
                    if (m(e.params[0], this._optionsService.options.windowOptions)) {
                        var t = e.length > 1 ? e.params[1] : 0,
                            r = this._instantiationService.getService(y.IRenderService);
                        switch (e.params[0]) {
                            case 14:
                                if (r && 2 !== t) {
                                    console.log(r.dimensions);
                                    var i = r.dimensions.scaledCanvasWidth.toFixed(0),
                                        n = r.dimensions.scaledCanvasHeight.toFixed(0);
                                    this._coreService.triggerDataEvent(o.C0.ESC + "[4;" + n + ";" + i + "t")
                                }
                                break;
                            case 16:
                                r && (i = r.dimensions.scaledCellWidth.toFixed(0), n = r.dimensions.scaledCellHeight.toFixed(0), this._coreService.triggerDataEvent(o.C0.ESC + "[6;" + n + ";" + i + "t"));
                                break;
                            case 18:
                                this._bufferService && this._coreService.triggerDataEvent(o.C0.ESC + "[8;" + this._bufferService.rows + ";" + this._bufferService.cols + "t");
                                break;
                            case 22:
                                0 !== t && 2 !== t || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), 0 !== t && 1 !== t || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
                                break;
                            case 23:
                                0 !== t && 2 !== t || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), 0 !== t && 1 !== t || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop())
                        }
                    }
                }, t.prototype.saveCursor = function(e) {
                    this._bufferService.buffer.savedX = this._bufferService.buffer.x, this._bufferService.buffer.savedY = this._bufferService.buffer.ybase + this._bufferService.buffer.y, this._bufferService.buffer.savedCurAttrData.fg = this._curAttrData.fg, this._bufferService.buffer.savedCurAttrData.bg = this._curAttrData.bg, this._bufferService.buffer.savedCharset = this._charsetService.charset
                }, t.prototype.restoreCursor = function(e) {
                    this._bufferService.buffer.x = this._bufferService.buffer.savedX || 0, this._bufferService.buffer.y = Math.max(this._bufferService.buffer.savedY - this._bufferService.buffer.ybase, 0), this._curAttrData.fg = this._bufferService.buffer.savedCurAttrData.fg, this._curAttrData.bg = this._bufferService.buffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._bufferService.buffer.savedCharset && (this._charsetService.charset = this._bufferService.buffer.savedCharset), this._restrictCursor()
                }, t.prototype.setTitle = function(e) {
                    this._windowTitle = e, this._terminal.handleTitle(e)
                }, t.prototype.setIconName = function(e) {
                    this._iconName = e
                }, t.prototype.nextLine = function() {
                    this._bufferService.buffer.x = 0, this.index()
                }, t.prototype.keypadApplicationMode = function() {
                    var e;
                    this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, null === (e = this._terminal.viewport) || void 0 === e || e.syncScrollArea()
                }, t.prototype.keypadNumericMode = function() {
                    var e;
                    this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, null === (e = this._terminal.viewport) || void 0 === e || e.syncScrollArea()
                }, t.prototype.selectDefaultCharset = function() {
                    this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, s.DEFAULT_CHARSET)
                }, t.prototype.selectCharset = function(e) {
                    2 === e.length ? "/" !== e[0] && this._charsetService.setgCharset(b[e[0]], s.CHARSETS[e[1]] || s.DEFAULT_CHARSET) : this.selectDefaultCharset()
                }, t.prototype.index = function() {
                    this._restrictCursor();
                    var e = this._bufferService.buffer;
                    this._bufferService.buffer.y++, e.y === e.scrollBottom + 1 ? (e.y--, this._terminal.scroll(this._eraseAttrData())) : e.y >= this._bufferService.rows && (e.y = this._bufferService.rows - 1), this._restrictCursor()
                }, t.prototype.tabSet = function() {
                    this._bufferService.buffer.tabs[this._bufferService.buffer.x] = !0
                }, t.prototype.reverseIndex = function() {
                    this._restrictCursor();
                    var e = this._bufferService.buffer;
                    if (e.y === e.scrollTop) {
                        var t = e.scrollBottom - e.scrollTop;
                        e.lines.shiftElements(e.y + e.ybase, t, 1), e.lines.set(e.y + e.ybase, e.getBlankLine(this._eraseAttrData())), this._dirtyRowService.markRangeDirty(e.scrollTop, e.scrollBottom)
                    } else e.y--, this._restrictCursor()
                }, t.prototype.fullReset = function() {
                    this._parser.reset(), this._onRequestReset.fire()
                }, t.prototype.reset = function() {
                    this._curAttrData = u.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = u.DEFAULT_ATTR_DATA.clone()
                }, t.prototype._eraseAttrData = function() {
                    return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal
                }, t.prototype.setgLevel = function(e) {
                    this._charsetService.setgLevel(e)
                }, t.prototype.screenAlignmentPattern = function() {
                    var e = new d.CellData;
                    e.content = 1 << 22 | "E".charCodeAt(0), e.fg = this._curAttrData.fg, e.bg = this._curAttrData.bg;
                    var t = this._bufferService.buffer;
                    this._setCursor(0, 0);
                    for (var r = 0; r < this._bufferService.rows; ++r) {
                        var i = t.y + t.ybase + r;
                        t.lines.get(i).fill(e), t.lines.get(i).isWrapped = !1
                    }
                    this._dirtyRowService.markAllDirty(), this._setCursor(0, 0)
                }, t
            }(c.Disposable);
        t.InputHandler = S
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
            s = r(15),
            a = r(19),
            c = r(20),
            l = r(22),
            h = function() {
                function e(e) {
                    this.table = new Uint8Array(e)
                }
                return e.prototype.setDefault = function(e, t) {
                    s.fill(this.table, e << 4 | t)
                }, e.prototype.add = function(e, t, r, i) {
                    this.table[t << 8 | e] = r << 4 | i
                }, e.prototype.addMany = function(e, t, r, i) {
                    for (var n = 0; n < e.length; n++) this.table[t << 8 | e[n]] = r << 4 | i
                }, e
            }();
        t.TransitionTable = h, t.VT500_TRANSITION_TABLE = function() {
            var e = new h(4095),
                t = Array.apply(null, Array(256)).map(function(e, t) {
                    return t
                }),
                r = function(e, r) {
                    return t.slice(e, r)
                },
                i = r(32, 127),
                n = r(0, 24);
            n.push(25), n.push.apply(n, r(28, 32));
            var o, s = r(0, 14);
            for (o in e.setDefault(1, 0), e.addMany(i, 0, 2, 0), s) e.addMany([24, 26, 153, 154], o, 3, 0), e.addMany(r(128, 144), o, 3, 0), e.addMany(r(144, 152), o, 3, 0), e.add(156, o, 0, 0), e.add(27, o, 11, 1), e.add(157, o, 4, 8), e.addMany([152, 158, 159], o, 0, 7), e.add(155, o, 11, 3), e.add(144, o, 11, 9);
            return e.addMany(n, 0, 3, 0), e.addMany(n, 1, 3, 1), e.add(127, 1, 0, 1), e.addMany(n, 8, 0, 8), e.addMany(n, 3, 3, 3), e.add(127, 3, 0, 3), e.addMany(n, 4, 3, 4), e.add(127, 4, 0, 4), e.addMany(n, 6, 3, 6), e.addMany(n, 5, 3, 5), e.add(127, 5, 0, 5), e.addMany(n, 2, 3, 2), e.add(127, 2, 0, 2), e.add(93, 1, 4, 8), e.addMany(i, 8, 5, 8), e.add(127, 8, 5, 8), e.addMany([156, 27, 24, 26, 7], 8, 6, 0), e.addMany(r(28, 32), 8, 0, 8), e.addMany([88, 94, 95], 1, 0, 7), e.addMany(i, 7, 0, 7), e.addMany(n, 7, 0, 7), e.add(156, 7, 0, 0), e.add(127, 7, 0, 7), e.add(91, 1, 11, 3), e.addMany(r(64, 127), 3, 7, 0), e.addMany(r(48, 60), 3, 8, 4), e.addMany([60, 61, 62, 63], 3, 9, 4), e.addMany(r(48, 60), 4, 8, 4), e.addMany(r(64, 127), 4, 7, 0), e.addMany([60, 61, 62, 63], 4, 0, 6), e.addMany(r(32, 64), 6, 0, 6), e.add(127, 6, 0, 6), e.addMany(r(64, 127), 6, 0, 0), e.addMany(r(32, 48), 3, 9, 5), e.addMany(r(32, 48), 5, 9, 5), e.addMany(r(48, 64), 5, 0, 6), e.addMany(r(64, 127), 5, 7, 0), e.addMany(r(32, 48), 4, 9, 5), e.addMany(r(32, 48), 1, 9, 2), e.addMany(r(32, 48), 2, 9, 2), e.addMany(r(48, 127), 2, 10, 0), e.addMany(r(48, 80), 1, 10, 0), e.addMany(r(81, 88), 1, 10, 0), e.addMany([89, 90, 92], 1, 10, 0), e.addMany(r(96, 127), 1, 10, 0), e.add(80, 1, 11, 9), e.addMany(n, 9, 0, 9), e.add(127, 9, 0, 9), e.addMany(r(28, 32), 9, 0, 9), e.addMany(r(32, 48), 9, 9, 12), e.addMany(r(48, 60), 9, 8, 10), e.addMany([60, 61, 62, 63], 9, 9, 10), e.addMany(n, 11, 0, 11), e.addMany(r(32, 128), 11, 0, 11), e.addMany(r(28, 32), 11, 0, 11), e.addMany(n, 10, 0, 10), e.add(127, 10, 0, 10), e.addMany(r(28, 32), 10, 0, 10), e.addMany(r(48, 60), 10, 8, 10), e.addMany([60, 61, 62, 63], 10, 0, 11), e.addMany(r(32, 48), 10, 9, 12), e.addMany(n, 12, 0, 12), e.add(127, 12, 0, 12), e.addMany(r(28, 32), 12, 0, 12), e.addMany(r(32, 48), 12, 9, 12), e.addMany(r(48, 64), 12, 0, 11), e.addMany(r(64, 127), 12, 12, 13), e.addMany(r(64, 127), 10, 12, 13), e.addMany(r(64, 127), 9, 12, 13), e.addMany(n, 13, 13, 13), e.addMany(i, 13, 13, 13), e.add(127, 13, 0, 13), e.addMany([27, 156, 24, 26], 13, 14, 0), e.add(160, 0, 2, 0), e.add(160, 8, 5, 8), e.add(160, 6, 0, 6), e.add(160, 11, 0, 11), e.add(160, 13, 13, 13), e
        }();
        var u = function(e) {
            function r(r) {
                void 0 === r && (r = t.VT500_TRANSITION_TABLE);
                var i = e.call(this) || this;
                return i.TRANSITIONS = r, i.initialState = 0, i.currentState = i.initialState, i._params = new a.Params, i._params.addParam(0), i._collect = 0, i.precedingCodepoint = 0, i._printHandlerFb = function(e, t, r) {}, i._executeHandlerFb = function(e) {}, i._csiHandlerFb = function(e, t) {}, i._escHandlerFb = function(e) {}, i._errorHandlerFb = function(e) {
                    return e
                }, i._printHandler = i._printHandlerFb, i._executeHandlers = Object.create(null), i._csiHandlers = Object.create(null), i._escHandlers = Object.create(null), i._oscParser = new c.OscParser, i._dcsParser = new l.DcsParser, i._errorHandler = i._errorHandlerFb, i.setEscHandler({
                    final: "\\"
                }, function() {}), i
            }
            return n(r, e), r.prototype._identifier = function(e, t) {
                void 0 === t && (t = [64, 126]);
                var r = 0;
                if (e.prefix) {
                    if (e.prefix.length > 1) throw new Error("only one byte as prefix supported");
                    if ((r = e.prefix.charCodeAt(0)) && 60 > r || r > 63) throw new Error("prefix must be in range 0x3c .. 0x3f")
                }
                if (e.intermediates) {
                    if (e.intermediates.length > 2) throw new Error("only two bytes as intermediates are supported");
                    for (var i = 0; i < e.intermediates.length; ++i) {
                        var n = e.intermediates.charCodeAt(i);
                        if (32 > n || n > 47) throw new Error("intermediate must be in range 0x20 .. 0x2f");
                        r <<= 8, r |= n
                    }
                }
                if (1 !== e.final.length) throw new Error("final must be a single byte");
                var o = e.final.charCodeAt(0);
                if (t[0] > o || o > t[1]) throw new Error("final must be in range " + t[0] + " .. " + t[1]);
                return (r <<= 8) | o
            }, r.prototype.identToString = function(e) {
                for (var t = []; e;) t.push(String.fromCharCode(255 & e)), e >>= 8;
                return t.reverse().join("")
            }, r.prototype.dispose = function() {
                this._csiHandlers = Object.create(null), this._executeHandlers = Object.create(null), this._escHandlers = Object.create(null), this._oscParser.dispose(), this._dcsParser.dispose()
            }, r.prototype.setPrintHandler = function(e) {
                this._printHandler = e
            }, r.prototype.clearPrintHandler = function() {
                this._printHandler = this._printHandlerFb
            }, r.prototype.addEscHandler = function(e, t) {
                var r = this._identifier(e, [48, 126]);
                void 0 === this._escHandlers[r] && (this._escHandlers[r] = []);
                var i = this._escHandlers[r];
                return i.push(t), {
                    dispose: function() {
                        var e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
                    }
                }
            }, r.prototype.setEscHandler = function(e, t) {
                this._escHandlers[this._identifier(e, [48, 126])] = [t]
            }, r.prototype.clearEscHandler = function(e) {
                this._escHandlers[this._identifier(e, [48, 126])] && delete this._escHandlers[this._identifier(e, [48, 126])]
            }, r.prototype.setEscHandlerFallback = function(e) {
                this._escHandlerFb = e
            }, r.prototype.setExecuteHandler = function(e, t) {
                this._executeHandlers[e.charCodeAt(0)] = t
            }, r.prototype.clearExecuteHandler = function(e) {
                this._executeHandlers[e.charCodeAt(0)] && delete this._executeHandlers[e.charCodeAt(0)]
            }, r.prototype.setExecuteHandlerFallback = function(e) {
                this._executeHandlerFb = e
            }, r.prototype.addCsiHandler = function(e, t) {
                var r = this._identifier(e);
                void 0 === this._csiHandlers[r] && (this._csiHandlers[r] = []);
                var i = this._csiHandlers[r];
                return i.push(t), {
                    dispose: function() {
                        var e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
                    }
                }
            }, r.prototype.setCsiHandler = function(e, t) {
                this._csiHandlers[this._identifier(e)] = [t]
            }, r.prototype.clearCsiHandler = function(e) {
                this._csiHandlers[this._identifier(e)] && delete this._csiHandlers[this._identifier(e)]
            }, r.prototype.setCsiHandlerFallback = function(e) {
                this._csiHandlerFb = e
            }, r.prototype.addDcsHandler = function(e, t) {
                return this._dcsParser.addHandler(this._identifier(e), t)
            }, r.prototype.setDcsHandler = function(e, t) {
                this._dcsParser.setHandler(this._identifier(e), t)
            }, r.prototype.clearDcsHandler = function(e) {
                this._dcsParser.clearHandler(this._identifier(e))
            }, r.prototype.setDcsHandlerFallback = function(e) {
                this._dcsParser.setHandlerFallback(e)
            }, r.prototype.addOscHandler = function(e, t) {
                return this._oscParser.addHandler(e, t)
            }, r.prototype.setOscHandler = function(e, t) {
                this._oscParser.setHandler(e, t)
            }, r.prototype.clearOscHandler = function(e) {
                this._oscParser.clearHandler(e)
            }, r.prototype.setOscHandlerFallback = function(e) {
                this._oscParser.setHandlerFallback(e)
            }, r.prototype.setErrorHandler = function(e) {
                this._errorHandler = e
            }, r.prototype.clearErrorHandler = function() {
                this._errorHandler = this._errorHandlerFb
            }, r.prototype.reset = function() {
                this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0
            }, r.prototype.parse = function(e, t) {
                for (var r = 0, i = 0, n = this.currentState, o = this._oscParser, s = this._dcsParser, a = this._collect, c = this._params, l = this.TRANSITIONS.table, h = 0; h < t; ++h) {
                    switch ((i = l[n << 8 | ((r = e[h]) < 160 ? r : 160)]) >> 4) {
                        case 2:
                            for (var u = h + 1;; ++u) {
                                if (u >= t || (r = e[u]) < 32 || r > 126 && r < 160) {
                                    this._printHandler(e, h, u), h = u - 1;
                                    break
                                }
                                if (++u >= t || (r = e[u]) < 32 || r > 126 && r < 160) {
                                    this._printHandler(e, h, u), h = u - 1;
                                    break
                                }
                                if (++u >= t || (r = e[u]) < 32 || r > 126 && r < 160) {
                                    this._printHandler(e, h, u), h = u - 1;
                                    break
                                }
                                if (++u >= t || (r = e[u]) < 32 || r > 126 && r < 160) {
                                    this._printHandler(e, h, u), h = u - 1;
                                    break
                                }
                            }
                            break;
                        case 3:
                            this._executeHandlers[r] ? this._executeHandlers[r]() : this._executeHandlerFb(r), this.precedingCodepoint = 0;
                            break;
                        case 0:
                            break;
                        case 1:
                            if (this._errorHandler({
                                    position: h,
                                    code: r,
                                    currentState: n,
                                    collect: a,
                                    params: c,
                                    abort: !1
                                }).abort) return;
                            break;
                        case 7:
                            for (var f = this._csiHandlers[a << 8 | r], _ = f ? f.length - 1 : -1; _ >= 0 && !1 === f[_](c); _--);
                            _ < 0 && this._csiHandlerFb(a << 8 | r, c), this.precedingCodepoint = 0;
                            break;
                        case 8:
                            do {
                                switch (r) {
                                    case 59:
                                        c.addParam(0);
                                        break;
                                    case 58:
                                        c.addSubParam(-1);
                                        break;
                                    default:
                                        c.addDigit(r - 48)
                                }
                            } while (++h < t && (r = e[h]) > 47 && r < 60);
                            h--;
                            break;
                        case 9:
                            a <<= 8, a |= r;
                            break;
                        case 10:
                            for (var d = this._escHandlers[a << 8 | r], p = d ? d.length - 1 : -1; p >= 0 && !1 === d[p](); p--);
                            p < 0 && this._escHandlerFb(a << 8 | r), this.precedingCodepoint = 0;
                            break;
                        case 11:
                            c.reset(), c.addParam(0), a = 0;
                            break;
                        case 12:
                            s.hook(a << 8 | r, c);
                            break;
                        case 13:
                            for (var v = h + 1;; ++v)
                                if (v >= t || 24 === (r = e[v]) || 26 === r || 27 === r || r > 127 && r < 160) {
                                    s.put(e, h, v), h = v - 1;
                                    break
                                } break;
                        case 14:
                            s.unhook(24 !== r && 26 !== r), 27 === r && (i |= 1), c.reset(), c.addParam(0), a = 0, this.precedingCodepoint = 0;
                            break;
                        case 4:
                            o.start();
                            break;
                        case 5:
                            for (var g = h + 1;; g++)
                                if (g >= t || (r = e[g]) < 32 || r > 127 && r <= 159) {
                                    o.put(e, h, g), h = g - 1;
                                    break
                                } break;
                        case 6:
                            o.end(24 !== r && 26 !== r), 27 === r && (i |= 1), c.reset(), c.addParam(0), a = 0, this.precedingCodepoint = 0
                    }
                    n = 15 & i
                }
                this._collect = a, this.currentState = n
            }, r
        }(o.Disposable);
        t.EscapeSequenceParser = u
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
            }),
            o = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            s = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(40),
            c = r(46),
            l = r(47),
            h = r(48),
            u = r(27),
            f = r(2),
            _ = r(4),
            d = r(0),
            p = r(23),
            v = r(1),
            g = 1,
            y = function(e) {
                function t(t, r, i, n, o, s, f, _) {
                    var d = e.call(this) || this;
                    d._colors = t, d._screenElement = r, d._linkifier = i, d._bufferService = n, d._charSizeService = o, d._optionsService = s, d.coreService = f, d.coreBrowserService = _, d._id = g++, d._onRequestRefreshRows = new v.EventEmitter;
                    var p = d._optionsService.options.allowTransparency;
                    return d._characterJoinerRegistry = new u.CharacterJoinerRegistry(d._bufferService), d._renderLayers = [new a.TextRenderLayer(d._screenElement, 0, d._colors, d._characterJoinerRegistry, p, d._id, d._bufferService, s), new c.SelectionRenderLayer(d._screenElement, 1, d._colors, d._id, d._bufferService, s), new h.LinkRenderLayer(d._screenElement, 2, d._colors, d._id, d._linkifier, d._bufferService, s), new l.CursorRenderLayer(d._screenElement, 3, d._colors, d._id, d._onRequestRefreshRows, d._bufferService, s, f, _)], d.dimensions = {
                        scaledCharWidth: 0,
                        scaledCharHeight: 0,
                        scaledCellWidth: 0,
                        scaledCellHeight: 0,
                        scaledCharLeft: 0,
                        scaledCharTop: 0,
                        scaledCanvasWidth: 0,
                        scaledCanvasHeight: 0,
                        canvasWidth: 0,
                        canvasHeight: 0,
                        actualCellWidth: 0,
                        actualCellHeight: 0
                    }, d._devicePixelRatio = window.devicePixelRatio, d._updateDimensions(), d.onOptionsChanged(), d
                }
                return n(t, e), Object.defineProperty(t.prototype, "onRequestRefreshRows", {
                    get: function() {
                        return this._onRequestRefreshRows.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.dispose = function() {
                    e.prototype.dispose.call(this), this._renderLayers.forEach(function(e) {
                        return e.dispose()
                    }), p.removeTerminalFromCache(this._id)
                }, t.prototype.onDevicePixelRatioChange = function() {
                    this._devicePixelRatio !== window.devicePixelRatio && (this._devicePixelRatio = window.devicePixelRatio, this.onResize(this._bufferService.cols, this._bufferService.rows))
                }, t.prototype.setColors = function(e) {
                    var t = this;
                    this._colors = e, this._renderLayers.forEach(function(e) {
                        e.setColors(t._colors), e.reset()
                    })
                }, t.prototype.onResize = function(e, t) {
                    var r = this;
                    this._updateDimensions(), this._renderLayers.forEach(function(e) {
                        return e.resize(r.dimensions)
                    }), this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px"
                }, t.prototype.onCharSizeChanged = function() {
                    this.onResize(this._bufferService.cols, this._bufferService.rows)
                }, t.prototype.onBlur = function() {
                    this._runOperation(function(e) {
                        return e.onBlur()
                    })
                }, t.prototype.onFocus = function() {
                    this._runOperation(function(e) {
                        return e.onFocus()
                    })
                }, t.prototype.onSelectionChanged = function(e, t, r) {
                    void 0 === r && (r = !1), this._runOperation(function(i) {
                        return i.onSelectionChanged(e, t, r)
                    })
                }, t.prototype.onCursorMove = function() {
                    this._runOperation(function(e) {
                        return e.onCursorMove()
                    })
                }, t.prototype.onOptionsChanged = function() {
                    this._runOperation(function(e) {
                        return e.onOptionsChanged()
                    })
                }, t.prototype.clear = function() {
                    this._runOperation(function(e) {
                        return e.reset()
                    })
                }, t.prototype._runOperation = function(e) {
                    this._renderLayers.forEach(function(t) {
                        return e(t)
                    })
                }, t.prototype.renderRows = function(e, t) {
                    this._renderLayers.forEach(function(r) {
                        return r.onGridChanged(e, t)
                    })
                }, t.prototype._updateDimensions = function() {
                    this._charSizeService.hasValidSize && (this.dimensions.scaledCharWidth = Math.floor(this._charSizeService.width * window.devicePixelRatio), this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.options.lineHeight), this.dimensions.scaledCharTop = 1 === this._optionsService.options.lineHeight ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.options.letterSpacing), this.dimensions.scaledCharLeft = Math.floor(this._optionsService.options.letterSpacing / 2), this.dimensions.scaledCanvasHeight = this._bufferService.rows * this.dimensions.scaledCellHeight, this.dimensions.scaledCanvasWidth = this._bufferService.cols * this.dimensions.scaledCellWidth, this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows, this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols)
                }, t.prototype.registerCharacterJoiner = function(e) {
                    return this._characterJoinerRegistry.registerCharacterJoiner(e)
                }, t.prototype.deregisterCharacterJoiner = function(e) {
                    return this._characterJoinerRegistry.deregisterCharacterJoiner(e)
                }, o([s(3, d.IBufferService), s(4, _.ICharSizeService), s(5, d.IOptionsService), s(6, d.ICoreService), s(7, _.ICoreBrowserService)], t)
            }(f.Disposable);
        t.Renderer = y
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
        var o = r(41),
            s = r(13),
            a = r(6),
            c = r(3),
            l = r(27),
            h = r(5),
            u = function(e) {
                function t(t, r, i, n, s, a, c, l) {
                    var u = e.call(this, t, "text", r, s, i, a, c, l) || this;
                    return u.bufferService = c, u.optionsService = l, u._characterWidth = 0, u._characterFont = "", u._characterOverlapCache = {}, u._workCell = new h.CellData, u._state = new o.GridCache, u._characterJoinerRegistry = n, u
                }
                return n(t, e), t.prototype.resize = function(t) {
                    e.prototype.resize.call(this, t);
                    var r = this._getFont(!1, !1);
                    this._characterWidth === t.scaledCharWidth && this._characterFont === r || (this._characterWidth = t.scaledCharWidth, this._characterFont = r, this._characterOverlapCache = {}), this._state.clear(), this._state.resize(this._bufferService.cols, this._bufferService.rows)
                }, t.prototype.reset = function() {
                    this._state.clear(), this._clearAll()
                }, t.prototype._forEachCell = function(e, t, r, i) {
                    for (var n = e; n <= t; n++)
                        for (var o = n + this._bufferService.buffer.ydisp, s = this._bufferService.buffer.lines.get(o), a = r ? r.getJoinedCharacters(o) : [], h = 0; h < this._bufferService.cols; h++) {
                            s.loadCell(h, this._workCell);
                            var u = this._workCell,
                                f = !1,
                                _ = h;
                            if (0 !== u.getWidth()) {
                                if (a.length > 0 && h === a[0][0]) {
                                    f = !0;
                                    var d = a.shift();
                                    u = new l.JoinedCellData(this._workCell, s.translateToString(!0, d[0], d[1]), d[1] - d[0]), _ = d[1] - 1
                                }!f && this._isOverlapping(u) && _ < s.length - 1 && s.getCodePoint(_ + 1) === c.NULL_CELL_CODE && (u.content &= -12582913, u.content |= 2 << 22), i(u, h, n), h = _
                            }
                        }
                }, t.prototype._drawBackground = function(e, t) {
                    var r = this,
                        i = this._ctx,
                        n = this._bufferService.cols,
                        o = 0,
                        s = 0,
                        c = null;
                    i.save(), this._forEachCell(e, t, null, function(e, t, l) {
                        var h = null;
                        e.isInverse() ? h = e.isFgDefault() ? r._colors.foreground.css : e.isFgRGB() ? "rgb(" + a.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")" : r._colors.ansi[e.getFgColor()].css : e.isBgRGB() ? h = "rgb(" + a.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")" : e.isBgPalette() && (h = r._colors.ansi[e.getBgColor()].css), null === c && (o = t, s = l), l !== s ? (i.fillStyle = c || "", r._fillCells(o, s, n - o, 1), o = t, s = l) : c !== h && (i.fillStyle = c || "", r._fillCells(o, s, t - o, 1), o = t, s = l), c = h
                    }), null !== c && (i.fillStyle = c, this._fillCells(o, s, n - o, 1)), i.restore()
                }, t.prototype._drawForeground = function(e, t) {
                    var r = this;
                    this._forEachCell(e, t, this._characterJoinerRegistry, function(e, t, i) {
                        if (!e.isInvisible() && (r._drawChars(e, t, i), e.isUnderline())) {
                            if (r._ctx.save(), e.isInverse())
                                if (e.isBgDefault()) r._ctx.fillStyle = r._colors.background.css;
                                else if (e.isBgRGB()) r._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")";
                            else {
                                var n = e.getBgColor();
                                r._optionsService.options.drawBoldTextInBrightColors && e.isBold() && n < 8 && (n += 8), r._ctx.fillStyle = r._colors.ansi[n].css
                            } else if (e.isFgDefault()) r._ctx.fillStyle = r._colors.foreground.css;
                            else if (e.isFgRGB()) r._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")";
                            else {
                                var o = e.getFgColor();
                                r._optionsService.options.drawBoldTextInBrightColors && e.isBold() && o < 8 && (o += 8), r._ctx.fillStyle = r._colors.ansi[o].css
                            }
                            r._fillBottomLineAtCells(t, i, e.getWidth()), r._ctx.restore()
                        }
                    })
                }, t.prototype.onGridChanged = function(e, t) {
                    0 !== this._state.cache.length && (this._charAtlas && this._charAtlas.beginFrame(), this._clearCells(0, e, this._bufferService.cols, t - e + 1), this._drawBackground(e, t), this._drawForeground(e, t))
                }, t.prototype.onOptionsChanged = function() {
                    this._setTransparency(this._optionsService.options.allowTransparency)
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
        t.TextRenderLayer = u
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
                    for (var i = this.cache[r].length; i < t; i++) this.cache[r].push(void 0);
                    this.cache[r].length = t
                }
                this.cache.length = e
            }, e.prototype.clear = function() {
                for (var e = 0; e < this.cache.length; e++)
                    for (var t = 0; t < this.cache[e].length; t++) this.cache[e][t] = void 0
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
        var o = r(9),
            s = r(43),
            a = r(25),
            c = r(45),
            l = r(11),
            h = r(26),
            u = r(10),
            f = 1024,
            _ = 1024,
            d = {
                css: "rgba(0, 0, 0, 0)",
                rgba: 0
            };

        function p(e) {
            return e.code << 21 | e.bg << 12 | e.fg << 3 | (e.bold ? 0 : 4) + (e.dim ? 0 : 2) + (e.italic ? 0 : 1)
        }
        t.getGlyphCacheKey = p;
        var v = function(e) {
            function t(t, r) {
                var i = e.call(this) || this;
                i._config = r, i._drawToCacheCount = 0, i._glyphsWaitingOnBitmap = [], i._bitmapCommitTimeout = null, i._bitmap = null, i._cacheCanvas = t.createElement("canvas"), i._cacheCanvas.width = f, i._cacheCanvas.height = _, i._cacheCtx = h.throwIfFalsy(i._cacheCanvas.getContext("2d", {
                    alpha: !0
                }));
                var n = t.createElement("canvas");
                n.width = i._config.scaledCharWidth, n.height = i._config.scaledCharHeight, i._tmpCtx = h.throwIfFalsy(n.getContext("2d", {
                    alpha: i._config.allowTransparency
                })), i._width = Math.floor(f / i._config.scaledCharWidth), i._height = Math.floor(_ / i._config.scaledCharHeight);
                var o = i._width * i._height;
                return i._cacheMap = new c.LRUMap(o), i._cacheMap.prealloc(o), i
            }
            return n(t, e), t.prototype.dispose = function() {
                null !== this._bitmapCommitTimeout && (window.clearTimeout(this._bitmapCommitTimeout), this._bitmapCommitTimeout = null)
            }, t.prototype.beginFrame = function() {
                this._drawToCacheCount = 0
            }, t.prototype.draw = function(e, t, r, i) {
                if (32 === t.code) return !0;
                if (!this._canCache(t)) return !1;
                var n = p(t),
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
                return this._config.allowTransparency ? d : e.bg === o.INVERTED_DEFAULT_COLOR ? this._config.colors.foreground : e.bg < 256 ? this._getColorFromAnsiIndex(e.bg) : this._config.colors.background
            }, t.prototype._getForegroundColor = function(e) {
                return e.fg === o.INVERTED_DEFAULT_COLOR ? u.color.opaque(this._config.colors.background) : e.fg < 256 ? this._getColorFromAnsiIndex(e.fg) : this._config.colors.foreground
            }, t.prototype._drawToCache = function(e, t) {
                this._drawToCacheCount++, this._tmpCtx.save();
                var r = this._getBackgroundColor(e);
                this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = r.css, this._tmpCtx.fillRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), this._tmpCtx.globalCompositeOperation = "source-over";
                var i = e.bold ? this._config.fontWeightBold : this._config.fontWeight,
                    n = e.italic ? "italic" : "";
                this._tmpCtx.font = n + " " + i + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily, this._tmpCtx.textBaseline = "middle", this._tmpCtx.fillStyle = this._getForegroundColor(e).css, e.dim && (this._tmpCtx.globalAlpha = o.DIM_OPACITY), this._tmpCtx.fillText(e.chars, 0, this._config.scaledCharHeight / 2), this._tmpCtx.restore();
                var s = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight),
                    a = !1;
                this._config.allowTransparency || (a = function(e, t) {
                    for (var r = !0, i = t.rgba >>> 24, n = t.rgba >>> 16 & 255, o = t.rgba >>> 8 & 255, s = 0; s < e.data.length; s += 4) e.data[s] === i && e.data[s + 1] === n && e.data[s + 2] === o ? e.data[s + 3] = 0 : r = !1;
                    return r
                }(s, r));
                var c = this._toCoordinateX(t),
                    l = this._toCoordinateY(t);
                this._cacheCtx.putImageData(s, c, l);
                var h = {
                    index: t,
                    isEmpty: a,
                    inBitmap: !1
                };
                return this._addGlyphToBitmap(h), h
            }, t.prototype._addGlyphToBitmap = function(e) {
                var t = this;
                "createImageBitmap" in window && !l.isFirefox && !l.isSafari && (this._glyphsWaitingOnBitmap.push(e), null === this._bitmapCommitTimeout && (this._bitmapCommitTimeout = window.setTimeout(function() {
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
        }(s.BaseCharAtlas);
        t.DynamicCharAtlas = v;
        var g = function(e) {
            function t(t, r) {
                return e.call(this) || this
            }
            return n(t, e), t.prototype.draw = function(e, t, r, i) {
                return !1
            }, t
        }(s.BaseCharAtlas);
        t.NoneCharAtlas = g
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
        t.BaseCharAtlas = i
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                this._color = {}, this._rgba = {}
            }
            return e.prototype.clear = function() {
                this._color = {}, this._rgba = {}
            }, e.prototype.setCss = function(e, t, r) {
                this._rgba[e] || (this._rgba[e] = {}), this._rgba[e][t] = r
            }, e.prototype.getCss = function(e, t) {
                return this._rgba[e] ? this._rgba[e][t] : void 0
            }, e.prototype.setColor = function(e, t, r) {
                this._color[e] || (this._color[e] = {}), this._color[e][t] = r
            }, e.prototype.getColor = function(e, t) {
                return this._color[e] ? this._color[e][t] : void 0
            }, e
        }();
        t.ColorContrastCache = i
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
        t.LRUMap = i
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
            function t(t, r, i, n, o, s) {
                var a = e.call(this, t, "selection", r, !0, i, n, o, s) || this;
                return a.bufferService = o, a.optionsService = s, a._clearState(), a
            }
            return n(t, e), t.prototype._clearState = function() {
                this._state = {
                    start: void 0,
                    end: void 0,
                    columnSelectMode: void 0,
                    ydisp: void 0
                }
            }, t.prototype.resize = function(t) {
                e.prototype.resize.call(this, t), this._clearState()
            }, t.prototype.reset = function() {
                this._state.start && this._state.end && (this._clearState(), this._clearAll())
            }, t.prototype.onSelectionChanged = function(e, t, r) {
                if (this._didStateChange(e, t, r, this._bufferService.buffer.ydisp))
                    if (this._clearAll(), e && t) {
                        var i = e[1] - this._bufferService.buffer.ydisp,
                            n = t[1] - this._bufferService.buffer.ydisp,
                            o = Math.max(i, 0),
                            s = Math.min(n, this._bufferService.rows - 1);
                        if (!(o >= this._bufferService.rows || s < 0)) {
                            if (this._ctx.fillStyle = this._colors.selection.css, r) {
                                var a = e[0],
                                    c = t[0] - a,
                                    l = s - o + 1;
                                this._fillCells(a, o, c, l)
                            } else {
                                a = i === o ? e[0] : 0;
                                var h = o === s ? t[0] : this._bufferService.cols;
                                this._fillCells(a, o, h - a, 1);
                                var u = Math.max(s - o - 1, 0);
                                if (this._fillCells(0, o + 1, this._bufferService.cols, u), o !== s) {
                                    var f = n === s ? t[0] : this._bufferService.cols;
                                    this._fillCells(0, s, f, 1)
                                }
                            }
                            this._state.start = [e[0], e[1]], this._state.end = [t[0], t[1]], this._state.columnSelectMode = r, this._state.ydisp = this._bufferService.buffer.ydisp
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
            s = r(5),
            a = function(e) {
                function t(t, r, i, n, o, a, c, l, h) {
                    var u = e.call(this, t, "cursor", r, !0, i, n, a, c) || this;
                    return u._onRequestRefreshRowsEvent = o, u.bufferService = a, u.optionsService = c, u._coreService = l, u._coreBrowserService = h, u._cell = new s.CellData, u._state = {
                        x: 0,
                        y: 0,
                        isFocused: !1,
                        style: "",
                        width: 0
                    }, u._cursorRenderers = {
                        bar: u._renderBarCursor.bind(u),
                        block: u._renderBlockCursor.bind(u),
                        underline: u._renderUnderlineCursor.bind(u)
                    }, u
                }
                return n(t, e), t.prototype.resize = function(t) {
                    e.prototype.resize.call(this, t), this._state = {
                        x: 0,
                        y: 0,
                        isFocused: !1,
                        style: "",
                        width: 0
                    }
                }, t.prototype.reset = function() {
                    this._clearCursor(), this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), this._cursorBlinkStateManager = void 0, this.onOptionsChanged())
                }, t.prototype.onBlur = function() {
                    this._cursorBlinkStateManager && this._cursorBlinkStateManager.pause(), this._onRequestRefreshRowsEvent.fire({
                        start: this._bufferService.buffer.y,
                        end: this._bufferService.buffer.y
                    })
                }, t.prototype.onFocus = function() {
                    this._cursorBlinkStateManager ? this._cursorBlinkStateManager.resume() : this._onRequestRefreshRowsEvent.fire({
                        start: this._bufferService.buffer.y,
                        end: this._bufferService.buffer.y
                    })
                }, t.prototype.onOptionsChanged = function() {
                    var e, t = this;
                    this._optionsService.options.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new c(this._coreBrowserService.isFocused, function() {
                        t._render(!0)
                    })) : (null === (e = this._cursorBlinkStateManager) || void 0 === e || e.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRefreshRowsEvent.fire({
                        start: this._bufferService.buffer.y,
                        end: this._bufferService.buffer.y
                    })
                }, t.prototype.onCursorMove = function() {
                    this._cursorBlinkStateManager && this._cursorBlinkStateManager.restartBlinkAnimation()
                }, t.prototype.onGridChanged = function(e, t) {
                    !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(!1) : this._cursorBlinkStateManager.restartBlinkAnimation()
                }, t.prototype._render = function(e) {
                    if (this._coreService.isCursorInitialized && !this._coreService.isCursorHidden) {
                        var t = this._bufferService.buffer.ybase + this._bufferService.buffer.y,
                            r = t - this._bufferService.buffer.ydisp;
                        if (r < 0 || r >= this._bufferService.rows) this._clearCursor();
                        else if (this._bufferService.buffer.lines.get(t).loadCell(this._bufferService.buffer.x, this._cell), void 0 !== this._cell.content) {
                            if (!this._coreBrowserService.isFocused) {
                                this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css;
                                var i = this._optionsService.options.cursorStyle;
                                return i && "block" !== i ? this._cursorRenderers[i](this._bufferService.buffer.x, r, this._cell) : this._renderBlurCursor(this._bufferService.buffer.x, r, this._cell), this._ctx.restore(), this._state.x = this._bufferService.buffer.x, this._state.y = r, this._state.isFocused = !1, this._state.style = i, void(this._state.width = this._cell.getWidth())
                            }
                            if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                                if (this._state) {
                                    if (this._state.x === this._bufferService.buffer.x && this._state.y === r && this._state.isFocused === this._coreBrowserService.isFocused && this._state.style === this._optionsService.options.cursorStyle && this._state.width === this._cell.getWidth()) return;
                                    this._clearCursor()
                                }
                                this._ctx.save(), this._cursorRenderers[this._optionsService.options.cursorStyle || "block"](this._bufferService.buffer.x, r, this._cell), this._ctx.restore(), this._state.x = this._bufferService.buffer.x, this._state.y = r, this._state.isFocused = !1, this._state.style = this._optionsService.options.cursorStyle, this._state.width = this._cell.getWidth()
                            } else this._clearCursor()
                        }
                    } else this._clearCursor()
                }, t.prototype._clearCursor = function() {
                    this._state && (this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = {
                        x: 0,
                        y: 0,
                        isFocused: !1,
                        style: "",
                        width: 0
                    })
                }, t.prototype._renderBarCursor = function(e, t, r) {
                    this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillLeftLineAtCell(e, t, this._optionsService.options.cursorWidth), this._ctx.restore()
                }, t.prototype._renderBlockCursor = function(e, t, r) {
                    this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillCells(e, t, r.getWidth(), 1), this._ctx.fillStyle = this._colors.cursorAccent.css, this._fillCharTrueColor(r, e, t), this._ctx.restore()
                }, t.prototype._renderUnderlineCursor = function(e, t, r) {
                    this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillBottomLineAtCells(e, t), this._ctx.restore()
                }, t.prototype._renderBlurCursor = function(e, t, r) {
                    this._ctx.save(), this._ctx.strokeStyle = this._colors.cursor.css, this._strokeRectAtCell(e, t, r.getWidth(), 1), this._ctx.restore()
                }, t
            }(o.BaseRenderLayer);
        t.CursorRenderLayer = a;
        var c = function() {
            function e(e, t) {
                this._renderCallback = t, this.isCursorVisible = !0, e && this._restartInterval()
            }
            return Object.defineProperty(e.prototype, "isPaused", {
                get: function() {
                    return !(this._blinkStartTimeout || this._blinkInterval)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function() {
                this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
            }, e.prototype.restartBlinkAnimation = function() {
                var e = this;
                this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = !0, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                    e._renderCallback(), e._animationFrame = void 0
                })))
            }, e.prototype._restartInterval = function(e) {
                var t = this;
                void 0 === e && (e = 600), this._blinkInterval && window.clearInterval(this._blinkInterval), this._blinkStartTimeout = setTimeout(function() {
                    if (t._animationTimeRestarted) {
                        var e = 600 - (Date.now() - t._animationTimeRestarted);
                        if (t._animationTimeRestarted = void 0, e > 0) return void t._restartInterval(e)
                    }
                    t.isCursorVisible = !1, t._animationFrame = window.requestAnimationFrame(function() {
                        t._renderCallback(), t._animationFrame = void 0
                    }), t._blinkInterval = setInterval(function() {
                        if (t._animationTimeRestarted) {
                            var e = 600 - (Date.now() - t._animationTimeRestarted);
                            return t._animationTimeRestarted = void 0, void t._restartInterval(e)
                        }
                        t.isCursorVisible = !t.isCursorVisible, t._animationFrame = window.requestAnimationFrame(function() {
                            t._renderCallback(), t._animationFrame = void 0
                        })
                    }, 600)
                }, e)
            }, e.prototype.pause = function() {
                this.isCursorVisible = !0, this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
            }, e.prototype.resume = function() {
                this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation()
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
            s = r(9),
            a = r(24),
            c = function(e) {
                function t(t, r, i, n, o, s, a) {
                    var c = e.call(this, t, "link", r, !0, i, n, s, a) || this;
                    return c.bufferService = s, c.optionsService = a, o.onLinkHover(function(e) {
                        return c._onLinkHover(e)
                    }), o.onLinkLeave(function(e) {
                        return c._onLinkLeave(e)
                    }), c
                }
                return n(t, e), t.prototype.resize = function(t) {
                    e.prototype.resize.call(this, t), this._state = void 0
                }, t.prototype.reset = function() {
                    this._clearCurrentLink()
                }, t.prototype._clearCurrentLink = function() {
                    if (this._state) {
                        this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                        var e = this._state.y2 - this._state.y1 - 1;
                        e > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, e), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0
                    }
                }, t.prototype._onLinkHover = function(e) {
                    if (e.fg === s.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._colors.background.css : e.fg && a.is256Color(e.fg) ? this._ctx.fillStyle = this._colors.ansi[e.fg].css : this._ctx.fillStyle = this._colors.foreground.css, e.y1 === e.y2) this._fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1);
                    else {
                        this._fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
                        for (var t = e.y1 + 1; t < e.y2; t++) this._fillBottomLineAtCells(0, t, e.cols);
                        this._fillBottomLineAtCells(0, e.y2, e.x2)
                    }
                    this._state = e
                }, t.prototype._onLinkLeave = function(e) {
                    this._clearCurrentLink()
                }, t
            }(o.BaseRenderLayer);
        t.LinkRenderLayer = c
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(1),
            n = function() {
                function e(e, t, r, n) {
                    this._bufferService = e, this._logService = t, this._optionsService = r, this._unicodeService = n, this._linkMatchers = [], this._nextLinkMatcherId = 0, this._onLinkHover = new i.EventEmitter, this._onLinkLeave = new i.EventEmitter, this._onLinkTooltip = new i.EventEmitter, this._rowsToLinkify = {
                        start: void 0,
                        end: void 0
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
                }), e.prototype.attachToDom = function(e, t) {
                    this._element = e, this._mouseZoneManager = t
                }, e.prototype.linkifyRows = function(t, r) {
                    var i = this;
                    this._mouseZoneManager && (void 0 === this._rowsToLinkify.start || void 0 === this._rowsToLinkify.end ? (this._rowsToLinkify.start = t, this._rowsToLinkify.end = r) : (this._rowsToLinkify.start = Math.min(this._rowsToLinkify.start, t), this._rowsToLinkify.end = Math.max(this._rowsToLinkify.end, r)), this._mouseZoneManager.clearAll(t, r), this._rowsTimeoutId && clearTimeout(this._rowsTimeoutId), this._rowsTimeoutId = setTimeout(function() {
                        return i._linkifyRows()
                    }, e._timeBeforeLatency))
                }, e.prototype._linkifyRows = function() {
                    this._rowsTimeoutId = void 0;
                    var e = this._bufferService.buffer;
                    if (void 0 !== this._rowsToLinkify.start && void 0 !== this._rowsToLinkify.end) {
                        var t = e.ydisp + this._rowsToLinkify.start;
                        if (!(t >= e.lines.length)) {
                            for (var r = e.ydisp + Math.min(this._rowsToLinkify.end, this._bufferService.rows) + 1, i = Math.ceil(2e3 / this._bufferService.cols), n = this._bufferService.buffer.iterator(!1, t, r, i, i); n.hasNext();)
                                for (var o = n.next(), s = 0; s < this._linkMatchers.length; s++) this._doLinkifyRow(o.range.first, o.content, this._linkMatchers[s]);
                            this._rowsToLinkify.start = void 0, this._rowsToLinkify.end = void 0
                        }
                    } else this._logService.debug("_rowToLinkify was unset before _linkifyRows was called")
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
                    for (var i, n = this, o = new RegExp(r.regex.source, (r.regex.flags || "") + "g"), s = -1, a = function() {
                            var a = i["number" != typeof r.matchIndex ? 0 : r.matchIndex];
                            if (!a) return c._logService.debug("match found without corresponding matchIndex", i, r), "break";
                            if (s = t.indexOf(a, s + 1), o.lastIndex = s + a.length, s < 0) return "break";
                            var l = c._bufferService.buffer.stringIndexToBufferIndex(e, s);
                            if (l[0] < 0) return "break";
                            var h = c._bufferService.buffer.lines.get(l[0]);
                            if (!h) return "break";
                            var u = h.getFg(l[1]),
                                f = u ? u >> 9 & 511 : void 0;
                            r.validationCallback ? r.validationCallback(a, function(e) {
                                n._rowsTimeoutId || e && n._addLink(l[1], l[0] - n._bufferService.buffer.ydisp, a, r, f)
                            }) : c._addLink(l[1], l[0] - c._bufferService.buffer.ydisp, a, r, f)
                        }, c = this; null !== (i = o.exec(t)) && "break" !== a(););
                }, e.prototype._addLink = function(e, t, r, i, n) {
                    var s = this;
                    if (this._mouseZoneManager && this._element) {
                        var a = this._unicodeService.getStringCellWidth(r),
                            c = e % this._bufferService.cols,
                            l = t + Math.floor(e / this._bufferService.cols),
                            h = (c + a) % this._bufferService.cols,
                            u = l + Math.floor((c + a) / this._bufferService.cols);
                        0 === h && (h = this._bufferService.cols, u--), this._mouseZoneManager.add(new o(c + 1, l + 1, h + 1, u + 1, function(e) {
                            if (i.handler) return i.handler(e, r);
                            var t = window.open();
                            t ? (t.opener = null, t.location.href = r) : console.warn("Opening link blocked as opener could not be cleared")
                        }, function() {
                            s._onLinkHover.fire(s._createLinkHoverEvent(c, l, h, u, n)), s._element.classList.add("xterm-cursor-pointer")
                        }, function(e) {
                            s._onLinkTooltip.fire(s._createLinkHoverEvent(c, l, h, u, n)), i.hoverTooltipCallback && i.hoverTooltipCallback(e, r, {
                                start: {
                                    x: c,
                                    y: l
                                },
                                end: {
                                    x: h,
                                    y: u
                                }
                            })
                        }, function() {
                            s._onLinkLeave.fire(s._createLinkHoverEvent(c, l, h, u, n)), s._element.classList.remove("xterm-cursor-pointer"), i.hoverLeaveCallback && i.hoverLeaveCallback()
                        }, function(e) {
                            return !i.willLinkActivate || i.willLinkActivate(e, r)
                        }))
                    }
                }, e.prototype._createLinkHoverEvent = function(e, t, r, i, n) {
                    return {
                        x1: e,
                        y1: t,
                        x2: r,
                        y2: i,
                        cols: this._bufferService.cols,
                        fg: n
                    }
                }, e._timeBeforeLatency = 200, e
            }();
        t.Linkifier = n;
        var o = function(e, t, r, i, n, o, s, a, c) {
            this.x1 = e, this.y1 = t, this.x2 = r, this.y2 = i, this.clickCallback = n, this.hoverCallback = o, this.tooltipCallback = s, this.leaveCallback = a, this.willLinkActivate = c
        };
        t.MouseZone = o
    }, function(e, t, r) {
        "use strict";
        var i = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            n = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(11),
            s = r(51),
            a = r(5),
            c = r(1),
            l = r(4),
            h = r(0),
            u = r(28),
            f = r(52),
            _ = String.fromCharCode(160),
            d = new RegExp(_, "g"),
            p = function() {
                function e(e, t, r, i, n, o, l, h) {
                    var u = this;
                    this._scrollLines = e, this._element = t, this._screenElement = r, this._charSizeService = i, this._bufferService = n, this._coreService = o, this._mouseService = l, this._optionsService = h, this._dragScrollAmount = 0, this._enabled = !0, this._workCell = new a.CellData, this._mouseDownTimeStamp = 0, this._onLinuxMouseSelection = new c.EventEmitter, this._onRedrawRequest = new c.EventEmitter, this._onSelectionChange = new c.EventEmitter, this._mouseMoveListener = function(e) {
                        return u._onMouseMove(e)
                    }, this._mouseUpListener = function(e) {
                        return u._onMouseUp(e)
                    }, this._coreService.onUserInput(function() {
                        u.hasSelection && u.clearSelection()
                    }), this._trimListener = this._bufferService.buffer.lines.onTrim(function(e) {
                        return u._onTrim(e)
                    }), this._bufferService.buffers.onBufferActivate(function(e) {
                        return u._onBufferActivate(e)
                    }), this.enable(), this._model = new s.SelectionModel(this._bufferService), this._activeSelectionMode = 0
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
                }, e.prototype.reset = function() {
                    this.clearSelection()
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
                        var r = this._bufferService.buffer,
                            i = [];
                        if (3 === this._activeSelectionMode) {
                            if (e[0] === t[0]) return "";
                            for (var n = e[1]; n <= t[1]; n++) {
                                var s = r.translateBufferLineToString(n, !0, e[0], t[0]);
                                i.push(s)
                            }
                        } else {
                            var a = e[1] === t[1] ? t[0] : void 0;
                            for (i.push(r.translateBufferLineToString(e[1], !0, e[0], a)), n = e[1] + 1; n <= t[1] - 1; n++) {
                                var c = r.lines.get(n);
                                s = r.translateBufferLineToString(n, !0), c && c.isWrapped ? i[i.length - 1] += s : i.push(s)
                            }
                            e[1] !== t[1] && (c = r.lines.get(t[1]), s = r.translateBufferLineToString(t[1], !0, 0, t[0]), c && c.isWrapped ? i[i.length - 1] += s : i.push(s))
                        }
                        return i.map(function(e) {
                            return e.replace(d, " ")
                        }).join(o.isWindows ? "\r\n" : "\n")
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.clearSelection = function() {
                    this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire()
                }, e.prototype.refresh = function(e) {
                    var t = this;
                    this._refreshAnimationFrame || (this._refreshAnimationFrame = window.requestAnimationFrame(function() {
                        return t._refresh()
                    })), o.isLinux && e && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText)
                }, e.prototype._refresh = function() {
                    this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({
                        start: this._model.finalSelectionStart,
                        end: this._model.finalSelectionEnd,
                        columnSelectMode: 3 === this._activeSelectionMode
                    })
                }, e.prototype.isClickInSelection = function(e) {
                    var t = this._getMouseBufferCoords(e),
                        r = this._model.finalSelectionStart,
                        i = this._model.finalSelectionEnd;
                    return !!(r && i && t) && this._areCoordsInSelection(t, r, i)
                }, e.prototype._areCoordsInSelection = function(e, t, r) {
                    return e[1] > t[1] && e[1] < r[1] || t[1] === r[1] && e[1] === t[1] && e[0] >= t[0] && e[0] < r[0] || t[1] < r[1] && e[1] === r[1] && e[0] < r[0] || t[1] < r[1] && e[1] === t[1] && e[0] >= t[0]
                }, e.prototype.selectWordAtCursor = function(e) {
                    var t = this._getMouseBufferCoords(e);
                    t && (this._selectWordAt(t, !1), this._model.selectionEnd = void 0, this.refresh(!0))
                }, e.prototype.selectAll = function() {
                    this._model.isSelectAllActive = !0, this.refresh(), this._onSelectionChange.fire()
                }, e.prototype.selectLines = function(e, t) {
                    this._model.clearSelection(), e = Math.max(e, 0), t = Math.min(t, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e], this._model.selectionEnd = [this._bufferService.cols, t], this.refresh(), this._onSelectionChange.fire()
                }, e.prototype._onTrim = function(e) {
                    this._model.onTrim(e) && this.refresh()
                }, e.prototype._getMouseBufferCoords = function(e) {
                    var t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows, !0);
                    if (t) return t[0]--, t[1]--, t[1] += this._bufferService.buffer.ydisp, t
                }, e.prototype._getMouseEventScrollAmount = function(e) {
                    var t = u.getCoordsRelativeToElement(e, this._screenElement)[1],
                        r = this._bufferService.rows * Math.ceil(this._charSizeService.height * this._optionsService.options.lineHeight);
                    return t >= 0 && t <= r ? 0 : (t > r && (t -= r), t = Math.min(Math.max(t, -50), 50), (t /= 50) / Math.abs(t) + Math.round(14 * t))
                }, e.prototype.shouldForceSelection = function(e) {
                    return o.isMac ? e.altKey && this._optionsService.options.macOptionClickForcesSelection : e.shiftKey
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
                    this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = window.setInterval(function() {
                        return e._dragScroll()
                    }, 50)
                }, e.prototype._removeMouseDownListeners = function() {
                    this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0
                }, e.prototype._onIncrementalClick = function(e) {
                    this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e))
                }, e.prototype._onSingleClick = function(e) {
                    if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = !1, this._activeSelectionMode = this.shouldColumnSelect(e) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e), this._model.selectionStart) {
                        this._model.selectionEnd = void 0;
                        var t = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
                        t && t.length !== this._model.selectionStart[0] && 0 === t.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++
                    }
                }, e.prototype._onDoubleClick = function(e) {
                    var t = this._getMouseBufferCoords(e);
                    t && (this._activeSelectionMode = 1, this._selectWordAt(t, !0))
                }, e.prototype._onTripleClick = function(e) {
                    var t = this._getMouseBufferCoords(e);
                    t && (this._activeSelectionMode = 2, this._selectLineAt(t[1]))
                }, e.prototype.shouldColumnSelect = function(e) {
                    return e.altKey && !(o.isMac && this._optionsService.options.macOptionClickForcesSelection)
                }, e.prototype._onMouseMove = function(e) {
                    if (e.stopImmediatePropagation(), this._model.selectionStart) {
                        var t = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
                        if (this._model.selectionEnd = this._getMouseBufferCoords(e), this._model.selectionEnd) {
                            2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
                            var r = this._bufferService.buffer;
                            if (this._model.selectionEnd[1] < r.lines.length) {
                                var i = r.lines.get(this._model.selectionEnd[1]);
                                i && 0 === i.hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0]++
                            }
                            t && t[0] === this._model.selectionEnd[0] && t[1] === this._model.selectionEnd[1] || this.refresh(!0)
                        } else this.refresh(!0)
                    }
                }, e.prototype._dragScroll = function() {
                    if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
                        this._scrollLines(this._dragScrollAmount, !1);
                        var e = this._bufferService.buffer;
                        this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e.ydisp + this._bufferService.rows, e.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e.ydisp), this.refresh()
                    }
                }, e.prototype._onMouseUp = function(e) {
                    var t = e.timeStamp - this._mouseDownTimeStamp;
                    if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t < 500) {
                        if (e.altKey && this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                            var r = this._mouseService.getCoords(e, this._element, this._bufferService.cols, this._bufferService.rows, !1);
                            if (r && void 0 !== r[0] && void 0 !== r[1]) {
                                var i = f.moveToCellSequence(r[0] - 1, r[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                                this._coreService.triggerDataEvent(i, !0)
                            }
                        }
                    } else this.hasSelection && this._onSelectionChange.fire()
                }, e.prototype._onBufferActivate = function(e) {
                    var t = this;
                    this.clearSelection(), this._trimListener.dispose(), this._trimListener = e.activeBuffer.lines.onTrim(function(e) {
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
                    if (void 0 === r && (r = !0), void 0 === i && (i = !0), !(e[0] >= this._bufferService.cols)) {
                        var n = this._bufferService.buffer,
                            o = n.lines.get(e[1]);
                        if (o) {
                            var s = n.translateBufferLineToString(e[1], !1),
                                a = this._convertViewportColToCharacterIndex(o, e),
                                c = a,
                                l = e[0] - a,
                                h = 0,
                                u = 0,
                                f = 0,
                                _ = 0;
                            if (" " === s.charAt(a)) {
                                for (; a > 0 && " " === s.charAt(a - 1);) a--;
                                for (; c < s.length && " " === s.charAt(c + 1);) c++
                            } else {
                                var d = e[0],
                                    p = e[0];
                                0 === o.getWidth(d) && (h++, d--), 2 === o.getWidth(p) && (u++, p++);
                                var v = o.getString(p).length;
                                for (v > 1 && (_ += v - 1, c += v - 1); d > 0 && a > 0 && !this._isCharWordSeparator(o.loadCell(d - 1, this._workCell));) {
                                    o.loadCell(d - 1, this._workCell);
                                    var g = this._workCell.getChars().length;
                                    0 === this._workCell.getWidth() ? (h++, d--) : g > 1 && (f += g - 1, a -= g - 1), a--, d--
                                }
                                for (; p < o.length && c + 1 < s.length && !this._isCharWordSeparator(o.loadCell(p + 1, this._workCell));) {
                                    o.loadCell(p + 1, this._workCell);
                                    var y = this._workCell.getChars().length;
                                    2 === this._workCell.getWidth() ? (u++, p++) : y > 1 && (_ += y - 1, c += y - 1), c++, p++
                                }
                            }
                            c++;
                            var b = a + l - h + f,
                                m = Math.min(this._bufferService.cols, c - a + h + u - f - _);
                            if (t || "" !== s.slice(a, c).trim()) {
                                if (r && 0 === b && 32 !== o.getCodePoint(0)) {
                                    var C = n.lines.get(e[1] - 1);
                                    if (C && o.isWrapped && 32 !== C.getCodePoint(this._bufferService.cols - 1)) {
                                        var S = this._getWordAt([this._bufferService.cols - 1, e[1] - 1], !1, !0, !1);
                                        if (S) {
                                            var w = this._bufferService.cols - S.start;
                                            b -= w, m += w
                                        }
                                    }
                                }
                                if (i && b + m === this._bufferService.cols && 32 !== o.getCodePoint(this._bufferService.cols - 1)) {
                                    var E = n.lines.get(e[1] + 1);
                                    if (E && E.isWrapped && 32 !== E.getCodePoint(0)) {
                                        var A = this._getWordAt([0, e[1] + 1], !1, !1, !0);
                                        A && (m += A.length)
                                    }
                                }
                                return {
                                    start: b,
                                    length: m
                                }
                            }
                        }
                    }
                }, e.prototype._selectWordAt = function(e, t) {
                    var r = this._getWordAt(e, t);
                    if (r) {
                        for (; r.start < 0;) r.start += this._bufferService.cols, e[1]--;
                        this._model.selectionStart = [r.start, e[1]], this._model.selectionStartLength = r.length
                    }
                }, e.prototype._selectToWordAt = function(e) {
                    var t = this._getWordAt(e, !0);
                    if (t) {
                        for (var r = e[1]; t.start < 0;) t.start += this._bufferService.cols, r--;
                        if (!this._model.areSelectionValuesReversed())
                            for (; t.start + t.length > this._bufferService.cols;) t.length -= this._bufferService.cols, r++;
                        this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t.start : t.start + t.length, r]
                    }
                }, e.prototype._isCharWordSeparator = function(e) {
                    return 0 !== e.getWidth() && this._optionsService.options.wordSeparator.indexOf(e.getChars()) >= 0
                }, e.prototype._selectLineAt = function(e) {
                    var t = this._bufferService.buffer.getWrappedRangeForLine(e);
                    this._model.selectionStart = [0, t.first], this._model.selectionEnd = [this._bufferService.cols, t.last], this._model.selectionStartLength = 0
                }, i([n(3, l.ICharSizeService), n(4, h.IBufferService), n(5, h.ICoreService), n(6, l.IMouseService), n(7, h.IOptionsService)], e)
            }();
        t.SelectionService = p
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e) {
                this._bufferService = e, this.isSelectAllActive = !1, this.selectionStartLength = 0
            }
            return e.prototype.clearSelection = function() {
                this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = !1, this.selectionStartLength = 0
            }, Object.defineProperty(e.prototype, "finalSelectionStart", {
                get: function() {
                    return this.isSelectAllActive ? [0, 0] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "finalSelectionEnd", {
                get: function() {
                    if (this.isSelectAllActive) return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
                    if (this.selectionStart) {
                        if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                            var e = this.selectionStart[0] + this.selectionStartLength;
                            return e > this._bufferService.cols ? [e % this._bufferService.cols, this.selectionStart[1] + Math.floor(e / this._bufferService.cols)] : [e, this.selectionStart[1]]
                        }
                        return this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1] ? [Math.max(this.selectionStart[0] + this.selectionStartLength, this.selectionEnd[0]), this.selectionEnd[1]] : this.selectionEnd
                    }
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
        var i = r(12);

        function n(e, t, r, i) {
            var n = e - o(r, e),
                a = t - o(r, t);
            return l(Math.abs(n - a) - function(e, t, r) {
                for (var i = 0, n = e - o(r, e), a = t - o(r, t), c = 0; c < Math.abs(n - a); c++) {
                    var l = "A" === s(e, t) ? -1 : 1,
                        h = r.buffer.lines.get(n + l * c);
                    h && h.isWrapped && i++
                }
                return i
            }(e, t, r), c(s(e, t), i))
        }

        function o(e, t) {
            for (var r = 0, i = e.buffer.lines.get(t), n = i && i.isWrapped; n && t >= 0 && t < e.rows;) r++, n = (i = e.buffer.lines.get(--t)) && i.isWrapped;
            return r
        }

        function s(e, t) {
            return e > t ? "A" : "B"
        }

        function a(e, t, r, i, n, o) {
            for (var s = e, a = t, c = ""; s !== r || a !== i;) s += n ? 1 : -1, n && s > o.cols - 1 ? (c += o.buffer.translateBufferLineToString(a, !1, e, s), s = 0, e = 0, a++) : !n && s < 0 && (c += o.buffer.translateBufferLineToString(a, !1, 0, e + 1), e = s = o.cols - 1, a--);
            return c + o.buffer.translateBufferLineToString(a, !1, e, s)
        }

        function c(e, t) {
            var r = t ? "O" : "[";
            return i.C0.ESC + r + e
        }

        function l(e, t) {
            e = Math.floor(e);
            for (var r = "", i = 0; i < e; i++) r += t;
            return r
        }
        t.moveToCellSequence = function(e, t, r, i) {
            var s, h = r.buffer.x,
                u = r.buffer.y;
            if (!r.buffer.hasScrollback) return function(e, t, r, i, s, h) {
                return 0 === n(t, i, s, h).length ? "" : l(a(e, t, e, t - o(s, t), !1, s).length, c("D", h))
            }(h, u, 0, t, r, i) + n(u, t, r, i) + function(e, t, r, i, s, h) {
                var u;
                u = n(t, i, s, h).length > 0 ? i - o(s, i) : t;
                var f = i,
                    _ = function(e, t, r, i, s, a) {
                        var c;
                        return c = n(r, i, s, h).length > 0 ? i - o(s, i) : t, e < r && c <= i || e >= r && c < i ? "C" : "D"
                    }(e, t, r, i, s);
                return l(a(e, u, r, f, "C" === _, s).length, c(_, h))
            }(h, u, e, t, r, i);
            if (u === t) return s = h > e ? "D" : "C", l(Math.abs(h - e), c(s, i));
            s = u > t ? "D" : "C";
            var f = Math.abs(u - t);
            return l(function(e, t) {
                return r.cols - e
            }(u > t ? e : h) + (f - 1) * r.cols + 1 + ((u > t ? h : e) - 1), c(s, i))
        }
    }, function(e, t, r) {
        "use strict";
        var i = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            n = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(0),
            s = function() {
                function e(e) {
                    this._optionsService = e
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
                        t.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._optionsService.options.bellSound)), function(e) {
                            r.buffer = e, r.connect(t.destination), r.start(0)
                        })
                    }
                }, e.prototype._base64ToArrayBuffer = function(e) {
                    for (var t = window.atob(e), r = t.length, i = new Uint8Array(r), n = 0; n < r; n++) i[n] = t.charCodeAt(n);
                    return i.buffer
                }, e.prototype._removeMimeType = function(e) {
                    return e.split(",")[1]
                }, e = i([n(0, o.IOptionsService)], e)
            }();
        t.SoundService = s
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
            }),
            o = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            s = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(2),
            c = r(8),
            l = r(4),
            h = r(0),
            u = function(e) {
                function t(t, r, i, n, o) {
                    var s = e.call(this) || this;
                    return s._element = t, s._screenElement = r, s._bufferService = i, s._mouseService = n, s._selectionService = o, s._zones = [], s._areZonesActive = !1, s._lastHoverCoords = [void 0, void 0], s._initialSelectionLength = 0, s.register(c.addDisposableDomListener(s._element, "mousedown", function(e) {
                        return s._onMouseDown(e)
                    })), s._mouseMoveListener = function(e) {
                        return s._onMouseMove(e)
                    }, s._mouseLeaveListener = function(e) {
                        return s._onMouseLeave(e)
                    }, s._clickListener = function(e) {
                        return s._onClick(e)
                    }, s
                }
                return n(t, e), t.prototype.dispose = function() {
                    e.prototype.dispose.call(this), this._deactivate()
                }, t.prototype.add = function(e) {
                    this._zones.push(e), 1 === this._zones.length && this._activate()
                }, t.prototype.clearAll = function(e, t) {
                    if (0 !== this._zones.length) {
                        e && t || (e = 0, t = this._bufferService.rows - 1);
                        for (var r = 0; r < this._zones.length; r++) {
                            var i = this._zones[r];
                            (i.y1 > e && i.y1 <= t + 1 || i.y2 > e && i.y2 <= t + 1 || i.y1 < e && i.y2 > t + 1) && (this._currentZone && this._currentZone === i && (this._currentZone.leaveCallback(), this._currentZone = void 0), this._zones.splice(r--, 1))
                        }
                        0 === this._zones.length && this._deactivate()
                    }
                }, t.prototype._activate = function() {
                    this._areZonesActive || (this._areZonesActive = !0, this._element.addEventListener("mousemove", this._mouseMoveListener), this._element.addEventListener("mouseleave", this._mouseLeaveListener), this._element.addEventListener("click", this._clickListener))
                }, t.prototype._deactivate = function() {
                    this._areZonesActive && (this._areZonesActive = !1, this._element.removeEventListener("mousemove", this._mouseMoveListener), this._element.removeEventListener("mouseleave", this._mouseLeaveListener), this._element.removeEventListener("click", this._clickListener))
                }, t.prototype._onMouseMove = function(e) {
                    this._lastHoverCoords[0] === e.pageX && this._lastHoverCoords[1] === e.pageY || (this._onHover(e), this._lastHoverCoords = [e.pageX, e.pageY])
                }, t.prototype._onHover = function(e) {
                    var t = this,
                        r = this._findZoneEventAt(e);
                    r !== this._currentZone && (this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout)), r && (this._currentZone = r, r.hoverCallback && r.hoverCallback(e), this._tooltipTimeout = setTimeout(function() {
                        return t._onTooltip(e)
                    }, 500)))
                }, t.prototype._onTooltip = function(e) {
                    this._tooltipTimeout = void 0;
                    var t = this._findZoneEventAt(e);
                    t && t.tooltipCallback && t.tooltipCallback(e)
                }, t.prototype._onMouseDown = function(e) {
                    var t;
                    this._initialSelectionLength = this._getSelectionLength(), this._areZonesActive && (null === (t = this._findZoneEventAt(e)) || void 0 === t ? void 0 : t.willLinkActivate(e)) && (e.preventDefault(), e.stopImmediatePropagation())
                }, t.prototype._onMouseLeave = function(e) {
                    this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout))
                }, t.prototype._onClick = function(e) {
                    var t = this._findZoneEventAt(e),
                        r = this._getSelectionLength();
                    t && r === this._initialSelectionLength && (t.clickCallback(e), e.preventDefault(), e.stopImmediatePropagation())
                }, t.prototype._getSelectionLength = function() {
                    var e = this._selectionService.selectionText;
                    return e ? e.length : 0
                }, t.prototype._findZoneEventAt = function(e) {
                    var t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows);
                    if (t)
                        for (var r = t[0], i = t[1], n = 0; n < this._zones.length; n++) {
                            var o = this._zones[n];
                            if (o.y1 === o.y2) {
                                if (i === o.y1 && r >= o.x1 && r < o.x2) return o
                            } else if (i === o.y1 && r >= o.x1 || i === o.y2 && r < o.x2 || i > o.y1 && i < o.y2) return o
                        }
                }, o([s(2, h.IBufferService), s(3, l.IMouseService), s(4, l.ISelectionService)], t)
            }(a.Disposable);
        t.MouseZoneManager = u
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
            s = r(11),
            a = r(29),
            c = r(8),
            l = r(2),
            h = r(30),
            u = function(e) {
                function t(t, r) {
                    var i = e.call(this) || this;
                    i._terminal = t, i._renderService = r, i._liveRegionLineCount = 0, i._charsToConsume = [], i._charsToAnnounce = "", i._accessibilityTreeRoot = document.createElement("div"), i._accessibilityTreeRoot.classList.add("xterm-accessibility"), i._rowContainer = document.createElement("div"), i._rowContainer.classList.add("xterm-accessibility-tree"), i._rowElements = [];
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
                    })), i.register(i._terminal.onA11yChar(function(e) {
                        return i._onChar(e)
                    })), i.register(i._terminal.onLineFeed(function() {
                        return i._onChar("\n")
                    })), i.register(i._terminal.onA11yTab(function(e) {
                        return i._onTab(e)
                    })), i.register(i._terminal.onKey(function(e) {
                        return i._onKey(e.key)
                    })), i.register(i._terminal.onBlur(function() {
                        return i._clearLiveRegion()
                    })), i.register(i._renderService.onDimensionsChange(function() {
                        return i._refreshRowsDimensions()
                    })), i._screenDprMonitor = new h.ScreenDprMonitor, i.register(i._screenDprMonitor), i._screenDprMonitor.setListener(function() {
                        return i._refreshRowsDimensions()
                    }), i.register(c.addDisposableDomListener(window, "resize", function() {
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
                        var o = r.translateBufferLineToString(r.ydisp + n, !0),
                            s = (r.ydisp + n + 1).toString(),
                            a = this._rowElements[n];
                        a && (0 === o.length ? a.innerHTML = "&nbsp;" : a.textContent = o, a.setAttribute("aria-posinset", s), a.setAttribute("aria-setsize", i))
                    }
                    this._announceCharacters()
                }, t.prototype._refreshRowsDimensions = function() {
                    if (this._renderService.dimensions.actualCellHeight) {
                        this._rowElements.length !== this._terminal.rows && this._onResize(this._terminal.rows);
                        for (var e = 0; e < this._terminal.rows; e++) this._refreshRowDimensions(this._rowElements[e])
                    }
                }, t.prototype._refreshRowDimensions = function(e) {
                    e.style.height = this._renderService.dimensions.actualCellHeight + "px"
                }, t.prototype._announceCharacters = function() {
                    0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "")
                }, t
            }(l.Disposable);
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
            }),
            o = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            s = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(57),
            c = r(9),
            l = r(2),
            h = r(4),
            u = r(0),
            f = r(1),
            _ = r(10),
            d = "xterm-dom-renderer-owner-",
            p = "xterm-rows",
            v = "xterm-selection",
            g = 1,
            y = function(e) {
                function t(t, r, i, n, o, s, c, l) {
                    var h = e.call(this) || this;
                    return h._colors = t, h._element = r, h._screenElement = i, h._viewportElement = n, h._linkifier = o, h._charSizeService = s, h._optionsService = c, h._bufferService = l, h._terminalClass = g++, h._rowElements = [], h._onRequestRefreshRows = new f.EventEmitter, h._rowContainer = document.createElement("div"), h._rowContainer.classList.add(p), h._rowContainer.style.lineHeight = "normal", h._rowContainer.setAttribute("aria-hidden", "true"), h._refreshRowElements(h._bufferService.cols, h._bufferService.rows), h._selectionContainer = document.createElement("div"), h._selectionContainer.classList.add(v), h._selectionContainer.setAttribute("aria-hidden", "true"), h.dimensions = {
                        scaledCharWidth: 0,
                        scaledCharHeight: 0,
                        scaledCellWidth: 0,
                        scaledCellHeight: 0,
                        scaledCharLeft: 0,
                        scaledCharTop: 0,
                        scaledCanvasWidth: 0,
                        scaledCanvasHeight: 0,
                        canvasWidth: 0,
                        canvasHeight: 0,
                        actualCellWidth: 0,
                        actualCellHeight: 0
                    }, h._updateDimensions(), h._injectCss(), h._rowFactory = new a.DomRendererRowFactory(document, h._optionsService, h._colors), h._element.classList.add(d + h._terminalClass), h._screenElement.appendChild(h._rowContainer), h._screenElement.appendChild(h._selectionContainer), h._linkifier.onLinkHover(function(e) {
                        return h._onLinkHover(e)
                    }), h._linkifier.onLinkLeave(function(e) {
                        return h._onLinkLeave(e)
                    }), h
                }
                return n(t, e), Object.defineProperty(t.prototype, "onRequestRefreshRows", {
                    get: function() {
                        return this._onRequestRefreshRows.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.dispose = function() {
                    this._element.classList.remove(d + this._terminalClass), this._screenElement.removeChild(this._rowContainer), this._screenElement.removeChild(this._selectionContainer), this._screenElement.removeChild(this._themeStyleElement), this._screenElement.removeChild(this._dimensionsStyleElement), e.prototype.dispose.call(this)
                }, t.prototype._updateDimensions = function() {
                    var e = this;
                    this.dimensions.scaledCharWidth = this._charSizeService.width * window.devicePixelRatio, this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.options.letterSpacing), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.options.lineHeight), this.dimensions.scaledCharLeft = 0, this.dimensions.scaledCharTop = 0, this.dimensions.scaledCanvasWidth = this.dimensions.scaledCellWidth * this._bufferService.cols, this.dimensions.scaledCanvasHeight = this.dimensions.scaledCellHeight * this._bufferService.rows, this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols, this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows, this._rowElements.forEach(function(t) {
                        t.style.width = e.dimensions.canvasWidth + "px", t.style.height = e.dimensions.actualCellHeight + "px", t.style.lineHeight = e.dimensions.actualCellHeight + "px", t.style.overflow = "hidden"
                    }), this._dimensionsStyleElement || (this._dimensionsStyleElement = document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
                    var t = this._terminalSelector + " ." + p + " span { display: inline-block; height: 100%; vertical-align: top; width: " + this.dimensions.actualCellWidth + "px}";
                    this._dimensionsStyleElement.innerHTML = t, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px"
                }, t.prototype.setColors = function(e) {
                    this._colors = e, this._injectCss()
                }, t.prototype._injectCss = function() {
                    var e = this;
                    this._themeStyleElement || (this._themeStyleElement = document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
                    var t = this._terminalSelector + " ." + p + " { color: " + this._colors.foreground.css + "; background-color: " + this._colors.background.css + "; font-family: " + this._optionsService.options.fontFamily + "; font-size: " + this._optionsService.options.fontSize + "px;}";
                    t += this._terminalSelector + " span:not(." + a.BOLD_CLASS + ") { font-weight: " + this._optionsService.options.fontWeight + ";}" + this._terminalSelector + " span." + a.BOLD_CLASS + " { font-weight: " + this._optionsService.options.fontWeightBold + ";}" + this._terminalSelector + " span." + a.ITALIC_CLASS + " { font-style: italic;}", t += "@keyframes blink_box_shadow_" + this._terminalClass + " { 50% {  box-shadow: none; }}", t += "@keyframes blink_block_" + this._terminalClass + " { 0% {  background-color: " + this._colors.cursor.css + ";  color: " + this._colors.cursorAccent.css + "; } 50% {  background-color: " + this._colors.cursorAccent.css + ";  color: " + this._colors.cursor.css + "; }}", t += this._terminalSelector + " ." + p + ":not(.xterm-focus) ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { outline: 1px solid " + this._colors.cursor.css + "; outline-offset: -1px;}" + this._terminalSelector + " ." + p + ".xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_BLINK_CLASS + ":not(." + a.CURSOR_STYLE_BLOCK_CLASS + ") { animation: blink_box_shadow_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " ." + p + ".xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_BLINK_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { animation: blink_block_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " ." + p + ".xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { background-color: " + this._colors.cursor.css + "; color: " + this._colors.cursorAccent.css + ";}" + this._terminalSelector + " ." + p + " ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BAR_CLASS + " { box-shadow: " + this._optionsService.options.cursorWidth + "px 0 0 " + this._colors.cursor.css + " inset;}" + this._terminalSelector + " ." + p + " ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_UNDERLINE_CLASS + " { box-shadow: 0 -1px 0 " + this._colors.cursor.css + " inset;}", t += this._terminalSelector + " ." + v + " { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}" + this._terminalSelector + " ." + v + " div { position: absolute; background-color: " + this._colors.selection.css + ";}", this._colors.ansi.forEach(function(r, i) {
                        t += e._terminalSelector + " .xterm-fg-" + i + " { color: " + r.css + "; }" + e._terminalSelector + " .xterm-bg-" + i + " { background-color: " + r.css + "; }"
                    }), t += this._terminalSelector + " .xterm-fg-" + c.INVERTED_DEFAULT_COLOR + " { color: " + _.color.opaque(this._colors.background).css + "; }" + this._terminalSelector + " .xterm-bg-" + c.INVERTED_DEFAULT_COLOR + " { background-color: " + this._colors.foreground.css + "; }", this._themeStyleElement.innerHTML = t
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
                        var i = e[1] - this._bufferService.buffer.ydisp,
                            n = t[1] - this._bufferService.buffer.ydisp,
                            o = Math.max(i, 0),
                            s = Math.min(n, this._bufferService.rows - 1);
                        if (!(o >= this._bufferService.rows || s < 0)) {
                            var a = document.createDocumentFragment();
                            if (r) a.appendChild(this._createSelectionElement(o, e[0], t[0], s - o + 1));
                            else {
                                var c = i === o ? e[0] : 0,
                                    l = o === s ? t[0] : this._bufferService.cols;
                                a.appendChild(this._createSelectionElement(o, c, l));
                                var h = s - o - 1;
                                if (a.appendChild(this._createSelectionElement(o + 1, 0, this._bufferService.cols, h)), o !== s) {
                                    var u = n === s ? t[0] : this._bufferService.cols;
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
                    this._updateDimensions(), this._injectCss()
                }, t.prototype.clear = function() {
                    this._rowElements.forEach(function(e) {
                        return e.innerHTML = ""
                    })
                }, t.prototype.renderRows = function(e, t) {
                    for (var r = this._bufferService.buffer.ybase + this._bufferService.buffer.y, i = this._bufferService.buffer.x, n = this._optionsService.options.cursorBlink, o = e; o <= t; o++) {
                        var s = this._rowElements[o];
                        s.innerHTML = "";
                        var a = o + this._bufferService.buffer.ydisp,
                            c = this._bufferService.buffer.lines.get(a),
                            l = this._optionsService.options.cursorStyle;
                        s.appendChild(this._rowFactory.createRow(c, a === r, l, i, n, this.dimensions.actualCellWidth, this._bufferService.cols))
                    }
                }, Object.defineProperty(t.prototype, "_terminalSelector", {
                    get: function() {
                        return "." + d + this._terminalClass
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
                }, o([s(5, h.ICharSizeService), s(6, u.IOptionsService), s(7, u.IBufferService)], t)
            }(l.Disposable);
        t.DomRenderer = y
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(9),
            n = r(3),
            o = r(5),
            s = r(10);
        t.BOLD_CLASS = "xterm-bold", t.DIM_CLASS = "xterm-dim", t.ITALIC_CLASS = "xterm-italic", t.UNDERLINE_CLASS = "xterm-underline", t.CURSOR_CLASS = "xterm-cursor", t.CURSOR_BLINK_CLASS = "xterm-cursor-blink", t.CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block", t.CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar", t.CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline";
        var a = function() {
            function e(e, t, r) {
                this._document = e, this._optionsService = t, this._colors = r, this._workCell = new o.CellData
            }
            return e.prototype.setColors = function(e) {
                this._colors = e
            }, e.prototype.createRow = function(e, r, o, a, l, h, u) {
                for (var f = this._document.createDocumentFragment(), _ = 0, d = Math.min(e.length, u) - 1; d >= 0; d--)
                    if (e.loadCell(d, this._workCell).getCode() !== n.NULL_CELL_CODE || r && d === a) {
                        _ = d + 1;
                        break
                    } for (d = 0; d < _; d++) {
                    e.loadCell(d, this._workCell);
                    var p = this._workCell.getWidth();
                    if (0 !== p) {
                        var v = this._document.createElement("span");
                        if (p > 1 && (v.style.width = h * p + "px"), r && d === a) switch (v.classList.add(t.CURSOR_CLASS), l && v.classList.add(t.CURSOR_BLINK_CLASS), o) {
                            case "bar":
                                v.classList.add(t.CURSOR_STYLE_BAR_CLASS);
                                break;
                            case "underline":
                                v.classList.add(t.CURSOR_STYLE_UNDERLINE_CLASS);
                                break;
                            default:
                                v.classList.add(t.CURSOR_STYLE_BLOCK_CLASS)
                        }
                        this._workCell.isBold() && v.classList.add(t.BOLD_CLASS), this._workCell.isItalic() && v.classList.add(t.ITALIC_CLASS), this._workCell.isDim() && v.classList.add(t.DIM_CLASS), this._workCell.isUnderline() && v.classList.add(t.UNDERLINE_CLASS), this._workCell.isInvisible() ? v.textContent = n.WHITESPACE_CELL_CHAR : v.textContent = this._workCell.getChars() || n.WHITESPACE_CELL_CHAR;
                        var g = this._workCell.getFgColor(),
                            y = this._workCell.getFgColorMode(),
                            b = this._workCell.getBgColor(),
                            m = this._workCell.getBgColorMode(),
                            C = !!this._workCell.isInverse();
                        if (C) {
                            var S = g;
                            g = b, b = S;
                            var w = y;
                            y = m, m = w
                        }
                        switch (y) {
                            case 16777216:
                            case 33554432:
                                this._workCell.isBold() && g < 8 && this._optionsService.options.drawBoldTextInBrightColors && (g += 8), this._applyMinimumContrast(v, this._colors.background, this._colors.ansi[g]) || v.classList.add("xterm-fg-" + g);
                                break;
                            case 50331648:
                                var E = s.rgba.toColor(g >> 16 & 255, g >> 8 & 255, 255 & g);
                                this._applyMinimumContrast(v, this._colors.background, E) || this._addStyle(v, "color:#" + c(g.toString(16), "0", 6));
                                break;
                            case 0:
                            default:
                                this._applyMinimumContrast(v, this._colors.background, this._colors.foreground) || C && v.classList.add("xterm-fg-" + i.INVERTED_DEFAULT_COLOR)
                        }
                        switch (m) {
                            case 16777216:
                            case 33554432:
                                v.classList.add("xterm-bg-" + b);
                                break;
                            case 50331648:
                                this._addStyle(v, "background-color:#" + c(b.toString(16), "0", 6));
                                break;
                            case 0:
                            default:
                                C && v.classList.add("xterm-bg-" + i.INVERTED_DEFAULT_COLOR)
                        }
                        f.appendChild(v)
                    }
                }
                return f
            }, e.prototype._applyMinimumContrast = function(e, t, r) {
                if (1 === this._optionsService.options.minimumContrastRatio) return !1;
                var i = this._colors.contrastCache.getColor(this._workCell.bg, this._workCell.fg);
                return void 0 === i && (i = s.color.ensureContrastRatio(t, r, this._optionsService.options.minimumContrastRatio), this._colors.contrastCache.setColor(this._workCell.bg, this._workCell.fg, null != i ? i : null)), !!i && (this._addStyle(e, "color:" + i.css), !0)
            }, e.prototype._addStyle = function(e, t) {
                e.setAttribute("style", "" + (e.getAttribute("style") || "") + t + ";")
            }, e
        }();

        function c(e, t, r) {
            for (; e.length < r;) e = t + e;
            return e
        }
        t.DomRendererRowFactory = a
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
                    if (e.metaKey) break;
                    a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "D", s.key === i.C0.ESC + "[1;3D" && (s.key = i.C0.ESC + (r ? "b" : "[1;5D"))) : s.key = t ? i.C0.ESC + "OD" : i.C0.ESC + "[D";
                    break;
                case 39:
                    if (e.metaKey) break;
                    a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "C", s.key === i.C0.ESC + "[1;3C" && (s.key = i.C0.ESC + (r ? "f" : "[1;5C"))) : s.key = t ? i.C0.ESC + "OC" : i.C0.ESC + "[C";
                    break;
                case 38:
                    if (e.metaKey) break;
                    a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "A", r || s.key !== i.C0.ESC + "[1;3A" || (s.key = i.C0.ESC + "[1;5A")) : s.key = t ? i.C0.ESC + "OA" : i.C0.ESC + "[A";
                    break;
                case 40:
                    if (e.metaKey) break;
                    a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "B", r || s.key !== i.C0.ESC + "[1;3B" || (s.key = i.C0.ESC + "[1;5B")) : s.key = t ? i.C0.ESC + "OB" : i.C0.ESC + "[B";
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
                            var c = n[e.keyCode],
                                l = c && c[e.shiftKey ? 1 : 0];
                            if (l) s.key = i.C0.ESC + l;
                            else if (e.keyCode >= 65 && e.keyCode <= 90) {
                                var h = e.ctrlKey ? e.keyCode - 64 : e.keyCode + 32;
                                s.key = i.C0.ESC + String.fromCharCode(h)
                            }
                        }
                    else e.keyCode >= 65 && e.keyCode <= 90 ? s.key = String.fromCharCode(e.keyCode - 64) : 32 === e.keyCode ? s.key = i.C0.NUL : e.keyCode >= 51 && e.keyCode <= 55 ? s.key = String.fromCharCode(e.keyCode - 51 + 27) : 56 === e.keyCode ? s.key = i.C0.DEL : 219 === e.keyCode ? s.key = i.C0.ESC : 220 === e.keyCode ? s.key = i.C0.FS : 221 === e.keyCode && (s.key = i.C0.GS)
            }
            return s
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(3);
        t.updateWindowsModeWrappedState = function(e) {
            var t, r = null === (t = e.buffer.lines.get(e.buffer.ybase + e.buffer.y - 1)) || void 0 === t ? void 0 : t.get(e.cols - 1),
                n = e.buffer.lines.get(e.buffer.ybase + e.buffer.y);
            n && r && (n.isWrapped = r[i.CHAR_DATA_CODE_INDEX] !== i.NULL_CELL_CODE && r[i.CHAR_DATA_CODE_INDEX] !== i.WHITESPACE_CELL_CODE)
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
            }),
            o = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            s = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(29),
            c = r(1),
            l = r(2),
            h = r(30),
            u = r(8),
            f = r(0),
            _ = r(4),
            d = function(e) {
                function t(t, r, i, n, o) {
                    var s = e.call(this) || this;
                    if (s._renderer = t, s._rowCount = r, s.screenElement = i, s.optionsService = n, s.charSizeService = o, s._isPaused = !1, s._needsFullRefresh = !1, s._canvasWidth = 0, s._canvasHeight = 0, s._onDimensionsChange = new c.EventEmitter, s._onRender = new c.EventEmitter, s._onRefreshRequest = new c.EventEmitter, s._renderDebouncer = new a.RenderDebouncer(function(e, t) {
                            return s._renderRows(e, t)
                        }), s.register(s._renderDebouncer), s._screenDprMonitor = new h.ScreenDprMonitor, s._screenDprMonitor.setListener(function() {
                            return s.onDevicePixelRatioChange()
                        }), s.register(s._screenDprMonitor), s.register(n.onOptionChange(function() {
                            return s._renderer.onOptionsChanged()
                        })), s.register(o.onCharSizeChange(function() {
                            return s.onCharSizeChanged()
                        })), s._renderer.onRequestRefreshRows(function(e) {
                            return s.refreshRows(e.start, e.end)
                        }), s.register(u.addDisposableDomListener(window, "resize", function() {
                            return s.onDevicePixelRatioChange()
                        })), "IntersectionObserver" in window) {
                        var l = new IntersectionObserver(function(e) {
                            return s._onIntersectionChange(e[e.length - 1])
                        }, {
                            threshold: 0
                        });
                        l.observe(i), s.register({
                            dispose: function() {
                                return l.disconnect()
                            }
                        })
                    }
                    return s
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
                    this._renderer.onOptionsChanged(), this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize()
                }, t.prototype._fireOnCanvasResize = function() {
                    this._renderer.dimensions.canvasWidth === this._canvasWidth && this._renderer.dimensions.canvasHeight === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.dimensions)
                }, t.prototype.dispose = function() {
                    this._renderer.dispose(), e.prototype.dispose.call(this)
                }, t.prototype.setRenderer = function(e) {
                    var t = this;
                    this._renderer.dispose(), this._renderer = e, this._renderer.onRequestRefreshRows(function(e) {
                        return t.refreshRows(e.start, e.end)
                    }), this.refreshRows(0, this._rowCount - 1)
                }, t.prototype._fullRefresh = function() {
                    this._isPaused ? this._needsFullRefresh = !0 : this.refreshRows(0, this._rowCount - 1)
                }, t.prototype.setColors = function(e) {
                    this._renderer.setColors(e), this._fullRefresh()
                }, t.prototype.onDevicePixelRatioChange = function() {
                    this._renderer.onDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1)
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
                }, t.prototype.clear = function() {
                    this._renderer.clear()
                }, t.prototype.registerCharacterJoiner = function(e) {
                    return this._renderer.registerCharacterJoiner(e)
                }, t.prototype.deregisterCharacterJoiner = function(e) {
                    return this._renderer.deregisterCharacterJoiner(e)
                }, o([s(3, f.IOptionsService), s(4, _.ICharSizeService)], t)
            }(l.Disposable);
        t.RenderService = d
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(1),
            n = r(11),
            o = r(31);
        t.DEFAULT_BELL_SOUND = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", t.DEFAULT_OPTIONS = Object.freeze({
            cols: 80,
            rows: 24,
            cursorBlink: !1,
            cursorStyle: "block",
            cursorWidth: 1,
            bellSound: t.DEFAULT_BELL_SOUND,
            bellStyle: "none",
            drawBoldTextInBrightColors: !0,
            fastScrollModifier: "alt",
            fastScrollSensitivity: 5,
            fontFamily: "courier-new, courier, monospace",
            fontSize: 15,
            fontWeight: "normal",
            fontWeightBold: "bold",
            lineHeight: 1,
            letterSpacing: 0,
            logLevel: "info",
            scrollback: 1e3,
            scrollSensitivity: 1,
            screenReaderMode: !1,
            macOptionIsMeta: !1,
            macOptionClickForcesSelection: !1,
            minimumContrastRatio: 1,
            disableStdin: !1,
            allowTransparency: !1,
            tabStopWidth: 8,
            theme: {},
            rightClickSelectsWord: n.isMac,
            rendererType: "canvas",
            windowOptions: {},
            windowsMode: !1,
            wordSeparator: " ()[]{}',\"`",
            convertEol: !1,
            termName: "xterm",
            cancelEvents: !1
        });
        var s = ["cols", "rows"],
            a = function() {
                function e(e) {
                    var r = this;
                    this._onOptionChange = new i.EventEmitter, this.options = o.clone(t.DEFAULT_OPTIONS), Object.keys(e).forEach(function(t) {
                        if (t in r.options) {
                            var i = e[t];
                            r.options[t] = i
                        }
                    })
                }
                return Object.defineProperty(e.prototype, "onOptionChange", {
                    get: function() {
                        return this._onOptionChange.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.setOption = function(e, r) {
                    if (!(e in t.DEFAULT_OPTIONS)) throw new Error('No option with key "' + e + '"');
                    if (-1 !== s.indexOf(e)) throw new Error('Option "' + e + '" can only be set in the constructor');
                    this.options[e] !== r && (r = this._sanitizeAndValidateOption(e, r), this.options[e] !== r && (this.options[e] = r, this._onOptionChange.fire(e)))
                }, e.prototype._sanitizeAndValidateOption = function(e, r) {
                    switch (e) {
                        case "bellStyle":
                        case "cursorStyle":
                        case "fontWeight":
                        case "fontWeightBold":
                        case "rendererType":
                        case "wordSeparator":
                            r || (r = t.DEFAULT_OPTIONS[e]);
                            break;
                        case "cursorWidth":
                            r = Math.floor(r);
                        case "lineHeight":
                        case "tabStopWidth":
                            if (r < 1) throw new Error(e + " cannot be less than 1, value: " + r);
                            break;
                        case "minimumContrastRatio":
                            r = Math.max(1, Math.min(21, Math.round(10 * r) / 10));
                            break;
                        case "scrollback":
                            if ((r = Math.min(r, 4294967295)) < 0) throw new Error(e + " cannot be less than 0, value: " + r);
                            break;
                        case "fastScrollSensitivity":
                        case "scrollSensitivity":
                            if (r <= 0) throw new Error(e + " cannot be less than or equal to 0, value: " + r)
                    }
                    return r
                }, e.prototype.getOption = function(e) {
                    if (!(e in t.DEFAULT_OPTIONS)) throw new Error('No option with key "' + e + '"');
                    return this.options[e]
                }, e
            }();
        t.OptionsService = a
    }, function(e, t, r) {
        "use strict";
        var i = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            n = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(0),
            s = r(1),
            a = function() {
                function e(e, t, r) {
                    this.document = e, this.parentElement = t, this._optionsService = r, this.width = 0, this.height = 0, this._onCharSizeChange = new s.EventEmitter, this._measureStrategy = new c(e, t, this._optionsService)
                }
                return Object.defineProperty(e.prototype, "hasValidSize", {
                    get: function() {
                        return this.width > 0 && this.height > 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "onCharSizeChange", {
                    get: function() {
                        return this._onCharSizeChange.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.measure = function() {
                    var e = this._measureStrategy.measure();
                    e.width === this.width && e.height === this.height || (this.width = e.width, this.height = e.height, this._onCharSizeChange.fire())
                }, i([n(2, o.IOptionsService)], e)
            }();
        t.CharSizeService = a;
        var c = function() {
            function e(e, t, r) {
                this._document = e, this._parentElement = t, this._optionsService = r, this._result = {
                    width: 0,
                    height: 0
                }, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W", this._measureElement.setAttribute("aria-hidden", "true"), this._parentElement.appendChild(this._measureElement)
            }
            return e.prototype.measure = function() {
                this._measureElement.style.fontFamily = this._optionsService.options.fontFamily, this._measureElement.style.fontSize = this._optionsService.options.fontSize + "px";
                var e = this._measureElement.getBoundingClientRect();
                return 0 !== e.width && 0 !== e.height && (this._result.width = e.width, this._result.height = Math.ceil(e.height)), this._result
            }, e
        }()
    }, function(e, t, r) {
        "use strict";
        var i = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            n = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(0),
            s = r(64);
        t.MINIMUM_COLS = 2, t.MINIMUM_ROWS = 1;
        var a = function() {
            function e(e) {
                this._optionsService = e, this.cols = Math.max(e.options.cols, t.MINIMUM_COLS), this.rows = Math.max(e.options.rows, t.MINIMUM_ROWS), this.buffers = new s.BufferSet(e, this)
            }
            return Object.defineProperty(e.prototype, "buffer", {
                get: function() {
                    return this.buffers.active
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.resize = function(e, t) {
                this.cols = e, this.rows = t
            }, e.prototype.reset = function() {
                this.buffers = new s.BufferSet(this._optionsService, this)
            }, i([n(0, o.IOptionsService)], e)
        }();
        t.BufferService = a
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(65),
            n = r(1),
            o = function() {
                function e(e, t) {
                    this.optionsService = e, this.bufferService = t, this._onBufferActivate = new n.EventEmitter, this._normal = new i.Buffer(!0, e, t), this._normal.fillViewportRows(), this._alt = new i.Buffer(!1, e, t), this._activeBuffer = this._normal, this.setupTabStops()
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
        var i = r(66),
            n = r(16),
            o = r(5),
            s = r(3),
            a = r(67),
            c = r(68),
            l = r(18);
        t.MAX_BUFFER_SIZE = 4294967295;
        var h = function() {
            function e(e, t, r) {
                this._hasScrollback = e, this._optionsService = t, this._bufferService = r, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = n.DEFAULT_ATTR_DATA.clone(), this.savedCharset = l.DEFAULT_CHARSET, this.markers = [], this._nullCell = o.CellData.fromCharData([0, s.NULL_CELL_CHAR, s.NULL_CELL_WIDTH, s.NULL_CELL_CODE]), this._whitespaceCell = o.CellData.fromCharData([0, s.WHITESPACE_CELL_CHAR, s.WHITESPACE_CELL_WIDTH, s.WHITESPACE_CELL_CODE]), this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new i.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops()
            }
            return e.prototype.getNullCell = function(e) {
                return e ? (this._nullCell.fg = e.fg, this._nullCell.bg = e.bg) : (this._nullCell.fg = 0, this._nullCell.bg = 0), this._nullCell
            }, e.prototype.getWhitespaceCell = function(e) {
                return e ? (this._whitespaceCell.fg = e.fg, this._whitespaceCell.bg = e.bg) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0), this._whitespaceCell
            }, e.prototype.getBlankLine = function(e, t) {
                return new n.BufferLine(this._bufferService.cols, this.getNullCell(e), t)
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
                var r = e + this._optionsService.options.scrollback;
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
                        for (var a = this._rows; a < t; a++) this.lines.length < t + this.ybase && (this._optionsService.options.windowsMode ? this.lines.push(new n.BufferLine(e, r)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + s + 1 ? (this.ybase--, s++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new n.BufferLine(e, r)));
                    else
                        for (a = this._rows; a > t; a--) this.lines.length > t + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
                    if (i < this.lines.maxLength) {
                        var c = this.lines.length - i;
                        c > 0 && (this.lines.trimStart(c), this.ybase = Math.max(this.ybase - c, 0), this.ydisp = Math.max(this.ydisp - c, 0), this.savedY = Math.max(this.savedY - c, 0)), this.lines.maxLength = i
                    }
                    this.x = Math.min(this.x, e - 1), this.y = Math.min(this.y, t - 1), s && (this.y += s), this.savedX = Math.min(this.savedX, e - 1), this.scrollTop = 0
                }
                if (this.scrollBottom = t - 1, this._isReflowEnabled && (this._reflow(e, t), this._cols > e))
                    for (o = 0; o < this.lines.length; o++) this.lines.get(o).resize(e, r);
                this._cols = e, this._rows = t
            }, Object.defineProperty(e.prototype, "_isReflowEnabled", {
                get: function() {
                    return this._hasScrollback && !this._optionsService.options.windowsMode
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._reflow = function(e, t) {
                this._cols !== e && (e > this._cols ? this._reflowLarger(e, t) : this._reflowSmaller(e, t))
            }, e.prototype._reflowLarger = function(e, t) {
                var r = a.reflowLargerGetLinesToRemove(this.lines, this._cols, e, this.ybase + this.y, this.getNullCell(n.DEFAULT_ATTR_DATA));
                if (r.length > 0) {
                    var i = a.reflowLargerCreateNewLayout(this.lines, r);
                    a.reflowLargerApplyNewLayout(this.lines, i.layout), this._reflowLargerAdjustViewport(e, t, i.countRemoved)
                }
            }, e.prototype._reflowLargerAdjustViewport = function(e, t, r) {
                for (var i = this.getNullCell(n.DEFAULT_ATTR_DATA), o = r; o-- > 0;) 0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t && this.lines.push(new n.BufferLine(e, i))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
                this.savedY = Math.max(this.savedY - r, 0)
            }, e.prototype._reflowSmaller = function(e, t) {
                for (var r = this.getNullCell(n.DEFAULT_ATTR_DATA), i = [], o = 0, s = this.lines.length - 1; s >= 0; s--) {
                    var c = this.lines.get(s);
                    if (!(!c || !c.isWrapped && c.getTrimmedLength() <= e)) {
                        for (var l = [c]; c.isWrapped && s > 0;) c = this.lines.get(--s), l.unshift(c);
                        var h = this.ybase + this.y;
                        if (!(h >= s && h < s + l.length)) {
                            var u, f = l[l.length - 1].getTrimmedLength(),
                                _ = a.reflowSmallerGetNewLineLengths(l, this._cols, e),
                                d = _.length - l.length;
                            u = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + d) : Math.max(0, this.lines.length - this.lines.maxLength + d);
                            for (var p = [], v = 0; v < d; v++) {
                                var g = this.getBlankLine(n.DEFAULT_ATTR_DATA, !0);
                                p.push(g)
                            }
                            p.length > 0 && (i.push({
                                start: s + l.length + o,
                                newLines: p
                            }), o += p.length), l.push.apply(l, p);
                            var y = _.length - 1,
                                b = _[y];
                            0 === b && (b = _[--y]);
                            for (var m = l.length - d - 1, C = f; m >= 0;) {
                                var S = Math.min(C, b);
                                if (l[y].copyCellsFrom(l[m], C - S, b - S, S, !0), 0 == (b -= S) && (b = _[--y]), 0 == (C -= S)) {
                                    m--;
                                    var w = Math.max(m, 0);
                                    C = a.getWrappedLineTrimmedLength(l, w, this._cols)
                                }
                            }
                            for (v = 0; v < l.length; v++) _[v] < e && l[v].setCell(_[v], r);
                            for (var E = d - u; E-- > 0;) 0 === this.ybase ? this.y < t - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + o) - t && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
                            this.savedY = Math.min(this.savedY + d, this.ybase + t - 1)
                        }
                    }
                }
                if (i.length > 0) {
                    var A = [],
                        R = [];
                    for (v = 0; v < this.lines.length; v++) R.push(this.lines.get(v));
                    var x = this.lines.length,
                        L = x - 1,
                        k = 0,
                        T = i[k];
                    this.lines.length = Math.min(this.lines.maxLength, this.lines.length + o);
                    var D = 0;
                    for (v = Math.min(this.lines.maxLength - 1, x + o - 1); v >= 0; v--)
                        if (T && T.start > L + D) {
                            for (var O = T.newLines.length - 1; O >= 0; O--) this.lines.set(v--, T.newLines[O]);
                            v++, A.push({
                                index: L + 1,
                                amount: T.newLines.length
                            }), D += T.newLines.length, T = i[++k]
                        } else this.lines.set(v, R[L--]);
                    var M = 0;
                    for (v = A.length - 1; v >= 0; v--) A[v].index += M, this.lines.onInsertEmitter.fire(A[v]), M += A[v].amount;
                    var P = Math.max(0, x + o - this.lines.maxLength);
                    P > 0 && this.lines.onTrimEmitter.fire(P)
                }
            }, e.prototype.stringIndexToBufferIndex = function(e, t, r) {
                for (void 0 === r && (r = !1); t;) {
                    var i = this.lines.get(e);
                    if (!i) return [-1, -1];
                    for (var n = r ? i.getTrimmedLength() : i.length, o = 0; o < n; ++o)
                        if (i.get(o)[s.CHAR_DATA_WIDTH_INDEX] && (t -= i.get(o)[s.CHAR_DATA_CHAR_INDEX].length || 1), t < 0) return [e, o];
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
                for (null != e ? this.tabs[e] || (e = this.prevStop(e)) : (this.tabs = {}, e = 0); e < this._cols; e += this._optionsService.options.tabStopWidth) this.tabs[e] = !0
            }, e.prototype.prevStop = function(e) {
                for (null == e && (e = this.x); !this.tabs[--e] && e > 0;);
                return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e
            }, e.prototype.nextStop = function(e) {
                for (null == e && (e = this.x); !this.tabs[++e] && e < this._cols;);
                return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e
            }, e.prototype.addMarker = function(e) {
                var t = this,
                    r = new c.Marker(e);
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
                return new u(this, e, t, r, i, n)
            }, e
        }();
        t.Buffer = h;
        var u = function() {
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
        t.BufferStringIterator = u
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(1),
            n = function() {
                function e(e) {
                    this._maxLength = e, this.onDeleteEmitter = new i.EventEmitter, this.onInsertEmitter = new i.EventEmitter, this.onTrimEmitter = new i.EventEmitter, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0
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
                var c = a,
                    l = e.get(++c);
                if (l.isWrapped) {
                    for (var h = [e.get(a)]; c < e.length && l.isWrapped;) h.push(l), l = e.get(++c);
                    if (n >= a && n < c) a += h.length - 1;
                    else {
                        for (var u = 0, f = i(h, u, t), _ = 1, d = 0; _ < h.length;) {
                            var p = i(h, _, t),
                                v = p - d,
                                g = r - f,
                                y = Math.min(v, g);
                            h[u].copyCellsFrom(h[_], d, f, y, !1), (f += y) === r && (u++, f = 0), (d += y) === p && (_++, d = 0), 0 === f && 0 !== u && 2 === h[u - 1].getWidth(r - 1) && (h[u].copyCellsFrom(h[u - 1], r - 1, f++, 1, !1), h[u - 1].setCell(r - 1, o))
                        }
                        h[u].replaceCells(f, r, o);
                        for (var b = 0, m = h.length - 1; m > 0 && (m > u || 0 === h[m].getTrimmedLength()); m--) b++;
                        b > 0 && (s.push(a + h.length - b), s.push(b)), a += h.length - 1
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
                }), s = 0, a = 0, c = 0; c < o;) {
                if (o - c < r) {
                    n.push(o - c);
                    break
                }
                s += r;
                var l = i(e, a, t);
                s > l && (s -= l, a++);
                var h = 2 === e[a].getWidth(s - 1);
                h && s--;
                var u = h ? r - 1 : r;
                n.push(u), c += u
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
        var o = r(1),
            s = function(e) {
                function t(r) {
                    var i = e.call(this) || this;
                    return i.line = r, i._id = t._nextId++, i.isDisposed = !1, i._onDispose = new o.EventEmitter, i
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
                    this.isDisposed || (this.isDisposed = !0, this.line = -1, this._onDispose.fire())
                }, t._nextId = 1, t
            }(r(2).Disposable);
        t.Marker = s
    }, function(e, t, r) {
        "use strict";
        var i = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            n = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(4),
            s = r(28),
            a = function() {
                function e(e, t) {
                    this._renderService = e, this._charSizeService = t
                }
                return e.prototype.getCoords = function(e, t, r, i, n) {
                    return s.getCoords(e, t, r, i, this._charSizeService.hasValidSize, this._renderService.dimensions.actualCellWidth, this._renderService.dimensions.actualCellHeight, n)
                }, e.prototype.getRawByteCoords = function(e, t, r, i) {
                    var n = this.getCoords(e, t, r, i);
                    return s.getRawByteCoords(n)
                }, i([n(0, o.IRenderService), n(1, o.ICharSizeService)], e)
            }();
        t.MouseService = a
    }, function(e, t, r) {
        "use strict";
        var i = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            n = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(0),
            s = r(1),
            a = r(31),
            c = Object.freeze({
                applicationCursorKeys: !1,
                applicationKeypad: !1,
                origin: !1,
                wraparound: !0
            }),
            l = function() {
                function e(e, t, r, i) {
                    this._scrollToBottom = e, this._bufferService = t, this._logService = r, this._optionsService = i, this.isCursorInitialized = !1, this.isCursorHidden = !1, this._onData = new s.EventEmitter, this._onUserInput = new s.EventEmitter, this._onBinary = new s.EventEmitter, this.decPrivateModes = a.clone(c)
                }
                return Object.defineProperty(e.prototype, "onData", {
                    get: function() {
                        return this._onData.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "onUserInput", {
                    get: function() {
                        return this._onUserInput.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "onBinary", {
                    get: function() {
                        return this._onBinary.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.reset = function() {
                    this.decPrivateModes = a.clone(c)
                }, e.prototype.triggerDataEvent = function(e, t) {
                    if (void 0 === t && (t = !1), !this._optionsService.options.disableStdin) {
                        var r = this._bufferService.buffer;
                        r.ybase !== r.ydisp && this._scrollToBottom(), t && this._onUserInput.fire(), this._logService.debug('sending data "' + e + '"', function() {
                            return e.split("").map(function(e) {
                                return e.charCodeAt(0)
                            })
                        }), this._onData.fire(e)
                    }
                }, e.prototype.triggerBinaryEvent = function(e) {
                    this._optionsService.options.disableStdin || (this._logService.debug('sending binary "' + e + '"', function() {
                        return e.split("").map(function(e) {
                            return e.charCodeAt(0)
                        })
                    }), this._onBinary.fire(e))
                }, i([n(1, o.IBufferService), n(2, o.ILogService), n(3, o.IOptionsService)], e)
            }();
        t.CoreService = l
    }, function(e, t, r) {
        "use strict";
        var i = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            n = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            },
            o = this && this.__spreadArrays || function() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var i = Array(e),
                    n = 0;
                for (t = 0; t < r; t++)
                    for (var o = arguments[t], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
                return i
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s, a = r(0);
        ! function(e) {
            e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR", e[e.OFF = 4] = "OFF"
        }(s = t.LogLevel || (t.LogLevel = {}));
        var c = {
                debug: s.DEBUG,
                info: s.INFO,
                warn: s.WARN,
                error: s.ERROR,
                off: s.OFF
            },
            l = function() {
                function e(e) {
                    var t = this;
                    this._optionsService = e, this._updateLogLevel(), this._optionsService.onOptionChange(function(e) {
                        "logLevel" === e && t._updateLogLevel()
                    })
                }
                return e.prototype._updateLogLevel = function() {
                    this._logLevel = c[this._optionsService.options.logLevel]
                }, e.prototype._evalLazyOptionalParams = function(e) {
                    for (var t = 0; t < e.length; t++) "function" == typeof e[t] && (e[t] = e[t]())
                }, e.prototype._log = function(e, t, r) {
                    this._evalLazyOptionalParams(r), e.call.apply(e, o([console, "xterm.js: " + t], r))
                }, e.prototype.debug = function(e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    this._logLevel <= s.DEBUG && this._log(console.log, e, t)
                }, e.prototype.info = function(e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    this._logLevel <= s.INFO && this._log(console.info, e, t)
                }, e.prototype.warn = function(e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    this._logLevel <= s.WARN && this._log(console.warn, e, t)
                }, e.prototype.error = function(e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    this._logLevel <= s.ERROR && this._log(console.error, e, t)
                }, i([n(0, a.IOptionsService)], e)
            }();
        t.LogService = l
    }, function(e, t, r) {
        "use strict";
        var i = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            n = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(0),
            s = function() {
                function e(e) {
                    this._bufferService = e, this.clearRange()
                }
                return Object.defineProperty(e.prototype, "start", {
                    get: function() {
                        return this._start
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "end", {
                    get: function() {
                        return this._end
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.clearRange = function() {
                    this._start = this._bufferService.buffer.y, this._end = this._bufferService.buffer.y
                }, e.prototype.markDirty = function(e) {
                    e < this._start ? this._start = e : e > this._end && (this._end = e)
                }, e.prototype.markRangeDirty = function(e, t) {
                    if (e > t) {
                        var r = e;
                        e = t, t = r
                    }
                    e < this._start && (this._start = e), t > this._end && (this._end = t)
                }, e.prototype.markAllDirty = function() {
                    this.markRangeDirty(0, this._bufferService.rows - 1)
                }, i([n(0, o.IBufferService)], e)
            }();
        t.DirtyRowService = s
    }, function(e, t, r) {
        "use strict";
        var i = this && this.__spreadArrays || function() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var i = Array(e),
                n = 0;
            for (t = 0; t < r; t++)
                for (var o = arguments[t], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
            return i
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            o = r(14),
            s = function() {
                function e() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._entries = new Map;
                    for (var r = 0, i = e; r < i.length; r++) {
                        var n = i[r],
                            o = n[0],
                            s = n[1];
                        this.set(o, s)
                    }
                }
                return e.prototype.set = function(e, t) {
                    var r = this._entries.get(e);
                    return this._entries.set(e, t), r
                }, e.prototype.forEach = function(e) {
                    this._entries.forEach(function(t, r) {
                        return e(r, t)
                    })
                }, e.prototype.has = function(e) {
                    return this._entries.has(e)
                }, e.prototype.get = function(e) {
                    return this._entries.get(e)
                }, e
            }();
        t.ServiceCollection = s;
        var a = function() {
            function e() {
                this._services = new s, this._services.set(n.IInstantiationService, this)
            }
            return e.prototype.setService = function(e, t) {
                this._services.set(e, t)
            }, e.prototype.getService = function(e) {
                return this._services.get(e)
            }, e.prototype.createInstance = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                for (var n = o.getServiceDependencies(e).sort(function(e, t) {
                        return e.index - t.index
                    }), s = [], a = 0, c = n; a < c.length; a++) {
                    var l = c[a],
                        h = this._services.get(l.id);
                    if (!h) throw new Error("[createInstance] " + e.name + " depends on UNKNOWN service " + l.id + ".");
                    s.push(h)
                }
                var u = n.length > 0 ? n[0].index : t.length;
                if (t.length !== u) throw new Error("[createInstance] First service dependency of " + e.name + " at position " + (u + 1) + " conflicts with " + t.length + " static arguments");
                return new(e.bind.apply(e, i([void 0], i(t, s))))
            }, e
        }();
        t.InstantiationService = a
    }, function(e, t, r) {
        "use strict";
        var i = this && this.__decorate || function(e, t, r, i) {
                var n, o = arguments.length,
                    s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                return o > 3 && s && Object.defineProperty(t, r, s), s
            },
            n = this && this.__param || function(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(0),
            s = r(1),
            a = {
                NONE: {
                    events: 0,
                    restrict: function() {
                        return !1
                    }
                },
                X10: {
                    events: 1,
                    restrict: function(e) {
                        return 4 !== e.button && 1 === e.action && (e.ctrl = !1, e.alt = !1, e.shift = !1, !0)
                    }
                },
                VT200: {
                    events: 19,
                    restrict: function(e) {
                        return 32 !== e.action
                    }
                },
                DRAG: {
                    events: 23,
                    restrict: function(e) {
                        return 32 !== e.action || 3 !== e.button
                    }
                },
                ANY: {
                    events: 31,
                    restrict: function(e) {
                        return !0
                    }
                }
            };

        function c(e, t) {
            var r = (e.ctrl ? 16 : 0) | (e.shift ? 4 : 0) | (e.alt ? 8 : 0);
            return 4 === e.button ? (r |= 64, r |= e.action) : (r |= 3 & e.button, 4 & e.button && (r |= 64), 8 & e.button && (r |= 128), 32 === e.action ? r |= 32 : 0 !== e.action || t || (r |= 3)), r
        }
        var l = String.fromCharCode,
            h = {
                DEFAULT: function(e) {
                    var t = [c(e, !1) + 32, e.col + 32, e.row + 32];
                    return t[0] > 255 || t[1] > 255 || t[2] > 255 ? "" : "[M" + l(t[0]) + l(t[1]) + l(t[2])
                },
                SGR: function(e) {
                    var t = 0 === e.action && 4 !== e.button ? "m" : "M";
                    return "[<" + c(e, !0) + ";" + e.col + ";" + e.row + t
                }
            },
            u = function() {
                function e(e, t) {
                    var r = this;
                    this._bufferService = e, this._coreService = t, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._onProtocolChange = new s.EventEmitter, this._lastEvent = null, Object.keys(a).forEach(function(e) {
                        return r.addProtocol(e, a[e])
                    }), Object.keys(h).forEach(function(e) {
                        return r.addEncoding(e, h[e])
                    }), this.reset()
                }
                return e.prototype.addProtocol = function(e, t) {
                    this._protocols[e] = t
                }, e.prototype.addEncoding = function(e, t) {
                    this._encodings[e] = t
                }, Object.defineProperty(e.prototype, "activeProtocol", {
                    get: function() {
                        return this._activeProtocol
                    },
                    set: function(e) {
                        if (!this._protocols[e]) throw new Error('unknown protocol "' + e + '"');
                        this._activeProtocol = e, this._onProtocolChange.fire(this._protocols[e].events)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "activeEncoding", {
                    get: function() {
                        return this._activeEncoding
                    },
                    set: function(e) {
                        if (!this._encodings[e]) throw new Error('unknown encoding "' + e + '"');
                        this._activeEncoding = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.reset = function() {
                    this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null
                }, Object.defineProperty(e.prototype, "onProtocolChange", {
                    get: function() {
                        return this._onProtocolChange.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.triggerMouseEvent = function(e) {
                    if (e.col < 0 || e.col >= this._bufferService.cols || e.row < 0 || e.row >= this._bufferService.rows) return !1;
                    if (4 === e.button && 32 === e.action) return !1;
                    if (3 === e.button && 32 !== e.action) return !1;
                    if (4 !== e.button && (2 === e.action || 3 === e.action)) return !1;
                    if (e.col++, e.row++, 32 === e.action && this._lastEvent && this._compareEvents(this._lastEvent, e)) return !1;
                    if (!this._protocols[this._activeProtocol].restrict(e)) return !1;
                    var t = this._encodings[this._activeEncoding](e);
                    return t && ("DEFAULT" === this._activeEncoding ? this._coreService.triggerBinaryEvent(t) : this._coreService.triggerDataEvent(t, !0)), this._lastEvent = e, !0
                }, e.prototype.explainEvents = function(e) {
                    return {
                        DOWN: !!(1 & e),
                        UP: !!(2 & e),
                        DRAG: !!(4 & e),
                        MOVE: !!(8 & e),
                        WHEEL: !!(16 & e)
                    }
                }, e.prototype._compareEvents = function(e, t) {
                    return e.col === t.col && e.row === t.row && e.button === t.button && e.action === t.action && e.ctrl === t.ctrl && e.alt === t.alt && e.shift === t.shift
                }, i([n(0, o.IBufferService), n(1, o.ICoreService)], e)
            }();
        t.CoreMouseService = u
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e) {
                this._action = e, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0
            }
            return e.prototype.writeSync = function(e) {
                if (this._writeBuffer.length) {
                    for (var t = this._bufferOffset; t < this._writeBuffer.length; ++t) {
                        var r = this._writeBuffer[t],
                            i = this._callbacks[t];
                        this._action(r), i && i()
                    }
                    this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 2147483647
                }
                this._action(e)
            }, e.prototype.write = function(e, t) {
                var r = this;
                if (this._pendingData > 5e7) throw new Error("write data discarded, use flow control to avoid losing data");
                this._writeBuffer.length || (this._bufferOffset = 0, setTimeout(function() {
                    return r._innerWrite()
                })), this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(t)
            }, e.prototype._innerWrite = function() {
                for (var e = this, t = Date.now(); this._writeBuffer.length > this._bufferOffset;) {
                    var r = this._writeBuffer[this._bufferOffset],
                        i = this._callbacks[this._bufferOffset];
                    if (this._bufferOffset++, this._action(r), this._pendingData -= r.length, i && i(), Date.now() - t >= 12) break
                }
                this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(function() {
                    return e._innerWrite()
                }, 0)) : (this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0)
            }, e
        }();
        t.WriteBuffer = i
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e) {
                this._textarea = e
            }
            return Object.defineProperty(e.prototype, "isFocused", {
                get: function() {
                    return document.activeElement === this._textarea && document.hasFocus()
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
        t.CoreBrowserService = i
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(1),
            n = r(78),
            o = function() {
                function e() {
                    this._providers = Object.create(null), this._active = "", this._onChange = new i.EventEmitter;
                    var e = new n.UnicodeV6;
                    this.register(e), this._active = e.version, this._activeProvider = e
                }
                return Object.defineProperty(e.prototype, "onChange", {
                    get: function() {
                        return this._onChange.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "versions", {
                    get: function() {
                        return Object.keys(this._providers)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "activeVersion", {
                    get: function() {
                        return this._active
                    },
                    set: function(e) {
                        if (!this._providers[e]) throw new Error('unknown Unicode version "' + e + '"');
                        this._active = e, this._activeProvider = this._providers[e], this._onChange.fire(e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.register = function(e) {
                    this._providers[e.version] = e
                }, e.prototype.wcwidth = function(e) {
                    return this._activeProvider.wcwidth(e)
                }, e.prototype.getStringCellWidth = function(e) {
                    for (var t = 0, r = e.length, i = 0; i < r; ++i) {
                        var n = e.charCodeAt(i);
                        if (55296 <= n && n <= 56319) {
                            if (++i >= r) return t + this.wcwidth(n);
                            var o = e.charCodeAt(i);
                            56320 <= o && o <= 57343 ? n = 1024 * (n - 55296) + o - 56320 + 65536 : t += this.wcwidth(o)
                        }
                        t += this.wcwidth(n)
                    }
                    return t
                }, e
            }();
        t.UnicodeService = o
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = r(15),
            o = [
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
            s = [
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
            a = function() {
                function e() {
                    if (this.version = "6", !i) {
                        i = new Uint8Array(65536), n.fill(i, 1), i[0] = 0, n.fill(i, 0, 1, 32), n.fill(i, 0, 127, 160), n.fill(i, 2, 4352, 4448), i[9001] = 2, i[9002] = 2, n.fill(i, 2, 11904, 42192), i[12351] = 1, n.fill(i, 2, 44032, 55204), n.fill(i, 2, 63744, 64256), n.fill(i, 2, 65040, 65050), n.fill(i, 2, 65072, 65136), n.fill(i, 2, 65280, 65377), n.fill(i, 2, 65504, 65511);
                        for (var e = 0; e < o.length; ++e) n.fill(i, 0, o[e][0], o[e][1] + 1)
                    }
                }
                return e.prototype.wcwidth = function(e) {
                    return e < 32 ? 0 : e < 127 ? 1 : e < 65536 ? i[e] : function(e, t) {
                        var r, i = 0,
                            n = t.length - 1;
                        if (e < t[0][0] || e > t[n][1]) return !1;
                        for (; n >= i;)
                            if (e > t[r = i + n >> 1][1]) i = r + 1;
                            else {
                                if (!(e < t[r][0])) return !0;
                                n = r - 1
                            } return !1
                    }(e, s) ? 0 : e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141 ? 2 : 1
                }, e
            }();
        t.UnicodeV6 = a
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                this.charsets = [], this.glevel = 0
            }
            return e.prototype.reset = function() {
                this.charset = void 0, this.charsets = [], this.glevel = 0
            }, e.prototype.setgLevel = function(e) {
                this.glevel = e, this.charset = this.charsets[e]
            }, e.prototype.setgCharset = function(e, t) {
                this.charsets[e] = t, this.glevel === e && (this.charset = t)
            }, e
        }();
        t.CharsetService = i
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
    }])
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
        var i = function() {
            function e() {}
            return e.prototype.activate = function(e) {
                this._terminal = e
            }, e.prototype.dispose = function() {}, e.prototype.fit = function() {
                var e = this.proposeDimensions();
                if (e && this._terminal) {
                    var t = this._terminal._core;
                    this._terminal.rows === e.rows && this._terminal.cols === e.cols || (t._renderService.clear(), this._terminal.resize(e.cols, e.rows))
                }
            }, e.prototype.proposeDimensions = function() {
                if (this._terminal && this._terminal.element && this._terminal.element.parentElement) {
                    var e = this._terminal._core,
                        t = window.getComputedStyle(this._terminal.element.parentElement),
                        r = parseInt(t.getPropertyValue("height")),
                        i = Math.max(0, parseInt(t.getPropertyValue("width"))),
                        n = window.getComputedStyle(this._terminal.element),
                        o = r - (parseInt(n.getPropertyValue("padding-top")) + parseInt(n.getPropertyValue("padding-bottom"))),
                        s = i - (parseInt(n.getPropertyValue("padding-right")) + parseInt(n.getPropertyValue("padding-left"))) - e.viewport.scrollBarWidth;
                    return {
                        cols: Math.max(2, Math.floor(s / e._renderService.dimensions.actualCellWidth)),
                        rows: Math.max(1, Math.floor(o / e._renderService.dimensions.actualCellHeight))
                    }
                }
            }, e
        }();
        t.FitAddon = i
    }])
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
        }, r.p = "", r(r.s = 10)
    }([function(e, t, r) {
        "use strict";

        function i(e, t, r) {
            var i = n(e.createShader(t));
            if (e.shaderSource(i, r), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS)) return i;
            console.error(e.getShaderInfoLog(i)), e.deleteShader(i)
        }

        function n(e) {
            if (!e) throw new Error("value must not be falsy");
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PROJECTION_MATRIX = new Float32Array([2, 0, 0, 0, 0, -2, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1]), t.createProgram = function(e, t, r) {
            var o = n(e.createProgram());
            if (e.attachShader(o, n(i(e, e.VERTEX_SHADER, t))), e.attachShader(o, n(i(e, e.FRAGMENT_SHADER, r))), e.linkProgram(o), e.getProgramParameter(o, e.LINK_STATUS)) return o;
            console.error(e.getProgramInfoLog(o)), e.deleteProgram(o)
        }, t.createShader = i, t.expandFloat32Array = function(e, t) {
            for (var r = Math.min(2 * e.length, t), i = new Float32Array(r), n = 0; n < e.length; n++) i[n] = e[n];
            return i
        }, t.throwIfFalsy = n
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_COLOR = 256, t.DEFAULT_ATTR = 256 | t.DEFAULT_COLOR << 9, t.CHAR_DATA_ATTR_INDEX = 0, t.CHAR_DATA_CHAR_INDEX = 1, t.CHAR_DATA_WIDTH_INDEX = 2, t.CHAR_DATA_CODE_INDEX = 3, t.NULL_CELL_CHAR = "", t.NULL_CELL_WIDTH = 1, t.NULL_CELL_CODE = 0, t.WHITESPACE_CELL_CHAR = " ", t.WHITESPACE_CELL_WIDTH = 1, t.WHITESPACE_CELL_CODE = 32
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(3);
        t.RENDER_MODEL_INDICIES_PER_CELL = 3, t.RENDER_MODEL_BG_OFFSET = 1, t.RENDER_MODEL_FG_OFFSET = 2, t.COMBINED_CHAR_BIT_MASK = 2147483648;
        var n = function() {
            function e() {
                this.cells = new Uint32Array(0), this.lineLengths = new Uint32Array(0), this.selection = {
                    hasSelection: !1,
                    viewportStartRow: 0,
                    viewportEndRow: 0,
                    viewportCappedStartRow: 0,
                    viewportCappedEndRow: 0,
                    startCol: 0,
                    endCol: 0
                }
            }
            return e.prototype.resize = function(e, r) {
                var i = e * r * t.RENDER_MODEL_INDICIES_PER_CELL;
                i !== this.cells.length && (this.cells = new Uint32Array(i), this.lineLengths = new Uint32Array(r))
            }, e.prototype.clear = function() {
                i.fill(this.cells, 0, 0), i.fill(this.lineLengths, 0, 0), this.clearSelection()
            }, e.prototype.clearSelection = function() {
                this.selection.hasSelection = !1, this.selection.viewportStartRow = 0, this.selection.viewportEndRow = 0, this.selection.viewportCappedStartRow = 0, this.selection.viewportCappedEndRow = 0, this.selection.startCol = 0, this.selection.endCol = 0
            }, e
        }();
        t.RenderModel = n
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
        var i = function() {
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
            }, e.prototype.isAttributeDefault = function() {
                return 0 === this.fg && 0 === this.bg
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
        t.AttributeData = i
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(6),
            n = r(0),
            o = function() {
                function e(e, t, r, i, n) {
                    this._container = e, this._alpha = i, this._colors = n, this._scaledCharWidth = 0, this._scaledCharHeight = 0, this._scaledCellWidth = 0, this._scaledCellHeight = 0, this._scaledCharLeft = 0, this._scaledCharTop = 0, this._canvas = document.createElement("canvas"), this._canvas.classList.add("xterm-" + t + "-layer"), this._canvas.style.zIndex = r.toString(), this._initCanvas(), this._container.appendChild(this._canvas)
                }
                return e.prototype.dispose = function() {
                    this._container.removeChild(this._canvas), this._charAtlas && this._charAtlas.dispose()
                }, e.prototype._initCanvas = function() {
                    this._ctx = n.throwIfFalsy(this._canvas.getContext("2d", {
                        alpha: this._alpha
                    })), this._alpha || this._clearAll()
                }, e.prototype.onOptionsChanged = function(e) {}, e.prototype.onBlur = function(e) {}, e.prototype.onFocus = function(e) {}, e.prototype.onCursorMove = function(e) {}, e.prototype.onGridChanged = function(e, t, r) {}, e.prototype.onSelectionChanged = function(e, t, r, i) {
                    void 0 === i && (i = !1)
                }, e.prototype.setColors = function(e, t) {
                    this._refreshCharAtlas(e, t)
                }, e.prototype._setTransparency = function(e, t) {
                    if (t !== this._alpha) {
                        var r = this._canvas;
                        this._alpha = t, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, r), this._refreshCharAtlas(e, this._colors), this.onGridChanged(e, 0, e.rows - 1)
                    }
                }, e.prototype._refreshCharAtlas = function(e, t) {
                    this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0 || (this._charAtlas = i.acquireCharAtlas(e, t, this._scaledCharWidth, this._scaledCharHeight), this._charAtlas.warmUp())
                }, e.prototype.resize = function(e, t) {
                    this._scaledCellWidth = t.scaledCellWidth, this._scaledCellHeight = t.scaledCellHeight, this._scaledCharWidth = t.scaledCharWidth, this._scaledCharHeight = t.scaledCharHeight, this._scaledCharLeft = t.scaledCharLeft, this._scaledCharTop = t.scaledCharTop, this._canvas.width = t.scaledCanvasWidth, this._canvas.height = t.scaledCanvasHeight, this._canvas.style.width = t.canvasWidth + "px", this._canvas.style.height = t.canvasHeight + "px", this._alpha || this._clearAll(), this._refreshCharAtlas(e, this._colors)
                }, e.prototype._fillCells = function(e, t, r, i) {
                    this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight)
                }, e.prototype._fillBottomLineAtCells = function(e, t, r) {
                    void 0 === r && (r = 1), this._ctx.fillRect(e * this._scaledCellWidth, (t + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, r * this._scaledCellWidth, window.devicePixelRatio)
                }, e.prototype._fillLeftLineAtCell = function(e, t, r) {
                    this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, window.devicePixelRatio * r, this._scaledCellHeight)
                }, e.prototype._strokeRectAtCell = function(e, t, r, i) {
                    this._ctx.lineWidth = window.devicePixelRatio, this._ctx.strokeRect(e * this._scaledCellWidth + window.devicePixelRatio / 2, t * this._scaledCellHeight + window.devicePixelRatio / 2, r * this._scaledCellWidth - window.devicePixelRatio, i * this._scaledCellHeight - window.devicePixelRatio)
                }, e.prototype._clearAll = function() {
                    this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height))
                }, e.prototype._clearCells = function(e, t, r, i) {
                    this._alpha ? this._ctx.clearRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight))
                }, e.prototype._fillCharTrueColor = function(e, t, r, i) {
                    this._ctx.font = this._getFont(e, !1, !1), this._ctx.textBaseline = "middle", this._clipRow(e, i), this._ctx.fillText(t.getChars(), r * this._scaledCellWidth + this._scaledCharLeft, i * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2)
                }, e.prototype._clipRow = function(e, t) {
                    this._ctx.beginPath(), this._ctx.rect(0, t * this._scaledCellHeight, e.cols * this._scaledCellWidth, this._scaledCellHeight), this._ctx.clip()
                }, e.prototype._getFont = function(e, t, r) {
                    return (r ? "italic" : "") + " " + (t ? e.getOption("fontWeightBold") : e.getOption("fontWeight")) + " " + e.getOption("fontSize") * window.devicePixelRatio + "px " + e.getOption("fontFamily")
                }, e
            }();
        t.BaseRenderLayer = o
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(7),
            n = r(15),
            o = [];
        t.acquireCharAtlas = function(e, t, r, s) {
            for (var a = i.generateConfig(r, s, e, t), c = 0; c < o.length; c++) {
                var l = (h = o[c]).ownedBy.indexOf(e);
                if (l >= 0) {
                    if (i.configEquals(h.config, a)) return h.atlas;
                    1 === h.ownedBy.length ? (h.atlas.dispose(), o.splice(c, 1)) : h.ownedBy.splice(l, 1);
                    break
                }
            }
            for (c = 0; c < o.length; c++) {
                var h = o[c];
                if (i.configEquals(h.config, a)) return h.ownedBy.push(e), h.atlas
            }
            var u = {
                atlas: new n.WebglCharAtlas(document, a),
                config: a,
                ownedBy: [e]
            };
            return o.push(u), u.atlas
        }, t.removeTerminalFromCache = function(e) {
            for (var t = 0; t < o.length; t++) {
                var r = o[t].ownedBy.indexOf(e);
                if (-1 !== r) {
                    1 === o[t].ownedBy.length ? (o[t].atlas.dispose(), o.splice(t, 1)) : o[t].ownedBy.splice(r, 1);
                    break
                }
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
            css: "",
            rgba: 0
        };
        t.generateConfig = function(e, t, r, n) {
            var o = {
                foreground: n.foreground,
                background: n.background,
                cursor: i,
                cursorAccent: i,
                selection: i,
                selectionOpaque: i,
                ansi: n.ansi.slice(),
                contrastCache: n.contrastCache
            };
            return {
                devicePixelRatio: window.devicePixelRatio,
                scaledCharWidth: e,
                scaledCharHeight: t,
                fontFamily: r.getOption("fontFamily"),
                fontSize: r.getOption("fontSize"),
                fontWeight: r.getOption("fontWeight"),
                fontWeightBold: r.getOption("fontWeightBold"),
                allowTransparency: r.getOption("allowTransparency"),
                drawBoldTextInBrightColors: r.getOption("drawBoldTextInBrightColors"),
                minimumContrastRatio: r.getOption("minimumContrastRatio"),
                colors: o
            }
        }, t.configEquals = function(e, t) {
            for (var r = 0; r < e.colors.ansi.length; r++)
                if (e.colors.ansi[r].rgba !== t.colors.ansi[r].rgba) return !1;
            return e.devicePixelRatio === t.devicePixelRatio && e.fontFamily === t.fontFamily && e.fontSize === t.fontSize && e.fontWeight === t.fontWeight && e.fontWeightBold === t.fontWeightBold && e.allowTransparency === t.allowTransparency && e.scaledCharWidth === t.scaledCharWidth && e.scaledCharHeight === t.scaledCharHeight && e.drawBoldTextInBrightColors === t.drawBoldTextInBrightColors && e.minimumContrastRatio === t.minimumContrastRatio && e.colors.foreground === t.colors.foreground && e.colors.background === t.colors.background
        }, t.is256Color = function(e) {
            return 16777216 == (50331648 & e) || 33554432 == (50331648 & e)
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.INVERTED_DEFAULT_COLOR = 257, t.DIM_OPACITY = .5, t.CHAR_ATLAS_CELL_SPACING = 1
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
        var o = r(18),
            s = r(1),
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.content = 0, t.fg = 0, t.bg = 0, t.combinedData = "", t
                }
                return n(t, e), t.fromCharData = function(e) {
                    var r = new t;
                    return r.setFromCharData(e), r
                }, t.prototype.isCombined = function() {
                    return 2097152 & this.content
                }, t.prototype.getWidth = function() {
                    return this.content >> 22
                }, t.prototype.getChars = function() {
                    return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? o.stringFromCodePoint(2097151 & this.content) : ""
                }, t.prototype.getCode = function() {
                    return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content
                }, t.prototype.setFromCharData = function(e) {
                    this.fg = e[s.CHAR_DATA_ATTR_INDEX], this.bg = 0;
                    var t = !1;
                    if (e[s.CHAR_DATA_CHAR_INDEX].length > 2) t = !0;
                    else if (2 === e[s.CHAR_DATA_CHAR_INDEX].length) {
                        var r = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                        if (55296 <= r && r <= 56319) {
                            var i = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                            56320 <= i && i <= 57343 ? this.content = 1024 * (r - 55296) + i - 56320 + 65536 | e[s.CHAR_DATA_WIDTH_INDEX] << 22 : t = !0
                        } else t = !0
                    } else this.content = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e[s.CHAR_DATA_WIDTH_INDEX] << 22;
                    t && (this.combinedData = e[s.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e[s.CHAR_DATA_WIDTH_INDEX] << 22)
                }, t.prototype.getAsCharData = function() {
                    return [this.fg, this.getChars(), this.getWidth(), this.getCode()]
                }, t
            }(r(4).AttributeData);
        t.CellData = a
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(11),
            n = function() {
                function e(e) {
                    this._preserveDrawingBuffer = e
                }
                return e.prototype.activate = function(e) {
                    if (!e.element) throw new Error("Cannot activate WebglAddon before Terminal.open");
                    this._terminal = e;
                    var t = e._core._renderService,
                        r = e._core._colorManager.colors;
                    this._renderer = new i.WebglRenderer(e, r, this._preserveDrawingBuffer), t.setRenderer(this._renderer)
                }, e.prototype.dispose = function() {
                    if (!this._terminal) throw new Error("Cannot dispose WebglAddon because it is activated");
                    var e = this._terminal._core._renderService;
                    e.setRenderer(this._terminal._core._createRenderer()), e.onResize(this._terminal.cols, this._terminal.rows), this._renderer = void 0
                }, Object.defineProperty(e.prototype, "textureAtlas", {
                    get: function() {
                        var e;
                        return null === (e = this._renderer) || void 0 === e ? void 0 : e.textureAtlas
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }();
        t.WebglAddon = n
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
            s = r(14),
            a = r(17),
            c = r(6),
            l = r(19),
            h = r(2),
            u = r(20),
            f = r(1),
            _ = r(21),
            d = r(9),
            p = function(e) {
                function t(t, r, i) {
                    var n = e.call(this) || this;
                    n._terminal = t, n._colors = r, n._model = new h.RenderModel, n._workCell = new d.CellData, n._onRequestRefreshRows = new _.EventEmitter, n._core = n._terminal._core, n._renderLayers = [new s.LinkRenderLayer(n._core.screenElement, 2, n._colors, n._core), new a.CursorRenderLayer(n._core.screenElement, 3, n._colors, n._onRequestRefreshRows)], n.dimensions = {
                        scaledCharWidth: 0,
                        scaledCharHeight: 0,
                        scaledCellWidth: 0,
                        scaledCellHeight: 0,
                        scaledCharLeft: 0,
                        scaledCharTop: 0,
                        scaledCanvasWidth: 0,
                        scaledCanvasHeight: 0,
                        canvasWidth: 0,
                        canvasHeight: 0,
                        actualCellWidth: 0,
                        actualCellHeight: 0
                    }, n._devicePixelRatio = window.devicePixelRatio, n._updateDimensions(), n._canvas = document.createElement("canvas");
                    var c = {
                        antialias: !1,
                        depth: !1,
                        preserveDrawingBuffer: i
                    };
                    if (n._gl = n._canvas.getContext("webgl2", c), !n._gl) throw new Error("WebGL2 not supported");
                    return n._core.screenElement.appendChild(n._canvas), n._rectangleRenderer = new l.RectangleRenderer(n._terminal, n._colors, n._gl, n.dimensions), n._glyphRenderer = new o.GlyphRenderer(n._terminal, n._colors, n._gl, n.dimensions), n.onCharSizeChanged(), n._isAttached = document.body.contains(n._core.screenElement), n
                }
                return n(t, e), Object.defineProperty(t.prototype, "onRequestRefreshRows", {
                    get: function() {
                        return this._onRequestRefreshRows.event
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.dispose = function() {
                    this._renderLayers.forEach(function(e) {
                        return e.dispose()
                    }), this._core.screenElement.removeChild(this._canvas), e.prototype.dispose.call(this)
                }, Object.defineProperty(t.prototype, "textureAtlas", {
                    get: function() {
                        var e;
                        return null === (e = this._charAtlas) || void 0 === e ? void 0 : e.cacheCanvas
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.setColors = function(e) {
                    var t = this;
                    this._colors = e, this._renderLayers.forEach(function(e) {
                        e.setColors(t._terminal, t._colors), e.reset(t._terminal)
                    }), this._rectangleRenderer.setColors(), this._glyphRenderer.setColors(), this._refreshCharAtlas(), this._model.clear()
                }, t.prototype.onDevicePixelRatioChange = function() {
                    this._devicePixelRatio !== window.devicePixelRatio && (this._devicePixelRatio = window.devicePixelRatio, this.onResize(this._terminal.cols, this._terminal.rows))
                }, t.prototype.onResize = function(e, t) {
                    var r = this;
                    this._updateDimensions(), this._model.resize(this._terminal.cols, this._terminal.rows), this._rectangleRenderer.onResize(), this._renderLayers.forEach(function(e) {
                        return e.resize(r._terminal, r.dimensions)
                    }), this._canvas.width = this.dimensions.scaledCanvasWidth, this._canvas.height = this.dimensions.scaledCanvasHeight, this._canvas.style.width = this.dimensions.canvasWidth + "px", this._canvas.style.height = this.dimensions.canvasHeight + "px", this._core.screenElement.style.width = this.dimensions.canvasWidth + "px", this._core.screenElement.style.height = this.dimensions.canvasHeight + "px", this._glyphRenderer.setDimensions(this.dimensions), this._glyphRenderer.onResize(), this._refreshCharAtlas(), this._model.clear()
                }, t.prototype.onCharSizeChanged = function() {
                    this.onResize(this._terminal.cols, this._terminal.rows)
                }, t.prototype.onBlur = function() {
                    var e = this;
                    this._renderLayers.forEach(function(t) {
                        return t.onBlur(e._terminal)
                    })
                }, t.prototype.onFocus = function() {
                    var e = this;
                    this._renderLayers.forEach(function(t) {
                        return t.onFocus(e._terminal)
                    })
                }, t.prototype.onSelectionChanged = function(e, t, r) {
                    var i = this;
                    this._renderLayers.forEach(function(n) {
                        return n.onSelectionChanged(i._terminal, e, t, r)
                    }), this._updateSelectionModel(e, t), this._rectangleRenderer.updateSelection(this._model.selection, r), this._glyphRenderer.updateSelection(this._model, r), this._onRequestRefreshRows.fire({
                        start: 0,
                        end: this._terminal.rows - 1
                    })
                }, t.prototype.onCursorMove = function() {
                    var e = this;
                    this._renderLayers.forEach(function(t) {
                        return t.onCursorMove(e._terminal)
                    })
                }, t.prototype.onOptionsChanged = function() {
                    var e = this;
                    this._renderLayers.forEach(function(t) {
                        return t.onOptionsChanged(e._terminal)
                    }), this._updateDimensions(), this._refreshCharAtlas()
                }, t.prototype._refreshCharAtlas = function() {
                    if (this.dimensions.scaledCharWidth <= 0 && this.dimensions.scaledCharHeight <= 0) this._isAttached = !1;
                    else {
                        var e = c.acquireCharAtlas(this._terminal, this._colors, this.dimensions.scaledCharWidth, this.dimensions.scaledCharHeight);
                        if (!("getRasterizedGlyph" in e)) throw new Error("The webgl renderer only works with the webgl char atlas");
                        this._charAtlas = e, this._charAtlas.warmUp(), this._glyphRenderer.setAtlas(this._charAtlas)
                    }
                }, t.prototype.clear = function() {
                    var e = this;
                    this._renderLayers.forEach(function(t) {
                        return t.reset(e._terminal)
                    })
                }, t.prototype.registerCharacterJoiner = function(e) {
                    return -1
                }, t.prototype.deregisterCharacterJoiner = function(e) {
                    return !1
                }, t.prototype.renderRows = function(e, t) {
                    var r = this;
                    if (!this._isAttached) {
                        if (!(document.body.contains(this._core.screenElement) && this._core._charSizeService.width && this._core._charSizeService.height)) return;
                        this._updateDimensions(), this._refreshCharAtlas(), this._isAttached = !0
                    }
                    this._renderLayers.forEach(function(i) {
                        return i.onGridChanged(r._terminal, e, t)
                    }), this._glyphRenderer.beginFrame() && this._model.clear(), this._updateModel(e, t), this._rectangleRenderer.render(), this._glyphRenderer.render(this._model, this._model.selection.hasSelection)
                }, t.prototype._updateModel = function(e, t) {
                    for (var r = this._core, i = e; i <= t; i++) {
                        var n = i + r.buffer.ydisp,
                            o = r.buffer.lines.get(n);
                        this._model.lineLengths[i] = 0;
                        for (var s = 0; s < r.cols; s++) {
                            o.loadCell(s, this._workCell);
                            var a = this._workCell.getChars(),
                                c = this._workCell.getCode(),
                                l = (i * r.cols + s) * h.RENDER_MODEL_INDICIES_PER_CELL;
                            c !== f.NULL_CELL_CODE && (this._model.lineLengths[i] = s + 1), this._model.cells[l] === c && this._model.cells[l + h.RENDER_MODEL_BG_OFFSET] === this._workCell.bg && this._model.cells[l + h.RENDER_MODEL_FG_OFFSET] === this._workCell.fg || (a.length > 1 && (c |= h.COMBINED_CHAR_BIT_MASK), this._model.cells[l] = c, this._model.cells[l + h.RENDER_MODEL_BG_OFFSET] = this._workCell.bg, this._model.cells[l + h.RENDER_MODEL_FG_OFFSET] = this._workCell.fg, this._glyphRenderer.updateCell(s, i, c, this._workCell.bg, this._workCell.fg, a))
                        }
                    }
                    this._rectangleRenderer.updateBackgrounds(this._model)
                }, t.prototype._updateSelectionModel = function(e, t) {
                    var r = this._terminal;
                    if (e && t && (e[0] !== t[0] || e[1] !== t[1])) {
                        var i = e[1] - r.buffer.viewportY,
                            n = t[1] - r.buffer.viewportY,
                            o = Math.max(i, 0),
                            s = Math.min(n, r.rows - 1);
                        o >= r.rows || s < 0 ? this._model.clearSelection() : (this._model.selection.hasSelection = !0, this._model.selection.viewportStartRow = i, this._model.selection.viewportEndRow = n, this._model.selection.viewportCappedStartRow = o, this._model.selection.viewportCappedEndRow = s, this._model.selection.startCol = e[0], this._model.selection.endCol = t[0])
                    } else this._model.clearSelection()
                }, t.prototype._updateDimensions = function() {
                    this._core._charSizeService.width && this._core._charSizeService.height && (this.dimensions.scaledCharWidth = Math.floor(this._core._charSizeService.width * this._devicePixelRatio), this.dimensions.scaledCharHeight = Math.ceil(this._core._charSizeService.height * this._devicePixelRatio), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._terminal.getOption("lineHeight")), this.dimensions.scaledCharTop = 1 === this._terminal.getOption("lineHeight") ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._terminal.getOption("letterSpacing")), this.dimensions.scaledCharLeft = Math.floor(this._terminal.getOption("letterSpacing") / 2), this.dimensions.scaledCanvasHeight = this._terminal.rows * this.dimensions.scaledCellHeight, this.dimensions.scaledCanvasWidth = this._terminal.cols * this.dimensions.scaledCellWidth, this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / this._devicePixelRatio), this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / this._devicePixelRatio), this.dimensions.actualCellHeight = this.dimensions.scaledCellHeight / this._devicePixelRatio, this.dimensions.actualCellWidth = this.dimensions.scaledCellWidth / this._devicePixelRatio)
                }, t
            }(u.Disposable);
        t.WebglRenderer = p
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(0),
            n = r(2),
            o = r(3),
            s = r(13),
            a = r(1),
            c = r(4),
            l = "#version 300 es\nlayout (location = 0) in vec2 a_unitquad;\nlayout (location = 1) in vec2 a_cellpos;\nlayout (location = 2) in vec2 a_offset;\nlayout (location = 3) in vec2 a_size;\nlayout (location = 4) in vec2 a_texcoord;\nlayout (location = 5) in vec2 a_texsize;\n\nuniform mat4 u_projection;\nuniform vec2 u_resolution;\n\nout vec2 v_texcoord;\n\nvoid main() {\n  vec2 zeroToOne = (a_offset / u_resolution) + a_cellpos + (a_unitquad * a_size);\n  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);\n  v_texcoord = a_texcoord + a_unitquad * a_texsize;\n}",
            h = "#version 300 es\nprecision lowp float;\n\nin vec2 v_texcoord;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  outColor = texture(u_texture, v_texcoord);\n}",
            u = 10 * Float32Array.BYTES_PER_ELEMENT,
            f = function() {
                function e(e, t, r, n) {
                    this._terminal = e, this._colors = t, this._gl = r, this._dimensions = n, this._activeBuffer = 0, this._vertices = {
                        count: 0,
                        attributes: new Float32Array(0),
                        attributesBuffers: [new Float32Array(0), new Float32Array(0)],
                        selectionAttributes: new Float32Array(0)
                    };
                    var o = this._gl,
                        s = i.throwIfFalsy(i.createProgram(o, l, h));
                    this._program = s, this._projectionLocation = i.throwIfFalsy(o.getUniformLocation(this._program, "u_projection")), this._resolutionLocation = i.throwIfFalsy(o.getUniformLocation(this._program, "u_resolution")), this._textureLocation = i.throwIfFalsy(o.getUniformLocation(this._program, "u_texture")), this._vertexArrayObject = o.createVertexArray(), o.bindVertexArray(this._vertexArrayObject);
                    var a = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
                        c = o.createBuffer();
                    o.bindBuffer(o.ARRAY_BUFFER, c), o.bufferData(o.ARRAY_BUFFER, a, o.STATIC_DRAW), o.enableVertexAttribArray(0), o.vertexAttribPointer(0, 2, this._gl.FLOAT, !1, 0, 0);
                    var f = new Uint8Array([0, 1, 3, 0, 2, 3]),
                        _ = o.createBuffer();
                    o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, _), o.bufferData(o.ELEMENT_ARRAY_BUFFER, f, o.STATIC_DRAW), this._attributesBuffer = i.throwIfFalsy(o.createBuffer()), o.bindBuffer(o.ARRAY_BUFFER, this._attributesBuffer), o.enableVertexAttribArray(2), o.vertexAttribPointer(2, 2, o.FLOAT, !1, u, 0), o.vertexAttribDivisor(2, 1), o.enableVertexAttribArray(3), o.vertexAttribPointer(3, 2, o.FLOAT, !1, u, 2 * Float32Array.BYTES_PER_ELEMENT), o.vertexAttribDivisor(3, 1), o.enableVertexAttribArray(4), o.vertexAttribPointer(4, 2, o.FLOAT, !1, u, 4 * Float32Array.BYTES_PER_ELEMENT), o.vertexAttribDivisor(4, 1), o.enableVertexAttribArray(5), o.vertexAttribPointer(5, 2, o.FLOAT, !1, u, 6 * Float32Array.BYTES_PER_ELEMENT), o.vertexAttribDivisor(5, 1), o.enableVertexAttribArray(1), o.vertexAttribPointer(1, 2, o.FLOAT, !1, u, 8 * Float32Array.BYTES_PER_ELEMENT), o.vertexAttribDivisor(1, 1), this._atlasTexture = i.throwIfFalsy(o.createTexture()), o.bindTexture(o.TEXTURE_2D, this._atlasTexture), o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, 1, 1, 0, o.RGBA, o.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255])), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE), o.enable(o.BLEND), o.blendFunc(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA), this.onResize()
                }
                return e.prototype.beginFrame = function() {
                    return !this._atlas || this._atlas.beginFrame()
                }, e.prototype.updateCell = function(e, t, r, i, n, o) {
                    this._updateCell(this._vertices.attributes, e, t, r, i, n, o)
                }, e.prototype._updateCell = function(e, t, r, i, n, s, c) {
                    var l, h = 10 * (r * this._terminal.cols + t);
                    i !== a.NULL_CELL_CODE && i !== a.WHITESPACE_CELL_CODE && void 0 !== i ? this._atlas && ((l = c && c.length > 1 ? this._atlas.getRasterizedGlyphCombinedChar(c, n, s) : this._atlas.getRasterizedGlyph(i, n, s)) ? (e[h] = -l.offset.x + this._dimensions.scaledCharLeft, e[h + 1] = -l.offset.y + this._dimensions.scaledCharTop, e[h + 2] = l.size.x / this._dimensions.scaledCanvasWidth, e[h + 3] = l.size.y / this._dimensions.scaledCanvasHeight, e[h + 4] = l.texturePositionClipSpace.x, e[h + 5] = l.texturePositionClipSpace.y, e[h + 6] = l.sizeClipSpace.x, e[h + 7] = l.sizeClipSpace.y) : o.fill(e, 0, h, h + 10 - 1 - 2)) : o.fill(e, 0, h, h + 10 - 1 - 2)
                }, e.prototype.updateSelection = function(e, t) {
                    var r = this._terminal;
                    this._vertices.selectionAttributes = s.slice(this._vertices.attributes, 0);
                    var i = this._colors.selectionOpaque.rgba >>> 8 | 50331648;
                    if (t)
                        for (var n = e.selection.startCol, o = e.selection.endCol - n, a = e.selection.viewportCappedEndRow - e.selection.viewportCappedStartRow + 1, c = e.selection.viewportCappedStartRow; c < e.selection.viewportCappedStartRow + a; c++) this._updateSelectionRange(n, n + o, c, e, i);
                    else {
                        n = e.selection.viewportStartRow === e.selection.viewportCappedStartRow ? e.selection.startCol : 0;
                        var l = e.selection.viewportCappedStartRow === e.selection.viewportCappedEndRow ? e.selection.endCol : r.cols;
                        this._updateSelectionRange(n, l, e.selection.viewportCappedStartRow, e, i);
                        var h = Math.max(e.selection.viewportCappedEndRow - e.selection.viewportCappedStartRow - 1, 0);
                        for (c = e.selection.viewportCappedStartRow + 1; c <= e.selection.viewportCappedStartRow + h; c++) this._updateSelectionRange(0, l, c, e, i);
                        if (e.selection.viewportCappedStartRow !== e.selection.viewportCappedEndRow) {
                            var u = e.selection.viewportEndRow === e.selection.viewportCappedEndRow ? e.selection.endCol : r.cols;
                            this._updateSelectionRange(0, u, e.selection.viewportCappedEndRow, e, i)
                        }
                    }
                }, e.prototype._updateSelectionRange = function(e, t, r, i, o) {
                    for (var s, a = this._terminal, l = r + a.buffer.viewportY, h = e; h < t; h++) {
                        var u = (r * this._terminal.cols + h) * n.RENDER_MODEL_INDICIES_PER_CELL,
                            f = i.cells[u],
                            _ = i.cells[u + n.RENDER_MODEL_FG_OFFSET];
                        if (67108864 & _) {
                            var d = new c.AttributeData;
                            switch (d.fg = _, d.bg = i.cells[u + n.RENDER_MODEL_BG_OFFSET], _ &= -134217728, d.getBgColorMode()) {
                                case 16777216:
                                case 33554432:
                                    var p = this._getColorFromAnsiIndex(d.getBgColor()).rgba;
                                    _ |= p >> 8 & 16711680 | p >> 8 & 65280 | p >> 8 & 255;
                                case 50331648:
                                    var v = c.AttributeData.toColorRGB(d.getBgColor());
                                    _ |= v[0] << 16 | v[1] << 8 | v[2] << 0;
                                case 0:
                                default:
                                    var g = this._colors.background.rgba;
                                    _ |= g >> 8 & 16711680 | g >> 8 & 65280 | g >> 8 & 255
                            }
                            _ |= 50331648
                        }
                        if (f & n.COMBINED_CHAR_BIT_MASK) {
                            s || (s = a.buffer.getLine(l));
                            var y = s.getCell(h).getChars();
                            this._updateCell(this._vertices.selectionAttributes, h, r, i.cells[u], o, _, y)
                        } else this._updateCell(this._vertices.selectionAttributes, h, r, i.cells[u], o, _)
                    }
                }, e.prototype._getColorFromAnsiIndex = function(e) {
                    if (e >= this._colors.ansi.length) throw new Error("No color found for idx " + e);
                    return this._colors.ansi[e]
                }, e.prototype.onResize = function() {
                    var e = this._terminal,
                        t = this._gl;
                    t.viewport(0, 0, t.canvas.width, t.canvas.height);
                    var r = e.cols * e.rows * 10;
                    if (this._vertices.count !== r) {
                        this._vertices.count = r, this._vertices.attributes = new Float32Array(r);
                        for (var i = 0; i < this._vertices.attributesBuffers.length; i++) this._vertices.attributesBuffers[i] = new Float32Array(r);
                        for (var n = 0, o = 0; o < e.rows; o++)
                            for (var s = 0; s < e.cols; s++) this._vertices.attributes[n + 8] = s / e.cols, this._vertices.attributes[n + 9] = o / e.rows, n += 10
                    }
                }, e.prototype.setColors = function() {}, e.prototype.render = function(e, t) {
                    if (this._atlas) {
                        var r = this._gl;
                        r.useProgram(this._program), r.bindVertexArray(this._vertexArrayObject), this._activeBuffer = (this._activeBuffer + 1) % 2;
                        for (var n = this._vertices.attributesBuffers[this._activeBuffer], o = 0, s = 0; s < e.lineLengths.length; s++) {
                            var a = s * this._terminal.cols * 10,
                                c = (t ? this._vertices.selectionAttributes : this._vertices.attributes).subarray(a, a + 10 * e.lineLengths[s]);
                            n.set(c, o), o += c.length
                        }
                        r.bindBuffer(r.ARRAY_BUFFER, this._attributesBuffer), r.bufferData(r.ARRAY_BUFFER, n.subarray(0, o), r.STREAM_DRAW), this._atlas.hasCanvasChanged && (this._atlas.hasCanvasChanged = !1, r.uniform1i(this._textureLocation, 0), r.activeTexture(r.TEXTURE0 + 0), r.bindTexture(r.TEXTURE_2D, this._atlasTexture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, this._atlas.cacheCanvas), r.generateMipmap(r.TEXTURE_2D)), r.uniformMatrix4fv(this._projectionLocation, !1, i.PROJECTION_MATRIX), r.uniform2f(this._resolutionLocation, r.canvas.width, r.canvas.height), r.drawElementsInstanced(r.TRIANGLES, 6, r.UNSIGNED_BYTE, 0, o / 10)
                    }
                }, e.prototype.setAtlas = function(e) {
                    var t = this._gl;
                    this._atlas = e, t.bindTexture(t.TEXTURE_2D, this._atlasTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e.cacheCanvas), t.generateMipmap(t.TEXTURE_2D)
                }, e.prototype.setDimensions = function(e) {
                    this._dimensions = e
                }, e
            }();
        t.GlyphRenderer = f
    }, function(e, t, r) {
        "use strict";

        function i(e, t, r) {
            void 0 === t && (t = 0), void 0 === r && (r = e.length), t < 0 && (t = (e.length + t) % e.length), r = r >= e.length ? e.length : (e.length + r) % e.length, t = Math.min(t, r);
            for (var i = new e.constructor(r - t), n = 0; n < r - t; ++n) i[n] = e[n + t];
            return i
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.slice = function(e, t, r) {
            return e.slice ? e.slice(t, r) : i(e, t, r)
        }, t.sliceFallback = i
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
        var o = r(5),
            s = r(8),
            a = r(7),
            c = function(e) {
                function t(t, r, i, n) {
                    var o = e.call(this, t, "link", r, !0, i) || this;
                    return n.linkifier.onLinkHover(function(e) {
                        return o._onLinkHover(e)
                    }), n.linkifier.onLinkLeave(function(e) {
                        return o._onLinkLeave(e)
                    }), o
                }
                return n(t, e), t.prototype.resize = function(t, r) {
                    e.prototype.resize.call(this, t, r), this._state = void 0
                }, t.prototype.reset = function(e) {
                    this._clearCurrentLink()
                }, t.prototype._clearCurrentLink = function() {
                    if (this._state) {
                        this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                        var e = this._state.y2 - this._state.y1 - 1;
                        e > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, e), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0
                    }
                }, t.prototype._onLinkHover = function(e) {
                    if (e.fg === s.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._colors.background.css : void 0 !== e.fg && a.is256Color(e.fg) ? this._ctx.fillStyle = this._colors.ansi[e.fg].css : this._ctx.fillStyle = this._colors.foreground.css, e.y1 === e.y2) this._fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1);
                    else {
                        this._fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
                        for (var t = e.y1 + 1; t < e.y2; t++) this._fillBottomLineAtCells(0, t, e.cols);
                        this._fillBottomLineAtCells(0, e.y2, e.x2)
                    }
                    this._state = e
                }, t.prototype._onLinkLeave = function(e) {
                    this._clearCurrentLink()
                }, t
            }(o.BaseRenderLayer);
        t.LinkRenderLayer = c
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(8),
            n = r(1),
            o = r(0),
            s = r(4),
            a = r(16),
            c = 1024,
            l = 1024,
            h = Math.floor(.8 * l),
            u = {
                css: "rgba(0, 0, 0, 0)",
                rgba: 0
            },
            f = {
                offset: {
                    x: 0,
                    y: 0
                },
                texturePosition: {
                    x: 0,
                    y: 0
                },
                texturePositionClipSpace: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 0,
                    y: 0
                },
                sizeClipSpace: {
                    x: 0,
                    y: 0
                }
            },
            _ = 2,
            d = function() {
                function e(e, t) {
                    this._config = t, this._didWarmUp = !1, this._cacheMap = {}, this._cacheMapCombined = {}, this._currentRowY = 0, this._currentRowX = 0, this._currentRowHeight = 0, this.hasCanvasChanged = !1, this._workBoundingBox = {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }, this._workAttributeData = new s.AttributeData, this.cacheCanvas = e.createElement("canvas"), this.cacheCanvas.width = c, this.cacheCanvas.height = l, this._cacheCtx = o.throwIfFalsy(this.cacheCanvas.getContext("2d", {
                        alpha: !0
                    })), this._tmpCanvas = e.createElement("canvas"), this._tmpCanvas.width = 2 * this._config.scaledCharWidth + 2 * _, this._tmpCanvas.height = this._config.scaledCharHeight + 2 * _, this._tmpCtx = o.throwIfFalsy(this._tmpCanvas.getContext("2d", {
                        alpha: this._config.allowTransparency
                    }))
                }
                return e.prototype.dispose = function() {
                    this.cacheCanvas.parentElement && this.cacheCanvas.parentElement.removeChild(this.cacheCanvas)
                }, e.prototype.warmUp = function() {
                    this._didWarmUp || (this._doWarmUp(), this._didWarmUp = !0)
                }, e.prototype._doWarmUp = function() {
                    for (var e, t, r = 33; r < 126; r++) {
                        var i = this._drawToCache(r, n.DEFAULT_COLOR, n.DEFAULT_COLOR);
                        this._cacheMap[r] = ((e = {})[n.DEFAULT_COLOR] = ((t = {})[n.DEFAULT_COLOR] = i, t), e)
                    }
                }, e.prototype.beginFrame = function() {
                    return this._currentRowY > h && (this._cacheCtx.clearRect(0, 0, c, l), this._cacheMap = {}, this._currentRowHeight = 0, this._currentRowX = 0, this._currentRowY = 0, this._doWarmUp(), !0)
                }, e.prototype.getRasterizedGlyphCombinedChar = function(e, t, r) {
                    var i, n = this._cacheMapCombined[e];
                    n || (n = {}, this._cacheMapCombined[e] = n);
                    var o = n[t];
                    return o && (i = o[r]), i || (i = this._drawToCache(e, t, r), n[t] || (n[t] = {}), n[t][r] = i), i
                }, e.prototype.getRasterizedGlyph = function(e, t, r) {
                    var i, n = this._cacheMap[e];
                    n || (n = {}, this._cacheMap[e] = n);
                    var o = n[t];
                    return o && (i = o[r]), i || (i = this._drawToCache(e, t, r), n[t] || (n[t] = {}), n[t][r] = i), i
                }, e.prototype._getColorFromAnsiIndex = function(e) {
                    if (e >= this._config.colors.ansi.length) throw new Error("No color found for idx " + e);
                    return this._config.colors.ansi[e]
                }, e.prototype._getBackgroundColor = function(e, t, r) {
                    if (this._config.allowTransparency) return u;
                    switch (e) {
                        case 16777216:
                        case 33554432:
                            return this._getColorFromAnsiIndex(t);
                        case 50331648:
                            var i = s.AttributeData.toColorRGB(t);
                            return {
                                rgba: t << 8, css: "#" + p(i[0]) + p(i[1]) + p(i[2])
                            };
                        case 0:
                        default:
                            return r ? this._config.colors.foreground : this._config.colors.background
                    }
                }, e.prototype._getForegroundCss = function(e, t, r, i, n, o, c, l) {
                    var h = this._getMinimumContrastCss(e, t, r, i, n, o, c, l);
                    if (h) return h;
                    switch (n) {
                        case 16777216:
                        case 33554432:
                            return this._config.drawBoldTextInBrightColors && l && o < 8 && (o += 8), this._getColorFromAnsiIndex(o).css;
                        case 50331648:
                            var u = s.AttributeData.toColorRGB(o);
                            return a.channels.toCss(u[0], u[1], u[2]);
                        case 0:
                        default:
                            if (c) {
                                var f = this._config.colors.background.css;
                                return 9 === f.length ? f.substr(0, 7) : f
                            }
                            return this._config.colors.foreground.css
                    }
                }, e.prototype._resolveBackgroundRgba = function(e, t, r) {
                    switch (e) {
                        case 16777216:
                        case 33554432:
                            return this._getColorFromAnsiIndex(t).rgba;
                        case 50331648:
                            return t << 8;
                        case 0:
                        default:
                            return r ? this._config.colors.foreground.rgba : this._config.colors.background.rgba
                    }
                }, e.prototype._resolveForegroundRgba = function(e, t, r, i) {
                    switch (e) {
                        case 16777216:
                        case 33554432:
                            return this._config.drawBoldTextInBrightColors && i && t < 8 && (t += 8), this._getColorFromAnsiIndex(t).rgba;
                        case 50331648:
                            return t << 8;
                        case 0:
                        default:
                            return r ? this._config.colors.background.rgba : this._config.colors.foreground.rgba
                    }
                }, e.prototype._getMinimumContrastCss = function(e, t, r, i, n, o, s, c) {
                    if (1 !== this._config.minimumContrastRatio) {
                        var l = this._config.colors.contrastCache.getCss(e, i);
                        if (void 0 !== l) return l || void 0;
                        var h = this._resolveBackgroundRgba(t, r, s),
                            u = this._resolveForegroundRgba(n, o, s, c),
                            f = a.rgba.ensureContrastRatio(h, u, this._config.minimumContrastRatio);
                        if (f) {
                            var _ = a.channels.toCss(f >> 24 & 255, f >> 16 & 255, f >> 8 & 255);
                            return this._config.colors.contrastCache.setCss(e, i, _), _
                        }
                        this._config.colors.contrastCache.setCss(e, i, null)
                    }
                }, e.prototype._drawToCache = function(e, t, r) {
                    var n = "number" == typeof e ? String.fromCharCode(e) : e;
                    if (this.hasCanvasChanged = !0, this._tmpCtx.save(), this._workAttributeData.fg = r, this._workAttributeData.bg = t, this._workAttributeData.isInvisible()) return f;
                    var o = !!this._workAttributeData.isBold(),
                        s = !!this._workAttributeData.isInverse(),
                        a = !!this._workAttributeData.isDim(),
                        h = !!this._workAttributeData.isItalic(),
                        u = this._workAttributeData.getFgColor(),
                        d = this._workAttributeData.getFgColorMode(),
                        p = this._workAttributeData.getBgColor(),
                        v = this._workAttributeData.getBgColorMode();
                    if (s) {
                        var g = u;
                        u = p, p = g;
                        var y = d;
                        d = v, v = y
                    }
                    var b = this._getBackgroundColor(v, p, s);
                    this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = b.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.globalCompositeOperation = "source-over";
                    var m = o ? this._config.fontWeightBold : this._config.fontWeight,
                        C = h ? "italic" : "";
                    this._tmpCtx.font = C + " " + m + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily, this._tmpCtx.textBaseline = "top", this._tmpCtx.fillStyle = this._getForegroundCss(t, v, p, r, d, u, s, o), a && (this._tmpCtx.globalAlpha = i.DIM_OPACITY), this._tmpCtx.fillText(n, _, _), this._tmpCtx.restore();
                    var S = this._tmpCtx.getImageData(0, 0, this._tmpCanvas.width, this._tmpCanvas.height);
                    if (function(e, t) {
                            for (var r = !0, i = t.rgba >>> 24, n = t.rgba >>> 16 & 255, o = t.rgba >>> 8 & 255, s = 0; s < e.data.length; s += 4) e.data[s] === i && e.data[s + 1] === n && e.data[s + 2] === o ? e.data[s + 3] = 0 : r = !1;
                            return r
                        }(S, b)) return f;
                    var w = this._findGlyphBoundingBox(S, this._workBoundingBox),
                        E = this._clipImageData(S, this._workBoundingBox);
                    return this._currentRowX + this._config.scaledCharWidth > c && (this._currentRowX = 0, this._currentRowY += this._currentRowHeight, this._currentRowHeight = 0), w.texturePosition.x = this._currentRowX, w.texturePosition.y = this._currentRowY, w.texturePositionClipSpace.x = this._currentRowX / c, w.texturePositionClipSpace.y = this._currentRowY / l, this._currentRowHeight = Math.max(this._currentRowHeight, w.size.y), this._currentRowX += w.size.x, this._cacheCtx.putImageData(E, w.texturePosition.x, w.texturePosition.y), w
                }, e.prototype._findGlyphBoundingBox = function(e, t) {
                    t.top = 0;
                    for (var r = !1, i = 0; i < this._tmpCanvas.height; i++) {
                        for (var n = 0; n < this._tmpCanvas.width; n++) {
                            var o = i * this._tmpCanvas.width * 4 + 4 * n + 3;
                            if (0 !== e.data[o]) {
                                t.top = i, r = !0;
                                break
                            }
                        }
                        if (r) break
                    }
                    for (t.left = 0, r = !1, n = 0; n < this._tmpCanvas.width; n++) {
                        for (i = 0; i < this._tmpCanvas.height; i++)
                            if (o = i * this._tmpCanvas.width * 4 + 4 * n + 3, 0 !== e.data[o]) {
                                t.left = n, r = !0;
                                break
                            } if (r) break
                    }
                    for (t.right = this._tmpCanvas.width, r = !1, n = this._tmpCanvas.width - 1; n >= 0; n--) {
                        for (i = 0; i < this._tmpCanvas.height; i++)
                            if (o = i * this._tmpCanvas.width * 4 + 4 * n + 3, 0 !== e.data[o]) {
                                t.right = n, r = !0;
                                break
                            } if (r) break
                    }
                    for (t.bottom = this._tmpCanvas.height, r = !1, i = this._tmpCanvas.height - 1; i >= 0; i--) {
                        for (n = 0; n < this._tmpCanvas.width; n++)
                            if (o = i * this._tmpCanvas.width * 4 + 4 * n + 3, 0 !== e.data[o]) {
                                t.bottom = i, r = !0;
                                break
                            } if (r) break
                    }
                    return {
                        texturePosition: {
                            x: 0,
                            y: 0
                        },
                        texturePositionClipSpace: {
                            x: 0,
                            y: 0
                        },
                        size: {
                            x: t.right - t.left + 1,
                            y: t.bottom - t.top + 1
                        },
                        sizeClipSpace: {
                            x: (t.right - t.left + 1) / c,
                            y: (t.bottom - t.top + 1) / l
                        },
                        offset: {
                            x: -t.left + _,
                            y: -t.top + _
                        }
                    }
                }, e.prototype._clipImageData = function(e, t) {
                    for (var r = t.right - t.left + 1, i = t.bottom - t.top + 1, n = new Uint8ClampedArray(r * i * 4), o = t.top; o <= t.bottom; o++)
                        for (var s = t.left; s <= t.right; s++) {
                            var a = o * this._tmpCanvas.width * 4 + 4 * s,
                                c = (o - t.top) * r * 4 + 4 * (s - t.left);
                            n[c] = e.data[a], n[c + 1] = e.data[a + 1], n[c + 2] = e.data[a + 2], n[c + 3] = e.data[a + 3]
                        }
                    return new ImageData(n, r, i)
                }, e
            }();

        function p(e) {
            var t = e.toString(16);
            return t.length < 2 ? "0" + t : t
        }
        t.WebglCharAtlas = d
    }, function(e, t, r) {
        "use strict";
        var i, n, o, s;

        function a(e) {
            var t = e.toString(16);
            return t.length < 2 ? "0" + t : t
        }

        function c(e, t) {
            return e < t ? (t + .05) / (e + .05) : (e + .05) / (t + .05)
        }
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e.toCss = function(e, t, r, i) {
                    return void 0 !== i ? "#" + a(e) + a(t) + a(r) + a(i) : "#" + a(e) + a(t) + a(r)
                }, e.toRgba = function(e, t, r, i) {
                    return void 0 === i && (i = 255), (e << 24 | t << 16 | r << 8 | i) >>> 0
                }
            }(i = t.channels || (t.channels = {})), (n = t.color || (t.color = {})).blend = function(e, t) {
                var r = (255 & t.rgba) / 255;
                if (1 === r) return {
                    css: t.css,
                    rgba: t.rgba
                };
                var n = t.rgba >> 24 & 255,
                    o = t.rgba >> 16 & 255,
                    s = t.rgba >> 8 & 255,
                    a = e.rgba >> 24 & 255,
                    c = e.rgba >> 16 & 255,
                    l = e.rgba >> 8 & 255,
                    h = a + Math.round((n - a) * r),
                    u = c + Math.round((o - c) * r),
                    f = l + Math.round((s - l) * r);
                return {
                    css: i.toCss(h, u, f),
                    rgba: i.toRgba(h, u, f)
                }
            }, n.ensureContrastRatio = function(e, t, r) {
                var i = s.ensureContrastRatio(e.rgba, t.rgba, r);
                if (i) return s.toColor(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255)
            }, n.opaque = function(e) {
                var t = (255 | e.rgba) >>> 0,
                    r = s.toChannels(t),
                    n = r[0],
                    o = r[1],
                    a = r[2];
                return {
                    css: i.toCss(n, o, a),
                    rgba: t
                }
            }, (t.css || (t.css = {})).toColor = function(e) {
                return {
                    css: e,
                    rgba: (parseInt(e.slice(1), 16) << 8 | 255) >>> 0
                }
            },
            function(e) {
                function t(e, t, r) {
                    var i = e / 255,
                        n = t / 255,
                        o = r / 255;
                    return .2126 * (i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .0722 * (o <= .03928 ? o / 12.92 : Math.pow((o + .055) / 1.055, 2.4))
                }
                e.relativeLuminance = function(e) {
                    return t(e >> 16 & 255, e >> 8 & 255, 255 & e)
                }, e.relativeLuminance2 = t
            }(o = t.rgb || (t.rgb = {})),
            function(e) {
                function t(e, t, r) {
                    for (var i = e >> 24 & 255, n = e >> 16 & 255, s = e >> 8 & 255, a = t >> 24 & 255, l = t >> 16 & 255, h = t >> 8 & 255, u = c(o.relativeLuminance2(a, h, l), o.relativeLuminance2(i, n, s)); u < r && (a > 0 || l > 0 || h > 0);) a -= Math.max(0, Math.ceil(.1 * a)), l -= Math.max(0, Math.ceil(.1 * l)), h -= Math.max(0, Math.ceil(.1 * h)), u = c(o.relativeLuminance2(a, h, l), o.relativeLuminance2(i, n, s));
                    return (a << 24 | l << 16 | h << 8 | 255) >>> 0
                }

                function r(e, t, r) {
                    for (var i = e >> 24 & 255, n = e >> 16 & 255, s = e >> 8 & 255, a = t >> 24 & 255, l = t >> 16 & 255, h = t >> 8 & 255, u = c(o.relativeLuminance2(a, h, l), o.relativeLuminance2(i, n, s)); u < r && (a < 255 || l < 255 || h < 255);) a = Math.min(255, a + Math.ceil(.1 * (255 - a))), l = Math.min(255, l + Math.ceil(.1 * (255 - l))), h = Math.min(255, h + Math.ceil(.1 * (255 - h))), u = c(o.relativeLuminance2(a, h, l), o.relativeLuminance2(i, n, s));
                    return (a << 24 | l << 16 | h << 8 | 255) >>> 0
                }
                e.ensureContrastRatio = function(e, i, n) {
                    var s = o.relativeLuminance(e >> 8),
                        a = o.relativeLuminance(i >> 8);
                    if (c(s, a) < n) return a < s ? t(e, i, n) : r(e, i, n)
                }, e.reduceLuminance = t, e.increaseLuminance = r, e.toChannels = function(e) {
                    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
                }, e.toColor = function(e, t, r) {
                    return {
                        css: i.toCss(e, t, r),
                        rgba: i.toRgba(e, t, r)
                    }
                }
            }(s = t.rgba || (t.rgba = {})), t.toPaddedHex = a, t.contrastRatio = c
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
        var o = r(5),
            s = r(9),
            a = function(e) {
                function t(t, r, i, n) {
                    var o = e.call(this, t, "cursor", r, !0, i) || this;
                    return o._onRequestRefreshRowsEvent = n, o._cell = new s.CellData, o._state = {
                        x: 0,
                        y: 0,
                        isFocused: !1,
                        style: "",
                        width: 0
                    }, o._cursorRenderers = {
                        bar: o._renderBarCursor.bind(o),
                        block: o._renderBlockCursor.bind(o),
                        underline: o._renderUnderlineCursor.bind(o)
                    }, o
                }
                return n(t, e), t.prototype.resize = function(t, r) {
                    e.prototype.resize.call(this, t, r), this._state = {
                        x: 0,
                        y: 0,
                        isFocused: !1,
                        style: "",
                        width: 0
                    }
                }, t.prototype.reset = function(e) {
                    this._clearCursor(), this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), this.onOptionsChanged(e))
                }, t.prototype.onBlur = function(e) {
                    this._cursorBlinkStateManager && this._cursorBlinkStateManager.pause(), this._onRequestRefreshRowsEvent.fire({
                        start: e.buffer.cursorY,
                        end: e.buffer.cursorY
                    })
                }, t.prototype.onFocus = function(e) {
                    this._cursorBlinkStateManager ? this._cursorBlinkStateManager.resume(e) : this._onRequestRefreshRowsEvent.fire({
                        start: e.buffer.cursorY,
                        end: e.buffer.cursorY
                    })
                }, t.prototype.onOptionsChanged = function(e) {
                    var t, r = this;
                    e.getOption("cursorBlink") ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new c(e, function() {
                        r._render(e, !0)
                    })) : (null === (t = this._cursorBlinkStateManager) || void 0 === t || t.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRefreshRowsEvent.fire({
                        start: e.buffer.cursorY,
                        end: e.buffer.cursorY
                    })
                }, t.prototype.onCursorMove = function(e) {
                    this._cursorBlinkStateManager && this._cursorBlinkStateManager.restartBlinkAnimation(e)
                }, t.prototype.onGridChanged = function(e, t, r) {
                    !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(e, !1) : this._cursorBlinkStateManager.restartBlinkAnimation(e)
                }, t.prototype._render = function(e, t) {
                    if (e._core._coreService.isCursorInitialized && !e._core._coreService.isCursorHidden) {
                        var r = e.buffer.baseY + e.buffer.cursorY,
                            i = r - e.buffer.viewportY;
                        if (i < 0 || i >= e.rows) this._clearCursor();
                        else if (e._core.buffer.lines.get(r).loadCell(e.buffer.cursorX, this._cell), void 0 !== this._cell.content) {
                            if (!l(e)) {
                                this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css;
                                var n = e.getOption("cursorStyle");
                                return n && "block" !== n ? this._cursorRenderers[n](e, e.buffer.cursorX, i, this._cell) : this._renderBlurCursor(e, e.buffer.cursorX, i, this._cell), this._ctx.restore(), this._state.x = e.buffer.cursorX, this._state.y = i, this._state.isFocused = !1, this._state.style = n, void(this._state.width = this._cell.getWidth())
                            }
                            if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                                if (this._state) {
                                    if (this._state.x === e.buffer.cursorX && this._state.y === i && this._state.isFocused === l(e) && this._state.style === e.getOption("cursorStyle") && this._state.width === this._cell.getWidth()) return;
                                    this._clearCursor()
                                }
                                this._ctx.save(), this._cursorRenderers[e.getOption("cursorStyle") || "block"](e, e.buffer.cursorX, i, this._cell), this._ctx.restore(), this._state.x = e.buffer.cursorX, this._state.y = i, this._state.isFocused = !1, this._state.style = e.getOption("cursorStyle"), this._state.width = this._cell.getWidth()
                            } else this._clearCursor()
                        }
                    } else this._clearCursor()
                }, t.prototype._clearCursor = function() {
                    this._state && (this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = {
                        x: 0,
                        y: 0,
                        isFocused: !1,
                        style: "",
                        width: 0
                    })
                }, t.prototype._renderBarCursor = function(e, t, r, i) {
                    this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillLeftLineAtCell(t, r, e.getOption("cursorWidth")), this._ctx.restore()
                }, t.prototype._renderBlockCursor = function(e, t, r, i) {
                    this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillCells(t, r, i.getWidth(), 1), this._ctx.fillStyle = this._colors.cursorAccent.css, this._fillCharTrueColor(e, i, t, r), this._ctx.restore()
                }, t.prototype._renderUnderlineCursor = function(e, t, r, i) {
                    this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillBottomLineAtCells(t, r), this._ctx.restore()
                }, t.prototype._renderBlurCursor = function(e, t, r, i) {
                    this._ctx.save(), this._ctx.strokeStyle = this._colors.cursor.css, this._strokeRectAtCell(t, r, i.getWidth(), 1), this._ctx.restore()
                }, t
            }(o.BaseRenderLayer);
        t.CursorRenderLayer = a;
        var c = function() {
            function e(e, t) {
                this._renderCallback = t, this.isCursorVisible = !0, l(e) && this._restartInterval()
            }
            return Object.defineProperty(e.prototype, "isPaused", {
                get: function() {
                    return !(this._blinkStartTimeout || this._blinkInterval)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function() {
                this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
            }, e.prototype.restartBlinkAnimation = function(e) {
                var t = this;
                this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = !0, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                    t._renderCallback(), t._animationFrame = void 0
                })))
            }, e.prototype._restartInterval = function(e) {
                var t = this;
                void 0 === e && (e = 600), this._blinkInterval && window.clearInterval(this._blinkInterval), this._blinkStartTimeout = setTimeout(function() {
                    if (t._animationTimeRestarted) {
                        var e = 600 - (Date.now() - t._animationTimeRestarted);
                        if (t._animationTimeRestarted = void 0, e > 0) return void t._restartInterval(e)
                    }
                    t.isCursorVisible = !1, t._animationFrame = window.requestAnimationFrame(function() {
                        t._renderCallback(), t._animationFrame = void 0
                    }), t._blinkInterval = setInterval(function() {
                        if (t._animationTimeRestarted) {
                            var e = 600 - (Date.now() - t._animationTimeRestarted);
                            return t._animationTimeRestarted = void 0, void t._restartInterval(e)
                        }
                        t.isCursorVisible = !t.isCursorVisible, t._animationFrame = window.requestAnimationFrame(function() {
                            t._renderCallback(), t._animationFrame = void 0
                        })
                    }, 600)
                }, e)
            }, e.prototype.pause = function() {
                this.isCursorVisible = !0, this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
            }, e.prototype.resume = function(e) {
                this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation(e)
            }, e
        }();

        function l(e) {
            return document.activeElement === e.textarea && document.hasFocus()
        }
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
                    c = 0,
                    l = 0;
                if (this.interim[0]) {
                    var h = !1,
                        u = this.interim[0];
                    u &= 192 == (224 & u) ? 31 : 224 == (240 & u) ? 15 : 7;
                    for (var f = 0, _ = void 0;
                        (_ = 63 & this.interim[++f]) && f < 4;) u <<= 6, u |= _;
                    for (var d = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, p = d - f; l < p;) {
                        if (l >= r) return 0;
                        if (128 != (192 & (_ = e[l++]))) {
                            l--, h = !0;
                            break
                        }
                        this.interim[f++] = _, u <<= 6, u |= 63 & _
                    }
                    h || (2 === d ? u < 128 ? l-- : t[a++] = u : 3 === d ? u < 2048 || u >= 55296 && u <= 57343 || (t[a++] = u) : u < 65536 || u > 1114111 || (t[a++] = u)), this.interim.fill(0)
                }
                for (var v = r - 4, g = l; g < r;) {
                    for (; !(!(g < v) || 128 & (i = e[g]) || 128 & (n = e[g + 1]) || 128 & (o = e[g + 2]) || 128 & (s = e[g + 3]));) t[a++] = i, t[a++] = n, t[a++] = o, t[a++] = s, g += 4;
                    if ((i = e[g++]) < 128) t[a++] = i;
                    else if (192 == (224 & i)) {
                        if (g >= r) return this.interim[0] = i, a;
                        if (128 != (192 & (n = e[g++]))) {
                            g--;
                            continue
                        }
                        if ((c = (31 & i) << 6 | 63 & n) < 128) {
                            g--;
                            continue
                        }
                        t[a++] = c
                    } else if (224 == (240 & i)) {
                        if (g >= r) return this.interim[0] = i, a;
                        if (128 != (192 & (n = e[g++]))) {
                            g--;
                            continue
                        }
                        if (g >= r) return this.interim[0] = i, this.interim[1] = n, a;
                        if (128 != (192 & (o = e[g++]))) {
                            g--;
                            continue
                        }
                        if ((c = (15 & i) << 12 | (63 & n) << 6 | 63 & o) < 2048 || c >= 55296 && c <= 57343) continue;
                        t[a++] = c
                    } else if (240 == (248 & i)) {
                        if (g >= r) return this.interim[0] = i, a;
                        if (128 != (192 & (n = e[g++]))) {
                            g--;
                            continue
                        }
                        if (g >= r) return this.interim[0] = i, this.interim[1] = n, a;
                        if (128 != (192 & (o = e[g++]))) {
                            g--;
                            continue
                        }
                        if (g >= r) return this.interim[0] = i, this.interim[1] = n, this.interim[2] = o, a;
                        if (128 != (192 & (s = e[g++]))) {
                            g--;
                            continue
                        }
                        if ((c = (7 & i) << 18 | (63 & n) << 12 | (63 & o) << 6 | 63 & s) < 65536 || c > 1114111) continue;
                        t[a++] = c
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
        var i = r(0),
            n = r(3),
            o = r(2),
            s = "#version 300 es\nlayout (location = 0) in vec2 a_position;\nlayout (location = 1) in vec2 a_size;\nlayout (location = 2) in vec4 a_color;\nlayout (location = 3) in vec2 a_unitquad;\n\nuniform mat4 u_projection;\nuniform vec2 u_resolution;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 zeroToOne = (a_position + (a_unitquad * a_size)) / u_resolution;\n  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);\n  v_color = a_color;\n}",
            a = "#version 300 es\nprecision lowp float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n  outColor = v_color;\n}",
            c = 8,
            l = c * Float32Array.BYTES_PER_ELEMENT,
            h = 20 * c,
            u = function() {
                function e(e, t, r, n) {
                    this._terminal = e, this._colors = t, this._gl = r, this._dimensions = n, this._vertices = {
                        count: 0,
                        attributes: new Float32Array(h),
                        selection: new Float32Array(3 * c)
                    };
                    var o = this._gl;
                    this._program = i.throwIfFalsy(i.createProgram(o, s, a)), this._resolutionLocation = i.throwIfFalsy(o.getUniformLocation(this._program, "u_resolution")), this._projectionLocation = i.throwIfFalsy(o.getUniformLocation(this._program, "u_projection")), this._vertexArrayObject = o.createVertexArray(), o.bindVertexArray(this._vertexArrayObject);
                    var u = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
                        f = o.createBuffer();
                    o.bindBuffer(o.ARRAY_BUFFER, f), o.bufferData(o.ARRAY_BUFFER, u, o.STATIC_DRAW), o.enableVertexAttribArray(3), o.vertexAttribPointer(3, 2, this._gl.FLOAT, !1, 0, 0);
                    var _ = new Uint8Array([0, 1, 3, 0, 2, 3]),
                        d = o.createBuffer();
                    o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, d), o.bufferData(o.ELEMENT_ARRAY_BUFFER, _, o.STATIC_DRAW), this._attributesBuffer = i.throwIfFalsy(o.createBuffer()), o.bindBuffer(o.ARRAY_BUFFER, this._attributesBuffer), o.enableVertexAttribArray(0), o.vertexAttribPointer(0, 2, o.FLOAT, !1, l, 0), o.vertexAttribDivisor(0, 1), o.enableVertexAttribArray(1), o.vertexAttribPointer(1, 2, o.FLOAT, !1, l, 2 * Float32Array.BYTES_PER_ELEMENT), o.vertexAttribDivisor(1, 1), o.enableVertexAttribArray(2), o.vertexAttribPointer(2, 4, o.FLOAT, !1, l, 4 * Float32Array.BYTES_PER_ELEMENT), o.vertexAttribDivisor(2, 1), this._updateCachedColors()
                }
                return e.prototype.render = function() {
                    var e = this._gl;
                    e.useProgram(this._program), e.bindVertexArray(this._vertexArrayObject), e.uniformMatrix4fv(this._projectionLocation, !1, i.PROJECTION_MATRIX), e.uniform2f(this._resolutionLocation, e.canvas.width, e.canvas.height), e.bindBuffer(e.ARRAY_BUFFER, this._attributesBuffer), e.bufferData(e.ARRAY_BUFFER, this._vertices.attributes, e.DYNAMIC_DRAW), e.drawElementsInstanced(this._gl.TRIANGLES, 6, e.UNSIGNED_BYTE, 0, this._vertices.count), e.bindBuffer(e.ARRAY_BUFFER, this._attributesBuffer), e.bufferData(e.ARRAY_BUFFER, this._vertices.selection, e.DYNAMIC_DRAW), e.drawElementsInstanced(this._gl.TRIANGLES, 6, e.UNSIGNED_BYTE, 0, 3)
                }, e.prototype.onResize = function() {
                    this._updateViewportRectangle()
                }, e.prototype.setColors = function() {
                    this._updateCachedColors(), this._updateViewportRectangle()
                }, e.prototype._updateCachedColors = function() {
                    this._bgFloat = this._colorToFloat32Array(this._colors.background), this._selectionFloat = this._colorToFloat32Array(this._colors.selectionOpaque)
                }, e.prototype._updateViewportRectangle = function() {
                    this._addRectangleFloat(this._vertices.attributes, 0, 0, 0, this._terminal.cols * this._dimensions.scaledCellWidth, this._terminal.rows * this._dimensions.scaledCellHeight, this._bgFloat)
                }, e.prototype.updateSelection = function(e, t) {
                    var r = this._terminal;
                    if (e.hasSelection)
                        if (t) {
                            var i = e.startCol,
                                o = e.endCol - i,
                                s = e.viewportCappedEndRow - e.viewportCappedStartRow + 1;
                            this._addRectangleFloat(this._vertices.selection, 0, i * this._dimensions.scaledCellWidth, e.viewportCappedStartRow * this._dimensions.scaledCellHeight, o * this._dimensions.scaledCellWidth, s * this._dimensions.scaledCellHeight, this._selectionFloat), n.fill(this._vertices.selection, 0, c)
                        } else {
                            i = e.viewportStartRow === e.viewportCappedStartRow ? e.startCol : 0;
                            var a = e.viewportCappedStartRow === e.viewportCappedEndRow ? e.endCol : r.cols;
                            this._addRectangleFloat(this._vertices.selection, 0, i * this._dimensions.scaledCellWidth, e.viewportCappedStartRow * this._dimensions.scaledCellHeight, (a - i) * this._dimensions.scaledCellWidth, this._dimensions.scaledCellHeight, this._selectionFloat);
                            var l = Math.max(e.viewportCappedEndRow - e.viewportCappedStartRow - 1, 0);
                            if (this._addRectangleFloat(this._vertices.selection, c, 0, (e.viewportCappedStartRow + 1) * this._dimensions.scaledCellHeight, r.cols * this._dimensions.scaledCellWidth, l * this._dimensions.scaledCellHeight, this._selectionFloat), e.viewportCappedStartRow !== e.viewportCappedEndRow) {
                                var h = e.viewportEndRow === e.viewportCappedEndRow ? e.endCol : r.cols;
                                this._addRectangleFloat(this._vertices.selection, 2 * c, 0, e.viewportCappedEndRow * this._dimensions.scaledCellHeight, h * this._dimensions.scaledCellWidth, this._dimensions.scaledCellHeight, this._selectionFloat)
                            } else n.fill(this._vertices.selection, 0, 2 * c)
                        }
                    else n.fill(this._vertices.selection, 0, 0)
                }, e.prototype.updateBackgrounds = function(e) {
                    for (var t = this._terminal, r = this._vertices, i = 1, n = 0; n < t.rows; n++) {
                        for (var s = -1, a = 0, l = 0, h = !1, u = 0; u < t.cols; u++) {
                            var f = (n * t.cols + u) * o.RENDER_MODEL_INDICIES_PER_CELL,
                                _ = e.cells[f + o.RENDER_MODEL_BG_OFFSET],
                                d = e.cells[f + o.RENDER_MODEL_FG_OFFSET],
                                p = !!(67108864 & d);
                            if (_ !== a || d !== l && (h || p)) {
                                if (0 !== a || h && 0 !== l) {
                                    var v = i++ * c;
                                    this._updateRectangle(r, v, l, a, s, u, n)
                                }
                                s = u, a = _, l = d, h = p
                            }
                        }(0 !== a || h && 0 !== l) && (v = i++ * c, this._updateRectangle(r, v, l, a, s, t.cols, n))
                    }
                    r.count = i
                }, e.prototype._updateRectangle = function(e, t, r, n, o, s, a) {
                    var l;
                    if (67108864 & r) switch (50331648 & r) {
                        case 16777216:
                        case 33554432:
                            l = this._colors.ansi[255 & r].rgba;
                            break;
                        case 50331648:
                            l = (16777215 & r) << 8;
                            break;
                        case 0:
                        default:
                            l = this._colors.foreground.rgba
                    } else switch (50331648 & n) {
                        case 16777216:
                        case 33554432:
                            l = this._colors.ansi[255 & n].rgba;
                            break;
                        case 50331648:
                            l = (16777215 & n) << 8;
                            break;
                        case 0:
                        default:
                            l = this._colors.background.rgba
                    }
                    e.attributes.length < t + 4 && (e.attributes = i.expandFloat32Array(e.attributes, this._terminal.rows * this._terminal.cols * c));
                    var h = o * this._dimensions.scaledCellWidth,
                        u = a * this._dimensions.scaledCellHeight,
                        f = (l >> 24 & 255) / 255,
                        _ = (l >> 16 & 255) / 255,
                        d = (l >> 8 & 255) / 255;
                    this._addRectangle(e.attributes, t, h, u, (s - o) * this._dimensions.scaledCellWidth, this._dimensions.scaledCellHeight, f, _, d, 1)
                }, e.prototype._addRectangle = function(e, t, r, i, n, o, s, a, c, l) {
                    e[t] = r, e[t + 1] = i, e[t + 2] = n, e[t + 3] = o, e[t + 4] = s, e[t + 5] = a, e[t + 6] = c, e[t + 7] = l
                }, e.prototype._addRectangleFloat = function(e, t, r, i, n, o, s) {
                    e[t] = r, e[t + 1] = i, e[t + 2] = n, e[t + 3] = o, e[t + 4] = s[0], e[t + 5] = s[1], e[t + 6] = s[2], e[t + 7] = s[3]
                }, e.prototype._colorToFloat32Array = function(e) {
                    return new Float32Array([(e.rgba >> 24 & 255) / 255, (e.rgba >> 16 & 255) / 255, (e.rgba >> 8 & 255) / 255, (255 & e.rgba) / 255])
                }, e
            }();
        t.RectangleRenderer = u
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                this._listeners = [], this._disposed = !1
            }
            return Object.defineProperty(e.prototype, "event", {
                get: function() {
                    var e = this;
                    return this._event || (this._event = function(t) {
                        return e._listeners.push(t), {
                            dispose: function() {
                                if (!e._disposed)
                                    for (var r = 0; r < e._listeners.length; r++)
                                        if (e._listeners[r] === t) return void e._listeners.splice(r, 1)
                            }
                        }
                    }), this._event
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.fire = function(e, t) {
                for (var r = [], i = 0; i < this._listeners.length; i++) r.push(this._listeners[i]);
                for (i = 0; i < r.length; i++) r[i].call(void 0, e, t)
            }, e.prototype.dispose = function() {
                this._listeners && (this._listeners.length = 0), this._disposed = !0
            }, e
        }();
        t.EventEmitter = i
    }])
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
    (function(r) {
        var i, n;
        void 0 === (n = "function" == typeof(i = function() {
            "use strict";

            function t(e, t, r) {
                var i = new XMLHttpRequest;
                i.open("GET", e), i.responseType = "blob", i.onload = function() {
                    s(i.response, t, r)
                }, i.onerror = function() {
                    console.error("could not download file")
                }, i.send()
            }

            function i(e) {
                var t = new XMLHttpRequest;
                t.open("HEAD", e, !1);
                try {
                    t.send()
                } catch (e) {}
                return 200 <= t.status && 299 >= t.status
            }

            function n(e) {
                try {
                    e.dispatchEvent(new MouseEvent("click"))
                } catch (r) {
                    var t = document.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
                }
            }
            var o = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof r && r.global === r ? r : void 0,
                s = o.saveAs || ("object" != typeof window || window !== o ? function() {} : "download" in HTMLAnchorElement.prototype ? function(e, r, s) {
                    var a = o.URL || o.webkitURL,
                        c = document.createElement("a");
                    r = r || e.name || "download", c.download = r, c.rel = "noopener", "string" == typeof e ? (c.href = e, c.origin === location.origin ? n(c) : i(c.href) ? t(e, r, s) : n(c, c.target = "_blank")) : (c.href = a.createObjectURL(e), setTimeout(function() {
                        a.revokeObjectURL(c.href)
                    }, 4e4), setTimeout(function() {
                        n(c)
                    }, 0))
                } : "msSaveOrOpenBlob" in navigator ? function(e, r, o) {
                    if (r = r || e.name || "download", "string" != typeof e) navigator.msSaveOrOpenBlob(function(e, t) {
                        return void 0 === t ? t = {
                            autoBom: !1
                        } : "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"), t = {
                            autoBom: !t
                        }), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e], {
                            type: e.type
                        }) : e
                    }(e, o), r);
                    else if (i(e)) t(e, r, o);
                    else {
                        var s = document.createElement("a");
                        s.href = e, s.target = "_blank", setTimeout(function() {
                            n(s)
                        })
                    }
                } : function(e, r, i, n) {
                    if ((n = n || open("", "_blank")) && (n.document.title = n.document.body.innerText = "downloading..."), "string" == typeof e) return t(e, r, i);
                    var s = "application/octet-stream" === e.type,
                        a = /constructor/i.test(o.HTMLElement) || o.safari,
                        c = /CriOS\/[\d]+/.test(navigator.userAgent);
                    if ((c || s && a) && "object" == typeof FileReader) {
                        var l = new FileReader;
                        l.onloadend = function() {
                            var e = l.result;
                            e = c ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), n ? n.location.href = e : location = e, n = null
                        }, l.readAsDataURL(e)
                    } else {
                        var h = o.URL || o.webkitURL,
                            u = h.createObjectURL(e);
                        n ? n.location = u : location.href = u, n = null, setTimeout(function() {
                            h.revokeObjectURL(u)
                        }, 4e4)
                    }
                });
            o.saveAs = s.saveAs = s, e.exports = s
        }) ? i.apply(t, []) : i) || (e.exports = n)
    }).call(this, r(26))
}, function(e, t, r) {
    var i = r(1),
        n = e.exports = r(23);

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

    function c(e) {
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
    }, e.exports.checkIsString = c("string"), e.exports.checkIsArray = c("array"), e.exports.checkIsNumber = c("number"), e.exports.checkIsBoolean = c("boolean"), e.exports.checkIsFunction = c("function"), e.exports.checkIsObject = c("object")
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
    var c, l = [],
        h = !1,
        u = -1;

    function f() {
        h && c && (h = !1, c.length ? l = c.concat(l) : u = -1, l.length && _())
    }

    function _() {
        if (!h) {
            var e = a(f);
            h = !0;
            for (var t = l.length; t;) {
                for (c = l, l = []; ++u < t;) c && c[u].run();
                u = -1, t = l.length
            }
            c = null, h = !1,
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
        l.push(new d(e, t)), 1 !== l.length || h || a(_)
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
    var i = r(1);

    function n(e) {
        Error.call(this, e), this.message = e
    }

    function o(e) {
        Error.call(this, e), this.message = e
    }
    i.inherits(n, Error), n.prototype.name = "IllegalArgumentError", i.inherits(o, Error), o.prototype.name = "IllegalStateError", e.exports.IllegalStateError = o, e.exports.IllegalArgumentError = n
}, function(e, t, r) {
    var i = r(1),
        n = r(5),
        o = r(10);

    function s(e) {
        o.call(this, e), this.backoffDelay_ = 0, this.nextBackoffDelay_ = this.getInitialDelay(), this.factor_ = s.DEFAULT_FACTOR, e && void 0 !== e.factor && (n.checkArgument(e.factor > 1, "Exponential factor should be greater than 1 but got %s.", e.factor), this.factor_ = e.factor)
    }
    i.inherits(s, o), s.DEFAULT_FACTOR = 2, s.prototype.next_ = function() {
        return this.backoffDelay_ = Math.min(this.nextBackoffDelay_, this.getMaxDelay()), this.nextBackoffDelay_ = this.backoffDelay_ * this.factor_, this.backoffDelay_
    }, s.prototype.reset_ = function() {
        this.backoffDelay_ = 0, this.nextBackoffDelay_ = this.getInitialDelay()
    }, e.exports = s
}, function(e, t, r) {
    var i = r(4),
        n = r(5),
        o = r(1),
        s = r(9),
        a = r(11);

    function c(e, t, r) {
        i.EventEmitter.call(this), n.checkIsFunction(e, "Expected fn to be a function."), n.checkIsArray(t, "Expected args to be an array."), n.checkIsFunction(r, "Expected callback to be a function."), this.function_ = e, this.arguments_ = t, this.callback_ = r, this.lastResult_ = [], this.numRetries_ = 0, this.backoff_ = null, this.strategy_ = null, this.failAfter_ = -1, this.retryPredicate_ = c.DEFAULT_RETRY_PREDICATE_, this.state_ = c.State_.PENDING
    }
    o.inherits(c, i.EventEmitter), c.State_ = {
        PENDING: 0,
        RUNNING: 1,
        COMPLETED: 2,
        ABORTED: 3
    }, c.DEFAULT_RETRY_PREDICATE_ = function(e) {
        return !0
    }, c.prototype.isPending = function() {
        return this.state_ == c.State_.PENDING
    }, c.prototype.isRunning = function() {
        return this.state_ == c.State_.RUNNING
    }, c.prototype.isCompleted = function() {
        return this.state_ == c.State_.COMPLETED
    }, c.prototype.isAborted = function() {
        return this.state_ == c.State_.ABORTED
    }, c.prototype.setStrategy = function(e) {
        return n.checkState(this.isPending(), "FunctionCall in progress."), this.strategy_ = e, this
    }, c.prototype.retryIf = function(e) {
        return n.checkState(this.isPending(), "FunctionCall in progress."), this.retryPredicate_ = e, this
    }, c.prototype.getLastResult = function() {
        return this.lastResult_.concat()
    }, c.prototype.getNumRetries = function() {
        return this.numRetries_
    }, c.prototype.failAfter = function(e) {
        return n.checkState(this.isPending(), "FunctionCall in progress."), this.failAfter_ = e, this
    }, c.prototype.abort = function() {
        this.isCompleted() || this.isAborted() || (this.isRunning() && this.backoff_.reset(), this.state_ = c.State_.ABORTED, this.lastResult_ = [new Error("Backoff aborted.")], this.emit("abort"), this.doCallback_())
    }, c.prototype.start = function(e) {
        n.checkState(!this.isAborted(), "FunctionCall is aborted."), n.checkState(this.isPending(), "FunctionCall already started.");
        var t = this.strategy_ || new a;
        this.backoff_ = e ? e(t) : new s(t), this.backoff_.on("ready", this.doCall_.bind(this, !0)), this.backoff_.on("fail", this.doCallback_.bind(this)), this.backoff_.on("backoff", this.handleBackoff_.bind(this)), this.failAfter_ > 0 && this.backoff_.failAfter(this.failAfter_), this.state_ = c.State_.RUNNING, this.doCall_(!1)
    }, c.prototype.doCall_ = function(e) {
        e && this.numRetries_++;
        var t = ["call"].concat(this.arguments_);
        i.EventEmitter.prototype.emit.apply(this, t);
        var r = this.handleFunctionCallback_.bind(this);
        this.function_.apply(null, this.arguments_.concat(r))
    }, c.prototype.doCallback_ = function() {
        this.callback_.apply(null, this.lastResult_)
    }, c.prototype.handleFunctionCallback_ = function() {
        if (!this.isAborted()) {
            var e = Array.prototype.slice.call(arguments);
            this.lastResult_ = e, i.EventEmitter.prototype.emit.apply(this, ["callback"].concat(e));
            var t = e[0];
            t && this.retryPredicate_(t) ? this.backoff_.backoff(t) : (this.state_ = c.State_.COMPLETED, this.doCallback_())
        }
    }, c.prototype.handleBackoff_ = function(e, t, r) {
        this.emit("backoff", e, t, r)
    }, e.exports = c
}, function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function(e, t, r) {
    Object.assign(e.exports, r(28))
}, function(e, t, r) {
    "use strict";
    var i = e.exports;
    Object.assign(i, r(2), r(29));
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
    Object.assign(i, r(6), r(30), r(7), r(2), r(31), r(33), r(34), r(3));
    const n = ["CANFDX", "CANOVIO", "CANFC32"],
        o = "spool_uint8array",
        s = [79, 79],
        a = i.ZMLIB.ABORT_SEQUENCE;
    class c {
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
    i.Session = class extends c {
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
    var l = {
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
    class h {
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
    Object.assign(h.prototype, l);
    class u extends c {
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
    Object.assign(u.prototype, l);
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
                            r._sending_file = !0, t(new h(e, i.get_offset(), r._send_interim_file_piece.bind(r), r._end_file.bind(r)))
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
    Object.assign(i, r(6), r(7), r(2), r(12), r(3));
    const n = "*".charCodeAt(0),
        o = "A".charCodeAt(0),
        s = "B".charCodeAt(0),
        a = "C".charCodeAt(0),
        c = [13, 10],
        l = c.slice(0).concat([i.ZMLIB.XON]),
        h = [n, n, i.ZMLIB.ZDLE, s],
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
                    if (e.length < h.length) {
                        if (e.join() === h.slice(0, e.length).join()) break e
                    } else e[2] === h[2] && e[3] === h[3] && (r = W);
                else if (e[1] === i.ZMLIB.ZDLE) {
                    if (e.length < u.length) break e;
                    e[2] === u[2] ? r = F : e[2] === f[2] && (r = N)
                }
                r || o.push(e.shift())
            }
            return t && o.push.apply(o, e.splice(0)), o
        }
        static parse(e) {
            var t;
            if (e[1] === n) return (t = W(e)) && [t, 16];
            if (e[2] === o) return (t = F(e)) && [t, 16];
            if (e[2] === a) return (t = N(e)) && [t, 32];
            if (!(e.length < 3)) throw "Unrecognized/unsupported octets: " + e.join()
        }
        static build(e) {
            var t = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments),
                r = P[e];
            if (!r) throw "No frame class “" + e + "” is defined!";
            return t.shift(), new(r.bind.apply(r, [null].concat(t)))
        }
        to_hex() {
            var e = this._crc_bytes();
            return h.concat(i.ENCODELIB.octets_to_hex(e.concat(i.CRC.crc16(e))), this._hex_header_ending)
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
    }, i.Header.prototype._hex_header_ending = l;
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
    const v = {
        ESCCTL: 64,
        ESC8: 128
    };
    class g extends i.Header {
        constructor(e, t) {
            super();
            var r = 0;
            if (e.forEach(function(e) {
                    r |= function(e) {
                        if (!v[e]) throw "Invalid ZSINIT flag: " + e;
                        return v[e]
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
            return !!(this._bytes4[3] & v.ESCCTL)
        }
        escape_8th_bit() {
            return !!(this._bytes4[3] & v.ESC8)
        }
    }
    class y extends i.Header {
        constructor(e) {
            super(), e && (this._bytes4 = e.slice())
        }
    }
    y.prototype._hex_header_ending = c;
    const b = {
            extended: {
                sparse: 64
            },
            transport: [void 0, "compress", "encrypt", "rle"],
            management: [void 0, "newer_or_longer", "crc", "append", "clobber", "newer", "mtime_or_length", "protect", "rename"],
            conversion: [void 0, "binary", "text", "resume"]
        },
        m = ["extended", "transport", "management", "conversion"],
        C = 128,
        S = 31,
        w = 64;
    class E extends i.Header {
        get_options() {
            var e = {
                    sparse: !!(this._bytes4[0] & w)
                },
                t = this._bytes4.slice(0);
            return m.forEach(function(r, i) {
                if (b[r] instanceof Array) "management" === r && (e.skip_if_absent = !!(t[i] & C), t[i] &= S), e[r] = b[r][t[i]];
                else
                    for (var n in b[r]) e[n] = !!(t[i] & b[r][n]), e[n] && (t[i] ^= b[r][n]);
                !e[r] && t[i] && (e[r] = "unknown:" + t[i])
            }), e
        }
    }
    class A extends i.Header {}
    class R extends i.Header {}
    class x extends i.Header {}
    class L extends i.Header {}
    x.prototype._hex_header_ending = c;
    class k extends i.Header {
        constructor(e) {
            super(), this._bytes4 = i.ENCODELIB.pack_u32_le(e)
        }
        get_offset() {
            return i.ENCODELIB.unpack_u32_le(this._bytes4)
        }
    }
    class T extends k {}
    class D extends k {}
    class O extends k {}
    const M = [
        [_, "ZRQINIT"],
        [p, "ZRINIT"],
        [g, "ZSINIT"],
        [y, "ZACK"],
        [E, "ZFILE"],
        [A, "ZSKIP"], void 0, [R, "ZABORT"],
        [x, "ZFIN"],
        [T, "ZRPOS"],
        [D, "ZDATA"],
        [O, "ZEOF"],
        [L, "ZFERR"], void 0, void 0, void 0, void 0, void 0, void 0, void 0
    ];
    for (var P = {}, I = 0; I < M.length; I++) M[I] && (P[M[I][1]] = M[I][0], Object.assign(M[I][0].prototype, {
        TYPENUM: I,
        NAME: M[I][1]
    }));
    const B = [_, p, g, y, E, A, "ZNAK", R, x, T, D, O, L, "ZCRC", "ZCHALLENGE", "ZCOMPL", "ZCAN", "ZFREECNT", "ZCOMMAND", "ZSTDERR"];

    function H(e) {
        var t = B[e];
        if ("string" == typeof t) throw "Received unsupported header: " + t;
        return function(e) {
            return e.prototype instanceof k ? new e(0) : new e([])
        }(t)
    }

    function F(e) {
        var t = i.ZDLE.splice(e, u.length, 7);
        return t && j(t)
    }

    function j(e) {
        i.CRC.verify16(e.slice(0, 5), e.slice(5));
        var t = H(e[0]);
        return t._bytes4 = e.slice(1, 5), t
    }

    function N(e) {
        var t = i.ZDLE.splice(e, f.length, 9);
        if (t) {
            i.CRC.verify32(t.slice(0, 5), t.slice(5));
            var r = H(t[0]);
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
            return r.splice(0, 4), j(i.ENCODELIB.parse_hex_octets(r))
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
    Object.assign(n, r(12), r(7), r(2), r(3)), n.Subpacket = class e {
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
                    105: l,
                    106: h,
                    107: c
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
    class c extends o {
        ack_expected() {
            return !0
        }
    }
    c.prototype._frameend_num = 107;
    class l extends s {
        ack_expected() {
            return !1
        }
    }
    l.prototype._frameend_num = 105;
    class h extends s {
        ack_expected() {
            return !0
        }
    }
    h.prototype._frameend_num = 106, i = {
        end_no_ack: a,
        end_ack: c,
        no_end_no_ack: l,
        no_end_ack: h
    }
}, function(e, t, r) {
    "use strict";
    var i = e.exports;
    Object.assign(i, r(3));
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
    var i = {
        searchParams: "URLSearchParams" in self,
        iterable: "Symbol" in self && "iterator" in Symbol,
        blob: "FileReader" in self && "Blob" in self && function() {
            try {
                return new Blob, !0
            } catch (e) {
                return !1
            }
        }(),
        formData: "FormData" in self,
        arrayBuffer: "ArrayBuffer" in self
    };
    if (i.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        o = ArrayBuffer.isView || function(e) {
            return e && n.indexOf(Object.prototype.toString.call(e)) > -1
        };

    function s(e) {
        if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
        return e.toLowerCase()
    }

    function a(e) {
        return "string" != typeof e && (e = String(e)), e
    }

    function c(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return i.iterable && (t[Symbol.iterator] = function() {
            return t
        }), t
    }

    function l(e) {
        this.map = {}, e instanceof l ? e.forEach(function(e, t) {
            this.append(t, e)
        }, this) : Array.isArray(e) ? e.forEach(function(e) {
            this.append(e[0], e[1])
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
            this.append(t, e[t])
        }, this)
    }

    function h(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }

    function u(e) {
        return new Promise(function(t, r) {
            e.onload = function() {
                t(e.result)
            }, e.onerror = function() {
                r(e.error)
            }
        })
    }

    function f(e) {
        var t = new FileReader,
            r = u(t);
        return t.readAsArrayBuffer(e), r
    }

    function _(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer
    }

    function d() {
        return this.bodyUsed = !1, this._initBody = function(e) {
            var t;
            this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : i.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : i.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : i.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : i.arrayBuffer && i.blob && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = _(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : i.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || o(e)) ? this._bodyArrayBuffer = _(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, i.blob && (this.blob = function() {
            var e = h(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(f)
        }), this.text = function() {
            var e, t, r, i = h(this);
            if (i) return i;
            if (this._bodyBlob) return e = this._bodyBlob, r = u(t = new FileReader), t.readAsText(e), r;
            if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                for (var t = new Uint8Array(e), r = new Array(t.length), i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);
                return r.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, i.formData && (this.formData = function() {
            return this.text().then(g)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }
    l.prototype.append = function(e, t) {
        e = s(e), t = a(t);
        var r = this.map[e];
        this.map[e] = r ? r + ", " + t : t
    }, l.prototype.delete = function(e) {
        delete this.map[s(e)]
    }, l.prototype.get = function(e) {
        return e = s(e), this.has(e) ? this.map[e] : null
    }, l.prototype.has = function(e) {
        return this.map.hasOwnProperty(s(e))
    }, l.prototype.set = function(e, t) {
        this.map[s(e)] = a(t)
    }, l.prototype.forEach = function(e, t) {
        for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
    }, l.prototype.keys = function() {
        var e = [];
        return this.forEach(function(t, r) {
            e.push(r)
        }), c(e)
    }, l.prototype.values = function() {
        var e = [];
        return this.forEach(function(t) {
            e.push(t)
        }), c(e)
    }, l.prototype.entries = function() {
        var e = [];
        return this.forEach(function(t, r) {
            e.push([r, t])
        }), c(e)
    }, i.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
    var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function v(e, t) {
        var r, i, n = (t = t || {}).body;
        if (e instanceof v) {
            if (e.bodyUsed) throw new TypeError("Already read");
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new l(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
        } else this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new l(t.headers)), this.method = (i = (r = t.method || this.method || "GET").toUpperCase(), p.indexOf(i) > -1 ? i : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n)
    }

    function g(e) {
        var t = new FormData;
        return e.trim().split("&").forEach(function(e) {
            if (e) {
                var r = e.split("="),
                    i = r.shift().replace(/\+/g, " "),
                    n = r.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(i), decodeURIComponent(n))
            }
        }), t
    }

    function y(e, t) {
        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new l(t.headers), this.url = t.url || "", this._initBody(e)
    }
    v.prototype.clone = function() {
        return new v(this, {
            body: this._bodyInit
        })
    }, d.call(v.prototype), d.call(y.prototype), y.prototype.clone = function() {
        return new y(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new l(this.headers),
            url: this.url
        })
    }, y.error = function() {
        var e = new y(null, {
            status: 0,
            statusText: ""
        });
        return e.type = "error", e
    };
    var b = [301, 302, 303, 307, 308];
    y.redirect = function(e, t) {
        if (-1 === b.indexOf(t)) throw new RangeError("Invalid status code");
        return new y(null, {
            status: t,
            headers: {
                location: e
            }
        })
    };
    var m = self.DOMException;
    try {
        new m
    } catch (e) {
        (m = function(e, t) {
            this.message = e, this.name = t;
            var r = Error(e);
            this.stack = r.stack
        }).prototype = Object.create(Error.prototype), m.prototype.constructor = m
    }

    function C(e, t) {
        return new Promise(function(r, n) {
            var o = new v(e, t);
            if (o.signal && o.signal.aborted) return n(new m("Aborted", "AbortError"));
            var s = new XMLHttpRequest;

            function a() {
                s.abort()
            }
            s.onload = function() {
                var e, t, i = {
                    status: s.status,
                    statusText: s.statusText,
                    headers: (e = s.getAllResponseHeaders() || "", t = new l, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                        var r = e.split(":"),
                            i = r.shift().trim();
                        if (i) {
                            var n = r.join(":").trim();
                            t.append(i, n)
                        }
                    }), t)
                };
                i.url = "responseURL" in s ? s.responseURL : i.headers.get("X-Request-URL");
                var n = "response" in s ? s.response : s.responseText;
                r(new y(n, i))
            }, s.onerror = function() {
                n(new TypeError("Network request failed"))
            }, s.ontimeout = function() {
                n(new TypeError("Network request failed"))
            }, s.onabort = function() {
                n(new m("Aborted", "AbortError"))
            }, s.open(o.method, o.url, !0), "include" === o.credentials ? s.withCredentials = !0 : "omit" === o.credentials && (s.withCredentials = !1), "responseType" in s && i.blob && (s.responseType = "blob"), o.headers.forEach(function(e, t) {
                s.setRequestHeader(t, e)
            }), o.signal && (o.signal.addEventListener("abort", a), s.onreadystatechange = function() {
                4 === s.readyState && o.signal.removeEventListener("abort", a)
            }), s.send(void 0 === o._bodyInit ? null : o._bodyInit)
        })
    }
    C.polyfill = !0, self.fetch || (self.fetch = C, self.Headers = l, self.Request = v, self.Response = y);
    var S, w, E, A, R, x = {},
        L = [],
        k = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

    function T(e, t) {
        for (var r in t) e[r] = t[r];
        return e
    }

    function D(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function O(e, t, r) {
        var i, n, o, s, a = arguments;
        if (t = T({}, t), arguments.length > 3)
            for (r = [r], i = 3; i < arguments.length; i++) r.push(a[i]);
        if (null != r && (t.children = r), null != e && null != e.defaultProps)
            for (n in e.defaultProps) void 0 === t[n] && (t[n] = e.defaultProps[n]);
        return s = t.key, null != (o = t.ref) && delete t.ref, null != s && delete t.key, M(e, t, s, o)
    }

    function M(e, t, r, i) {
        var n = {
            type: e,
            props: t,
            key: r,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: null,
            __c: null,
            constructor: void 0
        };
        return S.vnode && S.vnode(n), n
    }

    function P(e) {
        return e.children
    }

    function I(e, t) {
        this.props = e, this.context = t
    }

    function B(e, t) {
        if (null == t) return e.__ ? B(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var r; t < e.__k.length; t++)
            if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
        return "function" == typeof e.type ? B(e) : null
    }

    function H(e) {
        var t, r;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (r = e.__k[t]) && null != r.__e) {
                    e.__e = e.__c.base = r.__e;
                    break
                } return H(e)
        }
    }

    function F(e) {
        (!e.__d && (e.__d = !0) && 1 === w.push(e) || A !== S.debounceRendering) && ((A = S.debounceRendering) || E)(j)
    }

    function j() {
        var e, t, r, i, n, o, s;
        for (w.sort(function(e, t) {
                return t.__v.__b - e.__v.__b
            }); e = w.pop();) e.__d && (r = void 0, i = void 0, o = (n = (t = e).__v).__e, (s = t.__P) && (r = [], i = Z(s, n, T({}, n), t.__n, void 0 !== s.ownerSVGElement, null, r, null == o ? B(n) : o), K(r, n), i != o && H(n)))
    }

    function N(e, t, r, i, n, o, s, a, c) {
        var l, h, u, f, _, d, p, v = r && r.__k || L,
            g = v.length;
        if (a == x && (a = null != o ? o[0] : g ? B(r, 0) : null), l = 0, t.__k = W(t.__k, function(r) {
                if (null != r) {
                    if (r.__ = t, r.__b = t.__b + 1, null === (u = v[l]) || u && r.key == u.key && r.type === u.type) v[l] = void 0;
                    else
                        for (h = 0; h < g; h++) {
                            if ((u = v[h]) && r.key == u.key && r.type === u.type) {
                                v[h] = void 0;
                                break
                            }
                            u = null
                        }
                    if (f = Z(e, r, u = u || x, i, n, o, s, a, c), (h = r.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, r), p.push(h, r.__c || f, r)), null != f) {
                        if (null == d && (d = f), null != r.__d) f = r.__d, r.__d = null;
                        else if (o == u || f != a || null == f.parentNode) {
                            e: if (null == a || a.parentNode !== e) e.appendChild(f);
                                else {
                                    for (_ = a, h = 0;
                                        (_ = _.nextSibling) && h < g; h += 2)
                                        if (_ == f) break e;
                                    e.insertBefore(f, a)
                                }
                            "option" == t.type && (e.value = "")
                        }
                        a = f.nextSibling, "function" == typeof t.type && (t.__d = f)
                    }
                }
                return l++, r
            }), t.__e = d, null != o && "function" != typeof t.type)
            for (l = o.length; l--;) null != o[l] && D(o[l]);
        for (l = g; l--;) null != v[l] && V(v[l], v[l]);
        if (p)
            for (l = 0; l < p.length; l++) G(p[l], p[++l], p[++l])
    }

    function W(e, t, r) {
        if (null == r && (r = []), null == e || "boolean" == typeof e) t && r.push(t(null));
        else if (Array.isArray(e))
            for (var i = 0; i < e.length; i++) W(e[i], t, r);
        else r.push(t ? t("string" == typeof e || "number" == typeof e ? M(null, e, null, null) : null != e.__e || null != e.__c ? M(e.type, e.props, e.key, null) : e) : e);
        return r
    }

    function U(e, t, r) {
        "-" === t[0] ? e.setProperty(t, r) : e[t] = "number" == typeof r && !1 === k.test(t) ? r + "px" : null == r ? "" : r
    }

    function q(e, t, r, i, n) {
        var o, s, a, c, l;
        if (n ? "className" === t && (t = "class") : "class" === t && (t = "className"), "key" === t || "children" === t);
        else if ("style" === t)
            if (o = e.style, "string" == typeof r) o.cssText = r;
            else {
                if ("string" == typeof i && (o.cssText = "", i = null), i)
                    for (s in i) r && s in r || U(o, s, "");
                if (r)
                    for (a in r) i && r[a] === i[a] || U(o, a, r[a])
            }
        else "o" === t[0] && "n" === t[1] ? (c = t !== (t = t.replace(/Capture$/, "")), l = t.toLowerCase(), t = (l in e ? l : t).slice(2), r ? (i || e.addEventListener(t, z, c), (e.l || (e.l = {}))[t] = r) : e.removeEventListener(t, z, c)) : "list" !== t && "tagName" !== t && "form" !== t && !n && t in e ? e[t] = null == r ? "" : r : "function" != typeof r && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == r || !1 === r ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : null == r || !1 === r ? e.removeAttribute(t) : e.setAttribute(t, r))
    }

    function z(e) {
        this.l[e.type](S.event ? S.event(e) : e)
    }

    function Z(e, t, r, i, n, o, s, a, c) {
        var l, h, u, f, _, d, p, v, g, y, b = t.type;
        if (void 0 !== t.constructor) return null;
        (l = S.__b) && l(t);
        try {
            e: if ("function" == typeof b) {
                if (v = t.props, g = (l = b.contextType) && i[l.__c], y = l ? g ? g.props.value : l.__ : i, r.__c ? p = (h = t.__c = r.__c).__ = h.__E : ("prototype" in b && b.prototype.render ? t.__c = h = new b(v, y) : (t.__c = h = new I(v, y), h.constructor = b, h.render = Y), g && g.sub(h), h.props = v, h.state || (h.state = {}), h.context = y, h.__n = i, u = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != b.getDerivedStateFromProps && (h.__s == h.state && (h.__s = T({}, h.__s)), T(h.__s, b.getDerivedStateFromProps(v, h.__s))), f = h.props, _ = h.state, u) null == b.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
                else {
                    if (null == b.getDerivedStateFromProps && null == h.__e && null != h.componentWillReceiveProps && h.componentWillReceiveProps(v, y), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(v, h.__s, y)) {
                        for (h.props = v, h.state = h.__s, h.__d = !1, h.__v = t, t.__e = r.__e, t.__k = r.__k, h.__h.length && s.push(h), l = 0; l < t.__k.length; l++) t.__k[l] && (t.__k[l].__ = t);
                        break e
                    }
                    null != h.componentWillUpdate && h.componentWillUpdate(v, h.__s, y), null != h.componentDidUpdate && h.__h.push(function() {
                        h.componentDidUpdate(f, _, d)
                    })
                }
                h.context = y, h.props = v, h.state = h.__s, (l = S.__r) && l(t), h.__d = !1, h.__v = t, h.__P = e, l = h.render(h.props, h.state, h.context), t.__k = W(null != l && l.type == P && null == l.key ? l.props.children : l), null != h.getChildContext && (i = T(T({}, i), h.getChildContext())), u || null == h.getSnapshotBeforeUpdate || (d = h.getSnapshotBeforeUpdate(f, _)), N(e, t, r, i, n, o, s, a, c), h.base = t.__e, h.__h.length && s.push(h), p && (h.__E = h.__ = null), h.__e = null
            } else t.__e = function(e, t, r, i, n, o, s, a) {
                var c, l, h, u, f, _ = r.props,
                    d = t.props;
                if (n = "svg" === t.type || n, null == e && null != o)
                    for (c = 0; c < o.length; c++)
                        if (null != (l = o[c]) && (null === t.type ? 3 === l.nodeType : l.localName === t.type)) {
                            e = l, o[c] = null;
                            break
                        } if (null == e) {
                    if (null === t.type) return document.createTextNode(d);
                    e = n ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type), o = null
                }
                if (null === t.type) null != o && (o[o.indexOf(e)] = null), _ !== d && (e.data = d);
                else if (t !== r) {
                    if (null != o && (o = L.slice.call(e.childNodes)), h = (_ = r.props || x).dangerouslySetInnerHTML, u = d.dangerouslySetInnerHTML, !a) {
                        if (_ === x)
                            for (_ = {}, f = 0; f < e.attributes.length; f++) _[e.attributes[f].name] = e.attributes[f].value;
                        (u || h) && (u && h && u.__html == h.__html || (e.innerHTML = u && u.__html || ""))
                    }(function(e, t, r, i, n) {
                        var o;
                        for (o in r) o in t || q(e, o, null, r[o], i);
                        for (o in t) n && "function" != typeof t[o] || "value" === o || "checked" === o || r[o] === t[o] || q(e, o, t[o], r[o], i)
                    })(e, d, _, n, a), t.__k = t.props.children, u || N(e, t, r, i, "foreignObject" !== t.type && n, o, s, x, a), a || ("value" in d && void 0 !== d.value && d.value !== e.value && (e.value = null == d.value ? "" : d.value), "checked" in d && void 0 !== d.checked && d.checked !== e.checked && (e.checked = d.checked))
                }
                return e
            }(r.__e, t, r, i, n, o, s, c);
            (l = S.diffed) && l(t)
        }
        catch (e) {
            S.__e(e, t, r)
        }
        return t.__e
    }

    function K(e, t) {
        S.__c && S.__c(t, e), e.some(function(t) {
            try {
                e = t.__h, t.__h = [], e.some(function(e) {
                    e.call(t)
                })
            } catch (e) {
                S.__e(e, t.__v)
            }
        })
    }

    function G(e, t, r) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            S.__e(e, r)
        }
    }

    function V(e, t, r) {
        var i, n, o;
        if (S.unmount && S.unmount(e), (i = e.ref) && G(i, null, t), r || "function" == typeof e.type || (r = null != (n = e.__e)), e.__e = e.__d = null, null != (i = e.__c)) {
            if (i.componentWillUnmount) try {
                i.componentWillUnmount()
            } catch (e) {
                S.__e(e, t)
            }
            i.base = i.__P = null
        }
        if (i = e.__k)
            for (o = 0; o < i.length; o++) i[o] && V(i[o], t, r);
        null != n && D(n)
    }

    function Y(e, t, r) {
        return this.constructor(e, r)
    }
    S = {
        __e: function(e, t) {
            for (var r; t = t.__;)
                if ((r = t.__c) && !r.__) try {
                    if (r.constructor && null != r.constructor.getDerivedStateFromError) r.setState(r.constructor.getDerivedStateFromError(e));
                    else {
                        if (null == r.componentDidCatch) continue;
                        r.componentDidCatch(e)
                    }
                    return F(r.__E = r)
                } catch (t) {
                    e = t
                }
            throw e
        }
    }, I.prototype.setState = function(e, t) {
        var r;
        r = this.__s !== this.state ? this.__s : this.__s = T({}, this.state), "function" == typeof e && (e = e(r, this.props)), e && T(r, e), null != e && this.__v && (this.__e = !1, t && this.__h.push(t), F(this))
    }, I.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), F(this))
    }, I.prototype.render = P, w = [], E = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, R = x;
    var X = r(0),
        J = r(13),
        $ = r(14),
        Q = r(15),
        ee = r(16),
        te = r(17);
    class re {
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
    var ie = r(18),
        ne = r(8);
    r(35);
    class oe extends I {
        constructor(e) {
            super(e)
        }
        render({
            show: e,
            children: t
        }) {
            return e && O("div", {
                className: "modal"
            }, O("div", {
                className: "modal-background"
            }), O("div", {
                className: "modal-content"
            }, O("div", {
                className: "box"
            }, t)))
        }
    }
    var se = function(e, t, r, i) {
        var n, o = arguments.length,
            s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
        else
            for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s
    };
    class ae extends I {
        constructor(e) {
            super(e), this.sentry = new ne.Sentry({
                to_terminal: e => this.zmodemWrite(e),
                sender: e => this.zmodemSend(e),
                on_retract: () => this.zmodemReset(),
                on_detect: e => this.zmodemDetect(e)
            })
        }
        render(e, {
            modal: t
        }) {
            return O(oe, {
                show: t
            }, O("label", {
                class: "file-label"
            }, O("input", {
                onChange: this.sendFile,
                class: "file-input",
                type: "file",
                multiple: !0
            }), O("span", {
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
            this.terminal.setOption("disableStdin", !1), this.keyDispose && (this.keyDispose.dispose(), this.keyDispose = null), this.terminal.focus()
        }
        zmodemWrite(e) {
            this.terminal.write(new Uint8Array(e))
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
            ne.Browser.send_files(t, n, {
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
                }), e.accept().then(() => {
                    const t = new Blob(i, {
                        type: "application/octet-stream"
                    });
                    Object(ie.saveAs)(t, e.get_details().name)
                }).catch(e => r(e, "receive"))
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
    se([X.bind], ae.prototype, "handleError", null), se([X.bind], ae.prototype, "zmodemReset", null), se([X.bind], ae.prototype, "zmodemWrite", null), se([X.bind], ae.prototype, "zmodemSend", null), se([X.bind], ae.prototype, "zmodemDetect", null), se([X.bind], ae.prototype, "sendFile", null), se([X.bind], ae.prototype, "receiveFile", null), se([X.bind], ae.prototype, "writeProgress", null), r(36);
    var ce = function(e, t, r, i) {
        var n, o = arguments.length,
            s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
        else
            for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s
    };
    class le extends I {
        constructor(e) {
            super(e), this.backoffLock = !1, this.textEncoder = new TextEncoder, this.textDecoder = new TextDecoder, this.fitAddon = new Q.FitAddon, this.overlayAddon = new re, this.backoff = J.exponential({
                initialDelay: 100,
                maxDelay: 1e4
            }), this.backoff.on("ready", () => {
                this.backoffLock = !1, this.refreshToken().then(this.openTerminal)
            }), this.backoff.on("backoff", (e, t) => {
                console.log(`[ttyd] will attempt to reconnect websocket in ${t}ms`), this.backoffLock = !0
            })
        }
        async componentDidMount() {
            await this.refreshToken(), this.openTerminal()
        }
        componentWillUnmount() {
            this.socket.close(), this.terminal.dispose(), window.removeEventListener("resize", this.onWindowResize), window.removeEventListener("beforeunload", this.onWindowUnload)
        }
        render({
            id: e
        }) {
            return O("div", {
                id: e,
                ref: e => this.container = e
            }, O(ae, {
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
        async refreshToken() {
            try {
                const e = await fetch(this.props.tokenUrl);
                if (e.ok) {
                    const t = await e.json();
                    this.token = t.token
                }
            } catch (e) {
                console.error(`[ttyd] fetch ${this.props.tokenUrl}: `, e)
            }
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
            console.log(this.props.wsUrl);
            this.terminal && this.terminal.dispose(), this.socket = new WebSocket(this.props.wsUrl), this.terminal = new $.Terminal(this.props.options);
            //this.terminal && this.terminal.dispose(), this.socket = new WebSocket(this.props.wsUrl, ["tty"]), this.terminal = new $.Terminal(this.props.options);
            const {
                socket: e,
                terminal: t,
                container: r,
                fitAddon: i,
                overlayAddon: n
            } = this;
            window.term = t, window.term.fit = (() => {
                this.fitAddon.fit()
            }), e.binaryType = "arraybuffer", e.onopen = this.onSocketOpen, e.onmessage = this.onSocketData, e.onclose = this.onSocketClose, e.onerror = this.onSocketError, t.loadAddon(i), t.loadAddon(n), t.loadAddon(new te.WebLinksAddon), t.loadAddon(this.zmodemAddon), t.onTitleChange(e => {
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
            } = this;
            e.send(t.encode(JSON.stringify({
                AuthToken: this.token
            }))), r.fit()
        }
        onSocketClose(e) {
            console.log(`[ttyd] websocket connection closed with code: ${e.code}`);
            const {
                overlayAddon: t
            } = this;
            t.showOverlay("Connection Closed", null), window.removeEventListener("beforeunload", this.onWindowUnload), 1e3 !== e.code && this.reconnect()
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
                        "rendererType" === r && "webgl" === e[r] ? (t.loadAddon(new ee.WebglAddon), console.log("[ttyd] WebGL renderer enabled")) : (console.log(`[ttyd] option: ${r}=${e[r]}`), t.setOption(r, e[r]))
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
    ce([X.bind], le.prototype, "sendData", null), ce([X.bind], le.prototype, "refreshToken", null), ce([X.bind], le.prototype, "onWindowResize", null), ce([X.bind], le.prototype, "openTerminal", null), ce([X.bind], le.prototype, "reconnect", null), ce([X.bind], le.prototype, "onSocketOpen", null), ce([X.bind], le.prototype, "onSocketClose", null), ce([X.bind], le.prototype, "onSocketError", null), ce([X.bind], le.prototype, "onSocketData", null), ce([X.bind], le.prototype, "onTerminalResize", null), ce([X.bind], le.prototype, "onTerminalData", null);
    const he = "https:" === window.location.protocol ? "wss:" : "ws:",
        ue = window.location.pathname.replace(/[\/]+$/, ""),
        fe = [he, "//", "192.168.4.1:5999", "/ws", "", window.location.search].join(""),
        _e = [window.location.protocol, "//", window.location.host, ue, "/token"].join(""),
        de = {
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
    r(37),
        function(e, t, r) {
            var i, n, o;
            S.__ && S.__(e, t), n = (i = r === R) ? null : r && r.__k || t.__k, e = O(P, null, [e]), o = [], Z(t, (i ? t : r || t).__k = e, n || x, x, void 0 !== t.ownerSVGElement, r && !i ? [r] : n ? null : L.slice.call(t.childNodes), o, r || x, i), K(o, e)
        }(O(class extends I {
            render() {
                return O(le, {
                    id: "terminal-container",
                    wsUrl: fe,
                    tokenUrl: _e,
                    options: de
                })
            }
        }, null), document.body)
}]);