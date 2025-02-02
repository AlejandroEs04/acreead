import { createContext, Dispatch, ReactNode, useReducer, useEffect } from "react";
import { AppActions, AppReducer, AppState, initialState } from "../reducers/app-reducer";
import { getServices } from "../api/ServiceApi";
import { User, UserLogin, UserSignUp } from "../types";
import { getAuth, login, registerUser } from "../api/AuthApi";
import { useNavigate } from "react-router-dom";

type AppContextProps = {
    state: AppState
    dispatch: Dispatch<AppActions>
    handleSignUp: (user: UserSignUp) => Promise<void>
    handleLogin: (user: UserLogin) => Promise<void>
}

type AppProviderProps = {
    children: ReactNode
}

export const AppContext = createContext<AppContextProps>(null!);

export const AppProvider = ({ children } : AppProviderProps) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const navigate = useNavigate()

    /** GET INFORMATION FUNCTIONS */
    const handleGetServices = async() => {
        try {
            const response = await getServices()

            if(response)
                dispatch({ type: 'set-services', payload: { services: response } })
        } catch (error) {
            console.log(error)
        }
    }

    /** POST FUNCTIONS */
    const handleSignUp = async(user : UserSignUp) => {
        try {
            await registerUser(user)
            navigate('/auth/login')
            dispatch({ type: 'set-alert', payload: { alert: { type: 'success', message: 'Account created successfuly' } } })
        } catch (error) {
            if(error instanceof Error) dispatch({ type: 'set-alert', payload: { alert: { type: 'error', message: error.message } } })
        }

        setTimeout(() => {
            dispatch({ type: 'reset-alert' })
        }, 5000)
    }

    const handleLogin = async(user : UserLogin) => {
        try {
            const token = await login(user)
            localStorage.setItem("token", token!)

            const auth = await getAuth()

            dispatch({ type: 'reset-alert' })
            dispatch({ type: 'set-auth', payload: { user: auth! } })

            navigate(-1)
        } catch (error) {
            if(error instanceof Error) dispatch({ type: 'set-alert', payload: { alert: { type: 'error', message: error.message } } })
        }
    }

    const checkAuth = async() => {
        const token = localStorage.getItem("token")
    
        if(!token)
            return
    
        const user = await getAuth()
        dispatch({ type: 'set-auth', payload: { user: user! } })
    }

    useEffect(() => {
        handleGetServices()

        checkAuth()
    }, [])

    return (
        <AppContext.Provider
            value={{
                state, 
                dispatch, 
                handleSignUp,
                handleLogin
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
