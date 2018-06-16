$(document).ready(function() {
jQuery.fn.spectragram.accessData = {
    accessToken: '3236163376.1677ed0.de857991f0b84e90976780423d52341c'
}
});

$(document).ready(function() {
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

if ( $(window).width() > 480) { 
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});

$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 20) {
        $('.navbar-default').addClass('on');
    } else {
        $('.navbar-default').removeClass('on');
    }
});
};


// Animate the scroll to top
$('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 900);
});

$('.instagram').spectragram('getUserFeed', {
    size: 'medium',
    max: 6,
    wrapEachWith: '<div class="grid-item"><div>'
});
});

$(window).on('load', function() {
$('.instagram').isotope({
    itemSelector: '.grid-item',
    isFitWidth: true,
    layoutMode: 'masonry',
    masonry: {
      columnWidth: 110
    },
  }); 
});

$(document).ready(function() {
if ( $(window).width() < 480) { 
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar').removeClass('scrolled');
        $('.navbar-default').remove('on');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').addClass('scrolled');
            $('.navbar-default').addClass('on');
        }
    }
    
    lastScrollTop = st;
}
}
});