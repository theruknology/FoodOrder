import React, { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import DefaultButton from "../UI/Button/Button";

const MenuItem = (props) => {
  const amountInputRef = useRef();

  const cartxt = useContext(CartContext);

  const submitCartHandler = (event) => {
    event.preventDefault();

    const amountGiven = amountInputRef.current.value;

    if (amountGiven == "") {
      cartxt.addToCart({
        id: Math.random().toString(),
        amount: 1,
        name: props.name,
        price: props.price,
      });

      return;
    } else {
      cartxt.addToCart({
        id: Math.random().toString(),
        amount: +amountGiven,
        name: props.name,
        price: props.price,
      });
    }
  };

  return (
    <div className="flex flex-row gap-10 w-full items-center drop-shadow-lg">
      <div className="w-96 flex flex-col gap-4">
        <h2>{props.name}</h2>
        <p className="font-thin italic">{props.description}</p>
        <p>${props.price}</p>
      </div>
      <form
        className="flex flex-col gap-1 ml-auto w-fit"
        onSubmit={submitCartHandler}
      >
        <div className="flex gap-1 text-sm ml-auto">
          <label className="font-light">Amount: </label>
          <input
            ref={amountInputRef}
            type="number"
            min="1"
            className="font-light inline w-10 focus:outline-none focus:ring-4 focus:ring-orange-200 rounded-md bg-orange-300 text-center"
          />
        </div>
        <DefaultButton className="ml-auto drop-shadow-sm">
          Add to cart
        </DefaultButton>
      </form>
    </div>
  );
};

export default MenuItem;
