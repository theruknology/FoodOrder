import React from "react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <>
      <Navigation />
      <section className="w-full flex items-center justify-center flex-col py-8 px-4 bg-hero bg-cover bg-center h-96 text-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          World's Best Food Delivery
        </h1>
      </section>
    </>
  );
};

export default Hero;
