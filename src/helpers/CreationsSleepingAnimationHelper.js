import { useEffect, useRef } from "react";

function CreationsSleepingAnimationHelper() {
  const sleepingRef = useRef(null);
  const wakingRef = useRef(null);

  useEffect(() => {
    const sleepingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sleepingRef.current.classList.add(
            "title-creations-sleepingAnimation"
          );
        } else {
          sleepingRef.current.classList.remove(
            "title-creations-sleepingAnimation"
          );
        }
      });
    });

    const wakingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          wakingRef.current.classList.add("title-creations-wakingUpAnimation");
        } else {
          wakingRef.current.classList.remove(
            "title-creations-wakingUpAnimation"
          );
        }
      });
    });

    const sleepingRefCurrent = sleepingRef.current;
    const wakingRefCurrent = wakingRef.current;

    if (sleepingRefCurrent) {
      sleepingObserver.observe(sleepingRefCurrent);
    }

    if (wakingRefCurrent) {
      wakingObserver.observe(wakingRefCurrent);
    }

    return () => {
      if (sleepingRefCurrent) {
        sleepingObserver.unobserve(sleepingRefCurrent);
      }

      if (wakingRefCurrent) {
        wakingObserver.unobserve(wakingRefCurrent);
      }
    };
  }, []);

  return { sleepingRef, wakingRef };
}

export default CreationsSleepingAnimationHelper;