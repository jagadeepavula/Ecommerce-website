import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems my-[100px] mx-[170px]">
      <div
        className="grid grid-cols-6 gap-4"
        style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr" }}
      >
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px]" />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div
                className="grid grid-cols-6 gap-4"
                style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr" }}
              >
                <img
                  src={e.image}
                  alt=""
                  className="cartitem-producticon h-[62px]"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitem-quantity  h-[62px] flex">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down flex my-[100px]">
        <div className="cartitems-total flex-1 flex flex-col mr-[200px] gap-[40px]">
          <h1>Cart total</h1>
          <div>
            <div className="cartitems-total-item  flex justify-between py-[15px]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item flex justify-between py-[15px]">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitiems-total-item flex justify-between py-[15px]">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-[262px] h-[58px] outline-none border-none bg-red-500">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode flex-1 ">
          <p className="">If you have a promo code enter it here</p>
          <div className="cartitem-promobox w-[504px] h-[58px]">
            <input
              type="text"
              placeholder="promo code"
              className="bg-transparentw-[330px] h-[50px]"
            />
            <button className="w-[170px] h-[58px] cursor-pointer bg-black text-white ">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
