/*!

 handlebars v3.0.1

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
function validateShare() {
    var t = $(".fb-check").length,
        e = $(".tw-check").length;
    if (t > 0 && e > 0) {
        if (shareCount < 2) return $(".form-error").html("Please complete both shares."), !1;
        submitted = !0
    } else if (t > 0 && 0 == e) {
        if (shareCount < 1) return $(".form-error").html("Please share on facebook to submit."), !1;
        $(".check-wrap").removeClass("hider"), submitted = !0
    } else if (0 == t && e > 0) {
        if (shareCount < 1) return $(".form-error").html("Please share on twitter to submit."), !1;
        submitted = !0
    }
}! function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.Handlebars = e()
}(this, function() {
    var t = function() {
            "use strict";

            function t(t) {
                return l[t]
            }

            function e(t) {
                for (var e = 1; e < arguments.length; e++)
                    for (var s in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], s) && (t[s] = arguments[e][s]);
                return t
            }

            function s(t, e) {
                for (var s = 0, i = t.length; i > s; s++)
                    if (t[s] === e) return s;
                return -1
            }

            function i(e) {
                if ("string" != typeof e) {
                    if (e && e.toHTML) return e.toHTML();
                    if (null == e) return "";
                    if (!e) return e + "";
                    e = "" + e
                }
                return h.test(e) ? e.replace(c, t) : e
            }

            function r(t) {
                return t || 0 === t ? d(t) && 0 === t.length ? !0 : !1 : !0
            }

            function a(t, e) {
                return t.path = e, t
            }

            function n(t, e) {
                return (t ? t + "." : "") + e
            }
            var o = {},
                l = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                c = /[&<>"'`]/g,
                h = /[&<>"'`]/;
            o.extend = e;
            var p = Object.prototype.toString;
            o.toString = p;
            var u = function(t) {
                return "function" == typeof t
            };
            u(/x/) && (u = function(t) {
                return "function" == typeof t && "[object Function]" === p.call(t)
            });
            var u;
            o.isFunction = u;
            var d = Array.isArray || function(t) {
                return t && "object" == typeof t ? "[object Array]" === p.call(t) : !1
            };
            return o.isArray = d, o.indexOf = s, o.escapeExpression = i, o.isEmpty = r, o.blockParams = a, o.appendContextPath = n, o
        }(),
        e = function() {
            "use strict";

            function t(t, e) {
                var i, r, a = e && e.loc;
                a && (i = a.start.line, r = a.start.column, t += " - " + i + ":" + r);
                for (var n = Error.prototype.constructor.call(this, t), o = 0; o < s.length; o++) this[s[o]] = n[s[o]];
                a && (this.lineNumber = i, this.column = r)
            }
            var e, s = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            return t.prototype = new Error, e = t
        }(),
        s = function(t, e) {
            "use strict";

            function s(t, e) {
                this.helpers = t || {}, this.partials = e || {}, i(this)
            }

            function i(t) {
                t.registerHelper("helperMissing", function() {
                    if (1 === arguments.length) return void 0;
                    throw new n("Missing helper: '" + arguments[arguments.length - 1].name + "'")
                }), t.registerHelper("blockHelperMissing", function(e, s) {
                    var i = s.inverse,
                        r = s.fn;
                    if (e === !0) return r(this);
                    if (e === !1 || null == e) return i(this);
                    if (h(e)) return e.length > 0 ? (s.ids && (s.ids = [s.name]), t.helpers.each(e, s)) : i(this);
                    if (s.data && s.ids) {
                        var n = v(s.data);
                        n.contextPath = a.appendContextPath(s.data.contextPath, s.name), s = {
                            data: n
                        }
                    }
                    return r(e, s)
                }), t.registerHelper("each", function(t, e) {
                    function s(e, s, n) {
                        i && (i.key = e, i.index = s, i.first = 0 === s, i.last = !!n, r && (i.contextPath = r + e)), u += o(t[e], {
                            data: i,
                            blockParams: a.blockParams([t[e], e], [r + e, null])
                        })
                    }
                    if (!e) throw new n("Must pass iterator to #each");
                    var i, r, o = e.fn,
                        l = e.inverse,
                        c = 0,
                        u = "";
                    if (e.data && e.ids && (r = a.appendContextPath(e.data.contextPath, e.ids[0]) + "."), p(t) && (t = t.call(this)), e.data && (i = v(e.data)), t && "object" == typeof t)
                        if (h(t))
                            for (var d = t.length; d > c; c++) s(c, c, c === t.length - 1);
                        else {
                            var m;
                            for (var f in t) t.hasOwnProperty(f) && (m && s(m, c - 1), m = f, c++);
                            m && s(m, c - 1, !0)
                        }
                    return 0 === c && (u = l(this)), u
                }), t.registerHelper("if", function(t, e) {
                    return p(t) && (t = t.call(this)), !e.hash.includeZero && !t || a.isEmpty(t) ? e.inverse(this) : e.fn(this)
                }), t.registerHelper("unless", function(e, s) {
                    return t.helpers["if"].call(this, e, {
                        fn: s.inverse,
                        inverse: s.fn,
                        hash: s.hash
                    })
                }), t.registerHelper("with", function(t, e) {
                    p(t) && (t = t.call(this));
                    var s = e.fn;
                    if (a.isEmpty(t)) return e.inverse(this);
                    if (e.data && e.ids) {
                        var i = v(e.data);
                        i.contextPath = a.appendContextPath(e.data.contextPath, e.ids[0]), e = {
                            data: i
                        }
                    }
                    return s(t, e)
                }), t.registerHelper("log", function(e, s) {
                    var i = s.data && null != s.data.level ? parseInt(s.data.level, 10) : 1;
                    t.log(i, e)
                }), t.registerHelper("lookup", function(t, e) {
                    return t && t[e]
                })
            }
            var r = {},
                a = t,
                n = e,
                o = "3.0.1";
            r.VERSION = o;
            var l = 6;
            r.COMPILER_REVISION = l;
            var c = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1"
            };
            r.REVISION_CHANGES = c;
            var h = a.isArray,
                p = a.isFunction,
                u = a.toString,
                d = "[object Object]";
            r.HandlebarsEnvironment = s, s.prototype = {
                constructor: s,
                logger: m,
                log: f,
                registerHelper: function(t, e) {
                    if (u.call(t) === d) {
                        if (e) throw new n("Arg not supported with multiple helpers");
                        a.extend(this.helpers, t)
                    } else this.helpers[t] = e
                },
                unregisterHelper: function(t) {
                    delete this.helpers[t]
                },
                registerPartial: function(t, e) {
                    if (u.call(t) === d) a.extend(this.partials, t);
                    else {
                        if ("undefined" == typeof e) throw new n("Attempting to register a partial as undefined");
                        this.partials[t] = e
                    }
                },
                unregisterPartial: function(t) {
                    delete this.partials[t]
                }
            };
            var m = {
                methodMap: {
                    0: "debug",
                    1: "info",
                    2: "warn",
                    3: "error"
                },
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                level: 1,
                log: function(t, e) {
                    if ("undefined" != typeof console && m.level <= t) {
                        var s = m.methodMap[t];
                        (console[s] || console.log).call(console, e)
                    }
                }
            };
            r.logger = m;
            var f = m.log;
            r.log = f;
            var v = function(t) {
                var e = a.extend({}, t);
                return e._parent = t, e
            };
            return r.createFrame = v, r
        }(t, e),
        i = function() {
            "use strict";

            function t(t) {
                this.string = t
            }
            var e;
            return t.prototype.toString = t.prototype.toHTML = function() {
                return "" + this.string
            }, e = t
        }(),
        r = function(t, e, s) {
            "use strict";

            function i(t) {
                var e = t && t[0] || 1,
                    s = d;
                if (e !== s) {
                    if (s > e) {
                        var i = m[s],
                            r = m[e];
                        throw new u("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + r + ").")
                    }
                    throw new u("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
                }
            }

            function r(t, e) {
                if (!e) throw new u("No environment passed to template");
                if (!t || !t.main) throw new u("Unknown template object: " + typeof t);
                e.VM.checkRevision(t.compiler);
                var s = function(s, i, r) {
                        r.hash && (i = p.extend({}, i, r.hash)), s = e.VM.resolvePartial.call(this, s, i, r);
                        var a = e.VM.invokePartial.call(this, s, i, r);
                        if (null == a && e.compile && (r.partials[r.name] = e.compile(s, t.compilerOptions, e), a = r.partials[r.name](i, r)), null != a) {
                            if (r.indent) {
                                for (var n = a.split("\n"), o = 0, l = n.length; l > o && (n[o] || o + 1 !== l); o++) n[o] = r.indent + n[o];
                                a = n.join("\n")
                            }
                            return a
                        }
                        throw new u("The partial " + r.name + " could not be compiled when running in runtime-only mode")
                    },
                    i = {
                        strict: function(t, e) {
                            if (!(e in t)) throw new u('"' + e + '" not defined in ' + t);
                            return t[e]
                        },
                        lookup: function(t, e) {
                            for (var s = t.length, i = 0; s > i; i++)
                                if (t[i] && null != t[i][e]) return t[i][e]
                        },
                        lambda: function(t, e) {
                            return "function" == typeof t ? t.call(e) : t
                        },
                        escapeExpression: p.escapeExpression,
                        invokePartial: s,
                        fn: function(e) {
                            return t[e]
                        },
                        programs: [],
                        program: function(t, e, s, i, r) {
                            var n = this.programs[t],
                                o = this.fn(t);
                            return e || r || i || s ? n = a(this, t, o, e, s, i, r) : n || (n = this.programs[t] = a(this, t, o)), n
                        },
                        data: function(t, e) {
                            for (; t && e--;) t = t._parent;
                            return t
                        },
                        merge: function(t, e) {
                            var s = t || e;
                            return t && e && t !== e && (s = p.extend({}, e, t)), s
                        },
                        noop: e.VM.noop,
                        compilerInfo: t.compiler
                    },
                    r = function(e, s) {
                        s = s || {};
                        var a = s.data;
                        r._setup(s), !s.partial && t.useData && (a = c(e, a));
                        var n, o = t.useBlockParams ? [] : void 0;
                        return t.useDepths && (n = s.depths ? [e].concat(s.depths) : [e]), t.main.call(i, e, i.helpers, i.partials, a, o, n)
                    };
                return r.isTop = !0, r._setup = function(s) {
                    s.partial ? (i.helpers = s.helpers, i.partials = s.partials) : (i.helpers = i.merge(s.helpers, e.helpers), t.usePartial && (i.partials = i.merge(s.partials, e.partials)))
                }, r._child = function(e, s, r, n) {
                    if (t.useBlockParams && !r) throw new u("must pass block params");
                    if (t.useDepths && !n) throw new u("must pass parent depths");
                    return a(i, e, t[e], s, 0, r, n)
                }, r
            }

            function a(t, e, s, i, r, a, n) {
                var o = function(e, r) {
                    return r = r || {}, s.call(t, e, t.helpers, t.partials, r.data || i, a && [r.blockParams].concat(a), n && [e].concat(n))
                };
                return o.program = e, o.depth = n ? n.length : 0, o.blockParams = r || 0, o
            }

            function n(t, e, s) {
                return t ? t.call || s.name || (s.name = t, t = s.partials[t]) : t = s.partials[s.name], t
            }

            function o(t, e, s) {
                if (s.partial = !0, void 0 === t) throw new u("The partial " + s.name + " could not be found");
                return t instanceof Function ? t(e, s) : void 0
            }

            function l() {
                return ""
            }

            function c(t, e) {
                return e && "root" in e || (e = e ? f(e) : {}, e.root = t), e
            }
            var h = {},
                p = t,
                u = e,
                d = s.COMPILER_REVISION,
                m = s.REVISION_CHANGES,
                f = s.createFrame;
            return h.checkRevision = i, h.template = r, h.program = a, h.resolvePartial = n, h.invokePartial = o, h.noop = l, h
        }(t, e, s),
        a = function(t, e, s, i, r) {
            "use strict";
            var a, n = t,
                o = e,
                l = s,
                c = i,
                h = r,
                p = function() {
                    var t = new n.HandlebarsEnvironment;
                    return c.extend(t, n), t.SafeString = o, t.Exception = l, t.Utils = c, t.escapeExpression = c.escapeExpression, t.VM = h, t.template = function(e) {
                        return h.template(e, t)
                    }, t
                },
                u = p();
            u.create = p;
            var d = "undefined" != typeof global ? global : window,
                m = d.Handlebars;
            return u.noConflict = function() {
                d.Handlebars === u && (d.Handlebars = m)
            }, u["default"] = u, a = u
        }(s, i, e, t, r),
        n = function() {
            "use strict";
            var t, e = {
                Program: function(t, e, s, i) {
                    this.loc = i, this.type = "Program", this.body = t, this.blockParams = e, this.strip = s
                },
                MustacheStatement: function(t, e, s, i, r, a) {
                    this.loc = a, this.type = "MustacheStatement", this.path = t, this.params = e || [], this.hash = s, this.escaped = i, this.strip = r
                },
                BlockStatement: function(t, e, s, i, r, a, n, o, l) {
                    this.loc = l, this.type = "BlockStatement", this.path = t, this.params = e || [], this.hash = s, this.program = i, this.inverse = r, this.openStrip = a, this.inverseStrip = n, this.closeStrip = o
                },
                PartialStatement: function(t, e, s, i, r) {
                    this.loc = r, this.type = "PartialStatement", this.name = t, this.params = e || [], this.hash = s, this.indent = "", this.strip = i
                },
                ContentStatement: function(t, e) {
                    this.loc = e, this.type = "ContentStatement", this.original = this.value = t
                },
                CommentStatement: function(t, e, s) {
                    this.loc = s, this.type = "CommentStatement", this.value = t, this.strip = e
                },
                SubExpression: function(t, e, s, i) {
                    this.loc = i, this.type = "SubExpression", this.path = t, this.params = e || [], this.hash = s
                },
                PathExpression: function(t, e, s, i, r) {
                    this.loc = r, this.type = "PathExpression", this.data = t, this.original = i, this.parts = s, this.depth = e
                },
                StringLiteral: function(t, e) {
                    this.loc = e, this.type = "StringLiteral", this.original = this.value = t
                },
                NumberLiteral: function(t, e) {
                    this.loc = e, this.type = "NumberLiteral", this.original = this.value = Number(t)
                },
                BooleanLiteral: function(t, e) {
                    this.loc = e, this.type = "BooleanLiteral", this.original = this.value = "true" === t
                },
                Hash: function(t, e) {
                    this.loc = e, this.type = "Hash", this.pairs = t
                },
                HashPair: function(t, e, s) {
                    this.loc = s, this.type = "HashPair", this.key = t, this.value = e
                },
                helpers: {
                    helperExpression: function(t) {
                        return !("SubExpression" !== t.type && !t.params.length && !t.hash)
                    },
                    scopedId: function(t) {
                        return /^\.|this\b/.test(t.original)
                    },
                    simpleId: function(t) {
                        return 1 === t.parts.length && !e.helpers.scopedId(t) && !t.depth
                    }
                }
            };
            return t = e
        }(),
        o = function() {
            "use strict";
            var t, e = function() {
                function t() {
                    this.yy = {}
                }
                var e = {
                        trace: function() {},
                        yy: {},
                        symbols_: {
                            error: 2,
                            root: 3,
                            program: 4,
                            EOF: 5,
                            program_repetition0: 6,
                            statement: 7,
                            mustache: 8,
                            block: 9,
                            rawBlock: 10,
                            partial: 11,
                            content: 12,
                            COMMENT: 13,
                            CONTENT: 14,
                            openRawBlock: 15,
                            END_RAW_BLOCK: 16,
                            OPEN_RAW_BLOCK: 17,
                            helperName: 18,
                            openRawBlock_repetition0: 19,
                            openRawBlock_option0: 20,
                            CLOSE_RAW_BLOCK: 21,
                            openBlock: 22,
                            block_option0: 23,
                            closeBlock: 24,
                            openInverse: 25,
                            block_option1: 26,
                            OPEN_BLOCK: 27,
                            openBlock_repetition0: 28,
                            openBlock_option0: 29,
                            openBlock_option1: 30,
                            CLOSE: 31,
                            OPEN_INVERSE: 32,
                            openInverse_repetition0: 33,
                            openInverse_option0: 34,
                            openInverse_option1: 35,
                            openInverseChain: 36,
                            OPEN_INVERSE_CHAIN: 37,
                            openInverseChain_repetition0: 38,
                            openInverseChain_option0: 39,
                            openInverseChain_option1: 40,
                            inverseAndProgram: 41,
                            INVERSE: 42,
                            inverseChain: 43,
                            inverseChain_option0: 44,
                            OPEN_ENDBLOCK: 45,
                            OPEN: 46,
                            mustache_repetition0: 47,
                            mustache_option0: 48,
                            OPEN_UNESCAPED: 49,
                            mustache_repetition1: 50,
                            mustache_option1: 51,
                            CLOSE_UNESCAPED: 52,
                            OPEN_PARTIAL: 53,
                            partialName: 54,
                            partial_repetition0: 55,
                            partial_option0: 56,
                            param: 57,
                            sexpr: 58,
                            OPEN_SEXPR: 59,
                            sexpr_repetition0: 60,
                            sexpr_option0: 61,
                            CLOSE_SEXPR: 62,
                            hash: 63,
                            hash_repetition_plus0: 64,
                            hashSegment: 65,
                            ID: 66,
                            EQUALS: 67,
                            blockParams: 68,
                            OPEN_BLOCK_PARAMS: 69,
                            blockParams_repetition_plus0: 70,
                            CLOSE_BLOCK_PARAMS: 71,
                            path: 72,
                            dataName: 73,
                            STRING: 74,
                            NUMBER: 75,
                            BOOLEAN: 76,
                            DATA: 77,
                            pathSegments: 78,
                            SEP: 79,
                            $accept: 0,
                            $end: 1
                        },
                        terminals_: {
                            2: "error",
                            5: "EOF",
                            13: "COMMENT",
                            14: "CONTENT",
                            16: "END_RAW_BLOCK",
                            17: "OPEN_RAW_BLOCK",
                            21: "CLOSE_RAW_BLOCK",
                            27: "OPEN_BLOCK",
                            31: "CLOSE",
                            32: "OPEN_INVERSE",
                            37: "OPEN_INVERSE_CHAIN",
                            42: "INVERSE",
                            45: "OPEN_ENDBLOCK",
                            46: "OPEN",
                            49: "OPEN_UNESCAPED",
                            52: "CLOSE_UNESCAPED",
                            53: "OPEN_PARTIAL",
                            59: "OPEN_SEXPR",
                            62: "CLOSE_SEXPR",
                            66: "ID",
                            67: "EQUALS",
                            69: "OPEN_BLOCK_PARAMS",
                            71: "CLOSE_BLOCK_PARAMS",
                            74: "STRING",
                            75: "NUMBER",
                            76: "BOOLEAN",
                            77: "DATA",
                            79: "SEP"
                        },
                        productions_: [0, [3, 2],
                            [4, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [12, 1],
                            [10, 3],
                            [15, 5],
                            [9, 4],
                            [9, 4],
                            [22, 6],
                            [25, 6],
                            [36, 6],
                            [41, 2],
                            [43, 3],
                            [43, 1],
                            [24, 3],
                            [8, 5],
                            [8, 5],
                            [11, 5],
                            [57, 1],
                            [57, 1],
                            [58, 5],
                            [63, 1],
                            [65, 3],
                            [68, 3],
                            [18, 1],
                            [18, 1],
                            [18, 1],
                            [18, 1],
                            [18, 1],
                            [54, 1],
                            [54, 1],
                            [73, 2],
                            [72, 1],
                            [78, 3],
                            [78, 1],
                            [6, 0],
                            [6, 2],
                            [19, 0],
                            [19, 2],
                            [20, 0],
                            [20, 1],
                            [23, 0],
                            [23, 1],
                            [26, 0],
                            [26, 1],
                            [28, 0],
                            [28, 2],
                            [29, 0],
                            [29, 1],
                            [30, 0],
                            [30, 1],
                            [33, 0],
                            [33, 2],
                            [34, 0],
                            [34, 1],
                            [35, 0],
                            [35, 1],
                            [38, 0],
                            [38, 2],
                            [39, 0],
                            [39, 1],
                            [40, 0],
                            [40, 1],
                            [44, 0],
                            [44, 1],
                            [47, 0],
                            [47, 2],
                            [48, 0],
                            [48, 1],
                            [50, 0],
                            [50, 2],
                            [51, 0],
                            [51, 1],
                            [55, 0],
                            [55, 2],
                            [56, 0],
                            [56, 1],
                            [60, 0],
                            [60, 2],
                            [61, 0],
                            [61, 1],
                            [64, 1],
                            [64, 2],
                            [70, 1],
                            [70, 2]
                        ],
                        performAction: function(t, e, s, i, r, a) {
                            var n = a.length - 1;
                            switch (r) {
                                case 1:
                                    return a[n - 1];
                                case 2:
                                    this.$ = new i.Program(a[n], null, {}, i.locInfo(this._$));
                                    break;
                                case 3:
                                    this.$ = a[n];
                                    break;
                                case 4:
                                    this.$ = a[n];
                                    break;
                                case 5:
                                    this.$ = a[n];
                                    break;
                                case 6:
                                    this.$ = a[n];
                                    break;
                                case 7:
                                    this.$ = a[n];
                                    break;
                                case 8:
                                    this.$ = new i.CommentStatement(i.stripComment(a[n]), i.stripFlags(a[n], a[n]), i.locInfo(this._$));
                                    break;
                                case 9:
                                    this.$ = new i.ContentStatement(a[n], i.locInfo(this._$));
                                    break;
                                case 10:
                                    this.$ = i.prepareRawBlock(a[n - 2], a[n - 1], a[n], this._$);
                                    break;
                                case 11:
                                    this.$ = {
                                        path: a[n - 3],
                                        params: a[n - 2],
                                        hash: a[n - 1]
                                    };
                                    break;
                                case 12:
                                    this.$ = i.prepareBlock(a[n - 3], a[n - 2], a[n - 1], a[n], !1, this._$);
                                    break;
                                case 13:
                                    this.$ = i.prepareBlock(a[n - 3], a[n - 2], a[n - 1], a[n], !0, this._$);
                                    break;
                                case 14:
                                    this.$ = {
                                        path: a[n - 4],
                                        params: a[n - 3],
                                        hash: a[n - 2],
                                        blockParams: a[n - 1],
                                        strip: i.stripFlags(a[n - 5], a[n])
                                    };
                                    break;
                                case 15:
                                    this.$ = {
                                        path: a[n - 4],
                                        params: a[n - 3],
                                        hash: a[n - 2],
                                        blockParams: a[n - 1],
                                        strip: i.stripFlags(a[n - 5], a[n])
                                    };
                                    break;
                                case 16:
                                    this.$ = {
                                        path: a[n - 4],
                                        params: a[n - 3],
                                        hash: a[n - 2],
                                        blockParams: a[n - 1],
                                        strip: i.stripFlags(a[n - 5], a[n])
                                    };
                                    break;
                                case 17:
                                    this.$ = {
                                        strip: i.stripFlags(a[n - 1], a[n - 1]),
                                        program: a[n]
                                    };
                                    break;
                                case 18:
                                    var o = i.prepareBlock(a[n - 2], a[n - 1], a[n], a[n], !1, this._$),
                                        l = new i.Program([o], null, {}, i.locInfo(this._$));
                                    l.chained = !0, this.$ = {
                                        strip: a[n - 2].strip,
                                        program: l,
                                        chain: !0
                                    };
                                    break;
                                case 19:
                                    this.$ = a[n];
                                    break;
                                case 20:
                                    this.$ = {
                                        path: a[n - 1],
                                        strip: i.stripFlags(a[n - 2], a[n])
                                    };
                                    break;
                                case 21:
                                    this.$ = i.prepareMustache(a[n - 3], a[n - 2], a[n - 1], a[n - 4], i.stripFlags(a[n - 4], a[n]), this._$);
                                    break;
                                case 22:
                                    this.$ = i.prepareMustache(a[n - 3], a[n - 2], a[n - 1], a[n - 4], i.stripFlags(a[n - 4], a[n]), this._$);
                                    break;
                                case 23:
                                    this.$ = new i.PartialStatement(a[n - 3], a[n - 2], a[n - 1], i.stripFlags(a[n - 4], a[n]), i.locInfo(this._$));
                                    break;
                                case 24:
                                    this.$ = a[n];
                                    break;
                                case 25:
                                    this.$ = a[n];
                                    break;
                                case 26:
                                    this.$ = new i.SubExpression(a[n - 3], a[n - 2], a[n - 1], i.locInfo(this._$));
                                    break;
                                case 27:
                                    this.$ = new i.Hash(a[n], i.locInfo(this._$));
                                    break;
                                case 28:
                                    this.$ = new i.HashPair(a[n - 2], a[n], i.locInfo(this._$));
                                    break;
                                case 29:
                                    this.$ = a[n - 1];
                                    break;
                                case 30:
                                    this.$ = a[n];
                                    break;
                                case 31:
                                    this.$ = a[n];
                                    break;
                                case 32:
                                    this.$ = new i.StringLiteral(a[n], i.locInfo(this._$));
                                    break;
                                case 33:
                                    this.$ = new i.NumberLiteral(a[n], i.locInfo(this._$));
                                    break;
                                case 34:
                                    this.$ = new i.BooleanLiteral(a[n], i.locInfo(this._$));
                                    break;
                                case 35:
                                    this.$ = a[n];
                                    break;
                                case 36:
                                    this.$ = a[n];
                                    break;
                                case 37:
                                    this.$ = i.preparePath(!0, a[n], this._$);
                                    break;
                                case 38:
                                    this.$ = i.preparePath(!1, a[n], this._$);
                                    break;
                                case 39:
                                    a[n - 2].push({
                                        part: a[n],
                                        separator: a[n - 1]
                                    }), this.$ = a[n - 2];
                                    break;
                                case 40:
                                    this.$ = [{
                                        part: a[n]
                                    }];
                                    break;
                                case 41:
                                    this.$ = [];
                                    break;
                                case 42:
                                    a[n - 1].push(a[n]);
                                    break;
                                case 43:
                                    this.$ = [];
                                    break;
                                case 44:
                                    a[n - 1].push(a[n]);
                                    break;
                                case 51:
                                    this.$ = [];
                                    break;
                                case 52:
                                    a[n - 1].push(a[n]);
                                    break;
                                case 57:
                                    this.$ = [];
                                    break;
                                case 58:
                                    a[n - 1].push(a[n]);
                                    break;
                                case 63:
                                    this.$ = [];
                                    break;
                                case 64:
                                    a[n - 1].push(a[n]);
                                    break;
                                case 71:
                                    this.$ = [];
                                    break;
                                case 72:
                                    a[n - 1].push(a[n]);
                                    break;
                                case 75:
                                    this.$ = [];
                                    break;
                                case 76:
                                    a[n - 1].push(a[n]);
                                    break;
                                case 79:
                                    this.$ = [];
                                    break;
                                case 80:
                                    a[n - 1].push(a[n]);
                                    break;
                                case 83:
                                    this.$ = [];
                                    break;
                                case 84:
                                    a[n - 1].push(a[n]);
                                    break;
                                case 87:
                                    this.$ = [a[n]];
                                    break;
                                case 88:
                                    a[n - 1].push(a[n]);
                                    break;
                                case 89:
                                    this.$ = [a[n]];
                                    break;
                                case 90:
                                    a[n - 1].push(a[n])
                            }
                        },
                        table: [{
                            3: 1,
                            4: 2,
                            5: [2, 41],
                            6: 3,
                            13: [2, 41],
                            14: [2, 41],
                            17: [2, 41],
                            27: [2, 41],
                            32: [2, 41],
                            46: [2, 41],
                            49: [2, 41],
                            53: [2, 41]
                        }, {
                            1: [3]
                        }, {
                            5: [1, 4]
                        }, {
                            5: [2, 2],
                            7: 5,
                            8: 6,
                            9: 7,
                            10: 8,
                            11: 9,
                            12: 10,
                            13: [1, 11],
                            14: [1, 18],
                            15: 16,
                            17: [1, 21],
                            22: 14,
                            25: 15,
                            27: [1, 19],
                            32: [1, 20],
                            37: [2, 2],
                            42: [2, 2],
                            45: [2, 2],
                            46: [1, 12],
                            49: [1, 13],
                            53: [1, 17]
                        }, {
                            1: [2, 1]
                        }, {
                            5: [2, 42],
                            13: [2, 42],
                            14: [2, 42],
                            17: [2, 42],
                            27: [2, 42],
                            32: [2, 42],
                            37: [2, 42],
                            42: [2, 42],
                            45: [2, 42],
                            46: [2, 42],
                            49: [2, 42],
                            53: [2, 42]
                        }, {
                            5: [2, 3],
                            13: [2, 3],
                            14: [2, 3],
                            17: [2, 3],
                            27: [2, 3],
                            32: [2, 3],
                            37: [2, 3],
                            42: [2, 3],
                            45: [2, 3],
                            46: [2, 3],
                            49: [2, 3],
                            53: [2, 3]
                        }, {
                            5: [2, 4],
                            13: [2, 4],
                            14: [2, 4],
                            17: [2, 4],
                            27: [2, 4],
                            32: [2, 4],
                            37: [2, 4],
                            42: [2, 4],
                            45: [2, 4],
                            46: [2, 4],
                            49: [2, 4],
                            53: [2, 4]
                        }, {
                            5: [2, 5],
                            13: [2, 5],
                            14: [2, 5],
                            17: [2, 5],
                            27: [2, 5],
                            32: [2, 5],
                            37: [2, 5],
                            42: [2, 5],
                            45: [2, 5],
                            46: [2, 5],
                            49: [2, 5],
                            53: [2, 5]
                        }, {
                            5: [2, 6],
                            13: [2, 6],
                            14: [2, 6],
                            17: [2, 6],
                            27: [2, 6],
                            32: [2, 6],
                            37: [2, 6],
                            42: [2, 6],
                            45: [2, 6],
                            46: [2, 6],
                            49: [2, 6],
                            53: [2, 6]
                        }, {
                            5: [2, 7],
                            13: [2, 7],
                            14: [2, 7],
                            17: [2, 7],
                            27: [2, 7],
                            32: [2, 7],
                            37: [2, 7],
                            42: [2, 7],
                            45: [2, 7],
                            46: [2, 7],
                            49: [2, 7],
                            53: [2, 7]
                        }, {
                            5: [2, 8],
                            13: [2, 8],
                            14: [2, 8],
                            17: [2, 8],
                            27: [2, 8],
                            32: [2, 8],
                            37: [2, 8],
                            42: [2, 8],
                            45: [2, 8],
                            46: [2, 8],
                            49: [2, 8],
                            53: [2, 8]
                        }, {
                            18: 22,
                            66: [1, 30],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            18: 31,
                            66: [1, 30],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            4: 32,
                            6: 3,
                            13: [2, 41],
                            14: [2, 41],
                            17: [2, 41],
                            27: [2, 41],
                            32: [2, 41],
                            37: [2, 41],
                            42: [2, 41],
                            45: [2, 41],
                            46: [2, 41],
                            49: [2, 41],
                            53: [2, 41]
                        }, {
                            4: 33,
                            6: 3,
                            13: [2, 41],
                            14: [2, 41],
                            17: [2, 41],
                            27: [2, 41],
                            32: [2, 41],
                            42: [2, 41],
                            45: [2, 41],
                            46: [2, 41],
                            49: [2, 41],
                            53: [2, 41]
                        }, {
                            12: 34,
                            14: [1, 18]
                        }, {
                            18: 36,
                            54: 35,
                            58: 37,
                            59: [1, 38],
                            66: [1, 30],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            5: [2, 9],
                            13: [2, 9],
                            14: [2, 9],
                            16: [2, 9],
                            17: [2, 9],
                            27: [2, 9],
                            32: [2, 9],
                            37: [2, 9],
                            42: [2, 9],
                            45: [2, 9],
                            46: [2, 9],
                            49: [2, 9],
                            53: [2, 9]
                        }, {
                            18: 39,
                            66: [1, 30],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            18: 40,
                            66: [1, 30],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            18: 41,
                            66: [1, 30],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            31: [2, 71],
                            47: 42,
                            59: [2, 71],
                            66: [2, 71],
                            74: [2, 71],
                            75: [2, 71],
                            76: [2, 71],
                            77: [2, 71]
                        }, {
                            21: [2, 30],
                            31: [2, 30],
                            52: [2, 30],
                            59: [2, 30],
                            62: [2, 30],
                            66: [2, 30],
                            69: [2, 30],
                            74: [2, 30],
                            75: [2, 30],
                            76: [2, 30],
                            77: [2, 30]
                        }, {
                            21: [2, 31],
                            31: [2, 31],
                            52: [2, 31],
                            59: [2, 31],
                            62: [2, 31],
                            66: [2, 31],
                            69: [2, 31],
                            74: [2, 31],
                            75: [2, 31],
                            76: [2, 31],
                            77: [2, 31]
                        }, {
                            21: [2, 32],
                            31: [2, 32],
                            52: [2, 32],
                            59: [2, 32],
                            62: [2, 32],
                            66: [2, 32],
                            69: [2, 32],
                            74: [2, 32],
                            75: [2, 32],
                            76: [2, 32],
                            77: [2, 32]
                        }, {
                            21: [2, 33],
                            31: [2, 33],
                            52: [2, 33],
                            59: [2, 33],
                            62: [2, 33],
                            66: [2, 33],
                            69: [2, 33],
                            74: [2, 33],
                            75: [2, 33],
                            76: [2, 33],
                            77: [2, 33]
                        }, {
                            21: [2, 34],
                            31: [2, 34],
                            52: [2, 34],
                            59: [2, 34],
                            62: [2, 34],
                            66: [2, 34],
                            69: [2, 34],
                            74: [2, 34],
                            75: [2, 34],
                            76: [2, 34],
                            77: [2, 34]
                        }, {
                            21: [2, 38],
                            31: [2, 38],
                            52: [2, 38],
                            59: [2, 38],
                            62: [2, 38],
                            66: [2, 38],
                            69: [2, 38],
                            74: [2, 38],
                            75: [2, 38],
                            76: [2, 38],
                            77: [2, 38],
                            79: [1, 43]
                        }, {
                            66: [1, 30],
                            78: 44
                        }, {
                            21: [2, 40],
                            31: [2, 40],
                            52: [2, 40],
                            59: [2, 40],
                            62: [2, 40],
                            66: [2, 40],
                            69: [2, 40],
                            74: [2, 40],
                            75: [2, 40],
                            76: [2, 40],
                            77: [2, 40],
                            79: [2, 40]
                        }, {
                            50: 45,
                            52: [2, 75],
                            59: [2, 75],
                            66: [2, 75],
                            74: [2, 75],
                            75: [2, 75],
                            76: [2, 75],
                            77: [2, 75]
                        }, {
                            23: 46,
                            36: 48,
                            37: [1, 50],
                            41: 49,
                            42: [1, 51],
                            43: 47,
                            45: [2, 47]
                        }, {
                            26: 52,
                            41: 53,
                            42: [1, 51],
                            45: [2, 49]
                        }, {
                            16: [1, 54]
                        }, {
                            31: [2, 79],
                            55: 55,
                            59: [2, 79],
                            66: [2, 79],
                            74: [2, 79],
                            75: [2, 79],
                            76: [2, 79],
                            77: [2, 79]
                        }, {
                            31: [2, 35],
                            59: [2, 35],
                            66: [2, 35],
                            74: [2, 35],
                            75: [2, 35],
                            76: [2, 35],
                            77: [2, 35]
                        }, {
                            31: [2, 36],
                            59: [2, 36],
                            66: [2, 36],
                            74: [2, 36],
                            75: [2, 36],
                            76: [2, 36],
                            77: [2, 36]
                        }, {
                            18: 56,
                            66: [1, 30],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            28: 57,
                            31: [2, 51],
                            59: [2, 51],
                            66: [2, 51],
                            69: [2, 51],
                            74: [2, 51],
                            75: [2, 51],
                            76: [2, 51],
                            77: [2, 51]
                        }, {
                            31: [2, 57],
                            33: 58,
                            59: [2, 57],
                            66: [2, 57],
                            69: [2, 57],
                            74: [2, 57],
                            75: [2, 57],
                            76: [2, 57],
                            77: [2, 57]
                        }, {
                            19: 59,
                            21: [2, 43],
                            59: [2, 43],
                            66: [2, 43],
                            74: [2, 43],
                            75: [2, 43],
                            76: [2, 43],
                            77: [2, 43]
                        }, {
                            18: 63,
                            31: [2, 73],
                            48: 60,
                            57: 61,
                            58: 64,
                            59: [1, 38],
                            63: 62,
                            64: 65,
                            65: 66,
                            66: [1, 67],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            66: [1, 68]
                        }, {
                            21: [2, 37],
                            31: [2, 37],
                            52: [2, 37],
                            59: [2, 37],
                            62: [2, 37],
                            66: [2, 37],
                            69: [2, 37],
                            74: [2, 37],
                            75: [2, 37],
                            76: [2, 37],
                            77: [2, 37],
                            79: [1, 43]
                        }, {
                            18: 63,
                            51: 69,
                            52: [2, 77],
                            57: 70,
                            58: 64,
                            59: [1, 38],
                            63: 71,
                            64: 65,
                            65: 66,
                            66: [1, 67],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            24: 72,
                            45: [1, 73]
                        }, {
                            45: [2, 48]
                        }, {
                            4: 74,
                            6: 3,
                            13: [2, 41],
                            14: [2, 41],
                            17: [2, 41],
                            27: [2, 41],
                            32: [2, 41],
                            37: [2, 41],
                            42: [2, 41],
                            45: [2, 41],
                            46: [2, 41],
                            49: [2, 41],
                            53: [2, 41]
                        }, {
                            45: [2, 19]
                        }, {
                            18: 75,
                            66: [1, 30],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            4: 76,
                            6: 3,
                            13: [2, 41],
                            14: [2, 41],
                            17: [2, 41],
                            27: [2, 41],
                            32: [2, 41],
                            45: [2, 41],
                            46: [2, 41],
                            49: [2, 41],
                            53: [2, 41]
                        }, {
                            24: 77,
                            45: [1, 73]
                        }, {
                            45: [2, 50]
                        }, {
                            5: [2, 10],
                            13: [2, 10],
                            14: [2, 10],
                            17: [2, 10],
                            27: [2, 10],
                            32: [2, 10],
                            37: [2, 10],
                            42: [2, 10],
                            45: [2, 10],
                            46: [2, 10],
                            49: [2, 10],
                            53: [2, 10]
                        }, {
                            18: 63,
                            31: [2, 81],
                            56: 78,
                            57: 79,
                            58: 64,
                            59: [1, 38],
                            63: 80,
                            64: 65,
                            65: 66,
                            66: [1, 67],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            59: [2, 83],
                            60: 81,
                            62: [2, 83],
                            66: [2, 83],
                            74: [2, 83],
                            75: [2, 83],
                            76: [2, 83],
                            77: [2, 83]
                        }, {
                            18: 63,
                            29: 82,
                            31: [2, 53],
                            57: 83,
                            58: 64,
                            59: [1, 38],
                            63: 84,
                            64: 65,
                            65: 66,
                            66: [1, 67],
                            69: [2, 53],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            18: 63,
                            31: [2, 59],
                            34: 85,
                            57: 86,
                            58: 64,
                            59: [1, 38],
                            63: 87,
                            64: 65,
                            65: 66,
                            66: [1, 67],
                            69: [2, 59],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            18: 63,
                            20: 88,
                            21: [2, 45],
                            57: 89,
                            58: 64,
                            59: [1, 38],
                            63: 90,
                            64: 65,
                            65: 66,
                            66: [1, 67],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            31: [1, 91]
                        }, {
                            31: [2, 72],
                            59: [2, 72],
                            66: [2, 72],
                            74: [2, 72],
                            75: [2, 72],
                            76: [2, 72],
                            77: [2, 72]
                        }, {
                            31: [2, 74]
                        }, {
                            21: [2, 24],
                            31: [2, 24],
                            52: [2, 24],
                            59: [2, 24],
                            62: [2, 24],
                            66: [2, 24],
                            69: [2, 24],
                            74: [2, 24],
                            75: [2, 24],
                            76: [2, 24],
                            77: [2, 24]
                        }, {
                            21: [2, 25],
                            31: [2, 25],
                            52: [2, 25],
                            59: [2, 25],
                            62: [2, 25],
                            66: [2, 25],
                            69: [2, 25],
                            74: [2, 25],
                            75: [2, 25],
                            76: [2, 25],
                            77: [2, 25]
                        }, {
                            21: [2, 27],
                            31: [2, 27],
                            52: [2, 27],
                            62: [2, 27],
                            65: 92,
                            66: [1, 93],
                            69: [2, 27]
                        }, {
                            21: [2, 87],
                            31: [2, 87],
                            52: [2, 87],
                            62: [2, 87],
                            66: [2, 87],
                            69: [2, 87]
                        }, {
                            21: [2, 40],
                            31: [2, 40],
                            52: [2, 40],
                            59: [2, 40],
                            62: [2, 40],
                            66: [2, 40],
                            67: [1, 94],
                            69: [2, 40],
                            74: [2, 40],
                            75: [2, 40],
                            76: [2, 40],
                            77: [2, 40],
                            79: [2, 40]
                        }, {
                            21: [2, 39],
                            31: [2, 39],
                            52: [2, 39],
                            59: [2, 39],
                            62: [2, 39],
                            66: [2, 39],
                            69: [2, 39],
                            74: [2, 39],
                            75: [2, 39],
                            76: [2, 39],
                            77: [2, 39],
                            79: [2, 39]
                        }, {
                            52: [1, 95]
                        }, {
                            52: [2, 76],
                            59: [2, 76],
                            66: [2, 76],
                            74: [2, 76],
                            75: [2, 76],
                            76: [2, 76],
                            77: [2, 76]
                        }, {
                            52: [2, 78]
                        }, {
                            5: [2, 12],
                            13: [2, 12],
                            14: [2, 12],
                            17: [2, 12],
                            27: [2, 12],
                            32: [2, 12],
                            37: [2, 12],
                            42: [2, 12],
                            45: [2, 12],
                            46: [2, 12],
                            49: [2, 12],
                            53: [2, 12]
                        }, {
                            18: 96,
                            66: [1, 30],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            36: 48,
                            37: [1, 50],
                            41: 49,
                            42: [1, 51],
                            43: 98,
                            44: 97,
                            45: [2, 69]
                        }, {
                            31: [2, 63],
                            38: 99,
                            59: [2, 63],
                            66: [2, 63],
                            69: [2, 63],
                            74: [2, 63],
                            75: [2, 63],
                            76: [2, 63],
                            77: [2, 63]
                        }, {
                            45: [2, 17]
                        }, {
                            5: [2, 13],
                            13: [2, 13],
                            14: [2, 13],
                            17: [2, 13],
                            27: [2, 13],
                            32: [2, 13],
                            37: [2, 13],
                            42: [2, 13],
                            45: [2, 13],
                            46: [2, 13],
                            49: [2, 13],
                            53: [2, 13]
                        }, {
                            31: [1, 100]
                        }, {
                            31: [2, 80],
                            59: [2, 80],
                            66: [2, 80],
                            74: [2, 80],
                            75: [2, 80],
                            76: [2, 80],
                            77: [2, 80]
                        }, {
                            31: [2, 82]
                        }, {
                            18: 63,
                            57: 102,
                            58: 64,
                            59: [1, 38],
                            61: 101,
                            62: [2, 85],
                            63: 103,
                            64: 65,
                            65: 66,
                            66: [1, 67],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            30: 104,
                            31: [2, 55],
                            68: 105,
                            69: [1, 106]
                        }, {
                            31: [2, 52],
                            59: [2, 52],
                            66: [2, 52],
                            69: [2, 52],
                            74: [2, 52],
                            75: [2, 52],
                            76: [2, 52],
                            77: [2, 52]
                        }, {
                            31: [2, 54],
                            69: [2, 54]
                        }, {
                            31: [2, 61],
                            35: 107,
                            68: 108,
                            69: [1, 106]
                        }, {
                            31: [2, 58],
                            59: [2, 58],
                            66: [2, 58],
                            69: [2, 58],
                            74: [2, 58],
                            75: [2, 58],
                            76: [2, 58],
                            77: [2, 58]
                        }, {
                            31: [2, 60],
                            69: [2, 60]
                        }, {
                            21: [1, 109]
                        }, {
                            21: [2, 44],
                            59: [2, 44],
                            66: [2, 44],
                            74: [2, 44],
                            75: [2, 44],
                            76: [2, 44],
                            77: [2, 44]
                        }, {
                            21: [2, 46]
                        }, {
                            5: [2, 21],
                            13: [2, 21],
                            14: [2, 21],
                            17: [2, 21],
                            27: [2, 21],
                            32: [2, 21],
                            37: [2, 21],
                            42: [2, 21],
                            45: [2, 21],
                            46: [2, 21],
                            49: [2, 21],
                            53: [2, 21]
                        }, {
                            21: [2, 88],
                            31: [2, 88],
                            52: [2, 88],
                            62: [2, 88],
                            66: [2, 88],
                            69: [2, 88]
                        }, {
                            67: [1, 94]
                        }, {
                            18: 63,
                            57: 110,
                            58: 64,
                            59: [1, 38],
                            66: [1, 30],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            5: [2, 22],
                            13: [2, 22],
                            14: [2, 22],
                            17: [2, 22],
                            27: [2, 22],
                            32: [2, 22],
                            37: [2, 22],
                            42: [2, 22],
                            45: [2, 22],
                            46: [2, 22],
                            49: [2, 22],
                            53: [2, 22]
                        }, {
                            31: [1, 111]
                        }, {
                            45: [2, 18]
                        }, {
                            45: [2, 70]
                        }, {
                            18: 63,
                            31: [2, 65],
                            39: 112,
                            57: 113,
                            58: 64,
                            59: [1, 38],
                            63: 114,
                            64: 65,
                            65: 66,
                            66: [1, 67],
                            69: [2, 65],
                            72: 23,
                            73: 24,
                            74: [1, 25],
                            75: [1, 26],
                            76: [1, 27],
                            77: [1, 29],
                            78: 28
                        }, {
                            5: [2, 23],
                            13: [2, 23],
                            14: [2, 23],
                            17: [2, 23],
                            27: [2, 23],
                            32: [2, 23],
                            37: [2, 23],
                            42: [2, 23],
                            45: [2, 23],
                            46: [2, 23],
                            49: [2, 23],
                            53: [2, 23]
                        }, {
                            62: [1, 115]
                        }, {
                            59: [2, 84],
                            62: [2, 84],
                            66: [2, 84],
                            74: [2, 84],
                            75: [2, 84],
                            76: [2, 84],
                            77: [2, 84]
                        }, {
                            62: [2, 86]
                        }, {
                            31: [1, 116]
                        }, {
                            31: [2, 56]
                        }, {
                            66: [1, 118],
                            70: 117
                        }, {
                            31: [1, 119]
                        }, {
                            31: [2, 62]
                        }, {
                            14: [2, 11]
                        }, {
                            21: [2, 28],
                            31: [2, 28],
                            52: [2, 28],
                            62: [2, 28],
                            66: [2, 28],
                            69: [2, 28]
                        }, {
                            5: [2, 20],
                            13: [2, 20],
                            14: [2, 20],
                            17: [2, 20],
                            27: [2, 20],
                            32: [2, 20],
                            37: [2, 20],
                            42: [2, 20],
                            45: [2, 20],
                            46: [2, 20],
                            49: [2, 20],
                            53: [2, 20]
                        }, {
                            31: [2, 67],
                            40: 120,
                            68: 121,
                            69: [1, 106]
                        }, {
                            31: [2, 64],
                            59: [2, 64],
                            66: [2, 64],
                            69: [2, 64],
                            74: [2, 64],
                            75: [2, 64],
                            76: [2, 64],
                            77: [2, 64]
                        }, {
                            31: [2, 66],
                            69: [2, 66]
                        }, {
                            21: [2, 26],
                            31: [2, 26],
                            52: [2, 26],
                            59: [2, 26],
                            62: [2, 26],
                            66: [2, 26],
                            69: [2, 26],
                            74: [2, 26],
                            75: [2, 26],
                            76: [2, 26],
                            77: [2, 26]
                        }, {
                            13: [2, 14],
                            14: [2, 14],
                            17: [2, 14],
                            27: [2, 14],
                            32: [2, 14],
                            37: [2, 14],
                            42: [2, 14],
                            45: [2, 14],
                            46: [2, 14],
                            49: [2, 14],
                            53: [2, 14]
                        }, {
                            66: [1, 123],
                            71: [1, 122]
                        }, {
                            66: [2, 89],
                            71: [2, 89]
                        }, {
                            13: [2, 15],
                            14: [2, 15],
                            17: [2, 15],
                            27: [2, 15],
                            32: [2, 15],
                            42: [2, 15],
                            45: [2, 15],
                            46: [2, 15],
                            49: [2, 15],
                            53: [2, 15]
                        }, {
                            31: [1, 124]
                        }, {
                            31: [2, 68]
                        }, {
                            31: [2, 29]
                        }, {
                            66: [2, 90],
                            71: [2, 90]
                        }, {
                            13: [2, 16],
                            14: [2, 16],
                            17: [2, 16],
                            27: [2, 16],
                            32: [2, 16],
                            37: [2, 16],
                            42: [2, 16],
                            45: [2, 16],
                            46: [2, 16],
                            49: [2, 16],
                            53: [2, 16]
                        }],
                        defaultActions: {
                            4: [2, 1],
                            47: [2, 48],
                            49: [2, 19],
                            53: [2, 50],
                            62: [2, 74],
                            71: [2, 78],
                            76: [2, 17],
                            80: [2, 82],
                            90: [2, 46],
                            97: [2, 18],
                            98: [2, 70],
                            103: [2, 86],
                            105: [2, 56],
                            108: [2, 62],
                            109: [2, 11],
                            121: [2, 68],
                            122: [2, 29]
                        },
                        parseError: function(t) {
                            throw new Error(t)
                        },
                        parse: function(t) {
                            function e() {
                                var t;
                                return t = s.lexer.lex() || 1, "number" != typeof t && (t = s.symbols_[t] || t), t
                            }
                            var s = this,
                                i = [0],
                                r = [null],
                                a = [],
                                n = this.table,
                                o = "",
                                l = 0,
                                c = 0,
                                h = 0;
                            this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                            var p = this.lexer.yylloc;
                            a.push(p);
                            var u = this.lexer.options && this.lexer.options.ranges;
                            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                            for (var d, m, f, v, g, b, k, y, S, x = {};;) {
                                if (f = i[i.length - 1], this.defaultActions[f] ? v = this.defaultActions[f] : ((null === d || "undefined" == typeof d) && (d = e()), v = n[f] && n[f][d]), "undefined" == typeof v || !v.length || !v[0]) {
                                    var w = "";
                                    if (!h) {
                                        S = [];
                                        for (b in n[f]) this.terminals_[b] && b > 2 && S.push("'" + this.terminals_[b] + "'");
                                        w = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + S.join(", ") + ", got '" + (this.terminals_[d] || d) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == d ? "end of input" : "'" + (this.terminals_[d] || d) + "'"), this.parseError(w, {
                                            text: this.lexer.match,
                                            token: this.terminals_[d] || d,
                                            line: this.lexer.yylineno,
                                            loc: p,
                                            expected: S
                                        })
                                    }
                                }
                                if (v[0] instanceof Array && v.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + f + ", token: " + d);
                                switch (v[0]) {
                                    case 1:
                                        i.push(d), r.push(this.lexer.yytext), a.push(this.lexer.yylloc), i.push(v[1]), d = null, m ? (d = m, m = null) : (c = this.lexer.yyleng, o = this.lexer.yytext, l = this.lexer.yylineno, p = this.lexer.yylloc, h > 0 && h--);
                                        break;
                                    case 2:
                                        if (k = this.productions_[v[1]][1], x.$ = r[r.length - k], x._$ = {
                                                first_line: a[a.length - (k || 1)].first_line,
                                                last_line: a[a.length - 1].last_line,
                                                first_column: a[a.length - (k || 1)].first_column,
                                                last_column: a[a.length - 1].last_column
                                            }, u && (x._$.range = [a[a.length - (k || 1)].range[0], a[a.length - 1].range[1]]), g = this.performAction.call(x, o, c, l, this.yy, v[1], r, a), "undefined" != typeof g) return g;
                                        k && (i = i.slice(0, -1 * k * 2), r = r.slice(0, -1 * k), a = a.slice(0, -1 * k)), i.push(this.productions_[v[1]][0]), r.push(x.$), a.push(x._$), y = n[i[i.length - 2]][i[i.length - 1]], i.push(y);
                                        break;
                                    case 3:
                                        return !0
                                }
                            }
                            return !0
                        }
                    },
                    s = function() {
                        var t = {
                            EOF: 1,
                            parseError: function(t, e) {
                                if (!this.yy.parser) throw new Error(t);
                                this.yy.parser.parseError(t, e)
                            },
                            setInput: function(t) {
                                return this._input = t, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                    first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 0
                                }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                            },
                            input: function() {
                                var t = this._input[0];
                                this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t;
                                var e = t.match(/(?:\r\n?|\n).*/g);
                                return e ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t
                            },
                            unput: function(t) {
                                var e = t.length,
                                    s = t.split(/(?:\r\n?|\n)/g);
                                this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e - 1), this.offset -= e;
                                var i = this.match.split(/(?:\r\n?|\n)/g);
                                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), s.length - 1 && (this.yylineno -= s.length - 1);
                                var r = this.yylloc.range;
                                return this.yylloc = {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.first_column,
                                    last_column: s ? (s.length === i.length ? this.yylloc.first_column : 0) + i[i.length - s.length].length - s[0].length : this.yylloc.first_column - e
                                }, this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - e]), this
                            },
                            more: function() {
                                return this._more = !0, this
                            },
                            less: function(t) {
                                this.unput(this.match.slice(t))
                            },
                            pastInput: function() {
                                var t = this.matched.substr(0, this.matched.length - this.match.length);
                                return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                            },
                            upcomingInput: function() {
                                var t = this.match;
                                return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
                            },
                            showPosition: function() {
                                var t = this.pastInput(),
                                    e = new Array(t.length + 1).join("-");
                                return t + this.upcomingInput() + "\n" + e + "^"
                            },
                            next: function() {
                                if (this.done) return this.EOF;
                                this._input || (this.done = !0);
                                var t, e, s, i, r;
                                this._more || (this.yytext = "", this.match = "");
                                for (var a = this._currentRules(), n = 0; n < a.length && (s = this._input.match(this.rules[a[n]]), !s || e && !(s[0].length > e[0].length) || (e = s, i = n, this.options.flex)); n++);
                                return e ? (r = e[0].match(/(?:\r\n?|\n).*/g), r && (this.yylineno += r.length), this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                                }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], t = this.performAction.call(this, this.yy, this, a[i], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), t ? t : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            },
                            lex: function() {
                                var t = this.next();
                                return "undefined" != typeof t ? t : this.lex()
                            },
                            begin: function(t) {
                                this.conditionStack.push(t)
                            },
                            popState: function() {
                                return this.conditionStack.pop()
                            },
                            _currentRules: function() {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                            },
                            topState: function() {
                                return this.conditionStack[this.conditionStack.length - 2]
                            },
                            pushState: function(t) {
                                this.begin(t)
                            }
                        };
                        return t.options = {}, t.performAction = function(t, e, s, i) {
                            function r(t, s) {
                                return e.yytext = e.yytext.substr(t, e.yyleng - s)
                            }
                            switch (s) {
                                case 0:
                                    if ("\\\\" === e.yytext.slice(-2) ? (r(0, 1), this.begin("mu")) : "\\" === e.yytext.slice(-1) ? (r(0, 1), this.begin("emu")) : this.begin("mu"), e.yytext) return 14;
                                    break;
                                case 1:
                                    return 14;
                                case 2:
                                    return this.popState(), 14;
                                case 3:
                                    return e.yytext = e.yytext.substr(5, e.yyleng - 9), this.popState(), 16;
                                case 4:
                                    return 14;
                                case 5:
                                    return this.popState(), 13;
                                case 6:
                                    return 59;
                                case 7:
                                    return 62;
                                case 8:
                                    return 17;
                                case 9:
                                    return this.popState(), this.begin("raw"), 21;
                                case 10:
                                    return 53;
                                case 11:
                                    return 27;
                                case 12:
                                    return 45;
                                case 13:
                                    return this.popState(), 42;
                                case 14:
                                    return this.popState(), 42;
                                case 15:
                                    return 32;
                                case 16:
                                    return 37;
                                case 17:
                                    return 49;
                                case 18:
                                    return 46;
                                case 19:
                                    this.unput(e.yytext), this.popState(), this.begin("com");
                                    break;
                                case 20:
                                    return this.popState(), 13;
                                case 21:
                                    return 46;
                                case 22:
                                    return 67;
                                case 23:
                                    return 66;
                                case 24:
                                    return 66;
                                case 25:
                                    return 79;
                                case 26:
                                    break;
                                case 27:
                                    return this.popState(), 52;
                                case 28:
                                    return this.popState(), 31;
                                case 29:
                                    return e.yytext = r(1, 2).replace(/\\"/g, '"'), 74;
                                case 30:
                                    return e.yytext = r(1, 2).replace(/\\'/g, "'"), 74;
                                case 31:
                                    return 77;
                                case 32:
                                    return 76;
                                case 33:
                                    return 76;
                                case 34:
                                    return 75;
                                case 35:
                                    return 69;
                                case 36:
                                    return 71;
                                case 37:
                                    return 66;
                                case 38:
                                    return e.yytext = r(1, 2), 66;
                                case 39:
                                    return "INVALID";
                                case 40:
                                    return 5
                            }
                        }, t.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], t.conditions = {
                            mu: {
                                rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                                inclusive: !1
                            },
                            emu: {
                                rules: [2],
                                inclusive: !1
                            },
                            com: {
                                rules: [5],
                                inclusive: !1
                            },
                            raw: {
                                rules: [3, 4],
                                inclusive: !1
                            },
                            INITIAL: {
                                rules: [0, 1, 40],
                                inclusive: !0
                            }
                        }, t
                    }();
                return e.lexer = s, t.prototype = e, e.Parser = t, new t
            }();
            return t = e
        }(),
        l = function(t, e) {
            "use strict";

            function s() {
                this.parents = []
            }
            var i, r = t,
                a = e;
            return s.prototype = {
                constructor: s,
                mutating: !1,
                acceptKey: function(t, e) {
                    var s = this.accept(t[e]);
                    if (this.mutating) {
                        if (s && (!s.type || !a[s.type])) throw new r('Unexpected node type "' + s.type + '" found when accepting ' + e + " on " + t.type);
                        t[e] = s
                    }
                },
                acceptRequired: function(t, e) {
                    if (this.acceptKey(t, e), !t[e]) throw new r(t.type + " requires " + e)
                },
                acceptArray: function(t) {
                    for (var e = 0, s = t.length; s > e; e++) this.acceptKey(t, e), t[e] || (t.splice(e, 1), e--, s--)
                },
                accept: function(t) {
                    if (t) {
                        this.current && this.parents.unshift(this.current), this.current = t;
                        var e = this[t.type](t);
                        return this.current = this.parents.shift(), !this.mutating || e ? e : e !== !1 ? t : void 0
                    }
                },
                Program: function(t) {
                    this.acceptArray(t.body)
                },
                MustacheStatement: function(t) {
                    this.acceptRequired(t, "path"), this.acceptArray(t.params), this.acceptKey(t, "hash")
                },
                BlockStatement: function(t) {
                    this.acceptRequired(t, "path"), this.acceptArray(t.params), this.acceptKey(t, "hash"), this.acceptKey(t, "program"), this.acceptKey(t, "inverse")
                },
                PartialStatement: function(t) {
                    this.acceptRequired(t, "name"), this.acceptArray(t.params), this.acceptKey(t, "hash")
                },
                ContentStatement: function() {},
                CommentStatement: function() {},
                SubExpression: function(t) {
                    this.acceptRequired(t, "path"), this.acceptArray(t.params), this.acceptKey(t, "hash")
                },
                PartialExpression: function(t) {
                    this.acceptRequired(t, "name"), this.acceptArray(t.params), this.acceptKey(t, "hash")
                },
                PathExpression: function() {},
                StringLiteral: function() {},
                NumberLiteral: function() {},
                BooleanLiteral: function() {},
                Hash: function(t) {
                    this.acceptArray(t.pairs)
                },
                HashPair: function(t) {
                    this.acceptRequired(t, "value")
                }
            }, i = s
        }(e, n),
        c = function(t) {
            "use strict";

            function e() {}

            function s(t, e, s) {
                void 0 === e && (e = t.length);
                var i = t[e - 1],
                    r = t[e - 2];
                return i ? "ContentStatement" === i.type ? (r || !s ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(i.original) : void 0 : s
            }

            function i(t, e, s) {
                void 0 === e && (e = -1);
                var i = t[e + 1],
                    r = t[e + 2];
                return i ? "ContentStatement" === i.type ? (r || !s ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(i.original) : void 0 : s
            }

            function r(t, e, s) {
                var i = t[null == e ? 0 : e + 1];
                if (i && "ContentStatement" === i.type && (s || !i.rightStripped)) {
                    var r = i.value;
                    i.value = i.value.replace(s ? /^\s+/ : /^[ \t]*\r?\n?/, ""), i.rightStripped = i.value !== r
                }
            }

            function a(t, e, s) {
                var i = t[null == e ? t.length - 1 : e - 1];
                if (i && "ContentStatement" === i.type && (s || !i.leftStripped)) {
                    var r = i.value;
                    return i.value = i.value.replace(s ? /\s+$/ : /[ \t]+$/, ""), i.leftStripped = i.value !== r, i.leftStripped
                }
            }
            var n, o = t;
            return e.prototype = new o, e.prototype.Program = function(t) {
                var e = !this.isRootSeen;
                this.isRootSeen = !0;
                for (var n = t.body, o = 0, l = n.length; l > o; o++) {
                    var c = n[o],
                        h = this.accept(c);
                    if (h) {
                        var p = s(n, o, e),
                            u = i(n, o, e),
                            d = h.openStandalone && p,
                            m = h.closeStandalone && u,
                            f = h.inlineStandalone && p && u;
                        h.close && r(n, o, !0), h.open && a(n, o, !0), f && (r(n, o), a(n, o) && "PartialStatement" === c.type && (c.indent = /([ \t]+$)/.exec(n[o - 1].original)[1])), d && (r((c.program || c.inverse).body), a(n, o)), m && (r(n, o), a((c.inverse || c.program).body))
                    }
                }
                return t
            }, e.prototype.BlockStatement = function(t) {
                this.accept(t.program), this.accept(t.inverse);
                var e = t.program || t.inverse,
                    n = t.program && t.inverse,
                    o = n,
                    l = n;
                if (n && n.chained)
                    for (o = n.body[0].program; l.chained;) l = l.body[l.body.length - 1].program;
                var c = {
                    open: t.openStrip.open,
                    close: t.closeStrip.close,
                    openStandalone: i(e.body),
                    closeStandalone: s((o || e).body)
                };
                if (t.openStrip.close && r(e.body, null, !0), n) {
                    var h = t.inverseStrip;
                    h.open && a(e.body, null, !0), h.close && r(o.body, null, !0), t.closeStrip.open && a(l.body, null, !0), s(e.body) && i(o.body) && (a(e.body), r(o.body))
                } else t.closeStrip.open && a(e.body, null, !0);
                return c
            }, e.prototype.MustacheStatement = function(t) {
                return t.strip
            }, e.prototype.PartialStatement = e.prototype.CommentStatement = function(t) {
                var e = t.strip || {};
                return {
                    inlineStandalone: !0,
                    open: e.open,
                    close: e.close
                }
            }, n = e
        }(l),
        h = function(t) {
            "use strict";

            function e(t, e) {
                this.source = t, this.start = {
                    line: e.first_line,
                    column: e.first_column
                }, this.end = {
                    line: e.last_line,
                    column: e.last_column
                }
            }

            function s(t, e) {
                return {
                    open: "~" === t.charAt(2),
                    close: "~" === e.charAt(e.length - 3)
                }
            }

            function i(t) {
                return t.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "")
            }

            function r(t, e, s) {
                s = this.locInfo(s);
                for (var i = t ? "@" : "", r = [], a = 0, n = "", o = 0, l = e.length; l > o; o++) {
                    var h = e[o].part;
                    if (i += (e[o].separator || "") + h, ".." === h || "." === h || "this" === h) {
                        if (r.length > 0) throw new c("Invalid path: " + i, {
                            loc: s
                        });
                        ".." === h && (a++, n += "../")
                    } else r.push(h)
                }
                return new this.PathExpression(t, a, r, i, s)
            }

            function a(t, e, s, i, r, a) {
                var n = i.charAt(3) || i.charAt(2),
                    o = "{" !== n && "&" !== n;
                return new this.MustacheStatement(t, e, s, o, r, this.locInfo(a))
            }

            function n(t, e, s, i) {
                if (t.path.original !== s) {
                    var r = {
                        loc: t.path.loc
                    };
                    throw new c(t.path.original + " doesn't match " + s, r)
                }
                i = this.locInfo(i);
                var a = new this.Program([e], null, {}, i);
                return new this.BlockStatement(t.path, t.params, t.hash, a, void 0, {}, {}, {}, i)
            }

            function o(t, e, s, i, r, a) {
                if (i && i.path && t.path.original !== i.path.original) {
                    var n = {
                        loc: t.path.loc
                    };
                    throw new c(t.path.original + " doesn't match " + i.path.original, n)
                }
                e.blockParams = t.blockParams;
                var o, l;
                return s && (s.chain && (s.program.body[0].closeStrip = i.strip), l = s.strip, o = s.program), r && (r = o, o = e, e = r), new this.BlockStatement(t.path, t.params, t.hash, e, o, t.strip, l, i && i.strip, this.locInfo(a))
            }
            var l = {},
                c = t;
            return l.SourceLocation = e, l.stripFlags = s, l.stripComment = i, l.preparePath = r, l.prepareMustache = a, l.prepareRawBlock = n, l.prepareBlock = o, l
        }(e),
        p = function(t, e, s, i, r) {
            "use strict";

            function a(t, e) {
                if ("Program" === t.type) return t;
                o.yy = u, u.locInfo = function(t) {
                    return new u.SourceLocation(e && e.srcName, t)
                };
                var s = new c;
                return s.accept(o.parse(t))
            }
            var n = {},
                o = t,
                l = e,
                c = s,
                h = i,
                p = r.extend;
            n.parser = o;
            var u = {};
            return p(u, h, l), n.parse = a, n
        }(o, n, c, h, t),
        u = function(t, e, s) {
            "use strict";

            function i() {}

            function r(t, e, s) {
                if (null == t || "string" != typeof t && "Program" !== t.type) throw new c("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t);
                e = e || {}, "data" in e || (e.data = !0), e.compat && (e.useDepths = !0);
                var i = s.parse(t, e),
                    r = (new s.Compiler).compile(i, e);
                return (new s.JavaScriptCompiler).compile(r, e)
            }

            function a(t, e, s) {
                function i() {
                    var i = s.parse(t, e),
                        r = (new s.Compiler).compile(i, e),
                        a = (new s.JavaScriptCompiler).compile(r, e, void 0, !0);
                    return s.template(a)
                }
                if (null == t || "string" != typeof t && "Program" !== t.type) throw new c("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + t);
                e = e || {}, "data" in e || (e.data = !0), e.compat && (e.useDepths = !0);
                var r, a = function(t, e) {
                    return r || (r = i()), r.call(this, t, e)
                };
                return a._setup = function(t) {
                    return r || (r = i()), r._setup(t)
                }, a._child = function(t, e, s, a) {
                    return r || (r = i()), r._child(t, e, s, a)
                }, a
            }

            function n(t, e) {
                if (t === e) return !0;
                if (h(t) && h(e) && t.length === e.length) {
                    for (var s = 0; s < t.length; s++)
                        if (!n(t[s], e[s])) return !1;
                    return !0
                }
            }

            function o(t) {
                if (!t.path.parts) {
                    var e = t.path;
                    t.path = new u.PathExpression(!1, 0, [e.original + ""], e.original + "", e.loc)
                }
            }
            var l = {},
                c = t,
                h = e.isArray,
                p = e.indexOf,
                u = s,
                d = [].slice;
            return l.Compiler = i, i.prototype = {
                compiler: i,
                equals: function(t) {
                    var e = this.opcodes.length;
                    if (t.opcodes.length !== e) return !1;
                    for (var s = 0; e > s; s++) {
                        var i = this.opcodes[s],
                            r = t.opcodes[s];
                        if (i.opcode !== r.opcode || !n(i.args, r.args)) return !1
                    }
                    for (e = this.children.length, s = 0; e > s; s++)
                        if (!this.children[s].equals(t.children[s])) return !1;
                    return !0
                },
                guid: 0,
                compile: function(t, e) {
                    this.sourceNode = [], this.opcodes = [], this.children = [], this.options = e, this.stringParams = e.stringParams, this.trackIds = e.trackIds, e.blockParams = e.blockParams || [];
                    var s = e.knownHelpers;
                    if (e.knownHelpers = {
                            helperMissing: !0,
                            blockHelperMissing: !0,
                            each: !0,
                            "if": !0,
                            unless: !0,
                            "with": !0,
                            log: !0,
                            lookup: !0
                        }, s)
                        for (var i in s) e.knownHelpers[i] = s[i];
                    return this.accept(t)
                },
                compileProgram: function(t) {
                    var e = (new this.compiler).compile(t, this.options),
                        s = this.guid++;
                    return this.usePartial = this.usePartial || e.usePartial, this.children[s] = e, this.useDepths = this.useDepths || e.useDepths, s
                },
                accept: function(t) {
                    this.sourceNode.unshift(t);
                    var e = this[t.type](t);
                    return this.sourceNode.shift(), e
                },
                Program: function(t) {
                    this.options.blockParams.unshift(t.blockParams);
                    for (var e = t.body, s = 0, i = e.length; i > s; s++) this.accept(e[s]);
                    return this.options.blockParams.shift(), this.isSimple = 1 === i, this.blockParams = t.blockParams ? t.blockParams.length : 0, this
                },
                BlockStatement: function(t) {
                    o(t);
                    var e = t.program,
                        s = t.inverse;
                    e = e && this.compileProgram(e), s = s && this.compileProgram(s);
                    var i = this.classifySexpr(t);
                    "helper" === i ? this.helperSexpr(t, e, s) : "simple" === i ? (this.simpleSexpr(t), this.opcode("pushProgram", e), this.opcode("pushProgram", s), this.opcode("emptyHash"), this.opcode("blockValue", t.path.original)) : (this.ambiguousSexpr(t, e, s), this.opcode("pushProgram", e), this.opcode("pushProgram", s), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
                },
                PartialStatement: function(t) {
                    this.usePartial = !0;
                    var e = t.params;
                    if (e.length > 1) throw new c("Unsupported number of partial arguments: " + e.length, t);
                    e.length || e.push({
                        type: "PathExpression",
                        parts: [],
                        depth: 0
                    });
                    var s = t.name.original,
                        i = "SubExpression" === t.name.type;
                    i && this.accept(t.name), this.setupFullMustacheParams(t, void 0, void 0, !0);
                    var r = t.indent || "";
                    this.options.preventIndent && r && (this.opcode("appendContent", r), r = ""), this.opcode("invokePartial", i, s, r), this.opcode("append")
                },
                MustacheStatement: function(t) {
                    this.SubExpression(t), this.opcode(t.escaped && !this.options.noEscape ? "appendEscaped" : "append")
                },
                ContentStatement: function(t) {
                    t.value && this.opcode("appendContent", t.value)
                },
                CommentStatement: function() {},
                SubExpression: function(t) {
                    o(t);
                    var e = this.classifySexpr(t);
                    "simple" === e ? this.simpleSexpr(t) : "helper" === e ? this.helperSexpr(t) : this.ambiguousSexpr(t)
                },
                ambiguousSexpr: function(t, e, s) {
                    var i = t.path,
                        r = i.parts[0],
                        a = null != e || null != s;
                    this.opcode("getContext", i.depth), this.opcode("pushProgram", e), this.opcode("pushProgram", s), this.accept(i), this.opcode("invokeAmbiguous", r, a)
                },
                simpleSexpr: function(t) {
                    this.accept(t.path), this.opcode("resolvePossibleLambda")
                },
                helperSexpr: function(t, e, s) {
                    var i = this.setupFullMustacheParams(t, e, s),
                        r = t.path,
                        a = r.parts[0];
                    if (this.options.knownHelpers[a]) this.opcode("invokeKnownHelper", i.length, a);
                    else {
                        if (this.options.knownHelpersOnly) throw new c("You specified knownHelpersOnly, but used the unknown helper " + a, t);
                        r.falsy = !0, this.accept(r), this.opcode("invokeHelper", i.length, r.original, u.helpers.simpleId(r))
                    }
                },
                PathExpression: function(t) {
                    this.addDepth(t.depth), this.opcode("getContext", t.depth);
                    var e = t.parts[0],
                        s = u.helpers.scopedId(t),
                        i = !t.depth && !s && this.blockParamIndex(e);
                    i ? this.opcode("lookupBlockParam", i, t.parts) : e ? t.data ? (this.options.data = !0, this.opcode("lookupData", t.depth, t.parts)) : this.opcode("lookupOnContext", t.parts, t.falsy, s) : this.opcode("pushContext")
                },
                StringLiteral: function(t) {
                    this.opcode("pushString", t.value)
                },
                NumberLiteral: function(t) {
                    this.opcode("pushLiteral", t.value)
                },
                BooleanLiteral: function(t) {
                    this.opcode("pushLiteral", t.value)
                },
                Hash: function(t) {
                    var e, s, i = t.pairs;
                    for (this.opcode("pushHash"), e = 0, s = i.length; s > e; e++) this.pushParam(i[e].value);
                    for (; e--;) this.opcode("assignToHash", i[e].key);
                    this.opcode("popHash")
                },
                opcode: function(t) {
                    this.opcodes.push({
                        opcode: t,
                        args: d.call(arguments, 1),
                        loc: this.sourceNode[0].loc
                    })
                },
                addDepth: function(t) {
                    t && (this.useDepths = !0)
                },
                classifySexpr: function(t) {
                    var e = u.helpers.simpleId(t.path),
                        s = e && !!this.blockParamIndex(t.path.parts[0]),
                        i = !s && u.helpers.helperExpression(t),
                        r = !s && (i || e),
                        a = this.options;
                    if (r && !i) {
                        var n = t.path.parts[0];
                        a.knownHelpers[n] ? i = !0 : a.knownHelpersOnly && (r = !1)
                    }
                    return i ? "helper" : r ? "ambiguous" : "simple"
                },
                pushParams: function(t) {
                    for (var e = 0, s = t.length; s > e; e++) this.pushParam(t[e])
                },
                pushParam: function(t) {
                    var e = null != t.value ? t.value : t.original || "";
                    if (this.stringParams) e.replace && (e = e.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), t.depth && this.addDepth(t.depth), this.opcode("getContext", t.depth || 0), this.opcode("pushStringParam", e, t.type), "SubExpression" === t.type && this.accept(t);
                    else {
                        if (this.trackIds) {
                            var s;
                            if (!t.parts || u.helpers.scopedId(t) || t.depth || (s = this.blockParamIndex(t.parts[0])), s) {
                                var i = t.parts.slice(1).join(".");
                                this.opcode("pushId", "BlockParam", s, i)
                            } else e = t.original || e, e.replace && (e = e.replace(/^\.\//g, "").replace(/^\.$/g, "")), this.opcode("pushId", t.type, e)
                        }
                        this.accept(t)
                    }
                },
                setupFullMustacheParams: function(t, e, s, i) {
                    var r = t.params;
                    return this.pushParams(r), this.opcode("pushProgram", e), this.opcode("pushProgram", s), t.hash ? this.accept(t.hash) : this.opcode("emptyHash", i), r
                },
                blockParamIndex: function(t) {
                    for (var e = 0, s = this.options.blockParams.length; s > e; e++) {
                        var i = this.options.blockParams[e],
                            r = i && p(i, t);
                        if (i && r >= 0) return [e, r]
                    }
                }
            }, l.precompile = r, l.compile = a, l
        }(e, t, n),
        d = function(t) {
            "use strict";

            function e(t, e, s) {
                if (r(t)) {
                    for (var i = [], a = 0, n = t.length; n > a; a++) i.push(e.wrap(t[a], s));
                    return i
                }
                return "boolean" == typeof t || "number" == typeof t ? t + "" : t
            }

            function s(t) {
                this.srcFile = t, this.source = []
            }
            var i, r = t.isArray;
            try {
                var a = require("source-map"),
                    n = a.SourceNode
            } catch (o) {
                n = function(t, e, s, i) {
                    this.src = "", i && this.add(i)
                }, n.prototype = {
                    add: function(t) {
                        r(t) && (t = t.join("")), this.src += t
                    },
                    prepend: function(t) {
                        r(t) && (t = t.join("")), this.src = t + this.src
                    },
                    toStringWithSourceMap: function() {
                        return {
                            code: this.toString()
                        }
                    },
                    toString: function() {
                        return this.src
                    }
                }
            }
            return s.prototype = {
                prepend: function(t, e) {
                    this.source.unshift(this.wrap(t, e))
                },
                push: function(t, e) {
                    this.source.push(this.wrap(t, e))
                },
                merge: function() {
                    var t = this.empty();
                    return this.each(function(e) {
                        t.add(["  ", e, "\n"])
                    }), t
                },
                each: function(t) {
                    for (var e = 0, s = this.source.length; s > e; e++) t(this.source[e])
                },
                empty: function(t) {
                    return t = t || this.currentLocation || {
                        start: {}
                    }, new n(t.start.line, t.start.column, this.srcFile)
                },
                wrap: function(t, s) {
                    return t instanceof n ? t : (s = s || this.currentLocation || {
                        start: {}
                    }, t = e(t, this, s), new n(s.start.line, s.start.column, this.srcFile, t))
                },
                functionCall: function(t, e, s) {
                    return s = this.generateList(s), this.wrap([t, e ? "." + e + "(" : "(", s, ")"])
                },
                quotedString: function(t) {
                    return '"' + (t + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                },
                objectLiteral: function(t) {
                    var s = [];
                    for (var i in t)
                        if (t.hasOwnProperty(i)) {
                            var r = e(t[i], this);
                            "undefined" !== r && s.push([this.quotedString(i), ":", r])
                        }
                    var a = this.generateList(s);
                    return a.prepend("{"), a.add("}"), a
                },
                generateList: function(t, s) {
                    for (var i = this.empty(s), r = 0, a = t.length; a > r; r++) r && i.add(","), i.add(e(t[r], this, s));
                    return i
                },
                generateArray: function(t, e) {
                    var s = this.generateList(t, e);
                    return s.prepend("["), s.add("]"), s
                }
            }, i = s
        }(t),
        m = function(t, e, s, i) {
            "use strict";

            function r(t) {
                this.value = t
            }

            function a() {}

            function n(t, e, s, i) {
                var r = e.popStack(),
                    a = 0,
                    n = s.length;
                for (t && n--; n > a; a++) r = e.nameLookup(r, s[a], i);
                return t ? [e.aliasable("this.strict"), "(", r, ", ", e.quotedString(s[a]), ")"] : r
            }
            var o, l = t.COMPILER_REVISION,
                c = t.REVISION_CHANGES,
                h = e,
                p = s.isArray,
                u = i;
            a.prototype = {
                nameLookup: function(t, e) {
                    return a.isValidJavaScriptVariableName(e) ? [t, ".", e] : [t, "['", e, "']"]
                },
                depthedLookup: function(t) {
                    return [this.aliasable("this.lookup"), '(depths, "', t, '")']
                },
                compilerInfo: function() {
                    var t = l,
                        e = c[t];
                    return [t, e]
                },
                appendToBuffer: function(t, e, s) {
                    return p(t) || (t = [t]), t = this.source.wrap(t, e), this.environment.isSimple ? ["return ", t, ";"] : s ? ["buffer += ", t, ";"] : (t.appendToBuffer = !0, t)
                },
                initializeBuffer: function() {
                    return this.quotedString("")
                },
                compile: function(t, e, s, i) {
                    this.environment = t, this.options = e, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !i, this.name = this.environment.name, this.isChild = !!s, this.context = s || {
                        programs: [],
                        environments: []
                    }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
                        list: []
                    }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(t, e), this.useDepths = this.useDepths || t.useDepths || this.options.compat, this.useBlockParams = this.useBlockParams || t.useBlockParams;
                    var r, a, n, o, l = t.opcodes;
                    for (n = 0, o = l.length; o > n; n++) r = l[n], this.source.currentLocation = r.loc, a = a || r.loc, this[r.opcode].apply(this, r.args);
                    if (this.source.currentLocation = a, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new h("Compile completed with content left on stack");
                    var c = this.createFunctionContext(i);
                    if (this.isChild) return c;
                    var p = {
                            compiler: this.compilerInfo(),
                            main: c
                        },
                        u = this.context.programs;
                    for (n = 0, o = u.length; o > n; n++) u[n] && (p[n] = u[n]);
                    return this.environment.usePartial && (p.usePartial = !0), this.options.data && (p.useData = !0), this.useDepths && (p.useDepths = !0), this.useBlockParams && (p.useBlockParams = !0), this.options.compat && (p.compat = !0), i ? p.compilerOptions = this.options : (p.compiler = JSON.stringify(p.compiler), this.source.currentLocation = {
                        start: {
                            line: 1,
                            column: 0
                        }
                    }, p = this.objectLiteral(p), e.srcName ? (p = p.toStringWithSourceMap({
                        file: e.destName
                    }), p.map = p.map && p.map.toString()) : p = p.toString()), p
                },
                preamble: function() {
                    this.lastContext = 0, this.source = new u(this.options.srcName)
                },
                createFunctionContext: function(t) {
                    var e = "",
                        s = this.stackVars.concat(this.registers.list);
                    s.length > 0 && (e += ", " + s.join(", "));
                    var i = 0;
                    for (var r in this.aliases) {
                        var a = this.aliases[r];
                        this.aliases.hasOwnProperty(r) && a.children && a.referenceCount > 1 && (e += ", alias" + ++i + "=" + r, a.children[0] = "alias" + i)
                    }
                    var n = ["depth0", "helpers", "partials", "data"];
                    (this.useBlockParams || this.useDepths) && n.push("blockParams"), this.useDepths && n.push("depths");
                    var o = this.mergeSource(e);
                    return t ? (n.push(o), Function.apply(this, n)) : this.source.wrap(["function(", n.join(","), ") {\n  ", o, "}"])
                },
                mergeSource: function(t) {
                    var e, s, i, r, a = this.environment.isSimple,
                        n = !this.forceBuffer;
                    return this.source.each(function(t) {
                        t.appendToBuffer ? (i ? t.prepend("  + ") : i = t, r = t) : (i && (s ? i.prepend("buffer += ") : e = !0, r.add(";"), i = r = void 0), s = !0, a || (n = !1))
                    }), n ? i ? (i.prepend("return "), r.add(";")) : s || this.source.push('return "";') : (t += ", buffer = " + (e ? "" : this.initializeBuffer()), i ? (i.prepend("return buffer + "), r.add(";")) : this.source.push("return buffer;")), t && this.source.prepend("var " + t.substring(2) + (e ? "" : ";\n")), this.source.merge()
                },
                blockValue: function(t) {
                    var e = this.aliasable("helpers.blockHelperMissing"),
                        s = [this.contextName(0)];
                    this.setupHelperArgs(t, 0, s);
                    var i = this.popStack();
                    s.splice(1, 0, i), this.push(this.source.functionCall(e, "call", s))
                },
                ambiguousBlockValue: function() {
                    var t = this.aliasable("helpers.blockHelperMissing"),
                        e = [this.contextName(0)];
                    this.setupHelperArgs("", 0, e, !0), this.flushInline();
                    var s = this.topStack();
                    e.splice(1, 0, s), this.pushSource(["if (!", this.lastHelper, ") { ", s, " = ", this.source.functionCall(t, "call", e), "}"])
                },
                appendContent: function(t) {
                    this.pendingContent ? t = this.pendingContent + t : this.pendingLocation = this.source.currentLocation, this.pendingContent = t
                },
                append: function() {
                    if (this.isInline()) this.replaceStack(function(t) {
                        return [" != null ? ", t, ' : ""']
                    }), this.pushSource(this.appendToBuffer(this.popStack()));
                    else {
                        var t = this.popStack();
                        this.pushSource(["if (", t, " != null) { ", this.appendToBuffer(t, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"])
                    }
                },
                appendEscaped: function() {
                    this.pushSource(this.appendToBuffer([this.aliasable("this.escapeExpression"), "(", this.popStack(), ")"]))
                },
                getContext: function(t) {
                    this.lastContext = t
                },
                pushContext: function() {
                    this.pushStackLiteral(this.contextName(this.lastContext))
                },
                lookupOnContext: function(t, e, s) {
                    var i = 0;
                    s || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(t[i++])), this.resolvePath("context", t, i, e)
                },
                lookupBlockParam: function(t, e) {
                    this.useBlockParams = !0, this.push(["blockParams[", t[0], "][", t[1], "]"]), this.resolvePath("context", e, 1)
                },
                lookupData: function(t, e) {
                    this.pushStackLiteral(t ? "this.data(data, " + t + ")" : "data"), this.resolvePath("data", e, 0, !0)
                },
                resolvePath: function(t, e, s, i) {
                    if (this.options.strict || this.options.assumeObjects) return void this.push(n(this.options.strict, this, e, t));
                    for (var r = e.length; r > s; s++) this.replaceStack(function(r) {
                        var a = this.nameLookup(r, e[s], t);
                        return i ? [" && ", a] : [" != null ? ", a, " : ", r]
                    })
                },
                resolvePossibleLambda: function() {
                    this.push([this.aliasable("this.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
                },
                pushStringParam: function(t, e) {
                    this.pushContext(), this.pushString(e), "SubExpression" !== e && ("string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t))
                },
                emptyHash: function(t) {
                    this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(t ? "undefined" : "{}")
                },
                pushHash: function() {
                    this.hash && this.hashes.push(this.hash), this.hash = {
                        values: [],
                        types: [],
                        contexts: [],
                        ids: []
                    }
                },
                popHash: function() {
                    var t = this.hash;
                    this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(t.ids)), this.stringParams && (this.push(this.objectLiteral(t.contexts)), this.push(this.objectLiteral(t.types))), this.push(this.objectLiteral(t.values))
                },
                pushString: function(t) {
                    this.pushStackLiteral(this.quotedString(t))
                },
                pushLiteral: function(t) {
                    this.pushStackLiteral(t)
                },
                pushProgram: function(t) {
                    this.pushStackLiteral(null != t ? this.programExpression(t) : null)
                },
                invokeHelper: function(t, e, s) {
                    var i = this.popStack(),
                        r = this.setupHelper(t, e),
                        a = s ? [r.name, " || "] : "",
                        n = ["("].concat(a, i);
                    this.options.strict || n.push(" || ", this.aliasable("helpers.helperMissing")), n.push(")"), this.push(this.source.functionCall(n, "call", r.callParams))
                },
                invokeKnownHelper: function(t, e) {
                    var s = this.setupHelper(t, e);
                    this.push(this.source.functionCall(s.name, "call", s.callParams))
                },
                invokeAmbiguous: function(t, e) {
                    this.useRegister("helper");
                    var s = this.popStack();
                    this.emptyHash();
                    var i = this.setupHelper(0, t, e),
                        r = this.lastHelper = this.nameLookup("helpers", t, "helper"),
                        a = ["(", "(helper = ", r, " || ", s, ")"];
                    this.options.strict || (a[0] = "(helper = ", a.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), this.push(["(", a, i.paramsInit ? ["),(", i.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", i.callParams), " : helper))"])
                },
                invokePartial: function(t, e, s) {
                    var i = [],
                        r = this.setupParams(e, 1, i, !1);
                    t && (e = this.popStack(), delete r.name), s && (r.indent = JSON.stringify(s)), r.helpers = "helpers", r.partials = "partials", i.unshift(t ? e : this.nameLookup("partials", e, "partial")), this.options.compat && (r.depths = "depths"), r = this.objectLiteral(r), i.push(r), this.push(this.source.functionCall("this.invokePartial", "", i))
                },
                assignToHash: function(t) {
                    var e, s, i, r = this.popStack();
                    this.trackIds && (i = this.popStack()), this.stringParams && (s = this.popStack(), e = this.popStack());
                    var a = this.hash;
                    e && (a.contexts[t] = e), s && (a.types[t] = s), i && (a.ids[t] = i), a.values[t] = r
                },
                pushId: function(t, e, s) {
                    "BlockParam" === t ? this.pushStackLiteral("blockParams[" + e[0] + "].path[" + e[1] + "]" + (s ? " + " + JSON.stringify("." + s) : "")) : "PathExpression" === t ? this.pushString(e) : this.pushStackLiteral("SubExpression" === t ? "true" : "null")
                },
                compiler: a,
                compileChildren: function(t, e) {
                    for (var s, i, r = t.children, a = 0, n = r.length; n > a; a++) {
                        s = r[a], i = new this.compiler;
                        var o = this.matchExistingProgram(s);
                        null == o ? (this.context.programs.push(""), o = this.context.programs.length, s.index = o, s.name = "program" + o, this.context.programs[o] = i.compile(s, e, this.context, !this.precompile), this.context.environments[o] = s, this.useDepths = this.useDepths || i.useDepths, this.useBlockParams = this.useBlockParams || i.useBlockParams) : (s.index = o, s.name = "program" + o, this.useDepths = this.useDepths || s.useDepths, this.useBlockParams = this.useBlockParams || s.useBlockParams)
                    }
                },
                matchExistingProgram: function(t) {
                    for (var e = 0, s = this.context.environments.length; s > e; e++) {
                        var i = this.context.environments[e];
                        if (i && i.equals(t)) return e
                    }
                },
                programExpression: function(t) {
                    var e = this.environment.children[t],
                        s = [e.index, "data", e.blockParams];
                    return (this.useBlockParams || this.useDepths) && s.push("blockParams"), this.useDepths && s.push("depths"), "this.program(" + s.join(", ") + ")"
                },
                useRegister: function(t) {
                    this.registers[t] || (this.registers[t] = !0, this.registers.list.push(t))
                },
                push: function(t) {
                    return t instanceof r || (t = this.source.wrap(t)), this.inlineStack.push(t), t
                },
                pushStackLiteral: function(t) {
                    this.push(new r(t))
                },
                pushSource: function(t) {
                    this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), t && this.source.push(t)
                },
                replaceStack: function(t) {
                    var e, s, i, a = ["("];
                    if (!this.isInline()) throw new h("replaceStack on non-inline");
                    var n = this.popStack(!0);
                    if (n instanceof r) e = [n.value], a = ["(", e], i = !0;
                    else {
                        s = !0;
                        var o = this.incrStack();
                        a = ["((", this.push(o), " = ", n, ")"], e = this.topStack()
                    }
                    var l = t.call(this, e);
                    i || this.popStack(), s && this.stackSlot--, this.push(a.concat(l, ")"))
                },
                incrStack: function() {
                    return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                },
                topStackName: function() {
                    return "stack" + this.stackSlot
                },
                flushInline: function() {
                    var t = this.inlineStack;
                    this.inlineStack = [];
                    for (var e = 0, s = t.length; s > e; e++) {
                        var i = t[e];
                        if (i instanceof r) this.compileStack.push(i);
                        else {
                            var a = this.incrStack();
                            this.pushSource([a, " = ", i, ";"]), this.compileStack.push(a)
                        }
                    }
                },
                isInline: function() {
                    return this.inlineStack.length
                },
                popStack: function(t) {
                    var e = this.isInline(),
                        s = (e ? this.inlineStack : this.compileStack).pop();
                    if (!t && s instanceof r) return s.value;
                    if (!e) {
                        if (!this.stackSlot) throw new h("Invalid stack pop");
                        this.stackSlot--
                    }
                    return s
                },
                topStack: function() {
                    var t = this.isInline() ? this.inlineStack : this.compileStack,
                        e = t[t.length - 1];
                    return e instanceof r ? e.value : e
                },
                contextName: function(t) {
                    return this.useDepths && t ? "depths[" + t + "]" : "depth" + t
                },
                quotedString: function(t) {
                    return this.source.quotedString(t)
                },
                objectLiteral: function(t) {
                    return this.source.objectLiteral(t)
                },
                aliasable: function(t) {
                    var e = this.aliases[t];
                    return e ? (e.referenceCount++, e) : (e = this.aliases[t] = this.source.wrap(t), e.aliasable = !0, e.referenceCount = 1, e)
                },
                setupHelper: function(t, e, s) {
                    var i = [],
                        r = this.setupHelperArgs(e, t, i, s),
                        a = this.nameLookup("helpers", e, "helper");
                    return {
                        params: i,
                        paramsInit: r,
                        name: a,
                        callParams: [this.contextName(0)].concat(i)
                    }
                },
                setupParams: function(t, e, s) {
                    var i, r = {},
                        a = [],
                        n = [],
                        o = [];
                    r.name = this.quotedString(t), r.hash = this.popStack(), this.trackIds && (r.hashIds = this.popStack()), this.stringParams && (r.hashTypes = this.popStack(), r.hashContexts = this.popStack());
                    var l = this.popStack(),
                        c = this.popStack();
                    (c || l) && (r.fn = c || "this.noop", r.inverse = l || "this.noop");
                    for (var h = e; h--;) i = this.popStack(), s[h] = i, this.trackIds && (o[h] = this.popStack()), this.stringParams && (n[h] = this.popStack(), a[h] = this.popStack());
                    return this.trackIds && (r.ids = this.source.generateArray(o)), this.stringParams && (r.types = this.source.generateArray(n), r.contexts = this.source.generateArray(a)), this.options.data && (r.data = "data"), this.useBlockParams && (r.blockParams = "blockParams"), r
                },
                setupHelperArgs: function(t, e, s, i) {
                    var r = this.setupParams(t, e, s, !0);
                    return r = this.objectLiteral(r), i ? (this.useRegister("options"), s.push("options"), ["options=", r]) : (s.push(r), "")
                }
            };
            for (var d = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), m = a.RESERVED_WORDS = {}, f = 0, v = d.length; v > f; f++) m[d[f]] = !0;
            return a.isValidJavaScriptVariableName = function(t) {
                return !a.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)
            }, o = a
        }(s, e, t, d),
        f = function(t, e, s, i, r) {
            "use strict";
            var a, n = t,
                o = e,
                l = s.parser,
                c = s.parse,
                h = i.Compiler,
                p = i.compile,
                u = i.precompile,
                d = r,
                m = n.create,
                f = function() {
                    var t = m();
                    return t.compile = function(e, s) {
                        return p(e, s, t)
                    }, t.precompile = function(e, s) {
                        return u(e, s, t)
                    }, t.AST = o, t.Compiler = h, t.JavaScriptCompiler = d, t.Parser = l, t.parse = c, t
                };
            n = f(), n.create = f;
            var v = "undefined" != typeof global ? global : window,
                g = v.Handlebars;
            return n.noConflict = function() {
                v.Handlebars === n && (v.Handlebars = g)
            }, n["default"] = n, a = n
        }(a, n, p, u, m);
    return f
}),
/*
Â© Copyright 2015 Danny Vassallo
*/
$(function() {
        function t() {
            FB.ui({
                method: "feed",
                name: fbShareTitle,
                link: fbShareLink,
                picture: fbImageUrl,
                caption: fbSubText,
                description: fbDialog
            }, function(t) {
                if (t && t.post_id) {
                    var e = $(".fb-check").length,
                        s = $(".tw-check").length;
                    $(".fb-check").prop("checked", !0), $(".fbclick").hide(), $(".right").css({
                        width: "100%",
                        "margin-left": "0"
                    }), $(".form-error").html(""), shareCount += 1, 2 == shareCount ? $(".check-wrap").removeClass("hider") : e > 0 && 0 == s && $(".check-wrap").removeClass("hider")
                } else $(".fb-check").prop("checked", !1)
            })
        }
        $(".next").on("click", function() {
                var t = $(".email-address").val(),
                    e = t.indexOf("@"),
                    s = t.lastIndexOf(".");
                var tourdate = $('#e1').val();
				$("#entry_1392261638").val(tourdate);    
                $(".first-name").val().length < 1 ? $(".form-error").html("Please enter your first name.") : $(".last-name").val().length < 1 ? $(".form-error").html("Please enter your last name.") : 1 > e || e + 2 > s || s + 2 >= t.length ? $(".form-error").html("Please enter a valid email address.") :  $("#entry_1392261638").val().length < 1 ? $(".form-error").html("Please select a tour date.") : $(".rules").prop("checked") ? ($("#shares").removeClass("hider"), $(".goog-inline-block").removeClass("hider"), $("#first-section").addClass("hider"), $(".form-error").html("")) : $(".form-error").html("Please agree to the rules.")
            }), $(".fbclick").on("click", function() {
                t()
            }), $("#hidden_iframe").load(function() {
                submitted && $(".ss-form").html("<h2 class='thanks'>" + thankYouMsg + "</h2>")
            }), $("#ss-form").on("keyup keypress", function(t) {
                var e = t.keyCode || t.which;
                return 13 == e ? (t.preventDefault(), !1) : void 0
            }), window.fbAsyncInit = function() {
                FB.init({
                    appId: fbAppId,
                    xfbml: !0,
                    version: "v2.3"
                })
            },
            function(t, e, s) {
                var i, r = t.getElementsByTagName(e)[0];
                t.getElementById(s) || (i = t.createElement(e), i.id = s, i.src = "//connect.facebook.net/en_US/sdk.js", r.parentNode.insertBefore(i, r))
            }(document, "script", "facebook-jssdk"), $.getScript("http://platform.twitter.com/widgets.js", function() {
                function t(t) {
                    if (t) {
                        var e = $(".fb-check").length,
                            s = $(".tw-check").length;
                        $(".tw-check").prop("checked", !0), $(".right").hide(), $(".left").css({
                            width: "100%"
                        }), $(".form-error").html(""), shareCount += 1, 2 == shareCount ? $(".check-wrap").removeClass("hider") : s > 0 && 0 == e && ($(".check-wrap").removeClass("hider"), $(".tw-wrap").hide())
                    }
                }
                twttr.events.bind("tweet", t)
            })
    }),
    function(t) {
        var e = '<script>var fbAppId="{{fbAppId}}"; var fbShareTitle="{{fbShareTitle}}"; var fbShareLink= "{{fbShareLink}}"; var fbImageUrl= "{{fbImageUrl}}"; var fbSubText= "{{fbSubText}}"; var fbDialog= "{{fbDialog}}"; var thankYouMsg= "{{thankYouMsg}}"; var submitted=false;var shareCount=0;</script><div id="fb-root"></div><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe><div id="contest-wrapper"> <p class="form-error"><p> <div class="ss-form"> <form action="https://docs.google.com/a/trendsettermarketing.net/forms/d/{{formActionUrlId}}/formResponse" method="POST" id="ss-form" target="hidden_iframe" onsubmit="validateShare();"> <ol role="list" class="ss-question-list" style="padding-left: 0"> <section id="first-section"> <div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-text"> <div class="ss-form-entry"> <input type="text" name="entry.{{firstNameId}}" value="" class="ss-q-short first-name" id="entry_{{firstNameId}}" dir="auto" aria-label="Input 1 " title="" placeholder="First Name"> </div></div></div><div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-text"> <div class="ss-form-entry"> <input type="text" name="entry.{{lastNameId}}" value="" class="ss-q-short last-name" id="entry_{{lastNameId}}" dir="auto" aria-label="Input 2 " title="" placeholder="Last Name"> </div></div></div><div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-text"> <div class="ss-form-entry"> <input type="text" name="entry.{{emailId}}" value="" class="ss-q-short email-address" id="entry_{{emailId}}" dir="auto" aria-label="Input 3 " title="" placeholder="Email Address"> </div></div></div><div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-text"> <div class="ss-form-entry"> <input type="text" name="entry.1392261638" value="" class="ss-q-short location" id="entry_1392261638" dir="auto" aria-label="Input 4" title="" placeholder="Location"> </div></div></div><section id="legal"> <div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-checkbox"> <div class="ss-form-entry"> <ul class="ss-choices" role="group" aria-label="Opt In "> <li class="ss-choice-item"> <label> <span class="ss-choice-item-control goog-inline-block"> <input type="checkbox" name="entry.{{optInId}}" value="I agree to receive emails" id="group_{{optInId}}_1" role="checkbox" class="ss-q-checkbox" checked="true"> </span> <span class="ss-choice-label">I agree to receive emails from {{contactName}}.</span> </label> </li></ul> </div></div></div><div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-checkbox"> <div class="ss-form-entry"> <ul class="ss-choices" role="group" aria-label="Agree to Rules "> <li class="ss-choice-item"> <label> <span class="ss-choice-item-control goog-inline-block"> <input type="checkbox" name="entry.{{rulesId}}" value="I agree to the rules" id="group_{{rulesId}}_1" role="checkbox" class="ss-q-checkbox rules"> </span> <span class="ss-choice-label">I agree to the <a href="{{rulesLink}}" target="_blank">rules</a>.</span> </label> </li></ul> </div></div></div></section> <div class="contest-btn next"> NEXT→ </div></section> <section id="shares" class="hider"> <h4 class="sharehead">Share this page to complete your entry</h4> <div class="btn-wrap fbclick left"> <div class="btn btn-facebook fbbtn"> </div><p>Share</p></div><div class="ss-form-question errorbox-good hider" role="listitem"> <div dir="ltr" class="ss-item ss-checkbox"> <div class="ss-form-entry"> <ul class="ss-choices" role="group" aria-label="Facebook Share "> <li class="ss-choice-item"> <label> <span class="ss-choice-item-control goog-inline-block"> <input type="checkbox" name="entry.{{fbCheckId}}" value="True" id="group_{{fbCheckId}}_1" role="checkbox" class="ss-q-checkbox fb-check"> </span> <span class="ss-choice-label">True</span> </label> </li></ul> </div></div></div><div class="btn-wrap right"> <a href="https://twitter.com/intent/tweet?text={{tweet}}{{twitterUser}};url={{twitterUrl}};hashtags={{twitterHashtag}};" title="Share on Twitter" target="_blank" class="btn btn-twitter"> <div class="twbtn"> </div><p>Tweet</p></a> </div><div class="ss-form-question errorbox-good hider" role="listitem"> <div dir="ltr" class="ss-item ss-checkbox"> <div class="ss-form-entry"> <label class="ss-q-item-label" for="entry_1030731654"> <div class="ss-q-title">Twitter Share</div></label> <ul class="ss-choices" role="group" aria-label="Twitter Share "> <li class="ss-choice-item"> <label> <span class="ss-choice-item-control goog-inline-block"> <input type="checkbox" name="entry.{{twitterCheckId}}" value="True" id="group_{{twitterCheckId}}_1" role="checkbox" class="ss-q-checkbox tw-check"> </span> <span class="ss-choice-label">True</span> </label> </li></ul> </div></div></div><div class="check-wrap hider"> <img class="checkmark" src="https://s3-us-west-2.amazonaws.com/sharecontestjs/check-mark.png"> <p>You may now submit your entry.</p></div></br> <small>*Entries will not count unless both shares are completed.</small> </section> <input type="hidden" name="draftResponse" value="[,,&quot;4687543796847312923&quot;]"> <input type="hidden" name="pageHistory" value="0"> <input type="hidden" name="fbzx" value="4687543796847312923"> <div class="ss-item ss-navigate"> <table id="navigation-table"> <tbody> <tr> <td class="ss-form-entry goog-inline-block hider" id="navigation-buttons" dir="ltr"> <input type="submit" name="submit" value="Submit" id="ss-submit" class="jfk-button jfk-button-action contest-btn"> </td></tr></tbody> </table> </div></ol> </form> </div></div>',
            s = Handlebars.compile(e);
        t.fn.shareContest = function(e) {
            var i = s(e.context);
            t(this).html(i)
        }
    }(window.jQuery),
    function(t) {
        var e = '<script>var fbAppId="{{fbAppId}}"; var fbShareTitle="{{fbShareTitle}}"; var fbShareLink= "{{fbShareLink}}"; var fbImageUrl= "{{fbImageUrl}}"; var fbSubText= "{{fbSubText}}"; var fbDialog= "{{fbDialog}}"; var thankYouMsg= "{{thankYouMsg}}"; var submitted=false;var shareCount=0;</script><div id="fb-root"></div><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe><div id="contest-wrapper"> <p class="form-error"><p> <div class="ss-form"> <form action="https://docs.google.com/a/trendsettermarketing.net/forms/d/{{formActionUrlId}}/formResponse" method="POST" id="ss-form" target="hidden_iframe" onsubmit="validateShare();"> <ol role="list" class="ss-question-list" style="padding-left: 0"> <section id="first-section"> <div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-text"> <div class="ss-form-entry"> <input type="text" name="entry.{{firstNameId}}" value="" class="ss-q-short first-name" id="entry_{{firstNameId}}" dir="auto" aria-label="Input 1 " title="" placeholder="First Name"> </div></div></div><div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-text"> <div class="ss-form-entry"> <input type="text" name="entry.{{lastNameId}}" value="" class="ss-q-short last-name" id="entry_{{lastNameId}}" dir="auto" aria-label="Input 2 " title="" placeholder="Last Name"> </div></div></div><div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-text"> <div class="ss-form-entry"> <input type="text" name="entry.{{emailId}}" value="" class="ss-q-short email-address" id="entry_{{emailId}}" dir="auto" aria-label="Input 3 " title="" placeholder="Email Address"> </div></div></div><div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-text"> <div class="ss-form-entry"> <input type="text" name="entry.1392261638" value="" class="ss-q-short location" id="entry_1392261638" dir="auto" aria-label="Input 4" title="" placeholder="Location"> </div></div></div><section id="legal"> <div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-checkbox"> <div class="ss-form-entry"> <ul class="ss-choices" role="group" aria-label="Opt In "> <li class="ss-choice-item"> <label> <span class="ss-choice-item-control goog-inline-block"> <input type="checkbox" name="entry.{{optInId}}" value="I agree to receive emails" id="group_{{optInId}}_1" role="checkbox" class="ss-q-checkbox" checked="true"> </span> <span class="ss-choice-label">I agree to receive emails from {{contactName}}.</span> </label> </li></ul> </div></div></div><div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-checkbox"> <div class="ss-form-entry"> <ul class="ss-choices" role="group" aria-label="Agree to Rules "> <li class="ss-choice-item"> <label> <span class="ss-choice-item-control goog-inline-block"> <input type="checkbox" name="entry.{{rulesId}}" value="I agree to the rules" id="group_{{rulesId}}_1" role="checkbox" class="ss-q-checkbox rules"> </span> <span class="ss-choice-label">I agree to the <a href="{{rulesLink}}" target="_blank">rules</a>.</span> </label> </li></ul> </div></div></div></section> <div class="contest-btn next"> NEXT→ </div></section> <section id="shares" class="hider"> <h4 class="sharehead">Share this page to complete your entry</h4> <div class="btn-wrap fbclick"> <div class="btn btn-facebook fbbtn"> </div><p>Share</p></div><div class="ss-form-question errorbox-good hider" role="listitem"> <div dir="ltr" class="ss-item ss-checkbox"> <div class="ss-form-entry"> <ul class="ss-choices" role="group" aria-label="Facebook Share "> <li class="ss-choice-item"> <label> <span class="ss-choice-item-control goog-inline-block"> <input type="checkbox" name="entry.{{fbCheckId}}" value="True" id="group_{{fbCheckId}}_1" role="checkbox" class="ss-q-checkbox fb-check"> </span> <span class="ss-choice-label">True</span> </label> </li></ul> </div></div></div><div class="check-wrap hider"> <img class="checkmark" src="https://s3-us-west-2.amazonaws.com/sharecontestjs/check-mark.png"> <p>You may now submit your entry.</p></div></br> <small>*Entries will not count unless the share is completed.</small> </section> <input type="hidden" name="draftResponse" value="[,,&quot;4687543796847312923&quot;]"> <input type="hidden" name="pageHistory" value="0"> <input type="hidden" name="fbzx" value="4687543796847312923"> <div class="ss-item ss-navigate"> <table id="navigation-table"> <tbody> <tr> <td class="ss-form-entry goog-inline-block hider" id="navigation-buttons" dir="ltr"> <input type="submit" name="submit" value="Submit" id="ss-submit" class="jfk-button jfk-button-action contest-btn"> </td></tr></tbody> </table> </div></ol> </form> </div></div>',
            s = Handlebars.compile(e);
        t.fn.shareContestFB = function(e) {
            var i = s(e.context);
            t(this).html(i)
        }
    }(window.jQuery),
    function(t) {
        var e = '<script>var fbAppId="{{fbAppId}}"; var fbShareTitle="{{fbShareTitle}}"; var fbShareLink= "{{fbShareLink}}"; var fbImageUrl= "{{fbImageUrl}}"; var fbSubText= "{{fbSubText}}"; var fbDialog= "{{fbDialog}}"; var thankYouMsg= "{{thankYouMsg}}"; var submitted=false;var shareCount=0;</script><div id="fb-root"></div><iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe><div id="contest-wrapper"> <p class="form-error"><p> <div class="ss-form"> <form action="https://docs.google.com/a/trendsettermarketing.net/forms/d/{{formActionUrlId}}/formResponse" method="POST" id="ss-form" target="hidden_iframe" onsubmit="validateShare();"> <ol role="list" class="ss-question-list" style="padding-left: 0"> <section id="first-section"> <div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-text"> <div class="ss-form-entry"> <input type="text" name="entry.{{firstNameId}}" value="" class="ss-q-short first-name" id="entry_{{firstNameId}}" dir="auto" aria-label="Input 1 " title="" placeholder="First Name"> </div></div></div><div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-text"> <div class="ss-form-entry"> <input type="text" name="entry.{{lastNameId}}" value="" class="ss-q-short last-name" id="entry_{{lastNameId}}" dir="auto" aria-label="Input 2 " title="" placeholder="Last Name"> </div></div></div><div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-text"> <div class="ss-form-entry"> <input type="text" name="entry.{{emailId}}" value="" class="ss-q-short email-address" id="entry_{{emailId}}" dir="auto" aria-label="Input 3 " title="" placeholder="Email Address"> </div></div></div><section id="legal"> <div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-checkbox"> <div class="ss-form-entry"> <ul class="ss-choices" role="group" aria-label="Opt In "> <li class="ss-choice-item"> <label> <span class="ss-choice-item-control goog-inline-block"> <input type="checkbox" name="entry.{{optInId}}" value="I agree to receive emails" id="group_{{optInId}}_1" role="checkbox" class="ss-q-checkbox" checked="true"> </span> <span class="ss-choice-label">I agree to receive emails from {{contactName}}.</span> </label> </li></ul> </div></div></div><div class="ss-form-question errorbox-good" role="listitem"> <div dir="ltr" class="ss-item ss-checkbox"> <div class="ss-form-entry"> <ul class="ss-choices" role="group" aria-label="Agree to Rules "> <li class="ss-choice-item"> <label> <span class="ss-choice-item-control goog-inline-block"> <input type="checkbox" name="entry.{{rulesId}}" value="I agree to the rules" id="group_{{rulesId}}_1" role="checkbox" class="ss-q-checkbox rules"> </span> <span class="ss-choice-label">I agree to the <a href="{{rulesLink}}" target="_blank">rules</a>.</span> </label> </li></ul> </div></div></div></section> <div class="contest-btn next"> NEXT→ </div></section> <section id="shares" class="hider"> <h4 class="sharehead">Share this page to complete your entry</h4><div class="btn-wrap tw-wrap"> <a href="https://twitter.com/intent/tweet?text={{tweet}}{{twitterUser}};url={{twitterUrl}};hashtags={{twitterHashtag}};" title="Share on Twitter" target="_blank" class="btn btn-twitter"> <div class="twbtn"> </div><p>Tweet</p></a> </div><div class="ss-form-question errorbox-good hider" role="listitem"> <div dir="ltr" class="ss-item ss-checkbox"> <div class="ss-form-entry"> <label class="ss-q-item-label" for="entry_1030731654"> <div class="ss-q-title">Twitter Share</div></label> <ul class="ss-choices" role="group" aria-label="Twitter Share "> <li class="ss-choice-item"> <label> <span class="ss-choice-item-control goog-inline-block"> <input type="checkbox" name="entry.{{twitterCheckId}}" value="True" id="group_{{twitterCheckId}}_1" role="checkbox" class="ss-q-checkbox tw-check"> </span> <span class="ss-choice-label">True</span> </label> </li></ul> </div></div></div><div class="check-wrap hider"> <img class="checkmark" src="https://s3-us-west-2.amazonaws.com/sharecontestjs/check-mark.png"> <p>You may now submit your entry.</p></div></br> <small>*Entries will not count unless the tweet is completed.</small> </section> <input type="hidden" name="draftResponse" value="[,,&quot;4687543796847312923&quot;]"> <input type="hidden" name="pageHistory" value="0"> <input type="hidden" name="fbzx" value="4687543796847312923"> <div class="ss-item ss-navigate"> <table id="navigation-table"> <tbody> <tr> <td class="ss-form-entry goog-inline-block hider" id="navigation-buttons" dir="ltr"> <input type="submit" name="submit" value="Submit" id="ss-submit" class="jfk-button jfk-button-action contest-btn"> </td></tr></tbody> </table> </div></ol> </form> </div></div>',
            s = Handlebars.compile(e);
        t.fn.shareContestTW = function(e) {
            var i = s(e.context);
            t(this).html(i)
        }
    }(window.jQuery);