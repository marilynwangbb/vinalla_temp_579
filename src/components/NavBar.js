import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Your Application Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <Nav.Link href="#job-application">Application</Nav.Link>

          <NavDropdown title="Recap" id="basic-nav-dropdown">
              <NavDropdown.Item href="#summary">Summary</NavDropdown.Item>
              <NavDropdown.Item href="#notes-manager">
                Recap Note
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#news-area">News</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;