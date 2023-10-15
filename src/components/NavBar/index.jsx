import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../store/actionCreators";
import style from "./NavBar.module.css";

const NavBar = () => {

    const dispatch = useDispatch();
    const tab = useSelector(state => state.activeTab);
    
    return (
        <nav>
            <button 
                onClick={() => {dispatch(changeTab("user"))}}
                className={tab === "user" ? style.activeTab : style.tab}
            >User Details</button>
            <button 
                onClick={() => {dispatch(changeTab("posts"))}}
                className={tab === "posts" ? style.activeTab : style.tab}
            >User Posts</button>
            <button 
                onClick={() => {dispatch(changeTab("todos"))}}
                className={tab === "todos" ? style.activeTab : style.tab}
            >Todos</button>
            <button 
                onClick={() => {dispatch(changeTab("albums"))}}
                className={tab === "albums" ? style.activeTab : style.tab}
            >Albums</button>
        </nav>
    )
};

export default NavBar;