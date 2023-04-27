import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import caballoJumbotron from "../../img/caballoJumbotron.png";
import "../../styles/home.css";
import Carousel from "../component/carousel";
import logo from "../../img/logo.png";

export const Home = () => {
   const { store, actions } = useContext(Context);
 
   return (
    <div  className="text-center">
      <div id="fadein" className="bg bg-black">
        <div className="container-fluid">
          <div className="row d-flex">
            <div className="col justify-content-center m-5 pt-5 ps-5">
            <img  src={logo} style={{width: 25+'rem', margin:0.3+'rem'}}/>
              
              <h5 className="text-white text-center mb-4 ms-5 pt-3">              
                Bienvenido a tu página de compra-venta de caballos Pura Raza Español
              </h5>
              <figure className="mt-5 bg-black">
                <blockquote className="blockquote ms-5 ps-3 bg-black">
                  <p
                    className="text-warning text-center mx-5"
                    style={{ width: 30 + "rem" }}
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
                  style={{ width: 30 + "rem" }}
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
			<div id="carouselDiv">
				<h1 className="pt-5 text-warning">Escoja su sección:</h1>
			  <div className="d-flex p-5 justify-content-center">
				  <Carousel />
			  </div>
      </div>
		</div>
	);
};