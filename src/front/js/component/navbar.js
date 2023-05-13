import React from "react";
import { NavbarNotLogged } from "./navbarNotLogged";
import { NavbarLogged } from "./navbarLogged";

export const Navbar = () => {

	if(!localStorage.getItem("token")){
		return <NavbarNotLogged />
	}
	return <NavbarLogged />
	
};