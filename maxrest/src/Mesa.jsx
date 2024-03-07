import React, { useState } from "react";
import { Link } from "react-router-dom";


function CardMesa({id,capacidad,bajoTecho}){

    const [botonEstado, setBotonEstado] = useState({
        text: "Disponible",
        color: "blue",
    });

    const [botonEstadoAnterior,setBotonEstadoAnterior] = useState(botonEstado);

   
    const handleClick = () => {
        if (botonEstado.text === "Ocupado"){
          setBotonEstado(botonEstadoAnterior)
        } else {
            setBotonEstado({
                text: "Ocupado",
                color: "Red",
                fontColor: "white",
            });
            setBotonEstadoAnterior(botonEstado)
        }
        
    };

  return (
    <div className="card-mesa">
        <h3>Id de mesa: {id}</h3>
        <p>Capacidad: {capacidad}</p>
        <p>Bajo Techo: {bajoTecho ? "Sí" : "No"}</p>
        <button 
        disabled={botonEstado.disabled}
        onClick={handleClick}
        style={{ backgroundColor: botonEstado.color, color: botonEstado.fontColor }}
        >
        {botonEstado.text}
        </button>
        <button>
            <Link to={`/pago/${id}`}>Pagar</Link>
        </button>
    </div>
    );
}

export default CardMesa;