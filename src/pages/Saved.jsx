import React, { useState, useEffect } from 'react'
import auth from '../authentication/auth'
import Tweet from '../components/tweet/Tweet'
import { useNavigate } from 'react-router'
import { getSavedTweets } from '../services/saveService'
import { getUser } from '../services/userService'

const Saved = () => {
    const [tweets, settweets] = useState([])
    const navigate = useNavigate()
    const [userId, setuserId] = useState("")


    const load = () => {
        getUser().then((res) => {
            if(res.status === 200) {
                setuserId(res.data.id)
            }
        })
        getSavedTweets().then((res) => {
            if (res.status === 200) {
                settweets(res.data)
            }
        }).catch((err) => {
            if (err.response.status === 401) {
                auth.logout(() => {
                    navigate('/login')
                })
            }
        })
    }

    useEffect(() => {
        load()
        // eslint-disable-next-line
    }, [])

    const tweetsList = tweets.map((tweet) =>
        <li key={tweet.tweetId} className="flex justify-center">
            <Tweet json={tweet} userId={userId}/>
        </li>
    )


    return (
        <div className="bg-black-dark flex-1">
            <div className="mt-14">
                <ul>{tweetsList}</ul>
            </div>
        </div>
    )
}

export default Saved
