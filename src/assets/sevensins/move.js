// JavaScript Document

//t 时间变化量time，B初始量 begin，C变化量change，D，时间duraction  
     var Tween = {  
        linear:function(t,b,c,d){  
             return t*c/d+b;  
         },  
         easeIn:function(t,b,c,d){  
             return c*(t/=d)*t+b;  
         },
         elasticOut:function (t, b, c, d, a, p) {
             if (t == 0) return b;
             if ((t /= d) == 1) return b + c;
             if (!p) p = d * .3;
             if (!a || a < Math.abs(c)) {
                 a = c;
                 var s = p / 4;
             }
             else var s = p / (2 * Math.PI) * Math.asin(c / a);
             return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
         }

     }  

     function startMove(obj, json,times,fx, fn) {  

         clearInterval(obj.timer);  

         var iCur = {};  

         var startTime = now();  

         for(var attr in json){  

             if (attr == 'opacity') {  

                     iCur[attr] = parseInt(parseFloat(getStyle(obj, attr)) * 100);  

                 } else {  

                     iCur[attr] = parseInt(getStyle(obj, attr));  
                 }  

         }  

         obj.timer = setInterval(function() {  

             var changeTime = now();  

             //  

             var t = times  - Math.max(0,startTime- changeTime+times);  

             for (var attr in json) {  

                 var value = Tween[fx](t,iCur[attr],json[attr]-iCur[attr],times);  

                 //console.log(value);  
                   
                 if (attr == 'opacity') {  

                     obj.style.filter = 'alpha(opacity=' + value + ') ';  

                     obj.style.opacity = value / 100;  

                 } else {  

                     obj.style[attr] = value + 'px';  
                 }  
             }  

             if (t==times) {  

                 clearInterval(obj.timer);  

                 if (fn) {  

                     fn.call(obj)  
                 }  
             }  

         }, 13)  
     }  


     function getStyle(obj, attr) {  

         if (obj.currentStyle) {  

             return obj.currentStyle[attr];  

         } else {  

             return getComputedStyle(obj, false)[attr];  
         }  
     }  


     function now(){  

         return new Date().getTime();  
     }  