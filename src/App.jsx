import { useState } from "react";
//import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} />
        <Home sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
    </>
  );
}

export default App;
