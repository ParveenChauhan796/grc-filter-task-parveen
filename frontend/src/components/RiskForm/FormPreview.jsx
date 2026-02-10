import React from 'react';

const FormPreview = ({ score, level }) => {
  const getLevelColor = (level) => {
    const colors = {
      Low: 'text-green-600',
      Medium: 'text-yellow-600',
      High: 'text-orange-600',
      Critical: 'text-red-600',
    };
    return colors[level] || 'text-gray-600';
  };

  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
      <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
      <div className="flex items-center gap-2">
        <span className="text-lg">
          Score: <span className="font-bold text-blue-700">{score}</span>
        </span>
        <span className="text-gray-400">|</span>
        <span className="text-lg">
          Level: <span className={`font-bold ${getLevelColor(level)}`}>{level}</span>
        </span>
      </div>
    </div>
  );
};

export default FormPreview;