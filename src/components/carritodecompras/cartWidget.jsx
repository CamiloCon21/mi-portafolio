import React, { useContext } from 'react';
import { CartContext } from './cartcontext';


const CartWidget = () => {
  const { cart, setCart } = useContext(CartContext); // Accedemos al contexto

  const agregarProducto = () => {
    const nuevoProducto = {
      id: cart.length + 1,
      nombre: `Producto ${cart.length + 1}`
    };

    // Actualizamos el carrito
    setCart([...cart, nuevoProducto]);
  };

  return (
    <div>
      <p>🛒 Productos en el carrito: {cart.length}</p>
      <button onClick={agregarProducto}>Agregar producto</button>
    </div>
  );
};

export default CartWidget;
