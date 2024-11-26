import React from "react";
import { usePagination } from "../customHooks/usePagination";
import "./pagination.css";

function Pagination({ currentPage, totalCount, pageSize, onPageChange }) {
  const pageinationView = usePagination(currentPage, totalCount, pageSize);

  const handlePageChange = (setPage) => {
    if(setPage === "...") return;
    onPageChange(setPage);
  };

  const onPreviousClick = () => {
    if (currentPage !== 1) onPageChange(currentPage - 1);
  };

  const onNextClick = () => {
    if (currentPage !== Math.ceil(totalCount / pageSize)) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="page-box">
      <div className={`index-box ${currentPage === 1 ? "disabled": ""}`} onClick={() => onPreviousClick()}>
        <span>Previous</span>
      </div>
      {pageinationView &&
        pageinationView.map((el,ind) => {
          return (
            <div
              key={ind}
              className={`index-box ${el === currentPage ? "selected" : ""}`}
              onClick={() => handlePageChange(el)}
            >
              <span>{el}</span>
            </div>
          );
        })}
      <div className={`index-box ${currentPage === Math.ceil(totalCount / pageSize) ? "disabled": ""}`} onClick={() => onNextClick()}>
        <span>Next</span>
      </div>
    </div>
  );
}

export default Pagination;
