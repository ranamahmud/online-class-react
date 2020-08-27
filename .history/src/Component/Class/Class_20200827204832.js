import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import Cart from '../Cart/Cart'
import Course from '../Course/Course'
const Class = () => {
  return (
    <div>
      <Container>
  <Row>
    <Col sm={8}>
    <ul>
      
    </ul>
    </Col>
    <Col sm={4}>
      <Cart></Cart>
    </Col>
  </Row>
  </Container>
    </div>
  );
};

export default Class;