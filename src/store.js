import create from 'zustand';

export const useStore = create((set) => ({
  isTabletteDisplay: false,
  isLowTabletteDisplay: false,
  setIsTabletteDisplay: (newVal) => set({ isTabletteDisplay: newVal }),
  setIsLowTabletteDisplay: (newVal) => set({ isLowTabletteDisplay: newVal }),
}));
