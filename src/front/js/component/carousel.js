import React, { useContext } from "react"
import sementales from "../../img/sementales.jpg"
import Yeguas from "../../img/Yeguas.jpg"
import castrado from "../../img/castrado.jpg"
import { Link } from "react-router-dom"
import { Context } from "../store/appContext"

const Carousel = () =>{
    const {store} = useContext(Context)
    return (
        <>
        <div className="row">
            <div className="col-md-4">
                <div className="container1 d-flex align-items-center justify-content-center flex-wrap">
                    <div className="box">
                        <div className="body">
                            <div className="imgContainer">
                                <img src={sementales} />
                            </div>
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h4 className="text-black fs-8">SEMENTALES</h4>
                                    <p className="mt-3">
                                        En esta sección podrá descubrir todos los sementales
                                        disponibles y contactar con su dueño.
                                    </p>
                                    {store.token ? <Link to="/male">
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
                                <img src={Yeguas} />
                            </div>
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h4 className="text-black fs-8">YEGUAS</h4>
                                    <p className="mt-3">
                                        En esta sección podrá descubrir todas las yeguas
                                        disponibles y contactar con su dueño.
                                    </p>
                                    {store.token ? <Link to="/mares">
                                        <button type="button" className="btn mt-3">Ver yeguas</button>
                                    </Link> :<Link to="/login">
                                        <button type="button" className="btn mt-3">Ver yeguas</button>
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
                                <img src={castrado} />
                            </div>
                            <div className="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h4 className="text-black fs-8">CASTRADOS</h4>
                                    <p className="mt-3">
                                        En esta sección podrá descubrir todos los caballos castrados
                                        disponibles y contactar con su dueño.
                                    </p>
                                    {store.token ? <Link to="/gelding">
                                        <button type="button" className="btn mt-3">Ver castrados</button>
                                    </Link> :<Link to="/login">
                                        <button type="button" className="btn mt-3">Ver castrados</button>
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

export default Carousel;