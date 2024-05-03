import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="Item w-40">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" onClick={window.scrollTo(0, 0)} />
      </Link>
      <p className="m-4">{props.name}</p>
      <div className="item-prices flex gap-5">
        <div className="item-price-new font-bold text-lg">
          ${props.new_price}
        </div>
        <div className="item-price-old font-semibold text-lg line-through text-gray-700">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
