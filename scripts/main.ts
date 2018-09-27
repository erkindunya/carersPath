import $ from 'jquery';

$(document).on("click", ".js-toggle-subnav", () => {
    $(".subnav-link").toggleClass("active");
    $(".subnav").slideToggle(200);
  });
  