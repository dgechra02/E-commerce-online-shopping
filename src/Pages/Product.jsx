import React, { useEffect, useRef } from "react";
import { sampleData } from "./../components/Constants";
import { useParams } from "react-router";
import { useCart } from "../Contexts/CartContext";
import AmazonAlogo from "./../assets/amazonAlogo.svg";
import spriteImage from "./../assets/spriteImg.png";

export default function Product() {
  const { productId } = useParams();

  const { addToCart } = useCart();

  // console.log("sample data : ", sampleData);

  const obj = sampleData.find((obj) => obj.product_id === productId);
  //find return that element
  //   const obj2 = sampleData.filter(obj => obj.product_id === "B07PR1CL3S");
  // filter returns an array on elements that matches the condition, chahe ek hi element retrun kr rha ho

  const {
    product_name,
    rating,
    discounted_price,
    actual_price,
    rating_count,
    discount_percentage,
    img_link,
    category,
    about_product,
  } = obj;

  // spliting and formatting about_product string
  console.log("about_product : ", about_product);
  const parts = about_product.split("|");

  const topRef = useRef();

  const scrollToTop = () => {
    if (topRef.current) {
      window.scrollTo({ top: 0 });
    }
  };
  // top tell the scrolling of the page from top of document, here our top start from top-28, it's out top-0

  useEffect(scrollToTop, []);

  return (
    <div
      ref={topRef}
      className="productPage relative top-15 md:top-28 px-2 md:px-10 bg-white"
    >
      <div className="flex max-md:flex-col overflow-hidden  relative">
        <div className="imageBox max-md:hidden flex justify-center items-center size-[600px]">
          <img src={img_link} alt="product-img" className="w-[350px]" />
        </div>
        <div className="productDetails flex flex-col justify-start p-2 md:w-[500px] gap-1">
          <div className="firstPart flex flex-col float-end mb-2">
            <h4 className=" text-xl md:text-2xl font-[500]">{product_name}</h4>
            <div className="imageBox md:hidden flex justify-start py-2">
              <img src={img_link} alt="product-img" className="w-[100px]"/>
            </div>
            <a
              href=""
              className="hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer"
            >
              Visit the store
            </a>
            <span className="text-xs flex items-center gap-[4px]">
              <span>{rating}</span>{" "}
              <img
                className="h-[14px]"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Star_rating_4.5_of_5.png"
                alt="image"
              />
              <span className="hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">{`(${rating_count})`}</span>
              <span className="text-gray-600 text-[15px] mb-[3px]">|</span>
              <span className="hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">
                Search this page
              </span>
            </span>
            <span className="text-xs">
              <span className="font-semibold mr-1">1k+ bought</span>
              in past month
            </span>
          </div>
          <hr className="text-gray-500" />
          <span className="">
            <span className="flex items-end ">
              <span className="text-red-700 text-2xl font-[300] mr-2">{`- ${discount_percentage}`}</span>
              <span className="flex">
                <span className="text-sm mt-1">
                  {discounted_price.slice(0, 1)}
                </span>{" "}
                <span className="font-semibold text-3xl">
                  {discounted_price.slice(1)}
                </span>{" "}
              </span>
            </span>
          </span>
          <span className="flex gap-2 items-end text-[#686868]">
            <span className="text-xs">
              M.R.P: <span className="line-through">{actual_price}</span>
            </span>
          </span>
          <span className="bg-[#3E4650] flex w-fit text-white text-xs p-[3px] items-center rounded-l">
            <img className="w-3 mr-1 leading-none" src={AmazonAlogo} alt="" />
            <span className="leading-none">Fullfilled</span>
          </span>
          <span>Inclusive of all taxes</span>
          <span className="max-md:hidden flex font-bold h-6 w-fit overflow-hidden gap-5">
            <img
              className="w-6 h-fit relative bottom-[24.5px]"
              src={spriteImage}
              alt=""
            />{" "}
            Offers
          </span>
          <div className="max-md:hidden offers flex gap-2 p-2 overflow-auto scrollbar-hidden">
            <div className="offer1 flex flex-col gap-1 min-w-[170px] h-[130px] rounded shadow-[0px_0px_4px_1px_rgba(0,0,0,0.3)] p-[10px]">
              <span className="font-semibold leading-none">Cashback</span>
              <span className="line-clamp-3 leading-5">
                Upto ₹1,842.00 cashback as Amazon Pay Balance when you pay with
                Amazon Pay ICICI Bank Credit CardsUpto ₹1,842.00 cashback as
                Amazon Pay Balance when…
              </span>
              <a
                href=""
                className="hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer"
              >
                3 offers<span className="text-xs">{`>`}</span>
              </a>
            </div>
            <div className="offer1 flex flex-col gap-1 min-w-[170px] h-[130px] rounded shadow-[0px_0px_4px_1px_rgba(0,0,0,0.3)] p-[10px]">
              <span className="font-semibold leading-none">No Cost EMI</span>
              <span className="line-clamp-3 leading-5">
                Upto ₹2,764.78 EMI interest savings on Amazon Pay ICICI Bank
                Credit CardsUpto ₹2,764.78 EMI interest savings on Amazon Pay
                ICICI…
              </span>
              <a
                href=""
                className="hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer"
              >
                1 offers<span className="text-xs">{`>`}</span>
              </a>
            </div>
            <div className="offer1 flex flex-col gap-1 min-w-[170px] h-[130px] rounded shadow-[0px_0px_4px_1px_rgba(0,0,0,0.3)] p-[10px]">
              <span className="font-semibold leading-none">Partner Offers</span>
              <span className="line-clamp-3 leading-5">
                Get GST invoice and save up to 28% on business purchases.
              </span>
              <a
                href=""
                className="hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer"
              >
                1 offers<span className="text-xs">{`>`}</span>
              </a>
            </div>
          </div>
          {/* <span className="w-full  ">Category : {category.replaceAll("|", " ")}</span> */}
          <div className="about_product flex flex-col max-md:hidden">
            <span className="font-semibold text-xl">About this item : </span>
            <div className="px-2">
              {parts.map((part) => {
                if (part.includes(":")) {
                  let [key, ...value] = part.split(":");
                  return (
                    <>
                      <span className="font-[500]">{key}: </span>{" "}
                      <span>{value}</span> <br />
                    </>
                  );
                } else
                  return (
                    <>
                      <span>{part}</span> <br />{" "}
                    </>
                  );
              })}
            </div>
          </div>
        </div>
        <div className="purchasing flex flex-col items-center gap-1 md:ml-10 rounded-xl overflow-hidden md:w-[270px] h-fit border">
          <div className="header flex flex-col bg-[#eeeeee] hover:bg-[#dfdfdf] px-4 py-2 w-full">
            <div className="flex justify-between font-semibold text-sm ">
              <span>With Exchange</span>
              <input type="radio" name="pickone" id="" />
            </div>
            <span className="font-semibold text-sm text-[#B12704]">
              Up to 70% off
            </span>
          </div>
          <div className="flex flex-col px-4 md:py-2 w-full">
            <div className="flex justify-between font-semibold text-sm ">
              <span>Without Exchange</span>
              <input type="radio" name="pickone" id="" />
            </div>
            <span className="font-semibold text-sm text-[#B12704]">
              {discounted_price}
            </span>
          </div>
          <div className="max-md:hidden header px-4 py-2 w-full">
            <span className="bg-[#3E4650] flex w-fit text-white text-xs p-[3px] items-center rounded-l">
              <img className="w-3 mr-1 leading-none" src={AmazonAlogo} alt="" />
              <span className="leading-none">Fullfilled</span>
            </span>
            <span>FREE delivery </span>
            <span className="font-semibold ">Monday, 12 May to </span>
            <a href="" className="text-[#2162A1] underline">
              Kishangarh Ajmer District 305801. Details
            </a>
          </div>
          <div className="max-md:hidden header px-4 py-2 w-full ">
            <span className="font-semibold text-[#B12704]">
              Arrives after Mother's Day.{" "}
            </span>
            <span className="font-semibold ">Need a gift sooner? </span>
            <span>
              Send an{" "}
              <span className="text-[#2162A1] hover:underline cursor-pointer">
                Amazon Pay Gift{" "}
              </span>{" "}
              Card instantly.
            </span>
          </div>
          <div className="max-md:hidden header px-4 py-2 w-full ">
            <span className="">Or fastest delivery</span>
            <span className="font-semibold"> Thursday, 15 May. </span>
            <span>
              <span>Order within </span>
              <span className="text-[#067D62]">2 hrs 59 mins.</span>
              <span className="text-[#2162A1] underline cursor-pointer">
                {" "}
                Details
              </span>
            </span>
          </div>
          <div className=" header px-4 md:py-2 w-full flex flex-col gap-2">
            <span className="text-[#0B7B3C] text-xl">In stock</span>
            <span className="max-md:hidden grid grid-cols-[1fr_2fr] text-xs pl-2 gap-1">
              <span className="text-[#474747] w-fit">Ships from </span>
              <span>Amazon</span>
              <span className="text-[#474747] w-fit"> Sold by</span>
              <span className="text-[#2162A1] hover:underline cursor-pointer">
                {" "}
                Clicktech Retail Private Ltd
              </span>
              <span className="text-[#474747] w-fit"> Payment</span>
              <span className="text-[#2162A1] cursor-pointer">
                {" "}
                Secure transaction
              </span>
            </span>
          </div>
          <div className="flex flex-col px-4 py-2 w-full gap-2">
            <button
              className="bg-amber-300 w-full leading-none px-4 py-2 rounded-2xl cursor-pointer"
              onClick={() => addToCart(productId)}
            >
              Add to Cart
            </button>
            
          </div>
          <div className="flex px-4 py-2 w-full gap-2">
            <input type="checkbox" name="" id="" />{" "}
            <span>Add gift options</span>
          </div>
        </div>
      </div>
    </div>
  );
}
