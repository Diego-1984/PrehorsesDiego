import React, { useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import Chat from "../component/chat";

export const UserAcountMyHorses = () => {
  const { store, actions } = useContext(Context);

  const getMessages = (horse) => {
    const usersInterested = new Set();
    horse.messages.forEach(({userInterestedId}) => usersInterested.add(userInterestedId));
    return Array.from(usersInterested)
        .map((userInterestedId) =>  ({
          userInterestedId,
          messages: horse.messages.filter(({userInterestedId: messageUserInterestedId}) => (userInterestedId === messageUserInterestedId))
        }))
  }

  useEffect(() => {
    const getHorses = async() =>{
      await actions.clearHorses();
      await actions.getMyHorses();
    }
    getHorses();
  }, []);

  const getDate = (now) => {
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    return year + '/' + month + '/' + date + 'T' + hours + ':' + min + ':' + sec;
  }
  const postUserOwnerMessage = async(horse, message, userInterestedId) =>{
    const {id: horseId, user_id: userOwnerId} = horse
    await actions.postUserOwnerMessage(message.text, horseId, userInterestedId, getDate(new Date()))
    await actions.getMyHorses();
  }

  return (
    <div className="container-fluid m-0">
      
        {store.horses.map((horse) =>{
          return (
            <div className="accordion" id="accordionExample">
              <div className="accordion-item mt-2">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <div className="row">
                      <div className="col">
                        <img
                          src={horse.img}
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
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {getMessages(horse).map(({userInterestedId, messages}) => (<>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target={`#tab-${userInterestedId}-${horse.id}`} type="button" role="tab"
                            >{messages[0].user_interested.name}</button>
                          </li>
                        </>))}
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        {getMessages(horse).map(({userInterestedId, messages}, index) => (<>
                          <div className="tab-pane fade show" id={`tab-${userInterestedId}-${horse.id}`} role="tabpanel" tabIndex={index}>
                            <Chat horse={horse} messages={messages} userInterestedId={userInterestedId} postMessage={postUserOwnerMessage}/>
                          </div>
                        </>))}
                      </div>
                    </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  );
};
