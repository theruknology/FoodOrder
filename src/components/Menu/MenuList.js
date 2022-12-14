import React from "react";
import MenuItem from "./MenuItem";

const MenuList = (props) => {
  return (
    <div className="flex flex-col gap-16 w-fit py-4 px-6 rounded-lg mx-auto bg-white drop-shadow-lg -translate-y-10">
      {props.items.map((itm) => (
        <MenuItem
          key={itm.id}
          id={itm.id}
          name={itm.name}
          description={itm.description}
          price={itm.price}
        />
      ))}
    </div>
  );
};

export default MenuList;
