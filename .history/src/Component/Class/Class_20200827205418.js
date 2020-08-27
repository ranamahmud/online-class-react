import { React, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import Cart from '../Cart/Cart'
import Course from '../Course/Course'
import fakeData from '../../fakeData'
const Class = () => {
  const [courses, setCourses] = useState(fakeData);
  console.log(fakeData);
  const [cart, setCart] = useState([])


  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>



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