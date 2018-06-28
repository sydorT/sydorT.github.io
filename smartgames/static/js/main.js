$(document).ready(function () {
    initMobileMenu();
    closeMobileMenu();
    initMap();
    closeMap();

    var timeoutId = null;
    var isShowing = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            if (!isShowing) {
                showBot();
            }
        } else {
            isShowing = false;
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            $('.top-btn').removeClass('active');
            $('.chatbot__wrapper').removeClass('active');
            $('.chatbot').removeClass('active');
            $('.chatbot__message').fadeOut();
        }
    });

    function showBot() {
        isShowing = true;
        $('.top-btn').addClass('active');
        $('.chatbot').addClass('active');
        $('.chatbot__wrapper').addClass('active');
        /*timeoutId = setTimeout(function () {
            isShowing = false;
            $('.chatbot__message').fadeIn(800);
        }, 1000);*/
    }

    $('.chatbot').click(function () {
        $('.chatbot__message').fadeIn('800');
    });

    $('.top-btn').click(function () {
        $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
    });

    var innerWidth = window.innerWidth;
    var clientWidth = document.documentElement.clientWidth;
    var widthDiff = innerWidth - clientWidth;

    function initMobileMenu() {
        $('.nav__mobile-btn').click(function () {
            if (innerWidth !== clientWidth) {
                $('.wrapper').css('padding-right', widthDiff);
                $('.nav').css('left', '49.55%');
            } else {
                $('.wrapper').css('padding-right', '0');
            }
            $('.side-menu').addClass('visible');
            $('.overlay').show();
            $('body').css('overflow', 'hidden');
        });
    }

    function closeMobileMenu() {
        $('.side-menu__close').click(function () {
            $('.wrapper').css('padding-right', '0');
            $('.side-menu').removeClass('visible');
            $('body').css('overflow', 'auto');
            $('body').css('overflow-x', 'hidden');
            $('.overlay').hide();
            $('.nav').css('left', '50%');
        });
    }

    function initMap() {
        $('.js-address').click(function () {
            $('.map__popup').show();
            $('.wrapper').css('padding-right', '0px');
        });
    }

    function closeMap() {
        $('.map__popup-close').click(function () {
            $('.map__popup').hide();
        });
    }

    $('.filter__popup-tag').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
    });

    $('.js-good-to').click(function () {
        $(this).addClass('active');
        $('.js-filter-popup').show('fast');
        $('.project__wrapper-overlay').show();
    });

    $('.filter__cat-btn--cart').click(function () {
        $(this).addClass('active');
        $('.filter__popup-cart').show('fast');
        $('.project__wrapper-overlay').show();
        $('.filters-cart').addClass('visible');
        $('.overlay__filter').addClass('visible');
    });


    $('.js-filter__popup-close').click(function (e) {
        e.stopPropagation();
        $('.js-good-to').removeClass('active');
        $('.js-filter-popup').hide('fast');
        $('.filter__cat-btn--cart').removeClass('active');
        $('.filter__popup-cart').hide('fast');
        $('.project__wrapper-overlay').hide();
        $('.js-filters-window').removeClass('visible');
        $('.filters-cart').removeClass('visible');
        $('.overlay__filter').removeClass('visible');
    });

    $('.filter__mobile-btn').click(function () {
        $('.js-filters-window').addClass('visible');
        $('.overlay__filter').addClass('visible');
    });

    $('.filters__tag-wrap').click(function () {
        
        $(this).addClass('active');
        
        if ($(this).hasClass('active') && $('.filters__option-wrap').hasClass('visible')) {
            $(this).removeClass('active');
            $(this).children($('.filters__option-wrap')).removeClass('visible');
        } else {
            $(this).children($('.filters__option-wrap')).addClass('visible');
        }
    });



    $('.program__btn a').click(function () {
        $('.program__btn a').removeClass('not-selected');
        $(this).toggleClass('selected');
        $('.program__btn a:not(.selected)').toggleClass('not-selected');
        if (!$('.program__btn a').hasClass('selected')) {
            $('.program__btn a').removeClass('not-selected');
        }
    });


    $('.slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        prevArrow: '<button type="button" class="slick-arrow slick-prev js-slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next js-slick-next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    var left = 0;

    $('.js-slick-next').mousedown(function () {
        if (!$(this).hasClass('slick-disabled')) {
            left = left - 20;
            if (left < -40) {
                left = 0;
            }
        }
        $('.slider__line').css('margin-left', left + '%');
    });

    $('.js-slick-prev').mousedown(function () {
        if (!$(this).hasClass('slick-disabled')) {
            left = left + 20;
            if (left > 40) {
                left = 0;
            }
        }
        $('.slider__line').css('margin-left', left + '%');
    });

    window.addEventListener("load", function (event) {

        try {
            initMaps();
        } catch (err) {
        }
    });


    function initMaps() {
        ymaps.ready(init);
        var myMap,
            myPlacemark1;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [55.72416507, 37.68749750],
                zoom: 16,
                controls: [],
            },
                {
                    suppressMapOpenBlock: true
                }
            );

            myMap.controls.remove('typeSelector');
            myMap.controls.remove('fullscreenControl');

            myPlacemark1 = new ymaps.Placemark([55.72392286, 37.68640316], {
                hintContent: 'Москва, Волгоградский пр-кт, дом 32, стр. 21'
            },
                {
                    //preset: 'islands#blueIcon'
                    iconLayout: 'default#image',
                    iconImageHref: '/static/img/general/icons/marker.svg',
                    iconImageSize: [35, 48],
                    iconImageOffset: [-3, -48]
                });

            myMap.geoObjects.add(myPlacemark1);
        }
    }
});