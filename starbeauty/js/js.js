(function($) {
    "use strict";
    $(document).ready(function() {       
        
        if ($.fn.lsvrCarousel) {
            $('.c-carousel').each(function() {
                $(this).lsvrCarousel();
            });
        }        
        if ($.fn.owlCarousel) {
            $('.c-gallery.m-paginated').each(function() {
                var $this = $(this)
                $this.lsvrCarousel();
                $this.hover(function() {
                    $this.addClass('m-hover');
                }, function() {
                    $this.removeClass('m-hover');
                });
            });
        }
        if ($.fn.lsvrCarousel) {
            $('.c-gallery-vc.m-carousel').each(function() {
                $(this).lsvrCarousel();
            });
        }        
        if ($.fn.lsvrSlider) {
            $('.c-slider').each(function() {
                $(this).lsvrSlider();
            });
        }
       
        $('#header .header-menu').each(function() {
            var $this = $(this),
                toggle = $this.find('.header-menu-toggle'),
                inner = $this.find('> ul');
            toggle.click(function() {
                inner.slideToggle(300);
                toggle.toggleClass('m-active');              
            });
            $(document).on('screenTransition', function() {
                inner.removeAttr('style');
                toggle.removeClass('m-active');
            });
        });    
        $('#header .header-panel').each(function() {
            var $this = $(this),
                toggle = $this.find('.header-panel-toggle'),
                reservation = $this.find('.header-reservation'),
                contact = $this.find('.header-contact'),
                social = $this.find('.header-social');
            toggle.click(function() {
                contact.slideToggle(300);               
                reservation.slideToggle(300);
                $('#header').toggleClass('m-has-active-panel');              
            });
            $(document).on('screenTransition', function() {
                toggle.removeClass('m-active');
                $('#header').removeClass('m-has-active-panel');
                reservation.removeAttr('style');
                contact.removeAttr('style');
                social.removeAttr('style');
            });
        });
    
        $('.woocommerce-tabs #tab-description').addClass('various-content');
        if ($.fn.lsvrFlickrFeed) {
            $('.widget.flickr-feed').each(function() {
                $(this).lsvrFlickrFeed();
            });
        }
        if ($.fn.lsvrMailchimpSubscribeForm) {
            $('.widget.mailchimp-subscribe').each(function() {
                $(this).lsvrMailchimpSubscribeForm();
            });
        }              
        $('.style-switcher-toggle').on('click', function() {
            $('.style-switcher').toggleClass('m-active');
        });        
        $('.accordion-title').on('click', function() {
            $(this).toggleClass('active');
            $(this).next().slideToggle("fast");
        });
        $('body').on('click touchend', function(e) {
            if($(e.target).is('.activate-modal')){
                e.preventDefault();
                $('.modal').show();
            } else if ($('.modal :visible').length > 0 &&
             !$('.modal').has(e.target).length > 0 &&
             !$(e.target).is('.modal')) {
                $('.modal').hide();
            }
        });
        $(".phone-input").mask("+7(999) 999-9999");
       
    });

    function setAccentColor(color) {
        var colorHex;
        switch (color) {
            case 'red':
                colorHex = "#EB4545";
                break;
            case 'orange':
                colorHex= "#E3A138";
                break;
            case 'grey':
                colorHex= "#617890";
                break;
            case 'pink':
                colorHex= "#F76B99";
                break;        
        }

        $('head').append('<style>.accent-color::before{color:' + colorHex + ' !important}.accent-color{color:' + colorHex + ' !important}.accent-background-color{background-color:' + colorHex + ' !important}.accent-border-color{border-color:' + colorHex + ' !important}'+
            '.accent-gradient{background-color: rgba(9, 157, 179, 0.5);' +
            'background-image: linear-gradient(to top, ' + colorHex + ' 0%, rgba(0, 0, 0, 0) 100%);}' +
    +'</style>');
    }

    if(localStorage.getItem('mycolor') !== null) {
        var newColor = localStorage.getItem('mycolor');  
        setAccentColor(newColor);      
    }

    $('.skin-grey').click(function(){
        setAccentColor('grey');
        localStorage.setItem('mycolor','grey');
    });

    $('.skin-red').click(function(){         
        localStorage.setItem('mycolor','red');
        setAccentColor('red');
    });

    $('.skin-orange').click(function(){
        setAccentColor('orange');
        localStorage.setItem('mycolor','orange');
    });

    $('.skin-pink').click(function(){
        setAccentColor('pink');
        localStorage.setItem('mycolor','pink');
    });
})(jQuery);

