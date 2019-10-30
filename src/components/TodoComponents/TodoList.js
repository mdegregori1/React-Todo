import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return(
        <div>
            {props.todo.map(todo=> (
                <Todo toggleCompleted={props.toggleCompleted}  key = {todo.id} todo={todo}/>
            ))}
        </div>
    )
}

export default TodoList;