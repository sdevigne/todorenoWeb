import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
  const [projects, setProjects] = useState([]);

  //const viewProject = props.viewProject;

  useEffect(() => {
    setProjects([
      {
        idProject: 1,
        label: "Project 1",
        description: "Lorem ipsum bla bla bla",
        places: [
          {
            label: "Localisation 1",
            id: "loc11"
          },
          {
            label: "Localisation 2",
            id: "loc12"
          },
          {
            label: "Localisation 3",
            id: "loc13"
          }
        ]
      },
      {
        idProject: 2,
        label: "Project 2",
        description: "Lorem ipsum bla bla bla"
      },
      {
        idProject: 3,
        label: "Project 3",
        description: "Lorem ipsum bla bla bla"
      }
    ]);
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
