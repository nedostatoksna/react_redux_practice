import React from "react";
import Photo from "./Photo";

const Photos = ({ album }) => {

    return (
        <>
            {
                album.photos ? (
                    <ul>
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