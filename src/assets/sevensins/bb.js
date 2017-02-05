/**
 * Created by seven sins on 2/6/2017.
 */
jQuery.easing.jswing = jQuery.easing.swing,
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(n, e, t, u, a) {
            return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
        },
        easeInQuad: function(n, e, t, u, a) {
            return u * (e /= a) * e + t
        },
        easeOutQuad: function(n, e, t, u, a) {
            return - u * (e /= a) * (e - 2) + t
        },
        easeInOutQuad: function(n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e + t: -u / 2 * (--e * (e - 2) - 1) + t
        },
        easeInCubic: function(n, e, t, u, a) {
            return u * (e /= a) * e * e + t
        },
        easeOutCubic: function(n, e, t, u, a) {
            return u * ((e = e / a - 1) * e * e + 1) + t
        },
        easeInOutCubic: function(n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e * e + t: u / 2 * ((e -= 2) * e * e + 2) + t
        },
        easeInQuart: function(n, e, t, u, a) {
            return u * (e /= a) * e * e * e + t
        },
        easeOutQuart: function(n, e, t, u, a) {
            return - u * ((e = e / a - 1) * e * e * e - 1) + t
        },
        easeInOutQuart: function(n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t: -u / 2 * ((e -= 2) * e * e * e - 2) + t
        },
        easeInQuint: function(n, e, t, u, a) {
            return u * (e /= a) * e * e * e * e + t
        },
        easeOutQuint: function(n, e, t, u, a) {
            return u * ((e = e / a - 1) * e * e * e * e + 1) + t
        },
        easeInOutQuint: function(n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t: u / 2 * ((e -= 2) * e * e * e * e + 2) + t
        },
        easeInSine: function(n, e, t, u, a) {
            return - u * Math.cos(e / a * (Math.PI / 2)) + u + t
        },
        easeOutSine: function(n, e, t, u, a) {
            return u * Math.sin(e / a * (Math.PI / 2)) + t
        },
        easeInOutSine: function(n, e, t, u, a) {
            return - u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
        },
        easeInExpo: function(n, e, t, u, a) {
            return 0 == e ? t: u * Math.pow(2, 10 * (e / a - 1)) + t
        },
        easeOutExpo: function(n, e, t, u, a) {
            return e == a ? t + u: u * ( - Math.pow(2, -10 * e / a) + 1) + t
        },
        easeInOutExpo: function(n, e, t, u, a) {
            return 0 == e ? t: e == a ? t + u: (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t: u / 2 * ( - Math.pow(2, -10 * --e) + 2) + t
        },
        easeInCirc: function(n, e, t, u, a) {
            return - u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
        },
        easeOutCirc: function(n, e, t, u, a) {
            return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
        },
        easeInOutCirc: function(n, e, t, u, a) {
            return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t: u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
        },
        easeInElastic: function(n, e, t, u, a) {
            var r = 1.70158,
                i = 0,
                s = u;
            if (0 == e) return t;
            if (1 == (e /= a)) return t + u;
            if (i || (i = .3 * a), s < Math.abs(u)) {
                s = u;
                var r = i / 4
            } else var r = i / (2 * Math.PI) * Math.asin(u / s);
            return - (s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i)) + t
        },
        easeOutElastic: function(n, e, t, u, a) {
            var r = 1.70158,
                i = 0,
                s = u;
            if (0 == e) return t;
            if (1 == (e /= a)) return t + u;
            if (i || (i = .3 * a), s < Math.abs(u)) {
                s = u;
                var r = i / 4
            } else var r = i / (2 * Math.PI) * Math.asin(u / s);
            return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * a - r) * Math.PI / i) + u + t
        },
        easeInOutElastic: function(n, e, t, u, a) {
            var r = 1.70158,
                i = 0,
                s = u;
            if (0 == e) return t;
            if (2 == (e /= a / 2)) return t + u;
            if (i || (i = .3 * a * 1.5), s < Math.abs(u)) {
                s = u;
                var r = i / 4
            } else var r = i / (2 * Math.PI) * Math.asin(u / s);
            return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) + t: s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) * .5 + u + t
        },
        easeInBack: function(n, e, t, u, a, r) {
            return void 0 == r && (r = 1.70158),
            u * (e /= a) * e * ((r + 1) * e - r) + t
        },
        easeOutBack: function(n, e, t, u, a, r) {
            return void 0 == r && (r = 1.70158),
            u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
        },
        easeInOutBack: function(n, e, t, u, a, r) {
            return void 0 == r && (r = 1.70158),
                (e /= a / 2) < 1 ? u / 2 * e * e * (((r *= 1.525) + 1) * e - r) + t: u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
        },
        easeInBounce: function(n, e, t, u, a) {
            return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
        },
        easeOutBounce: function(n, e, t, u, a) {
            return (e /= a) < 1 / 2.75 ? 7.5625 * u * e * e + t: 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t: 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t: u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
        },
        easeInOutBounce: function(n, e, t, u, a) {
            return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t: .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
        }
    });
function css(e, t, a) {
    if (2 == arguments.length) {
        if ("scale" == t || "rotate" == t || "rotateX" == t || "rotateY" == t || "rotateZ" == t || "scaleX" == t || "scaleY" == t || "translateY" == t || "translateX" == t || "translateZ" == t) switch (e.$Transform || (e.$Transform = {}), t) {
            case "scale":
            case "scaleX":
            case "scaleY":
                return "number" == typeof e.$Transform[t] ? e.$Transform[t] : 100;
            case "translateY":
            case "translateX":
            case "translateZ":
                return e.$Transform[t] ? e.$Transform[t] : 0;
            default:
                return e.$Transform[t] ? e.$Transform[t] : 0
        }
        var n = e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, !1)[t];
        return "opacity" == t ? Math.round(100 * parseFloat(n)) : parseInt(n)
    }
    if (3 == arguments.length) switch (t) {
        case "scale":
        case "scaleX":
        case "scaleY":
        case "rotate":
        case "rotateX":
        case "rotateY":
        case "rotateZ":
        case "translateY":
        case "translateX":
        case "translateZ":
            setCss3(e, t, a);
            break;
        case "width":
        case "height":
        case "paddingLeft":
        case "paddingTop":
        case "paddingRight":
        case "paddingBottom":
            a = Math.max(a, 0);
        case "left":
        case "top":
        case "right":
        case "bottom":
        case "marginLeft":
        case "marginTop":
        case "marginRight":
        case "marginBottom":
            e.style[t] = "string" == typeof a ? a: a + "px";
            break;
        case "opacity":
            e.style.filter = "alpha(opacity:" + a + ")",
                e.style.opacity = a / 100;
            break;
        default:
            e.style[t] = a
    }
    return function(t, a) {
        css(e, t, a)
    }
}
function setCss3(e, t, a) {
    var n = "",
        r = "",
        s = ["Webkit", "Moz", "O", "ms", ""];
    e.$Transform || (e.$Transform = {}),
        e.$Transform[t] = parseInt(a);
    for (n in e.$Transform) switch (n) {
        case "scale":
        case "scaleX":
        case "scaleY":
            r += n + "(" + e.$Transform[n] / 100 + ") ";
            break;
        case "rotate":
        case "rotateX":
        case "rotateY":
        case "rotateZ":
            r += n + "(" + e.$Transform[n] + "deg) ";
            break;
        case "translateY":
        case "translateX":
        case "translateZ":
            r += n + "(" + e.$Transform[n] + "px) "
    }
    for (var c = 0; c < s.length; c++) e.style[s[c] + "Transform"] = r
}
function tweenMove(e) {
    var t = e.obj,
        a = e.oTarget,
        n = e.iTime,
        r = e.iType,
        s = e.fnEnd,
        c = e.fnDuring,
        o = Tween[r],
        i = 0,
        u = {},
        f = {},
        l = n / 24,
        h = {},
        m = "";
    clearInterval(t.timer);
    for (m in a) u[m] = css(t, m),
        f[m] = a[m] - u[m],
        h[m] = 0;
    if (30 > n) for (m in a) css(t, m, a[m]);
    else t.timer = setInterval(function() {
            if (l > i) {
                i++;
                for (m in a) h[m] = o(i, u[m], f[m], l),
                    css(t, m, o(i, u[m], f[m], l))
            } else {
                for (m in a) css(t, m, a[m]);
                clearInterval(t.timer),
                s && s.call(t)
            }
            c && c.call(t, u, h, i, l)
        },
        24)
}
var Tween = {
    linear: function(e, t, a, n) {
        return a * e / n + t
    },
    easeIn: function(e, t, a, n) {
        return a * (e /= n) * e + t
    },
    easeOut: function(e, t, a, n) {
        return - a * (e /= n) * (e - 2) + t
    },
    easeBoth: function(e, t, a, n) {
        return (e /= n / 2) < 1 ? a / 2 * e * e + t: -a / 2 * (--e * (e - 2) - 1) + t
    },
    easeInStrong: function(e, t, a, n) {
        return a * (e /= n) * e * e * e + t
    },
    easeOutStrong: function(e, t, a, n) {
        return - a * ((e = e / n - 1) * e * e * e - 1) + t
    },
    easeBothStrong: function(e, t, a, n) {
        return (e /= n / 2) < 1 ? a / 2 * e * e * e * e + t: -a / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    elasticIn: function(e, t, a, n, r, s) {
        if (0 === e) return t;
        if (1 == (e /= n)) return t + a;
        if (s || (s = .3 * n), !r || r < Math.abs(a)) {
            r = a;
            var c = s / 4
        } else var c = s / (2 * Math.PI) * Math.asin(a / r);
        return - (r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - c) * Math.PI / s)) + t
    },
    elasticOut: function(e, t, a, n, r, s) {
        if (0 === e) return t;
        if (1 == (e /= n)) return t + a;
        if (s || (s = .3 * n), !r || r < Math.abs(a)) {
            r = a;
            var c = s / 4
        } else var c = s / (2 * Math.PI) * Math.asin(a / r);
        return r * Math.pow(2, -10 * e) * Math.sin(2 * (e * n - c) * Math.PI / s) + a + t
    },
    elasticBoth: function(e, t, a, n, r, s) {
        if (0 === e) return t;
        if (2 == (e /= n / 2)) return t + a;
        if (s || (s = .3 * n * 1.5), !r || r < Math.abs(a)) {
            r = a;
            var c = s / 4
        } else var c = s / (2 * Math.PI) * Math.asin(a / r);
        return 1 > e ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - c) * Math.PI / s) + t: r * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * n - c) * Math.PI / s) * .5 + a + t
    },
    backIn: function(e, t, a, n, r) {
        return "undefined" == typeof r && (r = 1.70158),
        a * (e /= n) * e * ((r + 1) * e - r) + t
    },
    backOut: function(e, t, a, n, r) {
        return "undefined" == typeof r && (r = 3.70158),
        a * ((e = e / n - 1) * e * ((r + 1) * e + r) + 1) + t
    },
    backBoth: function(e, t, a, n, r) {
        return "undefined" == typeof r && (r = 1.70158),
            (e /= n / 2) < 1 ? a / 2 * e * e * (((r *= 1.525) + 1) * e - r) + t: a / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
    },
    bounceIn: function(e, t, a, n) {
        return a - Tween.bounceOut(n - e, 0, a, n) + t
    },
    bounceOut: function(e, t, a, n) {
        return (e /= n) < 1 / 2.75 ? 7.5625 * a * e * e + t: 2 / 2.75 > e ? a * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t: 2.5 / 2.75 > e ? a * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t: a * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    bounceBoth: function(e, t, a, n) {
        return n / 2 > e ? .5 * Tween.bounceIn(2 * e, 0, a, n) + t: .5 * Tween.bounceOut(2 * e - n, 0, a, n) + .5 * a + t
    }
};
function star() {
    var e = $(".cloth");
    var k = 0;
    css($(".contactBox").get(0), "rotateZ", -90);
    move($(".disk").get(0), {
            left: "0",
            bottom: "0",
            width: "874",
            height: "172"
        },
        635, "easeOutStrong");
    setTimeout(function() {
            noticeFn();
            move($(".m").get(0), {
                    left: "60",
                    width: "587",
                    height: "299"
                },
                650, "easeOutStrong",
                function() {
                    move($(".diaoche").get(0), {
                            left: "147",
                            opacity: "1"
                        },
                        500, "easeBothStrong")
                })
        },
        150);
    setTimeout(function() {
            move($(".h").get(0), {
                    left: "56",
                    top: "132",
                    width: "112",
                    height: "127"
                },
                500, "easeOutStrong",
                function() {
                    move($(".h").get(0), {
                            left: "311",
                            top: "175"
                        },
                        500, "easeBothStrong")
                })
        },
        500);
    setTimeout(function() {
            move($(".t").get(0), {
                    left: "129",
                    top: "289",
                    width: "100",
                    height: "112"
                },
                500, "easeOutStrong",
                function() {
                    move($(".t").get(0), {
                            left: "388",
                            top: "199"
                        },
                        500, "easeBothStrong")
                })
        },
        600);
    setTimeout(function() {
            move($(".m2").get(0), {
                    left: "713",
                    top: "142",
                    width: "114",
                    height: "107"
                },
                500, "easeOutStrong",
                function() {
                    move($(".m2").get(0), {
                            left: "442",
                            top: "218"
                        },
                        500, "easeBothStrong")
                })
        },
        700);
    setTimeout(function() {
            move($(".l").get(0), {
                    left: "676",
                    top: "275",
                    width: "82",
                    height: "94"
                },
                500, "easeOutStrong",
                function() {
                    move($(".l").get(0), {
                            left: "516",
                            top: "239"
                        },
                        500, "easeBothStrong")
                })
        },
        800);
    setTimeout(function() {
            move($(".n5").get(0), {
                    left: "657",
                    top: "168",
                    width: "90",
                    height: "88"
                },
                500, "easeOutStrong",
                function() {
                    move($(".n5").get(0), {
                            left: "555",
                            top: "252"
                        },
                        500, "easeBothStrong")
                })
        },
        900);
    setTimeout(function() {
            move($(".c").get(0), {
                    left: "44",
                    top: "-155",
                    width: "109",
                    height: "139"
                },
                300, "easeOutStrong",
                function() {
                    move($(".c").get(0), {
                            left: "319",
                            top: "-55"
                        },
                        367, "easeBothStrong",
                        function() {
                            move($(".c").get(0), {
                                    top: "84"
                                },
                                333, "easeBothStrong",
                                function() {
                                    move($(".light_big").get(0), {
                                            top: "455",
                                            opacity: "1"
                                        },
                                        300, "easeOutStrong",
                                        function() {
                                            move($(".light_ray").get(0), {
                                                    opacity: "1"
                                                },
                                                300, "easeOutStrong")
                                        });
                                    move($(".light").get(0), {
                                            left: "380",
                                            top: "76",
                                            opacity: "1"
                                        },
                                        300, "easeOutStrong",
                                        function() {
                                            move($(".light_ray2").get(0), {
                                                    opacity: "1"
                                                },
                                                300, "easeOutStrong")
                                        });
                                    setTimeout(function() {
                                            move($(".light2").get(0), {
                                                    left: "483",
                                                    top: "116",
                                                    opacity: "1"
                                                },
                                                300, "easeOutStrong",
                                                function() {
                                                    move($(".light_ray3").get(0), {
                                                            opacity: "1"
                                                        },
                                                        300, "easeOutStrong")
                                                })
                                        },
                                        100);
                                    move($(".qizhongji").get(0), {
                                            left: "387",
                                            top: "0",
                                            opacity: "1"
                                        },
                                        500, "easeOutStrong")
                                })
                        })
                })
        },
        1000);
    setTimeout(function() {
            move($(".s").get(0), {
                    left: "170",
                    top: "86",
                    width: "98",
                    height: "124"
                },
                266, "easeOutStrong",
                function() {
                    move($(".s").get(0), {
                            left: "408",
                            top: "-21"
                        },
                        400, "easeBothStrong",
                        function() {
                            move($(".s").get(0), {
                                    top: "118"
                                },
                                333, "easeBothStrong")
                        })
                });
            move($(".paper").get(0), {
                    top: "0",
                    opacity: "1"
                },
                1000, "easeOut",
                function() {
                    move($(".note").get(0), {
                            opacity: "1"
                        },
                        1000, "easeOut");
                    move($(".works").get(0), {
                            opacity: "1"
                        },
                        1000, "easeOut");
                    move($(".video").get(0), {
                            opacity: "1"
                        },
                        1000, "easeOut");
                    setTimeout(function() {
                            move($(".tool").get(0), {
                                    opacity: "1"
                                },
                                1000, "linear");
                            for (var o = 0; o < $(".moveTitle").length; o++) {
                                move($(".moveTitle").get(o), {
                                        opacity: "1",
                                        top: "0"
                                    },
                                    1000, "backOut")
                            }
                            move($(".pen").get(0), {
                                    left: "80",
                                    top: "120"
                                },
                                300, "linear",
                                function() {
                                    move($(".ruler").get(0), {
                                            left: "114"
                                        },
                                        300, "linear")
                                });
                            move($(".compasses").get(0), {
                                    right: "72",
                                    top: "20"
                                },
                                800, "linear");
                            setTimeout(function() {
                                    for (var p = 0; p < $(".works").find("li").length; p++) {
                                        move($(".works").find("img").get(p), {
                                                opacity: "1"
                                            },
                                            1000, "easeOut");
                                        move($(".works").find(".text").get(p), {
                                                opacity: "1",
                                                top: "0"
                                            },
                                            1000, "easeOut")
                                    }
                                    for (var p = 0; p < $(".video").find("li").length; p++) {
                                        move($(".video").find("li").get(p), {
                                                opacity: "1",
                                                top: "0"
                                            },
                                            1000, "easeOut")
                                    }
                                    $(".contactMark").css("height", $(document).height());
                                    tweenMove({
                                        obj: $(".contactBox").get(0),
                                        oTarget: {
                                            rotateZ: "-50"
                                        },
                                        iTime: 300,
                                        iType: "easeOut",
                                        fnEnd: function() {
                                            setTimeout(function() {
                                                    if ($(".banner").data("off")) {
                                                        function i() {
                                                            tweenMove({
                                                                obj: $(".banner").get(0),
                                                                oTarget: {
                                                                    opacity: "0"
                                                                },
                                                                iTime: 500,
                                                                iType: "easeOut"
                                                            });
                                                            tweenMove({
                                                                obj: $(".bannerMark").get(0),
                                                                oTarget: {
                                                                    opacity: "0"
                                                                },
                                                                iTime: 500,
                                                                iType: "easeOut",
                                                                fnEnd: function() {
                                                                    $(".banner").css("display", "none");
                                                                    $(".bannerMark").css("display", "none")
                                                                }
                                                            })
                                                        }
                                                        $(".banner").css("display", "block").find(".close").on("click", i);
                                                        $(".bannerMark").css("display", "block").on("click", i);
                                                        tweenMove({
                                                            obj: $(".banner").get(0),
                                                            oTarget: {
                                                                opacity: "100"
                                                            },
                                                            iTime: 500,
                                                            iType: "easeOut"
                                                        });
                                                        tweenMove({
                                                            obj: $(".bannerMark").get(0),
                                                            oTarget: {
                                                                opacity: "60"
                                                            },
                                                            iTime: 500,
                                                            iType: "easeOut"
                                                        })
                                                    }
                                                    g()
                                                },
                                                1000)
                                        }
                                    })
                                },
                                600)
                        },
                        400)
                })
        },
        1067);
    setTimeout(function() {
            move($(".s2").get(0), {
                    left: "675",
                    top: "72",
                    width: "83",
                    height: "112"
                },
                266, "easeOutStrong",
                function() {
                    move($(".s2").get(0), {
                            left: "487",
                            top: "8"
                        },
                        400, "easeBothStrong",
                        function() {
                            move($(".s2").get(0), {
                                    top: "147"
                                },
                                333, "easeBothStrong")
                        })
                })
        },
        1135);
    setTimeout(function() {
            move($(".js").get(0), {
                    left: "218",
                    top: "42",
                    width: "175",
                    height: "277"
                },
                500, "easeOutStrong")
        },
        1500);
    setTimeout(function() {
            var i = setInterval(function() {
                    k++;
                    e.css("backgroundPosition", "-" + k * 400 + "px,0");
                    if (k >= 45) {
                        clearInterval(i)
                    }
                },
                80);
            move($(".board").get(0), {
                    opacity: "1"
                },
                300, "linear",
                function() {
                    move(e.get(0), {
                            top: "-282"
                        },
                        2500, "backOut",
                        function() {
                            move($(".newClass").get(0), {
                                    opacity: "1"
                                },
                                500, "linear")
                        })
                })
        },
        1500);
    var h = $(".table").find("a");
    var a = $(".blackBox").find("li");
    var c = 0;
    var m = setInterval(n, 5000);
    for (var j = 0; j < h.length; j++) {
        h.get(j).index = j;
        h.eq(j).on("click",
            function() {
                clearInterval(m);
                m = setInterval(n, 5000);
                h.eq(c).removeClass("active");
                $(this).addClass("active");
                tweenMove({
                    obj: a.get(c),
                    oTarget: {
                        opacity: "0"
                    },
                    iTime: 200,
                    iType: "linear"
                });
                a.eq(c).removeClass("active");
                c = this.index;
                tweenMove({
                    obj: a.get(c),
                    oTarget: {
                        opacity: "100"
                    },
                    iTime: 200,
                    iType: "linear"
                });
                a.eq(c).addClass("active")
            })
    }
    function n() {
        h.eq(c).removeClass("active");
        tweenMove({
            obj: a.get(c),
            oTarget: {
                opacity: "0"
            },
            iTime: 200,
            iType: "linear"
        });
        a.eq(c).removeClass("active");
        c++;
        if (c >= h.length) {
            c = 0
        }
        h.eq(c).addClass("active");
        tweenMove({
            obj: a.get(c),
            oTarget: {
                opacity: "100"
            },
            iTime: 200,
            iType: "linear"
        });
        a.eq(c).addClass("active")
    }
    function g() {
        var p = $(".qin");
        for (var t = 0; t < p.length; t++) {
            var r = p.eq(t).html().split("");
            for (var q = 0; q < r.length; q++) {
                r[q] = "<span>" + r[q] + "</span>"
            }
            p.eq(t).html(r.join(""))
        }
        var w = $(".qin span");
        for (var t = 0; t < w.length; t++) {
            w.eq(t).css("left", w.eq(t).position().left + "px")
        }
        w.css("position", "absolute");
        var x = w.position().top;
        var u = -18;
        var v = 18;
        var s = null;
        w.on("mouseenter", o);
        function o(i) {
            this.parentNode.onmouseout = null;
            this.parentNode.onmousemove = null;
            var i = i || event;
            var z = i.clientY;
            s = $(this);
            this.parentNode.onmousemove = function(F) {
                $(this).find("span").off("mouseenter", o);
                $(this).find("span").on("mouseenter", y);
                var C = F.clientY;
                var G = x + (C - z);
                var B = $(this).find("span");
                var E = s.index();
                B.stop();
                if (G < u || G > v) {
                    B.animate({
                            top: x
                        },
                        500, "easeOutElastic");
                    $(this).find("span").on("mouseenter", o);
                    $(this).find("span").off("mouseenter", y);
                    this.onmouseleave = null;
                    this.onmousemove = null
                } else {
                    for (var D = 0; D < B.length; D++) {
                        if (C > z) {
                            var A = G - Math.abs(D - E);
                            if (A < x) {
                                A = x
                            }
                        } else {
                            if (C < z) {
                                var A = G + Math.abs(D - E);
                                if (A > x) {
                                    A = x
                                }
                            }
                        }
                        B.eq(D).css("top", A + "px")
                    }
                }
                this.onmouseleave = function() {
                    B.animate({
                            top: x
                        },
                        500, "easeOutElastic");
                    $(this).find("span").on("mouseenter", o);
                    $(this).find("span").off("mouseenter", y);
                    this.onmouseleave = null;
                    this.onmousemove = null
                }
            }
        }
        function y() {
            s = $(this)
        }
    }
    var b = document.body.clientWidth;
    var f = 0;
    var d = [[[140, 0, -20], [140, 0, -10]], [[140, 120, 0], [140, 130, 0]], [[360, 340, 320], [360, 350, 340]]];
    var l = [[[0, -20, -40], [0, -10, -20]], [[140, 0, -20], [140, 0, -10]], [[140, 120, 0], [140, 130, 0]]];
    css($(".info").get(0), "rotateZ", 0);
    css($(".qq").get(0), "rotateZ", -5);
    css($(".code").get(0), "rotateZ", -10);
    $(".contact").get(0).bOff = true;
    $(".contact").on("click",
        function() {
            b = document.body.clientWidth;
            if (this.bOff) {
                this.bOff = false;
                $(".contactMark").css("display", "block");
                var o = this;
                var i = true;
                f = 0;
                tweenMove({
                    obj: o,
                    oTarget: {
                        right: b / 2,
                        top: "300"
                    },
                    iTime: 500,
                    iType: "easeOut",
                    fnDuring: function(p, q, r, s) {
                        if ((r > s / 2) && i) {
                            i = false;
                            tweenMove({
                                obj: $(".qq").get(0),
                                oTarget: {
                                    rotateZ: -20
                                },
                                iTime: 500,
                                iType: "easeOut"
                            });
                            tweenMove({
                                obj: $(".code").get(0),
                                oTarget: {
                                    rotateZ: -40
                                },
                                iTime: 500,
                                iType: "easeOut"
                            });
                            tweenMove({
                                obj: $(".contactBox").get(0),
                                oTarget: {
                                    rotateZ: 40
                                },
                                iTime: 300,
                                iType: "easeOut",
                                fnEnd: function() {
                                    tweenMove({
                                        obj: $(".contactBox").get(0),
                                        oTarget: {
                                            rotateZ: -20
                                        },
                                        iTime: 300,
                                        iType: "easeOut",
                                        fnEnd: function() {
                                            tweenMove({
                                                obj: $(".contactBox").get(0),
                                                oTarget: {
                                                    rotateZ: 0
                                                },
                                                iTime: 300,
                                                iType: "easeOut",
                                                fnEnd: function() {
                                                    $(".contactBox").get(0).bOff = true;
                                                    $(".contactMark").get(0).onclick = function() {
                                                        $(".contactBox").get(0).onclick = null;
                                                        $(".contactMark").get(0).onclick = null;
                                                        $(".contactBox").get(0).onmouseleave = null;
                                                        $(".contactBox").get(0).onmouseenter = null;
                                                        f = 0;
                                                        d = [[[140, 0, -20], [140, 0, -10]], [[140, 120, 0], [140, 130, 0]], [[360, 340, 320], [360, 350, 340]]];
                                                        l = [[[0, -20, -40], [0, -10, -20]], [[140, 0, -20], [140, 0, -10]], [[140, 120, 0], [140, 130, 0]]];
                                                        tweenMove({
                                                            obj: $(".contactMark").get(0),
                                                            oTarget: {
                                                                opacity: 0
                                                            },
                                                            iTime: 200,
                                                            iType: "linear"
                                                        });
                                                        tweenMove({
                                                            obj: $(".contact").get(0),
                                                            oTarget: {
                                                                opacity: 0
                                                            },
                                                            iTime: 200,
                                                            iType: "linear",
                                                            fnEnd: function() {
                                                                css($(".contact").get(0), "right", -200);
                                                                css($(".contact").get(0), "top", 200);
                                                                css($(".contactBox").get(0), "rotateZ", -50);
                                                                css($(".info").get(0), "rotateZ", 0);
                                                                css($(".qq").get(0), "rotateZ", -5);
                                                                css($(".code").get(0), "rotateZ", -10);
                                                                tweenMove({
                                                                    obj: $(".contact").get(0),
                                                                    oTarget: {
                                                                        opacity: 100,
                                                                        right: -80
                                                                    },
                                                                    iTime: 600,
                                                                    iType: "easeOutStrong"
                                                                });
                                                                $(".contactMark").css("display", "none");
                                                                css($(".contactMark").get(0), "opacity", 100);
                                                                this.bOff = true
                                                            }
                                                        })
                                                    };
                                                    $(".contactBox").get(0).onclick = function() {
                                                        var u = this;
                                                        if (this.bOff) {
                                                            this.bOff = false;
                                                            tweenMove({
                                                                obj: $(".contactBox").find("div").get(0),
                                                                oTarget: {
                                                                    rotateZ: d[f % 3][1][0]
                                                                },
                                                                iTime: 300,
                                                                iType: "easeOut",
                                                                fnEnd: function() {
                                                                    u.bOff = true
                                                                }
                                                            });
                                                            tweenMove({
                                                                obj: $(".contactBox").find("div").get(1),
                                                                oTarget: {
                                                                    rotateZ: d[f % 3][1][1]
                                                                },
                                                                iTime: 300,
                                                                iType: "easeOut"
                                                            });
                                                            tweenMove({
                                                                obj: $(".contactBox").find("div").get(2),
                                                                oTarget: {
                                                                    rotateZ: d[f % 3][1][2]
                                                                },
                                                                iTime: 300,
                                                                iType: "easeOut"
                                                            });
                                                            for (var t = 0; t < d[f % 3][0].length; t++) {
                                                                d[f % 3][0][t] = d[f % 3][0][t] + 360;
                                                                d[f % 3][1][t] = d[f % 3][1][t] + 360;
                                                                l[f % 3][0][t] = l[f % 3][0][t] + 360;
                                                                l[f % 3][1][t] = l[f % 3][1][t] + 360
                                                            }
                                                            f++
                                                        }
                                                    };
                                                    $("#contact span").on("mousedown",
                                                        function(t) {
                                                            var t = event || t;
                                                            if (t.stopPropagation) {
                                                                t.stopPropagation()
                                                            } else {
                                                                t.cancelBubble = true
                                                            }
                                                            $(".contactBox").get(0).onclick = null;
                                                            $("body").get(0).onmouseup = function() {
                                                                $("body").get(0).onmouseup = null;
                                                                setTimeout(function() {
                                                                        $(".contactBox").get(0).onclick = function() {
                                                                            var v = this;
                                                                            if (this.bOff) {
                                                                                this.bOff = false;
                                                                                tweenMove({
                                                                                    obj: $(".contactBox").find("div").get(0),
                                                                                    oTarget: {
                                                                                        rotateZ: d[f % 3][1][0]
                                                                                    },
                                                                                    iTime: 300,
                                                                                    iType: "easeOut",
                                                                                    fnEnd: function() {
                                                                                        v.bOff = true
                                                                                    }
                                                                                });
                                                                                tweenMove({
                                                                                    obj: $(".contactBox").find("div").get(1),
                                                                                    oTarget: {
                                                                                        rotateZ: d[f % 3][1][1]
                                                                                    },
                                                                                    iTime: 300,
                                                                                    iType: "easeOut"
                                                                                });
                                                                                tweenMove({
                                                                                    obj: $(".contactBox").find("div").get(2),
                                                                                    oTarget: {
                                                                                        rotateZ: d[f % 3][1][2]
                                                                                    },
                                                                                    iTime: 300,
                                                                                    iType: "easeOut"
                                                                                });
                                                                                for (var u = 0; u < d[f % 3][0].length; u++) {
                                                                                    d[f % 3][0][u] = d[f % 3][0][u] + 360;
                                                                                    d[f % 3][1][u] = d[f % 3][1][u] + 360;
                                                                                    l[f % 3][0][u] = l[f % 3][0][u] + 360;
                                                                                    l[f % 3][1][u] = l[f % 3][1][u] + 360
                                                                                }
                                                                                f++
                                                                            }
                                                                        }
                                                                    },
                                                                    12)
                                                            }
                                                        });
                                                    $(".contactBox").get(0).onmouseenter = function() {
                                                        var t = this;
                                                        tweenMove({
                                                            obj: $(".contactBox").find("div").get(0),
                                                            oTarget: {
                                                                rotateZ: l[f % 3][1][0]
                                                            },
                                                            iTime: 200,
                                                            iType: "easeOut",
                                                            fnEnd: function() {
                                                                t.bOff = true
                                                            }
                                                        });
                                                        tweenMove({
                                                            obj: $(".contactBox").find("div").get(1),
                                                            oTarget: {
                                                                rotateZ: l[f % 3][1][1]
                                                            },
                                                            iTime: 200,
                                                            iType: "easeOut"
                                                        });
                                                        tweenMove({
                                                            obj: $(".contactBox").find("div").get(2),
                                                            oTarget: {
                                                                rotateZ: l[f % 3][1][2]
                                                            },
                                                            iTime: 200,
                                                            iType: "easeOut"
                                                        })
                                                    };
                                                    $(".contactBox").get(0).onmouseleave = function() {
                                                        var t = this;
                                                        tweenMove({
                                                            obj: $(".contactBox").find("div").get(0),
                                                            oTarget: {
                                                                rotateZ: l[f % 3][0][0]
                                                            },
                                                            iTime: 200,
                                                            iType: "easeOut",
                                                            fnEnd: function() {
                                                                t.bOff = true
                                                            }
                                                        });
                                                        tweenMove({
                                                            obj: $(".contactBox").find("div").get(1),
                                                            oTarget: {
                                                                rotateZ: l[f % 3][0][1]
                                                            },
                                                            iTime: 200,
                                                            iType: "easeOut"
                                                        });
                                                        tweenMove({
                                                            obj: $(".contactBox").find("div").get(2),
                                                            oTarget: {
                                                                rotateZ: l[f % 3][0][2]
                                                            },
                                                            iTime: 200,
                                                            iType: "easeOut"
                                                        })
                                                    }
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    }
                });
                tweenMove({
                    obj: $(".contactBox").get(0),
                    oTarget: {
                        rotateZ: -100
                    },
                    iTime: 100,
                    iType: "linear"
                })
            }
        })
};