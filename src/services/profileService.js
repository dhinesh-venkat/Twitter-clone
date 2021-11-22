import Cookies from 'js-cookie'
import axios from './axios'

export const getProfile = async (userId) => {

    const url = `/users/profile/${userId}`
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: 'BEARER ' + token
        }
    }

    return await axios.get(url, options)
}

export const getFollowStatus = async (userId) => {

    const url = `/followers/follow/status/${userId}`
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: 'BEARER ' + token
        }
    }

    return await axios.get(url, options)
}