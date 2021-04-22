let frontendLinks = [
    "/",
    "/logout",
    "/contact",
    "/aide",
    "/enregistrement",
    "/connexion",
    "/reinitialiser",
    "/contact"
]

if(frontendLinks.indexOf(window.location.pathname) != "-1"){
    //Session.set('actuelIndex', 0)
    if (function () {
            setTimeout(function () {
                function t() {
                    a ? classie.remove(e, "show-menu") : classie.add(e, "show-menu"), a = !a
                }

                var e = document.body, n = (document.querySelector(".content-wrap"), document.getElementById("open-button")),
                    g = document.querySelector('.menu-wrap'),
                    i = document.getElementById("close-button"), a = !1;
                n.addEventListener("click", t), i && i.addEventListener("click", t), g.addEventListener("click", t)
            }, 1000)
        }(), function (t) {
            "use strict";

            function e(t) {
                return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
            }

            function n(t, e) {
                (i(t, e) ? o : a)(t, e)
            }

            var i, a, o;
            "classList" in document.documentElement ? (i = function (t, e) {
                return t.classList.contains(e)
            }, a = function (t, e) {
                t.classList.add(e)
            }, o = function (t, e) {
                t.classList.remove(e)
            }) : (i = function (t, n) {
                return e(n).test(t.className)
            }, a = function (t, e) {
                i(t, e) || (t.className = t.className + " " + e)
            }, o = function (t, n) {
                t.className = t.className.replace(e(n), " ")
            });
            var s = {hasClass: i, addClass: a, removeClass: o, toggleClass: n, has: i, add: a, remove: o, toggle: n};
            "function" == typeof define && define.amd ? define(s) : t.classie = s
        }(window), function (t, e) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return e(t)
            } : e(t)
        }("undefined" != typeof window ? window : this, function (t, e) {
            function n(t) {
                var e = t.length, n = Y.type(t);
                return "function" !== n && !Y.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
            }

            function i(t, e, n) {
                if (Y.isFunction(e)) return Y.grep(t, function (t, i) {
                    return !!e.call(t, i, t) !== n
                });
                if (e.nodeType) return Y.grep(t, function (t) {
                    return t === e !== n
                });
                if ("string" == typeof e) {
                    if (ot.test(e)) return Y.filter(e, t, n);
                    e = Y.filter(e, t)
                }
                return Y.grep(t, function (t) {
                    return Y.inArray(t, e) >= 0 !== n
                })
            }

            function a(t, e) {
                do {
                    t = t[e]
                } while (t && 1 !== t.nodeType);
                return t
            }

            function o() {
                rt.addEventListener ? (rt.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (rt.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
            }

            function s() {
                (rt.addEventListener || "load" === event.type || "complete" === rt.readyState) && (o(), Y.ready())
            }

            function r(t, e, n) {
                if (void 0 === n && 1 === t.nodeType) {
                    var i = "data-" + e.replace(vt, "-$1").toLowerCase();
                    if ("string" == typeof(n = t.getAttribute(i))) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : mt.test(n) ? Y.parseJSON(n) : n)
                        } catch (t) {
                        }
                        Y.data(t, e, n)
                    } else n = void 0
                }
                return n
            }

            function l(t) {
                var e;
                for (e in t) if (("data" !== e || !Y.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
                return !0
            }

            function u(t, e, n, i) {
                if (Y.acceptData(t)) {
                    var a, o, s = Y.expando, r = t.nodeType, l = r ? Y.cache : t, u = r ? t[s] : t[s] && s;
                    if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = r ? t[s] = B.pop() || Y.guid++ : s), l[u] || (l[u] = r ? {} : {toJSON: Y.noop}), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = Y.extend(l[u], e) : l[u].data = Y.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[Y.camelCase(e)] = n), "string" == typeof e ? null == (a = o[e]) && (a = o[Y.camelCase(e)]) : a = o, a
                }
            }

            function c(t, e, n) {
                if (Y.acceptData(t)) {
                    var i, a, o = t.nodeType, s = o ? Y.cache : t, r = o ? t[Y.expando] : Y.expando;
                    if (s[r]) {
                        if (e && (i = n ? s[r] : s[r].data)) {
                            Y.isArray(e) ? e = e.concat(Y.map(e, Y.camelCase)) : e in i ? e = [e] : (e = Y.camelCase(e), e = e in i ? [e] : e.split(" ")), a = e.length;
                            for (; a--;) delete i[e[a]];
                            if (n ? !l(i) : !Y.isEmptyObject(i)) return
                        }
                        (n || (delete s[r].data, l(s[r]))) && (o ? Y.cleanData([t], !0) : X.deleteExpando || s != s.window ? delete s[r] : s[r] = null)
                    }
                }
            }

            function d() {
                return !0
            }

            function h() {
                return !1
            }

            function p() {
                try {
                    return rt.activeElement
                } catch (t) {
                }
            }

            function f(t) {
                var e = Tt.split("|"), n = t.createDocumentFragment();
                if (n.createElement) for (; e.length;) n.createElement(e.pop());
                return n
            }

            function g(t, e) {
                var n, i, a = 0,
                    o = typeof t.getElementsByTagName !== gt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== gt ? t.querySelectorAll(e || "*") : void 0;
                if (!o) for (o = [], n = t.childNodes || t; null != (i = n[a]); a++) !e || Y.nodeName(i, e) ? o.push(i) : Y.merge(o, g(i, e));
                return void 0 === e || e && Y.nodeName(t, e) ? Y.merge([t], o) : o
            }

            function m(t) {
                kt.test(t.type) && (t.defaultChecked = t.checked)
            }

            function v(t, e) {
                return Y.nodeName(t, "table") && Y.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }

            function y(t) {
                return t.type = (null !== Y.find.attr(t, "type")) + "/" + t.type, t
            }

            function b(t) {
                var e = zt.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }

            function x(t, e) {
                for (var n, i = 0; null != (n = t[i]); i++) Y._data(n, "globalEval", !e || Y._data(e[i], "globalEval"))
            }

            function w(t, e) {
                if (1 === e.nodeType && Y.hasData(t)) {
                    var n, i, a, o = Y._data(t), s = Y._data(e, o), r = o.events;
                    if (r) {
                        delete s.handle, s.events = {};
                        for (n in r) for (i = 0, a = r[n].length; a > i; i++) Y.event.add(e, n, r[n][i])
                    }
                    s.data && (s.data = Y.extend({}, s.data))
                }
            }

            function k(t, e) {
                var n, i, a;
                if (1 === e.nodeType) {
                    if (n = e.nodeName.toLowerCase(), !X.noCloneEvent && e[Y.expando]) {
                        a = Y._data(e);
                        for (i in a.events) Y.removeEvent(e, i, a.handle);
                        e.removeAttribute(Y.expando)
                    }
                    "script" === n && e.text !== t.text ? (y(e).text = t.text, b(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), X.html5Clone && t.innerHTML && !Y.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && kt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
                }
            }

            function A(e, n) {
                var i, a = Y(n.createElement(e)).appendTo(n.body),
                    o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(a[0])) ? i.display : Y.css(a[0], "display");
                return a.detach(), o
            }

            function C(t) {
                var e = rt, n = Wt[t];
                return n || ("none" !== (n = A(t, e)) && n || (qt = (qt || Y("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), (e = (qt[0].contentWindow || qt[0].contentDocument).document).write(), e.close(), n = A(t, e), qt.detach()), Wt[t] = n), n
            }

            function E(t, e) {
                return {
                    get: function () {
                        var n = t();
                        if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
                    }
                }
            }

            function S(t, e) {
                if (e in t) return e;
                for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, a = ie.length; a--;) if ((e = ie[a] + n) in t) return e;
                return i
            }

            function $(t, e) {
                for (var n, i, a, o = [], s = 0, r = t.length; r > s; s++) (i = t[s]).style && (o[s] = Y._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && xt(i) && (o[s] = Y._data(i, "olddisplay", C(i.nodeName)))) : (a = xt(i), (n && "none" !== n || !a) && Y._data(i, "olddisplay", a ? n : Y.css(i, "display"))));
                for (s = 0; r > s; s++) (i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
                return t
            }

            function T(t, e, n) {
                var i = Zt.exec(e);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
            }

            function L(t, e, n, i, a) {
                for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Y.css(t, n + bt[o], !0, a)), i ? ("content" === n && (s -= Y.css(t, "padding" + bt[o], !0, a)), "margin" !== n && (s -= Y.css(t, "border" + bt[o] + "Width", !0, a))) : (s += Y.css(t, "padding" + bt[o], !0, a), "padding" !== n && (s += Y.css(t, "border" + bt[o] + "Width", !0, a)));
                return s
            }

            function N(t, e, n) {
                var i = !0, a = "width" === e ? t.offsetWidth : t.offsetHeight, o = _t(t),
                    s = X.boxSizing && "border-box" === Y.css(t, "boxSizing", !1, o);
                if (0 >= a || null == a) {
                    if ((0 > (a = Gt(t, e, o)) || null == a) && (a = t.style[e]), Kt.test(a)) return a;
                    i = s && (X.boxSizingReliable() || a === t.style[e]), a = parseFloat(a) || 0
                }
                return a + L(t, e, n || (s ? "border" : "content"), i, o) + "px"
            }

            function D(t, e, n, i, a) {
                return new D.prototype.init(t, e, n, i, a)
            }

            function M() {
                return setTimeout(function () {
                    ae = void 0
                }), ae = Y.now()
            }

            function I(t, e) {
                var n, i = {height: t}, a = 0;
                for (e = e ? 1 : 0; 4 > a; a += 2 - e) n = bt[a], i["margin" + n] = i["padding" + n] = t;
                return e && (i.opacity = i.width = t), i
            }

            function j(t, e, n) {
                for (var i, a = (ce[e] || []).concat(ce["*"]), o = 0, s = a.length; s > o; o++) if (i = a[o].call(n, e, t)) return i
            }

            function U(t, e, n) {
                var i, a, o = 0, s = ue.length, r = Y.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (a) return !1;
                    for (var e = ae || M(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; s > o; o++) u.tweens[o].run(i);
                    return r.notifyWith(t, [u, i, n]), 1 > i && s ? n : (r.resolveWith(t, [u]), !1)
                }, u = r.promise({
                    elem: t,
                    props: Y.extend({}, e),
                    opts: Y.extend(!0, {specialEasing: {}}, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ae || M(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = Y.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function (e) {
                        var n = 0, i = e ? u.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? r.resolveWith(t, [u, e]) : r.rejectWith(t, [u, e]), this
                    }
                }), c = u.props;
                for (function (t, e) {
                    var n, i, a, o, s;
                    for (n in t) if (i = Y.camelCase(n), a = e[i], o = t[n], Y.isArray(o) && (a = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = Y.cssHooks[i]) && "expand" in s) {
                        o = s.expand(o), delete t[i];
                        for (n in o) n in t || (t[n] = o[n], e[n] = a)
                    } else e[i] = a
                }(c, u.opts.specialEasing); s > o; o++) if (i = ue[o].call(u, t, c, u.opts)) return i;
                return Y.map(c, j, u), Y.isFunction(u.opts.start) && u.opts.start.call(t, u), Y.fx.timer(Y.extend(l, {
                    elem: t,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            function O(t) {
                return function (e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var i, a = 0, o = e.toLowerCase().match(dt) || [];
                    if (Y.isFunction(n)) for (; i = o[a++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                }
            }

            function P(t, e, n, i) {
                function a(r) {
                    var l;
                    return o[r] = !0, Y.each(t[r] || [], function (t, r) {
                        var u = r(e, n, i);
                        return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), a(u), !1)
                    }), l
                }

                var o = {}, s = t === Ie;
                return a(e.dataTypes[0]) || !o["*"] && a("*")
            }

            function R(t, e) {
                var n, i, a = Y.ajaxSettings.flatOptions || {};
                for (i in e) void 0 !== e[i] && ((a[i] ? t : n || (n = {}))[i] = e[i]);
                return n && Y.extend(!0, t, n), t
            }

            function z(t, e, n, i) {
                var a;
                if (Y.isArray(e)) Y.each(e, function (e, a) {
                    n || Oe.test(t) ? i(t, a) : z(t + "[" + ("object" == typeof a ? e : "") + "]", a, n, i)
                }); else if (n || "object" !== Y.type(e)) i(t, e); else for (a in e) z(t + "[" + a + "]", e[a], n, i)
            }

            function F() {
                try {
                    return new t.XMLHttpRequest
                } catch (t) {
                }
            }

            function H(t) {
                return Y.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
            }

            var B = [], q = B.slice, W = B.concat, _ = B.push, G = B.indexOf, V = {}, K = V.toString, Q = V.hasOwnProperty,
                X = {}, Y = function (t, e) {
                    return new Y.fn.init(t, e)
                }, J = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Z = /^-ms-/, tt = /-([\da-z])/gi, et = function (t, e) {
                    return e.toUpperCase()
                };
            Y.fn = Y.prototype = {
                jquery: "1.11.2", constructor: Y, selector: "", length: 0, toArray: function () {
                    return q.call(this)
                }, get: function (t) {
                    return null != t ? 0 > t ? this[t + this.length] : this[t] : q.call(this)
                }, pushStack: function (t) {
                    var e = Y.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                }, each: function (t, e) {
                    return Y.each(this, t, e)
                }, map: function (t) {
                    return this.pushStack(Y.map(this, function (e, n) {
                        return t.call(e, n, e)
                    }))
                }, slice: function () {
                    return this.pushStack(q.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (t) {
                    var e = this.length, n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: _, sort: B.sort, splice: B.splice
            }, Y.extend = Y.fn.extend = function () {
                var t, e, n, i, a, o, s = arguments[0] || {}, r = 1, l = arguments.length, u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[r] || {}, r++), "object" == typeof s || Y.isFunction(s) || (s = {}), r === l && (s = this, r--); l > r; r++) if (null != (a = arguments[r])) for (i in a) t = s[i], n = a[i], s !== n && (u && n && (Y.isPlainObject(n) || (e = Y.isArray(n))) ? (e ? (e = !1, o = t && Y.isArray(t) ? t : []) : o = t && Y.isPlainObject(t) ? t : {}, s[i] = Y.extend(u, o, n)) : void 0 !== n && (s[i] = n));
                return s
            }, Y.extend({
                expando: "jQuery" + ("1.11.2" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t)
                },
                noop: function () {
                },
                isFunction: function (t) {
                    return "function" === Y.type(t)
                },
                isArray: Array.isArray || function (t) {
                    return "array" === Y.type(t)
                },
                isWindow: function (t) {
                    return null != t && t == t.window
                },
                isNumeric: function (t) {
                    return !Y.isArray(t) && t - parseFloat(t) + 1 >= 0
                },
                isEmptyObject: function (t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                isPlainObject: function (t) {
                    var e;
                    if (!t || "object" !== Y.type(t) || t.nodeType || Y.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !Q.call(t, "constructor") && !Q.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (t) {
                        return !1
                    }
                    if (X.ownLast) for (e in t) return Q.call(t, e);
                    for (e in t) ;
                    return void 0 === e || Q.call(t, e)
                },
                type: function (t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? V[K.call(t)] || "object" : typeof t
                },
                globalEval: function (e) {
                    e && Y.trim(e) && (t.execScript || function (e) {
                        t.eval.call(t, e)
                    })(e)
                },
                camelCase: function (t) {
                    return t.replace(Z, "ms-").replace(tt, et)
                },
                nodeName: function (t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function (t, e, i) {
                    var a = 0, o = t.length, s = n(t);
                    if (i) {
                        if (s) for (; o > a && !1 !== e.apply(t[a], i); a++) ; else for (a in t) if (!1 === e.apply(t[a], i)) break
                    } else if (s) for (; o > a && !1 !== e.call(t[a], a, t[a]); a++) ; else for (a in t) if (!1 === e.call(t[a], a, t[a])) break;
                    return t
                },
                trim: function (t) {
                    return null == t ? "" : (t + "").replace(J, "")
                },
                makeArray: function (t, e) {
                    var i = e || [];
                    return null != t && (n(Object(t)) ? Y.merge(i, "string" == typeof t ? [t] : t) : _.call(i, t)), i
                },
                inArray: function (t, e, n) {
                    var i;
                    if (e) {
                        if (G) return G.call(e, t, n);
                        for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in e && e[n] === t) return n
                    }
                    return -1
                },
                merge: function (t, e) {
                    for (var n = +e.length, i = 0, a = t.length; n > i;) t[a++] = e[i++];
                    if (n != n) for (; void 0 !== e[i];) t[a++] = e[i++];
                    return t.length = a, t
                },
                grep: function (t, e, n) {
                    for (var i = [], a = 0, o = t.length, s = !n; o > a; a++) !e(t[a], a) !== s && i.push(t[a]);
                    return i
                },
                map: function (t, e, i) {
                    var a, o = 0, s = t.length, r = [];
                    if (n(t)) for (; s > o; o++) null != (a = e(t[o], o, i)) && r.push(a); else for (o in t) null != (a = e(t[o], o, i)) && r.push(a);
                    return W.apply([], r)
                },
                guid: 1,
                proxy: function (t, e) {
                    var n, i, a;
                    return "string" == typeof e && (a = t[e], e = t, t = a), Y.isFunction(t) ? (n = q.call(arguments, 2), i = function () {
                        return t.apply(e || this, n.concat(q.call(arguments)))
                    }, i.guid = t.guid = t.guid || Y.guid++, i) : void 0
                },
                now: function () {
                    return +new Date
                },
                support: X
            }), Y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                V["[object " + e + "]"] = e.toLowerCase()
            });
            var nt = function (t) {
                function e(t, e, n, i) {
                    var a, o, s, r, l, u, d, p, f, g;
                    if ((e ? e.ownerDocument || e : R) !== N && L(e), e = e || N, n = n || [], r = e.nodeType, "string" != typeof t || !t || 1 !== r && 9 !== r && 11 !== r) return n;
                    if (!i && M) {
                        if (11 !== r && (a = mt.exec(t))) if (s = a[1]) {
                            if (9 === r) {
                                if (!(o = e.getElementById(s)) || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && O(e, o) && o.id === s) return n.push(o), n
                        } else {
                            if (a[2]) return X.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = a[3]) && b.getElementsByClassName) return X.apply(n, e.getElementsByClassName(s)), n
                        }
                        if (b.qsa && (!I || !I.test(t))) {
                            if (p = d = P, f = e, g = 1 !== r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                                for (u = A(t), (d = e.getAttribute("id")) ? p = d.replace(yt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + h(u[l]);
                                f = vt.test(t) && c(e.parentNode) || e, g = u.join(",")
                            }
                            if (g) try {
                                return X.apply(n, f.querySelectorAll(g)), n
                            } catch (t) {
                            } finally {
                                d || e.removeAttribute("id")
                            }
                        }
                    }
                    return E(t.replace(st, "$1"), e, n, i)
                }

                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }

                    var e = [];
                    return t
                }

                function i(t) {
                    return t[P] = !0, t
                }

                function a(t) {
                    var e = N.createElement("div");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function o(t, e) {
                    for (var n = t.split("|"), i = t.length; i--;) x.attrHandle[n[i]] = e
                }

                function s(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || _) - (~t.sourceIndex || _);
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                    return t ? 1 : -1
                }

                function r(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function l(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function u(t) {
                    return i(function (e) {
                        return e = +e, i(function (n, i) {
                            for (var a, o = t([], n.length, e), s = o.length; s--;) n[a = o[s]] && (n[a] = !(i[a] = n[a]))
                        })
                    })
                }

                function c(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }

                function d() {
                }

                function h(t) {
                    for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                    return i
                }

                function p(t, e, n) {
                    var i = e.dir, a = n && "parentNode" === i, o = F++;
                    return e.first ? function (e, n, o) {
                        for (; e = e[i];) if (1 === e.nodeType || a) return t(e, n, o)
                    } : function (e, n, s) {
                        var r, l, u = [z, o];
                        if (s) {
                            for (; e = e[i];) if ((1 === e.nodeType || a) && t(e, n, s)) return !0
                        } else for (; e = e[i];) if (1 === e.nodeType || a) {
                            if (l = e[P] || (e[P] = {}), (r = l[i]) && r[0] === z && r[1] === o) return u[2] = r[2];
                            if (l[i] = u, u[2] = t(e, n, s)) return !0
                        }
                    }
                }

                function f(t) {
                    return t.length > 1 ? function (e, n, i) {
                        for (var a = t.length; a--;) if (!t[a](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function g(t, e, n, i, a) {
                    for (var o, s = [], r = 0, l = t.length, u = null != e; l > r; r++) (o = t[r]) && (!n || n(o, i, a)) && (s.push(o), u && e.push(r));
                    return s
                }

                function m(t, n, a, o, s, r) {
                    return o && !o[P] && (o = m(o)), s && !s[P] && (s = m(s, r)), i(function (i, r, l, u) {
                        var c, d, h, p = [], f = [], m = r.length, v = i || function (t, n, i) {
                                for (var a = 0, o = n.length; o > a; a++) e(t, n[a], i);
                                return i
                            }(n || "*", l.nodeType ? [l] : l, []), y = !t || !i && n ? v : g(v, p, t, l, u),
                            b = a ? s || (i ? t : m || o) ? [] : r : y;
                        if (a && a(y, b, l, u), o) for (c = g(b, f), o(c, [], l, u), d = c.length; d--;) (h = c[d]) && (b[f[d]] = !(y[f[d]] = h));
                        if (i) {
                            if (s || t) {
                                if (s) {
                                    for (c = [], d = b.length; d--;) (h = b[d]) && c.push(y[d] = h);
                                    s(null, b = [], c, u)
                                }
                                for (d = b.length; d--;) (h = b[d]) && (c = s ? J(i, h) : p[d]) > -1 && (i[c] = !(r[c] = h))
                            }
                        } else b = g(b === r ? b.splice(m, b.length) : b), s ? s(null, r, b, u) : X.apply(r, b)
                    })
                }

                function v(t) {
                    for (var e, n, i, a = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], r = o ? 1 : 0, l = p(function (t) {
                        return t === e
                    }, s, !0), u = p(function (t) {
                        return J(e, t) > -1
                    }, s, !0), c = [function (t, n, i) {
                        var a = !o && (i || n !== S) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, a
                    }]; a > r; r++) if (n = x.relative[t[r].type]) c = [p(f(c), n)]; else {
                        if ((n = x.filter[t[r].type].apply(null, t[r].matches))[P]) {
                            for (i = ++r; a > i && !x.relative[t[i].type]; i++) ;
                            return m(r > 1 && f(c), r > 1 && h(t.slice(0, r - 1).concat({value: " " === t[r - 2].type ? "*" : ""})).replace(st, "$1"), n, i > r && v(t.slice(r, i)), a > i && v(t = t.slice(i)), a > i && h(t))
                        }
                        c.push(n)
                    }
                    return f(c)
                }

                var y, b, x, w, k, A, C, E, S, $, T, L, N, D, M, I, j, U, O, P = "sizzle" + 1 * new Date, R = t.document,
                    z = 0, F = 0, H = n(), B = n(), q = n(), W = function (t, e) {
                        return t === e && (T = !0), 0
                    }, _ = 1 << 31, G = {}.hasOwnProperty, V = [], K = V.pop, Q = V.push, X = V.push, Y = V.slice,
                    J = function (t, e) {
                        for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
                        return -1
                    },
                    Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = et.replace("w", "w#"),
                    it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + tt + "*\\]",
                    at = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                    ot = new RegExp(tt + "+", "g"),
                    st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                    rt = new RegExp("^" + tt + "*," + tt + "*"),
                    lt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                    ut = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), ct = new RegExp(at),
                    dt = new RegExp("^" + nt + "$"), ht = {
                        ID: new RegExp("^#(" + et + ")"),
                        CLASS: new RegExp("^\\.(" + et + ")"),
                        TAG: new RegExp("^(" + et.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + it),
                        PSEUDO: new RegExp("^" + at),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + Z + ")$", "i"),
                        needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                    }, pt = /^(?:input|select|textarea|button)$/i, ft = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/,
                    mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /[+~]/, yt = /'|\\/g,
                    bt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), xt = function (t, e, n) {
                        var i = "0x" + e - 65536;
                        return i != i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    }, wt = function () {
                        L()
                    };
                try {
                    X.apply(V = Y.call(R.childNodes), R.childNodes), V[R.childNodes.length].nodeType
                } catch (t) {
                    X = {
                        apply: V.length ? function (t, e) {
                            Q.apply(t, Y.call(e))
                        } : function (t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];) ;
                            t.length = n - 1
                        }
                    }
                }
                b = e.support = {}, k = e.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, L = e.setDocument = function (t) {
                    var e, n, i = t ? t.ownerDocument || t : R;
                    return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, D = i.documentElement, (n = i.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), M = !k(i), b.attributes = a(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), b.getElementsByTagName = a(function (t) {
                        return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                    }), b.getElementsByClassName = gt.test(i.getElementsByClassName), b.getById = a(function (t) {
                        return D.appendChild(t).id = P, !i.getElementsByName || !i.getElementsByName(P).length
                    }), b.getById ? (x.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && M) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, x.filter.ID = function (t) {
                        var e = t.replace(bt, xt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete x.find.ID, x.filter.ID = function (t) {
                        var e = t.replace(bt, xt);
                        return function (t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), x.find.TAG = b.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, i = [], a = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[a++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, x.find.CLASS = b.getElementsByClassName && function (t, e) {
                        return M ? e.getElementsByClassName(t) : void 0
                    }, j = [], I = [], (b.qsa = gt.test(i.querySelectorAll)) && (a(function (t) {
                        D.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + P + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || I.push(".#.+[+~]")
                    }), a(function (t) {
                        var e = i.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
                    })), (b.matchesSelector = gt.test(U = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && a(function (t) {
                        b.disconnectedMatch = U.call(t, "div"), U.call(t, "[s!='']:x"), j.push("!=", at)
                    }), I = I.length && new RegExp(I.join("|")), j = j.length && new RegExp(j.join("|")), e = gt.test(D.compareDocumentPosition), O = e || gt.test(D.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function (t, e) {
                        if (e) for (; e = e.parentNode;) if (e === t) return !0;
                        return !1
                    }, W = e ? function (t, e) {
                        if (t === e) return T = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === R && O(R, t) ? -1 : e === i || e.ownerDocument === R && O(R, e) ? 1 : $ ? J($, t) - J($, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return T = !0, 0;
                        var n, a = 0, o = t.parentNode, r = e.parentNode, l = [t], u = [e];
                        if (!o || !r) return t === i ? -1 : e === i ? 1 : o ? -1 : r ? 1 : $ ? J($, t) - J($, e) : 0;
                        if (o === r) return s(t, e);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (n = e; n = n.parentNode;) u.unshift(n);
                        for (; l[a] === u[a];) a++;
                        return a ? s(l[a], u[a]) : l[a] === R ? -1 : u[a] === R ? 1 : 0
                    }, i) : N
                }, e.matches = function (t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function (t, n) {
                    if ((t.ownerDocument || t) !== N && L(t), n = n.replace(ut, "='$1']"), !(!b.matchesSelector || !M || j && j.test(n) || I && I.test(n))) try {
                        var i = U.call(t, n);
                        if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {
                    }
                    return e(n, N, null, [t]).length > 0
                }, e.contains = function (t, e) {
                    return (t.ownerDocument || t) !== N && L(t), O(t, e)
                }, e.attr = function (t, e) {
                    (t.ownerDocument || t) !== N && L(t);
                    var n = x.attrHandle[e.toLowerCase()],
                        i = n && G.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !M) : void 0;
                    return void 0 !== i ? i : b.attributes || !M ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function (t) {
                    var e, n = [], i = 0, a = 0;
                    if (T = !b.detectDuplicates, $ = !b.sortStable && t.slice(0), t.sort(W), T) {
                        for (; e = t[a++];) e === t[a] && (i = n.push(a));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return $ = null, t
                }, w = e.getText = function (t) {
                    var e, n = "", i = 0, a = t.nodeType;
                    if (a) {
                        if (1 === a || 9 === a || 11 === a) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += w(t)
                        } else if (3 === a || 4 === a) return t.nodeValue
                    } else for (; e = t[i++];) n += w(e);
                    return n
                }, (x = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ht,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(bt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = A(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(bt, xt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = H[t + " "];
                            return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && H(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        }, ATTR: function (t, n, i) {
                            return function (a) {
                                var o = e.attr(a, t);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                            }
                        }, CHILD: function (t, e, n, i, a) {
                            var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), r = "of-type" === e;
                            return 1 === i && 0 === a ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, l) {
                                var u, c, d, h, p, f, g = o !== s ? "nextSibling" : "previousSibling", m = e.parentNode,
                                    v = r && e.nodeName.toLowerCase(), y = !l && !r;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (d = e; d = d[g];) if (r ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (p = (u = (c = m[P] || (m[P] = {}))[t] || [])[0] === z && u[1], h = u[0] === z && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (h = p = 0) || f.pop();) if (1 === d.nodeType && ++h && d === e) {
                                            c[t] = [z, p, h];
                                            break
                                        }
                                    } else if (y && (u = (e[P] || (e[P] = {}))[t]) && u[0] === z) h = u[1]; else for (; (d = ++p && d && d[g] || (h = p = 0) || f.pop()) && ((r ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[P] || (d[P] = {}))[t] = [z, h]), d !== e));) ;
                                    return (h -= a) === i || h % i == 0 && h / i >= 0
                                }
                            }
                        }, PSEUDO: function (t, n) {
                            var a, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[P] ? o(n) : o.length > 1 ? (a = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                                for (var i, a = o(t, n), s = a.length; s--;) i = J(t, a[s]), t[i] = !(e[i] = a[s])
                            }) : function (t) {
                                return o(t, 0, a)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function (t) {
                            var e = [], n = [], a = C(t.replace(st, "$1"));
                            return a[P] ? i(function (t, e, n, i) {
                                for (var o, s = a(t, null, i, []), r = t.length; r--;) (o = s[r]) && (t[r] = !(e[r] = o))
                            }) : function (t, i, o) {
                                return e[0] = t, a(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }), has: i(function (t) {
                            return function (n) {
                                return e(t, n).length > 0
                            }
                        }), contains: i(function (t) {
                            return t = t.replace(bt, xt), function (e) {
                                return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                            }
                        }), lang: i(function (t) {
                            return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, xt).toLowerCase(), function (e) {
                                var n;
                                do {
                                    if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }), target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        }, root: function (t) {
                            return t === D
                        }, focus: function (t) {
                            return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: function (t) {
                            return !1 === t.disabled
                        }, disabled: function (t) {
                            return !0 === t.disabled
                        }, checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0
                        }, parent: function (t) {
                            return !x.pseudos.empty(t)
                        }, header: function (t) {
                            return ft.test(t.nodeName)
                        }, input: function (t) {
                            return pt.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: u(function () {
                            return [0]
                        }), last: u(function (t, e) {
                            return [e - 1]
                        }), eq: u(function (t, e, n) {
                            return [0 > n ? n + e : n]
                        }), even: u(function (t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }), odd: u(function (t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }), lt: u(function (t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }), gt: u(function (t, e, n) {
                            for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }).pseudos.nth = x.pseudos.eq;
                for (y in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[y] = r(y);
                for (y in{submit: !0, reset: !0}) x.pseudos[y] = l(y);
                return d.prototype = x.filters = x.pseudos, x.setFilters = new d, A = e.tokenize = function (t, n) {
                    var i, a, o, s, r, l, u, c = B[t + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (r = t, l = [], u = x.preFilter; r;) {
                        (!i || (a = rt.exec(r))) && (a && (r = r.slice(a[0].length) || r), l.push(o = [])), i = !1, (a = lt.exec(r)) && (i = a.shift(), o.push({
                            value: i,
                            type: a[0].replace(st, " ")
                        }), r = r.slice(i.length));
                        for (s in x.filter) !(a = ht[s].exec(r)) || u[s] && !(a = u[s](a)) || (i = a.shift(), o.push({
                            value: i,
                            type: s,
                            matches: a
                        }), r = r.slice(i.length));
                        if (!i) break
                    }
                    return n ? r.length : r ? e.error(t) : B(t, l).slice(0)
                }, C = e.compile = function (t, n) {
                    var a, o = [], s = [], r = q[t + " "];
                    if (!r) {
                        for (n || (n = A(t)), a = n.length; a--;) (r = v(n[a]))[P] ? o.push(r) : s.push(r);
                        (r = q(t, function (t, n) {
                            var a = n.length > 0, o = t.length > 0, s = function (i, s, r, l, u) {
                                var c, d, h, p = 0, f = "0", m = i && [], v = [], y = S, b = i || o && x.find.TAG("*", u),
                                    w = z += null == y ? 1 : Math.random() || .1, k = b.length;
                                for (u && (S = s !== N && s); f !== k && null != (c = b[f]); f++) {
                                    if (o && c) {
                                        for (d = 0; h = t[d++];) if (h(c, s, r)) {
                                            l.push(c);
                                            break
                                        }
                                        u && (z = w)
                                    }
                                    a && ((c = !h && c) && p--, i && m.push(c))
                                }
                                if (p += f, a && f !== p) {
                                    for (d = 0; h = n[d++];) h(m, v, s, r);
                                    if (i) {
                                        if (p > 0) for (; f--;) m[f] || v[f] || (v[f] = K.call(l));
                                        v = g(v)
                                    }
                                    X.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                                }
                                return u && (z = w, S = y), m
                            };
                            return a ? i(s) : s
                        }(s, o))).selector = t
                    }
                    return r
                }, E = e.select = function (t, e, n, i) {
                    var a, o, s, r, l, u = "function" == typeof t && t, d = !i && A(t = u.selector || t);
                    if (n = n || [], 1 === d.length) {
                        if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === e.nodeType && M && x.relative[o[1].type]) {
                            if (!(e = (x.find.ID(s.matches[0].replace(bt, xt), e) || [])[0])) return n;
                            u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (a = ht.needsContext.test(t) ? 0 : o.length; a-- && (s = o[a], !x.relative[r = s.type]);) if ((l = x.find[r]) && (i = l(s.matches[0].replace(bt, xt), vt.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(a, 1), !(t = i.length && h(o))) return X.apply(n, i), n;
                            break
                        }
                    }
                    return (u || C(t, d))(i, e, !M, n, vt.test(t) && c(e.parentNode) || e), n
                }, b.sortStable = P.split("").sort(W).join("") === P, b.detectDuplicates = !!T, L(), b.sortDetached = a(function (t) {
                    return 1 & t.compareDocumentPosition(N.createElement("div"))
                }), a(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), b.attributes && a(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function (t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), a(function (t) {
                    return null == t.getAttribute("disabled")
                }) || o(Z, function (t, e, n) {
                    var i;
                    return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), e
            }(t);
            Y.find = nt, Y.expr = nt.selectors, Y.expr[":"] = Y.expr.pseudos, Y.unique = nt.uniqueSort, Y.text = nt.getText, Y.isXMLDoc = nt.isXML, Y.contains = nt.contains;
            var it = Y.expr.match.needsContext, at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ot = /^.[^:#\[\.,]*$/;
            Y.filter = function (t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? Y.find.matchesSelector(i, t) ? [i] : [] : Y.find.matches(t, Y.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
            }, Y.fn.extend({
                find: function (t) {
                    var e, n = [], i = this, a = i.length;
                    if ("string" != typeof t) return this.pushStack(Y(t).filter(function () {
                        for (e = 0; a > e; e++) if (Y.contains(i[e], this)) return !0
                    }));
                    for (e = 0; a > e; e++) Y.find(t, i[e], n);
                    return n = this.pushStack(a > 1 ? Y.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
                }, filter: function (t) {
                    return this.pushStack(i(this, t || [], !1))
                }, not: function (t) {
                    return this.pushStack(i(this, t || [], !0))
                }, is: function (t) {
                    return !!i(this, "string" == typeof t && it.test(t) ? Y(t) : t || [], !1).length
                }
            });
            var st, rt = t.document, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (Y.fn.init = function (t, e) {
                var n, i;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : lt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || st).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof Y ? e[0] : e, Y.merge(this, Y.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)), at.test(n[1]) && Y.isPlainObject(e)) for (n in e) Y.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    if ((i = rt.getElementById(n[2])) && i.parentNode) {
                        if (i.id !== n[2]) return st.find(t);
                        this.length = 1, this[0] = i
                    }
                    return this.context = rt, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Y.isFunction(t) ? void 0 !== st.ready ? st.ready(t) : t(Y) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Y.makeArray(t, this))
            }).prototype = Y.fn, st = Y(rt);
            var ut = /^(?:parents|prev(?:Until|All))/, ct = {children: !0, contents: !0, next: !0, prev: !0};
            Y.extend({
                dir: function (t, e, n) {
                    for (var i = [], a = t[e]; a && 9 !== a.nodeType && (void 0 === n || 1 !== a.nodeType || !Y(a).is(n));) 1 === a.nodeType && i.push(a), a = a[e];
                    return i
                }, sibling: function (t, e) {
                    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                    return n
                }
            }), Y.fn.extend({
                has: function (t) {
                    var e, n = Y(t, this), i = n.length;
                    return this.filter(function () {
                        for (e = 0; i > e; e++) if (Y.contains(this, n[e])) return !0
                    })
                }, closest: function (t, e) {
                    for (var n, i = 0, a = this.length, o = [], s = it.test(t) || "string" != typeof t ? Y(t, e || this.context) : 0; a > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Y.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
                    return this.pushStack(o.length > 1 ? Y.unique(o) : o)
                }, index: function (t) {
                    return t ? "string" == typeof t ? Y.inArray(this[0], Y(t)) : Y.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (t, e) {
                    return this.pushStack(Y.unique(Y.merge(this.get(), Y(t, e))))
                }, addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), Y.each({
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                }, parents: function (t) {
                    return Y.dir(t, "parentNode")
                }, parentsUntil: function (t, e, n) {
                    return Y.dir(t, "parentNode", n)
                }, next: function (t) {
                    return a(t, "nextSibling")
                }, prev: function (t) {
                    return a(t, "previousSibling")
                }, nextAll: function (t) {
                    return Y.dir(t, "nextSibling")
                }, prevAll: function (t) {
                    return Y.dir(t, "previousSibling")
                }, nextUntil: function (t, e, n) {
                    return Y.dir(t, "nextSibling", n)
                }, prevUntil: function (t, e, n) {
                    return Y.dir(t, "previousSibling", n)
                }, siblings: function (t) {
                    return Y.sibling((t.parentNode || {}).firstChild, t)
                }, children: function (t) {
                    return Y.sibling(t.firstChild)
                }, contents: function (t) {
                    return Y.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : Y.merge([], t.childNodes)
                }
            }, function (t, e) {
                Y.fn[t] = function (n, i) {
                    var a = Y.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (a = Y.filter(i, a)), this.length > 1 && (ct[t] || (a = Y.unique(a)), ut.test(t) && (a = a.reverse())), this.pushStack(a)
                }
            });
            var dt = /\S+/g, ht = {};
            Y.Callbacks = function (t) {
                var e, n, i, a, o, s, r = [], l = !(t = "string" == typeof t ? ht[t] || function (t) {
                    var e = ht[t] = {};
                    return Y.each(t.match(dt) || [], function (t, n) {
                        e[n] = !0
                    }), e
                }(t) : Y.extend({}, t)).once && [], u = function (d) {
                    for (n = t.memory && d, i = !0, o = s || 0, s = 0, a = r.length, e = !0; r && a > o; o++) if (!1 === r[o].apply(d[0], d[1]) && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                    e = !1, r && (l ? l.length && u(l.shift()) : n ? r = [] : c.disable())
                }, c = {
                    add: function () {
                        if (r) {
                            var i = r.length;
                            !function e(n) {
                                Y.each(n, function (n, i) {
                                    var a = Y.type(i);
                                    "function" === a ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== a && e(i)
                                })
                            }(arguments), e ? a = r.length : n && (s = i, u(n))
                        }
                        return this
                    }, remove: function () {
                        return r && Y.each(arguments, function (t, n) {
                            for (var i; (i = Y.inArray(n, r, i)) > -1;) r.splice(i, 1), e && (a >= i && a--, o >= i && o--)
                        }), this
                    }, has: function (t) {
                        return t ? Y.inArray(t, r) > -1 : !(!r || !r.length)
                    }, empty: function () {
                        return r = [], a = 0, this
                    }, disable: function () {
                        return r = l = n = void 0, this
                    }, disabled: function () {
                        return !r
                    }, lock: function () {
                        return l = void 0, n || c.disable(), this
                    }, locked: function () {
                        return !l
                    }, fireWith: function (t, n) {
                        return !r || i && !l || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? l.push(n) : u(n)), this
                    }, fire: function () {
                        return c.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!i
                    }
                };
                return c
            }, Y.extend({
                Deferred: function (t) {
                    var e = [["resolve", "done", Y.Callbacks("once memory"), "resolved"], ["reject", "fail", Y.Callbacks("once memory"), "rejected"], ["notify", "progress", Y.Callbacks("memory")]],
                        n = "pending", i = {
                            state: function () {
                                return n
                            }, always: function () {
                                return a.done(arguments).fail(arguments), this
                            }, then: function () {
                                var t = arguments;
                                return Y.Deferred(function (n) {
                                    Y.each(e, function (e, o) {
                                        var s = Y.isFunction(t[e]) && t[e];
                                        a[o[1]](function () {
                                            var t = s && s.apply(this, arguments);
                                            t && Y.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                        })
                                    }), t = null
                                }).promise()
                            }, promise: function (t) {
                                return null != t ? Y.extend(t, i) : i
                            }
                        }, a = {};
                    return i.pipe = i.then, Y.each(e, function (t, o) {
                        var s = o[2], r = o[3];
                        i[o[1]] = s.add, r && s.add(function () {
                            n = r
                        }, e[1 ^ t][2].disable, e[2][2].lock), a[o[0]] = function () {
                            return a[o[0] + "With"](this === a ? i : this, arguments), this
                        }, a[o[0] + "With"] = s.fireWith
                    }), i.promise(a), t && t.call(a, a), a
                }, when: function (t) {
                    var e, n, i, a = 0, o = q.call(arguments), s = o.length,
                        r = 1 !== s || t && Y.isFunction(t.promise) ? s : 0, l = 1 === r ? t : Y.Deferred(),
                        u = function (t, n, i) {
                            return function (a) {
                                n[t] = this, i[t] = arguments.length > 1 ? q.call(arguments) : a, i === e ? l.notifyWith(n, i) : --r || l.resolveWith(n, i)
                            }
                        };
                    if (s > 1) for (e = new Array(s), n = new Array(s), i = new Array(s); s > a; a++) o[a] && Y.isFunction(o[a].promise) ? o[a].promise().done(u(a, i, o)).fail(l.reject).progress(u(a, n, e)) : --r;
                    return r || l.resolveWith(i, o), l.promise()
                }
            });
            var pt;
            Y.fn.ready = function (t) {
                return Y.ready.promise().done(t), this
            }, Y.extend({
                isReady: !1, readyWait: 1, holdReady: function (t) {
                    t ? Y.readyWait++ : Y.ready(!0)
                }, ready: function (t) {
                    if (!0 === t ? !--Y.readyWait : !Y.isReady) {
                        if (!rt.body) return setTimeout(Y.ready);
                        Y.isReady = !0, !0 !== t && --Y.readyWait > 0 || (pt.resolveWith(rt, [Y]), Y.fn.triggerHandler && (Y(rt).triggerHandler("ready"), Y(rt).off("ready")))
                    }
                }
            }), Y.ready.promise = function (e) {
                if (!pt) if (pt = Y.Deferred(), "complete" === rt.readyState) setTimeout(Y.ready); else if (rt.addEventListener) rt.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1); else {
                    rt.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
                    var n = !1;
                    try {
                        n = null == t.frameElement && rt.documentElement
                    } catch (t) {
                    }
                    n && n.doScroll && function t() {
                        if (!Y.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(t, 50)
                            }
                            o(), Y.ready()
                        }
                    }()
                }
                return pt.promise(e)
            };
            var ft, gt = "undefined";
            for (ft in Y(X)) break;
            X.ownLast = "0" !== ft, X.inlineBlockNeedsLayout = !1, Y(function () {
                var t, e, n, i;
                (n = rt.getElementsByTagName("body")[0]) && n.style && (e = rt.createElement("div"), i = rt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== gt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", X.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
            }), function () {
                var t = rt.createElement("div");
                if (null == X.deleteExpando) {
                    X.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (t) {
                        X.deleteExpando = !1
                    }
                }
                t = null
            }(), Y.acceptData = function (t) {
                var e = Y.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
                return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
            };
            var mt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, vt = /([A-Z])/g;
            Y.extend({
                cache: {},
                noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
                hasData: function (t) {
                    return !!(t = t.nodeType ? Y.cache[t[Y.expando]] : t[Y.expando]) && !l(t)
                },
                data: function (t, e, n) {
                    return u(t, e, n)
                },
                removeData: function (t, e) {
                    return c(t, e)
                },
                _data: function (t, e, n) {
                    return u(t, e, n, !0)
                },
                _removeData: function (t, e) {
                    return c(t, e, !0)
                }
            }), Y.fn.extend({
                data: function (t, e) {
                    var n, i, a, o = this[0], s = o && o.attributes;
                    if (void 0 === t) {
                        if (this.length && (a = Y.data(o), 1 === o.nodeType && !Y._data(o, "parsedAttrs"))) {
                            for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Y.camelCase(i.slice(5)), r(o, i, a[i]));
                            Y._data(o, "parsedAttrs", !0)
                        }
                        return a
                    }
                    return "object" == typeof t ? this.each(function () {
                        Y.data(this, t)
                    }) : arguments.length > 1 ? this.each(function () {
                        Y.data(this, t, e)
                    }) : o ? r(o, t, Y.data(o, t)) : void 0
                }, removeData: function (t) {
                    return this.each(function () {
                        Y.removeData(this, t)
                    })
                }
            }), Y.extend({
                queue: function (t, e, n) {
                    var i;
                    return t ? (e = (e || "fx") + "queue", i = Y._data(t, e), n && (!i || Y.isArray(n) ? i = Y._data(t, e, Y.makeArray(n)) : i.push(n)), i || []) : void 0
                }, dequeue: function (t, e) {
                    e = e || "fx";
                    var n = Y.queue(t, e), i = n.length, a = n.shift(), o = Y._queueHooks(t, e);
                    "inprogress" === a && (a = n.shift(), i--), a && ("fx" === e && n.unshift("inprogress"), delete o.stop, a.call(t, function () {
                        Y.dequeue(t, e)
                    }, o)), !i && o && o.empty.fire()
                }, _queueHooks: function (t, e) {
                    var n = e + "queueHooks";
                    return Y._data(t, n) || Y._data(t, n, {
                        empty: Y.Callbacks("once memory").add(function () {
                            Y._removeData(t, e + "queue"), Y._removeData(t, n)
                        })
                    })
                }
            }), Y.fn.extend({
                queue: function (t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Y.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                        var n = Y.queue(this, t, e);
                        Y._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Y.dequeue(this, t)
                    })
                }, dequeue: function (t) {
                    return this.each(function () {
                        Y.dequeue(this, t)
                    })
                }, clearQueue: function (t) {
                    return this.queue(t || "fx", [])
                }, promise: function (t, e) {
                    var n, i = 1, a = Y.Deferred(), o = this, s = this.length, r = function () {
                        --i || a.resolveWith(o, [o])
                    };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) (n = Y._data(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(r));
                    return r(), a.promise(e)
                }
            });
            var yt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, bt = ["Top", "Right", "Bottom", "Left"],
                xt = function (t, e) {
                    return t = e || t, "none" === Y.css(t, "display") || !Y.contains(t.ownerDocument, t)
                }, wt = Y.access = function (t, e, n, i, a, o, s) {
                    var r = 0, l = t.length, u = null == n;
                    if ("object" === Y.type(n)) {
                        a = !0;
                        for (r in n) Y.access(t, e, r, n[r], !0, o, s)
                    } else if (void 0 !== i && (a = !0, Y.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                            return u.call(Y(t), n)
                        })), e)) for (; l > r; r++) e(t[r], n, s ? i : i.call(t[r], r, e(t[r], n)));
                    return a ? t : u ? e.call(t) : l ? e(t[0], n) : o
                }, kt = /^(?:checkbox|radio)$/i;
            !function () {
                var t = rt.createElement("input"), e = rt.createElement("div"), n = rt.createDocumentFragment();
                if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", X.leadingWhitespace = 3 === e.firstChild.nodeType, X.tbody = !e.getElementsByTagName("tbody").length, X.htmlSerialize = !!e.getElementsByTagName("link").length, X.html5Clone = "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), X.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", X.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", X.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, X.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                        X.noCloneEvent = !1
                    }), e.cloneNode(!0).click()), null == X.deleteExpando) {
                    X.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        X.deleteExpando = !1
                    }
                }
            }(), function () {
                var e, n, i = rt.createElement("div");
                for (e in{
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + e, (X[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), X[e + "Bubbles"] = !1 === i.attributes[n].expando);
                i = null
            }();
            var At = /^(?:input|select|textarea)$/i, Ct = /^key/, Et = /^(?:mouse|pointer|contextmenu)|click/,
                St = /^(?:focusinfocus|focusoutblur)$/, $t = /^([^.]*)(?:\.(.+)|)$/;
            Y.event = {
                global: {},
                add: function (t, e, n, i, a) {
                    var o, s, r, l, u, c, d, h, p, f, g, m = Y._data(t);
                    if (m) {
                        for (n.handler && (l = n, n = l.handler, a = l.selector), n.guid || (n.guid = Y.guid++), (s = m.events) || (s = m.events = {}), (c = m.handle) || (c = m.handle = function (t) {
                            return typeof Y === gt || t && Y.event.triggered === t.type ? void 0 : Y.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = t), r = (e = (e || "").match(dt) || [""]).length; r--;) o = $t.exec(e[r]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p && (u = Y.event.special[p] || {}, p = (a ? u.delegateType : u.bindType) || p, u = Y.event.special[p] || {}, d = Y.extend({
                            type: p,
                            origType: g,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: a,
                            needsContext: a && Y.expr.match.needsContext.test(a),
                            namespace: f.join(".")
                        }, l), (h = s[p]) || (h = s[p] = [], h.delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, f, c) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), Y.event.global[p] = !0);
                        t = null
                    }
                },
                remove: function (t, e, n, i, a) {
                    var o, s, r, l, u, c, d, h, p, f, g, m = Y.hasData(t) && Y._data(t);
                    if (m && (c = m.events)) {
                        for (u = (e = (e || "").match(dt) || [""]).length; u--;) if (r = $t.exec(e[u]) || [], p = g = r[1], f = (r[2] || "").split(".").sort(), p) {
                            for (d = Y.event.special[p] || {}, h = c[p = (i ? d.delegateType : d.bindType) || p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) s = h[o], !a && g !== s.origType || n && n.guid !== s.guid || r && !r.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(t, s));
                            l && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, m.handle) || Y.removeEvent(t, p, m.handle), delete c[p])
                        } else for (p in c) Y.event.remove(t, p + e[u], n, i, !0);
                        Y.isEmptyObject(c) && (delete m.handle, Y._removeData(t, "events"))
                    }
                },
                trigger: function (e, n, i, a) {
                    var o, s, r, l, u, c, d, h = [i || rt], p = Q.call(e, "type") ? e.type : e,
                        f = Q.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (r = c = i = i || rt, 3 !== i.nodeType && 8 !== i.nodeType && !St.test(p + Y.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[Y.expando] ? e : new Y.Event(p, "object" == typeof e && e), e.isTrigger = a ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : Y.makeArray(n, [e]), u = Y.event.special[p] || {}, a || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                        if (!a && !u.noBubble && !Y.isWindow(i)) {
                            for (l = u.delegateType || p, St.test(l + p) || (r = r.parentNode); r; r = r.parentNode) h.push(r), c = r;
                            c === (i.ownerDocument || rt) && h.push(c.defaultView || c.parentWindow || t)
                        }
                        for (d = 0; (r = h[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : u.bindType || p, (o = (Y._data(r, "events") || {})[e.type] && Y._data(r, "handle")) && o.apply(r, n), (o = s && r[s]) && o.apply && Y.acceptData(r) && (e.result = o.apply(r, n), !1 === e.result && e.preventDefault());
                        if (e.type = p, !a && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(h.pop(), n)) && Y.acceptData(i) && s && i[p] && !Y.isWindow(i)) {
                            (c = i[s]) && (i[s] = null), Y.event.triggered = p;
                            try {
                                i[p]()
                            } catch (t) {
                            }
                            Y.event.triggered = void 0, c && (i[s] = c)
                        }
                        return e.result
                    }
                },
                dispatch: function (t) {
                    t = Y.event.fix(t);
                    var e, n, i, a, o, s = [], r = q.call(arguments), l = (Y._data(this, "events") || {})[t.type] || [],
                        u = Y.event.special[t.type] || {};
                    if (r[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                        for (s = Y.event.handlers.call(this, t, l), e = 0; (a = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = a.elem, o = 0; (i = a.handlers[o++]) && !t.isImmediatePropagationStopped();) (!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, void 0 !== (n = ((Y.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, r)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function (t, e) {
                    var n, i, a, o, s = [], r = e.delegateCount, l = t.target;
                    if (r && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (a = [], o = 0; r > o; o++) i = e[o], n = i.selector + " ", void 0 === a[n] && (a[n] = i.needsContext ? Y(n, this).index(l) >= 0 : Y.find(n, this, null, [l]).length), a[n] && a.push(i);
                        a.length && s.push({elem: l, handlers: a})
                    }
                    return r < e.length && s.push({elem: this, handlers: e.slice(r)}), s
                },
                fix: function (t) {
                    if (t[Y.expando]) return t;
                    var e, n, i, a = t.type, o = t, s = this.fixHooks[a];
                    for (s || (this.fixHooks[a] = s = Et.test(a) ? this.mouseHooks : Ct.test(a) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new Y.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
                    return t.target || (t.target = o.srcElement || rt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (t, e) {
                        var n, i, a, o = e.button, s = e.fromElement;
                        return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || rt, a = i.documentElement, n = i.body, t.pageX = e.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                    }
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            if (this !== p() && this.focus) try {
                                return this.focus(), !1
                            } catch (t) {
                            }
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            return this === p() && this.blur ? (this.blur(), !1) : void 0
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            return Y.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                        }, _default: function (t) {
                            return Y.nodeName(t.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function (t, e, n, i) {
                    var a = Y.extend(new Y.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                    i ? Y.event.trigger(a, null, e) : Y.event.dispatch.call(e, a), a.isDefaultPrevented() && n.preventDefault()
                }
            }, Y.removeEvent = rt.removeEventListener ? function (t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n, !1)
            } : function (t, e, n) {
                var i = "on" + e;
                t.detachEvent && (typeof t[i] === gt && (t[i] = null), t.detachEvent(i, n))
            }, Y.Event = function (t, e) {
                return this instanceof Y.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? d : h) : this.type = t, e && Y.extend(this, e), this.timeStamp = t && t.timeStamp || Y.now(), void(this[Y.expando] = !0)) : new Y.Event(t, e)
            }, Y.Event.prototype = {
                isDefaultPrevented: h,
                isPropagationStopped: h,
                isImmediatePropagationStopped: h,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, Y.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (t, e) {
                Y.event.special[t] = {
                    delegateType: e, bindType: e, handle: function (t) {
                        var n, i = t.relatedTarget, a = t.handleObj;
                        return (!i || i !== this && !Y.contains(this, i)) && (t.type = a.origType, n = a.handler.apply(this, arguments), t.type = e), n
                    }
                }
            }), X.submitBubbles || (Y.event.special.submit = {
                setup: function () {
                    return !Y.nodeName(this, "form") && void Y.event.add(this, "click._submit keypress._submit", function (t) {
                        var e = t.target, n = Y.nodeName(e, "input") || Y.nodeName(e, "button") ? e.form : void 0;
                        n && !Y._data(n, "submitBubbles") && (Y.event.add(n, "submit._submit", function (t) {
                            t._submit_bubble = !0
                        }), Y._data(n, "submitBubbles", !0))
                    })
                }, postDispatch: function (t) {
                    t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && Y.event.simulate("submit", this.parentNode, t, !0))
                }, teardown: function () {
                    return !Y.nodeName(this, "form") && void Y.event.remove(this, "._submit")
                }
            }), X.changeBubbles || (Y.event.special.change = {
                setup: function () {
                    return At.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (Y.event.add(this, "propertychange._change", function (t) {
                        "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                    }), Y.event.add(this, "click._change", function (t) {
                        this._just_changed && !t.isTrigger && (this._just_changed = !1), Y.event.simulate("change", this, t, !0)
                    })), !1) : void Y.event.add(this, "beforeactivate._change", function (t) {
                        var e = t.target;
                        At.test(e.nodeName) && !Y._data(e, "changeBubbles") && (Y.event.add(e, "change._change", function (t) {
                            !this.parentNode || t.isSimulated || t.isTrigger || Y.event.simulate("change", this.parentNode, t, !0)
                        }), Y._data(e, "changeBubbles", !0))
                    })
                }, handle: function (t) {
                    var e = t.target;
                    return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
                }, teardown: function () {
                    return Y.event.remove(this, "._change"), !At.test(this.nodeName)
                }
            }), X.focusinBubbles || Y.each({focus: "focusin", blur: "focusout"}, function (t, e) {
                var n = function (t) {
                    Y.event.simulate(e, t.target, Y.event.fix(t), !0)
                };
                Y.event.special[e] = {
                    setup: function () {
                        var i = this.ownerDocument || this, a = Y._data(i, e);
                        a || i.addEventListener(t, n, !0), Y._data(i, e, (a || 0) + 1)
                    }, teardown: function () {
                        var i = this.ownerDocument || this, a = Y._data(i, e) - 1;
                        a ? Y._data(i, e, a) : (i.removeEventListener(t, n, !0), Y._removeData(i, e))
                    }
                }
            }), Y.fn.extend({
                on: function (t, e, n, i, a) {
                    var o, s;
                    if ("object" == typeof t) {
                        "string" != typeof e && (n = n || e, e = void 0);
                        for (o in t) this.on(o, e, n, t[o], a);
                        return this
                    }
                    if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), !1 === i) i = h; else if (!i) return this;
                    return 1 === a && (s = i, i = function (t) {
                        return Y().off(t), s.apply(this, arguments)
                    }, i.guid = s.guid || (s.guid = Y.guid++)), this.each(function () {
                        Y.event.add(this, t, i, n, e)
                    })
                }, one: function (t, e, n, i) {
                    return this.on(t, e, n, i, 1)
                }, off: function (t, e, n) {
                    var i, a;
                    if (t && t.preventDefault && t.handleObj) return i = t.handleObj, Y(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof t) {
                        for (a in t) this.off(a, e, t[a]);
                        return this
                    }
                    return (!1 === e || "function" == typeof e) && (n = e, e = void 0), !1 === n && (n = h), this.each(function () {
                        Y.event.remove(this, t, n, e)
                    })
                }, trigger: function (t, e) {
                    return this.each(function () {
                        Y.event.trigger(t, e, this)
                    })
                }, triggerHandler: function (t, e) {
                    var n = this[0];
                    return n ? Y.event.trigger(t, e, n, !0) : void 0
                }
            });
            var Tt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                Lt = / jQuery\d+="(?:null|\d+)"/g, Nt = new RegExp("<(?:" + Tt + ")[\\s/>]", "i"), Dt = /^\s+/,
                Mt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, It = /<([\w:]+)/,
                jt = /<tbody/i, Ut = /<|&#?\w+;/, Ot = /<(?:script|style|link)/i, Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Rt = /^$|\/(?:java|ecma)script/i, zt = /^true\/(.*)/, Ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Ht = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: X.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                }, Bt = f(rt).appendChild(rt.createElement("div"));
            Ht.optgroup = Ht.option, Ht.tbody = Ht.tfoot = Ht.colgroup = Ht.caption = Ht.thead, Ht.th = Ht.td, Y.extend({
                clone: function (t, e, n) {
                    var i, a, o, s, r, l = Y.contains(t.ownerDocument, t);
                    if (X.html5Clone || Y.isXMLDoc(t) || !Nt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Bt.innerHTML = t.outerHTML, Bt.removeChild(o = Bt.firstChild)), !(X.noCloneEvent && X.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Y.isXMLDoc(t))) for (i = g(o), r = g(t), s = 0; null != (a = r[s]); ++s) i[s] && k(a, i[s]);
                    if (e) if (n) for (r = r || g(t), i = i || g(o), s = 0; null != (a = r[s]); s++) w(a, i[s]); else w(t, o);
                    return (i = g(o, "script")).length > 0 && x(i, !l && g(t, "script")), i = r = a = null, o
                }, buildFragment: function (t, e, n, i) {
                    for (var a, o, s, r, l, u, c, d = t.length, h = f(e), p = [], v = 0; d > v; v++) if ((o = t[v]) || 0 === o) if ("object" === Y.type(o)) Y.merge(p, o.nodeType ? [o] : o); else if (Ut.test(o)) {
                        for (r = r || h.appendChild(e.createElement("div")), l = (It.exec(o) || ["", ""])[1].toLowerCase(), c = Ht[l] || Ht._default, r.innerHTML = c[1] + o.replace(Mt, "<$1></$2>") + c[2], a = c[0]; a--;) r = r.lastChild;
                        if (!X.leadingWhitespace && Dt.test(o) && p.push(e.createTextNode(Dt.exec(o)[0])), !X.tbody) for (a = (o = "table" !== l || jt.test(o) ? "<table>" !== c[1] || jt.test(o) ? 0 : r : r.firstChild) && o.childNodes.length; a--;) Y.nodeName(u = o.childNodes[a], "tbody") && !u.childNodes.length && o.removeChild(u);
                        for (Y.merge(p, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
                        r = h.lastChild
                    } else p.push(e.createTextNode(o));
                    for (r && h.removeChild(r), X.appendChecked || Y.grep(g(p, "input"), m), v = 0; o = p[v++];) if ((!i || -1 === Y.inArray(o, i)) && (s = Y.contains(o.ownerDocument, o), r = g(h.appendChild(o), "script"), s && x(r), n)) for (a = 0; o = r[a++];) Rt.test(o.type || "") && n.push(o);
                    return r = null, h
                }, cleanData: function (t, e) {
                    for (var n, i, a, o, s = 0, r = Y.expando, l = Y.cache, u = X.deleteExpando, c = Y.event.special; null != (n = t[s]); s++) if ((e || Y.acceptData(n)) && (a = n[r], o = a && l[a])) {
                        if (o.events) for (i in o.events) c[i] ? Y.event.remove(n, i) : Y.removeEvent(n, i, o.handle);
                        l[a] && (delete l[a], u ? delete n[r] : typeof n.removeAttribute !== gt ? n.removeAttribute(r) : n[r] = null, B.push(a))
                    }
                }
            }), Y.fn.extend({
                text: function (t) {
                    return wt(this, function (t) {
                        return void 0 === t ? Y.text(this) : this.empty().append((this[0] && this[0].ownerDocument || rt).createTextNode(t))
                    }, null, t, arguments.length)
                }, append: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            v(this, t).appendChild(t)
                        }
                    })
                }, prepend: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = v(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                }, before: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                }, after: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                }, remove: function (t, e) {
                    for (var n, i = t ? Y.filter(t, this) : this, a = 0; null != (n = i[a]); a++) e || 1 !== n.nodeType || Y.cleanData(g(n)), n.parentNode && (e && Y.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
                    return this
                }, empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && Y.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                        t.options && Y.nodeName(t, "select") && (t.options.length = 0)
                    }
                    return this
                }, clone: function (t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function () {
                        return Y.clone(this, t, e)
                    })
                }, html: function (t) {
                    return wt(this, function (t) {
                        var e = this[0] || {}, n = 0, i = this.length;
                        if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Lt, "") : void 0;
                        if (!("string" != typeof t || Ot.test(t) || !X.htmlSerialize && Nt.test(t) || !X.leadingWhitespace && Dt.test(t) || Ht[(It.exec(t) || ["", ""])[1].toLowerCase()])) {
                            t = t.replace(Mt, "<$1></$2>");
                            try {
                                for (; i > n; n++) 1 === (e = this[n] || {}).nodeType && (Y.cleanData(g(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) {
                            }
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                }, replaceWith: function () {
                    var t = arguments[0];
                    return this.domManip(arguments, function (e) {
                        t = this.parentNode, Y.cleanData(g(this)), t && t.replaceChild(e, this)
                    }), t && (t.length || t.nodeType) ? this : this.remove()
                }, detach: function (t) {
                    return this.remove(t, !0)
                }, domManip: function (t, e) {
                    t = W.apply([], t);
                    var n, i, a, o, s, r, l = 0, u = this.length, c = this, d = u - 1, h = t[0], p = Y.isFunction(h);
                    if (p || u > 1 && "string" == typeof h && !X.checkClone && Pt.test(h)) return this.each(function (n) {
                        var i = c.eq(n);
                        p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
                    });
                    if (u && (r = Y.buildFragment(t, this[0].ownerDocument, !1, this), n = r.firstChild, 1 === r.childNodes.length && (r = n), n)) {
                        for (a = (o = Y.map(g(r, "script"), y)).length; u > l; l++) i = r, l !== d && (i = Y.clone(i, !0, !0), a && Y.merge(o, g(i, "script"))), e.call(this[l], i, l);
                        if (a) for (s = o[o.length - 1].ownerDocument, Y.map(o, b), l = 0; a > l; l++) i = o[l], Rt.test(i.type || "") && !Y._data(i, "globalEval") && Y.contains(s, i) && (i.src ? Y._evalUrl && Y._evalUrl(i.src) : Y.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ft, "")));
                        r = n = null
                    }
                    return this
                }
            }), Y.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (t, e) {
                Y.fn[t] = function (t) {
                    for (var n, i = 0, a = [], o = Y(t), s = o.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), Y(o[i])[e](n), _.apply(a, n.get());
                    return this.pushStack(a)
                }
            });
            var qt, Wt = {};
            !function () {
                var t;
                X.shrinkWrapBlocks = function () {
                    if (null != t) return t;
                    t = !1;
                    var e, n, i;
                    return (n = rt.getElementsByTagName("body")[0]) && n.style ? (e = rt.createElement("div"), i = rt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== gt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(rt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
                }
            }();
            var _t, Gt, Vt = /^margin/, Kt = new RegExp("^(" + yt + ")(?!px)[a-z%]+$", "i"),
                Qt = /^(top|right|bottom|left)$/;
            t.getComputedStyle ? (_t = function (e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            }, Gt = function (t, e, n) {
                var i, a, o, s, r = t.style;
                return n = n || _t(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || Y.contains(t.ownerDocument, t) || (s = Y.style(t, e)), Kt.test(s) && Vt.test(e) && (i = r.width, a = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = s, s = n.width, r.width = i, r.minWidth = a, r.maxWidth = o)), void 0 === s ? s : s + ""
            }) : rt.documentElement.currentStyle && (_t = function (t) {
                return t.currentStyle
            }, Gt = function (t, e, n) {
                var i, a, o, s, r = t.style;
                return n = n || _t(t), null == (s = n ? n[e] : void 0) && r && r[e] && (s = r[e]), Kt.test(s) && !Qt.test(e) && (i = r.left, a = t.runtimeStyle, (o = a && a.left) && (a.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : s, s = r.pixelLeft + "px", r.left = i, o && (a.left = o)), void 0 === s ? s : s + "" || "auto"
            }), function () {
                function e() {
                    var e, n, i, a;
                    (n = rt.getElementsByTagName("body")[0]) && n.style && (e = rt.createElement("div"), i = rt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, a = e.appendChild(rt.createElement("div")), a.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", a.style.marginRight = a.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(a, null) || {}).marginRight), e.removeChild(a)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = e.getElementsByTagName("td"), a[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === a[0].offsetHeight) && (a[0].style.display = "", a[1].style.display = "none", r = 0 === a[0].offsetHeight), n.removeChild(i))
                }

                var n, i, a, o, s, r, l;
                (n = rt.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (i = (a = n.getElementsByTagName("a")[0]) && a.style) && (i.cssText = "float:left;opacity:.5", X.opacity = "0.5" === i.opacity, X.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", X.clearCloneStyle = "content-box" === n.style.backgroundClip, X.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, Y.extend(X, {
                    reliableHiddenOffsets: function () {
                        return null == r && e(), r
                    }, boxSizingReliable: function () {
                        return null == s && e(), s
                    }, pixelPosition: function () {
                        return null == o && e(), o
                    }, reliableMarginRight: function () {
                        return null == l && e(), l
                    }
                }))
            }(), Y.swap = function (t, e, n, i) {
                var a, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                a = n.apply(t, i || []);
                for (o in e) t.style[o] = s[o];
                return a
            };
            var Xt = /alpha\([^)]*\)/i, Yt = /opacity\s*=\s*([^)]*)/, Jt = /^(none|table(?!-c[ea]).+)/,
                Zt = new RegExp("^(" + yt + ")(.*)$", "i"), te = new RegExp("^([+-])=(" + yt + ")", "i"),
                ee = {position: "absolute", visibility: "hidden", display: "block"},
                ne = {letterSpacing: "0", fontWeight: "400"}, ie = ["Webkit", "O", "Moz", "ms"];
            Y.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var n = Gt(t, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {float: X.cssFloat ? "cssFloat" : "styleFloat"},
                style: function (t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var a, o, s, r = Y.camelCase(e), l = t.style;
                        if (e = Y.cssProps[r] || (Y.cssProps[r] = S(l, r)), s = Y.cssHooks[e] || Y.cssHooks[r], void 0 === n) return s && "get" in s && void 0 !== (a = s.get(t, !1, i)) ? a : l[e];
                        if ("string" === (o = typeof n) && (a = te.exec(n)) && (n = (a[1] + 1) * a[2] + parseFloat(Y.css(t, e)), o = "number"), null != n && n == n && ("number" !== o || Y.cssNumber[r] || (n += "px"), X.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                            l[e] = n
                        } catch (t) {
                        }
                    }
                },
                css: function (t, e, n, i) {
                    var a, o, s, r = Y.camelCase(e);
                    return e = Y.cssProps[r] || (Y.cssProps[r] = S(t.style, r)), (s = Y.cssHooks[e] || Y.cssHooks[r]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Gt(t, e, i)), "normal" === o && e in ne && (o = ne[e]), "" === n || n ? (a = parseFloat(o), !0 === n || Y.isNumeric(a) ? a || 0 : o) : o
                }
            }), Y.each(["height", "width"], function (t, e) {
                Y.cssHooks[e] = {
                    get: function (t, n, i) {
                        return n ? Jt.test(Y.css(t, "display")) && 0 === t.offsetWidth ? Y.swap(t, ee, function () {
                            return N(t, e, i)
                        }) : N(t, e, i) : void 0
                    }, set: function (t, n, i) {
                        var a = i && _t(t);
                        return T(0, n, i ? L(t, e, i, X.boxSizing && "border-box" === Y.css(t, "boxSizing", !1, a), a) : 0)
                    }
                }
            }), X.opacity || (Y.cssHooks.opacity = {
                get: function (t, e) {
                    return Yt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
                }, set: function (t, e) {
                    var n = t.style, i = t.currentStyle, a = Y.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                        o = i && i.filter || n.filter || "";
                    n.zoom = 1, (e >= 1 || "" === e) && "" === Y.trim(o.replace(Xt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = Xt.test(o) ? o.replace(Xt, a) : o + " " + a)
                }
            }), Y.cssHooks.marginRight = E(X.reliableMarginRight, function (t, e) {
                return e ? Y.swap(t, {display: "inline-block"}, Gt, [t, "marginRight"]) : void 0
            }), Y.each({margin: "", padding: "", border: "Width"}, function (t, e) {
                Y.cssHooks[t + e] = {
                    expand: function (n) {
                        for (var i = 0, a = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) a[t + bt[i] + e] = o[i] || o[i - 2] || o[0];
                        return a
                    }
                }, Vt.test(t) || (Y.cssHooks[t + e].set = T)
            }), Y.fn.extend({
                css: function (t, e) {
                    return wt(this, function (t, e, n) {
                        var i, a, o = {}, s = 0;
                        if (Y.isArray(e)) {
                            for (i = _t(t), a = e.length; a > s; s++) o[e[s]] = Y.css(t, e[s], !1, i);
                            return o
                        }
                        return void 0 !== n ? Y.style(t, e, n) : Y.css(t, e)
                    }, t, e, arguments.length > 1)
                }, show: function () {
                    return $(this, !0)
                }, hide: function () {
                    return $(this)
                }, toggle: function (t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                        xt(this) ? Y(this).show() : Y(this).hide()
                    })
                }
            }), Y.Tween = D, (D.prototype = {
                constructor: D, init: function (t, e, n, i, a, o) {
                    this.elem = t, this.prop = n, this.easing = a || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Y.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var t = D.propHooks[this.prop];
                    return t && t.get ? t.get(this) : D.propHooks._default.get(this)
                }, run: function (t) {
                    var e, n = D.propHooks[this.prop];
                    return this.pos = e = this.options.duration ? Y.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
                }
            }).init.prototype = D.prototype, (D.propHooks = {
                _default: {
                    get: function (t) {
                        var e;
                        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Y.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
                    }, set: function (t) {
                        Y.fx.step[t.prop] ? Y.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Y.cssProps[t.prop]] || Y.cssHooks[t.prop]) ? Y.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                    }
                }
            }).scrollTop = D.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, Y.easing = {
                linear: function (t) {
                    return t
                }, swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                }
            }, Y.fx = D.prototype.init, Y.fx.step = {};
            var ae, oe, se = /^(?:toggle|show|hide)$/, re = new RegExp("^(?:([+-])=|)(" + yt + ")([a-z%]*)$", "i"),
                le = /queueHooks$/, ue = [function (t, e, n) {
                    var i, a, o, s, r, l, u, c = this, d = {}, h = t.style, p = t.nodeType && xt(t), f = Y._data(t, "fxshow");
                    n.queue || (null == (r = Y._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function () {
                        r.unqueued || l()
                    }), r.unqueued++, c.always(function () {
                        c.always(function () {
                            r.unqueued--, Y.queue(t, "fx").length || r.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (u = Y.css(t, "display")) ? Y._data(t, "olddisplay") || C(t.nodeName) : u) && "none" === Y.css(t, "float") && (X.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", X.shrinkWrapBlocks() || c.always(function () {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    }));
                    for (i in e) if (a = e[i], se.exec(a)) {
                        if (delete e[i], o = o || "toggle" === a, a === (p ? "hide" : "show")) {
                            if ("show" !== a || !f || void 0 === f[i]) continue;
                            p = !0
                        }
                        d[i] = f && f[i] || Y.style(t, i)
                    } else u = void 0;
                    if (Y.isEmptyObject(d)) "inline" === ("none" === u ? C(t.nodeName) : u) && (h.display = u); else {
                        f ? "hidden" in f && (p = f.hidden) : f = Y._data(t, "fxshow", {}), o && (f.hidden = !p), p ? Y(t).show() : c.done(function () {
                            Y(t).hide()
                        }), c.done(function () {
                            var e;
                            Y._removeData(t, "fxshow");
                            for (e in d) Y.style(t, e, d[e])
                        });
                        for (i in d) s = j(p ? f[i] : 0, i, c), i in f || (f[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
                    }
                }], ce = {
                    "*": [function (t, e) {
                        var n = this.createTween(t, e), i = n.cur(), a = re.exec(e),
                            o = a && a[3] || (Y.cssNumber[t] ? "" : "px"),
                            s = (Y.cssNumber[t] || "px" !== o && +i) && re.exec(Y.css(n.elem, t)), r = 1, l = 20;
                        if (s && s[3] !== o) {
                            o = o || s[3], a = a || [], s = +i || 1;
                            do {
                                r = r || ".5", s /= r, Y.style(n.elem, t, s + o)
                            } while (r !== (r = n.cur() / i) && 1 !== r && --l)
                        }
                        return a && (s = n.start = +s || +i || 0, n.unit = o, n.end = a[1] ? s + (a[1] + 1) * a[2] : +a[2]), n
                    }]
                };
            Y.Animation = Y.extend(U, {
                tweener: function (t, e) {
                    Y.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, a = t.length; a > i; i++) n = t[i], ce[n] = ce[n] || [], ce[n].unshift(e)
                }, prefilter: function (t, e) {
                    e ? ue.unshift(t) : ue.push(t)
                }
            }), Y.speed = function (t, e, n) {
                var i = t && "object" == typeof t ? Y.extend({}, t) : {
                    complete: n || !n && e || Y.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !Y.isFunction(e) && e
                };
                return i.duration = Y.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Y.fx.speeds ? Y.fx.speeds[i.duration] : Y.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    Y.isFunction(i.old) && i.old.call(this), i.queue && Y.dequeue(this, i.queue)
                }, i
            }, Y.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(xt).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
                }, animate: function (t, e, n, i) {
                    var a = Y.isEmptyObject(t), o = Y.speed(e, n, i), s = function () {
                        var e = U(this, Y.extend({}, t), o);
                        (a || Y._data(this, "finish")) && e.stop(!0)
                    };
                    return s.finish = s, a || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                }, stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                        var e = !0, a = null != t && t + "queueHooks", o = Y.timers, s = Y._data(this);
                        if (a) s[a] && s[a].stop && i(s[a]); else for (a in s) s[a] && s[a].stop && le.test(a) && i(s[a]);
                        for (a = o.length; a--;) o[a].elem !== this || null != t && o[a].queue !== t || (o[a].anim.stop(n), e = !1, o.splice(a, 1));
                        (e || !n) && Y.dequeue(this, t)
                    })
                }, finish: function (t) {
                    return !1 !== t && (t = t || "fx"), this.each(function () {
                        var e, n = Y._data(this), i = n[t + "queue"], a = n[t + "queueHooks"], o = Y.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, Y.queue(this, t, []), a && a.stop && a.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), Y.each(["toggle", "show", "hide"], function (t, e) {
                var n = Y.fn[e];
                Y.fn[e] = function (t, i, a) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(I(e, !0), t, i, a)
                }
            }), Y.each({
                slideDown: I("show"),
                slideUp: I("hide"),
                slideToggle: I("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (t, e) {
                Y.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), Y.timers = [], Y.fx.tick = function () {
                var t, e = Y.timers, n = 0;
                for (ae = Y.now(); n < e.length; n++) (t = e[n])() || e[n] !== t || e.splice(n--, 1);
                e.length || Y.fx.stop(), ae = void 0
            }, Y.fx.timer = function (t) {
                Y.timers.push(t), t() ? Y.fx.start() : Y.timers.pop()
            }, Y.fx.interval = 13, Y.fx.start = function () {
                oe || (oe = setInterval(Y.fx.tick, Y.fx.interval))
            }, Y.fx.stop = function () {
                clearInterval(oe), oe = null
            }, Y.fx.speeds = {slow: 600, fast: 200, _default: 400}, Y.fn.delay = function (t, e) {
                return t = Y.fx ? Y.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function () {
                        clearTimeout(i)
                    }
                })
            }, function () {
                var t, e, n, i, a;
                (e = rt.createElement("div")).setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], a = (n = rt.createElement("select")).appendChild(rt.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", X.getSetAttribute = "t" !== e.className, X.style = /top/.test(i.getAttribute("style")), X.hrefNormalized = "/a" === i.getAttribute("href"), X.checkOn = !!t.value, X.optSelected = a.selected, X.enctype = !!rt.createElement("form").enctype, n.disabled = !0, X.optDisabled = !a.disabled, (t = rt.createElement("input")).setAttribute("value", ""), X.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), X.radioValue = "t" === t.value
            }();
            var de = /\r/g;
            Y.fn.extend({
                val: function (t) {
                    var e, n, i, a = this[0];
                    return arguments.length ? (i = Y.isFunction(t), this.each(function (n) {
                        var a;
                        1 === this.nodeType && (null == (a = i ? t.call(this, n, Y(this).val()) : t) ? a = "" : "number" == typeof a ? a += "" : Y.isArray(a) && (a = Y.map(a, function (t) {
                            return null == t ? "" : t + ""
                        })), (e = Y.valHooks[this.type] || Y.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, a, "value") || (this.value = a))
                    })) : a ? (e = Y.valHooks[a.type] || Y.valHooks[a.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(a, "value")) ? n : "string" == typeof(n = a.value) ? n.replace(de, "") : null == n ? "" : n : void 0
                }
            }), Y.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = Y.find.attr(t, "value");
                            return null != e ? e : Y.trim(Y.text(t))
                        }
                    }, select: {
                        get: function (t) {
                            for (var e, n, i = t.options, a = t.selectedIndex, o = "select-one" === t.type || 0 > a, s = o ? null : [], r = o ? a + 1 : i.length, l = 0 > a ? r : o ? a : 0; r > l; l++) if (!(!(n = i[l]).selected && l !== a || (X.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Y.nodeName(n.parentNode, "optgroup"))) {
                                if (e = Y(n).val(), o) return e;
                                s.push(e)
                            }
                            return s
                        }, set: function (t, e) {
                            for (var n, i, a = t.options, o = Y.makeArray(e), s = a.length; s--;) if (i = a[s], Y.inArray(Y.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            } catch (t) {
                                i.scrollHeight
                            } else i.selected = !1;
                            return n || (t.selectedIndex = -1), a
                        }
                    }
                }
            }), Y.each(["radio", "checkbox"], function () {
                Y.valHooks[this] = {
                    set: function (t, e) {
                        return Y.isArray(e) ? t.checked = Y.inArray(Y(t).val(), e) >= 0 : void 0
                    }
                }, X.checkOn || (Y.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            });
            var he, pe, fe = Y.expr.attrHandle, ge = /^(?:checked|selected)$/i, me = X.getSetAttribute, ve = X.input;
            Y.fn.extend({
                attr: function (t, e) {
                    return wt(this, Y.attr, t, e, arguments.length > 1)
                }, removeAttr: function (t) {
                    return this.each(function () {
                        Y.removeAttr(this, t)
                    })
                }
            }), Y.extend({
                attr: function (t, e, n) {
                    var i, a, o = t.nodeType;
                    if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === gt ? Y.prop(t, e, n) : (1 === o && Y.isXMLDoc(t) || (e = e.toLowerCase(), i = Y.attrHooks[e] || (Y.expr.match.bool.test(e) ? pe : he)), void 0 === n ? i && "get" in i && null !== (a = i.get(t, e)) ? a : null == (a = Y.find.attr(t, e)) ? void 0 : a : null !== n ? i && "set" in i && void 0 !== (a = i.set(t, n, e)) ? a : (t.setAttribute(e, n + ""), n) : void Y.removeAttr(t, e))
                }, removeAttr: function (t, e) {
                    var n, i, a = 0, o = e && e.match(dt);
                    if (o && 1 === t.nodeType) for (; n = o[a++];) i = Y.propFix[n] || n, Y.expr.match.bool.test(n) ? ve && me || !ge.test(n) ? t[i] = !1 : t[Y.camelCase("default-" + n)] = t[i] = !1 : Y.attr(t, n, ""), t.removeAttribute(me ? n : i)
                }, attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!X.radioValue && "radio" === e && Y.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                }
            }), pe = {
                set: function (t, e, n) {
                    return !1 === e ? Y.removeAttr(t, n) : ve && me || !ge.test(n) ? t.setAttribute(!me && Y.propFix[n] || n, n) : t[Y.camelCase("default-" + n)] = t[n] = !0, n
                }
            }, Y.each(Y.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var n = fe[e] || Y.find.attr;
                fe[e] = ve && me || !ge.test(e) ? function (t, e, i) {
                    var a, o;
                    return i || (o = fe[e], fe[e] = a, a = null != n(t, e, i) ? e.toLowerCase() : null, fe[e] = o), a
                } : function (t, e, n) {
                    return n ? void 0 : t[Y.camelCase("default-" + e)] ? e.toLowerCase() : null
                }
            }), ve && me || (Y.attrHooks.value = {
                set: function (t, e, n) {
                    return Y.nodeName(t, "input") ? void(t.defaultValue = e) : he && he.set(t, e, n)
                }
            }), me || (he = {
                set: function (t, e, n) {
                    var i = t.getAttributeNode(n);
                    return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
                }
            }, fe.id = fe.name = fe.coords = function (t, e, n) {
                var i;
                return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
            }, Y.valHooks.button = {
                get: function (t, e) {
                    var n = t.getAttributeNode(e);
                    return n && n.specified ? n.value : void 0
                }, set: he.set
            }, Y.attrHooks.contenteditable = {
                set: function (t, e, n) {
                    he.set(t, "" !== e && e, n)
                }
            }, Y.each(["width", "height"], function (t, e) {
                Y.attrHooks[e] = {
                    set: function (t, n) {
                        return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                    }
                }
            })), X.style || (Y.attrHooks.style = {
                get: function (t) {
                    return t.style.cssText || void 0
                }, set: function (t, e) {
                    return t.style.cssText = e + ""
                }
            });
            var ye = /^(?:input|select|textarea|button|object)$/i, be = /^(?:a|area)$/i;
            Y.fn.extend({
                prop: function (t, e) {
                    return wt(this, Y.prop, t, e, arguments.length > 1)
                }, removeProp: function (t) {
                    return t = Y.propFix[t] || t, this.each(function () {
                        try {
                            this[t] = void 0, delete this[t]
                        } catch (t) {
                        }
                    })
                }
            }), Y.extend({
                propFix: {for: "htmlFor", class: "className"}, prop: function (t, e, n) {
                    var i, a, o = t.nodeType;
                    if (t && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !Y.isXMLDoc(t)) && (e = Y.propFix[e] || e, a = Y.propHooks[e]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(t, n, e)) ? i : t[e] = n : a && "get" in a && null !== (i = a.get(t, e)) ? i : t[e]
                }, propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var e = Y.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : ye.test(t.nodeName) || be.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                }
            }), X.hrefNormalized || Y.each(["href", "src"], function (t, e) {
                Y.propHooks[e] = {
                    get: function (t) {
                        return t.getAttribute(e, 4)
                    }
                }
            }), X.optSelected || (Y.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
                }
            }), Y.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                Y.propFix[this.toLowerCase()] = this
            }), X.enctype || (Y.propFix.enctype = "encoding");
            var xe = /[\t\r\n\f]/g;
            Y.fn.extend({
                addClass: function (t) {
                    var e, n, i, a, o, s, r = 0, l = this.length, u = "string" == typeof t && t;
                    if (Y.isFunction(t)) return this.each(function (e) {
                        Y(this).addClass(t.call(this, e, this.className))
                    });
                    if (u) for (e = (t || "").match(dt) || []; l > r; r++) if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(xe, " ") : " ")) {
                        for (o = 0; a = e[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        s = Y.trim(i), n.className !== s && (n.className = s)
                    }
                    return this
                }, removeClass: function (t) {
                    var e, n, i, a, o, s, r = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
                    if (Y.isFunction(t)) return this.each(function (e) {
                        Y(this).removeClass(t.call(this, e, this.className))
                    });
                    if (u) for (e = (t || "").match(dt) || []; l > r; r++) if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(xe, " ") : "")) {
                        for (o = 0; a = e[o++];) for (; i.indexOf(" " + a + " ") >= 0;) i = i.replace(" " + a + " ", " ");
                        s = t ? Y.trim(i) : "", n.className !== s && (n.className = s)
                    }
                    return this
                }, toggleClass: function (t, e) {
                    var n = typeof t;
                    return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(Y.isFunction(t) ? function (n) {
                        Y(this).toggleClass(t.call(this, n, this.className, e), e)
                    } : function () {
                        if ("string" === n) for (var e, i = 0, a = Y(this), o = t.match(dt) || []; e = o[i++];) a.hasClass(e) ? a.removeClass(e) : a.addClass(e); else (n === gt || "boolean" === n) && (this.className && Y._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : Y._data(this, "__className__") || "")
                    })
                }, hasClass: function (t) {
                    for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xe, " ").indexOf(e) >= 0) return !0;
                    return !1
                }
            }), Y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
                Y.fn[e] = function (t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }), Y.fn.extend({
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }, bind: function (t, e, n) {
                    return this.on(t, null, e, n)
                }, unbind: function (t, e) {
                    return this.off(t, null, e)
                }, delegate: function (t, e, n, i) {
                    return this.on(e, t, n, i)
                }, undelegate: function (t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            });
            var we = Y.now(), ke = /\?/,
                Ae = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            Y.parseJSON = function (e) {
                if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
                var n, i = null, a = Y.trim(e + "");
                return a && !Y.trim(a.replace(Ae, function (t, e, a, o) {
                    return n && e && (i = 0), 0 === i ? t : (n = a || e, i += !o - !a, "")
                })) ? Function("return " + a)() : Y.error("Invalid JSON: " + e)
            }, Y.parseXML = function (e) {
                var n, i;
                if (!e || "string" != typeof e) return null;
                try {
                    t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
                } catch (t) {
                    n = void 0
                }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || Y.error("Invalid XML: " + e), n
            };
            var Ce, Ee, Se = /#.*$/, $e = /([?&])_=[^&]*/, Te = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Le = /^(?:GET|HEAD)$/,
                Ne = /^\/\//, De = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Me = {}, Ie = {},
                je = "*/".concat("*");
            try {
                Ee = location.href
            } catch (t) {
                (Ee = rt.createElement("a")).href = "", Ee = Ee.href
            }
            Ce = De.exec(Ee.toLowerCase()) || [], Y.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ee,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ce[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": je,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": Y.parseJSON, "text xml": Y.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (t, e) {
                    return e ? R(R(t, Y.ajaxSettings), e) : R(Y.ajaxSettings, t)
                },
                ajaxPrefilter: O(Me),
                ajaxTransport: O(Ie),
                ajax: function (t, e) {
                    function n(t, e, n, i) {
                        var a, c, v, y, x, k = e;
                        2 !== b && (b = 2, r && clearTimeout(r), u = void 0, s = i || "", w.readyState = t > 0 ? 4 : 0, a = t >= 200 && 300 > t || 304 === t, n && (y = function (t, e, n) {
                            for (var i, a, o, s, r = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === a && (a = t.mimeType || e.getResponseHeader("Content-Type"));
                            if (a) for (s in r) if (r[s] && r[s].test(a)) {
                                l.unshift(s);
                                break
                            }
                            if (l[0] in n) o = l[0]; else {
                                for (s in n) {
                                    if (!l[0] || t.converters[s + " " + l[0]]) {
                                        o = s;
                                        break
                                    }
                                    i || (i = s)
                                }
                                o = o || i
                            }
                            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
                        }(d, w, n)), y = function (t, e, n, i) {
                            var a, o, s, r, l, u = {}, c = t.dataTypes.slice();
                            if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                            for (o = c.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                                if (!(s = u[l + " " + o] || u["* " + o])) for (a in u) if ((r = a.split(" "))[1] === o && (s = u[l + " " + r[0]] || u["* " + r[0]])) {
                                    !0 === s ? s = u[a] : !0 !== u[a] && (o = r[0], c.unshift(r[1]));
                                    break
                                }
                                if (!0 !== s) if (s && t.throws) e = s(e); else try {
                                    e = s(e)
                                } catch (t) {
                                    return {state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o}
                                }
                            }
                            return {state: "success", data: e}
                        }(d, y, w, a), a ? (d.ifModified && ((x = w.getResponseHeader("Last-Modified")) && (Y.lastModified[o] = x), (x = w.getResponseHeader("etag")) && (Y.etag[o] = x)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, c = y.data, v = y.error, a = !v)) : (v = k, (t || !k) && (k = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || k) + "", a ? f.resolveWith(h, [c, k, w]) : f.rejectWith(h, [w, k, v]), w.statusCode(m), m = void 0, l && p.trigger(a ? "ajaxSuccess" : "ajaxError", [w, d, a ? c : v]), g.fireWith(h, [w, k]), l && (p.trigger("ajaxComplete", [w, d]), --Y.active || Y.event.trigger("ajaxStop")))
                    }

                    "object" == typeof t && (e = t, t = void 0), e = e || {};
                    var i, a, o, s, r, l, u, c, d = Y.ajaxSetup({}, e), h = d.context || d,
                        p = d.context && (h.nodeType || h.jquery) ? Y(h) : Y.event, f = Y.Deferred(),
                        g = Y.Callbacks("once memory"), m = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                            readyState: 0, getResponseHeader: function (t) {
                                var e;
                                if (2 === b) {
                                    if (!c) for (c = {}; e = Te.exec(s);) c[e[1].toLowerCase()] = e[2];
                                    e = c[t.toLowerCase()]
                                }
                                return null == e ? null : e
                            }, getAllResponseHeaders: function () {
                                return 2 === b ? s : null
                            }, setRequestHeader: function (t, e) {
                                var n = t.toLowerCase();
                                return b || (t = y[n] = y[n] || t, v[t] = e), this
                            }, overrideMimeType: function (t) {
                                return b || (d.mimeType = t), this
                            }, statusCode: function (t) {
                                var e;
                                if (t) if (2 > b) for (e in t) m[e] = [m[e], t[e]]; else w.always(t[w.status]);
                                return this
                            }, abort: function (t) {
                                var e = t || x;
                                return u && u.abort(e), n(0, e), this
                            }
                        };
                    if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((t || d.url || Ee) + "").replace(Se, "").replace(Ne, Ce[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = Y.trim(d.dataType || "*").toLowerCase().match(dt) || [""], null == d.crossDomain && (i = De.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ce[1] && i[2] === Ce[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ce[3] || ("http:" === Ce[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = Y.param(d.data, d.traditional)), P(Me, d, e, w), 2 === b) return w;
                    (l = Y.event && d.global) && 0 == Y.active++ && Y.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Le.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (ke.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = $e.test(o) ? o.replace($e, "$1_=" + we++) : o + (ke.test(o) ? "&" : "?") + "_=" + we++)), d.ifModified && (Y.lastModified[o] && w.setRequestHeader("If-Modified-Since", Y.lastModified[o]), Y.etag[o] && w.setRequestHeader("If-None-Match", Y.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || e.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + je + "; q=0.01" : "") : d.accepts["*"]);
                    for (a in d.headers) w.setRequestHeader(a, d.headers[a]);
                    if (d.beforeSend && (!1 === d.beforeSend.call(h, w, d) || 2 === b)) return w.abort();
                    x = "abort";
                    for (a in{success: 1, error: 1, complete: 1}) w[a](d[a]);
                    if (u = P(Ie, d, e, w)) {
                        w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (r = setTimeout(function () {
                            w.abort("timeout")
                        }, d.timeout));
                        try {
                            b = 1, u.send(v, n)
                        } catch (t) {
                            if (!(2 > b)) throw t;
                            n(-1, t)
                        }
                    } else n(-1, "No Transport");
                    return w
                },
                getJSON: function (t, e, n) {
                    return Y.get(t, e, n, "json")
                },
                getScript: function (t, e) {
                    return Y.get(t, void 0, e, "script")
                }
            }), Y.each(["get", "post"], function (t, e) {
                Y[e] = function (t, n, i, a) {
                    return Y.isFunction(n) && (a = a || i, i = n, n = void 0), Y.ajax({
                        url: t,
                        type: e,
                        dataType: a,
                        data: n,
                        success: i
                    })
                }
            }), Y._evalUrl = function (t) {
                return Y.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
            }, Y.fn.extend({
                wrapAll: function (t) {
                    if (Y.isFunction(t)) return this.each(function (e) {
                        Y(this).wrapAll(t.call(this, e))
                    });
                    if (this[0]) {
                        var e = Y(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                            return t
                        }).append(this)
                    }
                    return this
                }, wrapInner: function (t) {
                    return this.each(Y.isFunction(t) ? function (e) {
                        Y(this).wrapInner(t.call(this, e))
                    } : function () {
                        var e = Y(this), n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                }, wrap: function (t) {
                    var e = Y.isFunction(t);
                    return this.each(function (n) {
                        Y(this).wrapAll(e ? t.call(this, n) : t)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        Y.nodeName(this, "body") || Y(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), Y.expr.filters.hidden = function (t) {
                return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !X.reliableHiddenOffsets() && "none" === (t.style && t.style.display || Y.css(t, "display"))
            }, Y.expr.filters.visible = function (t) {
                return !Y.expr.filters.hidden(t)
            };
            var Ue = /%20/g, Oe = /\[\]$/, Pe = /\r?\n/g, Re = /^(?:submit|button|image|reset|file)$/i,
                ze = /^(?:input|select|textarea|keygen)/i;
            Y.param = function (t, e) {
                var n, i = [], a = function (t, e) {
                    e = Y.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
                if (void 0 === e && (e = Y.ajaxSettings && Y.ajaxSettings.traditional), Y.isArray(t) || t.jquery && !Y.isPlainObject(t)) Y.each(t, function () {
                    a(this.name, this.value)
                }); else for (n in t) z(n, t[n], e, a);
                return i.join("&").replace(Ue, "+")
            }, Y.fn.extend({
                serialize: function () {
                    return Y.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var t = Y.prop(this, "elements");
                        return t ? Y.makeArray(t) : this
                    }).filter(function () {
                        var t = this.type;
                        return this.name && !Y(this).is(":disabled") && ze.test(this.nodeName) && !Re.test(t) && (this.checked || !kt.test(t))
                    }).map(function (t, e) {
                        var n = Y(this).val();
                        return null == n ? null : Y.isArray(n) ? Y.map(n, function (t) {
                            return {name: e.name, value: t.replace(Pe, "\r\n")}
                        }) : {name: e.name, value: n.replace(Pe, "\r\n")}
                    }).get()
                }
            }), Y.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && F() || function () {
                    try {
                        return new t.ActiveXObject("Microsoft.XMLHTTP")
                    } catch (t) {
                    }
                }()
            } : F;
            var Fe = 0, He = {}, Be = Y.ajaxSettings.xhr();
            t.attachEvent && t.attachEvent("onunload", function () {
                for (var t in He) He[t](void 0, !0)
            }), X.cors = !!Be && "withCredentials" in Be, (Be = X.ajax = !!Be) && Y.ajaxTransport(function (t) {
                if (!t.crossDomain || X.cors) {
                    var e;
                    return {
                        send: function (n, i) {
                            var a, o = t.xhr(), s = ++Fe;
                            if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) o[a] = t.xhrFields[a];
                            t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            for (a in n) void 0 !== n[a] && o.setRequestHeader(a, n[a] + "");
                            o.send(t.hasContent && t.data || null), e = function (n, a) {
                                var r, l, u;
                                if (e && (a || 4 === o.readyState)) if (delete He[s], e = void 0, o.onreadystatechange = Y.noop, a) 4 !== o.readyState && o.abort(); else {
                                    u = {}, r = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (t) {
                                        l = ""
                                    }
                                    r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404
                                }
                                u && i(r, l, u, o.getAllResponseHeaders())
                            }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = He[s] = e : e()
                        }, abort: function () {
                            e && e(void 0, !0)
                        }
                    }
                }
            }), Y.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /(?:java|ecma)script/},
                converters: {
                    "text script": function (t) {
                        return Y.globalEval(t), t
                    }
                }
            }), Y.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
            }), Y.ajaxTransport("script", function (t) {
                if (t.crossDomain) {
                    var e, n = rt.head || Y("head")[0] || rt.documentElement;
                    return {
                        send: function (i, a) {
                            (e = rt.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                                (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || a(200, "success"))
                            }, n.insertBefore(e, n.firstChild)
                        }, abort: function () {
                            e && e.onload(void 0, !0)
                        }
                    }
                }
            });
            var qe = [], We = /(=)\?(?=&|$)|\?\?/;
            Y.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var t = qe.pop() || Y.expando + "_" + we++;
                    return this[t] = !0, t
                }
            }), Y.ajaxPrefilter("json jsonp", function (e, n, i) {
                var a, o, s,
                    r = !1 !== e.jsonp && (We.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && We.test(e.data) && "data");
                return r || "jsonp" === e.dataTypes[0] ? (a = e.jsonpCallback = Y.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(We, "$1" + a) : !1 !== e.jsonp && (e.url += (ke.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function () {
                    return s || Y.error(a + " was not called"), s[0]
                }, e.dataTypes[0] = "json", o = t[a], t[a] = function () {
                    s = arguments
                }, i.always(function () {
                    t[a] = o, e[a] && (e.jsonpCallback = n.jsonpCallback, qe.push(a)), s && Y.isFunction(o) && o(s[0]), s = o = void 0
                }), "script") : void 0
            }), Y.parseHTML = function (t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || rt;
                var i = at.exec(t), a = !n && [];
                return i ? [e.createElement(i[1])] : (i = Y.buildFragment([t], e, a), a && a.length && Y(a).remove(), Y.merge([], i.childNodes))
            };
            var _e = Y.fn.load;
            Y.fn.load = function (t, e, n) {
                if ("string" != typeof t && _e) return _e.apply(this, arguments);
                var i, a, o, s = this, r = t.indexOf(" ");
                return r >= 0 && (i = Y.trim(t.slice(r, t.length)), t = t.slice(0, r)), Y.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && Y.ajax({
                    url: t,
                    type: o,
                    dataType: "html",
                    data: e
                }).done(function (t) {
                    a = arguments, s.html(i ? Y("<div>").append(Y.parseHTML(t)).find(i) : t)
                }).complete(n && function (t, e) {
                    s.each(n, a || [t.responseText, e, t])
                }), this
            }, Y.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                Y.fn[e] = function (t) {
                    return this.on(e, t)
                }
            }), Y.expr.filters.animated = function (t) {
                return Y.grep(Y.timers, function (e) {
                    return t === e.elem
                }).length
            };
            var Ge = t.document.documentElement;
            Y.offset = {
                setOffset: function (t, e, n) {
                    var i, a, o, s, r, l, u = Y.css(t, "position"), c = Y(t), d = {};
                    "static" === u && (t.style.position = "relative"), r = c.offset(), o = Y.css(t, "top"), l = Y.css(t, "left"), ("absolute" === u || "fixed" === u) && Y.inArray("auto", [o, l]) > -1 ? (i = c.position(), s = i.top, a = i.left) : (s = parseFloat(o) || 0, a = parseFloat(l) || 0), Y.isFunction(e) && (e = e.call(t, n, r)), null != e.top && (d.top = e.top - r.top + s), null != e.left && (d.left = e.left - r.left + a), "using" in e ? e.using.call(t, d) : c.css(d)
                }
            }, Y.fn.extend({
                offset: function (t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                        Y.offset.setOffset(this, t, e)
                    });
                    var e, n, i = {top: 0, left: 0}, a = this[0], o = a && a.ownerDocument;
                    return o ? (e = o.documentElement, Y.contains(e, a) ? (typeof a.getBoundingClientRect !== gt && (i = a.getBoundingClientRect()), n = H(o), {
                        top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }) : i) : void 0
                }, position: function () {
                    if (this[0]) {
                        var t, e, n = {top: 0, left: 0}, i = this[0];
                        return "fixed" === Y.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Y.nodeName(t[0], "html") || (n = t.offset()), n.top += Y.css(t[0], "borderTopWidth", !0), n.left += Y.css(t[0], "borderLeftWidth", !0)), {
                            top: e.top - n.top - Y.css(i, "marginTop", !0),
                            left: e.left - n.left - Y.css(i, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent || Ge; t && !Y.nodeName(t, "html") && "static" === Y.css(t, "position");) t = t.offsetParent;
                        return t || Ge
                    })
                }
            }), Y.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
                var n = /Y/.test(e);
                Y.fn[t] = function (i) {
                    return wt(this, function (t, i, a) {
                        var o = H(t);
                        return void 0 === a ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? Y(o).scrollLeft() : a, n ? a : Y(o).scrollTop()) : t[i] = a)
                    }, t, i, arguments.length, null)
                }
            }), Y.each(["top", "left"], function (t, e) {
                Y.cssHooks[e] = E(X.pixelPosition, function (t, n) {
                    return n ? (n = Gt(t, e), Kt.test(n) ? Y(t).position()[e] + "px" : n) : void 0
                })
            }), Y.each({Height: "height", Width: "width"}, function (t, e) {
                Y.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                    Y.fn[i] = function (i, a) {
                        var o = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === a ? "margin" : "border");
                        return wt(this, function (e, n, i) {
                            var a;
                            return Y.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (a = e.documentElement, Math.max(e.body["scroll" + t], a["scroll" + t], e.body["offset" + t], a["offset" + t], a["client" + t])) : void 0 === i ? Y.css(e, n, s) : Y.style(e, n, i, s)
                        }, e, o ? i : void 0, o, null)
                    }
                })
            }), Y.fn.size = function () {
                return this.length
            }, Y.fn.andSelf = Y.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return Y
            });
            var Ve = t.jQuery, Ke = t.$;
            return Y.noConflict = function (e) {
                return t.$ === Y && (t.$ = Ke), e && t.jQuery === Y && (t.jQuery = Ve), Y
            }, typeof e === gt && (t.jQuery = t.$ = Y), Y
        }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
    +function (t) {
        "use strict";
        var e = jQuery.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
    }(), function (t) {
        "use strict";
        t.fn.emulateTransitionEnd = function (e) {
            var n = !1, i = this;
            t(this).one("bsTransitionEnd", function () {
                n = !0
            });
            return setTimeout(function () {
                n || t(i).trigger(t.support.transition.end)
            }, e), this
        }, t(function () {
            t.support.transition = function () {
                var t = document.createElement("bootstrap"), e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (var n in e) if (void 0 !== t.style[n]) return {end: e[n]};
                return !1
            }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery), function (t) {
        "use strict";
        var e = '[data-dismiss="alert"]', n = function (n) {
            t(n).on("click", e, this.close)
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
            function i() {
                s.detach().trigger("closed.bs.alert").remove()
            }

            var a = t(this), o = a.attr("data-target");
            o || (o = (o = a.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
            var s = t("#" === o ? [] : o);
            e && e.preventDefault(), s.length || (s = a.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
        };
        var i = t.fn.alert;
        t.fn.alert = function (e) {
            return this.each(function () {
                var i = t(this), a = i.data("bs.alert");
                a || i.data("bs.alert", a = new n(this)), "string" == typeof e && a[e].call(i)
            })
        }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
            return t.fn.alert = i, this
        }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
    }(jQuery), function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var i = t(this), a = i.data("bs.button"), o = "object" == typeof e && e;
                a || i.data("bs.button", a = new n(this, o)), "toggle" == e ? a.toggle() : e && a.setState(e)
            })
        }

        var n = function (e, i) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
        };
        n.VERSION = "3.3.7", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
            var n = "disabled", i = this.$element, a = i.is("input") ? "val" : "html", o = i.data();
            e += "Text", null == o.resetText && i.data("resetText", i[a]()), setTimeout(t.proxy(function () {
                i[a](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
            }, this), 0)
        }, n.prototype.toggle = function () {
            var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var i = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
            return t.fn.button = i, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
            var i = t(n.target).closest(".btn");
            e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery), function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var i = t(this), a = i.data("bs.carousel"),
                    o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                    s = "string" == typeof e ? e : o.slide;
                a || i.data("bs.carousel", a = new n(this, o)), "number" == typeof e ? a.to(e) : s ? a[s]() : o.interval && a.pause().cycle()
            })
        }

        var n = function (e, n) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, n.prototype.keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, n.prototype.cycle = function (e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, n.prototype.getItemIndex = function (t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, n.prototype.getItemForDirection = function (t, e) {
            var n = this.getItemIndex(e);
            if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
            var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
            return this.$items.eq(i)
        }, n.prototype.to = function (t) {
            var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
        }, n.prototype.pause = function (e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, n.prototype.next = function () {
            if (!this.sliding) return this.slide("next")
        }, n.prototype.prev = function () {
            if (!this.sliding) return this.slide("prev")
        }, n.prototype.slide = function (e, i) {
            var a = this.$element.find(".item.active"), o = i || this.getItemForDirection(e, a), s = this.interval,
                r = "next" == e ? "left" : "right", l = this;
            if (o.hasClass("active")) return this.sliding = !1;
            var u = o[0], c = t.Event("slide.bs.carousel", {relatedTarget: u, direction: r});
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var d = t(this.$indicators.children()[this.getItemIndex(o)]);
                    d && d.addClass("active")
                }
                var h = t.Event("slid.bs.carousel", {relatedTarget: u, direction: r});
                return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, a.addClass(r), o.addClass(r), a.one("bsTransitionEnd", function () {
                    o.removeClass([e, r].join(" ")).addClass("active"), a.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                        l.$element.trigger(h)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (a.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
            }
        };
        var i = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
            return t.fn.carousel = i, this
        };
        var a = function (n) {
            var i, a = t(this), o = t(a.attr("data-target") || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (o.hasClass("carousel")) {
                var s = t.extend({}, o.data(), a.data()), r = a.attr("data-slide-to");
                r && (s.interval = !1), e.call(o, s), r && o.data("bs.carousel").to(r), n.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), t(window).on("load", function () {
            t('[data-ride="carousel"]').each(function () {
                var n = t(this);
                e.call(n, n.data())
            })
        })
    }(jQuery), function (t) {
        "use strict";

        function e(e) {
            var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(i)
        }

        function n(e) {
            return this.each(function () {
                var n = t(this), a = n.data("bs.collapse"),
                    o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                !a && o.toggle && /show|hide/.test(e) && (o.toggle = !1), a || n.data("bs.collapse", a = new i(this, o)), "string" == typeof e && a[e]()
            })
        }

        var i = function (e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
            return this.$element.hasClass("width") ? "width" : "height"
        }, i.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(a && a.length && (e = a.data("bs.collapse")) && e.transitioning)) {
                    var o = t.Event("show.bs.collapse");
                    if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                        a && a.length && (n.call(a, "hide"), e || a.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var r = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return r.call(this);
                        var l = t.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                    }
                }
            }
        }, i.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var a = function () {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    this.$element[n](0).one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
                }
            }
        }, i.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, i.prototype.getParent = function () {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
                var a = t(i);
                this.addAriaAndCollapsedClass(e(a), a)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var a = t.fn.collapse;
        t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
            return t.fn.collapse = a, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
            var a = t(this);
            a.attr("data-target") || i.preventDefault();
            var o = e(a), s = o.data("bs.collapse") ? "toggle" : a.data();
            n.call(o, s)
        })
    }(jQuery), function (t) {
        "use strict";

        function e(e) {
            var n = e.attr("data-target");
            n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }

        function n(n) {
            n && 3 === n.which || (t(i).remove(), t(a).each(function () {
                var i = t(this), a = e(i), o = {relatedTarget: this};
                a.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(a[0], n.target) || (a.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), a.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
            }))
        }

        var i = ".dropdown-backdrop", a = '[data-toggle="dropdown"]', o = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
        o.VERSION = "3.3.7", o.prototype.toggle = function (i) {
            var a = t(this);
            if (!a.is(".disabled, :disabled")) {
                var o = e(a), s = o.hasClass("open");
                if (n(), !s) {
                    "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                    var r = {relatedTarget: this};
                    if (o.trigger(i = t.Event("show.bs.dropdown", r)), i.isDefaultPrevented()) return;
                    a.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
                }
                return !1
            }
        }, o.prototype.keydown = function (n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var i = t(this);
                if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var o = e(i), s = o.hasClass("open");
                    if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && o.find(a).trigger("focus"), i.trigger("click");
                    var r = o.find(".dropdown-menu li:not(.disabled):visible a");
                    if (r.length) {
                        var l = r.index(n.target);
                        38 == n.which && l > 0 && l--, 40 == n.which && l < r.length - 1 && l++, ~l || (l = 0), r.eq(l).trigger("focus")
                    }
                }
            }
        };
        var s = t.fn.dropdown;
        t.fn.dropdown = function (e) {
            return this.each(function () {
                var n = t(this), i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new o(this)), "string" == typeof e && i[e].call(n)
            })
        }, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function () {
            return t.fn.dropdown = s, this
        }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", a, o.prototype.toggle).on("keydown.bs.dropdown.data-api", a, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
    }(jQuery), function (t) {
        "use strict";

        function e(e, i) {
            return this.each(function () {
                var a = t(this), o = a.data("bs.modal"), s = t.extend({}, n.DEFAULTS, a.data(), "object" == typeof e && e);
                o || a.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](i) : s.show && o.show(i)
            })
        }

        var n = function (e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function (t) {
            return this.isShown ? this.hide() : this.show(t)
        }, n.prototype.show = function (e) {
            var i = this, a = t.Event("show.bs.modal", {relatedTarget: e});
            this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                    t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function () {
                var a = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), a && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var o = t.Event("shown.bs.modal", {relatedTarget: e});
                a ? i.$dialog.one("bsTransitionEnd", function () {
                    i.$element.trigger("focus").trigger(o)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
            }))
        }, n.prototype.hide = function (e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function () {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function () {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function (e) {
            var i = this, a = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var o = t.support.transition && a;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + a).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                        this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var s = function () {
                    i.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
            } else e && e()
        }, n.prototype.handleUpdate = function () {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function () {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function () {
            this.$element.css({paddingLeft: "", paddingRight: ""})
        }, n.prototype.checkScrollbar = function () {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function () {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function () {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var i = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
            return t.fn.modal = i, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
            var i = t(this), a = i.attr("href"), o = t(i.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
                s = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(a) && a}, o.data(), i.data());
            i.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
                t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                    i.is(":visible") && i.trigger("focus")
                })
            }), e.call(o, s, this)
        })
    }(jQuery), function (t) {
        "use strict";
        var e = function (t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {selector: "body", padding: 0}
        }, e.prototype.init = function (e, n, i) {
            if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var a = this.options.trigger.split(" "), o = a.length; o--;) {
                var s = a[o];
                if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
                    var r = "hover" == s ? "mouseenter" : "focusin", l = "hover" == s ? "mouseleave" : "focusout";
                    this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, e.prototype.getDefaults = function () {
            return e.DEFAULTS
        }, e.prototype.getOptions = function (e) {
            return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, e.prototype.getDelegateOptions = function () {
            var e = {}, n = this.getDefaults();
            return this._options && t.each(this._options, function (t, i) {
                n[t] != i && (e[t] = i)
            }), e
        }, e.prototype.enter = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in"; else {
                if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
                n.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)
            }
        }, e.prototype.isInStateTrue = function () {
            for (var t in this.inState) if (this.inState[t]) return !0;
            return !1
        }, e.prototype.leave = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
                if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
                n.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)
            }
        }, e.prototype.show = function () {
            var n = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(n);
                var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (n.isDefaultPrevented() || !i) return;
                var a = this, o = this.tip(), s = this.getUID(this.type);
                this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
                var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i, u = l.test(r);
                u && (r = r.replace(l, "") || "top"), o.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var c = this.getPosition(), d = o[0].offsetWidth, h = o[0].offsetHeight;
                if (u) {
                    var p = r, f = this.getPosition(this.$viewport);
                    r = "bottom" == r && c.bottom + h > f.bottom ? "top" : "top" == r && c.top - h < f.top ? "bottom" : "right" == r && c.right + d > f.width ? "left" : "left" == r && c.left - d < f.left ? "right" : r, o.removeClass(p).addClass(r)
                }
                var g = this.getCalculatedOffset(r, c, d, h);
                this.applyPlacement(g, r);
                var m = function () {
                    var t = a.hoverState;
                    a.$element.trigger("shown.bs." + a.type), a.hoverState = null, "out" == t && a.leave(a)
                };
                t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(e.TRANSITION_DURATION) : m()
            }
        }, e.prototype.applyPlacement = function (e, n) {
            var i = this.tip(), a = i[0].offsetWidth, o = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10),
                r = parseInt(i.css("margin-left"), 10);
            isNaN(s) && (s = 0), isNaN(r) && (r = 0), e.top += s, e.left += r, t.offset.setOffset(i[0], t.extend({
                using: function (t) {
                    i.css({top: Math.round(t.top), left: Math.round(t.left)})
                }
            }, e), 0), i.addClass("in");
            var l = i[0].offsetWidth, u = i[0].offsetHeight;
            "top" == n && u != o && (e.top = e.top + o - u);
            var c = this.getViewportAdjustedDelta(n, e, l, u);
            c.left ? e.left += c.left : e.top += c.top;
            var d = /top|bottom/.test(n), h = d ? 2 * c.left - a + l : 2 * c.top - o + u,
                p = d ? "offsetWidth" : "offsetHeight";
            i.offset(e), this.replaceArrow(h, i[0][p], d)
        }, e.prototype.replaceArrow = function (t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, e.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, e.prototype.hide = function (n) {
            function i() {
                "in" != a.hoverState && o.detach(), a.$element && a.$element.removeAttr("aria-describedby").trigger("hidden.bs." + a.type), n && n()
            }

            var a = this, o = t(this.$tip), s = t.Event("hide.bs." + this.type);
            if (this.$element.trigger(s), !s.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(e.TRANSITION_DURATION) : i(), this.hoverState = null, this
        }, e.prototype.fixTitle = function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, e.prototype.hasContent = function () {
            return this.getTitle()
        }, e.prototype.getPosition = function (e) {
            var n = (e = e || this.$element)[0], i = "BODY" == n.tagName, a = n.getBoundingClientRect();
            null == a.width && (a = t.extend({}, a, {width: a.right - a.left, height: a.bottom - a.top}));
            var o = window.SVGElement && n instanceof window.SVGElement, s = i ? {top: 0, left: 0} : o ? null : e.offset(),
                r = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
                l = i ? {width: t(window).width(), height: t(window).height()} : null;
            return t.extend({}, a, r, l, s)
        }, e.prototype.getCalculatedOffset = function (t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {
                top: e.top + e.height / 2 - i / 2,
                left: e.left + e.width
            }
        }, e.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
            var a = {top: 0, left: 0};
            if (!this.$viewport) return a;
            var o = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var r = e.top - o - s.scroll, l = e.top + o - s.scroll + i;
                r < s.top ? a.top = s.top - r : l > s.top + s.height && (a.top = s.top + s.height - l)
            } else {
                var u = e.left - o, c = e.left + o + n;
                u < s.left ? a.left = s.left - u : c > s.right && (a.left = s.left + s.width - c)
            }
            return a
        }, e.prototype.getTitle = function () {
            var t = this.$element, e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, e.prototype.getUID = function (t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        }, e.prototype.tip = function () {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, e.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, e.prototype.enable = function () {
            this.enabled = !0
        }, e.prototype.disable = function () {
            this.enabled = !1
        }, e.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, e.prototype.toggle = function (e) {
            var n = this;
            e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, e.prototype.destroy = function () {
            var t = this;
            clearTimeout(this.timeout), this.hide(function () {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
            })
        };
        var n = t.fn.tooltip;
        t.fn.tooltip = function (n) {
            return this.each(function () {
                var i = t(this), a = i.data("bs.tooltip"), o = "object" == typeof n && n;
                !a && /destroy|hide/.test(n) || (a || i.data("bs.tooltip", a = new e(this, o)), "string" == typeof n && a[n]())
            })
        }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = n, this
        }
    }(jQuery), function (t) {
        "use strict";
        var e = function (t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
            return e.DEFAULTS
        }, e.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle(), n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, e.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, e.prototype.getContent = function () {
            var t = this.$element, e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, e.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var n = t.fn.popover;
        t.fn.popover = function (n) {
            return this.each(function () {
                var i = t(this), a = i.data("bs.popover"), o = "object" == typeof n && n;
                !a && /destroy|hide/.test(n) || (a || i.data("bs.popover", a = new e(this, o)), "string" == typeof n && a[n]())
            })
        }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
            return t.fn.popover = n, this
        }
    }(jQuery), function (t) {
        "use strict";

        function e(n, i) {
            this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each(function () {
                var i = t(this), a = i.data("bs.scrollspy"), o = "object" == typeof n && n;
                a || i.data("bs.scrollspy", a = new e(this, o)), "string" == typeof n && a[n]()
            })
        }

        e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function () {
            var e = this, n = "offset", i = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                var e = t(this), a = e.data("target") || e.attr("href"), o = /^#./.test(a) && t(a);
                return o && o.length && o.is(":visible") && [[o[n]().top + i, a]] || null
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).each(function () {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, e.prototype.process = function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(), a = this.offsets, o = this.targets,
                s = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = o[o.length - 1]) && this.activate(t);
            if (s && e < a[0]) return this.activeTarget = null, this.clear();
            for (t = a.length; t--;) s != o[t] && e >= a[t] && (void 0 === a[t + 1] || e < a[t + 1]) && this.activate(o[t])
        }, e.prototype.activate = function (e) {
            this.activeTarget = e, this.clear();
            var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                i = t(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function () {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var i = t.fn.scrollspy;
        t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
            return t.fn.scrollspy = i, this
        }, t(window).on("load.bs.scrollspy.data-api", function () {
            t('[data-spy="scroll"]').each(function () {
                var e = t(this);
                n.call(e, e.data())
            })
        })
    }(jQuery), function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var i = t(this), a = i.data("bs.tab");
                a || i.data("bs.tab", a = new n(this)), "string" == typeof e && a[e]()
            })
        }

        var n = function (e) {
            this.element = t(e)
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
            var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
            if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var a = n.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                    s = t.Event("show.bs.tab", {relatedTarget: a[0]});
                if (a.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                    var r = t(i);
                    this.activate(e.closest("li"), n), this.activate(r, r.parent(), function () {
                        a.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: a[0]
                        })
                    })
                }
            }
        }, n.prototype.activate = function (e, i, a) {
            function o() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
            }

            var s = i.find("> .active"),
                r = a && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
            s.length && r ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
        };
        var i = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
            return t.fn.tab = i, this
        };
        var a = function (n) {
            n.preventDefault(), e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
    }(jQuery), function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var i = t(this), a = i.data("bs.affix"), o = "object" == typeof e && e;
                a || i.data("bs.affix", a = new n(this, o)), "string" == typeof e && a[e]()
            })
        }

        var n = function (e, i) {
            this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
            offset: 0,
            target: window
        }, n.prototype.getState = function (t, e, n, i) {
            var a = this.$target.scrollTop(), o = this.$element.offset(), s = this.$target.height();
            if (null != n && "top" == this.affixed) return a < n && "top";
            if ("bottom" == this.affixed) return null != n ? !(a + this.unpin <= o.top) && "bottom" : !(a + s <= t - i) && "bottom";
            var r = null == this.affixed, l = r ? a : o.top;
            return null != n && a <= n ? "top" : null != i && l + (r ? s : e) >= t - i && "bottom"
        }, n.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var t = this.$target.scrollTop(), e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, n.prototype.checkPositionWithEventLoop = function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, n.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(), i = this.options.offset, a = i.top, o = i.bottom,
                    s = Math.max(t(document).height(), t(document.body).height());
                "object" != typeof i && (o = a = i), "function" == typeof a && (a = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
                var r = this.getState(s, e, a, o);
                if (this.affixed != r) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (r ? "-" + r : ""), u = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == r && this.$element.offset({top: s - e - o})
            }
        };
        var i = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
            return t.fn.affix = i, this
        }, t(window).on("load", function () {
            t('[data-spy="affix"]').each(function () {
                var n = t(this), i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
            })
        })
    }(jQuery), function (t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], function (t) {
            return e(t)
        }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(0, function (t) {
        !function (t) {
            "use strict";

            function e(e) {
                return t.each([{re: /[\xC0-\xC6]/g, ch: "A"}, {re: /[\xE0-\xE6]/g, ch: "a"}, {
                    re: /[\xC8-\xCB]/g,
                    ch: "E"
                }, {re: /[\xE8-\xEB]/g, ch: "e"}, {re: /[\xCC-\xCF]/g, ch: "I"}, {
                    re: /[\xEC-\xEF]/g,
                    ch: "i"
                }, {re: /[\xD2-\xD6]/g, ch: "O"}, {re: /[\xF2-\xF6]/g, ch: "o"}, {
                    re: /[\xD9-\xDC]/g,
                    ch: "U"
                }, {re: /[\xF9-\xFC]/g, ch: "u"}, {re: /[\xC7-\xE7]/g, ch: "c"}, {re: /[\xD1]/g, ch: "N"}, {
                    re: /[\xF1]/g,
                    ch: "n"
                }], function () {
                    e = e.replace(this.re, this.ch)
                }), e
            }

            function n(t) {
                var e = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"},
                    n = "(?:" + Object.keys(e).join("|") + ")", i = new RegExp(n), a = new RegExp(n, "g"),
                    o = null == t ? "" : "" + t;
                return i.test(o) ? o.replace(a, function (t) {
                    return e[t]
                }) : o
            }

            function i(e, n) {
                var i = arguments, o = e, s = n;
                [].shift.apply(i);
                var r, l = this.each(function () {
                    var e = t(this);
                    if (e.is("select")) {
                        var n = e.data("selectpicker"), l = "object" == typeof o && o;
                        if (n) {
                            if (l) for (var u in l) l.hasOwnProperty(u) && (n.options[u] = l[u])
                        } else {
                            var c = t.extend({}, a.DEFAULTS, t.fn.selectpicker.defaults || {}, e.data(), l);
                            c.template = t.extend({}, a.DEFAULTS.template, t.fn.selectpicker.defaults ? t.fn.selectpicker.defaults.template : {}, e.data().template, l.template), e.data("selectpicker", n = new a(this, c, s))
                        }
                        "string" == typeof o && (r = n[o] instanceof Function ? n[o].apply(n, i) : n.options[o])
                    }
                });
                return void 0 !== r ? r : l
            }

            String.prototype.includes || function () {
                var t = {}.toString, e = function () {
                    try {
                        var t = {}, e = Object.defineProperty, n = e(t, t, t) && e
                    } catch (t) {
                    }
                    return n
                }(), n = "".indexOf, i = function (e) {
                    if (null == this) throw new TypeError;
                    var i = String(this);
                    if (e && "[object RegExp]" == t.call(e)) throw new TypeError;
                    var a = i.length, o = String(e), s = o.length, r = arguments.length > 1 ? arguments[1] : void 0,
                        l = r ? Number(r) : 0;
                    l != l && (l = 0);
                    return !(s + Math.min(Math.max(l, 0), a) > a) && -1 != n.call(i, o, l)
                };
                e ? e(String.prototype, "includes", {
                    value: i,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.includes = i
            }(), String.prototype.startsWith || function () {
                var t = function () {
                    try {
                        var t = {}, e = Object.defineProperty, n = e(t, t, t) && e
                    } catch (t) {
                    }
                    return n
                }(), e = {}.toString, n = function (t) {
                    if (null == this) throw new TypeError;
                    var n = String(this);
                    if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
                    var i = n.length, a = String(t), o = a.length, s = arguments.length > 1 ? arguments[1] : void 0,
                        r = s ? Number(s) : 0;
                    r != r && (r = 0);
                    var l = Math.min(Math.max(r, 0), i);
                    if (o + l > i) return !1;
                    for (var u = -1; ++u < o;) if (n.charCodeAt(l + u) != a.charCodeAt(u)) return !1;
                    return !0
                };
                t ? t(String.prototype, "startsWith", {
                    value: n,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.startsWith = n
            }(), Object.keys || (Object.keys = function (t, e, n) {
                n = [];
                for (e in t) n.hasOwnProperty.call(t, e) && n.push(e);
                return n
            }), t.fn.triggerNative = function (t) {
                var e, n = this[0];
                n.dispatchEvent ? ("function" == typeof Event ? e = new Event(t, {bubbles: !0}) : (e = document.createEvent("Event")).initEvent(t, !0, !1), n.dispatchEvent(e)) : (n.fireEvent && ((e = document.createEventObject()).eventType = t, n.fireEvent("on" + t, e)), this.trigger(t))
            }, t.expr[":"].icontains = function (e, n, i) {
                var a = t(e);
                return (a.data("tokens") || a.text()).toUpperCase().includes(i[3].toUpperCase())
            }, t.expr[":"].ibegins = function (e, n, i) {
                var a = t(e);
                return (a.data("tokens") || a.text()).toUpperCase().startsWith(i[3].toUpperCase())
            }, t.expr[":"].aicontains = function (e, n, i) {
                var a = t(e);
                return (a.data("tokens") || a.data("normalizedText") || a.text()).toUpperCase().includes(i[3].toUpperCase())
            }, t.expr[":"].aibegins = function (e, n, i) {
                var a = t(e);
                return (a.data("tokens") || a.data("normalizedText") || a.text()).toUpperCase().startsWith(i[3].toUpperCase())
            };
            var a = function (e, n, i) {
                i && (i.stopPropagation(), i.preventDefault()), this.$element = t(e), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = n, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = a.prototype.val, this.render = a.prototype.render, this.refresh = a.prototype.refresh, this.setStyle = a.prototype.setStyle, this.selectAll = a.prototype.selectAll, this.deselectAll = a.prototype.deselectAll, this.destroy = a.prototype.destroy, this.remove = a.prototype.remove, this.show = a.prototype.show, this.hide = a.prototype.hide, this.init()
            };
            a.VERSION = "1.9.3", a.DEFAULTS = {
                noneSelectedText: "Nothing selected",
                noneResultsText: "No results matched {0}",
                countSelectedText: function (t, e) {
                    return 1 == t ? "{0} item selected" : "{0} items selected"
                },
                maxOptionsText: function (t, e) {
                    return [1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
                },
                selectAllText: "Select All",
                deselectAllText: "Deselect All",
                doneButton: !1,
                doneButtonText: "Close",
                multipleSeparator: ", ",
                styleBase: "btn",
                style: "btn-default",
                size: "auto",
                title: null,
                selectedTextFormat: "values",
                width: !1,
                container: !1,
                hideDisabled: !1,
                showSubtext: !1,
                showIcon: !0,
                showContent: !0,
                dropupAuto: !0,
                header: !1,
                liveSearch: !1,
                liveSearchPlaceholder: null,
                liveSearchNormalize: !1,
                liveSearchStyle: "contains",
                actionsBox: !1,
                iconBase: "glyphicon",
                tickIcon: "glyphicon-ok",
                template: {caret: '<span class="caret"></span>'},
                maxOptions: !1,
                mobile: !1,
                selectOnTab: !1,
                dropdownAlignRight: !1
            }, a.prototype = {
                constructor: a, init: function () {
                    var e = this, n = this.$element.attr("id");
                    this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== n && (this.$button.attr("data-id", n), t('label[for="' + n + '"]').click(function (t) {
                        t.preventDefault(), e.$button.focus()
                    })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                        "hide.bs.dropdown": function (t) {
                            e.$element.trigger("hide.bs.select", t)
                        }, "hidden.bs.dropdown": function (t) {
                            e.$element.trigger("hidden.bs.select", t)
                        }, "show.bs.dropdown": function (t) {
                            e.$element.trigger("show.bs.select", t)
                        }, "shown.bs.dropdown": function (t) {
                            e.$element.trigger("shown.bs.select", t)
                        }
                    }), e.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
                        e.$button.addClass("bs-invalid").focus(), e.$element.on({
                            "focus.bs.select": function () {
                                e.$button.focus(), e.$element.off("focus.bs.select")
                            }, "shown.bs.select": function () {
                                e.$element.val(e.$element.val()).off("shown.bs.select")
                            }, "rendered.bs.select": function () {
                                this.validity.valid && e.$button.removeClass("bs-invalid"), e.$element.off("rendered.bs.select")
                            }
                        })
                    }), setTimeout(function () {
                        e.$element.trigger("loaded.bs.select")
                    })
                }, createDropdown: function () {
                    var e = this.multiple ? " show-tick" : "",
                        i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                        a = this.autofocus ? " autofocus" : "",
                        o = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                        s = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + n(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                        r = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                        l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                        u = '<div class="btn-group bootstrap-select' + e + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + a + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + o + s + r + '<ul class="dropdown-menu inner" role="menu"></ul>' + l + "</div></div>";
                    return t(u)
                }, createView: function () {
                    var t = this.createDropdown(), e = this.createLi();
                    return t.find("ul")[0].innerHTML = e, t
                }, reloadLi: function () {
                    this.destroyLi();
                    var t = this.createLi();
                    this.$menuInner[0].innerHTML = t
                }, destroyLi: function () {
                    this.$menu.find("li").remove()
                }, createLi: function () {
                    var i = this, a = [], o = 0, s = document.createElement("option"), r = -1, l = function (t, e, n, i) {
                        return "<li" + (void 0 !== n & "" !== n ? ' class="' + n + '"' : "") + (void 0 !== e & null !== e ? ' data-original-index="' + e + '"' : "") + (void 0 !== i & null !== i ? 'data-optgroup="' + i + '"' : "") + ">" + t + "</li>"
                    }, u = function (t, a, o, s) {
                        return '<a tabindex="0"' + (void 0 !== a ? ' class="' + a + '"' : "") + (void 0 !== o ? ' style="' + o + '"' : "") + (i.options.liveSearchNormalize ? ' data-normalized-text="' + e(n(t)) + '"' : "") + (void 0 !== s || null !== s ? ' data-tokens="' + s + '"' : "") + ">" + t + '<span class="' + i.options.iconBase + " " + i.options.tickIcon + ' check-mark"></span></a>'
                    };
                    if (this.options.title && !this.multiple && (r--, !this.$element.find(".bs-title-option").length)) {
                        var c = this.$element[0];
                        s.className = "bs-title-option", s.appendChild(document.createTextNode(this.options.title)), s.value = "", c.insertBefore(s, c.firstChild), void 0 === t(c.options[c.selectedIndex]).attr("selected") && (s.selected = !0)
                    }
                    return this.$element.find("option").each(function (e) {
                        var n = t(this);
                        if (r++, !n.hasClass("bs-title-option")) {
                            var s = this.className || "", c = this.style.cssText,
                                d = n.data("content") ? n.data("content") : n.html(),
                                h = n.data("tokens") ? n.data("tokens") : null,
                                p = void 0 !== n.data("subtext") ? '<small class="text-muted">' + n.data("subtext") + "</small>" : "",
                                f = void 0 !== n.data("icon") ? '<span class="' + i.options.iconBase + " " + n.data("icon") + '"></span> ' : "",
                                g = this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled;
                            if ("" !== f && g && (f = "<span>" + f + "</span>"), i.options.hideDisabled && g) r--; else {
                                if (n.data("content") || (d = f + '<span class="text">' + d + p + "</span>"), "OPTGROUP" === this.parentNode.tagName && !0 !== n.data("divider")) {
                                    var m = " " + this.parentNode.className || "";
                                    if (0 === n.index()) {
                                        o += 1;
                                        var v = this.parentNode.label,
                                            y = void 0 !== n.parent().data("subtext") ? '<small class="text-muted">' + n.parent().data("subtext") + "</small>" : "";
                                        v = (n.parent().data("icon") ? '<span class="' + i.options.iconBase + " " + n.parent().data("icon") + '"></span> ' : "") + '<span class="text">' + v + y + "</span>", 0 !== e && a.length > 0 && (r++, a.push(l("", null, "divider", o + "div"))), r++, a.push(l(v, null, "dropdown-header" + m, o))
                                    }
                                    a.push(l(u(d, "opt " + s + m, c, h), e, "", o))
                                } else !0 === n.data("divider") ? a.push(l("", e, "divider")) : !0 === n.data("hidden") ? a.push(l(u(d, s, c, h), e, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (r++, a.push(l("", null, "divider", o + "div"))), a.push(l(u(d, s, c, h), e)));
                                i.liObj[e] = r
                            }
                        }
                    }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), a.join("")
                }, findLis: function () {
                    return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
                }, render: function (e) {
                    var n, i = this;
                    !1 !== e && this.$element.find("option").each(function (t) {
                        var e = i.findLis().eq(i.liObj[t]);
                        i.setDisabled(t, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, e), i.setSelected(t, this.selected, e)
                    }), this.tabIndex();
                    var a = this.$element.find("option").map(function () {
                        if (this.selected) {
                            if (i.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                            var e, n = t(this),
                                a = n.data("icon") && i.options.showIcon ? '<i class="' + i.options.iconBase + " " + n.data("icon") + '"></i> ' : "";
                            return e = i.options.showSubtext && n.data("subtext") && !i.multiple ? ' <small class="text-muted">' + n.data("subtext") + "</small>" : "", void 0 !== n.attr("title") ? n.attr("title") : n.data("content") && i.options.showContent ? n.data("content") : a + n.html() + e
                        }
                    }).toArray(), o = this.multiple ? a.join(this.options.multipleSeparator) : a[0];
                    if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                        var s = this.options.selectedTextFormat.split(">");
                        if (s.length > 1 && a.length > s[1] || 1 == s.length && a.length >= 2) {
                            n = this.options.hideDisabled ? ", [disabled]" : "";
                            var r = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + n).length;
                            o = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(a.length, r) : this.options.countSelectedText).replace("{0}", a.length.toString()).replace("{1}", r.toString())
                        }
                    }
                    void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (o = this.options.title), o || (o = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", t.trim(o.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(o), this.$element.trigger("rendered.bs.select")
                }, setStyle: function (t, e) {
                    this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                    var n = t || this.options.style;
                    "add" == e ? this.$button.addClass(n) : "remove" == e ? this.$button.removeClass(n) : (this.$button.removeClass(this.options.style), this.$button.addClass(n))
                }, liHeight: function (e) {
                    if (e || !1 !== this.options.size && !this.sizeInfo) {
                        var n = document.createElement("div"), i = document.createElement("div"),
                            a = document.createElement("ul"), o = document.createElement("li"),
                            s = document.createElement("li"), r = document.createElement("a"),
                            l = document.createElement("span"),
                            u = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                            c = this.options.liveSearch ? document.createElement("div") : null,
                            d = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                            h = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                        if (l.className = "text", n.className = this.$menu[0].parentNode.className + " open", i.className = "dropdown-menu open", a.className = "dropdown-menu inner", o.className = "divider", l.appendChild(document.createTextNode("Inner text")), r.appendChild(l), s.appendChild(r), a.appendChild(s), a.appendChild(o), u && i.appendChild(u), c) {
                            var p = document.createElement("span");
                            c.className = "bs-searchbox", p.className = "form-control", c.appendChild(p), i.appendChild(c)
                        }
                        d && i.appendChild(d), i.appendChild(a), h && i.appendChild(h), n.appendChild(i), document.body.appendChild(n);
                        var f = r.offsetHeight, g = u ? u.offsetHeight : 0, m = c ? c.offsetHeight : 0,
                            v = d ? d.offsetHeight : 0, y = h ? h.offsetHeight : 0, b = t(o).outerHeight(!0),
                            x = "function" == typeof getComputedStyle && getComputedStyle(i), w = x ? null : t(i),
                            k = parseInt(x ? x.paddingTop : w.css("paddingTop")) + parseInt(x ? x.paddingBottom : w.css("paddingBottom")) + parseInt(x ? x.borderTopWidth : w.css("borderTopWidth")) + parseInt(x ? x.borderBottomWidth : w.css("borderBottomWidth")),
                            A = k + parseInt(x ? x.marginTop : w.css("marginTop")) + parseInt(x ? x.marginBottom : w.css("marginBottom")) + 2;
                        document.body.removeChild(n), this.sizeInfo = {
                            liHeight: f,
                            headerHeight: g,
                            searchHeight: m,
                            actionsHeight: v,
                            doneButtonHeight: y,
                            dividerHeight: b,
                            menuPadding: k,
                            menuExtras: A
                        }
                    }
                }, setSize: function () {
                    if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                        var e, n, i, a, o = this, s = this.$menu, r = this.$menuInner, l = t(window),
                            u = this.$newElement[0].offsetHeight, c = this.sizeInfo.liHeight,
                            d = this.sizeInfo.headerHeight, h = this.sizeInfo.searchHeight, p = this.sizeInfo.actionsHeight,
                            f = this.sizeInfo.doneButtonHeight, g = this.sizeInfo.dividerHeight,
                            m = this.sizeInfo.menuPadding, v = this.sizeInfo.menuExtras,
                            y = this.options.hideDisabled ? ".disabled" : "", b = function () {
                                i = o.$newElement.offset().top - l.scrollTop(), a = l.height() - i - u
                            };
                        if (b(), "auto" === this.options.size) {
                            var x = function () {
                                var l, u = function (e, n) {
                                        return function (i) {
                                            return n ? i.classList ? i.classList.contains(e) : t(i).hasClass(e) : !(i.classList ? i.classList.contains(e) : t(i).hasClass(e))
                                        }
                                    }, g = o.$menuInner[0].getElementsByTagName("li"),
                                    y = Array.prototype.filter ? Array.prototype.filter.call(g, u("hidden", !1)) : o.$lis.not(".hidden"),
                                    x = Array.prototype.filter ? Array.prototype.filter.call(y, u("dropdown-header", !0)) : y.filter(".dropdown-header");
                                b(), e = a - v, o.options.container ? (s.data("height") || s.data("height", s.height()), n = s.data("height")) : n = s.height(), o.options.dropupAuto && o.$newElement.toggleClass("dropup", i > a && e - v < n), o.$newElement.hasClass("dropup") && (e = i - v), l = y.length + x.length > 3 ? 3 * c + v - 2 : 0, s.css({
                                    "max-height": e + "px",
                                    overflow: "hidden",
                                    "min-height": l + d + h + p + f + "px"
                                }), r.css({
                                    "max-height": e - d - h - p - f - m + "px",
                                    "overflow-y": "auto",
                                    "min-height": Math.max(l - m, 0) + "px"
                                })
                            };
                            x(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", x), l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", x)
                        } else if (this.options.size && "auto" != this.options.size && this.$lis.not(y).length > this.options.size) {
                            var w = this.$lis.not(".divider").not(y).children().slice(0, this.options.size).last().parent().index(),
                                k = this.$lis.slice(0, w + 1).filter(".divider").length;
                            e = c * this.options.size + k * g + m, o.options.container ? (s.data("height") || s.data("height", s.height()), n = s.data("height")) : n = s.height(), o.options.dropupAuto && this.$newElement.toggleClass("dropup", i > a && e - v < n), s.css({
                                "max-height": e + d + h + p + f + "px",
                                overflow: "hidden",
                                "min-height": ""
                            }), r.css({"max-height": e - m + "px", "overflow-y": "auto", "min-height": ""})
                        }
                    }
                }, setWidth: function () {
                    if ("auto" === this.options.width) {
                        this.$menu.css("min-width", "0");
                        var t = this.$menu.parent().clone().appendTo("body"),
                            e = this.options.container ? this.$newElement.clone().appendTo("body") : t,
                            n = t.children(".dropdown-menu").outerWidth(),
                            i = e.css("width", "auto").children("button").outerWidth();
                        t.remove(), e.remove(), this.$newElement.css("width", Math.max(n, i) + "px")
                    } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                    this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
                }, selectPosition: function () {
                    this.$bsContainer = t('<div class="bs-container" />');
                    var e, n, i = this, a = function (t) {
                        i.$bsContainer.addClass(t.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), n = t.hasClass("dropup") ? 0 : t[0].offsetHeight, i.$bsContainer.css({
                            top: e.top + n,
                            left: e.left,
                            width: t[0].offsetWidth
                        })
                    };
                    this.$button.on("click", function () {
                        var e = t(this);
                        i.isDisabled() || (a(i.$newElement), i.$bsContainer.appendTo(i.options.container).toggleClass("open", !e.hasClass("open")).append(i.$menu))
                    }), t(window).on("resize scroll", function () {
                        a(i.$newElement)
                    }), this.$element.on("hide.bs.select", function () {
                        i.$menu.data("height", i.$menu.height()), i.$bsContainer.detach()
                    })
                }, setSelected: function (t, e, n) {
                    n || (n = this.findLis().eq(this.liObj[t])), n.toggleClass("selected", e)
                }, setDisabled: function (t, e, n) {
                    n || (n = this.findLis().eq(this.liObj[t])), e ? n.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : n.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
                }, isDisabled: function () {
                    return this.$element[0].disabled
                }, checkDisabled: function () {
                    var t = this;
                    this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
                        return !t.isDisabled()
                    })
                }, tabIndex: function () {
                    this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
                }, clickListener: function () {
                    var e = this, n = t(document);
                    this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function (t) {
                        t.stopPropagation()
                    }), n.data("spaceSelect", !1), this.$button.on("keyup", function (t) {
                        /(32)/.test(t.keyCode.toString(10)) && n.data("spaceSelect") && (t.preventDefault(), n.data("spaceSelect", !1))
                    }), this.$button.on("click", function () {
                        e.setSize(), e.$element.on("shown.bs.select", function () {
                            if (e.options.liveSearch || e.multiple) {
                                if (!e.multiple) {
                                    var t = e.liObj[e.$element[0].selectedIndex];
                                    if ("number" != typeof t || !1 === e.options.size) return;
                                    var n = e.$lis.eq(t)[0].offsetTop - e.$menuInner[0].offsetTop;
                                    n = n - e.$menuInner[0].offsetHeight / 2 + e.sizeInfo.liHeight / 2, e.$menuInner[0].scrollTop = n
                                }
                            } else e.$menuInner.find(".selected a").focus()
                        })
                    }), this.$menuInner.on("click", "li a", function (n) {
                        var i = t(this), a = i.parent().data("originalIndex"), o = e.$element.val(),
                            s = e.$element.prop("selectedIndex");
                        if (e.multiple && n.stopPropagation(), n.preventDefault(), !e.isDisabled() && !i.parent().hasClass("disabled")) {
                            var r = e.$element.find("option"), l = r.eq(a), u = l.prop("selected"),
                                c = l.parent("optgroup"), d = e.options.maxOptions, h = c.data("maxOptions") || !1;
                            if (e.multiple) {
                                if (l.prop("selected", !u), e.setSelected(a, !u), i.blur(), !1 !== d || !1 !== h) {
                                    var p = d < r.filter(":selected").length, f = h < c.find("option:selected").length;
                                    if (d && p || h && f) if (d && 1 == d) r.prop("selected", !1), l.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected"), e.setSelected(a, !0); else if (h && 1 == h) {
                                        c.find("option:selected").prop("selected", !1), l.prop("selected", !0);
                                        var g = i.parent().data("optgroup");
                                        e.$menuInner.find('[data-optgroup="' + g + '"]').removeClass("selected"), e.setSelected(a, !0)
                                    } else {
                                        var m = "function" == typeof e.options.maxOptionsText ? e.options.maxOptionsText(d, h) : e.options.maxOptionsText,
                                            v = m[0].replace("{n}", d), y = m[1].replace("{n}", h),
                                            b = t('<div class="notify"></div>');
                                        m[2] && (v = v.replace("{var}", m[2][d > 1 ? 0 : 1]), y = y.replace("{var}", m[2][h > 1 ? 0 : 1])), l.prop("selected", !1), e.$menu.append(b), d && p && (b.append(t("<div>" + v + "</div>")), e.$element.trigger("maxReached.bs.select")), h && f && (b.append(t("<div>" + y + "</div>")), e.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                                            e.setSelected(a, !1)
                                        }, 10), b.delay(750).fadeOut(300, function () {
                                            t(this).remove()
                                        })
                                    }
                                }
                            } else r.prop("selected", !1), l.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected"), e.setSelected(a, !0);
                            e.multiple ? e.options.liveSearch && e.$searchbox.focus() : e.$button.focus(), (o != e.$element.val() && e.multiple || s != e.$element.prop("selectedIndex") && !e.multiple) && (e.$element.triggerNative("change"), e.$element.trigger("changed.bs.select", [a, l.prop("selected"), u]))
                        }
                    }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (n) {
                        n.currentTarget == this && (n.preventDefault(), n.stopPropagation(), e.options.liveSearch && !t(n.target).hasClass("close") ? e.$searchbox.focus() : e.$button.focus())
                    }), this.$menuInner.on("click", ".divider, .dropdown-header", function (t) {
                        t.preventDefault(), t.stopPropagation(), e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus()
                    }), this.$menu.on("click", ".popover-title .close", function () {
                        e.$button.click()
                    }), this.$searchbox.on("click", function (t) {
                        t.stopPropagation()
                    }), this.$menu.on("click", ".actions-btn", function (n) {
                        e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus(), n.preventDefault(), n.stopPropagation(), t(this).hasClass("bs-select-all") ? e.selectAll() : e.deselectAll(), e.$element.triggerNative("change")
                    }), this.$element.change(function () {
                        e.render(!1)
                    })
                }, liveSearchListener: function () {
                    var i = this, a = t('<li class="no-results"></li>');
                    this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function () {
                        i.$menuInner.find(".active").removeClass("active"), i.$searchbox.val() && (i.$searchbox.val(""), i.$lis.not(".is-hidden").removeClass("hidden"), a.parent().length && a.remove()), i.multiple || i.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
                            i.$searchbox.focus()
                        }, 10)
                    }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (t) {
                        t.stopPropagation()
                    }), this.$searchbox.on("input propertychange", function () {
                        if (i.$searchbox.val()) {
                            var o = i.$lis.not(".is-hidden").removeClass("hidden").children("a");
                            (o = i.options.liveSearchNormalize ? o.not(":a" + i._searchStyle() + '("' + e(i.$searchbox.val()) + '")') : o.not(":" + i._searchStyle() + '("' + i.$searchbox.val() + '")')).parent().addClass("hidden"), i.$lis.filter(".dropdown-header").each(function () {
                                var e = t(this), n = e.data("optgroup");
                                0 === i.$lis.filter("[data-optgroup=" + n + "]").not(e).not(".hidden").length && (e.addClass("hidden"), i.$lis.filter("[data-optgroup=" + n + "div]").addClass("hidden"))
                            });
                            var s = i.$lis.not(".hidden");
                            s.each(function (e) {
                                var n = t(this);
                                n.hasClass("divider") && (n.index() === s.first().index() || n.index() === s.last().index() || s.eq(e + 1).hasClass("divider")) && n.addClass("hidden")
                            }), i.$lis.not(".hidden, .no-results").length ? a.parent().length && a.remove() : (a.parent().length && a.remove(), a.html(i.options.noneResultsText.replace("{0}", '"' + n(i.$searchbox.val()) + '"')).show(), i.$menuInner.append(a))
                        } else i.$lis.not(".is-hidden").removeClass("hidden"), a.parent().length && a.remove();
                        i.$lis.filter(".active").removeClass("active"), i.$searchbox.val() && i.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), t(this).focus()
                    })
                }, _searchStyle: function () {
                    return {begins: "ibegins", startsWith: "ibegins"}[this.options.liveSearchStyle] || "icontains"
                }, val: function (t) {
                    return void 0 !== t ? (this.$element.val(t), this.render(), this.$element) : this.$element.val()
                }, changeAll: function (e) {
                    void 0 === e && (e = !0), this.findLis();
                    for (var n = this.$element.find("option"), i = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", e), a = i.length, o = [], s = 0; s < a; s++) {
                        var r = i[s].getAttribute("data-original-index");
                        o[o.length] = n.eq(r)[0]
                    }
                    t(o).prop("selected", e), this.render(!1)
                }, selectAll: function () {
                    return this.changeAll(!0)
                }, deselectAll: function () {
                    return this.changeAll(!1)
                }, keydown: function (n) {
                    var i, a, o, s, r, l, u, c, d, h = t(this), p = h.is("input") ? h.parent().parent() : h.parent(),
                        f = p.data("this"), g = ":not(.disabled, .hidden, .dropdown-header, .divider)", m = {
                            32: " ",
                            48: "0",
                            49: "1",
                            50: "2",
                            51: "3",
                            52: "4",
                            53: "5",
                            54: "6",
                            55: "7",
                            56: "8",
                            57: "9",
                            59: ";",
                            65: "a",
                            66: "b",
                            67: "c",
                            68: "d",
                            69: "e",
                            70: "f",
                            71: "g",
                            72: "h",
                            73: "i",
                            74: "j",
                            75: "k",
                            76: "l",
                            77: "m",
                            78: "n",
                            79: "o",
                            80: "p",
                            81: "q",
                            82: "r",
                            83: "s",
                            84: "t",
                            85: "u",
                            86: "v",
                            87: "w",
                            88: "x",
                            89: "y",
                            90: "z",
                            96: "0",
                            97: "1",
                            98: "2",
                            99: "3",
                            100: "4",
                            101: "5",
                            102: "6",
                            103: "7",
                            104: "8",
                            105: "9"
                        };
                    if (f.options.liveSearch && (p = h.parent().parent()), f.options.container && (p = f.$menu), i = t("[role=menu] li", p), !(d = f.$newElement.hasClass("open")) && (n.keyCode >= 48 && n.keyCode <= 57 || n.keyCode >= 96 && n.keyCode <= 105 || n.keyCode >= 65 && n.keyCode <= 90) && (f.options.container ? f.$button.trigger("click") : (f.setSize(), f.$menu.parent().addClass("open"), d = !0), f.$searchbox.focus()), f.options.liveSearch && (/(^9$|27)/.test(n.keyCode.toString(10)) && d && 0 === f.$menu.find(".active").length && (n.preventDefault(), f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus()), i = t("[role=menu] li" + g, p), h.val() || /(38|40)/.test(n.keyCode.toString(10)) || 0 === i.filter(".active").length && (i = f.$menuInner.find("li"), i = f.options.liveSearchNormalize ? i.filter(":a" + f._searchStyle() + "(" + e(m[n.keyCode]) + ")") : i.filter(":" + f._searchStyle() + "(" + m[n.keyCode] + ")"))), i.length) {
                        if (/(38|40)/.test(n.keyCode.toString(10))) a = i.index(i.find("a").filter(":focus").parent()), s = i.filter(g).first().index(), r = i.filter(g).last().index(), o = i.eq(a).nextAll(g).eq(0).index(), l = i.eq(a).prevAll(g).eq(0).index(), u = i.eq(o).prevAll(g).eq(0).index(), f.options.liveSearch && (i.each(function (e) {
                            t(this).hasClass("disabled") || t(this).data("index", e)
                        }), a = i.index(i.filter(".active")), s = i.first().data("index"), r = i.last().data("index"), o = i.eq(a).nextAll().eq(0).data("index"), l = i.eq(a).prevAll().eq(0).data("index"), u = i.eq(o).prevAll().eq(0).data("index")), c = h.data("prevIndex"), 38 == n.keyCode ? (f.options.liveSearch && a--, a != u && a > l && (a = l), a < s && (a = s), a == c && (a = r)) : 40 == n.keyCode && (f.options.liveSearch && a++, -1 == a && (a = 0), a != u && a < o && (a = o), a > r && (a = r), a == c && (a = s)), h.data("prevIndex", a), f.options.liveSearch ? (n.preventDefault(), h.hasClass("dropdown-toggle") || (i.removeClass("active").eq(a).addClass("active").children("a").focus(), h.focus())) : i.eq(a).children("a").focus(); else if (!h.is("input")) {
                            var v, y = [];
                            i.each(function () {
                                t(this).hasClass("disabled") || t.trim(t(this).children("a").text().toLowerCase()).substring(0, 1) == m[n.keyCode] && y.push(t(this).index())
                            }), v = t(document).data("keycount"), v++, t(document).data("keycount", v), t.trim(t(":focus").text().toLowerCase()).substring(0, 1) != m[n.keyCode] ? (v = 1, t(document).data("keycount", v)) : v >= y.length && (t(document).data("keycount", 0), v > y.length && (v = 1)), i.eq(y[v - 1]).children("a").focus()
                        }
                        if ((/(13|32)/.test(n.keyCode.toString(10)) || /(^9$)/.test(n.keyCode.toString(10)) && f.options.selectOnTab) && d) {
                            if (/(32)/.test(n.keyCode.toString(10)) || n.preventDefault(), f.options.liveSearch) /(32)/.test(n.keyCode.toString(10)) || (f.$menuInner.find(".active a").click(), h.focus()); else {
                                var b = t(":focus");
                                b.click(), b.focus(), n.preventDefault(), t(document).data("spaceSelect", !0)
                            }
                            t(document).data("keycount", 0)
                        }
                        (/(^9$|27)/.test(n.keyCode.toString(10)) && d && (f.multiple || f.options.liveSearch) || /(27)/.test(n.keyCode.toString(10)) && !d) && (f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus())
                    }
                }, mobile: function () {
                    this.$element.addClass("mobile-device")
                }, refresh: function () {
                    this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
                }, hide: function () {
                    this.$newElement.hide()
                }, show: function () {
                    this.$newElement.show()
                }, remove: function () {
                    this.$newElement.remove(), this.$element.remove()
                }, destroy: function () {
                    this.$newElement.remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
                }
            };
            var o = t.fn.selectpicker;
            t.fn.selectpicker = i, t.fn.selectpicker.Constructor = a, t.fn.selectpicker.noConflict = function () {
                return t.fn.selectpicker = o, this
            }, t(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', a.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function (t) {
                t.stopPropagation()
            }), t(window).on("load.bs.select.data-api", function () {
                t(".selectpicker").each(function () {
                    var e = t(this);
                    i.call(e, e.data())
                })
            })
        }(t)
    }), function (t) {
        t.fn.extend({
            leanModal: function (e) {
                function n(e) {
                    t("#lean_overlay").fadeOut(200), t(e).css({display: "none"})
                }

                var i = t("<div id='lean_overlay'></div>");
                return t("body").append(i), e = t.extend({
                    top: 100,
                    overlay: .5,
                    closeButton: null
                }, e), this.each(function () {
                    var i = e;
                    t(this).click(function (e) {
                        var a = t(this).attr("href");
                        t("#lean_overlay").click(function () {
                            n(a)
                        }), t(i.closeButton).click(function () {
                            n(a)
                        });
                        t(a).outerHeight();
                        var o = t(a).outerWidth();
                        t("#lean_overlay").css({
                            display: "block",
                            opacity: 0
                        }), t("#lean_overlay").fadeTo(200, i.overlay), t(a).css({
                            display: "block",
                            position: "fixed",
                            opacity: 0,
                            "z-index": 11e3,
                            left: "50%",
                            "margin-left": -o / 2 + "px",
                            top: i.top + "px"
                        }), t(a).fadeTo(200, 1), e.preventDefault()
                    })
                })
            }
        })
    }(jQuery), function (t) {
        "use strict";
        t.uls = t.uls || {}, t.uls.data = {
            languages: {
                aa: ["Latn", ["AF"], "Qafár af"],
                ab: ["Cyrl", ["EU"], "Аҧсшәа"],
                ace: ["Latn", ["AS", "PA"], "Acèh"],
                ady: ["Cyrl", ["EU", "ME"], "Адыгэбзэ"],
                "ady-cyrl": ["ady"],
                "ady-latn": ["Latn", ["EU", "ME"], "Adygabze"],
                aeb: ["Arab", ["AF"], "زَوُن"],
                af: ["Latn", ["AF"], "Afrikaans"],
                ahr: ["Deva", ["AS"], "अहिराणी"],
                ak: ["Latn", ["AF"], "Akan"],
                akz: ["Latn", ["AM"], "Albaamo innaaɬiilka"],
                aln: ["Latn", ["EU"], "Gegë"],
                am: ["Ethi", ["AF"], "አማርኛ"],
                an: ["Latn", ["EU"], "aragonés"],
                ang: ["Latn", ["EU"], "Ænglisc"],
                anp: ["Deva", ["AS"], "अङ्गिका"],
                ar: ["Arab", ["ME"], "العربية"],
                arc: ["Syrc", ["ME"], "ܐܪܡܝܐ"],
                arn: ["Latn", ["AM"], "mapudungun"],
                aro: ["Latn", ["AM"], "Araona"],
                arq: ["Latn", ["AF"], "Dziri"],
                ary: ["Latn", ["ME"], "Maġribi"],
                arz: ["Arab", ["ME"], "مصرى"],
                as: ["Beng", ["AS"], "অসমীয়া"],
                ase: ["Sgnw", ["AM"], "American sign language"],
                ast: ["Latn", ["EU"], "asturianu"],
                av: ["Cyrl", ["EU"], "авар"],
                avk: ["Latn", ["WW"], "Kotava"],
                ay: ["Latn", ["AM"], "Aymar aru"],
                az: ["az-latn"],
                "az-latn": ["Latn", ["EU", "ME"], "azərbaycanca"],
                "az-arab": ["Arab", ["EU", "ME"], "آذربايجانجا"],
                "az-cyrl": ["Latn", ["EU", "ME"], "азәрбајҹанҹа"],
                azb: ["az-arab"],
                ba: ["Cyrl", ["EU"], "башҡортса"],
                bar: ["Latn", ["EU"], "Boarisch"],
                "bat-smg": ["sgs"],
                "bbc-latn": ["Latn", ["AS"], "Batak Toba"],
                "bbc-batk": ["Batk", ["AS"], "Batak Toba"],
                bbc: ["Latn", ["AS"], "Batak Toba"],
                bcc: ["Arab", ["AS", "ME"], "بلوچی مکرانی"],
                bcl: ["Latn", ["AS"], "Bikol Central"],
                "be-tarask": ["Cyrl", ["EU"], "беларуская (тарашкевіца)"],
                "be-x-old": ["be-tarask"],
                be: ["Cyrl", ["EU"], "беларуская"],
                bew: ["Latn", ["AS"], "Bahasa Betawi"],
                bfq: ["Taml", ["AS"], "படகா"],
                bg: ["Cyrl", ["EU"], "български"],
                bh: ["Deva", ["AS"], "भोजपुरी"],
                bho: ["Deva", ["AS"], "भोजपुरी"],
                bi: ["Latn", ["PA"], "Bislama"],
                bjn: ["Latn", ["AS"], "Bahasa Banjar"],
                bm: ["Latn", ["AF"], "bamanankan"],
                bn: ["Beng", ["AS"], "বাংলা"],
                bo: ["Tibt", ["AS"], "བོད་ཡིག"],
                bpy: ["Beng", ["AS"], "বিষ্ণুপ্রিয়া মণিপুরী"],
                bqi: ["Arab", ["ME"], "بختياري"],
                br: ["Latn", ["EU"], "brezhoneg"],
                brh: ["Latn", ["ME", "AS"], "Bráhuí"],
                brx: ["Deva", ["AS"], "बड़ो"],
                bs: ["Latn", ["EU"], "bosanski"],
                bto: ["Latn", ["AS"], "Iriga Bicolano"],
                bug: ["Bugi", ["AS"], "ᨅᨔ ᨕᨘᨁᨗ"],
                bxr: ["Cyrl", ["AS"], "буряад"],
                ca: ["Latn", ["EU"], "català"],
                "cbk-zam": ["Latn", ["AS"], "Chavacano de Zamboanga"],
                cdo: ["Latn", ["AS"], "Mìng-dĕ̤ng-ngṳ̄"],
                ce: ["Cyrl", ["EU"], "нохчийн"],
                ceb: ["Latn", ["AS"], "Cebuano"],
                ch: ["Latn", ["PA"], "Chamoru"],
                cho: ["Latn", ["AM"], "Choctaw"],
                chr: ["Cher", ["AM"], "ᏣᎳᎩ"],
                chy: ["Latn", ["AM"], "Tsetsêhestâhese"],
                ckb: ["Arab", ["ME"], "کوردی"],
                co: ["Latn", ["EU"], "corsu"],
                cps: ["Latn", ["AS"], "Capiceño"],
                cr: ["Cans", ["AM"], "ᓀᐦᐃᔭᐍᐏᐣ"],
                "cr-cans": ["cr"],
                "cr-latn": ["Latn", ["AM"], "Nēhiyawēwin"],
                crh: ["Latn", ["EU"], "qırımtatarca"],
                "crh-cyrl": ["Cyrl", ["EU"], "къырымтатарджа"],
                "crh-latn": ["crh"],
                cs: ["Latn", ["EU"], "česky"],
                csb: ["Latn", ["EU"], "kaszëbsczi"],
                cu: ["Cyrl", ["EU"], "словѣ́ньскъ / ⰔⰎⰑⰂⰡⰐⰠⰔⰍⰟ"],
                cv: ["Cyrl", ["EU"], "Чӑвашла"],
                cy: ["Latn", ["EU"], "Cymraeg"],
                da: ["Latn", ["EU"], "dansk"],
                "de-at": ["Latn", ["EU"], "Österreichisches Deutsch"],
                "de-ch": ["Latn", ["EU"], "Schweizer Hochdeutsch"],
                "de-formal": ["Latn", ["EU"], "Deutsch (Sie-Form)"],
                de: ["Latn", ["EU"], "Deutsch"],
                diq: ["Latn", ["EU", "AS"], "Zazaki"],
                dsb: ["Latn", ["EU"], "dolnoserbski"],
                dtp: ["Latn", ["AS"], "Dusun Bundu-liwan"],
                dv: ["Thaa", ["AS"], "ދިވެހިބަސް"],
                dz: ["Tibt", ["AS"], "ཇོང་ཁ"],
                ee: ["Latn", ["AF"], "eʋegbe"],
                egl: ["Latn", ["EU"], "Emiliàn"],
                el: ["Grek", ["EU"], "Ελληνικά"],
                eml: ["Latn", ["EU"], "emiliàn e rumagnòl"],
                "en-ca": ["Latn", ["AM"], "Canadian English"],
                "en-gb": ["Latn", ["EU", "AS", "PA"], "British English"],
                en: ["Latn", ["EU", "AM", "AF", "ME", "AS", "PA", "WW"], "English"],
                eo: ["Latn", ["WW"], "Esperanto"],
                "es-419": ["Latn", ["AM"], "español de America Latina"],
                "es-formal": ["Latn", ["EU", "AM", "AF", "WW"], "español (formal)"],
                es: ["Latn", ["EU", "AM", "AF", "WW"], "español"],
                esu: ["Latn", ["AM"], "Yup'ik"],
                et: ["Latn", ["EU"], "eesti"],
                eu: ["Latn", ["EU"], "euskara"],
                ext: ["Latn", ["EU"], "estremeñu"],
                fa: ["Arab", ["ME"], "فارسی"],
                ff: ["Latn", ["AF"], "Fulfulde"],
                fi: ["Latn", ["EU"], "suomi"],
                fil: ["tl"],
                fit: ["Latn", ["EU"], "meänkieli"],
                "fiu-vro": ["vro"],
                fj: ["Latn", ["PA"], "Na Vosa Vakaviti"],
                fo: ["Latn", ["EU"], "føroyskt"],
                fr: ["Latn", ["EU", "AM", "WW"], "français"],
                frc: ["Latn", ["AM"], "français cadien"],
                frp: ["Latn", ["EU"], "arpetan"],
                frr: ["Latn", ["EU"], "Nordfriisk"],
                fur: ["Latn", ["EU"], "furlan"],
                fy: ["Latn", ["EU"], "Frysk"],
                ga: ["Latn", ["EU"], "Gaeilge"],
                gag: ["Latn", ["EU"], "Gagauz"],
                gah: ["Latn", ["AS"], "Alekano"],
                "gan-hans": ["Hans", ["AS"], "赣语（简体"],
                "gan-hant": ["gan"],
                gan: ["Hant", ["AS"], "贛語"],
                gbz: ["Latn", ["AS"], "Dari"],
                gcf: ["Latn", ["AM"], "Guadeloupean Creole French"],
                gd: ["Latn", ["EU"], "Gàidhlig"],
                gl: ["Latn", ["EU"], "galego"],
                glk: ["Arab", ["ME"], "گیلکی"],
                gn: ["Latn", ["AM"], "Avañe'ẽ"],
                gom: ["Deva", ["AS"], "कोंकणी"],
                "gom-deva": ["gom"],
                "gom-latn": ["Latn", ["AS"], "Konknni"],
                got: ["Goth", ["EU"], "𐌲𐌿𐍄𐌹𐍃𐌺"],
                grc: ["Grek", ["EU"], "Ἀρχαία ἑλληνικὴ"],
                gsw: ["Latn", ["EU"], "Alemannisch"],
                gu: ["Gujr", ["AS"], "ગુજરાતી"],
                guc: ["Latn", ["AM"], "Wayúu"],
                gur: ["Latn", ["AF"], "Gurenɛ"],
                gv: ["Latn", ["EU"], "Gaelg"],
                "ha-arab": ["Arab", ["AF"], "هَوُسَ"],
                "ha-latn": ["Latn", ["AF"], "Hausa"],
                ha: ["ha-latn"],
                hak: ["Latn", ["AS"], "Hak-kâ-fa"],
                haw: ["Latn", ["AM", "PA"], "Hawai`i"],
                he: ["Hebr", ["ME"], "עברית"],
                hi: ["Deva", ["AS"], "हिन्दी"],
                hif: ["Latn", ["PA", "AS"], "Fiji Hindi"],
                "hif-deva": ["Deva", ["AS"], "फ़ीजी हिन्दी"],
                "hif-latn": ["hif"],
                hil: ["Latn", ["AS"], "Ilonggo"],
                hne: ["Deva", ["AS"], "छत्तीसगढ़ी"],
                ho: ["Latn", ["PA"], "Hiri Motu"],
                hr: ["Latn", ["EU"], "hrvatski"],
                hsb: ["Latn", ["EU"], "hornjoserbsce"],
                hsn: ["Hans", ["AS"], "湘语"],
                ht: ["Latn", ["AM"], "Kreyòl ayisyen"],
                "hu-formal": ["Latn", ["EU"], "Magyar (magázó)"],
                hu: ["Latn", ["EU"], "magyar"],
                hy: ["Armn", ["EU", "ME"], "Հայերեն"],
                hz: ["Latn", ["AF"], "Otsiherero"],
                ia: ["Latn", ["WW"], "interlingua"],
                id: ["Latn", ["AS"], "Bahasa Indonesia"],
                ie: ["Latn", ["WW"], "Interlingue"],
                ig: ["Latn", ["AF"], "Igbo"],
                ii: ["Yiii", ["AS"], "ꆇꉙ"],
                ik: ["Latn", ["AM"], "Iñupiak"],
                "ike-cans": ["Cans", ["AM"], "ᐃᓄᒃᑎᑐᑦ"],
                "ike-latn": ["Latn", ["AM"], "inuktitut"],
                ilo: ["Latn", ["AS"], "Ilokano"],
                inh: ["Cyrl", ["EU"], "ГӀалгӀай"],
                io: ["Latn", ["WW"], "Ido"],
                is: ["Latn", ["EU"], "íslenska"],
                it: ["Latn", ["EU"], "italiano"],
                iu: ["Cans", ["AM"], "ᐃᓄᒃᑎᑐᑦ"],
                ja: ["Jpan", ["AS"], "日本語"],
                jam: ["Latn", ["AM"], "Patois"],
                jbo: ["Latn", ["WW"], "Lojban"],
                jut: ["Latn", ["EU"], "jysk"],
                jv: ["Latn", ["AS", "PA"], "Basa Jawa"],
                "jv-java": ["Java", ["AS", "PA"], "ꦧꦱꦗꦮ"],
                ka: ["Geor", ["EU"], "ქართული"],
                kaa: ["Latn", ["AS"], "Qaraqalpaqsha"],
                kab: ["Latn", ["AF", "EU"], "Taqbaylit"],
                "kbd-cyrl": ["kbd"],
                "kbd-latn": ["Latn", ["EU"], "Qabardjajəbza"],
                kbd: ["Cyrl", ["EU", "ME"], "Адыгэбзэ"],
                kea: ["Latn", ["AF"], "Kabuverdianu"],
                kg: ["Latn", ["AF"], "Kongo"],
                kgp: ["Latn", ["AM"], "Kaingáng"],
                khw: ["Arab", ["ME", "AS"], "کھوار"],
                ki: ["Latn", ["AF"], "Gĩkũyũ"],
                kiu: ["Latn", ["EU", "ME"], "Kırmancki"],
                kj: ["Latn", ["AF"], "Kwanyama"],
                kk: ["kk-cyrl"],
                "kk-arab": ["Arab", ["EU", "AS"], "قازاقشا (تٴوتە)"],
                "kk-cn": ["kk-arab"],
                "kk-cyrl": ["Cyrl", ["EU", "AS"], "қазақша"],
                "kk-kz": ["kk-cyrl"],
                "kk-latn": ["Latn", ["EU", "AS", "ME"], "qazaqşa"],
                "kk-tr": ["kk-latn"],
                kl: ["Latn", ["AM", "EU"], "kalaallisut"],
                km: ["Khmr", ["AS"], "ភាសាខ្មែរ"],
                kn: ["Knda", ["AS"], "ಕನ್ನಡ"],
                "ko-kp": ["Kore", ["AS"], "한국어 (조선)"],
                ko: ["Kore", ["AS"], "한국어"],
                koi: ["Cyrl", ["EU"], "Перем Коми"],
                kr: ["Latn", ["AF"], "Kanuri"],
                krc: ["Cyrl", ["EU"], "къарачай-малкъар"],
                kri: ["Latn", ["AF"], "Krio"],
                krj: ["Latn", ["ME", "EU"], "Kinaray-a"],
                krl: ["Latn", ["EU"], "Karjala"],
                "ks-arab": ["Arab", ["AS"], "کٲشُر"],
                "ks-deva": ["Deva", ["AS"], "कॉशुर"],
                ks: ["Arab", ["AS"], "کٲشُر"],
                ksf: ["Latn", ["AF"], "Bafia"],
                ksh: ["Latn", ["EU"], "Ripoarisch"],
                ku: ["ku-latn"],
                "ku-arab": ["Arab", ["EU", "ME"], "كوردي"],
                "ku-latn": ["Latn", ["EU", "ME"], "Kurdî"],
                kv: ["Cyrl", ["EU"], "коми"],
                kw: ["Latn", ["EU"], "kernowek"],
                ky: ["Cyrl", ["AS"], "Кыргызча"],
                la: ["Latn", ["EU"], "Latina"],
                lad: ["lad-latn"],
                "lad-latn": ["Latn", ["ME", "EU", "AM"], "Ladino"],
                "lad-hebr": ["Hebr", ["ME", "EU", "AM"], "לאדינו"],
                lb: ["Latn", ["EU"], "Lëtzebuergesch"],
                lbe: ["Cyrl", ["EU"], "лакку"],
                lez: ["Cyrl", ["EU"], "лезги"],
                lfn: ["Latn", ["WW"], "Lingua Franca Nova"],
                lg: ["Latn", ["AF"], "Luganda"],
                li: ["Latn", ["EU"], "Limburgs"],
                lij: ["Latn", ["EU"], "Ligure"],
                liv: ["Latn", ["EU"], "Līvõ kēļ"],
                lld: ["Latn", ["EU"], "Ladin"],
                lmo: ["Latn", ["EU"], "lumbaart"],
                ln: ["Latn", ["AF"], "lingála"],
                lo: ["Laoo", ["AS"], "ລາວ"],
                loz: ["Latn", ["AF"], "Silozi"],
                lt: ["Latn", ["EU"], "lietuvių"],
                ltg: ["Latn", ["EU"], "latgaļu"],
                lus: ["Latn", ["AS"], "Mizo ţawng"],
                lv: ["Latn", ["EU"], "latviešu"],
                lzh: ["Hant", ["AS"], "文言"],
                lzz: ["Latn", ["EU", "ME"], "Lazuri"],
                mai: ["Deva", ["AS"], "मैथिली"],
                "map-bms": ["Latn", ["AS"], "Basa Banyumasan"],
                mdf: ["Cyrl", ["EU"], "мокшень"],
                mfe: ["Latn", ["AM"], "Morisyen"],
                mg: ["Latn", ["AF"], "Malagasy"],
                mh: ["Latn", ["PA"], "Ebon"],
                mhr: ["Cyrl", ["EU"], "олык марий"],
                mi: ["Latn", ["PA"], "Māori"],
                mic: ["Latn", ["AM"], "Mi'kmaq"],
                min: ["Latn", ["AS"], "Baso Minangkabau"],
                mk: ["Cyrl", ["EU"], "македонски"],
                ml: ["Mlym", ["AS", "ME"], "മലയാളം"],
                mn: ["Cyrl", ["AS"], "монгол"],
                mnc: ["Mong", ["AS"], "ᠮᠠᠨᠵᡠ ᡤᡳᠰᡠᠨ"],
                mni: ["Beng", ["AS"], "মেইতেই লোন্"],
                mnw: ["Mymr", ["AS"], "ဘာသာ မန်"],
                mo: ["Cyrl", ["EU"], "молдовеняскэ"],
                mr: ["Deva", ["AS", "ME"], "मराठी"],
                mrj: ["Cyrl", ["EU"], "кырык мары"],
                ms: ["Latn", ["AS"], "Bahasa Melayu"],
                mt: ["Latn", ["EU"], "Malti"],
                mui: ["Latn", ["AS"], "Musi"],
                mus: ["Latn", ["AM"], "Mvskoke"],
                mwl: ["Latn", ["EU"], "Mirandés"],
                mwv: ["Latn", ["AS"], "Behase Mentawei"],
                my: ["Mymr", ["AS"], "မြန်မာဘာသာ"],
                myv: ["Cyrl", ["EU"], "эрзянь"],
                mzn: ["Arab", ["ME", "AS"], "مازِرونی"],
                na: ["Latn", ["PA"], "Dorerin Naoero"],
                nah: ["Latn", ["AM"], "Nāhuatl"],
                nan: ["Latn", ["AS"], "Bân-lâm-gú"],
                nap: ["Latn", ["EU"], "Nnapulitano"],
                nb: ["Latn", ["EU"], "norsk (bokmål)"],
                "nds-nl": ["Latn", ["EU"], "Nedersaksisch"],
                nds: ["Latn", ["EU"], "Plattdüütsch"],
                ne: ["Deva", ["AS"], "नेपाली"],
                new: ["Deva", ["AS"], "नेपाल भाषा"],
                ng: ["Latn", ["AF"], "Oshiwambo"],
                niu: ["Latn", ["PA"], "ko e vagahau Niuē"],
                njo: ["Latn", ["AS"], "Ao"],
                "nl-informal": ["Latn", ["EU", "AM"], "Nederlands (informeel)"],
                nl: ["Latn", ["EU", "AM"], "Nederlands"],
                nn: ["Latn", ["EU"], "norsk (nynorsk)"],
                no: ["Latn", ["EU"], "norsk"],
                nov: ["Latn", ["WW"], "Novial"],
                nqo: ["Nkoo", ["AF"], "ߒߞߏ"],
                nrm: ["Latn", ["EU"], "Nouormand"],
                nso: ["Latn", ["AF"], "Sesotho sa Leboa"],
                nv: ["Latn", ["AM"], "Diné bizaad"],
                ny: ["Latn", ["AF"], "Chi-Chewa"],
                oc: ["Latn", ["EU"], "occitan"],
                om: ["Latn", ["AF"], "Oromoo"],
                or: ["Orya", ["AS"], "ଓଡ଼ିଆ"],
                os: ["Cyrl", ["EU"], "Ирон"],
                pa: ["pa-guru"],
                "pa-guru": ["Guru", ["AS"], "ਪੰਜਾਬੀ"],
                pag: ["Latn", ["AS"], "Pangasinan"],
                pam: ["Latn", ["AS"], "Kapampangan"],
                pap: ["Latn", ["AM"], "Papiamentu"],
                pcd: ["Latn", ["EU"], "Picard"],
                pdc: ["Latn", ["EU", "AM"], "Deitsch"],
                pdt: ["Latn", ["EU", "AM"], "Plautdietsch"],
                pfl: ["Latn", ["EU"], "Pälzisch"],
                pi: ["Deva", ["AS"], "पालि"],
                pih: ["Latn", ["PA"], "Norfuk / Pitkern"],
                pis: ["Latn", ["PA"], "Pijin"],
                pko: ["Latn", ["AF"], "Pökoot"],
                pl: ["Latn", ["EU"], "polski"],
                pms: ["Latn", ["EU"], "Piemontèis"],
                pnb: ["Arab", ["AS", "ME"], "پنجابی"],
                pnt: ["Grek", ["EU"], "Ποντιακά"],
                ppl: ["Latn", ["AM"], "Nawat"],
                prg: ["Latn", ["EU"], "Prūsiskan"],
                ps: ["Arab", ["AS", "ME"], "پښتو"],
                "pt-br": ["Latn", ["AM"], "português do Brasil"],
                pt: ["Latn", ["EU", "AM", "AS", "PA", "AF", "WW"], "português"],
                qu: ["Latn", ["AM"], "Runa Simi"],
                qug: ["Latn", ["AM"], "Runa shimi"],
                rap: ["Latn", ["AM"], "arero rapa nui"],
                rgn: ["Latn", ["EU"], "Rumagnôl"],
                rif: ["Latn", ["AF"], "Tarifit"],
                rki: ["Mymr", ["AS"], "ရခိုင်"],
                rm: ["Latn", ["EU"], "rumantsch"],
                rmy: ["Latn", ["EU"], "Romani"],
                rn: ["Latn", ["AF"], "Kirundi"],
                ro: ["Latn", ["EU"], "română"],
                "roa-rup": ["rup"],
                "roa-tara": ["Latn", ["EU"], "tarandíne"],
                rtm: ["Latn", ["PA"], "Faeag Rotuma"],
                ru: ["Cyrl", ["EU", "AS", "ME"], "русский"],
                rue: ["Cyrl", ["EU"], "русиньскый"],
                rup: ["Latn", ["EU"], "Armãneashce"],
                ruq: ["Cyrl", ["EU"], "Влахесте"],
                "ruq-cyrl": ["ruq"],
                "ruq-grek": ["Grek", ["EU"], "Megleno-Romanian (Greek script)"],
                "ruq-latn": ["Latn", ["EU"], "Vlăheşte"],
                rw: ["Latn", ["AF"], "Kinyarwanda"],
                ryu: ["Kana", ["AS"], "ʔucināguci"],
                sa: ["Deva", ["AS"], "संस्कृतम्"],
                sah: ["Cyrl", ["EU", "AS"], "саха тыла"],
                sat: ["Latn", ["AS"], "Santali"],
                saz: ["Saur", ["AS"], "ꢱꣃꢬꢵꢯ꣄ꢡ꣄ꢬꢵ"],
                sc: ["Latn", ["EU"], "sardu"],
                scn: ["Latn", ["EU"], "sicilianu"],
                sco: ["Latn", ["EU"], "Scots"],
                sd: ["Arab", ["AS"], "سنڌي"],
                sdc: ["Latn", ["EU"], "Sassaresu"],
                se: ["Latn", ["EU"], "sámegiella"],
                sei: ["Latn", ["AM"], "Cmique Itom"],
                sg: ["Latn", ["AF"], "Sängö"],
                sgs: ["Latn", ["EU"], "žemaitėška"],
                sh: ["Latn", ["EU"], "srpskohrvatski"],
                "shi-latn": ["Latn", ["AF"], "Tašlḥiyt"],
                "shi-tfng": ["Tfng", ["AF"], "ⵜⴰⵛⵍⵃⵉⵜ"],
                shi: ["shi-latn"],
                shn: ["Mymr", ["AS"], "လိၵ်ႈတႆး"],
                si: ["Sinh", ["AS"], "සිංහල"],
                simple: ["Latn", ["WW"], "Simple English"],
                sk: ["Latn", ["EU"], "slovenčina"],
                sl: ["Latn", ["EU"], "slovenščina"],
                sli: ["Latn", ["EU"], "Schläsch"],
                slr: ["Latn", ["AS"], "Salırça"],
                sly: ["Latn", ["AS"], "Bahasa Selayar"],
                syc: ["Syrc", ["ME"], "ܣܘܪܝܝܐ"],
                sm: ["Latn", ["PA"], "Gagana Samoa"],
                sma: ["Latn", ["EU"], "åarjelsaemien"],
                smj: ["Latn", ["EU"], "julevsámegiella"],
                smn: ["Latn", ["EU"], "anarâškielâ"],
                sms: ["Latn", ["EU"], "sää´mǩiõll"],
                sn: ["Latn", ["AF"], "chiShona"],
                so: ["Latn", ["AF"], "Soomaaliga"],
                sq: ["Latn", ["EU"], "shqip"],
                sr: ["sr-cyrl"],
                "sr-ec": ["sr-cyrl"],
                "sr-cyrl": ["Cyrl", ["EU"], "српски"],
                "sr-el": ["sr-latn"],
                "sr-latn": ["Latn", ["EU"], "srpski"],
                srn: ["Latn", ["AM", "EU"], "Sranantongo"],
                ss: ["Latn", ["AF"], "SiSwati"],
                st: ["Latn", ["AF"], "Sesotho"],
                stq: ["Latn", ["EU"], "Seeltersk"],
                su: ["Latn", ["AS"], "Basa Sunda"],
                sv: ["Latn", ["EU"], "svenska"],
                sw: ["Latn", ["AF"], "Kiswahili"],
                swb: ["Latn", ["AF"], "Shikomoro"],
                sxu: ["Latn", ["EU"], "Säggssch"],
                szl: ["Latn", ["EU"], "ślůnski"],
                ta: ["Taml", ["AS"], "தமிழ்"],
                tcy: ["Knda", ["AS"], "ತುಳು"],
                te: ["Telu", ["AS"], "తెలుగు"],
                tet: ["Latn", ["AS", "PA"], "tetun"],
                "tg-cyrl": ["Cyrl", ["AS"], "тоҷикӣ"],
                "tg-latn": ["Latn", ["AS"], "tojikī"],
                tg: ["Cyrl", ["AS"], "тоҷикӣ"],
                th: ["Thai", ["AS"], "ไทย"],
                ti: ["Ethi", ["AF"], "ትግርኛ"],
                tk: ["Latn", ["AS"], "Türkmençe"],
                tkr: ["Cyrl", ["AS"], "ЦӀаьхна миз"],
                tl: ["Latn", ["AS"], "Tagalog"],
                tly: ["Cyrl", ["EU", "AS", "ME"], "толышә зывон"],
                tn: ["Latn", ["AF"], "Setswana"],
                to: ["Latn", ["PA"], "lea faka-Tonga"],
                tokipona: ["Latn", ["WW"], "Toki Pona"],
                tpi: ["Latn", ["PA", "AS"], "Tok Pisin"],
                tr: ["Latn", ["EU", "ME"], "Türkçe"],
                trp: ["Latn", ["AS"], "Kokborok (Tripuri)"],
                tru: ["Latn", ["AS"], "Ṫuroyo"],
                ts: ["Latn", ["AF"], "Xitsonga"],
                tsd: ["Grek", ["EU"], "Τσακωνικά"],
                tt: ["Cyrl", ["EU"], "татарча"],
                "tt-cyrl": ["tt"],
                "tt-latn": ["Latn", ["EU"], "tatarça"],
                ttt: ["Cyrl", ["AS"], "Tati"],
                tum: ["Latn", ["AF"], "chiTumbuka"],
                tw: ["Latn", ["AF"], "Twi"],
                twd: ["Latn", ["EU"], "Tweants"],
                ty: ["Latn", ["PA"], "Reo Mā`ohi"],
                tyv: ["Cyrl", ["AS"], "тыва дыл"],
                tzm: ["Tfng", ["AF"], "ⵜⴰⵎⴰⵣⵉⵖⵜ"],
                udm: ["Cyrl", ["EU"], "удмурт"],
                ug: ["ug-arab"],
                "ug-arab": ["Arab", ["AS"], "ئۇيغۇرچە"],
                "ug-latn": ["Latn", ["AS"], "uyghurche"],
                "ug-cyrl": ["Cyrl", ["AS"], "уйғурчә"],
                uk: ["Cyrl", ["EU"], "українська"],
                ur: ["Arab", ["AS", "ME"], "اردو"],
                uz: ["Latn", ["AS"], "oʻzbekcha"],
                ve: ["Latn", ["AF"], "Tshivenda"],
                vec: ["Latn", ["EU"], "vèneto"],
                vep: ["Latn", ["EU"], "vepsän kel’"],
                vi: ["Latn", ["AS"], "Tiếng Việt"],
                vls: ["Latn", ["EU"], "West-Vlams"],
                vmf: ["Latn", ["EU"], "Mainfränkisch"],
                vo: ["Latn", ["WW"], "Volapük"],
                vot: ["Latn", ["EU"], "Vaďďa"],
                vro: ["Latn", ["EU"], "Võro"],
                wa: ["Latn", ["EU"], "walon"],
                war: ["Latn", ["AS"], "Winaray"],
                wls: ["Latn", ["PA"], "Faka'uvea"],
                wo: ["Latn", ["AF"], "Wolof"],
                wuu: ["Hans", ["AS"], "吴语"],
                xal: ["Cyrl", ["EU"], "хальмг"],
                xh: ["Latn", ["AF"], "isiXhosa"],
                xmf: ["Geor", ["EU"], "მარგალური"],
                ydd: ["Hebr", ["AS", "EU"], "Eastern Yiddish"],
                yi: ["Hebr", ["ME", "EU", "AM"], "ייִדיש"],
                yo: ["Latn", ["AF"], "Yorùbá"],
                yrk: ["Cyrl", ["AS"], "Ненэцяʼ вада"],
                yrl: ["Latn", ["AM"], "ñe'engatú"],
                yua: ["Latn", ["AM"], "Maaya T'aan"],
                yue: ["Hant", ["AS"], "粵語"],
                za: ["Latn", ["AS"], "Vahcuengh"],
                zea: ["Latn", ["EU"], "Zeêuws"],
                zh: ["Hans", ["AS"], "中文"],
                "zh-classical": ["Hant", ["AS"], "文言"],
                "zh-cn": ["Hans", ["AS"], "中文（中国大陆）"],
                "zh-hans": ["Hans", ["AS"], "中文（简体）"],
                "zh-hant": ["Hant", ["AS"], "中文（繁體）"],
                "zh-hk": ["Hant", ["AS"], "中文（香港）"],
                "zh-min-nan": ["nan"],
                "zh-mo": ["Hant", ["AS"], "中文（澳門）"],
                "zh-my": ["Hans", ["AS"], "中文（马来西亚）"],
                "zh-sg": ["Hans", ["AS"], "中文（新加坡）"],
                "zh-tw": ["Hant", ["AS"], "中文（台灣）"],
                "zh-yue": ["yue"],
                zu: ["Latn", ["AF"], "isiZulu"]
            },
            scriptgroups: {
                Latin: ["Latn", "Goth"],
                Greek: ["Grek"],
                WestCaucasian: ["Armn", "Geor"],
                Arabic: ["Arab"],
                MiddleEastern: ["Hebr", "Syrc"],
                African: ["Ethi", "Nkoo", "Tfng"],
                SouthAsian: ["Beng", "Deva", "Gujr", "Guru", "Knda", "Mlym", "Orya", "Saur", "Sinh", "Taml", "Telu", "Tibt", "Thaa"],
                Cyrillic: ["Cyrl"],
                CJK: ["Hans", "Hant", "Kana", "Kore", "Jpan", "Yiii"],
                SouthEastAsian: ["Batk", "Bugi", "Java", "Khmr", "Laoo", "Mymr", "Thai"],
                Mongolian: ["Mong"],
                SignWriting: ["Sgnw"],
                NativeAmerican: ["Cher", "Cans"],
                Special: ["Zyyy"]
            },
            rtlscripts: ["Arab", "Hebr", "Syrc", "Nkoo", "Thaa"],
            regiongroups: {WW: 1, SP: 1, AM: 2, EU: 3, ME: 3, AF: 3, AS: 4, PA: 4},
            territories: {
                AC: ["en"],
                AD: ["ca", "es", "fr"],
                AE: ["ar", "ml", "ps", "bal", "fa"],
                AF: ["fa", "ps", "haz", "uz-arab", "tk-latn", "prd", "bal", "ug-arab", "kk-arab"],
                AG: ["en", "pt"],
                AI: ["en"],
                AL: ["sq", "el", "mk"],
                AM: ["hy", "az-latn", "ku-latn"],
                AO: ["pt", "umb", "kmb", "ln"],
                AQ: ["und"],
                AR: ["es", "cy", "gn"],
                AS: ["sm", "en"],
                AT: ["de", "hr", "sl", "hu"],
                AU: ["en", "zh-hant", "it"],
                AW: ["nl", "pap", "en"],
                AX: ["sv"],
                AZ: ["az-latn", "az-cyrl", "ku-latn"],
                BA: ["bs-cyrl", "bs-latn", "hr", "sr-cyrl", "sr-latn"],
                BB: ["en"],
                BD: ["bn", "syl", "ccp", "my", "grt", "mni", "rkt"],
                BE: ["nl", "en", "fr", "wa", "de"],
                BF: ["mos", "dyu", "fr"],
                BG: ["bg", "tr"],
                BH: ["ar", "ml"],
                BI: ["rn", "fr", "sw"],
                BJ: ["fr", "fon", "yo"],
                BL: ["fr"],
                BM: ["en"],
                BN: ["ms-latn", "zh-hant", "ms-arab", "en"],
                BO: ["es", "qu", "ay", "gn"],
                BQ: ["pap", "nl"],
                BR: ["pt", "de", "it", "ja", "ko", "kgp", "gub", "xav"],
                BS: ["en"],
                BT: ["dz", "ne", "tsj", "lep"],
                BV: ["und"],
                BW: ["en", "tn", "af"],
                BY: ["be", "ru"],
                BZ: ["en", "es"],
                CA: ["en", "fr", "it", "de", "cr-cans", "crk", "iu", "moe", "crj", "atj", "crl", "csw", "crm", "ikt", "dgr", "den", "scs", "nsk", "chp", "gwi"],
                CC: ["ms-arab", "en"],
                CD: ["sw", "lua", "fr", "ln", "lu", "kg", "lol", "rw"],
                CF: ["fr", "sg", "ln"],
                CG: ["fr", "ln"],
                CH: ["de", "fr", "gsw", "it", "lmo", "rm", "rmo", "wae"],
                CI: ["fr", "bci", "sef", "daf", "kfo", "bqv"],
                CK: ["en"],
                CL: ["es"],
                CM: ["fr", "en", "bum", "ff", "ewo", "ybb", "bbj", "nnh", "bkm", "bas", "bax", "byv", "mua", "maf", "bfd", "bss", "kkj", "dua", "ar", "ksf", "agq", "ha-arab", "nmg", "yav"],
                CN: ["zh-hans", "ii", "ug-arab", "za", "mn-mong", "bo", "ko", "kk-arab", "lis", "ky-arab", "nbf", "khb", "tdd", "lcp", "en", "ru", "vi", "uz-cyrl"],
                CO: ["es"],
                CP: ["fr"],
                CR: ["es"],
                CU: ["es"],
                CV: ["kea", "pt"],
                CW: ["pap", "nl", "es"],
                CX: ["en"],
                CY: ["el", "tr", "hy", "ar"],
                CZ: ["cs", "de", "pl"],
                DE: ["de", "en", "nds", "tr", "hr", "it", "ku-latn", "ru", "el", "ksh", "pl", "es", "nl", "da", "dsb"],
                DG: ["en"],
                DJ: ["aa", "so", "ar", "fr"],
                DK: ["da", "de", "kl"],
                DM: ["en"],
                DO: ["es", "en"],
                DZ: ["ar", "fr", "kab"],
                EA: ["es"],
                EC: ["es"],
                EE: ["et", "ru"],
                EG: ["ar", "el"],
                EH: ["ar"],
                ER: ["ti", "tig", "ar", "aa", "ssy", "byn"],
                ES: ["es", "en", "ca", "gl", "eu", "ast"],
                ET: ["en", "am", "om", "so", "ti", "sid", "wal", "aa"],
                FI: ["fi", "sv", "ru", "en", "et", "rmf", "se", "smn", "sms"],
                FJ: ["en", "hi", "fj"],
                FK: ["en"],
                FM: ["chk", "pon", "kos", "yap", "en", "uli"],
                FO: ["fo"],
                FR: ["fr", "en", "oc", "it", "pt", "gsw", "br", "co", "ca", "nl", "eu"],
                GA: ["fr", "puu", "mdt"],
                GB: ["en", "sco", "pa-guru", "cy", "bn", "zh-hant", "syl", "el", "it", "ks-arab", "gd", "ml", "ga", "fr", "kw"],
                GD: ["en"],
                GE: ["ka", "ru", "hy", "ab", "os", "ku-latn"],
                GF: ["fr", "gcr", "zh-hant"],
                GG: ["en"],
                GH: ["ak", "en", "ee", "abr", "gaa", "ha-latn", "saf"],
                GI: ["en"],
                GL: ["kl", "da"],
                GM: ["en", "man-latn"],
                GN: ["fr", "ff", "man-nkoo", "sus", "kpe"],
                GP: ["fr"],
                GQ: ["es", "fan", "fr", "bvb", "syi"],
                GR: ["el", "mk", "tr", "bg", "sq"],
                GS: ["und"],
                GT: ["es"],
                GU: ["en", "ch"],
                GW: ["pt"],
                GY: ["en"],
                HK: ["zh-hant", "en", "zh-hans"],
                HM: ["und"],
                HN: ["es", "en"],
                HR: ["hr", "it"],
                HT: ["ht", "fr"],
                HU: ["hu", "de", "ro", "hr", "sk", "sl"],
                IC: ["es"],
                ID: ["id", "jv", "su", "mad", "ms-arab", "min", "bya", "bjn", "ban", "bug", "ace", "bew", "sas", "bbc", "zh-hant", "mak", "ljp", "rej", "gor", "nij", "kge", "aoz", "mgy", "kvr", "lbw", "rob", "mdr", "sxn"],
                IE: ["en", "ga"],
                IL: ["he", "ar", "ru", "ro", "en", "pl", "hu", "am", "ti", "ml"],
                IM: ["en", "gv"],
                IN: ["hi", "en", "bn", "te", "mr", "ta", "ur", "gu", "kn", "ml", "or", "pa-guru", "bho", "awa", "as", "bgc", "mag", "mwr", "mai", "hne", "dcc", "bjj", "ne", "sat", "wtm", "rkt", "ks-arab", "kok", "swv", "gbm", "lmn", "sd-arab", "gon-telu", "kfy", "doi", "kru", "sck", "tcy", "wbq", "xnr", "wbr", "khn", "brx", "noe", "bhb", "mni", "raj", "hoc", "mtr", "unr-beng", "bhi", "hoj", "kha", "kfr", "grt", "unx-beng", "bfy", "srx", "saz", "ccp", "sd-deva", "bfq", "ria", "bo", "bft", "bra", "lep", "btv", "lif-deva", "lah", "sa", "kht", "dv", "dz"],
                IO: ["en"],
                IQ: ["ar", "ckb", "fa", "syr"],
                IR: ["fa", "az-arab", "glk", "ckb", "tk-latn", "sdh", "lrc", "ar", "bal", "rmt", "bqi", "luz", "lki", "prd", "hy", "ps", "ka", "kk-arab"],
                IS: ["is", "da"],
                IT: ["it", "en", "nap", "scn", "fur", "de", "fr", "sl", "ca", "el", "hr"],
                JE: ["en"],
                JM: ["en"],
                JO: ["ar"],
                JP: ["ja", "ryu", "ko"],
                KE: ["en", "sw", "ki", "luy", "luo", "kam", "kln", "guz", "mer", "mas", "ebu", "so", "dav", "teo", "pko", "om", "saq", "ar", "pa-guru", "gu"],
                KG: ["ky-cyrl", "ru"],
                KH: ["km", "cja", "kdt"],
                KI: ["en", "gil"],
                KM: ["ar", "fr", "zdj"],
                KN: ["en"],
                KP: ["ko"],
                KR: ["ko"],
                KW: ["ar"],
                KY: ["en"],
                KZ: ["ru", "kk-cyrl", "de", "ug-cyrl"],
                LA: ["lo", "kjg", "kdt"],
                LB: ["ar", "hy", "ku-arab", "fr", "en"],
                LC: ["en"],
                LI: ["de", "gsw", "wae"],
                LK: ["si", "ta", "en"],
                LR: ["en", "kpe", "vai-vaii", "men"],
                LS: ["st", "zu", "ss", "en", "xh"],
                LT: ["lt", "ru"],
                LU: ["fr", "lb", "de"],
                LV: ["lv", "ru"],
                LY: ["ar"],
                MA: ["ar", "fr", "tzm-latn", "shi-latn", "shi-tfng", "rif", "es"],
                MC: ["fr"],
                MD: ["ro", "bg", "gag", "ru"],
                ME: ["sr-latn", "sq"],
                MF: ["fr"],
                MG: ["mg", "fr", "en"],
                MH: ["en", "mh"],
                MK: ["mk", "sq", "tr"],
                ML: ["bm", "fr", "ffm", "snk", "mwk", "ses", "tmh", "khq", "dtm", "kao", "bzx", "ar", "bmq", "bze"],
                MM: ["my", "shn", "mnw", "kht"],
                MN: ["mn-cyrl", "kk-arab", "zh-hans", "ru", "ug-cyrl"],
                MO: ["zh-hant", "pt", "zh-hans"],
                MP: ["en", "ch"],
                MQ: ["fr"],
                MR: ["ar", "fr", "ff", "wo-latn"],
                MS: ["en"],
                MT: ["mt", "en"],
                MU: ["mfe", "en", "bho", "ur", "fr", "ta"],
                MV: ["dv"],
                MW: ["en", "ny", "tum", "zu"],
                MX: ["es", "yua", "nhe", "nhw", "maz", "nch"],
                MY: ["ms-latn", "en", "zh-hant", "ta", "bjn", "jv", "zmi", "ml", "bug"],
                MZ: ["pt", "vmw", "ndc", "ts", "ngl", "seh", "rng", "ny", "yao", "sw", "zu"],
                NA: ["kj", "ng", "naq", "en", "af", "de", "tn"],
                NC: ["fr"],
                NE: ["ha-latn", "fr", "dje", "fuq", "tmh", "ar", "twq"],
                NF: ["en"],
                NG: ["en", "ha-latn", "ig", "yo", "fuv", "tiv", "efi", "ibb", "ha-arab", "bin", "kaj", "kcg", "ar", "cch", "amo"],
                NI: ["es"],
                NL: ["nl", "en", "li", "fy", "gos", "id", "zea", "rif", "tr"],
                NO: ["nb", "nn", "se"],
                NP: ["ne", "mai", "bho", "new", "jml", "taj", "awa", "thl", "bap", "tdg", "thr", "mgp", "lif-deva", "thq", "mrd", "bfy", "xsr", "rjs", "tsf", "hi", "ggn", "gvr", "bo", "tkt", "tdh", "bn", "unr-deva", "lep"],
                NR: ["en", "na"],
                NU: ["en", "niu"],
                NZ: ["en", "mi"],
                OM: ["ar", "bal", "fa"],
                PA: ["es", "en", "zh-hant"],
                PE: ["es", "qu", "ay"],
                PF: ["fr", "ty", "zh-hant"],
                PG: ["tpi", "en", "ho"],
                PH: ["en", "fil", "es", "ceb", "ilo", "hil", "bik", "war", "bhk", "pam", "pag", "mdh", "tsg", "zh-hant", "bto", "hnn", "tbw", "bku"],
                PK: ["ur", "pa-arab", "en", "lah", "ps", "sd-arab", "skr", "bal", "brh", "hno", "fa", "hnd", "tg-arab", "gju", "bft", "kvx", "khw", "mvy", "kxp", "gjk", "ks-arab", "btv"],
                PL: ["pl", "de", "be", "uk", "csb"],
                PM: ["fr", "en"],
                PN: ["en"],
                PR: ["es", "en"],
                PS: ["ar"],
                PT: ["pt", "gl"],
                PW: ["pau", "en"],
                PY: ["gn", "es", "de"],
                QA: ["ar", "fa", "ml"],
                RE: ["fr", "rcf", "ta"],
                RO: ["ro", "hu", "de", "tr", "sr-latn", "bg", "el", "pl"],
                RS: ["sr-cyrl", "sr-latn", "sq", "hu", "ro", "sk"],
                RU: ["ru", "tt", "ba", "cv", "ce", "av", "udm", "chm", "sah", "os", "kbd", "myv", "dar", "bua", "mdf", "kum", "kv", "lez", "krc", "inh", "tyv", "ady", "krl", "koi", "lbe", "mrj", "alt", "fi", "sr-latn", "mn-cyrl"],
                RW: ["rw", "fr", "en"],
                SA: ["ar"],
                SB: ["en"],
                SC: ["crs", "fr", "en"],
                SD: ["ar", "en", "ha-arab"],
                SE: ["sv", "fi", "se", "smj", "sma", "ia"],
                SG: ["en", "zh-hans", "ms-latn", "ta", "ml", "pa-guru"],
                SH: ["en"],
                SI: ["sl", "hu", "it"],
                SJ: ["nb", "ru"],
                SK: ["sk", "hu", "uk", "pl", "de"],
                SL: ["kri", "en", "men", "tem"],
                SM: ["it", "eo"],
                SN: ["fr", "wo-latn", "ff", "srr"],
                SO: ["so", "ar", "sw", "om"],
                SR: ["nl", "srn", "zh-hant"],
                SS: ["ar", "en"],
                ST: ["pt"],
                SV: ["es"],
                SX: ["en", "es", "vic", "nl"],
                SY: ["ar", "ku-latn", "fr", "hy", "syr"],
                SZ: ["en", "ss", "zu", "ts"],
                TA: ["en"],
                TC: ["en"],
                TD: ["fr", "ar"],
                TF: ["fr"],
                TG: ["fr", "ee"],
                TH: ["th", "tts", "nod", "sou", "mfa", "zh-hant", "kxm", "kdt", "mnw", "shn", "lcp", "lwl"],
                TJ: ["tg-cyrl", "fa", "ar"],
                TK: ["en", "tkl"],
                TL: ["pt", "tet"],
                TM: ["tk-latn", "ru", "uz-latn", "ku-latn"],
                TN: ["ar", "fr"],
                TO: ["to", "en"],
                TR: ["tr", "ku-latn", "zza", "kbd", "az-latn", "ar", "bgx", "bg", "ady", "hy", "ka", "sr-latn", "sq", "ab", "el", "uz-latn", "ky-latn", "kk-cyrl"],
                TT: ["en", "es"],
                TV: ["tvl", "en"],
                TW: ["zh-hant", "trv"],
                TZ: ["sw", "en", "suk", "nym", "kde", "bez", "ksb", "mas", "asa", "lag", "jmc", "rof", "vun", "rwk"],
                UA: ["uk", "ru", "pl", "yi", "rue", "be", "ro", "bg", "tr", "hu", "el"],
                UG: ["sw", "lg", "nyn", "cgg", "xog", "en", "teo", "laj", "myx", "rw", "ttj", "hi"],
                UM: ["en"],
                US: ["en", "es", "zh-hant", "fr", "de", "fil", "it", "vi", "ko", "ru", "nv", "haw", "chr", "lkt", "ik"],
                UY: ["es"],
                UZ: ["uz-cyrl", "uz-latn", "ru", "kaa", "tr"],
                VA: ["it", "la"],
                VC: ["en"],
                VE: ["es"],
                VG: ["en"],
                VI: ["en"],
                VN: ["vi", "zh-hant", "cjm"],
                VU: ["bi", "en", "fr"],
                WF: ["wls", "fr", "fud"],
                WS: ["sm", "en"],
                XK: ["sq", "sr-cyrl", "sr-latn"],
                YE: ["ar"],
                YT: ["swb", "fr", "buc", "sw"],
                ZA: ["en", "zu", "xh", "af", "nso", "tn", "st", "ts", "ss", "ve", "hi", "nr", "sw"],
                ZM: ["en", "bem", "ny"],
                ZW: ["en", "sn", "nd", "mxc", "ndc", "kck", "ny", "ve", "tn"],
                ZZ: []
            }
        }
    }(jQuery), function (t) {
        "use strict";
        t.uls.data.isRedirect = function (e) {
            return void 0 !== t.uls.data.languages[e] && 1 === t.uls.data.languages[e].length && t.uls.data.languages[e][0]
        }, t.uls.data.getScript = function (e) {
            var n = t.uls.data.isRedirect(e);
            return n ? t.uls.data.getScript(n) : t.uls.data.languages[e] ? t.uls.data.languages[e][0] : "Zyyy"
        }, t.uls.data.getRegions = function (e) {
            var n = t.uls.data.isRedirect(e);
            return n ? t.uls.data.getRegions(n) : t.uls.data.languages[e] && t.uls.data.languages[e][1] || "UNKNOWN"
        }, t.uls.data.getAutonym = function (e) {
            var n = t.uls.data.isRedirect(e);
            return n ? t.uls.data.getAutonym(n) : t.uls.data.languages[e] && t.uls.data.languages[e][2] || e
        }, t.uls.data.getAutonyms = function () {
            var e, n = {};
            for (e in t.uls.data.languages) t.uls.data.isRedirect(e) || (n[e] = t.uls.data.getAutonym(e));
            return n
        }, t.uls.data.getAllRegions = function () {
            var e, n = [];
            for (e in t.uls.data.regiongroups) n.push(e);
            return n
        }, t.uls.data.getLanguagesInScript = function (e) {
            return t.uls.data.getLanguagesInScripts([e])
        }, t.uls.data.getLanguagesInScripts = function (e) {
            var n, i, a = [];
            for (n in t.uls.data.languages) if (!t.uls.data.isRedirect(n)) for (i = 0; i < e.length; i++) if (e[i] === t.uls.data.getScript(n)) {
                a.push(n);
                break
            }
            return a
        }, t.uls.data.getLanguagesInRegion = function (e) {
            return t.uls.data.getLanguagesInRegions([e])
        }, t.uls.data.getLanguagesInRegions = function (e) {
            var n, i, a = [];
            for (n in t.uls.data.languages) if (!t.uls.data.isRedirect(n)) for (i = 0; i < e.length; i++) if (-1 !== t.inArray(e[i], t.uls.data.getRegions(n))) {
                a.push(n);
                break
            }
            return a
        }, t.uls.data.getLanguagesInRegionGroup = function (e) {
            return t.uls.data.getLanguagesInRegions(t.uls.data.getRegionsInGroup(e))
        }, t.uls.data.getLanguagesByScriptInRegion = function (e) {
            var n, i, a = {};
            for (n in t.uls.data.languages) t.uls.data.isRedirect(n) || -1 !== t.inArray(e, t.uls.data.getRegions(n)) && (void 0 === a[i = t.uls.data.getScript(n)] && (a[i] = []), a[i].push(n));
            return a
        }, t.uls.data.getLanguagesByScriptGroupInRegion = function (e) {
            return t.uls.data.getLanguagesByScriptGroupInRegions([e])
        }, t.uls.data.getAllLanguagesByScriptGroup = function () {
            return t.uls.data.getLanguagesByScriptGroupInRegions(t.uls.data.getAllRegions())
        }, t.uls.data.getLanguagesByScriptGroup = function (e) {
            var n, i, a, o = {};
            for (n in e) i = t.uls.data.isRedirect(n) || n, o[a = t.uls.data.getScriptGroupOfLanguage(i)] || (o[a] = []), -1 === t.inArray(i, o[a]) && o[a].push(i);
            return o
        }, t.uls.data.getLanguagesByScriptGroupInRegions = function (e) {
            var n, i, a, o = {};
            for (n in t.uls.data.languages) if (!t.uls.data.isRedirect(n)) for (i = 0; i < e.length; i++) if (-1 !== t.inArray(e[i], t.uls.data.getRegions(n))) {
                void 0 === o[a = t.uls.data.getScriptGroupOfLanguage(n)] && (o[a] = []), o[a].push(n);
                break
            }
            return o
        }, t.uls.data.getAllLanguagesByRegionAndScript = function () {
            var e, n, i, a, o, s, r, l = {};
            for (e in t.uls.data.regiongroups) void 0 === l[n = t.uls.data.regiongroups[e]] && (l[n] = {}), l[n][e] = {};
            for (i in t.uls.data.languages) if (!t.uls.data.isRedirect(i)) for (a = t.uls.data.getScript(i), o = t.uls.data.getGroupOfScript(a), s = t.uls.data.getRegions(i), r = 0; r < s.length; r++) e = s[r], void 0 === l[n = t.uls.data.regiongroups[e]][e][o] && (l[n][e][o] = {}), void 0 === l[n][e][o][a] && (l[n][e][o][a] = []), l[n][e][o][a].push(i);
            return l
        }, t.uls.data.getRegionsInGroup = function (e) {
            var n, i = [];
            for (n in t.uls.data.regiongroups) t.uls.data.regiongroups[n] === e && i.push(n);
            return i
        }, t.uls.data.getGroupOfScript = function (e) {
            var n;
            for (n in t.uls.data.scriptgroups) if (-1 !== t.inArray(e, t.uls.data.scriptgroups[n])) return n;
            return "Other"
        }, t.uls.data.getScriptGroupOfLanguage = function (e) {
            return t.uls.data.getGroupOfScript(t.uls.data.getScript(e))
        }, t.uls.data.sortByAutonym = function (e, n) {
            var i = t.uls.data.getAutonym(e) || e, a = t.uls.data.getAutonym(n) || n;
            return i.toLowerCase() < a.toLowerCase() ? -1 : 1
        }, t.uls.data.isRtl = function (e) {
            return -1 !== t.inArray(t.uls.data.getScript(e), t.uls.data.rtlscripts)
        }, t.uls.data.getDir = function (e) {
            return t.uls.data.isRtl(e) ? "rtl" : "ltr"
        }, t.uls.data.getLanguagesInTerritory = function (e) {
            return t.uls.data.territories[e]
        }, t.uls.data.addLanguage = function (e, n) {
            n.target ? t.uls.data.languages[e] = [n.target] : t.uls.data.languages[e] = [n.script, n.regions, n.autonym]
        }, t.uls.data.deleteLanguage = function (e) {
            return !!t.uls.data.languages[e] && (delete t.uls.data.languages[e], !0)
        }
    }(jQuery), function (t) {
        "use strict";
        var e, n;
        e = '\t<div class="twelve columns uls-no-results-view">\t\t<h2 data-i18n="uls-no-results-found" class="eleven columns end offset-by-one uls-no-results-found-title">\t\tNo results found\t\t</h2>\t\t<div id="uls-no-found-more" class="uls-no-found-more">\t\t\t<div class="ten columns end offset-by-one">\t\t\t\t<p>\t\t\t\t\t<span data-i18n="uls-search-help">You can search by language name, \t\t\t\t\tscript name, ISO code of language or \t\t\t\t\tyou can browse by region:</span>\t\t\t\t\t<a class="uls-region-link" data-i18n="uls-region-AM" data-region="AM">America</a>, \t\t\t\t\t<a class="uls-region-link" data-i18n="uls-region-EU" data-region="EU">Europe</a>, \t\t\t\t\t<a class="uls-region-link" data-i18n="uls-region-ME" data-region="ME">Middle East</a>, \t\t\t\t\t<a class="uls-region-link" data-i18n="uls-region-AF" data-region="AF">Africa</a>, \t\t\t\t\t<a class="uls-region-link" data-i18n="uls-region-AS" data-region="AS">Asia</a>, \t\t\t\t\t<a class="uls-region-link" data-i18n="uls-region-PA" data-region="PA">Pacific</a>, \t\t\t\t\t<a class="uls-region-link" data-i18n="uls-region-WW" data-region="WW">Worldwide</a>.\t\t\t\t</p>\t\t\t</div>\t\t</div>\t</div>', (n = function (n, i) {
            this.$element = t(n), this.options = t.extend({}, t.fn.lcd.defaults, i), this.$element.addClass("lcd"), this.regionDivs = {}, this.$element.append(t(e)), this.$noResults = this.$element.find("div.uls-no-results-view"), this.render(), this.listen()
        }).prototype = {
            constructor: n, append: function (t, e) {
                this.addToRegion(t, e), this.$noResults.hide()
            }, addToRegion: function (e, n) {
                var i, a, o, s, r, l = this.options.languages[e], u = t.uls.data.getAutonym(e) || l || e, c = [];
                for (n ? c.push(n) : c = t.uls.data.getRegions(e), t.inArray("WW", c) > -1 && (c = ["WW"]), i = 0; i < c.length; i++) a = c[i], o = t("<li>").data("code", e).attr({
                    lang: e,
                    dir: t.uls.data.getDir(e)
                }).append(t("<a>").prop("title", l).html(u)), (r = (s = this.getColumn(a)).find("li:last").data("code")) && t.uls.data.getScriptGroupOfLanguage(r) !== t.uls.data.getScriptGroupOfLanguage(e) && s.find("li").length > 2 && (s = this.getColumn(a, !0)), s.append(o)
            }, getColumn: function (e, n) {
                var i, a, o;
                return n = n || !1, i = this.regionDivs[e], a = i.find("div.row:last"), (0 === (o = a.find("ul:last")).length || o.find("li").length >= 8 || n) && (o = t("<ul>").addClass("three columns end"), (0 === a.length || a.find("ul").length >= 4) && (a = t("<div>").addClass("row uls-language-block"), i.append(a), o.addClass("offset-by-one")), a.append(o)), t.inArray(e, this.options.showRegions) > -1 && i.show(), o
            }, render: function () {
                var e, n, i = this, a = {
                    WW: "Worldwide",
                    SP: "Special",
                    AM: "America",
                    EU: "Europe",
                    ME: "Middle East",
                    AS: "Asia",
                    AF: "Africa",
                    PA: "Pacific"
                };
                t.each(t.uls.data.regiongroups, function (o) {
                    e = t("<div>").addClass("twelve columns uls-lcd-region-section").prop("id", o), n = t("<h3>").attr("data-i18n", "uls-region-" + o).addClass("eleven columns uls-lcd-region-section uls-lcd-region-title offset-by-one").text(a[o]), e.append(n), i.$element.append(e), e.hide(), i.regionDivs[o] = e
                }), this.$noResults.hide(), this.i18n()
            }, i18n: function () {
                this.$element.find("[data-i18n]").i18n()
            }, quicklist: function () {
                var e, n, i, a, o, s, r, l, u;
                if (t.isFunction(this.options.quickList) && (this.options.quickList = this.options.quickList()), !this.options.quickList) return t([]);
                for ((e = (e = this.options.quickList).slice(0, 16)).sort(t.uls.data.sortByAutonym), n = t("<div>").addClass("twelve columns uls-lcd-region-section").prop("id", "uls-lcd-quicklist"), i = t("<h3>").attr("data-i18n", "uls-common-languages").addClass("eleven columns uls-lcd-region-section uls-lcd-region-title offset-by-one").text("Common languages"), n.append(i), this.$element.prepend(n), this.regionDivs.quick = n, a = 0; a < e.length; a++) o = this.getColumn("quick", a % 4 == 0), s = e[a], r = this.options.languages[s], l = t.uls.data.getAutonym(s) || r || s, u = t("<li>").data("code", s).attr({
                    lang: s,
                    dir: t.uls.data.getDir(s)
                }).append(t("<a>").prop("title", r).html(l)), o.append(u);
                return n.show(), i.i18n(), n
            }, show: function () {
                this.regionDivs || this.render()
            }, empty: function () {
                this.$element.find("div.uls-language-block").remove(), this.$element.find("div.uls-lcd-region-section").hide()
            }, focus: function () {
                this.$element.focus()
            }, noResults: function () {
                this.$noResults.show();
                var t = this.quicklist();
                t.find("h3").data("i18n", "uls-no-results-suggestion-title").text("You may be interested in:").i18n(), this.$noResults.find("h2").after(t)
            }, listen: function () {
                var e = this;
                this.options.clickhandler && this.$element.on("click", "div.row li", function () {
                    e.options.clickhandler.call(this, t(this).data("code"))
                }), e.$element.scroll(function () {
                    var n, i, a = t(this), o = a.position().top, s = a.height();
                    i = "WW", e.$element.find("div.uls-lcd-region-section").each(function () {
                        var e = t(this), n = e.position().top, a = e.height();
                        if (n - 10 <= o && a > s) return i = e.attr("id"), !0
                    }), n = t.uls.data.regiongroups[i], t(".regionselector").removeClass("active"), t("#uls-region-" + n).addClass("active")
                })
            }
        }, t.fn.lcd = function (e) {
            return this.each(function () {
                var i = t(this), a = i.data("lcd"), o = "object" == typeof e && e;
                a || i.data("lcd", a = new n(this, o)), "string" == typeof e && a[e]()
            })
        }, t.fn.lcd.defaults = {
            languages: null,
            showRegions: ["WW", "AM", "EU", "ME", "AF", "AS", "PA"]
        }, t.fn.lcd.Constructor = n
    }(jQuery), function (t) {
        "use strict";
        var e, n;
        e = function (e, n) {
            this.$element = t(e), this.options = t.extend({}, t.fn.regionselector.defaults, n), this.$element.addClass("languagefilter"), this.resultCount = 0, this.$suggestion = this.$element.parents().find("#" + this.$element.data("suggestion")), this.$clear = this.$element.parents().find("#" + this.$element.data("clear")), this.selectedLanguage = null, this.listen()
        }, n = function () {
            var t = 0;
            return function (e, n) {
                clearTimeout(t), t = setTimeout(e, n)
            }
        }(), e.prototype = {
            listen: function () {
                this.$element.on("keypress", t.proxy(this.keyup, this)).on("keyup", t.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", t.proxy(this.keyup, this)), this.$clear.length && this.$clear.on("click", t.proxy(this.clear, this)), this.toggleClear()
            }, keyup: function (e) {
                var i, a, o;
                switch (e.keyCode) {
                    case 9:
                        (i = this.$suggestion.val()) && i !== this.$element.val() && (this.$element.val(i), e.preventDefault(), e.stopPropagation());
                        break;
                    case 13:
                        if (!this.options.onSelect) break;
                        e.preventDefault(), e.stopPropagation(), a = t.trim(this.$element.val()).toLowerCase(), this.selectedLanguage ? this.options.onSelect(this.selectedLanguage) : this.options.languages[a] && this.options.onSelect(a);
                        break;
                    default:
                        if (o = this, e.which < 32 && 8 !== e.which) break;
                        this.selectedLanguage = null, n(function () {
                            o.$element.val() ? (o.options.$target.empty(), o.search()) : o.clear()
                        }, 300), this.toggleClear()
                }
            }, deactivate: function () {
                this.$element.val(""), t.fn.uls.Constructor.prototype.isMobile() || this.$element.focus(), this.toggleClear(), this.autofill()
            }, clear: function () {
                this.deactivate(), this.$element.trigger("searchclear")
            }, toggleClear: function () {
                this.$clear.length && (this.$element.val() ? this.$clear.show() : this.$clear.hide())
            }, search: function () {
                var e, n, i, a, o = t.trim(this.$element.val()),
                    s = t.uls.data.getLanguagesByScriptGroup(this.options.languages);
                this.resultCount = 0;
                for (n in s) for ((e = s[n]).sort(t.uls.data.sortByAutonym), i = 0; i < e.length; i++) a = e[i], ("" === o || this.filter(a, o)) && (0 === this.resultCount && this.autofill(a), o.toLowerCase() === a && (this.selectedLanguage = a), this.render(a), this.resultCount++);
                !this.resultCount && this.options.searchAPI && o ? this.searchAPI(o) : this.resultHandler(o)
            }, searchAPI: function (e) {
                var n = this;
                t.get(n.options.searchAPI, {search: e}, function (i) {
                    t.each(i.languagesearch, function (t, e) {
                        0 === n.resultCount && n.autofill(t, e), n.render(t), n.resultCount++
                    }), n.resultHandler(e)
                })
            }, resultHandler: function (t) {
                0 === this.resultCount && this.options.noresults ? (this.$suggestion.val(""), this.options.noresults.call(this, t)) : this.options.success && this.options.success(this, t, this.resultCount)
            }, autofill: function (e, n) {
                if (this.$suggestion.length) if (this.$element.val()) {
                    if (this.selectedLanguage = e, n = n || this.options.languages[e]) {
                        var i, a = this.$element.val(), o = a + n.substring(a.length, n.length);
                        o.toLowerCase() !== n.toLowerCase() && (o = a + (i = t.uls.data.getAutonym(e) || "").substring(a.length, i.length)) !== i && (o = ""), function (t, e) {
                            return "െേൈൊോൌெேைொோௌେୈୋୌિਿिিেৈোৌෙේෛොෝෞ".indexOf(e[t.length]) <= 0
                        }(a, o) || (o = ""), this.$suggestion.val(o)
                    }
                } else this.$suggestion.val("")
            }, render: function (t) {
                var e = this.options.$target;
                e && e.append(t, null)
            }, escapeRegex: function (t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$\|#\s]/g, "\\$&")
            }, filter: function (e, n) {
                var i = new RegExp("^" + this.escapeRegex(n), "i"), a = this.options.languages[e];
                return i.test(a) || i.test(t.uls.data.getAutonym(e)) || i.test(e) || i.test(t.uls.data.getScript(e))
            }, eventSupported: function (t) {
                var e = t in this.$element;
                return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
            }
        }, t.fn.languagefilter = function (n) {
            return this.each(function () {
                var i = t(this), a = i.data("languagefilter"), o = "object" == typeof n && n;
                a || i.data("languagefilter", a = new e(this, o)), "string" == typeof n && a[n]()
            })
        }, t.fn.languagefilter.defaults = {
            $target: null,
            searchAPI: null,
            languages: null,
            noresults: null,
            success: null,
            onSelect: null
        }, t.fn.languagefilter.Constructor = e
    }(jQuery), function (t) {
        "use strict";
        var e;
        (e = function (e, n) {
            this.$element = t(e), this.options = t.extend({}, t.fn.regionselector.defaults, n), this.$element.addClass("regionselector"), this.regions = [], this.cache = null, this.regionGroup = this.$element.data("regiongroup"), this.init(), this.listen()
        }).prototype = {
            constructor: e, init: function () {
                var e = this.$element.data("region");
                this.regions = t.uls.data.getRegionsInGroup(this.regionGroup), e && this.regions.push(e)
            }, test: function (e) {
                var n, i, a = t.uls.data.getRegions(e);
                for (i = 0; i < this.regions.length; i++) if (n = this.regions[i], t.inArray(n, a) >= 0) return this.render(e, n), void(this.cache[e] = n)
            }, show: function () {
                var e, n, i, a, o, s = this.options.$target && this.options.$target.$element, r = s && s.parent(),
                    l = s && s.prev();
                if (s && r && s.detach(), this.cache) {
                    e = null;
                    for (e in this.cache) this.render(e, this.cache[e])
                } else {
                    this.cache = {}, n = t.uls.data.getLanguagesByScriptGroup(this.options.languages);
                    for (i in t.uls.data.scriptgroups) if (a = n[i]) for (a.sort(t.uls.data.sortByAutonym), o = 0; o < a.length; o++) this.test(a[o])
                }
                s && r && (l ? l.after(s) : r.append(s)), this.options.success && this.options.success(this)
            }, render: function (t, e) {
                var n = this.options.$target;
                n && n.append(t, e)
            }, listen: function () {
                this.$element.on("click", t.proxy(this.click, this))
            }, click: function () {
                this.$element.hasClass("active") || (this.options.$target.empty(), this.show(), t(".regionselector").removeClass("active"), this.regionGroup && this.$element.addClass("active"))
            }
        }, t.fn.regionselector = function (n) {
            return this.each(function () {
                var i = t(this), a = i.data("regionselector"), o = "object" == typeof n && n;
                a || i.data("regionselector", a = new e(this, o)), "string" == typeof n && a[n]()
            })
        }, t.fn.regionselector.defaults = {
            $target: null,
            success: null,
            noresults: null,
            languages: null
        }, t.fn.regionselector.Constructor = e
    }(jQuery), function (t) {
        "use strict";
        var e, n;
        e = '\t\t<div class="grid uls-menu uls-wide"> \t\t\t<div class="row"> \t\t\t\t<span id="uls-close" class="icon-close"></span> \t\t\t</div> \t\t\t<div class="row"> \t\t\t\t<div class="uls-title-region seven columns">\t\t\t\t\t<h1 data-i18n="uls-select-language" class="uls-title">Select Language</h1>\t\t\t\t</div>\t\t\t\t<div class="five columns map-block" id="map-block">\t\t\t\t\t<div class="row">\t\t\t\t\t\t<div data-regiongroup="1" id="uls-region-1" class="three columns uls-region uls-region-1">\t\t\t\t\t\t\t<a data-i18n="uls-region-WW">Worldwide</a>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="nine columns">\t\t\t\t\t\t\t<div class="row uls-worldmap">\t\t\t\t\t\t\t\t<div data-regiongroup="2" id="uls-region-2" class="four columns uls-region">\t\t\t\t\t\t\t\t\t<a data-i18n="uls-region-AM">America</a>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div data-regiongroup="3" id="uls-region-3" class="four columns uls-region">\t\t\t\t\t\t\t\t\t<a><span data-i18n="uls-region-EU">Europe</span><br>\t\t\t\t\t\t\t\t\t<span data-i18n="uls-region-ME">Middle East</span><br>\t\t\t\t\t\t\t\t\t<span data-i18n="uls-region-AF">Africa</span></a>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div data-regiongroup="4" id="uls-region-4" class="four columns uls-region">\t\t\t\t\t\t\t\t\t<a><span data-i18n="uls-region-AS">Asia</span><br>\t\t\t\t\t\t\t\t\t<span data-i18n="uls-region-PA">Pacific</span></a>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>\t\t\t<div id="search" class="row search"> \t\t\t\t<div class="one column">\t\t\t\t\t<span class="search-label"></span>\t\t\t\t</div>\t\t\t\t<div class="ten columns">\t\t\t\t\t<div id="search-input-block" class="search-input-block">\t\t\t\t\t\t<input type="text" class="filterinput filtersuggestion" id="filtersuggestion" disabled="true"\t\t\t\t\t\t\tautocomplete="off" /> <input type="text" class="filterinput languagefilter" id="languagefilter"\t\t\t\t\t\t\tdata-clear="languagefilter-clear" data-suggestion="filtersuggestion"\t\t\t\t\t\t\tplaceholder="Language search" autocomplete="off" />\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t\t<div class="one column">\t\t\t\t\t<span id="languagefilter-clear" class="languagefilter-clear"></span>\t\t\t\t</div>\t\t\t</div>\t\t\t<div class="row uls-language-list"></div>\t\t\t<div class="row" id="settings-block"></div>\t\t</div> ', (n = function (n, i) {
            this.$element = t(n), this.options = t.extend({}, t.fn.uls.defaults, i), this.$menu = t(e), this.languages = this.options.languages;
            for (var a in this.languages) void 0 === t.uls.data.languages[a] && (window.console && window.console.log && window.console.log("ULS: Unknown language " + a + "."), delete this.languages[a]);
            this.left = this.options.left, this.top = this.options.top, this.shown = !1, this.initialized = !1, this.$languageFilter = this.$menu.find("#languagefilter"), this.$regionFilters = this.$menu.find(".uls-region"), this.$resultsView = this.$menu.find("div.uls-language-list"), this.render(), this.listen(), this.ready()
        }).prototype = {
            constructor: n, ready: function () {
                this.options.onReady && this.options.onReady.call(this)
            }, visible: function () {
                this.options.onVisible && this.options.onVisible.call(this)
            }, position: function () {
                var e = t.extend({}, this.$element.offset(), {height: this.$element[0].offsetHeight});
                return {top: this.top || e.top + e.height, left: this.left || "25%"}
            }, show: function () {
                this.$menu.css(this.position()), this.options.compact && this.$menu.addClass("uls-compact"), this.initialized || (t("body").prepend(this.$menu), this.i18n(), this.defaultSearch(), this.initialized = !0), t(".uls-menu").hide(), this.$menu.show(), this.$menu.scrollIntoView(), this.shown = !0, this.isMobile() || this.$languageFilter.focus(), this.visible()
            }, i18n: function () {
                t.i18n && (this.$menu.find("[data-i18n]").i18n(), this.$languageFilter.prop("placeholder", t.i18n("uls-search-placeholder")))
            }, defaultSearch: function () {
                this.$resultsView.lcd("empty"), this.$regionFilters.regionselector("show")
            }, hide: function () {
                this.$menu.hide(), this.shown = !1
            }, render: function () {
            }, noresults: function () {
                this.$resultsView.lcd("noResults")
            }, success: function () {
                this.$resultsView.show()
            }, listen: function () {
                var e, n = this;
                n.$element.on("click", t.proxy(n.click, n)), n.$languageFilter.on("searchclear", t.proxy(n.defaultSearch, n)), n.$menu.find("#uls-close").on("click", t.proxy(n.cancel, n)), n.$menu.on("click", function (t) {
                    t.stopPropagation()
                }), n.$menu.on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$menu.on("keydown", t.proxy(this.keypress, this)), e = n.$resultsView.lcd({
                    languages: n.languages,
                    quickList: n.options.quickList,
                    clickhandler: t.proxy(n.select, n),
                    source: n.$languageFilter,
                    showRegions: n.options.showRegions
                }).data("lcd"), n.$languageFilter.languagefilter({
                    $target: e, languages: n.languages, success: function () {
                        t(".regionselector").removeClass("active"), n.success()
                    }, noresults: function () {
                        t(".regionselector").removeClass("active"), n.noresults()
                    }, searchAPI: n.options.searchAPI, onSelect: t.proxy(n.select, n)
                }), this.$menu.find(".uls-region, .uls-region-link").regionselector({
                    $target: e,
                    languages: n.languages,
                    success: function (t) {
                        n.$languageFilter.languagefilter("deactivate"), 1 === t.regionGroup && e.quicklist(), n.success()
                    },
                    noresults: function () {
                        n.$languageFilter.languagefilter("clear")
                    }
                }), t("html").click(t.proxy(this.hide, this))
            }, select: function (t) {
                this.hide(), this.$languageFilter.trigger("searchclear"), this.options.onSelect && this.options.onSelect.call(this, t)
            }, cancel: function () {
                this.hide(), this.options.onCancel && this.options.onCancel.call(this)
            }, keyup: function (t) {
                this.shown && 27 === t.keyCode && (this.cancel(), t.preventDefault(), t.stopPropagation())
            }, keypress: function (t) {
                this.shown && 27 === t.keyCode && (this.cancel(), t.preventDefault(), t.stopPropagation())
            }, click: function (t) {
                t.stopPropagation(), t.preventDefault(), this.shown ? this.hide() : this.show()
            }, eventSupported: function (t) {
                var e = t in this.$menu;
                return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
            }, isMobile: function () {
                return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)
            }
        }, t.fn.uls = function (e) {
            return this.each(function () {
                var i = t(this), a = i.data("uls"), o = "object" == typeof e && e;
                a || i.data("uls", a = new n(this, o)), "string" == typeof e && a[e]()
            })
        }, t.fn.uls.defaults = {
            menu: e,
            onSelect: null,
            searchAPI: null,
            languages: t.uls.data.getAutonyms(),
            quickList: null,
            compact: !1,
            showRegions: ["WW", "AM", "EU", "ME", "AF", "AS", "PA"]
        }, t.fn.i18n || (t.fn.i18n = function () {
        }), t.fn.scrollIntoView = function () {
            return this.each(function () {
                var e, n = t(window), i = n.height(), a = n.scrollTop(), o = a + i, s = t(this), r = s.height(),
                    l = s.offset().top, u = l + r;
                (l < a || u > o) && (e = a > l ? l : u - i, t("html, body").stop().animate({scrollTop: e}, 500))
            })
        }, t.fn.uls.Constructor = n
    }(jQuery), function (t) {
        t.fn.flexisel = function (e) {
            var n, i = t.extend({
                visibleItems: 4,
                animationSpeed: 200,
                autoPlay: !1,
                autoPlaySpeed: 3e3,
                pauseOnHover: !0,
                setMaxWidthAndHeight: !1,
                enableResponsiveBreakpoints: !1,
                responsiveBreakpoints: {
                    portrait: {changePoint: 480, visibleItems: 1},
                    landscape: {changePoint: 640, visibleItems: 2},
                    tablet: {changePoint: 768, visibleItems: 3}
                }
            }, e), a = t(this), o = t.extend(i, e), s = !0, r = o.visibleItems, l = {
                init: function () {
                    return this.each(function () {
                        l.appendHTML(), l.setEventHandlers(), l.initializeItems()
                    })
                }, initializeItems: function () {
                    var e = a.parent(), i = (e.height(), a.children()), o = e.width();
                    n = o / r, i.width(n), i.last().insertBefore(i.first()), i.last().insertBefore(i.first()), a.css({left: -n}), a.fadeIn(), t(window).trigger("resize")
                }, appendHTML: function () {
                    if (a.addClass("nbs-flexisel-ul"), a.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>"), a.find("li").addClass("nbs-flexisel-item"), o.setMaxWidthAndHeight) {
                        var e = t(".nbs-flexisel-item > img").width(), n = t(".nbs-flexisel-item > img").height();
                        t(".nbs-flexisel-item > img").css("max-width", e), t(".nbs-flexisel-item > img").css("max-height", n)
                    }
                    t("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").insertAfter(a);
                    var i = a.children().clone();
                    a.append(i)
                }, setEventHandlers: function () {
                    var e = a.parent(), i = a.children(), u = e.find(t(".nbs-flexisel-nav-left")),
                        c = e.find(t(".nbs-flexisel-nav-right"));
                    t(window).on("resize", function (o) {
                        l.setResponsiveEvents();
                        var s = t(e).width(), d = t(e).height();
                        n = s / r, i.width(n), a.css({left: -n});
                        var h = d / 2 - u.height() / 2;
                        u.css("top", h + "px"), c.css("top", h + "px")
                    }), t(u).on("click", function (t) {
                        l.scrollLeft()
                    }), t(c).on("click", function (t) {
                        l.scrollRight()
                    }), 1 == o.pauseOnHover && t(".nbs-flexisel-item").on({
                        mouseenter: function () {
                            s = !1
                        }, mouseleave: function () {
                            s = !0
                        }
                    }), 1 == o.autoPlay && setInterval(function () {
                        1 == s && l.scrollRight()
                    }, o.autoPlaySpeed)
                }, setResponsiveEvents: function () {
                    var e = t("html").width();
                    1 == o.enableResponsiveBreakpoints && (r = e < o.responsiveBreakpoints.portrait.changePoint ? o.responsiveBreakpoints.portrait.visibleItems : e > o.responsiveBreakpoints.portrait.changePoint && e < o.responsiveBreakpoints.landscape.changePoint ? o.responsiveBreakpoints.landscape.visibleItems : e > o.responsiveBreakpoints.landscape.changePoint && e < o.responsiveBreakpoints.tablet.changePoint ? o.responsiveBreakpoints.tablet.visibleItems : o.visibleItems)
                }, scrollLeft: function () {
                    if (1 == s) {
                        s = !1;
                        var t = a.parent().width();
                        n = t / r;
                        var e = a.children();
                        a.animate({left: "+=" + n}, {
                            queue: !1,
                            duration: o.animationSpeed,
                            easing: "linear",
                            complete: function () {
                                e.last().insertBefore(e.first()), l.adjustScroll(), s = !0
                            }
                        })
                    }
                }, scrollRight: function () {
                    if (1 == s) {
                        s = !1;
                        var t = a.parent().width();
                        n = t / r;
                        var e = a.children();
                        a.animate({left: "-=" + n}, {
                            queue: !1,
                            duration: o.animationSpeed,
                            easing: "linear",
                            complete: function () {
                                e.first().insertAfter(e.last()), l.adjustScroll(), s = !0
                            }
                        })
                    }
                }, adjustScroll: function () {
                    var t = a.parent(), e = a.children(), i = t.width();
                    n = i / r, e.width(n), a.css({left: -n})
                }
            };
            return l[e] ? l[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error('Method "' + method + '" does not exist in flexisel plugin!') : l.init.apply(this)
        }
    }(jQuery), function (t, e, n) {
        t.fn.responsiveSlides = function (i) {
            var a = t.extend({
                auto: !0,
                speed: 500,
                timeout: 4e3,
                pager: !1,
                nav: !1,
                random: !1,
                pause: !1,
                pauseControls: !0,
                prevText: "Previous",
                nextText: "Next",
                maxwidth: "",
                navContainer: "",
                manualControls: "",
                namespace: "rslides",
                before: t.noop,
                after: t.noop
            }, i);
            return this.each(function () {
                n++;
                var o, s, r, l, u, c, d = t(this), h = 0, p = d.children(), f = p.size(), g = parseFloat(a.speed),
                    m = parseFloat(a.timeout), v = parseFloat(a.maxwidth), y = a.namespace, b = y + n,
                    x = y + "_nav " + b + "_nav", w = y + "_here", k = b + "_on", A = b + "_s",
                    C = t("<ul class='" + y + "_tabs " + b + "_tabs' />"),
                    E = {float: "left", position: "relative", opacity: 1, zIndex: 2},
                    S = {float: "none", position: "absolute", opacity: 0, zIndex: 1}, $ = function () {
                        var t = (document.body || document.documentElement).style;
                        if ("string" == typeof t[n = "transition"]) return !0;
                        o = ["Moz", "Webkit", "Khtml", "O", "ms"];
                        var e, n = n.charAt(0).toUpperCase() + n.substr(1);
                        for (e = 0; e < o.length; e++) if ("string" == typeof t[o[e] + n]) return !0;
                        return !1
                    }(), T = function (e) {
                        a.before(e), $ ? (p.removeClass(k).css(S).eq(e).addClass(k).css(E), h = e, setTimeout(function () {
                            a.after(e)
                        }, g)) : p.stop().fadeOut(g, function () {
                            t(this).removeClass(k).css(S).css("opacity", 1)
                        }).eq(e).fadeIn(g, function () {
                            t(this).addClass(k).css(E), a.after(e), h = e
                        })
                    };
                if (a.random && (p.sort(function () {
                        return Math.round(Math.random()) - .5
                    }), d.empty().append(p)), p.each(function (t) {
                        this.id = A + t
                    }), d.addClass(y + " " + b), i && i.maxwidth && d.css("max-width", v), p.hide().css(S).eq(0).addClass(k).css(E).show(), $ && p.show().css({
                        "-webkit-transition": "opacity " + g + "ms ease-in-out",
                        "-moz-transition": "opacity " + g + "ms ease-in-out",
                        "-o-transition": "opacity " + g + "ms ease-in-out",
                        transition: "opacity " + g + "ms ease-in-out"
                    }), 1 < p.size()) {
                    if (m < g + 100) return;
                    if (a.pager && !a.manualControls) {
                        var L = [];
                        p.each(function (t) {
                            L += "<li><a href='#' class='" + A + (t += 1) + "'>" + t + "</a></li>"
                        }), C.append(L), i.navContainer ? t(a.navContainer).append(C) : d.after(C)
                    }
                    if (a.manualControls && (C = t(a.manualControls)).addClass(y + "_tabs " + b + "_tabs"), (a.pager || a.manualControls) && C.find("li").each(function (e) {
                            t(this).addClass(A + (e + 1))
                        }), (a.pager || a.manualControls) && (c = C.find("a"), s = function (t) {
                            c.closest("li").removeClass(w).eq(t).addClass(w)
                        }), a.auto && (r = function () {
                            u = setInterval(function () {
                                p.stop(!0, !0);
                                var t = h + 1 < f ? h + 1 : 0;
                                (a.pager || a.manualControls) && s(t), T(t)
                            }, m)
                        })(), l = function () {
                            a.auto && (clearInterval(u), r())
                        }, a.pause && d.hover(function () {
                            clearInterval(u)
                        }, function () {
                            l()
                        }), (a.pager || a.manualControls) && (c.bind("click", function (e) {
                            e.preventDefault(), a.pauseControls || l(), e = c.index(this), h === e || t("." + k).queue("fx").length || (s(e), T(e))
                        }).eq(0).closest("li").addClass(w), a.pauseControls && c.hover(function () {
                            clearInterval(u)
                        }, function () {
                            l()
                        })), a.nav) {
                        y = "<a href='#' class='" + x + " prev'>" + a.prevText + "</a><a href='#' class='" + x + " next'>" + a.nextText + "</a>", i.navContainer ? t(a.navContainer).append(y) : d.after(y);
                        var N = (b = t("." + b + "_nav")).filter(".prev");
                        b.bind("click", function (e) {
                            if (e.preventDefault(), !(e = t("." + k)).queue("fx").length) {
                                var n = p.index(e);
                                e = n - 1, n = n + 1 < f ? h + 1 : 0, T(t(this)[0] === N[0] ? e : n), (a.pager || a.manualControls) && s(t(this)[0] === N[0] ? e : n), a.pauseControls || l()
                            }
                        }), a.pauseControls && b.hover(function () {
                            clearInterval(u)
                        }, function () {
                            l()
                        })
                    }
                }
                if (void 0 === document.body.style.maxWidth && i.maxwidth) {
                    var D = function () {
                        d.css("width", "100%"), d.width() > v && d.css("width", v)
                    };
                    D(), t(e).bind("resize", function () {
                        D()
                    })
                }
            })
        }
    }(jQuery, this, 0), function (t) {
        t.fn.UItoTop = function (e) {
            var n = t.extend({
                text: "To Top",
                min: 200,
                inDelay: 600,
                outDelay: 400,
                containerID: "toTop",
                containerHoverID: "toTopHover",
                scrollSpeed: 1e3,
                easingType: "linear"
            }, e), i = "#" + n.containerID, a = "#" + n.containerHoverID;
            t("body").append('<a href="#" id="' + n.containerID + '">' + n.text + "</a>"), t(i).hide().on("click.UItoTop", function () {
                return t("html, body").animate({scrollTop: 0}, n.scrollSpeed, n.easingType), t("#" + n.containerHoverID, this).stop().animate({opacity: 0}, n.inDelay, n.easingType), !1
            }).prepend('<span id="' + n.containerHoverID + '"></span>').hover(function () {
                t(a, this).stop().animate({opacity: 1}, 600, "linear")
            }, function () {
                t(a, this).stop().animate({opacity: 0}, 700, "linear")
            }), t(window).scroll(function () {
                var e = t(window).scrollTop();
                void 0 === document.body.style.maxHeight && t(i).css({
                    position: "absolute",
                    top: e + t(window).height() - 50
                }), e > n.min ? t(i).fadeIn(n.inDelay) : t(i).fadeOut(n.Outdelay)
            })
        }
    }(jQuery), jQuery.extend(jQuery.easing, {
        easeInQuad: function (t, e, n, i, a) {
            return i * (e /= a) * e + n
        }, easeOutQuad: function (t, e, n, i, a) {
            return -i * (e /= a) * (e - 2) + n
        }, easeInOutQuad: function (t, e, n, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        }, easeInCubic: function (t, e, n, i, a) {
            return i * (e /= a) * e * e + n
        }, easeOutCubic: function (t, e, n, i, a) {
            return i * ((e = e / a - 1) * e * e + 1) + n
        }, easeInOutCubic: function (t, e, n, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        }, easeInQuart: function (t, e, n, i, a) {
            return i * (e /= a) * e * e * e + n
        }, easeOutQuart: function (t, e, n, i, a) {
            return -i * ((e = e / a - 1) * e * e * e - 1) + n
        }, easeInOutQuart: function (t, e, n, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        }, easeInQuint: function (t, e, n, i, a) {
            return i * (e /= a) * e * e * e * e + n
        }, easeOutQuint: function (t, e, n, i, a) {
            return i * ((e = e / a - 1) * e * e * e * e + 1) + n
        }, easeInOutQuint: function (t, e, n, i, a) {
            return (e /= a / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        }, easeInSine: function (t, e, n, i, a) {
            return -i * Math.cos(e / a * (Math.PI / 2)) + i + n
        }, easeOutSine: function (t, e, n, i, a) {
            return i * Math.sin(e / a * (Math.PI / 2)) + n
        }, easeInOutSine: function (t, e, n, i, a) {
            return -i / 2 * (Math.cos(Math.PI * e / a) - 1) + n
        }, easeInExpo: function (t, e, n, i, a) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / a - 1)) + n
        }, easeOutExpo: function (t, e, n, i, a) {
            return e == a ? n + i : i * (1 - Math.pow(2, -10 * e / a)) + n
        }, easeInOutExpo: function (t, e, n, i, a) {
            return 0 == e ? n : e == a ? n + i : (e /= a / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --e)) + n
        }, easeInCirc: function (t, e, n, i, a) {
            return -i * (Math.sqrt(1 - (e /= a) * e) - 1) + n
        }, easeOutCirc: function (t, e, n, i, a) {
            return i * Math.sqrt(1 - (e = e / a - 1) * e) + n
        }, easeInOutCirc: function (t, e, n, i, a) {
            return (e /= a / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        }, easeInElastic: function (t, e, n, i, a) {
            var o = 1.70158, s = 0, r = i;
            if (0 == e) return n;
            if (1 == (e /= a)) return n + i;
            if (s || (s = .3 * a), r < Math.abs(i)) {
                r = i;
                o = s / 4
            } else o = s / (2 * Math.PI) * Math.asin(i / r);
            return -r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - o) * (2 * Math.PI) / s) + n
        }, easeOutElastic: function (t, e, n, i, a) {
            var o = 1.70158, s = 0, r = i;
            if (0 == e) return n;
            if (1 == (e /= a)) return n + i;
            if (s || (s = .3 * a), r < Math.abs(i)) {
                r = i;
                o = s / 4
            } else o = s / (2 * Math.PI) * Math.asin(i / r);
            return r * Math.pow(2, -10 * e) * Math.sin((e * a - o) * (2 * Math.PI) / s) + i + n
        }, easeInOutElastic: function (t, e, n, i, a) {
            var o = 1.70158, s = 0, r = i;
            if (0 == e) return n;
            if (2 == (e /= a / 2)) return n + i;
            if (s || (s = a * (.3 * 1.5)), r < Math.abs(i)) {
                r = i;
                o = s / 4
            } else o = s / (2 * Math.PI) * Math.asin(i / r);
            return e < 1 ? r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - o) * (2 * Math.PI) / s) * -.5 + n : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - o) * (2 * Math.PI) / s) * .5 + i + n
        }, easeInBack: function (t, e, n, i, a, o) {
            return void 0 == o && (o = 1.70158), i * (e /= a) * e * ((o + 1) * e - o) + n
        }, easeOutBack: function (t, e, n, i, a, o) {
            return void 0 == o && (o = 1.70158), i * ((e = e / a - 1) * e * ((o + 1) * e + o) + 1) + n
        }, easeInOutBack: function (t, e, n, i, a, o) {
            return void 0 == o && (o = 1.70158), (e /= a / 2) < 1 ? i / 2 * (e * e * ((1 + (o *= 1.525)) * e - o)) + n : i / 2 * ((e -= 2) * e * ((1 + (o *= 1.525)) * e + o) + 2) + n
        }, easeInBounce: function (t, e, n, i, a) {
            return i - jQuery.easing.easeOutBounce(t, a - e, 0, i, a) + n
        }, easeOutBounce: function (t, e, n, i, a) {
            return (e /= a) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        }, easeInOutBounce: function (t, e, n, i, a) {
            return e < a / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, a) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - a, 0, i, a) + .5 * i + n
        }
    });
}

/**
 * else{
    if(typeof(Session.get('actuelIndex')) === "undefined"){
        Session.set('actuelIndex', 0)
    }
    let n = parseInt(Session.get('actuelIndex'))
    n++
    console.log(n)
    if(n === 1){
        n = 2
        Session.set('actuelIndex', n)
        window.location.reload()
    }
   }
*/





