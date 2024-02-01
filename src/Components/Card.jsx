import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Card = ({ img, title, price, per, btnText }) => {
  return (
    <>
      <div className="">
        <div className="max-w-sm my-3 mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <a href="">
            <img
              className="w-full h-[300px] hover:transition-transform transform hover:scale-110"
              src={img}
              alt="Card Image"
            />
            <div className="px-4 py-3">
              <h2 className="text-xl font-semibold text-[#527E85] whitespace-nowrap">
                {title}
              </h2>
              <p className="text-gray-600 m-1 mt-8 font-semibold">
                <h6 className="text-sm text-[#708095]">STARTING AT</h6>
                <br />
                <span className="text-2xl font-medium text-[#527E85]">₦{price}</span>
                <span className="text-[#708095]">{per}</span>
              </p>
            </div>
            <div className="px-6 py-3">
              <a href="#" className="">
                <button className="flex font-semibold bg-[#D77F81] text-[#fff] py-3 px-3 rounded-lg border border-[#D77F81] text-lg hover:transition-transform transform hover:scale-110">
                  {btnText}
                  <BsChevronRight className="" />
                </button>
              </a>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
