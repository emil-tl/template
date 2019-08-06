import Swiper from 'swiper/dist/js/swiper';

export default class Slider {
  constructor(props) {
    this.init = props.init;
    this.wrap = props.wrap;
    this.slider = props.slider;
    this.prev = props.prev;
    this.next = props.next;
    this.options = props.options;
    this.render();
  }

  render() {
    if (!this.init) {
      return;
    }
    const wraps = document.querySelectorAll(this.wrap);
    for (let i = 0; i < wraps.length; i += 1) {
      const prev = wraps[i].querySelectorAll(this.prev);
      const next = wraps[i].querySelectorAll(this.next);
      if (prev !== undefined && next !== undefined) {
        this.options.navigation = {
          prevEl: prev,
          nextEl: next,
        };
      }
      const slider = new Swiper(wraps[i].querySelector(this.slider), this.options);
    }
  }
}
