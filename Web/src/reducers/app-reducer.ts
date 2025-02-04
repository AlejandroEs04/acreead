import { Alert, Project, Service, User } from "../types"

export type AppActions = 
    { type: 'set-services', payload: { services: Service[] } } |
    { type: 'set-alert', payload: { alert: Alert | null } } | 
    { type: 'reset-alert' } | 
    { type: 'set-auth', payload: { user: User } } | 
    { type: 'set-project', payload: { projects: Project[] } }

export type AppState = {
    services: Service[]
    alert: Alert | null
    user: User | null
    projects: Project[]
}

export const initialState : AppState = {
    services: [], 
    alert: null, 
    user: null, 
    projects: []
}



export const AppReducer = (
    state: AppState = initialState, 
    actions: AppActions
) => {
    if(actions.type === 'set-services') {
        return {
            ...state, 
            services: actions.payload.services
        }
    }
    if(actions.type === 'set-alert') {
        return {
            ...state, 
            alert: actions.payload.alert
        }
    }
    if(actions.type === 'reset-alert') {
        return {
            ...state, 
            alert: null
        }
    }
    if(actions.type === 'set-auth') {
        return {
            ...state, 
            user: actions.payload.user
        }
    }
    if(actions.type === 'set-project') {
        return {
            ...state, 
            projects: actions.payload.projects
        }
    }

    return state
}