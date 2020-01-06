$(document).ready(function () {
  $(window).on("scroll", function () {
    if (($(window).scrollTop() > $('.header .form__secure').offset().top) && ($(window).scrollTop() < $('.order').offset().top)) {
      $(".header-scroll").fadeIn();
    } else {
      $(".header-scroll").fadeOut();
    }
  });
})