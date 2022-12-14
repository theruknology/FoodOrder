import React from "react";
import { SecondaryButton } from "../UI/Button/Button";

const CartItem = (props) => {
  const removeItem = () => {
    props.onRemove(props.id);
  };

  return (
    <div className="flex w-full">
      <div>
        <h2>{props.name}</h2>
        <p className="font-light">${props.price} x {props.amount}</p>
      </div>
      <SecondaryButton className="ml-auto" onClick={removeItem}>Remove</SecondaryButton>
    </div>
  );
};

export default CartItem;
