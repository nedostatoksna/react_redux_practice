import React from "react";
import { useDispatch } from "react-redux";
import { fetchPhotos } from "../../store/actionCreators";
import Photos from "./Photos";
import style from "./UserAlbums.module.css";

const Album = ({ album }) => {
    const dispatch = useDispatch();

    return (
        <>
         <li key={album.id}>
                        {album.title}
                        <br /><br />
                        <button onClick={() => dispatch(fetchPhotos(album.id))} className={style.photos_btn}>Get photos</button>
                        <br /><br />
                        <Photos album={album} key={album.id} />
                        
                    </li>
        
        </>
    )
};

export default Album;