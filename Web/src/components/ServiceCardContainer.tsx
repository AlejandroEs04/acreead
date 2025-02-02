import { Link } from 'react-router-dom'
import { Service } from '../types/index'

export type ServiceCardContainerProps = {
    service: Service
}

const ServiceCardContainer = ({ service } : ServiceCardContainerProps) => {
    return (
        <div className="bg-white rounded p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 shadow-md">
            <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold text-blue-700">{service.name}</h2>
                <p className="text-lg">{service.description}</p>

                <p className="font-semibold mt-5">Planes disponibles:</p>
                {service.plans.length ? (
                    <p>{service.plans.map(service => service.name + "; ")}</p>
                ) : (
                    <p>No hay planes disponibles</p>
                )}

                <div className='mt-2'>
                    <Link 
                        to={`/services/${service.service_id}`}
                        className="px-2 py-1 bg-blue-700 hover:bg-blue-800 transition-colors text-white rounded"
                    >Know more</Link>
                </div>
            </div>

            <div>
                <img src={`/service_${service.service_id}.jpg`} alt={`Imagen Servicio ${service.name}`} className='' />
            </div>
        </div>
    )
}

export default ServiceCardContainer