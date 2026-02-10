import React from 'react';

const TableHeader = ({ label, sortKey, currentSort, onSort }) => {
  const isSorted = currentSort.field === sortKey;
  const arrow = isSorted ? (currentSort.direction === 'asc' ? ' ↑' : ' ↓') : '';

  return (
    <th
      onClick={() => onSort && onSort(sortKey)}
      className={`p-2 text-left ${onSort ? 'cursor-pointer hover:bg-gray-200' : ''}`}
    >
      {label}{arrow}
    </th>
  );
};

export default TableHeader;