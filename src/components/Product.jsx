import { useState, useEffect } from "react";
import { Table } from "antd";
import ProductTable from "./ProductTable";
const Product = () => {
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const jsondata = await data.json();
    setResult(jsondata?.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const columns = [
  //   {
  //     title: "Title",
  //     dataIndex: "title",
  //     key: "Title",
  //   },
  //   {
  //     title: "Description",
  //     dataIndex: "description",
  //     key: "Description",
  //   },
  //   {
  //     title: "Price",
  //     dataIndex: "price",
  //     key: "Price",
  //   },
  //   {
  //     title: "Discount Percentage",
  //     dataIndex: "discountPercentage",
  //     key: "Discount",
  //   },
  //   {
  //     title: "Brand",
  //     dataIndex: "brand",
  //     key: "Brand",
  //   },
  //   {
  //     title: "Category",
  //     dataIndex: "category",
  //     key: "Category",
  //   },
  //   {
  //     title: "Image",
  //     dataIndex: "thumbnail",
  //     key: "Image",
  //     render: (text) => <img className="w-16 h-16" src={text} />,
  //   },
  // ];
  return (
    <div className="text-center">
      <div className="">
        {result.length === 0 ? (
          <div>No Product</div>
        ) : (
          <div>
            <ProductTable result={result} />
            {/*<Table dataSource={paginatedData} columns={columns} />*/}
          </div>
        )}
      </div>
    </div>
  );
};
export default Product;
