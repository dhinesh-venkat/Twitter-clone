import Cookies from "js-cookie"

class Auth {

    constructor() {
        try{
            this.token = Cookies.get('token')
            this.authed = true
        }catch(err) {
            console.log(err.message);
            this.authed = false
        }
        
    }

    login(cb) {
        this.authed = true
        cb()
    }

    logout(cb) {
        Cookies.remove('token')
        this.authed = false
        cb()
    }

    isAuthenticated() {
        return this.authed
    }
}

export default new Auth()