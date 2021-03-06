/*!
 * bots 1.16.5 
 * License: https://www.oracle.com/tos/
 */
! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "/bots-client-sdk-js/", t(t.s = 319)
}({
    10: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    116: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.IFRAME_ID = "web-messenger-container"
    },
    144: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.SCREEN_SIZES = {
            lg: {
                minHeight: 668,
                minWidth: 1200
            },
            md: [{
                minHeight: 508,
                minWidth: 768,
                maxWidth: 1199
            }, {
                minHeight: 508,
                maxHeight: 667,
                minWidth: 768
            }],
            sm: {
                maxHeight: 507,
                minWidth: 768
            },
            xs: {
                maxWidth: 767
            }
        }
    },
    217: function(e, t, n) {
        "use strict";

        function i(e) {
            "complete" !== document.readyState && "loaded" !== document.readyState && "interactive" !== document.readyState || !document.body ? document.addEventListener("DOMContentLoaded", function() {
                e()
            }) : e()
        }

        function r(e) {
            var t = ["screen"];
            return e.minHeight && t.push("(min-height: " + e.minHeight + "px)"), e.maxHeight && t.push("(max-height: " + e.maxHeight + "px)"), e.minWidth && t.push("(min-width: " + e.minWidth + "px)"), e.maxWidth && t.push("(max-width: " + e.maxWidth + "px)"), t.join(" and ")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.waitForPage = i, t.generateMediaQuery = r
    },
    218: function(e, t) {
        function n(e, t) {
            var n = 0,
                i = e.length;
            for (n; n < i && !1 !== t(e[n], n); n++);
        }

        function i(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        }

        function r(e) {
            return "function" == typeof e
        }
        e.exports = {
            isFunction: r,
            isArray: i,
            each: n
        }
    },
    319: function(e, t, n) {
        "use strict";
        (function(e) {
            var t = n(320),
                i = n(116);
            document.getElementById(i.IFRAME_ID) || ((0, t.setUp)(), window.__onWebMessengerHostReady__ ? window.__onWebMessengerHostReady__(t.WebMessenger) : e.Bots = t.WebMessenger)
        }).call(t, n(10))
    },
    320: function(e, t, n) {
        "use strict";

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function r() {
            if (!document.getElementById(p.IFRAME_ID)) {
                g = void 0, v = void 0, window.__onWebMessengerFrameReady__ = s;
                for (var e = E[0], t = 0; t < E.length; e = E[++t]) m[e] && delete m[e];
                c(m, A)
            }
        }

        function o() {
            var e = document.createElement("link");
            e.rel = "stylesheet", e.type = "text/css", e.href = "/bots-client-sdk-js/bots.1.16.5.css", document.body.appendChild(e)
        }

        function s(e) {
            window.__onWebMessengerFrameReady__ = function() {}, g = e, y || f.init(v);
            for (var t = E[0], n = 0; n < E.length; t = E[++n]) m[t] = g[t];
            if (w) {
                for (var r = w[0], o = 0; o < w.length; r = w[++o]) {
                    var s;
                    (s = g).on.apply(s, i(r.args))
                }
                w = void 0
            }
            if (x) {
                var a, c = (a = g).init.apply(a, i(x));
                x = void 0;
                for (var u = _[0], d = 0; d < _.length; u = _[++d]) c = "then" === u.type ? c.then(u.next) : c.catch(u.next);
                _ = []
            }
        }

        function a() {
            if (!v) {
                var e = null,
                    t = !1;
                v = document.createElement("iframe"), v.id = p.IFRAME_ID, v.frameBorder = 0, v.allowFullscreen = !0, v.allowTransparency = !0, v.scrolling = "no", v.className = d.default.iframe;
                var n = function() {
                    t = !0, clearInterval(e), delete v.onload;
                    var n = O(v);
                    n.open(), n.write('\n                    <!DOCTYPE html>\n                    <html>\n                        <head>\n                            \n                            <link rel="stylesheet" href="/bots-client-sdk-js/frame.1.16.5.css" type="text/css" />\n                            <script src="/bots-client-sdk-js/frame.1.16.5.min.js" async crossorigin="anonymous"><\/script>\n                        </head>\n                        <body>\n                            <div id="mount"></div>\n                        </body>\n                    </html>\n                    '), n.close()
                };
                e = setInterval(function() {
                    var e = O(v);
                    t || !e || "complete" != e.readyState && "interactive" != e.readyState || n()
                }, 1e3), v.onload = function() {
                    t || n()
                }
            }
            y ? b && (b.appendChild(v), b = void 0) : document.body.appendChild(v)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.WebMessenger = void 0;
        var c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };
        t.setUp = r;
        var u = n(321),
            d = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(u),
            l = n(217),
            h = n(323),
            f = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(h),
            p = n(116),
            m = t.WebMessenger = {},
            g = void 0,
            v = void 0,
            y = void 0,
            b = void 0,
            _ = [],
            w = [],
            x = void 0,
            M = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent),
            W = /PhantomJS/.test(navigator.userAgent) && !0,
            E = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "updateUser", "getConversation", "getUser", "open", "close", "isOpened", "startConversation", "setDelegate", "markAllAsRead", "notificationChannelPromptEnabled", "setPredefinedMessage", "startTyping", "stopTyping"],
            A = {
                VERSION: "1.16.5",
                on: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    w || (w = []), w.push({
                        args: t
                    })
                },
                init: function() {
                    console.log("........///......")
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    x = t, y = t.length > 0 && !!t[0].embedded, M || W || (0, l.waitForPage)(function() {
                        o(), a()
                    });
                    var i = {
                        then: function(e) {
                            return _.push({
                                type: "then",
                                next: e
                            }), i
                        },
                        catch: function(e) {
                            return _.push({
                                type: "catch",
                                next: e
                            }), i
                        }
                    };
                    return i
                },
                render: function(e) {
                    v ? e.appendChild(v) : b = e
                },
                destroy: function() {
                    g && (g.destroy(), v.remove ? v.remove() : v.parentNode.removeChild(v), f.unregister(), r())
                }
            },
            O = function(e) {
                return e.contentWindow && e.contentWindow.document
            }
    },
    321: function(e, t) {
        e.exports = {
            iframe: "_2ChX4GFAl1-UBiWknYZyEQ",
            displayButton: "avcHn2VQJenBvoR5hilPG",
            widgetClosed: "_3fQbteJd3oQu4il3LpMKkX",
            "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7",
            "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0",
            "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV",
            "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M",
            displayTab: "_3dtqBiGeC8k3yop4A-9Lwm",
            widgetOpened: "_2TELtk5nDKlQudVSivRjpt",
            widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn"
        }
    },
    323: function(e, t, n) {
        "use strict";

        function i(e) {
            for (var t = 0; t < d.length; t++) {
                var n = d[t],
                    i = c.SCREEN_SIZES[n];
                "[object Array]" !== Object.prototype.toString.call(i) && (i = [i]);
                for (var r = 0; r < i.length; r++) {
                    e({
                        rule: i[r],
                        size: n
                    })
                }
            }
        }

        function r(e) {
            i(function(t) {
                var n = t.rule,
                    i = t.size;
                a.default.register((0, u.generateMediaQuery)(n), function() {
                    e.contentWindow.postMessage({
                        type: "sizeChange",
                        value: i
                    }, location.protocol + "//" + location.host)
                })
            })
        }

        function o() {
            i(function(e) {
                var t = e.rule;
                a.default.unregister((0, u.generateMediaQuery)(t))
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = r, t.unregister = o;
        var s = n(324),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            c = n(144),
            u = n(217),
            d = ["lg", "md", "sm", "xs"]
    },
    324: function(e, t, n) {
        var i = n(325);
        e.exports = new i
    },
    325: function(e, t, n) {
        function i() {
            if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
            this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
        }
        var r = n(326),
            o = n(218),
            s = o.each,
            a = o.isFunction,
            c = o.isArray;
        i.prototype = {
            constructor: i,
            register: function(e, t, n) {
                var i = this.queries,
                    o = n && this.browserIsIncapable;
                return i[e] || (i[e] = new r(e, o)), a(t) && (t = {
                    match: t
                }), c(t) || (t = [t]), s(t, function(t) {
                    a(t) && (t = {
                        match: t
                    }), i[e].addHandler(t)
                }), this
            },
            unregister: function(e, t) {
                var n = this.queries[e];
                return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
            }
        }, e.exports = i
    },
    326: function(e, t, n) {
        function i(e, t) {
            this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
            var n = this;
            this.listener = function(e) {
                n.mql = e.currentTarget || e, n.assess()
            }, this.mql.addListener(this.listener)
        }
        var r = n(327),
            o = n(218).each;
        i.prototype = {
            constuctor: i,
            addHandler: function(e) {
                var t = new r(e);
                this.handlers.push(t), this.matches() && t.on()
            },
            removeHandler: function(e) {
                var t = this.handlers;
                o(t, function(n, i) {
                    if (n.equals(e)) return n.destroy(), !t.splice(i, 1)
                })
            },
            matches: function() {
                return this.mql.matches || this.isUnconditional
            },
            clear: function() {
                o(this.handlers, function(e) {
                    e.destroy()
                }), this.mql.removeListener(this.listener), this.handlers.length = 0
            },
            assess: function() {
                var e = this.matches() ? "on" : "off";
                o(this.handlers, function(t) {
                    t[e]()
                })
            }
        }, e.exports = i
    },
    327: function(e, t) {
        function n(e) {
            this.options = e, !e.deferSetup && this.setup()
        }
        n.prototype = {
            constructor: n,
            setup: function() {
                this.options.setup && this.options.setup(), this.initialised = !0
            },
            on: function() {
                !this.initialised && this.setup(), this.options.match && this.options.match()
            },
            off: function() {
                this.options.unmatch && this.options.unmatch()
            },
            destroy: function() {
                this.options.destroy ? this.options.destroy() : this.off()
            },
            equals: function(e) {
                return this.options === e || this.options.match === e
            }
        }, e.exports = n
    }
});
//# sourceMappingURL=bots.1.16.5.min.js.map