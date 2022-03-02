import Cookies from 'js-cookie'
import axios from './axios'

export const getProfile = async (userId) => {

    const url = `dcapi/users/profile/${userId}`
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: token
        }
    }

    return await axios.get(url, options)
}

export const getFollowStatus = async (userId) => {

    const url = `dcapi/followers/follow/status/${userId}`
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: token
        }
    }

    return await axios.get(url, options)
}