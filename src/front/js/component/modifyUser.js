import React, { useEffect, useState } from "react";
import {useContext } from "react";
import { Context } from "../store/appContext";


const ModifyUser = () => {
  const {store, actions} = useContext(Context);
  const [editedUser, setEditedUser] = useState({})
  
  useEffect(()=>{
    actions.getOneUser()
  }, [])

  return (
    <div id="modifyUser" style={{ width: 45 + "rem", padding: 2 + "rem", marginLeft: 7+'rem'}}>
      <div
        className="container-fluid m-1"
      >
          <div className="row">
          <div className="col">
            <div className="mb-3">
              <label className="form-label mb-3">Nombre :</label>
              <input
                className="form-control mb-3"
                placeholder={store.user.name}
                onChange={(e)=>{setEditedUser({...editedUser, name:e.target.value}, console.log(editedUser))}}/>
              <div id="emailHelp" className="form-text"></div>
              <label hmtlfor="exampleInputEmail1" className="form-label mb-3">
                Email:
              </label>
              <input
                type="email"
                className="form-control mb-3"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder={store.user.email}
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
                placeholder={store.user.password}
                onChange={(e)=>{setEditedUser( {...editedUser, password: e.target.value}), console.log(editedUser)}}
              />
            </div>
            <button type="button" className="btn btn-outline-dark mt-3" onClick={()=>{actions.editUser(editedUser), alert('Usuario modificado'), window.location.reload()}}>
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyUser;
