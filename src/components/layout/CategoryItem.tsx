import React from 'react';

interface CategoryItemProps {
  title: string;
  icon?: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, icon, isSelected, onClick }) => {
  const baseClasses =
    'flex items-center w-full h-10 px-3 rounded-lg cursor-pointer transition-colors duration-200';
  const selectedClasses = 'bg-primary text-primary-foreground';
  const unselectedClasses = 'text-muted-foreground hover:bg-accent hover:text-accent-foreground';

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