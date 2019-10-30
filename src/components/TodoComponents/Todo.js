import React from 'react';

const Todo = props => {
    console.log('testing props', props)
  return (
    <div style={props.todo.completed ? { textDecoration: 'line-through' } : null}
    onClick={() => props.toggleCompleted(props.todo.id)}>
        <ul>
            <li>{props.todo.task}</li>
        </ul>
    </div>
  );
};

export default Todo;
