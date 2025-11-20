import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Meals from "./Pages/Meals";
import Login from "./Pages/Login";
import RegistrationScreen from "./Pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationScreen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
