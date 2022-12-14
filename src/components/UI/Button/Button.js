import React from "react";

const DefaultButton = (props) => {
  return (
    <>
      <button
        className= {props.className + " text-white bg-orange-700 hover:bg-orange-900 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 w-fit focus:outline-none"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
};

const SecondaryButton = (props) => {
  return (
    <>
      <button onClick={props.onClick} 
      className={props.className + " text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 w-fit"}>
        {props.children}</button>
    </>
  );
};

export default DefaultButton;
export { SecondaryButton };
