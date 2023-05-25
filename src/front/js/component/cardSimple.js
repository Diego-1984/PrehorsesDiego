import React from "react";
import { Link } from "react-router-dom"

const CardSimple = ({item}) => {
  return (
    <>
    <div className="card-wrapper">
      <div className="card-container">
        <div className="card-image-container">
          <img href ="#" src ={item.img} />
        </div>    
        <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
              <h5>{item.nombre}</h5>
              <h5>{item.precio}€</h5>
            </div>
            <p>Ganadería: {item.ganaderia}</p>
            <p>Provincia: {item.provincia}</p>
            <Link className="btn btn-outline-dark mt-3" to={`/descripcion/${item.id}`}>
              Más Información
            </Link>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default CardSimple;