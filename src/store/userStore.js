import { makeAutoObservable } from "mobx"

class UserStore {
    _user = []
    _loggedIn = false
    constructor() {
        makeAutoObservable(this)
    }

    setUser(user) {
        this._user = user
    }

    getUser() {
        return this._user
    }

    setLoggedIn(loggedIn){
        this._loggedIn = loggedIn
    }

    get loggedIn() {
        return this._loggedIn
    }
}

export default UserStore