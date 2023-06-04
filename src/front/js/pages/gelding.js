import React, {useContext, useEffect} from "react";
import Filtrarpor from "../component/filtrarpor.js";
import { Context } from "../store/appContext.js";
import CardSimple from "../component/cardSimple.js";
import Spinner from "../component/spinner.js";
import { Link } from "react-router-dom";


export const Gelding = () =>{
    const { store, actions } = useContext(Context);
    
    useEffect(()=> {
        actions.getHorses()
    },[])

    return (
        <div className="row mx-2">
          <div className="row mx-2 my-2">
          <Link to="/">
            <button className="bg-transparent border border-0">Home / Castrados
            </button>
          </Link>
        </div>
          <Filtrarpor />
          {store.horses == 0 ? <Spinner /> : store.horses.map((item) => {
            if (item.sexo == "Castrado") {
              return (
                <div className="col-3 mt-5">
                  <CardSimple key={item.id} item={item} />
                </div>
              );
            }
          })}
      </div>
    )
}