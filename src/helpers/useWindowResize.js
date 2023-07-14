import { useEffect } from 'react';
import { useStore } from '../store';

export const useWindowResize = () => {
  const setIsTabletteDisplay = useStore((state) => state.setIsTabletteDisplay);
  const setIsLowTabletteDisplay = useStore((state) => state.setIsLowTabletteDisplay);
  const setIsMobileDisplay = useStore((state) => state.setIsMobileDisplay);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsTabletteDisplay(windowWidth >= 1024 && windowWidth < 1280);
      setIsLowTabletteDisplay(windowWidth >= 768 && windowWidth < 1024);
      setIsMobileDisplay(windowWidth >= 0 && windowWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsTabletteDisplay, setIsLowTabletteDisplay, setIsMobileDisplay]);
};
