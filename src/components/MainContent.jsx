import React from "react";
import { sampleData, sampleCardData, sampleCardData2, sampleCarouselData, sampleCarouselData2 } from "./Constants";
import MainContentCards from "./MainContentCards";
import MainContentCarouselCards from "./MainContentCarouselCards";
export default function MainContent() {
  
  return (
    <>
      <div className="absolute top-[95px]">
        <img
          className="w-[99%] m-auto"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Shankhadip/MayART25/MAY25_GW_PC_Hero_H1_8PM_Ends-Midnight_2x._CB794858947_.jpg"
          alt=""
        />
        <div className="cardSection w-[96%] flex justify-between m-auto flex-wrap relative top-[-350px]">
          {sampleCardData.map(({ title, data }) => (
            <MainContentCards title={title} data={data} />
          ))}
        </div>
        <div className="carouselProducts w-[96%] m-auto flex flex-col gap-1 px-4 py-4 relative bottom-[350px] bg-[#f0f0f0]">
          <div className="head flex gap-3">
            <span className="text-2xl font-bold">
              Up to 75% off | Deals on Amazon Brands & more
            </span>
            <button className="text-sm hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">See all details</button>
          </div>
          <div className="carouselImages ">
            <MainContentCarouselCards sampleCarouselData={sampleCarouselData} />
          </div>
        </div>
        {/* second portion */}
        <div className="cardSection w-[96%] flex justify-between m-auto flex-wrap relative top-[-330px]">
          {sampleCardData2.map(({ title, data }) => (
            <MainContentCards title={title} data={data} />
          ))}
        </div>
        <div className="carouselProducts bg-[#f0f0f0] w-[96%] m-auto flex flex-col gap-1 px-4 py-4 relative top-[-330px] ">
          <div className="head flex gap-3">
            <span className="text-2xl font-bold">
              Up to 75% off | Deals on Amazon Brands & more
            </span>
            <button className="text-sm hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">See all details</button>
          </div>
          <div className="carouselImages ">
            <MainContentCarouselCards sampleCarouselData={sampleCarouselData2} />
          </div>
        </div>
      </div>
    </>
  );
}

// In JavaScript, array.slice(0, 2) means:
// Start slicing from index 0 (inclusive).
// Stop slicing at index 2 (exclusive).