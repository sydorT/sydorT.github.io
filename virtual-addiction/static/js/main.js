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

  $('.faq__menu-list > li:eq(0) span').addClass('active').next().slideDown();

  $('.faq__menu-list span').click(function (j) {
    var dropDown = $(this).closest('li').find('p');

    // $(this).closest('.faq__menu-list').find('p').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      // $(this).closest('.faq__menu-list').find('span.active').removeClass('active');
      $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
});