import React from "react";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox my-[120px] mx-[170px]">
      <div className="descriptionbox-navigator flex">
        <div className="description-nav-box flex items-center justify-center font-semibold text-md w-[171px] h-[70px] border border-red-950">
          Description
        </div>
        <div className="description-nav-box flex items-center justify-center font-semibold text-md w-[171px] h-[70px] border border-red-950 fade">
          Reviews (122)
        </div>
      </div>
      <div className="descp-descp flex flex-col gap-[25px] border border-black p-[48px] pb-[25px]">
        <p>
          Elevate your casual wardrobe with our Classic Cotton Crewneck T-shirt,
          a timeless staple crafted for comfort and style. Made from premium
          100% cotton fabric, this T-shirt offers a soft and breathable feel,
          ensuring all-day comfort whether you're lounging at home or out for a
          casual outing.
        </p>
        <p>
          The crewneck design provides a classic and versatile look that pairs
          effortlessly with jeans, shorts, or joggers. Its regular fit
          silhouette offers a relaxed yet flattering shape, suitable for all
          body types. The durable construction and high-quality stitching ensure
          long-lasting wear and easy maintenance, making it a go-to choice for
          your everyday wardrobe.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
