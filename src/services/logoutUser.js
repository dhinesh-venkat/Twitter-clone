import Cookies from 'js-cookie'
import axios from './axios'

export const logoutUser = async () => {

    const url = '/logout'
    const token = Cookies.get('token')

    let options = {
        headers: {
            Authorization: 'BEARER ' + token
        }
    }

    return await axios.get(url, options)
}