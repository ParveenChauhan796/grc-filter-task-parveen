import React from 'react';

const HeatmapCell = ({ count, assets, backgroundColor }) => {
  const title = assets.length > 0 ? `Assets: ${assets.join(', ')}` : 'No risks';

  return (
    <td
      className={`border p-4 text-center cursor-pointer ${backgroundColor}`}
      title={title}
    >
      <div className="text-2xl font-bold">{count}</div>
      {count > 0 && (
        <div className="text-xs mt-1">
          {count} risk{count > 1 ? 's' : ''}
        </div>
      )}
    </td>
  );
};

export default HeatmapCell;