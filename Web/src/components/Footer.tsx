import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-white py-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center sm:items-start">
                        <img src="/logoBlack.svg" alt="Logo de Acreead" className="max-w-52" />
                        <p className="text-sm text-black mt-2">Innovating with the technology</p>
                    </div>

                    <div className="flex flex-col items-center sm:items-end">
                        <p className="text-blue-600 font-semibold">Navigation</p>
                        <nav className="flex flex-row sm:flex-col items-center sm:items-end">
                            <Link className="hover:text-neutral-800 font-medium text-neutral-500" to={`/`}>Home</Link>
                            <Link className="hover:text-neutral-800 font-medium text-neutral-500" to={`/services`}>Services</Link>
                            <Link className="hover:text-neutral-800 font-medium text-neutral-500" to={`/portfolio`}>Portfolio</Link>
                            <Link className="hover:text-neutral-800 font-medium text-neutral-500" to={`/about-us`}>About Us</Link>
                            <Link className="hover:text-neutral-800 font-medium text-neutral-500" to={`/contact-us`}>Contact Us</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col items-center sm:items-end text-gray-50">
                        <p className="text-blue-600 font-semibold">Social Media</p>

                        <Link className="hover:text-neutral-800 font-medium text-neutral-500" to={``}>Facebook</Link>
                        <Link className="hover:text-neutral-800 font-medium text-neutral-500" to={``}>Instagram</Link>
                        <Link className="hover:text-neutral-800 font-medium text-neutral-500" to={``}>Whatsapp</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer