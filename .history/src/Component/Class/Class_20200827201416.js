import React from 'react';
import {Row} from 'react-bootstrap'
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