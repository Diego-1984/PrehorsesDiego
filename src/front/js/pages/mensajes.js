import React, { useState, useContext} from "react";
import { Context } from "../store/appContext";


export const Mensajes = () =>{
    const { store, actions } = useContext(Context);

    return (
        <div>
            {/* <div>
                <button onClick={() => actions.getGanaderia()}>Traete las ganaderias</button>
                <div>{store.ganaderia.map((item)=>{
                    return (
                        <p>{item.nombre}</p>
                    )
                })}</div>
            </div> */}
            <div>
                <button onClick={() => actions.getMessages(1)}>Traete los mensajes</button>
                <div>{store.messages.map((item)=>{
                    return (
                        <p>{item.text}</p>
                    )
                })}</div>
            </div>
            
        </div>
    )
}