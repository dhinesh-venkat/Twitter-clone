import React from 'react'
import Tweet from '../components/tweet/Tweet'
import { getTweets } from '../tweets'

const Saved = () => {
    const data = getTweets()

    const tweetsList = data.map((tweet) =>
        <li key={tweet.tweetId} className="flex justify-center">
            <Tweet json={ tweet }/>
        </li>
    )


    return (
        <div className="bg-black-dark flex-1">
            <div className="mt-14">
                <ul>{ tweetsList }</ul>
            </div>
        </div>
    )
}

export default Saved
