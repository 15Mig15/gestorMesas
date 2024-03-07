import React, { useState } from 'react';
import './estilos.css';


function EntornoPago() {
    const [numeroTarjeta, setNumeroTarjeta] = useState("");
    const [fechaVencimiento, setFechaVencimiento] = useState("");
    const [cvv, setCvv] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [mostrarFormulario, setMostrarFormulario] = useState(true);

  
    const handleSubmit = (event) => {
      event.preventDefault();
      setMensaje("El pago se ha procesado correctamente.");
    };

    const handleMostrarFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
      };
    
  
return (
    <div>
        <button onClick={handleMostrarFormulario}>
          {mostrarFormulario ? 'Ocultar formulario' : 'Mostrar Formulario'}
        </button>
{mostrarFormulario && (
      <form onSubmit={handleSubmit} className="formulario-pago">
        <h2>Pago con Tarjeta</h2>
        <label>
          Número de Tarjeta:
          <input
            type="text"
            value={numeroTarjeta}
            onChange={(event) => setNumeroTarjeta(event.target.value)}
          />
        </label>
        <label>
          Fecha de Vencimiento:
          <input
            type="text"
            value={fechaVencimiento}
            onChange={(event) => setFechaVencimiento(event.target.value)}
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
          />
        </label>
        <button type="submit">Pagar</button>
        {mensaje && <p>{mensaje}</p>}
      </form>
      )}
    </div>
  
    );
  }
  
  export default EntornoPago;