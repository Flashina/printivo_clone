import React from "react";
import pint from "../assets/images/logo_printivo.svg";
import cart from "../assets/images/cartimg.svg";
import search from "../assets/images/SearchPrin.svg";
import hand from "../assets/images/card.png";

const Hero = () => {
  return (
    <div className="header bg-[#ece8d9] relative">
      <div className=" mx-auto px-6 lg:px-20 pb-20">
        <nav className="flex items-center sticky top-0 justify-between py-7 mb-4">
          <div className="w-1/3">
            <img src={pint} alt="" />
          </div>
          <div className="w-2/3 flex items-center justify-end lg:justify-between">
            <div className="hidden lg:flex items-center justify-between space-x-4">
              <a className="font-bold text-[#384a62] text-sm" href="#">
                All product
              </a>
              <a className="font-bold text-[#384a62] text-sm" href="#">
                Become a Reseller
              </a>
              <a className="font-bold text-[#384a62] text-sm" href="#">
                Merch Store
              </a>
              <a className="font-bold text-[#384a62] text-sm" href="#">
                Market Place
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-[#da8e8e] font-bold text-sm ">
                Sign in
              </a>
              <a
                href="#"
                className="hidden lg:block text-[#384a62] font-bold text-sm "
              >
                Create Account
              </a>
              <a href="#">
                <img className="" src={cart} alt="" />
              </a>
            </div>
          </div>
        </nav>
        <div className="flex flex-col md:flex-row md:items-center md: justify-between lg:pt-20">
          <div className="lg:w-1/2">
            <button className="bg-[#fff] px-6 py-3 mb-5 font-bold text-[#384a62] lg:hidden">
              Menu
            </button>
            <h1 className="font-bold text-4xl text-[#384a62]">
              Quality Prints
            </h1>
            <p className="text-[#708095] font-bold mt-4 text-lg">
              Shipped to your doorstep
            </p>
            <div className="mt-10">
              <p className="text-[#384a62] font-bold">
                What would you like to print today?
              </p>
              <div className="w-full relative px-5 py-8 bg-[#fff] shadow-sm rounded-md">
                <input
                  type="text"
                  className="w-full border-0 focus:outline-none"
                  placeholder="Search for Business Cards, T-shirt, Mugs, e.tc. "
                />
                <img src={search} alt="" className="absolute right-5 top-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 hidden lg:block">
        <img src={hand} className="h-[350px] w-45" alt="" />
      </div>
    </div>
  );
};

export default Hero;
