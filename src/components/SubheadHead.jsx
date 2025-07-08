import React from "react";

export default function SubheadHead({showImage=false, LocationIcon, imageWidth, Subheading="", Heading, showDropDown=false, DropDown, customClass, subHeadColor, hideInMobile}) {
  return (
    <div className={`flex items-end w-fit h-full px-2 py-1 hover:cursor-pointer  ${hideInMobile && `max-md:hidden`} ${customClass}`}
    >
      {showImage && <img className={imageWidth} src={LocationIcon} alt="image" />}
      <div className="flex flex-col">
        <span className={`text-sm whitespace-nowrap ${subHeadColor}`}>{Subheading}</span>
        <span className="font-bold leading-none whitespace-nowrap">{Heading}</span>
      </div>
      {showDropDown && <img className="w-2" src={DropDown} alt="dropdown" />}
    </div>
  );
}
