import React, { useState, useContext} from "react";
import { Context } from "../store/appContext";


export const Mares = () =>{
    const { store, actions } = useContext(Context);
    
    useEffect(()=> {
        actions.getHorse()
    },[])

    return (
        <div>
            Esta es la ruta para yeguas carajo!
        </div>
    )
}