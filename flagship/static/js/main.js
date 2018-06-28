$(document).ready(function () {
    $('.gamburger__menu').click(function () {
        $(this).toggleClass('active');
        $('.stick').toggleClass('trigger');
        $('.main__menu-list').toggleClass('is-visible');
    });

    if ($('.services__tab').length > 0){
        initTabs();
    }

    $('.js-popup-active').click(function () {
        $('.popup').show();
        $('.overlay').show();
        $('body').addClass('fixed');
    });

    $('.popup__close').click(function () {
        $('.popup').hide();
        $('.overlay').hide();
        $('body').removeClass('fixed');
    });
});

function initTabs() {
    $('.services__tab').click(function () {
        $('.services__tab').removeClass('services__tab--active');
        $(this).addClass('services__tab--active');

        $('.services__content').hide();
        $($(this).data('tab-content')).show();
    });
}