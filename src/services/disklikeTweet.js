import Cookies from 'js-cookie'
import axios from './axios'

export const dislikeTweet = async (tweetId) => {

    const url = `dcapi/tweets/dislike/${tweetId}`
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: token
        }
    }

    return await axios.delete(url, options)
}