import { Avatar } from '@mui/material'
import React from 'react'

const SearchItem = ({ json }) => {
    return (
        <div className="flex flex-row p-4 justify-between space-x-12 border border-opacity-50 w-full">
            <div className="space-x-6 flex flex-row items-center">
                <Avatar alt="ava" src={ json.avatar } sx={{ width: 24, height: 24 }}/>
                <div className="text-white text-lg">{ json.displayName }</div>
                <div className="text-gray-400 text-lg">{ json.username }</div>
            </div>

                <button className="bg-green-500 text-gray-200 hover:bg-green-600 hover:text-white transition-all duration-200 text-center py-1 px-2">
                    Follow
                </button>
                
        </div>
    )
}

export default SearchItem
