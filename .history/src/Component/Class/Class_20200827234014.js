import React from 'react';
import Cart from '../Cart/Cart'
import { Container, Col, Row } from 'react-bootstrap'
import Course from '../Course/Course'
import fakeData from '../../fakeData/FakeData'
import { useState } from 'react'

const Class = () => {
  const [courses, setCourses] = useState(fakeData);
  console.log(fakeData);

  const [cart, setCart] = useState([])
  const handleAddCourse = (course) => {
    console.log('product added', course);
    const newCart = [...cart, course]
    setCart(newCart)
  }
  return (
    <Container>
      <Row>
        <Col sm={8}>

          <div class="row">

            {

              courses.map(cr =>
                <Course
                  handleAddCourse={handleAddCourse}
                  course={cr}></Course>
              )
            }
          </div>
        </Col>
        <Col sm={4}>
          <Cart cart={cart}></Cart>
        </Col>
      </Row>
    </Container>
  );
};

export default Class;