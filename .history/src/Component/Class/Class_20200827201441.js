import React from 'react';
import {Row,Col} from 'react-bootstrap'
import Course from './courses'
const Class = () => {
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