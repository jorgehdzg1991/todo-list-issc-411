import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Projecto 2do Parcial</Navbar.Brand>
      <Navbar.Toggle aria-controls="app-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/todos">To Do's</Nav.Link>
          <Nav.Link as={Link} to="/users">Users</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
