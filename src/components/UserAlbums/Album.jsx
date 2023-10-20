import React from "react";
import { useDispatch } from "react-redux";
import { fetchPhotos } from "../../store/actionCreators";
import Photos from "./Photos";

const Album = ({ album }) => {
    const dispatch = useDispatch();

    return (
        <>
         <li key={album.id}>
                        {album.title}
                        <button onClick={() => dispatch(fetchPhotos(album.id))}>Get photos</button>
                        <br /><br />
                        <Photos album={album} key={album.id} />
                        
                    </li>
        
        </>
    )
};

export default Album;