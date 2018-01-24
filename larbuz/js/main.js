$(function () {
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
});