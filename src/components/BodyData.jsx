import { useOutletContext } from "react-router";
import Product from "./Product";

const BodyData = () => {
  const { sidebarOpen } = useOutletContext();
  return (
    <>
      <div className={`${sidebarOpen ? "ml-64" : ""}`}>
        <Product />
      </div>
    </>
  );
};

export default BodyData;
