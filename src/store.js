import create from 'zustand';

export const useStore = create((set) => ({
  isTabletteDisplay: false,
  isLowTabletteDisplay: false,
  isMobileDisplay: false,
  setIsTabletteDisplay: (newVal) => set({ isTabletteDisplay: newVal }),
  setIsLowTabletteDisplay: (newVal) => set({ isLowTabletteDisplay: newVal }),
  setIsMobileDisplay: (newVal) => set ({ isMobileDisplay: newVal }),
}));
