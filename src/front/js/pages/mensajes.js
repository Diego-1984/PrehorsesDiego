import React, { useState, useContext} from "react";
import { Context } from "../store/appContext";


export const Mensajes = () =>{
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="d-flex align-items-start mt-3">
                <div className="nav flex-column nav-pills me-1 mt-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#chat1" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Horze Luis</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#chat2" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Frijolito</button>
                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#chat3" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Hans Topo</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="chat1" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">

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
                                    <span className="align-center">Nombre del usuario propietario del caballo</span>
                                </div>
                            </div>
                            <div className="row mt-3 messages">
                                <span className="messagesSpan text-start">
                                    <p className="otro">Hola estoy interesado en el caballo, ¿está disponible?</p>
                                </span>
                                <span className="messagesSpan text-end">
                                    <p className="usuarioLogeado">Buenas! Sí, todavía está disponible</p>
                                </span>
                                <span className="messagesSpan text-start">
                                    <p className="otro">Genial. Me gustaría poder verlo y así comprobar que se encuentre en buen estado porque soy un super defensor de los animales</p>
                                </span>
                                <span className="messagesSpan text-end">
                                    <p className="usuarioLogeado">¿Es que no se fía de mí? Horze Luis es un caballo espléndido, bien cuidado, alimentado con hierba de las más altas y frondosas montañas! No encontrará otro igual, se lo aseguro</p>
                                </span>
                                <span className="messagesSpan text-start">
                                    <p className="otro">Bueno, bueno, no se ponga así buen hombre! Solo quería un paseíto con el caballo, tomar un poco el aire y ver cómo galopa</p>
                                </span>
                                <span className="messagesSpan text-end">
                                    <p className="usuarioLogeado">¿No será uno de esos frikis con rastas, no? Mire usted que a un caballo hay que tratarlo con respeto</p>
                                </span>
                                <span className="messagesSpan text-end">
                                    <p className="usuarioLogeado">No estoy dispuesto a dejar mi caballo en manos de cualquiera</p>
                                </span>
                            </div>
                            <div className="row messageToSend align-items-center border-top">
                                <div className="col justify-content-end mt-3 me-2">
                                    <div className="row">
                                        <div className="col-11 p-0">
                                            <input typeof="text" value=""></input>
                                        </div>
                                        <div className="col-1 p-0">
                                            <span className="material-symbols-outlined send">
                                            send
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="chat2" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">

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
                                    <span className="align-center">Nombre del usuario propietario del caballo</span>
                                </div>
                            </div>
                            <div className="row mt-3 messages">
                                <span className="messagesSpan text-start">
                                    <p className="otro">Buenas tardes, me interesaría ir a ver su caballo</p>
                                </span>
                                <span className="messagesSpan text-end">
                                    <p className="usuarioLogeado">Perfecto, ¿este fin de semana le vendría bien?</p>
                                </span>
                                <span className="messagesSpan text-start">
                                    <p className="otro">Sí, me manda su dirección para ir, por favor.</p>
                                </span>
                                <span className="messagesSpan text-end">
                                    <p className="usuarioLogeado">Calle Carmen de Burgos, Toledo, Toledo, España</p>
                                </span>
                                <span className="messagesSpan text-start">
                                    <p className="otro">Perfecto, gracias</p>
                                </span>
                            </div>
                            <div className="row messageToSend align-items-center border-top">
                                <div className="col justify-content-end mt-3 me-2">
                                    <div className="row">
                                        <div className="col-11 p-0">
                                            <input typeof="text" value=""></input>
                                        </div>
                                        <div className="col-1 p-0">
                                            <span className="material-symbols-outlined send">
                                            send
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="chat3" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
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
                                    <span className="align-center">Nombre del usuario propietario del caballo</span>
                                    </div>
                                </div>
                                <div className="row mt-3 messages">
                                    <span className="messagesSpan text-start">
                                        <p className="otro">Buenas tardes, quería consultarle algo: ¿el nombre de Hans topo...se debe a que el pobre caballo está ciego?</p>
                                    </span>
                                    <span className="messagesSpan text-end">
                                        <p className="usuarioLogeado">Hola, bueno, es algo complicado de explicar...</p>
                                    </span>
                                    <span className="messagesSpan text-start">
                                        <p className="otro">Inténtelo</p>
                                    </span>
                                    <span className="messagesSpan text-end">
                                        <p className="usuarioLogeado">Verá es que....Hans es un caballo muy especial. No me va a creer pero,... sabe programar</p>
                                    </span>
                                    <span className="messagesSpan text-start">
                                        <p className="otro">Programar...</p>
                                    </span>
                                    <span className="messagesSpan text-end">
                                        <p className="usuarioLogeado">Sí. Crea páginas web. Y muy bien además. Y claro, con el tiempo el pobre ha ido perdiendo algo de vista y....bueno, hubo que ponerle gafas.</p>
                                    </span>
                                    <span className="messagesSpan text-start">
                                        <p className="otro">Eeee...ya. Ajá..</p>
                                    </span>
                                    <span className="messagesSpan text-end">
                                        <p className="usuarioLogeado">De ahí su nombre....Hans Topo</p>
                                    </span>
                                    <span className="messagesSpan text-start">
                                        <p className="otro">Claro.....lógico</p>
                                    </span>
                                </div>
                                <div className="row messageToSend align-items-center border-top">
                                    <div className="col justify-content-end mt-3 me-2">
                                        <div className="row">
                                            <div className="col-11 p-0">
                                                <input typeof="text" value=""></input>
                                            </div>
                                            <div className="col-1 p-0">
                                                <span className="material-symbols-outlined send">
                                                send
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}