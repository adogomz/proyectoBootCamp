import React from "react";
import registro from "../pages/Registro";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
        });
    }
  }, [entrar]);
  return (
    <div className="">
      <div className="">
        <div className="">
          <h1>Iniciar Sesión</h1>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="">
          <button onClick={() => setEntrar(true)}>Entrar</button>
          <p>{mensaje}</p>
        </div>
        <div className="">
          <p>
            <Link to="/registro" className="">
              Crear cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
