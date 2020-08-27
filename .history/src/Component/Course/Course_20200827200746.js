import React from 'react';
import {Card, Button} from 'react-bootstrap';
const Course = () => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Author:
          </Card.Text>
          <Button variant="primary">Enroll Now</Button>
        </Card.Body>
      </Card>
    );
};

export default Course;