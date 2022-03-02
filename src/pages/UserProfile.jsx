import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Tweets from './Tweets'
import { getProfile, getFollowStatus } from '../services/profileService'
import { useNavigate } from 'react-router'
import auth from '../authentication/auth'
import { useLocation } from "react-router-dom";
import { followUser, unfollowUser } from '../services/followerService'
import { getUser } from '../services/userService'

const UserProfile = () => {
    const { state } = useLocation();
    const [userId, setuserId] = useState("")
    const [user, setuser] = useState({
        userId: state.id,
        username: state.name,
        displayName: state.name,
        avatar: `https://avatars.dicebear.com/api/avataaars/${state.name}.svg`,
        tweets: []
    })
    const [showFollow, setshowFollow] = useState(null)
    const navigate = useNavigate()

    const loadStatus = () => {
        getUser().then((res) => {
            if(res.status === 200) {
                setuserId(res.data.id)
            }
        })
        getFollowStatus(state.id).then((res) => {
            if (res.status === 200) {
                setshowFollow(false)
            }
            if (res.status === 204) {
                setshowFollow(true)
            }
        }).catch((err) => {
            if (err.response.status === 401) {
                auth.logout(() => {
                    navigate('/login')
                })
            }
        })
    }

    const handleUnfollow = () => {
        unfollowUser(state.id).then((res) => {
            if (res.status === 200) {
                setshowFollow(true)
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }

    const handleFollow = () => {
        followUser(state.id).then((res) => {
            if (res.status === 200) {
                setshowFollow(false)
            }
        }).catch((err) => {
            console.log(err.response);
        })
    }

    const loadTweets = () => getProfile(state.id).then((res) => {
        if (res.status === 200) {
            const data = res.data
            console.log(data);
            setuser({ ...user, tweets: data })
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
                    <div className="text-white text-3xl">{state.name}</div>
                    <div className="text-gray-400 text-3xl">{state.name}</div>
                </div>

                <div className=" rounded-full bg-black-medium">
                    <Avatar alt="ava" src={user.avatar} sx={{ width: 100, height: 100 }} />
                </div>

                <div className="flex items-center space-x-2">
                    <button
                        onClick={showFollow ? handleFollow : handleUnfollow}
                        className={` ${state.id === userId ? 'cursor-not-allowed' : ''} text-gray-200  hover:text-white transition-all duration-200 text-center py-1 px-2 ${showFollow ? 'bg-green-500 hover:bg-green-600' : 'bg-pink-500 hover:bg-pink-600'}`}>
                        {showFollow ? 'Follow' : 'Unfollow'}
                    </button>
                </div>
            </div>
            <Tweets data={user.tweets} />
        </div>
    )
}

export default UserProfile
