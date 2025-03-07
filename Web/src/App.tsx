import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Index from "./pages/Index"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Services from "./pages/Services"
import Service from "./pages/Service"
import Portfolio from "./pages/Portfolio"
import Contract from "./pages/Contract"
import { AppProvider } from "./context/AppContext"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Products from "./pages/Products"

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="services/:id" element={<Service />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contract/:serviceId/:planId" element={<Contract />} />
          </Route>

          <Route path="/auth" element={<AppLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
