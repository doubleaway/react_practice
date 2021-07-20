import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import PostListPage from './page/PostListPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import WritePage from './page/WritePage';
import PostPage from './page/PostPage';
function App() {
  return (
    <>
    <Route component={PostListPage} path={['/@:username',"/"]}exact/>
    <Route component={LoginPage}  path="/login" exact/>
    <Route component={RegisterPage}  path="/register" exact/>
    <Route component={WritePage} path="/write"exact/>
    <Route component={PostPage} path="/@:username:PostId" exact/>
   </>
  );
}

export default App;
