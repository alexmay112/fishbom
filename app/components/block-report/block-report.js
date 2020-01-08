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
        effect: 'slide'
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
      effect: 'fade', // 'cube', 'fade', 'coverflow',
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
      // Events
      on: {
        imagesReady: function () {
          this.el.classList.remove('loading');
        }
      }
    };
}

var mySwiper = new Swiper(sliderSelector, options);