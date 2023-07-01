import { useEffect } from "react";

const TitleAnimationHelper = (classToAdd, valueRef) => {
  useEffect(() => {
    const sleepingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd);
        } else {
          entry.target.classList.remove(classToAdd);
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
};

export default TitleAnimationHelper;
