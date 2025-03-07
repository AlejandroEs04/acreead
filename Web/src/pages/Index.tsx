import { Link } from "react-router-dom"
import ServiceContainer from "../components/ServiceContainer"
import ContactForm from "../components/ContactForm"
import { useApp } from "../hooks/useApp"

const Index = () => {
    const { state } = useApp()

    return (
        <div className="px-2 sm:p-0">
            <div>
                <h2 className="text-center text-3xl text-blue-700 font-semibold uppercase">Services</h2>

                <div className="flex justify-evenly gap-5 mt-3 mb-2">
                    {state.services.slice(0,3).map(service => (
                        <ServiceContainer 
                            service={service}
                            key={service.serviceId}
                        />
                    ))}
                </div>
                <div className="text-center mt-2">
                    <Link className="text-neutral-400 text-lg font-bold hover:text-neutral-500 transition-colors text-center" to={`/services`}>See more services</Link>
                </div>
            </div>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 text-justify">
                    <h2 className="text-blue-700 text-3xl font-semibold uppercase">¿Who are we?</h2>
                    <p className="text-xl">Acreead is a proudly Regiomontan company dedicated to delivering innovative and efficient solutions through the use of technology.</p>
                    <p className="text-xl mt-4">Our mission is to provide companies—whether small, medium, or large businesses—the opportunity to grow and expand their horizons into the virtual world.</p>

                    <p className="text-xl mt-4">We've developed our knowledge in network infrestructure, software, web and mobile development, computer architecture and data analysis, and we are ready for can provide the best service that we can do.</p>
                </div>

                <div>
                    <img src="./img_main.webp" alt="Who are we? images" className="rounded-2xl shadow" />
                </div>
            </div>
            
            <div className="mt-14">
                <h2 className="text-center text-3xl font-semibold uppercase">Contact us</h2>
                <ContactForm />
            </div>
        </div>
    )
}

export default Index