import { Alert } from "../types"

const AlertContainer = ({ type, message } : Alert) => {
    return (
        <p
            className={`
                w-full
                text-center
                p-2
                my-1
                font-semibold 
                shadow
                rounded
                bg-gradient-to-r
                ${type === 'error' && 'from-red-600 to-red-700 text-neutral-50 '}
                ${type === 'info' && 'from-orange-600 to-orange-700 text-neutral-50 '}
                ${type === 'success' && 'from-green-600 to-green-700 text-neutral-50 '}
                backdrop:blur-xl
            `}
        >{message}</p>  
    )
}

export default AlertContainer