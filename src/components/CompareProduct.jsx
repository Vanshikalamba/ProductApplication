import { useOutletContext } from "react-router";

const CompareProduct = () => {
  const { sidebarOpen } = useOutletContext();
  return (
    <>
      <div className={`${sidebarOpen ? "ml-66" : ""} fixed w-full`}>
        Compare
      </div>
    </>
  );
};
export default CompareProduct;
