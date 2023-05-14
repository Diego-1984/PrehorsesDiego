import React, { useState, useContext, useEffect} from "react";
import Filtrarpor from "../component/filtrarpor";
import { Context } from "../store/appContext";
import CardSimple from "../component/cardSimple";


export const Mares = () =>{
    const { store, actions } = useContext(Context);
    
    useEffect(()=> {
        actions.getHorses()
    },[])

    return (
        <div className="row mx-2">
            <Filtrarpor/>
            {store.horses.map((item, i) => {
                    if(item.sexo == 'Yegua'){
                        return (
                            <div className="col-3 mt-5">
                              <CardSimple key={item.id} item={item} />
                            </div>
                        )
                    }
                })}
        </div>
    )
}