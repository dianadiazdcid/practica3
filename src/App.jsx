import { useState, useEffect } from 'react';
import { db } from './data/db.js';

import Ejemplo from './components/Ejemplo.jsx';
import Header from './components/Header.jsx';
import Computer from './components/Computer.jsx';
import Footer from './components/Footer.jsx';

const MAX_QUANTITY = 5;
const MIN_QUANTITY = 1;

// Lee el carrito guardado; si no hay nada o el JSON es inválido, inicia vacío
function initialCart() {
  try {
    const saved = localStorage.getItem('cart');
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    setData(db);
    console.log('Productos cargados desde db.js:', db);
  }, []);

  // Guarda en localStorage DESPUÉS de que cart cambió
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Agrega al carrito; si ya existe, aumenta quantity sin mutar el original
  function addToCart(item) {
    const existComputer = cart.findIndex((computer) => computer.id === item.id);

    if (existComputer >= 0) {
      increaseQuantity(item.id);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  // Elimina un producto por id con filter
  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((computer) => computer.id !== id));
  }

  // Aumenta la cantidad (máximo 5) devolviendo objetos nuevos
  function increaseQuantity(id) {
    const updateQuantity = cart.map((computer) => {
      if (computer.id === id && computer.quantity < MAX_QUANTITY) {
        return { ...computer, quantity: computer.quantity + 1 };
      }
      return computer;
    });
    setCart(updateQuantity);
  }

  // Decremento con la misma lógica (mínimo 1)
  function decreaseQuantity(id) {
    const updateQuantity = cart.map((computer) => {
      if (computer.id === id && computer.quantity > MIN_QUANTITY) {
        return { ...computer, quantity: computer.quantity - 1 };
      }
      return computer;
    });
    setCart(updateQuantity);
  }

  // Vacía el carrito
  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">
          Nuestra Colección
        </h2>

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
