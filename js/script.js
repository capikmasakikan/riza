$(function () {
    "use strict";

    /* FIXED MENU - HEADER */
    function menuscroll() {
        var $navmenu = $('.nav-menu');

        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass('is-scrolling');
        }
    }

    menuscroll();

    $(window).on('scroll', function () {
        menuscroll();
    });

    /* NAVBAR CLOSE ON CLICK */
    $('.navbar-nav > li:not(.dropdown) > a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    /* NAVBAR TOGGLE BACKGROUND */
    var siteNav = $('#navbar');

    siteNav.on('show.bs.collapse', function () {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    });

    siteNav.on('hide.bs.collapse', function () {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    });

    /* SMOOTH SCROLLING */
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[data-toggle="tab"]')
        .on('click', function (event) {

            if (
                location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    event.preventDefault();

                    $('html, body').animate(
                        { scrollTop: target.offset().top },
                        800
                    );
                }
            }
        });
});