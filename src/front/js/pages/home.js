import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import caballoJumbotron from "../../img/caballoJumbotron.png";
import "../../styles/home.css";
import Carousel from "../component/carousel";
import logo from "../../img/logo.png";
import {Footer} from ".//../component/footer"

export const Home = () => {
   const { store, actions } = useContext(Context);
  
   return (
    <div  className="text-center">
      <div  className="bg bg-black">
        <div  className="container-fluid">
          <div id="fadein" className="row d-flex">
            <div className="col justify-content-center pt-5 ps-5">
            <img  src={logo} style={{width: 25+'rem', margin:0.3+'rem'}}/>
              
              <h5 className="text-white text-center mb-4 ms-5 pt-3">              
                Bienvenido a tu página de compra-venta de caballos Pura Raza Español
              </h5>
              <figure className="mt-5 bg-black">
                <blockquote className="blockquote ms-5 ps-3 bg-black">
                  <p
                    className="text-warning text-center mx-5"
                    style={{ width: 30 +"em", paddingLeft: 6+'em'}}
                  >
                    <em className="bg-black">
                      "De mi caballo aprendí que la fuerza se complementa con la
                      nobleza y la lealtad"
                      <figcaption className="blockquote-footer text-warning text-center mt-1">
                  Gabriel Oliverio
                </figcaption>
                    </em>
                  </p>
                  <div className="d-flex justify-content-center mt-5 pt-3 ms-5"
                  style={{ width: 30 +"em", paddingLeft: 6+'em' }}
                  >
                <Link to="/login">
                  <button type="button" className="btn btn-outline-light btn-lg"                 >
                    Regístrate
                  </button>
                </Link>
              </div>
                </blockquote> 
              </figure>
              
            </div>

							<img src={caballoJumbotron} className="bg-black" style={{width: 30+'rem', padding:0}}></img>

					</div>
				</div>
			</div>
			<div id="carouselDiv" className="pt-3 pb-5">
				<h3 className="pt-5 pb-2">CABALLOS PURA RAZA ESPAÑOLA PARA COMPRAR</h3>
        <p>Disponemos de gran cantidad de sementales, yeguas y castrados puestos a la venta por nuestros usuarios.<br></br> 
         Nuestra selección es privada, puedes acceder registrandote gratis <Link className="text-secondary" to="/login">
                                        Aqui
                                    </Link></p>
            <div><h4>Escoja a qué sección quiere dirigrise:</h4>
            </div> 
			  <div className="d-flex p-5 justify-content-center">
				  <Carousel />
			  </div>
      </div>
      <div id="sellHorse" className="pt-5 pb-5">
        <h3 className="pt-5 pb-2 text-white">¿QUIERE VENDER SU CABALLO?</h3>
        <p className="text-white">Si quiere vender su caballo también puede hacerlo. Regístrese en nuestra web y publique su anuncio.</p>
        <div className="p-2 pb-5">
          {localStorage.getItem('token') ? <Link to="/private/addhorse">
            <button type="button" className="btn btn-outline-light btn-lg">
              Publicar caballo
            </button>
          </Link> : <Link to="/login">
            <button type="button" className="btn btn-outline-light btn-lg">
              Publicar caballo
            </button>
          </Link> }
          
        </div>
      </div>
      <Footer />
		</div>
	);
};