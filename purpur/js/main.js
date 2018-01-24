$(function() {
    SmoothScroll({
        touchpadSupport: true,
        accelerationDelta : 5,
        pulseAlgorithm: false
    });

    $(document).on("scroll", function() {     
        if($(document).scrollTop() > 50) {
            $(".menu-sidebar").addClass('menu-sidebar--visible');
        } else {
            $(".menu-sidebar").removeClass('menu-sidebar--visible');
        }
    });
   
    $('body').on('click touchend', function(e) {
        if($(e.target).is('.curtain-order')){
            e.preventDefault();
            $('.modal').show();
        } else if ($('.modal :visible').length > 0 &&
         !$('.modal').has(e.target).length > 0 &&
         !$(e.target).is('.modal')) {
            $('.modal').hide();
        }
    });

    $("#form-catalog").submit(function() {
        $('.modal').hide();
        $.ajax({
            type: "POST",
            url: "http://formspree.io/Info@ginnova.kz",
            data: { message: "Имя: " + $('.catalog-name').val() +
                    "\nТелефон: " + $('.catalog-phone').val() +
                    "\nМейл: " +$('.catalog-email').val()
            }
        }).done(function() {          
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");          
        });
        return false;
    });

    $("#form-footer").submit(function() {
        $('.modal').hide();
        $.ajax({
            type: "POST",
            url: "http://formspree.io/Info@ginnova.kz",
            data: { message: "Имя: " + $('.form-footer-name').val() +
                    "\nМейл: " + $('.form-footer-email').val() +
                    "\nТекст: " +$('.form-footer-text').val()
            }
        }).done(function() {          
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");          
        });
        return false;
    });


    ymaps.ready(init);
    var myMap,      
        myPlacemark1;      

    function init(){  
       /* $('#map').width($(window).width());
        $('#map').height($(window).height());
        $(window).resize(function(){
            $('#map').width($(window).width());
            $('#map').height($(window).height());
        });  */

        myMap = new ymaps.Map("map", {
            center: [51.09487257, 71.42589250],
            zoom: 16,
            controls: ['smallMapDefaultSet']
        });      

        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');

        myPlacemark1 = new ymaps.Placemark([51.09487257, 71.42589250], { 
            balloonContentHeader: 'PURPUR',
            balloonContentBody: 'Мангилик Ел, 51',
            balloonContentFooter: '+7 (777) 474 04 14',
            hintContent: 'PURPUR'
        });
       
        myMap.geoObjects.add(myPlacemark1);   
    }
});