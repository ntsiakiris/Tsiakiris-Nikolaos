import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function ProjectCard({ title, description, githubLink, img, onSelect }) {
  const [showButton, setShowButton] = useState(false);

  function handleMouseEnter () {
    setShowButton(true);
  };

  function handleMouseLeave () {
    setShowButton(false);
  };

  return (
    <div className="project-card-box" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="project-card">
        {img && <img src={img} alt="Project" />}
        <div className="description-icon">
        <h3>{title}</h3>
        </div>
          <div className="description">
          <p>{description}</p>
          {showButton && ( 
            <div className="git-button">
            <a href={githubLink}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            { <button className="project-btn" /*onClick={() => window.location.href = onSelect}*/> Learn More  </button> }
            </div>
          )}
         </div>
      </div>
    </div>
  );
}
