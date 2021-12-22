import "./styles.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectsList from "./pages/ProjectsList";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Logout from "./pages/Logout";
import PrivateRoute from "./components/PrivateRoute";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import { getCurrentUser } from "./components/UserUtils";


const App = () => {
  
  const [connected, setConnected] = useState(false);
  const cognitoUser = getCurrentUser();

  useEffect(() => {

    if (cognitoUser != null) {
      cognitoUser.getSession(function(err, session) {
        if (err) {
          alert (err.message || JSON.stringify(err));
          return;
        }
        //console.log('session validity : ' + session.isValid());
        setConnected(session.isValid());
      })
    } else {
      setConnected(false);
    }
    
  })

  
  return (
    <div>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path="/" exact component={ProjectsList} />
            <PrivateRoute path="/about" exact component={About} />
            <PrivateRoute path="/logout" exact component={Logout} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      
    </div>
  );
    
  
}

export default App;
