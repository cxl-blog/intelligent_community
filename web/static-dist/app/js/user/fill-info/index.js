webpackJsonp(["app/js/user/fill-info/index"],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r("716c0bdbed7bf2c70c64"),i=n(o);new i.default({element:"#fill-userinfo-form"})},"716c0bdbed7bf2c70c64":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(!function(){var e=new Error('Cannot find module "userinfo-fields-common"');throw e.code="MODULE_NOT_FOUND",e}()),c=n(l),f=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),a(t,[{key:"createValidator",value:function(){this.validator=this.$element.validate({currentDom:"#form-submit-btn",rules:{email:{required:!0,email:!0,remote:{url:$("#email").data("url"),type:"get",data:{value:function(){return $("#email").val()}}}},mobile:{required:!0,phone:!0,remote:{url:$("#mobile").data("url"),type:"get",data:{value:function(){return $("#mobile").val()}}}},truename:{required:!0,chinese_alphanumeric:!0,minlength:2,maxlength:36},qq:{required:!0,qq:!0},idcard:{required:!0,idcardNumber:!0},gender:{required:!0},company:{required:!0},job:{required:!0},weibo:{required:!0,url:!0},weixin:{required:!0}},messages:{gender:{required:Translator.trans("site.choose_gender_hint")},mobile:{phone:Translator.trans("validate.phone.message")}}}),this.getCustomFields()}}]),t}(c.default);t.default=f}});