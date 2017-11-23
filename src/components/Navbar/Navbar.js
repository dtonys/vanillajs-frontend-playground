import Component from 'helpers/Component';

import styles from './Navbar.scss';
import { setupLinksOnHrefChildren } from 'helpers/router';


class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return `
      <div class="${styles.navbar__container}" >
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
      </div>
    `;
  }

  setupEvents() {
    setupLinksOnHrefChildren(this.container);
  }
}

export default Navbar;
