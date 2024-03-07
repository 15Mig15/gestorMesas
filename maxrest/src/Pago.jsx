import React, { useState } from "react";
import mesas from "./ArrayMesas";
import { useParams } from "react-router-dom";
import EntornoPago from "./EntornoPago";

function Pago() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);


  const { idMesa } = useParams();
    const mesa = mesas.find((mesa) => mesa.id === parseInt(idMesa));
  
    const [monto, setMonto] = useState(0);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      //detalles del pago al servidor
    };
  
    return (
      <div>
        <h2>Detalles de pago</h2>
        <p>Id de mesa: {mesa.id}</p>
        <form onSubmit={handleSubmit}>
          <label>
            Monto:{" "}
            <input
              type="number"
              value={monto}
              onChange={(event) => setMonto(event.target.value)}
            />
          </label>
        </form>
        <button onClick={() => setMostrarFormulario(true)}>Pagar con Tarjeta</button>
      {mostrarFormulario && <EntornoPago />}


      </div>
    );
  }
  
  export default Pago;