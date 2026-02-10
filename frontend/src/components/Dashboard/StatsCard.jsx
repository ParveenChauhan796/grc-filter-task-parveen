import React from 'react';

const StatsCard = ({ title, value, bgColor = 'bg-blue-100', textColor = 'text-blue-900', subtitle = null }) => {
  return (
    <div className={`${bgColor} p-4 rounded-lg shadow`}>
      <h3 className={`text-sm font-medium ${textColor} opacity-75`}>{title}</h3>
      <p className={`text-3xl font-bold ${textColor} mt-1`}>{value}</p>
      {subtitle && (
        <div className="text-xs mt-2 opacity-75">{subtitle}</div>
      )}
    </div>
  );
};

export default StatsCard;