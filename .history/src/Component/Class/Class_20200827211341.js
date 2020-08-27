import React from 'react';
import Cart from '../Cart/Cart'
import {Container, Col, Row} from 'react-bootstrap'
import Course from '../Course/Course'
import fakeData from '../../fakeData/FakeData'
import { useState } from 'react'

const Class = () => {
  const [courses, setCourses] = useState(first10);

  return (
    <Container>
  <Row>
    <Col sm={8}>
      <ul>
        {
        //  products.map(pd =>
        //   <Product 
        //   handleAddProduct = {handleAddProduct}
        //   product={pd}></Product>
      // )
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