import styles from './sidebar.css';


class Sidebar {
  constructor() {
    this.container = null;
    this.state = {};
  }

  setContainer( container ) {
    this.container = container;
  }

  render() {
    return `
      <div class="${styles.sidebar}" >
        Sidebar
      </div>
    `;
  }

  renderToDOM( el ) {
    this.container.innerHTML = this.render();
  }

  setupEvents() {
    console.log('setupEvents');
    this.container.addEventListener('click', () => {
      console.log('Sidebar clicked');
    });
  }
}

export default Sidebar;

// hot reload css explicitely
if ( module.hot ) {
  module.hot.accept('./sidebar.css');
}
