import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";

const Chat = ({horse}) => {

  const [message, setMessage] = useState([]);
  const {actions} = useContext(Context);

  const getDate = (now) => {
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    return year + '/' + month + '/' + date + 'T' + hours + ':' + min + ':' + sec;
  }

  const postMessage = async() =>{
    const {id: horseId, user_id: userOwnerId} = horse
    console.log(horseId)
    await actions.postMessage(message.text, horseId, userOwnerId, getDate(new Date()))
    await actions.getMessages(horseId)
  }


  return (
    <>
      <div className="container text-center messagesBox">
        {/* <div>
                Esta es la ruta para ver los mensajes
                <button onClick={() => actions.getMessages(1)}>Traete los mensajes</button>
                    <div>{store.messages.map((item)=>{
                        return (
                            <p>{item.text}</p>
                        )
                    })}</div>
                            </div> */}
        <div className="row borber border-bottom messagesTitle">
          <div className="col p-3 text-start">
            <span className="material-symbols-outlined align-center me-2">
              person
            </span>
            <span className="align-center">
              Nombre del usuario propietario del caballo
            </span>
          </div>
        </div>
        <div className="row mt-3 messages">
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
  );
};

export default Chat;
