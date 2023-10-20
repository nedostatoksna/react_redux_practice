import React from "react";
import Comment from "./Comment";

const Comments = ({ post }) => {

    return (
        <>
            {
                post.comments ? (
                    <ul>
                        {
                            post.comments.map(comment => (
                                <Comment comment={comment} key={comment.id} />
                            ))
                        }
                    </ul>
                ) : undefined
            }
        
        </>
    )
};

export default Comments;