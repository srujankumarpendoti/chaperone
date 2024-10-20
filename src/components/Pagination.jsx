/* eslint-disable react/prop-types */
const Pagination = ({ pageNumbers, setPage, page }) => {
  const maxPage = Math.max(...pageNumbers);

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
  };
  const prevBtnclass = page === 1 ? "bg-gray-500" : "bg-[#144D14] ";
  const nextBtnclass = page === maxPage ? "bg-gray-500" : "bg-[#144D14] ";

  return (
    <div className="w-full flex justify-center items-center gap-2">
      <button
        disabled={page === 1}
        onClick={handlePrevPage}
        className={`${prevBtnclass}  rounded-full py-2 px-3 lg:px-12 text-xs lg:text-base text-white font-semibold `}
      >
        Prev
      </button>
      {pageNumbers.map((eachNo) => (
        <button
          onClick={() => setPage(eachNo)}
          key={eachNo}
          className={`border  rounded-lg w-5 md:w-8 py-2 text-xs lg:text-base font-semibold ${
            page === eachNo
              ? "bg-[#F3A939] text-white"
              : "border-[#144D14] text-[#144D14]"
          }`}
        >
          {eachNo}
        </button>
      ))}
      {}
      <button
        disabled={page === maxPage}
        onClick={handleNextPage}
        className={`${nextBtnclass}  rounded-full  py-2 px-3 lg:px-12 text-xs lg:text-base text-white font-semibold `}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
