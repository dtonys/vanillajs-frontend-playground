import Navbar from 'components/navbar/navbar';
import Sidebar from 'components/sidebar/sidebar';

class PageLayout {
  constructor() {
    this.container = null;
    this.navbar = new Navbar();
    this.sidebar = new Sidebar();
  }

  setContainer( container ) {
    this.container = container;
  }

  render() {
    const navbarHtml = this.navbar.render();
    const sidebarHtml = this.sidebar.render();

    return `
      <div class="layout" >
        Layout
        <div class="navbar" > ${navbarHtml} </div>
        <div class="sidebar" > ${sidebarHtml} </div>
      </div>
    `;
  }

  hydrateChildren() {
    const navbarContainer = this.container.querySelector('.navbar');
    const sidebarContainer = this.container.querySelector('.sidebar');

    this.navbar.setContainer(navbarContainer);
    this.sidebar.setContainer(sidebarContainer);

    this.navbar.setupEvents();
    this.sidebar.setupEvents();
  }

  renderToDOM() {
    this.container.innerHTML = this.render();
    this.hydrateChildren();
  }
}

export default PageLayout;
