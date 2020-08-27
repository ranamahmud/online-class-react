import React from 'react';
import Cart from '../Cart/Cart'
import {Container, Col, Row} from 'react-bootstrap'
import Course from '../Course/Course'
const Class = () => {
  return (
    <Container>
  <Row>
    <Col sm={8}>
      <ul>
        {
          <Course></Course>
        }
      </ul>
    </Col>
    <Col sm={4}>
      <Cart></Cart>
    </Col>
  </Row>
  </Container>
  );
};

export default Class;