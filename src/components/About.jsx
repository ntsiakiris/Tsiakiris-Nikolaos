import { useTypewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ProfileImage from "../image/portfolio-black-removebg-preview.png";



export default function About() {
  

    const [text] = useTypewriter({
      words: ["Welcome", "Hola", "Bonjour","Willkommen"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });

 
    return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content" >
        <div> 
        <img src={ProfileImage}alt="Profile" /> 
        </div>
        <div>
          <h1>{text}!</h1>
          <p>I'm Tsiakiris Nikolaos.I come from the heroic city Naousa, in the perfecture of Imathia.  I graduated from the Department of Information and Electronic Engineering of International Hellenic University Institution of Thessaloniki at Sindos in 2022.</p>
            <div className='icons'>
            <a href="https://github.com/ntsiakiris">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/nikolaos-tsiakiris-b047a2229/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            </div>
         </div>
      </div>
    </section>
  );
}