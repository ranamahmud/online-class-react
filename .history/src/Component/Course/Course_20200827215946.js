import React from 'react';
import {Card, Button} from 'react-bootstrap';
const Course = (props) => {

    const { id, name, price, img } = props.course;

    return (
      <div class="col-sm-6">

        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h3>Author:</h3>
            <h3><small>Price: $</small></h3>
          </Card.Text>
          <Button variant="primary" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</Button>
        </Card.Body>
      </Card>
      </div>
    );
};

export default Course;