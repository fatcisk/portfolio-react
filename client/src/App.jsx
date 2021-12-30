import Portfolio from "./pages/Portfolio";
import ContentPage from "./pages/ContentPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  setTimeout(() => {
    document.body.style.overflowY = "scroll";
  }, 2000);

  return (
    <div className="App">
      <div className="overlay"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="portfolio" />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="portfolio/:id" element={<ContentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
