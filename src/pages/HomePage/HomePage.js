import styles from './HomePage.scss';


class HomePage {
  constructor() {
    this.container = null;
    this.state = {};
  }

  setContainer( container ) {
    this.container = container;
  }

  render() {
    return `
      <div class="${styles.homePage}" >
        <div> HomePage </div>
      </div>
    `;
  }

  renderToDOM() {
    this.container.innerHTML = this.render();
  }

  setupEvents() {
    // this.container.addEventListener('click', (event) => {
    //   console.log('HomePage Clicked');
    // });
  }
}

export default HomePage;
