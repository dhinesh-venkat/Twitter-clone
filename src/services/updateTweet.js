import Cookies from 'js-cookie'
import axios from './axios'

export const updateTweet = async (tweetId, content) => {

    const url = 'dcapi/tweets/update'
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: token
        }
    }

    const data = {
        TWEET_ID: tweetId,
        CONTENT: content,
    }

    return await axios.put(url, data, options)
}