import React from 'react';
import usePintreeStore from '../../store/usePintreeStore';
import CategoryItem from './CategoryItem';
import { Sun, Moon, Settings } from 'lucide-react'; // Assuming lucide-react for icons

const Sidebar: React.FC = () => {
  const { allBookmarks, selectedCategoryTitle, selectCategory } = usePintreeStore();

  const categoryTitles = Object.keys(allBookmarks);

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <div className="flex items-center mb-8">
        <Settings className="w-8 h-8 mr-3 text-blue-400" />
        <h1 className="text-xl font-bold">工具管理器</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {categoryTitles.map((title) => (
          <CategoryItem
            key={title}
            title={title}
            isSelected={title === selectedCategoryTitle}
            onClick={() => selectCategory(title)}
          />
        ))}
      </nav>

      <div className="mt-auto">
        <div className="flex items-center justify-center space-x-2 p-2 bg-gray-900 rounded-lg">
          <button className="p-2 rounded-md bg-blue-600">
            <Sun className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-700">
            <Moon className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;