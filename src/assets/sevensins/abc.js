/**
 * Created by seven sins on 2/6/2017.
 */
var starBoff = true;
$(".loadBox").css("height", $(window).height());
$(document).on("mousemove",
    function(a) {
        a.preventDefault();
        return false
    });
function judge() {
    var a = {};
    var b = navigator.userAgent.toLowerCase();
    var d; (d = b.match(/msie ([\d.]+)/)) ? a.ie = d[1] : (d = b.match(/firefox\/([\d.]+)/)) ? a.firefox = d[1] : (d = b.match(/chrome\/([\d.]+)/)) ? a.chrome = d[1] : (d = b.match(/opera.([\d.]+)/)) ? a.opera = d[1] : (d = b.match(/version\/([\d.]+).*safari/)) ? a.safari = d[1] : 0; (d = b.match(/rv:([\d.]+)/)) ? a.ie11 = d[1] : "";
    if (a.firefox) {
        a.firefox = Number(a.firefox.substring(0, 2))
    }
    if (a.chrome) {
        a.chrome = Number(a.chrome.substring(0, 2))
    }
    if (a.ie || a.firefox < 40 || a.chrome < 38 || a.safari || (a.ie11 && !a.firefox)) {
        return false
    } else {}
    return a
}
var Browser = (function() {
    var a = navigator.userAgent.toLowerCase();
    return {
        get: function() {
            if (a.indexOf("msie") > 0) {
                return "msie"
            }
            if (a.indexOf("firefox") > 0) {
                return "firefox"
            }
            if (a.indexOf("chrome") > 0) {
                return "chrome"
            }
        }
    }
})();
var OS = (function() {
    var a = navigator.userAgent.toLowerCase();
    return {
        get: function() {
            if (a.indexOf("mac os") > 0) {
                return "mac"
            }
            if (a.indexOf("win") > 0) {
                return "win"
            }
        }
    }
})();
var loadAni = {
    init: function() {
        var b = this;
        b.t = [];
        for (var a = 1; a < 101; a++) {
            b.t.push(a)
        }
        b.timer2 = null;
        b.n = 0;
        b.time = 200;
        b.lastPosition = [];
        b.penBox = document.getElementById("penBox");
        b.pen = document.getElementById("pen");
        b.note = document.getElementById("note");
        b.c = document.getElementById("c");
        b.c.height = "400";
        b.c.width = "600";
        b.C1 = c.getContext("2d");
        b.C1.strokeStyle = "#dd657c";
        b.offsetY = -3;
        if (OS.get() == "win" && Browser.get() == "chrome") {
            if (judge().chrome == 45) {
                b.offsetY = -3
            } else {
                b.offsetY = -3
            }
        }
        b.position = [[369, 143], [369, 143, 369, 143, 369, 260, 369, 260, 1], [369, 260, 369, 260, 367, 265, 364, 268, 4], [364, 268, 364, 268, 341, 268, 338, 268, 2], [338, 268, 335, 268, 330, 265, 330, 259, 4], [330, 259, 330, 253, 330, 199, 330, 199, 2], [330, 199, 330, 199, 320, 259, 320, 259, 1], [320, 259, 320, 259, 319, 268, 311, 268, 3], [311, 268, 303, 268, 301, 268, 301, 268, 4], [301, 268, 301, 268, 295, 268, 293, 259, 2], [293, 259, 291, 250, 283, 199, 283, 199, 1], [283, 199, 283, 199, 283, 259, 283, 259, 1], [283, 259, 283, 259, 284, 268, 275, 268, 3], [275, 268, 266, 268, 253, 268, 253, 268, 1], [253, 268, 253, 268, 245, 268, 245, 258, 3], [245, 258, 245, 248, 245, 142, 245, 142, 1], [245, 142, 245, 142, 245, 135, 253, 135, 3], [253, 135, 261, 135, 291, 135, 291, 135, 1], [291, 135, 291, 135, 297, 136, 299, 145, 3], [299, 145, 301, 154, 307, 194, 307, 194, 1], [307, 194, 307, 194, 315, 143, 315, 143, 1], [315, 143, 315, 143, 317, 135, 324, 135], [324, 135, 331, 135, 364, 135, 364, 135], [364, 135, 364, 135, 371, 144, 375, 150, 2], [375, 150, 379, 156, 384, 160, 390, 159, 3], [390, 159, 396, 158, 401, 151, 401, 149, 3], [401, 149, 401, 147, 405, 134, 419, 134, 2], [419, 134, 433, 134, 438, 144, 439, 150, 2], [439, 150, 440, 156, 438, 165, 429, 171, 2], [429, 171, 420, 177, 410, 170, 407, 168, 2], [407, 168, 404, 166, 395, 161, 389, 169, 2], [389, 169, 382, 179, 388, 207, 383, 227, 2], [383, 227, 378, 247, 367, 276, 330, 298], [330, 298, 293, 320, 250, 315, 219, 298], [219, 298, 188, 281, 164, 249, 162, 202], [162, 202, 160, 155, 194, 111, 231, 98], [231, 98, 268, 85, 303, 88, 326, 102], [326, 102, 349, 116, 363, 130, 369, 143]];
        b.getlastPosition()
    },
    getlastPosition: function() {
        var e = this;
        var a = 1;
        var d = 1;
        b();
        function b() {
            var g = e.getposition({
                    position: e.position[d],
                    t: e.t[a] / 100
                })[0] + e.offsetY;
            var f = e.getposition({
                position: e.position[d],
                t: e.t[a] / 100
            })[1];
            e.lastPosition.push([g, f]);
            a += e.position[d][8] || 1;
            if (a > 100) {
                d++;
                a = 1
            }
            if (d >= e.position.length) {
                e.drawLine()
            } else {
                b()
            }
        }
    },
    getposition: function(e) {
        var g = this;
        var f = e.position;
        var k = e.t;
        var d = f[0] * ((1 - k) * (1 - k)) + f[2] * 2 * (1 - k) * k + f[4] * (k * k);
        var b = f[1] * ((1 - k) * (1 - k)) + f[3] * 2 * (1 - k) * k + f[5] * (k * k);
        var a = f[2] * ((1 - k) * (1 - k)) + f[4] * 2 * (1 - k) * k + f[6] * (k * k);
        var l = f[3] * ((1 - k) * (1 - k)) + f[5] * 2 * (1 - k) * k + f[7] * (k * k);
        var j = d * (1 - k) + a * k;
        var h = b * (1 - k) + l * k;
        return [j, h]
    },
    drawLine: function() {
        var a = this;
        a.C1.beginPath();
        a.C1.moveTo(a.position[0][0] + a.offsetY, this.position[0][1])
    },
    move: function(a) {
        var b = this;
        clearInterval(b.timer2);
        b.timer2 = setInterval(function() {
                b.n = parseInt(b.n);
                b.pen.style.left = b.lastPosition[b.n][0] + "px";
                b.pen.style.top = b.lastPosition[b.n][1] - 62 + "px";
                b.note.style.left = b.lastPosition[b.n][0] - 30 + "px";
                b.note.style.top = b.lastPosition[b.n][1] + 15 + "px";
                b.C1.lineTo(b.lastPosition[b.n][0], b.lastPosition[b.n][1]);
                b.C1.stroke();
                b.n += 4;
                if (b.n > 1) {
                    b.penBox.style.display = "block"
                }
                if (b.n >= a) {
                    clearInterval(b.timer2)
                }
                if (b.n >= 2500) {
                    clearInterval(b.timer2);
                    $(".loadBox").css("display", "none");
                    $(".body").css("display", "block");
                    if (starBoff) {
                        star();
                        starBoff = false
                    }
                    setTimeout(function() {
                            var e = document.getElementsByTagName("nav")[0];
                            var g = e.getElementsByClassName("box")[0];
                            var d = e.getElementsByTagName("ul")[0];
                            var j = d.getElementsByTagName("li");
                            var h = j[initNum].offsetLeft;
                            var f = j[0].offsetTop;
                            g.style.left = h + "px";
                            g.style.top = f + "px";
                            g.style.width = j[initNum].offsetWidth + "px"
                        },
                        12)
                }
                b.note.innerHTML = "<span>" + parseInt((b.n / 2500 * 100)) + "</span><em>%</em>"
            },
            b.time / b.lastPosition.length)
    }
};
loadAni.init();
function Loader(a) {
    this.source = a;
    this.count = this.source.length;
    this.loaded = 0;
    this.status = 0;
    this.loadSuccessList = [];
    this.loadErrorList = [];
    this.loadOutTime = 5000;
    this.loadedHandler = function() {}
}
Loader.prototype = {
    constructor: Loader,
    start: function() {
        if (this.count) {
            this.load()
        } else {
            this.status = 2
        }
    },
    load: function() {
        var d = this;
        for (var a = 0; a < this.count; a++) {
            var b = new Image();
            b.index = a;
            b.style.display = "none";
            b.onload = function() {
                d.loadSuccessList.push(this.src);
                d.loadedHandle(this)
            };
            b.onerror = function() {
                d.loadErrorList.push(this.src);
                d.loadedHandle(this)
            };
            b.timer = ~
                function(e) {
                    setTimeout(function() {
                            d.loadErrorList.push(e.src);
                            d.loadedHandle(e)
                        },
                        d.loadOutTime)
                } (b);
            b.src = this.source[a];
            document.body.appendChild(b)
        }
    },
    loadedHandle: function(a) {
        clearTimeout(a.timer);
        a.onload = a.onerror = null;
        this.loaded++;
        this.loadedHandler(a);
        try {
            document.body.removeChild(a)
        } catch(b) {}
    }
};
var imageArr = ["index/disk.png", "index/diaoche.png", "index/qizhongbi.png", "index/light.png", "index/light.png", "index/light_big.png", "index/S2.png", "index/S.png", "index/C.png", "index/5.png", "index/L.png", "index/M2.png", "index/T.png", "index/H.png", "index/js.png", "index/M.png", "index/light_ray.png", "index/light_ray2.png", "index/light_ray2.png", "index/fly1.png", "index/fly2.png", "index/ruler.png", "index/pen.png", "index/compasses.png", "index/clip.png", "index/bg.jpg", "index/disk_small.png", "index/black.png", "index/table.png", "index/table_active.png", "index/light2.png", "index/cloth/flag.png", "index/newClass.png", "index/more.png", "index/dashed_top.png", "index/dashed_bottom.png", "index/dashed_middle.png", "index/circle.png", "index/people.png", "index/paper.png", "index/note.png", "index/new.png", "index/more_1.png", "index/dian.png", "index/time.png", "index/timeBg.png", "index/title.png", "index/works.png", "index/image_frame.png", "index/little_people.png", "index/say.png", "index/good.png", "index/video.png", "index/video_frame.png", "index/video_icon.png", "index/us.png", "index/contact.png", "index/qq.png", "index/code.png", "bg.gif", "mark.png", "close.png", "confirm.png", "cancel.png", "mark2.png", "nav_bg.gif", "miaov-all.png", "footerBg.png", "icon.png", "staff.png", "loginBgTop.png", "loginClose.png", "loginCloseHover.png", "loginBgCenter.png", "loginInpBg.png", "loginErrBg.png", "closeError.png", "loginInpBg.png", "loginBtn.png", "selectBg.png", "loginBgBottom.png", "selectBg.png", "regBtn.png", "5-121204193R7.gif", "mark.png", "backTop.png", "talkBg.png", "talkBg2.png", "talkBg3.png", "loginClose.png", "loginCloseHover.png"];
var imageSource = [];
var loadBg = document.getElementById("loadBg");
var pen = document.getElementById("pen");
var loadRoute = document.getElementById("loadRoute");
var currentLoadSource = ["/static/ie/images/loadBg.png", "/static/ie/images/loadPen.png", "/static/ie/images/loadRoute.png"];
for (var i = 0; i < imageArr.length; i++) {
    imageSource.push("/static/normal/images/" + imageArr[i])
}
if (!document.cookie.match("loaded")) {
    var loader1 = new Loader(currentLoadSource);
    loader1.loadedHandler = function(b) {
        switch (b.index) {
            case 0:
                loadBg.style.background = "url(" + b.src + ") no-repeat center";
                break;
            case 1:
                pen.src = b.src;
                break;
            case 2:
                loadRoute.src = b.src;
                break
        }
        if (this.loaded == this.count) {
            var a = new Loader(imageSource);
            a.loadedHandler = function(e) {
                var d = this.loaded / this.count;
                setTimeout(function() {
                        loadAni.move(2500 * d)
                    },
                    100);
                if (d == 1) {
                    document.cookie = "loaded=1"
                }
            };
            a.start()
        }
    };
    loader1.start()
} else {
    if (starBoff) {
        star();
        starBoff = false
    }
    $(".loadBox").css("display", "none");
    $(".body").css("display", "block")
};