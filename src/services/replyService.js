import Cookies from 'js-cookie'
import axios from './axios'

const token = Cookies.get('token')
let options = {
    headers: {
        Authorization: token
    }
}

export const getReplies = async (id) => {

    const url = `dcapi/tweets/${id}/replies`

    return await axios.get(url, options)

}

export const newReply = async (tweetId, content) => {

    const url = `dcapi/tweets/replies/new`

    const data = {
        TWEET_ID: tweetId,
        CONTENT: content,
    }

    return await axios.post(url, data, options)

}

export const updateReply = async (id, content) => {

    const url = `dcapi/tweets/replies/update`

    const data = {
        ID: id,
        CONTENT: content,
    }

    return await axios.put(url, data, options)

}

export const deleteReply = async (id) => {

    const url = `dcapi/tweets/replies/delete/${id}`

    return await axios.delete(url, options)

}