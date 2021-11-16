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
        <div className="h-full fixed">
            <div className={`bg-black-medium w-64 z-40 justify-around flex flex-col absolute inset-y-0 left-0 transform transition-all duration-400 ${isActive ? "" : "-translate-x-full"}`}>

              

                <nav className="px-3.5 text-white-primary text-xl space-y-2 ">
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/tweets">Tweets</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/followers">Followers</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/following">Following</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/saved">Saved</NavLink>
                    <NavLink onClick={toggle} style={({ isActive }) => active(isActive)} className="menu-item" to="/profile">Profile</NavLink>
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
