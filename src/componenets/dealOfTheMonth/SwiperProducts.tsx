import { useState } from "react";
import { images } from "../../Features/images";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Carousel } from "flowbite-react";

const SwiperProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dataImages = [
    images.GrilOne,
    images.GrilTwo,
    images.GrilThree,
    images.GrilFour,
  ];

  const prevIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataImages.length - 1 : prevIndex - 1
    );
    console.log(currentIndex);
  };
  const nextIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataImages.length - 1 ? 0 : prevIndex + 1
    );
    console.log(currentIndex);
  };

  return (
    <div className="flex flex-row h-full w-full gap-4 ">
      {/* <div className="flex justify-between w-[10%] items-end py-10">
        <button onClick={prevIndex}>
          <FaArrowCircleLeft className="w-7 h-7" />
        </button>
        <button onClick={nextIndex}>
          <FaArrowCircleRight className="w-7 h-7" />
        </button>
      </div>
      <div className="flex flex-row w-[85%]  gap-8 translate-x-[80px]">
        {dataImages.map((images, i) => (
          <img
            src={images}
            className={`${
              currentIndex === i ? "w-[450px] h-[450px]" : "w-96 h-96"
            } rounded-lg object-cover duration-200`}
            style={{
              translate: `-${currentIndex * 320}px`,
            }}
          />
        ))}
      </div> */}
      <Carousel>
        {dataImages.map((images, i) => (
          <img
            key={i}
            src={images}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default SwiperProducts;
