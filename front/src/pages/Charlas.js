import React from "react";
import "../assets/css/Charlas.css";
import fotoCharlas from "../assets/img/pexels-charlas.jpg";

export default function Charlas() {
  return (
    <>
      <body>
        <div>
          <div className="contenedor_title">
            <h1>
              Organicamos charlas tallares tanto en nutircion clinica o
              deportiva, donde podemos orientarte en habitos saludables
            </h1>
          </div>
          <div>
            <div>
              <img src={fotoCharlas} alt="fotoCharlas" />
            </div>
            Nos podemos desplazar a colegios, asocianones, instalaciones
            deportivas..
          </div>
        </div>
      </body>
    </>
  );
}
