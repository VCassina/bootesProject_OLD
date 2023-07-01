import { useEffect } from "react";

const TitleAnimationHelper = (classToAdd, valueRef) => {
  useEffect(() => {
    const sleepingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd);
          sleepingObserver.unobserve(entry.target);
        }
      });
    });

    const valueRefCurrent = valueRef.current;
    if (valueRefCurrent) {
      sleepingObserver.observe(valueRefCurrent);
    }

    return () => {
      if (valueRefCurrent) {
        sleepingObserver.unobserve(valueRefCurrent);
      }
    };
  }, [classToAdd, valueRef]);

  return valueRef;
};

export default TitleAnimationHelper;
