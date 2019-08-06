export default class Menu {
  constructor(props) {
    this.init = props.init;
    this.trigger = props.trigger;
    this.bodyClass = props.bodyClass;

    if (this.init) {
      this.render();
    }
  }

  render() {
    const triggers = document.querySelectorAll(this.trigger);
    const body = document.querySelector('body');

    triggers.forEach((item) => {
      item.addEventListener('click', () => {
        body.classList.toggle(this.bodyClass);
      });
    });
  }
}
