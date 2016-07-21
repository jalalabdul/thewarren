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