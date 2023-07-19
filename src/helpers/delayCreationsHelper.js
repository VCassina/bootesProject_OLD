import { useEffect } from "react";

export function handleElementChangeWithTimer(
  index,
  selectedElement,
  setSelectedElement,
  setSelectedImage,
  setAnimateOut,
  dataSlider,
  setNewData
) {
  if (selectedElement === index) {
    return null;
  }
  setAnimateOut(true);
  setSelectedElement(index);
  setTimeout(() => {
    setSelectedImage(index);
    setAnimateOut(false);
    setNewData(dataSlider[index]);
  }, 350);
}

export function useSliderEffect(
  selectedElement,
  setSelectedElement,
  setSelectedImage,
  setAnimateOut,
  dataSlider,
  setNewData
) {
  useEffect(() => {
    let timeoutId = null;

    if (selectedElement !== null) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setSelectedImage(selectedElement);
        setAnimateOut(false);
        setNewData(dataSlider[selectedElement]);
      }, 350);
    }

    return () => clearTimeout(timeoutId);
  }, [
    selectedElement,
    setSelectedElement,
    setSelectedImage,
    setAnimateOut,
    dataSlider,
    setNewData,
  ]);
}