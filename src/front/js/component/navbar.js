import React from "react";
import { NavbarNotLogged } from "./navbarNotLogged";
import { NavbarLogged } from "./navbarLogged";

export const Navbar = ({userIsLogged, setUserIsLogged}) => {

	if(userIsLogged == false){
		return <NavbarNotLogged />
	}else{
		return <NavbarLogged userIsLogged = {userIsLogged} setUserIsLogged = {setUserIsLogged}/>
	}
};