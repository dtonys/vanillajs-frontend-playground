import Component from 'helpers/Component';

import styles from './PageLayout.scss';
import Navbar from 'components/Navbar/Navbar';


class PageLayout extends Component {

  constructor({ Page }) {
    super();
    this.children = {
      page: new Page(),
      navbar: new Navbar(),
      // listItems: [
      //   new ListItem(),
      //   new ListItem(),
      //   new ListItem(),
      // ],
    };

    this.state = {
      count: 0,
    };

  }

  incrementCounter = (/* event */) => {
    this.state = {
      ...this.state,
      count: this.state.count + 1,
    };
    this.updateDom();
  }

  setupEvents() {
    this.container
      .addEventListener('click', this.incrementCounter, false);
  }

  // setup "mount" logic here
  postHydrate() {
    console.log('postHydrate');
  }

  render() {
    return `
      <div class="${styles.layout}" >
        ${this.children.navbar.renderToString()}
        <div class="${styles.content}" >
          ${this.children.page.renderToString()}
        </div>
      </div>
    `;
  }

  switchPage( NewPage ) {
    this.children.page = new NewPage();
    this.updateDom();
    this.children.page.hydrate();
  }
}

export default PageLayout;
