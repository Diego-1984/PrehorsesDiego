import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";

export const NavbarLogged = () => {

	const navigate = useNavigate()
	const {actions} = useContext(Context)

	const logOut = () =>{
		actions.clearToken();
		navigate('/')
	}

	return (
		<nav className="navbar bg-black">
			<div className="container bg-black">
			<Link to="/">
				<img src={logo} style={{width: 8+'rem', margin:0.3+'rem'}}/>
			</Link>
			<div className="ml-auto bg-black">
				<Link to="/private/addhorse" className="bg-black me-5">
					<button className="btn btn-outline-warning">Publica tu caballo</button>
				</Link>
            	<li className="nav-item dropdown btn-group bg-black">
                	<a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       	<span id="account" className="material-symbols-outlined">
                           account_circle
                       	</span>
                   	</a>
                  	<ul className="dropdown-menu dropdown-menu-end bg-warning">
                      	<li><Link to="/private/myhorses" className="dropdown-item" style={{ textDecoration: 'none', color: 'black'}}>Ver mis caballos</Link></li>
                    	<li><Link to="/private/addhorse" className="dropdown-item" style={{ textDecoration: 'none', color: 'black' }}>Publicar un caballo</Link></li>
                        <li><Link to="/private/modifyuser" className="dropdown-item" style={{ textDecoration: 'none', color: 'black'}}>Modificar mis datos de usuario</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                    	<li><a className="dropdown-item" href="#" onClick={()=>{logOut()}}>Cerrar sesión</a></li>
                	</ul>
                </li>	
			</div>
		</div>
	</nav>
	)
};