import Cookies from 'js-cookie'
import axios from './axios'

const token = Cookies.get('token')
let options = {
    headers: {
        Authorization: token
    }
}

export const getUser = async () => {

    const url = `/dcapi/users/user`

    return await axios.get(url, options)

}