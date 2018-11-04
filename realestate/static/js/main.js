$(document).ready(function () {
    $('.js-popup-active').click(function () {
        $('.popup').show();
        $('.overlay').show();
        $('body').css('overflow', 'hidden');
        $('body').addClass('fixed');
    });

    $('.popup__close').click(function () {
        $('.popup').hide();
        $('.overlay').hide();
        $('body').css('overflow', 'auto');
        $('body').css('overflow-x', 'hidden');
        $('body').removeClass('fixed');
    });
});