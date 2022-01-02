import { useEffect } from "react";

export const useClickOutside = (container, setDropdown) => {
  //Run hook for outside click
  useEffect(() => {
    function closeModal(event) {
      if (container.current && !container.current.contains(event.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [container, setDropdown]);
};
