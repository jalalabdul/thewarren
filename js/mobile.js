/*====================================
Fix Menu on Mobile
======================================*/

$(document).ready(function() {

    var $target = $(".nav");

    enquire.register("screen and (max-width:500px)", {
        match: function() {
            $target.addClass("nav-mobile");
            $('.nav-mobile a').on('click', function(){
            $('.btn-navbar').click(); //bootstrap 2.x
            $('.navbar-toggle').click() //bootstrap 3.x by Richard
            });
        },

        unmatch: function() {
            $target.removeClass("nav-mobile");
        }
    }).listen();
    });


$(function () {
  // Init function
  function skrollrInit() {
    skrollr.init(yourOptions);
  }

  // If window width is large enough, initialize skrollr
  if ($(window).width() > 767) {
    skrollrInit();
  }

  // On resize, check window width, if too small
  // and skrollr instance exists, destroy;
  // Otherwise, if window is large enough
  // and skrollr instance does not exist, initialize skrollr.
  $(window).on('resize', function () {
    var _skrollr = skrollr.get(); // get() returns the skrollr instance or undefined
    var windowWidth = $(window).width();

    if ( windowWidth <= 767 && _skrollr !== undefined ) {
      _skrollr.destroy();
    } else if ( windowWidth > 767 && _skrollr === undefined ) {
      skrollrInit();
    }
  });
});