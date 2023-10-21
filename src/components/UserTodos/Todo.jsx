import React from "react";
import style from "./UserTodos.module.css";

const Todo = ({ todo }) => {

    return (
        <li className={style.todo}>
            {todo.title}
            <input type="checkbox" checked={todo.completed} />
        </li>
    )
};

export default Todo;