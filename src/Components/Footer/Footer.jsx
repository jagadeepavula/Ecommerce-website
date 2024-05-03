import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center gap-5">
      <div className="footer-logo flex items-center gap-5">
        <img src={footer_logo} alt="" />
        <p className="font-bold text-2xl">SHOPPER</p>
      </div>
      <ul className="footer-links flex list-none gap-5 text-lg">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contacts</li>
      </ul>
      <div className="footer-social-icons flex gap-5 ">
        <div className="footer-icons-container p-4 pb-1 bg-white ">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container p-4 pb-1 bg-white ">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container p-4 pb-1 bg-white ">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright flex flex-col items-center gap-5 w-full mb-5">
        <hr className="w-5/6 border-r-4 h-1 bg-teal-50" />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
