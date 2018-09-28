import $ from 'jquery';

$(document).on("click", ".js-toggle-subnav", () => {
  $(".subnav-link").toggleClass("active");
  $(".subnav").slideToggle(200);
});

$(document).on("click", "#exploreCareer .arrow", () => {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#exploreCareer").offset().top
  }, 1000);
});
