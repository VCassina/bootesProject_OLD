import { useEffect } from 'react';
import { useStore } from '../store';

export const useWindowResize = () => {
  const setIsTabletteDisplay = useStore((state) => state.setIsTabletteDisplay);
  const setIsLowTabletteDisplay = useStore((state) => state.setIsLowTabletteDisplay);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsTabletteDisplay(windowWidth >= 1024 && windowWidth < 1280);
      setIsLowTabletteDisplay(windowWidth >= 0 && windowWidth < 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsTabletteDisplay, setIsLowTabletteDisplay]);
};
