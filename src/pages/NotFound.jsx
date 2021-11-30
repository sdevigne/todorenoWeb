import React, { Component } from "react";
import Navigation from "../components/Navigation";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>Page non trouvée</h1>
      </div>
    );
  }
}

export default NotFound;
