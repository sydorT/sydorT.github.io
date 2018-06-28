$(document).ready(function () {

    initMobileMenu();

    function initMobileMenu() {
        $('.nav__mobile-btn').click(function () {
            $(this).toggleClass('active');
            if ($('.nav__list').is(":visible")) {
                $('.nav__top').slideDown();
                $('.nav__list').fadeOut(200);
                $('body').css('overflow', 'auto');
                $('body').css('overflow-x', 'hidden');
                $('body').removeClass('fixed');
            } else {
                $('.nav__top').slideUp();
                $('.nav__list').fadeIn(200);
                $('body').css('overflow', 'hidden');
                $('body').addClass('fixed');
            }
        });
    }

    if ($('.slider').length > 0) {
        $('.slider').slick({
            dots: true,
            dotsClass: "my-dots",
            infinite: true,
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    }

    if ($('.testimonials__carousel').length > 0) {
        $('.testimonials__carousel').slick({
            dots: true,
            dotsClass: "my-dots",
            infinite: true,
            slidesToShow: 1,
            arrows: false
        });
    }

    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function (j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
});