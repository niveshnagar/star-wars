import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-gray-800 flex flex-col">
      <Link
        to="/films"
        className="m-3 p-2 rounded-md bg-white bg-opacity-70 hover:bg-opacity-90 "
      >
        Films
      </Link>

      <Link
        to="/people"
        className="m-3 p-2 rounded-md bg-white bg-opacity-70 hover:bg-opacity-90"
      >
        People
      </Link>

      <Link
        to="/vehicles"
        className="m-3 p-2 rounded-md bg-white bg-opacity-70 hover:bg-opacity-90"
      >
        Vehicles
      </Link>
    </div>
  );
};

export default Sidebar;
