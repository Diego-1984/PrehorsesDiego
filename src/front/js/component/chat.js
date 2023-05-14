import React from "react";

const Chat = () => {
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
          <span className="messagesSpan text-start">
            <p className="otro">
              Hola estoy interesado en el caballo, ¿está disponible?
            </p>
          </span>
          <span className="messagesSpan text-end">
            <p className="usuarioLogeado">
              Buenas! Sí, todavía está disponible
            </p>
          </span>
          <span className="messagesSpan text-start">
            <p className="otro">
              Genial. Me gustaría poder verlo y así comprobar que se encuentre
              en buen estado porque soy un super defensor de los animales
            </p>
          </span>
          <span className="messagesSpan text-end">
            <p className="usuarioLogeado">
              ¿Es que no se fía de mí? Horze Luis es un caballo espléndido, bien
              cuidado, alimentado con hierba de las más altas y frondosas
              montañas! No encontrará otro igual, se lo aseguro
            </p>
          </span>
          <span className="messagesSpan text-start">
            <p className="otro">
              Bueno, bueno, no se ponga así buen hombre! Solo quería un paseíto
              con el caballo, tomar un poco el aire y ver cómo galopa
            </p>
          </span>
          <span className="messagesSpan text-end">
            <p className="usuarioLogeado">
              ¿No será uno de esos frikis con rastas, no? Mire usted que a un
              caballo hay que tratarlo con respeto
            </p>
          </span>
          <span className="messagesSpan text-end">
            <p className="usuarioLogeado">
              No estoy dispuesto a dejar mi caballo en manos de cualquiera
            </p>
          </span>
        </div>
        <div className="row messageToSend align-items-center border-top">
          <div className="col justify-content-end mt-3 me-2">
            <div className="row">
              <div className="col-11 p-0">
                <input typeof="text" value="" onChange></input>
              </div>
              <div className="col-1 p-0">
                <span className="material-symbols-outlined send" onClick>
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
