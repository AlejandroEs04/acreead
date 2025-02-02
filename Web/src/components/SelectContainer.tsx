import { ChangeEvent } from "react"
import { Service } from "../types"

export type SelectContainerProps = {
    name: string, 
    label: string, 
    options: Service[],
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const SelectContainer = ({ name, label, options, handleChange } : SelectContainerProps) => {
    return (
        <div className="mt-2">
            <label htmlFor={name}>{label}</label>
            <select 
                name={name} 
                id={name} 
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
            >
                <option>Seleccione {label}</option>
                {options.map(option => (
                    <option key={option.service_id} value={option.service_id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectContainer