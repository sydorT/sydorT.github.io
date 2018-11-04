$(document).ready(function () {
  initMobileMenu();

  function initMobileMenu() {
    $('.nav__mobile-btn').click(function () {
      $(this).toggleClass('active');
      if ($('.nav__menu').is(":visible")) {
        $('.nav__menu').fadeOut(200);
        $('body').css('overflow', 'auto');
        $('body').css('overflow-x', 'hidden');
        $('body').removeClass('fixed');
      } else {
        $('.nav__menu').fadeIn(200);
        $('body').css('overflow', 'hidden');
        $('body').addClass('fixed');
      }
    });
  }

  $('.slider-hero').slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    arrows: false
  });

  $('.slider').slick({
    dots: false,
    dotsClass: "my-dots",
    infinite: false,
    slidesToShow: 3,
    arrows: false,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
    responsive: [
      {
        breakpoint: 1262,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 872,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
});