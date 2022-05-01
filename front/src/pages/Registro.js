import React from "react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <div className="">
      <div className="">
        <div className="">
          <h1>Crear Usuario</h1>
        </div>
        <div className="">
          <input
            className=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Usuario"
          />
          <input
            className=""
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="text"
            placeholder="mail"
          />
          <input
            className=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="">
          <button onClick={() => setRegistrar(true)}>Registrarse</button>
          <p>{mensaje}</p>
        </div>
        <div className="nuevo-regristro">
          <p>
            <Link className="" to="/">
              Iniciar Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registro;
