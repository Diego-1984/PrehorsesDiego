import React, { useState, useEffect, useContext } from "react";
import ModifyUser from "../component/modifyUser";
import NavbarVertical from "../component/navBarVertical";

export const UserAcountModifyUser = () => {

	return (
		<div>
			<NavbarVertical />
			<ModifyUser />
		</div>
	);
};

