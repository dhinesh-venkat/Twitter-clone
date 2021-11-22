import React, { useState, useEffect } from 'react'
import auth from '../authentication/auth'
import UserCard from '../components/user card/UserCard'
import { getFollowing } from '../services/followerService'
import { useNavigate } from 'react-router'

const Following = () => {

    const [following, setfollowing] = useState([])
    const navigate = useNavigate()

    const load = () => getFollowing().then((res) => {
        if (res.status === 200) {
            setfollowing(res.data)
        }
    }).catch((err) => {
        if (err.response.status === 401) {
            auth.logout(() => {
                navigate('/login')
            })
        }
    })

    useEffect(() => {
        load()
    // eslint-disable-next-line
    }, [])

    const removeFollowingFromUi = (id) => {
        setfollowing(prev => prev.filter((item) => item.id !== id))
    }

    const followersList = following.map((follower) =>
    <li key={follower.id} className="flex justify-center">
        <UserCard json={ follower } isFollower={false} unfollow={removeFollowingFromUi}/>
    </li>
)

    return (
        <div className="bg-black-dark flex-1">
            <div className="mt-14">
                <ul>{ followersList }</ul>
            </div>
        </div>
    )
}

export default Following
