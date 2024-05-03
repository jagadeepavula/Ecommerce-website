import React from "react";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="new-collections h-auto flex flex-col items-center gap-3 mt-20 mb-20">
      <h1 className="text-black font-bold text-xl">NEW COLLECTIONS</h1>
      <hr className="w-20 h-1 border-r-8" />
      <div className="collections grid sm:grid-cols-4 gap-5 grid-cols-3">
        {new_collection.map((item, i) => {
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

export default NewCollections;
