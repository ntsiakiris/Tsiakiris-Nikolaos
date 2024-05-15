import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume/Resume.jsx";
import Welcome from "./components/Welcome.jsx";
import Preloader from "./components/Preloader.jsx";




function App() {
  
  return (
    <div className="App">
      <Preloader />
      <Header />
      <Welcome />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
