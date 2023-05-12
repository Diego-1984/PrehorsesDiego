import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Male } from "./pages/male";
import { Mares } from "./pages/mares";
import { Gelding } from "./pages/gelding";
import { UserAcountModifyUser } from "./pages/userAcountModifyUser";
import { UserAcountNewHorse } from "./pages/userAcountNewHorse";
import { UserAcountMyHorses } from "./pages/userAcountMyHorses";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Mensajes } from "./pages/mensajes";
import DescripcionCaballo from "./pages/descripcionCaballo";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  const [userIsLogged, setUserIsLogged] = useState(false);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar
            userIsLogged={userIsLogged}
            setUserIsLogged={setUserIsLogged}
          />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route
              element={
                <Login
                  userIsLogged={userIsLogged}
                  setUserIsLogged={setUserIsLogged}
                />
              }
              path="/login"
            />
            <Route element={<Male />} path="/male" />
            <Route element={<Mares />} path="/mares" />
            <Route element={<Gelding />} path="/gelding" />
            <Route element={<DescripcionCaballo />} path="/descripcion/:id" />
            <Route element={<Mensajes />} path="/mensajes" />
            <Route
              element={<UserAcountModifyUser />}
              path="/private/modifyuser"
            />
            <Route element={<UserAcountNewHorse />} path="/private/addhorse" />
            <Route element={<UserAcountMyHorses />} path="/private/myhorses" />
            <Route element={<Mensajes />} path="/private/mensajes" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
