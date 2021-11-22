import { Avatar } from '@mui/material'
import React from 'react'

const SearchItem = ({ json }) => {

    return (
        <div className="flex flex-row p-4  border border-opacity-50 w-full">
            <div className="space-x-6 flex flex-row items-center">
                
                <Avatar alt="ava" src={json.avatar} sx={{ width: 24, height: 24 }} />
                <div className="text-white text-lg">{json.displayName}</div>
                <div className="text-gray-400 text-lg">{json.username}</div>
            </div>



        </div>
    )
}

export default SearchItem
