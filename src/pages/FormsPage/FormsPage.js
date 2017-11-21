import pageStyles from 'pages/pageStyles.scss';
import allElements from 'pages/htmlTemplates/allElements';

class FormsPage {
  constructor() {
    this.container = null;
    this.state = {};
  }

  setContainer( container ) {
    this.container = container;
  }

  render() {
    return `
      <div class="${pageStyles.page__wrapper}" >
        <h1 class="${pageStyles.page__header}" > FormsPage </h1>
        ${allElements()}
      </div>
    `;
  }

  renderToDOM() {
    this.container.innerHTML = this.render();
  }

  setupEvents() {
  }
}

export default FormsPage;
