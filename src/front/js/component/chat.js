import React, {useState} from "react";

const Chat = ({horse, messages, postMessage}) => {

  const [message, setMessage] = useState([]);

  return (
    <>
      <div className="container text-center messagesBox">
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
        {<div>
            <div>{messages.map((item)=>{
              return (
                <p>{item.text}</p>
              )
           })}</div>
          </div>}
        </div>
        <div className="row messageToSend align-items-center border-top">
          <div className="col justify-content-end mt-3 me-2">
            <div className="row">
              <div className="col-11 p-0">
                <input type="message" onChange={(e)=>{setMessage({...message, text: e.target.value})}}></input>
              </div>
              <div className="col-1 p-0">
                <span className="material-symbols-outlined send" onClick={()=>postMessage(horse, message)}>
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
