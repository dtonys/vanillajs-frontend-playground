import Component from 'helpers/Component';

import pageStyles from 'pages/pageStyles.scss';


const TodoItem = ({
  text,
  done,
  index,
}) => {
  return `
    <div class="todoItem" data-index="${index}" >
      <div> text: ${text} </div>
      <div> done: ${done} </div>
      <button class="removeItem" > Remove </button>
      <button class="markItem" > Mark done </button>
      <br />
      <br />
    </div>
  `;
};

class TodoPage extends Component {

  constructor() {
    super();
    this.state = {
      todos: [
        { text: 'Do thing 1', done: false },
        { text: 'Do thing 1', done: false },
      ],
      form: {},
    };
  }

  render() {
    const { todos, form } = this.state;

    return `
      <div class="${pageStyles.page__wrapper}" >
        <h1 class="${pageStyles.page__header}" > TodoPage </h1>
        <div>
          <div>
            <div> Search </div>
            <input
              class="submitTodoText"
              name="submitTodoText"
              type="text"
              placeholder="Todo text"
              value="${form.submitTodoText || ''}"
            />
            <button class="submitTodo" > Add Todo </button>
          </div>
          <hr />
          ${todos
              .map(( todo, index ) => (TodoItem({ ...todo, index }) ))
              .join('')
          }
        </div>
      </div>
    `;
  }

  addTodo = ( event ) => {
    event.preventDefault();
    const input = this.container.querySelector('.submitTodoText');
    if ( input.value.trim() ) {
      this.state.todos.push({
        text: input.value, done: false,
      });
      this.state.form.submitTodoText = '';
      this.updateDom();
    }
  }

  removeTodo = ( event ) => {
    const todoIndex = parseInt(event.target.closest('.todoItem').getAttribute('data-index'), 10);
    this.state.todos = this.state.todos.filter((todo, index) => (index !== todoIndex));
  }

  markTodoDone = ( event ) => {
    const todoIndex = parseInt(event.target.closest('.todoItem').getAttribute('data-index'), 10);
    this.state.todos[todoIndex].done = !this.state.todos[todoIndex].done;
  }

  onInputChange = ( event ) => {
    const value = event.target.value;
    const name = event.target.getAttribute('name');
    this.state.form = {
      ...this.state.form,
      [name]: value,
    };
  }

  onContainerClick = (event) => {
    if ( event.target.matches('.submitTodo') ) this.addTodo(event);
    if ( event.target.matches('.removeItem') ) this.removeTodo(event);
    if ( event.target.matches('.markItem') ) this.markTodoDone(event);
  }

  onContainerInput = (event) => {
    if ( event.target.matches('.submitTodoText') ) this.onInputChange(event);
  }

  setupEvents() {
    this.container.addEventListener('click', this.onContainerClick);
    this.container.addEventListener('input', this.onContainerInput);
  }

}

export default TodoPage;
