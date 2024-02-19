import React from "react";
import Header from "./componenets/header/Header";
import DealOfTheMonth from "./componenets/dealOfTheMonth/DealOfTheMonth";
import Home from "./componenets/pages/home";

const App = () => {
  return (
    <div className="flex w-full justify-center px-20 py-14">
      <div className="flex max-w-7xl">
        <Home />
      </div>
    </div>
  );
};

export default App;
