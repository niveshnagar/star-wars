import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App ">
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
