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
    Notif
    ======================================*/
    window.onscroll = function (e) {
        var wPosition = window.pageYOffset;
        var startRange = document.getElementById('food-section').offsetTop - 200;
        var endRange = document.getElementById('drink-section').offsetTop;
        if(wPosition > startRange && wPosition < endRange)
        {
        document.getElementById('notif-section').style.opacity="1";
        }
        else
        {
        document.getElementById('notif-section').style.opacity="0";
        }    
    };
 
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