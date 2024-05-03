import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner block w-5/6 ml-20 mr-20"
        src={props.banner}
        alt=""
      />
      <div className="shopcategory-indexSort flex justify-between items-center mt-10 pl-20 pr-20">
        <p>
          <span className="font-bold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort flex justify-evenly h-10 rounded-3xl w-28 bg-blue-400 items-center">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products mt-10 mr-20 ml-20 grid sm:grid-cols-4 grid-cols-2 gap-10">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcatergoty-loadmore flex justify-center ml-auto mr-auto mt-10 mb-10 items-center bg-teal-300 w-40 h-10 rounded-3xl">
        Explore More
      </div>
    </div>
  );
};

export default Shopcategory;
