$(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        nav:true,
        dots:false,
        margin: 10,
        navText: ['',''],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

    // toggle menu 
    $('.nav-toggle').on('click', function() {
      $(this).parent().toggleClass('open-menu');
    });

    // fullpage customization
    $('#fullpage').fullpage({
      sectionSelector: '.vertical-scrolling',
      slideSelector: '.slide',
      navigation: true,
      slidesNavigation: false,
      controlArrows: false,
      anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
      menu: '#menu',     
      onLeave: function(index, nextIndex, direction) {
        if(index == 5) {
          $('#fp-nav').show();
        }
      },
      afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
        if(anchorLink == 'fifthSection' && slideIndex == 1) {
          $.fn.fullpage.setAllowScrolling(false, 'up');
        }
      },
      onSlideLeave: function( anchorLink, index, slideIndex, direction) {
        if(anchorLink == 'fifthSection' && slideIndex == 1) {
          $.fn.fullpage.setAllowScrolling(true, 'up');
        }
      } 
    });

    $('body').on('click touchend', function(e) {
        if($(e.target).is('.activate-modal')){
            e.preventDefault();
            $('.popup').show();
            $('.overlay').show();
            $('body').addClass('fixed');
        } else if ($('.popup :visible').length > 0 &&
         !$('.popup').has(e.target).length > 0 &&
         !$(e.target).is('.popup')) {
            $('.popup').hide();
            $('.overlay').hide();
            $('body').removeClass('fixed');
        }
    });
    $(".close-btn").on('click', function (e) {
        $('.popup').hide();        
        e.stopPropagation();
        $('body').removeClass('fixed');
        $('.overlay').hide();
    });

    $('.phone-icon-wrap').on('mouseenter', function() {
        $('.callback-btn').css('right', '12.56rem');
        $('.callback-btn').css('opacity', '1');
    });
    $('.callback-btn').on('mouseleave', function() {
        $('.callback-btn').css('right', '16.63rem');
        $('.callback-btn').css('opacity', '0');  
    });

    $('.card-wrap').on('mouseenter', function(e) {
        $(this).find('.card-icon').slideUp('slow');
        $(this).find('.card-wrap-overlay').hide();
        $(this).find('.card-info-wrapper').css('overflow-y','scroll');
        $(this).css('background-image','none');
        $(this).addClass('visible');      
    }).on('mouseleave', function(e) {
        $(this).find('.card-icon').slideDown('slow');
        $(this).find('.card-wrap-overlay').show(); 
        $(this).css('background-image','url(./images/tariffs/tariffs-bgr.png)');
        $(this).removeClass('visible');
        $(this).find('.card-info-wrapper').css('overflow-y','initial');
    });

    var map = new GMaps({
      div: '#map',
      lat: 55.537216,
      lng: 37.157706,
      zoom: 17
    });

    map.addMarker({
      lat: 55.537216,
      lng: 37.157706,
    });

    particlesJS("particles-js", 
    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#b3d6fb"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#b3d6fb"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.48927153781200905,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#b3d6fb",
                "opacity": 0.5997522076405273,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
    );
});