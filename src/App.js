// import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './index.css'


function App() {
  const [showSidebar, setshowSidebar] = useState(false)

  const toggleSidebar = () => {
    setshowSidebar(!showSidebar)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/tweets">Tweets</Link> |{" "}
        <Link to="/followers">Followers</Link>
      </nav>
      <Outlet /> */}
      <Topbar onClick={ toggleSidebar }/>
      <Sidebar isActive={ showSidebar } toggle={ toggleSidebar }/>
      <Outlet />
    </div>
  );
}

export default App;
