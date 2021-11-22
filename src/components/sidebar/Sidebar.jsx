import {React, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Sidebar = ({ isActive, toggle, toggleModal }) => {
    
    const navigate = useNavigate()
    const [searchContent, setsearchContent] = useState("")
    const active = (isActive) => {
        const style = {
            backgroundColor: isActive ? "#49bafb" : "",
            color: isActive ? '#ffffff' : ""
        }

        return style
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log(searchContent)
          toggle()
          navigate('search', {state: searchContent})
        }
      }


    return (
        <div className="h-full fixed">
            <div className={`bg-black-medium w-64 z-40 justify-around flex flex-col absolute inset-y-0 left-0 transform transition-all duration-400 ${isActive ? "" : "-translate-x-full"}`}>
                <nav className="px-3.5 text-white-primary text-xl space-y-2 ">
                    <input 
                        type="search"
                        value={ searchContent } 
                        placeholder="Search"
                        onChange={ (e) => setsearchContent(e.target.value) }
                        onKeyDown={ handleKeyDown}
                        className="bg-black-light text-gray-400 px-2.5 py-3 w-full outline-none" />
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/app/tweets">Tweets</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/app/followers">Followers</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/app/following">Following</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/app/saved">Saved</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/app/profile">Profile</NavLink>
                </nav>



                <button
                    onClick={toggleModal}
                    className="text-gray-100 hover:text-white transition duration-200 rounded text-xl flex justify-center bg-green-400 hover:bg-green-500 p-2 mx-4">
                    Tweet
                </button>

            </div>
        </div>


    )
}

export default Sidebar
