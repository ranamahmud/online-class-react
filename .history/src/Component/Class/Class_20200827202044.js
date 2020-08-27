import {React,useState} from 'react';
import {Row,Col} from 'react-bootstrap'
import Course from '../Course/Course'
import Cart from '../Cart/Cart'
const Class = () => {
    const [courses, setCourses] = UseState([]);

    return (
        <Row>
          <Col sm={8}>
            <Course></Course>
          </Col>
          <Col sm={4}>

            <Cart></Cart>
          </Col>
        </Row>
    );
};

export default Class;