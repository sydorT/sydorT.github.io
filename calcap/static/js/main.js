$(document).ready(function () {

    $('.header__sandwich').click(function () {
        $('.stick').toggleClass('trigger');
        $('.header__menu').toggleClass('active');
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        focusOnSelect: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-angle-left"></i>',
        nextArrow: '<i class="fa fa-angle-right"></i>'
    });

    function initMap() {
        var uluru = { lat: 33.67150125, lng: -112.24190883 };
        var pos1 = new google.maps.LatLng(33.43803521, -112.07436733);
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(33.49187988, -111.92193203)
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });

        var marker = new google.maps.Marker({
            position: pos1,
            map: map
        });
    }
    initMap();
});