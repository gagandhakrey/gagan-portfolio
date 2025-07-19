import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface UIState {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  clearFilters: () => void;
}

export const useUIStore = create<UIState>()(
  subscribeWithSelector((set, get) => ({
    activeFilter: '',
    setActiveFilter: (filter) => {
      const currentFilter = get().activeFilter;
      if (currentFilter !== filter) {
        set({ activeFilter: filter });
      }
    },
    clearFilters: () => {
      const currentFilter = get().activeFilter;
      if (currentFilter !== '') {
        set({ activeFilter: '' });
      }
    }
  }))
); 