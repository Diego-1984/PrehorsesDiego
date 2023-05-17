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
    <>
    <div className="container justify-content-center pt-5" >
      <div className="container mt-5" id="modifyUser" style={{width: 45 + "rem", padding: 2 + "rem"}}>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label mb-3">Nombre :</label>
                <input
                  className="form-control mb-3"
                  placeholder={store.user.name}
                  onChange={(e)=>{setEditedUser({...editedUser, name:e.target.value})}}/>
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
                  onChange={(e)=>{setEditedUser( {...editedUser, password: e.target.value})}}
                />
              </div>
              <button type="button" className="btn btn-outline-dark mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Guardar cambios
              </button>
            </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Modificar datos de usuario</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          Está a punto de modificar sus datos de usuario.
          ¿Desea continuar?
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>window.location.reload()}>Cancelar</button>
          <button type="button" className="btn btn-success" onClick={()=>{actions.editUser(editedUser), alert('Usuario modificado'), window.location.reload()}}>Modificar datos</button>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default ModifyUser;
