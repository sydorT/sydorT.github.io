$(document).ready(function () {
  initMobileMenu();

  $('.js-popup-active').click(function () {
    $('.popup').show();
    $('.overlay').show();
    $('body').css('overflow', 'hidden');
  });

  $('.popup__close').click(function () {
    $('.popup').hide();
    $('.overlay').hide();
    $('body').css('overflow', 'auto');
    $('body').css('overflow-x', 'hidden');
  });

  if ($('.slider').length > 0) {
    $('.slider').slick({
      dots: true,
      arrows: false,
      dotsClass: "my-dots",
      infinite: true,
      slidesToShow: 1,
      prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-next"></button>'
    });
  }
});

function initMobileMenu() {
  $('.nav__mobile-btn').click(function () {
    $(this).toggleClass('active');
    if ($('.nav__list').is(":visible")) {
      $('.nav__list').fadeOut(200);
      $('body').css('overflow', 'auto');
      $('body').css('overflow-x', 'hidden');
    } else {
      $('.nav__list').fadeIn(200);
      $('body').css('overflow', 'hidden');
    }
  });
}