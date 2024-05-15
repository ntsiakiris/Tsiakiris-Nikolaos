import { useState } from "react";
import logo from "../image/portfolio-black-removebg-preview.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header>
      <a href="#top">
        <div className="logo-name">
          <img src={logo} alt="Tsiakiris Nikolaos logo" />
          <h2>Tsiakiris Nikolaos</h2>
        </div>
      </a>
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#resume" onClick={toggleMenu}>Resume</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
