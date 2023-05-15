import React, {useContext, useState, useEffect} from "react";
import Chat from "../component/chat";
import { Context } from "../store/appContext";
import {useParams } from "react-router-dom";
import ButtonContact from "../component/buttonContact";

const DescripcionCaballo = () => {

  const params = useParams();
	const {id} = params;
	const { store } = useContext(Context);
	const [actualPage, setActualPage] = useState();

  const [isChatShown, setIsChatShown] = useState(false);
  
  const datosCaballoConChat = {
    'width': 40+'%',
    'boxSizing': 'contentBox',
    'float': 'left'
  }
  const datosCaballoSinChat = {
    'width': 100+'%'
  }
	useEffect(()=>{
		if(store.horses.length == 0) return;
		const actualInfo = store.horses.find((item)=>item.id == id);
		console.log(actualInfo);
		setActualPage(actualInfo);
	}, [params])

  const horse = store.horses.find((item)=>item.id == id);

  return (
    <>
      <div className="container oneHorse">
        <div className="datosCaballo" style={isChatShown ? datosCaballoConChat : datosCaballoSinChat}>
          <div className="card mt-3 border-0">
            <div className="row g-0">
              <div className="col-md-6 w-50">
                <img
                  src="https://img.freepik.com/foto-gratis/hermoso-caballo-marron-primer-plano-hocico-aspecto-lindo-melena-fondo-campo-corral-arboles-caballos-son-animales-maravillosos_639032-566.jpg?w=740&t=st=1681810671~exp=1681811271~hmac=45210fe48436757ec95dc233ee001b37fd52395ddce4143d4ee9bae56cd2fa6e"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-6">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <p className="card-text p-2 mb-2">
                        {actualPage?.descripcion}
                      </p>
                    </div>
                    <div className="col-12 text-start pt-1">
                      <p className="card-text p-2 pb-2 fs-4 text">
                        {actualPage?.precio}€
                      </p>
                    </div>
                  </div>
                  {localStorage.getItem('token') ? <ButtonContact isChatShown={isChatShown} setIsChatShown={setIsChatShown} /> : null}
                </div>
              </div>
            </div>
            <div className="row">
              {isChatShown ?
              <><div className="col-4 mt-3">
                <div className="d-flex descriptionIcons w-50">
                  <span className="material-symbols-outlined me-3">
                    badge
                    </span>
                    <p>{actualPage?.nombre}</p>
                </div>
                <div className="d-flex descriptionIcons w-50">
                    <span className="material-symbols-outlined me-3">
                    cake
                    </span>
                    <p>{actualPage?.fecha_nacimiento}</p>
                </div>
                <div className="d-flex w-50 descriptionIcons">
                  <span className="material-symbols-outlined me-3">
                  transgender
                  </span>
                  <p>{actualPage?.sexo}</p>
                </div>
                <div className="d-flex w-50 descriptionIcons">
                  <span className="material-symbols-outlined me-3">
                  map
                  </span>
                  <p>{actualPage?.provincia}</p>
                </div>
                </div>
                <div className="col-8 mt-3">
                  <div className="d-flex descriptionIcons">
                  <span className="material-symbols-outlined me-3">
                  palette
                  </span>
                  <p>{actualPage?.capa}</p>
                  </div>
                  <div className="d-flex descriptionIcons">
                  <span className="material-symbols-outlined me-3">
                  height
                  </span>
                  <p>{actualPage?.alzada}</p>
                  </div>
                  <div className="d-flex descriptionIcons">
                  <span className="material-symbols-outlined me-3">
                  military_tech
                  </span>
                  <p>{actualPage?.nivel_doma}</p>
                  </div>
                  <div className="d-flex descriptionIcons">
                  <span className="material-symbols-outlined me-3">
                  fence
                  </span>
                  <p>{actualPage?.ganaderia}</p>
                  </div>
                </div></> : <>
                  <div className="col mt-3">
                    <div className="d-flex descriptionIcons w-50">
                      <span className="material-symbols-outlined me-3">
                        badge
                        </span>
                        <p>{actualPage?.nombre}</p>
                    </div>
                    <div className="d-flex descriptionIcons w-50">
                      <span className="material-symbols-outlined me-3">
                      cake
                      </span>
                      <p>{actualPage?.fecha_nacimiento}</p>
                  </div>
                  </div>
                  <div className="col mt-3">
                    <div className="d-flex w-50 descriptionIcons">
                      <span className="material-symbols-outlined me-3">
                      transgender
                      </span>
                      <p>{actualPage?.sexo}</p>
                    </div>
                    <div className="d-flex w-50 descriptionIcons">
                      <span className="material-symbols-outlined me-3">
                      map
                      </span>
                      <p>{actualPage?.provincia}</p>
                    </div>
                  </div>
                  <div className="col p-0 mt-3">
                    <div className="d-flex descriptionIcons">
                      <span className="material-symbols-outlined me-3">
                      palette
                      </span>
                      <p>{actualPage?.capa}</p>
                    </div>
                    <div className="d-flex descriptionIcons">
                      <span className="material-symbols-outlined me-3">
                      height
                      </span>
                      <p>{actualPage?.alzada}</p>
                    </div>
                  </div>
                  <div className="col p-0 mt-3">
                    <div className="d-flex descriptionIcons">
                      <span className="material-symbols-outlined me-3">
                      military_tech
                      </span>
                      <p>{actualPage?.nivel_doma}</p>
                    </div>
                    <div className="d-flex descriptionIcons">
                      <span className="material-symbols-outlined me-3">
                      fence
                      </span>
                      <p>{actualPage?.ganaderia}</p>
                    </div>
                  </div>
                </> }
            </div>
          </div>
        </div>
        <div className="chat">
          {isChatShown ? < Chat horse={horse}/> : null}
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
