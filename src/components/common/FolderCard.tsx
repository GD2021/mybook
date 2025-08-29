import type { BookmarkFolder } from '../../types';

interface FolderCardProps {
  item: BookmarkFolder;
}

const FolderCard = ({ item }: FolderCardProps) => {
  // You can use a different icon for folders
  const folderIcon = '/src/assets/folder-icon.svg'; // Create or find a folder icon

  return (
    <div
      className="block p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center">
        <img
          src={folderIcon}
          alt={`${item.title} icon`}
          className="w-10 h-10 mr-4 object-contain"
        />
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">{item.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default FolderCard;