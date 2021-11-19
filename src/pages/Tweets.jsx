import React, { useState, useEffect } from 'react'
import Tweet from '../components/tweet/Tweet'
import { getTweets } from '../services/getTweets'


const Tweets = () => {
    const [tweets, settweets] = useState([])

    useEffect(() => {
        getTweets().then((res) => {
            if (res.status === 200) {
                settweets(res.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [tweets])

    const tweetsList = tweets.map((tweet) =>
        <li key={tweet.tweetId} className="flex justify-center">
            <Tweet json={tweet} />
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

export default Tweets
