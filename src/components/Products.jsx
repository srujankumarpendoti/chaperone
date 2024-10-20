import { filterItems, products } from "../constants";
import { MdKeyboardArrowDown } from "react-icons/md";

import ProductItem from "./ProductItem";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

const Products = () => {
  const [page, setPage] = useState(1);
  const [productsList, setProductsList] = useState([]);
  const itemsPerPage = 10;
  useEffect(() => {
    setProductsList(products);
  }, []);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProductItems = productsList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productsList.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="w-full flex justify-between gap-6 md:gap-12">
      <div className=" hidden md:block min-w-64   p-4 bg-[#F0FFE5] text-[#6E6E6E] text-base h-min">
        <div className="flex justify-between items-center border-b pb-4">
          <p className="w-">Filter</p>
          <button className="">CLEAR ALL</button>
        </div>
        <ul>
          {filterItems.map((item) => (
            <li
              key={item}
              className="flex justify-between items-center border-t py-3 text-[#6E6E6E] text-base"
            >
              <p>{item}</p>
              <button className="">+</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white w-full">
        <div className="flex items-center gap-10 ">
          <h2 className="text-[#6A6A6A] text-sm font-normal">
            {productsList.length} products
          </h2>
          <div className="flex justify-between items-center bg-[#165315] text-white font-bold text-sm md:text-base px-2 py-1">
            SORT BY
            <button>
              <MdKeyboardArrowDown />
            </button>
          </div>
        </div>

        <div className="flex justify-between md:justify-start flex-wrap flex-auto  md:gap-8 my-10">
          {currentProductItems.map((product, index) => (
            <ProductItem key={index + 1} product={product} />
          ))}
        </div>
        <Pagination pageNumbers={pageNumbers} setPage={setPage} page={page} />
      </div>
    </section>
  );
};

export default Products;
