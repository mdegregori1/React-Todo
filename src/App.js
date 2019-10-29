import React, { Component } from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";


const tasks = [
  {
    task: 'Take a nap',
    id: 123,
    completed: false
  },
  {
    task: 'Do 50 pushups',
    id: 234,
    completed: false
  },
  {
    task: 'Read 20 pages',
    id: 345,
    completed: false
  },
  {
    task: 'Eat under 2200 calories',
    id: 456,
    completed: false
  }
];

class App extends Component {
  //set state below containing (2 states) : one equal to "tasks", and one set as an empty string
  constructor(){
    super();
    this.state = {
      todo: tasks,
      newTask: ''
    }
  }
  //create handleChange function, which will setState for newTask to the value that is typed in 
  handleChanges = e => {
    this.setState({
      newTask: e.target.value
    })
  };
// to actually add the todo item to the list, create an addTodo function. Inside of it, define the format of a newly added list item. That is the object below: 
  addTodo = e => {
    e.preventDefault();
    const newTodo = 
    { 
      task: this.state.newTask, 
      completed: false, 
      id: Date.now() 
    };
    //within add todo, make sure you setstate for todo to the previous data(spread operator) + your new "todo" function
    this.setState({ 
      todo: [...this.state.todo, newTodo], 
    });
  };
  //loop task data
  //find a task we clicked on
  // toggle that tasks' completed property 
toggleCompleted = id => {
  //use .map to create a new array
  // if item.id === id? don't understand this part 
  this.setState({
    todo: this.state.todo.map(item => {
      if (item.id ===  id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    })
  })
}
// create function to clear completed by setting state for todo to a filtered version of the previous state, in which everything that is completed (or croseed out) is erased
clearCompleted = e => {
  e.preventDefault();
  this.setState({
     todo: this.state.todo.filter(todo => !todo.completed) 
    });
};


// make sure you render (required for class components)
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList 
        todo={this.state.todo}
        //pass the state that has all of the already existing tasks to TodoList. Here, we will map through them, and then render them onto our screen. 
        toggleCompleted={this.toggleCompleted}

        
        />

        <TodoForm
        //pass down state for a new task (empty strings), plus an onChange value of handleChanges and the onSubmit (addauto)
        //also, pass a clear. this is going to the form, because it's happening on the submit of a delete button
        value={this.state.newTask}
        handleChanges={this.handleChanges}
        AddTodo={this.addTodo}
        clear={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
