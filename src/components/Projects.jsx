import ProjectCard from './ProjectCard'; 
import commingsoon from "../image/75c91ff76dfbb0551ce56351ab150170.jpg";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <ProjectCard
          img={commingsoon}
          title="COMMING SOON"
          description="New projects comming soon."
          onSelect=" "
        />
        {/* <ProjectCard
          img={ProfileImage}
          title="Project 2"
          description="Sed do eiscsadsadasdusmod tempor incididunt ut labore et dolore magna aliquafdasfdsfdsfdsfdsfffffffffffffffffffffffffffffffffffff."
          
        />
        <ProjectCard
          img={ProfileImage}
          title="Project 2"
          githubLink="https://github.com/yourusername/project2"
          description="Sed do eiusmodor sadsadsadsincididunt ut labore."
        /> */}
        
      </div>
    </section>
  );
}
