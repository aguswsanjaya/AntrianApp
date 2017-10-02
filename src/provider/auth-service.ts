import * as model from "../model/model"

export class AuthService{

    private _isLoggedIn = false;

    login(user: model.User){
        this._isLoggedIn = true;
    }

    logout(){
        this._isLoggedIn = false;
    }

    isLoggedIn(){
        return this._isLoggedIn;
    }
}