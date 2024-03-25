import React from "react";
import { images } from "../../Features/images";

const Feature: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center ">
      <div>
        <img
          src={images.HighQuality}
          className="w-64 h-64"
        />
      </div>
      <div>
        <img
          src={images.WarranyProtection}
          className="w-64 h-64"
        />
      </div>
      <div>
        <img
          src={images.freeShiping}
          className="w-56 h-40"
        />
      </div>
      <div>
        <img
          src={images.support}
          className="w-56 h-40"
        />
      </div>
    </div>
  );
};

export default Feature;
