import { z } from 'zod'

export type PlanService = {
    plan_id: number
    service_id: number 
    name: string
    description: string 
    price: number 
    startPrice: number
}

export type Service = {
    service_id: number 
    name: string
    description: string 
    plans: PlanService[]
}

export type Link = {
    pathname: string 
    name: string
}

export type Alert = {
    type: 'error' | 'info' | 'success'
    message: string
}

export type UserSignUp = {
    name: string 
    lastName: string
    email: string 
    password: string
    repeatPassword: string
}

export type UserLogin = {
    email: string 
    password: string
}

export type User = {
    name: string
    lastName: string 
    email: string
    phoneNumber?: string 
}

export const LoginFormRes = z.object({
    token: z.string()
})

export type LoginFormRes = z.infer<typeof LoginFormRes>

export type ContractEmail = {
    name: string
    lastName: string 
    email: string
    phoneNumber?: string 
    company?: string 
    meetingDate?: string
}

export type Project = {
    project_id: number 
    name: string
    description: string 
    customer_id: number
    url: string
    start_date: string
    end_date: string 
    status_id: string 
    active: boolean
    images: ProjectImage[]
}

export type ProjectImage = {
    project_id: number 
    image_url: string
}