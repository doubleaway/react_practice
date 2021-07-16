import logo from './logo.svg';
import './App.css';
import React, { Profiler } from "react";
import {Route,Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import HistorySample from './components/HistorySample';

const App=()=>{
  return(
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">김민준의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">길동의 프로필</Link>
        </li>
        <li>
          <Link to="/history">히스토리 예제</Link>
        </li>
      </ul>
      <hr/>
      <Route path="/" component={Home} exact={true}/>
      <Route path={['/about','/info']} component={About}/>
      <Route path="/profile/:username" component={Profile}/>
      <Route path="/profile/:username" component={HistorySample}/>
      <Route path="/history" component={HistorySample}/>
    </div>
  )
}

export default App;
