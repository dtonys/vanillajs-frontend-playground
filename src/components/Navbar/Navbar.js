import styles from './Navbar.scss';

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
    const { count } = this.state;

    return `
      <div class="${styles.navbar}" >
        Navbar ${count}
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
  }

  setupEvents() {
    this.container.addEventListener('click', this.incrementOnClick);
  }
}

export default Navbar;

// hot reload css explicitely
if ( module.hot ) {
  module.hot.accept('./Navbar.scss');
}
