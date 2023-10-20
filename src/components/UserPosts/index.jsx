import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/actionCreators";
import Post from "./Post";

const UserPosts = () => {

    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.activeUser);
    console.log(posts.comments);

    useEffect(() => {
        dispatch(fetchPosts(userId));
    }, [dispatch, userId]);

    if (!posts.length) {
        return <h1>Loading...</h1>
    } 
    return (
        <ul>
            {
                posts.map(post => (
                    <Post post={post} key={post.id}/>
                ))
            }
        
        </ul>
    )
};

export default UserPosts;