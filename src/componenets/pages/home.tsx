import React from "react";
import Header from "../header/Header";
import Logo from "../logos/Logo";
import DealOfTheMonth from "../dealOfTheMonth/DealOfTheMonth";
const home = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Header />
      <Logo />
      <DealOfTheMonth />
    </div>
  );
};

export default home;
