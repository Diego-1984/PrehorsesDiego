import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Chat from "../component/chat";
import { Link } from "react-router-dom";

export const UserAcountMyHorses = () => {
  const { store, actions } = useContext(Context);

  const [updatedHorse, setUpdatedHorse] = useState({});

  const getMessages = (horse) => {
    const usersInterested = new Set();
    horse.messages.forEach(({ userInterestedId }) =>
      usersInterested.add(userInterestedId)
    );
    return Array.from(usersInterested).map((userInterestedId) => ({
      userInterestedId,
      messages: horse.messages.filter(
        ({ userInterestedId: messageUserInterestedId }) =>
          userInterestedId === messageUserInterestedId
      ),
    }));
  };

  useEffect(() => {
    const getHorses = async () => {
      await actions.clearHorses();
      await actions.getMyHorses();
    };
    getHorses();
  }, []);

  const getDate = (now) => {
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    return (
      year + "/" + month + "/" + date + "T" + hours + ":" + min + ":" + sec
    );
  };

  const postUserOwnerMessage = async (horse, message, userInterestedId) => {
    const { id: horseId, user_id: userOwnerId } = horse;
    await actions.postUserOwnerMessage(
      message.text,
      horseId,
      userInterestedId,
      getDate(new Date())
    );
    await actions.getMyHorses();
  };

  return (
    <div className="container-fluid m-0 pb-2">
      <div className="row my-2">
        <Link to="/">
          <button className="bg-transparent mb-3 border border-0">
            Home / Mis caballos
          </button>
        </Link>
      </div>

      {store.horses.map((horse) => {
        return (
          <>
            <div className="row mb-3">
              <div className="col-10 ms-3 eachCaballo">
                <div className="row align-items-center">
                  <div className="col">
                    <img
                      src={horse.img}
                      className="img-thumbnail rounded float-start my-3"
                      style={{ width: 200 + "px" }}
                      alt="..."
                    />
                  </div>
                  <div className="col pt-3">
                    <p className="ms-5">
                      <strong>{horse.nombre}</strong>
                    </p>
                    <p className="ms-5">{horse.precio}€</p>
                  </div>
                  <div className="col pt-3">
                    <p className="ms-5">{horse.fecha_nacimiento}</p>
                    <p className="ms-5">{horse.provincia}</p>
                  </div>
                  <div className="col pt-3">
                    <p className="ms-5 p-0">{horse.capa}</p>
                    <p className="ms-5 p-0">{horse.alzada}</p>
                  </div>
                  <div className="col-3 pt-3">
                    <p className="ps-5">{horse.nivel_doma}</p>
                    <p className="ps-5">{horse.ganaderia}</p>
                  </div>
                  <div className="col ms-5 pt-3">
                    <button
                      type="button"
                      className="deleteButton mb-2 w-75"
                      data-bs-toggle="modal"
                      data-bs-target={`#delete-modal${horse.id}`}
                    >
                      ELIMINAR
                    </button>
                    <button
                      type="button"
                      className="updateButton w-75"
                      data-bs-toggle="modal"
                      data-bs-target={`#update-modal${horse.id}`}
                    >
                      ACTUALIZAR
                    </button>
                  </div>
                </div>
                <div className="accordion mb-3" id="accordionExample">
                  <div className="accordion-item mt-2">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#horse${horse.id}`}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {" "}
                        Chats disponibles
                      </button>
                    </h2>
                    <div
                      id={`horse${horse.id}`}
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          {getMessages(horse).map(
                            ({ userInterestedId, messages }) => (
                              <>
                                <li className="nav-item" role="presentation">
                                  <button
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target={`#tab-${userInterestedId}-${horse.id}`}
                                    type="button"
                                    role="tab"
                                  >
                                    {messages[0].user_interested.name}
                                  </button>
                                </li>
                              </>
                            )
                          )}
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          {getMessages(horse).map(
                            ({ userInterestedId, messages }, index) => (
                              <>
                                <div
                                  className="tab-pane fade show owner-chat"
                                  id={`tab-${userInterestedId}-${horse.id}`}
                                  role="tabpanel"
                                  tabIndex={index}
                                >
                                  <Chat
                                    horse={horse}
                                    messages={messages}
                                    userInterestedId={userInterestedId}
                                    postMessage={postUserOwnerMessage}
                                  />
                                </div>
                              </>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal eliminar caballo */}
            <div
              className="modal fade"
              id={`delete-modal${horse.id}`}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Eliminar caballo
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>¿Está seguro de querer eliminar éste caballo?</p>
                    <p>Los cambios realizados serán irreversibles</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        actions.deleteHorse(horse.id),
                          alert("Caballo eliminado"),
                          actions.getMyHorses();
                          window.location.reload()
                      }}
                    >
                      Eliminar caballo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal actualizar caballo */}
            <div
              className="modal fade"
              id={`update-modal${horse.id}`}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Actualizar caballo
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Nombre:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        placeholder={horse.nombre}
                        onChange={(e) => {
                          setUpdatedHorse({
                            ...updatedHorse,
                            nombre: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Precio:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        placeholder={horse.precio}
                        onChange={(e) => {
                          setUpdatedHorse({
                            ...updatedHorse,
                            precio: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="form-label">
                        <strong>Provincia</strong>
                      </label>
                      <select
                        className="form-select"
                        id="recipient-name"
                        onChange={(e) => {
                          setUpdatedHorse({
                            ...updatedHorse,
                            provincia: e.target.value,
                          });
                        }}
                      >
                        <option defaultValue="">Elige provincia</option>
                        <option value="Albacete">Albacete</option>
                        <option value="Alicante">Alicante</option>
                        <option value="Almería">Almería</option>
                        <option value="Asturias">Asturias</option>
                        <option value="Ávila">Ávila</option>
                        <option value="Badajoz">Badajoz</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Burgos">Burgos</option>
                        <option value="Cáceres">Cáceres</option>
                        <option value="Cádiz">Cádiz</option>
                        <option value="Cantabria">Cantabria</option>
                        <option value="Castellón">Castellón</option>
                        <option value="Ciudad Real">Ciudad Real</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Cuenca">Cuenca</option>
                        <option value="Gerona">Gerona (Girona)</option>
                        <option value="Granada">Granada</option>
                        <option value="Guadalajara">Guadalajara</option>
                        <option value="Guipúzcoa">Guipúzcoa (Gipuzkoa)</option>
                        <option value="Huelva">Huelva</option>
                        <option value="Huesca">Huesca</option>
                        <option value="Islas Baleares">
                          Islas Baleares (Balearic Islands)
                        </option>
                        <option value="Jaén">Jaén</option>
                        <option value="La Coruña">La Coruña (A Coruña)</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Las Palmas">Las Palmas</option>
                        <option value="León">León</option>
                        <option value="Lleida">Lérida (Lleida)</option>
                        <option value="Lugo">Lugo</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Málaga">Málaga</option>
                        <option value="Murcia">Murcia</option>
                        <option value="Navarra">Navarra</option>
                        <option value="Orense">Orense (Ourense)</option>
                        <option value="Palencia">Palencia</option>
                        <option value="Pontevedra">Pontevedra</option>
                        <option value="Salamanca">Salamanca</option>
                        <option value="Santa Cruz de Tenerife">
                          Santa Cruz de Tenerife
                        </option>
                        <option value="Segovia">Segovia</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Soria">Soria</option>
                        <option value="Tarragona">Tarragona</option>
                        <option value="Teruel">Teruel</option>
                        <option value="Toledo">Toledo</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Valladolid">Valladolid</option>
                        <option value="Vizcaya">Vizcaya (Bizkaia)</option>
                        <option value="Zamora">Zamora</option>
                        <option value="Zaragoza">Zaragoza</option>
                        <option value="Ceuta">Ceuta</option>
                        <option value="Melilla">Melilla</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="form-label">
                        <strong>Nivel de doma</strong>
                      </label>
                      <select
                        className="form-select"
                        id="recipient-name"
                        onChange={(e) => {
                          setUpdatedHorse({
                            ...updatedHorse,
                            nivel_doma: e.target.value,
                          });
                        }}
                      >
                        <option defaultValue="">Elige lo más aproximado</option>
                        <option className="p-1">Sin doma</option>
                        <option className="p-1">Paso, trote, galope</option>
                        <option className="p-1">Domado</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Descripción:
                      </label>
                      <textarea
                        className="form-control mt-2"
                        id="message"
                        name="message"
                        placeholder="Describe aquí tu caballo"
                        rows="7"
                        defaultValue={horse.descripcion}
                        onChange={(e) => {
                          setUpdatedHorse({
                            ...updatedHorse,
                            descripcion: e.target.value,
                          });
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => {
                        actions.editHorse(horse.id, updatedHorse),
                          alert("Caballo actualizado correctamente"),
                          window.location.reload();
                      }}
                    >
                      Actualizar caballo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
