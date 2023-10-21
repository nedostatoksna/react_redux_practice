import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseUser, fetchUsers } from "../../store/actionCreators";
import style from "./UserList.module.css";
import LoadingSpinner from "../../ui/LoadingSpinner";

const UserList = () => {

    const users = useSelector(state => state.users);
    const activeUser = useSelector(state => state.activeUser)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (!users.length) {
        return <LoadingSpinner />
    } 
    return (
        <div className={style.user_list_wrapper}>
            <h1 className={style.header}>Users</h1>
            <ul className={style.user_list}>
                {
                    users.map(user => (
                        <li key={user.id} onClick={() => dispatch(chooseUser(user.id))} className={user.id === activeUser ? style.active_user : style.user}>
                            {user.username}
                        </li>
                    ))
                }
            
            </ul>
        </div>
    )
};

export default UserList;