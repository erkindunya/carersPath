import $ from 'jquery';

$('.js-toggle-subnav').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.subnav').slideToggle();
});

$('.js-close-subnav').click(function (event) {
    event.preventDefault();
    $('.js-toggle-subnav').removeClass('active');
    $('.subnav').slideUp();
});