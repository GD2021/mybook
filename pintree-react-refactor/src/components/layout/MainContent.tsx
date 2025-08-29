import usePintreeStore from '../../store/usePintreeStore';
import type { BookmarkItem } from '../../types';
import BookmarkCard from '../common/BookmarkCard';
import FolderCard from '../common/FolderCard';

const MainContent = () => {
  const { currentItems, selectedCategoryTitle } = usePintreeStore();

  return (
    <main className="flex-1 p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{selectedCategoryTitle}</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          添加工具
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {currentItems.map((item: BookmarkItem) => {
          if (item.type === 'link') {
            return <BookmarkCard key={item.id} item={item} />;
          }
          if (item.type === 'folder') {
            return <FolderCard key={item.id} item={item} />;
          }
          return null;
        })}
      </div>
    </main>
  );
};

export default MainContent;