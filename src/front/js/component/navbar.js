import React, {useContext} from "react";
import { NavbarNotLogged } from "./navbarNotLogged";
import { NavbarLogged } from "./navbarLogged";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store} = useContext(Context)
	return (
		<>
			{store.token ? <NavbarLogged /> : <NavbarNotLogged />}
		</>
	)
};