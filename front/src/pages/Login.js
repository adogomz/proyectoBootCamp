import React from "react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
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
    <div className="padre-user">
      <div className="campo-usuario">
        <div className="titulo-usuario">
          <h1>Iniciar Sesión</h1>
        </div>
        <div className="usuario">
          <input
            className="nombre-user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Usuario"
          />
          <input
            className="contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="boton-subir">
          <button onClick={() => setEntrar(true)}>Registrarse</button>
          <p>{mensaje}</p>
        </div>
        <div className="nuevo-regristro">
          <p>
            <Link className="registro" to="/registro">
              Crear cuenta nueva
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
