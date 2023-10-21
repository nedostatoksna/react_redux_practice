import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/actionCreators";
import Post from "./Post";
import style from "./UserPosts.module.css";
import LoadingSpinner from "../../ui/LoadingSpinner";

const UserPosts = () => {

    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.activeUser);
    console.log(posts.comments);

    useEffect(() => {
        dispatch(fetchPosts(userId));
    }, [dispatch, userId]);

    if (!posts.length) {
        return <LoadingSpinner />
    } 
    return (
        <ul className={style.posts_wrapper}>
            {
                posts.map(post => (
                    <Post post={post} key={post.id}/>
                ))
            }
        
        </ul>
    )
};

export default UserPosts;