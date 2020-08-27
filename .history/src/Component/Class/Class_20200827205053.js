import {React, useState} from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import Cart from '../Cart/Cart'
import Course from '../Course/Course'
import fakeData from '../../fakeData'
const Class = () => {
  const [courses, setCourses] = UseState(fakeData);
  console.log(fakeData);
  return (
    <div>
      <Container>
  <Row>
    <Col sm={8}>
    
    {
                        courses.map(pd =>
                            <Course 
                            handleAddCourse = {handleAddCourse}
                            course={pd}></Course>
                        )
                    }

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