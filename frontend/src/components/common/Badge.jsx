import React from 'react';

const Badge = ({ level, children }) => {
  const colors = {
    Low: 'bg-green-200 text-green-800',
    Medium: 'bg-yellow-200 text-yellow-800',
    High: 'bg-orange-200 text-orange-800',
    Critical: 'bg-red-200 text-red-800',
  };

  return (
    <span className={`px-2 py-1 rounded text-sm font-medium ${colors[level] || 'bg-gray-200 text-gray-800'}`}>
      {children}
    </span>
  );
};

export default Badge;