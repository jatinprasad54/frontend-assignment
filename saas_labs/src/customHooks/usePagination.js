const range = (start, end) => {
    let temp = [];
    for (let i = start; i <= end; i++) {
      temp.push(i);
    }
    return temp;
  };
  export const usePagination = (
    currentPage,
    totalCount,
    pageSize,
    siblingCount = 1
  ) => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumber = siblingCount + 1;
    if (totalPageCount < totalPageNumber) return range(1, totalPageCount);
  
    const leftSiblingCount = Math.max(currentPage - 1, 1);
    const rightSiblingCount = Math.min(currentPage + 1, totalPageCount);
  
    const shouldShowLeftDots = leftSiblingCount > 2;
    const shouldShowRighDots = rightSiblingCount < totalPageCount - 2;
  
    if (shouldShowLeftDots && !shouldShowRighDots) {
      let calcRange = range(totalPageCount - 4, totalPageCount);
      return [1, "...", ...calcRange];
    } else if (!shouldShowLeftDots && shouldShowRighDots) {
      let calcRange = range(1, 5);
      return [...calcRange, "...", totalPageCount];
    } else if (shouldShowLeftDots && shouldShowLeftDots) {
      let calcRange = range(leftSiblingCount, rightSiblingCount);
      return [1, "...", ...calcRange, "...", totalPageCount];
    }
  };
  