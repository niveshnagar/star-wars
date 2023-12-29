import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white text-2xl font-bold text-center p-2 h-14 flex items-center justify-center">
      <Link to="/" className="cursor-pointer">
        May the force be with you!
      </Link>
    </div>
  );
};

export default Header;
