import React from 'react';
import usePintreeStore from '../../store/usePintreeStore';
import CategoryItem from './CategoryItem';
import { Sun, Moon, Settings } from 'lucide-react'; // Assuming lucide-react for icons

const Sidebar: React.FC = () => {
  const { allBookmarks, selectedCategoryTitle, selectCategory } = usePintreeStore();

  const categoryTitles = Object.keys(allBookmarks);

  return (
    <aside className="w-64 bg-card text-card-foreground flex flex-col p-4 border-r border-border">
      <div className="flex items-center mb-8">
        <div className="p-2 bg-primary rounded-lg mr-3">
          <Settings className="w-6 h-6 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold">工具管理器</h1>
      </div>

      <nav className="flex-1 space-y-1">
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
        <div className="flex items-center justify-center space-x-2 p-1 bg-secondary rounded-lg">
          <button className="p-2 rounded-md bg-primary text-primary-foreground">
            <Sun className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-muted">
            <Moon className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;