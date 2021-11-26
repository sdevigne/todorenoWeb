import React, { Component } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

class Project extends Component {
  render() {
    const { details } = this.props;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{details.label}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Afficher</Button>
          <ButtonGroup>
            <Button variant="secondary">Modifier</Button>
            <Button variant="secondary">Archiver</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default Project;
