$(function () {
    $('.header__btn').on('click', function () {
        $('.header__btn').toggleClass('header__btn--active')
        $('.header__list').toggleClass('header__list--active')
    });

    $('.portfolio-btn').on('click', function() {
        $('.portfolio-btn').toggleClass('portfolio-btn--active')
        $('.portfolio__content-more').toggleClass('portfolio__content-more--active')
    });

    // Popup window 
    $('.open-popup').click(function(e) {
        e.preventDefault();
        $('.popup-bg').fadeIn(800);
        $('html').addClass('no-scroll');
    });
    
    $('.close-popup').click(function() {
        $('.popup-bg').fadeOut(800);
        $('html').removeClass('no-scroll');
    });
    // Плавний скрол вверх по якорям
    // Menu
    $(document).ready(function(){
        $(".header__list").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
    
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
    
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    //Footer
    $(".backTo__link").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});