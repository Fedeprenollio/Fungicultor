import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const [email, setEmail] = useState({});
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
  }
console.log(email.asunto)
  function submit(e) {
    console.log(e.target.value);
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  }



  return (
    <div className="container-fluid d-flex-column prueba ">
      <div className="h2">Contact</div>
      <ContactForm/>
    </div>
  );
};
