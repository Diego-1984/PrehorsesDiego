import React, {useState, useContext, useEffect} from "react";
import { Context } from "../store/appContext";


function showUploadWidget(setImageUrl) {
    cloudinary.openUploadWidget({
        cloudName: "dcnwjdwfb",
        uploadPreset: "beautiful_horses",
        sources: ["camera", "facebook", "dropbox", "instagram", "local"],
        showAdvancedOptions: false,
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
            palette: {
                window: "#D5C8AF",
                sourceBg: "#F6F2EC",
                windowBorder: "#6A665E",
                tabIcon: "#cc6600",
                inactiveTabIcon: "#6A665E",
                menuIcons: "#595754",
                link: "#8F712F",
                action: "#EFC310",
                inProgress: "#99cccc",
                complete: "#78b3b4",
                error: "#ff6666",
                textDark: "#432A19",
                textLight: "#FFFFFF"
            }, fonts: {default: null, "sans-serif": {url: null, active: true}}
        }
    }, (err, info) => {
        if (!err) {
            if(info.event === 'queues-end') {
                console.log("Upload Widget event - ", info.data.info.files[0].uploadInfo.url);
                setImageUrl(info.data.info.files[0].uploadInfo.url);
            }
        }
    });
}


const FormularioVenta = () => {
    
    const [horse, setHorse] = useState({})
    const { store, actions } = useContext(Context);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(()=>{
        actions.getGanaderia()
    })

    const addHorse = () => {
        imageUrl
        const horseData = { ...horse, img: imageUrl };
        actions.addHorse(horseData); 
        alert('Caballo publicado'); 
        window.location.reload();
    }

    const openCloudinaryUploader = (setImageUrl) => {
        showUploadWidget(setImageUrl)
    }

    return(
        <div className="container-fluid">
            <div className="row justify-content-center mt-2 me-4">
                <div className="col justify-content-center">
                    <div>
                        <div className="card ms-5 mb-5">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-body-tertiary">
                                    <div className="row">
                                        <legend className="ps-3 fs-2 fw-bold">Describe tu caballo</legend>
                                    </div>
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
                                                    placeholder="Nombre caballo" onChange={(e)=>{setHorse({...horse, nombre:e.target.value})}}/>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="validationCustom04" 
                                                    className="form-label"><strong>Año de nacimiento</strong></label>
                                                    <select className="form-select" 
                                                    id="validationCustom04" required onChange={(e)=>{setHorse({...horse, fecha_nacimiento:e.target.value})}}>
                                                        <option defaultValue=""></option>
                                                        <option value="1995">1995</option>
                                                        <option value="1996">1996</option>
                                                        <option value="1997">1997</option>
                                                        <option value="1998">1998</option>
                                                        <option value="1999">1999</option>
                                                        <option value="2000">2000</option>
                                                        <option value="2001">2001</option>
                                                        <option value="2002">2002</option>
                                                        <option value="2003">2003</option>
                                                        <option value="2004">2004</option>
                                                        <option value="2005">2005</option>
                                                        <option value="2006">2006</option>
                                                        <option value="2007">2007</option>
                                                        <option value="2008">2008</option>
                                                        <option value="2009">2009</option>
                                                        <option value="2010">2010</option>
                                                        <option value="2011">2011</option>
                                                        <option value="2012">2012</option>
                                                        <option value="2013">2013</option>
                                                        <option value="2014">2014</option>
                                                        <option value="2015">2015</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                    </select> 
                                                </div>
                                                <div className="col-md-2">
                                                    <label htmlFor="validationCustom04" 
                                                    className="form-label"><strong>Ganadería</strong></label>
                                                    <select className="form-select" 
                                                    id="validationCustom04" onChange={(e)=>{setHorse({...horse, ganaderia:e.target.value})}}>
                                                        <option defaultValue="">Elige ganadería</option>
                                                        {store.ganaderia.map((ganaderia)=>{
                                                            return(<option className="p-1" 
                                                            value={ganaderia}>{ganaderia}</option>)
                                                        })}  
                                                    </select> 
                                                </div>
                                                <div className="col-md-1">
                                                    <label htmlFor="validationCustom04" 
                                                    className="form-label"><strong>Sexo</strong></label>
                                                    <select className="form-select" 
                                                    id="validationCustom04" required onChange={(e)=>{setHorse({...horse, sexo:e.target.value})}}>
                                                        <option defaultValue=""></option>
                                                        <option className="p-1" value="Macho">Macho</option>
                                                        <option className="p-1" value="Yegua">Yegua</option>
                                                        <option className="p-1" value="Castrado">Castrado</option>   
                                                    </select> 
                                                </div>
                                                <div className="col-md-2">
                                                    <label htmlFor="validationDefault03" 
                                                    className="form-label"><strong>Precio €</strong></label>
                                                    <input type="number" className="form-control" 
                                                    id="validationDefault02" onChange={(e)=>{setHorse({...horse, precio:e.target.value})}}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <label htmlFor="validationCustom04" className="form-label"><strong>Capa</strong></label>
                                                    <select className="form-select" id="validationCustom04" required onChange={(e)=>{setHorse({...horse, capa:e.target.value})}}>
                                                        <option defaultValue="">Elige capa</option>
                                                        <option value="0">Cualquier Color</option>
                                                        <option value="Appaloosa">Appaloosa</option>
                                                        <option value="Bayo">Bayo</option>
                                                        <option value="Bayo ruano">Bayo ruano</option>
                                                        <option value="Negro">Negro</option>
                                                        <option value="Ruano azul">Ruano azul</option>
                                                        <option value="Bayo brillante">Bayo brillante</option>
                                                        <option value="Alazán">Alazán</option>
                                                        <option value="Manchado">Manchado</option>
                                                        <option value="Cremello">Cremello</option>
                                                        <option value="Tordo">Tordo</option>
                                                        <option value="Bayo oscuro">Bayo oscuro</option>
                                                        <option value="Leonado">Leonado</option>
                                                        <option value="Tordo mosqueado">Tordo mosqueado</option>
                                                        <option value="Gris">Gris</option>
                                                        <option value="Castaño encendido">Castaño encendido</option>
                                                        <option value="Palomino">Palomino</option>
                                                        <option value="Pío">Pío</option>
                                                        <option value="Tordo vinoso">Tordo vinoso</option>
                                                        <option value="Pinto">Pinto</option>
                                                        <option value="Tordo oscuro">Tordo oscuro</option>
                                                        <option value="Sabino o Rosillo">Sabino o Rosillo</option>
                                                        <option value="Tobiano">Tobiano</option>
                                                        <option value="Moteado">Moteado</option>
                                                        <option value="Castaño oscuro">Castaño oscuro</option>
                                                        <option value="Castaño">Castaño</option>
                                                        <option value="Café con leche">Café con leche</option>
                                                        <option value="Blanco">Blanco</option>
                                                        <option value="Isabelo">Isabelo</option>
                                                        <option value="Ruano">Ruano</option>
                                                        <option value="Overo">Overo</option>                
                                                    </select>
                                                </div>

                                                <div className="col-md-3">
                                                    <label htmlFor="validationCustom04" className="form-label"><strong>Alzada (m)</strong></label>
                                                    <select className="form-select" id="validationCustom04" required onChange={(e)=>{setHorse({...horse, alzada:e.target.value})}}>
                                                        <option defaultValue="">Elige alzada</option>
                                                        <option className="p-1"></option>
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
                                                    <select className="form-select" id="validationCustom04" required onChange={(e)=>{setHorse({...horse, provincia:e.target.value})}}>
                                                        <option defaultValue="">Elige provincia</option>
                                                        <option className="p-1"></option>
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
                                                        <option value="Islas Baleares">Islas Baleares (Balearic Islands)</option>
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
                                                        <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
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
                                                    <div className="invalid-feedback">
                                                        Por favor selecciona una provincia
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="validationCustom04" className="form-label"><strong>Nivel de doma</strong></label>
                                                    <select className="form-select" id="validationCustom04" required onChange={(e)=>{setHorse({...horse, nivel_doma:e.target.value})}}>
                                                        <option defaultValue="">Elige lo más aproximado</option>
                                                        <option className="p-1">Sin doma</option>
                                                        <option className="p-1">Paso, trote, galope</option>
                                                        <option className="p-1">Domado</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Por favor selecciona un nivel
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-4 mt-2">
                                                    <div className="input-group input-group-sm mb-3 mt-2">                   
                                                        {!imageUrl && <button className="btn btn-secondary p-2" onClick={() => openCloudinaryUploader(setImageUrl)}>Subir foto</button>}
                                                        {imageUrl && <img src={imageUrl} />}
                                                    </div>
                                                </div>
                                                <div className="col-8 mt-2"><strong>Descripción</strong><textarea className="form-control mt-2" id="message" name="message" placeholder="Describe aquí tu caballo"
                                                        rows="7" onChange={(e)=>{setHorse({...horse, descripcion:e.target.value})}}></textarea>
                                                </div>
                                                <span className="invalid-feedback">
                                                    Debes añadir la descripción
                                                </span>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">                  
                                                </div>
                                                <div className="col-8"><i className="fa-solid fa-circle-info"></i><em> Se descriptivo en el nivel de doma, tu caballo se venderá mejor</em>                     
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-body-tertiary" style={{height: 5.3+'rem'}}>
                                    <div className="row justify-content-end">
                                        <div className="col-2 justify-content-end pt-2">
                                            <div className="d-flex justify-content-end">
                                                <button className="btn btn-warning p-2 pe-3 ps-3 fs-5" onClick={()=>{addHorse()}}>Publicar</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormularioVenta


























