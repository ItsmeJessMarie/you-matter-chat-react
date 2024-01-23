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
import NotFound from "./pages/notFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/crisis" element={<Crisis />} />
          <Route path="/fundraising" element={<Fundraising />} />
          <Route path="/social" element={<Social />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} status={404} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
