import React, { useState } from "react";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";

export default function MainContentImageCarousel() {
  const [index, setIndex] = useState(0);
//   const threeImagesCarousel = [imageCarouselArray[(index - 1 + 6) % 6], imageCarouselArray[index], imageCarouselArray[(index + 1) % 6]]
  return (
    <div
      className="summerSaleCarousel w-[99%] m-auto relative overflow-hidden"
    //   style={{ transform: `translateX(-${index * 100}%)` }}
    >
      <img
        onClick={() => setIndex((index - 1 + 6) % 6)}
        className="w-10 absolute top-25 left-5 cursor-pointer z-10"
        src={leftArrow}
        alt="right arrow image"
      />
      <div className="flex m-auto transition-transform duration-500 ease-in-out  "
      style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {imageCarouselArray.map((img, i) => {
          return (
            <img
              key={i}
              className=" "
              src={img}
              alt="carouselImage"
            />
          );
        })}
      </div>
      <img
        onClick={() => setIndex((index + 1) % 6)}
        className="w-10 absolute top-25 right-5 cursor-pointer z-10"
        src={rightArrow}
        alt="right arrow image"
      />
    </div>
  );
}

const imageCarouselArray = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/prime/p9/PD25_GW_Hero_H1_Static_BDR_PD_2x._CB790001309_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/dharshini/PC_Lead-Up_Asin_3000x1200_2x._CB789684537_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/PD25/travel/Delhi_PC_Lead-Up_Lifestyle_3000x1200._CB789747640_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/BAU/PC/Hero/HO/HO_PC_2X_T2._CB550950336_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Home/2025/BAU/PD/Home_Leadup_Hero_Pc_-__essentials._CB789991319_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/Pharmacy/BAU_GW/PC_Lead-Up_Asin_r1_3000x1200._CB789685812_.jpg",
];