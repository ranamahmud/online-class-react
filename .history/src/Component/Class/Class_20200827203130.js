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
          <ul>
                    {
                        courses.map(course =>
                            <Course 
                            handleAddProduct = {handleAddProduct}
                            product={pd}></Course>
                        )
                    }
                </ul>
          </Col>
          <Col sm={4}>

            <Cart></Cart>
          </Col>
        </Row>
    );
};

export default Class;