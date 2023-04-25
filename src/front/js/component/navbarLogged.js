import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const NavbarLogged = ({userIsLogged, setUserIsLogged}) => {

    const logOut = (userIsLogged) =>{
        console.log('change to false')
        setUserIsLogged(userIsLogged = false)
    }

	return (
		<nav className="navbar bg-black border-bottom border-warning border-1">
			<div className="container">
			<Link to="/">
				<img src={logo} style={{width: 8+'rem', margin:0.3+'rem'}}/>
			</Link>
			<div className="ml-auto">
            	<li className="nav-item dropdown btn-group">
                	<a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       	<span id="account" className="material-symbols-outlined">
                           account_circle
                       	</span>
                   	</a>
                  	<ul className="dropdown-menu dropdown-menu-end bg-warning">
                      	<li><Link to="/" className="dropdown-item" style={{ textDecoration: 'none', color: 'black'}}>Ver mis caballos</Link></li>
                    	<li><Link to="/" className="dropdown-item" style={{ textDecoration: 'none', color: 'black' }}>Publicar un caballo</Link></li>
                        <li><Link to="/private/modifyuser" className="dropdown-item" style={{ textDecoration: 'none', color: 'black'}}>Modificar mis datos de usuario</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                    	<li><a className="dropdown-item" href="#" onClick = {()=>{logOut(userIsLogged)}}>Cerrar sesión</a></li>
                	</ul>
                </li>	
			</div>
		</div>
	</nav>
	)
};