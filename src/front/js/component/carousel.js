import React from "react"
import caballoMacho from "../../img/caballoMacho.jpg"
import caballosHembras from "../../img/caballosHembras.jpg"
import caballoCastrado from "../../img/caballoCastrado.jpg"
import { Link } from "react-router-dom"
const Carousel = () =>{

    return (
        <>
        <div className="row">
            <div className="col-md-4">
                <div className="container1 d-flex align-items-center justify-content-center flex-wrap">
                    <div className="box">
                        <div className="body">
                            <div className="imgContainer">
                                <img src={caballoMacho} />
                            </div>
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h4 className="text-black fs-8">SEMENTALES</h4>
                                    <p className="mt-3">
                                        En esta sección podrá descubrir todos los sementales
                                        disponibles y contactar con su dueño.
                                    </p>
                                    {localStorage.getItem('token') ? <Link to="/male">
                                        <button type="button" className="btn mt-3">Ver sementales</button>
                                    </Link> :<Link to="/login">
                                        <button type="button" className="btn mt-3">Ver sementales</button>
                                    </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="container1 d-flex align-items-center justify-content-center flex-wrap">
                    <div className="box">
                        <div className="body">
                            <div className="imgContainer">
                                <img src={caballosHembras} />
                            </div>
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h4 className="text-black fs-8">YEGUAS</h4>
                                    <p className="mt-3">
                                        En esta sección podrá descubrir todas las yeguas
                                        disponibles y contactar con su dueño.
                                    </p>
                                    {localStorage.getItem('token') ? <Link to="/male">
                                        <button type="button" className="btn mt-3">Ver sementales</button>
                                    </Link> :<Link to="/login">
                                        <button type="button" className="btn mt-3">Ver sementales</button>
                                    </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="col-md-4">
                <div className="container1 d-flex align-items-center justify-content-center flex-wrap">
                    <div className="box">
                        <div className="body">
                            <div className="imgContainer">
                                <img src={caballoCastrado} />
                            </div>
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h4 className="text-black fs-8">CASTRADOS</h4>
                                    <p className="mt-3">
                                        En esta sección podrá descubrir todos los caballos castrados
                                        disponibles y contactar con su dueño.
                                    </p>
                                    {localStorage.getItem('token') ? <Link to="/male">
                                        <button type="button" className="btn mt-3">Ver sementales</button>
                                    </Link> :<Link to="/login">
                                        <button type="button" className="btn mt-3">Ver sementales</button>
                                    </Link>
                                    }
                                </div>
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