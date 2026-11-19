// Ejercicio de React.Fragment.
// Se importa React para poder usar React.Fragment de forma explícita.
import React from 'react';

export default function Header({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
}) {
  const array = [1, 2, 3, 4, 5];
  let personas = {
    nombre: 'Lizbeth',
    apellido: 'Apellido',
    edad: 22,
    datos: array,
  };

  console.log(personas);
  console.log(cart.map((computer) => computer.name));

  // Variable derivada para saber si el carrito está vacío
  const isEmpty = () => cart.length === 0;

  // Total a pagar con reduce
  const cartTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <React.Fragment>
      <h1>Desde header {personas.nombre}</h1>

      <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img
                  className="img-fluid"
                  src="/img/logo.svg"
                  alt="imagen logo"
                />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="carrito">
                <img
                  className="img-fluid"
                  src="/img/carrito.png"
                  alt="imagen carrito"
                />

                <div id="carrito" className="bg-white p-3">
                  {isEmpty() ? (
                    <p className="text-center">El carrito esta vacio</p>
                  ) : (
                    <>
                      <table className="w-100 table">
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((computer) => (
                            <tr key={computer.id}>
                              <td>
                                <img
                                  className="img-fluid"
                                  src={`/img/${computer.image}.jpg`}
                                  alt={`Imagen de ${computer.name}`}
                                />
                              </td>
                              <td>{computer.name}</td>
                              <td className="fw-bold">${computer.price}</td>
                              <td className="flex align-items-start gap-4">
                                <button
                                  type="button"
                                  className="btn btn-dark"
                                  onClick={() => decreaseQuantity(computer.id)}
                                >
                                  -
                                </button>
                                {computer.quantity}
                                <button
                                  type="button"
                                  className="btn btn-dark"
                                  onClick={() => increaseQuantity(computer.id)}
                                >
                                  +
                                </button>
                              </td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  type="button"
                                  onClick={() => removeFromCart(computer.id)}
                                >
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <p className="text-end">
                        Total pagar:{' '}
                        <span className="fw-bold">${cartTotal()}</span>
                      </p>
                    </>
                  )}

                  <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
