import React from "react";

const Popular = ({ popular, see }) => {
  return (
    <div className="pt-12 flex justify-items-stretch md:justify-between">
      <div className="font-bold justify-self-between text-xl text-[#384a62] md:text-3xl px-20">
        {popular}
      </div>
      <div className="text-[#D77F81] font-semibold mt-1 justify-self-end text-sm md:pe-20 text-lg">
        <a href="#">
       {see}

        </a>
      </div>
    </div>
  );
};

export default Popular;
