import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";
import { fetchTodos } from "../../store/actionCreators";

const UserTodos = () => {

    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.activeUser);
   
    useEffect(() => {
        dispatch(fetchTodos(userId));
    }, [dispatch, userId]);
    
    if (!todos.length) {
        return <h1>Loading...</h1>
    } 
    return (
        <>
            <ul>
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