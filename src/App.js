import "./styles.css";
import React, { Component } from "react";
import Project from "./components/project";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  UNDEF_PROJECT = -1;

  state = {
    projects: [
      { idProject: 1, label: "Project 1" },
      { idProject: 2, label: "Project 2" },
      { idProject: 3, label: "Project 3" }
    ],
    project: this.UNDEF_PROJECT
  };

  render() {
    console.log(this.state);
    if (this.state.project !== this.UNDEF_PROJECT) return <div>Project</div>;
    else
      return (
        <div>
          {this.state.projects.map((project) => (
            <Project details={project} />
          ))}
        </div>
      );
  }
}

export default App;
