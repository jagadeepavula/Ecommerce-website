import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts flex flex-col items-center gap-[9px]">
      <h1 className="font-semibold text-md">Related Products</h1>
      <hr />
      <div className="relatedproducts-items flex gap-[5px]">
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

export default RelatedProducts;
