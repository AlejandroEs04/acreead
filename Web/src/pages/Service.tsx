import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Service as ServiceType } from "../types";
import { useApp } from "../hooks/useApp";
import { currencyFormat } from "../helpers";
import Button from "../components/Button";

const Service = () => {
    const [currentService, setCurrentService] = useState<ServiceType>()
    const { id } = useParams();

    const { state } = useApp()

    const navigate = useNavigate()

    useEffect(() => {
        if (id)
            setCurrentService(state.services.filter(service => service.service_id === +id)[0])
    }, [state.services, id])

    return (
        <>
            <h1 className="text-3xl font-semibold text-blue-700">{currentService?.name}</h1>
            <p className="text-lg">{currentService?.description}</p>

            {currentService?.plans.length && (
                <>
                    <h2 className="text-3xl font-medium mt-4">Plans available</h2>
                    <div className="flex gap-5 mt-2">
                        {currentService.plans.map(plan => (
                            <div
                                key={plan.plan_id} 
                                className={`
                                    ${currentService.plans.length == 2 && 'w-1/2'} 
                                    ${currentService.plans.length == 3 && 'w-1/3'} 
                                    bg-white p-4 rounded shadow-md
                                `}
                            >
                                <h3 className="text-xl font-semibold">{plan.name}</h3>
                                <p>{plan?.description}</p>

                                <div className="flex justify-around">
                                    <div className="pr-2 py-2 text-center">
                                        <p className="text-neutral-500 text-lg font-semibold">Costo mensual</p>
                                        <p className="text-blue-700 font-bold text-2xl">{currencyFormat(plan.price)}</p>
                                    </div>
                                    
                                    <div className="pl-2 py-2 text-center">
                                        <p className="text-neutral-500 text-lg font-semibold">Costo inicial</p>
                                        <p className="text-blue-700 font-bold text-2xl">{currencyFormat(plan.startPrice)}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Button 
                                        onClick={() => {
                                            navigate(`/contract/${currentService.service_id}/${plan.plan_id}`)
                                        }}
                                        text="Contract"
                                    />

                                    <Button 
                                        text="Know more"
                                        style='dark'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
                
            )}
        </>
    )
}

export default Service