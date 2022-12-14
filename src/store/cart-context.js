import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  modalOpen: true,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  closeModal: () => {},
  openModal: () => {},
  total: ()=>{},
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.unshift(item);
      
      return updatedItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const result = prevItems.filter((item) => item.id != id);

      return result;
    });
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const totalCalc = () => {
    let total = 0;
    cartItems.map(itm => {
      total += (itm.price * itm.amount);
    })
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        modalOpen: modalOpen,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        closeModal: closeModalHandler,
        openModal: openModalHandler,
        total: totalCalc
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
