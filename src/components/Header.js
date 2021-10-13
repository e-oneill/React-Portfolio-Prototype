import React from "react";
import {
  Navbar,
  Button,
  Form,
  FormControl,
  Nav,
  NavDropdown
} from "react-bootstrap";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="navbar-background" expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/home" className="navbar-name">
          Eoin O'Neill{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/work" className="navbar-text">
              Work
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="navbar-text">
              Contact Me
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="navbar-text">
              About Me
            </Nav.Link>
          </Nav>
          <div className="navbar-icons">
            <a href="https://github.com/e-oneill" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                size={"lg"}
                className="navbar-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/eoin-o-neill-785768134/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size={"lg"}
                className="navbar-icon"
              />
            </a>
          </div>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}

            <Button
              href="IT_CV.pdf"
              variant="success"
              size="large"
              target="_blank"
            >
              CV/Resume
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
