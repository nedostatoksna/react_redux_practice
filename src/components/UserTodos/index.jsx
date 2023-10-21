import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";
import { fetchTodos } from "../../store/actionCreators";
import style from "./UserTodos.module.css";
import LoadingSpinner from "../../ui/LoadingSpinner";

const UserTodos = () => {

    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.activeUser);
   
    useEffect(() => {
        dispatch(fetchTodos(userId));
    }, [dispatch, userId]);
    
    if (!todos.length) {
        return <LoadingSpinner />
    } 
    return (
        <>
            <ul className={style.todos_wrapper}>
                {
                    todos.map(todo => (
                        <Todo todo={todo} key={todo.id} />
                    ))
                }
            </ul>
        </>
    )
};

export default UserTodos;