import React from "react";
import ProfileIcon from "./../assets/ProfileIcon.svg";
import RightArrow from "../assets/RightArrow.jsx";
import SidebarBox from "./SidebarBox.jsx";

export default function Sidebar({ setIsSidebarOpen, isSidebarOpen }) {
  return (
    <div
      onClick={() => setIsSidebarOpen(false)}
      className="sideBarScreen w-svw bg-[#00000050] fixed top-0 z-20"
    >
      <div onClick={(e) => e.stopPropagation()} className="w-[350px] h-svh ">
        <div className="profile bg-[#232F3E] p-2 flex items-center text-white gap-3 h-12 pl-8">
          <span className="size-[27px] bg-white flex justify-center items-center rounded-[50%]">
            <img className="w-[25px]" src={ProfileIcon} alt="" />
          </span>
          <h3 className="font-bold text-xl">Hello, Rajendra</h3>
        </div>
        <div className="sideScrollBar bg-white w-[350px] h-[93svh] overflow-auto">
          {sideBarData.map(({ title, content }) => {
            return (
              <>
                <SidebarBox title={title} content={content} />
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const sideBarData = [
  {
    title: "Trending",
    content: [
      { label: "Bestsellers", chevron: false },
      { label: "New Releases", chevron: false },
      { label: "Movers and Shakers", chevron: false },
    ],
  },
  {
    title: "Digital Content and Devices",
    content: [
      { label: "Amazon miniTV- FREE entertainment", chevron: false },
      { label: "Echo & Alexa", chevron: true },
      { label: "Fire TV", chevron: true },
      { label: "Kindle E-Readers & eBooks", chevron: true },
      { label: "Audible Audiobooks", chevron: true },
      { label: "Amazon Prime Video", chevron: true },
      { label: "Amazon Prime Music", chevron: true },
    ],
  },
  {
    title: "Shop by Category",
    content: [
      { label: "Mobiles, Computers", chevron: true },
      { label: "TV, Appliances, Electronics", chevron: true },
      { label: "Men's Fashion", chevron: true },
      { label: "Women's Fashion", chevron: true },
      { label: "See all", chevron: true },
    ],
  },
  {
    title: "Programs & Features",
    content: [
      { label: "Amazon Pay", chevron: false },
      { label: "Gift Cards & Mobile Recharges", chevron: true },
      { label: "Amazon Launchpad", chevron: false },
      { label: "Amazon Business", chevron: false },
      { label: "See all", chevron: true },
    ],
  },
  {
    title: "Help & Settings",
    content: [
      { label: " Your Account", chevron: false },
      { label: "Customer Service", chevron: false },
      { label: "Sign in", chevron: false },
    ],
  },
];
