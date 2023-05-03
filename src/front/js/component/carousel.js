import React from "react"
import caballoMacho from "../../img/caballoMacho.jpg"
import caballosHembras from "../../img/caballosHembras.jpg"
import caballoCastrado from "../../img/caballoCastrado.jpg"
import { Link } from "react-router-dom"
const Carousel = () =>{

    return (
        <>
        <div className="row">
            <div className="col-12 m-4">
                <Link to="/male">
                    <img src={caballoMacho} />
			    </Link>
            </div>
            <div className="col-12 m-4">
                <Link to="/mares">
                    <img src={caballosHembras} />
			    </Link>
            </div>
            <div className="col-12 m-4">
                <Link to="/gelding">
                    <img src={caballoCastrado} />
			    </Link>
            </div>
            </div>
        </>
    )
}

export default Carousel;