import React, { useContext, useState, useEffect } from "react";
import Chat from "../component/chat";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import ButtonContact from "../component/buttonContact";

const DescripcionCaballo = () => {
  const params = useParams();
  const { id } = params;
  const { store, actions } = useContext(Context);
  const [actualPage, setActualPage] = useState();

  const [isChatShown, setIsChatShown] = useState(false);

  const getDate = (now) => {
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    return year + '/' + month + '/' + date + 'T' + hours + ':' + min + ':' + sec;
  }

  const postMessage = async(horse, message) =>{
    const {id: horseId, user_id: userOwnerId} = horse
    await actions.postMessage(message.text, horseId, userOwnerId, getDate(new Date()))
    await actions.getMessages(horseId)
  }

  
  const datosCaballoSinChat = {
    width: 100 + "%",
  };
  useEffect(() => {
    if (store.horses.length == 0) return;
    const actualInfo = store.horses.find((item) => item.id == id);
    setActualPage(actualInfo);
  }, [params]);

  useEffect(() => {
    actions.clearMessages();
    actions.getMessages(id);
  }, []);

  const horse = store.horses.find((item) => item.id == id);

  return (
    <>
      <div className="container oneHorse">
        <div
          className="datosCaballo"
          style={datosCaballoSinChat}
        >
          <div className="card mt-3 border-0">
            <div className="row g-0">
              <div className="col-md-6 w-50">
                <img
                  src={horse.img}
                  className="img-fluid rounded-start my-4"
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
                  {localStorage.getItem("token") ? (
                    <ButtonContact
                      isChatShown={isChatShown}
                      setIsChatShown={setIsChatShown}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
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
            </div>
          </div>
        </div>
        <div className="chat">
          {isChatShown ? <Chat horse={horse} messages={store.messages} postMessage={postMessage}/> : null}
          {isChatShown && <button className="chat_close-button" onClick={() => setIsChatShown(false)}>X</button>}
        </div>
      </div>
    </>
  );
};

export default DescripcionCaballo;















