import pageStyles from 'pages/pageStyles.scss';
import history from 'helpers/history';
import allElements from 'pages/htmlTemplates/allElements';


const pathNameToTemplateMap = {
  '/static': allElements,
};

class StaticPage {
  constructor() {
    this.container = null;
    this.templateFn = pathNameToTemplateMap[history.location.pathname];
    this.state = {};
  }

  setContainer( container ) {
    this.container = container;
  }

  render() {
    return `
      <div class="${pageStyles.page__wrapper}" >
        ${this.templateFn()}
      </div>
    `;
  }

  renderToDOM() {
    this.container.innerHTML = this.render();
  }
}

export default StaticPage;
