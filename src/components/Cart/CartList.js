import React from "react";
import CartItem from "./CartItem";

const CartList = (props) => {
  const removeItemHandler = (id) => {
    props.cartRemove(id);
  };

  return (
    <ul className="flex flex-col gap-4">
      {props.items.map((itm) => (
        <CartItem
          key={itm.id}
          id={itm.id}
          amount={itm.amount}
          name={itm.name}
          price={itm.price}
          onRemove={removeItemHandler}
        />
      ))}
    </ul>
  );
};

export default CartList;
