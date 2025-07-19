import { create } from 'zustand';

interface UIState {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  clearFilters: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeFilter: '',
  setActiveFilter: (filter) => set({ activeFilter: filter }),
  clearFilters: () => set({ activeFilter: '' })
})); 