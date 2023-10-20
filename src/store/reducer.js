import { CHANGE_TAB, CHOOSE_USER, UPD_ALBUMS, UPD_COMMENTS, UPD_PHOTOS, UPD_POSTS, UPD_TODOS, UPD_USERS } from "./actions";
import initialState from "./initialState";

const reducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case CHANGE_TAB: return {
            ...state, activeTab: payload.activeTab
        }
        case UPD_USERS: return {
            ...state, users: payload.users
        }
        case CHOOSE_USER: return {
            ...state, activeUser: payload.id
        }
        case UPD_POSTS: return {
            ...state, posts: payload.posts
        }
        case UPD_COMMENTS: return {
            ...state, posts: state.posts.map(post => {
                if (post.id === payload.postId) {
                    return {...post, comments: payload.comments}
                } 
                return {...post}
            })
        }
        case UPD_TODOS: return {
            ...state, todos: payload.todos
        }
        case UPD_ALBUMS: return {
            ...state, albums:payload.albums
        }
        case UPD_PHOTOS: return {
            ...state, albums: state.albums.map(album => {
                if (album.id === payload.albumId) {
                    return {...album, photos: payload.photos}
                } 
                return {...album}
            })
        }
            
        default: return state;

    }
};
export default reducer;