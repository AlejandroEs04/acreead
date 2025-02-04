import ContactForm from '../components/ContactForm'

export default function AboutUs() {
    return (
        <>
            <h1 className="text-3xl font-semibold text-blue-700">About us</h1>

            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 text-justify">
                    <h2 className="text-neutral-700 text-2xl font-semibold uppercase">Who are we?</h2>
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
        </>
    )
}
