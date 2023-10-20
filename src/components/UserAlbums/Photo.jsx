import React from "react";

const Photo = ({ photo }) => {
    
    return (
        <>
            <li>
                <img src={photo.url} alt={photo.title} />
            </li>
        </>
    )
};

export default Photo;