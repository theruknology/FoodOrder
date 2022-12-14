import React, { useContext } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import MenuList from "./components/Menu/MenuList";
import CartContext from "./store/cart-context";

export default function App() {
  const cartxt = useContext(CartContext);
  const menuItems = [
    {
      id: Math.random().toString(),
      name: "Biryani",
      price: 22,
      description: "Hyderabad's Famous Biryani, India's finest dish, and frankly the best of India too",
    },
    {
      id: Math.random().toString(),
      name: "Schnitzel",
      price: 20,
      description: "German, I guess, I havent tried",
    },
    {
      id: Math.random().toString(),
      name: "Sushi",
      price: 15,
      description: "I havent tried this either",
    },
    {
      id: Math.random().toString(),
      name: "Japanese Sushi",
      price: 18,
      description: "This one is good, they say.",
    },
  ];

  

  return (
    <>
      {cartxt.modalOpen && <Cart />}
      <Hero />
      <MenuList items={menuItems} />
    </>
  );
}
