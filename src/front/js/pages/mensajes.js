import React, { useState, useContext} from "react";
import { Context } from "../store/appContext";

export const Mensajes = () =>{
    const { store, actions } = useContext(Context);

    return (
        <div>
            Esta es la ruta para ver los mensajes
            <button onClick={() => actions.getMessages()}>Traete los mensajes</button>
        </div>
    )
}