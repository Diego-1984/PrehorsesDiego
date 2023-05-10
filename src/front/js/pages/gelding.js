import React, { useState, useContext} from "react";
import Filtrarpor from "../component/filtrarpor.js";
import { Context } from "../store/appContext.js";


export const Gelding = () =>{
    const { store, actions } = useContext(Context);
    
    useEffect(()=> {
        actions.getHorse()
    },[])

    return (
        <div>
            <Filtrarpor/>
            Esta es la ruta para castrados carajo!
        </div>
    )
}