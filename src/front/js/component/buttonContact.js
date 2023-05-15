import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonContact = ({isChatShown, setIsChatShown}) =>{
    const showChat = (isChatShown) =>{
        if(isChatShown == false){
            setIsChatShown(isChatShown = true);
            console.log('change chat to true')
        }else{
            setIsChatShown(isChatShown = false);
            console.log('change chat to false')
        }
      }

    return (
        <div className="d-flex ps-3">
            <div className="row align-items-end">
                <button type="button" className="btn btn-warning text-end" onClick={()=>{showChat(isChatShown)}}>
                    Contacta con el Vendedor
                </button>
            </div>
        </div>
    )
}

export default ButtonContact;