import { isAxiosError } from "axios";
import api from "../lib/axios";
import { LoginFormRes, User, UserLogin, UserSignUp } from "../types";

export async function registerUser(user : UserSignUp) {
    try {
        await api.post<UserSignUp[]>('/User', user)
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data)
        }
    }
}

export async function getAuth() {
    try {
        const { data } = await api<User>('/Auth/GetAuth')
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data)
        }
    }
}

export async function login(user : UserLogin) {
    try {
        const { data } = await api.post<LoginFormRes>('/Auth', user)
        return data.token
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data)
        }
    }
}