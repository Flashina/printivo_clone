import React from "react";
import sponsor from "../assets/images/Group_61_h8vxko.png";

const Nigeria = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl font-semibold text-[#384A62] mb-2">
        Nigeria’s No. 1 online print shop 👑
        </h3>
        <p className="text-xl font-bold text-[#506683] mb-10">
          Our print services and solutions are trusted by these brands and{" "}
          <br /> over 15,000 other businesses in Nigeria.
        </p>
        <img src={sponsor} alt="sponsorers" className="mb-10" />
      </div>
    </>
  );
};

export default Nigeria;
