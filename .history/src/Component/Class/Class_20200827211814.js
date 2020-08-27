import React from 'react';
import Cart from '../Cart/Cart'
import {Container, Col, Row,CardGroup} from 'react-bootstrap'
import Course from '../Course/Course'
import fakeData from '../../fakeData/FakeData'
import { useState } from 'react'

const Class = () => {
  const [courses, setCourses] = useState(fakeData);
  console.log(fakeData);

  const [cart, setCart] = useState([])
  const handleAddCourse = (product) => {
      console.log('product added',product);
      const newCart = [...cart, product]
      setCart(newCart)
  }
  return (
    <Container>
  <Row>
    <Col sm={8}>
      <ul>
        {
         courses.map(cr =>
          <Course 
          handleAddCourse = {handleAddCourse}
          course={cr}></Course>
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