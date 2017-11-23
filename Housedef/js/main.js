$(function () {
    $("#form1").submit(function(e) {
        e.preventDefault();
        if(!$(this).valid()) {
            return false;
        }
        $.ajax({
            url: "http://formspree.io/r3231915@mvrht.net",
            method: "POST",
            data: { message: "Имя: " + $('.form-name').val() +
            "\nТелефон: " + $('.form-tel').val() +
            "\nПочта: " + $('.form-email').val()
        }
    }).done(function() {
        $('#popup').modal('hide');      
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $('.custom-input').val('');
    });
    return false;
});

    validateForm('#form1', 'modal-input-error');
    validateForm('#form2', 'form-input-error');

    $("#form2").submit(function(e) {
        e.preventDefault();
        if(!$(this).valid()) {
            return false;
        }
        $.ajax({
            url: "http://formspree.io/r3231915@mvrht.net",
            method: "POST",
            data: { message: "Имя: " + $('.form-name1').val() +
            "\nТелефон: " + $('.form-tel1').val() +
            "\nПочта: " + $('.form-email1').val()
        }
    }).done(function() {         
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $('.custom-input').val('');
    });
    return false;
});    

    $(".phone").mask("+7(999) 999-9999");

    AOS.init({
        duration: 1200
    });
    sensorContainerHover();
    sensorHover();
    initStickyMenu();
    initMenuLinksActivation();
    initNavigationLinks();
    initFormLabels();    
});

/**
 * Implementation below
 */

 function validateForm(formSelector, formErrorClass) {
    $(formSelector).validate({
        rules: {
            name: "required",
            phone: {
              required: true         
          },
          email: {
              required: true,  
              email: true     
          }
        },
        messages: {
            name: "Заполните поле",
            phone: "Заполните поле",
            email: {
                required: "Заполните поле",
                email: ""
            }
        },
        focusCleanup: true,
        errorClass: formErrorClass
    });
} 

function sensorHover() { 
    $('.sensor-point').on('mouseenter', function() {
        var number = $(this).text();
        $('.sensor-' + number).addClass('sensor-active');
    });
    $('.sensor-point').on('mouseleave', function() {
        $('.sensor-active').removeClass('sensor-active');
    });
}

function sensorContainerHover() { 
    $('.sensor-container').on('mouseenter', function() {   
        var number = parseInt($(this).children('.sensor-desc').text());
        $('.sensor-point').each(function(){
            if($(this).text() == number){
                $(this).addClass('sensor-point-active');
            }
        });
        $('.sensor-container').on('mouseleave', function() {
            $('.sensor-point').removeClass('sensor-point-active');
        });
        
    }); 
}

function initStickyMenu() {
    $('#nav-wraper').wrap('<div class="nav-placeholder"></div>');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 28) {
            $('#nav-wraper').addClass('default').fadeIn('slow');
        } else {
            $('#nav-wraper').removeClass('default').fadeIn('slow');
        }
    });
}

function initFormLabels() {
    $('.user-input').focus(function () {
        $(this).parent().addClass('focus');
        scrollToTopOnIOS();
    }).blur(function () {
        if ($(this).val() === '') {
            $(this).parent().removeClass('focus');
        }
    });
}

function scrollToTopOnIOS() {
    var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3/.test(ua);

    // ios 11 bug caret position
    if ( iOS && iOS11 ) {
        window.scrollTo(0, 0);
    }
}

function initMenuLinksActivation() {
	var navItems = $('.menu-item a');
	var win = $(window);
	var items = $('.item');

	navItems.click(function(e){
		var item = $(this);
		
		$('.menu-item a.active').removeClass('active');
		item.addClass('active');
	});

	win.scroll(function(e){
		$('.menu-item a.active').removeClass('active');
		$.each(items, function(key, value){
			var item = $(value);
			if(win.scrollTop() >= item.offset().top - 100){
				$('.menu-item a.active').removeClass('active');
				var id = item.attr('id');

				$.each(navItems, function(key, value){
					var navItem = $(value);
					if(navItem.attr('href') == '#'+id) navItem.addClass('active');
				});
			}
		});
	});
}

function initNavigationLinks() {
    $('a[data-target^="anchor"]').on('click', function () { 
        var target = $(this).attr('href'),
        bl_top = $(target).offset().top;
        $('.navbar-collapse').removeClass('in');
        $('body, html').animate({ scrollTop: bl_top - 75}, 1000);
        return false;
    });
}