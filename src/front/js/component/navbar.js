import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar bg-black border-bottom border-warning border-1">
			<div className="container">
				<Link to="/">
				<img src={logo} style={{width: 8+'rem', margin:0.3+'rem'}}/>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-outline-warning">Iniciar sesión</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
