import React from "react";
import SponComps from "./SponComps";
const data = [
  {
    title: "Printivo",
    data: [
      "About Us",
      "Contact",
      "Track Order",
      "Printivo Promise",
      "Printivo Blog",
      "Career",
    ],
  },
  {
    title: "Help and Information",
    data: [
      "Paper Quality",
      "Privacy Policy",
      "Terms and Conditions",
      "Font Licenses",
      "Shipping and Delivery",
    ],
  },
  {
    title: "Make Money",
    data: [
      "Refer a friend & earn N1,000",
      "Become a Reseller",
      "Sell your Designs",
      "Merch Store",
    ],
  },
  {
    title: "Follow Us",
    data: [],
  },
];

const Sponsor = () => {
  return (
    <>
      <div className="h-[400px] bg-[#384A62] flex justify-around items-center text-[#ffff] px-5">
        {data.map((val, index) => (
          <SponComps data={val.data} title={val.title} isList={index != 3} />
        ))}
      </div>
    </>
  );
};

export default Sponsor;
