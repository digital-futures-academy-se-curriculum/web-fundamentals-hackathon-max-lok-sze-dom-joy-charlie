import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

import logo from "/df-star.png"

import "./SiteNavbar.css"

const SiteNavbar = () => {


  return (
    <>
      <Navbar expand="lg" className="text-light">
        <Container className="nav-container">
          <Navbar.Brand as={Link} to="/">
            <img className="nav-logo" src={logo}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="text-light" as={Link} to="/whats-on">What&apos;s On</Nav.Link>
              <Nav.Link className="text-light" as={Link} to="/sign-up">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default SiteNavbar