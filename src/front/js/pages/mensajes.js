import React, { useState, useContext} from "react";
import { Context } from "../store/appContext";


export const Mensajes = () =>{
    const { store, actions } = useContext(Context);

    return (
        <div>
            Esta es la ruta para ver los mensajes
            <button onClick={() => actions.getGanaderia()}>Traete los mensajes</button>
            <div>{store.ganaderia.map((item)=>{
                return (
                    <p>{item.nombre}</p>
                )
            })}</div>
        </div>
    )
}