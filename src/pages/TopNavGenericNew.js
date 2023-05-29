import logo from '../img/cvlanes-white.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar sticky="top" className='brand-light-color-bg blur' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} style={{ width: '50px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown eventKey="1" title="Portfolio" id="collasible-nav-dropdown">
              <NavDropdown.Item style={{marginTop:'8px'}} eventKey="1.1" href="/portfolio">Portfolio Home</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="1.2" href="/portfolio/collaboration">Collaboration Workflow Platform</NavDropdown.Item>
              <NavDropdown.Item eventKey="1.3" href="/portfolio/jobseeking">Job Seeking</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
