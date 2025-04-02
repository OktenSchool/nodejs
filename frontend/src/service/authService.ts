import {IAuth} from "../interfaces/authInterface";
import {IUser} from "../interfaces/userInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {ITokens} from "../interfaces/tokensInterface";
import {IRes} from "../types/respType";
const _accessToken = 'accessToken'
const _refreshToken = 'refreshToken'
const authService = {
    register(user:IAuth):IRes<IUser>{
        return authService.register(user);
    },

    async login(user:IAuth):Promise<IUser>{
        const {data} = await apiService.post<ITokens>(urls.auth.login, user);
        this.setTokens(data)
        const {data:me} = await this.me();
        return me
    },

    setTokens({tokens:{accessToken,refreshToken}} :ITokens):void{
        localStorage.setItem(_accessToken, accessToken)
        localStorage.setItem(_refreshToken, refreshToken)
    },

    me():IRes<IUser>{
        return apiService.get(urls.auth.me)
    },

    getAccessToken():string{
        return localStorage.getItem(_accessToken)||''
    },

    getRefreshToken():string{
        return localStorage.getItem(_refreshToken)||''
    }
}

export {
    authService
}