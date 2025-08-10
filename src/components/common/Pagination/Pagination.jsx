const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;
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
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages && typeof newPage === "number") {
      onPageChange(newPage);
    }
  };

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300 disabled:opacity-50"
      >
        First
      </button>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300 disabled:opacity-50"
      >
        Prev
      </button>

      {getPageNumbers().map((pageNum, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(pageNum)}
          className={`rounded px-3 py-1 text-sm ${
            pageNum === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } ${typeof pageNum !== "number" ? "cursor-default" : ""}`}
          disabled={typeof pageNum !== "number"}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>

      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300 disabled:opacity-50"
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
