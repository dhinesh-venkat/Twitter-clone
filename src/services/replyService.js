import Cookies from 'js-cookie'
import axios from './axios'

const token = Cookies.get('token')
let options = {
    headers: {
        Authorization: 'BEARER ' + token
    }
}

export const getReplies = async (id) => {

    const url = `/tweets/${id}/replies`

    return await axios.get(url, options)

}

export const newReply = async (tweetId, content) => {

    const url = `/tweets/replies/new`

    const data = {
        tweetId: tweetId,
        content: content,
    }

    return await axios.post(url, data, options)

}

export const updateReply = async (id, content) => {

    const url = `/tweets/replies/update`

    const data = {
        id: id,
        content: content,
    }

    return await axios.put(url, data, options)

}

export const deleteReply = async (id) => {

    const url = `/tweets/replies/delete/${id}`

    return await axios.delete(url, options)

}