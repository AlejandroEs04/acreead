import ServiceCardContainer from "../components/ServiceCardContainer"
import { useApp } from "../hooks/useApp"

const Services = () => {
    const { state } = useApp()

    return (
        <>
            <h1 className="text-3xl font-semibold text-blue-700">Services</h1>

            <div className="flex flex-col gap-5 mt-2">
                {state.services.map(service => (
                    <ServiceCardContainer
                        key={service.service_id}
                        service={service}
                    />
                ))}
            </div>
        </>
    )
}

export default Services