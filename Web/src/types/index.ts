import { z } from 'zod'

export type PlanService = {
    planId: number
    serviceId: number 
    name: string
    description: string 
    price: number 
    startPrice: number
}

export type Service = {
    serviceId: number 
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
    projectId: number 
    name: string
    description: string 
    customerId: number
    url: string
    start_date: string
    end_date: string 
    statusId: string 
    active: boolean
    images: ProjectImage[]
}

export type ProjectImage = {
    projectId: number 
    imageUrl: string
}