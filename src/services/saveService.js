import Cookies from 'js-cookie'
import axios from './axios'

const token = Cookies.get('token')
let options = {
    headers: {
        Authorization: 'BEARER ' + token
    }
}

export const saveTweet = async (id) => {

    const url = `/tweets/save/${id}`

    return await axios.post(url,{}, options)

}

export const unsaveTweet = async (id) => {

    const url = `/tweets/unsave/${id}`

    return await axios.delete(url, options)

}

export const getSavedTweets = async () => {

    const url = `/tweets/saved`

    return await axios.get(url, options)

}