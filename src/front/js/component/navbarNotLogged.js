import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const NavbarNotLogged = () => {
	return (
		<nav className="navbar bg-black border-bottom border-warning border-1">
			<div className="container bg-black">
				<Link to="/" className="bg-black">
					<img src={logo} style={{width: 8+'rem', margin:0.3+'rem', marginColor: 'black', backgroundColor: 'black'}}/>
				</Link>
				<div className="ml-auto bg-black">
					<Link to="/login" className="bg-black">
						<button className="btn btn-outline-warning">Iniciar sesión</button>
					</Link>
				</div>
			</div>
		</nav>
	)
};