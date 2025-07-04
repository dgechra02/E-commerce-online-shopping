import React from "react";

export default function ProductsFilter({ title, data }) {
  return (
    <div className="">
      <h4 className="font-bold">{title}</h4>
      {data.map(({ label, checkbox = false, scrollbar = false }) => {
        return (
          <>
            <span>
              {checkbox && <input type="checkbox" name="" id="" /> }
              <span>{label}</span>
            </span> <br />
          </>
        );
      })}
    </div>
  );
}
