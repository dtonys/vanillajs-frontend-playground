import Component from 'helpers/Component';

import pageStyles from 'pages/pageStyles.scss';
import { setupLinksOnHrefChildren } from 'helpers/router';


class HomePage extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return `
      <div class="${pageStyles.page__wrapper}" >
        <h1 class="${pageStyles.page__header}" > HomePage </h1>
        <h3> Title </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio veniam qui magnam, nisi blanditiis quaerat aliquid illum est ipsa tempore,
            rerum eius, excepturi ratione alias aliquam consequuntur numquam officiis in?</p>
        <hr />
        <h3> Title </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio veniam qui magnam, nisi blanditiis quaerat aliquid illum est ipsa tempore,
            rerum eius, excepturi ratione alias aliquam consequuntur numquam officiis in?</p>
        <hr />
        <h3> Title </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio veniam qui magnam, nisi blanditiis quaerat aliquid illum est ipsa tempore,
            rerum eius, excepturi ratione alias aliquam consequuntur numquam officiis in?</p>
        <hr />
        <h3> Title </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio veniam qui magnam, nisi blanditiis quaerat aliquid illum est ipsa tempore,
            rerum eius, excepturi ratione alias aliquam consequuntur numquam officiis in?</p>
        <hr />
        <h3> Title </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio veniam qui magnam, nisi blanditiis quaerat aliquid illum est ipsa tempore,
            rerum eius, excepturi ratione alias aliquam consequuntur numquam officiis in?</p>
        <hr />
        <h3> Title </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio veniam qui magnam, nisi blanditiis quaerat aliquid illum est ipsa tempore,
            rerum eius, excepturi ratione alias aliquam consequuntur numquam officiis in?</p>
        <hr />
      </div>
    `;
  }

  setupEvents() {
    setupLinksOnHrefChildren(this.container);
  }
}

export default HomePage;
