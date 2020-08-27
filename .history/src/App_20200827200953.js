import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import Course from '../src/Component/Course/Course'
import Cart from '../src/Component/Cart/Cart'
function App() {
  return (
    <Container>
      
      <Container>
        <Row>
          <Col sm={8}>
            <Course></Course>
          </Col>
          <Col sm={4}>

            <Cart></Cart>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;