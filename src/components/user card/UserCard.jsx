import { Avatar } from '@mui/material'
import React from 'react'
import { removeFollower, unfollowUser } from '../../services/followerService'

const UserCard = ({ json, isFollower, remove, unfollow }) => {

    const handleRemove = () => {
        removeFollower(json.id).then((res) => {
            if(res.status === 200) {
                remove(json.id)
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }

    const handleUnfollow = () => {
        unfollowUser(json.id).then((res) => {
            if(res.status === 200) {
                unfollow(json.id)
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }

    return (
        <div className="flex flex-row p-4 justify-between space-x-12 border border-opacity-50 w-1/3">
            <div className="space-x-6 flex flex-row items-center">
                <Avatar alt="ava" src={json.followedBy.avatar} sx={{ width: 24, height: 24 }} />
                <div className="text-white-primary text-lg">{json.followedBy.displayName}</div>
            </div>
            <button
                onClick={isFollower ? handleRemove : handleUnfollow} 
                className="bg-pink-500 text-gray-200 hover:bg-pink-600 hover:text-white transition-all duration-200 text-center py-1 px-2">
                {isFollower ? 'Unfollow' : 'Remove'}
            </button>
        </div>
    )
}

export default UserCard
