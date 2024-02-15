import { Routes, Route, } from "react-router-dom";
import './App.css'
import WhatsOn from "./pages/WhatsOn";
import SignUp from "./pages/SignUp";
import Home from "../src/pages/Home";
import SiteNavbar from "./components/Navbar/SiteNavbar";
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whats-on" element={<WhatsOn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
