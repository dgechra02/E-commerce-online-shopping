import React, { use, useEffect, useRef, useState } from "react";
import { useCart } from "../Contexts/CartContext";
import { sampleData } from "../components/Constants";
import AmazonAlogo from "./../assets/amazonAlogo.svg";

export default function Cart() {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useCart();

  const topRef = useRef();

  const scrollToTop = () => {
    if (topRef.current) {
      window.scrollTo({ top: 0 });
    }
  };
  useEffect(scrollToTop, []);

  return (
    <div
      ref={topRef}
      className="productList   bg-black/5 p-2 md:p-5 w-[97%] m-auto rounded relative top-18 md:top-28"
    >
      <h3 className="text-2xl md:text-3xl md:p-2">Shopping cart</h3>
      <span className="text-black/70 flex justify-end p-2">Price</span>
      <hr />
      {cart.length !== 0 ? (
        cart.map(({ productId, quantity }) => {
          const obj = sampleData.find(
            (productObj) => productId === productObj.product_id
          );
          const {
            product_name,
            rating,
            discounted_price,
            actual_price,
            rating_count,
            discount_percentage,
            img_link,
            category,
          } = obj;
          return (
            <>
              <div className="flex pl-5 justify-between my-5">
                <div className="productPage">
                  <div className="flex max-md:flex-col overflow-hidden  ">
                    <div className="imageBox flex justify-center items-center w-[150px] md:min-w-[250px]">
                      <img
                        src={img_link}
                        alt="product-img"
                        className="w-[200px]"
                      />
                    </div>
                    <div className="productDetails flex flex-col justify-start p-2 gap-1">
                      <div className="firstPart">
                        <h4 className="text-lg md:text-xl max-md:line-clamp-3">
                          {product_name}
                        </h4>
                      </div>
                      <span className="text-[#0B7B3C] text-xs">In stock</span>
                      <div className="max-md:hidden">
                        <span className="text-black/60 text-sm">
                          Eligible for FREE Shipping
                        </span>
                        <span className="bg-[#3E4650] flex w-fit text-white text-xs p-[3px] items-center rounded-l">
                          <img
                            className="w-3 mr-1 leading-none"
                            src={AmazonAlogo}
                            alt=""
                          />
                          <span className="leading-none">Fullfilled</span>
                        </span>
                        <span>
                          <input type="checkbox" name="" id="" />{" "}
                          <span>This will be a gift</span>{" "}
                          <span className="hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">
                            Learn more
                          </span>
                        </span>
                      </div>

                      <div className="flex gap-2 items-center">
                        <span className="flex justify-between items-center font-bold w-30 border-3 border-amber-300 rounded-2xl px-4 py-1">
                          <button
                            className="cursor-pointer text-xl leading-none"
                            onClick={() => removeFromCart(productId)}
                          >
                            -
                          </button>
                          <span className="leading-none">{quantity}</span>
                          <button
                            className="cursor-pointer text-xl leading-none"
                            onClick={() => addToCart(productId)}
                          >
                            +
                          </button>
                        </span>
                        <span className="md:hidden">
                          <span>|</span>
                          <span
                            className="text-xs hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer"
                            onClick={() => deleteFromCart(productId)}
                          >
                            {" "}
                            Delete{" "}
                          </span>
                        </span>
                        <div className="flex items-center gap-2 max-md:hidden">
                          <span>|</span>
                          <span
                            className="text-xs hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer"
                            onClick={() => deleteFromCart(productId)}
                          >
                            {" "}
                            Delete{" "}
                          </span>
                          <span>|</span>
                          <span className="text-xs hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">
                            {" "}
                            Save for later{" "}
                          </span>
                          <span>|</span>
                          <span className="text-xs hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">
                            {" "}
                            See more like this{" "}
                          </span>
                          <span>|</span>
                          <span className="text-xs hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">
                            {" "}
                            Share{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="flex">
                  <span className="text-sm mt-[5px]">
                    {discounted_price.slice(0, 1)}
                  </span>
                  <span className="font-semibold text-xl md:text-3xl">
                    {discounted_price.slice(1)}
                  </span>
                </span>
              </div>
              <hr className="w-full" />
            </>
          );
        })
      ) : (
        <span>Your cart is empty</span>
      )}
    </div>
  );
}
