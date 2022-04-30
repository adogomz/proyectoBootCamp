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

      fetch("http://localhost:3000/registro", data)
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
    <div className="padre-user">
      <div className="campo-usuario">
        <div className="titulo-usuario">
          <h1>Crear Usuario</h1>
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
            className="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="text"
            placeholder="mail"
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
          <button onClick={() => setRegistrar(true)}>Registrarse</button>
          <p>{mensaje}</p>
        </div>
        <div className="nuevo-regristro">
          <p>
            <Link className="registro" to="/">
              Iniciar Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registro;
