import React, { useState } from "react";
import { useNavigate } from "react-router";
import RightArrow from "../assets/RightArrow";

export default function MainContentCarouselCards({ sampleCarouselData }) {
  console.log("carouselImagesData :  ", sampleCarouselData);

  const navigate = useNavigate();

  //   const [index, setIndex] = useState(0);
  //   const carouselImagesDataToShow = [];
  //   let i;
  //   for (i = index; i < index + 8 && i < carouselImagesData.length; i++) {
  //     carouselImagesDataToShow.push(carouselImagesData[i]);
  //   }

  return (
    <>
      <div className="flex gap-4 w-full overflow-auto relative ">
        {/* <button className="flex justify-center items-center shadow-[0px_0px_4px_1px_rgba(0,0,0,0.4)] w-10 h-20 bg-white rounded-l absolute right-0 top-13 z-10 group">
          <RightArrow className={`group-hover:text-black text-[#a1a1a1] w-5`} />
        </button> */}

        {sampleCarouselData.map(({ img_link, product_id }) => (
          <img
            className="h-45 hover:cursor-pointer"
            src={img_link}
            alt="product_image"
            onClick={() => navigate(`/products/${product_id}`)}
          />
        ))}
      </div>
    </>
  );
}

{
  /* <div className="flex gap-4 w-full overflow-hidden relative">
        <button
          onClick={() => setIndex(index - 7)}
          className={`${
            i <= 0 ? "hidden" : "block"
          } bg-white shadow px-2 py-1 h-fit rounded absolute left-0 top-15`}
        >
          {" "}
          prev{" "}
        </button>
        {carouselImagesDataToShow.map(({ img_link }) => (
          <img className="" src={img_link} alt="product_image" />
        ))}
        <button
          onClick={() => setIndex(index + 7)}
          className={`${
            i >= carouselImagesData.length ? "hidden" : "block"
          } bg-white shadow px-2 py-1 h-fit rounded absolute right-0 top-15`}
        >
          {" "}
          next{" "}
        </button>
      </div> */
}
