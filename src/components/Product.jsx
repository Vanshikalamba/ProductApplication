import { useState, useEffect } from "react";
import { Table } from "antd";
import {
  FaArrowAltCircleLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
const Product = () => {
  const [result, setResult] = useState([]);
  const [active, setActive] = useState(0);
  const dataPerPage = 5;
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const jsondata = await data.json();
    setResult(jsondata?.products);
  };

  const handlePrev = () => {
    if (active > 0) setActive((prev) => prev - 1);
  };
  const handleNext = () => {
    if (active < totalPage - 1) setActive((prev) => prev + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const totalPage = Math.ceil(result.length / dataPerPage);
  const start = active * dataPerPage;
  const end = start + dataPerPage;
  const paginatedData = result.slice(start, end);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "Title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "Description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "Price",
    },
    {
      title: "Discount Percentage",
      dataIndex: "discountPercentage",
      key: "Discount",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "Brand",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "Category",
    },
    {
      title: "Image",
      dataIndex: "thumbnail",
      key: "Image",
      render: (text) => <img className="w-16 h-16" src={text} />,
    },
  ];
  return (
    <div className="text-center">
      <div className="">
        {result.length === 0 ? (
          <div>No Product</div>
        ) : (
          <div>
            <Table dataSource={paginatedData} columns={columns} />
          </div>
        )}
      </div>
      <div>
        <button
          onClick={handlePrev}
          disabled={active === 0}
          className="cursor-pointer"
        >
          {" "}
          <FaArrowLeft />
        </button>
        <span className="p-2 border-2 border-solid m-2 cursor-pointer">
          {active + 1}
        </span>
        <button
          onClick={handleNext}
          disabled={active === totalPage - 1}
          className="cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
export default Product;
