webpackJsonp(["app/js/activity/live/index"],{0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n("c6797855be84e924b7d5"),o=i(a);window.liveShow=new o.default},c6797855be84e924b7d5:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n("da32dea28c2b82c7aab1"),u=i(r),c=function(){function t(){a(this,t),this.interval=1,this.emitter=new u.default,this.startEvent(),this.finishByReplay(),this.countdownEvent()}return o(t,[{key:"finishByReplay",value:function(){var t=this;$(".js-replay").on("click",function(){var e=$(this).data("finish");$.post(e,function(e){t.emitter.emit("finish")})})}},{key:"startEvent",value:function(){var t=this;$(".js-start-live").on("click",function(){t.started||(this.started=!0,t.emitter.emit("start",{}).then(function(){}).catch(function(t){}))})}},{key:"countdownEvent",value:function(){var t=this,e=$("#countdown");0!=e.length&&(this.timeRemain=e.data("timeRemain"),this._countdown(e,this.interval),this.iId=setInterval(function(){t._countdown(e,t.interval)},1e3*this.interval))}},{key:"_countdown",value:function(t,e){var n=this.timeRemain,i=Math.floor(n/86400),a=n%86400,o=Math.floor(a/3600);a%=3600;var r=Math.floor(a/60),u=a%60,c="";c+=i?i+"天":"",c+=o?o+"时":"",c+=r?r+"分":"",c+=u?u+"秒":"",this.timeRemain=n-e,t.text(c),this.timeRemain<=0&&(t.text("直播已经开始"),window.clearInterval(this.iId))}}]),t}();e.default=c}});