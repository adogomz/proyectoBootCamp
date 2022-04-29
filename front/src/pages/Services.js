import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Services.css";
import fotoEntren from "../assets/img/pexels-_entrenador.jpg";
import fotoCharlas from "../assets/img/pexels-charlas.jpg";
import fotoNutri from "../assets/img/pexels_nutricion.jpg";
import Entrenador from "../pages/Entrenador";
import Nutricion from "../pages/Nutricion";
import Charlas from "../pages/Charlas";

export default function Services() {
  return (
    <>
      <h1 className="title">
        Somos un equipo multidisciplinar que te ayudara alcanzar objetivos
        reales aprendiendo hacer pequeños cambios dia a dia.
      </h1>
      <div className="container">
        <div className="card">
          <img src={fotoEntren} alt="Entrenador" />
          <h4>Entrenamientos y opososiciones</h4>
          <p>
            ¿ Necesitas ayuda con tus entrenamientos tanto de competicion como
            de preparacion de examenes?...
          </p>

          <a href="../pages/Entrenador.js">Saber más</a>
        </div>
        <div className="card">
          <img src={fotoNutri} alt="Nutricion" />
          <h4>Asesoramientos nutricional</h4>
          <p>
            No es lo mismo alimentarse que comer, si necesitas ayuda te
            orientaremos en como hacer pequeños cambios.
          </p>
          <a href="../pages/Nutricion.js">Saber más</a>
        </div>
        <div className="card">
          <img src={fotoCharlas} alt="Charlas" />
          <h4>Charlas y congresos</h4>
          <p>
            Realizamos charlas orientativas a grupos, asociaciones, colegios en
            las que explicamos que y como poder llevar una vida mas saludable.
          </p>
          <a href="../pages/Charlas.js">Saber más</a>
        </div>
      </div>
    </>
  );
}
