import axios from './axios'

export const login = async (username, password) => {

    const url = '/api/1.3/desktop/authentication'

    const params = {
        username: username,
        password: password,
        auth_type: 'local_authentication'
    }

    return await axios.get(url, {params})
}