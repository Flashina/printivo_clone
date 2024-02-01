import React from "react";

const CountComponents = ({ img, headings, para }) => {
  return (
    <>
      <div className="">
        <div className="flex justify-around">
          <img src={img} alt="" className="-mt-10" />
          <span className="ms-2">
            <div className="text-lg text-[#384A62] font-bold mb-1">
              {headings}
            </div>
            <p className="text-lg text-[#7b8592]">{para}</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default CountComponents;
