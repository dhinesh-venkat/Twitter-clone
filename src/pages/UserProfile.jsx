import { Avatar } from '@mui/material'
import React from 'react'
import Tweets from './Tweets'

const UserProfile = () => {
    return (
        <div className="bg-black-dark flex-1">
            <div className="flex p-6 bg-black-light w-full items-center justify-between mt-12">

                <div className="flex flex-col">
                    <div className="text-white text-3xl">dhinesh</div>
                    <div className="text-gray-400 text-3xl">@dhinesh</div>
                </div>

                <div className=" rounded-full bg-black-medium">
                    <Avatar alt="ava" src="https://avatars.dicebear.com/api/avataaars/elonmusk.svg" sx={{ width: 100, height: 100 }}/>
                </div>

                <div className="flex items-center space-x-2">
                    <button className="bg-green-500 text-gray-200 hover:bg-green-600 hover:text-white transition-all duration-200 text-center py-1 px-2">
                        Follow
                    </button>
                    <button className="bg-pink-500 text-gray-200 hover:bg-pink-600 hover:text-white transition-all duration-200 text-center py-1 px-2">
                        Unfollow
                    </button>
                </div>
            </div>
            <Tweets />
        </div>
    )
}

export default UserProfile
