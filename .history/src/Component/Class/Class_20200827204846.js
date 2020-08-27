import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import Cart from '../Cart/Cart'
import Course from '../Course/Course'
import fakeData from '../../fakeData'
const Class = () => {
  return (
    <div>
      <Container>
  <Row>
    <Col sm={8}>
    {/* <Course></Course> */}
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