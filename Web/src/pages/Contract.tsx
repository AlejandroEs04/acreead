import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApp } from "../hooks/useApp";
import { ContractEmail, PlanService, Service } from "../types";
import { currencyFormat } from "../helpers";
import Button from "../components/Button";
import InputContainer from "../components/InputContainer";
import ContactForm from "../components/ContactForm";

export default function Contract() {
    const [service, setService] = useState<Service | null>(null)
    const [user, setUser] = useState<ContractEmail>({
        name: '', 
        lastName: '', 
        email: '', 
        phoneNumber: '', 
        meetingDate: '',
        company: ''
    })
    const [plan, setPlan] = useState<PlanService>()
    const { service_id, plan_id } = useParams()

    const { state } = useApp()

    useEffect(() => {
        if(state.user)
            setUser(state.user)
    }, [state.user])

    useEffect(() => {
        if (service_id) setService(state.services.filter(service => service.service_id === +service_id)[0])
    }, [state.services, service_id])

    useEffect(() => {
        if(service != null) setPlan(service?.plans.filter(plan => plan.plan_id === +plan_id!)[0])
    }, [service])

    console.log(state.user)

    if (service != null && plan != null) return (
        <div>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2">
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <h1 className="text-3xl font-semibold text-blue-700">Summary</h1>

                        <div className="mt-2">
                            <table className="w-full">
                                <tbody>
                                    <tr className="text-lg text-neutral-500">
                                        <td>Service:</td>
                                        <td className="text-neutral-700 font-semibold pl-5 text-end">{service?.name}</td>
                                    </tr>
                                    <tr className="text-lg text-neutral-500">
                                        <td>Plan selected:</td>
                                        <td className="text-neutral-700 font-semibold pl-5 text-end">{plan?.name}</td>
                                    </tr>
                                    <tr className="text-lg text-neutral-800">
                                        <td>Start Price:</td>
                                        <td className="text-blue-700 font-bold pl-5 text-end">{currencyFormat(plan?.startPrice!)}</td>
                                    </tr>
                                    <tr className="text-lg text-neutral-800">
                                        <td>Monthly Price:</td>
                                        <td className="text-blue-700 font-bold pl-5 text-end">{currencyFormat(plan?.price!)}</td>
                                    </tr>
                                    <tr className="text-lg text-neutral-800">
                                        <td>Total:</td>
                                        <td className="text-blue-700 font-bold pl-5 text-end">{currencyFormat(plan?.price! + plan?.startPrice!)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <Button text="Request Contract" className="my-4" />

                        <Link to={'/'} className="text-neutral-500 hover:text-blue-700 transition-colors">Read terms and conditions</Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <h1 className="text-2xl text-neutral-600">Contact Information</h1>

                        <InputContainer 
                            label="Name"
                            name="name"
                            placeholder="First Name"
                            value={user.name}
                            handleChange={() => console.log("")}
                        />

                        <InputContainer 
                            label="Last Name"
                            name="lastName"
                            placeholder="Last Name"
                            value={user.lastName}
                            handleChange={() => console.log("")}
                        />

                        <InputContainer 
                            label="Company"
                            name="company"
                            placeholder="Company Name"
                            value={user.company!}
                            handleChange={() => console.log("")}
                        />
                        
                        <InputContainer 
                            label="Email"
                            name="email"
                            placeholder="Ej. example_email@acreead.com"
                            value={user.email}
                            handleChange={() => console.log("")}
                        />
                        
                        <InputContainer 
                            label="Phone number"
                            name="phoneNumber"
                            type="number"
                            placeholder="Ej. 8110361209"
                            value={user.phoneNumber!}
                            handleChange={() => console.log("")}
                        />
                        
                        <InputContainer 
                            label="Meeting Date"
                            name="meetingDate"
                            type="datetime-local"
                            value={user.meetingDate!}
                            handleChange={() => console.log("")}
                        />
                    </div>
                </div>
            </div>
            
            <div className="mt-14">
                <h2 className="text-center text-3xl font-semibold uppercase">Contact us</h2>
                <ContactForm />
            </div>
        </div>
    )
}
