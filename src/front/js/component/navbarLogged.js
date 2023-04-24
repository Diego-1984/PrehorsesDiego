import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const NavbarLogged = () => {
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
                        <li><a className="dropdown-item" href="#"><Link to="/login" style={{ textDecoration: 'none', color: 'black'}}>Ver mis caballos</Link></a></li>
                        <li><a className="dropdown-item" href="#"><Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Publicar un caballo</Link></a></li>
                        <li><a className="dropdown-item" href="#"><Link to="/login" style={{ textDecoration: 'none', color: 'black'}}>Modificar mis datos de usuario</Link></a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
                    </ul>
                </li>	
				</div>
			</div>
		</nav>
	);
};