import {React, useState} from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import Cart from '../Cart/Cart'
import Course from '../Course/Course'
import fakeData from '../../fakeData'
const Class = () => {
  const [courses, setCourses] = UseState(fakeData);
  console.log(fakeData);
  const [cart, setCart] = useState([])

  const handleAddCourse = (course) => {
    console.log('product added',course);
    const newCart = [...cart, course]
    setCart(newCart)
}
  return (
    <div>
      <Container>
  <Row>
    <Col sm={8}>
    
    {
                        courses.map(cr =>
                            <Course 
                            handleAddCourse = {handleAddCourse}
                            course={cr}></Course>
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