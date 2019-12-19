$(document).ready(function () {
  $('.photo-slider').slick({
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 1000,
    centerMode: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    // pauseOnFocus: false,
    draggable: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});