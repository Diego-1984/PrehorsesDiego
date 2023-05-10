import React, { useState, useContext} from "react";
import Filtrarpor from "../component/filtrarpor";
import { Context } from "../store/appContext";


export const Mares = () =>{
    const { store, actions } = useContext(Context);
    
    useEffect(()=> {
        actions.getHorse()
    },[])

    return (
        <div>
            Esta es la ruta para machos carajo!
            <Filtrarpor/>
            {store.horse.map((item, i) => {
                    if(item.sexo == 'Yegua'){
                        return <CardSimple key={item.id} item={item}/>
                    }
                })}
        </div>
    )
}