 $(function() {

    //SVG Fallback
    // if(!Modernizr.svg) {
    //  $("img[src*='svg']").attr("src", function() {
    //      return $(this).attr("src").replace(".svg", ".png");
    //  });
    // };
});
$(window).resize(function() {
    // убираем br из параграфов
    if (window.matchMedia("(max-width: 768px)").matches) {
        $(".why_wear_out_rail .why_wear_out_rail_item p br").remove();
        $(".diagnostics h1 br").remove();
    }

});

//изменяется - для плавной обратной анимации animate.css*/
var limit = 0;
$(window).scroll(function() {
    // анимация чисел на главной странице
    tl3.resume();
    if ($(window).scrollTop() >= 100) {
        tl1.resume();

        if (limit == 0) {

            $('.header_item_circle .num').animateNumber({ number: 10 }, 2000);
            $('.header_item_circle .num2').animateNumber({ number: 972 }, 2000);
            $('.header_item_circle .num3').animateNumber({ number: 6 }, 2000);
        }
        limit++;

    }
    if (window.matchMedia("(min-width: 992px)").matches) {

        tl2.resume();
        if ($(window).scrollTop() >= 100) {


        }
        if ($(window).scrollTop() >= 100) {


        }

    }

    var wScroll = $(this).scrollTop();

    $('.header_title_img').css({
        'transform': 'translate(0px, ' + wScroll / 45 + '%)'
    });
    $('.header_btn, .header_title h1, .header_title p').css({
        'transform': 'translate(0px, ' + '-' + wScroll / 20 + '%)'
    });

    if ($(window).scrollTop() > 0) {
        $('nav[canvas=header_top]').addClass('fixed');
        $('nav[canvas]').addClass('fixed');
        $('.header_logo span').hide();
    } else if ($(window).scrollTop() < 30) {
        $('nav[canvas=header_top]').removeClass('fixed');
        $('nav[canvas]').removeClass('fixed');
        $('.header_logo span').show();
    }
    $('.animated').each(function() {
        var imagePos = $(this).offset().top;
        var imageHght = $(this).outerHeight();
        var topOfWindow = $(window).scrollTop() + 40;
        var heightOfWindow = $(window).height();
        var animName = $(this).data('anim');
        if (!$(this).data('atop')) {
            var animTop = 0.9;
        } else {
            var animTop = $(this).data('atop');
        }
        if (imagePos < topOfWindow + heightOfWindow * animTop && imagePos + imageHght > topOfWindow) {
            $(this).css('visibility', 'visible').addClass(animName);

        } else if (imagePos + imageHght < topOfWindow || imagePos > topOfWindow + heightOfWindow) {
            $(this).css('visibility', 'hidden').removeClass(animName);
        }
    });
});
/**
 * FastClick
 */

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
// Initialize Slidebars
(function($) {
    // Initialize Slidebars
    var controller = new slidebars();
    controller.init();

    // Toggle Slidebars
    $('#nav-button-label').on('click', function(event) {
        // Stop default action and bubbling
        event.stopPropagation();
        event.preventDefault();
        // Toggle the Slidebar with id 'id-1'
        controller.toggle('id-1');
        $("html,body").toggleClass("slidebars");
    });

    // Close Slidebar links
    $('[off-canvas] a').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        var url = $(this).attr('href'),
            target = $(this).attr('target') ? $(this).attr('target') : '_self';

        $("#nav-button-label").removeClass("nav-on");
        $("#nav-button-label .nav-line").removeClass("active");
        $("html,body").removeClass("slidebars");
        controller.close(function() {
            window.open(url, target);
        });
    });

    // Add close class to canvas container when Slidebar is opened
    $(controller.events).on('opening', function(event) {
        $('[canvas]').addClass('js-close-any');
    });
    // Add close class to canvas container when Slidebar is opened
    $(controller.events).on('closing', function(event) {
        $('[canvas]').removeClass('js-close-any');
    });
    // Close any
    $(document).on('click', '.js-close-any', function(event) {
        if (controller.getActiveSlidebar()) {
            event.preventDefault();
            event.stopPropagation();
            $("#nav-button-label").removeClass("nav-on");
            $("#nav-button-label .nav-line").removeClass("active");
            $("html,body").removeClass("slidebars");
            controller.close();

        }
    });
})($);

var tl1 = new TimelineMax(); // анимация кругов
var tl2 = new TimelineMax(); // анимация header
var tl3 = new TimelineMax(); // анимация header

$(document).ready(function() {
    // анимации - animate.css
    if (window.matchMedia("(min-width: 768px)").matches) {
        $(".reliable_service h2").animated("fadeInUp");
        $(".reliable_service p, .tips_and_articles h2, .tips_and_articles .tips_and_articles_item").animated("fadeInUp");
        $(".intermediate .intermediate_title h2, .why_wear_out_rail h2, .why_wear_out_rail .why_wear_out_rail_item").animated("fadeInUp");
        $(".intermediate .intermediate_title p").animated("fadeInUp");
        $(".intermediate_item, .how_do_we_repair h2, .how_do_we_repair .how_do_we_repair_item").animated("fadeInUp");
        $(".intermediate_wrap input[type=submit], .why_wear_out_rail.repair_time .why_wear_out_rail_item").animated("fadeInUp");
        $(".reliable_service .reliable_service_item").animated("fadeInUp");
        $(".our_partners h2, .why_wear_out_rail.repair_time h2, .why_wear_out_rail.repair_time p, .why_wear_out_rail.repair_time p+p").animated("fadeInUp");
        $(".our_partners .our_partners_slider, .hydropower_you_can h2, .hydropower_you_can_item").animated("fadeInUp");
        $(".map .map_contacts h2, .what_customers_think h2, .what_customers_think .what_customers_think_item").animated("fadeInUp");
        $(".map .map_contacts_item, .repair_if_necessary h2, .repair_if_necessary .repair_if_necessary_item ").animated("fadeInUp");
        $(".select_the_rack, .select_the_rack h2, .item_wrap, .item, .select_text").animated("fadeInUp");
    }

    // Скролл меняем на всех страницах


    // убираем br из параграфов
    if (window.matchMedia("(max-width: 768px)").matches) {
        $(".why_wear_out_rail .why_wear_out_rail_item p br").remove();
        $(".diagnostics h1 br").remove();
    }


    // делаем фиксированное меню 
    if ($(window).scrollTop() > 0) {
        $('nav[canvas=header_top]').addClass('fixed');
    }

    // парсит параграфы в what_customers_think_item и показывает от количества букв в параграфе ссылки показать весь отзыв или нет
    var elem = $('.what_customers_think_item_txt');
    elem.each(function() {
        var pars = $(this).find('.parse').text().split('').length,
            link = $(this).find('.what_customers_think_item_action');

        if (pars >= 361) {
            link.show();
        } else if (pars <= 361) {
            link.hide();
        }
    });
    
    // показывает при нажатии весь текст в параграфе
    $('.what_customers_think_item_action .open_a').click(function(e) {
        e.preventDefault();
        $(this).parents('.what_customers_think_item').removeClass('close_txt').addClass('open_txt');
        $(this).parents('.what_customers_think_item_txt').find('p').addClass('show');
    });
    $('.what_customers_think_item_action .close_a').click(function(e) {
        e.preventDefault();
        $(this).parents('.what_customers_think_item').removeClass('open_txt').addClass('close_txt');
        $(this).parents('.what_customers_think_item_txt').find('p').removeClass('show');
    });


    tl1.pause();
    tl2.pause();
    tl3.pause();


    if ($(window).scrollTop() >= 100) {
        tl1.resume();
        tl3.resume();

        // активация тайм линий при загрузке с измерением скролла

        if (limit == 0) {

            $('.header_item_circle .num').animateNumber({ number: 10 }, 2000);
            $('.header_item_circle .num2').animateNumber({ number: 972 }, 2000);
            $('.header_item_circle .num3').animateNumber({ number: 6 }, 2000);
        }
        limit++;

    }

    tl1.from(".path4136", 2, { drawSVG: "0%" }, 0.4).
    from(".header_item_circle_img", 2, { autoAlpha: 0 }, 0);
    tl3.from(".header_item_circle span", 2, { autoAlpha: 0, y: 20 });


    function readyTimeLineGo() {

    }

    if (window.matchMedia("(min-width: 992px)").matches) {

        readyTimeLineGo();
        // Анимация, которая будет работать от 992px


        tl2.from(".header_top", 1, { autoAlpha: 0, y: 40 }, 0.7).
            from(".header_title h1", 1, { autoAlpha: 0, y: 40 }, 0.9).
            from(".header_title p", 1, { autoAlpha: 0, y: 40 }, 1).
            from(".diagnostics h1", 1, { autoAlpha: 0, y: 40 }, 1).
            from(".buy h1", 1, { autoAlpha: 0, y: 40 }, 1).
            from(".diagnostics p", 1, { autoAlpha: 0, y: 40 }, 1.2).
            from(".buy p", 1, { autoAlpha: 0, y: 40 }, 1.2).
            from(".diagnostics h2", 1, { autoAlpha: 0, y: 40 }, 1.4).
            from(".buy a", 1, { autoAlpha: 0, y: 40 }, 1.4).
            from(".header_btn", 1, { autoAlpha: 0, y: 40 }, 1.2).
            from(".header_title_img", 1, { autoAlpha: 0, x: 80 }, 1.4)
        ;
        tl2.resume();



    }

    var md = new MobileDetect(window.navigator.userAgent);

    if (md.userAgent() == "Safari" && md.mobile() == "iPhone" || md.mobile() == "iPad") {
        $("html,body").css("overflow", "hidden !important");
    }
    // для инициализации tooltips
    // $( document ).tooltip({
    //   track: true
    // });  
    // скролл по ссылке с атрибутом href 
    $(".header_nav a[href*='#']").on("click", function(e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        return false;
    });
    $(".header_nav_mobile a[href*='#']").on("click", function(e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        return false;
    });
    // Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
    // $(".scroll_to").on("click", function(e) {
    //     e.preventDefault();
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $("#" + anchor.data('scroll')).offset().top
    //     }, 500);
    //     return false;
    // });
    //  Активация слайдера
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    // Кастомные кнопки управления слайдером
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel', [700]);
    });
    // // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [700]);
    });



    // Карта

    function showGoogleMaps() {
        var position = [55.7026997, 37.7266861];
        var posMark = new google.maps.LatLng(55.7026997, 37.7266861);

        var latLng = new google.maps.LatLng(55.7026997, 37.7266861);

        var mapOptions = {
            zoom: 17, // initialize zoom level - the max value is 21
            streetViewControl: false, // hide the yellow Street View pegman
            scaleControl: true, // allow users to zoom the Google Map
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: latLng,
            scrollwheel: false
        };

        map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        // Show the default red marker at the location
        marker = new google.maps.Marker({
            position: posMark,
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP
        });
    }

	if ($("section").hasClass("map")) {
        showGoogleMaps();
    }

    // Select в модальном окне
    $(document).click(function() {
        $('.slct').removeClass('active');
        $('.slct_arrow').removeClass('active');
        $('.slct').parent().find('.drop').slideUp("fast");
    });
    $('.slct').click(function() {
        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.drop');
        //  закрываем все открытые
        $('.slct').removeClass('active').parent().find('.drop').slideUp("fast");

        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if (dropBlock.is(':hidden')) {
            dropBlock.slideDown();

            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');
            $(this).siblings(".slct_arrow").addClass('active');


            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop').find('li').click(function() {

                /* Заносим в переменную HTML код элемента 
                списка по которому кликнули */
                var selectResult = $(this).html();

                /* Находим наш скрытый инпут и передаем в него 
                значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);

                /* Передаем значение переменной selectResult в ссылку которая 
                открывает наш выпадающий список и удаляем активность */
                $(this).parent().parent().find(".slct").removeClass('active').html(selectResult);
                $(".slct_arrow").removeClass('active');

                /* Скрываем выпадающий блок */
                dropBlock.slideUp();
            });

            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            $(".slct_arrow").removeClass('active');
            dropBlock.slideUp();
        }

        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });
    // Открываем модальное окно  
    $(".modal").click(function(e) {
        e.preventDefault();
        var id = $(this).data('modal');
        var txt = $(this).data('info');
        // var title =  $(this).data('title'); // для изменения title в модалке
        $(".popup[data-modal=" + id + "]").toggle("fade", 200).find("form").css('display', 'block');
        $(".popup[data-modal=" + id + "] input[name=form_name]").val(txt);
        // $(".popup[data-modal="+id+"] h2").html(title); // прописать в ссылку data-title="нужный title"

        if (window.matchMedia("(min-width: 992px)").matches) {
            $("body").css({ "overflow": "hidden", "padding-right": "17px" });
        }
        if (window.matchMedia("(max-width: 992px)").matches) {

            $("body").css({ "overflow": "hidden", "padding-right": "0px" });
        }
    });
    // overlay для закрытия
    $(".overlay").click(function() {
        $(this).parent().toggle("drop", { direction: "up" }, 200);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    // закрываем модальное окно на крестик
    $(".popup .close").click(function(e) {
        e.preventDefault();
        $(this).parents(".popup").hide("drop", { direction: "up" }, 200);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    //обработчик кнопки на нажатие btn_mnu
    $("#nav-button-label").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('nav-on'); // добавляет класс для анимации самой кнопки
        $(this).next().slideToggle(); // открывает меню main_nav_block, которое было скрыто
        $(this).find('.nav-line').toggleClass('active');
        $(".mnu_dropdown").toggleClass("active");
    });
    // Скрыть элемент при клике за его пределами бутерброд и его выпадающее меню
    $(document).click(function(event) {
        if ($(event.target).closest("#nav-button-label").length)
            return;
        if ($(event.target).closest("[off-canvas]").length)
            return;
        $("#nav-button-label").removeClass("nav-on");
        $("#nav-button-label .nav-line").removeClass("active");

        event.stopPropagation();

    });
    //  Отправка форм
    $("form:not('#form3')").submit(function() { // перехватываем все при событии отправки
        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = [];
        form.find('.modal_form_input').each(function() { // пробежим по каждому полю в форме

            if ($(this).val() == '') { // если находим пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
            } else if ($(this).val() !== '') { // если находим не пустое
                $(this).siblings().hide("fade", 500)
                error.push(false); // нет ошибки
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500)
            });

        });
        form.find('.modal_form_phone').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка 
                if ($(this).siblings().hasClass('input_error_phone')) {
                    $(this).siblings().removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }
            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500);
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_phone').text("").prepend("Введите правильный телефон<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        form.find('.modal_form_email').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9\-]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
                if ($(this).siblings().hasClass('input_error_email')) {
                    $(this).siblings().removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }

            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500).removeClass('input_error_email');
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        var erorr_finish = 0;
        for (var i = 0; i < error.length; i++) {
            if (error[i] == false) {
                erorr_finish = erorr_finish + 1;
            };
            // console.log(error[i]);
        }
        //console.log(erorr_finish);
        var size = error.length - 1;
        if (erorr_finish > size) { // в зависимости от полей которые проверяются (в нашем случае 3 поля)
            var data = form.serialize(); // подготавливаем данные
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mail.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                success: function(data) { // событие после удачного обращения к серверу и получения ответа
                    if (data['error']) { // если обработчик вернул ошибку
                        alert(data['error']); // покажем её текст
                    } else { // если все прошло ок

                        if (data['form_type'] == 'modal') {
                            $('.dm-modal form').hide();
                            $('.dm-modal .close').hide();
                            $('.dm-modal h3').hide();
                            $('.dm-modal p:not(".success_mail")').hide();
                            form.trigger('reset');
                            $('.dm-modal .success_mail').addClass('active'); //пишем что всё ок
                            setTimeout(function() {
                                form.parents('.popup').hide("fade", 500);
                                $('.dm-modal .success_mail').removeClass('active');
                                $('.dm-modal .close').show();
                                //$("body").css({ "overflow": "inherit", "padding-right": "0" });
                            }, 3000);
                        }
                        if (data['form_type'] == 'normal') { //надо писать в обычных формах <input type="hidden" name="form_type" value="normal"> 
                            form.trigger('reset');
                            $('.dm-modal .success_mail').addClass('active');
                            $('.popup[data-modal=modal-res]').toggle("fade", 500);
                            //$("body").css({ "overflow": "hidden", "padding-right": "17px" });
                            setTimeout(function() {
                                $('.popup[data-modal=modal-res]').hide("fade", 500);
                                $('.dm-modal .success_mail').removeClass('active', 500);
                                //$("body").css({ "overflow": "inherit", "padding-right": "0" });
                            }, 3000);
                        }
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                    alert(xhr.status); // покажем ответ сервера
                    alert(thrownError); // и текст ошибки
                },
                complete: function(data) { // событие после любого исхода
                    form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
    });


});

$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");
