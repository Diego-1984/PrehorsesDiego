import React, { Component } from "react";
import logo from "../../img/logo.png";

export const Footer = () => (
  <footer>
    <div
      id="colorFooter"
      className="d-flex flex-wrap justify-content-between align-items-center"
    >
      <p className="Container m-4" id="Text">
        @ Copyright PRE Horse
      </p>
      <div className="col-">
        <img src={logo} style={{ width: 6 + "rem", margin: 0.3 + "rem" }} />
      </div>
      <ul class="nav col-md-2 p-3 justify-content-end">
        <li class="nav-item">
          <a
            href="https://www.instagram.com/Prehor_ses/ "
            class="fa-brands fa-instagram nav-link"
            id="Icons"
          >
            {" "}
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100092000806848"
            class="fa-brands fa-facebook nav-link"
            id="Icons"
          >
            {" "}
          </a>
          <a
            href="https://twitter.com/Prehor_ses"
            class="fa-brands fa-twitter nav-link"
            id="Icons"
          >
            {" "}
          </a>
        </li>
      </ul>
    </div>
  </footer>
);