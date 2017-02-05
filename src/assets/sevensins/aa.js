/**
 * Created by seven sins on 2/6/2017.
 */
function isIE() {
    return window.ActiveXObject || "ActiveXObject" in window ? !0 : !1
}
function s(e) {
    return document.getElementById(e)
}
function addClass(e, t) {
    var o = e.className.split(" ");
    if (!e.className) return void(e.className = t);
    for (var n = 0; n < o.length; n++) if (o[n] === t) return;
    e.className += " " + t
}
function removeClass(e, t) {
    var o = e.className.split(" ");
    if (e.className) for (var n = 0; n < o.length; n++) if (o[n] === t) {
        o.splice(n, 1),
            e.className = o.join(" ");
        break
    }
}
function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
        sh: document.body.scrollHeight
    }
}
function bind(e, t, o) {
    e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent("on" + t,
            function() {
                o.call(e)
            })
}
function remove(e) {
    e.parentNode.removeChild(e)
}
function getByClass(e, t, o) {
    for (var n = e.getElementsByTagName(t), a = [], i = new RegExp("(^|\\s)" + o + "(\\s|$)"), s = 0; s < n.length; s++) i.test(n[s].className) && a.push(n[s]);
    return a
}
function getByParent(e, t, o) {
    for (var n = new RegExp("(^|\\s)" + o + "(\\s|$)"); e.parentNode;) if (e.parentNode.tagName != t) e = e.parentNode;
    else {
        if (n.test(e.parentNode.className)) return e.parentNode;
        e = e.parentNode
    }
}
function stopPP(e) {
    bind(e, "mousedown",
        function(e) {
            var e = e || event;
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        })
}
function getTop(e) {
    for (var t = 0; e;) t += e.offsetTop,
        e = e.offsetParent;
    return t
}
function getLeft(e) {
    for (var t = 0; e;) t += e.offsetLeft,
        e = e.offsetParent;
    return t
}
function stopTop(e, t, o) {
    bind(window, "scroll",
        function() {
            var t = document.documentElement.scrollTop || document.body.scrollTop,
                n = n || 0;
            e.Top = e.Top || getTop(e),
                e.Left = getLeft(e),
                e.itop = e.itop || e.offsetTop,
                e.ileft = e.ileft || e.offsetLeft,
                e.Height = e.Height || e.offsetHeight,
                e.Top - t < n ? addClass(e, "active") : t < e.Top && removeClass(e, "active"),
            o && t > o - e.Height && removeClass(e, "active")
        })
}
function getNum(e) {
    for (var t = e.min || 0,
             o = e.num,
             n = e.max,
             a = e.sort,
             i = [], s = {}; i.length < o;) {
        var r = Math.round(Math.random() * n); ! s[r] && r > t && (i.push(r), s[r] = 1)
    }
    return ">" == a ? (i.sort(function(e, t) {
            return t - e
        }), i) : "<" == a ? (i.sort(function(e, t) {
                return e - t
            }), i) : i
}
function showAlert(e) {
    function t() {
        if ($("#mark").remove(), document.getElementById("mark")) return ! 1;
        var e = document.createElement("div");
        e.className = "mark",
            e.id = "mark",
        e.dataset && (e.dataset.closem = "#buyAlert"),
            e.style.height = Math.max(document.documentElement.clientHeight, document.body.scrollHeight) + "px",
            $('<div class="buyAlert" id="buyAlert">			<div class="alertTit"><span>寮€閫歏IP鏈嶅姟</span><div class="closeBtn" data-closem="#buyAlert">&nbsp;</div></div>			<div id="notice">				<h3 style="height: 60px; line-height: 60px; text-align: center; color:#656565; font-size: 20px; font-weight: normal;">濡欏懗VIP浼氬憳璐拱椤荤煡</h3>				<div style="width: 520px; height: 220px; margin: 0 auto 5px; color: #777; font-size: 14px;">				涓€銆乂IP浼氬憳涓哄勾璐逛細鍛橈紝鑷宠喘涔版棩璧�365澶╁唴鎮ㄥ皢浜湁VIP浼氬憳鐩綍鍐呮墍鏈夎棰戠殑瑙傜湅鏉冿紱<br/>浜屻€乂IP浼氬憳涓鸿櫄鎷熺墿鍝侊紝涓€缁忚喘涔帮紝涓嶆敮鎸侀€€璐癸紱<br/>涓夈€佸浜庢伓鎰忓埛娴侀噺鐨勮涓猴紝灏嗙粰浜堜弗鍘夌殑澶勭綒锛�<br/>鍥涖€佹敮鎸佸湪绾胯鐪嬶紝涓嶆敮鎸佷笅杞斤紱<br/>浜斻€佸湪绾跨殑瑙嗛涓嶆敮鎸佺紦瀛樼绾胯鐪嬶紱<br/>鍏€乂IP浼氬憳瑙嗛鏆備笉鏀寔绉诲姩绔鐪嬶紱<br/>涓冦€佽棰戞殏涓嶆敮鎸佸€嶉€熸挱鏀撅紱</div>				<div style="padding-top: 20px; width: 520px; margin: 0 auto 10px; text-align: center; border-top: 1px solid #d7d7d7;">					<a href="javascript:;" id="successBtn" style="display: inline-block; padding: 10px 15px; background-color: #fceef1; border: 1px solid #d8d8d8; border-radius: 10px; color: #848484;">鎴戝凡闃呰骞跺悓鎰忚喘涔�</a>				</div>				<p style="line-height:14px; font-size:12px; text-align:center;">璇峰湪30鍒嗛挓鍐呭畬鎴愭敮浠橈紝瓒呮椂璁㈠崟灏嗚嚜鍔ㄥ彇娑�.</p>			</div>			</div>').appendTo("body"),
            setTimeout(function() {
                    document.body.appendChild(e),
                        $("#mark").data("closem", "#buyAlert"),
                        move($("#buyAlert").get(0), {
                                marginTop: -($("#buyAlert").outerHeight() / 2),
                                opacity: 1
                            },
                            300, "easeOut")
                },
                500),
            $("#successBtn").on("click",
                function() {
                    $("#notice").remove(),
                        o()
                })
    }
    function o() {
        $.ajax({
            type: "post",
            url: "/api.php/goods/getUserVipPrice"
        }).success(function(e) {
            a = (e.goodsPrice / 100).toFixed(2),
                s = (e.vipPrice / 100).toFixed(2),
                i = (a - s).toFixed(2),
            i > 0 && (r = "<h6>浜茬埍鐨勭敤鎴凤紝鎮ㄦ槸鎴戜滑鐨勮€佷細鍛橈紝鎴戜滑缁欐偍浼樻儬" + i + "鍏�<br/>浣犲疄闄呭彧闇€鏀粯<em>" + s + "</em>鍏冨嵆鍙紒</h6>", d = ""),
                n()
        }).error(function(e) {
            test.clickArea.timealert({
                target: e
            })
        })
    }
    function n() {
        $('<div class="orderInf">				<h5 ' + d + ">搴斾粯閲戦 : <span>" + a + "鍏�</span></h5>" + r + '			</div>			<div class="paySelect">				<div class="selectMenu">					<dfn data-showpay="#wechart" data-chiosewechart="#wechart">					<i class="wechart"></i>					<span>寰俊鏀粯</span>					</dfn>					<dfn data-showpay="#alipay" data-chiosealipay="#alipay"><i class="alipay"></i><span>鏀粯瀹�</span></dfn>				</div>				<div class="default way"><i>&nbsp;</i><span>璇烽€夋嫨鏀粯鏂瑰紡</span></div>				<div class="payWechart way" id="wechart"><span>璇蜂娇鐢ㄥ井淇℃壂涓€鎵�</br>鎵弿浜岀淮鐮佹敮浠�</span></div>				<div class="payAlipay way" id="alipay"><a href="#"><img src="' + phpData + 'ie/images/vip/buyNow.png"></a><span>鐐瑰嚮鐜板湪鏀粯璺宠浆鍒版敮浠樺疂缃戠珯杩涜鏀粯</span></div>			</div>			<p style="line-height:14px; font-size:12px; text-align:center; margin-top:-10px;">璇峰湪30鍒嗛挓鍐呭畬鎴愭敮浠橈紝瓒呮椂璁㈠崟灏嗚嚜鍔ㄥ彇娑�.</p>').appendTo("#buyAlert")
    }
    var a = 0,
        i = 0,
        s = 0,
        r = "",
        d = 'style="padding-top:30px;"';
    t()
}
function showSuccess() {
    $("#mark").remove();
    var e = document.createElement("div");
    e.className = "mark",
        e.id = "mark",
        e.style.height = Math.max(document.documentElement.clientHeight, document.body.scrollHeight) + "px",
        $('<div class="buySuccessAlert" id="buySuccess">		<div class="alertTit"><span>寮€閫歏IP鏈嶅姟</span></div>		<div class="successPrompt"><img src="' + phpData + 'ie/images/vip/success.png"><span>			<em>鎭枩锛�</em></br>			<dfn>鎴愬姛寮€閫氬鍛砎IP浼氬憳</dfn>		</span></div>		<div class="successBtn"><a href="/index.php/user/vipgroup">&nbsp;</a><p>5绉� 鍚庤嚜鍔ㄨ烦杞€︹€�</p></div>	</div>').appendTo("body"),
        document.body.appendChild(e),
        setTimeout(function() {
                move($("#buySuccess").get(0), {
                        opacity: 1
                    },
                    1, "easeOut");
                var e = $("#buySuccess .successBtn").find("p").eq(0),
                    t = 5,
                    o = setInterval(function() {
                            t--,
                                e.html(t + "绉� 鍚庤嚜鍔ㄨ烦杞�"),
                            0 >= t && (clearInterval(o), window.location.href = "/index.php/user/vipgroup")
                        },
                        1e3)
            },
            10)
}
function getOrderStatus(e) {
    $.ajax({
        url: "/api.php/Order/status/orderId/" + e
    }).success(function() {
        showSuccess()
    }).error(function() {
        clearTimeout($timer),
            $timer = setTimeout(function() {
                    getOrderStatus(e)
                },
                3e3)
    })
}
Array.prototype.indexOf = function(e) {
    for (var t = 0; t < this.length; t++) if (this[t] == e) return t;
    return - 1
},
    Array.prototype.remove = function(e) {
        var t = this.indexOf(e);
        t > -1 && this.splice(t, 1)
    };
var loginType = !1,
    test = {
        "int": function() {
            function e() {
                var e, t = {},
                    n = navigator.userAgent.toLowerCase();
                return (e = n.match(/msie ([\d.]+)/)) ? t.ie = e[1] : (e = n.match(/firefox\/([\d.]+)/)) ? t.firefox = e[1] : (e = n.match(/chrome\/([\d.]+)/)) ? t.chrome = e[1] : (e = n.match(/opera.([\d.]+)/)) ? t.opera = e[1] : (e = n.match(/version\/([\d.]+).*safari/)) ? t.safari = e[1] : 0,
                    (e = n.match(/rv:([\d.]+)/)) ? t.ie11 = e[1] : "",
                t.firefox && (t.firefox = Number(t.firefox.substring(0, 2))),
                t.chrome && (t.chrome = Number(t.chrome.substring(0, 2))),
                t.ie && (o = '<input id="passWord" type="password" class="inp"/>'),
                    t
            }
            var t = test;
            t.images = [],
                t.bindevent();
            var o = '<input id="passWord" type="text" onfocus="this.type=\'password\'" class="inp"/>';
            e(),
                t.loginText = $('<div class="loginBox" id="loginBtn">			<div class="loginTop">				<div class="closeBtn" data-closem="#loginBtn">&nbsp;</div>				<div class="titTop"><span>浼氬憳鐧诲綍</span><em>杩樻病鏈夎处鍙凤紵 <a href="#" data-loginboxshowreg="javascript">绔嬪嵆娉ㄥ唽</a></em></div>			</div>			<div class="loginCenter">				<label class="normal">					<input id="userName" maxlength="20" type="text" class="inp"/>					<span data-focu="placeholder" data-verification="langer:20" >鐢ㄦ埛鍚�</span><dfn></dfn>				</label>				<input type="hidden">        		<label class="normal">' + o + '					<span data-focu="placeholder">瀵嗙爜</span><dfn></dfn>				</label>        		<div class="verification">					<div class="code">						<div class="codeBg">							<img data-codedrag="javascript" src="" class="codeLogo" alt=""/>						</div>						<div class="codeSuccess">							<div class="codeOk">								<img src="' + url + 'ie/images/ok.png" alt=""/>							</div>						</div>						<div class="bar">							<img style="position: relative;" data-codedrag="javascript" id="codeBtn" src="' + url + 'ie/images/barBtn.png" alt=""/>						</div>						<div class="prompt">							<div>								<p class="drag">鎷栧姩鎸夐挳瀹屾垚楠岃瘉</p>							</div>							<div class="promptNo">								<p class="drag">楠岃瘉閿欒锛岃閲嶆柊鎷栧姩</p>							</div>							<div class="promptOk">								<p class="drag">楠岃瘉鎴愬姛</p>							</div>							<em class="resetCode">鍒锋柊</em>						</div>					</div>					<label class="normal"><input id="code" name="code" type="text" class="inp inpCode"/><span 										data-focu="placeholder">楠岃瘉鐮�</span><dfn></dfn></label>				</div>			</div>			<div class="loginBottom">				<div class="btn" style="margin-top:15px;"><button data-login="/api.php/user/login" class="loginBtn">鐧诲綍</button><label><input id="continued" type="checkbox" class="chiose"><em class="text">7澶╁唴鍏嶇櫥褰�</em></label><em class="text"> | <a href="/index.php/index/findpass">蹇樿瀵嗙爜?</a></em></div>			</div>		</div><div class="mark" id="mark" data-closem="#loginBtn"></div>'),
                t.regText = $('<div class="loginBox" id="regBtn">			<div class="loginTop">				<div class="closeBtn" data-closem="#regBtn">&nbsp;</div>				<div class="titTop"><span>娉ㄥ唽</span><em>宸叉湁璐﹀彿锛� <a href="#" data-regboxshowlogin="javascript">椹笂鐧诲綍</a></em></div>			</div>			<div class="loginCenter">				<label class="normal">					<input id="regUserName" maxlength="20" type="text" class="inp"/>					<span data-focu="placeholder" data-verification="langer:20,type:eng" >鐢ㄦ埛鍚�</span>					<dfn></dfn>				</label>				<input type="hidden">        		<label class="normal">					<input id="regPassWord" type="text" onfocus="this.type=\'password\'" class="inp"/>					<span data-focu="placeholder">璁剧疆瀵嗙爜</span><dfn></dfn>				</label>				<input type="hidden">				<label class="normal">					<input id="regRePassWord" type="text" onfocus="this.type=\'password\'" class="inp"/>					<span data-focu="placeholder" data-verification="surepassword">纭瀵嗙爜</span><dfn></dfn>				</label>				<label class="normal">					<input id="regEmail" type="text" class="inp"/>					<span data-focu="placeholder">閭</span><dfn></dfn>				</label>				<div class="verification">					<div class="code">						<div class="codeBg">							<img data-codedrag="javascript" src="" class="codeLogo" alt=""/>						</div>						<div class="codeSuccess">							<div class="codeOk">								<img src="' + url + 'ie/images/ok.png" alt=""/>							</div>						</div>						<div class="bar">							<img style="position: relative;" src="' + url + 'ie/images/barBtn.png" alt=""/>						</div>						<div class="prompt">							<div>								<p class="drag">鎷栧姩鎸夐挳瀹屾垚楠岃瘉</p>								<em class="resetCode">鍒锋柊</em>							</div>							<div class="promptNo">								<p class="drag">楠岃瘉閿欒锛岃閲嶆柊鎷栧姩</p>							</div>							<div class="promptOk">								<p class="drag">楠岃瘉鎴愬姛</p>							</div>							<em class="resetCode">鍒锋柊</em>						</div>					</div>					<label class="normal"><input id="code" name="code" type="text" class="inp inpCode"/><span data-focu="placeholder">楠岃瘉鐮�</span><dfn></dfn></label>				</div>			</div>			<div class="loginBottom reg">				<button class="regBtn" data-reg="/api.php/user/register"></button>			</div>		</div><div class="mark" id="mark" data-closem="#regBtn"></div>'),
                $("input").on("focus",
                    function() {
                        test.focuArea.placeholder({
                            obj: $(this).siblings("span")
                        })
                    }),
                $("input").each(function(e, t) {
                    "" != $(t).val() && $(t).siblings("span").hide()
                });
            var n = null,
                a = null,
                i = $("body").scrollTop(),
                s = !0;
            t.payurl = "/api.php/order/pay",
                t.payform = null,
                t.paywechartOff = !0,
                t.payalipayOff = !0,
                t.goodsId = 0,
                t.logoX = null,
                t.loginOff = !0,
                t.regOff = !0,
                t.orderId = 0,
            i > 1400 && s && (s = !1, $(".backTop").animate({
                    opacity: 1
                },
                500)),
                window.onresize = function() {
                    $(window).width() < 1200 && $("body").css("overflow", "scroll"),
                        $("#loginBtn").get(0) ? (move($("#loginBtn").get(0), {
                                    top: ($(window).height() - $("#loginBtn").outerHeight()) / 2
                                },
                                300, "backOut"), move($("#regBtn").get(0), {
                                    top: ($(window).height() - $("#regBtn").outerHeight()) / 2
                                },
                                300, "backOut")) : $("#regBtn").get(0) && (move($("#regBtn").get(0), {
                                    top: ($(window).height() - $("#regBtn").outerHeight()) / 2
                                },
                                300, "backOut"), move($("#regBtn").get(0), {
                                    top: ($(window).height() - $("#regBtn").outerHeight()) / 2
                                },
                                300, "backOut"))
                },
                $(window).scroll(function() {
                    clearInterval(n),
                        clearTimeout(a),
                        n = setInterval(function() {
                                i != $(window).scrollTop() && ($(window).scrollTop() > 300 && s ? (s = !1, $(".backTop").show()) : $(window).scrollTop() < 200 && !s && (s = !0, $(".backTop").hide()))
                            },
                            10),
                        a = setTimeout(function() {
                                i = $(window).scrollTop(),
                                    clearInterval(n)
                            },
                            200)
                })
        },
        bindevent: function() {
            {
                var e = test;
                downY = null
            }
            $(document).on("mousedown",
                function(t) {
                    function o(n) {
                        if (n == document) return ! 1;
                        i = n.dataset || $(n).data();
                        for (a in i) r++;
                        if (1 > r) {
                            if (s = n.parentNode, s == document) return ! 1;
                            o(s),
                                r = 0
                        } else for (b in i) e.clickArea[b] && e.clickArea[b]({
                            obj: s,
                            ev: t,
                            target: i[b]
                        })
                    }
                    var t = t || event,
                        n = t.target || t.srcElement,
                        i = n.dataset || $(n).data(),
                        s = n.parentNode,
                        r = 0;
                    for (a in i) r++;
                    if (1 > r) o(s),
                        r = 0;
                    else for (b in i) e.clickArea[b] && e.clickArea[b]({
                        obj: n,
                        ev: t,
                        target: i[b]
                    })
                }),
                $(document).on("mouseover",
                    function(t) {
                        function o(n) {
                            if (n == document) return ! 1;
                            i = n.dataset || $(n).data();
                            for (a in i) r++;
                            if (1 > r) {
                                if (s = n.parentNode, s == document) return ! 1;
                                o(s),
                                    r = 0
                            } else for (b in i) e.overArea[b] && e.overArea[b]({
                                obj: s,
                                ev: t,
                                target: i[b]
                            })
                        }
                        var t = t || event,
                            n = t.target || t.srcElement,
                            i = n.dataset || $(n).data(),
                            s = n.parentNode,
                            r = 0;
                        for (a in i) r++;
                        if (1 > r) o(s),
                            r = 0;
                        else for (b in i) e.overArea[b] && e.overArea[b]({
                            obj: n,
                            ev: t,
                            target: i[b]
                        })
                    }),
                $(document).on("mouseout",
                    function(t) {
                        function o(n) {
                            if (n == document) return ! 1;
                            i = n.dataset || $(n).data();
                            for (a in i) r++;
                            if (1 > r) {
                                if (s = n.parentNode, s == document) return ! 1;
                                o(s),
                                    r = 0
                            } else for (b in i) e.outArea[b] && e.outArea[b]({
                                obj: s,
                                ev: t,
                                target: i[b]
                            })
                        }
                        var t = t || event,
                            n = t.target || t.srcElement,
                            i = n.dataset || $(n).data(),
                            s = n.parentNode,
                            r = 0;
                        for (a in i) r++;
                        if (1 > r) o(s),
                            r = 0;
                        else for (b in i) e.outArea[b] && e.outArea[b]({
                            obj: n,
                            ev: t,
                            target: i[b]
                        })
                    }),
                $(document).on("change",
                    function(t) {
                        function o(n) {
                            if (n == document) return ! 1;
                            i = n.dataset || $(n).data();
                            for (a in i) r++;
                            if (1 > r) {
                                if (s = n.parentNode, s == document) return ! 1;
                                o(s),
                                    r = 0
                            } else for (b in i) e.changeArea[b] && e.changeArea[b]({
                                obj: s,
                                ev: t,
                                target: i[b]
                            })
                        }
                        var t = t || event,
                            n = t.target || t.srcElement,
                            i = n.dataset || $(n).data(),
                            s = n.parentNode,
                            r = 0;
                        for (a in i) r++;
                        if (1 > r) o(s),
                            r = 0;
                        else for (b in i) e.changeArea[b] && e.changeArea[b]({
                            obj: n,
                            ev: t,
                            target: i[b]
                        })
                    })
        }
    };
test.int(),
    test.changeArea = {},
    test.clickArea = {
        drag: function(e) {
            var t = e.obj,
                o = e.ev;
            t.style.position = "absolute";
            var n = o.clientX,
                a = o.clientY,
                i = n - t.offsetLeft,
                s = a - t.offsetTop;
            t.onmousemove = document.onmousemove = function(e) {
                var e = e || event;
                t.style.left = e.clientX - i + "px",
                    t.style.top = e.clientY - s + "px"
            },
                t.onmouseup = document.onmouseup = function() {
                    t.onmousemove = document.onmousemove = null
                }
        },
        backtop: function() {
            $("body,html").scrollTop("0")
        },
        scrollto: function(e) {
            $(e.obj).siblings().removeClass("active"),
                $(e.obj).addClass("active"),
                $("body,html").animate({
                        scrollTop: $(e.target).offset().top - Number($(e.obj).data("revised"))
                    },
                    10)
        },
        activeclass: function(e) {
            function t() {
                $(e.obj).removeClass("active"),
                    test.clickArea.alertp({
                        obj: e.obj
                    }),
                    $(e.obj).unbind("mouseup", t)
            }
            return $(e.obj).hasClass(e.target) ? !1 : ($(e.obj).addClass(e.target), void $(e.obj).bind("mouseup", t))
        },
        leaf: function(e) {
            var t = $(e.obj).parents(".bookMain"),
                o = $(e.obj);
            return "sibling" == e.target && $(e.obj).data("target") ? o = t.find(".tabMain").eq(Number($(e.obj).data("target")) + 1) : "sibling" == e.target && (o = t.find(".tabMain").eq(Number($(e.obj).data("target")) + 1)),
                o.hasClass("active") ? !1 : (t.find(".tabMain").removeClass("active"), o.hasClass("left") ? ($.each(t.find(".tabMain"),
                            function(e, t) {
                                $(t).parent().index() >= o.parent().index() && ($(t).removeClass("left"), $(t).css("left", "auto"))
                            }), o.addClass("active"), t.find(".tabMain").eq(1).css("left", 0)) : 2 == o.index() || 0 == o.parent().index() ? ($.each(t.find(".tabMain"),
                                function(e, t) {
                                    $(t).removeClass("left"),
                                        $(t).css("left", "auto")
                                }), o.addClass("active"), t.find(".tabMain").eq(1).css("left", 0)) : ($.each(t.find(".tabMain"),
                                function(e, t) {
                                    return $(t).css("left", $(t).css("right")),
                                        $(t).addClass("left"),
                                        $(t).parent().index() == o.parent().index() - 1 ? !1 : void 0
                                }), o.addClass("active"), t.find(".tabMain").eq(1).css("left", 0)), o.parent().siblings(".paper").animate({
                            zIndex: 0
                        },
                        300), void o.parent().animate({
                            zIndex: 11
                        },
                        300))
        },
        alertm: function(e) {
            if ($("#mark").remove(), document.getElementById("mark")) return ! 1;
            var t = document.createElement("div");
            t.className = "mark",
                t.id = "mark",
            t.dataset && (t.dataset.closem = "#popup"),
                t.style.height = Math.max(document.documentElement.clientHeight, document.body.scrollHeight) + "px",
                t.innerHTML = '<div class="popup" id="popup" data-stopup="javascript">							<div class="close" data-closem="#popup">&nbsp;</div>							<div class="message">' + e.target + '</div>							<div class="btn">								<div class="confirm" data-closem="#popup">&nbsp;</div>								<div class="cancel" data-closem="#popup">&nbsp;</div>							</div>						</div>',
                document.body.appendChild(t),
                setTimeout(function() {
                        $("#mark").data("closem", "#popup"),
                            $("#mark .popup").css("marginTop", -($("#mark .popup").outerHeight() / 2)),
                            $("#mark .popup").animate({
                                    marginTop: -($("#mark .popup").outerHeight() / 2),
                                    opacity: 1
                                },
                                300)
                    },
                    10)
        },
        timealert: function(e) {
            if ($("#mark").remove(), document.getElementById("mark")) return ! 1;
            var t = document.createElement("div"),
                o = e.time || 3e3,
                n = null;
            t.className = "mark",
                t.id = "mark",
            t.dataset && (t.dataset.closem = "#popup"),
                t.style.height = Math.max(document.documentElement.clientHeight, document.body.scrollHeight) + "px",
                t.innerHTML = '<div class="popupSuccess" id="popup" data-stopup="javascript">							<div class="message">' + e.target + "</div>						</div>",
                document.body.appendChild(t),
                setTimeout(function() {
                        $("#mark").data("closem", "#popup"),
                            $("#mark").css({
                                zIndex: "999",
                                display: "block"
                            }),
                            $("#mark .popupSuccess").css("marginTop", -($("#mark .popupSuccess").outerHeight() / 2 + 100)),
                            $("#mark .popupSuccess").animate({
                                    marginTop: -($("#mark .popupSuccess").outerHeight() / 2),
                                    opacity: 1
                                },
                                300)
                    },
                    10),
                n = setTimeout(function() {
                        test.clickArea.closem({
                            target: "#popup"
                        }),
                        e.fnEnd && e.fnEnd()
                    },
                    o),
                $("#mark").on("click",
                    function() {
                        clearTimeout(n),
                        e.fnEnd && e.fnEnd()
                    }),
                document.onkeydown = function(e) {
                    var e = e || event;
                    13 == e.keyCode && test.clickArea.closem({
                        target: "#popup"
                    })
                }
        },
        timealerterr: function(e) {
            if ($("#mark").remove(), document.getElementById("mark")) return ! 1;
            var t = document.createElement("div"),
                o = null,
                n = e.time || 3e3;
            t.className = "mark",
                t.id = "mark",
            t.dataset && (t.dataset.closem = "#popup"),
                t.style.height = Math.max(document.documentElement.clientHeight, document.body.scrollHeight) + "px",
                t.innerHTML = '<div class="popupError" id="popup" data-stopup="javascript">							<div class="message">' + e.target + "</div>						</div>",
                document.body.appendChild(t),
                setTimeout(function() {
                        $("#mark").data("closem", "#popup"),
                            $("#mark").css({
                                zIndex: "999",
                                display: "block"
                            }),
                            $("#mark .popupError").css("marginTop", -($("#mark .popupError").outerHeight() / 2 + 100)),
                            $("#mark .popupError").animate({
                                    marginTop: -($("#mark .popupError").outerHeight() / 2),
                                    opacity: 1
                                },
                                300)
                    },
                    10),
                o = setTimeout(function() {
                        test.clickArea.closem({
                            target: "#popup"
                        }),
                        e.fnEnd && e.fnEnd()
                    },
                    n),
                $("#mark").on("click",
                    function() {
                        clearTimeout(o),
                        e.fnEnd && e.fnEnd()
                    }),
                document.onkeydown = function(e) {
                    var e = e || event;
                    13 == e.keyCode && test.clickArea.closem({
                        target: "#popup"
                    })
                }
        },
        warnin: function(e) {
            if ($("#mark").remove(), document.getElementById("mark")) return ! 1;
            var t = document.createElement("div"),
                o = e.width || 280;
            t.className = "mark",
                t.id = "mark",
            t.dataset && (t.dataset.closem = "#popup"),
                t.style.height = Math.max(document.documentElement.clientHeight, document.body.scrollHeight) + "px",
                t.innerHTML = '<div class="popup" id="popup" style="width:' + o + 'px;" data-stopup="javascript">							<div class="close" data-closem="#popup">&nbsp;</div>							<div class="message" style="text-align:center">' + e.target + '</div>							<div class="btn">							<div class="confirm" data-closem="#popup" style="margin:0px auto; float:none;">&nbsp;</div>							</div>						</div>',
                document.body.appendChild(t),
                setTimeout(function() {
                        $("#mark").data("closem", "#popup"),
                            $("#mark .popup").css("marginTop", -($("#mark .popup").outerHeight() / 2)),
                            $("#mark .popup").animate({
                                    marginTop: -($("#mark .popup").outerHeight() / 2),
                                    opacity: 1
                                },
                                300),
                            document.onkeydown = function(e) {
                                var e = e || event;
                                13 == e.keyCode && test.clickArea.closem({
                                    target: "#popup"
                                })
                            }
                    },
                    10)
        },
        alertp: function(e) {
            if ($("#mark").remove(), document.getElementById("mark")) return ! 1;
            var t = document.createElement("div");
            t.className = "markpop",
                t.id = "mark",
            t.dataset && (t.dataset.closem = "#popup"),
                t.style.height = Math.max(document.documentElement.clientHeight, document.body.scrollHeight) + "px",
                t.innerHTML = '<div class="popup" id="popup" data-stopup="javascript">							<div class="title">								<span>' + $(e.obj).data("alerttitle") + '</span><em data-closem="#popup">&nbsp;</em>							</div>							<div class="popupMain">' + $(e.obj).data("alertcontent") + '<div class="btn">									<div class="confirm" data-closem="#popup">&nbsp;</div>									<div class="cancel" data-closem="#popup">&nbsp;</div>								</div>							</div>							<div class="bottom">&nbsp;</div>						</div>',
                document.body.appendChild(t),
                setTimeout(function() {
                        $("#mark").data("closem", "#popup"),
                            $("#mark .popup").css("marginTop", -($("#mark .popup").outerHeight() / 2)),
                            $("#mark .popup").animate({
                                    marginTop: -($("#mark .popup").outerHeight() / 2),
                                    opacity: 1
                                },
                                300),
                            document.onkeydown = function(e) {
                                var e = e || event;
                                13 == e.keyCode && test.clickArea.closem({
                                    target: "#popup"
                                })
                            }
                    },
                    10)
        },
        closem: function(e) {
            $(e.target).animate({
                    opacity: 0
                },
                100,
                function() {
                    $("#mark").remove(),
                        $(e.target).remove(),
                        $("body").css({
                            overflow: "inherit",
                            "overflow-x": "hidden"
                        })
                }),
                loginType = !1
        },
        showloginbox: function() {
            var e = test;
            $("#loginBtn").length > 0 && ($("#loginBtn").remove(), $("#mark").remove()),
                e.loginText.appendTo("body"),
                $("#mark").height($(document).outerHeight()),
                $("#loginBtn").css({
                    top: 0,
                    marginLeft: -$("#loginBtn").width() / 2
                }),
                move($("#loginBtn").get(0), {
                        top: ($(window).height() - $("#loginBtn").outerHeight()) / 2,
                        opacity: 1
                    },
                    300, "backOut"),
                $("input").on("focus",
                    function() {
                        test.focuArea.placeholder({
                            obj: $(this).siblings("span")
                        })
                    }),
                setTimeout(function() {
                        $("input").each(function(e, t) {
                            "" != $(t).val() && ($(t).siblings("span").hide(), "userName" == $(t).attr("id") && $("#passWord").siblings("span").hide())
                        })
                    },
                    500),
                test.code("userLogin", "loginBtn")
        },
        showregbox: function() {
            var e = test;
            $("#regBtn").length > 0 && ($("#regBtn").remove(), $("#mark").remove()),
                e.regText.appendTo("body"),
                $("#mark").height($(document).outerHeight()),
                $("#regBtn").css({
                    top: 0,
                    marginLeft: -$("#regBtn").width() / 2
                }),
                move($("#regBtn").get(0), {
                        top: ($(window).height() - $("#regBtn").outerHeight()) / 2,
                        opacity: 1
                    },
                    300, "backOut"),
                $("input").on("focus",
                    function() {
                        test.focuArea.placeholder({
                            obj: $(this).siblings("span")
                        })
                    }),
                $("input").each(function(e, t) {
                    "" != $(t).val() && $(t).siblings("span").hide()
                }),
                test.code("userRegister", "regBtn")
        },
        loginboxshowreg: function() {
            var e = test;
            $("#mark").remove(),
                move($("#loginBtn").get(0), {
                        marginLeft: -(2 * $("#loginBtn").width()),
                        opacity: 0
                    },
                    300, "easeOut",
                    function() {
                        $("#loginBtn").remove()
                    }),
            $("#regBtn").length > 0 && ($("#regBtn").remove(), $("#mark").remove()),
                e.regText.appendTo("body"),
                $("#mark").height($(document).outerHeight()),
                $("#regBtn").css({
                    top: ($(window).height() - $("#regBtn").outerHeight()) / 2,
                    marginLeft: $("#regBtn").width()
                }),
                move($("#regBtn").get(0), {
                        marginLeft: -$("#regBtn").width() / 2,
                        opacity: 1
                    },
                    300, "backOut"),
                $("input").on("focus",
                    function() {
                        test.focuArea.placeholder({
                            obj: $(this).siblings("span")
                        })
                    }),
                $("input").each(function(e, t) {
                    "" != $(t).val() && $(t).siblings("span").hide()
                }),
                test.code("userRegister", "regBtn")
        },
        regboxshowlogin: function() {
            var e = test;
            $("#mark").remove(),
                move($("#regBtn").get(0), {
                        marginLeft: $("#regBtn").width(),
                        opacity: 0
                    },
                    300, "easeOut",
                    function() {
                        $("#regBtn").remove()
                    }),
            $("#loginBtn").length > 0 && ($("#loginBtn").remove(), $("#mark").remove()),
                e.loginText.appendTo("body"),
                $("#mark").height($(document).outerHeight()),
                $("#loginBtn").css({
                    top: ($(window).height() - $("#loginBtn").outerHeight()) / 2,
                    marginLeft: 2 * -$("#loginBtn").width()
                }),
                move($("#loginBtn").get(0), {
                        marginLeft: -$("#loginBtn").width() / 2,
                        opacity: 1
                    },
                    300, "backOut"),
                $("input").on("focus",
                    function() {
                        test.focuArea.placeholder({
                            obj: $(this).siblings("span")
                        })
                    }),
                $("input").each(function(e, t) {
                    "" != $(t).val() && $(t).siblings("span").hide()
                }),
                test.code("userLogin", "loginBtn")
        },
        focu: function(e) {
            var t = test;
            t.focuArea[e.target](e)
        },
        reg: function(e) {
            var t = test;
            if (!t.regOff) return ! 1;
            if (t.regOff = !1, $("#regUserName").val().length < 1) return $("#regUserName").parent().addClass("error").find("dfn").text("鐢ㄦ埛鍚嶄笉鑳戒负绌猴紒"),
                t.regOff = !0,
                !1;
            if ($("#regUserName").val().length < 20 && $("#regUserName").val().length > 0) {
                var o = /^[0-9a-zA-Z_]*$/;
                if (!o.test($("#regUserName").val())) return $("#regUserName").parent().addClass("error").find("dfn").text("鐢ㄦ埛鍚嶅彧鑳芥槸瀛楁瘝锛屾暟瀛楋紝涓嬪垝绾�!"),
                    t.regOff = !0,
                    !1
            }
            if ($("#regPassWord").val().length < 1) return $("#regPassWord").parent().addClass("error").find("dfn").text("瀵嗙爜涓嶈兘涓虹┖锛�"),
                t.regOff = !0,
                !1;
            if ($("#regRePassWord").val() != $("#regPassWord").val()) return $("#regRePassWord").parent().addClass("error").find("dfn").text("涓ゆ杈撳叆鐨勫瘑鐮佷笉涓€鑷达紒"),
                t.regOff = !0,
                !1;
            if ($("#regEmail").val().length < 1) return $("#regEmail").parent().addClass("error").find("dfn").text("閭涓嶈兘涓虹┖锛�"),
                t.regOff = !0,
                !1;
            var n = {
                username: $("#regUserName").val(),
                email: $("#regEmail").val(),
                password: $("#regPassWord").val(),
                repassword: $("#regRePassWord").val(),
                code: t.logoX
            };
            $.post(e.target, n).success(function() {
                if (test.clickArea.closem({
                        target: "#regBtn"
                    }), t.regOff = !0, e.target.match(/#personal/)) {
                    $(".login").css("display", "none");
                    var o = $(".success");
                    o.css("display", "block");
                    var n = 3,
                        a = setInterval(function() {
                                n--,
                                    o.find(".time").html(n + " 绉掑悗鑷姩璺宠浆"),
                                0 >= n && (clearInterval(a), window.location.href = "/index.php/special/vip")
                            },
                            1e3)
                } else setTimeout(function() {
                        test.clickArea.timealert({
                            target: "鎭枩锛佹敞鍐屾垚鍔�</br>3绉掑悗鑷姩鍏抽棴",
                            fnEnd: function() {
                                window.location.reload()
                            }
                        })
                    },
                    200)
            }).error(function(e) {
                var o = $("#regBtn").find("label");
                switch (e = e.responseJSON, o.removeClass("error"), t.regOff = !0, e.code) {
                    case "1001":
                        o.eq(4).addClass("error").find("dfn").html(e.message);
                        break;
                    case "1002":
                        o.eq(4).addClass("error").find("dfn").html(e.message);
                        break;
                    case "1003":
                        o.eq(0).addClass("error").find("dfn").html(e.message);
                        break;
                    case "1004":
                        o.eq(0).addClass("error").find("dfn").html(e.message);
                        break;
                    case "1005":
                        o.eq(1).addClass("error").find("dfn").html(e.message);
                        break;
                    case "1006":
                        o.eq(1).addClass("error").find("dfn").html(e.message);
                        break;
                    case "1007":
                        o.eq(2).addClass("error").find("dfn").html(e.message);
                        break;
                    case "1008":
                        o.eq(3).addClass("error").find("dfn").html(e.message);
                        break;
                    case "1009":
                        o.eq(3).addClass("error").find("dfn").html(e.message);
                        break;
                    case "10010":
                        o.eq(3).addClass("error").find("dfn").html(e.message)
                }
                $(".resetCode").click()
            })
        },
        login: function(e) {
            var t = test,
                o = e.target.split(",");
            if (!t.loginOff) return ! 1;
            if (t.loginOff = !1, $("#userName").val().length < 1) return $("#userName").parent().addClass("error").find("dfn").text("鐢ㄦ埛鍚嶄笉鑳戒负绌猴紒"),
                t.loginOff = !0,
                !1;
            if ($("#passWord").val().length < 1) return $("#passWord").parent().addClass("error").find("dfn").text("瀵嗙爜涓嶈兘涓虹┖锛�"),
                t.loginOff = !0,
                !1;
            var n = {
                account: $("#userName").val(),
                password: $("#passWord").val(),
                expire: $("#continued").get(0).checked ? 7 : 0,
                code: t.logoX
            };
            e.obj.innerHTML = "login...",
                $.post(o[0], n).success(function() {
                    if (t.loginOff = !0, e.target.match(/#personal/)) {
                        $(".login").css("display", "none");
                        var n = $(".success");
                        n.css("display", "block");
                        var a = 3,
                            i = setInterval(function() {
                                    a--,
                                        n.find(".time").html(a + " 绉掑悗鑷姩璺宠浆"),
                                    0 >= a && (clearInterval(i), window.location.href = o[1] ? o[1] : "/index.php/User/index")
                                },
                                1e3)
                    } else {
                        var s = window.location.href + "?#isbuy=" + loginType;
                        window.location.href = s
                    }
                }).error(function(o) {
                    t.loginOff = !0,
                        e.obj.innerHTML = "鐧诲綍";
                    var n = $("#loginBtn").find("label");
                    switch (o = o.responseJSON, n.removeClass("error"), o.code) {
                        case "1001":
                            n.eq(2).addClass("error").find("dfn").html(o.message);
                            break;
                        case "1002":
                            n.eq(2).addClass("error").find("dfn").html(o.message);
                            break;
                        case "1004":
                            n.eq(0).addClass("error").find("dfn").html(o.message);
                            break;
                        case "1005":
                            n.eq(1).addClass("error").find("dfn").html(o.message);
                            break;
                        case "10011":
                            n.eq(0).addClass("error").find("dfn").html(o.message);
                            break;
                        case "10012":
                            n.eq(1).addClass("error").find("dfn").html(o.message);
                            break;
                        case "10013":
                            n.eq(0).addClass("error").find("dfn").html(o.message)
                    }
                    $(".resetCode").click()
                })
        },
        alertbuy: function() {
            var e = test;
            return e.orderId = string,
                document.getElementById("buyAlert") ? ($("#mark").show(), $("#buyAlert").show(), $("#buyAlert").css("opacity", 1), e.orderId && setTimeout(function() {
                            getOrderStatus(e.orderId)
                        },
                        1e3), !1) : void $.ajax({
                        type: "post",
                        url: "/api.php/goods/buy/goodsId/" + string
                    }).success(function(e) {
                        showAlert(0, "锟�" + (e.goodsInfo.unit_price / 100).toFixed(2))
                    }).error(function(t) {
                        e.clickArea.timealerterr(6 == t.responseJSON.code ? {
                                target: "璐拱鍓嶉渶瀹屽杽涓汉淇℃伅锛�<br/>5绉掑悗璺宠浆鍒颁釜浜轰腑蹇冿紒",
                                time: 5e3,
                                fnEnd: function() {
                                    function e(e) {
                                        var t = document.all ? !0 : !1;
                                        if (t) {
                                            var o = document.createElement("a");
                                            o.href = e,
                                                document.body.appendChild(o),
                                                o.click()
                                        } else window.location.href = e
                                    }
                                    var t = "/index.php/user/extinfo";
                                    e(t)
                                }
                            }: {
                                target: t.responseJSON.message,
                                time: 5e3
                            })
                    })
        },
        closed: function(e) {
            $(e.target).animate({
                    opacity: 0
                },
                100,
                function() {
                    $("#mark").hide(),
                        $(e.target).hide()
                }),
                clearTimeout($timer)
        },
        showpay: function(e) {
            $(e.obj).addClass("active").siblings().removeClass("active"),
                $(e.obj).parents(".paySelect").find(".way").hide(),
                $(e.target).show()
        },
        hide: function(e) {
            $(e.target).hide()
        },
        show: function(e) {
            $(e.target).show()
        },
        chiosealipay: function(e) {
            var t = test;
            $.post(t.payurl, {
                goodsId: string,
                payWay: "alipay"
            }).success(function(o) {
                t.payform = o.url,
                    $(e.target).find("img").get(0).dataset ? $(e.target).find("img").get(0).dataset.alipay = "javascript": $(e.target).find("img").data("alipay", "javascript"),
                    t.orderId = o.orderId,
                    getOrderStatus(t.orderId)
            }).error(function() {
                test.clickArea.warnin({
                    target: "璇锋眰鍙戠敓閿欒锛岀‘璁ゅ悗锛岄噸鏂伴€夋嫨浠樻鏂瑰紡銆�"
                })
            })
        },
        alipay: function() {
            var e = test;
            $("form").length > 0 && $("form").remove(),
                $(e.payform).insertAfter("#buyAlert").hide(),
                $("#mark").remove(),
                $("#buyAlert").remove(),
                test.clickArea.alertm({
                    target: "璁㈠崟姝ｅ湪澶勭悊涓紝璇蜂笉瑕佸叧闂椤甸潰锛�"
                })
        },
        chiosewechart: function(e) {
            var t = test;
            t.paywechartOff || $(e.target).find("img").remove(),
                t.paywechartOff = !1,
                $.post(t.payurl, {
                    goodsId: string,
                    payWay: "wechat"
                }).success(function(o) {
                    $(e.target).find("span").before("<img src=" + o.url + ">"),
                        t.orderId = o.orderId,
                        getOrderStatus(t.orderId)
                }).error(function() {
                    test.clickArea.warnin({
                        target: "璇锋眰鍙戠敓閿欒锛岀‘璁ゅ悗锛岄噸鏂伴€夋嫨浠樻鏂瑰紡銆�"
                    })
                })
        },
        applaud: function(e) {
            var t = e.target.split(",");
            $.ajax(t.length > 1 ? {
                    url: "/api.php/user/upVote",
                    type: "post",
                    data: {
                        module: t[1],
                        moduleId: t[0]
                    },
                    success: function(t) {
                        $(e.obj).find("em").html(t.voteCount)
                    },
                    error: function() {
                        test.clickArea.timealerterr({
                            target: "涓嶅彲閲嶅鐐硅禐锛�"
                        })
                    }
                }: {
                    url: "/api.php/user/upVote",
                    type: "post",
                    data: {
                        module: "example_module",
                        moduleId: e.target
                    },
                    success: function(t) {
                        $(e.obj).find("em").html(t.voteCount)
                    },
                    error: function() {
                        test.clickArea.timealerterr({
                            target: "涓嶅彲閲嶅鐐硅禐锛�"
                        })
                    }
                })
        }
    },
    test.focuArea = {
        placeholder: function(e) {
            function t() {
                $(e.obj).parent().addClass("error").find("dfn").text($(e.obj).text() + "涓嶈兘涓虹┖锛�"),
                    $(e.obj).show(),
                    $(e.obj).animate({
                            opacity: 1
                        },
                        100)
            }
            var o = $(e.obj).siblings("input");
            $(o).parents(".error").removeClass("error"),
                $(e.obj).animate({
                        opacity: .6
                    },
                    100),
                document.onkeydown = function(n) {
                    var n = n || event;
                    if ("9" == n.keyCode && "" == o.val()) t();
                    else if ("9" == n.keyCode) {
                        if (isIE() && $(e.obj).data("verification")) for (var a = $(e.obj).data("verification").split(","), i = 0; i < a.length; i++) {
                            var s = a[i].split(":");
                            test.Verification[s[0]]({
                                obj: $(e.obj),
                                rule: s[1]
                            })
                        }
                    } else $(e.obj).animate({
                            opacity: 0
                        },
                        10,
                        function() {
                            $(this).hide()
                        })
                },
                $(o).on("blur",
                    function() {
                        if (document.onkeydown = null, "" == o.val()) t();
                        else if (!isIE() && $(e.obj).data("verification")) for (var n = $(e.obj).data("verification").split(","), a = 0; a < n.length; a++) {
                            var i = n[a].split(":");
                            test.Verification[i[0]]({
                                obj: $(e.obj),
                                rule: i[1]
                            })
                        }
                    })
        }
    },
    test.Verification = {
        langer: function(e) {
            $(e.obj).siblings("input").val().length > e.rule && $(e.obj).parent().addClass("error").find("dfn").text($(e.obj).text() + "闀垮害涓嶈兘澶т簬" + e.rule + "!")
        },
        type: function(e) {
            if ("eng" == e.rule) {
                var t = /^[0-9a-zA-Z_]*$/;
                t.test($(e.obj).siblings("input").val()) || $(e.obj).parent().addClass("error").find("dfn").text($(e.obj).text() + "鍙兘鏄瓧姣嶏紝鏁板瓧锛屼笅鍒掔嚎!")
            }
        },
        surepassword: function(e) {
            $("#regPassWord").val() != $(e.obj).siblings("input").val() && $(e.obj).parent().addClass("error").find("dfn").text("涓ゆ杈撳叆鐨勫瘑鐮佷笉涓€鑷�!")
        }
    },
    test.overArea = {
        menu: function(e) {
            var t = $(e.obj).parents(".menu").find("span").eq(0);
            move($(t).get(0), {
                    left: $(e.obj).position().left,
                    width: $(e.obj).outerWidth()
                },
                200, "easeOut")
        },
        scrolls: function(e) {
            function t(e) {
                r = -o.offsetTop;
                var e = e || event,
                    t = !0;
                t = e.wheelDelta ? e.wheelDelta > 0 ? !1 : !0 : e.detail > 0 ? !0 : !1,
                    t ? (r += 10, r > a && (r = a)) : (r -= 10, 0 > r && (r = 0));
                var s = r / a,
                    d = s * i;
                o.style.top = -r + "px",
                    n.style.top = d + "px",
                    e.preventDefault ? e.preventDefault() : window.event ? window.event.returnValue = !1 : e.preventDefault(),
                e.stopPropagation && e.stopPropagation()
            }
            var o = e.obj,
                n = (e.ev, s(e.target)),
                a = o.offsetHeight - o.parentNode.offsetHeight,
                i = n.parentNode.scrollHeight - n.clientHeight;
            if (0 > a) return ! 1;
            var r = -o.offsetTop;
            bind(o, "mousewheel", t),
                bind(o, "DOMMouseScroll", t)
        },
        scrollt: function(e) {
            var t = e.obj,
                o = s(e.target),
                n = (e.ev, o.offsetHeight - o.parentNode.offsetHeight);
            return 0 > n ? !1 : void(t.onmousedown = function(e) {
                    var e = e || event,
                        a = e.clientY - t.offsetTop,
                        i = t.parentNode.offsetHeight - t.offsetHeight,
                        s = t.offsetHeight / 2 / i,
                        r = (t.offsetTop + t.offsetHeight / 2) / i - s;
                    return t.onmousemove = document.onmousemove = function(e) {
                        var e = e || event;
                        e.preventDefault ? e.preventDefault() : window.event ? window.event.returnValue = !1 : e.preventDefault(),
                        t.offsetTop >= 0 && t.offsetTop <= i && (t.style.top = e.clientY - a + "px", t.offsetTop < 0 ? t.style.top = 0 : t.offsetTop > i && (t.style.top = i + "px"), r = (t.offsetTop + t.offsetHeight / 2) / i - s, o.style.top = -(n * r) + "px")
                    },
                        t.onmouseup = document.onmouseup = function() {
                            t.onmouseup = document.onmouseup = t.onmousemove = document.onmousemove = null
                        },
                        !1
                })
        }
    },
    test.outArea = {
        menuout: function(e) {
            var t = $(e.obj).parents(".menu").find("span").eq(0),
                o = Number($(e.obj).parents(".menu").find("span").eq(0).data("num")),
                n = $(e.obj).parent().find("li").eq(o);
            move($(t).get(0), {
                    left: n.position().left,
                    width: n.outerWidth()
                },
                200, "easeOut")
        }
    },
    test.popup = function(e) {
        var t = document.createElement("div");
        t.className = "popup",
            t.innerHTML = e,
            document.body.appendChild(t),
            setTimeout(function() {
                    remove(t)
                },
                3e3)
    },
    test.uploding = function(e) {
        e && !e.off && remove(s("mask"));
        var t = document.createElement("div");
        t.className = "mask",
            t.id = "mask",
            t.innerHTML = '<div class="loding">&nbsp;</div>',
            document.body.appendChild(t)
    },
    test.code = function(e, t) {
        function o(o) {
            var o = o || event,
                n = this,
                a = o.clientX - n.offsetLeft;
            return document.onmousemove = function(e) {
                var e = e || event;
                return e.preventDefault ? e.preventDefault() : window.event ? window.event.returnValue = !1 : e.preventDefault(),
                    test.logoX = e.clientX - a,
                    test.logoX <= 0 ? test.logoX = 0 : test.logoX >= 218 && (test.logoX = 218),
                    n.style.left = test.logoX + "px",
                    $("#" + t).find(".inpCode").parent().prev().find(".bar img").get(0).style.left = test.logoX + "px",
                    $("#" + t).find(".codeLogo").get(0).style.left = test.logoX + "px",
                    !1
            },
                document.onmouseup = function() {
                    return document.onmousemove = null,
                        document.onmouseup = null,
                        $.ajax({
                            url: "/api.php/index/checkSliceVerify",
                            method: "post",
                            data: {
                                id: e,
                                code: test.logoX
                            },
                            success: function() {
                                var e = document.all ? !0 : !1;
                                e ? ($("#" + t).find(".bar img").get(0).style.display = "none", $("#" + t).find(".codeBg").get(0).style.filter = "alpha(opacity=0)") : (move($("#" + t).find(".bar img").get(0), {
                                            opacity: 0
                                        },
                                        200, "easeOut"), move($("#" + t).find(".codeBg").get(0), {
                                            opacity: 0
                                        },
                                        200, "easeOut")),
                                    $("#" + t).find(".codeOk").get(0).style.display = "block",
                                    $("#" + t).find(".promptNo").eq(0).css("display", "none").prev().css("display", "none"),
                                    $("#" + t).find(".resetCode").eq(0).css("display", "none"),
                                    $("#" + t).find(".promptOk").eq(0).css("display", "block"),
                                    $("#" + t).find(".inpCode").parent().prev().find(".bar img").get(0).onmousedown = $("#" + t).find(".codeLogo").get("0").onmousedown = function() {
                                        return ! 1
                                    }
                            },
                            error: function() {
                                $("#" + t).find(".promptNo").eq(0).css("display", "block").prev().css("display", "none"),
                                    move($("#" + t).find(".inpCode").parent().prev().find(".bar img").get(0), {
                                            left: "0"
                                        },
                                        500, "linear"),
                                    move($("#" + t).find(".codeLogo").get(0), {
                                            left: "0"
                                        },
                                        500, "linear")
                            }
                        }),
                        !1
                },
                !1
        }
        function n(e) {
            var t = e.touches[0];
            oW = t.clientX - this.offsetLeft,
                document.addEventListener("touchmove", s, !1)
        }
        function a(e) {
            var o = e.touches[0];
            test.logoX = o.clientX - oW,
                test.logoX <= 0 ? test.logoX = 0 : test.logoX >= 218 && (test.logoX = 218),
                this.style.left = test.logoX + "px",
                $("#" + t).find(".inpCode").parent().prev().find(".bar img").get(0).style.left = test.logoX + "px",
                $("#" + t).find(".codeLogo").get(0).style.left = test.logoX + "px"
        }
        function i() {
            document.removeEventListener("touchmove", s, !1),
                $.ajax({
                    url: "/api.php/index/checkSliceVerify",
                    method: "post",
                    data: {
                        id: e,
                        code: test.logoX
                    },
                    success: function() {
                        var e = document.all ? !0 : !1;
                        e ? ($("#" + t).find(".bar img").get(0).style.display = "none", $("#" + t).find(".codeBg").get(0).style.filter = "alpha(opacity=0)") : (move($("#" + t).find(".bar img").get(0), {
                                    opacity: 0
                                },
                                200, "easeOut"), move($("#" + t).find(".codeBg").get(0), {
                                    opacity: 0
                                },
                                200, "easeOut")),
                            $("#" + t).find(".codeOk").get(0).style.display = "block",
                            $("#" + t).find(".promptNo").eq(0).css("display", "none").prev().css("display", "none"),
                            $("#" + t).find(".resetCode").eq(0).css("display", "none"),
                            $("#" + t).find(".promptOk").eq(0).css("display", "block")
                    },
                    error: function() {
                        $("#" + t).find(".promptNo").eq(0).css("display", "block").prev().css("display", "none"),
                            move($("#" + t).find(".inpCode").parent().prev().find(".bar img").get(0), {
                                    left: "0"
                                },
                                500, "linear"),
                            move($("#" + t).find(".codeLogo").get(0), {
                                    left: "0"
                                },
                                500, "linear")
                    }
                })
        }
        function s(e) {
            e.preventDefault()
        }
        $("#" + t).find(".inpCode").parent().css("display", "block").prev().css("display", "none");
        var r = document.all ? !0 : !1;
        r ? $("#" + t).find(".bar img").get(0).style.display = "block": $("#" + t).find(".bar img").eq(0).css("opacity", "1"),
            $("#" + t).find(".codeOk").get(0).style.display = "none",
            $("#" + t).find(".promptNo").eq(0).css("display", "none").prev().css("display", "block"),
            $("#" + t).find(".promptOk").eq(0).css("display", "none"),
            $("#" + t).find(".bar img").css("left", "0"),
            $("#" + t).find(".codeLogo").eq(0).css("left", "0"),
            $("#" + t).find(".inpCode").on("focus",
                function() {
                    $("#" + t).find(".inpCode").parent().css("display", "none").prev().css("display", "block").find(".bar img").get(0).onmousedown = $("#" + t).find(".codeLogo").get("0").onmousedown = o,
                        $("#" + t).find(".inpCode").parent().css("display", "none").prev().css("display", "block"),
                        $("#" + t + " .bar img").get(0).addEventListener("touchstart", n, !1),
                        $("#" + t + " .bar img").get(0).addEventListener("touchmove", a, !1),
                        $("#" + t + " .bar img").get(0).addEventListener("touchend", i, !1),
                        $("#" + t + " .codeLogo").get(0).addEventListener("touchstart", n, !1),
                        $("#" + t + " .codeLogo").get(0).addEventListener("touchmove", a, !1),
                        $("#" + t + " .codeLogo").get(0).addEventListener("touchend", i, !1)
                }),
            $.ajax({
                url: "/api.php/index/getVerify?id=" + e,
                method: "get",
                success: function(e) {
                    $("#" + t).find(".codeBg").eq(0).css("opacity", "1"),
                        $("#" + t).find(".codeSuccess").get(0).style.background = 'url("' + e.fullBg + '") no-repeat',
                        $("#" + t).find(".codeBg").get(0).style.background = 'url("' + e.bg + '") no-repeat',
                        $("#" + t).find(".codeLogo").get(0).src = e.slice
                }
            }),
            $(document).delegate("#" + t + " .resetCode", "click",
                function() {
                    test.logoX = 0;
                    var n = document.all ? !0 : !1;
                    n ? $("#" + t).find(".bar img").get(0).style.display = "block": $("#" + t).find(".bar img").eq(0).css("opacity", "1"),
                        $("#" + t).find(".codeOk").get(0).style.display = "none",
                        $("#" + t).find(".codeBg").eq(0).css("opacity", "1"),
                        $("#" + t).find(".promptNo").eq(0).css("display", "none").prev().css("display", "block"),
                        $("#" + t).find(".promptOk").eq(0).css("display", "none"),
                        $("#" + t).find(".resetCode").eq(0).css("display", "block"),
                        $("#" + t).find(".bar img").css("left", "0"),
                        $("#" + t).find(".codeLogo").eq(0).css("left", "0"),
                        $.ajax({
                            url: "/api.php/index/getVerify?id=" + e,
                            method: "get",
                            success: function(e) {
                                $("#" + t).find(".codeSuccess").get(0).style.background = 'url("' + e.fullBg + '") no-repeat',
                                    $("#" + t).find(".codeBg").get(0).style.background = 'url("' + e.bg + '") no-repeat',
                                    $("#" + t).find(".codeLogo").get(0).src = e.slice,
                                    $("#" + t).find(".inpCode").parent().css("display", "none").prev().css("display", "block").find(".bar img").get(0).onmousedown = $("#" + t).find(".codeLogo").get("0").onmousedown = o
                            }
                        })
                })
    };
var $timer = null;