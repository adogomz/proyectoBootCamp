import React from "react";
import "../assets/css/App.css";
import { useState } from "react";

export default function ContactUs() {
  let [nombre, setNombre] = useState("Aqui puedes poner tu nombre");

  return (
    <>
      <div>
        <div>
          <input type="text" value={nombre} />
        </div>
      </div>
    </>
  );
}
