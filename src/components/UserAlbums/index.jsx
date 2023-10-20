import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../store/actionCreators";
import Album from "./Album";

const UserAlbums = () => {
    const albums = useSelector(state => state.albums);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.activeUser);

    useEffect(() => {
        dispatch(fetchAlbums(userId));
    }, [dispatch, userId]);

    if (!albums.length) {
        return <h1>Loading...</h1>
    } 
    return (
        <ul>
            {
                albums.map(album => (
                    <Album album={album} key={album.id}/>
                ))
            }
        
        </ul>
    )
};

export default UserAlbums;