import { getUsers } from "../api/api";
import { CHANGE_TAB, UPD_USERS } from "./actions";

const changeTab = (activeTab) => ({
    type: CHANGE_TAB,
    payload: { activeTab }
});

const updUsers = (users) => ({
    type: UPD_USERS,
    payload: { users }
})

const fetchUsers = () => {
    return async function (dispatch) {
        const users = await getUsers();
        dispatch(updUsers(users));
    }
};


export { changeTab, fetchUsers };