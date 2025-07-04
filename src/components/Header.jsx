import React, { useState } from "react";
import BharatFlg from "./../assets/India-flag.svg";
import DropDown from "./../assets/DropDown.svg";
import LocationIcon from "./../assets/location.svg";
import SearchIcon from "./../assets/search-icon-black.svg";
import Cart from './../assets/cart.svg';
import Hamburger from './../assets/hamburger.svg'
import SubheadHead from "./SubheadHead";
import { useNavigate } from "react-router";
import { useCart } from "../Contexts/CartContext";
export default function Header({setIsSidebarOpen, isSidebarOpen}) {

  const {searchedValue, setSearchedValue} = useCart();
  const {totalItems} = useCart();
  const navigate = useNavigate(); 
  const categories = [
    "Keep Shopping for", 
    "Today's Deals", 
    "MX Player", 
    "Sell", 
    "Gift Cards", 
    "Gift Ieads", 
    "Buy Again", 
    "Amazon Pay", 
    "Browsing History", 
    "Rajendra's Bamazon.in", 
    "Books", 
    "Customer's Service", 
    "Home Improvement"
  ]

  return (
    <div className="flex flex-col w-full fixed top-0 z-10 text-white overflow-hidden">
      <div className="topHeader flex items-center bg-[#131921] md:px-3 py-1 md:gap-1">
        <div className="logoSection flex px-1 md:px-2 py-1 border-1 rounded-xs border-transparent hover:border-white">
          <img
            className="max-w-10 rounded-xs hover:cursor-pointer"
            src="https://marketplace.canva.com/EAGQ1aYlOWs/1/0/1600w/canva-blue-colorful-illustrative-e-commerce-online-shop-logo-bHiX_0QpJxE.jpg"
            alt="logo"
            onClick={() => navigate("home")}
          />
          {/* <span className="mb-[14px]">.in</span> */}
        </div>
        <SubheadHead
          showImage={true}
          LocationIcon={LocationIcon}
          imageWidth={"w-5"}
          Subheading={"Deliver to Rajendra"}
          Heading={"Kishangarh... 305801"}
          customClass={"justify-end"}
          subHeadColor={"text-[#A5A7A8]"}
          hideInMobile={true}
        />
        <div className="searchBar flex bg-white rounded-sm overflow-hidden focus-within:outline-3 focus-within:outline-amber-500 flex-1 h-10 md:min-w-[320px]">
          <button className="max-md:hidden cursor-pointer bg-[#cdcdcd] hover:bg-[#b7b7b7] text-[#525252] hover:text-black fill-[#525252] hover:fill-black px-3 py-1 flex items-center gap-2 border-r-1 border-[#afafaf]">
            <span className="max-md:hidden">All</span>
            <svg
              className="w-2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
              </g>
            </svg>
          </button>
          <input
            value={searchedValue} // controled component
            onInput={(e) => setSearchedValue(e.target.value)}
            className="flex-1 placeholder:text-[#787C7C] text-black px-2 border-none outline-none "
            type="search"
            placeholder="Search Bamazon.in"
          />
          <button className="searchIconBox cursor-pointer min-w-10 bg-[#f4b461] hover:bg-[#F3A847] flex items-center justify-center">
            <img className="w-6" src={SearchIcon} alt="search-icon" onClick={() => navigate("/products")}/>
          </button>
        </div>
        <SubheadHead
          showImage={true}
          LocationIcon={BharatFlg}
          imageWidth={"max-w-7"}
          Heading={"EN"}
          showDropDown={true}
          DropDown={DropDown}
          customClass={"justify-center items-center"}
          hideInMobile={true}
        />
        <SubheadHead
          Subheading={"Hello, Rajendra"}
          Heading={"Account & Lists"}
          showDropDown={true}
          DropDown={DropDown}
          hideInMobile={true}
        />
        <SubheadHead
          Subheading={"Return"}
          Heading={"& Orders"}
          hideInMobile={true}
        />
        <div className="cart relative flex items-end px-1 md:px-2 py-1 border-1 rounded-xs border-transparent hover:border-white cursor-pointer" onClick={() => navigate("/cart")}>
          <img className="w-10" src={Cart} alt="cartImage" />
          <span className="font-bold text-[#F08804] absolute top-2 right-[51px] leading-none" >{totalItems}</span>
          <span className="font-bold">Cart</span>
        </div>
      </div>
      <div className="bottomHeader max-md:hidden bg-[#232F3E] flex items-center px-2 gap-2">
        <div onClick={() => setIsSidebarOpen(true)} className="all flex gap-1 cursor-pointer px-2 py-2 border-1 rounded-xs border-transparent hover:border-white">
          <img className="w-5" src={Hamburger} alt="hamburgerIcon" />
          <span className="text-sm font-bold">All</span>
        </div>
        {categories.map((category) => <span className="text-sm font-semibold whitespace-nowrap px-2 py-2 border-1 rounded-xs border-transparent hover:border-white">{category}</span>)}
      </div>
    </div>
  );
}
