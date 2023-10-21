import { useSelector } from "react-redux";
import style from "./UserDetailes.module.css";

const UserDetails = () => {

    const activeUser = useSelector(state => state.activeUser);
    const users = useSelector(state => state.users);
    const userInfo = users.find(user => user.id === activeUser);
    console.log(userInfo);

    return (
        <div className={style.user_card}>
            <h1 className={style.name}><i className={style.green}>Name:</i> {userInfo.name}</h1>
            <h2 className={style.company}><i className={style.green}>Company:</i> {userInfo.company.name}</h2>
            <h3 className={style.city}><i className={style.green}>City:</i> {userInfo.address.city}</h3>
            <h4 className={style.phone}><i className={style.green}>Phone:</i> {userInfo.phone}</h4>
            <h5 className={style.email}><i className={style.green}>Email:</i> {userInfo.email}</h5>
            <h6 className={style.website}><i className={style.green}>Website:</i> {userInfo.website}</h6>
        </div>
    )
};

export default UserDetails;