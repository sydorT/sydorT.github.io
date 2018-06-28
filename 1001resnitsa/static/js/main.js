$(document).ready(function () {
    svg4everybody({});
    initMobileMenu();
    initStickyMenu();

    AOS.init({
        duration: 1200
    });

    $.reject({
        reject: { msie: true, edge: true },
        display: ['firefox', 'chrome', 'opera']
    }); 

    $(".main-form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function (data) {
            $('input[type=number]').val('');
            window.location = 'http://1001resnitsa.ru/thanks.html';
        });
        return false;
    });

    $("#header-form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function (data) {
            $('input[type=number]').val('');
            window.location = 'http://1001resnitsa.ru/thanks.html';
        });
        return false;
    });

    function initMobileMenu() {
        $('.nav__mobile-btn').click(function () {
            $(this).toggleClass('active');
            if ($('.mobile-menu').is(":visible")) {
                $('.mobile-menu').fadeOut(200);
                $('body').css('overflow', 'initial');
                $('body').css('overflow-x', 'hidden');
            } else {
                $('.mobile-menu').fadeIn(200);
                $('body').css('overflow', 'hidden');
            }
            $('.nav__phone').toggleClass('menu-fix');
        });
    }

    function setOpacity() {
        var sortedItems = $('.slide-wrap li:visible').sort(function (a, b) {
            return $(a).position().left > $(b).position().left
        });

        $(sortedItems[0]).css('opacity', 0.3);
        $(sortedItems[4]).css('opacity', 0.3);
        $(sortedItems[2]).css('opacity', 1);
        $(sortedItems[1]).css('opacity', 0.7);
        $(sortedItems[3]).css('opacity', 0.7);
    }

    setInterval(setOpacity, 60);

    if ($(window).scrollTop() > 0) {
        $('.nav__wrapper').addClass('is-scroll');
    }
    function initStickyMenu() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('.nav__wrapper').addClass('is-scroll');
            } else {
                $('.nav__wrapper').removeClass('is-scroll');
            }
        });
    }

    $('.extension__read-more').click(function () {
        $('.extension__desc').css('max-height','100%');
        $('.extension__desc-overlay').css('display','none');
        $('.extension__read-more').css('display', 'none');
    });

    $('.slide-wrap').RollingSlider({
        showArea: "#slider",
        prev: "#jprev",
        next: "#jnext",
        moveSpeed: 400,
        autoPlay: true,
        stay: 5000
    });

    initVolumeSlider();

    function initVolumeSlider() {
        var inProgress = false;
        var intervalId;
        initAuto();

        $('.volume-slider__dots button').click(function(){
            if(!inProgress) {
                activateSlide($(this).data('v-slider'));
                clearInterval(intervalId);
            }
        });

        $('.volume-slider__arrow--prev').click(function () {
            if (!inProgress) {
                activateSlide(getPrev());
                clearInterval(intervalId);
            }
        });

        $('.volume-slider__arrow--next').click(function () {
            if (!inProgress) {
                activateSlide(getNext());
                clearInterval(intervalId);
            }
        });

        function getPrev() {
            var prev = (getCurrent() - 1);
            if(prev < 0) {
                prev = getTotal() + prev;
            }
            return prev;
        }

        function initAuto() {
            intervalId = setInterval(function () {
                activateSlide(getNext());
            }, 5000);
        }

        function getNext() {
            return (getCurrent() + 1) % getTotal();
        }

        function getCurrent() {
            return parseInt($('.volume-slider__dots .active').data('v-slider'));
        }

        function getTotal() {
            return $('.volume-slider__dots button').length;
        }

        function activateSlide(slide) {
            inProgress = true;
            $('.volume-slider__dots .active').removeClass('active');
            $('.volume-slider__dots [data-v-slider=' + slide + ']').addClass('active');

            $('.volume-slider__info--active').fadeOut(200, function () {
                $(this).removeClass('volume-slider__info--active');
                $('.volume-slider__info[data-v-slider=' + slide + ']').fadeIn(200).addClass('volume-slider__info--active');
            });

            $('.volume-slider__image--active').fadeOut(200, function () {
                $(this).removeClass('volume-slider__image--active')
                $('.volume-slider__image[data-v-slider=' + slide + ']').fadeIn(200).addClass('volume-slider__image--active');
                inProgress = false;
            });
        }
    }

    var tok = '7419202727.b5afa4f.9d920fdf8d89407e8ac4cfd0cbe7b8b6', // access Token
        userid = 7419202727, // ID пользователя, можно выкопать в исходном HTML, можно использовать спец. сервисы либо просто смотрите следующий пример :)
        kolichestvo = 7; // ну это понятно - сколько фоток хотим вывести

    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: { access_token: tok, count: kolichestvo }, // передаем параметры, которые мы указывали выше
        success: function (result) {
            //console.log(result);
            for (x in result.data) {
                $('.insta-slider').append('<div class="slick-slide"><div class="insta-frame"><img src="' + result.data[x].images.standard_resolution.url + '"></div></div>'); // result.data[x].images.low_resolution.url - это URL картинки среднего разрешения, 306х306
                // result.data[x].images.thumbnail.url - URL картинки 150х150
                // result.data[x].images.standard_resolution.url - URL картинки 612х612
                // result.data[x].link - URL страницы данного поста в Инстаграм 
            }
            $('.insta-slider').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                speed: 300,
                focusOnSelect: false,
                arrows: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
                responsive: [
                    {
                        breakpoint: 1800,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 890,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 590,
                        settings: {
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 350,
                        settings: {
                            centerMode: true,
                            centerPadding: '25px',
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 320,
                        settings: {
                            centerMode: true,
                            centerPadding: '65px',
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        },
        error: function (result) {
            console.log(result); // пишем в консоль об ошибках
        }
    });

    $('.modalBtn').on('click', openModal);
    $('.closeBtn').on('click', closeModal);
    window.addEventListener('click', outsideClick);
    function openModal() {
        $('.modal').css('display', 'block');
        $('body').css('overflow', 'hidden');
    }
    function closeModal() {
        $('.modal').css('display', 'none');
        $('body').css('overflow', 'initial');
        $('body').css('overflow-x', 'hidden');
    }
    function outsideClick(e) {
        if (e.target == $('.modal')) {
            $('.modal').css('display', 'none');
            $('body').css('overflow', 'initial');
            $('body').css('overflow-x', 'hidden');
        }
    }

    $('.header__video-btn').on('click', openModalVideo);
    $('.closeBtn').on('click', closeModalVideo);
    window.addEventListener('click', outsideClickVideo);
    function openModalVideo() {
        $('.modal-video').css('display', 'block');
        $("iframe").attr("src", "http://www.youtube.com/embed/XSQQUqJQjUw?autoplay=1");
        $('body').css('overflow', 'hidden');
    }
    function closeModalVideo() {
        $('.modal-video').css('display', 'none');
        $("iframe").attr("src", "http://www.youtube.com/embed/XSQQUqJQjUw?autoplay=0");
        $('body').css('overflow', 'initial');
        $('body').css('overflow-x', 'hidden');
    }
    function outsideClickVideo(e) {
        if (e.target == $('.modal-video')) {
            $('.modal-video').css('display', 'none');
            $("iframe").attr("src", "http://www.youtube.com/embed/XSQQUqJQjUw?autoplay=0");
            $('body').css('overflow', 'initial');
            $('body').css('overflow-x', 'hidden');
        }
    }

    function initMap() {
        var uluru = { lat: 55.7705856, lng: 37.6243649 };
        var pos1 = new google.maps.LatLng(55.7377579, 37.6285589);
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: new google.maps.LatLng(55.75917547, 37.62246346)
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });

        var marker = new google.maps.Marker({
            position: pos1,
            map: map,
            title: 'Нaбережная канала Грибоедова д.7(внутри двора)'
        });

        var styledMapType = new google.maps.StyledMapType(
            [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ],
            { name: 'Styled Map' });

        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
    }
    initMap();
});