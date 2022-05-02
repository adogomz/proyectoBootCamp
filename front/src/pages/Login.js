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
            className="contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="">
          <button onClick={() => setEntrar(true)}>Registrarse</button>
          <p>{mensaje}</p>
        </div>
        <div className="">
          <p>
            <Link className="registro" to="/registro">
              Crear cuenta nueva
            </Link>
          </p>
        </div>
      </div>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1>Login Page</h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="user name" className="name" />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="user name"
                  className="name"
                />
              </div>
              <div className="login-button">
                <button>Login</button>
              </div>

              <p className="link">
                <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
