import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import DefaultButton from "../UI/Button/Button";

const Navigation = (props) => {
  const cartxt = useContext(CartContext)

  return (
    <nav className="fixed top-0 left-0 z-10 w-full py-3 bg-orange-200 inline-flex items-center">
      <p className="ml-4 text-lg">FoodieOrder</p>
      <DefaultButton className="ml-auto mr-4" onClick={cartxt.openModal}>
        Your Cart
        <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-primary bg-orange-300 rounded-full ">
          {cartxt.items.length}
        </span>
      </DefaultButton>
    </nav>
  );
};

export default Navigation;
