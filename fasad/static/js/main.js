$(function () {
    var sliderInitialized = false;
    svg4everybody({});
    initGallery();
    initMobileMenu();
    initWindow();
    initSteps();
    initMaps();

    function initSteps() {
        initStep1();
    }

    function initStep1() {
        $('input[name=house-type]').on('change', function () {
            var houseType = $('input[name=house-type]:checked').attr('id');
            displayStep2(houseType);
        });
    }

    function displayStep2(houseType) {
        hide('.note');
        show('.note--' + houseType);
        show('.step__2');
        if (houseType === 'wooden') {
            $('.radio-btn--without-heater').hide();
        } else {
            $('.radio-btn--without-heater').show();
        }

        $('input[name=heater]').on('change', function () {
            var houseType = $('input[name=house-type]:checked').attr('id');
            var heater = $('input[name=heater]:checked').attr('id');
            displayThickness(houseType, heater);
            displayStep3();
            if (heater === 'without-heater') {
                $('.js__heater-row').addClass('hidden');
            } else {
                $('.js__heater-row').removeClass('hidden');
            }
        });

        $('input[name=heater]:checked').prop('checked', false);
        hide('.thickness');
        hide('.step__3');
        hide('.step__4');
        hide('.step__5');
        hide('.total');
        $('.btn--cost-size.active').removeClass('active');
        $('.offer__item.active').removeClass('active');
        resetStep4();
    }

    function displayThickness(houseType, heater) {
        var options = {
            brick: {
                wool: ['100 мм', '50 мм'],
                styrofoam: ['100 мм', '50 мм']
            },
            aerated: {
                wool: ['100 мм', '50 мм'],
                styrofoam: ['100 мм', '50 мм']
            },
            wooden: {
                wool: ['50 мм'],
                styrofoam: ['50 мм']
            },
        }

        var currentOptions = options[houseType][heater];
        if (currentOptions) {
            show('.thickness');
            var optionThicknessHTML = '';

            $.each(currentOptions, function (index, value) {
                optionThicknessHTML += '<option value="' + value + '">' + value + '</option>';
            });

            $('.js__thickness select').html(optionThicknessHTML);
        } else {
            hide('.thickness');
        }
    }

    function displayStep3() {
        show('.step__3');
        initThickness();
        $('.offer__item').on('click', function () {
            $('.offer__item.active').removeClass('active');
            $(this).addClass('active');
            displayStep4and5();
            updateTotal();
        });
    }

    function initThickness() {
        $('.js__thickness select').on('change', function () {
            $('.js__heater-thickness').text($(this).val());
        }).trigger('change');
    }

    function displayStep4and5() {
        show('.step__4');
        show('.step__5');
        initRange();
        includeCost();
    }

    function includeCost() {
        $('.btn--cost-size').on('click', function () {
            var valid = true;
            $('.window input').removeClass('js-invalid');
            $.each($('.window input'), function (index, value) {
                if ($(value).val() === '') {
                    valid = false;
                    $(value).addClass('js-invalid');
                }
            });
            if (valid) {
                $('.btn--cost-size').removeClass('active');
                $(this).addClass('active');
                show('.total');
                if ($(this).hasClass('include-cost-no')) {
                    $('.js_cost-work').addClass('hidden');
                } else {
                    $('.js_cost-work').removeClass('hidden');
                }
                updateGeneral();
            } else {
                return false;
            }
        });
    }

    function updateTotal() {
        var offerTotalPrice = parseInt($('.offer__item.active .offer__total-price').text());
        var area = parseInt($('.field__area').val());
        var material = $('.js-cost-material').text(offerTotalPrice * area);
        //.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }

   function calculateWindowPrice(windowElement) {
        var x = parseInt($('.js-window-height', windowElement).val());
        var y = parseInt($('.js-window-width', windowElement).val());
        var cost1 = Math.ceil(((2 * x) + (2 * x * 0.1)) / 2.5) * 75;
        var cost2 = Math.ceil(((2 * x + y) + ((2 * x + y) * 0.1)) / 2.4) * 150;
        var cost3 = Math.ceil(y / 2.5) * 215;
        return cost1 + cost2 + cost3;
    }

    function calculateWindowsTotal() {
        var result = 450;
        $.each($('.window'), function (index, value) {
            result += calculateWindowPrice(value);
        });
        return result;
    }

    function updateGeneral() {
        var offerTotalPrice = parseInt($('.offer__item.active .offer__total-price').text());
        var area = parseInt($('.field__area').val());
        var workPrice = area * 1200;
        var materialPrice = offerTotalPrice * area + calculateWindowsTotal();
        var generalPrice = (materialPrice + workPrice);
        $('.js-cost-material').text(materialPrice.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        $('.js-cost-work-price').text(workPrice.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        $('.js-general-price').text(generalPrice.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    }

    function show(selector) {
        $(selector).removeClass('hidden');
    }
    function hide(selector) {
        $(selector).addClass('hidden');
    }

    function initWindow() {
        $('.size__window-btn button').click(function () {
            var windows = $('.window');
            var count = windows.length;
            var clonedWindow = windows.last().clone(true);
            $('.window__number', clonedWindow).text(count + 1);
            $('input', clonedWindow).val('');
            clonedWindow.addClass('js-cloned');
            clonedWindow.insertAfter(windows.last());
        });
    }

    function resetStep4() {
        $('.window.js-cloned').remove();
        $('.window input').val('');
        $('.field__area').val('').trigger('keyup');
    }

    function initMaps() {
        ymaps.ready(init);
        var myMap,
            myPlacemark1;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [55.74614237, 37.53602191],
                zoom: 16,
                controls: ['smallMapDefaultSet']
            });

            myMap.behaviors.disable('scrollZoom'); 
            myMap.controls.remove('typeSelector');
            myMap.controls.remove('fullscreenControl');

            myPlacemark1 = new ymaps.Placemark([55.74609767, 37.53606111], {
                balloonContentHeader: 'Москва, Пресненская наб.,12',
                balloonContentBody: '+7 (495) 117–29–15',
                balloonContentFooter: 'mail@okfasad.pro',
                hintContent: 'Москва, Пресненская наб.,12'
            },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'static/img/content/contact/pin.png',
                    iconImageSize: [26, 40],
                    iconImageOffset: [-13, -20]
                });

            myMap.geoObjects.add(myPlacemark1);
        }
    }

    function initMobileMenu() {
        $('.nav__mobile-btn').click(function () {
            $('.side-menu').toggleClass('is-visible');
            $(this).toggleClass('active');
            $('body').toggleClass('fixed');
        });
    }

    function initRange() {
        if (sliderInitialized) {
            return;
        }
        sliderInitialized = true;
        var elem = document.querySelector('.square__range');
        var slider = new Powerange(elem, { min: 1, max: 1000, start: 1, hideRange: true, step: 1 });

        $('.field__area').val('1');

        $('.square__range').change(function () {
            $('.field__area').val($(this).val());
        });

        $('.field__area').on('keyup', function (e) {
            slider.setStart(parseInt($(this).val()));
        });
    }

    function initGallery() {
        $('.gallery__wrapper').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    }
});