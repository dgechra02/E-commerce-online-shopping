import React, { useState } from "react";
import { useNavigate } from "react-router";

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
        {sampleCarouselData.map(({ img_link, product_id }) => (
          <img className="h-45" src={img_link} alt="product_image" onClick={() => navigate(`/products/${product_id}`)}/>
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
