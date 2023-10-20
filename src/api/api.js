const serverUrl = "https://jsonplaceholder.typicode.com/";

const getUsers = async () => {
    const response = await fetch(serverUrl + "users");
    const users = await response.json();
    return users;
};

const getPosts = async (userId) => {
    const response = await fetch(serverUrl + "posts?userId=" + userId);
    const posts = await response.json();
    return posts;
};

const getComments = async (postId) => {
    const response = await fetch(serverUrl + "posts/" + postId + "/comments");
    const comments = await response.json();
    return comments;
};

const getTodos = async (userId) => {
    const response = await fetch(serverUrl + "todos?userId=" + userId);
    const todos = await response.json();
    return todos;
};

const getAlbums = async (userId) => {
    const response = await fetch(serverUrl + "albums?userId=" + userId);
    const albums = await response.json();
    return albums;
};

const getPhotos = async (albumId) => {
    const response = await fetch(serverUrl + "albums/" + albumId + "/photos");
    const photos = await response.json();
    return photos;
};


export { getUsers, getPosts, getComments, getTodos, getAlbums, getPhotos };