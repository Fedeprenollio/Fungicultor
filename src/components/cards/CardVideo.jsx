import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const CardVideo = ({URL}) => {
  return (
    <Card className='col mx-auto  ' style={{ maxWidth: '18rem' }}>
   <video controls src={URL} frameborder={URL}></video>
    <Card.Body >
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}
