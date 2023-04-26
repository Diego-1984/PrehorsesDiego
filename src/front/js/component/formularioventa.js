import react from "react";

const Formularioventa =()=>{
    <>
    return(
        <div class="container mt-3 border 1 rounded bg-black text-white mt-5 my-5">
        <div class="row bg-light border 1 p-2 bg-black justify-content-center d-flex">
            <h1>Describe tu caballo</h1>

        </div>
        <div class="row p-3">
            <div class="alert alert-warning" role="alert">
                Rellena todos los campos
            </div>
        </div>
        <form class="row g-3"/>
            <div class="col-md-3">
                <label for="validationDefault01" class="form-label"><strong>Nombre</strong> </label>
                <input type="text" class="form-control" id="validationDefault01" required
                    placeholder="Nombre del caballo"/>

            </div>
            <div class="col-md-2">
                <label for="validationDefault02" class="form-label"><strong>Fecha de nacimiento</strong></label>
                <input type="datetime" class="form-control" id="validationDefault02"/>
            </div>
            <div class="col-md-4">
                <label for="validationCustom04" class="form-label"><strong>Ganadería</strong></label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elige ganadería</option>
                    <option> A.Y. D. JUAN MANUEL URQUIJO Y NOVALES</option>
                    
                </select>
                
            </div>
            <div class="col-md-1">
                <label for="validationCustom04" class="form-label"><strong>Sexo</strong></label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value=""></option>
                    <option>Macho</option>
                    <option>Hermbra</option>
                    <option>Castrado</option>
                    
                </select>
                
            </div>
            <div class="col-md-2">
                <label for="validationDefault03" class="form-label"><strong>Precio €</strong></label>
                <input type="num" class="form-control" id="validationDefault02" value=""/>
            </div>

            <div class="col-md-2">
                <label for="validationCustom04" class="form-label"><strong>Capa</strong></label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elige capa</option>
                    <option>Negro</option>
                    
                </select>
                
            </div>

            <div class="col-md-2">
                <label for="validationCustom04" class="form-label"><strong>Alzada (m)</strong></label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elige alzada</option>
                    <option>1.20 - 1.30</option>                    
                </select>

                
            </div>
            <div class="col-md-2">
                <label for="validationCustom04" class="form-label"><strong>Provincia</strong></label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elige provincia</option>
                    <option>Almería</option>                                  
                </select>
            
                <div class="invalid-feedback">
                    Por favor selecciona una provincia
                </div>
                
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label"><strong>Nivel de doma</strong></label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elige lo más aproximado</option>
                    <option>Sin doma</option>
                    <option>Paso ,trote, galope</option>
                    <option>Domado</option>
                </select>

                <div class="invalid-feedback">
                    Por favor selecciona un nivel
                </div>

            </div>
            
            <div class="row mt-2">
                <div class="col-4 mt-2"><strong>Sube tus fotos, un vídeo y la carta</strong>
                    <div class="input-group input-group-sm mb-3 mt-2">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Sube tus fotos</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder= "tus archivos en JPEG"/>
                    </div>

                    <div class="input-group input-group-sm mb-3 mt-2">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Sube tu video</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" placeholder= "tu archivo en MP4"aria-describedby="inputGroup-sizing-sm"/>
                    </div>

                    <div class="input-group input-group-sm mb-3 mt-2">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Sube la carta</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"placeholder= "tu archivo en PDF"/>
                    </div>

                </div>
                
                <div class="col-8 mt-2"><strong>Descripción</strong><textarea class="form-control mt-2" id="message" name="message" placeholder="Describe aquí tu caballo"
                        rows="8"></textarea>
                </div>

                <div class="invalid-feedback">
                    Debes añadir la descrippción
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-4">                  
            </div>
                <div class="col-8"><i class="fa-solid fa-circle-info"></i><em> Se descriptivo en el nivel de doma, tu caballo se venderá mejor</em>                     
            </div>
        </div>
            <div class="row  ms-1 mt-1 bg-black">
                <div class="d-flex p-2 justify-content-end  mt-3">
                    <button class="btn btn-warning" type="submit"><strong>Publicar</strong></button>
                </div>
            </div>

    </div>
    
    )
    </>
}
export default Formularioventa