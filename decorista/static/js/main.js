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

  $('.nav__menu-caret').click(function () {
    $(this).toggleClass('active');
    $('.dropdown-menu').slideToggle();
  });
});