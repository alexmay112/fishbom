var sliderSelector = '.swiper-container',
  options = {
    loop: true,
    speed: 700,
    slidesPerView: 'auto', // or 'auto'
    autoHeight: true,
    centeredSlides: true,
    effect: 'coverflow', // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 719, // Stretch space between slides (in px)
      depth: 425, // Depth offset in px (slides translate in Z axis) *425
      modifier: 1, // Effect multipler
      slideShadows: false,
    },
    grabCursor: true,
    // parallax: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1239: {
        coverflowEffect: {
          stretch: 666, // Stretch space between slides (in px)
          depth: 425, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows: false,
        },
      },
      1023: {
        coverflowEffect: {
          stretch: 0, // Stretch space between slides (in px)
          depth: 250, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows: false,
        },
      },
    },
    // Events
    on: {
      imagesReady: function () {
        this.el.classList.remove('loading');
      }
    }
  };

//Создаем объект 'user', который будет содержать информацию Detect.js
//Вызываем detect.parse() с navigator.userAgent в качестве аргумента
var user = detect.parse(navigator.userAgent);

// Выводим нужные значения в консоли браузера
console.log(user.browser.family)

if (user.browser.family == 'IE') {
  var sliderSelector = '.swiper-container',
    options = {
      loop: true,
      speed: 700,
      slidesPerView: 'auto', // or 'auto'
      autoHeight: true,
      centeredSlides: true,
      effect: 'slide', // 'cube', 'fade', 'coverflow',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Events
      on: {
        imagesReady: function () {
          this.el.classList.remove('loading');
        }
      }
    };
}

var mySwiper = new Swiper(sliderSelector, options);

// let slider1 = $('.swiper-container');

// function initSlider(slider, options) {
//   slider.on('init', function () {
//     setTimeout(function () {
//       slider.addClass('is-ready');
//     }, 100);
//   });
//   slider.not('.slick-initialized').slick(options);
// }


// function destroySlider(slider) {
//   if (slider.hasClass('slick-initialized')) {
//     slider.slick('unslick');
//   }
// }

// function showSlider() {
//   var tablet = ($(window).width()) < 866;
//   if (tablet) {
//     initSlider(slider1, {
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       dots: false,
//       arrows: true,
//       infinite: true,
//       adaptiveHeight: true,
//       variableWidth: true,
//     });
//   } else {
//     destroySlider(slider1);
//   }
// };
// showSlider();
// $(window).on('resize', showSlider);