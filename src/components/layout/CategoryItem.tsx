import React from 'react';

interface CategoryItemProps {
  title: string;
  icon?: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, icon, isSelected, onClick }) => {
  const baseClasses =
    'flex items-center w-full h-10 px-4 rounded-lg cursor-pointer transition-colors duration-200';
  const selectedClasses = 'bg-blue-600 text-white';
  const unselectedClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white';

  return (
    <div
      className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={title} className="w-5 h-5 mr-3" />}
      <span className="font-medium">{title}</span>
    </div>
  );
};

export default CategoryItem;