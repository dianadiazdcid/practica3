// Ejercicio de React.Fragment
import React from 'react';

export default function Header() {
  const array = [1, 2, 3, 4, 5];
  let personas = {
    nombre: 'Lizbeth',
    apellido: 'Apellido',
    edad: 22,
    datos: array,
  };

  console.log(personas);

  return (
    <React.Fragment>
      <h1>Desde header {personas.nombre}</h1>
    </React.Fragment>
  );
}
