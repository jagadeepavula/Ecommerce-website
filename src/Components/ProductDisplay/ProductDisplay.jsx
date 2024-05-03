import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay flex my-0 mx-[170px]">
      <div className="productdisplay-left flex gap-[17px]">
        <div className="productdisplay-img-list flex flex-col gap-[16px]">
          <img src={product.image} alt="" className="h-[163px]" />
          <img src={product.image} alt="" className="h-[163px]" />
          <img src={product.image} alt="" className="h-[163px]" />
          <img src={product.image} alt="" className="h-[163px]" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img w-[586px] h-[700px]"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right mx-[70px] flex flex-col">
        <h1 className="">{product.name}</h1>
        <div className="productdisplay-right-star flex items-center mt-[13px]">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices flex gap-[30px]">
          <div className="productdisplay-right-price-old line-through">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight usually knitted pullover shirt close fitting and
          wearable, a round neckline and short sleve worn as an undersort or
          iotterhsoetr garment.
        </div>
        <div className="productdisplay-right-size">
          <h1 className="font-semibold text-md">Select size</h1>
          <div className="productdisplay-right-size flex gap-[10px]">
            <div className="bg-orange-200 rounded-3xl cursor-pointer h-10 w-10 flex items-center justify-center">
              S
            </div>
            <div className="bg-orange-200 rounded-3xl cursor-pointer h-10 w-10 flex items-center justify-center">
              M
            </div>
            <div className="bg-orange-200 rounded-3xl cursor-pointer h-10 w-10 flex items-center justify-center">
              L
            </div>
            <div className="bg-orange-200 rounded-3xl cursor-pointer h-10 w-10 flex items-center justify-center">
              XL
            </div>
            <div className="bg-orange-200 rounded-3xl cursor-pointer h-10 w-10 flex items-center justify-center">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="w-30 h-10 mt-5 mb-5 cursor-pointer bg-red-600 text-white"
        >
          ADD TO CART
        </button>
        <p className="product-category">
          <span>Category :</span> Women, tshirt,crop top
        </p>
        <p className="product-category">
          <span>Tags :</span> Modern Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
