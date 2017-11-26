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
            <a href="/form">Form</a> &nbsp;
            <a href="/todo">TODO</a> &nbsp;
          </div>
          <div class="${styles.navbar__center}">
            <a class="${styles.navbar__centerLink}" href="/" >
              Vanilla JS
            </a>
          </div>
          <div class="${styles.navbar__right}">
            <button href="/users" > Users </button>
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
