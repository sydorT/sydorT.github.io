$(document).ready(function () {

    $(document).foundation();

    $('.header').mousemove(function (e) {
        var moveX =  (e.pageX * -1 / 40);
            moveY =  (e.pageY * -1 / 40);
        $(this).css('background-position', moveX + 'px ' + moveY + 'px');
    });

    $('#main-nav1').wrap('<div class="nav-placeholder"></div>');
    $('.nav-placeholder').height($('#main-nav1').outerHeight());

    $(window).scroll(function() {
        if ($(this).scrollTop() > 17) {
            $('#main-nav1').addClass('default').fadeIn('slow');
        } else {
            $('#main-nav1').removeClass('default').fadeIn('slow');
        }


        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });
    $('.top').click(function() {
        $('html, body').stop().animate({scrollTop:0}, 'slow', 'swing');
    });

    $('a[data-target^="anchor"]').on('click.scroll', function() {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top}, 2000);
        return false;
    });

    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        nav: true,
        navText: ['aaa','aaa'],
        dots: false,
        autoHeight: true,
        autoplay: true
    });
    
    $(".animate4").animated("lightSpeedIn", "");
    $(".animate5").animated("lightSpeedIn", "");
    $(".animate6").animated("fadeInRightBig", "");
    
});

$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
});