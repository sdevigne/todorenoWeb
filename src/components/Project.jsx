import React, { useState } from "react";
import { Button, Offcanvas, ListGroup, Accordion } from "react-bootstrap";

const Project = (props) => {
  const [project, setProject] = useState(props.project);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getTodos = () => {
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Voir les localisations et les pièces...
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{project.label}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {project.places.map((
              place // Accordion ???
            ) => (
              <ListGroup.Item key={place.id}>{place.label}</ListGroup.Item>
            ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Project;
