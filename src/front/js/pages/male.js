import React, {useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CardSimple from "../component/cardSimple";
import Filtrarpor from "../component/filtrarpor";

export const Male = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getHorse();
  }, []);

  return (
    <div className="row mx-2">
      <Filtrarpor />
      {store.horse.map((item) => {
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
