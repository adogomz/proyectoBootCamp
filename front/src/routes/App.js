import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import "../assets/css/App.css";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Equipo from "../pages/Equipo";
import ContactUs from "../pages/ContactUs";
import SignUp from "../pages/SignUp";
import Nutricion from "../pages/Nutricion";
import Entrenador from "../pages/Entrenador";
import Charlas from "../pages/Charlas";
import Menus from "../pages/Menus";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/equipo" element={<Equipo />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
          <Route exact path="/sign-up" element={<SignUp />}></Route>
          <Route exact path="/nutricion" element={<Nutricion />}></Route>
          <Route exact path="/entrenador" element={<Entrenador />}></Route>
          <Route exact path="/charlas" element={<Charlas />}></Route>
          <Route exact path="/menus" element={<Menus />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
