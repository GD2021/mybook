export interface BookmarkLink {
  type: 'link';
  id: string;
  title: string;
  url: string;
  icon?: string;
  tags?: string[];
  description?: string;
}

export interface BookmarkFolder {
  type: 'folder';
  id: string;
  title: string;
  children: BookmarkItem[];
}

export type BookmarkItem = BookmarkLink | BookmarkFolder;

export interface PintreeData {
  [category: string]: BookmarkItem[];
}