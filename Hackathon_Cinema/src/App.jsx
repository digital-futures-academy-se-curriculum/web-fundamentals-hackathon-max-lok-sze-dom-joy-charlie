import { Routes, Route, } from "react-router-dom";
import './App.css'
import Home from "../src/pages/Home";
import WhatsOn from "./pages/WhatsOn";
import SignUp from "./pages/SignUp";
import SiteNavbar from "./components/Navbar/SiteNavbar";

function App() {
  

  return (
    <>
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whats-on" element={<WhatsOn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
