import Cookies from 'js-cookie'
import axios from './axios'

const token = Cookies.get('token')
let options = {
    headers: {
        Authorization: 'BEARER ' + token
    }
}

export const getFollowers = async () => {

    const url = `/followers`

    return await axios.get(url, options)

}

export const removeFollower = async (id) => {

    const url = `/followers/remove/${id}`

    return await axios.delete(url, options)

}

export const getFollowing = async () => {

    const url = `/users/following`

    return await axios.get(url, options)

}


export const unfollowUser = async (id) => {

    const url = `/users/unfollow/${id}`

    return await axios.delete(url, options)

}

export const searchUser = async (keyword) => {

    const url = `/users/search/${keyword}`

    return await axios.get(url, options)

}