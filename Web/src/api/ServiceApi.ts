import { isAxiosError } from "axios";
import api from "../lib/axios";
import { Service } from "../types";

export async function getServices() {
    try {
        const { data } = await api<Service[]>('/Service')
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}