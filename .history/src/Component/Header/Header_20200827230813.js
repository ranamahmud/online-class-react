import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <Container id="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faUserGraduate} />
            Online Courses</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Courses</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search Courses" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;