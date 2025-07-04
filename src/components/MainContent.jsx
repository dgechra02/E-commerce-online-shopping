import React, { useState } from "react";
import {
  sampleData,
  sampleCardData,
  sampleCardData2,
  sampleCarouselData,
  sampleCarouselData2,
} from "./Constants";
import MainContentCards from "./MainContentCards";
import MainContentCarouselCards from "./MainContentCarouselCards";
import RightArrow from "../assets/RightArrow";
import MainContentImageCarousel from "./MainContentImageCarousel";


export default function MainContent() {


  return (
    <>
      <div className="relative top-[58px] md:top-[95px]">
        {/* what is it's parent for absolute properties or it will relative to html */}
        <MainContentImageCarousel />
        <div className="fadeImage md:relative md:bottom-100 md:h-100 md:w-full md:bg-gradient-to-t from-white to-transparent "></div>
        <div className="listingProducts absolute max-md:mt-2 md:top-[250px]">
          <div className="cardSection w-[96%] flex justify-center gap-5 m-auto flex-wrap">
            {sampleCardData.map(({ title, data }) => (
              <MainContentCards title={title} data={data} />
            ))}
          </div>
          <div className="carouselProducts w-[96%] m-auto flex flex-col gap-1 px-4 py-4  bg-[#f0f0f0]">
            <div className="head flex gap-3">
              <span className="text-2xl font-bold">
                Up to 75% off | Deals on Amazon Brands & more
              </span>
              <button className="text-sm hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">
                See all details
              </button>
            </div>
            <div className="carouselImages relative">
              <MainContentCarouselCards
                sampleCarouselData={sampleCarouselData}
              />
            </div>
          </div>
          {/* second portion */}
          <div className="cardSection w-[96%] flex justify-center gap-5 m-auto flex-wrap ">
            {sampleCardData2.map(({ title, data }) => (
              <MainContentCards title={title} data={data} />
            ))}
          </div>
          <div className="carouselProducts bg-[#f0f0f0] w-[96%] m-auto flex flex-col gap-1 px-4 py-4  ">
            <div className="head flex gap-3">
              <span className="text-2xl font-bold">
                Up to 75% off | Deals on Amazon Brands & more
              </span>
              <button className="text-sm hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer">
                See all details
              </button>
            </div>
            <div className="carouselImages ">
              <MainContentCarouselCards
                sampleCarouselData={sampleCarouselData2}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// In JavaScript, array.slice(0, 2) means:
// Start slicing from index 0 (inclusive).
// Stop slicing at index 2 (exclusive).


