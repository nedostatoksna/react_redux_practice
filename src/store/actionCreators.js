import { getPosts, getUsers, getComments, getTodos, getAlbums, getPhotos } from "../api/api";
import { CHANGE_TAB, UPD_USERS, CHOOSE_USER, UPD_POSTS, UPD_COMMENTS, UPD_TODOS, UPD_ALBUMS, UPD_PHOTOS } from "./actions";

const changeTab = (activeTab) => ({
    type: CHANGE_TAB,
    payload: { activeTab }
});

const updUsers = (users) => ({
    type: UPD_USERS,
    payload: { users }
});

const chooseUser = (id) => ({
    type: CHOOSE_USER,
    payload: { id }
});

const updPosts = (posts) => ({
    type: UPD_POSTS,
    payload: { posts }
});

const updComments = (comments, postId) => ({
    type: UPD_COMMENTS,
    payload: { comments, postId }
});

const updTodos = (todos, userId) => ({
    type: UPD_TODOS,
    payload: { todos }
});

const updAlbums = (albums) => ({
    type: UPD_ALBUMS,
    payload: { albums }
});

const updPhotos = (photos, albumId) => ({
    type: UPD_PHOTOS,
    payload: { photos, albumId }
});

const fetchUsers = () => {
    return async function (dispatch) {
        const users = await getUsers();
        dispatch(updUsers(users));
    }
};

const fetchPosts = (userId) => {
    return async function (dispatch) {
        const posts = await getPosts(userId);
        dispatch(updPosts(posts));
    }
};

const fetchComments = (postId) => {
    return async function (dispatch) {
        const comments = await getComments(postId);
        dispatch(updComments(comments, postId));
    }
};

const fetchTodos = (userId) => {
    return async function (dispatch) {
        const todos = await getTodos(userId);
        dispatch(updTodos(todos));
    }
};
const fetchAlbums = (userId) => {
    return async function (dispatch) {
        const albums = await getAlbums(userId);
        dispatch(updAlbums(albums));
    }
};

const fetchPhotos = (albumId) => {
    return async function (dispatch) {
        const photos = await getPhotos(albumId);
        dispatch(updPhotos(photos, albumId));
    }
};

export { changeTab, fetchUsers, chooseUser, fetchPosts, fetchComments, fetchTodos, fetchAlbums, fetchPhotos };