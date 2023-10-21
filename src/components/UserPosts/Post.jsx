import React from "react";
import { useDispatch } from "react-redux";
import { fetchComments } from "../../store/actionCreators";
import Comments from "./Comments";
import style from "./UserPosts.module.css";

const Post = ({ post }) => {
    const dispatch = useDispatch();

    return (
        <>
         <li key={post.id}>
                        <b>{post.title}</b>
                        <br /><br />
                        {post.body}
                        <br /><br />
                        <button onClick={() => dispatch(fetchComments(post.id))} className={style.comments_btn}>Get comments</button>
                        <br /><br />
                        <Comments post={post} key={post.id} />
                        
                    </li>
        
        </>
    )
};

export default Post;