import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular h-auto flex flex-col items-center gap-3 mt-20">
      <h1 className="text-black font-bold text-xl">POPULAR IN WOMEN</h1>
      <hr className="w-20 h-1 border-r-8 " />
      <div className="popular-item mt-10 flex gap-10">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
