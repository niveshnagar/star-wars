import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
