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
              <div>
                <div className="item1">{<img src={desayun.img} />}</div>
                <div className="item2">
                  <h4>{desayun.nombre}</h4>
                </div>
                <div className="item3">{desayun.ingredientes}</div>
                {desayun.preparacion}
              </div>
            </div>
          );
        });
        setListaDesayunos(ld);
        let cartaComida = res.datos[0].comida.map((comid, index) => {
          return (
            <div key={index}>
              <div className="container">
                {<img src={comid.img} />}
                {comid.nombre}
                {comid.ingredientes}
                {comid.preparacion}
              </div>
            </div>
          );
        });
        setListaComidas(cartaComida);
        let cartaCena = res.datos[0].cena.map((cen, index) => {
          return (
            <div key={index}>
              <div>{<img src={cen.img} />}</div>
              {cen.nombre}
              {cen.ingredientes}
              {cen.preparacion}
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
      {listaDesayunos}
      {listaComidas}
      {listaCenas}
    </>
  );
}
