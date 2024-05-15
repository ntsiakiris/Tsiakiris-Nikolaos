import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function Contact() {
  return (
    <section id='contact'>
       <h2>Contact Me</h2>
        <div className="icons">
          <a href="https://www.instagram.com/tsak.__/">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.facebook.com/nicktsiakiris/">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://github.com/ntsiakiris">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/nikolaos-tsiakiris-b047a2229/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <span>Feel free to reach out to me at tsiakiris.ni@gmail.com</span>
    
      </section>
  );
}
