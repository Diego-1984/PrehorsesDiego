import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const UserAcountMyHorses = () => {
  const { store, actions } = useContext(Context);

  useEffect(async () => {
    await actions.clearHorses();
    await actions.getMyHorses();
  }, []);

  return (
    <div className="container m-0">
      <ul>
        {store.horses.map((horse) => (
          <li> {JSON.stringify(horse.messages)}</li>
        ))}
      </ul>
    </div>
  );
};
