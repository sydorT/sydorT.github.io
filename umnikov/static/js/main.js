$(document).ready(function () {
    svg4everybody({});
    initStickyMenu();
    accordionCategory();
    $('#va-accordion').vaccordion();    

    $('.slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        focusOnSelect: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-news').slick({
        dots: false,
        infinite: false,
        speed: 300,
        focusOnSelect: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>'    
    });

    $('.slider-sale').slick({
        dots: false,
        infinite: false,
        speed: 300,
        focusOnSelect: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
        responsive: [        
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-info').slick({
        dots: false,
        infinite: false,
        speed: 300,
        focusOnSelect: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-small').slick({
        dots: false,
        infinite: false,
        speed: 300,
        focusOnSelect: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>'
    });

    $('body').on('click touchend', function (e) {
        if ($(e.target).is('.activate-modal')) {
            e.preventDefault();
            $('.popup').show();
            $('.overlay').show();
            $('body').addClass('fixed');
        } else if (!$('.popup :visible').length > 0 &&
            !$('.popup').has(e.target).length > 0 &&
            !$(e.target).is('.popup')) {
            $('.popup').hide();
            $('.overlay').hide();
            $('body').removeClass('fixed');
        }
    });

    $(".search").mouseenter(function () {
        if (!$(".search-box").hasClass("active") || $(".search-field").val() == '') {
            $(".search-box").addClass('active');
            $(".search-field").focus();
            $(".clear-icon").click(function () {
                ClearSearchField();
                OnInput();
            });
            return false;

        } else {
            $(".text").html("You were trying to search for: <br/>" + $(".search-field").val());
            ClearSearchField();
            $(".search-box").removeClass('active');
            $(".clear-icon").removeClass("show");
            OnInput();
        }
    });

    $(".category-filter").click(function () {
        if ($(this).hasClass('active')){
            $(".filter_block").removeClass('active');
            $(".filtering").removeClass('active');
            $(".category-filter").removeClass('active');
            $(".category-filter").text('Фильтр');
        } else { 
            $(".filter_block").addClass('active');
            $(".filtering").addClass('active');
            $(".category-filter").addClass('active');
            $(".category-filter").text('Назад');
        }
    });

    function OnInput() {
        if (!$(".search-field").val() == '') {
            $(".clear-icon").addClass("show");
        } else {
            $(".clear-icon").removeClass("show");
        }
    }

    function ClearSearchField() {
        $(".search-field").val('');
    }

    $("html").click(function (e) {
        if (!$(e.target).is('.search-field, .clear-icon, .search')) {        
            ClearSearchField();
            OnInput();
            $(".search-box").removeClass('active');
        }
    });

    function initStickyMenu() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 47) {
                $('.navbar-right').addClass('navbar-right-hide');
                $('.navbar-brand').addClass('navbar-brand-hide');
                $('.navbar').addClass('navbar-sticky-menu');
                $('.navbar-collapse').addClass('navbar-sticky-menu-top');
                $('.nav').addClass('nav-sticky');
                $('.home-logo').addClass('home-logo-hide');
                $('.cart-box').css('margin-top','0px');
            } else {
                $('.navbar-right').removeClass('navbar-right-hide');
                $('.navbar-brand').removeClass('navbar-brand-hide');
                $('.navbar').removeClass('navbar-sticky-menu');
                $('.navbar-collapse').removeClass('navbar-sticky-menu-top');
                $('.nav').removeClass('nav-sticky');
                $('.home-logo').removeClass('home-logo-hide');
                $('.cart-box').css('margin-top', '-5px');
            }
        });
    }

    function accordionCategory() {
        var menu_ul = $('.rsidebar > .menu-drop > li > ul'),
            menu_a = $('.rsidebar > .menu-drop > li > a'),
            button_fil = $('span.button_fil');
        menu_ul.hide();
        $('.rsidebar > .menu-drop > li > a > span.button_fil').html('+').css('margin-right', '0px');
        menu_a.click(function (e) {
            $('.rsidebar > .menu-drop > li > a > span.button_fil').html('+').css('margin-right', '0px');
            e.preventDefault();
            if (!$(this).hasClass('active')) {
                menu_a.removeClass('active');
                menu_ul.filter(':visible').slideUp('normal');
                $(this).addClass('active').next().stop(true, true).slideDown('normal');
                $('.rsidebar > .menu-drop > li > a.active > span.button_fil').html('-').css('margin-right','2px');
            } else {
                $(this).removeClass('active');
                $(this).next().stop(true, true).slideUp('normal');
                $('.rsidebar > .menu-drop > li > a > span.button_fil').html('+').css('margin-right', '0px');
            }
        });
    }

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.info-block').mouseenter(function () {
        $(this).next().fadeIn('fast');
    }).mouseleave(function () {
        $(this).next().fadeOut('fast');
    });

    $('.cart-close-btn').click(function () {
        $(this).parent().fadeOut('slow');
    });

    var button1 = $('#tisnen'), pole1 = $('#tisnen_mod');
    var button2 = $('#prosh'), pole2 = $('#prosh_mod');
    var button3 = $('#comment'), pole3 = $('#comment_mod');
    var button4 = $('#upakov'), pole4 = $('#upakov_mod');
    var close1 = $('#close_tisnen'), close2 = $('#close_prosh'), close3 = $('#close_comment'), close4 = $('#close_upakov');
    close1.click(function (e) { pole1.hide('slow'); pole1.removeClass('active'); });
    close2.click(function (e) { pole2.hide('slow'); pole2.removeClass('active'); });
    close3.click(function (e) { pole3.hide('slow'); pole3.removeClass('active'); });
    close4.click(function (e) { pole4.hide('slow'); pole4.removeClass('active'); });
    button1.mouseenter(function (e) {
        e.preventDefault();
        if (!pole1.hasClass('active')) {
            pole1.show('slow');
            pole1.addClass('active').next().stop(true, true).slideDown('normal');
        } else {
            pole1.removeClass('active');
            pole1.hide('slow');
        }
    }),
    button2.mouseenter(function (e) {
        e.preventDefault();
        if (!pole2.hasClass('active') && !pole3.hasClass('active') && !pole4.hasClass('active')) {
            pole2.show('slow');
            pole2.addClass('active').next().stop(true, true).slideDown('normal');
        } else {
            pole2.removeClass('active');
            pole2.hide('slow');
        }
    }),
    button3.mouseenter(function (e) {
        e.preventDefault();
        if (!pole1.hasClass('active') && !pole2.hasClass('active') && !pole3.hasClass('active') && !pole4.hasClass('active')) {
            pole3.show('slow');
            pole3.addClass('active').next().stop(true, true).slideDown('normal');
        } else {
            pole3.removeClass('active');
            pole3.hide('slow');
        }
    }),
    button4.mouseenter(function (e) {
        e.preventDefault();
        if (!pole1.hasClass('active') && !pole2.hasClass('active') && !pole3.hasClass('active') && !pole4.hasClass('active')) {
            pole4.show('slow');
            pole4.addClass('active').next().stop(true, true).slideDown('normal');
        } else {
            pole4.removeClass('active');
            pole4.hide('slow');
        }
    }); 
});