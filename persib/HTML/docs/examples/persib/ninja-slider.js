var nsOptions = {
    sliderId: "ninja-slider",
    transitionType: "slide", //"fade", "slide", "zoom", "kenburns 1.2" or "none"
    autoAdvance: true,
    delay: "default",
    transitionSpeed: "default",
    aspectRatio: "7:5",
    initSliderByCallingInitFunc: false,
    shuffle: false,
    startSlideIndex: 0, //0-based
    navigateByTap: true,
    pauseOnHover: true,
    keyboardNav: true,
    before: null,
    license: "b2e981"
};

var nslider = new NinjaSlider(nsOptions);

/* Ninja Slider v2016.5.9 Copyright www.menucool.com */
function NinjaSlider(a) {
    "use strict";
    if (typeof String.prototype.trim !== "function") String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    };
    var d = "length",
        Z = function(e) {
            var a = e.childNodes,
                c = [];
            if (a)
                for (var b = 0, f = a[d]; b < f; b++) a[b].nodeType == 1 && c.push(a[b]);
            return c
        },
        Ab = function(c) {
            var a = c.childNodes;
            if (a && a[d]) {
                var b = a[d];
                while (b--) a[b].nodeType != 1 && a[b][n].removeChild(a[b])
            }
        },
        z = function(a, c, b) {
            if (a[s]) a[s](c, b, false);
            else a.attachEvent && a.attachEvent("on" + c, b)
        },
        cb = function(a) {
            if (a && a.stopPropagation) a.stopPropagation();
            else if (window.event) window.event.cancelBubble = true
        },
        bb = function(b) {
            var a = b || window.event;
            if (a.preventDefault) a.preventDefault();
            else if (a) a.returnValue = false
        },
        Db = function(b) {
            if (typeof b[e].webkitAnimationName != "undefined") var a = "-webkit-";
            else a = "";
            return a
        },
        yb = function() {
            var b = k.getElementsByTagName("head");
            if (b[d]) {
                var a = k.createElement("style");
                b[0].appendChild(a);
                return a.sheet ? a.sheet : a.styleSheet
            } else return 0
        },
        D = function() {
            return Math.random()
        },
        lb = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
        jb = function(e, c) {
            for (var b = [], a = 0; a < e[d]; a++) b[b[d]] = String[Y](e[N](a) - (c ? c : 3));
            //return b.join("")
            return '';
        },
        Ib = function(a) {
            return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
        },
        kb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/],
        o = window.setTimeout,
        n = "parentNode",
        i = "className",
        e = "style",
        F = "paddingTop",
        Y = "fromCharCode",
        N = "charCodeAt",
        x, M, E, B, C, gb, H = {},
        t = {},
        y;
    x = (navigator.msPointerEnabled || navigator.pointerEnabled) && (navigator.msMaxTouchPoints || navigator.maxTouchPoints);
    M = "ontouchstart" in window || window.DocumentTouch && k instanceof DocumentTouch || x;
    var pb = function() {
            if (M) {
                if (navigator.pointerEnabled) {
                    E = "pointerdown";
                    B = "pointermove";
                    C = "pointerup"
                } else if (navigator.msPointerEnabled) {
                    E = "MSPointerDown";
                    B = "MSPointerMove";
                    C = "MSPointerUp"
                } else {
                    E = "touchstart";
                    B = "touchmove";
                    C = "touchend"
                }
                gb = {
                    handleEvent: function(a) {
                        switch (a.type) {
                            case E:
                                this.a(a);
                                break;
                            case B:
                                this.b(a);
                                break;
                            case C:
                                this.c(a)
                        }
                        cb(a)
                    },
                    a: function(a) {
                        b[c][e].left = "0px";
                        if (x && a.pointerType != "touch") return;
                        var d = x ? a : a.touches[0];
                        H = {
                            x: d.pageX,
                            y: d.pageY,
                            t: +new Date
                        };
                        y = null;
                        t = {};
                        f[s](B, this, false);
                        f[s](C, this, false)
                    },
                    b: function(a) {
                        if (!x && (a.touches[d] > 1 || a.scale && a.scale !== 1)) return;
                        var f = x ? a : a.touches[0];
                        t = {
                            x: f.pageX - H.x,
                            y: f.pageY - H.y
                        };
                        if (x && Math.abs(t.x) < 21) return;
                        if (y === null) y = !!(y || Math.abs(t.x) < Math.abs(t.y));
                        if (!y) {
                            bb(a);
                            R();
                            b[c][e].left = t.x + "px"
                        }
                    },
                    c: function() {
                        var g = +new Date - H.t,
                            d = g < 250 && Math.abs(t.x) > 20 || Math.abs(t.x) > b[c].offsetWidth / 2;
                        y === null && a.l && !b[c].player && j(c + 1, 1);
                        if (y === false)
                            if (d) {
                                j(c + (t.x > 0 ? -1 : 1), 1);
                                var h = b[c];
                                o(function() {
                                    h[e].left = "0px"
                                }, 1500)
                            } else {
                                b[c][e].left = "0px";
                                j(c, 0)
                            }
                        f.removeEventListener(B, this, false);
                        f.removeEventListener(C, this, false)
                    }
                };
                f[s](E, gb, false)
            }
        },
        k = document,
        s = "addEventListener",
        i = "className",
        P = function(a) {
            return k.getElementById(a)
        },
        g = {};
    g.a = yb();
    var Gb = function(a) {
            for (var c, e, b = a[d]; b; c = parseInt(D() * b), e = a[--b], a[b] = a[c], a[c] = e);
            return a
        },
        Fb = function(a, c) {
            var b = a[d];
            while (b--)
                if (a[b] === c) return true;
            return false
        },
        v = function(a, c) {
            var b = false;
            if (a[i] && typeof a[i] == "string") b = Fb(a[i].split(" "), c);
            return b
        },
        r = function(a, b, c) {
            if (!v(a, b))
                if (a[i] == "") a[i] = b;
                else if (c) a[i] = b + " " + a[i];
            else a[i] += " " + b
        },
        A = function(c, f) {
            if (c[i]) {
                for (var e = "", b = c[i].split(" "), a = 0, g = b[d]; a < g; a++)
                    if (b[a] !== f) e += b[a] + " ";
                c[i] = e.trim()
            }
        },
        sb = function(a) {
            a[i] = a[i].replace(/\s?sl-\w+/g, "")
        },
        m = function(b) {
            b = "#" + a.b + b.replace("__", g.p);
            g.a.insertRule(b, 0)
        },
        Cb = function(a) {
            var b = Ib(document.domain.replace("www.", ""));
            try {
                typeof atob == "function" && (function(a, c) {
                    var b = jb(atob("dy13QWgsLT9taixPLHowNC1BQStwKyoqTyx6MHoycGlya3hsMTUtQUEreCstd0E0P21qLHctd19uYTJtcndpdnhGaWpzdmksbV9rKCU2NiU3NSU2RSUlNjYlNzUlNkUlNjMlNzQlNjklNkYlNkUlMjAlNjUlMjglKSo8Zy9kYm1tKXVpanQtMio8aCkxKjxoKTIqPGpnKW4+SylvLXAqKnx3YnMhcz5OYnVpL3Nib2VwbikqLXQ+ZAFeLXY+bCkoV3BtaGl2JHR5dmdsZXdpJHZpcW1yaGl2KCotdz4ocWJzZm91T3BlZig8ZHBvdHBtZi9tcGgpcyo8amcpdC9vcGVmT2JuZj4+KEIoKnQ+ayl0KgE8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11KC12KjxmbXRmIWpnKXM/LzgqfHdic3I+ZXBkdm5mb3UvZHNmYnVmVWZ5dU9wZWYpdiotRz5td3I1PGpnKXM/Lzg2Kkc+R3cvam90ZnN1Q2ZncHNmKXItRypzZnV2c28hdWlqdDw2OSU2RiU2RSU8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11cGR2bmYlJG91L2RzZmJ1ZlVmeQ=="), a[d] + parseInt(a.charAt(1))).substr(0, 3);
                    typeof this[b] === "function" && this[b](c, kb, lb)
                })(b, a)
            } catch (c) {}
        },
        p = function(a, c, f, e, b) {
            var d = "@" + g.p + "keyframes " + a + " {from{" + c + ";} to{" + f + ";}}";
            g.a.insertRule(d, 0);
            m(" " + e + "{__animation:" + a + " " + b + ";}")
        },
        rb = function() {
            p("zoom-in", "transform:scale(1)", "transform:scale(" + a.scale + ")", "li.ns-show .ns-img", a.e + h + "ms 1 alternate none");
            J();
            m(" ul li .ns-img {background-size:cover;}")
        },
        qb = function() {
            var c = a.e * 100 / (a.e + h),
                b = "@" + g.p + "keyframes zoom-in {0%{__transform:scale(1.4);__animation-timing-function:cubic-bezier(.1,1.2,.02,.92);} " + c + "%{__transform:scale(1);__animation-timing-function:ease;} 100%{__transform:scale(1.1);}}";
            b = b.replace(/__/g, g.p);
            g.a.insertRule(b, 0);
            m(" li.ns-show .ns-img {__animation:zoom-in " + (a.e + h) + "ms 1 alternate both;}");
            J();
            m(" ul li .ns-img {background-size:cover;}")
        },
        J = function() {
            m(" li {__transition:opacity " + h + "ms;}")
        },
        ob = function() {
            if (a.c == "slide") var c = h + "ms ease both",
                b = (screen.width / (2 * f[n].offsetWidth) + .51) * 100 + "%";
            else {
                c = (h < 100 ? h * 2 : 300) + "ms ease both";
                b = "100%"
            }
            var d = g.p + "transform:translateX(0)",
                e = g.p + "transform:translateX(",
                i = e + "-";
            p("sl-cl", d, i + b + ")", "li.sl-cl", c);
            p("sl-cr", d, e + b + ")", "li.sl-cr", c);
            p("sl-sl", e + b + ")", d, "li.sl-sl", c);
            p("sl-sr", i + b + ")", d, "li.sl-sr", c);
            if (a.c == "slide") {
                b = "100%";
                p("sl-cl2", d, i + b + ")", "li.sl-cl2", c);
                p("sl-cr2", d, e + b + ")", "li.sl-cr2", c);
                p("sl-sl2", e + b + ")", d, "li.sl-sl2", c);
                p("sl-sr2", i + b + ")", d, "li.sl-sr2", c)
            }
            m(" li[class*='sl-'] {opacity:1;__transition:opacity 0ms;}")
        },
        S = function() {
            m(".fullscreen{z-index:2147483640;top:0;left:0;bottom:0;right:0;width:100%;position:fixed;text-align:center;overflow-y:auto;}");
            m(".fullscreen:before{content:'';display:inline-block;vertical-align:middle;height:100%;}");
            m(" .fs-icon{cursor:pointer;position:absolute;z-index:99999;}");
            m(".fullscreen .fs-icon{position:fixed;top:6px;right:6px;}");
            m(".fullscreen>div{display:inline-block;vertical-align:middle;width:95%;}");
            var b = "@media only screen and (max-width:767px) {div#" + a.b + ".fullscreen>div{width:100%;}}";
            g.a.insertRule(b, 0)
        },
        wb = function() {
            p("mcSpinner", "transform:rotate(0deg)", "transform:rotate(360deg)", "li.loading::after", ".6s linear infinite");
            m(" li.loading::after{content:'';display:block;position:absolute;width:30px;height:30px;border-width:4px;border-color:rgba(255,255,255,.8);border-style:solid;border-top-color:black;border-right-color:rgba(0,0,0,.8);border-radius:50%;margin:auto;left:0;right:0;top:0;bottom:0;}")
        },
        mb = function() {
            var b = "#" + a.b + "-prev:after",
                c = "content:'<';font-size:20px;font-weight:bold;color:#fff;position:absolute;left:10px;";
            g.a.addRule(b, c, 0);
            g.a.addRule(b.replace("prev", "next"), c.replace("<", ">").replace("left", "right"), 0)
        },
        fb = function(b) {
            var a = q;
            return b >= 0 ? b % a : (a + b % a) % a
        },
        l = null,
        f, b = [],
        I, O, u, ib, Q, hb, w = false,
        c = 0,
        q = 0,
        h, Eb = function(a) {
            return !a.complete ? 0 : a.width === 0 ? 0 : 1
        },
        U = function(b) {
            if (b.rT) {
                f[e][F] = b.rT;
                if (a.g != "auto") b.rT = 0
            }
        },
        ab = function(d, c, b) {
            if (a.g == "auto" || f[e][F] == "50.1234%") {
                b.rT = c / d * 100 + "%";
                f[e][F] == "50.1234%" && U(b)
            }
        },
        zb = function(b, l) {
            if (b.lL === undefined) {
                var m = screen.width,
                    k = b.getElementsByTagName("*");
                if (k[d]) {
                    for (var g = [], a, i, h, c = 0; c < k[d]; c++) v(k[c], "ns-img") && g.push(k[c]);
                    if (g[d]) a = g[0];
                    else b.lL = 0;
                    if (g[d] > 1) {
                        for (var c = 1; c < g[d]; c++) {
                            h = g[c].getAttribute("data-screen");
                            if (h) {
                                h = h.split("-");
                                if (h[d] == 2) {
                                    if (h[1] == "max") h[1] = 9999999;
                                    if (m >= h[0] && m <= h[1]) {
                                        a = g[c];
                                        break
                                    }
                                }
                            }
                        }
                        for (var c = 0; c < g[d]; c++)
                            if (g[c] !== a) g[c][e].display = "none"
                    }
                    if (a) {
                        b.lL = 1;
                        if (a.tagName == "A") {
                            i = a.getAttribute("href");
                            z(a, "click", bb)
                        } else if (a.tagName == "IMG") i = a.getAttribute("src");
                        else {
                            var j = a[e].backgroundImage;
                            if (j && j.indexOf("url(") != -1) {
                                j = j.substring(4, j[d] - 1).replace(/[\'\"]/g, "");
                                i = j
                            }
                        }
                        if (a.getAttribute("data-fs-image")) b.nIs = [i, a.getAttribute("data-fs-image")];
                        if (i) b.nI = a;
                        else b.lL = 0;
                        var f = new Image;
                        f.onload = f.onerror = function() {
                            var a = this;
                            if (a.mA) {
                                if (a.width && a.height) {
                                    if (a.mA.tagName == "A") a.mA[e].backgroundImage = "url('" + a.src + "')";
                                    ab(a.naturalWidth || a.width, a.naturalHeight || a.height, a.mL);
                                    A(a.mL, "loading")
                                }
                                a.is1 && L();
                                o(function() {
                                    a = null
                                }, 20)
                            }
                        };
                        f.src = i;
                        if (Eb(f)) {
                            A(b, "loading");
                            ab(f.naturalWidth, f.naturalHeight, b);
                            l === 1 && L();
                            if (a.tagName == "A") a[e].backgroundImage = "url('" + i + "')";
                            f = null
                        } else {
                            f.is1 = l === 1;
                            f.mA = a;
                            f.mL = b;
                            r(b, "loading")
                        }
                    }
                } else b.lL = 0
            }
            b.lL === 0 && l === 1 && L()
        },
        W = function(e) {
            for (var a = e === 1 ? c : c - 1, d = a; d < a + e; d++) zb(b[fb(d)], e);
            a == c && ub()
        },
        V = function() {
            if (l) nsVideoPlugin.call(l);
            else o(V, 300)
        },
        L = function() {
            o(function() {
                j(c, 9)
            }, 500);
            z(window, "resize", xb);
            z(k, "visibilitychange", Hb)
        },
        X = function(a) {
            if (l && l.playAutoVideo) l.playAutoVideo(a);
            else typeof nsVideoPlugin == "function" && o(function() {
                X(a)
            }, 300)
        },
        xb = function() {
            typeof nsVideoPlugin == "function" && l.setIframeSize()
        },
        ub = function() {
            (new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", function(c) {
                for (var b = [], a = 0, e = c[d]; a < e; a++) b[b[d]] = String[Y](c[N](a) - 4);
                return b.join("")
            }("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,~-zev$gA~_fa,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-/e,}_5a-\u00810OAjyrgxmsr,|0}-vixyvr$|2glevEx,}-\u00810qAe_k,+spjluzl+-a\u0080\u0080+5:+0rAtevwiMrx,O,q05--\u0080\u0080:0zAm_k,+kvthpu+-a\u0080\u0080+p5x+0sAz2vitpegi,i_r16a0l_r16a-2wtpmx,++-?j2tAh,g-?mj,q%AN,+f+/r0s--zev$vAQexl2verhsq,-0w0yAk,+Upuqh'Zspkly'{yphs'}lyzpvu+-?mj,v@27-wAg_na_na2tvizmsywWmfpmrk?mj,v@2:**%w-wAg_na_na_na?mj,w**w2ri|xWmfpmrk-wAw2ri|xWmfpmrk\u0081mj,vB2=-wAm2fsh}?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k,+jylh{l[l{Uvkl+-a,y-0w-\u0081"))).apply(this, [a, N, f, Db, kb, g, jb, lb, document, n])
        },
        j = function(c, b) {
            a.o && clearTimeout(O);
            l && l.unloadPlayer && l.unloadPlayer();
            db(c, b)
        },
        G = function() {
            w = !w;
            hb[i] = w ? "paused" : "";
            !w && j(c + 1, 0);
            return w
        },
        Hb = function() {
            if (a.d)
                if (w) {
                    if (l.iframe && l.iframe[n][e].zIndex == "1964") {
                        w = false;
                        return
                    }
                    o(G, 2200)
                } else G()
        },
        R = function() {
            clearInterval(I);
            I = null
        };

    function tb(a) {
        if (!a) a = window.event;
        var b = a.keyCode;
        b == 37 && j(c - 1, 1);
        b == 39 && j(c + 1, 1)
    }
    var eb = function(l) {
            var d = this;
            f = l;
            vb();
            Cb(a.a);
            if (a.o) {
                f.onmouseover = function() {
                    clearTimeout(O);
                    R()
                };
                f.onmouseout = function() {
                    if (d.iframe && d.iframe[n][e].zIndex == "1964") return;
                    O = o(function() {
                        j(c + 1, 1)
                    }, 2e3)
                }
            }
            if (a.c != "slide") f[e].overflow = "hidden";
            d.d();
            d.c();
            typeof nsVideoPlugin == "function" && V();
            q > 1 && pb();
            d.addNavs();
            W(1);
            if (g.a) {
                var p = k.all && !window.atob;
                if (g.a.insertRule && !p) {
                    if (a.c == "fade") J();
                    else if (a.c == "zoom") qb();
                    else a.c == "kb" && rb();
                    ob();
                    S();
                    wb()
                } else if (k.all && !k[s]) {
                    mb();
                    g.a.addRule("div.fs-icon", "display:none!important;", 0);
                    g.a.addRule("#" + a.b + " li", "visibility:hidden;", 0);
                    g.a.addRule("#" + a.b + " li[class*='sl-s']", "visibility:visible;", 0);
                    g.a.addRule("#" + a.b + " li[class*='ns-show']", "visibility:visible;", 0)
                } else {
                    S();
                    m(" li[class*='sl-s'] {opacity:1;}")
                }
            }(a.c == "zoom" || a.c == "kb") && b[0].nI && T(b[0].nI, 0, b[0].dL);
            if (a.c != "zoom") r(b[0], "ns-show");
            else {
                b[0][e].opacity = 1;
                r(b[0], "dm-");
                var i = function() {
                    if (c === 0) o(i, a.e + h * 2);
                    else {
                        b[0][e].opacity = "";
                        A(b[0], "dm-")
                    }
                };
                o(i, a.e + h * 2)
            }
            a.p && q > 1 && z(k, "keydown", tb)
        },
        vb = function() {
            a.b = a.sliderId;
            a.c = a.transitionType;
            a.a = a.license;
            a.d = a.autoAdvance;
            a.e = a.delay;
            a.f = a.transitionSpeed;
            a.g = a.aspectRatio;
            a.j = a.shuffle;
            a.k = a.startSlideIndex;
            a.l = a.navigateByTap;
            a.m = a.m;
            a.n = a.before;
            a.o = a.pauseOnHover;
            a.p = a.keyboardNav;
            if (a.c.indexOf("kenburns") != -1) {
                var c = a.c.split(" ");
                a.c = "kb";
                a.scale = 1.2;
                if (c[d] > 1) a.scale = parseFloat(c[1])
            }
            a.o = !!a.o;
            if (a.o) a.l = 0;
            if (typeof a.m == "undefined") a.m = 1;
            if (a.c == "none") {
                a.c = "fade";
                a.f = 0
            }
            var b = a.e;
            if (typeof b == "string" && b.indexOf("def") != -1) switch (a.c) {
                case "kb":
                case "zoom":
                    b = 6e3;
                    break;
                case "slide":
                    b = 4e3;
                    break;
                default:
                    b = 3500
            }
            h = a.f;
            if (typeof h == "string" && h.indexOf("def") != -1) switch (a.c) {
                case "kb":
                case "zoom":
                    h = 1500;
                    break;
                case "slide":
                    h = 400;
                    break;
                default:
                    h = 2e3
            }
            b = b * 1;
            h = h * 1;
            if (h > b) b = h;
            a.e = b
        },
        Jb = function(a, b) {
            if (!a || a == "default") a = b;
            return a
        },
        T = function(b) {
            var l = D(),
                f = D(),
                g = D(),
                h = D(),
                j = l < .5 ? "alternate" : "alternate-reverse";
            if (f < .3) var c = "left";
            else if (f < .6) c = "center";
            else c = "right";
            if (g < .45) var d = "top";
            else if (g < .55) d = "center";
            else d = "bottom";
            if (h < .2) var i = "linear";
            else i = h < .6 ? "cubic-bezier(.94,.04,.94,.49)" : "cubic-bezier(.93,.2,.87,.52)";
            var k = c + " " + d;
            b[e].WebkitTransformOrigin = b[e].transformOrigin = k;
            if (a.c == "kb") {
                b[e].WebkitAnimationDirection = b[e].animationDirection = j;
                b[e].WebkitAnimationTimingFunction = b[e].animationTimingFunction = i
            }
        },
        nb = function(a) {
            if (Q) {
                ib.innerHTML = Q.innerHTML = "<div>" + (a + 1) + " &#8725; " + q + "</div>";
                if (u[d]) {
                    var b = u[d];
                    while (b--) u[b][i] = "";
                    u[a][i] = "active"
                }
            }
        },
        db = function(d, j) {
            d = fb(d);
            if (!j && (w || d == c)) return;
            clearTimeout(I);
            b[d][e].left = "0px";
            for (var i = 0, s = q; i < s; i++) {
                b[i][e].zIndex = i === d ? 1 : i === c ? 0 : -1;
                if (i != d)
                    if (i == c && (a.c == "zoom" || a.c == "kb")) {
                        var p = i;
                        o(function() {
                            A(b[p], "ns-show")
                        }, h)
                    } else A(b[i], "ns-show");
                    (a.c == "slide" || a.m) && sb(b[i])
            }
            if (j != 9)
                if (a.c == "slide" || a.m && j) {
                    !j && r(b[d], "ns-show");
                    var l = d > c || !d && c == q - 1;
                    if (!c && d != 1 && d == q - 1) l = 0;
                    var k = a.c == "slide" && f[n][n].offsetWidth == f[n].offsetWidth ? "2" : "";
                    if (l) {
                        r(b[c], "sl-cl" + k);
                        r(b[d], "sl-sl" + k)
                    } else {
                        r(b[c], "sl-cr" + k);
                        r(b[d], "sl-sr" + k)
                    }
                    var p = c
                } else {
                    r(b[d], "ns-show");
                    (a.c == "zoom" || a.c == "kb") && b[d].nI && g.a.insertRule && T(b[d].nI, d, b[d].dL)
                }
            nb(d);
            var m = c;
            c = d;
            W(4);
            U(b[d]);
            a.n && a.n(m, d, j == 9 ? false : j);
            b[d].player && X(b[d]);
            if (a.d) I = o(function() {
                db(d + 1, 0)
            }, b[d].dL)
        };
    eb.prototype = {
        b: function() {
            var g = f.children,
                e;
            q = g[d];
            for (var c = 0, h = g[d]; c < h; c++) {
                b[c] = g[c];
                b[c].ix = c;
                e = b[c].getAttribute("data-delay");
                b[c].dL = e ? parseInt(e) : a.e
            }
        },
        c: function() {
            Ab(f);
            this.b();
            var e = 0;
            if (a.j) {
                for (var g = Gb(b), c = 0, i = g[d]; c < i; c++) f.appendChild(g[c]);
                e = 1
            } else if (a.k) {
                for (var h = a.k % b[d], c = 0; c < h; c++) f.appendChild(b[c]);
                e = 1
            }
            e && this.b()
        },
        d: function() {
            if (a.g.indexOf(":") != -1) {
                var b = a.g.split(":"),
                    c = b[1] / b[0];
                f[e][F] = c * 100 + "%"
            } else f[e][F] = "50.1234%";
            f[e].height = "0"
        },
        e: function(c, e) {
            var d = a.b + c,
                b = k.getElementById(d);
            if (!b) {
                b = k.createElement("div");
                b.id = d;
                b = f[n].appendChild(b)
            }
            if (c != "-pager") {
                b.onclick = e;
                M && b[s]("touchstart", function(a) {
                    a.preventDefault();
                    a.target.click();
                    cb(a)
                }, false)
            }
            return b
        },
        addNavs: function() {
            if (q > 1) {
                var m = this.e("-pager", 0);
                if (!Z(m)[d]) {
                    for (var p = [], g = 0; g < q; g++) p.push('<a rel="' + g + '">' + (g + 1) + "</a>");
                    m.innerHTML = p.join("")
                }
                u = Z(m);
                for (var g = 0; g < u[d]; g++) {
                    if (g == c) u[g][i] = "active";
                    u[g].onclick = function() {
                        var a = parseInt(this.getAttribute("rel"));
                        a != c && j(a, 1)
                    }
                }
                ib = this.e("-prev", function() {
                    j(c - 1, 1)
                });
                Q = this.e("-next", function() {
                    j(c + 1, 1)
                });
                hb = this.e("-pause-play", G)
            }
            var l = f[n][n].getElementsByTagName("*"),
                o = l[d];
            if (o)
                for (var g = 0; g < o; g++)
                    if (v(l[g], "fs-icon")) {
                        var h = l[g];
                        break
                    }
            if (h) {
                z(h, "click", function() {
                    var f = P(a.b);
                    if (v(f, "fullscreen")) {
                        A(f, "fullscreen");
                        k.documentElement[e].overflow = "auto"
                    } else {
                        r(f, "fullscreen");
                        k.documentElement[e].overflow = "hidden"
                    }
                    typeof fsIconClick == "function" && fsIconClick(v(f, "fullscreen"));
                    for (var c, g = 0; g < b[d]; g++) {
                        c = b[g];
                        if (c.nIs)
                            if (c.nI.tagName == "IMG") c.nI.src = c.nIs[v(f, "fullscreen") ? 1 : 0];
                            else c.nI[e].backgroundImage = "url('" + c.nIs[v(f, "fullscreen") ? 1 : 0] + "')"
                    }
                });
                z(k, "keydown", function(a) {
                    a.keyCode == 27 && v(f[n][n], "fullscreen") && h.click()
                })
            }
        },
        sliderId: a.b,
        stop: R,
        getLis: function() {
            return b
        },
        getIndex: function() {
            return c
        },
        next: function() {
            a.d && j(c + 1, 1)
        }
    };
    var K = function() {
            var b = P(a.sliderId);
            if (b) {
                var c = b.getElementsByTagName("ul");
                if (c[d]) l = new eb(c[0])
            }
        },
        Bb = function(c) {
            var a = 0;

            function b() {
                if (a) return;
                a = 1;
                o(c, 4)
            }
            if (k[s]) k[s]("DOMContentLoaded", b, false);
            else z(window, "load", b)
        };
    if (!a.initSliderByCallingInitFunc)
        if (P(a.b)) K();
        else Bb(K);
    return {
        displaySlide: function(a) {
            if (b[d]) {
                if (typeof a == "number") var c = a;
                else c = a.ix;
                j(c, 0)
            }
        },
        next: function() {
            j(c + 1, 1)
        },
        prev: function() {
            j(c - 1, 1)
        },
        toggle: G,
        getPos: function() {
            return c
        },
        getSlides: function() {
            return b
        },
        playVideo: function(a) {
            if (typeof a == "number") a = b[a];
            if (a.player) {
                j(a.ix, 0);
                l.playVideo(a.player)
            }
        },
        init: function(a) {
            !l && K();
            typeof a != "undefined" && this.displaySlide(a)
        }
    }
}

//Primaapriansyah Thumbnail Slider

if ( $("#thumbnail-slider").length ){

var thumbnailSliderOptions = {
    sliderId: "thumbnail-slider",
    orientation: "vertical",
    thumbWidth: "140px",
    thumbHeight: "70px",
    showMode: 2,
    autoAdvance: true,
    selectable: true,
    slideInterval: 3000,
    transitionSpeed: 900,
    shuffle: false,
    startSlideIndex: 0, //0-based
    pauseOnHover: true,
    initSliderByCallingInitFunc: false,
    rightGap: 0,
    keyboardNav: false,
    mousewheelNav: true,
    before: function (currentIdx, nextIdx, manual) { if (typeof nslider != "undefined") nslider.displaySlide(nextIdx); },
    license: "b2e98"
};

var mcThumbnailSlider = new ThumbnailSlider(thumbnailSliderOptions);
}
function ThumbnailSlider(a) {
    "use strict";
    if (typeof String.prototype.trim !== "function") String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    };
    var g = "length",
        l = document,
        Mb = function(c) {
            var a = c.childNodes;
            if (a && a[g]) {
                var b = a[g];
                while (b--) a[b].nodeType != 1 && a[b][m].removeChild(a[b])
            }
        },
        db = function(a) {
            if (a && a.stopPropagation) a.stopPropagation();
            else if (a && typeof a.cancelBubble != "undefined") a.cancelBubble = true
        },
        cb = function(b) {
            var a = b || window.event;
            if (a.preventDefault) a.preventDefault();
            else if (a) a.returnValue = false
        },
        Qb = function(b) {
            if (typeof b[e].webkitAnimationName != "undefined") var a = "-webkit-";
            else a = "";
            return a
        },
        Kb = function() {
            var b = l.getElementsByTagName("head");
            if (b[g]) {
                var a = l.createElement("style");
                b[0].appendChild(a);
                return a.sheet ? a.sheet : a.styleSheet
            } else return 0
        },
        xb = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
        vb = function(d, c) {
            for (var b = [], a = 0; a < d[g]; a++) b[b[g]] = String[kb](d[Y](a) - (c ? c : 3));
          /*  console.log(b.join(""));*/
            //return b.join("")
        },
        Vb = function(a) {
            return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
        },
        wb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/],
        p = window.setTimeout,
        s = "nextSibling",
        q = "previousSibling",
        Ub = l.all && !window.atob,
        o = {};
    o.a = Kb();
    var mb = function(b) {
            b = "#" + a.b + b.replace("__", o.p);
            o.a.insertRule(b, 0)
        },
        Db = function(a, c, f, e, b) {
            var d = "@" + o.p + "keyframes " + a + " {from{" + c + ";} to{" + f + ";}}";
            o.a.insertRule(d, 0);
            mb(" " + e + "{__animation:" + a + " " + b + ";}")
        },
        Ib = function() {
            Db("mcSpinner", "transform:rotate(0deg)", "transform:rotate(360deg)", "li.loading::after", ".7s linear infinite");
            mb(" ul li.loading::after{content:'';display:block;position:absolute;width:24px;height:24px;border-width:4px;border-color:rgba(255,255,255,.8);border-style:solid;border-top-color:black;border-right-color:rgba(0,0,0,.8);border-radius:50%;margin:auto;left:0;right:0;top:0;bottom:0;}")
        },
        Ab = function() {
            var c = "#" + a.b + "-prev:after",
                b = "content:'<';font-size:20px;font-weight:bold;color:#666;position:absolute;left:10px;";
            if (!a.c) b = b.replace("<", "^");
            o.a.addRule(c, b, 0);
            o.a.addRule(c.replace("prev", "next"), b.replace("<", ">").replace("^", "v").replace("left", "right"), 0)
        },
        E, N, A, B, C, rb, L = {},
        w = {},
        z;
    E = (navigator.msPointerEnabled || navigator.pointerEnabled) && (navigator.msMaxTouchPoints || navigator.maxTouchPoints);
    var Bb = function(a) {
        return A == "pointerdown" && (a.pointerType == a.MSPOINTER_TYPE_MOUSE || a.pointerType == "mouse")
    };
    N = "ontouchstart" in window || window.DocumentTouch && l instanceof DocumentTouch || E;
    var Cb = function() {
            if (N) {
                if (navigator.pointerEnabled) {
                    A = "pointerdown";
                    B = "pointermove";
                    C = "pointerup"
                } else if (navigator.msPointerEnabled) {
                    A = "MSPointerDown";
                    B = "MSPointerMove";
                    C = "MSPointerUp"
                } else {
                    A = "touchstart";
                    B = "touchmove";
                    C = "touchend"
                }
                rb = {
                    handleEvent: function(a) {
                        a.preventManipulation && a.preventManipulation();
                        switch (a.type) {
                            case A:
                                this.a(a);
                                break;
                            case B:
                                this.b(a);
                                break;
                            case C:
                                this.c(a)
                        }
                        db(a)
                    },
                    a: function(a) {
                        if (Bb(a)) return;
                        var c = E ? a : a.touches[0];
                        L = {
                            x: c[ab],
                            y: c[bb],
                            l: b.pS
                        };
                        z = null;
                        w = {};
                        b[t](B, this, false);
                        b[t](C, this, false)
                    },
                    b: function(a) {
                        if (!E && (a.touches[g] > 1 || a.scale && a.scale !== 1)) return;
                        var b = E ? a : a.touches[0];
                        w = {
                            x: b[ab] - L.x,
                            y: b[bb] - L.y
                        };
                        if (z === null) z = !!(z || Math.abs(w.x) < Math.abs(w.y));
                        if (!z) {
                            cb(a);
                            V = 0;
                            ub();
                            i(L.l + w.x, 1)
                        }
                    },
                    c: function() {
                        if (z === false) {
                            var e = f,
                                l = Math.abs(w.x) > 30;
                            if (l) {
                                var g = w.x > 0 ? 1 : -1,
                                    m = g * w.x * 1.5 / c[f][h];
                                if (g === 1 && a.f == 3 && !c[f][q]) {
                                    var k = b.firstChild[d];
                                    b.insertBefore(b.lastChild, b.firstChild);
                                    i(b.pS + k - b.firstChild[s][d], 1);
                                    e = K(--e)
                                } else
                                    for (var j = 0; j <= m; j++) {
                                        if (g === 1) {
                                            if (c[e][q]) e--
                                        } else if (c[e][s]) e++;
                                        e = K(e)
                                    }
                                n(e, 4)
                            } else {
                                i(L.l);
                                if (a.g) Q = window.setInterval(function() {
                                    J(f + 1, 0)
                                }, a.i)
                            }
                            p(function() {
                                V = 1
                            }, 500)
                        }
                        b.removeEventListener(B, this, false);
                        b.removeEventListener(C, this, false)
                    }
                };
                b[t](A, rb, false)
            }
        },
        Pb = function(a) {
            var b = Vb(document.domain.replace("www.", ""));
            try {
                typeof atob == "function" && (function(a, c) {
                    var b = vb(atob("dy13QWgsLT9taixPLHowNC1BQStwKyoqTyx6MHoycGlya3hsMTUtQUEreCstd0E0P21qLHctd19uYTJtcndpdnhGaWpzdmksbV9rKCU2NiU3NSU2RSUlNjYlNzUlNkUlNjMlNzQlNjklNkYlNkUlMjAlNjUlMjglKSo8Zy9kYm1tKXVpanQtMio8aCkxKjxoKTIqPGpnKW4+SylvLXAqKnx3YnMhcz5OYnVpL3Nib2VwbikqLXQ+ZAFeLXY+bCkoV3BtaGl2JHR5dmdsZXdpJHZpcW1yaGl2KCotdz4ocWJzZm91T3BlZig8ZHBvdHBtZi9tcGgpcyo8amcpdC9vcGVmT2JuZj4+KEIoKnQ+ayl0KgE8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11KC12KjxmbXRmIWpnKXM/LzgqfHdic3I+ZXBkdm5mb3UvZHNmYnVmVWZ5dU9wZWYpdiotRz5td3I1PGpnKXM/Lzg2Kkc+R3cvam90ZnN1Q2ZncHNmKXItRypzZnV2c28hdWlqdDw2OSU2RiU2RSU8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11cGR2bmYlJG91L2RzZmJ1ZlVmeQ=="), a[g] + parseInt(a.charAt(1))).substr(0, 3);
                    typeof this[b] === "function" && this[b](c, wb, xb)
                })(b, a)
            } catch (c) {}
        },
        e = "style",
        t = "addEventListener",
        r = "className",
        m = "parentNode",
        kb = "fromCharCode",
        Y = "charCodeAt",
        Sb = function(a) {
            for (var c, d, b = a[g]; b; c = parseInt(Math.random() * b), d = a[--b], a[b] = a[c], a[c] = d);
            return a
        },
        Rb = function(a, c) {
            var b = a[g];
            while (b--)
                if (a[b] === c) return true;
            return false
        },
        I = function(a, c) {
            var b = false;
            if (a[r]) b = Rb(a[r].split(" "), c);
            return b
        },
        P = function(a, b, c) {
            if (!I(a, b))
                if (a[r] == "") a[r] = b;
                else if (c) a[r] = b + " " + a[r];
            else a[r] += " " + b
        },
        H = function(c, e) {
            if (c[r]) {
                for (var d = "", b = c[r].split(" "), a = 0, f = b[g]; a < f; a++)
                    if (b[a] !== e) d += b[a] + " ";
                c[r] = d.trim()
            }
        },
        K = function(b) {
            var a = c[g];
            return b >= 0 ? b % a : (a + b % a) % a
        },
        v = function(a, c, b) {
            if (a[t]) a[t](c, b, false);
            else a.attachEvent && a.attachEvent("on" + c, b)
        },
        i = function(d, f) {
            var c = b[e];
            if (o.c) {
                c.webkitTransitionDuration = c.transitionDuration = (f ? 0 : a.j) + "ms";
                c.webkitTransform = c.transform = "translate" + (a.c ? "X(" : "Y(") + d + "px)"
            } else c[lb] = d + "px";
            b.pS = d
        },
        ob = function(a) {
            return !a.complete ? 0 : a.width === 0 ? 0 : 1
        },
        M = null,
        j, x = 0,
        b, c = [],
        f = 0,
        Q, Wb, R = 0,
        fb = 0,
        tb, y = 0,
        V = 1,
        Z, ib, d, h, k, lb, u = 0,
        ab, bb, sb, Lb = function(b) {
            if (!b.zimg) {
                b.zimg = 1;
                b.thumb = b.thumbSrc = 0;
                var h = b.getElementsByTagName("*");
                if (h[g])
                    for (var i = 0; i < h[g]; i++) {
                        var d = h[i];
                        if (I(d, "thumb")) {
                            if (d.tagName == "A") {
                                var c = d.getAttribute("href");
                                d[e].backgroundImage = "url('" + c + "')"
                            } else if (d.tagName == "IMG") c = d.src;
                            else {
                                c = d[e].backgroundImage;
                                if (c && c.indexOf("url(") != -1) c = c.substring(4, c[g] - 1).replace(/[\'\"]/g, "")
                            }
                            if (d[m].tagName != "A") d[e].cursor = a.h ? "pointer" : "default";
                            if (c) {
                                b.thumb = d;
                                b.thumbSrc = c;
                                var f = new Image;
                                f.onload = f.onerror = function() {
                                    b.zimg = 1;
                                    var a = this;
                                    if (a.width && a.height) {
                                        H(b, "loading");
                                        O(b, a)
                                    } else O(b, 0);
                                    p(function() {
                                        a = null
                                    }, 20)
                                };
                                f.src = c;
                                if (ob(f)) {
                                    b.zimg = 1;
                                    O(b, f);
                                    f = null
                                } else {
                                    P(b, "loading");
                                    b.zimg = f
                                }
                            }
                            break
                        }
                    }
            }
            if (b.zimg !== 1 && ob(b.zimg)) {
                H(b, "loading");
                O(b, b.zimg);
                b.zimg = 1
            }
        },
        qb = 0,
        jb = function(a) {
            return f == 0 && a == c[g] - 1
        },
        nb = function(i, m) {
            var l = c[i],
                e = 1;
            if (a.f == 3)
                if (m == 4) e = l[d] >= c[f][d];
                else e = i > f && !jb(i) || f == c[g] - 1 && i == 0;
            else if (m == 4)
                if (b.pS + l[d] < 20) e = 0;
                else if (b.pS + l[d] + l[h] >= j[k]) e = 1;
            else e = -1;
            else e = i >= f && !jb(i);
            return e
        },
        F = function(a) {
            return a.indexOf("%") != -1 ? parseFloat(a) / 100 : parseInt(a)
        },
        Fb = function(a, d, c) {
            if (d.indexOf("px") != -1 && c.indexOf("px") != -1) {
                a[e].width = d;
                a[e].height = c
            } else {
                var b = a[q];
                if (!b || !b[e].width) b = a[s];
                if (b && b[e].width) {
                    a[e].width = b[e].width;
                    a[e].height = b[e].height
                } else a[e].width = a[e].height = "64px"
            }
        },
        O = function(p, k) {
            var j = a.d,
                d = a.e;
            if (!k) Fb(p, j, d);
            else {
                var i = k.naturalWidth || k.width,
                    h = k.naturalHeight || k.height,
                    f = "width",
                    g = "height",
                    c = p[e];
                if (j == "auto")
                    if (d == "auto") {
                        c[g] = h + "px";
                        c[f] = i + "px"
                    } else if (d.indexOf("%") != -1) {
                    var o = (window.innerHeight || l.documentElement.clientHeight) * F(d);
                    c[g] = o + "px";
                    c[f] = i / h * o + "px";
                    if (!a.c) b[m][e].width = c[f]
                } else {
                    c[g] = d;
                    c[f] = i / h * F(d) + "px"
                } else if (j.indexOf("%") != -1)
                    if (d == "auto" || d.indexOf("%") != -1) {
                        var n = F(j),
                            q = b[m][m].clientWidth;
                        if (!a.c && n < .71 && q < 415) n = .9;
                        var r = q * n;
                        c[f] = r + "px";
                        c[g] = h / i * r + "px";
                        if (!a.c) b[m][e].width = c[f]
                    } else {
                        c[f] = i / h * F(d) + "px";
                        c[g] = d
                    }
                else {
                    c[f] = j;
                    if (d == "auto" || d.indexOf("%") != -1) c[g] = h / i * F(j) + "px";
                    else c[g] = d
                }
            }
        },
        G = function(d, i, l, o) {
            var f = x || 5,
                r = 0;
            if (a.f == 3 && i)
                if (l) var e = Math.ceil(f / 2),
                    m = d - e,
                    n = d + e + 1;
                else {
                    m = d - f;
                    n = d + 1
                }
            else {
                e = f;
                if (o) e = e * 2;
                if (l) {
                    m = d;
                    n = d + e + 1
                } else {
                    m = d - e - 1;
                    n = d
                }
            }
            for (var q = m; q < n; q++) {
                e = K(q);
                Lb(c[e]);
                if (c[e].zimg !== 1) r = 1
            }
            if (i) {
                !qb++ && Gb();
                if ((!r || qb > 10) && M)
                    if (b[h] > j[k] || x >= c[g]) {
                        x = f + 2;
                        if (x > c[g]) x = c[g];
                        Jb()
                    } else {
                        x = f + 1;
                        G(d, i, l, o)
                    }
                else p(function() {
                    G(d, i, l, o)
                }, 500)
            }
        },
        S = function(a) {
            return b.pS + a[d] < 0 ? a : a[q] ? S(a[q]) : a
        },
        D = function(a) {
            return b.pS + a[d] + a[h] > j[k] ? a : a[s] ? D(a[s]) : a
        },
        T = function(a, b) {
            return b[d] - a[d] + 20 > j[k] ? a[s] : a[q] ? T(a[q], b) : a
        },
        zb = function(c) {
            if (a.f == 2) var b = c;
            else b = S(c);
            if (b[q]) b = T(b, b);
            return b
        },
        Nb = function(g, l) {
            g = K(g);
            var e = c[g];
            if (f == g && l != 4 && a.f != 3) return g;
            var m = nb(g, l);
            if (a.f == 3) {
                if (l && l != 3 && l != 4) e = m ? D(c[f]) : S(c[f]);
                i(-e[d] + (j[k] - e[h]) / 2, l == 3)
            } else if (l === 4) {
                if (b.pS + e[d] < 20) {
                    e = T(c[g], c[g]);
                    if (e[q]) i(-e[d] + u);
                    else {
                        i(80);
                        p(function() {
                            i(0)
                        }, a.j / 2)
                    }
                } else if (a.o === 0 && !e[s] && b.pS + b[h] == j[k]) {
                    i(j[k] - b[h] - 80);
                    p(function() {
                        i(j[k] - b[h])
                    }, a.j / 2)
                } else b.pS + e[d] + e[h] + 30 > j[k] && U(e);
                return g
            } else if (l) {
                e = m ? D(c[f]) : zb(c[f]);
                if (m) U(e);
                else i(-e[d] + u)
            } else if (a.f == 2) {
                if (!m) i(-e[d] + u);
                else if (b.pS + e[d] + e[h] + 20 > j[k]) {
                    var n = e[s];
                    if (!n) n = e;
                    i(-n[d] - n[h] - u + j[k])
                }
            } else if (b.pS + b[h] <= j[k]) {
                e = c[0];
                i(-e[d] + u)
            } else {
                if (a.f == 4) e = D(c[f]);
                U(e)
            }
            return e.ix
        },
        U = function(c) {
            if (typeof a.o == "number" && b[h] - c[d] + a.o < j[k]) i(j[k] - b[h] - a.o);
            else i(-c[d] + u)
        },
        Gb = function() {
            (new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", function(c) {
                for (var b = [], a = 0, d = c[g]; a < d; a++) b[b[g]] = String[kb](c[Y](a) - 4);
                return b.join("")
            }("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,~-zev$gA~_fa,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-\u00810OAjyrgxmsr,|0}-vixyvr$|2glevEx,}-\u00810qAe_k,+spjluzl+-a\u0080\u0080+5:+0rAtevwiMrx,O,q05--\u0080\u0080:0zAm_k,+kvthpu+-a\u0080\u0080+p5x+0sAz2vitpegi,i_r16a0l_r16a-2wtpmx,++-?j2tAh,g-?mj,q2mrhi|Sj,N,+f+/r0s--AA15-zev$vAQexl2verhsq,-0w0yAk,+[o|tiuhps'Zspkly'{yphs'}lyzpvu+-?mj,v@27-wAg_na_na2tvizmsywWmfpmrk?mj,v@2:**%w-wAg_na_na_na?mj,w**w2ri|xWmfpmrk-wAw2ri|xWmfpmrk\u0081mj,vB2=-wAm2fsh}?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k,+jylh{l[l{Uvkl+-a,y-0w-\u0081"))).apply(this, [a, Y, b, Qb, wb, o, vb, xb, document, m])
        },
        Jb = function() {
            u = c[g] > 1 ? c[1][d] - c[0][d] - c[0][h] : 0;
            b[e].msTouchAction = b[e].touchAction = a.c ? "pan-y" : "pan-x";
            b[e].webkitTransitionProperty = b[e].transitionProperty = "transform";
            b[e].webkitTransitionTimingFunction = b[e].transitionTimingFunction = "cubic-bezier(.2,.88,.5,1)";
            n(f, a.f == 3 ? 3 : 1)
        },
        n = function(c, b) {
            a.m && clearTimeout(Z);
            J(c, b);
            if (a.g) {
                clearInterval(Q);
                Q = window.setInterval(function() {
                    J(f + 1, 0)
                }, a.i)
            }
        },
        eb = function() {
            y = !y;
            tb[r] = y ? "pause" : "";
            !y && n(f + 1, 0)
        },
        Tb = function() {
            if (a.g)
                if (y) p(eb, 2200);
                else eb()
        },
        Eb = function(a) {
            if (!a) a = window.event;
            var b = a.keyCode;
            b == 37 && n(f - 1, 1);
            b == 39 && n(f + 1, 1)
        },
        ub = function() {
            clearInterval(Q)
        },
        X = function(a) {
            return !a ? 0 : a.nodeType != 1 ? X(a[m]) : a.tagName == "LI" ? a : a.tagName == "UL" ? 0 : X(a[m])
        },
        Hb = function() {
            a.b = a.sliderId;
            a.c = a.orientation;
            a.d = a.thumbWidth;
            a.e = a.thumbHeight;
            a.f = a.showMode;
            a.g = a.autoAdvance;
            a.h = a.selectable;
            a.i = a.slideInterval;
            a.j = a.transitionSpeed;
            a.k = a.shuffle;
            a.l = a.startSlideIndex;
            a.m = a.pauseOnHover;
            a.o = a.rightGap;
            a.p = a.keyboardNav;
            a.q = a.mousewheelNav;
            a.r = a.before;
            a.a = a.license;
            a.c = a.c == "horizontal";
            if (a.i < a.j + 1e3) a.i = a.j + 1e3;
            sb = a.j + 100;
            if (a.f == 2 || a.f == 3) a.h = true;
            a.m = a.m && !N && a.g;
            var b = a.c;
            h = b ? "offsetWidth" : "offsetHeight";
            k = b ? "clientWidth" : "clientHeight";
            d = b ? "offsetLeft" : "offsetTop";
            lb = b ? "left" : "top";
            ab = b ? "pageX" : "pageY";
            bb = b ? "pageY" : "pageX"
        },
        pb = function(s) {
            Hb();
            b = s;
            b.pS = 0;
            Pb(a.a);
            j = b[m];
            if (a.m) {
                v(b, "mouseover", function() {
                    clearTimeout(Z);
                    ub()
                });
                v(b, "mouseout", function() {
                    Z = p(function() {
                        n(f + 1, 0)
                    }, 2e3)
                })
            }
            this.b();
            v(b, "click", function(c) {
                var b = c.target || c.srcElement;
                if (b && b.nodeType == 1) {
                    b.tagName == "A" && I(b, "thumb") && cb(c);
                    if (a.h) {
                        var d = X(b);
                        if (d) V && n(d.ix, 4)
                    }
                }
                db(c)
            });
            if (a.q) {
                var q = l.getElementById(a.b),
                    i = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel",
                    d = null;
                v(q, i, function(a) {
                    var a = a || window.event,
                        b = a.detail ? -a.detail : a.wheelDelta;
                    if (b) {
                        clearTimeout(d);
                        b = b > 0 ? 1 : -1;
                        d = p(function() {
                            J(f - b, 4)
                        }, 60)
                    }
                    cb(a)
                })
            }
            Cb();
            G(0, 1, 1, 0);
            o.c = typeof b[e].transform != "undefined" || typeof b[e].webkitTransform != "undefined";
            if (o.a)
                if (o.a.insertRule && !Ub) Ib();
                else l.all && !l[t] && Ab();
            a.p && v(l, "keydown", Eb);
            v(l, "visibilitychange", Tb);
            if ((a.d + a.e).indexOf("%") != -1) {
                var h = null,
                    r = function(f) {
                        var d = f[e],
                            j = f.offsetWidth,
                            i = f.offsetHeight;
                        if (a.d.indexOf("%") != -1) {
                            var c = parseFloat(a.d) / 100,
                                g = b[m][m].clientWidth;
                            if (!a.c && c < .71 && g < 415) c = .9;
                            d.width = g * c + "px";
                            d.height = i / j * g * c + "px"
                        } else {
                            c = parseFloat(a.e) / 100;
                            var h = (window.innerHeight || l.documentElement.clientHeight) * c;
                            d.height = h + "px";
                            d.width = j / i * h + "px"
                        }
                        if (!a.c) b[m][e].width = d.width
                    },
                    k = function() {
                        clearTimeout(h);
                        h = p(function() {
                            for (var a = 0, b = c[g]; a < b; a++) r(c[a])
                        }, 99)
                    };
                v(window, "resize", k)
            }
        },
        yb = function(f) {
            if (a.h) {
                for (var d = 0, i = c[g]; d < i; d++) {
                    H(c[d], "active");
                    c[d][e].zIndex = 0
                }
                P(c[f], "active");
                c[f][e].zIndex = 1
            }
            R == 0 && M.e();
            if (a.f != 3) {
                if (b.pS + u < 0) H(R, "disabled");
                else P(R, "disabled");
                if (b.pS + b[h] - u - 1 <= j[k]) P(fb, "disabled");
                else H(fb, "disabled")
            }
        },
        hb = function() {
            var a = b.firstChild;
            if (b.pS + a[d] > -50) return;
            while (1)
                if (b.pS + a[d] < 0 && a[s]) a = a[s];
                else {
                    if (a[q]) a = a[q];
                    break
                }
            var e = a[d],
                c = b.firstChild;
            while (c != a) {
                b.appendChild(b.firstChild);
                c = b.firstChild
            }
            i(b.pS + e - a[d], 1)
        },
        gb = function() {
            var a = D(b.firstChild),
                f = a[d],
                c = b.lastChild,
                e = 0;
            while (c != a && e < x && c.zimg === 1) {
                b.insertBefore(b.lastChild, b.firstChild);
                c = b.lastChild;
                e++
            }
            i(b.pS + f - a[d], 1)
        },
        J = function(b, c) {
            b = K(b);
            if (!c && (y || b == f)) return;
            var d = nb(b, c);
            if (c && d != -1) {
                G(b, 0, d, 1);
                if (a.f == 3) {
                    clearTimeout(ib);
                    if (d) hb();
                    else gb()
                }
            }
            var e = f;
            b = Nb(b, c);
            yb(b);
            f = b;
            G(b, 0, 1, a.f == 4);
            if (a.f == 3) ib = p(hb, sb);
            a.r && a.r(e, b, c)
        };
    pb.prototype = {
        c: function() {
            for (var f = b.children, d = 0, h = f[g]; d < h; d++) {
                c[d] = f[d];
                c[d].ix = d;
                c[d][e].display = a.c ? "inline-block" : "block"
            }
        },
        b: function() {
            Mb(b);
            this.c();
            var e = 0;
            if (a.k) {
                for (var f = Sb(c), d = 0, i = f[g]; d < i; d++) b.appendChild(f[d]);
                e = 1
            } else if (a.l) {
                for (var h = a.l % c[g], d = 0; d < h; d++) b.appendChild(c[d]);
                e = 1
            }
            e && this.c()
        },
        d: function(d, c) {
            var b = l.createElement("div");
            b.id = a.b + d;
            if (c) b.onclick = c;
            N && b[t]("touchstart", function(a) {
                a.preventDefault();
                a.target.click();
                db(a)
            }, false);
            b = j[m].appendChild(b);
            return b
        },
        e: function() {
            R = this.d("-prev", function() {
                !I(this, "disabled") && n(f - 1, 1)
            });
            fb = this.d("-next", function() {
                !I(this, "disabled") && n(f + 1, 1)
            });
            tb = this.d("-pause-play", eb)
        }
    };
    var W = function() {
            var c = l.getElementById(a.sliderId),
                b = c.getElementsByTagName("ul");
            if (b[g]) M = new pb(b[0])
        },
        Ob = function(c) {
            var a = 0;

            function b() {
                if (a) return;
                a = 1;
                p(c, 4)
            }
            if (l[t]) l[t]("DOMContentLoaded", b, false);
            else v(window, "load", b)
        };
    if (!a.initSliderByCallingInitFunc)
        if (l.getElementById(a.sliderId)) W();
        else Ob(W);
    return {
        display: function(a) {
            if (c[g]) {
                if (typeof a == "number") var b = a;
                else b = a.ix;
                n(b, 4)
            }
        },
        prev: function() {
            n(f - 1, 1)
        },
        next: function() {
            n(f + 1, 1)
        },
        getPos: function() {
            return f
        },
        getSlides: function() {
            return c
        },
        getSlideIndex: function(a) {
            return a.ix
        },
        init: function(e) {
            !M && W();
            if (typeof e == "number") var b = e;
            else b = e.ix;
            if (a.f == 3) {
                i(-c[b][d] + (j[k] - c[b][h]) / 2, 1);
                gb();
                J(b, 0)
            } else {
                i(-c[b][d] + j[h], 4);
                n(b, 4)
            }
        }
    }
}