import React from "react";
import RightArrow from "../assets/RightArrow";

export default function SidebarBox({ title, content }) {
  const { label, chevron } = content;
  return (
    <div className="sidebarContentBox flex flex-col ">
      <span className="font-bold text-lg px-8 py-3">{title}</span>
      {content.map(({ label, chevron = false }) => {
        return (
          <span className="flex justify-between px-8 py-3 hover:bg-gray-200 group">
            <span>{label}</span>
            {chevron && <RightArrow className={`group-hover:text-black text-[#a1a1a1]`} />}
          </span>
        );
      })}
    </div>
  );
}
