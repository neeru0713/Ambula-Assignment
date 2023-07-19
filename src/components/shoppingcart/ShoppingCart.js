import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem"

const ShoppingCart = () => {
  const { cartItems, totalItems, subtotal, removeItem } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemoveItem={removeItem}
            />
          ))}
          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Subtotal: ${subtotal}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
