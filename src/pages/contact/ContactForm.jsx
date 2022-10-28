import React from "react";
import Form from "react-bootstrap/Form";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function ContactForm() {
  const navigate  = useNavigate()
  const [state, handleSubmit] = useForm("mgeqnrbe");
  if (state.succeeded) {
    setTimeout(()=>{
      navigate("/")

    },2000)
    return <p>Thanks for joining!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label htmlFor="email">Email Address</Form.Label>
        <Form.Control id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Form.Control as="textarea" id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
