import React from "react";

const Todo = ({ todo }) => {

    return (
        <li>
            {todo.title}
            <input type="checkbox" checked={todo.completed} />
        </li>
    )
};

export default Todo;