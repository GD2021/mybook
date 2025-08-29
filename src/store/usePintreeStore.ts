import { create } from 'zustand';
import type { PintreeData, BookmarkItem } from '../types';
import pintreeData from '../data/pintree.json';

interface PintreeState {
  allBookmarks: PintreeData;
  selectedCategoryTitle: string;
  currentItems: BookmarkItem[];
}

interface PintreeActions {
  loadInitialData: () => void;
  selectCategory: (title: string) => void;
}

const usePintreeStore = create<PintreeState & PintreeActions>((set, get) => ({
  allBookmarks: {},
  selectedCategoryTitle: '',
  currentItems: [],
  loadInitialData: () => {
    const processNode = (node: any, path: string, allData: PintreeData) => {
      if (node.type === 'folder') {
        const newPath = path ? `${path} / ${node.title}` : node.title;
        if (node.children) {
          const items: BookmarkItem[] = node.children.filter(
            (child: any) => child.type === 'link',
          );
          if (items.length > 0) {
            allData[newPath] = items;
          }
          node.children.forEach((child: any) =>
            processNode(child, newPath, allData),
          );
        }
      }
    };

    const allData: PintreeData = {};
    pintreeData.forEach((rootNode: any) => processNode(rootNode, '', allData));

    const firstCategoryTitle = Object.keys(allData)[0] || '';
    set({
      allBookmarks: allData,
      selectedCategoryTitle: firstCategoryTitle,
      currentItems: allData[firstCategoryTitle] || [],
    });
  },
  selectCategory: (title: string) => {
    const { allBookmarks } = get();
    set({
      selectedCategoryTitle: title,
      currentItems: allBookmarks[title] || [],
    });
  },
}));

export default usePintreeStore;