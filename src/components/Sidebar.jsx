import { FaProductHunt } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { Link } from "react-router";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div
      className={`bg-gray-800 w-64 fixed h-full ${
        sidebarOpen ? "block" : "hidden"
      }`}
    >
      <div>
        <h1 className="text-2x text-white font-bold my-4 mx-2">
          Product Dashboard
        </h1>
      </div>
      <hr className="text-white" />
      <div>
        <ul className="mt-3 text-white font-bold">
          <li className=" mb-2 rounded hover:shadow hover:bg-gray-300 py-2 mx-2 px-1">
            <Link to="/product-detail">
              <FaProductHunt className="inline black w-6 h-6 mr-2 -mt-2" />{" "}
              Product Details
            </Link>
          </li>
          <li className=" mb-2 rounded hover:shadow hover:bg-gray-300 py-2 mx-2 px-1">
            <Link to="/compare-product">
              <FaCodeCompare className="inline black w-6 h-6 mr-2 -mt-2" />{" "}
              Compare Products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
