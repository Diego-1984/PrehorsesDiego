import React, {useState} from "react";

const ButtonContact = ({isChatShown, setIsChatShown}) =>{
    const [textoButton, setTextoButton] = useState("Contactar con el vendedor");
    const showChat = (isChatShown) =>{
        if(isChatShown == false){
            setIsChatShown(isChatShown = true);
        }else{
            setIsChatShown(isChatShown = false);
        }
      }
const toogleTextButtonLabel=()=>{
    if (textoButton == "Contactar con el vendedor"){
        setTextoButton("Volver")
    } else {setTextoButton("Contactar con el vendedor")}
}

    return (
        <div className="d-flex ps-3">
            <div className="row align-items-end">
                <button type="button" className="btn btn-warning text-end" onClick={()=>{showChat(isChatShown);toogleTextButtonLabel()}}>
                   {textoButton}
                </button>
            </div>
        </div>
    )
}

export default ButtonContact;