import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const UserAcountMyHorses = () => {
  const { store, actions } = useContext(Context);

  useEffect(async () => {
    await actions.clearHorses();
    await actions.getMyHorses();
  }, []);

  return (
    <div className="container m-0">
      
        {store.horses.map((horse) =>{
          return (
            <div className="accordion" id="accordionExample">
              <div className="accordion-item mt-2">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <div className="row">
                      <div className="col">
                      <img
                        src="https://img.freepik.com/foto-gratis/hermoso-caballo-marron-primer-plano-hocico-aspecto-lindo-melena-fondo-campo-corral-arboles-caballos-son-animales-maravillosos_639032-566.jpg?w=740&t=st=1681810671~exp=1681811271~hmac=45210fe48436757ec95dc233ee001b37fd52395ddce4143d4ee9bae56cd2fa6e"
                        className="img-thumbnail rounded float-start" style={{width: 200+'px'}}
                        alt="..."
                      /><p className="ms-5">{horse.nombre}</p>
                      </div>
                    </div>
                    
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <ul>
                      <li> {JSON.stringify(horse.messages)}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  );
};
