import Gallery from './gallery';
import Menu from './menu';
import Slider from './slider';

const gallery = new Gallery({
  init: true,
  wrap: '[data-photoswipe]',
  pswp: '.pswp',
  image: '[data-image]',
  options: {
    history: false,
    focus: false,
    showAnimationDuration: 0,
  },
});
const menu = new Menu({
  init: true,
  trigger: '[data-menu]',
  bodyClass: 'menu-opened',
});
const sliderPartners = new Slider({
  init: true,
  wrap: '.slider-partners',
  slider: '.slider-partners__init',
  prev: '.slider-partners__arrow--prev',
  next: '.slider-partners__arrow--next',
  options: {
    slidesPerView: 8,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    simulateTouch: false,
    followFinger: false,
    containerModifierClass: 'slider-partners__container-',
    slideClass: 'slider-partners__slide',
    slideActiveClass: 'slider-partners__slide--active',
    slideDuplicateActiveClass: 'slider-partners__slide--duplicate-active',
    slideVisibleClass: 'slider-partners__slide--visible',
    slideDuplicateClass: 'slider-partners__slide--duplicate',
    slideNextClass: 'slider-partners__slide--next',
    slideDuplicateNextClass: 'slider-partners__slide--duplicate-next',
    slidePrevClass: 'slider-partners__slide--prev',
    slideDuplicatePrevClass: 'slider-partners__slide--duplicate-prev',
    wrapperClass: 'slider-partners__wrapper',
    a11y: false,

    breakpoints: {
      1600: {
        slidesPerView: 6,
      },

      1400: {
        slidesPerView: 5,
      },

      1140: {
        slidesPerView: 4,
      },

      768: {
        slidesPerView: 3,
      },

      400: {
        slidesPerView: 2,
      },
    },
  },
});
