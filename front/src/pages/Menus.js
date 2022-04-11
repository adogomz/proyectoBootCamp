import React, { useEffect, useState } from "react";

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
              {<img src={desayun.img} />}
              {desayun.nombre}
              {desayun.ingredientes}
              {desayun.preparacion}
            </div>
          );
        });
        setListaDesayunos(ld);
        let cartaComida = res.datos[0].comida.map((comid, index) => {
          return (
            <div key={index}>
              {<img src={comid.img} />}
              {comid.nombre}
              {comid.ingredientes}
              {comid.preparacion}
            </div>
          );
        });
        setListaComidas(cartaComida);
        let cartaCena = res.datos[0].cena.map((cen, index) => {
          return (
            <div key={index}>
              {<img src={cen.img} />}
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
