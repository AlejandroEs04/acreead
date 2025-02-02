import { ChangeEvent } from "react"
import { Link } from "react-router-dom"

export type InputContainerProps = {
    name: string, 
    placeholder: string, 
    type?: string, 
    label: string, 
    value: string | number,
    link?: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputContainer = ({ name, placeholder, type = 'text', label, handleChange, value, link } : InputContainerProps) => {
    return (
        <div className="mt-2">
            <div className="flex items-center justify-between">
                <label htmlFor={name}>{label}</label>

                {link && (
                    <div className="text-sm">
                        <Link to={`${link}`} className="font-semibold text-sky-600 hover:text-sky-700">Forgot password?</Link>
                    </div>
                )}
            </div>
            <input 
                type={type} 
                name={name} 
                id={name} 
                value={value}
                className="border rounded w-full px-2 py-1" 
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default InputContainer