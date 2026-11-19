
import { useState, useEffect } from 'react';

export default function Ejemplo() {
  const [cuenta, setCuenta] = useState(0);

  useEffect(() => {
    console.log('El contador cambió:', cuenta);
  }, [cuenta]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Contador: {cuenta}</h2>

      <button onClick={() => setCuenta(cuenta + 1)}>
        Aumentar
      </button>

      <button onClick={() => setCuenta(cuenta - 1)}>
        Disminuir
      </button>

      <button onClick={() => setCuenta(0)}>
        Reiniciar
      </button>
    </div>
  );
}
