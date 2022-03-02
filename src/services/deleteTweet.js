import Cookies from 'js-cookie'
import axios from './axios'

export const deleteTweet = async (id) => {

    const url = `dcapi/tweets/delete/${id}`
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: token
        }
    }

    return await axios.delete(url, options)
}