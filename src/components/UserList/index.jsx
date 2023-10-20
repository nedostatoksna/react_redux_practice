import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseUser, fetchUsers } from "../../store/actionCreators";

const UserList = () => {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (!users.length) {
        return <h1>Loading...</h1>
    } 
    return (
        <ul>
            {
                users.map(user => (
                    <li key={user.id} onClick={() => dispatch(chooseUser(user.id))}>
                        {user.username}
                    </li>
                ))
            }
        
        </ul>
    )

};

export default UserList;