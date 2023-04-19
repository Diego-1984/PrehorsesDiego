import React from "react";
import { Navbar } from "./navbar";
const CardAmpliada = () => {
  return (
    <>
      <Navbar />
      <div className="container bg-black">
        <div className="card mb-3 border-0" style={{ maxwidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-7 bg-black">
              <img
                src="https://img.freepik.com/foto-gratis/hermoso-caballo-marron-primer-plano-hocico-aspecto-lindo-melena-fondo-campo-corral-arboles-caballos-son-animales-maravillosos_639032-566.jpg?w=740&t=st=1681810671~exp=1681811271~hmac=45210fe48436757ec95dc233ee001b37fd52395ddce4143d4ee9bae56cd2fa6e"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-5 bg-black">
              <div className="card-body bg-black">
                <h5 className="card-title text-white d-flex justify-content-center">
                  Descripción
                </h5>
                <p className="card-text text-white">
                  Este joven semental lusitano es un caballo con una cabeza
                  fantástica, y una inmejorable aptitud para el trabajo. Con un
                  gran temperamento este lusitano nacido en 2019, es un caballo
                  de confianza y muy agradable montado. Con tres aires
                  correctos, es llamativo por su equilibrio, ritmo y cadencia.
                </p>
                <div className="Container d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-warning">
                    Contacta con el Vendedor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-borderless border-top text-warning">
          <thead>
            <tr>
              <th scope="col">Precio</th>
              <th scope="col">Ubicación</th>
              <th scope="col">Fecha de Nacimiento</th>
              <th scope="col">Capa</th>
              <th scope="col">Alzada</th>
              <th scope="col">Doma</th>
              <th scope="col">Ganaderia</th>
            </tr>
          </thead>
          <tbody>
            <tr className="Container text-white">
              <td>6.000</td>
              <td>Madrid</td>
              <td>2019</td>
              <td>Castaño</td>
              <td>1.66</td>
              <td>Iniciando Doma</td>
              <td>La Bellota</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CardAmpliada;
