import React from "react";

const ModifyUser = () => {
  return (
    <form>
      <div
        className="container-fluid bg-warning p-5 m-10"
        style={{ width: 30 + "rem", padding: 2 + "rem" }}
      >
        <div ClassName="row">
          <div ClassName="col">
            <div className="mb-3">
              <label className="form-label">Nombre :</label>
              <input
                className="form-control"
                placeholder="Introduzca nuevo nombre de Usuario"
              />
              <div id="emailHelp" className="form-text"></div>
              <label for="exampleInputEmail1" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Introduzca su nuevo Email"
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Contraseña :
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Introduzca su nueva Contraseña"
              />
            </div>
            <button type="button" class="btn btn-outline-dark">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ModifyUser;
