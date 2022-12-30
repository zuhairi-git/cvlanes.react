import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/cvlanes-color.png'

function ContainerInsideExample() {
  return (
    <Navbar className="nav-sticky" expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#" className="navbar-brand">
            <img
              alt="Brand"
              src={logo}
              width="150"
              height="auto"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Nav className="navbar-nav ml-auto">
            <Nav.Link href="#home" className="nav-item nav-link active">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
            <Nav.Link href="#team">Social Media</Nav.Link>
            <Nav.Link href="#review">Recommendations</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;