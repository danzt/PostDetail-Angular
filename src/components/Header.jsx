import { Outlet, Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';


const App = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>My City</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Weather">Weather</Nav.Link>
          <Nav.Link as={Link} to="/Favorites">Favorites</Nav.Link>
        </Nav>
        <Outlet />
      </Navbar.Collapse>
      </Container>
    </Navbar>
);


export default App;
