import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export const CardStore = ({ product }) => {
  return (
    

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <h2>Precio: ${product.price}</h2>
          <p>Categoria: {product.category}</p>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
   
  );
};
