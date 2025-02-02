import { forwardRef } from "react"

type HeaderSeccionProps = {

}

const HeaderSeccion = forwardRef<HTMLDivElement, HeaderSeccionProps>((props, ref) => {
  return (
    <div ref={ref} className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-24">
        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#000000] to-[#000000] opacity-60" ></div>
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#000000] to-[#000000] opacity-40"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-normal tracking-tight text-white sm:text-6xl">Welcome to <span className="font-bold text-sky-500"><img src="/logoWhite.svg" alt="acreead logo" className="w-96" /></span></h2>
                <p className="mt-6 text-lg leading-8 text-gray-100">Currently, we live in a globalized and digital world, all businesses and companies have to be working with technologies and being updated to new trends.</p>
                <p className="mt-6 text-lg leading-8 text-gray-100">Acread is a company dedicated to innovative and efficient solutions using technologies, our mission is to provide companies with the opportunity to grow and expand their business to the virtual world.</p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none hidden sm:block">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                    <a href="#">Development <span aria-hidden="true">&rarr;</span></a>
                    <a href="#">Network Infrestructure <span aria-hidden="true">&rarr;</span></a>
                    <a href="#">Projects Managment <span aria-hidden="true">&rarr;</span></a>
                    <a href="#">Consultancy <span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
        </div>
        </div>
  )
})

export default HeaderSeccion