import React, { useState, useEffect } from 'react'
import UserCard from '../components/user card/UserCard'
import { useNavigate } from 'react-router-dom'
import { getFollowers } from '../services/followerService'
import auth from '../authentication/auth'


const Followers = () => {

    const [followers, setfollowers] = useState([])
    const navigate = useNavigate()

    const load = () => getFollowers().then((res) => {
        if (res.status === 200) {
            setfollowers(res.data)
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

    const removeFollowerFromUi = (id) => {
        setfollowers(prev => prev.filter((item) => item.id !== id))
    }


    const followersList = followers.map((follower) =>
    <li key={follower.id} className="flex justify-center">
        <UserCard json={ follower } isFollower={true} remove={removeFollowerFromUi}/>
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

export default Followers
