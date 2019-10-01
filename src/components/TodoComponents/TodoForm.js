import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input onChange={props.handleTodoChange} type="text" name="todo" value={props.value}  placeholder="add a task"/>
      <button onClick={props.handleAddTodo}>(+)</button>
      <button onClick={props.handleClearTodos}>Remove Completed</button>
    </form>
  );
};

export default TodoForm;

