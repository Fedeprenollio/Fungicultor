import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <div className="container-fluid d-flex flex-column  flex-sm-row  prueba  ">
      {/* <h2 className="h2">Contact</h2> */}
      <div className="container-fluid ">
        <img
          className="img-fluid"
          src="https://res.cloudinary.com/dewegl2jr/image/upload/v1667050258/fungi/vector-cartero-dibujos-animados-cabeza-hongo-rojo-personaje-animado_193274-28406_x2e7pl.jpg"
          alt="cartero"
        />
      </div>

      <div className="container ">
        <ContactForm />
      </div>
    </div>
  );
};
