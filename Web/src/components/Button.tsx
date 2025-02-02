import { MouseEventHandler } from "react"

type ButtonProps = {
    text: string
    style?: 'primary' | 'secondary' | 'dark'
    type?: 'submit' | 'button'
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
}

export default function Button({ text, style = 'primary', type = 'button', onClick, className } : ButtonProps) {
    return (
        <button 
            type={type}
            onClick={onClick}
            className={`
                ${className}
                bg-gradient-to-r 
                ${style === 'primary' && 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'}
                ${style === 'dark' && 'from-neutral-600 to-neutral-700 hover:from-neutral-700 hover:to-neutral-800'}
                px-2 py-1 
                rounded 
                w-full 
                text-white 
                transition-all`
            }
        >{text}</button>
    )
}
