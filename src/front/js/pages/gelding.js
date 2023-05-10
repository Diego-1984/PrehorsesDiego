import React, { useState, useContext, useEffect} from "react";
import Filtrarpor from "../component/filtrarpor.js";
import { Context } from "../store/appContext.js";


export const Gelding = () =>{
    const { store, actions } = useContext(Context);
    
    useEffect(()=> {
        actions.getHorse()
    },[])

    return (
        <div>
            Esta es la ruta para machos carajo!
            {store.horse.map((item, i) => {
                    if(item.sexo == 'Castrado'){
                        return <CardSimple key={item.id} item={item}/>
                    }
                })}
        </div>
    )
}