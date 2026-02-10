import React from 'react';

const HeatmapLegend = () => {
  const levels = [
    { name: 'Low', color: 'bg-green-300', range: '1-5' },
    { name: 'Medium', color: 'bg-yellow-300', range: '6-12' },
    { name: 'High', color: 'bg-orange-300', range: '13-18' },
    { name: 'Critical', color: 'bg-red-300', range: '19-25' },
  ];

  return (
    <div className="flex gap-4 mt-4 justify-center flex-wrap">
      {levels.map(level => (
        <div key={level.name} className="flex items-center gap-2">
          <div className={`w-6 h-6 ${level.color} border border-gray-400`}></div>
          <span className="text-sm">
            {level.name} ({level.range})
          </span>
        </div>
      ))}
    </div>
  );
};

export default HeatmapLegend;