import Cookies from 'js-cookie'
import axios from './axios'

const token = Cookies.get('token')
let options = {
    headers: {
        Authorization: token
    }
}

export const getFollowers = async () => {

    const url = `dcapi/followers/all`

    return await axios.get(url, options)

}

export const removeFollower = async (id) => {

    const url = `dcapi/followers/remove/${id}`

    return await axios.delete(url, options)

}

export const getFollowing = async () => {

    const url = `dcapi/users/following`

    return await axios.get(url, options)

}

export const followUser = async (userId) => {

    const url = `dcapi/users/follow/${userId}`

    return await axios.post(url, {}, options)

}


export const unfollowUser = async (id) => {

    const url = `dcapi/users/unfollow/${id}`

    return await axios.delete(url, options)

}

export const searchUser = async (keyword) => {

    const url = `dcapi/users/search/${keyword}`

    return await axios.get(url, options)

}