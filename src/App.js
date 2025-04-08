import React, { useState } from "react";
import ListaCarti from "./listaCarti";
import Adaug from "./Adaug.jsx";
import Container from "react-bootstrap/Container";

function App() {
  const [lista, setLista] = useState([]);

  const adaug = (carte) => {
    carte.id = lista.length + 1;
    setLista([...lista, carte]);
  };

  const stil = {
    container: { marginTop: "20px" },
  };

  return (
    <Container style={stil.container}>
      <h1 style={{ textAlign: "center" }}>Carti pentru copii</h1>
      <ListaCarti listaCarti={lista} />
      <Adaug transmit={adaug} />
    </Container>
  );
}

export default App;
