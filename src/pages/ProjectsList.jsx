import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Project from "../components/Project";
import Constants from "../const";

const ProjectsList = () => {
  const [project, setProject] = useState(Constants.UNDEF_PROJECT);

  const viewProject = (project) => {
    setProject(project);
  };

  if (project !== Constants.UNDEF_PROJECT) {
    return (
      <div className="ProjectDetail">
        <Navigation />
        <Project project={project} />
      </div>
    );
  }
  return (
    <div className="ProjectsList">
      <Navigation />
      <h1>Liste des projets</h1>
      <Projects viewProject={viewProject} />
    </div>
  );
};

export default ProjectsList;
