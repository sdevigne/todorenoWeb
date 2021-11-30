import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

const Project = (props) => {
  const [project, setProject] = useState(props.project);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Voir les pièces...
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{project.label}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {project.places.map((place) => (
              <li key={place.id}>{place.label}</li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Project;
