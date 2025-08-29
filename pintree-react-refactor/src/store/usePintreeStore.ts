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
    const data = pintreeData as unknown as PintreeData;
    const firstCategoryTitle = Object.keys(data)[0];
    set({
      allBookmarks: data,
      selectedCategoryTitle: firstCategoryTitle,
      currentItems: data[firstCategoryTitle] || [],
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