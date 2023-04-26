import React from "react";
import {useContext } from "react";
import Context from "../store/appContext"

const ModifyUser = () => {
  return (
    <form id="modifyUser" style={{ width: 45 + "rem", padding: 2 + "rem", marginLeft: 7+'rem'}}>
      <div
        className="container-fluid m-1"
      >
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label className="form-label mb-3">Nombre :</label>
              <input
                className="form-control mb-3"
                placeholder="Introduzca nuevo nombre de Usuario"
              />
              <div id="emailHelp" className="form-text"></div>
              <label hmtlfor="exampleInputEmail1" className="form-label mb-3">
                Email:
              </label>
              <input
                type="email"
                className="form-control mb-3"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="{user.email}"
                disabled
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label hmtlfor="exampleInputPassword1" className="form-label mb-3">
                Contraseña :
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="exampleInputPassword1"
                placeholder="Introduzca su nueva Contraseña"
              />
            </div>
            <button type="button" className="btn btn-outline-dark mt-3">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ModifyUser;
