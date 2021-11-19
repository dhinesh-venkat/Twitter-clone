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
import Following from './pages/Following';
import Search from './pages/Search';
import UserProfile from './pages/UserProfile';
import LandingPage from './pages/LandingPage';
import {ProtectedRoute} from './authentication/ProtectedRoute'
import { ProtectedLogin } from './authentication/ProtectedLogin'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="login" element={<ProtectedLogin><Login /></ProtectedLogin>} />

        <Route path="/app" 
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            } >

          <Route path="tweets" element={<Tweets />} />

          <Route path="tweets/:tweetId" element={<Replies />} />

          <Route path="followers" element={<Followers />} />

          <Route path="following" element={<Following />} />

          <Route path="saved" element={<Saved />} />

          <Route path="saved/:tweetId" element={<Replies />} />

          <Route path="profile" element={<Profile />} />

          <Route path="profile/tweets" element={<UserProfile />} />

          <Route path="search" element={<Search />} />


        </Route>

      </Routes>

    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
