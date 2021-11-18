import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

    const navigate = useNavigate()

    function handleLaunch() {
        navigate('login')
    }

    return (
        <div className="bg-black-dark min-h-screen min-w-screen flex justify-center items-center">
            <div className="flex flex-col items-center space-y-8">
                <div className="text-white text-3xl m-auto">Welcome to Twitter clone🦢</div>
                <button
                    onClick={ handleLaunch } 
                    className="bg-green-400 text-white p-3 w-1/3">Launch🚀</button>
            </div>
            
        </div>
    )
}

export default LandingPage
