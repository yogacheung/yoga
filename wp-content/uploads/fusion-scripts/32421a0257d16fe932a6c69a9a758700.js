!function(a){"use strict";a.fn.fusion_draw_progress=function(){var b,c=a(this);a("html").hasClass("lt-ie9")?(c.css("visibility","visible"),c.each(function(){b=c.find(".progress").attr("aria-valuenow"),c.find(".progress").css("width","0%"),c.find(".progress").animate({width:b+"%"},"slow")})):c.find(".progress").css("width",function(){return a(this).attr("aria-valuenow")+"%"})}}(jQuery),jQuery(document).ready(function(){jQuery(".fusion-progressbar").not(".fusion-modal .fusion-progressbar").each(function(){var a=getWaypointOffset(jQuery(this));jQuery(this).waypoint(function(){jQuery(this).fusion_draw_progress()},{triggerOnce:!0,offset:a})})}),jQuery(window).load(function(){jQuery(".fusion-modal .fusion-progressbar").on("appear",function(){jQuery(this).fusion_draw_progress()})});
var fusionTabVars={"content_break_point":"800"};!function(a){"use strict";a.fn.fusionSwitchTabOnLinkClick=function(b){var c,d;c=b||("#_"==document.location.hash.substring(0,2)?document.location.hash.replace("#_","#"):document.location.hash),d="#_"==c.substring(0,2)?c.split("#_")[1]:c.split("#")[1],c&&a(this).find('.nav-tabs li a[href="'+c+'"]').length&&(a(this).find(".nav-tabs li").removeClass("active"),a(this).find('.nav-tabs li a[href="'+c+'"]').parent().addClass("active"),a(this).find(".tab-content .tab-pane").removeClass("in").removeClass("active"),a(this).find('.tab-content .tab-pane[id="'+d+'"]').addClass("in").addClass("active")),c&&a(this).find('.nav-tabs li a[id="'+d+'"]').length&&(a(this).find(".nav-tabs li").removeClass("active"),a(this).find('.nav-tabs li a[id="'+d+'"]').parent().addClass("active"),a(this).find(".tab-content .tab-pane").removeClass("in").removeClass("active"),a(this).find('.tab-content .tab-pane[id="'+a(this).find('.nav-tabs li a[id="'+d+'"]').attr("href").split("#")[1]+'"]').addClass("in").addClass("active"))}}(jQuery),jQuery(document).ready(function(a){jQuery(".fusion-tabs").fusionSwitchTabOnLinkClick(),jQuery(".nav-tabs li").click(function(a){var b,c=jQuery(this),d=c.find("a").attr("href");c.attr("id");c.parents(".fusion-tabs").find(".nav li").removeClass("active"),c.parents(".fusion-tabs").find(d).find(".fusion-woo-slider").length&&(b=0,c.parents(".fusion-tabs").hasClass("horizontal-tabs")&&(b=c.parents(".fusion-tabs").find(".nav").height()),c.parents(".fusion-tabs").height(c.parents(".fusion-tabs").find(".tab-content").outerHeight(!0)+b)),setTimeout(function(){c.parents(".fusion-tabs").find(d).find(".shortcode-map").each(function(){jQuery(this).reinitializeGoogleMap()}),c.parents(".fusion-tabs").find(d).find(".fusion-carousel").length&&"function"==typeof generateCarousel&&generateCarousel(),c.parents(".fusion-tabs").find(d).find(".fusion-portfolio").each(function(){var a=jQuery(this).find(".fusion-portfolio-wrapper"),b=a.attr("id");b&&(a=jQuery("#"+b)),a.isotope()}),c.parents(".fusion-tabs").find(d).find(".fusion-gallery").each(function(){jQuery(this).isotope()}),jQuery(window).trigger("resize"),"function"==typeof jQuery.fn.fusionCalcFlipBoxesHeight&&c.parents(".fusion-tabs").find(d).find(".flip-box-inner-wrapper").each(function(){jQuery(this).fusionCalcFlipBoxesHeight()}),c.parents(".fusion-tabs").find(d).find(".fusion-woo-slider").length&&c.parents(".fusion-tabs").css("height",""),jQuery(".crossfade-images").each(function(){fusionResizeCrossfadeImagesContainer(jQuery(this)),fusionResizeCrossfadeImages(jQuery(this))}),c.parents(".fusion-tabs").find(d).find(".fusion-blog-shortcode").each(function(){var a,b,c=2;for(b=1;b<7;b++)jQuery(this).find(".fusion-blog-layout-grid").hasClass("fusion-blog-layout-grid-"+b)&&(c=b);a=Math.floor(100/c*100)/100+"%",jQuery(this).find(".fusion-blog-layout-grid").find(".fusion-post-grid").css("width",a),jQuery(this).find(".fusion-blog-layout-grid").isotope(),"function"==typeof calcSelectArrowDimensions&&calcSelectArrowDimensions()}),"function"==typeof calcSelectArrowDimensions&&calcSelectArrowDimensions()},350),a.preventDefault()}),Modernizr.mq("only screen and (max-width: "+fusionTabVars.content_break_point+"px)")&&jQuery(".tabs-vertical").addClass("tabs-horizontal").removeClass("tabs-vertical"),jQuery(window).on("resize",function(){Modernizr.mq("only screen and (max-width: "+fusionTabVars.content_break_point+"px)")?(jQuery(".tabs-vertical").addClass("tabs-original-vertical"),jQuery(".tabs-vertical").addClass("tabs-horizontal").removeClass("tabs-vertical")):jQuery(".tabs-original-vertical").removeClass("tabs-horizontal").addClass("tabs-vertical")})}),jQuery(window).load(function(){jQuery(".vertical-tabs").length&&jQuery(".vertical-tabs .tab-content .tab-pane").each(function(){var a;jQuery(this).parents(".vertical-tabs").hasClass("clean")?jQuery(this).css("min-height",jQuery(".vertical-tabs .nav-tabs").outerHeight()-10):jQuery(this).css("min-height",jQuery(".vertical-tabs .nav-tabs").outerHeight()),jQuery(this).find(".video-shortcode").length&&(a=parseInt(jQuery(this).find(".fusion-video").css("max-width").replace("px","")),jQuery(this).css({float:"none","max-width":a+60}))}),jQuery(window).on("resize",function(){jQuery(".vertical-tabs").length&&jQuery(".vertical-tabs .tab-content .tab-pane").css("min-height",jQuery(".vertical-tabs .nav-tabs").outerHeight())})});
!function(a){"use strict";a.fn.reinitializeGoogleMap=function(){var b,c,d,e,f=a(this).data("plugin_fusion_maps");if(f&&(b=f.map,c=b.getCenter(),d=f.markers,google.maps.event.trigger(b,"resize"),b.setCenter(c),d))for(e=0;e<d.length;e++)google.maps.event.trigger(d[e],"click"),google.maps.event.trigger(d[e],"click")}}(jQuery);
function getScrollBarWidth(){var a=jQuery("<div>").css({visibility:"hidden",width:100,overflow:"scroll"}).appendTo("body"),b=jQuery("<div>").css({width:"100%"}).appendTo(a).outerWidth();return a.remove(),100-b}jQuery(window).load(function(){var a=parseFloat(getScrollBarWidth());jQuery(".fusion-modal").each(function(){jQuery("body").append(jQuery(this))}),jQuery(".fusion-modal").bind("hidden.bs.modal",function(){jQuery("html").css("overflow",""),0!==a&&(jQuery("body").hasClass("layout-boxed-mode")&&jQuery('#sliders-container .main-flex[data-parallax="1"]').css("margin-left",function(b,c){return parseFloat(c)+a/2+"px"}),jQuery('body, .fusion-is-sticky .fusion-header, .fusion-is-sticky .fusion-secondary-main-menu, #sliders-container .main-flex[data-parallax="1"], #wpadminbar, .fusion-footer.fusion-footer-parallax').css("padding-right",""))}),jQuery(".fusion-modal").bind("show.bs.modal",function(){var b,c='body, .fusion-is-sticky .fusion-header, .fusion-is-sticky .fusion-secondary-main-menu, #sliders-container .main-flex[data-parallax="1"], #wpadminbar, .fusion-footer.fusion-footer-parallax';jQuery("html").css("overflow","visible"),0!==a&&(jQuery("body").hasClass("layout-boxed-mode")&&(c="body, #wpadminbar",jQuery('#sliders-container .main-flex[data-parallax="1"]').css("margin-left",function(b,c){return parseFloat(c)-a/2+"px"})),jQuery(c).css("padding-right",function(b,c){return parseFloat(c)+a+"px"})),b=jQuery(this),setTimeout(function(){b.find(".fusion-youtube").find("iframe").each(function(a){var b;1!==jQuery(this).parents(".fusion-video").data("autoplay")&&"true"!==jQuery(this).parents(".fusion-video").data("autoplay")||(jQuery(this).parents(".fusion-video").data("autoplay","false"),b="playVideo",this.contentWindow.postMessage('{"event":"command","func":"'+b+'","args":""}',"*"))}),b.find(".fusion-vimeo").find("iframe").each(function(a){1!==jQuery(this).parents(".fusion-video").data("autoplay")&&"true"!==jQuery(this).parents(".fusion-video").data("autoplay")||(jQuery(this).parents(".fusion-video").data("autoplay","false"),$f(jQuery(this)[0]).api("play"))}),b.find(".flexslider, .rev_slider_wrapper, .ls-container").length&&jQuery(window).trigger("resize"),"function"==typeof jQuery.fn.fusionCalcFlipBoxesHeight&&b.find(".flip-box-inner-wrapper").each(function(){jQuery(this).fusionCalcFlipBoxesHeight()}),b.find(".fusion-carousel").length&&"function"==typeof generateCarousel&&generateCarousel(),b.find(".fusion-blog-shortcode").each(function(){var a,b=2;for(i=1;i<7;i++)jQuery(this).find(".fusion-blog-layout-grid").hasClass("fusion-blog-layout-grid-"+i)&&(b=i);a=Math.floor(100/b*100)/100+"%",jQuery(this).find(".fusion-blog-layout-grid").find(".fusion-post-grid").css("width",a),jQuery(this).find(".fusion-blog-layout-grid").isotope(),"function"==typeof calcSelectArrowDimensions&&calcSelectArrowDimensions()}),"function"==typeof jQuery.fn.reinitializeGoogleMap&&b.find(".shortcode-map").each(function(){jQuery(this).reinitializeGoogleMap()}),b.find(".fusion-portfolio").each(function(){jQuery(this).find(".fusion-portfolio-wrapper").isotope()}),b.find(".fusion-gallery").each(function(){jQuery(this).isotope()}),b.find(".fusion-testimonials .reviews").each(function(){jQuery(this).css("height",jQuery(this).children(".active-testimonial").height())}),"function"==typeof calcSelectArrowDimensions&&calcSelectArrowDimensions()},350)}),1==jQuery("#sliders-container .tfs-slider").data("parallax")&&jQuery(".fusion-modal").css("top",jQuery(".header-wrapper").height()),jQuery(".fusion-modal").each(function(){jQuery(this).on("hide.bs.modal",function(){jQuery(this).find("iframe").each(function(a){this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),jQuery(this).find(".fusion-vimeo iframe").each(function(a){$f(this).api("pause")})})}),jQuery("[data-toggle=modal]").on("click",function(a){a.preventDefault()}),jQuery(".fusion-modal-text-link").click(function(a){a.preventDefault()})}),jQuery(document).ready(function(){jQuery(".fusion-modal").on("shown.bs.modal",function(){jQuery(this).find(".shortcode-map").each(function(){jQuery(this).reinitializeGoogleMap()})})});
!function(a){"use strict";a.fn.fusion_responsive_title_shortcode=function(){a(this).each(function(){var b=a(this),c=b.find("h1, h2, h3, h4, h5, h6"),d=c.data("min-width")?c.data("min-width"):c.outerWidth(),e=b.parent(),f=b.parents(".slide-content").length?e.width():e.outerWidth();(0!==d&&!1!==d&&"0"!==d||0!==f&&!1!==f&&"0"!==f)&&d+100>=f?(b.addClass("fusion-border-below-title"),c.data("min-width",d)):b.removeClass("fusion-border-below-title")})}}(jQuery),jQuery(document).ready(function(a){jQuery(".fusion-title").fusion_responsive_title_shortcode(),jQuery(window).on("resize",function(){jQuery(".fusion-title").fusion_responsive_title_shortcode()})});
var fusionAnimationsVars={"disable_mobile_animate_css":"0"};var fusionVideoVars={"status_vimeo":"1"};jQuery(window).load(function(){"function"==typeof jQuery.fn.equalHeights&&(jQuery(".fusion-events-shortcode").each(function(){jQuery(this).find(".fusion-events-meta").equalHeights()}),jQuery(window).on("resize",function(){jQuery(".fusion-events-shortcode").each(function(){jQuery(this).find(".fusion-events-meta").equalHeights()})}))});
var fusionTestimonialVars={"testimonials_speed":"4000"};jQuery(window).load(function(){function a(a,b,c,d){var e=jQuery(this).height();jQuery(this).parent().children().removeClass("active-testimonial"),jQuery(this).addClass("active-testimonial"),jQuery(this).parent().animate({height:e},500)}var b;jQuery().cycle&&(b={fx:"fade",before:a,containerResize:0,containerResizeHeight:1,height:"auto",width:"100%",fit:1,speed:500,delay:0},fusionTestimonialVars.testimonials_speed&&(b.timeout=parseInt(fusionTestimonialVars.testimonials_speed)),b.pager=".testimonial-pagination",jQuery(".fusion-testimonials .reviews").each(function(){1==jQuery(this).children().length&&jQuery(this).children().fadeIn(),b.pager="#"+jQuery(this).parent().find(".testimonial-pagination").attr("id"),b.random=jQuery(this).parent().data("random"),jQuery(this).cycle(b)}),jQuery(window).resize(function(){jQuery(".fusion-testimonials .reviews").each(function(){jQuery(this).css("height",jQuery(this).children(".active-testimonial").height())})}))});
jQuery(window).load(function(){window.fusionAccordianClick=!1,jQuery(document).on("click dblclick",".fusion-accordian .panel-title a",function(a){if((!jQuery(this).parents(".fusion-accordian").find(".toggle-fadein").length||jQuery(this).parents(".fusion-accordian").find(".toggle-fadein")[0]===jQuery(this).parents(".fusion-panel").find(".panel-collapse")[0])&&!0!==window.fusionAccordianClick){window.fusionAccordianClick=!0;var b,c,d;a.preventDefault(),b=jQuery(this),c=jQuery(jQuery(this).data("target")).find(".panel-body"),d=b.parents(".fusion-accordian").find(".panel-title a"),b.hasClass("collapsed")?void 0!==b.data("parent")?d.removeClass("active"):b.removeClass("active"):(void 0!==b.data("parent")&&d.removeClass("active"),b.addClass("active"),setTimeout(function(){"function"==typeof jQuery.fn.reinitializeGoogleMap&&c.find(".shortcode-map").each(function(){jQuery(this).reinitializeGoogleMap()}),c.find(".fusion-carousel").length&&"function"==typeof generateCarousel&&generateCarousel(),c.find(".fusion-portfolio").each(function(){jQuery(this).find(".fusion-portfolio-wrapper").isotope()}),c.find(".fusion-gallery").each(function(){jQuery(this).isotope()}),c.find(".flexslider, .rev_slider_wrapper, .ls-container").length&&jQuery(window).trigger("resize"),"function"==typeof jQuery.fn.fusionCalcFlipBoxesHeight&&c.find(".flip-box-inner-wrapper").each(function(){jQuery(this).fusionCalcFlipBoxesHeight()}),"function"==typeof jQuery.fn.equalHeights&&c.find(".fusion-fullwidth.fusion-equal-height-columns").each(function(){jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").equalHeights()}),c.find(".fusion-blog-shortcode").each(function(){var a,b=2;for(i=1;i<7;i++)jQuery(this).find(".fusion-blog-layout-grid").hasClass("fusion-blog-layout-grid-"+i)&&(b=i);a=Math.floor(100/b*100)/100+"%",jQuery(this).find(".fusion-blog-layout-grid").find(".fusion-post-grid").css("width",a),jQuery(this).find(".fusion-blog-layout-grid").isotope(),"function"==typeof calcSelectArrowDimensions&&calcSelectArrowDimensions()})},350)),window.fusionAccordianClick=!1}})}),jQuery(document).ready(function(a){jQuery(".fusion-accordian .panel-title a").click(function(a){a.preventDefault()})});
var fusionBgImageVars={"content_break_point":"800"};!function(a){"use strict";a.fn.fusion_set_bg_img_dims=function(){a(this).each(function(){var b,c,d;'<div class="fusion-clearfix"></div>'!==a.trim(a(this).html())&&'<div class="fusion-column-content-centered"><div class="fusion-column-content"></div></div><div class="fusion-clearfix"></div>'!==a.trim(a(this).html().replace(/\s/g,""))&&""!==a.trim(a(this).html())||!a(this).data("bg-url")||(b=new Image,b.src=a(this).data("bg-url"),c=parseInt(b.naturalHeight),d=parseInt(b.naturalWidth),a(this).attr("data-bg-height",c),a(this).attr("data-bg-width",d))})},a.fn.fusion_calculate_empty_column_height=function(){a(this).each(function(){var b,c,d,e,f;(a(this).parents(".fusion-equal-height-columns").length&&(Modernizr.mq("only screen and (max-width: "+fusionBgImageVars.content_break_point+"px)")||!0===a(this).data("empty-column"))||!a(this).parents(".fusion-equal-height-columns").length)&&('<div class="fusion-clearfix"></div>'!==a.trim(a(this).html())&&""!==a.trim(a(this).html())||(b=a(this).data("bg-height"),c=a(this).data("bg-width"),d=a(this).outerWidth(),e=d/c,f=b*e,a(this).height(f),(a("html").hasClass("ua-edge")||a("html").hasClass("ua-ie"))&&a(this).parent().height(f)))})}}(jQuery);
var fusionAnimationsVars={"disable_mobile_animate_css":"0"};!function(a){"use strict";a.fn.init_waypoint=function(){a().waypoint&&a(".fusion-animated").each(function(){var b,c,d=getWaypointOffset(a(this));"top-out-of-view"===d&&(b=getAdminbarHeight(),c="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():"0",d=b+c),a(this).waypoint(function(){var b,c,d;a(this).parents(".fusion-delayed-animation").length||(a(this).css("visibility","visible"),b=a(this).data("animationtype"),c=a(this).data("animationduration"),a(this).addClass(b),c&&(a(this).css("-moz-animation-duration",c+"s"),a(this).css("-webkit-animation-duration",c+"s"),a(this).css("-ms-animation-duration",c+"s"),a(this).css("-o-animation-duration",c+"s"),a(this).css("animation-duration",c+"s"),d=a(this),setTimeout(function(){d.removeClass(b)},1e3*c)))},{triggerOnce:!0,offset:d})})}}(jQuery),jQuery(document).ready(function(a){"1"!=fusionAnimationsVars.disable_mobile_animate_css&&cssua.ua.mobile?jQuery("body").addClass("dont-animate"):jQuery("body").addClass("do-animate")}),jQuery(window).load(function(){setTimeout(function(){jQuery(window).init_waypoint()},300)});
!function(a){function b(a,b){return a.toFixed(b.decimals)}a.fn.countTo=function(b){return b=a.extend({},a.fn.countTo.defaults,b||{}),a(this).each(function(){function c(){j+=g,i++,d(j),"function"==typeof e.onUpdate&&e.onUpdate.call(h,j),i>=f&&(clearInterval(k),j=e.to,"function"==typeof e.onComplete&&e.onComplete.call(h,j))}function d(b){var c=e.formatter.call(h,b,e);a(h).html(c)}var e=a.extend({},b,{from:parseFloat(a(this).attr("data-from")||b.from),to:parseFloat(a(this).attr("data-to")||b.to),speed:parseInt(a(this).attr("data-speed")||b.speed,10),refreshInterval:parseInt(a(this).attr("data-refresh-interval")||b.refreshInterval,10),decimals:parseInt(a(this).attr("data-decimals")||b.decimals,10)}),f=Math.ceil(e.speed/e.refreshInterval),g=(e.to-e.from)/f,h=this,i=0,j=e.from,k=setInterval(c,e.refreshInterval);d(j)})},a.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:b,onUpdate:null,onComplete:null}}(jQuery);
!function(a){a.fn.countDown=function(b){return config={},a.extend(config,b),diffSecs=this.setCountDown(config),config.onComplete&&a.data(a(this)[0],"callback",config.onComplete),config.omitWeeks&&a.data(a(this)[0],"omitWeeks",config.omitWeeks),a("#"+a(this).attr("id")+" .fusion-digit").html('<div class="top"></div><div class="bottom"></div>'),a(this).doCountDown(a(this).attr("id"),diffSecs,500),this},a.fn.stopCountDown=function(){clearTimeout(a.data(this[0],"timer"))},a.fn.startCountDown=function(){this.doCountDown(a(this).attr("id"),a.data(this[0],"diffSecs"),500)},a.fn.setCountDown=function(b){var c=new Date;b.targetDate?c=new Date(b.targetDate.month+"/"+b.targetDate.day+"/"+b.targetDate.year+" "+b.targetDate.hour+":"+b.targetDate.min+":"+b.targetDate.sec+(b.targetDate.utc?" UTC":"")):b.targetOffset&&(c.setFullYear(b.targetOffset.year+c.getFullYear()),c.setMonth(b.targetOffset.month+c.getMonth()),c.setDate(b.targetOffset.day+c.getDate()),c.setHours(b.targetOffset.hour+c.getHours()),c.setMinutes(b.targetOffset.min+c.getMinutes()),c.setSeconds(b.targetOffset.sec+c.getSeconds()));var d=new Date;if(b.gmtOffset){var e=60*b.gmtOffset*6e4,f=6e4*d.getTimezoneOffset();d=new Date(d.getTime()+e+f)}return diffSecs=Math.floor((c.valueOf()-d.valueOf())/1e3),a.data(this[0],"diffSecs",diffSecs),diffSecs},a.fn.doCountDown=function(b,c,d){$this=a("#"+b),c<=0&&(c=0,$this.data("timer")&&clearTimeout($this.data("timer"))),secs=c%60,mins=Math.floor(c/60)%60,hours=Math.floor(c/60/60)%24,1==$this.data("omitWeeks")?(days=Math.floor(c/60/60/24),weeks=Math.floor(c/60/60/24/7)):(days=Math.floor(c/60/60/24)%7,weeks=Math.floor(c/60/60/24/7)),days>99&&$this.find(".fusion-dash-days").find(".fusion-hundred-digit").css("display","inline-block"),days>999&&$this.find(".fusion-dash-days").find(".fusion-thousand-digit").css("display","inline-block"),weeks>99&&$this.find(".fusion-dash-weeks").find(".fusion-hundred-digit").css("display","inline-block"),$this.dashChangeTo(b,"fusion-dash-seconds",secs,d||800),$this.dashChangeTo(b,"fusion-dash-minutes",mins,d||1200),$this.dashChangeTo(b,"fusion-dash-hours",hours,d||1200),$this.dashChangeTo(b,"fusion-dash-days",days,d||1200),$this.dashChangeTo(b,"fusion-dash-weeks",weeks,d||1200),a.data($this[0],"diffSecs",c),c>0?(e=$this,t=setTimeout(function(){e.doCountDown(b,c-1)},1e3),a.data(e[0],"timer",t)):(cb=a.data($this[0],"callback"))&&a.data($this[0],"callback")()},a.fn.dashChangeTo=function(b,c,d,e){$this=a("#"+b);for(var f=$this.find("."+c+" .fusion-digit").length-1;f>=0;f--){var g=d%10;d=(d-g)/10,$this.digitChangeTo("#"+$this.attr("id")+" ."+c+" .fusion-digit:eq("+f+")",g,e)}},a.fn.digitChangeTo=function(b,c,d){var e=a(b+" div.top"),f=a(b+" div.bottom");d||(d=800),e.html()!=c+""&&e.not(":animated").length&&(e.css({display:"none"}),e.html(c||"0").fadeOut(d,function(){f.html(e.html()),f.css({display:"block",height:"auto"}),e.css({display:"none"})}))}}(jQuery);
var fusionVideoVars={"status_vimeo":"1"};jQuery(document).ready(function(a){var b;jQuery(".fusion-video").each(function(){!jQuery(this).parents(".fusion-modal").length&&1==jQuery(this).data("autoplay")&&jQuery(this).is(":visible")&&jQuery(this).find("iframe").each(function(a){jQuery(this).attr("src",jQuery(this).attr("src").replace("autoplay=0","autoplay=1"))})}),b=!1,Number(fusionVideoVars.status_vimeo)&&jQuery(".fusion-vimeo").length&&jQuery.getScript("https://secure-a.vimeocdn.com/js/froogaloop2.min.js").done(function(a,c){b=!0}),jQuery(window).on("resize",function(){var a,c,d=document.querySelectorAll("iframe"),e=d.length;if(jQuery(".fusion-youtube").each(function(){jQuery(this).is(":visible")||jQuery(this).parents(".fusion-modal").length&&!jQuery(this).parents(".fusion-modal").is(":visible")||jQuery(this).find("iframe").each(function(a){this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}),b)for(c=0;c<e;c++)jQuery(d[c]).is(":visible")||jQuery(d[c]).parents(".fusion-modal").length&&!jQuery(d[c]).parents(".fusion-modal").is(":visible")||(a=$f(d[c]),a.api("pause"))})});
!function(a){"use strict";a.fn.animate_content_boxes=function(){if(a().waypoint){var b=a(this),c=0;b.find(".content-box-column").each(function(){var b,d,e=this;setTimeout(function(){a(e).find(".fusion-animated").css("visibility","visible"),b=a(e).find(".fusion-animated").data("animationtype"),d=a(e).find(".fusion-animated").data("animationduration"),a(e).find(".fusion-animated").addClass(b),d&&(a(e).find(".fusion-animated").css("-moz-animation-duration",d+"s"),a(e).find(".fusion-animated").css("-webkit-animation-duration",d+"s"),a(e).find(".fusion-animated").css("-ms-animation-duration",d+"s"),a(e).find(".fusion-animated").css("-o-animation-duration",d+"s"),a(e).find(".fusion-animated").css("animation-duration",d+"s")),(a(e).parents(".fusion-content-boxes").hasClass("content-boxes-timeline-horizontal")||a(e).parents(".fusion-content-boxes").hasClass("content-boxes-timeline-vertical"))&&a(e).addClass("fusion-appear")},c),c+=parseInt(a(this).parents(".fusion-content-boxes").attr("data-animation-delay"))})}}}(jQuery),jQuery(window).load(function(){"function"==typeof jQuery.fn.equalHeights&&(jQuery(".content-boxes-icon-boxed").each(function(){jQuery(this).find(".content-box-column .content-wrapper-boxed").equalHeights(),jQuery(this).find(".content-box-column .content-wrapper-boxed").css("overflow","visible")}),jQuery(window).on("resize",function(){jQuery(".content-boxes-icon-boxed").each(function(){jQuery(this).find(".content-box-column .content-wrapper-boxed").equalHeights(),jQuery(this).find(".content-box-column .content-wrapper-boxed").css("overflow","visible")})}),jQuery(".content-boxes-clean-vertical").each(function(){jQuery(this).find(".content-box-column .col").equalHeights(),jQuery(this).find(".content-box-column .col").css("overflow","visible")}),jQuery(window).on("resize",function(){jQuery(".content-boxes-clean-vertical").each(function(){jQuery(this).find(".content-box-column .col").equalHeights(),jQuery(this).find(".content-box-column .col").css("overflow","visible")})}),jQuery(".content-boxes-clean-horizontal").each(function(){jQuery(this).find(".content-box-column .col").equalHeights(),jQuery(this).find(".content-box-column .col").css("overflow","visible")}),jQuery(window).on("resize",function(){jQuery(".content-boxes-clean-horizontal").each(function(){jQuery(this).find(".content-box-column .col").equalHeights(),jQuery(this).find(".content-box-column .col").css("overflow","visible")})})),jQuery(window).load(function(){jQuery(".fusion-modal .fusion-content-boxes").each(function(){jQuery(this).appear(function(){jQuery(this).animate_content_boxes()})})})}),jQuery(document).ready(function(a){jQuery(".link-area-box").on("click",function(){jQuery(this).data("link")&&("_blank"===jQuery(this).data("link-target")?(window.open(jQuery(this).data("link"),"_blank"),jQuery(this).find(".heading-link").removeAttr("href"),jQuery(this).find(".fusion-read-more").removeAttr("href")):window.location=jQuery(this).data("link"),jQuery(this).find(".heading-link").attr("target",""),jQuery(this).find(".fusion-read-more").attr("target",""))}),jQuery(".link-type-button").each(function(){jQuery(this).parents(".content-boxes-clean-vertical").length>=1&&($buttonHeight=jQuery(".fusion-read-more-button").outerHeight(),jQuery(this).find(".fusion-read-more-button").css("top",$buttonHeight/2))}),jQuery(".link-area-link-icon .fusion-read-more-button, .link-area-link-icon .fusion-read-more, .link-area-link-icon .heading").mouseenter(function(){jQuery(this).parents(".link-area-link-icon").addClass("link-area-link-icon-hover")}),jQuery(".link-area-link-icon .fusion-read-more-button, .link-area-link-icon .fusion-read-more, .link-area-link-icon .heading").mouseleave(function(){jQuery(this).parents(".link-area-link-icon").removeClass("link-area-link-icon-hover")}),jQuery(".link-area-box").mouseenter(function(){jQuery(this).addClass("link-area-box-hover")}),jQuery(".link-area-box").mouseleave(function(){jQuery(this).removeClass("link-area-box-hover")}),jQuery(".fusion-content-boxes").each(function(){var a=getWaypointOffset(jQuery(this));jQuery(this).waypoint(function(){jQuery(this).animate_content_boxes()},{triggerOnce:!0,offset:a})})});
function fusionCalcColumnEqualHeights(){jQuery(".fusion-fullwidth.fusion-equal-height-columns").each(function(){jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").not(function(a,b){return jQuery(b).parents(".fusion-column-wrapper").length?1:0}).equalHeights()}),jQuery(".fusion-fullwidth.fusion-equal-height-columns .fusion-builder-row").each(function(){jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").not(function(a,b){return jQuery(b).parent(".fusion-column-wrapper").length?1:0}).equalHeights()}),jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").length?jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").fusion_calculate_empty_column_height():jQuery(".fusion-layout-column > .fusion-column-wrapper").fusion_calculate_empty_column_height()}jQuery(window).load(function(){jQuery(".fusion-fullwidth.fusion-equal-height-columns").each(function(){jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").not(function(a,b){return jQuery(b).parents(".fusion-column-wrapper").length?1:0}).equalHeights()}),jQuery(".fusion-fullwidth.fusion-equal-height-columns .fusion-builder-row").each(function(){jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").not(function(a,b){return jQuery(b).parent(".fusion-column-wrapper").length?1:0}).equalHeights()}),jQuery(".fusion-layout-column .fusion-column-wrapper").fusion_set_bg_img_dims(),jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").length?jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").fusion_calculate_empty_column_height():jQuery(".fusion-layout-column > .fusion-column-wrapper").fusion_calculate_empty_column_height(),jQuery(window).on("resize",function(){fusionCalcColumnEqualHeights(),setTimeout(function(){fusionCalcColumnEqualHeights()},500)})});
var fusionCountersBox={"counter_box_speed":"1000"};!function(a){"use strict";a.fn.$fusionBoxCounting=function(){var b=a(this).data("value"),c=a(this).data("direction"),d=a(this).data("delimiter"),e=0,f=b,g=fusionCountersBox.counter_box_speed,h=Math.round(fusionCountersBox.counter_box_speed/100);d||(d=""),"down"===c&&(e=b,f=0),a(this).countTo({from:e,to:f,refreshInterval:h,speed:g,formatter:function(a,b){return a=a.toFixed(b.decimals),a=a.replace(/\B(?=(\d{3})+(?!\d))/g,d),"-0"==a&&(a=0),a}})}}(jQuery),jQuery(window).load(function(){jQuery(".fusion-counter-box").not(".fusion-modal .fusion-counter-box").each(function(){var a=getWaypointOffset(jQuery(this));jQuery(this).waypoint(function(){jQuery(this).find(".display-counter").each(function(){jQuery(this).$fusionBoxCounting()})},{triggerOnce:!0,offset:a})}),jQuery(".fusion-modal .fusion-counter-box").on("appear",function(){jQuery(this).find(".display-counter").each(function(){jQuery(this).$fusionBoxCounting()})})});
var fusionContainerVars={"content_break_point":"800"};jQuery(window).load(function(){jQuery(".fullwidth-faded").fusionScroller({type:"fading_blur"})}),jQuery(document).ready(function(a){Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")&&jQuery(".fullwidth-faded").each(function(){var a=jQuery(this).css("background-image");jQuery(this).parent().css("background-image",a),jQuery(this).remove()})});
!function(a){"use strict";a.fn.fusion_countdown=function(){var b=a(this),c=b.data("timer").split("-"),d=b.data("gmt-offset"),e=b.data("omit-weeks");b.countDown({gmtOffset:d,omitWeeks:e,targetDate:{year:c[0],month:c[1],day:c[2],hour:c[3],min:c[4],sec:c[5]}}),b.css("visibility","visible")}}(jQuery),jQuery(document).ready(function(a){jQuery(".fusion-countdown-counter-wrapper").each(function(){$countdownID=jQuery(this).attr("id"),jQuery("#"+$countdownID).fusion_countdown()})});
!function(a){"use strict";a.fn.fusionCalcFlipBoxesHeight=function(){var b,c,d=a(this),e=0;d.find(".flip-box-front").css("min-height",""),d.find(".flip-box-back").css("min-height",""),d.find(".flip-box-front-inner").css("margin-top",""),d.find(".flip-box-back-inner").css("margin-top",""),d.css("min-height",""),setTimeout(function(){d.find(".flip-box-front").outerHeight()>d.find(".flip-box-back").outerHeight()?(c=d.find(".flip-box-front").height(),b=d.find(".flip-box-front").outerHeight(),e=(c-d.find(".flip-box-back-inner").outerHeight())/2,d.find(".flip-box-back").css("min-height",b),d.css("min-height",b),d.find(".flip-box-back-inner").css("margin-top",e)):(c=d.find(".flip-box-back").height(),b=d.find(".flip-box-back").outerHeight(),e=(c-d.find(".flip-box-front-inner").outerHeight())/2,d.find(".flip-box-front").css("min-height",b),d.css("min-height",b),d.find(".flip-box-front-inner").css("margin-top",e))},100)}}(jQuery),jQuery(window).load(function(){jQuery(".flip-box-inner-wrapper").each(function(){jQuery(this).fusionCalcFlipBoxesHeight()}),jQuery(window).resize(function(){jQuery(".flip-box-inner-wrapper").each(function(){jQuery(this).fusionCalcFlipBoxesHeight()})})}),jQuery(document).ready(function(a){jQuery(".fusion-flip-box").mouseover(function(){jQuery(this).addClass("hover")}),jQuery(".fusion-flip-box").mouseout(function(){jQuery(this).removeClass("hover")})});
jQuery(window).load(function(){jQuery(".fusion-gallery-layout-grid, .fusion-gallery-layout-masonry").each(function(){var a,b=jQuery(this);a=b.find(".fusion-gallery-column"),b.css("height",b.height()),a.hide(),imagesLoaded(a,function(){b.css("height",""),a.fadeIn(),b.isotope({layoutMode:"packery",itemSelector:".fusion-gallery-column",isOriginLeft:!jQuery("body.rtl").length,resizable:!0}),jQuery(window).trigger("resize"),jQuery('[data-spy="scroll"]').each(function(){jQuery(this).scrollspy("refresh")})})})});
!function(a){"use strict";a.fn.fusion_draw_circles=function(){var b=a(this),c=b.children(".counter-circle").attr("data-countdown"),d=b.children(".counter-circle").attr("data-filledcolor"),e=b.children(".counter-circle").attr("data-unfilledcolor"),f=b.children(".counter-circle").attr("data-scale"),g=b.children(".counter-circle").attr("data-size"),h=b.children(".counter-circle").attr("data-speed"),i=b.children(".counter-circle").attr("data-strokesize"),j=b.children(".counter-circle").attr("data-percent");f&&(f=a("body").css("color")),c?(b.children(".counter-circle").attr("data-percent",100),b.children(".counter-circle").easyPieChart({barColor:d,trackColor:e,scaleColor:f,scaleLength:5,lineCap:"round",lineWidth:i,size:g,rotate:0,animate:{duration:h,enabled:!0}}),b.children(".counter-circle").data("easyPieChart").enableAnimation(),b.children(".counter-circle").data("easyPieChart").update(j)):b.children(".counter-circle").easyPieChart({barColor:d,trackColor:e,scaleColor:f,scaleLength:5,lineCap:"round",lineWidth:i,size:g,rotate:0,animate:{duration:h,enabled:!0}})},a.fn.fusion_recalc_circles=function(b){var c,d,e=a(this);e.is(":hidden")||(e.attr("data-currentsize",e.width()),e.removeAttr("style"),e.children().removeAttr("style"),e.data("currentsize"),c=e.data("originalsize"),d=e.parent().width(),d<e.data("currentsize")?(e.css({width:d,height:d,"line-height":d+"px"}),e.find(".fusion-counter-circle").each(function(){a(this).css({width:d,height:d,"line-height":d+"px","font-size":50*d/220}),a(this).data("size",d),a(this).data("strokesize",d/220*11),b||a(this).data("animate",!1),a(this).attr("data-size",d),a(this).attr("data-strokesize",d/220*11)})):(e.css({width:c,height:c,"line-height":c+"px"}),e.find(".fusion-counter-circle").each(function(){a(this).css({width:c,height:c,"line-height":c+"px","font-size":50*c/220}),a(this).data("size",c),a(this).data("strokesize",c/220*11),b||a(this).data("animate",!1),a(this).attr("data-size",c),a(this).attr("data-strokesize",c/220*11)})))},a.fn.fusion_redraw_circles=function(){var b=a(this);b.is(":hidden")||(b.fusion_recalc_circles(!1),b.find("canvas").remove(),b.find(".counter-circle").removeData("easyPieChart"),b.fusion_draw_circles())}}(jQuery),jQuery(window).load(function(){jQuery(".counter-circle-wrapper").not(".fusion-accordian .counter-circle-wrapper, .fusion-tabs .counter-circle-wrapper, .fusion-modal .counter-circle-wrapper").each(function(){var a=getWaypointOffset(jQuery(this));jQuery(this).waypoint(function(){jQuery(this).fusion_recalc_circles(!0),jQuery(this).fusion_draw_circles()},{triggerOnce:!0,offset:a})}),jQuery(".counter-circle-wrapper").not(".fusion-modal .counter-circle-wrapper").each(function(){var a,b,c=jQuery(window).width(),d=jQuery(window).height(),e=getWaypointOffset(jQuery(this));"top-out-of-view"===e&&(a=getAdminbarHeight(),b="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():"0",e=a+b),jQuery(this).waypoint(function(){var a=jQuery(this);jQuery(window).on("resize",function(){(jQuery(window).width()!=c||jQuery(window).width()!=c&&jQuery(window).height()!=d)&&a.fusion_redraw_circles()})},{triggerOnce:!0,offset:e})}),jQuery(".fusion-accordian .counter-circle-wrapper, .fusion-tabs .counter-circle-wrapper, .fusion-modal .counter-circle-wrapper").on("appear",function(){jQuery(this).fusion_draw_circles()})});