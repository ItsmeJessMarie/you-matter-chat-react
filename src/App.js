import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Crisis from "./pages/volunteer/crisis";
import Fundraising from "./pages/volunteer/fundraising";
import Social from "./pages/volunteer/social";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/index" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crisis" element={<Crisis />} />
        <Route path="/fundraising" element={<Fundraising />} />
        <Route path="/social" element={<Social />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
