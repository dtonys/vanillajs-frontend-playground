import Component from 'helpers/Component';

import styles from './PageLayout.scss';
import Navbar from 'components/Navbar/Navbar';

class PageLayout extends Component {

  constructor({ Page }) {
    super();
    const page = new Page();
    this.visitedPages = {
      [Page.name]: page,
    };
    this.children = {
      page: page,
      navbar: new Navbar(),
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
    // this.updateDom();
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
    console.log('PageLayout render');
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
    const pageContainer = this.children.page.container;
    if ( this.children.page.cleanUp ) this.children.page.cleanUp();

    // Re-use existing page if available, preserving state
    if ( this.visitedPages[NewPage.name] ) {
      this.children.page = this.visitedPages[NewPage.name];
    }
    else {
      this.children.page = new NewPage();
      this.visitedPages[NewPage.name] = this.children.page;
    }
    // Do full re-render and hydrate
    this.children.page.replaceDom( pageContainer );
    this.children.page.hydrate();
  }
}

export default PageLayout;
