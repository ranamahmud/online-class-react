import React from 'react';
import {Card, Button} from 'react-bootstrap';
const Course = (props) => {

    const { id, name, price, img,handleAddCourse } = props.course;

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h3>Author:</h3>
            <h3><small>Price: $</small></h3>
          </Card.Text>
          <Button variant="primary" onClick={() => handleAddCourse(props.course)}>Enroll Now</Button>
        </Card.Body>
      </Card>
    );
};

export default Course;