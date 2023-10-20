import { useSelector } from "react-redux";


const UserDetails = () => {

    const activeUser = useSelector(state => state.activeUser);
    const users = useSelector(state => state.users);
    const userInfo = users.find(user => user.id === activeUser);
    console.log(userInfo);
    
    return (
        <>
            <h1>Name: {userInfo.name}</h1>
            <h2>Company: {userInfo.company.name}</h2>
            <h3>Phone: {userInfo.phone}</h3>
            <h4>Email: {userInfo.email}</h4>
            <h5>Website: {userInfo.website}</h5>
        </>
    )
};

export default UserDetails;