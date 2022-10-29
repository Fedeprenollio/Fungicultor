import React from "react";
import Form from "react-bootstrap/Form";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function ContactForm() {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mgeqnrbe");
  console.log(state);

  function sendMessage() {
    Swal.fire({
      title: "¿Seguro de enviar el mensaje?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, enviar!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (state.succeeded) {
          setTimeout(() => {
            navigate("/");
          }, 2000);

          Swal.fire("Enviado!", "Pronto estaremos contactandonos", "success");
        }
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        {/* <Form.Label for="full-name">Tu nombre</Form.Label> */}
        <Form.Control
          className="mb-3  rounded  form-control-plaintext border-bottom"
          type="text"
          name="name"
          id="full-name"
          placeholder="Tu nombre"
          required=""
        />
        {/* <Form.Label htmlFor="email">Tu direccion de email</Form.Label> */}
        <Form.Control
          className="mb-3 rounded form-control-plaintext border-bottom "
          id="email"
          type="email"
          name="email"
          placeholder="ejemplo@ejemplo.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />


        {/* <Form.Label htmlFor="email">Tu mensaje</Form.Label> */}
        <Form.Control
          className="mb-3 rounded form-control-plaintext border-bottom"
          as="textarea"
          rows={6}
          id="message"
          name="message"
          placeholder="Tu mensaje"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button type="submit" onClick={sendMessage} disabled={state.submitting}>
          Enviar
        </Button>
      </Form.Group>
    </Form>
  );
}
