import React from 'react';

const RiskSlider = ({ label, value, onChange, min = 1, max = 5, minLabel, maxLabel }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}: <span className="font-bold text-blue-600">{value}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
};

export default RiskSlider;