import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { sectionName } from "./type";

/* 
  function used to set the header section to corresponding section name based on scrolling
  it will the update the value of the header section.
  used by react intersection observer
  we add an threshold in changing the header section , scroll to certain content in a section.
*/

export function useSectionView(sectionName: sectionName, threshold = 0.75) {

  const { ref, inView } = useInView({
    threshold, // content view
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}