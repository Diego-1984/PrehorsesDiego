import React, { Component } from "react";
import logo from "../../img/logo.png";

export const Footer = () => (
  <footer>
    <div
      id="colorFooter"
      className="mt-3 d-flex flex-wrap justify-content-between align-items-center"
    >
      <p className="Container m-4" id="Text">
      © Copyright PRE Horses
      </p>
      <div className="col">
        <img src={logo} style={{ width: 6 + "rem", margin: 0.3 + "rem" }} />
      </div>
      <ul className="nav col-md-3 p-3 justify-content-end">
        <li className="nav-item">
          <a
            href="https://www.instagram.com/Prehor_ses/ "
            className="fa-brands fa-instagram nav-link"
            id="Icons"
          >
            {" "}
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100092000806848"
            className="fa-brands fa-facebook nav-link"
            id="Icons"
          >
            {" "}
          </a>
          <a
            href="https://twitter.com/Prehor_ses"
            className="fa-brands fa-twitter nav-link"
            id="Icons"
          >
            {" "}
          </a>
          <a
            href="https://3000-4geeksacade-pt36horsesp-wyevrx6u3ar.ws-eu97.gitpod.io/team"
            className="fa-solid fa-people-group nav-link"
            id="Icons"
          >
            {" "}
          </a>
        </li>
      </ul>
    </div>
  </footer>
);