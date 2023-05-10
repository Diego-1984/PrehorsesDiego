import React, { useState, useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import CardSimple from "../component/cardSimple";

export const Male = () =>{
    const { store, actions } = useContext(Context);
    
    useEffect(()=> {
        actions.getHorse()
    },[])

    return (
        <div className="row">
            {store.horse.map((item, i) => {
                    if(item.sexo == 'Macho'){
                        return <div className="col-3"><CardSimple key={item.id} item={item}/></div>
                    }
                })}
        </div>
    )
}