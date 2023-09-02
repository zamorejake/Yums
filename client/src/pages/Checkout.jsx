import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';

const Checkout = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <img alt="Cart" width={50} height={50} src="images/cart.png" />
      </button>
      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul>
          {cart.map((item) => (
            <li className="pb-3" key={item._id}>
              {item.name} - ${item.price}
              <button
                className="text-danger"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <li className="pb-1 font-bold text-xl">Total: ${total.toFixed(2)}</li>
        <button className="pb-1 px-2 text-white text-xl font-bold bg-green-400">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Checkout;
