import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default';

export default class Gallery {
  constructor(props) {
    this.init = props.init;
    this.wrap = props.wrap;
    this.pswp = props.pswp;
    this.image = props.image;
    this.options = props.options;

    if (this.init) {
      this.render();
    }
  }

  render() {
    const wrap = document.querySelectorAll(this.wrap);
    const pswp = document.querySelector(this.pswp);

    if (wrap.length > 0 && wrap && pswp) {
      for (let i = 0; i < wrap.length; i += 1) {
        const photosMap = wrap[i].querySelectorAll(this.image);
        const items = {};
        for (let j = 0; j < photosMap.length; j += 1) {
          const size = photosMap[j].dataset.size.split('x');
          items[j] = {
            src: photosMap[j].dataset.image,
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10),
          };
          photosMap[j].addEventListener('click', () => {
            const photosList = this.mapToArr(items);
            const gallery = new PhotoSwipe(
              pswp,
              PhotoSwipeUI,
              photosList,
              this.options,
            );
            gallery.init();
            gallery.goTo(j);
          });
        }
      }
    }
  }

  mapToArr(obj) {
    return Object.keys(obj).map(id => obj[id]);
  }
}
