import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/cvlanes-white.png'
import { useState } from 'react';

function ResponsiveNavbar() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }
  return (
    <Navbar sticky="top" className='brand-light-color-bg blur' expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} style={{ width: '50px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Portfolio" id="collasible-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              <NavDropdown.Item eventKey="4.1" href="/portfolio">My Works</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.2" href="/portfolio/collaboration">Collaboration Workflow Platform</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2" href="/portfolio/jobseeking">Job Seeking</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;