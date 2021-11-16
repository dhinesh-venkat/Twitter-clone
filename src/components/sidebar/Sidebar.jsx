import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = ({ isActive, toggle, toggleModal }) => {

    const active = (isActive) => {
        const style = {
            backgroundColor: isActive ? "#49bafb" : "",
            color: isActive ? '#ffffff' : ""
        }

        return style
    }

    return (
        <div className={`bg-black-medium z-40 w-64 justify-around flex flex-col absolute inset-y-0 left-0 transform transition-all duration-400 ${isActive ? "" : "-translate-x-full"}`}>
            
                <div className="flex flex-row items-center justify-between text-gray-50 font-bold text-xl pt-3 px-6">
                    Twitter
                    <button onClick={toggle} className="text-gray-300 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                <nav className="px-3.5 text-white-primary text-xl space-y-2 ">
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/tweets">Tweets</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/followers">Followers</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/following">Following</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/saved">Saved</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/profile">Profile</NavLink>
                </nav>
            
            

            <button
                onClick={ toggleModal } 
                className="text-gray-100 hover:text-white transition duration-200 rounded text-xl flex justify-center bg-green-400 hover:bg-green-500 p-2 mx-4">
                    Tweet
            </button>

        </div>

    )
}

export default Sidebar
