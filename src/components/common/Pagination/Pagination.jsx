import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { RiArrowLeftSLine } from "react-icons/ri";
import clsx from "clsx";
import { useState, useEffect } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange, styles }) => {
  const [maxPagesToShow, setMaxPagesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setMaxPagesToShow(window.innerWidth < 768 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const halfMax = Math.floor(maxPagesToShow / 2);

    if (totalPages <= maxPagesToShow + 1) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - halfMax);
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      if (startPage > 2) {
        pageNumbers.push("...");
      } else if (startPage === 2) {
        pageNumbers.push(1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pageNumbers.push("...");
      }
    }

    return pageNumbers;
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages && typeof newPage === "number") {
      onPageChange(newPage);
    }
  };

  const baseButtonClasses = clsx(
    "flex items-center justify-center rounded-[50%] bg-transparent text-sm transition hover:bg-gray-200 disabled:opacity-50 appearance-none",
    "h-[34px] w-[34px] border border-[--grey-20]",
    "md:h-[44px] md:w-[44px]",
  );

  const iconClasses = (isDisabled) =>
    clsx(isDisabled ? "text-gray-400" : "text-gray-900");

  return (
    <div className={clsx("flex items-center justify-center gap-2", styles)}>
      {/* First */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className={baseButtonClasses}
      >
        <MdOutlineKeyboardDoubleArrowLeft
          className={iconClasses(currentPage === 1)}
          size={22}
        />
      </button>

      {/* Prev */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={baseButtonClasses}
      >
        <RiArrowLeftSLine
          className={iconClasses(currentPage === 1)}
          size={22}
        />
      </button>

      {/* Numbers */}
      {getPageNumbers().map((pageNum, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(pageNum)}
          className={clsx(
            "flex h-[34px] w-[34px] appearance-none items-center justify-center rounded-[100%] px-2 py-1 text-[16px] font-bold",
            "md:h-[44px] md:w-[44px] md:px-3 md:text-[18px]",
            pageNum === currentPage
              ? "bg-[#f6b83d] text-white"
              : "border border-[--grey-005] bg-transparent text-[--gray-900] hover:bg-gray-200",
            typeof pageNum !== "number" ? "cursor-default" : "",
          )}
          disabled={typeof pageNum !== "number"}
        >
          {pageNum}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={baseButtonClasses}
      >
        <RiArrowLeftSLine
          className={clsx(
            iconClasses(currentPage === totalPages),
            "rotate-180",
          )}
          size={22}
        />
      </button>

      {/* Last */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={baseButtonClasses}
      >
        <MdOutlineKeyboardDoubleArrowLeft
          className={clsx(
            iconClasses(currentPage === totalPages),
            "rotate-180",
          )}
          size={22}
        />
      </button>
    </div>
  );
};

export default Pagination;
