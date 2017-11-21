import pageStyles from 'pages/pageStyles.scss';


class SearchTVPage {
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
        <h1 class="${pageStyles.page__header}" > SearchTVPage </h1>
      </div>
    `;
  }

  renderToDOM() {
    this.container.innerHTML = this.render();
  }

  setupEvents() {
  }
}

export default SearchTVPage;
