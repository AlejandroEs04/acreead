import { isAxiosError } from "axios";
import api from "../lib/axios";
import { Project } from "../types";

export async function getProjects() {
    try {
        const { data } = await api<Project[]>('/Project')
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}