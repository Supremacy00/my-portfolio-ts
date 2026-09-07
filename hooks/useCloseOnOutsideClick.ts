import { useEffect, RefObject } from "react";

const useCloseOnOutsideClick = (
  isActive: boolean,
  closeHandler: () => void,
  ...refs: RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        refs.every(
          (ref) => ref.current && !ref.current.contains(event.target as Node),
        )
      ) {
        closeHandler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive, closeHandler, refs]);
};

export default useCloseOnOutsideClick;
