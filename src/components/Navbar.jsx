import {
  FaAddressBook,
  FaBars,
  FaBell,
  FaCircle,
  FaSearch,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";

import { useState } from "react";
const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <nav className="bg-gray-800 flex justify-between px-4 py-3 text-white">
      <div className="flex items-center">
        <FaBars
          className="mr-2 w-6 h-6 cursor-pointer"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <span className="text-2xl font-bold">Product Page</span>
      </div>
      <div className="flex items-center">
        <div className="flex items-center cursor-pointer mx-4">
          <button className="bg-white text-black p-2">
            <FaSearch className="mr-2" />
          </button>
          <input className="text-md py-1 px-1 font-bold text-black bg-white md:w-60" />
        </div>
        <div className="flex items-center relative">
          <button
            className="cursor-pointer"
            onClick={() => setProfileOpen((prev) => !prev)}
          >
            <FaUserCircle className="w-6 h-6 mt-1" />
          </button>
          <div
            className={`z-10 absolute rounded-lg shadow w-32 top-full mt-1 right-0 text-black ${
              profileOpen ? "block" : "hidden"
            }`}
          >
            <ul className="text-center bg-gray-800 text-white rounded">
              <li className="">Profile</li>
              <li>Orders</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <FaBell className="ml-2 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
