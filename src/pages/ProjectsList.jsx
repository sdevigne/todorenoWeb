import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Project from "../components/Project";
import Constants from "../const";
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";

const ProjectsList = () => {
  //const [project, setProject] = useState(Constants.UNDEF_PROJECT);

  const project = useSelector((state) => state.selectedProjectReducer);
  const viewProject = (project) => {
    //setProject(project);
  };

  if (!isEmpty(project)) {
    return (
      <div className="ProjectDetail">
        <Navigation />
        <Project project={project} />
      </div>
    );
  } else return (
    <div className="ProjectsList">
      <Navigation />
      <h1>Liste des projets</h1>
      <Projects viewProject={viewProject} />
    </div>
  );
};

export default ProjectsList;
