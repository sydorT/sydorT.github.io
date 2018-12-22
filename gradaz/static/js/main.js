$(document).ready(function () {
  initMobileMenu();

  function initMobileMenu() {
    $('.nav__mobile-btn').click(function () {
      $('.nav__mobile-btn').toggleClass('active');
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

  if ($('.testimonials__carousel').length > 0) {
    $('.testimonials__carousel').slick({
      dots: true,
      dotsClass: "my-dots",
      infinite: true,
      slidesToShow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            centerMode: false
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }
      ]
    });
  }

  if ($('.carousel').length > 0) {
    $('.carousel').slick({
      dots: false,
      infinite: true,
      slidesToShow: 7,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 501,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 361,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  $('.js-anchor-link').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      var scrollTo = target.offset().top;
      $($('.js-anchor-link').parent().parent('ul')).css('display','none');
      $('.js-anchor-link').parent().parent().find('.nav__mobile-btn').removeClass('active');
      $('.nav__footer .nav__mobile-btn').removeClass('active');
      $('body').css('overflow', 'auto');
      $('body').css('overflow-x', 'hidden');
      $('body').removeClass('fixed');
      $('body, html').animate({ scrollTop: scrollTo + 'px' }, 1000);
    }
  });

  var modal = document.getElementById('modal');
  var closeBtn = document.getElementsByClassName('closeBtn')[0];
  $('.modalBtn').click(function () {
    modal.style.display = 'block';
    $('body').css('overflow', 'hidden');
  });
  closeBtn.addEventListener('click', closeModal);
  //window.addEventListener('click', outsideClick);
  function closeModal() {
    modal.style.display = 'none';
    $('body').css('overflow', 'auto');
    $('body').css('overflow-x', 'hidden');
  }
  function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }
});