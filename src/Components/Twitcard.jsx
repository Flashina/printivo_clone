import React from "react";

const Twitcard = ({ twitter, chip, handles, words }) => {
  return (
    <>
      <div className="bg-[#fff] mb-5">
        <div className="rounded-full flex justify-around">
          <img
            src={twitter}
            alt="twitter logo"
            className="w-10 h-10 p-2 mt-8 ms-5 m-1 border-2 border-[#c4c4c4] rounded-full"
          />
          <span className="m-10 ms-5">
            <div className="font-[550] mb-4">
              {chip}
              <a href="#" className="text-[#1DA1F2]">
                {handles}
              </a>
            </div>
            {words}
          </span>
        </div>
      </div>
    </>
  );
};

export default Twitcard;
