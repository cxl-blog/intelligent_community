webpackJsonp(["app/js/activity/doc/index"],{e3591734a7ec9a6a6c56:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a("c04c1b91e3806f24595a"),s=n(l);a("9a5c59a43068776403d1");var o=function(){function e(t){var a=t.element,n=t.swfUrl,r=t.pdfUrl,l=t.watermarkOptions,s=t.canCopy;i(this,e),this.element=$(a),this.swfUrl=n||"",this.pdfUrl=r||"",this.swfPlayerWidth="100%",this.swfPlayerHeight="100%",this.swfPlayerUrl="",this.watermarkOptions=l||"",this.canCopy=s||!1,this.init()}return r(e,[{key:"init",value:function(){this.isSupportHtml5()&&!this.isIE9()?this.initPDFJSViewer():this.initSwfViewer(),this.onFullScreen()}},{key:"onFullScreen",value:function(e){alert(1),window.onmessage=function(e){if(alert(2),null!=e&&void 0!=e){var t=e.data;if("boolean"==typeof t){var a=$("#task-content-iframe",window.parent.document);t?(a.removeClass("screen-full"),a.width("100%")):(a.addClass("screen-full"),a.width(window.document.body.offsetWidth+"px"))}}}}},{key:"isIE9",value:function(){return navigator.appVersion.indexOf("MSIE 9.")!=-1}},{key:"isSupportHtml5",value:function(){return $.support.leadingWhitespace}},{key:"initPDFJSViewer",value:function(){$("html").attr("dir","ltr");var e="//service-cdn.qiqiuyun.net/js-sdk/document-player/v7/viewer.html#"+this.pdfUrl;this.canCopy||(e+="#false");var t='<iframe id="doc-pdf-player" class="task-content-iframe" \n     src="'+e+'" style="width:100%;height:100%;border:0px" \n     allowfullscreen="" webkitallowfullscreen="">\n      </iframe>';this.element.append(t),this.addWatermark()}},{key:"initSwfViewer",value:function(){$.html('<div id="website"><p align="center" class="style1">'+Translator.trans("site.flash_not_install_hint")+"</p></div>");var e={doc_url:decodeURI(this.swfUrl.value)},t={bgcolor:"#efefef",allowFullScreen:!0,wmode:"window",allowNetworking:"all",allowscriptaccess:"always",autoPlay:!1},a={id:"website"};s.default.embedSWF(this.swfPlayerUrl,"website",this.swfPlayerWidth,this.swfPlayerHeight,"9.0.45",null,e,t,a),this.addWatermark()}},{key:"addWatermark",value:function(){this.watermarkOptions&&this.element.WaterMark(this.watermarkOptions)}}]),e}();t.default=o},0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){new l.default({element:s,swfUrl:s.data("swf"),pdfUrl:s.data("pdf"),watermarkOptions:{contents:e,xPosition:"center",yPosition:"center",rotate:45},canCopy:s.data("disableCopy")})}var r=a("e3591734a7ec9a6a6c56"),l=n(r),s=$("#document-content"),o=s.data("watermark-url");o?$.get(o,function(e){i(e)}):i("")}});