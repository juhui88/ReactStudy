import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return(
    <div>
      <BrowserRouter>
          <ul>
            <li>
              <Link to = "/">홈</Link>
            </li>
            <li>
              <Link to = "/about">소개</Link>
            </li>
            <li>
              <Link to = "/profile/velopert">velopert 프로필</Link>
            </li>
            <li>
              <Link to = "/profile/gildong">gildong 프로필</Link>
            </li>
          </ul>
          <hr/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/profile/:username" element = {<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App;