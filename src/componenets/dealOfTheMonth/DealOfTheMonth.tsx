import React, { useEffect, useState } from "react";
import Buttons from "../../Features/buttons";
import SwiperProducts from "./SwiperProducts";

const DealOfTheMonth = () => {
  const [Days, setDays] = useState(0);
  const [Hr, setHr] = useState(0);
  const [Mins, setMins] = useState(0);
  const [Sec, setSec] = useState(0);
  const [inputDate, setInputDate] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);
  const [timer, setTimer] = useState(0);

  // useEffect(() => {
  //   const currentDateObj = new Date().getTime();
  //   const changingDateObj = new Date("23 march 2024").getTime();

  //   const totalSeconds = (changingDateObj - currentDateObj) / 1000; // convet to second
  //   setInterval(() => {
  //     setCurrentDate(totalSeconds - 1);
  //   }, 1000);

  //   setDays(Math.floor(totalSeconds / 86400)); // convert to days
  //   setHr(Math.floor(totalSeconds / 3600) % 24);
  //   setMins(Math.floor(totalSeconds / 60) % 60);
  //   setSec(Math.floor(totalSeconds % 60));
  // }, [currentDate]);

  const onChnageHandler = () => {};
  const onClickHandler = () => {};

  return (
    <div className="flex md:flex-row flex-col  w-full pl-5 py-12 rounded-md bg-gray-100">
      <div className="flex flex-col pl-10 py-12 justify-between ">
        <div>
          <h1 className="text-4xl font-bold">Deals of the month</h1>
        </div>
        <div className="text-gray-600 py-4 w-[40%] md:w-[70%]">
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum a
            maiores assumenda, animi similique aspernatur, laudantium laborum
            iste voluptas eveniet, optio perspiciatis neque facilis sunt.
          </h1>
        </div>
        <div>
          <Buttons
            label="Click Me"
            isSwitch={true}
          />
        </div>
        <div>
          <p className="font-bold text-lg">Hurry, Before It's Too Latel</p>
        </div>
        <div className="flex flex-row gap-4 my-4">
          <div className="flex flex-col gap-2 items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-md shadow-xl bg-white text-2xl">
              {Days.toString().padStart(2, "0")}
            </div>
            <p>Days</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-md shadow-xl bg-white text-2xl">
              {Hr.toString().padStart(2, "0")}
            </div>
            <p>Hr</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-md shadow-xl bg-white text-2xl">
              {Mins.toString().padStart(2, "0")}
            </div>
            <p>Mins</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-md shadow-xl bg-white text-2xl">
              {Sec.toString().padStart(2, "0")}
            </div>
            <p>Sec</p>
          </div>
        </div>
      </div>
      <div className="flex  w-[90%] h-full items-center ">
        <SwiperProducts />
      </div>
    </div>
  );
};

export default DealOfTheMonth;
