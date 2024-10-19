import React from 'react';
import { FaPlus } from 'react-icons/fa';

const SectionCard = ({ title, description, onAddClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button onClick={onAddClick} className="text-blue-500">
          <FaPlus className="inline mr-1" /> Add {title.toLowerCase()}
        </button>
      </div>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default SectionCard;
