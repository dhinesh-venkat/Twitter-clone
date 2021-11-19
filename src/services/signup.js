import axios from './axios'

export const signupUser = async (username, displayName, password) => {

    const url = '/signup'

    const json = {
        avatar: `https://avatars.dicebear.com/api/avataaars/${username}.svg`,
        username: `@${username}`,
        displayName: displayName,
        password: password
    }

    return await axios.post(url, json)
}