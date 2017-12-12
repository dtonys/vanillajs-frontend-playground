import history from 'helpers/history';
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

  link = (event, target) => {
    // Allow ctr + click (mac) to open a new tab for <a> tags
    if ( event.defaultPrevented || event.metaKey || event.ctrlKey ) {
      return;
    }
    event.preventDefault();
    const href = target.getAttribute('href');
    const fullReload = target.hasAttribute('fullReload');
    if ( fullReload ) {
      window.location.href = href;
      return;
    }
    history.push(href);
  }

  postHydrate() {
    // setup all links
    this.createEvent('click', {
      '[href]': this.link,
    });
  }

  render() {
    const { navbar, page } = this.children;
    return `
      <div class="${styles.layout}" >
        ${navbar.renderToString()}
        <div class="${styles.content}" >
          ${page.renderToString()}
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
