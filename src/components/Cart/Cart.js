import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartList from "./CartList";
import PromptModal from "../UI/Modal/Modal";
import DefaultButton from "../UI/Button/Button";

const Cart = () => {
  const cartxt = useContext(CartContext);
  const removeItem = (id) => {
    cartxt.removeFromCart(id);
  };
  const orderHandler = () => {
    console.log("Ordering");
  };

  return (
    <PromptModal onClose={cartxt.closeModal}>
      {cartxt.items.length !== 0 && (
        <div className="flex flex-col gap-10">
          <ul>
            <CartList items={cartxt.items} cartRemove={removeItem} />
          </ul>
          <div className="flex w-full items-center">
            <h2>Total = ${cartxt.total()}</h2>
            <DefaultButton onClick={orderHandler} className="ml-auto">
              Order Now
            </DefaultButton>
          </div>
        </div>
      )}
      {cartxt.items.length == 0 && (
        <h2 className="text-center">Your cart is empty </h2>
      )}
    </PromptModal>
  );
};

export default Cart;
