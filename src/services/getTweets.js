import Cookies from 'js-cookie'
import axios from './axios'

export const getTweets = async () => {

    const url = '/tweets'
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: 'BEARER ' + token
        }
    }

    return await axios.get(url, options)
}