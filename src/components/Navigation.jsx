import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { unselectProject } from "../actions/selectedProject.action";
import { useDispatch } from "react-redux";


const Navigation = () => {
  const dispatch = useDispatch();
  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>TodoList</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/" onClick={() => dispatch(unselectProject())}>
            <Nav.Link>Liste des projets</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>A propos</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
