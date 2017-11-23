import Component from 'helpers/Component';

import pageStyles from 'pages/pageStyles.scss';


class NotFoundPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return `
      <div class="${pageStyles.page__wrapper}" >
        <h1 class="${pageStyles.page__header}" > NotFoundPage </h1>
      </div>
    `;
  }
}

export default NotFoundPage;
