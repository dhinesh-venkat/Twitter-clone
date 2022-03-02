import Cookies from 'js-cookie'
import axios from './axios'

export const postTweet = async (content) => {

    const url = 'dcapi/tweets/new'
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: token
        }
    }

    const data = {
        CONTENT: content
    }

    return await axios.post(url, data, options)
}