import React from "react";
import { useNavigate } from "react-router";

export default function MainContentCards({ title, data = [] }) {

  const navigate = useNavigate();
  
  return (
    <div className="bg-white w-[340px] h-[430px] shadow-lg mb-5 p-3 relative">
      <span className="font-bold text-2xl">{title}</span>
      <div className={`products ${data.length === 4 && "grid grid-cols-2"} `}>
        {data.map(
          ({
            product_id,
            product_name = "",
            img_link = "",
            discount_percentage = "",
          }) => {
            return (
              <div className="product flex flex-col items-center p-2">
                <img
                  onClick={() => navigate(`/products/${product_id}`)}
                  // using '/' before products, will set this url relative to base url
                  // without using it will be relative to the current url, in this case current url is /home, so it will upend after this
                  className={`${data.length === 4 && "h-25"} hover:cursor-pointer`}
                  src={img_link}
                  alt="product_image"
                />
                {(title !== "Starting ₹349 | Bestselling headphones" && title !== "Buy 2 get 10% off, freebies & more" && title !== "Minimum 35% off") && (
                  <span className="text-xs w-[140px] whitespace-nowrap overflow-hidden text-ellipsis ">
                    {product_name}
                  </span>
                )}
                {title === "Minimum 35% off" && (
                  <div className="sale flex gap-2 items-center">
                    <span className="text-xs bg-red-700 text-white px-2 h-6 rounded-xs whitespace-nowrap flex items-center">
                      {discount_percentage} off
                    </span>
                    <span className="text-xs text-red-700 font-bold">
                      Great Summer Sale
                    </span>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
      <a href="" className="hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer text-sm absolute bottom-5">
        See more
      </a>
    </div>
  );
}
