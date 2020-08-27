import {React,useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap'
import Course from '../Course/Course'
import Cart from '../Cart/Cart'
import fakeData from '../../fakeData'

const Class = () => {
    const [courses, setCourses] = useState(fakeData);
    
    const [cart, setCart] = useState([])


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