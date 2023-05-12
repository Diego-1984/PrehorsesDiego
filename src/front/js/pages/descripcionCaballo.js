import React, {useContext, useState, useEffect} from "react";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import {useNavigate, useParams } from "react-router-dom";

const DescripcionCaballo = () => {

  const params = useParams();
	const {id} = params;
	const { store } = useContext(Context);
	const [actualPage, setActualPage] = useState();
  const navigate= useNavigate()

	useEffect(()=>{
		if(store.horse == 0) return;
		const actualInfo = store.horse.find((item)=>item.id == id);
		console.log(actualInfo);
		setActualPage(actualInfo);
	}, [params])

  return (
    <>
      <div className="container">
        <div className="card mt-3 border-0" style={{ maxwidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-7">
              <img
                src="https://img.freepik.com/foto-gratis/hermoso-caballo-marron-primer-plano-hocico-aspecto-lindo-melena-fondo-campo-corral-arboles-caballos-son-animales-maravillosos_639032-566.jpg?w=740&t=st=1681810671~exp=1681811271~hmac=45210fe48436757ec95dc233ee001b37fd52395ddce4143d4ee9bae56cd2fa6e"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <div className="row">
                  <h5 className="card-title d-flex justify-content-center">
                    Descripción
                  </h5>
                  <p className="card-text mt-5 ms-3 mb-5">
                    {actualPage?.descripcion}
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row align-items-end">
                    <button type="button" className="btn btn-outline-warning text-end" onClick={() => navigate('/private/mensajes')}>
                      Contacta con el Vendedor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container bg-black">
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
                  Descripcion
                </h5>
                <p className="card-text text-white">
                  {actualPage?.descripcion}
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
              <td>{actualPage?.precio}</td>
              <td>{actualPage?.provincia}</td>
              <td>{actualPage?.año_nacimiento}</td>
              <td>{actualPage?.capa}</td>
              <td>{actualPage?.alzada}</td>
              <td>{actualPage?.nivel_doma}</td>
              <td>{actualPage?.ganaderia}</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  );
};

export default DescripcionCaballo;
