import React, { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { store } from "../../store/store";

export const ProductDetail = () => {
  const { id } = useParams();
  const product = store.find((p) => p.id.toString() === id);
  console.log(product);

  function addCar(e) {
    console.log(e.target.value)
     localStorage.setItem("userID", e.target.value)
     const ls = localStorage.getItem("userID")
    console.log(ls);
  }

  return (
    <div className="container-fluid d-flex bg-color--ligth">
      <div
        className="container-fluid img-fluid m-3  "
        style={{ height: "600" }}
      >
        <img
          className="rounded mx-auto d-block my-3"
          style={{ maxHeight: "500px" }}
          src={product?.img}
          alt=""
        />
      </div>
      <div className="container-fluid mt-3">
        <h2>{product?.name}</h2>
        <h3>${product?.price}</h3>
        <p className="me-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem atque
          voluptatem, a doloribus voluptas temporibus mollitia nulla? Animi
          quos, aliquam, nostrum aut dignissimos sunt recusandae hic excepturi,
          tempore numquam perferendis!
        </p>

   

        <ListGroup variant="flush" numbered>
          <ListGroup.Item>Incubación: {product.incubacio}</ListGroup.Item>
          <ListGroup.Item>Inducción: {product.induccion}</ListGroup.Item>
          <ListGroup.Item>Desarrollo de basidiomas: {product.desarrolloDeBasidiomas}</ListGroup.Item>
          <ListGroup.Item>Sustrato: {product.sustrato}</ListGroup.Item>
          
        </ListGroup>


        <Button value={product.id} onClick={addCar}>Agregar</Button>
      </div>
    </div>
  );
};
