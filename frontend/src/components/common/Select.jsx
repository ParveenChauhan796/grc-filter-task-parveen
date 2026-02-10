import React from 'react';

const Select = ({ label, value, onChange, options, className = '' }) => {
  return (
    <div className="inline-block">
      {label && <label className="text-sm font-medium mr-2">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;