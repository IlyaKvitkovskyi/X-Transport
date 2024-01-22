var swiper;

function initSwiper() {
  swiper = new Swiper('.mySwiper', {
    slidesPerView: 5,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next-one',
      prevEl: '.swiper-button-prev-one',
    },
  });
}

function destroySwiper() {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

// Проверка разрешения экрана при загрузке и изменении размера окна
window.addEventListener('load', function () {
  if (window.innerWidth < 1240) {
    destroySwiper();
  } else {
    initSwiper();
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth < 1240) {
    destroySwiper();
  } else {
    initSwiper();
  }
});

var swiperTwo = new Swiper('.mySwiperTwo', {
  slidesPerView: 2,
  // centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1245: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1240: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 50,
    },

    992: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 50,
    },

    768: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 50,
    },

    448: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 50,
    },

    300: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 50,
    },
  },
});
