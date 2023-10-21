import React from "react";
import Photo from "./Photo";
import style from "./UserAlbums.module.css";

const Photos = ({ album }) => {

    return (
        <>
            {
                album.photos ? (
                    <ul className={style.album_content_wrapper}>
                        {
                            album.photos.map(photo => (
                                <Photo photo={photo} key={photo.id} />
                            ))
                        }
                    </ul>
                ) : undefined
            }
        
        </>
    )
};

export default Photos;