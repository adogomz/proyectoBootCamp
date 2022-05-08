import React, { useEffect, useState } from "react";
import "../assets/css/Menus.css";
export default function Menus() {
  let [menus, setMenus] = useState([]);
  let [desayunos, setDesayuno] = useState([]);
  let [comida, setComida] = useState([]);
  let [cena, setCena] = useState([]);
  let [listaDesayunos, setListaDesayunos] = useState([]);
  let [listaComidas, setListaComidas] = useState([]);
  let [listaCenas, setListaCenas] = useState();

  useEffect(() => {
    fetch("http://localhost:3002/menus")
      .then((res) => res.json())
      .then((res) => {
        let ld = res.datos[0].desayuno.map((desayun, index) => {
          console.log(desayun);
          return (
            <div key={index}>
              <div className="card">
                <div className="card-content">
                  <div className="card-img">{<img src={desayun.img} />}</div>
                  <div className="card-text">
                    <h4>{desayun.nombre}</h4>
                    <p className="texto">{desayun.ingredientes}</p>
                    <p className="texto">{desayun.preparacion}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
        setListaDesayunos(ld);
        let cartaComida = res.datos[0].comida.map((comid, index) => {
          return (
            <div key={index}>
              <div className="card">
                <div className="car-content">
                  <div className="card-img">{<img src={comid.img} />}</div>
                  <div className="card-text">
                    <h4>{comid.nombre}</h4>
                    <p className="texto">{comid.ingredientes}</p>
                    <p className="texto">{comid.preparacion}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
        setListaComidas(cartaComida);
        let cartaCena = res.datos[0].cena.map((cen, index) => {
          return (
            <div key={index}>
              <div className="card">
                <div className="card-content">
                  <div className="card-img">{<img src={cen.img} />}</div>
                  <div className="card-text">
                    <h4>{cen.nombre}</h4>
                    <p className="texto">{cen.ingredientes}</p>
                    <p className="texto">{cen.preparacion}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
        setListaCenas(cartaCena);
      });
  });

  //   useEffect(() => {
  //     if (comida !== undefined) {
  // let cartaComida = comida.map((comida, index) => {
  //   return (
  //     <div key={index}>
  //       {<img src={comida.img} />}
  //       {comida.nombre}
  //       {comida.ingredientes}
  //       {comida.preparacion}
  //     </div>
  //   );
  // });
  // setListaComidas(cartaComida);
  //     }
  //   });

  return (
    <>
      <div>
        <h2 className="titulo">Aqui te dejamos unos menus</h2>
        <h3 className="titulo2">Lista desayunos</h3>
        <div>{listaDesayunos}</div>
      </div>
      <div>
        <h3 className="titulo2">Lista comidas</h3>
        <div>{listaComidas}</div>
      </div>
      <div>
        <h3 className="titulo2">Lista cenas</h3>
        <div>{listaCenas}</div>
      </div>
    </>
  );
}
