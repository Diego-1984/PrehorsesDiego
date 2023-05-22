import React, { useContext, useEffect } from "react";
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
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import DescripcionCaballo from "./pages/descripcionCaballo";
import Team from "./pages/team";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  const {actions} = useContext(Context);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (!!token){
      actions.setToken(token)
    }
  }, [])

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar/>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />}path="/login"/>
            <Route element={<Male />} path="/male" />
            <Route element={<Mares />} path="/mares" />
            <Route element={<Gelding />} path="/gelding" />
            <Route element={<DescripcionCaballo />} path="/descripcion/:id" />
            <Route element={<UserAcountModifyUser />} path="/private/modifyuser"/>
            <Route element={<UserAcountNewHorse />} path="/private/addhorse" />
            <Route element={<UserAcountMyHorses />} path="/private/myhorses" />
            <Route element={<Team />} path="/team" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
