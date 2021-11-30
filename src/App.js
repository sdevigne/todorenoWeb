import "./styles.css";
import React, { Component } from "react";
import Constants from "./const";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectsList from "./pages/ProjectsList";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";

class App extends Component {
  state = {
    projects: [
      {
        idProject: 1,
        label: "Project 1",
        description: "Lorem ipsum bla bla bla"
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
    ],
    project: Constants.UNDEF,
    alert: {
      header: "",
      message: "",
      action: Constants.UNDEF_ACTION,
      id: Constants.UNDEF,
      show: false
    }
  };

  /*handleAlert(header, message, action, id) {
    const alert = {
      header: header,
      message: message,
      action: action,
      id: id,
      show: true
    };
    this.setState(alert);
  }*/

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ProjectsList} />
            <Route path="/about" exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
    /*if (this.state.project !== Constants.UNDEF_PROJECT)
      return <div>Project</div>;
    else
      return (
        <div>
          {this.state.projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      );*/
  }
}

export default App;
