import React from 'react'
import UserCard from '../components/user card/UserCard'
import { getFollowers } from '../followers'

const Following = () => {

    const data = getFollowers()

    const followersList = data.map((follower) =>
    <li key={follower.id} className="flex justify-center">
        <UserCard json={ follower } buttonText='Unfollow'/>
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
