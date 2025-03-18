import Navbar from "./Navbar";
import Product from "./Product";
const Home = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`${sidebarOpen ? "ml-64" : ""} w-full`}>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default Home;
