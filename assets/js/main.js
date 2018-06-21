// $(document).ready(function() {
// jQuery.fn.spectragram.accessData = {
//     accessToken: '3236163376.1677ed0.de857991f0b84e90976780423d52341c'
// }
// });


$(document).ready(function() {

if ( $(window).width() > 480) { 
// Parallax    
function isInViewport(node) {
    var rect = node.getBoundingClientRect()
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
    }
    $(window).scroll(function() {
    var scrolled = $(window).scrollTop()
    $('.parallax').each(function(index, element) {
        var initY = $(this).offset().top
        var height = $(this).height()
        var endY  = initY + $(this).height()
    
        // Check if the element is in the viewport.
        var visible = isInViewport(this)
        if(visible) {
        var diff = scrolled - initY
        var ratio = Math.round((diff / height) * 100)
        $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
        }
    })
    })
};


// Page scroll
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


// Scroll to top
$('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 900);
});


// Autohide Header
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

// Carousel
$("#owl-one").owlCarousel({
    items: 1,
    singleItem: true,
    dots: false,
    nav: true,
    loop: true
});



});