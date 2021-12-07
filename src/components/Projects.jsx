import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const Projects = (props) => {
  const [projects, setProjects] = useState([]);

  
  useEffect(() => {
    const getProjects = () => axios.get("https://rqom69p957.execute-api.eu-west-3.amazonaws.com/prod/projects")
      .then( res => {
        const allProjects = JSON.parse(res.data.body)
        setProjects(allProjects)
      })

      getProjects();
    
  }, []);

  return (
    <div className="projects">
      {projects.map((project) => (
        <ProjectCard
          project={project}
          viewProject={props.viewProject}
          key={project.idProject}
        />
      ))}
    </div>
  );
};

export default Projects;
