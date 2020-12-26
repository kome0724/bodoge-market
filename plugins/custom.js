(function($) {
"use strict";

/* ==============================================
LOADER -->
=============================================== */

    $(window).load(function() {
        $('#loader').delay(300).fadeOut('slow');
        $('#loader-container').delay(200).fadeOut('slow');
        $('body').delay(300).css({'overflow':'visible'});
    })

/* ==============================================
MENU -->
=============================================== */

    $('ul.dropdown-menu [data-toggle=dropdown]').bind('click', function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        $(this).parent().addClass('open');
        $(this).parent().find("ul").parent().find("li.dropdown").addClass('open');
    });

/* ==============================================
FUN -->
=============================================== */

    function count($this){
        var current = parseInt($this.html(), 10);
        current = current + 10;
        $this.html(++current);
        if(current > $this.data('count')){
        $this.html($this.data('count'));
        } 
        else {    
        setTimeout(function(){count($this)}, 10);
        }
        }        
        $(".stat-count").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

/* ==============================================
FIXED MENU -->
=============================================== */

    $(".header").affix({
        offset: {
            top: 100, 
            bottom: function () {
            return (this.bottom = $('.section-footer').outerHeight(true))
            }
        }
    })

/* ---------------------------------------------
WINDOWS HEIGHT JS -->
 --------------------------------------------- */

    $(".js-height-full").height($(window).height());
        $(".js-height-parent").each(function(){
        $(this).height($(this).parent().first().height());
    });

/* ---------------------------------------------
TOPBAR HOVER -->
 --------------------------------------------- */

    jQuery('.btn-group').hover(function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    }, function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
    });
    //Add Hover effect to menus
    jQuery('.topbar .dropdown').hover(function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    }, function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
    });

/* ==============================================
BACK TOP -->

    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 1) {
        jQuery('.scroll-top').css({bottom:"25px"});
        } else {
        jQuery('.scroll-top').css({bottom:"-100px"});
        }
        });
        jQuery('.scroll-top').click(function(){
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });
=============================================== */

/* ==============================================
FLEXSLIDER -->
=============================================== */

    $(window).load(function(){
        $('#post-slider').flexslider({
            animation: "fade",
            directionNav: false, 
            controlNav: true
        });
    });
		
/* ==============================================
CAROUSEL -->
=============================================== */

    $('#owl-3-col-2').owlCarousel({
        loop:true,
        margin:15,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('#owl-3-col').owlCarousel({
        loop:true,
        margin:15,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('#owl-4-col-2').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('#owl-4-col').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('#owl-testimonial').owlCarousel({
        loop:true,
        margin:15,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
    })

    $('#owl-client').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })

/* ==============================================
ANIMATION -->
=============================================== */

    new WOW({
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,       // default
      live:         true        // default
    }).init();


})(jQuery);