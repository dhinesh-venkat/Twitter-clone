import Cookies from 'js-cookie'
import axios from './axios'

const token = Cookies.get('token')
let options = {
    headers: {
        Authorization: 'BEARER ' + token
    }
}

export const getMyAccount = async () => {

    const url = `/users`

    return await axios.get(url, options)

}

export const deleteAccount = async () => {

    const url = `/users/profile/delete`

    return await axios.delete(url, options)

}