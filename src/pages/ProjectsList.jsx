import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Project from "../components/Project";
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";
import { getCurrentUser } from "../components/UserUtils";
import { useDispatch } from "react-redux";
import { getProjects } from "../actions/projects.action";
//require('dotenv').config;



const ProjectsList = () => {
  
  const currentUser = getCurrentUser();

  //console.log(process.env);


  const dispatch = useDispatch();
  dispatch(getProjects());


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
