$(function(){
    $('.header__btn').on('click', function(){
        $('.header__btn').toggleClass('header__btn--active')
        $('.header__list').toggleClass('header__list--active')
    })
});