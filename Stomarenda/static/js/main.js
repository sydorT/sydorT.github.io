$(document).ready(function () {		

    svg4everybody({}); 
	
		$('#datetimepicker1').datetimepicker({
			format: 'DD.MM.YYYY',
			locale: 'ru'			
		});

		$('#datetimepicker2').datetimepicker({
			format: 'DD.MM.YYYY',
			locale: 'ru'			
		});


    $('#nav-wraper').wrap('<div class="nav-placeholder"></div>');
    //$('.nav-placeholder').height($('#nav-wraper').outerHeight());

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#nav-wraper').addClass('default').fadeIn('slow');
        } else {
            $('#nav-wraper').removeClass('default').fadeIn('slow');
        }
    });

    $('.owl-carousel').owlCarousel({
    	nav: true,
      loop: true,
      items: 5,
      smartSpeed: 700,      
      rewindNav: true,
  		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'</i>"],
      dots: false,
      autoplay: false,
      responsive:{
      	320:{
            items:1,
            nav: false
        },
        600:{
            items:3  
        },
        991:{
            items:3        
        },
        1000:{
            items:5    
        }
    	}
		});

		$('.information-input').keyup(function() {				
				$('.icon-check-ok').addClass('active');	
				if($('.information-input').val() == "") {
					$('.icon-check-ok').removeClass('active');
				}	
		});

		$('a[data-target^="anchor"]').on('click', function() {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top - 100}, 1500);
        return false;
    });

		$("#form").submit(function() {   
        $.ajax({
            type: "POST",
            url: "http://formspree.io/yurawebdev@gmail.com",
            data: { message: "Имя: " + $('.form-name').val() +
                    "\nТелефон: " + $('.form-tel').val()
            }
        }).done(function() {          
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");          
        });
        return false;
    });

    $("#modal-form").submit(function() {   
        $.ajax({
            type: "POST",
            url: "http://formspree.io/yurawebdev@gmail.com",
            data: { message: "Имя: " + $('.form-name').val() +
                    "\nТелефон: " + $('.form-tel').val()
            }
        }).done(function() {
        		$('#exampleModal').modal('hide');      
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        });
        return false;
    });

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


	   ymaps.ready(init);
			var myMap,      
			    myPlacemark1;      

			function init() {    
			    myMap = new ymaps.Map("map", {
			        center: [55.76798514, 37.94446360],
			        zoom: 10,
							controls: ['zoomControl'],
							behaviors: ['drag']
			    });      

			    myMap.controls.remove('typeSelector');
			    myMap.controls.remove('fullscreenControl');

			    myPlacemark1 = new ymaps.Placemark([55.75399400, 37.62209300], {
			        balloonContentHeader: 'Москва, ул. Наметкина 14, корп.1'			           
			    });
			   
			    myMap.geoObjects.add(myPlacemark1);   
			}
});