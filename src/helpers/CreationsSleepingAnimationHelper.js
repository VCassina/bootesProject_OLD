import { useEffect, useRef } from "react";

function CreationsSleepingAnimationHelper() {
  const sleepingRef = useRef(null);

  useEffect(() => {
    const sleepingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sleepingRef.current.classList.add(
            "creations_content_upper-title-sleepingAnimation"
          );
        }
      });
    });
    const sleepingRefCurrent = sleepingRef.current;
    if (sleepingRefCurrent) {
      sleepingObserver.observe(sleepingRefCurrent);
    }

  }, []);

  return { sleepingRef };
}

export default CreationsSleepingAnimationHelper;