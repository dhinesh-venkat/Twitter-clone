import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Tweets from './pages/Tweets';
import Followers from './pages/Followers';
import Login from './pages/Login'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} > 
          <Route path="login" element={<Login />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="followers" element={<Followers />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
