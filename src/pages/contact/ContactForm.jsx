import React from "react";
import Form from "react-bootstrap/Form";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function ContactForm() {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mgeqnrbe");
  if (state.succeeded) {
    Swal.fire("Gracias por contactarnos. Pronto te responderemos.");

    setTimeout(() => {
      navigate("/");
    }, 2000);
    return;
  }
  return (
    
     
     
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label for="full-name">Tu nombre</Form.Label>
          <Form.Control
          className="mb-3"
            type="text"
            name="name"
            id="full-name"
            placeholder="Tu nombre"
            required=""
          />
          <Form.Label htmlFor="email">Tu direccion de email</Form.Label>
          <Form.Control
           className="mb-3"
            id="email"
            type="email"
            name="email"
            placeholder="ejemplo@ejemplo.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Form.Label htmlFor="email">Tu mensaje</Form.Label>

          <Form.Control
           className="mb-3"
            as="textarea"
            id="message"
            name="message"
            placeholder="Tu mensaje"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button type="submit" disabled={state.submitting}>
            Enviar
          </Button>
        </Form.Group>
      </Form>
     
    

  
  );
}
