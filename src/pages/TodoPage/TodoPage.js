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

  removeTodo = ( event, target ) => {
    const todoIndex = parseInt(target.closest('.todoItem').getAttribute('data-index'), 10);
    this.state.todos = this.state.todos.filter((todo, index) => (index !== todoIndex));
    this.updateDom();
  }

  markTodoDone = ( event, target ) => {
    const todoIndex = parseInt(target.closest('.todoItem').getAttribute('data-index'), 10);
    this.state.todos[todoIndex].done = !this.state.todos[todoIndex].done;
    this.updateDom();
  }

  onInputChange = ( event, target ) => {
    const value = target.value;
    const name = target.getAttribute('name');
    this.state.form = {
      ...this.state.form,
      [name]: value,
    };
    console.log(this.state.form);
  }

  onInputBlur = ( event, target ) => {
    console.log('onInputBlur');
  }

  onContainerInput = (event) => {
    if ( event.target.matches('.submitTodoText') ) this.onInputChange(event);
  }

  setupEvents() {
    // assume events must be added
    console.log('TodoPage setupEvents');
    /* eslint-disable quote-props */
    this.createEvent('click', {
      'submitTodo': this.addTodo,
      'removeItem': this.removeTodo,
    });
    this.createEvent('click', {
      'markItem': this.markTodoDone,
    });
    this.createEvent('input', {
      'submitTodoText': this.onInputChange,
    });
    this.createEvent('blur', {
      'submitTodoText': this.onInputBlur,
    });
  }

}

export default TodoPage;
