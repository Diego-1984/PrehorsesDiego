import React from "react";
const ButtonContact = ({isChatShown, setIsChatShown}) =>{
    const showChat = (isChatShown) =>{
        if(isChatShown == false){
            setIsChatShown(isChatShown = true);
        }else{
            setIsChatShown(isChatShown = false);
        }
      }
    return (
        <div className="d-flex ps-3">
            <div className="row align-items-end">
                <button type="button" className="btn btn-warning text-end" onClick={()=>{showChat(isChatShown);}}>
                    Contactar con el vendedor
                </button>
            </div>
        </div>
    )
}
export default ButtonContact;