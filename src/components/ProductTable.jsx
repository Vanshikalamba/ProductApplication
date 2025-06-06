import { useEffect, useState } from "react";
import { Table } from "antd";
import { FaArrowLeft, FaArrowRight, FaFilter } from "react-icons/fa";
import { FaArrowDownWideShort } from "react-icons/fa6";
const ProductTable = ({ result }) => {
  const [active, setActive] = useState(0);
  const [sortType, setSortType] = useState("asc");
  const [paginatedData, setPaginatedData] = useState([]);
  const [showCategorydialog, setShowCategorydialog] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categoryList = [...new Set(result.map((item) => item.category))];
  //console.log(categoryList);
  const dataPerPage = 6;
  const handlePrev = () => {
    if (active > 0) setActive((prev) => prev - 1);
  };
  const handleNext = () => {
    if (active < totalPage - 1) setActive((prev) => prev + 1);
  };

  const handleSortPrice = () => {
    setPaginatedData(
      [...paginatedData].sort((a, b) =>
        sortType == "asc" ? a.price - b.price : b.price - a.price
      )
    );
    setSortType(sortType == "asc" ? "desc" : "asc");
  };

  const totalPage = Math.ceil(result.length / dataPerPage);

  useEffect(() => {
    let filtered = result;
    if (selectedCategories.length > 0) {
      filtered = result.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }
    const start = active * dataPerPage;
    const end = start + dataPerPage;
    const pagedData = filtered.slice(start, end);
    setPaginatedData(pagedData);
  }, [active, selectedCategories, result]);

  return (
    <div className="flex flex-col items-center">
      <div className="my-4 ">
        <button
          onClick={handlePrev}
          disabled={active === 0}
          className={`cursor-pointer ${
            active === 0 ? "text-gray-300" : "text-black"
          }`}
        >
          {" "}
          <FaArrowLeft />
        </button>
        <span className="p-2 border-2 border-solid m-2 cursor-pointer rounded-xl">
          {active + 1}
        </span>
        <button
          onClick={handleNext}
          disabled={active === totalPage - 1}
          className={`cursor-pointer ${
            active === totalPage - 1 ? "text-gray-300" : "text-black"
          }`}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="p-2">
        <table className="border-gray-400 border-1">
          <thead>
            <tr>
              <th className="w-[15em]">Title</th>
              <th className="w-[20em]">Description</th>
              <th className="w-[15em] flex justify-center">
                <span>Price</span>
                <span className="cursor-pointer p-2 hover:bg-gray-400 hover: rounded-xl">
                  <FaArrowDownWideShort onClick={handleSortPrice} />
                </span>
              </th>
              <th className="w-[15em]">Discounted Price</th>
              <th className="w-[15em]">Brand</th>

              <th className="w-[15em] flex justify-center">
                <span>Category</span>
                <span className="cursor-pointer p-2 hover:bg-gray-400 hover: rounded-xl">
                  <FaFilter
                    onClick={() => setShowCategorydialog(!showCategorydialog)}
                  />
                </span>
                {showCategorydialog && (
                  <div className="absolute top-39 right-20 bg-white border shadow-md p-2 z-50 w-50 text-left">
                    <div>Select Category</div>
                    <div className="m-2">
                      {categoryList.map((cat) => (
                        <div>
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat)}
                            onChange={() => {
                              setSelectedCategories((prev) =>
                                prev.includes(cat)
                                  ? prev.filter((item) => item !== cat)
                                  : [...prev, cat]
                              );
                            }}
                          />
                          <label>{cat}</label>
                        </div>
                      ))}
                    </div>
                    <button
                      className="bg-gray-300 rounded-md p-1"
                      onClick={() => setShowCategorydialog(false)}
                    >
                      Apply Changes
                    </button>
                  </div>
                )}
              </th>

              <th className="w-[15em]">Image</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, key) => (
              <tr className="border-gray-400 border-1">
                <td className="w-[15em]">{item.title}</td>
                <td className="line-clamp-1 w-[20em]">{item.description}</td>
                <td className="w-[15em]">{item.price}</td>
                <td className="w-[15em]">{item.discountPercentage}</td>
                <td className="w-[15em]">{item.brand}</td>
                <td className="w-[15em]">{item.category}</td>
                <td className="w-[15em]">
                  <img className="w-20 h-20" src={item.thumbnail} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
