import Cookies from 'js-cookie'
import axios from './axios'

export const postTweet = async (content, isPublic) => {

    const url = '/tweets/new'
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: 'BEARER ' + token
        }
    }

    const data = {
        content: content,
        public: isPublic
    }

    return await axios.post(url, data, options)
}