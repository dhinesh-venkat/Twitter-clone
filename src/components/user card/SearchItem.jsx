import { Avatar } from '@mui/material'
import React from 'react'

const SearchItem = ({ json }) => {
    let avatar = `https://avatars.dicebear.com/api/avataaars/${json.name}.svg`


    return (
        <div className="flex flex-row p-4  border border-opacity-50 w-full">
            <div className="space-x-6 flex flex-row items-center">
                
                <Avatar alt="ava" src={avatar} sx={{ width: 24, height: 24 }} />
                <div className="text-white text-lg">{json.name}</div>
                <div className="text-gray-400 text-lg">{json.name}</div>
            </div>



        </div>
    )
}

export default SearchItem
