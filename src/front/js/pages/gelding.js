import React, { useState, useContext, useEffect} from "react";
import Filtrarpor from "../component/filtrarpor.js";
import { Context } from "../store/appContext.js";
import CardSimple from "../component/cardSimple.js";


export const Gelding = () =>{
    const { store, actions } = useContext(Context);
    
    useEffect(()=> {
        actions.getHorse()
    },[])

    return (
        <div className="row mx-2">
            Esta es la ruta para castrados
        <Filtrarpor />
        {store.horse.map((item) => {
          if (item.sexo == "Castrado") {
            return (
              <div className="col-3 mt-3">
                <CardSimple key={item.id} item={item} />
              </div>
            );
          }
        })}
      </div>
    )
}