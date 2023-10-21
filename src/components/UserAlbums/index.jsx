import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../store/actionCreators";
import Album from "./Album";
import style from "./UserAlbums.module.css";
import LoadingSpinner from "../../ui/LoadingSpinner";

const UserAlbums = () => {
    const albums = useSelector(state => state.albums);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.activeUser);

    useEffect(() => {
        dispatch(fetchAlbums(userId));
    }, [dispatch, userId]);

    if (!albums.length) {
        return <LoadingSpinner />
    } 
    return (
        <ul className={style.albums_wrapper}>
            {
                albums.map(album => (
                    <Album album={album} key={album.id}/>
                ))
            }
        
        </ul>
    )
};

export default UserAlbums;