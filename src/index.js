import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Tweets from './pages/Tweets';
import Followers from './pages/Followers';
import Login from './pages/Login'
import Replies from './pages/Replies';
import Saved from './pages/Saved';
import Profile from './pages/Profile';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<App />} >

          <Route path="login" element={<Login />} />

          <Route path="tweets" element={<Tweets />} />
          
          <Route path="tweets/:tweetId" element={<Replies />} />

          <Route path="followers" element={<Followers />} />

          <Route path="saved" element={<Saved />} />

          <Route path="saved/:tweetId" element={<Replies />} />

          <Route path="profile" element={<Profile />} />


        </Route>

      </Routes>

    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
