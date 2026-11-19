import { useState, useEffect } from 'react';
import { db } from './data/db.js';

import Ejemplo from './components/Ejemplo.jsx';
import Header from './components/Header.jsx';
import Computer from './components/Computer.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setData(db);
    console.log('Productos cargados desde db.js:', db);
  }, []);

  // Agrega el producto seleccionado al carrito (copia no mutable)
  function addToCart(item) {
    console.log('ya existe el producto...');
    setCart([...cart, item]);
    console.log(cart);
  }

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((computer) => (
            <Computer
              key={computer.id}
              computer={computer}
              addToCart={addToCart}
            />
          ))}
        </div>

        {/* Ejercicio useEffect */}
        <Ejemplo />
      </main>

      <Footer />
    </>
  );
}

export default App;
