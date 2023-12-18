import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-[#092635] text-white text-2xl font-bold text-center p-2 sticky">
        May the force be with you!
      </div>
      <ul className="flex justify-evenly items-center bg-[#1B4242] text-black font">
        <Link to="/films" className=" px-20 py-2 my-4 mx-6 bg-[#EEF0E5] rounded">Films</Link>
        <Link to="/people" className=" px-20 py-2 my-4 mx-6 bg-[#EEF0E5] rounded">People</Link>
        <Link to="/vehicles" className=" px-20 py-2 my-4 mx-6 bg-[#EEF0E5] rounded">Vehicles</Link>
      </ul>
    </div>
  );
};

export default Header;
