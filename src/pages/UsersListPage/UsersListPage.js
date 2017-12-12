import styles from './UsersListPage.scss';
import Component from 'helpers/Component';
import pageStyles from 'pages/pageStyles.scss';


const UserItem = ({
  id,
  name,
  age,
  index,
}) => {
  return `
    <a href="/users/${id}" class="${styles.userItem__containerLink}">
      <div
        class="${styles.userItem__container}"
      >
        <div> id: ${id} </div>
        <div> name: ${name} </div>
        <div> age: ${age} </div>
        <div> index: ${index} </div>
        <hr />
      </div>
    </a>
  `;
};

class UsersListPage extends Component {

  constructor() {
    super();
    this.state = {
      users: [
        { id: '1', name: 'Tom', age: '17' },
        { id: '2', name: 'Bill', age: '27' },
        { id: '3', name: 'Bob', age: '37' },
      ],
    };
  }

  render() {
    const { users } = this.state;

    return `
      <div class="${pageStyles.page__wrapper}" >
        <h1 class="${pageStyles.page__header}" > UsersListPage </h1>
        ${users
            .map(( user, index ) => (UserItem({ ...user, index }) ))
            .join('')
        }
      </div>
    `;
  }

}

export default UsersListPage;
