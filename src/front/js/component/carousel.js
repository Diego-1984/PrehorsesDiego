import React from "react"
import caballoMacho from "../../img/caballoMacho.jpg"
import caballosHembras from "../../img/caballosHembras.jpg"
import caballoCastrado from "../../img/caballoCastrado.jpg"

const Carousel = () =>{
    return (
        <>
            <section className="border border-dark">
                <img src={caballosHembras} />
                <img src={caballoMacho} />
                <img src={caballoCastrado} />
            </section>
        </>
    )
}

export default Carousel;