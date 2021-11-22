import Cookies from "js-cookie"
import jwt_decode from "jwt-decode";

const token = Cookies.get('token')
const data = jwt_decode(token)

export function getUserId() {
    return data.jti
}