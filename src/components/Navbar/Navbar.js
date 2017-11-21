import styles from './Navbar.scss';
import { setupLinksOnHrefChildren } from 'helpers/router';


class Navbar {
  constructor() {
    this.container = null;
    this.state = {
      count: 0,
    };
  }

  setContainer( container ) {
    this.container = container;
  }

  render() {
    // const { count } = this.state;

    return `
      <div class="${styles.navbar__content} clearfix" >
        <div class="${styles.navbar__left}">
          <a href="/">Home </a> &nbsp;
          <a href="/form">Form </a> &nbsp;
          <a href="/search-tv">SearchTV </a> &nbsp;
        </div>
        <div class="${styles.navbar__center}">
          <a class="${styles.navbar__centerLink}" href="/" >
            Vanilla JS
          </a>
        </div>
        <div class="${styles.navbar__right}">
          <button> Btn1 </button>
          <button> Btn2 </button>
        </div>
      </div>
    `;
  }

  renderToDOM() {
    this.container.innerHTML = this.render();
  }

  incrementOnClick = ( /* event */ ) => {
    this.state = {
      ...this.state,
      count: this.state.count + 1,
    };
    this.renderToDOM();
    this.setupEvents();
  }

  setupEvents() {
    setupLinksOnHrefChildren(this.container);
    this.container.addEventListener('click', this.incrementOnClick);
  }
}

export default Navbar;
