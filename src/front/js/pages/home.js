import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import caballoJumbotron from "../../img/caballoJumbotron.png";
import "../../styles/home.css";
export const Home = () => {
   const { store, actions } = useContext(Context);
 
   return (
    <div className="text-center">
      <div className="bg bg-black">
        <div className="container-fluid">
          <div className="row d-flex">
            <div className="col text-start m-5 pt-5 ps-5">
              <h5 className="text-white mb-4 ms-5 pb-3">Bienvenido a</h5>
              <h1 className="text-warning mb-4 ms-5">PREHorses</h1>
              <h5 className="text-white mb-4 ms-5 pt-3">
                Tu página de compra-venta de caballos Pura Raza Español
              </h5>
              <figure className="mt-5">
                <blockquote className="blockquote ms-5 ps-3">
                  <p
                    className="text-warning text-center"
                    style={{ width: 30 + "rem" }}
                  >
                    <em>
                      "De mi caballo aprendí que la fuerza se complementa con la
                      nobleza y la lealtad"
                    </em>
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer text-warning text-center mt-1">
                  Gabriel Oliverio
                </figcaption>
              </figure>
              <div
                className="d-flex justify-content-center mt-5 pt-3 ms-5"
                style={{ width: 30 + "rem" }}
              >
                <Link to="/demo">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg"
                  >
                    Regístrate
                  </button>
                </Link>
              </div>
            </div>

            <img
              src={caballoJumbotron}
              style={{ width: 30 + "rem", padding: 0 }}
            ></img>
          </div>
        </div>
      </div>
      <div id="carouselDiv"></div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p>
    </div>
  );
};