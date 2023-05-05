import React from "react"
import caballoMacho from "../../img/caballoMacho.jpg"
import caballosHembras from "../../img/caballosHembras.jpg"
import caballoCastrado from "../../img/caballoCastrado.jpg"
import { Link } from "react-router-dom"
const Carousel = () =>{

    return (
        <>
        <div className="col-12 m-15">
            <div className="container1 d-flex align-items-center justify-content-center flex-wrap">
                <div className="box">
                    <div className="body">
                        <div className="imgContainer">
                            <img src={caballoMacho} />
                        </div>
                        <div className="content d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h3 className="text-white fs-8">Caballos Macho</h3>
                                <p>
                                    En esta sección podras descubrir todos los caballos macho
                                    disponibles y poder ofertar con su dueño.
                                </p>
                                <Link to="/male">
                                    <button type="button" class="btn btn-outline-secondary">Ver Caballos Machos</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="container1 d-flex align-items-center justify-content-center flex-wrap">
                <div className="box">
                    <div className="body">
                        <div className="imgContainer">
                            <img src={caballosHembras} />
                        </div>
                        <div className="content d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h3 className="text-white fs-8">Hembras</h3>
                                <p>
                                    En esta sección podras descubrir todas las Yeguas
                                    disponibles y poder ofertar con su dueño.
                                </p>
                                <Link to="/male">
                                    <button type="button" class="btn btn-outline-secondary">Ver Caballos Machos</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="container1 d-flex align-items-center justify-content-center flex-wrap">
                <div className="box">
                    <div className="body">
                        <div className="imgContainer">
                            <img src={caballoCastrado} />
                        </div>
                        <div className="content d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h3 className="text-white fs-8">Caballos Castrados</h3>
                                <p>
                                    En esta sección podras descubrir todos los caballos castrados
                                    disponibles y poder ofertar con su dueño.
                                </p>
                                <Link to="/male">
                                    <button type="button" class="btn btn-outline-secondary">Ver Caballos Machos</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        </>
      );
    };
//     return (
//         <>
//         <div className="row">
//             <div className="col-12 m-4">
//                 <Link to="/male">
//                     <img src={caballoMacho} />
// 			    </Link>
//             </div>
//             <div className="col-12 m-4">
//                 <Link to="/mares">
//                     <img src={caballosHembras} />
// 			    </Link>
//             </div>
//             <div className="col-12 m-4">
//                 <Link to="/gelding">
//                     <img src={caballoCastrado} />
// 			    </Link>
//             </div>
//             </div>
//         </>
//     )
// }

export default Carousel;