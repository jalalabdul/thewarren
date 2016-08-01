function main() {

(function () {
   'use strict';

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });
 
    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 20) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });
    
    /*====================================
    Scroll to Top Button
    ======================================*/
    
    $(document).ready(function() {
            // Show or hide the sticky footer button
            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $('.go-top').fadeIn(200);
                } else {
                    $('.go-top').fadeOut(200);
                }
            });

            // Animate the scroll to top
            $('.go-top').click(function(event) {
                event.preventDefault();

                $('html, body').animate({scrollTop: 0}, 900);
            })
        });

    $(document).ready(function() {
            // Show or hide the sticky footer button
            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $('.navbar-brand').fadeIn(200);
                } else {
                    $('.navbar-brand').fadeOut(200);
                }
            });
        });
	
  	/*====================================
    WOW JS
    ======================================*/	

	new WOW().init();
	//smoothScroll
	smoothScroll.init();
    
    $(function() {
     var windowWidth = $(window).width();
     if(windowWidth > 767){
  skrollr.init({
  forceHeight: false
  });
  }});

	
}());


}
main();