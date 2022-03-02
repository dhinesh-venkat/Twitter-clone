import Cookies from "js-cookie"
import { getUser } from '../services/userService'

const token = Cookies.get('token')

export function getUserId() {
    if(token) {
        const userId = getUser().then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                return res.data.id
            }
        }).catch((err) => {
            console.log(err)
            if (err.response.status === 401) {
                // auth.logout(() => {
                //     navigate('/login')
                // })
            }
        })
        return userId
    }
}