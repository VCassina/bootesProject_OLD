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

          // Si je veux produire cet effet à chaque fois que l'objet est visible...
          // Peut-être le ferais-je également pour le "Bootes Project" ?
          // Cela peut créer un site très dynamique.
          // Si seulement j'avais un graphiste...

        // } else {
        //   sleepingRef.current.classList.remove(
        //     "title-creations-sleepingAnimation"
        //   );
        }
      });
    });

    // Plus nécéssaire car j'ai décidé de ne plus utiliser cette animation.
    // const wakingObserver = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       wakingRef.current.classList.add("title-creations-wakingUpAnimation");
    //     } else {
    //       wakingRef.current.classList.remove(
    //         "title-creations-wakingUpAnimation"
    //       );
    //     }
    //   });
    // });

    const sleepingRefCurrent = sleepingRef.current;
    // const wakingRefCurrent = wakingRef.current;

    if (sleepingRefCurrent) {
      sleepingObserver.observe(sleepingRefCurrent);
    }

    // if (wakingRefCurrent) {
    //   wakingObserver.observe(wakingRefCurrent);
    // }
  }, []);

  return { sleepingRef, wakingRef };
}

export default CreationsSleepingAnimationHelper;