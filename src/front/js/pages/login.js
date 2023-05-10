import React, { useState, useContext} from "react";
import "../../styles/login.css"
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = ({userIsLogged, setUserIsLogged}) => {

	const [user, setUser] = useState({})
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const logIn = (userIsLogged) =>{
	console.log('change to true')
    setUserIsLogged(userIsLogged = true)
   }

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
						className="input-field"
						onChange={(e)=>{setUser({...user, email:e.target.value})}}/>
						<input type="password"
						placeholder="Contraseña"
						className="input-field"
						onChange={(e)=>{setUser({...user, password:e.target.value})}}/>
						<input id="loginButton"
						value="Log in" className="submit-btn"
						onClick={()=>{actions.loginUser(user); logIn(userIsLogged); navigate("/")}}/>
					</form>
				</div>
				<div className="signup">
					<h1>Registrarse</h1>
					<p>Introduzca sus datos para registrarse</p>
					<form>
						<input type="name"
						placeholder="Nombre de usuario"
						className="input-field"
						onChange={(e) => {
							setUser({...user, name: e.target.value}); 
							console.log(user)}}
						required/>
						<input type="email"
						placeholder="Email"
						className="input-field"
						onChange={(e) => {
							setUser({ ...user, email: e.target.value }); 
							console.log(user)}}
						required/>
						<input type="password"
						placeholder="Contraseña"
						className="input-field"
						onChange={(e) => {
							setUser({...user, password: e.target.value}); 
							console.log(user)}}
						required/>
						<input type="submit"
						value="Sign up" className="submit-btn"
						onClick={()=>{
							fetch(process.env.BACKEND_URL+"/api/user",{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body : JSON.stringify(user)
							})
							.then((resp)=>resp.json())
							.then((data) => {
								alert("Usuario registrado, por favor inicie sesión")
							});
						}}
						/>
					</form>
				</div>
			</div>
		</>
	);
};
