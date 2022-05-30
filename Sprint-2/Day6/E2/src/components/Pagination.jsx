import React from "react";

const Pagination = ({ page, setPage, count, setCount, limit, setLimit }) => {


  return (
    <div>
      <button data-cy="pagination-first-button" disabled={page <= 1} onClick={() => setPage(1)}>First</button>
      <button data-cy="pagination-previous-button" disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
      <select data-cy="pagination-limit-select" onChange={(e) => setLimit(+(e.target.value))}>
        <option data-cy="pagination-limit-3" value={3}>3</option>

        <option data-cy="pagination-limit-6" value={6}>6</option>

        <option data-cy="pagination-limit-9" value={9}>9</option>
      </select>

      <button data-cy="pagination-next-button" disabled={count < (page * limit) + 1} 
      onClick={() => setPage(page + 1)}>Next</button>
      <button data-cy="pagination-last-button" disabled={count < (page * limit) + 1} 
      onClick={() => setPage( limit*page )}>Last</button>
    </div>
  );
};

export default Pagination;