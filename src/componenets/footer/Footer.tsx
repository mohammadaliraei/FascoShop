import React from "react";
import { images } from "../../Features/images";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col w-full gap-8 pt-10 mt-4 border-t-2">
      <div className="flex flex-row w-full">
        <div className="w-[90%]">
          <img
            src={images.logo}
            className="w-28"
          />
        </div>
        <div className="flex flex-row w-full justify-between">
          <h1>Support Center</h1>
          <h1>Involcing</h1>
          <h1>Contract</h1>
          <h1>Careers</h1>
          <h1>Blog</h1>
          <h1>FAQs</h1>
        </div>
      </div>
      <div>
        <h1 className="flex flex-row items-center justify-center gap-2 text-sm">
          copyright
          <span>
            <FaRegCopyright />
          </span>
          MDRaei. All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
