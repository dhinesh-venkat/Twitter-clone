import React from 'react'
import UserCard from '../components/user card/UserCard'
import { getFollowers } from '../followers'

const Followers = () => {

    const data = getFollowers()

    const followersList = data.map((follower) =>
    <li key={follower.id} className="flex justify-center">
        <UserCard json={ follower } buttonText='Remove'/>
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
