import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Tweets from './Tweets'
import { getProfile,getFollowStatus } from '../services/profileService'
import { useNavigate } from 'react-router'
import auth from '../authentication/auth'
import { useLocation } from "react-router-dom";
import { getUserId } from '../authentication/getUserId'
import { followUser, unfollowUser } from '../services/followerService'

const UserProfile = () => {
    const { state } = useLocation();
    const userId = getUserId()
    const [user, setuser] = useState({
        userId: state.userId,
        username: state.username,
        displayName: state.displayName,
        avatar: state.avatar,
        tweets: []
    })
    const [showFollow, setshowFollow] = useState(null)
    const navigate = useNavigate()

    const loadStatus = () => getFollowStatus(state.userId).then((res) => {
        if (res.status === 200) {
            setshowFollow(false)
        }
        if(res.status === 204) {
            setshowFollow(true)
        }
    }).catch((err) => {
        if (err.response.status === 401) {
            auth.logout(() => {
                navigate('/login')
            })
        }
    })

    const handleUnfollow = () => {
        unfollowUser(state.userId).then((res) => {
            if(res.status === 200) {
                setshowFollow(true)
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }

    const handleFollow = () => {
        followUser(state.userId).then((res) => {
            if(res.status === 200) {
                setshowFollow(false)
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }

    const loadTweets = () => getProfile(state.userId).then((res) => {
        if (res.status === 200) {
            const data = res.data
            console.log(data);
            setuser({...user, tweets: data})
        }
    }).catch((err) => {
        if (err.response.status === 401) {
            auth.logout(() => {
                navigate('/login')
            })
        }
    })

    useEffect(() => {
        loadStatus()
        loadTweets()
    // eslint-disable-next-line
    }, [])

    return (
        <div className="bg-black-dark flex-1">
            <div className="flex p-6 bg-black-light w-full items-center justify-between mt-12">

                <div className="flex flex-col">
                    <div className="text-white text-3xl">{user.displayName}</div>
                    <div className="text-gray-400 text-3xl">{user.username}</div>
                </div>

                <div className=" rounded-full bg-black-medium">
                    <Avatar alt="ava" src={user.avatar} sx={{ width: 100, height: 100 }}/>
                </div>

                <div className="flex items-center space-x-2">
                    <button
                        onClick={ showFollow ? handleFollow : handleUnfollow } 
                        className={` ${state.userId === userId ? 'cursor-not-allowed' : ''} text-gray-200  hover:text-white transition-all duration-200 text-center py-1 px-2 ${showFollow ? 'bg-green-500 hover:bg-green-600': 'bg-pink-500 hover:bg-pink-600'}`}>
                        {showFollow ? 'Follow' : 'Unfollow'}
                    </button>
                </div>
            </div>
            <Tweets data={user.tweets}/>
        </div>
    )
}

export default UserProfile
