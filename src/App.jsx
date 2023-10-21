import { useSelector } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar';
import UserList from './components/UserList';
import UserDetails from "./components/UserDetails";
import UserPosts from "./components/UserPosts";
import UserTodos from "./components/UserTodos";
import UserAlbums from "./components/UserAlbums";

function App() {

  const activeUser = useSelector(state => state.activeUser);
  const activeTab = useSelector(state => state.activeTab);

  const ActiveTabContent = activeTab === "user" ? <UserDetails /> 
    : activeTab === "posts" ? <UserPosts /> 
    : activeTab === "todos" ? <UserTodos /> 
    : <UserAlbums />;

  return (
    <>
      <NavBar />
      <div className="main_screen">
        <UserList />
        {activeUser !== null ? ActiveTabContent : <p className="choose_user">Choose the user!</p> }

      </div>
    </>
    
  );
}

export default App;
