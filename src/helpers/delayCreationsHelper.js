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
  }, 400);
}