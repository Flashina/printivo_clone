import React from "react";

const AmazingComp = ({ logo, read }) => {
  return (
    <>
      <div className="">
        <div className="">
          <span className="">
            <img src={logo} alt="" className="pb-3" />
          </span>
          <p className="text-lg text-[#384A62]">
            <a href="#" className="underline underline-offset-2 fw-semibold">
              {read}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AmazingComp;
