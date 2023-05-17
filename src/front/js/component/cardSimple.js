import React from "react";
import { useNavigate } from "react-router-dom";

const CardSimple = ({item}) => {

  const navigate= useNavigate()
  
  return (
    <>
      <div className="horseCardContainer">
        <div className="horseCard">
          <div className="horseCardImage">
            <img href ="#" src ="https://img.freepik.com/foto-gratis/hermoso-caballo-marron-primer-plano-hocico-aspecto-lindo-melena-fondo-campo-corral-arboles-caballos-son-animales-maravillosos_639032-566.jpg?w=740&t=st=1681810671~exp=1681811271~hmac=45210fe48436757ec95dc233ee001b37fd52395ddce4143d4ee9bae56cd2fa6e" />
          </div>
          <div className="horseCardContent">
            <div className="row justify-content-around mb-2">
              <div className="col me-3">
                <h5>{item.nombre}</h5>
              </div>
              <div className="col">
                <h5>{item.precio}€</h5>
              </div>
            </div>
            <p>Ganadería: {item.ganaderia}</p>
            <p>Provincia: {item.provincia}</p>
            <a href="#" className="btn btn-outline-dark mt-3" onClick={()=>{navigate(`/descripcion/${item.id}`)}}>
              Más Información
            </a>
          </div>
        </div>    
      </div>
    </>
  );
};

export default CardSimple;
