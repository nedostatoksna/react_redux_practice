const serverUrl = "https://jsonplaceholder.typicode.com/";

const getUsers = async () => {
    const response = await fetch(serverUrl + "users");
    const users = await response.json();
    return users;
};

export { getUsers };