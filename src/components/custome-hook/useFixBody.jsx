import { useEffect } from "react";

export function useFixBody(isOpen) {
  useEffect(() => {
    isOpen
      ? (document.body.style.position = "fixed")
      : (document.body.style.position = "inherit");
  }, [isOpen]);
}
