import React from "react";
import style from "./UserAlbums.module.css";

const Photo = ({ photo }) => {
    
    return (
        <>
            <li className={style.photo_wrapper}>
                <img src={photo.url} alt={photo.title} width="264px" />
            </li>
        </>
    )
};

export default Photo;