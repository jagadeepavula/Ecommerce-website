import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar h-auto w-full flex flex-row justify-between items-center p-5">
      <div className="nav-logo flex flex-row items-center">
        <img src={logo} alt="" />
        <p className="text-xl font-bold">Shopper</p>
      </div>
      <ul className="nav-menu flex flex-row justify-center items-center gap-4">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className="group font-semibold text-lg cursor-pointer"
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="border-none w-[90%] h-1 border-r-4 bg-teal-300" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
          className="group font-semibold text-lg  cursor-pointer"
        >
          <Link to="/mens">Men</Link>
          {menu === "mens" ? (
            <hr className="border-none w-[90%] h-1 border-r-4 bg-teal-300" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
          className="group font-semibold text-lg  cursor-pointer"
        >
          <Link to="/womens">Women</Link>
          {menu === "womens" ? (
            <hr className="border-none w-[90%] h-1 border-r-4 bg-teal-300" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          className="group font-semibold text-lg  cursor-pointer"
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? (
            <hr className="border-none w-[90%] h-1 border-r-4 bg-teal-300" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-login-cart flex flex-row gap-4 pr-3">
        <Link to="/login">
          <button className="bg-orange-500 rounded-3xl h-10 w-20 items-center justify-center">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count w-5 h-5 border-r-2 font-bold rounded-2xl flex justify-center items-center bg-red-500 -mt-2 -ml-5">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
