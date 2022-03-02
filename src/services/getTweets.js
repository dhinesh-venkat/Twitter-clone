import Cookies from 'js-cookie'
import axios from './axios'

export const getTweets = async () => {

    const url = '/dcapi/tweets/all'
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: token
        }
    }

    return await axios.get(url, options)
}