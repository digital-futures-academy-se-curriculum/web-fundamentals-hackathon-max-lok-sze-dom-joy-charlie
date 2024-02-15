import { Routes, Route, } from "react-router-dom";
import './App.css'
import Home from "../src/pages/Home.jsx";
import WhatsOn from "./pages/WhatsOn.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whats-on" element={<WhatsOn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
