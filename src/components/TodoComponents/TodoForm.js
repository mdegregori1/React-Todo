import React from "react"

const TodoForm = props => {
      return (
          <div>
            <form onSubmit={props.AddTodo}>
            <input 
                type="text" 
                name="todo" 
                id="todo" 
                placeholder="Add a new task here..."
                onChange={props.handleChanges}
                value={props.value}
                />
            <button>Add</button>
            <button onClick={props.clear}>Remove</button>
            </form>
          </div>
      );
  }
  
  export default TodoForm;