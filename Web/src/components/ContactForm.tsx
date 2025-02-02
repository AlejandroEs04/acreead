import { useState, ChangeEvent } from "react"
import InputContainer from "./InputContainer"
import TextareaContainer from "./TextareaContainer"
import SelectContainer from "./SelectContainer"
import { useApp } from "../hooks/useApp"


const ContactForm = () => {
    const [contactForm, setContactForm] = useState({
        name: '', 
        last_name: '', 
        email: '', 
        phone_number: '', 
        message: '', 
        service_id: 0
    })

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target

        setContactForm({
            ...contactForm, 
            [name] : value
        })
    }

    const { state } = useApp()

    return (
        <div className="bg-white rounded grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 md:rounded-l-2xl">
            <form action="" className="p-5">
                <h4 className="font-bold text-2xl">Send Email</h4>
                <p className="text-sm">Please fill the form with informations thats we are requesting</p>

                <InputContainer name="name" label="Name" placeholder="Name" value={contactForm.name} handleChange={handleChange} />
                <InputContainer name="last_name" label="Last Name" placeholder="Last Name" value={contactForm.last_name} handleChange={handleChange} />
                <InputContainer type="email" name="email" label="Email" placeholder="Ej. correo@acreead.com" value={contactForm.email} handleChange={handleChange} />
                <InputContainer type="number" name="phone_number" label="Phone Number" placeholder="Ej. 8110368975" value={contactForm.phone_number} handleChange={handleChange} />
                <TextareaContainer name="message" label="Message" value={contactForm.message} handleChange={handleChange} />
                <SelectContainer name="service_id" label="Servicio de interes" options={state.services} handleChange={handleChange} />

                <button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-700 px-2 py-1 rounded w-full mt-5 text-white transition-all">Enviar</button>
            </form>

            <div className="bg-gradient-to-r from-neutral-600 to-neutral-800 rounded-b md:rounded-b-none md:rounded-r-2xl p-5 text-white text-center">
                <div className="flex justify-center">
                    <img src="/logoWhite.svg" alt="Logo acreead" className="max-w-36" />
                </div>
                <h4 className="text-2xl font-semibold capitalize mt-5">Other contact methods</h4>
                
                <div>
                    
                </div>

                <p className="font-light">Thank you for contact us, we gonna answer more quickly possible</p>
            </div>
        </div>
    )
}

export default ContactForm