import React from "react";

const Comment = ({ comment }) => {
    return (
        <>
            <li>
                <b>{comment.name}</b>
                <br />
                {comment.body}
                <br /> 
                {comment.email}
                <br /><br />
            </li>
        </>
    )
};

export default Comment;