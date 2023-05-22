import React from "react";

const Team = () => {
  return (
    <>
      <div className="row mt-4 p-3 ">
        <div className="card3">
          <div className="images-box">
            <img
              src="https://avatars.githubusercontent.com/u/116676429?v=4"
              id="Team"
              alt=""
            />
          </div>
          <div className="conten-box">
            <div className="conten">
              <h1>Diego Menor Uceta</h1>
              <p>Full Stack Developer</p>
              <div className="redes">
                <a
                  href="https://github.com/Diego-1984"
                  className="fa-brands fa-github"
                  id="redes"
                ></a>
                <a
                  href="https://www.linkedin.com/in/diego-menor-uceta-98656143/"
                  className="fa-brands fa-linkedin"
                  id="redes"
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div className="card3">
          <div className="images-box">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQGSBmyvGgaX4g/profile-displayphoto-shrink_800_800/0/1599555074962?e=1690416000&v=beta&t=7ybGklOk9V6LfwVYjYu9nK1FtoEDYivrBjZf8DmAIIE"
              id="Team"
              alt=""
            />
          </div>
          <div className="conten-box">
            <div className="conten">
              <h1>Patricia Muñoz Gonzalez</h1>
              <p>Full Stack Developer</p>
              <div className="redes">
                <a
                  href="https://github.com/PatriciaMG92"
                  className="fa-brands fa-github"
                  id="redes"
                ></a>
                <a
                  href="https://www.linkedin.com/in/patricia-mu%C3%B1oz-gonzalez/"
                  className="fa-brands fa-linkedin"
                  id="redes"
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div className="card3">
          <div className="images-box">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQGdTgRhoD1Kzw/profile-displayphoto-shrink_800_800/0/1683565377043?e=1690416000&v=beta&t=gmnIUjMbGT7q0VMlC91to-h_dxN6b-p8iuTSjeIj47E"
              id="Team"
              alt=""
            />
          </div>
          <div className="conten-box">
            <div className="conten">
              <h1>Alessandra Fantozzi Mazzola</h1>
              <p>Full Stack Developer</p>
              <div className="redes">
                <a
                  href="https://github.com/Alefantozzi86"
                  className="fa-brands fa-github"
                  id="redes"
                ></a>
                <a
                  href="https://www.linkedin.com/in/alessandra-fantozzi-mazzola-497173174/"
                  className="fa-brands fa-linkedin"
                  id="redes"
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div className="Container d-flex justify-content-center mb-5">
          <h1>Tecnologías aplicadas en nuestra plataforma</h1>
        </div>

        <div className="row mb-1 p-0 justify-content-center align-items-center" id="tecnologias">
          <div className="col text-center">
            <img
              src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"
              style={{ width: 400 + "px" }}
            />
          </div>
          <div className="col text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
              style={{ width: 200 + "px" }}
            />
          </div>
          <div className="col text-center">
            <img
              src="https://www.intercomarcal.com/wp-content/uploads/2021/03/97311_92241.jpg"
              style={{ width: 400 + "px" }}
            />
          </div>
        </div>
        <div className="row mb-1 p-0 justify-content-center align-items-center">
            <div className="col text-center">
              <img
                src="https://vendup.fun/assets/jwt-1130c594.png"
                style={{ width: 400 + "px" }}
              />
            </div>
            <div className="col text-center">
              <img
                src="https://www.drupal.org/files/project-images/logo_191.png"
                style={{ width: 400 + "px" }}
              />
            </div>
            <div className="col text-center">
              <img
                src="https://www.learningcomputer.com/blog/wp-content/uploads/2020/04/HTML5.png"
                style={{ width: 400 + "px" }}
              />
            </div>
        </div>
        <div className="row mb-1 p-0 justify-content-center align-items-center">
            <div className="col text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
                style={{ width: 250 + "px" }}
              />
            </div>
            <div className="col text-center">
              <img
                src="https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png"
                style={{ width: 400 + "px" }}
              />
            </div>
            <div className="col text-center">
              <img
                src="https://hakin9.org/wp-content/uploads/2019/08/connect-a-flask-app-to-a-mysql-database-with-sqlalchemy-and-pymysql.jpg"
                style={{ width: 400 + "px" }}
              />
            </div>
        </div>
      </div>
    </>
  );
};

export default Team;
