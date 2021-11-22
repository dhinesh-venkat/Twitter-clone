import Cookies from 'js-cookie'
import axios from './axios'

export const dislikeTweet = async (tweetId) => {

    const url = `/tweets/dislike/${tweetId}`
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: 'BEARER ' + token
        }
    }

    return await axios.delete(url, options)
}