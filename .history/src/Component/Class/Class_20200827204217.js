import {React,useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap'
import Course from '../Course/Course'
import Cart from '../Cart/Cart'
import fakeData from '../../fakeData'

const Class = () => {
    // const [courses, setCourses] = useState(fakeData);
    // console.log(courses);
    // const [cart, setCart] = useState([])

    // const handleAddCourse = (course) => {
    //     console.log('course added',course);
    //     const newCart = [...cart, course]
    //     setCart(newCart)
    // }
    return (
        <Row>
          {/* <Col sm={8}>
          <ul>
                 
                </ul>
          </Col> */}
          <Col sm={4}>

            <Cart></Cart>
          </Col>
        </Row>
    );
};

export default Class;