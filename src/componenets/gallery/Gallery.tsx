import React from "react";
import { images } from "../../Features/images";

const Gallery = () => {
  const dataImages = [
    images.GrilOne,
    images.BoyOne,
    images.GrilThree,
    images.BoyTwo,
    images.GrilFour,
  ];

  return (
    <div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="flex text-center text-3xl font-bold">
          Follow Us On Instagram
        </h1>
        <h1 className="flex text-center w-[70%] text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam
          quia numquam, veniam enim facilis voluptatem nisi! Ducimus eaque
          beatae provident. Est et fugiat voluptates neque sunt corrupti ea
          illum consequatur? Qui expedita aperiam doloremque nulla facilis,
          quidem iste quod?
        </h1>
        <div className="flex flex-row pt-4 gap-2">
          {dataImages.map((image, index) => (
            <div className="flex flex-1">
              <img
                src={image}
                className="object-cover w-48 "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
