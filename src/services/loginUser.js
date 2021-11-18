import axios from './axios'

export const login = async (username, password) => {

    const url = '/login'

    const json = {
        username: username,
        password: password
    }

    return await axios.post(url, json)
}