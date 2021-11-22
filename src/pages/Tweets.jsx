import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import auth from '../authentication/auth'
import Tweet from '../components/tweet/Tweet'
import { getTweets } from '../services/getTweets'


const Tweets = ({ data }) => {
    const [tweets, settweets] = useState([])
    const navigate = useNavigate()

    const load = () => {
        if(data === undefined) {
            getTweets().then((res) => {
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
        } else {
            settweets(data)
        }
    }

    useEffect(() => {
        load()
        // eslint-disable-next-line
    }, [data])




    const deleteItem = (tweetId) => {
        settweets(prev => prev.filter((item) => item.tweetId !== tweetId))
    }

    const tweetsList = tweets.map((tweet) =>
        <li key={tweet.tweetId} className="flex justify-center">
            <Tweet json={tweet} deleteItem={deleteItem} />
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
