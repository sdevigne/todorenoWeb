import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const Projects = (props) => {
  
  const projects = useSelector((state) => state.projectsReducer);

  return (
    <div className="projects">
      {!isEmpty(projects) && projects.map((project) => (
        <ProjectCard
          project={project}
          viewProject={props.viewProject}
          key={project.id}
        />
      ))}
    </div>
  );
};

export default Projects;
