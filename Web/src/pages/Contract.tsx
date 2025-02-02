import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApp } from "../hooks/useApp";
import { PlanService, Service, User } from "../types";
import { currencyFormat } from "../helpers";
import Button from "../components/Button";
import InputContainer from "../components/InputContainer";

export default function Contract() {
    const [service, setService] = useState<Service | null>(null)
    const [user, setUser] = useState<User>({
        name: '', 
        lastName: '', 
        email: ''
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
            <div className="flex gap-5">
                <div className="p-4 bg-white w-1/2 shadow-md rounded-lg">
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

                    <Button text="Contract Now" className="my-4" />

                    <Link to={'/'} className="text-neutral-500 hover:text-blue-700 transition-colors">Read terms and conditions</Link>
                </div>

                <div className="w-1/2">
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <h1 className="text-2xl text-neutral-600">Contact Information</h1>

                        {!state.user && (
                            <p className="text-red-500 font-semibold">Para poder completar el proceso debe llenar sus datos para crear una cuenta e iniciar sesión</p>
                        )}

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

                        <Button text="Edit information" style='dark' className="mt-2" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
