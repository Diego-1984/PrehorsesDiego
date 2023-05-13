import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonContact = () =>{
    const navigate= useNavigate()
    return (
        <div className="d-flex justify-content-center">
            <div className="row align-items-end">
                <button type="button" className="btn btn-outline-warning text-end" onClick={() => navigate('/private/mensajes')}>
                    Contacta con el Vendedor
                </button>
            </div>
        </div>
    )
}

export default ButtonContact;