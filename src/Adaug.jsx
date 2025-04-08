import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Adaug = (props) => {
  const [coperta, setCoperta] = useState("");
  const [titlu, setTitlu] = useState("");
  const [descriere, setDescriere] = useState("");
  const [autor, setAutor] = useState("");
  const [pret, setPret] = useState("");

  const stil = {
    marginTop: "2rem",
    backgroundColor: "#ddd",
    padding: "20px",
    width: "750px",
  };

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const carte = {
      coperta: `imagini/${coperta}`,
      titlu, //  scriere simplificata pentru titlu: titlu
      descriere,
      autor,
      pret,
    };
    props.transmit(carte); //  Transmit spre <App /> obiectul carte
    //  Golesc controalele formularului
    setCoperta("");
    setTitlu("");
    setDescriere("");
    setAutor("");
    setPret("");
  };

  return (
    <Container style={stil}>
      <Form onSubmit={tratezSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Titlul cărții:</Form.Label>
          <Form.Control
            type="text"
            value={titlu}
            onChange={(evt) => setTitlu(evt.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fișierul imagine:</Form.Label>
          <Form.Control
            type="text"
            value={coperta}
            onChange={(evt) => setCoperta(evt.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrierea cărții:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descriere}
            onChange={(evt) => setDescriere(evt.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Autor:</Form.Label>
          <Form.Control
            type="text"
            value={autor}
            onChange={(evt) => setAutor(evt.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Preț:</Form.Label>
          <Form.Control
            type="text"
            value={pret}
            onChange={(evt) => setPret(evt.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Memorează
        </Button>
      </Form>
    </Container>
  );
};
export default Adaug;
