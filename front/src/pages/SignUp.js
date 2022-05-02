import React from "react";
import registro from "../pages/Registro";
import "../assets/css/SingUp.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import sobre from "../assets/icons/email.jpg";
import candado from "../assets/icons/pass.png";
import profile from "../assets/icons/a.png";

function SingUp() {
  const [entrar, setEntrar] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (entrar == true) {
      let body = {
        username,
        password,
      };
      console.log("hola");
      console.log(body);

      let data = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      fetch("http://localhost:3002/login", data)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setMensaje(res.mensaje);
          if (res.mensaje.indexOf("Ok") != -1) {
            window.location.href = "http://localhost:3000/menus";
          }
        });
    }
  }, [entrar]);
  return (
    <>
      {/* //ddd esta es la que hecho yo */}
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1>Inicio de sesion</h1>
              <div>
                <img src={sobre} alt="email" className="email" />
                <input
                  type="text"
                  placeholder="nombre de usuario"
                  className="name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="second-input">
                <img src={candado} alt="pass" className="email" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="contraseña"
                  className="name"
                />
              </div>
              <div className="login-button">
                <button onClick={() => setEntrar(true)}>Entrar</button>
                <div>
                  <p className="black">{mensaje}</p>
                </div>
              </div>

              <p className="link">
                <a href="#">Recuperar clave</a>
                <Link to="/registro" className="link">
                  Crear cuenta
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingUp;
