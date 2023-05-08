import React from "react";

const FormularioVenta = () => {

    return(
        <div>
            <div className="row justify-content-center mt-2">
                <div className="col justify-content-center">
                    <form action="https://cataas.com/cat" method="post">
                        <div className="card ms-5 mb-5">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-body-tertiary">
                                    <div className="row">
                                        <legend className="ps-3 fs-2 fw-bold">Describe tu caballo</legend>
                                    </div>
                                    {/* <div className="alert alert-warning" role="alert">
                                        Rellena todos los campos
                                    </div> */}
                                </li>
                                <li className="list-group-item">
                                    <div className="row mt-3 p-2">
                                        <div className="form-group">
                                            <div className="row mb-3">
                                                <div className="col-md-2">
                                                    <label htmlFor="validationDefault01" 
                                                    className="form-label"><strong>Nombre</strong></label>
                                                    <input type="text" className="form-control" 
                                                    id="validationDefault01" required
                                                    placeholder="Nombre caballo"/>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="validationDefault02" 
                                                    className="form-label"><strong>Fecha nacimiento</strong></label>
                                                    <input type="datetime" 
                                                    className="form-control" 
                                                    id="validationDefault02"/>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="validationCustom04" 
                                                    className="form-label"><strong>Ganadería</strong></label>
                                                    <select className="form-select" 
                                                    id="validationCustom04" required>
                                                        <option defaultValue="">Elige ganadería</option>
                                                        <option className="p-1" 
                                                        value="a.y.d.juan manuel"> A.Y. D. JUAN MANUEL URQUIJO Y NOVALES</option>    
                                                    </select> 
                                                </div>
                                                <div className="col-md-1">
                                                    <label htmlFor="validationCustom04" 
                                                    className="form-label"><strong>Sexo</strong></label>
                                                    <select className="form-select" 
                                                    id="validationCustom04" required>
                                                        <option defaultValue=""></option>
                                                        <option className="p-1" value="macho">Macho</option>
                                                        <option className="p-1" value="hembra">Hembra</option>
                                                        <option className="p-1" value="castrado">Castrado</option>   
                                                    </select> 
                                                </div>
                                                <div className="col-md-2">
                                                    <label htmlFor="validationDefault03" 
                                                    className="form-label"><strong>Precio €</strong></label>
                                                    <input type="num" className="form-control" 
                                                    id="validationDefault02" value=""/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <label htmlFor="validationCustom04" className="form-label"><strong>Capa</strong></label>
                                                    <select className="form-select" id="validationCustom04" required>
                                                        <option defaultValue="">Elige capa</option>
                                                        <option className="p-1" value="Negro">Negro</option> 
                                                        <option className="p-2" value="Marrón">Marrón</option> 
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="validationCustom04" className="form-label"><strong>Alzada (m)</strong></label>
                                                    <select className="form-select" id="validationCustom04" required>
                                                        <option defaultValue="">Elige alzada</option>
                                                        <option className="p-1" value="1.20-1.30">1.20 - 1.30</option>                    
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="validationCustom04" className="form-label"><strong>Provincia</strong></label>
                                                    <select className="form-select" id="validationCustom04" required>
                                                        <option defaultValue="">Elige provincia</option>
                                                        <option className="p-1" value="almeria">Almería</option>                                  
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Por favor selecciona una provincia
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="validationCustom04" className="form-label"><strong>Nivel de doma</strong></label>
                                                    <select className="form-select" id="validationCustom04" required>
                                                        <option defaultValue="">Elige lo más aproximado</option>
                                                        <option className="p-1" value="sin doma">Sin doma</option>
                                                        <option className="p-1" value="paso, trote, galope">Paso, trote, galope</option>
                                                        <option className="p-1" value="domado">Domado</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Por favor selecciona un nivel
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4 mt-2">
                                                    <div className="input-group input-group-sm mb-3 mt-2">
                                                        <label>Sube tus fotos</label>                            
                                                        <input type="file" id="formImages" name="avatar" accept="image/jpeg, image/jpg" multiple></input>
                                                    </div>
                                                    <div className="input-group input-group-sm mb-3 mt-2">
                                                        <label>Sube tu video</label>                              
                                                        <input type="file" id="formImages" name="avatar" accept="image/jpeg, image/jpg" multiple></input>
                                                    </div>
                                                    <div className="input-group input-group-sm mb-3 mt-2">
                                                        <label>Sube la carta</label>                             
                                                        <input type="file" id="formImages" name="avatar" accept="document/pdf," multiple></input>
                                                    </div>
                                                </div>
                                                <div className="col-8 mt-2"><strong>Descripción</strong><textarea className="form-control mt-2" id="message" name="message" placeholder="Describe aquí tu caballo"
                                                        rows="6"></textarea>
                                                </div>
                                                <span className="invalid-feedback">
                                                    Debes añadir la descripción
                                                </span>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">                  
                                                </div>
                                                <div className="col-8"><i className="fa-solid fa-circle-info"></i><em>Se descriptivo en el nivel de doma, tu caballo se venderá mejor</em>                     
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-body-tertiary" style={{height: 5.3+'rem'}}>
                                    <div className="row justify-content-end">
                                        <div className="col-2 justify-content-end pt-2">
                                            <div className="d-flex justify-content-end">
                                                <button type="submit" className="btn btn-warning p-2 pe-3 ps-3 fs-5">Publicar</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FormularioVenta