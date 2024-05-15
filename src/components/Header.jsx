import logo from "../image/portfolio-black-removebg-preview.png";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header>
      <a href="#top">
        <div className="logo-name">
          <img src={logo} alt="Tsiakiris Nikolaos logo" />
          <h2>Tsiakiris Nikolaos</h2>
        </div>
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
