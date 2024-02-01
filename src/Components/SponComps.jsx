import React from "react";
import fb from "../assets/images/fb.svg";
import twit from "../assets/images/twit.svg";
import inst from "../assets/images/inst.svg";
import inpl from "../assets/images/in.svg";
import pay from "../assets/images/mastercardp.png";
import ship from "../assets/images/shipping.png";

const SponComps = ({ title, data, isList }) => {
  return (
    <div className="" style={{ minHeight: "250px" }}>
      <h2 className="text-xl font-semibold">{title}</h2>
      {isList ? (
        <div className="flex flex-col mt-4 font-[550]">
          {data.map((val, index) => (
            <div
              key={index}
              className="block text-white text-l text-1l leading-9"
            >
              {val}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <div className="flex">
            {[fb, twit, inst, inpl].map((_, index) => (
              <img src={_} alt="" className="mr-4 mb-7" />
            ))}
          </div>
          <div className="font-bold text-lg mb-">Accepted Payments</div>
          <img src={pay} alt="" className="w-48 my-4" />
          <div className="font-bold text-lg my-3 mt-9">Delivery</div>
          <img src={ship} alt="" className="w-25 my-3" />
        </div>
      )}
    </div>
  );
};

export default SponComps;
