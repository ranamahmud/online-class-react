import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Form,FormControl,Button,Container,Row,Col } from 'react-bootstrap';
import Course from '../src/Component/Course/Course'
import Cart from '../src/Component/Cart/Cart'
function App() {
  return (
    <Container>
      <Container>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Online Courses</Navbar.Brand>
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
      <Container>
  <Row>
    <Col sm={8}>
      <Course></Course>
    </Col>
    <Col sm={4}>

      
    </Col>
  </Row>
      </Container>
    </Container>
  );
}

export default App;