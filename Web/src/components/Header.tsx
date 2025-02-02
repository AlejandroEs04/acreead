import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Link as LinkType } from "../types"

type HeaderProps = {
    changeBackground? : boolean, 
    links : LinkType[]
}

const Header = ({ links } : HeaderProps ) => {
    const [showNav, setShowNav] = useState(false)

    const { pathname } = useLocation()

    const toggleNav = () => setShowNav(!showNav)
    return (
        <header className={`bg-white sticky top-0 z-10 transition-colors`}>
            <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className={`relative flex h-16 items-center justify-between`}>
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p- changeBackground ? 'text-gray-700' :2 text-neutral-700 hover:text-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5" onClick={toggleNav}></span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="">
                        <Link to={'/'} className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src={`/AcreeadIconBlack.svg`} alt="Your Company" />
                        </Link>
                    </div>

                    <div className="hidden sm:ml-6 sm:flex w-full justify-center">
                        <div className="flex space-x-4">
                            {links.map(link => (
                                <Link key={link.pathname} to={link.pathname} className={`rounded-md transition-colors px-3 py-2 text font-medium ${pathname === link.pathname ? 'text-blue-600 font-bold' : `hover:text-blue-800  'text-gray-700'}`}`}>{link.name}</Link>
                            ))}
                        </div>
                    </div>
                    
                    <div className={`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}>
                        <Link
                            to={`/auth/login`}
                            className=""
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`${!showNav && 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="px-2 pb-3 pt-2">
                    {links.map(link => (
                        <Link key={link.pathname} to={link.pathname} className={`block rounded-md px-3 py-1.5 text-base font-medium hover:bg-gray-700 hover:text-white transition-colors`}>{link.name}</Link>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header