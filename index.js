import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import CartContext, { CartContextProvider } from "./src/store/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
