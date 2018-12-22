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

  if ($('.swiper-container').length > 0) {
    var mySwiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 2,
      spaceBetween: 20,
      loop: false,
      breakpoints: {
        992: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 1
        },
        320: {
          slidesPerView: 1
        }
      }
    })
  }
});