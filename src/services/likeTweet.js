import Cookies from 'js-cookie'
import axios from './axios'

export const likeTweet = async (tweetId) => {

    const url = `/tweets/like/${tweetId}`
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: 'BEARER ' + token
        }
    }

    return await axios.post(url,{}, options)
}