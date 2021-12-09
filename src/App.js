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
    
  }
}

export default App;
