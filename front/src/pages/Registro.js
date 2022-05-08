import React from "react";
import "../assets/css/SingUp.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import sobre from "../assets/icons/email.jpg";
import candado from "../assets/icons/pass.png";
import profile from "../assets/icons/a.png";

function Registro() {
  const [registrar, setRegistrar] = useState(false);
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (registrar == true) {
      let body = {
        username,
        mail,
        password,
      };

      console.log(body);

      let data = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      fetch("http://localhost:3002/registro", data)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setMensaje(res.mensaje);
        });
    }
  }, [registrar]);

  return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <div>
              <h1>Registro de usuario</h1>
              <div>
                <img src={profile} alt="username" className="email" />
                <input
                  type="text"
                  placeholder="nombre de usuario"
                  className="name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="second-input">
                <img
                  src={sobre}
                  alt="email"
                  className="email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="correo de usuario"
                  className="name"
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
                <button onClick={() => setRegistrar(true)}>Registrarse</button>
                <div>
                  <p className="black">{mensaje}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registro;
