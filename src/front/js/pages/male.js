import React, {useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CardSimple from "../component/cardSimple";
import Filtrarpor from "../component/filtrarpor";
import Spinner from "../component/spinner";
import { Link } from "react-router-dom";

export const Male = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getHorses();
  }, []);

  return (
    <div className="row mx-2">
        <div className="row mx-2 my-2">
          <Link to="/">
            <button className="bg-transparent border border-0">Home / Sementales
            </button>
          </Link>
        </div>
      
      <Filtrarpor />
      {store.horses == 0 ? <Spinner /> : store.horses.map((item) => {
        if (item.sexo == "Macho") {
          return (
            <div className="col-3 mt-5">
              <CardSimple key={item.id} item={item} />
            </div>
          );
        }
      })}
    </div>
  );
};
