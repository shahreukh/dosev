
!function(e){jQuery.fn.menuzord=function(n){function i(n){"fade"==p.effect?e(n).children(".dropdown, .megamenu").stop(!0,!0).delay(p.showDelay).fadeIn(p.showSpeed).addClass(p.animation):e(n).children(".dropdown, .megamenu").stop(!0,!0).delay(p.showDelay).slideDown(p.showSpeed).addClass(p.animation)}function d(n){"fade"==p.effect?e(n).children(".dropdown, .megamenu").stop(!0,!0).delay(p.hideDelay).fadeOut(p.hideSpeed).removeClass(p.animation):e(n).children(".dropdown, .megamenu").stop(!0,!0).delay(p.hideDelay).slideUp(p.hideSpeed).removeClass(p.animation),e(n).children(".dropdown, .megamenu").find(".dropdown, .megamenu").stop(!0,!0).delay(p.hideDelay).fadeOut(p.hideSpeed)}function o(){e(g).find(".dropdown, .megamenu").hide(0),navigator.userAgent.match(/Mobi/i)||window.navigator.msMaxTouchPoints>0||"click"==p.trigger?(e(".menuzord-menu > li > a, .menuzord-menu ul.dropdown li a").bind("click touchstart",function(n){return n.stopPropagation(),n.preventDefault(),e(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(!0,!0).fadeOut(300),"none"==e(this).siblings(".dropdown, .megamenu").css("display")?(i(e(this).parent("li")),!1):(d(e(this).parent("li")),void(window.location.href=e(this).attr("href")))}),e(document).bind("click.menu touchstart.menu",function(n){0==e(n.target).closest(".menuzord").length&&e(".menuzord-menu").find(".dropdown, .megamenu").fadeOut(300)})):e(w).bind("mouseenter",function(){i(this)}).bind("mouseleave",function(){d(this)})}function t(){e(g).find(".dropdown, .megamenu").hide(0),e(g).find(".indicator").each(function(){e(this).parent("a").siblings(".dropdown, .megamenu").length>0&&e(this).bind("click",function(n){e(g).scrollTo({top:0,left:0},600),"A"==e(this).parent().prop("tagName")&&n.preventDefault(),"none"==e(this).parent("a").siblings(".dropdown, .megamenu").css("display")?(e(this).parent("a").siblings(".dropdown, .megamenu").delay(p.showDelay).slideDown(p.showSpeed),e(this).parent("a").parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(p.hideSpeed)):e(this).parent("a").siblings(".dropdown, .megamenu").slideUp(p.hideSpeed)})})}function a(){var n=e(g).children("li").children(".dropdown, .megamenu");if(e(window).innerWidth()>v)for(var i=e(f).outerWidth(!0),d=0;d<n.length;d++)e(n[d]).parent("li").position().left+e(n[d]).outerWidth()>i?e(n[d]).css("right",0):((i==e(n[d]).outerWidth()||i-e(n[d]).outerWidth()<20)&&e(n[d]).css("left",0),e(n[d]).parent("li").position().left+e(n[d]).outerWidth()<i&&e(n[d]).css("right","auto"))}function s(){e(g).hide(0),e(m).show(0).click(function(){"none"==e(g).css("display")?e(g).slideDown(p.showSpeed):e(g).slideUp(p.hideSpeed).find(".dropdown, .megamenu").hide(p.hideSpeed)})}function r(){e(g).show(0),e(m).hide(0)}function l(){e(f).find("li, a").unbind(),e(document).unbind("click.menu touchstart.menu")}function h(){function n(n){var i=e(n).find(".menuzord-tabs-nav > li"),d=e(n).find(".menuzord-tabs-content");e(i).bind("click touchstart",function(n){n.stopPropagation(),n.preventDefault(),e(i).removeClass("active"),e(this).addClass("active"),e(d).hide(0),e(d[e(this).index()]).show(0)})}if(e(g).find(".menuzord-tabs").length>0)for(var i=e(g).find(".menuzord-tabs"),d=0;d<i.length;d++)n(i[d])}function c(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}function u(){if(a(),c()<=v&&b>v&&(l(),p.responsive?(s(),t()):o()),c()>v&&v>=y&&(l(),r(),o()),b=c(),y=c(),h(),/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&c()<v){var n=new Number(RegExp.$1);8==n&&(e(m).hide(0),e(g).show(0),l(),o())}}var p;e.extend(p={showSpeed:300,hideSpeed:300,trigger:"hover",showDelay:0,hideDelay:0,effect:"fade",align:"left",responsive:!0,animation:"none",indentChildren:!0,indicatorFirstLevel:"+",indicatorSecondLevel:"+",scrollable:!0,scrollableMaxHeight:400},n);var m,f=e(this),g=e(f).children(".menuzord-menu"),w=e(g).find("li"),v=900,b=2e3,y=200;e(g).children("li").children("a").each(function(){e(this).siblings(".dropdown, .megamenu").length>0&&e(this).append("<span class='indicator'>"+p.indicatorFirstLevel+"</span>")}),e(g).find(".dropdown").children("li").children("a").each(function(){e(this).siblings(".dropdown").length>0&&e(this).append("<span class='indicator'>"+p.indicatorSecondLevel+"</span>")}),"right"==p.align&&e(g).addClass("menuzord-right"),p.indentChildren&&e(g).addClass("menuzord-indented"),p.responsive&&(e(f).addClass("menuzord-responsive").prepend("<a href='javascript:void(0)' class='showhide'><em></em><em></em><em></em></a>"),m=e(f).children(".showhide")),p.scrollable&&p.responsive&&e(g).css("max-height",p.scrollableMaxHeight).addClass("scrollable").append("<li class='scrollable-fix'></li>"),u(),e(window).resize(function(){u(),a()})}}(jQuery);

(function($){$.scrollToElement = function($element, speed){speed = speed || 750;$("html, body").animate({scrollTop:$element.offset().top, scrollLeft:$element.offset().left }, speed);return $element;};$.fn.scrollTo = function(speed){speed = speed || "normal";return "";};})(jQuery);

  $("#menuzord").menuzord({
    align: "left",
    effect: "slide",
    animation: "none",
    indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
    indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
  });

function TM_topnavAnimate() {
    if ($(window).scrollTop() > (50)) {
        $(".navbar-sticky-animated").removeClass("animated-active");
    } else {
        $(".navbar-sticky-animated").addClass("animated-active");
    }
}

$(window).on( 'scroll', function(){
                TM_topnavAnimate();
    });

  
    $('.bxslider_home').bxSlider({
        mode: 'fade',
        touchEnabled: false,
        onSliderLoad: function(){
            jQuery(".bxloadings").css("display", "none");
            jQuery(".bxslider_home").css("visibility", "visible");
        }
    });

    $('#publications-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav: true,
          navText: [
              '<i class="fa fa-angle-left"></i>',
              '<i class="fa fa-angle-right"></i>'
          ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
 
    $('#photogallery-carousel').owlCarousel({
        items:4,
        loop:false,
        margin:10,
        nav:true,
              navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });
    $('#photogallery-two-carousel').owlCarousel({
        items:4,
        loop:false,
        margin:10,
        nav:false,
              navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });
   
  
    $('#photogallery-carousel-mobile').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        dots:false,
        items:1
    });
  
    $('#news-carousel').owlCarousel({
      dots: false,
        loop:true,
        margin:10,
        nav: false,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
   $('#single-carousel-1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        dots:false,
        items:1
    });
   $('#single-carousel-2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        dots:false,
        items:1
    });
   $('#single-carousel-3').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        dots:false,
        items:1
    });