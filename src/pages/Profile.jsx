import { Avatar } from '@mui/material'
import React from 'react'

const Profile = () => {
    return (
        <div className="bg-black-dark flex-1 flex justify-center items-center">
            <div className="bg-black-medium flex flex-col justify-center items-center h-1/3 w-1/3 space-y-12 p-5">
                <div className=" rounded-full bg-black-light">
                    <Avatar alt="ava" src="https://avatars.dicebear.com/api/avataaars/elonmusk.svg" sx={{ width: 100, height: 100 }}/>
                </div>

                <div className="text-white text-3xl">Username : @dhinesh</div>
                <div className="text-white text-3xl">Display Name : dhinesh</div>

                <div className="flex flex-row space-x-9">
                    <button className="border border-pink-500 hover:border-pink-600 hover:text-pink-600 transition-all duration-200 text-pink-500 font-bold text-center p-3 break-normal w-24 leading-4">DELETE ACCOUNT</button>
                    <button className="bg-pink-500 text-gray-200 hover:bg-pink-600 hover:text-white transition-all duration-200 font-bold text-center p-3 ">LOG OUT</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
