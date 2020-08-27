import React from 'react';
import {Card, Button} from 'react-bootstrap';
const Course = (props) => {

    const { id, name,author, price, img } = props.course;

    return (
      <div class="col-sm">

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h3>Author: {author}</h3>
            <h3><small>Price: ${price}</small></h3>
          </Card.Text>
          <Button variant="primary" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</Button>
        </Card.Body>
      </Card>
      </div>
    );
};

export default Course;