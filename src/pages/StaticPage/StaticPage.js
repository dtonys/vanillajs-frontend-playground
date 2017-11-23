import Component from 'helpers/Component';

import pageStyles from 'pages/pageStyles.scss';
import history from 'helpers/history';
import allElements from 'pages/htmlTemplates/allElements';


const pathNameToTemplateMap = {
  '/static': allElements,
};

class StaticPage extends Component {
  constructor() {
    super();
    this.templateFn = pathNameToTemplateMap[history.location.pathname];
    this.state = {};
  }

  render() {
    return `
      <div class="${pageStyles.page__wrapper}" >
        ${this.templateFn()}
      </div>
    `;
  }
}

export default StaticPage;
