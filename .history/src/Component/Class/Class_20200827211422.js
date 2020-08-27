import React from 'react';
import Cart from '../Cart/Cart'
import {Container, Col, Row} from 'react-bootstrap'
import Course from '../Course/Course'
import fakeData from '../../fakeData/FakeData'
import { useState } from 'react'

const Class = () => {
  const [courses, setCourses] = useState(fakeData);
  console.log(fakeData);
  return (
    <Container>
  <Row>
    <Col sm={8}>
      <ul>
        {
         courses.map(pd =>
          <Product 
          handleAddProduct = {handleAddProduct}
          course={pd}></Product>
      )
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