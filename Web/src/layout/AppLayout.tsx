import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import HeaderSeccion from "../components/HeaderSeccion"
import Footer from "../components/Footer";
import { Link } from "../types";

const links : Link[] = [
  {
    name: 'Home', 
    pathname: '/'
  }, 
  {
    name: 'Services', 
    pathname: '/services'
  },
  {
    name: 'Products', 
    pathname: '/products'
  },
  {
    name: 'Portfolio', 
    pathname: '/portfolio'
  },
  {
    name: 'About us', 
    pathname: '/about-us'
  },
  {
    name: 'Contact Us', 
    pathname: '/contact-us'
  },
]

const AppLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header 
        links={links}
      />

      {pathname === '/' && <HeaderSeccion />}

      <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-10'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default AppLayout