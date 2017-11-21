import styles from './PageLayout.scss';
import Navbar from 'components/Navbar/Navbar';


class PageLayout {
  constructor({
    Page,
    container,
  }) {
    this.container = container;
    this.components = {
      navbar: {
        containerClass: styles.navbar,
        component: new Navbar(),
      },
      page: {
        containerClass: styles.content,
        component: new Page(),
      },
    };
    this.state = {};
    this.renderToDOM();
  }

  render() {
    const { navbar, page } = this.components;

    return `
      <div class="${styles.layout}" >
        <div class="${navbar.containerClass}" >
          ${navbar.component.render()}
        </div>
        <div class="${styles.content}" >
          ${page.component.render()}
        </div>
      </div>
    `;
  }

  switchPage( Page ) {
    this.components.page = {
      containerClass: styles.content,
      component: new Page(),
    };
    const componentContainer = this.container.querySelector(`.${this.components.page.containerClass}`);
    this.components.page.component.setContainer(componentContainer);
    this.components.page.component.renderToDOM();
    this.components.page.component.setupEvents();
  }

  setupChildren() {
    Object.keys(this.components).forEach((key) => {
      const { containerClass, component } = this.components[key];
      const containerElement = this.container.querySelector(`.${containerClass}`);
      component.setContainer(containerElement);
      if ( component.setupEvents ) {
        component.setupEvents();
      }
    });
  }

  renderToDOM() {
    this.container.innerHTML = this.render();
    this.setupChildren();
  }
}

export default PageLayout;
