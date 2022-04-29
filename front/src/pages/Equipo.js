import React from "react";
import "../assets/css/Equipo.css";
import foto1 from "../assets/img/pexels-pixabay-220453.jpg";
import foto2 from "../assets/img/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import foto3 from "../assets/img/pexels-andrea-piacquadio-3763188.jpg";

export default function Equipo() {
  return (
    <>
      <section>
        <div className="clas">
          <div className="card">
            <div className="head">
              <div className="circle"></div>
              <div className="img">
                <img src={foto3} alt="" />
              </div>
            </div>

            <div className="description">
              <h2>Hugo Iglesias</h2>
              <h3>Nutricionista</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                accusantium,
              </p>
            </div>
            <div className="contact">
              <a href="#">Contacto</a>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <div className="circle"></div>
              <div className="img">
                <img src={foto1} alt="" />
              </div>
            </div>

            <div className="description">
              <h2>Hugo Iglesias</h2>
              <h3>Nutricionista</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                accusantium,
              </p>
            </div>
            <div className="contact">
              <a href="#">Contacto</a>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <div className="circle"></div>
              <div className="img">
                <img src={foto2} alt="" />
              </div>
            </div>

            <div className="description">
              <h2>Hugo Iglesias</h2>
              <h3>Nutricionista</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                accusantium,
              </p>
            </div>
            <div className="contact">
              <a href="#">Contacto</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
