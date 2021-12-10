import "./styles.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectsList from "./pages/ProjectsList";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Logout from "./pages/Logout";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { isEmpty } from "./components/Utils";
import Login from "./pages/Login";


const App = () => {
  
  //localStorage.setItem("TEST", "CONNECTE");
  const connected = localStorage.getItem("TEST")

  
  return (
    <div>
        <BrowserRouter>
        {isEmpty(connected) ?
          <Login/> : 
          <Switch>
            <Route path="/" exact component={ProjectsList} />
            <Route path="/about" exact component={About} />
            <Route path="/logout" exact component={Logout} />
            <Route component={NotFound} />
          </Switch>
        }
        </BrowserRouter>
      
    </div>
  );
    
  
}

export default App;
