import React, { useState } from "react";
import { Button, Offcanvas, ListGroup, Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectPlace } from "../actions/place.action";
import { selectRoom } from "../actions/room.action";
import Room from "./Room";
import { isEmpty } from "./Utils";

const Project = (props) => {
  const [project, setProject] = useState(props.project);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const getPlace = (place) => {
    dispatch(selectPlace(place));
  }

  const getTodos = (room) => {
    handleClose();
    dispatch(selectRoom(room));
  };

  const room = useSelector((state) => state.roomReducer);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Voir les localisations et les pièces...
      </Button>

      {!isEmpty(room) && <Room/>}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{project.label}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion>
            {project.places.map(place  => (
              <Accordion.Item eventKey={place.id} key={place.id}>
                <Accordion.Header onClick={() => getPlace(place)}>{place.label}</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                  {place.rooms.map(room => 
                    <ListGroup.Item action key={room.id} onClick={() => getTodos(room)}>{room.label}</ListGroup.Item>
                  )}
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              
            ))}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Project;
