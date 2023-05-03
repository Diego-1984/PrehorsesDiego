import React from "react";

const FormularioVenta = () => {

    return(
        <div className="container mt-1 border 1 rounded bg-black text-white" style={{width: 65+'rem'}}>
            <div className="row bg-light border 1 p-2 bg-black justify-content-center d-flex">
                <h1>Describe tu caballo</h1>
            </div>
            <div className="row p-3">
                <div className="alert alert-warning" role="alert">
                    Rellena todos los campos
                </div>
            </div>
            <form className="row g-3">
                <div className="row g-3">
                    <div className="col-md-2">
                        <label htmlFor="validationDefault01" className="form-label"><strong>Nombre</strong></label>
                        <input type="text" className="form-control" id="validationDefault01" required
                            placeholder="Nombre caballo"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationDefault02" className="form-label"><strong>Fecha de nacimiento</strong></label>
                        <input type="datetime" className="form-control" id="validationDefault02"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom04" className="form-label"><strong>Ganadería</strong></label>
                        <select className="form-select" id="validationCustom04" required>
                            <option defaultValue="">Elige ganadería</option>
                            <option className="p-1" value="a.y.d.juan manuel"> A.Y. D. JUAN MANUEL URQUIJO Y NOVALES</option>    
                        </select> 
                    </div>
                    <div className="col-md-1">
                        <label htmlFor="validationCustom04" className="form-label"><strong>Sexo</strong></label>
                        <select className="form-select" id="validationCustom04" required>
                            <option defaultValue=""></option>
                            <option className="p-1" value="macho">Macho</option>
                            <option className="p-1" value="hembra">Hembra</option>
                            <option className="p-1" value="castrado">Castrado</option>   
                        </select> 
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="validationDefault03" className="form-label"><strong>Precio €</strong></label>
                        <input type="num" className="form-control" id="validationDefault02" value=""/>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-2">
                        <label htmlFor="validationCustom04" className="form-label"><strong>Capa</strong></label>
                        <select className="form-select" id="validationCustom04" required>
                            <option defaultValue="">Elige capa</option>
                            <option className="p-1" value="Negro">Negro</option> 
                            <option className="p-2" value="Marrón">Marrón</option> 
                        </select>
                    </div>
                    <div className="col-md-2">
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
                    <div className="col-md-3">
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
                <div className="row mt-2">
                    <div className="col-4 mt-2"><strong>Sube tus fotos, un vídeo y la carta</strong>
                        <div className="input-group input-group-sm mb-3 mt-2">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Sube tus fotos</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder= "tus archivos en JPEG" onChange={()=>{}}/>
                        </div>
                        <div className="input-group input-group-sm mb-3 mt-2">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Sube tu video</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" placeholder= "tu archivo en MP4"aria-describedby="inputGroup-sizing-sm" onChange={()=>{}}/>
                        </div>
                        <div className="input-group input-group-sm mb-3 mt-2">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Sube la carta</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"placeholder= "tu archivo en PDF" onChange={()=>{}}/>
                        </div>
                    </div>
                    <div className="col-8 mt-2"><strong>Descripción</strong><textarea className="form-control mt-2" id="message" name="message" placeholder="Describe aquí tu caballo"
                            rows="8"></textarea>
                    </div>
                    <div className="invalid-feedback">
                        Debes añadir la descrippción
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">                  
                    </div>
                    <div className="col-8"><i className="fa-solid fa-circle-info"></i><em> Se descriptivo en el nivel de doma, tu caballo se venderá mejor</em>                     
                    </div>
                </div>
                <div className="row  ms-1 mt-1 bg-black">
                    <div className="d-flex p-2 justify-content-end  mt-3">
                        <button className="btn btn-warning" type="submit"><strong>Publicar</strong></button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default FormularioVenta