import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Eat Chick Fil a',
          id: 1528817077286,
          completed: true
        },
        {
          task: 'Sleep all day',
          id: 1528817084358,
          completed: true
        },
        {
          task: 'Study',
          id: 1528817084352,
          completed: false
        }
      ],
      todo: ''
    };
  }

  addTodo = event => {
    event.preventDefault();
    const newTodo = 
    { 
      task: this.state.todo, 
      completed: false, id: 
      Date.now() 
    };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
    });
  };

  changeTodo = event => this.setState({ [event.target.name]: event.target.value });

  toggleCompleted = id => {
    console.log(id);
    let todos = this.state.todos.slice(0);
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };
 
  clearCompleted = e => {
    e.preventDefault();
    this.setState({
       todos: this.state.todos.filter(todo => !todo.completed) 
      });
  };

  render() {
    return (
      <div>
        <TodoList handleToggleComplete={this.toggleCompleted} todos={this.state.todos}/>
        <TodoForm value={this.state.todo} handleTodoChange={this.changeTodo} handleAddTodo={this.addTodo} handleClearTodos={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;