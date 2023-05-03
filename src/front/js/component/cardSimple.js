import React from "react";

const CardSimple = () => {
  return (
    <>
      <div className="container p-5">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://img.freepik.com/foto-gratis/hermoso-caballo-marron-primer-plano-hocico-aspecto-lindo-melena-fondo-campo-corral-arboles-caballos-son-animales-maravillosos_639032-566.jpg?w=740&t=st=1681810671~exp=1681811271~hmac=45210fe48436757ec95dc233ee001b37fd52395ddce4143d4ee9bae56cd2fa6e"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body bg-black border border-warning">
            <div className="row">
              <h7 className="card-title  d-flex justify-content-start col-6 text-white p-1 ">
                Nombre
              </h7>
              <h9 className="card-title d-flex justify-content-center col-6 text-white p-1">
                Fecha
              </h9>
            </div>
            <p className="card-text text-white"></p>
            <p className="card-text text-white ">Ganaderia</p>
            <a href="#" className="btn btn-outline-warning">
              Más Información
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSimple;
