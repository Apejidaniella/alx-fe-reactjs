import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services" 
import Contact from "./Contact"
import Navbar from "./components/Navbar"
import Footer from "./Footer";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<>
            <Navbar />
            <Outlet />
            <Footer />
            </>}>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/services" element={<Services />} /> 
            <Route path="/contact" element={<Contact />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
