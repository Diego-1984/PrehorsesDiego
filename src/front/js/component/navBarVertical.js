import React from "react";
import { Link, useNavigate } from "react-router-dom";
const NavbarVertical = () => {
  const navigate = useNavigate();

  const buttonStyle= {
    width: 20 + 'rem', 
    border: 'none', 
    paddingTop: 2 + 'rem', 
    paddingBottom: 2 + 'rem'
  }
  return (
    <>
    <div className="container m-0 p-0">
      <div className="row m-0 p-3 text-center border-bottom border-warning">
        <span id="accountPrivate" className="material-symbols-outlined">
          account_circle
        </span>
      </div>
      <div className="row m-0 p-0 border-bottom border-warning">
        <button
          className="btn btn-outline-warning"
          style={buttonStyle}
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button "
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          onClick={()=>{navigate("/private/myhorses")}}>
              Ver mis Caballos
        </button>
      </div>
      <div className="row m-0 p-0 border-bottom border-warning">
        <button
          className=" btn btn-outline-warning"
          style={buttonStyle}
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
          onClick={()=>{navigate("/private/modifyuser")}}>
              Modificar Usuario
        </button>
      </div>
      <div className="row m-0 p-0 border-bottom border-warning">
        <button
          className="btn btn-outline-warning"
          style={buttonStyle}
          id="v-pills-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-messages"
          type="button"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
          onClick={()=>{navigate("/private/addhorse")}}>
              Subir Caballo
        </button>
      </div>
      <div className="row m-0 p-0 border-warning">
        <button
          className="btn btn-outline-warning"
          style={buttonStyle}
          id="v-pills-settings-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-settings"
          type="button"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
          onClick={()=>{navigate("/")}}>
              Cerrar Sesión
        </button>
      </div>
    </div>
        
      {/* <div className="Container d-flex align-items-start" style={{width: 15 +'rem', padding: 2 + 'rem'}}>
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical" 
        >
          <button
            className="btn btn-outline-warning"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button "
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Ver mis Caballos
          </button>
          <button
            className=" btn btn-outline-warning"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Modificar Usuario Link To.
          </button>
          <button
            className="btn btn-outline-warning"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Subir Caballo
          </button>
          <button
            className="btn btn-outline-warning"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Cerrar Sesión
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            ...
          </div>
        </div>
      </div>*/}
    </> 
  );
};
export default NavbarVertical;
