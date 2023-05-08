import React from "react";
import ModifyUser from "../component/modifyUser";
import NavbarVertical from "../component/navBarVertical";

export const UserAcountModifyUser = () => {

	const colStyle={
		width: 15 + 'rem',
		height: 33 + 'rem',
		padding: 0
	}
	return (
		<div className="container m-0">
			<div className="row">
				<div className="col-3 border rounded border-warning p-0" style={colStyle}>
					<NavbarVertical />
				</div>
				<div className="col-9 pt-5 justify-content-center">
					<ModifyUser />
				</div>
			</div>
		</div>
	);
};

