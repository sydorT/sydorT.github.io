$(document).ready(function () {
    svg4everybody({});

    $('.nav__mobile-menu').click(function () {
        $('.stick').toggleClass('trigger');
        $('.nav__menu').toggleClass('active');
    });

    $("#form1").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function (data) {
            $('input[type=text]').val('');
            $('input[type=number]').val('');
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        });
        return false;
    });
    $("#form2").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function (data) {
            $('input[type=text]').val('');
            $('input[type=number]').val('');
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        });
        return false;
    });
    $("#form3").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function (data) {
            $('input[type=text]').val('');
            $('input[type=number]').val('');
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        });
        return false;
    });
    $("#form4").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function (data) {
            $('input[type=text]').val('');
            $('input[type=number]').val('');
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        });
        return false;
    });
    $("#form5").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function (data) {
            $('input[type=text]').val('');
            $('input[type=number]').val('');
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        });
        return false;
    });
    var modal = document.getElementById('modal');
    var closeBtn = document.getElementsByClassName('closeBtn')[0];
    $('.modalBtn').click(function openModal() {
        modal.style.display = 'block';
        $('body,html').css('overflow','hidden');
        var hiddenTitle = $(this).siblings('.shed__title').text();
        $('.hidden-title').val(hiddenTitle);
    });
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);
    function closeModal() {
        $('body,html').css('overflow', 'initial');
        $('body,html').css('overflow-x', 'hidden');
        modal.style.display = 'none';
    }
    function outsideClick(e) {
        if (e.target == modal) {
            $('body,html').css('overflow', 'initial');
            $('body,html').css('overflow-x', 'hidden');
            modal.style.display = 'none';
        }
    }
});