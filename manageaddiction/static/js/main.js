$(document).ready(function () {

    initMobileMenu();

    function initMobileMenu() {
        $('.nav__mobile-btn').click(function () {
            $(this).toggleClass('active');
            if ($('.nav__list').is(":visible")) {
                $('.nav__list').fadeOut(200);
                $('body').css('overflow', 'auto');
                $('body').css('overflow-x', 'hidden');
                $('body').removeClass('fixed');
            } else {
                $('.nav__list').fadeIn(200);
                $('body').css('overflow', 'hidden');
                $('body').addClass('fixed');
            }
        });
    }
   
    $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ["", ""],
        rewindNav: true
    })
});