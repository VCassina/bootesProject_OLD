import create from 'zustand';

export const useStore = create((set) => ({
  isLowDesktopDisplay: false,
  isTabletteDisplay: false,
  isLowTabletteDisplay: false,
  isMobileDisplay: false,
  setIsLowDesktopDisplay: (newVal) => set({ isLowDesktopDisplay: newVal }),
  setIsTabletteDisplay: (newVal) => set({ isTabletteDisplay: newVal }),
  setIsLowTabletteDisplay: (newVal) => set({ isLowTabletteDisplay: newVal }),
  setIsMobileDisplay: (newVal) => set ({ isMobileDisplay: newVal }),
}));
