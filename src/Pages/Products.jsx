import React from "react";
import { proudctsFilterData, sampleData } from "./../components/Constants";
import ProductsFilter from "../components/ProductsFilter";
import ProductsProduct from "../components/ProductsProduct";
import { useCart } from "../Contexts/CartContext";

export default function Products() {
  const { searchedValue } = useCart();
  console.log("searchedValue ; ", searchedValue);
  const listingData = sampleData.filter((productObj) =>
    productObj.product_name
      .toLocaleLowerCase()
      .includes(searchedValue.toLocaleLowerCase())
  );
  // const allCategories = listingData.reduce((acc, cur) => {
  //   console.log("Curr : ", cur?.category, acc);
  //   return {
  //     ...acc,
  //     ...(cur?.category?.split("|") ?? []).map((cat) => {
  //       const o = {};
  //       o[cat] = cat;
  //       return o;
  //     }),
  //   };
  // }, {});

  // console.log("allCategories : ", allCategories);

  return (
    <div className="flex relative top-17 md:top-28 px-3 gap-10">
      <div className="filter flex flex-col gap-2 w-[350px] max-md:hidden">
        {proudctsFilterData.map(({ title, data }) => (
          <ProductsFilter title={title} data={data} />
        ))}
      </div>
      <div className="productsListing flex flex-col gap-3 mb-5">
        {listingData.map((dataObj) => (
          <ProductsProduct dataObj={dataObj} />
        ))}
      </div>
    </div>
  );
}
