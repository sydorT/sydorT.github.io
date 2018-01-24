$(document).ready(function () {

    var menuWrapper = $('.main-nav-mobile-wraper')
    function setMenuHeight() {
        menuWrapper.height($(window).height() - 58)
    }

    setMenuHeight();
    $(window).on('resize', function(e) {
        setMenuHeight();
    });

    $('a[data-target^="anchor"]').on('click', function() {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top}, 1000);
        return false;
    });

    
    $('.offer').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        nav: true,
        navText: ['a','a'],
        dots: false,
        autoplay: true
    });


    $('.advantages-title').on('click', function() {
        $('.advantages-collapsable').toggleClass('visible');
    });

    $('.card-description').on('click', function() {
        $('.card-description-info').toggleClass('visible');
        $(this).find('.arrow-with-opacity').toggleClass('up');
    });

    $('.card-features').on('click', function() {
        $('.card-features-info').toggleClass('visible');
        $(this).find('.arrow-with-opacity').toggleClass('up');
    });

    $('.card-functions').on('click', function() {
        $('.card-functions-info').toggleClass('visible');
        $(this).find('.arrow-with-opacity').toggleClass('up');
    });

    $('.card-characteristics').on('click', function() {
        $('.card-characteristics-info').toggleClass('visible');
        $(this).find('.arrow-with-opacity').toggleClass('up');
    });

    $('.card-transfer').on('click', function() {
        $('.card-transfer-info').toggleClass('visible');
        $(this).find('.arrow-with-opacity').toggleClass('up');
    });

    $('.card-payment').on('click', function() {
        $('.card-payment-info').toggleClass('visible');
        $(this).find('.arrow-with-opacity').toggleClass('up');
    });



    var myForm = $('#myForm');
    var email = $('.validate-mail');

    $('.input-mail').on('input', function() {
        if($(this).val() != ""){
            $('.input-mail').removeClass('validate-mail');    
        }
    });

    myForm.on('submit', function(e) {
        e.preventDefault();
        if($('.input-mail').val() == "") {
            $('.input-mail').addClass('validate-mail');
        }
    });



    $('.gamburger-menu-toggle').on('click', function() {
        $(this).toggleClass('active');
        $('body>.wrapper').toggleClass('fixed');
        $('.main-nav-mobile').toggleClass('active');
        $('.wrapper-inner').toggleClass('slide-right');
    });
    


    $('.cart-icon').on('click', function() {
        if($('.cart-count').text() === "0") {
            $('.notification-cart-empty').toggleClass('active');
        } else {
            $('.notification-cart-full').toggleClass('active');
        }
    });

    $('.overlay').on('click', function() {
        if($('.cart-count').text() === "0") {
            $('.notification-cart-empty').toggleClass('active');
        } else {
            $('.notification-cart-full').toggleClass('active');
        }
    });


    $('.put-to-cart').on('click', function() {
        $('.notification-cart-short').slideDown('fast');
        $(this).find('.ptc-btn img').attr("src", "images/putted-in-cart.png");
        $(this).find('.ptc-btn img').css("width", "18px");
        $(this).find('.ptc-btn img').css("height", "20px");
        $(this).find('.ptc-info').html('перейти <br/> в корзину');
        $(this).find('.ptc-info').css('color', '#00aeff');
        setTimeout(function() {
            $('.notification-cart-short').slideUp('slow');            
        }, 3000);
    });


    $('.full-btn-back').on('click', function(e) {
        e.preventDefault();
        $('.notification-cart-short').removeClass('active');
        $('.notification-cart-full').removeClass('active');
    });



    $('.subcategory-title').on('click', function(e) {
        $('.subcategory-collapsable').toggleClass('invisible');
        $(this).toggleClass('up');
    });    

    $('.menu-item-filter').on('click', function() {
        $('.filter-parameters').toggleClass('visible');
        $(this).toggleClass('up');
    });


    $('.rest-title').on('click', function(e) {
        $('.activ-rest-collapsable').toggleClass('invisible');
        $(this).toggleClass('up');
    });  



    $('.catalog-close').on('click', function(e) {
        window.location.href = "/";
    });


    $('.map-first').on('click', function() {
        $('.map1').addClass('active');
    });

    $('.map-second').on('click', function() {
        $('.map2').addClass('active');
    });

    $('.map-close').on('click', function() {
        $('.map1').removeClass('active');
        $('.map2').removeClass('active');
    });

    if(typeof ymaps === "undefined")
    { 
        return;
    }
    ymaps.ready(init);
    var myMap,
        myMap2,
        myPlacemark1,
        myPlacemark2;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.89312707, 37.50119550],
            zoom: 16,
            controls: ['smallMapDefaultSet']
        });

        myMap2 = new ymaps.Map("map2", {
            center: [55.66121657, 37.51043950],
            zoom: 16,
            controls: ['smallMapDefaultSet']
        });

        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap2.controls.remove('typeSelector');
        myMap2.controls.remove('fullscreenControl');

        myPlacemark1 = new ymaps.Placemark([55.89306678, 37.50125451], { 
            balloonContentHeader: 'ТЦ «Dexter»',
            balloonContentBody: 'м. Речной вокзал',
            balloonContentFooter: 'Пн-вс 10:00-21:00',
            hintContent: '+7 (495) 125-25-40'
        });

        myPlacemark2 = new ymaps.Placemark([55.66121657, 37.51043950], { 
            balloonContentHeader: 'Дом Thule',
            balloonContentBody: 'м. Юго-Западная, м. Проспект Вернадского, м. Калужская',
            balloonContentFooter: 'Пн-пт 10:00–21.00; сб 11:00–18:00; вс 11:00–17:00',
            hintContent: '+7 (495) 125-25-40'
        });

        myMap.geoObjects.add(myPlacemark1);
        myMap2.geoObjects.add(myPlacemark2);
    }
});