import React, { useState } from "react";
import mesas from "./ArrayMesas";
import CardMesa from "./Mesa"
import './estilos.css';




function App() {

const listaMesas = mesas.map(mesa => {
  return <CardMesa id={mesa.id} capacidad={mesa.capacidad} bajoTecho={mesa.bajoTecho} />
})
  return (
    <div className="App">
      <h1>React Proyecto</h1>
      <div className="contenedor">
        <h2>Lista de mesas:</h2>
        {listaMesas}
      </div>
    </div>
  );
  
}

export default App
