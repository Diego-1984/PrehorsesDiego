import React, { useContext, useEffect} from "react";
import { Context } from "../store/appContext";

export const UserAcountMyHorses = () => {
  const { store, actions } = useContext(Context);

  const getMessages = (horse) => {
    const usersInterested = new Set();
    horse.messages.forEach(({userInterestedId}) => usersInterested.add(userInterestedId));
    const messageArranged = Array.from(usersInterested)
      .map((userId) => horse.messages.filter(({userInterestedId}) => (userInterestedId === userId)));
    return messageArranged;
  }

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
                        />
                      </div>
                      <div className="col pt-3">
                        <p className="ms-5"><strong>{horse.nombre}</strong></p>
                        <p className="ms-5">{horse.precio}€</p>
                      </div>
                      <div className="col pt-3">
                        <p className="ms-5">{horse.fecha_nacimiento}</p>
                        <p className="ms-5">{horse.provincia}</p>
                      </div>
                      <div className="col-2 pt-3">
                        <p className="ms-5 p-0">{horse.capa}</p>
                        <p className="ms-5 p-0">{horse.alzada}</p>
                      </div>
                      <div className="col-4 pt-3">
                        <p className="ps-5">{horse.nivel_doma}</p>
                        <p className="ps-5">{horse.ganaderia}</p>
                      </div>
                    </div>
                    
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {getMessages(horse).map((messages => (<>
                      <div className="container text-center messagesBox mb-5 w-75">
                        <div className="row borber border-bottom messagesTitle">
                          <div className="col p-3 text-start">
                            <span className="material-symbols-outlined align-center me-2">
                              person
                            </span>
                            <span className="align-center">
                              {messages.userInterestedId}
                            </span>
                          </div>
                        </div>
                        <div className="row mt-3 messages">
                        {<div>
                            <div>{messages.map(message => (<p>{message.text}</p>))}</div>
                          </div>}
                        </div>
                        <div className="row messageToSend align-items-center border-top">
                          <div className="col justify-content-end mt-3 me-2">
                            <div className="row">
                              <div className="col-11 p-0">
                                <input type="message" onChange={(e)=>{setMessage({...message, text: e.target.value})}}></input>
                              </div>
                              <div className="col-1 p-0">
                                <span className="material-symbols-outlined send" onClick={()=>postMessage()}>
                                  send
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                    )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  );
};
