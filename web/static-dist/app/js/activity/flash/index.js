webpackJsonp(["app/js/activity/flash/index"],[function(a,e,l){"use strict";function t(a){return a&&a.__esModule?a:{default:a}}var s=l("c04c1b91e3806f24595a"),n=t(s),r=$("#flash-player");if(n.default.hasFlashPlayerVersion("11"))n.default.embedSWF(r.data("uri"),"flash-player","100%","100%","9.0.0",null,null,{wmode:"opaque",allowFullScreen:"true"});else{var i='\n    <div class="alert alert-warning alert-dismissible fade in" role="alert">\n      <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">×</span>\n      </button>\n      '+Translator.trans("site.flash_not_install_hint")+"\n    </div>";r.html(i),r.show()}}]);