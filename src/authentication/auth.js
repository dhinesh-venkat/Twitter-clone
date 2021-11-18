class Auth {

    constructor() {
        this.authed = false
    }

    login(cb) {
        this.authed = true
        cb()
    }

    logout(cb) {
        this.authed = false
        cb()
    }

    isAuthenticated() {
        return this.authed
    }
}

export default new Auth()