import styles from './TestComponent.scss';


class TestComponent {
  constructor() {
    this.container = null;
    this.state = {};
  }

  setContainer( container ) {
    this.container = container;
  }

  render() {
    return `
      <div class="${styles.testComponent}" >
        <div> TestComponent </div>
      </div>
    `;
  }

  renderToDOM() {
    this.container.innerHTML = this.render();
  }

  postHydrate() {
    this.container.addEventListener('click', (event) => {
      console.log('Clicked');
    });
  }
}

export default TestComponent;

// hot reload css explicitely
// if ( module.hot ) {
//   module.hot.accept('./TestComponent.css');
// }
