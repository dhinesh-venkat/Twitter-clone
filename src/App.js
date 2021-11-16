// import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import CreateTweet from './components/tweet/CreateTweet';
import './index.css'


function App() {
  const [showSidebar, setshowSidebar] = useState(false)
  const [showModal, setshowModal] = useState(false)

  const toggleSidebar = () => {
    setshowSidebar(!showSidebar)
  }

  const toggleModal = () => {
    setshowModal(!showModal)
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
      <Topbar onClick={ toggleSidebar } isActive={ showSidebar } />
      <Sidebar isActive={ showSidebar } toggle={ toggleSidebar } toggleModal={ toggleModal }/>
      { showModal ? <CreateTweet show={true} toggleModal={ toggleModal }/> : ''}
      <Outlet />
    </div>
  );
}

export default App;
