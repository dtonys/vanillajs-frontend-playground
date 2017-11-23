import Component from 'helpers/Component';

import pageStyles from 'pages/pageStyles.scss';
import allElements from 'pages/htmlTemplates/allElements';


class FormsPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return `
      <div class="${pageStyles.page__wrapper}" >
        <h1 class="${pageStyles.page__header}" > FormsPage </h1>
        ${allElements()}
      </div>
    `;
  }
}

export default FormsPage;
