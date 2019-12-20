$(document).ready(function () {
  $(window).on("scroll", function () {
    if (($(window).scrollTop() > $('.bulits').offset().top) && ($(window).scrollTop() < $('.order').offset().top)) {
      $(".header-scroll").fadeIn();
    } else {
      $(".header-scroll").fadeOut();
    }
  });
})