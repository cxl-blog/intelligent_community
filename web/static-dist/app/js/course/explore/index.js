webpackJsonp(["app/js/course/explore/index"],[function(e,o){"use strict";echo.init(),$("#live, #free").on("click",function(e){var o=$(e.currentTarget);$("input:checkbox").attr("checked",!1),o.attr("checked",!0),window.location.href=o.val()}),$(".open-course-list").on("click",".section-more-btn a",function(e){var o=$(void 0).attr("data-url");$.ajax({url:o,dataType:"html",success:function(e){var o=$(".open-course-list .course-block,.open-course-list .section-more-btn",$(e)).fadeIn("slow");$(".section-more-btn").remove(),$(".open-course-list").append(o),echo.init()}})})}]);