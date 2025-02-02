type AlertTextProps = {
    type: number, 
    msg: string
}

const AlertText = ({ type, msg } : AlertTextProps) => {
    return (
        <p
            className={`
                w-full
                text-center
                font-semibold 
                mb-1
                ${type === 1 && 'text-red-500'}
                ${type === 2 && 'text-orange-500'}
                ${type === 3 && 'text-green-600'}
            `}
        >{msg}</p>
    )
}

export default AlertText