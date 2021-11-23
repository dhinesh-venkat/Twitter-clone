import Cookies from "js-cookie"
import jwt_decode from "jwt-decode";

const token = Cookies.get('token')

export function getUserId() {
    if(token) {
        const data = jwt_decode(token)
        return data.jti
    }
}