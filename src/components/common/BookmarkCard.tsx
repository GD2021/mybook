import type { BookmarkLink } from '../../types';

interface BookmarkCardProps {
  item: BookmarkLink;
}

const BookmarkCard = ({ item }: BookmarkCardProps) => {
  const defaultIcon = '/src/assets/default-icon.svg'; // Assuming you have a default icon

  const handleIconError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultIcon;
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center">
        <img
          src={item.icon || defaultIcon}
          alt={`${item.title} icon`}
          className="w-10 h-10 mr-4 object-contain"
          onError={handleIconError}
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          {item.description && (
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          )}
        </div>
      </div>
    </a>
  );
};

export default BookmarkCard;