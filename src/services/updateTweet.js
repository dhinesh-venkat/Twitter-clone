import Cookies from 'js-cookie'
import axios from './axios'

export const updateTweet = async (tweetId, content, isPublic) => {

    const url = '/tweets/update'
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: 'BEARER ' + token
        }
    }

    const data = {
        tweetId: tweetId,
        content: content,
        public: isPublic
    }

    return await axios.put(url, data, options)
}