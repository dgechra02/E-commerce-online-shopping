import React from "react";
import { useNavigate } from "react-router";
import { useCart } from "../Contexts/CartContext";

export default function ProductsProduct({ dataObj }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const {
    product_id,
    product_name,
    rating,
    discounted_price,
    actual_price,
    rating_count,
    discount_percentage,
    img_link,
    category,
  } = dataObj;
  // console.log("props: ", dataObj);
  return (
    <div className="flex shadow-[1px_1px_5px_rgba(0,0,0,0.3)] rounded overflow-hidden bg-[#ffffff80] ">
      <div className="imageBox min-w-[250px] py-5  flex justify-center items-center">
        <img
          src={img_link}
          alt="product-img"
          className="max-w-[200px]"
          onClick={() => navigate(`/products/${product_id}`)}
        />
      </div>
      <div className="productDetails flex flex-col justify-start p-2 bg-[#F7F7F7] flex-1">
        <h4 className=" text-xl">{product_name}</h4>
        <span className="text-xs flex ">
          {`${rating}`}
          <img
            className="h-[14px]"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Star_rating_4.5_of_5.png"
            alt="image"
          />
          <span className="hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">{`(${rating_count})`}</span>
        </span>
        <span className="text-[#565959]">300+ bought in past month</span>
        <span className="flex gap-2 items-end">
          <span className="font-semibold text-3xl">{discounted_price} </span>
          <span className="text-sm">
            M.R.P: <span className="line-through">{actual_price}</span>
          </span>
          <span className="font-semibold">{`(${discount_percentage} off)`}</span>
        </span>
        <span className="text-[#565959]">Save extra with No Cost EMISave extra with No Cost EMI</span>
        <span className="">FREE delivery</span>
        <span className="text-[#B12704]">A few left in stock.</span>
        <span>Category : {category.replaceAll("|", " ")}</span>
        <button
          className="bg-amber-300 w-fit leading-none px-4 py-2 rounded-2xl cursor-pointer mt-3 text-sm"
          onClick={() => addToCart(product_id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

// this won't work : shadow-[0px_0px_10px_5px_#000000]
// this will work : shadow-[0px_0px_10px_5px_%23000000]
// more recommended : shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]
