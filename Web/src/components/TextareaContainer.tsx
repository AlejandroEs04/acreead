import { ChangeEvent } from 'react'

export type TextareaContainerProps = {
    name: string 
    label: string 
    value: string
    className?: string
    handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextareaContainer = ({ label, name, value, handleChange, className } : TextareaContainerProps) => {
    return (
        <div className={`mt-2 ${className}`}>
            <label htmlFor={name}>{label}</label>
            <textarea 
                name={name} 
                id={name} 
                value={value} 
                onChange={handleChange}
                className='w-full border h-full rounded px-2 py-1'
            ></textarea>
        </div>
    )
}

export default TextareaContainer