import React from 'react'

const Topbar = ({ onClick }) => {
    return (
        <div className="bg-black-medium z-30 text-gray-100 flex justify-start h-12 w-full fixed overflow-hidden items-center">
            
            <button onClick={ onClick } className="p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
            </button>

            <a href="/" className="text-gray-50 font-bold text-xl">
                Twitter
            </a>
        </div>
    )
}

export default Topbar
