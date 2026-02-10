import React from 'react';

const Card = ({ children, className = '', title = null }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {title && (
        <div className="bg-gray-50 px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;