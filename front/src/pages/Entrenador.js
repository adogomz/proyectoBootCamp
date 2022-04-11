import React from 'react';
import foto1 from '../assets/img/cuerposDeportistas.jpg'

export default function Entrenador() {
  return (
    <>
      <div className='entrenador'> 
        <div>

            <img className='imgCuerpos' src={foto1} alt="cuerpos" />
        </div>
        <div>
          <h2> hijo 2</h2>
        </div>
      </div>
      
      <p>Foto de Li Sun en Pexels</p>
    </>
  );
}
