import React from "react";

const FormularioVenta = () => {

    return(
        <div className="container mt-1 border 1 rounded bg-black text-white" style={{width: 65+'rem'}}>
            <div className="row bg-light border 1 p-2 bg-black justify-content-center d-flex">
                <h1>Describe tu caballo</h1>
            </div>
            <div className="row p-3">                
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
                        <option>1995</option>
                        <option>1996</option>
                        <option>1997</option>
                        <option>1998</option>
                        <option>1999</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                        <option>2006</option>
                        <option>2007</option>
                        <option>2008</option>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom04" className="form-label"><strong>Ganadería</strong></label>
                        <select className="form-select" id="validationCustom04" required>
                            <option defaultValue="">Elige ganadería</option>
                            <option className="p-1" value="a.y.d.juan manuel">Ejemplo</option>    
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
                            <option value="0">Cualquier Color</option>
                            <option value="1">Appaloosa</option>
                            <option value="2">Bayo</option>
                            <option value="3">Bayo ruano</option>
                            <option value="4">Negro</option>
                            <option value="5">Ruano azul</option>
                            <option value="6">Bayo brillante</option>
                            <option value="7">Alazán</option>
                            <option value="8">Manchado</option>
                            <option value="9">Cremello</option>
                            <option value="10">Tordo</option>
                            <option value="11">Bayo oscuro</option>
                            <option value="12">Leonado</option>
                            <option value="13">Tordo mosqueado</option>
                            <option value="14">Gris</option>
                            <option value="15">Castaño encendido</option>
                            <option value="16">Palomino</option>
                            <option value="17">Pío</option>
                            <option value="18">Tordo vinoso</option>
                            <option value="19">Pinto</option>
                            <option value="20">Tordo oscuro</option>
                            <option value="21">Sabino o Rosillo</option>
                            <option value="22">Tobiano</option>
                            <option value="23">Moteado</option>
                            <option value="24">Castaño oscuro</option>
                            <option value="25">Castaño</option>
                            <option value="27">Café con leche</option>
                            <option value="28">Blanco</option>
                            <option value="29">Isabelo</option>
                            <option value="31">Ruano</option>
                            <option value="32">Overo</option>          
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="validationCustom04" className="form-label"><strong>Alzada (m)</strong></label>
                        <select className="form-select" id="validationCustom04" required>
                            <option defaultValue="">Elige alzada</option>
                            <option className="p-1" value="1.20-1.30"></option>
                            <option>1.20 - 1.30</option>
                            <option>1.30 - 1.40</option>
                            <option>1.40 - 1.50</option>
                            <option>1.50 - 1.60</option>
                            <option>1.60 - 1.65</option>
                            <option>1.65 - 1.70</option>
                            <option>1.70 - 1.75</option>
                            <option>más de 1.75</option>                      
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom04" className="form-label"><strong>Provincia</strong></label>
                        <select className="form-select" id="validationCustom04" required>
                            <option defaultValue="">Elige provincia</option>
                            <option className="p-1" value="almeria"></option>
                            <option value="1">Albacete</option>
                            <option value="2">Alicante</option>
                            <option value="3">Almería</option>
                            <option value="4">Asturias</option>
                            <option value="5">Ávila</option>
                            <option value="6">Badajoz</option>
                            <option value="7">Barcelona</option>
                            <option value="8">Burgos</option>
                            <option value="9">Cáceres</option>
                            <option value="10">Cádiz</option>
                            <option value="11">Cantabria</option>
                            <option value="12">Castellón</option>
                            <option value="13">Ciudad Real</option>
                            <option value="14">Córdoba</option>
                            <option value="15">Cuenca</option>
                            <option value="16">Gerona (Girona)</option>
                            <option value="17">Granada</option>
                            <option value="18">Guadalajara</option>
                            <option value="19">Guipúzcoa (Gipuzkoa)</option>
                            <option value="20">Huelva</option>
                            <option value="21">Huesca</option>
                            <option value="22">Islas Baleares (Balearic Islands)</option>
                            <option value="23">Jaén</option>
                            <option value="24">La Coruña (A Coruña)</option>
                            <option value="25">La Rioja</option>
                            <option value="26">Las Palmas</option>
                            <option value="27">León</option>
                            <option value="28">Lérida (Lleida)</option>
                            <option value="29">Lugo</option>
                            <option value="30">Madrid</option>
                            <option value="31">Málaga</option>
                            <option value="32">Murcia</option>
                            <option value="33">Navarra</option>
                            <option value="34">Orense (Ourense)</option>
                            <option value="35">Palencia</option>
                            <option value="36">Pontevedra</option>
                            <option value="37">Salamanca</option>
                            <option value="38">Santa Cruz de Tenerife</option>
                            <option value="39">Segovia</option>
                            <option value="40">Sevilla</option>
                            <option value="41">Soria</option>
                            <option value="42">Tarragona</option>
                            <option value="43">Teruel</option>
                            <option value="44">Toledo</option>
                            <option value="45">Valencia</option>
                            <option value="46">Valladolid</option>
                            <option value="47">Vizcaya (Bizkaia)</option>
                            <option value="48">Zamora</option>
                            <option value="49">Zaragoza</option>
                            <option value="50">Ceuta</option>
                            <option value="51">Melilla</option>

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
                            rows="8"></textarea>
                    </div>
                    <div className="invalid-feedback">
                        Debes añadir la descripción
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