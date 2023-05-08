import React from "react";
import NavbarVertical from "../component/navBarVertical";
import FormularioVenta from "../component/formularioventa";

export const UserAcountNewHorse = () => {

    const colStyle={
		width: 15 + 'rem',
		height: 33 + 'rem',
		padding: 0
	}

    return(
        <>
            <div className="container m-0">
			    <div className="row">
				    <div className="col-3 border rounded border-warning p-0" style={colStyle}>
					    <NavbarVertical />
				    </div>
				    <div className="col-9 justify-content-center">
                        <FormularioVenta />
				    </div>
			    </div>
		    </div>
        </>
    )
}