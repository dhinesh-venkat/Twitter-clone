import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = ({ isActive, toggle }) => {

    const active = (isActive) => {
        const style = {
            backgroundColor: isActive ? "#49bafb" : "",
            color: isActive ? '#ffffff' : ""
        }

        return style
    }

    return (
            <div className={ `bg-black-medium z-40 w-64 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out ${isActive ? "" : "-translate-x-full"}` }>
                <div className="text-gray-50 font-bold text-3xl pt-3 px-6">
                    <a href="/">
                        Twitter
                    </a>
                </div>

                <nav className="px-3.5 text-white-primary text-xl space-y-2">
                    <NavLink onClick={ toggle } style={({ isActive }) => active(isActive)} className="menu-item" to="/tweets">Tweets</NavLink>
                    <NavLink onClick={ toggle } style={({ isActive }) => active(isActive)} className="menu-item" to="/followers">Followers</NavLink>
                    <NavLink onClick={ toggle } style={({ isActive }) => active(isActive)} className="menu-item" to="/saved">Saved</NavLink>
                    <NavLink onClick={ toggle } style={({ isActive }) => active(isActive)} className="menu-item" to="/profile">Profile</NavLink>
                </nav>

            </div>

    )
}

export default Sidebar
