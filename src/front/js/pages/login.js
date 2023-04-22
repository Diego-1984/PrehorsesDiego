import React from "react";
import "../../styles/login.css"

export const Login = () => {

	return (
		<>
			<div className="setup">
				<div id="cover">
					<h1 className="sign-up">¿Aún no tiene una cuenta con nosotros?</h1>
					<p className="sign-up">Regístrese gratis</p>
					<a className="button sign-up" href="#cover">Registrarse</a>
					<h1 className="log-in">¿Ya está registrado?</h1>
					<p className="log-in">Acceda a su cuenta</p>
					<a className="button sub log-in" href="#">Iniciar sesión</a>
				</div>
				<div className="login">
					<h1>Iniciar sesión</h1>
					<p>Introduzca su email y contraseña</p>
					<form>
						<input type="email"
						placeholder="Email"
						className="input-field"/>
						<input type="password"
						placeholder="Contraseña"
						className="input-field"/>
						<input type="submit"
						value="Log in" className="submit-btn"/>
					</form>
				</div>
				<div className="signup">
					<h1>Registrarse</h1>
					<p>Introduzca sus datos para registrarse</p>
					<form>
						<input type="username"
						placeholder="Nombre de usuario"
						className="input-field"/>
						<input type="email"
						placeholder="Email"
						className="input-field"/>
						<input type="password"
						placeholder="Contraseña"
						className="input-field"/>
						<input type="submit"
						value="Sign up" className="submit-btn"/>
					</form>
				</div>
			</div>
		</>
	);
};
