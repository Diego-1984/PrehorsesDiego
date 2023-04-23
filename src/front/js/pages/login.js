import React from "react";
import "../../styles/login.css";

export const Login = () => {


	return (
		<>
		<div className="container">
			<div className="myContainer">
				<div className="form">
					<nav>
						<ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
							<li className="nav-item" role="presentation">
    							<button className="nav-link active" id="signup button" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Registro</button>
  							</li>
  							<li className="nav-item" role="presentation">
    							<button className="nav-link" id="login button" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Iniciar sesión</button>
  							</li>
						</ul>
					</nav>

					<div className="tab-content" id="nav-tabContent">
  						<div className="tab-pane fade show active" id="signup" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
						  	<div id="signup" className="text-center">
								<h1>Regístrese gratis</h1>
								<form>
									<div className="top-row">
										<div className="row m-2">
											<label>
                								Nombre
              								</label>
              								<input type="text" required autoComplete="off" />
										</div>
										<div className="row m-2">
											<label>
                								Nombre de usuario
              								</label>
              								<input type="text"required autoComplete="off"/>
										</div>
										<div className="row m-2">
											<label>
              									Email
            								</label>
            								<input type="email"required autoComplete="off"/>
										</div>
										<div className="row m-2">
											<label>
              									Contraseña
            								</label>
            								<input type="password"required autoComplete="off"/>
										</div>
										<button type="submit" className="button button-block">Get Started</button>
									</div>
								</form>
							</div>
						</div>
  						<div className="tab-pane fade" id="login" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
							<div id="login">
								<h1>¡Bienvenido de nuevo!</h1>
								<form action="/" method="post">
									<div className="field-wrap">
           								<label>
              							Email
            							</label>
            							<input type="email"required autoComplete="off"/>
          							</div>
          							<div className="field-wrap">
            							<label>
              								Contraseña
            							</label>
            							<input type="password"required autoComplete="off"/>
          							</div>
          							<button className="button button-block">Iniciar sesión</button>
								</form>
							</div>
						</div>
					</div>
				</div>

			{/* <div className="form">
				<ul className="tab-group">
					<li className="tab active"><a href="#signup">Regístrese</a></li>
        			<li className="tab"><a href="#login">Iniciar sesión</a></li>
				</ul>
				<div className="tab-content">
					<div id="signup">
						<h1>Regístrese gratis</h1>
						<form>
							<div className="top-row">
								<div className="field-wrap">
									<label>
                						Nombre
              						</label>
              						<input type="text" required autoComplete="off" />
								</div>
								<div className="field-wrap">
									<label>
                						Nombre de usuario
              						</label>
              						<input type="text"required autocomplete="off"/>
								</div>
								<div className="field-wrap">
									<label>
              							Email
            						</label>
            						<input type="email"required autocomplete="off"/>
								</div>
								<div className="field-wrap">
									<label>
              							Contraseña
            						</label>
            						<input type="password"required autocomplete="off"/>
								</div>
								<button type="submit" className="button button-block">Get Started</button>
							</div>
						</form>
					</div>

					<div id="login">
						<h1>¡Bienvenido de nuevo!</h1>
						<form action="/" method="post">
							<div className="field-wrap">
           						<label>
              						Emai
            					</label>
            					<input type="email"required autocomplete="off"/>
          					</div>
          					<div className="field-wrap">
            					<label>
              						Contraseñ
            					</label>
            					<input type="password"required autocomplete="off"/>
          					</div>

          					<p className="forgot"><a href="#">¿Olvidó su contraseña?</a></p>

          					<button className="button button-block">Iniciar sesión</button>
						</form>
					</div>
				</div>
			</div> */}
			</div>
		</div>

		</>
	);
};
