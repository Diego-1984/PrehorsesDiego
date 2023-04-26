import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import caballoJumbotron from "../../img/caballoJumbotron.png";
import "../../styles/home.css";
import Carousel from "../component/carousel";

export const Home = () => {
   const { store, actions } = useContext(Context);
 
   return (
    <div className="text-center bg-black">
      <div className="bg bg-black">
        <div className="container-fluid bg-black">
          <div className="row d-flex bg-black">
            <div className="col text-start m-5 pt-5 ps-5 bg-black">
              <h5 className="text-white mb-4 ms-5 pb-3 bg-black">Bienvenido a</h5>
              <h1 className="text-warning mb-4 ms-5 bg-black">PREHorses</h1>
              <h5 className="text-white mb-4 ms-5 pt-3 bg-black">
                Tu página de compra-venta de caballos Pura Raza Español
              </h5>
              <figure className="mt-5 bg-black">
                <blockquote className="blockquote ms-5 ps-3 bg-black">
                  <p
                    className="text-warning text-center bg-black"
                    style={{ width: 30 + "rem" }}
                  >
                    <em className="bg-black">
                      "De mi caballo aprendí que la fuerza se complementa con la
                      nobleza y la lealtad"
                    </em>
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer text-warning text-center mt-1 bg-black">
                  Gabriel Oliverio
                </figcaption>
              </figure>
              <div
                className="d-flex justify-content-center mt-5 pt-3 ms-5 bg-black"
                style={{ width: 30 + "rem" }}
              >
                <Link to="/login" className="bg-black">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg"
                  >
                    Regístrate
                  </button>
                </Link>
              </div>
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